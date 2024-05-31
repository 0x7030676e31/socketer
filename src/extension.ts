console.debug("Background script loaded!!");
const decoder = new TextDecoder("utf-8");
const encoder = new TextEncoder();

function injectMainFrame(
  data: string,
  filter: browser.webRequest.StreamFilter,
  details: browser.webRequest._OnBeforeRequestDetails
) {
  filter.write(encoder.encode(data));
  filter.close();

  if (!data.includes("window.GLOBAL_ENV =")) {
    return;
  }

  browser.tabs.executeScript(details.tabId, {
    file: "dist/overlay.js"
  });
}

let targetAsset: string | null = null;
let opVar: string | null = null;
let payloadVar: string | null = null;
let eventVar: string | null = null;
let injectionTarget: string | null = null;

(async () => {
  const { socketer } = await browser.storage.local.get("socketer");
  
  targetAsset = socketer?.asset || null;
  opVar = socketer?.opcode || null;
  payloadVar = socketer?.payload || null;
  eventVar = socketer?.event || null;
  injectionTarget = socketer?.injection || null;
  
  console.log("Loaded from storage", { targetAsset, opVar, payloadVar, eventVar, injectionTarget });
})();

browser.storage.local.onChanged.addListener(changes => {
  const socketer = changes.socketer?.newValue;
  
  targetAsset = socketer?.asset || null;
  opVar = socketer?.opcode || null;
  payloadVar = socketer?.payload || null;
  eventVar = socketer?.event || null;
  injectionTarget = socketer?.injection || null;

  console.log("Updated from storage", { targetAsset, opVar, payloadVar, eventVar, injectionTarget });
});


function injectScript(
  data: string,
  filter: browser.webRequest.StreamFilter,
  details: browser.webRequest._OnBeforeRequestDetails
) {
  if (targetAsset === null) {
    const asset = /\{(?<keys>((op|s|t|d):\w+,?){4})\}=(?<target>\w+\.unpack\(\w+\))/.exec(data);
    if (asset === null) {
      filter.write(encoder.encode(data));
      filter.close();
      return;
    }

    targetAsset = details.url.split("/").pop() || null;
    injectionTarget = asset.groups?.target || null;

    console.log(asset.groups?.keys || "");
    opVar = /op:(?<op>\w+)/.exec(asset.groups?.keys || "")?.groups?.op || null;
    payloadVar = /d:(?<payload>\w+)/.exec(asset.groups?.keys || "")?.groups?.payload || null;
    eventVar = /t:(?<event>\w+)/.exec(asset.groups?.keys || "")?.groups?.event || null;

    browser.storage.local.set({
      socketer: {
        asset: targetAsset,
        opcode: opVar,
        payload: payloadVar,
        event: eventVar,
        injection: injectionTarget
      }
    });

    browser.runtime.sendMessage({ type: "asset", payload: targetAsset }).catch(() => console.log("Failed to send message"));
    console.log("Asset found!", { targetAsset, opVar, payloadVar, eventVar, injectionTarget });
  }

  if (
    opVar === null ||
    payloadVar === null ||
    eventVar === null ||
    injectionTarget === null ||
    details.url.split("/").pop() !== targetAsset
  ) {
    filter.write(encoder.encode(data));
    filter.close();
    return;
  }

  const position = data.indexOf(injectionTarget);
  if (position === -1) {
    filter.write(encoder.encode(data));
    filter.close();
    return;
  }

  const before = data.slice(0, position + injectionTarget.length);
  const after = data.slice(position + injectionTarget.length);

  const script = `;if (${opVar} === 0) { fetch("http://localhost:3000/", { method: "POST", body: JSON.stringify({ payload: ${payloadVar}, event: ${eventVar} }) }) };`

  data = before + script + after;
  filter.write(encoder.encode(data));
  filter.close();

  console.log("Script injected!");
  browser.runtime.sendMessage({ type: "injection", payload: "Injected" }).catch(() => console.log("Failed to send message"));
  browser.tabs.executeScript(details.tabId, {
    code: "window.socketerInjected = true;",
  });
}

function middleware(details: browser.webRequest._OnBeforeRequestDetails) {
  if (details.type !== "main_frame" && details.type !== "script") {
    return;
  }
  
  const filter = browser.webRequest.filterResponseData(details.requestId);
  let data = "";

  filter.ondata = event => {
    data += decoder.decode(event.data, { stream: true });
  }

  filter.onstop = async () => {
    if (details.type === "main_frame") {
      injectMainFrame(data, filter, details);
    } else {
      injectScript(data, filter, details);
    }
  }
}

function headerMiddleware(details: browser.webRequest._OnHeadersReceivedDetails) {
  const headers = details.responseHeaders || [];
  return { responseHeaders: headers.filter(header => header.name.toLowerCase() !== "content-security-policy") };
}

browser.webRequest.onBeforeRequest.addListener(middleware, { urls: [ "https://discord.com/*", ] }, [ "blocking" ]);
browser.webRequest.onHeadersReceived.addListener(headerMiddleware, { urls: [ "https://discord.com/*", ] }, [ "blocking", "responseHeaders", ]);

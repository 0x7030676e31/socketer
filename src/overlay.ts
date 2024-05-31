const css = `

#socketer-overlay {
  position: fixed;
  top: 12px;
  right: 12px;
  box-shadow: var(--legacy-elevation-border), var(--legacy-elevation-high);
  background-color: var(--modal-background);
  z-index: 1000;
  min-width: 340px;
  box-sizing: border-box;
  border-radius: 4px;
}

#socketer-header {
  padding: 12px 16px;
  background-color: var(--background-tertiary);
  display: flex;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}

#socketer-injection-icon {
  color: var(--interactive-active);
  margin-right: 8px;
}

#socketer-title {
  flex: 1;
  font-family: var(--font-primary);
  font-size: 20px;
  line-height: 1.2;
  font-weight: 600;
  color: var(--text-normal);
}

#socketer-close-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  background-color: var(--background-secondary);
  color: var(--header-secondary);
  width: 32px;
  min-width: 32px;
  height: 32px;
  min-height: 32px;
  transition: color.2s ease,background-color.2s ease;
}

#socketer-close-wrapper:hover {
  background-color: var(--background-primary);
  color: var(--interactive-active);
}

#socketer-content {
  padding: 16px;
}

#socketer-reload {
  width: 100%;
  box-sizing: border-box;
  height: var(--custom-button-button-sm-height);
  min-width: var(--custom-button-button-sm-width);
  min-height: var(--custom-button-button-sm-height);
  transition: background-color var(--custom-button-transition-duration) ease, color var(--custom-button-transition-duration) ease;
  cursor: pointer;
  color: var(--white-500);
  background-color: var(--brand-experiment);
  user-select: none;
  border-radius: 3px;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  padding: 2px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

#socketer-reload:hover {
  background-color: var(--brand-experiment-560);
}

#socketer-reload:active {
  background-color: var(--brand-experiment-600);
}

#socketer-divider {
  width: 100%;
  box-sizing: border-box;
  height: 1px;
  border-top: thin solid var(--background-modifier-accent);
  margin-top: 10px;
  margin-bottom: 10px;
}

#socketer-label {
  color: var(--header-primary);
  line-height: 24px;
  font-size: 16px;
  font-weight: 500;
}

#socketer-subtext {
  color: var(--header-secondary);
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  user-select: text;
}

`;

function divider() {
  const divider = document.createElement("div");
  divider.id = "socketer-divider";
  
  return divider;
}

let initial = true;
window.addEventListener("load", async () => {
  if (!initial) {
    return;
  }
  
  initial = false;
  
  const overlay = document.createElement("div");
  overlay.id = "socketer-overlay";


  const header = document.createElement("div");
  header.id = "socketer-header";

  const injectionIcon = document.createElement("div");
  injectionIcon.innerHTML = `<svg fill="currentColor" width="24" height="24" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style="overflow: visible; color: currentcolor;" height="1em" width="1em"><path fill-rule="evenodd" d="M13.617 3.844a2.87 2.87 0 0 0-.451-.868l1.354-1.36L13.904 1l-1.36 1.354a2.877 2.877 0 0 0-.868-.452 3.073 3.073 0 0 0-2.14.075 3.03 3.03 0 0 0-.991.664L7 4.192l4.327 4.328 1.552-1.545c.287-.287.508-.618.663-.992a3.074 3.074 0 0 0 .075-2.14zm-.889 1.804a2.15 2.15 0 0 1-.471.705l-.93.93-3.09-3.09.93-.93a2.15 2.15 0 0 1 .704-.472 2.134 2.134 0 0 1 1.689.007c.264.114.494.271.69.472.2.195.358.426.472.69a2.134 2.134 0 0 1 .007 1.688zm-4.824 4.994 1.484-1.545-.616-.622-1.49 1.551-1.86-1.859 1.491-1.552L6.291 6 4.808 7.545l-.616-.615-1.551 1.545a3 3 0 0 0-.663.998 3.023 3.023 0 0 0-.233 1.169c0 .332.05.656.15.97.105.31.258.597.459.862L1 13.834l.615.615 1.36-1.353c.265.2.552.353.862.458.314.1.638.15.97.15.406 0 .796-.077 1.17-.232.378-.155.71-.376.998-.663l1.545-1.552-.616-.615zm-2.262 2.023a2.16 2.16 0 0 1-.834.164c-.301 0-.586-.057-.855-.17a2.278 2.278 0 0 1-.697-.466 2.28 2.28 0 0 1-.465-.697 2.167 2.167 0 0 1-.17-.854 2.16 2.16 0 0 1 .642-1.545l.93-.93 3.09 3.09-.93.93a2.22 2.22 0 0 1-.711.478z" clip-rule="evenodd"></path></svg>`;
  injectionIcon.id = "socketer-injection-icon";

  const title = document.createElement("div");
  title.innerText = "Socketer Overlay";
  title.id = "socketer-title";

  const closeIcon = document.createElement("div");
  closeIcon.innerHTML = `<svg aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path></svg>`;
  closeIcon.id = "socketer-close-wrapper";

  
  const content = document.createElement("div");
  content.id = "socketer-content";

  const reloadButton = document.createElement("button");
  reloadButton.innerText = "Refresh Data";
  reloadButton.id = "socketer-reload";


  /* Injection Container */
  const injectionContainer = document.createElement("div");
  injectionContainer.id = "socketer-container";

  const injectionLabel = document.createElement("div");
  injectionLabel.innerText = "Injection Status";
  injectionLabel.id = "socketer-label";

  const injectionSubtext = document.createElement("div");
  injectionSubtext.innerText = (window as any).socketerInjected === true ? "Injected" : "Not Injected";
  injectionSubtext.id = "socketer-subtext";

  injectionContainer.appendChild(injectionLabel);
  injectionContainer.appendChild(injectionSubtext);
  injectionContainer.appendChild(divider());

  
  /* Asset Container */
  const assetContainer = document.createElement("div");
  assetContainer.id = "socketer-container";

  const assetLabel = document.createElement("div");
  assetLabel.innerText = "Target Asset";
  assetLabel.id = "socketer-label";

  const assetSubtext = document.createElement("div");
  assetSubtext.innerText = await browser.storage.local.get("socketer").then(({ socketer }) => socketer?.asset || "No asset found");
  assetSubtext.id = "socketer-subtext";

  assetContainer.appendChild(assetLabel);
  assetContainer.appendChild(assetSubtext);

  /* Styling */
  const style = document.createElement("style");
  style.innerText = css;


  header.appendChild(injectionIcon);
  header.appendChild(title);
  header.appendChild(closeIcon);


  content.appendChild(reloadButton);
  content.appendChild(injectionContainer);
  content.appendChild(assetContainer);


  overlay.appendChild(style);
  overlay.appendChild(header);
  overlay.appendChild(content);

  document.body.appendChild(overlay);

  closeIcon.addEventListener("click", () => {
    overlay.style.display = "none";
  });

  reloadButton.addEventListener("click", () => {
    browser.storage.local.remove("socketer");
    window.location.reload();
  });

  browser.runtime.onMessage.addListener(async (message) => {
    if (message.type === "injection") {
      injectionSubtext.innerText = message.payload;
    }

    if (message.type === "asset") {
      assetSubtext.innerText = message.payload;
    }
  });
});
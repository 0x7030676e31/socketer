// See: https://github.com/0x7030676e31/socketer
// 5/27/2024 @ 2:20:50 PM
// By: @0x7030676e31

export type CALL_CREATE = {
	voice_states: {
		user_id: string;
		suppress: boolean;
		session_id: string;
		self_video: boolean;
		self_mute: boolean;
		self_deaf: boolean;
		request_to_speak_timestamp: null;
		mute: boolean;
		deaf: boolean;
		channel_id: string;
	}[];
	ringing: [];
	region: string;
	message_id: string;
	embedded_activities: [];
	channel_id: string;
};

export type CALL_DELETE = {
	channel_id: string;
};

export type CALL_UPDATE = {
	ringing: string[];
	region: string;
	message_id: string;
	guild_id: null;
	channel_id: string;
};

export type CHANNEL_CREATE = {
	version: number;
	type: number;
	topic?: null | string;
	rate_limit_per_user: number;
	position: number;
	permission_overwrites: {
		type: number;
		id: string;
		deny: string;
		allow: string;
	}[];
	parent_id: string;
	nsfw: boolean;
	name: string;
	last_message_id: null;
	id: string;
	guild_id: string;
	flags: number;
	user_limit?: number;
	rtc_region?: null;
	bitrate?: number;
};

export type CHANNEL_DELETE = {
	version: number;
	type: number;
	topic?: null | string;
	rate_limit_per_user?: number;
	position: number;
	permission_overwrites: {
		type: number;
		id: string;
		deny: string;
		allow: string;
	}[];
	parent_id: null | string;
	nsfw?: boolean;
	name: string;
	last_message_id?: null | string;
	id: string;
	guild_id: string;
	flags: number;
	user_limit?: number;
	rtc_region?: null;
	bitrate?: number;
	last_pin_timestamp?: string;
};

export type CHANNEL_PINS_ACK = {
	version: number;
	timestamp: string;
	channel_id: string;
};

export type CHANNEL_PINS_UPDATE = {
	last_pin_timestamp: string;
	channel_id: string;
	guild_id?: string;
};

export type CHANNEL_STATUSES = {
	guild_id: string;
	channels: {
		status: string;
		id: string;
	}[];
};

export type CHANNEL_UPDATE = {
	voice_background_display?: null | {
		type: number;
	};
	version: number;
	user_limit?: number;
	type: number;
	theme_color?: null | number;
	rtc_region?: null | string;
	rate_limit_per_user: number;
	position: number;
	permission_overwrites: {
		type: number;
		id: string;
		deny: string;
		allow: string;
	}[];
	parent_id: null | string;
	nsfw: boolean;
	name: string;
	last_message_id: null | string;
	id: string;
	icon_emoji?: {
		name: string;
		id: null | string;
	};
	guild_id: string;
	flags: number;
	bitrate?: number;
	topic?: null | string;
	last_pin_timestamp?: string;
	default_thread_rate_limit_per_user?: number;
	default_auto_archive_duration?: number;
	template?: string;
	default_sort_order?: number;
	default_reaction_emoji?: null;
	default_forum_layout?: number;
	available_tags?: {
		name: string;
		moderated: boolean;
		id: string;
		emoji_name: null | string;
		emoji_id: null | string;
	}[];
};

export type CONVERSATION_SUMMARY_UPDATE = {
	summaries: {
		unsafe: boolean;
		type: number;
		topic: string;
		summ_short: string;
		start_id: string;
		source: number;
		people: string[];
		message_ids: string[];
		id: string;
		end_id: string;
		count: number;
	}[];
	guild_id: string;
	channel_id: string;
};

export type EMBEDDED_ACTIVITY_UPDATE = {
	users: string[];
	update_code: number;
	guild_id: string;
	embedded_activity: {
		type?: null;
		timestamps?: null;
		state?: null;
		secrets?: null;
		name?: string;
		details?: null;
		created_at?: null;
		assets?: null;
		application_id: string;
		activity_id?: string;
	};
	connections: {
		user_id: string;
		metadata: {
			is_eligible_host: boolean;
		};
	}[];
	channel_id: string;
};

export type GUILD_APPLICATION_COMMAND_INDEX_UPDATE = {
	version: number;
	bot_users: [];
	application_command_counts: {};
	guild_id: string;
};

export type GUILD_AUDIT_LOG_ENTRY_CREATE = {
	user_id: string;
	target_id: string;
	reason?: string;
	id: string;
	action_type: number;
	guild_id: string;
	options?: {
		count: string;
		channel_id: string;
	};
	changes: {
		new_value: string;
		key: string;
	}[];
};

export type GUILD_BAN_ADD = {
	user: {
		username: string;
		public_flags: number;
		id: string;
		global_name: null | string;
		discriminator: string;
		clan: null;
		avatar_decoration_data: null | {
			sku_id: string;
			asset: string;
		};
		avatar: null | string;
		bot?: boolean;
	};
	guild_id: string;
};

export type GUILD_BAN_REMOVE = {
	user: {
		username: string;
		public_flags: number;
		id: string;
		global_name: string;
		discriminator: string;
		clan: null;
		avatar_decoration_data: null | {
			sku_id: string;
			asset: string;
		};
		avatar: string;
	};
	guild_id: string;
};

export type GUILD_CREATE = {
	voice_states: {
		user_id: string;
		suppress: boolean;
		session_id: string;
		self_video: boolean;
		self_mute: boolean;
		self_deaf: boolean;
		request_to_speak_timestamp: null;
		mute: boolean;
		deaf: boolean;
		channel_id: string;
		self_stream?: boolean;
	}[];
	version: number;
	threads: [];
	stickers: {
		type: number;
		tags: string;
		name: string;
		id: string;
		guild_id: string;
		format_type: number;
		description: null | string;
		available: boolean;
		asset: string;
	}[];
	stage_instances: [];
	roles: {
		unicode_emoji: null | string;
		tags: {
			bot_id?: string;
			premium_subscriber?: null;
		};
		position: number;
		permissions: string;
		name: string;
		mentionable: boolean;
		managed: boolean;
		id: string;
		icon: null | string;
		hoist: boolean;
		flags: number;
		color: number;
	}[];
	properties: {
		features: string[];
		clan: null;
		splash: null | string;
		nsfw: boolean;
		max_stage_video_channel_users: number;
		hub_type: null;
		incidents_data: null | {
			raid_detected_at: null | string;
			invites_disabled_until: null;
			dms_disabled_until: null | string;
			dm_spam_detected_at: null;
		};
		mfa_level: number;
		safety_alerts_channel_id: null | string;
		id: string;
		latest_onboarding_question_id: null | string;
		preferred_locale: string;
		name: string;
		premium_progress_bar_enabled: boolean;
		verification_level: number;
		vanity_url_code: null | string;
		max_video_channel_users: number;
		system_channel_id: null | string;
		application_id: null;
		icon: null | string;
		discovery_splash: null | string;
		nsfw_level: number;
		description: null | string;
		default_message_notifications: number;
		afk_channel_id: null | string;
		premium_tier: number;
		home_header: null | string;
		explicit_content_filter: number;
		max_members: number;
		owner_id: string;
		rules_channel_id: null | string;
		afk_timeout: number;
		banner: null | string;
		public_updates_channel_id: null | string;
		system_channel_flags: number;
	};
	presences: [];
	premium_subscription_count: number;
	members: {
		user: {
			username: string;
			public_flags: number;
			id: string;
			global_name: null | string;
			display_name: null | string;
			discriminator: string;
			clan: null | {
				tag: string;
				identity_guild_id: string;
				identity_enabled: boolean;
				badge: string;
			};
			bot: boolean;
			avatar_decoration_data: null | {
				sku_id: string;
				asset: string;
			};
			avatar: null | string;
		};
		roles: string[];
		premium_since: null | string;
		pending: boolean;
		nick: null | string;
		mute: boolean;
		joined_at: string;
		flags: number;
		deaf: boolean;
		communication_disabled_until: null | string;
		avatar: null | string;
		unusual_dm_activity_until?: string;
		avatar_decoration_data?: {
			sku_id: string;
			asset: string;
		};
	}[];
	member_count: number;
	lazy: boolean;
	large: boolean;
	joined_at: string;
	id: string;
	guild_scheduled_events: {
		status: number;
		sku_ids: [];
		scheduled_start_time: string;
		scheduled_end_time: null;
		recurrence_rule: {
			start: string;
			interval: number;
			frequency: number;
			end: null;
			count: null;
			by_year_day: null;
			by_weekday: number[];
			by_n_weekday: null;
			by_month_day: null;
			by_month: null;
		};
		privacy_level: number;
		name: string;
		image: null | string;
		id: string;
		guild_scheduled_event_exceptions: [];
		guild_id: string;
		entity_type: number;
		entity_metadata: null | {
			speaker_ids: [];
		};
		entity_id: string;
		description: string;
		creator_id: string;
		channel_id: string;
		auto_start: boolean;
	}[];
	guild_id?: string;
	emojis: {
		roles: [];
		require_colons: boolean;
		name: string;
		managed: boolean;
		id: string;
		available: boolean;
		animated: boolean;
	}[];
	embedded_activities: {
		users: string[];
		update_code: number;
		embedded_activity: {
			type: null;
			timestamps: null;
			state: null;
			secrets: null;
			name: string;
			details: null;
			created_at: null;
			assets: null;
			application_id: string;
			activity_id: string;
		};
		connections: {
			user_id: string;
			metadata: {
				is_eligible_host: boolean;
			};
		}[];
		channel_id: string;
	}[];
	data_mode: string;
	channels: {
		type: number;
		topic?: null | string;
		rate_limit_per_user?: number;
		position: number;
		permission_overwrites: {
			type: number;
			id: string;
			deny: string;
			allow: string;
		}[];
		parent_id?: null | string;
		name: string;
		last_message_id?: null | string;
		id: string;
		icon_emoji?: null | {
			name: string;
			id: null | string;
		};
		flags: number;
		default_auto_archive_duration?: number;
		user_limit?: number;
		rtc_region?: null | string;
		nsfw?: boolean;
		bitrate?: number;
		theme_color?: null | number;
		last_pin_timestamp?: string;
		default_thread_rate_limit_per_user?: number;
		voice_background_display?: null | {
			type: number;
			resource_id: null | string;
		};
		status?: null;
		template?: string;
		default_sort_order?: null | number;
		default_reaction_emoji?: null | {
			emoji_name: null | string;
			emoji_id: null | string;
		};
		default_forum_layout?: number;
		available_tags?: {
			name: string;
			moderated: boolean;
			id: string;
			emoji_name: null | string;
			emoji_id: null | string;
		}[];
		video_quality_mode?: number;
	}[];
	application_command_counts: {};
	unavailable?: boolean;
	activity_instances?: {};
};

export type GUILD_DELETE = {
	id: string;
};

export type GUILD_INTEGRATIONS_UPDATE = {
	guild_id: string;
};

export type GUILD_MEMBERS_CHUNK = {
	not_found: string[];
	members: {
		user: {
			username: string;
			public_flags: number;
			id: string;
			global_name: null | string;
			display_name: null | string;
			discriminator: string;
			clan: null;
			bot: boolean;
			avatar_decoration_data: null | {
				sku_id: string;
				asset: string;
			};
			avatar: null | string;
		};
		roles: string[];
		premium_since: null | string;
		pending: boolean;
		nick: null | string;
		mute: boolean;
		joined_at: string;
		flags: number;
		deaf: boolean;
		communication_disabled_until: null | string;
		avatar: null | string;
		avatar_decoration_data?: {
			sku_id: string;
			asset: string;
		};
		unusual_dm_activity_until?: string;
	}[];
	guild_id: string;
	chunk_index: number;
	chunk_count: number;
	presences?: {
		user: {
			id: string;
		};
		status: string;
		client_status: {
			web: string;
		};
		broadcast: null;
		activities: {
			type: number;
			name: string;
			id: string;
			created_at: number;
		}[];
	}[];
};

export type GUILD_MEMBER_LIST_UPDATE = {
	ops: {
		range?: number[];
		op: string;
		items?: {
			group?: {
				id: string;
			};
			member?: {
				user: {
					username: string;
					public_flags: number;
					id: string;
					global_name: null | string;
					display_name: null | string;
					discriminator: string;
					clan: null | {
						tag: string;
						identity_guild_id: string;
						identity_enabled: boolean;
						badge: string;
					};
					bot: boolean;
					avatar_decoration_data: null | {
						sku_id: string;
						asset: string;
					};
					avatar: null | string;
				};
				roles: string[];
				presence: {
					user: {
						id: string;
					};
					status: string;
					client_status: {
						web?: string;
						desktop?: string;
						mobile?: string;
						embedded?: string;
					};
					broadcast: null;
					activities: {
						type: number;
						state?: string;
						name: string;
						id: string;
						created_at: number;
						url?: string;
						timestamps?: {
							start?: number;
							end?: number;
						};
						session_id?: string;
						details?: string;
						buttons?: string[];
						assets?: {
							small_image?: string;
							large_text?: string;
							large_image?: string;
							small_text?: string;
						};
						application_id?: string | number;
						emoji?: {
							name: string;
							id?: string;
							animated?: boolean;
						};
						sync_id?: string;
						party?: {
							id?: string;
							size?: number[];
						};
						flags?: number;
						supported_platforms?: string[];
						platform?: string;
					}[];
				};
				premium_since: null | string;
				pending: boolean;
				nick: null | string;
				mute: boolean;
				joined_at: string;
				flags: number;
				deaf: boolean;
				communication_disabled_until: null | string;
				avatar: null | string;
				unusual_dm_activity_until?: string;
				avatar_decoration_data?: {
					sku_id: string;
					asset: string;
				};
			};
		}[];
		item?: {
			member?: {
				user: {
					username: string;
					public_flags: number;
					id: string;
					global_name: null | string;
					display_name: null | string;
					discriminator: string;
					clan: null | {
						tag: string;
						identity_guild_id: string;
						identity_enabled: boolean;
						badge: string;
					};
					bot: boolean;
					avatar_decoration_data: null | {
						sku_id: string;
						asset: string;
					};
					avatar: null | string;
				};
				roles: string[];
				presence: {
					user: {
						id: string;
					};
					status: string;
					game?: null | {
						type: number;
						timestamps?: {
							start?: number;
							end?: number;
						};
						state?: string;
						session_id: null | string;
						name: string;
						id: string;
						details?: string;
						created_at: number;
						buttons?: string[];
						assets?: {
							small_image?: string;
							large_text?: string;
							large_image?: string;
							small_text?: string;
						};
						application_id?: string;
						url?: string;
						emoji?: {
							name: string;
							id?: string;
							animated?: boolean;
						};
						party?: {
							id?: string;
							size?: number[];
						};
						flags?: number;
						sync_id?: string;
						supported_platforms?: string[];
						platform?: string;
					};
					client_status: {
						web?: string;
						mobile?: string;
						desktop?: string;
						embedded?: string;
					};
					broadcast: null;
					activities: {
						type: number;
						timestamps?: {
							start?: number;
							end?: number;
						};
						state?: string;
						session_id?: string;
						name: string;
						id: string;
						details?: string;
						created_at: number;
						buttons?: string[];
						assets?: {
							small_image?: string;
							large_text?: string;
							large_image?: string;
							small_text?: string;
						};
						application_id?: string | number;
						url?: string;
						emoji?: {
							name: string;
							id?: string;
							animated?: boolean;
						};
						sync_id?: string;
						party?: {
							id?: string;
							size?: number[];
						};
						flags?: number;
						supported_platforms?: string[];
						platform?: string;
					}[];
					broadcast_context?: null;
				};
				premium_since: null | string;
				pending: boolean;
				nick: null | string;
				mute: boolean;
				joined_at: string;
				flags: number;
				deaf: boolean;
				communication_disabled_until: null | string;
				avatar: null | string;
				unusual_dm_activity_until?: string;
				avatar_decoration_data?: {
					sku_id: string;
					asset: string;
				};
			};
			group?: {
				id: string;
			};
		};
		index?: number;
	}[];
	online_count: number;
	member_count: number;
	id: string;
	guild_id: string;
	groups: {
		id: string;
		count: number;
	}[];
};

export type GUILD_MEMBER_REMOVE = {
	user: {
		username: string;
		public_flags: number;
		id: string;
		global_name: string;
		discriminator: string;
		clan: null;
		avatar_decoration_data: null;
		avatar: string;
	};
	guild_id: string;
};

export type GUILD_MEMBER_UPDATE = {
	user: {
		username: string;
		public_flags: number;
		id: string;
		global_name: null | string;
		discriminator: string;
		clan: null;
		avatar_decoration_data: null | {
			sku_id: string;
			asset: string;
		};
		avatar: null | string;
		display_name?: string;
		bot?: boolean;
	};
	unusual_dm_activity_until?: null | string;
	roles: string[];
	premium_since: null | string;
	pending: boolean;
	nick: null | string;
	joined_at: string;
	guild_id: string;
	flags: number;
	communication_disabled_until: null | string;
	avatar: null | string;
	mute?: boolean;
	deaf?: boolean;
};

export type GUILD_ROLE_DELETE = {
	version: number;
	role_id: string;
	guild_id: string;
};

export type GUILD_ROLE_UPDATE = {
	role: {
		version: number;
		unicode_emoji: null | string;
		position: number;
		permissions: string;
		name: string;
		mentionable: boolean;
		managed: boolean;
		id: string;
		icon: null | string;
		hoist: boolean;
		flags: number;
		description: null;
		color: number;
	};
	guild_id: string;
};

export type GUILD_SCHEDULED_EVENT_USER_ADD = {
	user_id: string;
	response: number;
	guild_scheduled_event_id: string;
	guild_id: string;
	guild_scheduled_event_exception_id?: string;
};

export type GUILD_UPDATE = {
	id: string;
	verification_level: number;
	preferred_locale: string;
	afk_channel_id: null | string;
	inventory_settings: null;
	vanity_url_code: null | string;
	splash: null | string;
	icon: string;
	widget_enabled: boolean;
	rules_channel_id: null | string;
	guild_id: string;
	premium_tier: number;
	nsfw: boolean;
	system_channel_flags: number;
	system_channel_id: null | string;
	version: number;
	max_members: number;
	afk_timeout: number;
	application_id: null;
	hub_type: null;
	latest_onboarding_question_id: null | string;
	banner: null | string;
	nsfw_level: number;
	max_stage_video_channel_users: number;
	max_video_channel_users: number;
	premium_subscription_count: number;
	region: string;
	features: string[];
	premium_progress_bar_enabled: boolean;
	safety_alerts_channel_id: null | string;
	description: null | string;
	roles: {
		version: number;
		unicode_emoji: null | string;
		position: number;
		permissions: string;
		name: string;
		mentionable: boolean;
		managed: boolean;
		id: string;
		icon: null | string;
		hoist: boolean;
		flags: number;
		description: null;
		color: number;
		tags?: {
			bot_id?: string;
			premium_subscriber?: null;
		};
	}[];
	owner_id: string;
	incidents_data: null | {
		raid_detected_at: null | string;
		invites_disabled_until: null | string;
		dms_disabled_until: null | string;
		dm_spam_detected_at: null;
	};
	emojis: {
		version: number;
		roles: [];
		require_colons: boolean;
		name: string;
		managed: boolean;
		id: string;
		available: boolean;
		animated: boolean;
	}[];
	public_updates_channel_id: null | string;
	widget_channel_id: null | string;
	home_header: null | string;
	stickers: {
		version: number;
		type: number;
		tags: string;
		name: string;
		id: string;
		guild_id: string;
		format_type: number;
		description: null | string;
		available: boolean;
		asset: string;
	}[];
	discovery_splash: null | string;
	explicit_content_filter: number;
	default_message_notifications: number;
	mfa_level: number;
	name: string;
	max_presences: null;
};

export type INTEGRATION_DELETE = {
	id: string;
	application_id: string;
	guild_id: string;
};

export type INTEGRATION_UPDATE = {
	type: string;
	syncing: boolean;
	synced_at: string;
	subscriber_count: number;
	role_id: string;
	revoked: boolean;
	name: string;
	id: string;
	expire_grace_period: number;
	expire_behavior: number;
	enabled: boolean;
	enable_emoticons: boolean;
	account: {
		name: string;
		id: string;
	};
	guild_id: string;
};

export type MESSAGE_ACK = {
	version: number;
	message_id: string;
	last_viewed?: null | number;
	flags?: null | number;
	channel_id: string;
};

export type MESSAGE_CREATE = {
	type: number;
	tts: boolean;
	timestamp: string;
	pinned: boolean;
	nonce?: string;
	mentions: {
		username: string;
		public_flags: number;
		member?: {
			roles: string[];
			premium_since: null | string;
			pending: boolean;
			nick: null | string;
			mute: boolean;
			joined_at: string;
			flags: number;
			deaf: boolean;
			communication_disabled_until: null | string;
			avatar: null | string;
			unusual_dm_activity_until?: string;
			avatar_decoration_data?: {
				sku_id: string;
				asset: string;
			};
		};
		id: string;
		global_name: null | string;
		discriminator: string;
		clan: null | {
			tag: null | string;
			identity_guild_id: null | string;
			identity_enabled: null | boolean;
			badge: null | string;
		};
		avatar_decoration_data: null | {
			sku_id: string;
			asset: string;
		};
		avatar: null | string;
		bot?: boolean;
	}[];
	mention_roles: string[];
	mention_everyone: boolean;
	member?: {
		roles: string[];
		premium_since: null | string;
		pending: boolean;
		nick: null | string;
		mute: boolean;
		joined_at: string;
		flags: number;
		deaf: boolean;
		communication_disabled_until: null | string;
		avatar: null | string;
		avatar_decoration_data?: {
			sku_id: string;
			asset: string;
		};
		unusual_dm_activity_until?: string;
	};
	id: string;
	flags: number;
	embeds: {
		type: string;
		title?: string;
		timestamp?: string;
		footer?: {
			text: string;
			proxy_icon_url?: string;
			icon_url?: string;
		};
		description?: string;
		color?: number;
		author?: {
			proxy_icon_url?: string;
			name: string;
			icon_url?: string;
			url?: string;
		};
		thumbnail?: {
			width: number;
			url: string;
			proxy_url: string;
			height: number;
			placeholder_version?: number;
			placeholder?: string;
		};
		fields?: {
			value: string;
			name: string;
			inline: boolean;
		}[];
		video?: {
			width: number;
			url: string;
			placeholder_version?: number;
			placeholder?: string;
			height: number;
			proxy_url?: string;
		};
		url?: string;
		provider?: {
			url?: string;
			name: string;
		};
		image?: {
			width: number;
			url: string;
			proxy_url: string;
			height: number;
			placeholder_version?: number;
			placeholder?: string;
		};
		content_scan_version?: number;
		reference_id?: string;
	}[];
	edited_timestamp: null;
	content: string;
	components: {
		type: number;
		id: string;
		components: {
			type: number;
			style?: number;
			label?: string;
			id: string;
			emoji?: {
				name: string;
				id?: string;
			};
			custom_id?: string;
			disabled?: boolean;
			placeholder?: string;
			options?: {
				value: string;
				label: string;
				emoji?: {
					name: string;
					id: string;
				};
			}[];
			min_values?: number;
			max_values?: number;
			url?: string;
		}[];
	}[];
	channel_id: string;
	author: {
		username: string;
		public_flags?: number;
		id: string;
		global_name: null | string;
		discriminator: string;
		clan?: null | {
			tag: null | string;
			identity_guild_id: null | string;
			identity_enabled: boolean;
			badge: null | string;
		};
		avatar_decoration_data?: null | {
			sku_id: string;
			asset: string;
		};
		avatar: null | string;
		bot?: boolean;
	};
	attachments: {
		width?: number;
		url: string;
		size: number;
		proxy_url: string;
		placeholder_version?: number;
		placeholder?: string;
		id: string;
		height?: number;
		filename: string;
		content_type?: string;
		content_scan_version?: number;
		flags?: number;
		waveform?: string;
		duration_secs?: number;
	}[];
	guild_id?: string;
	webhook_id?: string;
	position?: number;
	message_reference?: {
		type: number;
		message_id?: string;
		guild_id?: string;
		channel_id: string;
	};
	interaction_metadata?: {
		user_id: string;
		user: {
			username: string;
			public_flags: number;
			id: string;
			global_name: null | string;
			discriminator: string;
			clan: null;
			avatar_decoration_data: null | {
				sku_id: string;
				asset: string;
			};
			avatar: null | string;
		};
		type: number;
		interacted_message_id?: string;
		id: string;
		authorizing_integration_owners: {
			0: string;
		};
		name?: string;
		original_response_message_id?: string;
	};
	application_id?: string;
	referenced_message?: {
		type: number;
		tts: boolean;
		timestamp: string;
		pinned: boolean;
		mentions: {
			username: string;
			public_flags: number;
			id: string;
			global_name: null | string;
			discriminator: string;
			clan: null | {
				tag: string;
				identity_guild_id: string;
				identity_enabled: boolean;
				badge: string;
			};
			avatar_decoration_data: null | {
				sku_id: string;
				asset: string;
			};
			avatar: null | string;
			bot?: boolean;
		}[];
		mention_roles: [];
		mention_everyone: boolean;
		id: string;
		flags: number;
		embeds: {
			url?: string;
			type: string;
			title?: string;
			thumbnail?: {
				width: number;
				url: string;
				proxy_url: string;
				height: number;
				placeholder_version?: number;
				placeholder?: string;
			};
			fields?: {
				value: string;
				name: string;
				inline: boolean;
			}[];
			description?: string;
			content_scan_version?: number;
			color?: number;
			author?: {
				url?: string;
				proxy_icon_url?: string;
				name: string;
				icon_url?: string;
			};
			provider?: {
				name: string;
				url?: string;
			};
			video?: {
				width: number;
				url: string;
				proxy_url?: string;
				placeholder_version?: number;
				placeholder?: string;
				height: number;
			};
			timestamp?: string;
			image?: {
				width: number;
				url: string;
				proxy_url: string;
				placeholder_version?: number;
				placeholder?: string;
				height: number;
			};
			footer?: {
				text: string;
				proxy_icon_url: string;
				icon_url: string;
			};
			reference_id?: string;
		}[];
		edited_timestamp: null | string;
		content: string;
		components: {
			type: number;
			id: string;
			components: {
				url: string;
				type: number;
				style: number;
				label: string;
				id: string;
			}[];
		}[];
		channel_id: string;
		author: {
			username: string;
			public_flags?: number;
			id: string;
			global_name: null | string;
			discriminator: string;
			clan?: null | {
				tag: null | string;
				identity_guild_id: null | string;
				identity_enabled: boolean;
				badge: null | string;
			};
			avatar_decoration_data?: null | {
				sku_id: string;
				asset: string;
			};
			avatar: null | string;
			bot?: boolean;
		};
		attachments: {
			width?: number;
			url: string;
			size: number;
			proxy_url: string;
			placeholder_version?: number;
			placeholder?: string;
			id: string;
			height?: number;
			filename: string;
			content_type?: string;
			content_scan_version?: number;
			waveform?: string;
			duration_secs?: number;
			flags?: number;
		}[];
		position?: number;
		message_reference?: {
			type: number;
			message_id: string;
			guild_id?: string;
			channel_id: string;
		};
		webhook_id?: string;
		poll?: {
			question: {
				text: string;
			};
			layout_type: number;
			expiry: string;
			answers: {
				poll_media: {
					text: string;
				};
				answer_id: number;
			}[];
			allow_multiselect: boolean;
		};
		sticker_items?: {
			name: string;
			id: string;
			format_type: number;
		}[];
		interaction_metadata?: {
			user_id: string;
			user: {
				username: string;
				public_flags: number;
				id: string;
				global_name: string;
				discriminator: string;
				clan: null;
				avatar_decoration_data: null;
				avatar: string;
			};
			type: number;
			interacted_message_id?: string;
			id: string;
			authorizing_integration_owners: {
				0: string;
			};
			name: string;
		};
		application_id?: string;
		interaction?: {
			user: {
				username: string;
				public_flags: number;
				id: string;
				global_name: string;
				discriminator: string;
				clan: null;
				avatar_decoration_data: null;
				avatar: string;
			};
			type: number;
			name: string;
			id: string;
		};
		thread?: {
			type: number;
			total_message_sent: number;
			thread_metadata: {
				locked: boolean;
				create_timestamp: string;
				auto_archive_duration: number;
				archived: boolean;
				archive_timestamp: string;
			};
			rate_limit_per_user: number;
			parent_id: string;
			owner_id: string;
			name: string;
			message_count: number;
			member_ids_preview: string[];
			member_count: number;
			last_message_id: string;
			id: string;
			guild_id: string;
			flags: number;
		};
	};
	sticker_items?: {
		name: string;
		id: string;
		format_type: number;
	}[];
	interaction?: {
		user: {
			username: string;
			public_flags: number;
			id: string;
			global_name: string;
			discriminator: string;
			clan: null;
			avatar_decoration_data: null | {
				sku_id: string;
				asset: string;
			};
			avatar: null | string;
		};
		type: number;
		name: string;
		member: {
			roles: string[];
			premium_since: null | string;
			pending: boolean;
			nick: null | string;
			mute: boolean;
			joined_at: string;
			flags: number;
			deaf: boolean;
			communication_disabled_until: null | string;
			avatar: null;
		};
		id: string;
	};
	poll?: {
		question: {
			text: string;
		};
		layout_type: number;
		expiry: string;
		answers: {
			poll_media: {
				text: string;
				emoji: {
					name: string;
					id: string;
				};
			};
			answer_id: number;
		}[];
		allow_multiselect: boolean;
	};
	call?: {
		participants: string[];
		ended_timestamp: null;
	};
	activity?: {
		type: number;
		party_id: string;
	};
};

export type MESSAGE_DELETE = {
	id: string;
	channel_id: string;
	guild_id?: string;
};

export type MESSAGE_DELETE_BULK = {
	ids: string[];
	channel_id: string;
	guild_id: string;
};

export type MESSAGE_POLL_VOTE_ADD = {
	user_id: string;
	message_id: string;
	channel_id: string;
	answer_id: number;
	guild_id: string;
};

export type MESSAGE_POLL_VOTE_REMOVE = {
	user_id: string;
	message_id: string;
	channel_id: string;
	answer_id: number;
	guild_id: string;
};

export type MESSAGE_REACTION_ADD = {
	user_id: string;
	type: number;
	message_id: string;
	message_author_id?: string;
	member: {
		user: {
			username: string;
			public_flags: number;
			id: string;
			global_name: null | string;
			display_name: null | string;
			discriminator: string;
			clan: null | {
				tag: string;
				identity_guild_id: string;
				identity_enabled: boolean;
				badge: string;
			};
			bot: boolean;
			avatar_decoration_data: null | {
				sku_id: string;
				asset: string;
			};
			avatar: null | string;
		};
		roles: string[];
		premium_since: null | string;
		pending: boolean;
		nick: null | string;
		mute: boolean;
		joined_at: string;
		flags: number;
		deaf: boolean;
		communication_disabled_until: null | string;
		avatar: null | string;
		unusual_dm_activity_until?: string;
		avatar_decoration_data?: {
			sku_id: string;
			asset: string;
		};
	};
	emoji: {
		name: string;
		id: null | string;
		animated?: boolean;
	};
	channel_id: string;
	burst: boolean;
	guild_id: string;
	burst_colors?: string[];
};

export type MESSAGE_REACTION_ADD_MANY = {
	reactions: {
		users: string[];
		emoji: {
			name: string;
			id: null | string;
			animated?: boolean;
		};
	}[];
	message_id: string;
	channel_id: string;
	guild_id: string;
};

export type MESSAGE_REACTION_REMOVE = {
	user_id: string;
	type: number;
	message_id: string;
	emoji: {
		name: string;
		id: null | string;
		animated?: boolean;
	};
	channel_id: string;
	burst: boolean;
	guild_id: string;
};

export type MESSAGE_UPDATE = {
	id: string;
	channel_id: string;
	attachments?: {
		url: string;
		size: number;
		proxy_url: string;
		id: string;
		filename: string;
		content_scan_version?: number;
		width?: number;
		placeholder_version?: number;
		placeholder?: string;
		height?: number;
		content_type?: string;
		flags?: number;
	}[];
	guild_id?: string;
	type?: number;
	tts?: boolean;
	timestamp?: string;
	referenced_message?: {
		type: number;
		tts: boolean;
		timestamp: string;
		position?: number;
		pinned: boolean;
		message_reference?: {
			type: number;
			message_id: string;
			guild_id: string;
			channel_id: string;
		};
		mentions: {
			username: string;
			public_flags: number;
			id: string;
			global_name: null | string;
			discriminator: string;
			clan: null;
			avatar_decoration_data: null | {
				sku_id: string;
				asset: string;
			};
			avatar: null | string;
		}[];
		mention_roles: [];
		mention_everyone: boolean;
		id: string;
		flags: number;
		embeds: {
			video: {
				width: number;
				url: string;
				placeholder_version: number;
				placeholder: string;
				height: number;
				proxy_url: string;
			};
			url: string;
			type: string;
			title?: string;
			thumbnail: {
				width: number;
				url: string;
				proxy_url: string;
				placeholder_version: number;
				placeholder: string;
				height: number;
			};
			provider: {
				url: string;
				name: string;
			};
			description?: string;
			content_scan_version: number;
			color?: number;
			author?: {
				url: string;
				name: string;
			};
			reference_id: string;
		}[];
		edited_timestamp: null | string;
		content: string;
		components: [];
		channel_id: string;
		author: {
			username: string;
			public_flags: number;
			id: string;
			global_name: null | string;
			discriminator: string;
			clan: null;
			avatar_decoration_data: null | {
				sku_id: string;
				asset: string;
			};
			avatar: null | string;
		};
		attachments: {
			width: number;
			url: string;
			size: number;
			proxy_url: string;
			placeholder_version: number;
			placeholder: string;
			id: string;
			height: number;
			filename: string;
			content_type: string;
			content_scan_version: number;
		}[];
	};
	position?: number;
	pinned?: boolean;
	message_reference?: {
		type: number;
		message_id: string;
		guild_id: string;
		channel_id: string;
	};
	mentions?: {
		username: string;
		public_flags: number;
		member: {
			roles: string[];
			premium_since: null | string;
			pending: boolean;
			nick: null | string;
			mute: boolean;
			joined_at: string;
			flags: number;
			deaf: boolean;
			communication_disabled_until: null | string;
			avatar: null | string;
		};
		id: string;
		global_name: null | string;
		discriminator: string;
		clan: null;
		avatar_decoration_data: null | {
			sku_id: string;
			asset: string;
		};
		avatar: null | string;
	}[];
	mention_roles?: [];
	mention_everyone?: boolean;
	member?: {
		roles: string[];
		premium_since: null | string;
		pending: boolean;
		nick: null | string;
		mute: boolean;
		joined_at: string;
		flags: number;
		deaf: boolean;
		communication_disabled_until: null | string;
		avatar: null | string;
		avatar_decoration_data?: {
			sku_id: string;
			asset: string;
		};
		unusual_dm_activity_until?: string;
	};
	flags?: number;
	embeds?: {
		type: string;
		title?: string;
		image?: {
			width: number;
			url: string;
			proxy_url: string;
			height: number;
			placeholder_version?: number;
			placeholder?: string;
		};
		footer?: {
			text: string;
			proxy_icon_url?: string;
			icon_url?: string;
		};
		content_scan_version?: number;
		color?: number;
		author?: {
			url?: string;
			proxy_icon_url?: string;
			name: string;
			icon_url?: string;
		};
		url?: string;
		thumbnail?: {
			width: number;
			url: string;
			proxy_url: string;
			placeholder_version?: number;
			placeholder?: string;
			height: number;
		};
		timestamp?: string;
		description?: string;
		provider?: {
			url?: string;
			name: string;
		};
		fields?: {
			value: string;
			name: string;
			inline: boolean;
		}[];
		video?: {
			width: number;
			url: string;
			proxy_url?: string;
			placeholder_version?: number;
			placeholder?: string;
			height: number;
		};
		reference_id?: string;
	}[];
	edited_timestamp?: null | string;
	content?: string;
	components?: {
		type: number;
		id: string | number;
		components: {
			type: number;
			style?: number;
			id: string | number;
			emoji?: {
				name: string;
				id?: string;
			};
			custom_id?: string;
			label?: string;
			disabled?: boolean;
			url?: string;
			placeholder?: string;
			options?: {
				value: string;
				label: string;
			}[];
			min_values?: number;
			max_values?: number;
		}[];
	}[];
	author?: {
		username: string;
		public_flags?: number;
		id: string;
		global_name: null | string;
		discriminator: string;
		clan?: null | {
			tag: null;
			identity_guild_id: null;
			identity_enabled: boolean;
			badge: null;
		};
		avatar_decoration_data?: null | {
			sku_id: string;
			asset: string;
		};
		avatar: null | string;
		bot?: boolean;
	};
	webhook_id?: string;
	interaction_metadata?: {
		user_id: string;
		user: {
			username: string;
			public_flags: number;
			id: string;
			global_name: string;
			discriminator: string;
			clan: null;
			avatar_decoration_data: null | {
				sku_id: string;
				asset: string;
			};
			avatar: null | string;
		};
		type: number;
		name?: string;
		id: string;
		authorizing_integration_owners: {
			0: string;
		};
		interacted_message_id?: string;
	};
	interaction?: {
		user: {
			username: string;
			public_flags: number;
			id: string;
			global_name: string;
			discriminator: string;
			clan: null;
			avatar_decoration_data: null | {
				sku_id: string;
				asset: string;
			};
			avatar: null | string;
		};
		type: number;
		name: string;
		member: {
			roles: string[];
			premium_since: null | string;
			pending: boolean;
			nick: null | string;
			mute: boolean;
			joined_at: string;
			flags: number;
			deaf: boolean;
			communication_disabled_until: null | string;
			avatar: null;
		};
		id: string;
	};
	application_id?: string;
	call?: {
		participants: string[];
		ended_timestamp: string;
	};
};

export type PASSIVE_UPDATE_V2 = {
	updated_voice_states: {
		user_id: string;
		suppress: boolean;
		session_id: string;
		self_video: boolean;
		self_mute: boolean;
		self_deaf: boolean;
		request_to_speak_timestamp: null;
		mute: boolean;
		deaf: boolean;
		channel_id: string;
		self_stream?: boolean;
	}[];
	updated_members: {
		user: {
			username: string;
			public_flags: number;
			id: string;
			global_name: null | string;
			display_name: null | string;
			discriminator: string;
			clan: null | {
				tag: string;
				identity_guild_id: string;
				identity_enabled: boolean;
				badge: string;
			};
			bot: boolean;
			avatar_decoration_data: null | {
				sku_id: string;
				asset: string;
			};
			avatar: null | string;
		};
		roles: string[];
		premium_since: null | string;
		pending: boolean;
		nick: null | string;
		mute: boolean;
		joined_at: string;
		flags: number;
		deaf: boolean;
		communication_disabled_until: null | string;
		avatar: null | string;
		unusual_dm_activity_until?: string;
		avatar_decoration_data?: {
			sku_id: string;
			asset: string;
		};
	}[];
	updated_channels: {
		last_pin_timestamp?: null | string;
		last_message_id: string;
		id: string;
	}[];
	removed_voice_states: string[];
	guild_id: string;
};

export type PRESENCE_UPDATE = {
	user: {
		id: string;
		username?: string;
		global_name?: null | string;
		discriminator?: string;
		clan?: null;
		avatar_decoration_data?: null | {
			sku_id: string;
			asset: string;
		};
		avatar?: null | string;
		public_flags?: number;
		bot?: boolean;
		display_name?: string;
	};
	status: string;
	guild_id?: string;
	client_status: {
		mobile?: string;
		desktop?: string;
		web?: string;
	};
	broadcast?: null;
	activities: {
		type: number;
		name: string;
		id: string;
		created_at: number;
		state?: string;
		timestamps?: {
			start?: number;
			end?: number;
		};
		session_id?: string;
		details?: string;
		buttons?: string[];
		assets?: {
			small_image?: string;
			large_text?: string;
			large_image?: string;
			small_text?: string;
		};
		application_id?: string;
		supported_platforms?: string[];
		party?: {
			id?: string;
			size?: number[];
		};
		emoji?: {
			name: string;
			id?: string;
			animated?: boolean;
		};
		sync_id?: string;
		flags?: number;
		platform?: string;
	}[];
};

export type READY = {
	v: number;
	users: {
		username: string;
		public_flags: number;
		id: string;
		global_name: null | string;
		discriminator: string;
		clan: null | {
			tag: string;
			identity_guild_id: string;
			identity_enabled: boolean;
			badge: string;
		};
		avatar_decoration_data: null | {
			sku_id: string;
			asset: string;
		};
		avatar: null | string;
		display_name?: null | string;
		bot?: boolean;
	}[];
	user_settings_proto: string;
	user_guild_settings: {
		version: number;
		partial: boolean;
		entries: {
			version: number;
			suppress_roles: boolean;
			suppress_everyone: boolean;
			notify_highlights: number;
			muted: boolean;
			mute_scheduled_events: boolean;
			mute_config: null | {
				selected_time_window: number;
				end_time: null | string;
			};
			mobile_push: boolean;
			message_notifications: number;
			hide_muted_channels: boolean;
			guild_id: null | string;
			flags: number;
			channel_overrides: {
				muted: boolean;
				mute_config: null | {
					selected_time_window: null | number;
					end_time: null | string;
				};
				message_notifications: number;
				collapsed: boolean;
				channel_id: string;
				flags?: number;
			}[];
		}[];
	};
	user: {
		verified: boolean;
		username: string;
		purchased_flags: number;
		public_flags: number;
		pronouns: string;
		premium_type: number;
		premium: boolean;
		phone: string;
		nsfw_allowed: boolean;
		mobile: boolean;
		mfa_enabled: boolean;
		id: string;
		global_name: string;
		flags: number;
		email: string;
		discriminator: string;
		desktop: boolean;
		clan: null;
		bio: string;
		banner_color: null | string;
		banner: null;
		avatar_decoration_data: null;
		avatar: string;
		accent_color: null | number;
	};
	tutorial: null;
	sessions: {
		status: string;
		session_id: string;
		client_info: {
			version: number;
			os: string;
			client: string;
		};
		activities: {
			type: number;
			state: string;
			name: string;
			id: string;
			created_at: number;
			timestamps?: {
				end: number;
				start?: number;
			};
			emoji?: {
				name: string;
			};
			sync_id?: string;
			session_id?: string;
			party?: {
				id: string;
			};
			flags?: number;
			details?: string;
			assets?: {
				large_text: string;
				large_image: string;
			};
		}[];
		active?: boolean;
	}[];
	session_type: string;
	session_id: string;
	resume_gateway_url: string;
	relationships: {
		user_id: string;
		type: number;
		nickname: null | string;
		id: string;
		since?: string;
	}[];
	read_state: {
		version: number;
		partial: boolean;
		entries: {
			mention_count?: number;
			last_pin_timestamp?: string;
			last_message_id?: string | number;
			id: string;
			flags?: number;
			last_viewed?: number;
			read_state_type?: number;
			last_acked_id?: string;
			badge_count?: number;
		}[];
	};
	private_channels: {
		type: number;
		safety_warnings?: [];
		recipient_ids: string[];
		last_message_id: null | string;
		is_spam?: boolean;
		id: string;
		flags: number;
		last_pin_timestamp?: string;
		owner_id?: string;
		name?: null | string;
		icon?: null | string;
		is_message_request_timestamp?: null | string;
		is_message_request?: boolean;
	}[];
	notification_settings: {
		flags: number;
	};
	merged_members: {
		user_id: string;
		roles: string[];
		premium_since: null;
		pending: boolean;
		nick: null | string;
		mute: boolean;
		joined_at: string;
		flags: number;
		deaf: boolean;
		communication_disabled_until: null | string;
		avatar: null;
	}[][];
	guilds: {
		version?: number;
		threads?: {
			type: number;
			total_message_sent: number;
			thread_metadata: {
				locked: boolean;
				create_timestamp: string;
				auto_archive_duration: number;
				archived: boolean;
				archive_timestamp: string;
				invitable?: boolean;
			};
			rate_limit_per_user: number;
			parent_id: string;
			owner_id: string;
			name: string;
			message_count: number;
			member_ids_preview: string[];
			member_count: number;
			member: {
				muted: boolean;
				mute_config: null;
				join_timestamp: string;
				flags: number;
			};
			last_message_id: string;
			id: string;
			guild_id: string;
			flags: number;
			applied_tags?: string[];
			last_pin_timestamp?: string;
		}[];
		stickers?: {
			type: number;
			tags: string;
			name: string;
			id: string;
			guild_id: string;
			format_type: number;
			description: null | string;
			available: boolean;
			asset?: string;
		}[];
		stage_instances?: [];
		roles?: {
			unicode_emoji: null | string;
			tags: {
				bot_id?: string;
				premium_subscriber?: null;
				integration_id?: string;
				subscription_listing_id?: string;
				available_for_purchase?: null;
			};
			position: number;
			permissions: string;
			name: string;
			mentionable: boolean;
			managed: boolean;
			id: string;
			icon: null | string;
			hoist: boolean;
			flags: number;
			color: number;
		}[];
		properties?: {
			home_header: null | string;
			explicit_content_filter: number;
			safety_alerts_channel_id: null | string;
			rules_channel_id: null | string;
			id: string;
			public_updates_channel_id: null | string;
			name: string;
			mfa_level: number;
			default_message_notifications: number;
			afk_timeout: number;
			icon: null | string;
			incidents_data: null | {
				raid_detected_at: null | string;
				invites_disabled_until: null | string;
				dms_disabled_until: null | string;
				dm_spam_detected_at: null;
			};
			premium_tier: number;
			premium_progress_bar_enabled: boolean;
			clan: null;
			description: null | string;
			discovery_splash: null | string;
			max_video_channel_users: number;
			vanity_url_code: null | string;
			afk_channel_id: null | string;
			max_members: number;
			banner: null | string;
			nsfw: boolean;
			verification_level: number;
			latest_onboarding_question_id: null | string;
			application_id: null;
			system_channel_flags: number;
			nsfw_level: number;
			splash: null | string;
			max_stage_video_channel_users: number;
			owner_id: string;
			features: string[];
			hub_type: null;
			preferred_locale: string;
			system_channel_id: null | string;
		};
		premium_subscription_count?: number;
		member_count?: number;
		lazy?: boolean;
		large?: boolean;
		joined_at?: string;
		id: string;
		guild_scheduled_events?: {
			status: number;
			sku_ids: [];
			scheduled_start_time: string;
			scheduled_end_time: null | string;
			recurrence_rule: null | {
				start: string;
				interval: number;
				frequency: number;
				end: null;
				count: null;
				by_year_day: null;
				by_weekday: null | number[];
				by_n_weekday: null | {
					n: number;
					day: number;
				}[];
				by_month_day: null;
				by_month: null;
			};
			privacy_level: number;
			name: string;
			image: null | string;
			id: string;
			guild_scheduled_event_exceptions: [];
			guild_id: string;
			entity_type: number;
			entity_metadata: null | {
				location?: string;
				speaker_ids?: [];
			};
			entity_id: null | string;
			description: string;
			creator_id: string;
			channel_id: null | string;
			auto_start: boolean;
		}[];
		emojis?: {
			roles: string[];
			require_colons: boolean;
			name: string;
			managed: boolean;
			id: string;
			available: boolean;
			animated: boolean;
		}[];
		data_mode?: string;
		channels?: {
			type: number;
			topic?: null | string;
			theme_color?: null | number;
			rate_limit_per_user?: number;
			position: number;
			permission_overwrites: {
				type: number;
				id: string;
				deny: string;
				allow: string;
			}[];
			parent_id?: null | string;
			nsfw?: boolean;
			name: string;
			last_pin_timestamp?: null | string;
			last_message_id?: null | string;
			id: string;
			icon_emoji?: null | {
				name: string;
				id: null | string;
			};
			flags: number;
			voice_background_display?: null | {
				type: number;
				resource_id: null | string;
			};
			user_limit?: number;
			status?: null | string;
			rtc_region?: null | string;
			bitrate?: number;
			default_thread_rate_limit_per_user?: number;
			video_quality_mode?: number;
			template?: string;
			default_sort_order?: null | number;
			default_reaction_emoji?: null | {
				emoji_name: null | string;
				emoji_id: null | string;
			};
			default_forum_layout?: number;
			available_tags?: {
				name: string;
				moderated: boolean;
				id: string;
				emoji_name: null | string;
				emoji_id: null | string;
			}[];
			default_auto_archive_duration?: number;
		}[];
		application_command_counts?: {};
		activity_instances?: {};
		unavailable?: boolean;
	}[];
	guild_join_requests: [];
	guild_experiments: (null | string | number | ((number | (number | (null | boolean | number | (null | string | number | string[])[] | {
		s: number;
		e: number;
	})[] | {
		s: number;
		e: number;
	})[])[][][] | {
		k: string[];
		b: number;
	})[])[][];
	geo_ordered_rtc_regions: string[];
	friend_suggestion_count: number;
	experiments: number[][];
	country_code: string;
	consents: {
		personalization: {
			consented: boolean;
		};
	};
	connected_accounts: {
		visibility: number;
		verified: boolean;
		type: string;
		two_way_link: boolean;
		show_activity: boolean;
		revoked: boolean;
		name: string;
		metadata_visibility: number;
		id: string;
		friend_sync: boolean;
		access_token?: string;
	}[];
	auth_session_id_hash: string;
	auth: {
		authenticator_types: number[];
	};
	api_code_version: number;
	analytics_token: string;
	_trace: string[];
};

export type READY_SUPPLEMENTAL = {
	merged_presences: {
		guilds: {
			user_id: string;
			status: string;
			client_status: {
				desktop?: string;
				mobile?: string;
				web?: string;
			};
			broadcast: null;
			activities: {
				type: number;
				name: string;
				id: string;
				emoji?: {
					name: string;
				};
				created_at: number;
				timestamps?: {
					start?: number;
					end?: number;
				};
				state?: string;
				details?: string;
				assets?: {
					large_text?: string;
					large_image: string;
					small_image?: string;
					small_text?: string;
				};
				application_id?: string;
				session_id?: string;
				buttons?: string[];
				sync_id?: string;
				party?: {
					id: string;
				};
				flags?: number;
			}[];
		}[][];
		friends: {
			user_id: string;
			status: string;
			client_status: {
				desktop?: string;
				mobile?: string;
				web?: string;
				embedded?: string;
			};
			activities: {
				type: number;
				name: string;
				id: string;
				emoji?: {
					name: string;
					id?: string;
					animated?: boolean;
				};
				created_at: number;
				timestamps?: {
					start?: number;
					end?: number;
				};
				state?: string;
				details?: string;
				assets?: {
					large_text?: string;
					large_image?: string;
					small_text?: string;
					small_image?: string;
				};
				application_id?: string;
				session_id?: string;
				buttons?: string[];
				sync_id?: string;
				party?: {
					id?: string;
					size?: number[];
				};
				flags?: number;
				platform?: string;
				supported_platforms?: string[];
			}[];
		}[];
	};
	merged_members: {
		user_id: string;
		roles: string[];
		premium_since: null | string;
		pending: boolean;
		nick: null | string;
		mute: boolean;
		joined_at: string;
		flags: number;
		deaf: boolean;
		communication_disabled_until: null | string;
		avatar: null | string;
		unusual_dm_activity_until?: string;
		avatar_decoration_data?: {
			sku_id: string;
			asset: string;
		};
	}[][];
	lazy_private_channels: [];
	guilds: {
		voice_states?: {
			user_id: string;
			suppress: boolean;
			session_id: string;
			self_video: boolean;
			self_mute: boolean;
			self_deaf: boolean;
			request_to_speak_timestamp: null;
			mute: boolean;
			deaf: boolean;
			channel_id: string;
			self_stream?: boolean;
		}[];
		id: string;
		embedded_activities?: {
			users: string[];
			update_code: number;
			embedded_activity: {
				type: null;
				timestamps: null;
				state: null;
				secrets: null;
				name: string;
				details: null;
				created_at: null;
				assets: null;
				application_id: string;
				activity_id: string;
			};
			connections: {
				user_id: string;
				metadata: {
					is_eligible_host: boolean;
				};
			}[];
			channel_id: string;
		}[];
	}[];
	game_invites: [];
	disclose: string[];
};

export type RESUMED = {
	_trace: string[];
};

export type SESSIONS_REPLACE = {
	status: string;
	session_id: string;
	client_info: {
		version: number;
		os: string;
		client: string;
	};
	activities: {
		type: number;
		state: string;
		name: string;
		id: string;
		created_at: number;
		timestamps?: {
			end: number;
			start?: number;
		};
		emoji?: {
			name: string;
		};
		sync_id?: string;
		session_id?: string;
		party?: {
			id: string;
		};
		flags?: number;
		details?: string;
		assets?: {
			large_text: string;
			large_image: string;
		};
	}[];
	active?: boolean;
}[];

export type STREAM_CREATE = {
	viewer_ids: [];
	stream_key: string;
	rtc_server_id: string;
	region: string;
	paused: boolean;
};

export type STREAM_DELETE = {
	stream_key: string;
	reason: string;
};

export type STREAM_SERVER_UPDATE = {
	token: string;
	stream_key: string;
	guild_id: null;
	endpoint: string;
};

export type STREAM_UPDATE = {
	viewer_ids: [];
	stream_key: string;
	region: string;
	paused: boolean;
	guild_id: null;
};

export type THREAD_CREATE = {
	type: number;
	total_message_sent: number;
	thread_metadata: {
		locked: boolean;
		create_timestamp: string;
		auto_archive_duration: number;
		archived: boolean;
		archive_timestamp: string;
	};
	rate_limit_per_user: number;
	parent_id: string;
	owner_id: string;
	newly_created: boolean;
	name: string;
	message_count: number;
	member_ids_preview: string[];
	member_count: number;
	last_message_id: null;
	id: string;
	guild_id: string;
	flags: number;
	applied_tags?: string[];
};

export type THREAD_LIST_SYNC = {
	threads: {
		type: number;
		total_message_sent: number;
		thread_metadata: {
			locked: boolean;
			invitable?: boolean;
			create_timestamp?: null | string;
			auto_archive_duration: number;
			archived: boolean;
			archive_timestamp: string;
		};
		rate_limit_per_user: number;
		parent_id: string;
		owner_id: string;
		name: string;
		message_count: number;
		member_ids_preview: string[];
		member_count: number;
		last_message_id: string;
		id: string;
		guild_id: string;
		flags: number;
		applied_tags?: string[];
		last_pin_timestamp?: string;
	}[];
	most_recent_messages: {
		type: number;
		tts: boolean;
		timestamp: string;
		referenced_message?: null | {
			type: number;
			tts: boolean;
			timestamp: string;
			position?: number;
			pinned: boolean;
			message_reference?: {
				type?: number;
				message_id: string;
				guild_id: string;
				channel_id: string;
			};
			mentions: {
				username: string;
				public_flags: number;
				id: string;
				global_name: string;
				discriminator: string;
				clan: null;
				avatar_decoration_data: null | {
					sku_id: string;
					asset: string;
				};
				avatar: null | string;
			}[];
			mention_roles: [];
			mention_everyone: boolean;
			id: string;
			flags: number;
			embeds: {
				video: {
					width: number;
					url: string;
					proxy_url: string;
					placeholder_version: number;
					placeholder: string;
					height: number;
				};
				url: string;
				type: string;
				content_scan_version: number;
			}[];
			edited_timestamp: null | string;
			content: string;
			components: [];
			channel_id: string;
			author: {
				username: string;
				public_flags: number;
				id: string;
				global_name: null | string;
				discriminator: string;
				clan: null;
				avatar_decoration_data: null | {
					sku_id: string;
					asset: string;
				};
				avatar: null | string;
			};
			attachments: {
				width: number;
				url: string;
				size: number;
				proxy_url: string;
				placeholder_version?: number;
				placeholder?: string;
				id: string;
				height: number;
				filename: string;
				content_type: string;
				content_scan_version: number;
			}[];
		};
		position: number;
		pinned: boolean;
		nonce?: string;
		mentions: {
			username: string;
			public_flags: number;
			id: string;
			global_name: null | string;
			discriminator: string;
			clan: null;
			avatar_decoration_data: null | {
				sku_id: string;
				asset: string;
			};
			avatar: null | string;
			member?: {
				roles: string[];
				premium_since: null | string;
				pending: boolean;
				nick: null | string;
				mute: boolean;
				joined_at: string;
				flags: number;
				deaf: boolean;
				communication_disabled_until: null | string;
				avatar: null | string;
				unusual_dm_activity_until?: string;
			};
		}[];
		mention_roles: [];
		mention_everyone: boolean;
		is_thread_dispatch: boolean;
		id: string;
		flags: number;
		embeds: {
			video?: {
				width: number;
				url: string;
				proxy_url: string;
				placeholder_version: number;
				placeholder: string;
				height: number;
			};
			url: string;
			type: string;
			thumbnail?: {
				width: number;
				url: string;
				proxy_url: string;
				placeholder_version: number;
				placeholder: string;
				height: number;
			};
			provider?: {
				url: string;
				name: string;
			};
			content_scan_version: number;
			title?: string;
			description?: string;
			color?: number;
			reference_id?: string;
		}[];
		edited_timestamp: null | string;
		content: string;
		components: [];
		channel_id: string;
		author: {
			username: string;
			public_flags: number;
			id: string;
			global_name: null | string;
			discriminator: string;
			clan?: null;
			avatar_decoration_data: null | {
				sku_id: string;
				asset: string;
			};
			avatar: null | string;
			premium_type?: number;
		};
		attachments: {
			width?: number;
			url: string;
			size: number;
			proxy_url: string;
			placeholder_version?: number;
			placeholder?: string;
			id: string;
			height?: number;
			filename: string;
			content_type: string;
			content_scan_version: number;
		}[];
		message_reference?: {
			type?: number;
			message_id: string;
			guild_id?: string;
			channel_id: string;
		};
		sticker_items?: {
			name: string;
			id: string;
			format_type: number;
		}[];
		member?: {
			roles: string[];
			premium_since: null | string;
			pending: boolean;
			nick: null | string;
			mute: boolean;
			joined_at: string;
			flags: number;
			deaf: boolean;
			communication_disabled_until: null | string;
			avatar: null | string;
			unusual_dm_activity_until?: string;
		};
	}[];
	guild_id: string;
};

export type THREAD_MEMBERS_UPDATE = {
	member_count: number;
	id: string;
	added_members: {
		user_id: string;
		presence: {
			user: {
				username: string;
				public_flags?: number;
				id: string;
				global_name: string;
				discriminator: string;
				clan: null;
				avatar_decoration_data: null;
				avatar: string;
			};
			status: string;
			game: null;
			client_status: {
				desktop?: string;
			};
			broadcast: null;
			activities: [];
		};
		member: {
			user: {
				username: string;
				public_flags: number;
				id: string;
				global_name: string;
				display_name: string;
				discriminator: string;
				clan: null;
				bot: boolean;
				avatar_decoration_data: null;
				avatar: string;
			};
			roles: string[];
			premium_since: null;
			pending: boolean;
			nick: null | string;
			mute: boolean;
			joined_at: string;
			flags: number;
			deaf: boolean;
			communication_disabled_until: null | string;
			avatar: null;
		};
		join_timestamp: string;
		id: string;
		flags: number;
	}[];
	guild_id: string;
};

export type THREAD_UPDATE = {
	type: number;
	total_message_sent: number;
	thread_metadata: {
		locked: boolean;
		create_timestamp: string;
		auto_archive_duration: number;
		archived: boolean;
		archive_timestamp: string;
	};
	rate_limit_per_user: number;
	parent_id: string;
	owner_id: string;
	name: string;
	message_count: number;
	member_ids_preview: string[];
	member_count: number;
	last_message_id: string;
	id: string;
	guild_id: string;
	flags: number;
	applied_tags?: string[];
	last_pin_timestamp?: string;
};

export type TYPING_START = {
	user_id: string;
	timestamp: number;
	member?: {
		user: {
			username: string;
			public_flags: number;
			id: string;
			global_name: null | string;
			display_name: null | string;
			discriminator: string;
			clan: null | {
				tag: string;
				identity_guild_id: string;
				identity_enabled: boolean;
				badge: string;
			};
			bot: boolean;
			avatar_decoration_data: null | {
				sku_id: string;
				asset: string;
			};
			avatar: null | string;
		};
		roles: string[];
		premium_since: null | string;
		pending: boolean;
		nick: null | string;
		mute: boolean;
		joined_at: string;
		flags: number;
		deaf: boolean;
		communication_disabled_until: null | string;
		avatar: null | string;
		unusual_dm_activity_until?: string;
		avatar_decoration_data?: {
			sku_id: string;
			asset: string;
		};
	};
	channel_id: string;
	guild_id?: string;
};

export type USER_CONNECTIONS_UPDATE = {
	visibility: number;
	verified: boolean;
	type: string;
	two_way_link: boolean;
	show_activity: boolean;
	revoked: boolean;
	name: string;
	metadata_visibility: number;
	id: string;
	friend_sync: boolean;
};

export type USER_SETTINGS_PROTO_UPDATE = {
	settings: {
		type: number;
		proto: string;
	};
	partial: boolean;
};

export type VOICE_CHANNEL_EFFECT_SEND = {
	user_id: string;
	sound_volume: number;
	sound_id: number;
	guild_id: null;
	emoji: {
		name: string;
		id: null;
		animated: boolean;
	};
	channel_id: string;
	animation_type: string;
	animation_id: number;
};

export type VOICE_CHANNEL_STATUS_UPDATE = {
	status: null;
	id: string;
	guild_id: string;
};

export type VOICE_SERVER_UPDATE = {
	token: string;
	guild_id: string;
	endpoint: string;
};

export type VOICE_STATE_UPDATE = {
	member?: {
		user: {
			username: string;
			public_flags: number;
			id: string;
			global_name: null | string;
			display_name: null | string;
			discriminator: string;
			clan: null | {
				tag: string;
				identity_guild_id: string;
				identity_enabled: boolean;
				badge: string;
			};
			bot: boolean;
			avatar_decoration_data: null | {
				sku_id: string;
				asset: string;
			};
			avatar: null | string;
		};
		roles: string[];
		premium_since: null | string;
		pending: boolean;
		nick: null | string;
		mute: boolean;
		joined_at: string;
		flags: number;
		deaf: boolean;
		communication_disabled_until: null | string;
		avatar: null | string;
		unusual_dm_activity_until?: string;
		avatar_decoration_data?: {
			sku_id: string;
			asset: string;
		};
	};
	user_id: string;
	suppress: boolean;
	session_id: string;
	self_video: boolean;
	self_mute: boolean;
	self_deaf: boolean;
	request_to_speak_timestamp: null | string;
	mute: boolean;
	guild_id: null | string;
	deaf: boolean;
	channel_id: null | string;
	self_stream?: boolean;
};

export type WEBHOOKS_UPDATE = {
	guild_id: string;
	channel_id: string;
};

export type Events =
	| { t: "CALL_CREATE", d: CALL_CREATE }
	| { t: "CALL_DELETE", d: CALL_DELETE }
	| { t: "CALL_UPDATE", d: CALL_UPDATE }
	| { t: "CHANNEL_CREATE", d: CHANNEL_CREATE }
	| { t: "CHANNEL_DELETE", d: CHANNEL_DELETE }
	| { t: "CHANNEL_PINS_ACK", d: CHANNEL_PINS_ACK }
	| { t: "CHANNEL_PINS_UPDATE", d: CHANNEL_PINS_UPDATE }
	| { t: "CHANNEL_STATUSES", d: CHANNEL_STATUSES }
	| { t: "CHANNEL_UPDATE", d: CHANNEL_UPDATE }
	| { t: "CONVERSATION_SUMMARY_UPDATE", d: CONVERSATION_SUMMARY_UPDATE }
	| { t: "EMBEDDED_ACTIVITY_UPDATE", d: EMBEDDED_ACTIVITY_UPDATE }
	| { t: "GUILD_APPLICATION_COMMAND_INDEX_UPDATE", d: GUILD_APPLICATION_COMMAND_INDEX_UPDATE }
	| { t: "GUILD_AUDIT_LOG_ENTRY_CREATE", d: GUILD_AUDIT_LOG_ENTRY_CREATE }
	| { t: "GUILD_BAN_ADD", d: GUILD_BAN_ADD }
	| { t: "GUILD_BAN_REMOVE", d: GUILD_BAN_REMOVE }
	| { t: "GUILD_CREATE", d: GUILD_CREATE }
	| { t: "GUILD_DELETE", d: GUILD_DELETE }
	| { t: "GUILD_INTEGRATIONS_UPDATE", d: GUILD_INTEGRATIONS_UPDATE }
	| { t: "GUILD_MEMBERS_CHUNK", d: GUILD_MEMBERS_CHUNK }
	| { t: "GUILD_MEMBER_LIST_UPDATE", d: GUILD_MEMBER_LIST_UPDATE }
	| { t: "GUILD_MEMBER_REMOVE", d: GUILD_MEMBER_REMOVE }
	| { t: "GUILD_MEMBER_UPDATE", d: GUILD_MEMBER_UPDATE }
	| { t: "GUILD_ROLE_DELETE", d: GUILD_ROLE_DELETE }
	| { t: "GUILD_ROLE_UPDATE", d: GUILD_ROLE_UPDATE }
	| { t: "GUILD_SCHEDULED_EVENT_USER_ADD", d: GUILD_SCHEDULED_EVENT_USER_ADD }
	| { t: "GUILD_UPDATE", d: GUILD_UPDATE }
	| { t: "INTEGRATION_DELETE", d: INTEGRATION_DELETE }
	| { t: "INTEGRATION_UPDATE", d: INTEGRATION_UPDATE }
	| { t: "MESSAGE_ACK", d: MESSAGE_ACK }
	| { t: "MESSAGE_CREATE", d: MESSAGE_CREATE }
	| { t: "MESSAGE_DELETE", d: MESSAGE_DELETE }
	| { t: "MESSAGE_DELETE_BULK", d: MESSAGE_DELETE_BULK }
	| { t: "MESSAGE_POLL_VOTE_ADD", d: MESSAGE_POLL_VOTE_ADD }
	| { t: "MESSAGE_POLL_VOTE_REMOVE", d: MESSAGE_POLL_VOTE_REMOVE }
	| { t: "MESSAGE_REACTION_ADD", d: MESSAGE_REACTION_ADD }
	| { t: "MESSAGE_REACTION_ADD_MANY", d: MESSAGE_REACTION_ADD_MANY }
	| { t: "MESSAGE_REACTION_REMOVE", d: MESSAGE_REACTION_REMOVE }
	| { t: "MESSAGE_UPDATE", d: MESSAGE_UPDATE }
	| { t: "PASSIVE_UPDATE_V2", d: PASSIVE_UPDATE_V2 }
	| { t: "PRESENCE_UPDATE", d: PRESENCE_UPDATE }
	| { t: "READY", d: READY }
	| { t: "READY_SUPPLEMENTAL", d: READY_SUPPLEMENTAL }
	| { t: "RESUMED", d: RESUMED }
	| { t: "SESSIONS_REPLACE", d: SESSIONS_REPLACE }
	| { t: "STREAM_CREATE", d: STREAM_CREATE }
	| { t: "STREAM_DELETE", d: STREAM_DELETE }
	| { t: "STREAM_SERVER_UPDATE", d: STREAM_SERVER_UPDATE }
	| { t: "STREAM_UPDATE", d: STREAM_UPDATE }
	| { t: "THREAD_CREATE", d: THREAD_CREATE }
	| { t: "THREAD_LIST_SYNC", d: THREAD_LIST_SYNC }
	| { t: "THREAD_MEMBERS_UPDATE", d: THREAD_MEMBERS_UPDATE }
	| { t: "THREAD_UPDATE", d: THREAD_UPDATE }
	| { t: "TYPING_START", d: TYPING_START }
	| { t: "USER_CONNECTIONS_UPDATE", d: USER_CONNECTIONS_UPDATE }
	| { t: "USER_SETTINGS_PROTO_UPDATE", d: USER_SETTINGS_PROTO_UPDATE }
	| { t: "VOICE_CHANNEL_EFFECT_SEND", d: VOICE_CHANNEL_EFFECT_SEND }
	| { t: "VOICE_CHANNEL_STATUS_UPDATE", d: VOICE_CHANNEL_STATUS_UPDATE }
	| { t: "VOICE_SERVER_UPDATE", d: VOICE_SERVER_UPDATE }
	| { t: "VOICE_STATE_UPDATE", d: VOICE_STATE_UPDATE }
	| { t: "WEBHOOKS_UPDATE", d: WEBHOOKS_UPDATE };

export type Dispatch = { op: 0, s: number } & Events;

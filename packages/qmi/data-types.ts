/* eslint-disable */

/**
 * This file is generated by the build-schemas script.
 * Do not edit it manually.
 */

import {
	WP_Block_Template,
	WP_Error,
	WP_Network,
	WP_Post_Type,
	WP_Post,
	WP_Screen,
	WP_Site,
	WP_Term,
	WP_User,
} from 'wp-types';

export interface DataTypes {
	Admin: AbstractData & Admin;
	Assets: AbstractData & Assets;
	Block_Editor: AbstractData & Block_Editor;
	Cache: AbstractData & Cache;
	Caps: AbstractData & Caps;
	Conditionals: AbstractData & Conditionals;
	DB_Callers: AbstractData & DB_Callers;
	DB_Components: AbstractData & DB_Components;
	DB_Dupes: AbstractData & DB_Dupes;
	DB_Queries: AbstractData & DB_Queries;
	Environment: AbstractData & Environment;
	Hooks: AbstractData & Hooks;
	HTTP: AbstractData & HTTP;
	Languages: AbstractData & Languages;
	Logger: AbstractData & Logger;
	Multisite: AbstractData & Multisite;
	Overview: AbstractData & Overview;
	PHP_Errors: AbstractData & PHP_Errors;
	Raw_Request: AbstractData & Raw_Request;
	Redirect: AbstractData & Redirect;
	Request: AbstractData & Request;
	Theme: AbstractData & Theme;
	Timing: AbstractData & Timing;
	Transients: AbstractData & Transients;
}
export interface AbstractData {
	types: {
		[k: string]: unknown;
	};
	component_times: {
		[k: string]: {
			component: string;
			ltime: number;
			types: {
				[k: string]: number;
			};
		};
	};
}
/**
 * Admin screen data transfer object.
 */
export interface Admin {
	current_screen?: WP_Screen;
	hook_suffix: string;
	list_table?: {
		columns_filter: string;
		sortables_filter: string;
		column_action: string;
		class_name?: string;
	};
	pagenow: string;
	taxnow: string;
	typenow: string;
}
/**
 * Asset data transfer object.
 */
export interface Assets {
	assets?: {
		missing?: AssetList;
		broken?: AssetList;
		header?: AssetList;
		footer?: AssetList;
	};
	counts: {
		missing: number;
		broken: number;
		header: number;
		footer: number;
		total: number;
	};
	default_version: string;
	dependencies: string[];
	dependents: string[];
	footer: string[];
	header: string[];
	full_host: string;
	host: string;
	is_ssl: boolean;
	missing_dependencies: {
		[k: string]: true;
	};
	port: string;
}
export interface AssetList {
	[k: string]: Asset;
}
export interface Asset {
	host: string;
	port: string;
	source: string | WP_Error;
	local: boolean;
	ver: string;
	warning: boolean;
	display: string;
	dependents: string[];
	dependencies: string[];
	[k: string]: unknown;
}
/**
 * Block editor data transfer object.
 */
export interface Block_Editor {
	all_dynamic_blocks: string[];
	block_editor_enabled: boolean;
	has_block_context: boolean;
	has_block_timing: boolean;
	post_blocks: unknown[];
	post_has_blocks: boolean;
	total_blocks: number;
}
/**
 * Cache data transfer object.
 */
export interface Cache {
	has_object_cache: boolean;
	display_hit_rate_warning: boolean;
	has_opcode_cache: boolean;
	cache_hit_percentage: number;
	stats: {
		[k: string]: unknown;
	};
	object_cache_extensions: {
		[k: string]: boolean;
	};
	opcode_cache_extensions: {
		[k: string]: boolean;
	};
}
/**
 * User capability checks data transfer object.
 */
export interface Caps {
	caps: {
		args: unknown[];
		filtered_trace: FrameItem[];
		component: Component;
		result: boolean;
		parts: string[];
		name: string;
		user: string;
	}[];
	parts: string[];
	users: number[];
	components: {
		[k: string]: string;
	};
}
/**
 * Stack trace frame.
 */
export interface FrameItem {
	display: string;
	args: string[];
	calling_file: string;
	calling_line: number;
	file: string;
	function: string;
	id: string;
	line: number;
}
/**
 * Class representing a component.
 */
export interface Component {
	type: string;
	name: string;
	context: string;
}
/**
 * Conditionals data transfer object.
 */
export interface Conditionals {
	conds: {
		true: string[];
		false: string[];
		na: string[];
	};
}
/**
 * Database query callers data transfer object.
 */
export interface DB_Callers {
	times: {
		[k: string]: {
			caller: string;
			ltime: number;
			types: {
				[k: string]: number;
			};
		};
	};
}
/**
 * Database query components data transfer object.
 */
export interface DB_Components {
	times: {
		[k: string]: {
			ltime: number;
			types: {
				[k: string]: number;
			};
			component: string;
		};
	};
}
/**
 * Duplicate database queries data transfer object.
 */
export interface DB_Dupes {
	total_qs: number;
	dupe_sources: {
		[k: string]: {
			[k: string]: number;
		};
	};
	dupe_callers: {
		[k: string]: {
			[k: string]: number;
		};
	};
	dupe_components: {
		[k: string]: {
			[k: string]: number;
		};
	};
	dupes: {
		[k: string]: number[];
	};
	dupe_times: {
		[k: string]: number;
	};
}
/**
 * Database queries data transfer object.
 */
export interface DB_Queries {
	total_qs: number;
	total_time: number;
	errors: {
		[k: string]: unknown;
	}[];
	expensive?: {
		[k: string]: unknown;
	}[];
	rows?: QueryRow[];
	has_result: boolean;
	has_trace: boolean;
	has_main_query: boolean;
	times?: {
		[k: string]: {
			caller: string;
			ltime: number;
			types: {
				[k: string]: number;
			};
		};
	};
	dupes?: {
		[k: string]: number[];
	};
}
export interface QueryRow {
	caller: string;
	caller_name: string | null;
	stack?: string[];
	sql: string;
	ltime: number;
	result: number | boolean | WP_Error;
	type: string;
	component: Component | null;
	trace: {
		[k: string]: unknown;
	} | null;
	is_main_query: boolean;
	filtered_trace?: FrameItem[];
}
/**
 * Environment data transfer object.
 */
export interface Environment {
	php: {
		variables: {
			[k: string]: string | null;
		};
		version: string | false;
		sapi: string | false;
		user: string;
		old: boolean;
		extensions: {
			[k: string]: string;
		};
		error_reporting: number;
		error_levels: {
			[k: string]: boolean;
		};
	};
	db: {
		info: {
			"server-version": string;
			extension: string | null;
			"client-version": string | null;
			user: string;
			host: string;
			database: string;
		};
		variables: {
			Variable_name: string;
			Value: string;
		}[];
	};
	wp: {
		version: string;
		environment_type?: string;
		development_mode?: string;
		constants: {
			[k: string]: string;
		};
	};
	server: {
		name: string;
		version: string | null;
		address: string | null;
		host: string | null;
		OS: string | null;
		arch: string | null;
	};
}
/**
 * Hooks data transfer object.
 */
export interface Hooks {
	hooks: {
		name: string;
		actions: {
			priority: number;
			callback: {
				accepted_args: number;
				name?: string;
				file?: string | false;
				line?: number | false;
				error?: WP_Error;
				component?: Component;
			};
		}[];
		parts: string[];
		components: {
			[k: string]: string;
		};
	}[];
	parts: string[];
	components: {
		[k: string]: string;
	};
	all_hooks: boolean;
}
/**
 * HTTP data transfer object.
 */
export interface HTTP {
	http: {
		[k: string]: {
			args: {
				method: string;
				timeout: number;
				redirection?: number;
				blocking?: boolean;
				sslverify?: boolean;
				[k: string]: unknown;
			};
			component: Component;
			filtered_trace: FrameItem[];
			info: {
				[k: string]: unknown;
			} | null;
			host: string;
			local: boolean;
			ltime: number;
			redirected_to: string | null;
			response:
				| {
						headers: {
							[k: string]: unknown;
						};
						body: string;
						response: {
							code: number;
							message: string;
						};
						cookies: {
							[k: string]: unknown;
						}[];
						filename: string | null;
						http_response: {
							[k: string]: unknown;
						};
				  }
				| WP_Error;
			type: string;
			url: string;
		};
	};
	ltime: number;
	errors: {
		alert?: string[];
		warning?: string[];
	};
}
/**
 * Languages data transfer object.
 */
export interface Languages {
	languages: {
		[k: string]: {
			[k: string]: {
				caller: FrameItem;
				domain: string;
				file: string | false;
				found: number | false;
				handle: string | null;
				type: "gettext" | "jed";
			};
		};
	};
	locale: string;
	user_locale: string;
	determined_locale: string;
	language_attributes: string;
	/**
	 * MultilingualPress language.
	 */
	mlp_language: string;
	/**
	 * Polylang language.
	 */
	pll_language: string;
	total_size: number;
}
/**
 * Logger data transfer object.
 */
export interface Logger {
	counts: {
		[k: string]: {
			[k: string]: number;
		};
	};
	logs: {
		message: string;
		filtered_trace: FrameItem[];
		component: Component;
		level: string;
		[k: string]: unknown;
	}[];
	components: {
		[k: string]: string;
	};
	levels: string[];
	warning_levels: string[];
}
/**
 * Multisite data transfer object.
 */
export interface Multisite {
	switches: {
		new: number;
		prev: number;
		to: boolean;
		trace: {
			[k: string]: unknown;
		};
	}[];
}
/**
 * Overview data transfer object.
 */
export interface Overview {
	time_taken?: number;
	time_limit: number;
	time_start: number;
	time_usage: number;
	memory: number;
	memory_limit: number;
	memory_usage: number;
	current_user?: {
		[k: string]: unknown;
	};
	switched_user?: {
		[k: string]: unknown;
	};
	display_time_usage_warning: boolean;
	display_memory_usage_warning: boolean;
	is_admin: boolean;
}
/**
 * PHP errors data transfer object.
 */
export interface PHP_Errors {
	components: {
		[k: string]: string;
	};
	errors: ErrorObjects;
	suppressed: ErrorObjects;
	silenced: ErrorObjects;
}
export interface ErrorObjects {
	[k: string]: {
		[k: string]: ErrorObject;
	};
}
export interface ErrorObject {
	errno: number;
	type: string;
	message: string;
	file: string | null;
	filename: string;
	line: number | null;
	filtered_trace: FrameItem[] | null;
	component: Component;
	calls: number;
}
/**
 * Raw request data transfer object.
 */
export interface Raw_Request {
	request: {
		[k: string]: unknown;
	};
	response: {
		[k: string]: unknown;
	};
}
/**
 * Redirect data transfer object.
 */
export interface Redirect {
	trace?: {
		[k: string]: unknown;
	};
	location?: string;
	status?: number;
}
/**
 * Request data transfer object.
 */
export interface Request {
	user: {
		title: string;
		data: WP_User | false;
	};
	multisite: {
		current_site?: {
			title: string;
			data: WP_Site;
		};
		current_network?: {
			title: string;
			data: WP_Network;
		};
	};
	request: {
		request: string;
		matched_rule?: string;
		matched_query?: string;
		query_string: string;
	};
	qvars: {
		[k: string]:
			| string
			| unknown[]
			| {
					[k: string]: unknown;
			  };
	};
	queried_object?: {
		title: string;
		data?: WP_Term | WP_Post_Type | WP_Post | WP_User;
		type?: "WP_Term" | "WP_Post_Type" | "WP_Post" | "WP_User";
	};
	request_method: string;
	matching_rewrites: {
		[k: string]: string;
	};
}
/**
 * Theme data transfer object.
 */
export interface Theme {
	is_child_theme: boolean;
	stylesheet_theme_json: string;
	template_theme_json: string;
	block_template: WP_Block_Template | null;
	theme_dirs: {
		[k: string]: string;
	};
	theme_folders: {
		[k: string]: string;
	};
	stylesheet: string;
	template: string;
	theme_template_file: string;
	template_path: string;
	template_file?: string;
	template_hierarchy?: string[];
	timber_files?: string[];
	body_class?: string[];
	template_parts: {
		[k: string]: string;
	};
	theme_template_parts: {
		[k: string]: string;
	};
	count_template_parts: {
		[k: string]: number;
	};
	unsuccessful_template_parts: {
		[k: string]: unknown;
	}[];
}
/**
 * Timing data transfer object.
 */
export interface Timing {
	warning: {
		function: string;
		message: string;
		filtered_trace: FrameItem[];
		component: Component;
	}[];
	timing: {
		function: string;
		function_time: number;
		function_memory: number;
		laps: {
			[k: string]: {
				time: number;
				time_used: number;
				memory: number;
				memory_used: number;
				data: unknown;
			};
		};
		filtered_trace: FrameItem[];
		component: Component;
		start_time: number;
		end_time: number;
	}[];
}
/**
 * Transients data transfer object.
 */
export interface Transients {
	trans: {
		name: string;
		filtered_trace: FrameItem[];
		component: Component;
		type: string;
		value: unknown;
		expiration: number;
		exp_diff: string;
		size: number;
		size_formatted: string;
	}[];
	has_type: boolean;
}

globalThis.__nitro_main__ = import.meta.url;
import { n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/Galabau-02.jpg": {
		"type": "image/jpeg",
		"etag": "\"6618e-wTwCB1ewferK6juhdKEa8mt2da8\"",
		"mtime": "2026-08-12T13:15:13.726Z",
		"size": 418190,
		"path": "../public/Galabau-02.jpg"
	},
	"/Tief-bau.jpeg": {
		"type": "image/jpeg",
		"etag": "\"437ca-ok3SkDs3VGLdwiiQuPu3vWRxGRg\"",
		"mtime": "2026-08-12T13:15:13.727Z",
		"size": 276426,
		"path": "../public/Tief-bau.jpeg"
	},
	"/favicon-dhansa-white.svg": {
		"type": "image/svg+xml",
		"etag": "\"1d1-aKW8hn4Q86RGyzqeidJNOlMItfk\"",
		"mtime": "2026-08-12T13:15:13.726Z",
		"size": 465,
		"path": "../public/favicon-dhansa-white.svg"
	},
	"/galabau-werk-01.jpeg": {
		"type": "image/jpeg",
		"etag": "\"3a899-Gwa4Z0+sNIo0GETCsQ1caG1/e10\"",
		"mtime": "2026-08-12T13:15:13.727Z",
		"size": 239769,
		"path": "../public/galabau-werk-01.jpeg"
	},
	"/favicon (1).ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-08-12T13:15:13.726Z",
		"size": 20373,
		"path": "../public/favicon (1).ico"
	},
	"/standorte-karte.html": {
		"type": "text/html; charset=utf-8",
		"etag": "\"337b-yLHt5uERLb/tgR3MwcnZ9XLxrFE\"",
		"mtime": "2026-08-12T13:15:13.727Z",
		"size": 13179,
		"path": "../public/standorte-karte.html"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-08-12T13:15:13.727Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/logo/Kaercher_Logo.png": {
		"type": "image/png",
		"etag": "\"c884-359mk6v+w+jqLD36XktUdF32jqM\"",
		"mtime": "2026-08-12T13:15:13.725Z",
		"size": 51332,
		"path": "../public/logo/Kaercher_Logo.png"
	},
	"/logo/bbc.png": {
		"type": "image/png",
		"etag": "\"147f-cX/2gCR1+tBrYx6JT4bx8sOFyI8\"",
		"mtime": "2026-08-12T13:15:13.725Z",
		"size": 5247,
		"path": "../public/logo/bbc.png"
	},
	"/logo/handwerkskammer-hamburg-logo.webp": {
		"type": "image/webp",
		"etag": "\"145c-AXvUq9VbqDxIz0a+qq9bRLxoJG8\"",
		"mtime": "2026-08-12T13:15:13.725Z",
		"size": 5212,
		"path": "../public/logo/handwerkskammer-hamburg-logo.webp"
	},
	"/logo/bg-bau-logo.jpeg": {
		"type": "image/jpeg",
		"etag": "\"4801-wTvAcm+RsP6NEnGDTAQhTB+ETtE\"",
		"mtime": "2026-08-12T13:15:13.725Z",
		"size": 18433,
		"path": "../public/logo/bg-bau-logo.jpeg"
	},
	"/logo/images.png": {
		"type": "image/png",
		"etag": "\"16ce-EHLT/2RdjZIXZhyme2TaCNdJoUU\"",
		"mtime": "2026-08-12T13:15:13.725Z",
		"size": 5838,
		"path": "../public/logo/images.png"
	},
	"/logo/logo-prowin-international-rgb.jpg": {
		"type": "image/jpeg",
		"etag": "\"12cd5-7nCirYz3Bgg5IBvjFqJqiGy3X1c\"",
		"mtime": "2026-08-12T13:15:13.725Z",
		"size": 77013,
		"path": "../public/logo/logo-prowin-international-rgb.jpg"
	},
	"/map-svg-3.svg": {
		"type": "image/svg+xml",
		"etag": "\"5eb45-RHuVSOLpBPAriP7fhud1r/4A5IM\"",
		"mtime": "2026-08-12T13:15:13.727Z",
		"size": 387909,
		"path": "../public/map-svg-3.svg"
	},
	"/logo/logo-shop.png": {
		"type": "image/png",
		"etag": "\"3d2a-mB7btM23w+dSfzxmA0czWPLqqAQ\"",
		"mtime": "2026-08-12T13:15:13.725Z",
		"size": 15658,
		"path": "../public/logo/logo-shop.png"
	},
	"/logo/tork-logo.png": {
		"type": "image/png",
		"etag": "\"1c04-7k5cGeSoJLVaU0SHiwFszYpJQgk\"",
		"mtime": "2026-08-12T13:15:13.725Z",
		"size": 7172,
		"path": "../public/logo/tork-logo.png"
	},
	"/logo/vw.jpg": {
		"type": "image/jpeg",
		"etag": "\"17fd1-oguVFEMjX98xto0u2Lw88Gd9A+M\"",
		"mtime": "2026-08-12T13:15:13.725Z",
		"size": 98257,
		"path": "../public/logo/vw.jpg"
	},
	"/Galabau-03.jpg": {
		"type": "image/jpeg",
		"etag": "\"73bdb-T0QJt+pldulyGBzgPD4u/9OMFEk\"",
		"mtime": "2026-08-12T13:15:13.726Z",
		"size": 474075,
		"path": "../public/Galabau-03.jpg"
	},
	"/Galabau-hero.jpg": {
		"type": "image/jpeg",
		"etag": "\"6f9f6-YArRK33VPTzWW0wlb9Axujv0r3g\"",
		"mtime": "2026-08-12T13:15:13.726Z",
		"size": 457206,
		"path": "../public/Galabau-hero.jpg"
	},
	"/logo/redbull.webp": {
		"type": "image/webp",
		"etag": "\"405a-Y/s0YgyV5qlHGDcDRcK7LNEGGaw\"",
		"mtime": "2026-08-12T13:15:13.725Z",
		"size": 16474,
		"path": "../public/logo/redbull.webp"
	},
	"/assets/Gebaeudereinung-02-BZyHVPNJ.jpeg": {
		"type": "image/jpeg",
		"etag": "\"21a7e-x/xwfLAqREqjJFOwf6BhMir7xFc\"",
		"mtime": "2026-08-12T13:15:13.559Z",
		"size": 137854,
		"path": "../public/assets/Gebaeudereinung-02-BZyHVPNJ.jpeg"
	},
	"/assets/Gebaeudereinung-03-L1ihJJmn.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1e66a-ewzvP1bD3gzaQajdfKtO3XQ09S4\"",
		"mtime": "2026-08-12T13:15:13.559Z",
		"size": 124522,
		"path": "../public/assets/Gebaeudereinung-03-L1ihJJmn.jpeg"
	},
	"/assets/SiteFooter-WNJH9Dji.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"32bb-QjIz7+7loT17ofzgtaqt27N/UWw\"",
		"mtime": "2026-08-12T13:15:13.558Z",
		"size": 12987,
		"path": "../public/assets/SiteFooter-WNJH9Dji.js"
	},
	"/Galabau-01.jpg": {
		"type": "image/jpeg",
		"etag": "\"803c7-Bijdrc6Xsvjn7AA9Z8NCO/hoH+A\"",
		"mtime": "2026-08-12T13:15:13.726Z",
		"size": 525255,
		"path": "../public/Galabau-01.jpg"
	},
	"/assets/Personal-BBj7EZ-t.jpeg": {
		"type": "image/jpeg",
		"etag": "\"2b2d1-h8Dqd1Un5DYW3cSc7t1hO8NJSWg\"",
		"mtime": "2026-08-12T13:15:13.559Z",
		"size": 176849,
		"path": "../public/assets/Personal-BBj7EZ-t.jpeg"
	},
	"/assets/accordion-isGlUkdj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"59e2-K18RpmFeP0osRwidRXl5OycjShU\"",
		"mtime": "2026-08-12T13:15:13.558Z",
		"size": 23010,
		"path": "../public/assets/accordion-isGlUkdj.js"
	},
	"/assets/agb-CXNZ78Hd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a00-ho8QIxi6d1yZp6FQXxUXE2pISJ0\"",
		"mtime": "2026-08-12T13:15:13.558Z",
		"size": 2560,
		"path": "../public/assets/agb-CXNZ78Hd.js"
	},
	"/assets/Winter-diesnt-02-DBZrW7SX.jpeg": {
		"type": "image/jpeg",
		"etag": "\"2d807-AM3MEeqXVuif53Z7mt0HJezp/eQ\"",
		"mtime": "2026-08-12T13:15:13.559Z",
		"size": 186375,
		"path": "../public/assets/Winter-diesnt-02-DBZrW7SX.jpeg"
	},
	"/assets/datenschutz-BEk7SJrz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a4e-nO27XUGhLdlLAaqp57aAOnuzLqc\"",
		"mtime": "2026-08-12T13:15:13.559Z",
		"size": 2638,
		"path": "../public/assets/datenschutz-BEk7SJrz.js"
	},
	"/assets/Transport-umzug-D_Uyfnoo.jpeg": {
		"type": "image/jpeg",
		"etag": "\"3ba19-vqyqZWUfYd0UJtzmCh80DwSdY+E\"",
		"mtime": "2026-08-12T13:15:13.559Z",
		"size": 244249,
		"path": "../public/assets/Transport-umzug-D_Uyfnoo.jpeg"
	},
	"/assets/impressum-CL0uSmw2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"804-13eDwquHCIx01NPR7U0BRRDsZSU\"",
		"mtime": "2026-08-12T13:15:13.559Z",
		"size": 2052,
		"path": "../public/assets/impressum-CL0uSmw2.js"
	},
	"/assets/bau-arbeit-DJPq5Afd.jpeg": {
		"type": "image/jpeg",
		"etag": "\"437ca-ok3SkDs3VGLdwiiQuPu3vWRxGRg\"",
		"mtime": "2026-08-12T13:15:13.560Z",
		"size": 276426,
		"path": "../public/assets/bau-arbeit-DJPq5Afd.jpeg"
	},
	"/assets/_serviceId-C8vybMq-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"45c1-VswA2Ito1CjogJoszSd26AHliJI\"",
		"mtime": "2026-08-12T13:15:13.558Z",
		"size": 17857,
		"path": "../public/assets/_serviceId-C8vybMq-.js"
	},
	"/assets/Winter-diesnt-MTSFmDUY.jpeg": {
		"type": "image/jpeg",
		"etag": "\"391ba-022+pDu8LZEtPxvDKhSUwIhkRPY\"",
		"mtime": "2026-08-12T13:15:13.559Z",
		"size": 233914,
		"path": "../public/assets/Winter-diesnt-MTSFmDUY.jpeg"
	},
	"/assets/routes-DYihsLmw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14b77-Deu0fFsAwKfIIel3bw/yCUCW7zA\"",
		"mtime": "2026-08-12T13:15:13.559Z",
		"size": 84855,
		"path": "../public/assets/routes-DYihsLmw.js"
	},
	"/assets/logo-BUq-wfXe.png": {
		"type": "image/png",
		"etag": "\"6987-Lbzgztl36XaIWSljfoPPQzWy7FA\"",
		"mtime": "2026-08-12T13:15:13.562Z",
		"size": 27015,
		"path": "../public/assets/logo-BUq-wfXe.png"
	},
	"/assets/styles-DKjycWuN.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"19917-Qudgm6nbbbUs9cs9ObZMWJ7pq7M\"",
		"mtime": "2026-08-12T13:15:13.562Z",
		"size": 104727,
		"path": "../public/assets/styles-DKjycWuN.css"
	},
	"/assets/strasse-bau-CZavTSN8.jpeg": {
		"type": "image/jpeg",
		"etag": "\"3a899-Gwa4Z0+sNIo0GETCsQ1caG1/e10\"",
		"mtime": "2026-08-12T13:15:13.562Z",
		"size": 239769,
		"path": "../public/assets/strasse-bau-CZavTSN8.jpeg"
	},
	"/assets/index-Coewd1nL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6176a-P6S5woBkz5AM4PdUaPxwK3Gk8XE\"",
		"mtime": "2026-08-12T13:15:13.558Z",
		"size": 399210,
		"path": "../public/assets/index-Coewd1nL.js"
	},
	"/assets/elb-Bnq1FDqK.mp4": {
		"type": "video/mp4",
		"etag": "\"f9eaa5-VyeAV4qJIiGF6J1YcOyFSNRTg38\"",
		"mtime": "2026-08-12T13:15:13.561Z",
		"size": 16378533,
		"path": "../public/assets/elb-Bnq1FDqK.mp4"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_1VJRnk = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_1VJRnk
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };

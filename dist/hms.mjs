import * as e from "react";
import t, { PureComponent as n, cloneElement as r, createContext as i, createRef as a, isValidElement as o, useCallback as s, useContext as c, useDebugValue as l, useEffect as u, useLayoutEffect as d, useMemo as f, useReducer as p, useRef as m, useState as h } from "react";
import { findDOMNode as g } from "react-dom";
//#region \0rolldown/runtime.js
var _ = Object.create, v = Object.defineProperty, y = Object.getOwnPropertyDescriptor, ee = Object.getOwnPropertyNames, te = Object.getPrototypeOf, b = Object.prototype.hasOwnProperty, ne = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), x = (e, t) => {
	let n = {};
	for (var r in e) v(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || v(n, Symbol.toStringTag, { value: "Module" }), n;
}, re = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = ee(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !b.call(e, s) && s !== n && v(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = y(t, s)) || r.enumerable
	});
	return e;
}, ie = (e, t, n) => (n = e == null ? {} : _(te(e)), re(t || !e || !e.__esModule ? v(n, "default", {
	value: e,
	enumerable: !0
}) : n, e));
//#endregion
//#region node_modules/zustand/esm/index.js
function ae(e) {
	let t, n = /* @__PURE__ */ new Set(), r = (e, r) => {
		let i = typeof e == "function" ? e(t) : e;
		if (i !== t) {
			let e = t;
			t = r ? i : Object.assign({}, t, i), n.forEach((n) => n(t, e));
		}
	}, i = () => t, a = (e, r = i, a = Object.is) => {
		console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");
		let o = r(t);
		function s() {
			let n = r(t);
			if (!a(o, n)) {
				let t = o;
				e(o = n, t);
			}
		}
		return n.add(s), () => n.delete(s);
	}, o = {
		setState: r,
		getState: i,
		subscribe: (e, t, r) => t || r ? a(e, t, r) : (n.add(e), () => n.delete(e)),
		destroy: () => n.clear()
	};
	return t = e(r, i, o), o;
}
var oe = typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent) ? u : d;
function se(e) {
	let t = typeof e == "function" ? ae(e) : e, n = (e = t.getState, n = Object.is) => {
		let [, r] = p((e) => e + 1, 0), i = t.getState(), a = m(i), o = m(e), s = m(n), c = m(!1), u = m();
		u.current === void 0 && (u.current = e(i));
		let d, f = !1;
		(a.current !== i || o.current !== e || s.current !== n || c.current) && (d = e(i), f = !n(u.current, d)), oe(() => {
			f && (u.current = d), a.current = i, o.current = e, s.current = n, c.current = !1;
		});
		let h = m(i);
		oe(() => {
			let e = () => {
				try {
					let e = t.getState(), n = o.current(e);
					s.current(u.current, n) || (a.current = e, u.current = n, r());
				} catch {
					c.current = !0, r();
				}
			}, n = t.subscribe(e);
			return t.getState() !== h.current && e(), n;
		}, []);
		let g = f ? d : u.current;
		return l(g), g;
	};
	return Object.assign(n, t), n[Symbol.iterator] = function() {
		console.warn("[useStore, api] = create() is deprecated and will be removed in v4");
		let e = [n, t];
		return { next() {
			let t = e.length <= 0;
			return {
				value: e.shift(),
				done: t
			};
		} };
	}, n;
}
//#endregion
//#region node_modules/reselect/es/index.js
function S(e, t) {
	return e === t;
}
function ce(e, t, n) {
	if (t === null || n === null || t.length !== n.length) return !1;
	for (var r = t.length, i = 0; i < r; i++) if (!e(t[i], n[i])) return !1;
	return !0;
}
function le(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : S, n = null, r = null;
	return function() {
		return ce(t, n, arguments) || (r = e.apply(null, arguments)), n = arguments, r;
	};
}
function ue(e) {
	var t = Array.isArray(e[0]) ? e[0] : e;
	if (!t.every(function(e) {
		return typeof e == "function";
	})) {
		var n = t.map(function(e) {
			return typeof e;
		}).join(", ");
		throw Error("Selector creators expect all input-selectors to be functions, " + ("instead received the following types: [" + n + "]"));
	}
	return t;
}
function de(e) {
	var t = [...arguments].slice(1);
	return function() {
		var n = [...arguments], r = 0, i = n.pop(), a = ue(n), o = e.apply(void 0, [function() {
			return r++, i.apply(null, arguments);
		}].concat(t)), s = e(function() {
			for (var e = [], t = a.length, n = 0; n < t; n++) e.push(a[n].apply(null, arguments));
			return o.apply(null, e);
		});
		return s.resultFunc = i, s.dependencies = a, s.recomputations = function() {
			return r;
		}, s.resetRecomputations = function() {
			return r = 0;
		}, s;
	};
}
var C = de(le), fe = "2.0.9", pe = 500, me = "user-agent", he = "", ge = "?", w = {
	FUNCTION: "function",
	OBJECT: "object",
	STRING: "string",
	UNDEFINED: "undefined"
}, _e = "browser", ve = "cpu", T = "device", ye = "engine", be = "os", xe = "result", E = "name", D = "type", O = "vendor", k = "version", Se = "architecture", Ce = "major", A = "model", we = "console", j = "mobile", M = "tablet", N = "smarttv", Te = "wearable", Ee = "xr", De = "embedded", Oe = "fetcher", ke = "inapp", Ae = "brands", je = "formFactors", Me = "fullVersionList", Ne = "platform", Pe = "platformVersion", Fe = "bitness", Ie = "sec-ch-ua", Le = Ie + "-full-version-list", Re = Ie + "-arch", ze = Ie + "-" + Fe, Be = Ie + "-form-factors", Ve = Ie + "-" + j, He = Ie + "-" + A, Ue = Ie + "-" + Ne, We = Ue + "-version", Ge = [
	Ae,
	Me,
	j,
	A,
	Ne,
	Pe,
	Se,
	je,
	Fe
], Ke = "Amazon", qe = "Apple", Je = "ASUS", Ye = "BlackBerry", Xe = "Google", Ze = "Huawei", Qe = "Lenovo", $e = "Honor", et = "LG", tt = "Microsoft", nt = "Motorola", rt = "Nvidia", it = "OnePlus", at = "OPPO", ot = "Samsung", st = "Sharp", ct = "Sony", lt = "Xiaomi", ut = "Zebra", dt = "Chrome", ft = "Chromium", pt = "Chromecast", mt = "Edge", ht = "Firefox", gt = "Opera", _t = "Facebook", vt = "Sogou", yt = "Mobile ", bt = " Browser", xt = "Windows", St = typeof window !== w.UNDEFINED && window.navigator ? window.navigator : void 0, Ct = St && St.userAgentData ? St.userAgentData : void 0, wt = function(e, t) {
	var n = {}, r = t;
	if (!Dt(t)) for (var i in r = {}, t) for (var a in t[i]) r[a] = t[i][a].concat(r[a] ? r[a] : []);
	for (var o in e) n[o] = r[o] && r[o].length % 2 == 0 ? r[o].concat(e[o]) : e[o];
	return n;
}, Tt = function(e) {
	for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
	return t;
}, Et = function(e, t) {
	if (typeof e === w.OBJECT && e.length > 0) {
		for (var n in e) if (At(t) == At(e[n])) return !0;
		return !1;
	}
	return Ot(e) ? At(t) == At(e) : !1;
}, Dt = function(e, t) {
	for (var n in e) return /^(browser|cpu|device|engine|os)$/.test(n) || (t ? Dt(e[n]) : !1);
}, Ot = function(e) {
	return typeof e === w.STRING;
}, kt = function(e) {
	if (e) {
		for (var t = [], n = Nt(/\\?\"/g, e).split(","), r = 0; r < n.length; r++) if (n[r].indexOf(";") > -1) {
			var i = Ft(n[r]).split(";v=");
			t[r] = {
				brand: i[0],
				version: i[1]
			};
		} else t[r] = Ft(n[r]);
		return t;
	}
}, At = function(e) {
	return Ot(e) ? e.toLowerCase() : e;
}, jt = function(e) {
	return Ot(e) ? Nt(/[^\d\.]/g, e).split(".")[0] : void 0;
}, Mt = function(e) {
	for (var t in e) if (e.hasOwnProperty(t)) {
		var n = e[t];
		typeof n == w.OBJECT && n.length == 2 ? this[n[0]] = n[1] : this[n] = void 0;
	}
	return this;
}, Nt = function(e, t) {
	return Ot(t) ? t.replace(e, he) : t;
}, Pt = function(e) {
	return Nt(/\\?\"/g, e);
}, Ft = function(e, t) {
	return e = Nt(/^\s\s*/, String(e)), typeof t === w.UNDEFINED ? e : e.substring(0, t);
}, It = function(e, t) {
	if (!(!e || !t)) for (var n = 0, r, i, a, o, s, c; n < t.length && !s;) {
		var l = t[n], u = t[n + 1];
		for (r = i = 0; r < l.length && !s && l[r];) if (s = l[r++].exec(e), s) for (a = 0; a < u.length; a++) c = s[++i], o = u[a], typeof o === w.OBJECT && o.length > 0 ? o.length === 2 ? typeof o[1] == w.FUNCTION ? this[o[0]] = o[1].call(this, c) : this[o[0]] = o[1] : o.length >= 3 && (typeof o[1] === w.FUNCTION && !(o[1].exec && o[1].test) ? o.length > 3 ? this[o[0]] = c ? o[1].apply(this, o.slice(2)) : void 0 : this[o[0]] = c ? o[1].call(this, c, o[2]) : void 0 : o.length == 3 ? this[o[0]] = c ? c.replace(o[1], o[2]) : void 0 : o.length == 4 ? this[o[0]] = c ? o[3].call(this, c.replace(o[1], o[2])) : void 0 : o.length > 4 && (this[o[0]] = c ? o[3].apply(this, [c.replace(o[1], o[2])].concat(o.slice(4))) : void 0)) : this[o] = c || void 0;
		n += 2;
	}
}, Lt = function(e, t) {
	for (var n in t) if (typeof t[n] === w.OBJECT && t[n].length > 0) {
		for (var r = 0; r < t[n].length; r++) if (Et(t[n][r], e)) return n === ge ? void 0 : n;
	} else if (Et(t[n], e)) return n === ge ? void 0 : n;
	return t.hasOwnProperty("*") ? t["*"] : e;
}, Rt = {
	ME: "4.90",
	"NT 3.51": "3.51",
	"NT 4.0": "4.0",
	2e3: ["5.0", "5.01"],
	XP: ["5.1", "5.2"],
	Vista: "6.0",
	7: "6.1",
	8: "6.2",
	"8.1": "6.3",
	10: ["6.4", "10.0"],
	NT: ""
}, zt = {
	embedded: "Automotive",
	mobile: "Mobile",
	tablet: ["Tablet", "EInk"],
	smarttv: "TV",
	wearable: "Watch",
	xr: ["VR", "XR"],
	"?": ["Desktop", "Unknown"],
	"*": void 0
}, Bt = {
	Chrome: "Google Chrome",
	Edge: "Microsoft Edge",
	"Edge WebView2": "Microsoft Edge WebView2",
	"Chrome WebView": "Android WebView",
	"Chrome Headless": "HeadlessChrome",
	"Huawei Browser": "HuaweiBrowser",
	"MIUI Browser": "Miui Browser",
	"Opera Mobi": "OperaMobile",
	Yandex: "YaBrowser"
}, Vt = {
	browser: [
		[/\b(?:crmo|crios)\/([\w\.]+)/i],
		[k, [E, yt + "Chrome"]],
		[/webview.+edge\/([\w\.]+)/i],
		[k, [E, mt + " WebView"]],
		[/edg(?:e|ios|a)?\/([\w\.]+)/i],
		[k, [E, "Edge"]],
		[
			/(opera mini)\/([-\w\.]+)/i,
			/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
			/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
		],
		[E, k],
		[/opios[\/ ]+([\w\.]+)/i],
		[k, [E, gt + " Mini"]],
		[/\bop(?:rg)?x\/([\w\.]+)/i],
		[k, [E, gt + " GX"]],
		[/\bopr\/([\w\.]+)/i],
		[k, [E, gt]],
		[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
		[k, [E, "Baidu"]],
		[/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
		[k, [E, "Maxthon"]],
		[
			/(kindle)\/([\w\.]+)/i,
			/(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
			/(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
			/(?:ms|\()(ie) ([\w\.]+)/i,
			/(atlas|flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon|otter|dooble|(?:hi|lg |ovi|qute)browser|palemoon)\/v?([-\w\.]+)/i,
			/(brave)(?: chrome)?\/([\d\.]+)/i,
			/(aloha|heytap|ovi|115|surf|qwant)browser\/([\d\.]+)/i,
			/(qwant)(?:ios|mobile)\/([\d\.]+)/i,
			/(ecosia|weibo)(?:__| \w+@)([\d\.]+)/i
		],
		[E, k],
		[/quark(?:pc)?\/([-\w\.]+)/i],
		[k, [E, "Quark"]],
		[/\bddg\/([\w\.]+)/i],
		[k, [E, "DuckDuckGo"]],
		[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
		[k, [E, "UCBrowser"]],
		[
			/microm.+\bqbcore\/([\w\.]+)/i,
			/\bqbcore\/([\w\.]+).+microm/i,
			/micromessenger\/([\w\.]+)/i
		],
		[k, [E, "WeChat"]],
		[/konqueror\/([\w\.]+)/i],
		[k, [E, "Konqueror"]],
		[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
		[k, [E, "IE"]],
		[/ya(?:search)?browser\/([\w\.]+)/i],
		[k, [E, "Yandex"]],
		[/slbrowser\/([\w\.]+)/i],
		[k, [E, "Smart " + Qe + bt]],
		[/(av(?:ast|g|ira))\/([\w\.]+)/i],
		[[
			E,
			/(.+)/,
			"$1 Secure" + bt
		], k],
		[/norton\/([\w\.]+)/i],
		[k, [E, "Norton Private" + bt]],
		[/\bfocus\/([\w\.]+)/i],
		[k, [E, ht + " Focus"]],
		[/ mms\/([\w\.]+)$/i],
		[k, [E, gt + " Neon"]],
		[/ opt\/([\w\.]+)$/i],
		[k, [E, gt + " Touch"]],
		[/coc_coc\w+\/([\w\.]+)/i],
		[k, [E, "Coc Coc"]],
		[/dolfin\/([\w\.]+)/i],
		[k, [E, "Dolphin"]],
		[/coast\/([\w\.]+)/i],
		[k, [E, gt + " Coast"]],
		[/miuibrowser\/([\w\.]+)/i],
		[k, [E, "MIUI" + bt]],
		[/fxios\/([\w\.-]+)/i],
		[k, [E, yt + ht]],
		[/\bqihoobrowser\/?([\w\.]*)/i],
		[k, [E, "360"]],
		[/\b(qq)\/([\w\.]+)/i],
		[[
			E,
			/(.+)/,
			"$1Browser"
		], k],
		[/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
		[[
			E,
			/(.+)/,
			"$1" + bt
		], k],
		[/samsungbrowser\/([\w\.]+)/i],
		[k, [E, ot + " Internet"]],
		[/metasr[\/ ]?([\d\.]+)/i],
		[k, [E, vt + " Explorer"]],
		[/(sogou)mo\w+\/([\d\.]+)/i],
		[[E, vt + " Mobile"], k],
		[
			/(electron)\/([\w\.]+) safari/i,
			/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
			/m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i
		],
		[E, k],
		[/(lbbrowser|luakit|rekonq|steam(?= (clie|tenf|gameo)))/i],
		[E],
		[/ome\/([\w\.]+).+(iron(?= saf)|360(?=[es]e$))/i],
		[k, E],
		[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
		[
			[E, _t],
			k,
			[D, ke]
		],
		[
			/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
			/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
			/(daum)apps[\/ ]([\w\.]+)/i,
			/safari (line)\/([\w\.]+)/i,
			/\b(line)\/([\w\.]+)\/iab/i,
			/(alipay)client\/([\w\.]+)/i,
			/(twitter)(?:and| f.+e\/([\w\.]+))/i,
			/(bing)(?:web|sapphire)\/([\w\.]+)/i,
			/(instagram|snapchat|klarna)[\/ ]([-\w\.]+)/i
		],
		[
			E,
			k,
			[D, ke]
		],
		[/\bgsa\/([\w\.]+) .*safari\//i],
		[
			k,
			[E, "GSA"],
			[D, ke]
		],
		[/(?:musical_ly|trill)(?:.+app_?version\/|_)([\w\.]+)/i],
		[
			k,
			[E, "TikTok"],
			[D, ke]
		],
		[/\[(linkedin)app\]/i],
		[E, [D, ke]],
		[/(zalo(?:app)?)[\/\sa-z]*([\w\.-]+)/i],
		[
			[
				E,
				/(.+)/,
				"Zalo"
			],
			k,
			[D, ke]
		],
		[/(chromium)[\/ ]([-\w\.]+)/i],
		[E, k],
		[/ome-(lighthouse)$/i],
		[E, [D, Oe]],
		[/headlesschrome(?:\/([\w\.]+)| )/i],
		[k, [E, dt + " Headless"]],
		[/wv\).+chrome\/([\w\.]+).+edgw\//i],
		[k, [E, mt + " WebView2"]],
		[/ wv\).+(chrome)\/([\w\.]+)/i],
		[[E, dt + " WebView"], k],
		[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
		[k, [E, "Android" + bt]],
		[/chrome\/([\w\.]+) mobile/i],
		[k, [E, yt + "Chrome"]],
		[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
		[E, k],
		[/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i],
		[k, [E, yt + "Safari"]],
		[/iphone .*mobile(?:\/\w+ | ?)safari/i],
		[[E, yt + "Safari"]],
		[/version\/([\w\.\,]+) .*(safari)/i],
		[k, E],
		[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
		[E, [k, "1"]],
		[/(webkit|khtml)\/([\w\.]+)/i],
		[E, k],
		[/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i],
		[[E, yt + ht], k],
		[/(navigator|netscape\d?)\/([-\w\.]+)/i],
		[[E, "Netscape"], k],
		[/(wolvic|librewolf)\/([\w\.]+)/i],
		[E, k],
		[/mobile vr; rv:([\w\.]+)\).+firefox/i],
		[k, [E, ht + " Reality"]],
		[
			/ekiohf.+(flow)\/([\w\.]+)/i,
			/(swiftfox)/i,
			/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
			/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|basilisk|waterfox)\/([-\w\.]+)$/i,
			/(firefox)\/([\w\.]+)/i,
			/(mozilla)\/([\w\.]+(?= .+rv\:.+gecko\/\d+)|[0-4][\w\.]+(?!.+compatible))/i,
			/(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
			/\b(links) \(([\w\.]+)/i
		],
		[E, [
			k,
			/_/g,
			"."
		]],
		[/(cobalt)\/([\w\.]+)/i],
		[E, [
			k,
			/[^\d\.]+./,
			he
		]]
	],
	cpu: [
		[/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
		[[Se, "amd64"]],
		[/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
		[[Se, "ia32"]],
		[/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
		[[Se, "arm64"]],
		[/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
		[[Se, "armhf"]],
		[/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
		[[Se, "arm"]],
		[/ sun4\w[;\)]/i],
		[[Se, "sparc"]],
		[
			/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i,
			/((ppc|powerpc)(64)?)( mac|;|\))/i,
			/(?:osf1|[freopnt]{3,4}bsd) (alpha)/i
		],
		[[
			Se,
			/ower/,
			he,
			At
		]],
		[/mc680.0/i],
		[[Se, "68k"]],
		[/winnt.+\[axp/i],
		[[Se, "alpha"]]
	],
	device: [
		[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
		[
			A,
			[O, ot],
			[D, M]
		],
		[
			/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
			/samsung[- ]((?!sm-[lr]|browser)[-\w]+)/i,
			/sec-(sgh\w+)/i
		],
		[
			A,
			[O, ot],
			[D, j]
		],
		[/(?:\/|\()(ip(?:hone|od)[\w, ]*)[\/\);]/i],
		[
			A,
			[O, qe],
			[D, j]
		],
		[/\b(?:ios|apple\w+)\/.+[\(\/](ipad)/i, /\b(ipad)[\d,]*[;\] ].+(mac |i(pad)?)os/i],
		[
			A,
			[O, qe],
			[D, M]
		],
		[/(macintosh);/i],
		[A, [O, qe]],
		[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
		[
			A,
			[O, st],
			[D, j]
		],
		[/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
		[
			A,
			[O, $e],
			[D, M]
		],
		[/honor([-\w ]+)[;\)]/i],
		[
			A,
			[O, $e],
			[D, j]
		],
		[/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
		[
			A,
			[O, Ze],
			[D, M]
		],
		[/(?:huawei) ?([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][\dc][adnt]?)\b(?!.+d\/s)/i],
		[
			A,
			[O, Ze],
			[D, j]
		],
		[/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b(?:xiao)?((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
		[
			[
				A,
				/_/g,
				" "
			],
			[O, lt],
			[D, M]
		],
		[
			/\b; (\w+) build\/hm\1/i,
			/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
			/oid[^\)]+; (redmi[\-_ ]?(?:note|k)?[\w_ ]+|m?[12]\d[01]\d\w{3,6}|poco[\w ]+|(shark )?\w{3}-[ah]0|qin ?[1-3](s\+|ultra| pro)?)( bui|; wv|\))/i,
			/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note|max|cc)?[_ ]?(?:\d{0,2}\w?)[_ ]?(?:plus|se|lite|pro)?( 5g|lte)?)(?: bui|\))/i,
			/ ([\w ]+) miui\/v?\d/i
		],
		[
			[
				A,
				/_/g,
				" "
			],
			[O, lt],
			[D, j]
		],
		[/droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-l]\w[1m]10)\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
		[
			A,
			[O, it],
			[D, j]
		],
		[/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
		[
			A,
			[O, at],
			[D, j]
		],
		[/\b(opd2(\d{3}a?))(?: bui|\))/i],
		[
			A,
			[
				O,
				Lt,
				{
					OnePlus: [
						"203",
						"304",
						"403",
						"404",
						"413",
						"415"
					],
					"*": at
				}
			],
			[D, M]
		],
		[/(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i],
		[
			A,
			[O, "BLU"],
			[D, j]
		],
		[/; vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
		[
			A,
			[O, "Vivo"],
			[D, j]
		],
		[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
		[
			A,
			[O, "Realme"],
			[D, j]
		],
		[/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
		[
			A,
			[O, Qe],
			[D, M]
		],
		[/lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i],
		[
			A,
			[O, Qe],
			[D, j]
		],
		[
			/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
			/\bmot(?:orola)?[- ]([\w\s]+)(\)| bui)/i,
			/((?:moto(?! 360)[-\w\(\) ]+|xt\d{3,4}[cgkosw\+]?[-\d]*|nexus 6)(?= bui|\)))/i
		],
		[
			A,
			[O, nt],
			[D, j]
		],
		[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
		[
			A,
			[O, nt],
			[D, M]
		],
		[/\b(?:lg)?([vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
		[
			A,
			[O, et],
			[D, M]
		],
		[
			/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
			/\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch|webos))(\w+)/i,
			/\blg-?([\d\w]+) bui/i
		],
		[
			A,
			[O, et],
			[D, j]
		],
		[/(nokia) (t[12][01])/i],
		[
			O,
			A,
			[D, M]
		],
		[/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*?))( bui|\)|;|\/)/i],
		[
			[
				A,
				/_/g,
				" "
			],
			[D, j],
			[O, "Nokia"]
		],
		[/(pixel (c|tablet))\b/i],
		[
			A,
			[O, Xe],
			[D, M]
		],
		[/droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i],
		[
			A,
			[O, Xe],
			[D, j]
		],
		[/(google) (pixelbook( go)?)/i],
		[O, A],
		[/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
		[
			A,
			[O, ct],
			[D, j]
		],
		[/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
		[
			[A, "Xperia Tablet"],
			[O, ct],
			[D, M]
		],
		[
			/(alexa)webm/i,
			/(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
			/(kf[a-z]+)( bui|\)).+silk\//i
		],
		[
			A,
			[O, Ke],
			[D, M]
		],
		[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
		[
			[
				A,
				/(.+)/g,
				"Fire Phone $1"
			],
			[O, Ke],
			[D, j]
		],
		[/(playbook);[-\w\),; ]+(rim)/i],
		[
			A,
			O,
			[D, M]
		],
		[/\b((?:bb[a-f]|st[hv])100-\d)/i, /(?:blackberry|\(bb10;) (\w+)/i],
		[
			A,
			[O, Ye],
			[D, j]
		],
		[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
		[
			A,
			[O, Je],
			[D, M]
		],
		[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
		[
			A,
			[O, Je],
			[D, j]
		],
		[/(nexus 9)/i],
		[
			A,
			[O, "HTC"],
			[D, M]
		],
		[
			/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
			/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
			/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
		],
		[
			O,
			[
				A,
				/_/g,
				" "
			],
			[D, j]
		],
		[/tcl (xess p17aa)/i, /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i],
		[
			A,
			[O, "TCL"],
			[D, M]
		],
		[/droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i],
		[
			A,
			[O, "TCL"],
			[D, j]
		],
		[/(itel) ((\w+))/i],
		[
			[O, At],
			A,
			[
				D,
				Lt,
				{
					tablet: ["p10001l", "w7001"],
					"*": "mobile"
				}
			]
		],
		[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
		[
			A,
			[O, "Acer"],
			[D, M]
		],
		[/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
		[
			A,
			[O, "Meizu"],
			[D, j]
		],
		[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
		[
			A,
			[O, "Ulefone"],
			[D, j]
		],
		[/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
		[
			A,
			[O, "Energizer"],
			[D, j]
		],
		[/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
		[
			A,
			[O, "Cat"],
			[D, j]
		],
		[/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
		[
			A,
			[O, "Smartfren"],
			[D, j]
		],
		[/droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i],
		[
			A,
			[O, "Nothing"],
			[D, j]
		],
		[/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
		[
			A,
			[O, "Archos"],
			[D, M]
		],
		[/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
		[
			A,
			[O, "Archos"],
			[D, j]
		],
		[/; (n159v)/i],
		[
			A,
			[O, "HMD"],
			[D, j]
		],
		[/(imo) (tab \w+)/i, /(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i],
		[
			O,
			A,
			[D, M]
		],
		[
			/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
			/; (blu|hmd|imo|infinix|lava|oneplus|tcl|wiko)[_ ]([\w\+ ]+?)(?: bui|\)|; r)/i,
			/(hp) ([\w ]+\w)/i,
			/(microsoft); (lumia[\w ]+)/i,
			/(oppo) ?([\w ]+) bui/i,
			/(hisense) ([ehv][\w ]+)\)/i,
			/droid[^;]+; (philips)[_ ]([sv-x][\d]{3,4}[xz]?)/i
		],
		[
			O,
			A,
			[D, j]
		],
		[
			/(kobo)\s(ereader|touch)/i,
			/(hp).+(touchpad(?!.+tablet)|tablet)/i,
			/(kindle)\/([\w\.]+)/i
		],
		[
			O,
			A,
			[D, M]
		],
		[/(surface duo)/i],
		[
			A,
			[O, tt],
			[D, M]
		],
		[/droid [\d\.]+; (fp\du?)(?: b|\))/i],
		[
			A,
			[O, "Fairphone"],
			[D, j]
		],
		[/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
		[
			A,
			[O, rt],
			[D, M]
		],
		[/(sprint) (\w+)/i],
		[
			O,
			A,
			[D, j]
		],
		[/(kin\.[onetw]{3})/i],
		[
			[
				A,
				/\./g,
				" "
			],
			[O, tt],
			[D, j]
		],
		[/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
		[
			A,
			[O, ut],
			[D, M]
		],
		[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
		[
			A,
			[O, ut],
			[D, j]
		],
		[/(philips)[\w ]+tv/i, /smart-tv.+(samsung)/i],
		[O, [D, N]],
		[/hbbtv.+maple;(\d+)/i],
		[
			[
				A,
				/^/,
				"SmartTV"
			],
			[O, ot],
			[D, N]
		],
		[/(vizio)(?: |.+model\/)(\w+-\w+)/i, /tcast.+(lg)e?. ([-\w]+)/i],
		[
			O,
			A,
			[D, N]
		],
		[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
		[[O, et], [D, N]],
		[/(apple) ?tv/i],
		[
			O,
			[A, qe + " TV"],
			[D, N]
		],
		[/crkey.*devicetype\/chromecast/i],
		[
			[A, pt + " Third Generation"],
			[O, Xe],
			[D, N]
		],
		[/crkey.*devicetype\/([^/]*)/i],
		[
			[
				A,
				/^/,
				"Chromecast "
			],
			[O, Xe],
			[D, N]
		],
		[/fuchsia.*crkey/i],
		[
			[A, pt + " Nest Hub"],
			[O, Xe],
			[D, N]
		],
		[/crkey/i],
		[
			[A, pt],
			[O, Xe],
			[D, N]
		],
		[/(portaltv)/i],
		[
			A,
			[O, _t],
			[D, N]
		],
		[/droid.+aft(\w+)( bui|\))/i],
		[
			A,
			[O, Ke],
			[D, N]
		],
		[/(shield \w+ tv)/i],
		[
			A,
			[O, rt],
			[D, N]
		],
		[/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
		[
			A,
			[O, st],
			[D, N]
		],
		[/(bravia[\w ]+)( bui|\))/i],
		[
			A,
			[O, ct],
			[D, N]
		],
		[/(mi(tv|box)-?\w+) bui/i],
		[
			A,
			[O, lt],
			[D, N]
		],
		[/Hbbtv.*(technisat) (.*);/i],
		[
			O,
			A,
			[D, N]
		],
		[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
		[
			[
				O,
				/.+\/(\w+)/,
				"$1",
				Lt,
				{ LG: "lge" }
			],
			[A, Ft],
			[D, N]
		],
		[/(playstation \w+)/i],
		[
			A,
			[O, ct],
			[D, we]
		],
		[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
		[
			A,
			[O, tt],
			[D, we]
		],
		[
			/(ouya)/i,
			/(nintendo) (\w+)/i,
			/(retroid) (pocket ([^\)]+))/i,
			/(valve).+(steam deck)/i,
			/droid.+; ((shield|rgcube|gr0006))( bui|\))/i
		],
		[
			[
				O,
				Lt,
				{
					Nvidia: "Shield",
					Anbernic: "RGCUBE",
					Logitech: "GR0006"
				}
			],
			A,
			[D, we]
		],
		[/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
		[
			A,
			[O, ot],
			[D, Te]
		],
		[/((pebble))app/i, /(asus|google|lg|oppo|xiaomi) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
		[
			O,
			A,
			[D, Te]
		],
		[/(ow(?:19|20)?we?[1-3]{1,3})/i],
		[
			A,
			[O, at],
			[D, Te]
		],
		[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
		[
			A,
			[O, qe],
			[D, Te]
		],
		[/(opwwe\d{3})/i],
		[
			A,
			[O, it],
			[D, Te]
		],
		[/(moto 360)/i],
		[
			A,
			[O, nt],
			[D, Te]
		],
		[/(smartwatch 3)/i],
		[
			A,
			[O, ct],
			[D, Te]
		],
		[/(g watch r)/i],
		[
			A,
			[O, et],
			[D, Te]
		],
		[/droid.+; (wt63?0{2,3})\)/i],
		[
			A,
			[O, ut],
			[D, Te]
		],
		[/droid.+; (glass) \d/i],
		[
			A,
			[O, Xe],
			[D, Ee]
		],
		[/(pico) ([\w ]+) os\d/i],
		[
			O,
			A,
			[D, Ee]
		],
		[/(quest( \d| pro)?s?).+vr/i],
		[
			A,
			[O, _t],
			[D, Ee]
		],
		[/mobile vr; rv.+firefox/i],
		[[D, Ee]],
		[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
		[O, [D, De]],
		[/(aeobc)\b/i],
		[
			A,
			[O, Ke],
			[D, De]
		],
		[/(homepod).+mac os/i],
		[
			A,
			[O, qe],
			[D, De]
		],
		[/windows iot/i],
		[[D, De]],
		[/droid.+; ([\w- ]+) (4k|android|smart|google)[- ]?tv/i],
		[A, [D, N]],
		[/\b((4k|android|smart|opera)[- ]?tv|tv; rv:|large screen[\w ]+safari)\b/i],
		[[D, N]],
		[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew|; hmsc).+?(mobile|vr|\d) safari/i],
		[A, [
			D,
			Lt,
			{
				mobile: "Mobile",
				xr: "VR",
				"*": M
			}
		]],
		[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
		[[D, M]],
		[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
		[[D, j]],
		[/droid .+?; ([\w\. -]+)( bui|\))/i],
		[A, [O, "Generic"]]
	],
	engine: [
		[/windows.+ edge\/([\w\.]+)/i],
		[k, [E, mt + "HTML"]],
		[/(arkweb)\/([\w\.]+)/i],
		[E, k],
		[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
		[k, [E, "Blink"]],
		[
			/(presto)\/([\w\.]+)/i,
			/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
			/ekioh(flow)\/([\w\.]+)/i,
			/(khtml|tasman|links|dillo)[\/ ]\(?([\w\.]+)/i,
			/(icab)[\/ ]([23]\.[\d\.]+)/i,
			/\b(libweb)/i
		],
		[E, k],
		[/ladybird\//i],
		[[E, "LibWeb"]],
		[/rv\:([\w\.]{1,9})\b.+(gecko)/i],
		[k, E]
	],
	os: [
		[/(windows nt) (6\.[23]); arm/i],
		[[
			E,
			/N/,
			"R"
		], [
			k,
			Lt,
			Rt
		]],
		[/(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i, /(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i],
		[E, k],
		[/windows nt ?([\d\.\)]*)(?!.+xbox)/i, /\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i],
		[[
			k,
			/(;|\))/g,
			"",
			Lt,
			Rt
		], [E, xt]],
		[/(windows ce)\/?([\d\.]*)/i],
		[E, k],
		[
			/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
			/(?:ios;fbsv|ios(?=.+ip(?:ad|hone)|.+apple ?tv)|ip(?:ad|hone)(?: |.+i(?:pad)?)os|apple ?tv.+ios)[\/ ]([\w\.]+)/i,
			/\btvos ?([\w\.]+)/i,
			/cfnetwork\/.+darwin/i
		],
		[[
			k,
			/_/g,
			"."
		], [E, "iOS"]],
		[/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i],
		[[E, "macOS"], [
			k,
			/_/g,
			"."
		]],
		[/android ([\d\.]+).*crkey/i],
		[k, [E, pt + " Android"]],
		[/fuchsia.*crkey\/([\d\.]+)/i],
		[k, [E, pt + " Fuchsia"]],
		[/crkey\/([\d\.]+).*devicetype\/smartspeaker/i],
		[k, [E, pt + " SmartSpeaker"]],
		[/linux.*crkey\/([\d\.]+)/i],
		[k, [E, pt + " Linux"]],
		[/crkey\/([\d\.]+)/i],
		[k, [E, pt]],
		[/droid ([\w\.]+)\b.+(android[- ]x86)/i],
		[k, E],
		[/(ubuntu) ([\w\.]+) like android/i],
		[[
			E,
			/(.+)/,
			"$1 Touch"
		], k],
		[/(harmonyos)[\/ ]?([\d\.]*)/i, /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i],
		[E, k],
		[/\(bb(10);/i],
		[k, [E, Ye]],
		[/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
		[k, [E, "Symbian"]],
		[/mozilla\/[\d\.]+ \((?:mobile[;\w ]*|tablet|tv|[^\)]*(?:viera|lg(?:l25|-d300)|alcatel ?o.+|y300-f1)); rv:([\w\.]+)\).+gecko\//i],
		[k, [E, ht + " OS"]],
		[/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i, /webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i],
		[k, [E, "webOS"]],
		[/web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i],
		[[
			k,
			Lt,
			{
				25: "120",
				24: "108",
				23: "94",
				22: "87",
				6: "79",
				5: "68",
				4: "53",
				3: "38",
				2: "538",
				1: "537",
				"*": "TV"
			}
		], [E, "webOS"]],
		[/watch(?: ?os[,\/ ]|\d,\d\/)([\d\.]+)/i],
		[k, [E, "watchOS"]],
		[/cros [\w]+(?:\)| ([\w\.]+)\b)/i],
		[k, [E, "Chrome OS"]],
		[/kepler ([\w\.]+); (aft|aeo)/i],
		[k, [E, "Vega OS"]],
		[
			/(netrange)mmh/i,
			/(nettv)\/(\d+\.[\w\.]+)/i,
			/(nintendo|playstation) (\w+)/i,
			/(xbox); +xbox ([^\);]+)/i,
			/(pico) .+os([\w\.]+)/i,
			/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
			/linux.+(mint)[\/\(\) ]?([\w\.]*)/i,
			/(mageia|vectorlinux|fuchsia|arcaos|arch(?= ?linux))[;l ]([\d\.]*)/i,
			/([kxln]?ubuntu|debian|suse|opensuse|gentoo|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire|knoppix)(?: gnu[\/ ]linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
			/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
			/\b(aix)[; ]([1-9\.]{0,4})/i,
			/(hurd|linux|morphos)(?: (?:arm|x86|ppc)\w*| ?)([\w\.]*)/i,
			/(gnu) ?([\w\.]*)/i,
			/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
			/(haiku) ?(r\d)?/i
		],
		[E, k],
		[/(sunos) ?([\d\.]*)/i],
		[[E, "Solaris"], k],
		[/\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
		[E, k]
	]
}, Ht = (function() {
	var e = {
		init: {},
		isIgnore: {},
		isIgnoreRgx: {},
		toString: {}
	};
	return Mt.call(e.init, [
		[_e, [
			E,
			k,
			Ce,
			D
		]],
		[ve, [Se]],
		[T, [
			D,
			A,
			O
		]],
		[ye, [E, k]],
		[be, [E, k]]
	]), Mt.call(e.isIgnore, [
		[_e, [k, Ce]],
		[ye, [k]],
		[be, [k]]
	]), Mt.call(e.isIgnoreRgx, [[_e, / ?browser$/i], [be, / ?os$/i]]), Mt.call(e.toString, [
		[_e, [E, k]],
		[ve, [Se]],
		[T, [O, A]],
		[ye, [E, k]],
		[be, [E, k]]
	]), e;
})(), Ut = function(e, t) {
	var n = Ht.init[t], r = Ht.isIgnore[t] || 0, i = Ht.isIgnoreRgx[t] || 0, a = Ht.toString[t] || 0;
	function o() {
		Mt.call(this, n);
	}
	return o.prototype.getItem = function() {
		return e;
	}, o.prototype.withClientHints = function() {
		return Ct ? Ct.getHighEntropyValues(Ge).then(function(t) {
			return e.setCH(new Wt(t, !1)).parseCH().get();
		}) : e.parseCH().get();
	}, o.prototype.withFeatureCheck = function() {
		return e.detectFeature().get();
	}, t != xe && (o.prototype.is = function(e) {
		var t = !1;
		for (var n in this) if (this.hasOwnProperty(n) && !Et(r, n) && At(i ? Nt(i, this[n]) : this[n]) == At(i ? Nt(i, e) : e)) {
			if (t = !0, e != w.UNDEFINED) break;
		} else if (e == w.UNDEFINED && t) {
			t = !t;
			break;
		}
		return t;
	}, o.prototype.toString = function() {
		var e = he;
		for (var t in a) typeof this[a[t]] !== w.UNDEFINED && (e += (e ? " " : he) + this[a[t]]);
		return e || w.UNDEFINED;
	}), o.prototype.then = function(e) {
		var t = this, n = function() {
			for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
		};
		n.prototype = {
			is: o.prototype.is,
			toString: o.prototype.toString,
			withClientHints: o.prototype.withClientHints,
			withFeatureCheck: o.prototype.withFeatureCheck
		};
		var r = new n();
		return e(r), r;
	}, new o();
};
function Wt(e, t) {
	if (e ||= {}, Mt.call(this, Ge), t) Mt.call(this, [
		[Ae, kt(e[Ie])],
		[Me, kt(e[Le])],
		[j, /\?1/.test(e[Ve])],
		[A, Pt(e[He])],
		[Ne, Pt(e[Ue])],
		[Pe, Pt(e[We])],
		[Se, Pt(e[Re])],
		[je, kt(e[Be])],
		[Fe, Pt(e[ze])]
	]);
	else for (var n in e) this.hasOwnProperty(n) && typeof e[n] !== w.UNDEFINED && (this[n] = e[n]);
}
function Gt(e, t, n, r) {
	return Mt.call(this, [
		["itemType", e],
		["ua", t],
		["uaCH", r],
		["rgxMap", n],
		["data", Ut(this, e)]
	]), this;
}
Gt.prototype.get = function(e) {
	return e ? this.data.hasOwnProperty(e) ? this.data[e] : void 0 : this.data;
}, Gt.prototype.set = function(e, t) {
	return this.data[e] = t, this;
}, Gt.prototype.setCH = function(e) {
	return this.uaCH = e, this;
}, Gt.prototype.detectFeature = function() {
	if (St && St.userAgent == this.ua) switch (this.itemType) {
		case _e:
			St.brave && typeof St.brave.isBrave == w.FUNCTION && this.set(E, "Brave");
			break;
		case T:
			!this.get(D) && Ct && Ct[j] && this.set(D, j), this.get(A) == "Macintosh" && St && typeof St.standalone !== w.UNDEFINED && St.maxTouchPoints && St.maxTouchPoints > 2 && this.set(A, "iPad").set(D, M);
			break;
		case be:
			!this.get(E) && Ct && Ct[Ne] && this.set(E, Ct[Ne]);
			break;
		case xe:
			var e = this.data, t = function(t) {
				return e[t].getItem().detectFeature().get();
			};
			this.set(_e, t(_e)).set(ve, t(ve)).set(T, t(T)).set(ye, t(ye)).set(be, t(be));
	}
	return this;
}, Gt.prototype.parseUA = function() {
	switch (this.itemType != xe && It.call(this.data, this.ua, this.rgxMap), this.itemType) {
		case _e:
			this.set(Ce, jt(this.get(k)));
			break;
		case be:
			if (this.get(E) == "iOS" && this.get(k) == "18.6") {
				var e = /\) Version\/([\d\.]+)/.exec(this.ua);
				e && parseInt(e[1].substring(0, 2), 10) >= 26 && this.set(k, e[1]);
			}
			break;
	}
	return this;
}, Gt.prototype.parseCH = function() {
	var e = this.uaCH, t = this.rgxMap;
	switch (this.itemType) {
		case _e:
		case ye:
			var n = e[Me] || e[Ae], r;
			if (n) for (var i = 0; i < n.length; i++) {
				var a = n[i].brand || n[i], o = n[i].version;
				this.itemType == _e && !/not.a.brand/i.test(a) && (!r || /Chrom/.test(r) && a != ft || r == mt && /WebView2/.test(a)) && (a = Lt(a, Bt), r = this.get(E), r && !/Chrom/.test(r) && /Chrom/.test(a) || this.set(E, a).set(k, o).set(Ce, jt(o)), r = a), this.itemType == ye && a == ft && this.set(k, o);
			}
			break;
		case ve:
			var s = e[Se];
			s && (s && e[Fe] == "64" && (s += "64"), It.call(this.data, s + ";", t));
			break;
		case T:
			if (e[j] && this.set(D, j), e[A] && (this.set(A, e[A]), !this.get(D) || !this.get(O))) {
				var c = {};
				It.call(c, "droid 9; " + e[A] + ")", t), !this.get(D) && c.type && this.set(D, c.type), !this.get(O) && c.vendor && this.set(O, c.vendor);
			}
			if (e[je]) {
				var l;
				if (typeof e[je] != "string") for (var u = 0; !l && u < e[je].length;) l = Lt(e[je][u++], zt);
				else l = Lt(e[je], zt);
				this.set(D, l);
			}
			break;
		case be:
			var d = e[Ne];
			if (d) {
				var f = e[Pe];
				d == xt && (f = parseInt(jt(f), 10) >= 13 ? "11" : "10"), this.set(E, d).set(k, f);
			}
			this.get(E) == xt && e[A] == "Xbox" && this.set(E, "Xbox").set(k, void 0);
			break;
		case xe:
			var p = this.data, m = function(t) {
				return p[t].getItem().setCH(e).parseCH().get();
			};
			this.set(_e, m(_e)).set(ve, m(ve)).set(T, m(T)).set(ye, m(ye)).set(be, m(be));
	}
	return this;
};
function Kt(e, t, n) {
	if (typeof e === w.OBJECT ? (Dt(e, !0) ? (typeof t === w.OBJECT && (n = t), t = e) : (n = e, t = void 0), e = void 0) : typeof e === w.STRING && !Dt(t, !0) && (n = t, t = void 0), n) if (typeof n.append === w.FUNCTION) {
		var r = {};
		n.forEach(function(e, t) {
			r[String(t).toLowerCase()] = e;
		}), n = r;
	} else {
		var i = {};
		for (var a in n) n.hasOwnProperty(a) && (i[String(a).toLowerCase()] = n[a]);
		n = i;
	}
	if (!(this instanceof Kt)) return new Kt(e, t, n).getResult();
	var o = typeof e === w.STRING ? e : n && n[me] ? n[me] : St && St.userAgent ? St.userAgent : he, s = new Wt(n, !0), c = t ? wt(Vt, t) : Vt, l = function(e) {
		return e == xe ? function() {
			return new Gt(e, o, c, s).set("ua", o).set(_e, this.getBrowser()).set(ve, this.getCPU()).set(T, this.getDevice()).set(ye, this.getEngine()).set(be, this.getOS()).get();
		} : function() {
			return new Gt(e, o, c[e], s).parseUA().get();
		};
	};
	return Mt.call(this, [
		["getBrowser", l(_e)],
		["getCPU", l(ve)],
		["getDevice", l(T)],
		["getEngine", l(ye)],
		["getOS", l(be)],
		["getResult", l(xe)],
		["getUA", function() {
			return o;
		}],
		["setUA", function(e) {
			return Ot(e) && (o = Ft(e, pe)), this;
		}]
	]).setUA(o), this;
}
Kt.VERSION = fe, Kt.BROWSER = Tt([
	E,
	k,
	Ce,
	D
]), Kt.CPU = Tt([Se]), Kt.DEVICE = Tt([
	A,
	O,
	D,
	we,
	j,
	N,
	M,
	Te,
	De
]), Kt.ENGINE = Kt.OS = Tt([E, k]);
//#endregion
//#region node_modules/uuid/dist/esm-browser/rng.js
var qt, Jt = new Uint8Array(16);
function Yt() {
	if (!qt && (qt = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !qt)) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
	return qt(Jt);
}
//#endregion
//#region node_modules/uuid/dist/esm-browser/regex.js
var Xt = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
//#endregion
//#region node_modules/uuid/dist/esm-browser/validate.js
function Zt(e) {
	return typeof e == "string" && Xt.test(e);
}
for (var Qt = [], $t = 0; $t < 256; ++$t) Qt.push(($t + 256).toString(16).substr(1));
function en(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = (Qt[e[t + 0]] + Qt[e[t + 1]] + Qt[e[t + 2]] + Qt[e[t + 3]] + "-" + Qt[e[t + 4]] + Qt[e[t + 5]] + "-" + Qt[e[t + 6]] + Qt[e[t + 7]] + "-" + Qt[e[t + 8]] + Qt[e[t + 9]] + "-" + Qt[e[t + 10]] + Qt[e[t + 11]] + Qt[e[t + 12]] + Qt[e[t + 13]] + Qt[e[t + 14]] + Qt[e[t + 15]]).toLowerCase();
	if (!Zt(n)) throw TypeError("Stringified UUID is invalid");
	return n;
}
//#endregion
//#region node_modules/uuid/dist/esm-browser/v4.js
function tn(e, t, n) {
	e ||= {};
	var r = e.random || (e.rng || Yt)();
	if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
		n ||= 0;
		for (var i = 0; i < 16; ++i) t[n + i] = r[i];
		return t;
	}
	return en(r);
}
//#endregion
//#region node_modules/webrtc-adapter/src/js/utils.js
var nn = /* @__PURE__ */ ie((/* @__PURE__ */ ne(((e, t) => {
	var n = 200, r = "__lodash_hash_undefined__", i = 1, a = 2, o = 9007199254740991, s = "[object Arguments]", c = "[object Array]", l = "[object AsyncFunction]", u = "[object Boolean]", d = "[object Date]", f = "[object Error]", p = "[object Function]", m = "[object GeneratorFunction]", h = "[object Map]", g = "[object Number]", _ = "[object Null]", v = "[object Object]", y = "[object Promise]", ee = "[object Proxy]", te = "[object RegExp]", b = "[object Set]", ne = "[object String]", x = "[object Symbol]", re = "[object Undefined]", ie = "[object WeakMap]", ae = "[object ArrayBuffer]", oe = "[object DataView]", se = "[object Float32Array]", S = "[object Float64Array]", ce = "[object Int8Array]", le = "[object Int16Array]", ue = "[object Int32Array]", de = "[object Uint8Array]", C = "[object Uint8ClampedArray]", fe = "[object Uint16Array]", pe = "[object Uint32Array]", me = /[\\^$.*+?()[\]{}|]/g, he = /^\[object .+?Constructor\]$/, ge = /^(?:0|[1-9]\d*)$/, w = {};
	w[se] = w[S] = w[ce] = w[le] = w[ue] = w[de] = w[C] = w[fe] = w[pe] = !0, w[s] = w[c] = w[ae] = w[u] = w[oe] = w[d] = w[f] = w[p] = w[h] = w[g] = w[v] = w[te] = w[b] = w[ne] = w[ie] = !1;
	var _e = typeof global == "object" && global && global.Object === Object && global, ve = typeof self == "object" && self && self.Object === Object && self, T = _e || ve || Function("return this")(), ye = typeof e == "object" && e && !e.nodeType && e, be = ye && typeof t == "object" && t && !t.nodeType && t, xe = be && be.exports === ye, E = xe && _e.process, D = function() {
		try {
			return E && E.binding && E.binding("util");
		} catch {}
	}(), O = D && D.isTypedArray;
	function k(e, t) {
		for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
			var o = e[n];
			t(o, n, e) && (a[i++] = o);
		}
		return a;
	}
	function Se(e, t) {
		for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
		return e;
	}
	function Ce(e, t) {
		for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
		return !1;
	}
	function A(e, t) {
		for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
		return r;
	}
	function we(e) {
		return function(t) {
			return e(t);
		};
	}
	function j(e, t) {
		return e.has(t);
	}
	function M(e, t) {
		return e?.[t];
	}
	function N(e) {
		var t = -1, n = Array(e.size);
		return e.forEach(function(e, r) {
			n[++t] = [r, e];
		}), n;
	}
	function Te(e, t) {
		return function(n) {
			return e(t(n));
		};
	}
	function Ee(e) {
		var t = -1, n = Array(e.size);
		return e.forEach(function(e) {
			n[++t] = e;
		}), n;
	}
	var De = Array.prototype, Oe = Function.prototype, ke = Object.prototype, Ae = T["__core-js_shared__"], je = Oe.toString, Me = ke.hasOwnProperty, Ne = function() {
		var e = /[^.]+$/.exec(Ae && Ae.keys && Ae.keys.IE_PROTO || "");
		return e ? "Symbol(src)_1." + e : "";
	}(), Pe = ke.toString, Fe = RegExp("^" + je.call(Me).replace(me, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Ie = xe ? T.Buffer : void 0, Le = T.Symbol, Re = T.Uint8Array, ze = ke.propertyIsEnumerable, Be = De.splice, Ve = Le ? Le.toStringTag : void 0, He = Object.getOwnPropertySymbols, Ue = Ie ? Ie.isBuffer : void 0, We = Te(Object.keys, Object), Ge = Kt(T, "DataView"), Ke = Kt(T, "Map"), qe = Kt(T, "Promise"), Je = Kt(T, "Set"), Ye = Kt(T, "WeakMap"), Xe = Kt(Object, "create"), Ze = tn(Ge), Qe = tn(Ke), $e = tn(qe), et = tn(Je), tt = tn(Ye), nt = Le ? Le.prototype : void 0, rt = nt ? nt.valueOf : void 0;
	function it(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	function at() {
		this.__data__ = Xe ? Xe(null) : {}, this.size = 0;
	}
	function ot(e) {
		var t = this.has(e) && delete this.__data__[e];
		return this.size -= +!!t, t;
	}
	function st(e) {
		var t = this.__data__;
		if (Xe) {
			var n = t[e];
			return n === r ? void 0 : n;
		}
		return Me.call(t, e) ? t[e] : void 0;
	}
	function ct(e) {
		var t = this.__data__;
		return Xe ? t[e] !== void 0 : Me.call(t, e);
	}
	function lt(e, t) {
		var n = this.__data__;
		return this.size += +!this.has(e), n[e] = Xe && t === void 0 ? r : t, this;
	}
	it.prototype.clear = at, it.prototype.delete = ot, it.prototype.get = st, it.prototype.has = ct, it.prototype.set = lt;
	function ut(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	function dt() {
		this.__data__ = [], this.size = 0;
	}
	function ft(e) {
		var t = this.__data__, n = Mt(t, e);
		return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : Be.call(t, n, 1), --this.size, !0);
	}
	function pt(e) {
		var t = this.__data__, n = Mt(t, e);
		return n < 0 ? void 0 : t[n][1];
	}
	function mt(e) {
		return Mt(this.__data__, e) > -1;
	}
	function ht(e, t) {
		var n = this.__data__, r = Mt(n, e);
		return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
	}
	ut.prototype.clear = dt, ut.prototype.delete = ft, ut.prototype.get = pt, ut.prototype.has = mt, ut.prototype.set = ht;
	function gt(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	function _t() {
		this.size = 0, this.__data__ = {
			hash: new it(),
			map: new (Ke || ut)(),
			string: new it()
		};
	}
	function vt(e) {
		var t = Gt(this, e).delete(e);
		return this.size -= +!!t, t;
	}
	function yt(e) {
		return Gt(this, e).get(e);
	}
	function bt(e) {
		return Gt(this, e).has(e);
	}
	function xt(e, t) {
		var n = Gt(this, e), r = n.size;
		return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
	}
	gt.prototype.clear = _t, gt.prototype.delete = vt, gt.prototype.get = yt, gt.prototype.has = bt, gt.prototype.set = xt;
	function St(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.__data__ = new gt(); ++t < n;) this.add(e[t]);
	}
	function Ct(e) {
		return this.__data__.set(e, r), this;
	}
	function wt(e) {
		return this.__data__.has(e);
	}
	St.prototype.add = St.prototype.push = Ct, St.prototype.has = wt;
	function Tt(e) {
		var t = this.__data__ = new ut(e);
		this.size = t.size;
	}
	function Et() {
		this.__data__ = new ut(), this.size = 0;
	}
	function Dt(e) {
		var t = this.__data__, n = t.delete(e);
		return this.size = t.size, n;
	}
	function Ot(e) {
		return this.__data__.get(e);
	}
	function kt(e) {
		return this.__data__.has(e);
	}
	function At(e, t) {
		var r = this.__data__;
		if (r instanceof ut) {
			var i = r.__data__;
			if (!Ke || i.length < n - 1) return i.push([e, t]), this.size = ++r.size, this;
			r = this.__data__ = new gt(i);
		}
		return r.set(e, t), this.size = r.size, this;
	}
	Tt.prototype.clear = Et, Tt.prototype.delete = Dt, Tt.prototype.get = Ot, Tt.prototype.has = kt, Tt.prototype.set = At;
	function jt(e, t) {
		var n = an(e), r = !n && rn(e), i = !n && !r && sn(e), a = !n && !r && !i && pn(e), o = n || r || i || a, s = o ? A(e.length, String) : [], c = s.length;
		for (var l in e) (t || Me.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || Xt(l, c))) && s.push(l);
		return s;
	}
	function Mt(e, t) {
		for (var n = e.length; n--;) if (nn(e[n][0], t)) return n;
		return -1;
	}
	function Nt(e, t, n) {
		var r = t(e);
		return an(e) ? r : Se(r, n(e));
	}
	function Pt(e) {
		return e == null ? e === void 0 ? re : _ : Ve && Ve in Object(e) ? qt(e) : en(e);
	}
	function Ft(e) {
		return fn(e) && Pt(e) == s;
	}
	function It(e, t, n, r, i) {
		return e === t ? !0 : e == null || t == null || !fn(e) && !fn(t) ? e !== e && t !== t : Lt(e, t, n, r, It, i);
	}
	function Lt(e, t, n, r, a, o) {
		var l = an(e), u = an(t), d = l ? c : Yt(e), f = u ? c : Yt(t);
		d = d == s ? v : d, f = f == s ? v : f;
		var p = d == v, m = f == v, h = d == f;
		if (h && sn(e)) {
			if (!sn(t)) return !1;
			l = !0, p = !1;
		}
		if (h && !p) return o ||= new Tt(), l || pn(e) ? Vt(e, t, n, r, a, o) : Ht(e, t, d, n, r, a, o);
		if (!(n & i)) {
			var g = p && Me.call(e, "__wrapped__"), _ = m && Me.call(t, "__wrapped__");
			if (g || _) {
				var y = g ? e.value() : e, ee = _ ? t.value() : t;
				return o ||= new Tt(), a(y, ee, n, r, o);
			}
		}
		return h ? (o ||= new Tt(), Ut(e, t, n, r, a, o)) : !1;
	}
	function Rt(e) {
		return !dn(e) || Qt(e) ? !1 : (ln(e) ? Fe : he).test(tn(e));
	}
	function zt(e) {
		return fn(e) && un(e.length) && !!w[Pt(e)];
	}
	function Bt(e) {
		if (!$t(e)) return We(e);
		var t = [];
		for (var n in Object(e)) Me.call(e, n) && n != "constructor" && t.push(n);
		return t;
	}
	function Vt(e, t, n, r, o, s) {
		var c = n & i, l = e.length, u = t.length;
		if (l != u && !(c && u > l)) return !1;
		var d = s.get(e);
		if (d && s.get(t)) return d == t;
		var f = -1, p = !0, m = n & a ? new St() : void 0;
		for (s.set(e, t), s.set(t, e); ++f < l;) {
			var h = e[f], g = t[f];
			if (r) var _ = c ? r(g, h, f, t, e, s) : r(h, g, f, e, t, s);
			if (_ !== void 0) {
				if (_) continue;
				p = !1;
				break;
			}
			if (m) {
				if (!Ce(t, function(e, t) {
					if (!j(m, t) && (h === e || o(h, e, n, r, s))) return m.push(t);
				})) {
					p = !1;
					break;
				}
			} else if (!(h === g || o(h, g, n, r, s))) {
				p = !1;
				break;
			}
		}
		return s.delete(e), s.delete(t), p;
	}
	function Ht(e, t, n, r, o, s, c) {
		switch (n) {
			case oe:
				if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
				e = e.buffer, t = t.buffer;
			case ae: return !(e.byteLength != t.byteLength || !s(new Re(e), new Re(t)));
			case u:
			case d:
			case g: return nn(+e, +t);
			case f: return e.name == t.name && e.message == t.message;
			case te:
			case ne: return e == t + "";
			case h: var l = N;
			case b:
				var p = r & i;
				if (l ||= Ee, e.size != t.size && !p) return !1;
				var m = c.get(e);
				if (m) return m == t;
				r |= a, c.set(e, t);
				var _ = Vt(l(e), l(t), r, o, s, c);
				return c.delete(e), _;
			case x: if (rt) return rt.call(e) == rt.call(t);
		}
		return !1;
	}
	function Ut(e, t, n, r, a, o) {
		var s = n & i, c = Wt(e), l = c.length;
		if (l != Wt(t).length && !s) return !1;
		for (var u = l; u--;) {
			var d = c[u];
			if (!(s ? d in t : Me.call(t, d))) return !1;
		}
		var f = o.get(e);
		if (f && o.get(t)) return f == t;
		var p = !0;
		o.set(e, t), o.set(t, e);
		for (var m = s; ++u < l;) {
			d = c[u];
			var h = e[d], g = t[d];
			if (r) var _ = s ? r(g, h, d, t, e, o) : r(h, g, d, e, t, o);
			if (!(_ === void 0 ? h === g || a(h, g, n, r, o) : _)) {
				p = !1;
				break;
			}
			m ||= d == "constructor";
		}
		if (p && !m) {
			var v = e.constructor, y = t.constructor;
			v != y && "constructor" in e && "constructor" in t && !(typeof v == "function" && v instanceof v && typeof y == "function" && y instanceof y) && (p = !1);
		}
		return o.delete(e), o.delete(t), p;
	}
	function Wt(e) {
		return Nt(e, mn, Jt);
	}
	function Gt(e, t) {
		var n = e.__data__;
		return Zt(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
	}
	function Kt(e, t) {
		var n = M(e, t);
		return Rt(n) ? n : void 0;
	}
	function qt(e) {
		var t = Me.call(e, Ve), n = e[Ve];
		try {
			e[Ve] = void 0;
			var r = !0;
		} catch {}
		var i = Pe.call(e);
		return r && (t ? e[Ve] = n : delete e[Ve]), i;
	}
	var Jt = He ? function(e) {
		return e == null ? [] : (e = Object(e), k(He(e), function(t) {
			return ze.call(e, t);
		}));
	} : hn, Yt = Pt;
	(Ge && Yt(new Ge(/* @__PURE__ */ new ArrayBuffer(1))) != oe || Ke && Yt(new Ke()) != h || qe && Yt(qe.resolve()) != y || Je && Yt(new Je()) != b || Ye && Yt(new Ye()) != ie) && (Yt = function(e) {
		var t = Pt(e), n = t == v ? e.constructor : void 0, r = n ? tn(n) : "";
		if (r) switch (r) {
			case Ze: return oe;
			case Qe: return h;
			case $e: return y;
			case et: return b;
			case tt: return ie;
		}
		return t;
	});
	function Xt(e, t) {
		return t ??= o, !!t && (typeof e == "number" || ge.test(e)) && e > -1 && e % 1 == 0 && e < t;
	}
	function Zt(e) {
		var t = typeof e;
		return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
	}
	function Qt(e) {
		return !!Ne && Ne in e;
	}
	function $t(e) {
		var t = e && e.constructor;
		return e === (typeof t == "function" && t.prototype || ke);
	}
	function en(e) {
		return Pe.call(e);
	}
	function tn(e) {
		if (e != null) {
			try {
				return je.call(e);
			} catch {}
			try {
				return e + "";
			} catch {}
		}
		return "";
	}
	function nn(e, t) {
		return e === t || e !== e && t !== t;
	}
	var rn = Ft(function() {
		return arguments;
	}()) ? Ft : function(e) {
		return fn(e) && Me.call(e, "callee") && !ze.call(e, "callee");
	}, an = Array.isArray;
	function on(e) {
		return e != null && un(e.length) && !ln(e);
	}
	var sn = Ue || gn;
	function cn(e, t) {
		return It(e, t);
	}
	function ln(e) {
		if (!dn(e)) return !1;
		var t = Pt(e);
		return t == p || t == m || t == l || t == ee;
	}
	function un(e) {
		return typeof e == "number" && e > -1 && e % 1 == 0 && e <= o;
	}
	function dn(e) {
		var t = typeof e;
		return e != null && (t == "object" || t == "function");
	}
	function fn(e) {
		return typeof e == "object" && !!e;
	}
	var pn = O ? we(O) : zt;
	function mn(e) {
		return on(e) ? jt(e) : Bt(e);
	}
	function hn() {
		return [];
	}
	function gn() {
		return !1;
	}
	t.exports = cn;
})))()), rn = !0, an = !0;
function on(e, t, n) {
	let r = e.match(t);
	return r && r.length >= n && parseFloat(r[n], 10);
}
function sn(e, t, n) {
	if (!e.RTCPeerConnection) return;
	let r = e.RTCPeerConnection.prototype, i = r.addEventListener;
	r.addEventListener = function(e, r) {
		if (e !== t) return i.apply(this, arguments);
		let a = (e) => {
			let t = n(e);
			t && (r.handleEvent ? r.handleEvent(t) : r(t));
		};
		return this._eventMap = this._eventMap || {}, this._eventMap[t] || (this._eventMap[t] = /* @__PURE__ */ new Map()), this._eventMap[t].set(r, a), i.apply(this, [e, a]);
	};
	let a = r.removeEventListener;
	r.removeEventListener = function(e, n) {
		if (e !== t || !this._eventMap || !this._eventMap[t] || !this._eventMap[t].has(n)) return a.apply(this, arguments);
		let r = this._eventMap[t].get(n);
		return this._eventMap[t].delete(n), this._eventMap[t].size === 0 && delete this._eventMap[t], Object.keys(this._eventMap).length === 0 && delete this._eventMap, a.apply(this, [e, r]);
	}, Object.defineProperty(r, "on" + t, {
		get() {
			return this["_on" + t];
		},
		set(e) {
			this["_on" + t] && (this.removeEventListener(t, this["_on" + t]), delete this["_on" + t]), e && this.addEventListener(t, this["_on" + t] = e);
		},
		enumerable: !0,
		configurable: !0
	});
}
function cn(e) {
	return typeof e == "boolean" ? (rn = e, e ? "adapter.js logging disabled" : "adapter.js logging enabled") : /* @__PURE__ */ Error("Argument type: " + typeof e + ". Please use a boolean.");
}
function ln(e) {
	return typeof e == "boolean" ? (an = !e, "adapter.js deprecation warnings " + (e ? "disabled" : "enabled")) : /* @__PURE__ */ Error("Argument type: " + typeof e + ". Please use a boolean.");
}
function un() {
	if (typeof window == "object") {
		if (rn) return;
		typeof console < "u" && typeof console.log == "function" && console.log.apply(console, arguments);
	}
}
function dn(e, t) {
	an && console.warn(e + " is deprecated, please use " + t + " instead.");
}
function fn(e) {
	let t = {
		browser: null,
		version: null
	};
	if (e === void 0 || !e.navigator || !e.navigator.userAgent) return t.browser = "Not a browser.", t;
	let { navigator: n } = e;
	if (n.mozGetUserMedia) t.browser = "firefox", t.version = parseInt(on(n.userAgent, /Firefox\/(\d+)\./, 1));
	else if (n.webkitGetUserMedia || e.isSecureContext === !1 && e.webkitRTCPeerConnection) t.browser = "chrome", t.version = parseInt(on(n.userAgent, /Chrom(e|ium)\/(\d+)\./, 2));
	else if (e.RTCPeerConnection && n.userAgent.match(/AppleWebKit\/(\d+)\./)) t.browser = "safari", t.version = parseInt(on(n.userAgent, /AppleWebKit\/(\d+)\./, 1)), t.supportsUnifiedPlan = e.RTCRtpTransceiver && "currentDirection" in e.RTCRtpTransceiver.prototype, t._safariVersion = on(n.userAgent, /Version\/(\d+(\.?\d+))/, 1);
	else return t.browser = "Not a supported browser.", t;
	return t;
}
function pn(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function mn(e) {
	return pn(e) ? Object.keys(e).reduce(function(t, n) {
		let r = pn(e[n]), i = r ? mn(e[n]) : e[n], a = r && !Object.keys(i).length;
		return i === void 0 || a ? t : Object.assign(t, { [n]: i });
	}, {}) : e;
}
function hn(e, t, n) {
	!t || n.has(t.id) || (n.set(t.id, t), Object.keys(t).forEach((r) => {
		r.endsWith("Id") ? hn(e, e.get(t[r]), n) : r.endsWith("Ids") && t[r].forEach((t) => {
			hn(e, e.get(t), n);
		});
	}));
}
function gn(e, t, n) {
	let r = n ? "outbound-rtp" : "inbound-rtp", i = /* @__PURE__ */ new Map();
	if (t === null) return i;
	let a = [];
	return e.forEach((e) => {
		e.type === "track" && e.trackIdentifier === t.id && a.push(e);
	}), a.forEach((t) => {
		e.forEach((n) => {
			n.type === r && n.trackId === t.id && hn(e, n, i);
		});
	}), i;
}
//#endregion
//#region node_modules/webrtc-adapter/src/js/chrome/getusermedia.js
var _n = un;
function vn(e, t) {
	let n = e && e.navigator;
	if (!n.mediaDevices) return;
	let r = function(e) {
		if (typeof e != "object" || e.mandatory || e.optional) return e;
		let t = {};
		return Object.keys(e).forEach((n) => {
			if (n === "require" || n === "advanced" || n === "mediaSource") return;
			let r = typeof e[n] == "object" ? e[n] : { ideal: e[n] };
			r.exact !== void 0 && typeof r.exact == "number" && (r.min = r.max = r.exact);
			let i = function(e, t) {
				return e ? e + t.charAt(0).toUpperCase() + t.slice(1) : t === "deviceId" ? "sourceId" : t;
			};
			if (r.ideal !== void 0) {
				t.optional = t.optional || [];
				let e = {};
				typeof r.ideal == "number" ? (e[i("min", n)] = r.ideal, t.optional.push(e), e = {}, e[i("max", n)] = r.ideal, t.optional.push(e)) : (e[i("", n)] = r.ideal, t.optional.push(e));
			}
			r.exact !== void 0 && typeof r.exact != "number" ? (t.mandatory = t.mandatory || {}, t.mandatory[i("", n)] = r.exact) : ["min", "max"].forEach((e) => {
				r[e] !== void 0 && (t.mandatory = t.mandatory || {}, t.mandatory[i(e, n)] = r[e]);
			});
		}), e.advanced && (t.optional = (t.optional || []).concat(e.advanced)), t;
	}, i = function(e, i) {
		if (t.version >= 61) return i(e);
		if (e = JSON.parse(JSON.stringify(e)), e && typeof e.audio == "object") {
			let t = function(e, t, n) {
				t in e && !(n in e) && (e[n] = e[t], delete e[t]);
			};
			e = JSON.parse(JSON.stringify(e)), t(e.audio, "autoGainControl", "googAutoGainControl"), t(e.audio, "noiseSuppression", "googNoiseSuppression"), e.audio = r(e.audio);
		}
		if (e && typeof e.video == "object") {
			let a = e.video.facingMode;
			a &&= typeof a == "object" ? a : { ideal: a };
			let o = t.version < 66;
			if (a && (a.exact === "user" || a.exact === "environment" || a.ideal === "user" || a.ideal === "environment") && !(n.mediaDevices.getSupportedConstraints && n.mediaDevices.getSupportedConstraints().facingMode && !o)) {
				delete e.video.facingMode;
				let t;
				if (a.exact === "environment" || a.ideal === "environment" ? t = ["back", "rear"] : (a.exact === "user" || a.ideal === "user") && (t = ["front"]), t) return n.mediaDevices.enumerateDevices().then((n) => {
					n = n.filter((e) => e.kind === "videoinput");
					let o = n.find((e) => t.some((t) => e.label.toLowerCase().includes(t)));
					return !o && n.length && t.includes("back") && (o = n[n.length - 1]), o && (e.video.deviceId = a.exact ? { exact: o.deviceId } : { ideal: o.deviceId }), e.video = r(e.video), _n("chrome: " + JSON.stringify(e)), i(e);
				});
			}
			e.video = r(e.video);
		}
		return _n("chrome: " + JSON.stringify(e)), i(e);
	}, a = function(e) {
		return t.version >= 64 ? e : {
			name: {
				PermissionDeniedError: "NotAllowedError",
				PermissionDismissedError: "NotAllowedError",
				InvalidStateError: "NotAllowedError",
				DevicesNotFoundError: "NotFoundError",
				ConstraintNotSatisfiedError: "OverconstrainedError",
				TrackStartError: "NotReadableError",
				MediaDeviceFailedDueToShutdown: "NotAllowedError",
				MediaDeviceKillSwitchOn: "NotAllowedError",
				TabCaptureError: "AbortError",
				ScreenCaptureError: "AbortError",
				DeviceCaptureError: "AbortError"
			}[e.name] || e.name,
			message: e.message,
			constraint: e.constraint || e.constraintName,
			toString() {
				return this.name + (this.message && ": ") + this.message;
			}
		};
	};
	if (n.getUserMedia = function(e, t, r) {
		i(e, (e) => {
			n.webkitGetUserMedia(e, t, (e) => {
				r && r(a(e));
			});
		});
	}.bind(n), n.mediaDevices.getUserMedia) {
		let e = n.mediaDevices.getUserMedia.bind(n.mediaDevices);
		n.mediaDevices.getUserMedia = function(t) {
			return i(t, (t) => e(t).then((e) => {
				if (t.audio && !e.getAudioTracks().length || t.video && !e.getVideoTracks().length) throw e.getTracks().forEach((e) => {
					e.stop();
				}), new DOMException("", "NotFoundError");
				return e;
			}, (e) => Promise.reject(a(e))));
		};
	}
}
//#endregion
//#region node_modules/webrtc-adapter/src/js/chrome/getdisplaymedia.js
function yn(e, t) {
	if (!(e.navigator.mediaDevices && "getDisplayMedia" in e.navigator.mediaDevices) && e.navigator.mediaDevices) {
		if (typeof t != "function") {
			console.error("shimGetDisplayMedia: getSourceId argument is not a function");
			return;
		}
		e.navigator.mediaDevices.getDisplayMedia = function(n) {
			return t(n).then((t) => {
				let r = n.video && n.video.width, i = n.video && n.video.height;
				return n.video = { mandatory: {
					chromeMediaSource: "desktop",
					chromeMediaSourceId: t,
					maxFrameRate: n.video && n.video.frameRate || 3
				} }, r && (n.video.mandatory.maxWidth = r), i && (n.video.mandatory.maxHeight = i), e.navigator.mediaDevices.getUserMedia(n);
			});
		};
	}
}
//#endregion
//#region node_modules/webrtc-adapter/src/js/chrome/chrome_shim.js
var bn = /* @__PURE__ */ x({
	fixNegotiationNeeded: () => kn,
	shimAddTrackRemoveTrack: () => Dn,
	shimAddTrackRemoveTrackWithNative: () => En,
	shimGetDisplayMedia: () => yn,
	shimGetSendersWithDtmf: () => Cn,
	shimGetStats: () => wn,
	shimGetUserMedia: () => vn,
	shimMediaStream: () => xn,
	shimOnTrack: () => Sn,
	shimPeerConnection: () => On,
	shimSenderReceiverGetStats: () => Tn
});
function xn(e) {
	e.MediaStream = e.MediaStream || e.webkitMediaStream;
}
function Sn(e) {
	if (typeof e == "object" && e.RTCPeerConnection && !("ontrack" in e.RTCPeerConnection.prototype)) {
		Object.defineProperty(e.RTCPeerConnection.prototype, "ontrack", {
			get() {
				return this._ontrack;
			},
			set(e) {
				this._ontrack && this.removeEventListener("track", this._ontrack), this.addEventListener("track", this._ontrack = e);
			},
			enumerable: !0,
			configurable: !0
		});
		let t = e.RTCPeerConnection.prototype.setRemoteDescription;
		e.RTCPeerConnection.prototype.setRemoteDescription = function() {
			return this._ontrackpoly || (this._ontrackpoly = (t) => {
				t.stream.addEventListener("addtrack", (n) => {
					let r;
					r = e.RTCPeerConnection.prototype.getReceivers ? this.getReceivers().find((e) => e.track && e.track.id === n.track.id) : { track: n.track };
					let i = new Event("track");
					i.track = n.track, i.receiver = r, i.transceiver = { receiver: r }, i.streams = [t.stream], this.dispatchEvent(i);
				}), t.stream.getTracks().forEach((n) => {
					let r;
					r = e.RTCPeerConnection.prototype.getReceivers ? this.getReceivers().find((e) => e.track && e.track.id === n.id) : { track: n };
					let i = new Event("track");
					i.track = n, i.receiver = r, i.transceiver = { receiver: r }, i.streams = [t.stream], this.dispatchEvent(i);
				});
			}, this.addEventListener("addstream", this._ontrackpoly)), t.apply(this, arguments);
		};
	} else sn(e, "track", (e) => (e.transceiver || Object.defineProperty(e, "transceiver", { value: { receiver: e.receiver } }), e));
}
function Cn(e) {
	if (typeof e == "object" && e.RTCPeerConnection && !("getSenders" in e.RTCPeerConnection.prototype) && "createDTMFSender" in e.RTCPeerConnection.prototype) {
		let t = function(e, t) {
			return {
				track: t,
				get dtmf() {
					return this._dtmf === void 0 && (t.kind === "audio" ? this._dtmf = e.createDTMFSender(t) : this._dtmf = null), this._dtmf;
				},
				_pc: e
			};
		};
		if (!e.RTCPeerConnection.prototype.getSenders) {
			e.RTCPeerConnection.prototype.getSenders = function() {
				return this._senders = this._senders || [], this._senders.slice();
			};
			let n = e.RTCPeerConnection.prototype.addTrack;
			e.RTCPeerConnection.prototype.addTrack = function(e, r) {
				let i = n.apply(this, arguments);
				return i || (i = t(this, e), this._senders.push(i)), i;
			};
			let r = e.RTCPeerConnection.prototype.removeTrack;
			e.RTCPeerConnection.prototype.removeTrack = function(e) {
				r.apply(this, arguments);
				let t = this._senders.indexOf(e);
				t !== -1 && this._senders.splice(t, 1);
			};
		}
		let n = e.RTCPeerConnection.prototype.addStream;
		e.RTCPeerConnection.prototype.addStream = function(e) {
			this._senders = this._senders || [], n.apply(this, [e]), e.getTracks().forEach((e) => {
				this._senders.push(t(this, e));
			});
		};
		let r = e.RTCPeerConnection.prototype.removeStream;
		e.RTCPeerConnection.prototype.removeStream = function(e) {
			this._senders = this._senders || [], r.apply(this, [e]), e.getTracks().forEach((e) => {
				let t = this._senders.find((t) => t.track === e);
				t && this._senders.splice(this._senders.indexOf(t), 1);
			});
		};
	} else if (typeof e == "object" && e.RTCPeerConnection && "getSenders" in e.RTCPeerConnection.prototype && "createDTMFSender" in e.RTCPeerConnection.prototype && e.RTCRtpSender && !("dtmf" in e.RTCRtpSender.prototype)) {
		let t = e.RTCPeerConnection.prototype.getSenders;
		e.RTCPeerConnection.prototype.getSenders = function() {
			let e = t.apply(this, []);
			return e.forEach((e) => e._pc = this), e;
		}, Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", { get() {
			return this._dtmf === void 0 && (this.track.kind === "audio" ? this._dtmf = this._pc.createDTMFSender(this.track) : this._dtmf = null), this._dtmf;
		} });
	}
}
function wn(e) {
	if (!e.RTCPeerConnection) return;
	let t = e.RTCPeerConnection.prototype.getStats;
	e.RTCPeerConnection.prototype.getStats = function() {
		let [e, n, r] = arguments;
		if (arguments.length > 0 && typeof e == "function") return t.apply(this, arguments);
		if (t.length === 0 && (arguments.length === 0 || typeof e != "function")) return t.apply(this, []);
		let i = function(e) {
			let t = {};
			return e.result().forEach((e) => {
				let n = {
					id: e.id,
					timestamp: e.timestamp,
					type: {
						localcandidate: "local-candidate",
						remotecandidate: "remote-candidate"
					}[e.type] || e.type
				};
				e.names().forEach((t) => {
					n[t] = e.stat(t);
				}), t[n.id] = n;
			}), t;
		}, a = function(e) {
			return new Map(Object.keys(e).map((t) => [t, e[t]]));
		};
		return arguments.length >= 2 ? t.apply(this, [function(e) {
			n(a(i(e)));
		}, e]) : new Promise((e, n) => {
			t.apply(this, [function(t) {
				e(a(i(t)));
			}, n]);
		}).then(n, r);
	};
}
function Tn(e) {
	if (!(typeof e == "object" && e.RTCPeerConnection && e.RTCRtpSender && e.RTCRtpReceiver)) return;
	if (!("getStats" in e.RTCRtpSender.prototype)) {
		let t = e.RTCPeerConnection.prototype.getSenders;
		t && (e.RTCPeerConnection.prototype.getSenders = function() {
			let e = t.apply(this, []);
			return e.forEach((e) => e._pc = this), e;
		});
		let n = e.RTCPeerConnection.prototype.addTrack;
		n && (e.RTCPeerConnection.prototype.addTrack = function() {
			let e = n.apply(this, arguments);
			return e._pc = this, e;
		}), e.RTCRtpSender.prototype.getStats = function() {
			let e = this;
			return this._pc.getStats().then((t) => gn(t, e.track, !0));
		};
	}
	if (!("getStats" in e.RTCRtpReceiver.prototype)) {
		let t = e.RTCPeerConnection.prototype.getReceivers;
		t && (e.RTCPeerConnection.prototype.getReceivers = function() {
			let e = t.apply(this, []);
			return e.forEach((e) => e._pc = this), e;
		}), sn(e, "track", (e) => (e.receiver._pc = e.srcElement, e)), e.RTCRtpReceiver.prototype.getStats = function() {
			let e = this;
			return this._pc.getStats().then((t) => gn(t, e.track, !1));
		};
	}
	if (!("getStats" in e.RTCRtpSender.prototype && "getStats" in e.RTCRtpReceiver.prototype)) return;
	let t = e.RTCPeerConnection.prototype.getStats;
	e.RTCPeerConnection.prototype.getStats = function() {
		if (arguments.length > 0 && arguments[0] instanceof e.MediaStreamTrack) {
			let e = arguments[0], t, n, r;
			return this.getSenders().forEach((n) => {
				n.track === e && (t ? r = !0 : t = n);
			}), this.getReceivers().forEach((t) => (t.track === e && (n ? r = !0 : n = t), t.track === e)), r || t && n ? Promise.reject(new DOMException("There are more than one sender or receiver for the track.", "InvalidAccessError")) : t ? t.getStats() : n ? n.getStats() : Promise.reject(new DOMException("There is no sender or receiver for the track.", "InvalidAccessError"));
		}
		return t.apply(this, arguments);
	};
}
function En(e) {
	e.RTCPeerConnection.prototype.getLocalStreams = function() {
		return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, Object.keys(this._shimmedLocalStreams).map((e) => this._shimmedLocalStreams[e][0]);
	};
	let t = e.RTCPeerConnection.prototype.addTrack;
	e.RTCPeerConnection.prototype.addTrack = function(e, n) {
		if (!n) return t.apply(this, arguments);
		this._shimmedLocalStreams = this._shimmedLocalStreams || {};
		let r = t.apply(this, arguments);
		return this._shimmedLocalStreams[n.id] ? this._shimmedLocalStreams[n.id].indexOf(r) === -1 && this._shimmedLocalStreams[n.id].push(r) : this._shimmedLocalStreams[n.id] = [n, r], r;
	};
	let n = e.RTCPeerConnection.prototype.addStream;
	e.RTCPeerConnection.prototype.addStream = function(e) {
		this._shimmedLocalStreams = this._shimmedLocalStreams || {}, e.getTracks().forEach((e) => {
			if (this.getSenders().find((t) => t.track === e)) throw new DOMException("Track already exists.", "InvalidAccessError");
		});
		let t = this.getSenders();
		n.apply(this, arguments);
		let r = this.getSenders().filter((e) => t.indexOf(e) === -1);
		this._shimmedLocalStreams[e.id] = [e].concat(r);
	};
	let r = e.RTCPeerConnection.prototype.removeStream;
	e.RTCPeerConnection.prototype.removeStream = function(e) {
		return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, delete this._shimmedLocalStreams[e.id], r.apply(this, arguments);
	};
	let i = e.RTCPeerConnection.prototype.removeTrack;
	e.RTCPeerConnection.prototype.removeTrack = function(e) {
		return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, e && Object.keys(this._shimmedLocalStreams).forEach((t) => {
			let n = this._shimmedLocalStreams[t].indexOf(e);
			n !== -1 && this._shimmedLocalStreams[t].splice(n, 1), this._shimmedLocalStreams[t].length === 1 && delete this._shimmedLocalStreams[t];
		}), i.apply(this, arguments);
	};
}
function Dn(e, t) {
	if (!e.RTCPeerConnection) return;
	if (e.RTCPeerConnection.prototype.addTrack && t.version >= 65) return En(e);
	let n = e.RTCPeerConnection.prototype.getLocalStreams;
	e.RTCPeerConnection.prototype.getLocalStreams = function() {
		let e = n.apply(this);
		return this._reverseStreams = this._reverseStreams || {}, e.map((e) => this._reverseStreams[e.id]);
	};
	let r = e.RTCPeerConnection.prototype.addStream;
	e.RTCPeerConnection.prototype.addStream = function(t) {
		if (this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, t.getTracks().forEach((e) => {
			if (this.getSenders().find((t) => t.track === e)) throw new DOMException("Track already exists.", "InvalidAccessError");
		}), !this._reverseStreams[t.id]) {
			let n = new e.MediaStream(t.getTracks());
			this._streams[t.id] = n, this._reverseStreams[n.id] = t, t = n;
		}
		r.apply(this, [t]);
	};
	let i = e.RTCPeerConnection.prototype.removeStream;
	e.RTCPeerConnection.prototype.removeStream = function(e) {
		this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, i.apply(this, [this._streams[e.id] || e]), delete this._reverseStreams[this._streams[e.id] ? this._streams[e.id].id : e.id], delete this._streams[e.id];
	}, e.RTCPeerConnection.prototype.addTrack = function(t, n) {
		if (this.signalingState === "closed") throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
		let r = [].slice.call(arguments, 1);
		if (r.length !== 1 || !r[0].getTracks().find((e) => e === t)) throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.", "NotSupportedError");
		if (this.getSenders().find((e) => e.track === t)) throw new DOMException("Track already exists.", "InvalidAccessError");
		this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {};
		let i = this._streams[n.id];
		if (i) i.addTrack(t), Promise.resolve().then(() => {
			this.dispatchEvent(new Event("negotiationneeded"));
		});
		else {
			let r = new e.MediaStream([t]);
			this._streams[n.id] = r, this._reverseStreams[r.id] = n, this.addStream(r);
		}
		return this.getSenders().find((e) => e.track === t);
	};
	function a(e, t) {
		let n = t.sdp;
		return Object.keys(e._reverseStreams || []).forEach((t) => {
			let r = e._reverseStreams[t], i = e._streams[r.id];
			n = n.replace(new RegExp(i.id, "g"), r.id);
		}), new RTCSessionDescription({
			type: t.type,
			sdp: n
		});
	}
	function o(e, t) {
		let n = t.sdp;
		return Object.keys(e._reverseStreams || []).forEach((t) => {
			let r = e._reverseStreams[t], i = e._streams[r.id];
			n = n.replace(new RegExp(r.id, "g"), i.id);
		}), new RTCSessionDescription({
			type: t.type,
			sdp: n
		});
	}
	["createOffer", "createAnswer"].forEach(function(t) {
		let n = e.RTCPeerConnection.prototype[t], r = { [t]() {
			let e = arguments;
			return arguments.length && typeof arguments[0] == "function" ? n.apply(this, [
				(t) => {
					let n = a(this, t);
					e[0].apply(null, [n]);
				},
				(t) => {
					e[1] && e[1].apply(null, t);
				},
				arguments[2]
			]) : n.apply(this, arguments).then((e) => a(this, e));
		} };
		e.RTCPeerConnection.prototype[t] = r[t];
	});
	let s = e.RTCPeerConnection.prototype.setLocalDescription;
	e.RTCPeerConnection.prototype.setLocalDescription = function() {
		return !arguments.length || !arguments[0].type || (arguments[0] = o(this, arguments[0])), s.apply(this, arguments);
	};
	let c = Object.getOwnPropertyDescriptor(e.RTCPeerConnection.prototype, "localDescription");
	Object.defineProperty(e.RTCPeerConnection.prototype, "localDescription", { get() {
		let e = c.get.apply(this);
		return e.type === "" ? e : a(this, e);
	} }), e.RTCPeerConnection.prototype.removeTrack = function(e) {
		if (this.signalingState === "closed") throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
		if (!e._pc) throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", "TypeError");
		if (e._pc !== this) throw new DOMException("Sender was not created by this connection.", "InvalidAccessError");
		this._streams = this._streams || {};
		let t;
		Object.keys(this._streams).forEach((n) => {
			this._streams[n].getTracks().find((t) => e.track === t) && (t = this._streams[n]);
		}), t && (t.getTracks().length === 1 ? this.removeStream(this._reverseStreams[t.id]) : t.removeTrack(e.track), this.dispatchEvent(new Event("negotiationneeded")));
	};
}
function On(e, t) {
	!e.RTCPeerConnection && e.webkitRTCPeerConnection && (e.RTCPeerConnection = e.webkitRTCPeerConnection), e.RTCPeerConnection && t.version < 53 && [
		"setLocalDescription",
		"setRemoteDescription",
		"addIceCandidate"
	].forEach(function(t) {
		let n = e.RTCPeerConnection.prototype[t], r = { [t]() {
			return arguments[0] = new (t === "addIceCandidate" ? e.RTCIceCandidate : e.RTCSessionDescription)(arguments[0]), n.apply(this, arguments);
		} };
		e.RTCPeerConnection.prototype[t] = r[t];
	});
}
function kn(e, t) {
	sn(e, "negotiationneeded", (e) => {
		let n = e.target;
		if (!((t.version < 72 || n.getConfiguration && n.getConfiguration().sdpSemantics === "plan-b") && n.signalingState !== "stable")) return e;
	});
}
//#endregion
//#region node_modules/webrtc-adapter/src/js/firefox/getusermedia.js
function An(e, t) {
	let n = e && e.navigator, r = e && e.MediaStreamTrack;
	if (n.getUserMedia = function(e, t, r) {
		dn("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"), n.mediaDevices.getUserMedia(e).then(t, r);
	}, !(t.version > 55 && "autoGainControl" in n.mediaDevices.getSupportedConstraints())) {
		let e = function(e, t, n) {
			t in e && !(n in e) && (e[n] = e[t], delete e[t]);
		}, t = n.mediaDevices.getUserMedia.bind(n.mediaDevices);
		if (n.mediaDevices.getUserMedia = function(n) {
			return typeof n == "object" && typeof n.audio == "object" && (n = JSON.parse(JSON.stringify(n)), e(n.audio, "autoGainControl", "mozAutoGainControl"), e(n.audio, "noiseSuppression", "mozNoiseSuppression")), t(n);
		}, r && r.prototype.getSettings) {
			let t = r.prototype.getSettings;
			r.prototype.getSettings = function() {
				let n = t.apply(this, arguments);
				return e(n, "mozAutoGainControl", "autoGainControl"), e(n, "mozNoiseSuppression", "noiseSuppression"), n;
			};
		}
		if (r && r.prototype.applyConstraints) {
			let t = r.prototype.applyConstraints;
			r.prototype.applyConstraints = function(n) {
				return this.kind === "audio" && typeof n == "object" && (n = JSON.parse(JSON.stringify(n)), e(n, "autoGainControl", "mozAutoGainControl"), e(n, "noiseSuppression", "mozNoiseSuppression")), t.apply(this, [n]);
			};
		}
	}
}
//#endregion
//#region node_modules/webrtc-adapter/src/js/firefox/getdisplaymedia.js
function jn(e, t) {
	e.navigator.mediaDevices && "getDisplayMedia" in e.navigator.mediaDevices || e.navigator.mediaDevices && (e.navigator.mediaDevices.getDisplayMedia = function(n) {
		if (!(n && n.video)) {
			let e = new DOMException("getDisplayMedia without video constraints is undefined");
			return e.name = "NotFoundError", e.code = 8, Promise.reject(e);
		}
		return n.video === !0 ? n.video = { mediaSource: t } : n.video.mediaSource = t, e.navigator.mediaDevices.getUserMedia(n);
	});
}
//#endregion
//#region node_modules/webrtc-adapter/src/js/firefox/firefox_shim.js
var Mn = /* @__PURE__ */ x({
	shimAddTransceiver: () => zn,
	shimCreateAnswer: () => Hn,
	shimCreateOffer: () => Vn,
	shimGetDisplayMedia: () => jn,
	shimGetParameters: () => Bn,
	shimGetUserMedia: () => An,
	shimOnTrack: () => Nn,
	shimPeerConnection: () => Pn,
	shimRTCDataChannel: () => Rn,
	shimReceiverGetStats: () => In,
	shimRemoveStream: () => Ln,
	shimSenderGetStats: () => Fn
});
function Nn(e) {
	typeof e == "object" && e.RTCTrackEvent && "receiver" in e.RTCTrackEvent.prototype && !("transceiver" in e.RTCTrackEvent.prototype) && Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", { get() {
		return { receiver: this.receiver };
	} });
}
function Pn(e, t) {
	if (typeof e != "object" || !(e.RTCPeerConnection || e.mozRTCPeerConnection)) return;
	!e.RTCPeerConnection && e.mozRTCPeerConnection && (e.RTCPeerConnection = e.mozRTCPeerConnection), t.version < 53 && [
		"setLocalDescription",
		"setRemoteDescription",
		"addIceCandidate"
	].forEach(function(t) {
		let n = e.RTCPeerConnection.prototype[t], r = { [t]() {
			return arguments[0] = new (t === "addIceCandidate" ? e.RTCIceCandidate : e.RTCSessionDescription)(arguments[0]), n.apply(this, arguments);
		} };
		e.RTCPeerConnection.prototype[t] = r[t];
	});
	let n = {
		inboundrtp: "inbound-rtp",
		outboundrtp: "outbound-rtp",
		candidatepair: "candidate-pair",
		localcandidate: "local-candidate",
		remotecandidate: "remote-candidate"
	}, r = e.RTCPeerConnection.prototype.getStats;
	e.RTCPeerConnection.prototype.getStats = function() {
		let [e, i, a] = arguments;
		return r.apply(this, [e || null]).then((e) => {
			if (t.version < 53 && !i) try {
				e.forEach((e) => {
					e.type = n[e.type] || e.type;
				});
			} catch (t) {
				if (t.name !== "TypeError") throw t;
				e.forEach((t, r) => {
					e.set(r, Object.assign({}, t, { type: n[t.type] || t.type }));
				});
			}
			return e;
		}).then(i, a);
	};
}
function Fn(e) {
	if (!(typeof e == "object" && e.RTCPeerConnection && e.RTCRtpSender) || e.RTCRtpSender && "getStats" in e.RTCRtpSender.prototype) return;
	let t = e.RTCPeerConnection.prototype.getSenders;
	t && (e.RTCPeerConnection.prototype.getSenders = function() {
		let e = t.apply(this, []);
		return e.forEach((e) => e._pc = this), e;
	});
	let n = e.RTCPeerConnection.prototype.addTrack;
	n && (e.RTCPeerConnection.prototype.addTrack = function() {
		let e = n.apply(this, arguments);
		return e._pc = this, e;
	}), e.RTCRtpSender.prototype.getStats = function() {
		return this.track ? this._pc.getStats(this.track) : Promise.resolve(/* @__PURE__ */ new Map());
	};
}
function In(e) {
	if (!(typeof e == "object" && e.RTCPeerConnection && e.RTCRtpSender) || e.RTCRtpSender && "getStats" in e.RTCRtpReceiver.prototype) return;
	let t = e.RTCPeerConnection.prototype.getReceivers;
	t && (e.RTCPeerConnection.prototype.getReceivers = function() {
		let e = t.apply(this, []);
		return e.forEach((e) => e._pc = this), e;
	}), sn(e, "track", (e) => (e.receiver._pc = e.srcElement, e)), e.RTCRtpReceiver.prototype.getStats = function() {
		return this._pc.getStats(this.track);
	};
}
function Ln(e) {
	!e.RTCPeerConnection || "removeStream" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.removeStream = function(e) {
		dn("removeStream", "removeTrack"), this.getSenders().forEach((t) => {
			t.track && e.getTracks().includes(t.track) && this.removeTrack(t);
		});
	});
}
function Rn(e) {
	e.DataChannel && !e.RTCDataChannel && (e.RTCDataChannel = e.DataChannel);
}
function zn(e) {
	if (!(typeof e == "object" && e.RTCPeerConnection)) return;
	let t = e.RTCPeerConnection.prototype.addTransceiver;
	t && (e.RTCPeerConnection.prototype.addTransceiver = function() {
		this.setParametersPromises = [];
		let e = arguments[1] && arguments[1].sendEncodings;
		e === void 0 && (e = []), e = [...e];
		let n = e.length > 0;
		n && e.forEach((e) => {
			if ("rid" in e && !/^[a-z0-9]{0,16}$/i.test(e.rid)) throw TypeError("Invalid RID value provided.");
			if ("scaleResolutionDownBy" in e && !(parseFloat(e.scaleResolutionDownBy) >= 1)) throw RangeError("scale_resolution_down_by must be >= 1.0");
			if ("maxFramerate" in e && !(parseFloat(e.maxFramerate) >= 0)) throw RangeError("max_framerate must be >= 0.0");
		});
		let r = t.apply(this, arguments);
		if (n) {
			let { sender: t } = r, n = t.getParameters();
			(!("encodings" in n) || n.encodings.length === 1 && Object.keys(n.encodings[0]).length === 0) && (n.encodings = e, t.sendEncodings = e, this.setParametersPromises.push(t.setParameters(n).then(() => {
				delete t.sendEncodings;
			}).catch(() => {
				delete t.sendEncodings;
			})));
		}
		return r;
	});
}
function Bn(e) {
	if (!(typeof e == "object" && e.RTCRtpSender)) return;
	let t = e.RTCRtpSender.prototype.getParameters;
	t && (e.RTCRtpSender.prototype.getParameters = function() {
		let e = t.apply(this, arguments);
		return "encodings" in e || (e.encodings = [].concat(this.sendEncodings || [{}])), e;
	});
}
function Vn(e) {
	if (!(typeof e == "object" && e.RTCPeerConnection)) return;
	let t = e.RTCPeerConnection.prototype.createOffer;
	e.RTCPeerConnection.prototype.createOffer = function() {
		return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(() => t.apply(this, arguments)).finally(() => {
			this.setParametersPromises = [];
		}) : t.apply(this, arguments);
	};
}
function Hn(e) {
	if (!(typeof e == "object" && e.RTCPeerConnection)) return;
	let t = e.RTCPeerConnection.prototype.createAnswer;
	e.RTCPeerConnection.prototype.createAnswer = function() {
		return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(() => t.apply(this, arguments)).finally(() => {
			this.setParametersPromises = [];
		}) : t.apply(this, arguments);
	};
}
//#endregion
//#region node_modules/webrtc-adapter/src/js/safari/safari_shim.js
var Un = /* @__PURE__ */ x({
	shimAudioContext: () => Qn,
	shimCallbacksAPI: () => Kn,
	shimConstraints: () => Jn,
	shimCreateOfferLegacy: () => Zn,
	shimGetUserMedia: () => qn,
	shimLocalStreamsAPI: () => Wn,
	shimRTCIceServerUrls: () => Yn,
	shimRemoteStreamsAPI: () => Gn,
	shimTrackEventTransceiver: () => Xn
});
function Wn(e) {
	if (!(typeof e != "object" || !e.RTCPeerConnection)) {
		if ("getLocalStreams" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.getLocalStreams = function() {
			return this._localStreams ||= [], this._localStreams;
		}), !("addStream" in e.RTCPeerConnection.prototype)) {
			let t = e.RTCPeerConnection.prototype.addTrack;
			e.RTCPeerConnection.prototype.addStream = function(e) {
				this._localStreams ||= [], this._localStreams.includes(e) || this._localStreams.push(e), e.getAudioTracks().forEach((n) => t.call(this, n, e)), e.getVideoTracks().forEach((n) => t.call(this, n, e));
			}, e.RTCPeerConnection.prototype.addTrack = function(e, ...n) {
				return n && n.forEach((e) => {
					this._localStreams ? this._localStreams.includes(e) || this._localStreams.push(e) : this._localStreams = [e];
				}), t.apply(this, arguments);
			};
		}
		"removeStream" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.removeStream = function(e) {
			this._localStreams ||= [];
			let t = this._localStreams.indexOf(e);
			if (t === -1) return;
			this._localStreams.splice(t, 1);
			let n = e.getTracks();
			this.getSenders().forEach((e) => {
				n.includes(e.track) && this.removeTrack(e);
			});
		});
	}
}
function Gn(e) {
	if (!(typeof e != "object" || !e.RTCPeerConnection) && ("getRemoteStreams" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.getRemoteStreams = function() {
		return this._remoteStreams ? this._remoteStreams : [];
	}), !("onaddstream" in e.RTCPeerConnection.prototype))) {
		Object.defineProperty(e.RTCPeerConnection.prototype, "onaddstream", {
			get() {
				return this._onaddstream;
			},
			set(e) {
				this._onaddstream && (this.removeEventListener("addstream", this._onaddstream), this.removeEventListener("track", this._onaddstreampoly)), this.addEventListener("addstream", this._onaddstream = e), this.addEventListener("track", this._onaddstreampoly = (e) => {
					e.streams.forEach((e) => {
						if (this._remoteStreams ||= [], this._remoteStreams.includes(e)) return;
						this._remoteStreams.push(e);
						let t = new Event("addstream");
						t.stream = e, this.dispatchEvent(t);
					});
				});
			}
		});
		let t = e.RTCPeerConnection.prototype.setRemoteDescription;
		e.RTCPeerConnection.prototype.setRemoteDescription = function() {
			let e = this;
			return this._onaddstreampoly || this.addEventListener("track", this._onaddstreampoly = function(t) {
				t.streams.forEach((t) => {
					if (e._remoteStreams ||= [], e._remoteStreams.indexOf(t) >= 0) return;
					e._remoteStreams.push(t);
					let n = new Event("addstream");
					n.stream = t, e.dispatchEvent(n);
				});
			}), t.apply(e, arguments);
		};
	}
}
function Kn(e) {
	if (typeof e != "object" || !e.RTCPeerConnection) return;
	let t = e.RTCPeerConnection.prototype, n = t.createOffer, r = t.createAnswer, i = t.setLocalDescription, a = t.setRemoteDescription, o = t.addIceCandidate;
	t.createOffer = function(e, t) {
		let r = arguments.length >= 2 ? arguments[2] : arguments[0], i = n.apply(this, [r]);
		return t ? (i.then(e, t), Promise.resolve()) : i;
	}, t.createAnswer = function(e, t) {
		let n = arguments.length >= 2 ? arguments[2] : arguments[0], i = r.apply(this, [n]);
		return t ? (i.then(e, t), Promise.resolve()) : i;
	};
	let s = function(e, t, n) {
		let r = i.apply(this, [e]);
		return n ? (r.then(t, n), Promise.resolve()) : r;
	};
	t.setLocalDescription = s, s = function(e, t, n) {
		let r = a.apply(this, [e]);
		return n ? (r.then(t, n), Promise.resolve()) : r;
	}, t.setRemoteDescription = s, s = function(e, t, n) {
		let r = o.apply(this, [e]);
		return n ? (r.then(t, n), Promise.resolve()) : r;
	}, t.addIceCandidate = s;
}
function qn(e) {
	let t = e && e.navigator;
	if (t.mediaDevices && t.mediaDevices.getUserMedia) {
		let e = t.mediaDevices, n = e.getUserMedia.bind(e);
		t.mediaDevices.getUserMedia = (e) => n(Jn(e));
	}
	!t.getUserMedia && t.mediaDevices && t.mediaDevices.getUserMedia && (t.getUserMedia = function(e, n, r) {
		t.mediaDevices.getUserMedia(e).then(n, r);
	}.bind(t));
}
function Jn(e) {
	return e && e.video !== void 0 ? Object.assign({}, e, { video: mn(e.video) }) : e;
}
function Yn(e) {
	if (!e.RTCPeerConnection) return;
	let t = e.RTCPeerConnection;
	e.RTCPeerConnection = function(e, n) {
		if (e && e.iceServers) {
			let t = [];
			for (let n = 0; n < e.iceServers.length; n++) {
				let r = e.iceServers[n];
				r.urls === void 0 && r.url ? (dn("RTCIceServer.url", "RTCIceServer.urls"), r = JSON.parse(JSON.stringify(r)), r.urls = r.url, delete r.url, t.push(r)) : t.push(e.iceServers[n]);
			}
			e.iceServers = t;
		}
		return new t(e, n);
	}, e.RTCPeerConnection.prototype = t.prototype, "generateCertificate" in t && Object.defineProperty(e.RTCPeerConnection, "generateCertificate", { get() {
		return t.generateCertificate;
	} });
}
function Xn(e) {
	typeof e == "object" && e.RTCTrackEvent && "receiver" in e.RTCTrackEvent.prototype && !("transceiver" in e.RTCTrackEvent.prototype) && Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", { get() {
		return { receiver: this.receiver };
	} });
}
function Zn(e) {
	let t = e.RTCPeerConnection.prototype.createOffer;
	e.RTCPeerConnection.prototype.createOffer = function(e) {
		if (e) {
			e.offerToReceiveAudio !== void 0 && (e.offerToReceiveAudio = !!e.offerToReceiveAudio);
			let t = this.getTransceivers().find((e) => e.receiver.track.kind === "audio");
			e.offerToReceiveAudio === !1 && t ? t.direction === "sendrecv" ? t.setDirection ? t.setDirection("sendonly") : t.direction = "sendonly" : t.direction === "recvonly" && (t.setDirection ? t.setDirection("inactive") : t.direction = "inactive") : e.offerToReceiveAudio === !0 && !t && this.addTransceiver("audio", { direction: "recvonly" }), e.offerToReceiveVideo !== void 0 && (e.offerToReceiveVideo = !!e.offerToReceiveVideo);
			let n = this.getTransceivers().find((e) => e.receiver.track.kind === "video");
			e.offerToReceiveVideo === !1 && n ? n.direction === "sendrecv" ? n.setDirection ? n.setDirection("sendonly") : n.direction = "sendonly" : n.direction === "recvonly" && (n.setDirection ? n.setDirection("inactive") : n.direction = "inactive") : e.offerToReceiveVideo === !0 && !n && this.addTransceiver("video", { direction: "recvonly" });
		}
		return t.apply(this, arguments);
	};
}
function Qn(e) {
	typeof e != "object" || e.AudioContext || (e.AudioContext = e.webkitAudioContext);
}
//#endregion
//#region node_modules/sdp/sdp.js
var $n = /* @__PURE__ */ ne(((e, t) => {
	var n = {};
	n.generateIdentifier = function() {
		return Math.random().toString(36).substring(2, 12);
	}, n.localCName = n.generateIdentifier(), n.splitLines = function(e) {
		return e.trim().split("\n").map((e) => e.trim());
	}, n.splitSections = function(e) {
		return e.split("\nm=").map((e, t) => (t > 0 ? "m=" + e : e).trim() + "\r\n");
	}, n.getDescription = function(e) {
		let t = n.splitSections(e);
		return t && t[0];
	}, n.getMediaSections = function(e) {
		let t = n.splitSections(e);
		return t.shift(), t;
	}, n.matchPrefix = function(e, t) {
		return n.splitLines(e).filter((e) => e.indexOf(t) === 0);
	}, n.parseCandidate = function(e) {
		let t;
		t = e.indexOf("a=candidate:") === 0 ? e.substring(12).split(" ") : e.substring(10).split(" ");
		let n = {
			foundation: t[0],
			component: {
				1: "rtp",
				2: "rtcp"
			}[t[1]] || t[1],
			protocol: t[2].toLowerCase(),
			priority: parseInt(t[3], 10),
			ip: t[4],
			address: t[4],
			port: parseInt(t[5], 10),
			type: t[7]
		};
		for (let e = 8; e < t.length; e += 2) switch (t[e]) {
			case "raddr":
				n.relatedAddress = t[e + 1];
				break;
			case "rport":
				n.relatedPort = parseInt(t[e + 1], 10);
				break;
			case "tcptype":
				n.tcpType = t[e + 1];
				break;
			case "ufrag":
				n.ufrag = t[e + 1], n.usernameFragment = t[e + 1];
				break;
			default:
				n[t[e]] === void 0 && (n[t[e]] = t[e + 1]);
				break;
		}
		return n;
	}, n.writeCandidate = function(e) {
		let t = [];
		t.push(e.foundation);
		let n = e.component;
		n === "rtp" ? t.push(1) : n === "rtcp" ? t.push(2) : t.push(n), t.push(e.protocol.toUpperCase()), t.push(e.priority), t.push(e.address || e.ip), t.push(e.port);
		let r = e.type;
		return t.push("typ"), t.push(r), r !== "host" && e.relatedAddress && e.relatedPort !== void 0 && (t.push("raddr"), t.push(e.relatedAddress), t.push("rport"), t.push(e.relatedPort)), e.tcpType && e.protocol.toLowerCase() === "tcp" && (t.push("tcptype"), t.push(e.tcpType)), (e.usernameFragment || e.ufrag) && (t.push("ufrag"), t.push(e.usernameFragment || e.ufrag)), "candidate:" + t.join(" ");
	}, n.parseIceOptions = function(e) {
		return e.substring(14).split(" ");
	}, n.parseRtpMap = function(e) {
		let t = e.substring(9).split(" "), n = { payloadType: parseInt(t.shift(), 10) };
		return t = t[0].split("/"), n.name = t[0], n.clockRate = parseInt(t[1], 10), n.channels = t.length === 3 ? parseInt(t[2], 10) : 1, n.numChannels = n.channels, n;
	}, n.writeRtpMap = function(e) {
		let t = e.payloadType;
		e.preferredPayloadType !== void 0 && (t = e.preferredPayloadType);
		let n = e.channels || e.numChannels || 1;
		return "a=rtpmap:" + t + " " + e.name + "/" + e.clockRate + (n === 1 ? "" : "/" + n) + "\r\n";
	}, n.parseExtmap = function(e) {
		let t = e.substring(9).split(" ");
		return {
			id: parseInt(t[0], 10),
			direction: t[0].indexOf("/") > 0 ? t[0].split("/")[1] : "sendrecv",
			uri: t[1],
			attributes: t.slice(2).join(" ")
		};
	}, n.writeExtmap = function(e) {
		return "a=extmap:" + (e.id || e.preferredId) + (e.direction && e.direction !== "sendrecv" ? "/" + e.direction : "") + " " + e.uri + (e.attributes ? " " + e.attributes : "") + "\r\n";
	}, n.parseFmtp = function(e) {
		let t = {}, n, r = e.substring(e.indexOf(" ") + 1).split(";");
		for (let e = 0; e < r.length; e++) n = r[e].trim().split("="), t[n[0].trim()] = n[1];
		return t;
	}, n.writeFmtp = function(e) {
		let t = "", n = e.payloadType;
		if (e.preferredPayloadType !== void 0 && (n = e.preferredPayloadType), e.parameters && Object.keys(e.parameters).length) {
			let r = [];
			Object.keys(e.parameters).forEach((t) => {
				e.parameters[t] === void 0 ? r.push(t) : r.push(t + "=" + e.parameters[t]);
			}), t += "a=fmtp:" + n + " " + r.join(";") + "\r\n";
		}
		return t;
	}, n.parseRtcpFb = function(e) {
		let t = e.substring(e.indexOf(" ") + 1).split(" ");
		return {
			type: t.shift(),
			parameter: t.join(" ")
		};
	}, n.writeRtcpFb = function(e) {
		let t = "", n = e.payloadType;
		return e.preferredPayloadType !== void 0 && (n = e.preferredPayloadType), e.rtcpFeedback && e.rtcpFeedback.length && e.rtcpFeedback.forEach((e) => {
			t += "a=rtcp-fb:" + n + " " + e.type + (e.parameter && e.parameter.length ? " " + e.parameter : "") + "\r\n";
		}), t;
	}, n.parseSsrcMedia = function(e) {
		let t = e.indexOf(" "), n = { ssrc: parseInt(e.substring(7, t), 10) }, r = e.indexOf(":", t);
		return r > -1 ? (n.attribute = e.substring(t + 1, r), n.value = e.substring(r + 1)) : n.attribute = e.substring(t + 1), n;
	}, n.parseSsrcGroup = function(e) {
		let t = e.substring(13).split(" ");
		return {
			semantics: t.shift(),
			ssrcs: t.map((e) => parseInt(e, 10))
		};
	}, n.getMid = function(e) {
		let t = n.matchPrefix(e, "a=mid:")[0];
		if (t) return t.substring(6);
	}, n.parseFingerprint = function(e) {
		let t = e.substring(14).split(" ");
		return {
			algorithm: t[0].toLowerCase(),
			value: t[1].toUpperCase()
		};
	}, n.getDtlsParameters = function(e, t) {
		return {
			role: "auto",
			fingerprints: n.matchPrefix(e + t, "a=fingerprint:").map(n.parseFingerprint)
		};
	}, n.writeDtlsParameters = function(e, t) {
		let n = "a=setup:" + t + "\r\n";
		return e.fingerprints.forEach((e) => {
			n += "a=fingerprint:" + e.algorithm + " " + e.value + "\r\n";
		}), n;
	}, n.parseCryptoLine = function(e) {
		let t = e.substring(9).split(" ");
		return {
			tag: parseInt(t[0], 10),
			cryptoSuite: t[1],
			keyParams: t[2],
			sessionParams: t.slice(3)
		};
	}, n.writeCryptoLine = function(e) {
		return "a=crypto:" + e.tag + " " + e.cryptoSuite + " " + (typeof e.keyParams == "object" ? n.writeCryptoKeyParams(e.keyParams) : e.keyParams) + (e.sessionParams ? " " + e.sessionParams.join(" ") : "") + "\r\n";
	}, n.parseCryptoKeyParams = function(e) {
		if (e.indexOf("inline:") !== 0) return null;
		let t = e.substring(7).split("|");
		return {
			keyMethod: "inline",
			keySalt: t[0],
			lifeTime: t[1],
			mkiValue: t[2] ? t[2].split(":")[0] : void 0,
			mkiLength: t[2] ? t[2].split(":")[1] : void 0
		};
	}, n.writeCryptoKeyParams = function(e) {
		return e.keyMethod + ":" + e.keySalt + (e.lifeTime ? "|" + e.lifeTime : "") + (e.mkiValue && e.mkiLength ? "|" + e.mkiValue + ":" + e.mkiLength : "");
	}, n.getCryptoParameters = function(e, t) {
		return n.matchPrefix(e + t, "a=crypto:").map(n.parseCryptoLine);
	}, n.getIceParameters = function(e, t) {
		let r = n.matchPrefix(e + t, "a=ice-ufrag:")[0], i = n.matchPrefix(e + t, "a=ice-pwd:")[0];
		return r && i ? {
			usernameFragment: r.substring(12),
			password: i.substring(10)
		} : null;
	}, n.writeIceParameters = function(e) {
		let t = "a=ice-ufrag:" + e.usernameFragment + "\r\na=ice-pwd:" + e.password + "\r\n";
		return e.iceLite && (t += "a=ice-lite\r\n"), t;
	}, n.parseRtpParameters = function(e) {
		let t = {
			codecs: [],
			headerExtensions: [],
			fecMechanisms: [],
			rtcp: []
		}, r = n.splitLines(e)[0].split(" ");
		t.profile = r[2];
		for (let i = 3; i < r.length; i++) {
			let a = r[i], o = n.matchPrefix(e, "a=rtpmap:" + a + " ")[0];
			if (o) {
				let r = n.parseRtpMap(o), i = n.matchPrefix(e, "a=fmtp:" + a + " ");
				switch (r.parameters = i.length ? n.parseFmtp(i[0]) : {}, r.rtcpFeedback = n.matchPrefix(e, "a=rtcp-fb:" + a + " ").map(n.parseRtcpFb), t.codecs.push(r), r.name.toUpperCase()) {
					case "RED":
					case "ULPFEC":
						t.fecMechanisms.push(r.name.toUpperCase());
						break;
					default: break;
				}
			}
		}
		n.matchPrefix(e, "a=extmap:").forEach((e) => {
			t.headerExtensions.push(n.parseExtmap(e));
		});
		let i = n.matchPrefix(e, "a=rtcp-fb:* ").map(n.parseRtcpFb);
		return t.codecs.forEach((e) => {
			i.forEach((t) => {
				e.rtcpFeedback.find((e) => e.type === t.type && e.parameter === t.parameter) || e.rtcpFeedback.push(t);
			});
		}), t;
	}, n.writeRtpDescription = function(e, t) {
		let r = "";
		r += "m=" + e + " ", r += t.codecs.length > 0 ? "9" : "0", r += " " + (t.profile || "UDP/TLS/RTP/SAVPF") + " ", r += t.codecs.map((e) => e.preferredPayloadType === void 0 ? e.payloadType : e.preferredPayloadType).join(" ") + "\r\n", r += "c=IN IP4 0.0.0.0\r\n", r += "a=rtcp:9 IN IP4 0.0.0.0\r\n", t.codecs.forEach((e) => {
			r += n.writeRtpMap(e), r += n.writeFmtp(e), r += n.writeRtcpFb(e);
		});
		let i = 0;
		return t.codecs.forEach((e) => {
			e.maxptime > i && (i = e.maxptime);
		}), i > 0 && (r += "a=maxptime:" + i + "\r\n"), t.headerExtensions && t.headerExtensions.forEach((e) => {
			r += n.writeExtmap(e);
		}), r;
	}, n.parseRtpEncodingParameters = function(e) {
		let t = [], r = n.parseRtpParameters(e), i = r.fecMechanisms.indexOf("RED") !== -1, a = r.fecMechanisms.indexOf("ULPFEC") !== -1, o = n.matchPrefix(e, "a=ssrc:").map((e) => n.parseSsrcMedia(e)).filter((e) => e.attribute === "cname"), s = o.length > 0 && o[0].ssrc, c, l = n.matchPrefix(e, "a=ssrc-group:FID").map((e) => e.substring(17).split(" ").map((e) => parseInt(e, 10)));
		l.length > 0 && l[0].length > 1 && l[0][0] === s && (c = l[0][1]), r.codecs.forEach((e) => {
			if (e.name.toUpperCase() === "RTX" && e.parameters.apt) {
				let n = {
					ssrc: s,
					codecPayloadType: parseInt(e.parameters.apt, 10)
				};
				s && c && (n.rtx = { ssrc: c }), t.push(n), i && (n = JSON.parse(JSON.stringify(n)), n.fec = {
					ssrc: s,
					mechanism: a ? "red+ulpfec" : "red"
				}, t.push(n));
			}
		}), t.length === 0 && s && t.push({ ssrc: s });
		let u = n.matchPrefix(e, "b=");
		return u.length && (u = u[0].indexOf("b=TIAS:") === 0 ? parseInt(u[0].substring(7), 10) : u[0].indexOf("b=AS:") === 0 ? parseInt(u[0].substring(5), 10) * 1e3 * .95 - 2e3 * 8 : void 0, t.forEach((e) => {
			e.maxBitrate = u;
		})), t;
	}, n.parseRtcpParameters = function(e) {
		let t = {}, r = n.matchPrefix(e, "a=ssrc:").map((e) => n.parseSsrcMedia(e)).filter((e) => e.attribute === "cname")[0];
		r && (t.cname = r.value, t.ssrc = r.ssrc);
		let i = n.matchPrefix(e, "a=rtcp-rsize");
		return t.reducedSize = i.length > 0, t.compound = i.length === 0, t.mux = n.matchPrefix(e, "a=rtcp-mux").length > 0, t;
	}, n.writeRtcpParameters = function(e) {
		let t = "";
		return e.reducedSize && (t += "a=rtcp-rsize\r\n"), e.mux && (t += "a=rtcp-mux\r\n"), e.ssrc !== void 0 && e.cname && (t += "a=ssrc:" + e.ssrc + " cname:" + e.cname + "\r\n"), t;
	}, n.parseMsid = function(e) {
		let t, r = n.matchPrefix(e, "a=msid:");
		if (r.length === 1) return t = r[0].substring(7).split(" "), {
			stream: t[0],
			track: t[1]
		};
		let i = n.matchPrefix(e, "a=ssrc:").map((e) => n.parseSsrcMedia(e)).filter((e) => e.attribute === "msid");
		if (i.length > 0) return t = i[0].value.split(" "), {
			stream: t[0],
			track: t[1]
		};
	}, n.parseSctpDescription = function(e) {
		let t = n.parseMLine(e), r = n.matchPrefix(e, "a=max-message-size:"), i;
		r.length > 0 && (i = parseInt(r[0].substring(19), 10)), isNaN(i) && (i = 65536);
		let a = n.matchPrefix(e, "a=sctp-port:");
		if (a.length > 0) return {
			port: parseInt(a[0].substring(12), 10),
			protocol: t.fmt,
			maxMessageSize: i
		};
		let o = n.matchPrefix(e, "a=sctpmap:");
		if (o.length > 0) {
			let e = o[0].substring(10).split(" ");
			return {
				port: parseInt(e[0], 10),
				protocol: e[1],
				maxMessageSize: i
			};
		}
	}, n.writeSctpDescription = function(e, t) {
		let n = [];
		return n = e.protocol === "DTLS/SCTP" ? [
			"m=" + e.kind + " 9 " + e.protocol + " " + t.port + "\r\n",
			"c=IN IP4 0.0.0.0\r\n",
			"a=sctpmap:" + t.port + " " + t.protocol + " 65535\r\n"
		] : [
			"m=" + e.kind + " 9 " + e.protocol + " " + t.protocol + "\r\n",
			"c=IN IP4 0.0.0.0\r\n",
			"a=sctp-port:" + t.port + "\r\n"
		], t.maxMessageSize !== void 0 && n.push("a=max-message-size:" + t.maxMessageSize + "\r\n"), n.join("");
	}, n.generateSessionId = function() {
		return Math.random().toString().substr(2, 22);
	}, n.writeSessionBoilerplate = function(e, t, r) {
		let i, a = t === void 0 ? 2 : t;
		return i = e || n.generateSessionId(), "v=0\r\no=" + (r || "thisisadapterortc") + " " + i + " " + a + " IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n";
	}, n.getDirection = function(e, t) {
		let r = n.splitLines(e);
		for (let e = 0; e < r.length; e++) switch (r[e]) {
			case "a=sendrecv":
			case "a=sendonly":
			case "a=recvonly":
			case "a=inactive": return r[e].substring(2);
			default:
		}
		return t ? n.getDirection(t) : "sendrecv";
	}, n.getKind = function(e) {
		return n.splitLines(e)[0].split(" ")[0].substring(2);
	}, n.isRejected = function(e) {
		return e.split(" ", 2)[1] === "0";
	}, n.parseMLine = function(e) {
		let t = n.splitLines(e)[0].substring(2).split(" ");
		return {
			kind: t[0],
			port: parseInt(t[1], 10),
			protocol: t[2],
			fmt: t.slice(3).join(" ")
		};
	}, n.parseOLine = function(e) {
		let t = n.matchPrefix(e, "o=")[0].substring(2).split(" ");
		return {
			username: t[0],
			sessionId: t[1],
			sessionVersion: parseInt(t[2], 10),
			netType: t[3],
			addressType: t[4],
			address: t[5]
		};
	}, n.isValidSDP = function(e) {
		if (typeof e != "string" || e.length === 0) return !1;
		let t = n.splitLines(e);
		for (let e = 0; e < t.length; e++) if (t[e].length < 2 || t[e].charAt(1) !== "=") return !1;
		return !0;
	}, typeof t == "object" && (t.exports = n);
})), er = /* @__PURE__ */ x({
	removeExtmapAllowMixed: () => sr,
	shimAddIceCandidateNullOrEmpty: () => cr,
	shimConnectionState: () => or,
	shimMaxMessageSize: () => ir,
	shimParameterlessSetLocalDescription: () => lr,
	shimRTCIceCandidate: () => nr,
	shimRTCIceCandidateRelayProtocol: () => rr,
	shimSendThrowTypeError: () => ar
}), tr = /* @__PURE__ */ ie($n());
function nr(e) {
	if (!e.RTCIceCandidate || e.RTCIceCandidate && "foundation" in e.RTCIceCandidate.prototype) return;
	let t = e.RTCIceCandidate;
	e.RTCIceCandidate = function(e) {
		if (typeof e == "object" && e.candidate && e.candidate.indexOf("a=") === 0 && (e = JSON.parse(JSON.stringify(e)), e.candidate = e.candidate.substring(2)), e.candidate && e.candidate.length) {
			let n = new t(e), r = tr.default.parseCandidate(e.candidate);
			for (let e in r) e in n || Object.defineProperty(n, e, { value: r[e] });
			return n.toJSON = function() {
				return {
					candidate: n.candidate,
					sdpMid: n.sdpMid,
					sdpMLineIndex: n.sdpMLineIndex,
					usernameFragment: n.usernameFragment
				};
			}, n;
		}
		return new t(e);
	}, e.RTCIceCandidate.prototype = t.prototype, sn(e, "icecandidate", (t) => (t.candidate && Object.defineProperty(t, "candidate", {
		value: new e.RTCIceCandidate(t.candidate),
		writable: "false"
	}), t));
}
function rr(e) {
	!e.RTCIceCandidate || e.RTCIceCandidate && "relayProtocol" in e.RTCIceCandidate.prototype || sn(e, "icecandidate", (e) => {
		if (e.candidate) {
			let t = tr.default.parseCandidate(e.candidate.candidate);
			t.type === "relay" && (e.candidate.relayProtocol = {
				0: "tls",
				1: "tcp",
				2: "udp"
			}[t.priority >> 24]);
		}
		return e;
	});
}
function ir(e, t) {
	if (!e.RTCPeerConnection) return;
	"sctp" in e.RTCPeerConnection.prototype || Object.defineProperty(e.RTCPeerConnection.prototype, "sctp", { get() {
		return this._sctp === void 0 ? null : this._sctp;
	} });
	let n = function(e) {
		if (!e || !e.sdp) return !1;
		let t = tr.default.splitSections(e.sdp);
		return t.shift(), t.some((e) => {
			let t = tr.default.parseMLine(e);
			return t && t.kind === "application" && t.protocol.indexOf("SCTP") !== -1;
		});
	}, r = function(e) {
		let t = e.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
		if (t === null || t.length < 2) return -1;
		let n = parseInt(t[1], 10);
		return n === n ? n : -1;
	}, i = function(e) {
		let n = 65536;
		return t.browser === "firefox" && (n = t.version < 57 ? e === -1 ? 16384 : 2147483637 : t.version < 60 ? t.version === 57 ? 65535 : 65536 : 2147483637), n;
	}, a = function(e, n) {
		let r = 65536;
		t.browser === "firefox" && t.version === 57 && (r = 65535);
		let i = tr.default.matchPrefix(e.sdp, "a=max-message-size:");
		return i.length > 0 ? r = parseInt(i[0].substring(19), 10) : t.browser === "firefox" && n !== -1 && (r = 2147483637), r;
	}, o = e.RTCPeerConnection.prototype.setRemoteDescription;
	e.RTCPeerConnection.prototype.setRemoteDescription = function() {
		if (this._sctp = null, t.browser === "chrome" && t.version >= 76) {
			let { sdpSemantics: e } = this.getConfiguration();
			e === "plan-b" && Object.defineProperty(this, "sctp", {
				get() {
					return this._sctp === void 0 ? null : this._sctp;
				},
				enumerable: !0,
				configurable: !0
			});
		}
		if (n(arguments[0])) {
			let e = r(arguments[0]), t = i(e), n = a(arguments[0], e), o;
			o = t === 0 && n === 0 ? Infinity : t === 0 || n === 0 ? Math.max(t, n) : Math.min(t, n);
			let s = {};
			Object.defineProperty(s, "maxMessageSize", { get() {
				return o;
			} }), this._sctp = s;
		}
		return o.apply(this, arguments);
	};
}
function ar(e) {
	if (!(e.RTCPeerConnection && "createDataChannel" in e.RTCPeerConnection.prototype)) return;
	function t(e, t) {
		let n = e.send;
		e.send = function() {
			let r = arguments[0], i = r.length || r.size || r.byteLength;
			if (e.readyState === "open" && t.sctp && i > t.sctp.maxMessageSize) throw TypeError("Message too large (can send a maximum of " + t.sctp.maxMessageSize + " bytes)");
			return n.apply(e, arguments);
		};
	}
	let n = e.RTCPeerConnection.prototype.createDataChannel;
	e.RTCPeerConnection.prototype.createDataChannel = function() {
		let e = n.apply(this, arguments);
		return t(e, this), e;
	}, sn(e, "datachannel", (e) => (t(e.channel, e.target), e));
}
function or(e) {
	if (!e.RTCPeerConnection || "connectionState" in e.RTCPeerConnection.prototype) return;
	let t = e.RTCPeerConnection.prototype;
	Object.defineProperty(t, "connectionState", {
		get() {
			return {
				completed: "connected",
				checking: "connecting"
			}[this.iceConnectionState] || this.iceConnectionState;
		},
		enumerable: !0,
		configurable: !0
	}), Object.defineProperty(t, "onconnectionstatechange", {
		get() {
			return this._onconnectionstatechange || null;
		},
		set(e) {
			this._onconnectionstatechange && (this.removeEventListener("connectionstatechange", this._onconnectionstatechange), delete this._onconnectionstatechange), e && this.addEventListener("connectionstatechange", this._onconnectionstatechange = e);
		},
		enumerable: !0,
		configurable: !0
	}), ["setLocalDescription", "setRemoteDescription"].forEach((e) => {
		let n = t[e];
		t[e] = function() {
			return this._connectionstatechangepoly || (this._connectionstatechangepoly = (e) => {
				let t = e.target;
				if (t._lastConnectionState !== t.connectionState) {
					t._lastConnectionState = t.connectionState;
					let n = new Event("connectionstatechange", e);
					t.dispatchEvent(n);
				}
				return e;
			}, this.addEventListener("iceconnectionstatechange", this._connectionstatechangepoly)), n.apply(this, arguments);
		};
	});
}
function sr(e, t) {
	if (!e.RTCPeerConnection || t.browser === "chrome" && t.version >= 71 || t.browser === "safari" && t._safariVersion >= 13.1) return;
	let n = e.RTCPeerConnection.prototype.setRemoteDescription;
	e.RTCPeerConnection.prototype.setRemoteDescription = function(t) {
		if (t && t.sdp && t.sdp.indexOf("\na=extmap-allow-mixed") !== -1) {
			let n = t.sdp.split("\n").filter((e) => e.trim() !== "a=extmap-allow-mixed").join("\n");
			e.RTCSessionDescription && t instanceof e.RTCSessionDescription ? arguments[0] = new e.RTCSessionDescription({
				type: t.type,
				sdp: n
			}) : t.sdp = n;
		}
		return n.apply(this, arguments);
	};
}
function cr(e, t) {
	if (!(e.RTCPeerConnection && e.RTCPeerConnection.prototype)) return;
	let n = e.RTCPeerConnection.prototype.addIceCandidate;
	!n || n.length === 0 || (e.RTCPeerConnection.prototype.addIceCandidate = function() {
		return arguments[0] ? (t.browser === "chrome" && t.version < 78 || t.browser === "firefox" && t.version < 68 || t.browser === "safari") && arguments[0] && arguments[0].candidate === "" ? Promise.resolve() : n.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve());
	});
}
function lr(e, t) {
	if (!(e.RTCPeerConnection && e.RTCPeerConnection.prototype)) return;
	let n = e.RTCPeerConnection.prototype.setLocalDescription;
	!n || n.length === 0 || (e.RTCPeerConnection.prototype.setLocalDescription = function() {
		let e = arguments[0] || {};
		if (typeof e != "object" || e.type && e.sdp) return n.apply(this, arguments);
		if (e = {
			type: e.type,
			sdp: e.sdp
		}, !e.type) switch (this.signalingState) {
			case "stable":
			case "have-local-offer":
			case "have-remote-pranswer":
				e.type = "offer";
				break;
			default:
				e.type = "answer";
				break;
		}
		return e.sdp || e.type !== "offer" && e.type !== "answer" ? n.apply(this, [e]) : (e.type === "offer" ? this.createOffer : this.createAnswer).apply(this).then((e) => n.apply(this, [e]));
	});
}
//#endregion
//#region node_modules/webrtc-adapter/src/js/adapter_factory.js
function ur({ window: e } = {}, t = {
	shimChrome: !0,
	shimFirefox: !0,
	shimSafari: !0
}) {
	let n = un, r = fn(e), i = {
		browserDetails: r,
		commonShim: er,
		extractVersion: on,
		disableLog: cn,
		disableWarnings: ln,
		sdp: tr
	};
	switch (r.browser) {
		case "chrome":
			if (!bn || !On || !t.shimChrome) return n("Chrome shim is not included in this adapter release."), i;
			if (r.version === null) return n("Chrome shim can not determine version, not shimming."), i;
			n("adapter.js shimming chrome."), i.browserShim = bn, cr(e, r), lr(e, r), vn(e, r), xn(e, r), On(e, r), Sn(e, r), Dn(e, r), Cn(e, r), wn(e, r), Tn(e, r), kn(e, r), nr(e, r), rr(e, r), or(e, r), ir(e, r), ar(e, r), sr(e, r);
			break;
		case "firefox":
			if (!Mn || !Pn || !t.shimFirefox) return n("Firefox shim is not included in this adapter release."), i;
			n("adapter.js shimming firefox."), i.browserShim = Mn, cr(e, r), lr(e, r), An(e, r), Pn(e, r), Nn(e, r), Ln(e, r), Fn(e, r), In(e, r), Rn(e, r), zn(e, r), Bn(e, r), Vn(e, r), Hn(e, r), nr(e, r), or(e, r), ir(e, r), ar(e, r);
			break;
		case "safari":
			if (!Un || !t.shimSafari) return n("Safari shim is not included in this adapter release."), i;
			n("adapter.js shimming safari."), i.browserShim = Un, cr(e, r), lr(e, r), Yn(e, r), Zn(e, r), Kn(e, r), Wn(e, r), Gn(e, r), Xn(e, r), qn(e, r), Qn(e, r), nr(e, r), rr(e, r), ir(e, r), ar(e, r), sr(e, r);
			break;
		default:
			n("Unsupported browser!");
			break;
	}
	return i;
}
//#endregion
//#region node_modules/webrtc-adapter/src/js/adapter_core.js
var dr = ur({ window: typeof window > "u" ? void 0 : window }), fr = /* @__PURE__ */ ie((/* @__PURE__ */ ne(((e, t) => {
	(function(n) {
		var r = Object.hasOwnProperty, i = Array.isArray ? Array.isArray : function(e) {
			return Object.prototype.toString.call(e) === "[object Array]";
		}, a = 10, o = typeof process == "object" && typeof process.nextTick == "function", s = typeof Symbol == "function", c = typeof Reflect == "object", l = typeof setImmediate == "function" ? setImmediate : setTimeout, u = s ? c && typeof Reflect.ownKeys == "function" ? Reflect.ownKeys : function(e) {
			var t = Object.getOwnPropertyNames(e);
			return t.push.apply(t, Object.getOwnPropertySymbols(e)), t;
		} : Object.keys;
		function d() {
			this._events = {}, this._conf && f.call(this, this._conf);
		}
		function f(e) {
			e && (this._conf = e, e.delimiter && (this.delimiter = e.delimiter), e.maxListeners !== n && (this._maxListeners = e.maxListeners), e.wildcard && (this.wildcard = e.wildcard), e.newListener && (this._newListener = e.newListener), e.removeListener && (this._removeListener = e.removeListener), e.verboseMemoryLeak && (this.verboseMemoryLeak = e.verboseMemoryLeak), e.ignoreErrors && (this.ignoreErrors = e.ignoreErrors), this.wildcard && (this.listenerTree = {}));
		}
		function p(e, t) {
			var n = "(node) warning: possible EventEmitter memory leak detected. " + e + " listeners added. Use emitter.setMaxListeners() to increase limit.";
			if (this.verboseMemoryLeak && (n += " Event name: " + t + "."), typeof process < "u" && process.emitWarning) {
				var r = Error(n);
				r.name = "MaxListenersExceededWarning", r.emitter = this, r.count = e, process.emitWarning(r);
			} else console.error(n), console.trace && console.trace();
		}
		var m = function(e, t, n) {
			var r = arguments.length;
			switch (r) {
				case 0: return [];
				case 1: return [e];
				case 2: return [e, t];
				case 3: return [
					e,
					t,
					n
				];
				default:
					for (var i = Array(r); r--;) i[r] = arguments[r];
					return i;
			}
		};
		function h(e, t) {
			for (var r = {}, i, a = e.length, o = t ? t.length : 0, s = 0; s < a; s++) i = e[s], r[i] = s < o ? t[s] : n;
			return r;
		}
		function g(e, t, n) {
			this._emitter = e, this._target = t, this._listeners = {}, this._listenersCount = 0;
			var r, i;
			if ((n.on || n.off) && (r = n.on, i = n.off), t.addEventListener ? (r = t.addEventListener, i = t.removeEventListener) : t.addListener ? (r = t.addListener, i = t.removeListener) : t.on && (r = t.on, i = t.off), !r && !i) throw Error("target does not implement any known event API");
			if (typeof r != "function") throw TypeError("on method must be a function");
			if (typeof i != "function") throw TypeError("off method must be a function");
			this._on = r, this._off = i;
			var a = e._observers;
			a ? a.push(this) : e._observers = [this];
		}
		Object.assign(g.prototype, {
			subscribe: function(e, t, n) {
				var r = this, i = this._target, a = this._emitter, o = this._listeners, s = function() {
					var r = m.apply(null, arguments), o = {
						data: r,
						name: t,
						original: e
					};
					if (n) {
						n.call(i, o) !== !1 && a.emit.apply(a, [o.name].concat(r));
						return;
					}
					a.emit.apply(a, [t].concat(r));
				};
				if (o[e]) throw Error("Event '" + e + "' is already listening");
				this._listenersCount++, a._newListener && a._removeListener && !r._onNewListener ? (this._onNewListener = function(n) {
					n === t && o[e] === null && (o[e] = s, r._on.call(i, e, s));
				}, a.on("newListener", this._onNewListener), this._onRemoveListener = function(n) {
					n === t && !a.hasListeners(n) && o[e] && (o[e] = null, r._off.call(i, e, s));
				}, o[e] = null, a.on("removeListener", this._onRemoveListener)) : (o[e] = s, r._on.call(i, e, s));
			},
			unsubscribe: function(e) {
				var t = this, n = this._listeners, r = this._emitter, i, a, o = this._off, s = this._target, c;
				if (e && typeof e != "string") throw TypeError("event must be a string");
				function l() {
					t._onNewListener && (r.off("newListener", t._onNewListener), r.off("removeListener", t._onRemoveListener), t._onNewListener = null, t._onRemoveListener = null);
					var e = ne.call(r, t);
					r._observers.splice(e, 1);
				}
				if (e) {
					if (i = n[e], !i) return;
					o.call(s, e, i), delete n[e], --this._listenersCount || l();
				} else {
					for (a = u(n), c = a.length; c-- > 0;) e = a[c], o.call(s, e, n[e]);
					this._listeners = {}, this._listenersCount = 0, l();
				}
			}
		});
		function _(e, t, i, a) {
			var o = Object.assign({}, t);
			if (!e) return o;
			if (typeof e != "object") throw TypeError("options must be an object");
			var s = Object.keys(e), c = s.length, l, u, d;
			function f(e) {
				throw Error("Invalid \"" + l + "\" option value" + (e ? ". Reason: " + e : ""));
			}
			for (var p = 0; p < c; p++) {
				if (l = s[p], !a && !r.call(t, l)) throw Error("Unknown \"" + l + "\" option");
				u = e[l], u !== n && (d = i[l], o[l] = d ? d(u, f) : u);
			}
			return o;
		}
		function v(e, t) {
			return (typeof e != "function" || !e.hasOwnProperty("prototype")) && t("value must be a constructor"), e;
		}
		function y(e) {
			var t = "value must be type of " + e.join("|"), n = e.length, r = e[0], i = e[1];
			return n === 1 ? function(e, n) {
				if (typeof e === r) return e;
				n(t);
			} : n === 2 ? function(e, n) {
				var a = typeof e;
				if (a === r || a === i) return e;
				n(t);
			} : function(r, i) {
				for (var a = typeof r, o = n; o-- > 0;) if (a === e[o]) return r;
				i(t);
			};
		}
		var ee = y(["function"]), te = y(["object", "function"]);
		function b(e, t, n) {
			var r, i, a = 0, o, s = new e(function(c, l, u) {
				n = _(n, {
					timeout: 0,
					overload: !1
				}, { timeout: function(e, t) {
					return e *= 1, (typeof e != "number" || e < 0 || !Number.isFinite(e)) && t("timeout must be a positive number"), e;
				} }), r = !n.overload && typeof e.prototype.cancel == "function" && typeof u == "function";
				function d() {
					i &&= null, a &&= (clearTimeout(a), 0);
				}
				var f = function(e) {
					d(), c(e);
				}, p = function(e) {
					d(), l(e);
				};
				r ? t(f, p, u) : (i = [function(e) {
					p(e || Error("canceled"));
				}], t(f, p, function(e) {
					if (o) throw Error("Unable to subscribe on cancel event asynchronously");
					if (typeof e != "function") throw TypeError("onCancel callback must be a function");
					i.push(e);
				}), o = !0), n.timeout > 0 && (a = setTimeout(function() {
					var e = Error("timeout");
					e.code = "ETIMEDOUT", a = 0, s.cancel(e), l(e);
				}, n.timeout));
			});
			return r || (s.cancel = function(e) {
				if (i) {
					for (var t = i.length, n = 1; n < t; n++) i[n](e);
					i[0](e), i = null;
				}
			}), s;
		}
		function ne(e) {
			var t = this._observers;
			if (!t) return -1;
			for (var n = t.length, r = 0; r < n; r++) if (t[r]._target === e) return r;
			return -1;
		}
		function x(e, t, n, r, i) {
			if (!n) return null;
			if (r === 0) {
				var a = typeof t;
				if (a === "string") {
					var o, s, c = 0, l = 0, d = this.delimiter, f = d.length;
					if ((s = t.indexOf(d)) !== -1) {
						o = [
							,
							,
							,
							,
							,
						];
						do
							o[c++] = t.slice(l, s), l = s + f;
						while ((s = t.indexOf(d, l)) !== -1);
						o[c++] = t.slice(l), t = o, i = c;
					} else t = [t], i = 1;
				} else a === "object" ? i = t.length : (t = [t], i = 1);
			}
			var p = null, m, h, g, _, v, y = t[r], ee = t[r + 1], te, b;
			if (r === i) n._listeners && (typeof n._listeners == "function" ? (e && e.push(n._listeners), p = [n]) : (e && e.push.apply(e, n._listeners), p = [n]));
			else if (y === "*") {
				for (te = u(n), s = te.length; s-- > 0;) m = te[s], m !== "_listeners" && (b = x(e, t, n[m], r + 1, i), b && (p ? p.push.apply(p, b) : p = b));
				return p;
			} else if (y === "**") {
				for (v = r + 1 === i || r + 2 === i && ee === "*", v && n._listeners && (p = x(e, t, n, i, i)), te = u(n), s = te.length; s-- > 0;) m = te[s], m !== "_listeners" && (m === "*" || m === "**" ? (n[m]._listeners && !v && (b = x(e, t, n[m], i, i), b && (p ? p.push.apply(p, b) : p = b)), b = x(e, t, n[m], r, i)) : b = m === ee ? x(e, t, n[m], r + 2, i) : x(e, t, n[m], r, i), b && (p ? p.push.apply(p, b) : p = b));
				return p;
			} else n[y] && (p = x(e, t, n[y], r + 1, i));
			if (h = n["*"], h && x(e, t, h, r + 1, i), g = n["**"], g) if (r < i) for (g._listeners && x(e, t, g, i, i), te = u(g), s = te.length; s-- > 0;) m = te[s], m !== "_listeners" && (m === ee ? x(e, t, g[m], r + 2, i) : m === y ? x(e, t, g[m], r + 1, i) : (_ = {}, _[m] = g[m], x(e, t, { "**": _ }, r + 1, i)));
			else g._listeners ? x(e, t, g, i, i) : g["*"] && g["*"]._listeners && x(e, t, g["*"], i, i);
			return p;
		}
		function re(e, t, n) {
			var r = 0, i = 0, a, o = this.delimiter, s = o.length, c;
			if (typeof e == "string") if ((a = e.indexOf(o)) !== -1) {
				c = [
					,
					,
					,
					,
					,
				];
				do
					c[r++] = e.slice(i, a), i = a + s;
				while ((a = e.indexOf(o, i)) !== -1);
				c[r++] = e.slice(i);
			} else c = [e], r = 1;
			else c = e, r = e.length;
			if (r > 1) {
				for (a = 0; a + 1 < r; a++) if (c[a] === "**" && c[a + 1] === "**") return;
			}
			var l = this.listenerTree, u;
			for (a = 0; a < r; a++) if (u = c[a], l = l[u] || (l[u] = {}), a === r - 1) return l._listeners ? (typeof l._listeners == "function" && (l._listeners = [l._listeners]), n ? l._listeners.unshift(t) : l._listeners.push(t), !l._listeners.warned && this._maxListeners > 0 && l._listeners.length > this._maxListeners && (l._listeners.warned = !0, p.call(this, l._listeners.length, u))) : l._listeners = t, !0;
			return !0;
		}
		function ie(e, t, n, r) {
			for (var i = u(e), a = i.length, o, s, c, l = e._listeners, d; a-- > 0;) s = i[a], o = e[s], c = s === "_listeners" ? n : n ? n.concat(s) : [s], d = r || typeof s == "symbol", l && t.push(d ? c : c.join(this.delimiter)), typeof o == "object" && ie.call(this, o, t, c, d);
			return t;
		}
		function ae(e) {
			for (var t = u(e), n = t.length, r, i, a; n-- > 0;) i = t[n], r = e[i], r && (a = !0, i !== "_listeners" && !ae(r) && delete e[i]);
			return a;
		}
		function oe(e, t, n) {
			this.emitter = e, this.event = t, this.listener = n;
		}
		oe.prototype.off = function() {
			return this.emitter.off(this.event, this.listener), this;
		};
		function se(e, t, r) {
			if (r === !0) a = !0;
			else if (r === !1) i = !0;
			else {
				if (!r || typeof r != "object") throw TypeError("options should be an object or true");
				var i = r.async, a = r.promisify, s = r.nextTick, c = r.objectify;
			}
			if (i || s || a) {
				var u = t, d = t._origin || t;
				if (s && !o) throw Error("process.nextTick is not supported");
				a === n && (a = t.constructor.name === "AsyncFunction"), t = function() {
					var e = arguments, t = this, n = this.event;
					return a ? s ? Promise.resolve() : new Promise(function(e) {
						l(e);
					}).then(function() {
						return t.event = n, u.apply(t, e);
					}) : (s ? process.nextTick : l)(function() {
						t.event = n, u.apply(t, e);
					});
				}, t._async = !0, t._origin = d;
			}
			return [t, c ? new oe(this, e, t) : this];
		}
		function S(e) {
			this._events = {}, this._newListener = !1, this._removeListener = !1, this.verboseMemoryLeak = !1, f.call(this, e);
		}
		S.EventEmitter2 = S, S.prototype.listenTo = function(e, t, r) {
			if (typeof e != "object") throw TypeError("target musts be an object");
			var a = this;
			r = _(r, {
				on: n,
				off: n,
				reducers: n
			}, {
				on: ee,
				off: ee,
				reducers: te
			});
			function o(t) {
				if (typeof t != "object") throw TypeError("events must be an object");
				for (var n = r.reducers, i = ne.call(a, e), o = i === -1 ? new g(a, e, r) : a._observers[i], s = u(t), c = s.length, l, d = typeof n == "function", f = 0; f < c; f++) l = s[f], o.subscribe(l, t[l] || l, d ? n : n && n[l]);
			}
			return i(t) ? o(h(t)) : o(typeof t == "string" ? h(t.split(/\s+/)) : t), this;
		}, S.prototype.stopListeningTo = function(e, t) {
			var n = this._observers;
			if (!n) return !1;
			var r = n.length, i, a = !1;
			if (e && typeof e != "object") throw TypeError("target should be an object");
			for (; r-- > 0;) i = n[r], (!e || i._target === e) && (i.unsubscribe(t), a = !0);
			return a;
		}, S.prototype.delimiter = ".", S.prototype.setMaxListeners = function(e) {
			e !== n && (this._maxListeners = e, this._conf ||= {}, this._conf.maxListeners = e);
		}, S.prototype.getMaxListeners = function() {
			return this._maxListeners;
		}, S.prototype.event = "", S.prototype.once = function(e, t, n) {
			return this._once(e, t, !1, n);
		}, S.prototype.prependOnceListener = function(e, t, n) {
			return this._once(e, t, !0, n);
		}, S.prototype._once = function(e, t, n, r) {
			return this._many(e, 1, t, n, r);
		}, S.prototype.many = function(e, t, n, r) {
			return this._many(e, t, n, !1, r);
		}, S.prototype.prependMany = function(e, t, n, r) {
			return this._many(e, t, n, !0, r);
		}, S.prototype._many = function(e, t, n, r, i) {
			var a = this;
			if (typeof n != "function") throw Error("many only accepts instances of Function");
			function o() {
				return --t === 0 && a.off(e, o), n.apply(this, arguments);
			}
			return o._origin = n, this._on(e, o, r, i);
		}, S.prototype.emit = function() {
			if (!this._events && !this._all) return !1;
			this._events || d.call(this);
			var e = arguments[0], t, n = this.wildcard, r, i, a, o, c;
			if (e === "newListener" && !this._newListener && !this._events.newListener) return !1;
			if (n && (t = e, e !== "newListener" && e !== "removeListener" && typeof e == "object")) {
				if (i = e.length, s) {
					for (a = 0; a < i; a++) if (typeof e[a] == "symbol") {
						c = !0;
						break;
					}
				}
				c || (e = e.join(this.delimiter));
			}
			var l = arguments.length, u;
			if (this._all && this._all.length) for (u = this._all.slice(), a = 0, i = u.length; a < i; a++) switch (this.event = e, l) {
				case 1:
					u[a].call(this, e);
					break;
				case 2:
					u[a].call(this, e, arguments[1]);
					break;
				case 3:
					u[a].call(this, e, arguments[1], arguments[2]);
					break;
				default: u[a].apply(this, arguments);
			}
			if (n) u = [], x.call(this, u, t, this.listenerTree, 0, i);
			else if (u = this._events[e], typeof u == "function") {
				switch (this.event = e, l) {
					case 1:
						u.call(this);
						break;
					case 2:
						u.call(this, arguments[1]);
						break;
					case 3:
						u.call(this, arguments[1], arguments[2]);
						break;
					default:
						for (r = Array(l - 1), o = 1; o < l; o++) r[o - 1] = arguments[o];
						u.apply(this, r);
				}
				return !0;
			} else u &&= u.slice();
			if (u && u.length) {
				if (l > 3) for (r = Array(l - 1), o = 1; o < l; o++) r[o - 1] = arguments[o];
				for (a = 0, i = u.length; a < i; a++) switch (this.event = e, l) {
					case 1:
						u[a].call(this);
						break;
					case 2:
						u[a].call(this, arguments[1]);
						break;
					case 3:
						u[a].call(this, arguments[1], arguments[2]);
						break;
					default: u[a].apply(this, r);
				}
				return !0;
			} else if (!this.ignoreErrors && !this._all && e === "error") throw arguments[1] instanceof Error ? arguments[1] : Error("Uncaught, unspecified 'error' event.");
			return !!this._all;
		}, S.prototype.emitAsync = function() {
			if (!this._events && !this._all) return !1;
			this._events || d.call(this);
			var e = arguments[0], t = this.wildcard, n, r, i, a, o, c;
			if (e === "newListener" && !this._newListener && !this._events.newListener) return Promise.resolve([!1]);
			if (t && (n = e, e !== "newListener" && e !== "removeListener" && typeof e == "object")) {
				if (a = e.length, s) {
					for (o = 0; o < a; o++) if (typeof e[o] == "symbol") {
						r = !0;
						break;
					}
				}
				r || (e = e.join(this.delimiter));
			}
			var l = [], u = arguments.length, f;
			if (this._all) for (o = 0, a = this._all.length; o < a; o++) switch (this.event = e, u) {
				case 1:
					l.push(this._all[o].call(this, e));
					break;
				case 2:
					l.push(this._all[o].call(this, e, arguments[1]));
					break;
				case 3:
					l.push(this._all[o].call(this, e, arguments[1], arguments[2]));
					break;
				default: l.push(this._all[o].apply(this, arguments));
			}
			if (t ? (f = [], x.call(this, f, n, this.listenerTree, 0)) : f = this._events[e], typeof f == "function") switch (this.event = e, u) {
				case 1:
					l.push(f.call(this));
					break;
				case 2:
					l.push(f.call(this, arguments[1]));
					break;
				case 3:
					l.push(f.call(this, arguments[1], arguments[2]));
					break;
				default:
					for (i = Array(u - 1), c = 1; c < u; c++) i[c - 1] = arguments[c];
					l.push(f.apply(this, i));
			}
			else if (f && f.length) {
				if (f = f.slice(), u > 3) for (i = Array(u - 1), c = 1; c < u; c++) i[c - 1] = arguments[c];
				for (o = 0, a = f.length; o < a; o++) switch (this.event = e, u) {
					case 1:
						l.push(f[o].call(this));
						break;
					case 2:
						l.push(f[o].call(this, arguments[1]));
						break;
					case 3:
						l.push(f[o].call(this, arguments[1], arguments[2]));
						break;
					default: l.push(f[o].apply(this, i));
				}
			} else if (!this.ignoreErrors && !this._all && e === "error") return arguments[1] instanceof Error ? Promise.reject(arguments[1]) : Promise.reject("Uncaught, unspecified 'error' event.");
			return Promise.all(l);
		}, S.prototype.on = function(e, t, n) {
			return this._on(e, t, !1, n);
		}, S.prototype.prependListener = function(e, t, n) {
			return this._on(e, t, !0, n);
		}, S.prototype.onAny = function(e) {
			return this._onAny(e, !1);
		}, S.prototype.prependAny = function(e) {
			return this._onAny(e, !0);
		}, S.prototype.addListener = S.prototype.on, S.prototype._onAny = function(e, t) {
			if (typeof e != "function") throw Error("onAny only accepts instances of Function");
			return this._all ||= [], t ? this._all.unshift(e) : this._all.push(e), this;
		}, S.prototype._on = function(e, t, r, i) {
			if (typeof e == "function") return this._onAny(e, t), this;
			if (typeof t != "function") throw Error("on only accepts instances of Function");
			this._events || d.call(this);
			var a = this, o;
			return i !== n && (o = se.call(this, e, t, i), t = o[0], a = o[1]), this._newListener && this.emit("newListener", e, t), this.wildcard ? (re.call(this, e, t, r), a) : (this._events[e] ? (typeof this._events[e] == "function" && (this._events[e] = [this._events[e]]), r ? this._events[e].unshift(t) : this._events[e].push(t), !this._events[e].warned && this._maxListeners > 0 && this._events[e].length > this._maxListeners && (this._events[e].warned = !0, p.call(this, this._events[e].length, e))) : this._events[e] = t, a);
		}, S.prototype.off = function(e, t) {
			if (typeof t != "function") throw Error("removeListener only takes instances of Function");
			var n, r = [];
			if (this.wildcard) {
				var a = typeof e == "string" ? e.split(this.delimiter) : e.slice();
				if (r = x.call(this, null, a, this.listenerTree, 0), !r) return this;
			} else {
				if (!this._events[e]) return this;
				n = this._events[e], r.push({ _listeners: n });
			}
			for (var o = 0; o < r.length; o++) {
				var s = r[o];
				if (n = s._listeners, i(n)) {
					for (var c = -1, l = 0, u = n.length; l < u; l++) if (n[l] === t || n[l].listener && n[l].listener === t || n[l]._origin && n[l]._origin === t) {
						c = l;
						break;
					}
					if (c < 0) continue;
					return this.wildcard ? s._listeners.splice(c, 1) : this._events[e].splice(c, 1), n.length === 0 && (this.wildcard ? delete s._listeners : delete this._events[e]), this._removeListener && this.emit("removeListener", e, t), this;
				} else (n === t || n.listener && n.listener === t || n._origin && n._origin === t) && (this.wildcard ? delete s._listeners : delete this._events[e], this._removeListener && this.emit("removeListener", e, t));
			}
			return this.listenerTree && ae(this.listenerTree), this;
		}, S.prototype.offAny = function(e) {
			var t = 0, n = 0, r;
			if (e && this._all && this._all.length > 0) {
				for (r = this._all, t = 0, n = r.length; t < n; t++) if (e === r[t]) return r.splice(t, 1), this._removeListener && this.emit("removeListenerAny", e), this;
			} else {
				if (r = this._all, this._removeListener) for (t = 0, n = r.length; t < n; t++) this.emit("removeListenerAny", r[t]);
				this._all = [];
			}
			return this;
		}, S.prototype.removeListener = S.prototype.off, S.prototype.removeAllListeners = function(e) {
			if (e === n) return !this._events || d.call(this), this;
			if (this.wildcard) {
				var t = x.call(this, null, e, this.listenerTree, 0), r, i;
				if (!t) return this;
				for (i = 0; i < t.length; i++) r = t[i], r._listeners = null;
				this.listenerTree && ae(this.listenerTree);
			} else this._events && (this._events[e] = null);
			return this;
		}, S.prototype.listeners = function(e) {
			var t = this._events, r, i, a, o, s;
			if (e === n) {
				if (this.wildcard) throw Error("event name required for wildcard emitter");
				if (!t) return [];
				for (r = u(t), o = r.length, a = []; o-- > 0;) i = t[r[o]], typeof i == "function" ? a.push(i) : a.push.apply(a, i);
				return a;
			} else {
				if (this.wildcard) {
					if (s = this.listenerTree, !s) return [];
					var c = [], l = typeof e == "string" ? e.split(this.delimiter) : e.slice();
					return x.call(this, c, l, s, 0), c;
				}
				return !t || (i = t[e], !i) ? [] : typeof i == "function" ? [i] : i;
			}
		}, S.prototype.eventNames = function(e) {
			var t = this._events;
			return this.wildcard ? ie.call(this, this.listenerTree, [], null, e) : t ? u(t) : [];
		}, S.prototype.listenerCount = function(e) {
			return this.listeners(e).length;
		}, S.prototype.hasListeners = function(e) {
			if (this.wildcard) {
				var t = [], r = typeof e == "string" ? e.split(this.delimiter) : e.slice();
				return x.call(this, t, r, this.listenerTree, 0), t.length > 0;
			}
			var i = this._events, a = this._all;
			return !!(a && a.length || i && (e === n ? u(i).length : i[e]));
		}, S.prototype.listenersAny = function() {
			return this._all ? this._all : [];
		}, S.prototype.waitFor = function(e, t) {
			var r = this, i = typeof t;
			return i === "number" ? t = { timeout: t } : i === "function" && (t = { filter: t }), t = _(t, {
				timeout: 0,
				filter: n,
				handleError: !1,
				Promise,
				overload: !1
			}, {
				filter: ee,
				Promise: v
			}), b(t.Promise, function(n, i, a) {
				function o() {
					var a = t.filter;
					if (!(a && !a.apply(r, arguments))) if (r.off(e, o), t.handleError) {
						var s = arguments[0];
						s ? i(s) : n(m.apply(null, arguments).slice(1));
					} else n(m.apply(null, arguments));
				}
				a(function() {
					r.off(e, o);
				}), r._on(e, o, !1);
			}, {
				timeout: t.timeout,
				overload: t.overload
			});
		};
		function ce(e, t, n) {
			n = _(n, {
				Promise,
				timeout: 0,
				overload: !1
			}, { Promise: v });
			var r = n.Promise;
			return b(r, function(n, r, i) {
				var a;
				if (typeof e.addEventListener == "function") {
					a = function() {
						n(m.apply(null, arguments));
					}, i(function() {
						e.removeEventListener(t, a);
					}), e.addEventListener(t, a, { once: !0 });
					return;
				}
				var o = function() {
					s && e.removeListener("error", s), n(m.apply(null, arguments));
				}, s;
				t !== "error" && (s = function(n) {
					e.removeListener(t, o), r(n);
				}, e.once("error", s)), i(function() {
					s && e.removeListener("error", s), e.removeListener(t, o);
				}), e.once(t, o);
			}, {
				timeout: n.timeout,
				overload: n.overload
			});
		}
		var le = S.prototype;
		if (Object.defineProperties(S, {
			defaultMaxListeners: {
				get: function() {
					return le._maxListeners;
				},
				set: function(e) {
					if (typeof e != "number" || e < 0 || Number.isNaN(e)) throw TypeError("n must be a non-negative number");
					le._maxListeners = e;
				},
				enumerable: !0
			},
			once: {
				value: ce,
				writable: !0,
				configurable: !0
			}
		}), Object.defineProperties(le, {
			_maxListeners: {
				value: a,
				writable: !0,
				configurable: !0
			},
			_observers: {
				value: null,
				writable: !0,
				configurable: !0
			}
		}), typeof define == "function" && define.amd) define(function() {
			return S;
		});
		else if (typeof e == "object") t.exports = S;
		else {
			var ue = Function("", "return this")();
			ue.EventEmitter2 = S;
		}
	})();
})))());
function pr(e) {
	var t = [...arguments].slice(1);
	if (process.env.NODE_ENV !== "production") {
		var n = ni[e], r = n ? typeof n == "function" ? n.apply(null, t) : n : "unknown error nr: " + e;
		throw Error("[Immer] " + r);
	}
	throw Error("[Immer] minified error nr: " + e + (t.length ? " " + t.map((function(e) {
		return "'" + e + "'";
	})).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function mr(e) {
	return !!e && !!e[ti];
}
function hr(e) {
	return !!e && (function(e) {
		if (!e || typeof e != "object") return !1;
		var t = Object.getPrototypeOf(e);
		if (t === null) return !0;
		var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
		return n === Object || typeof n == "function" && Function.toString.call(n) === ri;
	}(e) || Array.isArray(e) || !!e[ei] || !!e.constructor?.[ei] || Sr(e) || Cr(e));
}
function gr(e, t, n) {
	n === void 0 && (n = !1), _r(e) === 0 ? (n ? Object.keys : ii)(e).forEach((function(r) {
		n && typeof r == "symbol" || t(r, e[r], e);
	})) : e.forEach((function(n, r) {
		return t(r, n, e);
	}));
}
function _r(e) {
	var t = e[ti];
	return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : Sr(e) ? 2 : Cr(e) ? 3 : 0;
}
function vr(e, t) {
	return _r(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function yr(e, t) {
	return _r(e) === 2 ? e.get(t) : e[t];
}
function br(e, t, n) {
	var r = _r(e);
	r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
}
function xr(e, t) {
	return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function Sr(e) {
	return Xr && e instanceof Map;
}
function Cr(e) {
	return Zr && e instanceof Set;
}
function wr(e) {
	return e.o || e.t;
}
function Tr(e) {
	if (Array.isArray(e)) return Array.prototype.slice.call(e);
	var t = ai(e);
	delete t[ti];
	for (var n = ii(t), r = 0; r < n.length; r++) {
		var i = n[r], a = t[i];
		!1 === a.writable && (a.writable = !0, a.configurable = !0), (a.get || a.set) && (t[i] = {
			configurable: !0,
			writable: !0,
			enumerable: a.enumerable,
			value: e[i]
		});
	}
	return Object.create(Object.getPrototypeOf(e), t);
}
function Er(e, t) {
	return t === void 0 && (t = !1), Or(e) || mr(e) || !hr(e) || (_r(e) > 1 && (e.set = e.add = e.clear = e.delete = Dr), Object.freeze(e), t && gr(e, (function(e, t) {
		return Er(t, !0);
	}), !0)), e;
}
function Dr() {
	pr(2);
}
function Or(e) {
	return typeof e != "object" || !e || Object.isFrozen(e);
}
function kr(e) {
	var t = oi[e];
	return t || pr(18, e), t;
}
function Ar() {
	return process.env.NODE_ENV === "production" || Jr || pr(0), Jr;
}
function jr(e, t) {
	t && (kr("Patches"), e.u = [], e.s = [], e.v = t);
}
function Mr(e) {
	Nr(e), e.p.forEach(Fr), e.p = null;
}
function Nr(e) {
	e === Jr && (Jr = e.l);
}
function Pr(e) {
	return Jr = {
		p: [],
		l: Jr,
		h: e,
		m: !0,
		_: 0
	};
}
function Fr(e) {
	var t = e[ti];
	t.i === 0 || t.i === 1 ? t.j() : t.g = !0;
}
function Ir(e, t) {
	t._ = t.p.length;
	var n = t.p[0], r = e !== void 0 && e !== n;
	return t.h.O || kr("ES5").S(t, e, r), r ? (n[ti].P && (Mr(t), pr(4)), hr(e) && (e = Lr(t, e), t.l || zr(t, e)), t.u && kr("Patches").M(n[ti].t, e, t.u, t.s)) : e = Lr(t, n, []), Mr(t), t.u && t.v(t.u, t.s), e === $r ? void 0 : e;
}
function Lr(e, t, n) {
	if (Or(t)) return t;
	var r = t[ti];
	if (!r) return gr(t, (function(i, a) {
		return Rr(e, r, t, i, a, n);
	}), !0), t;
	if (r.A !== e) return t;
	if (!r.P) return zr(e, r.t, !0), r.t;
	if (!r.I) {
		r.I = !0, r.A._--;
		var i = r.i === 4 || r.i === 5 ? r.o = Tr(r.k) : r.o, a = i, o = !1;
		r.i === 3 && (a = new Set(i), i.clear(), o = !0), gr(a, (function(t, a) {
			return Rr(e, r, i, t, a, n, o);
		})), zr(e, i, !1), n && e.u && kr("Patches").N(r, n, e.u, e.s);
	}
	return r.o;
}
function Rr(e, t, n, r, i, a, o) {
	if (process.env.NODE_ENV !== "production" && i === n && pr(5), mr(i)) {
		var s = Lr(e, i, a && t && t.i !== 3 && !vr(t.R, r) ? a.concat(r) : void 0);
		if (br(n, r, s), !mr(s)) return;
		e.m = !1;
	} else o && n.add(i);
	if (hr(i) && !Or(i)) {
		if (!e.h.D && e._ < 1) return;
		Lr(e, i), t && t.A.l || zr(e, i);
	}
}
function zr(e, t, n) {
	n === void 0 && (n = !1), !e.l && e.h.D && e.m && Er(t, n);
}
function Br(e, t) {
	var n = e[ti];
	return (n ? wr(n) : e)[t];
}
function Vr(e, t) {
	if (t in e) for (var n = Object.getPrototypeOf(e); n;) {
		var r = Object.getOwnPropertyDescriptor(n, t);
		if (r) return r;
		n = Object.getPrototypeOf(n);
	}
}
function Hr(e) {
	e.P || (e.P = !0, e.l && Hr(e.l));
}
function Ur(e) {
	e.o ||= Tr(e.t);
}
function Wr(e, t, n) {
	var r = Sr(t) ? kr("MapSet").F(t, n) : Cr(t) ? kr("MapSet").T(t, n) : e.O ? function(e, t) {
		var n = Array.isArray(e), r = {
			i: +!!n,
			A: t ? t.A : Ar(),
			P: !1,
			I: !1,
			R: {},
			l: t,
			t: e,
			k: null,
			o: null,
			j: null,
			C: !1
		}, i = r, a = si;
		n && (i = [r], a = ci);
		var o = Proxy.revocable(i, a), s = o.revoke, c = o.proxy;
		return r.k = c, r.j = s, c;
	}(t, n) : kr("ES5").J(t, n);
	return (n ? n.A : Ar()).p.push(r), r;
}
function Gr(e) {
	return mr(e) || pr(22, e), function e(t) {
		if (!hr(t)) return t;
		var n, r = t[ti], i = _r(t);
		if (r) {
			if (!r.P && (r.i < 4 || !kr("ES5").K(r))) return r.t;
			r.I = !0, n = Kr(t, i), r.I = !1;
		} else n = Kr(t, i);
		return gr(n, (function(t, i) {
			r && yr(r.t, t) === i || br(n, t, e(i));
		})), i === 3 ? new Set(n) : n;
	}(e);
}
function Kr(e, t) {
	switch (t) {
		case 2: return new Map(e);
		case 3: return Array.from(e);
	}
	return Tr(e);
}
var qr, Jr, Yr = typeof Symbol < "u" && typeof Symbol("x") == "symbol", Xr = typeof Map < "u", Zr = typeof Set < "u", Qr = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u", $r = Yr ? Symbol.for("immer-nothing") : ((qr = {})["immer-nothing"] = !0, qr), ei = Yr ? Symbol.for("immer-draftable") : "__$immer_draftable", ti = Yr ? Symbol.for("immer-state") : "__$immer_state", ni = {
	0: "Illegal state",
	1: "Immer drafts cannot have computed properties",
	2: "This object has been frozen and should not be mutated",
	3: function(e) {
		return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
	},
	4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
	5: "Immer forbids circular references",
	6: "The first or second argument to `produce` must be a function",
	7: "The third argument to `produce` must be a function or undefined",
	8: "First argument to `createDraft` must be a plain object, an array, or an immerable object",
	9: "First argument to `finishDraft` must be a draft returned by `createDraft`",
	10: "The given draft is already finalized",
	11: "Object.defineProperty() cannot be used on an Immer draft",
	12: "Object.setPrototypeOf() cannot be used on an Immer draft",
	13: "Immer only supports deleting array indices",
	14: "Immer only supports setting array indices and the 'length' property",
	15: function(e) {
		return "Cannot apply patch, path doesn't resolve: " + e;
	},
	16: "Sets cannot have \"replace\" patches.",
	17: function(e) {
		return "Unsupported patch operation: " + e;
	},
	18: function(e) {
		return "The plugin for '" + e + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + e + "()` when initializing your application.";
	},
	20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",
	21: function(e) {
		return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + e + "'";
	},
	22: function(e) {
		return "'current' expects a draft, got: " + e;
	},
	23: function(e) {
		return "'original' expects a draft, got: " + e;
	},
	24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
}, ri = "" + Object.prototype.constructor, ii = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols === void 0 ? Object.getOwnPropertyNames : function(e) {
	return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
}, ai = Object.getOwnPropertyDescriptors || function(e) {
	var t = {};
	return ii(e).forEach((function(n) {
		t[n] = Object.getOwnPropertyDescriptor(e, n);
	})), t;
}, oi = {}, si = {
	get: function(e, t) {
		if (t === ti) return e;
		var n = wr(e);
		if (!vr(n, t)) return function(e, t, n) {
			var r = Vr(t, n);
			return r ? "value" in r ? r.value : r.get?.call(e.k) : void 0;
		}(e, n, t);
		var r = n[t];
		return e.I || !hr(r) ? r : r === Br(e.t, t) ? (Ur(e), e.o[t] = Wr(e.A.h, r, e)) : r;
	},
	has: function(e, t) {
		return t in wr(e);
	},
	ownKeys: function(e) {
		return Reflect.ownKeys(wr(e));
	},
	set: function(e, t, n) {
		var r = Vr(wr(e), t);
		if (r?.set) return r.set.call(e.k, n), !0;
		if (!e.P) {
			var i = Br(wr(e), t), a = i?.[ti];
			if (a && a.t === n) return e.o[t] = n, e.R[t] = !1, !0;
			if (xr(n, i) && (n !== void 0 || vr(e.t, t))) return !0;
			Ur(e), Hr(e);
		}
		return e.o[t] === n && (n !== void 0 || t in e.o) || Number.isNaN(n) && Number.isNaN(e.o[t]) || (e.o[t] = n, e.R[t] = !0), !0;
	},
	deleteProperty: function(e, t) {
		return Br(e.t, t) !== void 0 || t in e.t ? (e.R[t] = !1, Ur(e), Hr(e)) : delete e.R[t], e.o && delete e.o[t], !0;
	},
	getOwnPropertyDescriptor: function(e, t) {
		var n = wr(e), r = Reflect.getOwnPropertyDescriptor(n, t);
		return r && {
			writable: !0,
			configurable: e.i !== 1 || t !== "length",
			enumerable: r.enumerable,
			value: n[t]
		};
	},
	defineProperty: function() {
		pr(11);
	},
	getPrototypeOf: function(e) {
		return Object.getPrototypeOf(e.t);
	},
	setPrototypeOf: function() {
		pr(12);
	}
}, ci = {};
gr(si, (function(e, t) {
	ci[e] = function() {
		return arguments[0] = arguments[0][0], t.apply(this, arguments);
	};
})), ci.deleteProperty = function(e, t) {
	return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && pr(13), ci.set.call(this, e, t, void 0);
}, ci.set = function(e, t, n) {
	return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && pr(14), si.set.call(this, e[0], t, n, e[0]);
};
var li = new (function() {
	function e(e) {
		var t = this;
		this.O = Qr, this.D = !0, this.produce = function(e, n, r) {
			if (typeof e == "function" && typeof n != "function") {
				var i = n;
				n = e;
				var a = t;
				return function(e) {
					var t = this;
					e === void 0 && (e = i);
					var r = [...arguments].slice(1);
					return a.produce(e, (function(e) {
						var i;
						return (i = n).call.apply(i, [t, e].concat(r));
					}));
				};
			}
			var o;
			if (typeof n != "function" && pr(6), r !== void 0 && typeof r != "function" && pr(7), hr(e)) {
				var s = Pr(t), c = Wr(t, e, void 0), l = !0;
				try {
					o = n(c), l = !1;
				} finally {
					l ? Mr(s) : Nr(s);
				}
				return typeof Promise < "u" && o instanceof Promise ? o.then((function(e) {
					return jr(s, r), Ir(e, s);
				}), (function(e) {
					throw Mr(s), e;
				})) : (jr(s, r), Ir(o, s));
			}
			if (!e || typeof e != "object") {
				if ((o = n(e)) === void 0 && (o = e), o === $r && (o = void 0), t.D && Er(o, !0), r) {
					var u = [], d = [];
					kr("Patches").M(e, o, u, d), r(u, d);
				}
				return o;
			}
			pr(21, e);
		}, this.produceWithPatches = function(e, n) {
			if (typeof e == "function") return function(n) {
				var r = [...arguments].slice(1);
				return t.produceWithPatches(n, (function(t) {
					return e.apply(void 0, [t].concat(r));
				}));
			};
			var r, i, a = t.produce(e, n, (function(e, t) {
				r = e, i = t;
			}));
			return typeof Promise < "u" && a instanceof Promise ? a.then((function(e) {
				return [
					e,
					r,
					i
				];
			})) : [
				a,
				r,
				i
			];
		}, typeof e?.useProxies == "boolean" && this.setUseProxies(e.useProxies), typeof e?.autoFreeze == "boolean" && this.setAutoFreeze(e.autoFreeze);
	}
	var t = e.prototype;
	return t.createDraft = function(e) {
		hr(e) || pr(8), mr(e) && (e = Gr(e));
		var t = Pr(this), n = Wr(this, e, void 0);
		return n[ti].C = !0, Nr(t), n;
	}, t.finishDraft = function(e, t) {
		var n = e && e[ti];
		process.env.NODE_ENV !== "production" && (n && n.C || pr(9), n.I && pr(10));
		var r = n.A;
		return jr(r, t), Ir(void 0, r);
	}, t.setAutoFreeze = function(e) {
		this.D = e;
	}, t.setUseProxies = function(e) {
		e && !Qr && pr(20), this.O = e;
	}, t.applyPatches = function(e, t) {
		var n;
		for (n = t.length - 1; n >= 0; n--) {
			var r = t[n];
			if (r.path.length === 0 && r.op === "replace") {
				e = r.value;
				break;
			}
		}
		n > -1 && (t = t.slice(n + 1));
		var i = kr("Patches").$;
		return mr(e) ? i(e, t) : this.produce(e, (function(e) {
			return i(e, t);
		}));
	}, e;
}())(), ui = li.produce;
li.produceWithPatches.bind(li), li.setAutoFreeze.bind(li), li.setUseProxies.bind(li), li.applyPatches.bind(li), li.createDraft.bind(li), li.finishDraft.bind(li);
//#endregion
//#region node_modules/@100mslive/hms-video-store/node_modules/zustand/esm/shallow.js
function di(e, t) {
	if (Object.is(e, t)) return !0;
	if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
	let n = Object.keys(e);
	if (n.length !== Object.keys(t).length) return !1;
	for (let r = 0; r < n.length; r++) if (!Object.prototype.hasOwnProperty.call(t, n[r]) || !Object.is(e[n[r]], t[n[r]])) return !1;
	return !0;
}
//#endregion
//#region node_modules/@100mslive/hms-video-store/node_modules/zustand/esm/vanilla.js
function fi(e) {
	let t, n = /* @__PURE__ */ new Set(), r = (e, r) => {
		let i = typeof e == "function" ? e(t) : e;
		if (i !== t) {
			let e = t;
			t = r ? i : Object.assign({}, t, i), n.forEach((n) => n(t, e));
		}
	}, i = () => t, a = (e, r = i, a = Object.is) => {
		let o = r(t);
		function s() {
			let n = r(t);
			if (!a(o, n)) {
				let t = o;
				e(o = n, t);
			}
		}
		return n.add(s), () => n.delete(s);
	}, o = {
		setState: r,
		getState: i,
		subscribe: (e, t, r) => t || r ? a(e, t, r) : (n.add(e), () => n.delete(e)),
		destroy: () => n.clear()
	};
	return t = e(r, i, o), o;
}
//#endregion
//#region node_modules/sdp-transform/lib/grammar.js
var pi = /* @__PURE__ */ ne(((e, t) => {
	var n = t.exports = {
		v: [{
			name: "version",
			reg: /^(\d*)$/
		}],
		o: [{
			name: "origin",
			reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,
			names: [
				"username",
				"sessionId",
				"sessionVersion",
				"netType",
				"ipVer",
				"address"
			],
			format: "%s %s %d %s IP%d %s"
		}],
		s: [{ name: "name" }],
		i: [{ name: "description" }],
		u: [{ name: "uri" }],
		e: [{ name: "email" }],
		p: [{ name: "phone" }],
		z: [{ name: "timezones" }],
		r: [{ name: "repeats" }],
		t: [{
			name: "timing",
			reg: /^(\d*) (\d*)/,
			names: ["start", "stop"],
			format: "%d %d"
		}],
		c: [{
			name: "connection",
			reg: /^IN IP(\d) (\S*)/,
			names: ["version", "ip"],
			format: "IN IP%d %s"
		}],
		b: [{
			push: "bandwidth",
			reg: /^(TIAS|AS|CT|RR|RS):(\d*)/,
			names: ["type", "limit"],
			format: "%s:%s"
		}],
		m: [{
			reg: /^(\w*) (\d*) ([\w/]*)(?: (.*))?/,
			names: [
				"type",
				"port",
				"protocol",
				"payloads"
			],
			format: "%s %d %s %s"
		}],
		a: [
			{
				push: "rtp",
				reg: /^rtpmap:(\d*) ([\w\-.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,
				names: [
					"payload",
					"codec",
					"rate",
					"encoding"
				],
				format: function(e) {
					return e.encoding ? "rtpmap:%d %s/%s/%s" : e.rate ? "rtpmap:%d %s/%s" : "rtpmap:%d %s";
				}
			},
			{
				push: "fmtp",
				reg: /^fmtp:(\d*) ([\S| ]*)/,
				names: ["payload", "config"],
				format: "fmtp:%d %s"
			},
			{
				name: "control",
				reg: /^control:(.*)/,
				format: "control:%s"
			},
			{
				name: "rtcp",
				reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,
				names: [
					"port",
					"netType",
					"ipVer",
					"address"
				],
				format: function(e) {
					return e.address == null ? "rtcp:%d" : "rtcp:%d %s IP%d %s";
				}
			},
			{
				push: "rtcpFbTrrInt",
				reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/,
				names: ["payload", "value"],
				format: "rtcp-fb:%s trr-int %d"
			},
			{
				push: "rtcpFb",
				reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,
				names: [
					"payload",
					"type",
					"subtype"
				],
				format: function(e) {
					return e.subtype == null ? "rtcp-fb:%s %s" : "rtcp-fb:%s %s %s";
				}
			},
			{
				push: "ext",
				reg: /^extmap:(\d+)(?:\/(\w+))?(?: (urn:ietf:params:rtp-hdrext:encrypt))? (\S*)(?: (\S*))?/,
				names: [
					"value",
					"direction",
					"encrypt-uri",
					"uri",
					"config"
				],
				format: function(e) {
					return "extmap:%d" + (e.direction ? "/%s" : "%v") + (e["encrypt-uri"] ? " %s" : "%v") + " %s" + (e.config ? " %s" : "");
				}
			},
			{
				name: "extmapAllowMixed",
				reg: /^(extmap-allow-mixed)/
			},
			{
				push: "crypto",
				reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,
				names: [
					"id",
					"suite",
					"config",
					"sessionConfig"
				],
				format: function(e) {
					return e.sessionConfig == null ? "crypto:%d %s %s" : "crypto:%d %s %s %s";
				}
			},
			{
				name: "setup",
				reg: /^setup:(\w*)/,
				format: "setup:%s"
			},
			{
				name: "connectionType",
				reg: /^connection:(new|existing)/,
				format: "connection:%s"
			},
			{
				name: "mid",
				reg: /^mid:([^\s]*)/,
				format: "mid:%s"
			},
			{
				name: "msid",
				reg: /^msid:(.*)/,
				format: "msid:%s"
			},
			{
				name: "ptime",
				reg: /^ptime:(\d*(?:\.\d*)*)/,
				format: "ptime:%d"
			},
			{
				name: "maxptime",
				reg: /^maxptime:(\d*(?:\.\d*)*)/,
				format: "maxptime:%d"
			},
			{
				name: "direction",
				reg: /^(sendrecv|recvonly|sendonly|inactive)/
			},
			{
				name: "icelite",
				reg: /^(ice-lite)/
			},
			{
				name: "iceUfrag",
				reg: /^ice-ufrag:(\S*)/,
				format: "ice-ufrag:%s"
			},
			{
				name: "icePwd",
				reg: /^ice-pwd:(\S*)/,
				format: "ice-pwd:%s"
			},
			{
				name: "fingerprint",
				reg: /^fingerprint:(\S*) (\S*)/,
				names: ["type", "hash"],
				format: "fingerprint:%s %s"
			},
			{
				push: "candidates",
				reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/,
				names: [
					"foundation",
					"component",
					"transport",
					"priority",
					"ip",
					"port",
					"type",
					"raddr",
					"rport",
					"tcptype",
					"generation",
					"network-id",
					"network-cost"
				],
				format: function(e) {
					var t = "candidate:%s %d %s %d %s %d typ %s";
					return t += e.raddr == null ? "%v%v" : " raddr %s rport %d", t += e.tcptype == null ? "%v" : " tcptype %s", e.generation != null && (t += " generation %d"), t += e["network-id"] == null ? "%v" : " network-id %d", t += e["network-cost"] == null ? "%v" : " network-cost %d", t;
				}
			},
			{
				name: "endOfCandidates",
				reg: /^(end-of-candidates)/
			},
			{
				name: "remoteCandidates",
				reg: /^remote-candidates:(.*)/,
				format: "remote-candidates:%s"
			},
			{
				name: "iceOptions",
				reg: /^ice-options:(\S*)/,
				format: "ice-options:%s"
			},
			{
				push: "ssrcs",
				reg: /^ssrc:(\d*) ([\w_-]*)(?::(.*))?/,
				names: [
					"id",
					"attribute",
					"value"
				],
				format: function(e) {
					var t = "ssrc:%d";
					return e.attribute != null && (t += " %s", e.value != null && (t += ":%s")), t;
				}
			},
			{
				push: "ssrcGroups",
				reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/,
				names: ["semantics", "ssrcs"],
				format: "ssrc-group:%s %s"
			},
			{
				name: "msidSemantic",
				reg: /^msid-semantic:\s?(\w*) (\S*)/,
				names: ["semantic", "token"],
				format: "msid-semantic: %s %s"
			},
			{
				push: "groups",
				reg: /^group:(\w*) (.*)/,
				names: ["type", "mids"],
				format: "group:%s %s"
			},
			{
				name: "rtcpMux",
				reg: /^(rtcp-mux)/
			},
			{
				name: "rtcpRsize",
				reg: /^(rtcp-rsize)/
			},
			{
				name: "sctpmap",
				reg: /^sctpmap:([\w_/]*) (\S*)(?: (\S*))?/,
				names: [
					"sctpmapNumber",
					"app",
					"maxMessageSize"
				],
				format: function(e) {
					return e.maxMessageSize == null ? "sctpmap:%s %s" : "sctpmap:%s %s %s";
				}
			},
			{
				name: "xGoogleFlag",
				reg: /^x-google-flag:([^\s]*)/,
				format: "x-google-flag:%s"
			},
			{
				push: "rids",
				reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/,
				names: [
					"id",
					"direction",
					"params"
				],
				format: function(e) {
					return e.params ? "rid:%s %s %s" : "rid:%s %s";
				}
			},
			{
				push: "imageattrs",
				reg: /* @__PURE__ */ RegExp("^imageattr:(\\d+|\\*)[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?"),
				names: [
					"pt",
					"dir1",
					"attrs1",
					"dir2",
					"attrs2"
				],
				format: function(e) {
					return "imageattr:%s %s %s" + (e.dir2 ? " %s %s" : "");
				}
			},
			{
				name: "simulcast",
				reg: /* @__PURE__ */ RegExp("^simulcast:(send|recv) ([a-zA-Z0-9\\-_~;,]+)(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?$"),
				names: [
					"dir1",
					"list1",
					"dir2",
					"list2"
				],
				format: function(e) {
					return "simulcast:%s %s" + (e.dir2 ? " %s %s" : "");
				}
			},
			{
				name: "simulcast_03",
				reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/,
				names: ["value"],
				format: "simulcast: %s"
			},
			{
				name: "framerate",
				reg: /^framerate:(\d+(?:$|\.\d+))/,
				format: "framerate:%s"
			},
			{
				name: "sourceFilter",
				reg: /^source-filter: *(excl|incl) (\S*) (IP4|IP6|\*) (\S*) (.*)/,
				names: [
					"filterMode",
					"netType",
					"addressTypes",
					"destAddress",
					"srcList"
				],
				format: "source-filter: %s %s %s %s %s"
			},
			{
				name: "bundleOnly",
				reg: /^(bundle-only)/
			},
			{
				name: "label",
				reg: /^label:(.+)/,
				format: "label:%s"
			},
			{
				name: "sctpPort",
				reg: /^sctp-port:(\d+)$/,
				format: "sctp-port:%s"
			},
			{
				name: "maxMessageSize",
				reg: /^max-message-size:(\d+)$/,
				format: "max-message-size:%s"
			},
			{
				push: "tsRefClocks",
				reg: /^ts-refclk:([^\s=]*)(?:=(\S*))?/,
				names: ["clksrc", "clksrcExt"],
				format: function(e) {
					return "ts-refclk:%s" + (e.clksrcExt == null ? "" : "=%s");
				}
			},
			{
				name: "mediaClk",
				reg: /^mediaclk:(?:id=(\S*))? *([^\s=]*)(?:=(\S*))?(?: *rate=(\d+)\/(\d+))?/,
				names: [
					"id",
					"mediaClockName",
					"mediaClockValue",
					"rateNumerator",
					"rateDenominator"
				],
				format: function(e) {
					var t = "mediaclk:";
					return t += e.id == null ? "%v%s" : "id=%s %s", t += e.mediaClockValue == null ? "" : "=%s", t += e.rateNumerator == null ? "" : " rate=%s", t += e.rateDenominator == null ? "" : "/%s", t;
				}
			},
			{
				name: "keywords",
				reg: /^keywds:(.+)$/,
				format: "keywds:%s"
			},
			{
				name: "content",
				reg: /^content:(.+)/,
				format: "content:%s"
			},
			{
				name: "bfcpFloorCtrl",
				reg: /^floorctrl:(c-only|s-only|c-s)/,
				format: "floorctrl:%s"
			},
			{
				name: "bfcpConfId",
				reg: /^confid:(\d+)/,
				format: "confid:%s"
			},
			{
				name: "bfcpUserId",
				reg: /^userid:(\d+)/,
				format: "userid:%s"
			},
			{
				name: "bfcpFloorId",
				reg: /^floorid:(.+) (?:m-stream|mstrm):(.+)/,
				names: ["id", "mStream"],
				format: "floorid:%s mstrm:%s"
			},
			{
				push: "invalid",
				names: ["value"]
			}
		]
	};
	Object.keys(n).forEach(function(e) {
		n[e].forEach(function(e) {
			e.reg ||= /(.*)/, e.format ||= "%s";
		});
	});
})), mi = /* @__PURE__ */ ne(((e) => {
	var t = function(e) {
		return String(Number(e)) === e ? Number(e) : e;
	}, n = function(e, n, r, i) {
		if (i && !r) n[i] = t(e[1]);
		else for (var a = 0; a < r.length; a += 1) e[a + 1] != null && (n[r[a]] = t(e[a + 1]));
	}, r = function(e, t, r) {
		var i = e.name && e.names;
		e.push && !t[e.push] ? t[e.push] = [] : i && !t[e.name] && (t[e.name] = {});
		var a = e.push ? {} : i ? t[e.name] : t;
		n(r.match(e.reg), a, e.names, e.name), e.push && t[e.push].push(a);
	}, i = pi(), a = RegExp.prototype.test.bind(/^([a-z])=(.*)/);
	e.parse = function(e) {
		var t = {}, n = [], o = t;
		return e.split(/(\r\n|\r|\n)/).filter(a).forEach(function(e) {
			var t = e[0], a = e.slice(2);
			t === "m" && (n.push({
				rtp: [],
				fmtp: []
			}), o = n[n.length - 1]);
			for (var s = 0; s < (i[t] || []).length; s += 1) {
				var c = i[t][s];
				if (c.reg.test(a)) return r(c, o, a);
			}
		}), t.media = n, t;
	};
	var o = function(e, n) {
		var r = n.split(/=(.+)/, 2);
		return r.length === 2 ? e[r[0]] = t(r[1]) : r.length === 1 && n.length > 1 && (e[r[0]] = void 0), e;
	};
	e.parseParams = function(e) {
		return e.split(/;\s?/).reduce(o, {});
	}, e.parseFmtpConfig = e.parseParams, e.parsePayloads = function(e) {
		return e.toString().split(" ").map(Number);
	}, e.parseRemoteCandidates = function(e) {
		for (var n = [], r = e.split(" ").map(t), i = 0; i < r.length; i += 3) n.push({
			component: r[i],
			ip: r[i + 1],
			port: r[i + 2]
		});
		return n;
	}, e.parseImageAttributes = function(e) {
		return e.split(" ").map(function(e) {
			return e.substring(1, e.length - 1).split(",").reduce(o, {});
		});
	}, e.parseSimulcastStreamList = function(e) {
		return e.split(";").map(function(e) {
			return e.split(",").map(function(e) {
				var n, r = !1;
				return e[0] === "~" ? (n = t(e.substring(1, e.length)), r = !0) : n = t(e), {
					scid: n,
					paused: r
				};
			});
		});
	};
})), hi = /* @__PURE__ */ ne(((e, t) => {
	var n = pi(), r = /%[sdv%]/g, i = function(e) {
		var t = 1, n = arguments, i = n.length;
		return e.replace(r, function(e) {
			if (t >= i) return e;
			var r = n[t];
			switch (t += 1, e) {
				case "%%": return "%";
				case "%s": return String(r);
				case "%d": return Number(r);
				case "%v": return "";
			}
		});
	}, a = function(e, t, n) {
		var r = t.format instanceof Function ? t.format(t.push ? n : n[t.name]) : t.format, a = [e + "=" + r];
		if (t.names) for (var o = 0; o < t.names.length; o += 1) {
			var s = t.names[o];
			t.name ? a.push(n[t.name][s]) : a.push(n[t.names[o]]);
		}
		else a.push(n[t.name]);
		return i.apply(null, a);
	}, o = [
		"v",
		"o",
		"s",
		"i",
		"u",
		"e",
		"p",
		"c",
		"b",
		"t",
		"r",
		"z",
		"a"
	], s = [
		"i",
		"c",
		"b",
		"a"
	];
	t.exports = function(e, t) {
		t ||= {}, e.version ??= 0, e.name ??= " ", e.media.forEach(function(e) {
			e.payloads ??= "";
		});
		var r = t.outerOrder || o, i = t.innerOrder || s, c = [];
		return r.forEach(function(t) {
			n[t].forEach(function(n) {
				n.name in e && e[n.name] != null ? c.push(a(t, n, e)) : n.push in e && e[n.push] != null && e[n.push].forEach(function(e) {
					c.push(a(t, n, e));
				});
			});
		}), e.media.forEach(function(e) {
			c.push(a("m", n.m[0], e)), i.forEach(function(t) {
				n[t].forEach(function(n) {
					n.name in e && e[n.name] != null ? c.push(a(t, n, e)) : n.push in e && e[n.push] != null && e[n.push].forEach(function(e) {
						c.push(a(t, n, e));
					});
				});
			});
		}), c.join("\r\n") + "\r\n";
	};
})), gi = /* @__PURE__ */ ie((/* @__PURE__ */ ne(((e) => {
	var t = mi(), n = hi();
	pi(), e.write = n, e.parse = t.parse, e.parseParams = t.parseParams, e.parseFmtpConfig = t.parseFmtpConfig, e.parsePayloads = t.parsePayloads, e.parseRemoteCandidates = t.parseRemoteCandidates, e.parseImageAttributes = t.parseImageAttributes, e.parseSimulcastStreamList = t.parseSimulcastStreamList;
})))()), _i = Object.defineProperty, vi = Object.defineProperties, yi = Object.getOwnPropertyDescriptors, bi = Object.getOwnPropertySymbols, xi = Object.getPrototypeOf, Si = Object.prototype.hasOwnProperty, Ci = Object.prototype.propertyIsEnumerable, wi = Reflect.get, Ti = (e, t, n) => t in e ? _i(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, P = (e, t) => {
	for (var n in t ||= {}) Si.call(t, n) && Ti(e, n, t[n]);
	if (bi) for (var n of bi(t)) Ci.call(t, n) && Ti(e, n, t[n]);
	return e;
}, F = (e, t) => vi(e, yi(t)), Ei = (e, t) => {
	var n = {};
	for (var r in e) Si.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && bi) for (var r of bi(e)) t.indexOf(r) < 0 && Ci.call(e, r) && (n[r] = e[r]);
	return n;
}, Di = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), Oi = (e, t, n) => wi(xi(e), n, t), I = (e, t, n) => new Promise((r, i) => {
	var a = (e) => {
		try {
			s(n.next(e));
		} catch (e) {
			i(e);
		}
	}, o = (e) => {
		try {
			s(n.throw(e));
		} catch (e) {
			i(e);
		}
	}, s = (e) => e.done ? r(e.value) : Promise.resolve(e.value).then(a, o);
	s((n = n.apply(e, t)).next());
}), ki = Di((e, t) => {
	t.exports = {
		version: "0.13.4",
		license: "MIT",
		repository: {
			type: "git",
			url: "https://github.com/100mslive/web-sdks.git",
			directory: "packages/hms-video-store"
		},
		main: "dist/index.cjs.js",
		module: "dist/index.js",
		typings: "dist/index.d.ts",
		files: ["dist"],
		engines: { node: ">=12" },
		exports: { ".": {
			require: "./dist/index.cjs.js",
			import: "./dist/index.js",
			default: "./dist/index.js"
		} },
		sideEffects: !1,
		scripts: {
			prestart: "rm -rf dist && yarn types:build",
			start: "concurrently \"yarn dev\" \"yarn types\"",
			dev: "node ../../scripts/dev",
			"build:only": "node ../../scripts/build",
			build: "yarn build:only && yarn types:build",
			types: "tsc -w",
			"types:build": "tsc -p tsconfig.json",
			format: "prettier --write src/**/*.ts",
			test: "jest --maxWorkers=1",
			"test:watch": "jest --watch",
			"test:coverage": "jest --coverage",
			lint: "eslint -c ../../.eslintrc .",
			"lint:fix": "yarn lint --fix",
			prepare: "yarn build",
			size: "size-limit",
			analyze: "size-limit --why",
			docs: "rm -rf ./docs && typedoc && rm -f ./docs/README.md && mkdir ./docs/home &&mv ./docs/modules.md ./docs/home/content.md && node ../../scripts/docs-store && npx prettier --write './docs/**/*'"
		},
		name: "@100mslive/hms-video-store",
		author: "100ms",
		dependencies: {
			eventemitter2: "^6.4.9",
			immer: "^9.0.6",
			"lodash.isequal": "^4.5.0",
			reselect: "4.0.0",
			"sdp-transform": "^2.14.1",
			"ua-parser-js": "^2.0.6",
			uuid: "^8.3.2",
			"webrtc-adapter": "^8.0.0",
			zustand: "3.5.7"
		},
		devDependencies: {
			"@types/dom-screen-wake-lock": "^1.0.1",
			"@types/lodash.isequal": "^4.5.8",
			"@types/sdp-transform": "^2.4.4",
			"@types/ua-parser-js": "^0.7.39",
			"@types/uuid": "^8.3.0",
			"jest-canvas-mock": "^2.3.1",
			"jsdom-worker": "^0.3.0",
			tslib: "^2.2.0"
		},
		description: "@100mslive Core SDK which abstracts the complexities of webRTC while providing a reactive store for data management with a unidirectional data flow",
		keywords: [
			"video",
			"webrtc",
			"conferencing",
			"100ms"
		],
		gitHead: "30b036ca6a61126086816c4d9180332504e8cda4"
	};
}), Ai = ((e) => (e.Disconnected = "Disconnected", e.Preview = "Preview", e.Connecting = "Connecting", e.Connected = "Connected", e.Reconnecting = "Reconnecting", e.Disconnecting = "Disconnecting", e.Failed = "Failed", e))(Ai || {}), ji = () => ({
	room: {
		id: "",
		isConnected: !1,
		name: "",
		peers: [],
		localPeer: "",
		roomState: "Disconnected",
		recording: {
			browser: { running: !1 },
			server: { running: !1 },
			hls: { running: !1 }
		},
		rtmp: { running: !1 },
		hls: {
			running: !1,
			variants: []
		},
		sessionId: ""
	},
	peers: {},
	tracks: {},
	playlist: {
		audio: {
			list: {},
			selection: {
				id: "",
				hasPrevious: !1,
				hasNext: !1
			},
			progress: 0,
			volume: 0,
			currentTime: 0,
			playbackRate: 1
		},
		video: {
			list: {},
			selection: {
				id: "",
				hasPrevious: !1,
				hasNext: !1
			},
			progress: 0,
			volume: 0,
			currentTime: 0,
			playbackRate: 1
		}
	},
	messages: {
		byID: {},
		allIDs: []
	},
	speakers: {},
	connectionQualities: {},
	settings: {
		audioInputDeviceId: "",
		audioOutputDeviceId: "",
		videoInputDeviceId: ""
	},
	devices: {
		audioInput: [],
		audioOutput: [],
		videoInput: []
	},
	roles: {},
	roleChangeRequests: [],
	errors: [],
	sessionStore: {},
	templateAppData: {},
	polls: {},
	whiteboards: {},
	hideLocalPeer: !1
}), Mi = () => ({
	peerStats: {},
	remoteTrackStats: {},
	localTrackStats: {},
	localPeer: { id: "" }
}), Ni = ((e) => (e.CHAT = "chat", e))(Ni || {}), Pi = ((e) => (e.INFO = "info", e.ERROR = "error", e))(Pi || {}), Fi = ((e) => (e.PEER_JOINED = "PEER_JOINED", e.PEER_LEFT = "PEER_LEFT", e.PEER_LIST = "PEER_LIST", e.NEW_MESSAGE = "NEW_MESSAGE", e.ERROR = "ERROR", e.RECONNECTING = "RECONNECTING", e.RECONNECTED = "RECONNECTED", e.TRACK_ADDED = "TRACK_ADDED", e.TRACK_REMOVED = "TRACK_REMOVED", e.TRACK_MUTED = "TRACK_MUTED", e.TRACK_UNMUTED = "TRACK_UNMUTED", e.TRACK_DEGRADED = "TRACK_DEGRADED", e.TRACK_RESTORED = "TRACK_RESTORED", e.TRACK_DESCRIPTION_CHANGED = "TRACK_DESCRIPTION_CHANGED", e.ROLE_UPDATED = "ROLE_UPDATED", e.CHANGE_TRACK_STATE_REQUEST = "CHANGE_TRACK_STATE_REQUEST", e.CHANGE_MULTI_TRACK_STATE_REQUEST = "CHANGE_MULTI_TRACK_STATE_REQUEST", e.ROOM_ENDED = "ROOM_ENDED", e.REMOVED_FROM_ROOM = "REMOVED_FROM_ROOM", e.DEVICE_CHANGE_UPDATE = "DEVICE_CHANGE_UPDATE", e.PLAYLIST_TRACK_ENDED = "PLAYLIST_TRACK_ENDED", e.NAME_UPDATED = "NAME_UPDATED", e.METADATA_UPDATED = "METADATA_UPDATED", e.POLL_CREATED = "POLL_CREATED", e.POLL_STARTED = "POLL_STARTED", e.POLL_STOPPED = "POLL_STOPPED", e.POLL_VOTES_UPDATED = "POLL_VOTES_UPDATED", e.POLLS_LIST = "POLLS_LIST", e.HAND_RAISE_CHANGED = "HAND_RAISE_CHANGED", e.TRANSCRIPTION_STATE_UPDATED = "TRANSCRIPTION_STATE_UPDATED", e))(Fi || {}), Ii = ((e) => (e.audio = "audio", e.video = "video", e))(Ii || {});
function Li(e, t) {
	let n, r;
	if (t) for (let i of t.auxiliaryTracks) {
		let t = e[i];
		Bi(t) && (r = Ri(t) ? t : r, n = zi(t) ? t : n);
	}
	return {
		video: n,
		audio: r
	};
}
function Ri(e) {
	return e && e.type === "audio";
}
function zi(e) {
	return e && e.type === "video";
}
function Bi(e) {
	return e && e.source === "screen";
}
function Vi(e) {
	return e && e.source === "audioplaylist";
}
function Hi(e) {
	return e && e.source === "videoplaylist";
}
function Ui(e) {
	return e ? !!(e != null && e.degraded) : !1;
}
function Wi(e, t) {
	return t && e.tracks[t] ? e.tracks[t].enabled : !1;
}
function Gi(e, t) {
	return t && e.tracks[t] ? e.tracks[t].displayEnabled : !1;
}
function Ki(e) {
	var t;
	let n = !1, r = !1, i = !1;
	return (t = e?.publishParams) != null && t.allowed && (n = e.publishParams.allowed.includes("video"), r = e.publishParams.allowed.includes("audio"), i = e.publishParams.allowed.includes("screen")), {
		video: n,
		audio: r,
		screen: i
	};
}
var qi = ((e) => (e[e.VERBOSE = 0] = "VERBOSE", e[e.DEBUG = 1] = "DEBUG", e[e.INFO = 2] = "INFO", e[e.WARN = 3] = "WARN", e[e.TIME = 4] = "TIME", e[e.TIMEEND = 5] = "TIMEEND", e[e.ERROR = 6] = "ERROR", e[e.NONE = 7] = "NONE", e))(qi || {}), Ji = typeof window < "u" && window.expect !== void 0, L = class {
	static v(e, ...t) {
		this.log(0, e, ...t);
	}
	static d(e, ...t) {
		this.log(1, e, ...t);
	}
	static i(e, ...t) {
		this.log(2, e, ...t);
	}
	static w(e, ...t) {
		this.log(3, e, ...t);
	}
	static e(e, ...t) {
		this.log(6, e, ...t);
	}
	static time(e) {
		this.log(4, "[HMSPerformanceTiming]", e);
	}
	static timeEnd(e) {
		this.log(5, "[HMSPerformanceTiming]", e, e);
	}
	static cleanup() {
		performance.clearMarks(), performance.clearMeasures();
	}
	static log(e, t, ...n) {
		if (!(this.level.valueOf() > e.valueOf())) switch (e) {
			case 0:
				console.log(t, ...n);
				break;
			case 1:
				console.debug(t, ...n);
				break;
			case 2:
				console.info(t, ...n);
				break;
			case 3:
				console.warn(t, ...n);
				break;
			case 6:
				console.error(t, ...n);
				break;
			case 4:
				performance.mark(n[0]);
				break;
			case 5: {
				let e = n[0];
				try {
					let n = performance.measure(e, e);
					this.log(1, t, e, n?.duration), performance.clearMarks(e), performance.clearMeasures(e);
				} catch (n) {
					this.log(1, t, e, n);
				}
				break;
			}
		}
	}
};
L.level = Ji ? 7 : 0;
var Yi = class {
	constructor(e) {
		this.tracks = [], this.nativeStream = e, this.id = e.id;
	}
	updateId(e) {
		this.id = e;
	}
}, Xi = new Kt(), Zi = null, Qi = null, $i = typeof window < "u";
if ($i) try {
	let e = Xi.getResult(), t = e.withClientHints();
	t && typeof t.then == "function" ? (Qi = t, Qi.then((e) => {
		Zi = e;
	}).catch(() => {
		Zi = e;
	})) : (L.d("UAParser", "Client Hints not supported, using standard UA parsing"), Zi = t);
} catch {
	Zi = Xi.getResult();
}
var ea = () => Zi || Xi.getResult(), ta = {
	getBrowser: () => ea().browser,
	getOS: () => ea().os,
	getDevice: () => ea().device,
	getCPU: () => ea().cpu,
	getEngine: () => ea().engine,
	getUA: () => ea().ua,
	getResult: ea,
	withClientHints: () => Qi || Promise.resolve(ea())
}, na, ra = typeof window > "u" && !((na = ta.getBrowser().name) != null && na.toLowerCase().includes("electron")), ia = () => ta.getDevice().type === "mobile", aa = () => typeof document < "u" && document.hidden, oa = () => ta.getOS().name?.toLowerCase() === "ios", sa = (ta.getBrowser()?.name)?.toLowerCase().includes("safari"), ca = (ta.getBrowser()?.name)?.toLowerCase() === "firefox", la = (ta.getEngine()?.name)?.toLowerCase() === "blink", ua = ((e) => (e.CUSTOM = "CUSTOM", e.LOCAL = "LOCAL", e.HMS = "HMS", e))(ua || {});
function da() {
	if ($i && window) {
		let e = window.location.hostname;
		return e === "localhost" || e === "127.0.0.1" ? "LOCAL" : e.includes("app.100ms.live") ? "HMS" : "CUSTOM";
	}
	return "CUSTOM";
}
var fa = da(), R = {
	WebSocketConnectionErrors: {
		FAILED_TO_CONNECT: 1e3,
		WEBSOCKET_CONNECTION_LOST: 1003,
		ABNORMAL_CLOSE: 1006
	},
	APIErrors: {
		SERVER_ERRORS: 2e3,
		INIT_CONFIG_NOT_AVAILABLE: 2002,
		ENDPOINT_UNREACHABLE: 2003,
		INVALID_TOKEN_FORMAT: 2004
	},
	TracksErrors: {
		GENERIC_TRACK: 3e3,
		CANT_ACCESS_CAPTURE_DEVICE: 3001,
		DEVICE_NOT_AVAILABLE: 3002,
		DEVICE_IN_USE: 3003,
		DEVICE_LOST_MIDWAY: 3004,
		NOTHING_TO_RETURN: 3005,
		INVALID_VIDEO_SETTINGS: 3006,
		CODEC_CHANGE_NOT_PERMITTED: 3007,
		AUTOPLAY_ERROR: 3008,
		OVER_CONSTRAINED: 3009,
		NO_AUDIO_DETECTED: 3010,
		SYSTEM_DENIED_PERMISSION: 3011,
		CURRENT_TAB_NOT_SHARED: 3012,
		AUDIO_PLAYBACK_ERROR: 3013,
		SELECTED_DEVICE_MISSING: 3014,
		NO_DATA: 3015
	},
	WebrtcErrors: {
		CREATE_OFFER_FAILED: 4001,
		CREATE_ANSWER_FAILED: 4002,
		SET_LOCAL_DESCRIPTION_FAILED: 4003,
		SET_REMOTE_DESCRIPTION_FAILED: 4004,
		ICE_FAILURE: 4005,
		ICE_DISCONNECTED: 4006,
		STATS_FAILED: 4007
	},
	WebsocketMethodErrors: {
		SERVER_ERRORS: 5e3,
		ALREADY_JOINED: 5001,
		CANNOT_JOIN_PREVIEW_IN_PROGRESS: 5002
	},
	GenericErrors: {
		NOT_CONNECTED: 6e3,
		SIGNALLING: 6001,
		UNKNOWN: 6002,
		NOT_READY: 6003,
		JSON_PARSING_FAILED: 6004,
		TRACK_METADATA_MISSING: 6005,
		RTC_TRACK_MISSING: 6006,
		PEER_METADATA_MISSING: 6007,
		INVALID_ROLE: 6008,
		PREVIEW_IN_PROGRESS: 6009,
		MISSING_MEDIADEVICES: 6010,
		MISSING_RTCPEERCONNECTION: 6011,
		LOCAL_STORAGE_ACCESS_DENIED: 6012,
		VALIDATION_FAILED: 6013
	},
	PlaylistErrors: {
		NO_ENTRY_TO_PLAY: 8001,
		NO_ENTRY_IS_PLAYING: 8002
	}
}, z = class e extends Error {
	constructor(t, n, r, i, a, o = !1) {
		super(i), this.code = t, this.name = n, this.message = i, this.description = a, this.isTerminal = o, Object.setPrototypeOf(this, e.prototype), this.action = r.toString();
	}
	toAnalyticsProperties() {
		return {
			error_name: this.name,
			error_code: this.code,
			error_message: this.message,
			error_description: this.description,
			action: this.action,
			is_terminal: this.isTerminal
		};
	}
	addNativeError(e) {
		this.nativeError = e;
	}
	toString() {
		return `{
        code: ${this.code};
        name: ${this.name};
        action: ${this.action};
        message: ${this.message};
        description: ${this.description};
        isTerminal: ${this.isTerminal};
        nativeError: ${this.nativeError?.message};
      }`;
	}
}, pa = class extends z {
	constructor(e, t, n, r, i, a) {
		super(e, t, n, r, i, !1), this.code = e, this.name = t, this.message = r, this.description = i, this.trackType = a;
	}
	toAnalyticsProperties() {
		return F(P({}, super.toAnalyticsProperties()), { track_type: this.trackType });
	}
	toString() {
		return `{
        code: ${this.code};
        name: ${this.name};
        action: ${this.action};
        message: ${this.message};
        description: ${this.description};
        isTerminal: ${this.isTerminal};
        nativeError: ${this.nativeError?.message};
        trackType: ${this.trackType};
      }`;
	}
}, ma = ((e) => (e.AUDIO = "audio", e.VIDEO = "video", e.AUDIO_VIDEO = "audio, video", e.SCREEN = "screen", e))(ma || {});
function ha(e) {
	switch (e) {
		case "join": return "JOIN";
		case "offer": return "PUBLISH";
		case "answer": return "SUBSCRIBE";
		case "track-update": return "TRACK";
		default: return "NONE";
	}
}
var ga = [
	"join",
	"offer",
	"answer",
	"trickle",
	"on-error",
	"JOIN"
], B = {
	WebSocketConnectionErrors: {
		FailedToConnect(e, t = "") {
			return new z(R.WebSocketConnectionErrors.FAILED_TO_CONNECT, "WebsocketFailedToConnect", e, `[WS]: ${t}`, `[WS]: ${t}`);
		},
		WebSocketConnectionLost(e, t = "") {
			return new z(R.WebSocketConnectionErrors.WEBSOCKET_CONNECTION_LOST, "WebSocketConnectionLost", e, "Network connection lost", t);
		},
		AbnormalClose(e, t = "") {
			return new z(R.WebSocketConnectionErrors.ABNORMAL_CLOSE, "WebSocketAbnormalClose", e, "Websocket closed abnormally", t);
		}
	},
	APIErrors: {
		ServerErrors(e, t, n = "", r = !0) {
			return new z(e, "ServerErrors", t, `[${t}]: Server error ${n}`, n, r);
		},
		EndpointUnreachable(e, t = "") {
			return new z(R.APIErrors.ENDPOINT_UNREACHABLE, "EndpointUnreachable", e, `Endpoint is not reachable - ${t}`, t);
		},
		InvalidTokenFormat(e, t = "") {
			return new z(R.APIErrors.INVALID_TOKEN_FORMAT, "InvalidTokenFormat", e, `Token is not in proper JWT format - ${t}`, t, !0);
		},
		InitConfigNotAvailable(e, t = "") {
			return new z(R.APIErrors.INIT_CONFIG_NOT_AVAILABLE, "InitError", e, `[INIT]: ${t}`, `[INIT]: ${t}`);
		}
	},
	TracksErrors: {
		GenericTrack(e, t = "") {
			return new pa(R.TracksErrors.GENERIC_TRACK, "GenericTrack", e, `[TRACK]: ${t}`, `[TRACK]: ${t}`, "audio, video");
		},
		CantAccessCaptureDevice(e, t, n = "") {
			return new pa(R.TracksErrors.CANT_ACCESS_CAPTURE_DEVICE, "CantAccessCaptureDevice", e, `User denied permission to access capture device - ${t}`, n, t);
		},
		DeviceNotAvailable(e, t, n = "") {
			return new pa(R.TracksErrors.DEVICE_NOT_AVAILABLE, "DeviceNotAvailable", e, `[TRACK]: Capture device is no longer available - ${t}`, n, t);
		},
		DeviceInUse(e, t, n = "") {
			return new pa(R.TracksErrors.DEVICE_IN_USE, "DeviceInUse", e, `[TRACK]: Capture device is in use by another application - ${t}`, n, t);
		},
		DeviceLostMidway(e, t, n = "") {
			return new pa(R.TracksErrors.DEVICE_LOST_MIDWAY, "DeviceLostMidway", e, `Lost access to capture device midway - ${t}`, n, t);
		},
		NothingToReturn(e, t = "", n = "There is no media to return. Please select either video or audio or both.") {
			return new pa(R.TracksErrors.NOTHING_TO_RETURN, "NothingToReturn", e, n, t, "audio, video");
		},
		InvalidVideoSettings(e, t = "") {
			return new pa(R.TracksErrors.INVALID_VIDEO_SETTINGS, "InvalidVideoSettings", e, "Cannot enable simulcast when no video settings are provided", t, "video");
		},
		AutoplayBlocked(e, t = "") {
			return new pa(R.TracksErrors.AUTOPLAY_ERROR, "AutoplayBlocked", e, "Autoplay blocked because the user didn't interact with the document first", t, "audio");
		},
		CodecChangeNotPermitted(e, t = "") {
			return new pa(R.TracksErrors.CODEC_CHANGE_NOT_PERMITTED, "CodecChangeNotPermitted", e, "Codec can't be changed mid call.", t, "audio, video");
		},
		OverConstrained(e, t, n = "") {
			return new pa(R.TracksErrors.OVER_CONSTRAINED, "OverConstrained", e, `[TRACK]: Requested constraints cannot be satisfied with the device hardware - ${t}`, n, t);
		},
		NoAudioDetected(e, t = "Please check the mic or use another audio input") {
			return new pa(R.TracksErrors.NO_AUDIO_DETECTED, "NoAudioDetected", e, "No audio input detected from microphone", t, "audio");
		},
		SystemDeniedPermission(e, t, n = "") {
			return new pa(R.TracksErrors.SYSTEM_DENIED_PERMISSION, "SystemDeniedPermission", e, `Operating System denied permission to access capture device - ${t}`, n, t);
		},
		CurrentTabNotShared() {
			return new pa(R.TracksErrors.CURRENT_TAB_NOT_SHARED, "CurrentTabNotShared", "TRACK", "The app requires you to share the current tab", "You must screen share the current tab in order to proceed", "screen");
		},
		AudioPlaybackError(e) {
			return new pa(R.TracksErrors.AUDIO_PLAYBACK_ERROR, "Audio playback error", "TRACK", e, e, "audio");
		},
		SelectedDeviceMissing(e) {
			return new pa(R.TracksErrors.SELECTED_DEVICE_MISSING, "SelectedDeviceMissing", "TRACK", `Could not detect selected ${e} device`, `Please check connection to the ${e} device`, e);
		},
		NoDataInTrack(e) {
			return new pa(R.TracksErrors.NO_DATA, "Track does not have any data", "TRACK", e, "This could possibily due to another application taking priority over the access to camera or microphone or due to an incoming call", "audio, video");
		}
	},
	WebrtcErrors: {
		CreateOfferFailed(e, t = "") {
			return new z(R.WebrtcErrors.CREATE_OFFER_FAILED, "CreateOfferFailed", e, `[${e.toString()}]: Failed to create offer. `, t);
		},
		CreateAnswerFailed(e, t = "") {
			return new z(R.WebrtcErrors.CREATE_ANSWER_FAILED, "CreateAnswerFailed", e, `[${e.toString()}]: Failed to create answer. `, t);
		},
		SetLocalDescriptionFailed(e, t = "") {
			return new z(R.WebrtcErrors.SET_LOCAL_DESCRIPTION_FAILED, "SetLocalDescriptionFailed", e, `[${e.toString()}]: Failed to set offer. `, t);
		},
		SetRemoteDescriptionFailed(e, t = "") {
			return new z(R.WebrtcErrors.SET_REMOTE_DESCRIPTION_FAILED, "SetRemoteDescriptionFailed", e, `[${e.toString()}]: Failed to set answer. `, t, !0);
		},
		ICEFailure(e, t = "", n = !1) {
			return new z(R.WebrtcErrors.ICE_FAILURE, "ICEFailure", e, `[${e.toString()}]: Ice connection state FAILED`, t, n);
		},
		ICEDisconnected(e, t = "") {
			return new z(R.WebrtcErrors.ICE_DISCONNECTED, "ICEDisconnected", e, `[${e.toString()}]: Ice connection state DISCONNECTED`, t);
		},
		StatsFailed(e, t = "") {
			return new z(R.WebrtcErrors.STATS_FAILED, "StatsFailed", e, `Failed to WebRTC get stats - ${t}`, t);
		}
	},
	WebsocketMethodErrors: {
		ServerErrors(e, t, n) {
			return new z(e, "ServerErrors", t, n, n, ga.includes(t));
		},
		AlreadyJoined(e, t = "") {
			return new z(R.WebsocketMethodErrors.ALREADY_JOINED, "AlreadyJoined", e, "[JOIN]: You have already joined this room.", t);
		},
		CannotJoinPreviewInProgress(e, t = "") {
			return new z(R.WebsocketMethodErrors.CANNOT_JOIN_PREVIEW_IN_PROGRESS, "CannotJoinPreviewInProgress", e, "[JOIN]: Cannot join if preview is in progress", t);
		}
	},
	GenericErrors: {
		NotConnected(e, t = "") {
			return new z(R.GenericErrors.NOT_CONNECTED, "NotConnected", e, "Client is not connected", t);
		},
		Signalling(e, t) {
			return new z(R.GenericErrors.SIGNALLING, "Signalling", e, `Unknown signalling error: ${e.toString()} ${t} `, t);
		},
		Unknown(e, t) {
			return new z(R.GenericErrors.UNKNOWN, "Unknown", e, `Unknown exception: ${t}`, t);
		},
		NotReady(e, t = "") {
			return new z(R.GenericErrors.NOT_READY, "NotReady", e, t, t);
		},
		JsonParsingFailed(e, t, n = "") {
			return new z(R.GenericErrors.JSON_PARSING_FAILED, "JsonParsingFailed", e, `Failed to parse JSON message - ${t}`, n);
		},
		TrackMetadataMissing(e, t = "") {
			return new z(R.GenericErrors.TRACK_METADATA_MISSING, "TrackMetadataMissing", e, "Track Metadata Missing", t);
		},
		RTCTrackMissing(e, t = "") {
			return new z(R.GenericErrors.RTC_TRACK_MISSING, "RTCTrackMissing", e, "RTC Track missing", t);
		},
		PeerMetadataMissing(e, t = "") {
			return new z(R.GenericErrors.PEER_METADATA_MISSING, "PeerMetadataMissing", e, "Peer Metadata Missing", t);
		},
		ValidationFailed(e, t) {
			return new z(R.GenericErrors.VALIDATION_FAILED, "ValidationFailed", "VALIDATION", e, t ? JSON.stringify(t) : "");
		},
		InvalidRole(e, t) {
			return new z(R.GenericErrors.INVALID_ROLE, "InvalidRole", e, "Invalid role. Join with valid role", t, !0);
		},
		PreviewAlreadyInProgress(e, t = "") {
			return new z(R.GenericErrors.PREVIEW_IN_PROGRESS, "PreviewAlreadyInProgress", e, "[Preview]: Cannot join if preview is in progress", t);
		},
		LocalStorageAccessDenied(e = "Access to localStorage has been denied") {
			return new z(R.GenericErrors.LOCAL_STORAGE_ACCESS_DENIED, "LocalStorageAccessDenied", "NONE", "LocalStorageAccessDenied", e);
		},
		MissingMediaDevices() {
			return new z(R.GenericErrors.MISSING_MEDIADEVICES, "MissingMediaDevices", "JOIN", "navigator.mediaDevices is undefined. 100ms SDK won't work on this website as WebRTC is not supported on HTTP endpoints(missing navigator.mediaDevices). Please ensure you're using the SDK either on localhost or a valid HTTPS endpoint.", "", !0);
		},
		MissingRTCPeerConnection() {
			return new z(R.GenericErrors.MISSING_RTCPEERCONNECTION, "MissingRTCPeerConnection", "JOIN", "RTCPeerConnection which is a core requirement for WebRTC call was not found, this could be due to an unsupported browser or browser extensions blocking WebRTC", "", !0);
		}
	},
	MediaPluginErrors: {
		PlatformNotSupported(e, t = "") {
			return new z(7001, "PlatformNotSupported", e, "Check HMS Docs to see the list of supported platforms", t);
		},
		InitFailed(e, t = "") {
			return new z(7002, "InitFailed", e, "Plugin init failed", t);
		},
		ProcessingFailed(e, t = "") {
			return new z(7003, "ProcessingFailed", e, "Plugin processing failed", t);
		},
		AddAlreadyInProgress(e, t = "") {
			return new z(7004, "AddAlreadyInProgress", e, "Plugin add already in progress", t);
		},
		DeviceNotSupported(e, t = "") {
			return new z(7005, "DeviceNotSupported", e, "Check HMS Docs to see the list of supported devices", t);
		}
	},
	PlaylistErrors: {
		NoEntryToPlay(e, t) {
			return new z(R.PlaylistErrors.NO_ENTRY_TO_PLAY, "NoEntryToPlay", e, "Reached end of playlist", t);
		},
		NoEntryPlaying(e, t) {
			return new z(R.PlaylistErrors.NO_ENTRY_IS_PLAYING, "NoEntryIsPlaying", e, "No entry is playing at this time", t);
		}
	}
}, _a = class {
	constructor() {
		this.valuesMap = /* @__PURE__ */ new Map();
	}
	getItem(e) {
		return this.valuesMap.has(e) ? String(this.valuesMap.get(e)) : null;
	}
	setItem(e, t) {
		this.valuesMap.set(e, t);
	}
	removeItem(e) {
		this.valuesMap.delete(e);
	}
	clear() {
		this.valuesMap.clear();
	}
	key(e) {
		if (arguments.length === 0) throw TypeError("Failed to execute 'key' on 'Storage': 1 argument required, but only 0 present.");
		return Array.from(this.valuesMap.keys())[e];
	}
	get length() {
		return this.valuesMap.size;
	}
}, va = () => {
	try {
		$i && !localStorage && (window.localStorage = new _a());
	} catch {
		L.e("Error initialising localStorage", B.GenericErrors.LocalStorageAccessDenied());
	}
}, ya = class {
	constructor(e) {
		this.key = e, this.storage = null;
	}
	getStorage() {
		try {
			return $i && !this.storage && (va(), this.storage = window.localStorage), this.storage;
		} catch {
			return L.e("Error initialising localStorage", B.GenericErrors.LocalStorageAccessDenied()), null;
		}
	}
	get() {
		let e = this.getStorage()?.getItem(this.key);
		return e ? JSON.parse(e) : void 0;
	}
	set(e) {
		var t;
		let n = JSON.stringify(e);
		(t = this.getStorage()) == null || t.setItem(this.key, n);
	}
	clear() {
		var e;
		(e = this.getStorage()) == null || e.removeItem(this.key);
	}
}, ba = () => {
	let e, t = new ya("hms-analytics-deviceId"), n = t.get();
	return n ? e = n : (e = tn(), t.set(e)), e;
}, xa = "[VALIDATIONS]";
function Sa(e) {
	return e != null;
}
var Ca = () => {
	if (!Sa(RTCPeerConnection)) {
		let e = B.GenericErrors.MissingRTCPeerConnection();
		throw L.e(xa, e), e;
	}
}, wa = () => {
	if (!Sa(navigator.mediaDevices)) {
		let e = B.GenericErrors.MissingMediaDevices();
		throw L.e(xa, e), e;
	}
}, Ta = (e) => {
	if (!e.getPublishParams()) throw B.GenericErrors.NotConnected("VALIDATION", "call addTrack after preview or join is successful");
}, Ea = ki().version;
function Da(e = "prod", t) {
	let n = fa !== "LOCAL" && e === "prod" ? "prod" : "debug";
	if (ra) return ka({
		os: "web_nodejs",
		os_version: process.version,
		sdk: "web",
		sdk_version: Ea,
		env: n,
		domain: fa,
		is_prebuilt: !!(t != null && t.isPrebuilt),
		framework: "node",
		framework_version: process.version,
		framework_sdk_version: t?.sdkVersion
	});
	let r = ta.getOS(), i = ta.getDevice(), a = ta.getBrowser(), o = Oa(`web_${r.name}`), s = r.version || "", c = Oa(`${a.name}_${a.version}`), l = c;
	return i.type && (l = `${Oa(`${i.vendor}_${i.type}`)}/${c}`), ka({
		os: o,
		os_version: s,
		sdk: "web",
		sdk_version: Ea,
		device_model: l,
		env: n,
		domain: fa,
		is_prebuilt: !!(t != null && t.isPrebuilt),
		framework: t?.type,
		framework_version: t?.version,
		framework_sdk_version: t?.sdkVersion
	});
}
function Oa(e) {
	return e.replace(/ /g, "_");
}
var ka = (e, t = ",") => Object.keys(e).filter((t) => Sa(e[t])).map((t) => `${t}:${e[t]}`).join(t), V = class {
	constructor({ name: e, level: t, properties: n, includesPII: r, timestamp: i }) {
		this.metadata = {
			peer: {},
			userAgent: Da()
		}, this.name = e, this.level = t, this.includesPII = r || !1, this.properties = n || {}, this.timestamp = i || (/* @__PURE__ */ new Date()).getTime(), this.event_id = tn(), this.device_id = ba();
	}
	toSignalParams() {
		return {
			name: this.name,
			info: F(P({}, this.properties), {
				timestamp: this.timestamp,
				domain: fa
			}),
			timestamp: (/* @__PURE__ */ new Date()).getTime()
		};
	}
}, H = class {
	static connect(e, t, n = /* @__PURE__ */ new Date(), r = /* @__PURE__ */ new Date(), i) {
		return new V({
			name: this.eventNameFor("connect", e === void 0),
			level: e ? 2 : 1,
			properties: this.getPropertiesWithError(F(P({}, t), {
				[this.KEY_REQUESTED_AT]: n?.getTime(),
				[this.KEY_RESPONDED_AT]: r?.getTime(),
				endpoint: i
			}), e)
		});
	}
	static disconnect(e, t) {
		return new V({
			name: "disconnected",
			level: e ? 2 : 1,
			properties: this.getPropertiesWithError(t, e)
		});
	}
	static preview(e) {
		var t = e, { error: n } = t, r = Ei(t, ["error"]);
		return new V({
			name: this.eventNameFor("preview", n === void 0),
			level: n ? 2 : 1,
			properties: this.getPropertiesWithError(r, n)
		});
	}
	static join(e) {
		var t = e, { error: n } = t, r = Ei(t, ["error"]);
		return new V({
			name: this.eventNameFor("join", n === void 0),
			level: n ? 2 : 1,
			properties: this.getPropertiesWithError(F(P({}, r), { is_preview_called: !!r.is_preview_called }), n)
		});
	}
	static publish({ devices: e, settings: t, error: n }) {
		return new V({
			name: this.eventNameFor("publish", n === void 0),
			level: n ? 2 : 1,
			properties: this.getPropertiesWithError({
				devices: e,
				audio: t?.audio,
				video: t?.video
			}, n)
		});
	}
	static hlsPlayerError(e) {
		return new V({
			name: "hlsPlayerError",
			level: 2,
			properties: this.getErrorProperties(e)
		});
	}
	static subscribeFail(e) {
		return new V({
			name: this.eventNameFor("subscribe", !1),
			level: 2,
			properties: this.getErrorProperties(e)
		});
	}
	static leave() {
		return new V({
			name: "leave",
			level: 1
		});
	}
	static autoplayError() {
		return new V({
			name: "autoplayError",
			level: 2
		});
	}
	static audioPlaybackError(e) {
		return new V({
			name: "audioPlaybackError",
			level: 2,
			properties: this.getErrorProperties(e)
		});
	}
	static audioRecovered(e) {
		return new V({
			name: "audioRecovered",
			level: 1,
			properties: { message: e }
		});
	}
	static permissionChange(e, t) {
		return new V({
			name: "permissionChanged",
			level: 1,
			properties: { message: `Perrmission for ${e} changed to ${t}` }
		});
	}
	static deviceChange({ isUserSelection: e, selection: t, type: n, devices: r, error: i }) {
		return new V({
			name: this.eventNameFor(i ? "publish" : `device.${n}`, i === void 0),
			level: i ? 2 : 1,
			properties: this.getPropertiesWithError({
				selection: t,
				devices: r,
				isUserSelection: e
			}, i)
		});
	}
	static performance(e) {
		return new V({
			name: "perf.stats",
			level: 1,
			properties: e.toAnalyticsProperties()
		});
	}
	static rtcStats(e) {
		return new V({
			name: "rtc.stats",
			level: 1,
			properties: e.toAnalyticsProperties()
		});
	}
	static rtcStatsFailed(e) {
		return new V({
			name: "rtc.stats.failed",
			level: 2,
			properties: this.getErrorProperties(e)
		});
	}
	static degradationStats(e, t) {
		let n = {
			degradedAt: e.degradedAt,
			trackId: e.trackId
		};
		if (!t && e.degradedAt instanceof Date) {
			let t = /* @__PURE__ */ new Date(), r = t.valueOf() - e.degradedAt.valueOf();
			n = F(P({}, n), {
				duration: r,
				restoredAt: t
			});
		}
		return new V({
			name: "video.degradation.stats",
			level: 1,
			properties: n
		});
	}
	static audioDetectionFail(e, t) {
		return new V({
			name: "audiopresence.failed",
			level: 2,
			properties: this.getPropertiesWithError({ device: t }, e)
		});
	}
	static previewNetworkQuality(e) {
		return new V({
			name: "perf.networkquality.preview",
			level: e.error ? 2 : 1,
			properties: e
		});
	}
	static publishStats(e) {
		return new V({
			name: "publisher.stats",
			level: 1,
			properties: e
		});
	}
	static subscribeStats(e) {
		return new V({
			name: "subscriber.stats",
			level: 1,
			properties: e
		});
	}
	static getKrispUsage(e) {
		return new V({
			name: "krisp.usage",
			level: 1,
			properties: { duration: e }
		});
	}
	static krispStart() {
		return new V({
			name: "krisp.start",
			level: 1
		});
	}
	static krispStop() {
		return new V({
			name: "krisp.stop",
			level: 1
		});
	}
	static interruption({ started: e, type: t, reason: n, deviceInfo: r, trackInfo: i }) {
		return new V({
			name: `${e ? "interruption.start" : "interruption.stop"}`,
			level: 1,
			properties: F(P({
				reason: n,
				type: t,
				pageHidden: document.visibilityState === "hidden"
			}, r), { trackInfo: i })
		});
	}
	static mediaConstraints({ requestedConstraints: e, appliedConstraints: t, trackSettings: n }) {
		return new V({
			name: "media.constraints",
			level: 1,
			properties: {
				requested_constraints: e,
				applied_constraints: t,
				track_settings: n,
				webgpu_supported: typeof navigator < "u" && "gpu" in navigator,
				media_stream_track_processor_supported: typeof window < "u" && "MediaStreamTrackProcessor" in window
			}
		});
	}
	static eventNameFor(e, t) {
		return `${e}.${t ? "success" : "failed"}`;
	}
	static getPropertiesWithError(e, t) {
		return e = P(P({}, this.getErrorProperties(t)), e), e;
	}
	static getErrorProperties(e) {
		return e ? e instanceof z ? e.toAnalyticsProperties() : {
			error_name: e.name,
			error_message: e.message,
			error_description: e.cause
		} : {};
	}
};
H.KEY_REQUESTED_AT = "requested_at", H.KEY_RESPONDED_AT = "responded_at";
var Aa = (e) => e ? `{
    trackId: ${e.id};
    kind: ${e.kind};
    enabled: ${e.enabled};
    muted: ${e.muted};
    readyState: ${e.readyState};
  }` : "", ja = class {
	constructor(e, t, n) {
		this.logIdentifier = "", this.isTrackNotPublishing = () => this.nativeTrack.readyState === "ended" || this.nativeTrack.muted, this.stream = e, this.nativeTrack = t, this.source = n;
	}
	get enabled() {
		return this.nativeTrack.enabled;
	}
	get trackId() {
		return this.firstTrackId || this.sdpTrackId || this.nativeTrack.id;
	}
	getMediaTrackSettings() {
		return this.nativeTrack.getSettings();
	}
	getPluginsMetrics() {}
	setEnabled(e) {
		return I(this, null, function* () {
			this.nativeTrack.enabled = e;
		});
	}
	setSdpTrackId(e) {
		this.sdpTrackId = e;
	}
	setFirstTrackId(e) {
		this.firstTrackId = e;
	}
	sendInterruptionEvent({ started: e, reason: t }) {
		let n = this.nativeTrack;
		return H.interruption({
			started: e,
			type: this.type,
			reason: t,
			deviceInfo: {
				deviceId: n.getSettings().deviceId,
				groupId: n.getSettings().groupId
			},
			trackInfo: {
				label: n.label,
				enabled: n.enabled,
				muted: n.muted,
				readyState: n.readyState,
				settings: n.getSettings()
			}
		});
	}
	cleanup() {
		var e;
		L.d("[HMSTrack]", "Stopping track", this.toString()), (e = this.nativeTrack) == null || e.stop();
	}
	toString() {
		return `{
      streamId: ${this.stream.id};
      peerId: ${this.peerId};
      trackId: ${this.trackId};
      mid: ${this.transceiver?.mid || "-"};
      logIdentifier: ${this.logIdentifier};
      source: ${this.source};
      enabled: ${this.enabled};
      nativeTrack: ${Aa(this.nativeTrack)};
    }`;
	}
}, Ma = class extends ja {
	constructor(e, t, n) {
		if (super(e, t, n), this.type = "audio", this.audioElement = null, t.kind !== "audio") throw Error("Expected 'track' kind = 'audio'");
	}
	getVolume() {
		return this.audioElement ? Math.floor(this.audioElement.volume * 100) : null;
	}
	setVolume(e) {
		return I(this, null, function* () {
			if (e < 0 || e > 100) throw Error("Please pass a valid number between 0-100");
			yield this.subscribeToAudio(e === 0 ? !1 : this.enabled), this.audioElement && (this.audioElement.volume = e / 100);
		});
	}
	setAudioElement(e) {
		L.d("[HMSAudioTrack]", this.logIdentifier, "adding audio element", `${this}`, e), this.audioElement = e;
	}
	getAudioElement() {
		return this.audioElement;
	}
	getOutputDevice() {
		return this.outputDevice;
	}
	cleanup() {
		super.cleanup(), this.audioElement &&= (this.audioElement.srcObject = null, this.audioElement.remove(), null);
	}
	setOutputDevice(e) {
		return I(this, null, function* () {
			if (!e) {
				L.d("[HMSAudioTrack]", this.logIdentifier, "device is null", `${this}`);
				return;
			}
			if (!this.audioElement) {
				L.d("[HMSAudioTrack]", this.logIdentifier, "no audio element to set output", `${this}`), this.outputDevice = e;
				return;
			}
			try {
				typeof this.audioElement.setSinkId == "function" && la && (yield this.audioElement?.setSinkId(e.deviceId), this.outputDevice = e);
			} catch (e) {
				L.d("[HMSAudioTrack]", "error in setSinkId", e);
			}
		});
	}
	subscribeToAudio(e) {
		return I(this, null, function* () {
			this.stream instanceof us && (yield this.stream.setAudio(e, this.trackId, this.logIdentifier));
		});
	}
}, Na = new class {
	constructor() {
		this.storage = new ya("hms-device-selection"), this.remember = !1, this.TAG = "[HMSDeviceStorage]";
	}
	setDevices(e) {
		var t;
		if (this.devices = e, !this.remember) return;
		let n = this.storage.get();
		if (n) for (let r of [
			"audioInput",
			"videoInput",
			"audioOutput"
		]) {
			let i = n[r];
			i && ((t = e[r]) != null && t.some((e) => this.isSame(i, e)) || (L.w(this.TAG, `Removing ${r} device from storage as it's no longer available: ${i.deviceId}`), this.removeSelection(r)));
		}
	}
	rememberDevices(e) {
		this.remember = e;
	}
	updateSelection(e, { deviceId: t, groupId: n }) {
		if (!this.devices || !this.remember) return;
		let r = this.devices[e].find((e) => this.isSame({
			deviceId: t,
			groupId: n
		}, e));
		if (!r) {
			L.w(this.TAG, `Could not find device with deviceId: ${t}, groupId: ${n}`);
			return;
		}
		let i = this.storage.get() || {};
		i[e] = r, this.storage.set(i);
	}
	removeSelection(e) {
		let t = this.storage.get() || {};
		t[e] && (delete t[e], this.storage.set(t));
	}
	getSelection() {
		if (this.remember) return this.storage.get();
	}
	cleanup() {
		this.remember = !1, this.devices = void 0;
	}
	isSame(e, t) {
		return e.deviceId === t.deviceId && (e.groupId === t.groupId || !e.groupId);
	}
}(), Pa = ((e) => (e.TRANSFORM = "TRANSFORM", e.ANALYZE = "ANALYZE", e))(Pa || {}), Fa = ((e) => (e.PLATFORM_NOT_SUPPORTED = "PLATFORM_NOT_SUPPORTED", e.DEVICE_NOT_SUPPORTED = "DEVICE_NOT_SUPPORTED", e))(Fa || {}), Ia = class {
	static failure(e, t) {
		return new V({
			name: "mediaPlugin.failed",
			level: 2,
			properties: P({ plugin_name: e }, t.toAnalyticsProperties())
		});
	}
	static audioPluginFailure(e, t, n) {
		return new V({
			name: "mediaPlugin.failed",
			level: 2,
			properties: P({
				plugin_name: e,
				sampleRate: t
			}, n.toAnalyticsProperties())
		});
	}
	static audioPluginStats({ pluginName: e, duration: t, loadTime: n, sampleRate: r }) {
		return new V({
			name: "mediaPlugin.stats",
			level: 1,
			properties: {
				plugin_name: e,
				duration: t,
				load_time: n,
				sampleRate: r
			}
		});
	}
	static added(e, t) {
		return new V({
			name: "mediaPlugin.added",
			level: 1,
			properties: {
				plugin_name: e,
				added_at: t
			}
		});
	}
	static stats({ pluginName: e, duration: t, loadTime: n, avgPreProcessingTime: r, avgProcessingTime: i, inputFrameRate: a, pluginFrameRate: o }) {
		return new V({
			name: "mediaPlugin.stats",
			level: 1,
			properties: {
				plugin_name: e,
				duration: t,
				load_time: n,
				avg_preprocessing_time: r,
				avg_processing_time: i,
				input_frame_rate: a,
				plugin_frame_rate: o
			}
		});
	}
}, La = class {
	constructor(e) {
		this.eventBus = e, this.TAG = "[AudioPluginsAnalytics]", this.initTime = {}, this.addedTimestamps = {}, this.pluginAdded = {}, this.pluginSampleRate = {};
	}
	added(e, t) {
		this.pluginAdded[e] = !0, this.addedTimestamps[e] = Date.now(), this.initTime[e] = 0, this.pluginSampleRate[e] = t, this.eventBus.analytics.publish(Ia.added(e, this.addedTimestamps[e]));
	}
	removed(e) {
		if (this.pluginAdded[e]) {
			let t = {
				pluginName: e,
				duration: Math.floor((Date.now() - this.addedTimestamps[e]) / 1e3),
				loadTime: this.initTime[e],
				sampleRate: this.pluginSampleRate[e]
			};
			this.eventBus.analytics.publish(Ia.audioPluginStats(t)), this.clean(e);
		}
	}
	failure(e, t) {
		this.pluginAdded[e] && (this.eventBus.analytics.publish(Ia.audioPluginFailure(e, this.pluginSampleRate[e], t)), this.clean(e));
	}
	initWithTime(e, t) {
		return I(this, null, function* () {
			if (this.initTime[e]) {
				L.i(this.TAG, `Plugin Already loaded ${e}, time it took: ${this.initTime[e]}`);
				return;
			}
			let n;
			try {
				n = yield this.timeInMs(t), L.i(this.TAG, `Time taken for Plugin ${e} initialization : ${n}`);
			} catch (t) {
				let n = B.MediaPluginErrors.InitFailed("AUDIO_PLUGINS", `failed during initialization of plugin${t.message || t}`);
				throw L.e(this.TAG, n), this.failure(e, n), n;
			}
			n && (this.initTime[e] = n);
		});
	}
	timeInMs(e) {
		return I(this, null, function* () {
			let t = Date.now();
			return yield e(), Math.floor(Date.now() - t);
		});
	}
	clean(e) {
		delete this.addedTimestamps[e], delete this.initTime[e], delete this.pluginAdded[e], delete this.pluginSampleRate[e];
	}
}, Ra = class {
	constructor(e, t, n) {
		this.eventBus = t, this.TAG = "[AudioPluginsManager]", this.pluginAddInProgress = !1, this.hmsTrack = e, this.pluginsMap = /* @__PURE__ */ new Map(), this.analytics = new La(t), this.audioContext = oo.getAudioContext(), this.room = n;
	}
	getPlugins() {
		return Array.from(this.pluginsMap.keys());
	}
	addPlugin(e) {
		return I(this, null, function* () {
			var t;
			let n = e.getName?.call(e);
			if (!n) {
				L.w("no name provided by the plugin");
				return;
			}
			if (this.pluginAddInProgress) {
				let e = B.MediaPluginErrors.AddAlreadyInProgress("AUDIO_PLUGINS", "Add Plugin is already in Progress");
				throw this.analytics.added(n, this.audioContext.sampleRate), this.analytics.failure(n, e), L.w("can't add another plugin when previous add is in progress"), e;
			}
			switch (e.getName()) {
				case "HMSKrispPlugin":
					if (!((t = this.room) != null && t.isNoiseCancellationEnabled)) {
						let e = "Krisp Noise Cancellation is not enabled for this room";
						if (this.pluginsMap.size === 0) throw Error(e);
						L.w(this.TAG, e);
						return;
					}
					this.eventBus.analytics.publish(H.krispStart());
					break;
				default:
			}
			this.pluginAddInProgress = !0;
			try {
				yield this.addPluginInternal(e);
			} finally {
				this.pluginAddInProgress = !1;
			}
		});
	}
	addPluginInternal(e) {
		return I(this, null, function* () {
			var t;
			let n = e.getName?.call(e);
			if (this.pluginsMap.get(n)) {
				L.w(this.TAG, `plugin - ${n} already added.`);
				return;
			}
			yield this.validateAndThrow(n, e), (t = e.setEventBus) == null || t.call(e, this.eventBus);
			try {
				this.pluginsMap.size === 0 ? yield this.initAudioNodes() : this.prevAudioNode && this.prevAudioNode.disconnect(), this.analytics.added(n, this.audioContext.sampleRate), yield this.analytics.initWithTime(n, () => I(this, null, function* () {
					return e.init();
				})), this.pluginsMap.set(n, e), yield this.processPlugin(e), yield this.connectToDestination(), yield this.updateProcessedTrack();
			} catch (e) {
				throw L.e(this.TAG, "failed to add plugin", e), e;
			}
		});
	}
	validatePlugin(e) {
		return e.checkSupport(this.audioContext);
	}
	validateAndThrow(e, t) {
		return I(this, null, function* () {
			let n = this.validatePlugin(t);
			if (n.isSupported) L.i(this.TAG, `plugin is supported,- ${t.getName()}`);
			else if (this.analytics.added(e, this.audioContext.sampleRate), n.errType === "PLATFORM_NOT_SUPPORTED") {
				let t = B.MediaPluginErrors.PlatformNotSupported("AUDIO_PLUGINS", "platform not supported, see docs");
				throw this.analytics.failure(e, t), yield this.cleanup(), t;
			} else if (n.errType === "DEVICE_NOT_SUPPORTED") {
				let t = B.MediaPluginErrors.DeviceNotSupported("AUDIO_PLUGINS", "audio device not supported, see docs");
				throw this.analytics.failure(e, t), yield this.cleanup(), t;
			}
		});
	}
	removePlugin(e) {
		return I(this, null, function* () {
			e.getName() === "HMSKrispPlugin" && this.eventBus.analytics.publish(H.krispStop()), yield this.removePluginInternal(e), this.pluginsMap.size === 0 ? (yield this.cleanup(), L.i(this.TAG, "No plugins left, stopping plugins loop"), yield this.hmsTrack.setProcessedTrack(void 0)) : yield this.reprocessPlugins();
		});
	}
	cleanup() {
		return I(this, null, function* () {
			var e, t, n;
			for (let e of this.pluginsMap.values()) yield this.removePluginInternal(e);
			yield this.hmsTrack.setProcessedTrack(void 0), (e = this.sourceNode) == null || e.disconnect(), (t = this.prevAudioNode) == null || t.disconnect(), (n = this.outputTrack) == null || n.stop(), this.sourceNode = void 0, this.destinationNode = void 0, this.prevAudioNode = void 0, this.outputTrack = void 0;
		});
	}
	closeContext() {
		return I(this, null, function* () {
			this.audioContext = void 0;
		});
	}
	reprocessPlugins() {
		return I(this, null, function* () {
			if (this.pluginsMap.size === 0 || !this.sourceNode) return;
			let e = Array.from(this.pluginsMap.values());
			yield this.cleanup(), yield this.initAudioNodes();
			for (let t of e) yield this.addPlugin(t);
			yield this.updateProcessedTrack();
		});
	}
	initAudioNodes() {
		return I(this, null, function* () {
			if (this.audioContext) {
				let e = new MediaStream([this.hmsTrack.nativeTrack]);
				this.sourceNode = this.audioContext.createMediaStreamSource(e), this.destinationNode || (this.destinationNode = this.audioContext.createMediaStreamDestination(), this.outputTrack = this.destinationNode.stream.getAudioTracks()[0]);
			}
		});
	}
	updateProcessedTrack() {
		return I(this, null, function* () {
			try {
				yield this.hmsTrack.setProcessedTrack(this.outputTrack);
			} catch (e) {
				throw L.e(this.TAG, "error in setting processed track", e), e;
			}
		});
	}
	processPlugin(e) {
		return I(this, null, function* () {
			try {
				let t = yield e.processAudioTrack(this.audioContext, this.prevAudioNode || this.sourceNode);
				this.prevAudioNode && this.prevAudioNode.connect(t), this.prevAudioNode = t;
			} catch (t) {
				let n = e.getName();
				L.e(this.TAG, `error in processing plugin ${n}`, t), yield this.removePluginInternal(e);
			}
		});
	}
	connectToDestination() {
		return I(this, null, function* () {
			try {
				this.prevAudioNode && this.destinationNode && this.prevAudioNode.context === this.destinationNode.context && this.prevAudioNode.connect(this.destinationNode);
			} catch (e) {
				L.e(this.TAG, "error in connecting to destination node", e);
			}
		});
	}
	removePluginInternal(e) {
		return I(this, null, function* () {
			let t = e.getName?.call(e);
			if (!this.pluginsMap.get(t)) {
				L.w(this.TAG, `plugin - ${t} not found to remove.`);
				return;
			}
			L.i(this.TAG, `removing plugin ${t}`), this.pluginsMap.delete(t), e.stop(), this.analytics.removed(t);
		});
	}
}, za = [
	"init_response_time",
	"ws_connect_time",
	"on_policy_change_time",
	"local_audio_track_time",
	"local_video_track_time",
	"peer_list_time",
	"room_state_time",
	"join_response_time"
], Ba = class {
	constructor() {
		this.eventPerformanceMeasures = {};
	}
	start(e) {
		try {
			typeof performance < "u" && performance.mark && performance.mark(e);
		} catch (t) {
			L.w("[AnalyticsTimer]", `Error marking performance for event ${e}`, { error: t });
		}
	}
	end(e) {
		try {
			typeof performance < "u" && performance.measure && (this.eventPerformanceMeasures[e] = performance.measure(e, e), L.d("[HMSPerformanceTiming]", e, this.eventPerformanceMeasures[e]?.duration));
		} catch (t) {
			L.w("[AnalyticsTimer]", `Error in measuring performance for event ${e}`, { error: t });
		}
	}
	getTimeTaken(e) {
		return this.eventPerformanceMeasures[e]?.duration;
	}
	getTimes(...e) {
		return [...za, ...e].reduce((e, t) => F(P({}, e), { [t]: this.getTimeTaken(t) }), {});
	}
	cleanup() {
		this.eventPerformanceMeasures = {};
	}
};
function Va(e, t) {
	let n = e.toLowerCase(), r = B.TracksErrors.GenericTrack("TRACK", e);
	return n.includes("device not found") ? r = B.TracksErrors.DeviceNotAvailable("TRACK", t, e) : n.includes("permission denied") && (r = B.TracksErrors.CantAccessCaptureDevice("TRACK", t, e)), r;
}
function Ha(e, t = "") {
	if (dr.browserDetails.browser === "chrome" && e.name === "NotAllowedError" && e.message.includes("denied by system")) return B.TracksErrors.SystemDeniedPermission("TRACK", t, e.message);
	if (dr.browserDetails.browser === "firefox" && e.name === "NotFoundError") {
		let n = B.TracksErrors.SystemDeniedPermission("TRACK", t, e.message);
		return n.description = `Capture device is either blocked at Operating System level or not available - ${t}`, n;
	}
	switch (e.name) {
		case "OverconstrainedError": return B.TracksErrors.OverConstrained("TRACK", t, e.constraint);
		case "NotAllowedError": return B.TracksErrors.CantAccessCaptureDevice("TRACK", t, e.message);
		case "NotFoundError": return B.TracksErrors.DeviceNotAvailable("TRACK", t, e.message);
		case "NotReadableError": return B.TracksErrors.DeviceInUse("TRACK", t, e.message);
		case "TypeError": return B.TracksErrors.NothingToReturn("TRACK", e.message);
		default: return Va(e.message, t);
	}
}
function Ua(e, t) {
	let n = Ha(e, t);
	return n.addNativeError(e), n;
}
var Wa = ((e) => (e.SIP = "sip", e.REGULAR = "regular", e))(Wa || {}), Ga = ((e) => (e.NONE = "none", e.INITIALISED = "initialised", e.STARTED = "started", e.PAUSED = "paused", e.RESUMED = "resumed", e.STOPPED = "stopped", e.FAILED = "failed", e))(Ga || {}), Ka = ((e) => (e.DVR = "dvr", e.NO_DVR = "no-dvr", e))(Ka || {}), qa = ((e) => (e.REGULAR = "regular", e.SCREEN = "screen", e.COMPOSITE = "composite", e))(qa || {}), Ja = ((e) => (e.INITIALISED = "initialised", e.STARTED = "started", e.STOPPED = "stopped", e.FAILED = "failed", e))(Ja || {}), Ya = ((e) => (e.CAPTION = "caption", e))(Ya || {}), Xa = {
	f: "high",
	h: "medium",
	q: "low"
}, Za = ((e) => (e.VOICE = "voice", e.MUSIC = "music", e))(Za || {}), Qa = ((e) => (e.videoInput = "videoInput", e.audioInput = "audioInput", e.audioOutput = "audioOutput", e))(Qa || {}), $a = class {
	constructor() {
		this._volume = 1, this._codec = "opus", this._maxBitrate = 32, this._deviceId = "default", this._audioMode = "voice", this._advanced = [
			{ autoGainControl: { exact: !0 } },
			{ noiseSuppression: { exact: !0 } },
			{ highpassFilter: { exact: !0 } },
			{ audioMirroring: { exact: !0 } }
		];
	}
	volume(e) {
		if (!(0 <= e && e <= 1)) throw Error("volume can only be in range [0.0, 1.0]");
		return this._volume = e, this;
	}
	codec(e) {
		return this._codec = e, this;
	}
	maxBitrate(e) {
		if (e && e <= 0) throw Error("maxBitrate should be >= 1");
		return this._maxBitrate = this._audioMode === "music" ? 320 : e, this;
	}
	deviceId(e) {
		return this._deviceId = e, this;
	}
	audioMode(e = "voice") {
		return this._audioMode = e, this._audioMode === "music" ? this._maxBitrate = 320 : this._maxBitrate = 32, this;
	}
	advanced(e) {
		return this._advanced = e, this;
	}
	build() {
		return new eo(this._volume, this._codec, this._maxBitrate, this._deviceId, this._advanced, this._audioMode);
	}
}, eo = class {
	constructor(e, t, n, r, i, a) {
		this.volume = e, this.codec = t, this.maxBitrate = n, this.deviceId = r, this.advanced = i, this.audioMode = a, this.audioMode === "music" ? this.maxBitrate = 320 : this.maxBitrate = 32;
	}
	toConstraints() {
		return {
			deviceId: this.deviceId === "default" ? this.deviceId : { exact: this.deviceId },
			advanced: this.audioMode === "music" ? [] : this.advanced
		};
	}
	toAnalyticsProperties() {
		return {
			audio_bitrate: this.maxBitrate,
			audio_codec: this.codec
		};
	}
}, to = class {
	constructor() {
		this._width = 320, this._height = 180, this._codec = "vp8", this._maxFramerate = 30, this._maxBitrate = 150, this._advanced = [];
	}
	setWidth(e) {
		return this._width = e, this;
	}
	setHeight(e) {
		return this._height = e, this;
	}
	codec(e) {
		return this._codec = e, this;
	}
	maxFramerate(e) {
		if (e && e <= 0) throw Error("maxFramerate should be >= 1");
		return this._maxFramerate = e, this;
	}
	maxBitrate(e, t = !0) {
		if (typeof e == "number" && e <= 0) throw Error("maxBitrate should be >= 1");
		return this._maxBitrate = e, !this._maxBitrate && t && (this._maxBitrate = 15e4), this;
	}
	deviceId(e) {
		return this._deviceId = e, this;
	}
	advanced(e) {
		return this._advanced = e, this;
	}
	facingMode(e) {
		return this._facingMode = e, this;
	}
	build() {
		return new no(this._width, this._height, this._codec, this._maxFramerate, this._deviceId, this._advanced, this._maxBitrate, this._facingMode);
	}
}, no = class {
	constructor(e, t, n, r, i, a, o, s) {
		this.width = e, this.height = t, this.codec = n, this.maxFramerate = r, this.maxBitrate = o, this.deviceId = i, this.advanced = a, this.facingMode = s;
	}
	toConstraints(e) {
		let t = "ideal";
		e && (t = "max");
		let n = this.improviseConstraintsAspect();
		return {
			width: { [t]: n.width },
			height: { [t]: n.height },
			frameRate: this.maxFramerate,
			deviceId: this.deviceId === "default" ? this.deviceId : { exact: this.deviceId },
			facingMode: this.facingMode
		};
	}
	toAnalyticsProperties() {
		return {
			width: this.width,
			height: this.height,
			video_bitrate: this.maxBitrate,
			framerate: this.maxFramerate,
			video_codec: this.codec,
			facingMode: this.facingMode
		};
	}
	improviseConstraintsAspect() {
		return ia() && this.height && this.width && this.height > this.width ? {
			width: this.height,
			height: this.width
		} : {
			width: this.width,
			height: this.height
		};
	}
}, ro = class {
	constructor() {
		this._video = new to().build(), this._audio = new $a().build(), this._screen = new to().build(), this._simulcast = !1;
	}
	video(e) {
		return this._video = e, this;
	}
	audio(e) {
		return this._audio = e, this;
	}
	screen(e) {
		return this._screen = e, this;
	}
	simulcast(e) {
		return this._simulcast = e, this;
	}
	build() {
		if (this._audio === null && this._video === null) throw B.TracksErrors.NothingToReturn("TRACK");
		if (this._video === null && this._simulcast) throw B.TracksErrors.InvalidVideoSettings("TRACK", "Cannot enable simulcast when no video settings are provided");
		return new io(this._video, this._audio, this._simulcast, this._screen || void 0);
	}
}, io = class {
	constructor(e, t, n, r = null) {
		this.video = e, this.audio = t, this.simulcast = n, this.screen = r;
	}
	toAnalyticsProperties() {
		let e = {
			audio_enabled: this.audio !== null,
			video_enabled: this.video !== null
		};
		return this.audio && (e = P(P({}, this.audio.toAnalyticsProperties()), e)), this.video && (e = P(P({}, this.video.toAnalyticsProperties()), e)), e;
	}
}, ao = 32e3, oo = {
	audioContext: null,
	getAudioContext() {
		return this.audioContext ||= ca ? new AudioContext() : new AudioContext({ sampleRate: ao }), this.audioContext;
	},
	resumeContext() {
		return I(this, null, function* () {
			try {
				return yield this.getAudioContext().resume();
			} catch (e) {
				L.e("AudioContext", e);
			}
		});
	}
}, so = ((e) => (e.SPEAKERPHONE = "SPEAKERPHONE", e.WIRED = "WIRED", e.BLUETOOTH = "BLUETOOTH", e.EARPIECE = "EARPIECE", e))(so || {}), co = (e) => {
	if (!e) return L.w("[DeviceManager]:", "No device label provided"), "SPEAKERPHONE";
	let t = e.toLowerCase();
	return t.includes("speakerphone") ? "SPEAKERPHONE" : t.includes("wired") ? "WIRED" : /airpods|buds|wireless|bluetooth/gi.test(t) ? "BLUETOOTH" : t.includes("earpiece") ? "EARPIECE" : "SPEAKERPHONE";
}, lo = {
	isAudioMuted: !1,
	isVideoMuted: !1,
	audioInputDeviceId: "default",
	audioOutputDeviceId: "default",
	videoDeviceId: "default",
	audioMode: "voice"
}, uo, fo, po = class e {
	constructor(e, t, n, r, i) {
		this.store = e, this.observer = t, this.deviceManager = n, this.eventBus = r, this.analyticsTimer = i, this.TAG = "[LocalTrackManager]", this.setScreenCaptureHandleConfig();
	}
	getTracksToPublish() {
		return I(this, arguments, function* (e = lo) {
			let t = this.getAVTrackSettings(e);
			if (!t) return [];
			let n = !!t.audio, r = !!t.video, i = [], { videoTrack: a, audioTrack: o } = yield this.updateCurrentLocalTrackSettings(t), s = a?.stream || o?.stream, c = !!(a && this.store.getTrackById(a.trackId)), l = !!(o && this.store.getTrackById(o.trackId));
			if (c && l) return [];
			let u = {
				audio: n && !o && (e.isAudioMuted ? "empty" : !0),
				video: r && !a && (e.isVideoMuted ? "empty" : !0)
			};
			u.audio && this.analyticsTimer.start("local_audio_track_time"), u.video && this.analyticsTimer.start("local_video_track_time");
			try {
				L.d(this.TAG, "Init Local Tracks", { fetchTrackOptions: u }), i = yield this.getLocalTracks(u, t, s);
			} catch (e) {
				i = yield this.retryGetLocalTracks(e, t, u, s);
			}
			return u.audio && this.analyticsTimer.end("local_audio_track_time"), u.video && this.analyticsTimer.end("local_video_track_time"), a && r && !c && i.push(a), o && n && !l && i.push(o), i;
		});
	}
	getLocalTracks() {
		return I(this, arguments, function* (e = {
			audio: !0,
			video: !0
		}, t, n) {
			try {
				let r = yield this.getNativeLocalTracks(e, t);
				return this.createHMSLocalTracks(r, t, n);
			} catch (e) {
				throw this.eventBus.analytics.publish(H.publish({
					devices: this.deviceManager.getDevices(),
					error: e,
					settings: t
				})), e;
			}
		});
	}
	getNativeLocalTracks() {
		return I(this, arguments, function* (e = {
			audio: !1,
			video: !1
		}, t) {
			let n = new io(e.video === !0 ? t.video : null, e.audio === !0 ? t.audio : null, t.simulcast), r = [];
			return (n.audio || n.video) && r.push(...yield this.getAVTracks(n)), r.push(...this.getEmptyTracks(e)), r;
		});
	}
	optimizeScreenShareConstraint(e, t) {
		return I(this, null, function* () {
			var n, r, i;
			if (typeof t.video == "boolean" || !((n = t.video) != null && n.width) || !((r = t.video) != null && r.height)) return;
			let a = this.store.getPublishParams();
			if (!a || !((i = a.allowed) != null && i.includes("screen"))) return;
			let o = document.createElement("video");
			o.srcObject = e, o.addEventListener("loadedmetadata", () => I(this, null, function* () {
				let { videoWidth: n, videoHeight: r } = o, i = a.screen, s = i.width * i.height, c = n / r, l = i.width / i.height;
				if (c > l) {
					let i = t.video, a = c / l, o = Math.sqrt(a);
					n * r > s ? (i.width = n / o, i.height = r / o) : (i.height = r * o, i.width = n * o), yield e.getVideoTracks()[0].applyConstraints(i);
				}
			}));
		});
	}
	getLocalScreen(e, t = !1) {
		return I(this, null, function* () {
			let n = yield this.getOrDefaultScreenshareConfig(e), r = this.getScreenshareSettings(n.videoOnly), i = {
				video: F(P({}, r?.video.toConstraints(!0)), { displaySurface: n.displaySurface }),
				preferCurrentTab: n.preferCurrentTab,
				selfBrowserSurface: n.selfBrowserSurface,
				surfaceSwitching: n.surfaceSwitching,
				systemAudio: n.systemAudio
			};
			if (r != null && r.audio) {
				let e = (r?.audio)?.toConstraints();
				delete e.advanced, i.audio = F(P({}, e), {
					autoGainControl: !1,
					noiseSuppression: !1,
					googAutoGainControl: !1,
					echoCancellation: !1
				});
			} else e != null && e.forceCurrentTab && e.preferCurrentTab && e.cropElement && (i.audio = {
				echoCancellation: !0,
				noiseSuppression: !0
			});
			let a;
			try {
				L.d("retrieving screenshare with ", { config: n }, { constraints: i }), a = yield navigator.mediaDevices.getDisplayMedia(i), t && (yield this.optimizeScreenShareConstraint(a, i));
			} catch (e) {
				L.w(this.TAG, "error in getting screenshare - ", e);
				let t = Ua(e, "screen");
				throw this.eventBus.analytics.publish(H.publish({
					error: t,
					devices: this.deviceManager.getDevices(),
					settings: new io(r?.video, r?.audio, !1)
				})), t;
			}
			let o = [], s = new ls(a), c = a.getVideoTracks()[0], l = new qo(s, c, "screen", this.eventBus, r?.video, this.store.getRoom());
			l.setSimulcastDefinitons(this.store.getSimulcastDefinitionsForPeer(this.store.getLocalPeer(), "screen"));
			try {
				l.isCurrentTab = this.validateCurrentTabCapture(l, n.forceCurrentTab), yield l.cropTo(n.cropTarget);
			} catch (e) {
				throw a.getTracks().forEach((e) => e.stop()), e;
			}
			o.push(l);
			let u = a.getAudioTracks()[0];
			if (u) {
				let e = new Oo(s, u, "screen", this.eventBus, r?.audio, this.store.getRoom());
				o.push(e);
			}
			return L.v(this.TAG, "getLocalScreen", o), o;
		});
	}
	setScreenCaptureHandleConfig(e) {
		var t;
		!((t = navigator.mediaDevices) != null && t.setCaptureHandleConfig) || this.isInIframe() || (e ||= {}, Object.assign(e, {
			handle: tn(),
			exposeOrigin: !1,
			permittedOrigins: [window.location.origin]
		}), L.d("setting capture handle - ", e.handle), navigator.mediaDevices.setCaptureHandleConfig(e), this.captureHandleIdentifier = e.handle);
	}
	validateCurrentTabCapture(e, t) {
		let n = e.getCaptureHandle(), r = !!(this.captureHandleIdentifier && n?.handle === this.captureHandleIdentifier);
		if (t && !r) throw L.e(this.TAG, "current tab was not shared with forceCurrentTab as true"), B.TracksErrors.CurrentTabNotShared();
		return r;
	}
	requestPermissions() {
		return I(this, null, function* () {
			try {
				(yield navigator.mediaDevices.getUserMedia({
					audio: !0,
					video: !0
				})).getTracks().forEach((e) => e.stop());
			} catch (e) {
				L.e(this.TAG, e);
			}
		});
	}
	static getEmptyVideoTrack(e) {
		var t;
		let n = e?.getSettings()?.width || 320, r = e?.getSettings()?.height || 240;
		uo || (uo = document.createElement("canvas"), uo.width = n, uo.height = r, (t = uo.getContext("2d")) == null || t.fillRect(0, 0, n, r)), fo ||= setInterval(() => {
			let e = uo?.getContext("2d");
			e && e.fillRect(0, 0, 1, 1);
		}, 1e3 / 1);
		let i = uo.captureStream(1).getVideoTracks()[0];
		return i.enabled = !1, i;
	}
	static getEmptyAudioTrack() {
		let e = oo.getAudioContext(), t = e.createOscillator(), n = e.createMediaStreamDestination();
		t.connect(n), t.start();
		let r = n.stream.getAudioTracks()[0];
		return r.enabled = !1, r;
	}
	static cleanup() {
		clearInterval(fo), fo = void 0, uo = void 0;
	}
	getAVTracks(e) {
		return I(this, null, function* () {
			let t = {
				audio: e.audio ? e.audio.toConstraints() : !1,
				video: e.video ? e.video.toConstraints() : !1
			};
			try {
				let e = yield navigator.mediaDevices.getUserMedia(t), n = e.getVideoTracks(), r = e.getAudioTracks();
				return this.eventBus.analytics.publish(H.mediaConstraints({
					requestedConstraints: t,
					appliedConstraints: {
						video: n[0]?.getConstraints(),
						audio: r[0]?.getConstraints()
					},
					trackSettings: {
						video: n[0]?.getSettings(),
						audio: r[0]?.getSettings()
					}
				})), n.concat(r);
			} catch (t) {
				yield this.deviceManager.init();
				let n = !!(!this.deviceManager.hasWebcamPermission && e.video), r = !!(!this.deviceManager.hasMicrophonePermission && e.audio);
				throw Ua(t, this.getErrorType(n, r));
			}
		});
	}
	getAVTrackSettings(e) {
		let t = this.getAudioSettings(e), n = this.getVideoSettings(e);
		return !t && !n ? null : new ro().video(n).audio(t).build();
	}
	isInIframe() {
		try {
			return window.self !== window.top;
		} catch {
			return !0;
		}
	}
	retryGetLocalTracks(e, t, n, r) {
		return I(this, null, function* () {
			if (e instanceof z && e.action === "TRACK") {
				this.observer.onFailure(e);
				let i = e.code === R.TracksErrors.OVER_CONSTRAINED, a = e.message.includes("audio"), o = e.message.includes("video");
				if (i) {
					let i = new ro().video(new no()).audio(new eo()).build();
					L.w(this.TAG, "Fetch AV Tracks failed with overconstrained error", { fetchTrackOptions: n }, { error: e });
					try {
						return yield this.getLocalTracks(n, i, r);
					} catch (e) {
						let i = e instanceof z ? e.nativeError : e, a = e;
						if (i?.name === "OverconstrainedError") {
							let e = B.TracksErrors.GenericTrack("TRACK", "Overconstrained error after dropping all constraints");
							e.addNativeError(i), a = e;
						}
						return yield this.retryGetLocalTracks(a, t, n, r);
					}
				}
				n.audio = a ? "empty" : n.audio, n.video = o ? "empty" : n.video, L.w(this.TAG, "Fetch AV Tracks failed", { fetchTrackOptions: n }, e);
				try {
					return yield this.getLocalTracks(n, t, r);
				} catch (e) {
					return L.w(this.TAG, "Fetch empty tacks failed", e), n.audio = n.audio && "empty", n.video = n.video && "empty", this.observer.onFailure(e), yield this.getLocalTracks(n, t, r);
				}
			} else return L.w(this.TAG, "Fetch AV Tracks failed - unknown exception", e), this.observer.onFailure(e), [];
		});
	}
	getErrorType(e, t) {
		return e && t ? "audio, video" : e ? "video" : t ? "audio" : "audio, video";
	}
	getEmptyTracks(t) {
		let n = [];
		return t.audio === "empty" && n.push(e.getEmptyAudioTrack()), t.video === "empty" && n.push(e.getEmptyVideoTrack()), n;
	}
	updateCurrentLocalTrackSettings(e) {
		return I(this, null, function* () {
			let t = this.store.getLocalPeerTracks(), n = t.find((e) => e.type === "video" && e.source === "regular"), r = t.find((e) => e.type === "audio" && e.source === "regular"), i = t.find((e) => e.type === "video" && e.source === "screen");
			e != null && e.video && (yield n?.setSettings(e.video)), e != null && e.audio && (yield r?.setSettings(e.audio));
			let a = this.getScreenshareSettings(!0);
			return a != null && a.video && (yield i?.setSettings(a?.video)), {
				videoTrack: n,
				audioTrack: r
			};
		});
	}
	getAudioSettings(e) {
		var t;
		let n = this.store.getPublishParams();
		if (!n || !((t = n.allowed) != null && t.includes("audio"))) return null;
		let r = (this.store.getLocalPeer()?.audioTrack)?.settings.deviceId || e.audioInputDeviceId;
		return new $a().codec(n.audio.codec).maxBitrate(n.audio.bitRate).deviceId(r || lo.audioInputDeviceId).build();
	}
	getVideoSettings(e) {
		var t;
		let n = this.store.getPublishParams();
		if (!n || !((t = n.allowed) != null && t.includes("video"))) return null;
		let r = (this.store.getLocalPeer()?.videoTrack)?.settings.deviceId || e.videoDeviceId, i = n.video;
		return new to().codec(i.codec).maxBitrate(i.bitRate).maxFramerate(i.frameRate).setWidth(i.width).setHeight(i.height).deviceId(r || lo.videoDeviceId).build();
	}
	getScreenshareSettings(e = !1) {
		var t;
		let n = this.store.getPublishParams();
		if (!n || !((t = n.allowed) != null && t.includes("screen"))) return null;
		let r = n.screen;
		return {
			video: new to().maxBitrate(r.bitRate, !1).codec(r.codec).maxFramerate(r.frameRate).setWidth(r.width).setHeight(r.height).build(),
			audio: e ? void 0 : new $a().build()
		};
	}
	getOrDefaultScreenshareConfig(e) {
		return I(this, null, function* () {
			var t;
			let n = Object.assign({
				videoOnly: !1,
				audioOnly: !1,
				forceCurrentTab: !1,
				preferCurrentTab: !1,
				selfBrowserSurface: "exclude",
				surfaceSwitching: "include",
				systemAudio: "exclude",
				displaySurface: "monitor"
			}, e || {});
			return n.forceCurrentTab && (n.videoOnly = !0, n.preferCurrentTab = !0, n.selfBrowserSurface = "include", n.surfaceSwitching = "exclude"), n.preferCurrentTab && (n.selfBrowserSurface = "include", n.displaySurface = void 0), n.cropElement && (t = window.CropTarget) != null && t.fromElement && (n.cropTarget = yield window.CropTarget.fromElement(n.cropElement)), n;
		});
	}
	createHMSLocalTracks(e, t, n) {
		let r = e.find((e) => e.kind === "video"), i = e.find((e) => e.kind === "audio");
		n ? e.forEach((e) => n?.nativeStream.addTrack(e)) : n = new ls(new MediaStream(e));
		let a = [];
		if (i && t != null && t.audio) {
			let e = new Oo(n, i, "regular", this.eventBus, t.audio, this.store.getRoom());
			a.push(e);
		}
		if (r && t != null && t.video) {
			let e = new qo(n, r, "regular", this.eventBus, t.video, this.store.getRoom());
			e.setSimulcastDefinitons(this.store.getSimulcastDefinitionsForPeer(this.store.getLocalPeer(), "regular")), a.push(e);
		}
		return a;
	}
};
function mo(e) {
	return I(this, null, function* () {
		try {
			let t = e ? e.toConstraints() : !1;
			return (yield navigator.mediaDevices.getUserMedia({ audio: t })).getAudioTracks()[0];
		} catch (e) {
			throw Ua(e, "audio");
		}
	});
}
function ho(e) {
	return I(this, null, function* () {
		try {
			let t = e ? e.toConstraints() : !1;
			return (yield navigator.mediaDevices.getUserMedia({ video: t })).getVideoTracks()[0];
		} catch (e) {
			throw Ua(e, "video");
		}
	});
}
function go(e) {
	return "canvas" in e || e.label === "MediaStreamAudioDestinationNode" || e.label === "";
}
var _o = (e, t) => {
	if (!navigator.permissions) {
		L.d("Permissions API not supported");
		return;
	}
	navigator.permissions.query({ name: e }).then((n) => {
		t(n.state), n.onchange = () => {
			L.d(`${e} permission changed`, n.state), t(n.state);
		};
	}).catch((t) => {
		L.e(`${e} not supported`, t.message);
	});
}, vo = class {
	constructor(e = Infinity) {
		this.capacity = e, this.storage = [];
	}
	size() {
		return this.storage.length;
	}
	toList() {
		return this.storage.slice(0);
	}
	enqueue(e) {
		this.size() === this.capacity && this.dequeue(), this.storage.push(e);
	}
	dequeue() {
		return this.storage.shift();
	}
	aggregate(e) {
		return e(this.storage);
	}
}, yo = "(function workerSetup() {\n  function ticker() {\n    self.postMessage('tick');\n  }\n  self.onmessage = function (event) {\n    const [data, time] = event.data;\n    switch (data) {\n      case 'start':\n        setTimeout(ticker, time);\n        break;\n      default:\n        break;\n    }\n  };\n})()";
function bo(e) {
	if (e < 0) throw Error("`ms` should be a positive integer");
	return new Promise((t) => {
		setTimeout(t, e);
	});
}
function xo(e) {
	if (e < 0) throw Error("`ms` should be a positive integer");
	if (typeof Worker > "u") return bo(e);
	let t = new Worker(URL.createObjectURL(new Blob([yo], { type: "application/javascript" })));
	return t.postMessage(["start", e]), new Promise((e) => {
		t.onmessage = (n) => {
			n.data === "tick" && (e(), t.terminate());
		};
	});
}
function So() {
	if (typeof Worker > "u") return { sleep: (e) => bo(e) };
	let e = new Worker(URL.createObjectURL(new Blob([yo], { type: "application/javascript" })));
	return { sleep: (t) => (e.postMessage(["start", t]), new Promise((t) => {
		e.onmessage = (e) => {
			e.data === "tick" && t();
		};
	})) };
}
function Co(e, t = 300) {
	let n;
	return function(...r) {
		clearTimeout(n), n = void 0;
		let i = this;
		n = setTimeout(() => {
			e.apply(i, r);
		}, t);
	};
}
var wo = 35, To = 5, Eo = class {
	constructor(e, t, n) {
		this.track = e, this.audioLevelEvent = t, this.silenceEvent = n, this.TAG = "[TrackAudioLevelMonitor]", this.audioLevel = 0, this.isMonitored = !1, this.interval = 100, this.historyInterval = 700, this.history = new vo(this.historyInterval / this.interval), this.detectSilence = () => I(this, null, function* () {
			let e = 0;
			for (; this.isMonitored;) {
				if (this.track.enabled) if (this.isSilentThisInstant()) {
					if (e++, e > 50) {
						this.silenceEvent.publish({ track: this.track });
						break;
					}
				} else break;
				yield bo(20);
			}
		});
		try {
			let e = new MediaStream([this.track.nativeTrack]);
			this.analyserNode = this.createAnalyserNodeForStream(e);
			let t = this.analyserNode.frequencyBinCount;
			this.dataArray = new Uint8Array(t);
		} catch (e) {
			L.w(this.TAG, "Unable to initialize AudioContext", e);
		}
	}
	start() {
		this.stop(), this.isMonitored = !0, L.d(this.TAG, "Starting track Monitor", `${this.track}`), this.loop().then(() => L.d(this.TAG, "Stopping track Monitor", `${this.track}`));
	}
	stop() {
		if (!this.analyserNode) {
			L.d(this.TAG, "AudioContext not initialized");
			return;
		}
		this.sendAudioLevel(0), this.isMonitored = !1;
	}
	loop() {
		return I(this, null, function* () {
			for (; this.isMonitored;) this.sendAudioLevel(this.getMaxAudioLevelOverPeriod()), yield bo(this.interval);
		});
	}
	sendAudioLevel(e = 0) {
		if (e = e > wo ? e : 0, Math.abs(this.audioLevel - e) > To) {
			this.audioLevel = e;
			let t = {
				track: this.track,
				audioLevel: this.audioLevel
			};
			this.audioLevelEvent.publish(t);
		}
	}
	getMaxAudioLevelOverPeriod() {
		if (!this.analyserNode) {
			L.d(this.TAG, "AudioContext not initialized");
			return;
		}
		let e = this.calculateAudioLevel();
		return e !== void 0 && this.history.enqueue(e), this.history.aggregate((e) => Math.max(...e));
	}
	calculateAudioLevel() {
		if (!this.analyserNode || !this.dataArray) {
			L.d(this.TAG, "AudioContext not initialized");
			return;
		}
		this.analyserNode.getByteTimeDomainData(this.dataArray);
		let e = .009, t = e;
		for (let e of this.dataArray) t = Math.max(t, (e - 128) / 128);
		let n = (Math.log(e) - Math.log(t)) / Math.log(e);
		return Math.ceil(Math.min(Math.max(n * 100, 0), 100));
	}
	isSilentThisInstant() {
		if (!this.analyserNode || !this.dataArray) {
			L.d(this.TAG, "AudioContext not initialized");
			return;
		}
		return this.analyserNode.getByteTimeDomainData(this.dataArray), this.dataArray.every((e) => e === 128 || e === 0);
	}
	createAnalyserNodeForStream(e) {
		let t = oo.getAudioContext(), n = t.createMediaStreamSource(e), r = t.createAnalyser();
		return r.fftSize = 2048, n.connect(r), r;
	}
};
function Do(e, t) {
	return function(n) {
		return !(0, nn.default)(e[n], t[n]);
	};
}
var Oo = class e extends Ma {
	constructor(e, t, n, r, i = new $a().build(), a) {
		super(e, t, n), this.eventBus = r, this.room = a, this.TAG = "[HMSLocalAudioTrack]", this.tracksCreated = /* @__PURE__ */ new Set(), this.isPublished = !1, this.handleVisibilityChange = () => I(this, null, function* () {
			if (!this.shouldReacquireTrack()) {
				L.d(this.TAG, `visibiltiy: ${document.visibilityState}`, `${this}`);
				return;
			}
			if (document.visibilityState === "hidden") this.eventBus.analytics.publish(this.sendInterruptionEvent({
				started: !0,
				reason: "visibility-change"
			}));
			else {
				if (this.eventBus.analytics.publish(this.sendInterruptionEvent({
					started: !1,
					reason: "visibility-change"
				})), this.permissionState && this.permissionState !== "granted") {
					L.d(this.TAG, "On visibile not replacing track as permission is not granted");
					return;
				}
				L.d(this.TAG, "On visibile replacing track as it is not publishing");
				try {
					yield this.replaceTrackWith(this.settings);
				} catch (e) {
					this.eventBus.error.publish(e);
				}
			}
		}), this.trackPermissions = () => {
			_o("microphone", (e) => {
				this.permissionState = e, this.eventBus.analytics.publish(H.permissionChange(this.type, e)), e === "denied" && this.eventBus.localAudioEnabled.publish({
					enabled: !1,
					track: this
				});
			});
		}, this.handleTrackMute = () => {
			L.d(this.TAG, "muted natively"), this.eventBus.analytics.publish(this.sendInterruptionEvent({
				started: !0,
				reason: "track-muted-natively"
			})), this.eventBus.localAudioEnabled.publish({
				enabled: !1,
				track: this
			});
		}, this.handleTrackUnmute = () => I(this, null, function* () {
			L.d(this.TAG, "unmuted natively"), this.eventBus.analytics.publish(this.sendInterruptionEvent({
				started: !1,
				reason: "track-unmuted-natively"
			}));
			try {
				yield this.setEnabled(this.enabled, !0), this.eventBus.localAudioUnmutedNatively.publish();
			} catch (e) {
				this.eventBus.error.publish(e);
			}
		}), this.replaceSenderTrack = () => I(this, null, function* () {
			if (!this.transceiver || this.transceiver.direction !== "sendonly") {
				L.d(this.TAG, `transceiver for ${this.trackId} not available or not connected yet`);
				return;
			}
			yield this.transceiver.sender.replaceTrack(this.processedTrack || this.nativeTrack);
		}), this.shouldReacquireTrack = () => go(this.nativeTrack) || this.isTrackNotPublishing(), this.handleSettingsChange = (e) => I(this, null, function* () {
			let t = this.stream, n = Do(e, this.settings);
			(n("maxBitrate") || n("audioMode")) && e.maxBitrate && (yield t.setMaxBitrateAndFramerate(this, e)), (n("advanced") || n("audioMode")) && (yield this.replaceTrackWith(e));
		}), this.handleDeviceChange = (e, t = !1) => I(this, null, function* () {
			if (Do(e, this.settings)("deviceId")) {
				this.manuallySelectedDeviceId = t ? this.manuallySelectedDeviceId : e.deviceId, L.d(this.TAG, "device change", "manual selection:", this.manuallySelectedDeviceId, "new device:", e.deviceId), yield this.replaceTrackWith(e);
				let n = this.nativeTrack.getSettings().groupId;
				!t && e.deviceId && (Na.updateSelection("audioInput", {
					deviceId: e.deviceId,
					groupId: n
				}), this.eventBus.deviceChange.publish({
					isUserSelection: !0,
					type: "audioInput",
					selection: {
						deviceId: e.deviceId,
						groupId: n,
						label: this.nativeTrack.label
					}
				}));
			}
		}), e.tracks.push(this), this.addTrackEventListeners(t), this.trackPermissions(), this.settings = i, i.deviceId !== t.getSettings().deviceId && !go(t) && (this.settings = this.buildNewSettings({ deviceId: t.getSettings().deviceId })), this.pluginsManager = new Ra(this, r, a), this.setFirstTrackId(t.id), n === "regular" && document.addEventListener("visibilitychange", this.handleVisibilityChange);
	}
	clone(t) {
		let n = this.nativeTrack.clone();
		t.nativeStream.addTrack(n);
		let r = new e(t, n, this.source, this.eventBus, this.settings, this.room);
		return r.peerId = this.peerId, this.pluginsManager.pluginsMap.size > 0 && this.pluginsManager.pluginsMap.forEach((e) => {
			r.addPlugin(e).catch((t) => L.e(this.TAG, "Plugin add failed while migrating", e, t));
		}), r;
	}
	getManuallySelectedDeviceId() {
		return this.manuallySelectedDeviceId;
	}
	resetManuallySelectedDeviceId() {
		this.manuallySelectedDeviceId = void 0;
	}
	updateTrack(e) {
		return I(this, null, function* () {
			e.enabled = this.enabled, yield this.stream.replaceStreamTrack(this.nativeTrack, e), this.nativeTrack = e, yield this.replaceSenderTrack(), this.audioLevelMonitor && this.initAudioLevelMonitor();
		});
	}
	replaceTrackWith(e) {
		return I(this, null, function* () {
			let t = this.nativeTrack;
			t?.stop(), this.removeTrackEventListeners(t), this.tracksCreated.forEach((e) => e.stop()), this.tracksCreated.clear();
			try {
				let n = yield mo(e);
				this.addTrackEventListeners(n), this.tracksCreated.add(n), this.eventBus.analytics.publish(H.mediaConstraints({
					requestedConstraints: { audio: e.toConstraints() },
					appliedConstraints: { audio: n.getConstraints() },
					trackSettings: { audio: n.getSettings() }
				})), L.d(this.TAG, "replaceTrack, Previous track stopped", t, "newTrack", n), yield this.updateTrack(n);
			} catch (e) {
				let t = e;
				if (t.code === R.TracksErrors.CANT_ACCESS_CAPTURE_DEVICE || t.code === R.TracksErrors.SYSTEM_DENIED_PERMISSION) {
					let e = yield po.getEmptyAudioTrack();
					throw this.addTrackEventListeners(e), this.tracksCreated.add(e), yield this.updateTrack(e), t;
				}
				let n = yield mo(this.settings);
				throw this.addTrackEventListeners(n), this.tracksCreated.add(n), this.eventBus.analytics.publish(H.mediaConstraints({
					requestedConstraints: { audio: this.settings.toConstraints() },
					appliedConstraints: { audio: n.getConstraints() },
					trackSettings: { audio: n.getSettings() }
				})), yield this.updateTrack(n), this.isPublished && this.eventBus.analytics.publish(H.publish({ error: e })), e;
			}
			try {
				yield this.pluginsManager.reprocessPlugins();
			} catch (e) {
				this.eventBus.audioPluginFailed.publish(e);
			}
		});
	}
	setEnabled(t, n = !1) {
		return I(this, null, function* () {
			t === this.enabled && !n || (t && this.shouldReacquireTrack() && (yield this.replaceTrackWith(this.settings)), yield Oi(e.prototype, this, "setEnabled").call(this, t), t && (this.settings = this.buildNewSettings({ deviceId: this.nativeTrack.getSettings().deviceId })), this.eventBus.localAudioEnabled.publish({
				enabled: t,
				track: this
			}));
		});
	}
	isPublishedTrackId(e) {
		return this.publishedTrackId === e;
	}
	setSettings(e, t = !1) {
		return I(this, null, function* () {
			let n = this.buildNewSettings(e);
			if (go(this.nativeTrack)) {
				this.settings = n;
				return;
			}
			yield this.handleDeviceChange(n, t), yield this.handleSettingsChange(n), this.settings = n;
		});
	}
	getPlugins() {
		return this.pluginsManager.getPlugins();
	}
	addPlugin(e) {
		return I(this, null, function* () {
			return this.pluginsManager.addPlugin(e);
		});
	}
	removePlugin(e) {
		return I(this, null, function* () {
			return this.pluginsManager.removePlugin(e);
		});
	}
	validatePlugin(e) {
		return this.pluginsManager.validatePlugin(e);
	}
	setProcessedTrack(e) {
		return I(this, null, function* () {
			e ? e !== this.processedTrack && (this.processedTrack = e) : this.processedTrack = void 0, yield this.replaceSenderTrack();
		});
	}
	initAudioLevelMonitor() {
		this.audioLevelMonitor && this.destroyAudioLevelMonitor(), L.d(this.TAG, "Monitor Audio Level for", this, this.getMediaTrackSettings().deviceId), this.audioLevelMonitor = new Eo(this, this.eventBus.trackAudioLevelUpdate, this.eventBus.localAudioSilence), this.audioLevelMonitor.start(), this.audioLevelMonitor.detectSilence();
	}
	destroyAudioLevelMonitor() {
		var e;
		(e = this.audioLevelMonitor) == null || e.stop(), this.audioLevelMonitor = void 0;
	}
	cleanup() {
		return I(this, null, function* () {
			var t;
			Oi(e.prototype, this, "cleanup").call(this), yield this.pluginsManager.cleanup(), yield this.pluginsManager.closeContext(), this.transceiver = void 0, (t = this.processedTrack) == null || t.stop(), this.tracksCreated.forEach((e) => e.stop()), this.tracksCreated.clear(), this.isPublished = !1, this.destroyAudioLevelMonitor(), document.removeEventListener("visibilitychange", this.handleVisibilityChange);
		});
	}
	getTrackIDBeingSent() {
		return this.processedTrack ? this.processedTrack.id : this.nativeTrack.id;
	}
	getTrackBeingSent() {
		return this.processedTrack || this.nativeTrack;
	}
	addTrackEventListeners(e) {
		e.addEventListener("mute", this.handleTrackMute), e.addEventListener("unmute", this.handleTrackUnmute);
	}
	removeTrackEventListeners(e) {
		e.removeEventListener("mute", this.handleTrackMute), e.removeEventListener("unmute", this.handleTrackUnmute);
	}
	buildNewSettings(e) {
		let { volume: t, codec: n, maxBitrate: r, deviceId: i, advanced: a, audioMode: o } = P(P({}, this.settings), e);
		return new eo(t, n, r, i, a, o);
	}
}, ko = class e extends Ma {
	setEnabled(t) {
		return I(this, null, function* () {
			t !== this.enabled && (yield Oi(e.prototype, this, "setEnabled").call(this, t), yield this.subscribeToAudio(t));
		});
	}
}, Ao = class extends ja {
	constructor(e, t, n) {
		if (super(e, t, n), this.type = "video", this.sinkCount = 0, this.handleTrackUnmute = () => {
			this.getSinks().forEach((e) => this.reTriggerPlay({ videoElement: e }));
		}, this.reTriggerPlay = ({ videoElement: e }) => {
			setTimeout(() => {
				e.play().catch((e) => {
					L.w("[HMSVideoTrack]", "failed to play", e.message);
				});
			}, 0);
		}, t.kind !== "video") throw Error("Expected 'track' kind = 'video'");
	}
	setVideoHandler(e) {
		this.videoHandler = e;
	}
	hasSinks() {
		return this.sinkCount > 0;
	}
	getSinks() {
		return this.videoHandler.getVideoElements() || [];
	}
	attach(e) {
		this.videoHandler.addVideoElement(e);
	}
	detach(e) {
		this.videoHandler.removeVideoElement(e);
	}
	addSink(e) {
		this.addSinkInternal(e, this.nativeTrack);
	}
	removeSink(e) {
		e.srcObject !== null && (e.srcObject = null, this.reduceSinkCount());
	}
	cleanup() {
		super.cleanup(), this.videoHandler.cleanup();
	}
	addSinkInternal(e, t) {
		let n = e.srcObject;
		if (n !== null && n instanceof MediaStream) {
			let e = n.getVideoTracks()[0];
			if (e?.id === t.id) {
				if (!e.muted && e.readyState === "live") return;
				this.reduceSinkCount();
			} else this.reduceSinkCount();
		}
		this.addPropertiesToElement(e), e.srcObject = new MediaStream([t]), this.reTriggerPlay({ videoElement: e }), this.sinkCount++;
	}
	reduceSinkCount() {
		this.sinkCount > 0 && this.sinkCount--;
	}
	addPropertiesToElement(e) {
		sa || (e.autoplay = !0), e.playsInline = !0, e.muted = !0, e.controls = !1;
	}
}, jo = {
	none: -1,
	low: 0,
	medium: 1,
	high: 2
}, Mo = .5, No = (e, t) => {
	let n = "high", r = t.width > t.height ? "width" : "height", i = [...e].sort((e, t) => jo[e.layer] - jo[t.layer]), a = t[r] * ((window == null ? void 0 : window.devicePixelRatio) || 1);
	for (let e = 0; e < i.length; e++) {
		let { resolution: t, layer: o } = i[e], s = t[r];
		if (a <= s) {
			n = o;
			break;
		} else {
			let t = i[e + 1], c = t ? t.resolution[r] : Infinity;
			if ((a - s) / (c - s) < Mo) {
				n = o;
				break;
			}
		}
	}
	return n;
}, Po = new class {
	constructor() {
		this.TAG = "[HMSIntersectionObserverWrapper]", this.listeners = /* @__PURE__ */ new WeakMap(), this.observe = (e, t) => {
			var n;
			this.createObserver(), this.unobserve(e), (n = this.intersectionObserver) == null || n.observe(e), this.listeners.set(e, t);
		}, this.unobserve = (e) => {
			var t;
			(t = this.intersectionObserver) == null || t.unobserve(e), this.listeners.delete(e);
		}, this.createObserver = () => {
			this.isSupported() && !this.intersectionObserver && (this.intersectionObserver = new IntersectionObserver(this.handleIntersection));
		}, this.handleIntersection = (e) => {
			var t;
			for (let n of e) (t = this.listeners.get(n.target)) == null || t(n);
		}, this.createObserver();
	}
	isSupported() {
		let e = $i && window.IntersectionObserver !== void 0;
		return e || L.w(this.TAG, "IntersectionObserver is not supported, fallback will be used instead"), e;
	}
}(), Fo = new class {
	constructor() {
		this.TAG = "[HMSResizeObserverWrapper]", this.listeners = /* @__PURE__ */ new WeakMap(), this.observe = (e, t, n = { box: "border-box" }) => {
			var r;
			this.createObserver(), this.unobserve(e), (r = this.resizeObserver) == null || r.observe(e, n), this.listeners.set(e, t);
		}, this.unobserve = (e) => {
			var t;
			(t = this.resizeObserver) == null || t.unobserve(e), this.listeners.delete(e);
		}, this.createObserver = () => {
			this.isSupported() && !this.resizeObserver && (this.resizeObserver = new ResizeObserver(Co(this.handleResize, 300)));
		}, this.handleResize = (e) => {
			var t;
			for (let n of e) (t = this.listeners.get(n.target)) == null || t(n);
		}, this.createObserver();
	}
	isSupported() {
		let e = $i && window.ResizeObserver !== void 0;
		return e || L.w(this.TAG, "Resize Observer is not supported"), e;
	}
}(), Io = class {
	constructor(e) {
		this.track = e, this.TAG = "[VideoElementManager]", this.videoElements = /* @__PURE__ */ new Set(), this.entries = /* @__PURE__ */ new WeakMap(), this.handleIntersection = (e) => I(this, null, function* () {
			let t = getComputedStyle(e.target).visibility === "visible";
			this.track.enabled && (e.isIntersecting && t || !document.contains(e.target)) ? (L.d(this.TAG, "add sink intersection", `${this.track}`, this.id), this.entries.set(e.target, e.boundingClientRect), yield this.selectMaxLayer(), yield this.track.addSink(e.target)) : (L.d(this.TAG, "remove sink intersection", `${this.track}`, this.id), yield this.track.removeSink(e.target));
		}), this.handleResize = (e) => I(this, null, function* () {
			!this.track.enabled || !(this.track instanceof ss) || (this.entries.set(e.target, e.contentRect), yield this.selectMaxLayer());
		}), this.cleanup = () => {
			this.videoElements.forEach((e) => {
				var t, n;
				e.srcObject = null, (t = this.resizeObserver) == null || t.unobserve(e), (n = this.intersectionObserver) == null || n.unobserve(e);
			}), this.videoElements.clear(), this.resizeObserver = void 0, this.intersectionObserver = void 0;
		}, this.init(), this.id = tn();
	}
	updateSinks(e = !1) {
		for (let t of this.videoElements) this.track.enabled ? this.track.addSink(t, e) : this.track.removeSink(t, e);
	}
	addVideoElement(e) {
		return I(this, null, function* () {
			var t;
			this.videoElements.has(e) || (this.init(), L.d(this.TAG, `Adding video element for ${this.track}`, this.id), this.videoElements.add(e), this.videoElements.size >= 10 && L.w(this.TAG, `${this.track}`, `the track is added to ${this.videoElements.size} video elements, while this may be intentional, it's likely that there is a bug leading to unnecessary creation of video elements in the UI`), (t = this.intersectionObserver) != null && t.isSupported() ? this.intersectionObserver.observe(e, this.handleIntersection) : $i && (this.isElementInViewport(e) ? this.track.addSink(e) : this.track.removeSink(e)), this.resizeObserver ? this.resizeObserver.observe(e, this.handleResize) : this.track instanceof ss && (yield this.track.setPreferredLayer(this.track.getPreferredLayer())));
		});
	}
	removeVideoElement(e) {
		var t, n;
		this.track.removeSink(e), this.videoElements.delete(e), this.entries.delete(e), (t = this.resizeObserver) == null || t.unobserve(e), (n = this.intersectionObserver) == null || n.unobserve(e), L.d(this.TAG, `Removing video element for ${this.track}`);
	}
	getVideoElements() {
		return Array.from(this.videoElements);
	}
	init() {
		$i && (this.resizeObserver = Fo, this.intersectionObserver = Po);
	}
	isElementInViewport(e) {
		let t = e.offsetTop, n = e.offsetLeft, r = e.offsetWidth, i = e.offsetHeight, { hidden: a } = e, { opacity: o, display: s } = getComputedStyle(e);
		for (; e.offsetParent;) e = e.offsetParent, t += e.offsetTop, n += e.offsetLeft;
		return t < window.pageYOffset + window.innerHeight && n < window.pageXOffset + window.innerWidth && t + i > window.pageYOffset && n + r > window.pageXOffset && !a && (o === "" ? !0 : parseFloat(o) > 0) && s !== "none";
	}
	selectMaxLayer() {
		return I(this, null, function* () {
			if (!(this.track instanceof ss) || this.videoElements.size === 0) return;
			let e;
			for (let t of this.videoElements) {
				let n = this.entries.get(t);
				if (!n) continue;
				let { width: r, height: i } = n;
				if (r === 0 || i === 0) continue;
				let a = No(this.track.getSimulcastDefinitions(), {
					width: r,
					height: i
				});
				e = e ? jo[a] > jo[e] ? a : e : a;
			}
			e && (L.d(this.TAG, `selecting max layer ${e} for the track`, `${this.track}`), yield this.track.setPreferredLayer(e));
		});
	}
}, Lo = ((e) => (e.TRANSFORM = "TRANSFORM", e.ANALYZE = "ANALYZE", e))(Lo || {}), Ro = ((e) => (e["2D"] = "2d", e.WEBGL = "webgl", e.WEBGL2 = "webgl2", e))(Ro || {}), zo = class {
	constructor() {
		this.total = 0, this.count = 0;
	}
	add(e) {
		this.count++, this.total += e;
	}
	getAvg() {
		return Math.floor(this.total / this.count);
	}
	reset() {
		this.total = 0, this.count = 0;
	}
}, Bo = class {
	constructor(e) {
		this.eventBus = e, this.TAG = "[VideoPluginsAnalytics]", this.initTime = {}, this.preProcessingAvgs = new zo(), this.addedTimestamps = {}, this.processingAvgs = {}, this.pluginAdded = {}, this.pluginInputFrameRate = {}, this.pluginFrameRate = {};
	}
	added(e, t, n) {
		this.pluginAdded[e] = !0, this.addedTimestamps[e] = Date.now(), this.initTime[e] = 0, this.processingAvgs[e] = new zo(), t && (this.pluginInputFrameRate[e] = t, this.pluginFrameRate[e] = n || t), this.eventBus.analytics.publish(Ia.added(e, this.addedTimestamps[e]));
	}
	removed(e) {
		if (this.pluginAdded[e]) {
			let t = {
				pluginName: e,
				duration: Math.floor((Date.now() - this.addedTimestamps[e]) / 1e3),
				loadTime: this.initTime[e],
				avgPreProcessingTime: this.preProcessingAvgs.getAvg(),
				avgProcessingTime: this.processingAvgs[e]?.getAvg(),
				inputFrameRate: this.pluginInputFrameRate[e],
				pluginFrameRate: this.pluginFrameRate[e]
			};
			this.eventBus.analytics.publish(Ia.stats(t)), this.clean(e);
		}
	}
	failure(e, t) {
		this.pluginAdded[e] && (this.eventBus.analytics.publish(Ia.failure(e, t)), this.clean(e));
	}
	initWithTime(e, t) {
		return I(this, null, function* () {
			if (this.initTime[e]) {
				L.i(this.TAG, `Plugin Already loaded ${e}, time it took: ${this.initTime[e]}`);
				return;
			}
			let n;
			try {
				n = yield this.timeInMs(t), L.i(this.TAG, `Time taken for Plugin ${e} initialization : ${n}`);
			} catch (t) {
				let n = B.MediaPluginErrors.InitFailed("VIDEO_PLUGINS", `failed during initialization of plugin${t.message || t}`);
				throw L.e(this.TAG, n), this.failure(e, n), n;
			}
			n && (this.initTime[e] = n);
		});
	}
	preProcessWithTime(e) {
		return I(this, null, function* () {
			let t = yield this.timeInMs(e);
			this.preProcessingAvgs.add(t);
		});
	}
	processWithTime(e, t) {
		return I(this, null, function* () {
			var n;
			let r;
			try {
				r = yield this.timeInMs(t);
			} catch (t) {
				let n = B.MediaPluginErrors.ProcessingFailed("VIDEO_PLUGINS", `Failed during processing of plugin${t.message || t}`);
				throw L.e(this.TAG, n), this.failure(e, n), n;
			}
			r && ((n = this.processingAvgs[e]) == null || n.add(r));
		});
	}
	timeInMs(e) {
		return I(this, null, function* () {
			let t = Date.now();
			return yield e(), Math.floor(Date.now() - t);
		});
	}
	clean(e) {
		delete this.addedTimestamps[e], delete this.initTime[e], delete this.processingAvgs[e], delete this.pluginAdded[e], delete this.pluginInputFrameRate[e], delete this.pluginFrameRate[e];
	}
}, Vo = 24, Ho = 320, Uo = 240, Wo = class {
	constructor(e, t) {
		this.TAG = "[VideoPluginsManager]", this.pluginsLoopRunning = !1, this.pluginsLoopState = "paused", this.pluginAddInProgress = !1, this.reusableWorker = So(), this.hmsTrack = e, this.pluginsMap = /* @__PURE__ */ new Map(), this.pluginNumFramesToSkip = {}, this.pluginNumFramesSkipped = {}, this.analytics = new Bo(t), this.canvases = [];
	}
	getPlugins() {
		return Array.from(this.pluginsMap.keys());
	}
	addPlugin(e, t) {
		return I(this, null, function* () {
			if (this.pluginAddInProgress) {
				let t = e.getName?.call(e);
				if (!t || t === "") {
					L.w("no name provided by the plugin");
					return;
				}
				let n = B.MediaPluginErrors.AddAlreadyInProgress("VIDEO_PLUGINS", "Add Plugin is already in Progress");
				throw this.analytics.failure(t, n), L.w("can't add another plugin when previous add is in progress"), n;
			}
			this.pluginAddInProgress = !0;
			try {
				yield this.addPluginInternal(e, t);
			} finally {
				this.pluginAddInProgress = !1;
			}
		});
	}
	addPluginInternal(e, t) {
		return I(this, null, function* () {
			let n = e.getName?.call(e);
			if (!n || n === "") {
				L.w("no name provided by the plugin");
				return;
			}
			if (this.pluginsMap.has(n)) {
				L.w(this.TAG, `plugin - ${e.getName()} already added.`);
				return;
			}
			let r = this.hmsTrack.getMediaTrackSettings().frameRate || Vo, i = 0;
			t && t > 0 ? (L.i(this.TAG, `adding plugin ${e.getName()} with framerate ${t}`), t < r && (i = Math.ceil(r / t) - 1), this.analytics.added(n, r, t)) : (L.i(this.TAG, `adding plugin ${e.getName()}`), this.analytics.added(n, r)), L.i(this.TAG, "numFrames to skip processing", i), this.pluginNumFramesToSkip[n] = i, this.pluginNumFramesSkipped[n] = i, this.validateAndThrow(n, e);
			try {
				if (yield this.analytics.initWithTime(n, () => I(this, null, function* () {
					return yield e.init();
				})), this.pluginsMap.set(n, e), this.pluginsMap.size + 1 > this.canvases.length) for (let e = this.canvases.length; e <= this.pluginsMap.size; e++) this.canvases[e] = document.createElement("canvas");
				yield this.startPluginsLoop(e.getContextType?.call(e));
			} catch (t) {
				throw L.e(this.TAG, "failed to add plugin", t), yield this.removePlugin(e), t;
			}
		});
	}
	validatePlugin(e) {
		return e.checkSupport();
	}
	validateAndThrow(e, t) {
		let n = this.validatePlugin(t);
		if (n.isSupported) L.i(this.TAG, `plugin is supported,- ${t.getName()}`);
		else {
			let t;
			switch (n.errType) {
				case "PLATFORM_NOT_SUPPORTED": throw t = B.MediaPluginErrors.PlatformNotSupported("VIDEO_PLUGINS", "platform not supported, see docs"), this.analytics.failure(e, t), t;
				case "DEVICE_NOT_SUPPORTED": throw t = B.MediaPluginErrors.DeviceNotSupported("VIDEO_PLUGINS", "video device not supported, see docs"), this.analytics.failure(e, t), t;
			}
		}
	}
	removePlugin(e) {
		return I(this, null, function* () {
			let t = e.getName();
			if (!this.pluginsMap.get(t)) {
				L.w(this.TAG, `plugin - ${t} not found to remove.`);
				return;
			}
			L.i(this.TAG, `removing plugin ${t}`), this.removePluginEntry(t), this.pluginsMap.size === 0 && (L.i(this.TAG, "No plugins left, stopping plugins loop"), yield this.stopPluginsLoop()), e.stop(), this.analytics.removed(t);
		});
	}
	removePluginEntry(e) {
		this.pluginsMap.delete(e), this.pluginNumFramesToSkip[e] && delete this.pluginNumFramesToSkip[e], this.pluginNumFramesSkipped[e] && delete this.pluginNumFramesSkipped[e];
	}
	waitForRestart() {
		return I(this, null, function* () {
			if (!(!this.pluginsLoopRunning || this.pluginsLoopState === "running")) for (; this.pluginsLoopState === "paused";) yield xo(100);
		});
	}
	cleanup() {
		return I(this, null, function* () {
			var e;
			for (let e of this.pluginsMap.values()) yield this.removePlugin(e);
			(e = this.outputTrack) == null || e.stop();
		});
	}
	initElementsAndStream(e) {
		this.inputCanvas ||= document.createElement("canvas"), this.outputCanvas = document.createElement("canvas"), this.inputVideo ||= document.createElement("video"), this.inputCanvas.getContext("2d"), this.outputCanvas.getContext(e || "2d");
		let t = this.outputCanvas.captureStream();
		this.outputTrack = t.getVideoTracks()[0];
	}
	startPluginsLoop(e) {
		return I(this, null, function* () {
			if (!this.pluginsLoopRunning) {
				this.initElementsAndStream(e), this.pluginsLoopRunning = !0;
				try {
					yield this.hmsTrack.setProcessedTrack(this.outputTrack);
				} catch (e) {
					throw this.pluginsLoopRunning = !1, L.e(this.TAG, "error in setting processed track", e), e;
				}
				this.pluginsLoop().then(() => {
					L.d(this.TAG, "processLoop stopped");
				});
			}
		});
	}
	stopPluginsLoop() {
		return I(this, null, function* () {
			var e;
			this.pluginsLoopRunning = !1, yield this.hmsTrack.setProcessedTrack(void 0), this.resetCanvases(), (e = this.outputTrack) == null || e.stop(), this.inputVideo &&= (this.inputVideo.srcObject = null, void 0);
		});
	}
	pluginsLoop() {
		return I(this, null, function* () {
			for (; this.pluginsLoopRunning;) {
				let e = this.hmsTrack.getMediaTrackSettings().frameRate || Vo, t = Math.floor(1e3 / e);
				if (!this.hmsTrack.enabled || this.hmsTrack.nativeTrack.readyState === "ended") {
					this.pluginsLoopState === "running" && this.resetCanvases(), this.pluginsLoopState = "paused", yield this.reusableWorker.sleep(t);
					continue;
				}
				let n = 0;
				try {
					yield this.analytics.preProcessWithTime(() => I(this, null, function* () {
						return yield this.doPreProcessing();
					}));
					let e = Date.now();
					yield this.processFramesThroughPlugins(), n = Math.floor(Date.now() - e), n > t && (n = t);
				} catch (e) {
					L.e(this.TAG, "error in plugins loop", e);
				}
				this.pluginsLoopState = "running", yield this.reusableWorker.sleep(t - n);
			}
		});
	}
	doPreProcessing() {
		return I(this, null, function* () {
			yield this.addTrackToVideo(), yield this.updateInputCanvas();
		});
	}
	processFramesThroughPlugins() {
		return I(this, null, function* () {
			this.canvases[0] = this.inputCanvas;
			let e = 0;
			for (let t of this.pluginsMap.values()) {
				let n = t.getName();
				if (t) {
					try {
						let r = this.checkIfSkipRequired(n);
						if (t.getPluginType() === "TRANSFORM") {
							let i = (e, i) => I(this, null, function* () {
								try {
									yield t.processVideoFrame(e, i, r);
								} catch (e) {
									L.e(this.TAG, `error in processing plugin ${n}`, e);
								}
							});
							if (r) e === this.pluginsMap.size - 1 ? yield i(this.canvases[e], this.outputCanvas) : yield i(this.canvases[e], this.canvases[e + 1]);
							else {
								let t = this.canvases[e], r = this.canvases[e + 1];
								e === this.pluginsMap.size - 1 ? yield this.analytics.processWithTime(n, () => I(this, null, function* () {
									return i(t, this.outputCanvas);
								})) : yield this.analytics.processWithTime(n, () => I(this, null, function* () {
									return i(t, r);
								}));
							}
						} else t.getPluginType() === "ANALYZE" && !r && (yield this.analytics.processWithTime(n, () => I(this, null, function* () {
							return yield t.processVideoFrame(this.inputCanvas);
						})));
					} catch (e) {
						L.e(this.TAG, `error in processing plugin ${n}`, e), yield this.removePlugin(t);
					}
					e++;
				}
			}
		});
	}
	addTrackToVideo() {
		return I(this, null, function* () {
			if (!this.inputVideo) return;
			let e = this.inputVideo.srcObject;
			e !== null && e instanceof MediaStream && e.getVideoTracks()[0]?.id === this.hmsTrack.nativeTrack.id || (this.inputVideo.pause(), this.inputVideo.srcObject = new MediaStream([this.hmsTrack.nativeTrack]), this.inputVideo.muted = !0, this.inputVideo.playsInline = !0, yield this.inputVideo.play());
		});
	}
	updateInputCanvas() {
		return I(this, null, function* () {
			if (!this.inputCanvas || !this.inputVideo) return;
			let { width: e = Ho, height: t = Uo } = this.hmsTrack.getMediaTrackSettings();
			this.inputCanvas.height !== t && (this.inputCanvas.height = t), this.inputCanvas.width !== e && (this.inputCanvas.width = e), this.inputCanvas.getContext("2d").drawImage(this.inputVideo, 0, 0, e, t);
		});
	}
	resetCanvases() {
		if (!this.outputCanvas || !this.inputCanvas) return;
		let e = this.inputCanvas.getContext("2d");
		e && (e.fillStyle = "rgb(0, 0, 0)", e.fillRect(0, 0, this.outputCanvas.width, this.outputCanvas.height)), this.canvases = [];
	}
	checkIfSkipRequired(e) {
		let t = !1;
		return this.pluginNumFramesSkipped[e] < this.pluginNumFramesToSkip[e] ? (this.pluginNumFramesSkipped[e]++, t = !0) : (t = !1, this.pluginNumFramesSkipped[e] = 0), t;
	}
}, Go = class {
	constructor(e, t) {
		this.TAG = "[MediaStreamPluginsManager]", this.plugins = /* @__PURE__ */ new Set(), this.analytics = new Bo(e), this.room = t;
	}
	addPlugins(e) {
		e.forEach((e) => {
			var t;
			switch (e.getName()) {
				case "HMSEffectsPlugin":
					if (!((t = this.room) != null && t.isEffectsEnabled)) {
						let e = "Effects Virtual Background is not enabled for this room";
						if (this.plugins.size === 0) throw Error(e);
						L.w(this.TAG, e);
						return;
					}
					break;
				default:
			}
			this.plugins.add(e);
		});
	}
	removePlugins(e) {
		e.forEach((e) => {
			e.stop(), this.analytics.removed(e.getName()), this.plugins.delete(e);
		});
	}
	applyPlugins(e) {
		let t = e;
		for (let e of this.plugins) {
			let n = e.getName();
			try {
				t = e.apply(t), this.analytics.added(n);
			} catch (e) {
				this.analytics.failure(n, e), L.e("Could not apply plugin", e, n);
			}
		}
		return t;
	}
	getPlugins() {
		return Array.from(this.plugins).map((e) => e.getName());
	}
	cleanup() {
		return I(this, null, function* () {
			this.removePlugins(Array.from(this.plugins));
		});
	}
};
function Ko(e, t) {
	return function(n) {
		return !(0, nn.default)(e[n], t[n]);
	};
}
var qo = class e extends Ao {
	constructor(e, t, n, r, i = new to().build(), a) {
		super(e, t, n), this.eventBus = r, this.room = a, this._layerDefinitions = [], this.TAG = "[HMSLocalVideoTrack]", this.enabledStateBeforeBackground = !1, this.isCurrentTab = !1, this.isPublished = !1, this.replaceSenderTrack = (e) => I(this, null, function* () {
			if (!this.transceiver || this.transceiver.direction !== "sendonly") {
				L.d(this.TAG, `transceiver for ${this.trackId} not available or not connected yet`);
				return;
			}
			yield this.transceiver.sender.replaceTrack(e);
		}), this.buildNewSettings = (e) => {
			let { width: t, height: n, codec: r, maxFramerate: i, maxBitrate: a, deviceId: o, advanced: s, facingMode: c } = P(P({}, this.settings), e);
			return new no(t, n, r, i, o, s, a, c);
		}, this.handleSettingsChange = (e) => I(this, null, function* () {
			let t = this.stream, n = Ko(e, this.settings);
			if (n("maxBitrate") && e.maxBitrate && (yield t.setMaxBitrateAndFramerate(this)), n("width") || n("height") || n("advanced")) if (this.source === "video") {
				let t = yield this.replaceTrackWith(e);
				yield this.replaceSender(t, this.enabled), this.nativeTrack = t, yield this.processPlugins(), this.videoHandler.updateSinks();
			} else yield this.nativeTrack.applyConstraints(e.toConstraints());
		}), this.handleDeviceChange = (e, t = !1) => I(this, null, function* () {
			if (Ko(e, this.settings)("deviceId") && this.source === "regular") {
				if (this.enabled) {
					delete e.facingMode;
					let t = yield this.replaceTrackWith(e);
					yield this.replaceSender(t, this.enabled), this.nativeTrack = t, yield this.processPlugins(), this.videoHandler.updateSinks();
				}
				let n = this.nativeTrack.getSettings().groupId;
				!t && e.deviceId && (Na.updateSelection("videoInput", {
					deviceId: e.deviceId,
					groupId: n
				}), this.eventBus.deviceChange.publish({
					isUserSelection: !0,
					type: "video",
					selection: {
						deviceId: e.deviceId,
						groupId: n,
						label: this.nativeTrack.label
					}
				}));
			}
		}), this.trackPermissions = () => {
			_o("camera", (e) => {
				this.eventBus.analytics.publish(H.permissionChange(this.type, e)), e === "denied" && this.eventBus.localVideoEnabled.publish({
					enabled: !1,
					track: this
				});
			});
		}, this.handleTrackMute = () => {
			L.d(this.TAG, "muted natively", document.visibilityState), this.eventBus.analytics.publish(this.sendInterruptionEvent({
				started: !0,
				reason: "track-muted-natively"
			})), this.eventBus.localVideoEnabled.publish({
				enabled: !1,
				track: this
			});
		}, this.handleTrackUnmuteNatively = () => I(this, null, function* () {
			L.d(this.TAG, "unmuted natively"), this.eventBus.analytics.publish(this.sendInterruptionEvent({
				started: !1,
				reason: "track-unmuted-natively"
			})), this.handleTrackUnmute(), this.eventBus.localVideoEnabled.publish({
				enabled: this.enabled,
				track: this
			}), this.eventBus.localVideoUnmutedNatively.publish(), yield this.setEnabled(this.enabled);
		}), this.removeOrReplaceProcessedTrack = (e) => I(this, null, function* () {
			e ? e !== this.processedTrack && (this.processedTrack = e) : this.processedTrack = void 0, yield this.replaceSenderTrack(this.processedTrack || this.nativeTrack);
		}), this.handleVisibilityChange = () => I(this, null, function* () {
			if (document.visibilityState === "hidden") this.enabledStateBeforeBackground = this.enabled, this.enabled && (yield this.setEnabled(!1)), this.eventBus.analytics.publish(this.sendInterruptionEvent({
				started: !0,
				reason: "visibility-change"
			}));
			else {
				if (this.eventBus.analytics.publish(this.sendInterruptionEvent({
					started: !1,
					reason: "visibility-change"
				})), this.permissionState && this.permissionState !== "granted") {
					L.d(this.TAG, "On visibile not replacing track as permission is not granted");
					return;
				}
				if (L.d(this.TAG, "visibility visible, restoring track state", this.enabledStateBeforeBackground), this.enabledStateBeforeBackground) try {
					yield this.setEnabled(!0);
				} catch (e) {
					this.eventBus.error.publish(e);
				}
			}
		}), this.addTrackEventListeners(t), this.trackPermissions(), e.tracks.push(this), this.setVideoHandler(new Io(this)), this.settings = i, i.deviceId !== t.getSettings().deviceId && t.enabled && (this.settings = this.buildNewSettings({ deviceId: t.getSettings().deviceId })), this.pluginsManager = new Wo(this, r), this.mediaStreamPluginsManager = new Go(r, a), this.setFirstTrackId(this.trackId), this.eventBus.localAudioUnmutedNatively.subscribe(this.handleTrackUnmute), $i && n === "regular" && ia() && document.addEventListener("visibilitychange", this.handleVisibilityChange);
	}
	clone(t) {
		let n = this.nativeTrack.clone();
		t.nativeStream.addTrack(n);
		let r = new e(t, n, this.source, this.eventBus, this.settings, this.room);
		return r.peerId = this.peerId, this.pluginsManager.pluginsMap.size > 0 && this.pluginsManager.pluginsMap.forEach((e) => {
			r.addPlugin(e).catch((t) => L.e(this.TAG, "Plugin add failed while migrating", e, t));
		}), this.mediaStreamPluginsManager.plugins.size > 0 && r.addStreamPlugins(Array.from(this.mediaStreamPluginsManager.plugins)), r;
	}
	setSimulcastDefinitons(e) {
		this._layerDefinitions = e;
	}
	getSimulcastDefinitions() {
		return this._layerDefinitions;
	}
	setEnabled(t) {
		return I(this, null, function* () {
			var n;
			if (t !== this.enabled) {
				if (this.source === "regular") {
					let r;
					r = t ? yield this.replaceTrackWith(this.settings) : yield this.replaceTrackWithBlank(), yield this.replaceSender(r, t), (n = this.nativeTrack) == null || n.stop(), this.nativeTrack = r, yield Oi(e.prototype, this, "setEnabled").call(this, t), t && (yield this.pluginsManager.waitForRestart(), yield this.processPlugins(), this.settings = this.buildNewSettings({ deviceId: r.getSettings().deviceId })), this.videoHandler.updateSinks();
				}
				this.eventBus.localVideoEnabled.publish({
					enabled: t,
					track: this
				});
			}
		});
	}
	processPlugins() {
		return I(this, null, function* () {
			try {
				if (this.pluginsManager.getPlugins().length > 0) return;
				if (this.mediaStreamPluginsManager.getPlugins().length > 0) {
					let e = this.mediaStreamPluginsManager.applyPlugins(new MediaStream([this.nativeTrack])).getVideoTracks()[0];
					yield this.setProcessedTrack(e);
				} else yield this.setProcessedTrack();
				this.videoHandler.updateSinks();
			} catch (e) {
				console.error("error in processing plugin(s)", e);
			}
		});
	}
	addStreamPlugins(e) {
		return I(this, null, function* () {
			if (this.pluginsManager.getPlugins().length > 0) throw Error("Plugins of type HMSMediaStreamPlugin and HMSVideoPlugin cannot be used together");
			this.mediaStreamPluginsManager.addPlugins(e), yield this.processPlugins();
		});
	}
	removeStreamPlugins(e) {
		return I(this, null, function* () {
			this.mediaStreamPluginsManager.removePlugins(e), yield this.processPlugins();
		});
	}
	isPublishedTrackId(e) {
		return this.publishedTrackId === e;
	}
	addSink(e) {
		this.addSinkInternal(e, this.processedTrack || this.nativeTrack);
	}
	setSettings(e, t = !1) {
		return I(this, null, function* () {
			let n = this.buildNewSettings(e);
			if (yield this.handleDeviceChange(n, t), !this.enabled || go(this.nativeTrack)) {
				this.settings = n;
				return;
			} else yield this.pluginsManager.waitForRestart();
			yield this.handleSettingsChange(n), this.settings = n;
		});
	}
	getPlugins() {
		return this.mediaStreamPluginsManager.getPlugins().length > 0 ? this.mediaStreamPluginsManager.getPlugins() : this.pluginsManager.getPlugins();
	}
	getPluginsMetrics() {
		let e = {};
		for (let t of this.mediaStreamPluginsManager.plugins) t.getMetrics && (e[t.getName()] = t.getMetrics());
		return e;
	}
	addPlugin(e, t) {
		return I(this, null, function* () {
			if (this.mediaStreamPluginsManager.getPlugins().length > 0) throw Error("Plugins of type HMSVideoPlugin and HMSMediaStreamPlugin cannot be used together");
			return this.pluginsManager.addPlugin(e, t);
		});
	}
	removePlugin(e) {
		return I(this, null, function* () {
			return this.pluginsManager.removePlugin(e);
		});
	}
	validatePlugin(e) {
		return this.pluginsManager.validatePlugin(e);
	}
	cleanup() {
		return I(this, null, function* () {
			var t;
			this.eventBus.localAudioUnmutedNatively.unsubscribe(this.handleTrackUnmute), this.removeTrackEventListeners(this.nativeTrack), yield this.mediaStreamPluginsManager.cleanup(), yield this.pluginsManager.cleanup(), Oi(e.prototype, this, "cleanup").call(this), this.transceiver = void 0, (t = this.processedTrack) == null || t.stop(), this.isPublished = !1, $i && ia() && document.removeEventListener("visibilitychange", this.handleVisibilityChange);
		});
	}
	cropTo(e) {
		return I(this, null, function* () {
			if (e && this.source === "screen") try {
				this.nativeTrack.cropTo && (yield this.nativeTrack.cropTo(e));
			} catch (e) {
				throw L.e(this.TAG, "failed to crop screenshare capture - ", e), B.TracksErrors.GenericTrack("TRACK", "failed to crop screenshare capture");
			}
		});
	}
	getCaptureHandle() {
		if (this.nativeTrack.getCaptureHandle) return this.nativeTrack.getCaptureHandle();
	}
	setProcessedTrack(e) {
		return I(this, null, function* () {
			if (!this.nativeTrack.enabled) {
				this.processedTrack = e;
				return;
			}
			yield this.removeOrReplaceProcessedTrack(e), this.videoHandler.updateSinks();
		});
	}
	getTrackIDBeingSent() {
		return this.getTrackBeingSent().id;
	}
	getTrackBeingSent() {
		return this.enabled && this.processedTrack || this.nativeTrack;
	}
	switchCamera() {
		return I(this, null, function* () {
			var e;
			let t = this.getMediaTrackSettings().facingMode;
			if (!t || this.source !== "regular") {
				L.d(this.TAG, "facingMode not supported");
				return;
			}
			let n = t === "environment" ? "user" : "environment";
			(e = this.nativeTrack) == null || e.stop();
			let r = yield this.replaceTrackWith(this.buildNewSettings({
				facingMode: n,
				deviceId: void 0
			}));
			yield this.replaceSender(r, this.enabled), this.nativeTrack = r, yield this.processPlugins(), this.videoHandler.updateSinks(), this.settings = this.buildNewSettings({
				deviceId: this.nativeTrack.getSettings().deviceId,
				facingMode: n
			}), Na.updateSelection("videoInput", {
				deviceId: this.settings.deviceId,
				groupId: this.nativeTrack.getSettings().groupId
			});
		});
	}
	replaceTrackWith(e) {
		return I(this, null, function* () {
			let t = this.nativeTrack;
			this.removeTrackEventListeners(t), t?.stop();
			try {
				let n = yield ho(e);
				return this.addTrackEventListeners(n), this.eventBus.analytics.publish(H.mediaConstraints({
					requestedConstraints: { video: e.toConstraints() },
					appliedConstraints: { video: n.getConstraints() },
					trackSettings: { video: n.getSettings() }
				})), L.d(this.TAG, "replaceTrack, Previous track stopped", t, "newTrack", n), this.settings.deviceId === "default" && (this.settings = this.buildNewSettings({ deviceId: this.nativeTrack.getSettings().deviceId })), n;
			} catch (e) {
				let t = e;
				if (t.code === R.TracksErrors.CANT_ACCESS_CAPTURE_DEVICE || t.code === R.TracksErrors.SYSTEM_DENIED_PERMISSION) {
					let e = yield this.replaceTrackWithBlank();
					throw this.addTrackEventListeners(e), yield this.replaceSender(e, this.enabled), this.nativeTrack = e, this.videoHandler.updateSinks(), t;
				}
				let n = yield ho(this.settings);
				throw this.addTrackEventListeners(n), this.eventBus.analytics.publish(H.mediaConstraints({
					requestedConstraints: { video: this.settings.toConstraints() },
					appliedConstraints: { video: n.getConstraints() },
					trackSettings: { video: n.getSettings() }
				})), yield this.replaceSender(n, this.enabled), this.nativeTrack = n, yield this.processPlugins(), this.videoHandler.updateSinks(), this.isPublished && this.eventBus.analytics.publish(H.publish({ error: t })), t;
			}
		});
	}
	replaceTrackWithBlank() {
		return I(this, null, function* () {
			let e = this.nativeTrack, t = po.getEmptyVideoTrack(e);
			return this.removeTrackEventListeners(e), this.addTrackEventListeners(t), e?.stop(), L.d(this.TAG, "replaceTrackWithBlank, Previous track stopped", e, "newTrack", t), t;
		});
	}
	replaceSender(e, t) {
		return I(this, null, function* () {
			t ? yield this.replaceSenderTrack(this.processedTrack || e) : yield this.replaceSenderTrack(e), this.stream.replaceStreamTrack(this.nativeTrack, e);
		});
	}
	addTrackEventListeners(e) {
		e.addEventListener("mute", this.handleTrackMute), e.addEventListener("unmute", this.handleTrackUnmuteNatively);
	}
	removeTrackEventListeners(e) {
		e.removeEventListener("mute", this.handleTrackMute), e.removeEventListener("unmute", this.handleTrackUnmuteNatively);
	}
}, Jo = "renegotiation-callback-id", Yo = "ion-sfu", Xo = "SUBSCRIBE_ICE_CONNECTION_CALLBACK_ID", Zo = "https://event.100ms.live/v2/client/report", Qo = "https://event-nonprod.100ms.live/v2/client/report", $o = 2 ** 31 - 1, U = {
	DEVICE_CHANGE: "device-change",
	LOCAL_AUDIO_ENABLED: "local-audio-enabled",
	LOCAL_VIDEO_ENABLED: "local-video-enabled",
	LOCAL_VIDEO_UNMUTED_NATIVELY: "local-video-unmuted-natively",
	LOCAL_AUDIO_UNMUTED_NATIVELY: "local-audio-unmuted-natively",
	STATS_UPDATE: "stats-update",
	RTC_STATS_UPDATE: "rtc-stats-update",
	TRACK_DEGRADED: "track-degraded",
	TRACK_RESTORED: "track-restored",
	TRACK_AUDIO_LEVEL_UPDATE: "track-audio-level-update",
	LOCAL_AUDIO_SILENCE: "local-audio-silence",
	ANALYTICS: "analytics",
	AUDIO_PLUGIN_FAILED: "audio-plugin-failed",
	POLICY_CHANGE: "policy-change",
	LOCAL_ROLE_UPDATE: "local-role-update",
	AUDIO_TRACK_UPDATE: "audio-track-update",
	AUDIO_TRACK_ADDED: "audio-track-added",
	AUDIO_TRACK_REMOVED: "audio-track-removed",
	AUTOPLAY_ERROR: "autoplay-error",
	LEAVE: "leave",
	ERROR: "error"
}, es = "2.5", ts = "20250115", ns = "_handraise", rs = 1e3, is = 64, as = "https://whiteboard.100ms.live", os = "https://whiteboard-qa.100ms.live", ss = class e extends Ao {
	constructor(e, t, n, r) {
		super(e, t, n), this._degraded = !1, this._degradedAt = null, this._layerDefinitions = [], this.history = new cs(), this.preferredLayer = "high", this.disableNoneLayerRequest = !1, this.disableNoneLayerRequest = !!r, this.setVideoHandler(new Io(this));
	}
	setTrackId(e) {
		this.bizTrackId = e;
	}
	get trackId() {
		return this.bizTrackId || super.trackId;
	}
	get degraded() {
		return this._degraded;
	}
	get degradedAt() {
		return this._degradedAt;
	}
	setEnabled(t) {
		return I(this, null, function* () {
			t !== this.enabled && (Oi(e.prototype, this, "setEnabled").call(this, t), this.videoHandler.updateSinks(!0));
		});
	}
	setPreferredLayer(e) {
		return I(this, null, function* () {
			if (e === "none") {
				L.w("layer none will be ignored");
				return;
			}
			if (this.preferredLayer = e, this.shouldSendVideoLayer(e, "preferLayer")) {
				if (!this.hasSinks()) {
					L.d(`[Remote Track] ${this.logIdentifier}
        streamId=${this.stream.id} 
        trackId=${this.trackId}
        saving ${e}, source=${this.source}
        Track does not have any sink`);
					return;
				}
				yield this.requestLayer(e, "preferLayer"), this.pushInHistory(`uiPreferLayer-${e}`);
			}
		});
	}
	getSimulcastLayer() {
		return this.stream.getSimulcastLayer();
	}
	getLayer() {
		return this.stream.getVideoLayer();
	}
	getPreferredLayer() {
		return this.preferredLayer;
	}
	getPreferredLayerDefinition() {
		return this._layerDefinitions.find((e) => e.layer === this.preferredLayer);
	}
	replaceTrack(e) {
		this.nativeTrack = e.nativeTrack, e.transceiver && (this.transceiver = e.transceiver, this.stream.updateId(e.stream.id)), this.videoHandler.updateSinks();
	}
	addSink(t, n = !0) {
		return I(this, null, function* () {
			go(this.nativeTrack) ? yield this.requestLayer(this.preferredLayer, "addSink") : (Oi(e.prototype, this, "addSink").call(this, t), n && (yield this.updateLayer("addSink"))), this.pushInHistory("uiSetLayer-high");
		});
	}
	removeSink(t, n = !0) {
		return I(this, null, function* () {
			Oi(e.prototype, this, "removeSink").call(this, t), n && (yield this.updateLayer("removeSink")), this._degraded = !1, this.pushInHistory("uiSetLayer-none");
		});
	}
	getSimulcastDefinitions() {
		return [...this._layerDefinitions];
	}
	setSimulcastDefinitons(e) {
		this._layerDefinitions = e;
	}
	setLayerFromServer(e) {
		this._degraded = this.getDegradationValue(e), this._degradedAt = this._degraded ? /* @__PURE__ */ new Date() : this._degradedAt;
		let t = e.current_layer;
		return L.d(`[Remote Track] ${this.logIdentifier} 
      streamId=${this.stream.id} 
      trackId=${this.trackId}
      layer update from sfu
      currLayer=${e.current_layer}
      preferredLayer=${e.expected_layer}
      sub_degraded=${e.subscriber_degraded}
      pub_degraded=${e.publisher_degraded}
      isDegraded=${this._degraded}`), this.stream.setVideoLayerLocally(t, this.logIdentifier, "setLayerFromServer"), this.pushInHistory(`sfuLayerUpdate-${t}`), this._degraded;
	}
	getDegradationValue(e) {
		return this.enabled && (e.publisher_degraded || e.subscriber_degraded) && e.current_layer === "none";
	}
	updateLayer(e) {
		return I(this, null, function* () {
			let t = this.preferredLayer;
			this.enabled && this.hasSinks() ? t = this.preferredLayer : this.disableNoneLayerRequest || (t = "none"), this.shouldSendVideoLayer(t, e) && (yield this.requestLayer(t, e));
		});
	}
	pushInHistory(e) {}
	requestLayer(e, t) {
		return I(this, null, function* () {
			try {
				let n = yield this.stream.setVideoLayer(e, this.trackId, this.logIdentifier, t);
				return L.d(`[Remote Track] ${this.logIdentifier} 
      streamId=${this.stream.id}
      trackId=${this.trackId}
      Requested layer ${e}, source=${t}`), n;
			} catch (n) {
				throw L.d(`[Remote Track] ${this.logIdentifier} 
      streamId=${this.stream.id}
      trackId=${this.trackId}
      Failed to set layer ${e}, source=${t}
      error=${n.message}`), n;
			}
		});
	}
	shouldSendVideoLayer(e, t) {
		let n = this.getLayer();
		return this.degraded && e === "none" ? !0 : n === e ? (L.d(`[Remote Track] ${this.logIdentifier}`, `Not sending update, already on layer ${e}, source=${t}`), !1) : !0;
	}
}, cs = class {
	constructor() {
		this.history = [];
	}
	push(e) {
		e.time = (/* @__PURE__ */ new Date()).toISOString().split("T")[1], this.history.push(e);
	}
}, ls = class extends Yi {
	constructor() {
		super(...arguments), this.TAG = "[HMSLocalStream]", this.connection = null;
	}
	setConnection(e) {
		this.connection = e;
	}
	addTransceiver(e, t) {
		let n = this.connection.addTransceiver(e.getTrackBeingSent(), {
			streams: [this.nativeStream],
			direction: "sendonly",
			sendEncodings: this.getTrackEncodings(e, t)
		});
		return this.setPreferredCodec(n, e.nativeTrack.kind), e.transceiver = n, n;
	}
	setMaxBitrateAndFramerate(e, t) {
		return I(this, null, function* () {
			yield this.connection?.setMaxBitrateAndFramerate(e, t);
		});
	}
	setPreferredCodec(e, t) {}
	replaceStreamTrack(e, t) {
		this.nativeStream.addTrack(t), this.nativeStream.removeTrack(e);
	}
	removeSender(e) {
		var t;
		if (!this.connection || this.connection.connectionState === "closed") {
			L.d(this.TAG, "publish connection is not initialised or closed");
			return;
		}
		let n = e.transceiver?.sender;
		if (!n) {
			L.w(this.TAG, `No sender found for trackId=${e.trackId}`);
			return;
		}
		(t = this.connection) == null || t.removeTrack(n);
		let r = this.tracks.indexOf(e);
		r === -1 ? L.w(this.TAG, `Cannot find ${e.trackId} in locally stored tracks`) : this.tracks.splice(r, 1);
	}
	getTrackEncodings(e, t) {
		let n = [];
		if (e instanceof qo) if (t.length > 0) L.d(this.TAG, "Simulcast enabled with layers", t), n.push(...t);
		else {
			let t = { active: this.nativeStream.active };
			e.settings.maxBitrate && !ra && (t.maxBitrate = e.settings.maxBitrate), n.push(t);
		}
		return n;
	}
}, us = class extends Yi {
	constructor(e, t) {
		super(e), this.audio = !0, this.video = "none", this.connection = t;
	}
	setAudio(e, t, n) {
		return I(this, null, function* () {
			this.audio !== e && (this.audio = e, L.d(`[Remote stream] ${n || ""} 
    streamId=${this.id}
    trackId=${t}
    subscribing audio - ${this.audio}`), yield this.connection.sendOverApiDataChannelWithResponse({
				params: {
					subscribed: this.audio,
					track_id: t
				},
				method: "prefer-audio-track-state"
			}));
		});
	}
	setVideoLayerLocally(e, t, n) {
		this.video = e, L.d(`[Remote stream] ${t}
    streamId=${this.id}
    source: ${n}
    Setting layer field to=${e}`);
	}
	setVideoLayer(e, t, n, r) {
		return L.d(`[Remote stream] ${n} 
      streamId=${this.id}
      trackId=${t} 
      source: ${r} request ${e} layer`), this.setVideoLayerLocally(e, n, r), this.connection.sendOverApiDataChannelWithResponse({
			params: {
				max_spatial_layer: this.video,
				track_id: t
			},
			method: "prefer-video-track-state"
		});
	}
	getSimulcastLayer() {
		return this.video;
	}
	getVideoLayer() {
		return this.video;
	}
	isAudioSubscribed() {
		return this.audio;
	}
}, ds = (e) => {
	let t = e.kind || e.mediaType;
	return !t || t === "video";
}, fs = (e, t) => !t || !e.trackIdentifier ? !0 : e.trackIdentifier === t, ps = (e) => ({
	frames: e.frames,
	framesPerSecond: e.framesPerSecond,
	framesDropped: e.framesDropped,
	width: e.width ?? e.frameWidth,
	height: e.height ?? e.frameHeight,
	timestamp: e.timestamp
}), ms = (e, t) => {
	if (!(!Sa(e.frames) || !Sa(t?.sourceFrames) || !Sa(e.timestamp) || !Sa(t?.sourceTimestamp))) return Ms(e.frames, t?.sourceFrames, e.timestamp, t?.sourceTimestamp) * 1e3;
}, hs = (e, t) => Sa(e.framesPerSecond) ? e.framesPerSecond : ms(e, t), gs = (e) => {
	if (e) return {
		none: e.none || 0,
		cpu: e.cpu || 0,
		bandwidth: e.bandwidth || 0,
		other: e.other || 0
	};
}, _s = (e, t) => {
	if (!e) return;
	let n = t.transceiver?.sender?.track?.id;
	for (let t of e.values()) {
		if (t.type !== "track") continue;
		let e = t;
		if (ds(e) && fs(e, n)) return ps(e);
	}
}, vs = (e, t) => Ss(e, t) || _s(e, t), ys = (e, t, n, r) => I(null, null, function* () {
	var i;
	let a, o = {};
	if ((i = t.transceiver) != null && i.sender.track) {
		try {
			a = yield t.transceiver.sender.getStats();
			let e = {}, i = {}, s = {}, c = t.type === "video" ? vs(a, t) : void 0;
			a?.forEach((t) => {
				switch (t.type) {
					case "outbound-rtp":
						i[t.id] = t;
						break;
					case "remote-inbound-rtp":
						s[t.ssrc] = t;
						break;
					case "codec":
						e[t.id] = t.mimeType;
						break;
					default: break;
				}
			}), Object.keys(P({}, i)).forEach((a) => {
				let l = i[a]?.codecId, u = l ? e[l] : void 0, d;
				u && (d = u.substring(u.indexOf("/") + 1));
				let f = F(P({}, i[a]), { rid: i[a]?.rid }), p = gs(f.qualityLimitationDurations), m = F(P({}, f), { qualityLimitationDurations: p }), h = m, g = m.trackIdentifier ?? t.transceiver?.sender?.track?.id ?? t.trackId, _ = s[f.ssrc], v = t.type === "video" ? ws(c, m.framesEncoded, r?.[a]) : {};
				o[a] = F(P(P({}, m), v), {
					trackIdentifier: g,
					bitrate: As("bytesSent", h, r?.[a]),
					packetsLost: _?.packetsLost,
					jitter: _?.jitter,
					roundTripTime: _?.roundTripTime,
					totalRoundTripTime: _?.totalRoundTripTime,
					peerName: n,
					peerID: t.peerId,
					enabled: t.enabled,
					codec: d
				});
			});
		} catch (n) {
			e.analytics.publish(H.rtcStatsFailed(B.WebrtcErrors.StatsFailed("TRACK", `Error getting local track stats ${t.trackId} - ${n.message}`))), L.w("[HMSWebrtcStats]", "Error in getting local track stats", t, n, n.name);
		}
		return o;
	}
}), bs = (e, t, n, r) => I(null, null, function* () {
	let i;
	try {
		i = yield t.transceiver?.receiver.getStats();
	} catch (n) {
		e.analytics.publish(H.rtcStatsFailed(B.WebrtcErrors.StatsFailed("TRACK", `Error getting remote track stats ${t.trackId} - ${n.message}`))), L.w("[HMSWebrtcStats]", "Error in getting remote track stats", t, n);
	}
	let a = xs(i), o = a, s = As("bytesReceived", o, r), c = js("packetsLost", o, r);
	return a != null && a.remote && Object.assign(a.remote, { packetsLostRate: js("packetsLost", a.remote, r?.remote) }), a && F(P({}, a), {
		trackIdentifier: a.trackIdentifier ?? t.transceiver?.receiver?.track?.id ?? t.trackId,
		bitrate: s,
		packetsLostRate: c,
		peerID: t.peerId,
		enabled: t.enabled,
		peerName: n,
		codec: a.codec
	});
}), xs = (e) => {
	let t, n, r = {};
	e?.forEach((e) => {
		switch (e.type) {
			case "inbound-rtp":
				t = e;
				break;
			case "outbound-rtp":
				t = e;
				break;
			case "remote-inbound-rtp":
				n = e;
				break;
			case "codec":
				r[e.id] = e.mimeType;
				break;
			default: break;
		}
	});
	let i = t != null && t.codecId ? r[t.codecId] : void 0, a;
	if (i && (a = i.substring(i.indexOf("/") + 1)), !t) return;
	let o = gs(t.qualityLimitationDurations);
	return Object.assign(t, P({
		remote: n,
		codec: a
	}, o ? { qualityLimitationDurations: o } : {}));
}, Ss = (e, t) => {
	if (!e) return;
	let n = t.transceiver?.sender?.track?.id;
	for (let t of e.values()) {
		if (t.type !== "media-source") continue;
		let e = t;
		if (ds(e) && fs(e, n)) return ps(e);
	}
}, Cs = (e, t, n, r) => {
	if (!Sa(e) || !Sa(t) || !Sa(n) || !Sa(r)) return;
	let i = e - n, a = t - r;
	return Math.max(0, i - a);
}, ws = (e, t, n) => {
	let r = Cs(e?.frames, t, n?.sourceFrames, n?.framesEncoded);
	return {
		sourceFrameWidth: e?.width,
		sourceFrameHeight: e?.height,
		sourceFrames: e?.frames,
		sourceFramesDropped: r,
		sourceFramesPerSecond: e ? hs(e, n) : void 0,
		sourceTimestamp: e?.timestamp,
		sourceStatsAvailable: !!e
	};
}, Ts = (e) => {
	let t = 0;
	return e?.forEach((e) => {
		e.type === "outbound-rtp" && (t += e.bytesSent || 0);
	}), t;
}, Es = (e, t, n) => {
	let r = Ds(t);
	if (!r) return;
	if (e === "publish") {
		let e = Ts(t), i = n?.publish?.outboundRtpBytesSent, a = i === void 0 ? 0 : As("bytesSent", {
			bytesSent: e,
			timestamp: r.timestamp
		}, {
			bytesSent: i,
			timestamp: n?.publish?.timestamp
		});
		return Object.assign(r, {
			bitrate: a,
			outboundRtpBytesSent: e
		});
	}
	let i = As("bytesReceived", r, n && n[e]);
	return Object.assign(r, { bitrate: i });
}, Ds = (e) => {
	let t;
	return e?.forEach((n) => {
		n.type === "transport" && (t = e?.get(n.selectedCandidatePairId));
	}), t || e == null || e.forEach((e) => {
		e.type === "candidate-pair" && e.selected && (t = e);
	}), t;
}, Os = (e) => {
	let t = {
		packetsLost: 0,
		jitter: 0
	};
	return e?.forEach((e) => {
		e.packetsLost && (t.packetsLost += e.packetsLost), e.jitter > t.jitter && (t.jitter = e.jitter);
	}), t;
}, ks = (e, t) => Array.from(new Set(e.concat(t))), As = (e, t, n) => js(e, t, n) * 8, js = (e, t, n) => {
	let r = t && t[e], i = n ? n[e] : null;
	return [
		t,
		n,
		Sa(r),
		Sa(i)
	].every((e) => !!e) ? Ms(r, i, t?.timestamp, n?.timestamp) * 1e3 : 0;
}, Ms = (e, t, n, r) => Sa(e) && Sa(t) && n && r ? (e - t) / (n - r) : 0, Ns = class {
	constructor(e, t, n, r) {
		this.store = e, this.eventBus = t, this.publishConnection = n, this.subscribeConnection = r, this.TAG = "[HMSWebrtcStats]", this.peerStats = {}, this.remoteTrackStats = {}, this.localTrackStats = {}, this.getLocalPeerStats = () => this.peerStats[this.localPeerID], this.getRemoteTrackStats = (e) => this.remoteTrackStats[e], this.getAllRemoteTracksStats = () => this.remoteTrackStats, this.getLocalTrackStats = () => this.localTrackStats, this.updateStats = () => I(this, null, function* () {
			yield this.updateLocalPeerStats(), yield this.updateLocalTrackStats(), yield this.updateRemoteTrackStats();
		}), this.updateLocalPeerStats = () => I(this, null, function* () {
			let e = this.getLocalPeerStats(), t;
			try {
				t = yield this.publishConnection?.getStats();
			} catch (e) {
				this.eventBus.analytics.publish(H.rtcStatsFailed(B.WebrtcErrors.StatsFailed("PUBLISH", e.message))), L.w(this.TAG, "Error in getting publish stats", e);
			}
			let n = t && Es("publish", t, e), r;
			try {
				r = yield this.subscribeConnection?.getStats();
			} catch (e) {
				this.eventBus.analytics.publish(H.rtcStatsFailed(B.WebrtcErrors.StatsFailed("SUBSCRIBE", e.message))), L.w(this.TAG, "Error in getting subscribe stats", e);
			}
			let i = r && Es("subscribe", r, e), { packetsLost: a, jitter: o } = Os(r), s = Ms(a, e?.subscribe?.packetsLost, i?.timestamp, e?.subscribe?.timestamp), c = i && Object.assign(i, {
				packetsLostRate: s,
				jitter: o,
				packetsLost: a
			});
			this.peerStats[this.localPeerID] = {
				publish: n,
				subscribe: c
			};
		}), this.updateRemoteTrackStats = () => I(this, null, function* () {
			let e = Array.from(this.store.getTracksMap().values()).filter((e) => e instanceof ss || e instanceof ko), t = e.map((e) => e.trackId);
			Object.keys(this.remoteTrackStats).forEach((e) => {
				t.includes(e) || delete this.remoteTrackStats[e];
			});
			for (let t of e) {
				let e = t.peerId && this.store.getPeerById(t.peerId)?.name, n = this.getRemoteTrackStats(t.trackId), r = yield bs(this.eventBus, t, e, n);
				r && (this.remoteTrackStats[t.trackId] = r);
			}
		}), this.updateLocalTrackStats = () => I(this, null, function* () {
			let e = this.store.getLocalPeerTracks().reduce((e, t) => (e[t.getTrackIDBeingSent()] = t, e), {}), t = ks(Object.keys(this.localTrackStats), Object.keys(e));
			for (let n of t) {
				let t = e[n];
				if (t) {
					let e = this.store.getLocalPeer()?.name, r = yield ys(this.eventBus, t, e, this.localTrackStats[n]);
					r && (this.localTrackStats[n] = r);
				} else delete this.localTrackStats[n];
			}
		}), this.localPeerID = this.store.getLocalPeer()?.peerId;
	}
	setPeerConnections({ publish: e, subscribe: t }) {
		this.publishConnection = e, this.subscribeConnection = t;
	}
	getPublishPeerConnection() {
		return this.publishConnection;
	}
	getSubscribePeerConnection() {
		return this.subscribeConnection;
	}
}, Ps = class {
	constructor(e, t) {
		this.store = e, this.eventBus = t, this.TAG = "[HMSWebrtcInternals]", this.interval = 1e3, this.isMonitored = !1, this.handleStatsUpdate = () => I(this, null, function* () {
			yield this.hmsStats?.updateStats(), this.hmsStats && this.eventBus.statsUpdate.publish(this.hmsStats);
		});
	}
	getCurrentStats() {
		return this.hmsStats;
	}
	getPublishPeerConnection() {
		return this.hmsStats?.getPublishPeerConnection();
	}
	getSubscribePeerConnection() {
		return this.hmsStats?.getSubscribePeerConnection();
	}
	onStatsChange(e) {
		return this.eventBus.statsUpdate.subscribe(e), () => {
			this.eventBus.statsUpdate.unsubscribe(e);
		};
	}
	setPeerConnections({ publish: e, subscribe: t }) {
		this.hmsStats ? this.hmsStats.setPeerConnections({
			publish: e,
			subscribe: t
		}) : this.hmsStats = new Ns(this.store, this.eventBus, e, t);
	}
	start() {
		return I(this, null, function* () {
			if (this.isMonitored) {
				L.d(this.TAG, "Already started");
				return;
			}
			this.stop(), this.isMonitored = !0, L.d(this.TAG, "Starting Webrtc Stats Monitor"), this.startLoop().then(() => L.d(this.TAG, "Stopping Webrtc Stats Monitor")).catch((e) => {
				this.eventBus.analytics.publish(H.rtcStatsFailed(B.WebrtcErrors.StatsFailed("PUBLISH", e.message))), L.e(this.TAG, e.message);
			});
		});
	}
	stop() {
		this.isMonitored = !1;
	}
	startLoop() {
		return I(this, null, function* () {
			for (; this.isMonitored;) yield this.handleStatsUpdate(), yield bo(this.interval);
		});
	}
	cleanup() {
		this.stop(), this.eventBus.statsUpdate.removeAllListeners();
	}
}, Fs = class {
	constructor({ peerId: e, name: t, isLocal: n, customerUserId: r, metadata: i, role: a, joinedAt: o, groups: s, realtime: c, type: l }) {
		this.customerUserId = "", this.metadata = "", this.auxiliaryTracks = [], this.name = t, this.peerId = e, this.isLocal = n, this.customerUserId = r, this.metadata = i, this.joinedAt = o, this.groups = s, this.realtime = c, this.type = l, a && (this.role = a);
	}
	get isHandRaised() {
		var e;
		return !!((e = this.groups) != null && e.includes(ns));
	}
	updateRole(e) {
		this.role = e;
	}
	updateName(e) {
		this.name = e;
	}
	updateNetworkQuality(e) {
		this.networkQuality = e;
	}
	updateMetadata(e) {
		this.metadata = e;
	}
	updateGroups(e) {
		this.groups = e;
	}
	toString() {
		return `{
      name: ${this.name};
      role: ${this.role?.name};
      peerId: ${this.peerId};
      customerUserId: ${this.customerUserId};
      ${this.audioTrack ? `audioTrack: ${this.audioTrack?.trackId};` : ""}
      ${this.videoTrack ? `videoTrack: ${this.videoTrack?.trackId};` : ""}
      groups: ${this.groups?.join()}
    }`;
	}
}, Is = class {};
Is.makePeerId = () => tn();
var Ls = class extends Fs {
	constructor(e) {
		super(F(P({}, e), {
			peerId: Is.makePeerId(),
			isLocal: !0
		})), this.isLocal = !0, this.auxiliaryTracks = [], this.asRole = e.asRole;
	}
	isInPreview() {
		return !!this.asRole;
	}
	toString() {
		return `{
      name: ${this.name};
      role: ${this.role?.name};
      peerId: ${this.peerId};
      customerUserId: ${this.customerUserId};
      ${this.asRole ? `asRole: ${this.asRole.name};` : ""}
      ${this.audioTrack ? `audioTrack: ${this.audioTrack?.trackId};` : ""}
      ${this.videoTrack ? `videoTrack: ${this.videoTrack?.trackId};` : ""}
    }`;
	}
}, Rs = class extends Fs {
	constructor(e) {
		super(F(P({}, e), { isLocal: !1 })), this.isLocal = !1, this.auxiliaryTracks = [], this.fromRoomState = !1, this.fromRoomState = !!e.fromRoomState;
	}
}, zs = (e, t) => new Rs({
	peerId: e.peer_id,
	name: e.info.name,
	role: t.getPolicyForRole(e.role),
	customerUserId: e.info.user_id,
	metadata: e.info.data,
	groups: e.groups,
	type: e.info.type
}), Bs = class {
	constructor(e, t, n) {
		this.transport = e, this.store = t, this.options = n, this.isEnd = !1, this.iterator = null, this.total = 0, this.defaultPaginationLimit = 10;
	}
	validateConnection() {
		if (!this.transport || !this.store) throw Error("Use usePaginatedParticipants or hmsActions.getPeerListIterator after preview or join has happened");
	}
	hasNext() {
		return !this.isEnd;
	}
	getTotal() {
		return this.total;
	}
	findPeers() {
		return I(this, null, function* () {
			this.validateConnection();
			let e = yield this.transport.signal.findPeers(F(P({}, this.options || {}), { limit: this.options?.limit || this.defaultPaginationLimit }));
			return this.updateState(e), this.processPeers(e.peers);
		});
	}
	next() {
		return I(this, null, function* () {
			this.validateConnection();
			let e;
			return !this.iterator && !this.isEnd ? yield this.findPeers() : this.iterator ? (e = yield this.transport.signal.peerIterNext({
				iterator: this.iterator,
				limit: this.options?.limit || this.defaultPaginationLimit
			}), this.updateState(e), this.processPeers(e.peers)) : [];
		});
	}
	processPeers(e) {
		let t = [];
		return e.forEach((e) => {
			let n = zs(e, this.store);
			t.push(n);
		}), t;
	}
	updateState(e) {
		this.isEnd = e.eof, this.total = e.total, e.iterator && (this.iterator = e.iterator);
	}
}, Vs = class {
	constructor(e) {
		this.TAG = "[AudioContextManager]", this.audioContext = new AudioContext(), this.source = this.audioContext.createMediaElementSource(e), this.source.connect(this.audioContext.destination);
	}
	resumeContext() {
		return I(this, null, function* () {
			this.audioContext.state === "suspended" && (yield this.audioContext.resume(), L.d(this.TAG, "AudioContext is resumed"));
		});
	}
	getAudioTrack() {
		return this.destinationNode && this.source.disconnect(this.destinationNode), this.destinationNode = this.audioContext.createMediaStreamDestination(), this.source.connect(this.destinationNode), this.destinationNode.stream.getAudioTracks()[0];
	}
	cleanup() {
		this.audioContext.state !== "closed" && this.audioContext.close().catch((e) => {
			L.d(this.TAG, "AudioContext close error", e.message);
		});
	}
}, Hs = class extends fr.EventEmitter2 {
	on(e, t) {
		return super.on(e, t);
	}
	off(e, t) {
		return super.off(e, t);
	}
	emit(e, t) {
		return super.emit(e, t);
	}
	listeners(e) {
		return super.listeners(e);
	}
}, Us = class extends Hs {
	constructor() {
		super(...arguments), this.audioElement = null, this.TAG = "[PlaylistAudioManager]", this.seeked = !1;
	}
	play(e) {
		return I(this, null, function* () {
			return this.audioElement = this.getAudioElement(), new Promise((t, n) => {
				this.audioElement = this.getAudioElement(), this.audioElement.src = e, this.seeked = !1, this.audioElement.onerror = () => {
					let t = `Error loading ${e}`;
					L.e(this.TAG, t), this.stop(), n(t);
				}, this.audioElement.oncanplaythrough = () => I(this, null, function* () {
					try {
						if (!this.audioElement) return;
						if (this.audioContextManager.resumeContext(), this.track) this.seeked ? this.seeked = !1 : (yield this.audioElement.play(), t([this.track]));
						else {
							yield this.audioElement.play();
							let e = this.audioContextManager.getAudioTrack();
							this.track = e, t([e]);
						}
					} catch (t) {
						L.e(this.TAG, "Error playing audio", e, t.message), n(t);
					}
				}), this.audioElement.onseeked = () => {
					this.seeked = !0;
				};
			});
		});
	}
	getTracks() {
		return this.track ? [this.track.id] : [];
	}
	getElement() {
		return this.audioElement ||= this.getAudioElement(), this.audioElement;
	}
	stop() {
		var e, t, n;
		(e = this.audioElement) == null || e.pause(), (t = this.audioElement) == null || t.removeAttribute("src"), this.audioElement = null, (n = this.audioContextManager) == null || n.cleanup(), this.track = void 0;
	}
	getAudioElement() {
		if (this.audioElement) return this.audioElement;
		let e = document.createElement("audio");
		return e.crossOrigin = "anonymous", e.addEventListener("timeupdate", (e) => this.emit("progress", e)), e.addEventListener("ended", () => {
			this.emit("ended", null);
		}), this.audioContextManager = new Vs(e), e;
	}
}, Ws = class extends Hs {
	constructor() {
		super(...arguments), this.TAG = "[PlaylistVideoManager]", this.videoElement = null, this.canvasContext = null, this.tracks = [], this.DEFAUL_FPS = 24, this.seeked = !1, this.drawImage = () => {
			var e;
			this.videoElement && !this.videoElement.paused && !this.videoElement.ended && ((e = this.canvasContext) == null || e.drawImage(this.videoElement, 0, 0, this.canvas?.width, this.canvas?.height), this.timer = setTimeout(() => {
				this.drawImage();
			}, 1e3 / this.DEFAUL_FPS));
		};
	}
	play(e) {
		return this.videoElement = this.getVideoElement(), this.createCanvas(), new Promise((t, n) => {
			this.videoElement = this.getVideoElement(), this.videoElement.src = e, this.seeked = !1, this.videoElement.onerror = () => {
				let t = `Error loading ${e}`;
				L.e(this.TAG, t), this.stop(), n(t);
			}, this.videoElement.oncanplaythrough = () => I(this, null, function* () {
				var r;
				try {
					if (!this.videoElement) return;
					if (this.canvas.width = this.videoElement.videoWidth, this.canvas.height = this.videoElement.videoHeight, this.tracks.length === 0) {
						this.clearCanvasAndTracks();
						let e = this.canvas.captureStream();
						if (!e) {
							L.e(this.TAG, "Browser does not support captureStream");
							return;
						}
						this.videoElement.onplay = this.drawImage, yield this.audioContextManager.resumeContext(), yield this.videoElement.play();
						let n = this.audioContextManager.getAudioTrack();
						e.addTrack(n), e.getTracks().forEach((e) => {
							this.tracks.push(e);
						}), t(this.tracks);
					} else this.seeked ? (this.seeked = !1, (r = this.canvasContext) == null || r.drawImage(this.videoElement, 0, 0, this.canvas?.width, this.canvas?.height)) : (yield this.videoElement.play(), t(this.tracks));
				} catch (t) {
					L.e(this.TAG, "Error playing video", e, t.message), n(t);
				}
			}), this.videoElement.onseeked = () => {
				this.seeked = !0;
			};
		});
	}
	getTracks() {
		return this.tracks.map((e) => e.id);
	}
	getElement() {
		return this.videoElement ||= this.getVideoElement(), this.videoElement;
	}
	stop() {
		var e, t, n;
		(e = this.videoElement) == null || e.pause(), (t = this.videoElement) == null || t.removeAttribute("src"), this.videoElement = null, (n = this.audioContextManager) == null || n.cleanup(), this.clearCanvasAndTracks();
	}
	clearCanvasAndTracks() {
		var e;
		this.tracks = [], (e = this.canvasContext) == null || e.clearRect(0, 0, this.canvas.width, this.canvas.height), clearTimeout(this.timer);
	}
	getVideoElement() {
		if (this.videoElement) return this.videoElement;
		let e = document.createElement("video");
		return e.crossOrigin = "anonymous", e.addEventListener("timeupdate", (e) => this.emit("progress", e)), e.addEventListener("ended", () => {
			this.emit("ended", null);
		}), this.audioContextManager = new Vs(e), e;
	}
	createCanvas() {
		this.canvas || (this.canvas = document.createElement("canvas"), this.canvasContext = this.canvas.getContext("2d"));
	}
}, Gs = {
	audio: {
		list: [],
		currentIndex: -1,
		isAutoplayOn: !0
	},
	video: {
		list: [],
		currentIndex: -1,
		isAutoplayOn: !0
	}
}, Ks = class extends Hs {
	constructor(e, t) {
		super(), this.sdk = e, this.eventBus = t, this.state = {
			audio: P({}, Gs.audio),
			video: P({}, Gs.video)
		}, this.TAG = "[PlaylistManager]", this.handlePausePlaylist = (e) => I(this, [e], function* ({ enabled: e, track: t }) {
			var n;
			if (e) return;
			let r;
			t.source === "audioplaylist" && (r = "audio"), t.source === "videoplaylist" && (r = "video"), r && ((n = this.getElement(r)) == null || n.pause());
		}), this.addTrack = (e, t) => I(this, null, function* () {
			yield this.sdk.addTrack(e, t), L.d(this.TAG, "Playlist track added", Aa(e));
		}), this.removeTrack = (e) => I(this, null, function* () {
			yield this.sdk.removeTrack(e, !0), L.d(this.TAG, "Playlist track removed", e);
		}), this.audioManager = new Us(), this.videoManager = new Ws(), this.addListeners();
	}
	getList(e = "audio") {
		return this.state[e].list;
	}
	setList(e) {
		if (!e || e.length === 0) {
			L.w(this.TAG, "Please pass in a list of HMSPlaylistItem's");
			return;
		}
		e.forEach((e) => {
			this.state[e.type].list.find((t) => t.id === e.id) || this.state[e.type].list.push(e);
		});
	}
	clearList(e) {
		return I(this, null, function* () {
			this.isPlaying(e) && (yield this.stop(e)), this.state[e].list = [];
		});
	}
	removeItem(e, t) {
		return I(this, null, function* () {
			let { list: n, currentIndex: r } = this.state[t], i = n.findIndex((t) => e === t.id);
			return i > -1 ? (r === i && this.isPlaying(t) && (yield this.stop(t)), n.splice(i, 1), !0) : !1;
		});
	}
	seek(e, t = "audio") {
		let { currentIndex: n } = this.state[t];
		if (n === -1) throw B.PlaylistErrors.NoEntryToPlay("PLAYLIST", "No item is currently playing");
		let r = this.getElement(t);
		if (r) {
			let t = Math.max(r.currentTime + e, 0);
			r.currentTime = Math.min(t, r.duration);
		}
	}
	seekTo(e, t = "audio") {
		let { currentIndex: n } = this.state[t];
		if (n === -1) throw B.PlaylistErrors.NoEntryToPlay("PLAYLIST", "No item is currently playing");
		if (e < 0) throw Error("value cannot be negative");
		let r = this.getElement(t);
		r && (r.currentTime = Math.min(e, r.duration));
	}
	setVolume(e, t = "audio") {
		if (e < 0 || e > 100) throw Error("Please pass a valid number between 0-100");
		let n = this.getElement(t);
		n && (n.volume = e * .01);
	}
	getVolume(e = "audio") {
		let t = this.getElement(e);
		return t ? Math.floor(t.volume * 100) : 0;
	}
	getCurrentTime(e = "audio") {
		return this.getElement(e)?.currentTime || 0;
	}
	getCurrentIndex(e = "audio") {
		return this.state[e].currentIndex;
	}
	getCurrentProgress(e = "audio") {
		let { list: t, currentIndex: n } = this.state[e], r = t[n]?.url, i = this.getElement(e);
		return !r || !i ? 0 : Math.floor(100 * (i.currentTime / i.duration));
	}
	getCurrentSelection(e = "audio") {
		let { list: t, currentIndex: n } = this.state[e];
		if (n !== -1) return t[n];
	}
	isPlaying(e = "audio") {
		let t = this.getElement(e);
		return !!t && !t.paused;
	}
	setIsAutoplayOn(e = "audio", t) {
		this.state[e].isAutoplayOn = t;
	}
	getPlaybackRate(e = "audio") {
		let t = this.getElement(e);
		return t ? t.playbackRate : 1;
	}
	setPlaybackRate(e = "audio", t) {
		if (t < .25 || t > 2) throw Error("Please pass a value between 0.25 and 2.0");
		let n = this.getElement(e);
		n && (n.playbackRate = t);
	}
	setEnabled(e, t) {
		return I(this, arguments, function* (e, { id: t, type: n = "audio" }) {
			let r = this.state[n].list.findIndex((e) => e.id === t);
			if (!t || r === -1) {
				L.w(this.TAG, "Pass a valid id");
				return;
			}
			let i = this.state[n].list[r].url;
			e ? yield this.play(i, n) : yield this.pause(i, n), this.state[n].currentIndex = r, this.setDuration(n);
		});
	}
	playNext() {
		return I(this, arguments, function* (e = "audio") {
			let { list: t, currentIndex: n } = this.state[e];
			if (n >= t.length - 1) throw B.PlaylistErrors.NoEntryToPlay("PLAYLIST", "Reached end of playlist");
			yield this.play(t[n + 1].url, e), this.state[e].currentIndex = n + 1, this.setDuration(e);
		});
	}
	playPrevious() {
		return I(this, arguments, function* (e = "audio") {
			let { list: t, currentIndex: n } = this.state[e];
			if (n <= 0) throw B.PlaylistErrors.NoEntryToPlay("PLAYLIST", "Reached start of playlist");
			yield this.play(t[n - 1].url, e), this.state[e].currentIndex = n - 1, this.setDuration(e);
		});
	}
	stop() {
		return I(this, arguments, function* (e = "audio") {
			var t;
			let n = e === "audio" ? this.audioManager : this.videoManager;
			(t = n.getElement()) == null || t.pause(), yield this.removeTracks(e), n.stop(), this.state[e].currentIndex = -1;
		});
	}
	cleanup() {
		this.state = {
			audio: P({}, Gs.audio),
			video: P({}, Gs.video)
		}, this.eventBus.localAudioEnabled.unsubscribe(this.handlePausePlaylist), this.eventBus.localVideoEnabled.unsubscribe(this.handlePausePlaylist), this.audioManager.stop(), this.videoManager.stop();
	}
	onProgress(e) {
		this.videoManager.on("progress", () => {
			try {
				e({
					type: "video",
					progress: this.getCurrentProgress("video")
				});
			} catch {
				L.e(this.TAG, "Error in onProgress callback");
			}
		}), this.audioManager.on("progress", () => {
			try {
				e({
					type: "audio",
					progress: this.getCurrentProgress("audio")
				});
			} catch {
				L.e(this.TAG, "Error in onProgress callback");
			}
		});
	}
	onNewTrackStart(e) {
		this.on("newTrackStart", e);
	}
	onPlaylistEnded(e) {
		this.on("playlistEnded", e);
	}
	onCurrentTrackEnded(e) {
		this.on("currentTrackEnded", e);
	}
	getElement(e = "audio") {
		return e === "audio" ? this.audioManager.getElement() : this.videoManager.getElement();
	}
	removeTracks() {
		return I(this, arguments, function* (e = "audio") {
			let t = (e === "audio" ? this.audioManager : this.videoManager).getTracks();
			for (let e of t) yield this.removeTrack(e);
		});
	}
	play(e) {
		return I(this, arguments, function* (e, t = "audio") {
			let n = t === "audio" ? this.audioManager : this.videoManager, r = n.getElement();
			if (this.isItemCurrentlyPlaying(e, t)) {
				L.w(this.TAG, `The ${t} is currently playing`);
				return;
			}
			if (r != null && r.src.includes(e)) yield r.play();
			else {
				r?.pause();
				let i = yield n.play(e);
				for (let e of i) yield this.addTrack(e, t === "audio" ? "audioplaylist" : "videoplaylist");
			}
		});
	}
	isItemCurrentlyPlaying(e, t) {
		let n = this.getElement(t);
		return !!(n && !n.paused && n.src.includes(e));
	}
	setDuration(e = "audio") {
		let t = this.getElement(e), { list: n, currentIndex: r } = this.state[e];
		n[r] && (n[r].duration = t?.duration || 0), this.emit("newTrackStart", n[r]);
	}
	pause(e) {
		return I(this, arguments, function* (e, t = "audio") {
			let n = this.getElement(t);
			n && !n.paused && n.src.includes(e) ? (n.pause(), L.d(this.TAG, "paused url", e)) : L.w(this.TAG, "The passed in url is not currently playing");
		});
	}
	addListeners() {
		this.audioManager.on("ended", () => this.handleEnded("audio")), this.videoManager.on("ended", () => this.handleEnded("video")), this.eventBus.localAudioEnabled.subscribe(this.handlePausePlaylist), this.eventBus.localVideoEnabled.subscribe(this.handlePausePlaylist);
	}
	handleEnded() {
		return I(this, arguments, function* (e = "audio") {
			let { list: t, currentIndex: n, isAutoplayOn: r } = this.state[e];
			n === t.length - 1 ? (yield this.stop(e), this.emit("playlistEnded", e)) : r ? this.playNext(e) : yield this.pause(t[n].url, e), this.emit("currentTrackEnded", t[n]);
		});
	}
}, W = (e) => e.room, qs = (e) => e.errors, Js = C(qs, (e) => e.length === 0 ? null : e.at(-1)), Ys = C(W, (e) => e.id), Xs = (e) => e.peers, Zs = (e) => e.messages.byID, Qs = (e) => e.messages.allIDs, G = (e) => e.tracks, $s = (e) => e.settings, ec = (e) => e.appData, tc = (e) => e.devices, nc = (e) => e.speakers, rc = (e) => e.connectionQualities, ic = C([W], (e) => e && e.isConnected), ac = C([ic, W], (e, t) => e ? t.peerCount === void 0 ? t.peers.length : t.peerCount || 1 : Math.max(t.peerCount === void 0 ? t.peers.length - 1 : t.peerCount, 0)), oc = C([
	W,
	Xs,
	(e) => e.hideLocalPeer
], (e, t, n) => n ? e.peers.filter((t) => e.localPeer !== t).map((e) => t[e]) : e.peers.map((e) => t[e])), sc = C(G, (e) => Object.values(e)), cc = C(W, Xs, (e, t) => t[e.localPeer]), lc = C(W, (e) => e.localPeer), uc = C(cc, (e) => e?.name), dc = C(cc, (e) => e?.roleName), fc = C(cc, (e) => e?.audioTrack), pc = C(cc, (e) => e?.videoTrack), mc = C([
	fc,
	pc,
	C(cc, (e) => e?.auxiliaryTracks)
], (e, t, n) => {
	let r = n ? [...n] : [];
	return e && r.unshift(e), t && r.unshift(t), r;
}), hc = C(oc, (e) => e.filter((e) => !e.isLocal)), gc = C(Xs, nc, (e, t) => {
	let n = Object.entries(t).sort((e, t) => {
		let n = e[1]?.audioLevel || 0;
		return (t[1]?.audioLevel || 0) > n ? 1 : -1;
	});
	if (n.length > 0 && n[0][1].audioLevel && n[0][1].audioLevel > 0) {
		let t = n[0][1].peerID;
		if (t in e) return e[t];
	}
	return null;
}), _c = (e) => Wi(e, cc(e)?.audioTrack), vc = (e) => Wi(e, cc(e)?.videoTrack), yc = (e) => Gi(e, cc(e)?.videoTrack), bc = C(cc, G, (e, t) => {
	let { video: n, audio: r } = Li(t, e);
	return !!(n || r);
}), xc = C(Xs, G, (e, t) => {
	let n;
	for (let r in e) {
		let i = e[r], { video: a, audio: o } = Li(t, i);
		if (a) return i;
		o && !n && (n = i);
	}
	return n;
}), Sc = C(xc, (e) => !!e), Cc = C(Xs, G, (e, t) => {
	for (let n in e) {
		let r = e[n], { audio: i, video: a } = Li(t, r);
		if (!a && i) return r;
	}
}), wc = C(Xs, G, (e, t) => {
	let n = [], r = [];
	for (let i in e) {
		let a = e[i], { video: o, audio: s } = Li(t, a);
		o ? n.push(a) : s && r.push(a);
	}
	return n.concat(r);
}), Tc = C(Xs, G, (e, t) => {
	for (let n in t) {
		let r = t[n];
		if (Hi(r) && zi(r) && r.peerId) return e[r.peerId];
	}
}), Ec = C(Xs, G, (e, t) => {
	for (let n in t) {
		let r = t[n];
		if (Vi(r) && r.peerId) return e[r.peerId];
	}
}), Dc = C(sc, (e) => e.filter(Ui)), Oc = C(Qs, (e) => e.length), kc = C(Zs, (e) => Object.values(e).filter((e) => !e.read).length), Ac = C(Qs, Zs, (e, t) => {
	let n = [];
	return e.forEach((e) => {
		n.push(t[e]);
	}), n;
}), jc = C(Ac, (e) => e.filter((e) => !e.recipientPeer && !(e.recipientRoles && e.recipientRoles?.length > 0))), Mc = C(jc, (e) => e.filter((e) => !e.read).length), Nc = C([W], (e) => e && e.roomState), Pc = C(Nc, (e) => e === "Preview"), Fc = C(W, (e) => e.roomState !== "Disconnected"), Ic = C(W, (e) => !e.transcriptions || e.transcriptions.length <= 0 ? !1 : e.transcriptions.some((e) => e.mode === "caption" && e.state === "started")), Lc = (e) => e.roles, Rc = C([Lc], (e) => Object.keys(e)), zc = C([cc, Lc], (e, t) => e != null && e.roleName ? t[e.roleName] : null), Bc = (e) => e.preview?.asRole, Vc = C([Bc, Lc], (e, t) => e ? t[e] : null), Hc = C([zc], (e) => {
	var t;
	return (t = e?.subscribeParams) != null && t.subscribeToRoles ? e.subscribeParams.subscribeToRoles.length > 0 : !1;
}), Uc = C(zc, (e) => e?.permissions), Wc = C(W, (e) => e.recording), Gc = C(W, (e) => e.rtmp), Kc = C(W, (e) => e.hls), qc = C(W, (e) => e.transcriptions), Jc = C(W, (e) => {
	let t = e.transcriptions?.find((e) => e.mode === "caption");
	if (t != null && t.translation) return {
		available: !0,
		enabled: t.translation.enabled,
		roleLanguages: t.translation.roleLanguages
	};
	let n = e.translationConfig?.caption;
	return n ? {
		available: !0,
		enabled: !1,
		roleLanguages: n.roleLanguages
	} : {
		available: !1,
		enabled: !1,
		roleLanguages: void 0
	};
}), Yc = C(W, (e) => e.sessionId), Xc = C(W, (e) => e.startedAt), Zc = C(W, (e) => !!e.isLargeRoom), Qc = C(W, (e) => !!e.isEffectsEnabled), $c = C(W, (e) => !!e.isVBEnabled), el = C(W, (e) => e.effectsKey), tl = (e) => e.templateAppData, nl = (e) => e.sessionMetadata, rl = (e) => e.polls, il = (e) => Object.values(e.polls), al = C(oc, (e) => e.filter((e) => e.isHandRaised)), ol = (e) => e.whiteboards, sl = C(ol, (e) => Object.values(e)[0]), cl = (e = "audio") => (t) => t.playlist[e].list, ll = (e = "audio") => (t) => t.playlist[e].selection, ul = (e = "audio") => (t) => t.playlist[e].progress, dl = (e = "audio") => (t) => t.playlist[e].currentTime, fl = (e = "audio") => (t) => t.playlist[e].playbackRate, pl = (e = "audio") => (t) => t.playlist[e].volume, ml = (e = "audio") => C(cl(e), (e) => Object.values(e)), hl = (e = "audio") => C(cl(e), ll(e), (e, t) => {
	if (t.id) return e[t.id];
}), gl = {
	selection: ll("audio"),
	progress: ul("audio"),
	currentTime: dl("audio"),
	playbackRate: fl("audio"),
	volume: pl("audio"),
	list: ml("audio"),
	selectedItem: hl("audio")
}, _l = {
	selection: ll("video"),
	progress: ul("video"),
	currentTime: dl("video"),
	playbackRate: fl("video"),
	volume: pl("video"),
	list: ml("video"),
	selectedItem: hl("video")
};
function K(e) {
	return (t) => (n) => e(n, t);
}
var vl = "HMS-Store:", q = class {
	static v(e, ...t) {
		this.log(0, e, ...t);
	}
	static d(...e) {
		this.log(1, ...e);
	}
	static i(...e) {
		this.log(2, ...e);
	}
	static w(...e) {
		this.log(3, ...e);
	}
	static e(...e) {
		this.log(6, ...e);
	}
	static time(e) {
		this.log(4, "[HMSPerformanceTiming]", e);
	}
	static timeEnd(e) {
		this.log(5, "[HMSPerformanceTiming]", e, e);
	}
	static cleanup() {
		performance.clearMarks(), performance.clearMeasures();
	}
	static log(e, ...t) {
		if (!(this.level.valueOf() > e.valueOf())) switch (e) {
			case 0:
				console.log(vl, ...t);
				break;
			case 1:
				console.debug(vl, ...t);
				break;
			case 2:
				console.info(vl, ...t);
				break;
			case 3:
				console.warn(vl, ...t);
				break;
			case 6:
				console.error(vl, ...t);
				break;
			case 4:
				performance.mark(t[1]);
				break;
			case 5: {
				let e = t[0], n = t[1];
				try {
					let t = performance.measure(n, n);
					this.log(1, e, n, t?.duration), performance.clearMarks(n), performance.clearMeasures(n);
				} catch (t) {
					this.log(1, e, n, t);
				}
				break;
			}
		}
	}
};
q.level = 0;
var yl = (e, t) => t, bl = (e, t) => t, xl = (e, t) => t, Sl = (e, t) => t, Cl = (e, t) => t, wl = C([Xs, yl], (e, t) => t ? e[t] : null), Tl = C([G, bl], (e, t) => t ? e[t] : null), El = C([G, bl], (e, t) => {
	if (!t) return null;
	let n = e[t];
	return n?.type === "video" ? n : null;
}), Dl = C([G, bl], (e, t) => {
	if (!t) return null;
	let n = e[t];
	return n?.type === "audio" ? n : null;
}), Ol = C([G, bl], (e, t) => {
	if (!t) return null;
	let n = e[t];
	return n?.type === "audio" && n?.source === "screen" ? n : null;
}), kl = C([G, bl], (e, t) => {
	if (!t) return null;
	let n = e[t];
	return n?.type === "video" && n?.source === "screen" ? n : null;
}), Al = C([rl, Cl], (e, t) => t ? e[t] : null), jl = K(wl), Ml = K(C([ec, Sl], (e, t) => {
	if (e) return t ? e[t] : e;
}));
function Nl(e) {
	return (t) => {
		if (t.sessionStore) return e ? t.sessionStore[e] : t.sessionStore;
	};
}
var Pl = (...e) => C([ec], (t) => {
	if (t) {
		if (e && e.length > 0) {
			let n = t;
			for (let t of e) {
				if (!t) return n;
				n = n?.[t];
			}
			return n;
		}
		return t;
	}
}), Fl = K(C(wl, (e) => e?.name)), Il = K(C(wl, (e) => e?.type)), Ll = K(Tl), Rl = K(El), zl = K(Dl), Bl = K(Ol), Vl = K(kl), Hl = K((e, t) => {
	let n = wl(e, t);
	if (n && n.videoTrack && n.videoTrack !== "") return e.tracks[n.videoTrack];
}), Ul = K((e, t) => {
	let n = wl(e, t);
	if (n && n.audioTrack && n.audioTrack !== "") return e.tracks[n.audioTrack];
}), Wl = Hl, Gl = K((e, t) => wl(e, t)?.auxiliaryTracks.map((t) => e.tracks[t]) || []), Kl = (e, t) => t ? e.speakers[t] : null, ql = K(C(Kl, (e) => e?.audioLevel || 0)), Jl = K(C((e, t) => Kl(e, Ul(t)(e)?.id), (e) => e?.audioLevel || 0)), Yl = K((e, t) => {
	if (t) return e.connectionQualities[t];
}), Xl = K((e, t) => {
	let n = wl(e, t);
	if (n) {
		let t = n?.auxiliaryTracks.find((t) => Ri(e.tracks[t]));
		return t ? e.tracks[t] : void 0;
	}
}), Zl = K(C(G, wl, (e, t) => {
	let n = t?.auxiliaryTracks.find((t) => {
		let n = e[t];
		return Hi(n) && zi(n);
	});
	return n ? e[n] : void 0;
})), Ql = K(C(G, wl, (e, t) => {
	let n = t?.auxiliaryTracks.find((t) => {
		let n = e[t];
		return Hi(n) && Ri(n);
	});
	return n ? e[n] : void 0;
})), $l = K(C(G, wl, (e, t) => {
	let n = t?.auxiliaryTracks.find((t) => {
		let n = e[t];
		return Vi(n) && Ri(n);
	});
	return n ? e[n] : void 0;
})), eu = K(C(G, wl, (e, t) => Li(e, t))), tu = (e) => C(eu(e), (e) => e.video), nu = (e) => C(eu(e), (e) => e.audio), ru = K((e, t) => Wi(e, wl(e, t)?.audioTrack)), iu = K((e, t) => Wi(e, wl(e, t)?.videoTrack)), au = K((e, t) => {
	if (t && e.tracks[t]) return e.tracks[t].volume === 0;
}), ou = K((e, t) => au(wl(e, t)?.audioTrack)(e)), su = K((e, t) => au(nu(t)(e)?.id)(e)), cu = K((e, t) => {
	let n = Tl(e, t);
	if (n) {
		if (n.type !== "audio") {
			q.w("Please pass audio track here");
			return;
		}
		return n.volume;
	}
}), lu = K((e, t) => cu(wl(e, t)?.audioTrack)(e)), uu = K((e, t) => cu(nu(t)(e)?.id)(e)), du = K((e, t) => {
	let n = Tl(e, t);
	if (n) {
		if (n.type !== "video") {
			q.w("Please pass video track here");
			return;
		}
		return n.layer;
	}
}), fu = C([
	Ac,
	lc,
	yl
], (e, t, n) => {
	if (n) return e.filter((e) => {
		var r;
		return !e.recipientPeer && !((r = e.recipientRoles) != null && r.length) || e.sender && ![t, n].includes(e.sender) ? !1 : [t, n].includes(e.recipientPeer);
	});
}), pu = C([Ac, xl], (e, t) => {
	if (t) return e.filter((e) => {
		var n;
		return (n = e.recipientRoles) != null && n.length ? e.recipientRoles?.includes(t) : !1;
	});
}), mu = C(Ac, (e) => e.filter((e) => {
	var t;
	return !e.recipientPeer && !((t = e.recipientRoles) != null && t.length);
})), hu = C([pu, xl], (e) => e ? e.filter((e) => !e.read).length : 0), gu = C([fu, yl], (e) => e ? e.filter((e) => !e.read).length : 0), _u = C(mu, (e) => e.filter((e) => !e.read).length), vu = K(fu), yu = K(pu), bu = K(hu), xu = K(gu), Su = (e) => C([oc], (t) => t.filter((t) => t.roleName === e)), Cu = (e) => C([oc], (t) => t.filter((t) => t.roleName ? e.includes(t.roleName) : !1)), wu = (e) => C(jl(e), (e) => {
	try {
		return e != null && e.metadata && e.metadata !== "" ? JSON.parse(e.metadata) : {};
	} catch (e) {
		return console.error("cannot parse peer metadata", e), {};
	}
}), Tu = (e) => C(jl(e), (e) => !!(e != null && e.isHandRaised)), Eu = (e) => C(jl(e), (e) => e?.name), Du = K(Al), Ou = (e) => C(Zs, (t) => t[e]), ku = (e) => C(zc, (t) => t != null && t.permissions.transcriptions ? t.permissions.transcriptions[e].length > 0 : !1), Au = C([Xs, G], (e, t) => Object.values(e).map((e) => ({
	peer: e,
	isAudioEnabled: e.audioTrack ? t[e.audioTrack]?.enabled : !1
}))), ju = C([
	(e) => e.roleChangeRequests[0] || null,
	Xs,
	Lc
], (e, t, n) => e ? {
	requestedBy: e.requestedBy ? t[e.requestedBy] : void 0,
	role: n[e.roleName],
	token: e.token
} : null), Mu = C([zc], (e) => Ki(e)), Nu = C([Vc], (e) => Ki(e)), Pu = (e) => C([Lc], (t) => t[e]), Fu = (e) => C(Pu(e), (e) => Ki(e)), Iu = C([pc, G], (e, t) => {
	let n = null;
	return e && (n = t[e]), n?.plugins || [];
}), Lu = C([fc, G], (e, t) => {
	let n = null;
	return e && (n = t[e]), n?.plugins || [];
}), Ru = (e) => C([Iu], (t) => t.includes(e)), zu = (e) => C([Lu], (t) => t.includes(e)), Bu = (e) => C(oc, (t) => t.find(e)), Vu = (e) => C(oc, (t) => t.filter(e)), Hu = (e) => C(W, (t) => t.joinedAt && Date.now() - t.joinedAt.getTime() <= e), Uu = {
	0: "PEER_JOINED",
	1: "PEER_LEFT",
	8: "ROLE_UPDATED",
	10: "NAME_UPDATED",
	11: "METADATA_UPDATED",
	12: "HAND_RAISE_CHANGED"
}, Wu = {
	0: "TRACK_ADDED",
	1: "TRACK_REMOVED",
	2: "TRACK_MUTED",
	3: "TRACK_UNMUTED",
	5: "TRACK_DEGRADED",
	6: "TRACK_RESTORED",
	4: "TRACK_DESCRIPTION_CHANGED"
}, Gu = {
	0: "POLL_CREATED",
	1: "POLL_STARTED",
	2: "POLL_STOPPED",
	4: "POLL_VOTES_UPDATED",
	3: "POLLS_LIST"
}, Ku = { TRANSCRIPTION_STATE_UPDATED: "TRANSCRIPTION_STATE_UPDATED" }, qu = "hmsNotification", Ju = class {
	constructor(e) {
		this.id = 0, this.onNotification = (e, t) => {
			let n = (n) => {
				if (t) {
					let e;
					if (e = Array.isArray(t) ? t.includes(n.type) : t === n.type, !e) return;
				}
				e(n);
			};
			return this.eventEmitter.addListener(qu, n), () => {
				this.eventEmitter.removeListener(qu, n);
			};
		}, this.store = e, this.eventEmitter = new fr.EventEmitter2({ maxListeners: Object.keys(Fi).length });
	}
	sendPlaylistTrackEnded(e) {
		let t = this.createNotification("PLAYLIST_TRACK_ENDED", e, "info");
		this.emitEvent(t);
	}
	sendDeviceChange(e) {
		let t = this.createNotification("DEVICE_CHANGE_UPDATE", e, e.error ? "error" : "info", `Selected ${e.type} device - ${e.selection?.label}`);
		this.emitEvent(t);
	}
	sendLeaveRoom(e) {
		let t = e.requestedBy?.name, n = this.createNotification(e.roomEnded || !t ? "ROOM_ENDED" : "REMOVED_FROM_ROOM", e, "info", `${e.roomEnded ? "Room ended" : "Removed from room"} ${t ? `by ${t}` : ""}`);
		this.emitEvent(n);
	}
	sendPeerList(e) {
		if (e.length === 0) return;
		let t = this.createNotification("PEER_LIST", e, "info");
		this.emitEvent(t);
	}
	sendPeerUpdate(e, t) {
		let n = this.store.getState(jl(t?.id)) || t, r = Uu[e];
		if (r && n) {
			let e = this.createNotification(r, n, "info");
			this.emitEvent(e);
		}
	}
	sendTrackUpdate(e, t) {
		let n = this.store.getState(Ll(t)), r = Wu[e];
		if (r) {
			let e = this.createNotification(r, n, "info");
			this.emitEvent(e);
		}
	}
	sendMessageReceived(e) {
		let t = this.createNotification("NEW_MESSAGE", e, "info");
		this.emitEvent(t);
	}
	sendError(e) {
		let t = this.createNotification("ERROR", e, "error");
		this.emitEvent(t);
	}
	sendReconnecting(e) {
		let t = this.createNotification("RECONNECTING", e, "error");
		this.emitEvent(t);
	}
	sendReconnected() {
		let e = this.createNotification("RECONNECTED", null, "info");
		this.emitEvent(e);
	}
	sendChangeTrackStateRequest(e) {
		let t = this.createNotification("CHANGE_TRACK_STATE_REQUEST", e, "info");
		this.emitEvent(t);
	}
	sendChangeMultiTrackStateRequest(e) {
		let t = this.createNotification("CHANGE_MULTI_TRACK_STATE_REQUEST", e, "info");
		this.emitEvent(t);
	}
	sendPollUpdate(e, t) {
		let n = Gu[e], r = this.store.getState(Du(t));
		if (n) {
			let e = this.createNotification(n, r, "info");
			this.emitEvent(e);
		}
	}
	sendTranscriptionUpdate(e) {
		let t = this.createNotification(Ku.TRANSCRIPTION_STATE_UPDATED, e, "info");
		this.emitEvent(t);
	}
	emitEvent(e) {
		this.eventEmitter.emit(qu, e);
	}
	createNotification(e, t, n, r = "") {
		return this.id++, {
			id: this.id,
			type: e,
			message: r,
			data: t,
			severity: n
		};
	}
}, Yu = class {
	constructor(e) {
		this.queuedUpdates = {}, this.timers = {}, this.DEFAULT_INTERVAL_MS = 50, this.store = e;
	}
	setState(e, t, n = this.DEFAULT_INTERVAL_MS) {
		this.queuedUpdates[t] = this.queuedUpdates[t] || [], this.queuedUpdates[t].push(e), !this.timers[t] && (window ? this.timers[t] = window.setTimeout(() => this.setStateBatched(t), n) : this.setStateBatched(t));
	}
	setStateBatched(e) {
		this.queuedUpdates[e]?.length > 0 && (console.time(`timed-${e}`), this.store.namedSetState((t) => {
			this.queuedUpdates[e].forEach((e) => {
				try {
					e(t);
				} catch (e) {
					q.w("failed to update store", e);
				}
			});
		}, e), console.timeEnd(`timed-${e}`)), delete this.queuedUpdates[e], window && this.timers[e] && (window.clearTimeout(this.timers[e]), delete this.timers[e]);
	}
};
function Xu(e) {
	return e instanceof ko || e instanceof ss;
}
var Zu = (e, t) => {
	let n = sd(Object.keys(e), Object.keys(t));
	for (let r of n) {
		let n = e[r], i = t[r];
		rd(n, i) ? (od(n.auxiliaryTracks, i.auxiliaryTracks) && (i.auxiliaryTracks = n.auxiliaryTracks), n.groups && od(n.groups, i.groups) && (i.groups = n.groups), Object.assign(n, i)) : id(n, i) ? delete e[r] : ad(n, i) && (e[r] = i);
	}
}, Qu = (e, t) => {
	let n = sd(Object.keys(e), Object.keys(t));
	for (let r of n) {
		let n = e[r], i = t[r];
		rd(n, i) ? (nd(n, i), Object.assign(n, i)) : id(n, i) ? delete e[r] : ad(n, i) && (e[r] = i);
	}
}, $u = (e, t) => {
	let n = sd(Object.keys(e), Object.keys(t));
	for (let r of n) {
		let n = e[r], i = t[r];
		rd(n, i) ? (n.questions && od(n.questions, i.questions) && (i.questions = n.questions), Object.assign(n, i)) : ad(n, i) && (e[r] = i);
	}
}, ed = (e, t) => {
	let n = sd(Object.keys(e), Object.keys(t));
	for (let r of n) {
		let n = e[r], i = t[r];
		rd(n, i) ? Object.assign(n, i) : id(n, i) ? delete e[r] : ad(n, i) && (e[r] = i);
	}
}, td = (e, t, n) => {
	let r = n.reduce((e, n) => (e[n.firstTrackId] = Object.values(t[n.getTrackIDBeingSent()] || {}).sort((e, t) => !e.rid || !t.rid ? 0 : e.rid < t.rid ? -1 : 1), e), {}), i = sd(Object.keys(e), Object.keys(r));
	for (let t of i) {
		if (!r[t]) {
			delete e[t];
			continue;
		}
		e[t] = r[t];
	}
}, nd = (e, t) => {
	e.plugins && od(e.plugins, t.plugins) && (t.plugins = e.plugins), e.type === "video" && e.layerDefinitions && od(e.layerDefinitions, t.layerDefinitions) && (t.layerDefinitions = e.layerDefinitions);
}, rd = (e, t) => e && t, id = (e, t) => e && !t, ad = (e, t) => !e && t, od = (e, t) => {
	if (e === t || e.length === 0 && t?.length === 0) return !0;
	if (!e || !t || e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}, sd = (e, t) => {
	let n = /* @__PURE__ */ new Set();
	for (let t of e) n.add(t);
	for (let e of t) n.add(e);
	return Array.from(n);
}, J = class e {
	static convertPeer(e) {
		return {
			id: e.peerId,
			name: e.name,
			roleName: e.role?.name,
			isLocal: e.isLocal,
			videoTrack: e.videoTrack?.trackId,
			audioTrack: e.audioTrack?.trackId,
			auxiliaryTracks: e.auxiliaryTracks.map((e) => e.trackId),
			customerUserId: e.customerUserId,
			metadata: e.metadata,
			joinedAt: e.joinedAt,
			groups: e.groups,
			isHandRaised: e.isHandRaised,
			type: e.type
		};
	}
	static convertTrack(e, t) {
		let n = {
			id: e.trackId,
			source: e.source,
			type: e.type,
			enabled: e.enabled,
			displayEnabled: e.enabled,
			peerId: e.peerId || t
		};
		return this.enrichTrack(n, e), n;
	}
	static enrichTrack(t, n) {
		let r = n.getMediaTrackSettings();
		n instanceof ko && (t.volume = n.getVolume() || 0), e.updateDeviceID(t, n), e.enrichLocalTrack(t, n), t.type === "video" && (t.source === "screen" ? (t.displaySurface = r.displaySurface, e.enrichScreenTrack(t, n)) : t.source === "regular" && (t.facingMode = r.facingMode), t.height = r.height, t.width = r.width, e.enrichVideoTrack(t, n)), e.enrichPluginsDetails(t, n);
	}
	static enrichLocalTrack(e, t) {
		(t instanceof qo || t instanceof Oo) && (e.isPublished = t.isPublished);
	}
	static updateDeviceID(e, t) {
		t instanceof qo || t instanceof Oo ? e.deviceID = t.settings.deviceId : e.deviceID = t.getMediaTrackSettings()?.deviceId;
	}
	static enrichVideoTrack(e, t) {
		t instanceof ss && (e.layer = t.getLayer(), e.preferredLayer = t.getPreferredLayer(), e.degraded = t.degraded), (t instanceof ss || t instanceof qo) && (od(t.getSimulcastDefinitions(), e.layerDefinitions) || (e.layerDefinitions = t.getSimulcastDefinitions()));
	}
	static enrichScreenTrack(e, t) {
		if (t instanceof qo) {
			let n = t.getCaptureHandle?.call(t);
			n?.handle !== e.captureHandle?.handle && (e.captureHandle = n), t.isCurrentTab && (e.displaySurface = "selfBrowser");
		}
	}
	static enrichPluginsDetails(e, t) {
		(t instanceof qo || t instanceof Oo) && (od(t.getPlugins(), e.plugins) || (e.plugins = t.getPlugins()));
	}
	static convertRoom(t, n) {
		let { recording: r, rtmp: i, hls: a, transcriptions: o } = e.convertRecordingStreamingState(t.recording, t.rtmp, t.hls, t.transcriptions);
		return {
			id: t.id,
			name: t.name,
			localPeer: n,
			recording: r,
			rtmp: i,
			hls: a,
			transcriptions: o,
			sessionId: t.sessionId,
			startedAt: t.startedAt,
			joinedAt: t.joinedAt,
			peerCount: t.peerCount,
			isLargeRoom: t.large_room_optimization,
			isEffectsEnabled: t.isEffectsEnabled,
			disableNoneLayerRequest: t.disableNoneLayerRequest,
			isVBEnabled: t.isVBEnabled,
			effectsKey: t.effectsKey,
			isHipaaEnabled: t.isHipaaEnabled,
			isNoiseCancellationEnabled: t.isNoiseCancellationEnabled
		};
	}
	static convertMessage(e, t) {
		return {
			sender: e.peer?.peer_id,
			senderName: e.peer?.info.name,
			senderRole: e.peer?.role,
			senderUserId: e.peer?.info.user_id,
			recipientPeer: e.private ? t : void 0,
			recipientRoles: e.roles,
			time: new Date(e.timestamp),
			type: e.info.type,
			message: e.info.message,
			id: e.message_id
		};
	}
	static convertRoles(e) {
		let t = {};
		return e && e.forEach((e) => {
			t[e.name] = e;
		}), t;
	}
	static convertRoleChangeRequest(e) {
		return {
			requestedBy: e.requestedBy?.peerId,
			roleName: e.role.name,
			token: e.token
		};
	}
	static convertException(e) {
		let t = "trackType" in e, n = {
			code: e.code,
			action: e.action,
			name: e.name,
			message: e.message,
			description: e.description,
			isTerminal: e.isTerminal,
			nativeError: e.nativeError,
			timestamp: /* @__PURE__ */ new Date()
		};
		return t && (n.trackType = e?.trackType), n;
	}
	static convertDeviceChangeUpdate(e) {
		let t = {
			devices: e.devices,
			selection: e.selection,
			type: e.type
		};
		return e.error && (t.error = this.convertException(e.error)), t;
	}
	static convertPlaylist(e) {
		return {
			audio: this.getConvertedPlaylistType(e, "audio"),
			video: this.getConvertedPlaylistType(e, "video")
		};
	}
	static convertPlaylistItem(e, t) {
		let n = t.type, r = e.getCurrentSelection(n), i = e.isPlaying(n), a = t.url === r?.url;
		return F(P({}, t), {
			type: t.type,
			selected: a,
			playing: a && i
		});
	}
	static getConvertedPlaylistType(t, n) {
		let r = {}, i = t.getCurrentSelection(n), a = t.getCurrentProgress(n), o = t.getVolume(n), s = t.getList(n), c = t.getCurrentIndex(n);
		return t.getList(n).forEach((n) => {
			r[n.id] = e.convertPlaylistItem(t, n);
		}), {
			list: r,
			selection: {
				id: i?.id,
				hasPrevious: c > 0,
				hasNext: c < s.length - 1
			},
			progress: a,
			volume: o,
			currentTime: t.getCurrentTime(n),
			playbackRate: t.getPlaybackRate(n)
		};
	}
	static convertRecordingStreamingState(e, t, n, r) {
		return {
			recording: {
				browser: P({ running: !1 }, e?.browser),
				server: P({ running: !1 }, e?.server),
				hls: P({ running: !1 }, e?.hls)
			},
			rtmp: P({ running: !1 }, t),
			hls: {
				variants: (n?.variants)?.map((e) => e) || [],
				running: !!(n != null && n.running),
				error: n?.error
			},
			transcriptions: r || []
		};
	}
}, cd = class {
	constructor(e, t, n, r) {
		this.playlistManager = e, this.syncPlaylistState = n, this.store = r, this.type = t;
	}
	play(e) {
		return I(this, null, function* () {
			if (!e) {
				q.w("Please pass id to play");
				return;
			}
			yield this.playlistManager.setEnabled(!0, {
				id: e,
				type: this.type
			});
		});
	}
	pause() {
		return I(this, null, function* () {
			let e = this.type === "audio" ? gl : _l, t = this.store.getState(e.selection);
			if (!t.id) {
				q.w("No item is currently playing to pause");
				return;
			}
			yield this.playlistManager.setEnabled(!1, {
				id: t.id,
				type: this.type
			});
		});
	}
	playNext() {
		return I(this, null, function* () {
			yield this.playlistManager.playNext(this.type);
		});
	}
	playPrevious() {
		return I(this, null, function* () {
			yield this.playlistManager.playPrevious(this.type);
		});
	}
	seek(e) {
		this.playlistManager.seek(e, this.type), this.syncPlaylistState(`seekOn${this.type}Playlist`);
	}
	seekTo(e) {
		this.playlistManager.seekTo(e, this.type), this.syncPlaylistState(`seekToOn${this.type}Playlist`);
	}
	setVolume(e) {
		this.playlistManager.setVolume(e, this.type), this.syncPlaylistState(`setVolumeOn${this.type}Playlist`);
	}
	setList(e) {
		this.playlistManager.setList(e), this.syncPlaylistState(`setListOn${this.type}Playlist`);
	}
	stop() {
		return I(this, null, function* () {
			yield this.playlistManager.stop(this.type), this.syncPlaylistState(`stop${this.type}Playlist`);
		});
	}
	setIsAutoplayOn(e) {
		this.playlistManager.setIsAutoplayOn(this.type, e);
	}
	setPlaybackRate(e) {
		this.playlistManager.setPlaybackRate(this.type, e), this.syncPlaylistState(`set${this.type}PlaybackRate`);
	}
	removeItem(e) {
		return I(this, null, function* () {
			let t = yield this.playlistManager.removeItem(e, this.type);
			return t && this.syncPlaylistState(`remove${this.type}PlaylistItem`), t;
		});
	}
	clearList() {
		return I(this, null, function* () {
			yield this.playlistManager.clearList(this.type), this.syncPlaylistState(`clear${this.type}Playlist`);
		});
	}
}, ld = class {
	constructor(e, t) {
		this.sdk = e, this.setLocally = t;
	}
	get sdkSessionStore() {
		return this.sdk.getSessionStore();
	}
	set(e, t) {
		return I(this, null, function* () {
			let { value: n } = yield this.sdkSessionStore.set(String(e), t);
			this.setLocally({
				key: e,
				value: n
			});
		});
	}
	observe(e) {
		return I(this, null, function* () {
			let t = Array.isArray(e) ? e.map((e) => String(e)) : [String(e)];
			yield this.sdkSessionStore.observe(t);
		});
	}
	unobserve(e) {
		return I(this, null, function* () {
			let t = Array.isArray(e) ? e.map((e) => String(e)) : [String(e)];
			yield this.sdkSessionStore.unobserve(t);
		});
	}
}, ud = class {
	constructor(e, t) {
		this.TAG = "[BeamSpeakerLabelsLogger]", this.intervalMs = 100, this.shouldMonitor = !1, this.hasStarted = !1, this.unsubs = [], this.analysers = {}, this.store = e, this.actions = t;
	}
	start() {
		return I(this, null, function* () {
			if (this.hasStarted) return;
			this.hasStarted = !0, q.d("starting audio level monitor for remote peers", this.store);
			let e = this.store.getState(ic);
			q.d("starting audio levels is connected to room", e), e && (yield this.monitorAudioLevels());
			let t = this.store.subscribe(this.monitorAudioLevels.bind(this), ic);
			this.unsubs.push(t);
		});
	}
	stop() {
		return I(this, null, function* () {
			this.hasStarted && (this.hasStarted = !1, this.shouldMonitor = !1, this.unsubs.forEach((e) => e()), q.d("stopped audio level monitor for remote peers"));
		});
	}
	monitorAudioLevels() {
		return I(this, null, function* () {
			if (!this.store.getState(ic)) {
				this.shouldMonitor &&= (q.i("room no longer connected, stopping audio level monitoring for remote"), !1);
				return;
			}
			if (this.shouldMonitor) return;
			q.i("monitoring audio levels"), this.shouldMonitor = !0;
			let e = () => {
				this.shouldMonitor ? (this.logAllPeersAudioLevels(), setTimeout(e, this.intervalMs)) : q.i("stopped monitoring audio levels");
			};
			setTimeout(e, 1e3);
		});
	}
	logAllPeersAudioLevels() {
		return I(this, null, function* () {
			if (!window.__triggerBeamEvent__) return;
			let e = this.store.getState(oc), t = e.filter((e) => !!e.audioTrack);
			q.d(this.TAG, "Peers Without audio track", e.filter((e) => !e.audioTrack).map((e) => e.id).join(","));
			let n = [];
			for (let e of t) {
				let t = this.actions.getTrackById(e.audioTrack || "")?.stream?.nativeStream;
				if (e.joinedAt && t) {
					let r = yield this.getAudioLevel(e, t);
					q.d(this.TAG, e.id, r), r.level > 0 && n.push(r);
				}
			}
			if (n.length > 0) {
				let e = {
					event: "app-audio-level",
					data: n
				};
				q.d("logging audio levels", JSON.stringify(n)), window.__triggerBeamEvent__(JSON.stringify(e));
			}
		});
	}
	getAudioLevel(e, t) {
		return I(this, null, function* () {
			this.analysers[t.id] || (this.analysers[t.id] = this.createAnalyserNode(t));
			let n = this.analysers[t.id], r = this.calculateAudioLevel(n);
			return {
				peerId: e.id,
				peerName: e.name,
				userId: e.customerUserId,
				level: r
			};
		});
	}
	createAnalyserNode(e) {
		this.audioContext ||= new AudioContext();
		let t = this.audioContext.createAnalyser();
		return this.audioContext.createMediaStreamSource(e).connect(t), t;
	}
	calculateAudioLevel(e) {
		let t = new Uint8Array(e.fftSize);
		e.getByteTimeDomainData(t);
		let n = .009, r = n;
		for (let e of t) r = Math.max(r, (e - 128) / 128);
		let i = (Math.log(n) - Math.log(r)) / Math.log(n);
		return Math.ceil(Math.min(Math.max(i * 100, 0), 100));
	}
}, dd = 2e4, fd = 1e4, pd = {
	name: "diagnostics-role",
	priority: 1,
	publishParams: {
		allowed: ["audio", "video"],
		audio: {
			bitRate: 32,
			codec: "opus"
		},
		video: {
			bitRate: 100,
			codec: "vp8",
			frameRate: 30,
			height: 720,
			width: 1280
		},
		screen: {
			bitRate: 100,
			codec: "vp8",
			frameRate: 10,
			height: 1080,
			width: 1920
		}
	},
	subscribeParams: {
		subscribeToRoles: [],
		maxSubsBitRate: 3200
	},
	permissions: {
		browserRecording: !1,
		changeRole: !1,
		endRoom: !1,
		hlsStreaming: !1,
		mute: !1,
		pollRead: !1,
		pollWrite: !1,
		removeOthers: !1,
		rtmpStreaming: !1,
		unmute: !1
	}
}, md = "https://100ms.live/test-audio.wav", hd = class {
	constructor() {
		this.networkScores = [], this.lastPushedAt = 0;
	}
	pushScore(e) {
		!e || e < 0 || (this.networkScores.length === 0 ? (this.networkScores.push(e), this.lastPushedAt = Date.now()) : this.addPendingCQSTillNow());
	}
	addPendingCQSTillNow() {
		if (this.networkScores.length > 0) {
			let e = (Date.now() - this.lastPushedAt) / 1e3;
			for (; e > 0;) this.networkScores.push(this.networkScores[this.networkScores.length - 1]), --e;
			this.lastPushedAt = Date.now();
		}
	}
	getCQS() {
		return this.networkScores.reduce((e, t) => e + t, 0) / this.networkScores.length;
	}
}, gd = (e) => !!e && !isNaN(e), _d = (e) => e[e.length - 1], vd = (e, t) => {
	let n = e.filter((e) => gd(t(e)));
	return n.reduce((e, n) => e + (t(n) || 0), 0) / n.length;
}, yd = class {
	constructor(e) {
		this.sdk = e, this.peerStatsList = [], this.localAudioTrackStatsList = [], this.localVideoTrackStatsList = [], this.remoteAudioTrackStatsList = [], this.remoteVideoTrackStatsList = [];
	}
	handleStatsUpdate(e) {
		return I(this, null, function* () {
			let t = e.getLocalPeerStats();
			t && this.peerStatsList.push(t);
			let n = this.sdk.getLocalPeer()?.audioTrack?.nativeTrack?.id, r = this.sdk.getLocalPeer()?.videoTrack?.nativeTrack?.id, i = e.getLocalTrackStats();
			i && (n && this.localAudioTrackStatsList.push(i[n]), r && this.localVideoTrackStatsList.push(i[r])), (yield (this.sdk.getWebrtcInternals()?.getSubscribePeerConnection())?.getStats())?.forEach((e) => {
				if (e.type === "inbound-rtp") {
					let t = e.kind === "audio" ? this.remoteAudioTrackStatsList : this.remoteVideoTrackStatsList, n = As("bytesReceived", e, _d(t));
					t.push(F(P({}, e), { bitrate: n }));
				}
			});
		});
	}
	buildReport() {
		let e = _d(this.peerStatsList)?.publish, t = _d(this.peerStatsList)?.subscribe, n = e != null && e.responsesReceived ? (e?.totalRoundTripTime || 0) / e.responsesReceived : 0, r = t != null && t.responsesReceived ? (t?.totalRoundTripTime || 0) / t.responsesReceived : 0, i = Number(((n + r) / 2 * 1e3).toFixed(2)), a = _d(this.remoteAudioTrackStatsList)?.packetsReceived || 0, o = _d(this.remoteVideoTrackStatsList)?.packetsReceived || 0, s = this.localAudioTrackStatsList.map((e) => e ? vd(Object.values(e), (e) => e.bitrate) : 0), c = this.localVideoTrackStatsList.map((e) => e ? vd(Object.values(e), (e) => e.bitrate) : 0), l = _d(this.remoteAudioTrackStatsList)?.jitter || 0, u = _d(this.remoteVideoTrackStatsList)?.jitter || 0, d = Math.max(l, u), f = _d(this.localAudioTrackStatsList), p = _d(this.localVideoTrackStatsList);
		return {
			combined: {
				roundTripTime: i,
				packetsReceived: a + o,
				packetsLost: t?.packetsLost || 0,
				bytesSent: e?.bytesSent || 0,
				bytesReceived: t?.bytesReceived || 0,
				bitrateSent: vd(this.peerStatsList, (e) => e.publish?.bitrate),
				bitrateReceived: vd(this.peerStatsList, (e) => e.subscribe?.bitrate),
				jitter: d
			},
			audio: {
				roundTripTime: i,
				packetsReceived: a,
				packetsLost: _d(this.remoteAudioTrackStatsList)?.packetsLost || 0,
				bytesReceived: _d(this.remoteAudioTrackStatsList)?.bytesReceived || 0,
				bitrateSent: vd(s, (e) => e),
				bitrateReceived: vd(this.remoteAudioTrackStatsList, (e) => e.bitrate),
				bytesSent: f ? Object.values(f).reduce((e, t) => e + (t.bytesSent || 0), 0) : 0,
				jitter: l
			},
			video: {
				roundTripTime: i,
				packetsLost: _d(this.remoteVideoTrackStatsList)?.packetsLost || 0,
				bytesReceived: _d(this.remoteVideoTrackStatsList)?.bytesReceived || 0,
				packetsReceived: o,
				bitrateSent: vd(c, (e) => e),
				bitrateReceived: vd(this.remoteVideoTrackStatsList, (e) => e.bitrate),
				bytesSent: p ? Object.values(p).reduce((e, t) => e + (t.bytesSent || 0), 0) : 0,
				jitter: u
			}
		};
	}
}, bd = ((e) => (e[e.STARTING = 0] = "STARTING", e[e.INIT_FETCHED = 1] = "INIT_FETCHED", e[e.SIGNAL_CONNECTED = 2] = "SIGNAL_CONNECTED", e[e.ICE_ESTABLISHED = 3] = "ICE_ESTABLISHED", e[e.MEDIA_CAPTURED = 4] = "MEDIA_CAPTURED", e[e.MEDIA_PUBLISHED = 5] = "MEDIA_PUBLISHED", e[e.COMPLETED = 6] = "COMPLETED", e))(bd || {}), xd = class {
	constructor(e, t, n, r, i = dd) {
		this.sdk = e, this.sdkListener = t, this.progressCallback = n, this.completionCallback = r, this.connectivityDuration = i, this.wsConnected = !1, this.initConnected = !1, this.isPublishICEConnected = !1, this.isSubscribeICEConnected = !1, this.gatheredPublishICECandidates = [], this.gatheredSubscribeICECandidates = [], this.errors = [], this.isAudioTrackCaptured = !1, this.isVideoTrackCaptured = !1, this.isAudioTrackPublished = !1, this.isVideoTrackPublished = !1, this.cqsCalculator = new hd(), this.timestamp = Date.now(), this.onRoomUpdate = this.sdkListener.onRoomUpdate.bind(this.sdkListener), this.onPeerUpdate = this.sdkListener.onPeerUpdate.bind(this.sdkListener), this.onMessageReceived = this.sdkListener.onMessageReceived.bind(this.sdkListener), this.onReconnected = this.sdkListener.onReconnected.bind(this.sdkListener), this.onRoleChangeRequest = this.sdkListener.onRoleChangeRequest.bind(this.sdkListener), this.onRoleUpdate = this.sdkListener.onRoleUpdate.bind(this.sdkListener), this.onChangeTrackStateRequest = this.sdkListener.onChangeTrackStateRequest.bind(this.sdkListener), this.onChangeMultiTrackStateRequest = this.sdkListener.onChangeMultiTrackStateRequest.bind(this.sdkListener), this.onRemovedFromRoom = this.sdkListener.onRemovedFromRoom.bind(this.sdkListener), this.onNetworkQuality = this.sdkListener.onNetworkQuality?.bind(this.sdkListener), this.onPreview = this.sdkListener.onPreview.bind(this.sdkListener), this.onDeviceChange = this.sdkListener.onDeviceChange?.bind(this.sdkListener), this.onSessionStoreUpdate = this.sdkListener.onSessionStoreUpdate.bind(this.sdkListener), this.onPollsUpdate = this.sdkListener.onPollsUpdate.bind(this.sdkListener), this.onWhiteboardUpdate = this.sdkListener.onWhiteboardUpdate.bind(this.sdkListener), this.handleConnectionQualityUpdate = (e) => {
			let t = e.find((e) => e.peerID === this.sdk?.store.getLocalPeer()?.peerId);
			this.cqsCalculator.pushScore(t?.downlinkQuality);
		}, this.statsCollector = new yd(e), this.state = 0;
	}
	get state() {
		return this._state;
	}
	set state(e) {
		var t;
		e === void 0 || this._state !== void 0 && e < this._state || (this._state = e, (t = this.progressCallback) == null || t.call(this, e));
	}
	onICESuccess(e) {
		e ? this.isPublishICEConnected = !0 : this.isSubscribeICEConnected = !0, this.isPublishICEConnected && this.isSubscribeICEConnected && (this.state = 3);
	}
	onSelectedICECandidatePairChange(e, t) {
		t ? this.selectedPublishICECandidate = e : this.selectedSubscribeICECandidate = e;
	}
	onICECandidate(e, t) {
		t ? this.gatheredPublishICECandidates.push(e) : this.gatheredSubscribeICECandidates.push(e);
	}
	onMediaPublished(e) {
		switch (e.type) {
			case "audio":
				this.isAudioTrackPublished = !0;
				break;
			case "video":
				this.isVideoTrackPublished = !0;
				break;
			default: break;
		}
		this.isVideoTrackPublished && this.isAudioTrackPublished && (this.state = 5);
	}
	onInitSuccess(e) {
		this.websocketURL = e, this.initConnected = !0, this.state = 1;
	}
	onSignallingSuccess() {
		this.wsConnected = !0, this.state = 2;
	}
	onJoin(e) {
		var t, n;
		this.sdkListener.onJoin(e), (t = this.sdk.getWebrtcInternals()) == null || t.onStatsChange((e) => this.statsCollector.handleStatsUpdate(e)), (n = this.sdk.getWebrtcInternals()) == null || n.start(), this.cleanupTimer = window.setTimeout(() => {
			this.cleanupAndReport();
		}, this.connectivityDuration);
	}
	onError(e) {
		this.sdkListener.onError(e), this.errors.push(e), e != null && e.isTerminal && this.cleanupAndReport();
	}
	onTrackUpdate(e, t, n) {
		if (this.sdkListener.onTrackUpdate(e, t, n), n.isLocal && e === 0) {
			switch (t.type) {
				case "audio":
					this.isAudioTrackCaptured = !0;
					break;
				case "video":
					this.isVideoTrackCaptured = !0;
					break;
				default: break;
			}
			this.isVideoTrackCaptured && this.isAudioTrackCaptured && (this.state = 4);
		}
	}
	onReconnecting(e) {
		this.sdkListener.onReconnecting(e), this.cqsCalculator.addPendingCQSTillNow();
	}
	cleanupAndReport() {
		var e;
		clearTimeout(this.cleanupTimer), this.cleanupTimer = void 0, this.state === 5 && (this.state = 6), (e = this.completionCallback) == null || e.call(this, this.buildReport()), this.sdk.leave();
	}
	buildReport() {
		this.cqsCalculator.addPendingCQSTillNow();
		let e = this.cqsCalculator.getCQS(), t = this.statsCollector.buildReport();
		return {
			testTimestamp: this.timestamp,
			connectivityState: this.state,
			errors: this.errors,
			signallingReport: {
				isConnected: this.wsConnected,
				isInitConnected: this.initConnected,
				websocketUrl: this.websocketURL
			},
			mediaServerReport: {
				stats: t,
				connectionQualityScore: e,
				isPublishICEConnected: this.isPublishICEConnected,
				isSubscribeICEConnected: this.isSubscribeICEConnected,
				publishICECandidatePairSelected: this.selectedPublishICECandidate,
				subscribeICECandidatePairSelected: this.selectedSubscribeICECandidate,
				publishIceCandidatesGathered: this.gatheredPublishICECandidates,
				subscribeIceCandidatesGathered: this.gatheredSubscribeICECandidates
			}
		};
	}
}, Sd = class {
	constructor(e) {
		this.recording = {
			server: { running: !1 },
			browser: { running: !1 },
			hls: { running: !1 }
		}, this.rtmp = { running: !1 }, this.hls = {
			running: !1,
			variants: []
		}, this.transcriptions = [], this.id = e;
	}
}, Cd = (e, t, n) => I(null, null, function* () {
	let r = Error("something went wrong during fetch");
	for (let i = 0; i < 4; i++) try {
		let r = yield fetch(e, t), i = yield r.clone().json();
		if (n && n.length && !r.ok && n.includes(i.code)) throw B.APIErrors.ServerErrors(i.code, "GET_TOKEN", i.message, !1);
		return r;
	} catch (e) {
		r = e;
	}
	throw ["Failed to fetch", "NetworkError"].some((e) => r.message.includes(e)) ? B.APIErrors.EndpointUnreachable("GET_TOKEN", r.message) : r;
}), wd = class {
	constructor(e, t) {
		this.sdk = e, this.sdkListener = t, this.recordedAudio = md, this.sdk.setIsDiagnostics(!0), this.initSdkWithLocalPeer();
	}
	get localPeer() {
		return this.sdk?.store.getLocalPeer();
	}
	checkBrowserSupport() {
		wa(), Ca();
	}
	requestPermission(e) {
		return I(this, null, function* () {
			try {
				let t = yield navigator.mediaDevices.getUserMedia(e);
				return t.getTracks().forEach((e) => e.stop()), yield this.sdk.deviceManager.init(!0), {
					audio: t.getAudioTracks().length > 0,
					video: t.getVideoTracks().length > 0
				};
			} catch (t) {
				throw Ua(t, this.sdk.localTrackManager.getErrorType(!!e.video, !!e.audio));
			}
		});
	}
	startCameraCheck(e) {
		return I(this, null, function* () {
			var t, n;
			if (this.initSdkWithLocalPeer(), !this.localPeer) throw Error("Local peer not found");
			this.sdk.store.setSimulcastEnabled(!1), this.localPeer.role = F(P({}, pd), { publishParams: F(P({}, pd.publishParams), { allowed: ["video"] }) });
			let r = new ro().video(new to().deviceId(e || "default").build()).build(), i = (yield this.sdk?.localTrackManager.getLocalTracks({
				audio: !1,
				video: !0
			}, r))?.find((e) => e.type === "video");
			if (!i) throw Error("No video track found");
			(t = this.sdk) == null || t.deviceManager.init(!0), this.localPeer.videoTrack = i, (n = this.sdk?.listener) == null || n.onPeerUpdate(9, [this.localPeer]);
		});
	}
	stopCameraCheck() {
		var e;
		(e = this.localPeer?.videoTrack) == null || e.cleanup(), this.localPeer && (this.localPeer.videoTrack = void 0);
	}
	startMicCheck(e) {
		return I(this, arguments, function* ({ inputDevice: e, onError: t, onStop: n, time: r = fd }) {
			var i, a, o;
			this.initSdkWithLocalPeer((e) => {
				this.stopMicCheck(), t?.(e);
			});
			let s = yield this.getLocalAudioTrack(e);
			if ((i = this.sdk) == null || i.deviceManager.init(!0), !this.localPeer) throw Error("Local peer not found");
			if (!s) throw Error("No audio track found");
			this.localPeer.audioTrack = s, (a = this.sdk) == null || a.initPreviewTrackAudioLevelMonitor(), (o = this.sdk?.listener) == null || o.onPeerUpdate(9, [this.localPeer]), this.mediaRecorder = new MediaRecorder(s.stream.nativeStream);
			let c = [];
			this.mediaRecorder.ondataavailable = function(e) {
				c.push(e.data);
			}, this.mediaRecorder.onstop = () => {
				var e;
				let t = new Blob(c, { type: this.mediaRecorder?.mimeType });
				this.recordedAudio = URL.createObjectURL(t), (e = this.onStopMicCheck) == null || e.call(this);
			}, this.mediaRecorder.start();
			let l = setTimeout(() => {
				this.stopMicCheck();
			}, r);
			this.onStopMicCheck = () => {
				clearTimeout(l), n?.();
			};
		});
	}
	stopMicCheck() {
		var e, t;
		(e = this.mediaRecorder) == null || e.stop(), (t = this.localPeer?.audioTrack) == null || t.cleanup(), this.localPeer && (this.localPeer.audioTrack = void 0);
	}
	getRecordedAudio() {
		return this.recordedAudio;
	}
	startConnectivityCheck(e, t, n, r) {
		return I(this, null, function* () {
			if (!this.sdk) throw Error("SDK not found");
			this.connectivityCheck = new xd(this.sdk, this.sdkListener, e, t, r);
			let i = yield this.getAuthToken(n);
			yield this.sdk.leave(), yield this.sdk.join({
				authToken: i,
				userName: "diagnostics-test"
			}, this.connectivityCheck), this.sdk.addConnectionQualityListener({ onConnectionQualityUpdate: (e) => {
				var t;
				(t = this.connectivityCheck) == null || t.handleConnectionQualityUpdate(e);
			} });
		});
	}
	stopConnectivityCheck() {
		return I(this, null, function* () {
			return this.connectivityCheck?.cleanupAndReport();
		});
	}
	initSdkWithLocalPeer(e) {
		var t, n, r;
		this.sdkListener && ((t = this.sdk) == null || t.initStoreAndManagers(F(P({}, this.sdkListener), { onError: (t) => {
			e?.(t), this.sdkListener.onError(t);
		} })));
		let i = new Ls({
			name: "diagnostics-peer",
			role: pd,
			type: "regular"
		});
		(n = this.sdk) == null || n.store.addPeer(i);
		let a = new Sd("diagnostics-room");
		this.sdk.store.setRoom(a), this.sdkListener.onRoomUpdate("ROOM_PEER_COUNT_UPDATED", a), (r = this.sdk) == null || r.deviceManager.init(!0);
	}
	getAuthToken(e) {
		return I(this, null, function* () {
			let t = new URL("https://api.100ms.live/v2/diagnostics/token");
			e && t.searchParams.append("region", e);
			let n = yield Cd(t.toString(), { method: "GET" }, [
				429,
				500,
				501,
				502,
				503,
				504,
				505,
				506,
				507,
				508,
				509,
				510,
				511
			]), r = yield n.json();
			if (!n.ok) throw B.APIErrors.ServerErrors(r.code, "GET_TOKEN", r.message, !1);
			let { token: i } = r;
			if (!i) throw Error(r.message);
			return i;
		});
	}
	getLocalAudioTrack(e) {
		return I(this, null, function* () {
			if (!this.localPeer) return;
			this.localPeer.role = F(P({}, pd), { publishParams: F(P({}, pd.publishParams), { allowed: ["audio"] }) });
			let t = new ro().audio(new $a().deviceId(e || "default").build()).build();
			return (yield this.sdk?.localTrackManager.getLocalTracks({
				audio: !0,
				video: !1
			}, t))?.find((e) => e.type === "audio");
		});
	}
}, Td = class {
	constructor(e, t, n) {
		this.isRoomJoinCalled = !1, this.ignoredMessageTypes = [], this.setProgress = ({ type: e, progress: t }) => {
			this.setState((n) => {
				n.playlist[e].progress = t, n.playlist[e].currentTime = this.sdk.getPlaylistManager().getCurrentTime(e);
			}, "playlistProgress");
		}, this.syncPlaylistState = (e) => {
			this.setState((e) => {
				Object.assign(e.playlist, J.convertPlaylist(this.sdk.getPlaylistManager()));
			}, e);
		}, this.sendPeerUpdateNotification = (e, t) => {
			let n = this.store.getState(jl(t.peerId)), r = Uu[e] || "peerUpdate";
			if (e === 8) this.syncRoomState(r), this.updateMidCallPreviewRoomState(e, t);
			else if ([0, 1].includes(e)) this.syncRoomState(r), n ||= this.store.getState(jl(t.peerId));
			else if ([
				12,
				13,
				14
			].includes(e)) this.syncRoomState(r), n ||= this.store.getState(jl(t.peerId));
			else {
				let e = J.convertPeer(t);
				this.setState((t) => {
					let r = t.peers[e.id];
					rd(r, e) && (od(r.auxiliaryTracks, e.auxiliaryTracks) && (r.auxiliaryTracks = e.auxiliaryTracks), Object.assign(r, e)), n = e;
				}, r);
			}
			this.hmsNotifications.sendPeerUpdate(e, n);
		}, this.getSDKHMSPeer = (e) => this.sdk.getPeerMap()[e], this.setState = (e, t) => this.store.namedSetState(e, t), this.store = e, this.sdk = t, this.hmsNotifications = n, this.sessionStore = new ld(this.sdk, this.setSessionStoreValueLocally.bind(this)), this.actionBatcher = new Yu(e);
	}
	submitSessionFeedback(e, t) {
		return this.sdk.submitSessionFeedback(e, t);
	}
	getLocalTrack(e) {
		return this.sdk.store.getLocalPeerTracks().find((t) => t.trackId === e);
	}
	get interactivityCenter() {
		return this.sdk.getInteractivityCenter();
	}
	setPlaylistSettings(e) {
		this.sdk.updatePlaylistSettings(e);
	}
	refreshDevices() {
		return I(this, null, function* () {
			yield this.sdk.refreshDevices();
		});
	}
	unblockAudio() {
		return I(this, null, function* () {
			yield this.sdk.getAudioOutput().unblockAutoplay();
		});
	}
	setVolume(e, t) {
		return I(this, null, function* () {
			t ? yield this.setTrackVolume(e, t) : (yield this.sdk.getAudioOutput().setVolume(e), this.syncRoomState("setOutputVolume"));
		});
	}
	setAudioOutputDevice(e) {
		return I(this, null, function* () {
			(yield this.sdk.getAudioOutput().setDevice(e)) && this.setState((t) => {
				t.settings.audioOutputDeviceId = e;
			}, "setAudioOutputDevice");
		});
	}
	setPreferredLayer(e, t) {
		return I(this, null, function* () {
			let n = this.getTrackById(e);
			if (n) if (n instanceof ss) {
				if (t === "none") {
					q.d("layer none will be ignored");
					return;
				}
				if (this.store.getState(Rl(e))?.preferredLayer === t) {
					q.d(`preferred layer is already ${t}`);
					return;
				}
				this.setState((n) => {
					let r = n.tracks[e];
					r && (r.preferredLayer = t);
				}, "setPreferredLayer"), yield n.setPreferredLayer(t);
			} else q.d(`track ${e} is not a remote video track`);
			else this.logPossibleInconsistency(`track ${e} not present, unable to set preffer layer`);
		});
	}
	getNativeTrackById(e) {
		return this.sdk.store.getTrackById(e)?.nativeTrack;
	}
	getTrackById(e) {
		return this.sdk.store.getTrackById(e);
	}
	getAuthTokenByRoomCode(e, t) {
		return this.sdk.getAuthTokenByRoomCode(e, t);
	}
	preview(e) {
		return I(this, null, function* () {
			let t = this.store.getState(Nc);
			if (t === "Preview" || t === "Connecting") {
				this.logPossibleInconsistency("attempting to call preview while room is in preview/connecting");
				return;
			}
			try {
				t !== "Connected" && this.setState((e) => {
					e.room.roomState = "Connecting";
				}, "connecting"), yield this.sdkPreviewWithListeners(e);
			} catch (e) {
				throw q.e("Cannot show preview. Failed to connect to room - ", e), e;
			}
		});
	}
	cancelMidCallPreview() {
		return I(this, null, function* () {
			return this.sdk.cancelMidCallPreview();
		});
	}
	join(e) {
		return I(this, null, function* () {
			if (this.isRoomJoinCalled) {
				this.logPossibleInconsistency("room join is called again");
				return;
			}
			try {
				this.isRoomJoinCalled = !0, this.setState((e) => {
					e.room.roomState = "Connecting";
				}, "join"), yield this.sdkJoinWithListeners(e);
			} catch (e) {
				throw this.isRoomJoinCalled = !1, q.e("Failed to connect to room - ", e), e;
			}
		});
	}
	leave() {
		return I(this, null, function* () {
			let e = this.store.getState(ic), t = !0;
			e || (t = !1, this.logPossibleInconsistency("room leave is called when no room is connected"));
			let n = this.store.getState(Nc);
			return this.setState((e) => {
				e.room.roomState = "Disconnecting";
			}, "leaving"), this.sdk.leave(t).then(() => {
				this.resetState("leave"), this.beamSpeakerLabelsLogger && this.beamSpeakerLabelsLogger.stop().catch(q.e), q.i("left room");
			}).catch((e) => {
				q.e("error in leaving room - ", e), this.setState((e) => {
					e.room.roomState = n;
				}, "revertLeave");
			});
		});
	}
	setScreenShareEnabled(e, t) {
		return I(this, null, function* () {
			typeof t == "boolean" && (t = { audioOnly: t });
			try {
				e ? yield this.startScreenShare(t) : yield this.stopScreenShare();
			} catch (e) {
				throw this.hmsNotifications.sendError(J.convertException(e)), e;
			}
		});
	}
	addTrack(e, t = "regular") {
		return I(this, null, function* () {
			yield this.sdk.addTrack(e, t), this.syncRoomState("addTrack");
		});
	}
	removeTrack(e) {
		return I(this, null, function* () {
			yield this.sdk.removeTrack(e), this.syncRoomState("removeTrack");
		});
	}
	setLocalAudioEnabled(e) {
		return I(this, null, function* () {
			let t = this.store.getState(fc);
			t && (yield this.setEnabledTrack(t, e));
		});
	}
	setLocalVideoEnabled(e) {
		return I(this, null, function* () {
			let t = this.store.getState(pc);
			t && (yield this.setEnabledTrack(t, e));
		});
	}
	setEnabledTrack(e, t) {
		return I(this, null, function* () {
			if (this.store.getState().tracks[e]?.enabled === t) {
				this.logPossibleInconsistency(`local track[${e}] enabled state - ${t}`);
				return;
			}
			this.setState((n) => {
				n.tracks[e] ? n.tracks[e].displayEnabled = t : this.logPossibleInconsistency("track id not found for setEnabled");
			}, "displayEnabled");
			try {
				yield this.setEnabledSDKTrack(e, t), this.syncRoomState("setEnabled");
			} catch (n) {
				throw this.setState((n) => {
					n.tracks[e].displayEnabled = !t;
				}, "rollbackDisplayEnabled"), this.hmsNotifications.sendError(J.convertException(n)), n;
			}
			let n = t ? 3 : 2;
			this.hmsNotifications.sendTrackUpdate(n, e);
		});
	}
	autoSelectAudioOutput(e) {
		return I(this, null, function* () {
			yield this.sdk.autoSelectAudioOutput(e);
		});
	}
	setAudioSettings(e) {
		return I(this, null, function* () {
			let t = this.store.getState(fc);
			t && (yield this.setSDKLocalAudioTrackSettings(t, e), this.syncRoomState("setAudioSettings"));
		});
	}
	setVideoSettings(e) {
		return I(this, null, function* () {
			let t = this.store.getState(pc);
			t && (yield this.setSDKLocalVideoTrackSettings(t, e), this.syncRoomState("setVideoSettings"));
		});
	}
	switchCamera() {
		return I(this, null, function* () {
			let e = this.store.getState(pc);
			if (e) {
				let t = this.sdk.store.getLocalPeerTracks().find((t) => t.trackId === e);
				t && (yield t.switchCamera(), this.syncRoomState("switchCamera"));
			}
		});
	}
	sendMessage(e) {
		this.sendBroadcastMessage(e);
	}
	sendBroadcastMessage(e, t) {
		return I(this, null, function* () {
			let { message_id: n, timestamp: r } = yield this.sdk.sendBroadcastMessage(e, t);
			this.updateMessageInStore({
				message: e,
				type: t,
				id: n,
				time: r
			});
		});
	}
	sendGroupMessage(e, t, n) {
		return I(this, null, function* () {
			let r = this.store.getState(Lc), i = t.map((e) => r[e]), { message_id: a, timestamp: o } = yield this.sdk.sendGroupMessage(e, i, n);
			this.updateMessageInStore({
				message: e,
				recipientRoles: t,
				type: n,
				id: a,
				time: o
			});
		});
	}
	sendDirectMessage(e, t, n) {
		return I(this, null, function* () {
			let { message_id: r, timestamp: i } = yield this.sdk.sendDirectMessage(e, t, n);
			this.updateMessageInStore({
				message: e,
				recipientPeer: t,
				type: n,
				id: r,
				time: i
			});
		});
	}
	updateMessageInStore(e) {
		if (!e.message) throw q.w("sendMessage", "Failed to send message", e), Error(`sendMessage Failed - ${JSON.stringify(e)}`);
		if (e.type && this.ignoredMessageTypes.includes(e.type)) return;
		let t = this.sdk.getLocalPeer(), n = {
			read: !0,
			id: e.id,
			time: new Date(e.time),
			message: e.message,
			type: e.type || "chat",
			recipientPeer: e.recipientPeer,
			recipientRoles: e.recipientRoles,
			senderName: t?.name,
			sender: t?.peerId,
			senderRole: t?.role?.name,
			ignored: !1
		};
		this.setState((e) => {
			e.messages.byID[n.id] = n, e.messages.allIDs.push(n.id);
		}, "newMessage");
	}
	setMessageRead(e, t) {
		this.setState((n) => {
			t ? n.messages.byID[t] ? n.messages.byID[t].read = e : this.logPossibleInconsistency("no message with id is found") : n.messages.allIDs.forEach((t) => {
				n.messages.byID[t].read = e;
			});
		}, "setMessageRead");
	}
	attachVideo(e, t) {
		return I(this, null, function* () {
			if (this.localAndVideoUnmuting(e)) return new Promise((n) => {
				let r = this.store.subscribe((i) => I(this, null, function* () {
					i && (yield this.attachVideoInternal(e, t), r(), n());
				}), vc);
			});
			yield this.attachVideoInternal(e, t);
		});
	}
	detachVideo(e, t) {
		return I(this, null, function* () {
			let n = this.getTrackById(e);
			n?.type === "video" ? yield this.sdk.detachVideo(n, t) : (t && (t.srcObject = null), q.d("possible inconsistency detected - no video track found to remove sink"));
		});
	}
	addPluginToVideoTrack(e, t) {
		return I(this, null, function* () {
			return this.addRemoveVideoPlugin(e, "add", t);
		});
	}
	addPluginsToVideoStream(e) {
		return I(this, null, function* () {
			return this.addRemoveMediaStreamVideoPlugins(e, "add");
		});
	}
	removePluginsFromVideoStream(e) {
		return I(this, null, function* () {
			return this.addRemoveMediaStreamVideoPlugins(e, "remove");
		});
	}
	addPluginToAudioTrack(e) {
		return I(this, null, function* () {
			return this.addRemoveAudioPlugin(e, "add");
		});
	}
	validateVideoPluginSupport(e) {
		let t = {};
		if (t.isSupported = !1, !e) return q.w("no plugin passed in for checking support"), t.errMsg = "no plugin passed in for checking support", t;
		let n = this.store.getState(pc);
		if (!n) return q.w("video Track not added to local peer yet"), t.errMsg = "call this function only after local peer has video track", t;
		let r = this.getTrackById(n);
		return r ? t = r.validatePlugin(e) : (q.w(`track ${n} not present, unable to validate plugin`), t.errMsg = `track ${n} not present, unable to validate plugin`), t;
	}
	validateAudioPluginSupport(e) {
		let t = {};
		if (t.isSupported = !1, !e) return q.w("no plugin passed in for checking support\""), t.errMsg = "no plugin passed in for checking support\"", t;
		let n = this.store.getState(fc);
		if (!n) return q.w("audio track not added to local peer yet"), t.errMsg = "call this function only after local peer has audio track", t;
		let r = this.getTrackById(n);
		return r ? t = r.validatePlugin(e) : (q.w(`track ${n} not present, unable to validate plugin`), t.errMsg = `track ${n} not present, unable to validate plugin`), t;
	}
	removePluginFromVideoTrack(e) {
		return I(this, null, function* () {
			return this.addRemoveVideoPlugin(e, "remove");
		});
	}
	removePluginFromAudioTrack(e) {
		return I(this, null, function* () {
			return this.addRemoveAudioPlugin(e, "remove");
		});
	}
	changeRole(e, t, n = !1) {
		return I(this, null, function* () {
			yield this.sdk.changeRoleOfPeer(e, t, n);
		});
	}
	changeRoleOfPeer(e, t, n = !1) {
		return I(this, null, function* () {
			yield this.sdk.changeRoleOfPeer(e, t, n);
		});
	}
	changeRoleOfPeersWithRoles(e, t) {
		return I(this, null, function* () {
			let n = this.sdk.getRoles().filter((t) => e.includes(t.name));
			yield this.sdk.changeRoleOfPeersWithRoles(n, t);
		});
	}
	acceptChangeRole(e) {
		return I(this, null, function* () {
			let t = e.requestedBy ? this.getSDKHMSPeer(e.requestedBy.id) : void 0;
			t || q.w(`peer for which role change is requested no longer available - ${e.requestedBy}`);
			let n = {
				requestedBy: t,
				role: e.role,
				token: e.token
			};
			yield this.sdk.acceptChangeRole(n), this.removeRoleChangeRequest(e);
		});
	}
	raiseLocalPeerHand() {
		return I(this, null, function* () {
			yield this.sdk.raiseLocalPeerHand();
		});
	}
	lowerLocalPeerHand() {
		return I(this, null, function* () {
			yield this.sdk.lowerLocalPeerHand();
		});
	}
	raiseRemotePeerHand(e) {
		return I(this, null, function* () {
			yield this.sdk.raiseRemotePeerHand(e);
		});
	}
	lowerRemotePeerHand(e) {
		return I(this, null, function* () {
			yield this.sdk.lowerRemotePeerHand(e);
		});
	}
	getPeer(e) {
		return I(this, null, function* () {
			let t = yield this.sdk.getPeer(e);
			if (t) return J.convertPeer(t);
		});
	}
	findPeerByName(e) {
		return I(this, null, function* () {
			let { offset: t, peers: n, eof: r } = yield this.sdk.findPeerByName(e);
			return {
				offset: t,
				eof: r,
				peers: n.map((e) => J.convertPeer(e))
			};
		});
	}
	getPeerListIterator(e) {
		let t = this.sdk.getPeerListIterator(e);
		return {
			hasNext: () => t.hasNext(),
			next: () => I(this, null, function* () {
				return (yield t.next()).map((e) => J.convertPeer(e));
			}),
			findPeers: () => I(this, null, function* () {
				return (yield t.findPeers()).map((e) => J.convertPeer(e));
			}),
			getTotal: () => t.getTotal()
		};
	}
	initAppData(e) {
		this.setState((t) => {
			t.appData = e;
		}, "initAppData");
	}
	setAppData(e, t, n) {
		let r = t?.constructor.name === "Object";
		this.setState((i) => {
			i.appData ? n && r ? Object.assign(i.appData[e], t) : i.appData[e] = t : i.appData = { [e]: t };
		}, `setAppData-${e}`);
	}
	rejectChangeRole(e) {
		this.removeRoleChangeRequest(e);
	}
	endRoom(e, t) {
		return I(this, null, function* () {
			let n = this.store.getState(Uc);
			if (!(n != null && n.endRoom)) {
				q.w("You are not allowed to perform this action - endRoom");
				return;
			}
			let r = this.store.getState(Nc);
			this.setState((e) => {
				e.room.roomState = "Disconnecting";
			}, "endingRoom");
			try {
				yield this.sdk.endRoom(e, t), this.resetState("endRoom");
			} catch (e) {
				q.e("error in ending room - ", e), this.setState((e) => {
					e.room.roomState = r;
				}, "revertEndRoom");
			}
		});
	}
	removePeer(e, t) {
		return I(this, null, function* () {
			e !== this.sdk.getLocalPeer()?.peerId && (yield this.sdk.removePeer(e, t));
		});
	}
	startRTMPOrRecording(e) {
		return I(this, null, function* () {
			yield this.sdk.startRTMPOrRecording(e);
		});
	}
	stopRTMPAndRecording() {
		return I(this, null, function* () {
			yield this.sdk.stopRTMPAndRecording();
		});
	}
	startHLSStreaming(e) {
		return I(this, null, function* () {
			yield this.sdk.startHLSStreaming(e);
		});
	}
	stopHLSStreaming(e) {
		return I(this, null, function* () {
			yield this.sdk.stopHLSStreaming(e);
		});
	}
	startTranscription(e) {
		return I(this, null, function* () {
			yield this.sdk.startTranscription(e);
		});
	}
	stopTranscription(e) {
		return I(this, null, function* () {
			yield this.sdk.stopTranscription(e);
		});
	}
	updateTranscriptionConfig(e) {
		return I(this, null, function* () {
			yield this.sdk.updateTranscriptionConfig(e);
		});
	}
	sendHLSTimedMetadata(e) {
		return I(this, null, function* () {
			yield this.sdk.sendHLSTimedMetadata(e);
		});
	}
	changeName(e) {
		return I(this, null, function* () {
			yield this.sdk.changeName(e);
		});
	}
	changeMetadata(e) {
		return I(this, null, function* () {
			typeof e != "string" && (e = JSON.stringify(e)), yield this.sdk.changeMetadata(e);
		});
	}
	setSessionMetadata(e) {
		return I(this, null, function* () {
			yield this.sdk.setSessionMetadata(e), this.setState((t) => {
				t.sessionMetadata = e;
			}, "setSessionMetadata"), this.setSessionStoreValueLocally({
				key: "default",
				value: e
			}, "setSessionMetadata");
		});
	}
	populateSessionMetadata() {
		return I(this, null, function* () {
			let e = yield this.sdk.getSessionMetadata();
			this.setState((t) => {
				t.sessionMetadata = e;
			}, "populateSessionMetadata"), this.setSessionStoreValueLocally({
				key: "default",
				value: e
			}, "populateSessionmetadata");
		});
	}
	setRemoteTrackEnabled(e, t) {
		return I(this, null, function* () {
			if (typeof e == "string") {
				let n = this.getTrackById(e);
				n && Xu(n) ? yield this.sdk.changeTrackState(n, t) : this.logPossibleInconsistency(`No remote track with ID ${e} found for change track state`);
			} else Array.isArray(e) && e.forEach((e) => this.setRemoteTrackEnabled(e, t));
		});
	}
	setRemoteTracksEnabled(e) {
		return I(this, null, function* () {
			let t = {
				enabled: e.enabled,
				type: e.type,
				source: e.source
			};
			if (e.roles) {
				let n = this.store.getState(Lc);
				t.roles = e.roles.map((e) => n[e]);
			}
			yield this.sdk.changeMultiTrackState(t);
		});
	}
	setLogLevel(e) {
		q.level = e, this.sdk.setLogLevel(e);
	}
	setFrameworkInfo(e) {
		this.sdk.setFrameworkInfo(e);
	}
	ignoreMessageTypes(e, t = !1) {
		if (t) this.ignoredMessageTypes = e;
		else for (let t of e) this.ignoredMessageTypes.includes(t) || this.ignoredMessageTypes.push(t);
	}
	enableBeamSpeakerLabelsLogging() {
		return I(this, null, function* () {
			this.beamSpeakerLabelsLogger || (q.i("enabling beam speaker labels logging"), this.beamSpeakerLabelsLogger = new ud(this.store, this), yield this.beamSpeakerLabelsLogger.start());
		});
	}
	initDiagnostics() {
		let e = new wd(this.sdk, {
			onJoin: this.onJoin.bind(this),
			onPreview: this.onPreview.bind(this),
			onRoomUpdate: this.onRoomUpdate.bind(this),
			onPeerUpdate: this.onPeerUpdate.bind(this),
			onTrackUpdate: this.onTrackUpdate.bind(this),
			onMessageReceived: this.onMessageReceived.bind(this),
			onError: this.onError.bind(this),
			onReconnected: this.onReconnected.bind(this),
			onReconnecting: this.onReconnecting.bind(this),
			onRoleChangeRequest: this.onRoleChangeRequest.bind(this),
			onRoleUpdate: this.onRoleUpdate.bind(this),
			onDeviceChange: this.onDeviceChange.bind(this),
			onChangeTrackStateRequest: this.onChangeTrackStateRequest.bind(this),
			onChangeMultiTrackStateRequest: this.onChangeMultiTrackStateRequest.bind(this),
			onRemovedFromRoom: this.onRemovedFromRoom.bind(this),
			onNetworkQuality: this.onNetworkQuality.bind(this),
			onSessionStoreUpdate: this.onSessionStoreUpdate.bind(this),
			onPollsUpdate: this.onPollsUpdate.bind(this),
			onWhiteboardUpdate: this.onWhiteboardUpdate.bind(this)
		});
		return this.sdk.addAudioListener({ onAudioLevelUpdate: this.onAudioLevelUpdate.bind(this) }), this.sdk.addConnectionQualityListener({ onConnectionQualityUpdate: this.onConnectionQualityUpdate.bind(this) }), e;
	}
	resetState(e = "resetState") {
		this.isRoomJoinCalled = !1, q.cleanup(), this.setState((e) => {
			Object.assign(e, ji());
		}, e);
	}
	getDebugInfo() {
		return this.sdk.getDebugInfo();
	}
	sdkJoinWithListeners(e) {
		return I(this, null, function* () {
			yield this.sdk.join(e, {
				onJoin: this.onJoin.bind(this),
				onPreview: this.onPreview.bind(this),
				onRoomUpdate: this.onRoomUpdate.bind(this),
				onPeerUpdate: this.onPeerUpdate.bind(this),
				onTrackUpdate: this.onTrackUpdate.bind(this),
				onMessageReceived: this.onMessageReceived.bind(this),
				onError: this.onError.bind(this),
				onReconnected: this.onReconnected.bind(this),
				onReconnecting: this.onReconnecting.bind(this),
				onRoleChangeRequest: this.onRoleChangeRequest.bind(this),
				onRoleUpdate: this.onRoleUpdate.bind(this),
				onDeviceChange: this.onDeviceChange.bind(this),
				onChangeTrackStateRequest: this.onChangeTrackStateRequest.bind(this),
				onChangeMultiTrackStateRequest: this.onChangeMultiTrackStateRequest.bind(this),
				onRemovedFromRoom: this.onRemovedFromRoom.bind(this),
				onNetworkQuality: this.onNetworkQuality.bind(this),
				onSessionStoreUpdate: this.onSessionStoreUpdate.bind(this),
				onPollsUpdate: this.onPollsUpdate.bind(this),
				onWhiteboardUpdate: this.onWhiteboardUpdate.bind(this),
				onSFUMigration: this.onSFUMigration.bind(this)
			}), this.sdk.addAudioListener({ onAudioLevelUpdate: this.onAudioLevelUpdate.bind(this) }), this.sdk.addConnectionQualityListener({ onConnectionQualityUpdate: this.onConnectionQualityUpdate.bind(this) });
		});
	}
	onSFUMigration() {
		this.syncRoomState("SFUMigration");
	}
	onRemovedFromRoom(e) {
		let t = this.store.getState(jl(e.requestedBy?.peerId));
		this.hmsNotifications.sendLeaveRoom(F(P({}, e), { requestedBy: t || void 0 }));
		let n = e.roomEnded || !t ? "roomEnded" : "removedFromRoom";
		q.i(`resetting state after peer removed ${n}`, e), this.resetState(n);
	}
	onDeviceChange(e) {
		let t = e.devices;
		if (!t) return;
		let n = this.store.getState(cc);
		if (this.setState((e) => {
			od(e.devices.audioInput, t.audioInput) || (e.devices.audioInput = t.audioInput), od(e.devices.videoInput, t.videoInput) || (e.devices.videoInput = t.videoInput), od(e.devices.audioOutput, t.audioOutput) || (e.devices.audioOutput = t.audioOutput);
			let r = this.sdk.getLocalPeer();
			n != null && n.id && r && Object.assign(e.settings, this.getMediaSettings(r));
		}, "deviceChange"), e.selection && !e.internal) {
			let t = J.convertDeviceChangeUpdate(e);
			this.hmsNotifications.sendDeviceChange(t);
		}
	}
	sdkPreviewWithListeners(e) {
		return I(this, null, function* () {
			yield this.sdk.preview(e, {
				onPreview: this.onPreview.bind(this),
				onError: this.onError.bind(this),
				onReconnected: this.onReconnected.bind(this),
				onReconnecting: this.onReconnecting.bind(this),
				onDeviceChange: this.onDeviceChange.bind(this),
				onRoomUpdate: this.onRoomUpdate.bind(this),
				onPeerUpdate: this.onPeerUpdate.bind(this),
				onNetworkQuality: this.onNetworkQuality.bind(this),
				onTrackUpdate: this.onTrackUpdate.bind(this)
			}), this.sdk.addAudioListener({ onAudioLevelUpdate: this.onAudioLevelUpdate.bind(this) });
		});
	}
	onNetworkQuality(e) {
		this.setState((t) => {
			let n = t.room.localPeer || this.sdk.getLocalPeer()?.peerId;
			n && (t.connectionQualities[n] = {
				peerID: n,
				downlinkQuality: e
			});
		}, "ConnectionQuality");
	}
	onSessionStoreUpdate(e) {
		this.setSessionStoreValueLocally(e, "sessionStoreUpdate");
	}
	onPollsUpdate(e, t) {
		let n = Gu[e];
		this.setState((e) => {
			let n = t.reduce((e, t) => (e[t.id] = F(P({}, t), { questions: t.questions?.map((e) => F(P({}, e), {
				answer: e.answer ? P({}, e.answer) : void 0,
				options: e.options?.map((e) => P({}, e)),
				responses: e.responses?.map((e) => P({}, e))
			})) }), e), {});
			$u(e.polls, n);
		}, n), t.forEach((t) => this.hmsNotifications.sendPollUpdate(e, t.id));
	}
	onWhiteboardUpdate(e) {
		this.setState((t) => {
			t.whiteboards[e.id] = e;
		}, "whiteboardUpdate");
	}
	startScreenShare(e) {
		return I(this, null, function* () {
			this.store.getState(bc) ? this.logPossibleInconsistency("start screenshare is called while it's on") : (yield this.sdk.startScreenShare(() => this.syncRoomState("screenshareStopped"), e), this.syncRoomState("startScreenShare"));
		});
	}
	stopScreenShare() {
		return I(this, null, function* () {
			this.store.getState(bc) ? (yield this.sdk.stopScreenShare(), this.syncRoomState("stopScreenShare")) : this.logPossibleInconsistency("stop screenshare is called while it's not on");
		});
	}
	attachVideoInternal(e, t) {
		return I(this, null, function* () {
			let n = this.getTrackById(e);
			n ||= this.getLocalTrack(e), n && n.type === "video" ? yield this.sdk.attachVideo(n, t) : this.logPossibleInconsistency("no video track found to add sink");
		});
	}
	syncRoomState(e) {
		e = `${e}_fullSync`, q.time(`store-sync-${e}`);
		let t = {}, n = [], r = {}, i = {}, a = {}, o, s = this.sdk.getPeers();
		for (let e of s) {
			let s = J.convertPeer(e);
			t[s.id] = s, n.push(s.id), a[s.id] = {
				peerID: s.id,
				downlinkQuality: e.networkQuality || -1
			};
			let c = [
				e.audioTrack,
				e.videoTrack,
				...e.auxiliaryTracks
			];
			for (let e of c) {
				if (!e) continue;
				let t = J.convertTrack(e);
				r[t.id] = t;
			}
			if (e.isLocal) {
				let t = e;
				o = this.getPreviewFields(t), Object.assign(i, this.getMediaSettings(t));
			}
		}
		let c = this.sdk.getRecordingState(), l = this.sdk.getRTMPState(), u = this.sdk.getHLSState(), d = this.sdk.getTranscriptionState();
		this.setState((e) => {
			var s;
			e.room.peers = n;
			let f = e.peers, p = e.tracks;
			Zu(f, t), Qu(p, r), Object.assign(e.settings, i), e.room.isConnected && Object.assign(e.connectionQualities, a), (s = e.preview) != null && s.localPeer && o != null && o.localPeer ? Object.assign(e.preview, o) : e.preview = o, Object.assign(e.roles, J.convertRoles(this.sdk.getRoles())), Object.assign(e.playlist, J.convertPlaylist(this.sdk.getPlaylistManager())), Object.assign(e.room, J.convertRecordingStreamingState(c, l, u, d)), Object.assign(e.templateAppData, this.sdk.getTemplateAppData());
		}, e), q.timeEnd(`store-sync-${e}`);
	}
	onPreview(e) {
		this.setState((t) => {
			Object.assign(t.room, J.convertRoom(e, this.sdk.getLocalPeer()?.peerId)), t.room.roomState = "Preview";
		}, "previewStart"), this.syncRoomState("previewSync");
	}
	onJoin(e) {
		let t = this.sdk.getPlaylistManager();
		this.audioPlaylist = new cd(t, "audio", this.syncPlaylistState.bind(this), this.store), this.videoPlaylist = new cd(t, "video", this.syncRoomState.bind(this), this.store), this.syncRoomState("joinSync"), this.setState((t) => {
			Object.assign(t.room, J.convertRoom(e, this.sdk.getLocalPeer()?.peerId)), t.room.isConnected = !0, t.room.roomState = "Connected";
		}, "joined"), t.onProgress(this.setProgress), t.onNewTrackStart((e) => {
			this.syncPlaylistState(`${e.type}PlaylistUpdate`);
		}), t.onPlaylistEnded((e) => {
			this.syncPlaylistState(`${e}PlaylistEnded`);
		}), t.onCurrentTrackEnded((e) => {
			this.hmsNotifications.sendPlaylistTrackEnded(J.convertPlaylistItem(t, e)), this.syncPlaylistState(`${e.type}PlaylistItemEnded`);
		});
	}
	onRoomUpdate(e, t) {
		this.setState((e) => {
			Object.assign(e.room, J.convertRoom(t, this.sdk.getLocalPeer()?.peerId));
		}, e), e === "TRANSCRIPTION_STATE_UPDATED" && this.hmsNotifications.sendTranscriptionUpdate(t.transcriptions);
	}
	onPeerUpdate(e, t) {
		if (![4, 5].includes(e)) {
			if (Array.isArray(t)) {
				let e = this.store.getState(Xs), n = t.filter((t) => !e[t.peerId]);
				if (this.syncRoomState("peersJoined"), this.store.getState(ic)) {
					let e = [];
					for (let n of t) {
						let t = this.store.getState(jl(n.peerId));
						t && e.push(t);
					}
					this.hmsNotifications.sendPeerList(e);
				} else n.forEach((e) => {
					let t = this.store.getState(jl(e.peerId));
					t && this.hmsNotifications.sendPeerUpdate(0, t);
				});
				return;
			}
			this.sendPeerUpdateNotification(e, t);
		}
	}
	onTrackUpdate(e, t, n) {
		if (e === 1) this.hmsNotifications.sendTrackUpdate(e, t.trackId), this.handleTrackRemove(t, n);
		else if ([0, 1].includes(e)) {
			let n = Wu[e];
			this.syncRoomState(n), this.hmsNotifications.sendTrackUpdate(e, t.trackId);
		} else {
			let n = Wu[e] || "trackUpdate", r = J.convertTrack(t);
			this.setState((e) => {
				let t = e.tracks[r.id];
				rd(t, r) && (nd(t, r), Object.assign(t, r));
			}, n), this.hmsNotifications.sendTrackUpdate(e, t.trackId);
		}
	}
	onMessageReceived(e) {
		let t = J.convertMessage(e, this.store.getState(lc));
		t.read = !1, t.ignored = this.ignoredMessageTypes.includes(t.type), t.type === "hms_transcript" && (t.ignored = !0), this.putMessageInStore(t), this.hmsNotifications.sendMessageReceived(t);
	}
	putMessageInStore(e) {
		e.ignored || this.actionBatcher.setState((t) => {
			t.messages.byID[e.id] = e, t.messages.allIDs.push(e.id);
		}, "newMessage", 150);
	}
	onAudioLevelUpdate(e) {
		this.setState((t) => {
			let n = {};
			e.forEach((e) => {
				if (!e.track || !e.peer) return;
				let r = e.track.trackId;
				n[r] = e.audioLevel, t.speakers[r] || (t.speakers[r] = {
					audioLevel: e.audioLevel,
					peerID: e.peer.peerId,
					trackID: r
				});
			});
			let r = Object.entries(t.speakers);
			for (let [e, i] of r) i.audioLevel = n[e] || 0, i.audioLevel === 0 && delete t.speakers[e];
		}, "audioLevel");
	}
	onConnectionQualityUpdate(e) {
		this.setState((t) => {
			e.forEach((e) => {
				let n = e.peerID;
				n && (t.connectionQualities[n] ? Object.assign(t.connectionQualities[n], e) : t.connectionQualities[n] = e);
			});
		}, "connectionQuality");
	}
	onChangeTrackStateRequest(e) {
		let t = this.store.getState(jl(e.requestedBy?.peerId)), n = this.getStoreLocalTrackIDfromSDKTrack(e.track), r = this.store.getState(Ll(n));
		if (!r) return this.logPossibleInconsistency(`Not found track for which track state change was requested, ${e.track}`);
		e.enabled || this.syncRoomState("changeTrackStateRequest"), this.hmsNotifications.sendChangeTrackStateRequest({
			requestedBy: t || void 0,
			track: r,
			enabled: e.enabled
		});
	}
	onChangeMultiTrackStateRequest(e) {
		let t = this.store.getState(jl(e.requestedBy?.peerId));
		e.enabled || this.syncRoomState("changeMultiTrackStateRequest");
		let n = [], r = this.store.getState(G);
		for (let t of e.tracks) {
			let e = this.getStoreLocalTrackIDfromSDKTrack(t);
			e && r[e] && n.push(r[e]);
		}
		this.hmsNotifications.sendChangeMultiTrackStateRequest({
			requestedBy: t || void 0,
			tracks: n,
			enabled: e.enabled,
			type: e.type,
			source: e.source
		});
	}
	onReconnected() {
		this.syncRoomState("reconnectedSync"), this.hmsNotifications.sendReconnected(), this.setState((e) => {
			e.room.roomState = e.room.isConnected ? "Connected" : "Preview";
		}, "reconnected");
	}
	onReconnecting(e) {
		let t = J.convertException(e);
		q.e("Reconnection: received error from sdk", t), this.hmsNotifications.sendReconnecting(t), this.setState((e) => {
			e.room.roomState = "Reconnecting", e.errors.push(t);
		}, "reconnecting");
	}
	onError(e) {
		let t = J.convertException(e);
		t.isTerminal ? (this.leave().then(() => q.e("error from SDK, left room.")), this.setState((e) => {
			e.room.roomState = "Failed", e.errors.push(t);
		}, "errorTerminal")) : this.store.getState().errors.length < 50 && this.setState((e) => {
			e.errors.push(t);
		}, "error"), this.syncRoomState("errorSync"), this.hmsNotifications.sendError(t), q.e("received error from sdk", t instanceof z ? `${t}` : t);
	}
	handleTrackRemove(e, t) {
		this.setState((n) => {
			let r = n.peers[t.peerId], i = n.tracks, a = e.trackId;
			if (r) if (a === r.audioTrack) delete r.audioTrack;
			else if (a === r.videoTrack) delete r.videoTrack;
			else {
				let e = r.auxiliaryTracks.indexOf(a);
				e > -1 && r.auxiliaryTracks.splice(e, 1);
			}
			delete i[a];
		}, "trackRemoved");
	}
	setEnabledSDKTrack(e, t) {
		return I(this, null, function* () {
			let n = this.getLocalTrack(e);
			n ? yield n.setEnabled(t) : this.logPossibleInconsistency(`track ${e} not present, unable to enabled/disable`);
		});
	}
	setSDKLocalVideoTrackSettings(e, t) {
		return I(this, null, function* () {
			let n = this.getLocalTrack(e);
			n ? yield n.setSettings(t) : this.logPossibleInconsistency(`local track ${e} not present, unable to set settings`);
		});
	}
	setSDKLocalAudioTrackSettings(e, t) {
		return I(this, null, function* () {
			let n = this.getLocalTrack(e);
			n ? yield n.setSettings(t) : this.logPossibleInconsistency(`local track ${e} not present, unable to set settings`);
		});
	}
	getMediaSettings(e) {
		let t = this.store.getState($s), n = e.audioTrack, r = e.videoTrack;
		return {
			audioInputDeviceId: n?.settings.deviceId || t.audioInputDeviceId,
			videoInputDeviceId: r?.settings.deviceId || t.videoInputDeviceId,
			audioOutputDeviceId: this.sdk.getAudioOutput().getDevice()?.deviceId,
			audioMode: n?.settings.audioMode || "voice"
		};
	}
	getPreviewFields(e) {
		if (!e.isInPreview()) return;
		let t = J.convertPeer(e);
		return {
			localPeer: t.id,
			audioTrack: t.audioTrack,
			videoTrack: t.videoTrack,
			asRole: e.asRole?.name || e.role?.name
		};
	}
	setTrackVolume(e, t) {
		return I(this, null, function* () {
			let n = this.getTrackById(t);
			n ? n instanceof Ma ? (yield n.setVolume(e), this.setState((n) => {
				let r = n.tracks[t];
				r && r.type === "audio" && (r.volume = e);
			}, "trackVolume")) : q.w(`track ${t} is not an audio track`) : this.logPossibleInconsistency(`track ${t} not present, unable to set volume`);
		});
	}
	localAndVideoUnmuting(e) {
		if (this.store.getState(cc)?.videoTrack !== e) return !1;
		let t = this.store.getState(yc), n = this.store.getState(vc);
		return t && !n;
	}
	logPossibleInconsistency(e) {
		q.w("possible inconsistency detected - ", e);
	}
	addRemoveVideoPlugin(e, t, n) {
		return I(this, null, function* () {
			if (!e) {
				q.w("Invalid plugin received in store");
				return;
			}
			let r = this.store.getState(pc);
			if (r) {
				let i = this.getLocalTrack(r);
				i ? (t === "add" ? yield i.addPlugin(e, n) : t === "remove" && (yield i.removePlugin(e)), this.syncRoomState(`${t}VideoPlugin`)) : this.logPossibleInconsistency(`track ${r} not present, unable to ${t} plugin`);
			}
		});
	}
	addRemoveMediaStreamVideoPlugins(e, t) {
		return I(this, null, function* () {
			if (e.length === 0) {
				q.w("Invalid plugin received in store");
				return;
			}
			let n = this.store.getState(pc);
			if (n) {
				let r = this.getLocalTrack(n);
				r ? (t === "add" ? yield r.addStreamPlugins(e) : t === "remove" && (yield r.removeStreamPlugins(e)), this.syncRoomState(`${t}MediaStreamPlugin`)) : this.logPossibleInconsistency(`track ${n} not present, unable to ${t} plugin`);
			}
		});
	}
	addRemoveAudioPlugin(e, t) {
		return I(this, null, function* () {
			try {
				if (!e) {
					q.w("Invalid plugin received in store");
					return;
				}
				let n = this.store.getState(fc);
				if (n) {
					let r = this.getLocalTrack(n);
					r ? (t === "add" ? yield r.addPlugin(e) : t === "remove" && (yield r.removePlugin(e)), this.syncRoomState(`${t}AudioPlugin`)) : this.logPossibleInconsistency(`track ${n} not present, unable to ${t} plugin`);
				}
			} catch (e) {
				console.error(e);
			}
		});
	}
	onRoleChangeRequest(e) {
		this.setState((t) => {
			t.roleChangeRequests.length === 0 && t.roleChangeRequests.push(J.convertRoleChangeRequest(e));
		}, "roleChangeRequest");
	}
	removeRoleChangeRequest(e) {
		this.setState((t) => {
			let n = t.roleChangeRequests.findIndex((t) => t.token === e.token);
			n !== -1 && t.roleChangeRequests.splice(n, 1);
		}, "removeRoleChangeRequest");
	}
	onRoleUpdate() {
		this.syncRoomState("roleUpdate");
	}
	getStoreLocalTrackIDfromSDKTrack(e) {
		return this.store.getState(mc).find((t) => this.getTrackById(t)?.trackId === e.trackId);
	}
	updateMidCallPreviewRoomState(e, t) {
		t.isLocal && e === 8 && this.store.getState(Pc) && this.setState((e) => {
			e.room.roomState = "Connected";
		}, "midCallPreviewCompleted");
	}
	setSessionStoreValueLocally(e, t = "setSessionStore") {
		let n = Array.isArray(e) ? e : [e];
		this.setState((e) => {
			n.forEach((t) => {
				e.sessionStore[t.key] = t.value;
			});
		}, t);
	}
	hasActiveElements(e) {
		let t = Object.keys(this.store.getState().whiteboards).length > 0, n = Object.keys(this.store.getState().polls).length > 0, r = Object.keys(this.store.getState().peers).length > 0, i = e.getState().remoteTrackStats;
		return r && (t || n || Object.values(i).some((e) => e && typeof e.bitrate == "number" && e.bitrate > 0));
	}
}, Ed = (e) => $i ? `${e} ${document.title}` : e, Dd = class {
	constructor(e, t) {
		this.eventBus = e, this.listener = t, this.TAG = "[NetworkTestManager]", this.controller = new AbortController(), this.start = (e) => I(this, null, function* () {
			if (!e) return;
			let { url: t, timeout: n, scoreMap: r } = e, i = this.controller.signal, a = Date.now(), o = 0, s = bo(n).then(() => {
				this.controller.abort();
			});
			try {
				let e = (yield fetch(`${t}?${Date.now()}`, { signal: i })).body?.getReader();
				if (!e) throw Error("unable to process request");
				return Promise.race([I(this, null, function* () {
					if (e) try {
						let t = !1;
						for (; !t;) {
							let { value: n, done: i } = yield e.read();
							t = i, n && (o += n.byteLength, this.sendScore({
								scoreMap: r,
								downloadedSize: o,
								startTime: a
							}));
						}
					} catch (e) {
						e.name !== "AbortError" && L.d(this.TAG, e);
					}
				}), s]).then(() => {
					this.sendScore({
						scoreMap: r,
						downloadedSize: o,
						startTime: a,
						finished: !0
					});
				}).catch((e) => {
					L.d(this.TAG, e), this.updateScoreToListener(0), this.eventBus.analytics.publish(H.previewNetworkQuality({ error: e.message }));
				});
			} catch (e) {
				e.name === "AbortError" ? L.d(this.TAG, e) : (L.d(this.TAG, e), this.updateScoreToListener(0), this.eventBus.analytics.publish(H.previewNetworkQuality({ error: e.message })));
			}
		}), this.stop = () => {
			this.controller.signal.aborted || this.controller.abort();
		}, this.sendScore = ({ scoreMap: e, downloadedSize: t, startTime: n, finished: r = !1 }) => {
			let i = (Date.now() - n) / 1e3, a = t / 1024 / i * 8, o = -1;
			for (let t in e) {
				let n = e[t];
				a >= n.low && (!n.high || a <= n.high) && (o = Number(t));
			}
			this.updateScoreToListener(o), r && this.eventBus.analytics.publish(H.previewNetworkQuality({
				score: o,
				downLink: a.toFixed(2)
			}));
		};
	}
	updateScoreToListener(e) {
		var t, n;
		e !== this.score && (this.score = e, (n = (t = this.listener)?.onNetworkQuality) == null || n.call(t, e));
	}
}, Od = class {
	constructor(e, t, n, r, i, a) {
		this.store = e, this.transport = t, this.deviceManager = n, this.publish = r, this.removeAuxiliaryTrack = i, this.listener = a, this.handleLocalPeerRoleUpdate = (e) => I(this, [e], function* ({ oldRole: e, newRole: t }) {
			var n;
			let r = this.store.getLocalPeer();
			r && (yield this.diffRolesAndPublishTracks({
				oldRole: e,
				newRole: t
			}), (n = this.listener) == null || n.onPeerUpdate(8, r));
		}), this.diffRolesAndPublishTracks = (e) => I(this, [e], function* ({ oldRole: e, newRole: t }) {
			let n = new Set(e.publishParams.allowed), r = new Set(t.publishParams.allowed), i = this.removeTrack(n, r, "video"), a = this.removeTrack(n, r, "audio"), o = this.removeTrack(n, r, "screen"), s = this.hasSimulcastDifference(e.publishParams.simulcast?.video, t.publishParams.simulcast?.video), c = this.hasSimulcastDifference(e.publishParams.simulcast?.screen, t.publishParams.simulcast?.screen), l = this.store.getLocalPeer()?.videoTrack?.enabled;
			yield this.removeAudioTrack(a), yield this.removeVideoTracks(i || s), yield this.removeScreenTracks(o || c);
			let u = this.getSettings();
			s && (u.isVideoMuted = !l), yield this.publish(u), yield this.syncDevices(u, t);
		});
	}
	syncDevices(e, t) {
		return I(this, null, function* () {
			(!e.isAudioMuted || !e.isVideoMuted) && t.publishParams.allowed.length > 0 && (yield this.deviceManager.init(!0));
		});
	}
	removeVideoTracks(e) {
		return I(this, null, function* () {
			var t;
			if (!e) return;
			let n = this.store.getLocalPeer();
			n != null && n.videoTrack && (n.videoTrack.isPublished ? yield this.transport.unpublish([n.videoTrack]) : yield n.videoTrack.cleanup(), (t = this.listener) == null || t.onTrackUpdate(1, n.videoTrack, n), n.videoTrack = void 0), yield this.removeAuxTracks((e) => e.source !== "screen" && e.type === "video");
		});
	}
	removeAudioTrack(e) {
		return I(this, null, function* () {
			var t;
			if (!e) return;
			let n = this.store.getLocalPeer();
			n != null && n.audioTrack && (n.audioTrack.isPublished ? yield this.transport.unpublish([n.audioTrack]) : yield n.audioTrack.cleanup(), (t = this.listener) == null || t.onTrackUpdate(1, n.audioTrack, n), n.audioTrack = void 0), yield this.removeAuxTracks((e) => e.source !== "screen" && e.type === "audio");
		});
	}
	removeScreenTracks(e) {
		return I(this, null, function* () {
			e && (yield this.removeAuxTracks((e) => e.source === "screen"));
		});
	}
	removeAuxTracks(e) {
		return I(this, null, function* () {
			let t = this.store.getLocalPeer();
			if (t != null && t.auxiliaryTracks) {
				let n = [...t.auxiliaryTracks];
				for (let t of n) e(t) && (yield this.removeAuxiliaryTrack(t.trackId));
			}
		});
	}
	removeTrack(e, t, n) {
		return e.has(n) && !t.has(n);
	}
	hasSimulcastDifference(e, t) {
		var n;
		return !e && !t ? !1 : e?.layers?.length === t?.layers?.length ? !!((n = e?.layers) != null && n.some((e) => {
			let n = (t?.layers)?.find((t) => t.rid === e.rid);
			return n?.maxBitrate !== e.maxBitrate || n?.maxFramerate !== e.maxFramerate;
		})) : !0;
	}
	getSettings() {
		let { isAudioMuted: e, isVideoMuted: t } = this.getMutedStatus(), { audioInputDeviceId: n, audioOutputDeviceId: r } = this.getAudioDeviceSettings();
		return {
			isAudioMuted: e,
			isVideoMuted: t,
			audioInputDeviceId: n,
			audioOutputDeviceId: r,
			videoDeviceId: this.getVideoInputDeviceId()
		};
	}
	getMutedStatus() {
		let e = this.store.getConfig()?.settings;
		return {
			isAudioMuted: e?.isAudioMuted ?? !0,
			isVideoMuted: e?.isVideoMuted ?? !0
		};
	}
	getAudioDeviceSettings() {
		let e = this.store.getConfig()?.settings;
		return {
			audioInputDeviceId: this.deviceManager.currentSelection.audioInput?.deviceId || e?.audioInputDeviceId || "default",
			audioOutputDeviceId: this.deviceManager.currentSelection.audioOutput?.deviceId || e?.audioOutputDeviceId || "default"
		};
	}
	getVideoInputDeviceId() {
		let e = this.store.getConfig()?.settings;
		return this.deviceManager.currentSelection.videoInput?.deviceId || e?.videoDeviceId || "default";
	}
}, kd = new class {
	constructor() {
		this.TAG = "[HTTPAnalyticsTransport]", this.failedEvents = new ya("client-events"), this.isConnected = !0, this.env = null, this.websocketURL = "";
	}
	setEnv(e) {
		this.env = e, this.flushFailedEvents();
	}
	setWebsocketEndpoint(e) {
		this.websocketURL = e;
	}
	sendEvent(e) {
		if (!this.env) {
			this.addEventToStorage(e);
			return;
		}
		let t = {
			event: e.name,
			payload: e.properties,
			event_id: String(e.timestamp),
			peer: e.metadata.peer,
			timestamp: e.timestamp,
			device_id: e.device_id,
			cluster: { websocket_url: this.websocketURL }
		}, n = this.env === "prod" ? Zo : Qo;
		fetch(n, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${e.metadata.token}`,
				user_agent_v2: e.metadata.userAgent
			},
			body: JSON.stringify(t)
		}).then((t) => {
			if (t.status === 401) {
				this.removeFromStorage(e);
				return;
			}
			if (t.status !== 200) throw Error(t.statusText);
			this.removeFromStorage(e);
		}).catch((t) => {
			L.v(this.TAG, "Failed to send event", t, e), this.addEventToStorage(e);
		});
	}
	flushFailedEvents() {
		this.failedEvents.get()?.forEach((e) => this.sendEvent(e));
	}
	addEventToStorage(e) {
		let t = this.failedEvents.get() || [];
		t.find((t) => t.timestamp === e.timestamp) || (t.length === 100 && t.shift(), t.push(e), this.failedEvents.set(t));
	}
	removeFromStorage(e) {
		let t = this.failedEvents.get() || [], n = t.findIndex((t) => t.timestamp === e.timestamp);
		n > -1 && (t.splice(n, 1), this.failedEvents.set(t));
	}
}(), Ad = class {
	constructor(e) {
		this.type = e.type, this.source = e.source || "regular", this.description = "", e instanceof ja ? (this.mute = !e.enabled, this.track_id = e.publishedTrackId, this.stream_id = e.stream.id) : (this.mute = e.mute, this.track_id = e.track_id, this.stream_id = e.stream_id);
	}
}, jd = class {
	constructor() {
		this.TAG = "[Store]:", this.knownRoles = {}, this.peers = {}, this.tracks = /* @__PURE__ */ new Map(), this.peerTrackStates = {}, this.speakers = [], this.roleDetailsArrived = !1, this.env = "prod", this.simulcastEnabled = !1, this.userAgent = Da(this.env), this.polls = /* @__PURE__ */ new Map(), this.whiteboards = /* @__PURE__ */ new Map(), this.addPermissionToRole = (e, t, n, r) => {
			var i;
			if (!this.knownRoles[e]) {
				L.d(this.TAG, `role ${e} is not present in given roles`, this.knownRoles);
				return;
			}
			let a = this.knownRoles[e].permissions;
			t === "transcriptions" && r ? a[t] = F(P({}, a[t]), { [r]: [n] }) : t === "whiteboard" && (a[t] || (a[t] = []), (i = a[t]) == null || i.push(n));
		}, this.addWhiteboardPluginToRole = (e) => {
			var t, n, r;
			let i = e?.permissions;
			(t = i?.admin) == null || t.forEach((e) => this.addPermissionToRole(e, "whiteboard", "admin")), (n = i?.reader) == null || n.forEach((e) => this.addPermissionToRole(e, "whiteboard", "read")), (r = i?.writer) == null || r.forEach((e) => this.addPermissionToRole(e, "whiteboard", "write"));
		}, this.addTranscriptionsPluginToRole = (e = []) => {
			var t;
			for (let n of e) (t = n.permissions?.admin) == null || t.forEach((e) => this.addPermissionToRole(e, "transcriptions", "admin", n.mode)), n.translation && this.room && (this.room.translationConfig || (this.room.translationConfig = {}), this.room.translationConfig[n.mode] = n.translation);
		}, this.handleNoiseCancellationPlugin = (e) => {
			this.room && (this.room.isNoiseCancellationEnabled = !!(e != null && e.enabled) && !!this.room.isNoiseCancellationEnabled);
		};
	}
	getConfig() {
		return this.config;
	}
	setSimulcastEnabled(e) {
		this.simulcastEnabled = e;
	}
	removeRemoteTracks() {
		this.tracks.forEach((e) => {
			(e instanceof ko || e instanceof ss) && (this.removeTrack(e), delete this.peerTrackStates[e.trackId]);
		});
	}
	getEnv() {
		return this.env;
	}
	getPublishParams() {
		let e = this.getLocalPeer();
		return (e?.asRole || e?.role)?.publishParams;
	}
	getRoom() {
		return this.room;
	}
	getPolicyForRole(e) {
		return this.knownRoles[e];
	}
	getKnownRoles() {
		return this.knownRoles;
	}
	getTemplateAppData() {
		return this.templateAppData;
	}
	getLocalPeer() {
		if (this.localPeerId && this.peers[this.localPeerId]) return this.peers[this.localPeerId];
	}
	getRemotePeers() {
		return Object.values(this.peers).filter((e) => !e.isLocal);
	}
	getPeers() {
		return Object.values(this.peers);
	}
	getPeerMap() {
		return this.peers;
	}
	getPeerById(e) {
		if (this.peers[e]) return this.peers[e];
	}
	getTracksMap() {
		return this.tracks;
	}
	getTracks() {
		return Array.from(this.tracks.values());
	}
	getVideoTracks() {
		return this.getTracks().filter((e) => e.type === "video");
	}
	getRemoteVideoTracks() {
		return this.getTracks().filter((e) => e instanceof ss);
	}
	getAudioTracks() {
		return this.getTracks().filter((e) => e.type === "audio");
	}
	getPeerTracks(e) {
		let t = e ? this.peers[e] : void 0, n = [];
		return t != null && t.videoTrack && n.push(t.videoTrack), t != null && t.audioTrack && n.push(t.audioTrack), n.concat(t?.auxiliaryTracks || []);
	}
	getLocalPeerTracks() {
		return this.getPeerTracks(this.localPeerId);
	}
	hasTrack(e) {
		return this.tracks.has(e);
	}
	getTrackById(e) {
		var t, n;
		let r = Array.from(this.tracks.values()).find((t) => t.trackId === e);
		if (r) return r;
		let i = this.getLocalPeer();
		if (i) {
			if ((t = i.audioTrack) != null && t.isPublishedTrackId(e)) return i.audioTrack;
			if ((n = i.videoTrack) != null && n.isPublishedTrackId(e)) return i.videoTrack;
		}
	}
	getPeerByTrackId(e) {
		let t = Array.from(this.tracks.values()).find((t) => t.trackId === e);
		return t != null && t.peerId ? this.peers[t.peerId] : void 0;
	}
	getSpeakers() {
		return this.speakers;
	}
	getSpeakerPeers() {
		return this.speakers.map((e) => e.peer);
	}
	getUserAgent() {
		return this.userAgent;
	}
	createAndSetUserAgent(e) {
		this.userAgent = Da(this.env, e);
	}
	setRoom(e) {
		this.room = e;
	}
	setKnownRoles(e) {
		if (this.knownRoles = e.known_roles, this.addPluginsToRoles(e.plugins), this.roleDetailsArrived = !0, this.templateAppData = e.app_data, !this.simulcastEnabled) return;
		let t = this.knownRoles[e.name]?.publishParams;
		this.videoLayers = this.convertSimulcastLayers(t.simulcast?.video), this.updatePeersPolicy();
	}
	hasRoleDetailsArrived() {
		return this.roleDetailsArrived;
	}
	setConfig(e) {
		var t, n, r;
		if (Na.rememberDevices(!!e.rememberDeviceSelection), e.rememberDeviceSelection) {
			let i = Na.getSelection();
			i && (e.settings ||= {}, (t = i.audioInput) != null && t.deviceId && (e.settings.audioInputDeviceId = e.settings.audioInputDeviceId || i.audioInput.deviceId), (n = i.audioOutput) != null && n.deviceId && (e.settings.audioOutputDeviceId = e.settings.audioOutputDeviceId || i.audioOutput.deviceId), (r = i.videoInput) != null && r.deviceId && (e.settings.videoDeviceId = e.settings.videoDeviceId || i.videoInput.deviceId));
		}
		e.autoManageVideo = e.autoManageVideo !== !1, e.autoManageWakeLock = e.autoManageWakeLock !== !1, this.config = e, this.setEnv();
	}
	addPeer(e) {
		this.peers[e.peerId] = e, e.isLocal && (this.localPeerId = e.peerId);
	}
	addTrack(e) {
		this.tracks.set(e, e);
	}
	getTrackState(e) {
		return this.peerTrackStates[e];
	}
	setTrackState(e) {
		this.peerTrackStates[e.trackInfo.track_id] = e;
	}
	removeTrackState(e) {
		delete this.peerTrackStates[e];
	}
	removePeer(e) {
		this.localPeerId === e && (this.localPeerId = void 0), delete this.peers[e];
	}
	removeTrack(e) {
		this.tracks.delete(e);
	}
	updateSpeakers(e) {
		this.speakers = e;
	}
	updateAudioOutputVolume(e) {
		return I(this, null, function* () {
			for (let t of this.getAudioTracks()) yield t.setVolume(e);
		});
	}
	updateAudioOutputDevice(e) {
		return I(this, null, function* () {
			let t = [];
			this.getAudioTracks().forEach((n) => {
				n instanceof ko && t.push(n.setOutputDevice(e));
			}), yield Promise.all(t);
		});
	}
	getSimulcastLayers(e) {
		return !this.simulcastEnabled || !["screen", "regular"].includes(e) || e === "screen" ? [] : this.videoLayers?.layers || [];
	}
	convertSimulcastLayers(e) {
		if (e) return F(P({}, e), { layers: (e.layers || []).map((e) => F(P({}, e), { maxBitrate: e.maxBitrate * 1e3 })) });
	}
	getSimulcastDefinitionsForPeer(e, t) {
		if ([
			!e || !e.role,
			t === "screen",
			!this.simulcastEnabled
		].some((e) => !!e)) return [];
		let n = this.getPolicyForRole(e.role.name).publishParams, r, i, a;
		return t === "regular" ? (r = n.simulcast?.video, i = n.video.width, a = n.video.height) : t === "screen" && (r = n.simulcast?.screen, i = n.screen.width, a = n.screen.height), (r?.layers)?.map((e) => ({
			layer: Xa[e.rid],
			resolution: {
				width: Math.floor(i / e.scaleResolutionDownBy),
				height: Math.floor(a / e.scaleResolutionDownBy)
			}
		})) || [];
	}
	setPoll(e) {
		this.polls.set(e.id, e);
	}
	getPoll(e) {
		return this.polls.get(e);
	}
	setWhiteboard(e) {
		this.whiteboards.set(e.id, e);
	}
	getWhiteboards() {
		return this.whiteboards;
	}
	getWhiteboard(e) {
		return e ? this.whiteboards.get(e) : this.whiteboards.values().next().value;
	}
	getErrorListener() {
		return this.errorListener;
	}
	cleanup() {
		let e = this.getTracks();
		for (let t of e) t.cleanup();
		this.room = void 0, this.config = void 0, this.localPeerId = void 0, this.roleDetailsArrived = !1;
	}
	setErrorListener(e) {
		this.errorListener = e;
	}
	updatePeersPolicy() {
		this.getPeers().forEach((e) => {
			var t;
			if (!e.role) {
				(t = this.errorListener) == null || t.onError(B.GenericErrors.InvalidRole("VALIDATION", ""));
				return;
			}
			e.role = this.getPolicyForRole(e.role.name);
		});
	}
	addPluginsToRoles(e) {
		e && Object.keys(e).forEach((t) => {
			let n = t;
			switch (n) {
				case "whiteboard":
					this.addWhiteboardPluginToRole(e[n]);
					break;
				case "transcriptions":
					this.addTranscriptionsPluginToRole(e[n]);
					break;
				case "noiseCancellation":
					this.handleNoiseCancellationPlugin(e[n]);
					break;
				default: break;
			}
		});
	}
	setEnv() {
		let e = (this.config?.initEndpoint).split("https://")[1], t = "prod";
		e.startsWith("prod") ? t = "prod" : e.startsWith("qa") ? t = "qa" : e.startsWith("dev") && (t = "dev"), this.env = t, kd.setEnv(t);
	}
}, Md = class {
	constructor() {
		this.TAG = "[WakeLockManager]", this.wakeLock = null, this.acquireLock = () => I(this, null, function* () {
			yield this.requestWakeLock(), document == null || document.addEventListener("visibilitychange", this.visibilityHandler);
		}), this.cleanup = () => I(this, null, function* () {
			if (this.wakeLock && !this.wakeLock.released) try {
				yield this.wakeLock.release(), L.d(this.TAG, "Wake lock released");
			} catch (e) {
				let t = e;
				L.w(this.TAG, "Error while releasing wake lock", `name=${t.name}, message=${t.message}`);
			}
			document == null || document.removeEventListener("visibilitychange", this.visibilityHandler), this.wakeLock = null;
		}), this.visibilityHandler = () => I(this, null, function* () {
			(document == null ? void 0 : document.visibilityState) === "visible" && (!this.wakeLock || this.wakeLock.released) && (L.d(this.TAG, "Re-acquiring wake lock due to visibility change"), yield this.requestWakeLock());
		}), this.requestWakeLock = () => I(this, null, function* () {
			try {
				if (!("wakeLock" in navigator)) {
					L.d(this.TAG, "Wake lock feature not supported");
					return;
				}
				this.wakeLock = yield navigator.wakeLock.request("screen"), L.d(this.TAG, "Wake lock acquired");
			} catch (e) {
				let t = e;
				L.w(this.TAG, "Error acquiring wake lock", `name=${t.name}, message=${t.message}`);
			}
		});
	}
}, Nd = class {
	constructor(e) {
		this.store = e, this.bufferSize = 100, this.TAG = "[AnalyticsEventsService]", this.transport = null, this.pendingEvents = [], this.level = 1;
	}
	setTransport(e) {
		this.transport = e;
	}
	reset() {
		this.transport = null, this.pendingEvents = [];
	}
	queue(e) {
		if (e.level >= this.level && (this.pendingEvents.push(e), this.pendingEvents.length > this.bufferSize)) {
			let e = this.pendingEvents.shift();
			L.d(this.TAG, "Max buffer size reached", "Removed event to accommodate new events", e);
		}
		return this;
	}
	flushFailedClientEvents() {
		kd.flushFailedEvents();
	}
	flush() {
		try {
			for (; this.pendingEvents.length > 0;) {
				let e = this.pendingEvents.shift();
				e && (e.metadata.peer.peer_id = this.store.getLocalPeer()?.peerId, e.metadata.userAgent = this.store.getUserAgent(), this.transport && this.transport.transportProvider.isConnected ? this.transport.sendEvent(e) : this.sendClientEventOnHTTP(e));
			}
		} catch (e) {
			L.w(this.TAG, "Flush Failed", e);
		}
	}
	sendClientEventOnHTTP(e) {
		let t = this.store.getRoom(), n = this.store.getLocalPeer();
		e.metadata.token = this.store.getConfig()?.authToken, e.metadata.peer = {
			session_id: t?.sessionId,
			room_id: t?.id,
			room_name: t?.name,
			template_id: t?.templateId,
			joined_at: (t?.joinedAt)?.getTime(),
			session_started_at: (t?.startedAt)?.getTime(),
			role: n?.role?.name,
			user_name: n?.name,
			user_data: n?.metadata,
			peer_id: n?.peerId
		}, kd.sendEvent(e);
	}
}, Pd = {
	autoplayFailed: void 0,
	initialized: !1,
	autoplayCheckPromise: void 0
}, Fd = class {
	constructor(e, t, n) {
		this.store = e, this.deviceManager = t, this.eventBus = n, this.autoPausedTracks = /* @__PURE__ */ new Set(), this.TAG = "[AudioSinkManager]:", this.volume = 100, this.state = P({}, Pd), this.handleAudioPaused = (e) => I(this, null, function* () {
			L.d(this.TAG, "Audio Paused", e.target.id);
			let t = this.store.getTrackById(e.target.id);
			t && this.autoPausedTracks.add(t);
		}), this.handleTrackUpdate = ({ track: e }) => {
			L.d(this.TAG, "Track updated", `${e}`);
		}, this.handleTrackAdd = (e) => I(this, [e], function* ({ track: e, peer: t, callListener: n = !0 }) {
			var r, i;
			let a = document.createElement("audio");
			a.style.display = "none", a.id = e.trackId, a.addEventListener("pause", this.handleAudioPaused), a.onerror = () => I(this, null, function* () {
				L.e(this.TAG, "error on audio element", a.error);
				let n = B.TracksErrors.AudioPlaybackError(`Audio playback error for track - ${e.trackId} code - ${a?.error?.code}`);
				this.eventBus.analytics.publish(H.audioPlaybackError(n)), a?.error?.code === MediaError.MEDIA_ERR_DECODE && (this.removeAudioElement(a, e), yield bo(500), yield this.handleTrackAdd({
					track: e,
					peer: t,
					callListener: !1
				}), this.state.autoplayFailed || this.eventBus.analytics.publish(H.audioRecovered("Audio recovered after media decode error")));
			}), e.setAudioElement(a), yield e.setVolume(this.volume), L.d(this.TAG, "Audio track added", `${e}`), this.init(), (r = this.audioSink) == null || r.append(a), this.outputDevice && (yield e.setOutputDevice(this.outputDevice)), a.srcObject = new MediaStream([e.nativeTrack]), n && ((i = this.listener) == null || i.onTrackUpdate(0, e, t)), yield this.handleAutoplayError(e);
		}), this.handleAutoplayError = (e) => I(this, null, function* () {
			if (this.state.autoplayFailed === void 0 && (this.state.autoplayCheckPromise || (this.state.autoplayCheckPromise = new Promise((t) => {
				this.playAudioFor(e).then(t);
			})), yield this.state.autoplayCheckPromise), this.state.autoplayFailed) {
				this.autoPausedTracks.add(e);
				return;
			}
			yield this.playAudioFor(e);
		}), this.handleAudioDeviceChange = (e) => I(this, null, function* () {
			e.isUserSelection || e.error || !e.selection || e.type === "video" || (yield this.unpauseAudioTracks());
		}), this.handleTrackRemove = (e) => {
			this.autoPausedTracks.delete(e);
			let t = document.getElementById(e.trackId);
			t && this.removeAudioElement(t, e), this.audioSink && this.audioSink.childElementCount === 0 && (this.state.autoplayCheckPromise = void 0, this.state.autoplayFailed = void 0), L.d(this.TAG, "Audio track removed", `${e}`);
		}, this.unpauseAudioTracks = () => I(this, null, function* () {
			let e = [];
			this.autoPausedTracks.forEach((t) => {
				e.push(this.playAudioFor(t));
			}), yield Promise.all(e);
		}), this.removeAudioElement = (e, t) => {
			e && (L.d(this.TAG, "removing audio element", `${t}`), e.removeEventListener("pause", this.handleAudioPaused), e.srcObject = null, e.remove(), t.setAudioElement(null));
		}, this.eventBus.audioTrackAdded.subscribe(this.handleTrackAdd), this.eventBus.audioTrackRemoved.subscribe(this.handleTrackRemove), this.eventBus.audioTrackUpdate.subscribe(this.handleTrackUpdate), this.eventBus.deviceChange.subscribe(this.handleAudioDeviceChange), this.eventBus.localVideoUnmutedNatively.subscribe(this.unpauseAudioTracks), this.eventBus.localAudioUnmutedNatively.subscribe(this.unpauseAudioTracks);
	}
	setListener(e) {
		this.listener = e;
	}
	get outputDevice() {
		return this.deviceManager.outputDevice;
	}
	getVolume() {
		return this.volume;
	}
	setVolume(e) {
		return I(this, null, function* () {
			yield this.store.updateAudioOutputVolume(e), this.volume = e;
		});
	}
	unblockAutoplay() {
		return I(this, null, function* () {
			this.autoPausedTracks.size > 0 && (yield this.unpauseAudioTracks()), yield oo.resumeContext();
		});
	}
	init(e) {
		if (this.state.initialized || this.audioSink) return;
		this.state.initialized = !0;
		let t = document.createElement("div");
		t.id = `HMS-SDK-audio-sink-${tn()}`, (e && document.getElementById(e) || document.body).append(t), this.audioSink = t, L.d(this.TAG, "audio sink created", this.audioSink);
	}
	cleanup() {
		var e;
		(e = this.audioSink) == null || e.remove(), this.audioSink = void 0, this.eventBus.audioTrackAdded.unsubscribe(this.handleTrackAdd), this.eventBus.audioTrackRemoved.unsubscribe(this.handleTrackRemove), this.eventBus.audioTrackUpdate.unsubscribe(this.handleTrackUpdate), this.eventBus.deviceChange.unsubscribe(this.handleAudioDeviceChange), this.eventBus.localVideoUnmutedNatively.unsubscribe(this.unpauseAudioTracks), this.eventBus.localAudioUnmutedNatively.unsubscribe(this.unpauseAudioTracks), this.autoPausedTracks = /* @__PURE__ */ new Set(), this.state = P({}, Pd);
	}
	playAudioFor(e) {
		return I(this, null, function* () {
			let t = e.getAudioElement();
			if (!t) {
				L.w(this.TAG, "No audio element found on track", e.trackId);
				return;
			}
			try {
				yield t.play(), this.state.autoplayFailed = !1, this.autoPausedTracks.delete(e), L.d(this.TAG, "Played track", `${e}`);
			} catch (t) {
				this.autoPausedTracks.add(e), L.w(this.TAG, "Failed to play track", `${e}`, t);
				let n = t;
				if (!this.state.autoplayFailed && n.name === "NotAllowedError") {
					this.state.autoplayFailed = !0;
					let e = B.TracksErrors.AutoplayBlocked("AUTOPLAY", "");
					e.addNativeError(n), this.eventBus.analytics.publish(H.autoplayError()), this.eventBus.autoplayError.publish(e);
				}
			}
		});
	}
}, Id = class {
	constructor(e) {
		this.eventBus = e, this.pluginUsage = /* @__PURE__ */ new Map(), this.pluginLastAddedAt = /* @__PURE__ */ new Map(), this.getPluginUsage = (e) => {
			if (this.pluginUsage.has(e) || this.pluginUsage.set(e, 0), this.pluginLastAddedAt.has(e)) {
				let t = this.pluginLastAddedAt.get(e) || 0, n = t ? Date.now() - t : 0;
				this.pluginUsage.set(e, (this.pluginUsage.get(e) || 0) + n), this.pluginLastAddedAt.delete(e);
			}
			return this.pluginUsage.get(e);
		}, this.updatePluginUsageData = (e) => {
			let t = e.properties?.plugin_name || "";
			switch (e.name) {
				case "mediaPlugin.toggled.on":
				case "mediaPlugin.added": {
					let n = e.properties.added_at || Date.now();
					this.pluginLastAddedAt.set(t, n);
					break;
				}
				case "mediaPlugin.toggled.off":
				case "mediaPlugin.stats":
					if (this.pluginLastAddedAt.has(t)) {
						let n = e.properties.duration || (Date.now() - (this.pluginLastAddedAt.get(t) || 0)) / 1e3;
						this.pluginUsage.set(t, (this.pluginUsage.get(t) || 0) + Math.max(n, 0) * 1e3), this.pluginLastAddedAt.delete(t);
					}
					break;
				default:
			}
		}, this.cleanup = () => {
			this.pluginLastAddedAt.clear(), this.pluginUsage.clear();
		}, this.eventBus.analytics.subscribe((e) => this.updatePluginUsageData(e));
	}
}, Ld = class {
	constructor(e, t) {
		this.store = e, this.eventBus = t, this.audioInput = [], this.audioOutput = [], this.videoInput = [], this.hasWebcamPermission = !1, this.hasMicrophonePermission = !1, this.currentSelection = {
			audioInput: void 0,
			videoInput: void 0,
			audioOutput: void 0
		}, this.TAG = "[Device Manager]:", this.initialized = !1, this.videoInputChanged = !1, this.audioInputChanged = !1, this.earpieceSelected = !1, this.timer = null, this.updateOutputDevice = (e, t) => I(this, null, function* () {
			let n = this.audioOutput.find((t) => t.deviceId === e);
			return n && (this.outputDevice = n, yield this.store.updateAudioOutputDevice(n), this.eventBus.analytics.publish(H.deviceChange({
				isUserSelection: t,
				selection: { audioOutput: n },
				devices: this.getDevices(),
				type: "audioOutput"
			})), Na.updateSelection("audioOutput", {
				deviceId: n.deviceId,
				groupId: n.groupId
			})), n;
		}), this.getCurrentSelection = () => {
			let e = this.store.getLocalPeer(), t = this.createIdentifier((e?.audioTrack)?.getMediaTrackSettings()), n = this.createIdentifier((e?.videoTrack)?.getMediaTrackSettings());
			return {
				audioInput: this.audioInput.find((e) => this.createIdentifier(e) === t),
				videoInput: this.videoInput.find((e) => this.createIdentifier(e) === n),
				audioOutput: this.outputDevice
			};
		}, this.computeChange = (e, t) => e.length === t.length ? t.some((t) => !e.includes(this.createIdentifier(t))) : !0, this.enumerateDevices = () => I(this, null, function* () {
			try {
				let e = yield navigator.mediaDevices.enumerateDevices(), t = this.videoInput.map(this.createIdentifier), n = this.audioInput.map(this.createIdentifier);
				this.audioInput = [], this.audioOutput = [], this.videoInput = [], e.forEach((e) => {
					e.kind === "audioinput" && e.label ? (this.hasMicrophonePermission = !0, this.audioInput.push(e)) : e.kind === "audiooutput" ? this.audioOutput.push(e) : e.kind === "videoinput" && e.label && (this.hasWebcamPermission = !0, this.videoInput.push(e));
				}), this.videoInputChanged = this.computeChange(t, this.videoInput), this.audioInputChanged = this.computeChange(n, this.audioInput), Na.setDevices({
					videoInput: [...this.videoInput],
					audioInput: [...this.audioInput],
					audioOutput: [...this.audioOutput]
				}), this.logDevices("Enumerate Devices");
			} catch (e) {
				L.e(this.TAG, "Failed enumerating devices", e);
			}
		}), this.updateToActualDefaultDevice = () => I(this, null, function* () {
			var e;
			let t = this.store.getLocalPeer();
			if (!((e = this.store.getConfig()?.settings) != null && e.videoDeviceId) && t != null && t.videoTrack && (yield t.videoTrack.setSettings({ deviceId: this.videoInput[0]?.deviceId }, !0)), !this.store.getConfig()?.settings?.audioInputDeviceId && t != null && t.audioTrack) {
				let e = () => {
					let e = this.audioInput.find((e) => !e.label.toLowerCase().includes("iphone"));
					return oa() && e ? e?.deviceId : this.getNewAudioInputDevice()?.deviceId;
				};
				e() && (yield t.audioTrack.setSettings({ deviceId: e() }, !0));
			}
		}), this.handleDeviceChange = Co(() => I(this, null, function* () {
			yield this.enumerateDevices(), this.logDevices("After Device Change");
			let e = this.store.getLocalPeer();
			yield this.setOutputDevice(!0), yield this.handleAudioInputDeviceChange(e?.audioTrack), yield this.handleVideoInputDeviceChange(e?.videoTrack), this.eventBus.analytics.publish(H.deviceChange({
				selection: this.getCurrentSelection(),
				type: "change",
				devices: this.getDevices()
			}));
		}), 500).bind(this), this.handleAudioInputDeviceChange = (e) => I(this, null, function* () {
			if (!e) {
				L.d(this.TAG, "No Audio track on local peer");
				return;
			}
			if (!this.audioInputChanged) {
				L.d(this.TAG, "No Change in AudioInput Device");
				return;
			}
			let t = this.getNewAudioInputDevice();
			if (!t || !t.deviceId) {
				this.eventBus.analytics.publish(H.deviceChange({
					selection: { audioInput: t },
					error: B.TracksErrors.SelectedDeviceMissing("audio"),
					devices: this.getDevices(),
					type: "audioInput"
				})), L.e(this.TAG, "Audio device not found"), this.eventBus.deviceChange.publish({
					error: B.TracksErrors.SelectedDeviceMissing("audio"),
					selection: t,
					type: "audioInput",
					devices: this.getDevices()
				});
				return;
			}
			let { settings: n } = e, r = new $a().codec(n.codec).maxBitrate(n.maxBitrate).deviceId(t.deviceId).audioMode(n.audioMode).build();
			try {
				yield e.setSettings(r, !0), this.eventBus.deviceChange.publish({
					devices: this.getDevices(),
					selection: t,
					type: "audioInput"
				}), this.logDevices("Audio Device Change Success");
			} catch (e) {
				L.e(this.TAG, "[Audio Device Change]", e), this.eventBus.analytics.publish(H.deviceChange({
					selection: { audioInput: t },
					devices: this.getDevices(),
					type: "audioInput",
					error: e
				})), this.eventBus.deviceChange.publish({
					error: e,
					selection: t,
					type: "audioInput",
					devices: this.getDevices()
				});
			}
		}), this.handleVideoInputDeviceChange = (e) => I(this, null, function* () {
			if (!e) {
				L.d(this.TAG, "No video track on local peer");
				return;
			}
			if (!this.videoInputChanged) {
				L.d(this.TAG, "No Change in VideoInput Device");
				return;
			}
			let t = this.videoInput[0];
			if (!t || !t.deviceId) {
				this.eventBus.analytics.publish(H.deviceChange({
					selection: { videoInput: t },
					error: B.TracksErrors.SelectedDeviceMissing("video"),
					devices: this.getDevices(),
					type: "video"
				})), L.e(this.TAG, "Video device not found"), this.eventBus.deviceChange.publish({
					error: B.TracksErrors.SelectedDeviceMissing("video"),
					selection: t,
					type: "video",
					devices: this.getDevices()
				});
				return;
			}
			let { settings: n } = e, r = new to().codec(n.codec).maxBitrate(n.maxBitrate).maxFramerate(n.maxFramerate).setWidth(n.width).setHeight(n.height).deviceId(t.deviceId).build();
			try {
				yield e.setSettings(r, !0), this.eventBus.deviceChange.publish({
					devices: this.getDevices(),
					selection: t,
					type: "video"
				}), this.logDevices("Video Device Change Success");
			} catch (e) {
				L.e(this.TAG, "[Video Device Change]", e), this.eventBus.analytics.publish(H.deviceChange({
					selection: { videoInput: t },
					devices: this.getDevices(),
					type: "video",
					error: e
				})), this.eventBus.deviceChange.publish({
					error: e,
					type: "video",
					selection: t,
					devices: this.getDevices()
				});
			}
		}), this.startPollingForDevices = () => I(this, null, function* () {
			let { earpiece: e } = this.categorizeAudioInputDevices();
			e && (this.timer = setTimeout(() => {
				I(this, null, function* () {
					yield this.enumerateDevices(), yield this.autoSelectAudioOutput(), this.startPollingForDevices();
				});
			}, 5e3));
		}), this.autoSelectAudioOutput = (e) => I(this, null, function* () {
			let { bluetoothDevice: t, earpiece: n, speakerPhone: r, wired: i } = this.categorizeAudioInputDevices(), a = this.store.getLocalPeer()?.audioTrack;
			if (!a || !n) return;
			let o = this.getManuallySelectedAudioDevice()?.deviceId || t?.deviceId || i?.deviceId || r?.deviceId;
			if (!(!e && a.settings.deviceId === o && this.earpieceSelected)) try {
				(!this.earpieceSelected || e) && (t?.deviceId === o ? this.earpieceSelected = !0 : (L.d(this.TAG, "selecting earpiece"), yield a.setSettings({ deviceId: n?.deviceId }, !0), e && (yield bo(e)), this.earpieceSelected = !0)), yield a.setSettings({ deviceId: o }, !0);
				let r = this.audioInput.find((e) => e.deviceId === o)?.groupId;
				this.eventBus.deviceChange.publish({
					isUserSelection: !1,
					type: "audioInput",
					selection: {
						deviceId: o,
						groupId: r
					},
					devices: this.getDevices(),
					internal: !0
				});
			} catch (e) {
				this.eventBus.error.publish(e);
			}
		});
		let n = ({ enabled: e, track: t }) => e && t.source === "regular";
		this.eventBus.localVideoEnabled.waitFor(n).then(() => {
			this.videoInput.length === 0 && this.init(!0);
		}), this.eventBus.localAudioEnabled.waitFor(n).then(() => {
			this.audioInput.length === 0 && this.init(!0);
		}), this.eventBus.deviceChange.subscribe(({ type: e, isUserSelection: t, selection: n }) => {
			if (t) {
				let r = e === "video" ? "videoInput" : e, i = this[r].find((e) => this.createIdentifier(e) === this.createIdentifier(n));
				this.eventBus.analytics.publish(H.deviceChange({
					selection: { [r]: i },
					devices: this.getDevices(),
					type: e,
					isUserSelection: t
				}));
			}
		});
	}
	init(e = !1, t = !0) {
		return I(this, null, function* () {
			this.initialized && !e || (!this.initialized && navigator.mediaDevices.addEventListener("devicechange", this.handleDeviceChange), this.initialized = !0, yield this.enumerateDevices(), e || (yield this.updateToActualDefaultDevice(), this.startPollingForDevices()), yield this.autoSelectAudioOutput(), this.logDevices("Init"), yield this.setOutputDevice(), this.eventBus.deviceChange.publish({ devices: this.getDevices() }), t && this.eventBus.analytics.publish(H.deviceChange({
				selection: this.getCurrentSelection(),
				type: "list",
				devices: this.getDevices()
			})));
		});
	}
	getDevices() {
		return {
			audioInput: this.audioInput,
			audioOutput: this.audioOutput,
			videoInput: this.videoInput
		};
	}
	cleanup() {
		this.timer &&= (clearTimeout(this.timer), null), this.initialized = !1, this.earpieceSelected = !1, this.audioInput = [], this.audioOutput = [], this.videoInput = [], this.outputDevice = void 0, navigator.mediaDevices.removeEventListener("devicechange", this.handleDeviceChange);
	}
	createIdentifier(e) {
		return e ? `${e.deviceId}${e.groupId}` : "";
	}
	getNewAudioInputDevice() {
		var e;
		let t = this.getManuallySelectedAudioDevice();
		if (t) return t;
		(e = this.store.getLocalPeer()?.audioTrack) == null || e.resetManuallySelectedDeviceId();
		let n = this.audioInput.find((e) => e.deviceId === "default");
		return n ? this.audioInput.find((e) => e.deviceId !== "default" && n.label.includes(e.label)) : this.audioInput[0];
	}
	setOutputDevice(e = !1) {
		return I(this, null, function* () {
			let t = this.getNewAudioInputDevice(), n = this.createIdentifier(this.outputDevice);
			this.outputDevice = this.getAudioOutputDeviceMatchingInput(t), this.outputDevice || (this.outputDevice = this.audioOutput.find((e) => this.createIdentifier(e) === n), this.outputDevice ||= this.audioOutput.find((e) => e.deviceId === "default") || this.audioOutput[0]), yield this.store.updateAudioOutputDevice(this.outputDevice), e && n !== this.createIdentifier(this.outputDevice) && (this.eventBus.analytics.publish(H.deviceChange({
				selection: { audioOutput: this.outputDevice },
				devices: this.getDevices(),
				type: "audioOutput"
			})), this.eventBus.deviceChange.publish({
				selection: this.outputDevice,
				type: "audioOutput",
				devices: this.getDevices()
			}));
		});
	}
	getManuallySelectedAudioDevice() {
		let e = this.store.getLocalPeer()?.audioTrack;
		return this.audioInput.find((t) => t.deviceId === e?.getManuallySelectedDeviceId());
	}
	categorizeAudioInputDevices() {
		let e = null, t = null, n = null, r = null;
		for (let i of this.audioInput) {
			let a = co(i.label);
			a === "SPEAKERPHONE" ? t = i : a === "WIRED" ? n = i : a === "BLUETOOTH" ? e = i : a === "EARPIECE" && (r = i);
		}
		return {
			bluetoothDevice: e,
			speakerPhone: t,
			wired: n,
			earpiece: r
		};
	}
	getAudioOutputDeviceMatchingInput(e) {
		let t = this.store.getConfig()?.settings?.speakerAutoSelectionBlacklist || [];
		if (t === "all" || !e) return;
		let n = e.label.toLowerCase() || "";
		if (t.some((e) => n.includes(e.toLowerCase()))) return;
		let r = this.audioOutput.find((t) => e.deviceId !== "default" && t.label === e.label);
		if (r) return r;
		let i = this.audioOutput.find((t) => t.groupId === e.groupId && t.deviceId !== "default");
		if (i) return i;
	}
	logDevices(e = "") {
		L.d(this.TAG, e, JSON.stringify({
			videoInput: [...this.videoInput],
			audioInput: [...this.audioInput],
			audioOutput: [...this.audioOutput],
			selected: this.getCurrentSelection()
		}, null, 4));
	}
}, Rd = class {
	constructor(e, t) {
		this.deviceManager = e, this.audioSinkManager = t;
	}
	getVolume() {
		return this.audioSinkManager.getVolume();
	}
	setVolume(e) {
		if (e < 0 || e > 100) throw Error("Please pass a valid number between 0-100");
		this.audioSinkManager.setVolume(e);
	}
	getDevice() {
		return this.deviceManager.outputDevice;
	}
	setDevice(e) {
		return this.deviceManager.updateOutputDevice(e, !0);
	}
	unblockAutoplay() {
		return I(this, null, function* () {
			yield this.audioSinkManager.unblockAutoplay(), yield oo.resumeContext();
		});
	}
}, zd = class {
	static handleError(e) {
		if (e.status === 404) throw B.APIErrors.EndpointUnreachable("FEEDBACK", e.statusText);
		if (e.status >= 400) throw B.APIErrors.ServerErrors(e.status, "FEEDBACK", e?.statusText);
	}
	static sendFeedback(e) {
		return I(this, arguments, function* ({ token: e, eventEndpoint: t = "https://event.100ms.live", info: n, feedback: r }) {
			L.d(this.TAG, `sendFeedback: feedbackEndpoint=${t} peerId=${n.peer.peer_id} session=${n.peer.session_id} `);
			let i = new URL("v2/client/feedback", t), a = F(P({}, n), { payload: r });
			try {
				let t = yield fetch(i, {
					headers: { Authorization: `Bearer ${e}` },
					body: JSON.stringify(a),
					method: "POST"
				});
				try {
					this.handleError(t);
					return;
				} catch (e) {
					throw L.e(this.TAG, "error", e.message, t.status), e instanceof z ? e : B.APIErrors.ServerErrors(t.status, "FEEDBACK", e.message);
				}
			} catch (e) {
				let t = e;
				throw [
					"Failed to fetch",
					"NetworkError",
					"ECONNRESET"
				].some((e) => t.message.includes(e)) ? B.APIErrors.EndpointUnreachable("FEEDBACK", t.message) : t;
			}
		});
	}
};
zd.TAG = "[FeedbackService]";
var Y = class {
	constructor(e, t) {
		this.eventName = e, this.eventEmitter = t, this.publish = (e) => {
			this.eventEmitter.emit(this.eventName, e);
		}, this.subscribe = (e) => {
			this.eventEmitter.on(this.eventName, e);
		}, this.subscribeOnce = (e) => {
			this.eventEmitter.once(this.eventName, e);
		}, this.unsubscribe = (e) => {
			this.eventEmitter.off(this.eventName, e);
		}, this.waitFor = (e) => this.eventEmitter.waitFor(this.eventName, { filter: e }), this.removeAllListeners = () => {
			this.eventEmitter.removeAllListeners(this.eventName);
		};
	}
}, Bd = class {
	constructor() {
		this.eventEmitter = new fr.EventEmitter2(), this.analytics = new Y(U.ANALYTICS, this.eventEmitter), this.deviceChange = new Y(U.DEVICE_CHANGE, this.eventEmitter), this.localAudioEnabled = new Y(U.LOCAL_AUDIO_ENABLED, this.eventEmitter), this.localVideoEnabled = new Y(U.LOCAL_VIDEO_ENABLED, this.eventEmitter), this.localVideoUnmutedNatively = new Y(U.LOCAL_VIDEO_UNMUTED_NATIVELY, this.eventEmitter), this.localAudioUnmutedNatively = new Y(U.LOCAL_AUDIO_UNMUTED_NATIVELY, this.eventEmitter), this.statsUpdate = new Y(U.STATS_UPDATE, this.eventEmitter), this.trackDegraded = new Y(U.TRACK_DEGRADED, this.eventEmitter), this.trackRestored = new Y(U.TRACK_RESTORED, this.eventEmitter), this.trackAudioLevelUpdate = new Y(U.TRACK_AUDIO_LEVEL_UPDATE, this.eventEmitter), this.audioPluginFailed = new Y(U.AUDIO_PLUGIN_FAILED, this.eventEmitter), this.localAudioSilence = new Y(U.LOCAL_AUDIO_SILENCE, this.eventEmitter), this.policyChange = new Y(U.POLICY_CHANGE, this.eventEmitter), this.localRoleUpdate = new Y(U.LOCAL_ROLE_UPDATE, this.eventEmitter), this.audioTrackUpdate = new Y(U.AUDIO_TRACK_UPDATE, this.eventEmitter), this.audioTrackAdded = new Y(U.AUDIO_TRACK_ADDED, this.eventEmitter), this.audioTrackRemoved = new Y(U.AUDIO_TRACK_REMOVED, this.eventEmitter), this.autoplayError = new Y(U.AUTOPLAY_ERROR, this.eventEmitter), this.leave = new Y(U.LEAVE, this.eventEmitter), this.error = new Y(U.ERROR, this.eventEmitter);
	}
}, Vd = class {
	constructor(e, t, n) {
		this.store = e, this.listener = t, this.audioListener = n;
	}
	handleActiveSpeakers(e) {
		var t, n, r;
		let i = e["speaker-list"], a = i.map((e) => ({
			audioLevel: e.level,
			peer: this.store.getPeerById(e.peer_id),
			track: this.store.getTrackById(e.track_id)
		}));
		(t = this.audioListener) == null || t.onAudioLevelUpdate(a), this.store.updateSpeakers(a);
		let o = i[0];
		if (o) {
			let e = this.store.getPeerById(o.peer_id);
			(n = this.listener) == null || n.onPeerUpdate(4, e);
		} else (r = this.listener) == null || r.onPeerUpdate(5, null);
	}
}, Hd = class {
	constructor(e) {
		this.listener = e, this.TAG = "[BroadcastManager]";
	}
	handleNotification(e, t) {
		e === "on-broadcast" && this.handleBroadcast(t);
	}
	handleBroadcast(e) {
		var t;
		L.d(this.TAG, `Received Message from sender=${e?.peer?.peer_id}: ${e}`), (t = this.listener) == null || t.onMessageReceived(e);
	}
}, Ud = class {
	constructor(e, t) {
		this.store = e, this.listener = t;
	}
	handleQualityUpdate(e) {
		var t;
		let n = e.peers.map((e) => {
			let t = this.store.getPeerById(e.peer_id);
			return t && t.updateNetworkQuality(e.downlink_score), {
				peerID: e.peer_id,
				downlinkQuality: e.downlink_score
			};
		});
		(t = this.listener) == null || t.onConnectionQualityUpdate(n);
	}
}, Wd = class {
	constructor(e, t, n) {
		this.store = e, this.eventBus = t, this.listener = n, this.TAG = "[TrackManager]", this.tracksToProcess = /* @__PURE__ */ new Map(), this.handleTrackAdd = (e) => {
			L.d(this.TAG, "ONTRACKADD", `${e}`), this.tracksToProcess.set(e.trackId, e), this.processPendingTracks();
		}, this.handleTrackRemovedPermanently = (e) => {
			L.d(this.TAG, "ONTRACKREMOVE permanently", e), Object.keys(e.tracks).forEach((e) => {
				var t;
				let n = this.store.getTrackState(e);
				if (!n) return;
				let r = this.store.getTrackById(e);
				if (!r) {
					L.d(this.TAG, "Track not found in store");
					return;
				}
				r.type === "audio" && this.eventBus.audioTrackRemoved.publish(r), this.store.removeTrack(r);
				let i = this.store.getPeerById(n.peerId);
				i && (this.removePeerTracks(i, r), (t = this.listener) == null || t.onTrackUpdate(1, r, i));
			});
		}, this.handleTrackLayerUpdate = (e) => {
			for (let t in e.tracks) {
				let n = e.tracks[t], r = this.store.getTrackById(t);
				!r || !this.store.getPeerByTrackId(t) || r instanceof ss && this.setLayer(r, n);
			}
		}, this.handleTrackUpdate = (e, t = !0) => {
			var n;
			let r = this.store.getPeerById(e.peer.peer_id), i = e.peer;
			if (!r && !i) {
				L.d(this.TAG, "Track Update ignored - Peer not added to store");
				return;
			}
			r || (r = zs(i, this.store), this.store.addPeer(r));
			for (let i in e.tracks) {
				let a = Object.assign({}, this.store.getTrackState(i)?.trackInfo), o = e.tracks[i], s = this.store.getTrackById(i);
				if (this.store.setTrackState({
					peerId: e.peer.peer_id,
					trackInfo: P(P({}, a), o)
				}), !s || this.tracksToProcess.has(i)) this.processTrackInfo(o, e.peer.peer_id, t), this.processPendingTracks();
				else {
					s.setEnabled(!o.mute);
					let e = this.processTrackUpdate(s, a, o);
					e && ((n = this.listener) == null || n.onTrackUpdate(e, s, r));
				}
			}
		}, this.processTrackInfo = (e, t, n) => {}, this.processPendingTracks = () => {
			new Map(this.tracksToProcess).forEach((e) => {
				var t;
				let n = this.store.getTrackState(e.trackId);
				if (!n) {
					L.d(this.TAG, "TrackState not added to store", `peerId - ${e.peerId}`, `trackId -${e.trackId}`);
					return;
				}
				let r = this.store.getPeerById(n.peerId);
				if (!r) {
					L.d(this.TAG, "Peer not added to store, peerId", n.peerId);
					return;
				}
				e.source = n.trackInfo.source, e.peerId = r.peerId, e.logIdentifier = r.name, e.setEnabled(!n.trackInfo.mute), this.addAudioTrack(r, e), this.addVideoTrack(r, e), e.type === "audio" ? this.eventBus.audioTrackAdded.publish({
					track: e,
					peer: r
				}) : (t = this.listener) == null || t.onTrackUpdate(0, e, r), this.tracksToProcess.delete(e.trackId);
			});
		};
	}
	handleTrackMetadataAdd(e) {
		L.d(this.TAG, "TRACK_METADATA_ADD", JSON.stringify(e, null, 2));
		for (let t in e.tracks) {
			let n = e.tracks[t];
			this.store.setTrackState({
				peerId: e.peer.peer_id,
				trackInfo: n
			});
		}
		this.processPendingTracks();
	}
	handleTrackRemove(e, t = !0) {
		var n;
		L.d(this.TAG, "ONTRACKREMOVE", `${e}`);
		let r = this.store.getTrackState(e.trackId);
		if (r) {
			if (!this.store.hasTrack(e)) {
				L.d(this.TAG, "Track not found in store");
				return;
			}
			if (t) {
				this.store.removeTrack(e);
				let t = this.store.getPeerById(r.peerId);
				if (!t) return;
				this.removePeerTracks(t, e), (n = this.listener) == null || n.onTrackUpdate(1, e, t), e.type === "audio" && this.eventBus.audioTrackRemoved.publish(e);
			}
		}
	}
	setLayer(e, t) {
		var n, r;
		let i = this.store.getPeerByTrackId(e.trackId);
		i && (e.setLayerFromServer(t) ? (n = this.listener) == null || n.onTrackUpdate(5, e, i) : (r = this.listener) == null || r.onTrackUpdate(6, e, i));
	}
	removePeerTracks(e, t) {
		let n = e.auxiliaryTracks.indexOf(t);
		n > -1 ? (e.auxiliaryTracks.splice(n, 1), L.d(this.TAG, "auxiliary track removed", `${t}`)) : t.type === "audio" && e.audioTrack === t ? (e.audioTrack = void 0, L.d(this.TAG, "audio track removed", `${t}`)) : t.type === "video" && e.videoTrack === t && (e.videoTrack = void 0, L.d(this.TAG, "video track removed", `${t}`));
	}
	addAudioTrack(e, t) {
		t.type === "audio" && (t.source === "regular" && (!e.audioTrack || e.audioTrack?.trackId === t.trackId) ? e.audioTrack = t : e.auxiliaryTracks.push(t), this.store.addTrack(t), L.d(this.TAG, "audio track added", `${t}`));
	}
	addVideoTrack(e, t) {
		if (t.type !== "video") return;
		let n = t, r = this.store.getSimulcastDefinitionsForPeer(e, n.source);
		if (n.setSimulcastDefinitons(r), this.addAsPrimaryVideoTrack(e, n)) e.videoTrack ? e.videoTrack.replaceTrack(n) : e.videoTrack = n, this.store.addTrack(e.videoTrack);
		else {
			let t = e.auxiliaryTracks.findIndex((e) => e.trackId === n.trackId);
			t === -1 ? (e.auxiliaryTracks.push(n), this.store.addTrack(n)) : (e.auxiliaryTracks[t].replaceTrack(n), this.store.addTrack(e.auxiliaryTracks[t]));
		}
		L.d(this.TAG, "video track added", `${t}`);
	}
	addAsPrimaryVideoTrack(e, t) {
		return t.source === "regular" && (!e.videoTrack || e.videoTrack?.trackId === t.trackId);
	}
	processTrackUpdate(e, t, n) {
		let r;
		return t.mute === n.mute ? t.description !== n.description && (r = 4) : (r = n.mute ? 2 : 3, e.type === "audio" && this.eventBus.audioTrackUpdate.publish({
			track: e,
			enabled: !n.mute
		})), r;
	}
}, Gd = class extends Wd {
	constructor(e, t, n, r) {
		super(e, t, r), this.transport = n, this.TAG = "[OnDemandTrackManager]", this.processTrackInfo = (e, t, n = !0) => {
			var r;
			if (e.type !== "video") return;
			let i = this.store.getPeerById(t);
			if (!i || !this.isPeerRoleSubscribed(t)) {
				L.d(this.TAG, `no peer in store for peerId: ${t}`);
				return;
			}
			let a = new us(new MediaStream(), this.transport.getSubscribeConnection()), o = po.getEmptyVideoTrack();
			o.enabled = !e.mute;
			let s = new ss(a, o, e.source, this.store.getRoom()?.disableNoneLayerRequest);
			s.setTrackId(e.track_id), s.peerId = i.peerId, s.logIdentifier = i.name, this.addVideoTrack(i, s), n && ((r = this.listener) == null || r.onTrackUpdate(0, i.videoTrack, i));
		};
	}
	handleTrackMetadataAdd(e) {
		super.handleTrackMetadataAdd(e);
		for (let t in e.tracks) e.tracks[t].type === "video" && this.processTrackInfo(e.tracks[t], e.peer.peer_id);
	}
	handleTrackRemove(e) {
		let t = e.type === "video" && e.source === "regular";
		super.handleTrackRemove(e, !t), t && this.processTrackInfo({
			track_id: e.trackId,
			mute: !e.enabled,
			type: e.type,
			source: e.source,
			stream_id: e.stream.id
		}, e.peerId, !1);
	}
	addAsPrimaryVideoTrack(e, t) {
		return t.source === "regular" ? !e.videoTrack || e.videoTrack.trackId === t.trackId ? !0 : e.videoTrack.enabled && go(e.videoTrack.nativeTrack) : !1;
	}
	isPeerRoleSubscribed(e) {
		if (!e) return !0;
		let t = this.store.getLocalPeer(), n = this.store.getPeerById(e);
		return n && (t?.role?.subscribeParams?.subscribeToRoles)?.includes(n.role?.name);
	}
}, Kd = class {
	constructor(e, t, n, r) {
		this.store = e, this.peerManager = t, this.trackManager = n, this.listener = r, this.TAG = "[PeerListManager]", this.handleInitialPeerList = (e) => {
			let t = Object.values(e.peers);
			this.peerManager.handlePeerList(t);
		}, this.handleReconnectPeerList = (e) => {
			this.handleRepeatedPeerList(e.peers);
		}, this.handlePreviewRoomState = (e) => {
			if (!this.store.hasRoleDetailsArrived()) return;
			let t = e.peers;
			if (t == null) {
				e.peer_count === 0 && this.handleRepeatedPeerList({});
				return;
			}
			Object.keys(t).forEach((e) => {
				t[e].tracks = {}, t[e].is_from_room_state = !0;
			}), this.handleRepeatedPeerList(t);
		}, this.handleRepeatedPeerList = (e) => {
			let t = this.store.getRemotePeers(), n = Object.values(e), r = t.filter((t) => !e[t.peerId]);
			r.length > 0 && L.d(this.TAG, `${r}`), r.forEach((e) => {
				let t = {
					peer_id: e.peerId,
					role: e.role?.name || "",
					info: {
						name: e.name,
						data: e.metadata || "",
						user_id: e.customerUserId || "",
						type: e.type
					},
					tracks: {},
					groups: [],
					realtime: e.realtime
				};
				this.peerManager.handlePeerLeave(t);
			});
			let i = [];
			n.forEach((e) => {
				let t = this.store.getPeerById(e.peer_id), n = Object.values(e.tracks);
				t && (this.store.getPeerTracks(t.peerId).forEach((n) => {
					var r;
					e.tracks[n.trackId] || (this.removePeerTrack(t, n.trackId), (r = this.listener) == null || r.onTrackUpdate(1, n, t));
				}), n.forEach((e) => {
					this.store.getTrackById(e.track_id) || this.store.setTrackState({
						peerId: t.peerId,
						trackInfo: e
					});
				}), this.trackManager.handleTrackUpdate({
					peer: e,
					tracks: e.tracks
				}, !1), this.peerManager.handlePeerUpdate(e)), i.push(e);
			}), i.length > 0 && this.peerManager.handlePeerList(i);
		};
	}
	handleNotification(e, t, n) {
		if (e === "peer-list") {
			let e = t;
			n ? (L.d(this.TAG, "RECONNECT_PEER_LIST event", JSON.stringify(e, null, 2)), this.handleReconnectPeerList(e)) : (L.d(this.TAG, "PEER_LIST event", JSON.stringify(e, null, 2)), this.handleInitialPeerList(e));
		} else if (e === "room-state") {
			let e = t;
			this.handlePreviewRoomState(e);
		}
	}
	removePeerTrack(e, t) {
		if (L.d(this.TAG, `removing track - ${t} from ${e}`), e.audioTrack?.trackId === t) e.audioTrack = void 0;
		else if (e.videoTrack?.trackId === t) e.videoTrack = void 0;
		else {
			let n = e.auxiliaryTracks.findIndex((e) => e.trackId === t);
			n >= 0 && e.auxiliaryTracks.splice(n, 1);
		}
	}
}, X = (e) => e ? new Date(e) : void 0, qd = class {
	constructor(e, t, n) {
		this.store = e, this.trackManager = t, this.listener = n, this.TAG = "[PeerManager]", this.handlePeerList = (e) => {
			var t, n;
			if (e.length === 0) {
				(t = this.listener) == null || t.onPeerUpdate(9, []);
				return;
			}
			let r = [], i = new Set(e.map((e) => e.peer_id));
			this.store.getRemotePeers().forEach(({ peerId: e, fromRoomState: t }) => {
				!i.has(e) && t && this.store.removePeer(e);
			});
			for (let t of e) r.push(this.makePeer(t));
			(n = this.listener) == null || n.onPeerUpdate(9, r), this.trackManager.processPendingTracks();
		}, this.handlePeerJoin = (e) => {
			var t;
			let n = this.makePeer(e);
			(t = this.listener) == null || t.onPeerUpdate(0, n), this.trackManager.processPendingTracks();
		}, this.handlePeerLeave = (e) => {
			var t, n, r, i;
			let a = this.store.getPeerById(e.peer_id);
			this.store.removePeer(e.peer_id), L.d(this.TAG, "PEER_LEAVE", e.peer_id, `remainingPeers=${this.store.getPeers().length}`), a && (a.audioTrack && ((t = this.listener) == null || t.onTrackUpdate(1, a.audioTrack, a)), a.videoTrack && ((n = this.listener) == null || n.onTrackUpdate(1, a.videoTrack, a)), (r = a.auxiliaryTracks) == null || r.forEach((e) => {
				var t;
				(t = this.listener) == null || t.onTrackUpdate(1, e, a);
			}), (i = this.listener) == null || i.onPeerUpdate(1, a));
		};
	}
	handleNotification(e, t) {
		switch (e) {
			case "on-peer-join": {
				let e = t;
				this.handlePeerJoin(e);
				break;
			}
			case "on-peer-leave": {
				let e = t;
				this.handlePeerLeave(e);
				break;
			}
			case "on-peer-update":
				this.handlePeerUpdate(t);
				break;
			default: break;
		}
	}
	handlePeerUpdate(e) {
		var t, n, r, i;
		let a = this.store.getPeerById(e.peer_id);
		if (!a && e.realtime) {
			a = this.makePeer(e), (t = this.listener) == null || t.onPeerUpdate(a.isHandRaised ? 12 : 14, a);
			return;
		}
		if (a && !a.isLocal && !e.realtime) {
			this.store.removePeer(a.peerId), (n = this.listener) == null || n.onPeerUpdate(13, a);
			return;
		}
		if (!a) {
			L.d(this.TAG, `peer ${e.peer_id} not found`);
			return;
		}
		if (a.role && a.role.name !== e.role) {
			let t = this.store.getPolicyForRole(e.role);
			a.updateRole(t), this.updateSimulcastLayersForPeer(a), (r = this.listener) == null || r.onPeerUpdate(8, a);
		}
		let o = a.isHandRaised;
		a.updateGroups(e.groups), o !== e.groups?.includes(ns) && ((i = this.listener) == null || i.onPeerUpdate(12, a)), this.handlePeerInfoUpdate(P({ peer: a }, e.info));
	}
	handlePeerInfoUpdate({ peer: e, name: t, data: n }) {
		var r, i;
		e && (t && e.name !== t && (e.updateName(t), (r = this.listener) == null || r.onPeerUpdate(10, e)), n && e.metadata !== n && (e.updateMetadata(n), (i = this.listener) == null || i.onPeerUpdate(11, e)));
	}
	makePeer(e) {
		let t = this.store.getPeerById(e.peer_id);
		t || (t = zs(e, this.store), t.realtime = e.realtime, t.joinedAt = X(e.joined_at), t.fromRoomState = !!e.is_from_room_state, this.store.addPeer(t), L.d(this.TAG, "adding to the peerList", `${t}`));
		for (let t in e.tracks) {
			let n = e.tracks[t];
			this.store.setTrackState({
				peerId: e.peer_id,
				trackInfo: n
			}), n.type === "video" && this.trackManager.processTrackInfo(n, e.peer_id, !1);
		}
		return t;
	}
	updateSimulcastLayersForPeer(e) {
		this.store.getPeerTracks(e.peerId).forEach((t) => {
			if (t.type === "video" && ["regular", "screen"].includes(t.source)) {
				let n = t, r = this.store.getSimulcastDefinitionsForPeer(e, n.source);
				n.setSimulcastDefinitons(r);
			}
		});
	}
}, Jd = class {
	constructor(e, t) {
		this.store = e, this.eventBus = t;
	}
	handlePolicyChange(e) {
		let t = this.store.getLocalPeer();
		if (t && !t.role) {
			let n = e.known_roles[e.name];
			t.updateRole(n);
		}
		this.store.setKnownRoles(e);
		let n = this.store.getRoom();
		n ? n.templateId = e.template_id : L.w("[PolicyChangeManager]", "on policy change - room not present"), this.updateLocalPeerRole(e), this.eventBus.policyChange.publish(e);
	}
	updateLocalPeerRole(e) {
		let t = this.store.getLocalPeer();
		if (t != null && t.role && t.role.name !== e.name) {
			let n = this.store.getPolicyForRole(e.name), r = t.role;
			t.updateRole(n), n.name === t.asRole?.name && delete t.asRole, this.eventBus.localRoleUpdate.publish({
				oldRole: r,
				newRole: n
			});
		}
	}
}, Yd = ((e) => (e.FLAG_SERVER_SUB_DEGRADATION = "subscribeDegradation", e.FLAG_SERVER_SIMULCAST = "simulcast", e.FLAG_NON_WEBRTC_DISABLE_OFFER = "nonWebRTCDisableOffer", e.FLAG_PUBLISH_STATS = "publishStats", e.FLAG_SUBSCRIBE_STATS = "subscribeStats", e.FLAG_ON_DEMAND_TRACKS = "onDemandTracks", e.FLAG_DISABLE_VIDEO_TRACK_AUTO_UNSUBSCRIBE = "disableVideoTrackAutoUnsubscribe", e.FLAG_WHITEBOARD_ENABLED = "whiteboardEnabled", e.FLAG_EFFECTS_SDK_ENABLED = "effectsSDKEnabled", e.FLAG_VB_ENABLED = "vb", e.FLAG_HIPAA_ENABLED = "hipaa", e.FLAG_NOISE_CANCELLATION = "noiseCancellation", e.FLAG_SCALE_SCREENSHARE_BASED_ON_PIXELS = "scaleScreenshareBasedOnPixels", e.FLAG_DISABLE_NONE_LAYER_REQUEST = "disableNoneLayerRequest", e))(Yd || {}), Xd = (e, t, n) => {
	let r = new URL(n === "qa" ? os : as);
	return r.searchParams.set("endpoint", `https://${t}`), r.searchParams.set("token", e), r.toString();
}, Zd = class {
	constructor(e, t, n) {
		this.transport = e, this.store = t, this.listener = n, this.TAG = "[HMSWhiteboardInteractivityCenter]";
	}
	get isEnabled() {
		return this.transport.isFlagEnabled("whiteboardEnabled");
	}
	open(e) {
		return I(this, null, function* () {
			var t;
			if (!this.isEnabled) return L.w(this.TAG, "Whiteboard is not enabled for customer");
			let n = this.store.getWhiteboard(e?.id), r = n?.id;
			if (n || (r = (yield this.transport.signal.createWhiteboard(this.getCreateOptionsWithDefaults(e))).id), !r) throw Error(`Whiteboard ID: ${r} not found`);
			let i = yield this.transport.signal.getWhiteboard({ id: r }), a = F(P({}, n), {
				title: e?.title,
				attributes: e?.attributes,
				id: i.id,
				url: Xd(i.token, i.addr, this.store.getEnv()),
				token: i.token,
				addr: i.addr,
				owner: i.owner,
				permissions: i.permissions || [],
				open: !0
			});
			this.store.setWhiteboard(a), (t = this.listener) == null || t.onWhiteboardUpdate(a);
		});
	}
	close(e) {
		return I(this, null, function* () {
			var t;
			if (!this.isEnabled) return L.w(this.TAG, "Whiteboard is not enabled for customer");
			let n = this.store.getWhiteboard(e);
			if (!n) throw Error(`Whiteboard ID: ${e} not found`);
			let r = {
				id: n.id,
				title: n.title,
				open: !1
			};
			this.store.setWhiteboard(r), (t = this.listener) == null || t.onWhiteboardUpdate(r);
		});
	}
	setListener(e) {
		this.listener = e;
	}
	handleLocalRoleUpdate() {
		return I(this, null, function* () {
			var e;
			let t = this.store.getWhiteboards();
			for (let n of t.values()) if (n.url) {
				let t = yield this.transport.signal.getWhiteboard({ id: n.id }), r = this.store.getLocalPeer(), i = r?.customerUserId === t.owner ? (r.role?.permissions.whiteboard)?.includes("admin") : t.permissions.length > 0, a = F(P({}, n), {
					id: t.id,
					url: Xd(t.token, t.addr, this.store.getEnv()),
					token: t.token,
					addr: t.addr,
					owner: t.owner,
					permissions: t.permissions,
					open: i
				});
				this.store.setWhiteboard(a), (e = this.listener) == null || e.onWhiteboardUpdate(a);
			}
		});
	}
	getCreateOptionsWithDefaults(e) {
		let t = Object.values(this.store.getKnownRoles()), n = [], r = [], i = [];
		return t.forEach((e) => {
			var t, a, o;
			(t = e.permissions.whiteboard) != null && t.includes("read") && n.push(e.name), (a = e.permissions.whiteboard) != null && a.includes("write") && r.push(e.name), (o = e.permissions.whiteboard) != null && o.includes("admin") && i.push(e.name);
		}), {
			title: e?.title || `${this.store.getRoom()?.id} Whiteboard`,
			reader: e?.reader || n,
			writer: e?.writer || r,
			admin: e?.admin || i
		};
	}
}, Qd = class {
	constructor(e, t, n) {
		this.transport = e, this.store = t, this.listener = n, this.whiteboard = new Zd(e, t, n);
	}
	setListener(e) {
		this.listener = e, this.whiteboard.setListener(e);
	}
	createPoll(e) {
		return I(this, null, function* () {
			var t;
			let { poll_id: n } = yield this.transport.signal.setPollInfo(F(P({}, e), {
				mode: e.mode ? {
					customerID: "userid",
					peerID: "peerid",
					userName: "username"
				}[e.mode] : void 0,
				poll_id: e.id,
				vote: e.rolesThatCanVote,
				responses: e.rolesThatCanViewResponses
			}));
			e.id ||= n, Array.isArray(e.questions) && (yield this.addQuestionsToPoll(e.id, e.questions));
			let r = yield this.transport.signal.getPollQuestions({
				poll_id: e.id,
				index: 0,
				count: 50
			}), i = $d(F(P({}, e), {
				poll_id: e.id,
				state: "created",
				created_by: this.store.getLocalPeer()?.peerId
			}));
			i.questions = r.questions.map(({ question: e, options: t, answer: n }) => F(P({}, e), {
				options: t,
				answer: n
			})), (t = this.listener) == null || t.onPollsUpdate(0, [i]);
		});
	}
	startPoll(e) {
		return I(this, null, function* () {
			typeof e == "string" ? yield this.transport.signal.startPoll({ poll_id: e }) : (yield this.createPoll(e), yield this.transport.signal.startPoll({ poll_id: e.id }));
		});
	}
	addQuestionsToPoll(e, t) {
		return I(this, null, function* () {
			t.length > 0 && (yield this.transport.signal.setPollQuestions({
				poll_id: e,
				questions: t.map((e, t) => this.createQuestionSetParams(e, t))
			}));
		});
	}
	stopPoll(e) {
		return I(this, null, function* () {
			yield this.transport.signal.stopPoll({ poll_id: e });
		});
	}
	addResponsesToPoll(e, t) {
		return I(this, null, function* () {
			let n = this.store.getPoll(e);
			if (!n) throw Error("Invalid poll ID - Poll not found");
			let r = t.map((e) => {
				var t;
				let r = this.getQuestionInPoll(n, e.questionIndex);
				return r.type === "single-choice" ? (e.option = e.option || e.options?.[0] || -1, delete e.text, delete e.options) : r.type === "multiple-choice" ? ((t = e.options) == null || t.sort(), delete e.text, delete e.option) : (delete e.option, delete e.options), e.skipped && (delete e.option, delete e.options, delete e.text), P({
					duration: 0,
					type: r.type,
					question: e.questionIndex
				}, e);
			});
			yield this.transport.signal.setPollResponses({
				poll_id: e,
				responses: r
			});
		});
	}
	fetchLeaderboard(e, t, n) {
		return I(this, null, function* () {
			let r = this.store.getPoll(e);
			if (!r) throw Error("Invalid poll ID - Poll not found");
			let i = this.store.getLocalPeer()?.role?.permissions, a = !!(i != null && i.pollRead || i != null && i.pollWrite);
			if (r.anonymous || r.state !== "stopped" || !a) return {
				entries: [],
				hasNext: !1
			};
			let o = yield this.transport.signal.fetchPollLeaderboard({
				poll_id: r.id,
				count: n,
				offset: t
			}), s = {
				avgScore: o.avg_score,
				avgTime: o.avg_time,
				votedUsers: o.voted_users,
				totalUsers: o.total_users,
				correctUsers: o.correct_users
			};
			return {
				entries: o.questions.map((e) => ({
					position: e.position,
					totalResponses: e.total_responses,
					correctResponses: e.correct_responses,
					duration: e.duration,
					peer: e.peer,
					score: e.score
				})),
				hasNext: !o.last,
				summary: s
			};
		});
	}
	getPollResponses(e, t) {
		return I(this, null, function* () {
			var n, r;
			let i = yield this.transport.signal.getPollResponses({
				poll_id: e.id,
				index: 0,
				count: 50,
				self: t
			}), a = JSON.parse(JSON.stringify(e));
			(n = i.responses) == null || n.forEach(({ response: n, peer: r, final: i }) => {
				var o;
				let s = (e?.questions)?.find((e) => e.index === n.question);
				if (s) {
					let e = {
						id: n.response_id,
						questionIndex: n.question,
						option: n.option,
						options: n.options,
						text: n.text,
						responseFinal: i,
						peer: {
							peerid: r.peerid,
							userHash: r.hash,
							userid: r.userid,
							username: r.username
						},
						skipped: n.skipped,
						type: n.type,
						update: n.update
					}, c = s.responses && !t ? [...s.responses] : [];
					(o = a.questions) != null && o[n.question - 1] && (a.questions[n.question - 1].responses = [...c, e]);
				}
			}), this.store.setPoll(a), (r = this.listener) == null || r.onPollsUpdate(4, [a]);
		});
	}
	getPolls() {
		return I(this, null, function* () {
			var e;
			let t = yield this.transport.signal.getPollsList({
				count: 50,
				state: "started"
			}), n = [], r = (this.store.getLocalPeer()?.role)?.permissions.pollWrite, i = [...t.polls];
			if (r) {
				let e = yield this.transport.signal.getPollsList({
					count: 50,
					state: "created"
				}), t = yield this.transport.signal.getPollsList({
					count: 50,
					state: "stopped"
				});
				i = [
					...e.polls,
					...i,
					...t.polls
				];
			}
			for (let e of i) {
				let t = yield this.transport.signal.getPollQuestions({
					poll_id: e.poll_id,
					index: 0,
					count: 50
				}), r = $d(e), i = this.store.getPoll(e.poll_id);
				r.questions = t.questions.map(({ question: e, options: t, answer: n }, r) => F(P({}, e), {
					options: t,
					answer: n,
					responses: i?.questions?.[r]?.responses
				})), n.push(r), this.store.setPoll(r);
			}
			return (e = this.listener) == null || e.onPollsUpdate(3, n), n;
		});
	}
	createQuestionSetParams(e, t) {
		if (e.index) {
			let n = e.options?.map((e, t) => F(P({}, e), { index: t + 1 }));
			return {
				question: F(P({}, e), { index: t + 1 }),
				options: n,
				answer: e.answer
			};
		}
		let n = F(P({}, e), { index: t + 1 }), r, i = e.answer || { hidden: !1 };
		return Array.isArray(e.options) && ["single-choice", "multiple-choice"].includes(e.type) ? (r = e.options?.map((e, t) => ({
			index: t + 1,
			text: e.text,
			weight: e.weight
		})), e.type === "single-choice" ? i.option = e.options.findIndex((e) => e.isCorrectAnswer) + 1 || void 0 : i.options = e.options.map((e, t) => e.isCorrectAnswer ? t + 1 : void 0).filter((e) => !!e)) : (i == null || delete i.options, i == null || delete i.option), {
			question: n,
			options: r,
			answer: i
		};
	}
	getQuestionInPoll(e, t) {
		let n = (e?.questions)?.find((e) => e.index === t);
		if (!n) throw Error("Invalid question index - Question not found in poll");
		return n;
	}
}, $d = (e) => ({
	id: e.poll_id,
	title: e.title,
	startedBy: e.started_by,
	createdBy: e.created_by,
	anonymous: e.anonymous,
	type: e.type,
	duration: e.duration,
	locked: e.locked,
	mode: e.mode ? {
		userid: "customerID",
		peerid: "peerID",
		username: "userName"
	}[e.mode] : void 0,
	visibility: e.visibility,
	rolesThatCanVote: e.vote || [],
	rolesThatCanViewResponses: e.responses || [],
	state: e.state,
	stoppedBy: e.stopped_by,
	startedAt: X(e.started_at),
	stoppedAt: X(e.stopped_at),
	createdAt: X(e.created_at)
}), ef = class {
	constructor(e, t, n) {
		this.store = e, this.transport = t, this.listener = n;
	}
	handleNotification(e, t) {
		switch (e) {
			case "on-poll-start":
				this.handlePollStart(t);
				break;
			case "on-poll-stop":
				this.handlePollStop(t);
				break;
			case "on-poll-stats":
				this.handlePollStats(t);
				break;
			default: break;
		}
	}
	handlePollStart(e) {
		return I(this, null, function* () {
			var t, n;
			let r = [];
			for (let n of e.polls) {
				let e = this.store.getPoll(n.poll_id);
				if (e && e.state === "started") {
					(t = this.listener) == null || t.onPollsUpdate(1, [e]);
					return;
				}
				let i = yield this.transport.signal.getPollQuestions({
					poll_id: n.poll_id,
					index: 0,
					count: 50
				}), a = $d(n);
				a.questions = i.questions.map(({ question: e, options: t, answer: n }) => F(P({}, e), {
					options: t,
					answer: n
				})), yield this.updatePollResponses(a, !0), r.push(a), this.store.setPoll(a);
			}
			(n = this.listener) == null || n.onPollsUpdate(1, r);
		});
	}
	handlePollStop(e) {
		return I(this, null, function* () {
			var t;
			let n = [];
			for (let t of e.polls) {
				let e = this.store.getPoll(t.poll_id);
				if (e) {
					e.state = "stopped", e.stoppedAt = X(t.stopped_at), e.stoppedBy = t.stopped_by;
					let r = yield this.transport.signal.getPollResult({ poll_id: t.poll_id });
					this.updatePollResult(e, r), n.push(e);
				}
			}
			n.length > 0 && ((t = this.listener) == null || t.onPollsUpdate(2, n));
		});
	}
	handlePollStats(e) {
		return I(this, null, function* () {
			var t;
			let n = [];
			for (let t of e.polls) {
				let e = this.store.getPoll(t.poll_id);
				if (!e) return;
				this.updatePollResult(e, t), n.push(e);
			}
			n.length > 0 && ((t = this.listener) == null || t.onPollsUpdate(4, n));
		});
	}
	updatePollResult(e, t) {
		var n;
		e.result = P({}, e.result), e.result.totalUsers = t.user_count, e.result.maxUsers = t.max_user, e.result.totalResponses = t.total_response, (n = t.questions) == null || n.forEach((t) => {
			var n;
			let r = e.questions?.find((e) => e.index === t.question);
			r && (r.result = P({}, r.result), r.result.correctResponses = t.correct, r.result.skippedCount = t.skipped, r.result.totalResponses = t.total, (n = t.options) == null || n.forEach((e, t) => {
				let n = r.options?.[t];
				n && n.voteCount !== e && (n.voteCount = e);
			}));
		});
	}
	updatePollResponses(e, t) {
		return I(this, null, function* () {
			var n;
			(n = (yield this.transport.signal.getPollResponses({
				poll_id: e.id,
				index: 0,
				count: 50,
				self: t
			})).responses) == null || n.forEach(({ response: t, peer: n, final: r }) => {
				let i = (e?.questions)?.find((e) => e.index === t.question);
				if (!i) return;
				let a = {
					id: t.response_id,
					questionIndex: t.question,
					option: t.option,
					options: t.options,
					text: t.text,
					responseFinal: r,
					peer: {
						peerid: n.peerid,
						userHash: n.hash,
						userid: n.userid,
						username: n.username
					},
					skipped: t.skipped,
					type: t.type,
					update: t.update
				};
				Array.isArray(i.responses) && i.responses.length > 0 ? i.responses.find(({ id: e }) => e === a.id) || i.responses.push(a) : i.responses = [a];
			});
		});
	}
}, tf = class {
	constructor(e, t) {
		this.store = e, this.listener = t;
	}
	handleNotification(e, t) {
		switch (e) {
			case "on-role-change-request":
				this.handleRoleChangeRequest(t);
				break;
			case "on-track-update-request":
				this.handleTrackUpdateRequest(t);
				break;
			case "on-change-track-mute-state-request":
				this.handleChangeTrackStateRequest(t);
				break;
			default: return;
		}
	}
	handleRoleChangeRequest(e) {
		var t;
		let n = {
			requestedBy: e.requested_by ? this.store.getPeerById(e.requested_by) : void 0,
			role: this.store.getPolicyForRole(e.role),
			token: e.token
		};
		(t = this.listener) == null || t.onRoleChangeRequest(n);
	}
	handleTrackUpdateRequest(e) {
		let { requested_by: t, track_id: n, mute: r } = e, i = t ? this.store.getPeerById(t) : void 0, a = this.store.getLocalPeerTracks().find((e) => e.publishedTrackId === n);
		if (!a) return;
		let o = () => {
			var e;
			(e = this.listener) == null || e.onChangeTrackStateRequest({
				requestedBy: i,
				track: a,
				enabled: !r
			});
		};
		if (r) {
			if (a.enabled === !r) return;
			a.setEnabled(!r).then(o);
		} else o();
	}
	handleChangeTrackStateRequest(e) {
		var t;
		let { type: n, source: r, value: i, requested_by: a } = e, o = a ? this.store.getPeerById(a) : void 0, s = !i, c = this.getTracksToBeUpdated({
			type: n,
			source: r,
			enabled: s
		});
		if (c.length !== 0) if (s) (t = this.listener) == null || t.onChangeMultiTrackStateRequest({
			requestedBy: o,
			tracks: c,
			type: n,
			source: r,
			enabled: !0
		});
		else {
			let e = [];
			for (let t of c) e.push(t.setEnabled(!1));
			Promise.all(e).then(() => {
				var e;
				(e = this.listener) == null || e.onChangeMultiTrackStateRequest({
					requestedBy: o,
					tracks: c,
					enabled: !1
				});
			});
		}
	}
	getTracksToBeUpdated({ type: e, source: t, enabled: n }) {
		let r = this.store.getLocalPeerTracks();
		return e && (r = r.filter((t) => t.type === e)), t && (r = r.filter((e) => e.source === t)), r.filter((e) => e.enabled !== n);
	}
}, nf = class {
	constructor(e, t) {
		this.store = e, this.listener = t, this.TAG = "[RoomUpdateManager]";
	}
	handleNotification(e, t) {
		switch (e) {
			case "peer-list":
				this.onRoomState(t.room);
				break;
			case "on-rtmp-update":
				this.updateRTMPStatus(t);
				break;
			case "on-record-update":
				this.updateRecordingStatus(t);
				break;
			case "room-state":
				this.handlePreviewRoomState(t);
				break;
			case "room-info":
				this.handleRoomInfo(t);
				break;
			case "session-info":
				this.handleSessionInfo(t);
				break;
			case "on-hls-update":
				this.updateHLSStatus(t);
				break;
			case "on-transcription-update":
				this.handleTranscriptionStatus([t]);
				break;
			default: break;
		}
	}
	handleRoomInfo(e) {
		let t = this.store.getRoom();
		if (!t) {
			L.w(this.TAG, "on session info - room not present");
			return;
		}
		t.description = e.description, t.large_room_optimization = e.large_room_optimization, t.max_size = e.max_size, t.name = e.name;
	}
	handleSessionInfo(e) {
		var t;
		let n = this.store.getRoom();
		if (!n) {
			L.w(this.TAG, "on session info - room not present");
			return;
		}
		n.sessionId = e.session_id, n.peerCount !== e.peer_count && (n.peerCount = e.peer_count, (t = this.listener) == null || t.onRoomUpdate("ROOM_PEER_COUNT_UPDATED", n));
	}
	handlePreviewRoomState(e) {
		let { room: t } = e;
		this.onRoomState(t);
	}
	onRoomState(e) {
		var t;
		let { recording: n, streaming: r, transcriptions: i, session_id: a, started_at: o, name: s } = e, c = this.store.getRoom();
		if (!c) {
			L.w(this.TAG, "on room state - room not present");
			return;
		}
		c.name = s, c.rtmp.running = this.isStreamingRunning(r?.rtmp?.state), c.rtmp.startedAt = X(r?.rtmp?.started_at), c.rtmp.state = r?.rtmp?.state, c.recording.server = this.getPeerListSFURecording(n), c.recording.browser = this.getPeerListBrowserRecording(n), c.recording.hls = this.getPeerListHLSRecording(n), c.hls = this.convertHls(r?.hls), c.transcriptions = this.addTranscriptionDetail(i), c.sessionId = a, c.startedAt = X(o), (t = this.listener) == null || t.onRoomUpdate("RECORDING_STATE_UPDATED", c);
	}
	addTranscriptionDetail(e) {
		return e ? e.map((e) => ({
			state: e.state,
			mode: e.mode,
			initialised_at: X(e.initialised_at),
			started_at: X(e.started_at),
			stopped_at: X(e.stopped_at),
			updated_at: X(e.updated_at),
			error: this.toSdkError(e?.error),
			translation: e.translation
		})) : [];
	}
	isRecordingRunning(e) {
		return e ? ![
			"none",
			"paused",
			"stopped",
			"failed"
		].includes(e) : !1;
	}
	isStreamingRunning(e) {
		return e ? ![
			"none",
			"stopped",
			"failed"
		].includes(e) : !1;
	}
	initHLS(e) {
		let t = this.store.getRoom(), n = {
			running: !0,
			variants: []
		};
		return t ? (e != null && e.variants && e.variants.forEach((t, r) => {
			t.state === "initialised" ? n.variants.push({
				initialisedAt: X((e?.variants)?.[r].initialised_at),
				url: ""
			}) : n.variants.push({
				meetingURL: t?.meetingURL,
				url: t?.url,
				metadata: t?.metadata,
				playlist_type: t?.playlist_type,
				startedAt: X((e?.variants)?.[r].started_at),
				initialisedAt: X((e?.variants)?.[r].initialised_at),
				state: t.state,
				stream_type: t?.stream_type
			});
		}), n) : (L.w(this.TAG, "on hls - room not present"), n);
	}
	updateHLSStatus(e) {
		var t;
		let n = this.store.getRoom(), r = e.variants && e.variants.length > 0 ? e.variants.some((e) => this.isStreamingRunning(e.state)) : !1;
		if (!n) {
			L.w(this.TAG, "on hls - room not present");
			return;
		}
		e.enabled = r, n.hls = this.convertHls(e), (t = this.listener) == null || t.onRoomUpdate("HLS_STREAMING_STATE_UPDATED", n);
	}
	handleTranscriptionStatus(e) {
		var t;
		let n = this.store.getRoom();
		if (!n) {
			L.w(this.TAG, "on transcription - room not present");
			return;
		}
		n.transcriptions = this.addTranscriptionDetail(e) || [], (t = this.listener) == null || t.onRoomUpdate("TRANSCRIPTION_STATE_UPDATED", n);
	}
	convertHls(e) {
		var t;
		if (e != null && e.variants && e.variants.length > 0 && e.variants.some((e) => e.state === "initialised")) return this.initHLS(e);
		let n = {
			running: !!(e != null && e.enabled),
			variants: [],
			error: this.toSdkError(e?.error)
		};
		return (t = e?.variants) == null || t.forEach((e) => {
			n.variants.push({
				meetingURL: e?.meeting_url,
				url: e?.url,
				metadata: e?.metadata,
				playlist_type: e?.playlist_type,
				startedAt: X(e?.started_at),
				initialisedAt: X(e?.initialised_at),
				state: e.state,
				stream_type: e?.stream_type
			});
		}), n;
	}
	getHLSRecording(e) {
		var t, n;
		let r = { running: !1 }, i = this.isRecordingRunning(e?.state);
		return (i || e?.state === "paused") && (r = {
			running: i,
			singleFilePerLayer: !!((t = e?.hls_recording) != null && t.single_file_per_layer),
			hlsVod: !!((n = e?.hls_recording) != null && n.hls_vod),
			startedAt: X(e?.started_at),
			initialisedAt: X(e?.initialised_at),
			state: e?.state,
			error: this.toSdkError(e?.error)
		}), r;
	}
	getPeerListHLSRecording(e) {
		let t = e?.hls;
		return {
			running: this.isRecordingRunning(t?.state),
			startedAt: X(t?.started_at),
			initialisedAt: X(t?.initialised_at),
			state: t?.state,
			singleFilePerLayer: t?.config?.single_file_per_layer,
			hlsVod: t?.config?.hls_vod
		};
	}
	getPeerListBrowserRecording(e) {
		let t = e?.browser;
		return {
			running: this.isRecordingRunning(t?.state),
			startedAt: X(t?.started_at),
			state: t?.state
		};
	}
	getPeerListSFURecording(e) {
		let t = e?.sfu;
		return {
			running: this.isRecordingRunning(t?.state),
			startedAt: X(t?.started_at),
			state: t?.state
		};
	}
	updateRecordingStatus(e) {
		var t;
		let n = this.store.getRoom(), r = this.isRecordingRunning(e.state);
		if (!n) {
			L.w(this.TAG, `set recording status running=${r} - room not present`);
			return;
		}
		let i;
		e.type === "sfu" ? (n.recording.server = {
			running: r,
			startedAt: r ? X(e.started_at) : void 0,
			error: this.toSdkError(e.error),
			state: e.state
		}, i = "SERVER_RECORDING_STATE_UPDATED") : e.type === "HLS" ? (n.recording.hls = this.getHLSRecording(e), i = "RECORDING_STATE_UPDATED") : (n.recording.browser = {
			running: r,
			startedAt: r ? X(e.started_at) : void 0,
			error: this.toSdkError(e.error),
			state: e?.state
		}, i = "BROWSER_RECORDING_STATE_UPDATED"), (t = this.listener) == null || t.onRoomUpdate(i, n);
	}
	updateRTMPStatus(e) {
		var t, n;
		let r = this.store.getRoom(), i = this.isStreamingRunning(e.state);
		if (!r) {
			L.w(this.TAG, "on policy change - room not present");
			return;
		}
		if (!i) {
			r.rtmp = {
				running: i,
				state: e.state,
				error: this.toSdkError(e.error)
			}, (t = this.listener) == null || t.onRoomUpdate("RTMP_STREAMING_STATE_UPDATED", r);
			return;
		}
		r.rtmp = {
			running: i,
			startedAt: i ? X(e.started_at) : void 0,
			state: e.state,
			error: this.toSdkError(e.error)
		}, (n = this.listener) == null || n.onRoomUpdate("RTMP_STREAMING_STATE_UPDATED", r);
	}
	toSdkError(e) {
		if (!(e != null && e.code)) return;
		let t = e.message || "error in streaming/recording", n = new z(e.code, "ServerErrors", "NONE", t, t);
		return L.e(this.TAG, "error in streaming/recording", n), n;
	}
}, rf = class {
	constructor(e, t) {
		this.store = e, this.listener = t;
	}
	handleNotification(e, t) {
		e === "on-metadata-change" && this.handleMetadataChange(t);
	}
	handleMetadataChange(e) {
		var t;
		let n = e.values.map((e) => ({
			key: e.key,
			value: e.data,
			updatedAt: X(e.updated_at),
			updatedBy: e.updated_by ? this.store.getPeerById(e.updated_by) : void 0
		}));
		(t = this.listener) == null || t.onSessionStoreUpdate(n);
	}
}, af = class {
	constructor(e, t, n) {
		this.store = e, this.transport = t, this.listener = n;
	}
	handleNotification(e, t) {
		e === "on-whiteboard-update" && this.handleWhiteboardUpdate(t);
	}
	handleWhiteboardUpdate(e) {
		return I(this, null, function* () {
			var t;
			let n = this.store.getLocalPeer(), r = this.store.getWhiteboard(e.id), i = e.owner === n?.peerId || e.owner === n?.customerUserId, a = e.state === "open", o = {
				id: e.id,
				title: e.title,
				attributes: e.attributes
			};
			if (o.open = i ? r?.open : a, o.owner = o.open ? e.owner : void 0, o.open) if (i) o.url = r?.url, o.token = r?.token, o.addr = r?.addr, o.permissions = r?.permissions;
			else {
				let t = yield this.transport.signal.getWhiteboard({ id: e.id });
				o.url = Xd(t.token, t.addr, this.store.getEnv()), o.token = t.token, o.addr = t.addr, o.permissions = t.permissions, o.open = t.permissions.length > 0;
			}
			this.store.setWhiteboard(o), (t = this.listener) == null || t.onWhiteboardUpdate(o);
		});
	}
}, of = class {
	constructor(e, t, n, r, i, a) {
		this.store = e, this.transport = n, this.listener = r, this.audioListener = i, this.connectionQualityListener = a, this.TAG = "[HMSNotificationManager]", this.hasConsistentRoomStateArrived = !1, this.ignoreNotification = (e) => {
			if (e === "peer-list") this.hasConsistentRoomStateArrived = !0;
			else if (e === "room-state") return this.hasConsistentRoomStateArrived;
			return !1;
		}, this.handleTrackAdd = (e) => {
			this.trackManager.handleTrackAdd(e);
		}, this.handleTrackRemove = (e) => {
			this.trackManager.handleTrackRemove(e);
		}, this.updateLocalPeer = ({ name: e, metadata: t }) => {
			let n = this.store.getLocalPeer();
			this.peerManager.handlePeerInfoUpdate({
				peer: n,
				name: e,
				data: t
			});
		};
		let o = this.transport.isFlagEnabled("onDemandTracks");
		this.trackManager = o ? new Gd(this.store, t, this.transport, this.listener) : new Wd(this.store, t, this.listener), this.peerManager = new qd(this.store, this.trackManager, this.listener), this.peerListManager = new Kd(this.store, this.peerManager, this.trackManager, this.listener), this.broadcastManager = new Hd(this.listener), this.policyChangeManager = new Jd(this.store, t), this.requestManager = new tf(this.store, this.listener), this.activeSpeakerManager = new Vd(this.store, this.listener, this.audioListener), this.connectionQualityManager = new Ud(this.store, this.connectionQualityListener), this.roomUpdateManager = new nf(this.store, this.listener), this.sessionMetadataManager = new rf(this.store, this.listener), this.pollsManager = new ef(this.store, this.transport, this.listener), this.whiteboardManager = new af(this.store, this.transport, this.listener);
	}
	setListener(e) {
		this.listener = e, this.trackManager.listener = e, this.peerManager.listener = e, this.peerListManager.listener = e, this.broadcastManager.listener = e, this.requestManager.listener = e, this.activeSpeakerManager.listener = e, this.roomUpdateManager.listener = e, this.sessionMetadataManager.listener = e, this.pollsManager.listener = e, this.whiteboardManager.listener = e;
	}
	setAudioListener(e) {
		this.audioListener = e, this.activeSpeakerManager.audioListener = e;
	}
	setConnectionQualityListener(e) {
		this.connectionQualityListener = e, this.connectionQualityManager.listener = e;
	}
	handleNotification(e, t = !1) {
		var n;
		let r = e.method, i = e.params;
		[
			"active-speakers",
			"sfu-stats",
			"on-connection-quality-update",
			void 0
		].includes(r) || L.d(this.TAG, `Received notification - ${r}`, { notification: i }), r === "sfu-stats" && (n = window.HMS) != null && n.ON_SFU_STATS && typeof window.HMS?.ON_SFU_STATS == "function" && window.HMS.ON_SFU_STATS(e.params), !this.ignoreNotification(r) && (this.roomUpdateManager.handleNotification(r, i), this.peerManager.handleNotification(r, i), this.requestManager.handleNotification(r, i), this.peerListManager.handleNotification(r, i, t), this.broadcastManager.handleNotification(r, i), this.sessionMetadataManager.handleNotification(r, i), this.pollsManager.handleNotification(r, i), this.whiteboardManager.handleNotification(r, i), this.handleIsolatedMethods(r, i));
	}
	handleIsolatedMethods(e, t) {
		switch (e) {
			case "on-track-add":
				this.trackManager.handleTrackMetadataAdd(t);
				break;
			case "on-track-update":
				this.trackManager.handleTrackUpdate(t);
				break;
			case "on-track-remove":
				if (!t.peer) {
					L.d(this.TAG, `Ignoring sfu notification - ${e}`, { notification: t });
					return;
				}
				this.trackManager.handleTrackRemovedPermanently(t);
				break;
			case "on-track-layer-update":
				this.trackManager.handleTrackLayerUpdate(t);
				break;
			case "active-speakers":
				this.activeSpeakerManager.handleActiveSpeakers(t);
				break;
			case "on-connection-quality-update":
				this.connectionQualityManager.handleQualityUpdate(t);
				break;
			case "on-policy-change":
				this.policyChangeManager.handlePolicyChange(t);
				break;
			case "node-info":
				this.transport.setSFUNodeId(t.sfu_node_id);
				break;
			default: break;
		}
	}
}, sf = class {
	constructor(e) {
		this.transport = e, this.observedKeys = /* @__PURE__ */ new Set();
	}
	get(e) {
		return I(this, null, function* () {
			let { data: t, updated_at: n } = yield this.transport.signal.getSessionMetadata(e);
			return {
				value: t,
				updatedAt: X(n)
			};
		});
	}
	set(e, t) {
		return I(this, null, function* () {
			let { data: n, updated_at: r } = yield this.transport.signal.setSessionMetadata({
				key: e,
				data: t
			});
			return {
				value: n,
				updatedAt: X(r)
			};
		});
	}
	observe(e) {
		return I(this, null, function* () {
			let t = new Set(this.observedKeys);
			if (e.forEach((e) => this.observedKeys.add(e)), this.observedKeys.size !== t.size) try {
				yield this.transport.signal.listenMetadataChange(Array.from(this.observedKeys));
			} catch (e) {
				throw this.observedKeys = t, e;
			}
		});
	}
	unobserve(e) {
		return I(this, null, function* () {
			let t = new Set(this.observedKeys);
			if (this.observedKeys = new Set([...this.observedKeys].filter((t) => !e.includes(t))), this.observedKeys.size !== t.size) try {
				yield this.transport.signal.listenMetadataChange(Array.from(this.observedKeys));
			} catch (e) {
				throw this.observedKeys = t, e;
			}
		});
	}
}, cf = class {
	constructor(e, t, n = "", r = "", i = "https://prod-init.100ms.live/init", a = !1, o) {
		this.authToken = e, this.peerId = t, this.peerName = n, this.data = r, this.endpoint = i, this.autoSubscribeVideo = a, this.iceServers = o;
	}
}, lf = ((e) => (e[e.ConnectFailed = 0] = "ConnectFailed", e[e.SignalDisconnect = 1] = "SignalDisconnect", e[e.JoinWSMessageFailed = 2] = "JoinWSMessageFailed", e[e.PublishIceConnectionFailed = 3] = "PublishIceConnectionFailed", e[e.SubscribeIceConnectionFailed = 4] = "SubscribeIceConnectionFailed", e))(lf || {}), uf = {
	0: [],
	1: [],
	2: [1],
	3: [1],
	4: [1]
}, df = ((e) => (e.Disconnected = "Disconnected", e.Connecting = "Connecting", e.Joined = "Joined", e.Preview = "Preview", e.Failed = "Failed", e.Reconnecting = "Reconnecting", e.Leaving = "Leaving", e))(df || {}), ff = class {
	constructor(e) {
		this.promise = new Promise((t, n) => {
			this.resolve = t, this.reject = n, e(t, n);
		});
	}
}, pf = class {
	constructor(e, t) {
		this.onStateChange = e, this.sendEvent = t, this.TAG = "[RetryScheduler]", this.inProgress = /* @__PURE__ */ new Map(), this.retryTaskIds = [];
	}
	schedule(e) {
		return I(this, arguments, function* ({ category: e, error: t, task: n, originalState: r, maxRetryTime: i = 6e4, changeState: a = !0 }) {
			yield this.scheduleTask({
				category: e,
				error: t,
				changeState: a,
				task: n,
				originalState: r,
				maxRetryTime: i,
				failedAt: Date.now()
			});
		});
	}
	reset() {
		this.retryTaskIds.forEach((e) => clearTimeout(e)), this.retryTaskIds = [], this.inProgress.clear();
	}
	isTaskInProgress(e) {
		return !!this.inProgress.get(e);
	}
	scheduleTask(e) {
		return I(this, arguments, function* ({ category: e, error: t, changeState: n, task: r, originalState: i, failedAt: a, maxRetryTime: o = 6e4, failedRetryCount: s = 0 }) {
			if (L.d(this.TAG, "schedule: ", {
				category: lf[e],
				error: t
			}), s === 0) {
				let n = this.inProgress.get(e);
				if (n) {
					L.d(this.TAG, `schedule: Already a task for ${lf[e]} scheduled, waiting for its completion`), yield n.promise;
					return;
				}
				let r = new ff((e, t) => {});
				this.inProgress.set(e, r), this.sendEvent(t, e);
			}
			let c = !1, l = uf[e];
			for (let t in l) {
				let n = l[parseInt(t)];
				try {
					let t = this.inProgress.get(n);
					t && (L.d(this.TAG, `schedule: Suspending retry task of ${lf[e]}, waiting for ${lf[n]} to recover`), yield t.promise, L.d(this.TAG, `schedule: Resuming retry task ${lf[e]} as it's dependency ${lf[n]} is recovered`));
				} catch {
					L.d(this.TAG, `schedule: Stopping retry task of ${lf[e]} as it's dependency ${lf[n]} failed to recover`), c = !0;
					break;
				}
			}
			let u = (t) => {
				if (this.inProgress.delete(e), this.sendEvent(t, e), this.reset(), n) this.onStateChange("Failed", t);
				else throw t;
			}, d = Date.now() - a;
			if (d >= o || c) return t.description += `. [${lf[e]}] Could not recover after ${d} milliseconds`, c && (t.description += ` Could not recover all of it's required dependencies - [${l.map((e) => lf[e]).toString()}]`), t.isTerminal = !0, u(t);
			n && this.onStateChange("Reconnecting", t);
			let f = this.getDelayForRetryCount(e);
			L.d(this.TAG, `schedule: [${lf[e]}] [failedRetryCount=${s}] Scheduling retry task in ${f}ms`);
			let p;
			try {
				p = yield this.setTimeoutPromise(r, f);
			} catch (t) {
				p = !1;
				let n = t;
				if (n.isTerminal) return L.e(this.TAG, `[${lf[e]}] Un-caught terminal exception ${n.name} in retry-task`, t), u(n);
				L.w(this.TAG, `[${lf[e]}] Un-caught exception ${n.name} in retry-task, initiating retry`, t);
			}
			if (p) {
				let t = this.inProgress.get(e);
				this.inProgress.delete(e), t?.resolve(s), n && this.inProgress.size === 0 && this.onStateChange(i), L.d(this.TAG, `schedule: [${lf[e]}] [failedRetryCount=${s}] Recovered \u267B\uFE0F after ${d}ms`);
			} else yield this.scheduleTask({
				category: e,
				error: t,
				changeState: n,
				task: r,
				originalState: i,
				maxRetryTime: o,
				failedAt: a,
				failedRetryCount: s + 1
			});
		});
	}
	getDelayForRetryCount(e) {
		let t = e === 2 ? Math.random() * 2 : Math.random(), n = 0;
		return e === 2 ? n = 2 + t : e === 1 && (n = 1), n * 1e3;
	}
	setTimeoutPromise(e, t) {
		return I(this, null, function* () {
			return new Promise((n, r) => {
				let i = window.setTimeout(() => I(this, null, function* () {
					try {
						let t = yield e();
						t && this.retryTaskIds.splice(this.retryTaskIds.indexOf(i), 1), n(t);
					} catch (e) {
						r(e);
					}
				}), t);
				this.retryTaskIds.push(i);
			});
		});
	}
}, mf = class extends vo {
	constructor() {
		super(100), this.localStorage = new ya("hms-analytics"), this.localStorage.clear(), this.initLocalStorageQueue();
	}
	enqueue(e) {
		super.enqueue(e), this.localStorage.set(this.storage);
	}
	dequeue() {
		let e = super.dequeue();
		return this.localStorage.set(this.storage), e;
	}
	initLocalStorageQueue() {
		var e;
		(e = this.localStorage.get()) == null || e.forEach((e) => {
			let t = new V(e);
			super.enqueue(t);
		});
	}
}, hf = class {
	constructor() {
		this.TAG = "[AnalyticsTransport]", this.eventCount = 0, this.lastResetTime = Date.now(), this.MAX_EVENTS_PER_MINUTE = 200, this.RESET_INTERVAL_MS = 6e4;
	}
	checkRateLimit() {
		let e = Date.now();
		if (e - this.lastResetTime >= this.RESET_INTERVAL_MS && (this.eventCount = 0, this.lastResetTime = e), this.eventCount >= this.MAX_EVENTS_PER_MINUTE) throw Error("Too many events being sent, please check the implementation.");
		this.eventCount++;
	}
	sendEvent(e) {
		try {
			this.checkRateLimit();
		} catch (e) {
			throw L.w(this.TAG, "Rate limit exceeded", e), e;
		}
		try {
			this.sendSingleEvent(e), this.flushFailedEvents();
		} catch (e) {
			L.w(this.TAG, "sendEvent failed", e);
		}
	}
	flushFailedEvents(e) {
		try {
			for (L.d(this.TAG, "Flushing failed events", this.failedEvents); this.failedEvents.size() > 0;) {
				let t = this.failedEvents.dequeue();
				t && (t.metadata?.peer.peer_id === e || !t.metadata.peer.peer_id ? this.sendSingleEvent(t) : kd.sendEvent(t));
			}
		} catch (e) {
			L.w(this.TAG, "flushFailedEvents failed", e);
		}
	}
	sendSingleEvent(e) {
		try {
			this.transportProvider.sendEvent(e), L.d(this.TAG, "Sent event", e.name, e);
		} catch (t) {
			throw L.w(this.TAG, `${this.transportProvider.TAG}.sendEvent failed, adding to local storage events`, {
				event: e,
				error: t
			}), this.failedEvents.enqueue(e), t;
		}
	}
}, gf = class extends hf {
	constructor(e) {
		super(), this.transportProvider = e, this.failedEvents = new mf();
	}
}, _f = class {
	constructor(e, t, n, r) {
		this.store = e, this.eventBus = t, this.sampleWindowSize = n, this.pushInterval = r, this.shouldSendEvent = !1, this.sequenceNum = 1, this.start();
	}
	start() {
		this.shouldSendEvent || (this.stop(), this.shouldSendEvent = !0, this.eventBus.statsUpdate.subscribe(this.handleStatsUpdate.bind(this)), this.startLoop().catch((e) => L.e("[StatsAnalytics]", e.message)));
	}
	stop() {
		this.shouldSendEvent && this.sendEvent(), this.eventBus.statsUpdate.unsubscribe(this.handleStatsUpdate.bind(this)), this.shouldSendEvent = !1;
	}
	startLoop() {
		return I(this, null, function* () {
			for (; this.shouldSendEvent;) yield bo(this.pushInterval * 1e3), this.sendEvent();
		});
	}
	sendEvent() {
		this.trackAnalytics.forEach((e) => {
			e.clearSamples();
		});
	}
	cleanTrackAnalyticsAndCreateSample(e) {
		this.trackAnalytics.forEach((e) => {
			!this.store.hasTrack(e.track) && !(e.samples.length > 0) && this.trackAnalytics.delete(e.track_id);
		}), e && this.trackAnalytics.forEach((e) => {
			e.createSample();
		});
	}
}, vf = class {
	constructor({ track: e, ssrc: t, rid: n, kind: r, sampleWindowSize: i }) {
		this.samples = [], this.tempStats = [], this.track = e, this.ssrc = t, this.rid = n, this.kind = r, this.track_id = this.track.trackId, this.source = this.track.source, this.sampleWindowSize = i;
	}
	pushTempStat(e) {
		this.tempStats.push(e);
	}
	createSample() {
		this.tempStats.length !== 0 && (this.samples.push(this.collateSample()), this.prevLatestStat = this.getLatestStat(), this.tempStats.length = 0);
	}
	clearSamples() {
		this.samples.length = 0;
	}
	getLatestStat() {
		return this.tempStats[this.tempStats.length - 1];
	}
	getFirstStat() {
		return this.tempStats[0];
	}
	calculateSum(e) {
		if (typeof this.getLatestStat()[e] == "number") return this.tempStats.reduce((t, n) => t + (n[e] || 0), 0);
	}
	calculateAverage(e, t = !0) {
		let n = this.calculateSum(e), r = n === void 0 ? void 0 : n / this.tempStats.length;
		return r === void 0 ? void 0 : t ? Math.round(r) : r;
	}
	calculateDifferenceForSample(e) {
		let t = Number(this.prevLatestStat?.[e]) || 0;
		return (Number(this.getLatestStat()[e]) || 0) - t;
	}
	calculateDifferenceAverage(e, t = !0) {
		let n = this.calculateDifferenceForSample(e) / this.tempStats.length;
		return t ? Math.round(n) : n;
	}
	calculateInstancesOfHigh(e, t) {
		if (typeof this.getLatestStat()[e] == "number") return this.tempStats.reduce((n, r) => n + +((r[e] || 0) > t), 0);
	}
}, yf = (e, t) => e && t && (e.frameWidth !== t.frameWidth || e.frameHeight !== t.frameHeight), bf = (e, t) => e && t && e.enabled !== t.enabled, xf = (e) => Object.entries(e).filter(([, e]) => e !== void 0).reduce((e, [t, n]) => (e[t] = n, e), {}), Sf = class {
	constructor() {
		this.worstState = void 0, this.TAG = "[CPUPressureMonitor]", this.stateRanking = {
			nominal: 0,
			fair: 1,
			serious: 2,
			critical: 3
		}, this.init();
	}
	init() {
		return I(this, null, function* () {
			if (!("PressureObserver" in window)) {
				L.d(this.TAG, "PressureObserver API not available");
				return;
			}
			try {
				this.observer = new PressureObserver((e) => {
					if (e.length > 0) {
						let t = e[e.length - 1].state;
						this.updateWorstState(t);
					}
				}), yield this.observer.observe("cpu", { sampleInterval: 1e4 }), this.worstState = "nominal", L.d(this.TAG, "CPU pressure monitoring started");
			} catch (e) {
				L.e(this.TAG, "Failed to initialize CPU pressure monitoring", e);
			}
		});
	}
	updateWorstState(e) {
		if (this.worstState === void 0) {
			this.worstState = e;
			return;
		}
		this.stateRanking[e] > this.stateRanking[this.worstState] && (this.worstState = e, L.d(this.TAG, `New worst CPU state: ${this.worstState}`));
	}
	getWorstState() {
		return this.worstState;
	}
	resetWorstState() {
		this.worstState !== void 0 && (this.worstState = "nominal", L.d(this.TAG, "CPU worst state reset to nominal"));
	}
	stop() {
		if (this.observer) try {
			this.observer.disconnect(), L.d(this.TAG, "CPU pressure monitoring stopped");
		} catch (e) {
			L.e(this.TAG, "Error stopping CPU pressure monitoring", e);
		}
	}
}, Cf = class extends _f {
	constructor(e, t, n, r) {
		super(e, t, n, r), this.trackAnalytics = /* @__PURE__ */ new Map(), this.cpuPressureMonitor = new Sf();
	}
	toAnalytics() {
		let e = [], t = [];
		return this.trackAnalytics.forEach((n) => {
			n.track.type === "audio" ? e.push(n.toAnalytics()) : n.track.type === "video" && t.push(n.toAnalytics());
		}), {
			audio: e,
			video: t,
			joined_at: (this.store.getRoom()?.joinedAt)?.getTime(),
			sequence_num: this.sequenceNum++,
			max_window_sec: 30
		};
	}
	sendEvent() {
		this.eventBus.analytics.publish(H.publishStats(this.toAnalytics())), super.sendEvent();
	}
	stop() {
		var e;
		super.stop(), (e = this.cpuPressureMonitor) == null || e.stop();
	}
	handleStatsUpdate(e) {
		let t = !1, n = e.getLocalTrackStats();
		Object.keys(n).forEach((r) => {
			let i = n[r], a = this.store.getLocalPeerTracks().find((e) => e.getTrackIDBeingSent() === r);
			Object.keys(i).forEach((n) => {
				var r;
				let o = i[n];
				if (!a) return;
				let s = this.getTrackIdentifier(a.trackId, o), c = F(P({}, o), { availableOutgoingBitrate: e.getLocalPeerStats()?.publish?.availableOutgoingBitrate });
				if (s && this.trackAnalytics.has(s)) (r = this.trackAnalytics.get(s)) == null || r.pushTempStat(c);
				else if (a) {
					let e = new wf({
						track: a,
						sampleWindowSize: this.sampleWindowSize,
						rid: o.rid,
						ssrc: o.ssrc.toString(),
						kind: o.kind,
						cpuPressureMonitor: this.cpuPressureMonitor
					});
					e.pushTempStat(c), this.trackAnalytics.set(this.getTrackIdentifier(a.trackId, o), e);
				}
				let l = this.trackAnalytics.get(s);
				l != null && l.shouldCreateSample() && (t = !0);
			});
		}), this.cleanTrackAnalyticsAndCreateSample(t);
	}
	getTrackIdentifier(e, t) {
		return t.rid ? `${e}:${t.rid}` : e;
	}
}, wf = class extends vf {
	constructor(e) {
		super(e), this.samples = [], this.getQualityLimitation = (e) => {
			let t = e.qualityLimitationDurations;
			return t && {
				bandwidth_sec: t.bandwidth,
				cpu_sec: t.cpu,
				other_sec: t.other
			};
		}, this.getSourceStats = (e) => {
			if (!e.sourceStatsAvailable) return {};
			let t = e.sourceFrameHeight ? {
				height_px: e.sourceFrameHeight,
				width_px: e.sourceFrameWidth
			} : void 0, n = this.calculateDifferenceForSample("sourceFrames"), r = this.calculateDifferenceForSample("framesEncoded"), i = n && r ? Math.max(0, n - r) : void 0;
			return {
				source_resolution: t,
				source_avg_fps: this.calculateAverage("sourceFramesPerSecond"),
				source_total_frames: n,
				source_total_frames_dropped: i
			};
		}, this.collateSample = () => {
			var e, t, n;
			let r = this.getFirstStat(), i = this.getLatestStat(), a = i.frameHeight ? {
				height_px: i.frameHeight,
				width_px: i.frameWidth
			} : void 0, o = this.calculateAverage("jitter", !1), s = this.calculateAverage("roundTripTime", !1), c = this.cpuPressureMonitor?.getWorstState();
			(e = this.cpuPressureMonitor) == null || e.resetWorstState();
			let l = (t = this.track).getMediaTrackSettings?.call(t), u = (n = this.track).getPluginsMetrics?.call(n);
			return xf(P({
				timestamp: Date.now(),
				sample_start_ts: r.timestamp,
				sample_end_ts: i.timestamp,
				sample_duration_ms: i.timestamp - r.timestamp,
				avg_available_outgoing_bitrate_bps: this.calculateAverage("availableOutgoingBitrate"),
				avg_bitrate_bps: this.calculateAverage("bitrate"),
				avg_fps: this.calculateAverage("framesPerSecond"),
				total_packets_lost: i.packetsLost,
				total_packets_sent: i.packetsSent,
				total_packet_sent_delay_sec: parseFloat(this.calculateDifferenceForSample("totalPacketSendDelay").toFixed(4)),
				total_fir_count: this.calculateDifferenceForSample("firCount"),
				total_pli_count: this.calculateDifferenceForSample("pliCount"),
				total_nack_count: this.calculateDifferenceForSample("nackCount"),
				avg_jitter_ms: o ? Math.round(o * 1e3) : void 0,
				avg_round_trip_time_ms: s ? Math.round(s * 1e3) : void 0,
				total_quality_limitation: this.getQualityLimitation(i),
				resolution: a,
				cpu_pressure_state: c,
				track_settings: l,
				effects_metrics: u && Object.keys(u).length > 0 ? u : void 0
			}, this.getSourceStats(i)));
		}, this.shouldCreateSample = () => {
			let e = this.tempStats.length, t = this.tempStats[e - 1], n = this.tempStats[e - 2];
			return e === 30 || bf(t, n) || t.kind === "video" && yf(t, n);
		}, this.toAnalytics = () => ({
			track_id: this.track_id,
			ssrc: this.ssrc,
			source: this.source,
			rid: this.rid,
			samples: this.samples
		}), this.cpuPressureMonitor = e.cpuPressureMonitor;
	}
}, Tf = class extends _f {
	constructor() {
		super(...arguments), this.trackAnalytics = /* @__PURE__ */ new Map();
	}
	toAnalytics() {
		let e = [], t = [];
		return this.trackAnalytics.forEach((n) => {
			n.track.type === "audio" ? e.push(n.toAnalytics()) : n.track.type === "video" && t.push(n.toAnalytics());
		}), {
			audio: e,
			video: t,
			joined_at: (this.store.getRoom()?.joinedAt)?.getTime(),
			sequence_num: this.sequenceNum++,
			max_window_sec: 10
		};
	}
	sendEvent() {
		this.eventBus.analytics.publish(H.subscribeStats(this.toAnalytics())), super.sendEvent();
	}
	handleStatsUpdate(e) {
		let t = e.getAllRemoteTracksStats(), n = !1;
		Object.keys(t).forEach((r) => {
			var i;
			let a = this.store.getTrackById(r), o = t[r], s = ((e, t) => {
				let n = t?.jitterBufferDelay || 0, r = t?.jitterBufferEmittedCount || 0, i = (e?.jitterBufferDelay || 0) - n, a = (e?.jitterBufferEmittedCount || 0) - r;
				return a > 0 ? i * 1e3 / a : t?.calculatedJitterBufferDelay || 0;
			})(o, this.trackAnalytics.get(r)?.getLatestStat()), c = this.calculateAvSyncForStat(o, e), l = F(P({}, o), {
				calculatedJitterBufferDelay: s,
				avSync: c
			});
			if (o.kind === "video") {
				let e = a.getPreferredLayerDefinition();
				l.expectedFrameHeight = e?.resolution.height, l.expectedFrameWidth = e?.resolution.width;
			}
			if (this.trackAnalytics.has(r)) (i = this.trackAnalytics.get(r)) == null || i.pushTempStat(l);
			else if (a) {
				let e = new Ef({
					track: a,
					sampleWindowSize: this.sampleWindowSize,
					ssrc: o.ssrc.toString(),
					kind: o.kind
				});
				e.pushTempStat(l), this.trackAnalytics.set(r, e);
			}
			let u = this.trackAnalytics.get(r);
			u != null && u.shouldCreateSample() && (n = !0);
		}), this.cleanTrackAnalyticsAndCreateSample(n);
	}
	calculateAvSyncForStat(e, t) {
		if (!e.peerID || !e.estimatedPlayoutTimestamp || e.kind !== "video") return;
		let n = this.store.getPeerById(e.peerID), r = n?.audioTrack, i = n?.videoTrack;
		if (!(r && i && r.enabled && i.enabled)) return $o;
		let a = t.getRemoteTrackStats(r.trackId);
		if (!a) return $o;
		if (a.estimatedPlayoutTimestamp) return a.estimatedPlayoutTimestamp - e.estimatedPlayoutTimestamp;
	}
}, Ef = class extends vf {
	constructor() {
		super(...arguments), this.samples = [], this.collateSample = () => {
			let e = this.getLatestStat(), t = this.getFirstStat(), n = {
				timestamp: Date.now(),
				sample_start_ts: t.timestamp,
				sample_end_ts: e.timestamp,
				sample_duration_ms: e.timestamp - t.timestamp,
				total_pli_count: this.calculateDifferenceForSample("pliCount"),
				total_nack_count: this.calculateDifferenceForSample("nackCount"),
				avg_jitter_buffer_delay: this.calculateAverage("calculatedJitterBufferDelay", !1),
				avg_bitrate_bps: this.calculateAverage("bitrate")
			};
			if (e.kind === "video") return xf(F(P({}, n), {
				avg_av_sync_ms: this.calculateAvgAvSyncForSample(),
				avg_frames_received_per_sec: this.calculateDifferenceAverage("framesReceived"),
				avg_frames_dropped_per_sec: this.calculateDifferenceAverage("framesDropped"),
				avg_frames_decoded_per_sec: this.calculateDifferenceAverage("framesDecoded"),
				frame_width: this.calculateAverage("frameWidth"),
				frame_height: this.calculateAverage("frameHeight"),
				expected_frame_width: this.calculateAverage("expectedFrameWidth"),
				expected_frame_height: this.calculateAverage("expectedFrameHeight"),
				pause_count: this.calculateDifferenceForSample("pauseCount"),
				pause_duration_seconds: this.calculateDifferenceForSample("totalPausesDuration"),
				freeze_count: this.calculateDifferenceForSample("freezeCount"),
				freeze_duration_seconds: this.calculateDifferenceForSample("totalFreezesDuration")
			}));
			{
				let r = (e.concealedSamples || 0) - (e.silentConcealedSamples || 0) - ((t.concealedSamples || 0) - (t.silentConcealedSamples || 0));
				return xf(F(P({}, n), {
					audio_level: this.calculateInstancesOfHigh("audioLevel", .05),
					audio_concealed_samples: r,
					audio_total_samples_received: this.calculateDifferenceForSample("totalSamplesReceived"),
					audio_concealment_events: this.calculateDifferenceForSample("concealmentEvents"),
					fec_packets_discarded: this.calculateDifferenceForSample("fecPacketsDiscarded"),
					fec_packets_received: this.calculateDifferenceForSample("fecPacketsReceived"),
					total_samples_duration: this.calculateDifferenceForSample("totalSamplesDuration"),
					total_packets_received: this.calculateDifferenceForSample("packetsReceived"),
					total_packets_lost: this.calculateDifferenceForSample("packetsLost")
				}));
			}
		}, this.shouldCreateSample = () => {
			let e = this.tempStats.length, t = this.tempStats[e - 1], n = this.tempStats[e - 2];
			return e === 10 || bf(t, n) || t.kind === "video" && yf(t, n);
		}, this.toAnalytics = () => ({
			track_id: this.track_id,
			ssrc: this.ssrc,
			source: this.source,
			rid: this.rid,
			samples: this.samples
		});
	}
	calculateAvgAvSyncForSample() {
		let e = this.tempStats.map((e) => e.avSync).filter((e) => e !== void 0 && e !== $o);
		return e.length === 0 ? $o : e.reduce((e, t) => e + t, 0) / e.length;
	}
}, Df = ((e) => (e[e.Publish = 0] = "Publish", e[e.Subscribe = 1] = "Subscribe", e))(Df || {});
function Of(e, t) {
	var n;
	let r = gi.parse(e.sdp);
	if (!((n = r.origin) != null && n.username.startsWith("mozilla"))) return e;
	let i = t ? Array.from(t.values()) : [];
	return r.media.forEach((e) => {
		let t = e.msid?.split(" ")[0], n = i.find((n) => n.type === e.type && n.stream_id === t)?.track_id;
		n && (e.msid = e.msid?.replace(/\s(.+)/, ` ${n}`));
	}), {
		type: e.type,
		sdp: gi.write(r)
	};
}
function kf(e, t) {
	return !(e != null && e.sdp) || !t ? void 0 : (gi.parse(e.sdp).media.find((e) => Sa(e.mid) && parseInt(e.mid) === parseInt(t))?.msid)?.split(" ")[1];
}
function Af(e) {
	return e.sdp.includes("usedtx=1") ? e : {
		type: e.type,
		sdp: e.sdp.replace("useinbandfec=1", "useinbandfec=1;usedtx=1")
	};
}
var jf = "[HMSConnection]", Mf = class {
	constructor(e, t) {
		this.candidates = [], this.role = e, this.signal = t;
	}
	get iceConnectionState() {
		return this.nativeConnection.iceConnectionState;
	}
	get connectionState() {
		return this.nativeConnection.connectionState;
	}
	get action() {
		return this.role === 0 ? "PUBLISH" : "SUBSCRIBE";
	}
	setSfuNodeId(e) {
		this.sfuNodeId = e;
	}
	addTransceiver(e, t) {
		return this.nativeConnection.addTransceiver(e, t);
	}
	createOffer(e, t) {
		return I(this, null, function* () {
			try {
				let n = yield this.nativeConnection.createOffer(t);
				return L.d(jf, `[role=${this.role}] createOffer offer=${JSON.stringify(n, null, 1)}`), Af(Of(n, e));
			} catch (e) {
				throw B.WebrtcErrors.CreateOfferFailed(this.action, e.message);
			}
		});
	}
	createAnswer(e = void 0) {
		return I(this, null, function* () {
			try {
				let t = yield this.nativeConnection.createAnswer(e);
				return L.d(jf, `[role=${this.role}] createAnswer answer=${JSON.stringify(t, null, 1)}`), t;
			} catch (e) {
				throw B.WebrtcErrors.CreateAnswerFailed(this.action, e.message);
			}
		});
	}
	setLocalDescription(e) {
		return I(this, null, function* () {
			try {
				L.d(jf, `[role=${this.role}] setLocalDescription description=${JSON.stringify(e, null, 1)}`), yield this.nativeConnection.setLocalDescription(e);
			} catch (e) {
				throw B.WebrtcErrors.SetLocalDescriptionFailed(this.action, e.message);
			}
		});
	}
	setRemoteDescription(e) {
		return I(this, null, function* () {
			try {
				L.d(jf, `[role=${this.role}] setRemoteDescription description=${JSON.stringify(e, null, 1)}`), yield this.nativeConnection.setRemoteDescription(e);
			} catch (e) {
				throw B.WebrtcErrors.SetRemoteDescriptionFailed(this.action, e.message);
			}
		});
	}
	addIceCandidate(e) {
		return I(this, null, function* () {
			if (this.nativeConnection.signalingState === "closed") {
				L.d(jf, `[role=${this.role}] addIceCandidate signalling state closed`);
				return;
			}
			L.d(jf, `[role=${this.role}] addIceCandidate candidate=${JSON.stringify(e, null, 1)}`), yield this.nativeConnection.addIceCandidate(e);
		});
	}
	get remoteDescription() {
		return this.nativeConnection.remoteDescription;
	}
	getSenders() {
		return this.nativeConnection.getSenders();
	}
	handleSelectedIceCandidatePairs() {
		try {
			(this.role === 0 ? this.getSenders() : this.getReceivers()).forEach((e) => {
				let t = e.track?.kind;
				if (e.transport) {
					let n = e.transport.iceTransport, r = () => {
						typeof n.getSelectedCandidatePair == "function" && (this.selectedCandidatePair = n.getSelectedCandidatePair(), this.selectedCandidatePair && (this.observer.onSelectedCandidatePairChange(this.selectedCandidatePair), L.d(jf, `${Df[this.role]} connection`, `selected ${t || "unknown"} candidate pair`, JSON.stringify(this.selectedCandidatePair, null, 2))));
					};
					typeof n.onselectedcandidatepairchange == "function" && (n.onselectedcandidatepairchange = r), r();
				}
			});
		} catch (e) {
			L.w(jf, `Error in logging selected ice candidate pair for ${Df[this.role]} connection`, e);
		}
	}
	removeTrack(e) {
		this.nativeConnection.signalingState !== "closed" && this.nativeConnection.removeTrack(e);
	}
	setMaxBitrateAndFramerate(e, t) {
		return I(this, null, function* () {
			let n = t?.maxBitrate || e.settings.maxBitrate, r = e instanceof qo && e.settings.maxFramerate, i = this.getSenders().find((t) => t?.track?.id === e.getTrackIDBeingSent());
			if (i) {
				let e = i.getParameters();
				e.encodings.length === 1 && (n && (e.encodings[0].maxBitrate = n * 1e3), r && (e.encodings[0].maxFramerate = r)), yield i.setParameters(e);
			} else L.w(jf, `no sender found to setMaxBitrate for track - ${e.trackId}, sentTrackId - ${e.getTrackIDBeingSent()}`);
		});
	}
	getStats() {
		return I(this, null, function* () {
			return yield this.nativeConnection.getStats();
		});
	}
	close() {
		this.nativeConnection.close();
	}
	getReceivers() {
		return this.nativeConnection.getReceivers();
	}
}, Nf = class extends Mf {
	constructor(e, t, n) {
		super(0, e), this.TAG = "[HMSPublishConnection]", this.observer = n, this.nativeConnection = new RTCPeerConnection(t), this.channel = this.nativeConnection.createDataChannel(Yo, { protocol: "SCTP" }), this.channel.onerror = (e) => L.e(this.TAG, `publish data channel onerror ${e}`, e), this.nativeConnection.onicecandidate = ({ candidate: t }) => {
			t && (this.observer.onIceCandidate(t), e.trickle(this.role, t));
		}, this.nativeConnection.oniceconnectionstatechange = () => {
			this.observer.onIceConnectionChange(this.nativeConnection.iceConnectionState);
		}, this.nativeConnection.onconnectionstatechange = () => {
			this.observer.onConnectionStateChange(this.nativeConnection.connectionState), this.nativeConnection.sctp && (this.nativeConnection.sctp.transport.onstatechange = () => {
				this.observer.onDTLSTransportStateChange(this.nativeConnection.sctp?.transport.state);
			}, this.nativeConnection.sctp.transport.onerror = (e) => {
				this.observer.onDTLSTransportError(Error(e?.error?.errorDetail));
			});
		};
	}
	close() {
		super.close(), this.channel.close();
	}
	initAfterJoin() {
		this.nativeConnection.onnegotiationneeded = () => I(this, null, function* () {
			L.d(this.TAG, "onnegotiationneeded"), yield this.observer.onRenegotiationNeeded();
		});
	}
}, Pf = class {
	constructor(e, t, n = "") {
		this.TAG = "[HMSDataChannel]", this.nativeChannel = e, this.observer = t, this.metadata = n, e.onmessage = (e) => {
			this.observer.onMessage(e.data);
		};
	}
	get id() {
		return this.nativeChannel.id;
	}
	get label() {
		return this.nativeChannel.label;
	}
	get readyState() {
		return this.nativeChannel.readyState;
	}
	send(e) {
		L.d(this.TAG, `[${this.metadata}] Sending [size=${e.length}] message=${e}`), this.nativeChannel.send(e);
	}
	close() {
		this.nativeChannel.close();
	}
}, Ff = class extends Mf {
	constructor(e, t, n, r) {
		super(1, e), this.isFlagEnabled = n, this.TAG = "[HMSSubscribeConnection]", this.remoteStreams = /* @__PURE__ */ new Map(), this.MAX_RETRIES = 3, this.pendingMessageQueue = [], this.eventEmitter = new fr.default({ maxListeners: 60 }), this.handlePendingApiMessages = () => {
			this.eventEmitter.emit("open", !0), this.pendingMessageQueue.length > 0 && (L.d(this.TAG, "Found pending message queue, sending messages"), this.pendingMessageQueue.forEach((e) => this.sendOverApiDataChannel(e)), this.pendingMessageQueue.length = 0);
		}, this.sendMessage = (e, t) => I(this, null, function* () {
			this.apiChannel?.readyState !== "open" && (yield this.eventEmitter.waitFor("open"));
			let n;
			for (let r = 0; r < this.MAX_RETRIES; r++) {
				this.apiChannel.send(e), n = yield this.waitForResponse(t);
				let i = n.error;
				if (i) {
					if (i.code === 404) {
						L.d(this.TAG, `Track not found ${t}`, {
							request: e,
							try: r + 1,
							error: i
						});
						break;
					}
					if (L.d(this.TAG, `Failed sending ${t}`, {
						request: e,
						try: r + 1,
						error: i
					}), !(i.code / 100 == 5 || i.code === 429)) throw Error(`code=${i.code}, message=${i.message}`);
					yield xo((2 + Math.random() * 2) * 1e3);
				} else break;
			}
			return n;
		}), this.waitForResponse = (e) => I(this, null, function* () {
			let t = yield this.eventEmitter.waitFor("message", function(t) {
				return t.includes(e);
			}), n = JSON.parse(t[0]);
			return L.d(this.TAG, `response for ${e} -`, JSON.stringify(n, null, 2)), n;
		}), this.observer = r, this.nativeConnection = new RTCPeerConnection(t), this.initNativeConnectionCallbacks();
	}
	initNativeConnectionCallbacks() {
		this.nativeConnection.oniceconnectionstatechange = () => {
			this.observer.onIceConnectionChange(this.nativeConnection.iceConnectionState);
		}, this.nativeConnection.onconnectionstatechange = () => {
			this.observer.onConnectionStateChange(this.nativeConnection.connectionState);
		}, this.nativeConnection.ondatachannel = (e) => {
			e.channel.label === Yo && (this.apiChannel = new Pf(e.channel, { onMessage: (e) => {
				this.eventEmitter.emit("message", e), this.observer.onApiChannelMessage(e);
			} }, `role=${this.role}`), e.channel.onopen = this.handlePendingApiMessages);
		}, this.nativeConnection.onicecandidate = (e) => {
			e.candidate !== null && (this.observer.onIceCandidate(e.candidate), this.signal.trickle(this.role, e.candidate));
		}, this.nativeConnection.ontrack = (e) => {
			let t = e.streams[0], n = t.id;
			if (!this.remoteStreams.has(n)) {
				let e = new us(t, this);
				this.remoteStreams.set(n, e);
			}
			t.addEventListener("removetrack", (t) => {
				if (t.track.id !== e.track.id) return;
				let i = r.tracks.findIndex((n) => n.nativeTrack.id === t.track.id && e.transceiver.mid === n.transceiver?.mid);
				if (i >= 0) {
					let e = r.tracks[i];
					this.observer.onTrackRemove(e), r.tracks.splice(i, 1), r.tracks.length === 0 && this.remoteStreams.delete(n);
				}
			});
			let r = this.remoteStreams.get(n), i = e.track.kind === "audio", a = i ? ko : ss, o = i ? new a(r, e.track) : new a(r, e.track, void 0, this.isFlagEnabled("disableNoneLayerRequest"));
			e.track.kind === "video" && r.setVideoLayerLocally("none", "addTrack", "subscribeConnection"), o.transceiver = e.transceiver;
			let s = kf(this.remoteDescription, e.transceiver?.mid);
			s && o.setSdpTrackId(s), r.tracks.push(o), this.observer.onTrackAdd(o);
		};
	}
	sendOverApiDataChannel(e) {
		this.apiChannel && this.apiChannel.readyState === "open" ? this.apiChannel.send(e) : (L.w(this.TAG, `API Data channel not ${this.apiChannel ? "open" : "present"}, queueing`, e), this.pendingMessageQueue.push(e));
	}
	sendOverApiDataChannelWithResponse(e, t) {
		return I(this, null, function* () {
			let n = tn();
			if (e.method === "prefer-video-track-state" && this.isFlagEnabled("disableVideoTrackAutoUnsubscribe") && e.params.max_spatial_layer === "none") return L.d(this.TAG, "video auto unsubscribe is disabled, request is ignored"), { id: n };
			let r = JSON.stringify(P({
				id: t || n,
				jsonrpc: "2.0"
			}, e));
			return this.sendMessage(r, n);
		});
	}
	close() {
		var e;
		super.close(), (e = this.apiChannel) == null || e.close();
	}
}, If = (e, t) => !t || t.length === 0 ? e : t.map((e) => ({
	urls: e.urls,
	credentialType: "password",
	credential: e.password,
	username: e.userName
})), Lf = "[InitService]", Rf = class {
	static handleError(e, t) {
		switch (e.status) {
			case 404: throw B.APIErrors.EndpointUnreachable("INIT", t.message || e.statusText);
			case 200: break;
			default: throw B.APIErrors.ServerErrors(t.code || e.status, "INIT", t.message || e?.statusText);
		}
	}
	static fetchInitConfig(e) {
		return I(this, arguments, function* ({ token: e, peerId: t, userAgent: n, initEndpoint: r = "https://prod-init.100ms.live", region: i = "", iceServers: a }) {
			L.d(Lf, `fetchInitConfig: initEndpoint=${r} token=${e} peerId=${t} region=${i} `);
			let o = zf(r, t, n, i);
			try {
				let t = yield fetch(o, { headers: { Authorization: `Bearer ${e}` } });
				try {
					let e = yield t.clone().json();
					return this.handleError(t, e), L.d(Lf, `config is ${JSON.stringify(e, null, 2)}`), Bf(e, a);
				} catch (e) {
					let n = yield t.text();
					throw L.e(Lf, "json error", e.message, n), e instanceof z ? e : B.APIErrors.ServerErrors(t.status, "INIT", e.message);
				}
			} catch (e) {
				let t = e;
				throw [
					"Failed to fetch",
					"NetworkError",
					"ECONNRESET"
				].some((e) => t.message.includes(e)) ? B.APIErrors.EndpointUnreachable("INIT", t.message) : t;
			}
		});
	}
};
function zf(e, t, n, r) {
	try {
		let i = new URL("/init", e);
		return r && r.trim().length > 0 && i.searchParams.set("region", r.trim()), i.searchParams.set("peer_id", t), i.searchParams.set("user_agent_v2", n), i.toString();
	} catch (e) {
		let t = e;
		throw L.e(Lf, t.name, t.message), t;
	}
}
function Bf(e, t) {
	return F(P({}, e), { rtcConfiguration: F(P({}, e.rtcConfiguration), { iceServers: If(e.rtcConfiguration?.ice_servers, t) }) });
}
var Vf = class {
	constructor(e) {
		this.TAG = "[SIGNAL]: ", this.pongResponseTimes = new vo(5), this.isJoinCompleted = !1, this.pendingTrickle = [], this.socket = null, this.callbacks = /* @__PURE__ */ new Map(), this._isConnected = !1, this.id = 0, this.onCloseHandler = () => {}, this.resolvePingOnAnyResponse = () => {
			this.callbacks.forEach((e, t) => {
				e.metadata?.method === "ping" && (e.resolve({ timestamp: Date.now() }), this.callbacks.delete(t));
			});
		}, this.offlineListener = () => {
			L.d(this.TAG, "Window network offline"), this.setIsConnected(!1, "Window network offline");
		}, this.onlineListener = () => {
			L.d(this.TAG, "Window network online"), this.observer.onNetworkOnline();
		}, this.observer = e, window.addEventListener("offline", this.offlineListener), window.addEventListener("online", this.onlineListener), this.onMessageHandler = this.onMessageHandler.bind(this);
	}
	get isConnected() {
		return this._isConnected;
	}
	setSfuNodeId(e) {
		this.sfuNodeId = e;
	}
	setIsConnected(e, t = "") {
		L.d(this.TAG, `isConnected set id: ${this.id}, oldValue: ${this._isConnected}, newValue: ${e}`), this._isConnected !== e && (this._isConnected && !e ? (this._isConnected = e, this.rejectPendingCalls(t), this.observer.onOffline(t)) : !this._isConnected && e && (this._isConnected = e, this.observer.onOnline()));
	}
	getPongResponseTimes() {
		return this.pongResponseTimes.toList();
	}
	internalCall(e, t) {
		return I(this, null, function* () {
			var n;
			let r = tn(), i = {
				method: e,
				params: t,
				id: r,
				jsonrpc: "2.0"
			};
			(n = this.socket) == null || n.send(JSON.stringify(i));
			try {
				return yield new Promise((t, n) => {
					this.callbacks.set(r, {
						resolve: t,
						reject: n,
						metadata: { method: e }
					});
				});
			} catch (t) {
				if (t instanceof z) throw t;
				let n = t;
				throw B.WebsocketMethodErrors.ServerErrors(Number(n.code), ha(e), n.message);
			}
		});
	}
	notify(e, t) {
		var n;
		let r = {
			method: e,
			params: t
		};
		this.socket?.readyState === WebSocket.OPEN && ((n = this.socket) == null || n.send(JSON.stringify(r)));
	}
	open(e) {
		return new Promise((t, n) => {
			let r = !1;
			this.socket && (this.socket.close(), this.socket.removeEventListener("close", this.onCloseHandler), this.socket.removeEventListener("message", this.onMessageHandler)), this.socket = new WebSocket(e);
			let i = () => {
				L.e(this.TAG, "Error from websocket"), r = !0, n(B.WebSocketConnectionErrors.FailedToConnect("JOIN", "Error opening websocket connection"));
			};
			this.onCloseHandler = (e) => {
				L.w(`Websocket closed code=${e.code}`), r ? this.setIsConnected(!1, `code: ${e.code}${e.code === 1e3 ? "" : ", unexpected websocket close"}`) : (r = !0, n(B.WebSocketConnectionErrors.AbnormalClose("JOIN", `Error opening websocket connection - websocket closed unexpectedly with code=${e.code}`)));
			}, this.socket.addEventListener("error", i);
			let a = () => {
				var e, n;
				r = !0, t(), this.setIsConnected(!0), this.id++, (e = this.socket) == null || e.removeEventListener("open", a), (n = this.socket) == null || n.removeEventListener("error", i), this.pingPongLoop(this.id);
			};
			this.socket.addEventListener("open", a), this.socket.addEventListener("close", this.onCloseHandler), this.socket.addEventListener("message", this.onMessageHandler);
		});
	}
	close() {
		return I(this, null, function* () {
			window.removeEventListener("offline", this.offlineListener), window.removeEventListener("online", this.onlineListener), this.socket ? (this.socket.close(1e3, "Normal Close"), this.setIsConnected(!1, "code: 1000, normal websocket close"), this.socket.removeEventListener("close", this.onCloseHandler), this.socket.removeEventListener("message", this.onMessageHandler)) : this.setIsConnected(!1, "websocket not connected yet");
		});
	}
	join(e, t, n, r, i, a, o) {
		return I(this, null, function* () {
			if (!this.isConnected) throw B.WebSocketConnectionErrors.WebSocketConnectionLost("JOIN", "Failed to send join over WS connection");
			let s = {
				name: e,
				disableVidAutoSub: n,
				data: t,
				offer: o,
				server_sub_degrade: r,
				simulcast: i,
				onDemandTracks: a
			}, c = yield this.internalCall("join", s);
			return this.isJoinCompleted = !0, this.pendingTrickle.forEach(({ target: e, candidate: t }) => this.trickle(e, t)), this.pendingTrickle.length = 0, L.d(this.TAG, `join: response=${JSON.stringify(c, null, 1)}`), c;
		});
	}
	trickle(e, t) {
		this.isJoinCompleted ? this.notify("trickle", {
			target: e,
			candidate: t,
			sfu_node_id: this.sfuNodeId
		}) : this.pendingTrickle.push({
			target: e,
			candidate: t
		});
	}
	offer(e, t) {
		return I(this, null, function* () {
			return yield this.call("offer", {
				desc: e,
				tracks: Object.fromEntries(t),
				sfu_node_id: this.sfuNodeId
			});
		});
	}
	answer(e) {
		this.notify("answer", {
			desc: e,
			sfu_node_id: this.sfuNodeId
		});
	}
	trackUpdate(e) {
		this.notify("track-update", { tracks: Object.fromEntries(e) });
	}
	broadcast(e) {
		return I(this, null, function* () {
			return yield this.call("broadcast", e);
		});
	}
	leave(e) {
		this.notify("leave", { client_reason: e });
	}
	endRoom(e, t) {
		return I(this, null, function* () {
			yield this.call("end-room", {
				lock: e,
				reason: t
			});
		});
	}
	sendEvent(e) {
		if (!this.isConnected) throw Error(`${this.TAG} not connected. Could not send event ${e}`);
		this.notify("analytics", e.toSignalParams());
	}
	ping(e) {
		let t = Date.now(), n = new Promise((n) => {
			setTimeout(() => {
				n(Date.now() - t);
			}, e + 1);
		}), r = this.internalCall("ping", { timestamp: t }).then(() => Date.now() - t).catch(() => Date.now() - t);
		return Promise.race([n, r]);
	}
	requestRoleChange(e) {
		return I(this, null, function* () {
			yield this.call("role-change-request", e);
		});
	}
	requestBulkRoleChange(e) {
		return I(this, null, function* () {
			yield this.call("role-change-request", e);
		});
	}
	acceptRoleChangeRequest(e) {
		return I(this, null, function* () {
			yield this.call("role-change", e);
		});
	}
	requestTrackStateChange(e) {
		return I(this, null, function* () {
			yield this.call("track-update-request", e);
		});
	}
	requestMultiTrackStateChange(e) {
		return I(this, null, function* () {
			yield this.call("change-track-mute-state-request", e);
		});
	}
	removePeer(e) {
		return I(this, null, function* () {
			yield this.call("peer-leave-request", e);
		});
	}
	startRTMPOrRecording(e) {
		return I(this, null, function* () {
			yield this.call("rtmp-start", P({}, e));
		});
	}
	stopRTMPAndRecording() {
		return I(this, null, function* () {
			yield this.call("rtmp-stop", {});
		});
	}
	startHLSStreaming(e) {
		return I(this, null, function* () {
			yield this.call("hls-start", P({}, e));
		});
	}
	stopHLSStreaming(e) {
		return I(this, null, function* () {
			yield this.call("hls-stop", P({}, e));
		});
	}
	startTranscription(e) {
		return I(this, null, function* () {
			yield this.call("transcription-start", P({}, e));
		});
	}
	stopTranscription(e) {
		return I(this, null, function* () {
			yield this.call("transcription-stop", P({}, e));
		});
	}
	updateTranscriptionConfig(e) {
		return I(this, null, function* () {
			yield this.call("transcription-config-update", P({}, e));
		});
	}
	sendHLSTimedMetadata(e) {
		return I(this, null, function* () {
			yield this.call("hls-timed-metadata", P({}, e));
		});
	}
	updatePeer(e) {
		return I(this, null, function* () {
			yield this.call("peer-update", P({}, e));
		});
	}
	getPeer(e) {
		return I(this, null, function* () {
			return yield this.call("get-peer", P({}, e));
		});
	}
	joinGroup(e) {
		return I(this, null, function* () {
			return yield this.call("group-join", { name: e });
		});
	}
	leaveGroup(e) {
		return I(this, null, function* () {
			return yield this.call("group-leave", { name: e });
		});
	}
	addToGroup(e, t) {
		return I(this, null, function* () {
			yield this.call("group-add", {
				name: t,
				peer_id: e
			});
		});
	}
	removeFromGroup(e, t) {
		return I(this, null, function* () {
			yield this.call("group-remove", {
				name: t,
				peer_id: e
			});
		});
	}
	peerIterNext(e) {
		return I(this, null, function* () {
			return yield this.call("peer-iter-next", e);
		});
	}
	findPeers(e) {
		return I(this, null, function* () {
			return yield this.call("find-peer", e);
		});
	}
	findPeerByName(e) {
		return I(this, null, function* () {
			return yield this.call("peer-name-search", e);
		});
	}
	setSessionMetadata(e) {
		if (!this.isConnected) throw B.WebSocketConnectionErrors.WebSocketConnectionLost("RECONNECT_SIGNAL", "Failed to set session store value due to network disconnection");
		return this.call("set-metadata", P({}, e));
	}
	listenMetadataChange(e) {
		if (!this.isConnected) throw B.WebSocketConnectionErrors.WebSocketConnectionLost("RECONNECT_SIGNAL", "Failed to observe session store key due to network disconnection");
		return this.call("listen-metadata-change", { keys: e });
	}
	getSessionMetadata(e) {
		if (!this.isConnected) throw B.WebSocketConnectionErrors.WebSocketConnectionLost("RECONNECT_SIGNAL", "Failed to set session store value due to network disconnection");
		return this.call("get-metadata", { key: e });
	}
	setPollInfo(e) {
		return this.call("poll-info-set", P({}, e));
	}
	getPollInfo(e) {
		return this.call("poll-info-get", P({}, e));
	}
	setPollQuestions(e) {
		return this.call("poll-questions-set", P({}, e));
	}
	startPoll(e) {
		return this.call("poll-start", P({}, e));
	}
	stopPoll(e) {
		return this.call("poll-stop", P({}, e));
	}
	getPollQuestions(e) {
		return this.call("poll-questions-get", P({}, e));
	}
	setPollResponses(e) {
		return this.call("poll-response", P({}, e));
	}
	getPollResponses(e) {
		return this.call("poll-responses", P({}, e));
	}
	getPollsList(e) {
		return this.call("poll-list", P({}, e));
	}
	getPollResult(e) {
		return this.call("poll-result", P({}, e));
	}
	createWhiteboard(e) {
		return this.validateConnection(), this.call("whiteboard-create", P({}, e));
	}
	getWhiteboard(e) {
		return this.validateConnection(), this.call("whiteboard-get", P({}, e));
	}
	fetchPollLeaderboard(e) {
		return this.call("poll-leaderboard", P({}, e));
	}
	validateConnection() {
		if (!this.isConnected) throw B.WebSocketConnectionErrors.WebSocketConnectionLost("RECONNECT_SIGNAL", "Failed to send message due to network disconnection");
	}
	onMessageHandler(e) {
		let t = e.data, n = JSON.parse(t);
		if (this.resolvePingOnAnyResponse(), n.id) this.handleResponseWithId(n);
		else if (n.method) this.handleResponseWithMethod(n);
		else throw Error(`WebSocket message has no 'method' or 'id' field, message=${n}`);
	}
	handleResponseWithId(e) {
		let t = e, n = t.id;
		if (this.callbacks.has(n)) {
			let e = this.callbacks.get(n);
			this.callbacks.delete(n), t.result ? e.resolve(t.result) : e.reject(t.error);
		} else this.observer.onNotification(t);
	}
	handleResponseWithMethod(e) {
		switch (e.method) {
			case "offer":
				this.observer.onOffer(e.params);
				break;
			case "trickle":
				this.observer.onTrickle(e.params);
				break;
			case "on-error":
				this.observer.onServerError(B.WebsocketMethodErrors.ServerErrors(Number(e.params.code), "on-error", e.params.message));
				break;
			case "on-warning":
				L.w(this.TAG, e.params);
				break;
			default:
				this.observer.onNotification(e);
				break;
		}
	}
	rejectPendingCalls(e = "") {
		this.callbacks.forEach((t, n) => {
			var r;
			t.metadata?.method !== "ping" && (L.e(this.TAG, `rejecting pending callback ${t.metadata?.method}, id=${n}`), t.reject(B.WebSocketConnectionErrors.WebSocketConnectionLost((r = t.metadata) != null && r.method ? ha(t.metadata?.method) : "RECONNECT_SIGNAL", e)), this.callbacks.delete(n));
		});
	}
	pingPongLoop(e) {
		return I(this, null, function* () {
			let t = window.HMS?.PING_TIMEOUT || 12e3;
			if (this.isConnected) {
				let n = yield this.ping(t);
				this.pongResponseTimes.enqueue(n), n > t ? (L.d(this.TAG, `Pong timeout ${e}, pageHidden=${aa()}`), this.id === e && this.setIsConnected(!1, "ping pong failure")) : setTimeout(() => this.pingPongLoop(e), window.HMS?.PING_INTERVAL || 3e3);
			}
		});
	}
	call(e, t) {
		return I(this, null, function* () {
			let n = B.WebsocketMethodErrors.ServerErrors(500, e, `Default ${e} error`), r;
			for (r = 1; r <= 3; r++) try {
				return this.validateConnection(), L.d(this.TAG, `Try number ${r} sending ${e}`, t), yield this.internalCall(e, t);
			} catch (i) {
				if (n = i, L.e(this.TAG, `Failed sending ${e} try: ${r}`, {
					method: e,
					params: t,
					error: n
				}), !(parseInt(`${n.code / 100}`) === 5 || n.code === 429 || n.code === 1003)) break;
				yield xo((2 + Math.random() * 2) * 1e3);
			}
			throw L.e(`Sending ${e} over WS failed after ${Math.min(r, 3)} retries`, {
				method: e,
				params: t,
				error: n
			}), n;
		});
	}
}, Hf = () => {
	if (!$i || navigator.connection === void 0) return;
	let e = navigator.connection;
	return {
		downlink: e.downlink,
		downlinkMax: e.downlinkMax,
		effectiveType: e.effectiveType,
		rtt: e.rtt,
		saveData: e.saveData,
		type: e.type
	};
}, Z = "[HMSTransport]:", Uf = class {
	constructor(e, t, n, r, i, a, o) {
		this.observer = e, this.deviceManager = t, this.store = n, this.eventBus = r, this.analyticsEventsService = i, this.analyticsTimer = a, this.pluginUsageTracker = o, this.state = "Disconnected", this.trackStates = /* @__PURE__ */ new Map(), this.publishConnection = null, this.subscribeConnection = null, this.maxSubscribeBitrate = 0, this.joinRetryCount = 0, this.publishDisconnectTimer = 0, this.onScreenshareStop = () => {}, this.screenStream = /* @__PURE__ */ new Set(), this.callbacks = /* @__PURE__ */ new Map(), this.setListener = (e) => {
			this.listener = e;
		}, this.setOnScreenshareStop = (e) => {
			this.onScreenshareStop = e;
		}, this.signalObserver = {
			onOffer: (e) => I(this, null, function* () {
				try {
					if (!this.subscribeConnection) return;
					if (e.sfu_node_id && this.subscribeConnection.sfuNodeId && this.subscribeConnection.sfuNodeId !== e.sfu_node_id) {
						L.d(Z, "ignoring old offer");
						return;
					}
					yield this.subscribeConnection.setRemoteDescription(e), L.d(Z, `[SUBSCRIBE] Adding ${this.subscribeConnection.candidates.length} ice-candidates`, this.subscribeConnection.candidates);
					for (let e of this.subscribeConnection.candidates) yield this.subscribeConnection.addIceCandidate(e);
					this.subscribeConnection.candidates.length = 0;
					let t = yield this.subscribeConnection.createAnswer();
					yield this.subscribeConnection.setLocalDescription(t), this.signal.answer(t), L.d(Z, "[role=SUBSCRIBE] onOffer renegotiation DONE ✅");
				} catch (e) {
					L.d(Z, "[role=SUBSCRIBE] onOffer renegotiation FAILED ❌", e), this.state = "Failed";
					let t;
					t = e instanceof z ? e : B.GenericErrors.Unknown("SUBSCRIBE", e.message), this.observer.onFailure(t), this.eventBus.analytics.publish(H.subscribeFail(t));
				}
			}),
			onTrickle: (e) => I(this, null, function* () {
				let t = e.target === 0 ? this.publishConnection : this.subscribeConnection;
				t != null && t.remoteDescription ? yield t.addIceCandidate(e.candidate) : t?.candidates.push(e.candidate);
			}),
			onNotification: (e) => this.observer.onNotification(e),
			onServerError: (e) => I(this, null, function* () {
				yield this.observer.onStateChange("Failed", e);
			}),
			onFailure: (e) => {
				this.joinParameters && this.retryScheduler.schedule({
					category: 1,
					error: e,
					task: this.retrySignalDisconnectTask,
					originalState: this.state
				});
			},
			onOffline: (e) => I(this, null, function* () {
				L.d(Z, "socket offline", df[this.state]);
				try {
					this.state !== "Leaving" && this.joinParameters && this.retryScheduler.schedule({
						category: 1,
						error: B.WebSocketConnectionErrors.WebSocketConnectionLost("RECONNECT_SIGNAL", e),
						task: this.retrySignalDisconnectTask,
						originalState: this.state
					});
				} catch (e) {
					console.error(e);
				}
			}),
			onOnline: () => {
				L.d(Z, "socket online", df[this.state]), this.analyticsSignalTransport.flushFailedEvents(this.store.getLocalPeer()?.peerId);
			},
			onNetworkOnline: () => {
				this.analyticsEventsService.flushFailedClientEvents();
			}
		}, this.signal = new Vf(this.signalObserver), this.analyticsSignalTransport = new gf(this.signal), this.publishDtlsStateTimer = 0, this.lastPublishDtlsState = "new", this.handleLocalRoleUpdate = (e) => I(this, [e], function* ({ oldRole: e, newRole: t }) {
			!this.doesRoleNeedWebRTC(e) && this.doesRoleNeedWebRTC(t) && (L.d(Z, "Local peer role updated to webrtc role, creating PeerConnections and performing inital publish negotiation ⏳"), this.createPeerConnections(), yield this.negotiateOnFirstPublish());
		}), this.retryPublishIceFailedTask = () => I(this, null, function* () {
			if (this.publishConnection) {
				let e = new Promise((e, t) => {
					this.callbacks.set(Jo, {
						promise: {
							resolve: e,
							reject: t
						},
						action: "RESTART_ICE",
						extra: {}
					});
				});
				yield this.performPublishRenegotiation({ iceRestart: this.publishConnection.connectionState !== "connected" }), yield e;
			}
			return !0;
		}), this.retrySubscribeIceFailedTask = () => I(this, null, function* () {
			if (this.subscribeConnection && this.subscribeConnection.connectionState !== "connected") {
				let e = new Promise((e, t) => {
					this.callbacks.set(Xo, {
						promise: {
							resolve: e,
							reject: t
						},
						action: "RESTART_ICE",
						extra: {}
					});
				}), t = new Promise((e) => {
					setTimeout(e, 6e4, !1);
				});
				return Promise.race([e, t]);
			}
			return !0;
		}), this.retrySignalDisconnectTask = () => I(this, null, function* () {
			var e;
			L.d(Z, "retrySignalDisconnectTask", { signalConnected: this.signal.isConnected }), this.signal.isConnected || (yield this.internalConnect(this.joinParameters.authToken, this.joinParameters.endpoint, this.joinParameters.peerId, this.joinParameters.iceServers));
			let t = (e = this.store.getRoom()) != null && e.joinedAt ? this.signal.isConnected && (yield this.retryPublishIceFailedTask()) : this.signal.isConnected;
			return this.signal.trackUpdate(this.trackStates), t;
		}), this.webrtcInternals = new Ps(this.store, this.eventBus);
		let s = (e, t) => I(this, null, function* () {
			e !== this.state && (this.state = e, yield this.observer.onStateChange(this.state, t));
		});
		this.retryScheduler = new pf(s, this.sendErrorAnalyticsEvent.bind(this)), this.eventBus.statsUpdate.subscribe((e) => {
			let t = e.getLocalPeerStats()?.subscribe?.bitrate || 0;
			this.maxSubscribeBitrate = Math.max(this.maxSubscribeBitrate, t);
		}), this.eventBus.localAudioEnabled.subscribe(({ track: e, enabled: t }) => this.trackUpdate(e, t)), this.eventBus.localVideoEnabled.subscribe(({ track: e, enabled: t }) => this.trackUpdate(e, t));
	}
	getWebsocketEndpoint() {
		if (this.initConfig) return this.initConfig.endpoint;
	}
	getWebrtcInternals() {
		return this.webrtcInternals;
	}
	isFlagEnabled(e) {
		return (this.initConfig?.config?.enabledFlags || []).includes(e);
	}
	setConnectivityListener(e) {
		this.connectivityListener = e;
	}
	preview(e, t, n, r, i = !1, a) {
		return I(this, null, function* () {
			let o = yield this.connect(e, t, n, r, i, a);
			return this.state = "Preview", this.observer.onStateChange(this.state), o;
		});
	}
	join(e, t, n, r, i = !1, a) {
		return I(this, null, function* () {
			L.d(Z, "join: started ⏰");
			try {
				(!this.signal.isConnected || !this.initConfig) && (yield this.connect(e, r, t, n, i, a)), this.validateNotDisconnected("connect"), this.initConfig && (yield this.waitForLocalRoleAvailability(), yield this.createConnectionsAndNegotiateJoin(n, i), this.initStatsAnalytics(), L.d(Z, "✅ join: Negotiated over PUBLISH connection"));
			} catch (t) {
				L.e(Z, `join: failed \u274C [token=${e}]`, t), this.state = "Failed";
				let n = t;
				throw n.isTerminal = n.isTerminal || n.code === 500, yield this.observer.onStateChange(this.state, n), n;
			}
			L.d(Z, "✅ join: successful"), this.state = "Joined", this.observer.onStateChange(this.state);
		});
	}
	connect(e, t, n, r, i = !1, a) {
		return I(this, null, function* () {
			this.setTransportStateForConnect(), this.joinParameters = new cf(e, n, r.name, r.metaData, t, i, a);
			try {
				return yield this.internalConnect(e, t, n, a);
			} catch (r) {
				if (!(r instanceof z)) throw r;
				if ([
					R.WebSocketConnectionErrors.WEBSOCKET_CONNECTION_LOST,
					R.WebSocketConnectionErrors.FAILED_TO_CONNECT,
					R.WebSocketConnectionErrors.ABNORMAL_CLOSE
				].includes(r.code) || r.code.toString().startsWith("5") || r.code.toString().startsWith("429") || r.code === R.APIErrors.ENDPOINT_UNREACHABLE && !navigator.onLine) yield this.retryScheduler.schedule({
					category: 0,
					error: r,
					task: () => I(this, null, function* () {
						return yield this.internalConnect(e, t, n, a), !!(this.initConfig && this.initConfig.endpoint);
					}),
					originalState: this.state,
					changeState: !1
				});
				else throw r;
			}
		});
	}
	leave(e) {
		return I(this, arguments, function* (e, t = "user request") {
			var n, r, i;
			this.retryScheduler.reset(), this.joinParameters = void 0, L.d(Z, "leaving in transport");
			try {
				let a = this.pluginUsageTracker.getPluginUsage("HMSKrispPlugin");
				if (a && this.eventBus.analytics.publish(H.getKrispUsage(a)), this.state = "Leaving", (n = this.publishStatsAnalytics) == null || n.stop(), (r = this.subscribeStatsAnalytics) == null || r.stop(), (i = this.webrtcInternals) == null || i.cleanup(), this.clearPeerConnections(), e) try {
					this.signal.leave(t), L.d(Z, "signal leave done");
				} catch (e) {
					L.w(Z, "failed to send leave on websocket to server", e);
				}
				this.analyticsEventsService.flushFailedClientEvents(), this.analyticsEventsService.reset(), yield this.signal.close();
			} catch (e) {
				this.eventBus.analytics.publish(H.disconnect(e)), L.e(Z, "leave: FAILED ❌", e);
			} finally {
				this.state = "Disconnected", this.observer.onStateChange(this.state);
			}
		});
	}
	publish(e) {
		return I(this, null, function* () {
			var t;
			for (let n of e) try {
				yield this.publishTrack(n), (t = this.connectivityListener) == null || t.onMediaPublished(n);
			} catch (e) {
				this.eventBus.analytics.publish(H.publish({
					devices: this.deviceManager.getDevices(),
					error: e
				}));
			}
		});
	}
	unpublish(e) {
		return I(this, null, function* () {
			for (let t of e) yield this.unpublishTrack(t);
		});
	}
	setSFUNodeId(e) {
		var t, n;
		this.signal.setSfuNodeId(e), this.sfuNodeId ? e && this.sfuNodeId !== e && (this.sfuNodeId = e, this.handleSFUMigration()) : (this.sfuNodeId = e, (t = this.publishConnection) == null || t.setSfuNodeId(e), (n = this.subscribeConnection) == null || n.setSfuNodeId(e));
	}
	handleSFUMigration() {
		return I(this, null, function* () {
			var e, t;
			L.time("sfu migration"), this.clearPeerConnections();
			let n = this.store.getPeerMap();
			this.store.removeRemoteTracks();
			for (let e in n) {
				let t = n[e];
				t.isLocal || (t.audioTrack = void 0, t.videoTrack = void 0, t.auxiliaryTracks = []);
			}
			let r = this.store.getLocalPeer();
			if (!r) return;
			this.createPeerConnections(), this.trackStates.clear(), yield this.negotiateOnFirstPublish();
			let i = /* @__PURE__ */ new Map();
			if (r.audioTrack) {
				let e = r.audioTrack.stream;
				i.get(e.id) || i.set(e.id, new ls(new MediaStream()));
				let t = r.audioTrack.clone(i.get(e.id));
				this.store.removeTrack(r.audioTrack), r.audioTrack.cleanup(), yield this.publishTrack(t), r.audioTrack = t;
			}
			if (r.videoTrack) {
				let e = r.videoTrack.stream;
				i.get(e.id) || i.set(e.id, new ls(new MediaStream())), this.store.removeTrack(r.videoTrack);
				let t = r.videoTrack.clone(i.get(e.id));
				r.videoTrack.cleanup(), yield this.publishTrack(t), r.videoTrack = t;
			}
			let a = [];
			for (; r.auxiliaryTracks.length > 0;) {
				let e = r.auxiliaryTracks.shift();
				if (e) {
					let t = e.stream;
					i.get(t.id) || i.set(t.id, new ls(e.source === "screen" ? t.nativeStream.clone() : new MediaStream())), this.store.removeTrack(e);
					let n = e.clone(i.get(t.id));
					n.type === "video" && n.source === "screen" && (this.screenStream.add(t.nativeStream), this.screenStream.add(n.stream.nativeStream), n.nativeTrack.addEventListener("ended", this.onScreenshareStop)), e.cleanup(), yield this.publishTrack(n), a.push(n);
				}
			}
			r.auxiliaryTracks = a, i.clear(), (t = (e = this.listener)?.onSFUMigration) == null || t.call(e), L.timeEnd("sfu migration");
		});
	}
	trackUpdate(e, t) {
		var n;
		let r = Array.from(this.trackStates.values()).find((t) => e.type === t.type && e.source === t.source);
		if (r) {
			let i = new Ad(F(P({}, r), { mute: !t }));
			this.trackStates.set(r.track_id, i), L.d(Z, "Track Update", this.trackStates, e), this.signal.trackUpdate(new Map([[r.track_id, i]]));
			let a = this.store.getLocalPeer();
			a && t === e.enabled && ((n = this.listener) == null || n.onTrackUpdate(t ? 3 : 2, e, a));
		}
	}
	publishTrack(e) {
		return I(this, null, function* () {
			e.publishedTrackId = e.getTrackIDBeingSent(), L.d(Z, `\u23F3 publishTrack: trackId=${e.trackId}, toPublishTrackId=${e.publishedTrackId}`, `${e}`), this.trackStates.set(e.publishedTrackId, new Ad(e));
			let t = new Promise((e, t) => {
				this.callbacks.set(Jo, {
					promise: {
						resolve: e,
						reject: t
					},
					action: "PUBLISH",
					extra: {}
				});
			}), n = e.stream;
			n.setConnection(this.publishConnection);
			let r = this.store.getSimulcastLayers(e.source);
			n.addTransceiver(e, r), L.time(`publish-${e.trackId}-${e.type}`), yield t, L.timeEnd(`publish-${e.trackId}-${e.type}`), this.store.addTrack(e), yield n.setMaxBitrateAndFramerate(e).then(() => {
				L.d(Z, `Setting maxBitrate=${e.settings.maxBitrate} kpbs${e instanceof qo ? ` and maxFramerate=${e.settings.maxFramerate}` : ""} for ${e.source} ${e.type} ${e.trackId}`);
			}).catch((e) => L.w(Z, "Failed setting maxBitrate and maxFramerate", e)), e.isPublished = !0, L.d(Z, `\u2705 publishTrack: trackId=${e.trackId}`, `${e}`, this.callbacks);
		});
	}
	unpublishTrack(e) {
		return I(this, null, function* () {
			if (L.d(Z, `\u23F3 unpublishTrack: trackId=${e.trackId}`, `${e}`), e.publishedTrackId && this.trackStates.has(e.publishedTrackId)) this.trackStates.delete(e.publishedTrackId);
			else {
				let t = Array.from(this.trackStates.values()).find((t) => e.type === t.type && e.source === t.source);
				t && this.trackStates.delete(t.track_id);
			}
			let t = new Promise((e, t) => {
				this.callbacks.set(Jo, {
					promise: {
						resolve: e,
						reject: t
					},
					action: "UNPUBLISH",
					extra: {}
				});
			});
			e.stream.removeSender(e), yield t, yield e.cleanup(), e.source === "screen" && this.screenStream && this.screenStream.forEach((e) => {
				e.getTracks().forEach((e) => {
					e.stop();
				}), this.screenStream.delete(e);
			}), this.store.removeTrack(e), L.d(Z, `\u2705 unpublishTrack: trackId=${e.trackId}`, this.callbacks);
		});
	}
	clearPeerConnections() {
		return I(this, null, function* () {
			var e, t;
			clearTimeout(this.publishDtlsStateTimer), this.publishDtlsStateTimer = 0, clearTimeout(this.publishDisconnectTimer), this.publishDisconnectTimer = 0, this.lastPublishDtlsState = "new", (e = this.publishConnection) == null || e.close(), (t = this.subscribeConnection) == null || t.close(), this.publishConnection = null, this.subscribeConnection = null;
		});
	}
	waitForLocalRoleAvailability() {
		if (!this.store.hasRoleDetailsArrived()) return new Promise((e) => {
			this.eventBus.policyChange.subscribeOnce(() => e());
		});
	}
	createConnectionsAndNegotiateJoin(e, t = !1) {
		return I(this, null, function* () {
			let n = this.doesLocalPeerNeedWebRTC();
			n && this.createPeerConnections(), this.analyticsTimer.start("join_response_time"), yield this.negotiateJoinWithRetry({
				name: e.name,
				data: e.metaData,
				autoSubscribeVideo: t,
				isWebRTC: n
			}), this.analyticsTimer.end("join_response_time");
		});
	}
	createPeerConnections() {
		var e;
		let t = (e, t, n = !1) => {
			(["disconnected", "failed"].includes(t) ? L.w.bind(L) : L.d.bind(L))(Z, `${Df[e]} ${n ? "ice" : ""} connection state change: ${t}`);
		};
		if (this.initConfig) {
			let e = {
				onRenegotiationNeeded: () => I(this, null, function* () {
					yield this.performPublishRenegotiation();
				}),
				onDTLSTransportStateChange: (e) => {
					if ((e === "failed" ? L.w.bind(L) : L.d.bind(L))(Z, `Publisher on dtls transport state change: ${e}`), !e || this.lastPublishDtlsState === e || (this.lastPublishDtlsState = e, this.publishDtlsStateTimer !== 0 && (clearTimeout(this.publishDtlsStateTimer), this.publishDtlsStateTimer = 0), e !== "connecting" && e !== "failed")) return;
					let t = this.initConfig?.config?.dtlsStateTimeouts?.[e];
					!t || t <= 0 || (this.publishDtlsStateTimer = window.setTimeout(() => {
						let n = this.publishConnection?.nativeConnection.connectionState;
						if (n && e && n === e) {
							let n = B.WebrtcErrors.ICEFailure("PUBLISH", `DTLS transport state ${e} timeout:${t}ms`, !0);
							this.eventBus.analytics.publish(H.disconnect(n)), this.observer.onFailure(n);
						}
					}, t));
				},
				onDTLSTransportError: (e) => {
					L.e(Z, `onDTLSTransportError ${e.name} ${e.message}`, e), this.eventBus.analytics.publish(H.disconnect(e));
				},
				onIceConnectionChange: (e) => I(this, null, function* () {
					t(0, e, !0);
				}),
				onConnectionStateChange: (e) => I(this, null, function* () {
					var n, r;
					t(0, e, !1), e !== "new" && (e === "connected" ? ((n = this.connectivityListener) == null || n.onICESuccess(!0), (r = this.publishConnection) == null || r.handleSelectedIceCandidatePairs()) : e === "failed" ? yield this.handleIceConnectionFailure(0, B.WebrtcErrors.ICEFailure("PUBLISH", `local candidate - ${this.publishConnection?.selectedCandidatePair?.local?.candidate}; remote candidate - ${this.publishConnection?.selectedCandidatePair?.remote?.candidate}`)) : this.publishDisconnectTimer = window.setTimeout(() => {
						this.publishConnection?.connectionState !== "connected" && this.handleIceConnectionFailure(0, B.WebrtcErrors.ICEDisconnected("PUBLISH", `local candidate - ${this.publishConnection?.selectedCandidatePair?.local?.candidate}; remote candidate - ${this.publishConnection?.selectedCandidatePair?.remote?.candidate}`));
					}, 5e3));
				}),
				onIceCandidate: (e) => {
					var t;
					(t = this.connectivityListener) == null || t.onICECandidate(e, !0);
				},
				onSelectedCandidatePairChange: (e) => {
					var t;
					(t = this.connectivityListener) == null || t.onSelectedICECandidatePairChange(e, !0);
				}
			}, n = {
				onApiChannelMessage: (e) => {
					this.observer.onNotification(JSON.parse(e));
				},
				onTrackAdd: (e) => {
					L.d(Z, "[Subscribe] onTrackAdd", `${e}`), this.observer.onTrackAdd(e);
				},
				onTrackRemove: (e) => {
					L.d(Z, "[Subscribe] onTrackRemove", `${e}`), this.observer.onTrackRemove(e);
				},
				onIceConnectionChange: (e) => I(this, null, function* () {
					var n;
					if (t(1, e, !0), e === "connected") {
						let e = this.callbacks.get(Xo);
						this.callbacks.delete(Xo), (n = this.connectivityListener) == null || n.onICESuccess(!1), e && e.promise.resolve(!0);
					}
				}),
				onConnectionStateChange: (e) => I(this, null, function* () {
					var n;
					if (t(1, e, !1), e === "failed") yield this.handleIceConnectionFailure(1, B.WebrtcErrors.ICEFailure("SUBSCRIBE", `local candidate - ${this.subscribeConnection?.selectedCandidatePair?.local?.candidate}; remote candidate - ${this.subscribeConnection?.selectedCandidatePair?.remote?.candidate}`));
					else if (e === "disconnected") setTimeout(() => {
						this.subscribeConnection?.connectionState === "disconnected" && this.handleIceConnectionFailure(1, B.WebrtcErrors.ICEDisconnected("SUBSCRIBE", `local candidate - ${this.subscribeConnection?.selectedCandidatePair?.local?.candidate}; remote candidate - ${this.subscribeConnection?.selectedCandidatePair?.remote?.candidate}`));
					}, 5e3);
					else if (e === "connected") {
						(n = this.subscribeConnection) == null || n.handleSelectedIceCandidatePairs();
						let e = this.callbacks.get(Xo);
						this.callbacks.delete(Xo), e && e.promise.resolve(!0);
					}
				}),
				onIceCandidate: (e) => {
					var t;
					(t = this.connectivityListener) == null || t.onICECandidate(e, !1);
				},
				onSelectedCandidatePairChange: (e) => {
					var t;
					(t = this.connectivityListener) == null || t.onSelectedICECandidatePairChange(e, !1);
				}
			};
			this.publishConnection ||= new Nf(this.signal, this.initConfig.rtcConfiguration, e), this.subscribeConnection ||= new Ff(this.signal, this.initConfig.rtcConfiguration, this.isFlagEnabled.bind(this), n);
		}
		(e = this.webrtcInternals) == null || e.setPeerConnections({
			publish: this.publishConnection?.nativeConnection,
			subscribe: this.subscribeConnection?.nativeConnection
		});
	}
	negotiateJoinWithRetry(e) {
		return I(this, arguments, function* ({ name: e, data: t, autoSubscribeVideo: n, isWebRTC: r = !0 }) {
			try {
				yield this.negotiateJoin({
					name: e,
					data: t,
					autoSubscribeVideo: n,
					isWebRTC: r
				});
			} catch (i) {
				L.e(Z, "Join negotiation failed ❌", i);
				let a = i instanceof z ? i : B.WebsocketMethodErrors.ServerErrors(500, "JOIN", `Websocket join error - ${i.message}`), o = parseInt(`${a.code / 100}`) === 5 || [R.WebSocketConnectionErrors.WEBSOCKET_CONNECTION_LOST, 429].includes(a.code);
				if (a.code === 410 && (a.isTerminal = !0), o) this.joinRetryCount = 0, a.isTerminal = !1, yield this.retryScheduler.schedule({
					category: 2,
					error: a,
					task: () => I(this, null, function* () {
						return this.joinRetryCount++, yield this.negotiateJoin({
							name: e,
							data: t,
							autoSubscribeVideo: n,
							isWebRTC: r
						});
					}),
					originalState: "Joined",
					changeState: !1
				});
				else throw i;
			}
		});
	}
	negotiateJoin(e) {
		return I(this, arguments, function* ({ name: e, data: t, autoSubscribeVideo: n, isWebRTC: r = !0 }) {
			return r ? yield this.negotiateJoinWebRTC({
				name: e,
				data: t,
				autoSubscribeVideo: n
			}) : yield this.negotiateJoinNonWebRTC({
				name: e,
				data: t,
				autoSubscribeVideo: n
			});
		});
	}
	negotiateJoinWebRTC(e) {
		return I(this, arguments, function* ({ name: e, data: t, autoSubscribeVideo: n }) {
			if (L.d(Z, "⏳ join: Negotiating over PUBLISH connection"), !this.publishConnection) return L.e(Z, "Publish peer connection not found, cannot negotiate"), !1;
			let r = yield this.publishConnection.createOffer();
			yield this.publishConnection.setLocalDescription(r);
			let i = this.isFlagEnabled("subscribeDegradation"), a = this.isFlagEnabled("simulcast"), o = this.isFlagEnabled("onDemandTracks"), s = yield this.signal.join(e, t, !n, i, a, o, r);
			this.setSFUNodeId(s?.sfu_node_id), yield this.publishConnection.setRemoteDescription(s);
			for (let e of this.publishConnection.candidates) yield this.publishConnection.addIceCandidate(e);
			return this.publishConnection.initAfterJoin(), !!s;
		});
	}
	negotiateJoinNonWebRTC(e) {
		return I(this, arguments, function* ({ name: e, data: t, autoSubscribeVideo: n }) {
			L.d(Z, "⏳ join: Negotiating Non-WebRTC");
			let r = this.isFlagEnabled("subscribeDegradation"), i = this.isFlagEnabled("simulcast"), a = this.isFlagEnabled("onDemandTracks"), o = yield this.signal.join(e, t, !n, r, i, a);
			return this.setSFUNodeId(o?.sfu_node_id), !!o;
		});
	}
	negotiateOnFirstPublish() {
		return I(this, null, function* () {
			if (L.d(Z, "⏳ Negotiating offer over PUBLISH connection"), !this.publishConnection) return L.e(Z, "Publish peer connection not found, cannot negotiate"), !1;
			try {
				let e = yield this.publishConnection.createOffer(this.trackStates);
				yield this.publishConnection.setLocalDescription(e);
				let t = yield this.signal.offer(e, this.trackStates);
				yield this.publishConnection.setRemoteDescription(t);
				for (let e of this.publishConnection.candidates) yield this.publishConnection.addIceCandidate(e);
				return this.publishConnection.initAfterJoin(), !!t;
			} catch (e) {
				if (e instanceof z && e.code === 421) return !0;
				throw e;
			}
		});
	}
	performPublishRenegotiation(e) {
		return I(this, null, function* () {
			L.d(Z, "⏳ [role=PUBLISH] onRenegotiationNeeded START", this.trackStates);
			let t = this.callbacks.get(Jo);
			if (!t) {
				L.w(Z, "no callback found for renegotiation");
				return;
			}
			if (!this.publishConnection) {
				L.e(Z, "Publish peer connection not found, cannot renegotiate");
				return;
			}
			try {
				let n = yield this.publishConnection.createOffer(this.trackStates, e);
				yield this.publishConnection.setLocalDescription(n), L.time("renegotiation-offer-exchange");
				let r = yield this.signal.offer(n, this.trackStates);
				this.callbacks.delete(Jo), L.timeEnd("renegotiation-offer-exchange"), yield this.publishConnection.setRemoteDescription(r), t.promise.resolve(!0), L.d(Z, "[role=PUBLISH] onRenegotiationNeeded DONE ✅");
			} catch (e) {
				let n;
				n = e instanceof z ? e : B.GenericErrors.Unknown("PUBLISH", e.message), n.code === 421 ? t.promise.resolve(!0) : t.promise.reject(n), L.d(Z, "[role=PUBLISH] onRenegotiationNeeded FAILED ❌");
			}
		});
	}
	handleIceConnectionFailure(e, t) {
		return I(this, null, function* () {
			this.retryScheduler.isTaskInProgress(4) || (e === 0 ? this.retryScheduler.schedule({
				category: 3,
				error: t,
				task: this.retryPublishIceFailedTask,
				originalState: "Joined"
			}) : this.retryScheduler.schedule({
				category: 4,
				error: t,
				task: this.retrySubscribeIceFailedTask,
				originalState: "Joined"
			}));
		});
	}
	internalConnect(e, t, n, r) {
		return I(this, null, function* () {
			var i, a;
			L.d(Z, "connect: started ⏰");
			let o = /* @__PURE__ */ new Date();
			try {
				this.analyticsTimer.start("init_response_time"), this.initConfig = yield Rf.fetchInitConfig({
					token: e,
					peerId: n,
					userAgent: this.store.getUserAgent(),
					initEndpoint: t,
					iceServers: r
				}), (i = this.connectivityListener) == null || i.onInitSuccess(this.initConfig.endpoint);
				let o = this.store.getRoom();
				return o && (o.effectsKey = this.initConfig.config.vb?.effectsKey, o.isEffectsEnabled = this.isFlagEnabled("effectsSDKEnabled"), o.disableNoneLayerRequest = this.isFlagEnabled("disableNoneLayerRequest"), o.isVBEnabled = this.isFlagEnabled("vb"), o.isHipaaEnabled = this.isFlagEnabled("hipaa"), o.isNoiseCancellationEnabled = this.isFlagEnabled("noiseCancellation")), this.analyticsTimer.end("init_response_time"), kd.setWebsocketEndpoint(this.initConfig.endpoint), this.validateNotDisconnected("post init"), yield this.openSignal(e, n), this.observer.onConnected(), (a = this.connectivityListener) == null || a.onSignallingSuccess(), this.store.setSimulcastEnabled(this.isFlagEnabled("simulcast")), L.d(Z, "Adding Analytics Transport: JsonRpcSignal"), this.analyticsEventsService.setTransport(this.analyticsSignalTransport), this.analyticsEventsService.flush(), this.initConfig;
			} catch (e) {
				throw this.state !== "Reconnecting" && this.eventBus.analytics.publish(H.connect(e, this.getAdditionalAnalyticsProperties(), o, /* @__PURE__ */ new Date(), t)), L.e(Z, "❌ internal connect: failed", e), e;
			}
		});
	}
	validateNotDisconnected(e) {
		if (this.state === "Disconnected") throw L.w(Z, "aborting join as transport state is disconnected"), B.GenericErrors.ValidationFailed(`leave called before join could complete - stage=${e}`);
	}
	openSignal(e, t) {
		return I(this, null, function* () {
			if (!this.initConfig) throw B.APIErrors.InitConfigNotAvailable("INIT", "Init Config not found");
			L.d(Z, "⏳ internal connect: connecting to ws endpoint", this.initConfig.endpoint);
			let n = new URL(this.initConfig.endpoint);
			n.searchParams.set("peer", t), n.searchParams.set("token", e), n.searchParams.set("user_agent_v2", this.store.getUserAgent()), n.searchParams.set("protocol_version", es), n.searchParams.set("protocol_spec", ts), this.endpoint = n.toString(), this.analyticsTimer.start("ws_connect_time"), yield this.signal.open(this.endpoint), this.analyticsTimer.end("ws_connect_time"), this.analyticsTimer.start("on_policy_change_time"), this.analyticsTimer.start("room_state_time"), L.d(Z, "✅ internal connect: connected to ws endpoint");
		});
	}
	initStatsAnalytics() {
		var e, t;
		this.isFlagEnabled("publishStats") && (this.publishStatsAnalytics = new Cf(this.store, this.eventBus, this.getValueFromInitConfig("publishStats", "maxSampleWindowSize", 30), this.getValueFromInitConfig("publishStats", "maxSamplePushInterval", 300)), (e = this.getWebrtcInternals()) == null || e.start()), this.isFlagEnabled("subscribeStats") && (this.subscribeStatsAnalytics = new Tf(this.store, this.eventBus, this.getValueFromInitConfig("subscribeStats", "maxSampleWindowSize", 10), this.getValueFromInitConfig("subscribeStats", "maxSamplePushInterval", 60)), (t = this.getWebrtcInternals()) == null || t.start());
	}
	getValueFromInitConfig(e, t, n) {
		return this.initConfig?.config[e]?.[t] || n;
	}
	doesRoleNeedWebRTC(e) {
		if (!this.isFlagEnabled("nonWebRTCDisableOffer")) return !0;
		let t = !!(e.publishParams.allowed && e.publishParams.allowed?.length > 0), n = !!(e.subscribeParams.subscribeToRoles && e.subscribeParams.subscribeToRoles?.length > 0);
		return t || n;
	}
	doesLocalPeerNeedWebRTC() {
		let e = this.store.getLocalPeer()?.role;
		return e ? this.doesRoleNeedWebRTC(e) : !0;
	}
	setTransportStateForConnect() {
		if (this.state === "Failed" && (this.state = "Disconnected"), this.state !== "Disconnected" && this.state !== "Reconnecting") throw B.WebsocketMethodErrors.AlreadyJoined("JOIN", `Cannot join a meeting in ${this.state} state`);
		this.state === "Disconnected" && (this.state = "Connecting", this.observer.onStateChange(this.state));
	}
	sendErrorAnalyticsEvent(e, t) {
		let n = this.getAdditionalAnalyticsProperties(), r;
		switch (t) {
			case 0:
				r = H.connect(e, n);
				break;
			case 1:
				r = H.disconnect(e, n);
				break;
			case 2:
				r = H.join({
					error: e,
					time: this.analyticsTimer.getTimeTaken("join_time"),
					init_response_time: this.analyticsTimer.getTimeTaken("init_response_time"),
					ws_connect_time: this.analyticsTimer.getTimeTaken("ws_connect_time"),
					on_policy_change_time: this.analyticsTimer.getTimeTaken("on_policy_change_time"),
					local_audio_track_time: this.analyticsTimer.getTimeTaken("local_audio_track_time"),
					local_video_track_time: this.analyticsTimer.getTimeTaken("local_video_track_time"),
					retries_join: this.joinRetryCount
				});
				break;
			case 3:
				r = H.publish({ error: e });
				break;
			case 4:
				r = H.subscribeFail(e);
				break;
		}
		this.eventBus.analytics.publish(r);
	}
	getSubscribeConnection() {
		return this.subscribeConnection;
	}
	getAdditionalAnalyticsProperties() {
		return {
			network_info: Hf(),
			document_hidden: typeof document < "u" && document.hidden,
			num_degraded_tracks: this.store.getRemoteVideoTracks().filter((e) => e.degraded).length,
			bitrate: {
				publish: (this.getWebrtcInternals()?.getCurrentStats())?.getLocalPeerStats()?.publish?.bitrate,
				subscribe: (this.getWebrtcInternals()?.getCurrentStats())?.getLocalPeerStats()?.subscribe?.bitrate
			},
			max_sub_bitrate: this.maxSubscribeBitrate,
			recent_pong_response_times: this.signal.getPongResponseTimes(),
			transport_state: this.state
		};
	}
};
function Wf(e) {
	if (!e || e.length === 0) throw B.APIErrors.InvalidTokenFormat("INIT", "Token cannot be an empty string or undefined or null");
	let t = e.split(".");
	if (t.length !== 3) throw B.APIErrors.InvalidTokenFormat("INIT", "Expected 3 '.' separate fields - header, payload and signature respectively");
	let n = atob(t[1]);
	try {
		let e = JSON.parse(n);
		return {
			roomId: e.room_id,
			userId: e.user_id,
			role: e.role
		};
	} catch (e) {
		throw B.APIErrors.InvalidTokenFormat("INIT", `couldn't parse to json - ${e.message}`);
	}
}
var Gf = {
	published: !1,
	isInitialised: !1,
	isReconnecting: !1,
	isPreviewInProgress: !1,
	isPreviewCalled: !1,
	isJoinInProgress: !1,
	deviceManagersInitialised: !1
}, Kf = class {
	constructor() {
		this.TAG = "[HMSSdk]:", this.transportState = "Disconnected", this.analyticsTimer = new Ba(), this.sdkState = P({}, Gf), this.isDiagnostics = !1, this.playlistSettings = {
			video: { bitrate: rs },
			audio: { bitrate: is }
		}, this.handleAutoplayError = (e) => {
			var t, n;
			(n = (t = this.errorListener)?.onError) == null || n.call(t, e);
		}, this.observer = {
			onNotification: (e) => {
				var t;
				if (e.method === "on-peer-leave-request") {
					this.handlePeerLeaveRequest(e.params);
					return;
				}
				switch (e.method) {
					case "on-policy-change":
						this.analyticsTimer.end("on_policy_change_time");
						break;
					case "peer-list":
						this.analyticsTimer.end("peer_list_time"), this.sendJoinAnalyticsEvent(this.sdkState.isPreviewCalled);
						break;
					case "room-state":
						this.analyticsTimer.end("room_state_time");
						break;
					default:
				}
				(t = this.notificationManager) == null || t.handleNotification(e, this.sdkState.isReconnecting);
			},
			onConnected: () => {
				this.initNotificationManager();
			},
			onTrackAdd: (e) => {
				var t;
				(t = this.notificationManager) == null || t.handleTrackAdd(e);
			},
			onTrackRemove: (e) => {
				var t;
				(t = this.notificationManager) == null || t.handleTrackRemove(e);
			},
			onFailure: (e) => {
				var t;
				(t = this.errorListener) == null || t.onError(e);
			},
			onStateChange: (e, t) => I(this, null, function* () {
				var n, r;
				let i = (e) => I(this, null, function* () {
					var t, n;
					yield this.internalLeave(!0, e), !this.sdkState.isPreviewInProgress && !this.sdkState.isJoinInProgress && ((n = (t = this.errorListener)?.onError) == null || n.call(t, e)), this.sdkState.isReconnecting = !1;
				});
				switch (e) {
					case "Preview":
					case "Joined":
						this.initNotificationManager(), this.transportState === "Reconnecting" && ((n = this.listener) == null || n.onReconnected());
						break;
					case "Failed":
						yield i(t);
						break;
					case "Reconnecting":
						this.sdkState.isReconnecting = !0, (r = this.listener) == null || r.onReconnecting(t);
						break;
				}
				this.transportState = e, L.d(this.TAG, "Transport State Change", this.transportState);
			})
		}, this.handlePeerLeaveRequest = (e) => {
			var t;
			let n = e.requested_by ? this.store.getPeerById(e.requested_by) : void 0, r = {
				roomEnded: e.room_end,
				reason: e.reason,
				requestedBy: n
			};
			(t = this.listener) == null || t.onRemovedFromRoom(r), this.internalLeave(!1);
		}, this.handlePreviewError = (e) => {
			var t;
			this.analyticsTimer.end("preview_time"), e && ((t = this.errorListener) == null || t.onError(e)), this.sendPreviewAnalyticsEvent(e), this.sdkState.isPreviewInProgress = !1;
		}, this.handleDeviceChange = (e) => {
			var t, n;
			e.isUserSelection || (L.d(this.TAG, "Device Change event", e), (n = (t = this.deviceChangeListener)?.onDeviceChange) == null || n.call(t, e), (() => {
				var t, n;
				if (e.error && e.type) {
					let r = e.type.includes("audio") ? this.localPeer?.audioTrack : this.localPeer?.videoTrack;
					(t = this.errorListener) == null || t.onError(e.error), [
						R.TracksErrors.CANT_ACCESS_CAPTURE_DEVICE,
						R.TracksErrors.DEVICE_IN_USE,
						R.TracksErrors.DEVICE_NOT_AVAILABLE
					].includes(e.error.code) && r && (r.setEnabled(!1), (n = this.listener) == null || n.onTrackUpdate(2, r, this.localPeer));
				}
			})());
		}, this.handleAudioPluginError = (e) => {
			var t;
			L.e(this.TAG, "Audio Plugin Error event", e), (t = this.errorListener) == null || t.onError(e);
		}, this.handleError = (e) => {
			var t;
			L.e(this.TAG, e), (t = this.errorListener) == null || t.onError(e);
		}, this.handleLocalRoleUpdate = (e) => I(this, [e], function* ({ oldRole: e, newRole: t }) {
			this.deviceManager.currentSelection = this.deviceManager.getCurrentSelection(), yield this.transport.handleLocalRoleUpdate({
				oldRole: e,
				newRole: t
			}), yield this.roleChangeManager?.handleLocalPeerRoleUpdate({
				oldRole: e,
				newRole: t
			}), yield this.interactivityCenter.whiteboard.handleLocalRoleUpdate();
		}), this.unpauseRemoteVideoTracks = () => {
			this.store.getRemoteVideoTracks().forEach((e) => e.handleTrackUnmute());
		}, this.sendAudioPresenceFailed = () => {
			var e;
			let t = B.TracksErrors.NoAudioDetected("PREVIEW");
			L.w(this.TAG, "Audio Presence Failure", this.transportState, t), this.isDiagnostics && ((e = this.listener) == null || e.onError(t));
		}, this.sendJoinAnalyticsEvent = (e = !1, t) => {
			this.eventBus.analytics.publish(H.join(F(P({ error: t }, this.analyticsTimer.getTimes()), {
				time: this.analyticsTimer.getTimeTaken("join_time"),
				is_preview_called: e,
				retries_join: this.transport.joinRetryCount
			})));
		}, this.sendPreviewAnalyticsEvent = (e) => {
			this.eventBus.analytics.publish(H.preview(F(P({ error: e }, this.analyticsTimer.getTimes()), { time: this.analyticsTimer.getTimeTaken("preview_time") })));
		}, this.sendAnalyticsEvent = (e) => {
			this.isDiagnostics || this.analyticsEventsService.queue(e).flush();
		};
	}
	setSessionPeerInfo(e, t) {
		let n = this.store.getRoom();
		if (!t || !n) {
			L.e(this.TAG, "setSessionPeerInfo> Local peer or room is undefined");
			return;
		}
		this.sessionPeerInfo = {
			peer: {
				peer_id: t.peerId,
				role: t.role?.name,
				joined_at: t.joinedAt?.valueOf() || 0,
				room_name: n.name,
				session_started_at: n.startedAt?.valueOf() || 0,
				user_data: t.customerUserId,
				user_name: t.name,
				template_id: n.templateId,
				session_id: n.sessionId,
				token: this.store.getConfig()?.authToken
			},
			agent: this.store.getUserAgent(),
			device_id: ba(),
			cluster: { websocket_url: e },
			timestamp: Date.now()
		};
	}
	initNotificationManager() {
		this.notificationManager ||= new of(this.store, this.eventBus, this.transport, this.listener, this.audioListener);
	}
	initStoreAndManagers(e) {
		var t, n;
		if (this.listener = e, this.errorListener = e, this.deviceChangeListener = e, (t = this.store) == null || t.setErrorListener(this.errorListener), this.sdkState.isInitialised) {
			(n = this.notificationManager) == null || n.setListener(this.listener), this.audioSinkManager.setListener(this.listener), this.interactivityCenter.setListener(this.listener), this.transport.setListener(this.listener);
			return;
		}
		this.sdkState.isInitialised = !0, this.store = new jd(), this.store.setErrorListener(this.errorListener), this.eventBus = new Bd(), this.pluginUsageTracker = new Id(this.eventBus), this.wakeLockManager = new Md(), this.networkTestManager = new Dd(this.eventBus, this.listener), this.playlistManager = new Ks(this, this.eventBus), this.deviceManager = new Ld(this.store, this.eventBus), this.audioSinkManager = new Fd(this.store, this.deviceManager, this.eventBus), this.audioOutput = new Rd(this.deviceManager, this.audioSinkManager), this.audioSinkManager.setListener(this.listener), this.eventBus.autoplayError.subscribe(this.handleAutoplayError), this.localTrackManager = new po(this.store, this.observer, this.deviceManager, this.eventBus, this.analyticsTimer), this.analyticsEventsService = new Nd(this.store), this.transport = new Uf(this.observer, this.deviceManager, this.store, this.eventBus, this.analyticsEventsService, this.analyticsTimer, this.pluginUsageTracker), "onInitSuccess" in e && this.transport.setConnectivityListener(e), this.sessionStore = new sf(this.transport), this.interactivityCenter = new Qd(this.transport, this.store, this.listener), this.eventBus.analytics.subscribe(this.sendAnalyticsEvent), this.eventBus.deviceChange.subscribe(this.handleDeviceChange), this.eventBus.localVideoUnmutedNatively.subscribe(this.unpauseRemoteVideoTracks), this.eventBus.localAudioUnmutedNatively.subscribe(this.unpauseRemoteVideoTracks), this.eventBus.audioPluginFailed.subscribe(this.handleAudioPluginError), this.eventBus.error.subscribe(this.handleError);
	}
	validateJoined(e) {
		if (!this.localPeer) throw B.GenericErrors.NotConnected("VALIDATION", `Not connected - ${e}`);
	}
	sendHLSAnalytics(e) {
		this.sendAnalyticsEvent(H.hlsPlayerError(e));
	}
	refreshDevices() {
		return I(this, null, function* () {
			this.validateJoined("refreshDevices"), yield this.deviceManager.init(!0);
		});
	}
	getWebrtcInternals() {
		return this.transport?.getWebrtcInternals();
	}
	getDebugInfo() {
		if (!this.transport) throw L.e(this.TAG, "Transport is not defined"), /* @__PURE__ */ Error("getDebugInfo can only be called after join");
		return {
			websocketURL: this.transport.getWebsocketEndpoint(),
			enabledFlags: Object.values(Yd).filter((e) => this.transport.isFlagEnabled(e)),
			initEndpoint: this.store.getConfig()?.initEndpoint
		};
	}
	getSessionStore() {
		return this.sessionStore;
	}
	getPlaylistManager() {
		return this.playlistManager;
	}
	getRecordingState() {
		return this.store.getRoom()?.recording;
	}
	getRTMPState() {
		return this.store.getRoom()?.rtmp;
	}
	getHLSState() {
		return this.store.getRoom()?.hls;
	}
	getTranscriptionState() {
		return this.store.getRoom()?.transcriptions;
	}
	getTemplateAppData() {
		return this.store.getTemplateAppData();
	}
	getInteractivityCenter() {
		return this.interactivityCenter;
	}
	getPeerListIterator(e) {
		return new Bs(this.transport, this.store, e);
	}
	updatePlaylistSettings(e) {
		e.video && Object.assign(this.playlistSettings.video, e.video), e.audio && Object.assign(this.playlistSettings.audio, e.audio);
	}
	get localPeer() {
		return this.store?.getLocalPeer();
	}
	preview(e, t) {
		return I(this, null, function* () {
			if (wa(), Ca(), this.sdkState.isPreviewInProgress) return Promise.reject(B.GenericErrors.PreviewAlreadyInProgress("PREVIEW", "Preview already called"));
			if (["Joined", "Reconnecting"].includes(this.transportState)) return this.midCallPreview(e.asRole, e.settings);
			this.analyticsTimer.start("preview_time"), this.setUpPreview(e, t);
			let n = !1, r = !1, i = setTimeout(() => {
				var e, t;
				(!n || !r) && ((t = (e = this.listener)?.onNetworkQuality) == null || t.call(e, -1));
			}, 3e3);
			return new Promise((a, o) => {
				this.eventBus.policyChange.subscribeOnce(() => I(this, null, function* () {
					var n;
					if (this.localPeer) {
						let t = e.asRole && this.store.getPolicyForRole(e.asRole);
						this.localPeer.asRole = t || this.localPeer.role;
					}
					let r = yield this.localTrackManager.getTracksToPublish(e.settings);
					r.forEach((e) => {
						var t;
						if (this.setLocalPeerTrack(e), e.isTrackNotPublishing()) {
							let n = B.TracksErrors.NoDataInTrack(`${e.type} track has no data. muted: ${e.nativeTrack.muted}, readyState: ${e.nativeTrack.readyState}`);
							L.e(this.TAG, n), this.sendAnalyticsEvent(H.publish({
								devices: this.deviceManager.getDevices(),
								error: n
							})), (t = this.listener) == null || t.onError(n);
						}
					}), (n = this.localPeer) != null && n.audioTrack && this.initPreviewTrackAudioLevelMonitor(), yield this.initDeviceManagers(), this.sdkState.isPreviewInProgress = !1, this.analyticsTimer.end("preview_time");
					let i = this.store.getRoom();
					i && t.onPreview(i, r), this.sendPreviewAnalyticsEvent(), a();
				})), this.eventBus.leave.subscribeOnce(this.handlePreviewError), this.eventBus.leave.subscribeOnce((e) => o(e)), this.transport.preview(e.authToken, e.initEndpoint, this.localPeer.peerId, {
					name: e.userName,
					metaData: e.metaData || ""
				}, e.autoVideoSubscribe, e.iceServers).then((t) => {
					n = !0, clearTimeout(i), t && e.captureNetworkQualityInPreview && this.networkTestManager.start(t.config?.networkHealth).then(() => {
						r = !0;
					});
				}).catch((e) => {
					this.handlePreviewError(e), o(e);
				});
			});
		});
	}
	midCallPreview(e, t) {
		return I(this, null, function* () {
			var n, r;
			if (!this.localPeer || this.transportState !== "Joined") throw B.GenericErrors.NotConnected("VALIDATION", "Not connected - midCallPreview");
			let i = e && this.store.getPolicyForRole(e);
			if (!i) throw B.GenericErrors.InvalidRole("PREVIEW", `role ${e} does not exist in policy`);
			this.localPeer.asRole = i;
			let a = yield this.localTrackManager.getTracksToPublish(t);
			a.forEach((e) => this.setLocalPeerTrack(e)), (n = this.localPeer) != null && n.audioTrack && this.initPreviewTrackAudioLevelMonitor(), yield this.initDeviceManagers(), (r = this.listener) == null || r.onPreview(this.store.getRoom(), a);
		});
	}
	cancelMidCallPreview() {
		return I(this, null, function* () {
			var e, t;
			if ((!this.localPeer || !this.localPeer.isInPreview()) && L.w(this.TAG, "Cannot cancel mid call preview as preview is not in progress"), (e = this.localPeer) != null && e.asRole && this.localPeer.role) {
				let e = this.localPeer.asRole, n = this.localPeer.role;
				delete this.localPeer.asRole, yield this.roleChangeManager?.diffRolesAndPublishTracks({
					oldRole: e,
					newRole: n
				}), (t = this.listener) == null || t.onPeerUpdate(8, this.localPeer);
			}
		});
	}
	join(e, t) {
		return I(this, null, function* () {
			var n, r, i;
			if (wa(), Ca(), this.sdkState.isPreviewInProgress) throw B.GenericErrors.NotReady("JOIN", "Preview is in progress, can't join");
			(n = this.eventBus?.leave) == null || n.unsubscribe(this.handlePreviewError), this.analyticsTimer.start("join_time"), this.sdkState.isJoinInProgress = !0;
			let { roomId: a, userId: o, role: s } = Wf(e.authToken), c = this.localPeer?.asRole?.name || this.localPeer?.role?.name;
			(r = this.networkTestManager) == null || r.stop(), this.commonSetup(e, a, t), this.removeDevicesFromConfig(e), this.store.setConfig(e), this.store.createAndSetUserAgent(this.frameworkInfo), oo.resumeContext();
			let l = this.store.getConfig();
			l != null && l.autoManageWakeLock && this.wakeLockManager.acquireLock(), this.localPeer ? (this.localPeer.name = e.userName, this.localPeer.role = this.store.getPolicyForRole(s), this.localPeer.customerUserId = o, this.localPeer.metadata = e.metaData, delete this.localPeer.asRole) : this.createAndAddLocalPeerToStore(e, s, o), this.roleChangeManager = new Od(this.store, this.transport, this.deviceManager, this.getAndPublishTracks.bind(this), this.removeTrack.bind(this), this.listener), this.eventBus.localRoleUpdate.subscribe(this.handleLocalRoleUpdate), L.d(this.TAG, `\u23F3 Joining room ${a}`), L.time(`join-room-${a}`);
			try {
				yield this.transport.join(e.authToken, this.localPeer.peerId, {
					name: e.userName,
					metaData: e.metaData
				}, e.initEndpoint, e.autoVideoSubscribe, e.iceServers), L.d(this.TAG, `\u2705 Joined room ${a}`), this.analyticsTimer.start("peer_list_time"), yield this.notifyJoin(), this.sdkState.isJoinInProgress = !1, yield this.publish(e.settings, c);
			} catch (e) {
				throw this.analyticsTimer.end("join_time"), this.sdkState.isJoinInProgress = !1, (i = this.listener) == null || i.onError(e), this.sendJoinAnalyticsEvent(this.sdkState.isPreviewCalled, e), L.e(this.TAG, "Unable to join room", e), e;
			}
			L.timeEnd(`join-room-${a}`);
		});
	}
	stringifyMetadata(e) {
		e.metaData && typeof e.metaData != "string" ? e.metaData = JSON.stringify(e.metaData) : e.metaData ||= "";
	}
	cleanup() {
		var e, t, n;
		this.cleanDeviceManagers(), this.eventBus.analytics.unsubscribe(this.sendAnalyticsEvent), this.eventBus.localVideoUnmutedNatively.unsubscribe(this.unpauseRemoteVideoTracks), this.eventBus.localAudioUnmutedNatively.unsubscribe(this.unpauseRemoteVideoTracks), this.eventBus.error.unsubscribe(this.handleError), this.analyticsTimer.cleanup(), Na.cleanup(), this.playlistManager.cleanup(), (e = this.wakeLockManager) == null || e.cleanup(), po.cleanup(), this.notificationManager = void 0, L.cleanup(), this.sdkState = P({}, Gf), this.localPeer && ((t = this.localPeer.audioTrack) == null || t.cleanup(), this.localPeer.audioTrack = void 0, (n = this.localPeer.videoTrack) == null || n.cleanup(), this.localPeer.videoTrack = void 0), this.store.cleanup(), this.listener = void 0, this.roleChangeManager && this.eventBus.localRoleUpdate.unsubscribe(this.handleLocalRoleUpdate);
	}
	leave(e) {
		return this.internalLeave(e);
	}
	internalLeave(e = !0, t) {
		return I(this, null, function* () {
			var n;
			let r = this.store?.getRoom();
			if (r) {
				for (; (this.sdkState.isPreviewInProgress || this.sdkState.isJoinInProgress) && !(t != null && t.isTerminal);) yield xo(100);
				let i = r.id;
				this.setSessionPeerInfo(this.transport.getWebsocketEndpoint() || "", this.localPeer), (n = this.networkTestManager) == null || n.stop(), this.eventBus.leave.publish(t);
				let a = this.localPeer?.peerId;
				L.d(this.TAG, `\u23F3 Leaving room ${i}, peerId=${a}`), yield this.transport?.leave(e, t ? "sdk request" : "user request"), this.cleanup(), L.d(this.TAG, `\u2705 Left room ${i}, peerId=${a}`);
			}
		});
	}
	getAuthTokenByRoomCode(e, t) {
		return I(this, null, function* () {
			let n = (t || {}).endpoint || "https://auth.100ms.live/v2/token";
			this.analyticsTimer.start("GET_TOKEN");
			let r = yield Cd(n, {
				method: "POST",
				body: JSON.stringify({
					code: e.roomCode,
					user_id: e.userId
				})
			}, [
				429,
				500,
				501,
				502,
				503,
				504,
				505,
				506,
				507,
				508,
				509,
				510,
				511
			]), i = yield r.json();
			if (this.analyticsTimer.end("GET_TOKEN"), !r.ok) throw B.APIErrors.ServerErrors(i.code, "GET_TOKEN", i.message, !1);
			let { token: a } = i;
			if (!a) throw Error(i.message);
			return a;
		});
	}
	getLocalPeer() {
		return this.store.getLocalPeer();
	}
	getPeers() {
		return this.store.getPeers();
	}
	getPeerMap() {
		return this.store.getPeerMap();
	}
	getAudioOutput() {
		return this.audioOutput;
	}
	sendMessage(e, t) {
		this.sendMessageInternal({
			message: t,
			type: e
		});
	}
	sendBroadcastMessage(e, t) {
		return I(this, null, function* () {
			return yield this.sendMessageInternal({
				message: e,
				type: t
			});
		});
	}
	sendGroupMessage(e, t, n) {
		return I(this, null, function* () {
			let r = this.store.getKnownRoles();
			if ((t.filter((e) => r[e.name]) || []).length === 0) throw B.GenericErrors.ValidationFailed("No valid role is present", t);
			return yield this.sendMessageInternal({
				message: e,
				recipientRoles: t,
				type: n
			});
		});
	}
	sendDirectMessage(e, t, n) {
		return I(this, null, function* () {
			var r;
			if (this.localPeer?.peerId === t) throw B.GenericErrors.ValidationFailed("Cannot send message to self");
			let i = !!((r = this.store.getRoom()) != null && r.large_room_optimization), a = this.store.getPeerById(t);
			if (!a) if (i) {
				let e = yield this.transport.signal.getPeer({ peer_id: t });
				if (!e) throw B.GenericErrors.ValidationFailed("Invalid peer - peer not present in the room", t);
				a = zs(e, this.store);
			} else throw B.GenericErrors.ValidationFailed("Invalid peer - peer not present in the room", t);
			return yield this.sendMessageInternal({
				message: e,
				recipientPeer: a,
				type: n
			});
		});
	}
	submitSessionFeedback(e, t) {
		return I(this, null, function* () {
			if (!this.sessionPeerInfo) throw L.e(this.TAG, "submitSessionFeedback> session is undefined"), /* @__PURE__ */ Error("session is undefined");
			let n = this.sessionPeerInfo.peer.token;
			if (!n) throw L.e(this.TAG, "submitSessionFeedback> token is undefined"), /* @__PURE__ */ Error("Internal error, token is not present");
			try {
				yield zd.sendFeedback({
					token: n,
					info: this.sessionPeerInfo,
					feedback: e,
					eventEndpoint: t
				}), L.i(this.TAG, "submitSessionFeedback> submitted feedback"), this.sessionPeerInfo = void 0;
			} catch (e) {
				throw L.e(this.TAG, "submitSessionFeedback> error occured ", e), /* @__PURE__ */ Error("Unable to submit feedback");
			}
		});
	}
	getPeer(e) {
		return I(this, null, function* () {
			let t = yield this.transport.signal.getPeer({ peer_id: e });
			if (t) return zs(t, this.store);
		});
	}
	findPeerByName(e) {
		return I(this, arguments, function* ({ query: e, limit: t = 10, offset: n }) {
			let { peers: r, offset: i, eof: a } = yield this.transport.signal.findPeerByName({
				query: e?.toLowerCase(),
				limit: t,
				offset: n
			});
			return r.length > 0 ? {
				offset: i,
				eof: a,
				peers: r.map((e) => zs({
					peer_id: e.peer_id,
					role: e.role,
					groups: [],
					info: {
						name: e.name,
						data: "",
						user_id: "",
						type: e.type
					}
				}, this.store))
			} : {
				offset: i,
				peers: []
			};
		});
	}
	sendMessageInternal(e) {
		return I(this, arguments, function* ({ recipientRoles: e, recipientPeer: t, type: n = "chat", message: r }) {
			if (r.replace(/\u200b/g, " ").trim() === "") throw L.w(this.TAG, "sendMessage", "Ignoring empty message send"), B.GenericErrors.ValidationFailed("Empty message not allowed");
			let i = { info: {
				message: r,
				type: n
			} };
			return e != null && e.length && (i.roles = e.map((e) => e.name)), t != null && t.peerId && (i.peer_id = t.peerId), L.d(this.TAG, "Sending Message: ", i), yield this.transport.signal.broadcast(i);
		});
	}
	startScreenShare(e, t) {
		return I(this, null, function* () {
			var n;
			let r = this.store.getPublishParams();
			if (!r) return;
			let { allowed: i } = r;
			if (!(i && i.includes("screen"))) {
				L.e(this.TAG, `Role ${this.localPeer?.role} cannot share screen`);
				return;
			}
			if ((n = this.localPeer?.auxiliaryTracks) != null && n.find((e) => e.source === "screen")) throw Error("Cannot share multiple screens");
			let a = yield this.getScreenshareTracks(e, t);
			if (!this.localPeer) {
				L.d(this.TAG, "Screenshared when not connected"), a.forEach((e) => {
					e.cleanup();
				});
				return;
			}
			this.transport.setOnScreenshareStop(() => {
				this.stopEndedScreenshare(e);
			}), yield this.transport.publish(a), a.forEach((e) => {
				var t, n;
				e.peerId = this.localPeer?.peerId, (t = this.localPeer) == null || t.auxiliaryTracks.push(e), (n = this.listener) == null || n.onTrackUpdate(0, e, this.localPeer);
			});
		});
	}
	stopEndedScreenshare(e) {
		return I(this, null, function* () {
			L.d(this.TAG, "✅ Screenshare ended natively"), yield this.stopScreenShare(), e();
		});
	}
	stopScreenShare() {
		return I(this, null, function* () {
			L.d(this.TAG, "✅ Screenshare ended from app");
			let e = this.localPeer?.auxiliaryTracks.filter((e) => e.source === "screen");
			if (e) for (let t of e) yield this.removeTrack(t.trackId);
		});
	}
	addTrack(e, t = "regular") {
		return I(this, null, function* () {
			var n, r;
			if (!e) {
				L.w(this.TAG, "Please pass a valid MediaStreamTrack");
				return;
			}
			if (!this.localPeer) throw B.GenericErrors.NotConnected("VALIDATION", "No local peer present, cannot addTrack");
			if (this.localPeer.auxiliaryTracks.find((t) => t.trackId === e.id)) return;
			let i = e.kind, a = new ls(new MediaStream([e])), o = new (i === "audio" ? Oo : qo)(a, e, t, this.eventBus);
			yield this.applySettings(o), yield this.setPlaylistSettings({
				track: e,
				hmsTrack: o,
				source: t
			}), yield this.transport?.publish([o]), o.peerId = this.localPeer?.peerId, (n = this.localPeer) == null || n.auxiliaryTracks.push(o), (r = this.listener) == null || r.onTrackUpdate(0, o, this.localPeer);
		});
	}
	removeTrack(e, t = !1) {
		return I(this, null, function* () {
			var n;
			if (!this.localPeer) throw B.GenericErrors.NotConnected("VALIDATION", "No local peer present, cannot removeTrack");
			let r = this.localPeer.auxiliaryTracks.findIndex((t) => t.trackId === e);
			if (r > -1) {
				let e = this.localPeer.auxiliaryTracks[r];
				e.isPublished ? yield this.transport.unpublish([e]) : yield e.cleanup(), t || this.stopPlaylist(e), this.localPeer.auxiliaryTracks.splice(r, 1), (n = this.listener) == null || n.onTrackUpdate(1, e, this.localPeer);
			} else L.w(this.TAG, `No track found for ${e}`);
		});
	}
	setAnalyticsLevel(e) {
		this.analyticsEventsService.level = e;
	}
	setLogLevel(e) {
		L.level = e;
	}
	autoSelectAudioOutput(e) {
		var t;
		(t = this.deviceManager) == null || t.autoSelectAudioOutput(e);
	}
	addAudioListener(e) {
		var t;
		this.audioListener = e, (t = this.notificationManager) == null || t.setAudioListener(e);
	}
	addConnectionQualityListener(e) {
		var t;
		(t = this.notificationManager) == null || t.setConnectionQualityListener(e);
	}
	setIsDiagnostics(e) {
		this.isDiagnostics = e;
	}
	changeRole(e, t, n = !1) {
		return I(this, null, function* () {
			yield this.transport?.signal.requestRoleChange({
				requested_for: e,
				role: t,
				force: n
			});
		});
	}
	changeRoleOfPeer(e, t, n = !1) {
		return I(this, null, function* () {
			yield this.transport?.signal.requestRoleChange({
				requested_for: e,
				role: t,
				force: n
			});
		});
	}
	changeRoleOfPeersWithRoles(e, t) {
		return I(this, null, function* () {
			e.length <= 0 || !t || (yield this.transport?.signal.requestBulkRoleChange({
				roles: e.map((e) => e.name),
				role: t,
				force: !0
			}));
		});
	}
	acceptChangeRole(e) {
		return I(this, null, function* () {
			yield this.transport?.signal.acceptRoleChangeRequest({
				requested_by: e.requestedBy?.peerId,
				role: e.role.name,
				token: e.token
			});
		});
	}
	endRoom(e, t) {
		return I(this, null, function* () {
			if (!this.localPeer) throw B.GenericErrors.NotConnected("VALIDATION", "No local peer present, cannot end room");
			yield this.transport?.signal.endRoom(e, t), yield this.leave();
		});
	}
	removePeer(e, t) {
		return I(this, null, function* () {
			if (!this.localPeer) throw B.GenericErrors.NotConnected("VALIDATION", "No local peer present, cannot remove peer");
			yield this.transport?.signal.removePeer({
				requested_for: e,
				reason: t
			});
		});
	}
	startRTMPOrRecording(e) {
		return I(this, null, function* () {
			var t;
			if (!this.localPeer) throw B.GenericErrors.NotConnected("VALIDATION", "No local peer present, cannot start streaming or recording");
			let n = {
				meeting_url: e.meetingURL,
				record: e.record
			};
			(t = e.rtmpURLs) != null && t.length && (n.rtmp_urls = e.rtmpURLs), e.resolution && (n.resolution = e.resolution), yield this.transport?.signal.startRTMPOrRecording(n);
		});
	}
	stopRTMPAndRecording() {
		return I(this, null, function* () {
			if (!this.localPeer) throw B.GenericErrors.NotConnected("VALIDATION", "No local peer present, cannot stop streaming or recording");
			yield this.transport?.signal.stopRTMPAndRecording();
		});
	}
	startHLSStreaming(e) {
		return I(this, null, function* () {
			if (!this.localPeer) throw B.GenericErrors.NotConnected("VALIDATION", "No local peer present, cannot start HLS streaming");
			let t = {};
			e && e.variants && e.variants.length > 0 && (t.variants = e.variants.map((e) => {
				let t = { meeting_url: e.meetingURL };
				return e.metadata && (t.metadata = e.metadata), t;
			})), e != null && e.recording && (t.hls_recording = {
				single_file_per_layer: e.recording.singleFilePerLayer,
				hls_vod: e.recording.hlsVod
			}), yield this.transport?.signal.startHLSStreaming(t);
		});
	}
	stopHLSStreaming(e) {
		return I(this, null, function* () {
			if (!this.localPeer) throw B.GenericErrors.NotConnected("VALIDATION", "No local peer present, cannot stop HLS streaming");
			if (e) {
				let t = {
					variants: (e?.variants)?.map((e) => {
						let t = { meeting_url: e.meetingURL };
						return e.metadata && (t.metadata = e.metadata), t;
					}),
					stop_reason: e.stop_reason
				};
				yield this.transport?.signal.stopHLSStreaming(t);
			} else yield this.transport?.signal.stopHLSStreaming();
		});
	}
	startTranscription(e) {
		return I(this, null, function* () {
			if (!this.localPeer) throw B.GenericErrors.NotConnected("VALIDATION", "No local peer present, cannot start transcriptions");
			let t = P(P({ mode: e.mode }, e.language && { language: e.language }), e.translation && { translation: e.translation });
			yield this.transport?.signal.startTranscription(t);
		});
	}
	stopTranscription(e) {
		return I(this, null, function* () {
			if (!this.localPeer) throw B.GenericErrors.NotConnected("VALIDATION", "No local peer present, cannot stop transcriptions");
			if (!e) throw B.GenericErrors.Signalling("VALIDATION", "No mode is passed to stop the transcription");
			let t = { mode: e.mode };
			yield this.transport?.signal.stopTranscription(t);
		});
	}
	updateTranscriptionConfig(e) {
		return I(this, null, function* () {
			if (!this.localPeer) throw B.GenericErrors.NotConnected("VALIDATION", "No local peer present, cannot update transcription config");
			yield this.transport?.signal.updateTranscriptionConfig(e);
		});
	}
	sendHLSTimedMetadata(e) {
		return I(this, null, function* () {
			if (this.validateJoined("sendHLSTimedMetadata"), e.length > 0) {
				let t = { metadata_objs: e };
				yield this.transport?.signal.sendHLSTimedMetadata(t);
			}
		});
	}
	changeName(e) {
		return I(this, null, function* () {
			var t;
			this.validateJoined("changeName");
			let n = this.store.getLocalPeer();
			n && n.name !== e && (yield this.transport?.signal.updatePeer({ name: e }), (t = this.notificationManager) == null || t.updateLocalPeer({ name: e }));
		});
	}
	changeMetadata(e) {
		return I(this, null, function* () {
			var t;
			this.validateJoined("changeMetadata"), yield this.transport?.signal.updatePeer({ data: e }), (t = this.notificationManager) == null || t.updateLocalPeer({ metadata: e });
		});
	}
	setSessionMetadata(e) {
		return I(this, null, function* () {
			yield this.transport?.signal.setSessionMetadata({
				key: "default",
				data: e
			});
		});
	}
	getSessionMetadata() {
		return I(this, null, function* () {
			return (yield this.transport?.signal.getSessionMetadata("default")).data;
		});
	}
	getRoles() {
		return Object.values(this.store.getKnownRoles());
	}
	changeTrackState(e, t) {
		return I(this, null, function* () {
			if (e.type === "video" && e.source !== "regular") {
				L.w(this.TAG, "Muting non-regular video tracks is currently not supported");
				return;
			}
			if (e.enabled === t) {
				L.w(this.TAG, `Aborting change track state, track already has enabled - ${t}`, e);
				return;
			}
			if (!this.store.getTrackById(e.trackId)) throw B.GenericErrors.ValidationFailed("No track found for change track state", e);
			let n = this.store.getPeerByTrackId(e.trackId);
			if (!n) throw B.GenericErrors.ValidationFailed("No peer found for change track state", e);
			yield this.transport?.signal.requestTrackStateChange({
				requested_for: n.peerId,
				track_id: e.trackId,
				stream_id: e.stream.id,
				mute: !t
			});
		});
	}
	changeMultiTrackState(e) {
		return I(this, null, function* () {
			if (typeof e.enabled != "boolean") throw B.GenericErrors.ValidationFailed("Pass a boolean for enabled");
			let { enabled: t, roles: n, type: r, source: i } = e;
			yield this.transport?.signal.requestMultiTrackStateChange({
				value: !t,
				type: r,
				source: i,
				roles: n?.map((e) => e?.name)
			});
		});
	}
	raiseLocalPeerHand() {
		return I(this, null, function* () {
			this.validateJoined("raiseLocalPeerHand"), yield this.transport?.signal.joinGroup(ns);
		});
	}
	lowerLocalPeerHand() {
		return I(this, null, function* () {
			this.validateJoined("lowerLocalPeerHand"), yield this.transport?.signal.leaveGroup(ns);
		});
	}
	raiseRemotePeerHand(e) {
		return I(this, null, function* () {
			yield this.transport?.signal.addToGroup(e, ns);
		});
	}
	lowerRemotePeerHand(e) {
		return I(this, null, function* () {
			yield this.transport?.signal.removeFromGroup(e, ns);
		});
	}
	setFrameworkInfo(e) {
		this.frameworkInfo = P(P({}, this.frameworkInfo), e);
	}
	attachVideo(e, t) {
		return I(this, null, function* () {
			let n = this.store.getConfig();
			n != null && n.autoManageVideo ? e.attach(t) : yield e.addSink(t);
		});
	}
	detachVideo(e, t) {
		return I(this, null, function* () {
			let n = this.store.getConfig();
			n != null && n.autoManageVideo ? e.detach(t) : yield e.removeSink(t);
		});
	}
	publish(e, t) {
		return I(this, null, function* () {
			[
				this.store.getPublishParams(),
				!this.sdkState.published,
				!ra
			].every((e) => !!e) && (yield ((t && t !== this.localPeer?.role?.name ? () => this.roleChangeManager?.diffRolesAndPublishTracks({
				oldRole: this.store.getPolicyForRole(t),
				newRole: this.localPeer.role
			}) : () => this.getAndPublishTracks(e))?.())?.catch((e) => {
				var t;
				L.e(this.TAG, "Error in publish", e), (t = this.listener) == null || t.onError(e);
			}));
		});
	}
	getAndPublishTracks(e) {
		return I(this, null, function* () {
			var t;
			let n = yield this.localTrackManager.getTracksToPublish(e);
			yield this.initDeviceManagers(), yield this.setAndPublishTracks(n), (t = this.localPeer?.audioTrack) == null || t.initAudioLevelMonitor(), this.sdkState.published = !0;
		});
	}
	setAndPublishTracks(e) {
		return I(this, null, function* () {
			var t, n;
			for (let r of e) {
				if (yield this.transport.publish([r]), r.isTrackNotPublishing()) {
					let e = B.TracksErrors.NoDataInTrack(`${r.type} track has no data. muted: ${r.nativeTrack.muted}, readyState: ${r.nativeTrack.readyState}`);
					L.e(this.TAG, e), this.sendAnalyticsEvent(H.publish({
						devices: this.deviceManager.getDevices(),
						error: e
					})), (t = this.listener) == null || t.onError(e);
				}
				yield this.setLocalPeerTrack(r), (n = this.listener) == null || n.onTrackUpdate(0, r, this.localPeer);
			}
		});
	}
	setLocalPeerTrack(e) {
		return I(this, null, function* () {
			switch (e.peerId = this.localPeer?.peerId, e.type) {
				case "audio":
					this.localPeer.audioTrack = e, yield this.deviceManager.autoSelectAudioOutput();
					break;
				case "video":
					this.localPeer.videoTrack = e;
					break;
			}
		});
	}
	initDeviceManagers() {
		return I(this, null, function* () {
			this.sdkState.deviceManagersInitialised || (this.sdkState.deviceManagersInitialised = !0, yield this.deviceManager.init(), (yield this.deviceManager.updateOutputDevice(this.store.getConfig()?.settings?.audioOutputDeviceId)) || (yield this.deviceManager.updateOutputDevice(Na.getSelection()?.audioOutput?.deviceId)), this.audioSinkManager.init(this.store.getConfig()?.audioSinkElementId));
		});
	}
	cleanDeviceManagers() {
		this.eventBus.deviceChange.unsubscribe(this.handleDeviceChange), this.eventBus.audioPluginFailed.unsubscribe(this.handleAudioPluginError), this.eventBus.autoplayError.unsubscribe(this.handleAutoplayError), this.deviceManager.cleanup(), this.audioSinkManager.cleanup();
	}
	initPreviewTrackAudioLevelMonitor() {
		let e = this.localPeer?.audioTrack;
		e?.initAudioLevelMonitor(), this.eventBus.trackAudioLevelUpdate.subscribe((t) => {
			var n;
			let r = t && t.track.trackId === e?.trackId ? [{
				audioLevel: t.audioLevel,
				peer: this.localPeer,
				track: e
			}] : [];
			this.store.updateSpeakers(r), (n = this.audioListener) == null || n.onAudioLevelUpdate(r);
		}), this.eventBus.localAudioSilence.subscribe(this.sendAudioPresenceFailed);
	}
	notifyJoin() {
		var e;
		let t = this.store.getLocalPeer(), n = this.store.getRoom();
		if (!n) {
			L.w(this.TAG, "notify join - room not present");
			return;
		}
		if (n.joinedAt = /* @__PURE__ */ new Date(), t && (t.joinedAt = n.joinedAt), t != null && t.role) {
			this.analyticsTimer.end("join_time"), (e = this.listener) == null || e.onJoin(n);
			return;
		}
		return new Promise((e, t) => {
			this.eventBus.policyChange.subscribeOnce(() => {
				var t;
				this.analyticsTimer.end("join_time"), (t = this.listener) == null || t.onJoin(n), e();
			}), this.eventBus.leave.subscribeOnce((e) => {
				t(e);
			});
		});
	}
	setUpPreview(e, t) {
		this.sdkState.isPreviewCalled = !0, this.sdkState.isPreviewInProgress = !0;
		let { roomId: n, userId: r, role: i } = Wf(e.authToken);
		this.commonSetup(e, n, t), this.store.setConfig(e), this.store.createAndSetUserAgent(this.frameworkInfo), this.createAndAddLocalPeerToStore(e, i, r, e.asRole);
	}
	setPlaylistSettings(e) {
		return I(this, arguments, function* ({ track: e, hmsTrack: t, source: n }) {
			if (n === "videoplaylist") {
				let n = {};
				if (e.kind === "audio") n.maxBitrate = this.playlistSettings.audio?.bitrate || is;
				else {
					n.maxBitrate = this.playlistSettings.video?.bitrate || rs;
					let { width: t, height: r } = e.getSettings();
					n.width = t, n.height = r;
				}
				yield t.setSettings(n);
			} else n === "audioplaylist" && (yield t.setSettings({ maxBitrate: 64 }));
		});
	}
	createAndAddLocalPeerToStore(e, t, n, r) {
		let i = this.store.getPolicyForRole(t), a = r ? this.store.getPolicyForRole(r) : void 0, o = new Ls({
			name: e.userName || "",
			customerUserId: n,
			metadata: e.metaData || "",
			role: i,
			asRole: a || i,
			type: "regular"
		});
		this.store.addPeer(o);
	}
	commonSetup(e, t, n) {
		this.stringifyMetadata(e), e.initEndpoint ||= "https://prod-init.100ms.live", this.initStoreAndManagers(n), this.store.getRoom() || this.store.setRoom(new Sd(t));
	}
	removeDevicesFromConfig(e) {
		this.store.getConfig() && e.settings && (delete e.settings.audioOutputDeviceId, delete e.settings.videoDeviceId, delete e.settings.audioInputDeviceId);
	}
	getScreenshareTracks(e, t) {
		return I(this, null, function* () {
			let n = this.transport.isFlagEnabled("scaleScreenshareBasedOnPixels"), [r, i] = yield this.localTrackManager.getLocalScreen(t, n), a = () => {
				this.stopEndedScreenshare(e);
			}, o = [];
			if (t != null && t.audioOnly) {
				if (r.nativeTrack.stop(), !i) throw B.TracksErrors.NothingToReturn("TRACK", "Select share audio when sharing screen", "No audio found");
				o.push(i), i.nativeTrack.addEventListener("ended", a);
			} else o.push(r), r.nativeTrack.addEventListener("ended", a), i && o.push(i);
			return o;
		});
	}
	stopPlaylist(e) {
		e.source === "audioplaylist" ? this.playlistManager.stop("audio") : e.source === "videoplaylist" && this.playlistManager.stop("video");
	}
	applySettings(e) {
		return I(this, null, function* () {
			Ta(this.store);
			let t = this.store.getPublishParams();
			if (t) {
				if (e instanceof qo) {
					let n = e.source === "regular" ? "video" : e.source === "screen" ? "screen" : "";
					if (!n || !t.allowed.includes(n)) return;
					let r = t[n];
					if (!r) return;
					let i = new to().codec(r.codec).maxBitrate(r.bitRate).maxFramerate(r.frameRate).setWidth(r.width).setHeight(r.height).build();
					yield e.setSettings(i);
				} else if (e instanceof Oo) {
					if (!t.allowed.includes("audio")) return;
					let n = new $a().codec(t.audio.codec).maxBitrate(t.audio.bitRate).build();
					yield e.setSettings(n);
				}
			}
		});
	}
}, qf = class e {
	constructor(t, n, r) {
		this.getStats = () => (this.stats ||= new $f(this.store, this.sdk), this.stats), this.getDiagnosticsSDK = () => (this.diagnostics ||= this.actions.initDiagnostics(), this.diagnostics), t ? this.store = t : this.store = e.createNewHMSStore(Ed("HMSStore"), ji), r ? this.notifications = r : this.notifications = new Ju(this.store), n ? this.actions = n : (this.sdk = new Kf(), this.actions = new Td(this.store, this.sdk, this.notifications)), this.actions.setFrameworkInfo({
			type: "js",
			sdkVersion: ki().version
		}), this.initialTriggerOnSubscribe = !1, $i && (window.__hms = this);
	}
	triggerOnSubscribe() {
		this.initialTriggerOnSubscribe ||= (e.makeStoreTriggerOnSubscribe(this.store), !0);
	}
	getStore() {
		return this.store;
	}
	getHMSActions() {
		return this.actions;
	}
	getActions() {
		return this.actions;
	}
	getNotifications() {
		return { onNotification: this.notifications.onNotification };
	}
	static createNewHMSStore(t, n) {
		let r = fi(() => n()), i = r.setState;
		r.setState = (e) => {
			i(typeof e == "function" ? ui(e) : e);
		};
		let a = r.getState;
		r.getState = (e) => e ? e(a()) : a(), e.compareWithShallowCheckInSubscribe(r);
		let o = e.setUpDevtools(r, t);
		return F(P({}, r), { namedSetState: o });
	}
	static makeStoreTriggerOnSubscribe(e) {
		let t = e.subscribe;
		e.subscribe = (n, r, i) => (n(e.getState(r), void 0), t(n, r, i));
	}
	static compareWithShallowCheckInSubscribe(e) {
		let t = e.subscribe;
		e.subscribe = (e, n, r) => (n ||= (e) => e, r ||= di, t(e, n, r));
	}
	static setUpDevtools(t, n) {
		let r;
		try {
			r = window.__REDUX_DEVTOOLS_EXTENSION__ || window.top.__REDUX_DEVTOOLS_EXTENSION__;
		} catch {}
		if (!r) return (e) => {
			t.setState(e);
		};
		let i = r.connect(e.devtoolsOptions(n));
		i.prefix = n ? `${n} > ` : "";
		let a = t.setState;
		return t.setState = (e) => {
			a(e), i.send(`${i.prefix}setState`, t.getState());
		}, i.subscribe(e.devtoolsSubscribe(i, t, a)), i.send("setUpStore", t.getState()), (e, n) => {
			a(e);
			let r = n || `${i.prefix}action`;
			i.send(r, t.getState());
		};
	}
	static devtoolsOptions(e) {
		return {
			name: e,
			actionsBlacklist: [
				"audioLevel",
				"playlistProgress",
				"connectionQuality"
			]
		};
	}
	static devtoolsSubscribe(e, t, n) {
		return (r) => {
			if (r.type === "DISPATCH" && r.state) ["JUMP_TO_ACTION", "JUMP_TO_STATE"].includes(r.payload.type) ? n(JSON.parse(r.state)) : t.setState(JSON.parse(r.state));
			else if (r.type === "DISPATCH" && r.payload?.type === "COMMIT") e.init(t.getState());
			else if (r.type === "DISPATCH" && r.payload?.type === "IMPORT_STATE") {
				let i = r.payload.nextLiftedState?.actionsById;
				(r.payload.nextLiftedState?.computedStates || []).forEach(({ state: r }, a) => {
					let o = i[a] || `${e.prefix}setState`;
					a === 0 ? e.init(r) : (n(r), e.send(o, t.getState()));
				});
			}
		};
	}
}, Jf = (e, t, n) => {
	let r;
	n.getState(Nc) === "Connected" && (r = Yf(e, t, n)), n.subscribe((i) => {
		["Connected", "Reconnecting"].includes(i) ? r ||= Yf(e, t, n) : ["Disconnected", "Failed"].includes(i) && r && (Qf(t, i), r(), r = void 0);
	}, Nc);
}, Yf = (e, t, n) => {
	var r;
	let i = Xf(n, t);
	(r = e.getWebrtcInternals()) == null || r.start();
	let a = e.getWebrtcInternals()?.onStatsChange((r) => Zf(t, r, n, e));
	return () => {
		i(), a && a();
	};
}, Xf = (e, t) => {
	let n, r, i;
	return e.getState(lc) ? t.namedSetState((t) => {
		t.localPeer.id = e.getState(lc);
	}, "localpeer-id") : n = e.subscribe((e) => {
		e && t.namedSetState((t) => {
			t.localPeer.id = e;
		}, "localpeer-id");
	}, lc), e.getState(pc) ? t.namedSetState((t) => {
		t.localPeer.videoTrack = e.getState(pc);
	}, "localpeer-videotrack-id") : r = e.subscribe((e) => {
		e && t.namedSetState((t) => {
			t.localPeer.videoTrack = e;
		}, "localpeer-videotrack-id");
	}, pc), e.getState(fc) ? t.namedSetState((t) => {
		t.localPeer.audioTrack = e.getState(fc);
	}, "localpeer-audiotrack-id") : i = e.subscribe((e) => {
		e && t.namedSetState((t) => {
			t.localPeer.audioTrack = e;
		}, "localpeer-audiotrack-id");
	}, fc), () => {
		n?.(), r?.(), i?.();
	};
}, Zf = (e, t, n, r) => {
	let i = n.getState(G);
	e.namedSetState((e) => {
		let a = n.getState(lc), o = {}, s = Object.keys(i).filter((e) => i[e].peerId !== a);
		for (let e of s) {
			let n = t.getRemoteTrackStats(e);
			n && (o[e] = n);
		}
		ed(e.remoteTrackStats, o);
		let c = { [a]: t.getLocalPeerStats() };
		ed(e.peerStats, c), td(e.localTrackStats, t.getLocalTrackStats(), r.store.getLocalPeerTracks());
	}, "webrtc-stats");
}, Qf = (e, t = "resetState") => {
	e.namedSetState((e) => {
		Object.assign(e, Mi());
	}, t);
}, $f = class {
	constructor(e, t) {
		this.hmsStore = e, this.sdk = t, this.store = qf.createNewHMSStore(Ed("HMSStatsStore"), Mi), this.getState = this.store.getState, this.subscribe = this.store.subscribe, this.getPublishPeerConnection = () => new Promise((e) => {
			this.hmsStore.getState(Nc) === "Connected" ? e((this.sdk?.getWebrtcInternals())?.getPublishPeerConnection()) : this.hmsStore.subscribe((t) => {
				t === "Connected" && e((this.sdk?.getWebrtcInternals())?.getPublishPeerConnection());
			}, Nc);
		}), this.getSubscribePeerConnection = () => new Promise((e) => {
			this.hmsStore.getState(Nc) === "Connected" ? e((this.sdk?.getWebrtcInternals())?.getSubscribePeerConnection()) : this.hmsStore.subscribe((t) => {
				t === "Connected" && e((this.sdk?.getWebrtcInternals())?.getSubscribePeerConnection());
			}, Nc);
		}), this.sdk && Jf(this.sdk, this.store, this.hmsStore);
	}
}, ep = (e) => e.localPeer.id, tp = (e) => e.localPeer.audioTrack, np = (e) => e.localPeer.videoTrack, rp = (e, t) => t, ip = (e, t) => t, ap = (e) => e.remoteTrackStats, op = (e) => e.peerStats, sp = (e) => e.localTrackStats, cp = C([op, ep], (e, t) => e[t]), lp = C(cp, (e) => e?.subscribe?.packetsLost), up = C(cp, (e) => e?.subscribe?.jitter), dp = C(cp, (e) => e?.publish?.bitrate), fp = C(cp, (e) => e?.subscribe?.bitrate), pp = C(cp, (e) => e?.publish?.availableOutgoingBitrate), mp = C(cp, (e) => e?.subscribe?.availableIncomingBitrate), hp = C(cp, (e) => e?.publish?.bytesSent), gp = C(cp, (e) => e?.subscribe?.bytesReceived), _p = C([op, rp], (e, t) => t ? e[t] : void 0), vp = C([ap, ip], (e, t) => t ? e[t] : void 0), yp = C([sp, ip], (e, t) => t ? e[t] : void 0), bp = K(_p), xp = K(vp), Sp = C([sp, tp], (e, t) => t ? e[t]?.[0] : void 0), Cp = K(C(yp, (e) => e?.[0])), wp = C([sp, np], (e, t) => t ? e[t]?.[0] : void 0), Tp = {
	localPeerStats: cp,
	packetsLost: lp,
	jitter: up,
	publishBitrate: dp,
	subscribeBitrate: fp,
	availablePublishBitrate: pp,
	availableSubscribeBitrate: mp,
	totalBytesSent: hp,
	totalBytesReceived: gp,
	peerStatsByID: bp,
	trackStatsByID: xp,
	localAudioTrackStatsByID: Cp,
	localVideoTrackStatsByID: K(C(yp, (e) => e)),
	localVideoTrackStatsByLayer: (e) => K(C(yp, (t) => {
		let n = Object.keys(Xa).find((t) => Xa[t] === e);
		return e && t?.find((e) => e.rid === n) || t?.[0];
	})),
	localAudioTrackStats: Sp,
	localVideoTrackStats: wp
};
//#endregion
//#region node_modules/zustand/esm/shallow.js
function Ep(e, t) {
	if (Object.is(e, t)) return !0;
	if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
	let n = Object.keys(e);
	if (n.length !== Object.keys(t).length) return !1;
	for (let r = 0; r < n.length; r++) if (!Object.prototype.hasOwnProperty.call(t, n[r]) || !Object.is(e[n[r]], t[n[r]])) return !1;
	return !0;
}
//#endregion
//#region node_modules/react-resize-detector/build/index.esm.js
var Dp = function(e, t) {
	return Dp = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
		e.__proto__ = t;
	} || function(e, t) {
		for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
	}, Dp(e, t);
};
function Op(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
	Dp(e, t);
	function n() {
		this.constructor = e;
	}
	e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var kp = function() {
	return kp = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, kp.apply(this, arguments);
};
function Ap(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
var jp = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Mp(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
var Np = Mp, Pp = typeof jp == "object" && jp && jp.Object === Object && jp, Fp = typeof self == "object" && self && self.Object === Object && self, Ip = Pp || Fp || Function("return this")(), Lp = Ip, Rp = function() {
	return Lp.Date.now();
}, zp = /\s/;
function Bp(e) {
	for (var t = e.length; t-- && zp.test(e.charAt(t)););
	return t;
}
var Vp = Bp, Hp = /^\s+/;
function Up(e) {
	return e && e.slice(0, Vp(e) + 1).replace(Hp, "");
}
var Wp = Up, Gp = Ip.Symbol, Kp = Gp, qp = Object.prototype, Jp = qp.hasOwnProperty, Yp = qp.toString, Xp = Kp ? Kp.toStringTag : void 0;
function Zp(e) {
	var t = Jp.call(e, Xp), n = e[Xp];
	try {
		e[Xp] = void 0;
		var r = !0;
	} catch {}
	var i = Yp.call(e);
	return r && (t ? e[Xp] = n : delete e[Xp]), i;
}
var Qp = Zp, $p = Object.prototype.toString;
function em(e) {
	return $p.call(e);
}
var tm = em, nm = Gp, rm = Qp, im = tm, am = "[object Null]", om = "[object Undefined]", sm = nm ? nm.toStringTag : void 0;
function cm(e) {
	return e == null ? e === void 0 ? om : am : sm && sm in Object(e) ? rm(e) : im(e);
}
var lm = cm;
function um(e) {
	return typeof e == "object" && !!e;
}
var dm = um, fm = lm, pm = dm, mm = "[object Symbol]";
function hm(e) {
	return typeof e == "symbol" || pm(e) && fm(e) == mm;
}
var gm = hm, _m = Wp, vm = Np, ym = gm, bm = NaN, xm = /^[-+]0x[0-9a-f]+$/i, Sm = /^0b[01]+$/i, Cm = /^0o[0-7]+$/i, wm = parseInt;
function Tm(e) {
	if (typeof e == "number") return e;
	if (ym(e)) return bm;
	if (vm(e)) {
		var t = typeof e.valueOf == "function" ? e.valueOf() : e;
		e = vm(t) ? t + "" : t;
	}
	if (typeof e != "string") return e === 0 ? e : +e;
	e = _m(e);
	var n = Sm.test(e);
	return n || Cm.test(e) ? wm(e.slice(2), n ? 2 : 8) : xm.test(e) ? bm : +e;
}
var Em = Tm, Dm = Np, Om = Rp, km = Em, Am = "Expected a function", jm = Math.max, Mm = Math.min;
function Nm(e, t, n) {
	var r, i, a, o, s, c, l = 0, u = !1, d = !1, f = !0;
	if (typeof e != "function") throw TypeError(Am);
	t = km(t) || 0, Dm(n) && (u = !!n.leading, d = "maxWait" in n, a = d ? jm(km(n.maxWait) || 0, t) : a, f = "trailing" in n ? !!n.trailing : f);
	function p(t) {
		var n = r, a = i;
		return r = i = void 0, l = t, o = e.apply(a, n), o;
	}
	function m(e) {
		return l = e, s = setTimeout(_, t), u ? p(e) : o;
	}
	function h(e) {
		var n = e - c, r = e - l, i = t - n;
		return d ? Mm(i, a - r) : i;
	}
	function g(e) {
		var n = e - c, r = e - l;
		return c === void 0 || n >= t || n < 0 || d && r >= a;
	}
	function _() {
		var e = Om();
		if (g(e)) return v(e);
		s = setTimeout(_, h(e));
	}
	function v(e) {
		return s = void 0, f && r ? p(e) : (r = i = void 0, o);
	}
	function y() {
		s !== void 0 && clearTimeout(s), l = 0, r = c = i = s = void 0;
	}
	function ee() {
		return s === void 0 ? o : v(Om());
	}
	function te() {
		var e = Om(), n = g(e);
		if (r = arguments, i = this, c = e, n) {
			if (s === void 0) return m(c);
			if (d) return clearTimeout(s), s = setTimeout(_, t), p(c);
		}
		return s === void 0 && (s = setTimeout(_, t)), o;
	}
	return te.cancel = y, te.flush = ee, te;
}
var Pm = Nm, Fm = Pm, Im = Np, Lm = "Expected a function";
function Rm(e, t, n) {
	var r = !0, i = !0;
	if (typeof e != "function") throw TypeError(Lm);
	return Im(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), Fm(e, t, {
		leading: r,
		maxWait: t,
		trailing: i
	});
}
var zm = Rm, Bm = function(e, t, n, r) {
	switch (t) {
		case "debounce": return Pm(e, n, r);
		case "throttle": return zm(e, n, r);
		default: return e;
	}
}, Vm = function(e) {
	return typeof e == "function";
}, Hm = function() {
	return typeof window > "u";
}, Um = function(e) {
	return e instanceof Element || e instanceof HTMLDocument;
}, Wm = function(e, t, n, r) {
	return function(i) {
		var a = i.width, o = i.height;
		t(function(t) {
			return t.width === a && t.height === o || t.width === a && !r || t.height === o && !n ? t : (e && Vm(e) && e(a, o), {
				width: a,
				height: o
			});
		});
	};
};
(function(t) {
	Op(n, t);
	function n(e) {
		var n = t.call(this, e) || this;
		n.cancelHandler = function() {
			n.resizeHandler && n.resizeHandler.cancel && (n.resizeHandler.cancel(), n.resizeHandler = null);
		}, n.attachObserver = function() {
			var e = n.props, t = e.targetRef, r = e.observerOptions;
			if (!Hm()) {
				t && t.current && (n.targetRef.current = t.current);
				var i = n.getElement();
				i && (n.observableElement && n.observableElement === i || (n.observableElement = i, n.resizeObserver.observe(i, r)));
			}
		}, n.getElement = function() {
			var e = n.props, t = e.querySelector, r = e.targetDomEl;
			if (Hm()) return null;
			if (t) return document.querySelector(t);
			if (r && Um(r)) return r;
			if (n.targetRef && Um(n.targetRef.current)) return n.targetRef.current;
			var i = g(n);
			if (!i) return null;
			switch (n.getRenderType()) {
				case "renderProp": return i;
				case "childFunction": return i;
				case "child": return i;
				case "childArray": return i;
				default: return i.parentElement;
			}
		}, n.createResizeHandler = function(e) {
			var t = n.props, r = t.handleWidth, i = r === void 0 ? !0 : r, a = t.handleHeight, o = a === void 0 ? !0 : a, s = t.onResize;
			if (!(!i && !o)) {
				var c = Wm(s, n.setState.bind(n), i, o);
				e.forEach(function(e) {
					var t = e && e.contentRect || {}, r = t.width, i = t.height;
					!n.skipOnMount && !Hm() && c({
						width: r,
						height: i
					}), n.skipOnMount = !1;
				});
			}
		}, n.getRenderType = function() {
			var e = n.props, t = e.render, r = e.children;
			return Vm(t) ? "renderProp" : Vm(r) ? "childFunction" : o(r) ? "child" : Array.isArray(r) ? "childArray" : "parent";
		};
		var r = e.skipOnMount, i = e.refreshMode, s = e.refreshRate, c = s === void 0 ? 1e3 : s, l = e.refreshOptions;
		return n.state = {
			width: void 0,
			height: void 0
		}, n.skipOnMount = r, n.targetRef = a(), n.observableElement = null, Hm() ? n : (n.resizeHandler = Bm(n.createResizeHandler, i, c, l), n.resizeObserver = new window.ResizeObserver(n.resizeHandler), n);
	}
	return n.prototype.componentDidMount = function() {
		this.attachObserver();
	}, n.prototype.componentDidUpdate = function() {
		this.attachObserver();
	}, n.prototype.componentWillUnmount = function() {
		Hm() || (this.observableElement = null, this.resizeObserver.disconnect(), this.cancelHandler());
	}, n.prototype.render = function() {
		var t = this.props, n = t.render, i = t.children, a = t.nodeType, o = a === void 0 ? "div" : a, s = this.state, c = {
			width: s.width,
			height: s.height,
			targetRef: this.targetRef
		}, l = this.getRenderType(), u;
		switch (l) {
			case "renderProp": return n && n(c);
			case "childFunction": return u = i, u(c);
			case "child":
				if (u = i, u.type && typeof u.type == "string") {
					c.targetRef;
					var d = Ap(c, ["targetRef"]);
					return r(u, d);
				}
				return r(u, c);
			case "childArray": return u = i, u.map(function(e) {
				return !!e && r(e, c);
			});
			default: return e.createElement(o, null);
		}
	}, n;
})(n);
var Gm = Hm() ? u : d;
function Km(e) {
	e === void 0 && (e = {});
	var t = e.skipOnMount, n = t === void 0 ? !1 : t, r = e.refreshMode, i = e.refreshRate, a = i === void 0 ? 1e3 : i, o = e.refreshOptions, s = e.handleWidth, c = s === void 0 ? !0 : s, l = e.handleHeight, u = l === void 0 ? !0 : l, d = e.targetRef, f = e.observerOptions, p = e.onResize, g = m(n), _ = m(null), v = d ?? _, y = m(), ee = h({
		width: void 0,
		height: void 0
	}), te = ee[0], b = ee[1];
	return Gm(function() {
		if (!Hm()) {
			var e = Wm(p, b, c, u);
			y.current = Bm(function(t) {
				!c && !u || t.forEach(function(t) {
					var n = t && t.contentRect || {}, r = n.width, i = n.height;
					!g.current && !Hm() && e({
						width: r,
						height: i
					}), g.current = !1;
				});
			}, r, a, o);
			var t = new window.ResizeObserver(y.current);
			return v.current && t.observe(v.current, f), function() {
				t.disconnect();
				var e = y.current;
				e && e.cancel && e.cancel();
			};
		}
	}, [
		r,
		a,
		o,
		c,
		u,
		p,
		f,
		v.current
	]), kp({ ref: v }, te);
}
//#endregion
//#region node_modules/@100mslive/react-sdk/dist/index.js
var qm = Object.defineProperty, Jm = Object.defineProperties, Ym = Object.getOwnPropertyDescriptors, Xm = Object.getOwnPropertySymbols, Zm = Object.prototype.hasOwnProperty, Qm = Object.prototype.propertyIsEnumerable, $m = (e, t, n) => t in e ? qm(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, eh = (e, t) => {
	for (var n in t ||= {}) Zm.call(t, n) && $m(e, n, t[n]);
	if (Xm) for (var n of Xm(t)) Qm.call(t, n) && $m(e, n, t[n]);
	return e;
}, th = (e, t) => Jm(e, Ym(t)), Q = (e, t, n) => new Promise((r, i) => {
	var a = (e) => {
		try {
			s(n.next(e));
		} catch (e) {
			i(e);
		}
	}, o = (e) => {
		try {
			s(n.throw(e));
		} catch (e) {
			i(e);
		}
	}, s = (e) => e.done ? r(e.value) : Promise.resolve(e.value).then(a, o);
	s((n = n.apply(e, t)).next());
}), nh = class {
	static v(e, ...t) {
		this.log(0, e, ...t);
	}
	static d(e, ...t) {
		this.log(1, e, ...t);
	}
	static i(e, ...t) {
		this.log(2, e, ...t);
	}
	static w(e, ...t) {
		this.log(3, e, ...t);
	}
	static e(e, ...t) {
		this.log(4, e, ...t);
	}
	static log(e, t, ...n) {
		if (!(this.level.valueOf() > e.valueOf())) switch (e) {
			case 0:
				console.log("HMSui-components: ", t, ...n);
				break;
			case 1:
				console.debug("HMSui-components: ", t, ...n);
				break;
			case 2:
				console.info("HMSui-components: ", t, ...n);
				break;
			case 3:
				console.warn("HMSui-components: ", t, ...n);
				break;
			case 4:
				console.error("HMSui-components: ", t, ...n);
				break;
		}
	}
};
nh.level = 0;
var rh = "It seems like you forgot to add your component within a top level HMSRoomProvider, please refer to 100ms react docs(https://www.100ms.live/docs/javascript/v2/how-to-guides/install-the-sdk/integration#react-hooks) to check on the required steps for using this hook. If the provider is present\n  at the top level, check the yarn.lock/package-lock.json, if there are multiple versions of @100mslive/react-sdk. Please ensure the versions of @100mslive/react-sdk and @100mslive/roomkit-react are the same versions from the release notes(https://www.100ms.live/docs/javascript/v2/changelog/release-notes) that you are trying to update to.";
function ih(e) {
	return (t, n = Ep) => {
		t || nh.w("fetching full store without passing any selector may have a heavy performance impact on your website.");
		let r = c(e);
		if (!r) throw Error(rh);
		let i = r.store;
		return i(t, n);
	};
}
function ah(e) {
	return (t, n = Ep) => {
		t || nh.w("fetching full store without passing any selector may have a heavy performance impact on your website.");
		let r = c(e);
		if (!r) throw Error(rh);
		let i = r.statsStore;
		return i?.(t, n);
	};
}
var oh = typeof window < "u", sh = i(null), ch = ({ children: e, actions: n, store: r, notifications: i, stats: a, isHMSStatsOn: o = !1, leaveOnUnload: s = !0 }) => {
	let c = f(() => {
		let e, s = () => {
			throw Error("modifying store is not allowed");
		};
		if (n && r) e = {
			actions: n,
			store: se(th(eh({}, r), {
				setState: s,
				destroy: s
			}))
		}, i && (e.notifications = i), a && (e.statsStore = se({
			getState: a.getState,
			subscribe: a.subscribe,
			setState: s,
			destroy: s
		}));
		else {
			let t = new qf();
			if (e = {
				actions: t.getActions(),
				store: se(th(eh({}, t.getStore()), {
					setState: s,
					destroy: s
				})),
				notifications: t.getNotifications()
			}, o) {
				let n = t.getStats();
				e.statsStore = se({
					getState: n.getState,
					subscribe: n.subscribe,
					setState: s,
					destroy: s
				});
			}
		}
		return e.actions.setFrameworkInfo({
			type: "react-web",
			version: t.version,
			sdkVersion: process.env.REACT_SDK_VERSION
		}), e;
	}, [
		n,
		r,
		i,
		a,
		o
	]);
	return u(() => {
		if (oh && s) {
			let e = () => c.actions.leave();
			return window.addEventListener("unload", e), () => {
				window.removeEventListener("unload", e);
			};
		}
		return () => {};
	}, [s, c]), t.createElement(sh.Provider, { value: c }, e);
}, $ = ih(sh), lh = ah(sh), uh = () => {
	let e = c(sh);
	if (!e) throw Error(rh);
	return e.store;
}, dh = () => {
	let e = c(sh);
	if (!e) throw Error(rh);
	return e.notifications;
}, fh = () => {
	let e = c(sh);
	if (!e) throw Error(rh);
	return e.actions;
}, ph = (e) => {
	let t = c(sh), [n, r] = h(null);
	if (!t) throw Error(rh);
	return u(() => t.notifications ? t.notifications.onNotification((e) => {
		r(e);
	}, e) : void 0, [t.notifications, e]), n;
}, mh = "react-sdk", hh = (e, t) => nh.e(mh, t, e), gh = (e) => {
	throw e;
};
function _h(e) {
	let t = m();
	return u(() => {
		t.current = e;
	}), t.current;
}
var vh = ["blink"].some((e) => (ta.getEngine()?.name)?.toLowerCase() === e), yh = "https://pdf-annotation.100ms.live/generic/web/viewer.html", bh = ({ name: e = "", token: t, metadata: n, handleError: r = hh, initEndpoint: i, initialSettings: a, captureNetworkQualityInPreview: o, asRole: c, autoManageVideo: l, autoManageWakeLock: u, iceServers: d }) => {
	let p = fh(), m = $(Nc), h = $(ic) || !1, g = m === Ai.Preview, _ = f(() => ({
		userName: e,
		authToken: t,
		metaData: n,
		rememberDeviceSelection: !0,
		settings: a,
		initEndpoint: i,
		asRole: c,
		captureNetworkQualityInPreview: o,
		autoManageVideo: l,
		autoManageWakeLock: u,
		iceServers: d
	}), [
		e,
		t,
		n,
		i,
		a,
		o,
		c,
		l,
		u,
		d
	]), v = s(() => Q(null, null, function* () {
		if (t) try {
			(h || m !== Ai.Disconnected) && (yield p.leave().catch(() => {})), yield p.preview(_);
		} catch (e) {
			r(e, "preview");
		}
	}), [
		t,
		h,
		m,
		p,
		_,
		r
	]);
	return {
		enableJoin: g,
		join: s(() => Q(null, null, function* () {
			if (t) try {
				yield p.join(_);
			} catch (e) {
				r(e, "join");
			}
		}), [
			p,
			_,
			r,
			t
		]),
		isConnected: h,
		preview: v
	};
}, xh = (e = hh) => {
	let t = $(_c), n = $(vc), r = $($(Pc) ? Nu : Mu), i = fh(), a = s(() => Q(null, null, function* () {
		try {
			yield i.setLocalAudioEnabled(!t);
		} catch (t) {
			e(t, "toggleAudio");
		}
	}), [
		i,
		t,
		e
	]), o = s(() => Q(null, null, function* () {
		try {
			yield i.setLocalVideoEnabled(!n);
		} catch (t) {
			e(t, "toggleVideo");
		}
	}), [
		i,
		n,
		e
	]);
	return {
		isLocalAudioEnabled: t,
		isLocalVideoEnabled: n,
		toggleAudio: r != null && r.audio ? a : void 0,
		toggleVideo: r != null && r.video ? o : void 0
	};
}, Sh = ({ trackId: e, attach: t }) => {
	let n = fh(), r = m(null), i = $(Rl(e)), a = m(), o = s((e) => {
		e && (r.current = e);
	}, []);
	return u(() => {
		a.current ? i != null && i.id && a.current !== i?.id && Q(null, null, function* () {
			if (r.current) try {
				nh.d("detaching because different track is passed"), yield n.detachVideo(a.current, r.current);
			} catch (e) {
				nh.w("detach video error for track", a.current, e);
			}
			a.current = i?.id;
		}) : a.current = i?.id;
	}, [i?.id, n]), u(() => {
		Q(null, null, function* () {
			i != null && i.id && r.current && (t === !1 ? yield n.detachVideo(i.id, r.current) : yield n.attachVideo(i.id, r.current));
		});
	}, [
		i,
		t,
		n
	]), u(() => () => {
		Q(null, null, function* () {
			if (r.current && i) try {
				yield n.detachVideo(i.id, r.current);
			} catch (e) {
				nh.w("detach video error for track", i.id, e);
			}
		});
	}, []), { videoRef: o };
}, Ch = (e = hh) => {
	let t = fh(), n = $(bc), r = $(xc), i = $(eu(r?.id)), a = s((r) => Q(null, null, function* () {
		try {
			yield t.setScreenShareEnabled(!n, r);
		} catch (t) {
			e(t, "toggleScreenShare");
		}
	}), [
		t,
		n,
		e
	]);
	return {
		amIScreenSharing: n,
		screenSharingPeerId: r?.id,
		screenSharingPeerName: r?.name,
		screenShareVideoTrackId: i?.video?.id,
		screenShareAudioTrackId: i?.audio?.id,
		toggleScreenShare: a
	};
}, wh = (e, t, n) => Q(null, null, function* () {
	if (t) try {
		yield e.setRemoteTrackEnabled(t.id, !t.enabled);
	} catch (e) {
		n(e, "remoteToggle");
	}
}), Th = (e, t, n = hh) => {
	let r = fh(), i = $(zl(e)), a = $(Rl(t)), o = $(cu(i?.id)), c = $(Uc), l = a != null && a.enabled ? c?.mute : c?.unmute, u = i != null && i.enabled ? c?.mute : c?.unmute, d = s(() => Q(null, null, function* () {
		yield wh(r, i, n);
	}), [
		r,
		i,
		n
	]), f = s(() => Q(null, null, function* () {
		yield wh(r, a, n);
	}), [
		r,
		n,
		a
	]), p = s((e) => {
		i && r.setVolume(e, i.id);
	}, [r, i]);
	return {
		isAudioEnabled: !!(i != null && i.enabled),
		isVideoEnabled: !!(a != null && a.enabled),
		volume: o,
		toggleAudio: i && u ? d : void 0,
		toggleVideo: a?.source === "regular" && l ? f : void 0,
		setVolume: i ? p : void 0
	};
}, Eh = (e, t, n) => e.reduce((e, r, i) => {
	let a = Math.floor(i / t);
	return a > 0 && n || (e[a] || (e[a] = []), e[a].push(r)), e;
}, []), Dh = ({ elements: e, tilesInFirstPage: t, onlyOnePage: n, isLastPageDifferentFromFirstPage: r, defaultWidth: i, defaultHeight: a, lastPageWidth: o, lastPageHeight: s }) => {
	let c = Eh(e, t, n);
	return c.map((e, t) => e.map((e) => {
		let n = t === c.length - 1, l = r && n ? o : i, u = r && n ? s : a;
		return th(eh({}, e), {
			height: u,
			width: l
		});
	}));
};
function Oh(e) {
	if (e.length === 0) return null;
	let t = {}, n = e[0], r = 1;
	for (let i = 0; i < e.length; i++) {
		let a = e[i];
		t[a] === null ? t[a] = 1 : t[a]++, t[a] > r && (n = a, r = t[a]);
	}
	return n;
}
var kh = (e) => Oh(e.filter((e) => e.track?.width && e.track?.height).map((e) => {
	let t = e.track?.width, n = e.track?.height;
	return (t || 1) / (n || 1);
})), Ah = (e, t, n, r, i) => {
	if (e < 0 || t < 0) throw Error("Container must have a non-negative area");
	if (n < 1 || !Number.isInteger(n)) throw Error("Number of shapes to place must be a positive integer");
	let a = r && i && r / i;
	if (a !== void 0 && isNaN(a)) throw Error("Aspect ratio must be a number");
	let o = {
		area: 0,
		cols: 0,
		rows: 0,
		width: 0,
		height: 0
	}, s = n;
	if (a !== void 0) for (let r = s; r > 0; r += -1) {
		let i = Math.ceil(n / r), s = e / (r * a), c = t / i, l, u;
		s <= c ? (l = e / r, u = l / a) : (u = t / i, l = u * a);
		let d = l * u;
		d > o.area && (o = {
			area: d,
			width: l,
			height: u,
			rows: i,
			cols: r
		});
	}
	return o;
}, jh = ({ parentWidth: e, parentHeight: t, count: n, maxCount: r, aspectRatio: i }) => {
	let a = 0, o = 0, s = 0, c = 0, l = !1, u = 0, d = 0, f = Math.min(Math.ceil(Math.sqrt(e / t * n / (i.width / i.height))), r), p = e / f, m = p / (i.width / i.height);
	m > t && (m = t, p = m / (i.height / i.width));
	let h = Math.floor(t / m);
	if (o = m, a = p, u = Math.min(n, h * f), d = n % (h * f), l = d > 0 && n > h * f, l) {
		let n = e / Math.min(Math.ceil(Math.sqrt(e / t * d / (i.width / i.height))), r), a = n / (i.width / i.height);
		a > t && (a = t, n = a / (i.height / i.width)), c = a, s = n;
	}
	return {
		tilesInFirstPage: u,
		defaultWidth: a,
		defaultHeight: o,
		lastPageWidth: s,
		lastPageHeight: c,
		isLastPageDifferentFromFirstPage: l
	};
}, Mh = ({ parentWidth: e, parentHeight: t, count: n, maxCount: r, aspectRatio: i }) => {
	let a = 0, o = 0, s = 0, c = 0, l = !1, u = 0, d = 0, { width: f, height: p } = Ah(e, t, Math.min(n, r), i.width, i.height);
	if (a = f, o = p, u = Math.min(n, r), d = n % r, l = d > 0 && n > r, l) {
		let { width: n, height: r } = Ah(e, t, d, i.width, i.height);
		s = n, c = r;
	}
	return {
		tilesInFirstPage: u,
		defaultWidth: a,
		defaultHeight: o,
		lastPageWidth: s,
		lastPageHeight: c,
		isLastPageDifferentFromFirstPage: l
	};
}, Nh = ({ parentWidth: e, parentHeight: t, count: n, maxCount: r, aspectRatio: i }) => {
	let a = 0, o = 0, s = 0, c = 0, l = !1, u = 0, d = 0, f = Math.min(Math.ceil(Math.sqrt(n * (i.width / i.height) / (e / t))), r), p = t / f, m = p * (i.width / i.height), h = Math.floor(e / m);
	if (a = m, o = p, u = Math.min(n, f * h), d = n % (f * h), l = d > 0 && n > f * h, l) {
		let n = t / Math.min(Math.ceil(Math.sqrt(d * (i.width / i.height) / (e / t))), r), a = n * (i.width / i.height);
		c = n, s = a;
	}
	return {
		tilesInFirstPage: u,
		defaultWidth: a,
		defaultHeight: o,
		lastPageWidth: s,
		lastPageHeight: c,
		isLastPageDifferentFromFirstPage: l
	};
};
function Ph({ count: e, parentWidth: t, parentHeight: n, maxTileCount: r, maxRowCount: i, maxColCount: a, aspectRatio: o }) {
	let s = 0, c = 0, l = 0, u = 0, d = !1, f = 0;
	if (e === 0) return {
		tilesInFirstPage: f,
		defaultWidth: s,
		defaultHeight: c,
		lastPageWidth: l,
		lastPageHeight: u,
		isLastPageDifferentFromFirstPage: d
	};
	if (r) ({tilesInFirstPage: f, defaultWidth: s, defaultHeight: c, lastPageWidth: l, lastPageHeight: u, isLastPageDifferentFromFirstPage: d} = Mh({
		parentWidth: t,
		parentHeight: n,
		count: e,
		maxCount: r,
		aspectRatio: o
	}));
	else if (i) ({tilesInFirstPage: f, defaultWidth: s, defaultHeight: c, lastPageWidth: l, lastPageHeight: u, isLastPageDifferentFromFirstPage: d} = Nh({
		parentWidth: t,
		parentHeight: n,
		count: e,
		maxCount: i,
		aspectRatio: o
	}));
	else if (a) ({tilesInFirstPage: f, defaultWidth: s, defaultHeight: c, lastPageWidth: l, lastPageHeight: u, isLastPageDifferentFromFirstPage: d} = jh({
		parentWidth: t,
		parentHeight: n,
		count: e,
		maxCount: a,
		aspectRatio: o
	}));
	else {
		let { width: r, height: i } = Ah(t, n, e, o.width, o.height);
		s = r, c = i, f = e;
	}
	return {
		tilesInFirstPage: f,
		defaultWidth: s,
		defaultHeight: c,
		lastPageWidth: l,
		lastPageHeight: u,
		isLastPageDifferentFromFirstPage: d
	};
}
var Fh = (e, t, n, r = !0) => {
	if (!e || !t || !n) return [];
	let i = [];
	for (let a of e) if (a.videoTrack === void 0 && a.audioTrack && t[a.audioTrack] ? i.push({ peer: a }) : a.videoTrack && t[a.videoTrack] ? i.push({
		track: t[a.videoTrack],
		peer: a
	}) : r || i.push({ peer: a }), a.auxiliaryTracks.length > 0 && a.auxiliaryTracks.forEach((e) => {
		let n = t[e];
		n?.type === "video" && n?.source === "regular" && i.push({
			track: n,
			peer: a
		});
	}), n(a) && a.auxiliaryTracks.length > 0) {
		let e = a.auxiliaryTracks.find((e) => {
			let n = t[e];
			return n?.type === "video" && n?.source === "screen";
		});
		e && i.push({
			track: t[e],
			peer: a
		});
	}
	return i;
}, Ih = { aspectRatio: {
	width: 1,
	height: 1
} }, Lh = ({ peers: e, maxTileCount: t, maxColCount: n, maxRowCount: r, includeScreenShareForPeer: i = () => !1, aspectRatio: a = Ih.aspectRatio, filterNonPublishingPeers: o = !0, offsetY: s = 0 }) => {
	let { width: c = 0, height: l = 0, ref: u } = Km(), d = Fh(e, uh().getState(G), i, o), p = f(() => a || {
		width: kh(d) || 1,
		height: 1
	}, [a, d]), m = d.length, { tilesInFirstPage: h, defaultWidth: g, defaultHeight: _, lastPageWidth: v, lastPageHeight: y, isLastPageDifferentFromFirstPage: ee } = f(() => Ph({
		count: m,
		parentWidth: Math.floor(c),
		parentHeight: Math.floor(l) - Math.min(l, s),
		maxTileCount: t,
		maxRowCount: r,
		maxColCount: n,
		aspectRatio: p
	}), [
		m,
		c,
		l,
		t,
		r,
		n,
		p,
		s
	]);
	return {
		pagesWithTiles: f(() => Dh({
			elements: d,
			tilesInFirstPage: h,
			onlyOnePage: !1,
			isLastPageDifferentFromFirstPage: ee,
			defaultWidth: g,
			defaultHeight: _,
			lastPageWidth: v,
			lastPageHeight: y
		}), [
			d,
			h,
			ee,
			g,
			_,
			v,
			y
		]),
		ref: u
	};
};
function Rh({ trackId: e, getStyle: t, ref: n }) {
	let r = uh();
	u(() => r.subscribe((e) => {
		if (!n.current) return;
		let r = t(e);
		for (let e in r) n.current.style[e] = r[e];
	}, ql(e)), [
		t,
		n,
		r,
		e
	]);
}
var zh = (e = hh) => {
	let t = fh(), n = $(tc), r = $($s), i = $($(Pc) ? Nu : Mu), a = { [Qa.audioOutput]: r.audioOutputDeviceId }, o = { [Qa.audioOutput]: n.audioOutput };
	return i.video && (o[Qa.videoInput] = n.videoInput, a[Qa.videoInput] = r.videoInputDeviceId), i.audio && (o[Qa.audioInput] = n.audioInput, a[Qa.audioInput] = r.audioInputDeviceId), {
		allDevices: o,
		selectedDeviceIDs: a,
		updateDevice: s((n) => Q(null, [n], function* ({ deviceType: n, deviceId: r }) {
			try {
				switch (n) {
					case Qa.audioInput:
						yield t.setAudioSettings({ deviceId: r });
						break;
					case Qa.videoInput:
						yield t.setVideoSettings({ deviceId: r });
						break;
					case Qa.audioOutput:
						yield t.setAudioOutputDevice(r);
						break;
				}
			} catch (t) {
				e(t, "updateDevices");
			}
		}), [e, t])
	};
}, Bh = (e) => !e || !Array.isArray(e) || e.length === 0 ? {} : e.reduce((e, t) => (t.roleName && (e[t.roleName] || (e[t.roleName] = []), e[t.roleName].push(t)), e), {}), Vh = () => {
	let e = $(ic), t = $(e ? oc : hc), n = $(ac), r = f(() => Bh(t), [t]);
	return {
		roles: Object.keys(r),
		participantsByRoles: r,
		peerCount: n,
		isConnected: e
	};
}, Hh = () => {
	let e = $(Wc), t = $(Gc), n = $(Kc), r = e.server.running, i = e.browser.running, a = e.hls.running, o = n.running || t.running, s = r || i || a;
	return {
		isServerRecordingOn: r,
		isBrowserRecordingOn: i,
		isHLSRecordingOn: a,
		isStreamingOn: o,
		isHLSRunning: n.running,
		isRTMPRunning: t.running,
		isRecordingOn: s
	};
}, Uh = () => {
	let e = ph(Fi.ERROR), [t, n] = h(""), r = fh(), i = s(() => Q(null, null, function* () {
		yield r.unblockAudio();
	}), [r]);
	return u(() => {
		e?.data.code === 3008 && n(e?.data.message);
	}, [e]), {
		error: t,
		unblockAudio: i,
		resetError: () => n("")
	};
}, Wh = (e, t) => t ? JSON.stringify(e || "") : e, Gh = ({ type: e, json: t = !0, onEvent: n, handleError: r = hh }) => {
	let i = fh(), a = dh();
	return u(() => {
		i.ignoreMessageTypes([e]);
	}, [i, e]), u(() => a ? a.onNotification((i) => {
		let a = i.data;
		if (a && a.type === e) try {
			let e = t ? JSON.parse(a.message) : a.message;
			n?.(e);
		} catch (e) {
			r(e, "handleCustomEvent");
		}
	}, Fi.NEW_MESSAGE) : void 0, [
		a,
		e,
		t,
		n,
		r
	]), { sendEvent: s((a, o) => Q(null, null, function* () {
		try {
			let r = Wh(a, t);
			o && Array.isArray(o?.roleNames) ? yield i.sendGroupMessage(r, o.roleNames, e) : typeof o?.peerId == "string" ? yield i.sendDirectMessage(r, o.peerId, e) : yield i.sendBroadcastMessage(r, e), n?.(a);
		} catch (e) {
			r(e, "sendCustomEvent");
		}
	}), [
		i,
		r,
		n,
		e,
		t
	]) };
}, Kh = (e) => {
	var t;
	let n = $(ic), r = $(ac), i = $(Rc), a = $(n ? oc : hc), o = Array.from(new Set(a.map((e) => e.roleName))), s = uh();
	if ((t = e?.metadata) != null && t.isHandRaised && (a = a.filter((e) => s.getState(wu(e.id)).isHandRaised)), e != null && e.role && i.includes(e.role) && (a = a.filter((t) => t.roleName === e.role)), e != null && e.search) {
		let t = e.search.toLowerCase();
		a = a.filter((e) => e.roleName?.toLowerCase().includes(t) || e.name.toLowerCase().includes(t));
	}
	return {
		participants: a,
		isConnected: n,
		peerCount: r,
		rolesWithParticipants: o
	};
}, qh = (e) => {
	let t = m(null), [n, r] = h(!1), i = s(() => {
		throw Error("unable to start screen share");
	}, []), a = m(!1), { amIScreenSharing: o, toggleScreenShare: c } = Ch(i), l = _h(o), d = s(() => Q(null, null, function* () {
		o && (yield c?.(), t.current = null);
	}), [o, c]), f = s((e) => Q(null, null, function* () {
		if (!a.current) {
			if (!e) throw Error("URL not found");
			if (o) throw Error("You are already sharing");
			if (!t.current) throw Error("Attach a reference `iframeRef` to iframe for sharing");
			t.current.src = e, a.current = !0, r(!0), yield c?.({
				forceCurrentTab: vh,
				cropElement: t.current,
				preferCurrentTab: vh
			});
		}
	}), [o, c]);
	return u(() => {
		l && !o && (e?.(), t.current && (t.current.src = ""), a.current = !1, r(!1));
	}, [
		o,
		l,
		e
	]), {
		startEmbedShare: f,
		stopEmbedShare: d,
		iframeRef: t,
		isEmbedShareInProgress: n
	};
}, Jh = (e) => {
	let t = m(null), [n, r] = h(!1), i = s(() => {
		throw Error("unable to start screen share");
	}, []), a = m(!1), { amIScreenSharing: o, toggleScreenShare: c } = Ch(i), l = _h(o), d = s((e) => {
		var n;
		t.current && ((n = t.current.contentWindow) == null || n.postMessage({
			theme: 2,
			file: e
		}, "*"));
	}, []), f = s(() => Q(null, null, function* () {
		o && (yield c?.());
	}), [o, c]), p = s((e) => Q(null, null, function* () {
		if (a.current) return;
		if (!e) throw Error("File or url not found");
		if (o) throw Error("You are already sharing");
		if (!t.current) throw Error("Attach a reference `iframeRef` to iframe for sharing");
		t.current.src = `${yh}${typeof e == "string" ? `?file=${e}` : ""}`, t.current.onload = () => {
			requestAnimationFrame(() => {
				e instanceof File && d(e);
			});
		}, a.current = !0, r(!0);
		let n = window.self !== window.top;
		yield c?.({
			forceCurrentTab: vh && !n,
			cropElement: t.current,
			preferCurrentTab: vh && !n
		});
	}), [
		o,
		d,
		c
	]);
	return u(() => {
		l && !o && (e?.(), t.current && t.current.removeAttribute("src"), a.current = !1, r(!1));
	}, [
		o,
		l,
		e
	]), {
		startPDFShare: p,
		stopPDFShare: f,
		iframeRef: t,
		isPDFShareInProgress: n
	};
}, Yh = (e) => e.reduce((e, t) => (e[t.id] = t, e), {}), Xh = (e) => {
	let t = m(fh().getPeerListIterator(e)), [n, r] = h({}), [i, a] = h(0);
	return {
		loadPeers: () => t.current.findPeers().then((e) => {
			r(Yh(e)), a(t.current.getTotal());
		}),
		loadMorePeers: () => t.current.next().then((e) => {
			r((t) => eh(eh({}, t), Yh(e))), a(t.current.getTotal());
		}),
		hasNext: () => t.current.hasNext(),
		total: i,
		peers: Object.values(n)
	};
}, Zh = (e = !1) => {
	let t = $(ic), n = $(cc)?.customerUserId, r = $(sl), i = $(Ml("disableNotifications")), a = !!(r != null && r.open), o = r?.owner === n, c = fh(), [l, d] = h(!1), f = $(Uc)?.whiteboard, p = !!(f != null && f.includes("admin"));
	u(() => {
		t && d(c.interactivityCenter.whiteboard.isEnabled);
	}, [t, c]);
	let m = s(() => Q(null, null, function* () {
		!t || !p || (a ? o && (yield c.interactivityCenter.whiteboard.close()) : yield c.interactivityCenter.whiteboard.open());
	}), [
		c,
		o,
		p,
		a,
		t
	]);
	return {
		open: a,
		token: r?.token,
		endpoint: r?.addr,
		isOwner: o,
		isAdmin: p,
		zoomToContent: i || e,
		toggle: l && p ? m : void 0
	};
}, Qh = () => {
	let e = uh();
	return {
		requestPermission: s(() => Q(null, null, function* () {
			if (!("Notification" in window) || navigator.webdriver) {
				console.debug("Request Permsissions : Notifications not supported or headless browser");
				return;
			}
			if ((Notification == null ? void 0 : Notification.permission) === "granted" || (Notification == null ? void 0 : Notification.permission) === "denied") return;
			let t = e.subscribe((e) => Q(null, null, function* () {
				e && e !== "__internal_recorder" && (yield Notification.requestPermission(), t?.());
			}), dc);
		}), [e]),
		showNotification: s((e, t) => {
			if (!("Notification" in window)) {
				console.debug("Show Notifications: Notifications not supported or headless browser");
				return;
			}
			if ((Notification == null ? void 0 : Notification.permission) === "denied" || document.visibilityState === "visible" && document.hasFocus()) return;
			let n = new Notification(e, t), r = () => {
				document.visibilityState === "visible" && document.hasFocus() && (n?.close(), document.removeEventListener("visibilitychange", r));
			};
			document.addEventListener("visibilitychange", r);
		}, [])
	};
}, $h = ({ onTranscript: e, handleError: t = hh }) => {
	let n = "hms_transcript", r = dh();
	u(() => r ? r.onNotification((r) => {
		let i = r.data;
		if (i && i.type === n) try {
			let t = JSON.parse(i.message).results;
			e?.(t);
		} catch (e) {
			t(e, "handleCaptionEvent");
		}
	}, Fi.NEW_MESSAGE) : void 0, [
		r,
		n,
		t,
		e
	]);
}, eg = () => {
	let e = fh(), { audioMode: t } = $($s), n = t === Za.MUSIC;
	return {
		toggleMusicMode: () => Q(null, null, function* () {
			return yield e.setAudioSettings({ audioMode: n ? Za.VOICE : Za.MUSIC });
		}),
		isMusicModeEnabled: n
	};
};
//#endregion
export { bd as ConnectivityState, Qa as DeviceType, wd as Diagnostics, ua as DomainCategory, Bd as EventBus, Ka as HLSPlaylistType, qa as HLSStreamType, so as HMSAudioDeviceCategory, Za as HMSAudioMode, Pa as HMSAudioPluginType, qi as HMSLogLevel, Ni as HMSMessageType, Pi as HMSNotificationSeverity, Fi as HMSNotificationTypes, Wa as HMSPeerType, Ii as HMSPlaylistType, Fa as HMSPluginUnsupportedTypes, qf as HMSReactiveStore, Ga as HMSRecordingState, ch as HMSRoomProvider, Ai as HMSRoomState, $f as HMSStats, ma as HMSTrackExceptionTrackType, Ya as HMSTranscriptionMode, Ja as HMSTranscriptionState, Ro as HMSVideoPluginCanvasContextType, Lo as HMSVideoPluginType, Mi as createDefaultStatsStore, ji as createDefaultStoreState, co as getAudioDeviceCategory, Fh as getPeersWithTiles, ta as parsedUserAgent, Ml as selectAppData, Pl as selectAppDataByPath, gl as selectAudioPlaylist, $l as selectAudioPlaylistTrackByPeerID, zl as selectAudioTrackByID, Ul as selectAudioTrackByPeerID, cu as selectAudioTrackVolume, lu as selectAudioVolumeByPeerID, Xl as selectAuxiliaryAudioByPeerID, Gl as selectAuxiliaryTracksByPeerID, Rc as selectAvailableRoleNames, mu as selectBroadcastMessages, _u as selectBroadcastMessagesUnreadCount, Wl as selectCameraStreamByPeerID, rc as selectConnectionQualities, Yl as selectConnectionQualityByPeerID, Dc as selectDegradedTracks, tc as selectDevices, Hu as selectDidIJoinWithin, gc as selectDominantSpeaker, el as selectEffectsKey, qs as selectErrors, ec as selectFullAppData, Kc as selectHLSState, jc as selectHMSBroadcastMessages, Ac as selectHMSMessages, Oc as selectHMSMessagesCount, Tp as selectHMSStats, al as selectHandRaisedPeers, Tu as selectHasPeerHandRaised, Nu as selectIsAllowedToPreviewMedia, Mu as selectIsAllowedToPublish, Hc as selectIsAllowedToSubscribe, au as selectIsAudioLocallyMuted, ic as selectIsConnectedToRoom, Qc as selectIsEffectsEnabled, Pc as selectIsInPreview, Zc as selectIsLargeRoom, _c as selectIsLocalAudioEnabled, zu as selectIsLocalAudioPluginPresent, bc as selectIsLocalScreenShared, yc as selectIsLocalVideoDisplayEnabled, vc as selectIsLocalVideoEnabled, Ru as selectIsLocalVideoPluginPresent, ou as selectIsLocallyMutedByPeerID, ru as selectIsPeerAudioEnabled, iu as selectIsPeerVideoEnabled, Fu as selectIsRoleAllowedToPublish, su as selectIsScreenShareLocallyMutedByPeerID, Sc as selectIsSomeoneScreenSharing, ku as selectIsTranscriptionAllowedByMode, Ic as selectIsTranscriptionEnabled, $c as selectIsVBEnabled, fc as selectLocalAudioTrackID, $s as selectLocalMediaSettings, cc as selectLocalPeer, lc as selectLocalPeerID, uc as selectLocalPeerName, zc as selectLocalPeerRole, dc as selectLocalPeerRoleName, mc as selectLocalTrackIDs, pc as selectLocalVideoTrackID, Ou as selectMessageByMessageID, Qs as selectMessageIDsInOrder, vu as selectMessagesByPeerID, yu as selectMessagesByRole, Zs as selectMessagesMap, xu as selectMessagesUnreadCountByPeerID, bu as selectMessagesUnreadCountByRole, Jl as selectPeerAudioByID, Bu as selectPeerByCondition, jl as selectPeerByID, ac as selectPeerCount, wu as selectPeerMetadata, Eu as selectPeerName, Fl as selectPeerNameByID, xc as selectPeerScreenSharing, Cc as selectPeerSharingAudio, Ec as selectPeerSharingAudioPlaylist, Tc as selectPeerSharingVideoPlaylist, Il as selectPeerTypeByID, oc as selectPeers, Vu as selectPeersByCondition, Su as selectPeersByRole, Cu as selectPeersByRoles, Xs as selectPeersMap, wc as selectPeersScreenSharing, Au as selectPeersWithAudioStatus, Uc as selectPermissions, Du as selectPollByID, il as selectPolls, rl as selectPollsMap, Vc as selectPreviewRole, Bc as selectPreviewRoleName, Gc as selectRTMPState, Js as selectRecentError, Wc as selectRecordingState, hc as selectRemotePeers, Pu as selectRoleByRoleName, ju as selectRoleChangeRequest, Lc as selectRolesMap, W as selectRoom, Ys as selectRoomID, Xc as selectRoomStartTime, Fc as selectRoomStarted, Nc as selectRoomState, Bl as selectScreenAudioTrackByID, nu as selectScreenShareAudioByPeerID, tu as selectScreenShareByPeerID, eu as selectScreenSharesByPeerId, Vl as selectScreenVideoTrackByID, uu as selectScreenshareAudioVolumeByPeerID, Yc as selectSessionId, nl as selectSessionMetadata, Nl as selectSessionStore, du as selectSimulcastLayerByTrack, nc as selectSpeakers, tl as selectTemplateAppData, ql as selectTrackAudioByID, Ll as selectTrackByID, G as selectTracksMap, qc as selectTranscriptionsState, Jc as selectTranslationState, Mc as selectUnreadHMSBroadcastMessagesCount, kc as selectUnreadHMSMessagesCount, _l as selectVideoPlaylist, Ql as selectVideoPlaylistAudioTrackByPeerID, Zl as selectVideoPlaylistVideoTrackByPeerID, Rl as selectVideoTrackByID, Hl as selectVideoTrackByPeerID, sl as selectWhiteboard, ol as selectWhiteboards, Xa as simulcastMapping, gh as throwErrorHandler, xh as useAVToggle, Rh as useAudioLevelStyles, eg as useAudioMode, Uh as useAutoplayError, Qh as useAwayNotifications, Gh as useCustomEvent, zh as useDevices, qh as useEmbedShare, fh as useHMSActions, ph as useHMSNotifications, lh as useHMSStatsStore, $ as useHMSStore, dh as useHMSVanillaNotifications, uh as useHMSVanillaStore, Jh as usePDFShare, Xh as usePaginatedParticipants, Vh as useParticipantList, Kh as useParticipants, bh as usePreviewJoin, Hh as useRecordingStreaming, Th as useRemoteAVToggle, Ch as useScreenShare, $h as useTranscript, Sh as useVideo, Lh as useVideoList, Zh as useWhiteboard };

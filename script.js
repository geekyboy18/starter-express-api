!(function (e) {
	function t(i) {
		if (a[i]) return a[i].exports;
		var n = (a[i] = { exports: {}, id: i, loaded: !1 });
		return e[i].call(n.exports, n, n.exports, t), (n.loaded = !0), n.exports;
	}
	var a = {};
	return (t.m = e), (t.c = a), (t.p = "/assets/"), t(0);
})([
	function (e, t, a) {
		"use strict";
		(window.sforce = window.sforce || {}), (sforce.opencti = a(1)), sforce.opencti.initialize();
	},
	function (e, t, a) {
		"use strict";
		var i = a(2),
			n = a(3),
			o = /^http[s]?:\/\/[\w-.]+(\.((my-)?visual)?force\.com|\.my-lightning\.com|\.(my-)?salesforce\.com|\.(salesforce|crmforce)\.(mil|ms))(:\d+)?$/;
		e.exports = {
			initialize: function () {
				var e = n.parseUrlQueryString(location.search),
					t = e.sfdcIframeOrigin;
				if (!(t && e.mode && o.test(t) && 0 === t.indexOf(window.location.protocol))) throw "Failed to initialize Open CTI. Ensure that it is loaded from the right frame with correct URL parameters";
				(i.sfdcIframeOrigin = e.sfdcIframeOrigin), (i.mode = e.mode), window.addEventListener("message", n.processPostMessage, !1);
			},
			setSoftphonePanelVisibility: function (e) {
				n.validateArguments(arguments);
				var t = e ? e.callback : void 0;
				n.invokeApiCall("setSoftphonePanelVisibility", { visible: e.visible }, t);
			},
			isSoftphonePanelVisible: function (e) {
				n.validateArguments(arguments), n.validateCallback(e), n.invokeApiCall("isSoftphonePanelVisible", {}, e.callback);
			},
			SCREENPOP_TYPE: { URL: "url", SOBJECT: "sobject", OBJECTHOME: "objecthome", LIST: "list", SEARCH: "search", NEW_RECORD_MODAL: "newRecord" },
			screenPop: function (e) {
				n.validateArguments(arguments);
				var t = e ? e.callback : void 0;
				n.invokeApiCall("screenPop", { type: e.type, params: e.params }, t);
			},
			CALL_TYPE: { INBOUND: "inbound", OUTBOUND: "outbound", INTERNAL: "internal" },
			searchAndScreenPop: function (e) {
				n.validateArguments(arguments);
				var t = e ? e.callback : void 0;
				n.invokeApiCall("searchAndScreenPop", { searchParams: e.searchParams, callType: e.callType, queryParams: e.queryParams, defaultFieldValues: e.defaultFieldValues, deferred: e.deferred }, t);
			},
			getAppViewInfo: function (e) {
				n.validateArguments(arguments), n.validateCallback(e), n.invokeApiCall("getAppViewInfo", {}, e.callback);
			},
			saveLog: function (e) {
				n.validateArguments(arguments), n.validateValueObject(e);
				var t = e ? e.callback : void 0;
				n.invokeApiCall("saveLog", { object: e.value }, t);
			},
			refreshView: function (e) {
				n.validateArguments(arguments, !0);
				var t = e ? e.callback : void 0;
				n.invokeApiCall("refreshView", {}, t);
			},
			setSoftphoneItemLabel: function (e) {
				n.validateArguments(arguments);
				var t = e ? e.callback : void 0;
				n.invokeApiCall("setSoftphoneItemLabel", { label: e.label }, t);
			},
			setSoftphonePanelLabel: function (e) {
				n.validateArguments(arguments);
				var t = e ? e.callback : void 0;
				n.invokeApiCall("setSoftphonePanelLabel", { label: e.label }, t);
			},
			setSoftphoneItemIcon: function (e) {
				n.validateArguments(arguments);
				var t = e ? e.callback : void 0;
				n.invokeApiCall("setSoftphoneItemIcon", { key: e.key }, t);
			},
			setSoftphonePanelIcon: function (e) {
				n.validateArguments(arguments);
				var t = e ? e.callback : void 0;
				n.invokeApiCall("setSoftphonePanelIcon", { key: e.key }, t);
			},
			setSoftphonePanelHeight: function (e) {
				n.validateArguments(arguments);
				var t = e ? e.callback : void 0;
				n.invokeApiCall("setSoftphonePanelHeight", { heightPX: e.heightPX }, t);
			},
			setSoftphonePanelWidth: function (e) {
				n.validateArguments(arguments);
				var t = e ? e.callback : void 0;
				n.invokeApiCall("setSoftphonePanelWidth", { widthPX: e.widthPX }, t);
			},
			getCallCenterSettings: function (e) {
				n.validateArguments(arguments), n.validateCallback(e), n.invokeApiCall("getCallCenterSettings", {}, e.callback);
			},
			onClickToDial: function (e) {
				n.validateArguments(arguments), n.validateListener(e), n.invokeApiCall("onClickToDial", {}, void 0, e.listener);
			},
			enableClickToDial: function (e) {
				n.validateArguments(arguments, !0);
				var t = e ? e.callback : void 0;
				n.invokeApiCall("enableClickToDial", {}, t);
			},
			disableClickToDial: function (e) {
				n.validateArguments(arguments, !0);
				var t = e ? e.callback : void 0;
				n.invokeApiCall("disableClickToDial", {}, t);
			},
			getSoftphoneLayout: function (e) {
				n.validateArguments(arguments), n.validateCallback(e), n.invokeApiCall("getSoftphoneLayout", {}, e.callback);
			},
			onNavigationChange: function (e) {
				n.validateArguments(arguments), n.validateListener(e), n.invokeApiCall("onNavigationChange", {}, void 0, e.listener);
			},
			runApex: function (e) {
				n.validateArguments(arguments);
				var t = e ? e.callback : void 0;
				n.invokeApiCall("runApex", { apexClass: e.apexClass, methodName: e.methodName, methodParams: e.methodParams }, t);
			},
		};
	},
	function (e, t) {
		"use strict";
		e.exports = { API_VERSION: 40, API_TYPE: "opencti", sfdcIframeOrigin: null, mode: null };
	},
	function (e, t, a) {
		"use strict";
		var i =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (e) {
							return typeof e;
					  }
					: function (e) {
							return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
					  },
			n = a(2),
			o = a(4),
			l = a(5),
			r = (function () {
				var e = 0;
				return function () {
					return e++;
				};
			})(),
			s = function (e) {
				var t = e.data;
				t && t.apiVersion === n.API_VERSION && t.apiType === n.API_TYPE && e.origin === n.sfdcIframeOrigin && (o.executeCallback(t.methodName, t.callId, t.response), l.executeListeners(t.methodName, t.response));
			},
			c = function (e) {
				var t = {};
				if ("string" != typeof e) return t;
				if (("?" === e.charAt(0) && (e = e.slice(1)), 0 === e.length)) return t;
				for (var a = e.split("&"), n = 0; n < a.length; n++) {
					var o = a[n].split("=");
					if (o[0])
						if (t[o[0]])
							if ("object" === i(t[o[0]])) t[o[0]].push(o[1] ? decodeURIComponent(o[1]) : null);
							else {
								var l = t[o[0]];
								(t[o[0]] = []), t[o[0]].push(l), t[o[0]].push(o[1] ? decodeURIComponent(o[1]) : null);
							}
						else t[o[0]] = o[1] ? decodeURIComponent(o[1]) : null;
				}
				return t;
			},
			u = function (e, t, a, i) {
				var s = { methodName: e, callId: r(), apiVersion: n.API_VERSION, apiType: n.API_TYPE, isCallbackRegistered: !1, isListenerRegistered: !1, args: t };
				"function" == typeof a && (o.registerCallback(s.methodName, s.callId, a), (s.isCallbackRegistered = !0)), "function" == typeof i && (l.registerListener(s.methodName, i), (s.isListenerRegistered = !0)), parent.postMessage(s, n.sfdcIframeOrigin);
			},
			f = function (e) {
				if (!e || "function" != typeof e.callback) throw new Error("Missing the required argument `callback`!");
			},
			d = function (e) {
				if (!e || "function" != typeof e.listener) throw new Error("Missing the required argument `listener`!");
			},
			p = function (e) {
				if (!e || "object" !== i(e.value)) throw new Error("Missing the required argument `value object`!");
			},
			v = function (e, t) {
				if (((t && e.length) || !t) && (1 !== e.length || "object" !== i(e[0]) || !Object.keys(e[0]).length)) throw new Error("Must pass in only one object which holds arguments to this API method call.");
			};
		e.exports = { processPostMessage: s, parseUrlQueryString: c, invokeApiCall: u, validateCallback: f, validateListener: d, validateValueObject: p, validateArguments: v };
	},
	function (e, t) {
		"use strict";
		var a = {},
			i = function (e, t) {
				return e + "_" + t;
			};
		e.exports = {
			registerCallback: function (e, t, n) {
				a[i(e, t)] = n;
			},
			executeCallback: function (e, t, n) {
				var o = i(e, t);
				a[o] && (a[o].call(null, n), delete a[o]);
			},
		};
	},
	function (e, t) {
		"use strict";
		var a = {};
		e.exports = {
			registerListener: function (e, t) {
				a[e] ? a[e].push(t) : (a[e] = [t]);
			},
			executeListeners: function (e, t) {
				var i = a[e];
				i &&
					i.forEach(function (e) {
						e.call(null, t);
					});
			},
		};
	},
]);
!(function (e) {
	function t(i) {
		if (a[i]) return a[i].exports;
		var n = (a[i] = { exports: {}, id: i, loaded: !1 });
		return e[i].call(n.exports, n, n.exports, t), (n.loaded = !0), n.exports;
	}
	var a = {};
	return (t.m = e), (t.c = a), (t.p = "/assets/"), t(0);
})([
	function (e, t, a) {
		"use strict";
		(window.sforce = window.sforce || {}), (sforce.opencti = a(1)), sforce.opencti.initialize();
	},
	function (e, t, a) {
		"use strict";
		var i = a(2),
			n = a(3),
			o = /^http[s]?:\/\/[\w-.]+(\.((my-)?visual)?force\.com|\.my-lightning\.com|\.(my-)?salesforce\.com|\.(salesforce|crmforce)\.(mil|ms))(:\d+)?$/;
		e.exports = {
			initialize: function () {
				var e = n.parseUrlQueryString(location.search),
					t = e.sfdcIframeOrigin;
				if (!(t && e.mode && o.test(t) && 0 === t.indexOf(window.location.protocol))) throw "Failed to initialize Open CTI. Ensure that it is loaded from the right frame with correct URL parameters";
				(i.sfdcIframeOrigin = e.sfdcIframeOrigin), (i.mode = e.mode), window.addEventListener("message", n.processPostMessage, !1);
			},
			setSoftphonePanelVisibility: function (e) {
				n.validateArguments(arguments);
				var t = e ? e.callback : void 0;
				n.invokeApiCall("setSoftphonePanelVisibility", { visible: e.visible }, t);
			},
			isSoftphonePanelVisible: function (e) {
				n.validateArguments(arguments), n.validateCallback(e), n.invokeApiCall("isSoftphonePanelVisible", {}, e.callback);
			},
			SCREENPOP_TYPE: { URL: "url", SOBJECT: "sobject", OBJECTHOME: "objecthome", LIST: "list", SEARCH: "search", NEW_RECORD_MODAL: "newRecord" },
			screenPop: function (e) {
				n.validateArguments(arguments);
				var t = e ? e.callback : void 0;
				n.invokeApiCall("screenPop", { type: e.type, params: e.params }, t);
			},
			CALL_TYPE: { INBOUND: "inbound", OUTBOUND: "outbound", INTERNAL: "internal" },
			searchAndScreenPop: function (e) {
				n.validateArguments(arguments);
				var t = e ? e.callback : void 0;
				n.invokeApiCall("searchAndScreenPop", { searchParams: e.searchParams, callType: e.callType, queryParams: e.queryParams, defaultFieldValues: e.defaultFieldValues, deferred: e.deferred }, t);
			},
			getAppViewInfo: function (e) {
				n.validateArguments(arguments), n.validateCallback(e), n.invokeApiCall("getAppViewInfo", {}, e.callback);
			},
			saveLog: function (e) {
				n.validateArguments(arguments), n.validateValueObject(e);
				var t = e ? e.callback : void 0;
				n.invokeApiCall("saveLog", { object: e.value }, t);
			},
			refreshView: function (e) {
				n.validateArguments(arguments, !0);
				var t = e ? e.callback : void 0;
				n.invokeApiCall("refreshView", {}, t);
			},
			setSoftphoneItemLabel: function (e) {
				n.validateArguments(arguments);
				var t = e ? e.callback : void 0;
				n.invokeApiCall("setSoftphoneItemLabel", { label: e.label }, t);
			},
			setSoftphonePanelLabel: function (e) {
				n.validateArguments(arguments);
				var t = e ? e.callback : void 0;
				n.invokeApiCall("setSoftphonePanelLabel", { label: e.label }, t);
			},
			setSoftphoneItemIcon: function (e) {
				n.validateArguments(arguments);
				var t = e ? e.callback : void 0;
				n.invokeApiCall("setSoftphoneItemIcon", { key: e.key }, t);
			},
			setSoftphonePanelIcon: function (e) {
				n.validateArguments(arguments);
				var t = e ? e.callback : void 0;
				n.invokeApiCall("setSoftphonePanelIcon", { key: e.key }, t);
			},
			setSoftphonePanelHeight: function (e) {
				n.validateArguments(arguments);
				var t = e ? e.callback : void 0;
				n.invokeApiCall("setSoftphonePanelHeight", { heightPX: e.heightPX }, t);
			},
			setSoftphonePanelWidth: function (e) {
				n.validateArguments(arguments);
				var t = e ? e.callback : void 0;
				n.invokeApiCall("setSoftphonePanelWidth", { widthPX: e.widthPX }, t);
			},
			getCallCenterSettings: function (e) {
				n.validateArguments(arguments), n.validateCallback(e), n.invokeApiCall("getCallCenterSettings", {}, e.callback);
			},
			onClickToDial: function (e) {
				n.validateArguments(arguments), n.validateListener(e), n.invokeApiCall("onClickToDial", {}, void 0, e.listener);
			},
			enableClickToDial: function (e) {
				n.validateArguments(arguments, !0);
				var t = e ? e.callback : void 0;
				n.invokeApiCall("enableClickToDial", {}, t);
			},
			disableClickToDial: function (e) {
				n.validateArguments(arguments, !0);
				var t = e ? e.callback : void 0;
				n.invokeApiCall("disableClickToDial", {}, t);
			},
			getSoftphoneLayout: function (e) {
				n.validateArguments(arguments), n.validateCallback(e), n.invokeApiCall("getSoftphoneLayout", {}, e.callback);
			},
			onNavigationChange: function (e) {
				n.validateArguments(arguments), n.validateListener(e), n.invokeApiCall("onNavigationChange", {}, void 0, e.listener);
			},
			runApex: function (e) {
				n.validateArguments(arguments);
				var t = e ? e.callback : void 0;
				n.invokeApiCall("runApex", { apexClass: e.apexClass, methodName: e.methodName, methodParams: e.methodParams }, t);
			},
		};
	},
	function (e, t) {
		"use strict";
		e.exports = { API_VERSION: 40, API_TYPE: "opencti", sfdcIframeOrigin: null, mode: null };
	},
	function (e, t, a) {
		"use strict";
		var i =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (e) {
							return typeof e;
					  }
					: function (e) {
							return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
					  },
			n = a(2),
			o = a(4),
			l = a(5),
			r = (function () {
				var e = 0;
				return function () {
					return e++;
				};
			})(),
			s = function (e) {
				var t = e.data;
				t && t.apiVersion === n.API_VERSION && t.apiType === n.API_TYPE && e.origin === n.sfdcIframeOrigin && (o.executeCallback(t.methodName, t.callId, t.response), l.executeListeners(t.methodName, t.response));
			},
			c = function (e) {
				var t = {};
				if ("string" != typeof e) return t;
				if (("?" === e.charAt(0) && (e = e.slice(1)), 0 === e.length)) return t;
				for (var a = e.split("&"), n = 0; n < a.length; n++) {
					var o = a[n].split("=");
					if (o[0])
						if (t[o[0]])
							if ("object" === i(t[o[0]])) t[o[0]].push(o[1] ? decodeURIComponent(o[1]) : null);
							else {
								var l = t[o[0]];
								(t[o[0]] = []), t[o[0]].push(l), t[o[0]].push(o[1] ? decodeURIComponent(o[1]) : null);
							}
						else t[o[0]] = o[1] ? decodeURIComponent(o[1]) : null;
				}
				return t;
			},
			u = function (e, t, a, i) {
				var s = { methodName: e, callId: r(), apiVersion: n.API_VERSION, apiType: n.API_TYPE, isCallbackRegistered: !1, isListenerRegistered: !1, args: t };
				"function" == typeof a && (o.registerCallback(s.methodName, s.callId, a), (s.isCallbackRegistered = !0)), "function" == typeof i && (l.registerListener(s.methodName, i), (s.isListenerRegistered = !0)), parent.postMessage(s, n.sfdcIframeOrigin);
			},
			f = function (e) {
				if (!e || "function" != typeof e.callback) throw new Error("Missing the required argument `callback`!");
			},
			d = function (e) {
				if (!e || "function" != typeof e.listener) throw new Error("Missing the required argument `listener`!");
			},
			p = function (e) {
				if (!e || "object" !== i(e.value)) throw new Error("Missing the required argument `value object`!");
			},
			v = function (e, t) {
				if (((t && e.length) || !t) && (1 !== e.length || "object" !== i(e[0]) || !Object.keys(e[0]).length)) throw new Error("Must pass in only one object which holds arguments to this API method call.");
			};
		e.exports = { processPostMessage: s, parseUrlQueryString: c, invokeApiCall: u, validateCallback: f, validateListener: d, validateValueObject: p, validateArguments: v };
	},
	function (e, t) {
		"use strict";
		var a = {},
			i = function (e, t) {
				return e + "_" + t;
			};
		e.exports = {
			registerCallback: function (e, t, n) {
				a[i(e, t)] = n;
			},
			executeCallback: function (e, t, n) {
				var o = i(e, t);
				a[o] && (a[o].call(null, n), delete a[o]);
			},
		};
	},
	function (e, t) {
		"use strict";
		var a = {};
		e.exports = {
			registerListener: function (e, t) {
				a[e] ? a[e].push(t) : (a[e] = [t]);
			},
			executeListeners: function (e, t) {
				var i = a[e];
				i &&
					i.forEach(function (e) {
						e.call(null, t);
					});
			},
		};
	},
]);

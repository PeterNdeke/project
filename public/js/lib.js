! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t()
}(this, function() {
    "use strict";
    var m = "undefined" == typeof document ? {
            body: {},
            addEventListener: function() {},
            removeEventListener: function() {},
            activeElement: {
                blur: function() {},
                nodeName: ""
            },
            querySelector: function() {
                return null
            },
            querySelectorAll: function() {
                return []
            },
            getElementById: function() {
                return null
            },
            createEvent: function() {
                return {
                    initEvent: function() {}
                }
            },
            createElement: function() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute: function() {},
                    getElementsByTagName: function() {
                        return []
                    }
                }
            },
            location: {
                hash: ""
            }
        } : document,
        J = "undefined" == typeof window ? {
            document: m,
            navigator: {
                userAgent: ""
            },
            location: {},
            history: {},
            CustomEvent: function() {
                return this
            },
            addEventListener: function() {},
            removeEventListener: function() {},
            getComputedStyle: function() {
                return {
                    getPropertyValue: function() {
                        return ""
                    }
                }
            },
            Image: function() {},
            Date: function() {},
            screen: {},
            setTimeout: function() {},
            clearTimeout: function() {}
        } : window,
        l = function(e) {
            for (var t = 0; t < e.length; t += 1) this[t] = e[t];
            return this.length = e.length, this
        };

    function M(e, t) {
        var n = [],
            i = 0;
        if (e && !t && e instanceof l) return e;
        if (e)
            if ("string" == typeof e) {
                var r, s, o = e.trim();
                if (0 <= o.indexOf("<") && 0 <= o.indexOf(">")) {
                    var a = "div";
                    for (0 === o.indexOf("<li") && (a = "ul"), 0 === o.indexOf("<tr") && (a = "tbody"), 0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (a = "tr"), 0 === o.indexOf("<tbody") && (a = "table"), 0 === o.indexOf("<option") && (a = "select"), (s = m.createElement(a)).innerHTML = o, i = 0; i < s.childNodes.length; i += 1) n.push(s.childNodes[i])
                } else
                    for (r = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || m).querySelectorAll(e.trim()) : [m.getElementById(e.trim().split("#")[1])], i = 0; i < r.length; i += 1) r[i] && n.push(r[i])
            } else if (e.nodeType || e === J || e === m) n.push(e);
        else if (0 < e.length && e[0].nodeType)
            for (i = 0; i < e.length; i += 1) n.push(e[i]);
        return new l(n)
    }

    function s(e) {
        for (var t = [], n = 0; n < e.length; n += 1) - 1 === t.indexOf(e[n]) && t.push(e[n]);
        return t
    }
    M.fn = l.prototype, M.Class = l, M.Dom7 = l;
    var t = {
        addClass: function(e) {
            if (void 0 === e) return this;
            for (var t = e.split(" "), n = 0; n < t.length; n += 1)
                for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.add(t[n]);
            return this
        },
        removeClass: function(e) {
            for (var t = e.split(" "), n = 0; n < t.length; n += 1)
                for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.remove(t[n]);
            return this
        },
        hasClass: function(e) {
            return !!this[0] && this[0].classList.contains(e)
        },
        toggleClass: function(e) {
            for (var t = e.split(" "), n = 0; n < t.length; n += 1)
                for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.toggle(t[n]);
            return this
        },
        attr: function(e, t) {
            var n = arguments;
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var i = 0; i < this.length; i += 1)
                if (2 === n.length) this[i].setAttribute(e, t);
                else
                    for (var r in e) this[i][r] = e[r], this[i].setAttribute(r, e[r]);
            return this
        },
        removeAttr: function(e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        },
        data: function(e, t) {
            var n;
            if (void 0 !== t) {
                for (var i = 0; i < this.length; i += 1)(n = this[i]).dom7ElementDataStorage || (n.dom7ElementDataStorage = {}), n.dom7ElementDataStorage[e] = t;
                return this
            }
            if (n = this[0]) {
                if (n.dom7ElementDataStorage && e in n.dom7ElementDataStorage) return n.dom7ElementDataStorage[e];
                var r = n.getAttribute("data-" + e);
                return r || void 0
            }
        },
        transform: function(e) {
            for (var t = 0; t < this.length; t += 1) {
                var n = this[t].style;
                n.webkitTransform = e, n.transform = e
            }
            return this
        },
        transition: function(e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var n = this[t].style;
                n.webkitTransitionDuration = e, n.transitionDuration = e
            }
            return this
        },
        on: function() {
            for (var e, t = [], n = arguments.length; n--;) t[n] = arguments[n];
            var i = t[0],
                s = t[1],
                o = t[2],
                r = t[3];

            function a(e) {
                var t = e.target;
                if (t) {
                    var n = e.target.dom7EventData || [];
                    if (n.indexOf(e) < 0 && n.unshift(e), M(t).is(s)) o.apply(t, n);
                    else
                        for (var i = M(t).parents(), r = 0; r < i.length; r += 1) M(i[r]).is(s) && o.apply(i[r], n)
                }
            }

            function l(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), o.apply(this, t)
            }
            "function" == typeof t[1] && (i = (e = t)[0], o = e[1], r = e[2], s = void 0), r || (r = !1);
            for (var c, u = i.split(" "), d = 0; d < this.length; d += 1) {
                var h = this[d];
                if (s)
                    for (c = 0; c < u.length; c += 1) {
                        var p = u[c];
                        h.dom7LiveListeners || (h.dom7LiveListeners = {}), h.dom7LiveListeners[p] || (h.dom7LiveListeners[p] = []), h.dom7LiveListeners[p].push({
                            listener: o,
                            proxyListener: a
                        }), h.addEventListener(p, a, r)
                    } else
                        for (c = 0; c < u.length; c += 1) {
                            var f = u[c];
                            h.dom7Listeners || (h.dom7Listeners = {}), h.dom7Listeners[f] || (h.dom7Listeners[f] = []), h.dom7Listeners[f].push({
                                listener: o,
                                proxyListener: l
                            }), h.addEventListener(f, l, r)
                        }
            }
            return this
        },
        off: function() {
            for (var e, t = [], n = arguments.length; n--;) t[n] = arguments[n];
            var i = t[0],
                r = t[1],
                s = t[2],
                o = t[3];
            "function" == typeof t[1] && (i = (e = t)[0], s = e[1], o = e[2], r = void 0), o || (o = !1);
            for (var a = i.split(" "), l = 0; l < a.length; l += 1)
                for (var c = a[l], u = 0; u < this.length; u += 1) {
                    var d = this[u],
                        h = void 0;
                    if (!r && d.dom7Listeners ? h = d.dom7Listeners[c] : r && d.dom7LiveListeners && (h = d.dom7LiveListeners[c]), h && h.length)
                        for (var p = h.length - 1; 0 <= p; p -= 1) {
                            var f = h[p];
                            s && f.listener === s ? (d.removeEventListener(c, f.proxyListener, o), h.splice(p, 1)) : s || (d.removeEventListener(c, f.proxyListener, o), h.splice(p, 1))
                        }
                }
            return this
        },
        trigger: function() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            for (var n = e[0].split(" "), i = e[1], r = 0; r < n.length; r += 1)
                for (var s = n[r], o = 0; o < this.length; o += 1) {
                    var a = this[o],
                        l = void 0;
                    try {
                        l = new J.CustomEvent(s, {
                            detail: i,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (e) {
                        (l = m.createEvent("Event")).initEvent(s, !0, !0), l.detail = i
                    }
                    a.dom7EventData = e.filter(function(e, t) {
                        return 0 < t
                    }), a.dispatchEvent(l), a.dom7EventData = [], delete a.dom7EventData
                }
            return this
        },
        transitionEnd: function(t) {
            var n, i = ["webkitTransitionEnd", "transitionend"],
                r = this;

            function s(e) {
                if (e.target === this)
                    for (t.call(this, e), n = 0; n < i.length; n += 1) r.off(i[n], s)
            }
            if (t)
                for (n = 0; n < i.length; n += 1) r.on(i[n], s);
            return this
        },
        outerWidth: function(e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        offset: function() {
            if (0 < this.length) {
                var e = this[0],
                    t = e.getBoundingClientRect(),
                    n = m.body,
                    i = e.clientTop || n.clientTop || 0,
                    r = e.clientLeft || n.clientLeft || 0,
                    s = e === J ? J.scrollY : e.scrollTop,
                    o = e === J ? J.scrollX : e.scrollLeft;
                return {
                    top: t.top + s - i,
                    left: t.left + o - r
                }
            }
            return null
        },
        css: function(e, t) {
            var n;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (n = 0; n < this.length; n += 1)
                        for (var i in e) this[n].style[i] = e[i];
                    return this
                }
                if (this[0]) return J.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
                return this
            }
            return this
        },
        each: function(e) {
            if (!e) return this;
            for (var t = 0; t < this.length; t += 1)
                if (!1 === e.call(this[t], t, this[t])) return this;
            return this
        },
        html: function(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        },
        is: function(e) {
            var t, n, i = this[0];
            if (!i || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (i.matches) return i.matches(e);
                if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                if (i.msMatchesSelector) return i.msMatchesSelector(e);
                for (t = M(e), n = 0; n < t.length; n += 1)
                    if (t[n] === i) return !0;
                return !1
            }
            if (e === m) return i === m;
            if (e === J) return i === J;
            if (e.nodeType || e instanceof l) {
                for (t = e.nodeType ? [e] : e, n = 0; n < t.length; n += 1)
                    if (t[n] === i) return !0;
                return !1
            }
            return !1
        },
        index: function() {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e) return this;
            var t, n = this.length;
            return new l(n - 1 < e ? [] : e < 0 ? (t = n + e) < 0 ? [] : [this[t]] : [this[e]])
        },
        append: function() {
            for (var e, t = [], n = arguments.length; n--;) t[n] = arguments[n];
            for (var i = 0; i < t.length; i += 1) {
                e = t[i];
                for (var r = 0; r < this.length; r += 1)
                    if ("string" == typeof e) {
                        var s = m.createElement("div");
                        for (s.innerHTML = e; s.firstChild;) this[r].appendChild(s.firstChild)
                    } else if (e instanceof l)
                    for (var o = 0; o < e.length; o += 1) this[r].appendChild(e[o]);
                else this[r].appendChild(e)
            }
            return this
        },
        prepend: function(e) {
            var t, n;
            for (t = 0; t < this.length; t += 1)
                if ("string" == typeof e) {
                    var i = m.createElement("div");
                    for (i.innerHTML = e, n = i.childNodes.length - 1; 0 <= n; n -= 1) this[t].insertBefore(i.childNodes[n], this[t].childNodes[0])
                } else if (e instanceof l)
                for (n = 0; n < e.length; n += 1) this[t].insertBefore(e[n], this[t].childNodes[0]);
            else this[t].insertBefore(e, this[t].childNodes[0]);
            return this
        },
        next: function(e) {
            return 0 < this.length ? e ? this[0].nextElementSibling && M(this[0].nextElementSibling).is(e) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([])
        },
        nextAll: function(e) {
            var t = [],
                n = this[0];
            if (!n) return new l([]);
            for (; n.nextElementSibling;) {
                var i = n.nextElementSibling;
                e ? M(i).is(e) && t.push(i) : t.push(i), n = i
            }
            return new l(t)
        },
        prev: function(e) {
            if (0 < this.length) {
                var t = this[0];
                return e ? t.previousElementSibling && M(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([]) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([])
            }
            return new l([])
        },
        prevAll: function(e) {
            var t = [],
                n = this[0];
            if (!n) return new l([]);
            for (; n.previousElementSibling;) {
                var i = n.previousElementSibling;
                e ? M(i).is(e) && t.push(i) : t.push(i), n = i
            }
            return new l(t)
        },
        parent: function(e) {
            for (var t = [], n = 0; n < this.length; n += 1) null !== this[n].parentNode && (e ? M(this[n].parentNode).is(e) && t.push(this[n].parentNode) : t.push(this[n].parentNode));
            return M(s(t))
        },
        parents: function(e) {
            for (var t = [], n = 0; n < this.length; n += 1)
                for (var i = this[n].parentNode; i;) e ? M(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
            return M(s(t))
        },
        closest: function(e) {
            var t = this;
            return void 0 === e ? new l([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function(e) {
            for (var t = [], n = 0; n < this.length; n += 1)
                for (var i = this[n].querySelectorAll(e), r = 0; r < i.length; r += 1) t.push(i[r]);
            return new l(t)
        },
        children: function(e) {
            for (var t = [], n = 0; n < this.length; n += 1)
                for (var i = this[n].childNodes, r = 0; r < i.length; r += 1) e ? 1 === i[r].nodeType && M(i[r]).is(e) && t.push(i[r]) : 1 === i[r].nodeType && t.push(i[r]);
            return new l(s(t))
        },
        remove: function() {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        },
        add: function() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var n, i;
            for (n = 0; n < e.length; n += 1) {
                var r = M(e[n]);
                for (i = 0; i < r.length; i += 1) this[this.length] = r[i], this.length += 1
            }
            return this
        },
        styles: function() {
            return this[0] ? J.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(t).forEach(function(e) {
        M.fn[e] = t[e]
    });
    var e, n, i, ee = {
            deleteProps: function(e) {
                var t = e;
                Object.keys(t).forEach(function(e) {
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                })
            },
            nextTick: function(e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t)
            },
            now: function() {
                return Date.now()
            },
            getTranslate: function(e, t) {
                var n, i, r;
                void 0 === t && (t = "x");
                var s = J.getComputedStyle(e, null);
                return J.WebKitCSSMatrix ? (6 < (i = s.transform || s.webkitTransform).split(",").length && (i = i.split(", ").map(function(e) {
                    return e.replace(",", ".")
                }).join(", ")), r = new J.WebKitCSSMatrix("none" === i ? "" : i)) : n = (r = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = J.WebKitCSSMatrix ? r.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (i = J.WebKitCSSMatrix ? r.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), i || 0
            },
            parseUrlQuery: function(e) {
                var t, n, i, r, s = {},
                    o = e || J.location.href;
                if ("string" == typeof o && o.length)
                    for (r = (n = (o = -1 < o.indexOf("?") ? o.replace(/\S*\?/, "") : "").split("&").filter(function(e) {
                            return "" !== e
                        })).length, t = 0; t < r; t += 1) i = n[t].replace(/#\S+/g, "").split("="), s[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "";
                return s
            },
            isObject: function(e) {
                return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
            },
            extend: function() {
                for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                for (var n = Object(e[0]), i = 1; i < e.length; i += 1) {
                    var r = e[i];
                    if (null != r)
                        for (var s = Object.keys(Object(r)), o = 0, a = s.length; o < a; o += 1) {
                            var l = s[o],
                                c = Object.getOwnPropertyDescriptor(r, l);
                            void 0 !== c && c.enumerable && (ee.isObject(n[l]) && ee.isObject(r[l]) ? ee.extend(n[l], r[l]) : !ee.isObject(n[l]) && ee.isObject(r[l]) ? (n[l] = {}, ee.extend(n[l], r[l])) : n[l] = r[l])
                        }
                }
                return n
            }
        },
        te = (i = m.createElement("div"), {
            touch: J.Modernizr && !0 === J.Modernizr.touch || !!(0 < J.navigator.maxTouchPoints || "ontouchstart" in J || J.DocumentTouch && m instanceof J.DocumentTouch),
            pointerEvents: !!(J.navigator.pointerEnabled || J.PointerEvent || "maxTouchPoints" in J.navigator),
            prefixedPointerEvents: !!J.navigator.msPointerEnabled,
            transition: (n = i.style, "transition" in n || "webkitTransition" in n || "MozTransition" in n),
            transforms3d: J.Modernizr && !0 === J.Modernizr.csstransforms3d || (e = i.style, "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e),
            flexbox: function() {
                for (var e = i.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), n = 0; n < t.length; n += 1)
                    if (t[n] in e) return !0;
                return !1
            }(),
            observer: "MutationObserver" in J || "WebkitMutationObserver" in J,
            passiveListener: function() {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0
                        }
                    });
                    J.addEventListener("testPassiveListener", null, t)
                } catch (e) {}
                return e
            }(),
            gestures: "ongesturestart" in J
        }),
        r = function(e) {
            void 0 === e && (e = {});
            var t = this;
            t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
                t.on(e, t.params.on[e])
            })
        },
        o = {
            components: {
                configurable: !0
            }
        };
    r.prototype.on = function(e, t, n) {
        var i = this;
        if ("function" != typeof t) return i;
        var r = n ? "unshift" : "push";
        return e.split(" ").forEach(function(e) {
            i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][r](t)
        }), i
    }, r.prototype.once = function(i, r, e) {
        var s = this;
        if ("function" != typeof r) return s;
        return s.on(i, function e() {
            for (var t = [], n = arguments.length; n--;) t[n] = arguments[n];
            r.apply(s, t), s.off(i, e)
        }, e)
    }, r.prototype.off = function(e, i) {
        var r = this;
        return r.eventsListeners && e.split(" ").forEach(function(n) {
            void 0 === i ? r.eventsListeners[n] = [] : r.eventsListeners[n] && r.eventsListeners[n].length && r.eventsListeners[n].forEach(function(e, t) {
                e === i && r.eventsListeners[n].splice(t, 1)
            })
        }), r
    }, r.prototype.emit = function() {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var n, i, r, s = this;
        return s.eventsListeners && ("string" == typeof e[0] || Array.isArray(e[0]) ? (n = e[0], i = e.slice(1, e.length), r = s) : (n = e[0].events, i = e[0].data, r = e[0].context || s), (Array.isArray(n) ? n : n.split(" ")).forEach(function(e) {
            if (s.eventsListeners && s.eventsListeners[e]) {
                var t = [];
                s.eventsListeners[e].forEach(function(e) {
                    t.push(e)
                }), t.forEach(function(e) {
                    e.apply(r, i)
                })
            }
        })), s
    }, r.prototype.useModulesParams = function(n) {
        var i = this;
        i.modules && Object.keys(i.modules).forEach(function(e) {
            var t = i.modules[e];
            t.params && ee.extend(n, t.params)
        })
    }, r.prototype.useModules = function(i) {
        void 0 === i && (i = {});
        var r = this;
        r.modules && Object.keys(r.modules).forEach(function(e) {
            var n = r.modules[e],
                t = i[e] || {};
            n.instance && Object.keys(n.instance).forEach(function(e) {
                var t = n.instance[e];
                r[e] = "function" == typeof t ? t.bind(r) : t
            }), n.on && r.on && Object.keys(n.on).forEach(function(e) {
                r.on(e, n.on[e])
            }), n.create && n.create.bind(r)(t)
        })
    }, o.components.set = function(e) {
        this.use && this.use(e)
    }, r.installModule = function(t) {
        for (var e = [], n = arguments.length - 1; 0 < n--;) e[n] = arguments[n + 1];
        var i = this;
        i.prototype.modules || (i.prototype.modules = {});
        var r = t.name || Object.keys(i.prototype.modules).length + "_" + ee.now();
        return (i.prototype.modules[r] = t).proto && Object.keys(t.proto).forEach(function(e) {
            i.prototype[e] = t.proto[e]
        }), t.static && Object.keys(t.static).forEach(function(e) {
            i[e] = t.static[e]
        }), t.install && t.install.apply(i, e), i
    }, r.use = function(e) {
        for (var t = [], n = arguments.length - 1; 0 < n--;) t[n] = arguments[n + 1];
        var i = this;
        return Array.isArray(e) ? (e.forEach(function(e) {
            return i.installModule(e)
        }), i) : i.installModule.apply(i, [e].concat(t))
    }, Object.defineProperties(r, o);
    var a = {
        updateSize: function() {
            var e, t, n = this,
                i = n.$el;
            e = void 0 !== n.params.width ? n.params.width : i[0].clientWidth, t = void 0 !== n.params.height ? n.params.height : i[0].clientHeight, 0 === e && n.isHorizontal() || 0 === t && n.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), ee.extend(n, {
                width: e,
                height: t,
                size: n.isHorizontal() ? e : t
            }))
        },
        updateSlides: function() {
            var e = this,
                t = e.params,
                n = e.$wrapperEl,
                i = e.size,
                r = e.rtlTranslate,
                s = e.wrongRTL,
                o = e.virtual && t.virtual.enabled,
                a = o ? e.virtual.slides.length : e.slides.length,
                l = n.children("." + e.params.slideClass),
                c = o ? e.virtual.slides.length : l.length,
                u = [],
                d = [],
                h = [],
                p = t.slidesOffsetBefore;
            "function" == typeof p && (p = t.slidesOffsetBefore.call(e));
            var f = t.slidesOffsetAfter;
            "function" == typeof f && (f = t.slidesOffsetAfter.call(e));
            var m = e.snapGrid.length,
                v = e.snapGrid.length,
                g = t.spaceBetween,
                y = -p,
                b = 0,
                w = 0;
            if (void 0 !== i) {
                var x, E;
                "string" == typeof g && 0 <= g.indexOf("%") && (g = parseFloat(g.replace("%", "")) / 100 * i), e.virtualSize = -g, r ? l.css({
                    marginLeft: "",
                    marginTop: ""
                }) : l.css({
                    marginRight: "",
                    marginBottom: ""
                }), 1 < t.slidesPerColumn && (x = Math.floor(c / t.slidesPerColumn) === c / e.params.slidesPerColumn ? c : Math.ceil(c / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));
                for (var T, S = t.slidesPerColumn, C = x / S, _ = Math.floor(c / t.slidesPerColumn), k = 0; k < c; k += 1) {
                    E = 0;
                    var A = l.eq(k);
                    if (1 < t.slidesPerColumn) {
                        var D = void 0,
                            O = void 0,
                            M = void 0;
                        "column" === t.slidesPerColumnFill ? (M = k - (O = Math.floor(k / S)) * S, (_ < O || O === _ && M === S - 1) && S <= (M += 1) && (M = 0, O += 1), D = O + M * x / S, A.css({
                            "-webkit-box-ordinal-group": D,
                            "-moz-box-ordinal-group": D,
                            "-ms-flex-order": D,
                            "-webkit-order": D,
                            order: D
                        })) : O = k - (M = Math.floor(k / C)) * C, A.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== M && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", O).attr("data-swiper-row", M)
                    }
                    if ("none" !== A.css("display")) {
                        if ("auto" === t.slidesPerView) {
                            var I = J.getComputedStyle(A[0], null),
                                P = A[0].style.transform,
                                L = A[0].style.webkitTransform;
                            if (P && (A[0].style.transform = "none"), L && (A[0].style.webkitTransform = "none"), t.roundLengths) E = e.isHorizontal() ? A.outerWidth(!0) : A.outerHeight(!0);
                            else if (e.isHorizontal()) {
                                var N = parseFloat(I.getPropertyValue("width")),
                                    j = parseFloat(I.getPropertyValue("padding-left")),
                                    z = parseFloat(I.getPropertyValue("padding-right")),
                                    H = parseFloat(I.getPropertyValue("margin-left")),
                                    q = parseFloat(I.getPropertyValue("margin-right")),
                                    R = I.getPropertyValue("box-sizing");
                                E = R && "border-box" === R ? N + H + q : N + j + z + H + q
                            } else {
                                var $ = parseFloat(I.getPropertyValue("height")),
                                    B = parseFloat(I.getPropertyValue("padding-top")),
                                    F = parseFloat(I.getPropertyValue("padding-bottom")),
                                    W = parseFloat(I.getPropertyValue("margin-top")),
                                    V = parseFloat(I.getPropertyValue("margin-bottom")),
                                    Y = I.getPropertyValue("box-sizing");
                                E = Y && "border-box" === Y ? $ + W + V : $ + B + F + W + V
                            }
                            P && (A[0].style.transform = P), L && (A[0].style.webkitTransform = L), t.roundLengths && (E = Math.floor(E))
                        } else E = (i - (t.slidesPerView - 1) * g) / t.slidesPerView, t.roundLengths && (E = Math.floor(E)), l[k] && (e.isHorizontal() ? l[k].style.width = E + "px" : l[k].style.height = E + "px");
                        l[k] && (l[k].swiperSlideSize = E), h.push(E), t.centeredSlides ? (y = y + E / 2 + b / 2 + g, 0 === b && 0 !== k && (y = y - i / 2 - g), 0 === k && (y = y - i / 2 - g), Math.abs(y) < .001 && (y = 0), t.roundLengths && (y = Math.floor(y)), w % t.slidesPerGroup == 0 && u.push(y), d.push(y)) : (t.roundLengths && (y = Math.floor(y)), w % t.slidesPerGroup == 0 && u.push(y), d.push(y), y = y + E + g), e.virtualSize += E + g, b = E, w += 1
                    }
                }
                if (e.virtualSize = Math.max(e.virtualSize, i) + f, r && s && ("slide" === t.effect || "coverflow" === t.effect) && n.css({
                        width: e.virtualSize + t.spaceBetween + "px"
                    }), te.flexbox && !t.setWrapperSize || (e.isHorizontal() ? n.css({
                        width: e.virtualSize + t.spaceBetween + "px"
                    }) : n.css({
                        height: e.virtualSize + t.spaceBetween + "px"
                    })), 1 < t.slidesPerColumn && (e.virtualSize = (E + t.spaceBetween) * x, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? n.css({
                        width: e.virtualSize + t.spaceBetween + "px"
                    }) : n.css({
                        height: e.virtualSize + t.spaceBetween + "px"
                    }), t.centeredSlides)) {
                    T = [];
                    for (var X = 0; X < u.length; X += 1) {
                        var G = u[X];
                        t.roundLengths && (G = Math.floor(G)), u[X] < e.virtualSize + u[0] && T.push(G)
                    }
                    u = T
                }
                if (!t.centeredSlides) {
                    T = [];
                    for (var U = 0; U < u.length; U += 1) {
                        var Q = u[U];
                        t.roundLengths && (Q = Math.floor(Q)), u[U] <= e.virtualSize - i && T.push(Q)
                    }
                    u = T, 1 < Math.floor(e.virtualSize - i) - Math.floor(u[u.length - 1]) && u.push(e.virtualSize - i)
                }
                if (0 === u.length && (u = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? r ? l.css({
                        marginLeft: g + "px"
                    }) : l.css({
                        marginRight: g + "px"
                    }) : l.css({
                        marginBottom: g + "px"
                    })), t.centerInsufficientSlides) {
                    var K = 0;
                    if (h.forEach(function(e) {
                            K += e + (t.spaceBetween ? t.spaceBetween : 0)
                        }), (K -= t.spaceBetween) < i) {
                        var Z = (i - K) / 2;
                        u.forEach(function(e, t) {
                            u[t] = e - Z
                        }), d.forEach(function(e, t) {
                            d[t] = e + Z
                        })
                    }
                }
                ee.extend(e, {
                    slides: l,
                    snapGrid: u,
                    slidesGrid: d,
                    slidesSizesGrid: h
                }), c !== a && e.emit("slidesLengthChange"), u.length !== m && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), d.length !== v && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
            }
        },
        updateAutoHeight: function(e) {
            var t, n = this,
                i = [],
                r = 0;
            if ("number" == typeof e ? n.setTransition(e) : !0 === e && n.setTransition(n.params.speed), "auto" !== n.params.slidesPerView && 1 < n.params.slidesPerView)
                for (t = 0; t < Math.ceil(n.params.slidesPerView); t += 1) {
                    var s = n.activeIndex + t;
                    if (s > n.slides.length) break;
                    i.push(n.slides.eq(s)[0])
                } else i.push(n.slides.eq(n.activeIndex)[0]);
            for (t = 0; t < i.length; t += 1)
                if (void 0 !== i[t]) {
                    var o = i[t].offsetHeight;
                    r = r < o ? o : r
                }
            r && n.$wrapperEl.css("height", r + "px")
        },
        updateSlidesOffset: function() {
            for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
        },
        updateSlidesProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this,
                n = t.params,
                i = t.slides,
                r = t.rtlTranslate;
            if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                var s = -e;
                r && (s = e), i.removeClass(n.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                for (var o = 0; o < i.length; o += 1) {
                    var a = i[o],
                        l = (s + (n.centeredSlides ? t.minTranslate() : 0) - a.swiperSlideOffset) / (a.swiperSlideSize + n.spaceBetween);
                    if (n.watchSlidesVisibility) {
                        var c = -(s - a.swiperSlideOffset),
                            u = c + t.slidesSizesGrid[o];
                        (0 <= c && c < t.size || 0 < u && u <= t.size || c <= 0 && u >= t.size) && (t.visibleSlides.push(a), t.visibleSlidesIndexes.push(o), i.eq(o).addClass(n.slideVisibleClass))
                    }
                    a.progress = r ? -l : l
                }
                t.visibleSlides = M(t.visibleSlides)
            }
        },
        updateProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this,
                n = t.params,
                i = t.maxTranslate() - t.minTranslate(),
                r = t.progress,
                s = t.isBeginning,
                o = t.isEnd,
                a = s,
                l = o;
            0 === i ? o = s = !(r = 0) : (s = (r = (e - t.minTranslate()) / i) <= 0, o = 1 <= r), ee.extend(t, {
                progress: r,
                isBeginning: s,
                isEnd: o
            }), (n.watchSlidesProgress || n.watchSlidesVisibility) && t.updateSlidesProgress(e), s && !a && t.emit("reachBeginning toEdge"), o && !l && t.emit("reachEnd toEdge"), (a && !s || l && !o) && t.emit("fromEdge"), t.emit("progress", r)
        },
        updateSlidesClasses: function() {
            var e, t = this,
                n = t.slides,
                i = t.params,
                r = t.$wrapperEl,
                s = t.activeIndex,
                o = t.realIndex,
                a = t.virtual && i.virtual.enabled;
            n.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = a ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + s + '"]') : n.eq(s)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? r.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o + '"]').addClass(i.slideDuplicateActiveClass) : r.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o + '"]').addClass(i.slideDuplicateActiveClass));
            var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
            i.loop && 0 === l.length && (l = n.eq(0)).addClass(i.slideNextClass);
            var c = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
            i.loop && 0 === c.length && (c = n.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? r.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : r.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), c.hasClass(i.slideDuplicateClass) ? r.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + c.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : r.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + c.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
        },
        updateActiveIndex: function(e) {
            var t, n = this,
                i = n.rtlTranslate ? n.translate : -n.translate,
                r = n.slidesGrid,
                s = n.snapGrid,
                o = n.params,
                a = n.activeIndex,
                l = n.realIndex,
                c = n.snapIndex,
                u = e;
            if (void 0 === u) {
                for (var d = 0; d < r.length; d += 1) void 0 !== r[d + 1] ? i >= r[d] && i < r[d + 1] - (r[d + 1] - r[d]) / 2 ? u = d : i >= r[d] && i < r[d + 1] && (u = d + 1) : i >= r[d] && (u = d);
                o.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0)
            }
            if ((t = 0 <= s.indexOf(i) ? s.indexOf(i) : Math.floor(u / o.slidesPerGroup)) >= s.length && (t = s.length - 1), u !== a) {
                var h = parseInt(n.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
                ee.extend(n, {
                    snapIndex: t,
                    realIndex: h,
                    previousIndex: a,
                    activeIndex: u
                }), n.emit("activeIndexChange"), n.emit("snapIndexChange"), l !== h && n.emit("realIndexChange"), n.emit("slideChange")
            } else t !== c && (n.snapIndex = t, n.emit("snapIndexChange"))
        },
        updateClickedSlide: function(e) {
            var t = this,
                n = t.params,
                i = M(e.target).closest("." + n.slideClass)[0],
                r = !1;
            if (i)
                for (var s = 0; s < t.slides.length; s += 1) t.slides[s] === i && (r = !0);
            if (!i || !r) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
            t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(M(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = M(i).index(), n.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
        }
    };
    var c = {
        getTranslate: function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params,
                n = this.rtlTranslate,
                i = this.translate,
                r = this.$wrapperEl;
            if (t.virtualTranslate) return n ? -i : i;
            var s = ee.getTranslate(r[0], e);
            return n && (s = -s), s || 0
        },
        setTranslate: function(e, t) {
            var n = this,
                i = n.rtlTranslate,
                r = n.params,
                s = n.$wrapperEl,
                o = n.progress,
                a = 0,
                l = 0;
            n.isHorizontal() ? a = i ? -e : e : l = e, r.roundLengths && (a = Math.floor(a), l = Math.floor(l)), r.virtualTranslate || (te.transforms3d ? s.transform("translate3d(" + a + "px, " + l + "px, 0px)") : s.transform("translate(" + a + "px, " + l + "px)")), n.previousTranslate = n.translate, n.translate = n.isHorizontal() ? a : l;
            var c = n.maxTranslate() - n.minTranslate();
            (0 === c ? 0 : (e - n.minTranslate()) / c) !== o && n.updateProgress(e), n.emit("setTranslate", n.translate, t)
        },
        minTranslate: function() {
            return -this.snapGrid[0]
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1]
        }
    };
    var u = {
        setTransition: function(e, t) {
            this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
        },
        transitionStart: function(e, t) {
            void 0 === e && (e = !0);
            var n = this,
                i = n.activeIndex,
                r = n.params,
                s = n.previousIndex;
            r.autoHeight && n.updateAutoHeight();
            var o = t;
            if (o || (o = s < i ? "next" : i < s ? "prev" : "reset"), n.emit("transitionStart"), e && i !== s) {
                if ("reset" === o) return void n.emit("slideResetTransitionStart");
                n.emit("slideChangeTransitionStart"), "next" === o ? n.emit("slideNextTransitionStart") : n.emit("slidePrevTransitionStart")
            }
        },
        transitionEnd: function(e, t) {
            void 0 === e && (e = !0);
            var n = this,
                i = n.activeIndex,
                r = n.previousIndex;
            n.animating = !1, n.setTransition(0);
            var s = t;
            if (s || (s = r < i ? "next" : i < r ? "prev" : "reset"), n.emit("transitionEnd"), e && i !== r) {
                if ("reset" === s) return void n.emit("slideResetTransitionEnd");
                n.emit("slideChangeTransitionEnd"), "next" === s ? n.emit("slideNextTransitionEnd") : n.emit("slidePrevTransitionEnd")
            }
        }
    };
    var d = {
        slideTo: function(e, t, n, i) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0);
            var r = this,
                s = e;
            s < 0 && (s = 0);
            var o = r.params,
                a = r.snapGrid,
                l = r.slidesGrid,
                c = r.previousIndex,
                u = r.activeIndex,
                d = r.rtlTranslate;
            if (r.animating && o.preventInteractionOnTransition) return !1;
            var h = Math.floor(s / o.slidesPerGroup);
            h >= a.length && (h = a.length - 1), (u || o.initialSlide || 0) === (c || 0) && n && r.emit("beforeSlideChangeStart");
            var p, f = -a[h];
            if (r.updateProgress(f), o.normalizeSlideIndex)
                for (var m = 0; m < l.length; m += 1) - Math.floor(100 * f) >= Math.floor(100 * l[m]) && (s = m);
            if (r.initialized && s !== u) {
                if (!r.allowSlideNext && f < r.translate && f < r.minTranslate()) return !1;
                if (!r.allowSlidePrev && f > r.translate && f > r.maxTranslate() && (u || 0) !== s) return !1
            }
            return p = u < s ? "next" : s < u ? "prev" : "reset", d && -f === r.translate || !d && f === r.translate ? (r.updateActiveIndex(s), o.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== o.effect && r.setTranslate(f), "reset" !== p && (r.transitionStart(n, p), r.transitionEnd(n, p)), !1) : (0 !== t && te.transition ? (r.setTransition(t), r.setTranslate(f), r.updateActiveIndex(s), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, i), r.transitionStart(n, p), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(n, p))
            }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))) : (r.setTransition(0), r.setTranslate(f), r.updateActiveIndex(s), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, i), r.transitionStart(n, p), r.transitionEnd(n, p)), !0)
        },
        slideToLoop: function(e, t, n, i) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0);
            var r = e;
            return this.params.loop && (r += this.loopedSlides), this.slideTo(r, t, n, i)
        },
        slideNext: function(e, t, n) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this,
                r = i.params,
                s = i.animating;
            return r.loop ? !s && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex + r.slidesPerGroup, e, t, n)) : i.slideTo(i.activeIndex + r.slidesPerGroup, e, t, n)
        },
        slidePrev: function(e, t, n) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this,
                r = i.params,
                s = i.animating,
                o = i.snapGrid,
                a = i.slidesGrid,
                l = i.rtlTranslate;
            if (r.loop) {
                if (s) return !1;
                i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
            }

            function c(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            var u, d = c(l ? i.translate : -i.translate),
                h = o.map(function(e) {
                    return c(e)
                }),
                p = (a.map(function(e) {
                    return c(e)
                }), o[h.indexOf(d)], o[h.indexOf(d) - 1]);
            return void 0 !== p && (u = a.indexOf(p)) < 0 && (u = i.activeIndex - 1), i.slideTo(u, e, t, n)
        },
        slideReset: function(e, t, n) {
            return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, n)
        },
        slideToClosest: function(e, t, n) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this,
                r = i.activeIndex,
                s = Math.floor(r / i.params.slidesPerGroup);
            if (s < i.snapGrid.length - 1) {
                var o = i.rtlTranslate ? i.translate : -i.translate,
                    a = i.snapGrid[s];
                (i.snapGrid[s + 1] - a) / 2 < o - a && (r = i.params.slidesPerGroup)
            }
            return i.slideTo(r, e, t, n)
        },
        slideToClickedSlide: function() {
            var e, t = this,
                n = t.params,
                i = t.$wrapperEl,
                r = "auto" === n.slidesPerView ? t.slidesPerViewDynamic() : n.slidesPerView,
                s = t.clickedIndex;
            if (n.loop) {
                if (t.animating) return;
                e = parseInt(M(t.clickedSlide).attr("data-swiper-slide-index"), 10), n.centeredSlides ? s < t.loopedSlides - r / 2 || s > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), s = i.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + n.slideDuplicateClass + ")").eq(0).index(), ee.nextTick(function() {
                    t.slideTo(s)
                })) : t.slideTo(s) : s > t.slides.length - r ? (t.loopFix(), s = i.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + n.slideDuplicateClass + ")").eq(0).index(), ee.nextTick(function() {
                    t.slideTo(s)
                })) : t.slideTo(s)
            } else t.slideTo(s)
        }
    };
    var h = {
        loopCreate: function() {
            var i = this,
                e = i.params,
                t = i.$wrapperEl;
            t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();
            var r = t.children("." + e.slideClass);
            if (e.loopFillGroupWithBlank) {
                var n = e.slidesPerGroup - r.length % e.slidesPerGroup;
                if (n !== e.slidesPerGroup) {
                    for (var s = 0; s < n; s += 1) {
                        var o = M(m.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass);
                        t.append(o)
                    }
                    r = t.children("." + e.slideClass)
                }
            }
            "auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = r.length), i.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10), i.loopedSlides += e.loopAdditionalSlides, i.loopedSlides > r.length && (i.loopedSlides = r.length);
            var a = [],
                l = [];
            r.each(function(e, t) {
                var n = M(t);
                e < i.loopedSlides && l.push(t), e < r.length && e >= r.length - i.loopedSlides && a.push(t), n.attr("data-swiper-slide-index", e)
            });
            for (var c = 0; c < l.length; c += 1) t.append(M(l[c].cloneNode(!0)).addClass(e.slideDuplicateClass));
            for (var u = a.length - 1; 0 <= u; u -= 1) t.prepend(M(a[u].cloneNode(!0)).addClass(e.slideDuplicateClass))
        },
        loopFix: function() {
            var e, t = this,
                n = t.params,
                i = t.activeIndex,
                r = t.slides,
                s = t.loopedSlides,
                o = t.allowSlidePrev,
                a = t.allowSlideNext,
                l = t.snapGrid,
                c = t.rtlTranslate;
            t.allowSlidePrev = !0, t.allowSlideNext = !0;
            var u = -l[i] - t.getTranslate();
            i < s ? (e = r.length - 3 * s + i, e += s, t.slideTo(e, 0, !1, !0) && 0 !== u && t.setTranslate((c ? -t.translate : t.translate) - u)) : ("auto" === n.slidesPerView && 2 * s <= i || i >= r.length - s) && (e = -r.length + i + s, e += s, t.slideTo(e, 0, !1, !0) && 0 !== u && t.setTranslate((c ? -t.translate : t.translate) - u));
            t.allowSlidePrev = o, t.allowSlideNext = a
        },
        loopDestroy: function() {
            var e = this.$wrapperEl,
                t = this.params,
                n = this.slides;
            e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), n.removeAttr("data-swiper-slide-index")
        }
    };
    var p = {
        setGrabCursor: function(e) {
            if (!(te.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
                var t = this.el;
                t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
            }
        },
        unsetGrabCursor: function() {
            te.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "")
        }
    };
    var f = {
            appendSlide: function(e) {
                var t = this,
                    n = t.$wrapperEl,
                    i = t.params;
                if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
                    for (var r = 0; r < e.length; r += 1) e[r] && n.append(e[r]);
                else n.append(e);
                i.loop && t.loopCreate(), i.observer && te.observer || t.update()
            },
            prependSlide: function(e) {
                var t = this,
                    n = t.params,
                    i = t.$wrapperEl,
                    r = t.activeIndex;
                n.loop && t.loopDestroy();
                var s = r + 1;
                if ("object" == typeof e && "length" in e) {
                    for (var o = 0; o < e.length; o += 1) e[o] && i.prepend(e[o]);
                    s = r + e.length
                } else i.prepend(e);
                n.loop && t.loopCreate(), n.observer && te.observer || t.update(), t.slideTo(s, 0, !1)
            },
            addSlide: function(e, t) {
                var n = this,
                    i = n.$wrapperEl,
                    r = n.params,
                    s = n.activeIndex;
                r.loop && (s -= n.loopedSlides, n.loopDestroy(), n.slides = i.children("." + r.slideClass));
                var o = n.slides.length;
                if (e <= 0) n.prependSlide(t);
                else if (o <= e) n.appendSlide(t);
                else {
                    for (var a = e < s ? s + 1 : s, l = [], c = o - 1; e <= c; c -= 1) {
                        var u = n.slides.eq(c);
                        u.remove(), l.unshift(u)
                    }
                    if ("object" == typeof t && "length" in t) {
                        for (var d = 0; d < t.length; d += 1) t[d] && i.append(t[d]);
                        a = e < s ? s + t.length : s
                    } else i.append(t);
                    for (var h = 0; h < l.length; h += 1) i.append(l[h]);
                    r.loop && n.loopCreate(), r.observer && te.observer || n.update(), r.loop ? n.slideTo(a + n.loopedSlides, 0, !1) : n.slideTo(a, 0, !1)
                }
            },
            removeSlide: function(e) {
                var t = this,
                    n = t.params,
                    i = t.$wrapperEl,
                    r = t.activeIndex;
                n.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + n.slideClass));
                var s, o = r;
                if ("object" == typeof e && "length" in e) {
                    for (var a = 0; a < e.length; a += 1) s = e[a], t.slides[s] && t.slides.eq(s).remove(), s < o && (o -= 1);
                    o = Math.max(o, 0)
                } else s = e, t.slides[s] && t.slides.eq(s).remove(), s < o && (o -= 1), o = Math.max(o, 0);
                n.loop && t.loopCreate(), n.observer && te.observer || t.update(), n.loop ? t.slideTo(o + t.loopedSlides, 0, !1) : t.slideTo(o, 0, !1)
            },
            removeAllSlides: function() {
                for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                this.removeSlide(e)
            }
        },
        v = function() {
            var e = J.navigator.userAgent,
                t = {
                    ios: !1,
                    android: !1,
                    androidChrome: !1,
                    desktop: !1,
                    windows: !1,
                    iphone: !1,
                    ipod: !1,
                    ipad: !1,
                    cordova: J.cordova || J.phonegap,
                    phonegap: J.cordova || J.phonegap
                },
                n = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                r = e.match(/(iPad).*OS\s([\d_]+)/),
                s = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                o = !r && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            if (n && (t.os = "windows", t.osVersion = n[2], t.windows = !0), i && !n && (t.os = "android", t.osVersion = i[2], t.android = !0, t.androidChrome = 0 <= e.toLowerCase().indexOf("chrome")), (r || o || s) && (t.os = "ios", t.ios = !0), o && !s && (t.osVersion = o[2].replace(/_/g, "."), t.iphone = !0), r && (t.osVersion = r[2].replace(/_/g, "."), t.ipad = !0), s && (t.osVersion = s[3] ? s[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && 0 <= e.indexOf("Version/") && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (o || r || s) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
                var a = t.osVersion.split("."),
                    l = m.querySelector('meta[name="viewport"]');
                t.minimalUi = !t.webView && (s || o) && (1 * a[0] == 7 ? 1 <= 1 * a[1] : 7 < 1 * a[0]) && l && 0 <= l.getAttribute("content").indexOf("minimal-ui")
            }
            return t.pixelRatio = J.devicePixelRatio || 1, t
        }();

    function g() {
        var e = this,
            t = e.params,
            n = e.el;
        if (!n || 0 !== n.offsetWidth) {
            t.breakpoints && e.setBreakpoint();
            var i = e.allowSlideNext,
                r = e.allowSlidePrev,
                s = e.snapGrid;
            if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
                var o = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                e.setTranslate(o), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight()
            } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
            e.allowSlidePrev = r, e.allowSlideNext = i, e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow()
        }
    }
    var y = {
        attachEvents: function() {
            var e = this,
                t = e.params,
                n = e.touchEvents,
                i = e.el,
                r = e.wrapperEl;
            e.onTouchStart = function(e) {
                var t = this,
                    n = t.touchEventsData,
                    i = t.params,
                    r = t.touches;
                if (!t.animating || !i.preventInteractionOnTransition) {
                    var s = e;
                    if (s.originalEvent && (s = s.originalEvent), n.isTouchEvent = "touchstart" === s.type, (n.isTouchEvent || !("which" in s) || 3 !== s.which) && !(!n.isTouchEvent && "button" in s && 0 < s.button || n.isTouched && n.isMoved))
                        if (i.noSwiping && M(s.target).closest(i.noSwipingSelector ? i.noSwipingSelector : "." + i.noSwipingClass)[0]) t.allowClick = !0;
                        else if (!i.swipeHandler || M(s).closest(i.swipeHandler)[0]) {
                        r.currentX = "touchstart" === s.type ? s.targetTouches[0].pageX : s.pageX, r.currentY = "touchstart" === s.type ? s.targetTouches[0].pageY : s.pageY;
                        var o = r.currentX,
                            a = r.currentY,
                            l = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
                            c = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
                        if (!l || !(o <= c || o >= J.screen.width - c)) {
                            if (ee.extend(n, {
                                    isTouched: !0,
                                    isMoved: !1,
                                    allowTouchCallbacks: !0,
                                    isScrolling: void 0,
                                    startMoving: void 0
                                }), r.startX = o, r.startY = a, n.touchStartTime = ee.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, 0 < i.threshold && (n.allowThresholdMove = !1), "touchstart" !== s.type) {
                                var u = !0;
                                M(s.target).is(n.formElements) && (u = !1), m.activeElement && M(m.activeElement).is(n.formElements) && m.activeElement !== s.target && m.activeElement.blur();
                                var d = u && t.allowTouchMove && i.touchStartPreventDefault;
                                (i.touchStartForcePreventDefault || d) && s.preventDefault()
                            }
                            t.emit("touchStart", s)
                        }
                    }
                }
            }.bind(e), e.onTouchMove = function(e) {
                var t = this,
                    n = t.touchEventsData,
                    i = t.params,
                    r = t.touches,
                    s = t.rtlTranslate,
                    o = e;
                if (o.originalEvent && (o = o.originalEvent), n.isTouched) {
                    if (!n.isTouchEvent || "mousemove" !== o.type) {
                        var a = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX,
                            l = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;
                        if (o.preventedByNestedSwiper) return r.startX = a, void(r.startY = l);
                        if (!t.allowTouchMove) return t.allowClick = !1, void(n.isTouched && (ee.extend(r, {
                            startX: a,
                            startY: l,
                            currentX: a,
                            currentY: l
                        }), n.touchStartTime = ee.now()));
                        if (n.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                            if (t.isVertical()) {
                                if (l < r.startY && t.translate <= t.maxTranslate() || l > r.startY && t.translate >= t.minTranslate()) return n.isTouched = !1, void(n.isMoved = !1)
                            } else if (a < r.startX && t.translate <= t.maxTranslate() || a > r.startX && t.translate >= t.minTranslate()) return;
                        if (n.isTouchEvent && m.activeElement && o.target === m.activeElement && M(o.target).is(n.formElements)) return n.isMoved = !0, void(t.allowClick = !1);
                        if (n.allowTouchCallbacks && t.emit("touchMove", o), !(o.targetTouches && 1 < o.targetTouches.length)) {
                            r.currentX = a, r.currentY = l;
                            var c, u = r.currentX - r.startX,
                                d = r.currentY - r.startY;
                            if (!(t.params.threshold && Math.sqrt(Math.pow(u, 2) + Math.pow(d, 2)) < t.params.threshold))
                                if (void 0 === n.isScrolling && (t.isHorizontal() && r.currentY === r.startY || t.isVertical() && r.currentX === r.startX ? n.isScrolling = !1 : 25 <= u * u + d * d && (c = 180 * Math.atan2(Math.abs(d), Math.abs(u)) / Math.PI, n.isScrolling = t.isHorizontal() ? c > i.touchAngle : 90 - c > i.touchAngle)), n.isScrolling && t.emit("touchMoveOpposite", o), void 0 === n.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (n.startMoving = !0)), n.isScrolling) n.isTouched = !1;
                                else if (n.startMoving) {
                                t.allowClick = !1, o.preventDefault(), i.touchMoveStopPropagation && !i.nested && o.stopPropagation(), n.isMoved || (i.loop && t.loopFix(), n.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), n.allowMomentumBounce = !1, !i.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", o)), t.emit("sliderMove", o), n.isMoved = !0;
                                var h = t.isHorizontal() ? u : d;
                                r.diff = h, h *= i.touchRatio, s && (h = -h), t.swipeDirection = 0 < h ? "prev" : "next", n.currentTranslate = h + n.startTranslate;
                                var p = !0,
                                    f = i.resistanceRatio;
                                if (i.touchReleaseOnEdges && (f = 0), 0 < h && n.currentTranslate > t.minTranslate() ? (p = !1, i.resistance && (n.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + n.startTranslate + h, f))) : h < 0 && n.currentTranslate < t.maxTranslate() && (p = !1, i.resistance && (n.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - n.startTranslate - h, f))), p && (o.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), 0 < i.threshold) {
                                    if (!(Math.abs(h) > i.threshold || n.allowThresholdMove)) return void(n.currentTranslate = n.startTranslate);
                                    if (!n.allowThresholdMove) return n.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, n.currentTranslate = n.startTranslate, void(r.diff = t.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                                }
                                i.followFinger && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), i.freeMode && (0 === n.velocities.length && n.velocities.push({
                                    position: r[t.isHorizontal() ? "startX" : "startY"],
                                    time: n.touchStartTime
                                }), n.velocities.push({
                                    position: r[t.isHorizontal() ? "currentX" : "currentY"],
                                    time: ee.now()
                                })), t.updateProgress(n.currentTranslate), t.setTranslate(n.currentTranslate))
                            }
                        }
                    }
                } else n.startMoving && n.isScrolling && t.emit("touchMoveOpposite", o)
            }.bind(e), e.onTouchEnd = function(e) {
                var t = this,
                    n = t.touchEventsData,
                    i = t.params,
                    r = t.touches,
                    s = t.rtlTranslate,
                    o = t.$wrapperEl,
                    a = t.slidesGrid,
                    l = t.snapGrid,
                    c = e;
                if (c.originalEvent && (c = c.originalEvent), n.allowTouchCallbacks && t.emit("touchEnd", c), n.allowTouchCallbacks = !1, !n.isTouched) return n.isMoved && i.grabCursor && t.setGrabCursor(!1), n.isMoved = !1, void(n.startMoving = !1);
                i.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                var u, d = ee.now(),
                    h = d - n.touchStartTime;
                if (t.allowClick && (t.updateClickedSlide(c), t.emit("tap", c), h < 300 && 300 < d - n.lastClickTime && (n.clickTimeout && clearTimeout(n.clickTimeout), n.clickTimeout = ee.nextTick(function() {
                        t && !t.destroyed && t.emit("click", c)
                    }, 300)), h < 300 && d - n.lastClickTime < 300 && (n.clickTimeout && clearTimeout(n.clickTimeout), t.emit("doubleTap", c))), n.lastClickTime = ee.now(), ee.nextTick(function() {
                        t.destroyed || (t.allowClick = !0)
                    }), !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === r.diff || n.currentTranslate === n.startTranslate) return n.isTouched = !1, n.isMoved = !1, void(n.startMoving = !1);
                if (n.isTouched = !1, n.isMoved = !1, n.startMoving = !1, u = i.followFinger ? s ? t.translate : -t.translate : -n.currentTranslate, i.freeMode) {
                    if (u < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                    if (u > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                    if (i.freeModeMomentum) {
                        if (1 < n.velocities.length) {
                            var p = n.velocities.pop(),
                                f = n.velocities.pop(),
                                m = p.position - f.position,
                                v = p.time - f.time;
                            t.velocity = m / v, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (150 < v || 300 < ee.now() - p.time) && (t.velocity = 0)
                        } else t.velocity = 0;
                        t.velocity *= i.freeModeMomentumVelocityRatio, n.velocities.length = 0;
                        var g = 1e3 * i.freeModeMomentumRatio,
                            y = t.velocity * g,
                            b = t.translate + y;
                        s && (b = -b);
                        var w, x, E = !1,
                            T = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                        if (b < t.maxTranslate()) i.freeModeMomentumBounce ? (b + t.maxTranslate() < -T && (b = t.maxTranslate() - T), w = t.maxTranslate(), E = !0, n.allowMomentumBounce = !0) : b = t.maxTranslate(), i.loop && i.centeredSlides && (x = !0);
                        else if (b > t.minTranslate()) i.freeModeMomentumBounce ? (b - t.minTranslate() > T && (b = t.minTranslate() + T), w = t.minTranslate(), E = !0, n.allowMomentumBounce = !0) : b = t.minTranslate(), i.loop && i.centeredSlides && (x = !0);
                        else if (i.freeModeSticky) {
                            for (var S, C = 0; C < l.length; C += 1)
                                if (l[C] > -b) {
                                    S = C;
                                    break
                                }
                            b = -(b = Math.abs(l[S] - b) < Math.abs(l[S - 1] - b) || "next" === t.swipeDirection ? l[S] : l[S - 1])
                        }
                        if (x && t.once("transitionEnd", function() {
                                t.loopFix()
                            }), 0 !== t.velocity) g = s ? Math.abs((-b - t.translate) / t.velocity) : Math.abs((b - t.translate) / t.velocity);
                        else if (i.freeModeSticky) return void t.slideToClosest();
                        i.freeModeMomentumBounce && E ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating = !0, o.transitionEnd(function() {
                            t && !t.destroyed && n.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), t.setTranslate(w), o.transitionEnd(function() {
                                t && !t.destroyed && t.transitionEnd()
                            }))
                        })) : t.velocity ? (t.updateProgress(b), t.setTransition(g), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, o.transitionEnd(function() {
                            t && !t.destroyed && t.transitionEnd()
                        }))) : t.updateProgress(b), t.updateActiveIndex(), t.updateSlidesClasses()
                    } else if (i.freeModeSticky) return void t.slideToClosest();
                    (!i.freeModeMomentum || h >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                } else {
                    for (var _ = 0, k = t.slidesSizesGrid[0], A = 0; A < a.length; A += i.slidesPerGroup) void 0 !== a[A + i.slidesPerGroup] ? u >= a[A] && u < a[A + i.slidesPerGroup] && (k = a[(_ = A) + i.slidesPerGroup] - a[A]) : u >= a[A] && (_ = A, k = a[a.length - 1] - a[a.length - 2]);
                    var D = (u - a[_]) / k;
                    if (h > i.longSwipesMs) {
                        if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && (D >= i.longSwipesRatio ? t.slideTo(_ + i.slidesPerGroup) : t.slideTo(_)), "prev" === t.swipeDirection && (D > 1 - i.longSwipesRatio ? t.slideTo(_ + i.slidesPerGroup) : t.slideTo(_))
                    } else {
                        if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && t.slideTo(_ + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(_)
                    }
                }
            }.bind(e), e.onClick = function(e) {
                this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }.bind(e);
            var s = "container" === t.touchEventsTarget ? i : r,
                o = !!t.nested;
            if (te.touch || !te.pointerEvents && !te.prefixedPointerEvents) {
                if (te.touch) {
                    var a = !("touchstart" !== n.start || !te.passiveListener || !t.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    s.addEventListener(n.start, e.onTouchStart, a), s.addEventListener(n.move, e.onTouchMove, te.passiveListener ? {
                        passive: !1,
                        capture: o
                    } : o), s.addEventListener(n.end, e.onTouchEnd, a)
                }(t.simulateTouch && !v.ios && !v.android || t.simulateTouch && !te.touch && v.ios) && (s.addEventListener("mousedown", e.onTouchStart, !1), m.addEventListener("mousemove", e.onTouchMove, o), m.addEventListener("mouseup", e.onTouchEnd, !1))
            } else s.addEventListener(n.start, e.onTouchStart, !1), m.addEventListener(n.move, e.onTouchMove, o), m.addEventListener(n.end, e.onTouchEnd, !1);
            (t.preventClicks || t.preventClicksPropagation) && s.addEventListener("click", e.onClick, !0), e.on(v.ios || v.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", g, !0)
        },
        detachEvents: function() {
            var e = this,
                t = e.params,
                n = e.touchEvents,
                i = e.el,
                r = e.wrapperEl,
                s = "container" === t.touchEventsTarget ? i : r,
                o = !!t.nested;
            if (te.touch || !te.pointerEvents && !te.prefixedPointerEvents) {
                if (te.touch) {
                    var a = !("onTouchStart" !== n.start || !te.passiveListener || !t.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    s.removeEventListener(n.start, e.onTouchStart, a), s.removeEventListener(n.move, e.onTouchMove, o), s.removeEventListener(n.end, e.onTouchEnd, a)
                }(t.simulateTouch && !v.ios && !v.android || t.simulateTouch && !te.touch && v.ios) && (s.removeEventListener("mousedown", e.onTouchStart, !1), m.removeEventListener("mousemove", e.onTouchMove, o), m.removeEventListener("mouseup", e.onTouchEnd, !1))
            } else s.removeEventListener(n.start, e.onTouchStart, !1), m.removeEventListener(n.move, e.onTouchMove, o), m.removeEventListener(n.end, e.onTouchEnd, !1);
            (t.preventClicks || t.preventClicksPropagation) && s.removeEventListener("click", e.onClick, !0), e.off(v.ios || v.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", g)
        }
    };
    var b, w = {
            setBreakpoint: function() {
                var e = this,
                    t = e.activeIndex,
                    n = e.initialized,
                    i = e.loopedSlides;
                void 0 === i && (i = 0);
                var r = e.params,
                    s = r.breakpoints;
                if (s && (!s || 0 !== Object.keys(s).length)) {
                    var o = e.getBreakpoint(s);
                    if (o && e.currentBreakpoint !== o) {
                        var a = o in s ? s[o] : void 0;
                        a && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function(e) {
                            var t = a[e];
                            void 0 !== t && (a[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                        });
                        var l = a || e.originalParams,
                            c = r.loop && l.slidesPerView !== r.slidesPerView;
                        ee.extend(e.params, l), ee.extend(e, {
                            allowTouchMove: e.params.allowTouchMove,
                            allowSlideNext: e.params.allowSlideNext,
                            allowSlidePrev: e.params.allowSlidePrev
                        }), e.currentBreakpoint = o, c && n && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
                    }
                }
            },
            getBreakpoint: function(e) {
                if (e) {
                    var t = !1,
                        n = [];
                    Object.keys(e).forEach(function(e) {
                        n.push(e)
                    }), n.sort(function(e, t) {
                        return parseInt(e, 10) - parseInt(t, 10)
                    });
                    for (var i = 0; i < n.length; i += 1) {
                        var r = n[i];
                        this.params.breakpointsInverse ? r <= J.innerWidth && (t = r) : r >= J.innerWidth && !t && (t = r)
                    }
                    return t || "max"
                }
            }
        },
        I = {
            isIE: !!J.navigator.userAgent.match(/Trident/g) || !!J.navigator.userAgent.match(/MSIE/g),
            isEdge: !!J.navigator.userAgent.match(/Edge/g),
            isSafari: (b = J.navigator.userAgent.toLowerCase(), 0 <= b.indexOf("safari") && b.indexOf("chrome") < 0 && b.indexOf("android") < 0),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(J.navigator.userAgent)
        };
    var x = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            preventInteractionOnTransition: !1,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsInverse: !1,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0
        },
        E = {
            update: a,
            translate: c,
            transition: u,
            slide: d,
            loop: h,
            grabCursor: p,
            manipulation: f,
            events: y,
            breakpoints: w,
            checkOverflow: {
                checkOverflow: function() {
                    var e = this,
                        t = e.isLocked;
                    e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update())
                }
            },
            classes: {
                addClasses: function() {
                    var t = this.classNames,
                        n = this.params,
                        e = this.rtl,
                        i = this.$el,
                        r = [];
                    r.push(n.direction), n.freeMode && r.push("free-mode"), te.flexbox || r.push("no-flexbox"), n.autoHeight && r.push("autoheight"), e && r.push("rtl"), 1 < n.slidesPerColumn && r.push("multirow"), v.android && r.push("android"), v.ios && r.push("ios"), (I.isIE || I.isEdge) && (te.pointerEvents || te.prefixedPointerEvents) && r.push("wp8-" + n.direction), r.forEach(function(e) {
                        t.push(n.containerModifierClass + e)
                    }), i.addClass(t.join(" "))
                },
                removeClasses: function() {
                    var e = this.$el,
                        t = this.classNames;
                    e.removeClass(t.join(" "))
                }
            },
            images: {
                loadImage: function(e, t, n, i, r, s) {
                    var o;

                    function a() {
                        s && s()
                    }
                    e.complete && r ? a() : t ? ((o = new J.Image).onload = a, o.onerror = a, i && (o.sizes = i), n && (o.srcset = n), t && (o.src = t)) : a()
                },
                preloadImages: function() {
                    var e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (var n = 0; n < e.imagesToLoad.length; n += 1) {
                        var i = e.imagesToLoad[n];
                        e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
                    }
                }
            }
        },
        T = {},
        S = function(h) {
            function p() {
                for (var e, t, r, n = [], i = arguments.length; i--;) n[i] = arguments[i];
                1 === n.length && n[0].constructor && n[0].constructor === Object ? r = n[0] : (t = (e = n)[0], r = e[1]), r || (r = {}), r = ee.extend({}, r), t && !r.el && (r.el = t), h.call(this, r), Object.keys(E).forEach(function(t) {
                    Object.keys(E[t]).forEach(function(e) {
                        p.prototype[e] || (p.prototype[e] = E[t][e])
                    })
                });
                var s = this;
                void 0 === s.modules && (s.modules = {}), Object.keys(s.modules).forEach(function(e) {
                    var t = s.modules[e];
                    if (t.params) {
                        var n = Object.keys(t.params)[0],
                            i = t.params[n];
                        if ("object" != typeof i || null === i) return;
                        if (!(n in r && "enabled" in i)) return;
                        !0 === r[n] && (r[n] = {
                            enabled: !0
                        }), "object" != typeof r[n] || "enabled" in r[n] || (r[n].enabled = !0), r[n] || (r[n] = {
                            enabled: !1
                        })
                    }
                });
                var o = ee.extend({}, x);
                s.useModulesParams(o), s.params = ee.extend({}, o, T, r), s.originalParams = ee.extend({}, s.params), s.passedParams = ee.extend({}, r);
                var a = (s.$ = M)(s.params.el);
                if (t = a[0]) {
                    if (1 < a.length) {
                        var l = [];
                        return a.each(function(e, t) {
                            var n = ee.extend({}, r, {
                                el: t
                            });
                            l.push(new p(n))
                        }), l
                    }
                    t.swiper = s, a.data("swiper", s);
                    var c, u, d = a.children("." + s.params.wrapperClass);
                    return ee.extend(s, {
                        $el: a,
                        el: t,
                        $wrapperEl: d,
                        wrapperEl: d[0],
                        classNames: [],
                        slides: M(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: function() {
                            return "horizontal" === s.params.direction
                        },
                        isVertical: function() {
                            return "vertical" === s.params.direction
                        },
                        rtl: "rtl" === t.dir.toLowerCase() || "rtl" === a.css("direction"),
                        rtlTranslate: "horizontal" === s.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === a.css("direction")),
                        wrongRTL: "-webkit-box" === d.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: s.params.allowSlideNext,
                        allowSlidePrev: s.params.allowSlidePrev,
                        touchEvents: (c = ["touchstart", "touchmove", "touchend"], u = ["mousedown", "mousemove", "mouseup"], te.pointerEvents ? u = ["pointerdown", "pointermove", "pointerup"] : te.prefixedPointerEvents && (u = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), s.touchEventsTouch = {
                            start: c[0],
                            move: c[1],
                            end: c[2]
                        }, s.touchEventsDesktop = {
                            start: u[0],
                            move: u[1],
                            end: u[2]
                        }, te.touch || !s.params.simulateTouch ? s.touchEventsTouch : s.touchEventsDesktop),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video",
                            lastClickTime: ee.now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: s.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), s.useModules(), s.params.init && s.init(), s
                }
            }
            h && (p.__proto__ = h);
            var e = {
                extendedDefaults: {
                    configurable: !0
                },
                defaults: {
                    configurable: !0
                },
                Class: {
                    configurable: !0
                },
                $: {
                    configurable: !0
                }
            };
            return ((p.prototype = Object.create(h && h.prototype)).constructor = p).prototype.slidesPerViewDynamic = function() {
                var e = this,
                    t = e.params,
                    n = e.slides,
                    i = e.slidesGrid,
                    r = e.size,
                    s = e.activeIndex,
                    o = 1;
                if (t.centeredSlides) {
                    for (var a, l = n[s].swiperSlideSize, c = s + 1; c < n.length; c += 1) n[c] && !a && (o += 1, r < (l += n[c].swiperSlideSize) && (a = !0));
                    for (var u = s - 1; 0 <= u; u -= 1) n[u] && !a && (o += 1, r < (l += n[u].swiperSlideSize) && (a = !0))
                } else
                    for (var d = s + 1; d < n.length; d += 1) i[d] - i[s] < r && (o += 1);
                return o
            }, p.prototype.update = function() {
                var n = this;
                if (n && !n.destroyed) {
                    var e = n.snapGrid,
                        t = n.params;
                    t.breakpoints && n.setBreakpoint(), n.updateSize(), n.updateSlides(), n.updateProgress(), n.updateSlidesClasses(), n.params.freeMode ? (i(), n.params.autoHeight && n.updateAutoHeight()) : (("auto" === n.params.slidesPerView || 1 < n.params.slidesPerView) && n.isEnd && !n.params.centeredSlides ? n.slideTo(n.slides.length - 1, 0, !1, !0) : n.slideTo(n.activeIndex, 0, !1, !0)) || i(), t.watchOverflow && e !== n.snapGrid && n.checkOverflow(), n.emit("update")
                }

                function i() {
                    var e = n.rtlTranslate ? -1 * n.translate : n.translate,
                        t = Math.min(Math.max(e, n.maxTranslate()), n.minTranslate());
                    n.setTranslate(t), n.updateActiveIndex(), n.updateSlidesClasses()
                }
            }, p.prototype.init = function() {
                var e = this;
                e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
            }, p.prototype.destroy = function(e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                var n = this,
                    i = n.params,
                    r = n.$el,
                    s = n.$wrapperEl,
                    o = n.slides;
                return void 0 === n.params || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), i.loop && n.loopDestroy(), t && (n.removeClasses(), r.removeAttr("style"), s.removeAttr("style"), o && o.length && o.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), n.emit("destroy"), Object.keys(n.eventsListeners).forEach(function(e) {
                    n.off(e)
                }), !1 !== e && (n.$el[0].swiper = null, n.$el.data("swiper", null), ee.deleteProps(n)), n.destroyed = !0), null
            }, p.extendDefaults = function(e) {
                ee.extend(T, e)
            }, e.extendedDefaults.get = function() {
                return T
            }, e.defaults.get = function() {
                return x
            }, e.Class.get = function() {
                return h
            }, e.$.get = function() {
                return M
            }, Object.defineProperties(p, e), p
        }(r),
        C = {
            name: "device",
            proto: {
                device: v
            },
            static: {
                device: v
            }
        },
        _ = {
            name: "support",
            proto: {
                support: te
            },
            static: {
                support: te
            }
        },
        k = {
            name: "browser",
            proto: {
                browser: I
            },
            static: {
                browser: I
            }
        },
        A = {
            name: "resize",
            create: function() {
                var e = this;
                ee.extend(e, {
                    resize: {
                        resizeHandler: function() {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                        },
                        orientationChangeHandler: function() {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange")
                        }
                    }
                })
            },
            on: {
                init: function() {
                    J.addEventListener("resize", this.resize.resizeHandler), J.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                },
                destroy: function() {
                    J.removeEventListener("resize", this.resize.resizeHandler), J.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                }
            }
        },
        D = {
            func: J.MutationObserver || J.WebkitMutationObserver,
            attach: function(e, t) {
                void 0 === t && (t = {});
                var n = this,
                    i = new(0, D.func)(function(e) {
                        if (1 !== e.length) {
                            var t = function() {
                                n.emit("observerUpdate", e[0])
                            };
                            J.requestAnimationFrame ? J.requestAnimationFrame(t) : J.setTimeout(t, 0)
                        } else n.emit("observerUpdate", e[0])
                    });
                i.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), n.observer.observers.push(i)
            },
            init: function() {
                var e = this;
                if (te.observer && e.params.observer) {
                    if (e.params.observeParents)
                        for (var t = e.$el.parents(), n = 0; n < t.length; n += 1) e.observer.attach(t[n]);
                    e.observer.attach(e.$el[0], {
                        childList: e.params.observeSlideChildren
                    }), e.observer.attach(e.$wrapperEl[0], {
                        attributes: !1
                    })
                }
            },
            destroy: function() {
                this.observer.observers.forEach(function(e) {
                    e.disconnect()
                }), this.observer.observers = []
            }
        },
        O = {
            name: "observer",
            params: {
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            },
            create: function() {
                ee.extend(this, {
                    observer: {
                        init: D.init.bind(this),
                        attach: D.attach.bind(this),
                        destroy: D.destroy.bind(this),
                        observers: []
                    }
                })
            },
            on: {
                init: function() {
                    this.observer.init()
                },
                destroy: function() {
                    this.observer.destroy()
                }
            }
        },
        P = {
            update: function(e) {
                var t = this,
                    n = t.params,
                    i = n.slidesPerView,
                    r = n.slidesPerGroup,
                    s = n.centeredSlides,
                    o = t.params.virtual,
                    a = o.addSlidesBefore,
                    l = o.addSlidesAfter,
                    c = t.virtual,
                    u = c.from,
                    d = c.to,
                    h = c.slides,
                    p = c.slidesGrid,
                    f = c.renderSlide,
                    m = c.offset;
                t.updateActiveIndex();
                var v, g, y, b = t.activeIndex || 0;
                v = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", s ? (g = Math.floor(i / 2) + r + a, y = Math.floor(i / 2) + r + l) : (g = i + (r - 1) + a, y = r + l);
                var w = Math.max((b || 0) - y, 0),
                    x = Math.min((b || 0) + g, h.length - 1),
                    E = (t.slidesGrid[w] || 0) - (t.slidesGrid[0] || 0);

                function T() {
                    t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
                }
                if (ee.extend(t.virtual, {
                        from: w,
                        to: x,
                        offset: E,
                        slidesGrid: t.slidesGrid
                    }), u === w && d === x && !e) return t.slidesGrid !== p && E !== m && t.slides.css(v, E + "px"), void t.updateProgress();
                if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                    offset: E,
                    from: w,
                    to: x,
                    slides: function() {
                        for (var e = [], t = w; t <= x; t += 1) e.push(h[t]);
                        return e
                    }()
                }), void T();
                var S = [],
                    C = [];
                if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
                else
                    for (var _ = u; _ <= d; _ += 1)(_ < w || x < _) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + _ + '"]').remove();
                for (var k = 0; k < h.length; k += 1) w <= k && k <= x && (void 0 === d || e ? C.push(k) : (d < k && C.push(k), k < u && S.push(k)));
                C.forEach(function(e) {
                    t.$wrapperEl.append(f(h[e], e))
                }), S.sort(function(e, t) {
                    return t - e
                }).forEach(function(e) {
                    t.$wrapperEl.prepend(f(h[e], e))
                }), t.$wrapperEl.children(".swiper-slide").css(v, E + "px"), T()
            },
            renderSlide: function(e, t) {
                var n = this,
                    i = n.params.virtual;
                if (i.cache && n.virtual.cache[t]) return n.virtual.cache[t];
                var r = i.renderSlide ? M(i.renderSlide.call(n, e, t)) : M('<div class="' + n.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                return r.attr("data-swiper-slide-index") || r.attr("data-swiper-slide-index", t), i.cache && (n.virtual.cache[t] = r), r
            },
            appendSlide: function(e) {
                this.virtual.slides.push(e), this.virtual.update(!0)
            },
            prependSlide: function(e) {
                var t = this;
                if (t.virtual.slides.unshift(e), t.params.virtual.cache) {
                    var n = t.virtual.cache,
                        i = {};
                    Object.keys(n).forEach(function(e) {
                        i[e + 1] = n[e]
                    }), t.virtual.cache = i
                }
                t.virtual.update(!0), t.slideNext(0)
            }
        },
        L = {
            name: "virtual",
            params: {
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            },
            create: function() {
                var e = this;
                ee.extend(e, {
                    virtual: {
                        update: P.update.bind(e),
                        appendSlide: P.appendSlide.bind(e),
                        prependSlide: P.prependSlide.bind(e),
                        renderSlide: P.renderSlide.bind(e),
                        slides: e.params.virtual.slides,
                        cache: {}
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    if (e.params.virtual.enabled) {
                        e.classNames.push(e.params.containerModifierClass + "virtual");
                        var t = {
                            watchSlidesProgress: !0
                        };
                        ee.extend(e.params, t), ee.extend(e.originalParams, t), e.params.initialSlide || e.virtual.update()
                    }
                },
                setTranslate: function() {
                    this.params.virtual.enabled && this.virtual.update()
                }
            }
        },
        N = {
            handle: function(e) {
                var t = this,
                    n = t.rtlTranslate,
                    i = e;
                i.originalEvent && (i = i.originalEvent);
                var r = i.keyCode || i.charCode;
                if (!t.allowSlideNext && (t.isHorizontal() && 39 === r || t.isVertical() && 40 === r)) return !1;
                if (!t.allowSlidePrev && (t.isHorizontal() && 37 === r || t.isVertical() && 38 === r)) return !1;
                if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || m.activeElement && m.activeElement.nodeName && ("input" === m.activeElement.nodeName.toLowerCase() || "textarea" === m.activeElement.nodeName.toLowerCase()))) {
                    if (t.params.keyboard.onlyInViewport && (37 === r || 39 === r || 38 === r || 40 === r)) {
                        var s = !1;
                        if (0 < t.$el.parents("." + t.params.slideClass).length && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
                        var o = J.innerWidth,
                            a = J.innerHeight,
                            l = t.$el.offset();
                        n && (l.left -= t.$el[0].scrollLeft);
                        for (var c = [
                                [l.left, l.top],
                                [l.left + t.width, l.top],
                                [l.left, l.top + t.height],
                                [l.left + t.width, l.top + t.height]
                            ], u = 0; u < c.length; u += 1) {
                            var d = c[u];
                            0 <= d[0] && d[0] <= o && 0 <= d[1] && d[1] <= a && (s = !0)
                        }
                        if (!s) return
                    }
                    t.isHorizontal() ? (37 !== r && 39 !== r || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (39 === r && !n || 37 === r && n) && t.slideNext(), (37 === r && !n || 39 === r && n) && t.slidePrev()) : (38 !== r && 40 !== r || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), 40 === r && t.slideNext(), 38 === r && t.slidePrev()), t.emit("keyPress", r)
                }
            },
            enable: function() {
                this.keyboard.enabled || (M(m).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
            },
            disable: function() {
                this.keyboard.enabled && (M(m).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
            }
        },
        j = {
            name: "keyboard",
            params: {
                keyboard: {
                    enabled: !1,
                    onlyInViewport: !0
                }
            },
            create: function() {
                ee.extend(this, {
                    keyboard: {
                        enabled: !1,
                        enable: N.enable.bind(this),
                        disable: N.disable.bind(this),
                        handle: N.handle.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.keyboard.enabled && this.keyboard.enable()
                },
                destroy: function() {
                    this.keyboard.enabled && this.keyboard.disable()
                }
            }
        };
    var z = {
            lastScrollTime: ee.now(),
            event: -1 < J.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function() {
                var e = "onwheel",
                    t = e in m;
                if (!t) {
                    var n = m.createElement("div");
                    n.setAttribute(e, "return;"), t = "function" == typeof n[e]
                }
                return !t && m.implementation && m.implementation.hasFeature && !0 !== m.implementation.hasFeature("", "") && (t = m.implementation.hasFeature("Events.wheel", "3.0")), t
            }() ? "wheel" : "mousewheel",
            normalize: function(e) {
                var t = 0,
                    n = 0,
                    i = 0,
                    r = 0;
                return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), i = 10 * t, r = 10 * n, "deltaY" in e && (r = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || r) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, r *= 40) : (i *= 800, r *= 800)), i && !t && (t = i < 1 ? -1 : 1), r && !n && (n = r < 1 ? -1 : 1), {
                    spinX: t,
                    spinY: n,
                    pixelX: i,
                    pixelY: r
                }
            },
            handleMouseEnter: function() {
                this.mouseEntered = !0
            },
            handleMouseLeave: function() {
                this.mouseEntered = !1
            },
            handle: function(e) {
                var t = e,
                    n = this,
                    i = n.params.mousewheel;
                if (!n.mouseEntered && !i.releaseOnEdges) return !0;
                t.originalEvent && (t = t.originalEvent);
                var r = 0,
                    s = n.rtlTranslate ? -1 : 1,
                    o = z.normalize(t);
                if (i.forceToAxis)
                    if (n.isHorizontal()) {
                        if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                        r = o.pixelX * s
                    } else {
                        if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                        r = o.pixelY
                    } else r = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * s : -o.pixelY;
                if (0 === r) return !0;
                if (i.invert && (r = -r), n.params.freeMode) {
                    n.params.loop && n.loopFix();
                    var a = n.getTranslate() + r * i.sensitivity,
                        l = n.isBeginning,
                        c = n.isEnd;
                    if (a >= n.minTranslate() && (a = n.minTranslate()), a <= n.maxTranslate() && (a = n.maxTranslate()), n.setTransition(0), n.setTranslate(a), n.updateProgress(), n.updateActiveIndex(), n.updateSlidesClasses(), (!l && n.isBeginning || !c && n.isEnd) && n.updateSlidesClasses(), n.params.freeModeSticky && (clearTimeout(n.mousewheel.timeout), n.mousewheel.timeout = ee.nextTick(function() {
                            n.slideToClosest()
                        }, 300)), n.emit("scroll", t), n.params.autoplay && n.params.autoplayDisableOnInteraction && n.autoplay.stop(), a === n.minTranslate() || a === n.maxTranslate()) return !0
                } else {
                    if (60 < ee.now() - n.mousewheel.lastScrollTime)
                        if (r < 0)
                            if (n.isEnd && !n.params.loop || n.animating) {
                                if (i.releaseOnEdges) return !0
                            } else n.slideNext(), n.emit("scroll", t);
                    else if (n.isBeginning && !n.params.loop || n.animating) {
                        if (i.releaseOnEdges) return !0
                    } else n.slidePrev(), n.emit("scroll", t);
                    n.mousewheel.lastScrollTime = (new J.Date).getTime()
                }
                return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
            },
            enable: function() {
                var e = this;
                if (!z.event) return !1;
                if (e.mousewheel.enabled) return !1;
                var t = e.$el;
                return "container" !== e.params.mousewheel.eventsTarged && (t = M(e.params.mousewheel.eventsTarged)), t.on("mouseenter", e.mousewheel.handleMouseEnter), t.on("mouseleave", e.mousewheel.handleMouseLeave), t.on(z.event, e.mousewheel.handle), e.mousewheel.enabled = !0
            },
            disable: function() {
                var e = this;
                if (!z.event) return !1;
                if (!e.mousewheel.enabled) return !1;
                var t = e.$el;
                return "container" !== e.params.mousewheel.eventsTarged && (t = M(e.params.mousewheel.eventsTarged)), t.off(z.event, e.mousewheel.handle), !(e.mousewheel.enabled = !1)
            }
        },
        H = {
            update: function() {
                var e = this,
                    t = e.params.navigation;
                if (!e.params.loop) {
                    var n = e.navigation,
                        i = n.$nextEl,
                        r = n.$prevEl;
                    r && 0 < r.length && (e.isBeginning ? r.addClass(t.disabledClass) : r.removeClass(t.disabledClass), r[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), i && 0 < i.length && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
                }
            },
            onPrevClick: function(e) {
                e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
            },
            onNextClick: function(e) {
                e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
            },
            init: function() {
                var e, t, n = this,
                    i = n.params.navigation;
                (i.nextEl || i.prevEl) && (i.nextEl && (e = M(i.nextEl), n.params.uniqueNavElements && "string" == typeof i.nextEl && 1 < e.length && 1 === n.$el.find(i.nextEl).length && (e = n.$el.find(i.nextEl))), i.prevEl && (t = M(i.prevEl), n.params.uniqueNavElements && "string" == typeof i.prevEl && 1 < t.length && 1 === n.$el.find(i.prevEl).length && (t = n.$el.find(i.prevEl))), e && 0 < e.length && e.on("click", n.navigation.onNextClick), t && 0 < t.length && t.on("click", n.navigation.onPrevClick), ee.extend(n.navigation, {
                    $nextEl: e,
                    nextEl: e && e[0],
                    $prevEl: t,
                    prevEl: t && t[0]
                }))
            },
            destroy: function() {
                var e = this,
                    t = e.navigation,
                    n = t.$nextEl,
                    i = t.$prevEl;
                n && n.length && (n.off("click", e.navigation.onNextClick), n.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", e.navigation.onPrevClick), i.removeClass(e.params.navigation.disabledClass))
            }
        },
        q = {
            update: function() {
                var e = this,
                    t = e.rtl,
                    r = e.params.pagination;
                if (r.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var s, n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        i = e.pagination.$el,
                        o = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                    if (e.params.loop ? ((s = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > n - 1 - 2 * e.loopedSlides && (s -= n - 2 * e.loopedSlides), o - 1 < s && (s -= o), s < 0 && "bullets" !== e.params.paginationType && (s = o + s)) : s = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === r.type && e.pagination.bullets && 0 < e.pagination.bullets.length) {
                        var a, l, c, u = e.pagination.bullets;
                        if (r.dynamicBullets && (e.pagination.bulletSize = u.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), i.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (r.dynamicMainBullets + 4) + "px"), 1 < r.dynamicMainBullets && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += s - e.previousIndex, e.pagination.dynamicBulletIndex > r.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = r.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), a = s - e.pagination.dynamicBulletIndex, c = ((l = a + (Math.min(u.length, r.dynamicMainBullets) - 1)) + a) / 2), u.removeClass(r.bulletActiveClass + " " + r.bulletActiveClass + "-next " + r.bulletActiveClass + "-next-next " + r.bulletActiveClass + "-prev " + r.bulletActiveClass + "-prev-prev " + r.bulletActiveClass + "-main"), 1 < i.length) u.each(function(e, t) {
                            var n = M(t),
                                i = n.index();
                            i === s && n.addClass(r.bulletActiveClass), r.dynamicBullets && (a <= i && i <= l && n.addClass(r.bulletActiveClass + "-main"), i === a && n.prev().addClass(r.bulletActiveClass + "-prev").prev().addClass(r.bulletActiveClass + "-prev-prev"), i === l && n.next().addClass(r.bulletActiveClass + "-next").next().addClass(r.bulletActiveClass + "-next-next"))
                        });
                        else if (u.eq(s).addClass(r.bulletActiveClass), r.dynamicBullets) {
                            for (var d = u.eq(a), h = u.eq(l), p = a; p <= l; p += 1) u.eq(p).addClass(r.bulletActiveClass + "-main");
                            d.prev().addClass(r.bulletActiveClass + "-prev").prev().addClass(r.bulletActiveClass + "-prev-prev"), h.next().addClass(r.bulletActiveClass + "-next").next().addClass(r.bulletActiveClass + "-next-next")
                        }
                        if (r.dynamicBullets) {
                            var f = Math.min(u.length, r.dynamicMainBullets + 4),
                                m = (e.pagination.bulletSize * f - e.pagination.bulletSize) / 2 - c * e.pagination.bulletSize,
                                v = t ? "right" : "left";
                            u.css(e.isHorizontal() ? v : "top", m + "px")
                        }
                    }
                    if ("fraction" === r.type && (i.find("." + r.currentClass).text(r.formatFractionCurrent(s + 1)), i.find("." + r.totalClass).text(r.formatFractionTotal(o))), "progressbar" === r.type) {
                        var g;
                        g = r.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                        var y = (s + 1) / o,
                            b = 1,
                            w = 1;
                        "horizontal" === g ? b = y : w = y, i.find("." + r.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + b + ") scaleY(" + w + ")").transition(e.params.speed)
                    }
                    "custom" === r.type && r.renderCustom ? (i.html(r.renderCustom(e, s + 1, o)), e.emit("paginationRender", e, i[0])) : e.emit("paginationUpdate", e, i[0]), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](r.lockClass)
                }
            },
            render: function() {
                var e = this,
                    t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        i = e.pagination.$el,
                        r = "";
                    if ("bullets" === t.type) {
                        for (var s = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, o = 0; o < s; o += 1) t.renderBullet ? r += t.renderBullet.call(e, o, t.bulletClass) : r += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                        i.html(r), e.pagination.bullets = i.find("." + t.bulletClass)
                    }
                    "fraction" === t.type && (r = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(r)), "progressbar" === t.type && (r = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(r)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
                }
            },
            init: function() {
                var n = this,
                    e = n.params.pagination;
                if (e.el) {
                    var t = M(e.el);
                    0 !== t.length && (n.params.uniqueNavElements && "string" == typeof e.el && 1 < t.length && 1 === n.$el.find(e.el).length && (t = n.$el.find(e.el)), "bullets" === e.type && e.clickable && t.addClass(e.clickableClass), t.addClass(e.modifierClass + e.type), "bullets" === e.type && e.dynamicBullets && (t.addClass("" + e.modifierClass + e.type + "-dynamic"), n.pagination.dynamicBulletIndex = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && t.addClass(e.progressbarOppositeClass), e.clickable && t.on("click", "." + e.bulletClass, function(e) {
                        e.preventDefault();
                        var t = M(this).index() * n.params.slidesPerGroup;
                        n.params.loop && (t += n.loopedSlides), n.slideTo(t)
                    }), ee.extend(n.pagination, {
                        $el: t,
                        el: t[0]
                    }))
                }
            },
            destroy: function() {
                var e = this,
                    t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var n = e.pagination.$el;
                    n.removeClass(t.hiddenClass), n.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && n.off("click", "." + t.bulletClass)
                }
            }
        },
        R = {
            setTranslate: function() {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar,
                        n = e.rtlTranslate,
                        i = e.progress,
                        r = t.dragSize,
                        s = t.trackSize,
                        o = t.$dragEl,
                        a = t.$el,
                        l = e.params.scrollbar,
                        c = r,
                        u = (s - r) * i;
                    n ? 0 < (u = -u) ? (c = r - u, u = 0) : s < -u + r && (c = s + u) : u < 0 ? (c = r + u, u = 0) : s < u + r && (c = s - u), e.isHorizontal() ? (te.transforms3d ? o.transform("translate3d(" + u + "px, 0, 0)") : o.transform("translateX(" + u + "px)"), o[0].style.width = c + "px") : (te.transforms3d ? o.transform("translate3d(0px, " + u + "px, 0)") : o.transform("translateY(" + u + "px)"), o[0].style.height = c + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), a[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function() {
                        a[0].style.opacity = 0, a.transition(400)
                    }, 1e3))
                }
            },
            setTransition: function(e) {
                this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
            },
            updateSize: function() {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar,
                        n = t.$dragEl,
                        i = t.$el;
                    n[0].style.width = "", n[0].style.height = "";
                    var r, s = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                        o = e.size / e.virtualSize,
                        a = o * (s / e.size);
                    r = "auto" === e.params.scrollbar.dragSize ? s * o : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? n[0].style.width = r + "px" : n[0].style.height = r + "px", i[0].style.display = 1 <= o ? "none" : "", e.params.scrollbarHide && (i[0].style.opacity = 0), ee.extend(t, {
                        trackSize: s,
                        divider: o,
                        moveDivider: a,
                        dragSize: r
                    }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
                }
            },
            setDragPosition: function(e) {
                var t, n = this,
                    i = n.scrollbar,
                    r = n.rtlTranslate,
                    s = i.$el,
                    o = i.dragSize,
                    a = i.trackSize;
                t = ((n.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - s.offset()[n.isHorizontal() ? "left" : "top"] - o / 2) / (a - o), t = Math.max(Math.min(t, 1), 0), r && (t = 1 - t);
                var l = n.minTranslate() + (n.maxTranslate() - n.minTranslate()) * t;
                n.updateProgress(l), n.setTranslate(l), n.updateActiveIndex(), n.updateSlidesClasses()
            },
            onDragStart: function(e) {
                var t = this,
                    n = t.params.scrollbar,
                    i = t.scrollbar,
                    r = t.$wrapperEl,
                    s = i.$el,
                    o = i.$dragEl;
                t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), r.transition(100), o.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), s.transition(0), n.hide && s.css("opacity", 1), t.emit("scrollbarDragStart", e)
            },
            onDragMove: function(e) {
                var t = this.scrollbar,
                    n = this.$wrapperEl,
                    i = t.$el,
                    r = t.$dragEl;
                this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), n.transition(0), i.transition(0), r.transition(0), this.emit("scrollbarDragMove", e))
            },
            onDragEnd: function(e) {
                var t = this,
                    n = t.params.scrollbar,
                    i = t.scrollbar.$el;
                t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, n.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = ee.nextTick(function() {
                    i.css("opacity", 0), i.transition(400)
                }, 1e3)), t.emit("scrollbarDragEnd", e), n.snapOnRelease && t.slideToClosest())
            },
            enableDraggable: function() {
                var e = this;
                if (e.params.scrollbar.el) {
                    var t = e.scrollbar,
                        n = e.touchEventsTouch,
                        i = e.touchEventsDesktop,
                        r = e.params,
                        s = t.$el[0],
                        o = !(!te.passiveListener || !r.passiveListeners) && {
                            passive: !1,
                            capture: !1
                        },
                        a = !(!te.passiveListener || !r.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    te.touch ? (s.addEventListener(n.start, e.scrollbar.onDragStart, o), s.addEventListener(n.move, e.scrollbar.onDragMove, o), s.addEventListener(n.end, e.scrollbar.onDragEnd, a)) : (s.addEventListener(i.start, e.scrollbar.onDragStart, o), m.addEventListener(i.move, e.scrollbar.onDragMove, o), m.addEventListener(i.end, e.scrollbar.onDragEnd, a))
                }
            },
            disableDraggable: function() {
                var e = this;
                if (e.params.scrollbar.el) {
                    var t = e.scrollbar,
                        n = e.touchEventsTouch,
                        i = e.touchEventsDesktop,
                        r = e.params,
                        s = t.$el[0],
                        o = !(!te.passiveListener || !r.passiveListeners) && {
                            passive: !1,
                            capture: !1
                        },
                        a = !(!te.passiveListener || !r.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    te.touch ? (s.removeEventListener(n.start, e.scrollbar.onDragStart, o), s.removeEventListener(n.move, e.scrollbar.onDragMove, o), s.removeEventListener(n.end, e.scrollbar.onDragEnd, a)) : (s.removeEventListener(i.start, e.scrollbar.onDragStart, o), m.removeEventListener(i.move, e.scrollbar.onDragMove, o), m.removeEventListener(i.end, e.scrollbar.onDragEnd, a))
                }
            },
            init: function() {
                var e = this;
                if (e.params.scrollbar.el) {
                    var t = e.scrollbar,
                        n = e.$el,
                        i = e.params.scrollbar,
                        r = M(i.el);
                    e.params.uniqueNavElements && "string" == typeof i.el && 1 < r.length && 1 === n.find(i.el).length && (r = n.find(i.el));
                    var s = r.find("." + e.params.scrollbar.dragClass);
                    0 === s.length && (s = M('<div class="' + e.params.scrollbar.dragClass + '"></div>'), r.append(s)), ee.extend(t, {
                        $el: r,
                        el: r[0],
                        $dragEl: s,
                        dragEl: s[0]
                    }), i.draggable && t.enableDraggable()
                }
            },
            destroy: function() {
                this.scrollbar.disableDraggable()
            }
        },
        $ = {
            setTransform: function(e, t) {
                var n = this.rtl,
                    i = M(e),
                    r = n ? -1 : 1,
                    s = i.attr("data-swiper-parallax") || "0",
                    o = i.attr("data-swiper-parallax-x"),
                    a = i.attr("data-swiper-parallax-y"),
                    l = i.attr("data-swiper-parallax-scale"),
                    c = i.attr("data-swiper-parallax-opacity");
                if (o || a ? (o = o || "0", a = a || "0") : this.isHorizontal() ? (o = s, a = "0") : (a = s, o = "0"), o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t * r + "%" : o * t * r + "px", a = 0 <= a.indexOf("%") ? parseInt(a, 10) * t + "%" : a * t + "px", null != c) {
                    var u = c - (c - 1) * (1 - Math.abs(t));
                    i[0].style.opacity = u
                }
                if (null == l) i.transform("translate3d(" + o + ", " + a + ", 0px)");
                else {
                    var d = l - (l - 1) * (1 - Math.abs(t));
                    i.transform("translate3d(" + o + ", " + a + ", 0px) scale(" + d + ")")
                }
            },
            setTranslate: function() {
                var i = this,
                    e = i.$el,
                    t = i.slides,
                    r = i.progress,
                    s = i.snapGrid;
                e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
                    i.parallax.setTransform(t, r)
                }), t.each(function(e, t) {
                    var n = t.progress;
                    1 < i.params.slidesPerGroup && "auto" !== i.params.slidesPerView && (n += Math.ceil(e / 2) - r * (s.length - 1)), n = Math.min(Math.max(n, -1), 1), M(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
                        i.parallax.setTransform(t, n)
                    })
                })
            },
            setTransition: function(r) {
                void 0 === r && (r = this.params.speed);
                this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
                    var n = M(t),
                        i = parseInt(n.attr("data-swiper-parallax-duration"), 10) || r;
                    0 === r && (i = 0), n.transition(i)
                })
            }
        },
        B = {
            getDistanceBetweenTouches: function(e) {
                if (e.targetTouches.length < 2) return 1;
                var t = e.targetTouches[0].pageX,
                    n = e.targetTouches[0].pageY,
                    i = e.targetTouches[1].pageX,
                    r = e.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(i - t, 2) + Math.pow(r - n, 2))
            },
            onGestureStart: function(e) {
                var t = this,
                    n = t.params.zoom,
                    i = t.zoom,
                    r = i.gesture;
                if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !te.gestures) {
                    if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                    i.fakeGestureTouched = !0, r.scaleStart = B.getDistanceBetweenTouches(e)
                }
                r.$slideEl && r.$slideEl.length || (r.$slideEl = M(e.target).closest(".swiper-slide"), 0 === r.$slideEl.length && (r.$slideEl = t.slides.eq(t.activeIndex)), r.$imageEl = r.$slideEl.find("img, svg, canvas"), r.$imageWrapEl = r.$imageEl.parent("." + n.containerClass), r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio, 0 !== r.$imageWrapEl.length) ? (r.$imageEl.transition(0), t.zoom.isScaling = !0) : r.$imageEl = void 0
            },
            onGestureChange: function(e) {
                var t = this.params.zoom,
                    n = this.zoom,
                    i = n.gesture;
                if (!te.gestures) {
                    if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                    n.fakeGestureMoved = !0, i.scaleMove = B.getDistanceBetweenTouches(e)
                }
                i.$imageEl && 0 !== i.$imageEl.length && (te.gestures ? n.scale = e.scale * n.currentScale : n.scale = i.scaleMove / i.scaleStart * n.currentScale, n.scale > i.maxRatio && (n.scale = i.maxRatio - 1 + Math.pow(n.scale - i.maxRatio + 1, .5)), n.scale < t.minRatio && (n.scale = t.minRatio + 1 - Math.pow(t.minRatio - n.scale + 1, .5)), i.$imageEl.transform("translate3d(0,0,0) scale(" + n.scale + ")"))
            },
            onGestureEnd: function(e) {
                var t = this.params.zoom,
                    n = this.zoom,
                    i = n.gesture;
                if (!te.gestures) {
                    if (!n.fakeGestureTouched || !n.fakeGestureMoved) return;
                    if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !v.android) return;
                    n.fakeGestureTouched = !1, n.fakeGestureMoved = !1
                }
                i.$imageEl && 0 !== i.$imageEl.length && (n.scale = Math.max(Math.min(n.scale, i.maxRatio), t.minRatio), i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + n.scale + ")"), n.currentScale = n.scale, n.isScaling = !1, 1 === n.scale && (i.$slideEl = void 0))
            },
            onTouchStart: function(e) {
                var t = this.zoom,
                    n = t.gesture,
                    i = t.image;
                n.$imageEl && 0 !== n.$imageEl.length && (i.isTouched || (v.android && e.preventDefault(), i.isTouched = !0, i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            },
            onTouchMove: function(e) {
                var t = this,
                    n = t.zoom,
                    i = n.gesture,
                    r = n.image,
                    s = n.velocity;
                if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, r.isTouched && i.$slideEl)) {
                    r.isMoved || (r.width = i.$imageEl[0].offsetWidth, r.height = i.$imageEl[0].offsetHeight, r.startX = ee.getTranslate(i.$imageWrapEl[0], "x") || 0, r.startY = ee.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (r.startX = -r.startX, r.startY = -r.startY));
                    var o = r.width * n.scale,
                        a = r.height * n.scale;
                    if (!(o < i.slideWidth && a < i.slideHeight)) {
                        if (r.minX = Math.min(i.slideWidth / 2 - o / 2, 0), r.maxX = -r.minX, r.minY = Math.min(i.slideHeight / 2 - a / 2, 0), r.maxY = -r.minY, r.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, r.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !r.isMoved && !n.isScaling) {
                            if (t.isHorizontal() && (Math.floor(r.minX) === Math.floor(r.startX) && r.touchesCurrent.x < r.touchesStart.x || Math.floor(r.maxX) === Math.floor(r.startX) && r.touchesCurrent.x > r.touchesStart.x)) return void(r.isTouched = !1);
                            if (!t.isHorizontal() && (Math.floor(r.minY) === Math.floor(r.startY) && r.touchesCurrent.y < r.touchesStart.y || Math.floor(r.maxY) === Math.floor(r.startY) && r.touchesCurrent.y > r.touchesStart.y)) return void(r.isTouched = !1)
                        }
                        e.preventDefault(), e.stopPropagation(), r.isMoved = !0, r.currentX = r.touchesCurrent.x - r.touchesStart.x + r.startX, r.currentY = r.touchesCurrent.y - r.touchesStart.y + r.startY, r.currentX < r.minX && (r.currentX = r.minX + 1 - Math.pow(r.minX - r.currentX + 1, .8)), r.currentX > r.maxX && (r.currentX = r.maxX - 1 + Math.pow(r.currentX - r.maxX + 1, .8)), r.currentY < r.minY && (r.currentY = r.minY + 1 - Math.pow(r.minY - r.currentY + 1, .8)), r.currentY > r.maxY && (r.currentY = r.maxY - 1 + Math.pow(r.currentY - r.maxY + 1, .8)), s.prevPositionX || (s.prevPositionX = r.touchesCurrent.x), s.prevPositionY || (s.prevPositionY = r.touchesCurrent.y), s.prevTime || (s.prevTime = Date.now()), s.x = (r.touchesCurrent.x - s.prevPositionX) / (Date.now() - s.prevTime) / 2, s.y = (r.touchesCurrent.y - s.prevPositionY) / (Date.now() - s.prevTime) / 2, Math.abs(r.touchesCurrent.x - s.prevPositionX) < 2 && (s.x = 0), Math.abs(r.touchesCurrent.y - s.prevPositionY) < 2 && (s.y = 0), s.prevPositionX = r.touchesCurrent.x, s.prevPositionY = r.touchesCurrent.y, s.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + r.currentX + "px, " + r.currentY + "px,0)")
                    }
                }
            },
            onTouchEnd: function() {
                var e = this.zoom,
                    t = e.gesture,
                    n = e.image,
                    i = e.velocity;
                if (t.$imageEl && 0 !== t.$imageEl.length) {
                    if (!n.isTouched || !n.isMoved) return n.isTouched = !1, void(n.isMoved = !1);
                    n.isTouched = !1, n.isMoved = !1;
                    var r = 300,
                        s = 300,
                        o = i.x * r,
                        a = n.currentX + o,
                        l = i.y * s,
                        c = n.currentY + l;
                    0 !== i.x && (r = Math.abs((a - n.currentX) / i.x)), 0 !== i.y && (s = Math.abs((c - n.currentY) / i.y));
                    var u = Math.max(r, s);
                    n.currentX = a, n.currentY = c;
                    var d = n.width * e.scale,
                        h = n.height * e.scale;
                    n.minX = Math.min(t.slideWidth / 2 - d / 2, 0), n.maxX = -n.minX, n.minY = Math.min(t.slideHeight / 2 - h / 2, 0), n.maxY = -n.minY, n.currentX = Math.max(Math.min(n.currentX, n.maxX), n.minX), n.currentY = Math.max(Math.min(n.currentY, n.maxY), n.minY), t.$imageWrapEl.transition(u).transform("translate3d(" + n.currentX + "px, " + n.currentY + "px,0)")
                }
            },
            onTransitionEnd: function() {
                var e = this.zoom,
                    t = e.gesture;
                t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
            },
            toggle: function(e) {
                var t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t.in(e)
            },
            in : function(e) {
                var t, n, i, r, s, o, a, l, c, u, d, h, p, f, m, v, g = this,
                    y = g.zoom,
                    b = g.params.zoom,
                    w = y.gesture,
                    x = y.image;
                (w.$slideEl || (w.$slideEl = g.clickedSlide ? M(g.clickedSlide) : g.slides.eq(g.activeIndex), w.$imageEl = w.$slideEl.find("img, svg, canvas"), w.$imageWrapEl = w.$imageEl.parent("." + b.containerClass)), w.$imageEl && 0 !== w.$imageEl.length) && (w.$slideEl.addClass("" + b.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, n = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, n = x.touchesStart.y), y.scale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio, y.currentScale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio, e ? (m = w.$slideEl[0].offsetWidth, v = w.$slideEl[0].offsetHeight, i = w.$slideEl.offset().left + m / 2 - t, r = w.$slideEl.offset().top + v / 2 - n, a = w.$imageEl[0].offsetWidth, l = w.$imageEl[0].offsetHeight, c = a * y.scale, u = l * y.scale, p = -(d = Math.min(m / 2 - c / 2, 0)), f = -(h = Math.min(v / 2 - u / 2, 0)), (s = i * y.scale) < d && (s = d), p < s && (s = p), (o = r * y.scale) < h && (o = h), f < o && (o = f)) : o = s = 0, w.$imageWrapEl.transition(300).transform("translate3d(" + s + "px, " + o + "px,0)"), w.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + y.scale + ")"))
            },
            out: function() {
                var e = this,
                    t = e.zoom,
                    n = e.params.zoom,
                    i = t.gesture;
                i.$slideEl || (i.$slideEl = e.clickedSlide ? M(e.clickedSlide) : e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + n.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + n.zoomedSlideClass), i.$slideEl = void 0)
            },
            enable: function() {
                var e = this,
                    t = e.zoom;
                if (!t.enabled) {
                    t.enabled = !0;
                    var n = !("touchstart" !== e.touchEvents.start || !te.passiveListener || !e.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    te.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, n), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, n), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, n)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, n), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, n), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, n)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
                }
            },
            disable: function() {
                var e = this,
                    t = e.zoom;
                if (t.enabled) {
                    e.zoom.enabled = !1;
                    var n = !("touchstart" !== e.touchEvents.start || !te.passiveListener || !e.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    te.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, n), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, n), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, n)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, n), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, n), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, n)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
                }
            }
        },
        F = {
            loadInSlide: function(e, l) {
                void 0 === l && (l = !0);
                var c = this,
                    u = c.params.lazy;
                if (void 0 !== e && 0 !== c.slides.length) {
                    var d = c.virtual && c.params.virtual.enabled ? c.$wrapperEl.children("." + c.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : c.slides.eq(e),
                        t = d.find("." + u.elementClass + ":not(." + u.loadedClass + "):not(." + u.loadingClass + ")");
                    !d.hasClass(u.elementClass) || d.hasClass(u.loadedClass) || d.hasClass(u.loadingClass) || (t = t.add(d[0])), 0 !== t.length && t.each(function(e, t) {
                        var i = M(t);
                        i.addClass(u.loadingClass);
                        var r = i.attr("data-background"),
                            s = i.attr("data-src"),
                            o = i.attr("data-srcset"),
                            a = i.attr("data-sizes");
                        c.loadImage(i[0], s || r, o, a, !1, function() {
                            if (null != c && c && (!c || c.params) && !c.destroyed) {
                                if (r ? (i.css("background-image", 'url("' + r + '")'), i.removeAttr("data-background")) : (o && (i.attr("srcset", o), i.removeAttr("data-srcset")), a && (i.attr("sizes", a), i.removeAttr("data-sizes")), s && (i.attr("src", s), i.removeAttr("data-src"))), i.addClass(u.loadedClass).removeClass(u.loadingClass), d.find("." + u.preloaderClass).remove(), c.params.loop && l) {
                                    var e = d.attr("data-swiper-slide-index");
                                    if (d.hasClass(c.params.slideDuplicateClass)) {
                                        var t = c.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + c.params.slideDuplicateClass + ")");
                                        c.lazy.loadInSlide(t.index(), !1)
                                    } else {
                                        var n = c.$wrapperEl.children("." + c.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                        c.lazy.loadInSlide(n.index(), !1)
                                    }
                                }
                                c.emit("lazyImageReady", d[0], i[0])
                            }
                        }), c.emit("lazyImageLoad", d[0], i[0])
                    })
                }
            },
            load: function() {
                var i = this,
                    t = i.$wrapperEl,
                    n = i.params,
                    r = i.slides,
                    e = i.activeIndex,
                    s = i.virtual && n.virtual.enabled,
                    o = n.lazy,
                    a = n.slidesPerView;

                function l(e) {
                    if (s) {
                        if (t.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                    } else if (r[e]) return !0;
                    return !1
                }

                function c(e) {
                    return s ? M(e).attr("data-swiper-slide-index") : M(e).index()
                }
                if ("auto" === a && (a = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility) t.children("." + n.slideVisibleClass).each(function(e, t) {
                    var n = s ? M(t).attr("data-swiper-slide-index") : M(t).index();
                    i.lazy.loadInSlide(n)
                });
                else if (1 < a)
                    for (var u = e; u < e + a; u += 1) l(u) && i.lazy.loadInSlide(u);
                else i.lazy.loadInSlide(e);
                if (o.loadPrevNext)
                    if (1 < a || o.loadPrevNextAmount && 1 < o.loadPrevNextAmount) {
                        for (var d = o.loadPrevNextAmount, h = a, p = Math.min(e + h + Math.max(d, h), r.length), f = Math.max(e - Math.max(h, d), 0), m = e + a; m < p; m += 1) l(m) && i.lazy.loadInSlide(m);
                        for (var v = f; v < e; v += 1) l(v) && i.lazy.loadInSlide(v)
                    } else {
                        var g = t.children("." + n.slideNextClass);
                        0 < g.length && i.lazy.loadInSlide(c(g));
                        var y = t.children("." + n.slidePrevClass);
                        0 < y.length && i.lazy.loadInSlide(c(y))
                    }
            }
        },
        W = {
            LinearSpline: function(e, t) {
                var n, i, r, s, o, a = function(e, t) {
                    for (i = -1, n = e.length; 1 < n - i;) e[r = n + i >> 1] <= t ? i = r : n = r;
                    return n
                };
                return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                    return e ? (o = a(this.x, e), s = o - 1, (e - this.x[s]) * (this.y[o] - this.y[s]) / (this.x[o] - this.x[s]) + this.y[s]) : 0
                }, this
            },
            getInterpolateFunction: function(e) {
                var t = this;
                t.controller.spline || (t.controller.spline = t.params.loop ? new W.LinearSpline(t.slidesGrid, e.slidesGrid) : new W.LinearSpline(t.snapGrid, e.snapGrid))
            },
            setTranslate: function(e, t) {
                var n, i, r = this,
                    s = r.controller.control;

                function o(e) {
                    var t = r.rtlTranslate ? -r.translate : r.translate;
                    "slide" === r.params.controller.by && (r.controller.getInterpolateFunction(e), i = -r.controller.spline.interpolate(-t)), i && "container" !== r.params.controller.by || (n = (e.maxTranslate() - e.minTranslate()) / (r.maxTranslate() - r.minTranslate()), i = (t - r.minTranslate()) * n + e.minTranslate()), r.params.controller.inverse && (i = e.maxTranslate() - i), e.updateProgress(i), e.setTranslate(i, r), e.updateActiveIndex(), e.updateSlidesClasses()
                }
                if (Array.isArray(s))
                    for (var a = 0; a < s.length; a += 1) s[a] !== t && s[a] instanceof S && o(s[a]);
                else s instanceof S && t !== s && o(s)
            },
            setTransition: function(t, e) {
                var n, i = this,
                    r = i.controller.control;

                function s(e) {
                    e.setTransition(t, i), 0 !== t && (e.transitionStart(), e.params.autoHeight && ee.nextTick(function() {
                        e.updateAutoHeight()
                    }), e.$wrapperEl.transitionEnd(function() {
                        r && (e.params.loop && "slide" === i.params.controller.by && e.loopFix(), e.transitionEnd())
                    }))
                }
                if (Array.isArray(r))
                    for (n = 0; n < r.length; n += 1) r[n] !== e && r[n] instanceof S && s(r[n]);
                else r instanceof S && e !== r && s(r)
            }
        },
        V = {
            makeElFocusable: function(e) {
                return e.attr("tabIndex", "0"), e
            },
            addElRole: function(e, t) {
                return e.attr("role", t), e
            },
            addElLabel: function(e, t) {
                return e.attr("aria-label", t), e
            },
            disableEl: function(e) {
                return e.attr("aria-disabled", !0), e
            },
            enableEl: function(e) {
                return e.attr("aria-disabled", !1), e
            },
            onEnterKey: function(e) {
                var t = this,
                    n = t.params.a11y;
                if (13 === e.keyCode) {
                    var i = M(e.target);
                    t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(n.lastSlideMessage) : t.a11y.notify(n.nextSlideMessage)), t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(n.firstSlideMessage) : t.a11y.notify(n.prevSlideMessage)), t.pagination && i.is("." + t.params.pagination.bulletClass) && i[0].click()
                }
            },
            notify: function(e) {
                var t = this.a11y.liveRegion;
                0 !== t.length && (t.html(""), t.html(e))
            },
            updateNavigation: function() {
                var e = this;
                if (!e.params.loop) {
                    var t = e.navigation,
                        n = t.$nextEl,
                        i = t.$prevEl;
                    i && 0 < i.length && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)), n && 0 < n.length && (e.isEnd ? e.a11y.disableEl(n) : e.a11y.enableEl(n))
                }
            },
            updatePagination: function() {
                var i = this,
                    r = i.params.a11y;
                i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.bullets.each(function(e, t) {
                    var n = M(t);
                    i.a11y.makeElFocusable(n), i.a11y.addElRole(n, "button"), i.a11y.addElLabel(n, r.paginationBulletMessage.replace(/{{index}}/, n.index() + 1))
                })
            },
            init: function() {
                var e = this;
                e.$el.append(e.a11y.liveRegion);
                var t, n, i = e.params.a11y;
                e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (n = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), n && (e.a11y.makeElFocusable(n), e.a11y.addElRole(n, "button"), e.a11y.addElLabel(n, i.prevSlideMessage), n.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
            },
            destroy: function() {
                var e, t, n = this;
                n.a11y.liveRegion && 0 < n.a11y.liveRegion.length && n.a11y.liveRegion.remove(), n.navigation && n.navigation.$nextEl && (e = n.navigation.$nextEl), n.navigation && n.navigation.$prevEl && (t = n.navigation.$prevEl), e && e.off("keydown", n.a11y.onEnterKey), t && t.off("keydown", n.a11y.onEnterKey), n.pagination && n.params.pagination.clickable && n.pagination.bullets && n.pagination.bullets.length && n.pagination.$el.off("keydown", "." + n.params.pagination.bulletClass, n.a11y.onEnterKey)
            }
        },
        Y = {
            init: function() {
                var e = this;
                if (e.params.history) {
                    if (!J.history || !J.history.pushState) return e.params.history.enabled = !1, void(e.params.hashNavigation.enabled = !0);
                    var t = e.history;
                    t.initialized = !0, t.paths = Y.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || J.addEventListener("popstate", e.history.setHistoryPopState))
                }
            },
            destroy: function() {
                this.params.history.replaceState || J.removeEventListener("popstate", this.history.setHistoryPopState)
            },
            setHistoryPopState: function() {
                this.history.paths = Y.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
            },
            getPathValues: function() {
                var e = J.location.pathname.slice(1).split("/").filter(function(e) {
                        return "" !== e
                    }),
                    t = e.length;
                return {
                    key: e[t - 2],
                    value: e[t - 1]
                }
            },
            setHistory: function(e, t) {
                if (this.history.initialized && this.params.history.enabled) {
                    var n = this.slides.eq(t),
                        i = Y.slugify(n.attr("data-history"));
                    J.location.pathname.includes(e) || (i = e + "/" + i);
                    var r = J.history.state;
                    r && r.value === i || (this.params.history.replaceState ? J.history.replaceState({
                        value: i
                    }, null, i) : J.history.pushState({
                        value: i
                    }, null, i))
                }
            },
            slugify: function(e) {
                return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            },
            scrollToSlide: function(e, t, n) {
                var i = this;
                if (t)
                    for (var r = 0, s = i.slides.length; r < s; r += 1) {
                        var o = i.slides.eq(r);
                        if (Y.slugify(o.attr("data-history")) === t && !o.hasClass(i.params.slideDuplicateClass)) {
                            var a = o.index();
                            i.slideTo(a, e, n)
                        }
                    } else i.slideTo(0, e, n)
            }
        },
        X = {
            onHashCange: function() {
                var e = this,
                    t = m.location.hash.replace("#", "");
                if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                    var n = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index();
                    if (void 0 === n) return;
                    e.slideTo(n)
                }
            },
            setHash: function() {
                var e = this;
                if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
                    if (e.params.hashNavigation.replaceState && J.history && J.history.replaceState) J.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "");
                    else {
                        var t = e.slides.eq(e.activeIndex),
                            n = t.attr("data-hash") || t.attr("data-history");
                        m.location.hash = n || ""
                    }
            },
            init: function() {
                var e = this;
                if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
                    e.hashNavigation.initialized = !0;
                    var t = m.location.hash.replace("#", "");
                    if (t)
                        for (var n = 0, i = e.slides.length; n < i; n += 1) {
                            var r = e.slides.eq(n);
                            if ((r.attr("data-hash") || r.attr("data-history")) === t && !r.hasClass(e.params.slideDuplicateClass)) {
                                var s = r.index();
                                e.slideTo(s, 0, e.params.runCallbacksOnInit, !0)
                            }
                        }
                    e.params.hashNavigation.watchState && M(J).on("hashchange", e.hashNavigation.onHashCange)
                }
            },
            destroy: function() {
                this.params.hashNavigation.watchState && M(J).off("hashchange", this.hashNavigation.onHashCange)
            }
        },
        G = {
            run: function() {
                var e = this,
                    t = e.slides.eq(e.activeIndex),
                    n = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = ee.nextTick(function() {
                    e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
                }, n)
            },
            start: function() {
                var e = this;
                return void 0 === e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0))
            },
            stop: function() {
                var e = this;
                return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0))
            },
            pause: function(e) {
                var t = this;
                t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())))
            }
        },
        U = {
            setTranslate: function() {
                for (var e = this, t = e.slides, n = 0; n < t.length; n += 1) {
                    var i = e.slides.eq(n),
                        r = -i[0].swiperSlideOffset;
                    e.params.virtualTranslate || (r -= e.translate);
                    var s = 0;
                    e.isHorizontal() || (s = r, r = 0);
                    var o = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                    i.css({
                        opacity: o
                    }).transform("translate3d(" + r + "px, " + s + "px, 0px)")
                }
            },
            setTransition: function(e) {
                var n = this,
                    t = n.slides,
                    i = n.$wrapperEl;
                if (t.transition(e), n.params.virtualTranslate && 0 !== e) {
                    var r = !1;
                    t.transitionEnd(function() {
                        if (!r && n && !n.destroyed) {
                            r = !0, n.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) i.trigger(e[t])
                        }
                    })
                }
            }
        },
        Q = {
            setTranslate: function() {
                var e, t = this,
                    n = t.$el,
                    i = t.$wrapperEl,
                    r = t.slides,
                    s = t.width,
                    o = t.height,
                    a = t.rtlTranslate,
                    l = t.size,
                    c = t.params.cubeEffect,
                    u = t.isHorizontal(),
                    d = t.virtual && t.params.virtual.enabled,
                    h = 0;
                c.shadow && (u ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = M('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
                    height: s + "px"
                })) : 0 === (e = n.find(".swiper-cube-shadow")).length && (e = M('<div class="swiper-cube-shadow"></div>'), n.append(e)));
                for (var p = 0; p < r.length; p += 1) {
                    var f = r.eq(p),
                        m = p;
                    d && (m = parseInt(f.attr("data-swiper-slide-index"), 10));
                    var v = 90 * m,
                        g = Math.floor(v / 360);
                    a && (v = -v, g = Math.floor(-v / 360));
                    var y = Math.max(Math.min(f[0].progress, 1), -1),
                        b = 0,
                        w = 0,
                        x = 0;
                    m % 4 == 0 ? (b = 4 * -g * l, x = 0) : (m - 1) % 4 == 0 ? (b = 0, x = 4 * -g * l) : (m - 2) % 4 == 0 ? (b = l + 4 * g * l, x = l) : (m - 3) % 4 == 0 && (b = -l, x = 3 * l + 4 * l * g), a && (b = -b), u || (w = b, b = 0);
                    var E = "rotateX(" + (u ? 0 : -v) + "deg) rotateY(" + (u ? v : 0) + "deg) translate3d(" + b + "px, " + w + "px, " + x + "px)";
                    if (y <= 1 && -1 < y && (h = 90 * m + 90 * y, a && (h = 90 * -m - 90 * y)), f.transform(E), c.slideShadows) {
                        var T = u ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                            S = u ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                        0 === T.length && (T = M('<div class="swiper-slide-shadow-' + (u ? "left" : "top") + '"></div>'), f.append(T)), 0 === S.length && (S = M('<div class="swiper-slide-shadow-' + (u ? "right" : "bottom") + '"></div>'), f.append(S)), T.length && (T[0].style.opacity = Math.max(-y, 0)), S.length && (S[0].style.opacity = Math.max(y, 0))
                    }
                }
                if (i.css({
                        "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                        "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                        "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                        "transform-origin": "50% 50% -" + l / 2 + "px"
                    }), c.shadow)
                    if (u) e.transform("translate3d(0px, " + (s / 2 + c.shadowOffset) + "px, " + -s / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + c.shadowScale + ")");
                    else {
                        var C = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                            _ = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2),
                            k = c.shadowScale,
                            A = c.shadowScale / _,
                            D = c.shadowOffset;
                        e.transform("scale3d(" + k + ", 1, " + A + ") translate3d(0px, " + (o / 2 + D) + "px, " + -o / 2 / A + "px) rotateX(-90deg)")
                    }
                var O = I.isSafari || I.isUiWebView ? -l / 2 : 0;
                i.transform("translate3d(0px,0," + O + "px) rotateX(" + (t.isHorizontal() ? 0 : h) + "deg) rotateY(" + (t.isHorizontal() ? -h : 0) + "deg)")
            },
            setTransition: function(e) {
                var t = this.$el;
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
            }
        },
        K = {
            setTranslate: function() {
                for (var e = this, t = e.slides, n = e.rtlTranslate, i = 0; i < t.length; i += 1) {
                    var r = t.eq(i),
                        s = r[0].progress;
                    e.params.flipEffect.limitRotation && (s = Math.max(Math.min(r[0].progress, 1), -1));
                    var o = -180 * s,
                        a = 0,
                        l = -r[0].swiperSlideOffset,
                        c = 0;
                    if (e.isHorizontal() ? n && (o = -o) : (c = l, a = -o, o = l = 0), r[0].style.zIndex = -Math.abs(Math.round(s)) + t.length, e.params.flipEffect.slideShadows) {
                        var u = e.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top"),
                            d = e.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
                        0 === u.length && (u = M('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), r.append(u)), 0 === d.length && (d = M('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), r.append(d)), u.length && (u[0].style.opacity = Math.max(-s, 0)), d.length && (d[0].style.opacity = Math.max(s, 0))
                    }
                    r.transform("translate3d(" + l + "px, " + c + "px, 0px) rotateX(" + a + "deg) rotateY(" + o + "deg)")
                }
            },
            setTransition: function(e) {
                var n = this,
                    t = n.slides,
                    i = n.activeIndex,
                    r = n.$wrapperEl;
                if (t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), n.params.virtualTranslate && 0 !== e) {
                    var s = !1;
                    t.eq(i).transitionEnd(function() {
                        if (!s && n && !n.destroyed) {
                            s = !0, n.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) r.trigger(e[t])
                        }
                    })
                }
            }
        },
        Z = {
            setTranslate: function() {
                for (var e = this, t = e.width, n = e.height, i = e.slides, r = e.$wrapperEl, s = e.slidesSizesGrid, o = e.params.coverflowEffect, a = e.isHorizontal(), l = e.translate, c = a ? t / 2 - l : n / 2 - l, u = a ? o.rotate : -o.rotate, d = o.depth, h = 0, p = i.length; h < p; h += 1) {
                    var f = i.eq(h),
                        m = s[h],
                        v = (c - f[0].swiperSlideOffset - m / 2) / m * o.modifier,
                        g = a ? u * v : 0,
                        y = a ? 0 : u * v,
                        b = -d * Math.abs(v),
                        w = a ? 0 : o.stretch * v,
                        x = a ? o.stretch * v : 0;
                    Math.abs(x) < .001 && (x = 0), Math.abs(w) < .001 && (w = 0), Math.abs(b) < .001 && (b = 0), Math.abs(g) < .001 && (g = 0), Math.abs(y) < .001 && (y = 0);
                    var E = "translate3d(" + x + "px," + w + "px," + b + "px)  rotateX(" + y + "deg) rotateY(" + g + "deg)";
                    if (f.transform(E), f[0].style.zIndex = 1 - Math.abs(Math.round(v)), o.slideShadows) {
                        var T = a ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                            S = a ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                        0 === T.length && (T = M('<div class="swiper-slide-shadow-' + (a ? "left" : "top") + '"></div>'), f.append(T)), 0 === S.length && (S = M('<div class="swiper-slide-shadow-' + (a ? "right" : "bottom") + '"></div>'), f.append(S)), T.length && (T[0].style.opacity = 0 < v ? v : 0), S.length && (S[0].style.opacity = 0 < -v ? -v : 0)
                    }
                }(te.pointerEvents || te.prefixedPointerEvents) && (r[0].style.perspectiveOrigin = c + "px 50%")
            },
            setTransition: function(e) {
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }
        },
        ne = {
            init: function() {
                var e = this,
                    t = e.params.thumbs,
                    n = e.constructor;
                t.swiper instanceof n ? (e.thumbs.swiper = t.swiper, ee.extend(e.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), ee.extend(e.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })) : ee.isObject(t.swiper) && (e.thumbs.swiper = new n(ee.extend({}, t.swiper, {
                    watchSlidesVisibility: !0,
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
            },
            onThumbClick: function() {
                var e = this,
                    t = e.thumbs.swiper;
                if (t) {
                    var n = t.clickedIndex,
                        i = t.clickedSlide;
                    if (!(i && M(i).hasClass(e.params.thumbs.slideThumbActiveClass) || null == n)) {
                        var r;
                        if (r = t.params.loop ? parseInt(M(t.clickedSlide).attr("data-swiper-slide-index"), 10) : n, e.params.loop) {
                            var s = e.activeIndex;
                            e.slides.eq(s).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, s = e.activeIndex);
                            var o = e.slides.eq(s).prevAll('[data-swiper-slide-index="' + r + '"]').eq(0).index(),
                                a = e.slides.eq(s).nextAll('[data-swiper-slide-index="' + r + '"]').eq(0).index();
                            r = void 0 === o ? a : void 0 === a ? o : a - s < s - o ? a : o
                        }
                        e.slideTo(r)
                    }
                }
            },
            update: function(e) {
                var t = this,
                    n = t.thumbs.swiper;
                if (n) {
                    var i = "auto" === n.params.slidesPerView ? n.slidesPerViewDynamic() : n.params.slidesPerView;
                    if (t.realIndex !== n.realIndex) {
                        var r, s = n.activeIndex;
                        if (n.params.loop) {
                            n.slides.eq(s).hasClass(n.params.slideDuplicateClass) && (n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft, s = n.activeIndex);
                            var o = n.slides.eq(s).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
                                a = n.slides.eq(s).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
                            r = void 0 === o ? a : void 0 === a ? o : a - s == s - o ? s : a - s < s - o ? a : o
                        } else r = t.realIndex;
                        n.visibleSlidesIndexes.indexOf(r) < 0 && (n.params.centeredSlides ? r = s < r ? r - Math.floor(i / 2) + 1 : r + Math.floor(i / 2) - 1 : s < r && (r = r - i + 1), n.slideTo(r, e ? 0 : void 0))
                    }
                    var l = 1,
                        c = t.params.thumbs.slideThumbActiveClass;
                    if (1 < t.params.slidesPerView && !t.params.centeredSlides && (l = t.params.slidesPerView), n.slides.removeClass(c), n.params.loop)
                        for (var u = 0; u < l; u += 1) n.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + u) + '"]').addClass(c);
                    else
                        for (var d = 0; d < l; d += 1) n.slides.eq(t.realIndex + d).addClass(c)
                }
            }
        },
        ie = [C, _, k, A, O, L, j, {
            name: "mousewheel",
            params: {
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarged: "container"
                }
            },
            create: function() {
                var e = this;
                ee.extend(e, {
                    mousewheel: {
                        enabled: !1,
                        enable: z.enable.bind(e),
                        disable: z.disable.bind(e),
                        handle: z.handle.bind(e),
                        handleMouseEnter: z.handleMouseEnter.bind(e),
                        handleMouseLeave: z.handleMouseLeave.bind(e),
                        lastScrollTime: ee.now()
                    }
                })
            },
            on: {
                init: function() {
                    this.params.mousewheel.enabled && this.mousewheel.enable()
                },
                destroy: function() {
                    this.mousewheel.enabled && this.mousewheel.disable()
                }
            }
        }, {
            name: "navigation",
            params: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            },
            create: function() {
                var e = this;
                ee.extend(e, {
                    navigation: {
                        init: H.init.bind(e),
                        update: H.update.bind(e),
                        destroy: H.destroy.bind(e),
                        onNextClick: H.onNextClick.bind(e),
                        onPrevClick: H.onPrevClick.bind(e)
                    }
                })
            },
            on: {
                init: function() {
                    this.navigation.init(), this.navigation.update()
                },
                toEdge: function() {
                    this.navigation.update()
                },
                fromEdge: function() {
                    this.navigation.update()
                },
                destroy: function() {
                    this.navigation.destroy()
                },
                click: function(e) {
                    var t = this.navigation,
                        n = t.$nextEl,
                        i = t.$prevEl;
                    !this.params.navigation.hideOnClick || M(e.target).is(i) || M(e.target).is(n) || (n && n.toggleClass(this.params.navigation.hiddenClass), i && i.toggleClass(this.params.navigation.hiddenClass))
                }
            }
        }, {
            name: "pagination",
            params: {
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: function(e) {
                        return e
                    },
                    formatFractionTotal: function(e) {
                        return e
                    },
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    modifierClass: "swiper-pagination-",
                    currentClass: "swiper-pagination-current",
                    totalClass: "swiper-pagination-total",
                    hiddenClass: "swiper-pagination-hidden",
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                    progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                    clickableClass: "swiper-pagination-clickable",
                    lockClass: "swiper-pagination-lock"
                }
            },
            create: function() {
                var e = this;
                ee.extend(e, {
                    pagination: {
                        init: q.init.bind(e),
                        render: q.render.bind(e),
                        update: q.update.bind(e),
                        destroy: q.destroy.bind(e),
                        dynamicBulletIndex: 0
                    }
                })
            },
            on: {
                init: function() {
                    this.pagination.init(), this.pagination.render(), this.pagination.update()
                },
                activeIndexChange: function() {
                    this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
                },
                snapIndexChange: function() {
                    this.params.loop || this.pagination.update()
                },
                slidesLengthChange: function() {
                    this.params.loop && (this.pagination.render(), this.pagination.update())
                },
                snapGridLengthChange: function() {
                    this.params.loop || (this.pagination.render(), this.pagination.update())
                },
                destroy: function() {
                    this.pagination.destroy()
                },
                click: function(e) {
                    var t = this;
                    t.params.pagination.el && t.params.pagination.hideOnClick && 0 < t.pagination.$el.length && !M(e.target).hasClass(t.params.pagination.bulletClass) && t.pagination.$el.toggleClass(t.params.pagination.hiddenClass)
                }
            }
        }, {
            name: "scrollbar",
            params: {
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag"
                }
            },
            create: function() {
                var e = this;
                ee.extend(e, {
                    scrollbar: {
                        init: R.init.bind(e),
                        destroy: R.destroy.bind(e),
                        updateSize: R.updateSize.bind(e),
                        setTranslate: R.setTranslate.bind(e),
                        setTransition: R.setTransition.bind(e),
                        enableDraggable: R.enableDraggable.bind(e),
                        disableDraggable: R.disableDraggable.bind(e),
                        setDragPosition: R.setDragPosition.bind(e),
                        onDragStart: R.onDragStart.bind(e),
                        onDragMove: R.onDragMove.bind(e),
                        onDragEnd: R.onDragEnd.bind(e),
                        isTouched: !1,
                        timeout: null,
                        dragTimeout: null
                    }
                })
            },
            on: {
                init: function() {
                    this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
                },
                update: function() {
                    this.scrollbar.updateSize()
                },
                resize: function() {
                    this.scrollbar.updateSize()
                },
                observerUpdate: function() {
                    this.scrollbar.updateSize()
                },
                setTranslate: function() {
                    this.scrollbar.setTranslate()
                },
                setTransition: function(e) {
                    this.scrollbar.setTransition(e)
                },
                destroy: function() {
                    this.scrollbar.destroy()
                }
            }
        }, {
            name: "parallax",
            params: {
                parallax: {
                    enabled: !1
                }
            },
            create: function() {
                ee.extend(this, {
                    parallax: {
                        setTransform: $.setTransform.bind(this),
                        setTranslate: $.setTranslate.bind(this),
                        setTransition: $.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                },
                init: function() {
                    this.params.parallax && this.parallax.setTranslate()
                },
                setTranslate: function() {
                    this.params.parallax && this.parallax.setTranslate()
                },
                setTransition: function(e) {
                    this.params.parallax && this.parallax.setTransition(e)
                }
            }
        }, {
            name: "zoom",
            params: {
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            },
            create: function() {
                var i = this,
                    t = {
                        enabled: !1,
                        scale: 1,
                        currentScale: 1,
                        isScaling: !1,
                        gesture: {
                            $slideEl: void 0,
                            slideWidth: void 0,
                            slideHeight: void 0,
                            $imageEl: void 0,
                            $imageWrapEl: void 0,
                            maxRatio: 3
                        },
                        image: {
                            isTouched: void 0,
                            isMoved: void 0,
                            currentX: void 0,
                            currentY: void 0,
                            minX: void 0,
                            minY: void 0,
                            maxX: void 0,
                            maxY: void 0,
                            width: void 0,
                            height: void 0,
                            startX: void 0,
                            startY: void 0,
                            touchesStart: {},
                            touchesCurrent: {}
                        },
                        velocity: {
                            x: void 0,
                            y: void 0,
                            prevPositionX: void 0,
                            prevPositionY: void 0,
                            prevTime: void 0
                        }
                    };
                "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(e) {
                    t[e] = B[e].bind(i)
                }), ee.extend(i, {
                    zoom: t
                });
                var r = 1;
                Object.defineProperty(i.zoom, "scale", {
                    get: function() {
                        return r
                    },
                    set: function(e) {
                        if (r !== e) {
                            var t = i.zoom.gesture.$imageEl ? i.zoom.gesture.$imageEl[0] : void 0,
                                n = i.zoom.gesture.$slideEl ? i.zoom.gesture.$slideEl[0] : void 0;
                            i.emit("zoomChange", e, t, n)
                        }
                        r = e
                    }
                })
            },
            on: {
                init: function() {
                    this.params.zoom.enabled && this.zoom.enable()
                },
                destroy: function() {
                    this.zoom.disable()
                },
                touchStart: function(e) {
                    this.zoom.enabled && this.zoom.onTouchStart(e)
                },
                touchEnd: function(e) {
                    this.zoom.enabled && this.zoom.onTouchEnd(e)
                },
                doubleTap: function(e) {
                    this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
                },
                transitionEnd: function() {
                    this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
                }
            }
        }, {
            name: "lazy",
            params: {
                lazy: {
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            },
            create: function() {
                ee.extend(this, {
                    lazy: {
                        initialImageLoaded: !1,
                        load: F.load.bind(this),
                        loadInSlide: F.loadInSlide.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
                },
                init: function() {
                    this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
                },
                scroll: function() {
                    this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
                },
                resize: function() {
                    this.params.lazy.enabled && this.lazy.load()
                },
                scrollbarDragMove: function() {
                    this.params.lazy.enabled && this.lazy.load()
                },
                transitionStart: function() {
                    var e = this;
                    e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
                },
                transitionEnd: function() {
                    this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
                }
            }
        }, {
            name: "controller",
            params: {
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            },
            create: function() {
                var e = this;
                ee.extend(e, {
                    controller: {
                        control: e.params.controller.control,
                        getInterpolateFunction: W.getInterpolateFunction.bind(e),
                        setTranslate: W.setTranslate.bind(e),
                        setTransition: W.setTransition.bind(e)
                    }
                })
            },
            on: {
                update: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                resize: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                observerUpdate: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                setTranslate: function(e, t) {
                    this.controller.control && this.controller.setTranslate(e, t)
                },
                setTransition: function(e, t) {
                    this.controller.control && this.controller.setTransition(e, t)
                }
            }
        }, {
            name: "a11y",
            params: {
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}"
                }
            },
            create: function() {
                var t = this;
                ee.extend(t, {
                    a11y: {
                        liveRegion: M('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                    }
                }), Object.keys(V).forEach(function(e) {
                    t.a11y[e] = V[e].bind(t)
                })
            },
            on: {
                init: function() {
                    this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
                },
                toEdge: function() {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                fromEdge: function() {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                paginationUpdate: function() {
                    this.params.a11y.enabled && this.a11y.updatePagination()
                },
                destroy: function() {
                    this.params.a11y.enabled && this.a11y.destroy()
                }
            }
        }, {
            name: "history",
            params: {
                history: {
                    enabled: !1,
                    replaceState: !1,
                    key: "slides"
                }
            },
            create: function() {
                var e = this;
                ee.extend(e, {
                    history: {
                        init: Y.init.bind(e),
                        setHistory: Y.setHistory.bind(e),
                        setHistoryPopState: Y.setHistoryPopState.bind(e),
                        scrollToSlide: Y.scrollToSlide.bind(e),
                        destroy: Y.destroy.bind(e)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.history.enabled && this.history.init()
                },
                destroy: function() {
                    this.params.history.enabled && this.history.destroy()
                },
                transitionEnd: function() {
                    this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
                }
            }
        }, {
            name: "hash-navigation",
            params: {
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1
                }
            },
            create: function() {
                var e = this;
                ee.extend(e, {
                    hashNavigation: {
                        initialized: !1,
                        init: X.init.bind(e),
                        destroy: X.destroy.bind(e),
                        setHash: X.setHash.bind(e),
                        onHashCange: X.onHashCange.bind(e)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.hashNavigation.enabled && this.hashNavigation.init()
                },
                destroy: function() {
                    this.params.hashNavigation.enabled && this.hashNavigation.destroy()
                },
                transitionEnd: function() {
                    this.hashNavigation.initialized && this.hashNavigation.setHash()
                }
            }
        }, {
            name: "autoplay",
            params: {
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1
                }
            },
            create: function() {
                var t = this;
                ee.extend(t, {
                    autoplay: {
                        running: !1,
                        paused: !1,
                        run: G.run.bind(t),
                        start: G.start.bind(t),
                        stop: G.stop.bind(t),
                        pause: G.pause.bind(t),
                        onTransitionEnd: function(e) {
                            t && !t.destroyed && t.$wrapperEl && e.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
                        }
                    }
                })
            },
            on: {
                init: function() {
                    this.params.autoplay.enabled && this.autoplay.start()
                },
                beforeTransitionStart: function(e, t) {
                    this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
                },
                sliderFirstMove: function() {
                    this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
                },
                destroy: function() {
                    this.autoplay.running && this.autoplay.stop()
                }
            }
        }, {
            name: "effect-fade",
            params: {
                fadeEffect: {
                    crossFade: !1
                }
            },
            create: function() {
                ee.extend(this, {
                    fadeEffect: {
                        setTranslate: U.setTranslate.bind(this),
                        setTransition: U.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    if ("fade" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "fade");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        ee.extend(e.params, t), ee.extend(e.originalParams, t)
                    }
                },
                setTranslate: function() {
                    "fade" === this.params.effect && this.fadeEffect.setTranslate()
                },
                setTransition: function(e) {
                    "fade" === this.params.effect && this.fadeEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-cube",
            params: {
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                }
            },
            create: function() {
                ee.extend(this, {
                    cubeEffect: {
                        setTranslate: Q.setTranslate.bind(this),
                        setTransition: Q.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    if ("cube" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            resistanceRatio: 0,
                            spaceBetween: 0,
                            centeredSlides: !1,
                            virtualTranslate: !0
                        };
                        ee.extend(e.params, t), ee.extend(e.originalParams, t)
                    }
                },
                setTranslate: function() {
                    "cube" === this.params.effect && this.cubeEffect.setTranslate()
                },
                setTransition: function(e) {
                    "cube" === this.params.effect && this.cubeEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-flip",
            params: {
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0
                }
            },
            create: function() {
                ee.extend(this, {
                    flipEffect: {
                        setTranslate: K.setTranslate.bind(this),
                        setTransition: K.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    if ("flip" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        ee.extend(e.params, t), ee.extend(e.originalParams, t)
                    }
                },
                setTranslate: function() {
                    "flip" === this.params.effect && this.flipEffect.setTranslate()
                },
                setTransition: function(e) {
                    "flip" === this.params.effect && this.flipEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-coverflow",
            params: {
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                }
            },
            create: function() {
                ee.extend(this, {
                    coverflowEffect: {
                        setTranslate: Z.setTranslate.bind(this),
                        setTransition: Z.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
                },
                setTranslate: function() {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
                },
                setTransition: function(e) {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
                }
            }
        }, {
            name: "thumbs",
            params: {
                thumbs: {
                    swiper: null,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-container-thumbs"
                }
            },
            create: function() {
                ee.extend(this, {
                    thumbs: {
                        swiper: null,
                        init: ne.init.bind(this),
                        update: ne.update.bind(this),
                        onThumbClick: ne.onThumbClick.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this.params.thumbs;
                    e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
                },
                slideChange: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                update: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                resize: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                observerUpdate: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                setTransition: function(e) {
                    var t = this.thumbs.swiper;
                    t && t.setTransition(e)
                },
                beforeDestroy: function() {
                    var e = this.thumbs.swiper;
                    e && this.thumbs.swiperCreated && e && e.destroy()
                }
            }
        }];
    return void 0 === S.use && (S.use = S.Class.use, S.installModule = S.Class.installModule), S.use(ie), S
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
}(this, function() {
    "use strict";
    for (var e = "undefined" != typeof window && "undefined" != typeof document, t = ["Edge", "Trident", "Firefox"], n = 0, i = 0; i < t.length; i += 1)
        if (e && 0 <= navigator.userAgent.indexOf(t[i])) {
            n = 1;
            break
        }
    var o = e && window.Promise ? function(e) {
        var t = !1;
        return function() {
            t || (t = !0, window.Promise.resolve().then(function() {
                t = !1, e()
            }))
        }
    } : function(e) {
        var t = !1;
        return function() {
            t || (t = !0, setTimeout(function() {
                t = !1, e()
            }, n))
        }
    };

    function a(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }

    function w(e, t) {
        if (1 !== e.nodeType) return [];
        var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
        return t ? n[t] : n
    }

    function p(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }

    function f(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body
        }
        var t = w(e),
            n = t.overflow,
            i = t.overflowX,
            r = t.overflowY;
        return /(auto|scroll|overlay)/.test(n + r + i) ? e : f(p(e))
    }
    var r = e && !(!window.MSInputMethodContext || !document.documentMode),
        s = e && /MSIE 10/.test(navigator.userAgent);

    function m(e) {
        return 11 === e ? r : 10 === e ? s : r || s
    }

    function P(e) {
        if (!e) return document.documentElement;
        for (var t = m(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === w(n, "position") ? P(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function u(e) {
        return null !== e.parentNode ? u(e.parentNode) : e
    }

    function v(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? e : t,
            r = n ? t : e,
            s = document.createRange();
        s.setStart(i, 0), s.setEnd(r, 0);
        var o, a, l = s.commonAncestorContainer;
        if (e !== l && t !== l || i.contains(r)) return "BODY" === (a = (o = l).nodeName) || "HTML" !== a && P(o.firstElementChild) !== o ? P(l) : l;
        var c = u(e);
        return c.host ? v(c.host, t) : v(e, u(t).host)
    }

    function g(e) {
        var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = e.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var i = e.ownerDocument.documentElement;
            return (e.ownerDocument.scrollingElement || i)[t]
        }
        return e[t]
    }

    function d(e, t) {
        var n = "x" === t ? "Left" : "Top",
            i = "Left" === n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
    }

    function l(e, t, n, i) {
        return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], m(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
    }

    function y(e) {
        var t = e.body,
            n = e.documentElement,
            i = m(10) && getComputedStyle(n);
        return {
            height: l("Height", t, n, i),
            width: l("Width", t, n, i)
        }
    }
    var c = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        h = function() {
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(e, t, n) {
                return t && i(e.prototype, t), n && i(e, n), e
            }
        }(),
        x = function(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        },
        L = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        };

    function E(e) {
        return L({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }

    function N(e) {
        var t = {};
        try {
            if (m(10)) {
                t = e.getBoundingClientRect();
                var n = g(e, "top"),
                    i = g(e, "left");
                t.top += n, t.left += i, t.bottom += n, t.right += i
            } else t = e.getBoundingClientRect()
        } catch (e) {}
        var r = {
                left: t.left,
                top: t.top,
                width: t.right - t.left,
                height: t.bottom - t.top
            },
            s = "HTML" === e.nodeName ? y(e.ownerDocument) : {},
            o = s.width || e.clientWidth || r.right - r.left,
            a = s.height || e.clientHeight || r.bottom - r.top,
            l = e.offsetWidth - o,
            c = e.offsetHeight - a;
        if (l || c) {
            var u = w(e);
            l -= d(u, "x"), c -= d(u, "y"), r.width -= l, r.height -= c
        }
        return E(r)
    }

    function b(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            i = m(10),
            r = "HTML" === t.nodeName,
            s = N(e),
            o = N(t),
            a = f(e),
            l = w(t),
            c = parseFloat(l.borderTopWidth, 10),
            u = parseFloat(l.borderLeftWidth, 10);
        n && r && (o.top = Math.max(o.top, 0), o.left = Math.max(o.left, 0));
        var d = E({
            top: s.top - o.top - c,
            left: s.left - o.left - u,
            width: s.width,
            height: s.height
        });
        if (d.marginTop = 0, d.marginLeft = 0, !i && r) {
            var h = parseFloat(l.marginTop, 10),
                p = parseFloat(l.marginLeft, 10);
            d.top -= c - h, d.bottom -= c - h, d.left -= u - p, d.right -= u - p, d.marginTop = h, d.marginLeft = p
        }
        return (i && !n ? t.contains(a) : t === a && "BODY" !== a.nodeName) && (d = function(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                i = g(t, "top"),
                r = g(t, "left"),
                s = n ? -1 : 1;
            return e.top += i * s, e.bottom += i * s, e.left += r * s, e.right += r * s, e
        }(d, t)), d
    }

    function T(e) {
        if (!e || !e.parentElement || m()) return document.documentElement;
        for (var t = e.parentElement; t && "none" === w(t, "transform");) t = t.parentElement;
        return t || document.documentElement
    }

    function S(e, t, n, i) {
        var r = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
            s = {
                top: 0,
                left: 0
            },
            o = r ? T(e) : v(e, t);
        if ("viewport" === i) s = function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                n = e.ownerDocument.documentElement,
                i = b(e, n),
                r = Math.max(n.clientWidth, window.innerWidth || 0),
                s = Math.max(n.clientHeight, window.innerHeight || 0),
                o = t ? 0 : g(n),
                a = t ? 0 : g(n, "left");
            return E({
                top: o - i.top + i.marginTop,
                left: a - i.left + i.marginLeft,
                width: r,
                height: s
            })
        }(o, r);
        else {
            var a = void 0;
            "scrollParent" === i ? "BODY" === (a = f(p(t))).nodeName && (a = e.ownerDocument.documentElement) : a = "window" === i ? e.ownerDocument.documentElement : i;
            var l = b(a, o, r);
            if ("HTML" !== a.nodeName || function e(t) {
                    var n = t.nodeName;
                    if ("BODY" === n || "HTML" === n) return !1;
                    if ("fixed" === w(t, "position")) return !0;
                    var i = p(t);
                    return !!i && e(i)
                }(o)) s = l;
            else {
                var c = y(e.ownerDocument),
                    u = c.height,
                    d = c.width;
                s.top += l.top - l.marginTop, s.bottom = u + l.top, s.left += l.left - l.marginLeft, s.right = d + l.left
            }
        }
        var h = "number" == typeof(n = n || 0);
        return s.left += h ? n : n.left || 0, s.top += h ? n : n.top || 0, s.right -= h ? n : n.right || 0, s.bottom -= h ? n : n.bottom || 0, s
    }

    function C(e, t, i, n, r) {
        var s = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var o = S(i, n, s, r),
            a = {
                top: {
                    width: o.width,
                    height: t.top - o.top
                },
                right: {
                    width: o.right - t.right,
                    height: o.height
                },
                bottom: {
                    width: o.width,
                    height: o.bottom - t.bottom
                },
                left: {
                    width: t.left - o.left,
                    height: o.height
                }
            },
            l = Object.keys(a).map(function(e) {
                return L({
                    key: e
                }, a[e], {
                    area: (t = a[e], t.width * t.height)
                });
                var t
            }).sort(function(e, t) {
                return t.area - e.area
            }),
            c = l.filter(function(e) {
                var t = e.width,
                    n = e.height;
                return t >= i.clientWidth && n >= i.clientHeight
            }),
            u = 0 < c.length ? c[0].key : l[0].key,
            d = e.split("-")[1];
        return u + (d ? "-" + d : "")
    }

    function _(e, t, n) {
        var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return b(n, i ? T(t) : v(t, n), i)
    }

    function k(e) {
        var t = e.ownerDocument.defaultView.getComputedStyle(e),
            n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
            i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
        return {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        }
    }

    function A(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }

    function D(e, t, n) {
        n = n.split("-")[0];
        var i = k(e),
            r = {
                width: i.width,
                height: i.height
            },
            s = -1 !== ["right", "left"].indexOf(n),
            o = s ? "top" : "left",
            a = s ? "left" : "top",
            l = s ? "height" : "width",
            c = s ? "width" : "height";
        return r[o] = t[o] + t[l] / 2 - i[l] / 2, r[a] = n === a ? t[a] - i[c] : t[A(a)], r
    }

    function j(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function O(e, n, t) {
        return (void 0 === t ? e : e.slice(0, function(e, t, n) {
            if (Array.prototype.findIndex) return e.findIndex(function(e) {
                return e[t] === n
            });
            var i = j(e, function(e) {
                return e[t] === n
            });
            return e.indexOf(i)
        }(e, "name", t))).forEach(function(e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var t = e.function || e.fn;
            e.enabled && a(t) && (n.offsets.popper = E(n.offsets.popper), n.offsets.reference = E(n.offsets.reference), n = t(n, e))
        }), n
    }

    function M(e, n) {
        return e.some(function(e) {
            var t = e.name;
            return e.enabled && t === n
        })
    }

    function z(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
            var r = t[i],
                s = r ? "" + r + n : e;
            if (void 0 !== document.body.style[s]) return s
        }
        return null
    }

    function I(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function H(e, t, n, i) {
        n.updateBound = i, I(e).addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var r = f(e);
        return function e(t, n, i, r) {
            var s = "BODY" === t.nodeName,
                o = s ? t.ownerDocument.defaultView : t;
            o.addEventListener(n, i, {
                passive: !0
            }), s || e(f(o.parentNode), n, i, r), r.push(o)
        }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
    }

    function q() {
        var e, t;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, I(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
            e.removeEventListener("scroll", t.updateBound)
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
    }

    function R(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function $(n, i) {
        Object.keys(i).forEach(function(e) {
            var t = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && R(i[e]) && (t = "px"), n.style[e] = i[e] + t
        })
    }
    var B = e && /Firefox/i.test(navigator.userAgent);

    function F(e, t, n) {
        var i = j(e, function(e) {
                return e.name === t
            }),
            r = !!i && e.some(function(e) {
                return e.name === n && e.enabled && e.order < i.order
            });
        if (!r) {
            var s = "`" + t + "`",
                o = "`" + n + "`";
            console.warn(o + " modifier is required by " + s + " modifier in order to work, be sure to include it before " + s + "!")
        }
        return r
    }
    var W = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        V = W.slice(3);

    function Y(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            n = V.indexOf(e),
            i = V.slice(n + 1).concat(V.slice(0, n));
        return t ? i.reverse() : i
    }
    var X = {
        FLIP: "flip",
        CLOCKWISE: "clockwise",
        COUNTERCLOCKWISE: "counterclockwise"
    };

    function G(e, r, s, t) {
        var o = [0, 0],
            a = -1 !== ["right", "left"].indexOf(t),
            n = e.split(/(\+|\-)/).map(function(e) {
                return e.trim()
            }),
            i = n.indexOf(j(n, function(e) {
                return -1 !== e.search(/,|\s/)
            }));
        n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            c = -1 !== i ? [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))] : [n];
        return (c = c.map(function(e, t) {
            var n = (1 === t ? !a : a) ? "height" : "width",
                i = !1;
            return e.reduce(function(e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, i = !0, e) : i ? (e[e.length - 1] += t, i = !1, e) : e.concat(t)
            }, []).map(function(e) {
                return function(e, t, n, i) {
                    var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        s = +r[1],
                        o = r[2];
                    if (!s) return e;
                    if (0 === o.indexOf("%")) {
                        var a = void 0;
                        switch (o) {
                            case "%p":
                                a = n;
                                break;
                            case "%":
                            case "%r":
                            default:
                                a = i
                        }
                        return E(a)[t] / 100 * s
                    }
                    if ("vh" === o || "vw" === o) return ("vh" === o ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * s;
                    return s
                }(e, n, r, s)
            })
        })).forEach(function(n, i) {
            n.forEach(function(e, t) {
                R(e) && (o[i] += e * ("-" === n[t - 1] ? -1 : 1))
            })
        }), o
    }
    var U = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function(e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            i = t.split("-")[1];
                        if (i) {
                            var r = e.offsets,
                                s = r.reference,
                                o = r.popper,
                                a = -1 !== ["bottom", "top"].indexOf(n),
                                l = a ? "left" : "top",
                                c = a ? "width" : "height",
                                u = {
                                    start: x({}, l, s[l]),
                                    end: x({}, l, s[l] + s[c] - o[c])
                                };
                            e.offsets.popper = L({}, o, u[i])
                        }
                        return e
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function(e, t) {
                        var n = t.offset,
                            i = e.placement,
                            r = e.offsets,
                            s = r.popper,
                            o = r.reference,
                            a = i.split("-")[0],
                            l = void 0;
                        return l = R(+n) ? [+n, 0] : G(n, s, o, a), "left" === a ? (s.top += l[0], s.left -= l[1]) : "right" === a ? (s.top += l[0], s.left += l[1]) : "top" === a ? (s.left += l[0], s.top -= l[1]) : "bottom" === a && (s.left += l[0], s.top += l[1]), e.popper = s, e
                    },
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function(e, i) {
                        var t = i.boundariesElement || P(e.instance.popper);
                        e.instance.reference === t && (t = P(t));
                        var n = z("transform"),
                            r = e.instance.popper.style,
                            s = r.top,
                            o = r.left,
                            a = r[n];
                        r.top = "", r.left = "", r[n] = "";
                        var l = S(e.instance.popper, e.instance.reference, i.padding, t, e.positionFixed);
                        r.top = s, r.left = o, r[n] = a, i.boundaries = l;
                        var c = i.priority,
                            u = e.offsets.popper,
                            d = {
                                primary: function(e) {
                                    var t = u[e];
                                    return u[e] < l[e] && !i.escapeWithReference && (t = Math.max(u[e], l[e])), x({}, e, t)
                                },
                                secondary: function(e) {
                                    var t = "right" === e ? "left" : "top",
                                        n = u[t];
                                    return u[e] > l[e] && !i.escapeWithReference && (n = Math.min(u[t], l[e] - ("right" === e ? u.width : u.height))), x({}, t, n)
                                }
                            };
                        return c.forEach(function(e) {
                            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                            u = L({}, u, d[t](e))
                        }), e.offsets.popper = u, e
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function(e) {
                        var t = e.offsets,
                            n = t.popper,
                            i = t.reference,
                            r = e.placement.split("-")[0],
                            s = Math.floor,
                            o = -1 !== ["top", "bottom"].indexOf(r),
                            a = o ? "right" : "bottom",
                            l = o ? "left" : "top",
                            c = o ? "width" : "height";
                        return n[a] < s(i[l]) && (e.offsets.popper[l] = s(i[l]) - n[c]), n[l] > s(i[a]) && (e.offsets.popper[l] = s(i[a])), e
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function(e, t) {
                        var n;
                        if (!F(e.instance.modifiers, "arrow", "keepTogether")) return e;
                        var i = t.element;
                        if ("string" == typeof i) {
                            if (!(i = e.instance.popper.querySelector(i))) return e
                        } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                        var r = e.placement.split("-")[0],
                            s = e.offsets,
                            o = s.popper,
                            a = s.reference,
                            l = -1 !== ["left", "right"].indexOf(r),
                            c = l ? "height" : "width",
                            u = l ? "Top" : "Left",
                            d = u.toLowerCase(),
                            h = l ? "left" : "top",
                            p = l ? "bottom" : "right",
                            f = k(i)[c];
                        a[p] - f < o[d] && (e.offsets.popper[d] -= o[d] - (a[p] - f)), a[d] + f > o[p] && (e.offsets.popper[d] += a[d] + f - o[p]), e.offsets.popper = E(e.offsets.popper);
                        var m = a[d] + a[c] / 2 - f / 2,
                            v = w(e.instance.popper),
                            g = parseFloat(v["margin" + u], 10),
                            y = parseFloat(v["border" + u + "Width"], 10),
                            b = m - e.offsets.popper[d] - g - y;
                        return b = Math.max(Math.min(o[c] - f, b), 0), e.arrowElement = i, e.offsets.arrow = (x(n = {}, d, Math.round(b)), x(n, h, ""), n), e
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function(f, m) {
                        if (M(f.instance.modifiers, "inner")) return f;
                        if (f.flipped && f.placement === f.originalPlacement) return f;
                        var v = S(f.instance.popper, f.instance.reference, m.padding, m.boundariesElement, f.positionFixed),
                            g = f.placement.split("-")[0],
                            y = A(g),
                            b = f.placement.split("-")[1] || "",
                            w = [];
                        switch (m.behavior) {
                            case X.FLIP:
                                w = [g, y];
                                break;
                            case X.CLOCKWISE:
                                w = Y(g);
                                break;
                            case X.COUNTERCLOCKWISE:
                                w = Y(g, !0);
                                break;
                            default:
                                w = m.behavior
                        }
                        return w.forEach(function(e, t) {
                            if (g !== e || w.length === t + 1) return f;
                            g = f.placement.split("-")[0], y = A(g);
                            var n, i = f.offsets.popper,
                                r = f.offsets.reference,
                                s = Math.floor,
                                o = "left" === g && s(i.right) > s(r.left) || "right" === g && s(i.left) < s(r.right) || "top" === g && s(i.bottom) > s(r.top) || "bottom" === g && s(i.top) < s(r.bottom),
                                a = s(i.left) < s(v.left),
                                l = s(i.right) > s(v.right),
                                c = s(i.top) < s(v.top),
                                u = s(i.bottom) > s(v.bottom),
                                d = "left" === g && a || "right" === g && l || "top" === g && c || "bottom" === g && u,
                                h = -1 !== ["top", "bottom"].indexOf(g),
                                p = !!m.flipVariations && (h && "start" === b && a || h && "end" === b && l || !h && "start" === b && c || !h && "end" === b && u);
                            (o || d || p) && (f.flipped = !0, (o || d) && (g = w[t + 1]), p && (b = "end" === (n = b) ? "start" : "start" === n ? "end" : n), f.placement = g + (b ? "-" + b : ""), f.offsets.popper = L({}, f.offsets.popper, D(f.instance.popper, f.offsets.reference, f.placement)), f = O(f.instance.modifiers, f, "flip"))
                        }), f
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport"
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function(e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            i = e.offsets,
                            r = i.popper,
                            s = i.reference,
                            o = -1 !== ["left", "right"].indexOf(n),
                            a = -1 === ["top", "left"].indexOf(n);
                        return r[o ? "left" : "top"] = s[n] - (a ? r[o ? "width" : "height"] : 0), e.placement = A(t), e.offsets.popper = E(r), e
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function(e) {
                        if (!F(e.instance.modifiers, "hide", "preventOverflow")) return e;
                        var t = e.offsets.reference,
                            n = j(e.instance.modifiers, function(e) {
                                return "preventOverflow" === e.name
                            }).boundaries;
                        if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                            if (!0 === e.hide) return e;
                            e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === e.hide) return e;
                            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                        }
                        return e
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function(e, t) {
                        var n = t.x,
                            i = t.y,
                            r = e.offsets.popper,
                            s = j(e.instance.modifiers, function(e) {
                                return "applyStyle" === e.name
                            }).gpuAcceleration;
                        void 0 !== s && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var o, a, l, c, u, d, h, p, f, m, v, g, y, b, w = void 0 !== s ? s : t.gpuAcceleration,
                            x = P(e.instance.popper),
                            E = N(x),
                            T = {
                                position: r.position
                            },
                            S = (o = e, a = window.devicePixelRatio < 2 || !B, l = o.offsets, c = l.popper, u = l.reference, d = Math.round, h = Math.floor, p = function(e) {
                                return e
                            }, f = d(u.width), m = d(c.width), v = -1 !== ["left", "right"].indexOf(o.placement), g = -1 !== o.placement.indexOf("-"), b = a ? d : p, {
                                left: (y = a ? v || g || f % 2 == m % 2 ? d : h : p)(f % 2 == 1 && m % 2 == 1 && !g && a ? c.left - 1 : c.left),
                                top: b(c.top),
                                bottom: b(c.bottom),
                                right: y(c.right)
                            }),
                            C = "bottom" === n ? "top" : "bottom",
                            _ = "right" === i ? "left" : "right",
                            k = z("transform"),
                            A = void 0,
                            D = void 0;
                        if (D = "bottom" === C ? "HTML" === x.nodeName ? -x.clientHeight + S.bottom : -E.height + S.bottom : S.top, A = "right" === _ ? "HTML" === x.nodeName ? -x.clientWidth + S.right : -E.width + S.right : S.left, w && k) T[k] = "translate3d(" + A + "px, " + D + "px, 0)", T[C] = 0, T[_] = 0, T.willChange = "transform";
                        else {
                            var O = "bottom" === C ? -1 : 1,
                                M = "right" === _ ? -1 : 1;
                            T[C] = D * O, T[_] = A * M, T.willChange = C + ", " + _
                        }
                        var I = {
                            "x-placement": e.placement
                        };
                        return e.attributes = L({}, I, e.attributes), e.styles = L({}, T, e.styles), e.arrowStyles = L({}, e.offsets.arrow, e.arrowStyles), e
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function(e) {
                        var t, n;
                        return $(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function(e) {
                            !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                        }), e.arrowElement && Object.keys(e.arrowStyles).length && $(e.arrowElement, e.arrowStyles), e
                    },
                    onLoad: function(e, t, n, i, r) {
                        var s = _(r, t, e, n.positionFixed),
                            o = C(n.placement, s, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return t.setAttribute("x-placement", o), $(t, {
                            position: n.positionFixed ? "fixed" : "absolute"
                        }), n
                    },
                    gpuAcceleration: void 0
                }
            }
        },
        Q = function() {
            function s(e, t) {
                var n = this,
                    i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                c(this, s), this.scheduleUpdate = function() {
                    return requestAnimationFrame(n.update)
                }, this.update = o(this.update.bind(this)), this.options = L({}, s.Defaults, i), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = e && e.jquery ? e[0] : e, this.popper = t && t.jquery ? t[0] : t, this.options.modifiers = {}, Object.keys(L({}, s.Defaults.modifiers, i.modifiers)).forEach(function(e) {
                    n.options.modifiers[e] = L({}, s.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                    return L({
                        name: e
                    }, n.options.modifiers[e])
                }).sort(function(e, t) {
                    return e.order - t.order
                }), this.modifiers.forEach(function(e) {
                    e.enabled && a(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state)
                }), this.update();
                var r = this.options.eventsEnabled;
                r && this.enableEventListeners(), this.state.eventsEnabled = r
            }
            return h(s, [{
                key: "update",
                value: function() {
                    return function() {
                        if (!this.state.isDestroyed) {
                            var e = {
                                instance: this,
                                styles: {},
                                arrowStyles: {},
                                attributes: {},
                                flipped: !1,
                                offsets: {}
                            };
                            e.offsets.reference = _(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = C(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = D(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = O(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                        }
                    }.call(this)
                }
            }, {
                key: "destroy",
                value: function() {
                    return function() {
                        return this.state.isDestroyed = !0, M(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[z("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                    }.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function() {
                    return function() {
                        this.state.eventsEnabled || (this.state = H(this.reference, this.options, this.state, this.scheduleUpdate))
                    }.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function() {
                    return q.call(this)
                }
            }]), s
        }();
    return Q.Utils = ("undefined" != typeof window ? window : global).PopperUtils, Q.placements = W, Q.Defaults = U, Q
}),
function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(T, e) {
    "use strict";
    var t = [],
        S = T.document,
        i = Object.getPrototypeOf,
        a = t.slice,
        m = t.concat,
        l = t.push,
        r = t.indexOf,
        n = {},
        s = n.toString,
        v = n.hasOwnProperty,
        o = v.toString,
        c = o.call(Object),
        g = {},
        y = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        b = function(e) {
            return null != e && e === e.window
        },
        u = {
            type: !0,
            src: !0,
            noModule: !0
        };

    function w(e, t, n) {
        var i, r = (t = t || S).createElement("script");
        if (r.text = e, n)
            for (i in u) n[i] && (r[i] = n[i]);
        t.head.appendChild(r).parentNode.removeChild(r)
    }

    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[s.call(e)] || "object" : typeof e
    }
    var C = function(e, t) {
            return new C.fn.init(e, t)
        },
        d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function h(e) {
        var t = !!e && "length" in e && e.length,
            n = x(e);
        return !y(e) && !b(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    C.fn = C.prototype = {
        jquery: "3.3.1",
        constructor: C,
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(e) {
            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = C.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return C.each(this, e)
        },
        map: function(n) {
            return this.pushStack(C.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: l,
        sort: t.sort,
        splice: t.splice
    }, C.extend = C.fn.extend = function() {
        var e, t, n, i, r, s, o = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof o && (c = o, o = arguments[a] || {}, a++), "object" == typeof o || y(o) || (o = {}), a === l && (o = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = o[t], o !== (i = e[t]) && (c && i && (C.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, s = n && Array.isArray(n) ? n : []) : s = n && C.isPlainObject(n) ? n : {}, o[t] = C.extend(c, s, i)) : void 0 !== i && (o[t] = i));
        return o
    }, C.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== s.call(e)) && (!(t = i(e)) || "function" == typeof(n = v.call(t, "constructor") && t.constructor) && o.call(n) === c)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e) {
            w(e)
        },
        each: function(e, t) {
            var n, i = 0;
            if (h(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(d, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (h(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : r.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, s = e.length, o = !n; r < s; r++) !t(e[r], r) !== o && i.push(e[r]);
            return i
        },
        map: function(e, t, n) {
            var i, r, s = 0,
                o = [];
            if (h(e))
                for (i = e.length; s < i; s++) null != (r = t(e[s], s, n)) && o.push(r);
            else
                for (s in e) null != (r = t(e[s], s, n)) && o.push(r);
            return m.apply([], o)
        },
        guid: 1,
        support: g
    }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = t[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var p = function(n) {
        var e, p, w, s, r, f, d, m, x, l, c, E, T, o, S, v, a, u, g, C = "sizzle" + 1 * new Date,
            y = n.document,
            _ = 0,
            i = 0,
            h = oe(),
            b = oe(),
            k = oe(),
            A = function(e, t) {
                return e === t && (c = !0), 0
            },
            D = {}.hasOwnProperty,
            t = [],
            O = t.pop,
            M = t.push,
            I = t.push,
            P = t.slice,
            L = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            N = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            j = "[\\x20\\t\\r\\n\\f]",
            z = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            H = "\\[" + j + "*(" + z + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + z + "))|)" + j + "*\\]",
            q = ":(" + z + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
            R = new RegExp(j + "+", "g"),
            $ = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g"),
            B = new RegExp("^" + j + "*," + j + "*"),
            F = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
            W = new RegExp("=" + j + "*([^\\]'\"]*?)" + j + "*\\]", "g"),
            V = new RegExp(q),
            Y = new RegExp("^" + z + "$"),
            X = {
                ID: new RegExp("^#(" + z + ")"),
                CLASS: new RegExp("^\\.(" + z + ")"),
                TAG: new RegExp("^(" + z + "|[*])"),
                ATTR: new RegExp("^" + H),
                PSEUDO: new RegExp("^" + q),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + N + ")$", "i"),
                needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i")
            },
            G = /^(?:input|select|textarea|button)$/i,
            U = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Z = /[+~]/,
            J = new RegExp("\\\\([\\da-f]{1,6}" + j + "?|(" + j + ")|.)", "ig"),
            ee = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            ie = function() {
                E()
            },
            re = ye(function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            I.apply(t = P.call(y.childNodes), y.childNodes), t[y.childNodes.length].nodeType
        } catch (e) {
            I = {
                apply: t.length ? function(e, t) {
                    M.apply(e, P.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function se(e, t, n, i) {
            var r, s, o, a, l, c, u, d = t && t.ownerDocument,
                h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!i && ((t ? t.ownerDocument || t : y) !== T && E(t), t = t || T, S)) {
                if (11 !== h && (l = K.exec(e)))
                    if (r = l[1]) {
                        if (9 === h) {
                            if (!(o = t.getElementById(r))) return n;
                            if (o.id === r) return n.push(o), n
                        } else if (d && (o = d.getElementById(r)) && g(t, o) && o.id === r) return n.push(o), n
                    } else {
                        if (l[2]) return I.apply(n, t.getElementsByTagName(e)), n;
                        if ((r = l[3]) && p.getElementsByClassName && t.getElementsByClassName) return I.apply(n, t.getElementsByClassName(r)), n
                    }
                if (p.qsa && !k[e + " "] && (!v || !v.test(e))) {
                    if (1 !== h) d = t, u = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(te, ne) : t.setAttribute("id", a = C), s = (c = f(e)).length; s--;) c[s] = "#" + a + " " + ge(c[s]);
                        u = c.join(","), d = Z.test(e) && me(t.parentNode) || t
                    }
                    if (u) try {
                        return I.apply(n, d.querySelectorAll(u)), n
                    } catch (e) {} finally {
                        a === C && t.removeAttribute("id")
                    }
                }
            }
            return m(e.replace($, "$1"), t, n, i)
        }

        function oe() {
            var i = [];
            return function e(t, n) {
                return i.push(t + " ") > w.cacheLength && delete e[i.shift()], e[t + " "] = n
            }
        }

        function ae(e) {
            return e[C] = !0, e
        }

        function le(e) {
            var t = T.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ce(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) w.attrHandle[n[i]] = t
        }

        function ue(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function pe(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && re(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function fe(o) {
            return ae(function(s) {
                return s = +s, ae(function(e, t) {
                    for (var n, i = o([], e.length, s), r = i.length; r--;) e[n = i[r]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function me(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in p = se.support = {}, r = se.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, E = se.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : y;
                return i !== T && 9 === i.nodeType && i.documentElement && (o = (T = i).documentElement, S = !r(T), y !== T && (n = T.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ie, !1) : n.attachEvent && n.attachEvent("onunload", ie)), p.attributes = le(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), p.getElementsByTagName = le(function(e) {
                    return e.appendChild(T.createComment("")), !e.getElementsByTagName("*").length
                }), p.getElementsByClassName = Q.test(T.getElementsByClassName), p.getById = le(function(e) {
                    return o.appendChild(e).id = C, !T.getElementsByName || !T.getElementsByName(C).length
                }), p.getById ? (w.filter.ID = function(e) {
                    var t = e.replace(J, ee);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, w.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && S) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (w.filter.ID = function(e) {
                    var n = e.replace(J, ee);
                    return function(e) {
                        var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, w.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && S) {
                        var n, i, r, s = t.getElementById(e);
                        if (s) {
                            if ((n = s.getAttributeNode("id")) && n.value === e) return [s];
                            for (r = t.getElementsByName(e), i = 0; s = r[i++];)
                                if ((n = s.getAttributeNode("id")) && n.value === e) return [s]
                        }
                        return []
                    }
                }), w.find.TAG = p.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        r = 0,
                        s = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = s[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return s
                }, w.find.CLASS = p.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && S) return t.getElementsByClassName(e)
                }, a = [], v = [], (p.qsa = Q.test(T.querySelectorAll)) && (le(function(e) {
                    o.appendChild(e).innerHTML = "<a id='" + C + "'></a><select id='" + C + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + j + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + j + "*(?:value|" + N + ")"), e.querySelectorAll("[id~=" + C + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + C + "+*").length || v.push(".#.+[+~]")
                }), le(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = T.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + j + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), o.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (p.matchesSelector = Q.test(u = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && le(function(e) {
                    p.disconnectedMatch = u.call(e, "*"), u.call(e, "[s!='']:x"), a.push("!=", q)
                }), v = v.length && new RegExp(v.join("|")), a = a.length && new RegExp(a.join("|")), t = Q.test(o.compareDocumentPosition), g = t || Q.test(o.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, A = t ? function(e, t) {
                    if (e === t) return c = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e === T || e.ownerDocument === y && g(y, e) ? -1 : t === T || t.ownerDocument === y && g(y, t) ? 1 : l ? L(l, e) - L(l, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return c = !0, 0;
                    var n, i = 0,
                        r = e.parentNode,
                        s = t.parentNode,
                        o = [e],
                        a = [t];
                    if (!r || !s) return e === T ? -1 : t === T ? 1 : r ? -1 : s ? 1 : l ? L(l, e) - L(l, t) : 0;
                    if (r === s) return ue(e, t);
                    for (n = e; n = n.parentNode;) o.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; o[i] === a[i];) i++;
                    return i ? ue(o[i], a[i]) : o[i] === y ? -1 : a[i] === y ? 1 : 0
                }), T
            }, se.matches = function(e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== T && E(e), t = t.replace(W, "='$1']"), p.matchesSelector && S && !k[t + " "] && (!a || !a.test(t)) && (!v || !v.test(t))) try {
                    var n = u.call(e, t);
                    if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {}
                return 0 < se(t, T, null, [e]).length
            }, se.contains = function(e, t) {
                return (e.ownerDocument || e) !== T && E(e), g(e, t)
            }, se.attr = function(e, t) {
                (e.ownerDocument || e) !== T && E(e);
                var n = w.attrHandle[t.toLowerCase()],
                    i = n && D.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !S) : void 0;
                return void 0 !== i ? i : p.attributes || !S ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, se.escape = function(e) {
                return (e + "").replace(te, ne)
            }, se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    r = 0;
                if (c = !p.detectDuplicates, l = !p.sortStable && e.slice(0), e.sort(A), c) {
                    for (; t = e[r++];) t === e[r] && (i = n.push(r));
                    for (; i--;) e.splice(n[i], 1)
                }
                return l = null, e
            }, s = se.getText = function(e) {
                var t, n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += s(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[i++];) n += s(t);
                return n
            }, (w = se.selectors = {
                cacheLength: 50,
                createPseudo: ae,
                match: X,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(J, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(J, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = f(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(J, ee).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = h[e + " "];
                        return t || (t = new RegExp("(^|" + j + ")" + e + "(" + j + "|$)")) && h(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, i, r) {
                        return function(e) {
                            var t = se.attr(e, n);
                            return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t.replace(R, " ") + " ").indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-"))
                        }
                    },
                    CHILD: function(f, e, t, m, v) {
                        var g = "nth" !== f.slice(0, 3),
                            y = "last" !== f.slice(-4),
                            b = "of-type" === e;
                        return 1 === m && 0 === v ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var i, r, s, o, a, l, c = g !== y ? "nextSibling" : "previousSibling",
                                u = e.parentNode,
                                d = b && e.nodeName.toLowerCase(),
                                h = !n && !b,
                                p = !1;
                            if (u) {
                                if (g) {
                                    for (; c;) {
                                        for (o = e; o = o[c];)
                                            if (b ? o.nodeName.toLowerCase() === d : 1 === o.nodeType) return !1;
                                        l = c = "only" === f && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [y ? u.firstChild : u.lastChild], y && h) {
                                    for (p = (a = (i = (r = (s = (o = u)[C] || (o[C] = {}))[o.uniqueID] || (s[o.uniqueID] = {}))[f] || [])[0] === _ && i[1]) && i[2], o = a && u.childNodes[a]; o = ++a && o && o[c] || (p = a = 0) || l.pop();)
                                        if (1 === o.nodeType && ++p && o === e) {
                                            r[f] = [_, a, p];
                                            break
                                        }
                                } else if (h && (p = a = (i = (r = (s = (o = e)[C] || (o[C] = {}))[o.uniqueID] || (s[o.uniqueID] = {}))[f] || [])[0] === _ && i[1]), !1 === p)
                                    for (;
                                        (o = ++a && o && o[c] || (p = a = 0) || l.pop()) && ((b ? o.nodeName.toLowerCase() !== d : 1 !== o.nodeType) || !++p || (h && ((r = (s = o[C] || (o[C] = {}))[o.uniqueID] || (s[o.uniqueID] = {}))[f] = [_, p]), o !== e)););
                                return (p -= v) === m || p % m == 0 && 0 <= p / m
                            }
                        }
                    },
                    PSEUDO: function(e, s) {
                        var t, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return o[C] ? o(s) : 1 < o.length ? (t = [e, e, "", s], w.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, t) {
                            for (var n, i = o(e, s), r = i.length; r--;) e[n = L(e, i[r])] = !(t[n] = i[r])
                        }) : function(e) {
                            return o(e, 0, t)
                        }) : o
                    }
                },
                pseudos: {
                    not: ae(function(e) {
                        var i = [],
                            r = [],
                            a = d(e.replace($, "$1"));
                        return a[C] ? ae(function(e, t, n, i) {
                            for (var r, s = a(e, null, i, []), o = e.length; o--;)(r = s[o]) && (e[o] = !(t[o] = r))
                        }) : function(e, t, n) {
                            return i[0] = e, a(i, null, n, r), i[0] = null, !r.pop()
                        }
                    }),
                    has: ae(function(t) {
                        return function(e) {
                            return 0 < se(t, e).length
                        }
                    }),
                    contains: ae(function(t) {
                        return t = t.replace(J, ee),
                            function(e) {
                                return -1 < (e.textContent || e.innerText || s(e)).indexOf(t)
                            }
                    }),
                    lang: ae(function(n) {
                        return Y.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(J, ee).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = S ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === o
                    },
                    focus: function(e) {
                        return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: pe(!1),
                    disabled: pe(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !w.pseudos.empty(e)
                    },
                    header: function(e) {
                        return U.test(e.nodeName)
                    },
                    input: function(e) {
                        return G.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: fe(function() {
                        return [0]
                    }),
                    last: fe(function(e, t) {
                        return [t - 1]
                    }),
                    eq: fe(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: fe(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: fe(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: fe(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
                        return e
                    }),
                    gt: fe(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }).pseudos.nth = w.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[e] = de(e);
        for (e in {
                submit: !0,
                reset: !0
            }) w.pseudos[e] = he(e);

        function ve() {}

        function ge(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function ye(a, e, t) {
            var l = e.dir,
                c = e.next,
                u = c || l,
                d = t && "parentNode" === u,
                h = i++;
            return e.first ? function(e, t, n) {
                for (; e = e[l];)
                    if (1 === e.nodeType || d) return a(e, t, n);
                return !1
            } : function(e, t, n) {
                var i, r, s, o = [_, h];
                if (n) {
                    for (; e = e[l];)
                        if ((1 === e.nodeType || d) && a(e, t, n)) return !0
                } else
                    for (; e = e[l];)
                        if (1 === e.nodeType || d)
                            if (r = (s = e[C] || (e[C] = {}))[e.uniqueID] || (s[e.uniqueID] = {}), c && c === e.nodeName.toLowerCase()) e = e[l] || e;
                            else {
                                if ((i = r[u]) && i[0] === _ && i[1] === h) return o[2] = i[2];
                                if ((r[u] = o)[2] = a(e, t, n)) return !0
                            } return !1
            }
        }

        function be(r) {
            return 1 < r.length ? function(e, t, n) {
                for (var i = r.length; i--;)
                    if (!r[i](e, t, n)) return !1;
                return !0
            } : r[0]
        }

        function we(e, t, n, i, r) {
            for (var s, o = [], a = 0, l = e.length, c = null != t; a < l; a++)(s = e[a]) && (n && !n(s, i, r) || (o.push(s), c && t.push(a)));
            return o
        }

        function xe(p, f, m, v, g, e) {
            return v && !v[C] && (v = xe(v)), g && !g[C] && (g = xe(g, e)), ae(function(e, t, n, i) {
                var r, s, o, a = [],
                    l = [],
                    c = t.length,
                    u = e || function(e, t, n) {
                        for (var i = 0, r = t.length; i < r; i++) se(e, t[i], n);
                        return n
                    }(f || "*", n.nodeType ? [n] : n, []),
                    d = !p || !e && f ? u : we(u, a, p, n, i),
                    h = m ? g || (e ? p : c || v) ? [] : t : d;
                if (m && m(d, h, n, i), v)
                    for (r = we(h, l), v(r, [], n, i), s = r.length; s--;)(o = r[s]) && (h[l[s]] = !(d[l[s]] = o));
                if (e) {
                    if (g || p) {
                        if (g) {
                            for (r = [], s = h.length; s--;)(o = h[s]) && r.push(d[s] = o);
                            g(null, h = [], r, i)
                        }
                        for (s = h.length; s--;)(o = h[s]) && -1 < (r = g ? L(e, o) : a[s]) && (e[r] = !(t[r] = o))
                    }
                } else h = we(h === t ? h.splice(c, h.length) : h), g ? g(null, t, h, i) : I.apply(t, h)
            })
        }

        function Ee(e) {
            for (var r, t, n, i = e.length, s = w.relative[e[0].type], o = s || w.relative[" "], a = s ? 1 : 0, l = ye(function(e) {
                    return e === r
                }, o, !0), c = ye(function(e) {
                    return -1 < L(r, e)
                }, o, !0), u = [function(e, t, n) {
                    var i = !s && (n || t !== x) || ((r = t).nodeType ? l(e, t, n) : c(e, t, n));
                    return r = null, i
                }]; a < i; a++)
                if (t = w.relative[e[a].type]) u = [ye(be(u), t)];
                else {
                    if ((t = w.filter[e[a].type].apply(null, e[a].matches))[C]) {
                        for (n = ++a; n < i && !w.relative[e[n].type]; n++);
                        return xe(1 < a && be(u), 1 < a && ge(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace($, "$1"), t, a < n && Ee(e.slice(a, n)), n < i && Ee(e = e.slice(n)), n < i && ge(e))
                    }
                    u.push(t)
                }
            return be(u)
        }
        return ve.prototype = w.filters = w.pseudos, w.setFilters = new ve, f = se.tokenize = function(e, t) {
            var n, i, r, s, o, a, l, c = b[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (o = e, a = [], l = w.preFilter; o;) {
                for (s in n && !(i = B.exec(o)) || (i && (o = o.slice(i[0].length) || o), a.push(r = [])), n = !1, (i = F.exec(o)) && (n = i.shift(), r.push({
                        value: n,
                        type: i[0].replace($, " ")
                    }), o = o.slice(n.length)), w.filter) !(i = X[s].exec(o)) || l[s] && !(i = l[s](i)) || (n = i.shift(), r.push({
                    value: n,
                    type: s,
                    matches: i
                }), o = o.slice(n.length));
                if (!n) break
            }
            return t ? o.length : o ? se.error(e) : b(e, a).slice(0)
        }, d = se.compile = function(e, t) {
            var n, v, g, y, b, i, r = [],
                s = [],
                o = k[e + " "];
            if (!o) {
                for (t || (t = f(e)), n = t.length; n--;)(o = Ee(t[n]))[C] ? r.push(o) : s.push(o);
                (o = k(e, (v = s, y = 0 < (g = r).length, b = 0 < v.length, i = function(e, t, n, i, r) {
                    var s, o, a, l = 0,
                        c = "0",
                        u = e && [],
                        d = [],
                        h = x,
                        p = e || b && w.find.TAG("*", r),
                        f = _ += null == h ? 1 : Math.random() || .1,
                        m = p.length;
                    for (r && (x = t === T || t || r); c !== m && null != (s = p[c]); c++) {
                        if (b && s) {
                            for (o = 0, t || s.ownerDocument === T || (E(s), n = !S); a = v[o++];)
                                if (a(s, t || T, n)) {
                                    i.push(s);
                                    break
                                }
                            r && (_ = f)
                        }
                        y && ((s = !a && s) && l--, e && u.push(s))
                    }
                    if (l += c, y && c !== l) {
                        for (o = 0; a = g[o++];) a(u, d, t, n);
                        if (e) {
                            if (0 < l)
                                for (; c--;) u[c] || d[c] || (d[c] = O.call(i));
                            d = we(d)
                        }
                        I.apply(i, d), r && !e && 0 < d.length && 1 < l + g.length && se.uniqueSort(i)
                    }
                    return r && (_ = f, x = h), u
                }, y ? ae(i) : i))).selector = e
            }
            return o
        }, m = se.select = function(e, t, n, i) {
            var r, s, o, a, l, c = "function" == typeof e && e,
                u = !i && f(e = c.selector || e);
            if (n = n || [], 1 === u.length) {
                if (2 < (s = u[0] = u[0].slice(0)).length && "ID" === (o = s[0]).type && 9 === t.nodeType && S && w.relative[s[1].type]) {
                    if (!(t = (w.find.ID(o.matches[0].replace(J, ee), t) || [])[0])) return n;
                    c && (t = t.parentNode), e = e.slice(s.shift().value.length)
                }
                for (r = X.needsContext.test(e) ? 0 : s.length; r-- && (o = s[r], !w.relative[a = o.type]);)
                    if ((l = w.find[a]) && (i = l(o.matches[0].replace(J, ee), Z.test(s[0].type) && me(t.parentNode) || t))) {
                        if (s.splice(r, 1), !(e = i.length && ge(s))) return I.apply(n, i), n;
                        break
                    }
            }
            return (c || d(e, u))(i, t, !S, n, !t || Z.test(e) && me(t.parentNode) || t), n
        }, p.sortStable = C.split("").sort(A).join("") === C, p.detectDuplicates = !!c, E(), p.sortDetached = le(function(e) {
            return 1 & e.compareDocumentPosition(T.createElement("fieldset"))
        }), le(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ce("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), p.attributes && le(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ce("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), le(function(e) {
            return null == e.getAttribute("disabled")
        }) || ce(N, function(e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), se
    }(T);
    C.find = p, C.expr = p.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = p.uniqueSort, C.text = p.getText, C.isXMLDoc = p.isXML, C.contains = p.contains, C.escapeSelector = p.escape;
    var f = function(e, t, n) {
            for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && C(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        E = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        _ = C.expr.match.needsContext;

    function k(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function D(e, n, i) {
        return y(n) ? C.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== i
        }) : n.nodeType ? C.grep(e, function(e) {
            return e === n !== i
        }) : "string" != typeof n ? C.grep(e, function(e) {
            return -1 < r.call(n, e) !== i
        }) : C.filter(n, e, i)
    }
    C.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? C.find.matchesSelector(i, e) ? [i] : [] : C.find.matches(e, C.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, C.fn.extend({
        find: function(e) {
            var t, n, i = this.length,
                r = this;
            if ("string" != typeof e) return this.pushStack(C(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (C.contains(r[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) C.find(e, r[t], n);
            return 1 < i ? C.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(D(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(D(this, e || [], !0))
        },
        is: function(e) {
            return !!D(this, "string" == typeof e && _.test(e) ? C(e) : e || [], !1).length
        }
    });
    var O, M = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (C.fn.init = function(e, t, n) {
        var i, r;
        if (!e) return this;
        if (n = n || O, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : M.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : S, !0)), A.test(i[1]) && C.isPlainObject(t))
                    for (i in t) y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (r = S.getElementById(i[2])) && (this[0] = r, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this)
    }).prototype = C.fn, O = C(S);
    var I = /^(?:parents|prev(?:Until|All))/,
        P = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function L(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    C.fn.extend({
        has: function(e) {
            var t = C(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (C.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0,
                r = this.length,
                s = [],
                o = "string" != typeof e && C(e);
            if (!_.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (o ? -1 < o.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                            s.push(n);
                            break
                        }
            return this.pushStack(1 < s.length ? C.uniqueSort(s) : s)
        },
        index: function(e) {
            return e ? "string" == typeof e ? r.call(C(e), this[0]) : r.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), C.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return f(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return f(e, "parentNode", n)
        },
        next: function(e) {
            return L(e, "nextSibling")
        },
        prev: function(e) {
            return L(e, "previousSibling")
        },
        nextAll: function(e) {
            return f(e, "nextSibling")
        },
        prevAll: function(e) {
            return f(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return f(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return f(e, "previousSibling", n)
        },
        siblings: function(e) {
            return E((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return E(e.firstChild)
        },
        contents: function(e) {
            return k(e, "iframe") ? e.contentDocument : (k(e, "template") && (e = e.content || e), C.merge([], e.childNodes))
        }
    }, function(i, r) {
        C.fn[i] = function(e, t) {
            var n = C.map(this, r, e);
            return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = C.filter(t, n)), 1 < this.length && (P[i] || C.uniqueSort(n), I.test(i) && n.reverse()), this.pushStack(n)
        }
    });
    var N = /[^\x20\t\r\n\f]+/g;

    function j(e) {
        return e
    }

    function z(e) {
        throw e
    }

    function H(e, t, n, i) {
        var r;
        try {
            e && y(r = e.promise) ? r.call(e).done(t).fail(n) : e && y(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    C.Callbacks = function(i) {
        var e, n;
        i = "string" == typeof i ? (e = i, n = {}, C.each(e.match(N) || [], function(e, t) {
            n[t] = !0
        }), n) : C.extend({}, i);
        var r, t, s, o, a = [],
            l = [],
            c = -1,
            u = function() {
                for (o = o || i.once, s = r = !0; l.length; c = -1)
                    for (t = l.shift(); ++c < a.length;) !1 === a[c].apply(t[0], t[1]) && i.stopOnFalse && (c = a.length, t = !1);
                i.memory || (t = !1), r = !1, o && (a = t ? [] : "")
            },
            d = {
                add: function() {
                    return a && (t && !r && (c = a.length - 1, l.push(t)), function n(e) {
                        C.each(e, function(e, t) {
                            y(t) ? i.unique && d.has(t) || a.push(t) : t && t.length && "string" !== x(t) && n(t)
                        })
                    }(arguments), t && !r && u()), this
                },
                remove: function() {
                    return C.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = C.inArray(t, a, n));) a.splice(n, 1), n <= c && c--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < C.inArray(e, a) : 0 < a.length
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return o = l = [], a = t = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return o = l = [], t || r || (a = t = ""), this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(e, t) {
                    return o || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), r || u()), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!s
                }
            };
        return d
    }, C.extend({
        Deferred: function(e) {
            var s = [
                    ["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
                    ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                o = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return o.then(null, e)
                    },
                    pipe: function() {
                        var r = arguments;
                        return C.Deferred(function(i) {
                            C.each(s, function(e, t) {
                                var n = y(r[t[4]]) && r[t[4]];
                                a[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && y(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), r = null
                        }).promise()
                    },
                    then: function(t, n, i) {
                        var l = 0;

                        function c(r, s, o, a) {
                            return function() {
                                var n = this,
                                    i = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(r < l)) {
                                            if ((e = o.apply(n, i)) === s.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, y(t) ? a ? t.call(e, c(l, s, j, a), c(l, s, z, a)) : (l++, t.call(e, c(l, s, j, a), c(l, s, z, a), c(l, s, j, s.notifyWith))) : (o !== j && (n = void 0, i = [e]), (a || s.resolveWith)(n, i))
                                        }
                                    },
                                    t = a ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            C.Deferred.exceptionHook && C.Deferred.exceptionHook(e, t.stackTrace), l <= r + 1 && (o !== z && (n = void 0, i = [e]), s.rejectWith(n, i))
                                        }
                                    };
                                r ? t() : (C.Deferred.getStackHook && (t.stackTrace = C.Deferred.getStackHook()), T.setTimeout(t))
                            }
                        }
                        return C.Deferred(function(e) {
                            s[0][3].add(c(0, e, y(i) ? i : j, e.notifyWith)), s[1][3].add(c(0, e, y(t) ? t : j)), s[2][3].add(c(0, e, y(n) ? n : z))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? C.extend(e, o) : o
                    }
                },
                a = {};
            return C.each(s, function(e, t) {
                var n = t[2],
                    i = t[5];
                o[t[1]] = n.add, i && n.add(function() {
                    r = i
                }, s[3 - e][2].disable, s[3 - e][3].disable, s[0][2].lock, s[0][3].lock), n.add(t[3].fire), a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                }, a[t[0] + "With"] = n.fireWith
            }), o.promise(a), e && e.call(a, a), a
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                i = Array(t),
                r = a.call(arguments),
                s = C.Deferred(),
                o = function(t) {
                    return function(e) {
                        i[t] = this, r[t] = 1 < arguments.length ? a.call(arguments) : e, --n || s.resolveWith(i, r)
                    }
                };
            if (n <= 1 && (H(e, s.done(o(t)).resolve, s.reject, !n), "pending" === s.state() || y(r[t] && r[t].then))) return s.then();
            for (; t--;) H(r[t], o(t), s.reject);
            return s.promise()
        }
    });
    var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    C.Deferred.exceptionHook = function(e, t) {
        T.console && T.console.warn && e && q.test(e.name) && T.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, C.readyException = function(e) {
        T.setTimeout(function() {
            throw e
        })
    };
    var R = C.Deferred();

    function $() {
        S.removeEventListener("DOMContentLoaded", $), T.removeEventListener("load", $), C.ready()
    }
    C.fn.ready = function(e) {
        return R.then(e).catch(function(e) {
            C.readyException(e)
        }), this
    }, C.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0) !== e && 0 < --C.readyWait || R.resolveWith(S, [C])
        }
    }), C.ready.then = R.then, "complete" === S.readyState || "loading" !== S.readyState && !S.documentElement.doScroll ? T.setTimeout(C.ready) : (S.addEventListener("DOMContentLoaded", $), T.addEventListener("load", $));
    var B = function(e, t, n, i, r, s, o) {
            var a = 0,
                l = e.length,
                c = null == n;
            if ("object" === x(n))
                for (a in r = !0, n) B(e, t, a, n[a], !0, s, o);
            else if (void 0 !== i && (r = !0, y(i) || (o = !0), c && (o ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                    return c.call(C(e), n)
                })), t))
                for (; a < l; a++) t(e[a], n, o ? i : i.call(e[a], a, t(e[a], n)));
            return r ? e : c ? t.call(e) : l ? t(e[0], n) : s
        },
        F = /^-ms-/,
        W = /-([a-z])/g;

    function V(e, t) {
        return t.toUpperCase()
    }

    function Y(e) {
        return e.replace(F, "ms-").replace(W, V)
    }
    var X = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function G() {
        this.expando = C.expando + G.uid++
    }
    G.uid = 1, G.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[Y(t)] = n;
            else
                for (i in t) r[Y(i)] = t[i];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t)) in i ? [t] : t.match(N) || []).length;
                    for (; n--;) delete i[t[n]]
                }(void 0 === t || C.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !C.isEmptyObject(t)
        }
    };
    var U = new G,
        Q = new G,
        K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function J(e, t, n) {
        var i, r;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : K.test(r) ? JSON.parse(r) : r)
                } catch (e) {}
                Q.set(e, t, n)
            } else n = void 0;
        return n
    }
    C.extend({
        hasData: function(e) {
            return Q.hasData(e) || U.hasData(e)
        },
        data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, n) {
            return U.access(e, t, n)
        },
        _removeData: function(e, t) {
            U.remove(e, t)
        }
    }), C.fn.extend({
        data: function(n, e) {
            var t, i, r, s = this[0],
                o = s && s.attributes;
            if (void 0 === n) {
                if (this.length && (r = Q.get(s), 1 === s.nodeType && !U.get(s, "hasDataAttrs"))) {
                    for (t = o.length; t--;) o[t] && 0 === (i = o[t].name).indexOf("data-") && (i = Y(i.slice(5)), J(s, i, r[i]));
                    U.set(s, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof n ? this.each(function() {
                Q.set(this, n)
            }) : B(this, function(e) {
                var t;
                if (s && void 0 === e) return void 0 !== (t = Q.get(s, n)) ? t : void 0 !== (t = J(s, n)) ? t : void 0;
                this.each(function() {
                    Q.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Q.remove(this, e)
            })
        }
    }), C.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = U.get(e, t), n && (!i || Array.isArray(n) ? i = U.access(e, t, C.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = C.queue(e, t),
                i = n.length,
                r = n.shift(),
                s = C._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete s.stop, r.call(e, function() {
                C.dequeue(e, t)
            }, s)), !i && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return U.get(e, n) || U.access(e, n, {
                empty: C.Callbacks("once memory").add(function() {
                    U.remove(e, [t + "queue", n])
                })
            })
        }
    }), C.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? C.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = C.queue(this, t, n);
                C._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                C.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                r = C.Deferred(),
                s = this,
                o = this.length,
                a = function() {
                    --i || r.resolveWith(s, [s])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;)(n = U.get(s[o], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        ie = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && C.contains(e.ownerDocument, e) && "none" === C.css(e, "display")
        },
        re = function(e, t, n, i) {
            var r, s, o = {};
            for (s in t) o[s] = e.style[s], e.style[s] = t[s];
            for (s in r = n.apply(e, i || []), t) e.style[s] = o[s];
            return r
        };

    function se(e, t, n, i) {
        var r, s, o = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return C.css(e, t, "")
            },
            l = a(),
            c = n && n[3] || (C.cssNumber[t] ? "" : "px"),
            u = (C.cssNumber[t] || "px" !== c && +l) && te.exec(C.css(e, t));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; o--;) C.style(e, t, u + c), (1 - s) * (1 - (s = a() / l || .5)) <= 0 && (o = 0), u /= s;
            u *= 2, C.style(e, t, u + c), n = n || []
        }
        return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
    }
    var oe = {};

    function ae(e, t) {
        for (var n, i, r, s, o, a, l, c = [], u = 0, d = e.length; u < d; u++)(i = e[u]).style && (n = i.style.display, t ? ("none" === n && (c[u] = U.get(i, "display") || null, c[u] || (i.style.display = "")), "" === i.style.display && ie(i) && (c[u] = (l = o = s = void 0, o = (r = i).ownerDocument, a = r.nodeName, (l = oe[a]) || (s = o.body.appendChild(o.createElement(a)), l = C.css(s, "display"), s.parentNode.removeChild(s), "none" === l && (l = "block"), oe[a] = l)))) : "none" !== n && (c[u] = "none", U.set(i, "display", n)));
        for (u = 0; u < d; u++) null != c[u] && (e[u].style.display = c[u]);
        return e
    }
    C.fn.extend({
        show: function() {
            return ae(this, !0)
        },
        hide: function() {
            return ae(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ie(this) ? C(this).show() : C(this).hide()
            })
        }
    });
    var le = /^(?:checkbox|radio)$/i,
        ce = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ue = /^$|^module$|\/(?:java|ecma)script/i,
        de = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function he(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && k(e, t) ? C.merge([e], n) : n
    }

    function pe(e, t) {
        for (var n = 0, i = e.length; n < i; n++) U.set(e[n], "globalEval", !t || U.get(t[n], "globalEval"))
    }
    de.optgroup = de.option, de.tbody = de.tfoot = de.colgroup = de.caption = de.thead, de.th = de.td;
    var fe, me, ve = /<|&#?\w+;/;

    function ge(e, t, n, i, r) {
        for (var s, o, a, l, c, u, d = t.createDocumentFragment(), h = [], p = 0, f = e.length; p < f; p++)
            if ((s = e[p]) || 0 === s)
                if ("object" === x(s)) C.merge(h, s.nodeType ? [s] : s);
                else if (ve.test(s)) {
            for (o = o || d.appendChild(t.createElement("div")), a = (ce.exec(s) || ["", ""])[1].toLowerCase(), l = de[a] || de._default, o.innerHTML = l[1] + C.htmlPrefilter(s) + l[2], u = l[0]; u--;) o = o.lastChild;
            C.merge(h, o.childNodes), (o = d.firstChild).textContent = ""
        } else h.push(t.createTextNode(s));
        for (d.textContent = "", p = 0; s = h[p++];)
            if (i && -1 < C.inArray(s, i)) r && r.push(s);
            else if (c = C.contains(s.ownerDocument, s), o = he(d.appendChild(s), "script"), c && pe(o), n)
            for (u = 0; s = o[u++];) ue.test(s.type || "") && n.push(s);
        return d
    }
    fe = S.createDocumentFragment().appendChild(S.createElement("div")), (me = S.createElement("input")).setAttribute("type", "radio"), me.setAttribute("checked", "checked"), me.setAttribute("name", "t"), fe.appendChild(me), g.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked, fe.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue;
    var ye = S.documentElement,
        be = /^key/,
        we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        xe = /^([^.]*)(?:\.(.+)|)/;

    function Ee() {
        return !0
    }

    function Te() {
        return !1
    }

    function Se() {
        try {
            return S.activeElement
        } catch (e) {}
    }

    function Ce(e, t, n, i, r, s) {
        var o, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), t) Ce(e, a, n, i, t[a], s);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Te;
        else if (!r) return e;
        return 1 === s && (o = r, (r = function(e) {
            return C().off(e), o.apply(this, arguments)
        }).guid = o.guid || (o.guid = C.guid++)), e.each(function() {
            C.event.add(this, t, r, i, n)
        })
    }
    C.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var s, o, a, l, c, u, d, h, p, f, m, v = U.get(t);
            if (v)
                for (n.handler && (n = (s = n).handler, r = s.selector), r && C.find.matchesSelector(ye, r), n.guid || (n.guid = C.guid++), (l = v.events) || (l = v.events = {}), (o = v.handle) || (o = v.handle = function(e) {
                        return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0
                    }), c = (e = (e || "").match(N) || [""]).length; c--;) p = m = (a = xe.exec(e[c]) || [])[1], f = (a[2] || "").split(".").sort(), p && (d = C.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, d = C.event.special[p] || {}, u = C.extend({
                    type: p,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && C.expr.match.needsContext.test(r),
                    namespace: f.join(".")
                }, s), (h = l[p]) || ((h = l[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, i, f, o) || t.addEventListener && t.addEventListener(p, o)), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, u) : h.push(u), C.event.global[p] = !0)
        },
        remove: function(e, t, n, i, r) {
            var s, o, a, l, c, u, d, h, p, f, m, v = U.hasData(e) && U.get(e);
            if (v && (l = v.events)) {
                for (c = (t = (t || "").match(N) || [""]).length; c--;)
                    if (p = m = (a = xe.exec(t[c]) || [])[1], f = (a[2] || "").split(".").sort(), p) {
                        for (d = C.event.special[p] || {}, h = l[p = (i ? d.delegateType : d.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = h.length; s--;) u = h[s], !r && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(s, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(e, u));
                        o && !h.length && (d.teardown && !1 !== d.teardown.call(e, f, v.handle) || C.removeEvent(e, p, v.handle), delete l[p])
                    } else
                        for (p in l) C.event.remove(e, p + t[c], n, i, !0);
                C.isEmptyObject(l) && U.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, r, s, o, a = C.event.fix(e),
                l = new Array(arguments.length),
                c = (U.get(this, "events") || {})[a.type] || [],
                u = C.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                for (o = C.event.handlers.call(this, a, c), t = 0;
                    (r = o[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = r.elem, n = 0;
                        (s = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(s.namespace) || (a.handleObj = s, a.data = s.data, void 0 !== (i = ((C.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, s, o, a = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (s = [], o = {}, n = 0; n < l; n++) void 0 === o[r = (i = t[n]).selector + " "] && (o[r] = i.needsContext ? -1 < C(r, this).index(c) : C.find(r, this, null, [c]).length), o[r] && s.push(i);
                        s.length && a.push({
                            elem: c,
                            handlers: s
                        })
                    }
            return c = this, l < t.length && a.push({
                elem: c,
                handlers: t.slice(l)
            }), a
        },
        addProp: function(t, e) {
            Object.defineProperty(C.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: y(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[C.expando] ? e : new C.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== Se() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Se() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && k(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return k(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, C.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, C.Event = function(e, t) {
        if (!(this instanceof C.Event)) return new C.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0
    }, C.Event.prototype = {
        constructor: C.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, C.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, C.event.addProp), C.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, r) {
        C.event.special[e] = {
            delegateType: r,
            bindType: r,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    i = e.handleObj;
                return n && (n === this || C.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = r), t
            }
        }
    }), C.fn.extend({
        on: function(e, t, n, i) {
            return Ce(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return Ce(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, C(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function() {
                C.event.remove(this, e, n, t)
            })
        }
    });
    var _e = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        ke = /<script|<style|<link/i,
        Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Oe(e, t) {
        return k(e, "table") && k(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
    }

    function Me(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Ie(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Pe(e, t) {
        var n, i, r, s, o, a, l, c;
        if (1 === t.nodeType) {
            if (U.hasData(e) && (s = U.access(e), o = U.set(t, s), c = s.events))
                for (r in delete o.handle, o.events = {}, c)
                    for (n = 0, i = c[r].length; n < i; n++) C.event.add(t, r, c[r][n]);
            Q.hasData(e) && (a = Q.access(e), l = C.extend({}, a), Q.set(t, l))
        }
    }

    function Le(n, i, r, s) {
        i = m.apply([], i);
        var e, t, o, a, l, c, u = 0,
            d = n.length,
            h = d - 1,
            p = i[0],
            f = y(p);
        if (f || 1 < d && "string" == typeof p && !g.checkClone && Ae.test(p)) return n.each(function(e) {
            var t = n.eq(e);
            f && (i[0] = p.call(this, e, t.html())), Le(t, i, r, s)
        });
        if (d && (t = (e = ge(i, n[0].ownerDocument, !1, n, s)).firstChild, 1 === e.childNodes.length && (e = t), t || s)) {
            for (a = (o = C.map(he(e, "script"), Me)).length; u < d; u++) l = e, u !== h && (l = C.clone(l, !0, !0), a && C.merge(o, he(l, "script"))), r.call(n[u], l, u);
            if (a)
                for (c = o[o.length - 1].ownerDocument, C.map(o, Ie), u = 0; u < a; u++) l = o[u], ue.test(l.type || "") && !U.access(l, "globalEval") && C.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? C._evalUrl && C._evalUrl(l.src) : w(l.textContent.replace(De, ""), c, l))
        }
        return n
    }

    function Ne(e, t, n) {
        for (var i, r = t ? C.filter(t, e) : e, s = 0; null != (i = r[s]); s++) n || 1 !== i.nodeType || C.cleanData(he(i)), i.parentNode && (n && C.contains(i.ownerDocument, i) && pe(he(i, "script")), i.parentNode.removeChild(i));
        return e
    }
    C.extend({
        htmlPrefilter: function(e) {
            return e.replace(_e, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, r, s, o, a, l, c, u = e.cloneNode(!0),
                d = C.contains(e.ownerDocument, e);
            if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                for (o = he(u), i = 0, r = (s = he(e)).length; i < r; i++) a = s[i], l = o[i], void 0, "input" === (c = l.nodeName.toLowerCase()) && le.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (s = s || he(e), o = o || he(u), i = 0, r = s.length; i < r; i++) Pe(s[i], o[i]);
                else Pe(e, u);
            return 0 < (o = he(u, "script")).length && pe(o, !d && he(e, "script")), u
        },
        cleanData: function(e) {
            for (var t, n, i, r = C.event.special, s = 0; void 0 !== (n = e[s]); s++)
                if (X(n)) {
                    if (t = n[U.expando]) {
                        if (t.events)
                            for (i in t.events) r[i] ? C.event.remove(n, i) : C.removeEvent(n, i, t.handle);
                        n[U.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }), C.fn.extend({
        detach: function(e) {
            return Ne(this, e, !0)
        },
        remove: function(e) {
            return Ne(this, e)
        },
        text: function(e) {
            return B(this, function(e) {
                return void 0 === e ? C.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Le(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Le(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Oe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Le(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Le(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(he(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return C.clone(this, e, t)
            })
        },
        html: function(e) {
            return B(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !ke.test(e) && !de[(ce.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = C.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(he(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Le(this, arguments, function(e) {
                var t = this.parentNode;
                C.inArray(this, n) < 0 && (C.cleanData(he(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), C.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, o) {
        C.fn[e] = function(e) {
            for (var t, n = [], i = C(e), r = i.length - 1, s = 0; s <= r; s++) t = s === r ? this : this.clone(!0), C(i[s])[o](t), l.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var je = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        ze = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = T), t.getComputedStyle(e)
        },
        He = new RegExp(ne.join("|"), "i");

    function qe(e, t, n) {
        var i, r, s, o, a = e.style;
        return (n = n || ze(e)) && ("" !== (o = n.getPropertyValue(t) || n[t]) || C.contains(e.ownerDocument, e) || (o = C.style(e, t)), !g.pixelBoxStyles() && je.test(o) && He.test(t) && (i = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = n.width, a.width = i, a.minWidth = r, a.maxWidth = s)), void 0 !== o ? o + "" : o
    }

    function Re(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (l) {
                a.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ye.appendChild(a).appendChild(l);
                var e = T.getComputedStyle(l);
                n = "1%" !== e.top, o = 12 === t(e.marginLeft), l.style.right = "60%", s = 36 === t(e.right), i = 36 === t(e.width), l.style.position = "absolute", r = 36 === l.offsetWidth || "absolute", ye.removeChild(a), l = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, i, r, s, o, a = S.createElement("div"),
            l = S.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === l.style.backgroundClip, C.extend(g, {
            boxSizingReliable: function() {
                return e(), i
            },
            pixelBoxStyles: function() {
                return e(), s
            },
            pixelPosition: function() {
                return e(), n
            },
            reliableMarginLeft: function() {
                return e(), o
            },
            scrollboxSize: function() {
                return e(), r
            }
        }))
    }();
    var $e = /^(none|table(?!-c[ea]).+)/,
        Be = /^--/,
        Fe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        We = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ve = ["Webkit", "Moz", "ms"],
        Ye = S.createElement("div").style;

    function Xe(e) {
        var t = C.cssProps[e];
        return t || (t = C.cssProps[e] = function(e) {
            if (e in Ye) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = Ve.length; n--;)
                if ((e = Ve[n] + t) in Ye) return e
        }(e) || e), t
    }

    function Ge(e, t, n) {
        var i = te.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function Ue(e, t, n, i, r, s) {
        var o = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; o < 4; o += 2) "margin" === n && (l += C.css(e, n + ne[o], !0, r)), i ? ("content" === n && (l -= C.css(e, "padding" + ne[o], !0, r)), "margin" !== n && (l -= C.css(e, "border" + ne[o] + "Width", !0, r))) : (l += C.css(e, "padding" + ne[o], !0, r), "padding" !== n ? l += C.css(e, "border" + ne[o] + "Width", !0, r) : a += C.css(e, "border" + ne[o] + "Width", !0, r));
        return !i && 0 <= s && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - s - l - a - .5))), l
    }

    function Qe(e, t, n) {
        var i = ze(e),
            r = qe(e, t, i),
            s = "border-box" === C.css(e, "boxSizing", !1, i),
            o = s;
        if (je.test(r)) {
            if (!n) return r;
            r = "auto"
        }
        return o = o && (g.boxSizingReliable() || r === e.style[t]), ("auto" === r || !parseFloat(r) && "inline" === C.css(e, "display", !1, i)) && (r = e["offset" + t[0].toUpperCase() + t.slice(1)], o = !0), (r = parseFloat(r) || 0) + Ue(e, t, n || (s ? "border" : "content"), o, i, r) + "px"
    }

    function Ke(e, t, n, i, r) {
        return new Ke.prototype.init(e, t, n, i, r)
    }
    C.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = qe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, s, o, a = Y(t),
                    l = Be.test(t),
                    c = e.style;
                if (l || (t = Xe(a)), o = C.cssHooks[t] || C.cssHooks[a], void 0 === n) return o && "get" in o && void 0 !== (r = o.get(e, !1, i)) ? r : c[t];
                "string" === (s = typeof n) && (r = te.exec(n)) && r[1] && (n = se(e, t, r), s = "number"), null != n && n == n && ("number" === s && (n += r && r[3] || (C.cssNumber[a] ? "" : "px")), g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), o && "set" in o && void 0 === (n = o.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var r, s, o, a = Y(t);
            return Be.test(t) || (t = Xe(a)), (o = C.cssHooks[t] || C.cssHooks[a]) && "get" in o && (r = o.get(e, !0, n)), void 0 === r && (r = qe(e, t, i)), "normal" === r && t in We && (r = We[t]), "" === n || n ? (s = parseFloat(r), !0 === n || isFinite(s) ? s || 0 : r) : r
        }
    }), C.each(["height", "width"], function(e, a) {
        C.cssHooks[a] = {
            get: function(e, t, n) {
                if (t) return !$e.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Qe(e, a, n) : re(e, Fe, function() {
                    return Qe(e, a, n)
                })
            },
            set: function(e, t, n) {
                var i, r = ze(e),
                    s = "border-box" === C.css(e, "boxSizing", !1, r),
                    o = n && Ue(e, a, n, s, r);
                return s && g.scrollboxSize() === r.position && (o -= Math.ceil(e["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(r[a]) - Ue(e, a, "border", !1, r) - .5)), o && (i = te.exec(t)) && "px" !== (i[3] || "px") && (e.style[a] = t, t = C.css(e, a)), Ge(0, t, o)
            }
        }
    }), C.cssHooks.marginLeft = Re(g.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(qe(e, "marginLeft")) || e.getBoundingClientRect().left - re(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), C.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(r, s) {
        C.cssHooks[r + s] = {
            expand: function(e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[r + ne[t] + s] = i[t] || i[t - 2] || i[0];
                return n
            }
        }, "margin" !== r && (C.cssHooks[r + s].set = Ge)
    }), C.fn.extend({
        css: function(e, t) {
            return B(this, function(e, t, n) {
                var i, r, s = {},
                    o = 0;
                if (Array.isArray(t)) {
                    for (i = ze(e), r = t.length; o < r; o++) s[t[o]] = C.css(e, t[o], !1, i);
                    return s
                }
                return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((C.Tween = Ke).prototype = {
        constructor: Ke,
        init: function(e, t, n, i, r, s) {
            this.elem = e, this.prop = n, this.easing = r || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = s || (C.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Ke.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ke.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Ke.propHooks[this.prop];
            return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ke.propHooks._default.set(this), this
        }
    }).init.prototype = Ke.prototype, (Ke.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[C.cssProps[e.prop]] && !C.cssHooks[e.prop] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Ke.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, C.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, C.fx = Ke.prototype.init, C.fx.step = {};
    var Ze, Je, et, tt, nt = /^(?:toggle|show|hide)$/,
        it = /queueHooks$/;

    function rt() {
        Je && (!1 === S.hidden && T.requestAnimationFrame ? T.requestAnimationFrame(rt) : T.setTimeout(rt, C.fx.interval), C.fx.tick())
    }

    function st() {
        return T.setTimeout(function() {
            Ze = void 0
        }), Ze = Date.now()
    }

    function ot(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ne[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function at(e, t, n) {
        for (var i, r = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), s = 0, o = r.length; s < o; s++)
            if (i = r[s].call(n, t, e)) return i
    }

    function lt(s, e, t) {
        var n, o, i = 0,
            r = lt.prefilters.length,
            a = C.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var e = Ze || st(), t = Math.max(0, c.startTime + c.duration - e), n = 1 - (t / c.duration || 0), i = 0, r = c.tweens.length; i < r; i++) c.tweens[i].run(n);
                return a.notifyWith(s, [c, n, t]), n < 1 && r ? t : (r || a.notifyWith(s, [c, 1, 0]), a.resolveWith(s, [c]), !1)
            },
            c = a.promise({
                elem: s,
                props: C.extend({}, e),
                opts: C.extend(!0, {
                    specialEasing: {},
                    easing: C.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: Ze || st(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = C.Tween(s, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; t < n; t++) c.tweens[t].run(1);
                    return e ? (a.notifyWith(s, [c, 1, 0]), a.resolveWith(s, [c, e])) : a.rejectWith(s, [c, e]), this
                }
            }),
            u = c.props;
        for (! function(e, t) {
                var n, i, r, s, o;
                for (n in e)
                    if (r = t[i = Y(n)], s = e[n], Array.isArray(s) && (r = s[1], s = e[n] = s[0]), n !== i && (e[i] = s, delete e[n]), (o = C.cssHooks[i]) && "expand" in o)
                        for (n in s = o.expand(s), delete e[i], s) n in e || (e[n] = s[n], t[n] = r);
                    else t[i] = r
            }(u, c.opts.specialEasing); i < r; i++)
            if (n = lt.prefilters[i].call(c, s, u, c.opts)) return y(n.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
        return C.map(u, at, c), y(c.opts.start) && c.opts.start.call(s, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), C.fx.timer(C.extend(l, {
            elem: s,
            anim: c,
            queue: c.opts.queue
        })), c
    }
    C.Animation = C.extend(lt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            y(e) ? (t = e, e = ["*"]) : e = e.match(N);
            for (var n, i = 0, r = e.length; i < r; i++) n = e[i], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var i, r, s, o, a, l, c, u, d = "width" in t || "height" in t,
                h = this,
                p = {},
                f = e.style,
                m = e.nodeType && ie(e),
                v = U.get(e, "fxshow");
            for (i in n.queue || (null == (o = C._queueHooks(e, "fx")).unqueued && (o.unqueued = 0, a = o.empty.fire, o.empty.fire = function() {
                    o.unqueued || a()
                }), o.unqueued++, h.always(function() {
                    h.always(function() {
                        o.unqueued--, C.queue(e, "fx").length || o.empty.fire()
                    })
                })), t)
                if (r = t[i], nt.test(r)) {
                    if (delete t[i], s = s || "toggle" === r, r === (m ? "hide" : "show")) {
                        if ("show" !== r || !v || void 0 === v[i]) continue;
                        m = !0
                    }
                    p[i] = v && v[i] || C.style(e, i)
                }
            if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(p))
                for (i in d && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = v && v.display) && (c = U.get(e, "display")), "none" === (u = C.css(e, "display")) && (c ? u = c : (ae([e], !0), c = e.style.display || c, u = C.css(e, "display"), ae([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === C.css(e, "float") && (l || (h.done(function() {
                        f.display = c
                    }), null == c && (u = f.display, c = "none" === u ? "" : u)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", h.always(function() {
                        f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                    })), l = !1, p) l || (v ? "hidden" in v && (m = v.hidden) : v = U.access(e, "fxshow", {
                    display: c
                }), s && (v.hidden = !m), m && ae([e], !0), h.done(function() {
                    for (i in m || ae([e]), U.remove(e, "fxshow"), p) C.style(e, i, p[i])
                })), l = at(m ? v[i] : 0, i, h), i in v || (v[i] = l.start, m && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(e, t) {
            t ? lt.prefilters.unshift(e) : lt.prefilters.push(e)
        }
    }), C.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? C.extend({}, e) : {
            complete: n || !n && t || y(e) && e,
            duration: e,
            easing: n && t || t && !y(t) && t
        };
        return C.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in C.fx.speeds ? i.duration = C.fx.speeds[i.duration] : i.duration = C.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            y(i.old) && i.old.call(this), i.queue && C.dequeue(this, i.queue)
        }, i
    }, C.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(ie).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(t, e, n, i) {
            var r = C.isEmptyObject(t),
                s = C.speed(e, n, i),
                o = function() {
                    var e = lt(this, C.extend({}, t), s);
                    (r || U.get(this, "finish")) && e.stop(!0)
                };
            return o.finish = o, r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function(r, e, s) {
            var o = function(e) {
                var t = e.stop;
                delete e.stop, t(s)
            };
            return "string" != typeof r && (s = e, e = r, r = void 0), e && !1 !== r && this.queue(r || "fx", []), this.each(function() {
                var e = !0,
                    t = null != r && r + "queueHooks",
                    n = C.timers,
                    i = U.get(this);
                if (t) i[t] && i[t].stop && o(i[t]);
                else
                    for (t in i) i[t] && i[t].stop && it.test(t) && o(i[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(s), e = !1, n.splice(t, 1));
                !e && s || C.dequeue(this, r)
            })
        },
        finish: function(o) {
            return !1 !== o && (o = o || "fx"), this.each(function() {
                var e, t = U.get(this),
                    n = t[o + "queue"],
                    i = t[o + "queueHooks"],
                    r = C.timers,
                    s = n ? n.length : 0;
                for (t.finish = !0, C.queue(this, o, []), i && i.stop && i.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === o && (r[e].anim.stop(!0), r.splice(e, 1));
                for (e = 0; e < s; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), C.each(["toggle", "show", "hide"], function(e, i) {
        var r = C.fn[i];
        C.fn[i] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(ot(i, !0), e, t, n)
        }
    }), C.each({
        slideDown: ot("show"),
        slideUp: ot("hide"),
        slideToggle: ot("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, i) {
        C.fn[e] = function(e, t, n) {
            return this.animate(i, e, t, n)
        }
    }), C.timers = [], C.fx.tick = function() {
        var e, t = 0,
            n = C.timers;
        for (Ze = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || C.fx.stop(), Ze = void 0
    }, C.fx.timer = function(e) {
        C.timers.push(e), C.fx.start()
    }, C.fx.interval = 13, C.fx.start = function() {
        Je || (Je = !0, rt())
    }, C.fx.stop = function() {
        Je = null
    }, C.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, C.fn.delay = function(i, e) {
        return i = C.fx && C.fx.speeds[i] || i, e = e || "fx", this.queue(e, function(e, t) {
            var n = T.setTimeout(e, i);
            t.stop = function() {
                T.clearTimeout(n)
            }
        })
    }, et = S.createElement("input"), tt = S.createElement("select").appendChild(S.createElement("option")), et.type = "checkbox", g.checkOn = "" !== et.value, g.optSelected = tt.selected, (et = S.createElement("input")).value = "t", et.type = "radio", g.radioValue = "t" === et.value;
    var ct, ut = C.expr.attrHandle;
    C.fn.extend({
        attr: function(e, t) {
            return B(this, C.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                C.removeAttr(this, e)
            })
        }
    }), C.extend({
        attr: function(e, t, n) {
            var i, r, s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === s && C.isXMLDoc(e) || (r = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = C.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!g.radioValue && "radio" === t && k(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0,
                r = t && t.match(N);
            if (r && 1 === e.nodeType)
                for (; n = r[i++];) e.removeAttribute(n)
        }
    }), ct = {
        set: function(e, t, n) {
            return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var o = ut[t] || C.find.attr;
        ut[t] = function(e, t, n) {
            var i, r, s = t.toLowerCase();
            return n || (r = ut[s], ut[s] = i, i = null != o(e, t, n) ? s : null, ut[s] = r), i
        }
    });
    var dt = /^(?:input|select|textarea|button)$/i,
        ht = /^(?:a|area)$/i;

    function pt(e) {
        return (e.match(N) || []).join(" ")
    }

    function ft(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(N) || []
    }
    C.fn.extend({
        prop: function(e, t) {
            return B(this, C.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[C.propFix[e] || e]
            })
        }
    }), C.extend({
        prop: function(e, t, n) {
            var i, r, s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return 1 === s && C.isXMLDoc(e) || (t = C.propFix[t] || t, r = C.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = C.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : dt.test(e.nodeName) || ht.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), g.optSelected || (C.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        C.propFix[this.toLowerCase()] = this
    }), C.fn.extend({
        addClass: function(t) {
            var e, n, i, r, s, o, a, l = 0;
            if (y(t)) return this.each(function(e) {
                C(this).addClass(t.call(this, e, ft(this)))
            });
            if ((e = mt(t)).length)
                for (; n = this[l++];)
                    if (r = ft(n), i = 1 === n.nodeType && " " + pt(r) + " ") {
                        for (o = 0; s = e[o++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                        r !== (a = pt(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, r, s, o, a, l = 0;
            if (y(t)) return this.each(function(e) {
                C(this).removeClass(t.call(this, e, ft(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = mt(t)).length)
                for (; n = this[l++];)
                    if (r = ft(n), i = 1 === n.nodeType && " " + pt(r) + " ") {
                        for (o = 0; s = e[o++];)
                            for (; - 1 < i.indexOf(" " + s + " ");) i = i.replace(" " + s + " ", " ");
                        r !== (a = pt(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(r, t) {
            var s = typeof r,
                o = "string" === s || Array.isArray(r);
            return "boolean" == typeof t && o ? t ? this.addClass(r) : this.removeClass(r) : y(r) ? this.each(function(e) {
                C(this).toggleClass(r.call(this, e, ft(this), t), t)
            }) : this.each(function() {
                var e, t, n, i;
                if (o)
                    for (t = 0, n = C(this), i = mt(r); e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== r && "boolean" !== s || ((e = ft(this)) && U.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === r ? "" : U.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && -1 < (" " + pt(ft(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var vt = /\r/g;
    C.fn.extend({
        val: function(n) {
            var i, e, r, t = this[0];
            return arguments.length ? (r = y(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = r ? n.call(this, e, C(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = C.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (i = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
            })) : t ? (i = C.valHooks[t.type] || C.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(vt, "") : null == e ? "" : e : void 0
        }
    }), C.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = C.find.attr(e, "value");
                    return null != t ? t : pt(C.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, r = e.options,
                        s = e.selectedIndex,
                        o = "select-one" === e.type,
                        a = o ? null : [],
                        l = o ? s + 1 : r.length;
                    for (i = s < 0 ? l : o ? s : 0; i < l; i++)
                        if (((n = r[i]).selected || i === s) && !n.disabled && (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))) {
                            if (t = C(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, s = C.makeArray(t), o = r.length; o--;)((i = r[o]).selected = -1 < C.inArray(C.valHooks.option.get(i), s)) && (n = !0);
                    return n || (e.selectedIndex = -1), s
                }
            }
        }
    }), C.each(["radio", "checkbox"], function() {
        C.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < C.inArray(C(e).val(), t)
            }
        }, g.checkOn || (C.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), g.focusin = "onfocusin" in T;
    var gt = /^(?:focusinfocus|focusoutblur)$/,
        yt = function(e) {
            e.stopPropagation()
        };
    C.extend(C.event, {
        trigger: function(e, t, n, i) {
            var r, s, o, a, l, c, u, d, h = [n || S],
                p = v.call(e, "type") ? e.type : e,
                f = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = d = o = n = n || S, 3 !== n.nodeType && 8 !== n.nodeType && !gt.test(p + C.event.triggered) && (-1 < p.indexOf(".") && (p = (f = p.split(".")).shift(), f.sort()), l = p.indexOf(":") < 0 && "on" + p, (e = e[C.expando] ? e : new C.Event(p, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : C.makeArray(t, [e]), u = C.event.special[p] || {}, i || !u.trigger || !1 !== u.trigger.apply(n, t))) {
                if (!i && !u.noBubble && !b(n)) {
                    for (a = u.delegateType || p, gt.test(a + p) || (s = s.parentNode); s; s = s.parentNode) h.push(s), o = s;
                    o === (n.ownerDocument || S) && h.push(o.defaultView || o.parentWindow || T)
                }
                for (r = 0;
                    (s = h[r++]) && !e.isPropagationStopped();) d = s, e.type = 1 < r ? a : u.bindType || p, (c = (U.get(s, "events") || {})[e.type] && U.get(s, "handle")) && c.apply(s, t), (c = l && s[l]) && c.apply && X(s) && (e.result = c.apply(s, t), !1 === e.result && e.preventDefault());
                return e.type = p, i || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(h.pop(), t) || !X(n) || l && y(n[p]) && !b(n) && ((o = n[l]) && (n[l] = null), C.event.triggered = p, e.isPropagationStopped() && d.addEventListener(p, yt), n[p](), e.isPropagationStopped() && d.removeEventListener(p, yt), C.event.triggered = void 0, o && (n[l] = o)), e.result
            }
        },
        simulate: function(e, t, n) {
            var i = C.extend(new C.Event, n, {
                type: e,
                isSimulated: !0
            });
            C.event.trigger(i, null, t)
        }
    }), C.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                C.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return C.event.trigger(e, t, n, !0)
        }
    }), g.focusin || C.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, i) {
        var r = function(e) {
            C.event.simulate(i, e.target, C.event.fix(e))
        };
        C.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = U.access(e, i);
                t || e.addEventListener(n, r, !0), U.access(e, i, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = U.access(e, i) - 1;
                t ? U.access(e, i, t) : (e.removeEventListener(n, r, !0), U.remove(e, i))
            }
        }
    });
    var bt = T.location,
        wt = Date.now(),
        xt = /\?/;
    C.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new T.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t
    };
    var Et = /\[\]$/,
        Tt = /\r?\n/g,
        St = /^(?:submit|button|image|reset|file)$/i,
        Ct = /^(?:input|select|textarea|keygen)/i;

    function _t(n, e, i, r) {
        var t;
        if (Array.isArray(e)) C.each(e, function(e, t) {
            i || Et.test(n) ? r(n, t) : _t(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, r)
        });
        else if (i || "object" !== x(e)) r(n, e);
        else
            for (t in e) _t(n + "[" + t + "]", e[t], i, r)
    }
    C.param = function(e, t) {
        var n, i = [],
            r = function(e, t) {
                var n = y(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (n in e) _t(n, e[n], t, r);
        return i.join("&")
    }, C.fn.extend({
        serialize: function() {
            return C.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = C.prop(this, "elements");
                return e ? C.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !C(this).is(":disabled") && Ct.test(this.nodeName) && !St.test(e) && (this.checked || !le.test(e))
            }).map(function(e, t) {
                var n = C(this).val();
                return null == n ? null : Array.isArray(n) ? C.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Tt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Tt, "\r\n")
                }
            }).get()
        }
    });
    var kt = /%20/g,
        At = /#.*$/,
        Dt = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Mt = /^(?:GET|HEAD)$/,
        It = /^\/\//,
        Pt = {},
        Lt = {},
        Nt = "*/".concat("*"),
        jt = S.createElement("a");

    function zt(s) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, i = 0,
                r = e.toLowerCase().match(N) || [];
            if (y(t))
                for (; n = r[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (s[n] = s[n] || []).unshift(t)) : (s[n] = s[n] || []).push(t)
        }
    }

    function Ht(t, r, s, o) {
        var a = {},
            l = t === Lt;

        function c(e) {
            var i;
            return a[e] = !0, C.each(t[e] || [], function(e, t) {
                var n = t(r, s, o);
                return "string" != typeof n || l || a[n] ? l ? !(i = n) : void 0 : (r.dataTypes.unshift(n), c(n), !1)
            }), i
        }
        return c(r.dataTypes[0]) || !a["*"] && c("*")
    }

    function qt(e, t) {
        var n, i, r = C.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && C.extend(!0, e, i), e
    }
    jt.href = bt.href, C.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: bt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Nt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": C.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? qt(qt(e, C.ajaxSettings), t) : qt(C.ajaxSettings, e)
        },
        ajaxPrefilter: zt(Pt),
        ajaxTransport: zt(Lt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var u, d, h, n, p, i, f, m, r, s, v = C.ajaxSetup({}, t),
                g = v.context || v,
                y = v.context && (g.nodeType || g.jquery) ? C(g) : C.event,
                b = C.Deferred(),
                w = C.Callbacks("once memory"),
                x = v.statusCode || {},
                o = {},
                a = {},
                l = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (f) {
                            if (!n)
                                for (n = {}; t = Ot.exec(h);) n[t[1].toLowerCase()] = t[2];
                            t = n[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return f ? h : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == f && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e, o[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == f && (v.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (f) E.always(e[E.status]);
                            else
                                for (t in e) x[t] = [x[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || l;
                        return u && u.abort(t), c(0, t), this
                    }
                };
            if (b.promise(E), v.url = ((e || v.url || bt.href) + "").replace(It, bt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(N) || [""], null == v.crossDomain) {
                i = S.createElement("a");
                try {
                    i.href = v.url, i.href = i.href, v.crossDomain = jt.protocol + "//" + jt.host != i.protocol + "//" + i.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = C.param(v.data, v.traditional)), Ht(Pt, v, t, E), f) return E;
            for (r in (m = C.event && v.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Mt.test(v.type), d = v.url.replace(At, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(kt, "+")) : (s = v.url.slice(d.length), v.data && (v.processData || "string" == typeof v.data) && (d += (xt.test(d) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (d = d.replace(Dt, "$1"), s = (xt.test(d) ? "&" : "?") + "_=" + wt++ + s), v.url = d + s), v.ifModified && (C.lastModified[d] && E.setRequestHeader("If-Modified-Since", C.lastModified[d]), C.etag[d] && E.setRequestHeader("If-None-Match", C.etag[d])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && E.setRequestHeader("Content-Type", v.contentType), E.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Nt + "; q=0.01" : "") : v.accepts["*"]), v.headers) E.setRequestHeader(r, v.headers[r]);
            if (v.beforeSend && (!1 === v.beforeSend.call(g, E, v) || f)) return E.abort();
            if (l = "abort", w.add(v.complete), E.done(v.success), E.fail(v.error), u = Ht(Lt, v, t, E)) {
                if (E.readyState = 1, m && y.trigger("ajaxSend", [E, v]), f) return E;
                v.async && 0 < v.timeout && (p = T.setTimeout(function() {
                    E.abort("timeout")
                }, v.timeout));
                try {
                    f = !1, u.send(o, c)
                } catch (e) {
                    if (f) throw e;
                    c(-1, e)
                }
            } else c(-1, "No Transport");

            function c(e, t, n, i) {
                var r, s, o, a, l, c = t;
                f || (f = !0, p && T.clearTimeout(p), u = void 0, h = i || "", E.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (a = function(e, t, n) {
                    for (var i, r, s, o, a = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (r in a)
                            if (a[r] && a[r].test(i)) {
                                l.unshift(r);
                                break
                            }
                    if (l[0] in n) s = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                s = r;
                                break
                            }
                            o || (o = r)
                        }
                        s = s || o
                    }
                    if (s) return s !== l[0] && l.unshift(s), n[s]
                }(v, E, n)), a = function(e, t, n, i) {
                    var r, s, o, a, l, c = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (o in e.converters) c[o.toLowerCase()] = e.converters[o];
                    for (s = u.shift(); s;)
                        if (e.responseFields[s] && (n[e.responseFields[s]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = u.shift())
                            if ("*" === s) s = l;
                            else if ("*" !== l && l !== s) {
                        if (!(o = c[l + " " + s] || c["* " + s]))
                            for (r in c)
                                if ((a = r.split(" "))[1] === s && (o = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === o ? o = c[r] : !0 !== c[r] && (s = a[0], u.unshift(a[1]));
                                    break
                                }
                        if (!0 !== o)
                            if (o && e.throws) t = o(t);
                            else try {
                                t = o(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: o ? e : "No conversion from " + l + " to " + s
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, a, E, r), r ? (v.ifModified && ((l = E.getResponseHeader("Last-Modified")) && (C.lastModified[d] = l), (l = E.getResponseHeader("etag")) && (C.etag[d] = l)), 204 === e || "HEAD" === v.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = a.state, s = a.data, r = !(o = a.error))) : (o = c, !e && c || (c = "error", e < 0 && (e = 0))), E.status = e, E.statusText = (t || c) + "", r ? b.resolveWith(g, [s, c, E]) : b.rejectWith(g, [E, c, o]), E.statusCode(x), x = void 0, m && y.trigger(r ? "ajaxSuccess" : "ajaxError", [E, v, r ? s : o]), w.fireWith(g, [E, c]), m && (y.trigger("ajaxComplete", [E, v]), --C.active || C.event.trigger("ajaxStop")))
            }
            return E
        },
        getJSON: function(e, t, n) {
            return C.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return C.get(e, void 0, t, "script")
        }
    }), C.each(["get", "post"], function(e, r) {
        C[r] = function(e, t, n, i) {
            return y(t) && (i = i || n, n = t, t = void 0), C.ajax(C.extend({
                url: e,
                type: r,
                dataType: i,
                data: t,
                success: n
            }, C.isPlainObject(e) && e))
        }
    }), C._evalUrl = function(e) {
        return C.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, C.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (y(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return y(n) ? this.each(function(e) {
                C(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = C(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = y(t);
            return this.each(function(e) {
                C(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                C(this).replaceWith(this.childNodes)
            }), this
        }
    }), C.expr.pseudos.hidden = function(e) {
        return !C.expr.pseudos.visible(e)
    }, C.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, C.ajaxSettings.xhr = function() {
        try {
            return new T.XMLHttpRequest
        } catch (e) {}
    };
    var Rt = {
            0: 200,
            1223: 204
        },
        $t = C.ajaxSettings.xhr();
    g.cors = !!$t && "withCredentials" in $t, g.ajax = $t = !!$t, C.ajaxTransport(function(r) {
        var s, o;
        if (g.cors || $t && !r.crossDomain) return {
            send: function(e, t) {
                var n, i = r.xhr();
                if (i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                    for (n in r.xhrFields) i[n] = r.xhrFields[n];
                for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType), r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
                s = function(e) {
                    return function() {
                        s && (s = o = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(Rt[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                            binary: i.response
                        } : {
                            text: i.responseText
                        }, i.getAllResponseHeaders()))
                    }
                }, i.onload = s(), o = i.onerror = i.ontimeout = s("error"), void 0 !== i.onabort ? i.onabort = o : i.onreadystatechange = function() {
                    4 === i.readyState && T.setTimeout(function() {
                        s && o()
                    })
                }, s = s("abort");
                try {
                    i.send(r.hasContent && r.data || null)
                } catch (e) {
                    if (s) throw e
                }
            },
            abort: function() {
                s && s()
            }
        }
    }), C.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), C.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return C.globalEval(e), e
            }
        }
    }), C.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), C.ajaxTransport("script", function(n) {
        var i, r;
        if (n.crossDomain) return {
            send: function(e, t) {
                i = C("<script>").prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", r = function(e) {
                    i.remove(), r = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), S.head.appendChild(i[0])
            },
            abort: function() {
                r && r()
            }
        }
    });
    var Bt, Ft = [],
        Wt = /(=)\?(?=&|$)|\?\?/;
    C.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Ft.pop() || C.expando + "_" + wt++;
            return this[e] = !0, e
        }
    }), C.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i, r, s, o = !1 !== e.jsonp && (Wt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Wt.test(e.data) && "data");
        if (o || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(Wt, "$1" + i) : !1 !== e.jsonp && (e.url += (xt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
            return s || C.error(i + " was not called"), s[0]
        }, e.dataTypes[0] = "json", r = T[i], T[i] = function() {
            s = arguments
        }, n.always(function() {
            void 0 === r ? C(T).removeProp(i) : T[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, Ft.push(i)), s && y(r) && r(s[0]), s = r = void 0
        }), "script"
    }), g.createHTMLDocument = ((Bt = S.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Bt.childNodes.length), C.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (g.createHTMLDocument ? ((i = (t = S.implementation.createHTMLDocument("")).createElement("base")).href = S.location.href, t.head.appendChild(i)) : t = S), s = !n && [], (r = A.exec(e)) ? [t.createElement(r[1])] : (r = ge([e], t, s), s && s.length && C(s).remove(), C.merge([], r.childNodes)));
        var i, r, s
    }, C.fn.load = function(e, t, n) {
        var i, r, s, o = this,
            a = e.indexOf(" ");
        return -1 < a && (i = pt(e.slice(a)), e = e.slice(0, a)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 0 < o.length && C.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            s = arguments, o.html(i ? C("<div>").append(C.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            o.each(function() {
                n.apply(this, s || [e.responseText, t, e])
            })
        }), this
    }, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        C.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), C.expr.pseudos.animated = function(t) {
        return C.grep(C.timers, function(e) {
            return t === e.elem
        }).length
    }, C.offset = {
        setOffset: function(e, t, n) {
            var i, r, s, o, a, l, c = C.css(e, "position"),
                u = C(e),
                d = {};
            "static" === c && (e.style.position = "relative"), a = u.offset(), s = C.css(e, "top"), l = C.css(e, "left"), ("absolute" === c || "fixed" === c) && -1 < (s + l).indexOf("auto") ? (o = (i = u.position()).top, r = i.left) : (o = parseFloat(s) || 0, r = parseFloat(l) || 0), y(t) && (t = t.call(e, n, C.extend({}, a))), null != t.top && (d.top = t.top - a.top + o), null != t.left && (d.left = t.left - a.left + r), "using" in t ? t.using.call(e, d) : u.css(d)
        }
    }, C.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                C.offset.setOffset(this, t, e)
            });
            var e, n, i = this[0];
            return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === C.css(i, "position")) t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((r = C(e).offset()).top += C.css(e, "borderTopWidth", !0), r.left += C.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - C.css(i, "marginTop", !0),
                    left: t.left - r.left - C.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;
                return e || ye
            })
        }
    }), C.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, r) {
        var s = "pageYOffset" === r;
        C.fn[t] = function(e) {
            return B(this, function(e, t, n) {
                var i;
                if (b(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === n) return i ? i[r] : e[t];
                i ? i.scrollTo(s ? i.pageXOffset : n, s ? n : i.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), C.each(["top", "left"], function(e, n) {
        C.cssHooks[n] = Re(g.pixelPosition, function(e, t) {
            if (t) return t = qe(e, n), je.test(t) ? C(e).position()[n] + "px" : t
        })
    }), C.each({
        Height: "height",
        Width: "width"
    }, function(o, a) {
        C.each({
            padding: "inner" + o,
            content: a,
            "": "outer" + o
        }, function(i, s) {
            C.fn[s] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e),
                    r = i || (!0 === e || !0 === t ? "margin" : "border");
                return B(this, function(e, t, n) {
                    var i;
                    return b(e) ? 0 === s.indexOf("outer") ? e["inner" + o] : e.document.documentElement["client" + o] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + o], i["scroll" + o], e.body["offset" + o], i["offset" + o], i["client" + o])) : void 0 === n ? C.css(e, t, r) : C.style(e, t, n, r)
                }, a, n ? e : void 0, n)
            }
        })
    }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        C.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), C.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), C.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), C.proxy = function(e, t) {
        var n, i, r;
        if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return i = a.call(arguments, 2), (r = function() {
            return e.apply(t || this, i.concat(a.call(arguments)))
        }).guid = e.guid = e.guid || C.guid++, r
    }, C.holdReady = function(e) {
        e ? C.readyWait++ : C.ready(!0)
    }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = k, C.isFunction = y, C.isWindow = b, C.camelCase = Y, C.type = x, C.now = Date.now, C.isNumeric = function(e) {
        var t = C.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return C
    });
    var Vt = T.jQuery,
        Yt = T.$;
    return C.noConflict = function(e) {
        return T.$ === C && (T.$ = Yt), e && T.jQuery === C && (T.jQuery = Vt), C
    }, e || (T.jQuery = T.$ = C), C
}), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(e, t, n, i, r) {
            return jQuery.easing[jQuery.easing.def](e, t, n, i, r)
        },
        easeInQuad: function(e, t, n, i, r) {
            return i * (t /= r) * t + n
        },
        easeOutQuad: function(e, t, n, i, r) {
            return -i * (t /= r) * (t - 2) + n
        },
        easeInOutQuad: function(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n
        },
        easeInCubic: function(e, t, n, i, r) {
            return i * (t /= r) * t * t + n
        },
        easeOutCubic: function(e, t, n, i, r) {
            return i * ((t = t / r - 1) * t * t + 1) + n
        },
        easeInOutCubic: function(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
        },
        easeInQuart: function(e, t, n, i, r) {
            return i * (t /= r) * t * t * t + n
        },
        easeOutQuart: function(e, t, n, i, r) {
            return -i * ((t = t / r - 1) * t * t * t - 1) + n
        },
        easeInOutQuart: function(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t * t * t + n : -i / 2 * ((t -= 2) * t * t * t - 2) + n
        },
        easeInQuint: function(e, t, n, i, r) {
            return i * (t /= r) * t * t * t * t + n
        },
        easeOutQuint: function(e, t, n, i, r) {
            return i * ((t = t / r - 1) * t * t * t * t + 1) + n
        },
        easeInOutQuint: function(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t * t * t * t + n : i / 2 * ((t -= 2) * t * t * t * t + 2) + n
        },
        easeInSine: function(e, t, n, i, r) {
            return -i * Math.cos(t / r * (Math.PI / 2)) + i + n
        },
        easeOutSine: function(e, t, n, i, r) {
            return i * Math.sin(t / r * (Math.PI / 2)) + n
        },
        easeInOutSine: function(e, t, n, i, r) {
            return -i / 2 * (Math.cos(Math.PI * t / r) - 1) + n
        },
        easeInExpo: function(e, t, n, i, r) {
            return 0 == t ? n : i * Math.pow(2, 10 * (t / r - 1)) + n
        },
        easeOutExpo: function(e, t, n, i, r) {
            return t == r ? n + i : i * (1 - Math.pow(2, -10 * t / r)) + n
        },
        easeInOutExpo: function(e, t, n, i, r) {
            return 0 == t ? n : t == r ? n + i : (t /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (2 - Math.pow(2, -10 * --t)) + n
        },
        easeInCirc: function(e, t, n, i, r) {
            return -i * (Math.sqrt(1 - (t /= r) * t) - 1) + n
        },
        easeOutCirc: function(e, t, n, i, r) {
            return i * Math.sqrt(1 - (t = t / r - 1) * t) + n
        },
        easeInOutCirc: function(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + n : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
        },
        easeInElastic: function(e, t, n, i, r) {
            var s = 1.70158,
                o = 0,
                a = i;
            if (0 == t) return n;
            if (1 == (t /= r)) return n + i;
            if (o || (o = .3 * r), a < Math.abs(i)) {
                a = i;
                s = o / 4
            } else s = o / (2 * Math.PI) * Math.asin(i / a);
            return -a * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * r - s) * Math.PI / o) + n
        },
        easeOutElastic: function(e, t, n, i, r) {
            var s = 1.70158,
                o = 0,
                a = i;
            if (0 == t) return n;
            if (1 == (t /= r)) return n + i;
            if (o || (o = .3 * r), a < Math.abs(i)) {
                a = i;
                s = o / 4
            } else s = o / (2 * Math.PI) * Math.asin(i / a);
            return a * Math.pow(2, -10 * t) * Math.sin(2 * (t * r - s) * Math.PI / o) + i + n
        },
        easeInOutElastic: function(e, t, n, i, r) {
            var s = 1.70158,
                o = 0,
                a = i;
            if (0 == t) return n;
            if (2 == (t /= r / 2)) return n + i;
            if (o || (o = .3 * r * 1.5), a < Math.abs(i)) {
                a = i;
                s = o / 4
            } else s = o / (2 * Math.PI) * Math.asin(i / a);
            return t < 1 ? -.5 * a * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * r - s) * Math.PI / o) + n : a * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t * r - s) * Math.PI / o) * .5 + i + n
        },
        easeInBack: function(e, t, n, i, r, s) {
            return null == s && (s = 1.70158), i * (t /= r) * t * ((s + 1) * t - s) + n
        },
        easeOutBack: function(e, t, n, i, r, s) {
            return null == s && (s = 1.70158), i * ((t = t / r - 1) * t * ((s + 1) * t + s) + 1) + n
        },
        easeInOutBack: function(e, t, n, i, r, s) {
            return null == s && (s = 1.70158), (t /= r / 2) < 1 ? i / 2 * t * t * ((1 + (s *= 1.525)) * t - s) + n : i / 2 * ((t -= 2) * t * ((1 + (s *= 1.525)) * t + s) + 2) + n
        },
        easeInBounce: function(e, t, n, i, r) {
            return i - jQuery.easing.easeOutBounce(e, r - t, 0, i, r) + n
        },
        easeOutBounce: function(e, t, n, i, r) {
            return (t /= r) < 1 / 2.75 ? 7.5625 * i * t * t + n : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
        },
        easeInOutBounce: function(e, t, n, i, r) {
            return t < r / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, i, r) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - r, 0, i, r) + .5 * i + n
        }
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function(u) {
        var n;
        u.extend(u.fn, {
            validate: function(e) {
                if (this.length) {
                    var i = u.data(this[0], "validator");
                    return i || (this.attr("novalidate", "novalidate"), i = new u.validator(e, this[0]), u.data(this[0], "validator", i), i.settings.onsubmit && (this.on("click.validate", ":submit", function(e) {
                        i.submitButton = e.currentTarget, u(this).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== u(this).attr("formnovalidate") && (i.cancelSubmit = !0)
                    }), this.on("submit.validate", function(n) {
                        function e() {
                            var e, t;
                            return i.submitButton && (i.settings.submitHandler || i.formSubmitted) && (e = u("<input type='hidden'/>").attr("name", i.submitButton.name).val(u(i.submitButton).val()).appendTo(i.currentForm)), !(i.settings.submitHandler && !i.settings.debug) || (t = i.settings.submitHandler.call(i, i.currentForm, n), e && e.remove(), void 0 !== t && t)
                        }
                        return i.settings.debug && n.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, e()) : i.form() ? i.pendingRequest ? !(i.formSubmitted = !0) : e() : (i.focusInvalid(), !1)
                    })), i)
                }
                e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
            },
            valid: function() {
                var e, t, n;
                return u(this[0]).is("form") ? e = this.validate().form() : (n = [], e = !0, t = u(this[0].form).validate(), this.each(function() {
                    (e = t.element(this) && e) || (n = n.concat(t.errorList))
                }), t.errorList = n), e
            },
            rules: function(e, t) {
                var n, i, r, s, o, a, l = this[0],
                    c = void 0 !== this.attr("contenteditable") && "false" !== this.attr("contenteditable");
                if (null != l && (!l.form && c && (l.form = this.closest("form")[0], l.name = this.attr("name")), null != l.form)) {
                    if (e) switch (i = (n = u.data(l.form, "validator").settings).rules, r = u.validator.staticRules(l), e) {
                        case "add":
                            u.extend(r, u.validator.normalizeRule(t)), delete r.messages, i[l.name] = r, t.messages && (n.messages[l.name] = u.extend(n.messages[l.name], t.messages));
                            break;
                        case "remove":
                            return t ? (a = {}, u.each(t.split(/\s/), function(e, t) {
                                a[t] = r[t], delete r[t]
                            }), a) : (delete i[l.name], r)
                    }
                    return (s = u.validator.normalizeRules(u.extend({}, u.validator.classRules(l), u.validator.attributeRules(l), u.validator.dataRules(l), u.validator.staticRules(l)), l)).required && (o = s.required, delete s.required, s = u.extend({
                        required: o
                    }, s)), s.remote && (o = s.remote, delete s.remote, s = u.extend(s, {
                        remote: o
                    })), s
                }
            }
        }), u.extend(u.expr.pseudos || u.expr[":"], {
            blank: function(e) {
                return !u.trim("" + u(e).val())
            },
            filled: function(e) {
                var t = u(e).val();
                return null !== t && !!u.trim("" + t)
            },
            unchecked: function(e) {
                return !u(e).prop("checked")
            }
        }), u.validator = function(e, t) {
            this.settings = u.extend(!0, {}, u.validator.defaults, e), this.currentForm = t, this.init()
        }, u.validator.format = function(n, e) {
            return 1 === arguments.length ? function() {
                var e = u.makeArray(arguments);
                return e.unshift(n), u.validator.format.apply(this, e)
            } : (void 0 === e || (2 < arguments.length && e.constructor !== Array && (e = u.makeArray(arguments).slice(1)), e.constructor !== Array && (e = [e]), u.each(e, function(e, t) {
                n = n.replace(new RegExp("\\{" + e + "\\}", "g"), function() {
                    return t
                })
            })), n)
        }, u.extend(u.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                pendingClass: "pending",
                validClass: "valid",
                errorElement: "label",
                focusCleanup: !1,
                focusInvalid: !0,
                errorContainer: u([]),
                errorLabelContainer: u([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function(e) {
                    this.lastActive = e, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(e)))
                },
                onfocusout: function(e) {
                    this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
                },
                onkeyup: function(e, t) {
                    9 === t.which && "" === this.elementValue(e) || -1 !== u.inArray(t.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (e.name in this.submitted || e.name in this.invalid) && this.element(e)
                },
                onclick: function(e) {
                    e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
                },
                highlight: function(e, t, n) {
                    "radio" === e.type ? this.findByName(e.name).addClass(t).removeClass(n) : u(e).addClass(t).removeClass(n)
                },
                unhighlight: function(e, t, n) {
                    "radio" === e.type ? this.findByName(e.name).removeClass(t).addClass(n) : u(e).removeClass(t).addClass(n)
                }
            },
            setDefaults: function(e) {
                u.extend(u.validator.defaults, e)
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date (ISO).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                equalTo: "Please enter the same value again.",
                maxlength: u.validator.format("Please enter no more than {0} characters."),
                minlength: u.validator.format("Please enter at least {0} characters."),
                rangelength: u.validator.format("Please enter a value between {0} and {1} characters long."),
                range: u.validator.format("Please enter a value between {0} and {1}."),
                max: u.validator.format("Please enter a value less than or equal to {0}."),
                min: u.validator.format("Please enter a value greater than or equal to {0}."),
                step: u.validator.format("Please enter a multiple of {0}.")
            },
            autoCreateRanges: !1,
            prototype: {
                init: function() {
                    this.labelContainer = u(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || u(this.currentForm), this.containers = u(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                    var n, s = this.currentForm,
                        i = this.groups = {};

                    function e(e) {
                        var t = void 0 !== u(this).attr("contenteditable") && "false" !== u(this).attr("contenteditable");
                        if (!this.form && t && (this.form = u(this).closest("form")[0], this.name = u(this).attr("name")), s === this.form) {
                            var n = u.data(this.form, "validator"),
                                i = "on" + e.type.replace(/^validate/, ""),
                                r = n.settings;
                            r[i] && !u(this).is(r.ignore) && r[i].call(n, this, e)
                        }
                    }
                    u.each(this.settings.groups, function(n, e) {
                        "string" == typeof e && (e = e.split(/\s/)), u.each(e, function(e, t) {
                            i[t] = n
                        })
                    }), n = this.settings.rules, u.each(n, function(e, t) {
                        n[e] = u.validator.normalizeRule(t)
                    }), u(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", e).on("click.validate", "select, option, [type='radio'], [type='checkbox']", e), this.settings.invalidHandler && u(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
                },
                form: function() {
                    return this.checkForm(), u.extend(this.submitted, this.errorMap), this.invalid = u.extend({}, this.errorMap), this.valid() || u(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                },
                checkForm: function() {
                    this.prepareForm();
                    for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
                    return this.valid()
                },
                element: function(e) {
                    var t, n, i = this.clean(e),
                        r = this.validationTargetFor(i),
                        s = this,
                        o = !0;
                    return void 0 === r ? delete this.invalid[i.name] : (this.prepareElement(r), this.currentElements = u(r), (n = this.groups[r.name]) && u.each(this.groups, function(e, t) {
                        t === n && e !== r.name && (i = s.validationTargetFor(s.clean(s.findByName(e)))) && i.name in s.invalid && (s.currentElements.push(i), o = s.check(i) && o)
                    }), t = !1 !== this.check(r), o = o && t, this.invalid[r.name] = !t, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), u(e).attr("aria-invalid", !t)), o
                },
                showErrors: function(t) {
                    if (t) {
                        var n = this;
                        u.extend(this.errorMap, t), this.errorList = u.map(this.errorMap, function(e, t) {
                            return {
                                message: e,
                                element: n.findByName(t)[0]
                            }
                        }), this.successList = u.grep(this.successList, function(e) {
                            return !(e.name in t)
                        })
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                },
                resetForm: function() {
                    u.fn.resetForm && u(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                    var e = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                    this.resetElements(e)
                },
                resetElements: function(e) {
                    var t;
                    if (this.settings.unhighlight)
                        for (t = 0; e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, ""), this.findByName(e[t].name).removeClass(this.settings.validClass);
                    else e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
                },
                numberOfInvalids: function() {
                    return this.objectLength(this.invalid)
                },
                objectLength: function(e) {
                    var t, n = 0;
                    for (t in e) void 0 !== e[t] && null !== e[t] && !1 !== e[t] && n++;
                    return n
                },
                hideErrors: function() {
                    this.hideThese(this.toHide)
                },
                hideThese: function(e) {
                    e.not(this.containers).text(""), this.addWrapper(e).hide()
                },
                valid: function() {
                    return 0 === this.size()
                },
                size: function() {
                    return this.errorList.length
                },
                focusInvalid: function() {
                    if (this.settings.focusInvalid) try {
                        u(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (e) {}
                },
                findLastActive: function() {
                    var t = this.lastActive;
                    return t && 1 === u.grep(this.errorList, function(e) {
                        return e.element.name === t.name
                    }).length && t
                },
                elements: function() {
                    var n = this,
                        i = {};
                    return u(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                        var e = this.name || u(this).attr("name"),
                            t = void 0 !== u(this).attr("contenteditable") && "false" !== u(this).attr("contenteditable");
                        return !e && n.settings.debug && window.console && console.error("%o has no name assigned", this), t && (this.form = u(this).closest("form")[0], this.name = e), this.form === n.currentForm && (!(e in i || !n.objectLength(u(this).rules())) && (i[e] = !0))
                    })
                },
                clean: function(e) {
                    return u(e)[0]
                },
                errors: function() {
                    var e = this.settings.errorClass.split(" ").join(".");
                    return u(this.settings.errorElement + "." + e, this.errorContext)
                },
                resetInternals: function() {
                    this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = u([]), this.toHide = u([])
                },
                reset: function() {
                    this.resetInternals(), this.currentElements = u([])
                },
                prepareForm: function() {
                    this.reset(), this.toHide = this.errors().add(this.containers)
                },
                prepareElement: function(e) {
                    this.reset(), this.toHide = this.errorsFor(e)
                },
                elementValue: function(e) {
                    var t, n, i = u(e),
                        r = e.type,
                        s = void 0 !== i.attr("contenteditable") && "false" !== i.attr("contenteditable");
                    return "radio" === r || "checkbox" === r ? this.findByName(e.name).filter(":checked").val() : "number" === r && void 0 !== e.validity ? e.validity.badInput ? "NaN" : i.val() : (t = s ? i.text() : i.val(), "file" === r ? "C:\\fakepath\\" === t.substr(0, 12) ? t.substr(12) : 0 <= (n = t.lastIndexOf("/")) ? t.substr(n + 1) : 0 <= (n = t.lastIndexOf("\\")) ? t.substr(n + 1) : t : "string" == typeof t ? t.replace(/\r/g, "") : t)
                },
                check: function(t) {
                    t = this.validationTargetFor(this.clean(t));
                    var e, n, i, r, s = u(t).rules(),
                        o = u.map(s, function(e, t) {
                            return t
                        }).length,
                        a = !1,
                        l = this.elementValue(t);
                    for (n in "function" == typeof s.normalizer ? r = s.normalizer : "function" == typeof this.settings.normalizer && (r = this.settings.normalizer), r && (l = r.call(t, l), delete s.normalizer), s) {
                        i = {
                            method: n,
                            parameters: s[n]
                        };
                        try {
                            if ("dependency-mismatch" === (e = u.validator.methods[n].call(this, l, t, i.parameters)) && 1 === o) {
                                a = !0;
                                continue
                            }
                            if (a = !1, "pending" === e) return void(this.toHide = this.toHide.not(this.errorsFor(t)));
                            if (!e) return this.formatAndAdd(t, i), !1
                        } catch (e) {
                            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + i.method + "' method.", e), e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + i.method + "' method."), e
                        }
                    }
                    if (!a) return this.objectLength(s) && this.successList.push(t), !0
                },
                customDataMessage: function(e, t) {
                    return u(e).data("msg" + t.charAt(0).toUpperCase() + t.substring(1).toLowerCase()) || u(e).data("msg")
                },
                customMessage: function(e, t) {
                    var n = this.settings.messages[e];
                    return n && (n.constructor === String ? n : n[t])
                },
                findDefined: function() {
                    for (var e = 0; e < arguments.length; e++)
                        if (void 0 !== arguments[e]) return arguments[e]
                },
                defaultMessage: function(e, t) {
                    "string" == typeof t && (t = {
                        method: t
                    });
                    var n = this.findDefined(this.customMessage(e.name, t.method), this.customDataMessage(e, t.method), !this.settings.ignoreTitle && e.title || void 0, u.validator.messages[t.method], "<strong>Warning: No message defined for " + e.name + "</strong>"),
                        i = /\$?\{(\d+)\}/g;
                    return "function" == typeof n ? n = n.call(this, t.parameters, e) : i.test(n) && (n = u.validator.format(n.replace(i, "{$1}"), t.parameters)), n
                },
                formatAndAdd: function(e, t) {
                    var n = this.defaultMessage(e, t);
                    this.errorList.push({
                        message: n,
                        element: e,
                        method: t.method
                    }), this.errorMap[e.name] = n, this.submitted[e.name] = n
                },
                addWrapper: function(e) {
                    return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
                },
                defaultShowErrors: function() {
                    var e, t, n;
                    for (e = 0; this.errorList[e]; e++) n = this.errorList[e], this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message);
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                        for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
                    if (this.settings.unhighlight)
                        for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                },
                validElements: function() {
                    return this.currentElements.not(this.invalidElements())
                },
                invalidElements: function() {
                    return u(this.errorList).map(function() {
                        return this.element
                    })
                },
                showLabel: function(e, t) {
                    var n, i, r, s, o = this.errorsFor(e),
                        a = this.idOrName(e),
                        l = u(e).attr("aria-describedby");
                    o.length ? (o.removeClass(this.settings.validClass).addClass(this.settings.errorClass), o.html(t)) : (n = o = u("<" + this.settings.errorElement + ">").attr("id", a + "-error").addClass(this.settings.errorClass).html(t || ""), this.settings.wrapper && (n = o.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(n) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, n, u(e)) : n.insertAfter(e), o.is("label") ? o.attr("for", a) : 0 === o.parents("label[for='" + this.escapeCssMeta(a) + "']").length && (r = o.attr("id"), l ? l.match(new RegExp("\\b" + this.escapeCssMeta(r) + "\\b")) || (l += " " + r) : l = r, u(e).attr("aria-describedby", l), (i = this.groups[e.name]) && (s = this, u.each(s.groups, function(e, t) {
                        t === i && u("[name='" + s.escapeCssMeta(e) + "']", s.currentForm).attr("aria-describedby", o.attr("id"))
                    })))), !t && this.settings.success && (o.text(""), "string" == typeof this.settings.success ? o.addClass(this.settings.success) : this.settings.success(o, e)), this.toShow = this.toShow.add(o)
                },
                errorsFor: function(e) {
                    var t = this.escapeCssMeta(this.idOrName(e)),
                        n = u(e).attr("aria-describedby"),
                        i = "label[for='" + t + "'], label[for='" + t + "'] *";
                    return n && (i = i + ", #" + this.escapeCssMeta(n).replace(/\s+/g, ", #")), this.errors().filter(i)
                },
                escapeCssMeta: function(e) {
                    return e.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
                },
                idOrName: function(e) {
                    return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
                },
                validationTargetFor: function(e) {
                    return this.checkable(e) && (e = this.findByName(e.name)), u(e).not(this.settings.ignore)[0]
                },
                checkable: function(e) {
                    return /radio|checkbox/i.test(e.type)
                },
                findByName: function(e) {
                    return u(this.currentForm).find("[name='" + this.escapeCssMeta(e) + "']")
                },
                getLength: function(e, t) {
                    switch (t.nodeName.toLowerCase()) {
                        case "select":
                            return u("option:selected", t).length;
                        case "input":
                            if (this.checkable(t)) return this.findByName(t.name).filter(":checked").length
                    }
                    return e.length
                },
                depend: function(e, t) {
                    return !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, t)
                },
                dependTypes: {
                    boolean: function(e) {
                        return e
                    },
                    string: function(e, t) {
                        return !!u(e, t.form).length
                    },
                    function: function(e, t) {
                        return e(t)
                    }
                },
                optional: function(e) {
                    var t = this.elementValue(e);
                    return !u.validator.methods.required.call(this, t, e) && "dependency-mismatch"
                },
                startRequest: function(e) {
                    this.pending[e.name] || (this.pendingRequest++, u(e).addClass(this.settings.pendingClass), this.pending[e.name] = !0)
                },
                stopRequest: function(e, t) {
                    this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], u(e).removeClass(this.settings.pendingClass), t && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (u(this.currentForm).submit(), this.submitButton && u("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !t && 0 === this.pendingRequest && this.formSubmitted && (u(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                },
                previousValue: function(e, t) {
                    return t = "string" == typeof t && t || "remote", u.data(e, "previousValue") || u.data(e, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(e, {
                            method: t
                        })
                    })
                },
                destroy: function() {
                    this.resetForm(), u(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")
                }
            },
            classRuleSettings: {
                required: {
                    required: !0
                },
                email: {
                    email: !0
                },
                url: {
                    url: !0
                },
                date: {
                    date: !0
                },
                dateISO: {
                    dateISO: !0
                },
                number: {
                    number: !0
                },
                digits: {
                    digits: !0
                },
                creditcard: {
                    creditcard: !0
                }
            },
            addClassRules: function(e, t) {
                e.constructor === String ? this.classRuleSettings[e] = t : u.extend(this.classRuleSettings, e)
            },
            classRules: function(e) {
                var t = {},
                    n = u(e).attr("class");
                return n && u.each(n.split(" "), function() {
                    this in u.validator.classRuleSettings && u.extend(t, u.validator.classRuleSettings[this])
                }), t
            },
            normalizeAttributeRule: function(e, t, n, i) {
                /min|max|step/.test(n) && (null === t || /number|range|text/.test(t)) && (i = Number(i), isNaN(i) && (i = void 0)), i || 0 === i ? e[n] = i : t === n && "range" !== t && (e[n] = !0)
            },
            attributeRules: function(e) {
                var t, n, i = {},
                    r = u(e),
                    s = e.getAttribute("type");
                for (t in u.validator.methods) "required" === t ? ("" === (n = e.getAttribute(t)) && (n = !0), n = !!n) : n = r.attr(t), this.normalizeAttributeRule(i, s, t, n);
                return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength, i
            },
            dataRules: function(e) {
                var t, n, i = {},
                    r = u(e),
                    s = e.getAttribute("type");
                for (t in u.validator.methods) "" === (n = r.data("rule" + t.charAt(0).toUpperCase() + t.substring(1).toLowerCase())) && (n = !0), this.normalizeAttributeRule(i, s, t, n);
                return i
            },
            staticRules: function(e) {
                var t = {},
                    n = u.data(e.form, "validator");
                return n.settings.rules && (t = u.validator.normalizeRule(n.settings.rules[e.name]) || {}), t
            },
            normalizeRules: function(i, r) {
                return u.each(i, function(e, t) {
                    if (!1 !== t) {
                        if (t.param || t.depends) {
                            var n = !0;
                            switch (typeof t.depends) {
                                case "string":
                                    n = !!u(t.depends, r.form).length;
                                    break;
                                case "function":
                                    n = t.depends.call(r, r)
                            }
                            n ? i[e] = void 0 === t.param || t.param : (u.data(r.form, "validator").resetElements(u(r)), delete i[e])
                        }
                    } else delete i[e]
                }), u.each(i, function(e, t) {
                    i[e] = u.isFunction(t) && "normalizer" !== e ? t(r) : t
                }), u.each(["minlength", "maxlength"], function() {
                    i[this] && (i[this] = Number(i[this]))
                }), u.each(["rangelength", "range"], function() {
                    var e;
                    i[this] && (u.isArray(i[this]) ? i[this] = [Number(i[this][0]), Number(i[this][1])] : "string" == typeof i[this] && (e = i[this].replace(/[\[\]]/g, "").split(/[\s,]+/), i[this] = [Number(e[0]), Number(e[1])]))
                }), u.validator.autoCreateRanges && (null != i.min && null != i.max && (i.range = [i.min, i.max], delete i.min, delete i.max), null != i.minlength && null != i.maxlength && (i.rangelength = [i.minlength, i.maxlength], delete i.minlength, delete i.maxlength)), i
            },
            normalizeRule: function(e) {
                if ("string" == typeof e) {
                    var t = {};
                    u.each(e.split(/\s/), function() {
                        t[this] = !0
                    }), e = t
                }
                return e
            },
            addMethod: function(e, t, n) {
                u.validator.methods[e] = t, u.validator.messages[e] = void 0 !== n ? n : u.validator.messages[e], t.length < 3 && u.validator.addClassRules(e, u.validator.normalizeRule(e))
            },
            methods: {
                required: function(e, t, n) {
                    if (!this.depend(n, t)) return "dependency-mismatch";
                    if ("select" === t.nodeName.toLowerCase()) {
                        var i = u(t).val();
                        return i && 0 < i.length
                    }
                    return this.checkable(t) ? 0 < this.getLength(e, t) : null != e && 0 < e.length
                },
                email: function(e, t) {
                    return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
                },
                url: function(e, t) {
                    return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(e)
                },
                date: (n = !1, function(e, t) {
                    return n || (n = !0, this.settings.debug && window.console && console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")), this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString())
                }),
                dateISO: function(e, t) {
                    return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)
                },
                number: function(e, t) {
                    return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
                },
                digits: function(e, t) {
                    return this.optional(t) || /^\d+$/.test(e)
                },
                minlength: function(e, t, n) {
                    var i = u.isArray(e) ? e.length : this.getLength(e, t);
                    return this.optional(t) || n <= i
                },
                maxlength: function(e, t, n) {
                    var i = u.isArray(e) ? e.length : this.getLength(e, t);
                    return this.optional(t) || i <= n
                },
                rangelength: function(e, t, n) {
                    var i = u.isArray(e) ? e.length : this.getLength(e, t);
                    return this.optional(t) || i >= n[0] && i <= n[1]
                },
                min: function(e, t, n) {
                    return this.optional(t) || n <= e
                },
                max: function(e, t, n) {
                    return this.optional(t) || e <= n
                },
                range: function(e, t, n) {
                    return this.optional(t) || e >= n[0] && e <= n[1]
                },
                step: function(e, t, n) {
                    var i, r = u(t).attr("type"),
                        s = "Step attribute on input type " + r + " is not supported.",
                        o = new RegExp("\\b" + r + "\\b"),
                        a = function(e) {
                            var t = ("" + e).match(/(?:\.(\d+))?$/);
                            return t && t[1] ? t[1].length : 0
                        },
                        l = function(e) {
                            return Math.round(e * Math.pow(10, i))
                        },
                        c = !0;
                    if (r && !o.test(["text", "number", "range"].join())) throw new Error(s);
                    return i = a(n), (a(e) > i || l(e) % l(n) != 0) && (c = !1), this.optional(t) || c
                },
                equalTo: function(e, t, n) {
                    var i = u(n);
                    return this.settings.onfocusout && i.not(".validate-equalTo-blur").length && i.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                        u(t).valid()
                    }), e === i.val()
                },
                remote: function(s, o, e, a) {
                    if (this.optional(o)) return "dependency-mismatch";
                    a = "string" == typeof a && a || "remote";
                    var l, t, n, c = this.previousValue(o, a);
                    return this.settings.messages[o.name] || (this.settings.messages[o.name] = {}), c.originalMessage = c.originalMessage || this.settings.messages[o.name][a], this.settings.messages[o.name][a] = c.message, e = "string" == typeof e && {
                        url: e
                    } || e, n = u.param(u.extend({
                        data: s
                    }, e.data)), c.old === n ? c.valid : (c.old = n, (l = this).startRequest(o), (t = {})[o.name] = s, u.ajax(u.extend(!0, {
                        mode: "abort",
                        port: "validate" + o.name,
                        dataType: "json",
                        data: t,
                        context: l.currentForm,
                        success: function(e) {
                            var t, n, i, r = !0 === e || "true" === e;
                            l.settings.messages[o.name][a] = c.originalMessage, r ? (i = l.formSubmitted, l.resetInternals(), l.toHide = l.errorsFor(o), l.formSubmitted = i, l.successList.push(o), l.invalid[o.name] = !1, l.showErrors()) : (t = {}, n = e || l.defaultMessage(o, {
                                method: a,
                                parameters: s
                            }), t[o.name] = c.message = n, l.invalid[o.name] = !0, l.showErrors(t)), c.valid = r, l.stopRequest(o, r)
                        }
                    }, e)), "pending")
                }
            }
        });
        var i, r = {};
        return u.ajaxPrefilter ? u.ajaxPrefilter(function(e, t, n) {
            var i = e.port;
            "abort" === e.mode && (r[i] && r[i].abort(), r[i] = n)
        }) : (i = u.ajax, u.ajax = function(e) {
            var t = ("mode" in e ? e : u.ajaxSettings).mode,
                n = ("port" in e ? e : u.ajaxSettings).port;
            return "abort" === t ? (r[n] && r[n].abort(), r[n] = i.apply(this, arguments), r[n]) : i.apply(this, arguments)
        }), u
    }),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t((e = e || self).bootstrap = {}, e.jQuery, e.Popper)
    }(this, function(e, f, d) {
        "use strict";

        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function o(e, t, n) {
            return t && i(e.prototype, t), n && i(e, n), e
        }

        function l(r) {
            for (var e = 1; e < arguments.length; e++) {
                var s = null != arguments[e] ? arguments[e] : {},
                    t = Object.keys(s);
                "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(s).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(s, e).enumerable
                }))), t.forEach(function(e) {
                    var t, n, i;
                    t = r, i = s[n = e], n in t ? Object.defineProperty(t, n, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[n] = i
                })
            }
            return r
        }
        f = f && f.hasOwnProperty("default") ? f.default : f, d = d && d.hasOwnProperty("default") ? d.default : d;
        var t = "transitionend";

        function n(e) {
            var t = this,
                n = !1;
            return f(this).one(m.TRANSITION_END, function() {
                n = !0
            }), setTimeout(function() {
                n || m.triggerTransitionEnd(t)
            }, e), this
        }
        var m = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function(e) {
                for (; e += ~~(1e6 * Math.random()), document.getElementById(e););
                return e
            },
            getSelectorFromElement: function(e) {
                var t = e.getAttribute("data-target");
                if (!t || "#" === t) {
                    var n = e.getAttribute("href");
                    t = n && "#" !== n ? n.trim() : ""
                }
                try {
                    return document.querySelector(t) ? t : null
                } catch (e) {
                    return null
                }
            },
            getTransitionDurationFromElement: function(e) {
                if (!e) return 0;
                var t = f(e).css("transition-duration"),
                    n = f(e).css("transition-delay"),
                    i = parseFloat(t),
                    r = parseFloat(n);
                return i || r ? (t = t.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(t) + parseFloat(n))) : 0
            },
            reflow: function(e) {
                return e.offsetHeight
            },
            triggerTransitionEnd: function(e) {
                f(e).trigger(t)
            },
            supportsTransitionEnd: function() {
                return Boolean(t)
            },
            isElement: function(e) {
                return (e[0] || e).nodeType
            },
            typeCheckConfig: function(e, t, n) {
                for (var i in n)
                    if (Object.prototype.hasOwnProperty.call(n, i)) {
                        var r = n[i],
                            s = t[i],
                            o = s && m.isElement(s) ? "element" : (a = s, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                        if (!new RegExp(r).test(o)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + o + '" but expected type "' + r + '".')
                    }
                var a
            },
            findShadowRoot: function(e) {
                if (!document.documentElement.attachShadow) return null;
                if ("function" == typeof e.getRootNode) {
                    var t = e.getRootNode();
                    return t instanceof ShadowRoot ? t : null
                }
                return e instanceof ShadowRoot ? e : e.parentNode ? m.findShadowRoot(e.parentNode) : null
            }
        };
        f.fn.emulateTransitionEnd = n, f.event.special[m.TRANSITION_END] = {
            bindType: t,
            delegateType: t,
            handle: function(e) {
                if (f(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        };
        var r = "alert",
            s = "bs.alert",
            a = "." + s,
            c = f.fn[r],
            u = {
                CLOSE: "close" + a,
                CLOSED: "closed" + a,
                CLICK_DATA_API: "click" + a + ".data-api"
            },
            h = "alert",
            p = "fade",
            v = "show",
            g = function() {
                function i(e) {
                    this._element = e
                }
                var e = i.prototype;
                return e.close = function(e) {
                    var t = this._element;
                    e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
                }, e.dispose = function() {
                    f.removeData(this._element, s), this._element = null
                }, e._getRootElement = function(e) {
                    var t = m.getSelectorFromElement(e),
                        n = !1;
                    return t && (n = document.querySelector(t)), n || (n = f(e).closest("." + h)[0]), n
                }, e._triggerCloseEvent = function(e) {
                    var t = f.Event(u.CLOSE);
                    return f(e).trigger(t), t
                }, e._removeElement = function(t) {
                    var n = this;
                    if (f(t).removeClass(v), f(t).hasClass(p)) {
                        var e = m.getTransitionDurationFromElement(t);
                        f(t).one(m.TRANSITION_END, function(e) {
                            return n._destroyElement(t, e)
                        }).emulateTransitionEnd(e)
                    } else this._destroyElement(t)
                }, e._destroyElement = function(e) {
                    f(e).detach().trigger(u.CLOSED).remove()
                }, i._jQueryInterface = function(n) {
                    return this.each(function() {
                        var e = f(this),
                            t = e.data(s);
                        t || (t = new i(this), e.data(s, t)), "close" === n && t[n](this)
                    })
                }, i._handleDismiss = function(t) {
                    return function(e) {
                        e && e.preventDefault(), t.close(this)
                    }
                }, o(i, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.3.1"
                    }
                }]), i
            }();
        f(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g)), f.fn[r] = g._jQueryInterface, f.fn[r].Constructor = g, f.fn[r].noConflict = function() {
            return f.fn[r] = c, g._jQueryInterface
        };
        var y = "button",
            b = "bs.button",
            w = "." + b,
            x = ".data-api",
            E = f.fn[y],
            T = "active",
            S = "btn",
            C = "focus",
            _ = '[data-toggle^="button"]',
            k = '[data-toggle="buttons"]',
            A = 'input:not([type="hidden"])',
            D = ".active",
            O = ".btn",
            M = {
                CLICK_DATA_API: "click" + w + x,
                FOCUS_BLUR_DATA_API: "focus" + w + x + " blur" + w + x
            },
            I = function() {
                function n(e) {
                    this._element = e
                }
                var e = n.prototype;
                return e.toggle = function() {
                    var e = !0,
                        t = !0,
                        n = f(this._element).closest(k)[0];
                    if (n) {
                        var i = this._element.querySelector(A);
                        if (i) {
                            if ("radio" === i.type)
                                if (i.checked && this._element.classList.contains(T)) e = !1;
                                else {
                                    var r = n.querySelector(D);
                                    r && f(r).removeClass(T)
                                }
                            if (e) {
                                if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                                i.checked = !this._element.classList.contains(T), f(i).trigger("change")
                            }
                            i.focus(), t = !1
                        }
                    }
                    t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(T)), e && f(this._element).toggleClass(T)
                }, e.dispose = function() {
                    f.removeData(this._element, b), this._element = null
                }, n._jQueryInterface = function(t) {
                    return this.each(function() {
                        var e = f(this).data(b);
                        e || (e = new n(this), f(this).data(b, e)), "toggle" === t && e[t]()
                    })
                }, o(n, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.3.1"
                    }
                }]), n
            }();
        f(document).on(M.CLICK_DATA_API, _, function(e) {
            e.preventDefault();
            var t = e.target;
            f(t).hasClass(S) || (t = f(t).closest(O)), I._jQueryInterface.call(f(t), "toggle")
        }).on(M.FOCUS_BLUR_DATA_API, _, function(e) {
            var t = f(e.target).closest(O)[0];
            f(t).toggleClass(C, /^focus(in)?$/.test(e.type))
        }), f.fn[y] = I._jQueryInterface, f.fn[y].Constructor = I, f.fn[y].noConflict = function() {
            return f.fn[y] = E, I._jQueryInterface
        };
        var P = "carousel",
            L = "bs.carousel",
            N = "." + L,
            j = f.fn[P],
            z = {
                interval: 5e3,
                keyboard: !0,
                slide: !1,
                pause: "hover",
                wrap: !0,
                touch: !0
            },
            H = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                slide: "(boolean|string)",
                pause: "(string|boolean)",
                wrap: "boolean",
                touch: "boolean"
            },
            q = "next",
            R = "prev",
            $ = "left",
            B = "right",
            F = {
                SLIDE: "slide" + N,
                SLID: "slid" + N,
                KEYDOWN: "keydown" + N,
                MOUSEENTER: "mouseenter" + N,
                MOUSELEAVE: "mouseleave" + N,
                TOUCHSTART: "touchstart" + N,
                TOUCHMOVE: "touchmove" + N,
                TOUCHEND: "touchend" + N,
                POINTERDOWN: "pointerdown" + N,
                POINTERUP: "pointerup" + N,
                DRAG_START: "dragstart" + N,
                LOAD_DATA_API: "load" + N + ".data-api",
                CLICK_DATA_API: "click" + N + ".data-api"
            },
            W = "carousel",
            V = "active",
            Y = "slide",
            X = "carousel-item-right",
            G = "carousel-item-left",
            U = "carousel-item-next",
            Q = "carousel-item-prev",
            K = "pointer-event",
            Z = {
                ACTIVE: ".active",
                ACTIVE_ITEM: ".active.carousel-item",
                ITEM: ".carousel-item",
                ITEM_IMG: ".carousel-item img",
                NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                INDICATORS: ".carousel-indicators",
                DATA_SLIDE: "[data-slide], [data-slide-to]",
                DATA_RIDE: '[data-ride="carousel"]'
            },
            J = {
                TOUCH: "touch",
                PEN: "pen"
            },
            ee = function() {
                function s(e, t) {
                    this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(Z.INDICATORS), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
                }
                var e = s.prototype;
                return e.next = function() {
                    this._isSliding || this._slide(q)
                }, e.nextWhenVisible = function() {
                    !document.hidden && f(this._element).is(":visible") && "hidden" !== f(this._element).css("visibility") && this.next()
                }, e.prev = function() {
                    this._isSliding || this._slide(R)
                }, e.pause = function(e) {
                    e || (this._isPaused = !0), this._element.querySelector(Z.NEXT_PREV) && (m.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                }, e.cycle = function(e) {
                    e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                }, e.to = function(e) {
                    var t = this;
                    this._activeElement = this._element.querySelector(Z.ACTIVE_ITEM);
                    var n = this._getItemIndex(this._activeElement);
                    if (!(e > this._items.length - 1 || e < 0))
                        if (this._isSliding) f(this._element).one(F.SLID, function() {
                            return t.to(e)
                        });
                        else {
                            if (n === e) return this.pause(), void this.cycle();
                            var i = n < e ? q : R;
                            this._slide(i, this._items[e])
                        }
                }, e.dispose = function() {
                    f(this._element).off(N), f.removeData(this._element, L), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                }, e._getConfig = function(e) {
                    return e = l({}, z, e), m.typeCheckConfig(P, e, H), e
                }, e._handleSwipe = function() {
                    var e = Math.abs(this.touchDeltaX);
                    if (!(e <= 40)) {
                        var t = e / this.touchDeltaX;
                        0 < t && this.prev(), t < 0 && this.next()
                    }
                }, e._addEventListeners = function() {
                    var t = this;
                    this._config.keyboard && f(this._element).on(F.KEYDOWN, function(e) {
                        return t._keydown(e)
                    }), "hover" === this._config.pause && f(this._element).on(F.MOUSEENTER, function(e) {
                        return t.pause(e)
                    }).on(F.MOUSELEAVE, function(e) {
                        return t.cycle(e)
                    }), this._config.touch && this._addTouchEventListeners()
                }, e._addTouchEventListeners = function() {
                    var n = this;
                    if (this._touchSupported) {
                        var t = function(e) {
                                n._pointerEvent && J[e.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = e.originalEvent.clientX : n._pointerEvent || (n.touchStartX = e.originalEvent.touches[0].clientX)
                            },
                            i = function(e) {
                                n._pointerEvent && J[e.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = e.originalEvent.clientX - n.touchStartX), n._handleSwipe(), "hover" === n._config.pause && (n.pause(), n.touchTimeout && clearTimeout(n.touchTimeout), n.touchTimeout = setTimeout(function(e) {
                                    return n.cycle(e)
                                }, 500 + n._config.interval))
                            };
                        f(this._element.querySelectorAll(Z.ITEM_IMG)).on(F.DRAG_START, function(e) {
                            return e.preventDefault()
                        }), this._pointerEvent ? (f(this._element).on(F.POINTERDOWN, function(e) {
                            return t(e)
                        }), f(this._element).on(F.POINTERUP, function(e) {
                            return i(e)
                        }), this._element.classList.add(K)) : (f(this._element).on(F.TOUCHSTART, function(e) {
                            return t(e)
                        }), f(this._element).on(F.TOUCHMOVE, function(e) {
                            var t;
                            (t = e).originalEvent.touches && 1 < t.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = t.originalEvent.touches[0].clientX - n.touchStartX
                        }), f(this._element).on(F.TOUCHEND, function(e) {
                            return i(e)
                        }))
                    }
                }, e._keydown = function(e) {
                    if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                        case 37:
                            e.preventDefault(), this.prev();
                            break;
                        case 39:
                            e.preventDefault(), this.next()
                    }
                }, e._getItemIndex = function(e) {
                    return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(Z.ITEM)) : [], this._items.indexOf(e)
                }, e._getItemByDirection = function(e, t) {
                    var n = e === q,
                        i = e === R,
                        r = this._getItemIndex(t),
                        s = this._items.length - 1;
                    if ((i && 0 === r || n && r === s) && !this._config.wrap) return t;
                    var o = (r + (e === R ? -1 : 1)) % this._items.length;
                    return -1 === o ? this._items[this._items.length - 1] : this._items[o]
                }, e._triggerSlideEvent = function(e, t) {
                    var n = this._getItemIndex(e),
                        i = this._getItemIndex(this._element.querySelector(Z.ACTIVE_ITEM)),
                        r = f.Event(F.SLIDE, {
                            relatedTarget: e,
                            direction: t,
                            from: i,
                            to: n
                        });
                    return f(this._element).trigger(r), r
                }, e._setActiveIndicatorElement = function(e) {
                    if (this._indicatorsElement) {
                        var t = [].slice.call(this._indicatorsElement.querySelectorAll(Z.ACTIVE));
                        f(t).removeClass(V);
                        var n = this._indicatorsElement.children[this._getItemIndex(e)];
                        n && f(n).addClass(V)
                    }
                }, e._slide = function(e, t) {
                    var n, i, r, s = this,
                        o = this._element.querySelector(Z.ACTIVE_ITEM),
                        a = this._getItemIndex(o),
                        l = t || o && this._getItemByDirection(e, o),
                        c = this._getItemIndex(l),
                        u = Boolean(this._interval);
                    if (e === q ? (n = G, i = U, r = $) : (n = X, i = Q, r = B), l && f(l).hasClass(V)) this._isSliding = !1;
                    else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && o && l) {
                        this._isSliding = !0, u && this.pause(), this._setActiveIndicatorElement(l);
                        var d = f.Event(F.SLID, {
                            relatedTarget: l,
                            direction: r,
                            from: a,
                            to: c
                        });
                        if (f(this._element).hasClass(Y)) {
                            f(l).addClass(i), m.reflow(l), f(o).addClass(n), f(l).addClass(n);
                            var h = parseInt(l.getAttribute("data-interval"), 10);
                            h ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = h) : this._config.interval = this._config.defaultInterval || this._config.interval;
                            var p = m.getTransitionDurationFromElement(o);
                            f(o).one(m.TRANSITION_END, function() {
                                f(l).removeClass(n + " " + i).addClass(V), f(o).removeClass(V + " " + i + " " + n), s._isSliding = !1, setTimeout(function() {
                                    return f(s._element).trigger(d)
                                }, 0)
                            }).emulateTransitionEnd(p)
                        } else f(o).removeClass(V), f(l).addClass(V), this._isSliding = !1, f(this._element).trigger(d);
                        u && this.cycle()
                    }
                }, s._jQueryInterface = function(i) {
                    return this.each(function() {
                        var e = f(this).data(L),
                            t = l({}, z, f(this).data());
                        "object" == typeof i && (t = l({}, t, i));
                        var n = "string" == typeof i ? i : t.slide;
                        if (e || (e = new s(this, t), f(this).data(L, e)), "number" == typeof i) e.to(i);
                        else if ("string" == typeof n) {
                            if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                            e[n]()
                        } else t.interval && t.ride && (e.pause(), e.cycle())
                    })
                }, s._dataApiClickHandler = function(e) {
                    var t = m.getSelectorFromElement(this);
                    if (t) {
                        var n = f(t)[0];
                        if (n && f(n).hasClass(W)) {
                            var i = l({}, f(n).data(), f(this).data()),
                                r = this.getAttribute("data-slide-to");
                            r && (i.interval = !1), s._jQueryInterface.call(f(n), i), r && f(n).data(L).to(r), e.preventDefault()
                        }
                    }
                }, o(s, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.3.1"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return z
                    }
                }]), s
            }();
        f(document).on(F.CLICK_DATA_API, Z.DATA_SLIDE, ee._dataApiClickHandler), f(window).on(F.LOAD_DATA_API, function() {
            for (var e = [].slice.call(document.querySelectorAll(Z.DATA_RIDE)), t = 0, n = e.length; t < n; t++) {
                var i = f(e[t]);
                ee._jQueryInterface.call(i, i.data())
            }
        }), f.fn[P] = ee._jQueryInterface, f.fn[P].Constructor = ee, f.fn[P].noConflict = function() {
            return f.fn[P] = j, ee._jQueryInterface
        };
        var te = "collapse",
            ne = "bs.collapse",
            ie = "." + ne,
            re = f.fn[te],
            se = {
                toggle: !0,
                parent: ""
            },
            oe = {
                toggle: "boolean",
                parent: "(string|element)"
            },
            ae = {
                SHOW: "show" + ie,
                SHOWN: "shown" + ie,
                HIDE: "hide" + ie,
                HIDDEN: "hidden" + ie,
                CLICK_DATA_API: "click" + ie + ".data-api"
            },
            le = "show",
            ce = "collapse",
            ue = "collapsing",
            de = "collapsed",
            he = "width",
            pe = "height",
            fe = {
                ACTIVES: ".show, .collapsing",
                DATA_TOGGLE: '[data-toggle="collapse"]'
            },
            me = function() {
                function a(t, e) {
                    this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                    for (var n = [].slice.call(document.querySelectorAll(fe.DATA_TOGGLE)), i = 0, r = n.length; i < r; i++) {
                        var s = n[i],
                            o = m.getSelectorFromElement(s),
                            a = [].slice.call(document.querySelectorAll(o)).filter(function(e) {
                                return e === t
                            });
                        null !== o && 0 < a.length && (this._selector = o, this._triggerArray.push(s))
                    }
                    this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                }
                var e = a.prototype;
                return e.toggle = function() {
                    f(this._element).hasClass(le) ? this.hide() : this.show()
                }, e.show = function() {
                    var e, t, n = this;
                    if (!this._isTransitioning && !f(this._element).hasClass(le) && (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(fe.ACTIVES)).filter(function(e) {
                            return "string" == typeof n._config.parent ? e.getAttribute("data-parent") === n._config.parent : e.classList.contains(ce)
                        })).length && (e = null), !(e && (t = f(e).not(this._selector).data(ne)) && t._isTransitioning))) {
                        var i = f.Event(ae.SHOW);
                        if (f(this._element).trigger(i), !i.isDefaultPrevented()) {
                            e && (a._jQueryInterface.call(f(e).not(this._selector), "hide"), t || f(e).data(ne, null));
                            var r = this._getDimension();
                            f(this._element).removeClass(ce).addClass(ue), this._element.style[r] = 0, this._triggerArray.length && f(this._triggerArray).removeClass(de).attr("aria-expanded", !0), this.setTransitioning(!0);
                            var s = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                                o = m.getTransitionDurationFromElement(this._element);
                            f(this._element).one(m.TRANSITION_END, function() {
                                f(n._element).removeClass(ue).addClass(ce).addClass(le), n._element.style[r] = "", n.setTransitioning(!1), f(n._element).trigger(ae.SHOWN)
                            }).emulateTransitionEnd(o), this._element.style[r] = this._element[s] + "px"
                        }
                    }
                }, e.hide = function() {
                    var e = this;
                    if (!this._isTransitioning && f(this._element).hasClass(le)) {
                        var t = f.Event(ae.HIDE);
                        if (f(this._element).trigger(t), !t.isDefaultPrevented()) {
                            var n = this._getDimension();
                            this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", m.reflow(this._element), f(this._element).addClass(ue).removeClass(ce).removeClass(le);
                            var i = this._triggerArray.length;
                            if (0 < i)
                                for (var r = 0; r < i; r++) {
                                    var s = this._triggerArray[r],
                                        o = m.getSelectorFromElement(s);
                                    if (null !== o) f([].slice.call(document.querySelectorAll(o))).hasClass(le) || f(s).addClass(de).attr("aria-expanded", !1)
                                }
                            this.setTransitioning(!0);
                            this._element.style[n] = "";
                            var a = m.getTransitionDurationFromElement(this._element);
                            f(this._element).one(m.TRANSITION_END, function() {
                                e.setTransitioning(!1), f(e._element).removeClass(ue).addClass(ce).trigger(ae.HIDDEN)
                            }).emulateTransitionEnd(a)
                        }
                    }
                }, e.setTransitioning = function(e) {
                    this._isTransitioning = e
                }, e.dispose = function() {
                    f.removeData(this._element, ne), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                }, e._getConfig = function(e) {
                    return (e = l({}, se, e)).toggle = Boolean(e.toggle), m.typeCheckConfig(te, e, oe), e
                }, e._getDimension = function() {
                    return f(this._element).hasClass(he) ? he : pe
                }, e._getParent = function() {
                    var e, n = this;
                    m.isElement(this._config.parent) ? (e = this._config.parent, void 0 !== this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
                    var t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                        i = [].slice.call(e.querySelectorAll(t));
                    return f(i).each(function(e, t) {
                        n._addAriaAndCollapsedClass(a._getTargetFromElement(t), [t])
                    }), e
                }, e._addAriaAndCollapsedClass = function(e, t) {
                    var n = f(e).hasClass(le);
                    t.length && f(t).toggleClass(de, !n).attr("aria-expanded", n)
                }, a._getTargetFromElement = function(e) {
                    var t = m.getSelectorFromElement(e);
                    return t ? document.querySelector(t) : null
                }, a._jQueryInterface = function(i) {
                    return this.each(function() {
                        var e = f(this),
                            t = e.data(ne),
                            n = l({}, se, e.data(), "object" == typeof i && i ? i : {});
                        if (!t && n.toggle && /show|hide/.test(i) && (n.toggle = !1), t || (t = new a(this, n), e.data(ne, t)), "string" == typeof i) {
                            if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
                            t[i]()
                        }
                    })
                }, o(a, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.3.1"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return se
                    }
                }]), a
            }();
        f(document).on(ae.CLICK_DATA_API, fe.DATA_TOGGLE, function(e) {
            "A" === e.currentTarget.tagName && e.preventDefault();
            var n = f(this),
                t = m.getSelectorFromElement(this),
                i = [].slice.call(document.querySelectorAll(t));
            f(i).each(function() {
                var e = f(this),
                    t = e.data(ne) ? "toggle" : n.data();
                me._jQueryInterface.call(e, t)
            })
        }), f.fn[te] = me._jQueryInterface, f.fn[te].Constructor = me, f.fn[te].noConflict = function() {
            return f.fn[te] = re, me._jQueryInterface
        };
        var ve = "dropdown",
            ge = "bs.dropdown",
            ye = "." + ge,
            be = ".data-api",
            we = f.fn[ve],
            xe = new RegExp("38|40|27"),
            Ee = {
                HIDE: "hide" + ye,
                HIDDEN: "hidden" + ye,
                SHOW: "show" + ye,
                SHOWN: "shown" + ye,
                CLICK: "click" + ye,
                CLICK_DATA_API: "click" + ye + be,
                KEYDOWN_DATA_API: "keydown" + ye + be,
                KEYUP_DATA_API: "keyup" + ye + be
            },
            Te = "disabled",
            Se = "show",
            Ce = "dropup",
            _e = "dropright",
            ke = "dropleft",
            Ae = "dropdown-menu-right",
            De = "position-static",
            Oe = '[data-toggle="dropdown"]',
            Me = ".dropdown form",
            Ie = ".dropdown-menu",
            Pe = ".navbar-nav",
            Le = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
            Ne = "top-start",
            je = "top-end",
            ze = "bottom-start",
            He = "bottom-end",
            qe = "right-start",
            Re = "left-start",
            $e = {
                offset: 0,
                flip: !0,
                boundary: "scrollParent",
                reference: "toggle",
                display: "dynamic"
            },
            Be = {
                offset: "(number|string|function)",
                flip: "boolean",
                boundary: "(string|element)",
                reference: "(string|element)",
                display: "string"
            },
            Fe = function() {
                function c(e, t) {
                    this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                }
                var e = c.prototype;
                return e.toggle = function() {
                    if (!this._element.disabled && !f(this._element).hasClass(Te)) {
                        var e = c._getParentFromElement(this._element),
                            t = f(this._menu).hasClass(Se);
                        if (c._clearMenus(), !t) {
                            var n = {
                                    relatedTarget: this._element
                                },
                                i = f.Event(Ee.SHOW, n);
                            if (f(e).trigger(i), !i.isDefaultPrevented()) {
                                if (!this._inNavbar) {
                                    if (void 0 === d) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                    var r = this._element;
                                    "parent" === this._config.reference ? r = e : m.isElement(this._config.reference) && (r = this._config.reference, void 0 !== this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && f(e).addClass(De), this._popper = new d(r, this._menu, this._getPopperConfig())
                                }
                                "ontouchstart" in document.documentElement && 0 === f(e).closest(Pe).length && f(document.body).children().on("mouseover", null, f.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), f(this._menu).toggleClass(Se), f(e).toggleClass(Se).trigger(f.Event(Ee.SHOWN, n))
                            }
                        }
                    }
                }, e.show = function() {
                    if (!(this._element.disabled || f(this._element).hasClass(Te) || f(this._menu).hasClass(Se))) {
                        var e = {
                                relatedTarget: this._element
                            },
                            t = f.Event(Ee.SHOW, e),
                            n = c._getParentFromElement(this._element);
                        f(n).trigger(t), t.isDefaultPrevented() || (f(this._menu).toggleClass(Se), f(n).toggleClass(Se).trigger(f.Event(Ee.SHOWN, e)))
                    }
                }, e.hide = function() {
                    if (!this._element.disabled && !f(this._element).hasClass(Te) && f(this._menu).hasClass(Se)) {
                        var e = {
                                relatedTarget: this._element
                            },
                            t = f.Event(Ee.HIDE, e),
                            n = c._getParentFromElement(this._element);
                        f(n).trigger(t), t.isDefaultPrevented() || (f(this._menu).toggleClass(Se), f(n).toggleClass(Se).trigger(f.Event(Ee.HIDDEN, e)))
                    }
                }, e.dispose = function() {
                    f.removeData(this._element, ge), f(this._element).off(ye), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
                }, e.update = function() {
                    this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                }, e._addEventListeners = function() {
                    var t = this;
                    f(this._element).on(Ee.CLICK, function(e) {
                        e.preventDefault(), e.stopPropagation(), t.toggle()
                    })
                }, e._getConfig = function(e) {
                    return e = l({}, this.constructor.Default, f(this._element).data(), e), m.typeCheckConfig(ve, e, this.constructor.DefaultType), e
                }, e._getMenuElement = function() {
                    if (!this._menu) {
                        var e = c._getParentFromElement(this._element);
                        e && (this._menu = e.querySelector(Ie))
                    }
                    return this._menu
                }, e._getPlacement = function() {
                    var e = f(this._element.parentNode),
                        t = ze;
                    return e.hasClass(Ce) ? (t = Ne, f(this._menu).hasClass(Ae) && (t = je)) : e.hasClass(_e) ? t = qe : e.hasClass(ke) ? t = Re : f(this._menu).hasClass(Ae) && (t = He), t
                }, e._detectNavbar = function() {
                    return 0 < f(this._element).closest(".navbar").length
                }, e._getOffset = function() {
                    var t = this,
                        e = {};
                    return "function" == typeof this._config.offset ? e.fn = function(e) {
                        return e.offsets = l({}, e.offsets, t._config.offset(e.offsets, t._element) || {}), e
                    } : e.offset = this._config.offset, e
                }, e._getPopperConfig = function() {
                    var e = {
                        placement: this._getPlacement(),
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {
                                enabled: this._config.flip
                            },
                            preventOverflow: {
                                boundariesElement: this._config.boundary
                            }
                        }
                    };
                    return "static" === this._config.display && (e.modifiers.applyStyle = {
                        enabled: !1
                    }), e
                }, c._jQueryInterface = function(t) {
                    return this.each(function() {
                        var e = f(this).data(ge);
                        if (e || (e = new c(this, "object" == typeof t ? t : null), f(this).data(ge, e)), "string" == typeof t) {
                            if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                            e[t]()
                        }
                    })
                }, c._clearMenus = function(e) {
                    if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                        for (var t = [].slice.call(document.querySelectorAll(Oe)), n = 0, i = t.length; n < i; n++) {
                            var r = c._getParentFromElement(t[n]),
                                s = f(t[n]).data(ge),
                                o = {
                                    relatedTarget: t[n]
                                };
                            if (e && "click" === e.type && (o.clickEvent = e), s) {
                                var a = s._menu;
                                if (f(r).hasClass(Se) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && f.contains(r, e.target))) {
                                    var l = f.Event(Ee.HIDE, o);
                                    f(r).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && f(document.body).children().off("mouseover", null, f.noop), t[n].setAttribute("aria-expanded", "false"), f(a).removeClass(Se), f(r).removeClass(Se).trigger(f.Event(Ee.HIDDEN, o)))
                                }
                            }
                        }
                }, c._getParentFromElement = function(e) {
                    var t, n = m.getSelectorFromElement(e);
                    return n && (t = document.querySelector(n)), t || e.parentNode
                }, c._dataApiKeydownHandler = function(e) {
                    if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || f(e.target).closest(Ie).length)) : xe.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !f(this).hasClass(Te))) {
                        var t = c._getParentFromElement(this),
                            n = f(t).hasClass(Se);
                        if (n && (!n || 27 !== e.which && 32 !== e.which)) {
                            var i = [].slice.call(t.querySelectorAll(Le));
                            if (0 !== i.length) {
                                var r = i.indexOf(e.target);
                                38 === e.which && 0 < r && r--, 40 === e.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus()
                            }
                        } else {
                            if (27 === e.which) {
                                var s = t.querySelector(Oe);
                                f(s).trigger("focus")
                            }
                            f(this).trigger("click")
                        }
                    }
                }, o(c, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.3.1"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return $e
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return Be
                    }
                }]), c
            }();
        f(document).on(Ee.KEYDOWN_DATA_API, Oe, Fe._dataApiKeydownHandler).on(Ee.KEYDOWN_DATA_API, Ie, Fe._dataApiKeydownHandler).on(Ee.CLICK_DATA_API + " " + Ee.KEYUP_DATA_API, Fe._clearMenus).on(Ee.CLICK_DATA_API, Oe, function(e) {
            e.preventDefault(), e.stopPropagation(), Fe._jQueryInterface.call(f(this), "toggle")
        }).on(Ee.CLICK_DATA_API, Me, function(e) {
            e.stopPropagation()
        }), f.fn[ve] = Fe._jQueryInterface, f.fn[ve].Constructor = Fe, f.fn[ve].noConflict = function() {
            return f.fn[ve] = we, Fe._jQueryInterface
        };
        var We = "modal",
            Ve = "bs.modal",
            Ye = "." + Ve,
            Xe = f.fn[We],
            Ge = {
                backdrop: !0,
                keyboard: !0,
                focus: !0,
                show: !0
            },
            Ue = {
                backdrop: "(boolean|string)",
                keyboard: "boolean",
                focus: "boolean",
                show: "boolean"
            },
            Qe = {
                HIDE: "hide" + Ye,
                HIDDEN: "hidden" + Ye,
                SHOW: "show" + Ye,
                SHOWN: "shown" + Ye,
                FOCUSIN: "focusin" + Ye,
                RESIZE: "resize" + Ye,
                CLICK_DISMISS: "click.dismiss" + Ye,
                KEYDOWN_DISMISS: "keydown.dismiss" + Ye,
                MOUSEUP_DISMISS: "mouseup.dismiss" + Ye,
                MOUSEDOWN_DISMISS: "mousedown.dismiss" + Ye,
                CLICK_DATA_API: "click" + Ye + ".data-api"
            },
            Ke = "modal-dialog-scrollable",
            Ze = "modal-scrollbar-measure",
            Je = "modal-backdrop",
            et = "modal-open",
            tt = "fade",
            nt = "show",
            it = {
                DIALOG: ".modal-dialog",
                MODAL_BODY: ".modal-body",
                DATA_TOGGLE: '[data-toggle="modal"]',
                DATA_DISMISS: '[data-dismiss="modal"]',
                FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                STICKY_CONTENT: ".sticky-top"
            },
            rt = function() {
                function r(e, t) {
                    this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(it.DIALOG), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
                }
                var e = r.prototype;
                return e.toggle = function(e) {
                    return this._isShown ? this.hide() : this.show(e)
                }, e.show = function(e) {
                    var t = this;
                    if (!this._isShown && !this._isTransitioning) {
                        f(this._element).hasClass(tt) && (this._isTransitioning = !0);
                        var n = f.Event(Qe.SHOW, {
                            relatedTarget: e
                        });
                        f(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), f(this._element).on(Qe.CLICK_DISMISS, it.DATA_DISMISS, function(e) {
                            return t.hide(e)
                        }), f(this._dialog).on(Qe.MOUSEDOWN_DISMISS, function() {
                            f(t._element).one(Qe.MOUSEUP_DISMISS, function(e) {
                                f(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                            })
                        }), this._showBackdrop(function() {
                            return t._showElement(e)
                        }))
                    }
                }, e.hide = function(e) {
                    var t = this;
                    if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                        var n = f.Event(Qe.HIDE);
                        if (f(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                            this._isShown = !1;
                            var i = f(this._element).hasClass(tt);
                            if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), f(document).off(Qe.FOCUSIN), f(this._element).removeClass(nt), f(this._element).off(Qe.CLICK_DISMISS), f(this._dialog).off(Qe.MOUSEDOWN_DISMISS), i) {
                                var r = m.getTransitionDurationFromElement(this._element);
                                f(this._element).one(m.TRANSITION_END, function(e) {
                                    return t._hideModal(e)
                                }).emulateTransitionEnd(r)
                            } else this._hideModal()
                        }
                    }
                }, e.dispose = function() {
                    [window, this._element, this._dialog].forEach(function(e) {
                        return f(e).off(Ye)
                    }), f(document).off(Qe.FOCUSIN), f.removeData(this._element, Ve), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
                }, e.handleUpdate = function() {
                    this._adjustDialog()
                }, e._getConfig = function(e) {
                    return e = l({}, Ge, e), m.typeCheckConfig(We, e, Ue), e
                }, e._showElement = function(e) {
                    var t = this,
                        n = f(this._element).hasClass(tt);
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), f(this._dialog).hasClass(Ke) ? this._dialog.querySelector(it.MODAL_BODY).scrollTop = 0 : this._element.scrollTop = 0, n && m.reflow(this._element), f(this._element).addClass(nt), this._config.focus && this._enforceFocus();
                    var i = f.Event(Qe.SHOWN, {
                            relatedTarget: e
                        }),
                        r = function() {
                            t._config.focus && t._element.focus(), t._isTransitioning = !1, f(t._element).trigger(i)
                        };
                    if (n) {
                        var s = m.getTransitionDurationFromElement(this._dialog);
                        f(this._dialog).one(m.TRANSITION_END, r).emulateTransitionEnd(s)
                    } else r()
                }, e._enforceFocus = function() {
                    var t = this;
                    f(document).off(Qe.FOCUSIN).on(Qe.FOCUSIN, function(e) {
                        document !== e.target && t._element !== e.target && 0 === f(t._element).has(e.target).length && t._element.focus()
                    })
                }, e._setEscapeEvent = function() {
                    var t = this;
                    this._isShown && this._config.keyboard ? f(this._element).on(Qe.KEYDOWN_DISMISS, function(e) {
                        27 === e.which && (e.preventDefault(), t.hide())
                    }) : this._isShown || f(this._element).off(Qe.KEYDOWN_DISMISS)
                }, e._setResizeEvent = function() {
                    var t = this;
                    this._isShown ? f(window).on(Qe.RESIZE, function(e) {
                        return t.handleUpdate(e)
                    }) : f(window).off(Qe.RESIZE)
                }, e._hideModal = function() {
                    var e = this;
                    this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function() {
                        f(document.body).removeClass(et), e._resetAdjustments(), e._resetScrollbar(), f(e._element).trigger(Qe.HIDDEN)
                    })
                }, e._removeBackdrop = function() {
                    this._backdrop && (f(this._backdrop).remove(), this._backdrop = null)
                }, e._showBackdrop = function(e) {
                    var t = this,
                        n = f(this._element).hasClass(tt) ? tt : "";
                    if (this._isShown && this._config.backdrop) {
                        if (this._backdrop = document.createElement("div"), this._backdrop.className = Je, n && this._backdrop.classList.add(n), f(this._backdrop).appendTo(document.body), f(this._element).on(Qe.CLICK_DISMISS, function(e) {
                                t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide())
                            }), n && m.reflow(this._backdrop), f(this._backdrop).addClass(nt), !e) return;
                        if (!n) return void e();
                        var i = m.getTransitionDurationFromElement(this._backdrop);
                        f(this._backdrop).one(m.TRANSITION_END, e).emulateTransitionEnd(i)
                    } else if (!this._isShown && this._backdrop) {
                        f(this._backdrop).removeClass(nt);
                        var r = function() {
                            t._removeBackdrop(), e && e()
                        };
                        if (f(this._element).hasClass(tt)) {
                            var s = m.getTransitionDurationFromElement(this._backdrop);
                            f(this._backdrop).one(m.TRANSITION_END, r).emulateTransitionEnd(s)
                        } else r()
                    } else e && e()
                }, e._adjustDialog = function() {
                    var e = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                }, e._resetAdjustments = function() {
                    this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                }, e._checkScrollbar = function() {
                    var e = document.body.getBoundingClientRect();
                    this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                }, e._setScrollbar = function() {
                    var r = this;
                    if (this._isBodyOverflowing) {
                        var e = [].slice.call(document.querySelectorAll(it.FIXED_CONTENT)),
                            t = [].slice.call(document.querySelectorAll(it.STICKY_CONTENT));
                        f(e).each(function(e, t) {
                            var n = t.style.paddingRight,
                                i = f(t).css("padding-right");
                            f(t).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px")
                        }), f(t).each(function(e, t) {
                            var n = t.style.marginRight,
                                i = f(t).css("margin-right");
                            f(t).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px")
                        });
                        var n = document.body.style.paddingRight,
                            i = f(document.body).css("padding-right");
                        f(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                    }
                    f(document.body).addClass(et)
                }, e._resetScrollbar = function() {
                    var e = [].slice.call(document.querySelectorAll(it.FIXED_CONTENT));
                    f(e).each(function(e, t) {
                        var n = f(t).data("padding-right");
                        f(t).removeData("padding-right"), t.style.paddingRight = n || ""
                    });
                    var t = [].slice.call(document.querySelectorAll("" + it.STICKY_CONTENT));
                    f(t).each(function(e, t) {
                        var n = f(t).data("margin-right");
                        void 0 !== n && f(t).css("margin-right", n).removeData("margin-right")
                    });
                    var n = f(document.body).data("padding-right");
                    f(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
                }, e._getScrollbarWidth = function() {
                    var e = document.createElement("div");
                    e.className = Ze, document.body.appendChild(e);
                    var t = e.getBoundingClientRect().width - e.clientWidth;
                    return document.body.removeChild(e), t
                }, r._jQueryInterface = function(n, i) {
                    return this.each(function() {
                        var e = f(this).data(Ve),
                            t = l({}, Ge, f(this).data(), "object" == typeof n && n ? n : {});
                        if (e || (e = new r(this, t), f(this).data(Ve, e)), "string" == typeof n) {
                            if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                            e[n](i)
                        } else t.show && e.show(i)
                    })
                }, o(r, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.3.1"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return Ge
                    }
                }]), r
            }();
        f(document).on(Qe.CLICK_DATA_API, it.DATA_TOGGLE, function(e) {
            var t, n = this,
                i = m.getSelectorFromElement(this);
            i && (t = document.querySelector(i));
            var r = f(t).data(Ve) ? "toggle" : l({}, f(t).data(), f(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
            var s = f(t).one(Qe.SHOW, function(e) {
                e.isDefaultPrevented() || s.one(Qe.HIDDEN, function() {
                    f(n).is(":visible") && n.focus()
                })
            });
            rt._jQueryInterface.call(f(t), r, this)
        }), f.fn[We] = rt._jQueryInterface, f.fn[We].Constructor = rt, f.fn[We].noConflict = function() {
            return f.fn[We] = Xe, rt._jQueryInterface
        };
        var st = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
            ot = {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            },
            at = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
            lt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

        function ct(e, o, t) {
            if (0 === e.length) return e;
            if (t && "function" == typeof t) return t(e);
            for (var n = (new window.DOMParser).parseFromString(e, "text/html"), a = Object.keys(o), l = [].slice.call(n.body.querySelectorAll("*")), i = function(e, t) {
                    var n = l[e],
                        i = n.nodeName.toLowerCase();
                    if (-1 === a.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), "continue";
                    var r = [].slice.call(n.attributes),
                        s = [].concat(o["*"] || [], o[i] || []);
                    r.forEach(function(e) {
                        (function(e, t) {
                            var n = e.nodeName.toLowerCase();
                            if (-1 !== t.indexOf(n)) return -1 === st.indexOf(n) || Boolean(e.nodeValue.match(at) || e.nodeValue.match(lt));
                            for (var i = t.filter(function(e) {
                                    return e instanceof RegExp
                                }), r = 0, s = i.length; r < s; r++)
                                if (n.match(i[r])) return !0;
                            return !1
                        })(e, s) || n.removeAttribute(e.nodeName)
                    })
                }, r = 0, s = l.length; r < s; r++) i(r);
            return n.body.innerHTML
        }
        var ut = "tooltip",
            dt = "bs.tooltip",
            ht = "." + dt,
            pt = f.fn[ut],
            ft = "bs-tooltip",
            mt = new RegExp("(^|\\s)" + ft + "\\S+", "g"),
            vt = ["sanitize", "whiteList", "sanitizeFn"],
            gt = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string|function)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)",
                boundary: "(string|element)",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                whiteList: "object"
            },
            yt = {
                AUTO: "auto",
                TOP: "top",
                RIGHT: "right",
                BOTTOM: "bottom",
                LEFT: "left"
            },
            bt = {
                animation: !0,
                template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                selector: !1,
                placement: "top",
                offset: 0,
                container: !1,
                fallbackPlacement: "flip",
                boundary: "scrollParent",
                sanitize: !0,
                sanitizeFn: null,
                whiteList: ot
            },
            wt = "show",
            xt = "out",
            Et = {
                HIDE: "hide" + ht,
                HIDDEN: "hidden" + ht,
                SHOW: "show" + ht,
                SHOWN: "shown" + ht,
                INSERTED: "inserted" + ht,
                CLICK: "click" + ht,
                FOCUSIN: "focusin" + ht,
                FOCUSOUT: "focusout" + ht,
                MOUSEENTER: "mouseenter" + ht,
                MOUSELEAVE: "mouseleave" + ht
            },
            Tt = "fade",
            St = "show",
            Ct = ".tooltip-inner",
            _t = ".arrow",
            kt = "hover",
            At = "focus",
            Dt = "click",
            Ot = "manual",
            Mt = function() {
                function i(e, t) {
                    if (void 0 === d) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                    this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
                }
                var e = i.prototype;
                return e.enable = function() {
                    this._isEnabled = !0
                }, e.disable = function() {
                    this._isEnabled = !1
                }, e.toggleEnabled = function() {
                    this._isEnabled = !this._isEnabled
                }, e.toggle = function(e) {
                    if (this._isEnabled)
                        if (e) {
                            var t = this.constructor.DATA_KEY,
                                n = f(e.currentTarget).data(t);
                            n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), f(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                        } else {
                            if (f(this.getTipElement()).hasClass(St)) return void this._leave(null, this);
                            this._enter(null, this)
                        }
                }, e.dispose = function() {
                    clearTimeout(this._timeout), f.removeData(this.element, this.constructor.DATA_KEY), f(this.element).off(this.constructor.EVENT_KEY), f(this.element).closest(".modal").off("hide.bs.modal"), this.tip && f(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                }, e.show = function() {
                    var t = this;
                    if ("none" === f(this.element).css("display")) throw new Error("Please use show on visible elements");
                    var e = f.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        f(this.element).trigger(e);
                        var n = m.findShadowRoot(this.element),
                            i = f.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                        if (e.isDefaultPrevented() || !i) return;
                        var r = this.getTipElement(),
                            s = m.getUID(this.constructor.NAME);
                        r.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && f(r).addClass(Tt);
                        var o = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                            a = this._getAttachment(o);
                        this.addAttachmentClass(a);
                        var l = this._getContainer();
                        f(r).data(this.constructor.DATA_KEY, this), f.contains(this.element.ownerDocument.documentElement, this.tip) || f(r).appendTo(l), f(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new d(this.element, r, {
                            placement: a,
                            modifiers: {
                                offset: this._getOffset(),
                                flip: {
                                    behavior: this.config.fallbackPlacement
                                },
                                arrow: {
                                    element: _t
                                },
                                preventOverflow: {
                                    boundariesElement: this.config.boundary
                                }
                            },
                            onCreate: function(e) {
                                e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                            },
                            onUpdate: function(e) {
                                return t._handlePopperPlacementChange(e)
                            }
                        }), f(r).addClass(St), "ontouchstart" in document.documentElement && f(document.body).children().on("mouseover", null, f.noop);
                        var c = function() {
                            t.config.animation && t._fixTransition();
                            var e = t._hoverState;
                            t._hoverState = null, f(t.element).trigger(t.constructor.Event.SHOWN), e === xt && t._leave(null, t)
                        };
                        if (f(this.tip).hasClass(Tt)) {
                            var u = m.getTransitionDurationFromElement(this.tip);
                            f(this.tip).one(m.TRANSITION_END, c).emulateTransitionEnd(u)
                        } else c()
                    }
                }, e.hide = function(e) {
                    var t = this,
                        n = this.getTipElement(),
                        i = f.Event(this.constructor.Event.HIDE),
                        r = function() {
                            t._hoverState !== wt && n.parentNode && n.parentNode.removeChild(n), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), f(t.element).trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), e && e()
                        };
                    if (f(this.element).trigger(i), !i.isDefaultPrevented()) {
                        if (f(n).removeClass(St), "ontouchstart" in document.documentElement && f(document.body).children().off("mouseover", null, f.noop), this._activeTrigger[Dt] = !1, this._activeTrigger[At] = !1, this._activeTrigger[kt] = !1, f(this.tip).hasClass(Tt)) {
                            var s = m.getTransitionDurationFromElement(n);
                            f(n).one(m.TRANSITION_END, r).emulateTransitionEnd(s)
                        } else r();
                        this._hoverState = ""
                    }
                }, e.update = function() {
                    null !== this._popper && this._popper.scheduleUpdate()
                }, e.isWithContent = function() {
                    return Boolean(this.getTitle())
                }, e.addAttachmentClass = function(e) {
                    f(this.getTipElement()).addClass(ft + "-" + e)
                }, e.getTipElement = function() {
                    return this.tip = this.tip || f(this.config.template)[0], this.tip
                }, e.setContent = function() {
                    var e = this.getTipElement();
                    this.setElementContent(f(e.querySelectorAll(Ct)), this.getTitle()), f(e).removeClass(Tt + " " + St)
                }, e.setElementContent = function(e, t) {
                    "object" != typeof t || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = ct(t, this.config.whiteList, this.config.sanitizeFn)), e.html(t)) : e.text(t) : this.config.html ? f(t).parent().is(e) || e.empty().append(t) : e.text(f(t).text())
                }, e.getTitle = function() {
                    var e = this.element.getAttribute("data-original-title");
                    return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
                }, e._getOffset = function() {
                    var t = this,
                        e = {};
                    return "function" == typeof this.config.offset ? e.fn = function(e) {
                        return e.offsets = l({}, e.offsets, t.config.offset(e.offsets, t.element) || {}), e
                    } : e.offset = this.config.offset, e
                }, e._getContainer = function() {
                    return !1 === this.config.container ? document.body : m.isElement(this.config.container) ? f(this.config.container) : f(document).find(this.config.container)
                }, e._getAttachment = function(e) {
                    return yt[e.toUpperCase()]
                }, e._setListeners = function() {
                    var i = this;
                    this.config.trigger.split(" ").forEach(function(e) {
                        if ("click" === e) f(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(e) {
                            return i.toggle(e)
                        });
                        else if (e !== Ot) {
                            var t = e === kt ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                                n = e === kt ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                            f(i.element).on(t, i.config.selector, function(e) {
                                return i._enter(e)
                            }).on(n, i.config.selector, function(e) {
                                return i._leave(e)
                            })
                        }
                    }), f(this.element).closest(".modal").on("hide.bs.modal", function() {
                        i.element && i.hide()
                    }), this.config.selector ? this.config = l({}, this.config, {
                        trigger: "manual",
                        selector: ""
                    }) : this._fixTitle()
                }, e._fixTitle = function() {
                    var e = typeof this.element.getAttribute("data-original-title");
                    (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                }, e._enter = function(e, t) {
                    var n = this.constructor.DATA_KEY;
                    (t = t || f(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), f(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? At : kt] = !0), f(t.getTipElement()).hasClass(St) || t._hoverState === wt ? t._hoverState = wt : (clearTimeout(t._timeout), t._hoverState = wt, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() {
                        t._hoverState === wt && t.show()
                    }, t.config.delay.show) : t.show())
                }, e._leave = function(e, t) {
                    var n = this.constructor.DATA_KEY;
                    (t = t || f(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), f(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? At : kt] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = xt, t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() {
                        t._hoverState === xt && t.hide()
                    }, t.config.delay.hide) : t.hide())
                }, e._isWithActiveTrigger = function() {
                    for (var e in this._activeTrigger)
                        if (this._activeTrigger[e]) return !0;
                    return !1
                }, e._getConfig = function(e) {
                    var t = f(this.element).data();
                    return Object.keys(t).forEach(function(e) {
                        -1 !== vt.indexOf(e) && delete t[e]
                    }), "number" == typeof(e = l({}, this.constructor.Default, t, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                        show: e.delay,
                        hide: e.delay
                    }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), m.typeCheckConfig(ut, e, this.constructor.DefaultType), e.sanitize && (e.template = ct(e.template, e.whiteList, e.sanitizeFn)), e
                }, e._getDelegateConfig = function() {
                    var e = {};
                    if (this.config)
                        for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                    return e
                }, e._cleanTipClass = function() {
                    var e = f(this.getTipElement()),
                        t = e.attr("class").match(mt);
                    null !== t && t.length && e.removeClass(t.join(""))
                }, e._handlePopperPlacementChange = function(e) {
                    var t = e.instance;
                    this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
                }, e._fixTransition = function() {
                    var e = this.getTipElement(),
                        t = this.config.animation;
                    null === e.getAttribute("x-placement") && (f(e).removeClass(Tt), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
                }, i._jQueryInterface = function(n) {
                    return this.each(function() {
                        var e = f(this).data(dt),
                            t = "object" == typeof n && n;
                        if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this, t), f(this).data(dt, e)), "string" == typeof n)) {
                            if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                            e[n]()
                        }
                    })
                }, o(i, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.3.1"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return bt
                    }
                }, {
                    key: "NAME",
                    get: function() {
                        return ut
                    }
                }, {
                    key: "DATA_KEY",
                    get: function() {
                        return dt
                    }
                }, {
                    key: "Event",
                    get: function() {
                        return Et
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function() {
                        return ht
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return gt
                    }
                }]), i
            }();
        f.fn[ut] = Mt._jQueryInterface, f.fn[ut].Constructor = Mt, f.fn[ut].noConflict = function() {
            return f.fn[ut] = pt, Mt._jQueryInterface
        };
        var It = "popover",
            Pt = "bs.popover",
            Lt = "." + Pt,
            Nt = f.fn[It],
            jt = "bs-popover",
            zt = new RegExp("(^|\\s)" + jt + "\\S+", "g"),
            Ht = l({}, Mt.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
            }),
            qt = l({}, Mt.DefaultType, {
                content: "(string|element|function)"
            }),
            Rt = "fade",
            $t = "show",
            Bt = ".popover-header",
            Ft = ".popover-body",
            Wt = {
                HIDE: "hide" + Lt,
                HIDDEN: "hidden" + Lt,
                SHOW: "show" + Lt,
                SHOWN: "shown" + Lt,
                INSERTED: "inserted" + Lt,
                CLICK: "click" + Lt,
                FOCUSIN: "focusin" + Lt,
                FOCUSOUT: "focusout" + Lt,
                MOUSEENTER: "mouseenter" + Lt,
                MOUSELEAVE: "mouseleave" + Lt
            },
            Vt = function(e) {
                var t, n;

                function i() {
                    return e.apply(this, arguments) || this
                }
                n = e, (t = i).prototype = Object.create(n.prototype), (t.prototype.constructor = t).__proto__ = n;
                var r = i.prototype;
                return r.isWithContent = function() {
                    return this.getTitle() || this._getContent()
                }, r.addAttachmentClass = function(e) {
                    f(this.getTipElement()).addClass(jt + "-" + e)
                }, r.getTipElement = function() {
                    return this.tip = this.tip || f(this.config.template)[0], this.tip
                }, r.setContent = function() {
                    var e = f(this.getTipElement());
                    this.setElementContent(e.find(Bt), this.getTitle());
                    var t = this._getContent();
                    "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(Ft), t), e.removeClass(Rt + " " + $t)
                }, r._getContent = function() {
                    return this.element.getAttribute("data-content") || this.config.content
                }, r._cleanTipClass = function() {
                    var e = f(this.getTipElement()),
                        t = e.attr("class").match(zt);
                    null !== t && 0 < t.length && e.removeClass(t.join(""))
                }, i._jQueryInterface = function(n) {
                    return this.each(function() {
                        var e = f(this).data(Pt),
                            t = "object" == typeof n ? n : null;
                        if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this, t), f(this).data(Pt, e)), "string" == typeof n)) {
                            if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                            e[n]()
                        }
                    })
                }, o(i, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.3.1"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return Ht
                    }
                }, {
                    key: "NAME",
                    get: function() {
                        return It
                    }
                }, {
                    key: "DATA_KEY",
                    get: function() {
                        return Pt
                    }
                }, {
                    key: "Event",
                    get: function() {
                        return Wt
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function() {
                        return Lt
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return qt
                    }
                }]), i
            }(Mt);
        f.fn[It] = Vt._jQueryInterface, f.fn[It].Constructor = Vt, f.fn[It].noConflict = function() {
            return f.fn[It] = Nt, Vt._jQueryInterface
        };
        var Yt = "scrollspy",
            Xt = "bs.scrollspy",
            Gt = "." + Xt,
            Ut = f.fn[Yt],
            Qt = {
                offset: 10,
                method: "auto",
                target: ""
            },
            Kt = {
                offset: "number",
                method: "string",
                target: "(string|element)"
            },
            Zt = {
                ACTIVATE: "activate" + Gt,
                SCROLL: "scroll" + Gt,
                LOAD_DATA_API: "load" + Gt + ".data-api"
            },
            Jt = "dropdown-item",
            en = "active",
            tn = {
                DATA_SPY: '[data-spy="scroll"]',
                ACTIVE: ".active",
                NAV_LIST_GROUP: ".nav, .list-group",
                NAV_LINKS: ".nav-link",
                NAV_ITEMS: ".nav-item",
                LIST_ITEMS: ".list-group-item",
                DROPDOWN: ".dropdown",
                DROPDOWN_ITEMS: ".dropdown-item",
                DROPDOWN_TOGGLE: ".dropdown-toggle"
            },
            nn = "offset",
            rn = "position",
            sn = function() {
                function n(e, t) {
                    var n = this;
                    this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + tn.NAV_LINKS + "," + this._config.target + " " + tn.LIST_ITEMS + "," + this._config.target + " " + tn.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, f(this._scrollElement).on(Zt.SCROLL, function(e) {
                        return n._process(e)
                    }), this.refresh(), this._process()
                }
                var e = n.prototype;
                return e.refresh = function() {
                    var t = this,
                        e = this._scrollElement === this._scrollElement.window ? nn : rn,
                        r = "auto" === this._config.method ? e : this._config.method,
                        s = r === rn ? this._getScrollTop() : 0;
                    this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(e) {
                        var t, n = m.getSelectorFromElement(e);
                        if (n && (t = document.querySelector(n)), t) {
                            var i = t.getBoundingClientRect();
                            if (i.width || i.height) return [f(t)[r]().top + s, n]
                        }
                        return null
                    }).filter(function(e) {
                        return e
                    }).sort(function(e, t) {
                        return e[0] - t[0]
                    }).forEach(function(e) {
                        t._offsets.push(e[0]), t._targets.push(e[1])
                    })
                }, e.dispose = function() {
                    f.removeData(this._element, Xt), f(this._scrollElement).off(Gt), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                }, e._getConfig = function(e) {
                    if ("string" != typeof(e = l({}, Qt, "object" == typeof e && e ? e : {})).target) {
                        var t = f(e.target).attr("id");
                        t || (t = m.getUID(Yt), f(e.target).attr("id", t)), e.target = "#" + t
                    }
                    return m.typeCheckConfig(Yt, e, Kt), e
                }, e._getScrollTop = function() {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                }, e._getScrollHeight = function() {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }, e._getOffsetHeight = function() {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                }, e._process = function() {
                    var e = this._getScrollTop() + this._config.offset,
                        t = this._getScrollHeight(),
                        n = this._config.offset + t - this._getOffsetHeight();
                    if (this._scrollHeight !== t && this.refresh(), n <= e) {
                        var i = this._targets[this._targets.length - 1];
                        this._activeTarget !== i && this._activate(i)
                    } else {
                        if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                        for (var r = this._offsets.length; r--;) {
                            this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                        }
                    }
                }, e._activate = function(t) {
                    this._activeTarget = t, this._clear();
                    var e = this._selector.split(",").map(function(e) {
                            return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                        }),
                        n = f([].slice.call(document.querySelectorAll(e.join(","))));
                    n.hasClass(Jt) ? (n.closest(tn.DROPDOWN).find(tn.DROPDOWN_TOGGLE).addClass(en), n.addClass(en)) : (n.addClass(en), n.parents(tn.NAV_LIST_GROUP).prev(tn.NAV_LINKS + ", " + tn.LIST_ITEMS).addClass(en), n.parents(tn.NAV_LIST_GROUP).prev(tn.NAV_ITEMS).children(tn.NAV_LINKS).addClass(en)), f(this._scrollElement).trigger(Zt.ACTIVATE, {
                        relatedTarget: t
                    })
                }, e._clear = function() {
                    [].slice.call(document.querySelectorAll(this._selector)).filter(function(e) {
                        return e.classList.contains(en)
                    }).forEach(function(e) {
                        return e.classList.remove(en)
                    })
                }, n._jQueryInterface = function(t) {
                    return this.each(function() {
                        var e = f(this).data(Xt);
                        if (e || (e = new n(this, "object" == typeof t && t), f(this).data(Xt, e)), "string" == typeof t) {
                            if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                            e[t]()
                        }
                    })
                }, o(n, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.3.1"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return Qt
                    }
                }]), n
            }();
        f(window).on(Zt.LOAD_DATA_API, function() {
            for (var e = [].slice.call(document.querySelectorAll(tn.DATA_SPY)), t = e.length; t--;) {
                var n = f(e[t]);
                sn._jQueryInterface.call(n, n.data())
            }
        }), f.fn[Yt] = sn._jQueryInterface, f.fn[Yt].Constructor = sn, f.fn[Yt].noConflict = function() {
            return f.fn[Yt] = Ut, sn._jQueryInterface
        };
        var on = "bs.tab",
            an = "." + on,
            ln = f.fn.tab,
            cn = {
                HIDE: "hide" + an,
                HIDDEN: "hidden" + an,
                SHOW: "show" + an,
                SHOWN: "shown" + an,
                CLICK_DATA_API: "click.bs.tab.data-api"
            },
            un = "dropdown-menu",
            dn = "active",
            hn = "disabled",
            pn = "fade",
            fn = "show",
            mn = ".dropdown",
            vn = ".nav, .list-group",
            gn = ".active",
            yn = "> li > .active",
            bn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
            wn = ".dropdown-toggle",
            xn = "> .dropdown-menu .active",
            En = function() {
                function i(e) {
                    this._element = e
                }
                var e = i.prototype;
                return e.show = function() {
                    var n = this;
                    if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && f(this._element).hasClass(dn) || f(this._element).hasClass(hn))) {
                        var e, i, t = f(this._element).closest(vn)[0],
                            r = m.getSelectorFromElement(this._element);
                        if (t) {
                            var s = "UL" === t.nodeName || "OL" === t.nodeName ? yn : gn;
                            i = (i = f.makeArray(f(t).find(s)))[i.length - 1]
                        }
                        var o = f.Event(cn.HIDE, {
                                relatedTarget: this._element
                            }),
                            a = f.Event(cn.SHOW, {
                                relatedTarget: i
                            });
                        if (i && f(i).trigger(o), f(this._element).trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
                            r && (e = document.querySelector(r)), this._activate(this._element, t);
                            var l = function() {
                                var e = f.Event(cn.HIDDEN, {
                                        relatedTarget: n._element
                                    }),
                                    t = f.Event(cn.SHOWN, {
                                        relatedTarget: i
                                    });
                                f(i).trigger(e), f(n._element).trigger(t)
                            };
                            e ? this._activate(e, e.parentNode, l) : l()
                        }
                    }
                }, e.dispose = function() {
                    f.removeData(this._element, on), this._element = null
                }, e._activate = function(e, t, n) {
                    var i = this,
                        r = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? f(t).children(gn) : f(t).find(yn))[0],
                        s = n && r && f(r).hasClass(pn),
                        o = function() {
                            return i._transitionComplete(e, r, n)
                        };
                    if (r && s) {
                        var a = m.getTransitionDurationFromElement(r);
                        f(r).removeClass(fn).one(m.TRANSITION_END, o).emulateTransitionEnd(a)
                    } else o()
                }, e._transitionComplete = function(e, t, n) {
                    if (t) {
                        f(t).removeClass(dn);
                        var i = f(t.parentNode).find(xn)[0];
                        i && f(i).removeClass(dn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
                    }
                    if (f(e).addClass(dn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), m.reflow(e), e.classList.contains(pn) && e.classList.add(fn), e.parentNode && f(e.parentNode).hasClass(un)) {
                        var r = f(e).closest(mn)[0];
                        if (r) {
                            var s = [].slice.call(r.querySelectorAll(wn));
                            f(s).addClass(dn)
                        }
                        e.setAttribute("aria-expanded", !0)
                    }
                    n && n()
                }, i._jQueryInterface = function(n) {
                    return this.each(function() {
                        var e = f(this),
                            t = e.data(on);
                        if (t || (t = new i(this), e.data(on, t)), "string" == typeof n) {
                            if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                            t[n]()
                        }
                    })
                }, o(i, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.3.1"
                    }
                }]), i
            }();
        f(document).on(cn.CLICK_DATA_API, bn, function(e) {
            e.preventDefault(), En._jQueryInterface.call(f(this), "show")
        }), f.fn.tab = En._jQueryInterface, f.fn.tab.Constructor = En, f.fn.tab.noConflict = function() {
            return f.fn.tab = ln, En._jQueryInterface
        };
        var Tn = "toast",
            Sn = "bs.toast",
            Cn = "." + Sn,
            _n = f.fn[Tn],
            kn = {
                CLICK_DISMISS: "click.dismiss" + Cn,
                HIDE: "hide" + Cn,
                HIDDEN: "hidden" + Cn,
                SHOW: "show" + Cn,
                SHOWN: "shown" + Cn
            },
            An = "fade",
            Dn = "hide",
            On = "show",
            Mn = "showing",
            In = {
                animation: "boolean",
                autohide: "boolean",
                delay: "number"
            },
            Pn = {
                animation: !0,
                autohide: !0,
                delay: 500
            },
            Ln = '[data-dismiss="toast"]',
            Nn = function() {
                function i(e, t) {
                    this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
                }
                var e = i.prototype;
                return e.show = function() {
                    var e = this;
                    f(this._element).trigger(kn.SHOW), this._config.animation && this._element.classList.add(An);
                    var t = function() {
                        e._element.classList.remove(Mn), e._element.classList.add(On), f(e._element).trigger(kn.SHOWN), e._config.autohide && e.hide()
                    };
                    if (this._element.classList.remove(Dn), this._element.classList.add(Mn), this._config.animation) {
                        var n = m.getTransitionDurationFromElement(this._element);
                        f(this._element).one(m.TRANSITION_END, t).emulateTransitionEnd(n)
                    } else t()
                }, e.hide = function(e) {
                    var t = this;
                    this._element.classList.contains(On) && (f(this._element).trigger(kn.HIDE), e ? this._close() : this._timeout = setTimeout(function() {
                        t._close()
                    }, this._config.delay))
                }, e.dispose = function() {
                    clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(On) && this._element.classList.remove(On), f(this._element).off(kn.CLICK_DISMISS), f.removeData(this._element, Sn), this._element = null, this._config = null
                }, e._getConfig = function(e) {
                    return e = l({}, Pn, f(this._element).data(), "object" == typeof e && e ? e : {}), m.typeCheckConfig(Tn, e, this.constructor.DefaultType), e
                }, e._setListeners = function() {
                    var e = this;
                    f(this._element).on(kn.CLICK_DISMISS, Ln, function() {
                        return e.hide(!0)
                    })
                }, e._close = function() {
                    var e = this,
                        t = function() {
                            e._element.classList.add(Dn), f(e._element).trigger(kn.HIDDEN)
                        };
                    if (this._element.classList.remove(On), this._config.animation) {
                        var n = m.getTransitionDurationFromElement(this._element);
                        f(this._element).one(m.TRANSITION_END, t).emulateTransitionEnd(n)
                    } else t()
                }, i._jQueryInterface = function(n) {
                    return this.each(function() {
                        var e = f(this),
                            t = e.data(Sn);
                        if (t || (t = new i(this, "object" == typeof n && n), e.data(Sn, t)), "string" == typeof n) {
                            if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                            t[n](this)
                        }
                    })
                }, o(i, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.3.1"
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return In
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return Pn
                    }
                }]), i
            }();
        f.fn[Tn] = Nn._jQueryInterface, f.fn[Tn].Constructor = Nn, f.fn[Tn].noConflict = function() {
                return f.fn[Tn] = _n, Nn._jQueryInterface
            },
            function() {
                if (void 0 === f) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
                var e = f.fn.jquery.split(" ")[0].split(".");
                if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
            }(), e.Util = m, e.Alert = g, e.Button = I, e.Carousel = ee, e.Collapse = me, e.Dropdown = Fe, e.Modal = rt, e.Popover = Vt, e.Scrollspy = sn, e.Tab = En, e.Toast = Nn, e.Tooltip = Mt, Object.defineProperty(e, "__esModule", {
                value: !0
            })
    }),
    function() {
        "use strict";
        var t = 0,
            s = {};

        function n(e) {
            if (!e) throw new Error("No options passed to Waypoint constructor");
            if (!e.element) throw new Error("No element option passed to Waypoint constructor");
            if (!e.handler) throw new Error("No handler option passed to Waypoint constructor");
            this.key = "waypoint-" + t, this.options = n.Adapter.extend({}, n.defaults, e), this.element = this.options.element, this.adapter = new n.Adapter(this.element), this.callback = e.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = n.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis
            }), this.context = n.Context.findOrCreateByElement(this.options.context), n.offsetAliases[this.options.offset] && (this.options.offset = n.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), s[this.key] = this, t += 1
        }
        n.prototype.queueTrigger = function(e) {
            this.group.queueTrigger(this, e)
        }, n.prototype.trigger = function(e) {
            this.enabled && this.callback && this.callback.apply(this, e)
        }, n.prototype.destroy = function() {
            this.context.remove(this), this.group.remove(this), delete s[this.key]
        }, n.prototype.disable = function() {
            return this.enabled = !1, this
        }, n.prototype.enable = function() {
            return this.context.refresh(), this.enabled = !0, this
        }, n.prototype.next = function() {
            return this.group.next(this)
        }, n.prototype.previous = function() {
            return this.group.previous(this)
        }, n.invokeAll = function(e) {
            var t = [];
            for (var n in s) t.push(s[n]);
            for (var i = 0, r = t.length; i < r; i++) t[i][e]()
        }, n.destroyAll = function() {
            n.invokeAll("destroy")
        }, n.disableAll = function() {
            n.invokeAll("disable")
        }, n.enableAll = function() {
            n.invokeAll("enable")
        }, n.refreshAll = function() {
            n.Context.refreshAll()
        }, n.viewportHeight = function() {
            return window.innerHeight || document.documentElement.clientHeight
        }, n.viewportWidth = function() {
            return document.documentElement.clientWidth
        }, n.adapters = [], n.defaults = {
            context: window,
            continuous: !0,
            enabled: !0,
            group: "default",
            horizontal: !1,
            offset: 0
        }, n.offsetAliases = {
            "bottom-in-view": function() {
                return this.context.innerHeight() - this.adapter.outerHeight()
            },
            "right-in-view": function() {
                return this.context.innerWidth() - this.adapter.outerWidth()
            }
        }, window.Waypoint = n
    }(),
    function() {
        "use strict";

        function t(e) {
            window.setTimeout(e, 1e3 / 60)
        }
        var n = 0,
            i = {},
            v = window.Waypoint,
            e = window.onload;

        function r(e) {
            this.element = e, this.Adapter = v.Adapter, this.adapter = new this.Adapter(e), this.key = "waypoint-context-" + n, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
                x: this.adapter.scrollLeft(),
                y: this.adapter.scrollTop()
            }, this.waypoints = {
                vertical: {},
                horizontal: {}
            }, e.waypointContextKey = this.key, i[e.waypointContextKey] = this, n += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
        }
        r.prototype.add = function(e) {
            var t = e.options.horizontal ? "horizontal" : "vertical";
            this.waypoints[t][e.key] = e, this.refresh()
        }, r.prototype.checkEmpty = function() {
            var e = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                t = this.Adapter.isEmptyObject(this.waypoints.vertical);
            e && t && (this.adapter.off(".waypoints"), delete i[this.key])
        }, r.prototype.createThrottledResizeHandler = function() {
            var e = this;

            function t() {
                e.handleResize(), e.didResize = !1
            }
            this.adapter.on("resize.waypoints", function() {
                e.didResize || (e.didResize = !0, v.requestAnimationFrame(t))
            })
        }, r.prototype.createThrottledScrollHandler = function() {
            var e = this;

            function t() {
                e.handleScroll(), e.didScroll = !1
            }
            this.adapter.on("scroll.waypoints", function() {
                e.didScroll && !v.isTouch || (e.didScroll = !0, v.requestAnimationFrame(t))
            })
        }, r.prototype.handleResize = function() {
            v.Context.refreshAll()
        }, r.prototype.handleScroll = function() {
            var e = {},
                t = {
                    horizontal: {
                        newScroll: this.adapter.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.adapter.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
            for (var n in t) {
                var i = t[n],
                    r = i.newScroll > i.oldScroll ? i.forward : i.backward;
                for (var s in this.waypoints[n]) {
                    var o = this.waypoints[n][s],
                        a = i.oldScroll < o.triggerPoint,
                        l = i.newScroll >= o.triggerPoint;
                    (a && l || !a && !l) && (o.queueTrigger(r), e[o.group.id] = o.group)
                }
            }
            for (var c in e) e[c].flushTriggers();
            this.oldScroll = {
                x: t.horizontal.newScroll,
                y: t.vertical.newScroll
            }
        }, r.prototype.innerHeight = function() {
            return this.element == this.element.window ? v.viewportHeight() : this.adapter.innerHeight()
        }, r.prototype.remove = function(e) {
            delete this.waypoints[e.axis][e.key], this.checkEmpty()
        }, r.prototype.innerWidth = function() {
            return this.element == this.element.window ? v.viewportWidth() : this.adapter.innerWidth()
        }, r.prototype.destroy = function() {
            var e = [];
            for (var t in this.waypoints)
                for (var n in this.waypoints[t]) e.push(this.waypoints[t][n]);
            for (var i = 0, r = e.length; i < r; i++) e[i].destroy()
        }, r.prototype.refresh = function() {
            var e, t = this.element == this.element.window,
                n = t ? void 0 : this.adapter.offset(),
                i = {};
            for (var r in this.handleScroll(), e = {
                    horizontal: {
                        contextOffset: t ? 0 : n.left,
                        contextScroll: t ? 0 : this.oldScroll.x,
                        contextDimension: this.innerWidth(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: t ? 0 : n.top,
                        contextScroll: t ? 0 : this.oldScroll.y,
                        contextDimension: this.innerHeight(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                }) {
                var s = e[r];
                for (var o in this.waypoints[r]) {
                    var a, l, c, u, d = this.waypoints[r][o],
                        h = d.options.offset,
                        p = d.triggerPoint,
                        f = 0,
                        m = null == p;
                    d.element !== d.element.window && (f = d.adapter.offset()[s.offsetProp]), "function" == typeof h ? h = h.apply(d) : "string" == typeof h && (h = parseFloat(h), -1 < d.options.offset.indexOf("%") && (h = Math.ceil(s.contextDimension * h / 100))), a = s.contextScroll - s.contextOffset, d.triggerPoint = f + a - h, l = p < s.oldScroll, c = d.triggerPoint >= s.oldScroll, u = !l && !c, !m && (l && c) ? (d.queueTrigger(s.backward), i[d.group.id] = d.group) : !m && u ? (d.queueTrigger(s.forward), i[d.group.id] = d.group) : m && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), i[d.group.id] = d.group)
                }
            }
            return v.requestAnimationFrame(function() {
                for (var e in i) i[e].flushTriggers()
            }), this
        }, r.findOrCreateByElement = function(e) {
            return r.findByElement(e) || new r(e)
        }, r.refreshAll = function() {
            for (var e in i) i[e].refresh()
        }, r.findByElement = function(e) {
            return i[e.waypointContextKey]
        }, window.onload = function() {
            e && e(), r.refreshAll()
        }, v.requestAnimationFrame = function(e) {
            (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t).call(window, e)
        }, v.Context = r
    }(),
    function() {
        "use strict";

        function o(e, t) {
            return e.triggerPoint - t.triggerPoint
        }

        function a(e, t) {
            return t.triggerPoint - e.triggerPoint
        }
        var t = {
                vertical: {},
                horizontal: {}
            },
            n = window.Waypoint;

        function i(e) {
            this.name = e.name, this.axis = e.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), t[this.axis][this.name] = this
        }
        i.prototype.add = function(e) {
            this.waypoints.push(e)
        }, i.prototype.clearTriggerQueues = function() {
            this.triggerQueues = {
                up: [],
                down: [],
                left: [],
                right: []
            }
        }, i.prototype.flushTriggers = function() {
            for (var e in this.triggerQueues) {
                var t = this.triggerQueues[e],
                    n = "up" === e || "left" === e;
                t.sort(n ? a : o);
                for (var i = 0, r = t.length; i < r; i += 1) {
                    var s = t[i];
                    (s.options.continuous || i === t.length - 1) && s.trigger([e])
                }
            }
            this.clearTriggerQueues()
        }, i.prototype.next = function(e) {
            this.waypoints.sort(o);
            var t = n.Adapter.inArray(e, this.waypoints);
            return t === this.waypoints.length - 1 ? null : this.waypoints[t + 1]
        }, i.prototype.previous = function(e) {
            this.waypoints.sort(o);
            var t = n.Adapter.inArray(e, this.waypoints);
            return t ? this.waypoints[t - 1] : null
        }, i.prototype.queueTrigger = function(e, t) {
            this.triggerQueues[t].push(e)
        }, i.prototype.remove = function(e) {
            var t = n.Adapter.inArray(e, this.waypoints); - 1 < t && this.waypoints.splice(t, 1)
        }, i.prototype.first = function() {
            return this.waypoints[0]
        }, i.prototype.last = function() {
            return this.waypoints[this.waypoints.length - 1]
        }, i.findOrCreate = function(e) {
            return t[e.axis][e.name] || new i(e)
        }, n.Group = i
    }(),
    function() {
        "use strict";
        var n = window.jQuery,
            e = window.Waypoint;

        function i(e) {
            this.$element = n(e)
        }
        n.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, t) {
            i.prototype[t] = function() {
                var e = Array.prototype.slice.call(arguments);
                return this.$element[t].apply(this.$element, e)
            }
        }), n.each(["extend", "inArray", "isEmptyObject"], function(e, t) {
            i[t] = n[t]
        }), e.adapters.push({
            name: "jquery",
            Adapter: i
        }), e.Adapter = i
    }(),
    function() {
        "use strict";
        var r = window.Waypoint;

        function e(i) {
            return function() {
                var t = [],
                    n = arguments[0];
                return i.isFunction(arguments[0]) && ((n = i.extend({}, arguments[1])).handler = arguments[0]), this.each(function() {
                    var e = i.extend({}, n, {
                        element: this
                    });
                    "string" == typeof e.context && (e.context = i(this).closest(e.context)[0]), t.push(new r(e))
                }), t
            }
        }
        window.jQuery && (window.jQuery.fn.waypoint = e(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = e(window.Zepto))
    }(),
    function(n) {
        "use strict";
        n.fn.counterUp = function(e) {
            var t = n.extend({
                time: 400,
                delay: 10
            }, e);
            return this.each(function() {
                var l = n(this),
                    c = t;
                l.waypoint(function() {
                    var e = [],
                        t = c.time / c.delay,
                        n = l.text(),
                        i = /[0-9]+,[0-9]+/.test(n);
                    n = n.replace(/,/g, "");
                    /^[0-9]+$/.test(n);
                    for (var r = /^[0-9]+\.[0-9]+$/.test(n), s = r ? (n.split(".")[1] || []).length : 0, o = t; 1 <= o; o--) {
                        var a = parseInt(n / t * o);
                        if (r && (a = parseFloat(n / t * o).toFixed(s)), i)
                            for (;
                                /(\d+)(\d{3})/.test(a.toString());) a = a.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                        e.unshift(a)
                    }
                    l.data("counterup-nums", e), l.text("0");
                    l.data("counterup-func", function() {
                        l.text(l.data("counterup-nums").shift()), l.data("counterup-nums").length ? setTimeout(l.data("counterup-func"), c.delay) : (l.data("counterup-nums"), l.data("counterup-nums", null), l.data("counterup-func", null))
                    }), setTimeout(l.data("counterup-func"), c.delay)
                }, {
                    offset: "100%",
                    triggerOnce: !0
                })
            })
        }
    }(jQuery),
    function(l, r, e, t) {
        "use strict";
        var n = {
            selected: 0,
            keyNavigation: !0,
            autoAdjustHeight: !0,
            cycleSteps: !1,
            backButtonSupport: !0,
            useURLhash: !0,
            showStepURLhash: !0,
            lang: {
                next: "Next",
                previous: "Previous"
            },
            toolbarSettings: {
                toolbarPosition: "bottom",
                toolbarButtonPosition: "end",
                showNextButton: !0,
                showPreviousButton: !0,
                toolbarExtraButtons: []
            },
            anchorSettings: {
                anchorClickable: !0,
                enableAllAnchors: !1,
                markDoneStep: !0,
                markAllPreviousStepsAsDone: !0,
                removeDoneStepOnNavigateBack: !1,
                enableAnchorOnDoneStep: !0
            },
            contentURL: null,
            contentCache: !0,
            ajaxSettings: {},
            disabledSteps: [],
            errorSteps: [],
            hiddenSteps: [],
            theme: "default",
            transitionEffect: "none",
            transitionSpeed: "400"
        };

        function i(e, t) {
            this.options = l.extend(!0, {}, n, t), this.main = l(e), this.nav = this.main.children("ul"), this.steps = l("li > a", this.nav), this.container = this.main.children("div"), this.pages = this.container.children("div"), this.current_index = null, this.options.toolbarSettings.toolbarButtonPosition = "right" === this.options.toolbarSettings.toolbarButtonPosition ? "end" : this.options.toolbarSettings.toolbarButtonPosition, this.options.toolbarSettings.toolbarButtonPosition = "left" === this.options.toolbarSettings.toolbarButtonPosition ? "start" : this.options.toolbarSettings.toolbarButtonPosition, this.options.theme = null === this.options.theme || "" === this.options.theme ? "default" : this.options.theme, this.init()
        }
        l.extend(i.prototype, {
            init: function() {
                this._setElements(), this._setToolbar(), this._setEvents();
                var e = this.options.selected;
                if (this.options.useURLhash) {
                    var t = r.location.hash;
                    if (t && 0 < t.length) {
                        var n = l("a[href*='" + t + "']", this.nav);
                        if (0 < n.length) {
                            var i = this.steps.index(n);
                            e = 0 <= i ? i : e
                        }
                    }
                }
                0 < e && this.options.anchorSettings.markDoneStep && this.options.anchorSettings.markAllPreviousStepsAsDone && this.steps.eq(e).parent("li").prevAll().addClass("done"), this._showStep(e)
            },
            _setElements: function() {
                this.main.addClass("sw-main sw-theme-" + this.options.theme), this.nav.addClass("nav nav-tabs step-anchor").children("li").addClass("nav-item").children("a").addClass("nav-link"), !1 !== this.options.anchorSettings.enableAllAnchors && !1 !== this.options.anchorSettings.anchorClickable && this.steps.parent("li").addClass("clickable"), this.container.addClass("sw-container tab-content"), this.pages.addClass("tab-pane step-content");
                var n = this;
                return this.options.disabledSteps && 0 < this.options.disabledSteps.length && l.each(this.options.disabledSteps, function(e, t) {
                    n.steps.eq(t).parent("li").addClass("disabled")
                }), this.options.errorSteps && 0 < this.options.errorSteps.length && l.each(this.options.errorSteps, function(e, t) {
                    n.steps.eq(t).parent("li").addClass("danger")
                }), this.options.hiddenSteps && 0 < this.options.hiddenSteps.length && l.each(this.options.hiddenSteps, function(e, t) {
                    n.steps.eq(t).parent("li").addClass("hidden")
                }), !0
            },
            _setToolbar: function() {
                if ("none" === this.options.toolbarSettings.toolbarPosition) return !0;
                var e, t, n = !1 !== this.options.toolbarSettings.showNextButton ? l("<button></button>").text(this.options.lang.next).addClass("btn btn-secondary sw-btn-next").attr("type", "button") : null,
                    i = !1 !== this.options.toolbarSettings.showPreviousButton ? l("<button></button>").text(this.options.lang.previous).addClass("btn btn-secondary sw-btn-prev").attr("type", "button") : null,
                    r = l("<div></div>").addClass("btn-group mr-2 sw-btn-group").attr("role", "group").append(i, n),
                    s = null;
                switch (this.options.toolbarSettings.toolbarExtraButtons && 0 < this.options.toolbarSettings.toolbarExtraButtons.length && (s = l("<div></div>").addClass("btn-group mr-2 sw-btn-group-extra").attr("role", "group"), l.each(this.options.toolbarSettings.toolbarExtraButtons, function(e, t) {
                    s.append(t.clone(!0))
                })), this.options.toolbarSettings.toolbarPosition) {
                    case "top":
                        (e = l("<div></div>").addClass("btn-toolbar sw-toolbar sw-toolbar-top justify-content-" + this.options.toolbarSettings.toolbarButtonPosition)).append(r), "start" === this.options.toolbarSettings.toolbarButtonPosition ? e.prepend(s) : e.append(s), this.container.before(e);
                        break;
                    case "bottom":
                        (t = l("<div></div>").addClass("btn-toolbar sw-toolbar sw-toolbar-bottom justify-content-" + this.options.toolbarSettings.toolbarButtonPosition)).append(r), "start" === this.options.toolbarSettings.toolbarButtonPosition ? t.prepend(s) : t.append(s), this.container.after(t);
                        break;
                    case "both":
                        (e = l("<div></div>").addClass("btn-toolbar sw-toolbar sw-toolbar-top justify-content-" + this.options.toolbarSettings.toolbarButtonPosition)).append(r), "start" === this.options.toolbarSettings.toolbarButtonPosition ? e.prepend(s) : e.append(s), this.container.before(e), (t = l("<div></div>").addClass("btn-toolbar sw-toolbar sw-toolbar-bottom justify-content-" + this.options.toolbarSettings.toolbarButtonPosition)).append(r.clone(!0)), null !== s && ("start" === this.options.toolbarSettings.toolbarButtonPosition ? t.prepend(s.clone(!0)) : t.append(s.clone(!0))), this.container.after(t);
                        break;
                    default:
                        (t = l("<div></div>").addClass("btn-toolbar sw-toolbar sw-toolbar-bottom justify-content-" + this.options.toolbarSettings.toolbarButtonPosition)).append(r), this.options.toolbarSettings.toolbarButtonPosition, t.append(s), this.container.after(t)
                }
                return !0
            },
            _setEvents: function() {
                var n = this;
                return l(this.steps).on("click", function(e) {
                    if (e.preventDefault(), !1 === n.options.anchorSettings.anchorClickable) return !0;
                    var t = n.steps.index(this);
                    if (!1 === n.options.anchorSettings.enableAnchorOnDoneStep && n.steps.eq(t).parent("li").hasClass("done")) return !0;
                    t !== n.current_index && (!1 !== n.options.anchorSettings.enableAllAnchors && !1 !== n.options.anchorSettings.anchorClickable ? n._showStep(t) : n.steps.eq(t).parent("li").hasClass("done") && n._showStep(t))
                }), l(".sw-btn-next", this.main).on("click", function(e) {
                    e.preventDefault(), n._showNext()
                }), l(".sw-btn-prev", this.main).on("click", function(e) {
                    e.preventDefault(), n._showPrevious()
                }), this.options.keyNavigation && l(e).keyup(function(e) {
                    n._keyNav(e)
                }), this.options.backButtonSupport && l(r).on("hashchange", function(e) {
                    if (!n.options.useURLhash) return !0;
                    if (r.location.hash) {
                        var t = l("a[href*='" + r.location.hash + "']", n.nav);
                        t && 0 < t.length && (e.preventDefault(), n._showStep(n.steps.index(t)))
                    }
                }), !0
            },
            _showNext: function() {
                for (var e = this.current_index + 1, t = e; t < this.steps.length; t++)
                    if (!this.steps.eq(t).parent("li").hasClass("disabled") && !this.steps.eq(t).parent("li").hasClass("hidden")) {
                        e = t;
                        break
                    }
                if (this.steps.length <= e) {
                    if (!this.options.cycleSteps) return !1;
                    e = 0
                }
                return this._showStep(e), !0
            },
            _showPrevious: function() {
                for (var e = this.current_index - 1, t = e; 0 <= t; t--)
                    if (!this.steps.eq(t).parent("li").hasClass("disabled") && !this.steps.eq(t).parent("li").hasClass("hidden")) {
                        e = t;
                        break
                    }
                if (e < 0) {
                    if (!this.options.cycleSteps) return !1;
                    e = this.steps.length - 1
                }
                return this._showStep(e), !0
            },
            _showStep: function(e) {
                return !!this.steps.eq(e) && (e != this.current_index && (!this.steps.eq(e).parent("li").hasClass("disabled") && !this.steps.eq(e).parent("li").hasClass("hidden") && (this._loadStepContent(e), !0)))
            },
            _loadStepContent: function(t) {
                var i = this,
                    e = this.steps.eq(this.current_index),
                    n = "",
                    r = this.steps.eq(t),
                    s = r.data("content-url") && 0 < r.data("content-url").length ? r.data("content-url") : this.options.contentURL;
                if (null !== this.current_index && this.current_index !== t && (n = this.current_index < t ? "forward" : "backward"), null !== this.current_index && !1 === this._triggerEvent("leaveStep", [e, this.current_index, n])) return !1;
                if (!(s && 0 < s.length) || r.data("has-content") && this.options.contentCache) this._transitPage(t);
                else {
                    var o = 0 < r.length ? l(r.attr("href"), this.main) : null,
                        a = l.extend(!0, {}, {
                            url: s,
                            type: "POST",
                            data: {
                                step_number: t
                            },
                            dataType: "text",
                            beforeSend: function() {
                                i._loader("show")
                            },
                            error: function(e, t, n) {
                                i._loader("hide"), l.error(n)
                            },
                            success: function(e) {
                                e && 0 < e.length && (r.data("has-content", !0), o.html(e)), i._loader("hide"), i._transitPage(t)
                            }
                        }, this.options.ajaxSettings);
                    l.ajax(a)
                }
                return !0
            },
            _transitPage: function(e) {
                var t = this,
                    n = this.steps.eq(this.current_index),
                    i = 0 < n.length ? l(n.attr("href"), this.main) : null,
                    r = this.steps.eq(e),
                    s = 0 < r.length ? l(r.attr("href"), this.main) : null,
                    o = "";
                null !== this.current_index && this.current_index !== e && (o = this.current_index < e ? "forward" : "backward");
                var a = "middle";
                return 0 === e ? a = "first" : e === this.steps.length - 1 && (a = "final"), this.options.transitionEffect = this.options.transitionEffect.toLowerCase(), this.pages.finish(), "slide" === this.options.transitionEffect ? i && 0 < i.length ? i.slideUp("fast", this.options.transitionEasing, function() {
                    s.slideDown(t.options.transitionSpeed, t.options.transitionEasing)
                }) : s.slideDown(this.options.transitionSpeed, this.options.transitionEasing) : "fade" === this.options.transitionEffect ? i && 0 < i.length ? i.fadeOut("fast", this.options.transitionEasing, function() {
                    s.fadeIn("fast", t.options.transitionEasing, function() {
                        l(this).show()
                    })
                }) : s.fadeIn(this.options.transitionSpeed, this.options.transitionEasing, function() {
                    l(this).show()
                }) : (i && 0 < i.length && i.hide(), s.show()), this._setURLHash(r.attr("href")), this._setAnchor(e), this._setButtons(e), this._fixHeight(e), this.current_index = e, this._triggerEvent("showStep", [r, this.current_index, o, a]), !0
            },
            _setAnchor: function(e) {
                return this.steps.eq(this.current_index).parent("li").removeClass("active"), !1 !== this.options.anchorSettings.markDoneStep && null !== this.current_index && (this.steps.eq(this.current_index).parent("li").addClass("done"), !1 !== this.options.anchorSettings.removeDoneStepOnNavigateBack && this.steps.eq(e).parent("li").nextAll().removeClass("done")), this.steps.eq(e).parent("li").removeClass("done").addClass("active"), !0
            },
            _setButtons: function(e) {
                return this.options.cycleSteps || (e <= 0 ? l(".sw-btn-prev", this.main).addClass("disabled") : l(".sw-btn-prev", this.main).removeClass("disabled"), this.steps.length - 1 <= e ? l(".sw-btn-next", this.main).addClass("disabled") : l(".sw-btn-next", this.main).removeClass("disabled")), !0
            },
            _keyNav: function(e) {
                switch (e.which) {
                    case 37:
                        this._showPrevious(), e.preventDefault();
                        break;
                    case 39:
                        this._showNext(), e.preventDefault();
                        break;
                    default:
                        return
                }
            },
            _fixHeight: function(e) {
                if (this.options.autoAdjustHeight) {
                    var t = 0 < this.steps.eq(e).length ? l(this.steps.eq(e).attr("href"), this.main) : null;
                    this.container.finish().animate({
                        minHeight: t.outerHeight()
                    }, this.options.transitionSpeed, function() {})
                }
                return !0
            },
            _triggerEvent: function(e, t) {
                var n = l.Event(e);
                return this.main.trigger(n, t), !n.isDefaultPrevented() && n.result
            },
            _setURLHash: function(e) {
                this.options.showStepURLhash && r.location.hash !== e && (r.location.hash = e)
            },
            _loader: function(e) {
                switch (e) {
                    case "show":
                        this.main.addClass("sw-loading");
                        break;
                    case "hide":
                        this.main.removeClass("sw-loading");
                        break;
                    default:
                        this.main.toggleClass("sw-loading")
                }
            },
            theme: function(e) {
                if (this.options.theme === e) return !1;
                this.main.removeClass("sw-theme-" + this.options.theme), this.options.theme = e, this.main.addClass("sw-theme-" + this.options.theme), this._triggerEvent("themeChanged", [this.options.theme])
            },
            next: function() {
                this._showNext()
            },
            prev: function() {
                this._showPrevious()
            },
            reset: function() {
                if (!1 === this._triggerEvent("beginReset")) return !1;
                this.container.stop(!0), this.pages.stop(!0), this.pages.hide(), this.current_index = null, this._setURLHash(this.steps.eq(this.options.selected).attr("href")), l(".sw-toolbar", this.main).remove(), this.steps.removeClass(), this.steps.parents("li").removeClass(), this.steps.data("has-content", !1), this.init(), this._triggerEvent("endReset")
            },
            stepState: function(n, e) {
                n = l.isArray(n) ? n : [n];
                var t = l.grep(this.steps, function(e, t) {
                    return -1 !== l.inArray(t, n)
                });
                if (t && 0 < t.length) switch (e) {
                    case "disable":
                        l(t).parents("li").addClass("disabled");
                        break;
                    case "enable":
                        l(t).parents("li").removeClass("disabled");
                        break;
                    case "hide":
                        l(t).parents("li").addClass("hidden");
                        break;
                    case "show":
                        l(t).parents("li").removeClass("hidden");
                        break;
                    case "error-on":
                        l(t).parents("li").addClass("danger");
                        break;
                    case "error-off":
                        l(t).parents("li").removeClass("danger")
                }
            }
        }), l.fn.smartWizard = function(e) {
            var t, n = arguments;
            return void 0 === e || "object" == typeof e ? this.each(function() {
                l.data(this, "smartWizard") || l.data(this, "smartWizard", new i(this, e))
            }) : "string" == typeof e && "_" !== e[0] && "init" !== e ? (t = l.data(this[0], "smartWizard"), "destroy" === e && l.data(this, "smartWizard", null), t instanceof i && "function" == typeof t[e] ? t[e].apply(t, Array.prototype.slice.call(n, 1)) : this) : void 0
        }
    }(jQuery, window, document),
    function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.SimpleBar = t() : e.SimpleBar = t()
    }(this, function() {
        return function(n) {
            function i(e) {
                if (r[e]) return r[e].exports;
                var t = r[e] = {
                    i: e,
                    l: !1,
                    exports: {}
                };
                return n[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports
            }
            var r = {};
            return i.m = n, i.c = r, i.d = function(e, t, n) {
                i.o(e, t) || Object.defineProperty(e, t, {
                    configurable: !1,
                    enumerable: !0,
                    get: n
                })
            }, i.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return i.d(t, "a", t), t
            }, i.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, i.p = "", i(i.s = 27)
        }([function(e, t, n) {
            var i = n(23)("wks"),
                r = n(12),
                s = n(1).Symbol,
                o = "function" == typeof s;
            (e.exports = function(e) {
                return i[e] || (i[e] = o && s[e] || (o ? s : r)("Symbol." + e))
            }).store = i
        }, function(e, t) {
            var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = n)
        }, function(e, t) {
            var n = {}.hasOwnProperty;
            e.exports = function(e, t) {
                return n.call(e, t)
            }
        }, function(e, t) {
            var n = e.exports = {
                version: "2.5.1"
            };
            "number" == typeof __e && (__e = n)
        }, function(e, t, n) {
            var i = n(5),
                r = n(11);
            e.exports = n(7) ? function(e, t, n) {
                return i.f(e, t, r(1, n))
            } : function(e, t, n) {
                return e[t] = n, e
            }
        }, function(e, t, n) {
            var i = n(6),
                r = n(33),
                s = n(34),
                o = Object.defineProperty;
            t.f = n(7) ? Object.defineProperty : function(e, t, n) {
                if (i(e), t = s(t, !0), i(n), r) try {
                    return o(e, t, n)
                } catch (e) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                return "value" in n && (e[t] = n.value), e
            }
        }, function(e, t, n) {
            var i = n(10);
            e.exports = function(e) {
                if (!i(e)) throw TypeError(e + " is not an object!");
                return e
            }
        }, function(e, t, n) {
            e.exports = !n(16)(function() {
                return 7 != Object.defineProperty({}, "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        }, function(e, t) {
            var n = Math.ceil,
                i = Math.floor;
            e.exports = function(e) {
                return isNaN(e = +e) ? 0 : (0 < e ? i : n)(e)
            }
        }, function(e, t) {
            e.exports = function(e) {
                if (null == e) throw TypeError("Can't call method on  " + e);
                return e
            }
        }, function(e, t) {
            e.exports = function(e) {
                return "object" == typeof e ? null !== e : "function" == typeof e
            }
        }, function(e, t) {
            e.exports = function(e, t) {
                return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: t
                }
            }
        }, function(e, t) {
            var n = 0,
                i = Math.random();
            e.exports = function(e) {
                return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + i).toString(36))
            }
        }, function(e, t) {
            e.exports = {}
        }, function(e, t, n) {
            var i = n(23)("keys"),
                r = n(12);
            e.exports = function(e) {
                return i[e] || (i[e] = r(e))
            }
        }, function(e, t, n) {
            var m = n(1),
                v = n(3),
                g = n(4),
                y = n(18),
                b = n(19),
                w = function(e, t, n) {
                    var i, r, s, o, a = e & w.F,
                        l = e & w.G,
                        c = e & w.S,
                        u = e & w.P,
                        d = e & w.B,
                        h = l ? m : c ? m[t] || (m[t] = {}) : (m[t] || {}).prototype,
                        p = l ? v : v[t] || (v[t] = {}),
                        f = p.prototype || (p.prototype = {});
                    for (i in l && (n = t), n) s = ((r = !a && h && void 0 !== h[i]) ? h : n)[i], o = d && r ? b(s, m) : u && "function" == typeof s ? b(Function.call, s) : s, h && y(h, i, s, e & w.U), p[i] != s && g(p, i, o), u && f[i] != s && (f[i] = s)
                };
            m.core = v, w.F = 1, w.G = 2, w.S = 4, w.P = 8, w.B = 16, w.W = 32, w.U = 64, w.R = 128, e.exports = w
        }, function(e, t) {
            e.exports = function(e) {
                try {
                    return !!e()
                } catch (e) {
                    return !0
                }
            }
        }, function(e, t, n) {
            var i = n(10),
                r = n(1).document,
                s = i(r) && i(r.createElement);
            e.exports = function(e) {
                return s ? r.createElement(e) : {}
            }
        }, function(e, t, n) {
            var s = n(1),
                o = n(4),
                a = n(2),
                l = n(12)("src"),
                i = Function.toString,
                c = ("" + i).split("toString");
            n(3).inspectSource = function(e) {
                return i.call(e)
            }, (e.exports = function(e, t, n, i) {
                var r = "function" == typeof n;
                r && (a(n, "name") || o(n, "name", t)), e[t] !== n && (r && (a(n, l) || o(n, l, e[t] ? "" + e[t] : c.join(String(t)))), e === s ? e[t] = n : i ? e[t] ? e[t] = n : o(e, t, n) : (delete e[t], o(e, t, n)))
            })(Function.prototype, "toString", function() {
                return "function" == typeof this && this[l] || i.call(this)
            })
        }, function(e, t, n) {
            var s = n(35);
            e.exports = function(i, r, e) {
                if (s(i), void 0 === r) return i;
                switch (e) {
                    case 1:
                        return function(e) {
                            return i.call(r, e)
                        };
                    case 2:
                        return function(e, t) {
                            return i.call(r, e, t)
                        };
                    case 3:
                        return function(e, t, n) {
                            return i.call(r, e, t, n)
                        }
                }
                return function() {
                    return i.apply(r, arguments)
                }
            }
        }, function(e, t, n) {
            var i = n(41),
                r = n(9);
            e.exports = function(e) {
                return i(r(e))
            }
        }, function(e, t) {
            var n = {}.toString;
            e.exports = function(e) {
                return n.call(e).slice(8, -1)
            }
        }, function(e, t, n) {
            var i = n(8),
                r = Math.min;
            e.exports = function(e) {
                return 0 < e ? r(i(e), 9007199254740991) : 0
            }
        }, function(e, t, n) {
            var i = n(1),
                r = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
            e.exports = function(e) {
                return r[e] || (r[e] = {})
            }
        }, function(e, t) {
            e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
        }, function(e, t, n) {
            var i = n(5).f,
                r = n(2),
                s = n(0)("toStringTag");
            e.exports = function(e, t, n) {
                e && !r(e = n ? e : e.prototype, s) && i(e, s, {
                    configurable: !0,
                    value: t
                })
            }
        }, function(e, t, n) {
            var i = n(9);
            e.exports = function(e) {
                return Object(i(e))
            }
        }, function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, n(28);
            var o = i(n(53)),
                a = i(n(54)),
                l = i(n(56));
            n(57), Object.assign = n(58);
            var r = function() {
                function r(e, t) {
                    (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    })(this, r), this.el = e, this.flashTimeout, this.contentEl, this.scrollContentEl, this.dragOffset = {
                        x: 0,
                        y: 0
                    }, this.isVisible = {
                        x: !0,
                        y: !0
                    }, this.scrollOffsetAttr = {
                        x: "scrollLeft",
                        y: "scrollTop"
                    }, this.sizeAttr = {
                        x: "offsetWidth",
                        y: "offsetHeight"
                    }, this.scrollSizeAttr = {
                        x: "scrollWidth",
                        y: "scrollHeight"
                    }, this.offsetAttr = {
                        x: "left",
                        y: "top"
                    }, this.globalObserver, this.mutationObserver, this.resizeObserver, this.currentAxis, this.isRtl, this.options = Object.assign({}, r.defaultOptions, t), this.classNames = this.options.classNames, this.scrollbarWidth = (0, o.default)(), this.offsetSize = 20, this.flashScrollbar = this.flashScrollbar.bind(this), this.onDragY = this.onDragY.bind(this), this.onDragX = this.onDragX.bind(this), this.onScrollY = this.onScrollY.bind(this), this.onScrollX = this.onScrollX.bind(this), this.drag = this.drag.bind(this), this.onEndDrag = this.onEndDrag.bind(this), this.onMouseEnter = this.onMouseEnter.bind(this), this.recalculate = (0, a.default)(this.recalculate, 100, {
                        leading: !0
                    }), this.init()
                }
                return e = r, n = [{
                    key: "initHtmlApi",
                    value: function() {
                        this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this), "undefined" != typeof MutationObserver && (this.globalObserver = new MutationObserver(function(e) {
                            e.forEach(function(e) {
                                Array.from(e.addedNodes).forEach(function(e) {
                                    1 === e.nodeType && (e.hasAttribute("data-simplebar") ? !e.SimpleBar && new r(e, r.getElOptions(e)) : Array.from(e.querySelectorAll("[data-simplebar]")).forEach(function(e) {
                                        !e.SimpleBar && new r(e, r.getElOptions(e))
                                    }))
                                }), Array.from(e.removedNodes).forEach(function(e) {
                                    1 === e.nodeType && (e.hasAttribute("data-simplebar") ? e.SimpleBar && e.SimpleBar.unMount() : Array.from(e.querySelectorAll("[data-simplebar]")).forEach(function(e) {
                                        e.SimpleBar && e.SimpleBar.unMount()
                                    }))
                                })
                            })
                        }), this.globalObserver.observe(document, {
                            childList: !0,
                            subtree: !0
                        })), "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(this.initDOMLoadedElements.bind(this)) : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.addEventListener("load", this.initDOMLoadedElements))
                    }
                }, {
                    key: "getElOptions",
                    value: function(i) {
                        return Object.keys(r.htmlAttributes).reduce(function(e, t) {
                            var n = r.htmlAttributes[t];
                            return i.hasAttribute(n) && (e[t] = JSON.parse(i.getAttribute(n) || !0)), e
                        }, {})
                    }
                }, {
                    key: "removeObserver",
                    value: function() {
                        this.globalObserver.disconnect()
                    }
                }, {
                    key: "initDOMLoadedElements",
                    value: function() {
                        document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.removeEventListener("load", this.initDOMLoadedElements), Array.from(document.querySelectorAll("[data-simplebar]")).forEach(function(e) {
                            e.SimpleBar || new r(e, r.getElOptions(e))
                        })
                    }
                }, {
                    key: "defaultOptions",
                    get: function() {
                        return {
                            autoHide: !0,
                            forceVisible: !1,
                            classNames: {
                                content: "simplebar-content",
                                scrollContent: "simplebar-scroll-content",
                                scrollbar: "simplebar-scrollbar",
                                track: "simplebar-track"
                            },
                            scrollbarMinSize: 25
                        }
                    }
                }, {
                    key: "htmlAttributes",
                    get: function() {
                        return {
                            autoHide: "data-simplebar-auto-hide",
                            forceVisible: "data-simplebar-force-visible",
                            scrollbarMinSize: "data-simplebar-scrollbar-min-size"
                        }
                    }
                }], (t = [{
                    key: "init",
                    value: function() {
                        (this.el.SimpleBar = this).initDOM(), this.scrollbarX = this.trackX.querySelector(".".concat(this.classNames.scrollbar)), this.scrollbarY = this.trackY.querySelector(".".concat(this.classNames.scrollbar)), this.isRtl = "rtl" === getComputedStyle(this.contentEl).direction, this.scrollContentEl.style[this.isRtl ? "paddingLeft" : "paddingRight"] = "".concat(this.scrollbarWidth || this.offsetSize, "px"), this.scrollContentEl.style.marginBottom = "-".concat(2 * this.scrollbarWidth || this.offsetSize, "px"), this.contentEl.style.paddingBottom = "".concat(this.scrollbarWidth || this.offsetSize, "px"), 0 !== this.scrollbarWidth && (this.contentEl.style[this.isRtl ? "marginLeft" : "marginRight"] = "-".concat(this.scrollbarWidth, "px")), this.recalculate(), this.initListeners()
                    }
                }, {
                    key: "initDOM",
                    value: function() {
                        var t = this;
                        if (Array.from(this.el.children).filter(function(e) {
                                return e.classList.contains(t.classNames.scrollContent)
                            }).length) this.trackX = this.el.querySelector(".".concat(this.classNames.track, ".horizontal")), this.trackY = this.el.querySelector(".".concat(this.classNames.track, ".vertical")), this.scrollContentEl = this.el.querySelector(".".concat(this.classNames.scrollContent)), this.contentEl = this.el.querySelector(".".concat(this.classNames.content));
                        else {
                            for (this.scrollContentEl = document.createElement("div"), this.contentEl = document.createElement("div"), this.scrollContentEl.classList.add(this.classNames.scrollContent), this.contentEl.classList.add(this.classNames.content); this.el.firstChild;) this.contentEl.appendChild(this.el.firstChild);
                            this.scrollContentEl.appendChild(this.contentEl), this.el.appendChild(this.scrollContentEl)
                        }
                        if (!this.trackX || !this.trackY) {
                            var e = document.createElement("div"),
                                n = document.createElement("div");
                            e.classList.add(this.classNames.track), n.classList.add(this.classNames.scrollbar), e.appendChild(n), this.trackX = e.cloneNode(!0), this.trackX.classList.add("horizontal"), this.trackY = e.cloneNode(!0), this.trackY.classList.add("vertical"), this.el.insertBefore(this.trackX, this.el.firstChild), this.el.insertBefore(this.trackY, this.el.firstChild)
                        }
                        this.el.setAttribute("data-simplebar", "init")
                    }
                }, {
                    key: "initListeners",
                    value: function() {
                        var t = this;
                        this.options.autoHide && this.el.addEventListener("mouseenter", this.onMouseEnter), this.scrollbarY.addEventListener("mousedown", this.onDragY), this.scrollbarX.addEventListener("mousedown", this.onDragX), this.scrollContentEl.addEventListener("scroll", this.onScrollY), this.contentEl.addEventListener("scroll", this.onScrollX), "undefined" != typeof MutationObserver && (this.mutationObserver = new MutationObserver(function(e) {
                            e.forEach(function(e) {
                                (t.isChildNode(e.target) || e.addedNodes.length) && t.recalculate()
                            })
                        }), this.mutationObserver.observe(this.el, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        })), this.resizeObserver = new l.default(this.recalculate.bind(this)), this.resizeObserver.observe(this.el)
                    }
                }, {
                    key: "removeListeners",
                    value: function() {
                        this.options.autoHide && this.el.removeEventListener("mouseenter", this.onMouseEnter), this.scrollbarX.removeEventListener("mousedown", this.onDragX), this.scrollbarY.removeEventListener("mousedown", this.onDragY), this.scrollContentEl.removeEventListener("scroll", this.onScrollY), this.contentEl.removeEventListener("scroll", this.onScrollX), this.mutationObserver.disconnect(), this.resizeObserver.disconnect()
                    }
                }, {
                    key: "onDragX",
                    value: function(e) {
                        this.onDrag(e, "x")
                    }
                }, {
                    key: "onDragY",
                    value: function(e) {
                        this.onDrag(e, "y")
                    }
                }, {
                    key: "onDrag",
                    value: function(e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "y";
                        e.preventDefault();
                        var n = "y" === t ? this.scrollbarY : this.scrollbarX,
                            i = "y" === t ? e.pageY : e.pageX;
                        this.dragOffset[t] = i - n.getBoundingClientRect()[this.offsetAttr[t]], this.currentAxis = t, document.addEventListener("mousemove", this.drag), document.addEventListener("mouseup", this.onEndDrag)
                    }
                }, {
                    key: "drag",
                    value: function(e) {
                        var t, n, i;
                        e.preventDefault(), "y" === this.currentAxis ? (t = e.pageY, n = this.trackY, i = this.scrollContentEl) : (t = e.pageX, n = this.trackX, i = this.contentEl);
                        var r = (t - n.getBoundingClientRect()[this.offsetAttr[this.currentAxis]] - this.dragOffset[this.currentAxis]) / n[this.sizeAttr[this.currentAxis]] * this.contentEl[this.scrollSizeAttr[this.currentAxis]];
                        i[this.scrollOffsetAttr[this.currentAxis]] = r
                    }
                }, {
                    key: "onEndDrag",
                    value: function() {
                        document.removeEventListener("mousemove", this.drag), document.removeEventListener("mouseup", this.onEndDrag)
                    }
                }, {
                    key: "resizeScrollbar",
                    value: function() {
                        var e, t, n, i, r, s = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "y";
                        "x" === s ? (e = this.trackX, t = this.scrollbarX, n = this.contentEl[this.scrollOffsetAttr[s]], i = this.contentSizeX, r = this.scrollbarXSize) : (e = this.trackY, t = this.scrollbarY, n = this.scrollContentEl[this.scrollOffsetAttr[s]], i = this.contentSizeY, r = this.scrollbarYSize);
                        var o = r / i,
                            a = n / (i - r),
                            l = Math.max(~~(o * r), this.options.scrollbarMinSize),
                            c = ~~((r - l) * a);
                        this.isVisible[s] = r < i, this.isVisible[s] || this.options.forceVisible ? (e.style.visibility = "visible", this.options.forceVisible ? t.style.visibility = "hidden" : t.style.visibility = "visible", "x" === s ? (t.style.left = "".concat(c, "px"), t.style.width = "".concat(l, "px")) : (t.style.top = "".concat(c, "px"), t.style.height = "".concat(l, "px"))) : e.style.visibility = "hidden"
                    }
                }, {
                    key: "onScrollX",
                    value: function() {
                        this.flashScrollbar("x")
                    }
                }, {
                    key: "onScrollY",
                    value: function() {
                        this.flashScrollbar("y")
                    }
                }, {
                    key: "onMouseEnter",
                    value: function() {
                        this.flashScrollbar("x"), this.flashScrollbar("y")
                    }
                }, {
                    key: "flashScrollbar",
                    value: function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "y";
                        this.resizeScrollbar(e), this.showScrollbar(e)
                    }
                }, {
                    key: "showScrollbar",
                    value: function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "y";
                        this.isVisible[e] && ("x" === e ? this.scrollbarX.classList.add("visible") : this.scrollbarY.classList.add("visible"), this.options.autoHide && ("number" == typeof this.flashTimeout && window.clearTimeout(this.flashTimeout), this.flashTimeout = window.setTimeout(this.hideScrollbar.bind(this), 1e3)))
                    }
                }, {
                    key: "hideScrollbar",
                    value: function() {
                        this.scrollbarX.classList.remove("visible"), this.scrollbarY.classList.remove("visible"), "number" == typeof this.flashTimeout && window.clearTimeout(this.flashTimeout)
                    }
                }, {
                    key: "recalculate",
                    value: function() {
                        this.contentSizeX = this.contentEl[this.scrollSizeAttr.x], this.contentSizeY = this.contentEl[this.scrollSizeAttr.y] - (this.scrollbarWidth || this.offsetSize), this.scrollbarXSize = this.trackX[this.sizeAttr.x], this.scrollbarYSize = this.trackY[this.sizeAttr.y], this.resizeScrollbar("x"), this.resizeScrollbar("y"), this.options.autoHide || (this.showScrollbar("x"), this.showScrollbar("y"))
                    }
                }, {
                    key: "getScrollElement",
                    value: function() {
                        return "y" === (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "y") ? this.scrollContentEl : this.contentEl
                    }
                }, {
                    key: "getContentElement",
                    value: function() {
                        return this.contentEl
                    }
                }, {
                    key: "unMount",
                    value: function() {
                        this.removeListeners(), this.el.SimpleBar = null
                    }
                }, {
                    key: "isChildNode",
                    value: function(e) {
                        return null !== e && (e === this.el || this.isChildNode(e.parentNode))
                    }
                }]) && s(e.prototype, t), n && s(e, n), r;
                var e, t, n
            }();
            (t.default = r).initHtmlApi()
        }, function(e, t, n) {
            n(29), n(46), e.exports = n(3).Array.from
        }, function(e, t, n) {
            "use strict";
            var i = n(30)(!0);
            n(31)(String, "String", function(e) {
                this._t = String(e), this._i = 0
            }, function() {
                var e, t = this._t,
                    n = this._i;
                return n >= t.length ? {
                    value: void 0,
                    done: !0
                } : (e = i(t, n), this._i += e.length, {
                    value: e,
                    done: !1
                })
            })
        }, function(e, t, n) {
            var l = n(8),
                c = n(9);
            e.exports = function(a) {
                return function(e, t) {
                    var n, i, r = String(c(e)),
                        s = l(t),
                        o = r.length;
                    return s < 0 || o <= s ? a ? "" : void 0 : (n = r.charCodeAt(s)) < 55296 || 56319 < n || s + 1 === o || (i = r.charCodeAt(s + 1)) < 56320 || 57343 < i ? a ? r.charAt(s) : n : a ? r.slice(s, s + 2) : i - 56320 + (n - 55296 << 10) + 65536
                }
            }
        }, function(e, t, n) {
            "use strict";
            var b = n(32),
                w = n(15),
                x = n(18),
                E = n(4),
                T = n(2),
                S = n(13),
                C = n(36),
                _ = n(25),
                k = n(45),
                A = n(0)("iterator"),
                D = !([].keys && "next" in [].keys()),
                O = function() {
                    return this
                };
            e.exports = function(e, t, n, i, r, s, o) {
                C(n, t, i);
                var a, l, c, u = function(e) {
                        if (!D && e in f) return f[e];
                        switch (e) {
                            case "keys":
                            case "values":
                                return function() {
                                    return new n(this, e)
                                }
                        }
                        return function() {
                            return new n(this, e)
                        }
                    },
                    d = t + " Iterator",
                    h = "values" == r,
                    p = !1,
                    f = e.prototype,
                    m = f[A] || f["@@iterator"] || r && f[r],
                    v = m || u(r),
                    g = r ? h ? u("entries") : v : void 0,
                    y = "Array" == t && f.entries || m;
                if (y && (c = k(y.call(new e))) !== Object.prototype && c.next && (_(c, d, !0), b || T(c, A) || E(c, A, O)), h && m && "values" !== m.name && (p = !0, v = function() {
                        return m.call(this)
                    }), b && !o || !D && !p && f[A] || E(f, A, v), S[t] = v, S[d] = O, r)
                    if (a = {
                            values: h ? v : u("values"),
                            keys: s ? v : u("keys"),
                            entries: g
                        }, o)
                        for (l in a) l in f || x(f, l, a[l]);
                    else w(w.P + w.F * (D || p), t, a);
                return a
            }
        }, function(e, t) {
            e.exports = !1
        }, function(e, t, n) {
            e.exports = !n(7) && !n(16)(function() {
                return 7 != Object.defineProperty(n(17)("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        }, function(e, t, n) {
            var r = n(10);
            e.exports = function(e, t) {
                if (!r(e)) return e;
                var n, i;
                if (t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
                if ("function" == typeof(n = e.valueOf) && !r(i = n.call(e))) return i;
                if (!t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
                throw TypeError("Can't convert object to primitive value")
            }
        }, function(e, t) {
            e.exports = function(e) {
                if ("function" != typeof e) throw TypeError(e + " is not a function!");
                return e
            }
        }, function(e, t, n) {
            "use strict";
            var i = n(37),
                r = n(11),
                s = n(25),
                o = {};
            n(4)(o, n(0)("iterator"), function() {
                return this
            }), e.exports = function(e, t, n) {
                e.prototype = i(o, {
                    next: r(1, n)
                }), s(e, t + " Iterator")
            }
        }, function(e, t, i) {
            var r = i(6),
                s = i(38),
                o = i(24),
                a = i(14)("IE_PROTO"),
                l = function() {},
                c = function() {
                    var e, t = i(17)("iframe"),
                        n = o.length;
                    for (t.style.display = "none", i(44).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), c = e.F; n--;) delete c.prototype[o[n]];
                    return c()
                };
            e.exports = Object.create || function(e, t) {
                var n;
                return null !== e ? (l.prototype = r(e), n = new l, l.prototype = null, n[a] = e) : n = c(), void 0 === t ? n : s(n, t)
            }
        }, function(e, t, n) {
            var o = n(5),
                a = n(6),
                l = n(39);
            e.exports = n(7) ? Object.defineProperties : function(e, t) {
                a(e);
                for (var n, i = l(t), r = i.length, s = 0; s < r;) o.f(e, n = i[s++], t[n]);
                return e
            }
        }, function(e, t, n) {
            var i = n(40),
                r = n(24);
            e.exports = Object.keys || function(e) {
                return i(e, r)
            }
        }, function(e, t, n) {
            var o = n(2),
                a = n(20),
                l = n(42)(!1),
                c = n(14)("IE_PROTO");
            e.exports = function(e, t) {
                var n, i = a(e),
                    r = 0,
                    s = [];
                for (n in i) n != c && o(i, n) && s.push(n);
                for (; t.length > r;) o(i, n = t[r++]) && (~l(s, n) || s.push(n));
                return s
            }
        }, function(e, t, n) {
            var i = n(21);
            e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
                return "String" == i(e) ? e.split("") : Object(e)
            }
        }, function(e, t, n) {
            var l = n(20),
                c = n(22),
                u = n(43);
            e.exports = function(a) {
                return function(e, t, n) {
                    var i, r = l(e),
                        s = c(r.length),
                        o = u(n, s);
                    if (a && t != t) {
                        for (; o < s;)
                            if ((i = r[o++]) != i) return !0
                    } else
                        for (; o < s; o++)
                            if ((a || o in r) && r[o] === t) return a || o || 0; return !a && -1
                }
            }
        }, function(e, t, n) {
            var i = n(8),
                r = Math.max,
                s = Math.min;
            e.exports = function(e, t) {
                return (e = i(e)) < 0 ? r(e + t, 0) : s(e, t)
            }
        }, function(e, t, n) {
            var i = n(1).document;
            e.exports = i && i.documentElement
        }, function(e, t, n) {
            var i = n(2),
                r = n(26),
                s = n(14)("IE_PROTO"),
                o = Object.prototype;
            e.exports = Object.getPrototypeOf || function(e) {
                return e = r(e), i(e, s) ? e[s] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? o : null
            }
        }, function(e, t, n) {
            "use strict";
            var h = n(19),
                i = n(15),
                p = n(26),
                f = n(47),
                m = n(48),
                v = n(22),
                g = n(49),
                y = n(50);
            i(i.S + i.F * !n(52)(function(e) {
                Array.from(e)
            }), "Array", {
                from: function(e) {
                    var t, n, i, r, s = p(e),
                        o = "function" == typeof this ? this : Array,
                        a = arguments.length,
                        l = 1 < a ? arguments[1] : void 0,
                        c = void 0 !== l,
                        u = 0,
                        d = y(s);
                    if (c && (l = h(l, 2 < a ? arguments[2] : void 0, 2)), null == d || o == Array && m(d))
                        for (n = new o(t = v(s.length)); u < t; u++) g(n, u, c ? l(s[u], u) : s[u]);
                    else
                        for (r = d.call(s), n = new o; !(i = r.next()).done; u++) g(n, u, c ? f(r, l, [i.value, u], !0) : i.value);
                    return n.length = u, n
                }
            })
        }, function(e, t, n) {
            var s = n(6);
            e.exports = function(e, t, n, i) {
                try {
                    return i ? t(s(n)[0], n[1]) : t(n)
                } catch (t) {
                    var r = e.return;
                    throw void 0 !== r && s(r.call(e)), t
                }
            }
        }, function(e, t, n) {
            var i = n(13),
                r = n(0)("iterator"),
                s = Array.prototype;
            e.exports = function(e) {
                return void 0 !== e && (i.Array === e || s[r] === e)
            }
        }, function(e, t, n) {
            "use strict";
            var i = n(5),
                r = n(11);
            e.exports = function(e, t, n) {
                t in e ? i.f(e, t, r(0, n)) : e[t] = n
            }
        }, function(e, t, n) {
            var i = n(51),
                r = n(0)("iterator"),
                s = n(13);
            e.exports = n(3).getIteratorMethod = function(e) {
                if (null != e) return e[r] || e["@@iterator"] || s[i(e)]
            }
        }, function(e, t, n) {
            var r = n(21),
                s = n(0)("toStringTag"),
                o = "Arguments" == r(function() {
                    return arguments
                }());
            e.exports = function(e) {
                var t, n, i;
                return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
                    try {
                        return e[t]
                    } catch (e) {}
                }(t = Object(e), s)) ? n : o ? r(t) : "Object" == (i = r(t)) && "function" == typeof t.callee ? "Arguments" : i
            }
        }, function(e, t, n) {
            var s = n(0)("iterator"),
                o = !1;
            try {
                var i = [7][s]();
                i.return = function() {
                    o = !0
                }, Array.from(i, function() {
                    throw 2
                })
            } catch (e) {}
            e.exports = function(e, t) {
                if (!t && !o) return !1;
                var n = !1;
                try {
                    var i = [7],
                        r = i[s]();
                    r.next = function() {
                        return {
                            done: n = !0
                        }
                    }, i[s] = function() {
                        return r
                    }, e(i)
                } catch (e) {}
                return n
            }
        }, function(e, t, n) {
            var i, r, s;
            r = [], void 0 !== (s = "function" == typeof(i = function() {
                "use strict";
                return function() {
                    if ("undefined" == typeof document) return 0;
                    var e, t = document.body,
                        n = document.createElement("div"),
                        i = n.style;
                    return i.position = "absolute", i.top = i.left = "-9999px", i.width = i.height = "100px", i.overflow = "scroll", t.appendChild(n), e = n.offsetWidth - n.clientWidth, t.removeChild(n), e
                }
            }) ? i.apply(t, r) : i) && (e.exports = s)
        }, function(r, e, t) {
            (function(e) {
                function y(e) {
                    var t = typeof e;
                    return !!e && ("object" == t || "function" == t)
                }

                function b(e) {
                    if ("number" == typeof e) return e;
                    if ("symbol" == typeof(t = e) || (n = t) && "object" == typeof n && h.call(t) == o) return s;
                    var t, n;
                    if (y(e)) {
                        var i = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = y(i) ? i + "" : i
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(a, "");
                    var r = c.test(e);
                    return r || u.test(e) ? d(e.slice(2), r ? 2 : 8) : l.test(e) ? s : +e
                }
                var w = "Expected a function",
                    s = NaN,
                    o = "[object Symbol]",
                    a = /^\s+|\s+$/g,
                    l = /^[-+]0x[0-9a-f]+$/i,
                    c = /^0b[01]+$/i,
                    u = /^0o[0-7]+$/i,
                    d = parseInt,
                    t = "object" == typeof e && e && e.Object === Object && e,
                    n = "object" == typeof self && self && self.Object === Object && self,
                    i = t || n || Function("return this")(),
                    h = Object.prototype.toString,
                    x = Math.max,
                    E = Math.min,
                    T = function() {
                        return i.Date.now()
                    };
                r.exports = function(i, r, e) {
                    function s(e) {
                        var t = c,
                            n = u;
                        return c = u = void 0, m = e, h = i.apply(n, t)
                    }

                    function o(e) {
                        var t = e - f;
                        return void 0 === f || r <= t || t < 0 || g && d <= e - m
                    }

                    function a() {
                        var e, t, n = T();
                        if (o(n)) return l(n);
                        p = setTimeout(a, (t = r - ((e = n) - f), g ? E(t, d - (e - m)) : t))
                    }

                    function l(e) {
                        return p = void 0, n && c ? s(e) : (c = u = void 0, h)
                    }

                    function t() {
                        var e, t = T(),
                            n = o(t);
                        if (c = arguments, u = this, f = t, n) {
                            if (void 0 === p) return m = e = f, p = setTimeout(a, r), v ? s(e) : h;
                            if (g) return p = setTimeout(a, r), s(f)
                        }
                        return void 0 === p && (p = setTimeout(a, r)), h
                    }
                    var c, u, d, h, p, f, m = 0,
                        v = !1,
                        g = !1,
                        n = !0;
                    if ("function" != typeof i) throw new TypeError(w);
                    return r = b(r) || 0, y(e) && (v = !!e.leading, d = (g = "maxWait" in e) ? x(b(e.maxWait) || 0, r) : d, n = "trailing" in e ? !!e.trailing : n), t.cancel = function() {
                        void 0 !== p && clearTimeout(p), c = f = u = p = void(m = 0)
                    }, t.flush = function() {
                        return void 0 === p ? h : l(T())
                    }, t
                }
            }).call(e, t(55))
        }, function(e, t) {
            var n;
            n = function() {
                return this
            }();
            try {
                n = n || Function("return this")() || (0, eval)("this")
            } catch (e) {
                "object" == typeof window && (n = window)
            }
            e.exports = n
        }, function(e, t, n) {
            "use strict";

            function d(e) {
                return parseFloat(e) || 0
            }

            function h(n) {
                return Array.prototype.slice.call(arguments, 1).reduce(function(e, t) {
                    return e + d(n["border-" + t + "-width"])
                }, 0)
            }

            function i(e) {
                var t = e.clientWidth,
                    n = e.clientHeight;
                if (!t && !n) return g;
                var i = getComputedStyle(e),
                    r = function(e) {
                        for (var t = {}, n = 0, i = ["top", "right", "bottom", "left"]; n < i.length; n += 1) {
                            var r = i[n],
                                s = e["padding-" + r];
                            t[r] = d(s)
                        }
                        return t
                    }(i),
                    s = r.left + r.right,
                    o = r.top + r.bottom,
                    a = d(i.width),
                    l = d(i.height);
                if ("border-box" === i.boxSizing && (Math.round(a + s) !== t && (a -= h(i, "left", "right") + s), Math.round(l + o) !== n && (l -= h(i, "top", "bottom") + o)), e !== document.documentElement) {
                    var c = Math.round(a + s) - t,
                        u = Math.round(l + o) - n;
                    1 !== Math.abs(c) && (a -= c), 1 !== Math.abs(u) && (l -= u)
                }
                return p(r.left, r.top, a, l)
            }

            function r(e) {
                return o ? y(e) ? p(0, 0, (t = e.getBBox()).width, t.height) : i(e) : g;
                var t
            }

            function p(e, t, n, i) {
                return {
                    x: e,
                    y: t,
                    width: n,
                    height: i
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = function() {
                    function i(e, n) {
                        var i = -1;
                        return e.some(function(e, t) {
                            return e[0] === n && (i = t, !0)
                        }), i
                    }
                    return "undefined" != typeof Map ? Map : function() {
                        function e() {
                            this.__entries__ = []
                        }
                        var t = {
                            size: {}
                        };
                        return t.size.get = function() {
                            return this.__entries__.length
                        }, e.prototype.get = function(e) {
                            var t = i(this.__entries__, e),
                                n = this.__entries__[t];
                            return n && n[1]
                        }, e.prototype.set = function(e, t) {
                            var n = i(this.__entries__, e);
                            ~n ? this.__entries__[n][1] = t : this.__entries__.push([e, t])
                        }, e.prototype.delete = function(e) {
                            var t = this.__entries__,
                                n = i(t, e);
                            ~n && t.splice(n, 1)
                        }, e.prototype.has = function(e) {
                            return !!~i(this.__entries__, e)
                        }, e.prototype.clear = function() {
                            this.__entries__.splice(0)
                        }, e.prototype.forEach = function(e, t) {
                            void 0 === t && (t = null);
                            for (var n = 0, i = this.__entries__; n < i.length; n += 1) {
                                var r = i[n];
                                e.call(t, r[1], r[0])
                            }
                        }, Object.defineProperties(e.prototype, t), e
                    }()
                }(),
                o = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
                l = "function" == typeof requestAnimationFrame ? requestAnimationFrame : function(e) {
                    return setTimeout(function() {
                        return e(Date.now())
                    }, 1e3 / 60)
                },
                c = 2,
                a = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
                u = "undefined" != typeof navigator && /Trident\/.*rv:11/.test(navigator.userAgent),
                f = "undefined" != typeof MutationObserver && !u,
                m = function() {
                    this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(e, t) {
                        function n() {
                            s && (s = !1, e()), o && r()
                        }

                        function i() {
                            l(n)
                        }

                        function r() {
                            var e = Date.now();
                            if (s) {
                                if (e - a < c) return;
                                o = !0
                            } else o = !(s = !0), setTimeout(i, t);
                            a = e
                        }
                        var s = !1,
                            o = !1,
                            a = 0;
                        return r
                    }(this.refresh.bind(this), 20)
                };
            m.prototype.addObserver = function(e) {
                ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_()
            }, m.prototype.removeObserver = function(e) {
                var t = this.observers_,
                    n = t.indexOf(e);
                ~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_()
            }, m.prototype.refresh = function() {
                this.updateObservers_() && this.refresh()
            }, m.prototype.updateObservers_ = function() {
                var e = this.observers_.filter(function(e) {
                    return e.gatherActive(), e.hasActive()
                });
                return e.forEach(function(e) {
                    return e.broadcastActive()
                }), 0 < e.length
            }, m.prototype.connect_ = function() {
                o && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), f ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
            }, m.prototype.disconnect_ = function() {
                o && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
            }, m.prototype.onTransitionEnd_ = function(e) {
                var t = e.propertyName;
                a.some(function(e) {
                    return !!~t.indexOf(e)
                }) && this.refresh()
            }, m.getInstance = function() {
                return this.instance_ || (this.instance_ = new m), this.instance_
            }, m.instance_ = null;
            var v = function(e, t) {
                    for (var n = 0, i = Object.keys(t); n < i.length; n += 1) {
                        var r = i[n];
                        Object.defineProperty(e, r, {
                            value: t[r],
                            enumerable: !1,
                            writable: !1,
                            configurable: !0
                        })
                    }
                    return e
                },
                g = p(0, 0, 0, 0),
                y = "undefined" != typeof SVGGraphicsElement ? function(e) {
                    return e instanceof SVGGraphicsElement
                } : function(e) {
                    return e instanceof SVGElement && "function" == typeof e.getBBox
                },
                b = function(e) {
                    this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = p(0, 0, 0, 0), this.target = e
                };
            b.prototype.isActive = function() {
                var e = r(this.target);
                return (this.contentRect_ = e).width !== this.broadcastWidth || e.height !== this.broadcastHeight
            }, b.prototype.broadcastRect = function() {
                var e = this.contentRect_;
                return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e
            };
            var w = function(e, t) {
                    var n, i, r, s, o, a, l, c = (i = (n = t).x, r = n.y, s = n.width, o = n.height, a = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, l = Object.create(a.prototype), v(l, {
                        x: i,
                        y: r,
                        width: s,
                        height: o,
                        top: r,
                        right: i + s,
                        bottom: o + r,
                        left: i
                    }), l);
                    v(this, {
                        target: e,
                        contentRect: c
                    })
                },
                x = function(e, t, n) {
                    if ("function" != typeof e) throw new TypeError("The callback provided as parameter 1 is not a function.");
                    this.activeObservations_ = [], this.observations_ = new s, this.callback_ = e, this.controller_ = t, this.callbackCtx_ = n
                };
            x.prototype.observe = function(e) {
                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                if ("undefined" != typeof Element && Element instanceof Object) {
                    if (!(e instanceof Element)) throw new TypeError('parameter 1 is not of type "Element".');
                    var t = this.observations_;
                    t.has(e) || (t.set(e, new b(e)), this.controller_.addObserver(this), this.controller_.refresh())
                }
            }, x.prototype.unobserve = function(e) {
                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                if ("undefined" != typeof Element && Element instanceof Object) {
                    if (!(e instanceof Element)) throw new TypeError('parameter 1 is not of type "Element".');
                    var t = this.observations_;
                    t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this))
                }
            }, x.prototype.disconnect = function() {
                this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
            }, x.prototype.gatherActive = function() {
                var t = this;
                this.clearActive(), this.observations_.forEach(function(e) {
                    e.isActive() && t.activeObservations_.push(e)
                })
            }, x.prototype.broadcastActive = function() {
                if (this.hasActive()) {
                    var e = this.callbackCtx_,
                        t = this.activeObservations_.map(function(e) {
                            return new w(e.target, e.broadcastRect())
                        });
                    this.callback_.call(e, t, e), this.clearActive()
                }
            }, x.prototype.clearActive = function() {
                this.activeObservations_.splice(0)
            }, x.prototype.hasActive = function() {
                return 0 < this.activeObservations_.length
            };
            var E = "undefined" != typeof WeakMap ? new WeakMap : new s,
                T = function(e) {
                    if (!(this instanceof T)) throw new TypeError("Cannot call a class as a function");
                    if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                    var t = m.getInstance(),
                        n = new x(e, t, this);
                    E.set(this, n)
                };
            ["observe", "unobserve", "disconnect"].forEach(function(t) {
                T.prototype[t] = function() {
                    return (e = E.get(this))[t].apply(e, arguments);
                    var e
                }
            });
            var S = "undefined" != typeof ResizeObserver ? ResizeObserver : T;
            t.default = S
        }, function(e, t) {}, function(e, t, n) {
            "use strict";
            var l = Object.getOwnPropertySymbols,
                c = Object.prototype.hasOwnProperty,
                u = Object.prototype.propertyIsEnumerable;
            e.exports = function() {
                try {
                    if (!Object.assign) return !1;
                    var e = new String("abc");
                    if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                    for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                    if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
                            return t[e]
                        }).join("")) return !1;
                    var i = {};
                    return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                        i[e] = e
                    }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("")
                } catch (e) {
                    return !1
                }
            }() ? Object.assign : function(e, t) {
                for (var n, i, r = function(e) {
                        if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                        return Object(e)
                    }(e), s = 1; s < arguments.length; s++) {
                    for (var o in n = Object(arguments[s])) c.call(n, o) && (r[o] = n[o]);
                    if (l) {
                        i = l(n);
                        for (var a = 0; a < i.length; a++) u.call(n, i[a]) && (r[i[a]] = n[i[a]])
                    }
                }
                return r
            }
        }]).default
    }), window.Modernizr = function(i, d, o) {
        function n(e) {
            m.cssText = e
        }

        function s(e, t) {
            return typeof e === t
        }

        function r(e, t) {
            return !!~("" + e).indexOf(t)
        }

        function a(e, t) {
            for (var n in e) {
                var i = e[n];
                if (!r(i, "-") && m[i] !== o) return "pfx" != t || i
            }
            return !1
        }

        function l(e, t, n) {
            var i = e.charAt(0).toUpperCase() + e.slice(1),
                r = (e + " " + x.join(i + " ") + i).split(" ");
            return s(t, "string") || s(t, "undefined") ? a(r, t) : function(e, t, n) {
                for (var i in e) {
                    var r = t[e[i]];
                    if (r !== o) return !1 === n ? e[i] : s(r, "function") ? r.bind(n || t) : r
                }
                return !1
            }(r = (e + " " + E.join(i + " ") + i).split(" "), t, n)
        }
        var e, c, u, h = {},
            p = d.documentElement,
            f = "modernizr",
            t = d.createElement(f),
            m = t.style,
            v = d.createElement("input"),
            g = ":)",
            y = {}.toString,
            b = " -webkit- -moz- -o- -ms- ".split(" "),
            w = "Webkit Moz O ms",
            x = w.split(" "),
            E = w.toLowerCase().split(" "),
            T = "http://www.w3.org/2000/svg",
            S = {},
            C = {},
            _ = {},
            k = [],
            A = k.slice,
            D = function(e, t, n, i) {
                var r, s, o, a, l = d.createElement("div"),
                    c = d.body,
                    u = c || d.createElement("body");
                if (parseInt(n, 10))
                    for (; n--;)(o = d.createElement("div")).id = i ? i[n] : f + (n + 1), l.appendChild(o);
                return r = ["&#173;", '<style id="s', f, '">', e, "</style>"].join(""), l.id = f, (c ? l : u).innerHTML += r, u.appendChild(l), c || (u.style.background = "", u.style.overflow = "hidden", a = p.style.overflow, p.style.overflow = "hidden", p.appendChild(u)), s = t(l, e), c ? l.parentNode.removeChild(l) : (u.parentNode.removeChild(u), p.style.overflow = a), !!s
            },
            O = (u = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            }, function(e, t) {
                t = t || d.createElement(u[e] || "div");
                var n = (e = "on" + e) in t;
                return n || (t.setAttribute || (t = d.createElement("div")), t.setAttribute && t.removeAttribute && (t.setAttribute(e, ""), n = s(t[e], "function"), s(t[e], "undefined") || (t[e] = o), t.removeAttribute(e))), t = null, n
            }),
            M = {}.hasOwnProperty;
        for (var I in c = s(M, "undefined") || s(M.call, "undefined") ? function(e, t) {
                return t in e && s(e.constructor.prototype[t], "undefined")
            } : function(e, t) {
                return M.call(e, t)
            }, Function.prototype.bind || (Function.prototype.bind = function(i) {
                var r = this;
                if ("function" != typeof r) throw new TypeError;
                var s = A.call(arguments, 1),
                    o = function() {
                        if (this instanceof o) {
                            var e = function() {};
                            e.prototype = r.prototype;
                            var t = new e,
                                n = r.apply(t, s.concat(A.call(arguments)));
                            return Object(n) === n ? n : t
                        }
                        return r.apply(i, s.concat(A.call(arguments)))
                    };
                return o
            }), S.flexbox = function() {
                return l("flexWrap")
            }, S.canvas = function() {
                var e = d.createElement("canvas");
                return !!e.getContext && !!e.getContext("2d")
            }, S.canvastext = function() {
                return !!h.canvas && !!s(d.createElement("canvas").getContext("2d").fillText, "function")
            }, S.webgl = function() {
                return !!i.WebGLRenderingContext
            }, S.touch = function() {
                var t;
                return "ontouchstart" in i || i.DocumentTouch && d instanceof DocumentTouch ? t = !0 : D(["@media (", b.join("touch-enabled),("), f, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
                    t = 9 === e.offsetTop
                }), t
            }, S.geolocation = function() {
                return "geolocation" in navigator
            }, S.postmessage = function() {
                return !!i.postMessage
            }, S.websqldatabase = function() {
                return !!i.openDatabase
            }, S.indexedDB = function() {
                return !!l("indexedDB", i)
            }, S.hashchange = function() {
                return O("hashchange", i) && (d.documentMode === o || 7 < d.documentMode)
            }, S.history = function() {
                return !!i.history && !!history.pushState
            }, S.draganddrop = function() {
                var e = d.createElement("div");
                return "draggable" in e || "ondragstart" in e && "ondrop" in e
            }, S.websockets = function() {
                return "WebSocket" in i || "MozWebSocket" in i
            }, S.rgba = function() {
                return n("background-color:rgba(150,255,150,.5)"), r(m.backgroundColor, "rgba")
            }, S.hsla = function() {
                return n("background-color:hsla(120,40%,100%,.5)"), r(m.backgroundColor, "rgba") || r(m.backgroundColor, "hsla")
            }, S.multiplebgs = function() {
                return n("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(m.background)
            }, S.backgroundsize = function() {
                return l("backgroundSize")
            }, S.borderimage = function() {
                return l("borderImage")
            }, S.borderradius = function() {
                return l("borderRadius")
            }, S.boxshadow = function() {
                return l("boxShadow")
            }, S.textshadow = function() {
                return "" === d.createElement("div").style.textShadow
            }, S.opacity = function() {
                return e = "opacity:.55", n(b.join(e + ";") + (t || "")), /^0.55$/.test(m.opacity);
                var e, t
            }, S.cssanimations = function() {
                return l("animationName")
            }, S.csscolumns = function() {
                return l("columnCount")
            }, S.cssgradients = function() {
                var e = "background-image:";
                return n((e + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + e) + b.join("linear-gradient(left top,#9f9, white);" + e)).slice(0, -e.length)), r(m.backgroundImage, "gradient")
            }, S.cssreflections = function() {
                return l("boxReflect")
            }, S.csstransforms = function() {
                return !!l("transform")
            }, S.csstransforms3d = function() {
                var n = !!l("perspective");
                return n && "webkitPerspective" in p.style && D("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(e, t) {
                    n = 9 === e.offsetLeft && 3 === e.offsetHeight
                }), n
            }, S.csstransitions = function() {
                return l("transition")
            }, S.fontface = function() {
                var s;
                return D('@font-face {font-family:"font";src:url("https://")}', function(e, t) {
                    var n = d.getElementById("smodernizr"),
                        i = n.sheet || n.styleSheet,
                        r = i ? i.cssRules && i.cssRules[0] ? i.cssRules[0].cssText : i.cssText || "" : "";
                    s = /src/i.test(r) && 0 === r.indexOf(t.split(" ")[0])
                }), s
            }, S.generatedcontent = function() {
                var t;
                return D(["#", f, "{font:0/0 a}#", f, ':after{content:"', g, '";visibility:hidden;font:3px/1 a}'].join(""), function(e) {
                    t = 3 <= e.offsetHeight
                }), t
            }, S.video = function() {
                var e = d.createElement("video"),
                    t = !1;
                try {
                    (t = !!e.canPlayType) && ((t = new Boolean(t)).ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), t.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), t.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
                } catch (e) {}
                return t
            }, S.audio = function() {
                var e = d.createElement("audio"),
                    t = !1;
                try {
                    (t = !!e.canPlayType) && ((t = new Boolean(t)).ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), t.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), t.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), t.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
                } catch (e) {}
                return t
            }, S.localstorage = function() {
                try {
                    return localStorage.setItem(f, f), localStorage.removeItem(f), !0
                } catch (e) {
                    return !1
                }
            }, S.sessionstorage = function() {
                try {
                    return sessionStorage.setItem(f, f), sessionStorage.removeItem(f), !0
                } catch (e) {
                    return !1
                }
            }, S.webworkers = function() {
                return !!i.Worker
            }, S.applicationcache = function() {
                return !!i.applicationCache
            }, S.svg = function() {
                return !!d.createElementNS && !!d.createElementNS(T, "svg").createSVGRect
            }, S.inlinesvg = function() {
                var e = d.createElement("div");
                return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == T
            }, S.smil = function() {
                return !!d.createElementNS && /SVGAnimate/.test(y.call(d.createElementNS(T, "animate")))
            }, S.svgclippaths = function() {
                return !!d.createElementNS && /SVGClipPath/.test(y.call(d.createElementNS(T, "clipPath")))
            }, S) c(S, I) && (e = I.toLowerCase(), h[e] = S[I](), k.push((h[e] ? "" : "no-") + e));
        return h.input || (h.input = function(e) {
                for (var t = 0, n = e.length; t < n; t++) _[e[t]] = e[t] in v;
                return _.list && (_.list = !!d.createElement("datalist") && !!i.HTMLDataListElement), _
            }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), h.inputtypes = function(e) {
                for (var t, n, i, r = 0, s = e.length; r < s; r++) v.setAttribute("type", n = e[r]), (t = "text" !== v.type) && (v.value = g, v.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(n) && v.style.WebkitAppearance !== o ? (p.appendChild(v), t = (i = d.defaultView).getComputedStyle && "textfield" !== i.getComputedStyle(v, null).WebkitAppearance && 0 !== v.offsetHeight, p.removeChild(v)) : /^(search|tel)$/.test(n) || (t = /^(url|email)$/.test(n) ? v.checkValidity && !1 === v.checkValidity() : v.value != g)), C[e[r]] = !!t;
                return C
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))), h.addTest = function(e, t) {
                if ("object" == typeof e)
                    for (var n in e) c(e, n) && h.addTest(n, e[n]);
                else {
                    if (e = e.toLowerCase(), h[e] !== o) return h;
                    t = "function" == typeof t ? t() : t, p.className += " " + (t ? "" : "no-") + e, h[e] = t
                }
                return h
            }, n(""), t = v = null,
            function(e, l) {
                function c() {
                    var e = f.elements;
                    return "string" == typeof e ? e.split(" ") : e
                }

                function u(e) {
                    var t = a[e[i]];
                    return t || (t = {}, o++, e[i] = o, a[o] = t), t
                }

                function d(e, t, n) {
                    return t || (t = l), p ? t.createElement(e) : (n || (n = u(t)), !(i = n.cache[e] ? n.cache[e].cloneNode() : s.test(e) ? (n.cache[e] = n.createElem(e)).cloneNode() : n.createElem(e)).canHaveChildren || r.test(e) || i.tagUrn ? i : n.frag.appendChild(i));
                    var i
                }

                function t(e) {
                    e || (e = l);
                    var t, n, i, r, s, o, a = u(e);
                    return f.shivCSS && !h && !a.hasCSS && (a.hasCSS = (r = "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}", s = (i = e).createElement("p"), o = i.getElementsByTagName("head")[0] || i.documentElement, s.innerHTML = "x<style>" + r + "</style>", !!o.insertBefore(s.lastChild, o.firstChild))), p || (t = e, (n = a).cache || (n.cache = {}, n.createElem = t.createElement, n.createFrag = t.createDocumentFragment, n.frag = n.createFrag()), t.createElement = function(e) {
                        return f.shivMethods ? d(e, t, n) : n.createElem(e)
                    }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + c().join().replace(/[\w\-]+/g, function(e) {
                        return n.createElem(e), n.frag.createElement(e), 'c("' + e + '")'
                    }) + ");return n}")(f, n.frag)), e
                }
                var h, p, n = e.html5 || {},
                    r = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    s = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    i = "_html5shiv",
                    o = 0,
                    a = {};
                ! function() {
                    try {
                        var e = l.createElement("a");
                        e.innerHTML = "<xyz></xyz>", h = "hidden" in e, p = 1 == e.childNodes.length || function() {
                            l.createElement("a");
                            var e = l.createDocumentFragment();
                            return void 0 === e.cloneNode || void 0 === e.createDocumentFragment || void 0 === e.createElement
                        }()
                    } catch (e) {
                        p = h = !0
                    }
                }();
                var f = {
                    elements: n.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: "3.7.0",
                    shivCSS: !1 !== n.shivCSS,
                    supportsUnknownElements: p,
                    shivMethods: !1 !== n.shivMethods,
                    type: "default",
                    shivDocument: t,
                    createElement: d,
                    createDocumentFragment: function(e, t) {
                        if (e || (e = l), p) return e.createDocumentFragment();
                        for (var n = (t = t || u(e)).frag.cloneNode(), i = 0, r = c(), s = r.length; i < s; i++) n.createElement(r[i]);
                        return n
                    }
                };
                e.html5 = f, t(l)
            }(this, d), h._version = "2.8.3", h._prefixes = b, h._domPrefixes = E, h._cssomPrefixes = x, h.mq = function(e) {
                var t, n = i.matchMedia || i.msMatchMedia;
                return n ? n(e) && n(e).matches || !1 : (D("@media " + e + " { #" + f + " { position: absolute; } }", function(e) {
                    t = "absolute" == (i.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).position
                }), t)
            }, h.hasEvent = O, h.testProp = function(e) {
                return a([e])
            }, h.testAllProps = l, h.testStyles = D, h.prefixed = function(e, t, n) {
                return t ? l(e, t, n) : l(e, "pfx")
            }, p.className = p.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + k.join(" "), h
    }(this, this.document),
    function(e, h, a) {
        function d(e) {
            return "[object Function]" == r.call(e)
        }

        function p(e) {
            return "string" == typeof e
        }

        function f() {}

        function m(e) {
            return !e || "loaded" == e || "complete" == e || "uninitialized" == e
        }

        function v() {
            var e = w.shift();
            x = 1, e ? e.t ? y(function() {
                ("c" == e.t ? g.injectCss : g.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
            }, 0) : (e(), v()) : x = 0
        }

        function t(e, t, n, i, r) {
            return x = 0, t = t || "j", p(e) ? function(n, i, e, t, r, s, o) {
                function a(e) {
                    if (!c && m(l.readyState) && (d.r = c = 1, !x && v(), l.onload = l.onreadystatechange = null, e))
                        for (var t in "img" != n && y(function() {
                                T.removeChild(l)
                            }, 50), _[i]) _[i].hasOwnProperty(t) && _[i][t].onload()
                }
                o = o || g.errorTimeout;
                var l = h.createElement(n),
                    c = 0,
                    u = 0,
                    d = {
                        t: e,
                        s: i,
                        e: r,
                        a: s,
                        x: o
                    };
                1 === _[i] && (u = 1, _[i] = []), "object" == n ? l.data = i : (l.src = i, l.type = n), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
                    a.call(this, u)
                }, w.splice(t, 0, d), "img" != n && (u || 2 === _[i] ? (T.insertBefore(l, E ? null : b), y(a, o)) : _[i].push(l))
            }("c" == t ? c : o, e, t, this.i++, n, i, r) : (w.splice(this.i++, 0, e), 1 == w.length && v()), this
        }

        function l() {
            var e = g;
            return e.loader = {
                load: t,
                i: 0
            }, e
        }
        var n, g, i = h.documentElement,
            y = e.setTimeout,
            b = h.getElementsByTagName("script")[0],
            r = {}.toString,
            w = [],
            x = 0,
            s = "MozAppearance" in i.style,
            E = s && !!h.createRange().compareNode,
            T = E ? i : b.parentNode,
            o = (i = e.opera && "[object Opera]" == r.call(e.opera), i = !!h.attachEvent && !i, s ? "object" : i ? "script" : "img"),
            c = i ? "script" : o,
            S = Array.isArray || function(e) {
                return "[object Array]" == r.call(e)
            },
            C = [],
            _ = {},
            k = {
                timeout: function(e, t) {
                    return t.length && (e.timeout = t[0]), e
                }
            };
        (g = function(e) {
            function u(e, t, n, i, r) {
                var s = function(e) {
                        e = e.split("!");
                        var t, n, i, r = C.length,
                            s = e.pop(),
                            o = e.length;
                        for (s = {
                                url: s,
                                origUrl: s,
                                prefixes: e
                            }, n = 0; n < o; n++) i = e[n].split("="), (t = k[i.shift()]) && (s = t(s, i));
                        for (n = 0; n < r; n++) s = C[n](s);
                        return s
                    }(e),
                    o = s.autoCallback;
                s.url.split(".").pop().split("?").shift(), s.bypass || (t && (t = d(t) ? t : t[e] || t[i] || t[e.split("/").pop().split("?")[0]]), s.instead ? s.instead(e, t, n, i, r) : (_[s.url] ? s.noexec = !0 : _[s.url] = 1, n.load(s.url, s.forceCSS || !s.forceJS && "css" == s.url.split(".").pop().split("?").shift() ? "c" : a, s.noexec, s.attrs, s.timeout), (d(t) || d(o)) && n.load(function() {
                    l(), t && t(s.origUrl, r, i), o && o(s.origUrl, r, i), _[s.url] = 2
                })))
            }

            function t(e, t) {
                function n(n, e) {
                    if (n) {
                        if (p(n)) e || (a = function() {
                            var e = [].slice.call(arguments);
                            l.apply(this, e), c()
                        }), u(n, a, t, 0, s);
                        else if (Object(n) === n)
                            for (r in i = function() {
                                    var e, t = 0;
                                    for (e in n) n.hasOwnProperty(e) && t++;
                                    return t
                                }(), n) n.hasOwnProperty(r) && (!e && !--i && (d(a) ? a = function() {
                                var e = [].slice.call(arguments);
                                l.apply(this, e), c()
                            } : a[r] = function(t) {
                                return function() {
                                    var e = [].slice.call(arguments);
                                    t && t.apply(this, e), c()
                                }
                            }(l[r])), u(n[r], a, t, r, s))
                    } else !e && c()
                }
                var i, r, s = !!e.test,
                    o = e.load || e.both,
                    a = e.callback || f,
                    l = a,
                    c = e.complete || f;
                n(s ? e.yep : e.nope, !!o), o && n(o)
            }
            var n, i, r = this.yepnope.loader;
            if (p(e)) u(e, 0, r, 0);
            else if (S(e))
                for (n = 0; n < e.length; n++) p(i = e[n]) ? u(i, 0, r, 0) : S(i) ? g(i) : Object(i) === i && t(i, r);
            else Object(e) === e && t(e, r)
        }).addPrefix = function(e, t) {
            k[e] = t
        }, g.addFilter = function(e) {
            C.push(e)
        }, g.errorTimeout = 1e4, null == h.readyState && h.addEventListener && (h.readyState = "loading", h.addEventListener("DOMContentLoaded", n = function() {
            h.removeEventListener("DOMContentLoaded", n, 0), h.readyState = "complete"
        }, 0)), e.yepnope = l(), e.yepnope.executeStack = v, e.yepnope.injectJs = function(e, t, n, i, r, s) {
            var o, a, l = h.createElement("script");
            i = i || g.errorTimeout;
            for (a in l.src = e, n) l.setAttribute(a, n[a]);
            t = s ? v : t || f, l.onreadystatechange = l.onload = function() {
                !o && m(l.readyState) && (o = 1, t(), l.onload = l.onreadystatechange = null)
            }, y(function() {
                o || t(o = 1)
            }, i), r ? l.onload() : b.parentNode.insertBefore(l, b)
        }, e.yepnope.injectCss = function(e, t, n, i, r, s) {
            var o;
            i = h.createElement("link"), t = s ? v : t || f;
            for (o in i.href = e, i.rel = "stylesheet", i.type = "text/css", n) i.setAttribute(o, n[o]);
            r || (b.parentNode.insertBefore(i, b), y(t, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    };
! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t()
}(this, function() {
    return function(n) {
        function i(e) {
            if (o[e]) return o[e].exports;
            var t = o[e] = {
                exports: {},
                id: e,
                loaded: !1
            };
            return n[e].call(t.exports, t, t.exports, i), t.loaded = !0, t.exports
        }
        var o = {};
        return i.m = n, i.c = o, i.p = "dist/", i(0)
    }([function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            },
            a = i((i(n(1)), n(6))),
            r = i(n(7)),
            s = i(n(8)),
            l = i(n(9)),
            c = i(n(10)),
            u = i(n(11)),
            d = i(n(14)),
            p = [],
            f = !1,
            m = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: "DOMContentLoaded",
                throttleDelay: 99,
                debounceDelay: 50,
                disableMutationObserver: !1
            },
            h = function() {
                if (0 < arguments.length && void 0 !== arguments[0] && arguments[0] && (f = !0), f) return p = (0, u.default)(p, m), (0, c.default)(p, m.once), p
            },
            v = function() {
                p = (0, d.default)(), h()
            };
        e.exports = {
            init: function(e) {
                m = o(m, e), p = (0, d.default)();
                var t, n = document.all && !window.atob;
                return !0 === (t = m.disable) || "mobile" === t && l.default.mobile() || "phone" === t && l.default.phone() || "tablet" === t && l.default.tablet() || "function" == typeof t && !0 === t() || n ? void p.forEach(function(e, t) {
                    e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay")
                }) : (m.disableMutationObserver || s.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), m.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", m.easing), document.querySelector("body").setAttribute("data-aos-duration", m.duration), document.querySelector("body").setAttribute("data-aos-delay", m.delay), "DOMContentLoaded" === m.startEvent && -1 < ["complete", "interactive"].indexOf(document.readyState) ? h(!0) : "load" === m.startEvent ? window.addEventListener(m.startEvent, function() {
                    h(!0)
                }) : document.addEventListener(m.startEvent, function() {
                    h(!0)
                }), window.addEventListener("resize", (0, r.default)(h, m.debounceDelay, !0)), window.addEventListener("orientationchange", (0, r.default)(h, m.debounceDelay, !0)), window.addEventListener("scroll", (0, a.default)(function() {
                    (0, c.default)(p, m.once)
                }, m.throttleDelay)), m.disableMutationObserver || s.default.ready("[data-aos]", v), p)
            },
            refresh: h,
            refreshHard: v
        }
    }, function(e, t) {}, , , , , function(h, e) {
        (function(e) {
            "use strict";

            function a(i, o, e) {
                function a(e) {
                    var t = c,
                        n = u;
                    return c = u = void 0, h = e, p = i.apply(n, t)
                }

                function r(e) {
                    var t = e - m;
                    return void 0 === m || o <= t || t < 0 || g && d <= e - h
                }

                function s() {
                    var e, t, n = C();
                    return r(n) ? l(n) : void(f = setTimeout(s, (t = o - ((e = n) - m), g ? x(t, d - (e - h)) : t)))
                }

                function l(e) {
                    return f = void 0, n && c ? a(e) : (c = u = void 0, p)
                }

                function t() {
                    var e, t = C(),
                        n = r(t);
                    if (c = arguments, u = this, m = t, n) {
                        if (void 0 === f) return h = e = m, f = setTimeout(s, o), v ? a(e) : p;
                        if (g) return f = setTimeout(s, o), a(m)
                    }
                    return void 0 === f && (f = setTimeout(s, o)), p
                }
                var c, u, d, p, f, m, h = 0,
                    v = !1,
                    g = !1,
                    n = !0;
                if ("function" != typeof i) throw new TypeError(w);
                return o = b(o) || 0, y(e) && (v = !!e.leading, d = (g = "maxWait" in e) ? k(b(e.maxWait) || 0, o) : d, n = "trailing" in e ? !!e.trailing : n), t.cancel = function() {
                    void 0 !== f && clearTimeout(f), c = m = u = f = void(h = 0)
                }, t.flush = function() {
                    return void 0 === f ? p : l(C())
                }, t
            }

            function y(e) {
                var t = void 0 === e ? "undefined" : n(e);
                return !!e && ("object" == t || "function" == t)
            }

            function i(e) {
                return "symbol" == (void 0 === e ? "undefined" : n(e)) || !!(t = e) && "object" == (void 0 === t ? "undefined" : n(t)) && m.call(e) == r;
                var t
            }

            function b(e) {
                if ("number" == typeof e) return e;
                if (i(e)) return o;
                if (y(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = y(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(s, "");
                var n = c.test(e);
                return n || u.test(e) ? d(e.slice(2), n ? 2 : 8) : l.test(e) ? o : +e
            }
            var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                w = "Expected a function",
                o = NaN,
                r = "[object Symbol]",
                s = /^\s+|\s+$/g,
                l = /^[-+]0x[0-9a-f]+$/i,
                c = /^0b[01]+$/i,
                u = /^0o[0-7]+$/i,
                d = parseInt,
                t = "object" == (void 0 === e ? "undefined" : n(e)) && e && e.Object === Object && e,
                p = "object" == ("undefined" == typeof self ? "undefined" : n(self)) && self && self.Object === Object && self,
                f = t || p || Function("return this")(),
                m = Object.prototype.toString,
                k = Math.max,
                x = Math.min,
                C = function() {
                    return f.Date.now()
                };
            h.exports = function(e, t, n) {
                var i = !0,
                    o = !0;
                if ("function" != typeof e) throw new TypeError(w);
                return y(n) && (i = "leading" in n ? !!n.leading : i, o = "trailing" in n ? !!n.trailing : o), a(e, t, {
                    leading: i,
                    maxWait: t,
                    trailing: o
                })
            }
        }).call(e, function() {
            return this
        }())
    }, function(m, e) {
        (function(e) {
            "use strict";

            function y(e) {
                var t = void 0 === e ? "undefined" : n(e);
                return !!e && ("object" == t || "function" == t)
            }

            function i(e) {
                return "symbol" == (void 0 === e ? "undefined" : n(e)) || !!(t = e) && "object" == (void 0 === t ? "undefined" : n(t)) && f.call(e) == a;
                var t
            }

            function b(e) {
                if ("number" == typeof e) return e;
                if (i(e)) return o;
                if (y(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = y(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(r, "");
                var n = l.test(e);
                return n || c.test(e) ? u(e.slice(2), n ? 2 : 8) : s.test(e) ? o : +e
            }
            var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                w = "Expected a function",
                o = NaN,
                a = "[object Symbol]",
                r = /^\s+|\s+$/g,
                s = /^[-+]0x[0-9a-f]+$/i,
                l = /^0b[01]+$/i,
                c = /^0o[0-7]+$/i,
                u = parseInt,
                t = "object" == (void 0 === e ? "undefined" : n(e)) && e && e.Object === Object && e,
                d = "object" == ("undefined" == typeof self ? "undefined" : n(self)) && self && self.Object === Object && self,
                p = t || d || Function("return this")(),
                f = Object.prototype.toString,
                k = Math.max,
                x = Math.min,
                C = function() {
                    return p.Date.now()
                };
            m.exports = function(i, o, e) {
                function a(e) {
                    var t = c,
                        n = u;
                    return c = u = void 0, h = e, p = i.apply(n, t)
                }

                function r(e) {
                    var t = e - m;
                    return void 0 === m || o <= t || t < 0 || g && d <= e - h
                }

                function s() {
                    var e, t, n = C();
                    return r(n) ? l(n) : void(f = setTimeout(s, (t = o - ((e = n) - m), g ? x(t, d - (e - h)) : t)))
                }

                function l(e) {
                    return f = void 0, n && c ? a(e) : (c = u = void 0, p)
                }

                function t() {
                    var e, t = C(),
                        n = r(t);
                    if (c = arguments, u = this, m = t, n) {
                        if (void 0 === f) return h = e = m, f = setTimeout(s, o), v ? a(e) : p;
                        if (g) return f = setTimeout(s, o), a(m)
                    }
                    return void 0 === f && (f = setTimeout(s, o)), p
                }
                var c, u, d, p, f, m, h = 0,
                    v = !1,
                    g = !1,
                    n = !0;
                if ("function" != typeof i) throw new TypeError(w);
                return o = b(o) || 0, y(e) && (v = !!e.leading, d = (g = "maxWait" in e) ? k(b(e.maxWait) || 0, o) : d, n = "trailing" in e ? !!e.trailing : n), t.cancel = function() {
                    void 0 !== f && clearTimeout(f), c = m = u = f = void(h = 0)
                }, t.flush = function() {
                    return void 0 === f ? p : l(C())
                }, t
            }
        }).call(e, function() {
            return this
        }())
    }, function(e, t) {
        "use strict";

        function o() {
            return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
        }

        function a(e) {
            e && e.forEach(function(e) {
                var t = Array.prototype.slice.call(e.addedNodes),
                    n = Array.prototype.slice.call(e.removedNodes);
                if (function e(t) {
                        var n = void 0,
                            i = void 0;
                        for (n = 0; n < t.length; n += 1) {
                            if ((i = t[n]).dataset && i.dataset.aos) return !0;
                            if (i.children && e(i.children)) return !0
                        }
                        return !1
                    }(t.concat(n))) return r()
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {};
        t.default = {
            isSupported: function() {
                return !!o()
            },
            ready: function(e, t) {
                var n = window.document,
                    i = new(o())(a);
                r = t, i.observe(n.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0
                })
            }
        }
    }, function(e, t) {
        "use strict";

        function n() {
            return navigator.userAgent || navigator.vendor || window.opera || ""
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
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
            o = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
            s = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            l = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                return i(e, [{
                    key: "phone",
                    value: function() {
                        var e = n();
                        return !(!o.test(e) && !a.test(e.substr(0, 4)))
                    }
                }, {
                    key: "mobile",
                    value: function() {
                        var e = n();
                        return !(!r.test(e) && !s.test(e.substr(0, 4)))
                    }
                }, {
                    key: "tablet",
                    value: function() {
                        return this.mobile() && !this.phone()
                    }
                }]), e
            }();
        t.default = new l
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = function(e, r) {
            var s = window.pageYOffset,
                l = window.innerHeight;
            e.forEach(function(e, t) {
                var n, i, o, a;
                i = l + s, o = r, a = (n = e).node.getAttribute("data-aos-once"), i > n.position ? n.node.classList.add("aos-animate") : void 0 !== a && ("false" === a || !o && "true" !== a) && n.node.classList.remove("aos-animate")
            })
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, o = n(12),
            a = (i = o) && i.__esModule ? i : {
                default: i
            };
        t.default = function(e, n) {
            return e.forEach(function(e, t) {
                e.node.classList.add("aos-init"), e.position = (0, a.default)(e.node, n.offset)
            }), e
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, o = n(13),
            r = (i = o) && i.__esModule ? i : {
                default: i
            };
        t.default = function(e, t) {
            var n = 0,
                i = 0,
                o = window.innerHeight,
                a = {
                    offset: e.getAttribute("data-aos-offset"),
                    anchor: e.getAttribute("data-aos-anchor"),
                    anchorPlacement: e.getAttribute("data-aos-anchor-placement")
                };
            switch (a.offset && !isNaN(a.offset) && (i = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), n = (0, r.default)(e).top, a.anchorPlacement) {
                case "top-bottom":
                    break;
                case "center-bottom":
                    n += e.offsetHeight / 2;
                    break;
                case "bottom-bottom":
                    n += e.offsetHeight;
                    break;
                case "top-center":
                    n += o / 2;
                    break;
                case "bottom-center":
                    n += o / 2 + e.offsetHeight;
                    break;
                case "center-center":
                    n += o / 2 + e.offsetHeight / 2;
                    break;
                case "top-top":
                    n += o;
                    break;
                case "bottom-top":
                    n += e.offsetHeight + o;
                    break;
                case "center-top":
                    n += e.offsetHeight / 2 + o
            }
            return a.anchorPlacement || a.offset || isNaN(t) || (i = t), n + i
        }
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = function(e) {
            for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
            return {
                top: n,
                left: t
            }
        }
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = function(e) {
            return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, function(e) {
                return {
                    node: e
                }
            })
        }
    }])
});
var DecorationsT, JobT, SourceSpansT, pJS = function(e, t) {
    var n = document.querySelector("#" + e + " > .particles-js-canvas-el");
    this.pJS = {
        canvas: {
            el: n,
            w: n.offsetWidth,
            h: n.offsetHeight
        },
        particles: {
            number: {
                value: 400,
                density: {
                    enable: !0,
                    value_area: 800
                }
            },
            color: {
                value: "#fff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#ff0000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 1,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 2,
                    opacity_min: 0,
                    sync: !1
                }
            },
            size: {
                value: 20,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 20,
                    size_min: 0,
                    sync: !1
                }
            },
            line_linked: {
                enable: !0,
                distance: 100,
                color: "#fff",
                opacity: 1,
                width: 1
            },
            move: {
                enable: !0,
                speed: 2,
                direction: "none",
                random: !1,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {
                    enable: !1,
                    rotateX: 3e3,
                    rotateY: 3e3
                }
            },
            array: []
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !0,
                    mode: "grab"
                },
                onclick: {
                    enable: !0,
                    mode: "push"
                },
                resize: !0
            },
            modes: {
                grab: {
                    distance: 100,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 200,
                    size: 80,
                    duration: .4
                },
                repulse: {
                    distance: 200,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            },
            mouse: {}
        },
        retina_detect: !1,
        fn: {
            interact: {},
            modes: {},
            vendors: {}
        },
        tmp: {}
    };
    var f = this.pJS;
    t && Object.deepExtend(f, t), f.tmp.obj = {
        size_value: f.particles.size.value,
        size_anim_speed: f.particles.size.anim.speed,
        move_speed: f.particles.move.speed,
        line_linked_distance: f.particles.line_linked.distance,
        line_linked_width: f.particles.line_linked.width,
        mode_grab_distance: f.interactivity.modes.grab.distance,
        mode_bubble_distance: f.interactivity.modes.bubble.distance,
        mode_bubble_size: f.interactivity.modes.bubble.size,
        mode_repulse_distance: f.interactivity.modes.repulse.distance
    }, f.fn.retinaInit = function() {
        f.retina_detect && 1 < window.devicePixelRatio ? (f.canvas.pxratio = window.devicePixelRatio, f.tmp.retina = !0) : (f.canvas.pxratio = 1, f.tmp.retina = !1), f.canvas.w = f.canvas.el.offsetWidth * f.canvas.pxratio, f.canvas.h = f.canvas.el.offsetHeight * f.canvas.pxratio, f.particles.size.value = f.tmp.obj.size_value * f.canvas.pxratio, f.particles.size.anim.speed = f.tmp.obj.size_anim_speed * f.canvas.pxratio, f.particles.move.speed = f.tmp.obj.move_speed * f.canvas.pxratio, f.particles.line_linked.distance = f.tmp.obj.line_linked_distance * f.canvas.pxratio, f.interactivity.modes.grab.distance = f.tmp.obj.mode_grab_distance * f.canvas.pxratio, f.interactivity.modes.bubble.distance = f.tmp.obj.mode_bubble_distance * f.canvas.pxratio, f.particles.line_linked.width = f.tmp.obj.line_linked_width * f.canvas.pxratio, f.interactivity.modes.bubble.size = f.tmp.obj.mode_bubble_size * f.canvas.pxratio, f.interactivity.modes.repulse.distance = f.tmp.obj.mode_repulse_distance * f.canvas.pxratio
    }, f.fn.canvasInit = function() {
        f.canvas.ctx = f.canvas.el.getContext("2d")
    }, f.fn.canvasSize = function() {
        f.canvas.el.width = f.canvas.w, f.canvas.el.height = f.canvas.h, f && f.interactivity.events.resize && window.addEventListener("resize", function() {
            f.canvas.w = f.canvas.el.offsetWidth, f.canvas.h = f.canvas.el.offsetHeight, f.tmp.retina && (f.canvas.w *= f.canvas.pxratio, f.canvas.h *= f.canvas.pxratio), f.canvas.el.width = f.canvas.w, f.canvas.el.height = f.canvas.h, f.particles.move.enable || (f.fn.particlesEmpty(), f.fn.particlesCreate(), f.fn.particlesDraw(), f.fn.vendors.densityAutoParticles()), f.fn.vendors.densityAutoParticles()
        })
    }, f.fn.canvasPaint = function() {
        f.canvas.ctx.fillRect(0, 0, f.canvas.w, f.canvas.h)
    }, f.fn.canvasClear = function() {
        f.canvas.ctx.clearRect(0, 0, f.canvas.w, f.canvas.h)
    }, f.fn.particle = function(e, t, n) {
        if (this.radius = (f.particles.size.random ? Math.random() : 1) * f.particles.size.value, f.particles.size.anim.enable && (this.size_status = !1, this.vs = f.particles.size.anim.speed / 100, f.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = n ? n.x : Math.random() * f.canvas.w, this.y = n ? n.y : Math.random() * f.canvas.h, this.x > f.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > f.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), f.particles.move.bounce && f.fn.vendors.checkOverlap(this, n), this.color = {}, "object" == typeof e.value)
            if (e.value instanceof Array) {
                var i = e.value[Math.floor(Math.random() * f.particles.color.value.length)];
                this.color.rgb = hexToRgb(i)
            } else null != e.value.r && null != e.value.g && null != e.value.b && (this.color.rgb = {
                r: e.value.r,
                g: e.value.g,
                b: e.value.b
            }), null != e.value.h && null != e.value.s && null != e.value.l && (this.color.hsl = {
                h: e.value.h,
                s: e.value.s,
                l: e.value.l
            });
        else "random" == e.value ? this.color.rgb = {
            r: Math.floor(256 * Math.random()) + 0,
            g: Math.floor(256 * Math.random()) + 0,
            b: Math.floor(256 * Math.random()) + 0
        } : "string" == typeof e.value && (this.color = e, this.color.rgb = hexToRgb(this.color.value));
        this.opacity = (f.particles.opacity.random ? Math.random() : 1) * f.particles.opacity.value, f.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = f.particles.opacity.anim.speed / 100, f.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
        var o = {};
        switch (f.particles.move.direction) {
            case "top":
                o = {
                    x: 0,
                    y: -1
                };
                break;
            case "top-right":
                o = {
                    x: .5,
                    y: -.5
                };
                break;
            case "right":
                o = {
                    x: 1,
                    y: -0
                };
                break;
            case "bottom-right":
                o = {
                    x: .5,
                    y: .5
                };
                break;
            case "bottom":
                o = {
                    x: 0,
                    y: 1
                };
                break;
            case "bottom-left":
                o = {
                    x: -.5,
                    y: 1
                };
                break;
            case "left":
                o = {
                    x: -1,
                    y: 0
                };
                break;
            case "top-left":
                o = {
                    x: -.5,
                    y: -.5
                };
                break;
            default:
                o = {
                    x: 0,
                    y: 0
                }
        }
        f.particles.move.straight ? (this.vx = o.x, this.vy = o.y, f.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = o.x + Math.random() - .5, this.vy = o.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
        var a = f.particles.shape.type;
        if ("object" == typeof a) {
            if (a instanceof Array) {
                var r = a[Math.floor(Math.random() * a.length)];
                this.shape = r
            }
        } else this.shape = a;
        if ("image" == this.shape) {
            var s = f.particles.shape;
            this.img = {
                src: s.image.src,
                ratio: s.image.width / s.image.height
            }, this.img.ratio || (this.img.ratio = 1), "svg" == f.tmp.img_type && null != f.tmp.source_svg && (f.fn.vendors.createSvgImg(this), f.tmp.pushing && (this.img.loaded = !1))
        }
    }, f.fn.particle.prototype.draw = function() {
        var e = this;
        if (null != e.radius_bubble) var t = e.radius_bubble;
        else t = e.radius;
        if (null != e.opacity_bubble) var n = e.opacity_bubble;
        else n = e.opacity;
        if (e.color.rgb) var i = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + n + ")";
        else i = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + n + ")";
        switch (f.canvas.ctx.fillStyle = i, f.canvas.ctx.beginPath(), e.shape) {
            case "circle":
                f.canvas.ctx.arc(e.x, e.y, t, 0, 2 * Math.PI, !1);
                break;
            case "edge":
                f.canvas.ctx.rect(e.x - t, e.y - t, 2 * t, 2 * t);
                break;
            case "triangle":
                f.fn.vendors.drawShape(f.canvas.ctx, e.x - t, e.y + t / 1.66, 2 * t, 3, 2);
                break;
            case "polygon":
                f.fn.vendors.drawShape(f.canvas.ctx, e.x - t / (f.particles.shape.polygon.nb_sides / 3.5), e.y - t / .76, 2.66 * t / (f.particles.shape.polygon.nb_sides / 3), f.particles.shape.polygon.nb_sides, 1);
                break;
            case "star":
                f.fn.vendors.drawShape(f.canvas.ctx, e.x - 2 * t / (f.particles.shape.polygon.nb_sides / 4), e.y - t / 1.52, 2 * t * 2.66 / (f.particles.shape.polygon.nb_sides / 3), f.particles.shape.polygon.nb_sides, 2);
                break;
            case "image":
                ;
                if ("svg" == f.tmp.img_type) var o = e.img.obj;
                else o = f.tmp.img_obj;
                o && f.canvas.ctx.drawImage(o, e.x - t, e.y - t, 2 * t, 2 * t / e.img.ratio)
        }
        f.canvas.ctx.closePath(), 0 < f.particles.shape.stroke.width && (f.canvas.ctx.strokeStyle = f.particles.shape.stroke.color, f.canvas.ctx.lineWidth = f.particles.shape.stroke.width, f.canvas.ctx.stroke()), f.canvas.ctx.fill()
    }, f.fn.particlesCreate = function() {
        for (var e = 0; e < f.particles.number.value; e++) f.particles.array.push(new f.fn.particle(f.particles.color, f.particles.opacity.value))
    }, f.fn.particlesUpdate = function() {
        for (var e = 0; e < f.particles.array.length; e++) {
            var t = f.particles.array[e];
            if (f.particles.move.enable) {
                var n = f.particles.move.speed / 2;
                t.x += t.vx * n, t.y += t.vy * n
            }
            if (f.particles.opacity.anim.enable && (1 == t.opacity_status ? (t.opacity >= f.particles.opacity.value && (t.opacity_status = !1), t.opacity += t.vo) : (t.opacity <= f.particles.opacity.anim.opacity_min && (t.opacity_status = !0), t.opacity -= t.vo), t.opacity < 0 && (t.opacity = 0)), f.particles.size.anim.enable && (1 == t.size_status ? (t.radius >= f.particles.size.value && (t.size_status = !1), t.radius += t.vs) : (t.radius <= f.particles.size.anim.size_min && (t.size_status = !0), t.radius -= t.vs), t.radius < 0 && (t.radius = 0)), "bounce" == f.particles.move.out_mode) var i = {
                x_left: t.radius,
                x_right: f.canvas.w,
                y_top: t.radius,
                y_bottom: f.canvas.h
            };
            else i = {
                x_left: -t.radius,
                x_right: f.canvas.w + t.radius,
                y_top: -t.radius,
                y_bottom: f.canvas.h + t.radius
            };
            switch (t.x - t.radius > f.canvas.w ? (t.x = i.x_left, t.y = Math.random() * f.canvas.h) : t.x + t.radius < 0 && (t.x = i.x_right, t.y = Math.random() * f.canvas.h), t.y - t.radius > f.canvas.h ? (t.y = i.y_top, t.x = Math.random() * f.canvas.w) : t.y + t.radius < 0 && (t.y = i.y_bottom, t.x = Math.random() * f.canvas.w), f.particles.move.out_mode) {
                case "bounce":
                    t.x + t.radius > f.canvas.w ? t.vx = -t.vx : t.x - t.radius < 0 && (t.vx = -t.vx), t.y + t.radius > f.canvas.h ? t.vy = -t.vy : t.y - t.radius < 0 && (t.vy = -t.vy)
            }
            if (isInArray("grab", f.interactivity.events.onhover.mode) && f.fn.modes.grabParticle(t), (isInArray("bubble", f.interactivity.events.onhover.mode) || isInArray("bubble", f.interactivity.events.onclick.mode)) && f.fn.modes.bubbleParticle(t), (isInArray("repulse", f.interactivity.events.onhover.mode) || isInArray("repulse", f.interactivity.events.onclick.mode)) && f.fn.modes.repulseParticle(t), f.particles.line_linked.enable || f.particles.move.attract.enable)
                for (var o = e + 1; o < f.particles.array.length; o++) {
                    var a = f.particles.array[o];
                    f.particles.line_linked.enable && f.fn.interact.linkParticles(t, a), f.particles.move.attract.enable && f.fn.interact.attractParticles(t, a), f.particles.move.bounce && f.fn.interact.bounceParticles(t, a)
                }
        }
    }, f.fn.particlesDraw = function() {
        f.canvas.ctx.clearRect(0, 0, f.canvas.w, f.canvas.h), f.fn.particlesUpdate();
        for (var e = 0; e < f.particles.array.length; e++) {
            f.particles.array[e].draw()
        }
    }, f.fn.particlesEmpty = function() {
        f.particles.array = []
    }, f.fn.particlesRefresh = function() {
        cancelRequestAnimFrame(f.fn.checkAnimFrame), cancelRequestAnimFrame(f.fn.drawAnimFrame), f.tmp.source_svg = void 0, f.tmp.img_obj = void 0, f.tmp.count_svg = 0, f.fn.particlesEmpty(), f.fn.canvasClear(), f.fn.vendors.start()
    }, f.fn.interact.linkParticles = function(e, t) {
        var n = e.x - t.x,
            i = e.y - t.y,
            o = Math.sqrt(n * n + i * i);
        if (o <= f.particles.line_linked.distance) {
            var a = f.particles.line_linked.opacity - o / (1 / f.particles.line_linked.opacity) / f.particles.line_linked.distance;
            if (0 < a) {
                var r = f.particles.line_linked.color_rgb_line;
                f.canvas.ctx.strokeStyle = "rgba(" + r.r + "," + r.g + "," + r.b + "," + a + ")", f.canvas.ctx.lineWidth = f.particles.line_linked.width, f.canvas.ctx.beginPath(), f.canvas.ctx.moveTo(e.x, e.y), f.canvas.ctx.lineTo(t.x, t.y), f.canvas.ctx.stroke(), f.canvas.ctx.closePath()
            }
        }
    }, f.fn.interact.attractParticles = function(e, t) {
        var n = e.x - t.x,
            i = e.y - t.y;
        if (Math.sqrt(n * n + i * i) <= f.particles.line_linked.distance) {
            var o = n / (1e3 * f.particles.move.attract.rotateX),
                a = i / (1e3 * f.particles.move.attract.rotateY);
            e.vx -= o, e.vy -= a, t.vx += o, t.vy += a
        }
    }, f.fn.interact.bounceParticles = function(e, t) {
        var n = e.x - t.x,
            i = e.y - t.y;
        Math.sqrt(n * n + i * i) <= e.radius + t.radius && (e.vx = -e.vx, e.vy = -e.vy, t.vx = -t.vx, t.vy = -t.vy)
    }, f.fn.modes.pushParticles = function(e, t) {
        f.tmp.pushing = !0;
        for (var n = 0; n < e; n++) f.particles.array.push(new f.fn.particle(f.particles.color, f.particles.opacity.value, {
            x: t ? t.pos_x : Math.random() * f.canvas.w,
            y: t ? t.pos_y : Math.random() * f.canvas.h
        })), n == e - 1 && (f.particles.move.enable || f.fn.particlesDraw(), f.tmp.pushing = !1)
    }, f.fn.modes.removeParticles = function(e) {
        f.particles.array.splice(0, e), f.particles.move.enable || f.fn.particlesDraw()
    }, f.fn.modes.bubbleParticle = function(s) {
        if (f.interactivity.events.onhover.enable && isInArray("bubble", f.interactivity.events.onhover.mode)) {
            var e = s.x - f.interactivity.mouse.pos_x,
                t = s.y - f.interactivity.mouse.pos_y,
                n = 1 - (l = Math.sqrt(e * e + t * t)) / f.interactivity.modes.bubble.distance;

            function i() {
                s.opacity_bubble = s.opacity, s.radius_bubble = s.radius
            }
            if (l <= f.interactivity.modes.bubble.distance) {
                if (0 <= n && "mousemove" == f.interactivity.status) {
                    if (f.interactivity.modes.bubble.size != f.particles.size.value)
                        if (f.interactivity.modes.bubble.size > f.particles.size.value) {
                            0 <= (a = s.radius + f.interactivity.modes.bubble.size * n) && (s.radius_bubble = a)
                        } else {
                            var o = s.radius - f.interactivity.modes.bubble.size,
                                a = s.radius - o * n;
                            s.radius_bubble = 0 < a ? a : 0
                        }
                    var r;
                    if (f.interactivity.modes.bubble.opacity != f.particles.opacity.value)
                        if (f.interactivity.modes.bubble.opacity > f.particles.opacity.value)(r = f.interactivity.modes.bubble.opacity * n) > s.opacity && r <= f.interactivity.modes.bubble.opacity && (s.opacity_bubble = r);
                        else(r = s.opacity - (f.particles.opacity.value - f.interactivity.modes.bubble.opacity) * n) < s.opacity && r >= f.interactivity.modes.bubble.opacity && (s.opacity_bubble = r)
                }
            } else i();
            "mouseleave" == f.interactivity.status && i()
        } else if (f.interactivity.events.onclick.enable && isInArray("bubble", f.interactivity.events.onclick.mode)) {
            if (f.tmp.bubble_clicking) {
                e = s.x - f.interactivity.mouse.click_pos_x, t = s.y - f.interactivity.mouse.click_pos_y;
                var l = Math.sqrt(e * e + t * t),
                    c = ((new Date).getTime() - f.interactivity.mouse.click_time) / 1e3;
                c > f.interactivity.modes.bubble.duration && (f.tmp.bubble_duration_end = !0), c > 2 * f.interactivity.modes.bubble.duration && (f.tmp.bubble_clicking = !1, f.tmp.bubble_duration_end = !1)
            }

            function u(e, t, n, i, o) {
                if (e != t)
                    if (f.tmp.bubble_duration_end) null != n && (r = e + (e - (i - c * (i - e) / f.interactivity.modes.bubble.duration)), "size" == o && (s.radius_bubble = r), "opacity" == o && (s.opacity_bubble = r));
                    else if (l <= f.interactivity.modes.bubble.distance) {
                    if (null != n) var a = n;
                    else a = i;
                    if (a != e) {
                        var r = i - c * (i - e) / f.interactivity.modes.bubble.duration;
                        "size" == o && (s.radius_bubble = r), "opacity" == o && (s.opacity_bubble = r)
                    }
                } else "size" == o && (s.radius_bubble = void 0), "opacity" == o && (s.opacity_bubble = void 0)
            }
            f.tmp.bubble_clicking && (u(f.interactivity.modes.bubble.size, f.particles.size.value, s.radius_bubble, s.radius, "size"), u(f.interactivity.modes.bubble.opacity, f.particles.opacity.value, s.opacity_bubble, s.opacity, "opacity"))
        }
    }, f.fn.modes.repulseParticle = function(i) {
        if (f.interactivity.events.onhover.enable && isInArray("repulse", f.interactivity.events.onhover.mode) && "mousemove" == f.interactivity.status) {
            var e = i.x - f.interactivity.mouse.pos_x,
                t = i.y - f.interactivity.mouse.pos_y,
                n = Math.sqrt(e * e + t * t),
                o = e / n,
                a = t / n,
                r = clamp(1 / (l = f.interactivity.modes.repulse.distance) * (-1 * Math.pow(n / l, 2) + 1) * l * 100, 0, 50),
                s = {
                    x: i.x + o * r,
                    y: i.y + a * r
                };
            "bounce" == f.particles.move.out_mode ? (0 < s.x - i.radius && s.x + i.radius < f.canvas.w && (i.x = s.x), 0 < s.y - i.radius && s.y + i.radius < f.canvas.h && (i.y = s.y)) : (i.x = s.x, i.y = s.y)
        } else if (f.interactivity.events.onclick.enable && isInArray("repulse", f.interactivity.events.onclick.mode))
            if (f.tmp.repulse_finish || (f.tmp.repulse_count++, f.tmp.repulse_count == f.particles.array.length && (f.tmp.repulse_finish = !0)), f.tmp.repulse_clicking) {
                var l = Math.pow(f.interactivity.modes.repulse.distance / 6, 3),
                    c = f.interactivity.mouse.click_pos_x - i.x,
                    u = f.interactivity.mouse.click_pos_y - i.y,
                    d = c * c + u * u,
                    p = -l / d * 1;
                d <= l && function() {
                    var e = Math.atan2(u, c);
                    if (i.vx = p * Math.cos(e), i.vy = p * Math.sin(e), "bounce" == f.particles.move.out_mode) {
                        var t = i.x + i.vx,
                            n = i.y + i.vy;
                        t + i.radius > f.canvas.w ? i.vx = -i.vx : t - i.radius < 0 && (i.vx = -i.vx), n + i.radius > f.canvas.h ? i.vy = -i.vy : n - i.radius < 0 && (i.vy = -i.vy)
                    }
                }()
            } else 0 == f.tmp.repulse_clicking && (i.vx = i.vx_i, i.vy = i.vy_i)
    }, f.fn.modes.grabParticle = function(e) {
        if (f.interactivity.events.onhover.enable && "mousemove" == f.interactivity.status) {
            var t = e.x - f.interactivity.mouse.pos_x,
                n = e.y - f.interactivity.mouse.pos_y,
                i = Math.sqrt(t * t + n * n);
            if (i <= f.interactivity.modes.grab.distance) {
                var o = f.interactivity.modes.grab.line_linked.opacity - i / (1 / f.interactivity.modes.grab.line_linked.opacity) / f.interactivity.modes.grab.distance;
                if (0 < o) {
                    var a = f.particles.line_linked.color_rgb_line;
                    f.canvas.ctx.strokeStyle = "rgba(" + a.r + "," + a.g + "," + a.b + "," + o + ")", f.canvas.ctx.lineWidth = f.particles.line_linked.width, f.canvas.ctx.beginPath(), f.canvas.ctx.moveTo(e.x, e.y), f.canvas.ctx.lineTo(f.interactivity.mouse.pos_x, f.interactivity.mouse.pos_y), f.canvas.ctx.stroke(), f.canvas.ctx.closePath()
                }
            }
        }
    }, f.fn.vendors.eventsListeners = function() {
        "window" == f.interactivity.detect_on ? f.interactivity.el = window : f.interactivity.el = f.canvas.el, (f.interactivity.events.onhover.enable || f.interactivity.events.onclick.enable) && (f.interactivity.el.addEventListener("mousemove", function(e) {
            if (f.interactivity.el == window) var t = e.clientX,
                n = e.clientY;
            else t = e.offsetX || e.clientX, n = e.offsetY || e.clientY;
            f.interactivity.mouse.pos_x = t, f.interactivity.mouse.pos_y = n, f.tmp.retina && (f.interactivity.mouse.pos_x *= f.canvas.pxratio, f.interactivity.mouse.pos_y *= f.canvas.pxratio), f.interactivity.status = "mousemove"
        }), f.interactivity.el.addEventListener("mouseleave", function(e) {
            f.interactivity.mouse.pos_x = null, f.interactivity.mouse.pos_y = null, f.interactivity.status = "mouseleave"
        })), f.interactivity.events.onclick.enable && f.interactivity.el.addEventListener("click", function() {
            if (f.interactivity.mouse.click_pos_x = f.interactivity.mouse.pos_x, f.interactivity.mouse.click_pos_y = f.interactivity.mouse.pos_y, f.interactivity.mouse.click_time = (new Date).getTime(), f.interactivity.events.onclick.enable) switch (f.interactivity.events.onclick.mode) {
                case "push":
                    f.particles.move.enable ? f.fn.modes.pushParticles(f.interactivity.modes.push.particles_nb, f.interactivity.mouse) : 1 == f.interactivity.modes.push.particles_nb ? f.fn.modes.pushParticles(f.interactivity.modes.push.particles_nb, f.interactivity.mouse) : 1 < f.interactivity.modes.push.particles_nb && f.fn.modes.pushParticles(f.interactivity.modes.push.particles_nb);
                    break;
                case "remove":
                    f.fn.modes.removeParticles(f.interactivity.modes.remove.particles_nb);
                    break;
                case "bubble":
                    f.tmp.bubble_clicking = !0;
                    break;
                case "repulse":
                    f.tmp.repulse_clicking = !0, f.tmp.repulse_count = 0, f.tmp.repulse_finish = !1, setTimeout(function() {
                        f.tmp.repulse_clicking = !1
                    }, 1e3 * f.interactivity.modes.repulse.duration)
            }
        })
    }, f.fn.vendors.densityAutoParticles = function() {
        if (f.particles.number.density.enable) {
            var e = f.canvas.el.width * f.canvas.el.height / 1e3;
            f.tmp.retina && (e /= 2 * f.canvas.pxratio);
            var t = e * f.particles.number.value / f.particles.number.density.value_area,
                n = f.particles.array.length - t;
            n < 0 ? f.fn.modes.pushParticles(Math.abs(n)) : f.fn.modes.removeParticles(n)
        }
    }, f.fn.vendors.checkOverlap = function(e, t) {
        for (var n = 0; n < f.particles.array.length; n++) {
            var i = f.particles.array[n],
                o = e.x - i.x,
                a = e.y - i.y;
            Math.sqrt(o * o + a * a) <= e.radius + i.radius && (e.x = t ? t.x : Math.random() * f.canvas.w, e.y = t ? t.y : Math.random() * f.canvas.h, f.fn.vendors.checkOverlap(e))
        }
    }, f.fn.vendors.createSvgImg = function(a) {
        var e = f.tmp.source_svg.replace(/#([0-9A-F]{3,6})/gi, function(e, t, n, i) {
                if (a.color.rgb) var o = "rgba(" + a.color.rgb.r + "," + a.color.rgb.g + "," + a.color.rgb.b + "," + a.opacity + ")";
                else o = "hsla(" + a.color.hsl.h + "," + a.color.hsl.s + "%," + a.color.hsl.l + "%," + a.opacity + ")";
                return o
            }),
            t = new Blob([e], {
                type: "image/svg+xml;charset=utf-8"
            }),
            n = window.URL || window.webkitURL || window,
            i = n.createObjectURL(t),
            o = new Image;
        o.addEventListener("load", function() {
            a.img.obj = o, a.img.loaded = !0, n.revokeObjectURL(i), f.tmp.count_svg++
        }), o.src = i
    }, f.fn.vendors.destroypJS = function() {
        cancelAnimationFrame(f.fn.drawAnimFrame), n.remove(), pJSDom = null
    }, f.fn.vendors.drawShape = function(e, t, n, i, o, a) {
        var r = o * a,
            s = o / a,
            l = 180 * (s - 2) / s,
            c = Math.PI - Math.PI * l / 180;
        e.save(), e.beginPath(), e.translate(t, n), e.moveTo(0, 0);
        for (var u = 0; u < r; u++) e.lineTo(i, 0), e.translate(i, 0), e.rotate(c);
        e.fill(), e.restore()
    }, f.fn.vendors.exportImg = function() {
        window.open(f.canvas.el.toDataURL("image/png"), "_blank")
    }, f.fn.vendors.loadImg = function(e) {
        if (f.tmp.img_error = void 0, "" != f.particles.shape.image.src)
            if ("svg" == e) {
                var t = new XMLHttpRequest;
                t.open("GET", f.particles.shape.image.src), t.onreadystatechange = function(e) {
                    4 == t.readyState && (200 == t.status ? (f.tmp.source_svg = e.currentTarget.response, f.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), f.tmp.img_error = !0))
                }, t.send()
            } else {
                var n = new Image;
                n.addEventListener("load", function() {
                    f.tmp.img_obj = n, f.fn.vendors.checkBeforeDraw()
                }), n.src = f.particles.shape.image.src
            } else console.log("Error pJS - No image.src"), f.tmp.img_error = !0
    }, f.fn.vendors.draw = function() {
        "image" == f.particles.shape.type ? "svg" == f.tmp.img_type ? f.tmp.count_svg >= f.particles.number.value ? (f.fn.particlesDraw(), f.particles.move.enable ? f.fn.drawAnimFrame = requestAnimFrame(f.fn.vendors.draw) : cancelRequestAnimFrame(f.fn.drawAnimFrame)) : f.tmp.img_error || (f.fn.drawAnimFrame = requestAnimFrame(f.fn.vendors.draw)) : null != f.tmp.img_obj ? (f.fn.particlesDraw(), f.particles.move.enable ? f.fn.drawAnimFrame = requestAnimFrame(f.fn.vendors.draw) : cancelRequestAnimFrame(f.fn.drawAnimFrame)) : f.tmp.img_error || (f.fn.drawAnimFrame = requestAnimFrame(f.fn.vendors.draw)) : (f.fn.particlesDraw(), f.particles.move.enable ? f.fn.drawAnimFrame = requestAnimFrame(f.fn.vendors.draw) : cancelRequestAnimFrame(f.fn.drawAnimFrame))
    }, f.fn.vendors.checkBeforeDraw = function() {
        "image" == f.particles.shape.type ? "svg" == f.tmp.img_type && null == f.tmp.source_svg ? f.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(f.tmp.checkAnimFrame), f.tmp.img_error || (f.fn.vendors.init(), f.fn.vendors.draw())) : (f.fn.vendors.init(), f.fn.vendors.draw())
    }, f.fn.vendors.init = function() {
        f.fn.retinaInit(), f.fn.canvasInit(), f.fn.canvasSize(), f.fn.canvasPaint(), f.fn.particlesCreate(), f.fn.vendors.densityAutoParticles(), f.particles.line_linked.color_rgb_line = hexToRgb(f.particles.line_linked.color)
    }, f.fn.vendors.start = function() {
        isInArray("image", f.particles.shape.type) ? (f.tmp.img_type = f.particles.shape.image.src.substr(f.particles.shape.image.src.length - 3), f.fn.vendors.loadImg(f.tmp.img_type)) : f.fn.vendors.checkBeforeDraw()
    }, f.fn.vendors.eventsListeners(), f.fn.vendors.start()
};

function hexToRgb(e) {
    e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, n, i) {
        return t + t + n + n + i + i
    });
    var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    return t ? {
        r: parseInt(t[1], 16),
        g: parseInt(t[2], 16),
        b: parseInt(t[3], 16)
    } : null
}

function clamp(e, t, n) {
    return Math.min(Math.max(e, t), n)
}

function isInArray(e, t) {
    return -1 < t.indexOf(e)
}
Object.deepExtend = function(e, t) {
        for (var n in t) t[n] && t[n].constructor && t[n].constructor === Object ? (e[n] = e[n] || {}, arguments.callee(e[n], t[n])) : e[n] = t[n];
        return e
    }, window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
        window.setTimeout(e, 1e3 / 60)
    }, window.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout, window.pJSDom = [], window.particlesJS = function(e, t) {
        "string" != typeof e && (t = e, e = "particles-js"), e || (e = "particles-js");
        var n = document.getElementById(e),
            i = "particles-js-canvas-el",
            o = n.getElementsByClassName(i);
        if (o.length)
            for (; 0 < o.length;) n.removeChild(o[0]);
        var a = document.createElement("canvas");
        a.className = i, a.style.width = "100%", a.style.height = "100%", null != document.getElementById(e).appendChild(a) && pJSDom.push(new pJS(e, t))
    }, window.particlesJS.load = function(n, e, i) {
        var o = new XMLHttpRequest;
        o.open("GET", e), o.onreadystatechange = function(e) {
            if (4 == o.readyState)
                if (200 == o.status) {
                    var t = JSON.parse(e.currentTarget.response);
                    window.particlesJS(n, t), i && i()
                } else console.log("Error pJS - XMLHttpRequest status: " + o.status), console.log("Error pJS - File config not found")
        }, o.send()
    },
    function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Typed = t() : e.Typed = t()
    }(this, function() {
        return function(n) {
            var i = {};

            function o(e) {
                if (i[e]) return i[e].exports;
                var t = i[e] = {
                    exports: {},
                    id: e,
                    loaded: !1
                };
                return n[e].call(t.exports, t, t.exports, o), t.loaded = !0, t.exports
            }
            return o.m = n, o.c = i, o.p = "", o(0)
        }([function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function() {
                function i(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(e, t, n) {
                    return t && i(e.prototype, t), n && i(e, n), e
                }
            }();
            var o = n(1),
                u = n(3),
                a = function() {
                    function n(e, t) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, n), o.initializer.load(this, t, e), this.begin()
                    }
                    return i(n, [{
                        key: "toggle",
                        value: function() {
                            this.pause.status ? this.start() : this.stop()
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            this.typingComplete || this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, this.options.onStop(this.arrayPos, this))
                        }
                    }, {
                        key: "start",
                        value: function() {
                            this.typingComplete || this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this))
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.reset(!1), this.options.onDestroy(this)
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            var e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                            clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, e && (this.insertCursor(), this.options.onReset(this), this.begin())
                        }
                    }, {
                        key: "begin",
                        value: function() {
                            var e = this;
                            this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function() {
                                e.currentElContent && 0 !== e.currentElContent.length ? e.backspace(e.currentElContent, e.currentElContent.length) : e.typewrite(e.strings[e.sequence[e.arrayPos]], e.strPos)
                            }, this.startDelay)
                        }
                    }, {
                        key: "typewrite",
                        value: function(r, s) {
                            var l = this;
                            this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
                            var e = this.humanizer(this.typeSpeed),
                                c = 1;
                            !0 !== this.pause.status ? this.timeout = setTimeout(function() {
                                s = u.htmlParser.typeHtmlChars(r, s, l);
                                var e = 0,
                                    t = r.substr(s);
                                if ("^" === t.charAt(0) && /^\^\d+/.test(t)) {
                                    var n = 1;
                                    n += (t = /\d+/.exec(t)[0]).length, e = parseInt(t), l.temporaryPause = !0, l.options.onTypingPaused(l.arrayPos, l), r = r.substring(0, s) + r.substring(s + n), l.toggleBlinking(!0)
                                }
                                if ("`" === t.charAt(0)) {
                                    for (;
                                        "`" !== r.substr(s + c).charAt(0) && !(s + ++c > r.length););
                                    var i = r.substring(0, s),
                                        o = r.substring(i.length + 1, s + c),
                                        a = r.substring(s + c + 1);
                                    r = i + o + a, c--
                                }
                                l.timeout = setTimeout(function() {
                                    l.toggleBlinking(!1), s >= r.length ? l.doneTyping(r, s) : l.keepTyping(r, s, c), l.temporaryPause && (l.temporaryPause = !1, l.options.onTypingResumed(l.arrayPos, l))
                                }, e)
                            }, e) : this.setPauseStatus(r, s, !0)
                        }
                    }, {
                        key: "keepTyping",
                        value: function(e, t, n) {
                            0 === t && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this)), t += n;
                            var i = e.substr(0, t);
                            this.replaceText(i), this.typewrite(e, t)
                        }
                    }, {
                        key: "doneTyping",
                        value: function(e, t) {
                            var n = this;
                            this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(), !1 === this.loop || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function() {
                                n.backspace(e, t)
                            }, this.backDelay))
                        }
                    }, {
                        key: "backspace",
                        value: function(n, i) {
                            var o = this;
                            if (!0 !== this.pause.status) {
                                if (this.fadeOut) return this.initFadeOut();
                                this.toggleBlinking(!1);
                                var e = this.humanizer(this.backSpeed);
                                this.timeout = setTimeout(function() {
                                    i = u.htmlParser.backSpaceHtmlChars(n, i, o);
                                    var e = n.substr(0, i);
                                    if (o.replaceText(e), o.smartBackspace) {
                                        var t = o.strings[o.arrayPos + 1];
                                        t && e === t.substr(0, i) ? o.stopNum = i : o.stopNum = 0
                                    }
                                    i > o.stopNum ? (i--, o.backspace(n, i)) : i <= o.stopNum && (o.arrayPos++, o.arrayPos === o.strings.length ? (o.arrayPos = 0, o.options.onLastStringBackspaced(), o.shuffleStringsIfNeeded(), o.begin()) : o.typewrite(o.strings[o.sequence[o.arrayPos]], i))
                                }, e)
                            } else this.setPauseStatus(n, i, !0)
                        }
                    }, {
                        key: "complete",
                        value: function() {
                            this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0
                        }
                    }, {
                        key: "setPauseStatus",
                        value: function(e, t, n) {
                            this.pause.typewrite = n, this.pause.curString = e, this.pause.curStrPos = t
                        }
                    }, {
                        key: "toggleBlinking",
                        value: function(e) {
                            this.cursor && (this.pause.status || this.cursorBlinking !== e && ((this.cursorBlinking = e) ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")))
                        }
                    }, {
                        key: "humanizer",
                        value: function(e) {
                            return Math.round(Math.random() * e / 2) + e
                        }
                    }, {
                        key: "shuffleStringsIfNeeded",
                        value: function() {
                            this.shuffle && (this.sequence = this.sequence.sort(function() {
                                return Math.random() - .5
                            }))
                        }
                    }, {
                        key: "initFadeOut",
                        value: function() {
                            var e = this;
                            return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout(function() {
                                e.arrayPos++, e.replaceText(""), e.strings.length > e.arrayPos ? e.typewrite(e.strings[e.sequence[e.arrayPos]], 0) : (e.typewrite(e.strings[0], 0), e.arrayPos = 0)
                            }, this.fadeOutDelay)
                        }
                    }, {
                        key: "replaceText",
                        value: function(e) {
                            this.attr ? this.el.setAttribute(this.attr, e) : this.isInput ? this.el.value = e : "html" === this.contentType ? this.el.innerHTML = e : this.el.textContent = e
                        }
                    }, {
                        key: "bindFocusEvents",
                        value: function() {
                            var t = this;
                            this.isInput && (this.el.addEventListener("focus", function(e) {
                                t.stop()
                            }), this.el.addEventListener("blur", function(e) {
                                t.el.value && 0 !== t.el.value.length || t.start()
                            }))
                        }
                    }, {
                        key: "insertCursor",
                        value: function() {
                            this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)))
                        }
                    }]), n
                }();
            t.default = a, e.exports = t.default
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                },
                i = function() {
                    function i(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(e, t, n) {
                        return t && i(e.prototype, t), n && i(e, n), e
                    }
                }();
            var o, a = n(2),
                l = (o = a) && o.__esModule ? o : {
                    default: o
                },
                r = function() {
                    function e() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e)
                    }
                    return i(e, [{
                        key: "load",
                        value: function(e, t, n) {
                            if (e.el = "string" == typeof n ? document.querySelector(n) : n, e.options = s({}, l.default, t), e.isInput = "input" === e.el.tagName.toLowerCase(), e.attr = e.options.attr, e.bindInputFocusEvents = e.options.bindInputFocusEvents, e.showCursor = !e.isInput && e.options.showCursor, e.cursorChar = e.options.cursorChar, e.cursorBlinking = !0, e.elContent = e.attr ? e.el.getAttribute(e.attr) : e.el.textContent, e.contentType = e.options.contentType, e.typeSpeed = e.options.typeSpeed, e.startDelay = e.options.startDelay, e.backSpeed = e.options.backSpeed, e.smartBackspace = e.options.smartBackspace, e.backDelay = e.options.backDelay, e.fadeOut = e.options.fadeOut, e.fadeOutClass = e.options.fadeOutClass, e.fadeOutDelay = e.options.fadeOutDelay, e.isPaused = !1, e.strings = e.options.strings.map(function(e) {
                                    return e.trim()
                                }), "string" == typeof e.options.stringsElement ? e.stringsElement = document.querySelector(e.options.stringsElement) : e.stringsElement = e.options.stringsElement, e.stringsElement) {
                                e.strings = [], e.stringsElement.style.display = "none";
                                var i = Array.prototype.slice.apply(e.stringsElement.children),
                                    o = i.length;
                                if (o)
                                    for (var a = 0; a < o; a += 1) {
                                        var r = i[a];
                                        e.strings.push(r.innerHTML.trim())
                                    }
                            }
                            for (var a in e.strPos = 0, e.arrayPos = 0, e.stopNum = 0, e.loop = e.options.loop, e.loopCount = e.options.loopCount, e.curLoop = 0, e.shuffle = e.options.shuffle, e.sequence = [], e.pause = {
                                    status: !1,
                                    typewrite: !0,
                                    curString: "",
                                    curStrPos: 0
                                }, e.typingComplete = !1, e.strings) e.sequence[a] = a;
                            e.currentElContent = this.getCurrentElContent(e), e.autoInsertCss = e.options.autoInsertCss, this.appendAnimationCss(e)
                        }
                    }, {
                        key: "getCurrentElContent",
                        value: function(e) {
                            return e.attr ? e.el.getAttribute(e.attr) : e.isInput ? e.el.value : "html" === e.contentType ? e.el.innerHTML : e.el.textContent
                        }
                    }, {
                        key: "appendAnimationCss",
                        value: function(e) {
                            var t = "data-typed-js-css";
                            if (e.autoInsertCss && (e.showCursor || e.fadeOut) && !document.querySelector("[" + t + "]")) {
                                var n = document.createElement("style");
                                n.type = "text/css", n.setAttribute(t, !0);
                                var i = "";
                                e.showCursor && (i += "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "), e.fadeOut && (i += "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "), 0 !== n.length && (n.innerHTML = i, document.body.appendChild(n))
                            }
                        }
                    }]), e
                }(),
                c = new(t.default = r);
            t.initializer = c
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
                stringsElement: null,
                typeSpeed: 0,
                startDelay: 0,
                backSpeed: 0,
                smartBackspace: !0,
                shuffle: !1,
                backDelay: 700,
                fadeOut: !1,
                fadeOutClass: "typed-fade-out",
                fadeOutDelay: 500,
                loop: !1,
                loopCount: 1 / 0,
                showCursor: !0,
                cursorChar: "|",
                autoInsertCss: !0,
                attr: null,
                bindInputFocusEvents: !1,
                contentType: "html",
                onComplete: function(e) {},
                preStringTyped: function(e, t) {},
                onStringTyped: function(e, t) {},
                onLastStringBackspaced: function(e) {},
                onTypingPaused: function(e, t) {},
                onTypingResumed: function(e, t) {},
                onReset: function(e) {},
                onStop: function(e, t) {},
                onStart: function(e, t) {},
                onDestroy: function(e) {}
            };
            t.default = n, e.exports = t.default
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function() {
                function i(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(e, t, n) {
                    return t && i(e.prototype, t), n && i(e, n), e
                }
            }();
            var i = function() {
                    function e() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e)
                    }
                    return n(e, [{
                        key: "typeHtmlChars",
                        value: function(e, t, n) {
                            if ("html" !== n.contentType) return t;
                            var i = e.substr(t).charAt(0);
                            if ("<" === i || "&" === i) {
                                var o = "";
                                for (o = "<" === i ? ">" : ";"; e.substr(t + 1).charAt(0) !== o && !(++t + 1 > e.length););
                                t++
                            }
                            return t
                        }
                    }, {
                        key: "backSpaceHtmlChars",
                        value: function(e, t, n) {
                            if ("html" !== n.contentType) return t;
                            var i = e.substr(t).charAt(0);
                            if (">" === i || ";" === i) {
                                var o = "";
                                for (o = ">" === i ? "<" : "&"; e.substr(t - 1).charAt(0) !== o && !(--t < 0););
                                t--
                            }
                            return t
                        }
                    }]), e
                }(),
                o = new(t.default = i);
            t.htmlParser = o
        }])
    });
var PR, prettyPrintOne, prettyPrint, IN_GLOBAL_SCOPE = !0,
    PR_SHOULD_USE_CONTINUATION = !0;
"undefined" != typeof window && (window.PR_SHOULD_USE_CONTINUATION = PR_SHOULD_USE_CONTINUATION),
    function() {
        var P = "undefined" != typeof window ? window : {},
            e = ["break,continue,do,else,for,if,return,while"],
            t = [
                [e, "auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,restrict,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"], "catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"
            ],
            n = [t, "alignas,alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,noexcept,noreturn,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],
            i = [t, "abstract,assert,boolean,byte,extends,finally,final,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],
            o = [t, "abstract,add,alias,as,ascending,async,await,base,bool,by,byte,checked,decimal,delegate,descending,dynamic,event,finally,fixed,foreach,from,get,global,group,implicit,in,interface,internal,into,is,join,let,lock,null,object,out,override,orderby,params,partial,readonly,ref,remove,sbyte,sealed,select,set,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,value,var,virtual,where,yield"],
            a = [t, "abstract,async,await,constructor,debugger,enum,eval,export,from,function,get,import,implements,instanceof,interface,let,null,of,set,undefined,var,with,yield,Infinity,NaN"],
            r = "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",
            s = [e, "and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],
            l = [e, "alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],
            c = [e, "case,done,elif,esac,eval,fi,function,in,local,set,then,until"],
            u = /^(DIR|FILE|array|vector|(de|priority_)?queue|(forward_)?list|stack|(const_)?(reverse_)?iterator|(unordered_)?(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,
            d = "str",
            p = "kwd",
            f = "com",
            m = "typ",
            h = "lit",
            v = "pun",
            T = "pln",
            E = "src",
            g = "(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*";

        function M(e, t, n, i, o) {
            if (n) {
                var a = {
                    sourceNode: e,
                    pre: 1,
                    langExtension: null,
                    numberLines: null,
                    sourceCode: n,
                    spans: null,
                    basePos: t,
                    decorations: null
                };
                i(a), o.push.apply(o, a.decorations)
            }
        }
        var y = /\S/;

        function A(e) {
            for (var t = void 0, n = e.firstChild; n; n = n.nextSibling) {
                var i = n.nodeType;
                t = 1 === i ? t ? e : n : 3 === i && y.test(n.nodeValue) ? e : t
            }
            return t === e ? void 0 : t
        }

        function b(u, k) {
            var x, C = {};
            ! function() {
                for (var e = u.concat(k), t = [], n = {}, i = 0, o = e.length; i < o; ++i) {
                    var a = e[i],
                        r = a[3];
                    if (r)
                        for (var s = r.length; 0 <= --s;) C[r.charAt(s)] = a;
                    var l = a[1],
                        c = "" + l;
                    n.hasOwnProperty(c) || (t.push(l), n[c] = null)
                }
                t.push(/[\0-\uffff]/), x = function(e) {
                    for (var c = 0, u = !1, t = !1, n = 0, i = e.length; n < i; ++n)
                        if ((s = e[n]).ignoreCase) t = !0;
                        else if (/[a-z]/i.test(s.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi, ""))) {
                        t = !(u = !0);
                        break
                    }
                    var o = {
                        b: 8,
                        t: 9,
                        n: 10,
                        v: 11,
                        f: 12,
                        r: 13
                    };

                    function f(e) {
                        var t = e.charCodeAt(0);
                        if (92 !== t) return t;
                        var n = e.charAt(1);
                        return (t = o[n]) || ("0" <= n && n <= "7" ? parseInt(e.substring(1), 8) : "u" === n || "x" === n ? parseInt(e.substring(2), 16) : e.charCodeAt(1))
                    }

                    function m(e) {
                        if (e < 32) return (e < 16 ? "\\x0" : "\\x") + e.toString(16);
                        var t = String.fromCharCode(e);
                        return "\\" === t || "-" === t || "]" === t || "^" === t ? "\\" + t : t
                    }

                    function d(e) {
                        var t = e.substring(1, e.length - 1).match(new RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]", "g")),
                            n = [],
                            i = "^" === t[0],
                            o = ["["];
                        i && o.push("^");
                        for (var a = i ? 1 : 0, r = t.length; a < r; ++a) {
                            var s = t[a];
                            if (/\\[bdsw]/i.test(s)) o.push(s);
                            else {
                                var l, c = f(s);
                                a + 2 < r && "-" === t[a + 1] ? (l = f(t[a + 2]), a += 2) : l = c, n.push([c, l]), l < 65 || 122 < c || (l < 65 || 90 < c || n.push([32 | Math.max(65, c), 32 | Math.min(l, 90)]), l < 97 || 122 < c || n.push([-33 & Math.max(97, c), -33 & Math.min(l, 122)]))
                            }
                        }
                        n.sort(function(e, t) {
                            return e[0] - t[0] || t[1] - e[1]
                        });
                        var u = [],
                            d = [];
                        for (a = 0; a < n.length; ++a)(p = n[a])[0] <= d[1] + 1 ? d[1] = Math.max(d[1], p[1]) : u.push(d = p);
                        for (a = 0; a < u.length; ++a) {
                            var p = u[a];
                            o.push(m(p[0])), p[1] > p[0] && (p[1] + 1 > p[0] && o.push("-"), o.push(m(p[1])))
                        }
                        return o.push("]"), o.join("")
                    }

                    function a(e) {
                        for (var t = e.source.match(new RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)", "g")), n = t.length, i = [], o = 0, a = 0; o < n; ++o) "(" === (s = t[o]) ? ++a : "\\" === s.charAt(0) && (r = +s.substring(1)) && (r <= a ? i[r] = -1 : t[o] = m(r));
                        for (o = 1; o < i.length; ++o) - 1 === i[o] && (i[o] = ++c);
                        for (a = o = 0; o < n; ++o)
                            if ("(" === (s = t[o])) i[++a] || (t[o] = "(?:");
                            else if ("\\" === s.charAt(0)) {
                            var r;
                            (r = +s.substring(1)) && r <= a && (t[o] = "\\" + i[r])
                        }
                        for (o = 0; o < n; ++o) "^" === t[o] && "^" !== t[o + 1] && (t[o] = "");
                        if (e.ignoreCase && u)
                            for (o = 0; o < n; ++o) {
                                var s, l = (s = t[o]).charAt(0);
                                2 <= s.length && "[" === l ? t[o] = d(s) : "\\" !== l && (t[o] = s.replace(/[a-zA-Z]/g, function(e) {
                                    var t = e.charCodeAt(0);
                                    return "[" + String.fromCharCode(-33 & t, 32 | t) + "]"
                                }))
                            }
                        return t.join("")
                    }
                    var r = [];
                    for (n = 0, i = e.length; n < i; ++n) {
                        var s;
                        if ((s = e[n]).global || s.multiline) throw new Error("" + s);
                        r.push("(?:" + a(s) + ")")
                    }
                    return new RegExp(r.join("|"), t ? "gi" : "g")
                }(t)
            }();
            var S = k.length,
                _ = function(e) {
                    for (var t = e.sourceCode, n = e.basePos, i = e.sourceNode, o = [n, T], a = 0, r = t.match(x) || [], s = {}, l = 0, c = r.length; l < c; ++l) {
                        var u, d = r[l],
                            p = s[d],
                            f = void 0;
                        if ("string" == typeof p) u = !1;
                        else {
                            var m = C[d.charAt(0)];
                            if (m) f = d.match(m[1]), p = m[0];
                            else {
                                for (var h = 0; h < S; ++h)
                                    if (m = k[h], f = d.match(m[1])) {
                                        p = m[0];
                                        break
                                    }
                                f || (p = T)
                            }!(u = 5 <= p.length && "lang-" === p.substring(0, 5)) || f && "string" == typeof f[1] || (u = !1, p = E), u || (s[d] = p)
                        }
                        var v = a;
                        if (a += d.length, u) {
                            var g = f[1],
                                y = d.indexOf(g),
                                b = y + g.length;
                            f[2] && (y = (b = d.length - f[2].length) - g.length);
                            var w = p.substring(5);
                            M(i, n + v, d.substring(0, y), _, o), M(i, n + v + y, g, O(w, g), o), M(i, n + v + b, d.substring(b), _, o)
                        } else o.push(n + v, p)
                    }
                    e.decorations = o
                };
            return _
        }

        function w(e) {
            var t = [],
                n = [];
            e.tripleQuotedStrings ? t.push([d, /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/, null, "'\""]) : e.multiLineStrings ? t.push([d, /^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/, null, "'\"`"]) : t.push([d, /^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/, null, "\"'"]), e.verbatimStrings && n.push([d, /^@\"(?:[^\"]|\"\")*(?:\"|$)/, null]);
            var i = e.hashComments;
            i && (e.cStyleComments ? (1 < i ? t.push([f, /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, null, "#"]) : t.push([f, /^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/, null, "#"]), n.push([d, /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/, null])) : t.push([f, /^#[^\r\n]*/, null, "#"])), e.cStyleComments && (n.push([f, /^\/\/[^\r\n]*/, null]), n.push([f, /^\/\*[\s\S]*?(?:\*\/|$)/, null]));
            var o = e.regexLiterals;
            if (o) {
                var a = 1 < o ? "" : "\n\r",
                    r = a ? "." : "[\\S\\s]",
                    s = "/(?=[^/*" + a + "])(?:[^/\\x5B\\x5C" + a + "]|\\x5C" + r + "|\\x5B(?:[^\\x5C\\x5D" + a + "]|\\x5C" + r + ")*(?:\\x5D|$))+/";
                n.push(["lang-regex", RegExp("^" + g + "(" + s + ")")])
            }
            var l = e.types;
            l && n.push([m, l]);
            var c = ("" + e.keywords).replace(/^ | $/g, "");
            c.length && n.push([p, new RegExp("^(?:" + c.replace(/[\s,]+/g, "|") + ")\\b"), null]), t.push([T, /^\s+/, null, " \r\n\tÂ "]);
            var u = "^.[^\\s\\w.$@'\"`/\\\\]*";
            return e.regexLiterals && (u += "(?!s*/)"), n.push([h, /^@[a-z_$][a-z_$@0-9]*/i, null], [m, /^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/, null], [T, /^[a-z_$][a-z_$@0-9]*/i, null], [h, new RegExp("^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*", "i"), null, "0123456789"], [T, /^\\[\s\S]?/, null], [v, new RegExp(u), null]), b(t, n)
        }
        var k = w({
            keywords: [n, o, i, a, r, s, l, c],
            hashComments: !0,
            cStyleComments: !0,
            multiLineStrings: !0,
            regexLiterals: !0
        });

        function L(e, t, s) {
            for (var l = /(?:^|\s)nocode(?:\s|$)/, c = /\r\n?|\n/, u = e.ownerDocument, n = u.createElement("li"); e.firstChild;) n.appendChild(e.firstChild);
            var i = [n];

            function d(e) {
                var t = e.nodeType;
                if (1 != t || l.test(e.className)) {
                    if ((3 == t || 4 == t) && s) {
                        var n = e.nodeValue,
                            i = n.match(c);
                        if (i) {
                            var o = n.substring(0, i.index);
                            e.nodeValue = o;
                            var a = n.substring(i.index + i[0].length);
                            if (a) e.parentNode.insertBefore(u.createTextNode(a), e.nextSibling);
                            p(e), o || e.parentNode.removeChild(e)
                        }
                    }
                } else if ("br" === e.nodeName.toLowerCase()) p(e), e.parentNode && e.parentNode.removeChild(e);
                else
                    for (var r = e.firstChild; r; r = r.nextSibling) d(r)
            }

            function p(e) {
                for (; !e.nextSibling;)
                    if (!(e = e.parentNode)) return;
                for (var t, n = function e(t, n) {
                        var i = n ? t.cloneNode(!1) : t,
                            o = t.parentNode;
                        if (o) {
                            var a = e(o, 1),
                                r = t.nextSibling;
                            a.appendChild(i);
                            for (var s = r; s; s = r) r = s.nextSibling, a.appendChild(s)
                        }
                        return i
                    }(e.nextSibling, 0);
                    (t = n.parentNode) && 1 === t.nodeType;) n = t;
                i.push(n)
            }
            for (var o = 0; o < i.length; ++o) d(i[o]);
            t === (0 | t) && i[0].setAttribute("value", t);
            var a = u.createElement("ol");
            a.className = "linenums";
            for (var r = Math.max(0, t - 1 | 0) || 0, f = (o = 0, i.length); o < f; ++o)(n = i[o]).className = "L" + (o + r) % 10, n.firstChild || n.appendChild(u.createTextNode("Â ")), a.appendChild(n);
            e.appendChild(a)
        }
        var x = {};

        function C(e, t) {
            for (var n = t.length; 0 <= --n;) {
                var i = t[n];
                x.hasOwnProperty(i) ? P.console && console.warn("cannot override language handler %s", i) : x[i] = e
            }
        }

        function O(e, t) {
            return e && x.hasOwnProperty(e) || (e = /^\s*</.test(t) ? "default-markup" : "default-code"), x[e]
        }

        function I(e) {
            var t, r, s, l, c, u, d, n = e.langExtension;
            try {
                var i = (t = e.sourceNode, r = e.pre, s = /(?:^|\s)nocode(?:\s|$)/, l = [], u = [], d = c = 0, function e(t) {
                        var n = t.nodeType;
                        if (1 == n) {
                            if (s.test(t.className)) return;
                            for (var i = t.firstChild; i; i = i.nextSibling) e(i);
                            var o = t.nodeName.toLowerCase();
                            "br" !== o && "li" !== o || (l[d] = "\n", u[d << 1] = c++, u[d++ << 1 | 1] = t)
                        } else if (3 == n || 4 == n) {
                            var a = t.nodeValue;
                            a.length && (a = r ? a.replace(/\r\n?/g, "\n") : a.replace(/[ \t\r\n]+/g, " "), l[d] = a, u[d << 1] = c, c += a.length, u[d++ << 1 | 1] = t)
                        }
                    }(t), {
                        sourceCode: l.join("").replace(/\n$/, ""),
                        spans: u
                    }),
                    o = i.sourceCode;
                e.sourceCode = o, e.spans = i.spans, e.basePos = 0, O(n, o)(e),
                    function(e) {
                        var t = /\bMSIE\s(\d+)/.exec(navigator.userAgent);
                        t = t && +t[1] <= 8;
                        var n, i, o = /\n/g,
                            a = e.sourceCode,
                            r = a.length,
                            s = 0,
                            l = e.spans,
                            c = l.length,
                            u = 0,
                            d = e.decorations,
                            p = d.length,
                            f = 0;
                        for (d[p] = r, i = n = 0; i < p;) d[i] !== d[i + 2] ? (d[n++] = d[i++], d[n++] = d[i++]) : i += 2;
                        for (p = n, i = n = 0; i < p;) {
                            for (var m = d[i], h = d[i + 1], v = i + 2; v + 2 <= p && d[v + 1] === h;) v += 2;
                            d[n++] = m, d[n++] = h, i = v
                        }
                        p = d.length = n;
                        var g = e.sourceNode,
                            y = "";
                        g && (y = g.style.display, g.style.display = "none");
                        try {
                            for (; u < c;) {
                                l[u];
                                var b, w = l[u + 2] || r,
                                    k = d[f + 2] || r,
                                    x = (v = Math.min(w, k), l[u + 1]);
                                if (1 !== x.nodeType && (b = a.substring(s, v))) {
                                    t && (b = b.replace(o, "\r")), x.nodeValue = b;
                                    var C = x.ownerDocument,
                                        S = C.createElement("span");
                                    S.className = d[f + 1];
                                    var _ = x.parentNode;
                                    _.replaceChild(S, x), S.appendChild(x), s < w && (l[u + 1] = x = C.createTextNode(a.substring(v, w)), _.insertBefore(x, S.nextSibling))
                                }
                                w <= (s = v) && (u += 2), k <= s && (f += 2)
                            }
                        } finally {
                            g && (g.style.display = y)
                        }
                    }(e)
            } catch (e) {
                P.console && console.log(e && e.stack || e)
            }
        }

        function S(e, t, n) {
            var i = n || !1,
                o = t || null,
                a = document.createElement("div");
            return a.innerHTML = "<pre>" + e + "</pre>", a = a.firstChild, i && L(a, i, !0), I({
                langExtension: o,
                numberLines: i,
                sourceNode: a,
                pre: 1,
                sourceCode: null,
                basePos: null,
                spans: null,
                decorations: null
            }), a.innerHTML
        }

        function _(y, e) {
            var t = e || document.body,
                b = t.ownerDocument || document;

            function n(e) {
                return t.getElementsByTagName(e)
            }
            for (var i = [n("pre"), n("code"), n("xmp")], w = [], o = 0; o < i.length; ++o)
                for (var a = 0, r = i[o].length; a < r; ++a) w.push(i[o][a]);
            i = null;
            var k = Date;
            k.now || (k = {
                now: function() {
                    return +new Date
                }
            });
            var x = 0,
                C = /\blang(?:uage)?-([\w.]+)(?!\S)/,
                S = /\bprettyprint\b/,
                _ = /\bprettyprinted\b/,
                T = /pre|xmp/i,
                E = /^code$/i,
                M = /^(?:pre|code|xmp)$/i,
                O = {};
            ! function e() {
                for (var t = P.PR_SHOULD_USE_CONTINUATION ? k.now() + 250 : 1 / 0; x < w.length && k.now() < t; x++) {
                    for (var n = w[x], i = O, o = n; o = o.previousSibling;) {
                        var a = o.nodeType,
                            r = (7 === a || 8 === a) && o.nodeValue;
                        if (r ? !/^\??prettify\b/.test(r) : 3 !== a || /\S/.test(o.nodeValue)) break;
                        if (r) {
                            i = {}, r.replace(/\b(\w+)=([\w:.%+-]+)/g, function(e, t, n) {
                                i[t] = n
                            });
                            break
                        }
                    }
                    var s = n.className;
                    if ((i !== O || S.test(s)) && !_.test(s)) {
                        for (var l = !1, c = n.parentNode; c; c = c.parentNode) {
                            var u = c.tagName;
                            if (M.test(u) && c.className && S.test(c.className)) {
                                l = !0;
                                break
                            }
                        }
                        if (!l) {
                            n.className += " prettyprinted";
                            var d, p, f = i.lang;
                            if (f || (!(f = s.match(C)) && (d = A(n)) && E.test(d.tagName) && (f = d.className.match(C)), f && (f = f[1])), T.test(n.tagName)) p = 1;
                            else {
                                var m = n.currentStyle,
                                    h = b.defaultView,
                                    v = m ? m.whiteSpace : h && h.getComputedStyle ? h.getComputedStyle(n, null).getPropertyValue("white-space") : 0;
                                p = v && "pre" === v.substring(0, 3)
                            }
                            var g = i.linenums;
                            (g = "true" === g || +g) || (g = !!(g = s.match(/\blinenums\b(?::(\d+))?/)) && (!g[1] || !g[1].length || +g[1])), g && L(n, g, p), I({
                                langExtension: f,
                                sourceNode: n,
                                numberLines: g,
                                pre: p,
                                sourceCode: null,
                                basePos: null,
                                spans: null,
                                decorations: null
                            })
                        }
                    }
                }
                x < w.length ? P.setTimeout(e, 250) : "function" == typeof y && y()
            }()
        }
        C(k, ["default-code"]), C(b([], [
            [T, /^[^<?]+/],
            ["dec", /^<!\w[^>]*(?:>|$)/],
            [f, /^<\!--[\s\S]*?(?:-\->|$)/],
            ["lang-", /^<\?([\s\S]+?)(?:\?>|$)/],
            ["lang-", /^<%([\s\S]+?)(?:%>|$)/],
            [v, /^(?:<[%?]|[%?]>)/],
            ["lang-", /^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],
            ["lang-js", /^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],
            ["lang-css", /^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],
            ["lang-in.tag", /^(<\/?[a-z][^<>]*>)/i]
        ]), ["default-markup", "htm", "html", "mxml", "xhtml", "xml", "xsl"]), C(b([
            [T, /^[\s]+/, null, " \t\r\n"],
            ["atv", /^(?:\"[^\"]*\"?|\'[^\']*\'?)/, null, "\"'"]
        ], [
            ["tag", /^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],
            ["atn", /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],
            ["lang-uq.val", /^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],
            [v, /^[=<>\/]+/],
            ["lang-js", /^on\w+\s*=\s*\"([^\"]+)\"/i],
            ["lang-js", /^on\w+\s*=\s*\'([^\']+)\'/i],
            ["lang-js", /^on\w+\s*=\s*([^\"\'>\s]+)/i],
            ["lang-css", /^style\s*=\s*\"([^\"]+)\"/i],
            ["lang-css", /^style\s*=\s*\'([^\']+)\'/i],
            ["lang-css", /^style\s*=\s*([^\"\'>\s]+)/i]
        ]), ["in.tag"]), C(b([], [
            ["atv", /^[\s\S]+/]
        ]), ["uq.val"]), C(w({
            keywords: n,
            hashComments: !0,
            cStyleComments: !0,
            types: u
        }), ["c", "cc", "cpp", "cxx", "cyc", "m"]), C(w({
            keywords: "null,true,false"
        }), ["json"]), C(w({
            keywords: o,
            hashComments: !0,
            cStyleComments: !0,
            verbatimStrings: !0,
            types: u
        }), ["cs"]), C(w({
            keywords: i,
            cStyleComments: !0
        }), ["java"]), C(w({
            keywords: c,
            hashComments: !0,
            multiLineStrings: !0
        }), ["bash", "bsh", "csh", "sh"]), C(w({
            keywords: s,
            hashComments: !0,
            multiLineStrings: !0,
            tripleQuotedStrings: !0
        }), ["cv", "py", "python"]), C(w({
            keywords: r,
            hashComments: !0,
            multiLineStrings: !0,
            regexLiterals: 2
        }), ["perl", "pl", "pm"]), C(w({
            keywords: l,
            hashComments: !0,
            multiLineStrings: !0,
            regexLiterals: !0
        }), ["rb", "ruby"]), C(w({
            keywords: a,
            cStyleComments: !0,
            regexLiterals: !0
        }), ["javascript", "js", "ts", "typescript"]), C(w({
            keywords: "all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",
            hashComments: 3,
            cStyleComments: !0,
            multilineStrings: !0,
            tripleQuotedStrings: !0,
            regexLiterals: !0
        }), ["coffee"]), C(b([], [
            [d, /^[\s\S]+/]
        ]), ["regex"]);
        var N = P.PR = {
                createSimpleLexer: b,
                registerLangHandler: C,
                sourceDecorator: w,
                PR_ATTRIB_NAME: "atn",
                PR_ATTRIB_VALUE: "atv",
                PR_COMMENT: f,
                PR_DECLARATION: "dec",
                PR_KEYWORD: p,
                PR_LITERAL: h,
                PR_NOCODE: "nocode",
                PR_PLAIN: T,
                PR_PUNCTUATION: v,
                PR_SOURCE: E,
                PR_STRING: d,
                PR_TAG: "tag",
                PR_TYPE: m,
                prettyPrintOne: IN_GLOBAL_SCOPE ? P.prettyPrintOne = S : prettyPrintOne = S,
                prettyPrint: IN_GLOBAL_SCOPE ? P.prettyPrint = _ : prettyPrint = _
            },
            B = P.define;
        "function" == typeof B && B.amd && B("google-code-prettify", [], function() {
            return N
        })
    }(),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(window.jQuery || window.Zepto)
    }(function(u) {
        var d, i, p, o, f, t, l = "Close",
            c = "BeforeClose",
            m = "MarkupParse",
            h = "Open",
            v = ".mfp",
            g = "mfp-ready",
            n = "mfp-removing",
            r = "mfp-prevent-close",
            e = function() {},
            s = !!window.jQuery,
            y = u(window),
            b = function(e, t) {
                d.ev.on("mfp" + e + v, t)
            },
            w = function(e, t, n, i) {
                var o = document.createElement("div");
                return o.className = "mfp-" + e, n && (o.innerHTML = n), i ? t && t.appendChild(o) : (o = u(o), t && o.appendTo(t)), o
            },
            k = function(e, t) {
                d.ev.triggerHandler("mfp" + e, t), d.st.callbacks && (e = e.charAt(0).toLowerCase() + e.slice(1), d.st.callbacks[e] && d.st.callbacks[e].apply(d, u.isArray(t) ? t : [t]))
            },
            x = function(e) {
                return e === t && d.currTemplate.closeBtn || (d.currTemplate.closeBtn = u(d.st.closeMarkup.replace("%title%", d.st.tClose)), t = e), d.currTemplate.closeBtn
            },
            a = function() {
                u.magnificPopup.instance || ((d = new e).init(), u.magnificPopup.instance = d)
            };
        e.prototype = {
            constructor: e,
            init: function() {
                var e = navigator.appVersion;
                d.isLowIE = d.isIE8 = document.all && !document.addEventListener, d.isAndroid = /android/gi.test(e), d.isIOS = /iphone|ipad|ipod/gi.test(e), d.supportsTransition = function() {
                    var e = document.createElement("p").style,
                        t = ["ms", "O", "Moz", "Webkit"];
                    if (void 0 !== e.transition) return !0;
                    for (; t.length;)
                        if (t.pop() + "Transition" in e) return !0;
                    return !1
                }(), d.probablyMobile = d.isAndroid || d.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), p = u(document), d.popupsCache = {}
            },
            open: function(e) {
                var t;
                if (!1 === e.isObj) {
                    d.items = e.items.toArray(), d.index = 0;
                    var n, i = e.items;
                    for (t = 0; t < i.length; t++)
                        if ((n = i[t]).parsed && (n = n.el[0]), n === e.el[0]) {
                            d.index = t;
                            break
                        }
                } else d.items = u.isArray(e.items) ? e.items : [e.items], d.index = e.index || 0;
                if (!d.isOpen) {
                    d.types = [], f = "", e.mainEl && e.mainEl.length ? d.ev = e.mainEl.eq(0) : d.ev = p, e.key ? (d.popupsCache[e.key] || (d.popupsCache[e.key] = {}), d.currTemplate = d.popupsCache[e.key]) : d.currTemplate = {}, d.st = u.extend(!0, {}, u.magnificPopup.defaults, e), d.fixedContentPos = "auto" === d.st.fixedContentPos ? !d.probablyMobile : d.st.fixedContentPos, d.st.modal && (d.st.closeOnContentClick = !1, d.st.closeOnBgClick = !1, d.st.showCloseBtn = !1, d.st.enableEscapeKey = !1), d.bgOverlay || (d.bgOverlay = w("bg").on("click" + v, function() {
                        d.close()
                    }), d.wrap = w("wrap").attr("tabindex", -1).on("click" + v, function(e) {
                        d._checkIfClose(e.target) && d.close()
                    }), d.container = w("container", d.wrap)), d.contentContainer = w("content"), d.st.preloader && (d.preloader = w("preloader", d.container, d.st.tLoading));
                    var o = u.magnificPopup.modules;
                    for (t = 0; t < o.length; t++) {
                        var a = o[t];
                        a = a.charAt(0).toUpperCase() + a.slice(1), d["init" + a].call(d)
                    }
                    k("BeforeOpen"), d.st.showCloseBtn && (d.st.closeBtnInside ? (b(m, function(e, t, n, i) {
                        n.close_replaceWith = x(i.type)
                    }), f += " mfp-close-btn-in") : d.wrap.append(x())), d.st.alignTop && (f += " mfp-align-top"), d.fixedContentPos ? d.wrap.css({
                        overflow: d.st.overflowY,
                        overflowX: "hidden",
                        overflowY: d.st.overflowY
                    }) : d.wrap.css({
                        top: y.scrollTop(),
                        position: "absolute"
                    }), (!1 === d.st.fixedBgPos || "auto" === d.st.fixedBgPos && !d.fixedContentPos) && d.bgOverlay.css({
                        height: p.height(),
                        position: "absolute"
                    }), d.st.enableEscapeKey && p.on("keyup" + v, function(e) {
                        27 === e.keyCode && d.close()
                    }), y.on("resize" + v, function() {
                        d.updateSize()
                    }), d.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && d.wrap.addClass(f);
                    var r = d.wH = y.height(),
                        s = {};
                    if (d.fixedContentPos && d._hasScrollBar(r)) {
                        var l = d._getScrollbarSize();
                        l && (s.marginRight = l)
                    }
                    d.fixedContentPos && (d.isIE7 ? u("body, html").css("overflow", "hidden") : s.overflow = "hidden");
                    var c = d.st.mainClass;
                    return d.isIE7 && (c += " mfp-ie7"), c && d._addClassToMFP(c), d.updateItemHTML(), k("BuildControls"), u("html").css(s), d.bgOverlay.add(d.wrap).prependTo(d.st.prependTo || u(document.body)), d._lastFocusedEl = document.activeElement, setTimeout(function() {
                        d.content ? (d._addClassToMFP(g), d._setFocus()) : d.bgOverlay.addClass(g), p.on("focusin" + v, d._onFocusIn)
                    }, 16), d.isOpen = !0, d.updateSize(r), k(h), e
                }
                d.updateItemHTML()
            },
            close: function() {
                d.isOpen && (k(c), d.isOpen = !1, d.st.removalDelay && !d.isLowIE && d.supportsTransition ? (d._addClassToMFP(n), setTimeout(function() {
                    d._close()
                }, d.st.removalDelay)) : d._close())
            },
            _close: function() {
                k(l);
                var e = n + " " + g + " ";
                if (d.bgOverlay.detach(), d.wrap.detach(), d.container.empty(), d.st.mainClass && (e += d.st.mainClass + " "), d._removeClassFromMFP(e), d.fixedContentPos) {
                    var t = {
                        marginRight: ""
                    };
                    d.isIE7 ? u("body, html").css("overflow", "") : t.overflow = "", u("html").css(t)
                }
                p.off("keyup.mfp focusin" + v), d.ev.off(v), d.wrap.attr("class", "mfp-wrap").removeAttr("style"), d.bgOverlay.attr("class", "mfp-bg"), d.container.attr("class", "mfp-container"), !d.st.showCloseBtn || d.st.closeBtnInside && !0 !== d.currTemplate[d.currItem.type] || d.currTemplate.closeBtn && d.currTemplate.closeBtn.detach(), d.st.autoFocusLast && d._lastFocusedEl && u(d._lastFocusedEl).focus(), d.currItem = null, d.content = null, d.currTemplate = null, d.prevHeight = 0, k("AfterClose")
            },
            updateSize: function(e) {
                if (d.isIOS) {
                    var t = document.documentElement.clientWidth / window.innerWidth,
                        n = window.innerHeight * t;
                    d.wrap.css("height", n), d.wH = n
                } else d.wH = e || y.height();
                d.fixedContentPos || d.wrap.css("height", d.wH), k("Resize")
            },
            updateItemHTML: function() {
                var e = d.items[d.index];
                d.contentContainer.detach(), d.content && d.content.detach(), e.parsed || (e = d.parseEl(d.index));
                var t = e.type;
                if (k("BeforeChange", [d.currItem ? d.currItem.type : "", t]), d.currItem = e, !d.currTemplate[t]) {
                    var n = !!d.st[t] && d.st[t].markup;
                    k("FirstMarkupParse", n), d.currTemplate[t] = !n || u(n)
                }
                o && o !== e.type && d.container.removeClass("mfp-" + o + "-holder");
                var i = d["get" + t.charAt(0).toUpperCase() + t.slice(1)](e, d.currTemplate[t]);
                d.appendContent(i, t), e.preloaded = !0, k("Change", e), o = e.type, d.container.prepend(d.contentContainer), k("AfterChange")
            },
            appendContent: function(e, t) {
                (d.content = e) ? d.st.showCloseBtn && d.st.closeBtnInside && !0 === d.currTemplate[t] ? d.content.find(".mfp-close").length || d.content.append(x()) : d.content = e: d.content = "", k("BeforeAppend"), d.container.addClass("mfp-" + t + "-holder"), d.contentContainer.append(d.content)
            },
            parseEl: function(e) {
                var t, n = d.items[e];
                if (n.tagName ? n = {
                        el: u(n)
                    } : (t = n.type, n = {
                        data: n,
                        src: n.src
                    }), n.el) {
                    for (var i = d.types, o = 0; o < i.length; o++)
                        if (n.el.hasClass("mfp-" + i[o])) {
                            t = i[o];
                            break
                        }
                    n.src = n.el.attr("data-mfp-src"), n.src || (n.src = n.el.attr("href"))
                }
                return n.type = t || d.st.type || "inline", n.index = e, n.parsed = !0, d.items[e] = n, k("ElementParse", n), d.items[e]
            },
            addGroup: function(t, n) {
                var e = function(e) {
                    e.mfpEl = this, d._openClick(e, t, n)
                };
                n || (n = {});
                var i = "click.magnificPopup";
                n.mainEl = t, n.items ? (n.isObj = !0, t.off(i).on(i, e)) : (n.isObj = !1, n.delegate ? t.off(i).on(i, n.delegate, e) : (n.items = t).off(i).on(i, e))
            },
            _openClick: function(e, t, n) {
                if ((void 0 !== n.midClick ? n.midClick : u.magnificPopup.defaults.midClick) || !(2 === e.which || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)) {
                    var i = void 0 !== n.disableOn ? n.disableOn : u.magnificPopup.defaults.disableOn;
                    if (i)
                        if (u.isFunction(i)) {
                            if (!i.call(d)) return !0
                        } else if (y.width() < i) return !0;
                    e.type && (e.preventDefault(), d.isOpen && e.stopPropagation()), n.el = u(e.mfpEl), n.delegate && (n.items = t.find(n.delegate)), d.open(n)
                }
            },
            updateStatus: function(e, t) {
                if (d.preloader) {
                    i !== e && d.container.removeClass("mfp-s-" + i), t || "loading" !== e || (t = d.st.tLoading);
                    var n = {
                        status: e,
                        text: t
                    };
                    k("UpdateStatus", n), e = n.status, t = n.text, d.preloader.html(t), d.preloader.find("a").on("click", function(e) {
                        e.stopImmediatePropagation()
                    }), d.container.addClass("mfp-s-" + e), i = e
                }
            },
            _checkIfClose: function(e) {
                if (!u(e).hasClass(r)) {
                    var t = d.st.closeOnContentClick,
                        n = d.st.closeOnBgClick;
                    if (t && n) return !0;
                    if (!d.content || u(e).hasClass("mfp-close") || d.preloader && e === d.preloader[0]) return !0;
                    if (e === d.content[0] || u.contains(d.content[0], e)) {
                        if (t) return !0
                    } else if (n && u.contains(document, e)) return !0;
                    return !1
                }
            },
            _addClassToMFP: function(e) {
                d.bgOverlay.addClass(e), d.wrap.addClass(e)
            },
            _removeClassFromMFP: function(e) {
                this.bgOverlay.removeClass(e), d.wrap.removeClass(e)
            },
            _hasScrollBar: function(e) {
                return (d.isIE7 ? p.height() : document.body.scrollHeight) > (e || y.height())
            },
            _setFocus: function() {
                (d.st.focus ? d.content.find(d.st.focus).eq(0) : d.wrap).focus()
            },
            _onFocusIn: function(e) {
                if (e.target !== d.wrap[0] && !u.contains(d.wrap[0], e.target)) return d._setFocus(), !1
            },
            _parseMarkup: function(o, e, t) {
                var a;
                t.data && (e = u.extend(t.data, e)), k(m, [o, e, t]), u.each(e, function(e, t) {
                    if (void 0 === t || !1 === t) return !0;
                    if (1 < (a = e.split("_")).length) {
                        var n = o.find(v + "-" + a[0]);
                        if (0 < n.length) {
                            var i = a[1];
                            "replaceWith" === i ? n[0] !== t[0] && n.replaceWith(t) : "img" === i ? n.is("img") ? n.attr("src", t) : n.replaceWith(u("<img>").attr("src", t).attr("class", n.attr("class"))) : n.attr(a[1], t)
                        }
                    } else o.find(v + "-" + e).html(t)
                })
            },
            _getScrollbarSize: function() {
                if (void 0 === d.scrollbarSize) {
                    var e = document.createElement("div");
                    e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), d.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
                }
                return d.scrollbarSize
            }
        }, u.magnificPopup = {
            instance: null,
            proto: e.prototype,
            modules: [],
            open: function(e, t) {
                return a(), (e = e ? u.extend(!0, {}, e) : {}).isObj = !0, e.index = t || 0, this.instance.open(e)
            },
            close: function() {
                return u.magnificPopup.instance && u.magnificPopup.instance.close()
            },
            registerModule: function(e, t) {
                t.options && (u.magnificPopup.defaults[e] = t.options), u.extend(this.proto, t.proto), this.modules.push(e)
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading...",
                autoFocusLast: !0
            }
        }, u.fn.magnificPopup = function(e) {
            a();
            var t = u(this);
            if ("string" == typeof e)
                if ("open" === e) {
                    var n, i = s ? t.data("magnificPopup") : t[0].magnificPopup,
                        o = parseInt(arguments[1], 10) || 0;
                    i.items ? n = i.items[o] : (n = t, i.delegate && (n = n.find(i.delegate)), n = n.eq(o)), d._openClick({
                        mfpEl: n
                    }, t, i)
                } else d.isOpen && d[e].apply(d, Array.prototype.slice.call(arguments, 1));
            else e = u.extend(!0, {}, e), s ? t.data("magnificPopup", e) : t[0].magnificPopup = e, d.addGroup(t, e);
            return t
        };
        var C, S, _, T = "inline",
            E = function() {
                _ && (S.after(_.addClass(C)).detach(), _ = null)
            };
        u.magnificPopup.registerModule(T, {
            options: {
                hiddenClass: "hide",
                markup: "",
                tNotFound: "Content not found"
            },
            proto: {
                initInline: function() {
                    d.types.push(T), b(l + "." + T, function() {
                        E()
                    })
                },
                getInline: function(e, t) {
                    if (E(), e.src) {
                        var n = d.st.inline,
                            i = u(e.src);
                        if (i.length) {
                            var o = i[0].parentNode;
                            o && o.tagName && (S || (C = n.hiddenClass, S = w(C), C = "mfp-" + C), _ = i.after(S).detach().removeClass(C)), d.updateStatus("ready")
                        } else d.updateStatus("error", n.tNotFound), i = u("<div>");
                        return e.inlineElement = i
                    }
                    return d.updateStatus("ready"), d._parseMarkup(t, {}, e), t
                }
            }
        });
        var M, O = "ajax",
            P = function() {
                M && u(document.body).removeClass(M)
            },
            A = function() {
                P(), d.req && d.req.abort()
            };
        u.magnificPopup.registerModule(O, {
            options: {
                settings: null,
                cursor: "mfp-ajax-cur",
                tError: '<a href="%url%">The content</a> could not be loaded.'
            },
            proto: {
                initAjax: function() {
                    d.types.push(O), M = d.st.ajax.cursor, b(l + "." + O, A), b("BeforeChange." + O, A)
                },
                getAjax: function(o) {
                    M && u(document.body).addClass(M), d.updateStatus("loading");
                    var e = u.extend({
                        url: o.src,
                        success: function(e, t, n) {
                            var i = {
                                data: e,
                                xhr: n
                            };
                            k("ParseAjax", i), d.appendContent(u(i.data), O), o.finished = !0, P(), d._setFocus(), setTimeout(function() {
                                d.wrap.addClass(g)
                            }, 16), d.updateStatus("ready"), k("AjaxContentAdded")
                        },
                        error: function() {
                            P(), o.finished = o.loadError = !0, d.updateStatus("error", d.st.ajax.tError.replace("%url%", o.src))
                        }
                    }, d.st.ajax.settings);
                    return d.req = u.ajax(e), ""
                }
            }
        });
        var L;
        u.magnificPopup.registerModule("image", {
            options: {
                markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.'
            },
            proto: {
                initImage: function() {
                    var e = d.st.image,
                        t = ".image";
                    d.types.push("image"), b(h + t, function() {
                        "image" === d.currItem.type && e.cursor && u(document.body).addClass(e.cursor)
                    }), b(l + t, function() {
                        e.cursor && u(document.body).removeClass(e.cursor), y.off("resize" + v)
                    }), b("Resize" + t, d.resizeImage), d.isLowIE && b("AfterChange", d.resizeImage)
                },
                resizeImage: function() {
                    var e = d.currItem;
                    if (e && e.img && d.st.image.verticalFit) {
                        var t = 0;
                        d.isLowIE && (t = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", d.wH - t)
                    }
                },
                _onImageHasSize: function(e) {
                    e.img && (e.hasSize = !0, L && clearInterval(L), e.isCheckingImgSize = !1, k("ImageHasSize", e), e.imgHidden && (d.content && d.content.removeClass("mfp-loading"), e.imgHidden = !1))
                },
                findImageSize: function(t) {
                    var n = 0,
                        i = t.img[0],
                        o = function(e) {
                            L && clearInterval(L), L = setInterval(function() {
                                0 < i.naturalWidth ? d._onImageHasSize(t) : (200 < n && clearInterval(L), 3 === ++n ? o(10) : 40 === n ? o(50) : 100 === n && o(500))
                            }, e)
                        };
                    o(1)
                },
                getImage: function(e, t) {
                    var n = 0,
                        i = function() {
                            e && (e.img[0].complete ? (e.img.off(".mfploader"), e === d.currItem && (d._onImageHasSize(e), d.updateStatus("ready")), e.hasSize = !0, e.loaded = !0, k("ImageLoadComplete")) : ++n < 200 ? setTimeout(i, 100) : o())
                        },
                        o = function() {
                            e && (e.img.off(".mfploader"), e === d.currItem && (d._onImageHasSize(e), d.updateStatus("error", a.tError.replace("%url%", e.src))), e.hasSize = !0, e.loaded = !0, e.loadError = !0)
                        },
                        a = d.st.image,
                        r = t.find(".mfp-img");
                    if (r.length) {
                        var s = document.createElement("img");
                        s.className = "mfp-img", e.el && e.el.find("img").length && (s.alt = e.el.find("img").attr("alt")), e.img = u(s).on("load.mfploader", i).on("error.mfploader", o), s.src = e.src, r.is("img") && (e.img = e.img.clone()), 0 < (s = e.img[0]).naturalWidth ? e.hasSize = !0 : s.width || (e.hasSize = !1)
                    }
                    return d._parseMarkup(t, {
                        title: function(e) {
                            if (e.data && void 0 !== e.data.title) return e.data.title;
                            var t = d.st.image.titleSrc;
                            if (t) {
                                if (u.isFunction(t)) return t.call(d, e);
                                if (e.el) return e.el.attr(t) || ""
                            }
                            return ""
                        }(e),
                        img_replaceWith: e.img
                    }, e), d.resizeImage(), e.hasSize ? (L && clearInterval(L), e.loadError ? (t.addClass("mfp-loading"), d.updateStatus("error", a.tError.replace("%url%", e.src))) : (t.removeClass("mfp-loading"), d.updateStatus("ready"))) : (d.updateStatus("loading"), e.loading = !0, e.hasSize || (e.imgHidden = !0, t.addClass("mfp-loading"), d.findImageSize(e))), t
                }
            }
        });
        var I;
        u.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1,
                easing: "ease-in-out",
                duration: 300,
                opener: function(e) {
                    return e.is("img") ? e : e.find("img")
                }
            },
            proto: {
                initZoom: function() {
                    var e, a = d.st.zoom,
                        t = ".zoom";
                    if (a.enabled && d.supportsTransition) {
                        var n, i, o = a.duration,
                            r = function(e) {
                                var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                    n = "all " + a.duration / 1e3 + "s " + a.easing,
                                    i = {
                                        position: "fixed",
                                        zIndex: 9999,
                                        left: 0,
                                        top: 0,
                                        "-webkit-backface-visibility": "hidden"
                                    },
                                    o = "transition";
                                return i["-webkit-" + o] = i["-moz-" + o] = i["-o-" + o] = i[o] = n, t.css(i), t
                            },
                            s = function() {
                                d.content.css("visibility", "visible")
                            };
                        b("BuildControls" + t, function() {
                            if (d._allowZoom()) {
                                if (clearTimeout(n), d.content.css("visibility", "hidden"), !(e = d._getItemToZoom())) return void s();
                                (i = r(e)).css(d._getOffset()), d.wrap.append(i), n = setTimeout(function() {
                                    i.css(d._getOffset(!0)), n = setTimeout(function() {
                                        s(), setTimeout(function() {
                                            i.remove(), e = i = null, k("ZoomAnimationEnded")
                                        }, 16)
                                    }, o)
                                }, 16)
                            }
                        }), b(c + t, function() {
                            if (d._allowZoom()) {
                                if (clearTimeout(n), d.st.removalDelay = o, !e) {
                                    if (!(e = d._getItemToZoom())) return;
                                    i = r(e)
                                }
                                i.css(d._getOffset(!0)), d.wrap.append(i), d.content.css("visibility", "hidden"), setTimeout(function() {
                                    i.css(d._getOffset())
                                }, 16)
                            }
                        }), b(l + t, function() {
                            d._allowZoom() && (s(), i && i.remove(), e = null)
                        })
                    }
                },
                _allowZoom: function() {
                    return "image" === d.currItem.type
                },
                _getItemToZoom: function() {
                    return !!d.currItem.hasSize && d.currItem.img
                },
                _getOffset: function(e) {
                    var t, n = (t = e ? d.currItem.img : d.st.zoom.opener(d.currItem.el || d.currItem)).offset(),
                        i = parseInt(t.css("padding-top"), 10),
                        o = parseInt(t.css("padding-bottom"), 10);
                    n.top -= u(window).scrollTop() - i;
                    var a = {
                        width: t.width(),
                        height: (s ? t.innerHeight() : t[0].offsetHeight) - o - i
                    };
                    return void 0 === I && (I = void 0 !== document.createElement("p").style.MozTransform), I ? a["-moz-transform"] = a.transform = "translate(" + n.left + "px," + n.top + "px)" : (a.left = n.left, a.top = n.top), a
                }
            }
        });
        var N = "iframe",
            B = function(e) {
                if (d.currTemplate[N]) {
                    var t = d.currTemplate[N].find("iframe");
                    t.length && (e || (t[0].src = "//about:blank"), d.isIE8 && t.css("display", e ? "block" : "none"))
                }
            };
        u.magnificPopup.registerModule(N, {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: {
                        index: "youtube.com",
                        id: "v=",
                        src: "//www.youtube.com/embed/%id%?autoplay=1"
                    },
                    vimeo: {
                        index: "vimeo.com/",
                        id: "/",
                        src: "//player.vimeo.com/video/%id%?autoplay=1"
                    },
                    gmaps: {
                        index: "//maps.google.",
                        src: "%id%&output=embed"
                    }
                }
            },
            proto: {
                initIframe: function() {
                    d.types.push(N), b("BeforeChange", function(e, t, n) {
                        t !== n && (t === N ? B() : n === N && B(!0))
                    }), b(l + "." + N, function() {
                        B()
                    })
                },
                getIframe: function(e, t) {
                    var n = e.src,
                        i = d.st.iframe;
                    u.each(i.patterns, function() {
                        if (-1 < n.indexOf(this.index)) return this.id && (n = "string" == typeof this.id ? n.substr(n.lastIndexOf(this.id) + this.id.length, n.length) : this.id.call(this, n)), n = this.src.replace("%id%", n), !1
                    });
                    var o = {};
                    return i.srcAction && (o[i.srcAction] = n), d._parseMarkup(t, o, e), d.updateStatus("ready"), t
                }
            }
        });
        var j = function(e) {
                var t = d.items.length;
                return t - 1 < e ? e - t : e < 0 ? t + e : e
            },
            z = function(e, t, n) {
                return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
            };
        u.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%"
            },
            proto: {
                initGallery: function() {
                    var a = d.st.gallery,
                        e = ".mfp-gallery";
                    if (d.direction = !0, !a || !a.enabled) return !1;
                    f += " mfp-gallery", b(h + e, function() {
                        a.navigateByImgClick && d.wrap.on("click" + e, ".mfp-img", function() {
                            if (1 < d.items.length) return d.next(), !1
                        }), p.on("keydown" + e, function(e) {
                            37 === e.keyCode ? d.prev() : 39 === e.keyCode && d.next()
                        })
                    }), b("UpdateStatus" + e, function(e, t) {
                        t.text && (t.text = z(t.text, d.currItem.index, d.items.length))
                    }), b(m + e, function(e, t, n, i) {
                        var o = d.items.length;
                        n.counter = 1 < o ? z(a.tCounter, i.index, o) : ""
                    }), b("BuildControls" + e, function() {
                        if (1 < d.items.length && a.arrows && !d.arrowLeft) {
                            var e = a.arrowMarkup,
                                t = d.arrowLeft = u(e.replace(/%title%/gi, a.tPrev).replace(/%dir%/gi, "left")).addClass(r),
                                n = d.arrowRight = u(e.replace(/%title%/gi, a.tNext).replace(/%dir%/gi, "right")).addClass(r);
                            t.click(function() {
                                d.prev()
                            }), n.click(function() {
                                d.next()
                            }), d.container.append(t.add(n))
                        }
                    }), b("Change" + e, function() {
                        d._preloadTimeout && clearTimeout(d._preloadTimeout), d._preloadTimeout = setTimeout(function() {
                            d.preloadNearbyImages(), d._preloadTimeout = null
                        }, 16)
                    }), b(l + e, function() {
                        p.off(e), d.wrap.off("click" + e), d.arrowRight = d.arrowLeft = null
                    })
                },
                next: function() {
                    d.direction = !0, d.index = j(d.index + 1), d.updateItemHTML()
                },
                prev: function() {
                    d.direction = !1, d.index = j(d.index - 1), d.updateItemHTML()
                },
                goTo: function(e) {
                    d.direction = e >= d.index, d.index = e, d.updateItemHTML()
                },
                preloadNearbyImages: function() {
                    var e, t = d.st.gallery.preload,
                        n = Math.min(t[0], d.items.length),
                        i = Math.min(t[1], d.items.length);
                    for (e = 1; e <= (d.direction ? i : n); e++) d._preloadItem(d.index + e);
                    for (e = 1; e <= (d.direction ? n : i); e++) d._preloadItem(d.index - e)
                },
                _preloadItem: function(e) {
                    if (e = j(e), !d.items[e].preloaded) {
                        var t = d.items[e];
                        t.parsed || (t = d.parseEl(e)), k("LazyLoad", t), "image" === t.type && (t.img = u('<img class="mfp-img" />').on("load.mfploader", function() {
                            t.hasSize = !0
                        }).on("error.mfploader", function() {
                            t.hasSize = !0, t.loadError = !0, k("LazyLoadError", t)
                        }).attr("src", t.src)), t.preloaded = !0
                    }
                }
            }
        });
        var D = "retina";
        u.magnificPopup.registerModule(D, {
            options: {
                replaceSrc: function(e) {
                    return e.src.replace(/\.\w+$/, function(e) {
                        return "@2x" + e
                    })
                },
                ratio: 1
            },
            proto: {
                initRetina: function() {
                    if (1 < window.devicePixelRatio) {
                        var n = d.st.retina,
                            i = n.ratio;
                        1 < (i = isNaN(i) ? i() : i) && (b("ImageHasSize." + D, function(e, t) {
                            t.img.css({
                                "max-width": t.img[0].naturalWidth / i,
                                width: "100%"
                            })
                        }), b("ElementParse." + D, function(e, t) {
                            t.src = n.replaceSrc(t, i)
                        }))
                    }
                }
            }
        }), a()
    }),
    function() {
        var p, l, f, m, e, r, c, M, o, u, h, i, v, n, t, g, O, a, s, d, y, b, w = [].slice;
        l = /^\(?([^)]*)\)?(?:(.)(d+))?$/, p = 2e3, f = 2, m = 1e3 / 30, t = document.createElement("div").style, c = null != t.transition || null != t.webkitTransition || null != t.mozTransition || null != t.oTransition, v = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, e = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, o = function(e) {
            var t;
            return (t = document.createElement("div")).innerHTML = e, t.children[0]
        }, i = function(e, t) {
            return e.className = e.className.replace(new RegExp("(^| )" + t.split(" ").join("|") + "( |$)", "gi"), " ")
        }, M = function(e, t) {
            return i(e, t), e.className += " " + t
        }, g = function(e, t) {
            var n;
            return null != document.createEvent ? ((n = document.createEvent("HTMLEvents")).initEvent(t, !0, !0), e.dispatchEvent(n)) : void 0
        }, h = function() {
            var e, t;
            return null != (e = null != (t = window.performance) && "function" == typeof t.now ? t.now() : void 0) ? e : +new Date
        }, n = function(e, t) {
            return null == t && (t = 0), t ? (e *= Math.pow(10, t), e += .5, e = Math.floor(e), e /= Math.pow(10, t)) : Math.round(e)
        }, O = function(e) {
            return e < 0 ? Math.ceil(e) : Math.floor(e)
        }, s = !(u = function(e) {
            return e - n(e)
        }), (a = function() {
            var e, t, n, i, o;
            if (!s && null != window.jQuery) {
                for (s = !0, o = [], t = 0, n = (i = ["html", "text"]).length; t < n; t++) e = i[t], o.push(function(e) {
                    var n;
                    return n = window.jQuery.fn[e], window.jQuery.fn[e] = function(e) {
                        var t;
                        return null == e || null == (null != (t = this[0]) ? t.odometer : void 0) ? n.apply(this, arguments) : this[0].odometer.update(e)
                    }
                }(e));
                return o
            }
        })(), setTimeout(a, 0), (r = function() {
            function d(e) {
                var t, n, i, o, a, r, s, l, c, u = this;
                if (this.options = e, this.el = this.options.el, null != this.el.odometer) return this.el.odometer;
                for (t in this.el.odometer = this, s = d.options) i = s[t], null == this.options[t] && (this.options[t] = i);
                null == (o = this.options).duration && (o.duration = p), this.MAX_VALUES = this.options.duration / m / f | 0, this.resetFormat(), this.value = this.cleanValue(null != (l = this.options.value) ? l : ""), this.renderInside(), this.render();
                try {
                    for (a = 0, r = (c = ["innerHTML", "innerText", "textContent"]).length; a < r; a++) n = c[a], null != this.el[n] && function(t) {
                        Object.defineProperty(u.el, t, {
                            get: function() {
                                var e;
                                return "innerHTML" === t ? u.inside.outerHTML : null != (e = u.inside.innerText) ? e : u.inside.textContent
                            },
                            set: function(e) {
                                return u.update(e)
                            }
                        })
                    }(n)
                } catch (e) {
                    e, this.watchForMutations()
                }
            }
            return d.prototype.renderInside = function() {
                return this.inside = document.createElement("div"), this.inside.className = "odometer-inside", this.el.innerHTML = "", this.el.appendChild(this.inside)
            }, d.prototype.watchForMutations = function() {
                var n = this;
                if (null != e) try {
                    return null == this.observer && (this.observer = new e(function(e) {
                        var t;
                        return t = n.el.innerText, n.renderInside(), n.render(n.value), n.update(t)
                    })), this.watchMutations = !0, this.startWatchingMutations()
                } catch (e) {
                    e
                }
            }, d.prototype.startWatchingMutations = function() {
                return this.watchMutations ? this.observer.observe(this.el, {
                    childList: !0
                }) : void 0
            }, d.prototype.stopWatchingMutations = function() {
                var e;
                return null != (e = this.observer) ? e.disconnect() : void 0
            }, d.prototype.cleanValue = function(e) {
                var t;
                return "string" == typeof e && (e = (e = (e = e.replace(null != (t = this.format.radix) ? t : ".", "<radix>")).replace(/[.,]/g, "")).replace("<radix>", "."), e = parseFloat(e, 10) || 0), n(e, this.format.precision)
            }, d.prototype.bindTransitionEnd = function() {
                var e, t, n, i, o, a, r = this;
                if (!this.transitionEndBound) {
                    for (this.transitionEndBound = !0, t = !1, a = [], n = 0, i = (o = "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd".split(" ")).length; n < i; n++) e = o[n], a.push(this.el.addEventListener(e, function() {
                        return t || (t = !0, setTimeout(function() {
                            return r.render(), t = !1, g(r.el, "odometerdone")
                        }, 0)), !0
                    }, !1));
                    return a
                }
            }, d.prototype.resetFormat = function() {
                var e, t, n, i, o, a, r, s;
                if ((e = null != (r = this.options.format) ? r : "(,ddd).dd") || (e = "d"), !(n = l.exec(e))) throw new Error("Odometer: Unparsable digit format");
                return a = (s = n.slice(1, 4))[0], o = s[1], i = (null != (t = s[2]) ? t.length : void 0) || 0, this.format = {
                    repeating: a,
                    radix: o,
                    precision: i
                }
            }, d.prototype.render = function(e) {
                var t, n, i, o, a, r, s;
                for (null == e && (e = this.value), this.stopWatchingMutations(), this.resetFormat(), this.inside.innerHTML = "", a = this.options.theme, o = [], r = 0, s = (t = this.el.className.split(" ")).length; r < s; r++)(n = t[r]).length && ((i = /^odometer-theme-(.+)$/.exec(n)) ? a = i[1] : /^odometer(-|$)/.test(n) || o.push(n));
                return o.push("odometer"), c || o.push("odometer-no-transitions"), a ? o.push("odometer-theme-" + a) : o.push("odometer-auto-theme"), this.el.className = o.join(" "), this.ribbons = {}, this.formatDigits(e), this.startWatchingMutations()
            }, d.prototype.formatDigits = function(e) {
                var t, n, i, o, a, r, s, l, c;
                if (this.digits = [], this.options.formatFunction)
                    for (o = 0, r = (l = this.options.formatFunction(e).split("").reverse()).length; o < r; o++)(n = l[o]).match(/0-9/) ? ((t = this.renderDigit()).querySelector(".odometer-value").innerHTML = n, this.digits.push(t), this.insertDigit(t)) : this.addSpacer(n);
                else
                    for (i = !this.format.precision || !u(e) || !1, a = 0, s = (c = e.toString().split("").reverse()).length; a < s; a++) "." === (t = c[a]) && (i = !0), this.addDigit(t, i)
            }, d.prototype.update = function(e) {
                var t, n = this;
                return (t = (e = this.cleanValue(e)) - this.value) ? (i(this.el, "odometer-animating-up odometer-animating-down odometer-animating"), M(this.el, 0 < t ? "odometer-animating-up" : "odometer-animating-down"), this.stopWatchingMutations(), this.animate(e), this.startWatchingMutations(), setTimeout(function() {
                    return n.el.offsetHeight, M(n.el, "odometer-animating")
                }, 0), this.value = e) : void 0
            }, d.prototype.renderDigit = function() {
                return o('<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value"></span></span></span></span></span>')
            }, d.prototype.insertDigit = function(e, t) {
                return null != t ? this.inside.insertBefore(e, t) : this.inside.children.length ? this.inside.insertBefore(e, this.inside.children[0]) : this.inside.appendChild(e)
            }, d.prototype.addSpacer = function(e, t, n) {
                var i;
                return (i = o('<span class="odometer-formatting-mark"></span>')).innerHTML = e, n && M(i, n), this.insertDigit(i, t)
            }, d.prototype.addDigit = function(e, t) {
                var n, i, o, a;
                if (null == t && (t = !0), "-" === e) return this.addSpacer(e, null, "odometer-negation-mark");
                if ("." === e) return this.addSpacer(null != (a = this.format.radix) ? a : ".", null, "odometer-radix-mark");
                if (t)
                    for (o = !1;;) {
                        if (!this.format.repeating.length) {
                            if (o) throw new Error("Bad odometer format without digits");
                            this.resetFormat(), o = !0
                        }
                        if (n = this.format.repeating[this.format.repeating.length - 1], this.format.repeating = this.format.repeating.substring(0, this.format.repeating.length - 1), "d" === n) break;
                        this.addSpacer(n)
                    }
                return (i = this.renderDigit()).querySelector(".odometer-value").innerHTML = e, this.digits.push(i), this.insertDigit(i)
            }, d.prototype.animate = function(e) {
                return c && "count" !== this.options.animation ? this.animateSlide(e) : this.animateCount(e)
            }, d.prototype.animateCount = function(n) {
                var i, o, a, r, s, l = this;
                if (o = +n - this.value) return r = a = h(), i = this.value, (s = function() {
                    var e, t;
                    return h() - r > l.options.duration ? (l.value = n, l.render(), void g(l.el, "odometerdone")) : (50 < (e = h() - a) && (a = h(), t = e / l.options.duration, i += o * t, l.render(Math.round(i))), null != v ? v(s) : setTimeout(s, 50))
                })()
            }, d.prototype.getDigitCount = function() {
                var e, t, n, i, o, a;
                for (e = o = 0, a = (i = 1 <= arguments.length ? w.call(arguments, 0) : []).length; o < a; e = ++o) n = i[e], i[e] = Math.abs(n);
                return t = Math.max.apply(Math, i), Math.ceil(Math.log(t + 1) / Math.log(10))
            }, d.prototype.getFractionalDigitCount = function() {
                var e, t, n, i, o, a, r;
                for (t = /^\-?\d*\.(\d*?)0*$/, e = a = 0, r = (o = 1 <= arguments.length ? w.call(arguments, 0) : []).length; a < r; e = ++a) i = o[e], o[e] = i.toString(), n = t.exec(o[e]), o[e] = null == n ? 0 : n[1].length;
                return Math.max.apply(Math, o)
            }, d.prototype.resetDigits = function() {
                return this.digits = [], this.ribbons = [], this.inside.innerHTML = "", this.resetFormat()
            }, d.prototype.animateSlide = function(e) {
                var t, n, i, o, a, r, s, l, c, u, d, p, f, m, h, v, g, y, b, w, k, x, C, S, _, T, E;
                if (v = this.value, (l = this.getFractionalDigitCount(v, e)) && (e *= Math.pow(10, l), v *= Math.pow(10, l)), i = e - v) {
                    for (this.bindTransitionEnd(), o = this.getDigitCount(v, e), a = [], d = b = t = 0; 0 <= o ? b < o : o < b; d = 0 <= o ? ++b : --b) {
                        if (g = O(v / Math.pow(10, o - d - 1)), r = (s = O(e / Math.pow(10, o - d - 1))) - g, Math.abs(r) > this.MAX_VALUES) {
                            for (u = [], p = r / (this.MAX_VALUES + this.MAX_VALUES * t * .5), n = g; 0 < r && n < s || r < 0 && s < n;) u.push(Math.round(n)), n += p;
                            u[u.length - 1] !== s && u.push(s), t++
                        } else u = function() {
                            E = [];
                            for (var e = g; g <= s ? e <= s : s <= e; g <= s ? e++ : e--) E.push(e);
                            return E
                        }.apply(this);
                        for (d = w = 0, x = u.length; w < x; d = ++w) c = u[d], u[d] = Math.abs(c % 10);
                        a.push(u)
                    }
                    for (this.resetDigits(), d = k = 0, C = (T = a.reverse()).length; k < C; d = ++k)
                        for (u = T[d], this.digits[d] || this.addDigit(" ", l <= d), null == (y = this.ribbons)[d] && (y[d] = this.digits[d].querySelector(".odometer-ribbon-inner")), this.ribbons[d].innerHTML = "", i < 0 && (u = u.reverse()), f = _ = 0, S = u.length; _ < S; f = ++_) c = u[f], (h = document.createElement("div")).className = "odometer-value", h.innerHTML = c, this.ribbons[d].appendChild(h), f === u.length - 1 && M(h, "odometer-last-value"), 0 === f && M(h, "odometer-first-value");
                    return g < 0 && this.addDigit("-"), null != (m = this.inside.querySelector(".odometer-radix-mark")) && m.parent.removeChild(m), l ? this.addSpacer(this.format.radix, this.digits[l - 1], "odometer-radix-mark") : void 0
                }
            }, d
        }()).options = null != (y = window.odometerOptions) ? y : {}, setTimeout(function() {
            var e, t, n, i, o;
            if (window.odometerOptions) {
                for (e in o = [], i = window.odometerOptions) t = i[e], o.push(null != (n = r.options)[e] ? (n = r.options)[e] : n[e] = t);
                return o
            }
        }, 0), r.init = function() {
            var e, t, n, i, o, a;
            if (null != document.querySelectorAll) {
                for (a = [], n = 0, i = (t = document.querySelectorAll(r.options.selector || ".odometer")).length; n < i; n++) e = t[n], a.push(e.odometer = new r({
                    el: e,
                    value: null != (o = e.innerText) ? o : e.textContent
                }));
                return a
            }
        }, null != (null != (b = document.documentElement) ? b.doScroll : void 0) && null != document.createEventObject ? (d = document.onreadystatechange, document.onreadystatechange = function() {
            return "complete" === document.readyState && !1 !== r.options.auto && r.init(), null != d ? d.apply(this, arguments) : void 0
        }) : document.addEventListener("DOMContentLoaded", function() {
            return !1 !== r.options.auto ? r.init() : void 0
        }, !1), "function" == typeof define && define.amd ? define([], function() {
            return r
        }) : "undefined" != typeof exports && null !== exports ? module.exports = r : window.Odometer = r
    }.call(this),
    function(d) {
        if (!d.hasInitialised) {
            var p = {
                escapeRegExp: function(e) {
                    return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                },
                hasClass: function(e, t) {
                    return 1 === e.nodeType && 0 <= (" " + e.className + " ").replace(/[\n\t]/g, " ").indexOf(" " + t + " ")
                },
                addClass: function(e, t) {
                    e.className += " " + t
                },
                removeClass: function(e, t) {
                    var n = new RegExp("\\b" + this.escapeRegExp(t) + "\\b");
                    e.className = e.className.replace(n, "")
                },
                interpolateString: function(e, t) {
                    return e.replace(/{{([a-z][a-z0-9\-_]*)}}/gi, function(e) {
                        return t(arguments[1]) || ""
                    })
                },
                getCookie: function(e) {
                    var t = ("; " + document.cookie).split("; " + e + "=");
                    return t.length < 2 ? void 0 : t.pop().split(";").shift()
                },
                setCookie: function(e, t, n, i, o, a) {
                    var r = new Date;
                    r.setDate(r.getDate() + (n || 365));
                    var s = [e + "=" + t, "expires=" + r.toUTCString(), "path=" + (o || "/")];
                    i && s.push("domain=" + i), a && s.push("secure"), document.cookie = s.join(";")
                },
                deepExtend: function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (n in e && this.isPlainObject(e[n]) && this.isPlainObject(t[n]) ? this.deepExtend(e[n], t[n]) : e[n] = t[n]);
                    return e
                },
                throttle: function(e, t) {
                    var n = !1;
                    return function() {
                        n || (e.apply(this, arguments), n = !0, setTimeout(function() {
                            n = !1
                        }, t))
                    }
                },
                hash: function(e) {
                    var t, n, i = 0;
                    if (0 === e.length) return i;
                    for (t = 0, n = e.length; t < n; ++t) i = (i << 5) - i + e.charCodeAt(t), i |= 0;
                    return i
                },
                normaliseHex: function(e) {
                    return "#" == e[0] && (e = e.substr(1)), 3 == e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), e
                },
                getContrast: function(e) {
                    return e = this.normaliseHex(e), 128 <= (299 * parseInt(e.substr(0, 2), 16) + 587 * parseInt(e.substr(2, 2), 16) + 114 * parseInt(e.substr(4, 2), 16)) / 1e3 ? "#000" : "#fff"
                },
                getLuminance: function(e) {
                    var t = parseInt(this.normaliseHex(e), 16),
                        n = 38 + (t >> 16),
                        i = 38 + (t >> 8 & 255),
                        o = 38 + (255 & t);
                    return "#" + (16777216 + 65536 * (n < 255 ? n < 1 ? 0 : n : 255) + 256 * (i < 255 ? i < 1 ? 0 : i : 255) + (o < 255 ? o < 1 ? 0 : o : 255)).toString(16).slice(1)
                },
                isMobile: function() {
                    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                },
                isPlainObject: function(e) {
                    return "object" == typeof e && null !== e && e.constructor == Object
                },
                traverseDOMPath: function(e, t) {
                    return e && e.parentNode ? p.hasClass(e, t) ? e : this.traverseDOMPath(e.parentNode, t) : null
                }
            };
            d.status = {
                deny: "deny",
                allow: "allow",
                dismiss: "dismiss"
            }, d.transitionEnd = function() {
                var e = document.createElement("div"),
                    t = {
                        t: "transitionend",
                        OT: "oTransitionEnd",
                        msT: "MSTransitionEnd",
                        MozT: "transitionend",
                        WebkitT: "webkitTransitionEnd"
                    };
                for (var n in t)
                    if (t.hasOwnProperty(n) && void 0 !== e.style[n + "ransition"]) return t[n];
                return ""
            }(), d.hasTransition = !!d.transitionEnd;
            var c = Object.keys(d.status).map(p.escapeRegExp);
            d.customStyles = {}, d.Popup = function() {
                function e() {
                    this.initialise.apply(this, arguments)
                }

                function n(e) {
                    this.openingTimeout = null, p.removeClass(e, "cc-invisible")
                }

                function i(e) {
                    e.style.display = "none", e.removeEventListener(d.transitionEnd, this.afterTransition), this.afterTransition = null
                }

                function o() {
                    var e = this.options.position.split("-"),
                        t = [];
                    return e.forEach(function(e) {
                        t.push("cc-" + e)
                    }), t
                }

                function a() {
                    var e = this.options,
                        t = "top" == e.position || "bottom" == e.position ? "banner" : "floating";
                    p.isMobile() && (t = "floating");
                    var n = ["cc-" + t, "cc-type-" + e.type, "cc-theme-" + e.theme];
                    return e.static && n.push("cc-static"), n.push.apply(n, o.call(this)),
                        function(e) {
                            var t = p.hash(JSON.stringify(e)),
                                n = "cc-color-override-" + t,
                                i = p.isPlainObject(e);
                            return this.customStyleSelector = i ? n : null, i && function(e, t, n) {
                                if (d.customStyles[e]) return ++d.customStyles[e].references;
                                var i = {},
                                    o = t.popup,
                                    a = t.button,
                                    r = t.highlight;
                                o && (o.text = o.text ? o.text : p.getContrast(o.background), o.link = o.link ? o.link : o.text, i[n + ".cc-window"] = ["color: " + o.text, "background-color: " + o.background], i[n + ".cc-revoke"] = ["color: " + o.text, "background-color: " + o.background], i[n + " .cc-link," + n + " .cc-link:active," + n + " .cc-link:visited"] = ["color: " + o.link], a && (a.text = a.text ? a.text : p.getContrast(a.background), a.border = a.border ? a.border : "transparent", i[n + " .cc-btn"] = ["color: " + a.text, "border-color: " + a.border, "background-color: " + a.background], a.padding && i[n + " .cc-btn"].push("padding: " + a.padding), "transparent" != a.background && (i[n + " .cc-btn:hover, " + n + " .cc-btn:focus"] = ["background-color: " + (a.hover || (s = a.background, "000000" == (s = p.normaliseHex(s)) ? "#222" : p.getLuminance(s)))]), r ? (r.text = r.text ? r.text : p.getContrast(r.background), r.border = r.border ? r.border : "transparent", i[n + " .cc-highlight .cc-btn:first-child"] = ["color: " + r.text, "border-color: " + r.border, "background-color: " + r.background]) : i[n + " .cc-highlight .cc-btn:first-child"] = ["color: " + o.text]));
                                var s;
                                var l = document.createElement("style");
                                document.head.appendChild(l), d.customStyles[e] = {
                                    references: 1,
                                    element: l.sheet
                                };
                                var c = -1;
                                for (var u in i) i.hasOwnProperty(u) && l.sheet.insertRule(u + "{" + i[u].join(";") + "}", ++c)
                            }(t, e, "." + n), i
                        }.call(this, this.options.palette), this.customStyleSelector && n.push(this.customStyleSelector), n
                }

                function r(e) {
                    var t = this.options,
                        n = document.createElement("div"),
                        i = t.container && 1 === t.container.nodeType ? t.container : document.body;
                    n.innerHTML = e;
                    var o = n.children[0];
                    return o.style.display = "none", p.hasClass(o, "cc-window") && d.hasTransition && p.addClass(o, "cc-invisible"), this.onButtonClick = function(e) {
                        var t = p.traverseDOMPath(e.target, "cc-btn") || e.target;
                        if (p.hasClass(t, "cc-btn")) {
                            var n = t.className.match(new RegExp("\\bcc-(" + c.join("|") + ")\\b")),
                                i = n && n[1] || !1;
                            i && (this.setStatus(i), this.close(!0))
                        }
                        p.hasClass(t, "cc-close") && (this.setStatus(d.status.dismiss), this.close(!0)), p.hasClass(t, "cc-revoke") && this.revokeChoice()
                    }.bind(this), o.addEventListener("click", this.onButtonClick), t.autoAttach && (i.firstChild ? i.insertBefore(o, i.firstChild) : i.appendChild(o)), o
                }

                function s(e, t) {
                    for (var n = 0, i = e.length; n < i; ++n) {
                        var o = e[n];
                        if (o instanceof RegExp && o.test(t) || "string" == typeof o && o.length && o === t) return !0
                    }
                    return !1
                }
                var l = {
                    enabled: !0,
                    container: null,
                    cookie: {
                        name: "cookieconsent_status",
                        path: "/",
                        domain: "",
                        expiryDays: 365,
                        secure: !1
                    },
                    onPopupOpen: function() {},
                    onPopupClose: function() {},
                    onInitialise: function(e) {},
                    onStatusChange: function(e, t) {},
                    onRevokeChoice: function() {},
                    onNoCookieLaw: function(e, t) {},
                    content: {
                        header: "Cookies used on the website!",
                        message: "This website uses cookies to ensure you get the best experience on our website.",
                        dismiss: "Got it!",
                        allow: "Allow cookies",
                        deny: "Decline",
                        link: "Learn more",
                        href: "https://cookiesandyou.com",
                        close: "&#x274c;",
                        target: "_blank",
                        policy: "Cookie Policy"
                    },
                    elements: {
                        header: '<span class="cc-header">{{header}}</span>&nbsp;',
                        message: '<span id="cookieconsent:desc" class="cc-message">{{message}}</span>',
                        messagelink: '<span id="cookieconsent:desc" class="cc-message">{{message}} <a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a></span>',
                        dismiss: '<a aria-label="dismiss cookie message" role=button tabindex="0" class="cc-btn cc-dismiss">{{dismiss}}</a>',
                        allow: '<a aria-label="allow cookies" role=button tabindex="0"  class="cc-btn cc-allow">{{allow}}</a>',
                        deny: '<a aria-label="deny cookies" role=button tabindex="0" class="cc-btn cc-deny">{{deny}}</a>',
                        link: '<a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a>',
                        close: '<span aria-label="dismiss cookie message" role=button tabindex="0" class="cc-close">{{close}}</span>'
                    },
                    window: '<div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window {{classes}}">\x3c!--googleoff: all--\x3e{{children}}\x3c!--googleon: all--\x3e</div>',
                    revokeBtn: '<div class="cc-revoke {{classes}}">{{policy}}</div>',
                    compliance: {
                        info: '<div class="cc-compliance">{{dismiss}}</div>',
                        "opt-in": '<div class="cc-compliance cc-highlight">{{deny}}{{allow}}</div>',
                        "opt-out": '<div class="cc-compliance cc-highlight">{{deny}}{{allow}}</div>'
                    },
                    type: "info",
                    layouts: {
                        basic: "{{messagelink}}{{compliance}}",
                        "basic-close": "{{messagelink}}{{compliance}}{{close}}",
                        "basic-header": "{{header}}{{message}}{{link}}{{compliance}}"
                    },
                    layout: "basic",
                    position: "bottom",
                    theme: "block",
                    static: !1,
                    palette: null,
                    revokable: !1,
                    animateRevokable: !0,
                    showLink: !0,
                    dismissOnScroll: !1,
                    dismissOnTimeout: !1,
                    dismissOnWindowClick: !1,
                    ignoreClicksFrom: ["cc-revoke", "cc-btn"],
                    autoOpen: !0,
                    autoAttach: !0,
                    whitelistPage: [],
                    blacklistPage: [],
                    overrideHTML: null
                };
                return e.prototype.initialise = function(e) {
                    this.options && this.destroy(), p.deepExtend(this.options = {}, l), p.isPlainObject(e) && p.deepExtend(this.options, e),
                        function() {
                            var e = this.options.onInitialise.bind(this);
                            if (!window.navigator.cookieEnabled) return e(d.status.deny), !0;
                            if (window.CookiesOK || window.navigator.CookiesOK) return e(d.status.allow), !0;
                            var t = Object.keys(d.status),
                                n = this.getStatus(),
                                i = 0 <= t.indexOf(n);
                            return i && e(n), i
                        }.call(this) && (this.options.enabled = !1), s(this.options.blacklistPage, location.pathname) && (this.options.enabled = !1), s(this.options.whitelistPage, location.pathname) && (this.options.enabled = !0);
                    var t = this.options.window.replace("{{classes}}", a.call(this).join(" ")).replace("{{children}}", function() {
                            var t = {},
                                n = this.options;
                            n.showLink || (n.elements.link = "", n.elements.messagelink = n.elements.message), Object.keys(n.elements).forEach(function(e) {
                                t[e] = p.interpolateString(n.elements[e], function(e) {
                                    var t = n.content[e];
                                    return e && "string" == typeof t && t.length ? t : ""
                                })
                            });
                            var e = n.compliance[n.type];
                            e || (e = n.compliance.info), t.compliance = p.interpolateString(e, function(e) {
                                return t[e]
                            });
                            var i = n.layouts[n.layout];
                            return i || (i = n.layouts.basic), p.interpolateString(i, function(e) {
                                return t[e]
                            })
                        }.call(this)),
                        n = this.options.overrideHTML;
                    if ("string" == typeof n && n.length && (t = n), this.options.static) {
                        var i = r.call(this, '<div class="cc-grower">' + t + "</div>");
                        i.style.display = "", this.element = i.firstChild, this.element.style.display = "none", p.addClass(this.element, "cc-invisible")
                    } else this.element = r.call(this, t);
                    (function() {
                        var r = this.setStatus.bind(this),
                            s = this.close.bind(this),
                            e = this.options.dismissOnTimeout;
                        "number" == typeof e && 0 <= e && (this.dismissTimeout = window.setTimeout(function() {
                            r(d.status.dismiss), s(!0)
                        }, Math.floor(e)));
                        var t = this.options.dismissOnScroll;
                        if ("number" == typeof t && 0 <= t) {
                            var n = function(e) {
                                window.pageYOffset > Math.floor(t) && (r(d.status.dismiss), s(!0), window.removeEventListener("scroll", n), this.onWindowScroll = null)
                            };
                            this.options.enabled && (this.onWindowScroll = n, window.addEventListener("scroll", n))
                        }
                        var i = this.options.dismissOnWindowClick,
                            l = this.options.ignoreClicksFrom;
                        if (i) {
                            var c = function(e) {
                                for (var t = !1, n = e.path.length, i = l.length, o = 0; o < n; o++)
                                    if (!t)
                                        for (var a = 0; a < i; a++) t || (t = p.hasClass(e.path[o], l[a]));
                                t || (r(d.status.dismiss), s(!0), window.removeEventListener("click", c), this.onWindowClick = null)
                            }.bind(this);
                            this.options.enabled && (this.onWindowClick = c, window.addEventListener("click", c))
                        }
                    }).call(this),
                        function() {
                            if ("info" != this.options.type && (this.options.revokable = !0), p.isMobile() && (this.options.animateRevokable = !1), this.options.revokable) {
                                var e = o.call(this);
                                this.options.animateRevokable && e.push("cc-animate"), this.customStyleSelector && e.push(this.customStyleSelector);
                                var t = this.options.revokeBtn.replace("{{classes}}", e.join(" ")).replace("{{policy}}", this.options.content.policy);
                                this.revokeBtn = r.call(this, t);
                                var i = this.revokeBtn;
                                if (this.options.animateRevokable) {
                                    var n = p.throttle(function(e) {
                                        var t = !1,
                                            n = window.innerHeight - 20;
                                        p.hasClass(i, "cc-top") && e.clientY < 20 && (t = !0), p.hasClass(i, "cc-bottom") && e.clientY > n && (t = !0), t ? p.hasClass(i, "cc-active") || p.addClass(i, "cc-active") : p.hasClass(i, "cc-active") && p.removeClass(i, "cc-active")
                                    }, 200);
                                    this.onMouseMove = n, window.addEventListener("mousemove", n)
                                }
                            }
                        }.call(this), this.options.autoOpen && this.autoOpen()
                }, e.prototype.destroy = function() {
                    this.onButtonClick && this.element && (this.element.removeEventListener("click", this.onButtonClick), this.onButtonClick = null), this.dismissTimeout && (clearTimeout(this.dismissTimeout), this.dismissTimeout = null), this.onWindowScroll && (window.removeEventListener("scroll", this.onWindowScroll), this.onWindowScroll = null), this.onWindowClick && (window.removeEventListener("click", this.onWindowClick), this.onWindowClick = null), this.onMouseMove && (window.removeEventListener("mousemove", this.onMouseMove), this.onMouseMove = null), this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element), this.element = null, this.revokeBtn && this.revokeBtn.parentNode && this.revokeBtn.parentNode.removeChild(this.revokeBtn), this.revokeBtn = null,
                        function(e) {
                            if (p.isPlainObject(e)) {
                                var t = p.hash(JSON.stringify(e)),
                                    n = d.customStyles[t];
                                if (n && !--n.references) {
                                    var i = n.element.ownerNode;
                                    i && i.parentNode && i.parentNode.removeChild(i), d.customStyles[t] = null
                                }
                            }
                        }(this.options.palette), this.options = null
                }, e.prototype.open = function(e) {
                    if (this.element) return this.isOpen() || (d.hasTransition ? this.fadeIn() : this.element.style.display = "", this.options.revokable && this.toggleRevokeButton(), this.options.onPopupOpen.call(this)), this
                }, e.prototype.close = function(e) {
                    if (this.element) return this.isOpen() && (d.hasTransition ? this.fadeOut() : this.element.style.display = "none", e && this.options.revokable && this.toggleRevokeButton(!0), this.options.onPopupClose.call(this)), this
                }, e.prototype.fadeIn = function() {
                    var e = this.element;
                    if (d.hasTransition && e && (this.afterTransition && i.call(this, e), p.hasClass(e, "cc-invisible"))) {
                        if (e.style.display = "", this.options.static) {
                            var t = this.element.clientHeight;
                            this.element.parentNode.style.maxHeight = t + "px"
                        }
                        this.openingTimeout = setTimeout(n.bind(this, e), 20)
                    }
                }, e.prototype.fadeOut = function() {
                    var e = this.element;
                    d.hasTransition && e && (this.openingTimeout && (clearTimeout(this.openingTimeout), n.bind(this, e)), p.hasClass(e, "cc-invisible") || (this.options.static && (this.element.parentNode.style.maxHeight = ""), this.afterTransition = i.bind(this, e), e.addEventListener(d.transitionEnd, this.afterTransition), p.addClass(e, "cc-invisible")))
                }, e.prototype.isOpen = function() {
                    return this.element && "" == this.element.style.display && (!d.hasTransition || !p.hasClass(this.element, "cc-invisible"))
                }, e.prototype.toggleRevokeButton = function(e) {
                    this.revokeBtn && (this.revokeBtn.style.display = e ? "" : "none")
                }, e.prototype.revokeChoice = function(e) {
                    this.options.enabled = !0, this.clearStatus(), this.options.onRevokeChoice.call(this), e || this.autoOpen()
                }, e.prototype.hasAnswered = function(e) {
                    return 0 <= Object.keys(d.status).indexOf(this.getStatus())
                }, e.prototype.hasConsented = function(e) {
                    var t = this.getStatus();
                    return t == d.status.allow || t == d.status.dismiss
                }, e.prototype.autoOpen = function(e) {
                    !this.hasAnswered() && this.options.enabled ? this.open() : this.hasAnswered() && this.options.revokable && this.toggleRevokeButton(!0)
                }, e.prototype.setStatus = function(e) {
                    var t = this.options.cookie,
                        n = p.getCookie(t.name),
                        i = 0 <= Object.keys(d.status).indexOf(n);
                    0 <= Object.keys(d.status).indexOf(e) ? (p.setCookie(t.name, e, t.expiryDays, t.domain, t.path, t.secure), this.options.onStatusChange.call(this, e, i)) : this.clearStatus()
                }, e.prototype.getStatus = function() {
                    return p.getCookie(this.options.cookie.name)
                }, e.prototype.clearStatus = function() {
                    var e = this.options.cookie;
                    p.setCookie(e.name, "", -1, e.domain, e.path)
                }, e
            }(), d.Location = function() {
                function e(e) {
                    p.deepExtend(this.options = {}, n), p.isPlainObject(e) && p.deepExtend(this.options, e), this.currentServiceIndex = -1
                }

                function t(e, t, n) {
                    var i, o = document.createElement("script");
                    o.type = "text/" + (e.type || "javascript"), o.src = e.src || e, o.async = !1, o.onreadystatechange = o.onload = function() {
                        var e = o.readyState;
                        clearTimeout(i), t.done || e && !/loaded|complete/.test(e) || (t.done = !0, t(), o.onreadystatechange = o.onload = null)
                    }, document.body.appendChild(o), i = setTimeout(function() {
                        t.done = !0, t(), o.onreadystatechange = o.onload = null
                    }, n)
                }

                function a(e, t, n, i, o) {
                    var a = new(window.XMLHttpRequest || window.ActiveXObject)("MSXML2.XMLHTTP.3.0");
                    if (a.open(i ? "POST" : "GET", e, 1), a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), Array.isArray(o))
                        for (var r = 0, s = o.length; r < s; ++r) {
                            var l = o[r].split(":", 2);
                            a.setRequestHeader(l[0].replace(/^\s+|\s+$/g, ""), l[1].replace(/^\s+|\s+$/g, ""))
                        }
                    "function" == typeof t && (a.onreadystatechange = function() {
                        3 < a.readyState && t(a)
                    }), a.send(i)
                }

                function i(e) {
                    return new Error("Error [" + (e.code || "UNKNOWN") + "]: " + e.error)
                }
                var n = {
                    timeout: 5e3,
                    services: ["ipinfo"],
                    serviceDefinitions: {
                        ipinfo: function() {
                            return {
                                url: "//ipinfo.io",
                                headers: ["Accept: application/json"],
                                callback: function(e, t) {
                                    try {
                                        var n = JSON.parse(t);
                                        return n.error ? i(n) : {
                                            code: n.country
                                        }
                                    } catch (e) {
                                        return i({
                                            error: "Invalid response (" + e + ")"
                                        })
                                    }
                                }
                            }
                        },
                        ipinfodb: function(e) {
                            return {
                                url: "//api.ipinfodb.com/v3/ip-country/?key={api_key}&format=json&callback={callback}",
                                isScript: !0,
                                callback: function(e, t) {
                                    try {
                                        var n = JSON.parse(t);
                                        return "ERROR" == n.statusCode ? i({
                                            error: n.statusMessage
                                        }) : {
                                            code: n.countryCode
                                        }
                                    } catch (e) {
                                        return i({
                                            error: "Invalid response (" + e + ")"
                                        })
                                    }
                                }
                            }
                        },
                        maxmind: function() {
                            return {
                                url: "//js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js",
                                isScript: !0,
                                callback: function(t) {
                                    return window.geoip2 ? void geoip2.country(function(e) {
                                        try {
                                            t({
                                                code: e.country.iso_code
                                            })
                                        } catch (e) {
                                            t(i(e))
                                        }
                                    }, function(e) {
                                        t(i(e))
                                    }) : void t(new Error("Unexpected response format. The downloaded script should have exported `geoip2` to the global scope"))
                                }
                            }
                        }
                    }
                };
                return e.prototype.getNextService = function() {
                    for (var e; e = this.getServiceByIdx(++this.currentServiceIndex), this.currentServiceIndex < this.options.services.length && !e;);
                    return e
                }, e.prototype.getServiceByIdx = function(e) {
                    var t = this.options.services[e];
                    if ("function" == typeof t) {
                        var n = t();
                        return n.name && p.deepExtend(n, this.options.serviceDefinitions[n.name](n)), n
                    }
                    return "string" == typeof t ? this.options.serviceDefinitions[t]() : p.isPlainObject(t) ? this.options.serviceDefinitions[t.name](t) : null
                }, e.prototype.locate = function(e, t) {
                    var n = this.getNextService();
                    return n ? (this.callbackComplete = e, this.callbackError = t, void this.runService(n, this.runNextServiceOnError.bind(this))) : void t(new Error("No services to run"))
                }, e.prototype.setupUrl = function(i) {
                    var o = this.getCurrentServiceOpts();
                    return i.url.replace(/\{(.*?)\}/g, function(e, t) {
                        if ("callback" === t) {
                            var n = "callback" + Date.now();
                            return window[n] = function(e) {
                                i.__JSONP_DATA = JSON.stringify(e)
                            }, n
                        }
                        if (t in o.interpolateUrl) return o.interpolateUrl[t]
                    })
                }, e.prototype.runService = function(n, i) {
                    var o = this;
                    n && n.url && n.callback && (n.isScript ? t : a)(this.setupUrl(n), function(e) {
                        var t = e ? e.responseText : "";
                        n.__JSONP_DATA && (t = n.__JSONP_DATA, delete n.__JSONP_DATA), o.runServiceCallback.call(o, i, n, t)
                    }, this.options.timeout, n.data, n.headers)
                }, e.prototype.runServiceCallback = function(t, e, n) {
                    var i = this,
                        o = e.callback(function(e) {
                            o || i.onServiceResult.call(i, t, e)
                        }, n);
                    o && this.onServiceResult.call(this, t, o)
                }, e.prototype.onServiceResult = function(e, t) {
                    t instanceof Error || t && t.error ? e.call(this, t, null) : e.call(this, null, t)
                }, e.prototype.runNextServiceOnError = function(e, t) {
                    if (e) {
                        this.logError(e);
                        var n = this.getNextService();
                        n ? this.runService(n, this.runNextServiceOnError.bind(this)) : this.completeService.call(this, this.callbackError, new Error("All services failed"))
                    } else this.completeService.call(this, this.callbackComplete, t)
                }, e.prototype.getCurrentServiceOpts = function() {
                    var e = this.options.services[this.currentServiceIndex];
                    return "string" == typeof e ? {
                        name: e
                    } : "function" == typeof e ? e() : p.isPlainObject(e) ? e : {}
                }, e.prototype.completeService = function(e, t) {
                    this.currentServiceIndex = -1, e && e(t)
                }, e.prototype.logError = function(e) {
                    var t = this.currentServiceIndex,
                        n = this.getServiceByIdx(t);
                    console.warn("The service[" + t + "] (" + n.url + ") responded with the following error", e)
                }, e
            }(), d.Law = function() {
                function e(e) {
                    this.initialise.apply(this, arguments)
                }
                var t = {
                    regionalLaw: !0,
                    hasLaw: ["AT", "BE", "BG", "HR", "CZ", "CY", "DK", "EE", "FI", "FR", "DE", "EL", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "SK", "ES", "SE", "GB", "UK", "GR", "EU"],
                    revokable: ["HR", "CY", "DK", "EE", "FR", "DE", "LV", "LT", "NL", "PT", "ES"],
                    explicitAction: ["HR", "IT", "ES"]
                };
                return e.prototype.initialise = function(e) {
                    p.deepExtend(this.options = {}, t), p.isPlainObject(e) && p.deepExtend(this.options, e)
                }, e.prototype.get = function(e) {
                    var t = this.options;
                    return {
                        hasLaw: 0 <= t.hasLaw.indexOf(e),
                        revokable: 0 <= t.revokable.indexOf(e),
                        explicitAction: 0 <= t.explicitAction.indexOf(e)
                    }
                }, e.prototype.applyLaw = function(e, t) {
                    var n = this.get(t);
                    return n.hasLaw || (e.enabled = !1, "function" == typeof e.onNoCookieLaw && e.onNoCookieLaw(t, n)), this.options.regionalLaw && (n.revokable && (e.revokable = !0), n.explicitAction && (e.dismissOnScroll = !1, e.dismissOnTimeout = !1)), e
                }, e
            }(), d.initialise = function(t, n, i) {
                var o = new d.Law(t.law);
                n || (n = function() {}), i || (i = function() {});
                var e = Object.keys(d.status),
                    a = p.getCookie("cookieconsent_status");
                return 0 <= e.indexOf(a) ? void n(new d.Popup(t)) : void d.getCountryCode(t, function(e) {
                    delete t.law, delete t.location, e.code && (t = o.applyLaw(t, e.code)), n(new d.Popup(t))
                }, function(e) {
                    delete t.law, delete t.location, i(e, new d.Popup(t))
                })
            }, d.getCountryCode = function(e, t, n) {
                e.law && e.law.countryCode ? t({
                    code: e.law.countryCode
                }) : e.location ? new d.Location(e.location).locate(function(e) {
                    t(e || {})
                }, n) : t({})
            }, d.utils = p, d.hasInitialised = !0, window.cookieconsent = d
        }
    }(window.cookieconsent || {}),
    function(C) {
        C(function() {
            C(".swiper-container").each(function() {
                var e = C(this),
                    t = {
                        breakpoints: e.data("sw-breakpoints"),
                        active_selector: e.data("sw-active-selector"),
                        cover_flow: e.data("sw-coverflow"),
                        auto_play: e.data("sw-autoplay"),
                        loop: e.data("sw-loop"),
                        centered: e.data("sw-centered-slides"),
                        pagination: e.data("sw-pagination"),
                        nav_arrows: e.data("sw-nav-arrows")
                    },
                    n = t.breakpoints || !1,
                    i = void 0 !== t.auto_play && t.auto_play,
                    o = e.data("sw-speed") || 1100,
                    a = e.data("sw-effect") || "slide",
                    r = e.data("sw-show-items") || 1,
                    s = void 0 === t.loop || t.loop,
                    l = void 0 === t.centered || t.centered,
                    c = e.data("sw-space-between") || (1 < r ? 20 : 0),
                    u = e.data("sw-scroll-items") || 1,
                    d = e.data("sw-navigation"),
                    p = e.data("sw-navigation-active") || "active",
                    f = void 0 !== t.active_selector && t.active_selector,
                    m = void 0 !== t.pagination ? t.pagination : ".swiper-pagination",
                    h = void 0 !== t.nav_arrows ? t.nav_arrows : ".swiper-button",
                    v = t.cover_flow ? {
                        coverflowEffect: C.extend({
                            stretch: 0,
                            depth: 0,
                            modifier: 1,
                            rotate: 0,
                            slideShadows: !1
                        }, t.cover_flow)
                    } : {},
                    g = i ? {
                        autoplay: {
                            delay: i,
                            disableOnIteration: !1
                        },
                        speed: o
                    } : {},
                    y = {};
                m && (y.pagination = {
                    el: m,
                    clickable: !0,
                    dynamicBullets: !0
                }), h && (y.navigation = {
                    nextEl: h + "-next",
                    prevEl: h + "-prev"
                });
                var b = {};
                d && (b = {
                    transitionEnd: function() {
                        if (d) {
                            var e = C(d);
                            f ? (C(f + "." + p, e).removeClass(p), C(".nav-item:eq(" + k.realIndex + ") " + f, e).addClass(p)) : (C("." + p, e).removeClass(p), C(".nav-item:eq(" + k.realIndex + ")", e).addClass(p))
                        }
                    }
                });
                var w = C.extend({
                        loop: s,
                        slidesPerGroup: u,
                        spaceBetween: c,
                        centeredSlides: l,
                        breakpoints: n,
                        slidesPerView: r,
                        parallax: !0,
                        effect: a
                    }, y, g, v),
                    k = new Swiper(this, w);
                for (var x in b) k.on(x, b[x]);
                d && C(d).on("click", ".nav-item", function(e) {
                    e.preventDefault();
                    var t = C(this),
                        n = t;
                    if (f && (n = C(f, t)), n.hasClass(p)) return !1;
                    var i = t.data("step") || t.index() + 1;
                    return k.slideTo(i), f ? (t.siblings().each(function() {
                        C(f, this).removeClass(p)
                    }), n.addClass(p)) : (t.siblings("." + p).removeClass(p), t.addClass(p)), !1
                })
            }), C(".scroll-bar").each(function(e, t) {
                new SimpleBar(t)
            })
        })
    }(jQuery),
    function(c) {
        "use strict";
        var n = {
            delay: 100,
            step: 0,
            duration: 3e3,
            orientation: "horizontal"
        };

        function i(e, t) {
            this.config = t, this.element = e, this.isHorizontal = "horizontal" === this.config.orientation, this.init()
        }

        function t(e, t) {
            this.config = c.extend({}, n, t), this.tag = e, this.elements = t.elements, this.renderBars(), this.createAnimation()
        }
        i.prototype.init = function() {
            var t = this;
            c(this.element).waypoint(function(e) {
                i.prototype.animate.apply(t, null), this.destroy()
            }, {
                offset: "100%"
            })
        }, i.prototype.animate = function() {
            var e = c(this.element),
                t = e.data("percent"),
                n = this.config,
                i = this.isHorizontal;
            setTimeout(function() {
                i ? c(".progress-bar", e).animate({
                    width: t + "%"
                }, n.duration) : c(".progress-bar", e).animate({
                    height: t + "%"
                }, n.duration)
            }, n.delay + n.step)
        }, t.prototype.renderBars = function() {
            var s = this.config.orientation,
                l = [];
            this.elements.forEach(function(e) {
                var t = e.value,
                    n = e.style || {},
                    i = c("<div/>", {
                        class: "progress-bar"
                    }),
                    o = c("<div/>", {
                        class: "progress " + (n.progress || "progress-default"),
                        html: i
                    }).data("percent", t);
                "horizontal" === s ? (o.css({
                    width: "100%"
                }), i.css({
                    width: 0
                })) : (o.css({
                    height: "100%"
                }), i.css({
                    height: 0
                }));
                var a = c("<p>", {
                        html: [e.label, c("<span>", {
                            html: t + "%"
                        })]
                    }),
                    r = c("<li/>", {
                        html: [a, o]
                    });
                l.push(r)
            }), c(this.tag).append(l).addClass("progress-" + s)
        }, t.prototype.createAnimation = function() {
            var t = this.config;
            c("li .progress", this.tag).each(function(e) {
                c(this).data("animation", new i(this, {
                    delay: t.delay,
                    step: (1 + e) * t.step,
                    duration: t.duration,
                    orientation: t.orientation
                }))
            })
        }, c.fn.animateBar = function(e) {
            return this.each(function() {
                new t(this, e)
            })
        }
    }(jQuery), window.cookieconsent_example_util = {
        fillSelect: function(e, t, n, i) {
            if (e) {
                var o = "";
                for (var a in "function" != typeof i && (i = this.getSimpleOption), t) o += i(t[a], a, a == n);
                e.innerHTML = o
            }
        },
        getSimpleOption: function(e, t, n) {
            return "<option " + (n ? 'selected="selected"' : "") + ' value="' + t + '">' + e + "</option>"
        },
        tabularObject: function(e, t, n) {
            var i = "<ul>",
                o = function() {
                    return arguments[0]
                };
            for (var a in "function" != typeof n && (n = o), "function" != typeof t && (t = o), e) i += "<li><em>" + n(a, e[a]) + "</em> " + t(e[a], a) + "</li>";
            return i + "</ul>"
        },
        initialisePopupSelector: function(i) {
            if (i.selector) {
                var e = Object.keys(i.popups),
                    t = "<li><span>",
                    n = "</span></li>",
                    o = [];
                i.selector.innerHTML = t + Object.keys(i.popups).join(n + t) + n, i.selector.onclick = function(e) {
                    var t = e.target;
                    if (!t.isEqualNode(i.selector)) {
                        for (;
                            "LI" !== t.tagName && t.parentNode;) t = t.parentNode;
                        if (t.parentNode.isEqualNode(i.selector)) {
                            var n = Array.prototype.indexOf.call(i.selector.children, t);
                            0 <= n && o[n] && (o[n].clearStatus(), o.forEach(function(e) {
                                e.isOpen() && e.close(), e.toggleRevokeButton(!1)
                            }), o[n].open())
                        }
                    }
                };
                for (var a = 0, r = e.length; a < r; ++a) {
                    i.popups[e[a]].onPopupOpen = function(t) {
                        return function() {
                            var e = document.getElementById("options");
                            e && (e.innerHTML = JSON.stringify(t, null, 2))
                        }
                    }(i.popups[e[a]]);
                    var s = i.popups[e[a]];
                    s.autoOpen = !1, i.cookieconsent.initialise(s, function(e, t) {
                        o[e] = t
                    }.bind(null, a), function(e, t, n) {
                        o[e] = n, console.error(t)
                    }.bind(null, a))
                }
                return o
            }
        }
    },
    function(e, t) {
        var n = {
            honeybee: {
                popup: {
                    background: "#000"
                },
                button: {
                    background: "#f1d600",
                    padding: "5px 25px"
                }
            },
            blurple: {
                popup: {
                    background: "#3937a3"
                },
                button: {
                    background: "#e62576"
                }
            },
            mono: {
                popup: {
                    background: "#237afc"
                },
                button: {
                    background: "transparent",
                    border: "#fff",
                    text: "#fff",
                    padding: "5px 40px"
                }
            },
            nuclear: {
                popup: {
                    background: "#aa0000",
                    text: "#ffdddd"
                },
                button: {
                    background: "#ff0000"
                }
            },
            cosmo: {
                popup: {
                    background: "#383b75"
                },
                button: {
                    background: "#f1d600",
                    padding: "5px 50px"
                }
            },
            neon: {
                popup: {
                    background: "#1d8a8a"
                },
                button: {
                    background: "#62ffaa"
                }
            },
            corporate: {
                popup: {
                    background: "#edeff5",
                    text: "#838391"
                },
                button: {
                    background: "#4b81e8"
                }
            }
        };
        window.cookieconsent_example_util.initialisePopupSelector({
            cookieconsent: e,
            selector: document.querySelector(".example-selector-themes"),
            popups: {
                Mono: {
                    type: "info",
                    position: "bottom",
                    palette: n.mono
                },
                Honeybee: {
                    type: "info",
                    position: "top",
                    palette: n.honeybee
                },
                Blurple: {
                    type: "opt-out",
                    position: "bottom-left",
                    palette: n.blurple,
                    content: {
                        message: "You can override the text that appears in an alert too.",
                        dismiss: "Awesome"
                    }
                },
                Nuclear: {
                    type: "info",
                    position: "bottom-right",
                    theme: "edgeless",
                    palette: n.nuclear,
                    content: {
                        dismiss: "I accept certain doom"
                    }
                },
                Cosmo: {
                    type: "opt-out",
                    position: "bottom",
                    palette: n.cosmo
                },
                Neon: {
                    type: "info",
                    theme: "classic",
                    position: "bottom-left",
                    palette: n.neon
                }
            }
        })
    }(window.cookieconsent),
    function(e, t) {
        window.cookieconsent_example_util.initialisePopupSelector({
            cookieconsent: e,
            selector: document.querySelector(".example-selector-custom-css"),
            popups: {
                "Click me": {
                    theme: "custom"
                }
            }
        })
    }(window.cookieconsent),
    function(e, t) {
        window.cookieconsent_example_util.initialisePopupSelector({
            cookieconsent: e,
            selector: document.querySelector(".example-selector-informational"),
            popups: {
                "Try it": {
                    type: "info",
                    palette: {
                        popup: {
                            background: "#383b75"
                        },
                        button: {
                            background: "#f1d600"
                        }
                    }
                }
            }
        })
    }(window.cookieconsent),
    function(e, t) {
        window.cookieconsent_example_util.initialisePopupSelector({
            cookieconsent: e,
            selector: document.querySelector(".example-selector-opt-out"),
            popups: {
                "Try it": {
                    type: "opt-out",
                    palette: {
                        popup: {
                            background: "#383b75"
                        },
                        button: {
                            background: "#f1d600"
                        }
                    }
                }
            }
        })
    }(window.cookieconsent),
    function(e, t) {
        window.cookieconsent_example_util.initialisePopupSelector({
            cookieconsent: e,
            selector: document.querySelector(".example-selector-opt-in"),
            popups: {
                "Try it": {
                    type: "opt-in",
                    palette: {
                        popup: {
                            background: "#383b75"
                        },
                        button: {
                            background: "#f1d600"
                        }
                    }
                }
            }
        })
    }(window.cookieconsent);
var COUNTRY_CODES = {
    US: "United States",
    UK: "United Kingdom",
    ES: "Spain",
    DE: "Germany",
    BE: "Belgium",
    "": "-----------------------------",
    AF: "Afghanistan",
    AL: "Albania",
    DZ: "Algeria",
    AD: "Andorra",
    AO: "Angola",
    AG: "Antigua And Barbuda",
    AR: "Argentina",
    AM: "Armenia",
    AW: "Aruba",
    AU: "Australia",
    AT: "Austria",
    AZ: "Azerbaijan",
    BS: "Bahamas",
    BH: "Bahrain",
    BD: "Bangladesh",
    BB: "Barbados",
    BY: "Belarus",
    BZ: "Belize",
    BJ: "Benin",
    BT: "Bhutan",
    BO: "Bolivia",
    BA: "Bosnia And Herzegovina",
    BW: "Botswana",
    BR: "Brazil",
    BN: "Brunei",
    BG: "Bulgaria",
    BF: "Burkina Faso",
    BI: "Burundi",
    KH: "Cambodia",
    CM: "Cameroon",
    CA: "Canada",
    CV: "Cape Verde",
    CF: "Central African Republic",
    TD: "Chad",
    CL: "Chile",
    CN: "China",
    CX: "Christmas Island",
    CO: "Colombia",
    KM: "Comoros",
    CG: "Congo",
    CD: "Congo, Democratic Republic",
    CR: "Costa Rica",
    CI: "Cote D'Ivoire",
    HR: "Croatia",
    CU: "Cuba",
    CY: "Cyprus",
    CZ: "Czech Republic",
    DK: "Denmark",
    DJ: "Djibouti",
    DM: "Dominica",
    DO: "Dominican Republic",
    EC: "Ecuador",
    EG: "Egypt",
    SV: "El Salvador",
    EE: "Estonia",
    GQ: "Equatorial Guinea",
    ER: "Eritrea",
    ET: "Ethiopia",
    FJ: "Fiji",
    FI: "Finland",
    FR: "France",
    GA: "Gabon",
    GM: "Gambia",
    GE: "Georgia",
    GH: "Ghana",
    GR: "Greece",
    GL: "Greenland",
    GD: "Grenada",
    GT: "Guatemala",
    GN: "Guinea",
    GW: "Guinea-Bissau",
    GY: "Guyana",
    HT: "Haiti",
    VA: "Holy See (Vatican City State)",
    HN: "Honduras",
    HU: "Hungary",
    IS: "Iceland",
    IN: "India",
    ID: "Indonesia",
    IR: "Iran",
    IQ: "Iraq",
    IE: "Ireland",
    IL: "Israel",
    IT: "Italy",
    JM: "Jamaica",
    JP: "Japan",
    JO: "Jordan",
    KZ: "Kazakhstan",
    KE: "Kenya",
    KI: "Kiribati",
    KP: "Korea, North",
    KR: "Korea, South",
    KS: "Kosovo",
    KW: "Kuwait",
    KG: "Kyrgyzstan",
    LA: "Laos",
    LV: "Latvia",
    LB: "Lebanon",
    LS: "Lesotho",
    LR: "Liberia",
    LI: "Liechtenstein",
    LT: "Lithuania",
    LU: "Luxembourg",
    MK: "Macedonia",
    MG: "Madagascar",
    MW: "Malawi",
    MY: "Malaysia",
    MV: "Maldives",
    ML: "Mali",
    MT: "Malta",
    MH: "Marshall Islands",
    MR: "Mauritania",
    MU: "Mauritius",
    MX: "Mexico",
    FM: "Micronesia",
    MD: "Moldova",
    MC: "Monaco",
    MN: "Mongolia",
    ME: "Montenegro",
    MA: "Morocco",
    MZ: "Mozambique",
    MM: "Myanmar",
    NA: "Namibia",
    NR: "Nauru",
    NP: "Nepal",
    NL: "Netherlands",
    NI: "Nicaragua",
    NE: "Niger",
    NG: "Nigeria",
    NO: "Norway",
    OM: "Oman",
    PK: "Pakistan",
    PW: "Palau",
    PA: "Panama",
    PG: "Papua New Guinea",
    PY: "Paraguay",
    PE: "Peru",
    PH: "Philippines",
    PL: "Poland",
    PT: "Portugal",
    QA: "Qatar",
    RO: "Romania",
    RU: "Russia",
    RW: "Rwanda",
    KN: "Saint Kitts And Nevis",
    LC: "Saint Lucia",
    VC: "Saint Vincent And Grenadines",
    WS: "Samoa",
    SM: "San Marino",
    ST: "Sao Tome And Principe",
    SA: "Saudi Arabia",
    SN: "Senegal",
    RS: "Serbia",
    SC: "Seychelles",
    SL: "Sierra Leone",
    SG: "Singapore",
    SK: "Slovakia",
    SI: "Slovenia",
    SB: "Solomon Islands",
    SO: "Somalia",
    ZA: "South Africa",
    SS: "South Sudan",
    LK: "Sri Lanka",
    SD: "Sudan",
    SR: "Suriname",
    SZ: "Swaziland",
    SE: "Sweden",
    CH: "Switzerland",
    SY: "Syria",
    TW: "Taiwan",
    TJ: "Tajikistan",
    TZ: "Tanzania",
    TH: "Thailand",
    TL: "Timor-Leste",
    TG: "Togo",
    TK: "Tokelau",
    TO: "Tonga",
    TT: "Trinidad And Tobago",
    TN: "Tunisia",
    TR: "Turkey",
    TM: "Turkmenistan",
    TV: "Tuvalu",
    UG: "Uganda",
    UA: "Ukraine",
    AE: "United Arab Emirates",
    UY: "Uruguay",
    UZ: "Uzbekistan",
    VU: "Vanuatu",
    VE: "Venezuela",
    VN: "Vietnam",
    YE: "Yemen",
    ZM: "Zambia",
    ZW: "Zimbabwe"
};
! function(e, n) {
    var i, t = document.getElementById("cookie-law-location");

    function o(e) {
        var t = {
            type: "info",
            regionalLaw: !0,
            palette: {
                popup: {
                    background: "#343c66",
                    text: "#cfcfe8"
                },
                button: {
                    background: "#f71559"
                }
            },
            law: {
                countryCode: e
            }
        };
        i && (i.clearStatus(), i.destroy(), i = null), cookieconsent.initialise(t, function(e) {
            (i = e).autoOpen()
        }, function(e) {
            console.error(e)
        }), document.getElementById("message").innerHTML = function(e) {
            var t = new cookieconsent.Law({}).get(e);
            if (!t.hasLaw) return "Has cookie law? no";
            return n.tabularObject({
                "Has cookie law?": "yes",
                "Choice has to be revokable?": t.revokable ? "yes" : "no",
                "Can be automatically dismissed?": t.explicitAction ? "no" : "yes"
            })
        }(e)
    }
    t && (n.fillSelect(t, COUNTRY_CODES, COUNTRY_CODES.AC), t.onchange = function() {
        var e = 0 <= t.selectedIndex ? t[t.selectedIndex].value : void 0;
        e && o(e)
    }, o(t[0].value))
}(window.cookieconsent, window.cookieconsent_example_util), $(function() {
        var i = $("#accordion-theme-current"),
            o = $("#accordion-colored");
        o.addClass("accordion-" + o.data("current")), i.addClass("btn-outline-" + o.data("current")), $("#demo-accordion-theme-selector").on("click", ".dropdown-item", function(e) {
            e.preventDefault();
            var t = $(this).data("color"),
                n = o.data("current");
            o.removeClass("accordion-" + n).addClass("accordion-" + t), o.data("current", t), i.html(t), i.removeClass("btn-outline-" + n).addClass("btn-outline-" + t)
        }), $(".navigation", ".demo-blocks").each(function(e, t) {
            var n = $(t);
            $(".navbar-toggler", t).on("click", function() {
                n.toggleClass("navbar-expanded")
            })
        }), $(".horizontal-demo-bars").animateBar({
            orientation: "horizontal",
            step: 100,
            duration: 1e3,
            elements: [{
                label: "Implementation",
                value: 89
            }, {
                label: "Design",
                value: 97
            }, {
                label: "Branding",
                value: 81
            }, {
                label: "Beauty",
                value: 99
            }, {
                label: "Responsiveness",
                value: 99
            }]
        }), $(".vertical-demo-bars").animateBar({
            orientation: "vertical",
            step: 100,
            duration: 1e3,
            elements: [{
                value: 89
            }, {
                value: 97
            }, {
                value: 81
            }, {
                value: 99
            }, {
                value: 99
            }]
        })
    }), $(function(d) {
        d("form").each(function() {
            var e = d(this),
                t = {
                    errorPlacement: function(e, t) {
                        var n = t.parent();
                        n.hasClass("input-group") ? e.insertAfter(n) : n.hasClass("has-icon") ? e.insertBefore(n) : n.hasClass("control") ? e.insertAfter(t.next(".control-label")) : e.insertAfter(t)
                    }
                };
            "submit" == e.data("validate-on") && d.extend(t, {
                onfocusout: !1,
                onkeyup: !1
            }), e.validate(t)
        }), d("form").submit(function(e) {
            e.preventDefault();
            var n = d(this);
            if (!n.valid()) return !1;
            var t = d("button[type=submit]", this);
            t.addClass("loading");
            var i, o, a, r, s, l = t.parent(".ajax-button"),
                c = l.length,
                u = n.next(".response-message");
            return o = (i = n).attr("action"), a = i.serializeArray(), s = d.extend(!0, {}, r, {
                url: o,
                type: "POST",
                data: a,
                dataType: "json"
            }), d.ajax(s).done(function(e) {
                e.result ? (n.trigger("form.submitted", [e]), d("input, textarea", n).removeClass("error"), d(".response", u).html(e.message), c && d(".success", l).addClass("done"), n.addClass("submitted"), n[0].reset()) : (c && d(".failed", l).addClass("done"), e.errors && d.each(e.errors, function(e, t) {
                    d("[name$='[" + e + "]']", n).addClass("error").tooltip({
                        title: t,
                        placement: "bottom",
                        trigger: "manual"
                    }).tooltip("show").on("focus", function() {
                        d(this).tooltip("dispose")
                    })
                }))
            }).fail(function() {
                d(".response", u).html(d("<span class='block'>Something went wrong.</span>")), c && d(".failed", l).addClass("done")
            }).always(function() {
                t.addClass("loading-end"), c && setTimeout(function() {
                    console.log("clearing status"), t.removeClass("loading").removeClass("loading-end"), d(".success,.failed", l).removeClass("done")
                }, 500)
            }), !1
        })
    }),
    function() {
        "use strict";
        for (var e, t = function() {}, n = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeline", "timelineEnd", "timeStamp", "trace", "warn"], i = n.length, o = window.console = window.console || {}; i--;) o[e = n[i]] || (o[e] = t)
    }(), $(function() {
        "use strict";
        var e = $(".main-nav"),
            t = $(".perspective-mockups"),
            n = $(".learn-more", ".lightweight-template"),
            i = function() {
                t.length && ($(window).outerWidth() < 768 ? t.css({
                    top: n.offset().top + "px"
                }) : t.removeAttr("style"))
            },
            o = function() {
                90 <= $(window).scrollTop() ? e.addClass("navbar-sticky") : e.removeClass("navbar-sticky")
            };
        if ($(window).on("scroll", o), o(), $("a.scrollto").on("click", function(e) {
                e.preventDefault();
                var t = this.hash;
                $("html, body").stop().animate({
                    scrollTop: $(t).offset().top - 45
                }, 1200, "easeInOutExpo", function() {
                    window.location.hash = t
                })
            }), $(".navbar-toggler", e).on("click", function() {
                e.is(".st-nav") || e.toggleClass("navbar-expanded")
            }), $(".card-blog").on({
                click: function(e) {
                    e.preventDefault();
                    var t = $(this).removeClass("far").addClass("fas");
                    t.hasClass("favorite") ? t.addClass("text-danger") : t.addClass("text-warning")
                },
                mouseenter: function() {
                    $(this).addClass("fas")
                },
                mouseleave: function() {
                    $(this).removeClass("fas")
                }
            }, "i.far"), t.removeClass("hidden-preload"), $(window).on("resize", i), i(), $(".login-form form").on("form.submitted", function(e, t) {
                window.location.replace("admin/")
            }), window.prettyPrint && prettyPrint(), AOS.init({
                offset: 100,
                duration: 1500,
                disable: "mobile"
            }), $(".typed").length) new Typed(".typed", {
            strings: ["Invoicing", "Subscriptions", "Mailing", "Reporting"],
            typeSpeed: 150,
            backDelay: 500,
            backSpeed: 50,
            loop: !0
        });
        $(".counter").length && $(".counter").counterUp(), $(".modal-popup").each(function() {
                var t = $(this),
                    n = {
                        image: {
                            closeOnContentClick: !0
                        },
                        gallery: {
                            delegate: "a",
                            type: "image",
                            tLoading: "Loading image #%curr%...",
                            mainClass: "mfp-with-zoom mfp-img-mobile",
                            gallery: {
                                enabled: !0,
                                navigateByImgClick: !0,
                                preload: [0, 1]
                            },
                            image: {
                                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
                            }
                        }
                    },
                    i = t.data("type") || "inline",
                    e = t.data("zoom") || !1,
                    o = t.data("focus") || !1,
                    a = {};
                e && (a.zoom = {
                    enabled: !0,
                    duration: e
                }), o && (a.focus = o), $.each(["image", "gallery"], function() {
                    var e = t.data(this) || !1;
                    e && (n[i][this] = e), t.removeAttr("data-" + this)
                });
                var r = $.extend({}, {
                    removalDelay: 500,
                    preloader: !1,
                    midClick: !0,
                    callbacks: {
                        beforeOpen: function() {
                            this.st.mainClass = this.st.el.attr("data-effect")
                        }
                    }
                }, {
                    type: i
                }, n[i], a);
                t.magnificPopup(r)
            }), $(document).on("click", ".modal-popup-dismiss", function(e) {
                e.preventDefault(), $.magnificPopup.close()
            }), $(".whyus-progress-bars").animateBar({
                orientation: "horizontal",
                step: 100,
                duration: 1e3,
                elements: [{
                    label: "Implementation",
                    value: 73,
                    style: {
                        progress: "progress-xs"
                    }
                }, {
                    label: "Design",
                    value: 91,
                    style: {
                        progress: "progress-xs"
                    }
                }, {
                    label: "Beauty",
                    value: 97,
                    style: {
                        progress: "progress-xs"
                    }
                }, {
                    label: "Branding",
                    value: 61,
                    style: {
                        progress: "progress-xs"
                    }
                }, {
                    label: "Responsiveness",
                    value: 100,
                    style: {
                        progress: "progress-xs"
                    }
                }]
            }), $(".pricing-table-basis").on("change", 'input[name="pricing-value"]', function() {
                console.log(this.value);
                var e = this.value;
                $(".odometer").each(function() {
                    this.innerHTML = $(this).data(e + "-price")
                })
            }),
            function() {
                var e = {
                    showStepURLhash: !1,
                    theme: "circles",
                    anchorSettings: {
                        removeDoneStepOnNavigateBack: !0
                    }
                };
                $("#basic-wizard").smartWizard(e), $("#ajax-wizard").smartWizard(e);
                var c = $("#form-wizard"),
                    t = $.extend({}, e, {
                        contentURL: "wizard/get-form/",
                        ajaxSettings: {
                            type: "GET"
                        }
                    }),
                    n = c.smartWizard(t);
                n.on("leaveStep", function(e, t, n, i) {
                    var o, a, r, s, l = $("#form-step-" + n, c);
                    return "forward" !== i || !l.length || !!l.valid() && (o = l, r = new $.Deferred, s = $.extend(!0, {}, a, {
                        url: o.attr("action"),
                        type: "POST",
                        data: o.serializeArray(),
                        dataType: "json",
                        beforeSend: function() {
                            c.smartWizard("block")
                        }
                    }), $.ajax(s).done(function(e) {
                        e.result ? (o.trigger("form.submitted", [e]), $("input, textarea", o).removeClass("error"), o.addClass("submitted")) : e.errors && $.each(e.errors, function(e, t) {
                            $("[name$='[" + e + "]']", o).addClass("error").tooltip({
                                title: t,
                                placement: "bottom",
                                trigger: "manual"
                            }).tooltip("show").on("focus", function() {
                                $(this).tooltip("destroy")
                            })
                        }), c.smartWizard("unblock"), r.resolve(e.result)
                    }).fail(function() {
                        c.smartWizard("unblock"), r.reject()
                    }), r.promise())
                }).on("showStep", function(e, t, n, i) {
                    var o = $("#form-step-" + n, c);
                    o.validate({
                        errorPlacement: function(e, t) {
                            var n = t.parent();
                            n.hasClass("input-group") ? e.insertAfter(n) : n.hasClass("has-icon") ? e.insertBefore(n) : n.hasClass("control") ? e.insertAfter(t.next(".control-label")) : e.insertAfter(t)
                        }
                    }), 2 === n && $("input[type=radio]", o).on("change", function(e) {
                        $(e.target).closest(".row").find(".card").removeClass("b b-3"), $(e.target).closest(".card").addClass("b b-3")
                    })
                })
            }()
    }),
    function(e, o, a) {
        function n(e) {
            var n = this,
                i = o.PointerEvent ? {
                    end: "pointerup",
                    enter: "pointerenter",
                    leave: "pointerleave"
                } : {
                    end: "touchend",
                    enter: "mouseenter",
                    leave: "mouseleave"
                };
            this.container = document.querySelector(e), this.container.classList.add("no-dropdown-transition"), this.root = this.container.querySelector(".st-nav-menu"), this.dropdownBackground = this.container.querySelector(".st-dropdown-bg"), this.dropdownBackgroundAlt = this.container.querySelector(".st-alt-bg"), this.dropdownContainer = this.container.querySelector(".st-dropdown-container"), this.dropdownArrow = this.container.querySelector(".st-dropdown-arrow"), this.hasDropdownLinks = a.Util.queryArray(".st-has-dropdown", this.root), this.dropdownSections = a.Util.queryArray(".st-dropdown-section", this.container).map(function(e) {
                return {
                    el: e,
                    name: e.getAttribute("data-dropdown"),
                    content: e.querySelector(".st-dropdown-content"),
                    width: e.querySelector(".st-dropdown-content").offsetWidth
                }
            }), this.hasDropdownLinks.forEach(function(t) {
                t.addEventListener(i.enter, function(e) {
                    "touch" !== e.pointerType && (n.stopCloseTimeout(), n.openDropdown(t))
                }), t.addEventListener(i.leave, function(e) {
                    "touch" !== e.pointerType && n.startCloseTimeout()
                }), t.addEventListener(i.end, function(e) {
                    e.preventDefault(), e.stopPropagation(), n.toggleDropdown(t)
                })
            }), this.dropdownContainer.addEventListener(i.enter, function(e) {
                "touch" !== e.pointerType && n.stopCloseTimeout()
            }), this.dropdownContainer.addEventListener(i.leave, function(e) {
                "touch" !== e.pointerType && n.startCloseTimeout()
            }), this.dropdownContainer.addEventListener(i.end, function(e) {
                e.stopPropagation()
            }), document.body.addEventListener(i.end, function(e) {
                a.Util.touch.isDragging || n.closeDropdown()
            })
        }

        function i(e) {
            var n = this,
                i = a.Util.touch.isSupported ? "touchend" : "click";
            this.root = document.querySelector(e), this.activeClass = "st-popup-active", this.link = this.root.querySelector(".st-root-link"), this.popup = this.root.querySelector(".st-popup"), this.closeButton = this.root.querySelector(".st-popup-close-button"), this.link.addEventListener(i, function(e) {
                e.stopPropagation(), n.togglePopup()
            }), this.popup.addEventListener(i, function(e) {
                e.stopPropagation()
            }), this.closeButton && this.closeButton.addEventListener(i, function(e) {
                n.closeAllPopups()
            }), document.body.addEventListener(i, function(e) {
                a.Util.touch.isDragging || n.closeAllPopups()
            }, !1)
        }
        a.Util = {
            queryArray: function(e, t) {
                return t || (t = document.body), Array.prototype.slice.call(t.querySelectorAll(e))
            },
            touch: {
                isSupported: "ontouchstart" in o || navigator.maxTouchPoints,
                isDragging: !1
            }
        }, n.prototype.openDropdown = function(e) {
            var t = this;
            if (this.activeDropdown !== e) {
                this.activeDropdown = e, this.container.classList.add("overlay-active"), this.container.classList.add("dropdown-active"), this.hasDropdownLinks.forEach(function(e) {
                    e.classList.remove("active")
                }), e.classList.add("active");
                var n = e.getAttribute("data-dropdown"),
                    i = "left",
                    o = {
                        width: 0,
                        height: 0,
                        content: null
                    };
                this.dropdownSections.forEach(function(e) {
                    e.el.classList.remove("active"), e.el.classList.remove("left"), e.el.classList.remove("right"), e.name === n ? (e.el.classList.add("active"), i = "right", o = {
                        width: e.content.offsetWidth,
                        height: e.content.offsetHeight,
                        content: e.content
                    }) : e.el.classList.add(i)
                });
                var a = o.width / 520,
                    r = o.height / 400,
                    s = e.getBoundingClientRect(),
                    l = s.left + s.width / 2 - o.width / 2;
                l = Math.round(Math.max(l, 10)), clearTimeout(this.disableTransitionTimeout), this.enableTransitionTimeout = setTimeout(function() {
                    t.container.classList.remove("no-dropdown-transition")
                }, 50), this.dropdownBackground.style.transform = "translateX(" + l + "px) scaleX(" + a + ") scaleY(" + r + ")", this.dropdownContainer.style.transform = "translateX(" + l + "px)", this.dropdownContainer.style.width = o.width + "px", this.dropdownContainer.style.height = o.height + "px";
                var c = Math.round(s.left + s.width / 2);
                this.dropdownArrow.style.transform = "translateX(" + c + "px) rotate(45deg)";
                var u = o.content.children[0].offsetHeight / r;
                this.dropdownBackgroundAlt.style.transform = "translateY(" + u + "px)"
            }
        }, n.prototype.closeDropdown = function() {
            var e = this;
            this.activeDropdown && (this.hasDropdownLinks.forEach(function(e, t) {
                e.classList.remove("active")
            }), clearTimeout(this.enableTransitionTimeout), this.disableTransitionTimeout = setTimeout(function() {
                e.container.classList.add("no-dropdown-transition")
            }, 50), this.container.classList.remove("overlay-active"), this.container.classList.remove("dropdown-active"), this.activeDropdown = void 0)
        }, n.prototype.toggleDropdown = function(e) {
            this.activeDropdown === e ? this.closeDropdown() : this.openDropdown(e)
        }, n.prototype.startCloseTimeout = function() {
            var e = this;
            e.closeDropdownTimeout = setTimeout(function() {
                e.closeDropdown()
            }, 50)
        }, n.prototype.stopCloseTimeout = function() {
            clearTimeout(this.closeDropdownTimeout)
        }, i.prototype.togglePopup = function() {
            var e = this.root.classList.contains(this.activeClass);
            this.closeAllPopups(!0), e || this.root.classList.add(this.activeClass)
        }, i.prototype.closeAllPopups = function(e) {
            for (var t = document.getElementsByClassName(this.activeClass), n = 0; n < t.length; n++) t[n].classList.remove(this.activeClass)
        }, e(function() {
            new n(".st-nav"), new i(".st-nav .st-nav-section.st-nav-mobile")
        })
    }(jQuery, this, {});
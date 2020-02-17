(window.webpackJsonp = window.webpackJsonp || []).push([
    [32], {
        "8//2": function (e, t, n) {
            "use strict";
            n("Tze0"), n("Vd3H"), n("bWfx"), n("hHhE"), n("/SS/"), n("8+KV"), n("0l/t"), n("rGqo"), n("yt8O"), n("Btvt"), n("RW0V"), n("91GP"), n("rE2o"), n("ioFf"), n("HAE/"), Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = s(n("q1tI")),
                r = n("ueNE"),
                i = s(n("pIsd")),
                o = s(n("BBPU")),
                l = n("x9Za");

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function c(e) {
                return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function u() {
                return (u = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(this, arguments)
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        a = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter((function (e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), a.forEach((function (t) {
                        v(e, t, n[t])
                    }))
                }
                return e
            }

            function p(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function f(e) {
                return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function m(e, t) {
                return (m = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function h(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function v(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var b = (0, l.canUseDOM)() && n("jpXb"),
                g = function (e) {
                    function t(e) {
                        var n;
                        return function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), n = function (e, t) {
                            return !t || "object" !== c(t) && "function" != typeof t ? h(e) : t
                        }(this, f(t).call(this, e)), v(h(h(n)), "innerSliderRefHandler", (function (e) {
                            return n.innerSlider = e
                        })), v(h(h(n)), "slickPrev", (function () {
                            return n.innerSlider.slickPrev()
                        })), v(h(h(n)), "slickNext", (function () {
                            return n.innerSlider.slickNext()
                        })), v(h(h(n)), "slickGoTo", (function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            return n.innerSlider.slickGoTo(e, t)
                        })), v(h(h(n)), "slickPause", (function () {
                            return n.innerSlider.pause("paused")
                        })), v(h(h(n)), "slickPlay", (function () {
                            return n.innerSlider.autoPlay("play")
                        })), n.state = {
                            breakpoint: null
                        }, n._responsiveMediaHandlers = [], n
                    }
                    var n, s, g;
                    return function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && m(e, t)
                    }(t, e), n = t, (s = [{
                        key: "media",
                        value: function (e, t) {
                            b.register(e, t), this._responsiveMediaHandlers.push({
                                query: e,
                                handler: t
                            })
                        }
                    }, {
                        key: "componentWillMount",
                        value: function () {
                            var e = this;
                            if (this.props.responsive) {
                                var t = this.props.responsive.map((function (e) {
                                    return e.breakpoint
                                }));
                                t.sort((function (e, t) {
                                    return e - t
                                })), t.forEach((function (n, a) {
                                    var r;
                                    r = 0 === a ? (0, i.default)({
                                        minWidth: 0,
                                        maxWidth: n
                                    }) : (0, i.default)({
                                        minWidth: t[a - 1] + 1,
                                        maxWidth: n
                                    }), (0, l.canUseDOM)() && e.media(r, (function () {
                                        e.setState({
                                            breakpoint: n
                                        })
                                    }))
                                }));
                                var n = (0, i.default)({
                                    minWidth: t.slice(-1)[0]
                                });
                                (0, l.canUseDOM)() && this.media(n, (function () {
                                    e.setState({
                                        breakpoint: null
                                    })
                                }))
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function () {
                            this._responsiveMediaHandlers.forEach((function (e) {
                                b.unregister(e.query, e.handler)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e, t, n = this;
                            (e = this.state.breakpoint ? "unslick" === (t = this.props.responsive.filter((function (e) {
                                return e.breakpoint === n.state.breakpoint
                            })))[0].settings ? "unslick" : d({}, o.default, this.props, t[0].settings) : d({}, o.default, this.props)).centerMode && (e.slidesToScroll, e.slidesToScroll = 1), e.fade && (e.slidesToShow, e.slidesToScroll, e.slidesToShow = 1, e.slidesToScroll = 1);
                            var i = a.default.Children.toArray(this.props.children);
                            i = i.filter((function (e) {
                                return "string" == typeof e ? !!e.trim() : !!e
                            })), e.variableWidth && (e.rows > 1 || e.slidesPerRow > 1) && (console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"), e.variableWidth = !1);
                            for (var l = [], s = null, c = 0; c < i.length; c += e.rows * e.slidesPerRow) {
                                for (var p = [], f = c; f < c + e.rows * e.slidesPerRow; f += e.slidesPerRow) {
                                    for (var m = [], h = f; h < f + e.slidesPerRow && (e.variableWidth && i[h].props.style && (s = i[h].props.style.width), !(h >= i.length)); h += 1) m.push(a.default.cloneElement(i[h], {
                                        key: 100 * c + 10 * f + h,
                                        tabIndex: -1,
                                        style: {
                                            width: "".concat(100 / e.slidesPerRow, "%"),
                                            display: "inline-block"
                                        }
                                    }));
                                    p.push(a.default.createElement("div", {
                                        key: 10 * c + f
                                    }, m))
                                }
                                e.variableWidth ? l.push(a.default.createElement("div", {
                                    key: c,
                                    style: {
                                        width: s
                                    }
                                }, p)) : l.push(a.default.createElement("div", {
                                    key: c
                                }, p))
                            }
                            if ("unslick" === e) {
                                var v = "regular slider " + (this.props.className || "");
                                return a.default.createElement("div", {
                                    className: v
                                }, l)
                            }
                            return l.length <= e.slidesToShow && (e.unslick = !0), a.default.createElement(r.InnerSlider, u({
                                ref: this.innerSliderRefHandler
                            }, e), l)
                        }
                    }]) && p(n.prototype, s), g && p(n, g), t
                }(a.default.Component);
            t.default = g
        },
        "9/5/": function (e, t, n) {
            (function (t) {
                n("pIFo"), n("a1Th"), n("h7Nl"), n("Btvt");
                var a = /^\s+|\s+$/g,
                    r = /^[-+]0x[0-9a-f]+$/i,
                    i = /^0b[01]+$/i,
                    o = /^0o[0-7]+$/i,
                    l = parseInt,
                    s = "object" == typeof t && t && t.Object === Object && t,
                    c = "object" == typeof self && self && self.Object === Object && self,
                    u = s || c || Function("return this")(),
                    d = Object.prototype.toString,
                    p = Math.max,
                    f = Math.min,
                    m = function () {
                        return u.Date.now()
                    };

                function h(e) {
                    var t = typeof e;
                    return !!e && ("object" == t || "function" == t)
                }

                function v(e) {
                    if ("number" == typeof e) return e;
                    if (function (e) {
                            return "symbol" == typeof e || function (e) {
                                return !!e && "object" == typeof e
                            }(e) && "[object Symbol]" == d.call(e)
                        }(e)) return NaN;
                    if (h(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = h(t) ? t + "" : t
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(a, "");
                    var n = i.test(e);
                    return n || o.test(e) ? l(e.slice(2), n ? 2 : 8) : r.test(e) ? NaN : +e
                }
                e.exports = function (e, t, n) {
                    var a, r, i, o, l, s, c = 0,
                        u = !1,
                        d = !1,
                        b = !0;
                    if ("function" != typeof e) throw new TypeError("Expected a function");

                    function g(t) {
                        var n = a,
                            i = r;
                        return a = r = void 0, c = t, o = e.apply(i, n)
                    }

                    function y(e) {
                        return c = e, l = setTimeout(w, t), u ? g(e) : o
                    }

                    function E(e) {
                        var n = e - s;
                        return void 0 === s || n >= t || n < 0 || d && e - c >= i
                    }

                    function w() {
                        var e = m();
                        if (E(e)) return S(e);
                        l = setTimeout(w, function (e) {
                            var n = t - (e - s);
                            return d ? f(n, i - (e - c)) : n
                        }(e))
                    }

                    function S(e) {
                        return l = void 0, b && a ? g(e) : (a = r = void 0, o)
                    }

                    function k() {
                        var e = m(),
                            n = E(e);
                        if (a = arguments, r = this, s = e, n) {
                            if (void 0 === l) return y(s);
                            if (d) return l = setTimeout(w, t), g(s)
                        }
                        return void 0 === l && (l = setTimeout(w, t)), o
                    }
                    return t = v(t) || 0, h(n) && (u = !!n.leading, i = (d = "maxWait" in n) ? p(v(n.maxWait) || 0, t) : i, b = "trailing" in n ? !!n.trailing : b), k.cancel = function () {
                        void 0 !== l && clearTimeout(l), c = 0, a = s = r = l = void 0
                    }, k.flush = function () {
                        return void 0 === l ? o : S(m())
                    }, k
                }
            }).call(this, n("yLpj"))
        },
        BBPU: function (e, t, n) {
            "use strict";
            n("HAE/"), Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a, r = (a = n("q1tI")) && a.__esModule ? a : {
                default: a
            };
            var i = {
                accessibility: !0,
                adaptiveHeight: !1,
                afterChange: null,
                appendDots: function (e) {
                    return r.default.createElement("ul", {
                        style: {
                            display: "block"
                        }
                    }, e)
                },
                arrows: !0,
                autoplay: !1,
                autoplaySpeed: 3e3,
                beforeChange: null,
                centerMode: !1,
                centerPadding: "50px",
                className: "",
                cssEase: "ease",
                customPaging: function (e) {
                    return r.default.createElement("button", null, e + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: null,
                nextArrow: null,
                onEdge: null,
                onInit: null,
                onLazyLoadError: null,
                onReInit: null,
                pauseOnDotsHover: !1,
                pauseOnFocus: !1,
                pauseOnHover: !0,
                prevArrow: null,
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "div",
                slidesPerRow: 1,
                slidesToScroll: 1,
                slidesToShow: 1,
                speed: 500,
                swipe: !0,
                swipeEvent: null,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                waitForAnimate: !0
            };
            t.default = i
        },
        BJfS: function (e, t, n) {
            n("pIFo");
            e.exports = function (e) {
                return e.replace(/[A-Z]/g, (function (e) {
                    return "-" + e.toLowerCase()
                })).toLowerCase()
            }
        },
        IX3V: function (e, t, n) {
            n("a1Th"), n("h7Nl"), n("Btvt"), e.exports = {
                isFunction: function (e) {
                    return "function" == typeof e
                },
                isArray: function (e) {
                    return "[object Array]" === Object.prototype.toString.apply(e)
                },
                each: function (e, t) {
                    for (var n = 0, a = e.length; n < a && !1 !== t(e[n], n); n++);
                }
            }
        },
        KOnL: function (e, t, n) {
            "use strict";
            n("2Spj"), n("hHhE"), n("/SS/"), n("8+KV"), n("0l/t"), n("rGqo"), n("yt8O"), n("Btvt"), n("RW0V"), n("91GP"), n("rE2o"), n("ioFf"), n("HAE/"), Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.NextArrow = t.PrevArrow = void 0;
            var a = o(n("q1tI")),
                r = o(n("TSYQ")),
                i = n("x9Za");

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function l(e) {
                return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function s() {
                return (s = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(this, arguments)
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        a = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter((function (e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), a.forEach((function (t) {
                        u(e, t, n[t])
                    }))
                }
                return e
            }

            function u(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function f(e, t, n) {
                return t && p(e.prototype, t), n && p(e, n), e
            }

            function m(e, t) {
                return !t || "object" !== l(t) && "function" != typeof t ? function (e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function h(e) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function v(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && b(e, t)
            }

            function b(e, t) {
                return (b = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var g = function (e) {
                function t() {
                    return d(this, t), m(this, h(t).apply(this, arguments))
                }
                return v(t, e), f(t, [{
                    key: "clickHandler",
                    value: function (e, t) {
                        t && t.preventDefault(), this.props.clickHandler(e, t)
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = {
                                "slick-arrow": !0,
                                "slick-prev": !0
                            },
                            t = this.clickHandler.bind(this, {
                                message: "previous"
                            });
                        !this.props.infinite && (0 === this.props.currentSlide || this.props.slideCount <= this.props.slidesToShow) && (e["slick-disabled"] = !0, t = null);
                        var n = {
                                key: "0",
                                "data-role": "none",
                                className: (0, r.default)(e),
                                style: {
                                    display: "block"
                                },
                                onClick: t
                            },
                            i = {
                                currentSlide: this.props.currentSlide,
                                slideCount: this.props.slideCount
                            };
                        return this.props.prevArrow ? a.default.cloneElement(this.props.prevArrow, c({}, n, i)) : a.default.createElement("button", s({
                            key: "0",
                            type: "button"
                        }, n), " ", "Previous")
                    }
                }]), t
            }(a.default.PureComponent);
            t.PrevArrow = g;
            var y = function (e) {
                function t() {
                    return d(this, t), m(this, h(t).apply(this, arguments))
                }
                return v(t, e), f(t, [{
                    key: "clickHandler",
                    value: function (e, t) {
                        t && t.preventDefault(), this.props.clickHandler(e, t)
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = {
                                "slick-arrow": !0,
                                "slick-next": !0
                            },
                            t = this.clickHandler.bind(this, {
                                message: "next"
                            });
                        (0, i.canGoNext)(this.props) || (e["slick-disabled"] = !0, t = null);
                        var n = {
                                key: "1",
                                "data-role": "none",
                                className: (0, r.default)(e),
                                style: {
                                    display: "block"
                                },
                                onClick: t
                            },
                            o = {
                                currentSlide: this.props.currentSlide,
                                slideCount: this.props.slideCount
                            };
                        return this.props.nextArrow ? a.default.cloneElement(this.props.nextArrow, c({}, n, o)) : a.default.createElement("button", s({
                            key: "1",
                            type: "button"
                        }, n), " ", "Next")
                    }
                }]), t
            }(a.default.PureComponent);
            t.NextArrow = y
        },
        OS56: function (e, t, n) {
            "use strict";
            var a;
            n("HAE/"), Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = ((a = n("8//2")) && a.__esModule ? a : {
                default: a
            }).default;
            t.default = r
        },
        RXBc: function (e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", (function () {
                return v
            })), n.d(t, "pageQuery", (function () {
                return b
            }));
            n("91GP"), n("tUrg"), n("f3/d"), n("pIFo");
            var a = n("q1tI"),
                r = n.n(a),
                i = n("fhwx"),
                o = n.n(i),
                l = n("OS56"),
                s = n.n(l),
                c = n("Bl7J"),
                u = n("Wbzz"),
                d = n("EVdn"),
                p = n.n(d),
                f = n("vrFN"),
                m = n("mHSJ"),
                h = n("nwud");
            var v = function (e) {
                    var t, n;

                    function a(t) {
                        var n;
                        return (n = e.call(this, t) || this).buildUrl = function (e) {
                            if ("string" == typeof e) return e.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "-")
                        }, n.state = {
                            nav1: null,
                            nav2: null
                        }, n
                    }
                    n = e, (t = a).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
                    var i = a.prototype;
                    return i.componentDidMount = function () {
                        function e(e) {
                            return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;")
                        }

                        function t() {
                            var t;
                            window.innerWidth > 991 ? (p.a.each(p()(".active .playground").serializeArray(), (function (t, n) {
                                p()(".display ." + n.name).html(e(n.value))
                            })), t = p()(".benefits .active .playground .form-file img").attr("src")) : (p.a.each(p()(".highlight .playground").serializeArray(), (function (t, n) {
                                p()(".display ." + n.name).html(e(n.value))
                            })), t = p()(".benefits .highlight .playground .form-file img").attr("src")), p()(".display").css("background-image", "url(" + t + ")"), p()(".display .image").hide()
                        }
                        var n;
                        this.setState({
                            nav1: this.slider1,
                            nav2: this.slider2
                        }), p()(".tec-sec").hover((function () {
                            p()(".business-section").toggleClass("tech-bg")
                        })), p()(".buss-sec").hover((function () {
                            p()(".business-section").toggleClass("busi-bg")
                        })), p()(".choose-field .filters").click((function () {
                            p()(this).next().toggleClass("field-show")
                        })), p()(".display").each((function () {
                            var e = p()(".image", this).attr("src");
                            p()(this).css("background-image", "url(" + e + ")"), p()(".display .image").hide()
                        })), p()(document).on("click", ".form-file, .edit-section .edit-icon", (function () {
                            p()(".benefitMOdal-box").show(), p()(".overlay").show();
                            var e = p()(".benefits .active .playground .form-file img").attr("src");
                            p()(".benefitMOdal-box li").removeClass("active"), p()(".benefitMOdal-box li").each((function () {
                                var t = p()("img", this).attr("src");
                                e === t && p()(this).addClass("active"), p()(this).css("background-image", "url(" + t + ")")
                            })), p()(".benefitMOdal-box li img").css("opacity", "0"), p()(".benefitMOdal-box li").css("background-position", "center center"), p()(".benefitMOdal-box li").css("background-size", "cover")
                        })), p()(document).on("click", ".edit-section .close-icon", (function (e) {
                            return e.stopImmediatePropagation(), p()(".benefits li.active .form .form-file img").attr("src", n), !1
                        })), p()(document).on("click", ".benefitMOdal-box li", (function (e) {
                            p()(".benefitMOdal-box li").removeClass("active"), p()(this).addClass("active")
                        })), p()(document).on("click", ".benefitMOdal-box .button , .overlay", (function (e) {
                            return e.preventDefault(), p()(".benefitMOdal-box").hide(), p()(".overlay").hide(), !1
                        })), p()(document).on("click", ".benefitMOdal-box .confirm-btn", (function (e) {
                            e.stopImmediatePropagation();
                            var t = p()(".benefitMOdal-box li.active img").attr("src");
                            return p()(".benefits li.active .form .form-file img").attr("src", t), !1
                        })), p()(document).ready((function () {
                            p()(".slide-up li.active").html(p()(".slide-up li.active").next().html()), p()(".slide-up li.active").prepend("<span class='heading'> " + p()(".slide-up li.active h4").text() + "</span>"), p()(".slide-up li.active h4").remove(), p()(".slide-up li.active").next().addClass("highlight"), n = p()(".benefits .active .playground .form-file img").attr("src")
                        })), p()(".slide-up li h4").click((function () {
                            p()(".slide-up li").removeClass("highlight"), p()(this).parent().addClass("highlight"), window.innerWidth > 991 && (p()(".slide-up li.active").html(p()(this).parent().html()), p()(".slide-up li.active").prepend("<span class='heading'> " + p()(".slide-up li.active h4").text() + "</span>"), p()(".slide-up li.active h4").remove()), t()
                        })), p()(document).on("submit", ".active .playground", (function (e) {
                            return e.stopImmediatePropagation(), p()(".slide-up li .submitBtn").addClass("loading"), setTimeout((function () {
                                t(), p()(".slide-up li .submitBtn").removeClass("loading")
                            }), 1600), !1
                        })), p()((function () {
                            p()(window).scroll((function () {
                                if (0 !== p()(".benefits-section").length) {
                                    var t = p()(".benefits-section").offset().top;
                                    if (t - p()(window).scrollTop() < 100 && t - p()(window).scrollTop() > -200) {
                                        var n = p()(".form-title-input").val();
                                        n = e(n);
                                        var a = document.getElementsByClassName("form-title-input")[0];
                                        a.focus(), a.setSelectionRange(n.length, n.length)
                                    }
                                }
                            }))
                        }))
                    }, i.render = function () {
                        var e = this,
                            t = this.props.data.contentstackRedesignHomepage,
                            n = 0;
                        return r.a.createElement(c.a, null, r.a.createElement(f.a, {
                            title: t.seo_section.meta_title,
                            description: t.seo_section.meta_description
                        }), r.a.createElement("div", {
                            className: "overlay"
                        }), r.a.createElement("section", {
                            className: "hero-banner-section home-banner"
                        }, r.a.createElement("div", {
                            className: "bg-image"
                        }, r.a.createElement("div", {
                            className: "slide1 banner-img",
                            style: {
                                backgroundImage: "url(https://images.contentstack.io/v3/assets/blt1264fa9b448be721/bltaeb9449491a38494/5cfaa5957d8bc4da32ecec99/download?format=png8&auto=webp)"
                            }
                        }), r.a.createElement("div", {
                            className: "slide2 banner-img",
                            style: {
                                backgroundImage: "url(https://images.contentstack.io/v3/assets/blt1264fa9b448be721/blta686b952088f622f/5d1623ef2f9d7c5e4127c641/download?format=png8&auto=webp)"
                            }
                        }), r.a.createElement("div", {
                            className: "slide3 banner-img",
                            style: {
                                backgroundImage: "url(https://images.contentstack.io/v3/assets/blt1264fa9b448be721/blt836186b6525d607e/5d1623eee12f075e3a933b43/download?format=png8&auto=webp)"
                            }
                        })), r.a.createElement("div", {
                            className: "banner-details"
                        }, r.a.createElement("div", {
                            className: "container"
                        }, r.a.createElement("div", {
                            className: "row"
                        }, r.a.createElement("div", {
                            className: "col-md-12 pl-0 pr-0"
                        }, r.a.createElement("div", {
                            className: "banner-content"
                        }, o()(t.hero_section.title), r.a.createElement("p", null, t.hero_section.subtext), r.a.createElement("div", null, r.a.createElement("div", {
                            className: "try-free button"
                        }, r.a.createElement(u.Link, {
                            to: t.hero_section.try_for_free.link
                        }, t.hero_section.try_for_free.title))), r.a.createElement("div", null, r.a.createElement("div", {
                            className: "request-demo button"
                        }, r.a.createElement(u.Link, {
                            to: t.hero_section.request_a_demo.link
                        }, t.hero_section.request_a_demo.title))))))))), r.a.createElement("section", {
                            className: "company-logo-section"
                        }, r.a.createElement("div", {
                            className: "container"
                        }, r.a.createElement(s.a, Object.assign({
                            className: ""
                        }, {
                            infinite: !0,
                            slidesToShow: 6,
                            slidesToScroll: 1,
                            autoplay: !0,
                            autoplaySpeed: 3e3,
                            pauseOnHover: !0,
                            responsive: [{
                                breakpoint: 1024,
                                settings: {
                                    slidesToShow: 6,
                                    slidesToScroll: 1,
                                    infinite: !0,
                                    dots: !0
                                }
                            }, {
                                breakpoint: 992,
                                settings: {
                                    slidesToShow: 5,
                                    slidesToScroll: 1,
                                    infinite: !0,
                                    dots: !0
                                }
                            }, {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 4,
                                    slidesToScroll: 1,
                                    infinite: !0,
                                    dots: !0
                                }
                            }, {
                                breakpoint: 600,
                                settings: {
                                    slidesToShow: 4,
                                    slidesToScroll: 2
                                }
                            }, {
                                breakpoint: 480,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 1
                                }
                            }]
                        }), t.customer_logos.map((function (e, t) {
                            return r.a.createElement(h.a, {
                                alt: e.title,
                                src: e.logo.url + "?format=png8&auto=webp",
                                key: t
                            })
                        }))))), r.a.createElement("section", {
                            className: "main-content-section"
                        }, r.a.createElement("div", {
                            className: "feature-section"
                        }, r.a.createElement("div", {
                            className: "feature-content"
                        }, r.a.createElement("div", {
                            className: "title"
                        }, r.a.createElement("h2", null, t.why_choose_contentstack_section.title))), r.a.createElement("div", {
                            className: "card-section"
                        }, r.a.createElement("div", {
                            className: "container"
                        }, r.a.createElement("div", {
                            className: "row card-list-row"
                        }, t.why_choose_contentstack_section.why_choose_contentstack.map((function (e, t) {
                            return 0 === t ? r.a.createElement("div", {
                                className: "card-details purple-bg col-md-4 col-sm-12 col-xs-12",
                                key: t
                            }, r.a.createElement("h3", null, e.title), r.a.createElement("p", null, e.description), r.a.createElement("div", {
                                className: "box-icon box-small-icon"
                            })) : 1 === t ? r.a.createElement("div", {
                                className: "card-details violet-bg col-md-4 col-sm-12 col-xs-12",
                                key: t
                            }, r.a.createElement("h3", null, e.title), r.a.createElement("p", null, e.description), r.a.createElement("div", {
                                className: "box-icon box-small-icon"
                            })) : r.a.createElement("div", {
                                className: "card-details blue-bg col-md-4 col-sm-12 col-xs-12",
                                key: t
                            }, r.a.createElement("h3", null, e.title), r.a.createElement("p", null, e.description), r.a.createElement("div", {
                                className: "box-icon box-small-icon"
                            }))
                        })))))), r.a.createElement("div", {
                            className: "business-section"
                        }, r.a.createElement("div", {
                            className: "person-images"
                        }, r.a.createElement("span", {
                            className: "man person-img"
                        }), r.a.createElement("span", {
                            className: "woman person-img"
                        }), r.a.createElement("span", {
                            className: "man two person-img"
                        })), r.a.createElement("div", {
                            className: "business-details"
                        }, r.a.createElement("div", {
                            className: "container"
                        }, r.a.createElement("div", {
                            className: "row"
                        }, r.a.createElement("div", {
                            className: "col-md-12 tech-bus-content"
                        }, t.developers_vs_marketers_section.map((function (e, t) {
                            return r.a.createElement("div", {
                                key: t,
                                className: t % 2 == 0 ? "col-md-6 col-xs-12 full-height tec-sec pad-top-bottom float-md-left" : "col-md-6 col-xs-12 full-height buss-sec pad-top-bottom float-md-right"
                            }, r.a.createElement("div", {
                                key: t,
                                className: t % 2 == 0 ? " col-lg-12 col-xs-12  tech-details reverse float-none float-md-left" : "col-lg-12 col-xs-12 tech-details  float-none float-md-right text-md-right"
                            }, r.a.createElement("div", {
                                className: t % 2 == 0 ? " col-xs-12 sec-xs-woman" : " col-xs-12 sec-xs-man"
                            }), r.a.createElement("div", {
                                className: "content"
                            }, r.a.createElement("h2", null, o()(e.title)), r.a.createElement("p", null, o()(e.description)), r.a.createElement("div", {
                                className: t % 2 == 0 ? "learn-more button learn-purple" : "learn-more button learn-blue"
                            }, r.a.createElement(u.Link, {
                                to: e.cta.link
                            }, e.cta.title)))))
                        }))))))), r.a.createElement("div", {
                            className: "tab-section-wrap pad-top-bottom"
                        }, r.a.createElement("div", {
                            className: "tab-features"
                        }, r.a.createElement("div", {
                            className: "container"
                        }, r.a.createElement("div", {
                            className: "row"
                        }, r.a.createElement("nav", null, r.a.createElement("div", {
                            className: "nav nav-tabs nav-fill",
                            id: "nav-tab",
                            role: "tablist"
                        }, t.features.map((function (t, n) {
                            return 0 === n ? r.a.createElement("a", {
                                className: "nav-item nav-link active features-nav",
                                key: n,
                                id: "nav-" + e.buildUrl(t.title) + "-tab",
                                "data-toggle": "tab",
                                href: "#nav-" + e.buildUrl(t.title),
                                role: "tab",
                                "aria-controls": "nav-" + e.buildUrl(t.title),
                                "aria-selected": "true"
                            }, t.title) : "More Features" === t.title ? r.a.createElement("li", null, r.a.createElement("a", {
                                className: "more",
                                href: t.url
                            }, t.title)) : r.a.createElement("a", {
                                className: "nav-item nav-link features-nav",
                                key: n,
                                id: "nav-" + e.buildUrl(t.title) + "-tab",
                                "data-toggle": "tab",
                                href: "#nav-" + e.buildUrl(t.title),
                                role: "tab",
                                "aria-controls": "nav-" + e.buildUrl(t.title),
                                "aria-selected": "true"
                            }, t.title)
                        })))), r.a.createElement("div", {
                            className: "tab-content col-md-12",
                            id: "nav-tabContent"
                        }, t.features.map((function (t, n) {
                            return 0 === n ? r.a.createElement("div", {
                                className: "tab-pane show active",
                                id: "nav-" + e.buildUrl(t.title),
                                role: "tabpanel",
                                "aria-labelledby": "nav-" + e.buildUrl(t.title) + "-tab",
                                key: n
                            }, r.a.createElement("div", {
                                className: "tab-feature-row"
                            }, r.a.createElement("div", {
                                className: "col-md-5 col-xl-5 tab-features-content"
                            }, r.a.createElement("h2", null, o()(t.title)), r.a.createElement("p", null, o()(t.description))), r.a.createElement("div", {
                                className: "col-md-6 col-xl-6 tab-features-image"
                            }, r.a.createElement(h.a, {
                                alt: "workflow",
                                src: t.image.url
                            })))) : "More Features" !== t.title ? r.a.createElement("div", {
                                className: "tab-pane ",
                                id: "nav-" + e.buildUrl(t.title),
                                role: "tabpanel",
                                "aria-labelledby": "nav-" + e.buildUrl(t.title) + "-tab",
                                key: n
                            }, r.a.createElement("div", {
                                className: "tab-feature-row"
                            }, r.a.createElement("div", {
                                className: "col-md-5 col-xl-5 col-xs-12 tab-features-content"
                            }, r.a.createElement("h2", null, o()(t.title)), r.a.createElement("p", null, o()(t.description))), r.a.createElement("div", {
                                className: "col-md-6 col-xl-6 col-xs-12 flt-none tab-features-image"
                            }, r.a.createElement(h.a, {
                                alt: "workflow",
                                src: t.image.url
                            })))) : void 0
                        }))))))), r.a.createElement("div", {
                            className: "benefits-section pad-top-bottom"
                        }, r.a.createElement("div", {
                            className: "benefits"
                        }, r.a.createElement("div", {
                            className: "container"
                        }, r.a.createElement("h2", {
                            className: "text-center d-sm-none benefit-title"
                        }, t.cs_benefits.title), r.a.createElement("div", {
                            className: "row"
                        }, r.a.createElement("div", {
                            className: "col-md-4 left_section"
                        }, r.a.createElement("div", {
                            className: "tryIt"
                        }, r.a.createElement("span", null, "Try It"), r.a.createElement("i", {
                            className: "try-icon"
                        })), r.a.createElement("ul", {
                            className: "slide-up"
                        }, r.a.createElement("li", {
                            className: "active"
                        }), t.cs_benefits.benefits.map((function (e, t) {
                            return r.a.createElement("li", {
                                "data-title": e.title,
                                "data-desc": e.description,
                                key: t
                            }, r.a.createElement("h4", null, e.title), r.a.createElement("div", {
                                className: "form"
                            }, r.a.createElement("div", {
                                className: "form-top"
                            }, r.a.createElement("img", {
                                alt: "",
                                src: "https://images.contentstack.io/v3/assets/blt77283b164776448a/blt8c571239b295f952/5d664df5ac43f814bc6f68a5/contentstack-logo.svg?format=pjpg&auto=webp"
                            })), r.a.createElement("form", {
                                className: "playground clearfix"
                            }, r.a.createElement("div", {
                                className: "form-contents"
                            }, r.a.createElement("div", {
                                className: "form-title"
                            }, r.a.createElement("label", null, "Title"), r.a.createElement("input", {
                                type: "text",
                                className: "form-title-input",
                                autoComplete: "off",
                                name: "title",
                                defaultValue: e.title
                            })), r.a.createElement("div", {
                                className: "form-description"
                            }, r.a.createElement("label", null, "Description"), r.a.createElement("textarea", {
                                type: "text",
                                className: "form-desc",
                                name: "description",
                                defaultValue: e.description
                            })), r.a.createElement("div", {
                                className: "form-file clearfix"
                            }, r.a.createElement("div", {
                                id: "image"
                            }, r.a.createElement("img", {
                                alt: "",
                                src: "https://images.contentstack.io/v3/assets/blt77283b164776448a/blt2eda06274563c5fe/5d664ded6f293676d4ba22f7/connected-digital-devices.png?format=png8&auto=webp"
                            })), r.a.createElement("div", {
                                className: "edit-section"
                            }, r.a.createElement("span", {
                                className: "image-title"
                            }, "connected-digi.jpeg", r.a.createElement("em", null, "144.1 kb")), r.a.createElement("span", {
                                className: "close-icon"
                            }, "x"), r.a.createElement("span", {
                                className: "edit-icon"
                            }))), r.a.createElement("button", {
                                type: "submit",
                                className: "submitBtn"
                            }, r.a.createElement("i", {
                                className: "globe-icon"
                            }), "PUBLISH")))))
                        })))), r.a.createElement("div", {
                            className: "benefitMOdal-box"
                        }, r.a.createElement("span", {
                            className: "title"
                        }, " Select a background image "), r.a.createElement("div", null, r.a.createElement("ul", null, r.a.createElement("li", {
                            className: "active"
                        }, r.a.createElement("img", {
                            alt: "",
                            className: "image",
                            src: "https://images.contentstack.io/v3/assets/blt77283b164776448a/blt2eda06274563c5fe/5d664ded6f293676d4ba22f7/connected-digital-devices.png?format=png8&auto=webp"
                        })), r.a.createElement("li", null, r.a.createElement("img", {
                            alt: "",
                            className: "image",
                            src: "https://images.contentstack.io/v3/assets/blt77283b164776448a/blt00db4feae1c149df/5d664e7fe4047b07fac04a5b/track-cross-country-running-althete.jpeg?format=pjpg&auto=webp"
                        })), r.a.createElement("li", null, r.a.createElement("img", {
                            alt: "",
                            className: "image",
                            src: "https://images.contentstack.io/v3/assets/blt77283b164776448a/blt1acbfdc8e12e3950/5d664e0bda2bd86fa8739ba4/girl-retail-shopping.jpg?format=pjpg&auto=webp"
                        })), r.a.createElement("li", null, r.a.createElement("img", {
                            alt: "",
                            className: "image",
                            src: "https://images.contentstack.io/v3/assets/blt77283b164776448a/blt54dc2b937f801044/5d664e4ccc6678099bd75302/playstation-game-controller.jpeg?format=pjpg&auto=webp"
                        })))), r.a.createElement("div", {
                            className: "button confirm-btn"
                        }, r.a.createElement("span", null, "CONFIRM")), r.a.createElement("div", {
                            className: "button cancel-btn"
                        }, r.a.createElement("span", null, "CANCEL"))), r.a.createElement("div", {
                            className: "col-md-8 right_section"
                        }, r.a.createElement("div", {
                            className: "divice-icon"
                        }, r.a.createElement("ul", {
                            className: "clearfix"
                        }, r.a.createElement("li", null, r.a.createElement("img", {
                            src: "https://images.contentstack.io/v3/assets/blt77283b164776448a/bltc4aa6983ed296384/5d664dfd5a90cc151dca3b81/desktop-icon.png?format=png8&auto=webp",
                            alt: ""
                        })), r.a.createElement("li", null, r.a.createElement("img", {
                            src: "https://images.contentstack.io/v3/assets/blt77283b164776448a/blt47f2e8e737d14855/5d664e3543fd9f6fb28ad273/mobile-icon.png?format=png8&auto=webp",
                            alt: ""
                        })), r.a.createElement("li", null, r.a.createElement("img", {
                            src: "https://images.contentstack.io/v3/assets/blt77283b164776448a/blta13468f18cedf7ea/5d664e7555181714432be4c8/smart-home-icon.png?format=png8&auto=webp",
                            alt: ""
                        })), r.a.createElement("li", null, r.a.createElement("img", {
                            src: "https://images.contentstack.io/v3/assets/blt77283b164776448a/blt7d3171de84241fa3/5d664e8d21416077ce1ae404/vr-icon.png?format=png8&auto=webp",
                            alt: ""
                        })), r.a.createElement("li", null, r.a.createElement("img", {
                            src: "https://images.contentstack.io/v3/assets/blt77283b164776448a/blt253d861ece739efa/5d664e777912e66eb1871649/smartwatch-icon.png?format=png8&auto=webp",
                            alt: ""
                        })))), r.a.createElement("div", {
                            className: "publish-sec"
                        }, r.a.createElement("div", {
                            className: "display display-desktop"
                        }, r.a.createElement("div", {
                            className: "head-top"
                        }, r.a.createElement("img", {
                            alt: "",
                            src: "https://images.contentstack.io/v3/assets/blt77283b164776448a/blt8c571239b295f952/5d664df5ac43f814bc6f68a5/contentstack-logo.svg?format=pjpg&auto=webp"
                        })), r.a.createElement("div", {
                            className: "detail-sec"
                        }, r.a.createElement("div", {
                            className: "content"
                        }, r.a.createElement("span", {
                            className: "title"
                        }, "Omnichannel Delivery"), r.a.createElement("span", {
                            className: "description"
                        }, "Enable your brands to deliver an integrated and continuous digital experience across all touchpoints and devices. ")), r.a.createElement("img", {
                            alt: "",
                            className: "image",
                            src: "https://images.contentstack.io/v3/assets/blt77283b164776448a/blt2eda06274563c5fe/5d664ded6f293676d4ba22f7/connected-digital-devices.png?format=png8&auto=webp"
                        }))), r.a.createElement("div", {
                            className: "display display-tablet"
                        }, r.a.createElement("div", {
                            className: "head-top"
                        }, r.a.createElement("img", {
                            alt: "",
                            src: "https://images.contentstack.io/v3/assets/blt77283b164776448a/blt8c571239b295f952/5d664df5ac43f814bc6f68a5/contentstack-logo.svg?format=pjpg&auto=webp"
                        })), r.a.createElement("div", {
                            className: "detail-sec"
                        }, r.a.createElement("div", {
                            className: "content"
                        }, r.a.createElement("span", {
                            className: "title"
                        }, "Omnichannel Delivery"), r.a.createElement("span", {
                            className: "description"
                        }, "Enable your brands to deliver an integrated and continuous digital experience across all touchpoints and devices. ")), r.a.createElement("img", {
                            alt: "",
                            className: "image",
                            src: "https://images.contentstack.io/v3/assets/blt77283b164776448a/blt2eda06274563c5fe/5d664ded6f293676d4ba22f7/connected-digital-devices.png?format=png8&auto=webp"
                        }))), r.a.createElement("div", {
                            className: "display display-mobile"
                        }, r.a.createElement("div", {
                            className: "head-top"
                        }, r.a.createElement("img", {
                            alt: "",
                            src: "https://images.contentstack.io/v3/assets/blt77283b164776448a/blt8c571239b295f952/5d664df5ac43f814bc6f68a5/contentstack-logo.svg?format=pjpg&auto=webp"
                        })), r.a.createElement("div", {
                            className: "detail-sec"
                        }, r.a.createElement("div", {
                            className: "content"
                        }, r.a.createElement("span", {
                            className: "title"
                        }, "Omnichannel Delivery"), r.a.createElement("span", {
                            className: "description"
                        }, "Enable your brands to deliver an integrated and continuous digital experience across all touchpoints and devices. ")), r.a.createElement("img", {
                            alt: "",
                            className: "image",
                            src: "https://images.contentstack.io/v3/assets/blt77283b164776448a/blt2eda06274563c5fe/5d664ded6f293676d4ba22f7/connected-digital-devices.png?format=png8&auto=webp"
                        }))))))))), r.a.createElement("div", {
                            className: "testimonial-sec pad-top-bottom"
                        }, r.a.createElement("div", {
                            className: "row m-0"
                        }, r.a.createElement("div", {
                            className: "tetimonial-slider col-md-12 p-0"
                        }, r.a.createElement("div", {
                            className: "container"
                        }, r.a.createElement("div", {
                            className: "col-lg-5 col-md-12 float-left"
                        }, r.a.createElement("div", {
                            className: "testimonial-content"
                        }, r.a.createElement("h2", null, o()(t.customer_testimonial_section.title)), r.a.createElement("p", null, o()(t.customer_testimonial_section.description)), r.a.createElement("div", {
                            className: "button float-none float-lg-right mt-5"
                        }, r.a.createElement(u.Link, {
                            to: t.customer_testimonial_section.cta_button.link + "?filter=Case%20Study",
                            className: "see-case"
                        }, t.customer_testimonial_section.cta_button.title)))), r.a.createElement("div", {
                            id: "slider",
                            className: "  testimonalslide col-md-12 col-lg-6 float-right"
                        }, r.a.createElement("div", {
                            className: "overflow-hidden"
                        }, r.a.createElement("div", {
                            className: "digno"
                        })), r.a.createElement("div", {
                            className: "slides slider-for"
                        }, r.a.createElement(s.a, {
                            asNavFor: this.state.nav2,
                            ref: function (t) {
                                return e.slider1 = t
                            },
                            arrows: !1,
                            fade: !0
                        }, t.customer_testimonial_section.testimonials.map((function (e, t) {
                            return r.a.createElement("div", {
                                key: t
                            }, r.a.createElement("span", {
                                className: "qoute-icon"
                            }, r.a.createElement("img", {
                                alt: "",
                                src: "https://images.contentstack.io/v3/assets/blt77283b164776448a/blt3d3c33c5e3facb76/5d664e5d21416077ce1ae3f2/quote-icon.png?format=png8&auto=webp"
                            })), r.a.createElement("div", {
                                className: "content"
                            }, r.a.createElement("div", {
                                className: "name-designation d-none xs-name-desig"
                            }, r.a.createElement("span", {
                                className: "name"
                            }, e.customer_quote.name), r.a.createElement("span", {
                                className: "designation"
                            }, e.customer_quote.designation)), r.a.createElement("span", {
                                className: "testimonal-logo"
                            }, "  ", r.a.createElement("img", {
                                src: e.customer_logo.url + "?format=png8&auto=webp",
                                alt: "logo-1"
                            }), " "), r.a.createElement("p", {
                                className: ""
                            }, e.customer_quote.quote), r.a.createElement("div", {
                                className: "name-designation visible-xs-none"
                            }, r.a.createElement("span", {
                                className: "name"
                            }, e.customer_quote.name), r.a.createElement("span", {
                                className: "designation"
                            }, e.customer_quote.designation))))
                        })))))), r.a.createElement("div", {
                            id: "carousel",
                            className: "thumbnail col-md-12 float-right"
                        }, r.a.createElement("div", {
                            className: "slides slider-nav"
                        }, r.a.createElement("div", {
                            className: "container"
                        }, r.a.createElement("div", {
                            className: " col-xl-8 col-lg-10 col-md-12 mx-auto"
                        }, r.a.createElement(s.a, {
                            asNavFor: this.state.nav1,
                            ref: function (t) {
                                return e.slider2 = t
                            },
                            slidesToShow: 5,
                            slidesToScroll: 1,
                            focusOnSelect: !0,
                            centerMode: !0,
                            arrows: !1,
                            autoplay: !0,
                            autoplaySpeed: 5e3,
                            pauseOnHover: !0,
                            responsive: [{
                                breakpoint: 1024,
                                settings: {
                                    slidesToShow: 5,
                                    slidesToScroll: 1,
                                    infinite: !0,
                                    dots: !0
                                }
                            }, {
                                breakpoint: 992,
                                settings: {
                                    slidesToShow: 5,
                                    slidesToScroll: 1,
                                    infinite: !0,
                                    dots: !0
                                }
                            }, {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 4,
                                    slidesToScroll: 1,
                                    infinite: !0,
                                    dots: !0
                                }
                            }, {
                                breakpoint: 600,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 1
                                }
                            }, {
                                breakpoint: 480,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 1
                                }
                            }]
                        }, t.customer_testimonial_section.testimonials.map((function (e, t) {
                            return r.a.createElement("div", {
                                key: t
                            }, r.a.createElement("img", {
                                alt: "",
                                src: e.customer_logo.url + "?format=png8&auto=webp"
                            }))
                        })))))))))), r.a.createElement("div", {
                            className: "recommended-section pad-top-bottom recom-homepage"
                        }, r.a.createElement("div", {
                            className: "title"
                        }, r.a.createElement("h2", null, t.recommended_content_section.title)), r.a.createElement("div", {
                            className: "recommended-wrap clearfix"
                        }, t.recommended_content_section.content.map((function (e, t) {
                            return "Two/third width" === e.select_tile_size ? (n += 1) % 2 == 0 ? r.a.createElement("div", {
                                className: "float-lg-right box-1 col-lg-7 col-md-12",
                                key: t
                            }, r.a.createElement("a", {
                                className: "",
                                href: e.link
                            }, r.a.createElement("div", {
                                className: "card-wrap d-lg-flex"
                            }, r.a.createElement("div", {
                                className: "col-lg-4 pl-0 pr-0 card-image"
                            }, r.a.createElement("img", {
                                alt: "",
                                src: e.image.url + "?format=png8&auto=webp"
                            })), r.a.createElement("div", {
                                className: "col-lg-7 card-content"
                            }, r.a.createElement("div", {
                                className: "label"
                            }, e.label), r.a.createElement("h3", null, e.title), r.a.createElement("div", {
                                className: "block-with-text"
                            }, r.a.createElement("p", null, e.subtext)))))) : r.a.createElement("div", {
                                className: " float-lg-left box-1 col-lg-7 col-md-12",
                                key: t
                            }, r.a.createElement("a", {
                                className: "",
                                href: e.link
                            }, r.a.createElement("div", {
                                className: "card-wrap d-lg-flex"
                            }, r.a.createElement("div", {
                                className: "col-lg-4 pl-0 pr-0 card-image"
                            }, r.a.createElement("img", {
                                alt: "",
                                src: e.image.url + "?format=png8&auto=webp"
                            })), r.a.createElement("div", {
                                className: "col-lg-7 card-content"
                            }, r.a.createElement("div", {
                                className: "label"
                            }, e.label), r.a.createElement("h3", null, e.title), r.a.createElement("div", {
                                className: "block-with-text"
                            }, r.a.createElement("p", null, e.subtext)))))) : "One/third width" === e.select_tile_size ? (n += 1) % 2 == 0 ? r.a.createElement("div", {
                                className: "float-lg-right box-2 col-lg-5 col-md-12",
                                key: t
                            }, r.a.createElement("a", {
                                className: "",
                                href: e.link
                            }, r.a.createElement("div", {
                                className: "card-wrap d-lg-flex image-wrap"
                            }, r.a.createElement("div", {
                                className: "card-image"
                            }, r.a.createElement("img", {
                                alt: "",
                                src: e.image.url + "?format=png8&auto=webp"
                            })), r.a.createElement("div", {
                                className: "card-content"
                            }, r.a.createElement("div", {
                                className: "label"
                            }, e.label), r.a.createElement("h3", null, e.title)), r.a.createElement("div", {
                                className: "recommended-overlay",
                                style: {
                                    backgroundImage: "linear-gradient(56deg, #571fbc, #a3346b)"
                                }
                            })))) : r.a.createElement("div", {
                                className: "float-lg-left box-2 col-lg-5 col-md-12",
                                key: t
                            }, r.a.createElement("a", {
                                className: "",
                                href: e.link
                            }, r.a.createElement("div", {
                                className: "card-wrap d-lg-flex image-wrap"
                            }, r.a.createElement("div", {
                                className: "card-image"
                            }, r.a.createElement("img", {
                                alt: "",
                                src: e.image.url + "?format=png8&auto=webp"
                            })), r.a.createElement("div", {
                                className: "card-content"
                            }, r.a.createElement("h3", null, e.title)), r.a.createElement("div", {
                                className: "recommended-overlay",
                                style: {
                                    backgroundImage: "linear-gradient(56deg, #571fbc, #a3346b)"
                                }
                            })))) : (n = 0, r.a.createElement("div", {
                                className: "float-left box-3 col-md-12 col-sm-12",
                                key: t
                            }, r.a.createElement("a", {
                                className: "d-flex",
                                href: e.link
                            }, r.a.createElement("div", {
                                className: "card-wrap d-lg-flex"
                            }, r.a.createElement("div", {
                                className: "col-lg-8 pl-0 pr-0 card-image"
                            }, r.a.createElement("img", {
                                alt: "",
                                src: e.image.url + "?format=png8&auto=webp"
                            })), r.a.createElement("div", {
                                className: "col-lg-4 card-content"
                            }, r.a.createElement("div", {
                                className: "label"
                            }, e.label), r.a.createElement("h3", null, e.title), r.a.createElement("div", {
                                className: "block-with-text"
                            }, r.a.createElement("p", null, e.subtext)))))))
                        })))), r.a.createElement(m.a, {
                            title: t.cta_section.title,
                            requestADemoTitle: t.cta_section.request_a_demo.title,
                            tryForFreeTitle: t.cta_section.try_for_free.title
                        })))
                    }, a
                }(r.a.Component),
                b = "3099103620"
        },
        TSYQ: function (e, t, n) {
            var a;
            n("LK8F"),
                function () {
                    "use strict";
                    var n = {}.hasOwnProperty;

                    function r() {
                        for (var e = [], t = 0; t < arguments.length; t++) {
                            var a = arguments[t];
                            if (a) {
                                var i = typeof a;
                                if ("string" === i || "number" === i) e.push(a);
                                else if (Array.isArray(a) && a.length) {
                                    var o = r.apply(null, a);
                                    o && e.push(o)
                                } else if ("object" === i)
                                    for (var l in a) n.call(a, l) && a[l] && e.push(l)
                            }
                        }
                        return e.join(" ")
                    }
                    e.exports ? (r.default = r, e.exports = r) : void 0 === (a = function () {
                        return r
                    }.apply(t, [])) || (e.exports = a)
                }()
        },
        "UZv/": function (e, t, n) {
            "use strict";
            n("V+eJ"), n("8+KV"), n("0l/t"), n("rGqo"), n("yt8O"), n("Btvt"), n("RW0V"), n("hHhE"), n("/SS/"), n("91GP"), n("rE2o"), n("ioFf"), n("HAE/"), Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Track = void 0;
            var a = o(n("q1tI")),
                r = o(n("TSYQ")),
                i = n("x9Za");

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function l(e) {
                return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function s() {
                return (s = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(this, arguments)
            }

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function d(e, t) {
                return !t || "object" !== l(t) && "function" != typeof t ? function (e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function p(e) {
                return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function f(e, t) {
                return (f = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        a = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter((function (e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), a.forEach((function (t) {
                        h(e, t, n[t])
                    }))
                }
                return e
            }

            function h(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var v = function (e) {
                    var t, n, a, r, i;
                    return a = (i = e.rtl ? e.slideCount - 1 - e.index : e.index) < 0 || i >= e.slideCount, e.centerMode ? (r = Math.floor(e.slidesToShow / 2), n = (i - e.currentSlide) % e.slideCount == 0, i > e.currentSlide - r - 1 && i <= e.currentSlide + r && (t = !0)) : t = e.currentSlide <= i && i < e.currentSlide + e.slidesToShow, {
                        "slick-slide": !0,
                        "slick-active": t,
                        "slick-center": n,
                        "slick-cloned": a,
                        "slick-current": i === e.currentSlide
                    }
                },
                b = function (e, t) {
                    return e.key || t
                },
                g = function (e) {
                    var t, n = [],
                        o = [],
                        l = [],
                        s = a.default.Children.count(e.children),
                        c = (0, i.lazyStartIndex)(e),
                        u = (0, i.lazyEndIndex)(e);
                    return a.default.Children.forEach(e.children, (function (d, p) {
                        var f, h = {
                            message: "children",
                            index: p,
                            slidesToScroll: e.slidesToScroll,
                            currentSlide: e.currentSlide
                        };
                        f = !e.lazyLoad || e.lazyLoad && e.lazyLoadedList.indexOf(p) >= 0 ? d : a.default.createElement("div", null);
                        var g = function (e) {
                                var t = {};
                                return void 0 !== e.variableWidth && !1 !== e.variableWidth || (t.width = e.slideWidth), e.fade && (t.position = "relative", e.vertical ? t.top = -e.index * parseInt(e.slideHeight) : t.left = -e.index * parseInt(e.slideWidth), t.opacity = e.currentSlide === e.index ? 1 : 0, t.transition = "opacity " + e.speed + "ms " + e.cssEase + ", visibility " + e.speed + "ms " + e.cssEase, t.WebkitTransition = "opacity " + e.speed + "ms " + e.cssEase + ", visibility " + e.speed + "ms " + e.cssEase), t
                            }(m({}, e, {
                                index: p
                            })),
                            y = f.props.className || "",
                            E = v(m({}, e, {
                                index: p
                            }));
                        if (n.push(a.default.cloneElement(f, {
                                key: "original" + b(f, p),
                                "data-index": p,
                                className: (0, r.default)(E, y),
                                tabIndex: "-1",
                                "aria-hidden": !E["slick-active"],
                                style: m({
                                    outline: "none"
                                }, f.props.style || {}, g),
                                onClick: function (t) {
                                    f.props && f.props.onClick && f.props.onClick(t), e.focusOnSelect && e.focusOnSelect(h)
                                }
                            })), e.infinite && !1 === e.fade) {
                            var w = s - p;
                            w <= (0, i.getPreClones)(e) && s !== e.slidesToShow && ((t = -w) >= c && (f = d), E = v(m({}, e, {
                                index: t
                            })), o.push(a.default.cloneElement(f, {
                                key: "precloned" + b(f, t),
                                "data-index": t,
                                tabIndex: "-1",
                                className: (0, r.default)(E, y),
                                "aria-hidden": !E["slick-active"],
                                style: m({}, f.props.style || {}, g),
                                onClick: function (t) {
                                    f.props && f.props.onClick && f.props.onClick(t), e.focusOnSelect && e.focusOnSelect(h)
                                }
                            }))), s !== e.slidesToShow && ((t = s + p) < u && (f = d), E = v(m({}, e, {
                                index: t
                            })), l.push(a.default.cloneElement(f, {
                                key: "postcloned" + b(f, t),
                                "data-index": t,
                                tabIndex: "-1",
                                className: (0, r.default)(E, y),
                                "aria-hidden": !E["slick-active"],
                                style: m({}, f.props.style || {}, g),
                                onClick: function (t) {
                                    f.props && f.props.onClick && f.props.onClick(t), e.focusOnSelect && e.focusOnSelect(h)
                                }
                            })))
                        }
                    })), e.rtl ? o.concat(n, l).reverse() : o.concat(n, l)
                },
                y = function (e) {
                    function t() {
                        return c(this, t), d(this, p(t).apply(this, arguments))
                    }
                    var n, r, i;
                    return function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && f(e, t)
                    }(t, e), n = t, (r = [{
                        key: "render",
                        value: function () {
                            var e = g(this.props),
                                t = this.props,
                                n = {
                                    onMouseEnter: t.onMouseEnter,
                                    onMouseOver: t.onMouseOver,
                                    onMouseLeave: t.onMouseLeave
                                };
                            return a.default.createElement("div", s({
                                className: "slick-track",
                                style: this.props.trackStyle
                            }, n), e)
                        }
                    }]) && u(n.prototype, r), i && u(n, i), t
                }(a.default.PureComponent);
            t.Track = y
        },
        aaW0: function (e, t, n) {
            "use strict";
            n("2Spj"), n("KKXr"), n("bWfx"), n("hHhE"), n("/SS/"), n("8+KV"), n("0l/t"), n("rGqo"), n("yt8O"), n("Btvt"), n("RW0V"), n("rE2o"), n("ioFf"), n("HAE/"), Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Dots = void 0;
            var a = i(n("q1tI")),
                r = i(n("TSYQ"));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function l(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function u(e, t) {
                return !t || "object" !== o(t) && "function" != typeof t ? function (e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function d(e) {
                return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function p(e, t) {
                return (p = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var f = function (e) {
                function t() {
                    return s(this, t), u(this, d(t).apply(this, arguments))
                }
                var n, i, o;
                return function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && p(e, t)
                }(t, e), n = t, (i = [{
                    key: "clickHandler",
                    value: function (e, t) {
                        t.preventDefault(), this.props.clickHandler(e)
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e, t = this,
                            n = (e = {
                                slideCount: this.props.slideCount,
                                slidesToScroll: this.props.slidesToScroll,
                                slidesToShow: this.props.slidesToShow,
                                infinite: this.props.infinite
                            }).infinite ? Math.ceil(e.slideCount / e.slidesToScroll) : Math.ceil((e.slideCount - e.slidesToShow) / e.slidesToScroll) + 1,
                            i = this.props,
                            o = {
                                onMouseEnter: i.onMouseEnter,
                                onMouseOver: i.onMouseOver,
                                onMouseLeave: i.onMouseLeave
                            },
                            s = Array.apply(null, Array(n + 1).join("0").split("")).map((function (e, n) {
                                var i = n * t.props.slidesToScroll,
                                    o = n * t.props.slidesToScroll + (t.props.slidesToScroll - 1),
                                    l = (0, r.default)({
                                        "slick-active": t.props.currentSlide >= i && t.props.currentSlide <= o
                                    }),
                                    s = {
                                        message: "dots",
                                        index: n,
                                        slidesToScroll: t.props.slidesToScroll,
                                        currentSlide: t.props.currentSlide
                                    },
                                    c = t.clickHandler.bind(t, s);
                                return a.default.createElement("li", {
                                    key: n,
                                    className: l
                                }, a.default.cloneElement(t.props.customPaging(n), {
                                    onClick: c
                                }))
                            }));
                        return a.default.cloneElement(this.props.appendDots(s), function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    a = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter((function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                })))), a.forEach((function (t) {
                                    l(e, t, n[t])
                                }))
                            }
                            return e
                        }({
                            className: this.props.dotsClass
                        }, o))
                    }
                }]) && c(n.prototype, i), o && c(n, o), t
            }(a.default.PureComponent);
            t.Dots = f
        },
        bdgK: function (e, t, n) {
            "use strict";
            n.r(t),
                function (e) {
                    n("EK0E"), n("bWfx"), n("hHhE"), n("DNiP"), n("RW0V"), n("0l/t"), n("V+eJ"), n("eM6i"), n("2Spj"), n("8+KV"), n("HAE/"), n("dZ+Y"), n("rGqo"), n("yt8O"), n("Btvt"), n("XfO3"), n("9AAn");
                    var a = function () {
                            if ("undefined" != typeof Map) return Map;

                            function e(e, t) {
                                var n = -1;
                                return e.some((function (e, a) {
                                    return e[0] === t && (n = a, !0)
                                })), n
                            }
                            return function () {
                                function t() {
                                    this.__entries__ = []
                                }
                                return Object.defineProperty(t.prototype, "size", {
                                    get: function () {
                                        return this.__entries__.length
                                    },
                                    enumerable: !0,
                                    configurable: !0
                                }), t.prototype.get = function (t) {
                                    var n = e(this.__entries__, t),
                                        a = this.__entries__[n];
                                    return a && a[1]
                                }, t.prototype.set = function (t, n) {
                                    var a = e(this.__entries__, t);
                                    ~a ? this.__entries__[a][1] = n : this.__entries__.push([t, n])
                                }, t.prototype.delete = function (t) {
                                    var n = this.__entries__,
                                        a = e(n, t);
                                    ~a && n.splice(a, 1)
                                }, t.prototype.has = function (t) {
                                    return !!~e(this.__entries__, t)
                                }, t.prototype.clear = function () {
                                    this.__entries__.splice(0)
                                }, t.prototype.forEach = function (e, t) {
                                    void 0 === t && (t = null);
                                    for (var n = 0, a = this.__entries__; n < a.length; n++) {
                                        var r = a[n];
                                        e.call(t, r[1], r[0])
                                    }
                                }, t
                            }()
                        }(),
                        r = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
                        i = void 0 !== e && e.Math === Math ? e : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
                        o = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(i) : function (e) {
                            return setTimeout((function () {
                                return e(Date.now())
                            }), 1e3 / 60)
                        };
                    var l = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
                        s = "undefined" != typeof MutationObserver,
                        c = function () {
                            function e() {
                                this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function (e, t) {
                                    var n = !1,
                                        a = !1,
                                        r = 0;

                                    function i() {
                                        n && (n = !1, e()), a && s()
                                    }

                                    function l() {
                                        o(i)
                                    }

                                    function s() {
                                        var e = Date.now();
                                        if (n) {
                                            if (e - r < 2) return;
                                            a = !0
                                        } else n = !0, a = !1, setTimeout(l, t);
                                        r = e
                                    }
                                    return s
                                }(this.refresh.bind(this), 20)
                            }
                            return e.prototype.addObserver = function (e) {
                                ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_()
                            }, e.prototype.removeObserver = function (e) {
                                var t = this.observers_,
                                    n = t.indexOf(e);
                                ~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_()
                            }, e.prototype.refresh = function () {
                                this.updateObservers_() && this.refresh()
                            }, e.prototype.updateObservers_ = function () {
                                var e = this.observers_.filter((function (e) {
                                    return e.gatherActive(), e.hasActive()
                                }));
                                return e.forEach((function (e) {
                                    return e.broadcastActive()
                                })), e.length > 0
                            }, e.prototype.connect_ = function () {
                                r && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), s ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                                    attributes: !0,
                                    childList: !0,
                                    characterData: !0,
                                    subtree: !0
                                })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
                            }, e.prototype.disconnect_ = function () {
                                r && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
                            }, e.prototype.onTransitionEnd_ = function (e) {
                                var t = e.propertyName,
                                    n = void 0 === t ? "" : t;
                                l.some((function (e) {
                                    return !!~n.indexOf(e)
                                })) && this.refresh()
                            }, e.getInstance = function () {
                                return this.instance_ || (this.instance_ = new e), this.instance_
                            }, e.instance_ = null, e
                        }(),
                        u = function (e, t) {
                            for (var n = 0, a = Object.keys(t); n < a.length; n++) {
                                var r = a[n];
                                Object.defineProperty(e, r, {
                                    value: t[r],
                                    enumerable: !1,
                                    writable: !1,
                                    configurable: !0
                                })
                            }
                            return e
                        },
                        d = function (e) {
                            return e && e.ownerDocument && e.ownerDocument.defaultView || i
                        },
                        p = g(0, 0, 0, 0);

                    function f(e) {
                        return parseFloat(e) || 0
                    }

                    function m(e) {
                        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                        return t.reduce((function (t, n) {
                            return t + f(e["border-" + n + "-width"])
                        }), 0)
                    }

                    function h(e) {
                        var t = e.clientWidth,
                            n = e.clientHeight;
                        if (!t && !n) return p;
                        var a = d(e).getComputedStyle(e),
                            r = function (e) {
                                for (var t = {}, n = 0, a = ["top", "right", "bottom", "left"]; n < a.length; n++) {
                                    var r = a[n],
                                        i = e["padding-" + r];
                                    t[r] = f(i)
                                }
                                return t
                            }(a),
                            i = r.left + r.right,
                            o = r.top + r.bottom,
                            l = f(a.width),
                            s = f(a.height);
                        if ("border-box" === a.boxSizing && (Math.round(l + i) !== t && (l -= m(a, "left", "right") + i), Math.round(s + o) !== n && (s -= m(a, "top", "bottom") + o)), ! function (e) {
                                return e === d(e).document.documentElement
                            }(e)) {
                            var c = Math.round(l + i) - t,
                                u = Math.round(s + o) - n;
                            1 !== Math.abs(c) && (l -= c), 1 !== Math.abs(u) && (s -= u)
                        }
                        return g(r.left, r.top, l, s)
                    }
                    var v = "undefined" != typeof SVGGraphicsElement ? function (e) {
                        return e instanceof d(e).SVGGraphicsElement
                    } : function (e) {
                        return e instanceof d(e).SVGElement && "function" == typeof e.getBBox
                    };

                    function b(e) {
                        return r ? v(e) ? function (e) {
                            var t = e.getBBox();
                            return g(0, 0, t.width, t.height)
                        }(e) : h(e) : p
                    }

                    function g(e, t, n, a) {
                        return {
                            x: e,
                            y: t,
                            width: n,
                            height: a
                        }
                    }
                    var y = function () {
                            function e(e) {
                                this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = g(0, 0, 0, 0), this.target = e
                            }
                            return e.prototype.isActive = function () {
                                var e = b(this.target);
                                return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
                            }, e.prototype.broadcastRect = function () {
                                var e = this.contentRect_;
                                return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e
                            }, e
                        }(),
                        E = function (e, t) {
                            var n, a, r, i, o, l, s, c = (a = (n = t).x, r = n.y, i = n.width, o = n.height, l = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, s = Object.create(l.prototype), u(s, {
                                x: a,
                                y: r,
                                width: i,
                                height: o,
                                top: r,
                                right: a + i,
                                bottom: o + r,
                                left: a
                            }), s);
                            u(this, {
                                target: e,
                                contentRect: c
                            })
                        },
                        w = function () {
                            function e(e, t, n) {
                                if (this.activeObservations_ = [], this.observations_ = new a, "function" != typeof e) throw new TypeError("The callback provided as parameter 1 is not a function.");
                                this.callback_ = e, this.controller_ = t, this.callbackCtx_ = n
                            }
                            return e.prototype.observe = function (e) {
                                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                                if ("undefined" != typeof Element && Element instanceof Object) {
                                    if (!(e instanceof d(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                                    var t = this.observations_;
                                    t.has(e) || (t.set(e, new y(e)), this.controller_.addObserver(this), this.controller_.refresh())
                                }
                            }, e.prototype.unobserve = function (e) {
                                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                                if ("undefined" != typeof Element && Element instanceof Object) {
                                    if (!(e instanceof d(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                                    var t = this.observations_;
                                    t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this))
                                }
                            }, e.prototype.disconnect = function () {
                                this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
                            }, e.prototype.gatherActive = function () {
                                var e = this;
                                this.clearActive(), this.observations_.forEach((function (t) {
                                    t.isActive() && e.activeObservations_.push(t)
                                }))
                            }, e.prototype.broadcastActive = function () {
                                if (this.hasActive()) {
                                    var e = this.callbackCtx_,
                                        t = this.activeObservations_.map((function (e) {
                                            return new E(e.target, e.broadcastRect())
                                        }));
                                    this.callback_.call(e, t, e), this.clearActive()
                                }
                            }, e.prototype.clearActive = function () {
                                this.activeObservations_.splice(0)
                            }, e.prototype.hasActive = function () {
                                return this.activeObservations_.length > 0
                            }, e
                        }(),
                        S = "undefined" != typeof WeakMap ? new WeakMap : new a,
                        k = function e(t) {
                            if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
                            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                            var n = c.getInstance(),
                                a = new w(t, n, this);
                            S.set(this, a)
                        };
                    ["observe", "unobserve", "disconnect"].forEach((function (e) {
                        k.prototype[e] = function () {
                            var t;
                            return (t = S.get(this))[e].apply(t, arguments)
                        }
                    }));
                    var O = void 0 !== i.ResizeObserver ? i.ResizeObserver : k;
                    t.default = O
                }.call(this, n("yLpj"))
        },
        jpXb: function (e, t, n) {
            var a = n("wZXL");
            e.exports = new a
        },
        kCCV: function (e, t, n) {
            function a(e) {
                this.options = e, !e.deferSetup && this.setup()
            }
            n("SRfc"), a.prototype = {
                constructor: a,
                setup: function () {
                    this.options.setup && this.options.setup(), this.initialised = !0
                },
                on: function () {
                    !this.initialised && this.setup(), this.options.match && this.options.match()
                },
                off: function () {
                    this.options.unmatch && this.options.unmatch()
                },
                destroy: function () {
                    this.options.destroy ? this.options.destroy() : this.off()
                },
                equals: function (e) {
                    return this.options === e || this.options.match === e
                }
            }, e.exports = a
        },
        mHSJ: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return s
            }));
            var a = n("q1tI"),
                r = n.n(a),
                i = n("fhwx"),
                o = n.n(i),
                l = n("Wbzz");
            var s = function (e) {
                var t, n;

                function a() {
                    return e.apply(this, arguments) || this
                }
                return n = e, (t = a).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, a.prototype.render = function () {
                    var e = this.props.defaults,
                        t = this.props.url ? this.props.url : "https://images.contentstack.io/v3/assets/blt1264fa9b448be721/bltb6939b357fb70b33/5d08ba3196d2d1b65a981c69/download?format=png8&auto=webp",
                        n = this.props.title ? this.props.title : e.contact_us_section.title,
                        a = this.props.tryForFreeTitle ? this.props.tryForFreeTitle : e.contact_us_section.button_text,
                        i = this.props.tryForFreeUrl ? this.props.tryForFreeUrl : "company/contact-us?subject=free%20trial",
                        s = this.props.requestADemoTitle ? this.props.requestADemoTitle : "REQUEST A DEMO",
                        c = this.props.requestADemoUrl ? this.props.requestADemoUrl : "company/contact-us?subject=get%20a%20demo";
                    return r.a.createElement("div", {
                        className: "tryforfree",
                        style: {
                            backgroundImage: "url(" + t + ")"
                        }
                    }, r.a.createElement("div", {
                        className: "container"
                    }, r.a.createElement("div", {
                        className: "row"
                    }, r.a.createElement("div", {
                        className: "content col-md-12"
                    }, r.a.createElement("div", {
                        className: ""
                    }, r.a.createElement("h2", {
                        className: "head-text"
                    }, o()(n)), r.a.createElement("div", {
                        className: "rounded-pill button"
                    }, r.a.createElement(l.Link, {
                        to: c
                    }, s)), r.a.createElement("div", {
                        id: "contact-global",
                        className: "contact-us-form text-left",
                        style: {
                            display: "none"
                        }
                    }, r.a.createElement("div", {
                        className: "features-demo-form"
                    }, r.a.createElement("form", {
                        id: "mktoForm_1035",
                        className: "demo-mkt-form"
                    }))), r.a.createElement("div", {
                        className: "try-free-button"
                    }, r.a.createElement(l.Link, {
                        to: i
                    }, a)))))))
                }, a
            }(r.a.Component)
        },
        pIsd: function (e, t, n) {
            n("8+KV"), n("rGqo"), n("yt8O"), n("Btvt"), n("RW0V");
            var a = n("BJfS"),
                r = function (e) {
                    var t = "",
                        n = Object.keys(e);
                    return n.forEach((function (r, i) {
                        var o = e[r];
                        (function (e) {
                            return /[height|width]$/.test(e)
                        })(r = a(r)) && "number" == typeof o && (o += "px"), t += !0 === o ? r : !1 === o ? "not " + r : "(" + r + ": " + o + ")", i < n.length - 1 && (t += " and ")
                    })), t
                };
            e.exports = function (e) {
                var t = "";
                return "string" == typeof e ? e : e instanceof Array ? (e.forEach((function (n, a) {
                    t += r(n), a < e.length - 1 && (t += ", ")
                })), t) : r(e)
            }
        },
        rxal: function (e, t, n) {
            "use strict";
            n("HAE/"), Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = {
                animating: !1,
                autoplaying: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                dragging: !1,
                edgeDragged: !1,
                initialized: !1,
                lazyLoadedList: [],
                listHeight: null,
                listWidth: null,
                scrolling: !1,
                slideCount: null,
                slideHeight: null,
                slideWidth: null,
                swipeLeft: null,
                swiped: !1,
                swiping: !1,
                touchObject: {
                    startX: 0,
                    startY: 0,
                    curX: 0,
                    curY: 0
                },
                trackStyle: {},
                trackWidth: 0
            };
            t.default = a
        },
        ueNE: function (e, t, n) {
            "use strict";
            n("xfY5"), n("hHhE"), n("/SS/"), n("8+KV"), n("0l/t"), n("rE2o"), n("rGqo"), n("yt8O"), n("Btvt"), n("RW0V"), n("V+eJ"), n("ioFf"), n("91GP"), n("HAE/"), Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.InnerSlider = void 0;
            var a = f(n("q1tI")),
                r = f(n("i8i4")),
                i = f(n("rxal")),
                o = f(n("9/5/")),
                l = f(n("TSYQ")),
                s = n("x9Za"),
                c = n("UZv/"),
                u = n("aaW0"),
                d = n("KOnL"),
                p = f(n("bdgK"));

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function m() {
                return (m = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(this, arguments)
            }

            function h(e, t) {
                if (null == e) return {};
                var n, a, r = function (e, t) {
                    if (null == e) return {};
                    var n, a, r = {},
                        i = Object.keys(e);
                    for (a = 0; a < i.length; a++) n = i[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < i.length; a++) n = i[a], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }

            function v(e) {
                return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        a = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter((function (e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), a.forEach((function (t) {
                        w(e, t, n[t])
                    }))
                }
                return e
            }

            function g(e) {
                return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function y(e, t) {
                return (y = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function E(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function w(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var S = function (e) {
                function t(e) {
                    var n;
                    return function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), n = function (e, t) {
                        return !t || "object" !== v(t) && "function" != typeof t ? E(e) : t
                    }(this, g(t).call(this, e)), w(E(E(n)), "listRefHandler", (function (e) {
                        return n.list = e
                    })), w(E(E(n)), "trackRefHandler", (function (e) {
                        return n.track = e
                    })), w(E(E(n)), "adaptHeight", (function () {
                        if (n.props.adaptiveHeight && n.list) {
                            var e = n.list.querySelector('[data-index="'.concat(n.state.currentSlide, '"]'));
                            n.list.style.height = (0, s.getHeight)(e) + "px"
                        }
                    })), w(E(E(n)), "componentWillMount", (function () {
                        if (n.ssrInit(), n.props.onInit && n.props.onInit(), n.props.lazyLoad) {
                            var e = (0, s.getOnDemandLazySlides)(b({}, n.props, n.state));
                            e.length > 0 && (n.setState((function (t) {
                                return {
                                    lazyLoadedList: t.lazyLoadedList.concat(e)
                                }
                            })), n.props.onLazyLoad && n.props.onLazyLoad(e))
                        }
                    })), w(E(E(n)), "componentDidMount", (function () {
                        var e = b({
                            listRef: n.list,
                            trackRef: n.track
                        }, n.props);
                        n.updateState(e, !0, (function () {
                            n.adaptHeight(), n.props.autoplay && n.autoPlay("update")
                        })), "progressive" === n.props.lazyLoad && (n.lazyLoadTimer = setInterval(n.progressiveLazyLoad, 1e3)), n.ro = new p.default((function () {
                            n.state.animating ? (n.onWindowResized(!1), n.callbackTimers.push(setTimeout((function () {
                                return n.onWindowResized()
                            }), n.props.speed))) : n.onWindowResized()
                        })), n.ro.observe(n.list), Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), (function (e) {
                            e.onfocus = n.props.pauseOnFocus ? n.onSlideFocus : null, e.onblur = n.props.pauseOnFocus ? n.onSlideBlur : null
                        })), window && (window.addEventListener ? window.addEventListener("resize", n.onWindowResized) : window.attachEvent("onresize", n.onWindowResized))
                    })), w(E(E(n)), "componentWillUnmount", (function () {
                        n.animationEndCallback && clearTimeout(n.animationEndCallback), n.lazyLoadTimer && clearInterval(n.lazyLoadTimer), n.callbackTimers.length && (n.callbackTimers.forEach((function (e) {
                            return clearTimeout(e)
                        })), n.callbackTimers = []), window.addEventListener ? window.removeEventListener("resize", n.onWindowResized) : window.detachEvent("onresize", n.onWindowResized), n.autoplayTimer && clearInterval(n.autoplayTimer)
                    })), w(E(E(n)), "componentWillReceiveProps", (function (e) {
                        for (var t = b({
                                listRef: n.list,
                                trackRef: n.track
                            }, e, n.state), r = !1, i = Object.keys(n.props), o = 0; o < i.length; o++) {
                            var l = i[o];
                            if (!e.hasOwnProperty(l)) {
                                r = !0;
                                break
                            }
                            if ("object" !== v(e[l]) && "function" != typeof e[l] && e[l] !== n.props[l]) {
                                r = !0;
                                break
                            }
                        }
                        n.updateState(t, r, (function () {
                            n.state.currentSlide >= a.default.Children.count(e.children) && n.changeSlide({
                                message: "index",
                                index: a.default.Children.count(e.children) - e.slidesToShow,
                                currentSlide: n.state.currentSlide
                            }), e.autoplay ? n.autoPlay("update") : n.pause("paused")
                        }))
                    })), w(E(E(n)), "componentDidUpdate", (function () {
                        if (n.checkImagesLoad(), n.props.onReInit && n.props.onReInit(), n.props.lazyLoad) {
                            var e = (0, s.getOnDemandLazySlides)(b({}, n.props, n.state));
                            e.length > 0 && (n.setState((function (t) {
                                return {
                                    lazyLoadedList: t.lazyLoadedList.concat(e)
                                }
                            })), n.props.onLazyLoad && n.props.onLazyLoad(e))
                        }
                        n.adaptHeight()
                    })), w(E(E(n)), "onWindowResized", (function (e) {
                        n.debouncedResize && n.debouncedResize.cancel(), n.debouncedResize = (0, o.default)((function () {
                            return n.resizeWindow(e)
                        }), 50), n.debouncedResize()
                    })), w(E(E(n)), "resizeWindow", (function () {
                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        if (r.default.findDOMNode(n.track)) {
                            var t = b({
                                listRef: n.list,
                                trackRef: n.track
                            }, n.props, n.state);
                            n.updateState(t, e, (function () {
                                n.props.autoplay ? n.autoPlay("update") : n.pause("paused")
                            })), n.setState({
                                animating: !1
                            }), clearTimeout(n.animationEndCallback), delete n.animationEndCallback
                        }
                    })), w(E(E(n)), "updateState", (function (e, t, r) {
                        var i = (0, s.initializedState)(e);
                        e = b({}, e, i, {
                            slideIndex: i.currentSlide
                        }), e = b({}, e, {
                            left: (0, s.getTrackLeft)(e)
                        });
                        var o = (0, s.getTrackCSS)(e);
                        (t || a.default.Children.count(n.props.children) !== a.default.Children.count(e.children)) && (i.trackStyle = o), n.setState(i, r)
                    })), w(E(E(n)), "ssrInit", (function () {
                        if (n.props.variableWidth) {
                            var e = 0,
                                t = 0,
                                r = [],
                                i = (0, s.getPreClones)(b({}, n.props, n.state, {
                                    slideCount: n.props.children.length
                                })),
                                o = (0, s.getPostClones)(b({}, n.props, n.state, {
                                    slideCount: n.props.children.length
                                }));
                            n.props.children.forEach((function (t) {
                                r.push(t.props.style.width), e += t.props.style.width
                            }));
                            for (var l = 0; l < i; l++) t += r[r.length - 1 - l], e += r[r.length - 1 - l];
                            for (var c = 0; c < o; c++) e += r[c];
                            for (var u = 0; u < n.state.currentSlide; u++) t += r[u];
                            var d = {
                                width: e + "px",
                                left: -t + "px"
                            };
                            if (n.props.centerMode) {
                                var p = "".concat(r[n.state.currentSlide], "px");
                                d.left = "calc(".concat(d.left, " + (100% - ").concat(p, ") / 2 ) ")
                            }
                            n.setState({
                                trackStyle: d
                            })
                        } else {
                            var f = a.default.Children.count(n.props.children),
                                m = b({}, n.props, n.state, {
                                    slideCount: f
                                }),
                                h = (0, s.getPreClones)(m) + (0, s.getPostClones)(m) + f,
                                v = 100 / n.props.slidesToShow * h,
                                g = 100 / h,
                                y = -g * ((0, s.getPreClones)(m) + n.state.currentSlide) * v / 100;
                            n.props.centerMode && (y += (100 - g * v / 100) / 2);
                            var E = {
                                width: v + "%",
                                left: y + "%"
                            };
                            n.setState({
                                slideWidth: g + "%",
                                trackStyle: E
                            })
                        }
                    })), w(E(E(n)), "checkImagesLoad", (function () {
                        var e = document.querySelectorAll(".slick-slide img"),
                            t = e.length,
                            a = 0;
                        Array.prototype.forEach.call(e, (function (e) {
                            var r = function () {
                                return ++a && a >= t && n.onWindowResized()
                            };
                            if (e.onclick) {
                                var i = e.onclick;
                                e.onclick = function () {
                                    i(), e.parentNode.focus()
                                }
                            } else e.onclick = function () {
                                return e.parentNode.focus()
                            };
                            e.onload || (n.props.lazyLoad ? e.onload = function () {
                                n.adaptHeight(), n.callbackTimers.push(setTimeout(n.onWindowResized, n.props.speed))
                            } : (e.onload = r, e.onerror = function () {
                                r(), n.props.onLazyLoadError && n.props.onLazyLoadError()
                            }))
                        }))
                    })), w(E(E(n)), "progressiveLazyLoad", (function () {
                        for (var e = [], t = b({}, n.props, n.state), a = n.state.currentSlide; a < n.state.slideCount + (0, s.getPostClones)(t); a++)
                            if (n.state.lazyLoadedList.indexOf(a) < 0) {
                                e.push(a);
                                break
                            } for (var r = n.state.currentSlide - 1; r >= -(0, s.getPreClones)(t); r--)
                            if (n.state.lazyLoadedList.indexOf(r) < 0) {
                                e.push(r);
                                break
                            } e.length > 0 ? (n.setState((function (t) {
                            return {
                                lazyLoadedList: t.lazyLoadedList.concat(e)
                            }
                        })), n.props.onLazyLoad && n.props.onLazyLoad(e)) : n.lazyLoadTimer && (clearInterval(n.lazyLoadTimer), delete n.lazyLoadTimer)
                    })), w(E(E(n)), "slideHandler", (function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            a = n.props,
                            r = a.asNavFor,
                            i = a.beforeChange,
                            o = a.onLazyLoad,
                            l = a.speed,
                            c = a.afterChange,
                            u = n.state.currentSlide,
                            d = (0, s.slideHandler)(b({
                                index: e
                            }, n.props, n.state, {
                                trackRef: n.track,
                                useCSS: n.props.useCSS && !t
                            })),
                            p = d.state,
                            f = d.nextState;
                        if (p) {
                            i && i(u, p.currentSlide);
                            var m = p.lazyLoadedList.filter((function (e) {
                                return n.state.lazyLoadedList.indexOf(e) < 0
                            }));
                            o && m.length > 0 && o(m), n.setState(p, (function () {
                                r && r.innerSlider.state.currentSlide !== n.state.currentSlide && r.innerSlider.slideHandler(e), f && (n.animationEndCallback = setTimeout((function () {
                                    var e = f.animating,
                                        t = h(f, ["animating"]);
                                    n.setState(t, (function () {
                                        n.callbackTimers.push(setTimeout((function () {
                                            return n.setState({
                                                animating: e
                                            })
                                        }), 10)), c && c(p.currentSlide), delete n.animationEndCallback
                                    }))
                                }), l))
                            }))
                        }
                    })), w(E(E(n)), "changeSlide", (function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            a = b({}, n.props, n.state),
                            r = (0, s.changeSlide)(a, e);
                        (0 === r || r) && (!0 === t ? n.slideHandler(r, t) : n.slideHandler(r))
                    })), w(E(E(n)), "clickHandler", (function (e) {
                        !1 === n.clickable && (e.stopPropagation(), e.preventDefault()), n.clickable = !0
                    })), w(E(E(n)), "keyHandler", (function (e) {
                        var t = (0, s.keyHandler)(e, n.props.accessibility, n.props.rtl);
                        "" !== t && n.changeSlide({
                            message: t
                        })
                    })), w(E(E(n)), "selectHandler", (function (e) {
                        n.changeSlide(e)
                    })), w(E(E(n)), "disableBodyScroll", (function () {
                        window.ontouchmove = function (e) {
                            (e = e || window.event).preventDefault && e.preventDefault(), e.returnValue = !1
                        }
                    })), w(E(E(n)), "enableBodyScroll", (function () {
                        window.ontouchmove = null
                    })), w(E(E(n)), "swipeStart", (function (e) {
                        n.props.verticalSwiping && n.disableBodyScroll();
                        var t = (0, s.swipeStart)(e, n.props.swipe, n.props.draggable);
                        "" !== t && n.setState(t)
                    })), w(E(E(n)), "swipeMove", (function (e) {
                        var t = (0, s.swipeMove)(e, b({}, n.props, n.state, {
                            trackRef: n.track,
                            listRef: n.list,
                            slideIndex: n.state.currentSlide
                        }));
                        t && (t.swiping && (n.clickable = !1), n.setState(t))
                    })), w(E(E(n)), "swipeEnd", (function (e) {
                        var t = (0, s.swipeEnd)(e, b({}, n.props, n.state, {
                            trackRef: n.track,
                            listRef: n.list,
                            slideIndex: n.state.currentSlide
                        }));
                        if (t) {
                            var a = t.triggerSlideHandler;
                            delete t.triggerSlideHandler, n.setState(t), void 0 !== a && (n.slideHandler(a), n.props.verticalSwiping && n.enableBodyScroll())
                        }
                    })), w(E(E(n)), "slickPrev", (function () {
                        n.callbackTimers.push(setTimeout((function () {
                            return n.changeSlide({
                                message: "previous"
                            })
                        }), 0))
                    })), w(E(E(n)), "slickNext", (function () {
                        n.callbackTimers.push(setTimeout((function () {
                            return n.changeSlide({
                                message: "next"
                            })
                        }), 0))
                    })), w(E(E(n)), "slickGoTo", (function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        if (e = Number(e), isNaN(e)) return "";
                        n.callbackTimers.push(setTimeout((function () {
                            return n.changeSlide({
                                message: "index",
                                index: e,
                                currentSlide: n.state.currentSlide
                            }, t)
                        }), 0))
                    })), w(E(E(n)), "play", (function () {
                        var e;
                        if (n.props.rtl) e = n.state.currentSlide - n.props.slidesToScroll;
                        else {
                            if (!(0, s.canGoNext)(b({}, n.props, n.state))) return !1;
                            e = n.state.currentSlide + n.props.slidesToScroll
                        }
                        n.slideHandler(e)
                    })), w(E(E(n)), "autoPlay", (function (e) {
                        n.autoplayTimer && clearInterval(n.autoplayTimer);
                        var t = n.state.autoplaying;
                        if ("update" === e) {
                            if ("hovered" === t || "focused" === t || "paused" === t) return
                        } else if ("leave" === e) {
                            if ("paused" === t || "focused" === t) return
                        } else if ("blur" === e && ("paused" === t || "hovered" === t)) return;
                        n.autoplayTimer = setInterval(n.play, n.props.autoplaySpeed + 50), n.setState({
                            autoplaying: "playing"
                        })
                    })), w(E(E(n)), "pause", (function (e) {
                        n.autoplayTimer && (clearInterval(n.autoplayTimer), n.autoplayTimer = null);
                        var t = n.state.autoplaying;
                        "paused" === e ? n.setState({
                            autoplaying: "paused"
                        }) : "focused" === e ? "hovered" !== t && "playing" !== t || n.setState({
                            autoplaying: "focused"
                        }) : "playing" === t && n.setState({
                            autoplaying: "hovered"
                        })
                    })), w(E(E(n)), "onDotsOver", (function () {
                        return n.props.autoplay && n.pause("hovered")
                    })), w(E(E(n)), "onDotsLeave", (function () {
                        return n.props.autoplay && "hovered" === n.state.autoplaying && n.autoPlay("leave")
                    })), w(E(E(n)), "onTrackOver", (function () {
                        return n.props.autoplay && n.pause("hovered")
                    })), w(E(E(n)), "onTrackLeave", (function () {
                        return n.props.autoplay && "hovered" === n.state.autoplaying && n.autoPlay("leave")
                    })), w(E(E(n)), "onSlideFocus", (function () {
                        return n.props.autoplay && n.pause("focused")
                    })), w(E(E(n)), "onSlideBlur", (function () {
                        return n.props.autoplay && "focused" === n.state.autoplaying && n.autoPlay("blur")
                    })), w(E(E(n)), "render", (function () {
                        var e, t, r, i = (0, l.default)("slick-slider", n.props.className, {
                                "slick-vertical": n.props.vertical,
                                "slick-initialized": !0
                            }),
                            o = b({}, n.props, n.state),
                            p = (0, s.extractObject)(o, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding"]),
                            f = n.props.pauseOnHover;
                        if (p = b({}, p, {
                                onMouseEnter: f ? n.onTrackOver : null,
                                onMouseLeave: f ? n.onTrackLeave : null,
                                onMouseOver: f ? n.onTrackOver : null,
                                focusOnSelect: n.props.focusOnSelect ? n.selectHandler : null
                            }), !0 === n.props.dots && n.state.slideCount >= n.props.slidesToShow) {
                            var h = (0, s.extractObject)(o, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]),
                                v = n.props.pauseOnDotsHover;
                            h = b({}, h, {
                                clickHandler: n.changeSlide,
                                onMouseEnter: v ? n.onDotsLeave : null,
                                onMouseOver: v ? n.onDotsOver : null,
                                onMouseLeave: v ? n.onDotsLeave : null
                            }), e = a.default.createElement(u.Dots, h)
                        }
                        var g = (0, s.extractObject)(o, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
                        g.clickHandler = n.changeSlide, n.props.arrows && (t = a.default.createElement(d.PrevArrow, g), r = a.default.createElement(d.NextArrow, g));
                        var y = null;
                        n.props.vertical && (y = {
                            height: n.state.listHeight
                        });
                        var E = null;
                        !1 === n.props.vertical ? !0 === n.props.centerMode && (E = {
                            padding: "0px " + n.props.centerPadding
                        }) : !0 === n.props.centerMode && (E = {
                            padding: n.props.centerPadding + " 0px"
                        });
                        var w = b({}, y, E),
                            S = n.props.touchMove,
                            k = {
                                className: "slick-list",
                                style: w,
                                onClick: n.clickHandler,
                                onMouseDown: S ? n.swipeStart : null,
                                onMouseMove: n.state.dragging && S ? n.swipeMove : null,
                                onMouseUp: S ? n.swipeEnd : null,
                                onMouseLeave: n.state.dragging && S ? n.swipeEnd : null,
                                onTouchStart: S ? n.swipeStart : null,
                                onTouchMove: n.state.dragging && S ? n.swipeMove : null,
                                onTouchEnd: S ? n.swipeEnd : null,
                                onTouchCancel: n.state.dragging && S ? n.swipeEnd : null,
                                onKeyDown: n.props.accessibility ? n.keyHandler : null
                            },
                            O = {
                                className: i,
                                dir: "ltr"
                            };
                        return n.props.unslick && (k = {
                            className: "slick-list"
                        }, O = {
                            className: i
                        }), a.default.createElement("div", O, n.props.unslick ? "" : t, a.default.createElement("div", m({
                            ref: n.listRefHandler
                        }, k), a.default.createElement(c.Track, m({
                            ref: n.trackRefHandler
                        }, p), n.props.children)), n.props.unslick ? "" : r, n.props.unslick ? "" : e)
                    })), n.list = null, n.track = null, n.state = b({}, i.default, {
                        currentSlide: n.props.initialSlide,
                        slideCount: a.default.Children.count(n.props.children)
                    }), n.callbackTimers = [], n.clickable = !0, n.debouncedResize = null, n
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && y(e, t)
                }(t, e), t
            }(a.default.Component);
            t.InnerSlider = S
        },
        "vPd/": function (e, t, n) {
            var a = n("kCCV"),
                r = n("IX3V").each;

            function i(e, t) {
                this.query = e, this.isUnconditional = t, this.handlers = [], this.mql = window.matchMedia(e);
                var n = this;
                this.listener = function (e) {
                    n.mql = e.currentTarget || e, n.assess()
                }, this.mql.addListener(this.listener)
            }
            i.prototype = {
                constuctor: i,
                addHandler: function (e) {
                    var t = new a(e);
                    this.handlers.push(t), this.matches() && t.on()
                },
                removeHandler: function (e) {
                    var t = this.handlers;
                    r(t, (function (n, a) {
                        if (n.equals(e)) return n.destroy(), !t.splice(a, 1)
                    }))
                },
                matches: function () {
                    return this.mql.matches || this.isUnconditional
                },
                clear: function () {
                    r(this.handlers, (function (e) {
                        e.destroy()
                    })), this.mql.removeListener(this.listener), this.handlers.length = 0
                },
                assess: function () {
                    var e = this.matches() ? "on" : "off";
                    r(this.handlers, (function (t) {
                        t[e]()
                    }))
                }
            }, e.exports = i
        },
        wZXL: function (e, t, n) {
            var a = n("vPd/"),
                r = n("IX3V"),
                i = r.each,
                o = r.isFunction,
                l = r.isArray;

            function s() {
                if (!window.matchMedia) throw new Error("matchMedia not present, legacy browsers require a polyfill");
                this.queries = {}, this.browserIsIncapable = !window.matchMedia("only all").matches
            }
            s.prototype = {
                constructor: s,
                register: function (e, t, n) {
                    var r = this.queries,
                        s = n && this.browserIsIncapable;
                    return r[e] || (r[e] = new a(e, s)), o(t) && (t = {
                        match: t
                    }), l(t) || (t = [t]), i(t, (function (t) {
                        o(t) && (t = {
                            match: t
                        }), r[e].addHandler(t)
                    })), this
                },
                unregister: function (e, t) {
                    var n = this.queries[e];
                    return n && (t ? n.removeHandler(t) : (n.clear(), delete this.queries[e])), this
                }
            }, e.exports = s
        },
        x9Za: function (e, t, n) {
            "use strict";
            n("DNiP"), n("XfO3"), n("HEwt"), n("LK8F"), n("SRfc"), n("xfY5"), n("V+eJ"), n("8+KV"), n("0l/t"), n("ioFf"), n("rGqo"), n("yt8O"), n("Btvt"), n("RW0V"), n("HAE/"), Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.canUseDOM = t.slidesOnLeft = t.slidesOnRight = t.siblingDirection = t.getTotalSlides = t.getPostClones = t.getPreClones = t.getTrackLeft = t.getTrackAnimateCSS = t.getTrackCSS = t.checkSpecKeys = t.getSlideCount = t.checkNavigable = t.getNavigableIndexes = t.swipeEnd = t.swipeMove = t.swipeStart = t.keyHandler = t.changeSlide = t.slideHandler = t.initializedState = t.extractObject = t.canGoNext = t.getSwipeDirection = t.getHeight = t.getWidth = t.lazySlidesOnRight = t.lazySlidesOnLeft = t.lazyEndIndex = t.lazyStartIndex = t.getRequiredLazySlides = t.getOnDemandLazySlides = void 0;
            var a = i(n("q1tI")),
                r = i(n("i8i4"));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        a = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter((function (e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), a.forEach((function (t) {
                        l(e, t, n[t])
                    }))
                }
                return e
            }

            function l(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var s = function (e) {
                for (var t = [], n = c(e), a = u(e), r = n; r < a; r++) e.lazyLoadedList.indexOf(r) < 0 && t.push(r);
                return t
            };
            t.getOnDemandLazySlides = s;
            t.getRequiredLazySlides = function (e) {
                for (var t = [], n = c(e), a = u(e), r = n; r < a; r++) t.push(r);
                return t
            };
            var c = function (e) {
                return e.currentSlide - d(e)
            };
            t.lazyStartIndex = c;
            var u = function (e) {
                return e.currentSlide + p(e)
            };
            t.lazyEndIndex = u;
            var d = function (e) {
                return e.centerMode ? Math.floor(e.slidesToShow / 2) + (parseInt(e.centerPadding) > 0 ? 1 : 0) : 0
            };
            t.lazySlidesOnLeft = d;
            var p = function (e) {
                return e.centerMode ? Math.floor((e.slidesToShow - 1) / 2) + 1 + (parseInt(e.centerPadding) > 0 ? 1 : 0) : e.slidesToShow
            };
            t.lazySlidesOnRight = p;
            var f = function (e) {
                return e && e.offsetWidth || 0
            };
            t.getWidth = f;
            var m = function (e) {
                return e && e.offsetHeight || 0
            };
            t.getHeight = m;
            var h = function (e) {
                var t, n, a, r, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return t = e.startX - e.curX, n = e.startY - e.curY, a = Math.atan2(n, t), (r = Math.round(180 * a / Math.PI)) < 0 && (r = 360 - Math.abs(r)), r <= 45 && r >= 0 || r <= 360 && r >= 315 ? "left" : r >= 135 && r <= 225 ? "right" : !0 === i ? r >= 35 && r <= 135 ? "up" : "down" : "vertical"
            };
            t.getSwipeDirection = h;
            var v = function (e) {
                var t = !0;
                return e.infinite || (e.centerMode && e.currentSlide >= e.slideCount - 1 ? t = !1 : (e.slideCount <= e.slidesToShow || e.currentSlide >= e.slideCount - e.slidesToShow) && (t = !1)), t
            };
            t.canGoNext = v;
            t.extractObject = function (e, t) {
                var n = {};
                return t.forEach((function (t) {
                    return n[t] = e[t]
                })), n
            };
            t.initializedState = function (e) {
                var t, n = a.default.Children.count(e.children),
                    i = Math.ceil(f(r.default.findDOMNode(e.listRef))),
                    o = Math.ceil(f(r.default.findDOMNode(e.trackRef)));
                if (e.vertical) t = i;
                else {
                    var l = e.centerMode && 2 * parseInt(e.centerPadding);
                    "string" == typeof e.centerPadding && "%" === e.centerPadding.slice(-1) && (l *= i / 100), t = Math.ceil((i - l) / e.slidesToShow)
                }
                var c = r.default.findDOMNode(e.listRef) && m(r.default.findDOMNode(e.listRef).querySelector('[data-index="0"]')),
                    u = c * e.slidesToShow,
                    d = void 0 === e.currentSlide ? e.initialSlide : e.currentSlide;
                e.rtl && void 0 === e.currentSlide && (d = n - 1 - e.initialSlide);
                var p = e.lazyLoadedList || [],
                    h = s({
                        currentSlide: d,
                        lazyLoadedList: p
                    });
                p.concat(h);
                var v = {
                    slideCount: n,
                    slideWidth: t,
                    listWidth: i,
                    trackWidth: o,
                    currentSlide: d,
                    slideHeight: c,
                    listHeight: u,
                    lazyLoadedList: p
                };
                return null === e.autoplaying && e.autoplay && (v.autoplaying = "playing"), v
            };
            t.slideHandler = function (e) {
                var t = e.waitForAnimate,
                    n = e.animating,
                    a = e.fade,
                    r = e.infinite,
                    i = e.index,
                    l = e.slideCount,
                    c = e.lazyLoadedList,
                    u = e.lazyLoad,
                    d = e.currentSlide,
                    p = e.centerMode,
                    f = e.slidesToScroll,
                    m = e.slidesToShow,
                    h = e.useCSS;
                if (t && n) return {};
                var b, g, y, E = i,
                    O = {},
                    _ = {};
                if (a) {
                    if (!r && (i < 0 || i >= l)) return {};
                    i < 0 ? E = i + l : i >= l && (E = i - l), u && c.indexOf(E) < 0 && c.push(E), O = {
                        animating: !0,
                        currentSlide: E,
                        lazyLoadedList: c
                    }, _ = {
                        animating: !1
                    }
                } else b = E, E < 0 ? (b = E + l, r ? l % f != 0 && (b = l - l % f) : b = 0) : !v(e) && E > d ? E = b = d : p && E >= l ? (E = r ? l : l - 1, b = r ? 0 : l - 1) : E >= l && (b = E - l, r ? l % f != 0 && (b = 0) : b = l - m), g = k(o({}, e, {
                    slideIndex: E
                })), y = k(o({}, e, {
                    slideIndex: b
                })), r || (g === y && (E = b), g = y), u && c.concat(s(o({}, e, {
                    currentSlide: E
                }))), h ? (O = {
                    animating: !0,
                    currentSlide: b,
                    trackStyle: S(o({}, e, {
                        left: g
                    })),
                    lazyLoadedList: c
                }, _ = {
                    animating: !1,
                    currentSlide: b,
                    trackStyle: w(o({}, e, {
                        left: y
                    })),
                    swipeLeft: null
                }) : O = {
                    currentSlide: b,
                    trackStyle: w(o({}, e, {
                        left: y
                    })),
                    lazyLoadedList: c
                };
                return {
                    state: O,
                    nextState: _
                }
            };
            t.changeSlide = function (e, t) {
                var n, a, r, i, l = e.slidesToScroll,
                    s = e.slidesToShow,
                    c = e.slideCount,
                    u = e.currentSlide,
                    d = e.lazyLoad,
                    p = e.infinite;
                if (n = c % l != 0 ? 0 : (c - u) % l, "previous" === t.message) i = u - (r = 0 === n ? l : s - n), d && !p && (i = -1 === (a = u - r) ? c - 1 : a);
                else if ("next" === t.message) i = u + (r = 0 === n ? l : n), d && !p && (i = (u + l) % c + n);
                else if ("dots" === t.message) {
                    if ((i = t.index * t.slidesToScroll) === t.currentSlide) return null
                } else if ("children" === t.message) {
                    if ((i = t.index) === t.currentSlide) return null;
                    if (p) {
                        var f = x(o({}, e, {
                            targetSlide: i
                        }));
                        i > t.currentSlide && "left" === f ? i -= c : i < t.currentSlide && "right" === f && (i += c)
                    }
                } else if ("index" === t.message && (i = Number(t.index)) === t.currentSlide) return null;
                return i
            };
            t.keyHandler = function (e, t, n) {
                return e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !t ? "" : 37 === e.keyCode ? n ? "next" : "previous" : 39 === e.keyCode ? n ? "previous" : "next" : ""
            };
            t.swipeStart = function (e, t, n) {
                return "IMG" === e.target.tagName && e.preventDefault(), !t || !n && -1 !== e.type.indexOf("mouse") ? "" : {
                    dragging: !0,
                    touchObject: {
                        startX: e.touches ? e.touches[0].pageX : e.clientX,
                        startY: e.touches ? e.touches[0].pageY : e.clientY,
                        curX: e.touches ? e.touches[0].pageX : e.clientX,
                        curY: e.touches ? e.touches[0].pageY : e.clientY
                    }
                }
            };
            t.swipeMove = function (e, t) {
                var n = t.scrolling,
                    a = t.animating,
                    r = t.vertical,
                    i = t.swipeToSlide,
                    l = t.verticalSwiping,
                    s = t.rtl,
                    c = t.currentSlide,
                    u = t.edgeFriction,
                    d = t.edgeDragged,
                    p = t.onEdge,
                    f = t.swiped,
                    m = t.swiping,
                    b = t.slideCount,
                    g = t.slidesToScroll,
                    y = t.infinite,
                    E = t.touchObject,
                    S = t.swipeEvent,
                    O = t.listHeight,
                    _ = t.listWidth;
                if (!n) {
                    if (a) return e.preventDefault();
                    r && i && l && e.preventDefault();
                    var N, x = {},
                        T = k(t);
                    E.curX = e.touches ? e.touches[0].pageX : e.clientX, E.curY = e.touches ? e.touches[0].pageY : e.clientY, E.swipeLength = Math.round(Math.sqrt(Math.pow(E.curX - E.startX, 2)));
                    var M = Math.round(Math.sqrt(Math.pow(E.curY - E.startY, 2)));
                    if (!l && !m && M > 10) return {
                        scrolling: !0
                    };
                    l && (E.swipeLength = M);
                    var L = (s ? -1 : 1) * (E.curX > E.startX ? 1 : -1);
                    l && (L = E.curY > E.startY ? 1 : -1);
                    var C = Math.ceil(b / g),
                        j = h(t.touchObject, l),
                        P = E.swipeLength;
                    return y || (0 === c && "right" === j || c + 1 >= C && "left" === j || !v(t) && "left" === j) && (P = E.swipeLength * u, !1 === d && p && (p(j), x.edgeDragged = !0)), !f && S && (S(j), x.swiped = !0), N = r ? T + P * (O / _) * L : s ? T - P * L : T + P * L, l && (N = T + P * L), x = o({}, x, {
                        touchObject: E,
                        swipeLeft: N,
                        trackStyle: w(o({}, t, {
                            left: N
                        }))
                    }), Math.abs(E.curX - E.startX) < .8 * Math.abs(E.curY - E.startY) ? x : (E.swipeLength > 10 && (x.swiping = !0, e.preventDefault()), x)
                }
            };
            t.swipeEnd = function (e, t) {
                var n = t.dragging,
                    a = t.swipe,
                    r = t.touchObject,
                    i = t.listWidth,
                    l = t.touchThreshold,
                    s = t.verticalSwiping,
                    c = t.listHeight,
                    u = t.currentSlide,
                    d = t.swipeToSlide,
                    p = t.scrolling,
                    f = t.onSwipe;
                if (!n) return a && e.preventDefault(), {};
                var m = s ? c / l : i / l,
                    v = h(r, s),
                    b = {
                        dragging: !1,
                        edgeDragged: !1,
                        scrolling: !1,
                        swiping: !1,
                        swiped: !1,
                        swipeLeft: null,
                        touchObject: {}
                    };
                if (p) return b;
                if (!r.swipeLength) return b;
                if (r.swipeLength > m) {
                    var E, w;
                    switch (e.preventDefault(), f && f(v), v) {
                        case "left":
                        case "up":
                            w = u + y(t), E = d ? g(t, w) : w, b.currentDirection = 0;
                            break;
                        case "right":
                        case "down":
                            w = u - y(t), E = d ? g(t, w) : w, b.currentDirection = 1;
                            break;
                        default:
                            E = u
                    }
                    b.triggerSlideHandler = E
                } else {
                    var O = k(t);
                    b.trackStyle = S(o({}, t, {
                        left: O
                    }))
                }
                return b
            };
            var b = function (e) {
                for (var t = e.infinite ? 2 * e.slideCount : e.slideCount, n = e.infinite ? -1 * e.slidesToShow : 0, a = e.infinite ? -1 * e.slidesToShow : 0, r = []; n < t;) r.push(n), n = a + e.slidesToScroll, a += Math.min(e.slidesToScroll, e.slidesToShow);
                return r
            };
            t.getNavigableIndexes = b;
            var g = function (e, t) {
                var n = b(e),
                    a = 0;
                if (t > n[n.length - 1]) t = n[n.length - 1];
                else
                    for (var r in n) {
                        if (t < n[r]) {
                            t = a;
                            break
                        }
                        a = n[r]
                    }
                return t
            };
            t.checkNavigable = g;
            var y = function (e) {
                var t = e.centerMode ? e.slideWidth * Math.floor(e.slidesToShow / 2) : 0;
                if (e.swipeToSlide) {
                    var n, a = r.default.findDOMNode(e.listRef).querySelectorAll(".slick-slide");
                    if (Array.from(a).every((function (a) {
                            if (e.vertical) {
                                if (a.offsetTop + m(a) / 2 > -1 * e.swipeLeft) return n = a, !1
                            } else if (a.offsetLeft - t + f(a) / 2 > -1 * e.swipeLeft) return n = a, !1;
                            return !0
                        })), !n) return 0;
                    var i = !0 === e.rtl ? e.slideCount - e.currentSlide : e.currentSlide;
                    return Math.abs(n.dataset.index - i) || 1
                }
                return e.slidesToScroll
            };
            t.getSlideCount = y;
            var E = function (e, t) {
                return t.reduce((function (t, n) {
                    return t && e.hasOwnProperty(n)
                }), !0) ? null : console.error("Keys Missing:", e)
            };
            t.checkSpecKeys = E;
            var w = function (e) {
                var t, n;
                E(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
                var a = e.slideCount + 2 * e.slidesToShow;
                e.vertical ? n = a * e.slideHeight : t = N(e) * e.slideWidth;
                var r = {
                    opacity: 1,
                    transition: "",
                    WebkitTransition: ""
                };
                e.useTransform ? r = o({}, r, {
                    WebkitTransform: e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)",
                    transform: e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)",
                    msTransform: e.vertical ? "translateY(" + e.left + "px)" : "translateX(" + e.left + "px)"
                }) : e.vertical ? r.top = e.left : r.left = e.left;
                return e.fade && (r = {
                    opacity: 1
                }), t && (r.width = t), n && (r.height = n), window && !window.addEventListener && window.attachEvent && (e.vertical ? r.marginTop = e.left + "px" : r.marginLeft = e.left + "px"), r
            };
            t.getTrackCSS = w;
            var S = function (e) {
                E(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
                var t = w(e);
                return e.useTransform ? (t.WebkitTransition = "-webkit-transform " + e.speed + "ms " + e.cssEase, t.transition = "transform " + e.speed + "ms " + e.cssEase) : e.vertical ? t.transition = "top " + e.speed + "ms " + e.cssEase : t.transition = "left " + e.speed + "ms " + e.cssEase, t
            };
            t.getTrackAnimateCSS = S;
            var k = function (e) {
                if (e.unslick) return 0;
                E(e, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
                var t, n, a = e.slideIndex,
                    i = e.trackRef,
                    o = e.infinite,
                    l = e.centerMode,
                    s = e.slideCount,
                    c = e.slidesToShow,
                    u = e.slidesToScroll,
                    d = e.slideWidth,
                    p = e.listWidth,
                    f = e.variableWidth,
                    m = e.slideHeight,
                    h = e.fade,
                    v = e.vertical;
                if (h || 1 === e.slideCount) return 0;
                var b = 0;
                if (o ? (b = -O(e), s % u != 0 && a + u > s && (b = -(a > s ? c - (a - s) : s % u)), l && (b += parseInt(c / 2))) : (s % u != 0 && a + u > s && (b = c - s % u), l && (b = parseInt(c / 2))), t = v ? a * m * -1 + b * m : a * d * -1 + b * d, !0 === f) {
                    var g, y = r.default.findDOMNode(i);
                    if (g = a + O(e), t = (n = y && y.childNodes[g]) ? -1 * n.offsetLeft : 0, !0 === l) {
                        g = o ? a + O(e) : a, n = y && y.children[g], t = 0;
                        for (var w = 0; w < g; w++) t -= y && y.children[w] && y.children[w].offsetWidth;
                        t -= parseInt(e.centerPadding), t += n && (p - n.offsetWidth) / 2
                    }
                }
                return t
            };
            t.getTrackLeft = k;
            var O = function (e) {
                return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0)
            };
            t.getPreClones = O;
            var _ = function (e) {
                return e.unslick || !e.infinite ? 0 : e.slideCount
            };
            t.getPostClones = _;
            var N = function (e) {
                return 1 === e.slideCount ? 1 : O(e) + e.slideCount + _(e)
            };
            t.getTotalSlides = N;
            var x = function (e) {
                return e.targetSlide > e.currentSlide ? e.targetSlide > e.currentSlide + T(e) ? "left" : "right" : e.targetSlide < e.currentSlide - M(e) ? "right" : "left"
            };
            t.siblingDirection = x;
            var T = function (e) {
                var t = e.slidesToShow,
                    n = e.centerMode,
                    a = e.rtl,
                    r = e.centerPadding;
                if (n) {
                    var i = (t - 1) / 2 + 1;
                    return parseInt(r) > 0 && (i += 1), a && t % 2 == 0 && (i += 1), i
                }
                return a ? 0 : t - 1
            };
            t.slidesOnRight = T;
            var M = function (e) {
                var t = e.slidesToShow,
                    n = e.centerMode,
                    a = e.rtl,
                    r = e.centerPadding;
                if (n) {
                    var i = (t - 1) / 2 + 1;
                    return parseInt(r) > 0 && (i += 1), a || t % 2 != 0 || (i += 1), i
                }
                return a ? t - 1 : 0
            };
            t.slidesOnLeft = M;
            t.canUseDOM = function () {
                return !("undefined" == typeof window || !window.document || !window.document.createElement)
            }
        }
    }
]);
//# sourceMappingURL=component---src-pages-index-js-b0ae40686a7ee4f7c731.js.map
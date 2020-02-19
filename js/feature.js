(window.webpackJsonp = window.webpackJsonp || []).push([
    [29], {
        "3ibD": function (e, a, t) {
            "use strict";
            t.r(a), t.d(a, "default", (function () {
                return f
            })), t.d(a, "pageQuery", (function () {
                return h
            }));
            t("tUrg"), t("dRSK");
            var c = t("q1tI"),
                l = t.n(c),
                r = t("fhwx"),
                s = t.n(r),
                n = t("Bl7J"),
                o = t("EVdn"),
                i = t.n(o),
                m = t("vrFN"),
                d = t("mHSJ"),
                u = t("n2p3"),
                p = t("J2fF"),
                v = t("nwud");
            var f = function (e) {
                    var a, t;

                    function c() {
                        return e.apply(this, arguments) || this
                    }
                    t = e, (a = c).prototype = Object.create(t.prototype), a.prototype.constructor = a, a.__proto__ = t;
                    var r = c.prototype;
                    return r.componentDidMount = function () {
                        i()(document).ready((function () {
                            e(), i()(".content").hover((function () {
                                i()(".flyout").removeClass("hidden")
                            }), (function () {
                                i()(".flyout").addClass("hidden")
                            }))
                        })), i()(".tab-sub-nav li a").click((function () {
                            i()("html, body").animate({
                                scrollTop: i()(i()(this).attr("href")).offset().top
                            }, 800)
                        }));
                        var e = function () {
                                i()(".one-pager-anchor a").click((function () {
                                    return i()(".one-pager-anchor li").removeClass("active"), i()(this).parent("li").addClass("active"), i()("html, body").animate({
                                        scrollTop: i()(i()(this).attr("href")).offset().top
                                    }, 800), !1
                                }))
                            },
                            a = i()(".features-wrap .active").children("a").attr("href");
                        i()(".features-wrap li a").click((function () {
                            i()(".features-wrap .active").removeClass("active"), i()(this).parent().addClass("active"), a = i()(this).attr("href")
                        })), i()(".features-wrap li a").hover((function () {
                            var e = i()(this).attr("href");
                            i()(".slider-info-sec .active").removeClass("active"), i()(e).addClass("active")
                        }), (function () {
                            i()(".slider-info-sec .active").removeClass("active"), i()(a).addClass("active")
                        })), i()(".features-tab ul li").hover((function () {
                            i()(".features-tab ul .active").removeClass("active"), i()(this).addClass("active"), i()(this).find("a").addClass("active");
                            var e = i()(this).find("a").attr("href");
                            i()("#feature-tabs .active").removeClass("active show"), i()(e).addClass("active show")
                        })), i()(window).scroll((function () {
                            var e = i()(window).scrollTop();
                            i()(".section-row").each((function (a) {
                                i()(this).position().top <= e - 510 && (i()(".tab-sub-nav li.active").removeClass("active"), i()(".tab-sub-nav li").eq(a).addClass("active"))
                            }))
                        }))
                    }, r.render = function () {
                        var e = this.props.data.contentstackHomeFeature;
                        return l.a.createElement(n.a, null, l.a.createElement(m.a, {
                            title: e.seo.title,
                            description: e.seo.description
                        }), l.a.createElement(p.a, {
                            banner: e.banner_section.background_image.url,
                            title: e.banner_section.title,
                            desc: e.banner_section.desc
                        }), l.a.createElement("div", {
                            className: "feature-pg-wrap"
                        }, l.a.createElement("div", {
                            className: "blog-sub-nav fixed-sub-menu"
                        }, l.a.createElement("div", {
                            className: "container-fluid p-0 tab-section-wrap"
                        }, l.a.createElement("div", {
                            className: "sub-nav-head subnav-scroll resource-nav clearfix"
                        }, l.a.createElement(u.a, {
                            sub_nav_section: e.sub_nav_section,
                            isSearch: !1,
                            searchPlaceholder: "",
                            active: !0
                        })))), l.a.createElement("section", {
                            className: "section-row feature-section",
                            id: "1"
                        }, l.a.createElement("div", {
                            className: "container"
                        }, l.a.createElement("div", {
                            className: "row"
                        }, l.a.createElement("div", {
                            className: "col-md-12 col-xs-12 text-center"
                        }, l.a.createElement("h2", null, s()(e.collaboration_section.title)), l.a.createElement("p", null, s()(e.collaboration_section.desc)))), l.a.createElement("div", {
                            className: "features-section-tab"
                        }, l.a.createElement("ul", {
                            className: "row nav nav-tabs nav-tabs-hover features-wrap"
                        }, e.collaboration_section.collaboration.map((function (e, a) {
                            return a += 1, l.a.createElement("li", {
                                className: 1 === a ? "active col-md-4 col-sm-6 col-xs-12 features-col" : "col-md-4 col-sm-6 col-xs-12 features-col",
                                key: a
                            }, l.a.createElement("a", {
                                className: "features",
                                "data-toggle": "tab",
                                href: "#features-tab-" + a
                            }, e.title))
                        }))), l.a.createElement("div", {
                            className: "tab-content slider-info-sec"
                        }, e.collaboration_section.collaboration.map((function (e, a) {
                            return a += 1, l.a.createElement("div", {
                                id: "features-tab-" + a,
                                className: 1 === a ? "active tab-pane " : "tab-pane",
                                key: a
                            }, l.a.createElement("div", {
                                className: "row"
                            }, l.a.createElement("div", {
                                className: "flexbox flex-vcenter flex-wrap"
                            }, l.a.createElement("div", {
                                className: "col-md-5 col-sm-12 col-xs-12 flex-item slide-desc"
                            }, l.a.createElement("p", null, s()(e.desc))), l.a.createElement("div", {
                                className: "col-md-7 col-sm-12 col-xs-12 flex-item slide-img"
                            }, l.a.createElement(v.a, {
                                alt: e.image.title,
                                className: "img-responsive features-slide-img",
                                src: e.image.url
                            })))))
                        })))))), l.a.createElement("section", {
                            className: "section-row bet-cms gray-bg",
                            id: "2"
                        }, l.a.createElement("div", {
                            className: "container"
                        }, l.a.createElement("div", {
                            className: "row"
                        }, l.a.createElement("div", {
                            className: "col-md-12"
                        }, l.a.createElement("div", {
                            className: "col-md-12 col-xs-12 sec-desc-width text-center"
                        }, l.a.createElement("h2", null, s()(e.better_cms_section.title)), l.a.createElement("p", null, s()(e.better_cms_section.desc))))), l.a.createElement("div", {
                            className: "row"
                        }, e.better_cms_section.better_cms.map((function (e, a) {
                            return l.a.createElement("div", {
                                className: "col-md-4 col-sm-4 col-xs-12 text-center features-sec-col",
                                key: a
                            }, l.a.createElement("div", {
                                className: "heading-icon"
                            }, l.a.createElement(v.a, {
                                alt: e.image.title,
                                src: e.image.url
                            })), l.a.createElement("h3", null, s()(e.title)), l.a.createElement("p", null, s()(e.desc)))
                        }))))), l.a.createElement("section", {
                            className: "section-row enterprise clearfix",
                            id: "3"
                        }, l.a.createElement("div", {
                            className: "container"
                        }, l.a.createElement("div", {
                            className: "row"
                        }, l.a.createElement("div", {
                            className: "sec-desc-width col-md-12 col-xs-12 text-center"
                        }, l.a.createElement("h2", null, s()(e.enterprise_section.title)), l.a.createElement("p", null, s()(e.enterprise_section.desc)))), l.a.createElement("div", {
                            className: "row"
                        }, e.enterprise_section.enterprise.map((function (e, a) {
                            return l.a.createElement("div", {
                                className: "col-md-3 text-center feature-point clearfix  ",
                                key: a
                            }, l.a.createElement("div", {
                                className: "heading-icon"
                            }, l.a.createElement(v.a, {
                                alt: e.image.title,
                                src: e.image.url
                            })), l.a.createElement("div", {
                                className: "icon-info"
                            }, l.a.createElement("h3", null, s()(e.title)), l.a.createElement("p", null, s()(e.desc))))
                        }))))), l.a.createElement("section", {
                            className: "section-row integration gray-bg clearfix",
                            id: "4"
                        }, l.a.createElement("div", {
                            className: "container"
                        }, l.a.createElement("div", {
                            className: "row"
                        }, l.a.createElement("div", {
                            className: "sec-desc-width col-md-12 col-xs-12 text-center"
                        }, l.a.createElement("h2", null, s()(e.integrations_section.title)), l.a.createElement("p", null, s()(e.integrations_section.desc)))), l.a.createElement("div", {
                            className: "row"
                        }, e.integrations_section.integrations.map((function (e, a) {
                            return l.a.createElement("div", {
                                className: "col-md-4 col-xs-12 text-center features-sec-col",
                                key: a
                            }, l.a.createElement("div", {
                                className: "heading-icon"
                            }, l.a.createElement(v.a, {
                                alt: e.image.title,
                                src: e.image.url
                            })), l.a.createElement("h3", null, s()(e.title)), l.a.createElement("p", null, s()(e.desc)))
                        }))))), l.a.createElement("section", {
                            className: "section-row omni-channel clearfix",
                            id: "5"
                        }, l.a.createElement("div", {
                            className: "container"
                        }, l.a.createElement("div", {
                            className: "row"
                        }, l.a.createElement("div", {
                            className: "sec-desc-width col-md-12 col-xs-12 text-center"
                        }, l.a.createElement("h2", null, s()(e.content_delivery_section.title)), l.a.createElement("p", null, s()(e.content_delivery_section.desc)))), l.a.createElement("div", {
                            className: "row"
                        }, l.a.createElement("div", {
                            className: "col-md-12"
                        }, l.a.createElement("div", {
                            className: "row feature-row features-tab"
                        }, l.a.createElement("div", {
                            className: "flexbox flex-vcenter flex-wrap"
                        }, l.a.createElement("div", {
                            className: "left col-md-4 col-xs-12 text-left content"
                        }, l.a.createElement("ul", {
                            className: "nav nav-tabs nav-tabs-hover"
                        }, e.content_delivery_section.content_delivery.map((function (e, a) {
                            return a += 1, l.a.createElement("li", {
                                className: 1 === a ? "active" : "",
                                key: a
                            }, l.a.createElement("a", {
                                "data-toggle": "tab",
                                href: "#featuretab-" + a
                            }, l.a.createElement("h3", null, s()(e.title)), l.a.createElement("p", null, s()(e.desc))))
                        })))), l.a.createElement("div", {
                            id: "feature-tabs",
                            className: "rigth col-md-8 col-xs-12 text-center tab-content"
                        }, e.content_delivery_section.content_delivery.map((function (e, a) {
                            return a += 1, l.a.createElement("div", {
                                id: "featuretab-" + a,
                                className: 1 === a ? "active tab-pane " : "tab-pane",
                                key: a
                            }, l.a.createElement(v.a, {
                                alt: e.file.title,
                                className: "img-responsive feature-graphic",
                                src: e.file.url
                            }))
                        }))))))))), l.a.createElement("section", {
                            className: "section-row dev-friendly",
                            id: "6"
                        }, l.a.createElement("div", {
                            className: "container"
                        }, l.a.createElement("div", {
                            className: "row"
                        }, l.a.createElement("div", {
                            className: "sec-desc-width col-md-12col-xs-12 text-center"
                        }, l.a.createElement("h2", null, s()(e.developer_friendly_section.title)), l.a.createElement("p", null, s()(e.developer_friendly_section.desc)))), l.a.createElement("div", {
                            className: "row"
                        }, l.a.createElement("div", {
                            className: "dev-wrap flexbox flex-wrap"
                        }, e.developer_friendly_section.developer_friendly.map((function (e, a) {
                            return l.a.createElement("div", {
                                className: "col-md-4 col-sm-6 col-xs-12 dev-service-col",
                                key: a
                            }, l.a.createElement("div", {
                                className: "dev-services",
                                style: {}
                            }, l.a.createElement("h3", null, s()(e.title)), l.a.createElement("p", null, s()(e.desc)), l.a.createElement("span", {
                                className: "dev-services-icon",
                                title: e.image.title,
                                style: {
                                    backgroundImage: "url(" + e.image.url + ")",
                                    display: "block"
                                }
                            })))
                        })))))), l.a.createElement("section", {
                            className: "section-row all-feature-wrap clearfix",
                            id: "7"
                        }, l.a.createElement("div", {
                            className: "container"
                        }, l.a.createElement("div", {
                            className: "row"
                        }, l.a.createElement("div", {
                            className: "col-md-12 col-xs-12 text-center"
                        }, l.a.createElement("h2", null, s()(e.all_features_section.title)), l.a.createElement("p", null, s()(e.all_features_section.desc)))), l.a.createElement("div", {
                            className: "row"
                        }, l.a.createElement("div", {
                            className: "row col-md-12 all-features clearfix"
                        }, e.all_features_section.all_features.map((function (e, a) {
                            return l.a.createElement("ul", {
                                className: "col-md-4 col-sm-6 col-xs-12 features-list",
                                key: a
                            }, l.a.createElement("li", null, e.title))
                        })))))), l.a.createElement("section", {
                            className: "section-row contact-us clearfix"
                        }, l.a.createElement(d.a, {
                            title: e.cta_section.title,
                            requestADemoTitle: e.cta_section.try_for_free.title,
                            requestADemoUrl: e.cta_section.try_for_free.link,
                            tryForFreeTitle: e.cta_section.request_a_demo.title,
                            tryForFreeUrl: e.cta_section.request_a_demo.link
                        }))))
                    }, c
                }(l.a.Component),
                h = "2815991208"
        },
        J2fF: function (e, a, t) {
            "use strict";
            t.d(a, "a", (function () {
                return n
            }));
            var c = t("q1tI"),
                l = t.n(c),
                r = t("fhwx"),
                s = t.n(r);
            var n = function (e) {
                var a, t;

                function c() {
                    return e.apply(this, arguments) || this
                }
                return t = e, (a = c).prototype = Object.create(t.prototype), a.prototype.constructor = a, a.__proto__ = t, c.prototype.render = function () {
                    var e = this.props.banner,
                        a = this.props.title,
                        t = this.props.desc;
                    return l.a.createElement("section", {
                        className: "hero-banner-section hero-banner-common"
                    }, l.a.createElement("div", {
                        className: "bg-image",
                        style: {
                            backgroundImage: "url(" + e + ")"
                        }
                    }), l.a.createElement("div", {
                        className: "banner-details"
                    }, l.a.createElement("div", {
                        className: "container"
                    }, l.a.createElement("div", {
                        className: "row"
                    }, l.a.createElement("div", {
                        className: "col-md-12"
                    }, l.a.createElement("div", {
                        className: "banner-content"
                    }, l.a.createElement("h1", null, s()(a)), l.a.createElement("p", null, s()(t))))))))
                }, c
            }(l.a.Component)
        },
        mHSJ: function (e, a, t) {
            "use strict";
            t.d(a, "a", (function () {
                return o
            }));
            var c = t("q1tI"),
                l = t.n(c),
                r = t("fhwx"),
                s = t.n(r),
                n = t("Wbzz");
            var o = function (e) {
                var a, t;

                function c() {
                    return e.apply(this, arguments) || this
                }
                return t = e, (a = c).prototype = Object.create(t.prototype), a.prototype.constructor = a, a.__proto__ = t, c.prototype.render = function () {
                    var e = this.props.defaults,
                        a = this.props.url ? this.props.url : "https://images.contentstack.io/v3/assets/blt1264fa9b448be721/bltb6939b357fb70b33/5d08ba3196d2d1b65a981c69/download?format=png8&auto=webp",
                        t = this.props.title ? this.props.title : e.contact_us_section.title,
                        c = this.props.tryForFreeTitle ? this.props.tryForFreeTitle : e.contact_us_section.button_text,
                        r = this.props.tryForFreeUrl ? this.props.tryForFreeUrl : "company/contact-us?subject=free%20trial",
                        o = this.props.requestADemoTitle ? this.props.requestADemoTitle : "REQUEST A DEMO",
                        i = this.props.requestADemoUrl ? this.props.requestADemoUrl : "company/contact-us?subject=get%20a%20demo";
                    return l.a.createElement("div", {
                        className: "tryforfree",
                        style: {
                            backgroundImage: "url(" + a + ")"
                        }
                    }, l.a.createElement("div", {
                        className: "container"
                    }, l.a.createElement("div", {
                        className: "row"
                    }, l.a.createElement("div", {
                        className: "content col-md-12"
                    }, l.a.createElement("div", {
                        className: ""
                    }, l.a.createElement("h2", {
                        className: "head-text"
                    }, s()(t)), l.a.createElement("div", {
                        className: "rounded-pill button"
                    }, l.a.createElement(n.Link, {
                        to: i
                    }, o)), l.a.createElement("div", {
                        id: "contact-global",
                        className: "contact-us-form text-left",
                        style: {
                            display: "none"
                        }
                    }, l.a.createElement("div", {
                        className: "features-demo-form"
                    }, l.a.createElement("form", {
                        id: "mktoForm_1035",
                        className: "demo-mkt-form"
                    }))), l.a.createElement("div", {
                        className: "try-free-button"
                    }, l.a.createElement(n.Link, {
                        to: r
                    }, c)))))))
                }, c
            }(l.a.Component)
        },
        n2p3: function (e, a, t) {
            "use strict";
            t.d(a, "a", (function () {
                return o
            }));
            t("OG14"), t("tUrg");
            var c = t("q1tI"),
                l = t.n(c),
                r = t("EVdn"),
                s = t.n(r),
                n = t("nwud");
            var o = function (e) {
                var a, t;

                function c(a) {
                    var t;
                    return (t = e.call(this, a) || this).state = {
                        searchValue: ""
                    }, t
                }
                t = e, (a = c).prototype = Object.create(t.prototype), a.prototype.constructor = a, a.__proto__ = t;
                var r = c.prototype;
                return r.componentWillReceiveProps = function (e) {
                    this.state.searchValue !== e.searchValue && this.setState({
                        searchValue: e.searchValue
                    })
                }, r.componentDidMount = function () {
                    s()(".nav-item").click((function () {
                        s()(this).addClass("active").siblings().removeClass("active")
                    })), s()(window).scroll((function () {
                        0 !== s()(".fixed-sub-menu").length && (s()(window).scrollTop() >= s()(".fixed-sub-menu").offset().top ? s()(".subnav-scroll").addClass("fixed") : s()(".subnav-scroll").removeClass("fixed"))
                    })).scroll(), s()(window).bind("resize", (function () {
                        s()(window).width() <= 991 && s()(".tab-sub-nav li").click((function () {
                            s()(".close").click()
                        }))
                    }))
                }, r.render = function () {
                    var e = this,
                        a = this.props.sub_nav_section,
                        t = this.props.isSearch,
                        c = this.props.searchPlaceholder,
                        r = this.props.active;
                    return a.sub_nav ? l.a.createElement("nav", {
                        className: "fixed-subnav container navbar navbar-expand-lg"
                    }, l.a.createElement("ul", {
                        className: "navbar-brand action-menu"
                    }, l.a.createElement("li", null, l.a.createElement("a", {
                        href: a.link
                    }, l.a.createElement(n.a, {
                        alt: a.logo.title,
                        src: a.logo.url
                    }))), l.a.createElement("li", null, l.a.createElement("a", {
                        className: "inactiveLink",
                        href: ""
                    }, a.title))), l.a.createElement("button", {
                        className: "navbar-toggler collapsed close",
                        type: "button",
                        "data-toggle": "collapse",
                        "data-target": "#navbarColor01",
                        "aria-controls": "navbarColor01",
                        "aria-expanded": "false",
                        "aria-label": "Toggle navigation"
                    }, l.a.createElement("span", {
                        className: "navbar-toggler-icon black-icon"
                    })), l.a.createElement("div", {
                        className: "collapse navbar-collapse",
                        id: "navbarColor01"
                    }, l.a.createElement("ul", {
                        className: "form-inline search-wrap mob-search",
                        style: {
                            display: t ? "block" : "none"
                        }
                    }, l.a.createElement("li", {
                        className: "search-input"
                    }, l.a.createElement("form", {
                        onSubmit: this.props.search ? function (a) {
                            e.props.search(a, e.state.searchValue)
                        } : "",
                        className: "search-form search-form-blog",
                        action: "javascript:void(0)"
                    }, l.a.createElement("span", {
                        className: "fa fa-search search-icon"
                    }, l.a.createElement("img", {
                        src: "https://images.contentstack.io/v3/assets/blt1264fa9b448be721/blt7a9ad0286ac728fd/5cfaad4ca226ce6e30bf9995/download",
                        alt: "search icon"
                    })), l.a.createElement("input", {
                        type: "text",
                        value: this.state.searchValue,
                        className: "form-control",
                        placeholder: c,
                        onChange: this.props.Resourcesearch ? this.props.Resourcesearch : function (a) {
                            e.setState({
                                searchValue: a.target.value
                            })
                        },
                        id: "searchfilter"
                    })))), l.a.createElement("ul", {
                        className: "tab-sub-nav nav category-tabs navbar-nav ml-auto",
                        role: "tablist"
                    }, a.sub_nav.map((function (e, a) {
                        return "Contact us" === e.title ? l.a.createElement("li", {
                            key: a
                        }, l.a.createElement("a", {
                            title: e.title,
                            href: e.link,
                            className: "cta-outline"
                        }, e.title)) : r ? l.a.createElement("li", {
                            className: 0 === a ? "active nav-item" : "nav-item",
                            key: a
                        }, l.a.createElement("a", {
                            href: "" !== e.link ? e.link : "#" + a
                        }, e.title)) : l.a.createElement("li", {
                            key: a
                        }, l.a.createElement("a", {
                            href: "" !== e.link ? e.link : "#" + a
                        }, e.title))
                    }))), l.a.createElement("ul", {
                        className: "form-inline search-wrap ml-auto desktop-search",
                        style: {
                            display: t ? "block" : "none"
                        }
                    }, l.a.createElement("li", {
                        className: "search-input"
                    }, l.a.createElement("form", {
                        onSubmit: this.props.search ? function (a) {
                            e.props.search(a, e.state.searchValue)
                        } : "",
                        className: "search-form search-form-blog",
                        action: "javascript:void(0)"
                    }, l.a.createElement("span", {
                        className: "fa fa-search search-icon"
                    }, l.a.createElement("img", {
                        src: "https://images.contentstack.io/v3/assets/blt1264fa9b448be721/blt7a9ad0286ac728fd/5cfaad4ca226ce6e30bf9995/download",
                        alt: "search icon"
                    })), l.a.createElement("input", {
                        value: this.state.searchValue,
                        type: "text",
                        className: "form-control",
                        placeholder: c,
                        onChange: this.props.Resourcesearch ? this.props.Resourcesearch : function (a) {
                            e.setState({
                                searchValue: a.target.value
                            })
                        },
                        id: "searchfilter"
                    })))))) : a.nav ? l.a.createElement("nav", {
                        className: "container navbar navbar-expand-lg"
                    }, l.a.createElement("ul", {
                        className: "navbar-brand action-menu"
                    }, l.a.createElement("li", null, l.a.createElement("a", {
                        href: a.link
                    }, l.a.createElement(n.a, {
                        alt: a.title,
                        src: a.logo.url
                    }))), l.a.createElement("li", null, l.a.createElement("a", {
                        className: "inactiveLink",
                        href: " "
                    }, a.title))), l.a.createElement("button", {
                        className: "navbar-toggler collapsed",
                        type: "button",
                        "data-toggle": "collapse",
                        "data-target": "#navbarColor01",
                        "aria-controls": "navbarColor01",
                        "aria-expanded": "false",
                        "aria-label": "Toggle navigation"
                    }, l.a.createElement("span", {
                        className: "navbar-toggler-icon black-icon"
                    })), l.a.createElement("div", {
                        className: "collapse navbar-collapse",
                        id: "navbarColor01"
                    }, l.a.createElement("ul", {
                        className: "search-wrap mob-search"
                    }, l.a.createElement("li", {
                        className: "search-input"
                    }, l.a.createElement("form", {
                        onSubmit: this.props.search ? function (a) {
                            e.props.search(a, e.state.searchValue)
                        } : "",
                        className: "search-form search-form-blog",
                        action: "javascript:void(0)"
                    }, l.a.createElement("span", {
                        className: "fa fa-search search-icon"
                    }, l.a.createElement("img", {
                        src: "https://images.contentstack.io/v3/assets/blt1264fa9b448be721/blt7a9ad0286ac728fd/5cfaad4ca226ce6e30bf9995/download",
                        alt: "search icon"
                    })), l.a.createElement("input", {
                        value: this.state.searchValue,
                        onChange: this.props.Resourcesearch ? this.props.Resourcesearch : function (a) {
                            e.setState({
                                searchValue: a.target.value
                            })
                        },
                        id: "searchfilter",
                        className: "form-control",
                        type: "text",
                        placeholder: c
                    })))), l.a.createElement("ul", {
                        className: "tab-sub-nav navbar-nav nav nav-tabs ml-auto",
                        role: "tablist"
                    }, a.nav.map((function (e, a) {
                        return l.a.createElement("li", {
                            role: "presentation",
                            className: 0 === a ? "active nav-item" : "nav-item",
                            key: a
                        }, l.a.createElement("a", {
                            href: e.link,
                            "aria-controls": "home",
                            role: "tab",
                            "data-toggle": "tab"
                        }, e.title))
                    }))), l.a.createElement("ul", {
                        className: "search-wrap desktop-search"
                    }, l.a.createElement("li", {
                        className: "search-input"
                    }, l.a.createElement("form", {
                        onSubmit: this.props.search ? function (a) {
                            e.props.search(a, e.state.searchValue)
                        } : "",
                        className: "search-form search-form-blog",
                        action: "javascript:void(0)"
                    }, l.a.createElement("span", {
                        className: "fa fa-search search-icon"
                    }, l.a.createElement("img", {
                        src: "https://images.contentstack.io/v3/assets/blt1264fa9b448be721/blt7a9ad0286ac728fd/5cfaad4ca226ce6e30bf9995/download",
                        alt: "search icon"
                    })), l.a.createElement("input", {
                        value: this.state.searchValue,
                        onChange: this.props.Resourcesearch ? this.props.Resourcesearch : function (a) {
                            e.setState({
                                searchValue: a.target.value
                            })
                        },
                        id: "searchfilter",
                        className: "form-control",
                        type: "text",
                        placeholder: c
                    })))))) : l.a.createElement("nav", {
                        className: "container navbar navbar-expand-lg"
                    }, l.a.createElement("ul", {
                        className: "navbar-brand action-menu"
                    }, l.a.createElement("li", null, l.a.createElement("a", {
                        href: a.link
                    }, l.a.createElement(n.a, {
                        alt: a.logo.title,
                        src: a.logo.url
                    }))), l.a.createElement("li", null, l.a.createElement("a", {
                        className: "inactiveLink",
                        href: ""
                    }, a.title))), l.a.createElement("button", {
                        className: "navbar-toggler collapsed",
                        type: "button",
                        "data-toggle": "collapse",
                        "data-target": "#navbarColor01",
                        "aria-controls": "navbarColor01",
                        "aria-expanded": "false",
                        "aria-label": "Toggle navigation"
                    }, l.a.createElement("span", {
                        className: "navbar-toggler-icon black-icon"
                    })), l.a.createElement("div", {
                        className: "collapse navbar-collapse",
                        id: "navbarColor01"
                    }, l.a.createElement("ul", {
                        className: "search-wrap ml-auto"
                    }, l.a.createElement("li", {
                        className: "search-input"
                    }, l.a.createElement("form", {
                        onSubmit: this.props.search ? function (a) {
                            e.props.search(a, e.state.searchValue)
                        } : "",
                        className: "search-form search-form-blog",
                        action: "javascript:void(0)"
                    }, l.a.createElement("span", {
                        className: "fa fa-search search-icon"
                    }, l.a.createElement("img", {
                        src: "https://images.contentstack.io/v3/assets/blt1264fa9b448be721/blt7a9ad0286ac728fd/5cfaad4ca226ce6e30bf9995/download",
                        alt: "search icon"
                    })), l.a.createElement("input", {
                        value: this.state.searchValue,
                        onChange: this.props.Resourcesearch ? this.props.Resourcesearch : function (a) {
                            e.setState({
                                searchValue: a.target.value
                            })
                        },
                        id: "searchfilter",
                        className: "form-control",
                        type: "text",
                        placeholder: c
                    }))))))
                }, c
            }(l.a.Component)
        }
    }
]);
//# sourceMappingURL=component---src-pages-features-js-0e830479d74d98abda67.js.map
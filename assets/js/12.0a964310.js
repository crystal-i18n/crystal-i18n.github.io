(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{366:function(t,a,e){"use strict";e.r(a);var s=e(42),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"locales-activation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#locales-activation"}},[t._v("#")]),t._v(" Locales activation")]),t._v(" "),e("p",[t._v("The current locale - which is used for "),e("a",{attrs:{href:"/translation_lookups"}},[t._v("translation lookups")]),t._v(" or "),e("a",{attrs:{href:"/localization"}},[t._v("localizations")]),t._v(" -\ncan be specified using the "),e("code",[t._v("#locale=")]),t._v(" method (or "),e("code",[t._v("#activate")]),t._v(" - both are equivalent):")]),t._v(" "),e("div",{staticClass:"language-crystal extra-class"},[e("pre",{pre:!0,attrs:{class:"language-crystal"}},[e("code",[e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I18n")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("locale "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":fr")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I18n")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":fr")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Locale changes like in the above example are always pseudo-global and are scopped to the current fiber.")])]),t._v(" "),e("p",[t._v("Unless explicitly set, the default locale ("),e("code",[t._v("en")]),t._v(" if not configured in "),e("code",[t._v("I18n.config.default_locale")]),t._v(") is used instead.")]),t._v(" "),e("p",[t._v("When activating a locale with "),e("code",[t._v("#locale=")]),t._v(" or "),e("code",[t._v("#activate")]),t._v(", all further translations or localizations will be done\nusing the specified locale. If the specified locale is not part of the available locales (either because it was not part\nof the loaded translations or because it was not part of the "),e("code",[t._v("I18n.config.available_locales")]),t._v(" array), an\n"),e("code",[t._v("I18n::Errors::InvalidLocale")]),t._v(" exception is raised.")]),t._v(" "),e("p",[t._v("Crystal I18n also provides the ability to execute a block with a specific locale activated. In order to do so, the\n"),e("code",[t._v("#with_locale")]),t._v(" method can be used as follows:")]),t._v(" "),e("div",{staticClass:"language-crystal extra-class"},[e("pre",{pre:!0,attrs:{class:"language-crystal"}},[e("code",[e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I18n")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("with_locale"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":fr")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I18n")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"simple.translation"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Will output a text in french")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[e("code",[t._v("#with_locale")]),t._v(" should be used over "),e("code",[t._v("#locale=")]),t._v(" or "),e("code",[t._v("#activate")]),t._v(" in most cases since it will ensure that the previously\nactivated locale is activated again once the block execution finishes. This is especially relevant in the context of web\nrequests processing where a locale matching a given HTTP request has to be activated. In this context, using "),e("code",[t._v("#locale=")]),t._v("\ncould lead into subsequent requests using the previously activated locale if the later was not reset to its previous\nvalue after finishing processing the request.")])])])}),[],!1,null,null,null);a.default=n.exports}}]);
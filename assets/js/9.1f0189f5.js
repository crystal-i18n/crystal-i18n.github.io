(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{362:function(a,t,s){"use strict";s.r(t);var n=s(42),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[a._v("#")]),a._v(" Configuration")]),a._v(" "),s("p",[a._v("Crystal I18n can be configured through the use of the "),s("code",[a._v("I18n#config")]),a._v(" object (instance of\n"),s("a",{attrs:{href:"/ref/I18n/Config.html",target:"_blank"}},[s("code",[a._v("I18n::Config")])]),a._v("). This object allows to configure various\naspects of the behaviour of Crystal I18n, such as: how translation files are loaded, the default locale, etc.")]),a._v(" "),s("h2",{attrs:{id:"loaders"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loaders"}},[a._v("#")]),a._v(" "),s("code",[a._v("loaders")])]),a._v(" "),s("p",[s("strong",[a._v("Default value:")]),a._v(" "),s("code",[a._v("[] of I18n::Loader::Base")])]),a._v(" "),s("p",[a._v("The "),s("a",{attrs:{href:"/ref/I18n/Config.html#loaders:Array(I18n::Loader::Base)-instance-method",target:"_blank"}},[s("code",[a._v("I18n::Config#loaders")])]),a._v("\nmethod gives access to the\nlist of configured translations loaders and allows to easily append new ones. For example:")]),a._v(" "),s("div",{staticClass:"language-crystal extra-class"},[s("pre",{pre:!0,attrs:{class:"language-crystal"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("I18n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("loaders "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("I18n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Loader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("YAML")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("new"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"config/locales"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("Each object in the "),s("code",[a._v("loaders")]),a._v(" array must be an instance of a subclass of "),s("code",[a._v("I18n::Loader::Base")]),a._v(' (abstract class which\ndefines how translations should be "loaded" in order to be injected into catalogs of translations). Crystal I18n has\nbuilt-in support for two loader types:')]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"/ref/I18n/Loader/YAML.html",target:"_blank"}},[s("code",[a._v("I18n::Loader::YAML")])]),a._v(" - allows to load YAML\ntranslations files")]),a._v(" "),s("li",[s("a",{attrs:{href:"/ref/I18n/Loader/JSON.html",target:"_blank"}},[s("code",[a._v("I18n::Loader::JSON")])]),a._v(" - allows to load JSON\ntranslations files")])]),a._v(" "),s("p",[a._v("Each of the above loader implementation supports translations files organized accross multiple files (eg. multiple\nYAML files organized in sub-directories for a specific locale). The above loaders are initialized from an absolute or\nrelative directory path (where translations files will be looked up).")]),a._v(" "),s("p",[a._v("It's also possible to fully define the existing loaders at once through the use of the "),s("a",{attrs:{href:"/ref/I18n/Config.html#loaders=(loaders)-instance-method",target:"_blank"}},[s("code",[a._v("I18n::Config#loaders=")])]),a._v("\nmethod:")]),a._v(" "),s("div",{staticClass:"language-crystal extra-class"},[s("pre",{pre:!0,attrs:{class:"language-crystal"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("I18n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("loaders "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("I18n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Loader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("YAML")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("new"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"config/locales"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("of")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("I18n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Loader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Base")]),a._v("\n")])])]),s("h2",{attrs:{id:"default-locale"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#default-locale"}},[a._v("#")]),a._v(" "),s("code",[a._v("default_locale")])]),a._v(" "),s("p",[s("strong",[a._v("Default value:")]),a._v(" "),s("code",[a._v('"en"')])]),a._v(" "),s("p",[a._v("The "),s("a",{attrs:{href:"/ref/I18n/Config.html#default_locale=(locale:String%7CSymbol)-instance-method",target:"_blank"}},[s("code",[a._v("I18n::Config#default_locale=")])]),a._v("\nmethod allows to set the default locale used by Crystal I18n. The default locale is set to "),s("code",[a._v('"en"')]),a._v(" (English) unless\nexplicitly set:")]),a._v(" "),s("div",{staticClass:"language-crystal extra-class"},[s("pre",{pre:!0,attrs:{class:"language-crystal"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("I18n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("default_locale "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token symbol"}},[a._v(":fr")]),a._v("\n")])])]),s("h2",{attrs:{id:"available-locales"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#available-locales"}},[a._v("#")]),a._v(" "),s("code",[a._v("available_locales")])]),a._v(" "),s("p",[s("strong",[a._v("Default value:")]),a._v(" "),s("code",[a._v("nil")])]),a._v(" "),s("p",[a._v("The "),s("a",{attrs:{href:"/ref/I18n/Config.html#available_locales=(available_locales:Array(String%7CSymbol)?)-instance-method",target:"_blank"}},[s("code",[a._v("I18n::Config#available_locales=")])]),a._v("\nmethod allows to define the locales that can be activated in order to perform translation lookups and localizations.\nUnless explicitly specified, this list corresponds to the locales that are automatically discovered by translations\nloaders configured via the "),s("code",[a._v("#loaders")]),a._v(" method.")]),a._v(" "),s("div",{staticClass:"language-crystal extra-class"},[s("pre",{pre:!0,attrs:{class:"language-crystal"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("I18n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("available_locales "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token symbol"}},[a._v(":en")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token symbol"}},[a._v(":fr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("h2",{attrs:{id:"fallbacks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fallbacks"}},[a._v("#")]),a._v(" "),s("code",[a._v("fallbacks")])]),a._v(" "),s("p",[s("strong",[a._v("Default value:")]),a._v(" "),s("code",[a._v("nil")])]),a._v(" "),s("p",[a._v("The "),s("a",{attrs:{href:"/ref/I18n/Config.html#fallbacks=(fallbacks:Array(String%7CSymbol)%7CHash(String%7CSymbol,Array(String%7CSymbol)%7CString%7CSymbol)%7CLocale::Fallbacks%7CNamedTuple%7CNil)-instance-method",target:"_blank"}},[s("code",[a._v("I18n::Config#fallbacks=")])]),a._v("\nmethod allows to set the locale fallbacks. Setting locale fallbacks will force Crystal I18n to try to lookup\ntranslations in other (configured) locales if the current locale the translation is requested into is missing.")]),a._v(" "),s("p",[a._v("For example, the specified fallbacks can be a hash or a named tuple defining the chains of fallbacks to use for specific\nlocales:")]),a._v(" "),s("div",{staticClass:"language-crystal extra-class"},[s("pre",{pre:!0,attrs:{class:"language-crystal"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("I18n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("fallbacks "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"en-CA"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"en-US"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"en"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"fr-CA"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"fr"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("It can also be a simple array of fallbacks. In that case, this chain of fallbacked locales will be used as a default for\nall the available locales when translations are missing:")]),a._v(" "),s("div",{staticClass:"language-crystal extra-class"},[s("pre",{pre:!0,attrs:{class:"language-crystal"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("I18n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("fallbacks "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"en-US"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"en"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("p",[a._v("It's also possible to specficy both default fallbacks and a mapping of fallbacks by initializing an\n"),s("code",[a._v("I18n::Locale::Fallbacks")]),a._v(" object as follows:")]),a._v(" "),s("div",{staticClass:"language-crystal extra-class"},[s("pre",{pre:!0,attrs:{class:"language-crystal"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("I18n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("fallbacks "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("I18n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Locale")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Fallbacks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("new"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"fr-CA-special"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"fr-CA"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"fr"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"en"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  default"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"en"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("Finally, using "),s("code",[a._v("nil")]),a._v(" in the context of this method will reset the configured fallbacks (and remove any previously\nconfigured fallbacks).")]),a._v(" "),s("p",[a._v("It's also important to always ensure that fallback locales are available locales: they should all be present in the\n"),s("code",[a._v("#available_locales")]),a._v(" array.")])])}),[],!1,null,null,null);t.default=e.exports}}]);
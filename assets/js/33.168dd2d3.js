(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{380:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"v-router钩子函数理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-router钩子函数理解"}},[t._v("#")]),t._v(" v-router钩子函数理解")]),t._v(" "),a("p",[t._v("导航钩子：用来拦截的导航，让它完成跳转或取消，有多种方式可以在路由发生时执行钩子：全局的、单个路由独享的、或者组件级的。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局钩子")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n \nrouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// to: Route: 即将要进入的目标 路由对象")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// from: Route: 当前导航正要离开的路由")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed （确认的）\n     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 中断当前的导航。如果浏览器的 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),t._v(" 改变了（可能是用户手动或者浏览器后退按钮），那么 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),t._v(" 地址会重置到 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" 路由对应的地址。\n     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 或者 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 跳转到一个不同的地址。中断当前导航，然后进行一个新的导航。             \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 单个路由独享的:  在自己的路由里面设置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("beforeEnter")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 组件内的钩子")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" beforeRouteEnter\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" beforeRouteUpdate\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" beforeRouteLeave\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);
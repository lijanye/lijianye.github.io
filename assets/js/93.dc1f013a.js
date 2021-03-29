(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{440:function(a,t,_){"use strict";_.r(t);var r=_(42),s=Object(r.a)({},(function(){var a=this,t=a.$createElement,_=a._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("h3",{attrs:{id:"执行上下文"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文"}},[a._v("#")]),a._v(" 执行上下文")]),a._v(" "),_("h3",{attrs:{id:"一、执行上下文"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、执行上下文"}},[a._v("#")]),a._v(" 一、执行上下文")]),a._v(" "),_("h4",{attrs:{id:"_1-定义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-定义"}},[a._v("#")]),a._v(" 1.定义")]),a._v(" "),_("p",[a._v("执行上下文就是当前 JavaScript 代码被解析和执行时所在环境的抽象概念。")]),a._v(" "),_("h4",{attrs:{id:"_2-分类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-分类"}},[a._v("#")]),a._v(" 2.分类")]),a._v(" "),_("ul",[_("li",[a._v("全局执行上下文")])]),a._v(" "),_("p",[a._v("创建阶段做了两件事：")]),a._v(" "),_("ol",[_("li",[a._v("创建一个全局对象，也就是window。")]),a._v(" "),_("li",[a._v("将 this 指针指向这个全局对象，一个程序之后一个全局执行上下文。")])]),a._v(" "),_("ul",[_("li",[_("p",[a._v("函数执行上下文")])]),a._v(" "),_("li",[_("p",[a._v("Eval执行上下文")])])]),a._v(" "),_("h3",{attrs:{id:"二、生命周期"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、生命周期"}},[a._v("#")]),a._v(" 二、生命周期")]),a._v(" "),_("h4",{attrs:{id:"_1-创建阶段"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建阶段"}},[a._v("#")]),a._v(" 1.创建阶段")]),a._v(" "),_("p",[a._v("当函数被调用时，但未执行任何其内部代码之前，做了三件事")]),a._v(" "),_("ul",[_("li",[_("p",[a._v("创建变量对象：首先初始化函数的参数 arguments，提升函数声明和变量声明。")])]),a._v(" "),_("li",[_("p",[a._v("创建作用域链（Scope Chain）：在执行期上下文的创建阶段，作用域链是在变量对象之后创建的。作用域链本身包含变量对象。作用域链用于解析变量。当被要求解析变量时，JavaScript 始终从代码嵌套的最内层开始，如果最内层没有找到变量，就会跳转到上一层父作用域中查找，直到找到该变量。")])]),a._v(" "),_("li",[_("p",[a._v("确定 this 指向。")])])]),a._v(" "),_("h4",{attrs:{id:"_2-执行阶段"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-执行阶段"}},[a._v("#")]),a._v(" 2.执行阶段")]),a._v(" "),_("p",[a._v("执行变量赋值，代码执行")]),a._v(" "),_("h4",{attrs:{id:"_3-回收阶段"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-回收阶段"}},[a._v("#")]),a._v(" 3.回收阶段")]),a._v(" "),_("p",[a._v("执行上下文出栈等待回收。")]),a._v(" "),_("h3",{attrs:{id:"三、执行上下文栈"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、执行上下文栈"}},[a._v("#")]),a._v(" 三、执行上下文栈")]),a._v(" "),_("p",[a._v("JavaScript 引擎创建了执行上下文栈来管理执行上下文。可以把执行上下文栈认为是一个存储函数调用的栈结构，遵循先进后出的原则。")])])}),[],!1,null,null,null);t.default=s.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{353:function(v,_,t){"use strict";t.r(_);var i=t(42),o=Object(i.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h3",{attrs:{id:"bfc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bfc"}},[v._v("#")]),v._v(" BFC")]),v._v(" "),t("p",[v._v("1.什么是BFC？")]),v._v(" "),t("p",[v._v("​\t\tBFC (Block  Formatting  Context)就是块级格式上下文，是页面盒模型布局中的一种 CSS 渲染模式，相当于一个独立的容器，里面的元素和外部的元素相互不影响。")]),v._v(" "),t("p",[v._v("2.视觉格式化模型")]),v._v(" "),t("p",[v._v("​\t\t视觉格式化模型(visual formatting model)是用来处理文档并将它显示在视觉媒体上的机制，它也是CSS中的一个概念。")]),v._v(" "),t("p",[v._v("​\t\t视觉格式化模型定义了盒（Box）的生成，盒主要包括了块盒、行内盒、匿名盒（没有名字不能被选择器选中的盒）以及一些实验性的盒（未来可能添加到规范中）。盒的类型由"),t("code",[v._v("display")]),v._v("属性决定。")]),v._v(" "),t("p",[v._v("3.三个定位方案")]),v._v(" "),t("p",[v._v("​\t1>常规流")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[v._v("\t- 在常规流中，盒一个接着一个排列；\n\t- 在 **块级格式化上下文** 里面， 它们**竖着**排列\n\t- 在**行内格式化上下文**里面， 它们**横着**排列;\n\t- 当`position`为`static`或`relative`，并且`float`为`none`时会触发常规流；\n\t- 对于**静态定位**(static positioning)，`position: static`，**盒的位置是常规流布局里的位置；**\n\t- 对于**相对定位**(relative positioning)，`position: relative`，盒偏移位置由这些属性定义`top`，`bottom`，`left`and`right`。**即使有偏移，仍然保留原有的位置**，其它常规流不能占用这个位置；\n")])])]),t("p",[v._v("​\t2>浮动定位")]),v._v(" "),t("ul",[t("li",[v._v("盒称为浮动盒")]),v._v(" "),t("li",[v._v("它位于当前行的开头或末尾")]),v._v(" "),t("li",[v._v("这"),t("strong",[v._v("导致常规流环绕在它的周边")]),v._v("，除非设置 clear 属性")])]),v._v(" "),t("p",[v._v("​\t3>绝对定位")]),v._v(" "),t("ul",[t("li",[v._v("绝对定位方案，"),t("strong",[v._v("盒从常规流中被移除")]),v._v("，不影响常规流的布局")]),v._v(" "),t("li",[v._v("它的定位相对于它的包含块，相关CSS属性："),t("code",[v._v("top")]),v._v("，"),t("code",[v._v("bottom")]),v._v("，"),t("code",[v._v("left")]),v._v("及"),t("code",[v._v("right")])]),v._v(" "),t("li",[v._v("如果元素的属性"),t("code",[v._v("position")]),v._v("为"),t("code",[v._v("absolute")]),v._v("或"),t("code",[v._v("fixed")]),v._v("，它是绝对定位元素")]),v._v(" "),t("li",[v._v("对于"),t("code",[v._v("position: absolute")]),v._v("，元素定位将相对于最近的一个"),t("code",[v._v("relative")]),v._v("、"),t("code",[v._v("fixed")]),v._v("或"),t("code",[v._v("absolute")]),v._v("的父元素，如果没有则相对于"),t("code",[v._v("body")])])]),v._v(" "),t("p",[v._v("4.形成BFC的条件")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("根元素")]),v._v("或其它包含它的元素")]),v._v(" "),t("li",[t("strong",[v._v("浮动")])]),v._v(" "),t("li",[t("strong",[v._v("绝对定位元素")])]),v._v(" "),t("li",[t("code",[v._v("overflow")]),v._v("的值不为"),t("code",[v._v("visible")]),v._v("的元素")]),v._v(" "),t("li",[v._v("display为inline-block/table/flex")])]),v._v(" "),t("p",[v._v("5.效果")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("内部的盒会在垂直方向一个接一个排列；")])]),v._v(" "),t("li",[t("p",[v._v("处于同一个BFC中的元素相互影响，可能会发生margin collapse；")])]),v._v(" "),t("li",[t("p",[v._v("BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然；")])]),v._v(" "),t("li",[t("p",[v._v("计算BFC的高度时，考虑BFC所包含的所有元素，连浮动元素也参与计算；")])]),v._v(" "),t("li",[t("p",[v._v("浮动盒区域不叠加到BFC上；")])])]),v._v(" "),t("p",[v._v("6.可解决问题")]),v._v(" "),t("ul",[t("li",[v._v("清楚浮动")]),v._v(" "),t("li",[v._v("外边距重叠")]),v._v(" "),t("li",[v._v("两列布局")]),v._v(" "),t("li",[v._v("防止字体环绕")])])])}),[],!1,null,null,null);_.default=o.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{363:function(a,_,t){"use strict";t.r(_);var v=t(42),r=Object(v.a)({},(function(){var a=this,_=a.$createElement,t=a._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h3",{attrs:{id:"渲染流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#渲染流程"}},[a._v("#")]),a._v(" 渲染流程")]),a._v(" "),t("h4",{attrs:{id:"基本流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本流程"}},[a._v("#")]),a._v(" 基本流程")]),a._v(" "),t("p",[a._v("构建DOM树、样式计算、布局阶段、分层、绘制、分块、光栅化、合成。")]),a._v(" "),t("h4",{attrs:{id:"一、构建dom树"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、构建dom树"}},[a._v("#")]),a._v(" 一、构建DOM树")]),a._v(" "),t("h5",{attrs:{id:"_1-为什么要构建dom树"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-为什么要构建dom树"}},[a._v("#")]),a._v(" 1.为什么要构建DOM树")]),a._v(" "),t("p",[a._v("这是因为浏览器无法直接理解和使用HTML，所以需要将HTML转换为浏览器能够理解的结构 - DOM树")]),a._v(" "),t("h4",{attrs:{id:"二、样式计算"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、样式计算"}},[a._v("#")]),a._v(" 二、样式计算")]),a._v(" "),t("p",[a._v("样式计算的目的是为了计算出DOM节点中每个元素的具体样式。")]),a._v(" "),t("h5",{attrs:{id:"_1-把css转换成浏览器能够理解的结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-把css转换成浏览器能够理解的结构"}},[a._v("#")]),a._v(" 1.把CSS转换成浏览器能够理解的结构")]),a._v(" "),t("p",[a._v("和HTML一样，浏览器也是无法理解这些纯文本的CSS样式，所以当渲染引擎接收到CSS文本时，会执行一个转换操作，将CSS文本转换为浏览器可以理解的结构 - styleSheets")]),a._v(" "),t("h5",{attrs:{id:"_2-转换样式表中的属性值-使其标准化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-转换样式表中的属性值-使其标准化"}},[a._v("#")]),a._v(" 2.转换样式表中的属性值，使其标准化")]),a._v(" "),t("p",[a._v("当出现2em、blue、bold这些值时，不容易被浏览器理解，所以需要将所有值转换为浏览器容易理解的、标准化的数值，这个过程就是属性标准化。")]),a._v(" "),t("p",[a._v("2em被解析为32px，red解析为rgb(255,0,0)， bold解析为700 ...")]),a._v(" "),t("h5",{attrs:{id:"_3-计算出dom树中每个节点的具体样式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-计算出dom树中每个节点的具体样式"}},[a._v("#")]),a._v(" 3.计算出DOM树中每个节点的具体样式")]),a._v(" "),t("p",[a._v("这里涉及到了继承规则以及层叠规则")]),a._v(" "),t("p",[a._v("CSS继承就是每个DOM节点都包含有父节点的样式")]),a._v(" "),t("p",[a._v("CSS层叠规则")]),a._v(" "),t("p",[a._v("background/border => 负z-index => block块状视屏盒子 => float浮动盒子 => inline/inline-block 水平盒子 => z-index: auto/0 => 正z-index")]),a._v(" "),t("p",[a._v("样式计算阶段的目的就是为了计算出DOM节点每个元素的具体样式，在计算过程中需要遵守CSS继承和层叠两个规则。")]),a._v(" "),t("h4",{attrs:{id:"三、布局阶段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、布局阶段"}},[a._v("#")]),a._v(" 三、布局阶段")]),a._v(" "),t("p",[a._v("布局阶段就是计算出DOM树中可见元素的几何位置")]),a._v(" "),t("h5",{attrs:{id:"_1-创建布局树"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建布局树"}},[a._v("#")]),a._v(" 1.创建布局树")]),a._v(" "),t("p",[a._v("在显示之前，我们需要额外的创建一颗只包含可见元素的布局树。")]),a._v(" "),t("p",[a._v("为了创建布局树，浏览器做了两件事：")]),a._v(" "),t("ul",[t("li",[a._v("遍历DOM树中的所有可见节点，并把这些节点加到布局树中。")]),a._v(" "),t("li",[a._v("而不可见的节点被布局树忽略掉，如head标签下的全部内容，再比如block属性值为none的这些元素等。")])]),a._v(" "),t("h5",{attrs:{id:"_2-布局计算"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-布局计算"}},[a._v("#")]),a._v(" 2.布局计算")]),a._v(" "),t("p",[a._v("现在我们有了一棵完整的布局树。那么接下来，就要计算布局树节点的坐标位置了。")]),a._v(" "),t("h4",{attrs:{id:"四、分层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、分层"}},[a._v("#")]),a._v(" 四、分层")]),a._v(" "),t("p",[a._v("渲染引擎还需要为特定的节点生成专用的图层，并生成一颗对应的布局树。比如复杂的3D转换、页面滚动、或者使用z-index做z轴排序等。")]),a._v(" "),t("p",[a._v("通常情况下，并不是布局树的每个节点都包含一个图层，如果一个节点没有对应的层，那么这个节点就从属于他的父节点的图层。不管怎样，最终每个节点都会直接或间接地从属于一个层。")]),a._v(" "),t("p",[a._v("通常满足下面两点中任意一点的元素就可以被提升为单独的一个图层。")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("拥有层叠上下文属性的元素会被提升为独立的一层。")]),a._v(" "),t("p",[a._v("明确定位属性的元素、定义透明属性的元素、使用 CSS 滤镜的元素等，都拥有层叠上下文属性。")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Understanding_z_index/The_stacking_context",target:"_blank",rel:"noopener noreferrer"}},[a._v("参考这篇文章"),t("OutboundLink")],1)])]),a._v(" "),t("li",[t("p",[a._v("需要剪裁（clip）的地方也会被创建为图层")])])]),a._v(" "),t("h4",{attrs:{id:"五、图层绘制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、图层绘制"}},[a._v("#")]),a._v(" \b五、图层绘制")]),a._v(" "),t("p",[a._v("在完成图层树的构建之后，渲染引擎会对图层树中的每个图层进行绘制。")]),a._v(" "),t("p",[a._v("渲染引擎会把图层的绘制拆分为很多个小的绘制指令，然后在把这些指令按照殊勋组成一个待绘制列表。")]),a._v(" "),t("h4",{attrs:{id:"六、栅格化操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六、栅格化操作"}},[a._v("#")]),a._v(" 六、栅格化操作")]),a._v(" "),t("p",[a._v("绘制列表只是用来记录绘制顺序和绘制指令的列表，而实际上绘制操作是有绘制引擎中的合成线程来完成的。")]),a._v(" "),t("p",[a._v("首先合成线程会将图层划分为图块，然后合成线程会按照视口附近的图块来优先生成位图，实际生成位图的操作是由栅格化来执行的。所谓栅格化就是指将图块转换为位图，图块是栅格化执行的最小单位。")]),a._v(" "),t("p",[a._v("通常，栅格化的过程都会使用GPU来加速生成，使用GPU生成位图的过程叫做快速栅格化，生成的位图被保存在GPU内存中。")]),a._v(" "),t("h4",{attrs:{id:"七、合成与显示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#七、合成与显示"}},[a._v("#")]),a._v(" 七、合成与显示")]),a._v(" "),t("p",[a._v("一旦所有图块都被光栅化，合成线程就会生成一个绘制图块的命令——“DrawQuad”，然后将该命令提交给浏览器进程。浏览器进程里面有一个叫 viz 的组件，用来接收合成线程发过来的 DrawQuad 命令，然后根据 DrawQuad 命令，将其页面内容绘制到内存中，最后再将内存显示在屏幕上。")]),a._v(" "),t("h3",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),t("ul",[t("li",[a._v("\b渲染进程将HTML内容转换为浏览器能够读懂的DOM树结构。")]),a._v(" "),t("li",[a._v("渲染引擎将CSS样式转化为浏览器可以理解的styleSheets，计算出DOM节点的样式。")]),a._v(" "),t("li",[a._v("创建布局树，并计算元素的布局信息。")]),a._v(" "),t("li",[a._v("对布局树进行分层，并声称分层树。")]),a._v(" "),t("li",[a._v("为每个图层生成绘制列表，并提交给合成线程。")]),a._v(" "),t("li",[a._v("合成线程将图层进行分块，并在光栅化线程池中将图块转换为位图。")]),a._v(" "),t("li",[a._v("合成线程发出绘制图块命令 DrawQuad 给浏览器进程。")]),a._v(" "),t("li",[a._v("浏览区进程根据 DrawQuad 消息生成页面，并显示到显示器上。")])])])}),[],!1,null,null,null);_.default=r.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{626:function(e,a,t){"use strict";t.r(a);var r=t(42),v=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h3",{attrs:{id:"热更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#热更新"}},[e._v("#")]),e._v(" 热更新")]),e._v(" "),t("ul",[t("li",[e._v("Webpack Compile：将JS编译成Bundle")]),e._v(" "),t("li",[e._v("HMR Server：将热更新的文件传输给 HMR RunTime")]),e._v(" "),t("li",[e._v("Bundle Server： 提供文件在浏览器访问")]),e._v(" "),t("li",[e._v("HMR RunTime：会被注入到浏览器，更新文件的变化")]),e._v(" "),t("li",[e._v("bundle.js： 编译之后的文件")])]),e._v(" "),t("p",[e._v("代码 => Webpack Compile(编译发送) => Bundle Server => 浏览器端 bundle.js")]),e._v(" "),t("p",[e._v("Webpack Compile(编译发送) => HMR Server <=> 浏览器端 HMR RunTime")]),e._v(" "),t("h4",{attrs:{id:"_1-webpack-对文件系统进行-watch-打包到内存中"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-webpack-对文件系统进行-watch-打包到内存中"}},[e._v("#")]),e._v(" 1.webpack 对文件系统进行 watch 打包到内存中")]),e._v(" "),t("p",[e._v("webpack-dev-middleware 调用 webpack 的 api 对文件系统 watch，当文件发生改变后，webpack 重新对文件进行编译打包，然后保存到内存中。")]),e._v(" "),t("h4",{attrs:{id:"_2-devserver-通知浏览器端文件发生改变"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-devserver-通知浏览器端文件发生改变"}},[e._v("#")]),e._v(" 2.devServer 通知浏览器端文件发生改变")]),e._v(" "),t("p",[e._v("在这一阶段，sockjs 是服务端和浏览器端之间的桥梁，在启动 devServer 的时候，sockjs 在服务端和浏览器端建立了一个 webSocket 长连接，以便将 webpack 编译和打包的各个阶段状态告知浏览器，最关键的步骤还是 webpack-dev-server 调用 webpack api 监听 compile的 done 事件，当compile 完成后，webpack-dev-server通过 _sendStatus 方法将编译打包后的新模块 hash 值发送到浏览器端。")]),e._v(" "),t("h4",{attrs:{id:"_3-webpack-dev-server-client-接收到服务端消息做出响应"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-webpack-dev-server-client-接收到服务端消息做出响应"}},[e._v("#")]),e._v(" 3.webpack-dev-server/client 接收到服务端消息做出响应")]),e._v(" "),t("p",[e._v("webpack-dev-server 修改了webpack 配置中的 entry 属性，在里面添加了 webpack-dev-client 的代码，这样在最后的 bundle.js 文件中就会有接收 websocket 消息的代码了。")]),e._v(" "),t("p",[e._v("webpack-dev-server/client 当接收到 type 为 hash 消息后会将 hash 值暂存起来，当接收到 type 为 ok 的消息后对应用执行 reload 操作。")]),e._v(" "),t("p",[e._v("在 reload 操作中，webpack-dev-server/client 会根据 hot 配置决定是刷新浏览器还是对代码进行热更新（HMR）。")]),e._v(" "),t("p",[e._v("首先将 hash 值暂存到 currentHash 变量，当接收到 ok 消息后，对 App 进行 reload。如果配置了模块热更新，就调用 webpack/hot/emitter 将最新 hash 值发送给 webpack，然后将控制权交给 webpack 客户端代码。如果没有配置模块热更新，就直接调用 location.reload 方法刷新页面。")]),e._v(" "),t("h4",{attrs:{id:"webpack-接收到最新-hash-值验证并请求模块代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-接收到最新-hash-值验证并请求模块代码"}},[e._v("#")]),e._v(" webpack 接收到最新 hash 值验证并请求模块代码")]),e._v(" "),t("p",[e._v("首先是 webpack/hot/dev-server 监听第三步 webpack-dev-server/client 发送的 webpackHotUpdate 消息，调用 webpack/lib/HotModuleReplacement.runtime 中的 check 方法，检测是否有新的更新，在 check 过程中会利用 webpack/lib/JsonpMainTemplate.runtime 中的两个方法 hotDownloadUpdateChunk 和 hotDownloadManifest ， 第二个方法是调用 AJAX 向服务端请求是否有更新的文件，如果有将发更新的文件列表返回浏览器端，而第一个方法是通过 jsonp 请求最新的模块代码，然后将代码返回给 HMR runtime，HMR runtime 会根据返回的新模块代码做进一步处理，可能是刷新页面，也可能是对模块进行热更新。")]),e._v(" "),t("h4",{attrs:{id:"hotmodulereplacement-runtime-对模块进行热更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hotmodulereplacement-runtime-对模块进行热更新"}},[e._v("#")]),e._v(" HotModuleReplacement.runtime 对模块进行热更新")])])}),[],!1,null,null,null);a.default=v.exports}}]);
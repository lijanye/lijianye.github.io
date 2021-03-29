(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{373:function(a,t,e){"use strict";e.r(t);var i=e(42),s=Object(i.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h3",{attrs:{id:"强缓存和协商缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#强缓存和协商缓存"}},[a._v("#")]),a._v(" 强缓存和协商缓存")]),a._v(" "),e("p",[a._v("区别 使用本地缓存的是否，是否向服务器验证本地缓存是否依旧有效，协商缓存就是向服务器协商是否使用本地缓存")]),a._v(" "),e("h3",{attrs:{id:"强缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[a._v("#")]),a._v(" 强缓存")]),a._v(" "),e("h4",{attrs:{id:"_1-expires"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-expires"}},[a._v("#")]),a._v(" 1.expires")]),a._v(" "),e("p",[a._v("指缓存过期的时间，超过这个时间被视为资源过期，属于http/1.0的标准。")]),a._v(" "),e("h4",{attrs:{id:"_2-catch-control"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-catch-control"}},[a._v("#")]),a._v(" 2.catch-control")]),a._v(" "),e("p",[a._v("max-age:指一个时间长度，在这个时间段缓存是有效的，第一次访问的时候浏览器返回了这个字段，在没有禁用缓存并且没有超过有效时间的情况下，直接使用浏览器缓存。")]),a._v(" "),e("p",[a._v("s-maxage: 通max-age,仅适用于共享缓存，在私有缓存中忽略。")]),a._v(" "),e("p",[a._v("public：表示响应可以被任何对象缓存，公共缓存，可以被多个用户共享。")]),a._v(" "),e("p",[a._v("private：表示响应只能被单个用户缓存，是非共享的。")]),a._v(" "),e("p",[a._v("no-cache:强制所有缓存了这个响应的用户，在使用已缓存的数据之前，发送带验证器的请求到服务器。")]),a._v(" "),e("p",[a._v("no-store：禁止缓存，每次请求都要向服务器重新获取数据。")]),a._v(" "),e("h3",{attrs:{id:"协商缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[a._v("#")]),a._v(" 协商缓存")]),a._v(" "),e("p",[a._v("缓存的资源到期了，并不意味着资源内容发生了变化，如果和服务器上的资源没有差异，实际上没有必要再次发生请求，客户端和服务器端通过某种验证机制验证当前资源是否可以缓存。")]),a._v(" "),e("h4",{attrs:{id:"last-mondified-if-modified-since-服务器资源最后的修改时间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#last-mondified-if-modified-since-服务器资源最后的修改时间"}},[a._v("#")]),a._v(" Last-mondified/If-Modified-Since 服务器资源最后的修改时间")]),a._v(" "),e("p",[a._v("响应头会带上这个标记，第一次请求之后，浏览器会记录这个时间，再次请求时，请求头部会带上这个If-Modified-Since即为之前记录的时间，服务器收到这个If-Modified-Since之后会去和资源进行对比，若修改过就返回最新资源200，没有的话返回304。如果响应头里面有Last-mondified，却没有Expires或者Cache-Control，浏览器会自己去计算时间，不用的浏览器得出的时间不同，所以要Last-mondified要记得配合Expires或者Cache-control使用。")]),a._v(" "),e("h4",{attrs:{id:"etag-if-none-match"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etag-if-none-match"}},[a._v("#")]),a._v(" Etag/If-None-Match")]),a._v(" "),e("p",[a._v("有服务器生成的一段hash值，第一次请求带上Etag,之后的请求中带上If-None-Match,服务器检查ETag，返回304或200")]),a._v(" "),e("h4",{attrs:{id:"区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[a._v("#")]),a._v(" 区别：")]),a._v(" "),e("ul",[e("li",[a._v("某些服务器不能精确得到资源的最后修改时间，这样就无法通过最后修改时间判断资源是否过期。")]),a._v(" "),e("li",[a._v("Last-Mondified只能精确到秒。")]),a._v(" "),e("li",[a._v("一些资源的最后修改时间改变了，但是内容却没有改变，使用Last-Modified看不出内容有没有发生改变")]),a._v(" "),e("li",[a._v("Etag精度比Last-Mondified高，属于强验证，要求资源字节级别的一致，优先级高。")])]),a._v(" "),e("p",[a._v("实际使用 ETag/Last-modified 要注意保持一致性，做负载均衡和反向代理的话可能会出现不一致的情况。计算 ETag 也是需要占用资源的，如果修改不是过于频繁，看自己的需求用 Cache-Control 是否可以满足。")])])}),[],!1,null,null,null);t.default=s.exports}}]);
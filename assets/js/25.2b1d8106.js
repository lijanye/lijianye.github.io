(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{370:function(v,_,t){"use strict";t.r(_);var l=t(42),e=Object(l.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h3",{attrs:{id:"滑动窗口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#滑动窗口"}},[v._v("#")]),v._v(" 滑动窗口")]),v._v(" "),t("p",[v._v("对于发送端来说，即将发送的数据包排成一个队列，数据包分为四类：")]),v._v(" "),t("ul",[t("li",[v._v("已经发送并收到确认")]),v._v(" "),t("li",[v._v("已发送但未收到确认")]),v._v(" "),t("li",[v._v("允许发送但尚未发送")]),v._v(" "),t("li",[v._v("不允许发送")])]),v._v(" "),t("p",[v._v("意义：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("可靠性")]),v._v(" "),t("p",[v._v("滑动窗口只有在队列前部的被确认之后，才会往后移动，确保数据包被接收方确认并接收。")])]),v._v(" "),t("li",[t("p",[v._v("传输效率")]),v._v(" "),t("p",[v._v("假如没有滑动窗口，服务端是杂乱无章的进行分包，因为TCP的队首效应，如果有前面的包没有发送成功，就会不停的重试，反而造成更差的传输效率。")])]),v._v(" "),t("li",[t("p",[v._v("稳定性")]),v._v(" "),t("p",[v._v("TCP的滑动窗口大小，是整个复杂网络商榷的结果，会进行动态调整，可以尽量地避免网络拥塞，更加稳定。")])])])])}),[],!1,null,null,null);_.default=e.exports}}]);
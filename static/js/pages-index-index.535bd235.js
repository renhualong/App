(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"30c8":function(t,n,e){"use strict";e.r(n);var i=e("3550"),a=e("58bc");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("8d39");var r,s=e("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"b584a756",null,!1,i["a"],r);n["default"]=u.exports},"342a":function(t,n,e){"use strict";(function(t){e("e25e"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=t.database(),a="lottery",o={data:function(){return{collectionList:a,num:0,min:0,max:0,interval:100,isOver:!0,clock:null,loadMore:{contentdown:"",contentrefresh:"",contentnomore:""}}},onLoad:function(){},onShow:function(){},created:function(){var t=this;this.$nextTick((function(){i.collection(a).get().then((function(n){t.max=n.result.data.length}))}))},onPullDownRefresh:function(){this.$refs.udb.loadData({clear:!0},(function(){uni.stopPullDownRefresh()}))},onReachBottom:function(){this.$refs.udb.loadMore()},methods:{start:function(){var t=this;this.isOver=!1,this.clock=setInterval((function(){t.num=t.getRandomNum(),console.log("1111"),console.log(t.num)}),this.interval)},stop:function(){clearInterval(this.clock),this.isOver=!0},getRandomNum:function(){return Math.floor(Math.random()*parseInt(this.max))}}};n.default=o}).call(this,e("a9ff")["default"])},3550:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var i={unicloudDb:e("960d").default,uniList:e("c6cdc").default,uniListItem:e("2213").default,uniLoadMore:e("2d85").default,uniFab:e("d2cd").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"content"},[e("unicloud-db",{ref:"udb",attrs:{collection:t.collectionList,field:"title,photo"},scopedSlots:t._u([{key:"default",fn:function(n){var i=n.data,a=(n.pagination,n.loading),o=n.hasMore,r=n.error;return[r?e("v-uni-view",[t._v(t._s(r.message))]):i?e("v-uni-view",[e("uni-list",t._l(i,(function(n,i){return e("uni-list-item",{key:i,class:{active:i==t.num},scopedSlots:t._u([{key:"body",fn:function(){return[e("v-uni-view",{staticClass:"list"},[e("v-uni-view",{staticClass:"item"},[e("v-uni-view",[e("v-uni-image",{attrs:{src:n.photo.url,mode:"aspectFill"}})],1),e("v-uni-view",[t._v(t._s(n.title))])],1)],1)]},proxy:!0}],null,!0)})})),1)],1):t._e(),e("uni-load-more",{attrs:{status:a?"loading":o?"more":"noMore"}})]}}])}),e("uni-fab",{ref:"fab",attrs:{horizontal:"right",vertical:"bottom","pop-menu":!1},on:{fabClick:function(n){arguments[0]=n=t.$handleEvent(n),t.fabClick.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"button-area"},[e("v-uni-button",{directives:[{name:"show",rawName:"v-show",value:t.isOver,expression:"isOver"}],on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.start.apply(void 0,arguments)}}},[t._v("开始抽奖")]),e("v-uni-button",{directives:[{name:"show",rawName:"v-show",value:!t.isOver,expression:"!isOver"}],on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.stop.apply(void 0,arguments)}}},[t._v("结束抽奖")])],1)],1)},o=[]},4163:function(t,n,e){var i=e("632e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("20c115c8",i,!0,{sourceMap:!1,shadowMode:!1})},"58bc":function(t,n,e){"use strict";e.r(n);var i=e("342a"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},"632e":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.panel[data-v-b584a756]{margin-top:%?60?%;width:%?600?%;height:%?400?%;border-radius:%?8?%;display:flex;align-items:center;justify-content:center;border:%?1?% solid #c8c7cc;box-shadow:0 0 %?40?% %?0?% rgba(0,0,0,.1)}.panel uni-text[data-v-b584a756]{font-size:%?180?%}.uni-list[data-v-b584a756]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center}.uni-list-item[data-v-b584a756]{border:%?4?% solid transparent}.uni-list-item.active[data-v-b584a756]{border-color:red}.item[data-v-b584a756]{text-align:center}.item uni-image[data-v-b584a756]{width:%?200?%;height:%?200?%}.button-area[data-v-b584a756]{margin-top:%?120?%}.content[data-v-b584a756]{display:flex;flex-direction:column;align-items:center;justify-content:center}',""]),t.exports=n},"8d39":function(t,n,e){"use strict";var i=e("4163"),a=e.n(i);a.a}}]);
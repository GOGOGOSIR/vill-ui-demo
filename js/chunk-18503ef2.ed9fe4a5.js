(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18503ef2"],{"5bb8":function(t,e,i){"use strict";var l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vill-page"},[t._t("wrapper",[i("header",{ref:"pageHeader",staticClass:"vill-page-header"},[t._t("header",[i("vill-nav-bar",{attrs:{title:t.title,rightDisabled:!0},on:{"left-click":t.handleNavLeftClick}})])],2),i("main",{staticClass:"vill-page-main",style:t.mainStyle},[t._t("content",[i("vill-scroll",{ref:"eScroll"},[t._t("main",null,{scroll:t.scrollRef})],2)])],2),i("div",{ref:"lastInset"},[t._t("lastInset")],2)])],2)},a=[],s="vill-page",n="handleNavLeftClick",c={name:s,props:{title:{type:String,default:""}},data:function(){return{mainStyle:{},scrollRef:null}},mounted:function(){this.calculationHeight()},methods:{handleNavLeftClick:function(){this.$emit(n)},calculationHeight:function(){var t=this;this.$nextTick((function(){var e=t.$refs.lastInset.clientHeight||0,i=t.$refs.pageHeader.clientHeight||0;t.mainStyle={height:"calc(100% - ".concat(e+i,"px)")},t.scrollRef=t.$refs.eScroll}))},refresh:function(){var t=this;this.$nextTick((function(){t.$refs.eScroll.refresh()}))}}},r=c,o=(i("d547"),i("4023")),u=Object(o["a"])(r,l,a,!1,null,null,null),p=u.exports;e["a"]={components:{Page:p},methods:{back:function(){this.$router.go(-1)}}}},6546:function(t,e,i){},d501:function(t,e,i){"use strict";i.r(e);var l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("page",{attrs:{title:"empty"},on:{handleNavLeftClick:t.back},scopedSlots:t._u([{key:"main",fn:function(){return[i("div",{staticClass:"items"},[i("p",{staticClass:"item_title"},[t._v("数据为空")]),i("vill-empty",{attrs:{image:"noData",description:"暂无数据"}})],1),i("div",{staticClass:"items"},[i("p",{staticClass:"item_title"},[t._v("搜索为空")]),i("vill-empty",{attrs:{image:"search",description:"没有找到数据哦"}})],1),i("div",{staticClass:"items"},[i("p",{staticClass:"item_title"},[t._v("定制图片的样式")]),i("vill-empty",{attrs:{image:t.url,imageStyle:t.imageStyle,description:"没有找到数据哦"}})],1),i("div",{staticClass:"items"},[i("p",{staticClass:"item_title"},[t._v("底部自定义")]),i("vill-empty",{attrs:{image:t.url,imageStyle:t.imageStyle,description:"没有找到数据哦"},scopedSlots:t._u([{key:"bottom",fn:function(){return[i("span",{staticClass:"text"},[t._v("我是自定义的内容")])]},proxy:!0}])})],1)]},proxy:!0}])})},a=[],s=i("5bb8"),n={mixins:[s["a"]],data:function(){return{url:i("cb70"),imageStyle:{width:"200px",height:"100px",borderRadius:"5px"}}}},c=n,r=i("4023"),o=Object(r["a"])(c,l,a,!1,null,null,null);e["default"]=o.exports},d547:function(t,e,i){"use strict";var l=i("6546"),a=i.n(l);a.a}}]);
//# sourceMappingURL=chunk-18503ef2.ed9fe4a5.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-80917308"],{"5bb8":function(t,e,l){"use strict";var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"vill-page"},[t._t("wrapper",[l("header",{ref:"pageHeader",staticClass:"vill-page-header"},[t._t("header",[l("vill-nav-bar",{attrs:{title:t.title,rightDisabled:!0},on:{"left-click":t.handleNavLeftClick}})])],2),l("main",{staticClass:"vill-page-main",style:t.mainStyle},[t._t("content",[l("vill-scroll",{ref:"eScroll"},[t._t("main",null,{scroll:t.scrollRef})],2)])],2),l("div",{ref:"lastInset"},[t._t("lastInset")],2)])],2)},i=[],n="vill-page",s="handleNavLeftClick",c={name:n,props:{title:{type:String,default:""}},data:function(){return{mainStyle:{},scrollRef:null}},mounted:function(){this.calculationHeight()},methods:{handleNavLeftClick:function(){this.$emit(s)},calculationHeight:function(){var t=this;this.$nextTick((function(){var e=t.$refs.lastInset.clientHeight||0,l=t.$refs.pageHeader.clientHeight||0;t.mainStyle={height:"calc(100% - ".concat(e+l,"px)")},t.scrollRef=t.$refs.eScroll}))},refresh:function(){var t=this;this.$nextTick((function(){t.$refs.eScroll.refresh()}))}}},r=c,o=(l("d547"),l("4023")),u=Object(o["a"])(r,a,i,!1,null,null,null),f=u.exports;e["a"]={components:{Page:f},methods:{back:function(){this.$router.go(-1)}}}},"5f7b":function(t,e,l){"use strict";l.r(e);var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("page",{attrs:{title:"switch"},on:{handleNavLeftClick:t.back},scopedSlots:t._u([{key:"main",fn:function(){return[l("div",{staticClass:"items"},[l("p",{staticClass:"item_title"},[t._v("switch的基础用法")]),l("vill-switch",{on:{change:t.handleChange},model:{value:t.value_1,callback:function(e){t.value_1=e},expression:"value_1"}},[t._v("单组switch")]),l("p",{staticClass:"item_change"},[t._v(t._s(t.value_1))])],1),l("div",{staticClass:"items"},[l("p",{staticClass:"item_title"},[t._v("单组switch-禁用")]),l("vill-switch",{attrs:{labelPosition:"left",fillSpace:20,disabled:!0},model:{value:t.value_2,callback:function(e){t.value_2=e},expression:"value_2"}},[t._v("单组switch")]),l("p",{staticClass:"item_change"},[t._v(t._s(t.value_2))])],1)]},proxy:!0}])})},i=[],n=l("5bb8"),s={mixins:[n["a"]],data:function(){return{value_1:!1,value_2:!0}},methods:{handleChange:function(t){console.log(t)}}},c=s,r=l("4023"),o=Object(r["a"])(c,a,i,!1,null,null,null);e["default"]=o.exports},6546:function(t,e,l){},d547:function(t,e,l){"use strict";var a=l("6546"),i=l.n(a);i.a}}]);
//# sourceMappingURL=chunk-80917308.14374f83.js.map
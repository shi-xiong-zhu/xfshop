"use strict";(self["webpackChunkmyapp"]=self["webpackChunkmyapp"]||[]).push([[177],{5099:function(t,s,o){o.r(s),o.d(s,{default:function(){return C}});var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"home_box"},[s("header",{staticClass:"header_box",class:{active:!t.isTop}},[s("div",{staticClass:"left_box"},[s("span",{staticClass:"iconfont icon-daohang",class:{icon:!t.isTop}})]),s("div",{staticClass:"middle_box"},[s("input",{attrs:{type:"text",placeholder:"新峰商城|山河无恙，人间皆安"},on:{click:t.handlerSearch}})]),s("div",{staticClass:"right_box"},[s("span",{staticClass:"iconfont icon-wode",class:{icon:!t.isTop}})])]),s("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:1e3,"indicator-color":"white"}},t._l(t.carousels,(function(t){return s("van-swipe-item",{key:t.carouselUrl},[s("img",{attrs:{src:t.carouselUrl,alt:""}})])})),1),s("van-grid",{attrs:{"column-num":5}},[s("van-grid-item",[[s("i",{staticClass:"iconfont icon-chujingchaoshi"}),s("i",{staticClass:"txt"},[t._v("新峰超市")])]],2),s("van-grid-item",[[s("i",{staticClass:"iconfont icon-fushi"}),s("i",{staticClass:"txt"},[t._v("新峰服饰")])]],2),s("van-grid-item",[[s("i",{staticClass:"iconfont icon-quanqiugou"}),s("i",{staticClass:"txt"},[t._v("全球购")])]],2),s("van-grid-item",[[s("i",{staticClass:"iconfont icon-shengxian"}),s("i",{staticClass:"txt"},[t._v("新锋生鲜")])]],2),s("van-grid-item",[[s("i",{staticClass:"iconfont icon-zhisongdaojia"}),s("i",{staticClass:"txt"},[t._v("新峰到家")])]],2),s("van-grid-item",[[s("i",{staticClass:"iconfont icon-chongzhijiaofei"}),s("i",{staticClass:"txt"},[t._v("充值缴费")])]],2),s("van-grid-item",[[s("i",{staticClass:"iconfont icon-temai"}),s("i",{staticClass:"txt"},[t._v("9.9元拼")])]],2),s("van-grid-item",[[s("i",{staticClass:"iconfont icon-lingquanzhongxin"}),s("i",{staticClass:"txt"},[t._v("领券")])]],2),s("van-grid-item",[[s("i",{staticClass:"iconfont icon-icon2"}),s("i",{staticClass:"txt"},[t._v("省钱")])]],2),s("van-grid-item",[[s("i",{staticClass:"iconfont icon-quanbu"}),s("i",{staticClass:"txt"},[t._v("全部")])]],2)],1),s("div",{staticClass:"commodityBgc"},[s("Goods",{attrs:{dataItem:t.newGoodses},scopedSlots:t._u([{key:"title",fn:function(){return[s("div",[s("h3",[t._v("新品上线")])])]},proxy:!0}])}),s("Goods",{attrs:{dataItem:t.hotGoodses},scopedSlots:t._u([{key:"title",fn:function(){return[s("div",[s("h3",[t._v("热销商品")])])]},proxy:!0}])}),s("Goods",{attrs:{dataItem:t.recommendGoodses},scopedSlots:t._u([{key:"title",fn:function(){return[s("div",[s("h3",[t._v("推荐")])])]},proxy:!0}])})],1)],1)},a=[],e=o(9547),n=function(){var t=this,s=t._self._c;return s("div",{staticClass:"good"},[s("div",{staticClass:"good-header"},[t._t("title",(function(){return[t._v("默认标题")]}))],2),s("ul",{staticClass:"good-box"},t._l(t.dataItem,(function(o){return s("router-link",{key:o.goodsId,staticClass:"good-item",attrs:{to:"/info/"+o.goodsId,tag:"li"}},[s("div",{staticClass:"img_box"},[s("img",{attrs:{src:o.goodsCoverImg,alt:""},on:{click:t.testClick}})]),s("div",{staticClass:"good-desc"},[s("div",{staticClass:"title"},[t._v(t._s(o.goodsName))]),s("div",{staticClass:"price"},[t._v("¥ "+t._s(t._f("money")(o.sellingPrice)))])])])})),1)])},c=[],l={name:"Goods",props:{dataItem:{type:[Array],requird:!0}},components:{},data(){return{name:"zhufeng"}},methods:{testClick(){console.log("测试")}}},r=l,d=o(1001),u=(0,d.Z)(r,n,c,!1,null,"51a5460b",null),m=u.exports,h={name:"Home",components:{Goods:m},created(){(0,e.f8)().then((t=>{this.carousels=t.data.carousels,this.hotGoodses=t.data.hotGoodses,this.newGoodses=t.data.newGoodses,this.recommendGoodses=t.data.recommendGoodses}))},mounted(){window.addEventListener("scroll",this.changeTop)},beforeDestroy(){window.removeEventListener("scroll",this.changeTop)},data(){return{isTop:!0,carousels:[],hotGoodses:[],newGoodses:[],recommendGoodses:[]}},methods:{changeTop(){let t=document.documentElement.scrollTop||document.body.scrollTop;this.isTop=!(t>50)},handlerSearch(){this.$router.push({path:"/product-list",query:{from:"home"}})}}},v=h,p=(0,d.Z)(v,i,a,!1,null,"f97bae0a",null),C=p.exports}}]);
//# sourceMappingURL=home.c434eae8.js.map
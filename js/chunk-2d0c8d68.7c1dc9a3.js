(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8d68"],{"571a":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container py-5"},[e("NavTabs"),e("h1",{staticClass:"mt-5"},[t._v("人氣餐廳")]),e("hr"),t._l(t.topRestaurants,(function(t){return e("div",{key:t.id,staticClass:"card mb-3",staticStyle:{"max-width":"540px",margin:"auto"}},[e("RestaurantsTopCard",{attrs:{"initial-restaurant":t}})],1)}))],2)},n=[],s=e("1da1"),i=(e("96cf"),e("8bb1")),c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row no-gutters"},[e("div",{staticClass:"col-md-4"},[e("router-link",{attrs:{to:{name:"restaurant",params:{id:t.restaurant.id}}}},[e("img",{staticClass:"card-img",attrs:{src:t.restaurant.image}})])],1),e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(t._s(t.restaurant.name))]),e("span",{staticClass:"badge badge-secondary"},[t._v("收藏數："+t._s(t.restaurant.FavoriteCount))]),e("p",{staticClass:"card-text"},[t._v(" "+t._s(t.restaurant.description)+" ")]),e("router-link",{staticClass:"btn btn-primary mr-2",attrs:{to:{name:"restaurant",params:{id:t.restaurant.id}}}},[t._v("Show")]),t.restaurant.isFavorited?e("button",{staticClass:"btn btn-danger mr-2",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.deleteFavorite(t.restaurant.id)}}},[t._v(" 移除最愛 ")]):e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.addFavorite(t.restaurant.id)}}},[t._v(" 加到最愛 ")])],1)])])},u=[],o=e("5530"),d=(e("d9e2"),e("4cce")),l=e("2fa3"),p={props:{initialRestaurant:{type:Object,required:!0}},data:function(){return{restaurant:this.initialRestaurant}},methods:{addFavorite:function(t){var a=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d["a"].addFavorite({restaurantId:t});case 3:if(r=e.sent,n=r.data,"success"===n.status){e.next=7;break}throw new Error(n.message);case 7:a.restaurant=Object(o["a"])(Object(o["a"])({},a.restaurant),{},{isFavorited:!0,FavoriteCount:a.restaurant.FavoriteCount+1}),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),l["a"].fire({icon:"error",title:"無法將餐廳加入最愛，請稍後再試"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()},deleteFavorite:function(t){var a=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d["a"].deleteFavorite({restaurantId:t});case 3:if(r=e.sent,n=r.data,"success"===n.status){e.next=7;break}throw new Error(n.message);case 7:a.restaurant=Object(o["a"])(Object(o["a"])({},a.restaurant),{},{isFavorited:!1,FavoriteCount:a.restaurant.FavoriteCount-1}),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),l["a"].fire({icon:"error",title:"無法將餐廳移除最愛，請稍後再試"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()}}},v=p,b=e("2877"),m=Object(b["a"])(v,c,u,!1,null,null,null),f=m.exports,h=e("c4c3"),w={components:{NavTabs:i["a"],RestaurantsTopCard:f},data:function(){return{topRestaurants:[]}},created:function(){this.fetchTopRestaurants()},methods:{fetchTopRestaurants:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var e,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,h["a"].getTopRestaurants();case 3:e=a.sent,r=e.data,t.topRestaurants=r.restaurants,a.next=11;break;case 8:a.prev=8,a.t0=a["catch"](0),l["a"].fire({icon:"error",title:"無法取得人氣餐廳，請稍後再試"});case 11:case"end":return a.stop()}}),a,null,[[0,8]])})))()}}},C=w,g=Object(b["a"])(C,r,n,!1,null,null,null);a["default"]=g.exports}}]);
//# sourceMappingURL=chunk-2d0c8d68.7c1dc9a3.js.map
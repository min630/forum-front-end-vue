(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d55d3ce2"],{"22ab":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container py-5"},[r("NavTabs"),r("h1",{staticClass:"mt-5"},[e._v("美食達人")]),r("hr"),r("div",{staticClass:"row text-center"},e._l(e.users,(function(e){return r("UsersTopCard",{key:e.id,attrs:{initialUserTop:e}})})),1)],1)},s=[],a=r("1da1"),o=(r("96cf"),r("d81d"),r("b0c0"),r("8bb1")),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-3"},[r("router-link",{attrs:{to:{name:"user",params:{id:e.user.id}}}},[r("img",{attrs:{src:e._f("emptyImage")(e.user.image),width:"140px",height:"140px"}})]),r("h2",[e._v(e._s(e.user.name))]),r("span",{staticClass:"badge badge-secondary"},[e._v("追蹤人數："+e._s(e.user.followerCount))]),r("p",{staticClass:"mt-3"},[e.user.isFollowed?r("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.unfollowUser(e.user.id)}}},[e._v(" 取消追蹤 ")]):r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.followUser(e.user.id)}}},[e._v(" 追蹤 ")])])],1)},u=[],c=r("5530"),l=(r("d9e2"),r("2708")),p=r("4cce"),d=r("2fa3"),f={props:{initialUserTop:{type:Object,require:!0}},mixins:[l["a"]],data:function(){return{user:this.initialUserTop}},methods:{followUser:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var n,s,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,p["a"].addFollowing({userId:e});case 3:if(n=r.sent,s=n.data,"success"===s.status){r.next=7;break}throw new Error(s.message);case 7:a=t.user.followerCount+1,t.user=Object(c["a"])(Object(c["a"])({},t.user),{},{isFollowed:!0,followerCount:a}),r.next=14;break;case 11:r.prev=11,r.t0=r["catch"](0),d["a"].fire({icon:"error",title:"無法加入追蹤，請稍後再試"});case 14:case"end":return r.stop()}}),r,null,[[0,11]])})))()},unfollowUser:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var n,s,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,p["a"].deleteFollowing({userId:e});case 3:if(n=r.sent,s=n.data,"success"===s.status){r.next=7;break}throw new Error(s.message);case 7:a=t.user.followerCount-1,t.user=Object(c["a"])(Object(c["a"])({},t.user),{},{isFollowed:!1,followerCount:a}),r.next=14;break;case 11:r.prev=11,r.t0=r["catch"](0),d["a"].fire({icon:"error",title:"無法取消追蹤，請稍後再試"});case 14:case"end":return r.stop()}}),r,null,[[0,11]])})))()}}},w=f,m=r("2877"),b=Object(m["a"])(w,i,u,!1,null,null,null),h=b.exports,v={components:{NavTabs:o["a"],UsersTopCard:h},data:function(){return{users:[]}},created:function(){this.fetchTopUsers()},methods:{fetchTopUsers:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p["a"].getTopUsers();case 3:r=t.sent,n=r.data,e.users=n.users.map((function(e){return{id:e.id,name:e.name,image:e.image,followerCount:e.FollowerCount,isFollowed:e.isFollowed}})),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),d["a"].fire({icon:"error",title:"無法取得美食達人，請稍後再試"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}},g=v,x=Object(m["a"])(g,n,s,!1,null,null,null);t["default"]=x.exports},d81d:function(e,t,r){"use strict";var n=r("23e7"),s=r("b727").map,a=r("1dde"),o=a("map");n({target:"Array",proto:!0,forced:!o},{map:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-d55d3ce2.c10f1277.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-694d9eb8"],{"0043":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.data&&t.data.length?e("ul",{ref:"tList",staticClass:"top-list"},t._l(t.data,function(a){return e("li",[e("a",{ref:"list",refInFor:!0,class:{active:a.active==a.name},attrs:{href:"javascript:;"},on:{click:function(e){t.jump(a.href)}}},[t._v(t._s(a.name))])])})):t._e()},s=[],n=(e("ac6a"),{name:"topList",props:["data"],mounted:function(){var t=this;this.$nextTick(function(){t.$refs.list&&t.$refs.list.forEach(function(a,e){a.classList.contains("active")&&t.$refs.tList.scrollTo(a.offsetLeft,0)})})},methods:{jump:function(t){t&&this.$router.push(t)}}}),c=n,o=(e("7b41"),e("2877")),r=Object(o["a"])(c,i,s,!1,null,null,null);r.options.__file="topList.vue";a["a"]=r.exports},"0bfb":function(t,a,e){"use strict";var i=e("cb7c");t.exports=function(){var t=i(this),a="";return t.global&&(a+="g"),t.ignoreCase&&(a+="i"),t.multiline&&(a+="m"),t.unicode&&(a+="u"),t.sticky&&(a+="y"),a}},3846:function(t,a,e){e("9e1e")&&"g"!=/./g.flags&&e("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:e("0bfb")})},"501c":function(t,a,e){},"5f20":function(t,a,e){"use strict";var i=e("d6a3"),s=e.n(i);s.a},"6b54":function(t,a,e){"use strict";e("3846");var i=e("cb7c"),s=e("0bfb"),n=e("9e1e"),c="toString",o=/./[c],r=function(t){e("2aba")(RegExp.prototype,c,t,!0)};e("79e5")(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?r(function(){var t=i(this);return"/".concat(t.source,"/","flags"in t?t.flags:!n&&t instanceof RegExp?s.call(t):void 0)}):o.name!=c&&r(function(){return o.call(this)})},"7b41":function(t,a,e){"use strict";var i=e("a2de"),s=e.n(i);s.a},"7f7f":function(t,a,e){var i=e("86cc").f,s=Function.prototype,n=/^\s*function ([^ (]*)/,c="name";c in s||e("9e1e")&&i(s,c,{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(t){return""}}})},a2de:function(t,a,e){},b140:function(t,a,e){"use strict";var i=e("501c"),s=e.n(i);s.a},c428:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bottom_loading"},[e("div",{staticClass:"preloader_wrapper active"},[e("div",{staticClass:"spinner_layer"},[e("div",{staticClass:"circle_clipper left"},[e("div",{staticClass:"circle"})]),e("div",{staticClass:"gap_patch"},[e("div",{staticClass:"circle"})]),e("div",{staticClass:"circle_clipper right"},[e("div",{staticClass:"circle"})])])])])}],n={},c=n,o=(e("b140"),e("2877")),r=Object(o["a"])(c,i,s,!1,null,null,null);r.options.__file="loading.vue";a["a"]=r.exports},d6a3:function(t,a,e){},e9f7:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.getData,expression:"getData"}],staticClass:"top-nav-height",attrs:{id:"lists","infinite-scroll-disabled":"busy","infinite-scroll-distance":"200"}},[e("top-nav",{attrs:{title:t.title,back:!0,menu:!0},on:{menuHandle:t.menuHandle}}),e("top-list",{attrs:{data:t.topListData}}),e("ul",{staticClass:"lists-box"},t._l(t.lists,function(a,i){return e("li",[e("a",{staticClass:"line",attrs:{href:"javascript:;"},on:{click:function(e){t.jump(a)}}},[a.coupon_amount?e("i",{staticClass:"juan"},[t._v(t._s(a.coupon_amount)+"元卷")]):t._e(),e("div",{staticClass:"img-box"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a["pict_url"],expression:"list['pict_url']"}],staticClass:"img"})]),e("div",{staticClass:"info bBor"},[e("p",{staticClass:"name"},[t._v(t._s(a["title"]))]),e("div",{staticClass:"price-box"},[e("s",{staticClass:"old-price"},[t._v("原价：￥"+t._s(parseFloat(a.coupon_amount)+parseFloat(a["zk_final_price"])))]),e("p",{staticClass:"new-price"},[t._v("卷后价：￥"+t._s(a["zk_final_price"]))]),e("p",{staticClass:"amount"},[t._v("月销量："+t._s(a["volume"]))])]),e("p",{staticClass:"btn"},[t._v("立即领卷")])])])])})),t.showLoad?e("loading"):t._e(),t.showDetails?e("details-item"):t._e(),t.showMenu?e("menu-app",{on:{menuHandle:t.menuHandle}}):t._e()],1)},s=[],n=(e("ac6a"),e("456d"),e("7f7f"),e("6b54"),e("c93e")),c=e("c428"),o=e("ebd8"),r=e("0043"),l=e("cfeb"),u=e("2251"),f=e("2f62"),p={components:{loading:c["a"],topNav:o["a"],topList:r["a"],detailsItem:l["a"],menuApp:u["a"]},computed:Object(n["a"])({},Object(f["c"])(["showDetails","material"])),data:function(){return{lists:[],showLoad:!0,title:"",showMenu:!1,busy:!1,page:1,topListData:[]}},created:function(){this.getCategory()},watch:{$route:function(t,a){this.lists=[],this.showLoad=!0,this.showMenu=!1,this.busy=!0,this.page=1,this.topListData=[],this.getData(),this.getCategory()}},methods:Object(n["a"])({},Object(f["b"])(["setDetails","setShowDetails"]),{getData:function(){var t=this;this.busy=!0,this.axios.get("".concat(this.apiUrl,"/material?id=").concat(this.$route.params.id),{params:{page:this.page}}).then(function(a){a.data&&"[object Array]"==Object.prototype.toString.call(a.data.data)&&a.data.data.length?(t.lists=t.lists.concat(a.data.data),t.page++,t.busy=!1):t.showLoad=!1})},getCategory:function(){switch(this.$route.name){case"good":this.title="好卷直播";break;case"brand":this.title="品牌卷";break;case"baby":this.title="母婴主题";break;case"goods":this.title="有好货";break;case"trend":this.title="潮流范";break;case"preferential":this.title="特惠";break}if(this.material[this.$route.name]&&this.material[this.$route.name][this.$route.params.id].name&&(this.title+=" - "+this.material[this.$route.name][this.$route.params.id].name,Object.keys(this.material[this.$route.name]).length>1))for(var t in this.material[this.$route.name])this.topListData.push({name:this.material[this.$route.name][t].name,href:"/".concat(this.$route.name,"/").concat(this.material[this.$route.name][t].id),active:this.material[this.$route.name][this.$route.params.id].name})},jump:function(t){t.reserve_price=parseFloat(t.coupon_amount)+parseFloat(t["zk_final_price"]),this.setDetails(t),this.setShowDetails(!0)},menuHandle:function(){this.showMenu=!this.showMenu}})},h=p,d=(e("5f20"),e("2877")),m=Object(d["a"])(h,i,s,!1,null,null,null);m.options.__file="index.vue";a["default"]=m.exports}}]);
//# sourceMappingURL=chunk-694d9eb8.0a41575a.js.map
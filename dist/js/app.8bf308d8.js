(function(e){function t(t){for(var r,u,i=t[0],s=t[1],c=t[2],l=0,p=[];l<i.length;l++)u=i[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d2086b7":"4864c679","chunk-2d21ed09":"8a8fb321"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var c=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,n[1](c)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",attrs:{id:"app"}},[n("div",{staticClass:"row text-center",attrs:{id:"nav"}},[n("router-link",{staticStyle:{"font-family":"Verdana, Helvetica, sans-serif","font-size":"16px"},attrs:{to:"/"}},[e._v("Home")]),e._v(" | \n    "),n("router-link",{staticStyle:{"font-family":"Verdana, Helvetica, sans-serif","font-size":"16px"},attrs:{to:"/consultas"}},[e._v("Consultas")]),e._v(" | \n    "),e.usuario?n("a",{on:{click:e.logout}},[e._v("Logout")]):e._e(),e.usuario?e._e():n("router-link",{staticStyle:{"font-family":"Verdana, Helvetica, sans-serif","font-size":"16px"},attrs:{to:"/login"}},[e._v("Login")])],1),n("router-view")],1)},a=[],u=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),i=n("2f62");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(u["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={name:"app",computed:c({},Object(i["c"])(["usuario"])),methods:c({},Object(i["b"])(["logout"]))},f=l,p=n("2877"),d=Object(p["a"])(f,o,a,!1,null,null,null),b=d.exports,v=n("8c4f"),h=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center"},[n("h1",[e._v("Bem vindo!")])])}],y={},g=Object(p["a"])(y,h,m,!1,null,null,null),O=g.exports;r["a"].use(v["a"]);var j=new v["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:O},{path:"/consultas",name:"consultas",component:function(){return n.e("chunk-2d21ed09").then(n.bind(null,"d6bc"))}},{path:"/Login",name:"login",component:function(){return n.e("chunk-2d2086b7").then(n.bind(null,"a55b"))}}]}),w=n("bfa9");r["a"].use(i["a"]);var _=new w["a"]({key:"my-sec-app",storage:localStorage}),k=new i["a"].Store({plugins:[_.plugin],state:{usuario:null,token:null},mutations:{setUsuario:function(e,t){e.usuario=t},setToken:function(e,t){e.token=t},logout:function(e){e.token=null,e.usuario=null}},actions:{}}),P=n("bc3a"),x=n.n(P);x.a.defaults.baseURL="http://localhost:8082/springRestSecurity",x.a.interceptors.request.use((function(e){return k.state.token&&(e.headers.Authorization=k.state.token),e})),x.a.interceptors.response.use((function(e){return e}),(function(e){throw 403===e.response.status?alert("Não autorizado!"):401===e.response.status&&(k.commit("logout"),j.push("/login")),e})),r["a"].config.productionTip=!1,new r["a"]({router:j,store:k,render:function(e){return e(b)}}).$mount("#app")}});
//# sourceMappingURL=app.8bf308d8.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2086b7"],{a55b:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[n("h2",[e._v("Login")]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"username"}},[e._v("Usuário")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.nome,expression:"nome"}],staticClass:"form-control",attrs:{type:"text",id:"username",required:"",autofocus:""},domProps:{value:e.nome},on:{input:function(t){t.target.composing||(e.nome=t.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"inputPassword"}},[e._v("Senha")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.senha,expression:"senha"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",required:""},domProps:{value:e.senha},on:{input:function(t){t.target.composing||(e.senha=t.target.value)}}})]),n("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[e._v("Ok")])])},o=[],s=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),a=n("bc3a"),i=n.n(a),u=n("2f62");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={name:"login",data:function(){return{nome:"",senha:""}},methods:l({},Object(u["b"])(["setUsuario","setToken"]),{login:function(){var e=this;i.a.post("login",{username:this.nome,password:this.senha}).then((function(t){console.log(t),e.setUsuario(t.data),e.setToken(t.headers.token),e.$router.push("/")})).catch((function(e){return console.log(e)}))}})},m=p,f=n("2877"),b=Object(f["a"])(m,r,o,!1,null,null,null);t["default"]=b.exports}}]);
//# sourceMappingURL=chunk-2d2086b7.1ebfb670.js.map
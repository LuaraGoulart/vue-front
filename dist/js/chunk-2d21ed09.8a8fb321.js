(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21ed09"],{d6bc:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("form",{on:{submit:function(e){return e.preventDefault(),t.cadastrar.apply(null,arguments)}}},[o("h2",[t._v("Consultas")]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"assunto"}},[t._v("Assunto")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.assunto,expression:"assunto"}],staticClass:"form-control",attrs:{type:"text",id:"assunto",required:"",autofocus:""},domProps:{value:t.assunto},on:{input:function(e){e.target.composing||(t.assunto=e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"texto"}},[t._v("Texto")]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.texto,expression:"texto"}],staticClass:"form-control",attrs:{id:"texto",required:""},domProps:{value:t.texto},on:{input:function(e){e.target.composing||(t.texto=e.target.value)}}})]),o("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[t._v("Salvar")])]),o("br"),o("table",{staticClass:"table table-striped"},[t._m(0),o("tbody",t._l(t.consultas,(function(e){return o("tr",{key:e.id},[o("td",[t._v(t._s(e.id))]),o("td",[t._v(t._s(e.assunto))]),o("td",[t._v(t._s(e.texto))]),o("td",[t._v(t._s(e.dataHora))]),o("td",[t._v(t._s(e.usuario.nome))])])})),0)])])},s=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",[o("tr",[o("th",[t._v("Id")]),o("th",[t._v("Assunto")]),o("th",[t._v("Texto")]),o("th",[t._v("Data/hora")]),o("th",[t._v("Usuário")])])])}],n=(o("8e6e"),o("ac6a"),o("456d"),o("bd86")),r=o("bc3a"),u=o.n(r),c=o("2f62");function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function l(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){Object(n["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var d={name:"consultas",data:function(){return{assunto:"",texto:"",consultas:[]}},computed:l({},Object(c["c"])(["usuario"])),methods:{cadastrar:function(){var t=this;u.a.post("consultas/save",{assunto:this.assunto,texto:this.texto,usuario:this.usuario}).then((function(e){console.log(e),t.assunto="",t.texto="",t.atualizar()})).catch((function(t){return console.log(t)}))},atualizar:function(){var t=this;u.a.get("/consultas/getAll",{headers:{Accept:"application/json"}}).then((function(e){console.log(e),t.consultas=e.data})).catch((function(t){return console.log(t)}))}},created:function(){this.atualizar()}},p=d,f=o("2877"),v=Object(f["a"])(p,a,s,!1,null,null,null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d21ed09.8a8fb321.js.map
webpackJsonp([1],{"3AqU":function(t,e){},AhPL:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("app-header"),this._v(" "),e("router-view"),this._v(" "),e("app-button-up"),this._v(" "),e("app-footer")],1)},staticRenderFns:[]};var i=a("VU/8")({name:"App"},n,!1,function(t){a("ljRo")},null,null).exports,r=a("/ocq"),l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-warning bg-gradient sticky-top pt-4",staticStyle:{height:"150px"}},[a("h2",[t._v(t._s(t.titulo))]),t._v(" "),a("ul",{staticClass:"list-group list-group-horizontal d-flex justify-content-center"},t._l(t.opciones,function(e){return a("li",{key:e.id,staticClass:"list-group-item justify-center"},[a("a",{staticStyle:{"text-decoration":"none"},attrs:{href:e.href}},[t._v(" "+t._s(e.titulo))])])}),0)])},staticRenderFns:[]},o=a("VU/8")({name:"Header",data:function(){return{msg:"mensaje",titulo:"CAC-Western Movies",opciones:[{id:1,titulo:"Tendencias",href:"/"},{id:2,titulo:"Registrarse",href:"/#/formregister"},{id:3,titulo:"Iniciar Sesión",href:"/#/form"}]}}},l,!1,null,null,null).exports,c=a("mvHQ"),d=a.n(c),u={name:"Main",data:function(){return{info:null,slide:0,sliding:null}},methods:{fetchData:function(){var t=this;fetch("https://api.sampleapis.com/movies/western").then(function(e){if(console.log("Status: "+e.status),console.log("Response: "+d()(e)),console.log(e),console.log(d()(e)),!e.ok)throw console.log("error status"),new Error("Not 200 ok");console.log("response OK"),e.json().then(function(e){console.log("Data:"),console.log(e),500==e.error?(console.log("error 500"),t.info="Error 500"):(console.log("Finalizamos fetch ok"),t.info=e)})}).catch(function(e){console.log("error del catch"),console.log(e),alert("Error al cargar la API (vuelva a intentar): "+e),t.info="Error Catch"})},alert:function(){var t=document.getElementById("liveAlertPlaceholder"),e=document.getElementById("liveAlertBtn");e&&e.addEventListener("click",function(){var e,a,s;e="Nice, you triggered this alert message!",a="success",(s=document.createElement("div")).innerHTML=['<div class="alert alert-'+a+' alert-dismissible" role="alert">',"   <div>"+e+"</div>",'   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',"</div>"].join(""),t.append(s)})},onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1}},mounted:function(){this.fetchData()}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[null!=t.info?a("app-wallpaper-movie"):t._e(),t._v(" "),a("div",{staticClass:"container"},[a("div",[null!=t.info&&"Error 500"!=t.info&&"Error Catch"!=t.info?a("app-searchbar"):t._e()],1),t._v(" "),null==t.info?a("h2",{staticClass:"mt-3"},[t._m(0),t._v("\n      Cargando...\n    ")]):t._e(),t._v(" "),"Error 500"==t.info?a("h2",{staticClass:"text-warning mt-3"},[a("div",{staticClass:"alert alert-warning",attrs:{role:"alert"}},[t._v("\n        ⚠️Error al cargar API vuelva a intentarlo..\n      ")])]):t._e(),t._v(" "),"Error Catch"==t.info?a("h2",{staticClass:"mt-3 text-danger h2"},[a("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v("\n        "+t._s(t.info)+"\n      ")])]):t._e(),t._v(" "),"Error 500"!=t.info&&null!=t.info&&"Error Catch"!=t.info?a("div",{staticClass:"d-flex flex-wrap justify-content-center"},t._l(t.info,function(e){return"https://m.media-amazon.com/images/M/MV5BZDYxMTQzNjgtZDJkMC00OGYwLTliYjgtNDA2ZjBiMmUxYmY4XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"!=e.posterURL&&"https://m.media-amazon.com/images/M/MV5BZGI5MjBmYzYtMzJhZi00NGI1LTk3MzItYjBjMzcxM2U3MDdiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"!=e.posterURL?a("div",{key:e.id,staticClass:"card mt-2",staticStyle:{width:"18rem"}},[a("img",{staticClass:"card-img-top",attrs:{src:e.posterURL,alt:""}}),t._v(" "),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(e.title))])])]):t._e()}),0):t._e()]),t._v(" "),null!=t.info&&"Error 500"!=t.info&&"Error Catch"!=t.info?a("div",{staticClass:"container mt-5"},[a("hr"),t._v(" "),a("h2",[t._v("Recomendadas")]),t._v(" "),null!=t.info?a("b-carousel",{attrs:{id:"carousel-1",interval:2e3},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[a("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[a("img",{staticClass:"d-block img-fluid w-50 mx-auto",attrs:{src:t.info[13].posterURL,alt:"image slot"}})]},proxy:!0}],null,!1,309986718)}),t._v(" "),a("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[a("img",{staticClass:"d-block img-fluid w-50 mx-auto",attrs:{src:t.info[15].posterURL,alt:"image slot"}})]},proxy:!0}],null,!1,296141656)}),t._v(" "),a("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[a("img",{staticClass:"d-block img-fluid w-50 mx-auto",attrs:{src:t.info[0].posterURL,alt:"image slot"}})]},proxy:!0}],null,!1,2140344204)})],1):t._e()],1):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"spinner-border",attrs:{role:"status"}},[e("span",{staticClass:"visually-hidden"},[this._v("Loading...")])])}]};var v=a("VU/8")(u,m,!1,function(t){a("lIPq")},null,null).exports,p={name:"SearchBar",data:function(){return{msj:"Search bar"}},methods:{alerta:function(){alert("Widget no disponible")}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("hr"),t._v(" "),a("form",{staticClass:"form-inline my-2"},[a("input",{staticClass:"form-control mt-5",attrs:{type:"search",placeholder:"Buscar película...","aria-label":"Search"}}),t._v(" "),a("button",{staticClass:"btn btn-outline-success my-1",attrs:{type:"submit"},on:{click:function(e){return t.alerta()}}},[t._v("\n      Search\n    ")])]),t._v(" "),a("hr")])},staticRenderFns:[]},_=a("VU/8")(p,f,!1,null,null,null).exports,h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mt-5"},[a("form",{staticClass:"row g-1 d-flex justify-content-center"},[a("div",{staticClass:"mb-3 col-sm-7"},[a("label",{staticClass:"form-label",attrs:{for:"exampleInputEmail1"}},[t._v("Email address")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",required:"",autocomplete:"username"}}),t._v(" "),a("div",{staticClass:"form-text",attrs:{id:"emailHelp"}},[t._v("\n        We'll never share your email with anyone else.\n      ")])]),t._v(" "),a("div",{staticClass:"mb-3 col-sm-7"},[a("label",{staticClass:"form-label",attrs:{for:"exampleInputPassword1"}},[t._v("Password")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1",required:"",autocomplete:"current-password"}})]),t._v(" "),a("div",{staticClass:"mb-3 col-md-6 text-center"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit",formaction:"/"}},[t._v("Submit")])]),t._v(" "),a("div",{staticClass:"mb-3 col-md-6 text-center"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"}},[a("a",{staticStyle:{"text-decoration":"none",color:"white"},attrs:{href:"/#/formregister"}},[t._v("Register")])])])])])}]},C=a("VU/8")({name:"Form",data:function(){return{msg:"mensaje"}}},h,!1,null,null,null).exports,b={name:"FormRegister",data:function(){return{inputApellidoClass:"form-control is-invalid"}},methods:{prueba1:function(){console.log("prueba: ")}}},g={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-md mt-5"},[a("form",{staticClass:"d-flex justify-content-center"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-7 mb-3"},[a("label",{attrs:{for:"validationServer01"}},[t._v("Nombre")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"text",id:"validationServer01",placeholder:"Nombre",required:""}})]),t._v(" "),a("div",{staticClass:"col-md-4 mb-3"},[a("label",{attrs:{for:"validationServer02"}},[t._v("Apellido")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"text",id:"validationServer02",placeholder:"Apellido",required:""}})]),t._v(" "),a("div",{staticClass:"col-md-4 mb-3"},[a("label",{attrs:{for:"validationServerUsername"}},[t._v("Email")]),t._v(" "),a("div",{staticClass:"input-group"},[a("input",{staticClass:"form-control",attrs:{type:"email",id:"validationServerUsername",placeholder:"Email","aria-describedby":"inputGroupPrepend3",required:""}})])]),t._v(" "),a("div",{staticClass:"col-md-6 mb-3"},[a("label",{attrs:{for:"validationServer03"}},[t._v("Ciudad")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"text",id:"validationServer03",placeholder:"Ciudad",required:""}})]),t._v(" "),a("div",{staticClass:"col-md-3 mb-3"},[a("label",{attrs:{for:"validationServer04"}},[t._v("Provincia")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"text",id:"validationServer04",placeholder:"Provincia",required:""}})]),t._v(" "),a("div",{staticClass:"col-md-3 mb-3"},[a("label",{attrs:{for:"validationServer05"}},[t._v("CP")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"text",id:"validationServer05",placeholder:"Codigo Postal",required:""}})]),t._v(" "),a("div",{staticClass:"form-check"},[a("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"invalidCheck3",required:""}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"invalidCheck3"}},[t._v("\n          Aceptar términos y condiciones\n        ")])]),t._v(" "),a("button",{staticClass:"btn btn-primary mt-3",attrs:{type:"submit",formaction:"/"}},[t._v("Ingresar")])])])])}]},x=a("VU/8")(b,g,!1,null,null,null).exports,y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("footer",{staticClass:"d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top container"},[e("p",{staticClass:"col-md-4 mb-0 text-muted"},[this._v("© 2022 Company, Inc")]),this._v(" "),e("a",{staticClass:"col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none",attrs:{href:"/"}},[e("svg",{staticClass:"bi me-2",attrs:{width:"40",height:"32"}},[e("use",{attrs:{"xlink:href":"#bootstrap"}})])]),this._v(" "),this._m(0)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"nav col-md-4 justify-content-end"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link px-2 text-muted",attrs:{href:"#"}},[t._v("Home")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link px-2 text-muted",attrs:{href:"#"}},[t._v("Features")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link px-2 text-muted",attrs:{href:"#"}},[t._v("Pricing")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link px-2 text-muted",attrs:{href:"#"}},[t._v("FAQs")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link px-2 text-muted",attrs:{href:"#"}},[t._v("About")])])])}]},E=a("VU/8")({name:"Footer",data:function(){return{info:"info"}}},y,!1,null,null,null).exports,S={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("a",{staticClass:"fixed-bottom rounded-5 m-3",staticStyle:{width:"35px"},attrs:{href:"#"}},[e("i",{staticClass:"bi bi-arrow-up-circle-fill",staticStyle:{"font-size":"2rem",color:"yellowgreen"}})])])}]},k=a("VU/8")({name:"ButtonUp",data:function(){return{}}},S,!1,null,null,null).exports,w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"wallpaper-div"}},[a("h1",{staticClass:"h1 text-white pt-5"},[t._v("Ve todas las películas Western en un solo lugar")]),t._v(" "),a("button",{staticClass:"btn btn-warning mt-5",on:{click:function(e){return t.$router.push("/formregister")}}},[t._v("Registrate ahora")])])},staticRenderFns:[]};var j=a("VU/8")({name:"WallpaperMovie",data:function(){return{}}},w,!1,function(t){a("3AqU")},null,null).exports,R={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h2",[t._v(" Recomendadas ")]),t._v(" "),a("b-carousel",{staticClass:"class-name",attrs:{id:"carousel-1",interval:4e3,controls:""},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[a("b-carousel-slide",{staticClass:"class-name",attrs:{caption:"First slide",text:"Nulla vitae elit libero, a pharetra augue mollis interdum."}}),t._v(" "),a("b-carousel-slide",{staticClass:"class-name"}),t._v(" "),a("b-carousel-slide",{staticClass:"class-name"})],1)],1)},staticRenderFns:[]};var U=a("VU/8")({data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1}}},R,!1,function(t){a("Q2jc")},null,null).exports,M=a("Tqaz"),F=a("RInU"),A=a.n(F);a("AhPL");s.default.use(r.a),s.default.component("b-carousel",M.a),s.default.component("app-header",o),s.default.component("app-main",v),s.default.component("app-searchbar",_),s.default.component("app-footer",E),s.default.component("app-button-up",k),s.default.component("app-wallpaper-movie",j),s.default.component("app-carousel-movies",U),s.default.use(M.b),A.a.init();var q=new r.a({routes:[{path:"/",name:"Main",component:v},{path:"/form",name:"Form",component:C},{path:"/formregister",name:"FormRegister",component:x}]});s.default.config.productionTip=!1,new s.default({el:"#app",router:q,components:{App:i},template:"<App/>"})},Q2jc:function(t,e){},lIPq:function(t,e){},ljRo:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.bb6730772bcc8335b5af.js.map
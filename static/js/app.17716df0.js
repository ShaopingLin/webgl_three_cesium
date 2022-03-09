(function(e){function n(n){for(var r,a,c=n[0],u=n[1],d=n[2],v=0,p=[];v<c.length;v++)a=c[v],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(n);while(p.length)p.shift()();return i.push.apply(i,d||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,c=1;c<t.length;c++){var u=t[c];0!==o[u]&&(r=!1)}r&&(i.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},o={app:0},i=[];function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/webgl_three_cesium/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=n,c=c.slice();for(var d=0;d<c.length;d++)n(c[d]);var l=u;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"2d8c":function(e,n,t){"use strict";t("9a30")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23");function o(e,n){var t=Object(r["u"])("router-view");return Object(r["o"])(),Object(r["c"])(t)}t("57ed");var i=t("6b0d"),a=t.n(i);const c={},u=a()(c,[["render",o]]);var d=u,l=t("6c02"),v={class:"home"};function p(e,n,t,o,i,a){return Object(r["o"])(),Object(r["d"])("div",v,[Object(r["e"])("div",{onClick:n[0]||(n[0]=function(){return o.water&&o.water.apply(o,arguments)})},"去水")])}var f={name:"Home",components:{},setup:function(){Object(l["c"])();var e=Object(l["d"])();function n(){e.push("/water")}return{water:n}}};const s=a()(f,[["render",p]]);var m=s,b=function(e){return Object(r["r"])("data-v-2beda913"),e=e(),Object(r["p"])(),e},w={class:"waterRoot"},h=Object(r["f"])("水 "),g=b((function(){return Object(r["e"])("div",{id:"threeContainer"},null,-1)})),y=[h,g];function j(e,n,t,o,i,a){return Object(r["o"])(),Object(r["d"])("div",w,y)}var O=t("5a89"),x=t("5c40"),_=t("4721"),D={name:"Water",setup:function(e,n){Object(x["w"])((function(){var e=document.getElementById("threeContainer"),n=new O["j"](70,window.innerWidth/window.innerHeight,.01,1e3);n.position.z=10.2,n.position.y=.5;var t=new O["l"],r=new O["a"](10,.2,10),o=new O["m"]({uniforms:{tDiffuse:{value:null},tDepth:{value:null}},vertexShader:"\n                varying vec2 vUv;\n                varying vec3 v_position;\n                varying vec3 v_normal;\n                void main() {\n                    v_normal = vec3( (viewMatrix * vec4(normal,1.)).xyz );  //vec3( (viewMatrix * vec4(normal,1.)).xyz );\n                    vUv = uv;\n                    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n                }",fragmentShader:"\n                #include <packing>\n                varying vec2 vUv;\n                uniform sampler2D tDiffuse;\n                uniform sampler2D tDepth;\n                varying vec3 v_normal;\n                void main(){\n                    vec4 color = texture2D(tDiffuse,vUv);\n                    gl_FragColor = vec4(v_normal,1.);\n                }\n                "}),i=new O["h"](r,o);t.add(i);var a=new O["t"]({antialias:!0});a.setSize(window.innerWidth,window.innerHeight),a.setAnimationLoop(p);new _["a"](n,a.domElement);e.appendChild(a.domElement);var c="textures/",u=".png",d=[c+"px"+u,c+"nx"+u,c+"py"+u,c+"ny"+u,c+"pz"+u,c+"nz"+u],l=(new O["b"]).load(d);t.background=l;var v=f();function p(e){a.setRenderTarget(v),a.render(t,n),o.uniforms.tDiffuse.value=v.texture,a.setRenderTarget(null),a.render(t,n)}function f(){var e=new O["s"](window.innerWidth,window.innerHeight);return e.texture.minFilter=O["i"],e.texture.magFilter=O["i"],e.stencilBuffer=O["c"]===O["d"],e.depthTexture=new O["e"],e.depthTexture.format=O["c"],e.depthTexture.type=O["p"],e}}))}};t("2d8c");const M=a()(D,[["render",j],["__scopeId","data-v-2beda913"]]);var P=M,S=[{path:"/",name:"Home",component:m},{path:"/water",name:"Water",component:P}],T=Object(l["a"])({history:Object(l["b"])(),routes:S}),k=T;Object(r["b"])(d).use(k).mount("#app")},"57ed":function(e,n,t){"use strict";t("7de0")},"7de0":function(e,n,t){},"9a30":function(e,n,t){}});
//# sourceMappingURL=app.17716df0.js.map
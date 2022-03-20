(function(e){function n(n){for(var r,o,c=n[0],l=n[1],u=n[2],v=0,s=[];v<c.length;v++)o=c[v],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&s.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(n);while(s.length)s.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,c=1;c<t.length;c++){var l=t[c];0!==a[l]&&(r=!1)}r&&(i.splice(n--,1),e=o(o.s=t[0]))}return e}var r={},a={app:0},i=[];function o(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=r,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="/webgl_three_cesium/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=n,c=c.slice();for(var u=0;u<c.length;u++)n(c[u]);var d=l;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"38b9":function(e,n,t){"use strict";t("4972")},4972:function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23");function a(e,n){var t=Object(r["t"])("router-view");return Object(r["n"])(),Object(r["c"])(t)}t("57ed");var i=t("6b0d"),o=t.n(i);const c={},l=o()(c,[["render",a]]);var u=l,d=t("6c02"),v={class:"home"};function s(e,n,t,a,i,o){return Object(r["n"])(),Object(r["d"])("div",v,[Object(r["e"])("div",{onClick:n[0]||(n[0]=function(){return a.water&&a.water.apply(a,arguments)})},"去水")])}var f={name:"Home",components:{},setup:function(){Object(d["c"])();var e=Object(d["d"])();function n(){e.push("/water")}return{water:n}}};const p=o()(f,[["render",s]]);var m=p,w=function(e){return Object(r["q"])("data-v-93ca64d4"),e=e(),Object(r["o"])(),e},x={class:"waterRoot"},h=w((function(){return Object(r["e"])("div",{id:"threeContainer"},null,-1)})),g=[h];function b(e,n,t,a,i,o){return Object(r["n"])(),Object(r["d"])("div",x,g)}t("d81d");var y=t("5a89"),D=t("4721"),P=t("34ad"),j=t("32d9"),F=t("360d"),M=t("93e9"),z=(t("31f6"),{name:"Water",mounted:function(){var e,n,t,r=[],a=(new y["ub"]).load("textures/ground.png",(function(e){r.push(!0)})),i=(new y["ub"]).load("textures/normal.png",(function(e){r.push(!0)})),o=document.getElementById("threeContainer"),c=new y["ab"](70,window.innerWidth/window.innerHeight,.01,1e3);c.position.z=10.2,c.position.y=.5;var l=new y["kb"],u=new y["kb"],d=new y["kb"],v=new y["bb"](10,10,1,1),s=new y["lb"]({uniforms:{cameraNear:{value:c.near},cameraFar:{value:c.far},groundNTx:{value:i}},vertexShader:"\n                varying vec2 vUv;\n                varying vec3 v_position;\n                varying vec3 v_normal;\n                void main() {\n                    vUv = uv;\n                    v_normal = normalMatrix * normalize(normal);\n                    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n                }",fragmentShader:"\n                #include <packing>\n                varying vec2 vUv;\n                varying vec3 v_normal;\n                uniform float cameraNear;\n                uniform float cameraFar;\n                uniform sampler2D groundNTx;\n                void main() {\n                    vec3 nDetail = texture2D(groundNTx,vUv).rgb;\n                    vec3 n = normalize(v_normal*nDetail);\n\n                    // vec3 n = v_normal;\n                    vec3 nv_color = n*0.5  + 0.5;\n                    vec4 final2 = vec4(nv_color,1.);\n\n\n                    gl_FragColor = final2;\n\n                }"}),f=new y["O"](v,s);f.rotation.x=-Math.PI/2,f.updateMatrix(),u.add(f);var p=new y["bb"](10,10,1,1),m=new y["Q"]({map:a}),w=new y["O"](p,m);w.rotation.x=-Math.PI/2,w.material.map.needsUpdate=!0,d.add(w);var x=new y["Eb"]({antialias:!0});x.setSize(window.innerWidth,window.innerHeight),x.setAnimationLoop(V),t=new M["a"](l,c),e=new j["a"](x),e.addPass(t);var h=I({x:0,y:0,width:window.innerWidth,height:window.innerHeight},{near:0,far:1});n=new F["a"]({glslVersion:y["r"],uniforms:{tDiffuse:{value:null},tDepth:{value:null},cameraNear:{value:c.near},cameraFar:{value:c.far},tNormal:{value:null},groundDepth:{value:null},viewPortMatrixInverse:{value:h},projectionMatrixInverse:{value:c.projectionMatrixInverse},cameraProjectionMatrix:{value:c.projectionMatrix},u_resolution:{value:new y["Ab"](window.innerWidth,window.innerHeight)},groundTexture:{value:a}},vertexShader:"\n                        varying vec2 vUv;\n                        varying vec3 v_position;\n                        varying mat4 v_mvMatrix;\n                        void main() {\n                            vUv = uv;\n                            v_mvMatrix = modelViewMatrix;\n                            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n        \n                        }",fragmentShader:"\n                        #include <packing>\n                        varying vec2 vUv;\n                        uniform float cameraNear;\n                        uniform float cameraFar;\n                        uniform sampler2D tDiffuse;\n                        uniform sampler2D tDepth;\n                        uniform sampler2D tNormal;\n                        uniform sampler2D groundDepth;\n                        uniform mat4 viewPortMatrixInverse;\n                        uniform mat4 projectionMatrixInverse;\n                        uniform mat4 cameraProjectionMatrix;\n                        uniform vec2 u_resolution;\n                        uniform sampler2D groundTexture;\n                        float readDepth( sampler2D depthSampler, vec2 coord ) {\n                            float fragCoordZ = texture2D( depthSampler, coord ).x;\n                            float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );\n                            return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );\n                        }\n                        vec3 getViewNormal( const in vec2 uv ) {\n                            return unpackRGBToNormal( texture2D( tNormal, uv ).xyz );\n                        }\n                        float getViewZ( const in float depth ) {\n                            return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );\n                        }\n                        vec4 getViewPosition( const in vec2 uv, const in float depth/*clip space*/, const in float clipW ) {\n                            vec4 clipPosition = vec4( ( vec3( uv, depth ) - 0.5 ) * 2.0, 1.0 );//ndc\n                            clipPosition *= clipW; //clip\n                            return ( projectionMatrixInverse * clipPosition );//view\n                        }\n                        void main() {\n                            float maxDistance = 2.;\n                            float resolution  = 0.5;\n                            float thickness   = .15;\n                            \n                            vec4 baseColor = texture2D(groundTexture,vUv);\n                            vec4 color = texture2D(tDiffuse,vUv);\n                            vec4 n = vec4(normalize(getViewNormal(vUv)),1.);\n                            float depthMain = texture2D(tDepth,vUv).r;\n                            float depthGround = texture2D(groundDepth,vUv).r;\n        \n                            vec2 groundUv;//叠上贴图，需要把地板视图转为uv\n                            if(\n                                // (n.r!=0. ||n.g!=0. ||n.b!=0.) && \n                                depthGround<depthMain){\n                                //先获取片元到视角向量(eyePos)\n                                float viewZ = getViewZ( depthGround );\n                                float clipW = cameraProjectionMatrix[2][3] * viewZ+cameraProjectionMatrix[3][3];\n                                vec4 viewPosition= getViewPosition( vUv, depthGround, clipW ); //地面视图空间坐标获取到了\n                                \n                                //反射方向\n                                vec3 reflectDir = normalize(reflect(viewPosition.xyz,n.xyz));\n                                //开始前进\n                                color = vec4(1.);//texture2D(tDiffuse,vec2(reflectDir.y,reflectDir.x));\n                                \n        \n                                vec4 startView = vec4(viewPosition.xyz + (reflectDir *           0.), 1.);\n                                vec4 endView   = vec4(viewPosition.xyz + (reflectDir * maxDistance), 1.);\n        \n                                vec2 texSize  = u_resolution;\n                                vec2 texCoord = gl_FragCoord.xy / texSize;\n        \n                                vec4 startFrag = cameraProjectionMatrix * startView;\n                                startFrag.xyz/=startFrag.w;\n                                startFrag.xy  = (startFrag.xy  + 1.)* 0.5;\n                                startFrag.xy  *= texSize;\n        \n                                vec4 endFrag = cameraProjectionMatrix * endView;\n                                endFrag.xyz/=endFrag.w;\n                                endFrag.xy  = (endFrag.xy+1.) * 0.5;\n                                endFrag.xy  *= texSize;\n        \n                                vec4 positionTo = viewPosition;\n        \n                                vec4 uv = vec4(0.0);\n                                vec2 frag = startFrag.xy;\n                                uv.xy = frag / texSize;\n                                float deltaX    = endFrag.x - startFrag.x;\n                                float deltaY    = endFrag.y - startFrag.y;\n                                // 防止屏幕中间出现黑线\n                                if(deltaX==0.){\n                                    deltaX=1.;\n                                }\n                                if(deltaY==0.){\n                                    deltaY=1.;\n                                }\n                                \n                                float useX      = abs(deltaX) >= abs(deltaY) ? 1. : 0.;\n                                float delta     = mix(abs(deltaY), abs(deltaX), useX) * clamp(resolution, 0., 1.);\n                                vec2  increment = vec2(deltaX, deltaY) / max(delta, 0.001);\n                                \n                                //float curPositionX;\n                                //float curPositionY;\n                                // curPositionX = (startFrag.x)*(1.-search1)+(endFrag.x)*search1;\n                                // curPositionY = (startFrag.y)*(1.-search1)+(endFrag.y)*search1;\n        \n        \n                                float search0 = 0.;\n                                float search1 = 0.;\n                                \n                                int hit0 = 0;\n                                int hit1 = 0;\n        \n                                float viewDistance = startView.z;\n                                float depth        = 0.;\n        \n                                float i = 0.;\n                                for(i=0.;i<delta;i+=1.){\n                                    if(delta>500.){\n                                        gl_FragColor = baseColor;\n                                        return;\n                                    }\n                                    frag      += increment;\n                                    uv.xy      = frag / texSize;\n                                    if(uv.x>1. || uv.y>1. || uv.x<0. || uv.y<0.){\n                                        break;\n                                    }\n                                    \n                                    float dd = texture2D(tDepth,uv.xy).r;\n                                    float viewZZ = getViewZ( dd );\n                                    float clipWW = cameraProjectionMatrix[2][3] * viewZZ+cameraProjectionMatrix[3][3];\n                                    positionTo = vec4( getViewPosition( uv.xy, dd, clipWW ).xyz,1.); //地面视图空间坐标获取到了\n                                   \n                                    \n                                    search1 = mix\n                                        ( (frag.y - startFrag.y) / deltaY\n                                        , (frag.x - startFrag.x) / deltaX\n                                        , useX\n                                        );\n                                    search1 = clamp(search1, 0.0, 1.0);\n                                    viewDistance = (startView.z * endView.z) / mix(endView.z, startView.z, search1);\n                                    depth        = abs(positionTo.z)-abs(viewDistance);\n                                    float wtfD = abs(viewDistance)-abs(positionTo.z);\n                                    if (\n                                        depth>wtfD &&\n                                        depth < thickness \n                                        && dd!=1. ) \n                                    {\n                                        hit0 = 1;\n                                        break;\n                                    }\n                                }\n        \n                                if(hit0>0){\n                                    color = texture2D(tDiffuse,uv.xy);\n                                    color = mix(baseColor,color,0.5);\n                                    //可以在这里模糊化反射\n                                    \n                                }else{\n                                    color = baseColor;\n                                }\n                                \n                            }\n                            \n                            gl_FragColor = color;\n        \n                        }"}),e.addPass(n);var g=new y["l"](16777215,1);g.rotation.x=Math.PI/2,g.rotation.z=Math.PI/2,g.position.x=50,g.position.y=10,l.add(g);var b=new y["l"](16777215,.7);b.rotation.x=-Math.PI/2,b.rotation.z=-Math.PI/2,b.position.x=10,b.position.y=10,d.add(b);var z=new y["l"](16777215,.3);z.rotation.x=Math.PI/2,z.rotation.z=Math.PI/2,z.position.x=-10,z.position.y=10,d.add(z);new D["a"](c,x.domElement);o.appendChild(x.domElement);var O=U(),_=N(),T=S();function V(t){2===r.length&&(e.renderer.setRenderTarget(O),e.renderer.render(l,c),n.uniforms.tDepth.value=O.depthTexture,e.renderer.setRenderTarget(_),e.renderer.render(u,c),n.uniforms.tNormal.value=_.texture,n.uniforms.groundDepth.value=_.depthTexture,e.renderer.setRenderTarget(T),e.renderer.render(d,c),n.uniforms.groundTexture.value=T.texture,e.renderer.setRenderTarget(null),e.render())}function U(){var e=new y["Db"](window.innerWidth,window.innerHeight);return e.texture.minFilter=y["U"],e.texture.magFilter=y["U"],e.stencilBuffer=y["i"]===y["j"],e.depthTexture=new y["k"],e.depthTexture.format=y["i"],e.depthTexture.type=y["zb"],e}function N(){var e=new y["Db"](window.innerWidth,window.innerHeight,{minFilter:y["U"],magFilter:y["U"],format:y["ib"],type:y["t"]});return e.stencilBuffer=y["i"]===y["j"],e.depthTexture=new y["k"],e.depthTexture.format=y["i"],e.depthTexture.type=y["zb"],e.texture.mapping=y["xb"],e}function S(){var e=new y["Db"](window.innerWidth,window.innerHeight,{minFilter:y["U"],magFilter:y["U"],format:y["ib"],type:y["t"]});return e}function I(e,n){var t=new y["N"],r=new y["N"];return t.set(e.width/2,0,0,e.x+e.width/2,0,e.height/2,0,e.y+e.height/2,0,0,(n.far-n.near)/2,(n.far+n.near)/2,0,0,0,1),r.getInverse(t,!0),r}(new P["a"]).setPath("car/").load("scene.gltf",(function(e){l.add(e.scene),e.scene.scale.x=.01,e.scene.scale.y=.01,e.scene.scale.z=.01,e.scene.position.y=0}))}});t("38b9");const O=o()(z,[["render",b],["__scopeId","data-v-93ca64d4"]]);var _=O,T=[{path:"/",name:"Home",component:m},{path:"/water",name:"Water",component:_}],V=Object(d["a"])({history:Object(d["b"])(),routes:T}),U=V;Object(r["b"])(u).use(U).mount("#app")},"57ed":function(e,n,t){"use strict";t("7de0")},"7de0":function(e,n,t){}});
//# sourceMappingURL=app.2ef59065.js.map
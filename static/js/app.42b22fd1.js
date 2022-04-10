(function(e){function n(n){for(var r,a,c=n[0],l=n[1],d=n[2],u=0,v=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&v.push(i[a][0]),i[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);s&&s(n);while(v.length)v.shift()();return o.push.apply(o,d||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,c=1;c<t.length;c++){var l=t[c];0!==i[l]&&(r=!1)}r&&(o.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},i={app:0},o=[];function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/webgl_three_cesium/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=n,c=c.slice();for(var d=0;d<c.length;d++)n(c[d]);var s=l;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23");function i(e,n){var t=Object(r["t"])("router-view");return Object(r["n"])(),Object(r["c"])(t)}t("57ed");var o=t("6b0d"),a=t.n(o);const c={},l=a()(c,[["render",i]]);var d=l,s=t("6c02"),u={class:"home"};function v(e,n,t,i,o,a){return Object(r["n"])(),Object(r["d"])("div",u,[Object(r["e"])("div",{onClick:n[0]||(n[0]=function(){return i.water&&i.water.apply(i,arguments)})},"去水"),Object(r["e"])("div",{onClick:n[1]||(n[1]=function(){return i.cloud&&i.cloud.apply(i,arguments)})},"去云")])}var p={name:"Home",components:{},setup:function(){Object(s["c"])();var e=Object(s["d"])();function n(){e.push("/water")}function t(){e.push("/cloud")}return{water:n,cloud:t}}};const m=a()(p,[["render",v]]);var w=m,h=function(e){return Object(r["q"])("data-v-b755fbd6"),e=e(),Object(r["o"])(),e},f={class:"waterRoot"},g=h((function(){return Object(r["e"])("div",{id:"threeContainer"},null,-1)})),x=[g];function y(e,n,t,i,o,a){return Object(r["n"])(),Object(r["d"])("div",f,x)}t("d81d");var b=t("5a89"),P=t("4721"),D=t("34ad"),j=t("32d9"),M=t("360d"),z=t("93e9"),_=(t("31f6"),{name:"Water",mounted:function(){var e=new b["jb"],n=new b["jb"],t=new b["Z"](90,window.innerWidth/window.innerHeight,.1,1e3);t.rotation.x=Math.PI/2,t.rotation.y=Math.PI,t.rotation.z=Math.PI/2,t.position.x=15,t.position.y=15;var r=new b["m"](16777215,1);r.rotation.x=-Math.PI/2,r.rotation.y=Math.PI/4,r.rotation.z=Math.PI/2,r.position.x=15,r.position.y=15,e.add(r),t.updateProjectionMatrix();new b["f"](t);e.add(t);var i,o,a,c=x({x:0,y:0,width:window.innerWidth,height:window.innerHeight},{near:.01,far:1e3});window.baseUrl="";var l=document.getElementById("threeContainer"),d=new b["Z"](70,window.innerWidth/window.innerHeight,.01,500);d.position.z=10.2,d.position.y=.5,e.add(d);var s;new b["ab"](10,10,1,1);(new D["a"]).setPath(window.baseUrl+"/ground/").load("scene.gltf",(function(e){var t=new b["e"];t.copy(e.scene.children[0].children[0].children[0].geometry);var r=e.scene.children[0].children[0].children[0].material.map;s=_(r);var i=new b["O"](t,s);i.rotation.x=-Math.PI/2,i.position.y=0,n.add(i)}));var u=new b["Eb"]({antialias:!0});u.setSize(window.innerWidth,window.innerHeight),u.setAnimationLoop(w),a=new z["a"](e,d),i=new j["a"](u),i.addPass(a),o=new M["a"]({glslVersion:b["s"],uniforms:{tDiffuse:{value:null},tDepth:{value:null},cameraNear:{value:d.near},cameraFar:{value:d.far},tNormal:{value:null},groundDepth:{value:null},viewPortMatrixInverse:{value:c},projectionMatrixInverse:{value:d.projectionMatrixInverse},cameraProjectionMatrix:{value:d.projectionMatrix},u_resolution:{value:new b["zb"](window.innerWidth,window.innerHeight)},groundTexture:{value:null},onlyShadow:{value:null}},vertexShader:"\n                        varying vec2 vUv;\n                        varying vec3 v_position;\n                        varying mat4 v_mvMatrix;\n                        void main() {\n                            vUv = uv;\n                            v_mvMatrix = modelViewMatrix;\n                            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n        \n                        }",fragmentShader:"\n                        #include <packing>\n                        varying vec2 vUv;\n                        uniform float cameraNear;\n                        uniform float cameraFar;\n                        uniform sampler2D tDiffuse;\n                        uniform sampler2D tDepth;\n                        uniform sampler2D tNormal;\n                        uniform sampler2D groundDepth;\n                        uniform mat4 viewPortMatrixInverse;\n                        uniform mat4 projectionMatrixInverse;\n                        uniform mat4 cameraProjectionMatrix;\n                        uniform vec2 u_resolution;\n                        uniform sampler2D groundTexture;\n                        uniform sampler2D onlyShadow;\n                        float readDepth( sampler2D depthSampler, vec2 coord ) {\n                            float fragCoordZ = texture2D( depthSampler, coord ).x;\n                            float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );\n                            return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );\n                        }\n                        vec3 getViewNormal( const in vec2 uv ) {\n                            return unpackRGBToNormal( texture2D( tNormal, uv ).xyz );\n                        }\n                        float getViewZ( const in float depth ) {\n                            return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );\n                        }\n                        vec4 getViewPosition( const in vec2 uv, const in float depth/*clip space*/, const in float clipW ) {\n                            vec4 clipPosition = vec4( ( vec3( uv, depth ) - 0.5 ) * 2.0, 1.0 );//ndc\n                            clipPosition *= clipW; //clip\n                            return ( projectionMatrixInverse * clipPosition );//view\n                        }\n                        vec4 blur(in sampler2D tx,in vec2 uv){\n                            float Pi = 6.28318530718; // Pi*2\n                            // GAUSSIAN BLUR SETTINGS {{{\n                            float Directions = 16.0; // BLUR DIRECTIONS (Default 16.0 - More is better but slower)\n                            float Quality = 4.0; // BLUR QUALITY (Default 4.0 - More is better but slower)\n                            float Size = 10.0; // BLUR SIZE (Radius)\n                            // GAUSSIAN BLUR SETTINGS }}}\n                        \n                            vec2 Radius = Size/vec2(1440.,1440.);\n                            \n                            \n                            // Pixel colour\n                            vec4 Color = texture(tx, uv);\n                            \n                            // Blur calculations\n                            for( float d=0.0; d<Pi; d+=Pi/Directions)\n                            {\n                                for(float i=1.0/Quality; i<=1.0; i+=1.0/Quality)\n                                {\n                                    Color += texture( tx, uv+vec2(cos(d),sin(d))*Radius*i);\t\t\n                                }\n                            }\n                            \n                            // Output to screen\n                            Color /= Quality * Directions - 15.0;\n                            return Color;\n                        }\n                        void main() {\n                            float maxDistance = 3.;\n                            float resolution  = 0.3;\n                            float thickness   = .15;\n                            \n                            \n                            vec4 baseColor = texture2D(groundTexture,vUv);\n                            vec4 olShadow = blur(onlyShadow,vUv);\n                            if(olShadow.a>0.2){\n                                baseColor.rgb = baseColor.rgb-olShadow.r*0.3;\n                            }\n                            vec4 color = texture2D(tDiffuse,vUv);\n                            vec4 n = vec4(normalize(getViewNormal(vUv)),1.);\n                            float depthMain = texture2D(tDepth,vUv).r;\n                            float depthGround = texture2D(groundDepth,vUv).r;\n        \n                            vec2 groundUv;//叠上贴图，需要把地板视图转为uv\n                            if(\n                                // (n.r!=0. ||n.g!=0. ||n.b!=0.) && \n                                depthGround<depthMain){\n                                //先获取片元到视角向量(eyePos)\n                                float viewZ = getViewZ( depthGround );\n                                float clipW = cameraProjectionMatrix[2][3] * viewZ+cameraProjectionMatrix[3][3];\n                                vec4 viewPosition= getViewPosition( vUv, depthGround, clipW ); //地面视图空间坐标获取到了\n\n                                //为了算相机与地面夹角，从而用于透明度\n                                vec3 upDirection = n.xyz;\n                                vec3 centerToEyeDirection = vec3(0.,0.,1.);\n                                float cosValue = 1.-dot(upDirection,centerToEyeDirection);\n                                \n                                //反射方向\n                                vec3 reflectDir = normalize(reflect(viewPosition.xyz,n.xyz));\n                                //开始前进\n                                color = vec4(1.);//texture2D(tDiffuse,vec2(reflectDir.y,reflectDir.x));\n                                \n        \n                                \n        \n                                vec2 texSize  = u_resolution;\n                                vec2 texCoord = gl_FragCoord.xy / texSize;\n\n                                vec4 uv = vec4(0.0);\n\n                                vec4 startView = vec4(viewPosition.xyz + (reflectDir *           0.), 1.);\n                                vec4 endView   = vec4(viewPosition.xyz + (reflectDir * maxDistance), 1.);\n\n                                vec4 startFrag =  startView;\n                                startFrag = cameraProjectionMatrix * startView;\n                                startFrag.xyz/=startFrag.w;\n                                startFrag.xy  = startFrag.xy  * 0.5 + 0.5;\n                                startFrag.xy  *= texSize;\n        \n                                vec4 endFrag =  endView;\n                                endFrag = cameraProjectionMatrix * endView;\n                                endFrag.xyz/=endFrag.w;\n                                endFrag.xy  = endFrag.xy * 0.5 + 0.5;\n                                endFrag.xy  *= texSize;\n        \n                                vec4 positionTo = viewPosition;\n        \n                                \n                                vec2 frag = startFrag.xy;\n                                uv.xy = frag / texSize;\n\n                                float deltaX    = endFrag.x - startFrag.x;\n                                float deltaY    = endFrag.y - startFrag.y;\n                                float useX      = abs(deltaX) >= abs(deltaY) ? 1. : 0.;\n                                float delta     = mix(abs(deltaY), abs(deltaX), useX) * clamp(resolution, 0., 1.);\n                                vec2  increment = vec2(deltaX, deltaY) / max(delta, 0.001);\n                                \n                                //float curPositionX;\n                                //float curPositionY;\n                                // curPositionX = (startFrag.x)*(1.-search1)+(endFrag.x)*search1;\n                                // curPositionY = (startFrag.y)*(1.-search1)+(endFrag.y)*search1;\n        \n        \n                                float search0 = 0.;\n                                float search1 = 0.;\n                                \n                                int hit0 = 0;\n                                int hit1 = 0;\n        \n                                float viewDistance = startView.z;\n                                float depth        = 0.;\n        \n                                float i = 0.;\n                                float stp = mix(increment.x,increment.y,useX);\n                                for(i=0.;i<delta;i+=stp){\n                                    // if(delta>5000.){\n                                    //     gl_FragColor = baseColor;\n                                    //     return;\n                                    // }\n                                    frag      += increment;\n                                    uv.xy      = frag / texSize;\n                                    if(uv.x>1. || uv.y>1. || uv.x<0. || uv.y<0.){\n                                        break;\n                                    }\n                                    \n                                    float dd = texture2D(tDepth,uv.xy).r;\n                                    float viewZZ = getViewZ( dd );\n                                    float clipWW = cameraProjectionMatrix[2][3] * viewZZ+cameraProjectionMatrix[3][3];\n                                    positionTo = vec4( getViewPosition( uv.xy, dd, clipWW ).xyz,1.); //地面视图空间坐标获取到了\n                                   \n                                    \n                                    search1 = mix\n                                        ( (frag.y - startFrag.y) / deltaY\n                                        , (frag.x - startFrag.x) / deltaX\n                                        , useX\n                                        );\n                                    search1 = clamp(search1, 0.0, 1.0);\n                                    viewDistance = (startView.z * endView.z) / mix(endView.z, startView.z, search1);\n                                    depth        = abs(positionTo.z)-abs(viewDistance);\n                                    float wtfD = abs(viewDistance)-abs(positionTo.z);\n                                    if (\n                                        depth>wtfD &&\n                                        depth < thickness \n                                        && dd!=1. ) \n                                    {\n                                        hit0 = 1;\n                                        break;\n                                    }\n                                }\n        \n                                if(hit0>0){\n                                    color = texture2D(tDiffuse,uv.xy);\n                                    color = mix(baseColor,color,cosValue);\n                                    //可以在这里模糊化反射\n                                    \n                                }else{\n                                    color = baseColor;\n                                }\n                                \n                            }\n                            \n                            gl_FragColor = color;\n        \n                        }"}),i.addPass(o);new P["a"](d,u.domElement);l.appendChild(u.domElement);var v=h(),p=f(),m=g();function w(a){t.position.x=8*Math.sin(.005*a),t.position.z=8*Math.cos(.001*a),r.position.x=8*Math.sin(.005*a),r.position.z=8*Math.cos(.001*a),i.renderer.setRenderTarget(v),i.renderer.render(e,d),o.uniforms.tDepth.value=v.depthTexture,i.renderer.setRenderTarget(m),i.renderer.render(e,t),s&&(s.uniforms["depthTextureFromLightCamera"].value=m.depthTexture),i.renderer.setRenderTarget(p),i.renderer.render(n,d),o.uniforms.tNormal.value=p.texture[1],o.uniforms.groundTexture.value=p.texture[0],o.uniforms.onlyShadow.value=p.texture[2],o.uniforms.groundDepth.value=p.depthTexture,i.renderer.setRenderTarget(null),i.render()}function h(){var e=new b["Db"](window.innerWidth,window.innerHeight);return e.texture.minFilter=b["T"],e.texture.magFilter=b["T"],e.stencilBuffer=b["j"]===b["k"],e.depthTexture=new b["l"],e.depthTexture.format=b["j"],e.depthTexture.type=b["yb"],e.setSize(window.innerWidth,window.innerHeight),e}function f(){var e=new b["Cb"](window.innerWidth*window.devicePixelRatio,window.innerHeight*window.devicePixelRatio,3);return e.stencilBuffer=b["j"]===b["k"],e.depthTexture=new b["l"],e.depthTexture.format=b["j"],e.depthTexture.type=b["yb"],e.setSize(window.innerWidth,window.innerHeight),e}function g(){var e=new b["Db"](window.innerWidth,window.innerHeight);return e.texture.minFilter=b["T"],e.texture.magFilter=b["T"],e.stencilBuffer=b["j"]===b["k"],e.depthTexture=new b["l"],e.depthTexture.format=b["j"],e.depthTexture.type=b["yb"],e.setSize(window.innerWidth,window.innerHeight),e}function x(e,n){var t=new b["N"],r=new b["N"];return t.set(e.width/2,0,0,e.x+e.width/2,0,e.height/2,0,e.y+e.height/2,0,0,(n.far-n.near)/2,(n.far+n.near)/2,0,0,0,1),r.getInverse(t,!0),r}function y(){d.aspect=window.innerWidth/window.innerHeight,d.updateProjectionMatrix(),t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),i.renderer.setSize(window.innerWidth,window.innerHeight);i.renderer.getPixelRatio();p.setSize(window.innerWidth,window.innerHeight),v.setSize(window.innerWidth,window.innerHeight)}function _(e){var n=new b["kb"]({glslVersion:b["s"],uniforms:{gTexture:{value:e},u_vMatrixFromLight:{value:t.matrixWorldInverse},u_ProjectionMatrixFromLight:{value:t.projectionMatrix},depthTextureFromLightCamera:{value:null}},vertexShader:"\n                    varying vec2 vUv;\n                    varying vec3 v_normal;\n                    varying vec4 result;\n                    uniform mat4 u_vMatrixFromLight;\n                    uniform mat4 u_ProjectionMatrixFromLight;\n                    varying vec4 v_posFromLight;\n                    void main() {\n                        vUv = uv;\n                        v_normal = normalMatrix * normalize(normal);\n\n                        v_posFromLight = u_ProjectionMatrixFromLight * u_vMatrixFromLight * modelMatrix * vec4( position, 1.0 );\n                        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n                    }",fragmentShader:"\n                    #include <packing>\n                    varying vec2 vUv;\n                    varying vec3 v_normal;\n                    uniform sampler2D gTexture;\n                    layout(location = 0) out vec4 gColor;\n                    layout(location = 1) out vec4 gNormal;\n                    layout(location = 2) out vec4 onlyShadow;\n                    \n                    varying vec4 v_posFromLight;\n                    uniform sampler2D depthTextureFromLightCamera;\n                    float blur(in sampler2D tx,in vec2 uv){\n                        float Pi = 6.28318530718; // Pi*2\n                        // GAUSSIAN BLUR SETTINGS {{{\n                        float Directions = 16.0; // BLUR DIRECTIONS (Default 16.0 - More is better but slower)\n                        float Quality = 3.0; // BLUR QUALITY (Default 4.0 - More is better but slower)\n                        float Size = 8.0; // BLUR SIZE (Radius)\n                        // GAUSSIAN BLUR SETTINGS }}}\n                    \n                        vec2 Radius = Size/vec2(1920.,1920.);\n                        \n                        \n                        // Pixel colour\n                        vec4 Color = texture(tx, uv);\n                        \n                        // Blur calculations\n                        for( float d=0.0; d<Pi; d+=Pi/Directions)\n                        {\n                            for(float i=1.0/Quality; i<=1.0; i+=1.0/Quality)\n                            {\n                                Color += texture( tx, uv+vec2(cos(d),sin(d))*Radius*i);\t\t\n                            }\n                        }\n                        \n                        // Output to screen\n                        Color /= Quality * Directions - 15.0;\n                        return Color.r;\n                    }\n                    void main() {\n                        vec2 uv = vUv;\n\n                        vec3 n = v_normal;\n                        vec3 nv_color = n*0.5  + 0.5;\n                        vec4 final2 = vec4(nv_color,1.);\n                        gNormal = final2;\n\n                        vec3 shadowCoord = (v_posFromLight.xyz/v_posFromLight.w)/2.0 + 0.5;\n                        float depth = texture2D(depthTextureFromLightCamera, shadowCoord.xy).r;\n                        // float depth = blur(depthTextureFromLightCamera, shadowCoord.xy);\n                        float visibility = (shadowCoord.z > depth) ? 1. : .0; // 判断片元是否在阴影中\n\n                        \n                        vec4 finalColor = texture2D(gTexture,uv);\n                        vec4 sd;\n                        if(visibility==1.){\n                            sd = vec4(1.,1.,1.,1.);\n                        }else{\n                            sd = vec4(0.,0.,0.,0.);\n                        }\n                        gColor  = finalColor;\n                        onlyShadow = sd;\n                    }"});return n}(new D["a"]).setPath(window.baseUrl+"/girl/").load("scene.gltf",(function(n){e.add(n.scene),n.scene.scale.x=.01,n.scene.scale.y=.01,n.scene.scale.z=.01,n.scene.position.y=.04})),window.onresize=y}});t("8f0b");const S=a()(_,[["render",y],["__scopeId","data-v-b755fbd6"]]);var T=S,F=function(e){return Object(r["q"])("data-v-540e18f6"),e=e(),Object(r["o"])(),e},C={class:"waterRoot"},L=F((function(){return Object(r["e"])("div",{id:"threeContainer"},null,-1)})),I=[L];function O(e,n,t,i,o,a){return Object(r["n"])(),Object(r["d"])("div",C,I)}var U={name:"Water",mounted:function(){var e=new b["jb"],n=new b["Z"](90,window.innerWidth/window.innerHeight,5,1e3);n.position.y=7,n.rotation.x=-Math.PI/2,n.updateProjectionMatrix();var t=new b["f"](n);e.add(t),e.add(n),window.baseUrl="";var r,i,o,a=document.getElementById("threeContainer"),c=new b["Z"](70,window.innerWidth/window.innerHeight,.01,500);c.position.z=10.2,c.position.y=.5,e.add(c);var l=new b["ab"](10,10,1,1),d=new b["kb"]({glslVersion:b["s"],uniforms:{u_vMatrixFromLight:{value:n.matrixWorldInverse},u_ProjectionMatrixFromLight:{value:n.projectionMatrix},depthTextureFromLightCamera:{value:null}},vertexShader:"\n                varying vec2 vUv;\n                uniform mat4 u_vMatrixFromLight;\n                uniform mat4 u_ProjectionMatrixFromLight;\n                varying vec4 v_posFromLight;\n                void main() {\n                    vUv = uv;\n                    v_posFromLight = u_ProjectionMatrixFromLight * u_vMatrixFromLight * modelMatrix * vec4( position, 1.0 );\n                    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n                }",fragmentShader:"\n                #include <packing>\n                varying vec2 vUv;\n                layout(location = 0) out vec4 gColor;\n                varying vec4 v_posFromLight;\n                uniform sampler2D depthTextureFromLightCamera;\n                void main() {\n                    vec2 uv = vUv;\n                    vec3 shadowCoord = (v_posFromLight.xyz/v_posFromLight.w)/2.0 + 0.5;\n                    float depth = texture2D(depthTextureFromLightCamera, shadowCoord.xy).r;\n                    float visibility = (shadowCoord.z > depth) ? 1. : .0; // 判断片元是否在阴影中\n                    \n                    gColor  = vec4(depth,0.,0.,1.);//vec4(vec3(1.-visibility),1.);\n\n                }"}),s=new b["O"](l,d);s.rotation.x=-Math.PI/2,s.updateMatrix(),e.add(s);var u=new b["Eb"]({antialias:!0});u.setSize(window.innerWidth,window.innerHeight),u.setAnimationLoop(m),o=new z["a"](e,c),r=new j["a"](u),r.addPass(o),i=new M["a"]({glslVersion:b["s"],uniforms:{tDiffuse:{value:null},tDepth:{value:null},cameraNear:{value:c.near},cameraFar:{value:c.far},projectionMatrixInverse:{value:c.projectionMatrixInverse},cameraProjectionMatrix:{value:c.projectionMatrix},u_resolution:{value:new b["zb"](window.innerWidth,window.innerHeight)}},vertexShader:"\n                        varying vec2 vUv;\n                        varying vec3 v_position;\n                        varying mat4 v_mvMatrix;\n                        void main() {\n                            vUv = uv;\n                            v_mvMatrix = modelViewMatrix;\n                            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n        \n                        }",fragmentShader:"\n                        #include <packing>\n                        varying vec2 vUv;\n                        uniform float cameraNear;\n                        uniform float cameraFar;\n                        uniform sampler2D tDiffuse;\n                        uniform sampler2D tDepth;\n                        uniform mat4 projectionMatrixInverse;\n                        uniform mat4 cameraProjectionMatrix;\n                        uniform vec2 u_resolution;\n                        \n                        void main() {\n                            \n                            vec4 color = texture2D(tDiffuse,vUv);\n                            gl_FragColor = color;\n        \n                        }"}),r.addPass(i);var v=new b["m"](16777215,1);v.castShadow=!0,v.rotation.x=Math.PI/2,v.rotation.z=Math.PI/2,v.position.x=50,v.position.y=10,e.add(v);new P["a"](c,u.domElement);a.appendChild(u.domElement);var p=w();function m(t){n.position.x=2*Math.sin(.001*t),n.position.z=2*Math.cos(.001*t),r.renderer.setRenderTarget(p),r.renderer.render(e,n),d.uniforms.depthTextureFromLightCamera.value=p.depthTexture,r.renderer.setRenderTarget(null),r.renderer.render(e,c)}function w(){var e=new b["Db"](window.innerWidth,window.innerHeight);return e.texture.minFilter=b["T"],e.texture.magFilter=b["T"],e.stencilBuffer=b["j"]===b["k"],e.depthTexture=new b["l"],e.depthTexture.format=b["j"],e.depthTexture.type=b["yb"],e.setSize(window.innerWidth,window.innerHeight),e}function h(){c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),r.renderer.setSize(window.innerWidth,window.innerHeight)}(new D["a"]).setPath(window.baseUrl+"/car/").load("scene.gltf",(function(n){e.add(n.scene),n.scene.scale.x=.01,n.scene.scale.y=.01,n.scene.scale.z=.01,n.scene.position.y=0})),window.onresize=h}};t("9f5f");const W=a()(U,[["render",O],["__scopeId","data-v-540e18f6"]]);var H=W,V=function(e){return Object(r["q"])("data-v-7c740dcd"),e=e(),Object(r["o"])(),e},k={class:"cloudRoot"},R=V((function(){return Object(r["e"])("div",{id:"threeContainer"},null,-1)})),N=[R];function B(e,n,t,i,o,a){return Object(r["n"])(),Object(r["d"])("div",k,N)}t("38cf"),t("ae0e");var E={name:"Cloud",mounted:function(){window.baseUrl="";var e=(new b["ub"]).load(window.baseUrl+"noise/perlin.png",(function(t){e.wrapS=b["ib"],e.wrapT=b["ib"],e.repeat.set(10,10);var r=new b["jb"];window.camera=new b["Z"](70,window.innerWidth/window.innerHeight,.01,15e4),camera.position.z=-10,r.add(camera);var i=new b["Eb"]({antialias:!0});i.setSize(window.innerWidth,window.innerHeight),i.setAnimationLoop(u);new P["a"](camera,i.domElement);var o=document.getElementById("threeContainer");o.appendChild(i.domElement),r.background=new b["i"](5601194);var a={position:new b["Ab"](0,5e4,1e4)},c=new b["ob"](100,32,16),l=new b["P"]({color:16777181});window.lightHelp=new b["O"](c,l),lightHelp.position.y=5e4,lightHelp.position.z=1e4,r.add(lightHelp);var d=n(camera,a);function s(){camera.aspect=window.innerWidth/window.innerHeight,camera.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)}function u(e){d&&(d.material.uniforms.time.value=e),i.setRenderTarget(null),i.render(r,camera)}r.add(d),window.onresize=s}));function n(n,t){var r=new b["ab"](1e4,1e4),i=new b["kb"]({glslVersion:b["s"],transparent:!0,side:b["n"],uniforms:{cameraPos:{value:n.position},projectionMatrixInverse:{value:n.projectionMatrixInverse},cameraProjectionMatrix:{value:n.projectionMatrix},matrixWorld:{value:n.matrixWorld},perlinTexture:{value:e},time:{value:0},centerHeight:{value:90},lightPos:{value:t.position},lightDirLength:{value:25},lightPow:{value:1.5}},vertexShader:"\n                varying vec4 v_position;\n                varying vec4 v_eyePosition;\n                varying vec4 v_pjPosition;\n                varying mat4 projection;\n                varying mat4 view;\n                varying vec3 cameraEyePos;\n                    void main(){\n                        v_position = modelMatrix * vec4( position, 1.0 );\n                        v_eyePosition = modelViewMatrix * vec4( position, 1.0 );\n                        v_pjPosition = projectionMatrix * v_eyePosition;\n                        projection = projectionMatrix;\n                        view = viewMatrix;\n                        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n                    }\n                ",fragmentShader:"\n                #include <packing>\n                precision highp sampler3D;\n                float bottom = 300.0;   // 云层底部\n                float top = 700.0;      // 云层顶部\n                float width = 5000.0;    // 云层 xz 坐标范围 [-width, width]\n                layout(location = 0) out vec4 gColor;\n                varying vec4 v_position;\n                varying vec4 v_eyePosition;\n                varying vec4 v_pjPosition;\n                uniform vec3 cameraPos;\n\n                uniform mat4 projectionMatrixInverse;\n                uniform mat4 cameraProjectionMatrix;\n                uniform mat4 matrixWorld;\n                uniform sampler2D perlinTexture;\n\n                varying mat4 projection;\n                varying mat4 view;\n\n                #define baseBright  vec3(1.4,1.4,1.5)    // 基础颜色 -- 亮部\n                #define baseDark    vec3(0.21,0.21,0.21)    // 基础颜色 -- 暗部\n                #define lightBright vec3(1.5, 1.5, 1.7)  // 光照颜色 -- 亮部 1.29, 1.17, 1.05\n                #define lightDark   vec3(0.2,0.25,0.27)      // 光照颜色 -- 暗部 0.7,0.75,0.8\n\n                // uniform sampler2D depthMain;\n                uniform float time;\n                uniform vec3 lightPos;\n                uniform float lightDirLength;\n                uniform float lightPow; //灯光亮度\n                //3D噪声\n                float noise(vec3 x)\n                {\n                    vec3 p = floor(x);\n                    vec3 f = fract(x);\n                    f = smoothstep(0.0, 1.0, f);\n                    \n                    vec2 uv = (p.xy+vec2(37.0, 17.0)*p.z) + f.xy;\n                    float v1 = texture2D( perlinTexture, (uv)/256.0, -100.0 ).x;\n                    float v2 = texture2D( perlinTexture, (uv + vec2(37.0, 17.0))/256.0, -100.0 ).x;\n                    return mix(v1, v2, f.z);\n                }\n                \n                float getCloudNoise(vec3 worldPos) {\n                    vec3 coord = worldPos;\n                    coord.x += time*0.0005;//移动\n                    coord.z += time*0.0005;\n                    coord.y -= time*0.0008;\n                    coord *= 0.2;\n                    float n = noise(coord) * 0.5;   coord *= 3.0;\n                        n += noise(coord) * 0.25;  coord *= 3.01;\n                        n += noise(coord) * 0.125; coord *= 3.02;\n                        n += noise(coord) * 0.0625; \n                    return max(n - 0.5, 0.0) * (1.0 / (1.0 - 0.5));\n                }\n\n               \n                \n                float getDensity(vec3 pos) {\n                    vec3 p = pos;\n                    p.z *= 0.5; //防止纹理变形，调整为正方形\n                    p.xz*=0.025;\n                    p.y *= 0.025;\n                    float noise = getCloudNoise(p);\n                    return noise;\n                }\n                float random (vec2 st) {\n                    return fract(sin(dot(st.xy,\n                                        vec2(12.9898,78.233)))*\n                        43758.5453123);\n                }\n                vec4 getCloud(vec3 worldPos){\n                    vec3 direction = normalize(worldPos.xyz - cameraPos);\n                    vec3 step = direction * 10. + random(worldPos.xz)*0.05 ;\n                    vec4 colorSum = vec4(0);        // 积累的颜色\n                    vec3 point;         // 从相机出发开始测试\n                    //优化，把起点移动到当前片元云的坐标 gl_FragCoord.z深度求出eye坐标再转为世界坐标\n                    vec4 wPos =  matrixWorld * v_eyePosition;\n                    point = wPos.xyz;//cameraPos;\n                    \n                    float x_ = length(v_eyePosition);\n                    int loop = int((  0.00100* (x_)  * exp(1.- 0.00100*(x_))  )*100.); //400次循环\n                    mat4 pvMatrix = projection * view;\n                    float cloudThick = (x_+400.);//云层厚度400\n\n                   \n                    for(int i=0; i< loop; i++) {\n                        point += step;\n                        if(length(point-cameraPos)> cloudThick ){  \n                            break;\n                        }\n\n                        // if(bottom>point.y || point.y>top || -width>point.x || point.x>width || -width>point.z || point.z>width) {\n                        //     break;\n                        // }\n\n                        // 转屏幕坐标 无效代码\n                        // vec4 screenPos = pvMatrix * vec4(point, 1.0);\n                        // screenPos /= screenPos.w;\n                        // screenPos.xyz = screenPos.xyz * 0.5 + 0.5;\n                        // float sampleDepth = texture2D(depthMain, screenPos.xy).r;\n                        // float testDepth = screenPos.z;  // 测试深度\n                        // if(sampleDepth<testDepth) {\n                        //     break;\n                        // }\n                        \n                        float density = getDensity(point) ;\n                        \n                        vec3 L = normalize(lightPos - point)*lightDirLength; // 光源方向\n                        float lightDensity = getDensity(point + L);\n                        for(int j=0;j<1;j++){\n                            L += normalize(lightPos - point)*lightDirLength; // 光源方向  迭代次数越多，越精准\n                            lightDensity += getDensity(point + L);\n                        }\n                        \n                       \n                        float delta = clamp(density - lightDensity,0.0, 1.0);      // 两次采样密度差\n\n                        vec3 base = baseBright* density; //mix( baseBright,\n                                                         //baseDark, // 不累积暗部颜色，下面采用了自阴影代替累积颜色\n                                                         //density) * density;   // 基础颜色\n\n                        \n                        vec3 light = mix(lightDark, lightBright, delta) * lightPow;            // 光照对颜色影响\n                        float border = 0.025; //黑边，\n                        vec4 color = vec4(base *light \n                                            ,density-border);                           // 当前点的最终颜色\n                        colorSum = color * (1.0 - colorSum.a) + colorSum;           // 与累积的颜色混合\n\n                    }\n\n                    return colorSum;\n                }\n                \n                void main(){\n                    \n                    vec4 cloud = getCloud(v_position.xyz); // 云颜色\n                    vec4 fColor;\n                    fColor.rgb = cloud.rgb;    // 混色\n                    fColor.a = cloud.a;\n                    gColor = fColor;\n                }\n                "}),o=new b["O"](r,i),a=500;return o.position.y=a,o.rotation.x=Math.PI/2,o}}};t("9f34");const Z=a()(E,[["render",B],["__scopeId","data-v-7c740dcd"]]);var A=Z,G=[{path:"/",name:"Home",component:w},{path:"/water",name:"Water",component:T},{path:"/shadow",name:"Shadow",component:H},{path:"/cloud",name:"Cloud",component:A}],X=Object(s["a"])({history:Object(s["b"])(),routes:G}),Q=X;Object(r["b"])(d).use(Q).mount("#app")},"57ed":function(e,n,t){"use strict";t("7de0")},"634f":function(e,n,t){},"7de0":function(e,n,t){},"8f0b":function(e,n,t){"use strict";t("d04b")},"9f34":function(e,n,t){"use strict";t("634f")},"9f5f":function(e,n,t){"use strict";t("b0d5")},b0d5:function(e,n,t){},d04b:function(e,n,t){}});
const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/EmittersPlugin-C-Kujibe.js","assets/js/preload-helper-DmNsytk6.js","assets/js/FlashMessage-C8MDAeCw.js","assets/js/icon-alert-BG5stABd.js","assets/js/localStorage-BWL8dYsz.js","assets/js/string-VUUyAM1F.js","assets/js/icon-close-BUGl_M7j.js","assets/css/FlashMessage-eczGwWPk.css","assets/js/AnimatableColor-CUHAuo17.js","assets/js/AnimationOptions-CCQbG6hj.js","assets/js/OptionsColor-CwD3d-ur.js"])))=>i.map(i=>d[i]);
import{_ as a}from"./preload-helper-DmNsytk6.js";async function e(e,t=!0){if(!e.emitterShapeManager){const{ShapeManager:t}=await a((async()=>{const{ShapeManager:a}=await import("./ShapeManager-CiPwixXz.js");return{ShapeManager:a}}),[]);e.emitterShapeManager=new t(e)}e.addEmitterShapeGenerator||(e.addEmitterShapeGenerator=(a,t)=>{var r;null==(r=e.emitterShapeManager)||r.addShapeGenerator(a,t)});const{EmittersPlugin:r}=await a((async()=>{const{EmittersPlugin:a}=await import("./EmittersPlugin-C-Kujibe.js").then((a=>a.c));return{EmittersPlugin:a}}),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])),n=new r(e);await e.addPlugin(n,t)}export{e as loadEmittersPlugin};
import{l as e,k as l,r as o,J as a,s as n}from"./FlashMessage-C8MDAeCw.js";import{O as t}from"./OptionsColor-CwD3d-ur.js";import"./icon-alert-BG5stABd.js";import"./localStorage-BWL8dYsz.js";import"./preload-helper-DmNsytk6.js";import"./string-VUUyAM1F.js";import"./icon-close-BUGl_M7j.js";const r=2*Math.PI;class s{constructor(){this.enable=!1,this.value=0}load(e){e&&(void 0!==e.enable&&(this.enable=e.enable),void 0!==e.value&&(this.value=n(e.value)))}}class i{constructor(){this.darken=new s,this.enable=!1,this.enlighten=new s,this.mode="vertical",this.speed=25}load(e){e&&(void 0!==e.backColor&&(this.backColor=t.create(this.backColor,e.backColor)),this.darken.load(e.darken),void 0!==e.enable&&(this.enable=e.enable),this.enlighten.load(e.enlighten),void 0!==e.mode&&(this.mode=e.mode),void 0!==e.speed&&(this.speed=n(e.speed)))}}class d{getTransformValues(e){var l;const o=(null==(l=e.roll)?void 0:l.enable)&&e.roll,a=o&&o.horizontal,n=o&&o.vertical;return{a:a?Math.cos(o.angle):void 0,d:n?Math.sin(o.angle):void 0}}init(n){!function(n){const t=n.options.roll;if(null==t?void 0:t.enable)if(n.roll={enable:t.enable,horizontal:"horizontal"===t.mode||"both"===t.mode,vertical:"vertical"===t.mode||"both"===t.mode,angle:e()*r,speed:l(t.speed)/360},t.backColor)n.backColor=o(t.backColor);else if(t.darken.enable&&t.enlighten.enable){const o=e()>=a?"darken":"enlighten";n.roll.alter={type:o,value:l("darken"===o?t.darken.value:t.enlighten.value)}}else t.darken.enable?n.roll.alter={type:"darken",value:l(t.darken.value)}:t.enlighten.enable&&(n.roll.alter={type:"enlighten",value:l(t.enlighten.value)});else n.roll={enable:!1,horizontal:!1,vertical:!1,angle:0,speed:0}}(n)}isEnabled(e){const l=e.options.roll;return!e.destroyed&&!e.spawning&&!!(null==l?void 0:l.enable)}loadOptions(e,...l){e.roll||(e.roll=new i);for(const o of l)e.roll.load(null==o?void 0:o.roll)}update(e,l){this.isEnabled(e)&&function(e,l){const o=e.options.roll,a=e.roll;if(!a||!(null==o?void 0:o.enable))return;const n=a.speed*l.factor,t=r;a.angle+=n,a.angle>t&&(a.angle-=t)}(e,l)}}export{d as RollUpdater};
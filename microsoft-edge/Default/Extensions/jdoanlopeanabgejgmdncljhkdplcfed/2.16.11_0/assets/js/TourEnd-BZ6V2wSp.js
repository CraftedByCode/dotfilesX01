import{A as t,n as e}from"./icon-alert-BG5stABd.js";import{a as n}from"./reactiveCustomization-BIBQ0lmK.js";import{_ as a}from"./icon-next-B4hjdiAA.js";import"./localStorage-BWL8dYsz.js";import"./preload-helper-DmNsytk6.js";import"./string-VUUyAM1F.js";import"./VueBase-Qr0J4kll.js";import"./index-DgGUECrr.js";import"./main-CWen-4ha.js";import"./index-CJJH83pl.js";import"./portal-vue.esm-CE661Bdg.js";const i=e({name:"TourEnd",props:{parentModalName:{type:String,default:""},name:{type:String,default:""},heading:{type:String,default:n.displayname?`Let's go, ${n.displayname}!`:"Let's go!"},subheading:{type:String,default:""},buttonText:{type:String,default:""},bannerHeading:{type:String,default:""},bannerSubheading:{type:String,default:""},bannerButtonText:{type:String,default:""},bannerButtonLink:{type:String,default:""},bannerCta:{type:Function,default:()=>{}}},computed:{bannerActive(){return this.bannerHeading||this.bannerSubheading||this.bannerButtonText||this.bannerButtonLink}},mounted(){window.addEventListener("keyup",this.handleKey)},destroyed(){window.removeEventListener("keyup",this.handleKey)},methods:{handleKey(t){"Enter"===t.code&&this.$emit("next")},onBannerCtaClick(){this.bannerCta(),t.capture("banner cta click",{feature:"onboarding",step:this.parentModalName.toLowerCase(),sub_step:this.name.toLowerCase()})}}},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"tour-fullscreen",attrs:{"data-test":"tour-end"}},[e("div",{staticClass:"cta"},[e("div",{staticClass:"heading"},[t._v(t._s(t.heading))]),e("div",{staticClass:"subheading",domProps:{innerHTML:t._s(t.subheading)}}),e("div",{staticClass:"button dash-button",attrs:{"data-test":"end"},on:{click:function(e){return t.$emit("next")}}},[t._v(t._s(t.buttonText)),e("inline-svg",{staticClass:"icon icon-next",attrs:{src:a}})],1)]),t.bannerActive?e("div",{staticClass:"call light-full"},[e("div",{staticClass:"call-content"},[e("div",{staticClass:"heading"},[t._v(t._s(t.bannerHeading))]),e("div",{staticClass:"description"},[t._v(t._s(t.bannerSubheading))])]),e("div",{staticClass:"call-cta"},[e("a",{staticClass:"button call-button",attrs:{target:"_blank",href:t.bannerButtonLink},on:{click:t.onBannerCtaClick}},[t._v(t._s(t.bannerButtonText))])])]):t._e()])}),[],!1,null,"ee4a3493").exports;export{i as default};
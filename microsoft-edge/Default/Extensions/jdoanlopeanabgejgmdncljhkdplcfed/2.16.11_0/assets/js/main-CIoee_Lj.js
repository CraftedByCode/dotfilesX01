const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/QuickNav-Dn-GX_oA.js","assets/js/icon-alert-BG5stABd.js","assets/js/localStorage-BWL8dYsz.js","assets/js/preload-helper-DmNsytk6.js","assets/js/string-VUUyAM1F.js","assets/js/allComponentsMounted-C3UsG_cA.js","assets/js/switch-EuBTQVVE.js","assets/css/QuickNav-CkHTSVqb.css","assets/js/Focus-CZCmmst0.js","assets/js/focusCollection-BPvAP_dg.js","assets/js/VueBase-Qr0J4kll.js","assets/js/index-DgGUECrr.js","assets/js/main-CWen-4ha.js","assets/css/index-C0DDMXTO.css","assets/js/index-CJJH83pl.js","assets/js/portal-vue.esm-CE661Bdg.js","assets/js/itemModelMixin-DaIj4M8Z.js","assets/js/reactiveCustomization-BIBQ0lmK.js","assets/js/namesMixin-DfNb5KMg.js","assets/js/MobileBlur-B2s9dLKD.js","assets/js/showAnyway-Bzx3y1TR.js","assets/js/flashMessageMixin-DEmBdBQ0.js","assets/js/globalKeyEventManager-DnrWxalE.js","assets/js/constants-BT5o8PmI.js","assets/js/focusFlashMessageHelpers-BX-QSmsh.js","assets/js/icon-confetti-Dz2LojDe.js","assets/js/search-DCqlmJx6.js","assets/js/SmoothReflow-C4xMRPDz.js","assets/css/SmoothReflow-DiGQ1RDg.css","assets/css/Focus-Bg1b6EOM.css","assets/js/BigSearch-xIKJHaFu.js","assets/js/SearchInput-Cuc5X9NF.js","assets/js/google-DKPAcOmk.js","assets/js/SoftFocus-BUhesXB-.js","assets/js/BaseDropdown-Dr1kQxZe.js","assets/js/BaseDropdownContent-CObS9Nk4.js","assets/js/constants-CALDQiUE.js","assets/js/index-zUX2uO7y.js","assets/css/BaseDropdownContent-BzU7S1Vc.css","assets/js/icon-ellipsis-D3jS4u3x.js","assets/css/BaseDropdown-DOOXxvW0.css","assets/js/BaseDropdownText-Bo7TGc6c.js","assets/css/BaseDropdownText-dp_QAGZ8.css","assets/js/BaseDropdownOption-BV1-F7-m.js","assets/css/BaseDropdownOption-DAuhx1rJ.css","assets/js/onboardingStepCollection-Cv4iqhpx.js","assets/js/itemDataServiceMixins-BlaFviuD.js","assets/js/icon-asana-Csd73e1k.js","assets/js/focusModeHelpers-g0L8k_eK.js","assets/js/scenes-D8jpYIdj.js","assets/js/ocean-bubbles-GcKjBI5B.js","assets/js/PomodoroTimers-BWkB-14p.js","assets/js/SubscriptionSummary-Do_dB0ks.js","assets/js/authService-DyVsAij2.js","assets/js/loginHelpers-CfKnwmAb.js","assets/js/siteBlockerGroups-DPpCFrY4.js","assets/js/compareObjects-BF7sSNEf.js","assets/js/icon-down-BiHbKN-t.js","assets/css/SearchInput-DPCY_ekq.css","assets/js/chat-B-ygTGdu.js","assets/js/ViewState-lXKIKVsa.js","assets/css/BigSearch-DnfaXfFw.css","assets/js/Launchpad-JJ2tiKiJ.js","assets/js/bookmarkUtils-CfUz202V.js","assets/css/Launchpad-DKOqY0_G.css"])))=>i.map(i=>d[i]);
import"./VueBase-Qr0J4kll.js";import{_ as e}from"./preload-helper-DmNsytk6.js";import{c as t,s as i}from"./reactiveCustomization-BIBQ0lmK.js";import{n as s,u as o,r,V as a}from"./icon-alert-BG5stABd.js";import{_ as n,a as c}from"./search-DCqlmJx6.js";import{a as l}from"./allComponentsMounted-C3UsG_cA.js";import{S as u}from"./SmoothReflow-C4xMRPDz.js";import{g as p}from"./index-DgGUECrr.js";const h={focus:{name:"Goal",icon:n},search:{name:"Search",feature:"search in center",icon:c}};const d=s({name:"CenterBelow",components:{QuickNav:()=>e((()=>import("./QuickNav-Dn-GX_oA.js")),__vite__mapDeps([0,1,2,3,4,5,6,7])),Focus:()=>e((()=>import("./Focus-CZCmmst0.js")),__vite__mapDeps([8,3,9,10,1,2,4,11,12,13,14,15,16,17,18,19,20,5,21,22,23,24,25,26,27,28,29])),BigSearch:()=>e((()=>import("./BigSearch-xIKJHaFu.js")),__vite__mapDeps([30,3,31,32,33,5,1,2,4,34,35,36,37,38,15,39,40,41,42,43,44,45,10,11,12,13,14,16,17,18,46,47,48,49,50,51,52,53,54,25,55,23,56,57,58,59,60,20,61])),Launchpad:()=>e((()=>import("./Launchpad-JJ2tiKiJ.js")),__vite__mapDeps([62,63,1,2,3,4,5,20,10,11,12,13,14,15,17,64])),SmoothReflow:u},mixins:[l],setup:()=>({widgetId:"region-center-below",centerBelowMetadata:h,isSafari:o.isSafari()}),data(){const e=p.currentValue,t="false"===((null==localStorage?void 0:localStorage.getItem("pomodoro-showing"))??"false");return{centerBelowVisible:!e&&t}},computed:{launchpadVisible(){return t.launchpadVisible&&t.searchVisible&&t.centerBelowNavVisible&&this.centerBelowVisible},centerBelowVisibleComputed:()=>!(!1===t.centerBelowVisible),activeApp(){return this.searchVisible?"search":this.focusVisible?"focus":""},searchVisible:()=>t.centerBelowNavVisible&&t.searchVisible,focusVisible:()=>t.focusVisible,navVisible(){return t.centerBelowNavVisible&&!this.$touch},enrolledInSearchExperiment:()=>r.experiments.some((e=>"search_in_center"===e.variantName))},watch:{enrolledInSearchExperiment:{handler(){if(this.enrolledInSearchExperiment){const e={centerBelowNavVisible:!0,searchVisible:!0,focusVisible:!1};Object.assign(m.models.customization.persistentSettings.defaultIfNotSet,e),m.trigger("customization:update",Object.keys(e))}},immediate:!0}},created(){m.on("centerBelow:show",this.setCenterBelowVisible)},destroyed(){m.off("centerBelow:show",this.setCenterBelowVisible)},methods:{afterEnter(){m.trigger("centerBelow:afterEnter")},setCenterBelowVisible(e){this.centerBelowVisible=e},switchTo(e){i({focusVisible:"focus"===e,searchVisible:"search"===e})}}},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"center-below",attrs:{"data-test":"region-center-below"}},[t("transition",{attrs:{name:"fade-deep",mode:"out-in",duration:500},on:{"after-enter":e.afterEnter}},[e.activeApp&&e.centerBelowVisible&&e.centerBelowVisibleComputed?t(e.searchVisible?"BigSearch":"Focus",{tag:"component",scopedSlots:e._u([{key:"nav",fn:function(){return[e.navVisible?t("quick-nav",{attrs:{options:e.centerBelowMetadata,region:"center-below",active:e.activeApp},on:{"switch-to":e.switchTo}}):e._e()]},proxy:!0}],null,!1,3773440395)}):e._e()],1),e.isSafari?e._e():t("smooth-reflow",{staticClass:"launchpad-container",attrs:{"await-apps-ready":!0}},[e.launchpadVisible&&e.centerBelowVisibleComputed?t("launchpad"):e._e()],1)],1)}),[],!1,null,"9ab81212").exports,b=document.querySelector(".region.center-below");new a({render:e=>e(d)}).$mount(b);const f=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{h as c,f as m};
import{u as e,r as a,d as t}from"./icon-alert-BG5stABd.js";import{u as i,e as o}from"./ViewState-lXKIKVsa.js";import{F as s,A as n,f as r,b as c,c as u,d}from"./index-DgGUECrr.js";import{s as l,a as g,r as b,b as p,g as y}from"./focusModeHelpers-g0L8k_eK.js";import"./localStorage-BWL8dYsz.js";import"./preload-helper-DmNsytk6.js";import"./string-VUUyAM1F.js";import"./main-CWen-4ha.js";import"./reactiveCustomization-BIBQ0lmK.js";import"./VueBase-Qr0J4kll.js";import"./index-CJJH83pl.js";import"./portal-vue.esm-CE661Bdg.js";import"./scenes-D8jpYIdj.js";import"./ocean-bubbles-GcKjBI5B.js";import"./PomodoroTimers-BWkB-14p.js";const h=i("focusModeDash",{views:{[s.Idle]:{beforeLeave:async t=>{m.modal.hidden=!0,m.widgetManager.hideApps({layer:"focusMode"}),t===s.Transition.toString()?(await e.delay(n),l()):t===s.Focusing.toString()&&(m.widgetManager.addVueAppExemption(["focus-mode"],"focusMode"),l(),e.delay(100).then((async()=>{g(),a.disableAppTransitions=!1,await e.delay(100),m.modal.hidden=!1})))},defaultView:!0},[s.Transition]:{beforeLeave:a=>{a===s.Focusing.toString()?e.delay(n).then((async()=>{g(),await e.delay(100),m.modal.hidden=!1})):a===s.Idle.toString()&&(b(),p(),e.delay(n).then((async()=>{m.widgetManager.showApps({layer:"focusMode"}),await e.delay(100),m.modal.hidden=!1})))}},[s.Focusing]:{beforeLeave:a=>{b(),m.modal.hidden=!0,e.delay(n).then((()=>{p(),a===s.Idle.toString()&&m.widgetManager.showApps({layer:"focusMode"})}))}},[s.Celebration]:{beforeLeave:()=>{e.delay(n).then((async()=>{m.widgetManager.showApps({layer:"focusMode"}),await e.delay(100),m.modal.hidden=!1}))}}}}),w=h(),f=o("focusMode",{extend:(a,i)=>t(i,{state:()=>({backgroundScale:1,backgroundBlurLayerOpacity:0,backgroundTransitionDuration:null,cancelButtonVisible:!1,cancelButtonTimeout:void 0}),getters:{currentFocusModeView:()=>w.activeViewId,currentlyFocusing(){return this.currentFocusModeView===s.Focusing.toString()},currentlyTransitioning(){return[s.Transition.toString(),s.Celebration.toString()].includes(this.currentFocusModeView)},backgroundBlurLayerVisible(){return this.currentFocusModeView!==s.Idle.toString()}},actions:{async startFocusModeWithCancelPeriod(){a.popupActive=!1,clearTimeout(this.cancelButtonTimeout),this.cancelButtonVisible=!0,await w.setActiveView(s.Transition),this.backgroundTransitionDuration=c+u,await e.doubleRaf(),this.setFocusingStyleVariables(),this.cancelButtonTimeout=setTimeout((()=>{this.cancelButtonVisible=!1}),c),await e.delay(c)},async finalizeStartFocusModeAfterCancelPeriod(){await e.delay(u),this.backgroundTransitionDuration=null},async celebrateFocusMode(){a.popupActive=!1,await w.setActiveView(s.Celebration);this.backgroundTransitionDuration=1500,await e.doubleRaf(),this.resetFocusingStyleVariables(),await e.delay(this.backgroundTransitionDuration),this.backgroundTransitionDuration=null,await e.delay(d-1500)},async stopFocusMode(){a.popupActive=!1,this.resetFocusingStyleVariables(),await w.setActiveView(s.Idle)},async cancelFocusModeStart(){this.backgroundTransitionDuration=n,await e.doubleRaf(),await this.stopFocusMode(),await e.delay(this.backgroundTransitionDuration),this.backgroundTransitionDuration=null},setFocusingStyleVariables(){this.backgroundScale=1.1;y().blurBackground&&(this.backgroundBlurLayerOpacity=1)},resetFocusingStyleVariables(){this.backgroundScale=1,this.backgroundBlurLayerOpacity=0},async resumeFocusModeAfterTabLoad(){await w.setActiveView(s.Focusing),this.setFocusingStyleVariables(),this.backgroundTransitionDuration=0}}})}),T=f();r.switchOverToWatchedStoreItem((()=>T.currentlyTransitioning));export{f as default,h as useFocusModeDashViewStateStore,f as useFocusModeViewStateStore};
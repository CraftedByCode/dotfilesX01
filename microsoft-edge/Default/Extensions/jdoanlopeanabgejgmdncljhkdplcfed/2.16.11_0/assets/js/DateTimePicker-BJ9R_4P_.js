import{C as e}from"./CollapsibleInput-C8prbzFh.js";import{n as t,O as a}from"./icon-alert-BG5stABd.js";import{a as r}from"./reactiveCustomization-BIBQ0lmK.js";import"./SmoothReflow-C4xMRPDz.js";import"./allComponentsMounted-C3UsG_cA.js";import"./icon-x-caret-half-CZtcH_PM.js";import"./localStorage-BWL8dYsz.js";import"./preload-helper-DmNsytk6.js";import"./string-VUUyAM1F.js";import"./VueBase-Qr0J4kll.js";import"./index-DgGUECrr.js";import"./main-CWen-4ha.js";import"./index-CJJH83pl.js";import"./portal-vue.esm-CE661Bdg.js";const o=t({name:"DateTime",components:{CollapsibleInput:e},props:{value:{type:Object,default:null}},data(){let e=new Date((new Date).getTime()+6048e5);return{defaultDate:e,year:e.getFullYear(),month:e.getMonth(),day:e.getDate(),hour24:9,minutes:0,otherYearActive:!1,customTime:!1,otherYear:(new Date).getFullYear(),selectedYear:(new Date).getFullYear(),currentYear:(new Date).getFullYear(),months:a.monthNamesShort}},computed:{days(){let e=this.value&&this.value.date?this.value.date:this.defaultDate;return t=e.getFullYear(),a=e.getMonth(),new Date(t,parseInt(a)+1,0).getDate();var t,a},period:{get:function(){return this.hour24>=12?"PM":"AM"},set:function(e){this.hour24="AM"===e?this.hour24-12:this.hour24+12}},hourModel:{get:function(){return this.is12Hour?this.hour12:this.hour24},set:function(e){this[this.is12Hour?"hour12":"hour24"]=e}},hour12:{get:function(){return[0,12].includes(this.hour24)?12:this.hour24%12},set:function(e){"PM"===this.period?this.hour24=12===e?12:e+12:this.hour24=12===e?0:e}},is12Hour:()=>r.hour12clock},watch:{value:{handler(e){e&&(e.date?this.init(e):this.init({date:this.defaultDate,hasHours:!1}))},deep:!0,immediate:!0},selectedYear(e){"other"===e?(this.otherYearActive=!0,this.$nextTick((()=>{this.$refs.otherYear.select()}))):(this.year=e,this.update())}},mounted(){this.loadingSearch=0},methods:{init(e){this.selectedYear=this.otherYear=this.year=e.date.getFullYear(),this.otherYearActive=this.year<this.currentYear||this.year>this.currentYear+4,this.customTime=e.hasHours,this.month=e.date.getMonth(),this.day=e.date.getDate(),e.hasHours&&(this.hour24=e.date.getHours(),this.minutes=e.date.getMinutes())},toggleTime(){this.customTime=!this.customTime,this.customTime||(this.hour24=9,this.minutes=0,this.update())},update(){let e=new Date(this.year,this.month,this.day,this.hour24,this.minutes);e.setDate(this.day),this.$emit("input",{date:e,hasHours:this.customTime})},updateOtherYear(){this.year=this.otherYear,this.$refs.otherYear.blur(),this.update()},isNumberKey(e){let t;"paste"===e.type?t=event.clipboardData.getData("text/plain"):(t=e.keyCode||e.which,t=String.fromCharCode(t));/[0-9]|\./.test(t)||(e.returnValue=!1,e.preventDefault&&e.preventDefault())}}},(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"date-row"},[t("label",[e._v("Date")]),t("div",{staticClass:"select-wrapper month-group"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.month,expression:"month"}],staticClass:"month",attrs:{id:"month",name:"month","data-test":"month"},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.month=t.target.multiple?a:a[0]},e.update]}},e._l(e.months,(function(a,r){return t("option",{key:r,domProps:{value:r}},[e._v(e._s(a))])})),0)]),t("div",{staticClass:"select-wrapper day-group"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.day,expression:"day"}],staticClass:"day",attrs:{id:"day",name:"day","data-test":"day"},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.day=t.target.multiple?a:a[0]},e.update]}},e._l(e.days,(function(a){return t("option",{key:a,domProps:{value:a}},[e._v(e._s(a))])})),0)]),t("div",{staticClass:"select-wrapper year-group",class:{"other-active":e.otherYearActive}},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedYear,expression:"selectedYear"}],staticClass:"year",attrs:{id:"year",name:"year","data-test":"year"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectedYear=t.target.multiple?a:a[0]}}},[e._l(5,(function(a){return t("option",{key:a,domProps:{value:e.currentYear+a-1}},[e._v(e._s(e.currentYear+a-1))])})),t("option",{attrs:{value:"other"}},[e._v("Other")])],2),e.otherYearActive?t("input",{directives:[{name:"model",rawName:"v-model",value:e.otherYear,expression:"otherYear"}],ref:"otherYear",staticClass:"countdown-year-other",attrs:{id:"countdown-year-other",type:"text",name:"countdown-year-other",placeholder:"yyyy",maxlength:"4","data-test":"other-year"},domProps:{value:e.otherYear},on:{blur:e.updateOtherYear,keypress:function(t){return e.isNumberKey(t)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.stopPropagation(),t.preventDefault(),e.updateOtherYear.apply(null,arguments))},input:function(t){t.target.composing||(e.otherYear=t.target.value)}}}):e._e()])]),t("collapsible-input",{attrs:{label:"Time",active:e.customTime},on:{toggleInput:e.toggleTime}},[t("div",{staticClass:"option-wrapper form-row"},[t("div",{staticClass:"option-form add-time-wrapper"},[t("div",{staticClass:"add-time-group"},[t("div",{staticClass:"select-wrapper select-hour"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.hourModel,expression:"hourModel"}],attrs:{id:"hour",name:"hour","data-test":"hour"},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.hourModel=t.target.multiple?a:a[0]},e.update]}},e._l(e.is12Hour?12:24,(function(a,r){return t("option",{key:e.is12Hour?a:r,domProps:{value:e.is12Hour?a:r}},[e._v(" "+e._s(e.is12Hour?a:r>9?r:"0"+r)+" ")])})),0)]),t("span",{staticClass:"hour-punctuation"},[e._v(":")]),t("div",{staticClass:"select-wrapper"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.minutes,expression:"minutes"}],attrs:{id:"minute",name:"minute","data-test":"minute"},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.minutes=t.target.multiple?a:a[0]},e.update]}},e._l(60,(function(a){return t("option",{key:a,domProps:{value:a-1}},[e._v(e._s((a<11?"0":"")+(a-1)))])})),0)]),e.is12Hour?t("div",{staticClass:"select-wrapper period"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.period,expression:"period"}],attrs:{id:"period",name:"period","data-test":"period"},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.period=t.target.multiple?a:a[0]},e.update]}},[t("option",{attrs:{value:"AM"}},[e._v("AM")]),t("option",{attrs:{value:"PM"}},[e._v("PM")])])]):e._e()])])])])],1)}),[],!1,null,"c684606c").exports;export{o as default};
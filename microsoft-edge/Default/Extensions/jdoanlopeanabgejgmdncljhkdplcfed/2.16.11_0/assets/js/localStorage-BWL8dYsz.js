const t={version:"2.16.11",environment:"production",apiUrl:"https://api.momentumdash.com/",platform:"edge"};async function e({method:t,url:e,data:n,headers:s}){const r=await fetch(e,{method:t,headers:s,body:"Object"===(null==n?void 0:n.constructor.name)?JSON.stringify(n):n}).catch((()=>({statusText:"No response from the server"}))),{status:o,headers:a,statusText:i}=r,c={status:o,headers:(null==a?void 0:a.entries)&&Object.fromEntries(a)||{},statusText:i};if(r.ok){const t=await r.text();return t&&(c.data=JSON.parse(t)),c}{let s="%c Request Error: "+(o||"");return i&&(s+=(o?" : ":"")+i),console.groupCollapsed(s,"color: #ff0505"),console.log("Request:",{method:t,url:e,data:n}),console.log("Response:",r),console.groupEnd(),c}}function n(t){return t>=200&&t<300}const s="store",r="_key",o="_value";function a(t){return"object"==typeof t&&null!==t&&r in t&&o in t}class i{constructor(t,e){this.name="keyValueDb:"+t,this.version=10*e,this.database=null}get db(){return this.database?Promise.resolve(this.database):this.open().then((t=>this.database=t))}open(){return new Promise(((t,e)=>{const n=indexedDB.open(this.name,this.version);n.onerror=()=>e(n.error),n.onupgradeneeded=()=>{n.result.createObjectStore(s,{keyPath:r})},n.onsuccess=()=>{const e=n.result;e.onversionchange=()=>{e.close(),this.database=null},t(e)}}))}async bulkPatch(t){const e={};for(const n in t){const s=t[n];s&&(e[n]=await this.patch(n,s))}return e}async patch(t,e){const n=await this.get(t);if("object"!=typeof n)throw new Error(`KeyValueDb:${this.name} Error: patch called on ${typeof n} value. Patch may only be called on objects or empty rows. Key: ${t}, Existing Value: ${String(n)}`);const s=Object.assign({},n||{},e),a={[r]:t,[o]:s};return await this.transaction("readwrite",(t=>t.put(a))),{newValue:s,previousValue:n}}set(t,e){const n={[r]:t,[o]:e};return this.transaction("readwrite",(t=>t.put(n)))}delete(t){return this.transaction("readwrite",(e=>e.delete(t)))}async get(t){const e=await this.transaction("readonly",(e=>e.get(t)));return e&&a(e)?e[o]:null}async transaction(t,e,n={retries:3}){let o=0;return new Promise(((i,c)=>{const u=async()=>{try{const n=(await this.db).transaction([s],t);n.onerror=()=>c(o.error);const o=e(n.objectStore(s));o.onsuccess=()=>{const t=o.result;if(!function(t){return void 0===t||"string"==typeof t||a(t)}(t))throw new Error(`Transaction result does not match schema (does not contain a property matching ${r})`);i(t)}}catch(l){if(++o>n.retries)return void c(l);(await this.db).close(),this.database=null,u()}};u()}))}}const c=new i("misc",1),u="https://api.momentumdash.com/";let l=null,d=null;async function h(n){return l||(d?await d:(d=e({url:u+"config",headers:{"X-Momentum-Version":t.version}}).then((({data:t})=>{if(!t)throw"Request for config from API failed";return t})).catch((t=>(console.error(t),c.get("config").then((t=>t||{}))))),l=await d,l&&await c.set("config",l))),function(t,e){return e?e.split(".").reduce(((t,e)=>null==t?void 0:t[e]),t):t}(l,n)}const p=t.version,m=t.environment;new URL(`https://browser-http-intake.logs.datadoghq.com/v1/input/pub18ef9128dd80db1a80dfc3f9180b55b5?ddsource=browser&ddtags=${encodeURIComponent(`env:${m},service:extension,version:${p}`)}`).toString();class g{constructor(t,e=1e-5){this.name=t,this.defaultSampleRate=e,this.sampleRate=null}warn(t,e){return this._log(t,e,"warn")}error(t,e){return this._log(t,e,"error")}info(t,e){return this._log(t,e,"info")}async _log(...t){}_convertUndefinedPropertiesToStrings(t){const e={};for(const[n,s]of Object.entries(t))e[n]=void 0===s?"<undefined>":s;return e}_parseArgs(t){let[e,n={},s]=t;if(n||"object"!=typeof e||(n=e,e=n.message),n instanceof ErrorEvent&&(n=n.error),n instanceof Error){const{name:t,stack:e}=n;n={name:t,errorMessage:n.message,stack:e}}else"string"==typeof n?(e=`${e}: ${n}`,n={}):"string"==typeof e&&n.message&&(n.message=`${e}: ${n.message}`);return n=this._convertUndefinedPropertiesToStrings(n),[e,n,s]}async _isEligibleForSubmission(){return null===this.sampleRate&&(this.sampleRate=await this._getSampleRate()),Math.random()<=this.sampleRate}async _getSampleRate(){const{datadogLoggingSamplingRate:t}=await h();return t?this.name.split(".").reduce(((e,n,s,r)=>{const o=r.slice(0,s+1).join(".");return o in t?t[o]:e}),this.defaultSampleRate):this.defaultSampleRate}}Storage.prototype.setObject=function(t,e){this.setItem(t,JSON.stringify(e))},Storage.prototype.getObject=function(t){const e=this.getItem(t);return e?JSON.parse(e):void 0};export{i as K,g as L,t as e,h as g,n as i,c as m,e as r};
import{M as e,b as t,t as r}from"./icon-alert-BG5stABd.js";const s={mixins:[{methods:{_mergeQueryParams(...e){return Object.assign.apply(null,[{},this.queryParams.all||{}].concat(e))},_buildQueryString(...e){const t=new URLSearchParams(this._mergeQueryParams.apply(null,e)).toString();return t?"?"+t:""}}}],unreactive:()=>({type:"",path:"",mode:"sync",pathOverrides:{},queryParams:{get:{},update:{}}}),created(){this.type||console.error("dataSyncServiceMixin Error: You must declare a type in unreactive")},methods:{get({path:r=this.pathOverrides.get||this.path||this.type,success:s,failure:a,queryParams:i,mode:n=this.mode,retry:h,notifyUserOnFailure:d}={}){r+=this._buildQueryString(this.queryParams.get,i);const o=[this.type,{path:r,env:this._getEnv(),mode:n,retry:h,notifyUserOnFailure:d}],u=this.type+":refreshed";n===e.Server?t.sendMessage({handler:"get",args:o}).then(s).catch(a):t.sendRecurringCrossTabMessage({msgId:u,handler:"get",args:o,success:s,failure:a})},refresh({queryParams:t,retry:r,notifyUserOnFailure:s}={}){return new Promise(((a,i)=>{this.get({queryParams:t,retry:r,mode:e.Server,success:a,failure:i,notifyUserOnFailure:s})}))},add(e,r,{path:s=this.pathOverrides.add||this.path||this.type,mode:a=this.mode}={}){const i=[this.type,e,r,{path:s,mode:a,env:this._getEnv()}];return t.sendMessage({handler:"create",args:i})},update(e,r,{path:s=this.pathOverrides.update||this.path||this.type,mode:a=this.mode,queryParams:i}={}){const n=this._buildQueryString(this.queryParams.update,i),h=[this.type,e,r];return h.push({path:s,mode:a,env:this._getEnv(),queryString:n}),t.sendMessage({handler:"update",args:h})},delete(e,{path:r=this.pathOverrides.delete||this.path||this.type,mode:s=this.mode}={}){const a=[this.type,e,{path:r,mode:s,env:this._getEnv()}];return t.sendMessage({handler:"delete",args:a})},_getEnv:()=>({token:localStorage.getItem("token"),clientUuid:localStorage.getItem("client_uuid"),apiUrl:m.globals.urlRootApi,version:m.globals.version,tabId:r})}};export{s as d};
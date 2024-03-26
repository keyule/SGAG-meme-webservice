function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Slower-C_cmwWZV.js","assets/ExternalInteractorBase-CIi3zRdK.js","assets/index-DVmxMQGv.js","assets/index-BueramFo.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-DVmxMQGv.js";class a{constructor(){this.factor=3,this.radius=200}load(r){r&&(r.factor!==void 0&&(this.factor=r.factor),r.radius!==void 0&&(this.radius=r.radius))}}async function s(t,r=!0){await t.addInteractor("externalSlow",async o=>{const{Slower:i}=await e(()=>import("./Slower-C_cmwWZV.js"),__vite__mapDeps([0,1,2,3]));return new i(o)},r)}export{a as Slow,s as loadExternalSlowInteraction};

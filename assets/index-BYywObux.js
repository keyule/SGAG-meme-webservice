function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-DdmrSJIE.js","assets/index-BMAq5v9h.js","assets/index-BueramFo.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-BMAq5v9h.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-DdmrSJIE.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};

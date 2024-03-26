function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BlUhSGlp.js","assets/index-DkN_ShBR.js","assets/index-BueramFo.css","assets/index-D8fONQNO.js","assets/index-MhiFppaX.js","assets/index-2c1Pzy4Y.js","assets/index-DnmE3_xi.js","assets/index-B9gmvGcI.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DkN_ShBR.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BlUhSGlp.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-D8fONQNO.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-MhiFppaX.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-2c1Pzy4Y.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DnmE3_xi.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-B9gmvGcI.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};

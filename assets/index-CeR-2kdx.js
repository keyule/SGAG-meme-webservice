function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-D7cNju_m.js","assets/index-DVmxMQGv.js","assets/index-BueramFo.css","assets/index-ChSFVDOa.js","assets/index-CHgiRRbN.js","assets/index-9Ny6u3a6.js","assets/index-BQeusPsr.js","assets/index-BpP8KMVm.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DVmxMQGv.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-D7cNju_m.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-ChSFVDOa.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-CHgiRRbN.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-9Ny6u3a6.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BQeusPsr.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BpP8KMVm.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};

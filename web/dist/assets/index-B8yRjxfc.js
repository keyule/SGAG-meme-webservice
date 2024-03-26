function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BYywObux.js","assets/index-BMAq5v9h.js","assets/index-BueramFo.css","assets/index-BXYxqEQ0.js","assets/index-Df9THq_9.js","assets/index-CiXhQlCB.js","assets/index-C8f76DOn.js","assets/index-Dl6DwY8w.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BMAq5v9h.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BYywObux.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BXYxqEQ0.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Df9THq_9.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CiXhQlCB.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-C8f76DOn.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-Dl6DwY8w.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};

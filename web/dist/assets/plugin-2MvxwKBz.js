function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinksPlugin-CLV9cSmC.js","assets/index-BMAq5v9h.js","assets/index-BueramFo.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-BMAq5v9h.js";async function r(i,n=!0){const{LinksPlugin:t}=await o(()=>import("./LinksPlugin-CLV9cSmC.js"),__vite__mapDeps([0,1,2])),a=new t;await i.addPlugin(a,n)}export{r as loadLinksPlugin};

if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>l(s,r),o={module:{uri:r},exports:a,require:u};e[r]=Promise.all(i.map((s=>o[s]||u(s)))).then((s=>(n(...s),a)))}}define(["./workbox-e64871ad"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_commonjs-dynamic-modules-TDtrdbi3.js",revision:null},{url:"assets/arc-Cd3wbhOt.js",revision:null},{url:"assets/array-BKyUJesY.js",revision:null},{url:"assets/blockDiagram-38ab4fdb-CQlANZYs.js",revision:null},{url:"assets/bug-issue-template-BID_ABWq.js",revision:null},{url:"assets/c4Diagram-3d4e48cf-ZUkYHXw5.js",revision:null},{url:"assets/channel-DWi6wSjp.js",revision:null},{url:"assets/classDiagram-70f12bd4-CvJhTePj.js",revision:null},{url:"assets/classDiagram-v2-f2320105-MltOxvl1.js",revision:null},{url:"assets/clone-C57b20DE.js",revision:null},{url:"assets/createText-2e5e7dd3-ep1DHdJV.js",revision:null},{url:"assets/directory-open-01563666-DWU9wJ6I.js",revision:null},{url:"assets/directory-open-4ed118d0-BNgAhb94.js",revision:null},{url:"assets/edges-e0da2a9e-B-4vXidP.js",revision:null},{url:"assets/erDiagram-9861fffd-1LSVJomO.js",revision:null},{url:"assets/file-open-002ab408-CQ9a1yTP.js",revision:null},{url:"assets/file-open-7c801643-CD3BRLr1.js",revision:null},{url:"assets/file-save-3189631c-x92wctJd.js",revision:null},{url:"assets/file-save-745eba88-D6MGJDcB.js",revision:null},{url:"assets/flowchart-elk-definition-4a651766-D5Z2O6ov.js",revision:null},{url:"assets/flowDb-956e92f1-D-f6MXAr.js",revision:null},{url:"assets/flowDiagram-66a62f08-DKVNwGz6.js",revision:null},{url:"assets/flowDiagram-v2-96b9c2cf-Bi_v2bwQ.js",revision:null},{url:"assets/ganttDiagram-c361ad54-D8AWf9bo.js",revision:null},{url:"assets/gitGraphDiagram-72cf32ee-Bcys1v48.js",revision:null},{url:"assets/graph-D2B_88MQ.js",revision:null},{url:"assets/image-blob-reduce.esm-xKov1Fz_.js",revision:null},{url:"assets/index-3862675e-H0EZI7lU.js",revision:null},{url:"assets/index-C4eF9RHD.js",revision:null},{url:"assets/index-ChGp7972.js",revision:null},{url:"assets/index-Q8Hi7u9B.css",revision:null},{url:"assets/index-Yq_ETRMq.js",revision:null},{url:"assets/index.esm-BE2LHAhT.js",revision:null},{url:"assets/index.esm-CyfSgQxH.js",revision:null},{url:"assets/index.esm-Czon6NWO.js",revision:null},{url:"assets/index.esm-DAFijy-a.js",revision:null},{url:"assets/infoDiagram-f8f76790-_mLCdnwh.js",revision:null},{url:"assets/init-Gi6I4Gst.js",revision:null},{url:"assets/journeyDiagram-49397b02-BUlrT23u.js",revision:null},{url:"assets/katex-rPiVaalG.js",revision:null},{url:"assets/layout-oyqCXTAT.js",revision:null},{url:"assets/line-CtD7sQgT.js",revision:null},{url:"assets/linear-CsyNK0sC.js",revision:null},{url:"assets/mindmap-definition-fc14e90a-C4idWpSM.js",revision:null},{url:"assets/ordinal-Cboi1Yqb.js",revision:null},{url:"assets/path-CbwjOpE9.js",revision:null},{url:"assets/pica-BzId1m4n.js",revision:null},{url:"assets/pieDiagram-8a3498a8-91tbARM1.js",revision:null},{url:"assets/quadrantDiagram-120e2f19-COpQaZ3w.js",revision:null},{url:"assets/random-username.esm-__vdrxyo.js",revision:null},{url:"assets/requirementDiagram-deff3bca-BPOtf-OH.js",revision:null},{url:"assets/roundRect-0PYZxl1G.js",revision:null},{url:"assets/sankeyDiagram-04a897e0-ChxvDE5k.js",revision:null},{url:"assets/sequenceDiagram-704730f1-BkVYrCIP.js",revision:null},{url:"assets/stateDiagram-587899a1-BNi2xU0M.js",revision:null},{url:"assets/stateDiagram-v2-d93cdb3a-CpNpZ3Bp.js",revision:null},{url:"assets/styles-6aaf32cf-BsODX6fO.js",revision:null},{url:"assets/styles-9a916d00-CXb6a4nx.js",revision:null},{url:"assets/styles-c10674c1-D8oEeqx0.js",revision:null},{url:"assets/svgDrawCommon-08f97a94-Dnn2Szyo.js",revision:null},{url:"assets/Tableau10-B-NsZVaP.js",revision:null},{url:"assets/timeline-definition-85554ec2-D6Av4spw.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"assets/xychartDiagram-e933f94c-B4yEpqSF.js",revision:null},{url:"index.html",revision:"ab6c19913a14e32d43e9ff7a6921bc41"},{url:"android-chrome-192x192.png",revision:"3d005c71b9ea629a8d137916a02ce9af"},{url:"apple-touch-icon.png",revision:"a9b855bc4fa588808a72c126fa9ade00"},{url:"favicon-32x32.png",revision:"1bcbbaf7639d13ce6e4abbd4a785f3dd"},{url:"favicon-16x16.png",revision:"6fc51d9533178efaec96f5c3c1f4c357"},{url:"manifest.webmanifest",revision:"9665628e4b8d1fb2e26d7e071c031172"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/.+.woff2/,new s.CacheFirst({cacheName:"fonts",plugins:[new s.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:7776e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/fonts.css/,new s.StaleWhileRevalidate({cacheName:"fonts",plugins:[new s.ExpirationPlugin({maxEntries:50})]}),"GET"),s.registerRoute(/locales\/[^/]+.js/,new s.CacheFirst({cacheName:"locales",plugins:[new s.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET"),s.registerRoute(/.chunk-.+.js/,new s.CacheFirst({cacheName:"chunk",plugins:[new s.ExpirationPlugin({maxEntries:50,maxAgeSeconds:7776e3})]}),"GET")}));
//# sourceMappingURL=sw.js.map

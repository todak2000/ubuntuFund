if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let o={};const r=e=>a(e,n),t={module:{uri:n},exports:o,require:r};s[n]=Promise.all(i.map((e=>t[e]||r(e)))).then((e=>(c(...e),o)))}}define(["./workbox-e9849328"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"42b26651d3e579aeb3b9371fe02c4070"},{url:"/_next/static/chunks/126-518ed68ab47e8c9b.js",revision:"qiub2oaJKIUP4TLpX1Lo4"},{url:"/_next/static/chunks/26-0f708fdcb9698fae.js",revision:"qiub2oaJKIUP4TLpX1Lo4"},{url:"/_next/static/chunks/38-8a30e55ddcf1a439.js",revision:"qiub2oaJKIUP4TLpX1Lo4"},{url:"/_next/static/chunks/45fc4c08-a5583e153e00cc47.js",revision:"qiub2oaJKIUP4TLpX1Lo4"},{url:"/_next/static/chunks/4ad74313-7f634d73e2010796.js",revision:"qiub2oaJKIUP4TLpX1Lo4"},{url:"/_next/static/chunks/4fc77d80-5eda03799759023d.js",revision:"qiub2oaJKIUP4TLpX1Lo4"},{url:"/_next/static/chunks/525-be6e92d747108dc9.js",revision:"qiub2oaJKIUP4TLpX1Lo4"},{url:"/_next/static/chunks/67f09e95-480c12ea0ccc8ae1.js",revision:"qiub2oaJKIUP4TLpX1Lo4"},{url:"/_next/static/chunks/69d582d6-1461be557fe1ea46.js",revision:"qiub2oaJKIUP4TLpX1Lo4"},{url:"/_next/static/chunks/6a69c5ad-ec0f266230e802cf.js",revision:"qiub2oaJKIUP4TLpX1Lo4"},{url:"/_next/static/chunks/721-6999327bd9675b05.js",revision:"qiub2oaJKIUP4TLpX1Lo4"},{url:"/_next/static/chunks/7bc0a3ec-53d146697f688312.js",revision:"qiub2oaJKIUP4TLpX1Lo4"},{url:"/_next/static/chunks/811260a5-cb9b6f8d4745b2e0.js",revision:"qiub2oaJKIUP4TLpX1Lo4"},{url:"/_next/static/chunks/822-a5502a787b6159d4.js",revision:"qiub2oaJKIUP4TLpX1Lo4"},{url:"/_next/static/chunks/867-90ba2bb2c0842d55.js",revision:"qiub2oaJKIUP4TLpX1Lo4"},{url:"/_next/static/chunks/94a5048d-dc0c7aa6fef82f56.js",revision:"qiub2oaJKIUP4TLpX1Lo4"},{url:"/_next/static/chunks/952-e8645e9dcabc54c1.js",revision:"qiub2oaJKIUP4TLpX1Lo4"},{url:"/_next/static/chunks/9ea53843-85c7ab8bf22cb1f1.js",revision:"qiub2oaJKIUP4TLpX1Lo4"},{url:"/_next/static/chunks/ad471201-4a1173fda6b3750f.js",revision:"qiub2oaJKIUP4TLpX1Lo4"},{url:"/_next/static/chunks/app/_not-found/page-4977c34b38b0a809.js",revision:"qiub2oaJKIUP4TLpX1Lo4"},{url:"/_next/static/chunks/app/create/page-1ed98071634684e0.js",revision:"qiub2oaJKIUP4TLpX1Lo4"},{url:"/_next/static/chunks/app/donate/page-31b1cad932b7f527.js",revision:"qiub2oaJKIUP4TLpX1Lo4"},{url:"/_next/static/chunks/app/layout-d85fab68a78e9353.js",revision:"qiub2oaJKIUP4TLpX1Lo4"},{url:"/_next/static/chunks/app/not-found-c58bfe9a8252d0ce.js",revision:"qiub2oaJKIUP4TLpX1Lo4"},{url:"/_next/static/chunks/app/page-23f034cc2d33145b.js",revision:"qiub2oaJKIUP4TLpX1Lo4"},{url:"/_next/static/chunks/b080fbec-9595874f4382b068.js",revision:"qiub2oaJKIUP4TLpX1Lo4"},{url:"/_next/static/chunks/b336f92d-3a8888e39f271fd0.js",revision:"qiub2oaJKIUP4TLpX1Lo4"},{url:"/_next/static/chunks/b37b5a36-f0d6a548b48d2dc0.js",revision:"qiub2oaJKIUP4TLpX1Lo4"},{url:"/_next/static/chunks/bd03e8ed-8243b4a4a100589c.js",revision:"qiub2oaJKIUP4TLpX1Lo4"},{url:"/_next/static/chunks/d10eb45f-6c506d0fe2c2aadc.js",revision:"qiub2oaJKIUP4TLpX1Lo4"},{url:"/_next/static/chunks/dff7fcc9-97ab6c5c9135448a.js",revision:"qiub2oaJKIUP4TLpX1Lo4"},{url:"/_next/static/chunks/e9c6c589-8633c362a4203185.js",revision:"qiub2oaJKIUP4TLpX1Lo4"},{url:"/_next/static/chunks/f865611b-9cfda2b8f7afe183.js",revision:"qiub2oaJKIUP4TLpX1Lo4"},{url:"/_next/static/chunks/framework-472eef658406059b.js",revision:"qiub2oaJKIUP4TLpX1Lo4"},{url:"/_next/static/chunks/main-60335e43fa1fbc09.js",revision:"qiub2oaJKIUP4TLpX1Lo4"},{url:"/_next/static/chunks/main-app-57a7b410be76f5e5.js",revision:"qiub2oaJKIUP4TLpX1Lo4"},{url:"/_next/static/chunks/pages/_app-7cd99b7619c06d04.js",revision:"qiub2oaJKIUP4TLpX1Lo4"},{url:"/_next/static/chunks/pages/_error-dac8b1ef764871fd.js",revision:"qiub2oaJKIUP4TLpX1Lo4"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-8a2f24e9c48e4834.js",revision:"qiub2oaJKIUP4TLpX1Lo4"},{url:"/_next/static/css/1d8bd51597259d2d.css",revision:"1d8bd51597259d2d"},{url:"/_next/static/media/16cbb6757f6536f8.p.woff2",revision:"cbf10282d7d00d35800f3c0ad49ebe14"},{url:"/_next/static/media/40db3b694e9f472f.woff2",revision:"af1f8aa1ce0ece049333c7e08ece9832"},{url:"/_next/static/qiub2oaJKIUP4TLpX1Lo4/_buildManifest.js",revision:"07a8fa15f5bdc6abeda95d02838c6710"},{url:"/_next/static/qiub2oaJKIUP4TLpX1Lo4/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/assets/404 Error-amico.svg",revision:"ca4897b537e27f09b52afed791017d97"},{url:"/assets/carousel/one.png",revision:"bb2d379a161f84e6a549e5d6187f754f"},{url:"/assets/carousel/three.png",revision:"fce18dfa33d0d4c66c765230dff6598a"},{url:"/assets/carousel/two.png",revision:"73ace74d8a53f184a2ff22e55b8e172f"},{url:"/assets/cart.svg",revision:"ad992f91c00708221dc502fe511c1907"},{url:"/assets/categories/baby.svg",revision:"3e2a6ce26128c41210e0b5b6e23ee6f9"},{url:"/assets/categories/cars.svg",revision:"39de71863df576c71ffce2ddc2fdadb4"},{url:"/assets/categories/computers.svg",revision:"abd26dbf371f119cb2674718578009a0"},{url:"/assets/categories/electronics.svg",revision:"5fb64ff68f578ef25e9f3453c3d67ee6"},{url:"/assets/categories/fashion.svg",revision:"a3ffe31502f235fb399c3278945bbf58"},{url:"/assets/categories/games.svg",revision:"42ae3f12b3743764571311be89ace4f7"},{url:"/assets/categories/health.svg",revision:"8c20a271fce0bb936549041f6dfbd844"},{url:"/assets/categories/home.svg",revision:"9b6574e737b46f8bfa68566c43f31825"},{url:"/assets/categories/phone.svg",revision:"e0592dc8cf344551b6a09fcea1b8f5cb"},{url:"/assets/categories/sales.svg",revision:"5b5f56bd0b147b8c80f6983d1027372a"},{url:"/assets/categories/sport.svg",revision:"40e72d0ff7f07290a171961a3e953c3e"},{url:"/assets/categories/supermarket.svg",revision:"d5006c0cf60115de8edc21bec25ec05d"},{url:"/assets/dashboard.svg",revision:"315a4e3b74f6cc200421f9a5ab79e418"},{url:"/assets/features/brand.svg",revision:"a93137805fa2ced06b4140b48576fea1"},{url:"/assets/features/pricing.svg",revision:"a1d11406a2ad592fbc31032bef1c480d"},{url:"/assets/features/provider.svg",revision:"1e7003885c78996751084855c352cf67"},{url:"/assets/features/user.svg",revision:"b6071baa2883700b7392bce1c9e46017"},{url:"/assets/landing/about.png",revision:"1fe366c473812d8e9a62e8dab11f3614"},{url:"/assets/landing/culture.png",revision:"ded6855dfd1521307672d306ddf2efdf"},{url:"/assets/landing/heroBg.png",revision:"f73d72cb3ae129814d8da338afdde293"},{url:"/assets/landing/mission.png",revision:"1c1d42937b4e5421451ca919bf1a8129"},{url:"/assets/landing/watch.png",revision:"6cf20d4c7e85abc076ceb247561713bd"},{url:"/assets/login.svg",revision:"489c3ce901ef40a946b24522df9bf83d"},{url:"/assets/logout.svg",revision:"510583dc9e86021bb821df7293e8ba31"},{url:"/assets/orders.svg",revision:"fea4e63b8c20cbfc51adb8b66090cb57"},{url:"/assets/person.svg",revision:"9ee2e20b3faf29c280f2347dff62b83e"},{url:"/assets/person_mobile.svg",revision:"54dbab08b44c03b480f0e23d44de117c"},{url:"/assets/register.svg",revision:"50554562bbc6ef0d10e12f4451d16bac"},{url:"/assets/search/four.png",revision:"aa25225f61b3ec0261d5592bd9e332fe"},{url:"/assets/search/one.png",revision:"6c1272915569d594d6f01b24b50c6e9d"},{url:"/assets/search/three.png",revision:"e43b3d510f8d6513dbf0fa203d9dd546"},{url:"/assets/search/two.png",revision:"275f27b929c35ca9e18d342c2245d2db"},{url:"/assets/searchLeft.svg",revision:"80710ea6f719d8ba544a31bd3bfd1deb"},{url:"/assets/searchRight.svg",revision:"2509a1ac9fdf383d9575df2e68fc6976"},{url:"/assets/why/delivery.svg",revision:"545d9ce11133184e630289e1b2cb2bda"},{url:"/assets/why/options.svg",revision:"44adeb4c6dd6286a9cfafc9787269776"},{url:"/assets/why/products.svg",revision:"2e1c5d019f3dd6fda7a5a862986db3f7"},{url:"/assets/why/safety.svg",revision:"256f1a41409411a17afe22031b85ce55"},{url:"/assets/why/sales.svg",revision:"9db67505819adbc0df314ff9ae10f455"},{url:"/images/hero-bg.png",revision:"378818d548f2cd58033f53976b5a686e"},{url:"/images/hero-bg2.png",revision:"9fe43667ca7cf379e520a57b32caadc5"},{url:"/images/hero-bg3.png",revision:"3599c160ecd62bc97b4d6378ef5f2565"},{url:"/images/hero-bgg.png",revision:"fdfaa265faf4e4ae7640ee9c2c4ac89e"},{url:"/logo.svg",revision:"52126de84b2d3f2fc5a93f5d0cfad1d9"},{url:"/robots.txt",revision:"d6a9ef9a58625dfe54003f410827ad2d"},{url:"/seo/android-chrome-192x192.png",revision:"761d6e20b8bf2ddcc39ea07dd27d5a4b"},{url:"/seo/android-chrome-512x512.png",revision:"2ff3eecf042330e146fcd57d9002127a"},{url:"/seo/apple-touch-icon.png",revision:"8c9b7961c84cdeb9e60e2880102798af"},{url:"/seo/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"/seo/favicon-16x16.png",revision:"189f69c5124419f69ce29daee52a2112"},{url:"/seo/favicon-32x32.png",revision:"6e6e2c53242f3c830e03ba9405f77510"},{url:"/seo/maskable-icon.png",revision:"8b5a7c896e86b1ddba8659c04be60d60"},{url:"/seo/mstile-144x144.png",revision:"eab02925403635cf87ded3ec55a4cb25"},{url:"/seo/mstile-150x150.png",revision:"b2716a13f0ad5b855d6e434c1d810dea"},{url:"/seo/mstile-310x150.png",revision:"88db7773be20ce1f3c37c0b2a729801d"},{url:"/seo/mstile-310x310.png",revision:"b7b2993c5e367734098f9052c12f0763"},{url:"/seo/mstile-70x70.png",revision:"c4f86103407e69a903cfe2a6eff695da"},{url:"/seo/og-image.png",revision:"f2a8ccde74c8dffaaffc2e8f8acfc099"},{url:"/seo/safari-pinned-tab.svg",revision:"a03d4cfd9e66340cd3e0c613de6fba2c"},{url:"/seo/site.webmanifest",revision:"b9aa277fcfc34c31db6c7a7ea3469b8c"},{url:"/sitemap-0.xml",revision:"5f944d952908b2b515c7d704cd992823"},{url:"/sitemap.xml",revision:"5182046de0db36e6343ebf80ddb2da8f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

(()=>{var e={63927:function(e,t,r){var n={"./en":"46952","./en.json":"46952","./fr":"45413","./fr.json":"45413"};function o(e){return r(i(e))}function i(e){if(!r.o(n,e)){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=i,e.exports=o,o.id=63927},74303:function(e,t,r){"use strict";var n=r(85893);r(78893),r(59507),r(98049),r(67294);var o=r(62330),i=r(16396),u=r.n(i),a=r(28802),c=r(22960),l=r(72339),s=r(96122);let d=e=>{let{client:t,lang:r,polyglot:u,children:d}=e;return(0,n.jsx)(c.WebviewIntentProvider,{children:(0,n.jsx)(i.CozyProvider,{client:t,children:(0,n.jsx)(a.DataProxyProvider,{children:(0,n.jsx)(o.BarProvider,{children:(0,n.jsx)(s.I18n,{lang:r,polyglot:u,children:(0,n.jsx)(l.BreakpointsProvider,{children:d})})})})})})};var f=r(20745),p=r(71400),v=r(72916),h=r(79233),g=JSON.parse('{"u2":"Twake Chat","i8":"0.1.0"}');let j={},y=e=>{let t=JSON.parse(e.dataset.cozy),r=window.location.protocol,n=`${r}//${t.domain}`;return new(u())({uri:n,token:t.token,appMetadata:{slug:g.u2,version:g.i8},schema:j,store:!0})},O=(e,t)=>/^\{\{\..*\}\}$/.test(e)?t:e,b=()=>{var e;let t=document.querySelector("[role=application]"),n=(0,f.createRoot)(t),o=y(t),i=O(null===(e=JSON.parse(t.dataset.cozy))||void 0===e?void 0:e.locale,"en"),u=(0,h.QE)(i,e=>r(63927)(`./${e}`));return o.registerPlugin(p.default.plugin),o.registerPlugin(v.RealtimePlugin),{root:n,client:o,lang:i,polyglot:u}};var x=r(79655),m=r(26335),w=r(62857),P=r(32692);let k=[{path:"*",element:(0,n.jsx)(()=>{let{isMobile:e}=(0,l.default)(),t=(0,i.useClient)();return(0,w.useExternalBridge)("https://chat.stg.lin-saas.com/"),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.BarComponent,{}),e&&(0,n.jsx)(o.BarCenter,{children:(0,n.jsx)(P.default,{variant:"h5",children:t.appMetadata.slug})}),(0,n.jsx)("iframe",{id:"embeddedApp",src:"https://chat.stg.lin-saas.com"})]})},{})}],_=()=>{let e=(0,x.createBrowserRouter)(k);return(0,n.jsx)(m.pG,{router:e})};window.addEventListener("message",e=>console.log("\uD83D\uDFE2",e));let S=()=>{let{root:e,client:t,lang:r,polyglot:o}=b();e.render((0,n.jsx)(d,{client:t,lang:r,polyglot:o,children:(0,n.jsx)(_,{})}))};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",S):S()},14061:function(){},71169:function(){},17770:function(){},47936:function(){},39322:function(){},46952:function(e){"use strict";e.exports={}},45413:function(e){"use strict";e.exports={}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.m=e,r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};r.t=function(n,o){if(1&o&&(n=this(n)),8&o||"object"==typeof n&&n&&(4&o&&n.__esModule||16&o&&"function"==typeof n.then))return n;var i=Object.create(null);r.r(i);var u={};e=e||[null,t({}),t([]),t(t)];for(var a=2&o&&n;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach(function(e){u[e]=function(){return n[e]}});return u.default=function(){return n},r.d(i,u),i}})(),r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},(()=>{var e=[];r.O=function(t,n,o,i){if(n){i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,o,i];return}for(var a=1/0,u=0;u<e.length;u++){for(var n=e[u][0],o=e[u][1],i=e[u][2],c=!0,l=0;l<n.length;l++)(!1&i||a>=i)&&Object.keys(r.O).every(function(e){return r.O[e](n[l])})?n.splice(l--,1):(c=!1,i<a&&(a=i));if(c){e.splice(u--,1);var s=o();void 0!==s&&(t=s)}}return t}})(),r.p="/",r.rv=function(){return"1.2.5"},(()=>{var e={909:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,i,u=n[0],a=n[1],c=n[2],l=0;if(u.some(function(t){return 0!==e[t]})){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(c)var s=c(r)}for(t&&t(n);l<u.length;l++)i=u[l],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(s)},n=self.webpackChunktwakechat=self.webpackChunktwakechat||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.ruid="bundler=rspack@1.2.5";var n=r.O(void 0,["465","361","118","937"],function(){return r(74303)});n=r.O(n)})();
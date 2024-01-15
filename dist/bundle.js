(()=>{"use strict";var n,e,t,o,r,a,i,c,s,u,d,l,p,f,v={426:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,"body {\n    font-family: 'Playfair Display', sans-serif;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    background-color: #f0f0f0;\n}\n\n#app {\n    text-align: center;\n}\n\ninput[type=\"text\"] {\n    padding: 10px;\n    margin-right: 10px;\n}\n\n\n/* .slide {\n    --color: #8fc866;\n    --hover: #66c887;\n}\n\n.slide:hover, .slide:focus {\n    box-shadow: inset 6.5em 0 0 0 var(--hover);\n}\n\n\nbutton {\n    padding: 10px;\n    cursor: pointer;\n    transition: transform 0.3s ease-in-out;\n}\n\nbutton:hover {\n    transform: scale(1.1);\n} */\n\n\nbutton {\n    padding: 10px;\n    font-size: 16px;\n    cursor: pointer;\n    background: linear-gradient(to right, white 50%, transparent 50%);\n    background-size: 200% 100%;\n    color: #000;\n    border: none;\n    transition: background 0.3s ease-in-out, color 0.3s ease-in-out;\n}\n\nbutton:hover,button:focus {\n    background-color: #000;\n    background-position:  0 100%; /* Slide the gradient to the left */\n    color: #fff; /* New text color on hover */\n}\n\nbutton:hover,\nbutton:active {\n    background-position: -100% 0; /* Slide the gradient to the right when leaving the button */\n    color: #fff; /* New text color on exit */\n}\n\n\nul {\n    list-style: none;\n    padding: 0;\n}\n\nli {\n    margin: 10px 0;\n    opacity: 0;\n    animation: fadeIn 0.5s ease-in-out forwards;\n    transition: opacity 0.5s ease-in-out;\n}\n\nli.completed {\n    opacity: 0.5;\n}\n\nli.disappear {\n    animation: fadeOut 0.5s ease-in-out forwards;\n}\n\n@keyframes fadeIn {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n@keyframes fadeOut {\n    from {\n        opacity: 1;\n    }\n    to {\n        opacity: 0;\n    }\n}\n",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<n.length;u++){var d=[].concat(n[u]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],u=o.base?s[0]+o.base:s[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var p=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var v=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:l,updater:v,references:1})}i.push(l)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=o(n,r),u=0;u<a.length;u++){var d=t(a[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},m={};function h(n){var e=m[n];if(void 0!==e)return e.exports;var t=m[n]={id:n,exports:{}};return v[n](t,t.exports,h),t.exports}h.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return h.d(e,{a:e}),e},h.d=(n,e)=>{for(var t in e)h.o(e,t)&&!h.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},h.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),h.nc=void 0,n=h(379),e=h.n(n),t=h(795),o=h.n(t),r=h(569),a=h.n(r),i=h(565),c=h.n(i),s=h(216),u=h.n(s),d=h(589),l=h.n(d),p=h(426),(f={}).styleTagTransform=l(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=u(),e()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals,console.log("webpack is working"),document.addEventListener("DOMContentLoaded",(function(){document.getElementById("addTask").addEventListener("click",(function(){const n=document.getElementById("taskInput"),e=document.getElementById("taskList");if(""!==n.value){const t=document.createElement("li"),o=document.createElement("input");o.type="checkbox",t.appendChild(o);const r=document.createElement("span");r.textContent=n.value,t.appendChild(r),e.appendChild(t),n.value="",o.addEventListener("change",(function(){o.checked?r.style.textDecoration="line-through":r.style.textDecoration="none"}))}}))}))})();
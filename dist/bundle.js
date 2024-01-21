(()=>{"use strict";var n,e,t,o,r,i,a,c,s,d,l,u,p,m,f={426:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,"body {\n    font-family: 'Times New Roman', Times, serif;\n    background-color: white;\n    color: black;\n    margin: 0;\n    padding: 20px;\n}\n\nbutton,\n#openFormBtn,\nform button {\n    cursor: pointer;\n    font-size: 16px;\n    padding: 10px;\n    transition: background 0.3s ease-in-out, color 0.3s ease-in-out;\n    border: 1px solid #000;\n    background: linear-gradient(to right, white 50%, black 50%);\n    background-size: 200% 100%;\n    color: black;\n}\n\nbutton:hover, \nbutton:focus,\nbutton:active,\n#openFormBtn:hover, \n#openFormBtn:focus, \n#openFormBtn:active,\nform button:hover, \nform button:focus, \nform button:active {\n    background-position: -100% 0;\n    color: white;\n}\n\n#openFormBtn {\n    background-color: black;\n    color: black;\n    text-transform: uppercase;\n    font-weight: bold;\n}\n\n#closeFormBtn {\n    background: linear-gradient(to right, white 50%, #ff5100 50%);\n    background-size: 200% 100%;\n    color: black; /* Initial text color */\n    \n}\n\n#closeFormBtn:hover, \n#closeFormBtn:focus, \n#closeFormBtn:active {\n    background-position: -100% 0;\n    color: white; \n    /* Text color changes to white on hover/active */\n}\n\n#formPopup {\n    display: none;\n    position: fixed;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    border: 2px solid black;\n    padding: 20px;\n    z-index: 1000;\n    background-color: white;\n    width: 300px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\nform h2 {\n    font-size: 24px;\n    margin-bottom: 20px;\n}\n\nform label {\n    display: block;\n    margin-bottom: 5px;\n    font-weight: bold;\n}\n\nform input, \nform textarea, \nform select, \nform button {\n    width: 100%;\n    padding: 8px;\n    margin-bottom: 20px;\n    border: 1px solid #000;\n    box-sizing: border-box;\n    background-color: white;\n    color: black;\n}\n\nform button {\n    background-color: black;\n    \n    text-transform: uppercase;\n    font-weight: bold;\n}\n\nul {\n    list-style-type: none;\n    padding: 0;\n}\n\nli {\n    border-bottom: 1px solid black;\n    padding: 8px 0;\n    margin-top: 8px;\n}\n  \nform textarea#description {\n    height: 5em;\n    resize: none;\n    overflow-y: hidden;\n}\n",""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=r(m,o);o.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=o(n,r),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},b={};function h(n){var e=b[n];if(void 0!==e)return e.exports;var t=b[n]={id:n,exports:{}};return f[n](t,t.exports,h),t.exports}h.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return h.d(e,{a:e}),e},h.d=(n,e)=>{for(var t in e)h.o(e,t)&&!h.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},h.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),h.nc=void 0,n=h(379),e=h.n(n),t=h(795),o=h.n(t),r=h(569),i=h.n(r),a=h(565),c=h.n(a),s=h(216),d=h.n(s),l=h(589),u=h.n(l),p=h(426),(m={}).styleTagTransform=u(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),e()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals,console.log("webpack is working"),document.addEventListener("DOMContentLoaded",(function(){class n{constructor(n,e,t,o){this.title=n,this.description=e,this.dueDate=t,this.priority=o}}document.getElementById("closeFormBtn").addEventListener("click",(function(){document.getElementById("formPopup").style.display="none"})),document.addEventListener("keydown",(function(n){"Escape"===n.key&&(document.getElementById("formPopup").style.display="none")})),document.getElementById("openFormBtn").addEventListener("click",(function(){document.getElementById("formPopup").style.display="block"})),document.getElementById("taskForm").addEventListener("submit",(function(e){e.preventDefault();const t=new n(document.getElementById("title").value,document.getElementById("description").value,document.getElementById("dueDate").value,document.getElementById("priority").value),o=document.createElement("li"),r=document.createElement("input");r.type="checkbox",r.id="check"+document.getElementById("taskList").childElementCount;const i=document.createElement("label");i.htmlFor=r.id,i.textContent=t.title;const a=document.createElement("button");a.textContent="Info";const c=document.createElement("div");c.style.display="none",c.innerHTML=`\n            <p>Description: ${t.description}</p>\n            <p>Due Date: ${t.dueDate}</p>\n            <p>Priority: ${t.priority}</p>\n        `,a.onclick=function(){c.style.display="none"===c.style.display?"block":"none"},o.appendChild(r),o.appendChild(i),o.appendChild(a),o.appendChild(c),document.getElementById("taskList").appendChild(o),this.reset(),document.getElementById("formPopup").style.display="none"}))}))})();
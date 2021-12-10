(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>s});var a=t(81),i=t.n(a),r=t(645),o=t.n(r)()(i());o.push([n.id,'* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: Roboto, sans-serif;\n}\n\n.body {\n  height: 100vh;\n}\n\n.header {\n  position: fixed;\n  width: 100%;\n  padding: 12px 34px;\n  display: flex;\n  align-items: center;\n  background: #6200EE;\n  box-shadow: 0 4px 5px rgba(0, 0, 0, .14), 0 1px 10px rgba(0, 0, 0, .12), 0 2px 4px rgba(0, 0, 0, .2);\n}\n\n.header__logo-title {\n  margin-left: 16px;\n  font-weight: 500;\n  font-size: 20px;\n  color: #FFF;\n}\n\n.main {\n  padding-top: 60px;\n  display: flex;\n  height: 100%;\n  max-width: 1440px;\n  margin: 0 auto;\n}\n\n.main__content {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  padding: 34px;\n  height: 100%;\n  width: 100%;\n}\n\n.main__content-item {\n  object-fit: cover;\n  width: 24%;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, .14), 0 3px 1px rgba(0, 0, 0, .12), 0 1px 5px rgba(0, 0, 0, .2);\n}\n\n.upload {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  width: 65px;\n  height: 65px;\n  background: #03DAC5;\n  box-shadow: 0 4px 5px rgba(0, 0, 0, .14), 0 1px 10px rgba(0, 0, 0, .12), 0 2px 4px rgba(0, 0, 0, .2);\n  border-radius: 50%;\n  right: 35px;\n  bottom: 35px;\n  cursor: pointer;\n  z-index: 1;\n}\n\n.upload__icon {\n  width: 20px;\n  height: 20px;\n}\n\n.upload__input {\n  width: .1px;\n  height: .1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n\n.screen__loader {\n  display: none;\n  position: fixed;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100%;\n  top: 0;\n  left: 0;\n  backdrop-filter: blur(8px);\n  background: rgba(0,0,0,.5);\n}\n\n.active {\n  display: flex;\n}\n\n.lds-dual-ring {\n  display: inline-block;\n  width: 80px;\n  height: 80px;\n}\n\n.lds-dual-ring::after {\n  content: " ";\n  display: block;\n  width: 64px;\n  height: 64px;\n  margin: 8px;\n  border-radius: 50%;\n  border: 6px solid #FFF;\n  border-color: #FFF transparent;\n  animation: lds-dual-ring 2s linear infinite;\n}\n\n@keyframes lds-dual-ring {\n  0% { transform: rotate(0deg) }\n  100% { transform: rotate(360deg) }\n}\n\n.main__images {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  backdrop-filter: blur(8px);\n  background: rgba(0,0,0,.5);\n  z-index: 10;\n}\n\n.images__enlarged {\n  max-width: 60%;\n  max-height: 60%;\n}\n\n.images__active {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n@media (max-width: 768px) {\n\n  .main__content {\n    padding: 20px;\n  }\n\n  .main__content-item {\n    width: 30%;\n    margin: 0 auto;\n  }\n}\n\n@media (max-width: 320px) {\n\n  .main__content {\n    padding: 15px;\n  }\n\n  .main__content-item {\n    width: 100%;\n    margin: 0 auto;\n  }\n}\n',""]);const s=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,i,r){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);a&&o[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var r={},o=[],s=0;s<n.length;s++){var c=n[s],d=a.base?c[0]+a.base:c[0],l=r[d]||0,p="".concat(d," ").concat(l);r[d]=l+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var g=i(m,a);a.byIndex=s,e.splice(s,0,{identifier:p,updater:g,references:1})}o.push(p)}return o}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var r=a(n=n||[],i=i||{});return function(n){n=n||[];for(var o=0;o<r.length;o++){var s=t(r[o]);e[s].references--}for(var c=a(n,i),d=0;d<r.length;d++){var l=t(r[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=c}}},569:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,i&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(a){var i=e[a];if(void 0!==i)return i.exports;var r=e[a]={id:a,exports:{}};return n[a](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),a=t(795),i=t.n(a),r=t(569),o=t.n(r),s=t(565),c=t.n(s),d=t(216),l=t.n(d),p=t(589),u=t.n(p),m=t(426),g={};g.styleTagTransform=u(),g.setAttributes=c(),g.insert=o().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=l(),e()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;var h=document.querySelector("[data-upload]"),f=document.querySelector("[data-display-image]"),x=document.querySelector("[data-loader]"),v=document.querySelector("[data-enlarged-image]"),b=function(){function n(n,e,t,a){var i=this;this.uploadInputEl=n,this.displayContentEl=e,this.loaderEl=t,this.imageFocusEl=a,this.settingsHandler=function(n){var e=n.target.files[0];if(!e.type.match("image"))return alert('Data type does not match "image"');i.loaderEl.classList.add("active");var t=URL.createObjectURL(e);setTimeout((function(){i.renderImage(t)}),2e3)},this.renderImage=function(n){i.displayContentEl.insertAdjacentHTML("afterbegin",'<img data-item-img class="main__content-item" src="'.concat(n,'"/>\n        ')),i.loaderEl.classList.remove("active")},this.showPreviewImages=function(n){i.imageFocusEl.classList.add("images__active"),i.imageFocusEl.insertAdjacentHTML("afterbegin",'<img class="images__enlarged" src="'.concat(n,'"/>\n        ')),i.loaderEl.classList.remove("active")},this.hideShowPreviewImages=function(){i.imageFocusEl.classList.remove("images__active"),i.imageFocusEl.innerHTML=""},this.listenEvents()}return n.prototype.listenEvents=function(){var n=this;this.uploadInputEl.addEventListener("change",this.settingsHandler),this.displayContentEl.addEventListener("click",(function(e){var t=e.target;t.hasAttribute("data-item-img")&&(n.loaderEl.classList.add("active"),setTimeout((function(){n.showPreviewImages(t.src)}),500))})),this.imageFocusEl.addEventListener("click",this.hideShowPreviewImages)},n}();new b(h,f,x,v)})()})();
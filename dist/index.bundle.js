(()=>{"use strict";var e={416:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(81),a=r.n(n),o=r(645),i=r.n(o)()(a());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Chivo+Mono:wght@400;700&display=swap);"]),i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Chivo+Mono:wght@400;700&display=swap);"]),i.push([e.id,".gameboard{width:100%;height:100%;display:grid;grid-template-columns:repeat(11, 1fr);grid-template-rows:repeat(11, 1fr)}.gameboard .gameboard-markup{font-size:1.5rem;width:100%;height:100%;color:#98c1d9;text-transform:uppercase;display:flex;justify-content:center;align-items:center}.gameboard .gameboard-grid{width:100%;height:100%;grid-column:2/12;grid-row:2/12;border:1px solid #3d5a80;display:grid;grid-template-columns:repeat(10, 1fr);grid-template-rows:repeat(10, 1fr);outline:4px solid rgba(0,0,0,0);transition:outline-color .3s ease-in-out}.gameboard .gameboard-grid .gameboard-grid-cell{border:1px solid #3d5a80;transition:background-color .2s ease-in}.game{display:grid;grid-template-columns:1fr 1fr;gap:32px 128px}.game .player-side{display:flex;flex-direction:column;gap:16px;align-items:center}.game .player-side .player-name{color:#3d5a80;font-size:1.8rem;font-weight:700}.game .player-side .gameboard-container{margin-right:48px;width:528px;height:528px}.game .winner-label{grid-column:1/3;font-size:2rem;justify-self:center;text-align:center}.game .new-game-btn{grid-column:1/3;justify-self:center;font-size:2rem;margin-bottom:32px;width:256px;height:64px;border:none;border-radius:12px;background-color:#98c1d9;color:#293241;transition:color .2s ease-in-out,background-color .2s ease-in-out}.game .new-game-btn:hover{cursor:pointer;background-color:#3d5a80;color:#fff}.game .gameboard .gameboard-grid.active{outline-color:#98c1d9}.game .gameboard .gameboard-grid.active .gameboard-grid-cell:hover:not(.hit){z-index:1;border:3px solid #3d5a80;outline:3px solid #3d5a80;cursor:pointer}.game .gameboard .gameboard-grid .gameboard-grid-cell.revealed{z-index:1;border:3px dashed #3d5a80;outline:2px solid #3d5a80}.game .gameboard .gameboard-grid .gameboard-grid-cell.hit{background-color:#98c1d9}.game .gameboard .gameboard-grid .gameboard-grid-cell.hit.damaged{background-color:#ee6c4d}.game .gameboard .gameboard-grid .gameboard-grid-cell.hit.damaged.destroyed{z-index:1;background-color:#3d5a80;outline:3px dashed #3d5a80}",""]);const s=i},5:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(81),a=r.n(n),o=r(645),i=r.n(o)()(a());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Chivo+Mono:wght@400;700&display=swap);"]),i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Chivo+Mono:wght@400;700&display=swap);"]),i.push([e.id,'.gameboard{width:100%;height:100%;display:grid;grid-template-columns:repeat(11, 1fr);grid-template-rows:repeat(11, 1fr)}.gameboard .gameboard-markup{font-size:1.5rem;width:100%;height:100%;color:#98c1d9;text-transform:uppercase;display:flex;justify-content:center;align-items:center}.gameboard .gameboard-grid{width:100%;height:100%;grid-column:2/12;grid-row:2/12;border:1px solid #3d5a80;display:grid;grid-template-columns:repeat(10, 1fr);grid-template-rows:repeat(10, 1fr);outline:4px solid rgba(0,0,0,0);transition:outline-color .3s ease-in-out}.gameboard .gameboard-grid .gameboard-grid-cell{border:1px solid #3d5a80;transition:background-color .2s ease-in}.gameboard-editor{grid-row:2;display:grid;grid-template-columns:max-content max-content;gap:64px}.gameboard-editor .gameboard-container{grid-column:1;min-width:528px;min-height:528px}.gameboard-editor .gameboard-container .gameboard .gameboard-grid .gameboard-grid-cell{position:relative}.gameboard-editor .gameboard-container .gameboard .gameboard-grid .gameboard-grid-cell.ship{background-color:#3d5a80}.gameboard-editor .gameboard-container .gameboard .gameboard-grid .gameboard-grid-cell.drag-over{background-color:#98c1d9}.gameboard-editor .gameboard-container .gameboard .gameboard-grid .gameboard-grid-cell .ship-placeable{z-index:1;position:absolute;top:0;left:0}.gameboard-editor .ships-container{grid-column:2;height:100%;width:390px;border:3px dotted #98c1d9;padding:12px}.gameboard-editor .ships-container .ship-placeable{margin:12px}.gameboard-editor .ships-container::before{display:block;content:"Place your ships";text-align:center;color:#98c1d9;margin-bottom:42px}.gameboard-editor .ship-placeable{display:inline-block;height:48px;background-color:#3d5a80;transform-origin:24px 24px;cursor:move}.gameboard-editor .ship-placeable.moving.vertical,.gameboard-editor .ship-placeable.placed.vertical{transform:rotate(90deg)}.gameboard-editor .ship-placeable.moving{display:none;cursor:grabbing}.gameboard-editor .ship-placeable[ship-size="1"]{width:46px}.gameboard-editor .ship-placeable[ship-size="2"]{width:94px}.gameboard-editor .ship-placeable[ship-size="3"]{width:142px}.gameboard-editor .ship-placeable[ship-size="4"]{width:190px}',""]);const s=i},566:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(81),a=r.n(n),o=r(645),i=r.n(o)()(a());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Chivo+Mono:wght@400;700&display=swap);"]),i.push([e.id,".gameboard{width:100%;height:100%;display:grid;grid-template-columns:repeat(11, 1fr);grid-template-rows:repeat(11, 1fr)}.gameboard .gameboard-markup{font-size:1.5rem;width:100%;height:100%;color:#98c1d9;text-transform:uppercase;display:flex;justify-content:center;align-items:center}.gameboard .gameboard-grid{width:100%;height:100%;grid-column:2/12;grid-row:2/12;border:1px solid #3d5a80;display:grid;grid-template-columns:repeat(10, 1fr);grid-template-rows:repeat(10, 1fr);outline:4px solid rgba(0,0,0,0);transition:outline-color .3s ease-in-out}.gameboard .gameboard-grid .gameboard-grid-cell{border:1px solid #3d5a80;transition:background-color .2s ease-in}",""]);const s=i},61:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(81),a=r.n(n),o=r(645),i=r.n(o)()(a());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Chivo+Mono:wght@400;700&display=swap);"]),i.push([e.id,'*{margin:0;padding:0;box-sizing:border-box}html,button,input{font-family:"Chivo Mono",monospace;color:#293241}body{background-color:#fff}main{margin:0 auto;margin-top:32px;width:max-content;display:flex;flex-direction:column;gap:32px;justify-items:center}main .title{grid-area:title;font-size:5rem;font-family:"Black Ops One",cursive;text-transform:uppercase;text-align:center}main #setup-container{display:none}main #setup-container.active{display:block}main #game-container{display:none}main #game-container.active{display:block}',""]);const s=i},801:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(81),a=r.n(n),o=r(645),i=r.n(o)()(a());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Chivo+Mono:wght@400;700&display=swap);"]),i.push([e.id,".setup-display{display:grid;grid-template-columns:1fr;gap:32px;justify-items:center;font-size:2rem}.setup-display label{grid-row:1}.setup-display label input{border:none;border-bottom:2px solid #3d5a80;width:12ch;font-size:2rem;text-align:center}.setup-display label input:focus{outline:none}.setup-display .editor-container{min-width:max-content;min-height:max-content}.setup-display .buttons-container{grid-row:3;display:flex;gap:64px}.setup-display .buttons-container button{border:none;border-radius:12px;background-color:#98c1d9;width:256px;height:64px;font-size:1.5rem;transition:color .2s ease-in-out,background-color .3s ease-in-out}.setup-display .buttons-container button:hover{cursor:pointer;background-color:#3d5a80;color:#fff}",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);n&&i[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),r&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=r):c[2]=r),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var o={},i=[],s=0;s<e.length;s++){var l=e[s],d=n.base?l[0]+n.base:l[0],c=o[d]||0,u="".concat(d," ").concat(c);o[d]=c+1;var p=r(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var g=a(m,n);n.byIndex=s,t.splice(s,0,{identifier:u,updater:g,references:1})}i.push(u)}return i}function a(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,a){var o=n(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=r(o[i]);t[s].references--}for(var l=n(e,a),d=0;d<o.length;d++){var c=r(o[d]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}o=l}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,a&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={id:n,exports:{}};return e[n](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,(()=>{var e=r(379),t=r.n(e),n=r(795),a=r.n(n),o=r(569),i=r.n(o),s=r(565),l=r.n(s),d=r(216),c=r.n(d),u=r(589),p=r.n(u),m=r(61),g={};g.styleTagTransform=p(),g.setAttributes=l(),g.insert=i().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=c(),t()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;var f=r(801),h={};h.styleTagTransform=p(),h.setAttributes=l(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=c(),t()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;var b=r(566),v={};function y(e,t){const r=e,n=t;let a=!0;return{get playerOne(){return r},get playerTwo(){return n},get activePlayer(){return a?r:n},get isGameOver(){return r.gameboard.isGameOver||n.gameboard.isGameOver},takeTurn:function(e){if(this.isGameOver)throw Error("Cannot take turn after game is over");let t;try{t=!(a?n:r).gameboard.receiveAttack(e)}catch(e){t=!1}finally{t&&(a=!a)}},takeAITurn:function(){const e=a?n.gameboard:r.gameboard;this.takeTurn(function(e){let t=function(e){for(let t=0;t<10;++t)for(let r=0;r<10;++r)if(e.getCell([t,r]).isHit&&null!=e.getCell([t,r]).ship&&e.getCell([t,r]).ship.isAlive)return[t,r];return null}(e),r=t?function(e,t){const[r,n]=t;return!!(r>0&&e.getCell([r-1,n]).isHit&&null!=e.getCell([r-1,n]).ship)||(!!(r<9&&e.getCell([r+1,n]).isHit&&null!=e.getCell([r+1,n]).ship)||!(n>0&&e.getCell([r,n-1]).isHit&&null!=e.getCell([r,n-1]).ship)&&(!(n<9&&e.getCell([r,n+1]).isHit&&null!=e.getCell([r,n+1]).ship)&&null))}(e,t):null;return null==t?function(e){const t=[];for(let r=0;r<10;++r)for(let n=0;n<10;++n)e.getCell([r,n]).isHit||t.push([r,n]);return t[C(t.length)]}(e):function(e,t,r){const n=[],[a,o]=t;if(null===r&&(a>0&&!e.getCell([a-1,o]).isHit&&n.push([a-1,o]),a<9&&!e.getCell([a+1,o]).isHit&&n.push([a+1,o]),o>0&&!e.getCell([a,o-1]).isHit&&n.push([a,o-1]),o<9&&!e.getCell([a,o+1]).isHit&&n.push([a,o+1])),!0===r){for(let t=a-1;t>=0;--t){if(!e.getCell([t,o]).isHit){n.push([t,o]);break}if(null==e.getCell([t,o]).ship)break}for(let t=a+1;t<10;++t){if(!e.getCell([t,o]).isHit){n.push([t,o]);break}if(null==e.getCell([t,o]).ship)break}}if(!1===r){for(let t=o-1;t>=0;--t){if(!e.getCell([a,t]).isHit){n.push([a,t]);break}if(null==e.getCell([a,t]).ship)break}for(let t=o+1;t<10;++t){if(!e.getCell([a,t]).isHit){n.push([a,t]);break}if(null==e.getCell([a,t]).ship)break}}return n[C(n.length)]}(e,t,r)}(e))}}}function C(e){return Math.floor(Math.random()*e)}function w(e){if(!Number.isInteger(e)||e<=0)throw Error("Ivalid argument: ship size must be a positive number");let t=e,r=e;return{get size(){return t},get isAlive(){return r>0},hit(){r>0&&(r-=1)}}}v.styleTagTransform=p(),v.setAttributes=l(),v.insert=i().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=c(),t()(b.Z,v),b.Z&&b.Z.locals&&b.Z.locals;const x=9;function k(){const e=function(){const e=[];for(let t=0;t<=x;++t){e.push([]);for(let r=0;r<=x;++r)e[t].push({ship:null,isHit:!1})}return e}();let t=0;function r(t,r){for(let n=t-1;n<=t+1;++n)for(let t=r-1;t<=r+1;++t)n>=0&&n<=x&&t>=0&&t<=x&&(e[n][t].isHit=!0)}function n(t){const[r,n]=t;for(let t=r-1;t<=r+1;++t)for(let r=n-1;r<=n+1;++r)if(t>=0&&t<=x&&r>=0&&r<=x&&null!=e[t][r].ship)return!1;return!0}return{get isGameOver(){return 0==t},placeShip:function(r,a,o){O(r),function(e){if("horizontal"!=e&&"vertical"!=e)throw Error(`Invalid ship orientation: ${e}. Orientation must be string 'horizontal' or 'vertical'`)}(o);const i=function(e,t,r){const n=[e];if("horizontal"===r)for(let r=1;r<t;++r)n.push([e[0],e[1]+r]);if("vertical"===r)for(let r=1;r<t;++r)n.push([e[0]+r,e[1]]);if(n[n.length-1][0]>x||n[n.length-1][1]>x)throw Error(`Ship with coordinates ${e}, size ${t} and ${r} orientation does not fit on the gameboard`);return n}(r,a,o);!function(e){for(let t of e)if(!n(t))throw Error(`Cannot place ship cell at coordinates ${t}`)}(i);const s=new w(a);for(let[t,r]of i)e[t][r].ship=s;t++},getCell:function(t){return O(t),{get ship(){return e[t[0]][t[1]].ship},get isHit(){return e[t[0]][t[1]].isHit}}},receiveAttack:function(n){O(n);let[a,o]=n;if(e[a][o].isHit)throw Error(`Coordinates ${n} have already been attacked`);if(e[a][o].isHit=!0,e[a][o].ship){const n=e[a][o].ship;return n.hit(),n.isAlive||function(n){t--;for(let t=0;t<=x;++t)for(let a=0;a<=x;++a)e[t][a].ship===n&&r(t,a)}(n),!0}return!1}}}function O(e){if(!(e&&e instanceof Array&&2==e.length&&Number.isInteger(e[0])&&Number.isInteger(e[1])))throw Error("Grid coordinates must be passed as array containing two integer elements");if(e[0]<0||e[1]<0||e[0]>x||e[1]>x)throw Error(`Invalid grid coordinates: ${e}. Coordinates must be non-negative integer not greater than ${x}`)}const E=32;function L(e){!function(e){if(!e||"string"!=typeof e||e.length>E)throw Error(`Inavlid player name: ${e}. Player name must be string not longer than ${E} charachters`)}(e);const t=e,r=new k;return{get name(){return t},get gameboard(){return r}}}var z=r(5),M={};function A(e){const t=P(),r=T(),n=t.childNodes;return r.appendChild(t),{get DOMObject(){return r},setupGridOnclickCallback:function(e){for(let t=0;t<10;++t)for(let r=0;r<10;++r)n[10*t+r].addEventListener("click",(()=>e(t,r)))},revealGrid:function(){for(let t=0;t<10;++t)for(let r=0;r<10;++r)null!=e.getCell([t,r]).ship&&n[10*t+r].classList.add("revealed")},updateGrid:function(){for(let t=0;t<10;++t)for(let r=0;r<10;++r){const a=n[10*t+r],o=e.getCell([t,r]);o.isHit&&(a.classList.add("hit"),null!=o.ship&&(a.classList.add("damaged"),o.ship.isAlive||a.classList.add("destroyed")))}},setActive:function(e){1==e?t.classList.add("active"):t.classList.remove("active")}}}function T(){const e=document.createElement("div");e.classList.add("gameboard");const t="a".charCodeAt(0);for(let r=0;r<10;++r){const n=document.createElement("span");n.textContent=String.fromCharCode(t+r),n.classList.add("gameboard-markup"),n.style.gridRow=1,n.style.gridColumn=`${r+2}`,e.appendChild(n)}for(let t=0;t<10;++t){const r=document.createElement("span");r.textContent=`${t+1}`,r.classList.add("gameboard-markup"),r.style.gridColumn=1,r.style.gridRow=`${t+2}`,e.appendChild(r)}return e}function P(){const e=document.createElement("div");e.classList.add("gameboard-grid");for(let t=0;t<10;++t)for(let r=0;r<10;++r){const n=document.createElement("div");n.classList.add("gameboard-grid-cell"),n.style.gridRow=t+1,n.style.gridColumn=r+1,e.appendChild(n)}return e}M.styleTagTransform=p(),M.setAttributes=l(),M.insert=i().bind(null,"head"),M.domAPI=a(),M.insertStyleElement=c(),t()(z.Z,M),z.Z&&z.Z.locals&&z.Z.locals;const I=[4,3,3,2,2,2,1,1,1,1];function j(){document.body.setAttribute("draggable","false");const e=document.createElement("div");e.classList.add("gameboard-editor");const t=document.createElement("div");t.classList.add("gameboard-container"),e.appendChild(t);const r=P(),n=T();n.appendChild(r),t.appendChild(n);const a=r.childNodes,o=document.createElement("div");o.classList.add("ships-container"),e.appendChild(o),o.addEventListener("dragover",(e=>{e.preventDefault()})),o.addEventListener("drop",(e=>{const t=i.get(e.dataTransfer.getData("text/plain"));t.deleteCoords(),t.drop(),o.appendChild(t.DOMObject),t.removeOnCLickCallback(),l()}));const i=new Map;for(let e of I){const t=new D(e);i.set(t.id,t),o.appendChild(t.DOMObject)}function s(e,t){for(let r=0;r<10;++r)for(let n=0;n<10;++n)a[10*r+n].addEventListener(e,(e=>t(e,r,n)))}function l(){for(let e of a)e.classList.remove("drag-over")}function d(e,t,r){if(!c(e,t,r))throw Error(`Cannot place ${r.isVertical?"vertical":"horizontal"} ship of size ${r.size} at coordinates [${e}, ${t}]`);r.setCoords(e,t),r.setOnClickCallback((()=>{r.rotate(),c(e,t,r)||r.rotate()})),a[10*e+t].appendChild(r.DOMObject)}function c(e,t,r){if(e<0||t<0||e>9||t>9)return!1;if(r.isVertical){if(e+r.size-1>9)return!1}else if(t+r.size-1>9)return!1;const n=new Z([e,t],r.size,r.isVertical).cells,a=[];for(let[e,t]of i)t.isPlaced&&t.id!=r.id&&a.push(...new Z(t.coords,t.size,t.isVertical).cells);for(let[e,t]of a)for(let[r,a]of n)if(Math.abs(r-e)<2&&Math.abs(a-t)<2)return!1;return!0}function u(){for(let[e,t]of i)if(!t.isPlaced)return!1;return!0}return s("dragover",(e=>{e.preventDefault()})),s("dragenter",((e,t,r)=>{e.preventDefault(),function(e,t,r){l();const n=new Z([e,t],r.size,r.isVertical).cells;if(1==c(e,t,r))for(let[e,t]of n)a[10*e+t].classList.add("drag-over")}(t,r,i.get(e.dataTransfer.getData("text/plain")))})),s("drop",((e,t,r)=>{l();try{a[10*t+r].classList.remove("drag-over");const n=i.get(e.dataTransfer.getData("text/plain"));n.drop(),d(t,r,n)}catch(e){}})),{get DOMObject(){return e},setGameboard:function(e){if(!u)throw Error("Cannot set gameboard until all ships are placed");for(let[t,r]of i)e.placeShip(r.coords,r.size,r.isVertical?"vertical":"horizontal")},placeRandom:function(){for(let[e,t]of i)for(;;){G(2)%2&&t.rotate();const e=G(10),r=G(10);if(c(e,r,t)){d(e,r,t);break}}},isReady:u}}function G(e){return Math.floor(Math.random()*e)}function Z(e,t,r){const n=e,a=r,o=t;return{get size(){return o},get coords(){return n},get isVertical(){return a},get coords(){return n},get cells(){const e=[],[t,r]=n;if(a)for(let n=0;n<o;++n)e.push([t+n,r]);else for(let n=0;n<o;++n)e.push([t,r+n]);return e}}}const H=function(){let e=0;return function(){return"id_"+e++}}();function D(e){const t=H(),r=document.createElement("div");r.classList.add("ship-placeable"),r.setAttribute("ship-size",e),r.setAttribute("draggable","true");let n=!1,a=null;function o(){r.classList.remove("moving")}r.addEventListener("dragstart",(e=>{e.dataTransfer.setData("text/plain",t),r.classList.add("moving")})),r.addEventListener("dragend",(e=>{o()}));let i=null;function s(){r.removeEventListener("click",i),i=null}return{get id(){return t},get DOMObject(){return r},get size(){return e},get coords(){return a},get isVertical(){return n},get isPlaced(){return null!=a},setCoords:function(e,t){a=[e,t],r.classList.add("placed")},deleteCoords:function(){a=null,r.classList.remove("placed")},drop:o,rotate:function(){n=!n,r.classList.toggle("vertical")},setOnClickCallback:function(e){s(),i=e,r.addEventListener("click",i)},removeOnCLickCallback:s}}function B(){const e=document.createElement("div");e.classList.add("setup-display");const t=document.createElement("div");t.classList.add("editor-container"),e.appendChild(t);const r=new j;t.appendChild(r.DOMObject);const n=document.createElement("div");n.classList.add("buttons-container"),e.appendChild(n);const a=function(){const e=document.createElement("input");return e.id="name-input",e.setAttribute("autocomplete","off"),e.setAttribute("maxlength","24"),e}(),o=function(){const e=document.createElement("label");return e.textContent="Player name: ",e}();return o.appendChild(a),e.appendChild(o),{get DOMObject(){return e},get editor(){return r},get nameInput(){return a},addButton:function(e){n.appendChild(e)},remove:function(){e.remove()}}}function $(e,t){const r=document.createElement("button");return r.textContent=e,r.addEventListener("click",t),r}var S=r(416),N={};function R(){const e=document.createElement("div");e.classList.add("game");const t=V();e.appendChild(t);const r=V();e.appendChild(r);const n=_();t.appendChild(n);const a=_();r.appendChild(a);const o=F();t.appendChild(o);const i=F();return r.appendChild(i),{get DOMObject(){return e},get playerOneGameboardContainer(){return o},get playerTwoGameboardContainer(){return i},setPlayerOneName:function(e){n.textContent=e},setPlayerTwoName:function(e){a.textContent=e},showWinner:function(t){const r=document.createElement("h2");r.classList.add("winner-label"),r.textContent=`${t} wins!`,e.appendChild(r)},addButton:function(t){e.appendChild(t)},remove:function(){e.remove()}}}function V(){const e=document.createElement("div");return e.classList.add("player-side"),e}function _(){const e=document.createElement("h3");return e.classList.add("player-name"),e}function F(){const e=document.createElement("div");return e.classList.add("gameboard-container"),e}N.styleTagTransform=p(),N.setAttributes=l(),N.insert=i().bind(null,"head"),N.domAPI=a(),N.insertStyleElement=c(),t()(S.Z,N),S.Z&&S.Z.locals&&S.Z.locals;const U=document.getElementById("setup-container"),W=document.getElementById("game-container");!function e(){U.classList.add("active"),function(e,t){let r,n=null,a=null;function o(){const e=new y(n,a);t(e,r)}!function(){const t="Player 1",i=new B;e.appendChild(i.DOMObject),i.nameInput.setAttribute("placeholder",t);const s=$("Place random",(()=>{i.editor.placeRandom()}));i.addButton(s);const l=$("Next player",(()=>{if(!i.editor.isReady())return void alert("Please, place your ships on board before the start");const s=i.nameInput.value?i.nameInput.value:t;n=new L(s),i.editor.setGameboard(n.gameboard),i.remove(),function(){const t="Player 2",n=new B;e.appendChild(n.DOMObject),n.nameInput.setAttribute("placeholder",t);const i=$("Place random",(()=>{n.editor.placeRandom()}));n.addButton(i);const s=$("Play",(()=>{if(!n.editor.isReady())return void alert("Please, place your ships on board before the start");const e=n.nameInput.value?n.nameInput.value:t;a=new L(e),n.editor.setGameboard(a.gameboard),n.remove(),r=!1,o()}));n.addButton(s)}()}));i.addButton(l);const d=$("Play with AI",(()=>{if(!i.editor.isReady())return void alert("Please, place your ships on board before the start");const e=i.nameInput.value?i.nameInput.value:t;n=new L(e),i.editor.setGameboard(n.gameboard),a=new L("AI"),function(e){function t(e){return Math.floor(Math.random()*e)}const r=[4,3,3,2,2,2,1,1,1,1];for(;r.length>0;)try{e.placeShip([t(10),t(10)],r[0],t(2)?"horizontal":"vertical"),r.shift()}catch(e){}}(a.gameboard),i.remove(),r=!0,o()}));i.addButton(d)}()}(U,((t,r)=>{U.classList.remove("active"),W.classList.add("active"),function(e,t,r,n){const a=new R;r.appendChild(a.DOMObject),a.setPlayerOneName(e.playerOne.name),a.setPlayerTwoName(e.playerTwo.name);const o=new A(e.playerOne.gameboard),i=new A(e.playerTwo.gameboard);function s(){o.updateGrid(),i.updateGrid(),e.isGameOver?function(){o.setActive(!1),i.setActive(!1),o.revealGrid(),i.revealGrid(),a.showWinner(e.activePlayer.name);const t=document.createElement("button");t.classList.add("new-game-btn"),t.textContent="New game",t.addEventListener("click",(()=>{a.remove(),n()})),a.addButton(t)}():(l(),t&&e.activePlayer===e.playerTwo&&async function(){await new Promise((t=>setTimeout((()=>{e.takeAITurn(),t()}),400))),s()}())}function l(){o.setActive(e.activePlayer!==e.playerOne),i.setActive(e.activePlayer===e.playerOne)}a.playerOneGameboardContainer.appendChild(o.DOMObject),a.playerTwoGameboardContainer.appendChild(i.DOMObject),i.setupGridOnclickCallback((function(t,r){if(e.activePlayer===e.playerOne)try{e.takeTurn([t,r]),s()}catch(e){console.error(e)}})),t?o.revealGrid():o.setupGridOnclickCallback((function(t,r){if(e.activePlayer===e.playerTwo)try{e.takeTurn([t,r]),s()}catch(e){console.error(e)}})),l()}(t,r,W,(()=>{W.classList.remove("active"),e()}))}))}()})()})();
!function(e){function t(t){for(var n,r,o=t[0],s=t[1],a=0,l=[];a<o.length;a++)r=o[a],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&l.push(i[r][0]),i[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(c&&c(t);l.length;)l.shift()()}var n={},i={0:0};function r(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,r){n=i[e]=[t,r]}));t.push(n[2]=o);var s,a=document.createElement("script");a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.src=function(e){return r.p+"VAADIN/build/vaadin-"+({}[e]||e)+"-"+{1:"c71422e23f8e09071a21",2:"a75f9b4b63eff3762198",3:"3c5f47892c025a464241",4:"004a579b55987c182205",5:"bbfe12d7e36b04a2bb95",6:"9854d84ba85e39631920",7:"2ffabf2b287b04b28e4c"}[e]+".cache.js"}(e);var c=new Error;s=function(t){a.onerror=a.onload=null,clearTimeout(l);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,n[1](c)}i[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:a})}),12e4);a.onerror=a.onload=s,document.head.appendChild(a)}return Promise.all(t)},r.m=e,r.c=n,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r.oe=function(e){throw console.error(e),e};var o=window.webpackJsonp=window.webpackJsonp||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var a=0;a<o.length;a++)t(o[a]);var c=s;r(r.s=13)}([function(e,t,n){"use strict";n.d(t,"f",(function(){return i})),n.d(t,"g",(function(){return r})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"e",(function(){return h}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const i=`{{lit-${String(Math.random()).slice(2)}}}`,r=`\x3c!--${i}--\x3e`,o=new RegExp(`${i}|${r}`),s="$lit$";class a{constructor(e,t){this.parts=[],this.element=t;const n=[],r=[],a=document.createTreeWalker(t.content,133,null,!1);let l=0,u=-1,p=0;const{strings:f,values:{length:m}}=e;for(;p<m;){const e=a.nextNode();if(null!==e){if(u++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let i=0;for(let e=0;e<n;e++)c(t[e].name,s)&&i++;for(;i-- >0;){const t=f[p],n=h.exec(t)[2],i=n.toLowerCase()+s,r=e.getAttribute(i);e.removeAttribute(i);const a=r.split(o);this.parts.push({type:"attribute",index:u,name:n,strings:a}),p+=a.length-1}}"TEMPLATE"===e.tagName&&(r.push(e),a.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(i)>=0){const i=e.parentNode,r=t.split(o),a=r.length-1;for(let t=0;t<a;t++){let n,o=r[t];if(""===o)n=d();else{const e=h.exec(o);null!==e&&c(e[2],s)&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-s.length)+e[3]),n=document.createTextNode(o)}i.insertBefore(n,e),this.parts.push({type:"node",index:++u})}""===r[a]?(i.insertBefore(d(),e),n.push(e)):e.data=r[a],p+=a}}else if(8===e.nodeType)if(e.data===i){const t=e.parentNode;null!==e.previousSibling&&u!==l||(u++,t.insertBefore(d(),e)),l=u,this.parts.push({type:"node",index:u}),null===e.nextSibling?e.data="":(n.push(e),u--),p++}else{let t=-1;for(;-1!==(t=e.data.indexOf(i,t+1));)this.parts.push({type:"node",index:-1}),p++}}else a.currentNode=r.pop()}for(const e of n)e.parentNode.removeChild(e)}}const c=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},l=e=>-1!==e.index,d=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/},function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return u})),n.d(t,"e",(function(){return p})),n.d(t,"c",(function(){return f})),n.d(t,"f",(function(){return m})),n.d(t,"g",(function(){return g})),n.d(t,"d",(function(){return v}));var i=n(9),r=n(4),o=n(3),s=n(11),a=n(10),c=n(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const l=e=>null===e||!("object"==typeof e||"function"==typeof e),d=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class h{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new u(this)}_getValue(){const e=this.strings,t=e.length-1,n=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=n[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!d(e))return e}let i="";for(let r=0;r<t;r++){i+=e[r];const t=n[r];if(void 0!==t){const e=t.value;if(l(e)||!d(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class u{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===o.a||l(e)&&e===this.value||(this.value=e,Object(i.b)(e)||(this.committer.dirty=!0))}commit(){for(;Object(i.b)(this.value);){const e=this.value;this.value=o.a,e(this)}this.value!==o.a&&this.committer.commit()}}class p{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(Object(c.c)()),this.endNode=e.appendChild(Object(c.c)())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=Object(c.c)()),e.__insert(this.endNode=Object(c.c)())}insertAfterPart(e){e.__insert(this.startNode=Object(c.c)()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;Object(i.b)(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=o.a,e(this)}const e=this.__pendingValue;e!==o.a&&(l(e)?e!==this.value&&this.__commitText(e):e instanceof a.b?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):d(e)?this.__commitIterable(e):e===o.b?(this.value=o.b,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof s.a&&this.value.template===t)this.value.update(e.values);else{const n=new s.a(t,e.processor,this.options),i=n._clone();n.update(e.values),this.__commitNode(i),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,i=0;for(const r of e)n=t[i],void 0===n&&(n=new p(this.options),t.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(t[i-1])),n.setValue(r),n.commit(),i++;i<t.length&&(t.length=i,this.clear(n&&n.endNode))}clear(e=this.startNode){Object(r.b)(this.startNode.parentNode,e.nextSibling,this.endNode)}}class f{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;Object(i.b)(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=o.a,e(this)}if(this.__pendingValue===o.a)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=o.a}}class m extends h{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new g(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class g extends u{}let _=!1;(()=>{try{const e={get capture(){return _=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class v{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;Object(i.b)(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=o.a,e(this)}if(this.__pendingValue===o.a)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=y(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=o.a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const y=e=>e&&(_?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)},function(e,t,n){"use strict";n.d(t,"e",(function(){return C})),n.d(t,"d",(function(){return h.d})),n.d(t,"a",(function(){return O})),n.d(t,"c",(function(){return T})),n.d(t,"b",(function(){return P}));var i=n(4),r=n(0);function o(e,t){const{element:{content:n},parts:i}=e,r=document.createTreeWalker(n,133,null,!1);let o=a(i),s=i[o],c=-1,l=0;const d=[];let h=null;for(;r.nextNode();){c++;const e=r.currentNode;for(e.previousSibling===h&&(h=null),t.has(e)&&(d.push(e),null===h&&(h=e)),null!==h&&l++;void 0!==s&&s.index===c;)s.index=null!==h?-1:s.index-l,o=a(i,o),s=i[o]}d.forEach(e=>e.parentNode.removeChild(e))}const s=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,133,null,!1);for(;n.nextNode();)t++;return t},a=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(Object(r.d)(t))return n}return-1};var c=n(8),l=n(7),d=n(11),h=n(5);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const u=(e,t)=>`${e}--${t}`;let p=!0;void 0===window.ShadyCSS?p=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),p=!1);const f=e=>t=>{const n=u(t.type,e);let i=l.a.get(n);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},l.a.set(n,i));let o=i.stringsArray.get(t.strings);if(void 0!==o)return o;const s=t.strings.join(r.f);if(o=i.keyString.get(s),void 0===o){const n=t.getTemplateElement();p&&window.ShadyCSS.prepareTemplateDom(n,e),o=new r.a(t,n),i.keyString.set(s,o)}return i.stringsArray.set(t.strings,o),o},m=["html","svg"],g=new Set,_=(e,t,n)=>{g.add(e);const i=n?n.element:document.createElement("template"),r=t.querySelectorAll("style"),{length:c}=r;if(0===c)return void window.ShadyCSS.prepareTemplateStyles(i,e);const d=document.createElement("style");for(let e=0;e<c;e++){const t=r[e];t.parentNode.removeChild(t),d.textContent+=t.textContent}(e=>{m.forEach(t=>{const n=l.a.get(u(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),o(e,n)})})})(e);const h=i.content;n?function(e,t,n=null){const{element:{content:i},parts:r}=e;if(null==n)return void i.appendChild(t);const o=document.createTreeWalker(i,133,null,!1);let c=a(r),l=0,d=-1;for(;o.nextNode();){d++;for(o.currentNode===n&&(l=s(t),n.parentNode.insertBefore(t,n));-1!==c&&r[c].index===d;){if(l>0){for(;-1!==c;)r[c].index+=l,c=a(r,c);return}c=a(r,c)}}}(n,d,h.firstChild):h.insertBefore(d,h.firstChild),window.ShadyCSS.prepareTemplateStyles(i,e);const p=h.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==p)t.insertBefore(p.cloneNode(!0),t.firstChild);else if(n){h.insertBefore(d,h.firstChild);const e=new Set;e.add(d),o(n,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const v={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},y=(e,t)=>t!==e&&(t==t||e==e),w={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y};class b extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const i=this._attributeNameForProperty(n,t);void 0!==i&&(this._attributeToPropertyMap.set(i,n),e.push(i))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=w){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,n,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(n){const i=this[e];this[t]=n,this._requestUpdate(e,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||w}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=y){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,i=t.converter||v,r="function"==typeof i?i:i.fromAttribute;return r?r(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,i=t.converter;return(i&&i.toAttribute||v.toAttribute)(e,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=w){const i=this.constructor,r=i._attributeNameForProperty(e,n);if(void 0!==r){const e=i._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(r):this.setAttribute(r,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const n=this.constructor,i=n._attributeToPropertyMap.get(e);if(void 0!==i){const e=n.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=n._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let n=!0;if(void 0!==e){const i=this.constructor,r=i.getPropertyOptions(e);i._valueHasChanged(this[e],t,r.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,r))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}b.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const S=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(n){n.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}};function C(e){return(t,n)=>void 0!==n?((e,t,n)=>{t.constructor.createProperty(n,e)})(e,t,n):S(e,t)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const x="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,E=Symbol();class O{constructor(e,t){if(t!==E)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(x?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const T=(e,...t)=>{const n=t.reduce((t,n,i)=>t+(e=>{if(e instanceof O)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[i+1],e[0]);return new O(n,E)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const N={};class P extends b{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const t=(e,n)=>e.reduceRight((e,n)=>Array.isArray(n)?t(n,e):(e.add(n),e),n),n=t(e,new Set),i=[];n.forEach(e=>i.unshift(e)),this._styles=i}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?x?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==N&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return N}}P.finalized=!0,P.render=(e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const r=n.scopeName,o=c.a.has(t),s=p&&11===t.nodeType&&!!t.host,a=s&&!g.has(r),l=a?document.createDocumentFragment():t;if(Object(c.b)(e,l,Object.assign({templateFactory:f(r)},n)),a){const e=c.a.get(l);c.a.delete(l);const n=e.value instanceof d.a?e.value.template:void 0;_(r,l,n),Object(i.b)(t,t.firstChild),t.appendChild(l),c.a.set(t,e)}!o&&s&&window.ShadyCSS.styleElement(t.host)}},function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}));
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const i={},r={}},function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return o}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const i="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,r=(e,t,n=null,i=null)=>{for(;t!==n;){const n=t.nextSibling;e.insertBefore(t,i),t=n}},o=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}}},function(e,t,n){"use strict";n.d(t,"c",(function(){return s.a})),n.d(t,"a",(function(){return i.b})),n.d(t,"b",(function(){return i.g})),n.d(t,"d",(function(){return a}));var i=n(1);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const r=new class{handleAttributeExpressions(e,t,n,r){const o=t[0];if("."===o){return new i.f(e,t.slice(1),n).parts}if("@"===o)return[new i.d(e,t.slice(1),r.eventContext)];if("?"===o)return[new i.c(e,t.slice(1),n)];return new i.a(e,t,n).parts}handleTextExpression(e){return new i.e(e)}};var o=n(10),s=n(9);n(4),n(3),n(8),n(7),n(11),n(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const a=(e,...t)=>new o.b(e,t,"html",r)},function(e,t,n){"use strict";var i,r;n.d(t,"a",(function(){return r})),function(e){e.CONNECTED="connected",e.LOADING="loading",e.RECONNECTING="reconnecting",e.CONNECTION_LOST="connection-lost"}(r||(r={}));class o{constructor(e){this.stateChangeListeners=new Set,this.loadingCount=0,this.connectionState=e,this.serviceWorkerMessageListener=this.serviceWorkerMessageListener.bind(this),navigator.serviceWorker&&(navigator.serviceWorker.addEventListener("message",this.serviceWorkerMessageListener),navigator.serviceWorker.ready.then(e=>{var t;null===(t=null==e?void 0:e.active)||void 0===t||t.postMessage({method:"Vaadin.ServiceWorker.isConnectionLost",id:"Vaadin.ServiceWorker.isConnectionLost"})}))}addStateChangeListener(e){this.stateChangeListeners.add(e)}removeStateChangeListener(e){this.stateChangeListeners.delete(e)}loadingStarted(){this.state=r.LOADING,this.loadingCount+=1}loadingFinished(){this.loadingCount>0&&(this.loadingCount-=1,0===this.loadingCount&&(this.state=r.CONNECTED))}get state(){return this.connectionState}set state(e){if(e!==this.connectionState){const t=this.connectionState;this.connectionState=e,this.loadingCount=0;for(const e of this.stateChangeListeners)e(t,this.connectionState)}}get online(){return this.connectionState===r.CONNECTED||this.connectionState===r.LOADING}get offline(){return!this.online}serviceWorkerMessageListener(e){"object"==typeof e.data&&"Vaadin.ServiceWorker.isConnectionLost"===e.data.id&&(!0===e.data.result&&(this.state=r.CONNECTION_LOST),navigator.serviceWorker.removeEventListener("message",this.serviceWorkerMessageListener))}}const s=window;(null===(i=s.Vaadin)||void 0===i?void 0:i.connectionState)||(s.Vaadin=s.Vaadin||{},s.Vaadin.connectionState=new o(navigator.onLine?r.CONNECTED:r.CONNECTION_LOST))},function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var i=n(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function r(e){let t=o.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},o.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(i.f);return n=t.keyString.get(r),void 0===n&&(n=new i.a(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const o=new Map},function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return a}));var i=n(4),r=n(1),o=n(7);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const s=new WeakMap,a=(e,t,n)=>{let a=s.get(t);void 0===a&&(Object(i.b)(t,t.firstChild),s.set(t,a=new r.e(Object.assign({templateFactory:o.b},n))),a.appendInto(t)),a.setValue(e),a.commit()}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const i=new WeakMap,r=e=>(...t)=>{const n=e(...t);return i.set(n,!0),n},o=e=>"function"==typeof e&&i.has(e)},function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var i=n(4),r=n(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const o=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),s=` ${r.f} `;class a{constructor(e,t,n,i){this.strings=e,this.values=t,this.type=n,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let i=0;i<e;i++){const e=this.strings[i],o=e.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===e.indexOf("--\x3e",o+1);const a=r.e.exec(e);t+=null===a?e+(n?s:r.g):e.substr(0,a.index)+a[1]+a[2]+r.b+a[3]+r.f}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==o&&(t=o.createHTML(t)),e.innerHTML=t,e}}class c extends a{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,n=t.firstChild;return t.removeChild(n),Object(i.c)(t,n.firstChild),e}}},function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(4),r=n(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class o{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=i.a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,o=document.createTreeWalker(e,133,null,!1);let s,a=0,c=0,l=o.nextNode();for(;a<n.length;)if(s=n[a],Object(r.d)(s)){for(;c<s.index;)c++,"TEMPLATE"===l.nodeName&&(t.push(l),o.currentNode=l.content),null===(l=o.nextNode())&&(o.currentNode=t.pop(),l=o.nextNode());if("node"===s.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,s.name,s.strings,this.options));a++}else this.__parts.push(void 0),a++;return i.a&&(document.adoptNode(e),customElements.upgrade(e)),e}}},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n(5);
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class r{constructor(e){this.classes=new Set,this.changed=!1,this.element=e;const t=(e.getAttribute("class")||"").split(/\s+/);for(const e of t)this.classes.add(e)}add(e){this.classes.add(e),this.changed=!0}remove(e){this.classes.delete(e),this.changed=!0}commit(){if(this.changed){let e="";this.classes.forEach(t=>e+=t+" "),this.element.setAttribute("class",e)}}}const o=new WeakMap,s=Object(i.c)(e=>t=>{if(!(t instanceof i.a)||t instanceof i.b||"class"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:n}=t,{element:s}=n;let a=o.get(t);void 0===a&&(s.setAttribute("class",n.strings.join(" ")),o.set(t,a=new Set));const c=s.classList||new r(s);a.forEach(t=>{t in e||(c.remove(t),a.delete(t))});for(const t in e){const n=e[t];n!=a.has(t)&&(n?(c.add(t),a.add(t)):(c.remove(t),a.delete(t)))}"function"==typeof c.commit&&c.commit()})},function(e,t,n){"use strict";function i(e){return e=e||[],Array.isArray(e)?e:[e]}function r(e){return"[Vaadin.Router] "+e}n.r(t);const o=["module","nomodule"];function s(e){if(!e.match(/.+\.[m]?js$/))throw new Error(r(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function a(e){if(!e||!p(e.path))throw new Error(r('Expected route config to be an object with a "path" string property, or an array of such objects'));const t=e.bundle,n=["component","redirect","bundle"];if(!(u(e.action)||Array.isArray(e.children)||u(e.children)||h(t)||n.some(t=>p(e[t]))))throw new Error(r(`Expected route config "${e.path}" to include either "${n.join('", "')}" or "action" function but none found.`));if(t)if(p(t))s(t);else{if(!o.some(e=>e in t))throw new Error(r('Expected route bundle to include either "nomodule" or "module" keys, or both'));o.forEach(e=>e in t&&s(t[e]))}e.redirect&&["bundle","component"].forEach(t=>{t in e&&console.warn(r(`Route config "${e.path}" has both "redirect" and "${t}" properties, and "redirect" will always override the latter. Did you mean to only use "${t}"?`))})}function c(e){i(e).forEach(e=>a(e))}function l(e,t){let n=document.head.querySelector('script[src="'+e+'"][async]');return n||(n=document.createElement("script"),n.setAttribute("src",e),"module"===t?n.setAttribute("type","module"):"nomodule"===t&&n.setAttribute("nomodule",""),n.async=!0),new Promise((e,t)=>{n.onreadystatechange=n.onload=t=>{n.__dynamicImportLoaded=!0,e(t)},n.onerror=e=>{n.parentNode&&n.parentNode.removeChild(n),t(e)},null===n.parentNode?document.head.appendChild(n):n.__dynamicImportLoaded&&e()})}function d(e,t){return!window.dispatchEvent(new CustomEvent("vaadin-router-"+e,{cancelable:"go"===e,detail:t}))}function h(e){return"object"==typeof e&&!!e}function u(e){return"function"==typeof e}function p(e){return"string"==typeof e}function f(e){const t=new Error(r(`Page not found (${e.pathname})`));return t.context=e,t.code=404,t}const m=new class{};function g(e){if(e.defaultPrevented)return;if(0!==e.button)return;if(e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const n=e.composedPath?e.composedPath():e.path||[];for(let e=0;e<n.length;e++){const i=n[e];if(i.nodeName&&"a"===i.nodeName.toLowerCase()){t=i;break}}for(;t&&"a"!==t.nodeName.toLowerCase();)t=t.parentNode;if(!t||"a"!==t.nodeName.toLowerCase())return;if(t.target&&"_self"!==t.target.toLowerCase())return;if(t.hasAttribute("download"))return;if(t.hasAttribute("router-ignore"))return;if(t.pathname===window.location.pathname&&""!==t.hash)return;if((t.origin||function(e){const t=e.port,n=e.protocol;return`${n}//${"http:"===n&&"80"===t||"https:"===n&&"443"===t?e.hostname:e.host}`}(t))!==window.location.origin)return;const{pathname:i,search:r,hash:o}=t;d("go",{pathname:i,search:r,hash:o})&&e.preventDefault()}const _={activate(){window.document.addEventListener("click",g)},inactivate(){window.document.removeEventListener("click",g)}};function v(e){if("vaadin-router-ignore"===e.state)return;const{pathname:t,search:n,hash:i}=window.location;d("go",{pathname:t,search:n,hash:i})}/Trident/.test(navigator.userAgent)&&!u(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var n=document.createEvent("Event");return n.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),n.state=t.state||null,n},window.PopStateEvent.prototype=window.Event.prototype);const y={activate(){window.addEventListener("popstate",v)},inactivate(){window.removeEventListener("popstate",v)}};var w=k,b=O,S=function(e,t){return T(O(e,t))},C=T,x=R,E=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function O(e,t){for(var n,i=[],r=0,o=0,s="",a=t&&t.delimiter||"/",c=t&&t.delimiters||"./",l=!1;null!==(n=E.exec(e));){var d=n[0],h=n[1],u=n.index;if(s+=e.slice(o,u),o=u+d.length,h)s+=h[1],l=!0;else{var p="",f=e[o],m=n[2],g=n[3],_=n[4],v=n[5];if(!l&&s.length){var y=s.length-1;c.indexOf(s[y])>-1&&(p=s[y],s=s.slice(0,y))}s&&(i.push(s),s="",l=!1);var w=""!==p&&void 0!==f&&f!==p,b="+"===v||"*"===v,S="?"===v||"*"===v,C=p||a,x=g||_;i.push({name:m||r++,prefix:p,delimiter:C,optional:S,repeat:b,partial:w,pattern:x?P(x):"[^"+N(C)+"]+?"})}}return(s||o<e.length)&&i.push(s+e.substr(o)),i}function T(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,i){for(var r="",o=i&&i.encode||encodeURIComponent,s=0;s<e.length;s++){var a=e[s];if("string"!=typeof a){var c,l=n?n[a.name]:void 0;if(Array.isArray(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(0===l.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(c=o(l[d],a),!t[s].test(c))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');r+=(0===d?a.prefix:a.delimiter)+c}}else if("string"!=typeof l&&"number"!=typeof l&&"boolean"!=typeof l){if(!a.optional)throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"));a.partial&&(r+=a.prefix)}else{if(c=o(String(l),a),!t[s].test(c))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+c+'"');r+=a.prefix+c}}else r+=a}return r}}function N(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function P(e){return e.replace(/([=!:$/()])/g,"\\$1")}function A(e){return e&&e.sensitive?"":"i"}function R(e,t,n){for(var i=(n=n||{}).strict,r=!1!==n.start,o=!1!==n.end,s=N(n.delimiter||"/"),a=n.delimiters||"./",c=[].concat(n.endsWith||[]).map(N).concat("$").join("|"),l=r?"^":"",d=0===e.length,h=0;h<e.length;h++){var u=e[h];if("string"==typeof u)l+=N(u),d=h===e.length-1&&a.indexOf(u[u.length-1])>-1;else{var p=u.repeat?"(?:"+u.pattern+")(?:"+N(u.delimiter)+"(?:"+u.pattern+"))*":u.pattern;t&&t.push(u),u.optional?u.partial?l+=N(u.prefix)+"("+p+")?":l+="(?:"+N(u.prefix)+"("+p+"))?":l+=N(u.prefix)+"("+p+")"}}return o?(i||(l+="(?:"+s+")?"),l+="$"===c?"$":"(?="+c+")"):(i||(l+="(?:"+s+"(?="+c+"))?"),d||(l+="(?="+s+"|"+c+")")),new RegExp(l,A(n))}function k(e,t,n){return e instanceof RegExp?function(e,t){if(!t)return e;var n=e.source.match(/\((?!\?)/g);if(n)for(var i=0;i<n.length;i++)t.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}(e,t):Array.isArray(e)?function(e,t,n){for(var i=[],r=0;r<e.length;r++)i.push(k(e[r],t,n).source);return new RegExp("(?:"+i.join("|")+")",A(n))}(e,t,n):function(e,t,n){return R(O(e,n),t,n)}(e,t,n)}w.parse=b,w.compile=S,w.tokensToFunction=C,w.tokensToRegExp=x;const{hasOwnProperty:L}=Object.prototype,j=new Map;function V(e){try{return decodeURIComponent(e)}catch(t){return e}}function I(e,t,n,i,r){let o,s,a=0,c=e.path||"";return"/"===c.charAt(0)&&(n&&(c=c.substr(1)),n=!0),{next(l){if(e===l)return{done:!0};const d=e.__children=e.__children||e.children;if(!o&&(o=function(e,t,n,i,r){const o=`${e}|${n=!!n}`;let s=j.get(o);if(!s){const t=[];s={keys:t,pattern:w(e,t,{end:n,strict:""===e})},j.set(o,s)}const a=s.pattern.exec(t);if(!a)return null;const c=Object.assign({},r);for(let e=1;e<a.length;e++){const t=s.keys[e-1],n=t.name,i=a[e];void 0===i&&L.call(c,n)||(t.repeat?c[n]=i?i.split(t.delimiter).map(V):[]:c[n]=i?V(i):i)}return{path:a[0],keys:(i||[]).concat(s.keys),params:c}}(c,t,!d,i,r),o))return{done:!1,value:{route:e,keys:o.keys,params:o.params,path:o.path}};if(o&&d)for(;a<d.length;){if(!s){const i=d[a];i.parent=e;let r=o.path.length;r>0&&"/"===t.charAt(r)&&(r+=1),s=I(i,t.substr(r),n,o.keys,o.params)}const i=s.next(l);if(!i.done)return{done:!1,value:i.value};s=null,a++}return{done:!0}}}}function U(e){if(u(e.route.action))return e.route.action(e)}j.set("|false",{keys:[],pattern:/(?:)/});class B{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||U,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){c(e);const t=[...i(e)];this.root.__children=t}addRoutes(e){return c(e),this.root.__children.push(...i(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,p(e)?{pathname:e}:e),n=I(this.root,this.__normalizePathname(t.pathname),this.baseUrl),i=this.resolveRoute;let r=null,o=null,s=t;function a(e,c=r.value.route,l){const d=null===l&&r.value.route;return r=o||n.next(d),o=null,e||!r.done&&function(e,t){let n=t;for(;n;)if(n=n.parent,n===e)return!0;return!1}(c,r.value.route)?r.done?Promise.reject(f(t)):(s=Object.assign(s?{chain:s.chain?s.chain.slice(0):[]}:{},t,r.value),function(e,t){const{route:n,path:i}=t;if(n&&!n.__synthetic){const t={path:i,route:n};if(e.chain){if(n.parent){let t=e.chain.length;for(;t--&&e.chain[t].route&&e.chain[t].route!==n.parent;)e.chain.pop()}}else e.chain=[];e.chain.push(t)}}(s,r.value),Promise.resolve(i(s)).then(t=>null!=t&&t!==m?(s.result=t.result||t,s):a(e,c,t))):(o=r,Promise.resolve(m))}return t.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(e=>{const t=function(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const n=(e.route||{}).path;return n&&(t+=` Resolution had failed on route: '${n}'`),t}(s);if(e?console.warn(t):e=new Error(t),e.context=e.context||s,e instanceof DOMException||(e.code=e.code||500),this.errorHandler)return s.result=this.errorHandler(e),s;throw e})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,n=this.constructor.__createUrl(e,t).href;return n.slice(0,t.length)===t?n.slice(t.length):void 0}}B.pathToRegexp=w;const{pathToRegexp:$}=B,M=new Map;function F(e,t){const n=e.get(t);if(n&&n.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return n&&n[0]}function D(e){let t=e.path;return t=Array.isArray(t)?t[0]:t,void 0!==t?t:""}function H(e,t={}){if(!(e instanceof B))throw new TypeError("An instance of Resolver is expected");const n=new Map;return(i,r)=>{let o=F(n,i);if(!o&&(n.clear(),function e(t,n,i){const r=n.name||n.component;if(r&&(t.has(r)?t.get(r).push(n):t.set(r,[n])),Array.isArray(i))for(let r=0;r<i.length;r++){const o=i[r];o.parent=n,e(t,o,o.__children||o.children)}}(n,e.root,e.root.__children),o=F(n,i),!o))throw new Error(`Route "${i}" not found`);let s=M.get(o.fullPath);if(!s){let e=D(o),t=o.parent;for(;t;){const n=D(t);n&&(e=n.replace(/\/$/,"")+"/"+e.replace(/^\//,"")),t=t.parent}const n=$.parse(e),i=$.tokensToFunction(n),r=Object.create(null);for(let e=0;e<n.length;e++)p(n[e])||(r[n[e].name]=!0);s={toPath:i,keys:r},M.set(e,s),o.fullPath=e}let a=s.toPath(r,t)||"/";if(t.stringifyQueryParams&&r){const e={},n=Object.keys(r);for(let t=0;t<n.length;t++){const i=n[t];s.keys[i]||(e[i]=r[i])}const i=t.stringifyQueryParams(e);i&&(a+="?"===i.charAt(0)?i:"?"+i)}return a}}let W=[];function q(e){W.forEach(e=>e.inactivate()),e.forEach(e=>e.activate()),W=e}function z(e,t){return e.classList.add(t),new Promise(n=>{if((e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&"none"!==t})(e)){const i=e.getBoundingClientRect(),r=`height: ${i.bottom-i.top}px; width: ${i.right-i.left}px`;e.setAttribute("style","position: absolute; "+r),((e,t)=>{const n=()=>{e.removeEventListener("animationend",n),t()};e.addEventListener("animationend",n)})(e,()=>{e.classList.remove(t),e.removeAttribute("style"),n()})}else e.classList.remove(t),n()})}function J(e){return null!=e}function G({pathname:e="",search:t="",hash:n="",chain:i=[],params:r={},redirectFrom:o,resolver:s},a){const c=i.map(e=>e.route);return{baseUrl:s&&s.baseUrl||"",pathname:e,search:t,hash:n,routes:c,route:a||c.length&&c[c.length-1]||null,params:r,redirectFrom:o,getUrl:(e={})=>Z(te.pathToRegexp.compile(ee(c))(Object.assign({},r,e)),s)}}function K(e,t){const n=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:n}}}function Q(e,t,n){if(u(e))return e.apply(n,t)}function X(e,t,n){return i=>i&&(i.cancel||i.redirect)?i:n?Q(n[e],t,n):void 0}function Y(e){if(e&&e.length){const t=e[0].parentNode;for(let n=0;n<e.length;n++)t.removeChild(e[n])}}function Z(e,t){const n=t.__effectiveBaseUrl;return n?t.constructor.__createUrl(e.replace(/^\//,""),n).pathname:e}function ee(e){return e.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class te extends B{constructor(e,t){const n=document.head.querySelector("base"),i=n&&n.getAttribute("href");super([],Object.assign({baseUrl:i&&B.__createUrl(i,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=e=>this.__resolveRoute(e);const r=te.NavigationTrigger;te.setTriggers.apply(te,Object.keys(r).map(e=>r[e])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=G({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let n=Promise.resolve();u(t.children)&&(n=n.then(()=>t.children(function(e){const t=Object.assign({},e);return delete t.next,t}(e))).then(e=>{J(e)||u(t.children)||(e=t.children),function(e,t){if(!Array.isArray(e)&&!h(e))throw new Error(r(`Incorrect "children" value for the route ${t.path}: expected array or object, but got ${e}`));t.__children=[];const n=i(e);for(let e=0;e<n.length;e++)a(n[e]),t.__children.push(n[e])}(e,t)}));const s={redirect:t=>K(e,t),component:e=>{const t=document.createElement(e);return this.__createdByRouter.set(t,!0),t}};return n.then(()=>{if(this.__isLatestRender(e))return Q(t.action,[e,s],t)}).then(e=>{return J(e)&&(e instanceof HTMLElement||e.redirect||e===m)?e:p(t.redirect)?s.redirect(t.redirect):t.bundle?(n=t.bundle,p(n)?l(n):Promise.race(o.filter(e=>e in n).map(e=>l(n[e],e)))).then(()=>{},()=>{throw new Error(r(`Bundle not found: ${t.bundle}. Check if the file name is correct`))}):void 0;var n}).then(e=>J(e)?e:p(t.component)?s.component(t.component):void 0)}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const n=++this.__lastStartedRenderId,i=Object.assign({search:"",hash:""},p(e)?{pathname:e}:e,{__renderId:n});return this.ready=this.resolve(i).then(e=>this.__fullyResolveChain(e)).then(e=>{if(this.__isLatestRender(e)){const i=this.__previousContext;if(e===i)return this.__updateBrowserHistory(i,!0),this.location;if(this.location=G(e),t&&this.__updateBrowserHistory(e,1===n),d("location-changed",{router:this,location:this.location}),e.__skipAttach)return this.__copyUnchangedElements(e,i),this.__previousContext=e,this.location;this.__addAppearingContent(e,i);const r=this.__animateIfNeeded(e);return this.__runOnAfterEnterCallbacks(e),this.__runOnAfterLeaveCallbacks(e,i),r.then(()=>{if(this.__isLatestRender(e))return this.__removeDisappearingContent(),this.__previousContext=e,this.location})}}).catch(e=>{if(n===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(i),Y(this.__outlet&&this.__outlet.children),this.location=G(Object.assign(i,{resolver:this})),d("error",Object.assign({router:this,error:e},i)),e}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(n=>{const i=n!==t?n:e,r=Z(ee(n.chain),n.resolver)===n.pathname,o=(e,t=e.route,n)=>e.next(void 0,t,n).then(n=>null===n||n===m?r?e:null!==t.parent?o(e,t.parent,n):n:n);return o(n).then(e=>{if(null===e||e===m)throw f(i);return e&&e!==m&&e!==n?this.__fullyResolveChain(i,e):this.__amendWithOnBeforeCallbacks(n)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(function(e,t){t.location=G(e);const n=e.chain.map(e=>e.route).indexOf(e.route);e.chain[n].element=t}(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(e=>this.__findComponentContextAfterAllRedirects(e)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(r(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${function(e){if("object"!=typeof e)return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return"Object"===t||"Array"===t?`${t} ${JSON.stringify(e)}`:t}(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},n=t.chain||[],i=e.chain;let r=Promise.resolve();const o=()=>({cancel:!0}),s=t=>K(e,t);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let t=0;t<Math.min(n.length,i.length)&&(n[t].route===i[t].route&&(n[t].path===i[t].path||n[t].element===i[t].element)&&this.__isReusableElement(n[t].element,i[t].element));t=++e.__divergedChainIndex);if(e.__skipAttach=i.length===n.length&&e.__divergedChainIndex==i.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let t=i.length-1;t>=0;t--)r=this.__runOnBeforeLeaveCallbacks(r,e,{prevent:o},n[t]);for(let t=0;t<i.length;t++)r=this.__runOnBeforeEnterCallbacks(r,e,{prevent:o,redirect:s},i[t]),n[t].element.location=G(e,n[t].route)}else for(let t=n.length-1;t>=e.__divergedChainIndex;t--)r=this.__runOnBeforeLeaveCallbacks(r,e,{prevent:o},n[t])}if(!e.__skipAttach)for(let t=0;t<i.length;t++)t<e.__divergedChainIndex?t<n.length&&n[t].element&&(n[t].element.location=G(e,n[t].route)):(r=this.__runOnBeforeEnterCallbacks(r,e,{prevent:o,redirect:s},i[t]),i[t].element&&(i[t].element.location=G(e,i[t].route)));return r.then(t=>{if(t){if(t.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(t.redirect)return this.__redirect(t.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,n,i){const r=G(t);return e.then(e=>{if(this.__isLatestRender(t)){return X("onBeforeLeave",[r,n,this],i.element)(e)}}).then(e=>{if(!(e||{}).redirect)return e})}__runOnBeforeEnterCallbacks(e,t,n,i){const r=G(t,i.route);return e.then(e=>{if(this.__isLatestRender(t)){return X("onBeforeEnter",[r,n,this],i.element)(e)}})}__isReusableElement(e,t){return!(!e||!t)&&(this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t)}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,n){if(t>256)throw new Error(r("Too many redirects when rendering "+e.from));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:n})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(r(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:n=""},i){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==n){const r=i?"replaceState":"pushState";window.history[r](null,document.title,e+t+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let n=this.__outlet;for(let i=0;i<e.__divergedChainIndex;i++){const r=t&&t.chain[i].element;if(r){if(r.parentNode!==n)break;e.chain[i].element=r,n=r}}return n}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter(t=>this.__addedByRouter.get(t)&&t!==e.result);let i=n;for(let t=e.__divergedChainIndex;t<e.chain.length;t++){const r=e.chain[t].element;r&&(i.appendChild(r),this.__addedByRouter.set(r,!0),i===n&&this.__appearingContent.push(r),i=r)}}__removeDisappearingContent(){this.__disappearingContent&&Y(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(Y(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let n=t.chain.length-1;n>=e.__divergedChainIndex&&this.__isLatestRender(e);n--){const i=t.chain[n].element;if(i)try{const n=G(e);Q(i.onAfterLeave,[n,{},t.resolver],i)}finally{this.__disappearingContent.indexOf(i)>-1&&Y(i.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const n=e.chain[t].element||{},i=G(e,e.chain[t].route);Q(n.onAfterEnter,[i,{},e.resolver],n)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],i=[],r=e.chain;let o;for(let e=r.length;e>0;e--)if(r[e-1].route.animate){o=r[e-1].route.animate;break}if(t&&n&&o){const e=h(o)&&o.leave||"leaving",r=h(o)&&o.enter||"entering";i.push(z(t,e)),i.push(z(n,r))}return Promise.all(i).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:n,hash:i}=e?e.detail:window.location;p(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:n,hash:i},!0))}static setTriggers(...e){q(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=H(this)),Z(this.__urlForName(e,t),this)}urlForPath(e,t){return Z(te.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:n,hash:i}=p(e)?this.__createUrl(e,"http://a"):e;return d("go",{pathname:t,search:n,hash:i})}}const ne=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,ie=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function re(e,t){if("function"!=typeof e)return;const n=ne.exec(e.toString());if(n)try{e=new Function(n[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}return e(t)}window.Vaadin=window.Vaadin||{};const oe=function(e,t){if(window.Vaadin.developmentMode)return re(e,t)};function se(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(ie?!function(){if(ie){if(Object.keys(ie).map(e=>ie[e]).filter(e=>e.productionMode).length>0)return!0}return!1}():!re((function(){return!0})))}catch(e){return!1}}());window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.2"}),oe(se),te.NavigationTrigger={POPSTATE:y,CLICK:_};var ae=n(2),ce=n(12),le=n(6),de=function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};class he extends ae.b{constructor(){super(),this.firstDelay=300,this.secondDelay=1500,this.thirdDelay=5e3,this.expandedDuration=2e3,this.onlineText="Online",this.offlineText="Connection lost",this.reconnectingText="Connection lost, trying to reconnect...",this.offline=!1,this.reconnecting=!1,this.expanded=!1,this.loading=!1,this.loadingBarState="",this.applyDefaultThemeState=!0,this.firstTimeout=0,this.secondTimeout=0,this.thirdTimeout=0,this.expandedTimeout=0,this.lastMessageState=le.a.CONNECTED,this.connectionStateListener=()=>{this.expanded=this.updateConnectionState(),this.expandedTimeout=this.timeoutFor(this.expandedTimeout,this.expanded,()=>this.expanded=!1,this.expandedDuration)}}static create(){var e,t;const n=window;return(null===(e=n.Vaadin)||void 0===e?void 0:e.connectionIndicator)||(n.Vaadin=n.Vaadin||{},n.Vaadin.connectionIndicator=document.createElement("vaadin-connection-indicator"),document.body.appendChild(n.Vaadin.connectionIndicator)),null===(t=n.Vaadin)||void 0===t?void 0:t.connectionIndicator}render(){return ae.d`
      <div class="v-loading-indicator ${this.loadingBarState}" style="${this.getLoadingBarStyle()}"></div>

      <div
        class="v-status-message ${Object(ce.a)({active:this.reconnecting})}"
      >
        <span class="text"> ${this.renderMessage()} </span>
      </div>
    `}connectedCallback(){var e;super.connectedCallback();const t=window;(null===(e=t.Vaadin)||void 0===e?void 0:e.connectionState)&&(this.connectionStateStore=t.Vaadin.connectionState,this.connectionStateStore.addStateChangeListener(this.connectionStateListener),this.updateConnectionState()),this.updateTheme()}disconnectedCallback(){super.disconnectedCallback(),this.connectionStateStore&&this.connectionStateStore.removeStateChangeListener(this.connectionStateListener),this.updateTheme()}get applyDefaultTheme(){return this.applyDefaultThemeState}set applyDefaultTheme(e){e!==this.applyDefaultThemeState&&(this.applyDefaultThemeState=e,this.updateTheme())}createRenderRoot(){return this}updateConnectionState(){var e;const t=null===(e=this.connectionStateStore)||void 0===e?void 0:e.state;return this.offline=t===le.a.CONNECTION_LOST,this.reconnecting=t===le.a.RECONNECTING,this.updateLoading(t===le.a.LOADING),!this.loading&&(t!==this.lastMessageState&&(this.lastMessageState=t,!0))}updateLoading(e){this.loading=e,this.loadingBarState="",this.firstTimeout=this.timeoutFor(this.firstTimeout,e,()=>this.loadingBarState="first",this.firstDelay),this.secondTimeout=this.timeoutFor(this.secondTimeout,e,()=>this.loadingBarState="second",this.secondDelay),this.thirdTimeout=this.timeoutFor(this.thirdTimeout,e,()=>this.loadingBarState="third",this.thirdDelay)}renderMessage(){return this.reconnecting?this.reconnectingText:this.offline?this.offlineText:this.onlineText}updateTheme(){if(this.applyDefaultThemeState&&this.isConnected){if(!document.getElementById("css-loading-indicator")){const e=document.createElement("style");e.id="css-loading-indicator",e.textContent=this.getDefaultStyle().cssText,document.head.appendChild(e)}}else{const e=document.getElementById("css-loading-indicator");e&&document.head.removeChild(e)}}getDefaultStyle(){return ae.c`
      @keyframes v-progress-start {
        0% {
          width: 0%;
        }
        100% {
          width: 50%;
        }
      }
      @keyframes v-progress-delay {
        0% {
          width: 50%;
        }
        100% {
          width: 90%;
        }
      }
      @keyframes v-progress-wait {
        0% {
          width: 90%;
          height: 4px;
        }
        3% {
          width: 91%;
          height: 7px;
        }
        100% {
          width: 96%;
          height: 7px;
        }
      }
      @keyframes v-progress-wait-pulse {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0.1;
        }
        100% {
          opacity: 1;
        }
      }
      .v-loading-indicator,
      .v-status-message {
        position: fixed;
        z-index: 251;
        left: 0;
        right: auto;
        top: 0;
        background-color: var(--lumo-primary-color, var(--material-primary-color, blue));
        transition: none;
      }
      .v-loading-indicator {
        width: 50%;
        height: 4px;
        opacity: 1;
        pointer-events: none;
        animation: v-progress-start 1000ms 200ms both;
      }
      .v-loading-indicator[style*='none'] {
        display: block !important;
        width: 100%;
        opacity: 0;
        animation: none;
        transition: opacity 500ms 300ms, width 300ms;
      }
      .v-loading-indicator.second {
        width: 90%;
        animation: v-progress-delay 3.8s forwards;
      }
      .v-loading-indicator.third {
        width: 96%;
        animation: v-progress-wait 5s forwards, v-progress-wait-pulse 1s 4s infinite backwards;
      }

      vaadin-connection-indicator[offline] .v-loading-indicator,
      vaadin-connection-indicator[reconnecting] .v-loading-indicator {
        display: none;
      }

      .v-status-message {
        opacity: 0;
        width: 100%;
        max-height: var(--status-height-collapsed, 8px);
        overflow: hidden;
        background-color: var(--status-bg-color-online, var(--lumo-primary-color, var(--material-primary-color, blue)));
        color: var(
          --status-text-color-online,
          var(--lumo-primary-contrast-color, var(--material-primary-contrast-color, #fff))
        );
        font-size: 0.75rem;
        font-weight: 600;
        line-height: 1;
        transition: all 0.5s;
        padding: 0 0.5em;
      }

      vaadin-connection-indicator[offline] .v-status-message,
      vaadin-connection-indicator[reconnecting] .v-status-message {
        opacity: 1;
        background-color: var(--status-bg-color-offline, var(--lumo-shade, #333));
        color: var(
          --status-text-color-offline,
          var(--lumo-primary-contrast-color, var(--material-primary-contrast-color, #fff))
        );
        background-image: repeating-linear-gradient(
          45deg,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0) 10px,
          rgba(255, 255, 255, 0.1) 10px,
          rgba(255, 255, 255, 0.1) 20px
        );
      }

      vaadin-connection-indicator[reconnecting] .v-status-message {
        animation: show-reconnecting-status 2s;
      }

      vaadin-connection-indicator[offline] .v-status-message:hover,
      vaadin-connection-indicator[reconnecting] .v-status-message:hover,
      vaadin-connection-indicator[expanded] .v-status-message {
        max-height: var(--status-height, 1.75rem);
      }

      vaadin-connection-indicator[expanded] .v-status-message {
        opacity: 1;
      }

      .v-status-message span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: var(--status-height, 1.75rem);
      }

      vaadin-connection-indicator[reconnecting] .v-status-message span::before {
        content: '';
        width: 1em;
        height: 1em;
        border-top: 2px solid
          var(--status-spinner-color, var(--lumo-primary-color, var(--material-primary-color, blue)));
        border-left: 2px solid
          var(--status-spinner-color, var(--lumo-primary-color, var(--material-primary-color, blue)));
        border-right: 2px solid transparent;
        border-bottom: 2px solid transparent;
        border-radius: 50%;
        box-sizing: border-box;
        animation: v-spin 0.4s linear infinite;
        margin: 0 0.5em;
      }

      @keyframes v-spin {
        100% {
          transform: rotate(360deg);
        }
      }
    `}getLoadingBarStyle(){switch(this.loadingBarState){case"":return"display: none";case"first":case"second":case"third":return"display: block";default:return""}}timeoutFor(e,t,n,i){return 0!==e&&window.clearTimeout(e),t?window.setTimeout(n,i):0}static get instance(){return he.create()}}de([Object(ae.e)({type:Number})],he.prototype,"firstDelay",void 0),de([Object(ae.e)({type:Number})],he.prototype,"secondDelay",void 0),de([Object(ae.e)({type:Number})],he.prototype,"thirdDelay",void 0),de([Object(ae.e)({type:Number})],he.prototype,"expandedDuration",void 0),de([Object(ae.e)({type:String})],he.prototype,"onlineText",void 0),de([Object(ae.e)({type:String})],he.prototype,"offlineText",void 0),de([Object(ae.e)({type:String})],he.prototype,"reconnectingText",void 0),de([Object(ae.e)({type:Boolean,reflect:!0})],he.prototype,"offline",void 0),de([Object(ae.e)({type:Boolean,reflect:!0})],he.prototype,"reconnecting",void 0),de([Object(ae.e)({type:Boolean,reflect:!0})],he.prototype,"expanded",void 0),de([Object(ae.e)({type:Boolean,reflect:!0})],he.prototype,"loading",void 0),de([Object(ae.e)({type:String})],he.prototype,"loadingBarState",void 0),de([Object(ae.e)({type:Boolean})],he.prototype,"applyDefaultTheme",null),void 0===customElements.get("vaadin-connection-indicator")&&customElements.define("vaadin-connection-indicator",he);he.instance;const ue=window.document.body,pe=window;class fe extends Error{constructor(e){super(e)}}const{serverSideRoutes:me}=new class{constructor(e){this.response=void 0,this.pathname="",this.isActive=!1,this.baseRegex=/^\//,ue.$=ue.$||[],this.config=e||{},pe.Vaadin=pe.Vaadin||{},pe.Vaadin.Flow=pe.Vaadin.Flow||{},pe.Vaadin.Flow.clients={TypeScript:{isActive:()=>this.isActive,loadingStarted:()=>this.loadingStarted(),loadingFinished:()=>this.loadingFinished()}};const t=document.head.querySelector("base");this.baseRegex=new RegExp("^"+(document.baseURI||t&&t.href||"/").replace(/^https?:\/\/[^/]+/i,"")),this.appShellTitle=document.title,this.addConnectionIndicator()}get serverSideRoutes(){return[{path:"(.*)",action:this.action}]}loadingStarted(){this.isActive=!0,pe.Vaadin.connectionState.loadingStarted()}loadingFinished(){this.isActive=!1,pe.Vaadin.connectionState.loadingFinished()}get action(){return async e=>{if(this.pathname=e.pathname,!pe.Vaadin.connectionState.online)return this.offlineStubAction();try{await this.flowInit()}catch(e){if(e instanceof fe)return pe.Vaadin.connectionState.state=le.a.CONNECTION_LOST,this.offlineStubAction();throw e}return this.container.onBeforeEnter=(e,t)=>this.flowNavigate(e,t),this.container.onBeforeLeave=(e,t)=>this.flowLeave(e,t),this.container}}async flowLeave(e,t){const n=pe.Vaadin.connectionState;return this.pathname===e.pathname||!this.isFlowClientLoaded()||n.offline?Promise.resolve({}):new Promise(n=>{this.loadingStarted(),this.container.serverConnected=e=>{n(t&&e?t.prevent():{}),this.loadingFinished()},ue.$server.leaveNavigation(this.getFlowRoute(e))})}async flowNavigate(e,t){return this.response?new Promise(n=>{this.loadingStarted(),this.container.serverConnected=(e,i)=>{t&&e?n(t.prevent()):t&&t.redirect&&i?n(t.redirect(i.pathname)):(this.container.style.display="",n(this.container)),this.loadingFinished()},ue.$server.connectClient(this.container.localName,this.container.id,this.getFlowRoute(e),this.appShellTitle)}):Promise.resolve(this.container)}getFlowRoute(e){return(e.pathname+(e.search||"")).replace(this.baseRegex,"")}async flowInit(e=!1){if(!this.isFlowClientLoaded()){this.loadingStarted(),this.response=await this.flowInitUi(e),this.response.appConfig.clientRouting=!e;const{pushScript:t,appConfig:i}=this.response;"string"==typeof t&&await this.loadScript(t);const{appId:r}=i,o=await n.e(6).then(n.bind(null,182));await o.init(this.response),"function"==typeof this.config.imports&&(this.injectAppIdScript(r),await this.config.imports());const s=await n.e(7).then(n.bind(null,183));if(await this.flowInitClient(s),!e){const e="flow-container-"+r.toLowerCase();this.container=ue.$[r]=document.createElement(e),this.container.id=r,this.container.style.display="none",document.body.appendChild(this.container)}this.loadingFinished()}return this.response}async loadScript(e){return new Promise((t,n)=>{const i=document.createElement("script");i.onload=()=>t(),i.onerror=n,i.src=e,document.body.appendChild(i)})}injectAppIdScript(e){const t=e.substring(0,e.lastIndexOf("-")),n=document.createElement("script");n.type="module",n.setAttribute("data-app-id",t),document.body.append(n)}async flowInitClient(e){return e.init(),new Promise(e=>{const t=setInterval(()=>{Object.keys(pe.Vaadin.Flow.clients).filter(e=>"TypeScript"!==e).reduce((e,t)=>e||pe.Vaadin.Flow.clients[t].isActive(),!1)||(clearInterval(t),e())},5)})}async flowInitUi(e){const t=pe.Vaadin&&pe.Vaadin.TypeScript&&pe.Vaadin.TypeScript.initial;return t?(pe.Vaadin.TypeScript.initial=void 0,Promise.resolve(t)):new Promise((t,n)=>{const i=new XMLHttpRequest,r=(location.pathname||"/")+"?v-r=init"+(e?"&location="+encodeURI(this.getFlowRoute(location)):"");i.open("GET",r),i.onerror=()=>n(new fe(`Invalid server response when initializing Flow UI.\n        ${i.status}\n        ${i.responseText}`)),i.onload=()=>{const e=i.getResponseHeader("content-type");e&&-1!==e.indexOf("application/json")?t(JSON.parse(i.responseText)):i.onerror()},i.send()})}addConnectionIndicator(){he.create(),pe.addEventListener("online",()=>{if(!this.isFlowClientLoaded()){pe.Vaadin.connectionState.state=le.a.RECONNECTING;const e=new XMLHttpRequest,t=location.pathname||"/";e.open("HEAD",t+(t.endsWith("/")?"":" /")+"sw.js"),e.onload=()=>{pe.Vaadin.connectionState.state=le.a.CONNECTED},e.onerror=()=>{pe.Vaadin.connectionState.state=le.a.CONNECTION_LOST},e.send()}}),pe.addEventListener("offline",()=>{this.isFlowClientLoaded()||(pe.Vaadin.connectionState.state=le.a.CONNECTION_LOST)})}async offlineStubAction(){await n.e(5).then(n.bind(null,184));const e=document.createElement("vaadin-offline-stub");let t;this.response=void 0;const i=()=>{void 0!==t&&(pe.Vaadin.connectionState.removeStateChangeListener(t),t=void 0)};return e.onBeforeEnter=(e,n,r)=>{t=()=>{pe.Vaadin.connectionState.online&&(i(),r.render(e,!1))},pe.Vaadin.connectionState.addStateChangeListener(t)},e.onBeforeLeave=(e,t,n)=>{i()},e}isFlowClientLoaded(){return void 0!==this.response}}({imports:()=>Promise.all([n.e(1),n.e(4)]).then(n.bind(null,185))}),ge=[...me];new te(document.querySelector("#outlet")).setRoutes(ge)}]);
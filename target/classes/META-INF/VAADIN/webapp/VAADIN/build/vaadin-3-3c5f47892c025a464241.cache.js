(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{145:function(e,t){!function(){const e=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Date Picker","vaadin-date-picker")};class t{constructor(e){this.initial=e,this.index=0,this.value=0}static compare(e,t){return e.index<t.index?-1:e.index>t.index?1:0}}window.Vaadin.Flow.datepickerConnector={initLazy:n=>e((function(n){if(n.$connector)return;n.$connector={},n.$connector.dayPart=new t("22"),n.$connector.monthPart=new t("11"),n.$connector.yearPart=new t("1987"),n.$connector.parts=[n.$connector.dayPart,n.$connector.monthPart,n.$connector.yearPart];let i="en-us";n.addEventListener("blur",e(e=>{!e.target.value&&e.target.invalid&&console.warn("Invalid value in the DatePicker.")}));const o=e((function(e){return e.replace(/[^\x00-\x7F]/g,"")})),r=e((function(){let e="";try{e=n._inputValue}catch(t){e=n.value||""}return e}));n.$connector.setLocale=e((function(a){try{(new Date).toLocaleDateString(a)}catch(e){a="en-US",console.warn("The locale is not supported, using default locale setting(en-US).")}let c=!1,l=r();"undefined"!==n.i18n.parseDate&&l&&(c=n.i18n.parseDate(l));let d=new Date(Date.UTC(n.$connector.yearPart.initial,n.$connector.monthPart.initial-1,n.$connector.dayPart.initial)),s=o(d.toLocaleDateString(a,{timeZone:"UTC"}));n.$connector.parts.forEach((function(e){e.index=s.indexOf(e.initial)})),n.$connector.parts.sort(t.compare),n.$connector.regex=s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&").replace(n.$connector.dayPart.initial,"(\\d{1,2})").replace(n.$connector.monthPart.initial,"(\\d{1,2})").replace(n.$connector.yearPart.initial,"(\\d{1,4})"),n.i18n.formatDate=e((function(e){let t=n._parseDate(`${e.year}-${e.month+1}-${e.day}`);return t.setHours(12),o(t.toLocaleDateString(a))})),n.i18n.parseDate=e((function(e){if(0==(e=o(e)).length)return;let t=e.match(n.$connector.regex);if(t&&4==t.length){for(let e=1;e<4;e++)n.$connector.parts[e-1].value=parseInt(t[e]);return{day:n.$connector.dayPart.value,month:n.$connector.monthPart.value-1,year:n.$connector.yearPart.value}}return!1})),""===l?i=a:c&&(n._selectedDate=n._parseDate(`${c.year}-${c.month+1}-${c.day}`))}))}))(n)}}()},146:function(e,t){window.Vaadin.Flow.menubarConnector={initLazy:function(e){var t;e.$connector||(e.$connector={updateButtons:(t=function(){e.shadowRoot?(e.items.forEach(e=>e.disabled=e.component.disabled),e.items=e.items.filter(e=>!e.component.hidden),e._buttons.forEach(e=>{e.item&&e.item.component&&e.addEventListener("click",t=>{-1===t.composedPath().indexOf(e.item.component)&&e.item.component.click()})})):setTimeout(()=>e.$connector.updateButtons())},window.Vaadin.Flow.tryCatchWrapper(t,"Vaadin Menu Bar","vaadin-menu-bar"))})}}},147:function(e,t){!function(){const e=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Select","vaadin-select")};window.Vaadin.Flow.selectConnector={initLazy:t=>e((function(t){const n=e((function(){for(let e=0;e<t.childElementCount;e++){const n=t.children[e];if("VAADIN-LIST-BOX"===n.tagName.toUpperCase())return n}}));t.$connector||(t.$connector={},t.renderer=e((function(e){const t=n();t&&(e.firstChild&&e.removeChild(e.firstChild),e.appendChild(t))})))}))(t)}}()},148:function(e,t){!function(){const e=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Time Picker","vaadin-time-picker")};window.Vaadin.Flow.timepickerConnector={initLazy:t=>e((function(t){if(t.$connector)return;t.$connector={};const n=function(e,t){const n=t.toLocaleTimeString(e);let i=n.match(/[^\d\u0660-\u0669]+$/g);return i||(i=n.match(/^[^\d\u0660-\u0669]+/g)),i&&(i=i[0].trim()),i},i=new Date("August 19, 1975 23:15:30"),o=new Date("August 19, 1975 05:15:30"),r={"\\u0660":"0","\\u0661":"1","\\u0662":"2","\\u0663":"3","\\u0664":"4","\\u0665":"5","\\u0666":"6","\\u0667":"7","\\u0668":"8","\\u0669":"9"},a=function(e){return e.replace(/[\u0660-\u0669]/g,(function(e){const t="\\u0"+e.charCodeAt(0).toString(16);return r[t]}))},c=function(e){return parseInt(a(e))},l=/[[\.][\d\u0660-\u0669]{1,3}$/;t.$connector.setLocale=e((function(r){let d;t.value&&""!==t.value&&(d=t.i18n.parseTime(t.value));try{i.toLocaleTimeString(r)}catch(e){throw r="en-US",new Error("vaadin-time-picker: The locale "+r+" is not supported, falling back to default locale setting(en-US).")}const s=function(e){return n(e,i)}(r),u=function(e){return n(e,o)}(r);let f=i.toLocaleTimeString(r);s&&f.startsWith(s)&&(f=f.replace(s,""));const p=f.match(/[^\u0660-\u0669\s\d]/),h=new RegExp("([\\d\\u0660-\\u0669]){1,2}(?:"+p+")?","g"),m=function(){return t.step&&t.step<1};let g,v;let $,w;t.i18n={formatTime:e((function(e){if(e){let n=new Date;n.setHours(e.hours),n.setMinutes(e.minutes),n.setSeconds(void 0!==e.seconds?e.seconds:0);let i=n.toLocaleTimeString(r,(v&&g===t.step||(v={hour:"numeric",minute:"numeric",second:t.step&&t.step<60?"numeric":void 0},g=t.step),v));return i=function(e,t){if(m()){let n=e;if(e.endsWith(u)?n=e.replace(" "+u,""):e.endsWith(s)&&(n=e.replace(" "+s,"")),t){let e=t<10?"0":"";e+=t<100?"0":"",e+=t,n+="."+e}else n+=".000";return e.endsWith(u)?n=n+" "+u:e.endsWith(s)&&(n=n+" "+s),n}return e}(i,e.milliseconds),i}})),parseTime:e((function(e){if(e&&e===$&&w)return w;if(e){const n=e.search(s),i=e.search(u);let o=e.replace(u,"").replace(s,"").trim();h.lastIndex=0;let r=h.exec(o);if(r){r=c(r[0].replace(p,"")),n!==i&&(12===r&&-1!==i?r=0:r+=-1!==n&&12!==r?12:0);const d=h.exec(o),s=d&&h.exec(o);let u=s&&m()&&l.exec(o);return u&&u.index<=s.index&&(u=void 0),w=void 0!==r&&{hours:r,minutes:d?c(d[0].replace(p,"")):0,seconds:s?c(s[0].replace(p,"")):0,milliseconds:d&&s&&u?(t=u[0].replace(".",""),1===(t=a(t)).length?t+="00":2===t.length&&(t+="0"),parseInt(t)):0},$=e,w}}var t}))},d&&function e(t,n,i=0){t()?n():setTimeout(()=>e(t,n,200),i)}(()=>t.shadowRoot,()=>{const e=t.i18n.formatTime(d);t.__inputElement.value!==e&&(t.__inputElement.value=e,t.__dropdownElement.value=e,t.__onInputChange())})}))}))(t)}}()},149:function(e,t){!function(){let e;customElements.whenDefined("vaadin-text-field").then(()=>{class t extends(customElements.get("vaadin-text-field")){static get template(){return e||(e=super.template.cloneNode(!0),e.innerHTML+='<style>\n                  :host {\n                    width: 8em;\n                  }\n\n                  :host([dir="rtl"]) [part="input-field"] {\n                    direction: ltr;\n                  }\n\n                  :host([dir="rtl"]) [part="value"]::placeholder {\n                    direction: rtl;\n                  }\n\n                  :host([dir="rtl"]) [part="input-field"] ::slotted(input)::placeholder {\n                    direction: rtl;\n                  }\n\n                  :host([dir="rtl"]) [part="value"]:-ms-input-placeholder,\n                  :host([dir="rtl"]) [part="input-field"] ::slotted(input):-ms-input-placeholder {\n                    direction: rtl;\n                  }\n\n                  :host([dir="rtl"]:not([has-controls])) [part="value"]::placeholder {\n                    text-align: left;\n                  }\n\n                  :host([dir="rtl"]:not([has-controls])) [part="input-field"] ::slotted(input)::placeholder {\n                    text-align: left;\n                  }\n\n                  :host([dir="rtl"]:not([has-controls])) [part="value"]:-ms-input-placeholder,\n                  :host([dir="rtl"]:not([has-controls])) [part="input-field"] ::slotted(input):-ms-input-placeholder {\n                    text-align: left;\n                  }\n\n                  :host([dir="rtl"]) [part="value"],\n                  :host([dir="rtl"]) [part="input-field"] ::slotted(input) {\n                    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em) !important;\n                  }\n            </style>'),e}static get is(){return"vaadin-big-decimal-field"}static get properties(){return{_decimalSeparator:{type:String,value:".",observer:"__decimalSeparatorChanged"}}}ready(){super.ready(),this.inputElement.setAttribute("inputmode","decimal")}__decimalSeparatorChanged(e,t){this._enabledCharPattern="[\\d-+"+e+"]",this.value&&t&&(this.value=this.value.split(t).join(e))}}customElements.define(t.is,t)})}()},186:function(e,t,n){"use strict";n.r(t),n.d(t,"addCssBlock",(function(){return c}));n(79),n(103);var i=n(21),o=n(22),r=n(63);!function(){const e=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Combo Box","vaadin-combo-box")};window.Vaadin.Flow.comboBoxConnector={initLazy:t=>e((function(t){if(t.$connector)return;t.$connector={};const n={};let r={},a="";const c=new window.Vaadin.ComboBoxPlaceholder,l=Math.max(2*t.pageSize,500),d=(()=>{let e="",n=!1;return{needsDataCommunicatorReset:()=>n=!0,getLastFilterSentToServer:()=>e,requestData:(i,o,r)=>{const a=o-i,c=r.filter;t.$server.setRequestedRange(i,a,c),e=c,n&&(t.$server.resetDataCommunicator(),n=!1)}}})(),s=(e=Object.keys(n))=>{e.forEach(e=>{n[e]([],t.size),delete n[e];const i=parseInt(e)*t.pageSize,o=i+t.pageSize,r=Math.min(o,t.filteredItems.length);for(let e=i;e<r;e++)t.filteredItems[e]=c})};t.dataProvider=function(e,c){if(e.pageSize!=t.pageSize)throw"Invalid pageSize";if(t._clientSideFilter){if(r[0])return void g(r[0],c);e.filter=""}if(e.filter!==a)return r={},a=e.filter,void(this._debouncer=i.a.debounce(this._debouncer,o.d.after(500),()=>{if(d.getLastFilterSentToServer()===e.filter&&d.needsDataCommunicatorReset(),e.filter!==a)throw new Error("Expected params.filter to be '"+a+"' but was '"+e.filter+"'");s(),t.dataProvider(e,c)}));if(r[e.page])m(e.page,c);else{n[e.page]=c;const r=Object.keys(n).map(e=>parseInt(e)),a=Math.min(...r),u=Math.max(...r);if(r.length*e.pageSize>l)e.page===a?s([String(u)]):s([String(a)]),t.dataProvider(e,c);else if(u-a+1!==r.length)s();else{const t=e.pageSize*a,n=e.pageSize*(u+1);this._debouncer&&this._debouncer.isActive()?this._debouncer=i.a.debounce(this._debouncer,o.d.after(200),()=>d.requestData(t,n,e)):d.requestData(t,n,e)}}},t.$connector.filter=e((function(e,n){return n=n?n.toString().toLowerCase():"",t._getItemLabel(e).toString().toLowerCase().indexOf(n)>-1})),t.$connector.set=e((function(e,i,o){if(o!=d.getLastFilterSentToServer())return;if(e%t.pageSize!=0)throw"Got new data to index "+e+" which is not aligned with the page size of "+t.pageSize;if(0===e&&0===i.length&&n[0])return void(r[0]=[]);const a=e/t.pageSize,c=Math.ceil(i.length/t.pageSize);for(let e=0;e<c;e++){let n=a+e,o=i.slice(e*t.pageSize,(e+1)*t.pageSize);r[n]=o}})),t.$connector.updateData=e((function(e){for(let n=0;n<e.length;n++){let i=e[n];for(let e=0;e<t.filteredItems.length;e++)if(t.filteredItems[e].key===i.key){t.set("filteredItems."+e,i);break}}})),t.$connector.updateSize=e((function(e){t._clientSideFilter||(t.size=e)})),t.$connector.reset=e((function(){s(),r={},t.clearCache()})),t.$connector.confirm=e((function(e,i){if(i!=d.getLastFilterSentToServer())return;let o=Object.getOwnPropertyNames(n);for(let e=0;e<o.length;e++){let t=o[e];r[t]&&m(t,n[t])}t.$server.confirmUpdate(e)})),customElements.whenDefined("vaadin-combo-box").then(e(()=>{const e=t.$.overlay._isItemSelected;t.$.overlay._isItemSelected=(n,i,o)=>{let r=e.call(t,n,i,o);return t._selectedKey&&(t.filteredItems.indexOf(i)>-1?delete t._selectedKey:r=r||n.key===t._selectedKey),r}})),t.$connector.enableClientValidation=e((function(e){let n=null;t.$&&(n=t.$.input),n?(e?(h(t),p(n)):(u(t),f(n,t)),t.validate()):setTimeout((function(){t.$connector.enableClientValidation(e)}),10)}));const u=e((function(e){void 0===e.$checkValidity&&(e.$checkValidity=e.checkValidity,e.checkValidity=function(){return!t.invalid}),void 0===e.$validate&&(e.$validate=e.validate,e.validate=function(){return!(t.focusElement.invalid=t.invalid)})})),f=e((function(e,t){void 0===e.$checkValidity&&(e.$checkValidity=e.checkValidity,e.checkValidity=function(){return!t.invalid})})),p=e((function(e){e.$checkValidity&&(e.checkValidity=e.$checkValidity,delete e.$checkValidity)})),h=e((function(e){e.$checkValidity&&(e.checkValidity=e.$checkValidity,delete e.$checkValidity),e.$validate&&(e.validate=e.$validate,delete e.$validate)})),m=e((function(e,n){let i=r[e];t._clientSideFilter?g(i,n):(delete r[e],n(i,t.size))})),g=e((function(e,n){let i=e;t.filter&&(i=e.filter(e=>t.$connector.filter(e,t.filter))),n(i,i.length)}));t.addEventListener("opened-changed",e(e=>{e.detail.value&&(t.$.overlay._selector._manageFocus=()=>{})})),t.addEventListener("custom-value-set",e(e=>e.preventDefault()))}))(t)}}(),window.Vaadin.ComboBoxPlaceholder=r.a;n(145);window.Vaadin.Flow.ironListConnector={initLazy:function(e){if(e.$connector)return;let t=[0,0];e.$connector={},e.$connector.placeholderItem={__placeholder:!0};const n=function(){let n=e._virtualStart,i=e._virtualEnd,o=Math.max(0,n-20),r=Math.min(i+20,e.items.length);if(t[0]!=o||t[1]!=r){t=[o,r];const n=1+r-o;e.$server.setRequestedRange(o,n)}};let r;const a=function(){r=i.a.debounce(r,o.d.after(10),n)},c=e._assignModels;e._assignModels=function(){const t=[],n=e._virtualStart,i=Math.min(e.items.length,e._physicalCount);for(let o=0;o<i;o++)void 0===e.items[n+o]&&(t.push(o),e.items[n+o]=e.$connector.placeholderItem);c.apply(e,arguments);for(let i=0;i<t.length;i++)delete e.items[n+t[i]];a()},e.items=[],e.$connector.set=function(t,n){for(let i=0;i<n.length;i++){const o=t+i;e.items[o]=n[i]}e._render()},e.$connector.updateData=function(t){const n=e.items,i={};let o=t.length;for(let e=0;e<t.length;e++){const n=t[e];i[n.key]=n}for(let t=0;t<n.length;t++){const r=i[n[t].key];if(r&&(e.items[t]=r,e.notifyPath("items."+t),o--,0==o))break}},e.$connector.clear=function(t,n){for(let i=0;i<n;i++){const n=t+i;delete e.items[n],e.notifyPath("items."+n)}},e.$connector.updateSize=function(t){const n=t-e.items.length;if(n>0)e.items.length=t,e.notifySplices("items",[{index:t-n,removed:[],addedCount:n,object:e.items,type:"splice"}]);else if(n<0){const n=e.items.slice(t,e.items.length);e.items.splice(t),e.notifySplices("items",[{index:t,removed:n,addedCount:0,object:e.items,type:"splice"}])}},e.$connector.setPlaceholderItem=function(t){t||(t={}),t.__placeholder=!0,e.$connector.placeholderItem=t}}};n(43);const a=document.createElement("template");a.innerHTML="<style>\n/* Fixes zero width in flex layouts */\niron-list {\n  flex: auto;\n  align-self: stretch;\n}\n</style>",document.head.appendChild(a.content);n(146),n(147),n(148),n(149),n(155),n(156),n(163),n(157),n(132),n(164),n(165),n(133),n(125),n(153),n(151),n(166),n(167),n(168),n(57),n(65),n(129),n(159),n(152),n(169),n(170),n(134),n(135),n(171),n(158),n(172),n(136),n(173),n(174),n(181),n(137),n(80),n(175),n(128),n(121),n(176);const c=function(e,t=!1){const n=document.createElement("template");n.innerHTML=e,document.head[t?"insertBefore":"appendChild"](n.content,document.head.firstChild)}}}]);
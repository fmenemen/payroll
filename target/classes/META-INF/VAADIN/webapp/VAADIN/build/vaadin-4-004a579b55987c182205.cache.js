(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,t){window.Vaadin=window.Vaadin||{},window.Vaadin.Flow=window.Vaadin.Flow||{},window.Vaadin.Flow.dndConnector={__ondragenterListener:function(e){const t=e.currentTarget.__dropEffect;e.currentTarget.hasAttribute("disabled")||(t&&(e.dataTransfer.dropEffect=t),t&&"none"!==t&&(e.currentTarget.classList.contains("v-drag-over-target")?e.currentTarget["__skip-leave"]=!0:e.currentTarget.classList.add("v-drag-over-target"),e.preventDefault(),e.stopPropagation()))},__ondragoverListener:function(e){if(!e.currentTarget.hasAttribute("disabled")){const t=e.currentTarget.__dropEffect;t&&(e.dataTransfer.dropEffect=t),e.preventDefault(),e.stopPropagation()}},__ondragleaveListener:function(e){e.currentTarget["__skip-leave"]?e.currentTarget["__skip-leave"]=!1:e.currentTarget.classList.remove("v-drag-over-target"),e.stopPropagation()},__ondropListener:function(e){const t=e.currentTarget.__dropEffect;t&&(e.dataTransfer.dropEffect=t),e.currentTarget.classList.remove("v-drag-over-target"),e.preventDefault(),e.stopPropagation()},updateDropTarget:function(e){e.__active?(e.addEventListener("dragenter",this.__ondragenterListener,!1),e.addEventListener("dragover",this.__ondragoverListener,!1),e.addEventListener("dragleave",this.__ondragleaveListener,!1),e.addEventListener("drop",this.__ondropListener,!1)):(e.removeEventListener("dragenter",this.__ondragenterListener,!1),e.removeEventListener("dragover",this.__ondragoverListener,!1),e.removeEventListener("dragleave",this.__ondragleaveListener,!1),e.removeEventListener("drop",this.__ondropListener,!1),e.classList.remove("v-drag-over-target"))},__dragstartListener:function(e){e.stopPropagation(),e.dataTransfer.setData("text/plain",""),e.currentTarget.hasAttribute("disabled")?e.preventDefault():(e.currentTarget.__effectAllowed&&(e.dataTransfer.effectAllowed=e.currentTarget.__effectAllowed),e.currentTarget.classList.add("v-dragged"))},__dragendListener:function(e){e.currentTarget.classList.remove("v-dragged")},updateDragSource:function(e){e.draggable?(e.addEventListener("dragstart",this.__dragstartListener,!1),e.addEventListener("dragend",this.__dragendListener,!1)):(e.removeEventListener("dragstart",this.__dragstartListener,!1),e.removeEventListener("dragend",this.__dragendListener,!1))}}},185:function(e,t,n){"use strict";n.r(t),n.d(t,"addCssBlock",(function(){return v}));var i=n(2),o=n(12),a=n(6),r=function(e,t,n,i){var o,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(r=(a<3?o(r):a>3?o(t,n,r):o(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r};class c extends i.b{constructor(){super(),this.firstDelay=300,this.secondDelay=1500,this.thirdDelay=5e3,this.expandedDuration=2e3,this.onlineText="Online",this.offlineText="Connection lost",this.reconnectingText="Connection lost, trying to reconnect...",this.offline=!1,this.reconnecting=!1,this.expanded=!1,this.loading=!1,this.loadingBarState="",this.applyDefaultThemeState=!0,this.firstTimeout=0,this.secondTimeout=0,this.thirdTimeout=0,this.expandedTimeout=0,this.lastMessageState=a.a.CONNECTED,this.connectionStateListener=()=>{this.expanded=this.updateConnectionState(),this.expandedTimeout=this.timeoutFor(this.expandedTimeout,this.expanded,()=>this.expanded=!1,this.expandedDuration)}}static create(){var e,t;const n=window;return(null===(e=n.Vaadin)||void 0===e?void 0:e.connectionIndicator)||(n.Vaadin=n.Vaadin||{},n.Vaadin.connectionIndicator=document.createElement("vaadin-connection-indicator"),document.body.appendChild(n.Vaadin.connectionIndicator)),null===(t=n.Vaadin)||void 0===t?void 0:t.connectionIndicator}render(){return i.d`
      <div class="v-loading-indicator ${this.loadingBarState}" style="${this.getLoadingBarStyle()}"></div>

      <div
        class="v-status-message ${Object(o.a)({active:this.reconnecting})}"
      >
        <span class="text"> ${this.renderMessage()} </span>
      </div>
    `}connectedCallback(){var e;super.connectedCallback();const t=window;(null===(e=t.Vaadin)||void 0===e?void 0:e.connectionState)&&(this.connectionStateStore=t.Vaadin.connectionState,this.connectionStateStore.addStateChangeListener(this.connectionStateListener),this.updateConnectionState()),this.updateTheme()}disconnectedCallback(){super.disconnectedCallback(),this.connectionStateStore&&this.connectionStateStore.removeStateChangeListener(this.connectionStateListener),this.updateTheme()}get applyDefaultTheme(){return this.applyDefaultThemeState}set applyDefaultTheme(e){e!==this.applyDefaultThemeState&&(this.applyDefaultThemeState=e,this.updateTheme())}createRenderRoot(){return this}updateConnectionState(){var e;const t=null===(e=this.connectionStateStore)||void 0===e?void 0:e.state;return this.offline=t===a.a.CONNECTION_LOST,this.reconnecting=t===a.a.RECONNECTING,this.updateLoading(t===a.a.LOADING),!this.loading&&(t!==this.lastMessageState&&(this.lastMessageState=t,!0))}updateLoading(e){this.loading=e,this.loadingBarState="",this.firstTimeout=this.timeoutFor(this.firstTimeout,e,()=>this.loadingBarState="first",this.firstDelay),this.secondTimeout=this.timeoutFor(this.secondTimeout,e,()=>this.loadingBarState="second",this.secondDelay),this.thirdTimeout=this.timeoutFor(this.thirdTimeout,e,()=>this.loadingBarState="third",this.thirdDelay)}renderMessage(){return this.reconnecting?this.reconnectingText:this.offline?this.offlineText:this.onlineText}updateTheme(){if(this.applyDefaultThemeState&&this.isConnected){if(!document.getElementById("css-loading-indicator")){const e=document.createElement("style");e.id="css-loading-indicator",e.textContent=this.getDefaultStyle().cssText,document.head.appendChild(e)}}else{const e=document.getElementById("css-loading-indicator");e&&document.head.removeChild(e)}}getDefaultStyle(){return i.c`
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
    `}getLoadingBarStyle(){switch(this.loadingBarState){case"":return"display: none";case"first":case"second":case"third":return"display: block";default:return""}}timeoutFor(e,t,n,i){return 0!==e&&window.clearTimeout(e),t?window.setTimeout(n,i):0}static get instance(){return c.create()}}r([Object(i.e)({type:Number})],c.prototype,"firstDelay",void 0),r([Object(i.e)({type:Number})],c.prototype,"secondDelay",void 0),r([Object(i.e)({type:Number})],c.prototype,"thirdDelay",void 0),r([Object(i.e)({type:Number})],c.prototype,"expandedDuration",void 0),r([Object(i.e)({type:String})],c.prototype,"onlineText",void 0),r([Object(i.e)({type:String})],c.prototype,"offlineText",void 0),r([Object(i.e)({type:String})],c.prototype,"reconnectingText",void 0),r([Object(i.e)({type:Boolean,reflect:!0})],c.prototype,"offline",void 0),r([Object(i.e)({type:Boolean,reflect:!0})],c.prototype,"reconnecting",void 0),r([Object(i.e)({type:Boolean,reflect:!0})],c.prototype,"expanded",void 0),r([Object(i.e)({type:Boolean,reflect:!0})],c.prototype,"loading",void 0),r([Object(i.e)({type:String})],c.prototype,"loadingBarState",void 0),r([Object(i.e)({type:Boolean})],c.prototype,"applyDefaultTheme",null),void 0===customElements.get("vaadin-connection-indicator")&&customElements.define("vaadin-connection-indicator",c);c.instance;n(29);var s=n(33);!function(){const e=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Context Menu","vaadin-context-menu-flow")};window.Vaadin.Flow.contextMenuConnector={init:t=>e((function(t){t.$contextMenuConnector||(t.$contextMenuConnector={openOnHandler:e((function(e){e.preventDefault(),e.stopPropagation(),this.$contextMenuConnector.openEvent=e;let n={};t.getContextMenuBeforeOpenDetail&&(n=t.getContextMenuBeforeOpenDetail(e)),t.dispatchEvent(new CustomEvent("vaadin-context-menu-before-open",{detail:n}))})),updateOpenOn:e((function(n){this.removeListener(),this.openOnEventType=n,customElements.whenDefined("vaadin-context-menu").then(e(()=>{s.b[n]?s.a(t,n,this.openOnHandler):t.addEventListener(n,this.openOnHandler)}))})),removeListener:e((function(){this.openOnEventType&&(s.b[this.openOnEventType]?s.e(t,this.openOnEventType,this.openOnHandler):t.removeEventListener(this.openOnEventType,this.openOnHandler))})),openMenu:e((function(e){e.open(this.openEvent)})),removeConnector:e((function(){this.removeListener(),t.$contextMenuConnector=void 0}))})}))(t),generateItems:(t,n,i)=>e((function(e,t,n){e._containerNodeId=n;const i=function(e){const n=function(e){try{return window.Vaadin.Flow.clients[t].getByNodeId(e)}catch(n){console.error("Could not get node %s from app %s",e,t),console.error(n)}}(e._containerNodeId);return n&&Array.from(n.children).map(e=>{const t={component:e,checked:e._checked};return"VAADIN-CONTEXT-MENU-ITEM"==e.tagName&&e._containerNodeId&&(t.children=i(e)),e._item=t,t})},o=i(e);e.items=o}))(t,n,i),setChecked:(t,n)=>e((function(e,t){e._item&&(e._item.checked=t)}))(t,n)}}();n(143),n(32);var d=n(16),l=n(21),h=n(22),u=n(14);class p extends u.a{static get template(){return d.a`
    <style>
      @keyframes flow-component-renderer-appear {
        to {
          opacity: 1;
        }
      }
      :host {
        animation: 1ms flow-component-renderer-appear;
      }
    </style>
    <slot></slot>
`}static get is(){return"flow-component-renderer"}static get properties(){return{nodeid:Number,appid:String}}static get observers(){return["_attachRenderedComponentIfAble(appid, nodeid)"]}connectedCallback(){super.connectedCallback(),this._runChrome72ShadowDomBugWorkaround()}_runChrome72ShadowDomBugWorkaround(){const e=navigator.userAgent;if(e&&e.match("Chrome/")){const t=e.split("Chrome/")[1].split(".")[0];if(t&&parseInt(t)>71){const e=this._getDebouncedNotifyResizeFunction();e&&(this.style.visibility="hidden",requestAnimationFrame(()=>{this.style.visibility="",e()}))}}}_getDebouncedNotifyResizeFunction(){let e=this.parentElement;for(;;){if(!e)return;if(e.notifyResize)break;e=e.parentElement}return e._debouncedNotifyResize||(e._debouncedNotifyResize=function(){e.__debouncedNotifyResize=l.a.debounce(e.__debouncedNotifyResize,h.a,e.notifyResize)}),e._debouncedNotifyResize}ready(){super.ready(),this.addEventListener("click",(function(e){this.firstChild&&"function"==typeof this.firstChild.click&&e.target===this&&this.firstChild.click()})),this.addEventListener("animationend",this._onAnimationEnd)}_asyncAttachRenderedComponentIfAble(){this._debouncer=l.a.debounce(this._debouncer,h.b,()=>this._attachRenderedComponentIfAble())}_attachRenderedComponentIfAble(){if(!this.nodeid||!this.appid)return;const e=this._getRenderedComponent();this.firstChild?e?this.firstChild!==e?(this.replaceChild(e,this.firstChild),this._defineFocusTarget(),this.onComponentRendered()):(this._defineFocusTarget(),this.onComponentRendered()):(this._clear(),this._asyncAttachRenderedComponentIfAble()):e?(this.appendChild(e),this._defineFocusTarget(),this.onComponentRendered()):this._asyncAttachRenderedComponentIfAble()}_getRenderedComponent(){try{return window.Vaadin.Flow.clients[this.appid].getByNodeId(this.nodeid)}catch(e){console.error("Could not get node %s from app %s",this.nodeid,this.appid),console.error(e)}return null}_clear(){for(;this.firstChild;)this.removeChild(this.firstChild)}onComponentRendered(){}_defineFocusTarget(){var e=this._getFirstFocusableDescendant(this.firstChild);null!==e&&e.setAttribute("focus-target","true")}_getFirstFocusableDescendant(e){if(this._isFocusable(e))return e;if(!e.children)return null;for(var t=0;t<e.children.length;t++){var n=this._getFirstFocusableDescendant(e.children[t]);if(null!==n)return n}return null}_isFocusable(e){return(!e.hasAttribute||"function"!=typeof e.hasAttribute||!e.hasAttribute("disabled")&&!e.hasAttribute("hidden"))&&0===e.tabIndex}_onAnimationEnd(e){0===e.animationName.indexOf("flow-component-renderer-appear")&&this._attachRenderedComponentIfAble()}}window.customElements.define(p.is,p);var m=n(123),f=n(91);!function(){const e=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Grid","vaadin-grid")};let t=!1;window.Vaadin.Flow.gridConnector={initLazy:n=>e((function(n){if(n.$connector)return;t||(t=!0,f.b.prototype.ensureSubCacheForScaledIndexOriginal=f.b.prototype.ensureSubCacheForScaledIndex,f.b.prototype.ensureSubCacheForScaledIndex=e((function(e){this.grid.$connector?this.itemCaches[e]||this.grid.$connector.beforeEnsureSubCacheForScaledIndex(this,e):this.ensureSubCacheForScaledIndexOriginal(e)})),f.b.prototype.isLoading=e((function(){return Boolean(d.length||Object.keys(this.pendingRequests).length||Object.keys(this.itemCaches).filter(e=>this.itemCaches[e].isLoading())[0])})),f.b.prototype.doEnsureSubCacheForScaledIndex=e((function(e){if(!this.itemCaches[e]){const t=new f.b.prototype.constructor(this.grid,this,this.items[e]);t.itemkeyCaches={},this.itemkeyCaches||(this.itemkeyCaches={}),this.itemCaches[e]=t,this.itemkeyCaches[this.grid.getItemId(t.parentItem)]=t,this.grid._loadPage(0,t)}})),f.b.prototype.getCacheAndIndexByKey=e((function(e){for(let t in this.items)if(this.grid.getItemId(this.items[t])===e)return{cache:this,scaledIndex:t};const t=Object.keys(this.itemkeyCaches);for(let n=0;n<t.length;n++){const i=t[n];let o=this.itemkeyCaches[i].getCacheAndIndexByKey(e);if(o)return o}})),f.b.prototype.getLevel=e((function(){let e=this,t=0;for(;e.parentCache;)e=e.parentCache,t++;return t})));const i={},o={},a={};let r,c,s=[],d=[];let u,p={};const g="null";p[g]=[0,0];const v=["SINGLE","NONE","MULTI"];let y={},_="SINGLE",b=!0,C=!1;n.size=0,n.itemIdPath="key",n.$connector={},n.$connector.hasEnsureSubCacheQueue=e(()=>d.length>0),n.$connector.hasParentRequestQueue=e(()=>s.length>0),n.$connector.hasRootRequestQueue=e(()=>Object.keys(i).length>0||u&&u.isActive()),n.$connector.beforeEnsureSubCacheForScaledIndex=e((function(e,t){d.push({cache:e,scaledIndex:t,itemkey:n.getItemId(e.items[t]),level:e.getLevel()}),d.sort((function(e,t){return e.scaledIndex-t.scaledIndex||e.level-t.level})),c=l.a.debounce(c,h.a,()=>{for(;d.length;)n.$connector.flushEnsureSubCache()})})),n.$connector.doSelection=e((function(e,t){"NONE"===_||!e.length||t&&n.hasAttribute("disabled")||("SINGLE"===_&&(n.selectedItems=[],y={}),n.selectedItems=n.selectedItems.concat(e),e.forEach(e=>{e&&(y[e.key]=e,t&&(e.selected=!0,n.$server.select(e.key)));const i=!n.activeItem||!e||e.key!=n.activeItem.key;!t&&"SINGLE"===_&&i&&(n.activeItem=e,n.$connector.activeItem=e)}))})),n.$connector.doDeselection=e((function(e,t){if("NONE"===_||!e.length||t&&n.hasAttribute("disabled"))return;const i=n.selectedItems.slice();for(;e.length;){const o=e.shift();for(let e=0;e<i.length;e++){const t=i[e];if(o&&o.key===t.key){i.splice(e,1);break}}o&&(delete y[o.key],t&&(delete o.selected,n.$server.deselect(o.key)))}n.selectedItems=i})),n.__activeItemChanged=e((function(e,t){"SINGLE"==_&&(e?y[e.key]||n.$connector.doSelection([e],!0):t&&y[t.key]&&(n.$connector.deselectAllowed?n.$connector.doDeselection([t],!0):n.activeItem=t))})),n._createPropertyObserver("activeItem","__activeItemChanged",!0),n.__activeItemChangedDetails=e((function(e,t){b&&(null==e&&void 0===t||(e&&!e.detailsOpened?n.$server.setDetailsVisible(e.key):n.$server.setDetailsVisible(null)))})),n._createPropertyObserver("activeItem","__activeItemChangedDetails",!0),n.$connector.setDetailsVisibleOnClick=e((function(e){b=e})),n.$connector._getPageIfSameLevel=e((function(e,t,i){let o=n._cache.getCacheAndIndex(t),a=o.cache.parentItem;return e!==(a?n.getItemId(a):g)?i:n._getPageForIndex(o.scaledIndex)})),n.$connector.getCacheByKey=e((function(e){let t=n._cache.getCacheAndIndexByKey(e);if(t)return t.cache})),n.$connector.flushEnsureSubCache=e((function(){let e=d.splice(0,1)[0],t=e.itemkey,i=n._virtualStart,o=n._virtualEnd,a=o-i,r=Math.max(0,i+n._vidxOffset-a),c=Math.min(o+n._vidxOffset+a,n._effectiveSize);for(let i=r;i<=c;i++){let o=n._cache.getItemForIndex(i);if(n.getItemId(o)===t){if(n._isExpanded(o))return e.cache.doEnsureSubCacheForScaledIndex(e.scaledIndex),!0;break}}return!1})),n.$connector.flushParentRequests=e((function(){let e=s.splice(0,20);return!!e.length&&(n.$server.setParentRequestedRanges(e),!0)})),n.$connector.beforeParentRequest=e((function(e,t,i){s.push({firstIndex:e,size:t,parentKey:i}),r=l.a.debounce(r,h.d.after(50),()=>{for(;s.length;)n.$connector.flushParentRequests()})})),n.$connector.fetchPage=e((function(e,t,i){let o=n._virtualStart,a=n._virtualEnd,r=a-o,c=Math.max(0,o+n._vidxOffset-r),s=Math.min(a+n._vidxOffset+r,n._effectiveSize),d=t,l=t;for(let e=c;e<=s;e++)d=Math.min(d,n.$connector._getPageIfSameLevel(i,e,d)),l=Math.max(l,n.$connector._getPageIfSameLevel(i,e,l));let h=Math.max(0,d),u=i!==g?l:Math.min(l,Math.floor(n.size/n.pageSize)),m=p[i];if(m||(m=[-1,-1]),m[0]!=h||m[1]!=u){m=[h,u],p[i]=m;let t=u-h+1;e(h*n.pageSize,t*n.pageSize)}})),n.dataProvider=e((function(e,t){if(e.pageSize!=n.pageSize)throw"Invalid pageSize";let r=e.page;if(e.parentItem){let i=n.getItemId(e.parentItem);o[i]||(o[i]={});let c=n.$connector.getCacheByKey(i),s=c&&c.itemkeyCaches?c.itemkeyCaches[i]:void 0;a[i]&&a[i][r]&&s?(r=Math.min(r,Math.floor(a[i].size/n.pageSize)),t(a[i][r],a[i].size)):o[i][r]=t,n.$connector.fetchPage((t,i)=>n.$connector.beforeParentRequest(t,i,e.parentItem.key),r,i)}else r=Math.min(r,Math.floor(n.size/n.pageSize)),a[g]&&a[g][r]?t(a[g][r]):i[r]=t,u=l.a.debounce(u,h.d.after(n._hasData?150:0),()=>{n.$connector.fetchPage((e,t)=>n.$server.setRequestedRange(e,t),r,g)})}));const I=e((function(e,t){void 0===t||C||n.$server.sortersChanged(n._sorters.map((function(e){return{path:e.path,direction:e.direction}})))}));n.$connector.setSorterDirections=e((function(t){C=!0,setTimeout(e(()=>{try{const e=Array.from(n.querySelectorAll("vaadin-grid-sorter"));e.forEach(e=>{t.filter(t=>t.column===e.getAttribute("path"))[0]||(e.direction=null)}),t.reverse().forEach(({column:t,direction:n})=>{e.forEach(e=>{e.getAttribute("path")===t&&e.direction!==n&&(e.direction=n)})})}finally{C=!1}}))})),n._createPropertyObserver("_previousSorters",I),n._updateItem=e((function(e,t){m.a.prototype._updateItem.call(n,e,t),e.hidden||Array.from(e.children).forEach(e=>{e._instance&&e._instance.children&&Array.from(e._instance.children).forEach(e=>{e._attachRenderedComponentIfAble&&e._attachRenderedComponentIfAble(),e.children&&Array.from(e.children).forEach(e=>{e._attachRenderedComponentIfAble&&e._attachRenderedComponentIfAble()})})})})),n._expandedInstanceChangedCallback=e((function(e,t){if(null==e.item||null==n.$server.updateExpandedState)return;let i=n.getItemId(e.item);if(n.$server.updateExpandedState(i,t),t)this.expandItem(e.item);else{delete a[i];let t=n.$connector.getCacheByKey(i);t&&t.itemkeyCaches&&t.itemkeyCaches[i]&&delete t.itemkeyCaches[i],t&&t.itemkeyCaches&&Object.keys(t.itemCaches).filter(e=>t.items[e].key===i).forEach(e=>delete t.itemCaches[e]),delete p[i],this.collapseItem(e.item)}}));const S=function(e){if(!e||!Array.isArray(e))throw"Attempted to call itemsUpdated with an invalid value: "+JSON.stringify(e);let t=Array.from(n.detailsOpenedItems),i=!1;for(let o=0;o<e.length;++o){const a=e[o];a&&(a.detailsOpened?n._getItemIndexInArray(a,t)<0&&t.push(a):n._getItemIndexInArray(a,t)>=0&&t.splice(n._getItemIndexInArray(a,t),1),y[a.key]&&(y[a.key]=a,a.selected=!0,i=!0))}n.detailsOpenedItems=t,i&&(n.selectedItems=Object.keys(y).map((function(e){return y[e]})))},w=function(e,t){let r;if((t||g)!==g){r=a[t][e];let i=n.$connector.getCacheByKey(t);if(i&&i.itemkeyCaches){let n=i.itemkeyCaches[t];const a=o[t],c=a&&a[e];x(e,r,c,n)}}else r=a[g][e],x(e,r,i[e],n._cache);return r},x=function(e,t,i,o){if(!i){let i=e*n.pageSize,a=i+n.pageSize;if(t){if(o&&o.items)for(let e=i;e<a;e++)o.items[e]&&(o.items[e]=t[e-i])}else if(o&&o.items)for(let e=i;e<a;e++)delete o.items[e]}},E=function(){n._cache.updateSize(),n._effectiveSize=n._cache.effectiveSize,n._assignModels()},k=function(e){if(!e||!n._physicalItems)return;const t=e.map(e=>e.key),i=n._physicalItems.map((e,n)=>e._item&&e._item.key&&t.indexOf(e._item.key)>-1?n:null).filter(e=>null!==e);i.length>0&&n._assignModels(i)};n.$connector.set=e((function(e,t,i){if(e%n.pageSize!=0)throw"Got new data to index "+e+" which is not aligned with the page size of "+n.pageSize;let o=i||g;const r=e/n.pageSize,c=Math.ceil(t.length/n.pageSize);for(let e=0;e<c;e++){let i=r+e,c=t.slice(e*n.pageSize,(e+1)*n.pageSize);a[o]||(a[o]={}),a[o][i]=c,n.$connector.doSelection(c.filter(e=>e.selected&&!$(e))),n.$connector.doDeselection(c.filter(e=>!e.selected&&(y[e.key]||$(e))));const s=w(i,o);s&&(S(s),k(s))}}));const T=function(e){let t=e.parentUniqueKey||g;if(a[t])for(let i in a[t])for(let o in a[t][i])if(n.getItemId(a[t][i][o])===n.getItemId(e))return{page:i,index:o,parentKey:t};return null};n.$connector.updateHierarchicalData=e((function(e){let t=[];for(let n=0;n<e.length;n++){let i=T(e[n]);if(i){a[i.parentKey][i.page][i.index]=e[n];let o=i.parentKey+":"+i.page;t[o]||(t[o]={parentKey:i.parentKey,page:i.page})}}let n=Object.keys(t);for(let e=0;e<n.length;e++){let i=t[n[e]];const o=w(i.page,i.parentKey);o&&(S(o),k(o))}})),n.$connector.updateFlatData=e((function(e){for(let t=0;t<e.length;t++){let i=T(e[t]);if(i){a[i.parentKey][i.page][i.index]=e[t];const o=parseInt(i.page)*n.pageSize+parseInt(i.index);n._cache.items[o]&&(n._cache.items[o]=e[t])}}S(e),k(e)})),n.$connector.clearExpanded=e((function(){n.expandedItems=[],d=[],s=[]})),n.$connector.clear=e((function(e,t,i){let o=i||g;if(!a[o]||0===Object.keys(a[o]).length)return;if(e%n.pageSize!=0)throw"Got cleared data for index "+e+" which is not aligned with the page size of "+n.pageSize;let r=Math.floor(e/n.pageSize),c=Math.ceil(t/n.pageSize);for(let e=0;e<c;e++){let t=r+e,c=a[o][t];n.$connector.doDeselection(c.filter(e=>y[e.key])),delete a[o][t];const s=w(t,i);s&&S(s),k(c)}let s=n._cache;if(i){const e=n._cache.getCacheAndIndexByKey(o);s=e.cache.itemCaches[e.scaledIndex]}const d=e+c*n.pageSize;for(let t=e;t<d;t++){delete s.items[t];const e=s.itemCaches[t];delete s.itemCaches[t];const n=e&&e.parentItem.key;n&&delete s.itemkeyCaches[n]}n._cache.updateSize()}));const $=function(e){const t=n.selectedItems;for(let n=0;n<t;n++){if(t[n].key===e.key)return!0}return!1};n.$connector.reset=e((function(){n.size=0,D(a),D(n._cache.items),D(p),c&&c.cancel(),r&&r.cancel(),u&&u.cancel(),c=void 0,r=void 0,d=[],s=[],E()}));const D=e=>Object.keys(e).forEach(t=>delete e[t]);n.$connector.updateSize=e=>n.size=e,n.$connector.updateUniqueItemIdPath=e=>n.itemIdPath=e,n.$connector.expandItems=e((function(e){let t=Array.from(n.expandedItems);e.filter(e=>!n._isExpanded(e)).forEach(e=>t.push(e)),n.expandedItems=t})),n.$connector.collapseItems=e((function(e){let t=Array.from(n.expandedItems);e.forEach(e=>{let i=n._getItemIndexInArray(e,t);i>=0&&t.splice(i,1)}),n.expandedItems=t,e.forEach(e=>n.$connector.removeFromQueue(e))})),n.$connector.removeFromQueue=e((function(e){let t=n.getItemId(e);delete o[t],n.$connector.removeFromArray(d,e=>e.itemkey===t),n.$connector.removeFromArray(s,e=>e.parentKey===t)})),n.$connector.removeFromArray=e((function(e,t){if(e.length)for(let n=e.length-1;n--;)t(e[n])&&e.splice(n,1)})),n.$connector.confirmParent=e((function(e,t,i){if(!o[t])return;a[t]&&(a[t].size=i);let r=Object.getOwnPropertyNames(o[t]);for(let e=0;e<r.length;e++){let n=r[e],c=p[t]||[0,0];const s=o[t][n];if(a[t]&&a[t][n]||n<c[0]||n>c[1]){delete o[t][n],s(a[t][n]||new Array(i),i)}else s&&0===i&&(delete o[t][n],s([],i))}n.$server.confirmParentUpdate(e,t),n.loading||n._assignModels()})),n.$connector.confirm=e((function(e){let t=Object.getOwnPropertyNames(i);for(let e=0;e<t.length;e++){let o=t[e],r=p[g]||[0,0];const c=n.size?Math.ceil(n.size/n.pageSize)-1:0,s=Math.min(r[1],c),d=i[o];a[g]&&a[g][o]||o<r[0]||+o>s?(delete i[o],d(a[g][o]||new Array(n.pageSize)),n._debounceIncreasePool&&n._debounceIncreasePool.flush()):d&&0===n.size&&(delete i[o],d([]))}n.$server.confirmUpdate(e)})),n.$connector.ensureHierarchy=e((function(){for(let e in a)e!==g&&delete a[e];D(p),n._cache.itemCaches={},n._cache.itemkeyCaches={},E()})),n.$connector.setSelectionMode=e((function(e){if(!(("string"==typeof e||e instanceof String)&&v.indexOf(e)>=0))throw"Attempted to set an invalid selection mode";_=e,y={}})),n.$connector.deselectAllowed=!0,n.$connector.setVerticalScrollingEnabled=e((function(e){L(n.$.table,e),n.notifyResize()}));const L=function(t,n){t.style.overflowY=n?"":"hidden",t.removeEventListener("wheel",t.__wheelListener),!n&&t.addEventListener("wheel",t.__wheelListener=e(e=>{e.deltaX?Object.defineProperty(e,"deltaY",{value:0}):e.stopImmediatePropagation()}))};function O(e,t){if(n.$connector.activeItem){e.itemKey=n.$connector.activeItem.key;const i=n.getEventContext(e);i.column&&(e.internalColumnId=i.column._flowId),n.dispatchEvent(new CustomEvent(t,{detail:e}))}}n.addEventListener("vaadin-context-menu-before-open",e((function(e){!function(e){const t=n.getEventContext(e),i=t.item&&t.item.key,o=t.column&&t.column.id;n.$server.updateContextMenuTargetItem(i,o)}(n.$contextMenuConnector.openEvent)}))),n.getContextMenuBeforeOpenDetail=e((function(e){const t=n.getEventContext(e);return{key:t.item&&t.item.key||""}})),n.addEventListener("cell-activate",e(e=>{n.$connector.activeItem=e.detail.model.item,setTimeout(()=>n.$connector.activeItem=void 0)})),n.addEventListener("click",e(e=>O(e,"item-click"))),n.addEventListener("dblclick",e(e=>O(e,"item-double-click"))),n.addEventListener("column-resize",e(e=>{n._getColumnsInOrder().filter(e=>!e.hidden).forEach(e=>{e.dispatchEvent(new CustomEvent("column-drag-resize"))}),n.dispatchEvent(new CustomEvent("column-drag-resize",{detail:{resizedColumnKey:e.detail.resizedColumn._flowId}}))})),n.addEventListener("column-reorder",e(e=>{const t=n._columnTree.slice(0).pop().filter(e=>e._flowId).sort((e,t)=>e._order-t._order).map(e=>e._flowId);n.dispatchEvent(new CustomEvent("column-reorder-all-columns",{detail:{columns:t}}))})),n.cellClassNameGenerator=e((function(e,t){const n=t.item.style;if(n)return(n.row||"")+" "+(e&&n[e._flowId]||"")})),n.dropFilter=e(e=>!e.item.dropDisabled),n.dragFilter=e(e=>!e.item.dragDisabled),n.addEventListener("grid-dragstart",e(e=>{n._isSelected(e.detail.draggedItems[0])?(n.__selectionDragData?Object.keys(n.__selectionDragData).forEach(t=>{e.detail.setDragData(t,n.__selectionDragData[t])}):(n.__dragDataTypes||[]).forEach(t=>{e.detail.setDragData(t,e.detail.draggedItems.map(e=>e.dragData[t]).join("\n"))}),n.__selectionDraggedItemsCount>1&&e.detail.setDraggedItemsCount(n.__selectionDraggedItemsCount)):(n.__dragDataTypes||[]).forEach(t=>{e.detail.setDragData(t,e.detail.draggedItems[0].dragData[t])})}))}))(n)}}();n(144);var g=n(51);{class e extends g.b{static get template(){return d.a`
    <template class="header" id="defaultHeaderTemplate">
      <vaadin-checkbox id="selectAllCheckbox" aria-label="Select All" hidden\$="[[selectAllHidden]]" on-click="_onSelectAllClick" checked="[[selectAll]]">
      </vaadin-checkbox>
    </template>
    <template id="defaultBodyTemplate">
      <vaadin-checkbox aria-label="Select Row" checked="[[selected]]" on-click="_onSelectClick">
      </vaadin-checkbox>
    </template>
`}static get is(){return"vaadin-grid-flow-selection-column"}static get properties(){return{autoWidth:{type:Boolean,value:!0},width:{type:String,value:"56px"},flexGrow:{type:Number,value:0},selectAll:{type:Boolean,value:!1,notify:!0},selectAllHidden:Boolean}}constructor(){super(),this._boundOnSelectEvent=this._onSelectEvent.bind(this),this._boundOnDeselectEvent=this._onDeselectEvent.bind(this)}_prepareHeaderTemplate(){return this._prepareTemplatizer(this.$.defaultHeaderTemplate)}_prepareBodyTemplate(){return this._prepareTemplatizer(this.$.defaultBodyTemplate)}connectedCallback(){super.connectedCallback(),this._grid&&(this._grid.addEventListener("select",this._boundOnSelectEvent),this._grid.addEventListener("deselect",this._boundOnDeselectEvent))}disconnectedCallback(){if(super.disconnectedCallback(),this._grid){this._grid.removeEventListener("select",this._boundOnSelectEvent),this._grid.removeEventListener("deselect",this._boundOnDeselectEvent);if(/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&window.ShadyDOM&&this.parentElement){const e=this.parentElement,t=this.nextElementSibling;e.removeChild(this),t?e.insertBefore(this,t):e.appendChild(this)}}}_onSelectClick(e){e.target.checked?this._grid.$connector.doDeselection([e.model.item],!0):this._grid.$connector.doSelection([e.model.item],!0),e.target.checked=!e.target.checked}_onSelectAllClick(e){e.preventDefault(),this._grid.hasAttribute("disabled")?e.target.checked=!e.target.checked:this.selectAll?this.$server.deselectAll():this.$server.selectAll()}_onSelectEvent(e){}_onDeselectEvent(e){e.detail.userOriginated&&(this.selectAll=!1)}}customElements.define(e.is,e),Vaadin.GridFlowSelectionColumnElement=e}n(54),n(73),n(131),n(154),n(177),n(93),n(160),n(178),n(179),n(19),n(180),n(25),n(18),n(23),n(26),n(161),n(162),n(37);const v=function(e,t=!1){const n=document.createElement("template");n.innerHTML=e,document.head[t?"insertBefore":"appendChild"](n.content,document.head.firstChild)};let y;v('<custom-style><style include="lumo-color lumo-typography"></style></custom-style>',!0);const _=document.getElementsByTagName("script");for(let e=0;e<_.length;e++){const t=_[e];if("module"==t.getAttribute("type")&&t.getAttribute("data-app-id")&&!t["vaadin-bundle"]){y=t;break}}if(!y)throw new Error("Could not find the bundle script to identify the application id");y["vaadin-bundle"]=!0,window.Vaadin.Flow.fallbacks||(window.Vaadin.Flow.fallbacks={});const b=window.Vaadin.Flow.fallbacks;b[y.getAttribute("data-app-id")]={},b[y.getAttribute("data-app-id")].loadFallback=function(){return Promise.all([n.e(2),n.e(3)]).then(n.bind(null,186))}}}]);
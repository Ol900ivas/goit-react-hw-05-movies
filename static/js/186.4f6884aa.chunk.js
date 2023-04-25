"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{7047:function(e,t,n){n.d(t,{Z:function(){return v}});var r,o,a,i=n(7689),s=n(1087),c=n(168),u=n(7402),l=u.Z.div(r||(r=(0,c.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 280px);\n  gap: 16px;\n  margin-top: 16px;\n"]))),d=u.Z.div(o||(o=(0,c.Z)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n  > a {\n    text-decoration: none;\n  }\n"]))),f=u.Z.h3(a||(a=(0,c.Z)(["\n  padding: 8px;\n  color: #000000;\n"]))),p=n(7540),m=n(184),v=function(e){var t=e.movies,n=(0,i.TH)();return(0,m.jsx)(l,{children:t.map((function(e){var t=e.id,r=e.poster_path,o=e.title;return(0,m.jsx)(d,{children:(0,m.jsxs)(s.rU,{to:"/movies/".concat(t),state:{from:n},children:[(0,m.jsx)("img",{src:r?"".concat("https://image.tmdb.org/t/p/w300/").concat(r):p,alt:"",height:360,width:280}),(0,m.jsx)(f,{children:o})]})},t)}))})}},2186:function(e,t,n){n.r(t),n.d(t,{default:function(){return le}});var r=n(3433),o=n(5861),a=n(9439),i=n(4687),s=n.n(i),c=n(2791),u=n(1087),l=n(9142);function d(e,t,n){return(t=(0,l.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function v(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=v(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var g=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=v(e))&&(r&&(r+=" "),r+=t);return r},h=["theme","type"],y=["delay","staleId"],b=function(e){return"number"==typeof e&&!isNaN(e)},x=function(e){return"string"==typeof e},E=function(e){return"function"==typeof e},T=function(e){return x(e)||E(e)?e:null},w=function(e){return(0,c.isValidElement)(e)||x(e)||E(e)||b(e)};function O(e){var t=e.enter,n=e.exit,o=e.appendPosition,a=void 0!==o&&o,i=e.collapse,s=void 0===i||i,u=e.collapseDuration,l=void 0===u?300:u;return function(e){var o=e.children,i=e.position,u=e.preventExitTransition,d=e.done,f=e.nodeRef,p=e.isIn,m=a?"".concat(t,"--").concat(i):t,v=a?"".concat(n,"--").concat(i):n,g=(0,c.useRef)(0);return(0,c.useLayoutEffect)((function(){var e,t=f.current,n=m.split(" "),o=function e(o){var a;o.target===f.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===g.current&&"animationcancel"!==o.type&&(a=t.classList).remove.apply(a,(0,r.Z)(n)))};(e=t.classList).add.apply(e,(0,r.Z)(n)),t.addEventListener("animationend",o),t.addEventListener("animationcancel",o)}),[]),(0,c.useEffect)((function(){var e=f.current,t=function t(){e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);var r=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,d,l):d()};p||(u?t():(g.current=1,e.className+=" ".concat(v),e.addEventListener("animationend",t)))}),[p]),c.createElement(c.Fragment,null,o)}}function C(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var _={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var a=setTimeout((function(){o.apply(void 0,(0,r.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(a)}))}},I=function(e){var t=e.theme,n=e.type,r=m(e,h);return c.createElement("svg",p({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},r))},L={info:function(e){return c.createElement(I,p({},e),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return c.createElement(I,p({},e),c.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return c.createElement(I,p({},e),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return c.createElement(I,p({},e),c.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.createElement("div",{className:"Toastify__spinner"})}};function Z(e){var t=(0,c.useReducer)((function(e){return e+1}),0),n=(0,a.Z)(t,2)[1],o=(0,c.useState)([]),i=(0,a.Z)(o,2),s=i[0],u=i[1],l=(0,c.useRef)(null),d=(0,c.useRef)(new Map).current,f=function(e){return-1!==s.indexOf(e)},v=(0,c.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:f,getToast:function(e){return d.get(e)}}).current;function g(e){var t=e.containerId;!v.props.limit||t&&v.containerId!==t||(v.count-=v.queue.length,v.queue=[])}function h(e){u((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function O(){var e=v.queue.shift();Z(e.toastContent,e.toastProps,e.staleId)}function I(e,t){var r=t.delay,o=t.staleId,i=m(t,y);if(w(e)&&!function(e){return!l.current||v.props.enableMultiContainer&&e.containerId!==v.props.containerId||d.has(e.toastId)&&null==e.updateId}(i)){var s=i.toastId,u=i.updateId,f=i.data,g=v.props,I=function(){return h(s)},k=null==u;k&&v.count++;var R,N,P=p(p(p({},g),{},{style:g.toastStyle,key:v.toastKey++},Object.fromEntries(Object.entries(i).filter((function(e){var t=(0,a.Z)(e,2);t[0];return null!=t[1]})))),{},{toastId:s,updateId:u,data:f,closeToast:I,isIn:!1,className:T(i.className||g.toastClassName),bodyClassName:T(i.bodyClassName||g.bodyClassName),progressClassName:T(i.progressClassName||g.progressClassName),autoClose:!i.isLoading&&(R=i.autoClose,N=g.autoClose,!1===R||b(R)&&R>0?R:N),deleteToast:function(){var e=C(d.get(s),"removed");d.delete(s),_.emit(4,e);var t=v.queue.length;if(v.count=null==s?v.count-v.displayedToast:v.count-1,v.count<0&&(v.count=0),t>0){var r=null==s?v.props.limit:1;if(1===t||1===r)v.displayedToast++,O();else{var o=r>t?t:r;v.displayedToast=o;for(var a=0;a<o;a++)O()}}else n()}});P.iconOut=function(e){var t=e.theme,n=e.type,r=e.isLoading,o=e.icon,a=null,i={theme:t,type:n};return!1===o||(E(o)?a=o(i):(0,c.isValidElement)(o)?a=(0,c.cloneElement)(o,i):x(o)||b(o)?a=o:r?a=L.spinner():function(e){return e in L}(n)&&(a=L[n](i))),a}(P),E(i.onOpen)&&(P.onOpen=i.onOpen),E(i.onClose)&&(P.onClose=i.onClose),P.closeButton=g.closeButton,!1===i.closeButton||w(i.closeButton)?P.closeButton=i.closeButton:!0===i.closeButton&&(P.closeButton=!w(g.closeButton)||g.closeButton);var j=e;(0,c.isValidElement)(e)&&!x(e.type)?j=(0,c.cloneElement)(e,{closeToast:I,toastProps:P,data:f}):E(e)&&(j=e({closeToast:I,toastProps:P,data:f})),g.limit&&g.limit>0&&v.count>g.limit&&k?v.queue.push({toastContent:j,toastProps:P,staleId:o}):b(r)?setTimeout((function(){Z(j,P,o)}),r):Z(j,P,o)}}function Z(e,t,n){var o=t.toastId;n&&d.delete(n);var a={content:e,props:t};d.set(o,a),u((function(e){return[].concat((0,r.Z)(e),[o]).filter((function(e){return e!==n}))})),_.emit(4,C(a,null==a.props.updateId?"added":"updated"))}return(0,c.useEffect)((function(){return v.containerId=e.containerId,_.cancelEmit(3).on(0,I).on(1,(function(e){return l.current&&h(e)})).on(5,g).emit(2,v),function(){d.clear(),_.emit(3,v)}}),[]),(0,c.useEffect)((function(){v.props=e,v.isToastActive=f,v.displayedToast=s.length})),{getToastToRender:function(t){var n=new Map,r=Array.from(d.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:l,isToastActive:f}}function k(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function R(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function N(e){var t=(0,c.useState)(!1),n=(0,a.Z)(t,2),r=n[0],o=n[1],i=(0,c.useState)(!1),s=(0,a.Z)(i,2),u=s[0],l=s[1],d=(0,c.useRef)(null),f=(0,c.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,c.useRef)(e),m=e.autoClose,v=e.pauseOnHover,g=e.closeToast,h=e.onClick,y=e.closeOnClick;function b(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",O),document.addEventListener("mouseup",C),document.addEventListener("touchmove",O),document.addEventListener("touchend",C);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=k(t.nativeEvent),f.y=R(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function x(t){if(f.boundingRect){var n=f.boundingRect,r=n.top,o=n.bottom,a=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&f.x>=a&&f.x<=i&&f.y>=r&&f.y<=o?w():T()}}function T(){o(!0)}function w(){o(!1)}function O(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,r&&w(),f.x=k(t),f.y=R(t),f.delta="x"===e.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function C(){document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",C),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",C);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,c.useEffect)((function(){p.current=e})),(0,c.useEffect)((function(){return d.current&&d.current.addEventListener("d",T,{once:!0}),E(e.onOpen)&&e.onOpen((0,c.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;E(e.onClose)&&e.onClose((0,c.isValidElement)(e.children)&&e.children.props)}}),[]),(0,c.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||w(),window.addEventListener("focus",T),window.addEventListener("blur",w)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",T),window.removeEventListener("blur",w))}}),[e.pauseOnFocusLoss]);var _={onMouseDown:b,onTouchStart:b,onMouseUp:x,onTouchEnd:x};return m&&v&&(_.onMouseEnter=w,_.onMouseLeave=T),y&&(_.onClick=function(e){h&&h(e),f.canCloseOnClick&&g()}),{playToast:T,pauseToast:w,isRunning:r,preventExitTransition:u,toastRef:d,eventHandlers:_}}function P(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,o=void 0===r?"close":r;return c.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":o},c.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function j(e){var t=e.delay,n=e.isRunning,r=e.closeToast,o=e.type,a=void 0===o?"default":o,i=e.hide,s=e.className,u=e.style,l=e.controlledProgress,f=e.progress,m=e.rtl,v=e.isIn,h=e.theme,y=i||l&&0===f,b=p(p({},u),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:y?0:1});l&&(b.transform="scaleX(".concat(f,")"));var x=g("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(h),"Toastify__progress-bar--".concat(a),{"Toastify__progress-bar--rtl":m}),T=E(s)?s({rtl:m,type:a,defaultClassName:x}):g(x,s);return c.createElement("div",d({role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:T,style:b},l&&f>=1?"onTransitionEnd":"onAnimationEnd",l&&f<1?null:function(){v&&r()}))}var M=function(e){var t=N(e),n=t.isRunning,r=t.preventExitTransition,o=t.toastRef,a=t.eventHandlers,i=e.closeButton,s=e.children,u=e.autoClose,l=e.onClick,d=e.type,f=e.hideProgressBar,m=e.closeToast,v=e.transition,h=e.position,y=e.className,b=e.style,x=e.bodyClassName,T=e.bodyStyle,w=e.progressClassName,O=e.progressStyle,C=e.updateId,_=e.role,I=e.progress,L=e.rtl,Z=e.toastId,k=e.deleteToast,R=e.isIn,M=e.isLoading,B=e.iconOut,D=e.closeOnClick,z=e.theme,S=g("Toastify__toast","Toastify__toast-theme--".concat(z),"Toastify__toast--".concat(d),{"Toastify__toast--rtl":L},{"Toastify__toast--close-on-click":D}),A=E(y)?y({rtl:L,position:h,type:d,defaultClassName:S}):g(S,y),q=!!I||!u,F={closeToast:m,type:d,theme:z},H=null;return!1===i||(H=E(i)?i(F):(0,c.isValidElement)(i)?(0,c.cloneElement)(i,F):P(F)),c.createElement(v,{isIn:R,done:k,position:h,preventExitTransition:r,nodeRef:o},c.createElement("div",p(p({id:Z,onClick:l,className:A},a),{},{style:b,ref:o}),c.createElement("div",p(p({},R&&{role:_}),{},{className:E(x)?x({type:d}):g("Toastify__toast-body",x),style:T}),null!=B&&c.createElement("div",{className:g("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!M})},B),c.createElement("div",null,s)),H,c.createElement(j,p(p({},C&&!q?{key:"pb-".concat(C)}:{}),{},{rtl:L,theme:z,delay:u,isRunning:n,isIn:R,closeToast:m,hide:f,type:d,style:O,className:w,controlledProgress:q,progress:I||0}))))},B=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},D=O(B("bounce",!0)),z=(O(B("slide",!0)),O(B("zoom")),O(B("flip")),(0,c.forwardRef)((function(e,t){var n=Z(e),r=n.getToastToRender,o=n.containerRef,a=n.isToastActive,i=e.className,s=e.style,u=e.rtl,l=e.containerId;function d(e){var t=g("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":u});return E(i)?i({position:e,rtl:u,defaultClassName:t}):g(t,T(i))}return(0,c.useEffect)((function(){t&&(t.current=o.current)}),[]),c.createElement("div",{ref:o,className:"Toastify",id:l},r((function(e,t){var n=t.length?p({},s):p(p({},s),{},{pointerEvents:"none"});return c.createElement("div",{className:d(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var r=e.content,o=e.props;return c.createElement(M,p(p({},o),{},{isIn:a(o.toastId),style:p(p({},o.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(o.key)}),r)})))})))})));z.displayName="ToastContainer",z.defaultProps={position:"top-right",transition:D,autoClose:5e3,closeButton:P,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var S,A=new Map,q=[],F=1;function H(){return""+F++}function Q(e){return e&&(x(e.toastId)||b(e.toastId))?e.toastId:H()}function V(e,t){return A.size>0?_.emit(0,e,t):q.push({content:e,options:t}),t.toastId}function U(e,t){return p(p({},t),{},{type:t&&t.type||e,toastId:Q(t)})}function G(e){return function(t,n){return V(t,U(e,n))}}function W(e,t){return V(e,U("default",t))}W.loading=function(e,t){return V(e,U("default",p({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},W.promise=function(e,t,n){var r,o=t.pending,a=t.error,i=t.success;o&&(r=x(o)?W.loading(o,n):W.loading(o.render,p(p({},n),o)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=function(e,t,o){if(null!=t){var a=p(p(p({type:e},s),n),{},{data:o}),i=x(t)?{render:t}:t;return r?W.update(r,p(p({},a),i)):W(i.render,p(p({},a),i)),o}W.dismiss(r)},u=E(e)?e():e;return u.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),u},W.success=G("success"),W.info=G("info"),W.error=G("error"),W.warning=G("warning"),W.warn=W.warning,W.dark=function(e,t){return V(e,U("default",p({theme:"dark"},t)))},W.dismiss=function(e){A.size>0?_.emit(1,e):q=q.filter((function(t){return null!=e&&t.options.toastId!==e}))},W.clearWaitingQueue=function(e){return void 0===e&&(e={}),_.emit(5,e)},W.isActive=function(e){var t=!1;return A.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},W.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,r=A.get(n||S);return r&&r.getToast(e)}(e,t);if(n){var r=n.props,o=n.content,a=p(p(p({delay:100},r),t),{},{toastId:t.toastId||e,updateId:H()});a.toastId!==e&&(a.staleId=e);var i=a.render||o;delete a.render,V(i,a)}}),0)},W.done=function(e){W.update(e,{progress:1})},W.onChange=function(e){return _.on(4,e),function(){_.off(4,e)}},W.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},W.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},_.on(2,(function(e){S=e.containerId||e,A.set(S,e),q.forEach((function(e){_.emit(0,e.content,e.options)})),q=[]})).on(3,(function(e){A.delete(e.containerId||e),0===A.size&&_.off(0).off(1).off(5)}));var X,Y,K,J,$=n(7047),ee=n(168),te=n(7402),ne=n(9983);var re=te.Z.form(X||(X=(0,ee.Z)(["\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  margin-top: 20px;\n\n  text-transform: uppercase;\n"]))),oe=te.Z.input(Y||(Y=(0,ee.Z)(["\n  padding: 8px 32px 8px 8px;\n  width: 400px;\n  border-radius: 4px;\n  font: inherit;\n  border-color: rgba(0, 0, 0, 0.3);\n"]))),ae=(0,te.Z)((function(e){return(0,ne.w_)({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"}}]})(e)}))(K||(K=(0,ee.Z)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  right: 6px;\n"]))),ie=te.Z.button(J||(J=(0,ee.Z)(["\n  padding: 8px 32px 8px 8px;\n  border-radius: 4px;\n  border-color: rgba(0, 0, 0, 0.3);\n  font: inherit;\n  background-color: #f3efc3df;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    color: white;\n    background-color: #336fb3df;\n  }\n"]))),se=n(184),ce=function(e){var t=e.onSubmit;return(0,se.jsxs)(re,{onSubmit:t,children:[(0,se.jsx)(oe,{type:"text",name:"query",placeholder:"Search movies"}),(0,se.jsxs)(ie,{type:"submit",children:[(0,se.jsx)(ae,{}),"Search"]})]})},ue=n(1713),le=function(){var e,t=(0,c.useState)([]),n=(0,a.Z)(t,2),i=n[0],l=n[1],d=(0,u.lr)(),f=(0,a.Z)(d,2),p=f[0],m=f[1],v=null!==(e=p.get("query"))&&void 0!==e?e:"";(0,c.useEffect)((function(){function e(){return(e=(0,o.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,ue.E3)(v);case 2:t=e.sent,0===(n=t.map((function(e){return{id:e.id,title:e.title,poster_path:e.poster_path}}))).length&&W.error("Nothing was found. Try to change your query"),l((0,r.Z)(n));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}""!==v&&function(){e.apply(this,arguments)}()}),[v]);return(0,se.jsxs)("main",{children:[(0,se.jsx)(ce,{onSubmit:function(e){e.preventDefault();var t=e.target.query.value;""!==t.trim()?m({query:t}):W.warn("Please, enter your query"),e.currentTarget.reset()}}),(0,se.jsx)($.Z,{movies:i}),(0,se.jsx)(z,{})]})}},1713:function(e,t,n){n.d(t,{Bt:function(){return f},E3:function(){return u},Mc:function(){return l},Tg:function(){return c},sQ:function(){return s},y:function(){return d}});var r=n(5861),o=n(4687),a=n.n(o),i=n(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.params={api_key:"91d51c28e9627ca3e06710d14d157b60"};var s="https://image.tmdb.org/t/p/w300/",c=function(){var e=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/trending/movie/day");case 3:return t=e.sent,n=t.data.results,console.log("Trending:",n),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/search/movie",{params:{query:t}});case 3:return n=e.sent,r=n.data.results,console.log("MovieByName:",r),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/movie/".concat(t));case 3:return n=e.sent,r=n.data,console.log("MovieById:",r),e.abrupt("return",r);case 9:throw e.prev=9,e.t0=e.catch(0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/movie/".concat(t,"/credits"));case 3:return n=e.sent,r=n.data.cast,console.log("Cast:",r),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/movie/".concat(t,"/reviews"));case 3:return n=e.sent,r=n.data.results,console.log("Reviews:",r),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},7540:function(e,t,n){e.exports=n.p+"static/media/defaultPoster.68ae350692995e841a18.png"}}]);
//# sourceMappingURL=186.4f6884aa.chunk.js.map
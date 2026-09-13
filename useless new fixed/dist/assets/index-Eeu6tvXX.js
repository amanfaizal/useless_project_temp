(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function og(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Eu={exports:{}},Io={},wu={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function Pv(){if(Bp)return gt;Bp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),d=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),_=Symbol.iterator;function x(N){return N===null||typeof N!="object"?null:(N=_&&N[_]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function y(N,K,ye){this.props=N,this.context=K,this.refs=M,this.updater=ye||S}y.prototype.isReactComponent={},y.prototype.setState=function(N,K){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,K,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function v(){}v.prototype=y.prototype;function O(N,K,ye){this.props=N,this.context=K,this.refs=M,this.updater=ye||S}var D=O.prototype=new v;D.constructor=O,T(D,y.prototype),D.isPureReactComponent=!0;var b=Array.isArray,H=Object.prototype.hasOwnProperty,F={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function G(N,K,ye){var Y,fe={},pe=null,ge=null;if(K!=null)for(Y in K.ref!==void 0&&(ge=K.ref),K.key!==void 0&&(pe=""+K.key),K)H.call(K,Y)&&!k.hasOwnProperty(Y)&&(fe[Y]=K[Y]);var Ae=arguments.length-2;if(Ae===1)fe.children=ye;else if(1<Ae){for(var Ne=Array(Ae),De=0;De<Ae;De++)Ne[De]=arguments[De+2];fe.children=Ne}if(N&&N.defaultProps)for(Y in Ae=N.defaultProps,Ae)fe[Y]===void 0&&(fe[Y]=Ae[Y]);return{$$typeof:s,type:N,key:pe,ref:ge,props:fe,_owner:F.current}}function P(N,K){return{$$typeof:s,type:N.type,key:K,ref:N.ref,props:N.props,_owner:N._owner}}function A(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function B(N){var K={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ye){return K[ye]})}var oe=/\/+/g;function Q(N,K){return typeof N=="object"&&N!==null&&N.key!=null?B(""+N.key):K.toString(36)}function ue(N,K,ye,Y,fe){var pe=typeof N;(pe==="undefined"||pe==="boolean")&&(N=null);var ge=!1;if(N===null)ge=!0;else switch(pe){case"string":case"number":ge=!0;break;case"object":switch(N.$$typeof){case s:case e:ge=!0}}if(ge)return ge=N,fe=fe(ge),N=Y===""?"."+Q(ge,0):Y,b(fe)?(ye="",N!=null&&(ye=N.replace(oe,"$&/")+"/"),ue(fe,K,ye,"",function(De){return De})):fe!=null&&(A(fe)&&(fe=P(fe,ye+(!fe.key||ge&&ge.key===fe.key?"":(""+fe.key).replace(oe,"$&/")+"/")+N)),K.push(fe)),1;if(ge=0,Y=Y===""?".":Y+":",b(N))for(var Ae=0;Ae<N.length;Ae++){pe=N[Ae];var Ne=Y+Q(pe,Ae);ge+=ue(pe,K,ye,Ne,fe)}else if(Ne=x(N),typeof Ne=="function")for(N=Ne.call(N),Ae=0;!(pe=N.next()).done;)pe=pe.value,Ne=Y+Q(pe,Ae++),ge+=ue(pe,K,ye,Ne,fe);else if(pe==="object")throw K=String(N),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return ge}function te(N,K,ye){if(N==null)return N;var Y=[],fe=0;return ue(N,Y,"","",function(pe){return K.call(ye,pe,fe++)}),Y}function le(N){if(N._status===-1){var K=N._result;K=K(),K.then(function(ye){(N._status===0||N._status===-1)&&(N._status=1,N._result=ye)},function(ye){(N._status===0||N._status===-1)&&(N._status=2,N._result=ye)}),N._status===-1&&(N._status=0,N._result=K)}if(N._status===1)return N._result.default;throw N._result}var re={current:null},I={transition:null},ee={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:I,ReactCurrentOwner:F};function $(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:te,forEach:function(N,K,ye){te(N,function(){K.apply(this,arguments)},ye)},count:function(N){var K=0;return te(N,function(){K++}),K},toArray:function(N){return te(N,function(K){return K})||[]},only:function(N){if(!A(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},gt.Component=y,gt.Fragment=n,gt.Profiler=a,gt.PureComponent=O,gt.StrictMode=r,gt.Suspense=h,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,gt.act=$,gt.cloneElement=function(N,K,ye){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var Y=T({},N.props),fe=N.key,pe=N.ref,ge=N._owner;if(K!=null){if(K.ref!==void 0&&(pe=K.ref,ge=F.current),K.key!==void 0&&(fe=""+K.key),N.type&&N.type.defaultProps)var Ae=N.type.defaultProps;for(Ne in K)H.call(K,Ne)&&!k.hasOwnProperty(Ne)&&(Y[Ne]=K[Ne]===void 0&&Ae!==void 0?Ae[Ne]:K[Ne])}var Ne=arguments.length-2;if(Ne===1)Y.children=ye;else if(1<Ne){Ae=Array(Ne);for(var De=0;De<Ne;De++)Ae[De]=arguments[De+2];Y.children=Ae}return{$$typeof:s,type:N.type,key:fe,ref:pe,props:Y,_owner:ge}},gt.createContext=function(N){return N={$$typeof:d,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},gt.createElement=G,gt.createFactory=function(N){var K=G.bind(null,N);return K.type=N,K},gt.createRef=function(){return{current:null}},gt.forwardRef=function(N){return{$$typeof:u,render:N}},gt.isValidElement=A,gt.lazy=function(N){return{$$typeof:p,_payload:{_status:-1,_result:N},_init:le}},gt.memo=function(N,K){return{$$typeof:g,type:N,compare:K===void 0?null:K}},gt.startTransition=function(N){var K=I.transition;I.transition={};try{N()}finally{I.transition=K}},gt.unstable_act=$,gt.useCallback=function(N,K){return re.current.useCallback(N,K)},gt.useContext=function(N){return re.current.useContext(N)},gt.useDebugValue=function(){},gt.useDeferredValue=function(N){return re.current.useDeferredValue(N)},gt.useEffect=function(N,K){return re.current.useEffect(N,K)},gt.useId=function(){return re.current.useId()},gt.useImperativeHandle=function(N,K,ye){return re.current.useImperativeHandle(N,K,ye)},gt.useInsertionEffect=function(N,K){return re.current.useInsertionEffect(N,K)},gt.useLayoutEffect=function(N,K){return re.current.useLayoutEffect(N,K)},gt.useMemo=function(N,K){return re.current.useMemo(N,K)},gt.useReducer=function(N,K,ye){return re.current.useReducer(N,K,ye)},gt.useRef=function(N){return re.current.useRef(N)},gt.useState=function(N){return re.current.useState(N)},gt.useSyncExternalStore=function(N,K,ye){return re.current.useSyncExternalStore(N,K,ye)},gt.useTransition=function(){return re.current.useTransition()},gt.version="18.3.1",gt}var Hp;function tf(){return Hp||(Hp=1,wu.exports=Pv()),wu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp;function Nv(){if(Vp)return Io;Vp=1;var s=tf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(u,h,g){var p,_={},x=null,S=null;g!==void 0&&(x=""+g),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(S=h.ref);for(p in h)r.call(h,p)&&!l.hasOwnProperty(p)&&(_[p]=h[p]);if(u&&u.defaultProps)for(p in h=u.defaultProps,h)_[p]===void 0&&(_[p]=h[p]);return{$$typeof:e,type:u,key:x,ref:S,props:_,_owner:a.current}}return Io.Fragment=n,Io.jsx=d,Io.jsxs=d,Io}var Gp;function Lv(){return Gp||(Gp=1,Eu.exports=Nv()),Eu.exports}var R=Lv(),Ue=tf();const ag=og(Ue);var il={},Tu={exports:{}},Fn={},Au={exports:{}},Cu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wp;function Dv(){return Wp||(Wp=1,(function(s){function e(I,ee){var $=I.length;I.push(ee);e:for(;0<$;){var N=$-1>>>1,K=I[N];if(0<a(K,ee))I[N]=ee,I[$]=K,$=N;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var ee=I[0],$=I.pop();if($!==ee){I[0]=$;e:for(var N=0,K=I.length,ye=K>>>1;N<ye;){var Y=2*(N+1)-1,fe=I[Y],pe=Y+1,ge=I[pe];if(0>a(fe,$))pe<K&&0>a(ge,fe)?(I[N]=ge,I[pe]=$,N=pe):(I[N]=fe,I[Y]=$,N=Y);else if(pe<K&&0>a(ge,$))I[N]=ge,I[pe]=$,N=pe;else break e}}return ee}function a(I,ee){var $=I.sortIndex-ee.sortIndex;return $!==0?$:I.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var d=Date,u=d.now();s.unstable_now=function(){return d.now()-u}}var h=[],g=[],p=1,_=null,x=3,S=!1,T=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(I){for(var ee=n(g);ee!==null;){if(ee.callback===null)r(g);else if(ee.startTime<=I)r(g),ee.sortIndex=ee.expirationTime,e(h,ee);else break;ee=n(g)}}function b(I){if(M=!1,D(I),!T)if(n(h)!==null)T=!0,le(H);else{var ee=n(g);ee!==null&&re(b,ee.startTime-I)}}function H(I,ee){T=!1,M&&(M=!1,v(G),G=-1),S=!0;var $=x;try{for(D(ee),_=n(h);_!==null&&(!(_.expirationTime>ee)||I&&!B());){var N=_.callback;if(typeof N=="function"){_.callback=null,x=_.priorityLevel;var K=N(_.expirationTime<=ee);ee=s.unstable_now(),typeof K=="function"?_.callback=K:_===n(h)&&r(h),D(ee)}else r(h);_=n(h)}if(_!==null)var ye=!0;else{var Y=n(g);Y!==null&&re(b,Y.startTime-ee),ye=!1}return ye}finally{_=null,x=$,S=!1}}var F=!1,k=null,G=-1,P=5,A=-1;function B(){return!(s.unstable_now()-A<P)}function oe(){if(k!==null){var I=s.unstable_now();A=I;var ee=!0;try{ee=k(!0,I)}finally{ee?Q():(F=!1,k=null)}}else F=!1}var Q;if(typeof O=="function")Q=function(){O(oe)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,te=ue.port2;ue.port1.onmessage=oe,Q=function(){te.postMessage(null)}}else Q=function(){y(oe,0)};function le(I){k=I,F||(F=!0,Q())}function re(I,ee){G=y(function(){I(s.unstable_now())},ee)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(I){I.callback=null},s.unstable_continueExecution=function(){T||S||(T=!0,le(H))},s.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<I?Math.floor(1e3/I):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(I){switch(x){case 1:case 2:case 3:var ee=3;break;default:ee=x}var $=x;x=ee;try{return I()}finally{x=$}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(I,ee){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var $=x;x=I;try{return ee()}finally{x=$}},s.unstable_scheduleCallback=function(I,ee,$){var N=s.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?N+$:N):$=N,I){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=$+K,I={id:p++,callback:ee,priorityLevel:I,startTime:$,expirationTime:K,sortIndex:-1},$>N?(I.sortIndex=$,e(g,I),n(h)===null&&I===n(g)&&(M?(v(G),G=-1):M=!0,re(b,$-N))):(I.sortIndex=K,e(h,I),T||S||(T=!0,le(H))),I},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(I){var ee=x;return function(){var $=x;x=ee;try{return I.apply(this,arguments)}finally{x=$}}}})(Cu)),Cu}var jp;function Iv(){return jp||(jp=1,Au.exports=Dv()),Au.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp;function Uv(){if(Xp)return Fn;Xp=1;var s=tf(),e=Iv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},_={};function x(t){return h.call(_,t)?!0:h.call(p,t)?!1:g.test(t)?_[t]=!0:(p[t]=!0,!1)}function S(t,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,o,c){if(i===null||typeof i>"u"||S(t,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function M(t,i,o,c,f,m,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=m,this.removeEmptyString=E}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new M(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new M(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new M(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new M(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new M(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new M(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new M(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new M(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new M(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function O(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,O);y[i]=new M(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,O);y[i]=new M(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,O);y[i]=new M(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new M(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new M(t,1,!1,t.toLowerCase(),null,!0,!0)});function D(t,i,o,c){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,f,c)&&(o=null),c||f===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):f.mustUseProperty?t[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,c=f.attributeNamespace,o===null?t.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,c?t.setAttributeNS(c,i,o):t.setAttribute(i,o))))}var b=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),F=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),B=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),re=Symbol.for("react.offscreen"),I=Symbol.iterator;function ee(t){return t===null||typeof t!="object"?null:(t=I&&t[I]||t["@@iterator"],typeof t=="function"?t:null)}var $=Object.assign,N;function K(t){if(N===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+t}var ye=!1;function Y(t,i){if(!t||ye)return"";ye=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ce){var c=ce}Reflect.construct(t,[],i)}else{try{i.call()}catch(ce){c=ce}t.call(i.prototype)}else{try{throw Error()}catch(ce){c=ce}t()}}catch(ce){if(ce&&c&&typeof ce.stack=="string"){for(var f=ce.stack.split(`
`),m=c.stack.split(`
`),E=f.length-1,U=m.length-1;1<=E&&0<=U&&f[E]!==m[U];)U--;for(;1<=E&&0<=U;E--,U--)if(f[E]!==m[U]){if(E!==1||U!==1)do if(E--,U--,0>U||f[E]!==m[U]){var V=`
`+f[E].replace(" at new "," at ");return t.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",t.displayName)),V}while(1<=E&&0<=U);break}}}finally{ye=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?K(t):""}function fe(t){switch(t.tag){case 5:return K(t.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return t=Y(t.type,!1),t;case 11:return t=Y(t.type.render,!1),t;case 1:return t=Y(t.type,!0),t;default:return""}}function pe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case k:return"Fragment";case F:return"Portal";case P:return"Profiler";case G:return"StrictMode";case Q:return"Suspense";case ue:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case B:return(t.displayName||"Context")+".Consumer";case A:return(t._context.displayName||"Context")+".Provider";case oe:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case te:return i=t.displayName||null,i!==null?i:pe(t.type)||"Memo";case le:i=t._payload,t=t._init;try{return pe(t(i))}catch{}}return null}function ge(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(i);case 8:return i===G?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ne(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function De(t){var i=Ne(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),c=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){c=""+E,m.call(this,E)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function lt(t){t._valueTracker||(t._valueTracker=De(t))}function pt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return t&&(c=Ne(t)?t.checked?"true":"false":t.value),t=c,t!==o?(i.setValue(t),!0):!1}function it(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function z(t,i){var o=i.checked;return $({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function un(t,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=Ae(i.value!=null?i.value:o),t._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ft(t,i){i=i.checked,i!=null&&D(t,"checked",i,!1)}function ct(t,i){ft(t,i);var o=Ae(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?wt(t,i.type,o):i.hasOwnProperty("defaultValue")&&wt(t,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function $e(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function wt(t,i,o){(i!=="number"||it(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var je=Array.isArray;function L(t,i,o,c){if(t=t.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=i.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&c&&(t[o].defaultSelected=!0)}else{for(o=""+Ae(o),i=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,c&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function w(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return $({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ne(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(je(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Ae(o)}}function he(t,i){var o=Ae(i.value),c=Ae(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),c!=null&&(t.defaultValue=""+c)}function _e(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function me(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ze(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?me(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ce,ke=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,f){MSApp.execUnsafeLocalFunction(function(){return t(i,o,c,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ce.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ht(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var we={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},He=["Webkit","ms","Moz","O"];Object.keys(we).forEach(function(t){He.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),we[i]=we[t]})});function Ze(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||we.hasOwnProperty(t)&&we[t]?(""+i).trim():i+"px"}function tt(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,f=Ze(o,i[o],c);o==="float"&&(o="cssFloat"),c?t.setProperty(o,f):t[o]=f}}var Ve=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mt(t,i){if(i){if(Ve[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function st(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bt=null;function j(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Re=null,de=null,ve=null;function Ie(t){if(t=xo(t)){if(typeof Re!="function")throw Error(n(280));var i=t.stateNode;i&&(i=_a(i),Re(t.stateNode,t.type,i))}}function Le(t){de?ve?ve.push(t):ve=[t]:de=t}function ot(){if(de){var t=de,i=ve;if(ve=de=null,Ie(t),i)for(t=0;t<i.length;t++)Ie(i[t])}}function It(t,i){return t(i)}function $t(){}var St=!1;function Pn(t,i,o){if(St)return t(i,o);St=!0;try{return It(t,i,o)}finally{St=!1,(de!==null||ve!==null)&&($t(),ot())}}function Mn(t,i){var o=t.stateNode;if(o===null)return null;var c=_a(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var es=!1;if(u)try{var ji={};Object.defineProperty(ji,"passive",{get:function(){es=!0}}),window.addEventListener("test",ji,ji),window.removeEventListener("test",ji,ji)}catch{es=!1}function Ei(t,i,o,c,f,m,E,U,V){var ce=Array.prototype.slice.call(arguments,3);try{i.apply(o,ce)}catch(Se){this.onError(Se)}}var wi=!1,wr=null,Tr=!1,Xi=null,Ko={onError:function(t){wi=!0,wr=t}};function ts(t,i,o,c,f,m,E,U,V){wi=!1,wr=null,Ei.apply(Ko,arguments)}function Zo(t,i,o,c,f,m,E,U,V){if(ts.apply(this,arguments),wi){if(wi){var ce=wr;wi=!1,wr=null}else throw Error(n(198));Tr||(Tr=!0,Xi=ce)}}function pi(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Qo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Jo(t){if(pi(t)!==t)throw Error(n(188))}function Xl(t){var i=t.alternate;if(!i){if(i=pi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,c=i;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(c=f.return,c!==null){o=c;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return Jo(f),t;if(m===c)return Jo(f),i;m=m.sibling}throw Error(n(188))}if(o.return!==c.return)o=f,c=m;else{for(var E=!1,U=f.child;U;){if(U===o){E=!0,o=f,c=m;break}if(U===c){E=!0,c=f,o=m;break}U=U.sibling}if(!E){for(U=m.child;U;){if(U===o){E=!0,o=m,c=f;break}if(U===c){E=!0,c=m,o=f;break}U=U.sibling}if(!E)throw Error(n(189))}}if(o.alternate!==c)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function ea(t){return t=Xl(t),t!==null?ta(t):null}function ta(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ta(t);if(i!==null)return i;t=t.sibling}return null}var na=e.unstable_scheduleCallback,C=e.unstable_cancelCallback,X=e.unstable_shouldYield,ae=e.unstable_requestPaint,J=e.unstable_now,q=e.unstable_getCurrentPriorityLevel,Ee=e.unstable_ImmediatePriority,be=e.unstable_UserBlockingPriority,Fe=e.unstable_NormalPriority,Ge=e.unstable_LowPriority,nt=e.unstable_IdlePriority,et=null,Xe=null;function _t(t){if(Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(et,t,void 0,(t.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:yt,Vt=Math.log,kt=Math.LN2;function yt(t){return t>>>=0,t===0?32:31-(Vt(t)/kt|0)|0}var Ke=64,Gt=4194304;function vt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pn(t,i){var o=t.pendingLanes;if(o===0)return 0;var c=0,f=t.suspendedLanes,m=t.pingedLanes,E=o&268435455;if(E!==0){var U=E&~f;U!==0?c=vt(U):(m&=E,m!==0&&(c=vt(m)))}else E=o&~f,E!==0?c=vt(E):m!==0&&(c=vt(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,m=i&-i,f>=m||f===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=c;0<i;)o=31-at(i),f=1<<o,c|=t[o],i&=~f;return c}function qi(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function En(t,i){for(var o=t.suspendedLanes,c=t.pingedLanes,f=t.expirationTimes,m=t.pendingLanes;0<m;){var E=31-at(m),U=1<<E,V=f[E];V===-1?((U&o)===0||(U&c)!==0)&&(f[E]=qi(U,i)):V<=i&&(t.expiredLanes|=U),m&=~U}}function Ti(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Lt(){var t=Ke;return Ke<<=1,(Ke&4194240)===0&&(Ke=64),t}function mn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function tn(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-at(i),t[i]=o}function dn(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<o;){var f=31-at(o),m=1<<f;i[f]=0,c[f]=-1,t[f]=-1,o&=~m}}function nn(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var c=31-at(o),f=1<<c;f&i|t[c]&i&&(t[c]|=i),o&=~f}}var Mt=0;function mi(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var xf,ql,yf,Sf,Mf,Yl=!1,ia=[],Yi=null,$i=null,Ki=null,no=new Map,io=new Map,Zi=[],Qg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ef(t,i){switch(t){case"focusin":case"focusout":Yi=null;break;case"dragenter":case"dragleave":$i=null;break;case"mouseover":case"mouseout":Ki=null;break;case"pointerover":case"pointerout":no.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":io.delete(i.pointerId)}}function ro(t,i,o,c,f,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:m,targetContainers:[f]},i!==null&&(i=xo(i),i!==null&&ql(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Jg(t,i,o,c,f){switch(i){case"focusin":return Yi=ro(Yi,t,i,o,c,f),!0;case"dragenter":return $i=ro($i,t,i,o,c,f),!0;case"mouseover":return Ki=ro(Ki,t,i,o,c,f),!0;case"pointerover":var m=f.pointerId;return no.set(m,ro(no.get(m)||null,t,i,o,c,f)),!0;case"gotpointercapture":return m=f.pointerId,io.set(m,ro(io.get(m)||null,t,i,o,c,f)),!0}return!1}function wf(t){var i=Ar(t.target);if(i!==null){var o=pi(i);if(o!==null){if(i=o.tag,i===13){if(i=Qo(o),i!==null){t.blockedOn=i,Mf(t.priority,function(){yf(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ra(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Kl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var c=new o.constructor(o.type,o);bt=c,o.target.dispatchEvent(c),bt=null}else return i=xo(o),i!==null&&ql(i),t.blockedOn=o,!1;i.shift()}return!0}function Tf(t,i,o){ra(t)&&o.delete(i)}function e0(){Yl=!1,Yi!==null&&ra(Yi)&&(Yi=null),$i!==null&&ra($i)&&($i=null),Ki!==null&&ra(Ki)&&(Ki=null),no.forEach(Tf),io.forEach(Tf)}function so(t,i){t.blockedOn===i&&(t.blockedOn=null,Yl||(Yl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,e0)))}function oo(t){function i(f){return so(f,t)}if(0<ia.length){so(ia[0],t);for(var o=1;o<ia.length;o++){var c=ia[o];c.blockedOn===t&&(c.blockedOn=null)}}for(Yi!==null&&so(Yi,t),$i!==null&&so($i,t),Ki!==null&&so(Ki,t),no.forEach(i),io.forEach(i),o=0;o<Zi.length;o++)c=Zi[o],c.blockedOn===t&&(c.blockedOn=null);for(;0<Zi.length&&(o=Zi[0],o.blockedOn===null);)wf(o),o.blockedOn===null&&Zi.shift()}var ns=b.ReactCurrentBatchConfig,sa=!0;function t0(t,i,o,c){var f=Mt,m=ns.transition;ns.transition=null;try{Mt=1,$l(t,i,o,c)}finally{Mt=f,ns.transition=m}}function n0(t,i,o,c){var f=Mt,m=ns.transition;ns.transition=null;try{Mt=4,$l(t,i,o,c)}finally{Mt=f,ns.transition=m}}function $l(t,i,o,c){if(sa){var f=Kl(t,i,o,c);if(f===null)hc(t,i,c,oa,o),Ef(t,c);else if(Jg(f,t,i,o,c))c.stopPropagation();else if(Ef(t,c),i&4&&-1<Qg.indexOf(t)){for(;f!==null;){var m=xo(f);if(m!==null&&xf(m),m=Kl(t,i,o,c),m===null&&hc(t,i,c,oa,o),m===f)break;f=m}f!==null&&c.stopPropagation()}else hc(t,i,c,null,o)}}var oa=null;function Kl(t,i,o,c){if(oa=null,t=j(c),t=Ar(t),t!==null)if(i=pi(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Qo(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return oa=t,null}function Af(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q()){case Ee:return 1;case be:return 4;case Fe:case Ge:return 16;case nt:return 536870912;default:return 16}default:return 16}}var Qi=null,Zl=null,aa=null;function Cf(){if(aa)return aa;var t,i=Zl,o=i.length,c,f="value"in Qi?Qi.value:Qi.textContent,m=f.length;for(t=0;t<o&&i[t]===f[t];t++);var E=o-t;for(c=1;c<=E&&i[o-c]===f[m-c];c++);return aa=f.slice(t,1<c?1-c:void 0)}function la(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ca(){return!0}function Rf(){return!1}function kn(t){function i(o,c,f,m,E){this._reactName=o,this._targetInst=f,this.type=c,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(o=t[U],this[U]=o?o(m):m[U]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ca:Rf,this.isPropagationStopped=Rf,this}return $(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ca)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ca)},persist:function(){},isPersistent:ca}),i}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ql=kn(is),ao=$({},is,{view:0,detail:0}),i0=kn(ao),Jl,ec,lo,ua=$({},ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==lo&&(lo&&t.type==="mousemove"?(Jl=t.screenX-lo.screenX,ec=t.screenY-lo.screenY):ec=Jl=0,lo=t),Jl)},movementY:function(t){return"movementY"in t?t.movementY:ec}}),bf=kn(ua),r0=$({},ua,{dataTransfer:0}),s0=kn(r0),o0=$({},ao,{relatedTarget:0}),tc=kn(o0),a0=$({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),l0=kn(a0),c0=$({},is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),u0=kn(c0),d0=$({},is,{data:0}),Pf=kn(d0),f0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},h0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},p0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function m0(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=p0[t])?!!i[t]:!1}function nc(){return m0}var g0=$({},ao,{key:function(t){if(t.key){var i=f0[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=la(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?h0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nc,charCode:function(t){return t.type==="keypress"?la(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?la(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),v0=kn(g0),_0=$({},ua,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nf=kn(_0),x0=$({},ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nc}),y0=kn(x0),S0=$({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),M0=kn(S0),E0=$({},ua,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),w0=kn(E0),T0=[9,13,27,32],ic=u&&"CompositionEvent"in window,co=null;u&&"documentMode"in document&&(co=document.documentMode);var A0=u&&"TextEvent"in window&&!co,Lf=u&&(!ic||co&&8<co&&11>=co),Df=" ",If=!1;function Uf(t,i){switch(t){case"keyup":return T0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ff(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rs=!1;function C0(t,i){switch(t){case"compositionend":return Ff(i);case"keypress":return i.which!==32?null:(If=!0,Df);case"textInput":return t=i.data,t===Df&&If?null:t;default:return null}}function R0(t,i){if(rs)return t==="compositionend"||!ic&&Uf(t,i)?(t=Cf(),aa=Zl=Qi=null,rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Lf&&i.locale!=="ko"?null:i.data;default:return null}}var b0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Of(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!b0[t.type]:i==="textarea"}function kf(t,i,o,c){Le(c),i=ma(i,"onChange"),0<i.length&&(o=new Ql("onChange","change",null,o,c),t.push({event:o,listeners:i}))}var uo=null,fo=null;function P0(t){nh(t,0)}function da(t){var i=cs(t);if(pt(i))return t}function N0(t,i){if(t==="change")return i}var zf=!1;if(u){var rc;if(u){var sc="oninput"in document;if(!sc){var Bf=document.createElement("div");Bf.setAttribute("oninput","return;"),sc=typeof Bf.oninput=="function"}rc=sc}else rc=!1;zf=rc&&(!document.documentMode||9<document.documentMode)}function Hf(){uo&&(uo.detachEvent("onpropertychange",Vf),fo=uo=null)}function Vf(t){if(t.propertyName==="value"&&da(fo)){var i=[];kf(i,fo,t,j(t)),Pn(P0,i)}}function L0(t,i,o){t==="focusin"?(Hf(),uo=i,fo=o,uo.attachEvent("onpropertychange",Vf)):t==="focusout"&&Hf()}function D0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return da(fo)}function I0(t,i){if(t==="click")return da(i)}function U0(t,i){if(t==="input"||t==="change")return da(i)}function F0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Jn=typeof Object.is=="function"?Object.is:F0;function ho(t,i){if(Jn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var f=o[c];if(!h.call(i,f)||!Jn(t[f],i[f]))return!1}return!0}function Gf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wf(t,i){var o=Gf(t);t=0;for(var c;o;){if(o.nodeType===3){if(c=t+o.textContent.length,t<=i&&c>=i)return{node:o,offset:i-t};t=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Gf(o)}}function jf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?jf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Xf(){for(var t=window,i=it();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=it(t.document)}return i}function oc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function O0(t){var i=Xf(),o=t.focusedElem,c=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&jf(o.ownerDocument.documentElement,o)){if(c!==null&&oc(o)){if(i=c.start,t=c.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=o.textContent.length,m=Math.min(c.start,f);c=c.end===void 0?m:Math.min(c.end,f),!t.extend&&m>c&&(f=c,c=m,m=f),f=Wf(o,m);var E=Wf(o,c);f&&E&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),m>c?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var k0=u&&"documentMode"in document&&11>=document.documentMode,ss=null,ac=null,po=null,lc=!1;function qf(t,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;lc||ss==null||ss!==it(c)||(c=ss,"selectionStart"in c&&oc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),po&&ho(po,c)||(po=c,c=ma(ac,"onSelect"),0<c.length&&(i=new Ql("onSelect","select",null,i,o),t.push({event:i,listeners:c}),i.target=ss)))}function fa(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var os={animationend:fa("Animation","AnimationEnd"),animationiteration:fa("Animation","AnimationIteration"),animationstart:fa("Animation","AnimationStart"),transitionend:fa("Transition","TransitionEnd")},cc={},Yf={};u&&(Yf=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function ha(t){if(cc[t])return cc[t];if(!os[t])return t;var i=os[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Yf)return cc[t]=i[o];return t}var $f=ha("animationend"),Kf=ha("animationiteration"),Zf=ha("animationstart"),Qf=ha("transitionend"),Jf=new Map,eh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ji(t,i){Jf.set(t,i),l(i,[t])}for(var uc=0;uc<eh.length;uc++){var dc=eh[uc],z0=dc.toLowerCase(),B0=dc[0].toUpperCase()+dc.slice(1);Ji(z0,"on"+B0)}Ji($f,"onAnimationEnd"),Ji(Kf,"onAnimationIteration"),Ji(Zf,"onAnimationStart"),Ji("dblclick","onDoubleClick"),Ji("focusin","onFocus"),Ji("focusout","onBlur"),Ji(Qf,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),H0=new Set("cancel close invalid load scroll toggle".split(" ").concat(mo));function th(t,i,o){var c=t.type||"unknown-event";t.currentTarget=o,Zo(c,i,void 0,t),t.currentTarget=null}function nh(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var c=t[o],f=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var E=c.length-1;0<=E;E--){var U=c[E],V=U.instance,ce=U.currentTarget;if(U=U.listener,V!==m&&f.isPropagationStopped())break e;th(f,U,ce),m=V}else for(E=0;E<c.length;E++){if(U=c[E],V=U.instance,ce=U.currentTarget,U=U.listener,V!==m&&f.isPropagationStopped())break e;th(f,U,ce),m=V}}}if(Tr)throw t=Xi,Tr=!1,Xi=null,t}function Ut(t,i){var o=i[xc];o===void 0&&(o=i[xc]=new Set);var c=t+"__bubble";o.has(c)||(ih(i,t,2,!1),o.add(c))}function fc(t,i,o){var c=0;i&&(c|=4),ih(o,t,c,i)}var pa="_reactListening"+Math.random().toString(36).slice(2);function go(t){if(!t[pa]){t[pa]=!0,r.forEach(function(o){o!=="selectionchange"&&(H0.has(o)||fc(o,!1,t),fc(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[pa]||(i[pa]=!0,fc("selectionchange",!1,i))}}function ih(t,i,o,c){switch(Af(i)){case 1:var f=t0;break;case 4:f=n0;break;default:f=$l}o=f.bind(null,i,o,t),f=void 0,!es||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?t.addEventListener(i,o,{capture:!0,passive:f}):t.addEventListener(i,o,!0):f!==void 0?t.addEventListener(i,o,{passive:f}):t.addEventListener(i,o,!1)}function hc(t,i,o,c,f){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var U=c.stateNode.containerInfo;if(U===f||U.nodeType===8&&U.parentNode===f)break;if(E===4)for(E=c.return;E!==null;){var V=E.tag;if((V===3||V===4)&&(V=E.stateNode.containerInfo,V===f||V.nodeType===8&&V.parentNode===f))return;E=E.return}for(;U!==null;){if(E=Ar(U),E===null)return;if(V=E.tag,V===5||V===6){c=m=E;continue e}U=U.parentNode}}c=c.return}Pn(function(){var ce=m,Se=j(o),Me=[];e:{var xe=Jf.get(t);if(xe!==void 0){var Oe=Ql,We=t;switch(t){case"keypress":if(la(o)===0)break e;case"keydown":case"keyup":Oe=v0;break;case"focusin":We="focus",Oe=tc;break;case"focusout":We="blur",Oe=tc;break;case"beforeblur":case"afterblur":Oe=tc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Oe=bf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Oe=s0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Oe=y0;break;case $f:case Kf:case Zf:Oe=l0;break;case Qf:Oe=M0;break;case"scroll":Oe=i0;break;case"wheel":Oe=w0;break;case"copy":case"cut":case"paste":Oe=u0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Oe=Nf}var qe=(i&4)!==0,Xt=!qe&&t==="scroll",Z=qe?xe!==null?xe+"Capture":null:xe;qe=[];for(var W=ce,ie;W!==null;){ie=W;var Te=ie.stateNode;if(ie.tag===5&&Te!==null&&(ie=Te,Z!==null&&(Te=Mn(W,Z),Te!=null&&qe.push(vo(W,Te,ie)))),Xt)break;W=W.return}0<qe.length&&(xe=new Oe(xe,We,null,o,Se),Me.push({event:xe,listeners:qe}))}}if((i&7)===0){e:{if(xe=t==="mouseover"||t==="pointerover",Oe=t==="mouseout"||t==="pointerout",xe&&o!==bt&&(We=o.relatedTarget||o.fromElement)&&(Ar(We)||We[Ai]))break e;if((Oe||xe)&&(xe=Se.window===Se?Se:(xe=Se.ownerDocument)?xe.defaultView||xe.parentWindow:window,Oe?(We=o.relatedTarget||o.toElement,Oe=ce,We=We?Ar(We):null,We!==null&&(Xt=pi(We),We!==Xt||We.tag!==5&&We.tag!==6)&&(We=null)):(Oe=null,We=ce),Oe!==We)){if(qe=bf,Te="onMouseLeave",Z="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(qe=Nf,Te="onPointerLeave",Z="onPointerEnter",W="pointer"),Xt=Oe==null?xe:cs(Oe),ie=We==null?xe:cs(We),xe=new qe(Te,W+"leave",Oe,o,Se),xe.target=Xt,xe.relatedTarget=ie,Te=null,Ar(Se)===ce&&(qe=new qe(Z,W+"enter",We,o,Se),qe.target=ie,qe.relatedTarget=Xt,Te=qe),Xt=Te,Oe&&We)t:{for(qe=Oe,Z=We,W=0,ie=qe;ie;ie=as(ie))W++;for(ie=0,Te=Z;Te;Te=as(Te))ie++;for(;0<W-ie;)qe=as(qe),W--;for(;0<ie-W;)Z=as(Z),ie--;for(;W--;){if(qe===Z||Z!==null&&qe===Z.alternate)break t;qe=as(qe),Z=as(Z)}qe=null}else qe=null;Oe!==null&&rh(Me,xe,Oe,qe,!1),We!==null&&Xt!==null&&rh(Me,Xt,We,qe,!0)}}e:{if(xe=ce?cs(ce):window,Oe=xe.nodeName&&xe.nodeName.toLowerCase(),Oe==="select"||Oe==="input"&&xe.type==="file")var Ye=N0;else if(Of(xe))if(zf)Ye=U0;else{Ye=D0;var Qe=L0}else(Oe=xe.nodeName)&&Oe.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(Ye=I0);if(Ye&&(Ye=Ye(t,ce))){kf(Me,Ye,o,Se);break e}Qe&&Qe(t,xe,ce),t==="focusout"&&(Qe=xe._wrapperState)&&Qe.controlled&&xe.type==="number"&&wt(xe,"number",xe.value)}switch(Qe=ce?cs(ce):window,t){case"focusin":(Of(Qe)||Qe.contentEditable==="true")&&(ss=Qe,ac=ce,po=null);break;case"focusout":po=ac=ss=null;break;case"mousedown":lc=!0;break;case"contextmenu":case"mouseup":case"dragend":lc=!1,qf(Me,o,Se);break;case"selectionchange":if(k0)break;case"keydown":case"keyup":qf(Me,o,Se)}var Je;if(ic)e:{switch(t){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else rs?Uf(t,o)&&(rt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(rt="onCompositionStart");rt&&(Lf&&o.locale!=="ko"&&(rs||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&rs&&(Je=Cf()):(Qi=Se,Zl="value"in Qi?Qi.value:Qi.textContent,rs=!0)),Qe=ma(ce,rt),0<Qe.length&&(rt=new Pf(rt,t,null,o,Se),Me.push({event:rt,listeners:Qe}),Je?rt.data=Je:(Je=Ff(o),Je!==null&&(rt.data=Je)))),(Je=A0?C0(t,o):R0(t,o))&&(ce=ma(ce,"onBeforeInput"),0<ce.length&&(Se=new Pf("onBeforeInput","beforeinput",null,o,Se),Me.push({event:Se,listeners:ce}),Se.data=Je))}nh(Me,i)})}function vo(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ma(t,i){for(var o=i+"Capture",c=[];t!==null;){var f=t,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=Mn(t,o),m!=null&&c.unshift(vo(t,m,f)),m=Mn(t,i),m!=null&&c.push(vo(t,m,f))),t=t.return}return c}function as(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rh(t,i,o,c,f){for(var m=i._reactName,E=[];o!==null&&o!==c;){var U=o,V=U.alternate,ce=U.stateNode;if(V!==null&&V===c)break;U.tag===5&&ce!==null&&(U=ce,f?(V=Mn(o,m),V!=null&&E.unshift(vo(o,V,U))):f||(V=Mn(o,m),V!=null&&E.push(vo(o,V,U)))),o=o.return}E.length!==0&&t.push({event:i,listeners:E})}var V0=/\r\n?/g,G0=/\u0000|\uFFFD/g;function sh(t){return(typeof t=="string"?t:""+t).replace(V0,`
`).replace(G0,"")}function ga(t,i,o){if(i=sh(i),sh(t)!==i&&o)throw Error(n(425))}function va(){}var pc=null,mc=null;function gc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var vc=typeof setTimeout=="function"?setTimeout:void 0,W0=typeof clearTimeout=="function"?clearTimeout:void 0,oh=typeof Promise=="function"?Promise:void 0,j0=typeof queueMicrotask=="function"?queueMicrotask:typeof oh<"u"?function(t){return oh.resolve(null).then(t).catch(X0)}:vc;function X0(t){setTimeout(function(){throw t})}function _c(t,i){var o=i,c=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(c===0){t.removeChild(f),oo(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=f}while(o);oo(i)}function er(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function ah(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var ls=Math.random().toString(36).slice(2),gi="__reactFiber$"+ls,_o="__reactProps$"+ls,Ai="__reactContainer$"+ls,xc="__reactEvents$"+ls,q0="__reactListeners$"+ls,Y0="__reactHandles$"+ls;function Ar(t){var i=t[gi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Ai]||o[gi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=ah(t);t!==null;){if(o=t[gi])return o;t=ah(t)}return i}t=o,o=t.parentNode}return null}function xo(t){return t=t[gi]||t[Ai],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function _a(t){return t[_o]||null}var yc=[],us=-1;function tr(t){return{current:t}}function Ft(t){0>us||(t.current=yc[us],yc[us]=null,us--)}function Dt(t,i){us++,yc[us]=t.current,t.current=i}var nr={},gn=tr(nr),Nn=tr(!1),Cr=nr;function ds(t,i){var o=t.type.contextTypes;if(!o)return nr;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in o)f[m]=i[m];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function Ln(t){return t=t.childContextTypes,t!=null}function xa(){Ft(Nn),Ft(gn)}function lh(t,i,o){if(gn.current!==nr)throw Error(n(168));Dt(gn,i),Dt(Nn,o)}function ch(t,i,o){var c=t.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(n(108,ge(t)||"Unknown",f));return $({},o,c)}function ya(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||nr,Cr=gn.current,Dt(gn,t),Dt(Nn,Nn.current),!0}function uh(t,i,o){var c=t.stateNode;if(!c)throw Error(n(169));o?(t=ch(t,i,Cr),c.__reactInternalMemoizedMergedChildContext=t,Ft(Nn),Ft(gn),Dt(gn,t)):Ft(Nn),Dt(Nn,o)}var Ci=null,Sa=!1,Sc=!1;function dh(t){Ci===null?Ci=[t]:Ci.push(t)}function $0(t){Sa=!0,dh(t)}function ir(){if(!Sc&&Ci!==null){Sc=!0;var t=0,i=Mt;try{var o=Ci;for(Mt=1;t<o.length;t++){var c=o[t];do c=c(!0);while(c!==null)}Ci=null,Sa=!1}catch(f){throw Ci!==null&&(Ci=Ci.slice(t+1)),na(Ee,ir),f}finally{Mt=i,Sc=!1}}return null}var fs=[],hs=0,Ma=null,Ea=0,Wn=[],jn=0,Rr=null,Ri=1,bi="";function br(t,i){fs[hs++]=Ea,fs[hs++]=Ma,Ma=t,Ea=i}function fh(t,i,o){Wn[jn++]=Ri,Wn[jn++]=bi,Wn[jn++]=Rr,Rr=t;var c=Ri;t=bi;var f=32-at(c)-1;c&=~(1<<f),o+=1;var m=32-at(i)+f;if(30<m){var E=f-f%5;m=(c&(1<<E)-1).toString(32),c>>=E,f-=E,Ri=1<<32-at(i)+f|o<<f|c,bi=m+t}else Ri=1<<m|o<<f|c,bi=t}function Mc(t){t.return!==null&&(br(t,1),fh(t,1,0))}function Ec(t){for(;t===Ma;)Ma=fs[--hs],fs[hs]=null,Ea=fs[--hs],fs[hs]=null;for(;t===Rr;)Rr=Wn[--jn],Wn[jn]=null,bi=Wn[--jn],Wn[jn]=null,Ri=Wn[--jn],Wn[jn]=null}var zn=null,Bn=null,zt=!1,ei=null;function hh(t,i){var o=$n(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function ph(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,zn=t,Bn=er(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,zn=t,Bn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Rr!==null?{id:Ri,overflow:bi}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=$n(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,zn=t,Bn=null,!0):!1;default:return!1}}function wc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Tc(t){if(zt){var i=Bn;if(i){var o=i;if(!ph(t,i)){if(wc(t))throw Error(n(418));i=er(o.nextSibling);var c=zn;i&&ph(t,i)?hh(c,o):(t.flags=t.flags&-4097|2,zt=!1,zn=t)}}else{if(wc(t))throw Error(n(418));t.flags=t.flags&-4097|2,zt=!1,zn=t}}}function mh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;zn=t}function wa(t){if(t!==zn)return!1;if(!zt)return mh(t),zt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!gc(t.type,t.memoizedProps)),i&&(i=Bn)){if(wc(t))throw gh(),Error(n(418));for(;i;)hh(t,i),i=er(i.nextSibling)}if(mh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Bn=er(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Bn=null}}else Bn=zn?er(t.stateNode.nextSibling):null;return!0}function gh(){for(var t=Bn;t;)t=er(t.nextSibling)}function ps(){Bn=zn=null,zt=!1}function Ac(t){ei===null?ei=[t]:ei.push(t)}var K0=b.ReactCurrentBatchConfig;function yo(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var c=o.stateNode}if(!c)throw Error(n(147,t));var f=c,m=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(E){var U=f.refs;E===null?delete U[m]:U[m]=E},i._stringRef=m,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Ta(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function vh(t){var i=t._init;return i(t._payload)}function _h(t){function i(Z,W){if(t){var ie=Z.deletions;ie===null?(Z.deletions=[W],Z.flags|=16):ie.push(W)}}function o(Z,W){if(!t)return null;for(;W!==null;)i(Z,W),W=W.sibling;return null}function c(Z,W){for(Z=new Map;W!==null;)W.key!==null?Z.set(W.key,W):Z.set(W.index,W),W=W.sibling;return Z}function f(Z,W){return Z=dr(Z,W),Z.index=0,Z.sibling=null,Z}function m(Z,W,ie){return Z.index=ie,t?(ie=Z.alternate,ie!==null?(ie=ie.index,ie<W?(Z.flags|=2,W):ie):(Z.flags|=2,W)):(Z.flags|=1048576,W)}function E(Z){return t&&Z.alternate===null&&(Z.flags|=2),Z}function U(Z,W,ie,Te){return W===null||W.tag!==6?(W=vu(ie,Z.mode,Te),W.return=Z,W):(W=f(W,ie),W.return=Z,W)}function V(Z,W,ie,Te){var Ye=ie.type;return Ye===k?Se(Z,W,ie.props.children,Te,ie.key):W!==null&&(W.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===le&&vh(Ye)===W.type)?(Te=f(W,ie.props),Te.ref=yo(Z,W,ie),Te.return=Z,Te):(Te=$a(ie.type,ie.key,ie.props,null,Z.mode,Te),Te.ref=yo(Z,W,ie),Te.return=Z,Te)}function ce(Z,W,ie,Te){return W===null||W.tag!==4||W.stateNode.containerInfo!==ie.containerInfo||W.stateNode.implementation!==ie.implementation?(W=_u(ie,Z.mode,Te),W.return=Z,W):(W=f(W,ie.children||[]),W.return=Z,W)}function Se(Z,W,ie,Te,Ye){return W===null||W.tag!==7?(W=Or(ie,Z.mode,Te,Ye),W.return=Z,W):(W=f(W,ie),W.return=Z,W)}function Me(Z,W,ie){if(typeof W=="string"&&W!==""||typeof W=="number")return W=vu(""+W,Z.mode,ie),W.return=Z,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case H:return ie=$a(W.type,W.key,W.props,null,Z.mode,ie),ie.ref=yo(Z,null,W),ie.return=Z,ie;case F:return W=_u(W,Z.mode,ie),W.return=Z,W;case le:var Te=W._init;return Me(Z,Te(W._payload),ie)}if(je(W)||ee(W))return W=Or(W,Z.mode,ie,null),W.return=Z,W;Ta(Z,W)}return null}function xe(Z,W,ie,Te){var Ye=W!==null?W.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number")return Ye!==null?null:U(Z,W,""+ie,Te);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case H:return ie.key===Ye?V(Z,W,ie,Te):null;case F:return ie.key===Ye?ce(Z,W,ie,Te):null;case le:return Ye=ie._init,xe(Z,W,Ye(ie._payload),Te)}if(je(ie)||ee(ie))return Ye!==null?null:Se(Z,W,ie,Te,null);Ta(Z,ie)}return null}function Oe(Z,W,ie,Te,Ye){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return Z=Z.get(ie)||null,U(W,Z,""+Te,Ye);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case H:return Z=Z.get(Te.key===null?ie:Te.key)||null,V(W,Z,Te,Ye);case F:return Z=Z.get(Te.key===null?ie:Te.key)||null,ce(W,Z,Te,Ye);case le:var Qe=Te._init;return Oe(Z,W,ie,Qe(Te._payload),Ye)}if(je(Te)||ee(Te))return Z=Z.get(ie)||null,Se(W,Z,Te,Ye,null);Ta(W,Te)}return null}function We(Z,W,ie,Te){for(var Ye=null,Qe=null,Je=W,rt=W=0,on=null;Je!==null&&rt<ie.length;rt++){Je.index>rt?(on=Je,Je=null):on=Je.sibling;var Tt=xe(Z,Je,ie[rt],Te);if(Tt===null){Je===null&&(Je=on);break}t&&Je&&Tt.alternate===null&&i(Z,Je),W=m(Tt,W,rt),Qe===null?Ye=Tt:Qe.sibling=Tt,Qe=Tt,Je=on}if(rt===ie.length)return o(Z,Je),zt&&br(Z,rt),Ye;if(Je===null){for(;rt<ie.length;rt++)Je=Me(Z,ie[rt],Te),Je!==null&&(W=m(Je,W,rt),Qe===null?Ye=Je:Qe.sibling=Je,Qe=Je);return zt&&br(Z,rt),Ye}for(Je=c(Z,Je);rt<ie.length;rt++)on=Oe(Je,Z,rt,ie[rt],Te),on!==null&&(t&&on.alternate!==null&&Je.delete(on.key===null?rt:on.key),W=m(on,W,rt),Qe===null?Ye=on:Qe.sibling=on,Qe=on);return t&&Je.forEach(function(fr){return i(Z,fr)}),zt&&br(Z,rt),Ye}function qe(Z,W,ie,Te){var Ye=ee(ie);if(typeof Ye!="function")throw Error(n(150));if(ie=Ye.call(ie),ie==null)throw Error(n(151));for(var Qe=Ye=null,Je=W,rt=W=0,on=null,Tt=ie.next();Je!==null&&!Tt.done;rt++,Tt=ie.next()){Je.index>rt?(on=Je,Je=null):on=Je.sibling;var fr=xe(Z,Je,Tt.value,Te);if(fr===null){Je===null&&(Je=on);break}t&&Je&&fr.alternate===null&&i(Z,Je),W=m(fr,W,rt),Qe===null?Ye=fr:Qe.sibling=fr,Qe=fr,Je=on}if(Tt.done)return o(Z,Je),zt&&br(Z,rt),Ye;if(Je===null){for(;!Tt.done;rt++,Tt=ie.next())Tt=Me(Z,Tt.value,Te),Tt!==null&&(W=m(Tt,W,rt),Qe===null?Ye=Tt:Qe.sibling=Tt,Qe=Tt);return zt&&br(Z,rt),Ye}for(Je=c(Z,Je);!Tt.done;rt++,Tt=ie.next())Tt=Oe(Je,Z,rt,Tt.value,Te),Tt!==null&&(t&&Tt.alternate!==null&&Je.delete(Tt.key===null?rt:Tt.key),W=m(Tt,W,rt),Qe===null?Ye=Tt:Qe.sibling=Tt,Qe=Tt);return t&&Je.forEach(function(bv){return i(Z,bv)}),zt&&br(Z,rt),Ye}function Xt(Z,W,ie,Te){if(typeof ie=="object"&&ie!==null&&ie.type===k&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case H:e:{for(var Ye=ie.key,Qe=W;Qe!==null;){if(Qe.key===Ye){if(Ye=ie.type,Ye===k){if(Qe.tag===7){o(Z,Qe.sibling),W=f(Qe,ie.props.children),W.return=Z,Z=W;break e}}else if(Qe.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===le&&vh(Ye)===Qe.type){o(Z,Qe.sibling),W=f(Qe,ie.props),W.ref=yo(Z,Qe,ie),W.return=Z,Z=W;break e}o(Z,Qe);break}else i(Z,Qe);Qe=Qe.sibling}ie.type===k?(W=Or(ie.props.children,Z.mode,Te,ie.key),W.return=Z,Z=W):(Te=$a(ie.type,ie.key,ie.props,null,Z.mode,Te),Te.ref=yo(Z,W,ie),Te.return=Z,Z=Te)}return E(Z);case F:e:{for(Qe=ie.key;W!==null;){if(W.key===Qe)if(W.tag===4&&W.stateNode.containerInfo===ie.containerInfo&&W.stateNode.implementation===ie.implementation){o(Z,W.sibling),W=f(W,ie.children||[]),W.return=Z,Z=W;break e}else{o(Z,W);break}else i(Z,W);W=W.sibling}W=_u(ie,Z.mode,Te),W.return=Z,Z=W}return E(Z);case le:return Qe=ie._init,Xt(Z,W,Qe(ie._payload),Te)}if(je(ie))return We(Z,W,ie,Te);if(ee(ie))return qe(Z,W,ie,Te);Ta(Z,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"?(ie=""+ie,W!==null&&W.tag===6?(o(Z,W.sibling),W=f(W,ie),W.return=Z,Z=W):(o(Z,W),W=vu(ie,Z.mode,Te),W.return=Z,Z=W),E(Z)):o(Z,W)}return Xt}var ms=_h(!0),xh=_h(!1),Aa=tr(null),Ca=null,gs=null,Cc=null;function Rc(){Cc=gs=Ca=null}function bc(t){var i=Aa.current;Ft(Aa),t._currentValue=i}function Pc(t,i,o){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===o)break;t=t.return}}function vs(t,i){Ca=t,Cc=gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Dn=!0),t.firstContext=null)}function Xn(t){var i=t._currentValue;if(Cc!==t)if(t={context:t,memoizedValue:i,next:null},gs===null){if(Ca===null)throw Error(n(308));gs=t,Ca.dependencies={lanes:0,firstContext:t}}else gs=gs.next=t;return i}var Pr=null;function Nc(t){Pr===null?Pr=[t]:Pr.push(t)}function yh(t,i,o,c){var f=i.interleaved;return f===null?(o.next=o,Nc(i)):(o.next=f.next,f.next=o),i.interleaved=o,Pi(t,c)}function Pi(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var rr=!1;function Lc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ni(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function sr(t,i,o){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(Et&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,Pi(t,o)}return f=c.interleaved,f===null?(i.next=i,Nc(c)):(i.next=f.next,f.next=i),c.interleaved=i,Pi(t,o)}function Ra(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=t.pendingLanes,o|=c,i.lanes=o,nn(t,o)}}function Mh(t,i){var o=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?f=m=E:m=m.next=E,o=o.next}while(o!==null);m===null?f=m=i:m=m.next=i}else f=m=i;o={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:c.shared,effects:c.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function ba(t,i,o,c){var f=t.updateQueue;rr=!1;var m=f.firstBaseUpdate,E=f.lastBaseUpdate,U=f.shared.pending;if(U!==null){f.shared.pending=null;var V=U,ce=V.next;V.next=null,E===null?m=ce:E.next=ce,E=V;var Se=t.alternate;Se!==null&&(Se=Se.updateQueue,U=Se.lastBaseUpdate,U!==E&&(U===null?Se.firstBaseUpdate=ce:U.next=ce,Se.lastBaseUpdate=V))}if(m!==null){var Me=f.baseState;E=0,Se=ce=V=null,U=m;do{var xe=U.lane,Oe=U.eventTime;if((c&xe)===xe){Se!==null&&(Se=Se.next={eventTime:Oe,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var We=t,qe=U;switch(xe=i,Oe=o,qe.tag){case 1:if(We=qe.payload,typeof We=="function"){Me=We.call(Oe,Me,xe);break e}Me=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=qe.payload,xe=typeof We=="function"?We.call(Oe,Me,xe):We,xe==null)break e;Me=$({},Me,xe);break e;case 2:rr=!0}}U.callback!==null&&U.lane!==0&&(t.flags|=64,xe=f.effects,xe===null?f.effects=[U]:xe.push(U))}else Oe={eventTime:Oe,lane:xe,tag:U.tag,payload:U.payload,callback:U.callback,next:null},Se===null?(ce=Se=Oe,V=Me):Se=Se.next=Oe,E|=xe;if(U=U.next,U===null){if(U=f.shared.pending,U===null)break;xe=U,U=xe.next,xe.next=null,f.lastBaseUpdate=xe,f.shared.pending=null}}while(!0);if(Se===null&&(V=Me),f.baseState=V,f.firstBaseUpdate=ce,f.lastBaseUpdate=Se,i=f.shared.interleaved,i!==null){f=i;do E|=f.lane,f=f.next;while(f!==i)}else m===null&&(f.shared.lanes=0);Dr|=E,t.lanes=E,t.memoizedState=Me}}function Eh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var c=t[i],f=c.callback;if(f!==null){if(c.callback=null,c=o,typeof f!="function")throw Error(n(191,f));f.call(c)}}}var So={},vi=tr(So),Mo=tr(So),Eo=tr(So);function Nr(t){if(t===So)throw Error(n(174));return t}function Dc(t,i){switch(Dt(Eo,i),Dt(Mo,t),Dt(vi,So),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ze(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=ze(i,t)}Ft(vi),Dt(vi,i)}function _s(){Ft(vi),Ft(Mo),Ft(Eo)}function wh(t){Nr(Eo.current);var i=Nr(vi.current),o=ze(i,t.type);i!==o&&(Dt(Mo,t),Dt(vi,o))}function Ic(t){Mo.current===t&&(Ft(vi),Ft(Mo))}var Bt=tr(0);function Pa(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Uc=[];function Fc(){for(var t=0;t<Uc.length;t++)Uc[t]._workInProgressVersionPrimary=null;Uc.length=0}var Na=b.ReactCurrentDispatcher,Oc=b.ReactCurrentBatchConfig,Lr=0,Ht=null,Kt=null,rn=null,La=!1,wo=!1,To=0,Z0=0;function vn(){throw Error(n(321))}function kc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Jn(t[o],i[o]))return!1;return!0}function zc(t,i,o,c,f,m){if(Lr=m,Ht=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Na.current=t===null||t.memoizedState===null?tv:nv,t=o(c,f),wo){m=0;do{if(wo=!1,To=0,25<=m)throw Error(n(301));m+=1,rn=Kt=null,i.updateQueue=null,Na.current=iv,t=o(c,f)}while(wo)}if(Na.current=Ua,i=Kt!==null&&Kt.next!==null,Lr=0,rn=Kt=Ht=null,La=!1,i)throw Error(n(300));return t}function Bc(){var t=To!==0;return To=0,t}function _i(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?Ht.memoizedState=rn=t:rn=rn.next=t,rn}function qn(){if(Kt===null){var t=Ht.alternate;t=t!==null?t.memoizedState:null}else t=Kt.next;var i=rn===null?Ht.memoizedState:rn.next;if(i!==null)rn=i,Kt=t;else{if(t===null)throw Error(n(310));Kt=t,t={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},rn===null?Ht.memoizedState=rn=t:rn=rn.next=t}return rn}function Ao(t,i){return typeof i=="function"?i(t):i}function Hc(t){var i=qn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var c=Kt,f=c.baseQueue,m=o.pending;if(m!==null){if(f!==null){var E=f.next;f.next=m.next,m.next=E}c.baseQueue=f=m,o.pending=null}if(f!==null){m=f.next,c=c.baseState;var U=E=null,V=null,ce=m;do{var Se=ce.lane;if((Lr&Se)===Se)V!==null&&(V=V.next={lane:0,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),c=ce.hasEagerState?ce.eagerState:t(c,ce.action);else{var Me={lane:Se,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null};V===null?(U=V=Me,E=c):V=V.next=Me,Ht.lanes|=Se,Dr|=Se}ce=ce.next}while(ce!==null&&ce!==m);V===null?E=c:V.next=U,Jn(c,i.memoizedState)||(Dn=!0),i.memoizedState=c,i.baseState=E,i.baseQueue=V,o.lastRenderedState=c}if(t=o.interleaved,t!==null){f=t;do m=f.lane,Ht.lanes|=m,Dr|=m,f=f.next;while(f!==t)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Vc(t){var i=qn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var c=o.dispatch,f=o.pending,m=i.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do m=t(m,E.action),E=E.next;while(E!==f);Jn(m,i.memoizedState)||(Dn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,c]}function Th(){}function Ah(t,i){var o=Ht,c=qn(),f=i(),m=!Jn(c.memoizedState,f);if(m&&(c.memoizedState=f,Dn=!0),c=c.queue,Gc(bh.bind(null,o,c,t),[t]),c.getSnapshot!==i||m||rn!==null&&rn.memoizedState.tag&1){if(o.flags|=2048,Co(9,Rh.bind(null,o,c,f,i),void 0,null),sn===null)throw Error(n(349));(Lr&30)!==0||Ch(o,i,f)}return f}function Ch(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Rh(t,i,o,c){i.value=o,i.getSnapshot=c,Ph(i)&&Nh(t)}function bh(t,i,o){return o(function(){Ph(i)&&Nh(t)})}function Ph(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Jn(t,o)}catch{return!0}}function Nh(t){var i=Pi(t,1);i!==null&&ri(i,t,1,-1)}function Lh(t){var i=_i();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:t},i.queue=t,t=t.dispatch=ev.bind(null,Ht,t),[i.memoizedState,t]}function Co(t,i,o,c){return t={tag:t,create:i,destroy:o,deps:c,next:null},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(c=o.next,o.next=t,t.next=c,i.lastEffect=t)),t}function Dh(){return qn().memoizedState}function Da(t,i,o,c){var f=_i();Ht.flags|=t,f.memoizedState=Co(1|i,o,void 0,c===void 0?null:c)}function Ia(t,i,o,c){var f=qn();c=c===void 0?null:c;var m=void 0;if(Kt!==null){var E=Kt.memoizedState;if(m=E.destroy,c!==null&&kc(c,E.deps)){f.memoizedState=Co(i,o,m,c);return}}Ht.flags|=t,f.memoizedState=Co(1|i,o,m,c)}function Ih(t,i){return Da(8390656,8,t,i)}function Gc(t,i){return Ia(2048,8,t,i)}function Uh(t,i){return Ia(4,2,t,i)}function Fh(t,i){return Ia(4,4,t,i)}function Oh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function kh(t,i,o){return o=o!=null?o.concat([t]):null,Ia(4,4,Oh.bind(null,i,t),o)}function Wc(){}function zh(t,i){var o=qn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&kc(i,c[1])?c[0]:(o.memoizedState=[t,i],t)}function Bh(t,i){var o=qn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&kc(i,c[1])?c[0]:(t=t(),o.memoizedState=[t,i],t)}function Hh(t,i,o){return(Lr&21)===0?(t.baseState&&(t.baseState=!1,Dn=!0),t.memoizedState=o):(Jn(o,i)||(o=Lt(),Ht.lanes|=o,Dr|=o,t.baseState=!0),i)}function Q0(t,i){var o=Mt;Mt=o!==0&&4>o?o:4,t(!0);var c=Oc.transition;Oc.transition={};try{t(!1),i()}finally{Mt=o,Oc.transition=c}}function Vh(){return qn().memoizedState}function J0(t,i,o){var c=cr(t);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},Gh(t))Wh(i,o);else if(o=yh(t,i,o,c),o!==null){var f=Tn();ri(o,t,c,f),jh(o,i,c)}}function ev(t,i,o){var c=cr(t),f={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(Gh(t))Wh(i,f);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,U=m(E,o);if(f.hasEagerState=!0,f.eagerState=U,Jn(U,E)){var V=i.interleaved;V===null?(f.next=f,Nc(i)):(f.next=V.next,V.next=f),i.interleaved=f;return}}catch{}finally{}o=yh(t,i,f,c),o!==null&&(f=Tn(),ri(o,t,c,f),jh(o,i,c))}}function Gh(t){var i=t.alternate;return t===Ht||i!==null&&i===Ht}function Wh(t,i){wo=La=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function jh(t,i,o){if((o&4194240)!==0){var c=i.lanes;c&=t.pendingLanes,o|=c,i.lanes=o,nn(t,o)}}var Ua={readContext:Xn,useCallback:vn,useContext:vn,useEffect:vn,useImperativeHandle:vn,useInsertionEffect:vn,useLayoutEffect:vn,useMemo:vn,useReducer:vn,useRef:vn,useState:vn,useDebugValue:vn,useDeferredValue:vn,useTransition:vn,useMutableSource:vn,useSyncExternalStore:vn,useId:vn,unstable_isNewReconciler:!1},tv={readContext:Xn,useCallback:function(t,i){return _i().memoizedState=[t,i===void 0?null:i],t},useContext:Xn,useEffect:Ih,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Da(4194308,4,Oh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Da(4194308,4,t,i)},useInsertionEffect:function(t,i){return Da(4,2,t,i)},useMemo:function(t,i){var o=_i();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var c=_i();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},c.queue=t,t=t.dispatch=J0.bind(null,Ht,t),[c.memoizedState,t]},useRef:function(t){var i=_i();return t={current:t},i.memoizedState=t},useState:Lh,useDebugValue:Wc,useDeferredValue:function(t){return _i().memoizedState=t},useTransition:function(){var t=Lh(!1),i=t[0];return t=Q0.bind(null,t[1]),_i().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var c=Ht,f=_i();if(zt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),sn===null)throw Error(n(349));(Lr&30)!==0||Ch(c,i,o)}f.memoizedState=o;var m={value:o,getSnapshot:i};return f.queue=m,Ih(bh.bind(null,c,m,t),[t]),c.flags|=2048,Co(9,Rh.bind(null,c,m,o,i),void 0,null),o},useId:function(){var t=_i(),i=sn.identifierPrefix;if(zt){var o=bi,c=Ri;o=(c&~(1<<32-at(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=To++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Z0++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},nv={readContext:Xn,useCallback:zh,useContext:Xn,useEffect:Gc,useImperativeHandle:kh,useInsertionEffect:Uh,useLayoutEffect:Fh,useMemo:Bh,useReducer:Hc,useRef:Dh,useState:function(){return Hc(Ao)},useDebugValue:Wc,useDeferredValue:function(t){var i=qn();return Hh(i,Kt.memoizedState,t)},useTransition:function(){var t=Hc(Ao)[0],i=qn().memoizedState;return[t,i]},useMutableSource:Th,useSyncExternalStore:Ah,useId:Vh,unstable_isNewReconciler:!1},iv={readContext:Xn,useCallback:zh,useContext:Xn,useEffect:Gc,useImperativeHandle:kh,useInsertionEffect:Uh,useLayoutEffect:Fh,useMemo:Bh,useReducer:Vc,useRef:Dh,useState:function(){return Vc(Ao)},useDebugValue:Wc,useDeferredValue:function(t){var i=qn();return Kt===null?i.memoizedState=t:Hh(i,Kt.memoizedState,t)},useTransition:function(){var t=Vc(Ao)[0],i=qn().memoizedState;return[t,i]},useMutableSource:Th,useSyncExternalStore:Ah,useId:Vh,unstable_isNewReconciler:!1};function ti(t,i){if(t&&t.defaultProps){i=$({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function jc(t,i,o,c){i=t.memoizedState,o=o(c,i),o=o==null?i:$({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Fa={isMounted:function(t){return(t=t._reactInternals)?pi(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var c=Tn(),f=cr(t),m=Ni(c,f);m.payload=i,o!=null&&(m.callback=o),i=sr(t,m,f),i!==null&&(ri(i,t,f,c),Ra(i,t,f))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var c=Tn(),f=cr(t),m=Ni(c,f);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=sr(t,m,f),i!==null&&(ri(i,t,f,c),Ra(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=Tn(),c=cr(t),f=Ni(o,c);f.tag=2,i!=null&&(f.callback=i),i=sr(t,f,c),i!==null&&(ri(i,t,c,o),Ra(i,t,c))}};function Xh(t,i,o,c,f,m,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,m,E):i.prototype&&i.prototype.isPureReactComponent?!ho(o,c)||!ho(f,m):!0}function qh(t,i,o){var c=!1,f=nr,m=i.contextType;return typeof m=="object"&&m!==null?m=Xn(m):(f=Ln(i)?Cr:gn.current,c=i.contextTypes,m=(c=c!=null)?ds(t,f):nr),i=new i(o,m),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Fa,t.stateNode=i,i._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=m),i}function Yh(t,i,o,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==t&&Fa.enqueueReplaceState(i,i.state,null)}function Xc(t,i,o,c){var f=t.stateNode;f.props=o,f.state=t.memoizedState,f.refs={},Lc(t);var m=i.contextType;typeof m=="object"&&m!==null?f.context=Xn(m):(m=Ln(i)?Cr:gn.current,f.context=ds(t,m)),f.state=t.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(jc(t,i,m,o),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Fa.enqueueReplaceState(f,f.state,null),ba(t,o,f,c),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function xs(t,i){try{var o="",c=i;do o+=fe(c),c=c.return;while(c);var f=o}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:t,source:i,stack:f,digest:null}}function qc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Yc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var rv=typeof WeakMap=="function"?WeakMap:Map;function $h(t,i,o){o=Ni(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){Ga||(Ga=!0,cu=c),Yc(t,i)},o}function Kh(t,i,o){o=Ni(-1,o),o.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;o.payload=function(){return c(f)},o.callback=function(){Yc(t,i)}}var m=t.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){Yc(t,i),typeof c!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function Zh(t,i,o){var c=t.pingCache;if(c===null){c=t.pingCache=new rv;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(o)||(f.add(o),t=_v.bind(null,t,i,o),i.then(t,t))}function Qh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Jh(t,i,o,c,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ni(-1,1),i.tag=2,sr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var sv=b.ReactCurrentOwner,Dn=!1;function wn(t,i,o,c){i.child=t===null?xh(i,null,o,c):ms(i,t.child,o,c)}function ep(t,i,o,c,f){o=o.render;var m=i.ref;return vs(i,f),c=zc(t,i,o,c,m,f),o=Bc(),t!==null&&!Dn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Li(t,i,f)):(zt&&o&&Mc(i),i.flags|=1,wn(t,i,c,f),i.child)}function tp(t,i,o,c,f){if(t===null){var m=o.type;return typeof m=="function"&&!gu(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,np(t,i,m,c,f)):(t=$a(o.type,null,c,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,(t.lanes&f)===0){var E=m.memoizedProps;if(o=o.compare,o=o!==null?o:ho,o(E,c)&&t.ref===i.ref)return Li(t,i,f)}return i.flags|=1,t=dr(m,c),t.ref=i.ref,t.return=i,i.child=t}function np(t,i,o,c,f){if(t!==null){var m=t.memoizedProps;if(ho(m,c)&&t.ref===i.ref)if(Dn=!1,i.pendingProps=c=m,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Dn=!0);else return i.lanes=t.lanes,Li(t,i,f)}return $c(t,i,o,c,f)}function ip(t,i,o){var c=i.pendingProps,f=c.children,m=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(Ss,Hn),Hn|=o;else{if((o&1073741824)===0)return t=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Dt(Ss,Hn),Hn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:o,Dt(Ss,Hn),Hn|=c}else m!==null?(c=m.baseLanes|o,i.memoizedState=null):c=o,Dt(Ss,Hn),Hn|=c;return wn(t,i,f,o),i.child}function rp(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function $c(t,i,o,c,f){var m=Ln(o)?Cr:gn.current;return m=ds(i,m),vs(i,f),o=zc(t,i,o,c,m,f),c=Bc(),t!==null&&!Dn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Li(t,i,f)):(zt&&c&&Mc(i),i.flags|=1,wn(t,i,o,f),i.child)}function sp(t,i,o,c,f){if(Ln(o)){var m=!0;ya(i)}else m=!1;if(vs(i,f),i.stateNode===null)ka(t,i),qh(i,o,c),Xc(i,o,c,f),c=!0;else if(t===null){var E=i.stateNode,U=i.memoizedProps;E.props=U;var V=E.context,ce=o.contextType;typeof ce=="object"&&ce!==null?ce=Xn(ce):(ce=Ln(o)?Cr:gn.current,ce=ds(i,ce));var Se=o.getDerivedStateFromProps,Me=typeof Se=="function"||typeof E.getSnapshotBeforeUpdate=="function";Me||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==c||V!==ce)&&Yh(i,E,c,ce),rr=!1;var xe=i.memoizedState;E.state=xe,ba(i,c,E,f),V=i.memoizedState,U!==c||xe!==V||Nn.current||rr?(typeof Se=="function"&&(jc(i,o,Se,c),V=i.memoizedState),(U=rr||Xh(i,o,U,c,xe,V,ce))?(Me||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=V),E.props=c,E.state=V,E.context=ce,c=U):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{E=i.stateNode,Sh(t,i),U=i.memoizedProps,ce=i.type===i.elementType?U:ti(i.type,U),E.props=ce,Me=i.pendingProps,xe=E.context,V=o.contextType,typeof V=="object"&&V!==null?V=Xn(V):(V=Ln(o)?Cr:gn.current,V=ds(i,V));var Oe=o.getDerivedStateFromProps;(Se=typeof Oe=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==Me||xe!==V)&&Yh(i,E,c,V),rr=!1,xe=i.memoizedState,E.state=xe,ba(i,c,E,f);var We=i.memoizedState;U!==Me||xe!==We||Nn.current||rr?(typeof Oe=="function"&&(jc(i,o,Oe,c),We=i.memoizedState),(ce=rr||Xh(i,o,ce,c,xe,We,V)||!1)?(Se||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,We,V),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,We,V)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||U===t.memoizedProps&&xe===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&xe===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=We),E.props=c,E.state=We,E.context=V,c=ce):(typeof E.componentDidUpdate!="function"||U===t.memoizedProps&&xe===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&xe===t.memoizedState||(i.flags|=1024),c=!1)}return Kc(t,i,o,c,m,f)}function Kc(t,i,o,c,f,m){rp(t,i);var E=(i.flags&128)!==0;if(!c&&!E)return f&&uh(i,o,!1),Li(t,i,m);c=i.stateNode,sv.current=i;var U=E&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,t!==null&&E?(i.child=ms(i,t.child,null,m),i.child=ms(i,null,U,m)):wn(t,i,U,m),i.memoizedState=c.state,f&&uh(i,o,!0),i.child}function op(t){var i=t.stateNode;i.pendingContext?lh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&lh(t,i.context,!1),Dc(t,i.containerInfo)}function ap(t,i,o,c,f){return ps(),Ac(f),i.flags|=256,wn(t,i,o,c),i.child}var Zc={dehydrated:null,treeContext:null,retryLane:0};function Qc(t){return{baseLanes:t,cachePool:null,transitions:null}}function lp(t,i,o){var c=i.pendingProps,f=Bt.current,m=!1,E=(i.flags&128)!==0,U;if((U=E)||(U=t!==null&&t.memoizedState===null?!1:(f&2)!==0),U?(m=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Dt(Bt,f&1),t===null)return Tc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=c.children,t=c.fallback,m?(c=i.mode,m=i.child,E={mode:"hidden",children:E},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=E):m=Ka(E,c,0,null),t=Or(t,c,o,null),m.return=i,t.return=i,m.sibling=t,i.child=m,i.child.memoizedState=Qc(o),i.memoizedState=Zc,t):Jc(i,E));if(f=t.memoizedState,f!==null&&(U=f.dehydrated,U!==null))return ov(t,i,E,c,U,f,o);if(m){m=c.fallback,E=i.mode,f=t.child,U=f.sibling;var V={mode:"hidden",children:c.children};return(E&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=V,i.deletions=null):(c=dr(f,V),c.subtreeFlags=f.subtreeFlags&14680064),U!==null?m=dr(U,m):(m=Or(m,E,o,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,E=t.child.memoizedState,E=E===null?Qc(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},m.memoizedState=E,m.childLanes=t.childLanes&~o,i.memoizedState=Zc,c}return m=t.child,t=m.sibling,c=dr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=c,i.memoizedState=null,c}function Jc(t,i){return i=Ka({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Oa(t,i,o,c){return c!==null&&Ac(c),ms(i,t.child,null,o),t=Jc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function ov(t,i,o,c,f,m,E){if(o)return i.flags&256?(i.flags&=-257,c=qc(Error(n(422))),Oa(t,i,E,c)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(m=c.fallback,f=i.mode,c=Ka({mode:"visible",children:c.children},f,0,null),m=Or(m,f,E,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&ms(i,t.child,null,E),i.child.memoizedState=Qc(E),i.memoizedState=Zc,m);if((i.mode&1)===0)return Oa(t,i,E,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var U=c.dgst;return c=U,m=Error(n(419)),c=qc(m,c,void 0),Oa(t,i,E,c)}if(U=(E&t.childLanes)!==0,Dn||U){if(c=sn,c!==null){switch(E&-E){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|E))!==0?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,Pi(t,f),ri(c,t,f,-1))}return mu(),c=qc(Error(n(421))),Oa(t,i,E,c)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=xv.bind(null,t),f._reactRetry=i,null):(t=m.treeContext,Bn=er(f.nextSibling),zn=i,zt=!0,ei=null,t!==null&&(Wn[jn++]=Ri,Wn[jn++]=bi,Wn[jn++]=Rr,Ri=t.id,bi=t.overflow,Rr=i),i=Jc(i,c.children),i.flags|=4096,i)}function cp(t,i,o){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),Pc(t.return,i,o)}function eu(t,i,o,c,f){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=o,m.tailMode=f)}function up(t,i,o){var c=i.pendingProps,f=c.revealOrder,m=c.tail;if(wn(t,i,c.children,o),c=Bt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&cp(t,o,i);else if(t.tag===19)cp(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(Dt(Bt,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)t=o.alternate,t!==null&&Pa(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),eu(i,!1,f,o,m);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Pa(t)===null){i.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}eu(i,!0,o,null,m);break;case"together":eu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ka(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Li(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Dr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=dr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=dr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function av(t,i,o){switch(i.tag){case 3:op(i),ps();break;case 5:wh(i);break;case 1:Ln(i.type)&&ya(i);break;case 4:Dc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Dt(Aa,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Dt(Bt,Bt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?lp(t,i,o):(Dt(Bt,Bt.current&1),t=Li(t,i,o),t!==null?t.sibling:null);Dt(Bt,Bt.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(t.flags&128)!==0){if(c)return up(t,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Dt(Bt,Bt.current),c)break;return null;case 22:case 23:return i.lanes=0,ip(t,i,o)}return Li(t,i,o)}var dp,tu,fp,hp;dp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},tu=function(){},fp=function(t,i,o,c){var f=t.memoizedProps;if(f!==c){t=i.stateNode,Nr(vi.current);var m=null;switch(o){case"input":f=z(t,f),c=z(t,c),m=[];break;case"select":f=$({},f,{value:void 0}),c=$({},c,{value:void 0}),m=[];break;case"textarea":f=w(t,f),c=w(t,c),m=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=va)}mt(o,c);var E;o=null;for(ce in f)if(!c.hasOwnProperty(ce)&&f.hasOwnProperty(ce)&&f[ce]!=null)if(ce==="style"){var U=f[ce];for(E in U)U.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else ce!=="dangerouslySetInnerHTML"&&ce!=="children"&&ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&ce!=="autoFocus"&&(a.hasOwnProperty(ce)?m||(m=[]):(m=m||[]).push(ce,null));for(ce in c){var V=c[ce];if(U=f!=null?f[ce]:void 0,c.hasOwnProperty(ce)&&V!==U&&(V!=null||U!=null))if(ce==="style")if(U){for(E in U)!U.hasOwnProperty(E)||V&&V.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in V)V.hasOwnProperty(E)&&U[E]!==V[E]&&(o||(o={}),o[E]=V[E])}else o||(m||(m=[]),m.push(ce,o)),o=V;else ce==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,U=U?U.__html:void 0,V!=null&&U!==V&&(m=m||[]).push(ce,V)):ce==="children"?typeof V!="string"&&typeof V!="number"||(m=m||[]).push(ce,""+V):ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&(a.hasOwnProperty(ce)?(V!=null&&ce==="onScroll"&&Ut("scroll",t),m||U===V||(m=[])):(m=m||[]).push(ce,V))}o&&(m=m||[]).push("style",o);var ce=m;(i.updateQueue=ce)&&(i.flags|=4)}},hp=function(t,i,o,c){o!==c&&(i.flags|=4)};function Ro(t,i){if(!zt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function _n(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,c=0;if(i)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=c,t.childLanes=o,i}function lv(t,i,o){var c=i.pendingProps;switch(Ec(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _n(i),null;case 1:return Ln(i.type)&&xa(),_n(i),null;case 3:return c=i.stateNode,_s(),Ft(Nn),Ft(gn),Fc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(wa(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ei!==null&&(fu(ei),ei=null))),tu(t,i),_n(i),null;case 5:Ic(i);var f=Nr(Eo.current);if(o=i.type,t!==null&&i.stateNode!=null)fp(t,i,o,c,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return _n(i),null}if(t=Nr(vi.current),wa(i)){c=i.stateNode,o=i.type;var m=i.memoizedProps;switch(c[gi]=i,c[_o]=m,t=(i.mode&1)!==0,o){case"dialog":Ut("cancel",c),Ut("close",c);break;case"iframe":case"object":case"embed":Ut("load",c);break;case"video":case"audio":for(f=0;f<mo.length;f++)Ut(mo[f],c);break;case"source":Ut("error",c);break;case"img":case"image":case"link":Ut("error",c),Ut("load",c);break;case"details":Ut("toggle",c);break;case"input":un(c,m),Ut("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Ut("invalid",c);break;case"textarea":ne(c,m),Ut("invalid",c)}mt(o,m),f=null;for(var E in m)if(m.hasOwnProperty(E)){var U=m[E];E==="children"?typeof U=="string"?c.textContent!==U&&(m.suppressHydrationWarning!==!0&&ga(c.textContent,U,t),f=["children",U]):typeof U=="number"&&c.textContent!==""+U&&(m.suppressHydrationWarning!==!0&&ga(c.textContent,U,t),f=["children",""+U]):a.hasOwnProperty(E)&&U!=null&&E==="onScroll"&&Ut("scroll",c)}switch(o){case"input":lt(c),$e(c,m,!0);break;case"textarea":lt(c),_e(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=va)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{E=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=me(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=E.createElement(o,{is:c.is}):(t=E.createElement(o),o==="select"&&(E=t,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):t=E.createElementNS(t,o),t[gi]=i,t[_o]=c,dp(t,i,!1,!1),i.stateNode=t;e:{switch(E=st(o,c),o){case"dialog":Ut("cancel",t),Ut("close",t),f=c;break;case"iframe":case"object":case"embed":Ut("load",t),f=c;break;case"video":case"audio":for(f=0;f<mo.length;f++)Ut(mo[f],t);f=c;break;case"source":Ut("error",t),f=c;break;case"img":case"image":case"link":Ut("error",t),Ut("load",t),f=c;break;case"details":Ut("toggle",t),f=c;break;case"input":un(t,c),f=z(t,c),Ut("invalid",t);break;case"option":f=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},f=$({},c,{value:void 0}),Ut("invalid",t);break;case"textarea":ne(t,c),f=w(t,c),Ut("invalid",t);break;default:f=c}mt(o,f),U=f;for(m in U)if(U.hasOwnProperty(m)){var V=U[m];m==="style"?tt(t,V):m==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&ke(t,V)):m==="children"?typeof V=="string"?(o!=="textarea"||V!=="")&&ht(t,V):typeof V=="number"&&ht(t,""+V):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?V!=null&&m==="onScroll"&&Ut("scroll",t):V!=null&&D(t,m,V,E))}switch(o){case"input":lt(t),$e(t,c,!1);break;case"textarea":lt(t),_e(t);break;case"option":c.value!=null&&t.setAttribute("value",""+Ae(c.value));break;case"select":t.multiple=!!c.multiple,m=c.value,m!=null?L(t,!!c.multiple,m,!1):c.defaultValue!=null&&L(t,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=va)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return _n(i),null;case 6:if(t&&i.stateNode!=null)hp(t,i,t.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(o=Nr(Eo.current),Nr(vi.current),wa(i)){if(c=i.stateNode,o=i.memoizedProps,c[gi]=i,(m=c.nodeValue!==o)&&(t=zn,t!==null))switch(t.tag){case 3:ga(c.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ga(c.nodeValue,o,(t.mode&1)!==0)}m&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[gi]=i,i.stateNode=c}return _n(i),null;case 13:if(Ft(Bt),c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(zt&&Bn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)gh(),ps(),i.flags|=98560,m=!1;else if(m=wa(i),c!==null&&c.dehydrated!==null){if(t===null){if(!m)throw Error(n(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(n(317));m[gi]=i}else ps(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;_n(i),m=!1}else ei!==null&&(fu(ei),ei=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Bt.current&1)!==0?Zt===0&&(Zt=3):mu())),i.updateQueue!==null&&(i.flags|=4),_n(i),null);case 4:return _s(),tu(t,i),t===null&&go(i.stateNode.containerInfo),_n(i),null;case 10:return bc(i.type._context),_n(i),null;case 17:return Ln(i.type)&&xa(),_n(i),null;case 19:if(Ft(Bt),m=i.memoizedState,m===null)return _n(i),null;if(c=(i.flags&128)!==0,E=m.rendering,E===null)if(c)Ro(m,!1);else{if(Zt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=Pa(t),E!==null){for(i.flags|=128,Ro(m,!1),c=E.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)m=o,t=c,m.flags&=14680066,E=m.alternate,E===null?(m.childLanes=0,m.lanes=t,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=E.childLanes,m.lanes=E.lanes,m.child=E.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=E.memoizedProps,m.memoizedState=E.memoizedState,m.updateQueue=E.updateQueue,m.type=E.type,t=E.dependencies,m.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Dt(Bt,Bt.current&1|2),i.child}t=t.sibling}m.tail!==null&&J()>Ms&&(i.flags|=128,c=!0,Ro(m,!1),i.lanes=4194304)}else{if(!c)if(t=Pa(E),t!==null){if(i.flags|=128,c=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Ro(m,!0),m.tail===null&&m.tailMode==="hidden"&&!E.alternate&&!zt)return _n(i),null}else 2*J()-m.renderingStartTime>Ms&&o!==1073741824&&(i.flags|=128,c=!0,Ro(m,!1),i.lanes=4194304);m.isBackwards?(E.sibling=i.child,i.child=E):(o=m.last,o!==null?o.sibling=E:i.child=E,m.last=E)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=J(),i.sibling=null,o=Bt.current,Dt(Bt,c?o&1|2:o&1),i):(_n(i),null);case 22:case 23:return pu(),c=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Hn&1073741824)!==0&&(_n(i),i.subtreeFlags&6&&(i.flags|=8192)):_n(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function cv(t,i){switch(Ec(i),i.tag){case 1:return Ln(i.type)&&xa(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return _s(),Ft(Nn),Ft(gn),Fc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Ic(i),null;case 13:if(Ft(Bt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ps()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ft(Bt),null;case 4:return _s(),null;case 10:return bc(i.type._context),null;case 22:case 23:return pu(),null;case 24:return null;default:return null}}var za=!1,xn=!1,uv=typeof WeakSet=="function"?WeakSet:Set,Be=null;function ys(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){Wt(t,i,c)}else o.current=null}function nu(t,i,o){try{o()}catch(c){Wt(t,i,c)}}var pp=!1;function dv(t,i){if(pc=sa,t=Xf(),oc(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var f=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var E=0,U=-1,V=-1,ce=0,Se=0,Me=t,xe=null;t:for(;;){for(var Oe;Me!==o||f!==0&&Me.nodeType!==3||(U=E+f),Me!==m||c!==0&&Me.nodeType!==3||(V=E+c),Me.nodeType===3&&(E+=Me.nodeValue.length),(Oe=Me.firstChild)!==null;)xe=Me,Me=Oe;for(;;){if(Me===t)break t;if(xe===o&&++ce===f&&(U=E),xe===m&&++Se===c&&(V=E),(Oe=Me.nextSibling)!==null)break;Me=xe,xe=Me.parentNode}Me=Oe}o=U===-1||V===-1?null:{start:U,end:V}}else o=null}o=o||{start:0,end:0}}else o=null;for(mc={focusedElem:t,selectionRange:o},sa=!1,Be=i;Be!==null;)if(i=Be,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Be=t;else for(;Be!==null;){i=Be;try{var We=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(We!==null){var qe=We.memoizedProps,Xt=We.memoizedState,Z=i.stateNode,W=Z.getSnapshotBeforeUpdate(i.elementType===i.type?qe:ti(i.type,qe),Xt);Z.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var ie=i.stateNode.containerInfo;ie.nodeType===1?ie.textContent="":ie.nodeType===9&&ie.documentElement&&ie.removeChild(ie.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Te){Wt(i,i.return,Te)}if(t=i.sibling,t!==null){t.return=i.return,Be=t;break}Be=i.return}return We=pp,pp=!1,We}function bo(t,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&t)===t){var m=f.destroy;f.destroy=void 0,m!==void 0&&nu(i,o,m)}f=f.next}while(f!==c)}}function Ba(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function iu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function mp(t){var i=t.alternate;i!==null&&(t.alternate=null,mp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[gi],delete i[_o],delete i[xc],delete i[q0],delete i[Y0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function gp(t){return t.tag===5||t.tag===3||t.tag===4}function vp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||gp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ru(t,i,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=va));else if(c!==4&&(t=t.child,t!==null))for(ru(t,i,o),t=t.sibling;t!==null;)ru(t,i,o),t=t.sibling}function su(t,i,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(su(t,i,o),t=t.sibling;t!==null;)su(t,i,o),t=t.sibling}var fn=null,ni=!1;function or(t,i,o){for(o=o.child;o!==null;)_p(t,i,o),o=o.sibling}function _p(t,i,o){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(et,o)}catch{}switch(o.tag){case 5:xn||ys(o,i);case 6:var c=fn,f=ni;fn=null,or(t,i,o),fn=c,ni=f,fn!==null&&(ni?(t=fn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):fn.removeChild(o.stateNode));break;case 18:fn!==null&&(ni?(t=fn,o=o.stateNode,t.nodeType===8?_c(t.parentNode,o):t.nodeType===1&&_c(t,o),oo(t)):_c(fn,o.stateNode));break;case 4:c=fn,f=ni,fn=o.stateNode.containerInfo,ni=!0,or(t,i,o),fn=c,ni=f;break;case 0:case 11:case 14:case 15:if(!xn&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var m=f,E=m.destroy;m=m.tag,E!==void 0&&((m&2)!==0||(m&4)!==0)&&nu(o,i,E),f=f.next}while(f!==c)}or(t,i,o);break;case 1:if(!xn&&(ys(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(U){Wt(o,i,U)}or(t,i,o);break;case 21:or(t,i,o);break;case 22:o.mode&1?(xn=(c=xn)||o.memoizedState!==null,or(t,i,o),xn=c):or(t,i,o);break;default:or(t,i,o)}}function xp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new uv),i.forEach(function(c){var f=yv.bind(null,t,c);o.has(c)||(o.add(c),c.then(f,f))})}}function ii(t,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var f=o[c];try{var m=t,E=i,U=E;e:for(;U!==null;){switch(U.tag){case 5:fn=U.stateNode,ni=!1;break e;case 3:fn=U.stateNode.containerInfo,ni=!0;break e;case 4:fn=U.stateNode.containerInfo,ni=!0;break e}U=U.return}if(fn===null)throw Error(n(160));_p(m,E,f),fn=null,ni=!1;var V=f.alternate;V!==null&&(V.return=null),f.return=null}catch(ce){Wt(f,i,ce)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)yp(i,t),i=i.sibling}function yp(t,i){var o=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ii(i,t),xi(t),c&4){try{bo(3,t,t.return),Ba(3,t)}catch(qe){Wt(t,t.return,qe)}try{bo(5,t,t.return)}catch(qe){Wt(t,t.return,qe)}}break;case 1:ii(i,t),xi(t),c&512&&o!==null&&ys(o,o.return);break;case 5:if(ii(i,t),xi(t),c&512&&o!==null&&ys(o,o.return),t.flags&32){var f=t.stateNode;try{ht(f,"")}catch(qe){Wt(t,t.return,qe)}}if(c&4&&(f=t.stateNode,f!=null)){var m=t.memoizedProps,E=o!==null?o.memoizedProps:m,U=t.type,V=t.updateQueue;if(t.updateQueue=null,V!==null)try{U==="input"&&m.type==="radio"&&m.name!=null&&ft(f,m),st(U,E);var ce=st(U,m);for(E=0;E<V.length;E+=2){var Se=V[E],Me=V[E+1];Se==="style"?tt(f,Me):Se==="dangerouslySetInnerHTML"?ke(f,Me):Se==="children"?ht(f,Me):D(f,Se,Me,ce)}switch(U){case"input":ct(f,m);break;case"textarea":he(f,m);break;case"select":var xe=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var Oe=m.value;Oe!=null?L(f,!!m.multiple,Oe,!1):xe!==!!m.multiple&&(m.defaultValue!=null?L(f,!!m.multiple,m.defaultValue,!0):L(f,!!m.multiple,m.multiple?[]:"",!1))}f[_o]=m}catch(qe){Wt(t,t.return,qe)}}break;case 6:if(ii(i,t),xi(t),c&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,m=t.memoizedProps;try{f.nodeValue=m}catch(qe){Wt(t,t.return,qe)}}break;case 3:if(ii(i,t),xi(t),c&4&&o!==null&&o.memoizedState.isDehydrated)try{oo(i.containerInfo)}catch(qe){Wt(t,t.return,qe)}break;case 4:ii(i,t),xi(t);break;case 13:ii(i,t),xi(t),f=t.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(lu=J())),c&4&&xp(t);break;case 22:if(Se=o!==null&&o.memoizedState!==null,t.mode&1?(xn=(ce=xn)||Se,ii(i,t),xn=ce):ii(i,t),xi(t),c&8192){if(ce=t.memoizedState!==null,(t.stateNode.isHidden=ce)&&!Se&&(t.mode&1)!==0)for(Be=t,Se=t.child;Se!==null;){for(Me=Be=Se;Be!==null;){switch(xe=Be,Oe=xe.child,xe.tag){case 0:case 11:case 14:case 15:bo(4,xe,xe.return);break;case 1:ys(xe,xe.return);var We=xe.stateNode;if(typeof We.componentWillUnmount=="function"){c=xe,o=xe.return;try{i=c,We.props=i.memoizedProps,We.state=i.memoizedState,We.componentWillUnmount()}catch(qe){Wt(c,o,qe)}}break;case 5:ys(xe,xe.return);break;case 22:if(xe.memoizedState!==null){Ep(Me);continue}}Oe!==null?(Oe.return=xe,Be=Oe):Ep(Me)}Se=Se.sibling}e:for(Se=null,Me=t;;){if(Me.tag===5){if(Se===null){Se=Me;try{f=Me.stateNode,ce?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(U=Me.stateNode,V=Me.memoizedProps.style,E=V!=null&&V.hasOwnProperty("display")?V.display:null,U.style.display=Ze("display",E))}catch(qe){Wt(t,t.return,qe)}}}else if(Me.tag===6){if(Se===null)try{Me.stateNode.nodeValue=ce?"":Me.memoizedProps}catch(qe){Wt(t,t.return,qe)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===t)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===t)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===t)break e;Se===Me&&(Se=null),Me=Me.return}Se===Me&&(Se=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:ii(i,t),xi(t),c&4&&xp(t);break;case 21:break;default:ii(i,t),xi(t)}}function xi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(gp(o)){var c=o;break e}o=o.return}throw Error(n(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(ht(f,""),c.flags&=-33);var m=vp(t);su(t,m,f);break;case 3:case 4:var E=c.stateNode.containerInfo,U=vp(t);ru(t,U,E);break;default:throw Error(n(161))}}catch(V){Wt(t,t.return,V)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function fv(t,i,o){Be=t,Sp(t)}function Sp(t,i,o){for(var c=(t.mode&1)!==0;Be!==null;){var f=Be,m=f.child;if(f.tag===22&&c){var E=f.memoizedState!==null||za;if(!E){var U=f.alternate,V=U!==null&&U.memoizedState!==null||xn;U=za;var ce=xn;if(za=E,(xn=V)&&!ce)for(Be=f;Be!==null;)E=Be,V=E.child,E.tag===22&&E.memoizedState!==null?wp(f):V!==null?(V.return=E,Be=V):wp(f);for(;m!==null;)Be=m,Sp(m),m=m.sibling;Be=f,za=U,xn=ce}Mp(t)}else(f.subtreeFlags&8772)!==0&&m!==null?(m.return=f,Be=m):Mp(t)}}function Mp(t){for(;Be!==null;){var i=Be;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:xn||Ba(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!xn)if(o===null)c.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:ti(i.type,o.memoizedProps);c.componentDidUpdate(f,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Eh(i,m,c);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Eh(i,E,o)}break;case 5:var U=i.stateNode;if(o===null&&i.flags&4){o=U;var V=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&o.focus();break;case"img":V.src&&(o.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ce=i.alternate;if(ce!==null){var Se=ce.memoizedState;if(Se!==null){var Me=Se.dehydrated;Me!==null&&oo(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}xn||i.flags&512&&iu(i)}catch(xe){Wt(i,i.return,xe)}}if(i===t){Be=null;break}if(o=i.sibling,o!==null){o.return=i.return,Be=o;break}Be=i.return}}function Ep(t){for(;Be!==null;){var i=Be;if(i===t){Be=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Be=o;break}Be=i.return}}function wp(t){for(;Be!==null;){var i=Be;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ba(4,i)}catch(V){Wt(i,o,V)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(V){Wt(i,f,V)}}var m=i.return;try{iu(i)}catch(V){Wt(i,m,V)}break;case 5:var E=i.return;try{iu(i)}catch(V){Wt(i,E,V)}}}catch(V){Wt(i,i.return,V)}if(i===t){Be=null;break}var U=i.sibling;if(U!==null){U.return=i.return,Be=U;break}Be=i.return}}var hv=Math.ceil,Ha=b.ReactCurrentDispatcher,ou=b.ReactCurrentOwner,Yn=b.ReactCurrentBatchConfig,Et=0,sn=null,qt=null,hn=0,Hn=0,Ss=tr(0),Zt=0,Po=null,Dr=0,Va=0,au=0,No=null,In=null,lu=0,Ms=1/0,Di=null,Ga=!1,cu=null,ar=null,Wa=!1,lr=null,ja=0,Lo=0,uu=null,Xa=-1,qa=0;function Tn(){return(Et&6)!==0?J():Xa!==-1?Xa:Xa=J()}function cr(t){return(t.mode&1)===0?1:(Et&2)!==0&&hn!==0?hn&-hn:K0.transition!==null?(qa===0&&(qa=Lt()),qa):(t=Mt,t!==0||(t=window.event,t=t===void 0?16:Af(t.type)),t)}function ri(t,i,o,c){if(50<Lo)throw Lo=0,uu=null,Error(n(185));tn(t,o,c),((Et&2)===0||t!==sn)&&(t===sn&&((Et&2)===0&&(Va|=o),Zt===4&&ur(t,hn)),Un(t,c),o===1&&Et===0&&(i.mode&1)===0&&(Ms=J()+500,Sa&&ir()))}function Un(t,i){var o=t.callbackNode;En(t,i);var c=pn(t,t===sn?hn:0);if(c===0)o!==null&&C(o),t.callbackNode=null,t.callbackPriority=0;else if(i=c&-c,t.callbackPriority!==i){if(o!=null&&C(o),i===1)t.tag===0?$0(Ap.bind(null,t)):dh(Ap.bind(null,t)),j0(function(){(Et&6)===0&&ir()}),o=null;else{switch(mi(c)){case 1:o=Ee;break;case 4:o=be;break;case 16:o=Fe;break;case 536870912:o=nt;break;default:o=Fe}o=Ip(o,Tp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Tp(t,i){if(Xa=-1,qa=0,(Et&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Es()&&t.callbackNode!==o)return null;var c=pn(t,t===sn?hn:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||i)i=Ya(t,c);else{i=c;var f=Et;Et|=2;var m=Rp();(sn!==t||hn!==i)&&(Di=null,Ms=J()+500,Ur(t,i));do try{gv();break}catch(U){Cp(t,U)}while(!0);Rc(),Ha.current=m,Et=f,qt!==null?i=0:(sn=null,hn=0,i=Zt)}if(i!==0){if(i===2&&(f=Ti(t),f!==0&&(c=f,i=du(t,f))),i===1)throw o=Po,Ur(t,0),ur(t,c),Un(t,J()),o;if(i===6)ur(t,c);else{if(f=t.current.alternate,(c&30)===0&&!pv(f)&&(i=Ya(t,c),i===2&&(m=Ti(t),m!==0&&(c=m,i=du(t,m))),i===1))throw o=Po,Ur(t,0),ur(t,c),Un(t,J()),o;switch(t.finishedWork=f,t.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:Fr(t,In,Di);break;case 3:if(ur(t,c),(c&130023424)===c&&(i=lu+500-J(),10<i)){if(pn(t,0)!==0)break;if(f=t.suspendedLanes,(f&c)!==c){Tn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=vc(Fr.bind(null,t,In,Di),i);break}Fr(t,In,Di);break;case 4:if(ur(t,c),(c&4194240)===c)break;for(i=t.eventTimes,f=-1;0<c;){var E=31-at(c);m=1<<E,E=i[E],E>f&&(f=E),c&=~m}if(c=f,c=J()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*hv(c/1960))-c,10<c){t.timeoutHandle=vc(Fr.bind(null,t,In,Di),c);break}Fr(t,In,Di);break;case 5:Fr(t,In,Di);break;default:throw Error(n(329))}}}return Un(t,J()),t.callbackNode===o?Tp.bind(null,t):null}function du(t,i){var o=No;return t.current.memoizedState.isDehydrated&&(Ur(t,i).flags|=256),t=Ya(t,i),t!==2&&(i=In,In=o,i!==null&&fu(i)),t}function fu(t){In===null?In=t:In.push.apply(In,t)}function pv(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var f=o[c],m=f.getSnapshot;f=f.value;try{if(!Jn(m(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ur(t,i){for(i&=~au,i&=~Va,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-at(i),c=1<<o;t[o]=-1,i&=~c}}function Ap(t){if((Et&6)!==0)throw Error(n(327));Es();var i=pn(t,0);if((i&1)===0)return Un(t,J()),null;var o=Ya(t,i);if(t.tag!==0&&o===2){var c=Ti(t);c!==0&&(i=c,o=du(t,c))}if(o===1)throw o=Po,Ur(t,0),ur(t,i),Un(t,J()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Fr(t,In,Di),Un(t,J()),null}function hu(t,i){var o=Et;Et|=1;try{return t(i)}finally{Et=o,Et===0&&(Ms=J()+500,Sa&&ir())}}function Ir(t){lr!==null&&lr.tag===0&&(Et&6)===0&&Es();var i=Et;Et|=1;var o=Yn.transition,c=Mt;try{if(Yn.transition=null,Mt=1,t)return t()}finally{Mt=c,Yn.transition=o,Et=i,(Et&6)===0&&ir()}}function pu(){Hn=Ss.current,Ft(Ss)}function Ur(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,W0(o)),qt!==null)for(o=qt.return;o!==null;){var c=o;switch(Ec(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&xa();break;case 3:_s(),Ft(Nn),Ft(gn),Fc();break;case 5:Ic(c);break;case 4:_s();break;case 13:Ft(Bt);break;case 19:Ft(Bt);break;case 10:bc(c.type._context);break;case 22:case 23:pu()}o=o.return}if(sn=t,qt=t=dr(t.current,null),hn=Hn=i,Zt=0,Po=null,au=Va=Dr=0,In=No=null,Pr!==null){for(i=0;i<Pr.length;i++)if(o=Pr[i],c=o.interleaved,c!==null){o.interleaved=null;var f=c.next,m=o.pending;if(m!==null){var E=m.next;m.next=f,c.next=E}o.pending=c}Pr=null}return t}function Cp(t,i){do{var o=qt;try{if(Rc(),Na.current=Ua,La){for(var c=Ht.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}La=!1}if(Lr=0,rn=Kt=Ht=null,wo=!1,To=0,ou.current=null,o===null||o.return===null){Zt=1,Po=i,qt=null;break}e:{var m=t,E=o.return,U=o,V=i;if(i=hn,U.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var ce=V,Se=U,Me=Se.tag;if((Se.mode&1)===0&&(Me===0||Me===11||Me===15)){var xe=Se.alternate;xe?(Se.updateQueue=xe.updateQueue,Se.memoizedState=xe.memoizedState,Se.lanes=xe.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var Oe=Qh(E);if(Oe!==null){Oe.flags&=-257,Jh(Oe,E,U,m,i),Oe.mode&1&&Zh(m,ce,i),i=Oe,V=ce;var We=i.updateQueue;if(We===null){var qe=new Set;qe.add(V),i.updateQueue=qe}else We.add(V);break e}else{if((i&1)===0){Zh(m,ce,i),mu();break e}V=Error(n(426))}}else if(zt&&U.mode&1){var Xt=Qh(E);if(Xt!==null){(Xt.flags&65536)===0&&(Xt.flags|=256),Jh(Xt,E,U,m,i),Ac(xs(V,U));break e}}m=V=xs(V,U),Zt!==4&&(Zt=2),No===null?No=[m]:No.push(m),m=E;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var Z=$h(m,V,i);Mh(m,Z);break e;case 1:U=V;var W=m.type,ie=m.stateNode;if((m.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||ie!==null&&typeof ie.componentDidCatch=="function"&&(ar===null||!ar.has(ie)))){m.flags|=65536,i&=-i,m.lanes|=i;var Te=Kh(m,U,i);Mh(m,Te);break e}}m=m.return}while(m!==null)}Pp(o)}catch(Ye){i=Ye,qt===o&&o!==null&&(qt=o=o.return);continue}break}while(!0)}function Rp(){var t=Ha.current;return Ha.current=Ua,t===null?Ua:t}function mu(){(Zt===0||Zt===3||Zt===2)&&(Zt=4),sn===null||(Dr&268435455)===0&&(Va&268435455)===0||ur(sn,hn)}function Ya(t,i){var o=Et;Et|=2;var c=Rp();(sn!==t||hn!==i)&&(Di=null,Ur(t,i));do try{mv();break}catch(f){Cp(t,f)}while(!0);if(Rc(),Et=o,Ha.current=c,qt!==null)throw Error(n(261));return sn=null,hn=0,Zt}function mv(){for(;qt!==null;)bp(qt)}function gv(){for(;qt!==null&&!X();)bp(qt)}function bp(t){var i=Dp(t.alternate,t,Hn);t.memoizedProps=t.pendingProps,i===null?Pp(t):qt=i,ou.current=null}function Pp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=lv(o,i,Hn),o!==null){qt=o;return}}else{if(o=cv(o,i),o!==null){o.flags&=32767,qt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Zt=6,qt=null;return}}if(i=i.sibling,i!==null){qt=i;return}qt=i=t}while(i!==null);Zt===0&&(Zt=5)}function Fr(t,i,o){var c=Mt,f=Yn.transition;try{Yn.transition=null,Mt=1,vv(t,i,o,c)}finally{Yn.transition=f,Mt=c}return null}function vv(t,i,o,c){do Es();while(lr!==null);if((Et&6)!==0)throw Error(n(327));o=t.finishedWork;var f=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var m=o.lanes|o.childLanes;if(dn(t,m),t===sn&&(qt=sn=null,hn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Wa||(Wa=!0,Ip(Fe,function(){return Es(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=Yn.transition,Yn.transition=null;var E=Mt;Mt=1;var U=Et;Et|=4,ou.current=null,dv(t,o),yp(o,t),O0(mc),sa=!!pc,mc=pc=null,t.current=o,fv(o),ae(),Et=U,Mt=E,Yn.transition=m}else t.current=o;if(Wa&&(Wa=!1,lr=t,ja=f),m=t.pendingLanes,m===0&&(ar=null),_t(o.stateNode),Un(t,J()),i!==null)for(c=t.onRecoverableError,o=0;o<i.length;o++)f=i[o],c(f.value,{componentStack:f.stack,digest:f.digest});if(Ga)throw Ga=!1,t=cu,cu=null,t;return(ja&1)!==0&&t.tag!==0&&Es(),m=t.pendingLanes,(m&1)!==0?t===uu?Lo++:(Lo=0,uu=t):Lo=0,ir(),null}function Es(){if(lr!==null){var t=mi(ja),i=Yn.transition,o=Mt;try{if(Yn.transition=null,Mt=16>t?16:t,lr===null)var c=!1;else{if(t=lr,lr=null,ja=0,(Et&6)!==0)throw Error(n(331));var f=Et;for(Et|=4,Be=t.current;Be!==null;){var m=Be,E=m.child;if((Be.flags&16)!==0){var U=m.deletions;if(U!==null){for(var V=0;V<U.length;V++){var ce=U[V];for(Be=ce;Be!==null;){var Se=Be;switch(Se.tag){case 0:case 11:case 15:bo(8,Se,m)}var Me=Se.child;if(Me!==null)Me.return=Se,Be=Me;else for(;Be!==null;){Se=Be;var xe=Se.sibling,Oe=Se.return;if(mp(Se),Se===ce){Be=null;break}if(xe!==null){xe.return=Oe,Be=xe;break}Be=Oe}}}var We=m.alternate;if(We!==null){var qe=We.child;if(qe!==null){We.child=null;do{var Xt=qe.sibling;qe.sibling=null,qe=Xt}while(qe!==null)}}Be=m}}if((m.subtreeFlags&2064)!==0&&E!==null)E.return=m,Be=E;else e:for(;Be!==null;){if(m=Be,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:bo(9,m,m.return)}var Z=m.sibling;if(Z!==null){Z.return=m.return,Be=Z;break e}Be=m.return}}var W=t.current;for(Be=W;Be!==null;){E=Be;var ie=E.child;if((E.subtreeFlags&2064)!==0&&ie!==null)ie.return=E,Be=ie;else e:for(E=W;Be!==null;){if(U=Be,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Ba(9,U)}}catch(Ye){Wt(U,U.return,Ye)}if(U===E){Be=null;break e}var Te=U.sibling;if(Te!==null){Te.return=U.return,Be=Te;break e}Be=U.return}}if(Et=f,ir(),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(et,t)}catch{}c=!0}return c}finally{Mt=o,Yn.transition=i}}return!1}function Np(t,i,o){i=xs(o,i),i=$h(t,i,1),t=sr(t,i,1),i=Tn(),t!==null&&(tn(t,1,i),Un(t,i))}function Wt(t,i,o){if(t.tag===3)Np(t,t,o);else for(;i!==null;){if(i.tag===3){Np(i,t,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ar===null||!ar.has(c))){t=xs(o,t),t=Kh(i,t,1),i=sr(i,t,1),t=Tn(),i!==null&&(tn(i,1,t),Un(i,t));break}}i=i.return}}function _v(t,i,o){var c=t.pingCache;c!==null&&c.delete(i),i=Tn(),t.pingedLanes|=t.suspendedLanes&o,sn===t&&(hn&o)===o&&(Zt===4||Zt===3&&(hn&130023424)===hn&&500>J()-lu?Ur(t,0):au|=o),Un(t,i)}function Lp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Gt,Gt<<=1,(Gt&130023424)===0&&(Gt=4194304)));var o=Tn();t=Pi(t,i),t!==null&&(tn(t,i,o),Un(t,o))}function xv(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Lp(t,o)}function yv(t,i){var o=0;switch(t.tag){case 13:var c=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),Lp(t,o)}var Dp;Dp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Nn.current)Dn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Dn=!1,av(t,i,o);Dn=(t.flags&131072)!==0}else Dn=!1,zt&&(i.flags&1048576)!==0&&fh(i,Ea,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;ka(t,i),t=i.pendingProps;var f=ds(i,gn.current);vs(i,o),f=zc(null,i,c,t,f,o);var m=Bc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Ln(c)?(m=!0,ya(i)):m=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Lc(i),f.updater=Fa,i.stateNode=f,f._reactInternals=i,Xc(i,c,t,o),i=Kc(null,i,c,!0,m,o)):(i.tag=0,zt&&m&&Mc(i),wn(null,i,f,o),i=i.child),i;case 16:c=i.elementType;e:{switch(ka(t,i),t=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=Mv(c),t=ti(c,t),f){case 0:i=$c(null,i,c,t,o);break e;case 1:i=sp(null,i,c,t,o);break e;case 11:i=ep(null,i,c,t,o);break e;case 14:i=tp(null,i,c,ti(c.type,t),o);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ti(c,f),$c(t,i,c,f,o);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ti(c,f),sp(t,i,c,f,o);case 3:e:{if(op(i),t===null)throw Error(n(387));c=i.pendingProps,m=i.memoizedState,f=m.element,Sh(t,i),ba(i,c,null,o);var E=i.memoizedState;if(c=E.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){f=xs(Error(n(423)),i),i=ap(t,i,c,o,f);break e}else if(c!==f){f=xs(Error(n(424)),i),i=ap(t,i,c,o,f);break e}else for(Bn=er(i.stateNode.containerInfo.firstChild),zn=i,zt=!0,ei=null,o=xh(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ps(),c===f){i=Li(t,i,o);break e}wn(t,i,c,o)}i=i.child}return i;case 5:return wh(i),t===null&&Tc(i),c=i.type,f=i.pendingProps,m=t!==null?t.memoizedProps:null,E=f.children,gc(c,f)?E=null:m!==null&&gc(c,m)&&(i.flags|=32),rp(t,i),wn(t,i,E,o),i.child;case 6:return t===null&&Tc(i),null;case 13:return lp(t,i,o);case 4:return Dc(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=ms(i,null,c,o):wn(t,i,c,o),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ti(c,f),ep(t,i,c,f,o);case 7:return wn(t,i,i.pendingProps,o),i.child;case 8:return wn(t,i,i.pendingProps.children,o),i.child;case 12:return wn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,m=i.memoizedProps,E=f.value,Dt(Aa,c._currentValue),c._currentValue=E,m!==null)if(Jn(m.value,E)){if(m.children===f.children&&!Nn.current){i=Li(t,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var U=m.dependencies;if(U!==null){E=m.child;for(var V=U.firstContext;V!==null;){if(V.context===c){if(m.tag===1){V=Ni(-1,o&-o),V.tag=2;var ce=m.updateQueue;if(ce!==null){ce=ce.shared;var Se=ce.pending;Se===null?V.next=V:(V.next=Se.next,Se.next=V),ce.pending=V}}m.lanes|=o,V=m.alternate,V!==null&&(V.lanes|=o),Pc(m.return,o,i),U.lanes|=o;break}V=V.next}}else if(m.tag===10)E=m.type===i.type?null:m.child;else if(m.tag===18){if(E=m.return,E===null)throw Error(n(341));E.lanes|=o,U=E.alternate,U!==null&&(U.lanes|=o),Pc(E,o,i),E=m.sibling}else E=m.child;if(E!==null)E.return=m;else for(E=m;E!==null;){if(E===i){E=null;break}if(m=E.sibling,m!==null){m.return=E.return,E=m;break}E=E.return}m=E}wn(t,i,f.children,o),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,vs(i,o),f=Xn(f),c=c(f),i.flags|=1,wn(t,i,c,o),i.child;case 14:return c=i.type,f=ti(c,i.pendingProps),f=ti(c.type,f),tp(t,i,c,f,o);case 15:return np(t,i,i.type,i.pendingProps,o);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ti(c,f),ka(t,i),i.tag=1,Ln(c)?(t=!0,ya(i)):t=!1,vs(i,o),qh(i,c,f),Xc(i,c,f,o),Kc(null,i,c,!0,t,o);case 19:return up(t,i,o);case 22:return ip(t,i,o)}throw Error(n(156,i.tag))};function Ip(t,i){return na(t,i)}function Sv(t,i,o,c){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(t,i,o,c){return new Sv(t,i,o,c)}function gu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Mv(t){if(typeof t=="function")return gu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===oe)return 11;if(t===te)return 14}return 2}function dr(t,i){var o=t.alternate;return o===null?(o=$n(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function $a(t,i,o,c,f,m){var E=2;if(c=t,typeof t=="function")gu(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case k:return Or(o.children,f,m,i);case G:E=8,f|=8;break;case P:return t=$n(12,o,i,f|2),t.elementType=P,t.lanes=m,t;case Q:return t=$n(13,o,i,f),t.elementType=Q,t.lanes=m,t;case ue:return t=$n(19,o,i,f),t.elementType=ue,t.lanes=m,t;case re:return Ka(o,f,m,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A:E=10;break e;case B:E=9;break e;case oe:E=11;break e;case te:E=14;break e;case le:E=16,c=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=$n(E,o,i,f),i.elementType=t,i.type=c,i.lanes=m,i}function Or(t,i,o,c){return t=$n(7,t,c,i),t.lanes=o,t}function Ka(t,i,o,c){return t=$n(22,t,c,i),t.elementType=re,t.lanes=o,t.stateNode={isHidden:!1},t}function vu(t,i,o){return t=$n(6,t,null,i),t.lanes=o,t}function _u(t,i,o){return i=$n(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Ev(t,i,o,c,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mn(0),this.expirationTimes=mn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mn(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function xu(t,i,o,c,f,m,E,U,V){return t=new Ev(t,i,o,U,V),i===1?(i=1,m===!0&&(i|=8)):i=0,m=$n(3,null,null,i),t.current=m,m.stateNode=t,m.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lc(m),t}function wv(t,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:c==null?null:""+c,children:t,containerInfo:i,implementation:o}}function Up(t){if(!t)return nr;t=t._reactInternals;e:{if(pi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Ln(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Ln(o))return ch(t,o,i)}return i}function Fp(t,i,o,c,f,m,E,U,V){return t=xu(o,c,!0,t,f,m,E,U,V),t.context=Up(null),o=t.current,c=Tn(),f=cr(o),m=Ni(c,f),m.callback=i??null,sr(o,m,f),t.current.lanes=f,tn(t,f,c),Un(t,c),t}function Za(t,i,o,c){var f=i.current,m=Tn(),E=cr(f);return o=Up(o),i.context===null?i.context=o:i.pendingContext=o,i=Ni(m,E),i.payload={element:t},c=c===void 0?null:c,c!==null&&(i.callback=c),t=sr(f,i,E),t!==null&&(ri(t,f,E,m),Ra(t,f,E)),E}function Qa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Op(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function yu(t,i){Op(t,i),(t=t.alternate)&&Op(t,i)}function Tv(){return null}var kp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Su(t){this._internalRoot=t}Ja.prototype.render=Su.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Za(t,i,null,null)},Ja.prototype.unmount=Su.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Ir(function(){Za(null,t,null,null)}),i[Ai]=null}};function Ja(t){this._internalRoot=t}Ja.prototype.unstable_scheduleHydration=function(t){if(t){var i=Sf();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Zi.length&&i!==0&&i<Zi[o].priority;o++);Zi.splice(o,0,t),o===0&&wf(t)}};function Mu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function el(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zp(){}function Av(t,i,o,c,f){if(f){if(typeof c=="function"){var m=c;c=function(){var ce=Qa(E);m.call(ce)}}var E=Fp(i,c,t,0,null,!1,!1,"",zp);return t._reactRootContainer=E,t[Ai]=E.current,go(t.nodeType===8?t.parentNode:t),Ir(),E}for(;f=t.lastChild;)t.removeChild(f);if(typeof c=="function"){var U=c;c=function(){var ce=Qa(V);U.call(ce)}}var V=xu(t,0,!1,null,null,!1,!1,"",zp);return t._reactRootContainer=V,t[Ai]=V.current,go(t.nodeType===8?t.parentNode:t),Ir(function(){Za(i,V,o,c)}),V}function tl(t,i,o,c,f){var m=o._reactRootContainer;if(m){var E=m;if(typeof f=="function"){var U=f;f=function(){var V=Qa(E);U.call(V)}}Za(i,E,t,f)}else E=Av(o,i,t,f,c);return Qa(E)}xf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=vt(i.pendingLanes);o!==0&&(nn(i,o|1),Un(i,J()),(Et&6)===0&&(Ms=J()+500,ir()))}break;case 13:Ir(function(){var c=Pi(t,1);if(c!==null){var f=Tn();ri(c,t,1,f)}}),yu(t,1)}},ql=function(t){if(t.tag===13){var i=Pi(t,134217728);if(i!==null){var o=Tn();ri(i,t,134217728,o)}yu(t,134217728)}},yf=function(t){if(t.tag===13){var i=cr(t),o=Pi(t,i);if(o!==null){var c=Tn();ri(o,t,i,c)}yu(t,i)}},Sf=function(){return Mt},Mf=function(t,i){var o=Mt;try{return Mt=t,i()}finally{Mt=o}},Re=function(t,i,o){switch(i){case"input":if(ct(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==t&&c.form===t.form){var f=_a(c);if(!f)throw Error(n(90));pt(c),ct(c,f)}}}break;case"textarea":he(t,o);break;case"select":i=o.value,i!=null&&L(t,!!o.multiple,i,!1)}},It=hu,$t=Ir;var Cv={usingClientEntryPoint:!1,Events:[xo,cs,_a,Le,ot,hu]},Do={findFiberByHostInstance:Ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rv={bundleType:Do.bundleType,version:Do.version,rendererPackageName:Do.rendererPackageName,rendererConfig:Do.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ea(t),t===null?null:t.stateNode},findFiberByHostInstance:Do.findFiberByHostInstance||Tv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{et=nl.inject(Rv),Xe=nl}catch{}}return Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cv,Fn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mu(i))throw Error(n(200));return wv(t,i,null,o)},Fn.createRoot=function(t,i){if(!Mu(t))throw Error(n(299));var o=!1,c="",f=kp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=xu(t,1,!1,null,null,o,!1,c,f),t[Ai]=i.current,go(t.nodeType===8?t.parentNode:t),new Su(i)},Fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=ea(i),t=t===null?null:t.stateNode,t},Fn.flushSync=function(t){return Ir(t)},Fn.hydrate=function(t,i,o){if(!el(i))throw Error(n(200));return tl(null,t,i,!0,o)},Fn.hydrateRoot=function(t,i,o){if(!Mu(t))throw Error(n(405));var c=o!=null&&o.hydratedSources||null,f=!1,m="",E=kp;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=Fp(i,null,t,1,o??null,f,!1,m,E),t[Ai]=i.current,go(t),c)for(t=0;t<c.length;t++)o=c[t],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new Ja(i)},Fn.render=function(t,i,o){if(!el(i))throw Error(n(200));return tl(null,t,i,!1,o)},Fn.unmountComponentAtNode=function(t){if(!el(t))throw Error(n(40));return t._reactRootContainer?(Ir(function(){tl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ai]=null})}),!0):!1},Fn.unstable_batchedUpdates=hu,Fn.unstable_renderSubtreeIntoContainer=function(t,i,o,c){if(!el(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return tl(t,i,o,!1,c)},Fn.version="18.3.1-next-f1338f8080-20240426",Fn}var qp;function Fv(){if(qp)return Tu.exports;qp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Tu.exports=Uv(),Tu.exports}var Yp;function Ov(){if(Yp)return il;Yp=1;var s=Fv();return il.createRoot=s.createRoot,il.hydrateRoot=s.hydrateRoot,il}var kv=Ov();const zv=og(kv),nf=6378.137,rf=2*Math.PI*nf;function Bi(s){return s*Math.PI/180}function cd(s){return s*180/Math.PI}function Bv(s){let e=(s+180)%360;return e<0&&(e+=360),e-180}function lg(s,e){const n=Bi(s.lat),r=Bi(e.lat),a=Bi(e.lat-s.lat),l=Bi(e.lng-s.lng),d=Math.sin(a/2)*Math.sin(a/2)+Math.cos(n)*Math.cos(r)*Math.sin(l/2)*Math.sin(l/2),u=Math.max(0,Math.min(1,d)),h=2*Math.atan2(Math.sqrt(u),Math.sqrt(1-u));return nf*h}function Hv(s,e){const n=lg(s,e);return Math.max(0,rf-n)}function Fl(s){const e=Bi(s.lat),n=Bi(s.lng),r=Math.cos(e)*Math.sin(n),a=Math.sin(e),l=Math.cos(e)*Math.cos(n);return[r,a,l]}function cg(s,e,n){const r=Math.sqrt(s*s+e*e+n*n);if(r===0)return{lat:0,lng:0};const a=s/r,l=Math.max(-1,Math.min(1,e/r)),d=n/r,u=cd(Math.asin(l)),h=cd(Math.atan2(a,d));return{lat:u,lng:Bv(h)}}function xr(s){return s<1?`${Math.round(s*1e3).toLocaleString()} m`:`${s.toLocaleString(void 0,{minimumFractionDigits:1,maximumFractionDigits:1})} km`}const Vv=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];function $p(s){const e=(s%360+360)%360,n=Math.round(e/22.5)%16;return Vv[n]}function ug(s,e){if(Math.abs(s.lat-e.lat)<1e-7&&Math.abs(s.lng-e.lng)<1e-7)return 0;const n=Bi(s.lat),r=Bi(e.lat),a=Bi(e.lng-s.lng),l=Math.sin(a)*Math.cos(r),d=Math.cos(n)*Math.sin(r)-Math.sin(n)*Math.cos(r)*Math.cos(a),u=Math.atan2(l,d),h=(cd(u)+360)%360;return Math.round(h*10)/10}function Gv(s,e){if(Math.abs(s.lat-e.lat)<1e-7&&Math.abs(s.lng-e.lng)<1e-7)return 180;const n=ug(s,e);return Math.round((n+180)%360*10)/10}function Hs(s){const e=Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);return e<1e-12?[1,0,0]:[s[0]/e,s[1]/e,s[2]/e]}function dg(s,e){return s[0]*e[0]+s[1]*e[1]+s[2]*e[2]}function Wv(s,e){return[s[1]*e[2]-s[2]*e[1],s[2]*e[0]-s[0]*e[2],s[0]*e[1]-s[1]*e[0]]}function Kp(s){const e=Math.abs(s[0]),n=Math.abs(s[1]),r=Math.abs(s[2]);let a;return e<=n&&e<=r?a=[1,0,0]:n<=r?a=[0,1,0]:a=[0,0,1],Hs(Wv(s,a))}function Zp(s,e,n=360){const r=Hs(Fl(s)),a=Hs(Fl(e)),l=Math.max(-1,Math.min(1,dg(r,a))),d=Math.acos(l),u=r;let h;if(d<1e-6)h=Kp(u);else if(Math.PI-d<1e-6)h=Kp(u);else{const _=[a[0]-l*r[0],a[1]-l*r[1],a[2]-l*r[2]];h=Hs(_)}const g=-(2*Math.PI-d),p=[];for(let _=0;_<=n;_++){const S=_/n*g,T=Math.cos(S),M=Math.sin(S),y=T*u[0]+M*h[0],v=T*u[1]+M*h[1],O=T*u[2]+M*h[2],D=cg(y,v,O);p.push(D)}return p[0]={lat:s.lat,lng:s.lng},p[p.length-1]={lat:e.lat,lng:e.lng},p}function Qp(s,e,n=60){const r=Hs(Fl(s)),a=Hs(Fl(e)),l=Math.max(-1,Math.min(1,dg(r,a))),d=Math.acos(l);if(d<1e-6)return[{...s},{...e}];const u=Math.sin(d),h=[];for(let g=0;g<=n;g++){const p=g/n;let _,x,S;if(u<1e-6)_=r[0],x=r[1],S=r[2];else{const T=Math.sin((1-p)*d)/u,M=Math.sin(p*d)/u;_=T*r[0]+M*a[0],x=T*r[1]+M*a[1],S=T*r[2]+M*a[2]}h.push(cg(_,x,S))}return h[0]={lat:s.lat,lng:s.lng},h[h.length-1]={lat:e.lat,lng:e.lng},h}function Jp(s,e){const n=lg(s,e),r=Hv(s,e),a=Math.max(0,r-n);let l;n<.05?l=Math.round(r/.05):l=Math.round(r/n*10)/10;const d=ug(s,e),u=$p(d),h=Gv(s,e),g=$p(h),p=Math.max(.1,Math.round(n/40*10)/10),_=Math.round(r/40),x=Math.max(.1,Math.round(n/850*10)/10),S=Math.round(r/850*10)/10;return{shortestDistanceKm:Math.round(n*10)/10,longWayDistanceKm:Math.round(r*10)/10,extraDistanceKm:Math.round(a*10)/10,multiplier:l,shortestBearing:d,shortestBearingCompass:u,longWayBearing:h,longWayBearingCompass:g,shortestWalkingDays:p,longWayWalkingDays:_,normalFlyingHours:x,longWayFlyingHours:S}}const Ol=[{id:"paris-eiffel-louvre",title:"Eiffel Tower → The Louvre",description:"Paris, France",from:{id:"eiffel-tower",name:"Eiffel Tower, Champ de Mars, Paris, France",shortName:"Eiffel Tower, Paris",coords:{lat:48.8584,lng:2.2945}},to:{id:"louvre-museum",name:"Louvre Museum, Rue de Rivoli, Paris, France",shortName:"The Louvre, Paris",coords:{lat:48.8606,lng:2.3376}},standardDistanceKm:3.5,longDistanceKm:40071.5,multiplier:11449,highlight:"Via the South Pacific, Cape Horn, and Indian Ocean"},{id:"nyc-empire-times",title:"Empire State → Times Square",description:"New York City, USA",from:{id:"empire-state",name:"Empire State Building, 5th Ave, New York, NY, USA",shortName:"Empire State Building",coords:{lat:40.7484,lng:-73.9857}},to:{id:"times-square",name:"Times Square, Broadway, New York, NY, USA",shortName:"Times Square, Manhattan",coords:{lat:40.758,lng:-73.9855}},standardDistanceKm:1.1,longDistanceKm:40073.9,multiplier:36430,highlight:"Via Antarctica, Western Australia, and the North Pole"},{id:"tokyo-tower-shibuya",title:"Tokyo Tower → Shibuya Crossing",description:"Tokyo, Japan",from:{id:"tokyo-tower",name:"Tokyo Tower, Shibakoen, Minato City, Tokyo, Japan",shortName:"Tokyo Tower",coords:{lat:35.6586,lng:139.7454}},to:{id:"shibuya-crossing",name:"Shibuya Scramble Crossing, Shibuya City, Tokyo, Japan",shortName:"Shibuya Crossing",coords:{lat:35.6595,lng:139.7005}},standardDistanceKm:4.1,longDistanceKm:40070.9,multiplier:9773,highlight:"Via the Atlantic Ocean, Southern Africa, and the Bering Strait"},{id:"london-ben-tower",title:"Big Ben → Tower of London",description:"London, United Kingdom",from:{id:"big-ben",name:"Big Ben, Westminster, London, UK",shortName:"Big Ben, London",coords:{lat:51.5007,lng:-.1246}},to:{id:"tower-of-london",name:"Tower of London, London, UK",shortName:"Tower of London",coords:{lat:51.5081,lng:-.0759}},standardDistanceKm:3.6,longDistanceKm:40071.4,multiplier:11130,highlight:"Via the Drake Passage, New Zealand, and Scandinavia"},{id:"sf-bridge-alcatraz",title:"Golden Gate → Alcatraz Island",description:"San Francisco, USA",from:{id:"golden-gate",name:"Golden Gate Bridge, San Francisco, CA, USA",shortName:"Golden Gate Bridge",coords:{lat:37.8199,lng:-122.4783}},to:{id:"alcatraz",name:"Alcatraz Island, San Francisco Bay, CA, USA",shortName:"Alcatraz Island",coords:{lat:37.8267,lng:-122.423}},standardDistanceKm:4.9,longDistanceKm:40070.1,multiplier:8177,highlight:"Via Madagascar, Central Asia, and the Arctic Ice Shelf"}];/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sf="173",jv=0,em=1,Xv=2,fg=1,qv=2,zi=3,Er=0,Cn=1,li=2,Sr=0,Vs=1,ud=2,tm=3,nm=4,Yv=5,Xr=100,$v=101,Kv=102,Zv=103,Qv=104,Jv=200,e_=201,t_=202,n_=203,dd=204,fd=205,i_=206,r_=207,s_=208,o_=209,a_=210,l_=211,c_=212,u_=213,d_=214,hd=0,pd=1,md=2,Xs=3,gd=4,vd=5,_d=6,xd=7,hg=0,f_=1,h_=2,Mr=0,p_=1,m_=2,g_=3,pg=4,v_=5,__=6,x_=7,mg=300,qs=301,Ys=302,yd=303,Sd=304,Vl=306,Md=1e3,Kr=1001,Ed=1002,di=1003,y_=1004,rl=1005,Si=1006,Ru=1007,Zr=1008,Wi=1009,gg=1010,vg=1011,Vo=1012,of=1013,Qr=1014,Hi=1015,Wo=1016,af=1017,lf=1018,$s=1020,_g=35902,xg=1021,yg=1022,ui=1023,Sg=1024,Mg=1025,Gs=1026,Ks=1027,Eg=1028,cf=1029,wg=1030,uf=1031,df=1033,Pl=33776,Nl=33777,Ll=33778,Dl=33779,wd=35840,Td=35841,Ad=35842,Cd=35843,Rd=36196,bd=37492,Pd=37496,Nd=37808,Ld=37809,Dd=37810,Id=37811,Ud=37812,Fd=37813,Od=37814,kd=37815,zd=37816,Bd=37817,Hd=37818,Vd=37819,Gd=37820,Wd=37821,Il=36492,jd=36494,Xd=36495,Tg=36283,qd=36284,Yd=36285,$d=36286,S_=3200,M_=3201,E_=0,w_=1,yr="",Zn="srgb",Zs="srgb-linear",kl="linear",Pt="srgb",ws=7680,im=519,T_=512,A_=513,C_=514,Ag=515,R_=516,b_=517,P_=518,N_=519,rm=35044,sm="300 es",Vi=2e3,zl=2001;class Js{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(n);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,d=a.length;l<d;l++)a[l].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bu=Math.PI/180,Kd=180/Math.PI;function jo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[n&63|128]+yn[n>>8&255]+"-"+yn[n>>16&255]+yn[n>>24&255]+yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]).toLowerCase()}function xt(s,e,n){return Math.max(e,Math.min(n,s))}function L_(s,e){return(s%e+e)%e}function Pu(s,e,n){return(1-n)*s+n*e}function Uo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function On(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Rt{constructor(e=0,n=0){Rt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),l=this.x-e.x,d=this.y-e.y;return this.x=l*r-d*a+e.x,this.y=l*a+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,n,r,a,l,d,u,h,g){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,d,u,h,g)}set(e,n,r,a,l,d,u,h,g){const p=this.elements;return p[0]=e,p[1]=a,p[2]=u,p[3]=n,p[4]=l,p[5]=h,p[6]=r,p[7]=d,p[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,d=r[0],u=r[3],h=r[6],g=r[1],p=r[4],_=r[7],x=r[2],S=r[5],T=r[8],M=a[0],y=a[3],v=a[6],O=a[1],D=a[4],b=a[7],H=a[2],F=a[5],k=a[8];return l[0]=d*M+u*O+h*H,l[3]=d*y+u*D+h*F,l[6]=d*v+u*b+h*k,l[1]=g*M+p*O+_*H,l[4]=g*y+p*D+_*F,l[7]=g*v+p*b+_*k,l[2]=x*M+S*O+T*H,l[5]=x*y+S*D+T*F,l[8]=x*v+S*b+T*k,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],d=e[4],u=e[5],h=e[6],g=e[7],p=e[8];return n*d*p-n*u*g-r*l*p+r*u*h+a*l*g-a*d*h}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],d=e[4],u=e[5],h=e[6],g=e[7],p=e[8],_=p*d-u*g,x=u*h-p*l,S=g*l-d*h,T=n*_+r*x+a*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/T;return e[0]=_*M,e[1]=(a*g-p*r)*M,e[2]=(u*r-a*d)*M,e[3]=x*M,e[4]=(p*n-a*h)*M,e[5]=(a*l-u*n)*M,e[6]=S*M,e[7]=(r*h-g*n)*M,e[8]=(d*n-r*l)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,l,d,u){const h=Math.cos(l),g=Math.sin(l);return this.set(r*h,r*g,-r*(h*d+g*u)+d+e,-a*g,a*h,-a*(-g*d+h*u)+u+n,0,0,1),this}scale(e,n){return this.premultiply(Nu.makeScale(e,n)),this}rotate(e){return this.premultiply(Nu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Nu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nu=new ut;function Cg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Go(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function D_(){const s=Go("canvas");return s.style.display="block",s}const om={};function ks(s){s in om||(om[s]=!0,console.warn(s))}function I_(s,e,n){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}function U_(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function F_(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const am=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lm=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function O_(){const s={enabled:!0,workingColorSpace:Zs,spaces:{},convert:function(a,l,d){return this.enabled===!1||l===d||!l||!d||(this.spaces[l].transfer===Pt&&(a.r=Gi(a.r),a.g=Gi(a.g),a.b=Gi(a.b)),this.spaces[l].primaries!==this.spaces[d].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Pt&&(a.r=Ws(a.r),a.g=Ws(a.g),a.b=Ws(a.b))),a},fromWorkingColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},toWorkingColorSpace:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===yr?kl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,d){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Zs]:{primaries:e,whitePoint:r,transfer:kl,toXYZ:am,fromXYZ:lm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Zn},outputColorSpaceConfig:{drawingBufferColorSpace:Zn}},[Zn]:{primaries:e,whitePoint:r,transfer:Pt,toXYZ:am,fromXYZ:lm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Zn}}}),s}const At=O_();function Gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ws(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ts;class k_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ts===void 0&&(Ts=Go("canvas")),Ts.width=e.width,Ts.height=e.height;const r=Ts.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ts}return n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Go("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let d=0;d<l.length;d++)l[d]=Gi(l[d]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Gi(n[r]/255)*255):n[r]=Gi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let z_=0;class Rg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=jo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let d=0,u=a.length;d<u;d++)a[d].isDataTexture?l.push(Lu(a[d].image)):l.push(Lu(a[d]))}else l=Lu(a);r.url=l}return n||(e.images[this.uuid]=r),r}}function Lu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?k_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let B_=0;class Rn extends Js{constructor(e=Rn.DEFAULT_IMAGE,n=Rn.DEFAULT_MAPPING,r=Kr,a=Kr,l=Si,d=Zr,u=ui,h=Wi,g=Rn.DEFAULT_ANISOTROPY,p=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:B_++}),this.uuid=jo(),this.name="",this.source=new Rg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=d,this.anisotropy=g,this.format=u,this.internalFormat=null,this.type=h,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Md:e.x=e.x-Math.floor(e.x);break;case Kr:e.x=e.x<0?0:1;break;case Ed:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Md:e.y=e.y-Math.floor(e.y);break;case Kr:e.y=e.y<0?0:1;break;case Ed:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=mg;Rn.DEFAULT_ANISOTROPY=1;class jt{constructor(e=0,n=0,r=0,a=1){jt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=this.w,d=e.elements;return this.x=d[0]*n+d[4]*r+d[8]*a+d[12]*l,this.y=d[1]*n+d[5]*r+d[9]*a+d[13]*l,this.z=d[2]*n+d[6]*r+d[10]*a+d[14]*l,this.w=d[3]*n+d[7]*r+d[11]*a+d[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,l;const h=e.elements,g=h[0],p=h[4],_=h[8],x=h[1],S=h[5],T=h[9],M=h[2],y=h[6],v=h[10];if(Math.abs(p-x)<.01&&Math.abs(_-M)<.01&&Math.abs(T-y)<.01){if(Math.abs(p+x)<.1&&Math.abs(_+M)<.1&&Math.abs(T+y)<.1&&Math.abs(g+S+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(g+1)/2,b=(S+1)/2,H=(v+1)/2,F=(p+x)/4,k=(_+M)/4,G=(T+y)/4;return D>b&&D>H?D<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(D),a=F/r,l=k/r):b>H?b<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(b),r=F/a,l=G/a):H<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(H),r=k/l,a=G/l),this.set(r,a,l,n),this}let O=Math.sqrt((y-T)*(y-T)+(_-M)*(_-M)+(x-p)*(x-p));return Math.abs(O)<.001&&(O=1),this.x=(y-T)/O,this.y=(_-M)/O,this.z=(x-p)/O,this.w=Math.acos((g+S+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this.z=xt(this.z,e.z,n.z),this.w=xt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this.z=xt(this.z,e,n),this.w=xt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class H_ extends Js{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new jt(0,0,e,n),this.scissorTest=!1,this.viewport=new jt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Rn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let u=0;u<d;u++)this.textures[u]=l.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const n=Object.assign({},e.texture.image);return this.texture.source=new Rg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jr extends H_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class bg extends Rn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=di,this.minFilter=di,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class V_ extends Rn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=di,this.minFilter=di,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,l,d,u){let h=r[a+0],g=r[a+1],p=r[a+2],_=r[a+3];const x=l[d+0],S=l[d+1],T=l[d+2],M=l[d+3];if(u===0){e[n+0]=h,e[n+1]=g,e[n+2]=p,e[n+3]=_;return}if(u===1){e[n+0]=x,e[n+1]=S,e[n+2]=T,e[n+3]=M;return}if(_!==M||h!==x||g!==S||p!==T){let y=1-u;const v=h*x+g*S+p*T+_*M,O=v>=0?1:-1,D=1-v*v;if(D>Number.EPSILON){const H=Math.sqrt(D),F=Math.atan2(H,v*O);y=Math.sin(y*F)/H,u=Math.sin(u*F)/H}const b=u*O;if(h=h*y+x*b,g=g*y+S*b,p=p*y+T*b,_=_*y+M*b,y===1-u){const H=1/Math.sqrt(h*h+g*g+p*p+_*_);h*=H,g*=H,p*=H,_*=H}}e[n]=h,e[n+1]=g,e[n+2]=p,e[n+3]=_}static multiplyQuaternionsFlat(e,n,r,a,l,d){const u=r[a],h=r[a+1],g=r[a+2],p=r[a+3],_=l[d],x=l[d+1],S=l[d+2],T=l[d+3];return e[n]=u*T+p*_+h*S-g*x,e[n+1]=h*T+p*x+g*_-u*S,e[n+2]=g*T+p*S+u*x-h*_,e[n+3]=p*T-u*_-h*x-g*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,l=e._z,d=e._order,u=Math.cos,h=Math.sin,g=u(r/2),p=u(a/2),_=u(l/2),x=h(r/2),S=h(a/2),T=h(l/2);switch(d){case"XYZ":this._x=x*p*_+g*S*T,this._y=g*S*_-x*p*T,this._z=g*p*T+x*S*_,this._w=g*p*_-x*S*T;break;case"YXZ":this._x=x*p*_+g*S*T,this._y=g*S*_-x*p*T,this._z=g*p*T-x*S*_,this._w=g*p*_+x*S*T;break;case"ZXY":this._x=x*p*_-g*S*T,this._y=g*S*_+x*p*T,this._z=g*p*T+x*S*_,this._w=g*p*_-x*S*T;break;case"ZYX":this._x=x*p*_-g*S*T,this._y=g*S*_+x*p*T,this._z=g*p*T-x*S*_,this._w=g*p*_+x*S*T;break;case"YZX":this._x=x*p*_+g*S*T,this._y=g*S*_+x*p*T,this._z=g*p*T-x*S*_,this._w=g*p*_-x*S*T;break;case"XZY":this._x=x*p*_-g*S*T,this._y=g*S*_-x*p*T,this._z=g*p*T+x*S*_,this._w=g*p*_+x*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],l=n[8],d=n[1],u=n[5],h=n[9],g=n[2],p=n[6],_=n[10],x=r+u+_;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(p-h)*S,this._y=(l-g)*S,this._z=(d-a)*S}else if(r>u&&r>_){const S=2*Math.sqrt(1+r-u-_);this._w=(p-h)/S,this._x=.25*S,this._y=(a+d)/S,this._z=(l+g)/S}else if(u>_){const S=2*Math.sqrt(1+u-r-_);this._w=(l-g)/S,this._x=(a+d)/S,this._y=.25*S,this._z=(h+p)/S}else{const S=2*Math.sqrt(1+_-r-u);this._w=(d-a)/S,this._x=(l+g)/S,this._y=(h+p)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,l=e._z,d=e._w,u=n._x,h=n._y,g=n._z,p=n._w;return this._x=r*p+d*u+a*g-l*h,this._y=a*p+d*h+l*u-r*g,this._z=l*p+d*g+r*h-a*u,this._w=d*p-r*u-a*h-l*g,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,d=this._w;let u=d*e._w+r*e._x+a*e._y+l*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=d,this._x=r,this._y=a,this._z=l,this;const h=1-u*u;if(h<=Number.EPSILON){const S=1-n;return this._w=S*d+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*l+n*this._z,this.normalize(),this}const g=Math.sqrt(h),p=Math.atan2(g,u),_=Math.sin((1-n)*p)/g,x=Math.sin(n*p)/g;return this._w=d*_+this._w*x,this._x=r*_+this._x*x,this._y=a*_+this._y*x,this._z=l*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(e=0,n=0,r=0){se.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(cm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(cm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*a,this.y=l[1]*n+l[4]*r+l[7]*a,this.z=l[2]*n+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=e.elements,d=1/(l[3]*n+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*a+l[12])*d,this.y=(l[1]*n+l[5]*r+l[9]*a+l[13])*d,this.z=(l[2]*n+l[6]*r+l[10]*a+l[14])*d,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,l=e.x,d=e.y,u=e.z,h=e.w,g=2*(d*a-u*r),p=2*(u*n-l*a),_=2*(l*r-d*n);return this.x=n+h*g+d*_-u*p,this.y=r+h*p+u*g-l*_,this.z=a+h*_+l*p-d*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*a,this.y=l[1]*n+l[5]*r+l[9]*a,this.z=l[2]*n+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this.z=xt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this.z=xt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,l=e.z,d=n.x,u=n.y,h=n.z;return this.x=a*h-l*u,this.y=l*d-r*h,this.z=r*u-a*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Du.copy(this).projectOnVector(e),this.sub(Du)}reflect(e){return this.sub(Du.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Du=new se,cm=new Xo;class qo{constructor(e=new se(1/0,1/0,1/0),n=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(si.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(si.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=si.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let d=0,u=l.count;d<u;d++)e.isMesh===!0?e.getVertexPosition(d,si):si.fromBufferAttribute(l,d),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),sl.copy(r.boundingBox)),sl.applyMatrix4(e.matrixWorld),this.union(sl)}const a=e.children;for(let l=0,d=a.length;l<d;l++)this.expandByObject(a[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fo),ol.subVectors(this.max,Fo),As.subVectors(e.a,Fo),Cs.subVectors(e.b,Fo),Rs.subVectors(e.c,Fo),hr.subVectors(Cs,As),pr.subVectors(Rs,Cs),kr.subVectors(As,Rs);let n=[0,-hr.z,hr.y,0,-pr.z,pr.y,0,-kr.z,kr.y,hr.z,0,-hr.x,pr.z,0,-pr.x,kr.z,0,-kr.x,-hr.y,hr.x,0,-pr.y,pr.x,0,-kr.y,kr.x,0];return!Iu(n,As,Cs,Rs,ol)||(n=[1,0,0,0,1,0,0,0,1],!Iu(n,As,Cs,Rs,ol))?!1:(al.crossVectors(hr,pr),n=[al.x,al.y,al.z],Iu(n,As,Cs,Rs,ol))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ii=[new se,new se,new se,new se,new se,new se,new se,new se],si=new se,sl=new qo,As=new se,Cs=new se,Rs=new se,hr=new se,pr=new se,kr=new se,Fo=new se,ol=new se,al=new se,zr=new se;function Iu(s,e,n,r,a){for(let l=0,d=s.length-3;l<=d;l+=3){zr.fromArray(s,l);const u=a.x*Math.abs(zr.x)+a.y*Math.abs(zr.y)+a.z*Math.abs(zr.z),h=e.dot(zr),g=n.dot(zr),p=r.dot(zr);if(Math.max(-Math.max(h,g,p),Math.min(h,g,p))>u)return!1}return!0}const G_=new qo,Oo=new se,Uu=new se;class Yo{constructor(e=new se,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):G_.setFromPoints(e).getCenter(r);let a=0;for(let l=0,d=e.length;l<d;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oo.subVectors(e,this.center);const n=Oo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Oo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oo.copy(e.center).add(Uu)),this.expandByPoint(Oo.copy(e.center).sub(Uu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ui=new se,Fu=new se,ll=new se,mr=new se,Ou=new se,cl=new se,ku=new se;class Gl{constructor(e=new se,n=new se(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ui.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,n),Ui.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Fu.copy(e).add(n).multiplyScalar(.5),ll.copy(n).sub(e).normalize(),mr.copy(this.origin).sub(Fu);const l=e.distanceTo(n)*.5,d=-this.direction.dot(ll),u=mr.dot(this.direction),h=-mr.dot(ll),g=mr.lengthSq(),p=Math.abs(1-d*d);let _,x,S,T;if(p>0)if(_=d*h-u,x=d*u-h,T=l*p,_>=0)if(x>=-T)if(x<=T){const M=1/p;_*=M,x*=M,S=_*(_+d*x+2*u)+x*(d*_+x+2*h)+g}else x=l,_=Math.max(0,-(d*x+u)),S=-_*_+x*(x+2*h)+g;else x=-l,_=Math.max(0,-(d*x+u)),S=-_*_+x*(x+2*h)+g;else x<=-T?(_=Math.max(0,-(-d*l+u)),x=_>0?-l:Math.min(Math.max(-l,-h),l),S=-_*_+x*(x+2*h)+g):x<=T?(_=0,x=Math.min(Math.max(-l,-h),l),S=x*(x+2*h)+g):(_=Math.max(0,-(d*l+u)),x=_>0?l:Math.min(Math.max(-l,-h),l),S=-_*_+x*(x+2*h)+g);else x=d>0?-l:l,_=Math.max(0,-(d*x+u)),S=-_*_+x*(x+2*h)+g;return r&&r.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(Fu).addScaledVector(ll,x),S}intersectSphere(e,n){Ui.subVectors(e.center,this.origin);const r=Ui.dot(this.direction),a=Ui.dot(Ui)-r*r,l=e.radius*e.radius;if(a>l)return null;const d=Math.sqrt(l-a),u=r-d,h=r+d;return h<0?null:u<0?this.at(h,n):this.at(u,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,l,d,u,h;const g=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,x=this.origin;return g>=0?(r=(e.min.x-x.x)*g,a=(e.max.x-x.x)*g):(r=(e.max.x-x.x)*g,a=(e.min.x-x.x)*g),p>=0?(l=(e.min.y-x.y)*p,d=(e.max.y-x.y)*p):(l=(e.max.y-x.y)*p,d=(e.min.y-x.y)*p),r>d||l>a||((l>r||isNaN(r))&&(r=l),(d<a||isNaN(a))&&(a=d),_>=0?(u=(e.min.z-x.z)*_,h=(e.max.z-x.z)*_):(u=(e.max.z-x.z)*_,h=(e.min.z-x.z)*_),r>h||u>a)||((u>r||r!==r)&&(r=u),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,n,r,a,l){Ou.subVectors(n,e),cl.subVectors(r,e),ku.crossVectors(Ou,cl);let d=this.direction.dot(ku),u;if(d>0){if(a)return null;u=1}else if(d<0)u=-1,d=-d;else return null;mr.subVectors(this.origin,e);const h=u*this.direction.dot(cl.crossVectors(mr,cl));if(h<0)return null;const g=u*this.direction.dot(Ou.cross(mr));if(g<0||h+g>d)return null;const p=-u*mr.dot(ku);return p<0?null:this.at(p/d,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(e,n,r,a,l,d,u,h,g,p,_,x,S,T,M,y){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,d,u,h,g,p,_,x,S,T,M,y)}set(e,n,r,a,l,d,u,h,g,p,_,x,S,T,M,y){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=a,v[1]=l,v[5]=d,v[9]=u,v[13]=h,v[2]=g,v[6]=p,v[10]=_,v[14]=x,v[3]=S,v[7]=T,v[11]=M,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/bs.setFromMatrixColumn(e,0).length(),l=1/bs.setFromMatrixColumn(e,1).length(),d=1/bs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*d,n[9]=r[9]*d,n[10]=r[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,l=e.z,d=Math.cos(r),u=Math.sin(r),h=Math.cos(a),g=Math.sin(a),p=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const x=d*p,S=d*_,T=u*p,M=u*_;n[0]=h*p,n[4]=-h*_,n[8]=g,n[1]=S+T*g,n[5]=x-M*g,n[9]=-u*h,n[2]=M-x*g,n[6]=T+S*g,n[10]=d*h}else if(e.order==="YXZ"){const x=h*p,S=h*_,T=g*p,M=g*_;n[0]=x+M*u,n[4]=T*u-S,n[8]=d*g,n[1]=d*_,n[5]=d*p,n[9]=-u,n[2]=S*u-T,n[6]=M+x*u,n[10]=d*h}else if(e.order==="ZXY"){const x=h*p,S=h*_,T=g*p,M=g*_;n[0]=x-M*u,n[4]=-d*_,n[8]=T+S*u,n[1]=S+T*u,n[5]=d*p,n[9]=M-x*u,n[2]=-d*g,n[6]=u,n[10]=d*h}else if(e.order==="ZYX"){const x=d*p,S=d*_,T=u*p,M=u*_;n[0]=h*p,n[4]=T*g-S,n[8]=x*g+M,n[1]=h*_,n[5]=M*g+x,n[9]=S*g-T,n[2]=-g,n[6]=u*h,n[10]=d*h}else if(e.order==="YZX"){const x=d*h,S=d*g,T=u*h,M=u*g;n[0]=h*p,n[4]=M-x*_,n[8]=T*_+S,n[1]=_,n[5]=d*p,n[9]=-u*p,n[2]=-g*p,n[6]=S*_+T,n[10]=x-M*_}else if(e.order==="XZY"){const x=d*h,S=d*g,T=u*h,M=u*g;n[0]=h*p,n[4]=-_,n[8]=g*p,n[1]=x*_+M,n[5]=d*p,n[9]=S*_-T,n[2]=T*_-S,n[6]=u*p,n[10]=M*_+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(W_,e,j_)}lookAt(e,n,r){const a=this.elements;return Vn.subVectors(e,n),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),gr.crossVectors(r,Vn),gr.lengthSq()===0&&(Math.abs(r.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),gr.crossVectors(r,Vn)),gr.normalize(),ul.crossVectors(Vn,gr),a[0]=gr.x,a[4]=ul.x,a[8]=Vn.x,a[1]=gr.y,a[5]=ul.y,a[9]=Vn.y,a[2]=gr.z,a[6]=ul.z,a[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,d=r[0],u=r[4],h=r[8],g=r[12],p=r[1],_=r[5],x=r[9],S=r[13],T=r[2],M=r[6],y=r[10],v=r[14],O=r[3],D=r[7],b=r[11],H=r[15],F=a[0],k=a[4],G=a[8],P=a[12],A=a[1],B=a[5],oe=a[9],Q=a[13],ue=a[2],te=a[6],le=a[10],re=a[14],I=a[3],ee=a[7],$=a[11],N=a[15];return l[0]=d*F+u*A+h*ue+g*I,l[4]=d*k+u*B+h*te+g*ee,l[8]=d*G+u*oe+h*le+g*$,l[12]=d*P+u*Q+h*re+g*N,l[1]=p*F+_*A+x*ue+S*I,l[5]=p*k+_*B+x*te+S*ee,l[9]=p*G+_*oe+x*le+S*$,l[13]=p*P+_*Q+x*re+S*N,l[2]=T*F+M*A+y*ue+v*I,l[6]=T*k+M*B+y*te+v*ee,l[10]=T*G+M*oe+y*le+v*$,l[14]=T*P+M*Q+y*re+v*N,l[3]=O*F+D*A+b*ue+H*I,l[7]=O*k+D*B+b*te+H*ee,l[11]=O*G+D*oe+b*le+H*$,l[15]=O*P+D*Q+b*re+H*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],l=e[12],d=e[1],u=e[5],h=e[9],g=e[13],p=e[2],_=e[6],x=e[10],S=e[14],T=e[3],M=e[7],y=e[11],v=e[15];return T*(+l*h*_-a*g*_-l*u*x+r*g*x+a*u*S-r*h*S)+M*(+n*h*S-n*g*x+l*d*x-a*d*S+a*g*p-l*h*p)+y*(+n*g*_-n*u*S-l*d*_+r*d*S+l*u*p-r*g*p)+v*(-a*u*p-n*h*_+n*u*x+a*d*_-r*d*x+r*h*p)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],d=e[4],u=e[5],h=e[6],g=e[7],p=e[8],_=e[9],x=e[10],S=e[11],T=e[12],M=e[13],y=e[14],v=e[15],O=_*y*g-M*x*g+M*h*S-u*y*S-_*h*v+u*x*v,D=T*x*g-p*y*g-T*h*S+d*y*S+p*h*v-d*x*v,b=p*M*g-T*_*g+T*u*S-d*M*S-p*u*v+d*_*v,H=T*_*h-p*M*h-T*u*x+d*M*x+p*u*y-d*_*y,F=n*O+r*D+a*b+l*H;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/F;return e[0]=O*k,e[1]=(M*x*l-_*y*l-M*a*S+r*y*S+_*a*v-r*x*v)*k,e[2]=(u*y*l-M*h*l+M*a*g-r*y*g-u*a*v+r*h*v)*k,e[3]=(_*h*l-u*x*l-_*a*g+r*x*g+u*a*S-r*h*S)*k,e[4]=D*k,e[5]=(p*y*l-T*x*l+T*a*S-n*y*S-p*a*v+n*x*v)*k,e[6]=(T*h*l-d*y*l-T*a*g+n*y*g+d*a*v-n*h*v)*k,e[7]=(d*x*l-p*h*l+p*a*g-n*x*g-d*a*S+n*h*S)*k,e[8]=b*k,e[9]=(T*_*l-p*M*l-T*r*S+n*M*S+p*r*v-n*_*v)*k,e[10]=(d*M*l-T*u*l+T*r*g-n*M*g-d*r*v+n*u*v)*k,e[11]=(p*u*l-d*_*l-p*r*g+n*_*g+d*r*S-n*u*S)*k,e[12]=H*k,e[13]=(p*M*a-T*_*a+T*r*x-n*M*x-p*r*y+n*_*y)*k,e[14]=(T*u*a-d*M*a-T*r*h+n*M*h+d*r*y-n*u*y)*k,e[15]=(d*_*a-p*u*a+p*r*h-n*_*h-d*r*x+n*u*x)*k,this}scale(e){const n=this.elements,r=e.x,a=e.y,l=e.z;return n[0]*=r,n[4]*=a,n[8]*=l,n[1]*=r,n[5]*=a,n[9]*=l,n[2]*=r,n[6]*=a,n[10]*=l,n[3]*=r,n[7]*=a,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),l=1-r,d=e.x,u=e.y,h=e.z,g=l*d,p=l*u;return this.set(g*d+r,g*u-a*h,g*h+a*u,0,g*u+a*h,p*u+r,p*h-a*d,0,g*h-a*u,p*h+a*d,l*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,l,d){return this.set(1,r,l,0,e,1,d,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,l=n._x,d=n._y,u=n._z,h=n._w,g=l+l,p=d+d,_=u+u,x=l*g,S=l*p,T=l*_,M=d*p,y=d*_,v=u*_,O=h*g,D=h*p,b=h*_,H=r.x,F=r.y,k=r.z;return a[0]=(1-(M+v))*H,a[1]=(S+b)*H,a[2]=(T-D)*H,a[3]=0,a[4]=(S-b)*F,a[5]=(1-(x+v))*F,a[6]=(y+O)*F,a[7]=0,a[8]=(T+D)*k,a[9]=(y-O)*k,a[10]=(1-(x+M))*k,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let l=bs.set(a[0],a[1],a[2]).length();const d=bs.set(a[4],a[5],a[6]).length(),u=bs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],oi.copy(this);const g=1/l,p=1/d,_=1/u;return oi.elements[0]*=g,oi.elements[1]*=g,oi.elements[2]*=g,oi.elements[4]*=p,oi.elements[5]*=p,oi.elements[6]*=p,oi.elements[8]*=_,oi.elements[9]*=_,oi.elements[10]*=_,n.setFromRotationMatrix(oi),r.x=l,r.y=d,r.z=u,this}makePerspective(e,n,r,a,l,d,u=Vi){const h=this.elements,g=2*l/(n-e),p=2*l/(r-a),_=(n+e)/(n-e),x=(r+a)/(r-a);let S,T;if(u===Vi)S=-(d+l)/(d-l),T=-2*d*l/(d-l);else if(u===zl)S=-d/(d-l),T=-d*l/(d-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=g,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=p,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,a,l,d,u=Vi){const h=this.elements,g=1/(n-e),p=1/(r-a),_=1/(d-l),x=(n+e)*g,S=(r+a)*p;let T,M;if(u===Vi)T=(d+l)*_,M=-2*_;else if(u===zl)T=l*_,M=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=2*g,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*p,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=M,h[14]=-T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const bs=new se,oi=new Ot,W_=new se(0,0,0),j_=new se(1,1,1),gr=new se,ul=new se,Vn=new se,um=new Ot,dm=new Xo;class Mi{constructor(e=0,n=0,r=0,a=Mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,l=a[0],d=a[4],u=a[8],h=a[1],g=a[5],p=a[9],_=a[2],x=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,S),this._z=Math.atan2(-d,l)):(this._x=Math.atan2(x,g),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,S),this._z=Math.atan2(h,g)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(xt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-d,g)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-xt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-d,g));break;case"YZX":this._z=Math.asin(xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,g),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(u,S));break;case"XZY":this._z=Math.asin(-xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,g),this._y=Math.atan2(u,l)):(this._x=Math.atan2(-p,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return um.makeRotationFromQuaternion(e),this.setFromRotationMatrix(um,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return dm.setFromEuler(this),this.setFromQuaternion(dm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mi.DEFAULT_ORDER="XYZ";class ff{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let X_=0;const fm=new se,Ps=new Xo,Fi=new Ot,dl=new se,ko=new se,q_=new se,Y_=new Xo,hm=new se(1,0,0),pm=new se(0,1,0),mm=new se(0,0,1),gm={type:"added"},$_={type:"removed"},Ns={type:"childadded",child:null},zu={type:"childremoved",child:null};class cn extends Js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const e=new se,n=new Mi,r=new Xo,a=new se(1,1,1);function l(){r.setFromEuler(n,!1)}function d(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ot},normalMatrix:{value:new ut}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ff,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(hm,e)}rotateY(e){return this.rotateOnAxis(pm,e)}rotateZ(e){return this.rotateOnAxis(mm,e)}translateOnAxis(e,n){return fm.copy(e).applyQuaternion(this.quaternion),this.position.add(fm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(hm,e)}translateY(e){return this.translateOnAxis(pm,e)}translateZ(e){return this.translateOnAxis(mm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?dl.copy(e):dl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(ko,dl,this.up):Fi.lookAt(dl,ko,this.up),this.quaternion.setFromRotationMatrix(Fi),a&&(Fi.extractRotation(a.matrixWorld),Ps.setFromRotationMatrix(Fi),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gm),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent($_),zu.child=e,this.dispatchEvent(zu),zu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gm),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const d=this.children[r].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let l=0,d=a.length;l<d;l++)a[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,e,q_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,Y_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let l=0,d=a.length;l<d;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const h=u.shapes;if(Array.isArray(h))for(let g=0,p=h.length;g<p;g++){const _=h[g];l(e.shapes,_)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let h=0,g=this.material.length;h<g;h++)u.push(l(e.materials,this.material[h]));a.material=u}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let u=0;u<this.children.length;u++)a.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let u=0;u<this.animations.length;u++){const h=this.animations[u];a.animations.push(l(e.animations,h))}}if(n){const u=d(e.geometries),h=d(e.materials),g=d(e.textures),p=d(e.images),_=d(e.shapes),x=d(e.skeletons),S=d(e.animations),T=d(e.nodes);u.length>0&&(r.geometries=u),h.length>0&&(r.materials=h),g.length>0&&(r.textures=g),p.length>0&&(r.images=p),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=a,r;function d(u){const h=[];for(const g in u){const p=u[g];delete p.metadata,h.push(p)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}cn.DEFAULT_UP=new se(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new se,Oi=new se,Bu=new se,ki=new se,Ls=new se,Ds=new se,vm=new se,Hu=new se,Vu=new se,Gu=new se,Wu=new jt,ju=new jt,Xu=new jt;class ci{constructor(e=new se,n=new se,r=new se){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ai.subVectors(e,n),a.cross(ai);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,n,r,a,l){ai.subVectors(a,n),Oi.subVectors(r,n),Bu.subVectors(e,n);const d=ai.dot(ai),u=ai.dot(Oi),h=ai.dot(Bu),g=Oi.dot(Oi),p=Oi.dot(Bu),_=d*g-u*u;if(_===0)return l.set(0,0,0),null;const x=1/_,S=(g*h-u*p)*x,T=(d*p-u*h)*x;return l.set(1-S-T,T,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,n,r,a,l,d,u,h){return this.getBarycoord(e,n,r,a,ki)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,ki.x),h.addScaledVector(d,ki.y),h.addScaledVector(u,ki.z),h)}static getInterpolatedAttribute(e,n,r,a,l,d){return Wu.setScalar(0),ju.setScalar(0),Xu.setScalar(0),Wu.fromBufferAttribute(e,n),ju.fromBufferAttribute(e,r),Xu.fromBufferAttribute(e,a),d.setScalar(0),d.addScaledVector(Wu,l.x),d.addScaledVector(ju,l.y),d.addScaledVector(Xu,l.z),d}static isFrontFacing(e,n,r,a){return ai.subVectors(r,n),Oi.subVectors(e,n),ai.cross(Oi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),ai.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ci.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,l){return ci.getInterpolation(e,this.a,this.b,this.c,n,r,a,l)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,l=this.c;let d,u;Ls.subVectors(a,r),Ds.subVectors(l,r),Hu.subVectors(e,r);const h=Ls.dot(Hu),g=Ds.dot(Hu);if(h<=0&&g<=0)return n.copy(r);Vu.subVectors(e,a);const p=Ls.dot(Vu),_=Ds.dot(Vu);if(p>=0&&_<=p)return n.copy(a);const x=h*_-p*g;if(x<=0&&h>=0&&p<=0)return d=h/(h-p),n.copy(r).addScaledVector(Ls,d);Gu.subVectors(e,l);const S=Ls.dot(Gu),T=Ds.dot(Gu);if(T>=0&&S<=T)return n.copy(l);const M=S*g-h*T;if(M<=0&&g>=0&&T<=0)return u=g/(g-T),n.copy(r).addScaledVector(Ds,u);const y=p*T-S*_;if(y<=0&&_-p>=0&&S-T>=0)return vm.subVectors(l,a),u=(_-p)/(_-p+(S-T)),n.copy(a).addScaledVector(vm,u);const v=1/(y+M+x);return d=M*v,u=x*v,n.copy(r).addScaledVector(Ls,d).addScaledVector(Ds,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vr={h:0,s:0,l:0},fl={h:0,s:0,l:0};function qu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Ct{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=At.workingColorSpace){return this.r=e,this.g=n,this.b=r,At.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=At.workingColorSpace){if(e=L_(e,1),n=xt(n,0,1),r=xt(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,d=2*r-l;this.r=qu(d,l,e+1/3),this.g=qu(d,l,e),this.b=qu(d,l,e-1/3)}return At.toWorkingColorSpace(this,a),this}setStyle(e,n=Zn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const d=a[1],u=a[2];switch(d){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],d=l.length;if(d===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Zn){const r=Pg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zn){return At.fromWorkingColorSpace(Sn.copy(this),e),Math.round(xt(Sn.r*255,0,255))*65536+Math.round(xt(Sn.g*255,0,255))*256+Math.round(xt(Sn.b*255,0,255))}getHexString(e=Zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=At.workingColorSpace){At.fromWorkingColorSpace(Sn.copy(this),n);const r=Sn.r,a=Sn.g,l=Sn.b,d=Math.max(r,a,l),u=Math.min(r,a,l);let h,g;const p=(u+d)/2;if(u===d)h=0,g=0;else{const _=d-u;switch(g=p<=.5?_/(d+u):_/(2-d-u),d){case r:h=(a-l)/_+(a<l?6:0);break;case a:h=(l-r)/_+2;break;case l:h=(r-a)/_+4;break}h/=6}return e.h=h,e.s=g,e.l=p,e}getRGB(e,n=At.workingColorSpace){return At.fromWorkingColorSpace(Sn.copy(this),n),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=Zn){At.fromWorkingColorSpace(Sn.copy(this),e);const n=Sn.r,r=Sn.g,a=Sn.b;return e!==Zn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(vr),this.setHSL(vr.h+e,vr.s+n,vr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(vr),e.getHSL(fl);const r=Pu(vr.h,fl.h,n),a=Pu(vr.s,fl.s,n),l=Pu(vr.l,fl.l,n);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*a,this.g=l[1]*n+l[4]*r+l[7]*a,this.b=l[2]*n+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new Ct;Ct.NAMES=Pg;let K_=0;class eo extends Js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=jo(),this.name="",this.type="Material",this.blending=Vs,this.side=Er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dd,this.blendDst=fd,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=im,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(r.blending=this.blending),this.side!==Er&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==dd&&(r.blendSrc=this.blendSrc),this.blendDst!==fd&&(r.blendDst=this.blendDst),this.blendEquation!==Xr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==im&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const d=[];for(const u in l){const h=l[u];delete h.metadata,d.push(h)}return d}if(n){const l=a(e.textures),d=a(e.images);l.length>0&&(r.textures=l),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class qr extends eo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=hg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new se,hl=new Rt;let Z_=0;class fi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Z_++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=rm,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)hl.fromBufferAttribute(this,n),hl.applyMatrix3(e),this.setXY(n,hl.x,hl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix3(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix4(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyNormalMatrix(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.transformDirection(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Uo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=On(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Uo(n,this.array)),n}setX(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Uo(n,this.array)),n}setY(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Uo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Uo(n,this.array)),n}setW(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),r=On(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),r=On(r,this.array),a=On(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,l){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),r=On(r,this.array),a=On(a,this.array),l=On(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rm&&(e.usage=this.usage),e}}class Ng extends fi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Lg extends fi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Qt extends fi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let Q_=0;const Kn=new Ot,Yu=new cn,Is=new se,Gn=new qo,zo=new qo,an=new se;class bn extends Js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cg(e)?Lg:Ng)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ut().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,n,r){return Kn.makeTranslation(e,n,r),this.applyMatrix4(Kn),this}scale(e,n,r){return Kn.makeScale(e,n,r),this.applyMatrix4(Kn),this}lookAt(e){return Yu.lookAt(e),Yu.updateMatrix(),this.applyMatrix4(Yu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const d=e[a];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Qt(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const l=e[a];n.setXYZ(a,l.x,l.y,l.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const l=n[r];Gn.setFromBufferAttribute(l),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(e){const r=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),n)for(let l=0,d=n.length;l<d;l++){const u=n[l];zo.setFromBufferAttribute(u),this.morphTargetsRelative?(an.addVectors(Gn.min,zo.min),Gn.expandByPoint(an),an.addVectors(Gn.max,zo.max),Gn.expandByPoint(an)):(Gn.expandByPoint(zo.min),Gn.expandByPoint(zo.max))}Gn.getCenter(r);let a=0;for(let l=0,d=e.count;l<d;l++)an.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(an));if(n)for(let l=0,d=n.length;l<d;l++){const u=n[l],h=this.morphTargetsRelative;for(let g=0,p=u.count;g<p;g++)an.fromBufferAttribute(u,g),h&&(Is.fromBufferAttribute(e,g),an.add(Is)),a=Math.max(a,r.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),u=[],h=[];for(let G=0;G<r.count;G++)u[G]=new se,h[G]=new se;const g=new se,p=new se,_=new se,x=new Rt,S=new Rt,T=new Rt,M=new se,y=new se;function v(G,P,A){g.fromBufferAttribute(r,G),p.fromBufferAttribute(r,P),_.fromBufferAttribute(r,A),x.fromBufferAttribute(l,G),S.fromBufferAttribute(l,P),T.fromBufferAttribute(l,A),p.sub(g),_.sub(g),S.sub(x),T.sub(x);const B=1/(S.x*T.y-T.x*S.y);isFinite(B)&&(M.copy(p).multiplyScalar(T.y).addScaledVector(_,-S.y).multiplyScalar(B),y.copy(_).multiplyScalar(S.x).addScaledVector(p,-T.x).multiplyScalar(B),u[G].add(M),u[P].add(M),u[A].add(M),h[G].add(y),h[P].add(y),h[A].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let G=0,P=O.length;G<P;++G){const A=O[G],B=A.start,oe=A.count;for(let Q=B,ue=B+oe;Q<ue;Q+=3)v(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const D=new se,b=new se,H=new se,F=new se;function k(G){H.fromBufferAttribute(a,G),F.copy(H);const P=u[G];D.copy(P),D.sub(H.multiplyScalar(H.dot(P))).normalize(),b.crossVectors(F,P);const B=b.dot(h[G])<0?-1:1;d.setXYZW(G,D.x,D.y,D.z,B)}for(let G=0,P=O.length;G<P;++G){const A=O[G],B=A.start,oe=A.count;for(let Q=B,ue=B+oe;Q<ue;Q+=3)k(e.getX(Q+0)),k(e.getX(Q+1)),k(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new fi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new se,l=new se,d=new se,u=new se,h=new se,g=new se,p=new se,_=new se;if(e)for(let x=0,S=e.count;x<S;x+=3){const T=e.getX(x+0),M=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(n,T),l.fromBufferAttribute(n,M),d.fromBufferAttribute(n,y),p.subVectors(d,l),_.subVectors(a,l),p.cross(_),u.fromBufferAttribute(r,T),h.fromBufferAttribute(r,M),g.fromBufferAttribute(r,y),u.add(p),h.add(p),g.add(p),r.setXYZ(T,u.x,u.y,u.z),r.setXYZ(M,h.x,h.y,h.z),r.setXYZ(y,g.x,g.y,g.z)}else for(let x=0,S=n.count;x<S;x+=3)a.fromBufferAttribute(n,x+0),l.fromBufferAttribute(n,x+1),d.fromBufferAttribute(n,x+2),p.subVectors(d,l),_.subVectors(a,l),p.cross(_),r.setXYZ(x+0,p.x,p.y,p.z),r.setXYZ(x+1,p.x,p.y,p.z),r.setXYZ(x+2,p.x,p.y,p.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)an.fromBufferAttribute(e,n),an.normalize(),e.setXYZ(n,an.x,an.y,an.z)}toNonIndexed(){function e(u,h){const g=u.array,p=u.itemSize,_=u.normalized,x=new g.constructor(h.length*p);let S=0,T=0;for(let M=0,y=h.length;M<y;M++){u.isInterleavedBufferAttribute?S=h[M]*u.data.stride+u.offset:S=h[M]*p;for(let v=0;v<p;v++)x[T++]=g[S++]}return new fi(x,p,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new bn,r=this.index.array,a=this.attributes;for(const u in a){const h=a[u],g=e(h,r);n.setAttribute(u,g)}const l=this.morphAttributes;for(const u in l){const h=[],g=l[u];for(let p=0,_=g.length;p<_;p++){const x=g[p],S=e(x,r);h.push(S)}n.morphAttributes[u]=h}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let u=0,h=d.length;u<h;u++){const g=d[u];n.addGroup(g.start,g.count,g.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const g in h)h[g]!==void 0&&(e[g]=h[g]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const g=r[h];e.data.attributes[h]=g.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const g=this.morphAttributes[h],p=[];for(let _=0,x=g.length;_<x;_++){const S=g[_];p.push(S.toJSON(e.data))}p.length>0&&(a[h]=p,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const g in a){const p=a[g];this.setAttribute(g,p.clone(n))}const l=e.morphAttributes;for(const g in l){const p=[],_=l[g];for(let x=0,S=_.length;x<S;x++)p.push(_[x].clone(n));this.morphAttributes[g]=p}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let g=0,p=d.length;g<p;g++){const _=d[g];this.addGroup(_.start,_.count,_.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _m=new Ot,Br=new Gl,pl=new Yo,xm=new se,ml=new se,gl=new se,vl=new se,$u=new se,_l=new se,ym=new se,xl=new se;class ln extends cn{constructor(e=new bn,n=new qr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=a.length;l<d;l++){const u=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,d=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const u=this.morphTargetInfluences;if(l&&u){_l.set(0,0,0);for(let h=0,g=l.length;h<g;h++){const p=u[h],_=l[h];p!==0&&($u.fromBufferAttribute(_,e),d?_l.addScaledVector($u,p):_l.addScaledVector($u.sub(n),p))}n.add(_l)}return n}raycast(e,n){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),pl.copy(r.boundingSphere),pl.applyMatrix4(l),Br.copy(e.ray).recast(e.near),!(pl.containsPoint(Br.origin)===!1&&(Br.intersectSphere(pl,xm)===null||Br.origin.distanceToSquared(xm)>(e.far-e.near)**2))&&(_m.copy(l).invert(),Br.copy(e.ray).applyMatrix4(_m),!(r.boundingBox!==null&&Br.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Br)))}_computeIntersections(e,n,r){let a;const l=this.geometry,d=this.material,u=l.index,h=l.attributes.position,g=l.attributes.uv,p=l.attributes.uv1,_=l.attributes.normal,x=l.groups,S=l.drawRange;if(u!==null)if(Array.isArray(d))for(let T=0,M=x.length;T<M;T++){const y=x[T],v=d[y.materialIndex],O=Math.max(y.start,S.start),D=Math.min(u.count,Math.min(y.start+y.count,S.start+S.count));for(let b=O,H=D;b<H;b+=3){const F=u.getX(b),k=u.getX(b+1),G=u.getX(b+2);a=yl(this,v,e,r,g,p,_,F,k,G),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const T=Math.max(0,S.start),M=Math.min(u.count,S.start+S.count);for(let y=T,v=M;y<v;y+=3){const O=u.getX(y),D=u.getX(y+1),b=u.getX(y+2);a=yl(this,d,e,r,g,p,_,O,D,b),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}else if(h!==void 0)if(Array.isArray(d))for(let T=0,M=x.length;T<M;T++){const y=x[T],v=d[y.materialIndex],O=Math.max(y.start,S.start),D=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let b=O,H=D;b<H;b+=3){const F=b,k=b+1,G=b+2;a=yl(this,v,e,r,g,p,_,F,k,G),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const T=Math.max(0,S.start),M=Math.min(h.count,S.start+S.count);for(let y=T,v=M;y<v;y+=3){const O=y,D=y+1,b=y+2;a=yl(this,d,e,r,g,p,_,O,D,b),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}}}function J_(s,e,n,r,a,l,d,u){let h;if(e.side===Cn?h=r.intersectTriangle(d,l,a,!0,u):h=r.intersectTriangle(a,l,d,e.side===Er,u),h===null)return null;xl.copy(u),xl.applyMatrix4(s.matrixWorld);const g=n.ray.origin.distanceTo(xl);return g<n.near||g>n.far?null:{distance:g,point:xl.clone(),object:s}}function yl(s,e,n,r,a,l,d,u,h,g){s.getVertexPosition(u,ml),s.getVertexPosition(h,gl),s.getVertexPosition(g,vl);const p=J_(s,e,n,r,ml,gl,vl,ym);if(p){const _=new se;ci.getBarycoord(ym,ml,gl,vl,_),a&&(p.uv=ci.getInterpolatedAttribute(a,u,h,g,_,new Rt)),l&&(p.uv1=ci.getInterpolatedAttribute(l,u,h,g,_,new Rt)),d&&(p.normal=ci.getInterpolatedAttribute(d,u,h,g,_,new se),p.normal.dot(r.direction)>0&&p.normal.multiplyScalar(-1));const x={a:u,b:h,c:g,normal:new se,materialIndex:0};ci.getNormal(ml,gl,vl,x.normal),p.face=x,p.barycoord=_}return p}class $o extends bn{constructor(e=1,n=1,r=1,a=1,l=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:l,depthSegments:d};const u=this;a=Math.floor(a),l=Math.floor(l),d=Math.floor(d);const h=[],g=[],p=[],_=[];let x=0,S=0;T("z","y","x",-1,-1,r,n,e,d,l,0),T("z","y","x",1,-1,r,n,-e,d,l,1),T("x","z","y",1,1,e,r,n,a,d,2),T("x","z","y",1,-1,e,r,-n,a,d,3),T("x","y","z",1,-1,e,n,r,a,l,4),T("x","y","z",-1,-1,e,n,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(p,3)),this.setAttribute("uv",new Qt(_,2));function T(M,y,v,O,D,b,H,F,k,G,P){const A=b/k,B=H/G,oe=b/2,Q=H/2,ue=F/2,te=k+1,le=G+1;let re=0,I=0;const ee=new se;for(let $=0;$<le;$++){const N=$*B-Q;for(let K=0;K<te;K++){const ye=K*A-oe;ee[M]=ye*O,ee[y]=N*D,ee[v]=ue,g.push(ee.x,ee.y,ee.z),ee[M]=0,ee[y]=0,ee[v]=F>0?1:-1,p.push(ee.x,ee.y,ee.z),_.push(K/k),_.push(1-$/G),re+=1}}for(let $=0;$<G;$++)for(let N=0;N<k;N++){const K=x+N+te*$,ye=x+N+te*($+1),Y=x+(N+1)+te*($+1),fe=x+(N+1)+te*$;h.push(K,ye,fe),h.push(ye,Y,fe),I+=6}u.addGroup(S,I,P),S+=I,x+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function An(s){const e={};for(let n=0;n<s.length;n++){const r=Qs(s[n]);for(const a in r)e[a]=r[a]}return e}function ex(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Dg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const tx={clone:Qs,merge:An};var nx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ix=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends eo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nx,this.fragmentShader=ix,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=ex(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const d=this.uniforms[a].value;d&&d.isTexture?n.uniforms[a]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[a]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[a]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[a]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[a]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[a]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[a]={type:"m4",value:d.toArray()}:n.uniforms[a]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Ig extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=Vi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _r=new se,Sm=new Rt,Mm=new Rt;class Qn extends Ig{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Kd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kd*2*Math.atan(Math.tan(bu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,n){return this.getViewBounds(e,Sm,Mm),n.subVectors(Mm,Sm)}setViewOffset(e,n,r,a,l,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(bu*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,l=-.5*a;const d=this.view;if(this.view!==null&&this.view.enabled){const h=d.fullWidth,g=d.fullHeight;l+=d.offsetX*a/h,n-=d.offsetY*r/g,a*=d.width/h,r*=d.height/g}const u=this.filmOffset;u!==0&&(l+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Us=-90,Fs=1;class rx extends cn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Qn(Us,Fs,e,n);a.layers=this.layers,this.add(a);const l=new Qn(Us,Fs,e,n);l.layers=this.layers,this.add(l);const d=new Qn(Us,Fs,e,n);d.layers=this.layers,this.add(d);const u=new Qn(Us,Fs,e,n);u.layers=this.layers,this.add(u);const h=new Qn(Us,Fs,e,n);h.layers=this.layers,this.add(h);const g=new Qn(Us,Fs,e,n);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,l,d,u,h]=n;for(const g of n)this.remove(g);if(e===Vi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===zl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of n)this.add(g),g.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,d,u,h,g,p]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const M=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,l),e.setRenderTarget(r,1,a),e.render(n,d),e.setRenderTarget(r,2,a),e.render(n,u),e.setRenderTarget(r,3,a),e.render(n,h),e.setRenderTarget(r,4,a),e.render(n,g),r.texture.generateMipmaps=M,e.setRenderTarget(r,5,a),e.render(n,p),e.setRenderTarget(_,x,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Ug extends Rn{constructor(e,n,r,a,l,d,u,h,g,p){e=e!==void 0?e:[],n=n!==void 0?n:qs,super(e,n,r,a,l,d,u,h,g,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sx extends Jr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Ug(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Si}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new $o(5,5,5),l=new hi({name:"CubemapFromEquirect",uniforms:Qs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Cn,blending:Sr});l.uniforms.tEquirect.value=n;const d=new ln(a,l),u=n.minFilter;return n.minFilter===Zr&&(n.minFilter=Si),new rx(1,10,this).update(e,d),n.minFilter=u,d.geometry.dispose(),d.material.dispose(),this}clear(e,n,r,a){const l=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,r,a);e.setRenderTarget(l)}}class zs extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ox={type:"move"};class Ku{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,l=null,d=null;const u=this._targetRay,h=this._grip,g=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(g&&e.hand){d=!0;for(const M of e.hand.values()){const y=n.getJointPose(M,r),v=this._getHandJoint(g,M);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const p=g.joints["index-finger-tip"],_=g.joints["thumb-tip"],x=p.position.distanceTo(_.position),S=.02,T=.005;g.inputState.pinching&&x>S+T?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&x<=S-T&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));u!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(ox)))}return u!==null&&(u.visible=a!==null),h!==null&&(h.visible=l!==null),g!==null&&(g.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new zs;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class ax extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Zu=new se,lx=new se,cx=new ut;let Wr=class{constructor(e=new se(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Zu.subVectors(r,n).cross(lx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Zu),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:n.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||cx.getNormalMatrix(e),a=this.coplanarPoint(Zu).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Hr=new Yo,Sl=new se;class hf{constructor(e=new Wr,n=new Wr,r=new Wr,a=new Wr,l=new Wr,d=new Wr){this.planes=[e,n,r,a,l,d]}set(e,n,r,a,l,d){const u=this.planes;return u[0].copy(e),u[1].copy(n),u[2].copy(r),u[3].copy(a),u[4].copy(l),u[5].copy(d),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Vi){const r=this.planes,a=e.elements,l=a[0],d=a[1],u=a[2],h=a[3],g=a[4],p=a[5],_=a[6],x=a[7],S=a[8],T=a[9],M=a[10],y=a[11],v=a[12],O=a[13],D=a[14],b=a[15];if(r[0].setComponents(h-l,x-g,y-S,b-v).normalize(),r[1].setComponents(h+l,x+g,y+S,b+v).normalize(),r[2].setComponents(h+d,x+p,y+T,b+O).normalize(),r[3].setComponents(h-d,x-p,y-T,b-O).normalize(),r[4].setComponents(h-u,x-_,y-M,b-D).normalize(),n===Vi)r[5].setComponents(h+u,x+_,y+M,b+D).normalize();else if(n===zl)r[5].setComponents(u,_,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){return Hr.center.set(0,0,0),Hr.radius=.7071067811865476,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(Sl.x=a.normal.x>0?e.max.x:e.min.x,Sl.y=a.normal.y>0?e.max.y:e.min.y,Sl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Sl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fg extends eo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bl=new se,Hl=new se,Em=new Ot,Bo=new Gl,Ml=new Yo,Qu=new se,wm=new se;class ux extends cn{constructor(e=new bn,n=new Fg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,l=n.count;a<l;a++)Bl.fromBufferAttribute(n,a-1),Hl.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=Bl.distanceTo(Hl);e.setAttribute("lineDistance",new Qt(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ml.copy(r.boundingSphere),Ml.applyMatrix4(a),Ml.radius+=l,e.ray.intersectsSphere(Ml)===!1)return;Em.copy(a).invert(),Bo.copy(e.ray).applyMatrix4(Em);const u=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,g=this.isLineSegments?2:1,p=r.index,x=r.attributes.position;if(p!==null){const S=Math.max(0,d.start),T=Math.min(p.count,d.start+d.count);for(let M=S,y=T-1;M<y;M+=g){const v=p.getX(M),O=p.getX(M+1),D=El(this,e,Bo,h,v,O,M);D&&n.push(D)}if(this.isLineLoop){const M=p.getX(T-1),y=p.getX(S),v=El(this,e,Bo,h,M,y,T-1);v&&n.push(v)}}else{const S=Math.max(0,d.start),T=Math.min(x.count,d.start+d.count);for(let M=S,y=T-1;M<y;M+=g){const v=El(this,e,Bo,h,M,M+1,M);v&&n.push(v)}if(this.isLineLoop){const M=El(this,e,Bo,h,T-1,S,T-1);M&&n.push(M)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=a.length;l<d;l++){const u=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}}function El(s,e,n,r,a,l,d){const u=s.geometry.attributes.position;if(Bl.fromBufferAttribute(u,a),Hl.fromBufferAttribute(u,l),n.distanceSqToSegment(Bl,Hl,Qu,wm)>r)return;Qu.applyMatrix4(s.matrixWorld);const g=e.ray.origin.distanceTo(Qu);if(!(g<e.near||g>e.far))return{distance:g,point:wm.clone().applyMatrix4(s.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:s}}class Og extends eo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Tm=new Ot,Zd=new Gl,wl=new Yo,Tl=new se;class dx extends cn{constructor(e=new bn,n=new Og){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),wl.copy(r.boundingSphere),wl.applyMatrix4(a),wl.radius+=l,e.ray.intersectsSphere(wl)===!1)return;Tm.copy(a).invert(),Zd.copy(e.ray).applyMatrix4(Tm);const u=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,g=r.index,_=r.attributes.position;if(g!==null){const x=Math.max(0,d.start),S=Math.min(g.count,d.start+d.count);for(let T=x,M=S;T<M;T++){const y=g.getX(T);Tl.fromBufferAttribute(_,y),Am(Tl,y,h,a,e,n,this)}}else{const x=Math.max(0,d.start),S=Math.min(_.count,d.start+d.count);for(let T=x,M=S;T<M;T++)Tl.fromBufferAttribute(_,T),Am(Tl,T,h,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=a.length;l<d;l++){const u=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}}function Am(s,e,n,r,a,l,d){const u=Zd.distanceSqToPoint(s);if(u<n){const h=new se;Zd.closestPointToPoint(s,h),h.applyMatrix4(r);const g=a.ray.origin.distanceTo(h);if(g<a.near||g>a.far)return;l.push({distance:g,distanceToRay:Math.sqrt(u),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class kg extends Rn{constructor(e,n,r,a,l,d,u,h,g,p=Gs){if(p!==Gs&&p!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&p===Gs&&(r=Qr),r===void 0&&p===Ks&&(r=$s),super(null,a,l,d,u,h,p,r,g),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=u!==void 0?u:di,this.minFilter=h!==void 0?h:di,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class pf extends bn{constructor(e=1,n=1,r=1,a=32,l=1,d=!1,u=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:a,heightSegments:l,openEnded:d,thetaStart:u,thetaLength:h};const g=this;a=Math.floor(a),l=Math.floor(l);const p=[],_=[],x=[],S=[];let T=0;const M=[],y=r/2;let v=0;O(),d===!1&&(e>0&&D(!0),n>0&&D(!1)),this.setIndex(p),this.setAttribute("position",new Qt(_,3)),this.setAttribute("normal",new Qt(x,3)),this.setAttribute("uv",new Qt(S,2));function O(){const b=new se,H=new se;let F=0;const k=(n-e)/r;for(let G=0;G<=l;G++){const P=[],A=G/l,B=A*(n-e)+e;for(let oe=0;oe<=a;oe++){const Q=oe/a,ue=Q*h+u,te=Math.sin(ue),le=Math.cos(ue);H.x=B*te,H.y=-A*r+y,H.z=B*le,_.push(H.x,H.y,H.z),b.set(te,k,le).normalize(),x.push(b.x,b.y,b.z),S.push(Q,1-A),P.push(T++)}M.push(P)}for(let G=0;G<a;G++)for(let P=0;P<l;P++){const A=M[P][G],B=M[P+1][G],oe=M[P+1][G+1],Q=M[P][G+1];(e>0||P!==0)&&(p.push(A,B,Q),F+=3),(n>0||P!==l-1)&&(p.push(B,oe,Q),F+=3)}g.addGroup(v,F,0),v+=F}function D(b){const H=T,F=new Rt,k=new se;let G=0;const P=b===!0?e:n,A=b===!0?1:-1;for(let oe=1;oe<=a;oe++)_.push(0,y*A,0),x.push(0,A,0),S.push(.5,.5),T++;const B=T;for(let oe=0;oe<=a;oe++){const ue=oe/a*h+u,te=Math.cos(ue),le=Math.sin(ue);k.x=P*le,k.y=y*A,k.z=P*te,_.push(k.x,k.y,k.z),x.push(0,A,0),F.x=te*.5+.5,F.y=le*.5*A+.5,S.push(F.x,F.y),T++}for(let oe=0;oe<a;oe++){const Q=H+oe,ue=B+oe;b===!0?p.push(ue,ue+1,Q):p.push(ue+1,ue,Q),G+=3}g.addGroup(v,G,b===!0?1:2),v+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wl extends bn{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const l=e/2,d=n/2,u=Math.floor(r),h=Math.floor(a),g=u+1,p=h+1,_=e/u,x=n/h,S=[],T=[],M=[],y=[];for(let v=0;v<p;v++){const O=v*x-d;for(let D=0;D<g;D++){const b=D*_-l;T.push(b,-O,0),M.push(0,0,1),y.push(D/u),y.push(1-v/h)}}for(let v=0;v<h;v++)for(let O=0;O<u;O++){const D=O+g*v,b=O+g*(v+1),H=O+1+g*(v+1),F=O+1+g*v;S.push(D,b,F),S.push(b,H,F)}this.setIndex(S),this.setAttribute("position",new Qt(T,3)),this.setAttribute("normal",new Qt(M,3)),this.setAttribute("uv",new Qt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wl(e.width,e.height,e.widthSegments,e.heightSegments)}}class mf extends bn{constructor(e=.5,n=1,r=32,a=1,l=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:r,phiSegments:a,thetaStart:l,thetaLength:d},r=Math.max(3,r),a=Math.max(1,a);const u=[],h=[],g=[],p=[];let _=e;const x=(n-e)/a,S=new se,T=new Rt;for(let M=0;M<=a;M++){for(let y=0;y<=r;y++){const v=l+y/r*d;S.x=_*Math.cos(v),S.y=_*Math.sin(v),h.push(S.x,S.y,S.z),g.push(0,0,1),T.x=(S.x/n+1)/2,T.y=(S.y/n+1)/2,p.push(T.x,T.y)}_+=x}for(let M=0;M<a;M++){const y=M*(r+1);for(let v=0;v<r;v++){const O=v+y,D=O,b=O+r+1,H=O+r+2,F=O+1;u.push(D,b,F),u.push(b,H,F)}}this.setIndex(u),this.setAttribute("position",new Qt(h,3)),this.setAttribute("normal",new Qt(g,3)),this.setAttribute("uv",new Qt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Yr extends bn{constructor(e=1,n=32,r=16,a=0,l=Math.PI*2,d=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:a,phiLength:l,thetaStart:d,thetaLength:u},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const h=Math.min(d+u,Math.PI);let g=0;const p=[],_=new se,x=new se,S=[],T=[],M=[],y=[];for(let v=0;v<=r;v++){const O=[],D=v/r;let b=0;v===0&&d===0?b=.5/n:v===r&&h===Math.PI&&(b=-.5/n);for(let H=0;H<=n;H++){const F=H/n;_.x=-e*Math.cos(a+F*l)*Math.sin(d+D*u),_.y=e*Math.cos(d+D*u),_.z=e*Math.sin(a+F*l)*Math.sin(d+D*u),T.push(_.x,_.y,_.z),x.copy(_).normalize(),M.push(x.x,x.y,x.z),y.push(F+b,1-D),O.push(g++)}p.push(O)}for(let v=0;v<r;v++)for(let O=0;O<n;O++){const D=p[v][O+1],b=p[v][O],H=p[v+1][O],F=p[v+1][O+1];(v!==0||d>0)&&S.push(D,b,F),(v!==r-1||h<Math.PI)&&S.push(b,H,F)}this.setIndex(S),this.setAttribute("position",new Qt(T,3)),this.setAttribute("normal",new Qt(M,3)),this.setAttribute("uv",new Qt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fx extends eo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=S_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hx extends eo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Cm={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class px{constructor(e,n,r){const a=this;let l=!1,d=0,u=0,h;const g=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=r,this.itemStart=function(p){u++,l===!1&&a.onStart!==void 0&&a.onStart(p,d,u),l=!0},this.itemEnd=function(p){d++,a.onProgress!==void 0&&a.onProgress(p,d,u),d===u&&(l=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(p){a.onError!==void 0&&a.onError(p)},this.resolveURL=function(p){return h?h(p):p},this.setURLModifier=function(p){return h=p,this},this.addHandler=function(p,_){return g.push(p,_),this},this.removeHandler=function(p){const _=g.indexOf(p);return _!==-1&&g.splice(_,2),this},this.getHandler=function(p){for(let _=0,x=g.length;_<x;_+=2){const S=g[_],T=g[_+1];if(S.global&&(S.lastIndex=0),S.test(p))return T}return null}}}const mx=new px;class gf{constructor(e){this.manager=e!==void 0?e:mx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const r=this;return new Promise(function(a,l){r.load(e,a,n,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}gf.DEFAULT_MATERIAL_NAME="__DEFAULT";class gx extends gf{constructor(e){super(e)}load(e,n,r,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,d=Cm.get(e);if(d!==void 0)return l.manager.itemStart(e),setTimeout(function(){n&&n(d),l.manager.itemEnd(e)},0),d;const u=Go("img");function h(){p(),Cm.add(e,this),n&&n(this),l.manager.itemEnd(e)}function g(_){p(),a&&a(_),l.manager.itemError(e),l.manager.itemEnd(e)}function p(){u.removeEventListener("load",h,!1),u.removeEventListener("error",g,!1)}return u.addEventListener("load",h,!1),u.addEventListener("error",g,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),l.manager.itemStart(e),u.src=e,u}}class vx extends gf{constructor(e){super(e)}load(e,n,r,a){const l=new Rn,d=new gx(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(e,function(u){l.image=u,l.needsUpdate=!0,n!==void 0&&n(l)},r,a),l}}class zg extends cn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Ju=new Ot,Rm=new se,bm=new se;class _x{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hf,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Rm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Rm),bm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(bm),n.updateMatrixWorld(),Ju.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ju),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Ju)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Bg extends Ig{constructor(e=-1,n=1,r=1,a=-1,l=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=l,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,l,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,d=r+e,u=a+n,h=a-n;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=g*this.view.offsetX,d=l+g*this.view.width,u-=p*this.view.offsetY,h=u-p*this.view.height}this.projectionMatrix.makeOrthographic(l,d,u,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class xx extends _x{constructor(){super(new Bg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pm extends zg{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new xx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class yx extends zg{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Sx extends Qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const Nm=new Ot;class Mx{constructor(e,n,r=0,a=1/0){this.ray=new Gl(e,n),this.near=r,this.far=a,this.camera=null,this.layers=new ff,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Nm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nm),this}intersectObject(e,n=!0,r=[]){return Qd(e,this,r,n),r.sort(Lm),r}intersectObjects(e,n=!0,r=[]){for(let a=0,l=e.length;a<l;a++)Qd(e[a],this,r,n);return r.sort(Lm),r}}function Lm(s,e){return s.distance-e.distance}function Qd(s,e,n,r){let a=!0;if(s.layers.test(e.layers)&&s.raycast(e,n)===!1&&(a=!1),a===!0&&r===!0){const l=s.children;for(let d=0,u=l.length;d<u;d++)Qd(l[d],e,n,!0)}}function Dm(s,e,n,r){const a=Ex(r);switch(n){case xg:return s*e;case Sg:return s*e;case Mg:return s*e*2;case Eg:return s*e/a.components*a.byteLength;case cf:return s*e/a.components*a.byteLength;case wg:return s*e*2/a.components*a.byteLength;case uf:return s*e*2/a.components*a.byteLength;case yg:return s*e*3/a.components*a.byteLength;case ui:return s*e*4/a.components*a.byteLength;case df:return s*e*4/a.components*a.byteLength;case Pl:case Nl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ll:case Dl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Td:case Cd:return Math.max(s,16)*Math.max(e,8)/4;case wd:case Ad:return Math.max(s,8)*Math.max(e,8)/2;case Rd:case bd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Pd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Nd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ld:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Dd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Id:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Fd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Od:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case kd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case zd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Vd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Gd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Wd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Il:case jd:case Xd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Tg:case qd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Yd:case $d:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Ex(s){switch(s){case Wi:case gg:return{byteLength:1,components:1};case Vo:case vg:case Wo:return{byteLength:2,components:1};case af:case lf:return{byteLength:2,components:4};case Qr:case of:case Hi:return{byteLength:4,components:1};case _g:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hg(){let s=null,e=!1,n=null,r=null;function a(l,d){n(l,d),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function wx(s){const e=new WeakMap;function n(u,h){const g=u.array,p=u.usage,_=g.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,g,p),u.onUploadCallback();let S;if(g instanceof Float32Array)S=s.FLOAT;else if(g instanceof Uint16Array)u.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(g instanceof Int16Array)S=s.SHORT;else if(g instanceof Uint32Array)S=s.UNSIGNED_INT;else if(g instanceof Int32Array)S=s.INT;else if(g instanceof Int8Array)S=s.BYTE;else if(g instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:x,type:S,bytesPerElement:g.BYTES_PER_ELEMENT,version:u.version,size:_}}function r(u,h,g){const p=h.array,_=h.updateRanges;if(s.bindBuffer(g,u),_.length===0)s.bufferSubData(g,0,p);else{_.sort((S,T)=>S.start-T.start);let x=0;for(let S=1;S<_.length;S++){const T=_[x],M=_[S];M.start<=T.start+T.count+1?T.count=Math.max(T.count,M.start+M.count-T.start):(++x,_[x]=M)}_.length=x+1;for(let S=0,T=_.length;S<T;S++){const M=_[S];s.bufferSubData(g,M.start*p.BYTES_PER_ELEMENT,p,M.start,M.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function l(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=e.get(u);h&&(s.deleteBuffer(h.buffer),e.delete(u))}function d(u,h){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const g=e.get(u);if(g===void 0)e.set(u,n(u,h));else if(g.version<u.version){if(g.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(g.buffer,u,h),g.version=u.version}}return{get:a,remove:l,update:d}}var Tx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ax=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Px=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ix=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ux=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ox=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Yx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$x=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Kx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ey=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ty="gl_FragColor = linearToOutputTexel( gl_FragColor );",ny=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ry=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,oy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ay=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ly=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,py=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,my=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_y=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,My=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ey=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ty=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ay=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ry=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,by=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Py=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ny=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ly=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Iy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Oy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ky=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,By=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Hy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Yy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$y=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ky=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,eS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,aS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_S=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,SS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,MS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ES=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,NS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,LS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,DS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,IS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,US=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,GS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,XS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$S=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,JS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dt={alphahash_fragment:Tx,alphahash_pars_fragment:Ax,alphamap_fragment:Cx,alphamap_pars_fragment:Rx,alphatest_fragment:bx,alphatest_pars_fragment:Px,aomap_fragment:Nx,aomap_pars_fragment:Lx,batching_pars_vertex:Dx,batching_vertex:Ix,begin_vertex:Ux,beginnormal_vertex:Fx,bsdfs:Ox,iridescence_fragment:kx,bumpmap_pars_fragment:zx,clipping_planes_fragment:Bx,clipping_planes_pars_fragment:Hx,clipping_planes_pars_vertex:Vx,clipping_planes_vertex:Gx,color_fragment:Wx,color_pars_fragment:jx,color_pars_vertex:Xx,color_vertex:qx,common:Yx,cube_uv_reflection_fragment:$x,defaultnormal_vertex:Kx,displacementmap_pars_vertex:Zx,displacementmap_vertex:Qx,emissivemap_fragment:Jx,emissivemap_pars_fragment:ey,colorspace_fragment:ty,colorspace_pars_fragment:ny,envmap_fragment:iy,envmap_common_pars_fragment:ry,envmap_pars_fragment:sy,envmap_pars_vertex:oy,envmap_physical_pars_fragment:vy,envmap_vertex:ay,fog_vertex:ly,fog_pars_vertex:cy,fog_fragment:uy,fog_pars_fragment:dy,gradientmap_pars_fragment:fy,lightmap_pars_fragment:hy,lights_lambert_fragment:py,lights_lambert_pars_fragment:my,lights_pars_begin:gy,lights_toon_fragment:_y,lights_toon_pars_fragment:xy,lights_phong_fragment:yy,lights_phong_pars_fragment:Sy,lights_physical_fragment:My,lights_physical_pars_fragment:Ey,lights_fragment_begin:wy,lights_fragment_maps:Ty,lights_fragment_end:Ay,logdepthbuf_fragment:Cy,logdepthbuf_pars_fragment:Ry,logdepthbuf_pars_vertex:by,logdepthbuf_vertex:Py,map_fragment:Ny,map_pars_fragment:Ly,map_particle_fragment:Dy,map_particle_pars_fragment:Iy,metalnessmap_fragment:Uy,metalnessmap_pars_fragment:Fy,morphinstance_vertex:Oy,morphcolor_vertex:ky,morphnormal_vertex:zy,morphtarget_pars_vertex:By,morphtarget_vertex:Hy,normal_fragment_begin:Vy,normal_fragment_maps:Gy,normal_pars_fragment:Wy,normal_pars_vertex:jy,normal_vertex:Xy,normalmap_pars_fragment:qy,clearcoat_normal_fragment_begin:Yy,clearcoat_normal_fragment_maps:$y,clearcoat_pars_fragment:Ky,iridescence_pars_fragment:Zy,opaque_fragment:Qy,packing:Jy,premultiplied_alpha_fragment:eS,project_vertex:tS,dithering_fragment:nS,dithering_pars_fragment:iS,roughnessmap_fragment:rS,roughnessmap_pars_fragment:sS,shadowmap_pars_fragment:oS,shadowmap_pars_vertex:aS,shadowmap_vertex:lS,shadowmask_pars_fragment:cS,skinbase_vertex:uS,skinning_pars_vertex:dS,skinning_vertex:fS,skinnormal_vertex:hS,specularmap_fragment:pS,specularmap_pars_fragment:mS,tonemapping_fragment:gS,tonemapping_pars_fragment:vS,transmission_fragment:_S,transmission_pars_fragment:xS,uv_pars_fragment:yS,uv_pars_vertex:SS,uv_vertex:MS,worldpos_vertex:ES,background_vert:wS,background_frag:TS,backgroundCube_vert:AS,backgroundCube_frag:CS,cube_vert:RS,cube_frag:bS,depth_vert:PS,depth_frag:NS,distanceRGBA_vert:LS,distanceRGBA_frag:DS,equirect_vert:IS,equirect_frag:US,linedashed_vert:FS,linedashed_frag:OS,meshbasic_vert:kS,meshbasic_frag:zS,meshlambert_vert:BS,meshlambert_frag:HS,meshmatcap_vert:VS,meshmatcap_frag:GS,meshnormal_vert:WS,meshnormal_frag:jS,meshphong_vert:XS,meshphong_frag:qS,meshphysical_vert:YS,meshphysical_frag:$S,meshtoon_vert:KS,meshtoon_frag:ZS,points_vert:QS,points_frag:JS,shadow_vert:eM,shadow_frag:tM,sprite_vert:nM,sprite_frag:iM},Pe={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},yi={basic:{uniforms:An([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:An([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ct(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:An([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:An([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:An([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Ct(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:An([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:An([Pe.points,Pe.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:An([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:An([Pe.common,Pe.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:An([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:An([Pe.sprite,Pe.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:An([Pe.common,Pe.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:An([Pe.lights,Pe.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};yi.physical={uniforms:An([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Al={r:0,b:0,g:0},Vr=new Mi,rM=new Ot;function sM(s,e,n,r,a,l,d){const u=new Ct(0);let h=l===!0?0:1,g,p,_=null,x=0,S=null;function T(D){let b=D.isScene===!0?D.background:null;return b&&b.isTexture&&(b=(D.backgroundBlurriness>0?n:e).get(b)),b}function M(D){let b=!1;const H=T(D);H===null?v(u,h):H&&H.isColor&&(v(H,1),b=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,d):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||b)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(D,b){const H=T(b);H&&(H.isCubeTexture||H.mapping===Vl)?(p===void 0&&(p=new ln(new $o(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:Qs(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(F,k,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),Vr.copy(b.backgroundRotation),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),p.material.uniforms.envMap.value=H,p.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(rM.makeRotationFromEuler(Vr)),p.material.toneMapped=At.getTransfer(H.colorSpace)!==Pt,(_!==H||x!==H.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,_=H,x=H.version,S=s.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null)):H&&H.isTexture&&(g===void 0&&(g=new ln(new Wl(2,2),new hi({name:"BackgroundMaterial",uniforms:Qs(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Er,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(g)),g.material.uniforms.t2D.value=H,g.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,g.material.toneMapped=At.getTransfer(H.colorSpace)!==Pt,H.matrixAutoUpdate===!0&&H.updateMatrix(),g.material.uniforms.uvTransform.value.copy(H.matrix),(_!==H||x!==H.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,_=H,x=H.version,S=s.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null))}function v(D,b){D.getRGB(Al,Dg(s)),r.buffers.color.setClear(Al.r,Al.g,Al.b,b,d)}function O(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return u},setClearColor:function(D,b=1){u.set(D),h=b,v(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,v(u,h)},render:M,addToRenderList:y,dispose:O}}function oM(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let l=a,d=!1;function u(A,B,oe,Q,ue){let te=!1;const le=_(Q,oe,B);l!==le&&(l=le,g(l.object)),te=S(A,Q,oe,ue),te&&T(A,Q,oe,ue),ue!==null&&e.update(ue,s.ELEMENT_ARRAY_BUFFER),(te||d)&&(d=!1,b(A,B,oe,Q),ue!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function h(){return s.createVertexArray()}function g(A){return s.bindVertexArray(A)}function p(A){return s.deleteVertexArray(A)}function _(A,B,oe){const Q=oe.wireframe===!0;let ue=r[A.id];ue===void 0&&(ue={},r[A.id]=ue);let te=ue[B.id];te===void 0&&(te={},ue[B.id]=te);let le=te[Q];return le===void 0&&(le=x(h()),te[Q]=le),le}function x(A){const B=[],oe=[],Q=[];for(let ue=0;ue<n;ue++)B[ue]=0,oe[ue]=0,Q[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:oe,attributeDivisors:Q,object:A,attributes:{},index:null}}function S(A,B,oe,Q){const ue=l.attributes,te=B.attributes;let le=0;const re=oe.getAttributes();for(const I in re)if(re[I].location>=0){const $=ue[I];let N=te[I];if(N===void 0&&(I==="instanceMatrix"&&A.instanceMatrix&&(N=A.instanceMatrix),I==="instanceColor"&&A.instanceColor&&(N=A.instanceColor)),$===void 0||$.attribute!==N||N&&$.data!==N.data)return!0;le++}return l.attributesNum!==le||l.index!==Q}function T(A,B,oe,Q){const ue={},te=B.attributes;let le=0;const re=oe.getAttributes();for(const I in re)if(re[I].location>=0){let $=te[I];$===void 0&&(I==="instanceMatrix"&&A.instanceMatrix&&($=A.instanceMatrix),I==="instanceColor"&&A.instanceColor&&($=A.instanceColor));const N={};N.attribute=$,$&&$.data&&(N.data=$.data),ue[I]=N,le++}l.attributes=ue,l.attributesNum=le,l.index=Q}function M(){const A=l.newAttributes;for(let B=0,oe=A.length;B<oe;B++)A[B]=0}function y(A){v(A,0)}function v(A,B){const oe=l.newAttributes,Q=l.enabledAttributes,ue=l.attributeDivisors;oe[A]=1,Q[A]===0&&(s.enableVertexAttribArray(A),Q[A]=1),ue[A]!==B&&(s.vertexAttribDivisor(A,B),ue[A]=B)}function O(){const A=l.newAttributes,B=l.enabledAttributes;for(let oe=0,Q=B.length;oe<Q;oe++)B[oe]!==A[oe]&&(s.disableVertexAttribArray(oe),B[oe]=0)}function D(A,B,oe,Q,ue,te,le){le===!0?s.vertexAttribIPointer(A,B,oe,ue,te):s.vertexAttribPointer(A,B,oe,Q,ue,te)}function b(A,B,oe,Q){M();const ue=Q.attributes,te=oe.getAttributes(),le=B.defaultAttributeValues;for(const re in te){const I=te[re];if(I.location>=0){let ee=ue[re];if(ee===void 0&&(re==="instanceMatrix"&&A.instanceMatrix&&(ee=A.instanceMatrix),re==="instanceColor"&&A.instanceColor&&(ee=A.instanceColor)),ee!==void 0){const $=ee.normalized,N=ee.itemSize,K=e.get(ee);if(K===void 0)continue;const ye=K.buffer,Y=K.type,fe=K.bytesPerElement,pe=Y===s.INT||Y===s.UNSIGNED_INT||ee.gpuType===of;if(ee.isInterleavedBufferAttribute){const ge=ee.data,Ae=ge.stride,Ne=ee.offset;if(ge.isInstancedInterleavedBuffer){for(let De=0;De<I.locationSize;De++)v(I.location+De,ge.meshPerAttribute);A.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let De=0;De<I.locationSize;De++)y(I.location+De);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let De=0;De<I.locationSize;De++)D(I.location+De,N/I.locationSize,Y,$,Ae*fe,(Ne+N/I.locationSize*De)*fe,pe)}else{if(ee.isInstancedBufferAttribute){for(let ge=0;ge<I.locationSize;ge++)v(I.location+ge,ee.meshPerAttribute);A.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ge=0;ge<I.locationSize;ge++)y(I.location+ge);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let ge=0;ge<I.locationSize;ge++)D(I.location+ge,N/I.locationSize,Y,$,N*fe,N/I.locationSize*ge*fe,pe)}}else if(le!==void 0){const $=le[re];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(I.location,$);break;case 3:s.vertexAttrib3fv(I.location,$);break;case 4:s.vertexAttrib4fv(I.location,$);break;default:s.vertexAttrib1fv(I.location,$)}}}}O()}function H(){G();for(const A in r){const B=r[A];for(const oe in B){const Q=B[oe];for(const ue in Q)p(Q[ue].object),delete Q[ue];delete B[oe]}delete r[A]}}function F(A){if(r[A.id]===void 0)return;const B=r[A.id];for(const oe in B){const Q=B[oe];for(const ue in Q)p(Q[ue].object),delete Q[ue];delete B[oe]}delete r[A.id]}function k(A){for(const B in r){const oe=r[B];if(oe[A.id]===void 0)continue;const Q=oe[A.id];for(const ue in Q)p(Q[ue].object),delete Q[ue];delete oe[A.id]}}function G(){P(),d=!0,l!==a&&(l=a,g(l.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:u,reset:G,resetDefaultState:P,dispose:H,releaseStatesOfGeometry:F,releaseStatesOfProgram:k,initAttributes:M,enableAttribute:y,disableUnusedAttributes:O}}function aM(s,e,n){let r;function a(g){r=g}function l(g,p){s.drawArrays(r,g,p),n.update(p,r,1)}function d(g,p,_){_!==0&&(s.drawArraysInstanced(r,g,p,_),n.update(p,r,_))}function u(g,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,g,0,p,0,_);let S=0;for(let T=0;T<_;T++)S+=p[T];n.update(S,r,1)}function h(g,p,_,x){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<g.length;T++)d(g[T],p[T],x[T]);else{S.multiDrawArraysInstancedWEBGL(r,g,0,p,0,x,0,_);let T=0;for(let M=0;M<_;M++)T+=p[M]*x[M];n.update(T,r,1)}}this.setMode=a,this.render=l,this.renderInstances=d,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function lM(s,e,n,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function d(k){return!(k!==ui&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(k){const G=k===Wo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==Wi&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==Hi&&!G)}function h(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=n.precision!==void 0?n.precision:"highp";const p=h(g);p!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",p,"instead."),g=p);const _=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),O=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),H=T>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:d,textureTypeReadable:u,precision:g,logarithmicDepthBuffer:_,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:T,maxTextureSize:M,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:O,maxVaryings:D,maxFragmentUniforms:b,vertexTextures:H,maxSamples:F}}function cM(s){const e=this;let n=null,r=0,a=!1,l=!1;const d=new Wr,u=new ut,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const S=_.length!==0||x||r!==0||a;return a=x,r=_.length,S},this.beginShadows=function(){l=!0,p(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,x){n=p(_,x,0)},this.setState=function(_,x,S){const T=_.clippingPlanes,M=_.clipIntersection,y=_.clipShadows,v=s.get(_);if(!a||T===null||T.length===0||l&&!y)l?p(null):g();else{const O=l?0:r,D=O*4;let b=v.clippingState||null;h.value=b,b=p(T,x,D,S);for(let H=0;H!==D;++H)b[H]=n[H];v.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=O}};function g(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function p(_,x,S,T){const M=_!==null?_.length:0;let y=null;if(M!==0){if(y=h.value,T!==!0||y===null){const v=S+M*4,O=x.matrixWorldInverse;u.getNormalMatrix(O),(y===null||y.length<v)&&(y=new Float32Array(v));for(let D=0,b=S;D!==M;++D,b+=4)d.copy(_[D]).applyMatrix4(O,u),d.normal.toArray(y,b),y[b+3]=d.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,y}}function uM(s){let e=new WeakMap;function n(d,u){return u===yd?d.mapping=qs:u===Sd&&(d.mapping=Ys),d}function r(d){if(d&&d.isTexture){const u=d.mapping;if(u===yd||u===Sd)if(e.has(d)){const h=e.get(d).texture;return n(h,d.mapping)}else{const h=d.image;if(h&&h.height>0){const g=new sx(h.height);return g.fromEquirectangularTexture(s,d),e.set(d,g),d.addEventListener("dispose",a),n(g.texture,d.mapping)}else return null}}return d}function a(d){const u=d.target;u.removeEventListener("dispose",a);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Bs=4,Im=[.125,.215,.35,.446,.526,.582],$r=20,ed=new Bg,Um=new Ct;let td=null,nd=0,id=0,rd=!1;const jr=(1+Math.sqrt(5))/2,Os=1/jr,Fm=[new se(-jr,Os,0),new se(jr,Os,0),new se(-Os,0,jr),new se(Os,0,jr),new se(0,jr,-Os),new se(0,jr,Os),new se(-1,1,-1),new se(1,1,-1),new se(-1,1,1),new se(1,1,1)];class Om{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){td=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(td,nd,id),this._renderer.xr.enabled=rd,e.scissorTest=!1,Cl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===qs||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),td=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:Wo,format:ui,colorSpace:Zs,depthBuffer:!1},a=km(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=km(e,n,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dM(l)),this._blurMaterial=fM(l,e,n)}return a}_compileMaterial(e){const n=new ln(this._lodPlanes[0],e);this._renderer.compile(n,ed)}_sceneToCubeUV(e,n,r,a){const u=new Qn(90,1,n,r),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],p=this._renderer,_=p.autoClear,x=p.toneMapping;p.getClearColor(Um),p.toneMapping=Mr,p.autoClear=!1;const S=new qr({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),T=new ln(new $o,S);let M=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,M=!0):(S.color.copy(Um),M=!0);for(let v=0;v<6;v++){const O=v%3;O===0?(u.up.set(0,h[v],0),u.lookAt(g[v],0,0)):O===1?(u.up.set(0,0,h[v]),u.lookAt(0,g[v],0)):(u.up.set(0,h[v],0),u.lookAt(0,0,g[v]));const D=this._cubeSize;Cl(a,O*D,v>2?D:0,D,D),p.setRenderTarget(a),M&&p.render(T,u),p.render(e,u)}T.geometry.dispose(),T.material.dispose(),p.toneMapping=x,p.autoClear=_,e.background=y}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===qs||e.mapping===Ys;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zm());const l=a?this._cubemapMaterial:this._equirectMaterial,d=new ln(this._lodPlanes[0],l),u=l.uniforms;u.envMap.value=e;const h=this._cubeSize;Cl(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(d,ed)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const d=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),u=Fm[(a-l-1)%Fm.length];this._blur(e,l-1,l,d,u)}n.autoClear=r}_blur(e,n,r,a,l){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,r,a,"latitudinal",l),this._halfBlur(d,e,r,r,a,"longitudinal",l)}_halfBlur(e,n,r,a,l,d,u){const h=this._renderer,g=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,_=new ln(this._lodPlanes[a],g),x=g.uniforms,S=this._sizeLods[r]-1,T=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*$r-1),M=l/T,y=isFinite(l)?1+Math.floor(p*M):$r;y>$r&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${$r}`);const v=[];let O=0;for(let k=0;k<$r;++k){const G=k/M,P=Math.exp(-G*G/2);v.push(P),k===0?O+=P:k<y&&(O+=2*P)}for(let k=0;k<v.length;k++)v[k]=v[k]/O;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=v,x.latitudinal.value=d==="latitudinal",u&&(x.poleAxis.value=u);const{_lodMax:D}=this;x.dTheta.value=T,x.mipInt.value=D-r;const b=this._sizeLods[a],H=3*b*(a>D-Bs?a-D+Bs:0),F=4*(this._cubeSize-b);Cl(n,H,F,3*b,2*b),h.setRenderTarget(n),h.render(_,ed)}}function dM(s){const e=[],n=[],r=[];let a=s;const l=s-Bs+1+Im.length;for(let d=0;d<l;d++){const u=Math.pow(2,a);n.push(u);let h=1/u;d>s-Bs?h=Im[d-s+Bs-1]:d===0&&(h=0),r.push(h);const g=1/(u-2),p=-g,_=1+g,x=[p,p,_,p,_,_,p,p,_,_,p,_],S=6,T=6,M=3,y=2,v=1,O=new Float32Array(M*T*S),D=new Float32Array(y*T*S),b=new Float32Array(v*T*S);for(let F=0;F<S;F++){const k=F%3*2/3-1,G=F>2?0:-1,P=[k,G,0,k+2/3,G,0,k+2/3,G+1,0,k,G,0,k+2/3,G+1,0,k,G+1,0];O.set(P,M*T*F),D.set(x,y*T*F);const A=[F,F,F,F,F,F];b.set(A,v*T*F)}const H=new bn;H.setAttribute("position",new fi(O,M)),H.setAttribute("uv",new fi(D,y)),H.setAttribute("faceIndex",new fi(b,v)),e.push(H),a>Bs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function km(s,e,n){const r=new Jr(s,e,n);return r.texture.mapping=Vl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Cl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function fM(s,e,n){const r=new Float32Array($r),a=new se(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function zm(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Bm(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function vf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hM(s){let e=new WeakMap,n=null;function r(u){if(u&&u.isTexture){const h=u.mapping,g=h===yd||h===Sd,p=h===qs||h===Ys;if(g||p){let _=e.get(u);const x=_!==void 0?_.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==x)return n===null&&(n=new Om(s)),_=g?n.fromEquirectangular(u,_):n.fromCubemap(u,_),_.texture.pmremVersion=u.pmremVersion,e.set(u,_),_.texture;if(_!==void 0)return _.texture;{const S=u.image;return g&&S&&S.height>0||p&&S&&a(S)?(n===null&&(n=new Om(s)),_=g?n.fromEquirectangular(u):n.fromCubemap(u),_.texture.pmremVersion=u.pmremVersion,e.set(u,_),u.addEventListener("dispose",l),_.texture):null}}}return u}function a(u){let h=0;const g=6;for(let p=0;p<g;p++)u[p]!==void 0&&h++;return h===g}function l(u){const h=u.target;h.removeEventListener("dispose",l);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function pM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&ks("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function mM(s,e,n,r){const a={},l=new WeakMap;function d(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",d),delete a[x.id];const S=l.get(x);S&&(e.remove(S),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function u(_,x){return a[x.id]===!0||(x.addEventListener("dispose",d),a[x.id]=!0,n.memory.geometries++),x}function h(_){const x=_.attributes;for(const S in x)e.update(x[S],s.ARRAY_BUFFER)}function g(_){const x=[],S=_.index,T=_.attributes.position;let M=0;if(S!==null){const O=S.array;M=S.version;for(let D=0,b=O.length;D<b;D+=3){const H=O[D+0],F=O[D+1],k=O[D+2];x.push(H,F,F,k,k,H)}}else if(T!==void 0){const O=T.array;M=T.version;for(let D=0,b=O.length/3-1;D<b;D+=3){const H=D+0,F=D+1,k=D+2;x.push(H,F,F,k,k,H)}}else return;const y=new(Cg(x)?Lg:Ng)(x,1);y.version=M;const v=l.get(_);v&&e.remove(v),l.set(_,y)}function p(_){const x=l.get(_);if(x){const S=_.index;S!==null&&x.version<S.version&&g(_)}else g(_);return l.get(_)}return{get:u,update:h,getWireframeAttribute:p}}function gM(s,e,n){let r;function a(x){r=x}let l,d;function u(x){l=x.type,d=x.bytesPerElement}function h(x,S){s.drawElements(r,S,l,x*d),n.update(S,r,1)}function g(x,S,T){T!==0&&(s.drawElementsInstanced(r,S,l,x*d,T),n.update(S,r,T))}function p(x,S,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,x,0,T);let y=0;for(let v=0;v<T;v++)y+=S[v];n.update(y,r,1)}function _(x,S,T,M){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<x.length;v++)g(x[v]/d,S[v],M[v]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,l,x,0,M,0,T);let v=0;for(let O=0;O<T;O++)v+=S[O]*M[O];n.update(v,r,1)}}this.setMode=a,this.setIndex=u,this.render=h,this.renderInstances=g,this.renderMultiDraw=p,this.renderMultiDrawInstances=_}function vM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,d,u){switch(n.calls++,d){case s.TRIANGLES:n.triangles+=u*(l/3);break;case s.LINES:n.lines+=u*(l/2);break;case s.LINE_STRIP:n.lines+=u*(l-1);break;case s.LINE_LOOP:n.lines+=u*l;break;case s.POINTS:n.points+=u*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function _M(s,e,n){const r=new WeakMap,a=new jt;function l(d,u,h){const g=d.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=p!==void 0?p.length:0;let x=r.get(u);if(x===void 0||x.count!==_){let A=function(){G.dispose(),r.delete(u),u.removeEventListener("dispose",A)};var S=A;x!==void 0&&x.texture.dispose();const T=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,v=u.morphAttributes.position||[],O=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let b=0;T===!0&&(b=1),M===!0&&(b=2),y===!0&&(b=3);let H=u.attributes.position.count*b,F=1;H>e.maxTextureSize&&(F=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const k=new Float32Array(H*F*4*_),G=new bg(k,H,F,_);G.type=Hi,G.needsUpdate=!0;const P=b*4;for(let B=0;B<_;B++){const oe=v[B],Q=O[B],ue=D[B],te=H*F*4*B;for(let le=0;le<oe.count;le++){const re=le*P;T===!0&&(a.fromBufferAttribute(oe,le),k[te+re+0]=a.x,k[te+re+1]=a.y,k[te+re+2]=a.z,k[te+re+3]=0),M===!0&&(a.fromBufferAttribute(Q,le),k[te+re+4]=a.x,k[te+re+5]=a.y,k[te+re+6]=a.z,k[te+re+7]=0),y===!0&&(a.fromBufferAttribute(ue,le),k[te+re+8]=a.x,k[te+re+9]=a.y,k[te+re+10]=a.z,k[te+re+11]=ue.itemSize===4?a.w:1)}}x={count:_,texture:G,size:new Rt(H,F)},r.set(u,x),u.addEventListener("dispose",A)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",d.morphTexture,n);else{let T=0;for(let y=0;y<g.length;y++)T+=g[y];const M=u.morphTargetsRelative?1:1-T;h.getUniforms().setValue(s,"morphTargetBaseInfluence",M),h.getUniforms().setValue(s,"morphTargetInfluences",g)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function xM(s,e,n,r){let a=new WeakMap;function l(h){const g=r.render.frame,p=h.geometry,_=e.get(h,p);if(a.get(_)!==g&&(e.update(_),a.set(_,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),a.get(h)!==g&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,g))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==g&&(x.update(),a.set(x,g))}return _}function d(){a=new WeakMap}function u(h){const g=h.target;g.removeEventListener("dispose",u),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:l,dispose:d}}const Vg=new Rn,Hm=new kg(1,1),Gg=new bg,Wg=new V_,jg=new Ug,Vm=[],Gm=[],Wm=new Float32Array(16),jm=new Float32Array(9),Xm=new Float32Array(4);function to(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let l=Vm[a];if(l===void 0&&(l=new Float32Array(a),Vm[a]=l),e!==0){r.toArray(l,0);for(let d=1,u=0;d!==e;++d)u+=n,s[d].toArray(l,u)}return l}function Jt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function en(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function jl(s,e){let n=Gm[e];n===void 0&&(n=new Int32Array(e),Gm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function yM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function SM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;s.uniform2fv(this.addr,e),en(n,e)}}function MM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Jt(n,e))return;s.uniform3fv(this.addr,e),en(n,e)}}function EM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;s.uniform4fv(this.addr,e),en(n,e)}}function wM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;Xm.set(r),s.uniformMatrix2fv(this.addr,!1,Xm),en(n,r)}}function TM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;jm.set(r),s.uniformMatrix3fv(this.addr,!1,jm),en(n,r)}}function AM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;Wm.set(r),s.uniformMatrix4fv(this.addr,!1,Wm),en(n,r)}}function CM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function RM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;s.uniform2iv(this.addr,e),en(n,e)}}function bM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Jt(n,e))return;s.uniform3iv(this.addr,e),en(n,e)}}function PM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;s.uniform4iv(this.addr,e),en(n,e)}}function NM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function LM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;s.uniform2uiv(this.addr,e),en(n,e)}}function DM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Jt(n,e))return;s.uniform3uiv(this.addr,e),en(n,e)}}function IM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;s.uniform4uiv(this.addr,e),en(n,e)}}function UM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(Hm.compareFunction=Ag,l=Hm):l=Vg,n.setTexture2D(e||l,a)}function FM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||Wg,a)}function OM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||jg,a)}function kM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Gg,a)}function zM(s){switch(s){case 5126:return yM;case 35664:return SM;case 35665:return MM;case 35666:return EM;case 35674:return wM;case 35675:return TM;case 35676:return AM;case 5124:case 35670:return CM;case 35667:case 35671:return RM;case 35668:case 35672:return bM;case 35669:case 35673:return PM;case 5125:return NM;case 36294:return LM;case 36295:return DM;case 36296:return IM;case 35678:case 36198:case 36298:case 36306:case 35682:return UM;case 35679:case 36299:case 36307:return FM;case 35680:case 36300:case 36308:case 36293:return OM;case 36289:case 36303:case 36311:case 36292:return kM}}function BM(s,e){s.uniform1fv(this.addr,e)}function HM(s,e){const n=to(e,this.size,2);s.uniform2fv(this.addr,n)}function VM(s,e){const n=to(e,this.size,3);s.uniform3fv(this.addr,n)}function GM(s,e){const n=to(e,this.size,4);s.uniform4fv(this.addr,n)}function WM(s,e){const n=to(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function jM(s,e){const n=to(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function XM(s,e){const n=to(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function qM(s,e){s.uniform1iv(this.addr,e)}function YM(s,e){s.uniform2iv(this.addr,e)}function $M(s,e){s.uniform3iv(this.addr,e)}function KM(s,e){s.uniform4iv(this.addr,e)}function ZM(s,e){s.uniform1uiv(this.addr,e)}function QM(s,e){s.uniform2uiv(this.addr,e)}function JM(s,e){s.uniform3uiv(this.addr,e)}function e1(s,e){s.uniform4uiv(this.addr,e)}function t1(s,e,n){const r=this.cache,a=e.length,l=jl(n,a);Jt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let d=0;d!==a;++d)n.setTexture2D(e[d]||Vg,l[d])}function n1(s,e,n){const r=this.cache,a=e.length,l=jl(n,a);Jt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let d=0;d!==a;++d)n.setTexture3D(e[d]||Wg,l[d])}function i1(s,e,n){const r=this.cache,a=e.length,l=jl(n,a);Jt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let d=0;d!==a;++d)n.setTextureCube(e[d]||jg,l[d])}function r1(s,e,n){const r=this.cache,a=e.length,l=jl(n,a);Jt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let d=0;d!==a;++d)n.setTexture2DArray(e[d]||Gg,l[d])}function s1(s){switch(s){case 5126:return BM;case 35664:return HM;case 35665:return VM;case 35666:return GM;case 35674:return WM;case 35675:return jM;case 35676:return XM;case 5124:case 35670:return qM;case 35667:case 35671:return YM;case 35668:case 35672:return $M;case 35669:case 35673:return KM;case 5125:return ZM;case 36294:return QM;case 36295:return JM;case 36296:return e1;case 35678:case 36198:case 36298:case 36306:case 35682:return t1;case 35679:case 36299:case 36307:return n1;case 35680:case 36300:case 36308:case 36293:return i1;case 36289:case 36303:case 36311:case 36292:return r1}}class o1{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=zM(n.type)}}class a1{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=s1(n.type)}}class l1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let l=0,d=a.length;l!==d;++l){const u=a[l];u.setValue(e,n[u.id],r)}}}const sd=/(\w+)(\])?(\[|\.)?/g;function qm(s,e){s.seq.push(e),s.map[e.id]=e}function c1(s,e,n){const r=s.name,a=r.length;for(sd.lastIndex=0;;){const l=sd.exec(r),d=sd.lastIndex;let u=l[1];const h=l[2]==="]",g=l[3];if(h&&(u=u|0),g===void 0||g==="["&&d+2===a){qm(n,g===void 0?new o1(u,s,e):new a1(u,s,e));break}else{let _=n.map[u];_===void 0&&(_=new l1(u),qm(n,_)),n=_}}}class Ul{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(n,a),d=e.getUniformLocation(n,l.name);c1(l,d,this)}}setValue(e,n,r,a){const l=this.map[n];l!==void 0&&l.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let l=0,d=n.length;l!==d;++l){const u=n[l],h=r[u.id];h.needsUpdate!==!1&&u.setValue(e,h.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,l=e.length;a!==l;++a){const d=e[a];d.id in n&&r.push(d)}return r}}function Ym(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const u1=37297;let d1=0;function f1(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let d=a;d<l;d++){const u=d+1;r.push(`${u===e?">":" "} ${u}: ${n[d]}`)}return r.join(`
`)}const $m=new ut;function h1(s){At._getMatrix($m,At.workingColorSpace,s);const e=`mat3( ${$m.elements.map(n=>n.toFixed(4))} )`;switch(At.getTransfer(s)){case kl:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Km(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const d=parseInt(l[1]);return n.toUpperCase()+`

`+a+`

`+f1(s.getShaderSource(e),d)}else return a}function p1(s,e){const n=h1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function m1(s,e){let n;switch(e){case p_:n="Linear";break;case m_:n="Reinhard";break;case g_:n="Cineon";break;case pg:n="ACESFilmic";break;case __:n="AgX";break;case x_:n="Neutral";break;case v_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Rl=new se;function g1(){At.getLuminanceCoefficients(Rl);const s=Rl.x.toFixed(4),e=Rl.y.toFixed(4),n=Rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function _1(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function x1(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),d=l.name;let u=1;l.type===s.FLOAT_MAT2&&(u=2),l.type===s.FLOAT_MAT3&&(u=3),l.type===s.FLOAT_MAT4&&(u=4),n[d]={type:l.type,location:s.getAttribLocation(e,d),locationSize:u}}return n}function Ho(s){return s!==""}function Zm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const y1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jd(s){return s.replace(y1,M1)}const S1=new Map;function M1(s,e){let n=dt[e];if(n===void 0){const r=S1.get(e);if(r!==void 0)n=dt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Jd(n)}const E1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jm(s){return s.replace(E1,w1)}function w1(s,e,n,r){let a="";for(let l=parseInt(e);l<parseInt(n);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function eg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function T1(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===fg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===qv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===zi&&(e="SHADOWMAP_TYPE_VSM"),e}function A1(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case qs:case Ys:e="ENVMAP_TYPE_CUBE";break;case Vl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function C1(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function R1(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case hg:e="ENVMAP_BLENDING_MULTIPLY";break;case f_:e="ENVMAP_BLENDING_MIX";break;case h_:e="ENVMAP_BLENDING_ADD";break}return e}function b1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function P1(s,e,n,r){const a=s.getContext(),l=n.defines;let d=n.vertexShader,u=n.fragmentShader;const h=T1(n),g=A1(n),p=C1(n),_=R1(n),x=b1(n),S=v1(n),T=_1(l),M=a.createProgram();let y,v,O=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Ho).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Ho).join(`
`),v.length>0&&(v+=`
`)):(y=[eg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),v=[eg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.envMap?"#define "+p:"",n.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Mr?"#define TONE_MAPPING":"",n.toneMapping!==Mr?dt.tonemapping_pars_fragment:"",n.toneMapping!==Mr?m1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,p1("linearToOutputTexel",n.outputColorSpace),g1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ho).join(`
`)),d=Jd(d),d=Zm(d,n),d=Qm(d,n),u=Jd(u),u=Zm(u,n),u=Qm(u,n),d=Jm(d),u=Jm(u),n.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",n.glslVersion===sm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===sm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const D=O+y+d,b=O+v+u,H=Ym(a,a.VERTEX_SHADER,D),F=Ym(a,a.FRAGMENT_SHADER,b);a.attachShader(M,H),a.attachShader(M,F),n.index0AttributeName!==void 0?a.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(M,0,"position"),a.linkProgram(M);function k(B){if(s.debug.checkShaderErrors){const oe=a.getProgramInfoLog(M).trim(),Q=a.getShaderInfoLog(H).trim(),ue=a.getShaderInfoLog(F).trim();let te=!0,le=!0;if(a.getProgramParameter(M,a.LINK_STATUS)===!1)if(te=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,M,H,F);else{const re=Km(a,H,"vertex"),I=Km(a,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(M,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+oe+`
`+re+`
`+I)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(Q===""||ue==="")&&(le=!1);le&&(B.diagnostics={runnable:te,programLog:oe,vertexShader:{log:Q,prefix:y},fragmentShader:{log:ue,prefix:v}})}a.deleteShader(H),a.deleteShader(F),G=new Ul(a,M),P=x1(a,M)}let G;this.getUniforms=function(){return G===void 0&&k(this),G};let P;this.getAttributes=function(){return P===void 0&&k(this),P};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=a.getProgramParameter(M,u1)),A},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=d1++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=H,this.fragmentShader=F,this}let N1=0;class L1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),l=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(a)===!1&&(d.add(a),a.usedTimes++),d.has(l)===!1&&(d.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new D1(e),n.set(e,r)),r}}class D1{constructor(e){this.id=N1++,this.code=e,this.usedTimes=0}}function I1(s,e,n,r,a,l,d){const u=new ff,h=new L1,g=new Set,p=[],_=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(P){return g.add(P),P===0?"uv":`uv${P}`}function y(P,A,B,oe,Q){const ue=oe.fog,te=Q.geometry,le=P.isMeshStandardMaterial?oe.environment:null,re=(P.isMeshStandardMaterial?n:e).get(P.envMap||le),I=re&&re.mapping===Vl?re.image.height:null,ee=T[P.type];P.precision!==null&&(S=a.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const $=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,N=$!==void 0?$.length:0;let K=0;te.morphAttributes.position!==void 0&&(K=1),te.morphAttributes.normal!==void 0&&(K=2),te.morphAttributes.color!==void 0&&(K=3);let ye,Y,fe,pe;if(ee){const St=yi[ee];ye=St.vertexShader,Y=St.fragmentShader}else ye=P.vertexShader,Y=P.fragmentShader,h.update(P),fe=h.getVertexShaderID(P),pe=h.getFragmentShaderID(P);const ge=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),Ne=Q.isInstancedMesh===!0,De=Q.isBatchedMesh===!0,lt=!!P.map,pt=!!P.matcap,it=!!re,z=!!P.aoMap,un=!!P.lightMap,ft=!!P.bumpMap,ct=!!P.normalMap,$e=!!P.displacementMap,wt=!!P.emissiveMap,je=!!P.metalnessMap,L=!!P.roughnessMap,w=P.anisotropy>0,ne=P.clearcoat>0,he=P.dispersion>0,_e=P.iridescence>0,me=P.sheen>0,ze=P.transmission>0,Ce=w&&!!P.anisotropyMap,ke=ne&&!!P.clearcoatMap,ht=ne&&!!P.clearcoatNormalMap,we=ne&&!!P.clearcoatRoughnessMap,He=_e&&!!P.iridescenceMap,Ze=_e&&!!P.iridescenceThicknessMap,tt=me&&!!P.sheenColorMap,Ve=me&&!!P.sheenRoughnessMap,mt=!!P.specularMap,st=!!P.specularColorMap,bt=!!P.specularIntensityMap,j=ze&&!!P.transmissionMap,Re=ze&&!!P.thicknessMap,de=!!P.gradientMap,ve=!!P.alphaMap,Ie=P.alphaTest>0,Le=!!P.alphaHash,ot=!!P.extensions;let It=Mr;P.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(It=s.toneMapping);const $t={shaderID:ee,shaderType:P.type,shaderName:P.name,vertexShader:ye,fragmentShader:Y,defines:P.defines,customVertexShaderID:fe,customFragmentShaderID:pe,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:De,batchingColor:De&&Q._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&Q.instanceColor!==null,instancingMorph:Ne&&Q.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ge===null?s.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Zs,alphaToCoverage:!!P.alphaToCoverage,map:lt,matcap:pt,envMap:it,envMapMode:it&&re.mapping,envMapCubeUVHeight:I,aoMap:z,lightMap:un,bumpMap:ft,normalMap:ct,displacementMap:x&&$e,emissiveMap:wt,normalMapObjectSpace:ct&&P.normalMapType===w_,normalMapTangentSpace:ct&&P.normalMapType===E_,metalnessMap:je,roughnessMap:L,anisotropy:w,anisotropyMap:Ce,clearcoat:ne,clearcoatMap:ke,clearcoatNormalMap:ht,clearcoatRoughnessMap:we,dispersion:he,iridescence:_e,iridescenceMap:He,iridescenceThicknessMap:Ze,sheen:me,sheenColorMap:tt,sheenRoughnessMap:Ve,specularMap:mt,specularColorMap:st,specularIntensityMap:bt,transmission:ze,transmissionMap:j,thicknessMap:Re,gradientMap:de,opaque:P.transparent===!1&&P.blending===Vs&&P.alphaToCoverage===!1,alphaMap:ve,alphaTest:Ie,alphaHash:Le,combine:P.combine,mapUv:lt&&M(P.map.channel),aoMapUv:z&&M(P.aoMap.channel),lightMapUv:un&&M(P.lightMap.channel),bumpMapUv:ft&&M(P.bumpMap.channel),normalMapUv:ct&&M(P.normalMap.channel),displacementMapUv:$e&&M(P.displacementMap.channel),emissiveMapUv:wt&&M(P.emissiveMap.channel),metalnessMapUv:je&&M(P.metalnessMap.channel),roughnessMapUv:L&&M(P.roughnessMap.channel),anisotropyMapUv:Ce&&M(P.anisotropyMap.channel),clearcoatMapUv:ke&&M(P.clearcoatMap.channel),clearcoatNormalMapUv:ht&&M(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&M(P.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&M(P.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&M(P.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&M(P.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&M(P.sheenRoughnessMap.channel),specularMapUv:mt&&M(P.specularMap.channel),specularColorMapUv:st&&M(P.specularColorMap.channel),specularIntensityMapUv:bt&&M(P.specularIntensityMap.channel),transmissionMapUv:j&&M(P.transmissionMap.channel),thicknessMapUv:Re&&M(P.thicknessMap.channel),alphaMapUv:ve&&M(P.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(ct||w),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!te.attributes.uv&&(lt||ve),fog:!!ue,useFog:P.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Ae,skinning:Q.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:K,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:It,decodeVideoTexture:lt&&P.map.isVideoTexture===!0&&At.getTransfer(P.map.colorSpace)===Pt,decodeVideoTextureEmissive:wt&&P.emissiveMap.isVideoTexture===!0&&At.getTransfer(P.emissiveMap.colorSpace)===Pt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===li,flipSided:P.side===Cn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:ot&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&P.extensions.multiDraw===!0||De)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return $t.vertexUv1s=g.has(1),$t.vertexUv2s=g.has(2),$t.vertexUv3s=g.has(3),g.clear(),$t}function v(P){const A=[];if(P.shaderID?A.push(P.shaderID):(A.push(P.customVertexShaderID),A.push(P.customFragmentShaderID)),P.defines!==void 0)for(const B in P.defines)A.push(B),A.push(P.defines[B]);return P.isRawShaderMaterial===!1&&(O(A,P),D(A,P),A.push(s.outputColorSpace)),A.push(P.customProgramCacheKey),A.join()}function O(P,A){P.push(A.precision),P.push(A.outputColorSpace),P.push(A.envMapMode),P.push(A.envMapCubeUVHeight),P.push(A.mapUv),P.push(A.alphaMapUv),P.push(A.lightMapUv),P.push(A.aoMapUv),P.push(A.bumpMapUv),P.push(A.normalMapUv),P.push(A.displacementMapUv),P.push(A.emissiveMapUv),P.push(A.metalnessMapUv),P.push(A.roughnessMapUv),P.push(A.anisotropyMapUv),P.push(A.clearcoatMapUv),P.push(A.clearcoatNormalMapUv),P.push(A.clearcoatRoughnessMapUv),P.push(A.iridescenceMapUv),P.push(A.iridescenceThicknessMapUv),P.push(A.sheenColorMapUv),P.push(A.sheenRoughnessMapUv),P.push(A.specularMapUv),P.push(A.specularColorMapUv),P.push(A.specularIntensityMapUv),P.push(A.transmissionMapUv),P.push(A.thicknessMapUv),P.push(A.combine),P.push(A.fogExp2),P.push(A.sizeAttenuation),P.push(A.morphTargetsCount),P.push(A.morphAttributeCount),P.push(A.numDirLights),P.push(A.numPointLights),P.push(A.numSpotLights),P.push(A.numSpotLightMaps),P.push(A.numHemiLights),P.push(A.numRectAreaLights),P.push(A.numDirLightShadows),P.push(A.numPointLightShadows),P.push(A.numSpotLightShadows),P.push(A.numSpotLightShadowsWithMaps),P.push(A.numLightProbes),P.push(A.shadowMapType),P.push(A.toneMapping),P.push(A.numClippingPlanes),P.push(A.numClipIntersection),P.push(A.depthPacking)}function D(P,A){u.disableAll(),A.supportsVertexTextures&&u.enable(0),A.instancing&&u.enable(1),A.instancingColor&&u.enable(2),A.instancingMorph&&u.enable(3),A.matcap&&u.enable(4),A.envMap&&u.enable(5),A.normalMapObjectSpace&&u.enable(6),A.normalMapTangentSpace&&u.enable(7),A.clearcoat&&u.enable(8),A.iridescence&&u.enable(9),A.alphaTest&&u.enable(10),A.vertexColors&&u.enable(11),A.vertexAlphas&&u.enable(12),A.vertexUv1s&&u.enable(13),A.vertexUv2s&&u.enable(14),A.vertexUv3s&&u.enable(15),A.vertexTangents&&u.enable(16),A.anisotropy&&u.enable(17),A.alphaHash&&u.enable(18),A.batching&&u.enable(19),A.dispersion&&u.enable(20),A.batchingColor&&u.enable(21),P.push(u.mask),u.disableAll(),A.fog&&u.enable(0),A.useFog&&u.enable(1),A.flatShading&&u.enable(2),A.logarithmicDepthBuffer&&u.enable(3),A.reverseDepthBuffer&&u.enable(4),A.skinning&&u.enable(5),A.morphTargets&&u.enable(6),A.morphNormals&&u.enable(7),A.morphColors&&u.enable(8),A.premultipliedAlpha&&u.enable(9),A.shadowMapEnabled&&u.enable(10),A.doubleSided&&u.enable(11),A.flipSided&&u.enable(12),A.useDepthPacking&&u.enable(13),A.dithering&&u.enable(14),A.transmission&&u.enable(15),A.sheen&&u.enable(16),A.opaque&&u.enable(17),A.pointsUvs&&u.enable(18),A.decodeVideoTexture&&u.enable(19),A.decodeVideoTextureEmissive&&u.enable(20),A.alphaToCoverage&&u.enable(21),P.push(u.mask)}function b(P){const A=T[P.type];let B;if(A){const oe=yi[A];B=tx.clone(oe.uniforms)}else B=P.uniforms;return B}function H(P,A){let B;for(let oe=0,Q=p.length;oe<Q;oe++){const ue=p[oe];if(ue.cacheKey===A){B=ue,++B.usedTimes;break}}return B===void 0&&(B=new P1(s,A,P,l),p.push(B)),B}function F(P){if(--P.usedTimes===0){const A=p.indexOf(P);p[A]=p[p.length-1],p.pop(),P.destroy()}}function k(P){h.remove(P)}function G(){h.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:b,acquireProgram:H,releaseProgram:F,releaseShaderCache:k,programs:p,dispose:G}}function U1(){let s=new WeakMap;function e(d){return s.has(d)}function n(d){let u=s.get(d);return u===void 0&&(u={},s.set(d,u)),u}function r(d){s.delete(d)}function a(d,u,h){s.get(d)[u]=h}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:l}}function F1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function tg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ng(){const s=[];let e=0;const n=[],r=[],a=[];function l(){e=0,n.length=0,r.length=0,a.length=0}function d(_,x,S,T,M,y){let v=s[e];return v===void 0?(v={id:_.id,object:_,geometry:x,material:S,groupOrder:T,renderOrder:_.renderOrder,z:M,group:y},s[e]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=S,v.groupOrder=T,v.renderOrder=_.renderOrder,v.z=M,v.group=y),e++,v}function u(_,x,S,T,M,y){const v=d(_,x,S,T,M,y);S.transmission>0?r.push(v):S.transparent===!0?a.push(v):n.push(v)}function h(_,x,S,T,M,y){const v=d(_,x,S,T,M,y);S.transmission>0?r.unshift(v):S.transparent===!0?a.unshift(v):n.unshift(v)}function g(_,x){n.length>1&&n.sort(_||F1),r.length>1&&r.sort(x||tg),a.length>1&&a.sort(x||tg)}function p(){for(let _=e,x=s.length;_<x;_++){const S=s[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:l,push:u,unshift:h,finish:p,sort:g}}function O1(){let s=new WeakMap;function e(r,a){const l=s.get(r);let d;return l===void 0?(d=new ng,s.set(r,[d])):a>=l.length?(d=new ng,l.push(d)):d=l[a],d}function n(){s=new WeakMap}return{get:e,dispose:n}}function k1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new se,color:new Ct};break;case"SpotLight":n={position:new se,direction:new se,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new se,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":n={direction:new se,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":n={color:new Ct,position:new se,halfWidth:new se,halfHeight:new se};break}return s[e.id]=n,n}}}function z1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let B1=0;function H1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function V1(s){const e=new k1,n=z1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)r.probe.push(new se);const a=new se,l=new Ot,d=new Ot;function u(g){let p=0,_=0,x=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let S=0,T=0,M=0,y=0,v=0,O=0,D=0,b=0,H=0,F=0,k=0;g.sort(H1);for(let P=0,A=g.length;P<A;P++){const B=g[P],oe=B.color,Q=B.intensity,ue=B.distance,te=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)p+=oe.r*Q,_+=oe.g*Q,x+=oe.b*Q;else if(B.isLightProbe){for(let le=0;le<9;le++)r.probe[le].addScaledVector(B.sh.coefficients[le],Q);k++}else if(B.isDirectionalLight){const le=e.get(B);if(le.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const re=B.shadow,I=n.get(B);I.shadowIntensity=re.intensity,I.shadowBias=re.bias,I.shadowNormalBias=re.normalBias,I.shadowRadius=re.radius,I.shadowMapSize=re.mapSize,r.directionalShadow[S]=I,r.directionalShadowMap[S]=te,r.directionalShadowMatrix[S]=B.shadow.matrix,O++}r.directional[S]=le,S++}else if(B.isSpotLight){const le=e.get(B);le.position.setFromMatrixPosition(B.matrixWorld),le.color.copy(oe).multiplyScalar(Q),le.distance=ue,le.coneCos=Math.cos(B.angle),le.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),le.decay=B.decay,r.spot[M]=le;const re=B.shadow;if(B.map&&(r.spotLightMap[H]=B.map,H++,re.updateMatrices(B),B.castShadow&&F++),r.spotLightMatrix[M]=re.matrix,B.castShadow){const I=n.get(B);I.shadowIntensity=re.intensity,I.shadowBias=re.bias,I.shadowNormalBias=re.normalBias,I.shadowRadius=re.radius,I.shadowMapSize=re.mapSize,r.spotShadow[M]=I,r.spotShadowMap[M]=te,b++}M++}else if(B.isRectAreaLight){const le=e.get(B);le.color.copy(oe).multiplyScalar(Q),le.halfWidth.set(B.width*.5,0,0),le.halfHeight.set(0,B.height*.5,0),r.rectArea[y]=le,y++}else if(B.isPointLight){const le=e.get(B);if(le.color.copy(B.color).multiplyScalar(B.intensity),le.distance=B.distance,le.decay=B.decay,B.castShadow){const re=B.shadow,I=n.get(B);I.shadowIntensity=re.intensity,I.shadowBias=re.bias,I.shadowNormalBias=re.normalBias,I.shadowRadius=re.radius,I.shadowMapSize=re.mapSize,I.shadowCameraNear=re.camera.near,I.shadowCameraFar=re.camera.far,r.pointShadow[T]=I,r.pointShadowMap[T]=te,r.pointShadowMatrix[T]=B.shadow.matrix,D++}r.point[T]=le,T++}else if(B.isHemisphereLight){const le=e.get(B);le.skyColor.copy(B.color).multiplyScalar(Q),le.groundColor.copy(B.groundColor).multiplyScalar(Q),r.hemi[v]=le,v++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=p,r.ambient[1]=_,r.ambient[2]=x;const G=r.hash;(G.directionalLength!==S||G.pointLength!==T||G.spotLength!==M||G.rectAreaLength!==y||G.hemiLength!==v||G.numDirectionalShadows!==O||G.numPointShadows!==D||G.numSpotShadows!==b||G.numSpotMaps!==H||G.numLightProbes!==k)&&(r.directional.length=S,r.spot.length=M,r.rectArea.length=y,r.point.length=T,r.hemi.length=v,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=b+H-F,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=k,G.directionalLength=S,G.pointLength=T,G.spotLength=M,G.rectAreaLength=y,G.hemiLength=v,G.numDirectionalShadows=O,G.numPointShadows=D,G.numSpotShadows=b,G.numSpotMaps=H,G.numLightProbes=k,r.version=B1++)}function h(g,p){let _=0,x=0,S=0,T=0,M=0;const y=p.matrixWorldInverse;for(let v=0,O=g.length;v<O;v++){const D=g[v];if(D.isDirectionalLight){const b=r.directional[_];b.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(y),_++}else if(D.isSpotLight){const b=r.spot[S];b.position.setFromMatrixPosition(D.matrixWorld),b.position.applyMatrix4(y),b.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(y),S++}else if(D.isRectAreaLight){const b=r.rectArea[T];b.position.setFromMatrixPosition(D.matrixWorld),b.position.applyMatrix4(y),d.identity(),l.copy(D.matrixWorld),l.premultiply(y),d.extractRotation(l),b.halfWidth.set(D.width*.5,0,0),b.halfHeight.set(0,D.height*.5,0),b.halfWidth.applyMatrix4(d),b.halfHeight.applyMatrix4(d),T++}else if(D.isPointLight){const b=r.point[x];b.position.setFromMatrixPosition(D.matrixWorld),b.position.applyMatrix4(y),x++}else if(D.isHemisphereLight){const b=r.hemi[M];b.direction.setFromMatrixPosition(D.matrixWorld),b.direction.transformDirection(y),M++}}}return{setup:u,setupView:h,state:r}}function ig(s){const e=new V1(s),n=[],r=[];function a(p){g.camera=p,n.length=0,r.length=0}function l(p){n.push(p)}function d(p){r.push(p)}function u(){e.setup(n)}function h(p){e.setupView(n,p)}const g={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:g,setupLights:u,setupLightsView:h,pushLight:l,pushShadow:d}}function G1(s){let e=new WeakMap;function n(a,l=0){const d=e.get(a);let u;return d===void 0?(u=new ig(s),e.set(a,[u])):l>=d.length?(u=new ig(s),d.push(u)):u=d[l],u}function r(){e=new WeakMap}return{get:n,dispose:r}}const W1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function X1(s,e,n){let r=new hf;const a=new Rt,l=new Rt,d=new jt,u=new fx({depthPacking:M_}),h=new hx,g={},p=n.maxTextureSize,_={[Er]:Cn,[Cn]:Er,[li]:li},x=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:W1,fragmentShader:j1}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const T=new bn;T.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ln(T,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fg;let v=this.type;this.render=function(F,k,G){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const P=s.getRenderTarget(),A=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),oe=s.state;oe.setBlending(Sr),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const Q=v!==zi&&this.type===zi,ue=v===zi&&this.type!==zi;for(let te=0,le=F.length;te<le;te++){const re=F[te],I=re.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;a.copy(I.mapSize);const ee=I.getFrameExtents();if(a.multiply(ee),l.copy(I.mapSize),(a.x>p||a.y>p)&&(a.x>p&&(l.x=Math.floor(p/ee.x),a.x=l.x*ee.x,I.mapSize.x=l.x),a.y>p&&(l.y=Math.floor(p/ee.y),a.y=l.y*ee.y,I.mapSize.y=l.y)),I.map===null||Q===!0||ue===!0){const N=this.type!==zi?{minFilter:di,magFilter:di}:{};I.map!==null&&I.map.dispose(),I.map=new Jr(a.x,a.y,N),I.map.texture.name=re.name+".shadowMap",I.camera.updateProjectionMatrix()}s.setRenderTarget(I.map),s.clear();const $=I.getViewportCount();for(let N=0;N<$;N++){const K=I.getViewport(N);d.set(l.x*K.x,l.y*K.y,l.x*K.z,l.y*K.w),oe.viewport(d),I.updateMatrices(re,N),r=I.getFrustum(),b(k,G,I.camera,re,this.type)}I.isPointLightShadow!==!0&&this.type===zi&&O(I,G),I.needsUpdate=!1}v=this.type,y.needsUpdate=!1,s.setRenderTarget(P,A,B)};function O(F,k){const G=e.update(M);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Jr(a.x,a.y)),x.uniforms.shadow_pass.value=F.map.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(k,null,G,x,M,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(k,null,G,S,M,null)}function D(F,k,G,P){let A=null;const B=G.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(B!==void 0)A=B;else if(A=G.isPointLight===!0?h:u,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const oe=A.uuid,Q=k.uuid;let ue=g[oe];ue===void 0&&(ue={},g[oe]=ue);let te=ue[Q];te===void 0&&(te=A.clone(),ue[Q]=te,k.addEventListener("dispose",H)),A=te}if(A.visible=k.visible,A.wireframe=k.wireframe,P===zi?A.side=k.shadowSide!==null?k.shadowSide:k.side:A.side=k.shadowSide!==null?k.shadowSide:_[k.side],A.alphaMap=k.alphaMap,A.alphaTest=k.alphaTest,A.map=k.map,A.clipShadows=k.clipShadows,A.clippingPlanes=k.clippingPlanes,A.clipIntersection=k.clipIntersection,A.displacementMap=k.displacementMap,A.displacementScale=k.displacementScale,A.displacementBias=k.displacementBias,A.wireframeLinewidth=k.wireframeLinewidth,A.linewidth=k.linewidth,G.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const oe=s.properties.get(A);oe.light=G}return A}function b(F,k,G,P,A){if(F.visible===!1)return;if(F.layers.test(k.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&A===zi)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,F.matrixWorld);const Q=e.update(F),ue=F.material;if(Array.isArray(ue)){const te=Q.groups;for(let le=0,re=te.length;le<re;le++){const I=te[le],ee=ue[I.materialIndex];if(ee&&ee.visible){const $=D(F,ee,P,A);F.onBeforeShadow(s,F,k,G,Q,$,I),s.renderBufferDirect(G,null,Q,$,F,I),F.onAfterShadow(s,F,k,G,Q,$,I)}}}else if(ue.visible){const te=D(F,ue,P,A);F.onBeforeShadow(s,F,k,G,Q,te,null),s.renderBufferDirect(G,null,Q,te,F,null),F.onAfterShadow(s,F,k,G,Q,te,null)}}const oe=F.children;for(let Q=0,ue=oe.length;Q<ue;Q++)b(oe[Q],k,G,P,A)}function H(F){F.target.removeEventListener("dispose",H);for(const G in g){const P=g[G],A=F.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}const q1={[hd]:pd,[md]:_d,[gd]:xd,[Xs]:vd,[pd]:hd,[_d]:md,[xd]:gd,[vd]:Xs};function Y1(s,e){function n(){let j=!1;const Re=new jt;let de=null;const ve=new jt(0,0,0,0);return{setMask:function(Ie){de!==Ie&&!j&&(s.colorMask(Ie,Ie,Ie,Ie),de=Ie)},setLocked:function(Ie){j=Ie},setClear:function(Ie,Le,ot,It,$t){$t===!0&&(Ie*=It,Le*=It,ot*=It),Re.set(Ie,Le,ot,It),ve.equals(Re)===!1&&(s.clearColor(Ie,Le,ot,It),ve.copy(Re))},reset:function(){j=!1,de=null,ve.set(-1,0,0,0)}}}function r(){let j=!1,Re=!1,de=null,ve=null,Ie=null;return{setReversed:function(Le){if(Re!==Le){const ot=e.get("EXT_clip_control");Re?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT);const It=Ie;Ie=null,this.setClear(It)}Re=Le},getReversed:function(){return Re},setTest:function(Le){Le?ge(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(Le){de!==Le&&!j&&(s.depthMask(Le),de=Le)},setFunc:function(Le){if(Re&&(Le=q1[Le]),ve!==Le){switch(Le){case hd:s.depthFunc(s.NEVER);break;case pd:s.depthFunc(s.ALWAYS);break;case md:s.depthFunc(s.LESS);break;case Xs:s.depthFunc(s.LEQUAL);break;case gd:s.depthFunc(s.EQUAL);break;case vd:s.depthFunc(s.GEQUAL);break;case _d:s.depthFunc(s.GREATER);break;case xd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ve=Le}},setLocked:function(Le){j=Le},setClear:function(Le){Ie!==Le&&(Re&&(Le=1-Le),s.clearDepth(Le),Ie=Le)},reset:function(){j=!1,de=null,ve=null,Ie=null,Re=!1}}}function a(){let j=!1,Re=null,de=null,ve=null,Ie=null,Le=null,ot=null,It=null,$t=null;return{setTest:function(St){j||(St?ge(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(St){Re!==St&&!j&&(s.stencilMask(St),Re=St)},setFunc:function(St,Pn,Mn){(de!==St||ve!==Pn||Ie!==Mn)&&(s.stencilFunc(St,Pn,Mn),de=St,ve=Pn,Ie=Mn)},setOp:function(St,Pn,Mn){(Le!==St||ot!==Pn||It!==Mn)&&(s.stencilOp(St,Pn,Mn),Le=St,ot=Pn,It=Mn)},setLocked:function(St){j=St},setClear:function(St){$t!==St&&(s.clearStencil(St),$t=St)},reset:function(){j=!1,Re=null,de=null,ve=null,Ie=null,Le=null,ot=null,It=null,$t=null}}}const l=new n,d=new r,u=new a,h=new WeakMap,g=new WeakMap;let p={},_={},x=new WeakMap,S=[],T=null,M=!1,y=null,v=null,O=null,D=null,b=null,H=null,F=null,k=new Ct(0,0,0),G=0,P=!1,A=null,B=null,oe=null,Q=null,ue=null;const te=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,re=0;const I=s.getParameter(s.VERSION);I.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(I)[1]),le=re>=1):I.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),le=re>=2);let ee=null,$={};const N=s.getParameter(s.SCISSOR_BOX),K=s.getParameter(s.VIEWPORT),ye=new jt().fromArray(N),Y=new jt().fromArray(K);function fe(j,Re,de,ve){const Ie=new Uint8Array(4),Le=s.createTexture();s.bindTexture(j,Le),s.texParameteri(j,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(j,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ot=0;ot<de;ot++)j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,ve,0,s.RGBA,s.UNSIGNED_BYTE,Ie):s.texImage2D(Re+ot,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ie);return Le}const pe={};pe[s.TEXTURE_2D]=fe(s.TEXTURE_2D,s.TEXTURE_2D,1),pe[s.TEXTURE_CUBE_MAP]=fe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[s.TEXTURE_2D_ARRAY]=fe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),pe[s.TEXTURE_3D]=fe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),d.setClear(1),u.setClear(0),ge(s.DEPTH_TEST),d.setFunc(Xs),ft(!1),ct(em),ge(s.CULL_FACE),z(Sr);function ge(j){p[j]!==!0&&(s.enable(j),p[j]=!0)}function Ae(j){p[j]!==!1&&(s.disable(j),p[j]=!1)}function Ne(j,Re){return _[j]!==Re?(s.bindFramebuffer(j,Re),_[j]=Re,j===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Re),j===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function De(j,Re){let de=S,ve=!1;if(j){de=x.get(Re),de===void 0&&(de=[],x.set(Re,de));const Ie=j.textures;if(de.length!==Ie.length||de[0]!==s.COLOR_ATTACHMENT0){for(let Le=0,ot=Ie.length;Le<ot;Le++)de[Le]=s.COLOR_ATTACHMENT0+Le;de.length=Ie.length,ve=!0}}else de[0]!==s.BACK&&(de[0]=s.BACK,ve=!0);ve&&s.drawBuffers(de)}function lt(j){return T!==j?(s.useProgram(j),T=j,!0):!1}const pt={[Xr]:s.FUNC_ADD,[$v]:s.FUNC_SUBTRACT,[Kv]:s.FUNC_REVERSE_SUBTRACT};pt[Zv]=s.MIN,pt[Qv]=s.MAX;const it={[Jv]:s.ZERO,[e_]:s.ONE,[t_]:s.SRC_COLOR,[dd]:s.SRC_ALPHA,[a_]:s.SRC_ALPHA_SATURATE,[s_]:s.DST_COLOR,[i_]:s.DST_ALPHA,[n_]:s.ONE_MINUS_SRC_COLOR,[fd]:s.ONE_MINUS_SRC_ALPHA,[o_]:s.ONE_MINUS_DST_COLOR,[r_]:s.ONE_MINUS_DST_ALPHA,[l_]:s.CONSTANT_COLOR,[c_]:s.ONE_MINUS_CONSTANT_COLOR,[u_]:s.CONSTANT_ALPHA,[d_]:s.ONE_MINUS_CONSTANT_ALPHA};function z(j,Re,de,ve,Ie,Le,ot,It,$t,St){if(j===Sr){M===!0&&(Ae(s.BLEND),M=!1);return}if(M===!1&&(ge(s.BLEND),M=!0),j!==Yv){if(j!==y||St!==P){if((v!==Xr||b!==Xr)&&(s.blendEquation(s.FUNC_ADD),v=Xr,b=Xr),St)switch(j){case Vs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ud:s.blendFunc(s.ONE,s.ONE);break;case tm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nm:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case Vs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ud:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case tm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nm:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}O=null,D=null,H=null,F=null,k.set(0,0,0),G=0,y=j,P=St}return}Ie=Ie||Re,Le=Le||de,ot=ot||ve,(Re!==v||Ie!==b)&&(s.blendEquationSeparate(pt[Re],pt[Ie]),v=Re,b=Ie),(de!==O||ve!==D||Le!==H||ot!==F)&&(s.blendFuncSeparate(it[de],it[ve],it[Le],it[ot]),O=de,D=ve,H=Le,F=ot),(It.equals(k)===!1||$t!==G)&&(s.blendColor(It.r,It.g,It.b,$t),k.copy(It),G=$t),y=j,P=!1}function un(j,Re){j.side===li?Ae(s.CULL_FACE):ge(s.CULL_FACE);let de=j.side===Cn;Re&&(de=!de),ft(de),j.blending===Vs&&j.transparent===!1?z(Sr):z(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),d.setFunc(j.depthFunc),d.setTest(j.depthTest),d.setMask(j.depthWrite),l.setMask(j.colorWrite);const ve=j.stencilWrite;u.setTest(ve),ve&&(u.setMask(j.stencilWriteMask),u.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),u.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),wt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?ge(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function ft(j){A!==j&&(j?s.frontFace(s.CW):s.frontFace(s.CCW),A=j)}function ct(j){j!==jv?(ge(s.CULL_FACE),j!==B&&(j===em?s.cullFace(s.BACK):j===Xv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),B=j}function $e(j){j!==oe&&(le&&s.lineWidth(j),oe=j)}function wt(j,Re,de){j?(ge(s.POLYGON_OFFSET_FILL),(Q!==Re||ue!==de)&&(s.polygonOffset(Re,de),Q=Re,ue=de)):Ae(s.POLYGON_OFFSET_FILL)}function je(j){j?ge(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function L(j){j===void 0&&(j=s.TEXTURE0+te-1),ee!==j&&(s.activeTexture(j),ee=j)}function w(j,Re,de){de===void 0&&(ee===null?de=s.TEXTURE0+te-1:de=ee);let ve=$[de];ve===void 0&&(ve={type:void 0,texture:void 0},$[de]=ve),(ve.type!==j||ve.texture!==Re)&&(ee!==de&&(s.activeTexture(de),ee=de),s.bindTexture(j,Re||pe[j]),ve.type=j,ve.texture=Re)}function ne(){const j=$[ee];j!==void 0&&j.type!==void 0&&(s.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function he(){try{s.compressedTexImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function _e(){try{s.compressedTexImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function me(){try{s.texSubImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ze(){try{s.texSubImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ke(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ht(){try{s.texStorage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function we(){try{s.texStorage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function He(){try{s.texImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ze(){try{s.texImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function tt(j){ye.equals(j)===!1&&(s.scissor(j.x,j.y,j.z,j.w),ye.copy(j))}function Ve(j){Y.equals(j)===!1&&(s.viewport(j.x,j.y,j.z,j.w),Y.copy(j))}function mt(j,Re){let de=g.get(Re);de===void 0&&(de=new WeakMap,g.set(Re,de));let ve=de.get(j);ve===void 0&&(ve=s.getUniformBlockIndex(Re,j.name),de.set(j,ve))}function st(j,Re){const ve=g.get(Re).get(j);h.get(Re)!==ve&&(s.uniformBlockBinding(Re,ve,j.__bindingPointIndex),h.set(Re,ve))}function bt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),p={},ee=null,$={},_={},x=new WeakMap,S=[],T=null,M=!1,y=null,v=null,O=null,D=null,b=null,H=null,F=null,k=new Ct(0,0,0),G=0,P=!1,A=null,B=null,oe=null,Q=null,ue=null,ye.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),l.reset(),d.reset(),u.reset()}return{buffers:{color:l,depth:d,stencil:u},enable:ge,disable:Ae,bindFramebuffer:Ne,drawBuffers:De,useProgram:lt,setBlending:z,setMaterial:un,setFlipSided:ft,setCullFace:ct,setLineWidth:$e,setPolygonOffset:wt,setScissorTest:je,activeTexture:L,bindTexture:w,unbindTexture:ne,compressedTexImage2D:he,compressedTexImage3D:_e,texImage2D:He,texImage3D:Ze,updateUBOMapping:mt,uniformBlockBinding:st,texStorage2D:ht,texStorage3D:we,texSubImage2D:me,texSubImage3D:ze,compressedTexSubImage2D:Ce,compressedTexSubImage3D:ke,scissor:tt,viewport:Ve,reset:bt}}function $1(s,e,n,r,a,l,d){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new Rt,p=new WeakMap;let _;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(L,w){return S?new OffscreenCanvas(L,w):Go("canvas")}function M(L,w,ne){let he=1;const _e=je(L);if((_e.width>ne||_e.height>ne)&&(he=ne/Math.max(_e.width,_e.height)),he<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const me=Math.floor(he*_e.width),ze=Math.floor(he*_e.height);_===void 0&&(_=T(me,ze));const Ce=w?T(me,ze):_;return Ce.width=me,Ce.height=ze,Ce.getContext("2d").drawImage(L,0,0,me,ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+me+"x"+ze+")."),Ce}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),L;return L}function y(L){return L.generateMipmaps}function v(L){s.generateMipmap(L)}function O(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(L,w,ne,he,_e=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let me=w;if(w===s.RED&&(ne===s.FLOAT&&(me=s.R32F),ne===s.HALF_FLOAT&&(me=s.R16F),ne===s.UNSIGNED_BYTE&&(me=s.R8)),w===s.RED_INTEGER&&(ne===s.UNSIGNED_BYTE&&(me=s.R8UI),ne===s.UNSIGNED_SHORT&&(me=s.R16UI),ne===s.UNSIGNED_INT&&(me=s.R32UI),ne===s.BYTE&&(me=s.R8I),ne===s.SHORT&&(me=s.R16I),ne===s.INT&&(me=s.R32I)),w===s.RG&&(ne===s.FLOAT&&(me=s.RG32F),ne===s.HALF_FLOAT&&(me=s.RG16F),ne===s.UNSIGNED_BYTE&&(me=s.RG8)),w===s.RG_INTEGER&&(ne===s.UNSIGNED_BYTE&&(me=s.RG8UI),ne===s.UNSIGNED_SHORT&&(me=s.RG16UI),ne===s.UNSIGNED_INT&&(me=s.RG32UI),ne===s.BYTE&&(me=s.RG8I),ne===s.SHORT&&(me=s.RG16I),ne===s.INT&&(me=s.RG32I)),w===s.RGB_INTEGER&&(ne===s.UNSIGNED_BYTE&&(me=s.RGB8UI),ne===s.UNSIGNED_SHORT&&(me=s.RGB16UI),ne===s.UNSIGNED_INT&&(me=s.RGB32UI),ne===s.BYTE&&(me=s.RGB8I),ne===s.SHORT&&(me=s.RGB16I),ne===s.INT&&(me=s.RGB32I)),w===s.RGBA_INTEGER&&(ne===s.UNSIGNED_BYTE&&(me=s.RGBA8UI),ne===s.UNSIGNED_SHORT&&(me=s.RGBA16UI),ne===s.UNSIGNED_INT&&(me=s.RGBA32UI),ne===s.BYTE&&(me=s.RGBA8I),ne===s.SHORT&&(me=s.RGBA16I),ne===s.INT&&(me=s.RGBA32I)),w===s.RGB&&ne===s.UNSIGNED_INT_5_9_9_9_REV&&(me=s.RGB9_E5),w===s.RGBA){const ze=_e?kl:At.getTransfer(he);ne===s.FLOAT&&(me=s.RGBA32F),ne===s.HALF_FLOAT&&(me=s.RGBA16F),ne===s.UNSIGNED_BYTE&&(me=ze===Pt?s.SRGB8_ALPHA8:s.RGBA8),ne===s.UNSIGNED_SHORT_4_4_4_4&&(me=s.RGBA4),ne===s.UNSIGNED_SHORT_5_5_5_1&&(me=s.RGB5_A1)}return(me===s.R16F||me===s.R32F||me===s.RG16F||me===s.RG32F||me===s.RGBA16F||me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function b(L,w){let ne;return L?w===null||w===Qr||w===$s?ne=s.DEPTH24_STENCIL8:w===Hi?ne=s.DEPTH32F_STENCIL8:w===Vo&&(ne=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Qr||w===$s?ne=s.DEPTH_COMPONENT24:w===Hi?ne=s.DEPTH_COMPONENT32F:w===Vo&&(ne=s.DEPTH_COMPONENT16),ne}function H(L,w){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==di&&L.minFilter!==Si?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function F(L){const w=L.target;w.removeEventListener("dispose",F),G(w),w.isVideoTexture&&p.delete(w)}function k(L){const w=L.target;w.removeEventListener("dispose",k),A(w)}function G(L){const w=r.get(L);if(w.__webglInit===void 0)return;const ne=L.source,he=x.get(ne);if(he){const _e=he[w.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&P(L),Object.keys(he).length===0&&x.delete(ne)}r.remove(L)}function P(L){const w=r.get(L);s.deleteTexture(w.__webglTexture);const ne=L.source,he=x.get(ne);delete he[w.__cacheKey],d.memory.textures--}function A(L){const w=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(w.__webglFramebuffer[he]))for(let _e=0;_e<w.__webglFramebuffer[he].length;_e++)s.deleteFramebuffer(w.__webglFramebuffer[he][_e]);else s.deleteFramebuffer(w.__webglFramebuffer[he]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[he])}else{if(Array.isArray(w.__webglFramebuffer))for(let he=0;he<w.__webglFramebuffer.length;he++)s.deleteFramebuffer(w.__webglFramebuffer[he]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let he=0;he<w.__webglColorRenderbuffer.length;he++)w.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[he]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const ne=L.textures;for(let he=0,_e=ne.length;he<_e;he++){const me=r.get(ne[he]);me.__webglTexture&&(s.deleteTexture(me.__webglTexture),d.memory.textures--),r.remove(ne[he])}r.remove(L)}let B=0;function oe(){B=0}function Q(){const L=B;return L>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),B+=1,L}function ue(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function te(L,w){const ne=r.get(L);if(L.isVideoTexture&&$e(L),L.isRenderTargetTexture===!1&&L.version>0&&ne.__version!==L.version){const he=L.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(ne,L,w);return}}n.bindTexture(s.TEXTURE_2D,ne.__webglTexture,s.TEXTURE0+w)}function le(L,w){const ne=r.get(L);if(L.version>0&&ne.__version!==L.version){Y(ne,L,w);return}n.bindTexture(s.TEXTURE_2D_ARRAY,ne.__webglTexture,s.TEXTURE0+w)}function re(L,w){const ne=r.get(L);if(L.version>0&&ne.__version!==L.version){Y(ne,L,w);return}n.bindTexture(s.TEXTURE_3D,ne.__webglTexture,s.TEXTURE0+w)}function I(L,w){const ne=r.get(L);if(L.version>0&&ne.__version!==L.version){fe(ne,L,w);return}n.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture,s.TEXTURE0+w)}const ee={[Md]:s.REPEAT,[Kr]:s.CLAMP_TO_EDGE,[Ed]:s.MIRRORED_REPEAT},$={[di]:s.NEAREST,[y_]:s.NEAREST_MIPMAP_NEAREST,[rl]:s.NEAREST_MIPMAP_LINEAR,[Si]:s.LINEAR,[Ru]:s.LINEAR_MIPMAP_NEAREST,[Zr]:s.LINEAR_MIPMAP_LINEAR},N={[T_]:s.NEVER,[N_]:s.ALWAYS,[A_]:s.LESS,[Ag]:s.LEQUAL,[C_]:s.EQUAL,[P_]:s.GEQUAL,[R_]:s.GREATER,[b_]:s.NOTEQUAL};function K(L,w){if(w.type===Hi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Si||w.magFilter===Ru||w.magFilter===rl||w.magFilter===Zr||w.minFilter===Si||w.minFilter===Ru||w.minFilter===rl||w.minFilter===Zr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,ee[w.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,ee[w.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,ee[w.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,$[w.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,$[w.minFilter]),w.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,N[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===di||w.minFilter!==rl&&w.minFilter!==Zr||w.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function ye(L,w){let ne=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",F));const he=w.source;let _e=x.get(he);_e===void 0&&(_e={},x.set(he,_e));const me=ue(w);if(me!==L.__cacheKey){_e[me]===void 0&&(_e[me]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,ne=!0),_e[me].usedTimes++;const ze=_e[L.__cacheKey];ze!==void 0&&(_e[L.__cacheKey].usedTimes--,ze.usedTimes===0&&P(w)),L.__cacheKey=me,L.__webglTexture=_e[me].texture}return ne}function Y(L,w,ne){let he=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(he=s.TEXTURE_3D);const _e=ye(L,w),me=w.source;n.bindTexture(he,L.__webglTexture,s.TEXTURE0+ne);const ze=r.get(me);if(me.version!==ze.__version||_e===!0){n.activeTexture(s.TEXTURE0+ne);const Ce=At.getPrimaries(At.workingColorSpace),ke=w.colorSpace===yr?null:At.getPrimaries(w.colorSpace),ht=w.colorSpace===yr||Ce===ke?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let we=M(w.image,!1,a.maxTextureSize);we=wt(w,we);const He=l.convert(w.format,w.colorSpace),Ze=l.convert(w.type);let tt=D(w.internalFormat,He,Ze,w.colorSpace,w.isVideoTexture);K(he,w);let Ve;const mt=w.mipmaps,st=w.isVideoTexture!==!0,bt=ze.__version===void 0||_e===!0,j=me.dataReady,Re=H(w,we);if(w.isDepthTexture)tt=b(w.format===Ks,w.type),bt&&(st?n.texStorage2D(s.TEXTURE_2D,1,tt,we.width,we.height):n.texImage2D(s.TEXTURE_2D,0,tt,we.width,we.height,0,He,Ze,null));else if(w.isDataTexture)if(mt.length>0){st&&bt&&n.texStorage2D(s.TEXTURE_2D,Re,tt,mt[0].width,mt[0].height);for(let de=0,ve=mt.length;de<ve;de++)Ve=mt[de],st?j&&n.texSubImage2D(s.TEXTURE_2D,de,0,0,Ve.width,Ve.height,He,Ze,Ve.data):n.texImage2D(s.TEXTURE_2D,de,tt,Ve.width,Ve.height,0,He,Ze,Ve.data);w.generateMipmaps=!1}else st?(bt&&n.texStorage2D(s.TEXTURE_2D,Re,tt,we.width,we.height),j&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,we.width,we.height,He,Ze,we.data)):n.texImage2D(s.TEXTURE_2D,0,tt,we.width,we.height,0,He,Ze,we.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){st&&bt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Re,tt,mt[0].width,mt[0].height,we.depth);for(let de=0,ve=mt.length;de<ve;de++)if(Ve=mt[de],w.format!==ui)if(He!==null)if(st){if(j)if(w.layerUpdates.size>0){const Ie=Dm(Ve.width,Ve.height,w.format,w.type);for(const Le of w.layerUpdates){const ot=Ve.data.subarray(Le*Ie/Ve.data.BYTES_PER_ELEMENT,(Le+1)*Ie/Ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,Le,Ve.width,Ve.height,1,He,ot)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,Ve.width,Ve.height,we.depth,He,Ve.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,de,tt,Ve.width,Ve.height,we.depth,0,Ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?j&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,Ve.width,Ve.height,we.depth,He,Ze,Ve.data):n.texImage3D(s.TEXTURE_2D_ARRAY,de,tt,Ve.width,Ve.height,we.depth,0,He,Ze,Ve.data)}else{st&&bt&&n.texStorage2D(s.TEXTURE_2D,Re,tt,mt[0].width,mt[0].height);for(let de=0,ve=mt.length;de<ve;de++)Ve=mt[de],w.format!==ui?He!==null?st?j&&n.compressedTexSubImage2D(s.TEXTURE_2D,de,0,0,Ve.width,Ve.height,He,Ve.data):n.compressedTexImage2D(s.TEXTURE_2D,de,tt,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?j&&n.texSubImage2D(s.TEXTURE_2D,de,0,0,Ve.width,Ve.height,He,Ze,Ve.data):n.texImage2D(s.TEXTURE_2D,de,tt,Ve.width,Ve.height,0,He,Ze,Ve.data)}else if(w.isDataArrayTexture)if(st){if(bt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Re,tt,we.width,we.height,we.depth),j)if(w.layerUpdates.size>0){const de=Dm(we.width,we.height,w.format,w.type);for(const ve of w.layerUpdates){const Ie=we.data.subarray(ve*de/we.data.BYTES_PER_ELEMENT,(ve+1)*de/we.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ve,we.width,we.height,1,He,Ze,Ie)}w.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,He,Ze,we.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,tt,we.width,we.height,we.depth,0,He,Ze,we.data);else if(w.isData3DTexture)st?(bt&&n.texStorage3D(s.TEXTURE_3D,Re,tt,we.width,we.height,we.depth),j&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,He,Ze,we.data)):n.texImage3D(s.TEXTURE_3D,0,tt,we.width,we.height,we.depth,0,He,Ze,we.data);else if(w.isFramebufferTexture){if(bt)if(st)n.texStorage2D(s.TEXTURE_2D,Re,tt,we.width,we.height);else{let de=we.width,ve=we.height;for(let Ie=0;Ie<Re;Ie++)n.texImage2D(s.TEXTURE_2D,Ie,tt,de,ve,0,He,Ze,null),de>>=1,ve>>=1}}else if(mt.length>0){if(st&&bt){const de=je(mt[0]);n.texStorage2D(s.TEXTURE_2D,Re,tt,de.width,de.height)}for(let de=0,ve=mt.length;de<ve;de++)Ve=mt[de],st?j&&n.texSubImage2D(s.TEXTURE_2D,de,0,0,He,Ze,Ve):n.texImage2D(s.TEXTURE_2D,de,tt,He,Ze,Ve);w.generateMipmaps=!1}else if(st){if(bt){const de=je(we);n.texStorage2D(s.TEXTURE_2D,Re,tt,de.width,de.height)}j&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,He,Ze,we)}else n.texImage2D(s.TEXTURE_2D,0,tt,He,Ze,we);y(w)&&v(he),ze.__version=me.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function fe(L,w,ne){if(w.image.length!==6)return;const he=ye(L,w),_e=w.source;n.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+ne);const me=r.get(_e);if(_e.version!==me.__version||he===!0){n.activeTexture(s.TEXTURE0+ne);const ze=At.getPrimaries(At.workingColorSpace),Ce=w.colorSpace===yr?null:At.getPrimaries(w.colorSpace),ke=w.colorSpace===yr||ze===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const ht=w.isCompressedTexture||w.image[0].isCompressedTexture,we=w.image[0]&&w.image[0].isDataTexture,He=[];for(let ve=0;ve<6;ve++)!ht&&!we?He[ve]=M(w.image[ve],!0,a.maxCubemapSize):He[ve]=we?w.image[ve].image:w.image[ve],He[ve]=wt(w,He[ve]);const Ze=He[0],tt=l.convert(w.format,w.colorSpace),Ve=l.convert(w.type),mt=D(w.internalFormat,tt,Ve,w.colorSpace),st=w.isVideoTexture!==!0,bt=me.__version===void 0||he===!0,j=_e.dataReady;let Re=H(w,Ze);K(s.TEXTURE_CUBE_MAP,w);let de;if(ht){st&&bt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Re,mt,Ze.width,Ze.height);for(let ve=0;ve<6;ve++){de=He[ve].mipmaps;for(let Ie=0;Ie<de.length;Ie++){const Le=de[Ie];w.format!==ui?tt!==null?st?j&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie,0,0,Le.width,Le.height,tt,Le.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie,mt,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?j&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie,0,0,Le.width,Le.height,tt,Ve,Le.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie,mt,Le.width,Le.height,0,tt,Ve,Le.data)}}}else{if(de=w.mipmaps,st&&bt){de.length>0&&Re++;const ve=je(He[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Re,mt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(we){st?j&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,He[ve].width,He[ve].height,tt,Ve,He[ve].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,mt,He[ve].width,He[ve].height,0,tt,Ve,He[ve].data);for(let Ie=0;Ie<de.length;Ie++){const ot=de[Ie].image[ve].image;st?j&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie+1,0,0,ot.width,ot.height,tt,Ve,ot.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie+1,mt,ot.width,ot.height,0,tt,Ve,ot.data)}}else{st?j&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,tt,Ve,He[ve]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,mt,tt,Ve,He[ve]);for(let Ie=0;Ie<de.length;Ie++){const Le=de[Ie];st?j&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie+1,0,0,tt,Ve,Le.image[ve]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie+1,mt,tt,Ve,Le.image[ve])}}}y(w)&&v(s.TEXTURE_CUBE_MAP),me.__version=_e.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function pe(L,w,ne,he,_e,me){const ze=l.convert(ne.format,ne.colorSpace),Ce=l.convert(ne.type),ke=D(ne.internalFormat,ze,Ce,ne.colorSpace),ht=r.get(w),we=r.get(ne);if(we.__renderTarget=w,!ht.__hasExternalTextures){const He=Math.max(1,w.width>>me),Ze=Math.max(1,w.height>>me);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?n.texImage3D(_e,me,ke,He,Ze,w.depth,0,ze,Ce,null):n.texImage2D(_e,me,ke,He,Ze,0,ze,Ce,null)}n.bindFramebuffer(s.FRAMEBUFFER,L),ct(w)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,_e,we.__webglTexture,0,ft(w)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,_e,we.__webglTexture,me),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ge(L,w,ne){if(s.bindRenderbuffer(s.RENDERBUFFER,L),w.depthBuffer){const he=w.depthTexture,_e=he&&he.isDepthTexture?he.type:null,me=b(w.stencilBuffer,_e),ze=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=ft(w);ct(w)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,me,w.width,w.height):ne?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,me,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,me,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ze,s.RENDERBUFFER,L)}else{const he=w.textures;for(let _e=0;_e<he.length;_e++){const me=he[_e],ze=l.convert(me.format,me.colorSpace),Ce=l.convert(me.type),ke=D(me.internalFormat,ze,Ce,me.colorSpace),ht=ft(w);ne&&ct(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,ke,w.width,w.height):ct(w)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht,ke,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ke,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=r.get(w.depthTexture);he.__renderTarget=w,(!he.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),te(w.depthTexture,0);const _e=he.__webglTexture,me=ft(w);if(w.depthTexture.format===Gs)ct(w)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0);else if(w.depthTexture.format===Ks)ct(w)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Ne(L){const w=r.get(L),ne=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const he=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),he){const _e=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,he.removeEventListener("dispose",_e)};he.addEventListener("dispose",_e),w.__depthDisposeCallback=_e}w.__boundDepthTexture=he}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");Ae(w.__webglFramebuffer,L)}else if(ne){w.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[he]),w.__webglDepthbuffer[he]===void 0)w.__webglDepthbuffer[he]=s.createRenderbuffer(),ge(w.__webglDepthbuffer[he],L,!1);else{const _e=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=w.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,me),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,me)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),ge(w.__webglDepthbuffer,L,!1);else{const he=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,_e),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,_e)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function De(L,w,ne){const he=r.get(L);w!==void 0&&pe(he.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ne!==void 0&&Ne(L)}function lt(L){const w=L.texture,ne=r.get(L),he=r.get(w);L.addEventListener("dispose",k);const _e=L.textures,me=L.isWebGLCubeRenderTarget===!0,ze=_e.length>1;if(ze||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=w.version,d.memory.textures++),me){ne.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0){ne.__webglFramebuffer[Ce]=[];for(let ke=0;ke<w.mipmaps.length;ke++)ne.__webglFramebuffer[Ce][ke]=s.createFramebuffer()}else ne.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){ne.__webglFramebuffer=[];for(let Ce=0;Ce<w.mipmaps.length;Ce++)ne.__webglFramebuffer[Ce]=s.createFramebuffer()}else ne.__webglFramebuffer=s.createFramebuffer();if(ze)for(let Ce=0,ke=_e.length;Ce<ke;Ce++){const ht=r.get(_e[Ce]);ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture(),d.memory.textures++)}if(L.samples>0&&ct(L)===!1){ne.__webglMultisampledFramebuffer=s.createFramebuffer(),ne.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let Ce=0;Ce<_e.length;Ce++){const ke=_e[Ce];ne.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ne.__webglColorRenderbuffer[Ce]);const ht=l.convert(ke.format,ke.colorSpace),we=l.convert(ke.type),He=D(ke.internalFormat,ht,we,ke.colorSpace,L.isXRRenderTarget===!0),Ze=ft(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze,He,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,ne.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(ne.__webglDepthRenderbuffer=s.createRenderbuffer(),ge(ne.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(me){n.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),K(s.TEXTURE_CUBE_MAP,w);for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0)for(let ke=0;ke<w.mipmaps.length;ke++)pe(ne.__webglFramebuffer[Ce][ke],L,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ke);else pe(ne.__webglFramebuffer[Ce],L,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(w)&&v(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ze){for(let Ce=0,ke=_e.length;Ce<ke;Ce++){const ht=_e[Ce],we=r.get(ht);n.bindTexture(s.TEXTURE_2D,we.__webglTexture),K(s.TEXTURE_2D,ht),pe(ne.__webglFramebuffer,L,ht,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,0),y(ht)&&v(s.TEXTURE_2D)}n.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ce=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ce,he.__webglTexture),K(Ce,w),w.mipmaps&&w.mipmaps.length>0)for(let ke=0;ke<w.mipmaps.length;ke++)pe(ne.__webglFramebuffer[ke],L,w,s.COLOR_ATTACHMENT0,Ce,ke);else pe(ne.__webglFramebuffer,L,w,s.COLOR_ATTACHMENT0,Ce,0);y(w)&&v(Ce),n.unbindTexture()}L.depthBuffer&&Ne(L)}function pt(L){const w=L.textures;for(let ne=0,he=w.length;ne<he;ne++){const _e=w[ne];if(y(_e)){const me=O(L),ze=r.get(_e).__webglTexture;n.bindTexture(me,ze),v(me),n.unbindTexture()}}}const it=[],z=[];function un(L){if(L.samples>0){if(ct(L)===!1){const w=L.textures,ne=L.width,he=L.height;let _e=s.COLOR_BUFFER_BIT;const me=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ze=r.get(L),Ce=w.length>1;if(Ce)for(let ke=0;ke<w.length;ke++)n.bindFramebuffer(s.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let ke=0;ke<w.length;ke++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ze.__webglColorRenderbuffer[ke]);const ht=r.get(w[ke]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ht,0)}s.blitFramebuffer(0,0,ne,he,0,0,ne,he,_e,s.NEAREST),h===!0&&(it.length=0,z.length=0,it.push(s.COLOR_ATTACHMENT0+ke),L.depthBuffer&&L.resolveDepthBuffer===!1&&(it.push(me),z.push(me),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,z)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,it))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let ke=0;ke<w.length;ke++){n.bindFramebuffer(s.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,ze.__webglColorRenderbuffer[ke]);const ht=r.get(w[ke]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,ht,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&h){const w=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function ft(L){return Math.min(a.maxSamples,L.samples)}function ct(L){const w=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function $e(L){const w=d.render.frame;p.get(L)!==w&&(p.set(L,w),L.update())}function wt(L,w){const ne=L.colorSpace,he=L.format,_e=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||ne!==Zs&&ne!==yr&&(At.getTransfer(ne)===Pt?(he!==ui||_e!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),w}function je(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(g.width=L.naturalWidth||L.width,g.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(g.width=L.displayWidth,g.height=L.displayHeight):(g.width=L.width,g.height=L.height),g}this.allocateTextureUnit=Q,this.resetTextureUnits=oe,this.setTexture2D=te,this.setTexture2DArray=le,this.setTexture3D=re,this.setTextureCube=I,this.rebindTextures=De,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=un,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ct}function K1(s,e){function n(r,a=yr){let l;const d=At.getTransfer(a);if(r===Wi)return s.UNSIGNED_BYTE;if(r===af)return s.UNSIGNED_SHORT_4_4_4_4;if(r===lf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===_g)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===gg)return s.BYTE;if(r===vg)return s.SHORT;if(r===Vo)return s.UNSIGNED_SHORT;if(r===of)return s.INT;if(r===Qr)return s.UNSIGNED_INT;if(r===Hi)return s.FLOAT;if(r===Wo)return s.HALF_FLOAT;if(r===xg)return s.ALPHA;if(r===yg)return s.RGB;if(r===ui)return s.RGBA;if(r===Sg)return s.LUMINANCE;if(r===Mg)return s.LUMINANCE_ALPHA;if(r===Gs)return s.DEPTH_COMPONENT;if(r===Ks)return s.DEPTH_STENCIL;if(r===Eg)return s.RED;if(r===cf)return s.RED_INTEGER;if(r===wg)return s.RG;if(r===uf)return s.RG_INTEGER;if(r===df)return s.RGBA_INTEGER;if(r===Pl||r===Nl||r===Ll||r===Dl)if(d===Pt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Pl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Nl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ll)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Dl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Pl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Nl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ll)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Dl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===wd||r===Td||r===Ad||r===Cd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===wd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Td)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ad)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Cd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Rd||r===bd||r===Pd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Rd||r===bd)return d===Pt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Pd)return d===Pt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Nd||r===Ld||r===Dd||r===Id||r===Ud||r===Fd||r===Od||r===kd||r===zd||r===Bd||r===Hd||r===Vd||r===Gd||r===Wd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Nd)return d===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ld)return d===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Dd)return d===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Id)return d===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ud)return d===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Fd)return d===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Od)return d===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===kd)return d===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===zd)return d===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Bd)return d===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Hd)return d===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Vd)return d===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Gd)return d===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Wd)return d===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Il||r===jd||r===Xd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Il)return d===Pt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===jd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Xd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Tg||r===qd||r===Yd||r===$d)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Il)return l.COMPRESSED_RED_RGTC1_EXT;if(r===qd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===$d)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===$s?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const Z1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Q1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class J1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Rn,l=e.properties.get(a);l.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new hi({vertexShader:Z1,fragmentShader:Q1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ln(new Wl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eE extends Js{constructor(e,n){super();const r=this;let a=null,l=1,d=null,u="local-floor",h=1,g=null,p=null,_=null,x=null,S=null,T=null;const M=new J1,y=n.getContextAttributes();let v=null,O=null;const D=[],b=[],H=new Rt;let F=null;const k=new Qn;k.viewport=new jt;const G=new Qn;G.viewport=new jt;const P=[k,G],A=new Sx;let B=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let fe=D[Y];return fe===void 0&&(fe=new Ku,D[Y]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Y){let fe=D[Y];return fe===void 0&&(fe=new Ku,D[Y]=fe),fe.getGripSpace()},this.getHand=function(Y){let fe=D[Y];return fe===void 0&&(fe=new Ku,D[Y]=fe),fe.getHandSpace()};function Q(Y){const fe=b.indexOf(Y.inputSource);if(fe===-1)return;const pe=D[fe];pe!==void 0&&(pe.update(Y.inputSource,Y.frame,g||d),pe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function ue(){a.removeEventListener("select",Q),a.removeEventListener("selectstart",Q),a.removeEventListener("selectend",Q),a.removeEventListener("squeeze",Q),a.removeEventListener("squeezestart",Q),a.removeEventListener("squeezeend",Q),a.removeEventListener("end",ue),a.removeEventListener("inputsourceschange",te);for(let Y=0;Y<D.length;Y++){const fe=b[Y];fe!==null&&(b[Y]=null,D[Y].disconnect(fe))}B=null,oe=null,M.reset(),e.setRenderTarget(v),S=null,x=null,_=null,a=null,O=null,ye.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(H.width,H.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){l=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){u=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||d},this.setReferenceSpace=function(Y){g=Y},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return _},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(Y){if(a=Y,a!==null){if(v=e.getRenderTarget(),a.addEventListener("select",Q),a.addEventListener("selectstart",Q),a.addEventListener("selectend",Q),a.addEventListener("squeeze",Q),a.addEventListener("squeezestart",Q),a.addEventListener("squeezeend",Q),a.addEventListener("end",ue),a.addEventListener("inputsourceschange",te),y.xrCompatible!==!0&&await n.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(H),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,ge=null,Ae=null;y.depth&&(Ae=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,pe=y.stencil?Ks:Gs,ge=y.stencil?$s:Qr);const Ne={colorFormat:n.RGBA8,depthFormat:Ae,scaleFactor:l};_=new XRWebGLBinding(a,n),x=_.createProjectionLayer(Ne),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),O=new Jr(x.textureWidth,x.textureHeight,{format:ui,type:Wi,depthTexture:new kg(x.textureWidth,x.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}else{const pe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,n,pe),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),O=new Jr(S.framebufferWidth,S.framebufferHeight,{format:ui,type:Wi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}O.isXRRenderTarget=!0,this.setFoveation(h),g=null,d=await a.requestReferenceSpace(u),ye.setContext(a),ye.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function te(Y){for(let fe=0;fe<Y.removed.length;fe++){const pe=Y.removed[fe],ge=b.indexOf(pe);ge>=0&&(b[ge]=null,D[ge].disconnect(pe))}for(let fe=0;fe<Y.added.length;fe++){const pe=Y.added[fe];let ge=b.indexOf(pe);if(ge===-1){for(let Ne=0;Ne<D.length;Ne++)if(Ne>=b.length){b.push(pe),ge=Ne;break}else if(b[Ne]===null){b[Ne]=pe,ge=Ne;break}if(ge===-1)break}const Ae=D[ge];Ae&&Ae.connect(pe)}}const le=new se,re=new se;function I(Y,fe,pe){le.setFromMatrixPosition(fe.matrixWorld),re.setFromMatrixPosition(pe.matrixWorld);const ge=le.distanceTo(re),Ae=fe.projectionMatrix.elements,Ne=pe.projectionMatrix.elements,De=Ae[14]/(Ae[10]-1),lt=Ae[14]/(Ae[10]+1),pt=(Ae[9]+1)/Ae[5],it=(Ae[9]-1)/Ae[5],z=(Ae[8]-1)/Ae[0],un=(Ne[8]+1)/Ne[0],ft=De*z,ct=De*un,$e=ge/(-z+un),wt=$e*-z;if(fe.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(wt),Y.translateZ($e),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ae[10]===-1)Y.projectionMatrix.copy(fe.projectionMatrix),Y.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const je=De+$e,L=lt+$e,w=ft-wt,ne=ct+(ge-wt),he=pt*lt/L*je,_e=it*lt/L*je;Y.projectionMatrix.makePerspective(w,ne,he,_e,je,L),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ee(Y,fe){fe===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(fe.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(a===null)return;let fe=Y.near,pe=Y.far;M.texture!==null&&(M.depthNear>0&&(fe=M.depthNear),M.depthFar>0&&(pe=M.depthFar)),A.near=G.near=k.near=fe,A.far=G.far=k.far=pe,(B!==A.near||oe!==A.far)&&(a.updateRenderState({depthNear:A.near,depthFar:A.far}),B=A.near,oe=A.far),k.layers.mask=Y.layers.mask|2,G.layers.mask=Y.layers.mask|4,A.layers.mask=k.layers.mask|G.layers.mask;const ge=Y.parent,Ae=A.cameras;ee(A,ge);for(let Ne=0;Ne<Ae.length;Ne++)ee(Ae[Ne],ge);Ae.length===2?I(A,k,G):A.projectionMatrix.copy(k.projectionMatrix),$(Y,A,ge)};function $(Y,fe,pe){pe===null?Y.matrix.copy(fe.matrixWorld):(Y.matrix.copy(pe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(fe.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(fe.projectionMatrix),Y.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Kd*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&S===null))return h},this.setFoveation=function(Y){h=Y,x!==null&&(x.fixedFoveation=Y),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Y)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(A)};let N=null;function K(Y,fe){if(p=fe.getViewerPose(g||d),T=fe,p!==null){const pe=p.views;S!==null&&(e.setRenderTargetFramebuffer(O,S.framebuffer),e.setRenderTarget(O));let ge=!1;pe.length!==A.cameras.length&&(A.cameras.length=0,ge=!0);for(let De=0;De<pe.length;De++){const lt=pe[De];let pt=null;if(S!==null)pt=S.getViewport(lt);else{const z=_.getViewSubImage(x,lt);pt=z.viewport,De===0&&(e.setRenderTargetTextures(O,z.colorTexture,x.ignoreDepthValues?void 0:z.depthStencilTexture),e.setRenderTarget(O))}let it=P[De];it===void 0&&(it=new Qn,it.layers.enable(De),it.viewport=new jt,P[De]=it),it.matrix.fromArray(lt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(lt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(pt.x,pt.y,pt.width,pt.height),De===0&&(A.matrix.copy(it.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ge===!0&&A.cameras.push(it)}const Ae=a.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&_){const De=_.getDepthInformation(pe[0]);De&&De.isValid&&De.texture&&M.init(e,De,a.renderState)}}for(let pe=0;pe<D.length;pe++){const ge=b[pe],Ae=D[pe];ge!==null&&Ae!==void 0&&Ae.update(ge,fe,g||d)}N&&N(Y,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),T=null}const ye=new Hg;ye.setAnimationLoop(K),this.setAnimationLoop=function(Y){N=Y},this.dispose=function(){}}}const Gr=new Mi,tE=new Ot;function nE(s,e){function n(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,Dg(s)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function a(y,v,O,D,b){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(y,v):v.isMeshToonMaterial?(l(y,v),_(y,v)):v.isMeshPhongMaterial?(l(y,v),p(y,v)):v.isMeshStandardMaterial?(l(y,v),x(y,v),v.isMeshPhysicalMaterial&&S(y,v,b)):v.isMeshMatcapMaterial?(l(y,v),T(y,v)):v.isMeshDepthMaterial?l(y,v):v.isMeshDistanceMaterial?(l(y,v),M(y,v)):v.isMeshNormalMaterial?l(y,v):v.isLineBasicMaterial?(d(y,v),v.isLineDashedMaterial&&u(y,v)):v.isPointsMaterial?h(y,v,O,D):v.isSpriteMaterial?g(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,n(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Cn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,n(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Cn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,n(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,n(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const O=e.get(v),D=O.envMap,b=O.envMapRotation;D&&(y.envMap.value=D,Gr.copy(b),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),y.envMapRotation.value.setFromMatrix4(tE.makeRotationFromEuler(Gr)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,y.aoMapTransform))}function d(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform))}function u(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function h(y,v,O,D){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*O,y.scale.value=D*.5,v.map&&(y.map.value=v.map,n(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function g(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function _(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function S(y,v,O){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Cn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,v){v.matcap&&(y.matcap.value=v.matcap)}function M(y,v){const O=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function iE(s,e,n,r){let a={},l={},d=[];const u=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(O,D){const b=D.program;r.uniformBlockBinding(O,b)}function g(O,D){let b=a[O.id];b===void 0&&(T(O),b=p(O),a[O.id]=b,O.addEventListener("dispose",y));const H=D.program;r.updateUBOMapping(O,H);const F=e.render.frame;l[O.id]!==F&&(x(O),l[O.id]=F)}function p(O){const D=_();O.__bindingPointIndex=D;const b=s.createBuffer(),H=O.__size,F=O.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,H,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,b),b}function _(){for(let O=0;O<u;O++)if(d.indexOf(O)===-1)return d.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(O){const D=a[O.id],b=O.uniforms,H=O.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let F=0,k=b.length;F<k;F++){const G=Array.isArray(b[F])?b[F]:[b[F]];for(let P=0,A=G.length;P<A;P++){const B=G[P];if(S(B,F,P,H)===!0){const oe=B.__offset,Q=Array.isArray(B.value)?B.value:[B.value];let ue=0;for(let te=0;te<Q.length;te++){const le=Q[te],re=M(le);typeof le=="number"||typeof le=="boolean"?(B.__data[0]=le,s.bufferSubData(s.UNIFORM_BUFFER,oe+ue,B.__data)):le.isMatrix3?(B.__data[0]=le.elements[0],B.__data[1]=le.elements[1],B.__data[2]=le.elements[2],B.__data[3]=0,B.__data[4]=le.elements[3],B.__data[5]=le.elements[4],B.__data[6]=le.elements[5],B.__data[7]=0,B.__data[8]=le.elements[6],B.__data[9]=le.elements[7],B.__data[10]=le.elements[8],B.__data[11]=0):(le.toArray(B.__data,ue),ue+=re.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,oe,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(O,D,b,H){const F=O.value,k=D+"_"+b;if(H[k]===void 0)return typeof F=="number"||typeof F=="boolean"?H[k]=F:H[k]=F.clone(),!0;{const G=H[k];if(typeof F=="number"||typeof F=="boolean"){if(G!==F)return H[k]=F,!0}else if(G.equals(F)===!1)return G.copy(F),!0}return!1}function T(O){const D=O.uniforms;let b=0;const H=16;for(let k=0,G=D.length;k<G;k++){const P=Array.isArray(D[k])?D[k]:[D[k]];for(let A=0,B=P.length;A<B;A++){const oe=P[A],Q=Array.isArray(oe.value)?oe.value:[oe.value];for(let ue=0,te=Q.length;ue<te;ue++){const le=Q[ue],re=M(le),I=b%H,ee=I%re.boundary,$=I+ee;b+=ee,$!==0&&H-$<re.storage&&(b+=H-$),oe.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=b,b+=re.storage}}}const F=b%H;return F>0&&(b+=H-F),O.__size=b,O.__cache={},this}function M(O){const D={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(D.boundary=4,D.storage=4):O.isVector2?(D.boundary=8,D.storage=8):O.isVector3||O.isColor?(D.boundary=16,D.storage=12):O.isVector4?(D.boundary=16,D.storage=16):O.isMatrix3?(D.boundary=48,D.storage=48):O.isMatrix4?(D.boundary=64,D.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),D}function y(O){const D=O.target;D.removeEventListener("dispose",y);const b=d.indexOf(D.__bindingPointIndex);d.splice(b,1),s.deleteBuffer(a[D.id]),delete a[D.id],delete l[D.id]}function v(){for(const O in a)s.deleteBuffer(a[O]);d=[],a={},l={}}return{bind:h,update:g,dispose:v}}class rE{constructor(e={}){const{canvas:n=D_(),context:r=null,depth:a=!0,stencil:l=!1,alpha:d=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:g=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=d;const T=new Uint32Array(4),M=new Int32Array(4);let y=null,v=null;const O=[],D=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zn,this.toneMapping=Mr,this.toneMappingExposure=1;const b=this;let H=!1,F=0,k=0,G=null,P=-1,A=null;const B=new jt,oe=new jt;let Q=null;const ue=new Ct(0);let te=0,le=n.width,re=n.height,I=1,ee=null,$=null;const N=new jt(0,0,le,re),K=new jt(0,0,le,re);let ye=!1;const Y=new hf;let fe=!1,pe=!1;this.transmissionResolutionScale=1;const ge=new Ot,Ae=new Ot,Ne=new se,De=new jt,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function it(){return G===null?I:1}let z=r;function un(C,X){return n.getContext(C,X)}try{const C={alpha:!0,depth:a,stencil:l,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:g,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${sf}`),n.addEventListener("webglcontextlost",ve,!1),n.addEventListener("webglcontextrestored",Ie,!1),n.addEventListener("webglcontextcreationerror",Le,!1),z===null){const X="webgl2";if(z=un(X,C),z===null)throw un(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ft,ct,$e,wt,je,L,w,ne,he,_e,me,ze,Ce,ke,ht,we,He,Ze,tt,Ve,mt,st,bt,j;function Re(){ft=new pM(z),ft.init(),st=new K1(z,ft),ct=new lM(z,ft,e,st),$e=new Y1(z,ft),ct.reverseDepthBuffer&&x&&$e.buffers.depth.setReversed(!0),wt=new vM(z),je=new U1,L=new $1(z,ft,$e,je,ct,st,wt),w=new uM(b),ne=new hM(b),he=new wx(z),bt=new oM(z,he),_e=new mM(z,he,wt,bt),me=new xM(z,_e,he,wt),tt=new _M(z,ct,L),we=new cM(je),ze=new I1(b,w,ne,ft,ct,bt,we),Ce=new nE(b,je),ke=new O1,ht=new G1(ft),Ze=new sM(b,w,ne,$e,me,S,h),He=new X1(b,me,ct),j=new iE(z,wt,ct,$e),Ve=new aM(z,ft,wt),mt=new gM(z,ft,wt),wt.programs=ze.programs,b.capabilities=ct,b.extensions=ft,b.properties=je,b.renderLists=ke,b.shadowMap=He,b.state=$e,b.info=wt}Re();const de=new eE(b,z);this.xr=de,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const C=ft.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ft.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(C){C!==void 0&&(I=C,this.setSize(le,re,!1))},this.getSize=function(C){return C.set(le,re)},this.setSize=function(C,X,ae=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}le=C,re=X,n.width=Math.floor(C*I),n.height=Math.floor(X*I),ae===!0&&(n.style.width=C+"px",n.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(le*I,re*I).floor()},this.setDrawingBufferSize=function(C,X,ae){le=C,re=X,I=ae,n.width=Math.floor(C*ae),n.height=Math.floor(X*ae),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(B)},this.getViewport=function(C){return C.copy(N)},this.setViewport=function(C,X,ae,J){C.isVector4?N.set(C.x,C.y,C.z,C.w):N.set(C,X,ae,J),$e.viewport(B.copy(N).multiplyScalar(I).round())},this.getScissor=function(C){return C.copy(K)},this.setScissor=function(C,X,ae,J){C.isVector4?K.set(C.x,C.y,C.z,C.w):K.set(C,X,ae,J),$e.scissor(oe.copy(K).multiplyScalar(I).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(C){$e.setScissorTest(ye=C)},this.setOpaqueSort=function(C){ee=C},this.setTransparentSort=function(C){$=C},this.getClearColor=function(C){return C.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(C=!0,X=!0,ae=!0){let J=0;if(C){let q=!1;if(G!==null){const Ee=G.texture.format;q=Ee===df||Ee===uf||Ee===cf}if(q){const Ee=G.texture.type,be=Ee===Wi||Ee===Qr||Ee===Vo||Ee===$s||Ee===af||Ee===lf,Fe=Ze.getClearColor(),Ge=Ze.getClearAlpha(),nt=Fe.r,et=Fe.g,Xe=Fe.b;be?(T[0]=nt,T[1]=et,T[2]=Xe,T[3]=Ge,z.clearBufferuiv(z.COLOR,0,T)):(M[0]=nt,M[1]=et,M[2]=Xe,M[3]=Ge,z.clearBufferiv(z.COLOR,0,M))}else J|=z.COLOR_BUFFER_BIT}X&&(J|=z.DEPTH_BUFFER_BIT),ae&&(J|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ve,!1),n.removeEventListener("webglcontextrestored",Ie,!1),n.removeEventListener("webglcontextcreationerror",Le,!1),Ze.dispose(),ke.dispose(),ht.dispose(),je.dispose(),w.dispose(),ne.dispose(),me.dispose(),bt.dispose(),j.dispose(),ze.dispose(),de.dispose(),de.removeEventListener("sessionstart",es),de.removeEventListener("sessionend",ji),Ei.stop()};function ve(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const C=wt.autoReset,X=He.enabled,ae=He.autoUpdate,J=He.needsUpdate,q=He.type;Re(),wt.autoReset=C,He.enabled=X,He.autoUpdate=ae,He.needsUpdate=J,He.type=q}function Le(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ot(C){const X=C.target;X.removeEventListener("dispose",ot),It(X)}function It(C){$t(C),je.remove(C)}function $t(C){const X=je.get(C).programs;X!==void 0&&(X.forEach(function(ae){ze.releaseProgram(ae)}),C.isShaderMaterial&&ze.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,ae,J,q,Ee){X===null&&(X=lt);const be=q.isMesh&&q.matrixWorld.determinant()<0,Fe=Qo(C,X,ae,J,q);$e.setMaterial(J,be);let Ge=ae.index,nt=1;if(J.wireframe===!0){if(Ge=_e.getWireframeAttribute(ae),Ge===void 0)return;nt=2}const et=ae.drawRange,Xe=ae.attributes.position;let _t=et.start*nt,at=(et.start+et.count)*nt;Ee!==null&&(_t=Math.max(_t,Ee.start*nt),at=Math.min(at,(Ee.start+Ee.count)*nt)),Ge!==null?(_t=Math.max(_t,0),at=Math.min(at,Ge.count)):Xe!=null&&(_t=Math.max(_t,0),at=Math.min(at,Xe.count));const Vt=at-_t;if(Vt<0||Vt===1/0)return;bt.setup(q,J,Fe,ae,Ge);let kt,yt=Ve;if(Ge!==null&&(kt=he.get(Ge),yt=mt,yt.setIndex(kt)),q.isMesh)J.wireframe===!0?($e.setLineWidth(J.wireframeLinewidth*it()),yt.setMode(z.LINES)):yt.setMode(z.TRIANGLES);else if(q.isLine){let Ke=J.linewidth;Ke===void 0&&(Ke=1),$e.setLineWidth(Ke*it()),q.isLineSegments?yt.setMode(z.LINES):q.isLineLoop?yt.setMode(z.LINE_LOOP):yt.setMode(z.LINE_STRIP)}else q.isPoints?yt.setMode(z.POINTS):q.isSprite&&yt.setMode(z.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)yt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))yt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Ke=q._multiDrawStarts,Gt=q._multiDrawCounts,vt=q._multiDrawCount,pn=Ge?he.get(Ge).bytesPerElement:1,qi=je.get(J).currentProgram.getUniforms();for(let En=0;En<vt;En++)qi.setValue(z,"_gl_DrawID",En),yt.render(Ke[En]/pn,Gt[En])}else if(q.isInstancedMesh)yt.renderInstances(_t,Vt,q.count);else if(ae.isInstancedBufferGeometry){const Ke=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Gt=Math.min(ae.instanceCount,Ke);yt.renderInstances(_t,Vt,Gt)}else yt.render(_t,Vt)};function St(C,X,ae){C.transparent===!0&&C.side===li&&C.forceSinglePass===!1?(C.side=Cn,C.needsUpdate=!0,ts(C,X,ae),C.side=Er,C.needsUpdate=!0,ts(C,X,ae),C.side=li):ts(C,X,ae)}this.compile=function(C,X,ae=null){ae===null&&(ae=C),v=ht.get(ae),v.init(X),D.push(v),ae.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),C!==ae&&C.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),v.setupLights();const J=new Set;return C.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Ee=q.material;if(Ee)if(Array.isArray(Ee))for(let be=0;be<Ee.length;be++){const Fe=Ee[be];St(Fe,ae,q),J.add(Fe)}else St(Ee,ae,q),J.add(Ee)}),D.pop(),v=null,J},this.compileAsync=function(C,X,ae=null){const J=this.compile(C,X,ae);return new Promise(q=>{function Ee(){if(J.forEach(function(be){je.get(be).currentProgram.isReady()&&J.delete(be)}),J.size===0){q(C);return}setTimeout(Ee,10)}ft.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Pn=null;function Mn(C){Pn&&Pn(C)}function es(){Ei.stop()}function ji(){Ei.start()}const Ei=new Hg;Ei.setAnimationLoop(Mn),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(C){Pn=C,de.setAnimationLoop(C),C===null?Ei.stop():Ei.start()},de.addEventListener("sessionstart",es),de.addEventListener("sessionend",ji),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(X),X=de.getCamera()),C.isScene===!0&&C.onBeforeRender(b,C,X,G),v=ht.get(C,D.length),v.init(X),D.push(v),Ae.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Y.setFromProjectionMatrix(Ae),pe=this.localClippingEnabled,fe=we.init(this.clippingPlanes,pe),y=ke.get(C,O.length),y.init(),O.push(y),de.enabled===!0&&de.isPresenting===!0){const Ee=b.xr.getDepthSensingMesh();Ee!==null&&wi(Ee,X,-1/0,b.sortObjects)}wi(C,X,0,b.sortObjects),y.finish(),b.sortObjects===!0&&y.sort(ee,$),pt=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,pt&&Ze.addToRenderList(y,C),this.info.render.frame++,fe===!0&&we.beginShadows();const ae=v.state.shadowsArray;He.render(ae,C,X),fe===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=y.opaque,q=y.transmissive;if(v.setupLights(),X.isArrayCamera){const Ee=X.cameras;if(q.length>0)for(let be=0,Fe=Ee.length;be<Fe;be++){const Ge=Ee[be];Tr(J,q,C,Ge)}pt&&Ze.render(C);for(let be=0,Fe=Ee.length;be<Fe;be++){const Ge=Ee[be];wr(y,C,Ge,Ge.viewport)}}else q.length>0&&Tr(J,q,C,X),pt&&Ze.render(C),wr(y,C,X);G!==null&&k===0&&(L.updateMultisampleRenderTarget(G),L.updateRenderTargetMipmap(G)),C.isScene===!0&&C.onAfterRender(b,C,X),bt.resetDefaultState(),P=-1,A=null,D.pop(),D.length>0?(v=D[D.length-1],fe===!0&&we.setGlobalState(b.clippingPlanes,v.state.camera)):v=null,O.pop(),O.length>0?y=O[O.length-1]:y=null};function wi(C,X,ae,J){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)ae=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Y.intersectsSprite(C)){J&&De.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ae);const be=me.update(C),Fe=C.material;Fe.visible&&y.push(C,be,Fe,ae,De.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Y.intersectsObject(C))){const be=me.update(C),Fe=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),De.copy(C.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),De.copy(be.boundingSphere.center)),De.applyMatrix4(C.matrixWorld).applyMatrix4(Ae)),Array.isArray(Fe)){const Ge=be.groups;for(let nt=0,et=Ge.length;nt<et;nt++){const Xe=Ge[nt],_t=Fe[Xe.materialIndex];_t&&_t.visible&&y.push(C,be,_t,ae,De.z,Xe)}}else Fe.visible&&y.push(C,be,Fe,ae,De.z,null)}}const Ee=C.children;for(let be=0,Fe=Ee.length;be<Fe;be++)wi(Ee[be],X,ae,J)}function wr(C,X,ae,J){const q=C.opaque,Ee=C.transmissive,be=C.transparent;v.setupLightsView(ae),fe===!0&&we.setGlobalState(b.clippingPlanes,ae),J&&$e.viewport(B.copy(J)),q.length>0&&Xi(q,X,ae),Ee.length>0&&Xi(Ee,X,ae),be.length>0&&Xi(be,X,ae),$e.buffers.depth.setTest(!0),$e.buffers.depth.setMask(!0),$e.buffers.color.setMask(!0),$e.setPolygonOffset(!1)}function Tr(C,X,ae,J){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[J.id]===void 0&&(v.state.transmissionRenderTarget[J.id]=new Jr(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?Wo:Wi,minFilter:Zr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const Ee=v.state.transmissionRenderTarget[J.id],be=J.viewport||B;Ee.setSize(be.z*b.transmissionResolutionScale,be.w*b.transmissionResolutionScale);const Fe=b.getRenderTarget();b.setRenderTarget(Ee),b.getClearColor(ue),te=b.getClearAlpha(),te<1&&b.setClearColor(16777215,.5),b.clear(),pt&&Ze.render(ae);const Ge=b.toneMapping;b.toneMapping=Mr;const nt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),v.setupLightsView(J),fe===!0&&we.setGlobalState(b.clippingPlanes,J),Xi(C,ae,J),L.updateMultisampleRenderTarget(Ee),L.updateRenderTargetMipmap(Ee),ft.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Xe=0,_t=X.length;Xe<_t;Xe++){const at=X[Xe],Vt=at.object,kt=at.geometry,yt=at.material,Ke=at.group;if(yt.side===li&&Vt.layers.test(J.layers)){const Gt=yt.side;yt.side=Cn,yt.needsUpdate=!0,Ko(Vt,ae,J,kt,yt,Ke),yt.side=Gt,yt.needsUpdate=!0,et=!0}}et===!0&&(L.updateMultisampleRenderTarget(Ee),L.updateRenderTargetMipmap(Ee))}b.setRenderTarget(Fe),b.setClearColor(ue,te),nt!==void 0&&(J.viewport=nt),b.toneMapping=Ge}function Xi(C,X,ae){const J=X.isScene===!0?X.overrideMaterial:null;for(let q=0,Ee=C.length;q<Ee;q++){const be=C[q],Fe=be.object,Ge=be.geometry,nt=J===null?be.material:J,et=be.group;Fe.layers.test(ae.layers)&&Ko(Fe,X,ae,Ge,nt,et)}}function Ko(C,X,ae,J,q,Ee){C.onBeforeRender(b,X,ae,J,q,Ee),C.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),q.onBeforeRender(b,X,ae,J,C,Ee),q.transparent===!0&&q.side===li&&q.forceSinglePass===!1?(q.side=Cn,q.needsUpdate=!0,b.renderBufferDirect(ae,X,J,q,C,Ee),q.side=Er,q.needsUpdate=!0,b.renderBufferDirect(ae,X,J,q,C,Ee),q.side=li):b.renderBufferDirect(ae,X,J,q,C,Ee),C.onAfterRender(b,X,ae,J,q,Ee)}function ts(C,X,ae){X.isScene!==!0&&(X=lt);const J=je.get(C),q=v.state.lights,Ee=v.state.shadowsArray,be=q.state.version,Fe=ze.getParameters(C,q.state,Ee,X,ae),Ge=ze.getProgramCacheKey(Fe);let nt=J.programs;J.environment=C.isMeshStandardMaterial?X.environment:null,J.fog=X.fog,J.envMap=(C.isMeshStandardMaterial?ne:w).get(C.envMap||J.environment),J.envMapRotation=J.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,nt===void 0&&(C.addEventListener("dispose",ot),nt=new Map,J.programs=nt);let et=nt.get(Ge);if(et!==void 0){if(J.currentProgram===et&&J.lightsStateVersion===be)return pi(C,Fe),et}else Fe.uniforms=ze.getUniforms(C),C.onBeforeCompile(Fe,b),et=ze.acquireProgram(Fe,Ge),nt.set(Ge,et),J.uniforms=Fe.uniforms;const Xe=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Xe.clippingPlanes=we.uniform),pi(C,Fe),J.needsLights=Xl(C),J.lightsStateVersion=be,J.needsLights&&(Xe.ambientLightColor.value=q.state.ambient,Xe.lightProbe.value=q.state.probe,Xe.directionalLights.value=q.state.directional,Xe.directionalLightShadows.value=q.state.directionalShadow,Xe.spotLights.value=q.state.spot,Xe.spotLightShadows.value=q.state.spotShadow,Xe.rectAreaLights.value=q.state.rectArea,Xe.ltc_1.value=q.state.rectAreaLTC1,Xe.ltc_2.value=q.state.rectAreaLTC2,Xe.pointLights.value=q.state.point,Xe.pointLightShadows.value=q.state.pointShadow,Xe.hemisphereLights.value=q.state.hemi,Xe.directionalShadowMap.value=q.state.directionalShadowMap,Xe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Xe.spotShadowMap.value=q.state.spotShadowMap,Xe.spotLightMatrix.value=q.state.spotLightMatrix,Xe.spotLightMap.value=q.state.spotLightMap,Xe.pointShadowMap.value=q.state.pointShadowMap,Xe.pointShadowMatrix.value=q.state.pointShadowMatrix),J.currentProgram=et,J.uniformsList=null,et}function Zo(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=Ul.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function pi(C,X){const ae=je.get(C);ae.outputColorSpace=X.outputColorSpace,ae.batching=X.batching,ae.batchingColor=X.batchingColor,ae.instancing=X.instancing,ae.instancingColor=X.instancingColor,ae.instancingMorph=X.instancingMorph,ae.skinning=X.skinning,ae.morphTargets=X.morphTargets,ae.morphNormals=X.morphNormals,ae.morphColors=X.morphColors,ae.morphTargetsCount=X.morphTargetsCount,ae.numClippingPlanes=X.numClippingPlanes,ae.numIntersection=X.numClipIntersection,ae.vertexAlphas=X.vertexAlphas,ae.vertexTangents=X.vertexTangents,ae.toneMapping=X.toneMapping}function Qo(C,X,ae,J,q){X.isScene!==!0&&(X=lt),L.resetTextureUnits();const Ee=X.fog,be=J.isMeshStandardMaterial?X.environment:null,Fe=G===null?b.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Zs,Ge=(J.isMeshStandardMaterial?ne:w).get(J.envMap||be),nt=J.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,et=!!ae.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Xe=!!ae.morphAttributes.position,_t=!!ae.morphAttributes.normal,at=!!ae.morphAttributes.color;let Vt=Mr;J.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Vt=b.toneMapping);const kt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,yt=kt!==void 0?kt.length:0,Ke=je.get(J),Gt=v.state.lights;if(fe===!0&&(pe===!0||C!==A)){const dn=C===A&&J.id===P;we.setState(J,C,dn)}let vt=!1;J.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Gt.state.version||Ke.outputColorSpace!==Fe||q.isBatchedMesh&&Ke.batching===!1||!q.isBatchedMesh&&Ke.batching===!0||q.isBatchedMesh&&Ke.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ke.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ke.instancing===!1||!q.isInstancedMesh&&Ke.instancing===!0||q.isSkinnedMesh&&Ke.skinning===!1||!q.isSkinnedMesh&&Ke.skinning===!0||q.isInstancedMesh&&Ke.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ke.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ke.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ke.instancingMorph===!1&&q.morphTexture!==null||Ke.envMap!==Ge||J.fog===!0&&Ke.fog!==Ee||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==we.numPlanes||Ke.numIntersection!==we.numIntersection)||Ke.vertexAlphas!==nt||Ke.vertexTangents!==et||Ke.morphTargets!==Xe||Ke.morphNormals!==_t||Ke.morphColors!==at||Ke.toneMapping!==Vt||Ke.morphTargetsCount!==yt)&&(vt=!0):(vt=!0,Ke.__version=J.version);let pn=Ke.currentProgram;vt===!0&&(pn=ts(J,X,q));let qi=!1,En=!1,Ti=!1;const Lt=pn.getUniforms(),mn=Ke.uniforms;if($e.useProgram(pn.program)&&(qi=!0,En=!0,Ti=!0),J.id!==P&&(P=J.id,En=!0),qi||A!==C){$e.buffers.depth.getReversed()?(ge.copy(C.projectionMatrix),U_(ge),F_(ge),Lt.setValue(z,"projectionMatrix",ge)):Lt.setValue(z,"projectionMatrix",C.projectionMatrix),Lt.setValue(z,"viewMatrix",C.matrixWorldInverse);const nn=Lt.map.cameraPosition;nn!==void 0&&nn.setValue(z,Ne.setFromMatrixPosition(C.matrixWorld)),ct.logarithmicDepthBuffer&&Lt.setValue(z,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Lt.setValue(z,"isOrthographic",C.isOrthographicCamera===!0),A!==C&&(A=C,En=!0,Ti=!0)}if(q.isSkinnedMesh){Lt.setOptional(z,q,"bindMatrix"),Lt.setOptional(z,q,"bindMatrixInverse");const dn=q.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Lt.setValue(z,"boneTexture",dn.boneTexture,L))}q.isBatchedMesh&&(Lt.setOptional(z,q,"batchingTexture"),Lt.setValue(z,"batchingTexture",q._matricesTexture,L),Lt.setOptional(z,q,"batchingIdTexture"),Lt.setValue(z,"batchingIdTexture",q._indirectTexture,L),Lt.setOptional(z,q,"batchingColorTexture"),q._colorsTexture!==null&&Lt.setValue(z,"batchingColorTexture",q._colorsTexture,L));const tn=ae.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&tt.update(q,ae,pn),(En||Ke.receiveShadow!==q.receiveShadow)&&(Ke.receiveShadow=q.receiveShadow,Lt.setValue(z,"receiveShadow",q.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(mn.envMap.value=Ge,mn.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&X.environment!==null&&(mn.envMapIntensity.value=X.environmentIntensity),En&&(Lt.setValue(z,"toneMappingExposure",b.toneMappingExposure),Ke.needsLights&&Jo(mn,Ti),Ee&&J.fog===!0&&Ce.refreshFogUniforms(mn,Ee),Ce.refreshMaterialUniforms(mn,J,I,re,v.state.transmissionRenderTarget[C.id]),Ul.upload(z,Zo(Ke),mn,L)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ul.upload(z,Zo(Ke),mn,L),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Lt.setValue(z,"center",q.center),Lt.setValue(z,"modelViewMatrix",q.modelViewMatrix),Lt.setValue(z,"normalMatrix",q.normalMatrix),Lt.setValue(z,"modelMatrix",q.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const dn=J.uniformsGroups;for(let nn=0,Mt=dn.length;nn<Mt;nn++){const mi=dn[nn];j.update(mi,pn),j.bind(mi,pn)}}return pn}function Jo(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function Xl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(C,X,ae){je.get(C.texture).__webglTexture=X,je.get(C.depthTexture).__webglTexture=ae;const J=je.get(C);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=ae===void 0,J.__autoAllocateDepthBuffer||ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,X){const ae=je.get(C);ae.__webglFramebuffer=X,ae.__useDefaultFramebuffer=X===void 0};const ea=z.createFramebuffer();this.setRenderTarget=function(C,X=0,ae=0){G=C,F=X,k=ae;let J=!0,q=null,Ee=!1,be=!1;if(C){const Ge=je.get(C);if(Ge.__useDefaultFramebuffer!==void 0)$e.bindFramebuffer(z.FRAMEBUFFER,null),J=!1;else if(Ge.__webglFramebuffer===void 0)L.setupRenderTarget(C);else if(Ge.__hasExternalTextures)L.rebindTextures(C,je.get(C.texture).__webglTexture,je.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Xe=C.depthTexture;if(Ge.__boundDepthTexture!==Xe){if(Xe!==null&&je.has(Xe)&&(C.width!==Xe.image.width||C.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(C)}}const nt=C.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(be=!0);const et=je.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(et[X])?q=et[X][ae]:q=et[X],Ee=!0):C.samples>0&&L.useMultisampledRTT(C)===!1?q=je.get(C).__webglMultisampledFramebuffer:Array.isArray(et)?q=et[ae]:q=et,B.copy(C.viewport),oe.copy(C.scissor),Q=C.scissorTest}else B.copy(N).multiplyScalar(I).floor(),oe.copy(K).multiplyScalar(I).floor(),Q=ye;if(ae!==0&&(q=ea),$e.bindFramebuffer(z.FRAMEBUFFER,q)&&J&&$e.drawBuffers(C,q),$e.viewport(B),$e.scissor(oe),$e.setScissorTest(Q),Ee){const Ge=je.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ge.__webglTexture,ae)}else if(be){const Ge=je.get(C.texture),nt=X;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ge.__webglTexture,ae,nt)}else if(C!==null&&ae!==0){const Ge=je.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ge.__webglTexture,ae)}P=-1},this.readRenderTargetPixels=function(C,X,ae,J,q,Ee,be){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=je.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&be!==void 0&&(Fe=Fe[be]),Fe){$e.bindFramebuffer(z.FRAMEBUFFER,Fe);try{const Ge=C.texture,nt=Ge.format,et=Ge.type;if(!ct.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-J&&ae>=0&&ae<=C.height-q&&z.readPixels(X,ae,J,q,st.convert(nt),st.convert(et),Ee)}finally{const Ge=G!==null?je.get(G).__webglFramebuffer:null;$e.bindFramebuffer(z.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(C,X,ae,J,q,Ee,be){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=je.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&be!==void 0&&(Fe=Fe[be]),Fe){const Ge=C.texture,nt=Ge.format,et=Ge.type;if(!ct.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=C.width-J&&ae>=0&&ae<=C.height-q){$e.bindFramebuffer(z.FRAMEBUFFER,Fe);const Xe=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Xe),z.bufferData(z.PIXEL_PACK_BUFFER,Ee.byteLength,z.STREAM_READ),z.readPixels(X,ae,J,q,st.convert(nt),st.convert(et),0);const _t=G!==null?je.get(G).__webglFramebuffer:null;$e.bindFramebuffer(z.FRAMEBUFFER,_t);const at=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await I_(z,at,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Xe),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Ee),z.deleteBuffer(Xe),z.deleteSync(at),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,X=null,ae=0){C.isTexture!==!0&&(ks("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,C=arguments[1]);const J=Math.pow(2,-ae),q=Math.floor(C.image.width*J),Ee=Math.floor(C.image.height*J),be=X!==null?X.x:0,Fe=X!==null?X.y:0;L.setTexture2D(C,0),z.copyTexSubImage2D(z.TEXTURE_2D,ae,0,0,be,Fe,q,Ee),$e.unbindTexture()};const ta=z.createFramebuffer(),na=z.createFramebuffer();this.copyTextureToTexture=function(C,X,ae=null,J=null,q=0,Ee=null){C.isTexture!==!0&&(ks("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,C=arguments[1],X=arguments[2],Ee=arguments[3]||0,ae=null),Ee===null&&(q!==0?(ks("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=q,q=0):Ee=0);let be,Fe,Ge,nt,et,Xe,_t,at,Vt;const kt=C.isCompressedTexture?C.mipmaps[Ee]:C.image;if(ae!==null)be=ae.max.x-ae.min.x,Fe=ae.max.y-ae.min.y,Ge=ae.isBox3?ae.max.z-ae.min.z:1,nt=ae.min.x,et=ae.min.y,Xe=ae.isBox3?ae.min.z:0;else{const tn=Math.pow(2,-q);be=Math.floor(kt.width*tn),Fe=Math.floor(kt.height*tn),C.isDataArrayTexture?Ge=kt.depth:C.isData3DTexture?Ge=Math.floor(kt.depth*tn):Ge=1,nt=0,et=0,Xe=0}J!==null?(_t=J.x,at=J.y,Vt=J.z):(_t=0,at=0,Vt=0);const yt=st.convert(X.format),Ke=st.convert(X.type);let Gt;X.isData3DTexture?(L.setTexture3D(X,0),Gt=z.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(L.setTexture2DArray(X,0),Gt=z.TEXTURE_2D_ARRAY):(L.setTexture2D(X,0),Gt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,X.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,X.unpackAlignment);const vt=z.getParameter(z.UNPACK_ROW_LENGTH),pn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),qi=z.getParameter(z.UNPACK_SKIP_PIXELS),En=z.getParameter(z.UNPACK_SKIP_ROWS),Ti=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,kt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,kt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,nt),z.pixelStorei(z.UNPACK_SKIP_ROWS,et),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Xe);const Lt=C.isDataArrayTexture||C.isData3DTexture,mn=X.isDataArrayTexture||X.isData3DTexture;if(C.isDepthTexture){const tn=je.get(C),dn=je.get(X),nn=je.get(tn.__renderTarget),Mt=je.get(dn.__renderTarget);$e.bindFramebuffer(z.READ_FRAMEBUFFER,nn.__webglFramebuffer),$e.bindFramebuffer(z.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let mi=0;mi<Ge;mi++)Lt&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,je.get(C).__webglTexture,q,Xe+mi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,je.get(X).__webglTexture,Ee,Vt+mi)),z.blitFramebuffer(nt,et,be,Fe,_t,at,be,Fe,z.DEPTH_BUFFER_BIT,z.NEAREST);$e.bindFramebuffer(z.READ_FRAMEBUFFER,null),$e.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(q!==0||C.isRenderTargetTexture||je.has(C)){const tn=je.get(C),dn=je.get(X);$e.bindFramebuffer(z.READ_FRAMEBUFFER,ta),$e.bindFramebuffer(z.DRAW_FRAMEBUFFER,na);for(let nn=0;nn<Ge;nn++)Lt?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,tn.__webglTexture,q,Xe+nn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,tn.__webglTexture,q),mn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,dn.__webglTexture,Ee,Vt+nn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,dn.__webglTexture,Ee),q!==0?z.blitFramebuffer(nt,et,be,Fe,_t,at,be,Fe,z.COLOR_BUFFER_BIT,z.NEAREST):mn?z.copyTexSubImage3D(Gt,Ee,_t,at,Vt+nn,nt,et,be,Fe):z.copyTexSubImage2D(Gt,Ee,_t,at,nt,et,be,Fe);$e.bindFramebuffer(z.READ_FRAMEBUFFER,null),$e.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else mn?C.isDataTexture||C.isData3DTexture?z.texSubImage3D(Gt,Ee,_t,at,Vt,be,Fe,Ge,yt,Ke,kt.data):X.isCompressedArrayTexture?z.compressedTexSubImage3D(Gt,Ee,_t,at,Vt,be,Fe,Ge,yt,kt.data):z.texSubImage3D(Gt,Ee,_t,at,Vt,be,Fe,Ge,yt,Ke,kt):C.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Ee,_t,at,be,Fe,yt,Ke,kt.data):C.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Ee,_t,at,kt.width,kt.height,yt,kt.data):z.texSubImage2D(z.TEXTURE_2D,Ee,_t,at,be,Fe,yt,Ke,kt);z.pixelStorei(z.UNPACK_ROW_LENGTH,vt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,pn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,qi),z.pixelStorei(z.UNPACK_SKIP_ROWS,En),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ti),Ee===0&&X.generateMipmaps&&z.generateMipmap(Gt),$e.unbindTexture()},this.copyTextureToTexture3D=function(C,X,ae=null,J=null,q=0){return C.isTexture!==!0&&(ks("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ae=arguments[0]||null,J=arguments[1]||null,C=arguments[2],X=arguments[3],q=arguments[4]||0),ks('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,X,ae,J,q)},this.initRenderTarget=function(C){je.get(C).__webglFramebuffer===void 0&&L.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),$e.unbindTexture()},this.resetState=function(){F=0,k=0,G=null,$e.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=At._getDrawingBufferColorSpace(e),n.unpackColorSpace=At._getUnpackColorSpace()}}const sE=({routeData:s,phase:e,drawProgress:n,onCursorMove:r,onCameraChange:a,externalControlRef:l})=>{const d=Ue.useRef(null),u=Ue.useRef(null),h=Ue.useRef(null),g=Ue.useRef(null),p=Ue.useRef(null),_=Ue.useRef(null),x=Ue.useRef(null),S=Ue.useRef(null),T=Ue.useRef(null),M=Ue.useRef(null),y=Ue.useRef(null),v=Ue.useRef(!1),O=Ue.useRef({x:0,y:0}),D=Ue.useRef(3.2),b=Ue.useRef(3.2),H=Ue.useRef({x:.2,y:0}),F=Ue.useRef({x:.2,y:0}),k=Ue.useRef(!0),G=Ue.useRef({active:!1,startX:0,startY:0,startDist:3.2,targetX:0,targetY:0,targetDist:3.2,startTime:0,duration:1500}),P=Ue.useCallback((I,ee,$=1)=>{const N=(90-I)*(Math.PI/180),K=(ee+180)*(Math.PI/180),ye=-($*Math.sin(N)*Math.cos(K)),Y=$*Math.sin(N)*Math.sin(K),fe=$*Math.cos(N);return new se(ye,fe,Y)},[]);Ue.useEffect(()=>{if(!d.current)return;const I=d.current,ee=I.clientWidth,$=I.clientHeight,N=new ax;u.current=N,N.background=new Ct("#030508");const K=new Qn(45,ee/$,.05,1e3);K.position.set(0,0,D.current),h.current=K;const ye=new rE({antialias:!0,alpha:!1,powerPreference:"high-performance"});ye.setSize(ee,$),ye.setPixelRatio(Math.min(window.devicePixelRatio,2)),ye.toneMapping=pg,ye.toneMappingExposure=1,I.appendChild(ye.domElement),g.current=ye;const Y=new yx(16777215,.55);N.add(Y);const fe=new Pm(16777215,1.5);fe.position.set(5,3,5),N.add(fe);const pe=new Pm(16777215,.35);pe.position.set(-5,-2,-3),N.add(pe);const ge=new zs;N.add(ge),p.current=ge,new vx().load("/textures/earth_atmos_2048.jpg",w=>{w.anisotropy=8;const ne=new hi({uniforms:{earthTexture:{value:w},sunDirection:{value:new se(5,3,5).normalize()}},vertexShader:`
          varying vec2 vUv;
          varying vec3 vNormal;
          varying vec3 vPosition;
          void main() {
            vUv = uv;
            vNormal = normalize(normalMatrix * normal);
            vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          uniform sampler2D earthTexture;
          uniform vec3 sunDirection;
          varying vec2 vUv;
          varying vec3 vNormal;
          varying vec3 vPosition;

          void main() {
            vec4 texColor = texture2D(earthTexture, vUv);

            // True photometric grayscale conversion
            float gray = dot(texColor.rgb, vec3(0.299, 0.587, 0.114));

            // High-contrast stark black & white curve (deep ink blacks, brilliant crisp whites)
            float contrast = smoothstep(0.12, 0.72, gray);
            contrast = pow(contrast, 1.15) * 1.35;
            contrast = clamp(contrast, 0.0, 1.0);

            vec3 monoColor = vec3(contrast);

            // Diffuse lighting
            vec3 viewDir = normalize(-vPosition);
            vec3 lightDir = normalize(sunDirection);
            float NdotL = max(dot(vNormal, lightDir), 0.0);
            float diffuse = 0.22 + 0.78 * NdotL;

            // Pure silver/monochrome atmospheric Fresnel rim
            float fresnel = pow(1.0 - max(dot(vNormal, viewDir), 0.0), 3.0);
            vec3 rim = vec3(0.9, 0.9, 0.9) * fresnel * 0.4;

            gl_FragColor = vec4(monoColor * diffuse + rim, 1.0);
          }
        `}),he=new ln(new Yr(1,64,64),ne);ge.add(he);const _e=new Yr(1.0005,36,18),me=new qr({color:16777215,wireframe:!0,transparent:!0,opacity:.05}),ze=new ln(_e,me);ge.add(ze)});const Ne=new Yr(1.025,64,64),De=new hi({vertexShader:`
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.65 - dot(vNormal, vec3(0, 0, 1.0)), 2.8);
          gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0) * intensity * 0.45;
        }
      `,blending:ud,side:Cn,transparent:!0}),lt=new ln(Ne,De);N.add(lt),y.current=lt;const pt=new bn,it=1200,z=new Float32Array(it*3);for(let w=0;w<it*3;w+=3)z[w]=(Math.random()-.5)*80,z[w+1]=(Math.random()-.5)*80,z[w+2]=(Math.random()-.5)*80;pt.setAttribute("position",new fi(z,3));const un=new Og({color:16777215,size:.18,transparent:!0,opacity:.4}),ft=new dx(pt,un);N.add(ft);let ct,$e=performance.now();const wt=w=>{ct=requestAnimationFrame(wt);const ne=(w-$e)/1e3;if($e=w,G.current.active){const he=G.current,_e=w-he.startTime,me=Math.min(1,_e/he.duration),ze=1-Math.pow(1-me,3);F.current.x=he.startX+(he.targetX-he.startX)*ze,F.current.y=he.startY+(he.targetY-he.startY)*ze,D.current=he.startDist+(he.targetDist-he.startDist)*ze,me>=1&&(he.active=!1)}else F.current.x+=(H.current.x-F.current.x)*.08,F.current.y+=(H.current.y-F.current.y)*.08,D.current+=(b.current-D.current)*.08,k.current&&!v.current&&(H.current.y+=.035*ne);if(p.current&&(p.current.rotation.x=F.current.x,p.current.rotation.y=F.current.y),h.current&&(h.current.position.z=D.current),a){const he=(-F.current.y*(180/Math.PI)%360+360)%360,_e=Math.round(F.current.x*(180/Math.PI)),me=(D.current-1)*6378.137;a({heading:Math.round(he),tilt:_e,cameraAltKm:Math.round(me)})}ye.render(N,K)};wt(performance.now());const je=w=>{w.target instanceof HTMLInputElement||w.target instanceof HTMLTextAreaElement||(w.key==="+"||w.key==="="||w.key==="NumpadAdd"?b.current=Math.max(1.06,b.current-.35):w.key==="-"||w.key==="_"||w.key==="NumpadSubtract"?b.current=Math.min(6,b.current+.35):(w.key==="0"||w.key.toLowerCase()==="r")&&(H.current={x:.2,y:0},b.current=3.2,k.current=!0))};window.addEventListener("keydown",je);const L=()=>{if(!I||!ye||!K)return;const w=I.clientWidth,ne=I.clientHeight;K.aspect=w/ne,K.updateProjectionMatrix(),ye.setSize(w,ne)};return window.addEventListener("resize",L),()=>{window.removeEventListener("keydown",je),window.removeEventListener("resize",L),cancelAnimationFrame(ct),ye.domElement.parentElement&&ye.domElement.parentElement.removeChild(ye.domElement),ye.dispose()}},[]);const A=I=>{if(!d.current||!h.current||!p.current)return;const ee=d.current.getBoundingClientRect(),$=(I.clientX-ee.left)/ee.width*2-1,N=-((I.clientY-ee.top)/ee.height)*2+1,K=new Mx;K.setFromCamera(new Rt($,N),h.current);const ye=K.intersectObjects(p.current.children,!0);if(ye.length>0){const Y=ye[0].point.clone();Y.applyEuler(new Mi(-F.current.x,-F.current.y,0,"YXZ")),Y.normalize();const fe=Math.asin(Math.max(-1,Math.min(1,Y.y)))*(180/Math.PI);let ge=(-Math.atan2(Y.z,Y.x)*(180/Math.PI)-90+180)%360-180;ge<-180&&(ge+=360),r&&r({lat:fe,lng:ge})}},B=I=>{v.current=!0,k.current=!1,O.current={x:I.clientX,y:I.clientY}},oe=()=>{v.current=!1},Q=I=>{if(!v.current)return;const ee=I.clientX-O.current.x,$=I.clientY-O.current.y;H.current.y+=ee*.005,H.current.x+=$*.005,H.current.x=Math.max(-1.4,Math.min(1.4,H.current.x)),O.current={x:I.clientX,y:I.clientY}},ue=I=>{b.current=Math.max(1.06,Math.min(6,b.current+I.deltaY*.002))},te=()=>{b.current=Math.max(1.06,b.current-.45)};Ue.useEffect(()=>{l&&(l.current={zoomIn:()=>{b.current=Math.max(1.06,b.current-.35)},zoomOut:()=>{b.current=Math.min(6,b.current+.35)},resetNorth:()=>{H.current.y=0},resetView:()=>{H.current={x:.2,y:0},b.current=3.2,k.current=!0}})},[l]);const le=(I,ee,$)=>{const N=new zs,K=P(I,ee,1.002);N.position.copy(K),N.quaternion.setFromUnitVectors(new se(0,1,0),K.clone().normalize());const ye=new pf(.004,.004,.05,8);ye.translate(0,.025,0);const Y=new qr({color:16777215}),fe=new ln(ye,Y);N.add(fe);const pe=new Yr(.018,16,16);pe.translate(0,.055,0);const ge=new qr({color:$}),Ae=new ln(pe,ge);N.add(Ae);const Ne=new mf(.015,.024,24);Ne.rotateX(-Math.PI/2);const De=new qr({color:$,side:li,transparent:!0,opacity:.75}),lt=new ln(Ne,De);return N.add(lt),N},re=(I,ee=.007)=>{const $=I.length;if($<2)return new ln;const N=[],K=[],ye=[];for(let pe=0;pe<$;pe++){const ge=I[pe],Ae=ge.clone().normalize();let Ne;pe===0?Ne=I[1].clone().sub(ge).normalize():pe===$-1?Ne=ge.clone().sub(I[pe-1]).normalize():Ne=I[pe+1].clone().sub(I[pe-1]).normalize();const De=new se().crossVectors(Ae,Ne).normalize(),lt=ge.clone().sub(De.clone().multiplyScalar(ee)),pt=ge.clone().add(De.clone().multiplyScalar(ee));N.push(lt.x,lt.y,lt.z),N.push(pt.x,pt.y,pt.z);const it=pe/($-1);if(K.push(0,it),K.push(1,it),pe<$-1){const z=pe*2;ye.push(z,z+1,z+2),ye.push(z+1,z+3,z+2)}}const Y=new bn;Y.setAttribute("position",new Qt(N,3)),Y.setAttribute("uv",new Qt(K,2)),Y.setIndex(ye);const fe=new hi({side:li,transparent:!0,depthWrite:!1,vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec2 vUv;
        void main() {
          float distFromCenter = abs(vUv.x - 0.5) * 2.0;
          float core = 1.0 - smoothstep(0.0, 0.4, distFromCenter);
          float aura = 1.0 - smoothstep(0.05, 1.0, distFromCenter);

          vec3 coreColor = vec3(1.0, 1.0, 1.0);
          vec3 auraColor = vec3(0.0, 0.88, 1.0);

          vec3 color = mix(auraColor, coreColor, core);
          float alpha = clamp(aura * 0.95 + core * 0.5, 0.0, 1.0);

          gl_FragColor = vec4(color, alpha);
        }
      `});return new ln(Y,fe)};return Ue.useEffect(()=>{if(!p.current)return;const I=p.current;if(_.current&&(I.remove(_.current),_.current=null),x.current&&(I.remove(x.current),x.current=null),S.current&&(I.remove(S.current),S.current=null),T.current&&(I.remove(T.current),T.current=null),M.current&&(I.remove(M.current),M.current=null),!s)return;const{from:ee,to:$,coordinates:N}=s,K=le(ee.coords.lat,ee.coords.lng,1096065);I.add(K),T.current=K;const ye=le($.coords.lat,$.coords.lng,16007006);I.add(ye),M.current=ye;const Y=N.length,fe=Math.max(2,Math.floor(Y*Math.min(1,Math.max(0,n)))),pe=[];for(let lt=0;lt<fe;lt++){const pt=N[lt];pe.push(P(pt.lat,pt.lng,1.004))}const ge=re(pe,.007);I.add(ge),_.current=ge;const Ae=new bn().setFromPoints(pe),Ne=new Fg({color:16777215,transparent:!0,opacity:.9}),De=new ux(Ae,Ne);if(I.add(De),x.current=De,fe>1&&fe<Y){const lt=pe[pe.length-1],pt=new Yr(.016,16,16),it=new qr({color:16777215}),z=new ln(pt,it);z.position.copy(lt),I.add(z),S.current=z}},[s,n,P]),Ue.useEffect(()=>{if(s)if(e==="local_sector_2d"){const I=s.from.coords.lat,ee=s.from.coords.lng,$=I*Math.PI/180,N=-((ee+90)*Math.PI)/180;H.current={x:Math.max(-1.3,Math.min(1.3,$)),y:N},F.current={...H.current},D.current=1.16,b.current=1.16,k.current=!1}else e==="zoom_out_to_globe"?G.current={active:!0,startX:F.current.x,startY:F.current.y,startDist:D.current,targetX:.25,targetY:F.current.y+.35,targetDist:3.2,startTime:performance.now(),duration:1400}:e==="settled"&&(G.current={active:!0,startX:F.current.x,startY:F.current.y,startDist:D.current,targetX:.25,targetY:H.current.y+.3,targetDist:3.4,startTime:performance.now(),duration:1500})},[e,s]),R.jsx("div",{ref:d,onPointerDown:B,onPointerMove:I=>{Q(I),A(I)},onPointerUp:oe,onWheel:ue,onDoubleClick:te,className:"absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing overflow-hidden select-none"})},oE=({routeData:s,drawProgress:e,onCursorMove:n})=>{const r=Ue.useRef(null),a=Ue.useRef(null);Ue.useEffect(()=>{const u=new Image;u.src="/textures/earth_atmos_2048.jpg",u.onload=()=>{a.current=u,l()}},[]);const l=()=>{const u=r.current;if(!u)return;const h=u.getContext("2d");if(!h)return;const g=u.width,p=u.height;h.fillStyle="#05080e",h.fillRect(0,0,g,p),a.current&&(h.save(),h.filter="grayscale(100%) brightness(0.6) contrast(1.2)",h.drawImage(a.current,0,0,g,p),h.restore(),h.fillStyle="rgba(14, 165, 233, 0.05)",h.fillRect(0,0,g,p)),h.strokeStyle="rgba(255, 255, 255, 0.08)",h.lineWidth=.5;for(let M=-180;M<=180;M+=30){const y=(M+180)/360*g;h.beginPath(),h.moveTo(y,0),h.lineTo(y,p),h.stroke()}for(let M=-90;M<=90;M+=30){const y=(90-M)/180*p;h.beginPath(),h.moveTo(0,y),h.lineTo(g,y),h.stroke()}if(h.strokeStyle="rgba(56, 189, 248, 0.2)",h.lineWidth=1,h.beginPath(),h.moveTo(0,p/2),h.lineTo(g,p/2),h.stroke(),h.beginPath(),h.moveTo(g/2,0),h.lineTo(g/2,p),h.stroke(),!s)return;const _=s.coordinates;if(_.length<2)return;const x=Math.floor(_.length*Math.min(1,Math.max(0,e)));if(x<2)return;const S=M=>({x:(M.lng+180)/360*g,y:(90-M.lat)/180*p});h.save(),h.strokeStyle="#38bdf8",h.lineWidth=3,h.lineCap="round",h.lineJoin="round",h.shadowColor="#0ea5e9",h.shadowBlur=12,h.beginPath();for(let M=0;M<x;M++){const y=S(_[M]);if(M===0)h.moveTo(y.x,y.y);else{const v=_[M-1],O=_[M];Math.abs(O.lng-v.lng)>180?(h.stroke(),h.beginPath(),h.moveTo(y.x,y.y)):h.lineTo(y.x,y.y)}}if(h.stroke(),h.restore(),x>0&&x<_.length){const M=S(_[x-1]);h.save(),h.fillStyle="#ffffff",h.shadowColor="#38bdf8",h.shadowBlur=16,h.beginPath(),h.arc(M.x,M.y,4.5,0,Math.PI*2),h.fill(),h.restore()}const T=S(_[0]);if(h.save(),h.fillStyle="#10b981",h.shadowColor="#10b981",h.shadowBlur=10,h.beginPath(),h.arc(T.x,T.y,6,0,Math.PI*2),h.fill(),h.fillStyle="#ffffff",h.beginPath(),h.arc(T.x,T.y,2.5,0,Math.PI*2),h.fill(),h.restore(),e>=.95||s){const M=S(_[_.length-1]);h.save(),h.fillStyle="#f43f5e",h.shadowColor="#f43f5e",h.shadowBlur=10,h.beginPath(),h.arc(M.x,M.y,6,0,Math.PI*2),h.fill(),h.fillStyle="#ffffff",h.beginPath(),h.arc(M.x,M.y,2.5,0,Math.PI*2),h.fill(),h.restore()}};Ue.useEffect(()=>{const u=()=>{var g,p;const h=r.current;h&&(h.width=((g=h.parentElement)==null?void 0:g.clientWidth)||window.innerWidth,h.height=((p=h.parentElement)==null?void 0:p.clientHeight)||window.innerHeight,l())};return u(),window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)},[s,e]),Ue.useEffect(()=>{l()},[s,e]);const d=u=>{if(!n||!r.current)return;const h=r.current.getBoundingClientRect(),g=u.clientX-h.left,p=u.clientY-h.top,_=g/h.width*360-180,x=90-p/h.height*180;n({lat:x,lng:_})};return R.jsxs("div",{className:"absolute inset-0 w-full h-full bg-space-950 overflow-hidden",children:[R.jsx("canvas",{ref:r,onMouseMove:d,className:"w-full h-full cursor-crosshair"}),R.jsx("div",{className:"absolute top-20 right-4 glass-panel px-3 py-1.5 rounded-xl text-[11px] font-mono text-cyan-300 pointer-events-none",children:"Projection: Equirectangular 2D"})]})};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aE=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Xg=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var lE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cE=Ue.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:l,iconNode:d,...u},h)=>Ue.createElement("svg",{ref:h,...lE,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:Xg("lucide",a),...u},[...d.map(([g,p])=>Ue.createElement(g,p)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=(s,e)=>{const n=Ue.forwardRef(({className:r,...a},l)=>Ue.createElement(cE,{ref:l,iconNode:e,className:Xg(`lucide-${aE(s)}`,r),...a}));return n.displayName=`${s}`,n};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uE=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],qg=Nt("ArrowRight",uE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dE=[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]],fE=Nt("ArrowUpDown",dE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hE=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],pE=Nt("Check",hE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mE=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],gE=Nt("ChevronDown",mE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vE=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],_E=Nt("ChevronUp",vE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],od=Nt("CircleCheck",xE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],SE=Nt("CircleHelp",yE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ME=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],ef=Nt("Compass",ME);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EE=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],wE=Nt("Cpu",EE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]],Yg=Nt("Crosshair",TE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AE=[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],$g=Nt("Earth",AE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CE=[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]],RE=Nt("Footprints",CE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],PE=Nt("Globe",bE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],LE=Nt("Info",NE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DE=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],bl=Nt("LoaderCircle",DE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IE=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],ad=Nt("MapPin",IE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UE=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],FE=Nt("Map",UE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OE=[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]],kE=Nt("Maximize2",OE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]],BE=Nt("Minimize2",zE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=[["path",{d:"M5 12h14",key:"1ays0h"}]],VE=Nt("Minus",HE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=[["polygon",{points:"12 2 19 21 12 17 5 21 12 2",key:"x8c0qg"}]],WE=Nt("Navigation2",GE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jE=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],Kg=Nt("Navigation",jE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]],qE=Nt("Plane",XE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YE=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],$E=Nt("Plus",YE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Zg=Nt("RotateCcw",KE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],QE=Nt("Share2",ZE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JE=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],_f=Nt("Sparkles",JE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],js=Nt("X",ew),tw=({location:s,bearing:e,bearingCompass:n,visible:r,transitionProgress:a})=>{const l=Ue.useRef(null),d=Ue.useRef(null);if(Ue.useEffect(()=>{const g=new Image;g.src="/textures/earth_atmos_2048.jpg",g.onload=()=>{d.current=g}},[]),Ue.useEffect(()=>{if(!r||!s||!l.current)return;const g=l.current,p=g.getContext("2d");if(!p)return;let _,x=performance.now();const S=T=>{const M=g.width,y=g.height,v=(T-x)/1e3;p.clearRect(0,0,M,y),p.fillStyle="#030508",p.fillRect(0,0,M,y);const O=s.coords.lat,D=s.coords.lng,b=80/111.32,H=Math.max(.15,Math.cos(O*Math.PI/180)),F=b/H;if(d.current&&d.current.complete){p.save();const ee=d.current.naturalWidth||2048,$=d.current.naturalHeight||1024,N=(D-F/2+180)/360*ee,K=(D+F/2+180)/360*ee,ye=(90-(O+b/2))/180*$,Y=(90-(O-b/2))/180*$,fe=Math.max(1,K-N),pe=Math.max(1,Y-ye);p.filter="grayscale(100%) contrast(220%) brightness(140%)",p.drawImage(d.current,Math.max(0,N),Math.max(0,ye),Math.min(ee,fe),Math.min($,pe),0,0,M,y),p.restore()}p.save(),p.strokeStyle="rgba(255, 255, 255, 0.12)",p.lineWidth=1;const k=8;for(let ee=1;ee<k;ee++){const $=M/k*ee,N=y/k*ee;p.beginPath(),p.moveTo($,0),p.lineTo($,y),p.stroke(),p.beginPath(),p.moveTo(0,N),p.lineTo(M,N),p.stroke()}const G=M/2,P=y/2,A=Math.min(M,y)*.44;[.25,.5,.75,1].forEach((ee,$)=>{const N=A*ee;p.beginPath(),p.arc(G,P,N,0,Math.PI*2),p.strokeStyle=$===3?"rgba(255, 255, 255, 0.4)":"rgba(255, 255, 255, 0.16)",p.setLineDash($===3?[]:[4,6]),p.stroke(),p.setLineDash([]),p.fillStyle="rgba(255, 255, 255, 0.6)",p.font="10px JetBrains Mono, monospace",p.fillText(`${($+1)*20} km`,G+6,P-N+14)});const B=v*1.8%(Math.PI*2);p.save();const oe=p.createRadialGradient(G,P,0,G,P,A);oe.addColorStop(0,"rgba(56, 189, 248, 0.3)"),oe.addColorStop(1,"rgba(56, 189, 248, 0.0)"),p.beginPath(),p.moveTo(G,P),p.arc(G,P,A,B-.4,B),p.closePath(),p.fillStyle=oe,p.fill(),p.restore();const Q=(e-90)*Math.PI/180,ue=A*.92,te=G+Math.cos(Q)*ue,le=P+Math.sin(Q)*ue;p.save(),p.strokeStyle="#00f0ff",p.lineWidth=3,p.shadowColor="#00f0ff",p.shadowBlur=10,p.beginPath(),p.moveTo(G,P),p.lineTo(te,le),p.stroke();const re=Math.atan2(le-P,te-G);p.fillStyle="#ffffff",p.beginPath(),p.moveTo(te,le),p.lineTo(te-16*Math.cos(re-Math.PI/7),le-16*Math.sin(re-Math.PI/7)),p.lineTo(te-16*Math.cos(re+Math.PI/7),le-16*Math.sin(re+Math.PI/7)),p.closePath(),p.fill(),p.restore(),p.save(),p.fillStyle="#ffffff",p.beginPath(),p.arc(G,P,5,0,Math.PI*2),p.fill();const I=8+(Math.sin(v*6)+1)*6;p.strokeStyle="#00f0ff",p.lineWidth=2,p.beginPath(),p.arc(G,P,I,0,Math.PI*2),p.stroke(),p.restore(),p.restore(),_=requestAnimationFrame(S)};return _=requestAnimationFrame(S),()=>cancelAnimationFrame(_)},[r,s,e]),!r||!s)return null;const u=1+a*2.5,h=Math.max(0,1-a*1.2);return R.jsx("div",{className:"absolute inset-0 z-10 flex items-center justify-center pointer-events-none transition-opacity duration-300",style:{opacity:h,transform:`scale(${u})`,transformOrigin:"center center"},children:R.jsxs("div",{className:"relative w-full h-full max-w-4xl max-h-[85vh] p-4 flex flex-col items-center justify-center",children:[R.jsxs("div",{className:"relative w-full aspect-square max-w-[650px] rounded-3xl overflow-hidden border-2 border-cyan-500/40 shadow-[0_0_50px_rgba(0,0,0,0.9)] bg-space-950",children:[R.jsx("canvas",{ref:l,width:800,height:800,className:"w-full h-full object-cover"}),R.jsx("div",{className:"absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-cyan-400"}),R.jsx("div",{className:"absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-cyan-400"}),R.jsx("div",{className:"absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-cyan-400"}),R.jsx("div",{className:"absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-cyan-400"}),R.jsxs("div",{className:"absolute top-5 left-8 right-8 flex items-center justify-between pointer-events-auto",children:[R.jsxs("div",{className:"glass-panel px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-2",children:[R.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-ping"}),R.jsx("span",{className:"font-mono text-xs font-bold uppercase tracking-wider text-cyan-300",children:"80 km × 80 km Local Tactical Display"})]}),R.jsx("div",{className:"glass-panel px-3 py-1.5 rounded-xl border border-white/10 font-mono text-[11px] text-slate-300",children:"SCALE: 1:80,000 m"})]}),R.jsxs("div",{className:"absolute top-[54%] left-1/2 -translate-x-1/2 glass-panel px-4 py-2 rounded-xl border border-cyan-500/40 text-center shadow-xl",children:[R.jsx("p",{className:"text-xs font-bold text-white tracking-wide truncate max-w-xs",children:s.name}),R.jsxs("p",{className:"text-[10px] font-mono text-cyan-400",children:[s.coords.lat.toFixed(4),"°N, ",s.coords.lng.toFixed(4),"°E"]})]}),R.jsxs("div",{className:"absolute bottom-5 left-8 right-8 flex items-center justify-between",children:[R.jsxs("div",{className:"glass-panel px-3.5 py-2 rounded-xl border border-white/10 flex items-center gap-2",children:[R.jsx(Kg,{size:14,className:"text-cyan-400"}),R.jsxs("div",{className:"font-mono text-xs",children:[R.jsx("span",{className:"text-slate-400",children:"DEPARTURE AZIMUTH: "}),R.jsxs("span",{className:"text-cyan-300 font-bold",children:[n," ",e,"°"]})]})]}),R.jsxs("div",{className:"glass-panel px-4 py-2 rounded-xl border border-white/10 flex flex-col items-center",children:[R.jsx("div",{className:"w-28 h-1.5 border-b-2 border-l-2 border-r-2 border-white/80 relative"}),R.jsx("span",{className:"font-mono text-[10px] text-slate-300 tracking-wider mt-1",children:"80 km Sector"})]})]})]}),R.jsx("div",{className:"mt-3 text-center",children:R.jsxs("p",{className:"font-mono text-xs text-cyan-400 tracking-widest uppercase flex items-center justify-center gap-2",children:[R.jsx(Yg,{size:14,className:"animate-spin"}),"Locking Departure Coordinates // Calibrating Global Geodesic Vector..."]})})]})})},nw=({is3D:s,onToggleView:e,onOpenPresets:n,onOpenAbout:r,hasActiveRoute:a})=>R.jsxs("header",{className:"absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-30",children:[R.jsx("div",{className:"flex items-center gap-3 pointer-events-auto",children:R.jsxs("div",{className:"glass-panel px-3.5 py-2 rounded-2xl flex items-center gap-2.5 shadow-xl border border-white/10 hover:border-cyan-500/30 transition-all",children:[R.jsx("div",{className:"w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shadow-sm",children:R.jsx(Kg,{size:18,className:"rotate-45"})}),R.jsxs("div",{children:[R.jsxs("div",{className:"flex items-center gap-2",children:[R.jsx("h1",{className:"text-sm font-semibold tracking-tight text-white flex items-center gap-1.5",children:"AeroRoute Global"}),R.jsx("span",{className:"hidden sm:inline-block px-1.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-cyan-950/60 text-cyan-300 border border-cyan-500/20",children:"PRO"})]}),R.jsx("p",{className:"text-[11px] text-slate-400 tracking-tight hidden xs:block",children:"Precision Geodesic Flight System"})]})]})}),R.jsxs("div",{className:"flex items-center gap-2 pointer-events-auto",children:[R.jsxs("button",{onClick:n,className:"glass-panel px-3 py-2 rounded-xl text-xs font-medium text-slate-200 hover:text-cyan-300 hover:border-cyan-500/30 flex items-center gap-1.5 transition-all active:scale-95 shadow-lg",title:"Explore Featured Flight Corridors",children:[R.jsx(_f,{size:14,className:"text-cyan-400"}),R.jsx("span",{className:"hidden sm:inline",children:"Featured Routes"}),R.jsx("span",{className:"sm:hidden",children:"Routes"})]}),R.jsxs("button",{onClick:e,className:"glass-panel px-3 py-2 rounded-xl text-xs font-medium text-slate-200 hover:text-cyan-300 hover:border-cyan-500/30 flex items-center gap-1.5 transition-all active:scale-95 shadow-lg",title:"Toggle between 3D Globe and 2D Flat Map",children:[s?R.jsx(FE,{size:14,className:"text-cyan-400"}):R.jsx($g,{size:14,className:"text-cyan-400"}),R.jsx("span",{className:"hidden sm:inline",children:s?"2D Map":"3D Globe"})]}),R.jsx("button",{onClick:r,className:"glass-panel p-2 rounded-xl text-slate-300 hover:text-cyan-300 hover:border-cyan-500/30 transition-all active:scale-95 shadow-lg",title:"About Geodesic Mathematics",children:R.jsx(SE,{size:16})})]})]}),iw=({heading:s,tilt:e,is3D:n,onResetNorth:r,onToggle3D:a,onZoomIn:l,onZoomOut:d,onResetView:u})=>{const[h,g]=ag.useState(!1),p=()=>{document.fullscreenElement?(document.exitFullscreen().catch(()=>{}),g(!1)):(document.documentElement.requestFullscreen().catch(()=>{}),g(!0))};return R.jsxs("div",{className:"flex flex-col items-center gap-2 select-none pointer-events-auto",children:[R.jsxs("button",{onClick:r,title:"Reset North (Click to face North)",className:"w-11 h-11 rounded-full glass-panel flex items-center justify-center text-slate-200 hover:text-cyan-400 hover:border-cyan-500/40 transition-all shadow-lg active:scale-95 group relative",children:[R.jsx("div",{className:"transition-transform duration-200",style:{transform:`rotate(${-s}deg)`},children:R.jsxs("div",{className:"w-1.5 h-7 relative flex flex-col items-center",children:[R.jsx("div",{className:"w-0 h-0 border-l-[3.5px] border-l-transparent border-r-[3.5px] border-r-transparent border-b-[9px] border-b-rose-500"}),R.jsx("div",{className:"w-0.5 h-2.5 bg-slate-400"}),R.jsx("div",{className:"w-0 h-0 border-l-[3.5px] border-l-transparent border-r-[3.5px] border-r-transparent border-t-[9px] border-t-slate-400"})]})}),R.jsx("span",{className:"absolute -top-1 font-mono text-[9px] font-bold text-rose-400 tracking-wider",children:"N"})]}),R.jsx("button",{onClick:a,title:n?"Switch to 2D Planar view":"Switch to 3D Globe view",className:"w-10 h-10 rounded-xl glass-panel flex items-center justify-center font-mono text-xs font-semibold text-slate-200 hover:text-cyan-400 hover:border-cyan-500/40 transition-all shadow-md active:scale-95",children:n?"3D":"2D"}),R.jsxs("div",{className:"flex flex-col rounded-xl glass-panel overflow-hidden border border-white/10 shadow-lg",children:[R.jsx("button",{onClick:l,title:"Zoom in",className:"w-10 h-9 flex items-center justify-center text-slate-200 hover:text-cyan-400 hover:bg-white/5 active:scale-95 transition-colors border-b border-white/10",children:R.jsx($E,{size:16})}),R.jsx("button",{onClick:d,title:"Zoom out",className:"w-10 h-9 flex items-center justify-center text-slate-200 hover:text-cyan-400 hover:bg-white/5 active:scale-95 transition-colors",children:R.jsx(VE,{size:16})})]}),R.jsx("button",{onClick:u,title:"Reset Earth View",className:"w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all shadow-md active:scale-95",children:R.jsx(Zg,{size:15})}),R.jsx("button",{onClick:p,title:h?"Exit Fullscreen":"Enter Fullscreen",className:"w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all shadow-md active:scale-95",children:h?R.jsx(BE,{size:15}):R.jsx(kE,{size:15})})]})};function rg(s,e){const n=Math.abs(s),r=Math.floor(n),a=(n-r)*60,l=Math.floor(a),d=Math.floor((a-l)*60),u=e?s>=0?"N":"S":s>=0?"E":"W";return`${r}°${l.toString().padStart(2,"0")}'${d.toString().padStart(2,"0")}"${u}`}const rw=({cursorCoords:s,cameraAltKm:e,elevationMeters:n=12,headingDegrees:r})=>{const a=s||{lat:0,lng:0};return R.jsxs("footer",{className:"h-7 w-full bg-space-950/80 backdrop-blur-md border-t border-white/10 px-4 flex items-center justify-between text-[11px] font-mono text-slate-400 select-none pointer-events-none z-20",children:[R.jsxs("div",{className:"flex items-center gap-3 overflow-hidden text-ellipsis whitespace-nowrap",children:[R.jsxs("span",{className:"hidden sm:inline text-slate-500",children:["Geodesic Arc: ",R.jsx("strong",{className:"text-slate-300 font-medium",children:"WGS-84 Complementary"})]}),R.jsx("span",{className:"hidden md:inline text-slate-600",children:"|"}),R.jsxs("span",{className:"text-slate-500",children:["Data: ",R.jsx("span",{className:"text-slate-400",children:"OpenStreetMap"})]})]}),R.jsxs("div",{className:"flex items-center gap-3 md:gap-5 whitespace-nowrap font-mono tracking-tight text-slate-300",children:[R.jsxs("div",{className:"flex items-center gap-1.5",children:[R.jsx("span",{className:"text-slate-500 hidden xs:inline",children:"Coord:"}),R.jsxs("span",{className:"text-cyan-400",children:[rg(a.lat,!0)," ",rg(a.lng,!1)]})]}),R.jsxs("div",{className:"hidden sm:flex items-center gap-1",children:[R.jsx("span",{className:"text-slate-500",children:"elev:"}),R.jsxs("span",{children:[n," m"]})]}),R.jsxs("div",{className:"flex items-center gap-1",children:[R.jsx("span",{className:"text-slate-500",children:"Eye alt:"}),R.jsx("span",{className:"text-slate-200 font-semibold",children:e>=1e3?`${Math.round(e).toLocaleString()} km`:`${e.toFixed(1)} km`})]})]})]})},ld=new Map;function sw(s){const n=s.trim().match(/^([-+]?\d{1,2}(?:\.\d+)?)[,\s]+([-+]?\d{1,3}(?:\.\d+)?)$/);if(n){const r=parseFloat(n[1]),a=parseFloat(n[2]);if(r>=-90&&r<=90&&a>=-180&&a<=180)return{lat:r,lng:a}}return null}async function sg(s){const e=s.trim();if(!e||e.length<2)return[];const n=sw(e);if(n)return[{id:`coord-${n.lat}-${n.lng}`,name:`Coordinates (${n.lat.toFixed(4)}°, ${n.lng.toFixed(4)}°)`,shortName:`${n.lat.toFixed(4)}°, ${n.lng.toFixed(4)}°`,coords:n,type:"coordinate"}];const r=e.toLowerCase();if(ld.has(r))return ld.get(r);try{const a=`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(e)}&limit=6&addressdetails=1`,l=new AbortController,d=setTimeout(()=>l.abort(),4e3),u=await fetch(a,{signal:l.signal,headers:{"Accept-Language":"en-US,en;q=0.9"}});if(clearTimeout(d),!u.ok)throw new Error(`Nominatim error: ${u.statusText}`);const g=(await u.json()).map(p=>{const x=p.display_name.split(",").slice(0,2).join(",").trim();return{id:`osm-${p.place_id}`,name:p.display_name,shortName:x||p.display_name,coords:{lat:parseFloat(p.lat),lng:parseFloat(p.lon)},type:p.type||"place"}});return ld.set(r,g),g}catch(a){return console.warn("Geocoding search failed or timed out:",a),[]}}function ow(){return new Promise((s,e)=>{if(!navigator.geolocation){e(new Error("Geolocation is not supported by your browser"));return}navigator.geolocation.getCurrentPosition(async n=>{var a,l;const r={lat:n.coords.latitude,lng:n.coords.longitude};try{const d=await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${r.lat}&lon=${r.lng}`);if(d.ok){const u=await d.json();s({id:"my-location",name:u.display_name||"My Current Location",shortName:((a=u.address)==null?void 0:a.city)||((l=u.address)==null?void 0:l.town)||"Current Location",coords:r,type:"current_position"});return}}catch{}s({id:"my-location",name:`Current Location (${r.lat.toFixed(4)}°, ${r.lng.toFixed(4)}°)`,shortName:"My Location",coords:r,type:"current_position"})},n=>{let r="Unable to retrieve location";n.code===n.PERMISSION_DENIED?r="Location permission was denied. You can manually search for any place.":n.code===n.POSITION_UNAVAILABLE?r="Location information is currently unavailable.":n.code===n.TIMEOUT&&(r="Location request timed out."),e(new Error(r))},{timeout:8e3,enableHighAccuracy:!0})})}const aw=({fromLocation:s,toLocation:e,onSelectFrom:n,onSelectTo:r,onSwapLocations:a,onCalculateRoute:l,isCalculating:d,minimized:u,onToggleMinimize:h})=>{const[g,p]=Ue.useState((s==null?void 0:s.name)||""),[_,x]=Ue.useState((e==null?void 0:e.name)||""),[S,T]=Ue.useState([]),[M,y]=Ue.useState([]),[v,O]=Ue.useState(!1),[D,b]=Ue.useState(!1),[H,F]=Ue.useState(null),[k,G]=Ue.useState(!1),[P,A]=Ue.useState(null),B=Ue.useRef(null);Ue.useEffect(()=>{s&&p(s.shortName||s.name)},[s]),Ue.useEffect(()=>{e&&x(e.shortName||e.name)},[e]),Ue.useEffect(()=>{const te=le=>{B.current&&!B.current.contains(le.target)&&F(null)};return document.addEventListener("mousedown",te),()=>document.removeEventListener("mousedown",te)},[]),Ue.useEffect(()=>{if(H!=="from")return;if(!g||g.trim().length<2){T([]);return}const te=setTimeout(async()=>{O(!0);const le=await sg(g);T(le),O(!1)},350);return()=>clearTimeout(te)},[g,H]),Ue.useEffect(()=>{if(H!=="to")return;if(!_||_.trim().length<2){y([]);return}const te=setTimeout(async()=>{b(!0);const le=await sg(_);y(le),b(!1)},350);return()=>clearTimeout(te)},[_,H]);const oe=async()=>{G(!0),A(null);try{const te=await ow();n(te),p(te.shortName||te.name),F(null)}catch(te){A(te.message||"Geolocation failed. Enter location manually.")}finally{G(!1)}},Q=()=>{a();const te=g;p(_),x(te)},ue=!!(s&&e);return R.jsx("div",{ref:B,className:`absolute top-20 left-4 z-20 w-[calc(100vw-2rem)] max-w-md transition-all duration-300 pointer-events-auto ${u?"opacity-90 hover:opacity-100":""}`,children:R.jsxs("div",{className:"glass-panel rounded-2xl overflow-hidden shadow-2xl border border-white/10",children:[R.jsxs("div",{className:"px-4 py-3 border-b border-white/5 flex items-center justify-between bg-white/[0.02]",children:[R.jsxs("div",{className:"flex items-center gap-2",children:[R.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-pulse-subtle"}),R.jsx("span",{className:"text-xs font-semibold uppercase tracking-wider text-slate-300",children:"Route Parameters"})]}),R.jsx("button",{onClick:h,className:"text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors",title:u?"Expand route search":"Minimize route search",children:u?R.jsx(gE,{size:16}):R.jsx(_E,{size:16})})]}),u&&R.jsxs("div",{onClick:h,className:"p-3.5 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors",children:[R.jsxs("div",{className:"flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap text-xs",children:[R.jsx("span",{className:"font-medium text-emerald-400",children:s?s.shortName||s.name:"Origin"}),R.jsx("span",{className:"text-slate-500",children:"→"}),R.jsx("span",{className:"font-medium text-rose-400",children:e?e.shortName||e.name:"Destination"})]}),R.jsx("span",{className:"text-[11px] text-cyan-400 font-medium ml-2 shrink-0",children:"Expand"})]}),!u&&R.jsxs("div",{className:"p-4 space-y-3",children:[P&&R.jsxs("div",{className:"p-2.5 rounded-xl bg-rose-950/50 border border-rose-500/30 text-rose-300 text-xs flex items-start gap-2",children:[R.jsx("span",{className:"text-rose-400 font-bold",children:"!"}),R.jsx("span",{children:P}),R.jsx("button",{onClick:()=>A(null),className:"ml-auto text-rose-400 hover:text-rose-200",children:R.jsx(js,{size:12})})]}),R.jsxs("div",{className:"relative space-y-2",children:[R.jsxs("div",{className:"relative",children:[R.jsxs("div",{className:"flex items-center gap-2 bg-space-950/60 rounded-xl px-3 py-2.5 border border-white/10 focus-within:border-cyan-500/50 transition-all",children:[R.jsx("span",{className:"w-2.5 h-2.5 rounded-full border-2 border-emerald-400 shrink-0"}),R.jsx("input",{type:"text",value:g,onChange:te=>{p(te.target.value),F("from")},onFocus:()=>F("from"),placeholder:"Enter starting location...",className:"w-full bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none"}),v&&R.jsx(bl,{size:14,className:"animate-spin text-slate-400 shrink-0"}),g&&!v&&R.jsx("button",{onClick:()=>{p(""),T([])},className:"text-slate-500 hover:text-slate-300 p-0.5",children:R.jsx(js,{size:13})}),R.jsx("button",{onClick:oe,disabled:k,title:"Use my current GPS location",className:"p-1 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-white/5 transition-colors shrink-0 disabled:opacity-50",children:k?R.jsx(bl,{size:15,className:"animate-spin text-cyan-400"}):R.jsx(Yg,{size:15})})]}),H==="from"&&S.length>0&&R.jsx("div",{className:"absolute top-full left-0 right-0 mt-1.5 max-h-56 overflow-y-auto rounded-xl bg-space-900/95 backdrop-blur-xl border border-white/10 shadow-2xl z-50",children:S.map(te=>R.jsxs("div",{onClick:()=>{n(te),p(te.shortName||te.name),F(null)},className:"px-3.5 py-2.5 text-xs hover:bg-cyan-500/10 hover:text-cyan-300 cursor-pointer border-b border-white/5 last:border-0 flex items-start gap-2.5 transition-colors",children:[R.jsx(ad,{size:14,className:"text-cyan-400 shrink-0 mt-0.5"}),R.jsxs("div",{className:"overflow-hidden",children:[R.jsx("p",{className:"font-medium text-slate-200 truncate",children:te.shortName}),R.jsx("p",{className:"text-[10px] text-slate-400 truncate",children:te.name})]})]},te.id))})]}),R.jsx("div",{className:"flex justify-end pr-3 -my-1 relative z-10",children:R.jsx("button",{onClick:Q,title:"Swap Starting and Destination points",className:"w-7 h-7 rounded-full glass-panel flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-110 active:scale-95 transition-all shadow-md",children:R.jsx(fE,{size:12})})}),R.jsxs("div",{className:"relative",children:[R.jsxs("div",{className:"flex items-center gap-2 bg-space-950/60 rounded-xl px-3 py-2.5 border border-white/10 focus-within:border-cyan-500/50 transition-all",children:[R.jsx(ad,{size:14,className:"text-rose-400 shrink-0"}),R.jsx("input",{type:"text",value:_,onChange:te=>{x(te.target.value),F("to")},onFocus:()=>F("to"),placeholder:"Enter destination...",className:"w-full bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none"}),D&&R.jsx(bl,{size:14,className:"animate-spin text-slate-400 shrink-0"}),_&&!D&&R.jsx("button",{onClick:()=>{x(""),y([])},className:"text-slate-500 hover:text-slate-300 p-0.5",children:R.jsx(js,{size:13})})]}),H==="to"&&M.length>0&&R.jsx("div",{className:"absolute top-full left-0 right-0 mt-1.5 max-h-56 overflow-y-auto rounded-xl bg-space-900/95 backdrop-blur-xl border border-white/10 shadow-2xl z-50",children:M.map(te=>R.jsxs("div",{onClick:()=>{r(te),x(te.shortName||te.name),F(null)},className:"px-3.5 py-2.5 text-xs hover:bg-cyan-500/10 hover:text-cyan-300 cursor-pointer border-b border-white/5 last:border-0 flex items-start gap-2.5 transition-colors",children:[R.jsx(ad,{size:14,className:"text-rose-400 shrink-0 mt-0.5"}),R.jsxs("div",{className:"overflow-hidden",children:[R.jsx("p",{className:"font-medium text-slate-200 truncate",children:te.shortName}),R.jsx("p",{className:"text-[10px] text-slate-400 truncate",children:te.name})]})]},te.id))})]})]}),R.jsx("button",{onClick:l,disabled:!ue||d,className:`w-full py-3 px-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 shadow-lg transition-all duration-200 ${ue&&!d?"bg-gradient-to-r from-cyan-600 via-cyan-500 to-sky-500 hover:from-cyan-500 hover:to-sky-400 text-white shadow-cyan-500/25 hover:shadow-cyan-500/40 active:scale-[0.98]":"bg-slate-800/60 text-slate-500 border border-white/5 cursor-not-allowed"}`,children:d?R.jsxs(R.Fragment,{children:[R.jsx(bl,{size:16,className:"animate-spin text-white"}),R.jsx("span",{children:"Calculating Global Trajectory..."})]}):R.jsxs(R.Fragment,{children:[R.jsx(WE,{size:16,className:"fill-white"}),R.jsx("span",{children:"Calculate Flight Path"})]})})]})]})})},lw=({routeData:s,onClose:e,onReplayAnimation:n})=>{const[r,a]=Ue.useState(!1);if(!s)return null;const{from:l,to:d,telemetry:u}=s,h=()=>{const g=`AeroRoute Global Trajectory Report:
Departure: ${l.name}
Destination: ${d.name}
Calculated Flight Distance: ${xr(u.longWayDistanceKm)}
Departure Azimuth: ${u.longWayBearingCompass} (${u.longWayBearing}°)
Direct Reference Distance: ${xr(u.shortestDistanceKm)}
Estimated Flight Time: ${u.longWayFlyingHours.toLocaleString()} hours`;navigator.clipboard.writeText(g).then(()=>{a(!0),setTimeout(()=>a(!1),2500)})};return R.jsx("div",{className:"absolute bottom-10 left-4 right-4 md:left-auto md:right-4 md:bottom-12 md:w-96 z-30 pointer-events-auto",children:R.jsxs("div",{className:"glass-panel rounded-2xl overflow-hidden shadow-2xl border border-white/10 animate-in fade-in slide-in-from-bottom-5 duration-300",children:[R.jsxs("div",{className:"px-4 py-3 border-b border-white/5 flex items-center justify-between bg-white/[0.02]",children:[R.jsxs("div",{className:"flex items-center gap-2",children:[R.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),R.jsx("span",{className:"text-xs font-semibold uppercase tracking-wider text-slate-300",children:"Flight Trajectory Summary"})]}),R.jsxs("div",{className:"flex items-center gap-1",children:[R.jsx("button",{onClick:h,title:"Copy trajectory telemetry",className:"p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors",children:r?R.jsx(pE,{size:15,className:"text-emerald-400"}):R.jsx(QE,{size:15})}),R.jsx("button",{onClick:e,className:"p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors",children:R.jsx(js,{size:15})})]})]}),R.jsxs("div",{className:"p-4 space-y-3.5 max-h-[75vh] overflow-y-auto",children:[R.jsxs("div",{className:"p-3.5 rounded-xl bg-gradient-to-br from-cyan-950/50 to-space-900 border border-cyan-500/20 text-center",children:[R.jsx("span",{className:"text-[11px] font-mono uppercase tracking-widest text-cyan-300",children:"Total Calculated Distance"}),R.jsx("div",{className:"text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-cyan-400 font-mono tracking-tight my-1",children:xr(u.longWayDistanceKm)}),R.jsx("p",{className:"text-[11px] text-slate-300",children:"Continuous Geodesic Surface Track"})]}),R.jsxs("div",{className:"space-y-2 font-mono text-xs",children:[R.jsxs("div",{className:"p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/30 space-y-1.5 shadow-sm",children:[R.jsxs("div",{className:"flex items-center justify-between",children:[R.jsxs("span",{className:"text-cyan-200 font-sans font-medium flex items-center gap-1.5",children:[R.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400"}),"Calculated Trajectory"]}),R.jsx("span",{className:"text-cyan-400 font-semibold text-sm",children:xr(u.longWayDistanceKm)})]}),R.jsxs("div",{className:"flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-cyan-500/10",children:[R.jsxs("span",{className:"flex items-center gap-1",children:[R.jsx(ef,{size:12,className:"text-cyan-400/70"}),"Departure Azimuth"]}),R.jsxs("span",{className:"text-cyan-200 font-medium",children:[u.longWayBearingCompass," ",u.longWayBearing,"°"]})]})]}),R.jsxs("div",{className:"p-3 rounded-xl bg-space-950/60 border border-white/5 space-y-1.5",children:[R.jsxs("div",{className:"flex items-center justify-between",children:[R.jsxs("span",{className:"text-slate-400 font-sans font-medium flex items-center gap-1.5",children:[R.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400"}),"Direct Line Reference"]}),R.jsx("span",{className:"text-emerald-400 font-semibold",children:xr(u.shortestDistanceKm)})]}),R.jsxs("div",{className:"flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-white/5",children:[R.jsxs("span",{className:"flex items-center gap-1",children:[R.jsx(ef,{size:12,className:"text-slate-500"}),"Direct Heading"]}),R.jsxs("span",{className:"text-slate-200",children:[u.shortestBearingCompass," ",u.shortestBearing,"°"]})]})]})]}),R.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs font-mono",children:[R.jsxs("div",{className:"p-2.5 rounded-xl bg-space-950/40 border border-white/5 flex items-center gap-2",children:[R.jsx(qE,{size:16,className:"text-cyan-400 shrink-0"}),R.jsxs("div",{children:[R.jsx("span",{className:"text-[10px] text-slate-500 block",children:"Flight Time"}),R.jsxs("span",{className:"text-slate-200 font-medium",children:["~",u.longWayFlyingHours.toLocaleString()," hrs"]})]})]}),R.jsxs("div",{className:"p-2.5 rounded-xl bg-space-950/40 border border-white/5 flex items-center gap-2",children:[R.jsx(RE,{size:16,className:"text-slate-400 shrink-0"}),R.jsxs("div",{children:[R.jsx("span",{className:"text-[10px] text-slate-500 block",children:"Surface Transit"}),R.jsxs("span",{className:"text-slate-200 font-medium",children:["~",u.longWayWalkingDays.toLocaleString()," days"]})]})]})]}),R.jsxs("div",{className:"p-3 rounded-xl bg-white/[0.03] border border-white/5 text-[11px] leading-relaxed text-slate-300 flex items-start gap-2",children:[R.jsx(LE,{size:14,className:"text-cyan-400 shrink-0 mt-0.5"}),R.jsxs("p",{children:["Flight path computed from ",l.shortName||l.name," to ",d.shortName||d.name," across 400 orthodromic waypoints on the WGS-84 reference ellipsoid."]})]}),R.jsxs("button",{onClick:n,className:"w-full py-2.5 px-4 rounded-xl text-xs font-medium bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/10 flex items-center justify-center gap-2 transition-all active:scale-[0.98]",children:[R.jsx(Zg,{size:14}),"Replay Trajectory Scan"]})]})]})})},cw=({isOpen:s,onClose:e,onSelectPreset:n})=>s?R.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4",children:R.jsxs("div",{className:"glass-panel w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-200",children:[R.jsxs("div",{className:"px-5 py-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]",children:[R.jsxs("div",{className:"flex items-center gap-2.5",children:[R.jsx("div",{className:"p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400",children:R.jsx(_f,{size:18})}),R.jsxs("div",{children:[R.jsx("h2",{className:"text-sm font-semibold text-white",children:"Featured Flight Corridors"}),R.jsx("p",{className:"text-xs text-slate-400",children:"Curated global geodesic trajectories spanning worldwide waypoints"})]})]}),R.jsx("button",{onClick:e,className:"p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors",children:R.jsx(js,{size:18})})]}),R.jsx("div",{className:"p-4 overflow-y-auto space-y-3",children:Ol.map(r=>R.jsxs("div",{onClick:()=>{n(r),e()},className:"glass-panel p-4 rounded-xl border border-white/5 hover:border-cyan-500/40 hover:bg-white/[0.04] transition-all cursor-pointer group",children:[R.jsxs("div",{className:"flex items-start justify-between gap-4 mb-2",children:[R.jsxs("div",{children:[R.jsx("h3",{className:"text-sm font-medium text-slate-200 group-hover:text-cyan-300 transition-colors",children:r.title}),R.jsx("span",{className:"text-[11px] text-slate-400",children:r.description})]}),R.jsx("span",{className:"px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 shrink-0",children:xr(r.longDistanceKm)})]}),R.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs font-mono my-2.5 bg-space-950/40 p-2.5 rounded-lg border border-white/5",children:[R.jsxs("div",{children:[R.jsx("span",{className:"text-slate-500 block text-[10px] uppercase",children:"Direct Reference"}),R.jsxs("span",{className:"text-emerald-400 font-semibold",children:[r.standardDistanceKm," km"]})]}),R.jsxs("div",{children:[R.jsx("span",{className:"text-slate-500 block text-[10px] uppercase",children:"Calculated Flight Track"}),R.jsxs("span",{className:"text-cyan-400 font-semibold",children:[r.longDistanceKm.toLocaleString()," km"]})]})]}),R.jsxs("div",{className:"flex items-center justify-between text-[11px] text-slate-400 pt-1",children:[R.jsx("span",{className:"truncate italic text-slate-400/90",children:r.highlight}),R.jsxs("span",{className:"text-cyan-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-medium shrink-0 ml-2",children:["Select ",R.jsx(qg,{size:12})]})]})]},r.id))})]})}):null,uw=({isOpen:s,onClose:e})=>s?R.jsx("div",{className:"fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4",children:R.jsxs("div",{className:"glass-panel w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-200",children:[R.jsxs("div",{className:"px-5 py-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]",children:[R.jsxs("div",{className:"flex items-center gap-2.5",children:[R.jsx("div",{className:"p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400",children:R.jsx($g,{size:18})}),R.jsxs("div",{children:[R.jsx("h2",{className:"text-sm font-semibold text-white",children:"Geodesic Mathematics"}),R.jsx("p",{className:"text-xs text-slate-400",children:"Orthodromic Navigation Engine & Spherical Trigonometry"})]})]}),R.jsx("button",{onClick:e,className:"p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors",children:R.jsx(js,{size:18})})]}),R.jsxs("div",{className:"p-5 overflow-y-auto space-y-4 text-xs text-slate-300 leading-relaxed font-sans",children:[R.jsxs("div",{className:"p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-cyan-200 space-y-1",children:[R.jsx("strong",{className:"block font-medium text-cyan-300 text-sm",children:"Great-Circle Navigation Corridors"}),R.jsx("p",{className:"text-[11px] text-cyan-200/80",children:"Every two distinct points on a spherical planet define a unique geodesic great circle. The flight computer generates a high-density 400-point continuous trajectory across Earth's surface utilizing spherical slerp interpolation and unit vector transformation."})]}),R.jsxs("div",{className:"space-y-2",children:[R.jsxs("h3",{className:"font-semibold text-white flex items-center gap-2 text-xs uppercase tracking-wider font-mono",children:[R.jsx(wE,{size:14,className:"text-cyan-400"}),"Mathematical Source of Truth"]}),R.jsxs("ul",{className:"space-y-2 font-mono text-[11px] bg-space-950/60 p-3 rounded-xl border border-white/5",children:[R.jsxs("li",{className:"flex items-start gap-2",children:[R.jsx(od,{size:13,className:"text-emerald-400 mt-0.5 shrink-0"}),R.jsxs("span",{children:[R.jsx("strong",{children:"Earth Circumference:"})," ",rf.toLocaleString()," km (WGS-84 mean radius: ",nf.toLocaleString()," km)"]})]}),R.jsxs("li",{className:"flex items-start gap-2",children:[R.jsx(od,{size:13,className:"text-emerald-400 mt-0.5 shrink-0"}),R.jsxs("span",{children:[R.jsx("strong",{children:"Geodesic Resolution:"})," 400 precision spherical coordinate waypoints"]})]}),R.jsxs("li",{className:"flex items-start gap-2",children:[R.jsx(od,{size:13,className:"text-emerald-400 mt-0.5 shrink-0"}),R.jsxs("span",{children:[R.jsx("strong",{children:"Trajectory Generation:"})," 3D Vector Rodrigues rotation & spherical Slerp on the unit sphere, mapped back to precise (lat, lng) waypoints."]})]})]})]}),R.jsxs("div",{className:"space-y-2",children:[R.jsxs("h3",{className:"font-semibold text-white flex items-center gap-2 text-xs uppercase tracking-wider font-mono",children:[R.jsx(ef,{size:14,className:"text-cyan-400"}),"Departure Azimuth & Heading"]}),R.jsx("p",{className:"text-[11px] text-slate-300",children:"The departure azimuth indicates the initial heading angle in degrees (0° North, 90° East, 180° South, 270° West) required to begin tracking the calculated global geodesic path."})]}),R.jsx("div",{className:"pt-2 border-t border-white/5 flex justify-end",children:R.jsx("button",{onClick:e,className:"px-4 py-2 rounded-xl text-xs font-medium bg-cyan-600 hover:bg-cyan-500 text-white transition-colors",children:"Close"})})]})]})}):null,dw=({routeData:s,onSelectPreset:e,visible:n})=>n?R.jsxs("div",{className:"absolute top-20 right-4 z-20 hidden lg:flex flex-col gap-3 max-w-sm pointer-events-none",children:[R.jsxs("div",{className:"glass-panel p-4 rounded-2xl border border-white/10 shadow-2xl pointer-events-auto",children:[R.jsxs("div",{className:"flex items-center justify-between mb-3 border-b border-white/5 pb-2",children:[R.jsxs("span",{className:"text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 font-mono",children:[R.jsx(PE,{size:13,className:"text-cyan-400"}),"Global Geodesic Metrics"]}),R.jsx("span",{className:"text-[10px] font-mono text-cyan-400/90 bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-500/20",children:"WGS-84"})]}),R.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs font-mono",children:[R.jsxs("div",{className:"p-2.5 rounded-xl bg-space-950/50 border border-white/5",children:[R.jsx("span",{className:"text-slate-500 text-[10px] block uppercase",children:"Circumference"}),R.jsxs("span",{className:"text-slate-200 font-semibold",children:[rf.toLocaleString()," km"]})]}),R.jsxs("div",{className:"p-2.5 rounded-xl bg-space-950/50 border border-white/5",children:[R.jsx("span",{className:"text-slate-500 text-[10px] block uppercase",children:"Mean Radius"}),R.jsx("span",{className:"text-slate-200 font-semibold",children:"6,378.1 km"})]}),R.jsxs("div",{className:"p-2.5 rounded-xl bg-cyan-950/30 border border-cyan-500/20",children:[R.jsx("span",{className:"text-cyan-400/70 text-[10px] block uppercase",children:"Trajectory Track"}),R.jsx("span",{className:"text-cyan-300 font-bold text-sm",children:s?`${xr(s.telemetry.longWayDistanceKm)}`:"40,000+ km"})]}),R.jsxs("div",{className:"p-2.5 rounded-xl bg-cyan-950/30 border border-cyan-500/20",children:[R.jsx("span",{className:"text-cyan-400/70 text-[10px] block uppercase",children:"Direct Vector"}),R.jsx("span",{className:"text-cyan-300 font-bold text-sm",children:s?`${xr(s.telemetry.shortestDistanceKm)}`:"Reference Arc"})]})]})]}),R.jsxs("div",{className:"glass-panel p-3.5 rounded-2xl border border-white/10 shadow-xl pointer-events-auto",children:[R.jsxs("div",{className:"flex items-center justify-between mb-2.5",children:[R.jsxs("span",{className:"text-[11px] font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-1.5",children:[R.jsx(_f,{size:12,className:"text-cyan-400"}),"Curated Flight Corridors"]}),R.jsx("span",{className:"text-[10px] text-slate-500 font-mono",children:"1-Click"})]}),R.jsx("div",{className:"space-y-1.5",children:Ol.slice(0,3).map(r=>R.jsxs("button",{onClick:()=>e(r),className:"w-full text-left p-2 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-cyan-500/30 transition-all flex items-center justify-between group",children:[R.jsxs("div",{className:"overflow-hidden",children:[R.jsx("p",{className:"text-xs font-medium text-slate-200 group-hover:text-cyan-300 truncate",children:r.title}),R.jsxs("p",{className:"text-[10px] text-slate-400 font-mono",children:[r.standardDistanceKm," km → ",R.jsxs("span",{className:"text-cyan-400",children:[r.longDistanceKm.toLocaleString()," km"]})]})]}),R.jsx(qg,{size:13,className:"text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all shrink-0 ml-2"})]},r.id))})]})]}):null,fw=()=>{const[s,e]=Ue.useState(Ol[0].from),[n,r]=Ue.useState(Ol[0].to),[a,l]=Ue.useState(null),[d,u]=Ue.useState(!0),[h,g]=Ue.useState("idle"),[p,_]=Ue.useState(0),[x,S]=Ue.useState(0),[T,M]=Ue.useState(!1),[y,v]=Ue.useState(!1),[O,D]=Ue.useState(!1),[b,H]=Ue.useState(!1),[F,k]=Ue.useState(!1),[G,P]=Ue.useState({lat:48.8584,lng:2.2945}),[A,B]=Ue.useState({heading:0,tilt:20,cameraAltKm:14032}),oe=Ue.useRef(null);Ue.useEffect(()=>{s&&n&&Q(!1)},[]);const Q=(re=!0)=>{if(!s||!n)return;M(!0);const I=Jp(s.coords,n.coords),ee=Zp(s.coords,n.coords,400),$=Qp(s.coords,n.coords,60);l({from:s,to:n,telemetry:I,coordinates:ee,shortestCoordinates:$}),M(!1),re?ue():_(1)},ue=()=>{v(!0),D(!1),_(0),S(0),u(!0),g("local_sector_2d"),setTimeout(()=>{g("zoom_out_to_globe");const re=performance.now(),I=1400,ee=$=>{const N=$-re,K=Math.min(1,N/I),ye=K<.5?4*K*K*K:1-Math.pow(-2*K+2,3)/2;if(S(ye),K<1)requestAnimationFrame(ee);else{g("drawing_route");const Y=performance.now(),fe=3200,pe=ge=>{const Ae=ge-Y,Ne=Math.min(1,Ae/fe),De=Ne<.5?2*Ne*Ne:1-Math.pow(-2*Ne+2,2)/2;_(De),Ne<1?requestAnimationFrame(pe):(g("settled"),D(!0))};requestAnimationFrame(pe)}};requestAnimationFrame(ee)},1600)},te=re=>{e(re.from),r(re.to),v(!1);const I=Jp(re.from.coords,re.to.coords),ee=Zp(re.from.coords,re.to.coords,400),$=Qp(re.from.coords,re.to.coords,60),N={from:re.from,to:re.to,telemetry:I,coordinates:ee,shortestCoordinates:$};l(N),ue()},le=()=>{const re=s;e(n),r(re)};return R.jsxs("div",{className:"relative w-screen h-screen overflow-hidden bg-space-950 font-sans select-none",children:[d?R.jsx(sE,{routeData:a,phase:h,drawProgress:p,onCursorMove:P,onCameraChange:B,externalControlRef:oe}):R.jsx(oE,{routeData:a,drawProgress:p,onCursorMove:P}),R.jsx(tw,{location:s,bearing:(a==null?void 0:a.telemetry.longWayBearing)??0,bearingCompass:(a==null?void 0:a.telemetry.longWayBearingCompass)??"N",visible:h==="local_sector_2d"||h==="zoom_out_to_globe",transitionProgress:x}),R.jsx(nw,{is3D:d,onToggleView:()=>u(!d),onOpenPresets:()=>H(!0),onOpenAbout:()=>k(!0),hasActiveRoute:!!a}),R.jsx(aw,{fromLocation:s,toLocation:n,onSelectFrom:e,onSelectTo:r,onSwapLocations:le,onCalculateRoute:()=>Q(!0),isCalculating:T,minimized:y,onToggleMinimize:()=>v(!y)}),R.jsx(dw,{routeData:a,onSelectPreset:te,visible:!O&&!y&&h!=="local_sector_2d"&&h!=="zoom_out_to_globe"}),R.jsx("div",{className:"absolute bottom-11 right-4 z-20",children:R.jsx(iw,{heading:A.heading,tilt:A.tilt,is3D:d,onResetNorth:()=>{var re;return(re=oe.current)==null?void 0:re.resetNorth()},onToggle3D:()=>u(!d),onZoomIn:()=>{var re;return(re=oe.current)==null?void 0:re.zoomIn()},onZoomOut:()=>{var re;return(re=oe.current)==null?void 0:re.zoomOut()},onResetView:()=>{var re;return(re=oe.current)==null?void 0:re.resetView()}})}),O&&R.jsx(lw,{routeData:a,onClose:()=>D(!1),onReplayAnimation:ue}),R.jsx(cw,{isOpen:b,onClose:()=>H(!1),onSelectPreset:te}),R.jsx(uw,{isOpen:F,onClose:()=>k(!1)}),R.jsx("div",{className:"absolute bottom-0 left-0 right-0 z-30",children:R.jsx(rw,{cursorCoords:G,cameraAltKm:A.cameraAltKm,headingDegrees:A.heading})})]})};zv.createRoot(document.getElementById("root")).render(R.jsx(ag.StrictMode,{children:R.jsx(fw,{})}));

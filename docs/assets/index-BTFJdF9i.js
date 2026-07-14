(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function tc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ce={},xr=[],Kt=()=>{},uf=()=>!1,qo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Wo=n=>n.startsWith("onUpdate:"),et=Object.assign,nc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Zm=Object.prototype.hasOwnProperty,be=(n,e)=>Zm.call(n,e),ce=Array.isArray,Lr=n=>mi(n)==="[object Map]",hf=n=>mi(n)==="[object Set]",uh=n=>mi(n)==="[object Date]",fe=n=>typeof n=="function",Me=n=>typeof n=="string",Jt=n=>typeof n=="symbol",Se=n=>n!==null&&typeof n=="object",df=n=>(Se(n)||fe(n))&&fe(n.then)&&fe(n.catch),ff=Object.prototype.toString,mi=n=>ff.call(n),e_=n=>mi(n).slice(8,-1),pf=n=>mi(n)==="[object Object]",rc=n=>Me(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,js=tc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ho=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},t_=/-\w/g,Ot=Ho(n=>n.replace(t_,e=>e.slice(1).toUpperCase())),n_=/\B([A-Z])/g,Gn=Ho(n=>n.replace(n_,"-$1").toLowerCase()),gf=Ho(n=>n.charAt(0).toUpperCase()+n.slice(1)),ja=Ho(n=>n?`on${gf(n)}`:""),Ht=(n,e)=>!Object.is(n,e),io=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},mf=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},sc=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let hh;const Ko=()=>hh||(hh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function zr(n){if(ce(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=Me(r)?o_(r):zr(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Me(n)||Se(n))return n}const r_=/;(?![^(]*\))/g,s_=/:([^]+)/,i_=/\/\*[^]*?\*\//g;function o_(n){const e={};return n.replace(i_,"").split(r_).forEach(t=>{if(t){const r=t.split(s_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Tt(n){let e="";if(Me(n))e=n;else if(ce(n))for(let t=0;t<n.length;t++){const r=Tt(n[t]);r&&(e+=r+" ")}else if(Se(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const a_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",l_=tc(a_);function _f(n){return!!n||n===""}function c_(n,e){if(n.length!==e.length)return!1;let t=!0;for(let r=0;t&&r<n.length;r++)t=ic(n[r],e[r]);return t}function ic(n,e){if(n===e)return!0;let t=uh(n),r=uh(e);if(t||r)return t&&r?n.getTime()===e.getTime():!1;if(t=Jt(n),r=Jt(e),t||r)return n===e;if(t=ce(n),r=ce(e),t||r)return t&&r?c_(n,e):!1;if(t=Se(n),r=Se(e),t||r){if(!t||!r)return!1;const s=Object.keys(n).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in n){const l=n.hasOwnProperty(a),c=e.hasOwnProperty(a);if(l&&!c||!l&&c||!ic(n[a],e[a]))return!1}}return String(n)===String(e)}const yf=n=>!!(n&&n.__v_isRef===!0),Ne=n=>Me(n)?n:n==null?"":ce(n)||Se(n)&&(n.toString===ff||!fe(n.toString))?yf(n)?Ne(n.value):JSON.stringify(n,vf,2):String(n),vf=(n,e)=>yf(e)?vf(n,e.value):Lr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[qa(r,i)+" =>"]=s,t),{})}:hf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>qa(t))}:Jt(e)?qa(e):Se(e)&&!ce(e)&&!pf(e)?String(e):e,qa=(n,e="")=>{var t;return Jt(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ye;class u_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Ye&&(Ye.active?(this.parent=Ye,this.index=(Ye.scopes||(Ye.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Ye;try{return Ye=this,e()}finally{Ye=t}}}on(){++this._on===1&&(this.prevScope=Ye,Ye=this)}off(){if(this._on>0&&--this._on===0){if(Ye===this)Ye=this.prevScope;else{let e=Ye;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function h_(){return Ye}let ke;const Wa=new WeakSet;class Ef{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ye&&(Ye.active?Ye.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Wa.has(this)&&(Wa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||wf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,dh(this),If(this);const e=ke,t=Mt;ke=this,Mt=!0;try{return this.fn()}finally{Af(this),ke=e,Mt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)lc(e);this.deps=this.depsTail=void 0,dh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Wa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){vl(this)&&this.run()}get dirty(){return vl(this)}}let Tf=0,qs,Ws;function wf(n,e=!1){if(n.flags|=8,e){n.next=Ws,Ws=n;return}n.next=qs,qs=n}function oc(){Tf++}function ac(){if(--Tf>0)return;if(Ws){let e=Ws;for(Ws=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;qs;){let e=qs;for(qs=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function If(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Af(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),lc(r),d_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function vl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(bf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function bf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ei)||(n.globalVersion=ei,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!vl(n))))return;n.flags|=2;const e=n.dep,t=ke,r=Mt;ke=n,Mt=!0;try{If(n);const s=n.fn(n._value);(e.version===0||Ht(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{ke=t,Mt=r,Af(n),n.flags&=-3}}function lc(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)lc(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function d_(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Mt=!0;const Rf=[];function Xt(){Rf.push(Mt),Mt=!1}function Zt(){const n=Rf.pop();Mt=n===void 0?!0:n}function dh(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ke;ke=void 0;try{e()}finally{ke=t}}}let ei=0;class f_{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class cc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ke||!Mt||ke===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ke)t=this.activeLink=new f_(ke,this),ke.deps?(t.prevDep=ke.depsTail,ke.depsTail.nextDep=t,ke.depsTail=t):ke.deps=ke.depsTail=t,Sf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=ke.depsTail,t.nextDep=void 0,ke.depsTail.nextDep=t,ke.depsTail=t,ke.deps===t&&(ke.deps=r)}return t}trigger(e){this.version++,ei++,this.notify(e)}notify(e){oc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{ac()}}}function Sf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Sf(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const El=new WeakMap,hr=Symbol(""),Tl=Symbol(""),ti=Symbol("");function at(n,e,t){if(Mt&&ke){let r=El.get(n);r||El.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new cc),s.map=r,s.key=t),s.track()}}function hn(n,e,t,r,s,i){const a=El.get(n);if(!a){ei++;return}const l=c=>{c&&c.trigger()};if(oc(),e==="clear")a.forEach(l);else{const c=ce(n),h=c&&rc(t);if(c&&t==="length"){const f=Number(r);a.forEach((g,y)=>{(y==="length"||y===ti||!Jt(y)&&y>=f)&&l(g)})}else switch((t!==void 0||a.has(void 0))&&l(a.get(t)),h&&l(a.get(ti)),e){case"add":c?h&&l(a.get("length")):(l(a.get(hr)),Lr(n)&&l(a.get(Tl)));break;case"delete":c||(l(a.get(hr)),Lr(n)&&l(a.get(Tl)));break;case"set":Lr(n)&&l(a.get(hr));break}}ac()}function Pr(n){const e=Ae(n);return e===n?e:(at(e,"iterate",ti),kt(n)?e:e.map(xt))}function zo(n){return at(n=Ae(n),"iterate",ti),n}function qt(n,e){return vn(n)?Gr(dr(n)?xt(e):e):xt(e)}const p_={__proto__:null,[Symbol.iterator](){return Ha(this,Symbol.iterator,n=>qt(this,n))},concat(...n){return Pr(this).concat(...n.map(e=>ce(e)?Pr(e):e))},entries(){return Ha(this,"entries",n=>(n[1]=qt(this,n[1]),n))},every(n,e){return an(this,"every",n,e,void 0,arguments)},filter(n,e){return an(this,"filter",n,e,t=>t.map(r=>qt(this,r)),arguments)},find(n,e){return an(this,"find",n,e,t=>qt(this,t),arguments)},findIndex(n,e){return an(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return an(this,"findLast",n,e,t=>qt(this,t),arguments)},findLastIndex(n,e){return an(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return an(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ka(this,"includes",n)},indexOf(...n){return Ka(this,"indexOf",n)},join(n){return Pr(this).join(n)},lastIndexOf(...n){return Ka(this,"lastIndexOf",n)},map(n,e){return an(this,"map",n,e,void 0,arguments)},pop(){return Ss(this,"pop")},push(...n){return Ss(this,"push",n)},reduce(n,...e){return fh(this,"reduce",n,e)},reduceRight(n,...e){return fh(this,"reduceRight",n,e)},shift(){return Ss(this,"shift")},some(n,e){return an(this,"some",n,e,void 0,arguments)},splice(...n){return Ss(this,"splice",n)},toReversed(){return Pr(this).toReversed()},toSorted(n){return Pr(this).toSorted(n)},toSpliced(...n){return Pr(this).toSpliced(...n)},unshift(...n){return Ss(this,"unshift",n)},values(){return Ha(this,"values",n=>qt(this,n))}};function Ha(n,e,t){const r=zo(n),s=r[e]();return r!==n&&!kt(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=t(i.value)),i}),s}const g_=Array.prototype;function an(n,e,t,r,s,i){const a=zo(n),l=a!==n&&!kt(n),c=a[e];if(c!==g_[e]){const g=c.apply(n,i);return l?xt(g):g}let h=t;a!==n&&(l?h=function(g,y){return t.call(this,qt(n,g),y,n)}:t.length>2&&(h=function(g,y){return t.call(this,g,y,n)}));const f=c.call(a,h,r);return l&&s?s(f):f}function fh(n,e,t,r){const s=zo(n),i=s!==n&&!kt(n);let a=t,l=!1;s!==n&&(i?(l=r.length===0,a=function(h,f,g){return l&&(l=!1,h=qt(n,h)),t.call(this,h,qt(n,f),g,n)}):t.length>3&&(a=function(h,f,g){return t.call(this,h,f,g,n)}));const c=s[e](a,...r);return l?qt(n,c):c}function Ka(n,e,t){const r=Ae(n);at(r,"iterate",ti);const s=r[e](...t);return(s===-1||s===!1)&&fc(t[0])?(t[0]=Ae(t[0]),r[e](...t)):s}function Ss(n,e,t=[]){Xt(),oc();const r=Ae(n)[e].apply(n,t);return ac(),Zt(),r}const m_=tc("__proto__,__v_isRef,__isVue"),Pf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Jt));function __(n){Jt(n)||(n=String(n));const e=Ae(this);return at(e,"has",n),e.hasOwnProperty(n)}class Cf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?S_:Nf:i?Df:Vf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=ce(e);if(!s){let c;if(a&&(c=p_[t]))return c;if(t==="hasOwnProperty")return __}const l=Reflect.get(e,t,ut(e)?e:r);if((Jt(t)?Pf.has(t):m_(t))||(s||at(e,"get",t),i))return l;if(ut(l)){const c=a&&rc(t)?l:l.value;return s&&Se(c)?Il(c):c}return Se(l)?s?Il(l):hc(l):l}}class kf extends Cf{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];const a=ce(e)&&rc(t);if(!this._isShallow){const h=vn(i);if(!kt(r)&&!vn(r)&&(i=Ae(i),r=Ae(r)),!a&&ut(i)&&!ut(r))return h||(i.value=r),!0}const l=a?Number(t)<e.length:be(e,t),c=Reflect.set(e,t,r,ut(e)?e:s);return e===Ae(s)&&c&&(l?Ht(r,i)&&hn(e,"set",t,r):hn(e,"add",t,r)),c}deleteProperty(e,t){const r=be(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&hn(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!Jt(t)||!Pf.has(t))&&at(e,"has",t),r}ownKeys(e){return at(e,"iterate",ce(e)?"length":hr),Reflect.ownKeys(e)}}class y_ extends Cf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const v_=new kf,E_=new y_,T_=new kf(!0);const wl=n=>n,Qi=n=>Reflect.getPrototypeOf(n);function w_(n,e,t){return function(...r){const s=this.__v_raw,i=Ae(s),a=Lr(i),l=n==="entries"||n===Symbol.iterator&&a,c=n==="keys"&&a,h=s[n](...r),f=t?wl:e?Gr:xt;return!e&&at(i,"iterate",c?Tl:hr),et(Object.create(h),{next(){const{value:g,done:y}=h.next();return y?{value:g,done:y}:{value:l?[f(g[0]),f(g[1])]:f(g),done:y}}})}}function Yi(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function I_(n,e){const t={get(s){const i=this.__v_raw,a=Ae(i),l=Ae(s);n||(Ht(s,l)&&at(a,"get",s),at(a,"get",l));const{has:c}=Qi(a),h=e?wl:n?Gr:xt;if(c.call(a,s))return h(i.get(s));if(c.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!n&&at(Ae(s),"iterate",hr),s.size},has(s){const i=this.__v_raw,a=Ae(i),l=Ae(s);return n||(Ht(s,l)&&at(a,"has",s),at(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=Ae(l),h=e?wl:n?Gr:xt;return!n&&at(c,"iterate",hr),l.forEach((f,g)=>s.call(i,h(f),h(g),a))}};return et(t,n?{add:Yi("add"),set:Yi("set"),delete:Yi("delete"),clear:Yi("clear")}:{add(s){const i=Ae(this),a=Qi(i),l=Ae(s),c=!e&&!kt(s)&&!vn(s)?l:s;return a.has.call(i,c)||Ht(s,c)&&a.has.call(i,s)||Ht(l,c)&&a.has.call(i,l)||(i.add(c),hn(i,"add",c,c)),this},set(s,i){!e&&!kt(i)&&!vn(i)&&(i=Ae(i));const a=Ae(this),{has:l,get:c}=Qi(a);let h=l.call(a,s);h||(s=Ae(s),h=l.call(a,s));const f=c.call(a,s);return a.set(s,i),h?Ht(i,f)&&hn(a,"set",s,i):hn(a,"add",s,i),this},delete(s){const i=Ae(this),{has:a,get:l}=Qi(i);let c=a.call(i,s);c||(s=Ae(s),c=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&hn(i,"delete",s,void 0),h},clear(){const s=Ae(this),i=s.size!==0,a=s.clear();return i&&hn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=w_(s,n,e)}),t}function uc(n,e){const t=I_(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(be(t,s)&&s in r?t:r,s,i)}const A_={get:uc(!1,!1)},b_={get:uc(!1,!0)},R_={get:uc(!0,!1)};const Vf=new WeakMap,Df=new WeakMap,Nf=new WeakMap,S_=new WeakMap;function P_(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hc(n){return vn(n)?n:dc(n,!1,v_,A_,Vf)}function C_(n){return dc(n,!1,T_,b_,Df)}function Il(n){return dc(n,!0,E_,R_,Nf)}function dc(n,e,t,r,s){if(!Se(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const i=s.get(n);if(i)return i;const a=P_(e_(n));if(a===0)return n;const l=new Proxy(n,a===2?r:t);return s.set(n,l),l}function dr(n){return vn(n)?dr(n.__v_raw):!!(n&&n.__v_isReactive)}function vn(n){return!!(n&&n.__v_isReadonly)}function kt(n){return!!(n&&n.__v_isShallow)}function fc(n){return n?!!n.__v_raw:!1}function Ae(n){const e=n&&n.__v_raw;return e?Ae(e):n}function k_(n){return!be(n,"__v_skip")&&Object.isExtensible(n)&&mf(n,"__v_skip",!0),n}const xt=n=>Se(n)?hc(n):n,Gr=n=>Se(n)?Il(n):n;function ut(n){return n?n.__v_isRef===!0:!1}function Fe(n){return V_(n,!1)}function V_(n,e){return ut(n)?n:new D_(n,e)}class D_{constructor(e,t){this.dep=new cc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ae(e),this._value=t?e:xt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||kt(e)||vn(e);e=r?e:Ae(e),Ht(e,t)&&(this._rawValue=e,this._value=r?e:xt(e),this.dep.trigger())}}function Or(n){return ut(n)?n.value:n}const N_={get:(n,e,t)=>e==="__v_raw"?n:Or(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return ut(s)&&!ut(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function Of(n){return dr(n)?n:new Proxy(n,N_)}class O_{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new cc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ei-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ke!==this)return wf(this,!0),!0}get value(){const e=this.dep.track();return bf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function M_(n,e,t=!1){let r,s;return fe(n)?r=n:(r=n.get,s=n.set),new O_(r,s,t)}const Ji={},yo=new WeakMap;let ar;function x_(n,e=!1,t=ar){if(t){let r=yo.get(t);r||yo.set(t,r=[]),r.push(n)}}function L_(n,e,t=Ce){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=t,h=H=>s?H:kt(H)||s===!1||s===0?dn(H,1):dn(H);let f,g,y,w,P=!1,C=!1;if(ut(n)?(g=()=>n.value,P=kt(n)):dr(n)?(g=()=>h(n),P=!0):ce(n)?(C=!0,P=n.some(H=>dr(H)||kt(H)),g=()=>n.map(H=>{if(ut(H))return H.value;if(dr(H))return h(H);if(fe(H))return c?c(H,2):H()})):fe(n)?e?g=c?()=>c(n,2):n:g=()=>{if(y){Xt();try{y()}finally{Zt()}}const H=ar;ar=f;try{return c?c(n,3,[w]):n(w)}finally{ar=H}}:g=Kt,e&&s){const H=g,ne=s===!0?1/0:s;g=()=>dn(H(),ne)}const k=h_(),$=()=>{f.stop(),k&&k.active&&nc(k.effects,f)};if(i&&e){const H=e;e=(...ne)=>{const J=H(...ne);return $(),J}}let L=C?new Array(n.length).fill(Ji):Ji;const G=H=>{if(!(!(f.flags&1)||!f.dirty&&!H))if(e){const ne=f.run();if(H||s||P||(C?ne.some((J,_)=>Ht(J,L[_])):Ht(ne,L))){y&&y();const J=ar;ar=f;try{const _=[ne,L===Ji?void 0:C&&L[0]===Ji?[]:L,w];L=ne,c?c(e,3,_):e(..._)}finally{ar=J}}}else f.run()};return l&&l(G),f=new Ef(g),f.scheduler=a?()=>a(G,!1):G,w=H=>x_(H,!1,f),y=f.onStop=()=>{const H=yo.get(f);if(H){if(c)c(H,4);else for(const ne of H)ne();yo.delete(f)}},e?r?G(!0):L=f.run():a?a(G.bind(null,!0),!0):f.run(),$.pause=f.pause.bind(f),$.resume=f.resume.bind(f),$.stop=$,$}function dn(n,e=1/0,t){if(e<=0||!Se(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,ut(n))dn(n.value,e,t);else if(ce(n))for(let r=0;r<n.length;r++)dn(n[r],e,t);else if(hf(n)||Lr(n))n.forEach(r=>{dn(r,e,t)});else if(pf(n)){for(const r in n)dn(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&dn(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _i(n,e,t,r){try{return r?n(...r):n()}catch(s){Go(s,e,t)}}function Lt(n,e,t,r){if(fe(n)){const s=_i(n,e,t,r);return s&&df(s)&&s.catch(i=>{Go(i,e,t)}),s}if(ce(n)){const s=[];for(let i=0;i<n.length;i++)s.push(Lt(n[i],e,t,r));return s}}function Go(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ce;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const f=l.ec;if(f){for(let g=0;g<f.length;g++)if(f[g](n,c,h)===!1)return}l=l.parent}if(i){Xt(),_i(i,null,10,[n,c,h]),Zt();return}}F_(n,t,s,r,a)}function F_(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const mt=[];let jt=-1;const Fr=[];let Dn=null,Cr=0;const Mf=Promise.resolve();let vo=null;function xf(n){const e=vo||Mf;return n?e.then(this?n.bind(this):n):e}function U_(n){let e=jt+1,t=mt.length;for(;e<t;){const r=e+t>>>1,s=mt[r],i=ni(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function pc(n){if(!(n.flags&1)){const e=ni(n),t=mt[mt.length-1];!t||!(n.flags&2)&&e>=ni(t)?mt.push(n):mt.splice(U_(e),0,n),n.flags|=1,Lf()}}function Lf(){vo||(vo=Mf.then(Uf))}function B_(n){ce(n)?Fr.push(...n):Dn&&n.id===-1?Dn.splice(Cr+1,0,n):n.flags&1||(Fr.push(n),n.flags|=1),Lf()}function ph(n,e,t=jt+1){for(;t<mt.length;t++){const r=mt[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;mt.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ff(n){if(Fr.length){const e=[...new Set(Fr)].sort((t,r)=>ni(t)-ni(r));if(Fr.length=0,Dn){Dn.push(...e);return}for(Dn=e,Cr=0;Cr<Dn.length;Cr++){const t=Dn[Cr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Dn=null,Cr=0}}const ni=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Uf(n){try{for(jt=0;jt<mt.length;jt++){const e=mt[jt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),_i(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;jt<mt.length;jt++){const e=mt[jt];e&&(e.flags&=-2)}jt=-1,mt.length=0,Ff(),vo=null,(mt.length||Fr.length)&&Uf()}}let Ct=null,Bf=null;function Eo(n){const e=Ct;return Ct=n,Bf=n&&n.type.__scopeId||null,e}function $_(n,e=Ct,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&Sh(-1);const i=Eo(e);let a;try{a=n(...s)}finally{Eo(i),r._d&&Sh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function cn(n,e){if(Ct===null)return n;const t=ea(Ct),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=Ce]=e[s];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&dn(a),r.push({dir:i,instance:t,value:a,oldValue:void 0,arg:l,modifiers:c}))}return n}function sr(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(Xt(),Lt(c,t,8,[n.el,l,n,e]),Zt())}}function oo(n,e){if(_t){let t=_t.provides;const r=_t.parent&&_t.parent.provides;r===t&&(t=_t.provides=Object.create(r)),t[n]=e}}function At(n,e,t=!1){const r=$y();if(r||Br){let s=Br?Br._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&fe(e)?e.call(r&&r.proxy):e}}const j_=Symbol.for("v-scx"),q_=()=>At(j_);function za(n,e,t){return $f(n,e,t)}function $f(n,e,t=Ce){const{immediate:r,deep:s,flush:i,once:a}=t,l=et({},t),c=e&&r||!e&&i!=="post";let h;if(si){if(i==="sync"){const w=q_();h=w.__watcherHandles||(w.__watcherHandles=[])}else if(!c){const w=()=>{};return w.stop=Kt,w.resume=Kt,w.pause=Kt,w}}const f=_t;l.call=(w,P,C)=>Lt(w,f,P,C);let g=!1;i==="post"?l.scheduler=w=>{pt(w,f&&f.suspense)}:i!=="sync"&&(g=!0,l.scheduler=(w,P)=>{P?w():pc(w)}),l.augmentJob=w=>{e&&(w.flags|=4),g&&(w.flags|=2,f&&(w.id=f.uid,w.i=f))};const y=L_(n,e,l);return si&&(h?h.push(y):c&&y()),y}function W_(n,e,t){const r=this.proxy,s=Me(n)?n.includes(".")?jf(r,n):()=>r[n]:n.bind(r,r);let i;fe(e)?i=e:(i=e.handler,t=e);const a=yi(this),l=$f(s,i.bind(r),t);return a(),l}function jf(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const Vn=new WeakMap,qf=Symbol("_vte"),H_=n=>n.__isTeleport,cr=n=>n&&(n.disabled||n.disabled===""),K_=n=>n&&(n.defer||n.defer===""),gh=n=>typeof SVGElement<"u"&&n instanceof SVGElement,mh=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,Al=(n,e)=>{const t=n&&n.to;return Me(t)?e?e(t):null:t},z_={name:"Teleport",__isTeleport:!0,process(n,e,t,r,s,i,a,l,c,h){const{mc:f,pc:g,pbc:y,o:{insert:w,querySelector:P,createText:C,createComment:k,parentNode:$}}=h,L=cr(e.props);let{dynamicChildren:G}=e;const H=(_,m,v)=>{_.shapeFlag&16&&f(_.children,m,v,s,i,a,l,c)},ne=(_=e)=>{const m=cr(_.props),v=_.target=Al(_.props,P),I=bl(v,_,C,w);v&&(a!=="svg"&&gh(v)?a="svg":a!=="mathml"&&mh(v)&&(a="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(v),m||(H(_,v,I),Ds(_,!1)))},J=_=>{const m=()=>{if(Vn.get(_)===m){if(Vn.delete(_),cr(_.props)){const v=$(_.el)||t;H(_,v,_.anchor),Ds(_,!0)}ne(_)}};Vn.set(_,m),pt(m,i)};if(n==null){const _=e.el=C(""),m=e.anchor=C("");if(w(_,t,r),w(m,t,r),K_(e.props)||i&&i.pendingBranch){J(e);return}L&&(H(e,t,m),Ds(e,!0)),ne()}else{e.el=n.el;const _=e.anchor=n.anchor,m=Vn.get(n);if(m){m.flags|=8,Vn.delete(n),J(e);return}e.targetStart=n.targetStart;const v=e.target=n.target,I=e.targetAnchor=n.targetAnchor,A=cr(n.props),R=A?t:v,T=A?_:I;if(a==="svg"||gh(v)?a="svg":(a==="mathml"||mh(v))&&(a="mathml"),G?(y(n.dynamicChildren,G,R,s,i,a,l),vc(n,e,!0)):c||g(n,e,R,T,s,i,a,l,!1),L)A?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):Xi(e,t,_,h,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const ae=Al(e.props,P);ae&&(e.target=ae,Xi(e,ae,null,h,0))}else A&&Xi(e,v,I,h,1);Ds(e,L)}},remove(n,e,t,{um:r,o:{remove:s}},i){const{shapeFlag:a,children:l,anchor:c,targetStart:h,targetAnchor:f,target:g,props:y}=n,w=cr(y),P=i||!w,C=Vn.get(n);if(C&&(C.flags|=8,Vn.delete(n)),g&&(s(h),s(f)),i&&s(c),!C&&(w||g)&&a&16)for(let k=0;k<l.length;k++){const $=l[k];r($,e,t,P,!!$.dynamicChildren)}},move:Xi,hydrate:G_};function Xi(n,e,t,{o:{insert:r},m:s},i=2){i===0&&r(n.targetAnchor,e,t);const{el:a,anchor:l,shapeFlag:c,children:h,props:f}=n,g=i===2;if(g&&r(a,e,t),!Vn.has(n)&&(!g||cr(f))&&c&16)for(let y=0;y<h.length;y++)s(h[y],e,t,2);g&&r(l,e,t)}function G_(n,e,t,r,s,i,{o:{nextSibling:a,parentNode:l,querySelector:c,insert:h,createText:f}},g){function y(k,$){let L=$;for(;L;){if(L&&L.nodeType===8){if(L.data==="teleport start anchor")e.targetStart=L;else if(L.data==="teleport anchor"){e.targetAnchor=L,k._lpa=e.targetAnchor&&a(e.targetAnchor);break}}L=a(L)}}function w(k,$){$.anchor=g(a(k),$,l(k),t,r,s,i)}const P=e.target=Al(e.props,c),C=cr(e.props);if(P){const k=P._lpa||P.firstChild;e.shapeFlag&16&&(C?(w(n,e),y(P,k),e.targetAnchor||bl(P,e,f,h,l(n)===P?n:null)):(e.anchor=a(n),y(P,k),e.targetAnchor||bl(P,e,f,h),g(k&&a(k),e,P,t,r,s,i))),Ds(e,C)}else C&&e.shapeFlag&16&&(w(n,e),e.targetStart=n,e.targetAnchor=a(n));return e.anchor&&a(e.anchor)}const Q_=z_;function Ds(n,e){const t=n.ctx;if(t&&t.ut){let r,s;for(e?(r=n.el,s=n.anchor):(r=n.targetStart,s=n.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",t.uid),r=r.nextSibling;t.ut()}}function bl(n,e,t,r,s=null){const i=e.targetStart=t(""),a=e.targetAnchor=t("");return i[qf]=a,n&&(r(i,n,s),r(a,n,s)),a}const Ga=Symbol("_leaveCb");function gc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,gc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Qo(n,e){return fe(n)?et({name:n.name},e,{setup:n}):n}function Wf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function _h(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const To=new WeakMap;function Hs(n,e,t,r,s=!1){if(ce(n)){n.forEach((C,k)=>Hs(C,e&&(ce(e)?e[k]:e),t,r,s));return}if(Ks(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Hs(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?ea(r.component):r.el,a=s?null:i,{i:l,r:c}=n,h=e&&e.r,f=l.refs===Ce?l.refs={}:l.refs,g=l.setupState,y=Ae(g),w=g===Ce?uf:C=>_h(f,C)?!1:be(y,C),P=(C,k)=>!(k&&_h(f,k));if(h!=null&&h!==c){if(yh(e),Me(h))f[h]=null,w(h)&&(g[h]=null);else if(ut(h)){const C=e;P(h,C.k)&&(h.value=null),C.k&&(f[C.k]=null)}}if(fe(c)){Xt();try{_i(c,l,12,[a,f])}finally{Zt()}}else{const C=Me(c),k=ut(c);if(C||k){const $=()=>{if(n.f){const L=C?w(c)?g[c]:f[c]:P()||!n.k?c.value:f[n.k];if(s)ce(L)&&nc(L,i);else if(ce(L))L.includes(i)||L.push(i);else if(C)f[c]=[i],w(c)&&(g[c]=f[c]);else{const G=[i];P(c,n.k)&&(c.value=G),n.k&&(f[n.k]=G)}}else C?(f[c]=a,w(c)&&(g[c]=a)):k&&(P(c,n.k)&&(c.value=a),n.k&&(f[n.k]=a))};if(a){const L=()=>{$(),To.delete(n)};L.id=-1,To.set(n,L),pt(L,t)}else yh(n),$()}}}function yh(n){const e=To.get(n);e&&(e.flags|=8,To.delete(n))}Ko().requestIdleCallback;Ko().cancelIdleCallback;const Ks=n=>!!n.type.__asyncLoader,Hf=n=>n.type.__isKeepAlive;function Y_(n,e){Kf(n,"a",e)}function J_(n,e){Kf(n,"da",e)}function Kf(n,e,t=_t){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Yo(e,r,t),t){let s=t.parent;for(;s&&s.parent;)Hf(s.parent.vnode)&&X_(r,e,t,s),s=s.parent}}function X_(n,e,t,r){const s=Yo(e,n,r,!0);Jo(()=>{nc(r[e],s)},t)}function Yo(n,e,t=_t,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...a)=>{Xt();const l=yi(t),c=Lt(e,t,n,a);return l(),Zt(),c});return r?s.unshift(i):s.push(i),i}}const An=n=>(e,t=_t)=>{(!si||n==="sp")&&Yo(n,(...r)=>e(...r),t)},Z_=An("bm"),mc=An("m"),ey=An("bu"),ty=An("u"),ny=An("bum"),Jo=An("um"),ry=An("sp"),sy=An("rtg"),iy=An("rtc");function oy(n,e=_t){Yo("ec",n,e)}const ay=Symbol.for("v-ndc");function Ur(n,e,t,r){let s;const i=t,a=ce(n);if(a||Me(n)){const l=a&&dr(n);let c=!1,h=!1;l&&(c=!kt(n),h=vn(n),n=zo(n)),s=new Array(n.length);for(let f=0,g=n.length;f<g;f++)s[f]=e(c?h?Gr(xt(n[f])):xt(n[f]):n[f],f,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let l=0;l<n;l++)s[l]=e(l+1,l,void 0,i)}else if(Se(n))if(n[Symbol.iterator])s=Array.from(n,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(n);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const f=l[c];s[c]=e(n[f],f,c,i)}}else s=[];return s}const Rl=n=>n?fp(n)?ea(n):Rl(n.parent):null,zs=et(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Rl(n.parent),$root:n=>Rl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Gf(n),$forceUpdate:n=>n.f||(n.f=()=>{pc(n.update)}),$nextTick:n=>n.n||(n.n=xf.bind(n.proxy)),$watch:n=>W_.bind(n)}),Qa=(n,e)=>n!==Ce&&!n.__isScriptSetup&&be(n,e),ly={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=n;if(e[0]!=="$"){const y=a[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(Qa(r,e))return a[e]=1,r[e];if(s!==Ce&&be(s,e))return a[e]=2,s[e];if(be(i,e))return a[e]=3,i[e];if(t!==Ce&&be(t,e))return a[e]=4,t[e];Sl&&(a[e]=0)}}const h=zs[e];let f,g;if(h)return e==="$attrs"&&at(n.attrs,"get",""),h(n);if((f=l.__cssModules)&&(f=f[e]))return f;if(t!==Ce&&be(t,e))return a[e]=4,t[e];if(g=c.config.globalProperties,be(g,e))return g[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return Qa(s,e)?(s[e]=t,!0):r!==Ce&&be(r,e)?(r[e]=t,!0):be(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,props:i,type:a}},l){let c;return!!(t[l]||n!==Ce&&l[0]!=="$"&&be(n,l)||Qa(e,l)||be(i,l)||be(r,l)||be(zs,l)||be(s.config.globalProperties,l)||(c=a.__cssModules)&&c[l])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:be(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function vh(n){return ce(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Sl=!0;function cy(n){const e=Gf(n),t=n.proxy,r=n.ctx;Sl=!1,e.beforeCreate&&Eh(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:f,beforeMount:g,mounted:y,beforeUpdate:w,updated:P,activated:C,deactivated:k,beforeDestroy:$,beforeUnmount:L,destroyed:G,unmounted:H,render:ne,renderTracked:J,renderTriggered:_,errorCaptured:m,serverPrefetch:v,expose:I,inheritAttrs:A,components:R,directives:T,filters:ae}=e;if(h&&uy(h,r,null),a)for(const Ie in a){const Ee=a[Ie];fe(Ee)&&(r[Ie]=Ee.bind(t))}if(s){const Ie=s.call(t,t);Se(Ie)&&(n.data=hc(Ie))}if(Sl=!0,i)for(const Ie in i){const Ee=i[Ie],Dt=fe(Ee)?Ee.bind(t,t):fe(Ee.get)?Ee.get.bind(t,t):Kt,Jn=!fe(Ee)&&fe(Ee.set)?Ee.set.bind(t):Kt,nn=Os({get:Dt,set:Jn});Object.defineProperty(r,Ie,{enumerable:!0,configurable:!0,get:()=>nn.value,set:We=>nn.value=We})}if(l)for(const Ie in l)zf(l[Ie],r,t,Ie);if(c){const Ie=fe(c)?c.call(t):c;Reflect.ownKeys(Ie).forEach(Ee=>{oo(Ee,Ie[Ee])})}f&&Eh(f,n,"c");function te(Ie,Ee){ce(Ee)?Ee.forEach(Dt=>Ie(Dt.bind(t))):Ee&&Ie(Ee.bind(t))}if(te(Z_,g),te(mc,y),te(ey,w),te(ty,P),te(Y_,C),te(J_,k),te(oy,m),te(iy,J),te(sy,_),te(ny,L),te(Jo,H),te(ry,v),ce(I))if(I.length){const Ie=n.exposed||(n.exposed={});I.forEach(Ee=>{Object.defineProperty(Ie,Ee,{get:()=>t[Ee],set:Dt=>t[Ee]=Dt,enumerable:!0})})}else n.exposed||(n.exposed={});ne&&n.render===Kt&&(n.render=ne),A!=null&&(n.inheritAttrs=A),R&&(n.components=R),T&&(n.directives=T),v&&Wf(n)}function uy(n,e,t=Kt){ce(n)&&(n=Pl(n));for(const r in n){const s=n[r];let i;Se(s)?"default"in s?i=At(s.from||r,s.default,!0):i=At(s.from||r):i=At(s),ut(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function Eh(n,e,t){Lt(ce(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function zf(n,e,t,r){let s=r.includes(".")?jf(t,r):()=>t[r];if(Me(n)){const i=e[n];fe(i)&&za(s,i)}else if(fe(n))za(s,n.bind(t));else if(Se(n))if(ce(n))n.forEach(i=>zf(i,e,t,r));else{const i=fe(n.handler)?n.handler.bind(t):e[n.handler];fe(i)&&za(s,i,n)}}function Gf(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!t&&!r?c=e:(c={},s.length&&s.forEach(h=>wo(c,h,a,!0)),wo(c,e,a)),Se(e)&&i.set(e,c),c}function wo(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&wo(n,i,t,!0),s&&s.forEach(a=>wo(n,a,t,!0));for(const a in e)if(!(r&&a==="expose")){const l=hy[a]||t&&t[a];n[a]=l?l(n[a],e[a]):e[a]}return n}const hy={data:Th,props:wh,emits:wh,methods:Ns,computed:Ns,beforeCreate:ft,created:ft,beforeMount:ft,mounted:ft,beforeUpdate:ft,updated:ft,beforeDestroy:ft,beforeUnmount:ft,destroyed:ft,unmounted:ft,activated:ft,deactivated:ft,errorCaptured:ft,serverPrefetch:ft,components:Ns,directives:Ns,watch:fy,provide:Th,inject:dy};function Th(n,e){return e?n?function(){return et(fe(n)?n.call(this,this):n,fe(e)?e.call(this,this):e)}:e:n}function dy(n,e){return Ns(Pl(n),Pl(e))}function Pl(n){if(ce(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function ft(n,e){return n?[...new Set([].concat(n,e))]:e}function Ns(n,e){return n?et(Object.create(null),n,e):e}function wh(n,e){return n?ce(n)&&ce(e)?[...new Set([...n,...e])]:et(Object.create(null),vh(n),vh(e??{})):e}function fy(n,e){if(!n)return e;if(!e)return n;const t=et(Object.create(null),n);for(const r in e)t[r]=ft(n[r],e[r]);return t}function Qf(){return{app:null,config:{isNativeTag:uf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let py=0;function gy(n,e){return function(r,s=null){fe(r)||(r=et({},r)),s!=null&&!Se(s)&&(s=null);const i=Qf(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:py++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:zy,get config(){return i.config},set config(f){},use(f,...g){return a.has(f)||(f&&fe(f.install)?(a.add(f),f.install(h,...g)):fe(f)&&(a.add(f),f(h,...g))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,g){return g?(i.components[f]=g,h):i.components[f]},directive(f,g){return g?(i.directives[f]=g,h):i.directives[f]},mount(f,g,y){if(!c){const w=h._ceVNode||_n(r,s);return w.appContext=i,y===!0?y="svg":y===!1&&(y=void 0),n(w,f,y),c=!0,h._container=f,f.__vue_app__=h,ea(w.component)}},onUnmount(f){l.push(f)},unmount(){c&&(Lt(l,h._instance,16),n(null,h._container),delete h._container.__vue_app__)},provide(f,g){return i.provides[f]=g,h},runWithContext(f){const g=Br;Br=h;try{return f()}finally{Br=g}}};return h}}let Br=null;const my=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Ot(e)}Modifiers`]||n[`${Gn(e)}Modifiers`];function _y(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Ce;let s=t;const i=e.startsWith("update:"),a=i&&my(r,e.slice(7));a&&(a.trim&&(s=t.map(f=>Me(f)?f.trim():f)),a.number&&(s=t.map(sc)));let l,c=r[l=ja(e)]||r[l=ja(Ot(e))];!c&&i&&(c=r[l=ja(Gn(e))]),c&&Lt(c,n,6,s);const h=r[l+"Once"];if(h){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,Lt(h,n,6,s)}}const yy=new WeakMap;function Yf(n,e,t=!1){const r=t?yy:e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let a={},l=!1;if(!fe(n)){const c=h=>{const f=Yf(h,e,!0);f&&(l=!0,et(a,f))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!i&&!l?(Se(n)&&r.set(n,null),null):(ce(i)?i.forEach(c=>a[c]=null):et(a,i),Se(n)&&r.set(n,a),a)}function Xo(n,e){return!n||!qo(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),be(n,e[0].toLowerCase()+e.slice(1))||be(n,Gn(e))||be(n,e))}function Ih(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:f,props:g,data:y,setupState:w,ctx:P,inheritAttrs:C}=n,k=Eo(n);let $,L;try{if(t.shapeFlag&4){const H=s||r,ne=H;$=Wt(h.call(ne,H,f,g,w,y,P)),L=l}else{const H=e;$=Wt(H.length>1?H(g,{attrs:l,slots:a,emit:c}):H(g,null)),L=e.props?l:vy(l)}}catch(H){Gs.length=0,Go(H,n,1),$=_n(qn)}let G=$;if(L&&C!==!1){const H=Object.keys(L),{shapeFlag:ne}=G;H.length&&ne&7&&(i&&H.some(Wo)&&(L=Ey(L,i)),G=Qr(G,L,!1,!0))}return t.dirs&&(G=Qr(G,null,!1,!0),G.dirs=G.dirs?G.dirs.concat(t.dirs):t.dirs),t.transition&&gc(G,t.transition),$=G,Eo(k),$}const vy=n=>{let e;for(const t in n)(t==="class"||t==="style"||qo(t))&&((e||(e={}))[t]=n[t]);return e},Ey=(n,e)=>{const t={};for(const r in n)(!Wo(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function Ty(n,e,t){const{props:r,children:s,component:i}=n,{props:a,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?Ah(r,a,h):!!a;if(c&8){const f=e.dynamicProps;for(let g=0;g<f.length;g++){const y=f[g];if(Jf(a,r,y)&&!Xo(h,y))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?Ah(r,a,h):!0:!!a;return!1}function Ah(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(Jf(e,n,i)&&!Xo(t,i))return!0}return!1}function Jf(n,e,t){const r=n[t],s=e[t];return t==="style"&&Se(r)&&Se(s)?!ic(r,s):r!==s}function wy({vnode:n,parent:e,suspense:t},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=r,n=s),s===n)(n=e.vnode).el=r,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=r)}const Xf={},Zf=()=>Object.create(Xf),ep=n=>Object.getPrototypeOf(n)===Xf;function Iy(n,e,t,r=!1){const s={},i=Zf();n.propsDefaults=Object.create(null),tp(n,e,s,i);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=r?s:C_(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function Ay(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=n,l=Ae(s),[c]=n.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=n.vnode.dynamicProps;for(let g=0;g<f.length;g++){let y=f[g];if(Xo(n.emitsOptions,y))continue;const w=e[y];if(c)if(be(i,y))w!==i[y]&&(i[y]=w,h=!0);else{const P=Ot(y);s[P]=Cl(c,l,P,w,n,!1)}else w!==i[y]&&(i[y]=w,h=!0)}}}else{tp(n,e,s,i)&&(h=!0);let f;for(const g in l)(!e||!be(e,g)&&((f=Gn(g))===g||!be(e,f)))&&(c?t&&(t[g]!==void 0||t[f]!==void 0)&&(s[g]=Cl(c,l,g,void 0,n,!0)):delete s[g]);if(i!==l)for(const g in i)(!e||!be(e,g))&&(delete i[g],h=!0)}h&&hn(n.attrs,"set","")}function tp(n,e,t,r){const[s,i]=n.propsOptions;let a=!1,l;if(e)for(let c in e){if(js(c))continue;const h=e[c];let f;s&&be(s,f=Ot(c))?!i||!i.includes(f)?t[f]=h:(l||(l={}))[f]=h:Xo(n.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=Ae(t),h=l||Ce;for(let f=0;f<i.length;f++){const g=i[f];t[g]=Cl(s,c,g,h[g],n,!be(h,g))}}return a}function Cl(n,e,t,r,s,i){const a=n[t];if(a!=null){const l=be(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&fe(c)){const{propsDefaults:h}=s;if(t in h)r=h[t];else{const f=yi(s);r=h[t]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(t,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===Gn(t))&&(r=!0))}return r}const by=new WeakMap;function np(n,e,t=!1){const r=t?by:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,a={},l=[];let c=!1;if(!fe(n)){const f=g=>{c=!0;const[y,w]=np(g,e,!0);et(a,y),w&&l.push(...w)};!t&&e.mixins.length&&e.mixins.forEach(f),n.extends&&f(n.extends),n.mixins&&n.mixins.forEach(f)}if(!i&&!c)return Se(n)&&r.set(n,xr),xr;if(ce(i))for(let f=0;f<i.length;f++){const g=Ot(i[f]);bh(g)&&(a[g]=Ce)}else if(i)for(const f in i){const g=Ot(f);if(bh(g)){const y=i[f],w=a[g]=ce(y)||fe(y)?{type:y}:et({},y),P=w.type;let C=!1,k=!0;if(ce(P))for(let $=0;$<P.length;++$){const L=P[$],G=fe(L)&&L.name;if(G==="Boolean"){C=!0;break}else G==="String"&&(k=!1)}else C=fe(P)&&P.name==="Boolean";w[0]=C,w[1]=k,(C||be(w,"default"))&&l.push(g)}}const h=[a,l];return Se(n)&&r.set(n,h),h}function bh(n){return n[0]!=="$"&&!js(n)}const _c=n=>n==="_"||n==="_ctx"||n==="$stable",yc=n=>ce(n)?n.map(Wt):[Wt(n)],Ry=(n,e,t)=>{if(e._n)return e;const r=$_((...s)=>yc(e(...s)),t);return r._c=!1,r},rp=(n,e,t)=>{const r=n._ctx;for(const s in n){if(_c(s))continue;const i=n[s];if(fe(i))e[s]=Ry(s,i,r);else if(i!=null){const a=yc(i);e[s]=()=>a}}},sp=(n,e)=>{const t=yc(e);n.slots.default=()=>t},ip=(n,e,t)=>{for(const r in e)(t||!_c(r))&&(n[r]=e[r])},Sy=(n,e,t)=>{const r=n.slots=Zf();if(n.vnode.shapeFlag&32){const s=e._;s?(ip(r,e,t),t&&mf(r,"_",s,!0)):rp(e,r)}else e&&sp(n,e)},Py=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,a=Ce;if(r.shapeFlag&32){const l=e._;l?t&&l===1?i=!1:ip(s,e,t):(i=!e.$stable,rp(e,s)),a=e}else e&&(sp(n,e),a={default:1});if(i)for(const l in s)!_c(l)&&a[l]==null&&delete s[l]},pt=Ny;function Cy(n){return ky(n)}function ky(n,e){const t=Ko();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:f,parentNode:g,nextSibling:y,setScopeId:w=Kt,insertStaticContent:P}=n,C=(E,b,D,F=null,x=null,O=null,z=void 0,q=null,j=!!b.dynamicChildren)=>{if(E===b)return;E&&!Ps(E,b)&&(F=rn(E),We(E,x,O,!0),E=null),b.patchFlag===-2&&(j=!1,b.dynamicChildren=null);const{type:M,ref:re,shapeFlag:Q}=b;switch(M){case Zo:k(E,b,D,F);break;case qn:$(E,b,D,F);break;case Ja:E==null&&L(b,D,F,z);break;case lt:R(E,b,D,F,x,O,z,q,j);break;default:Q&1?ne(E,b,D,F,x,O,z,q,j):Q&6?T(E,b,D,F,x,O,z,q,j):(Q&64||Q&128)&&M.process(E,b,D,F,x,O,z,q,j,Bt)}re!=null&&x?Hs(re,E&&E.ref,O,b||E,!b):re==null&&E&&E.ref!=null&&Hs(E.ref,null,O,E,!0)},k=(E,b,D,F)=>{if(E==null)r(b.el=l(b.children),D,F);else{const x=b.el=E.el;b.children!==E.children&&h(x,b.children)}},$=(E,b,D,F)=>{E==null?r(b.el=c(b.children||""),D,F):b.el=E.el},L=(E,b,D,F)=>{[E.el,E.anchor]=P(E.children,b,D,F,E.el,E.anchor)},G=({el:E,anchor:b},D,F)=>{let x;for(;E&&E!==b;)x=y(E),r(E,D,F),E=x;r(b,D,F)},H=({el:E,anchor:b})=>{let D;for(;E&&E!==b;)D=y(E),s(E),E=D;s(b)},ne=(E,b,D,F,x,O,z,q,j)=>{if(b.type==="svg"?z="svg":b.type==="math"&&(z="mathml"),E==null)J(b,D,F,x,O,z,q,j);else{const M=E.el&&E.el._isVueCE?E.el:null;try{M&&M._beginPatch(),v(E,b,x,O,z,q,j)}finally{M&&M._endPatch()}}},J=(E,b,D,F,x,O,z,q)=>{let j,M;const{props:re,shapeFlag:Q,transition:Z,dirs:ie}=E;if(j=E.el=a(E.type,O,re&&re.is,re),Q&8?f(j,E.children):Q&16&&m(E.children,j,null,F,x,Ya(E,O),z,q),ie&&sr(E,null,F,"created"),_(j,E,E.scopeId,z,F),re){for(const de in re)de!=="value"&&!js(de)&&i(j,de,null,re[de],O,F);"value"in re&&i(j,"value",null,re.value,O),(M=re.onVnodeBeforeMount)&&$t(M,F,E)}ie&&sr(E,null,F,"beforeMount");const se=Vy(x,Z);se&&Z.beforeEnter(j),r(j,b,D),((M=re&&re.onVnodeMounted)||se||ie)&&pt(()=>{try{M&&$t(M,F,E),se&&Z.enter(j),ie&&sr(E,null,F,"mounted")}finally{}},x)},_=(E,b,D,F,x)=>{if(D&&w(E,D),F)for(let O=0;O<F.length;O++)w(E,F[O]);if(x){let O=x.subTree;if(b===O||lp(O.type)&&(O.ssContent===b||O.ssFallback===b)){const z=x.vnode;_(E,z,z.scopeId,z.slotScopeIds,x.parent)}}},m=(E,b,D,F,x,O,z,q,j=0)=>{for(let M=j;M<E.length;M++){const re=E[M]=q?un(E[M]):Wt(E[M]);C(null,re,b,D,F,x,O,z,q)}},v=(E,b,D,F,x,O,z)=>{const q=b.el=E.el;let{patchFlag:j,dynamicChildren:M,dirs:re}=b;j|=E.patchFlag&16;const Q=E.props||Ce,Z=b.props||Ce;let ie;if(D&&ir(D,!1),(ie=Z.onVnodeBeforeUpdate)&&$t(ie,D,b,E),re&&sr(b,E,D,"beforeUpdate"),D&&ir(D,!0),M&&(!E.dynamicChildren||E.dynamicChildren.length!==M.length)&&(j=0,z=!1,M=null),(Q.innerHTML&&Z.innerHTML==null||Q.textContent&&Z.textContent==null)&&f(q,""),M?I(E.dynamicChildren,M,q,D,F,Ya(b,x),O):z||Ee(E,b,q,null,D,F,Ya(b,x),O,!1),j>0){if(j&16)A(q,Q,Z,D,x);else if(j&2&&Q.class!==Z.class&&i(q,"class",null,Z.class,x),j&4&&i(q,"style",Q.style,Z.style,x),j&8){const se=b.dynamicProps;for(let de=0;de<se.length;de++){const ve=se[de],Oe=Q[ve],$e=Z[ve];($e!==Oe||ve==="value")&&i(q,ve,Oe,$e,x,D)}}j&1&&E.children!==b.children&&f(q,b.children)}else!z&&M==null&&A(q,Q,Z,D,x);((ie=Z.onVnodeUpdated)||re)&&pt(()=>{ie&&$t(ie,D,b,E),re&&sr(b,E,D,"updated")},F)},I=(E,b,D,F,x,O,z)=>{for(let q=0;q<b.length;q++){const j=E[q],M=b[q],re=j.el&&(j.type===lt||!Ps(j,M)||j.shapeFlag&198)?g(j.el):D;C(j,M,re,null,F,x,O,z,!0)}},A=(E,b,D,F,x)=>{if(b!==D){if(b!==Ce)for(const O in b)!js(O)&&!(O in D)&&i(E,O,b[O],null,x,F);for(const O in D){if(js(O))continue;const z=D[O],q=b[O];z!==q&&O!=="value"&&i(E,O,q,z,x,F)}"value"in D&&i(E,"value",b.value,D.value,x)}},R=(E,b,D,F,x,O,z,q,j)=>{const M=b.el=E?E.el:l(""),re=b.anchor=E?E.anchor:l("");let{patchFlag:Q,dynamicChildren:Z,slotScopeIds:ie}=b;ie&&(q=q?q.concat(ie):ie),E==null?(r(M,D,F),r(re,D,F),m(b.children||[],D,re,x,O,z,q,j)):Q>0&&Q&64&&Z&&E.dynamicChildren&&E.dynamicChildren.length===Z.length?(I(E.dynamicChildren,Z,D,x,O,z,q),(b.key!=null||x&&b===x.subTree)&&vc(E,b,!0)):Ee(E,b,D,re,x,O,z,q,j)},T=(E,b,D,F,x,O,z,q,j)=>{b.slotScopeIds=q,E==null?b.shapeFlag&512?x.ctx.activate(b,D,F,z,j):ae(b,D,F,x,O,z,j):Y(E,b,j)},ae=(E,b,D,F,x,O,z)=>{const q=E.component=By(E,F,x);if(Hf(E)&&(q.ctx.renderer=Bt),jy(q,!1,z),q.asyncDep){if(x&&x.registerDep(q,te,z),!E.el){const j=q.subTree=_n(qn);$(null,j,b,D),E.placeholder=j.el}}else te(q,E,b,D,x,O,z)},Y=(E,b,D)=>{const F=b.component=E.component;if(Ty(E,b,D))if(F.asyncDep&&!F.asyncResolved){Ie(F,b,D);return}else F.next=b,F.update();else b.el=E.el,F.vnode=b},te=(E,b,D,F,x,O,z)=>{const q=()=>{if(E.isMounted){let{next:Q,bu:Z,u:ie,parent:se,vnode:de}=E;{const nt=op(E);if(nt){Q&&(Q.el=de.el,Ie(E,Q,z)),nt.asyncDep.then(()=>{pt(()=>{E.isUnmounted||M()},x)});return}}let ve=Q,Oe;ir(E,!1),Q?(Q.el=de.el,Ie(E,Q,z)):Q=de,Z&&io(Z),(Oe=Q.props&&Q.props.onVnodeBeforeUpdate)&&$t(Oe,se,Q,de),ir(E,!0);const $e=Ih(E),Rt=E.subTree;E.subTree=$e,C(Rt,$e,g(Rt.el),rn(Rt),E,x,O),Q.el=$e.el,ve===null&&wy(E,$e.el),ie&&pt(ie,x),(Oe=Q.props&&Q.props.onVnodeUpdated)&&pt(()=>$t(Oe,se,Q,de),x)}else{let Q;const{el:Z,props:ie}=b,{bm:se,m:de,parent:ve,root:Oe,type:$e}=E,Rt=Ks(b);ir(E,!1),se&&io(se),!Rt&&(Q=ie&&ie.onVnodeBeforeMount)&&$t(Q,ve,b),ir(E,!0);{Oe.ce&&Oe.ce._hasShadowRoot()&&Oe.ce._injectChildStyle($e,E.parent?E.parent.type:void 0);const nt=E.subTree=Ih(E);C(null,nt,D,F,E,x,O),b.el=nt.el}if(de&&pt(de,x),!Rt&&(Q=ie&&ie.onVnodeMounted)){const nt=b;pt(()=>$t(Q,ve,nt),x)}(b.shapeFlag&256||ve&&Ks(ve.vnode)&&ve.vnode.shapeFlag&256)&&E.a&&pt(E.a,x),E.isMounted=!0,b=D=F=null}};E.scope.on();const j=E.effect=new Ef(q);E.scope.off();const M=E.update=j.run.bind(j),re=E.job=j.runIfDirty.bind(j);re.i=E,re.id=E.uid,j.scheduler=()=>pc(re),ir(E,!0),M()},Ie=(E,b,D)=>{b.component=E;const F=E.vnode.props;E.vnode=b,E.next=null,Ay(E,b.props,F,D),Py(E,b.children,D),Xt(),ph(E),Zt()},Ee=(E,b,D,F,x,O,z,q,j=!1)=>{const M=E&&E.children,re=E?E.shapeFlag:0,Q=b.children,{patchFlag:Z,shapeFlag:ie}=b;if(Z>0){if(Z&128){Jn(M,Q,D,F,x,O,z,q,j);return}else if(Z&256){Dt(M,Q,D,F,x,O,z,q,j);return}}ie&8?(re&16&&Zn(M,x,O),Q!==M&&f(D,Q)):re&16?ie&16?Jn(M,Q,D,F,x,O,z,q,j):Zn(M,x,O,!0):(re&8&&f(D,""),ie&16&&m(Q,D,F,x,O,z,q,j))},Dt=(E,b,D,F,x,O,z,q,j)=>{E=E||xr,b=b||xr;const M=E.length,re=b.length,Q=Math.min(M,re);let Z;for(Z=0;Z<Q;Z++){const ie=b[Z]=j?un(b[Z]):Wt(b[Z]);C(E[Z],ie,D,null,x,O,z,q,j)}M>re?Zn(E,x,O,!0,!1,Q):m(b,D,F,x,O,z,q,j,Q)},Jn=(E,b,D,F,x,O,z,q,j)=>{let M=0;const re=b.length;let Q=E.length-1,Z=re-1;for(;M<=Q&&M<=Z;){const ie=E[M],se=b[M]=j?un(b[M]):Wt(b[M]);if(Ps(ie,se))C(ie,se,D,null,x,O,z,q,j);else break;M++}for(;M<=Q&&M<=Z;){const ie=E[Q],se=b[Z]=j?un(b[Z]):Wt(b[Z]);if(Ps(ie,se))C(ie,se,D,null,x,O,z,q,j);else break;Q--,Z--}if(M>Q){if(M<=Z){const ie=Z+1,se=ie<re?b[ie].el:F;for(;M<=Z;)C(null,b[M]=j?un(b[M]):Wt(b[M]),D,se,x,O,z,q,j),M++}}else if(M>Z)for(;M<=Q;)We(E[M],x,O,!0),M++;else{const ie=M,se=M,de=new Map;for(M=se;M<=Z;M++){const Ge=b[M]=j?un(b[M]):Wt(b[M]);Ge.key!=null&&de.set(Ge.key,M)}let ve,Oe=0;const $e=Z-se+1;let Rt=!1,nt=0;const Rn=new Array($e);for(M=0;M<$e;M++)Rn[M]=0;for(M=ie;M<=Q;M++){const Ge=E[M];if(Oe>=$e){We(Ge,x,O,!0);continue}let St;if(Ge.key!=null)St=de.get(Ge.key);else for(ve=se;ve<=Z;ve++)if(Rn[ve-se]===0&&Ps(Ge,b[ve])){St=ve;break}St===void 0?We(Ge,x,O,!0):(Rn[St-se]=M+1,St>=nt?nt=St:Rt=!0,C(Ge,b[St],D,null,x,O,z,q,j),Oe++)}const ps=Rt?Dy(Rn):xr;for(ve=ps.length-1,M=$e-1;M>=0;M--){const Ge=se+M,St=b[Ge],Ni=b[Ge+1],Ir=Ge+1<re?Ni.el||ap(Ni):F;Rn[M]===0?C(null,St,D,Ir,x,O,z,q,j):Rt&&(ve<0||M!==ps[ve]?nn(St,D,Ir,2):ve--)}}},nn=(E,b,D,F,x=null)=>{const{el:O,type:z,transition:q,children:j,shapeFlag:M}=E;if(M&6){nn(E.component.subTree,b,D,F);return}if(M&128){E.suspense.move(b,D,F);return}if(M&64){z.move(E,b,D,Bt);return}if(z===lt){r(O,b,D);for(let Q=0;Q<j.length;Q++)nn(j[Q],b,D,F);r(E.anchor,b,D);return}if(z===Ja){G(E,b,D);return}if(F!==2&&M&1&&q)if(F===0)q.persisted&&!O[Ga]?r(O,b,D):(q.beforeEnter(O),r(O,b,D),pt(()=>q.enter(O),x));else{const{leave:Q,delayLeave:Z,afterLeave:ie}=q,se=()=>{E.ctx.isUnmounted?s(O):r(O,b,D)},de=()=>{const ve=O._isLeaving||!!O[Ga];O._isLeaving&&O[Ga](!0),q.persisted&&!ve?se():Q(O,()=>{se(),ie&&ie()})};Z?Z(O,se,de):de()}else r(O,b,D)},We=(E,b,D,F=!1,x=!1)=>{const{type:O,props:z,ref:q,children:j,dynamicChildren:M,shapeFlag:re,patchFlag:Q,dirs:Z,cacheIndex:ie,memo:se}=E;if(Q===-2&&(x=!1),q!=null&&(Xt(),Hs(q,null,D,E,!0),Zt()),ie!=null&&(b.renderCache[ie]=void 0),re&256){b.ctx.deactivate(E);return}const de=re&1&&Z,ve=!Ks(E);let Oe;if(ve&&(Oe=z&&z.onVnodeBeforeUnmount)&&$t(Oe,b,E),re&6)Xn(E.component,D,F);else{if(re&128){E.suspense.unmount(D,F);return}de&&sr(E,null,b,"beforeUnmount"),re&64?E.type.remove(E,b,D,Bt,F):M&&!M.hasOnce&&(O!==lt||Q>0&&Q&64)?Zn(M,b,D,!1,!0):(O===lt&&Q&384||!x&&re&16)&&Zn(j,b,D),F&&He(E)}const $e=se!=null&&ie==null;(ve&&(Oe=z&&z.onVnodeUnmounted)||de||$e)&&pt(()=>{Oe&&$t(Oe,b,E),de&&sr(E,null,b,"unmounted"),$e&&(E.el=null)},D)},He=E=>{const{type:b,el:D,anchor:F,transition:x}=E;if(b===lt){Sa(D,F);return}if(b===Ja){H(E);return}const O=()=>{s(D),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(E.shapeFlag&1&&x&&!x.persisted){const{leave:z,delayLeave:q}=x,j=()=>z(D,O);q?q(E.el,O,j):j()}else O()},Sa=(E,b)=>{let D;for(;E!==b;)D=y(E),s(E),E=D;s(b)},Xn=(E,b,D)=>{const{bum:F,scope:x,job:O,subTree:z,um:q,m:j,a:M}=E;Rh(j),Rh(M),F&&io(F),x.stop(),O&&(O.flags|=8,We(z,E,b,D)),q&&pt(q,b),pt(()=>{E.isUnmounted=!0},b)},Zn=(E,b,D,F=!1,x=!1,O=0)=>{for(let z=O;z<E.length;z++)We(E[z],b,D,F,x)},rn=E=>{if(E.shapeFlag&6)return rn(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const b=y(E.anchor||E.el),D=b&&b[qf];return D?y(D):b};let ds=!1;const Di=(E,b,D)=>{let F;E==null?b._vnode&&(We(b._vnode,null,null,!0),F=b._vnode.component):C(b._vnode||null,E,b,null,null,null,D),b._vnode=E,ds||(ds=!0,ph(F),Ff(),ds=!1)},Bt={p:C,um:We,m:nn,r:He,mt:ae,mc:m,pc:Ee,pbc:I,n:rn,o:n};return{render:Di,hydrate:void 0,createApp:gy(Di)}}function Ya({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ir({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Vy(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function vc(n,e,t=!1){const r=n.children,s=e.children;if(ce(r)&&ce(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=un(s[i]),l.el=a.el),!t&&l.patchFlag!==-2&&vc(a,l)),l.type===Zo&&(l.patchFlag===-1&&(l=s[i]=un(l)),l.el=a.el),l.type===qn&&!l.el&&(l.el=a.el)}}function Dy(n){const e=n.slice(),t=[0];let r,s,i,a,l;const c=n.length;for(r=0;r<c;r++){const h=n[r];if(h!==0){if(s=t[t.length-1],n[s]<h){e[r]=s,t.push(r);continue}for(i=0,a=t.length-1;i<a;)l=i+a>>1,n[t[l]]<h?i=l+1:a=l;h<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=e[a];return t}function op(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:op(e)}function Rh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function ap(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?ap(e.subTree):null}const lp=n=>n.__isSuspense;function Ny(n,e){e&&e.pendingBranch?ce(n)?e.effects.push(...n):e.effects.push(n):B_(n)}const lt=Symbol.for("v-fgt"),Zo=Symbol.for("v-txt"),qn=Symbol.for("v-cmt"),Ja=Symbol.for("v-stc"),Gs=[];let wt=null;function pe(n=!1){Gs.push(wt=n?null:[])}function Oy(){Gs.pop(),wt=Gs[Gs.length-1]||null}let ri=1;function Sh(n,e=!1){ri+=n,n<0&&wt&&e&&(wt.hasOnce=!0)}function cp(n){return n.dynamicChildren=ri>0?wt||xr:null,Oy(),ri>0&&wt&&wt.push(n),n}function ge(n,e,t,r,s,i){return cp(B(n,e,t,r,s,i,!0))}function Qs(n,e,t,r,s){return cp(_n(n,e,t,r,s,!0))}function up(n){return n?n.__v_isVNode===!0:!1}function Ps(n,e){return n.type===e.type&&n.key===e.key}const hp=({key:n})=>n??null,ao=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Me(n)||ut(n)||fe(n)?{i:Ct,r:n,k:e,f:!!t}:n:null);function B(n,e=null,t=null,r=0,s=null,i=n===lt?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&hp(e),ref:e&&ao(e),scopeId:Bf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ct};return l?(Io(c,t),i&128&&n.normalize(c)):t&&(c.shapeFlag|=Me(t)?8:16),ri>0&&!a&&wt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&wt.push(c),c}const _n=My;function My(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===ay)&&(n=qn),up(n)){const l=Qr(n,e,!0);return t&&Io(l,t),ri>0&&!i&&wt&&(l.shapeFlag&6?wt[wt.indexOf(n)]=l:wt.push(l)),l.patchFlag=-2,l}if(Ky(n)&&(n=n.__vccOpts),e){e=xy(e);let{class:l,style:c}=e;l&&!Me(l)&&(e.class=Tt(l)),Se(c)&&(fc(c)&&!ce(c)&&(c=et({},c)),e.style=zr(c))}const a=Me(n)?1:lp(n)?128:H_(n)?64:Se(n)?4:fe(n)?2:0;return B(n,e,t,r,s,a,i,!0)}function xy(n){return n?fc(n)||ep(n)?et({},n):n:null}function Qr(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=n,h=e?Ly(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:n.type,props:h,key:h&&hp(h),ref:e&&e.ref?t&&i?ce(i)?i.concat(ao(e)):[i,ao(e)]:ao(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==lt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Qr(n.ssContent),ssFallback:n.ssFallback&&Qr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&r&&gc(f,c.clone(f)),f}function dp(n=" ",e=0){return _n(Zo,null,n,e)}function gt(n="",e=!1){return e?(pe(),Qs(qn,null,n)):_n(qn,null,n)}function Wt(n){return n==null||typeof n=="boolean"?_n(qn):ce(n)?_n(lt,null,n.slice()):up(n)?un(n):_n(Zo,null,String(n))}function un(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Qr(n)}function Io(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(ce(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Io(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!ep(e)?e._ctx=Ct:s===3&&Ct&&(Ct.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(fe(e)){if(r&65){Io(n,{default:e});return}e={default:e,_ctx:Ct},t=32}else e=String(e),r&64?(t=16,e=[dp(e)]):t=8;n.children=e,n.shapeFlag|=t}function Ly(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Tt([e.class,r.class]));else if(s==="style")e.style=zr([e.style,r.style]);else if(qo(s)){const i=e[s],a=r[s];a&&i!==a&&!(ce(i)&&i.includes(a))?e[s]=i?[].concat(i,a):a:a==null&&i==null&&!Wo(s)&&(e[s]=a)}else s!==""&&(e[s]=r[s])}return e}function $t(n,e,t,r=null){Lt(n,e,7,[t,r])}const Fy=Qf();let Uy=0;function By(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||Fy,i={uid:Uy++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new u_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:np(r,s),emitsOptions:Yf(r,s),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=_y.bind(null,i),n.ce&&n.ce(i),i}let _t=null;const $y=()=>_t||Ct;let Ao,kl;{const n=Ko(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Ao=e("__VUE_INSTANCE_SETTERS__",t=>_t=t),kl=e("__VUE_SSR_SETTERS__",t=>si=t)}const yi=n=>{const e=_t;return Ao(n),n.scope.on(),()=>{n.scope.off(),Ao(e)}},Ph=()=>{_t&&_t.scope.off(),Ao(null)};function fp(n){return n.vnode.shapeFlag&4}let si=!1;function jy(n,e=!1,t=!1){e&&kl(e);const{props:r,children:s}=n.vnode,i=fp(n);Iy(n,r,i,e),Sy(n,s,t||e);const a=i?qy(n,e):void 0;return e&&kl(!1),a}function qy(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,ly);const{setup:r}=t;if(r){Xt();const s=n.setupContext=r.length>1?Hy(n):null,i=yi(n),a=_i(r,n,0,[n.props,s]),l=df(a);if(Zt(),i(),(l||n.sp)&&!Ks(n)&&Wf(n),l){if(a.then(Ph,Ph),e)return a.then(c=>{Ch(n,c)}).catch(c=>{Go(c,n,0)});n.asyncDep=a}else Ch(n,a)}else pp(n)}function Ch(n,e,t){fe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Se(e)&&(n.setupState=Of(e)),pp(n)}function pp(n,e,t){const r=n.type;n.render||(n.render=r.render||Kt);{const s=yi(n);Xt();try{cy(n)}finally{Zt(),s()}}}const Wy={get(n,e){return at(n,"get",""),n[e]}};function Hy(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Wy),slots:n.slots,emit:n.emit,expose:e}}function ea(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Of(k_(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in zs)return zs[t](n)},has(e,t){return t in e||t in zs}})):n.proxy}function Ky(n){return fe(n)&&"__vccOpts"in n}const Os=(n,e)=>M_(n,e,si),zy="3.5.39";/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Vl;const kh=typeof window<"u"&&window.trustedTypes;if(kh)try{Vl=kh.createPolicy("vue",{createHTML:n=>n})}catch{}const gp=Vl?n=>Vl.createHTML(n):n=>n,Gy="http://www.w3.org/2000/svg",Qy="http://www.w3.org/1998/Math/MathML",ln=typeof document<"u"?document:null,Vh=ln&&ln.createElement("template"),Yy={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?ln.createElementNS(Gy,n):e==="mathml"?ln.createElementNS(Qy,n):t?ln.createElement(n,{is:t}):ln.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>ln.createTextNode(n),createComment:n=>ln.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ln.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const a=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{Vh.innerHTML=gp(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const l=Vh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Jy=Symbol("_vtc");function Xy(n,e,t){const r=n[Jy];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const bo=Symbol("_vod"),mp=Symbol("_vsh"),Xa={name:"show",beforeMount(n,{value:e},{transition:t}){n[bo]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Cs(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:r}){!e!=!t&&(r?e?(r.beforeEnter(n),Cs(n,!0),r.enter(n)):r.leave(n,()=>{Cs(n,!1)}):Cs(n,e))},beforeUnmount(n,{value:e}){Cs(n,e)}};function Cs(n,e){n.style.display=e?n[bo]:"none",n[mp]=!e}const Zy=Symbol(""),ev=/(?:^|;)\s*display\s*:/;function tv(n,e,t){const r=n.style,s=Me(t);let i=!1;if(t&&!s){if(e)if(Me(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();t[l]==null&&Ms(r,l,"")}else for(const a in e)t[a]==null&&Ms(r,a,"");for(const a in t){a==="display"&&(i=!0);const l=t[a];l!=null?rv(n,a,!Me(e)&&e?e[a]:void 0,l)||Ms(r,a,l):Ms(r,a,"")}}else if(s){if(e!==t){const a=r[Zy];a&&(t+=";"+a),r.cssText=t,i=ev.test(t)}}else e&&n.removeAttribute("style");bo in n&&(n[bo]=i?r.display:"",n[mp]&&(r.display="none"))}const Dh=/\s*!important$/;function Ms(n,e,t){if(ce(t))t.forEach(r=>Ms(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=nv(n,e);Dh.test(t)?n.setProperty(Gn(r),t.replace(Dh,""),"important"):n[r]=t}}const Nh=["Webkit","Moz","ms"],Za={};function nv(n,e){const t=Za[e];if(t)return t;let r=Ot(e);if(r!=="filter"&&r in n)return Za[e]=r;r=gf(r);for(let s=0;s<Nh.length;s++){const i=Nh[s]+r;if(i in n)return Za[e]=i}return e}function rv(n,e,t,r){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Me(r)&&t===r}const Oh="http://www.w3.org/1999/xlink";function Mh(n,e,t,r,s,i=l_(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Oh,e.slice(6,e.length)):n.setAttributeNS(Oh,e,t):t==null||i&&!_f(t)?n.removeAttribute(e):n.setAttribute(e,i?"":Jt(t)?String(t):t)}function xh(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?gp(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(l!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=_f(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function kr(n,e,t,r){n.addEventListener(e,t,r)}function sv(n,e,t,r){n.removeEventListener(e,t,r)}const Lh=Symbol("_vei");function iv(n,e,t,r,s=null){const i=n[Lh]||(n[Lh]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=lv(e);if(r){const h=i[e]=hv(r,s);kr(n,l,h,c)}else a&&(sv(n,l,a,c),i[e]=void 0)}}const ov=/(Once|Passive|Capture)$/,av=/^on:?(?:Once|Passive|Capture)$/;function lv(n){let e,t;for(;(t=n.match(ov))&&!av.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Gn(n.slice(2)),e]}let el=0;const cv=Promise.resolve(),uv=()=>el||(cv.then(()=>el=0),el=Date.now());function hv(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;const s=t.value;if(ce(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const a=s.slice(),l=[r];for(let c=0;c<a.length&&!r._stopped;c++){const h=a[c];h&&Lt(h,e,5,l)}}else Lt(s,e,5,[r])};return t.value=n,t.attached=uv(),t}const Fh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,dv=(n,e,t,r,s,i)=>{const a=s==="svg";e==="class"?Xy(n,r,a):e==="style"?tv(n,t,r):qo(e)?Wo(e)||iv(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):fv(n,e,r,a))?(xh(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Mh(n,e,r,a,i,e!=="value")):n._isVueCE&&(pv(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Me(r)))?xh(n,Ot(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),Mh(n,e,r,a))};function fv(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&Fh(e)&&fe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Fh(e)&&Me(t)?!1:e in n}function pv(n,e){const t=n._def.props;if(!t)return!1;const r=Ot(e);return Array.isArray(t)?t.some(s=>Ot(s)===r):Object.keys(t).some(s=>Ot(s)===r)}const Uh=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ce(e)?t=>io(e,t):e};function gv(n){n.target.composing=!0}function Bh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const tl=Symbol("_assign");function $h(n,e,t){return e&&(n=n.trim()),t&&(n=sc(n)),n}const $r={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[tl]=Uh(s);const i=r||s.props&&s.props.type==="number";kr(n,e?"change":"input",a=>{a.target.composing||n[tl]($h(n.value,t,i))}),(t||i)&&kr(n,"change",()=>{n.value=$h(n.value,t,i)}),e||(kr(n,"compositionstart",gv),kr(n,"compositionend",Bh),kr(n,"change",Bh))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},a){if(n[tl]=Uh(a),n.composing)return;const l=(i||n.type==="number")&&!/^0\d/.test(n.value)?sc(n.value):n.value,c=e??"";if(l===c)return;const h=n.getRootNode();(h instanceof Document||h instanceof ShadowRoot)&&h.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===c)||(n.value=c)}},mv=["ctrl","shift","alt","meta"],_v={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>mv.some(t=>n[`${t}Key`]&&!e.includes(t))},Ec=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),r=e.join(".");return t[r]||(t[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const l=_v[e[a]];if(l&&l(s,e))return}return n(s,...i)})},yv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},nl=(n,e)=>{const t=n._withKeys||(n._withKeys={}),r=e.join(".");return t[r]||(t[r]=s=>{if(!("key"in s))return;const i=Gn(s.key);if(e.some(a=>a===i||yv[a]===i))return n(s)})},vv=et({patchProp:dv},Yy);let jh;function Ev(){return jh||(jh=Cy(vv))}const Tv=(...n)=>{const e=Ev().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=Iv(r);if(!s)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,wv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function wv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Iv(n){return Me(n)?document.querySelector(n):n}var qh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Av=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},yp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,c=s+2<n.length,h=c?n[s+2]:0,f=i>>2,g=(i&3)<<4|l>>4;let y=(l&15)<<2|h>>6,w=h&63;c||(w=64,a||(y=64)),r.push(t[f],t[g],t[y],t[w])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(_p(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Av(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||h==null||g==null)throw new bv;const y=i<<2|l>>4;if(r.push(y),h!==64){const w=l<<4&240|h>>2;if(r.push(w),g!==64){const P=h<<6&192|g;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class bv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Rv=function(n){const e=_p(n);return yp.encodeByteArray(e,!0)},Ro=function(n){return Rv(n).replace(/\./g,"")},vp=function(n){try{return yp.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=()=>Sv().__FIREBASE_DEFAULTS__,Cv=()=>{if(typeof process>"u"||typeof qh>"u")return;const n=qh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},kv=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&vp(n[1]);return e&&JSON.parse(e)},ta=()=>{try{return Pv()||Cv()||kv()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ep=n=>{var e,t;return(t=(e=ta())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Vv=n=>{const e=Ep(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Tp=()=>{var n;return(n=ta())===null||n===void 0?void 0:n.config},wp=n=>{var e;return(e=ta())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ro(JSON.stringify(t)),Ro(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ov(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function Mv(){var n;const e=(n=ta())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Lv(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Fv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Uv(){const n=ht();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Bv(){return!Mv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $v(){try{return typeof indexedDB=="object"}catch{return!1}}function jv(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv="FirebaseError";class bn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=qv,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vi.prototype.create)}}class vi{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Wv(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new bn(s,l,r)}}function Wv(n,e){return n.replace(Hv,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Hv=/\{\$([^}]+)}/g;function Kv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function So(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Wh(i)&&Wh(a)){if(!So(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Wh(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xs(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ls(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function zv(n,e){const t=new Gv(n,e);return t.subscribe.bind(t)}class Gv{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Qv(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=rl),s.error===void 0&&(s.error=rl),s.complete===void 0&&(s.complete=rl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Qv(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function rl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(n){return n&&n._delegate?n._delegate:n}class pr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Dv;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xv(e))try{this.getOrInitializeService({instanceIdentifier:lr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=lr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=lr){return this.instances.has(e)}getOptions(e=lr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Jv(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=lr){return this.component?this.component.multipleInstances?e:lr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jv(n){return n===lr?void 0:n}function Xv(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Yv(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(_e||(_e={}));const eE={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},tE=_e.INFO,nE={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},rE=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=nE[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tc{constructor(e){this.name=e,this._logLevel=tE,this._logHandler=rE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?eE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const sE=(n,e)=>e.some(t=>n instanceof t);let Hh,Kh;function iE(){return Hh||(Hh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function oE(){return Kh||(Kh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ip=new WeakMap,Dl=new WeakMap,Ap=new WeakMap,sl=new WeakMap,wc=new WeakMap;function aE(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Fn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Ip.set(t,n)}).catch(()=>{}),wc.set(e,n),e}function lE(n){if(Dl.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Dl.set(n,e)}let Nl={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Dl.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ap.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Fn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function cE(n){Nl=n(Nl)}function uE(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(il(this),e,...t);return Ap.set(r,e.sort?e.sort():[e]),Fn(r)}:oE().includes(n)?function(...e){return n.apply(il(this),e),Fn(Ip.get(this))}:function(...e){return Fn(n.apply(il(this),e))}}function hE(n){return typeof n=="function"?uE(n):(n instanceof IDBTransaction&&lE(n),sE(n,iE())?new Proxy(n,Nl):n)}function Fn(n){if(n instanceof IDBRequest)return aE(n);if(sl.has(n))return sl.get(n);const e=hE(n);return e!==n&&(sl.set(n,e),wc.set(e,n)),e}const il=n=>wc.get(n);function dE(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=Fn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Fn(a.result),c.oldVersion,c.newVersion,Fn(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const fE=["get","getKey","getAll","getAllKeys","count"],pE=["put","add","delete","clear"],ol=new Map;function zh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ol.get(e))return ol.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=pE.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||fE.includes(t)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),s&&c.done]))[0]};return ol.set(e,i),i}cE(n=>({...n,get:(e,t,r)=>zh(e,t)||n.get(e,t,r),has:(e,t)=>!!zh(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(mE(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function mE(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ol="@firebase/app",Gh="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=new Tc("@firebase/app"),_E="@firebase/app-compat",yE="@firebase/analytics-compat",vE="@firebase/analytics",EE="@firebase/app-check-compat",TE="@firebase/app-check",wE="@firebase/auth",IE="@firebase/auth-compat",AE="@firebase/database",bE="@firebase/data-connect",RE="@firebase/database-compat",SE="@firebase/functions",PE="@firebase/functions-compat",CE="@firebase/installations",kE="@firebase/installations-compat",VE="@firebase/messaging",DE="@firebase/messaging-compat",NE="@firebase/performance",OE="@firebase/performance-compat",ME="@firebase/remote-config",xE="@firebase/remote-config-compat",LE="@firebase/storage",FE="@firebase/storage-compat",UE="@firebase/firestore",BE="@firebase/vertexai-preview",$E="@firebase/firestore-compat",jE="firebase",qE="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml="[DEFAULT]",WE={[Ol]:"fire-core",[_E]:"fire-core-compat",[vE]:"fire-analytics",[yE]:"fire-analytics-compat",[TE]:"fire-app-check",[EE]:"fire-app-check-compat",[wE]:"fire-auth",[IE]:"fire-auth-compat",[AE]:"fire-rtdb",[bE]:"fire-data-connect",[RE]:"fire-rtdb-compat",[SE]:"fire-fn",[PE]:"fire-fn-compat",[CE]:"fire-iid",[kE]:"fire-iid-compat",[VE]:"fire-fcm",[DE]:"fire-fcm-compat",[NE]:"fire-perf",[OE]:"fire-perf-compat",[ME]:"fire-rc",[xE]:"fire-rc-compat",[LE]:"fire-gcs",[FE]:"fire-gcs-compat",[UE]:"fire-fst",[$E]:"fire-fst-compat",[BE]:"fire-vertex","fire-js":"fire-js",[jE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=new Map,HE=new Map,xl=new Map;function Qh(n,e){try{n.container.addComponent(e)}catch(t){En.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Yr(n){const e=n.name;if(xl.has(e))return En.debug(`There were multiple attempts to register component ${e}.`),!1;xl.set(e,n);for(const t of Po.values())Qh(t,n);for(const t of HE.values())Qh(t,n);return!0}function Ic(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function fn(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Un=new vi("app","Firebase",KE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Un.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=qE;function bp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ml,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Un.create("bad-app-name",{appName:String(s)});if(t||(t=Tp()),!t)throw Un.create("no-options");const i=Po.get(s);if(i){if(So(t,i.options)&&So(r,i.config))return i;throw Un.create("duplicate-app",{appName:s})}const a=new Zv(s);for(const c of xl.values())a.addComponent(c);const l=new zE(t,r,a);return Po.set(s,l),l}function Rp(n=Ml){const e=Po.get(n);if(!e&&n===Ml&&Tp())return bp();if(!e)throw Un.create("no-app",{appName:n});return e}function Bn(n,e,t){var r;let s=(r=WE[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),En.warn(l.join(" "));return}Yr(new pr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE="firebase-heartbeat-database",QE=1,ii="firebase-heartbeat-store";let al=null;function Sp(){return al||(al=dE(GE,QE,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ii)}catch(t){console.warn(t)}}}}).catch(n=>{throw Un.create("idb-open",{originalErrorMessage:n.message})})),al}async function YE(n){try{const t=(await Sp()).transaction(ii),r=await t.objectStore(ii).get(Pp(n));return await t.done,r}catch(e){if(e instanceof bn)En.warn(e.message);else{const t=Un.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});En.warn(t.message)}}}async function Yh(n,e){try{const r=(await Sp()).transaction(ii,"readwrite");await r.objectStore(ii).put(e,Pp(n)),await r.done}catch(t){if(t instanceof bn)En.warn(t.message);else{const r=Un.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});En.warn(r.message)}}}function Pp(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE=1024,XE=30*24*60*60*1e3;class ZE{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new tT(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Jh();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=XE}),this._storage.overwrite(this._heartbeatsCache))}catch(r){En.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Jh(),{heartbeatsToSend:r,unsentEntries:s}=eT(this._heartbeatsCache.heartbeats),i=Ro(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return En.warn(t),""}}}function Jh(){return new Date().toISOString().substring(0,10)}function eT(n,e=JE){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Xh(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Xh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class tT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $v()?jv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await YE(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Yh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Yh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Xh(n){return Ro(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(n){Yr(new pr("platform-logger",e=>new gE(e),"PRIVATE")),Yr(new pr("heartbeat",e=>new ZE(e),"PRIVATE")),Bn(Ol,Gh,n),Bn(Ol,Gh,"esm2017"),Bn("fire-js","")}nT("");var Zh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fr,Cp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,m){function v(){}v.prototype=m.prototype,_.D=m.prototype,_.prototype=new v,_.prototype.constructor=_,_.C=function(I,A,R){for(var T=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)T[ae-2]=arguments[ae];return m.prototype[A].apply(I,T)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(_,m,v){v||(v=0);var I=Array(16);if(typeof m=="string")for(var A=0;16>A;++A)I[A]=m.charCodeAt(v++)|m.charCodeAt(v++)<<8|m.charCodeAt(v++)<<16|m.charCodeAt(v++)<<24;else for(A=0;16>A;++A)I[A]=m[v++]|m[v++]<<8|m[v++]<<16|m[v++]<<24;m=_.g[0],v=_.g[1],A=_.g[2];var R=_.g[3],T=m+(R^v&(A^R))+I[0]+3614090360&4294967295;m=v+(T<<7&4294967295|T>>>25),T=R+(A^m&(v^A))+I[1]+3905402710&4294967295,R=m+(T<<12&4294967295|T>>>20),T=A+(v^R&(m^v))+I[2]+606105819&4294967295,A=R+(T<<17&4294967295|T>>>15),T=v+(m^A&(R^m))+I[3]+3250441966&4294967295,v=A+(T<<22&4294967295|T>>>10),T=m+(R^v&(A^R))+I[4]+4118548399&4294967295,m=v+(T<<7&4294967295|T>>>25),T=R+(A^m&(v^A))+I[5]+1200080426&4294967295,R=m+(T<<12&4294967295|T>>>20),T=A+(v^R&(m^v))+I[6]+2821735955&4294967295,A=R+(T<<17&4294967295|T>>>15),T=v+(m^A&(R^m))+I[7]+4249261313&4294967295,v=A+(T<<22&4294967295|T>>>10),T=m+(R^v&(A^R))+I[8]+1770035416&4294967295,m=v+(T<<7&4294967295|T>>>25),T=R+(A^m&(v^A))+I[9]+2336552879&4294967295,R=m+(T<<12&4294967295|T>>>20),T=A+(v^R&(m^v))+I[10]+4294925233&4294967295,A=R+(T<<17&4294967295|T>>>15),T=v+(m^A&(R^m))+I[11]+2304563134&4294967295,v=A+(T<<22&4294967295|T>>>10),T=m+(R^v&(A^R))+I[12]+1804603682&4294967295,m=v+(T<<7&4294967295|T>>>25),T=R+(A^m&(v^A))+I[13]+4254626195&4294967295,R=m+(T<<12&4294967295|T>>>20),T=A+(v^R&(m^v))+I[14]+2792965006&4294967295,A=R+(T<<17&4294967295|T>>>15),T=v+(m^A&(R^m))+I[15]+1236535329&4294967295,v=A+(T<<22&4294967295|T>>>10),T=m+(A^R&(v^A))+I[1]+4129170786&4294967295,m=v+(T<<5&4294967295|T>>>27),T=R+(v^A&(m^v))+I[6]+3225465664&4294967295,R=m+(T<<9&4294967295|T>>>23),T=A+(m^v&(R^m))+I[11]+643717713&4294967295,A=R+(T<<14&4294967295|T>>>18),T=v+(R^m&(A^R))+I[0]+3921069994&4294967295,v=A+(T<<20&4294967295|T>>>12),T=m+(A^R&(v^A))+I[5]+3593408605&4294967295,m=v+(T<<5&4294967295|T>>>27),T=R+(v^A&(m^v))+I[10]+38016083&4294967295,R=m+(T<<9&4294967295|T>>>23),T=A+(m^v&(R^m))+I[15]+3634488961&4294967295,A=R+(T<<14&4294967295|T>>>18),T=v+(R^m&(A^R))+I[4]+3889429448&4294967295,v=A+(T<<20&4294967295|T>>>12),T=m+(A^R&(v^A))+I[9]+568446438&4294967295,m=v+(T<<5&4294967295|T>>>27),T=R+(v^A&(m^v))+I[14]+3275163606&4294967295,R=m+(T<<9&4294967295|T>>>23),T=A+(m^v&(R^m))+I[3]+4107603335&4294967295,A=R+(T<<14&4294967295|T>>>18),T=v+(R^m&(A^R))+I[8]+1163531501&4294967295,v=A+(T<<20&4294967295|T>>>12),T=m+(A^R&(v^A))+I[13]+2850285829&4294967295,m=v+(T<<5&4294967295|T>>>27),T=R+(v^A&(m^v))+I[2]+4243563512&4294967295,R=m+(T<<9&4294967295|T>>>23),T=A+(m^v&(R^m))+I[7]+1735328473&4294967295,A=R+(T<<14&4294967295|T>>>18),T=v+(R^m&(A^R))+I[12]+2368359562&4294967295,v=A+(T<<20&4294967295|T>>>12),T=m+(v^A^R)+I[5]+4294588738&4294967295,m=v+(T<<4&4294967295|T>>>28),T=R+(m^v^A)+I[8]+2272392833&4294967295,R=m+(T<<11&4294967295|T>>>21),T=A+(R^m^v)+I[11]+1839030562&4294967295,A=R+(T<<16&4294967295|T>>>16),T=v+(A^R^m)+I[14]+4259657740&4294967295,v=A+(T<<23&4294967295|T>>>9),T=m+(v^A^R)+I[1]+2763975236&4294967295,m=v+(T<<4&4294967295|T>>>28),T=R+(m^v^A)+I[4]+1272893353&4294967295,R=m+(T<<11&4294967295|T>>>21),T=A+(R^m^v)+I[7]+4139469664&4294967295,A=R+(T<<16&4294967295|T>>>16),T=v+(A^R^m)+I[10]+3200236656&4294967295,v=A+(T<<23&4294967295|T>>>9),T=m+(v^A^R)+I[13]+681279174&4294967295,m=v+(T<<4&4294967295|T>>>28),T=R+(m^v^A)+I[0]+3936430074&4294967295,R=m+(T<<11&4294967295|T>>>21),T=A+(R^m^v)+I[3]+3572445317&4294967295,A=R+(T<<16&4294967295|T>>>16),T=v+(A^R^m)+I[6]+76029189&4294967295,v=A+(T<<23&4294967295|T>>>9),T=m+(v^A^R)+I[9]+3654602809&4294967295,m=v+(T<<4&4294967295|T>>>28),T=R+(m^v^A)+I[12]+3873151461&4294967295,R=m+(T<<11&4294967295|T>>>21),T=A+(R^m^v)+I[15]+530742520&4294967295,A=R+(T<<16&4294967295|T>>>16),T=v+(A^R^m)+I[2]+3299628645&4294967295,v=A+(T<<23&4294967295|T>>>9),T=m+(A^(v|~R))+I[0]+4096336452&4294967295,m=v+(T<<6&4294967295|T>>>26),T=R+(v^(m|~A))+I[7]+1126891415&4294967295,R=m+(T<<10&4294967295|T>>>22),T=A+(m^(R|~v))+I[14]+2878612391&4294967295,A=R+(T<<15&4294967295|T>>>17),T=v+(R^(A|~m))+I[5]+4237533241&4294967295,v=A+(T<<21&4294967295|T>>>11),T=m+(A^(v|~R))+I[12]+1700485571&4294967295,m=v+(T<<6&4294967295|T>>>26),T=R+(v^(m|~A))+I[3]+2399980690&4294967295,R=m+(T<<10&4294967295|T>>>22),T=A+(m^(R|~v))+I[10]+4293915773&4294967295,A=R+(T<<15&4294967295|T>>>17),T=v+(R^(A|~m))+I[1]+2240044497&4294967295,v=A+(T<<21&4294967295|T>>>11),T=m+(A^(v|~R))+I[8]+1873313359&4294967295,m=v+(T<<6&4294967295|T>>>26),T=R+(v^(m|~A))+I[15]+4264355552&4294967295,R=m+(T<<10&4294967295|T>>>22),T=A+(m^(R|~v))+I[6]+2734768916&4294967295,A=R+(T<<15&4294967295|T>>>17),T=v+(R^(A|~m))+I[13]+1309151649&4294967295,v=A+(T<<21&4294967295|T>>>11),T=m+(A^(v|~R))+I[4]+4149444226&4294967295,m=v+(T<<6&4294967295|T>>>26),T=R+(v^(m|~A))+I[11]+3174756917&4294967295,R=m+(T<<10&4294967295|T>>>22),T=A+(m^(R|~v))+I[2]+718787259&4294967295,A=R+(T<<15&4294967295|T>>>17),T=v+(R^(A|~m))+I[9]+3951481745&4294967295,_.g[0]=_.g[0]+m&4294967295,_.g[1]=_.g[1]+(A+(T<<21&4294967295|T>>>11))&4294967295,_.g[2]=_.g[2]+A&4294967295,_.g[3]=_.g[3]+R&4294967295}r.prototype.u=function(_,m){m===void 0&&(m=_.length);for(var v=m-this.blockSize,I=this.B,A=this.h,R=0;R<m;){if(A==0)for(;R<=v;)s(this,_,R),R+=this.blockSize;if(typeof _=="string"){for(;R<m;)if(I[A++]=_.charCodeAt(R++),A==this.blockSize){s(this,I),A=0;break}}else for(;R<m;)if(I[A++]=_[R++],A==this.blockSize){s(this,I),A=0;break}}this.h=A,this.o+=m},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var m=1;m<_.length-8;++m)_[m]=0;var v=8*this.o;for(m=_.length-8;m<_.length;++m)_[m]=v&255,v/=256;for(this.u(_),_=Array(16),m=v=0;4>m;++m)for(var I=0;32>I;I+=8)_[v++]=this.g[m]>>>I&255;return _};function i(_,m){var v=l;return Object.prototype.hasOwnProperty.call(v,_)?v[_]:v[_]=m(_)}function a(_,m){this.h=m;for(var v=[],I=!0,A=_.length-1;0<=A;A--){var R=_[A]|0;I&&R==m||(v[A]=R,I=!1)}this.g=v}var l={};function c(_){return-128<=_&&128>_?i(_,function(m){return new a([m|0],0>m?-1:0)}):new a([_|0],0>_?-1:0)}function h(_){if(isNaN(_)||!isFinite(_))return g;if(0>_)return k(h(-_));for(var m=[],v=1,I=0;_>=v;I++)m[I]=_/v|0,v*=4294967296;return new a(m,0)}function f(_,m){if(_.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(_.charAt(0)=="-")return k(f(_.substring(1),m));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(m,8)),I=g,A=0;A<_.length;A+=8){var R=Math.min(8,_.length-A),T=parseInt(_.substring(A,A+R),m);8>R?(R=h(Math.pow(m,R)),I=I.j(R).add(h(T))):(I=I.j(v),I=I.add(h(T)))}return I}var g=c(0),y=c(1),w=c(16777216);n=a.prototype,n.m=function(){if(C(this))return-k(this).m();for(var _=0,m=1,v=0;v<this.g.length;v++){var I=this.i(v);_+=(0<=I?I:4294967296+I)*m,m*=4294967296}return _},n.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(P(this))return"0";if(C(this))return"-"+k(this).toString(_);for(var m=h(Math.pow(_,6)),v=this,I="";;){var A=H(v,m).g;v=$(v,A.j(m));var R=((0<v.g.length?v.g[0]:v.h)>>>0).toString(_);if(v=A,P(v))return R+I;for(;6>R.length;)R="0"+R;I=R+I}},n.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function P(_){if(_.h!=0)return!1;for(var m=0;m<_.g.length;m++)if(_.g[m]!=0)return!1;return!0}function C(_){return _.h==-1}n.l=function(_){return _=$(this,_),C(_)?-1:P(_)?0:1};function k(_){for(var m=_.g.length,v=[],I=0;I<m;I++)v[I]=~_.g[I];return new a(v,~_.h).add(y)}n.abs=function(){return C(this)?k(this):this},n.add=function(_){for(var m=Math.max(this.g.length,_.g.length),v=[],I=0,A=0;A<=m;A++){var R=I+(this.i(A)&65535)+(_.i(A)&65535),T=(R>>>16)+(this.i(A)>>>16)+(_.i(A)>>>16);I=T>>>16,R&=65535,T&=65535,v[A]=T<<16|R}return new a(v,v[v.length-1]&-2147483648?-1:0)};function $(_,m){return _.add(k(m))}n.j=function(_){if(P(this)||P(_))return g;if(C(this))return C(_)?k(this).j(k(_)):k(k(this).j(_));if(C(_))return k(this.j(k(_)));if(0>this.l(w)&&0>_.l(w))return h(this.m()*_.m());for(var m=this.g.length+_.g.length,v=[],I=0;I<2*m;I++)v[I]=0;for(I=0;I<this.g.length;I++)for(var A=0;A<_.g.length;A++){var R=this.i(I)>>>16,T=this.i(I)&65535,ae=_.i(A)>>>16,Y=_.i(A)&65535;v[2*I+2*A]+=T*Y,L(v,2*I+2*A),v[2*I+2*A+1]+=R*Y,L(v,2*I+2*A+1),v[2*I+2*A+1]+=T*ae,L(v,2*I+2*A+1),v[2*I+2*A+2]+=R*ae,L(v,2*I+2*A+2)}for(I=0;I<m;I++)v[I]=v[2*I+1]<<16|v[2*I];for(I=m;I<2*m;I++)v[I]=0;return new a(v,0)};function L(_,m){for(;(_[m]&65535)!=_[m];)_[m+1]+=_[m]>>>16,_[m]&=65535,m++}function G(_,m){this.g=_,this.h=m}function H(_,m){if(P(m))throw Error("division by zero");if(P(_))return new G(g,g);if(C(_))return m=H(k(_),m),new G(k(m.g),k(m.h));if(C(m))return m=H(_,k(m)),new G(k(m.g),m.h);if(30<_.g.length){if(C(_)||C(m))throw Error("slowDivide_ only works with positive integers.");for(var v=y,I=m;0>=I.l(_);)v=ne(v),I=ne(I);var A=J(v,1),R=J(I,1);for(I=J(I,2),v=J(v,2);!P(I);){var T=R.add(I);0>=T.l(_)&&(A=A.add(v),R=T),I=J(I,1),v=J(v,1)}return m=$(_,A.j(m)),new G(A,m)}for(A=g;0<=_.l(m);){for(v=Math.max(1,Math.floor(_.m()/m.m())),I=Math.ceil(Math.log(v)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),R=h(v),T=R.j(m);C(T)||0<T.l(_);)v-=I,R=h(v),T=R.j(m);P(R)&&(R=y),A=A.add(R),_=$(_,T)}return new G(A,_)}n.A=function(_){return H(this,_).h},n.and=function(_){for(var m=Math.max(this.g.length,_.g.length),v=[],I=0;I<m;I++)v[I]=this.i(I)&_.i(I);return new a(v,this.h&_.h)},n.or=function(_){for(var m=Math.max(this.g.length,_.g.length),v=[],I=0;I<m;I++)v[I]=this.i(I)|_.i(I);return new a(v,this.h|_.h)},n.xor=function(_){for(var m=Math.max(this.g.length,_.g.length),v=[],I=0;I<m;I++)v[I]=this.i(I)^_.i(I);return new a(v,this.h^_.h)};function ne(_){for(var m=_.g.length+1,v=[],I=0;I<m;I++)v[I]=_.i(I)<<1|_.i(I-1)>>>31;return new a(v,_.h)}function J(_,m){var v=m>>5;m%=32;for(var I=_.g.length-v,A=[],R=0;R<I;R++)A[R]=0<m?_.i(R+v)>>>m|_.i(R+v+1)<<32-m:_.i(R+v);return new a(A,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Cp=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,fr=a}).apply(typeof Zh<"u"?Zh:typeof self<"u"?self:typeof window<"u"?window:{});var Zi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kp,Fs,Vp,lo,Ll,Dp,Np,Op;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zi=="object"&&Zi];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var S=o[p];if(!(S in d))break e;d=d[S]}o=o[o.length-1],p=d[o],u=u(p),u!=p&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var d=0,p=!1,S={next:function(){if(!p&&d<o.length){var V=d++;return{value:u(V,o[V]),done:!1}}return p=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function g(o,u,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,p),o.apply(u,S)}}return function(){return o.apply(u,arguments)}}function y(o,u,d){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,y.apply(null,arguments)}function w(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function P(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,S,V){for(var W=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)W[Pe-2]=arguments[Pe];return u.prototype[S].apply(p,W)}}function C(o){const u=o.length;if(0<u){const d=Array(u);for(let p=0;p<u;p++)d[p]=o[p];return d}return[]}function k(o,u){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(c(p)){const S=o.length||0,V=p.length||0;o.length=S+V;for(let W=0;W<V;W++)o[S+W]=p[W]}else o.push(p)}}class ${constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function L(o){return/^[\s\xa0]*$/.test(o)}function G(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function H(o){return H[" "](o),o}H[" "]=function(){};var ne=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function J(o,u,d){for(const p in o)u.call(d,o[p],p,o)}function _(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function m(o){const u={};for(const d in o)u[d]=o[d];return u}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(o,u){let d,p;for(let S=1;S<arguments.length;S++){p=arguments[S];for(d in p)o[d]=p[d];for(let V=0;V<v.length;V++)d=v[V],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function A(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function R(o){l.setTimeout(()=>{throw o},0)}function T(){var o=Dt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ae{constructor(){this.h=this.g=null}add(u,d){const p=Y.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var Y=new $(()=>new te,o=>o.reset());class te{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ie,Ee=!1,Dt=new ae,Jn=()=>{const o=l.Promise.resolve(void 0);Ie=()=>{o.then(nn)}};var nn=()=>{for(var o;o=T();){try{o.h.call(o.g)}catch(d){R(d)}var u=Y;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}Ee=!1};function We(){this.s=this.s,this.C=this.C}We.prototype.s=!1,We.prototype.ma=function(){this.s||(this.s=!0,this.N())},We.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function He(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}He.prototype.h=function(){this.defaultPrevented=!0};var Sa=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return o}();function Xn(o,u){if(He.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(ne){e:{try{H(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Zn[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Xn.aa.h.call(this)}}P(Xn,He);var Zn={2:"touch",3:"pen",4:"mouse"};Xn.prototype.h=function(){Xn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var rn="closure_listenable_"+(1e6*Math.random()|0),ds=0;function Di(o,u,d,p,S){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=S,this.key=++ds,this.da=this.fa=!1}function Bt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function fs(o){this.src=o,this.g={},this.h=0}fs.prototype.add=function(o,u,d,p,S){var V=o.toString();o=this.g[V],o||(o=this.g[V]=[],this.h++);var W=b(o,u,p,S);return-1<W?(u=o[W],d||(u.fa=!1)):(u=new Di(u,this.src,V,!!p,S),u.fa=d,o.push(u)),u};function E(o,u){var d=u.type;if(d in o.g){var p=o.g[d],S=Array.prototype.indexOf.call(p,u,void 0),V;(V=0<=S)&&Array.prototype.splice.call(p,S,1),V&&(Bt(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function b(o,u,d,p){for(var S=0;S<o.length;++S){var V=o[S];if(!V.da&&V.listener==u&&V.capture==!!d&&V.ha==p)return S}return-1}var D="closure_lm_"+(1e6*Math.random()|0),F={};function x(o,u,d,p,S){if(Array.isArray(u)){for(var V=0;V<u.length;V++)x(o,u[V],d,p,S);return null}return d=ie(d),o&&o[rn]?o.K(u,d,h(p)?!!p.capture:!1,S):O(o,u,d,!1,p,S)}function O(o,u,d,p,S,V){if(!u)throw Error("Invalid event type");var W=h(S)?!!S.capture:!!S,Pe=Q(o);if(Pe||(o[D]=Pe=new fs(o)),d=Pe.add(u,d,p,W,V),d.proxy)return d;if(p=z(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)Sa||(S=W),S===void 0&&(S=!1),o.addEventListener(u.toString(),p,S);else if(o.attachEvent)o.attachEvent(M(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function z(){function o(d){return u.call(o.src,o.listener,d)}const u=re;return o}function q(o,u,d,p,S){if(Array.isArray(u))for(var V=0;V<u.length;V++)q(o,u[V],d,p,S);else p=h(p)?!!p.capture:!!p,d=ie(d),o&&o[rn]?(o=o.i,u=String(u).toString(),u in o.g&&(V=o.g[u],d=b(V,d,p,S),-1<d&&(Bt(V[d]),Array.prototype.splice.call(V,d,1),V.length==0&&(delete o.g[u],o.h--)))):o&&(o=Q(o))&&(u=o.g[u.toString()],o=-1,u&&(o=b(u,d,p,S)),(d=-1<o?u[o]:null)&&j(d))}function j(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[rn])E(u.i,o);else{var d=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(d,p,o.capture):u.detachEvent?u.detachEvent(M(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=Q(u))?(E(d,o),d.h==0&&(d.src=null,u[D]=null)):Bt(o)}}}function M(o){return o in F?F[o]:F[o]="on"+o}function re(o,u){if(o.da)o=!0;else{u=new Xn(u,this);var d=o.listener,p=o.ha||o.src;o.fa&&j(o),o=d.call(p,u)}return o}function Q(o){return o=o[D],o instanceof fs?o:null}var Z="__closure_events_fn_"+(1e9*Math.random()>>>0);function ie(o){return typeof o=="function"?o:(o[Z]||(o[Z]=function(u){return o.handleEvent(u)}),o[Z])}function se(){We.call(this),this.i=new fs(this),this.M=this,this.F=null}P(se,We),se.prototype[rn]=!0,se.prototype.removeEventListener=function(o,u,d,p){q(this,o,u,d,p)};function de(o,u){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new He(u,o);else if(u instanceof He)u.target=u.target||o;else{var S=u;u=new He(p,o),I(u,S)}if(S=!0,d)for(var V=d.length-1;0<=V;V--){var W=u.g=d[V];S=ve(W,p,!0,u)&&S}if(W=u.g=o,S=ve(W,p,!0,u)&&S,S=ve(W,p,!1,u)&&S,d)for(V=0;V<d.length;V++)W=u.g=d[V],S=ve(W,p,!1,u)&&S}se.prototype.N=function(){if(se.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],p=0;p<d.length;p++)Bt(d[p]);delete o.g[u],o.h--}}this.F=null},se.prototype.K=function(o,u,d,p){return this.i.add(String(o),u,!1,d,p)},se.prototype.L=function(o,u,d,p){return this.i.add(String(o),u,!0,d,p)};function ve(o,u,d,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,V=0;V<u.length;++V){var W=u[V];if(W&&!W.da&&W.capture==d){var Pe=W.listener,Qe=W.ha||W.src;W.fa&&E(o.i,W),S=Pe.call(Qe,p)!==!1&&S}}return S&&!p.defaultPrevented}function Oe(o,u,d){if(typeof o=="function")d&&(o=y(o,d));else if(o&&typeof o.handleEvent=="function")o=y(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function $e(o){o.g=Oe(()=>{o.g=null,o.i&&(o.i=!1,$e(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Rt extends We{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:$e(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function nt(o){We.call(this),this.h=o,this.g={}}P(nt,We);var Rn=[];function ps(o){J(o.g,function(u,d){this.g.hasOwnProperty(d)&&j(u)},o),o.g={}}nt.prototype.N=function(){nt.aa.N.call(this),ps(this)},nt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ge=l.JSON.stringify,St=l.JSON.parse,Ni=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Ir(){}Ir.prototype.h=null;function vu(o){return o.h||(o.h=o.i())}function Eu(){}var gs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Pa(){He.call(this,"d")}P(Pa,He);function Ca(){He.call(this,"c")}P(Ca,He);var er={},Tu=null;function Oi(){return Tu=Tu||new se}er.La="serverreachability";function wu(o){He.call(this,er.La,o)}P(wu,He);function ms(o){const u=Oi();de(u,new wu(u))}er.STAT_EVENT="statevent";function Iu(o,u){He.call(this,er.STAT_EVENT,o),this.stat=u}P(Iu,He);function dt(o){const u=Oi();de(u,new Iu(u,o))}er.Ma="timingevent";function Au(o,u){He.call(this,er.Ma,o),this.size=u}P(Au,He);function _s(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function ys(){this.g=!0}ys.prototype.xa=function(){this.g=!1};function km(o,u,d,p,S,V){o.info(function(){if(o.g)if(V)for(var W="",Pe=V.split("&"),Qe=0;Qe<Pe.length;Qe++){var Te=Pe[Qe].split("=");if(1<Te.length){var rt=Te[0];Te=Te[1];var st=rt.split("_");W=2<=st.length&&st[1]=="type"?W+(rt+"="+Te+"&"):W+(rt+"=redacted&")}}else W=null;else W=V;return"XMLHTTP REQ ("+p+") [attempt "+S+"]: "+u+`
`+d+`
`+W})}function Vm(o,u,d,p,S,V,W){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+S+"]: "+u+`
`+d+`
`+V+" "+W})}function Ar(o,u,d,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Nm(o,d)+(p?" "+p:"")})}function Dm(o,u){o.info(function(){return"TIMEOUT: "+u})}ys.prototype.info=function(){};function Nm(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var S=p[1];if(Array.isArray(S)&&!(1>S.length)){var V=S[0];if(V!="noop"&&V!="stop"&&V!="close")for(var W=1;W<S.length;W++)S[W]=""}}}}return Ge(d)}catch{return u}}var Mi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},bu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ka;function xi(){}P(xi,Ir),xi.prototype.g=function(){return new XMLHttpRequest},xi.prototype.i=function(){return{}},ka=new xi;function Sn(o,u,d,p){this.j=o,this.i=u,this.l=d,this.R=p||1,this.U=new nt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ru}function Ru(){this.i=null,this.g="",this.h=!1}var Su={},Va={};function Da(o,u,d){o.L=1,o.v=Bi(sn(u)),o.m=d,o.P=!0,Pu(o,null)}function Pu(o,u){o.F=Date.now(),Li(o),o.A=sn(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),ju(d.i,"t",p),o.C=0,d=o.j.J,o.h=new Ru,o.g=oh(o.j,d?u:null,!o.m),0<o.O&&(o.M=new Rt(y(o.Y,o,o.g),o.O)),u=o.U,d=o.g,p=o.ca;var S="readystatechange";Array.isArray(S)||(S&&(Rn[0]=S.toString()),S=Rn);for(var V=0;V<S.length;V++){var W=x(d,S[V],p||u.handleEvent,!1,u.h||u);if(!W)break;u.g[W.key]=W}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),ms(),km(o.i,o.u,o.A,o.l,o.R,o.m)}Sn.prototype.ca=function(o){o=o.target;const u=this.M;u&&on(o)==3?u.j():this.Y(o)},Sn.prototype.Y=function(o){try{if(o==this.g)e:{const st=on(this.g);var u=this.g.Ba();const Sr=this.g.Z();if(!(3>st)&&(st!=3||this.g&&(this.h.h||this.g.oa()||Qu(this.g)))){this.J||st!=4||u==7||(u==8||0>=Sr?ms(3):ms(2)),Na(this);var d=this.g.Z();this.X=d;t:if(Cu(this)){var p=Qu(this.g);o="";var S=p.length,V=on(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){tr(this),vs(this);var W="";break t}this.h.i=new l.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(V&&u==S-1)});p.length=0,this.h.g+=o,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=d==200,Vm(this.i,this.u,this.A,this.l,this.R,st,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Pe,Qe=this.g;if((Pe=Qe.g?Qe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(Pe)){var Te=Pe;break t}}Te=null}if(d=Te)Ar(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Oa(this,d);else{this.o=!1,this.s=3,dt(12),tr(this),vs(this);break e}}if(this.P){d=!0;let Nt;for(;!this.J&&this.C<W.length;)if(Nt=Om(this,W),Nt==Va){st==4&&(this.s=4,dt(14),d=!1),Ar(this.i,this.l,null,"[Incomplete Response]");break}else if(Nt==Su){this.s=4,dt(15),Ar(this.i,this.l,W,"[Invalid Chunk]"),d=!1;break}else Ar(this.i,this.l,Nt,null),Oa(this,Nt);if(Cu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),st!=4||W.length!=0||this.h.h||(this.s=1,dt(16),d=!1),this.o=this.o&&d,!d)Ar(this.i,this.l,W,"[Invalid Chunked Response]"),tr(this),vs(this);else if(0<W.length&&!this.W){this.W=!0;var rt=this.j;rt.g==this&&rt.ba&&!rt.M&&(rt.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),Ba(rt),rt.M=!0,dt(11))}}else Ar(this.i,this.l,W,null),Oa(this,W);st==4&&tr(this),this.o&&!this.J&&(st==4?nh(this.j,this):(this.o=!1,Li(this)))}else Jm(this.g),d==400&&0<W.indexOf("Unknown SID")?(this.s=3,dt(12)):(this.s=0,dt(13)),tr(this),vs(this)}}}catch{}finally{}};function Cu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Om(o,u){var d=o.C,p=u.indexOf(`
`,d);return p==-1?Va:(d=Number(u.substring(d,p)),isNaN(d)?Su:(p+=1,p+d>u.length?Va:(u=u.slice(p,p+d),o.C=p+d,u)))}Sn.prototype.cancel=function(){this.J=!0,tr(this)};function Li(o){o.S=Date.now()+o.I,ku(o,o.I)}function ku(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=_s(y(o.ba,o),u)}function Na(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Sn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Dm(this.i,this.A),this.L!=2&&(ms(),dt(17)),tr(this),this.s=2,vs(this)):ku(this,this.S-o)};function vs(o){o.j.G==0||o.J||nh(o.j,o)}function tr(o){Na(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,ps(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Oa(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||Ma(d.h,o))){if(!o.K&&Ma(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var S=p;if(S[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Ki(d),Wi(d);else break e;Ua(d),dt(18)}}else d.za=S[1],0<d.za-d.T&&37500>S[2]&&d.F&&d.v==0&&!d.C&&(d.C=_s(y(d.Za,d),6e3));if(1>=Nu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else rr(d,11)}else if((o.K||d.g==o)&&Ki(d),!L(u))for(S=d.Da.g.parse(u),u=0;u<S.length;u++){let Te=S[u];if(d.T=Te[0],Te=Te[1],d.G==2)if(Te[0]=="c"){d.K=Te[1],d.ia=Te[2];const rt=Te[3];rt!=null&&(d.la=rt,d.j.info("VER="+d.la));const st=Te[4];st!=null&&(d.Aa=st,d.j.info("SVER="+d.Aa));const Sr=Te[5];Sr!=null&&typeof Sr=="number"&&0<Sr&&(p=1.5*Sr,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Nt=o.g;if(Nt){const Gi=Nt.g?Nt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gi){var V=p.h;V.g||Gi.indexOf("spdy")==-1&&Gi.indexOf("quic")==-1&&Gi.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(xa(V,V.h),V.h=null))}if(p.D){const $a=Nt.g?Nt.g.getResponseHeader("X-HTTP-Session-Id"):null;$a&&(p.ya=$a,De(p.I,p.D,$a))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var W=o;if(p.qa=ih(p,p.J?p.ia:null,p.W),W.K){Ou(p.h,W);var Pe=W,Qe=p.L;Qe&&(Pe.I=Qe),Pe.B&&(Na(Pe),Li(Pe)),p.g=W}else eh(p);0<d.i.length&&Hi(d)}else Te[0]!="stop"&&Te[0]!="close"||rr(d,7);else d.G==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?rr(d,7):Fa(d):Te[0]!="noop"&&d.l&&d.l.ta(Te),d.v=0)}}ms(4)}catch{}}var Mm=class{constructor(o,u){this.g=o,this.map=u}};function Vu(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Du(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Nu(o){return o.h?1:o.g?o.g.size:0}function Ma(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function xa(o,u){o.g?o.g.add(u):o.h=u}function Ou(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Vu.prototype.cancel=function(){if(this.i=Mu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Mu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return C(o.i)}function xm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],d=o.length,p=0;p<d;p++)u.push(o[p]);return u}u=[],d=0;for(p in o)u[d++]=o[p];return u}function Lm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const p in o)u[d++]=p;return u}}}function xu(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=Lm(o),p=xm(o),S=p.length,V=0;V<S;V++)u.call(void 0,p[V],d&&d[V],o)}var Lu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fm(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),S=null;if(0<=p){var V=o[d].substring(0,p);S=o[d].substring(p+1)}else V=o[d];u(V,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function nr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof nr){this.h=o.h,Fi(this,o.j),this.o=o.o,this.g=o.g,Ui(this,o.s),this.l=o.l;var u=o.i,d=new ws;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Fu(this,d),this.m=o.m}else o&&(u=String(o).match(Lu))?(this.h=!1,Fi(this,u[1]||"",!0),this.o=Es(u[2]||""),this.g=Es(u[3]||"",!0),Ui(this,u[4]),this.l=Es(u[5]||"",!0),Fu(this,u[6]||"",!0),this.m=Es(u[7]||"")):(this.h=!1,this.i=new ws(null,this.h))}nr.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Ts(u,Uu,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Ts(u,Uu,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Ts(d,d.charAt(0)=="/"?$m:Bm,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Ts(d,qm)),o.join("")};function sn(o){return new nr(o)}function Fi(o,u,d){o.j=d?Es(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ui(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Fu(o,u,d){u instanceof ws?(o.i=u,Wm(o.i,o.h)):(d||(u=Ts(u,jm)),o.i=new ws(u,o.h))}function De(o,u,d){o.i.set(u,d)}function Bi(o){return De(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Es(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ts(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,Um),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Um(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Uu=/[#\/\?@]/g,Bm=/[#\?:]/g,$m=/[#\?]/g,jm=/[#\?@]/g,qm=/#/g;function ws(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Pn(o){o.g||(o.g=new Map,o.h=0,o.i&&Fm(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=ws.prototype,n.add=function(o,u){Pn(this),this.i=null,o=br(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function Bu(o,u){Pn(o),u=br(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function $u(o,u){return Pn(o),u=br(o,u),o.g.has(u)}n.forEach=function(o,u){Pn(this),this.g.forEach(function(d,p){d.forEach(function(S){o.call(u,S,p,this)},this)},this)},n.na=function(){Pn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let p=0;p<u.length;p++){const S=o[p];for(let V=0;V<S.length;V++)d.push(u[p])}return d},n.V=function(o){Pn(this);let u=[];if(typeof o=="string")$u(this,o)&&(u=u.concat(this.g.get(br(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},n.set=function(o,u){return Pn(this),this.i=null,o=br(this,o),$u(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function ju(o,u,d){Bu(o,u),0<d.length&&(o.i=null,o.g.set(br(o,u),C(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var p=u[d];const V=encodeURIComponent(String(p)),W=this.V(p);for(p=0;p<W.length;p++){var S=V;W[p]!==""&&(S+="="+encodeURIComponent(String(W[p]))),o.push(S)}}return this.i=o.join("&")};function br(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Wm(o,u){u&&!o.j&&(Pn(o),o.i=null,o.g.forEach(function(d,p){var S=p.toLowerCase();p!=S&&(Bu(this,p),ju(this,S,d))},o)),o.j=u}function Hm(o,u){const d=new ys;if(l.Image){const p=new Image;p.onload=w(Cn,d,"TestLoadImage: loaded",!0,u,p),p.onerror=w(Cn,d,"TestLoadImage: error",!1,u,p),p.onabort=w(Cn,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=w(Cn,d,"TestLoadImage: timeout",!1,u,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function Km(o,u){const d=new ys,p=new AbortController,S=setTimeout(()=>{p.abort(),Cn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(V=>{clearTimeout(S),V.ok?Cn(d,"TestPingServer: ok",!0,u):Cn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),Cn(d,"TestPingServer: error",!1,u)})}function Cn(o,u,d,p,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),p(d)}catch{}}function zm(){this.g=new Ni}function Gm(o,u,d){const p=d||"";try{xu(o,function(S,V){let W=S;h(S)&&(W=Ge(S)),u.push(p+V+"="+encodeURIComponent(W))})}catch(S){throw u.push(p+"type="+encodeURIComponent("_badmap")),S}}function $i(o){this.l=o.Ub||null,this.j=o.eb||!1}P($i,Ir),$i.prototype.g=function(){return new ji(this.l,this.j)},$i.prototype.i=function(o){return function(){return o}}({});function ji(o,u){se.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(ji,se),n=ji.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,As(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Is(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,As(this)),this.g&&(this.readyState=3,As(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;qu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function qu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Is(this):As(this),this.readyState==3&&qu(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Is(this))},n.Qa=function(o){this.g&&(this.response=o,Is(this))},n.ga=function(){this.g&&Is(this)};function Is(o){o.readyState=4,o.l=null,o.j=null,o.v=null,As(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function As(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ji.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Wu(o){let u="";return J(o,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function La(o,u,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Wu(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):De(o,u,d))}function Le(o){se.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Le,se);var Qm=/^https?$/i,Ym=["POST","PUT"];n=Le.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ka.g(),this.v=this.o?vu(this.o):vu(ka),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(V){Hu(this,V);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var S in p)d.set(S,p[S]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const V of p.keys())d.set(V,p.get(V));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),S=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Ym,u,void 0))||p||S||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,W]of d)this.g.setRequestHeader(V,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Gu(this),this.u=!0,this.g.send(o),this.u=!1}catch(V){Hu(this,V)}};function Hu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Ku(o),qi(o)}function Ku(o){o.A||(o.A=!0,de(o,"complete"),de(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,de(this,"complete"),de(this,"abort"),qi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qi(this,!0)),Le.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?zu(this):this.bb())},n.bb=function(){zu(this)};function zu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||on(o)!=4||o.Z()!=2)){if(o.u&&on(o)==4)Oe(o.Ea,0,o);else if(de(o,"readystatechange"),on(o)==4){o.h=!1;try{const W=o.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var p;if(p=W===0){var S=String(o.D).match(Lu)[1]||null;!S&&l.self&&l.self.location&&(S=l.self.location.protocol.slice(0,-1)),p=!Qm.test(S?S.toLowerCase():"")}d=p}if(d)de(o,"complete"),de(o,"success");else{o.m=6;try{var V=2<on(o)?o.g.statusText:""}catch{V=""}o.l=V+" ["+o.Z()+"]",Ku(o)}}finally{qi(o)}}}}function qi(o,u){if(o.g){Gu(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||de(o,"ready");try{d.onreadystatechange=p}catch{}}}function Gu(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function on(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<on(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),St(u)}};function Qu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Jm(o){const u={};o=(o.g&&2<=on(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(L(o[p]))continue;var d=A(o[p]);const S=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=u[S]||[];u[S]=V,V.push(d)}_(u,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function bs(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function Yu(o){this.Aa=0,this.i=[],this.j=new ys,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=bs("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=bs("baseRetryDelayMs",5e3,o),this.cb=bs("retryDelaySeedMs",1e4,o),this.Wa=bs("forwardChannelMaxRetries",2,o),this.wa=bs("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Vu(o&&o.concurrentRequestLimit),this.Da=new zm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Yu.prototype,n.la=8,n.G=1,n.connect=function(o,u,d,p){dt(0),this.W=o,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=ih(this,null,this.W),Hi(this)};function Fa(o){if(Ju(o),o.G==3){var u=o.U++,d=sn(o.I);if(De(d,"SID",o.K),De(d,"RID",u),De(d,"TYPE","terminate"),Rs(o,d),u=new Sn(o,o.j,u),u.L=2,u.v=Bi(sn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=oh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Li(u)}sh(o)}function Wi(o){o.g&&(Ba(o),o.g.cancel(),o.g=null)}function Ju(o){Wi(o),o.u&&(l.clearTimeout(o.u),o.u=null),Ki(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Hi(o){if(!Du(o.h)&&!o.s){o.s=!0;var u=o.Ga;Ie||Jn(),Ee||(Ie(),Ee=!0),Dt.add(u,o),o.B=0}}function Xm(o,u){return Nu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=_s(y(o.Ga,o,u),rh(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const S=new Sn(this,this.j,o);let V=this.o;if(this.S&&(V?(V=m(V),I(V,this.S)):V=this.S),this.m!==null||this.O||(S.H=V,V=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Zu(this,S,u),d=sn(this.I),De(d,"RID",o),De(d,"CVER",22),this.D&&De(d,"X-HTTP-Session-Id",this.D),Rs(this,d),V&&(this.O?u="headers="+encodeURIComponent(String(Wu(V)))+"&"+u:this.m&&La(d,this.m,V)),xa(this.h,S),this.Ua&&De(d,"TYPE","init"),this.P?(De(d,"$req",u),De(d,"SID","null"),S.T=!0,Da(S,d,null)):Da(S,d,u),this.G=2}}else this.G==3&&(o?Xu(this,o):this.i.length==0||Du(this.h)||Xu(this))};function Xu(o,u){var d;u?d=u.l:d=o.U++;const p=sn(o.I);De(p,"SID",o.K),De(p,"RID",d),De(p,"AID",o.T),Rs(o,p),o.m&&o.o&&La(p,o.m,o.o),d=new Sn(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Zu(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),xa(o.h,d),Da(d,p,u)}function Rs(o,u){o.H&&J(o.H,function(d,p){De(u,p,d)}),o.l&&xu({},function(d,p){De(u,p,d)})}function Zu(o,u,d){d=Math.min(o.i.length,d);var p=o.l?y(o.l.Na,o.l,o):null;e:{var S=o.i;let V=-1;for(;;){const W=["count="+d];V==-1?0<d?(V=S[0].g,W.push("ofs="+V)):V=0:W.push("ofs="+V);let Pe=!0;for(let Qe=0;Qe<d;Qe++){let Te=S[Qe].g;const rt=S[Qe].map;if(Te-=V,0>Te)V=Math.max(0,S[Qe].g-100),Pe=!1;else try{Gm(rt,W,"req"+Te+"_")}catch{p&&p(rt)}}if(Pe){p=W.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,p}function eh(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Ie||Jn(),Ee||(Ie(),Ee=!0),Dt.add(u,o),o.v=0}}function Ua(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=_s(y(o.Fa,o),rh(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,th(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=_s(y(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,dt(10),Wi(this),th(this))};function Ba(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function th(o){o.g=new Sn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=sn(o.qa);De(u,"RID","rpc"),De(u,"SID",o.K),De(u,"AID",o.T),De(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&De(u,"TO",o.ja),De(u,"TYPE","xmlhttp"),Rs(o,u),o.m&&o.o&&La(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Bi(sn(u)),d.m=null,d.P=!0,Pu(d,o)}n.Za=function(){this.C!=null&&(this.C=null,Wi(this),Ua(this),dt(19))};function Ki(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function nh(o,u){var d=null;if(o.g==u){Ki(o),Ba(o),o.g=null;var p=2}else if(Ma(o.h,u))d=u.D,Ou(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var S=o.B;p=Oi(),de(p,new Au(p,d)),Hi(o)}else eh(o);else if(S=u.s,S==3||S==0&&0<u.X||!(p==1&&Xm(o,u)||p==2&&Ua(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),S){case 1:rr(o,5);break;case 4:rr(o,10);break;case 3:rr(o,6);break;default:rr(o,2)}}}function rh(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function rr(o,u){if(o.j.info("Error code "+u),u==2){var d=y(o.fb,o),p=o.Xa;const S=!p;p=new nr(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Fi(p,"https"),Bi(p),S?Hm(p.toString(),d):Km(p.toString(),d)}else dt(2);o.G=0,o.l&&o.l.sa(u),sh(o),Ju(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function sh(o){if(o.G=0,o.ka=[],o.l){const u=Mu(o.h);(u.length!=0||o.i.length!=0)&&(k(o.ka,u),k(o.ka,o.i),o.h.i.length=0,C(o.i),o.i.length=0),o.l.ra()}}function ih(o,u,d){var p=d instanceof nr?sn(d):new nr(d);if(p.g!="")u&&(p.g=u+"."+p.g),Ui(p,p.s);else{var S=l.location;p=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var V=new nr(null);p&&Fi(V,p),u&&(V.g=u),S&&Ui(V,S),d&&(V.l=d),p=V}return d=o.D,u=o.ya,d&&u&&De(p,d,u),De(p,"VER",o.la),Rs(o,p),p}function oh(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Le(new $i({eb:d})):new Le(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ah(){}n=ah.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function zi(){}zi.prototype.g=function(o,u){return new Et(o,u)};function Et(o,u){se.call(this),this.g=new Yu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!L(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!L(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Rr(this)}P(Et,se),Et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Et.prototype.close=function(){Fa(this.g)},Et.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Ge(o),o=d);u.i.push(new Mm(u.Ya++,o)),u.G==3&&Hi(u)},Et.prototype.N=function(){this.g.l=null,delete this.j,Fa(this.g),delete this.g,Et.aa.N.call(this)};function lh(o){Pa.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}P(lh,Pa);function ch(){Ca.call(this),this.status=1}P(ch,Ca);function Rr(o){this.g=o}P(Rr,ah),Rr.prototype.ua=function(){de(this.g,"a")},Rr.prototype.ta=function(o){de(this.g,new lh(o))},Rr.prototype.sa=function(o){de(this.g,new ch)},Rr.prototype.ra=function(){de(this.g,"b")},zi.prototype.createWebChannel=zi.prototype.g,Et.prototype.send=Et.prototype.o,Et.prototype.open=Et.prototype.m,Et.prototype.close=Et.prototype.close,Op=function(){return new zi},Np=function(){return Oi()},Dp=er,Ll={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Mi.NO_ERROR=0,Mi.TIMEOUT=8,Mi.HTTP_ERROR=6,lo=Mi,bu.COMPLETE="complete",Vp=bu,Eu.EventType=gs,gs.OPEN="a",gs.CLOSE="b",gs.ERROR="c",gs.MESSAGE="d",se.prototype.listen=se.prototype.K,Fs=Eu,Le.prototype.listenOnce=Le.prototype.L,Le.prototype.getLastError=Le.prototype.Ka,Le.prototype.getLastErrorCode=Le.prototype.Ba,Le.prototype.getStatus=Le.prototype.Z,Le.prototype.getResponseJson=Le.prototype.Oa,Le.prototype.getResponseText=Le.prototype.oa,Le.prototype.send=Le.prototype.ea,Le.prototype.setWithCredentials=Le.prototype.Ha,kp=Le}).apply(typeof Zi<"u"?Zi:typeof self<"u"?self:typeof window<"u"?window:{});const ed="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let as="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new Tc("@firebase/firestore");function ks(){return gr.logLevel}function X(n,...e){if(gr.logLevel<=_e.DEBUG){const t=e.map(Ac);gr.debug(`Firestore (${as}): ${n}`,...t)}}function Tn(n,...e){if(gr.logLevel<=_e.ERROR){const t=e.map(Ac);gr.error(`Firestore (${as}): ${n}`,...t)}}function Jr(n,...e){if(gr.logLevel<=_e.WARN){const t=e.map(Ac);gr.warn(`Firestore (${as}): ${n}`,...t)}}function Ac(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(n="Unexpected state"){const e=`FIRESTORE (${as}) INTERNAL ASSERTION FAILED: `+n;throw Tn(e),new Error(e)}function Re(n,e){n||le()}function he(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends bn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ot.UNAUTHENTICATED))}shutdown(){}}class sT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class iT{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Re(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new yn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new yn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new yn)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Re(typeof r.accessToken=="string"),new Mp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string"),new ot(e)}}class oT{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class aT{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new oT(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class lT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cT{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Re(this.o===void 0);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,X("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Re(typeof t.token=="string"),this.R=t.token,new lT(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=uT(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function we(n,e){return n<e?-1:n>e?1:0}function Xr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new K(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new K(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new K(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Ke(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ue(e)}static min(){return new ue(new Ke(0,0))}static max(){return new ue(new Ke(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,t,r){t===void 0?t=0:t>e.length&&le(),r===void 0?r=e.length-t:r>e.length-t&&le(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return oi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof oi?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ve extends oi{construct(e,t,r){return new Ve(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Ve(t)}static emptyPath(){return new Ve([])}}const hT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends oi{construct(e,t,r){return new Xe(e,t,r)}static isValidIdentifier(e){return hT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Xe(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new K(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new K(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new K(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new K(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(t)}static emptyPath(){return new Xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(Ve.fromString(e))}static fromName(e){return new ee(Ve.fromString(e).popFirst(5))}static empty(){return new ee(Ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ve.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new Ve(e.slice()))}}function dT(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=ue.fromTimestamp(r===1e9?new Ke(t+1,0):new Ke(t,r));return new Wn(s,ee.empty(),e)}function fT(n){return new Wn(n.readTime,n.key,-1)}class Wn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Wn(ue.min(),ee.empty(),-1)}static max(){return new Wn(ue.max(),ee.empty(),-1)}}function pT(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ee.comparator(n.documentKey,e.documentKey),t!==0?t:we(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class mT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ti(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==gT)throw n;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&le(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof U?t:U.resolve(t)}catch(t){return U.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):U.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):U.reject(t)}static resolve(e){return new U((t,r)=>{t(e)})}static reject(e){return new U((t,r)=>{r(e)})}static waitFor(e){return new U((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},c=>r(c))}),a=!0,i===s&&t()})}static or(e){let t=U.resolve(!1);for(const r of e)t=t.next(s=>s?U.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new U((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;t(e[h]).next(f=>{a[h]=f,++l,l===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new U((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function _T(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function wi(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}bc.oe=-1;function na(n){return n==null}function Co(n){return n===0&&1/n==-1/0}function yT(n){return typeof n=="number"&&Number.isInteger(n)&&!Co(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function vr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Lp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,t){this.comparator=e,this.root=t||Je.EMPTY}insert(e,t){return new xe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Je.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Je.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new eo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new eo(this.root,e,this.comparator,!1)}getReverseIterator(){return new eo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new eo(this.root,e,this.comparator,!0)}}class eo{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Je{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Je.RED,this.left=s??Je.EMPTY,this.right=i??Je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Je(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Je.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw le();const e=this.left.check();if(e!==this.right.check())throw le();return e+(this.isRed()?0:1)}}Je.EMPTY=null,Je.RED=!0,Je.BLACK=!1;Je.EMPTY=new class{constructor(){this.size=0}get key(){throw le()}get value(){throw le()}get color(){throw le()}get left(){throw le()}get right(){throw le()}copy(e,t,r,s,i){return this}insert(e,t,r){return new Je(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new nd(this.data.getIterator())}getIteratorFrom(e){return new nd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ze(this.comparator);return t.data=e,t}}class nd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new It([])}unionWith(e){let t=new Ze(Xe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new It(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Xr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Fp("Invalid base64 string: "+i):i}}(e);return new tt(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new tt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const vT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hn(n){if(Re(!!n),typeof n=="string"){let e=0;const t=vT.exec(n);if(Re(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ue(n.seconds),nanos:Ue(n.nanos)}}function Ue(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function mr(n){return typeof n=="string"?tt.fromBase64String(n):tt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Rc(n){const e=n.mapValue.fields.__previous_value__;return ra(e)?Rc(e):e}function ai(n){const e=Hn(n.mapValue.fields.__local_write_time__.timestampValue);return new Ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e,t,r,s,i,a,l,c,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class li{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new li("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof li&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to={mapValue:{}};function _r(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ra(n)?4:wT(n)?9007199254740991:TT(n)?10:11:le()}function en(n,e){if(n===e)return!0;const t=_r(n);if(t!==_r(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ai(n).isEqual(ai(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Hn(s.timestampValue),l=Hn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return mr(s.bytesValue).isEqual(mr(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Ue(s.geoPointValue.latitude)===Ue(i.geoPointValue.latitude)&&Ue(s.geoPointValue.longitude)===Ue(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ue(s.integerValue)===Ue(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Ue(s.doubleValue),l=Ue(i.doubleValue);return a===l?Co(a)===Co(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return Xr(n.arrayValue.values||[],e.arrayValue.values||[],en);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(td(a)!==td(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!en(a[c],l[c])))return!1;return!0}(n,e);default:return le()}}function ci(n,e){return(n.values||[]).find(t=>en(t,e))!==void 0}function Zr(n,e){if(n===e)return 0;const t=_r(n),r=_r(e);if(t!==r)return we(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return we(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=Ue(i.integerValue||i.doubleValue),c=Ue(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return rd(n.timestampValue,e.timestampValue);case 4:return rd(ai(n),ai(e));case 5:return we(n.stringValue,e.stringValue);case 6:return function(i,a){const l=mr(i),c=mr(a);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=we(l[h],c[h]);if(f!==0)return f}return we(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=we(Ue(i.latitude),Ue(a.latitude));return l!==0?l:we(Ue(i.longitude),Ue(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return sd(n.arrayValue,e.arrayValue);case 10:return function(i,a){var l,c,h,f;const g=i.fields||{},y=a.fields||{},w=(l=g.value)===null||l===void 0?void 0:l.arrayValue,P=(c=y.value)===null||c===void 0?void 0:c.arrayValue,C=we(((h=w==null?void 0:w.values)===null||h===void 0?void 0:h.length)||0,((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0);return C!==0?C:sd(w,P)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===to.mapValue&&a===to.mapValue)return 0;if(i===to.mapValue)return 1;if(a===to.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let g=0;g<c.length&&g<f.length;++g){const y=we(c[g],f[g]);if(y!==0)return y;const w=Zr(l[c[g]],h[f[g]]);if(w!==0)return w}return we(c.length,f.length)}(n.mapValue,e.mapValue);default:throw le()}}function rd(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return we(n,e);const t=Hn(n),r=Hn(e),s=we(t.seconds,r.seconds);return s!==0?s:we(t.nanos,r.nanos)}function sd(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Zr(t[s],r[s]);if(i)return i}return we(t.length,r.length)}function es(n){return Fl(n)}function Fl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Hn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return mr(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ee.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Fl(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Fl(t.fields[a])}`;return s+"}"}(n.mapValue):le()}function ko(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ul(n){return!!n&&"integerValue"in n}function Sc(n){return!!n&&"arrayValue"in n}function id(n){return!!n&&"nullValue"in n}function od(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function co(n){return!!n&&"mapValue"in n}function TT(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ys(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return vr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ys(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ys(n.arrayValue.values[t]);return e}return Object.assign({},n)}function wT(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.value=e}static empty(){return new vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!co(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ys(t)}setAll(e){let t=Xe.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=Ys(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());co(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return en(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];co(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){vr(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new vt(Ys(this.value))}}function Up(n){const e=[];return vr(n.fields,(t,r)=>{const s=new Xe([t]);if(co(r)){const i=Up(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new It(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new ct(e,0,ue.min(),ue.min(),ue.min(),vt.empty(),0)}static newFoundDocument(e,t,r,s){return new ct(e,1,t,ue.min(),r,s,0)}static newNoDocument(e,t){return new ct(e,2,t,ue.min(),ue.min(),vt.empty(),0)}static newUnknownDocument(e,t){return new ct(e,3,t,ue.min(),ue.min(),vt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t){this.position=e,this.inclusive=t}}function ad(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=ee.comparator(ee.fromName(a.referenceValue),t.key):r=Zr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ld(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!en(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,t="asc"){this.field=e,this.dir=t}}function IT(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{}class qe extends Bp{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new bT(e,t,r):t==="array-contains"?new PT(e,r):t==="in"?new CT(e,r):t==="not-in"?new kT(e,r):t==="array-contains-any"?new VT(e,r):new qe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new RT(e,r):new ST(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Zr(t,this.value)):t!==null&&_r(this.value)===_r(t)&&this.matchesComparison(Zr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ft extends Bp{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Ft(e,t)}matches(e){return $p(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function $p(n){return n.op==="and"}function jp(n){return AT(n)&&$p(n)}function AT(n){for(const e of n.filters)if(e instanceof Ft)return!1;return!0}function Bl(n){if(n instanceof qe)return n.field.canonicalString()+n.op.toString()+es(n.value);if(jp(n))return n.filters.map(e=>Bl(e)).join(",");{const e=n.filters.map(t=>Bl(t)).join(",");return`${n.op}(${e})`}}function qp(n,e){return n instanceof qe?function(r,s){return s instanceof qe&&r.op===s.op&&r.field.isEqual(s.field)&&en(r.value,s.value)}(n,e):n instanceof Ft?function(r,s){return s instanceof Ft&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&qp(a,s.filters[l]),!0):!1}(n,e):void le()}function Wp(n){return n instanceof qe?function(t){return`${t.field.canonicalString()} ${t.op} ${es(t.value)}`}(n):n instanceof Ft?function(t){return t.op.toString()+" {"+t.getFilters().map(Wp).join(" ,")+"}"}(n):"Filter"}class bT extends qe{constructor(e,t,r){super(e,t,r),this.key=ee.fromName(r.referenceValue)}matches(e){const t=ee.comparator(e.key,this.key);return this.matchesComparison(t)}}class RT extends qe{constructor(e,t){super(e,"in",t),this.keys=Hp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ST extends qe{constructor(e,t){super(e,"not-in",t),this.keys=Hp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Hp(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>ee.fromName(r.referenceValue))}class PT extends qe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Sc(t)&&ci(t.arrayValue,this.value)}}class CT extends qe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ci(this.value.arrayValue,t)}}class kT extends qe{constructor(e,t){super(e,"not-in",t)}matches(e){if(ci(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ci(this.value.arrayValue,t)}}class VT extends qe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Sc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ci(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.ue=null}}function cd(n,e=null,t=[],r=[],s=null,i=null,a=null){return new DT(n,e,t,r,s,i,a)}function Pc(n){const e=he(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Bl(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),na(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>es(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>es(r)).join(",")),e.ue=t}return e.ue}function Cc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!IT(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!qp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ld(n.startAt,e.startAt)&&ld(n.endAt,e.endAt)}function $l(n){return ee.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function NT(n,e,t,r,s,i,a,l){return new Er(n,e,t,r,s,i,a,l)}function sa(n){return new Er(n)}function ud(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function kc(n){return n.collectionGroup!==null}function jr(n){const e=he(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ze(Xe.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new ui(i,r))}),t.has(Xe.keyField().canonicalString())||e.ce.push(new ui(Xe.keyField(),r))}return e.ce}function zt(n){const e=he(n);return e.le||(e.le=OT(e,jr(n))),e.le}function OT(n,e){if(n.limitType==="F")return cd(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ui(s.field,i)});const t=n.endAt?new ts(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ts(n.startAt.position,n.startAt.inclusive):null;return cd(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function jl(n,e){const t=n.filters.concat([e]);return new Er(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Vo(n,e,t){return new Er(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ia(n,e){return Cc(zt(n),zt(e))&&n.limitType===e.limitType}function Kp(n){return`${Pc(zt(n))}|lt:${n.limitType}`}function Vr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Wp(s)).join(", ")}]`),na(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>es(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>es(s)).join(",")),`Target(${r})`}(zt(n))}; limitType=${n.limitType})`}function oa(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ee.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of jr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=ad(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,jr(r),s)||r.endAt&&!function(a,l,c){const h=ad(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,jr(r),s))}(n,e)}function MT(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function zp(n){return(e,t)=>{let r=!1;for(const s of jr(n)){const i=xT(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function xT(n,e,t){const r=n.field.isKeyField()?ee.comparator(e.key,t.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?Zr(c,h):le()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return le()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){vr(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Lp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT=new xe(ee.comparator);function wn(){return LT}const Gp=new xe(ee.comparator);function Us(...n){let e=Gp;for(const t of n)e=e.insert(t.key,t);return e}function Qp(n){let e=Gp;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function ur(){return Js()}function Yp(){return Js()}function Js(){return new ls(n=>n.toString(),(n,e)=>n.isEqual(e))}const FT=new xe(ee.comparator),UT=new Ze(ee.comparator);function me(...n){let e=UT;for(const t of n)e=e.add(t);return e}const BT=new Ze(we);function $T(){return BT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Co(e)?"-0":e}}function Jp(n){return{integerValue:""+n}}function jT(n,e){return yT(e)?Jp(e):Vc(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(){this._=void 0}}function qT(n,e,t){return n instanceof hi?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ra(i)&&(i=Rc(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):n instanceof di?Zp(n,e):n instanceof fi?eg(n,e):function(s,i){const a=Xp(s,i),l=hd(a)+hd(s.Pe);return Ul(a)&&Ul(s.Pe)?Jp(l):Vc(s.serializer,l)}(n,e)}function WT(n,e,t){return n instanceof di?Zp(n,e):n instanceof fi?eg(n,e):t}function Xp(n,e){return n instanceof Do?function(r){return Ul(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class hi extends aa{}class di extends aa{constructor(e){super(),this.elements=e}}function Zp(n,e){const t=tg(e);for(const r of n.elements)t.some(s=>en(s,r))||t.push(r);return{arrayValue:{values:t}}}class fi extends aa{constructor(e){super(),this.elements=e}}function eg(n,e){let t=tg(e);for(const r of n.elements)t=t.filter(s=>!en(s,r));return{arrayValue:{values:t}}}class Do extends aa{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function hd(n){return Ue(n.integerValue||n.doubleValue)}function tg(n){return Sc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e,t){this.field=e,this.transform=t}}function KT(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof di&&s instanceof di||r instanceof fi&&s instanceof fi?Xr(r.elements,s.elements,en):r instanceof Do&&s instanceof Do?en(r.Pe,s.Pe):r instanceof hi&&s instanceof hi}(n.transform,e.transform)}class zT{constructor(e,t){this.version=e,this.transformResults=t}}class bt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new bt}static exists(e){return new bt(void 0,e)}static updateTime(e){return new bt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function uo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class la{}function ng(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ca(n.key,bt.none()):new Ii(n.key,n.data,bt.none());{const t=n.data,r=vt.empty();let s=new Ze(Xe.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Qn(n.key,r,new It(s.toArray()),bt.none())}}function GT(n,e,t){n instanceof Ii?function(s,i,a){const l=s.value.clone(),c=fd(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Qn?function(s,i,a){if(!uo(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=fd(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(rg(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Xs(n,e,t,r){return n instanceof Ii?function(i,a,l,c){if(!uo(i.precondition,a))return l;const h=i.value.clone(),f=pd(i.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof Qn?function(i,a,l,c){if(!uo(i.precondition,a))return l;const h=pd(i.fieldTransforms,c,a),f=a.data;return f.setAll(rg(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(i,a,l){return uo(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function QT(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Xp(r.transform,s||null);i!=null&&(t===null&&(t=vt.empty()),t.set(r.field,i))}return t||null}function dd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Xr(r,s,(i,a)=>KT(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ii extends la{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Qn extends la{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function rg(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function fd(n,e,t){const r=new Map;Re(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,WT(a,l,t[s]))}return r}function pd(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,qT(i,a,e))}return r}class ca extends la{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class YT extends la{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&GT(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Xs(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Xs(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Yp();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const c=ng(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(ue.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),me())}isEqual(e){return this.batchId===e.batchId&&Xr(this.mutations,e.mutations,(t,r)=>dd(t,r))&&Xr(this.baseMutations,e.baseMutations,(t,r)=>dd(t,r))}}class Dc{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Re(e.mutations.length===r.length);let s=function(){return FT}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Dc(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je,ye;function ew(n){switch(n){default:return le();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function sg(n){if(n===void 0)return Tn("GRPC error has no .code"),N.UNKNOWN;switch(n){case je.OK:return N.OK;case je.CANCELLED:return N.CANCELLED;case je.UNKNOWN:return N.UNKNOWN;case je.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case je.INTERNAL:return N.INTERNAL;case je.UNAVAILABLE:return N.UNAVAILABLE;case je.UNAUTHENTICATED:return N.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case je.NOT_FOUND:return N.NOT_FOUND;case je.ALREADY_EXISTS:return N.ALREADY_EXISTS;case je.PERMISSION_DENIED:return N.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case je.ABORTED:return N.ABORTED;case je.OUT_OF_RANGE:return N.OUT_OF_RANGE;case je.UNIMPLEMENTED:return N.UNIMPLEMENTED;case je.DATA_LOSS:return N.DATA_LOSS;default:return le()}}(ye=je||(je={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw=new fr([4294967295,4294967295],0);function gd(n){const e=tw().encode(n),t=new Cp;return t.update(e),new Uint8Array(t.digest())}function md(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new fr([t,r],0),new fr([s,i],0)]}class Nc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Bs(`Invalid padding: ${t}`);if(r<0)throw new Bs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Bs(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Bs(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=fr.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(fr.fromNumber(r)));return s.compare(nw)===1&&(s=new fr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=gd(e),[r,s]=md(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Nc(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=gd(e),[r,s]=md(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Bs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Ai.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ua(ue.min(),s,new xe(we),wn(),me())}}class Ai{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ai(r,t,me(),me(),me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class ig{constructor(e,t){this.targetId=e,this.me=t}}class og{constructor(e,t,r=tt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class _d{constructor(){this.fe=0,this.ge=vd(),this.pe=tt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=me(),t=me(),r=me();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:le()}}),new Ai(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=vd()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Re(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class rw{constructor(e){this.Le=e,this.Be=new Map,this.ke=wn(),this.qe=yd(),this.Qe=new xe(we)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:le()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if($l(i))if(r===0){const a=new ee(i.path);this.Ue(t,a,ct.newNoDocument(a,ue.min()))}else Re(r===1);else{const a=this.Ye(t);if(a!==r){const l=this.Ze(e),c=l?this.Xe(l,e,a):1;if(c!==0){this.je(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=mr(r).toUint8Array()}catch(c){if(c instanceof Fp)return Jr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Nc(a,s,i)}catch(c){return Jr(c instanceof Bs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,a)=>{const l=this.Je(a);if(l){if(i.current&&$l(l.target)){const c=new ee(l.target.path);this.ke.get(c)!==null||this.it(a,c)||this.Ue(a,c,ct.newNoDocument(c,e))}i.be&&(t.set(a,i.ve()),i.Ce())}});let r=me();this.qe.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new ua(e,t,this.Qe,this.ke,r);return this.ke=wn(),this.qe=yd(),this.Qe=new xe(we),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new _d,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ze(we),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||X("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new _d),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function yd(){return new xe(ee.comparator)}function vd(){return new xe(ee.comparator)}const sw={asc:"ASCENDING",desc:"DESCENDING"},iw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ow={and:"AND",or:"OR"};class aw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ql(n,e){return n.useProto3Json||na(e)?e:{value:e}}function No(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ag(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function lw(n,e){return No(n,e.toTimestamp())}function Gt(n){return Re(!!n),ue.fromTimestamp(function(t){const r=Hn(t);return new Ke(r.seconds,r.nanos)}(n))}function Oc(n,e){return Wl(n,e).canonicalString()}function Wl(n,e){const t=function(s){return new Ve(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function lg(n){const e=Ve.fromString(n);return Re(fg(e)),e}function Hl(n,e){return Oc(n.databaseId,e.path)}function ll(n,e){const t=lg(e);if(t.get(1)!==n.databaseId.projectId)throw new K(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new K(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ee(ug(t))}function cg(n,e){return Oc(n.databaseId,e)}function cw(n){const e=lg(n);return e.length===4?Ve.emptyPath():ug(e)}function Kl(n){return new Ve(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ug(n){return Re(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Ed(n,e,t){return{name:Hl(n,e),fields:t.value.mapValue.fields}}function uw(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:le()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Re(f===void 0||typeof f=="string"),tt.fromBase64String(f||"")):(Re(f===void 0||f instanceof Buffer||f instanceof Uint8Array),tt.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?N.UNKNOWN:sg(h.code);return new K(f,h.message||"")}(a);t=new og(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ll(n,r.document.name),i=Gt(r.document.updateTime),a=r.document.createTime?Gt(r.document.createTime):ue.min(),l=new vt({mapValue:{fields:r.document.fields}}),c=ct.newFoundDocument(s,i,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];t=new ho(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ll(n,r.document),i=r.readTime?Gt(r.readTime):ue.min(),a=ct.newNoDocument(s,i),l=r.removedTargetIds||[];t=new ho([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ll(n,r.document),i=r.removedTargetIds||[];t=new ho([],i,s,null)}else{if(!("filter"in e))return le();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new ZT(s,i),l=r.targetId;t=new ig(l,a)}}return t}function hw(n,e){let t;if(e instanceof Ii)t={update:Ed(n,e.key,e.value)};else if(e instanceof ca)t={delete:Hl(n,e.key)};else if(e instanceof Qn)t={update:Ed(n,e.key,e.data),updateMask:Ew(e.fieldMask)};else{if(!(e instanceof YT))return le();t={verify:Hl(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof hi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof di)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof fi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Do)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw le()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:lw(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:le()}(n,e.precondition)),t}function dw(n,e){return n&&n.length>0?(Re(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?Gt(s.updateTime):Gt(i);return a.isEqual(ue.min())&&(a=Gt(i)),new zT(a,s.transformResults||[])}(t,e))):[]}function fw(n,e){return{documents:[cg(n,e.path)]}}function pw(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=cg(n,s);const i=function(h){if(h.length!==0)return dg(Ft.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:Dr(y.field),direction:_w(y.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=ql(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:s}}function gw(n){let e=cw(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Re(r===1);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(g){const y=hg(g);return y instanceof Ft&&jp(y)?y.getFilters():[y]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(y=>function(P){return new ui(Nr(P.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(y))}(t.orderBy));let l=null;t.limit&&(l=function(g){let y;return y=typeof g=="object"?g.value:g,na(y)?null:y}(t.limit));let c=null;t.startAt&&(c=function(g){const y=!!g.before,w=g.values||[];return new ts(w,y)}(t.startAt));let h=null;return t.endAt&&(h=function(g){const y=!g.before,w=g.values||[];return new ts(w,y)}(t.endAt)),NT(e,s,a,i,l,"F",c,h)}function mw(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function hg(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Nr(t.unaryFilter.field);return qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Nr(t.unaryFilter.field);return qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Nr(t.unaryFilter.field);return qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Nr(t.unaryFilter.field);return qe.create(a,"!=",{nullValue:"NULL_VALUE"});default:return le()}}(n):n.fieldFilter!==void 0?function(t){return qe.create(Nr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return le()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ft.create(t.compositeFilter.filters.map(r=>hg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return le()}}(t.compositeFilter.op))}(n):le()}function _w(n){return sw[n]}function yw(n){return iw[n]}function vw(n){return ow[n]}function Dr(n){return{fieldPath:n.canonicalString()}}function Nr(n){return Xe.fromServerFormat(n.fieldPath)}function dg(n){return n instanceof qe?function(t){if(t.op==="=="){if(od(t.value))return{unaryFilter:{field:Dr(t.field),op:"IS_NAN"}};if(id(t.value))return{unaryFilter:{field:Dr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(od(t.value))return{unaryFilter:{field:Dr(t.field),op:"IS_NOT_NAN"}};if(id(t.value))return{unaryFilter:{field:Dr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Dr(t.field),op:yw(t.op),value:t.value}}}(n):n instanceof Ft?function(t){const r=t.getFilters().map(s=>dg(s));return r.length===1?r[0]:{compositeFilter:{op:vw(t.op),filters:r}}}(n):le()}function Ew(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function fg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,t,r,s,i=ue.min(),a=ue.min(),l=tt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Ln(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e){this.ct=e}}function ww(n){const e=gw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Vo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(){this.un=new Aw}addToCollectionParentIndex(e,t){return this.un.add(t),U.resolve()}getCollectionParents(e,t){return U.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return U.resolve()}deleteFieldIndex(e,t){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,t){return U.resolve()}getDocumentsMatchingTarget(e,t){return U.resolve(null)}getIndexType(e,t){return U.resolve(0)}getFieldIndexes(e,t){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,t){return U.resolve(Wn.min())}getMinOffsetFromCollectionGroup(e,t){return U.resolve(Wn.min())}updateCollectionGroup(e,t,r){return U.resolve()}updateIndexEntries(e,t){return U.resolve()}}class Aw{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Ze(Ve.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ze(Ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ns(0)}static kn(){return new ns(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(){this.changes=new ls(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?U.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Xs(r.mutation,s,It.empty(),Ke.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,me()).next(()=>r))}getLocalViewOfDocuments(e,t,r=me()){const s=ur();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Us();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=ur();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,me()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=wn();const a=Js(),l=function(){return Js()}();return t.forEach((c,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Qn)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Xs(f.mutation,h,f.mutation.getFieldMask(),Ke.now())):a.set(h.key,It.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var g;return l.set(h,new Rw(f,(g=a.get(h))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Js();let s=new xe((a,l)=>a-l),i=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let f=r.get(c)||It.empty();f=l.applyToLocalView(h,f),r.set(c,f);const g=(s.get(l.batchId)||me()).add(c);s=s.insert(l.batchId,g)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,g=Yp();f.forEach(y=>{if(!i.has(y)){const w=ng(t.get(y),r.get(y));w!==null&&g.set(y,w),i=i.add(y)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,g))}return U.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return ee.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):kc(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):U.resolve(ur());let l=-1,c=i;return a.next(h=>U.forEach(h,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(f)?U.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{c=c.insert(f,y)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,me())).next(f=>({batchId:l,changes:Qp(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ee(t)).next(r=>{let s=Us();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Us();return this.indexManager.getCollectionParents(e,i).next(l=>U.forEach(l,c=>{const h=function(g,y){return new Er(y,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((g,y)=>{a=a.insert(g,y)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,ct.newInvalidDocument(f)))});let l=Us();return a.forEach((c,h)=>{const f=i.get(c);f!==void 0&&Xs(f.mutation,h,It.empty(),Ke.now()),oa(t,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return U.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Gt(s.createTime)}}(t)),U.resolve()}getNamedQuery(e,t){return U.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:ww(s.bundledQuery),readTime:Gt(s.readTime)}}(t)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(){this.overlays=new xe(ee.comparator),this.Ir=new Map}getOverlay(e,t){return U.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ur();return U.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),U.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),U.resolve()}getOverlaysForCollection(e,t,r){const s=ur(),i=t.length+1,a=new ee(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return U.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new xe((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=ur(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=ur(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return U.resolve(l)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new XT(t,r));let i=this.Ir.get(t);i===void 0&&(i=me(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(){this.sessionToken=tt.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(){this.Tr=new Ze(ze.Er),this.dr=new Ze(ze.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new ze(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new ze(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new ee(new Ve([])),r=new ze(t,e),s=new ze(t,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new ee(new Ve([])),r=new ze(t,e),s=new ze(t,e+1);let i=me();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new ze(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return ee.comparator(e.key,t.key)||we(e.wr,t.wr)}static Ar(e,t){return we(e.wr,t.wr)||ee.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Ze(ze.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new JT(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.br=this.br.add(new ze(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(a)}lookupMutationBatch(e,t){return U.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ze(t,0),s=new ze(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const l=this.Dr(a.wr);i.push(l)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ze(we);return t.forEach(s=>{const i=new ze(s,0),a=new ze(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],l=>{r=r.add(l.wr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;ee.isDocumentKey(i)||(i=i.child(""));const a=new ze(new ee(i),0);let l=new Ze(we);return this.br.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.wr)),!0)},a),U.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Re(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return U.forEach(t.mutations,s=>{const i=new ze(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new ze(t,0),s=this.br.firstAfterOrEqual(r);return U.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e){this.Mr=e,this.docs=function(){return new xe(ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return U.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(t))}getEntries(e,t){let r=wn();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ct.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=wn();const a=t.path,l=new ee(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||pT(fT(f),r)<=0||(s.has(f.key)||oa(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,t,r,s){le()}Or(e,t){return U.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Nw(this)}getSize(e){return U.resolve(this.size)}}class Nw extends bw{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),U.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e){this.persistence=e,this.Nr=new ls(t=>Pc(t),Cc),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Mc,this.targetCount=0,this.kr=ns.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),U.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new ns(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,U.resolve()}updateTargetData(e,t){return this.Kn(t),U.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return U.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),U.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),U.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return U.resolve(r)}containsKey(e,t){return U.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e,t){this.qr={},this.overlays={},this.Qr=new bc(0),this.Kr=!1,this.Kr=!0,this.$r=new kw,this.referenceDelegate=e(this),this.Ur=new Ow(this),this.indexManager=new Iw,this.remoteDocumentCache=function(s){return new Dw(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Tw(t),this.Gr=new Pw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Cw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new Vw(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){X("MemoryPersistence","Starting transaction:",e);const s=new xw(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return U.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class xw extends mT{constructor(e){super(),this.currentSequenceNumber=e}}class xc{constructor(e){this.persistence=e,this.Jr=new Mc,this.Yr=null}static Zr(e){return new xc(e)}get Xr(){if(this.Yr)return this.Yr;throw le()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),U.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),U.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,r=>{const s=ee.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,ue.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return U.or([()=>U.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=me(),s=me();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Lc(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Bv()?8:_T(ht())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Lw;return this.Xi(e,t,a).next(l=>{if(i.result=l,this.zi)return this.es(e,t,a,l.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(ks()<=_e.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",Vr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(ks()<=_e.DEBUG&&X("QueryEngine","Query:",Vr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(ks()<=_e.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",Vr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,zt(t))):U.resolve())}Yi(e,t){if(ud(t))return U.resolve(null);let r=zt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Vo(t,null,"F"),r=zt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=me(...i);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.ts(t,l);return this.ns(t,h,a,c.readTime)?this.Yi(e,Vo(t,null,"F")):this.rs(e,h,t,c)}))})))}Zi(e,t,r,s){return ud(t)||s.isEqual(ue.min())?U.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(t,i);return this.ns(t,a,r,s)?U.resolve(null):(ks()<=_e.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Vr(t)),this.rs(e,a,t,dT(s,-1)).next(l=>l))})}ts(e,t){let r=new Ze(zp(e));return t.forEach((s,i)=>{oa(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return ks()<=_e.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",Vr(t)),this.Ji.getDocumentsMatchingQuery(e,t,Wn.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new xe(we),this._s=new ls(i=>Pc(i),Cc),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Sw(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function Bw(n,e,t,r){return new Uw(n,e,t,r)}async function pg(n,e){const t=he(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=me();for(const h of s){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(r,c).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:l}))})})}function $w(n,e){const t=he(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const g=h.batch,y=g.keys();let w=U.resolve();return y.forEach(P=>{w=w.next(()=>f.getEntry(c,P)).next(C=>{const k=h.docVersions.get(P);Re(k!==null),C.version.compareTo(k)<0&&(g.applyToRemoteDocument(C,h),C.isValidDocument()&&(C.setReadTime(h.commitVersion),f.addEntry(C)))})}),w.next(()=>l.mutationQueue.removeMutationBatch(c,g))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=me();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function gg(n){const e=he(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function jw(n,e){const t=he(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const l=[];e.targetChanges.forEach((f,g)=>{const y=s.get(g);if(!y)return;l.push(t.Ur.removeMatchingKeys(i,f.removedDocuments,g).next(()=>t.Ur.addMatchingKeys(i,f.addedDocuments,g)));let w=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?w=w.withResumeToken(tt.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):f.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(f.resumeToken,r)),s=s.insert(g,w),function(C,k,$){return C.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(y,w,f)&&l.push(t.Ur.updateTargetData(i,w))});let c=wn(),h=me();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(qw(i,a,e.documentUpdates).next(f=>{c=f.Ps,h=f.Is})),!r.isEqual(ue.min())){const f=t.Ur.getLastRemoteSnapshotVersion(i).next(g=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return U.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(t.os=s,i))}function qw(n,e,t){let r=me(),s=me();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=wn();return t.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ue.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):X("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Ps:a,Is:s}})}function Ww(n,e){const t=he(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Hw(n,e){const t=he(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):t.Ur.allocateTargetId(r).next(a=>(s=new Ln(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function zl(n,e,t){const r=he(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!wi(a))throw a;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Td(n,e,t){const r=he(n);let s=ue.min(),i=me();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,f){const g=he(c),y=g._s.get(f);return y!==void 0?U.resolve(g.os.get(y)):g.Ur.getTargetData(h,f)}(r,a,zt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?s:ue.min(),t?i:me())).next(l=>(Kw(r,MT(e),l),{documents:l,Ts:i})))}function Kw(n,e,t){let r=n.us.get(e)||ue.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}class wd{constructor(){this.activeTargetIds=$T()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zw{constructor(){this.so=new wd,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new wd,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let no=null;function cl(){return no===null?no=function(){return 268435456+Math.round(2147483648*Math.random())}():no++,"0x"+no.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it="WebChannelConnection";class Jw extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,a){const l=cl(),c=this.xo(t,r.toUriEncodedString());X("RestConnection",`Sending RPC '${t}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,a),this.No(t,c,h,s).then(f=>(X("RestConnection",`Received RPC '${t}' ${l}: `,f),f),f=>{throw Jr("RestConnection",`RPC '${t}' ${l} failed with error: `,f,"url: ",c,"request:",s),f})}Lo(t,r,s,i,a,l){return this.Mo(t,r,s,i,a)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+as}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}xo(t,r){const s=Qw[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=cl();return new Promise((a,l)=>{const c=new kp;c.setWithCredentials(!0),c.listenOnce(Vp.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case lo.NO_ERROR:const f=c.getResponseJson();X(it,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),a(f);break;case lo.TIMEOUT:X(it,`RPC '${e}' ${i} timed out`),l(new K(N.DEADLINE_EXCEEDED,"Request time out"));break;case lo.HTTP_ERROR:const g=c.getStatus();if(X(it,`RPC '${e}' ${i} failed with status:`,g,"response text:",c.getResponseText()),g>0){let y=c.getResponseJson();Array.isArray(y)&&(y=y[0]);const w=y==null?void 0:y.error;if(w&&w.status&&w.message){const P=function(k){const $=k.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf($)>=0?$:N.UNKNOWN}(w.status);l(new K(P,w.message))}else l(new K(N.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new K(N.UNAVAILABLE,"Connection failed."));break;default:le()}}finally{X(it,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);X(it,`RPC '${e}' ${i} sending request:`,s),c.send(t,"POST",h,r,15)})}Bo(e,t,r){const s=cl(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Op(),l=Np(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const f=i.join("");X(it,`Creating RPC '${e}' stream ${s}: ${f}`,c);const g=a.createWebChannel(f,c);let y=!1,w=!1;const P=new Yw({Io:k=>{w?X(it,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(y||(X(it,`Opening RPC '${e}' stream ${s} transport.`),g.open(),y=!0),X(it,`RPC '${e}' stream ${s} sending:`,k),g.send(k))},To:()=>g.close()}),C=(k,$,L)=>{k.listen($,G=>{try{L(G)}catch(H){setTimeout(()=>{throw H},0)}})};return C(g,Fs.EventType.OPEN,()=>{w||(X(it,`RPC '${e}' stream ${s} transport opened.`),P.yo())}),C(g,Fs.EventType.CLOSE,()=>{w||(w=!0,X(it,`RPC '${e}' stream ${s} transport closed`),P.So())}),C(g,Fs.EventType.ERROR,k=>{w||(w=!0,Jr(it,`RPC '${e}' stream ${s} transport errored:`,k),P.So(new K(N.UNAVAILABLE,"The operation could not be completed")))}),C(g,Fs.EventType.MESSAGE,k=>{var $;if(!w){const L=k.data[0];Re(!!L);const G=L,H=G.error||(($=G[0])===null||$===void 0?void 0:$.error);if(H){X(it,`RPC '${e}' stream ${s} received error:`,H);const ne=H.status;let J=function(v){const I=je[v];if(I!==void 0)return sg(I)}(ne),_=H.message;J===void 0&&(J=N.INTERNAL,_="Unknown error status: "+ne+" with message "+H.message),w=!0,P.So(new K(J,_)),g.close()}else X(it,`RPC '${e}' stream ${s} received:`,L),P.bo(L)}}),C(l,Dp.STAT_EVENT,k=>{k.stat===Ll.PROXY?X(it,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===Ll.NOPROXY&&X(it,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function ul(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(n){return new aw(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e,t,r,s,i,a,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new mg(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(Tn(t.toString()),Tn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new K(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Xw extends _g{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=uw(this.serializer,e),r=function(i){if(!("targetChange"in i))return ue.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ue.min():a.readTime?Gt(a.readTime):ue.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Kl(this.serializer),t.addTarget=function(i,a){let l;const c=a.target;if(l=$l(c)?{documents:fw(i,c)}:{query:pw(i,c)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=ag(i,a.resumeToken);const h=ql(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(ue.min())>0){l.readTime=No(i,a.snapshotVersion.toTimestamp());const h=ql(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=mw(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Kl(this.serializer),t.removeTarget=e,this.a_(t)}}class Zw extends _g{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Re(!!e.streamToken),this.lastStreamToken=e.streamToken,Re(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=dw(e.writeResults,e.commitTime),r=Gt(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Kl(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>hw(this.serializer,r))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new K(N.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,Wl(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(N.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,Wl(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new K(N.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class tI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Tn(t),this.D_=!1):X("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{Tr(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=he(c);h.L_.add(4),await bi(h),h.q_.set("Unknown"),h.L_.delete(4),await da(h)}(this))})}),this.q_=new tI(r,s)}}async function da(n){if(Tr(n))for(const e of n.B_)await e(!0)}async function bi(n){for(const e of n.B_)await e(!1)}function yg(n,e){const t=he(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),$c(t)?Bc(t):cs(t).r_()&&Uc(t,e))}function Fc(n,e){const t=he(n),r=cs(t);t.N_.delete(e),r.r_()&&vg(t,e),t.N_.size===0&&(r.r_()?r.o_():Tr(t)&&t.q_.set("Unknown"))}function Uc(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}cs(n).A_(e)}function vg(n,e){n.Q_.xe(e),cs(n).R_(e)}function Bc(n){n.Q_=new rw({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),cs(n).start(),n.q_.v_()}function $c(n){return Tr(n)&&!cs(n).n_()&&n.N_.size>0}function Tr(n){return he(n).L_.size===0}function Eg(n){n.Q_=void 0}async function rI(n){n.q_.set("Online")}async function sI(n){n.N_.forEach((e,t)=>{Uc(n,e)})}async function iI(n,e){Eg(n),$c(n)?(n.q_.M_(e),Bc(n)):n.q_.set("Unknown")}async function oI(n,e,t){if(n.q_.set("Online"),e instanceof og&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.N_.delete(l),s.Q_.removeTarget(l))}(n,e)}catch(r){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Oo(n,r)}else if(e instanceof ho?n.Q_.Ke(e):e instanceof ig?n.Q_.He(e):n.Q_.We(e),!t.isEqual(ue.min()))try{const r=await gg(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.Q_.rt(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const f=i.N_.get(c);if(!f)return;i.N_.set(c,f.withResumeToken(tt.EMPTY_BYTE_STRING,f.snapshotVersion)),vg(i,c);const g=new Ln(f.target,c,h,f.sequenceNumber);Uc(i,g)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){X("RemoteStore","Failed to raise snapshot:",r),await Oo(n,r)}}async function Oo(n,e,t){if(!wi(e))throw e;n.L_.add(1),await bi(n),n.q_.set("Offline"),t||(t=()=>gg(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await da(n)})}function Tg(n,e){return e().catch(t=>Oo(n,t,e))}async function fa(n){const e=he(n),t=Kn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;aI(e);)try{const s=await Ww(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,lI(e,s)}catch(s){await Oo(e,s)}wg(e)&&Ig(e)}function aI(n){return Tr(n)&&n.O_.length<10}function lI(n,e){n.O_.push(e);const t=Kn(n);t.r_()&&t.V_&&t.m_(e.mutations)}function wg(n){return Tr(n)&&!Kn(n).n_()&&n.O_.length>0}function Ig(n){Kn(n).start()}async function cI(n){Kn(n).p_()}async function uI(n){const e=Kn(n);for(const t of n.O_)e.m_(t.mutations)}async function hI(n,e,t){const r=n.O_.shift(),s=Dc.from(r,e,t);await Tg(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await fa(n)}async function dI(n,e){e&&Kn(n).V_&&await async function(r,s){if(function(a){return ew(a)&&a!==N.ABORTED}(s.code)){const i=r.O_.shift();Kn(r).s_(),await Tg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await fa(r)}}(n,e),wg(n)&&Ig(n)}async function Ad(n,e){const t=he(n);t.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const r=Tr(t);t.L_.add(3),await bi(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await da(t)}async function fI(n,e){const t=he(n);e?(t.L_.delete(2),await da(t)):e||(t.L_.add(2),await bi(t),t.q_.set("Unknown"))}function cs(n){return n.K_||(n.K_=function(t,r,s){const i=he(t);return i.w_(),new Xw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:rI.bind(null,n),Ro:sI.bind(null,n),mo:iI.bind(null,n),d_:oI.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),$c(n)?Bc(n):n.q_.set("Unknown")):(await n.K_.stop(),Eg(n))})),n.K_}function Kn(n){return n.U_||(n.U_=function(t,r,s){const i=he(t);return i.w_(),new Zw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:cI.bind(null,n),mo:dI.bind(null,n),f_:uI.bind(null,n),g_:hI.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await fa(n)):(await n.U_.stop(),n.O_.length>0&&(X("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new yn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new jc(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qc(n,e){if(Tn("AsyncQueue",`${e}: ${n}`),wi(n))return new K(N.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||ee.comparator(t.key,r.key):(t,r)=>ee.comparator(t.key,r.key),this.keyedMap=Us(),this.sortedSet=new xe(this.comparator)}static emptySet(e){return new qr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof qr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new qr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(){this.W_=new xe(ee.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):le():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class rs{constructor(e,t,r,s,i,a,l,c,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new rs(e,t,qr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ia(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class gI{constructor(){this.queries=Rd(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=he(t),i=s.queries;s.queries=Rd(),i.forEach((a,l)=>{for(const c of l.j_)c.onError(r)})})(this,new K(N.ABORTED,"Firestore shutting down"))}}function Rd(){return new ls(n=>Kp(n),ia)}async function Wc(n,e){const t=he(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new pI,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=qc(a,`Initialization of query '${Vr(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&Kc(t)}async function Hc(n,e){const t=he(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function mI(n,e){const t=he(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.j_)l.X_(s)&&(r=!0);a.z_=s}}r&&Kc(t)}function _I(n,e,t){const r=he(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function Kc(n){n.Y_.forEach(e=>{e.next()})}var Gl,Sd;(Sd=Gl||(Gl={})).ea="default",Sd.Cache="cache";class zc{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new rs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=rs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Gl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e){this.key=e}}class bg{constructor(e){this.key=e}}class yI{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=me(),this.mutatedKeys=me(),this.Aa=zp(e),this.Ra=new qr(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new bd,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,g)=>{const y=s.get(f),w=oa(this.query,g)?g:null,P=!!y&&this.mutatedKeys.has(y.key),C=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let k=!1;y&&w?y.data.isEqual(w.data)?P!==C&&(r.track({type:3,doc:w}),k=!0):this.ga(y,w)||(r.track({type:2,doc:w}),k=!0,(c&&this.Aa(w,c)>0||h&&this.Aa(w,h)<0)&&(l=!0)):!y&&w?(r.track({type:0,doc:w}),k=!0):y&&!w&&(r.track({type:1,doc:y}),k=!0,(c||h)&&(l=!0)),k&&(w?(a=a.add(w),i=C?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:l,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,g)=>function(w,P){const C=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le()}};return C(w)-C(P)}(f.type,g.type)||this.Aa(f.doc,g.doc)),this.pa(r),s=s!=null&&s;const l=t&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,h=c!==this.Ea;return this.Ea=c,a.length!==0||h?{snapshot:new rs(this.query,e.Ra,i,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new bd,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=me(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new bg(r))}),this.da.forEach(r=>{e.has(r)||t.push(new Ag(r))}),t}ba(e){this.Ta=e.Ts,this.da=me();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return rs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class vI{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class EI{constructor(e){this.key=e,this.va=!1}}class TI{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new ls(l=>Kp(l),ia),this.Ma=new Map,this.xa=new Set,this.Oa=new xe(ee.comparator),this.Na=new Map,this.La=new Mc,this.Ba={},this.ka=new Map,this.qa=ns.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function wI(n,e,t=!0){const r=Vg(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Rg(r,e,t,!0),s}async function II(n,e){const t=Vg(n);await Rg(t,e,!0,!1)}async function Rg(n,e,t,r){const s=await Hw(n.localStore,zt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await AI(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&yg(n.remoteStore,s),l}async function AI(n,e,t,r,s){n.Ka=(g,y,w)=>async function(C,k,$,L){let G=k.view.ma($);G.ns&&(G=await Td(C.localStore,k.query,!1).then(({documents:_})=>k.view.ma(_,G)));const H=L&&L.targetChanges.get(k.targetId),ne=L&&L.targetMismatches.get(k.targetId)!=null,J=k.view.applyChanges(G,C.isPrimaryClient,H,ne);return Cd(C,k.targetId,J.wa),J.snapshot}(n,g,y,w);const i=await Td(n.localStore,e,!0),a=new yI(e,i.Ts),l=a.ma(i.documents),c=Ai.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(l,n.isPrimaryClient,c);Cd(n,t,h.wa);const f=new vI(e,t,a);return n.Fa.set(e,f),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),h.snapshot}async function bI(n,e,t){const r=he(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!ia(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await zl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Fc(r.remoteStore,s.targetId),Ql(r,s.targetId)}).catch(Ti)):(Ql(r,s.targetId),await zl(r.localStore,s.targetId,!0))}async function RI(n,e){const t=he(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Fc(t.remoteStore,r.targetId))}async function SI(n,e,t){const r=OI(n);try{const s=await function(a,l){const c=he(a),h=Ke.now(),f=l.reduce((w,P)=>w.add(P.key),me());let g,y;return c.persistence.runTransaction("Locally write mutations","readwrite",w=>{let P=wn(),C=me();return c.cs.getEntries(w,f).next(k=>{P=k,P.forEach(($,L)=>{L.isValidDocument()||(C=C.add($))})}).next(()=>c.localDocuments.getOverlayedDocuments(w,P)).next(k=>{g=k;const $=[];for(const L of l){const G=QT(L,g.get(L.key).overlayedDocument);G!=null&&$.push(new Qn(L.key,G,Up(G.value.mapValue),bt.exists(!0)))}return c.mutationQueue.addMutationBatch(w,h,$,l)}).next(k=>{y=k;const $=k.applyToLocalDocumentSet(g,C);return c.documentOverlayCache.saveOverlays(w,k.batchId,$)})}).then(()=>({batchId:y.batchId,changes:Qp(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let h=a.Ba[a.currentUser.toKey()];h||(h=new xe(we)),h=h.insert(l,c),a.Ba[a.currentUser.toKey()]=h}(r,s.batchId,t),await Ri(r,s.changes),await fa(r.remoteStore)}catch(s){const i=qc(s,"Failed to persist write");t.reject(i)}}async function Sg(n,e){const t=he(n);try{const r=await jw(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Na.get(i);a&&(Re(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?Re(a.va):s.removedDocuments.size>0&&(Re(a.va),a.va=!1))}),await Ri(t,r,e)}catch(r){await Ti(r)}}function Pd(n,e,t){const r=he(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,a)=>{const l=a.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=he(a);c.onlineState=l;let h=!1;c.queries.forEach((f,g)=>{for(const y of g.j_)y.Z_(l)&&(h=!0)}),h&&Kc(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function PI(n,e,t){const r=he(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new xe(ee.comparator);a=a.insert(i,ct.newNoDocument(i,ue.min()));const l=me().add(i),c=new ua(ue.min(),new Map,new xe(we),a,l);await Sg(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),Gc(r)}else await zl(r.localStore,e,!1).then(()=>Ql(r,e,t)).catch(Ti)}async function CI(n,e){const t=he(n),r=e.batch.batchId;try{const s=await $w(t.localStore,e);Cg(t,r,null),Pg(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ri(t,s)}catch(s){await Ti(s)}}async function kI(n,e,t){const r=he(n);try{const s=await function(a,l){const c=he(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(g=>(Re(g!==null),f=g.keys(),c.mutationQueue.removeMutationBatch(h,g))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(r.localStore,e);Cg(r,e,t),Pg(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ri(r,s)}catch(s){await Ti(s)}}function Pg(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Cg(n,e,t){const r=he(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Ql(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||kg(n,r)})}function kg(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Fc(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Gc(n))}function Cd(n,e,t){for(const r of t)r instanceof Ag?(n.La.addReference(r.key,e),VI(n,r)):r instanceof bg?(X("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||kg(n,r.key)):le()}function VI(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(X("SyncEngine","New document in limbo: "+t),n.xa.add(r),Gc(n))}function Gc(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new ee(Ve.fromString(e)),r=n.qa.next();n.Na.set(r,new EI(t)),n.Oa=n.Oa.insert(t,r),yg(n.remoteStore,new Ln(zt(sa(t.path)),r,"TargetPurposeLimboResolution",bc.oe))}}async function Ri(n,e,t){const r=he(n),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{a.push(r.Ka(c,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const g=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,g?"current":"not-current")}if(h){s.push(h);const g=Lc.Wi(c.targetId,h);i.push(g)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(c,h){const f=he(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>U.forEach(h,y=>U.forEach(y.$i,w=>f.persistence.referenceDelegate.addReference(g,y.targetId,w)).next(()=>U.forEach(y.Ui,w=>f.persistence.referenceDelegate.removeReference(g,y.targetId,w)))))}catch(g){if(!wi(g))throw g;X("LocalStore","Failed to update sequence numbers: "+g)}for(const g of h){const y=g.targetId;if(!g.fromCache){const w=f.os.get(y),P=w.snapshotVersion,C=w.withLastLimboFreeSnapshotVersion(P);f.os=f.os.insert(y,C)}}}(r.localStore,i))}async function DI(n,e){const t=he(n);if(!t.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const r=await pg(t.localStore,e);t.currentUser=e,function(i,a){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new K(N.CANCELLED,a))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ri(t,r.hs)}}function NI(n,e){const t=he(n),r=t.Na.get(e);if(r&&r.va)return me().add(r.key);{let s=me();const i=t.Ma.get(e);if(!i)return s;for(const a of i){const l=t.Fa.get(a);s=s.unionWith(l.view.Va)}return s}}function Vg(n){const e=he(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Sg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=NI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=PI.bind(null,e),e.Ca.d_=mI.bind(null,e.eventManager),e.Ca.$a=_I.bind(null,e.eventManager),e}function OI(n){const e=he(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=CI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=kI.bind(null,e),e}class Mo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ha(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return Bw(this.persistence,new Fw,e.initialUser,this.serializer)}Ga(e){return new Mw(xc.Zr,this.serializer)}Wa(e){return new zw}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Mo.provider={build:()=>new Mo};class Yl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Pd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=DI.bind(null,this.syncEngine),await fI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new gI}()}createDatastore(e){const t=ha(e.databaseInfo.databaseId),r=function(i){return new Jw(i)}(e.databaseInfo);return function(i,a,l,c){return new eI(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new nI(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Pd(this.syncEngine,t,0),function(){return Id.D()?new Id:new Gw}())}createSyncEngine(e,t){return function(s,i,a,l,c,h,f){const g=new TI(s,i,a,l,c,h);return f&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=he(s);X("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await bi(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Yl.provider={build:()=>new Yl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Tn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=ot.UNAUTHENTICATED,this.clientId=xp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{X("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(X("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=qc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function hl(n,e){n.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await pg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function kd(n,e){n.asyncQueue.verifyOperationInProgress();const t=await xI(n);X("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Ad(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Ad(e.remoteStore,s)),n._onlineComponents=e}async function xI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await hl(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Jr("Error using user provided cache. Falling back to memory cache: "+t),await hl(n,new Mo)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await hl(n,new Mo);return n._offlineComponents}async function Dg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await kd(n,n._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await kd(n,new Yl))),n._onlineComponents}function LI(n){return Dg(n).then(e=>e.syncEngine)}async function xo(n){const e=await Dg(n),t=e.eventManager;return t.onListen=wI.bind(null,e.syncEngine),t.onUnlisten=bI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=II.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=RI.bind(null,e.syncEngine),t}function FI(n,e,t={}){const r=new yn;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const f=new Qc({next:y=>{f.Za(),a.enqueueAndForget(()=>Hc(i,g));const w=y.docs.has(l);!w&&y.fromCache?h.reject(new K(N.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&y.fromCache&&c&&c.source==="server"?h.reject(new K(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(y)},error:y=>h.reject(y)}),g=new zc(sa(l.path),f,{includeMetadataChanges:!0,_a:!0});return Wc(i,g)}(await xo(n),n.asyncQueue,e,t,r)),r.promise}function UI(n,e,t={}){const r=new yn;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const f=new Qc({next:y=>{f.Za(),a.enqueueAndForget(()=>Hc(i,g)),y.fromCache&&c.source==="server"?h.reject(new K(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(y)},error:y=>h.reject(y)}),g=new zc(l,f,{includeMetadataChanges:!0,_a:!0});return Wc(i,g)}(await xo(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(n,e,t){if(!t)throw new K(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function BI(n,e,t,r){if(e===!0&&r===!0)throw new K(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Dd(n){if(!ee.isDocumentKey(n))throw new K(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Nd(n){if(ee.isDocumentKey(n))throw new K(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function pa(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":le()}function Vt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new K(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=pa(n);throw new K(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function $I(n,e){if(e<=0)throw new K(N.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}BI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ng((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new K(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new K(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new K(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ga{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Od({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Od(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new rT;switch(r.type){case"firstParty":return new aT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Vd.get(t);r&&(X("ComponentProvider","Removing Datastore"),Vd.delete(t),r.terminate())}(this),Promise.resolve()}}function jI(n,e,t,r={}){var s;const i=(n=Vt(n,ga))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&Jr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=ot.MOCK_USER;else{l=Nv(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new K(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ot(h)}n._authCredentials=new sT(new Mp(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new tn(this.firestore,e,this._query)}}class yt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $n(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yt(this.firestore,e,this._key)}}class $n extends tn{constructor(e,t,r){super(e,t,sa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yt(this.firestore,null,new ee(e))}withConverter(e){return new $n(this.firestore,e,this._path)}}function ro(n,e,...t){if(n=Be(n),Og("collection","path",e),n instanceof ga){const r=Ve.fromString(e,...t);return Nd(r),new $n(n,null,r)}{if(!(n instanceof yt||n instanceof $n))throw new K(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ve.fromString(e,...t));return Nd(r),new $n(n.firestore,null,r)}}function or(n,e,...t){if(n=Be(n),arguments.length===1&&(e=xp.newId()),Og("doc","path",e),n instanceof ga){const r=Ve.fromString(e,...t);return Dd(r),new yt(n,null,new ee(r))}{if(!(n instanceof yt||n instanceof $n))throw new K(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ve.fromString(e,...t));return Dd(r),new yt(n.firestore,n instanceof $n?n.converter:null,new ee(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new mg(this,"async_queue_retry"),this.Vu=()=>{const r=ul();r&&X("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=ul();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=ul();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new yn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!wi(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Tn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=jc.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&le()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function xd(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class zn extends ga{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Md,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Md(e),this._firestoreClient=void 0,await e}}}function qI(n,e){const t=typeof n=="object"?n:Rp(),r=typeof n=="string"?n:"(default)",s=Ic(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Vv("firestore");i&&jI(s,...i)}return s}function Si(n){if(n._terminated)throw new K(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||WI(n),n._firestoreClient}function WI(n){var e,t,r;const s=n._freezeSettings(),i=function(l,c,h,f){return new ET(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Ng(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new MI(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ss(tt.fromBase64String(e))}catch(t){throw new K(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ss(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new K(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new K(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new K(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI=/^__.*__$/;class KI{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Qn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ii(e,this.data,t,this.fieldTransforms)}}class Mg{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Qn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function xg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le()}}class Xc{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Xc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Lo(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(xg(this.Cu)&&HI.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class zI{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ha(e)}Qu(e,t,r,s=!1){return new Xc({Cu:e,methodName:t,qu:r,path:Xe.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ya(n){const e=n._freezeSettings(),t=ha(n._databaseId);return new zI(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Lg(n,e,t,r,s,i={}){const a=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);eu("Data must be an object, but it was:",a,r);const l=Ug(r,a);let c,h;if(i.merge)c=new It(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const y=Jl(e,g,t);if(!a.contains(y))throw new K(N.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);$g(f,y)||f.push(y)}c=new It(f),h=a.fieldTransforms.filter(g=>c.covers(g.field))}else c=null,h=a.fieldTransforms;return new KI(new vt(l),c,h)}class va extends _a{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof va}}class Zc extends _a{_toFieldTransform(e){return new HT(e.path,new hi)}isEqual(e){return e instanceof Zc}}function GI(n,e,t,r){const s=n.Qu(1,e,t);eu("Data must be an object, but it was:",s,r);const i=[],a=vt.empty();vr(r,(c,h)=>{const f=tu(e,c,t);h=Be(h);const g=s.Nu(f);if(h instanceof va)i.push(f);else{const y=Pi(h,g);y!=null&&(i.push(f),a.set(f,y))}});const l=new It(i);return new Mg(a,l,s.fieldTransforms)}function QI(n,e,t,r,s,i){const a=n.Qu(1,e,t),l=[Jl(e,r,t)],c=[s];if(i.length%2!=0)throw new K(N.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<i.length;y+=2)l.push(Jl(e,i[y])),c.push(i[y+1]);const h=[],f=vt.empty();for(let y=l.length-1;y>=0;--y)if(!$g(h,l[y])){const w=l[y];let P=c[y];P=Be(P);const C=a.Nu(w);if(P instanceof va)h.push(w);else{const k=Pi(P,C);k!=null&&(h.push(w),f.set(w,k))}}const g=new It(h);return new Mg(f,g,a.fieldTransforms)}function Fg(n,e,t,r=!1){return Pi(t,n.Qu(r?4:3,e))}function Pi(n,e){if(Bg(n=Be(n)))return eu("Unsupported field value:",e,n),Ug(n,e);if(n instanceof _a)return function(r,s){if(!xg(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=Pi(l,s.Lu(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Be(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return jT(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ke.fromDate(r);return{timestampValue:No(s.serializer,i)}}if(r instanceof Ke){const i=new Ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:No(s.serializer,i)}}if(r instanceof Yc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ss)return{bytesValue:ag(s.serializer,r._byteString)};if(r instanceof yt){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Oc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Jc)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return Vc(l.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${pa(r)}`)}(n,e)}function Ug(n,e){const t={};return Lp(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vr(n,(r,s)=>{const i=Pi(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Bg(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ke||n instanceof Yc||n instanceof ss||n instanceof yt||n instanceof _a||n instanceof Jc)}function eu(n,e,t){if(!Bg(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=pa(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function Jl(n,e,t){if((e=Be(e))instanceof ma)return e._internalPath;if(typeof e=="string")return tu(n,e);throw Lo("Field path arguments must be of type string or ",n,!1,void 0,t)}const YI=new RegExp("[~\\*/\\[\\]]");function tu(n,e,t){if(e.search(YI)>=0)throw Lo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ma(...e.split("."))._internalPath}catch{throw Lo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Lo(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new K(N.INVALID_ARGUMENT,l+n+c)}function $g(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new JI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ea("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class JI extends nu{data(){return super.data()}}function Ea(n,e){return typeof e=="string"?tu(n,e):e instanceof ma?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new K(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ru{}class Ta extends ru{}function dl(n,e,...t){let r=[];e instanceof ru&&r.push(e),r=r.concat(t),function(i){const a=i.filter(c=>c instanceof su).length,l=i.filter(c=>c instanceof wa).length;if(a>1||a>0&&l>0)throw new K(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class wa extends Ta{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new wa(e,t,r)}_apply(e){const t=this._parse(e);return qg(e._query,t),new tn(e.firestore,e.converter,jl(e._query,t))}_parse(e){const t=ya(e.firestore);return function(i,a,l,c,h,f,g){let y;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new K(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Fd(g,f);const w=[];for(const P of g)w.push(Ld(c,i,P));y={arrayValue:{values:w}}}else y=Ld(c,i,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Fd(g,f),y=Fg(l,a,g,f==="in"||f==="not-in");return qe.create(h,f,y)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function XI(n,e,t){const r=e,s=Ea("where",n);return wa._create(s,r,t)}class su extends ru{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new su(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Ft.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const l=i.getFlattenedFilters();for(const c of l)qg(a,c),a=jl(a,c)}(e._query,t),new tn(e.firestore,e.converter,jl(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class iu extends Ta{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new iu(e,t)}_apply(e){const t=function(s,i,a){if(s.startAt!==null)throw new K(N.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new K(N.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ui(i,a)}(e._query,this._field,this._direction);return new tn(e.firestore,e.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new Er(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function ZI(n,e="asc"){const t=e,r=Ea("orderBy",n);return iu._create(r,t)}class ou extends Ta{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new ou(e,t,r)}_apply(e){return new tn(e.firestore,e.converter,Vo(e._query,this._limit,this._limitType))}}function eA(n){return $I("limit",n),ou._create("limit",n,"F")}class au extends Ta{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new au(e,t,r)}_apply(e){const t=nA(e,this.type,this._docOrFields,this._inclusive);return new tn(e.firestore,e.converter,function(s,i){return new Er(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(e._query,t))}}function tA(...n){return au._create("startAfter",n,!1)}function nA(n,e,t,r){if(t[0]=Be(t[0]),t[0]instanceof nu)return function(i,a,l,c,h){if(!c)throw new K(N.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${l}().`);const f=[];for(const g of jr(i))if(g.field.isKeyField())f.push(ko(a,c.key));else{const y=c.data.field(g.field);if(ra(y))throw new K(N.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+g.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(y===null){const w=g.field.canonicalString();throw new K(N.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${w}' (used as the orderBy) does not exist.`)}f.push(y)}return new ts(f,h)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const s=ya(n.firestore);return function(a,l,c,h,f,g){const y=a.explicitOrderBy;if(f.length>y.length)throw new K(N.INVALID_ARGUMENT,`Too many arguments provided to ${h}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const w=[];for(let P=0;P<f.length;P++){const C=f[P];if(y[P].field.isKeyField()){if(typeof C!="string")throw new K(N.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${h}(), but got a ${typeof C}`);if(!kc(a)&&C.indexOf("/")!==-1)throw new K(N.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${h}() must be a plain document ID, but '${C}' contains a slash.`);const k=a.path.child(Ve.fromString(C));if(!ee.isDocumentKey(k))throw new K(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${h}() must result in a valid document path, but '${k}' is not because it contains an odd number of segments.`);const $=new ee(k);w.push(ko(l,$))}else{const k=Fg(c,h,C);w.push(k)}}return new ts(w,g)}(n._query,n.firestore._databaseId,s,e,t,r)}}function Ld(n,e,t){if(typeof(t=Be(t))=="string"){if(t==="")throw new K(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!kc(e)&&t.indexOf("/")!==-1)throw new K(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Ve.fromString(t));if(!ee.isDocumentKey(r))throw new K(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ko(n,new ee(r))}if(t instanceof yt)return ko(n,t._key);throw new K(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${pa(t)}.`)}function Fd(n,e){if(!Array.isArray(n)||n.length===0)throw new K(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function qg(n,e){const t=function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new K(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class rA{convertValue(e,t="none"){switch(_r(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(mr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw le()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return vr(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Ue(a.doubleValue));return new Jc(i)}convertGeoPoint(e){return new Yc(Ue(e.latitude),Ue(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Rc(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ai(e));default:return null}}convertTimestamp(e){const t=Hn(e);return new Ke(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Ve.fromString(e);Re(fg(r));const s=new li(r.get(1),r.get(3)),i=new ee(r.popFirst(5));return s.isEqual(t)||Tn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Hg extends nu{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new fo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ea("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class fo extends Hg{data(e={}){return super.data(e)}}class Kg{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new $s(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new fo(this._firestore,this._userDataWriter,r.key,r,new $s(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new K(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new fo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new $s(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new fo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new $s(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:sA(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function sA(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(n){n=Vt(n,yt);const e=Vt(n.firestore,zn);return FI(Si(e),n._key).then(t=>zg(e,n,t))}class lu extends rA{constructor(e){super(),this.firestore=e}convertBytes(e){return new ss(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new yt(this.firestore,null,t)}}function iA(n){n=Vt(n,tn);const e=Vt(n.firestore,zn),t=Si(e),r=new lu(e);return jg(n._query),UI(t,n._query).then(s=>new Kg(e,r,n,s))}function Bd(n,e,t){n=Vt(n,yt);const r=Vt(n.firestore,zn),s=Wg(n.converter,e,t);return cu(r,[Lg(ya(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,bt.none())])}function oA(n){return cu(Vt(n.firestore,zn),[new ca(n._key,bt.none())])}function $d(n,...e){var t,r,s;n=Be(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||xd(e[a])||(i=e[a],a++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(xd(e[a])){const g=e[a];e[a]=(t=g.next)===null||t===void 0?void 0:t.bind(g),e[a+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),e[a+2]=(s=g.complete)===null||s===void 0?void 0:s.bind(g)}let c,h,f;if(n instanceof yt)h=Vt(n.firestore,zn),f=sa(n._key.path),c={next:g=>{e[a]&&e[a](zg(h,n,g))},error:e[a+1],complete:e[a+2]};else{const g=Vt(n,tn);h=Vt(g.firestore,zn),f=g._query;const y=new lu(h);c={next:w=>{e[a]&&e[a](new Kg(h,y,g,w))},error:e[a+1],complete:e[a+2]},jg(n._query)}return function(y,w,P,C){const k=new Qc(C),$=new zc(w,k,P);return y.asyncQueue.enqueueAndForget(async()=>Wc(await xo(y),$)),()=>{k.Za(),y.asyncQueue.enqueueAndForget(async()=>Hc(await xo(y),$))}}(Si(h),f,l,c)}function cu(n,e){return function(r,s){const i=new yn;return r.asyncQueue.enqueueAndForget(async()=>SI(await LI(r),s,i)),i.promise}(Si(n),e)}function zg(n,e,t){const r=t.docs.get(e._key),s=new lu(n);return new Hg(n,s,e._key,r,new $s(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=ya(e)}set(e,t,r){this._verifyNotCommitted();const s=fl(e,this._firestore),i=Wg(s.converter,t,r),a=Lg(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,bt.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=fl(e,this._firestore);let a;return a=typeof(t=Be(t))=="string"||t instanceof ma?QI(this._dataReader,"WriteBatch.update",i._key,t,r,s):GI(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(a.toMutation(i._key,bt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=fl(e,this._firestore);return this._mutations=this._mutations.concat(new ca(t._key,bt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new K(N.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function fl(n,e){if((n=Be(n)).firestore!==e)throw new K(N.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function pl(){return new Zc("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(n){return Si(n=Vt(n,zn)),new aA(n,e=>cu(n,e))}(function(e,t=!0){(function(s){as=s})(os),Yr(new pr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new zn(new iT(r.getProvider("auth-internal")),new cT(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new K(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new li(h.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Bn(ed,"4.7.3",e),Bn(ed,"4.7.3","esm2017")})();var lA="firebase",cA="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bn(lA,cA,"app");function uu(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Gg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uA=Gg,Qg=new vi("auth","Firebase",Gg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo=new Tc("@firebase/auth");function hA(n,...e){Fo.logLevel<=_e.WARN&&Fo.warn(`Auth (${os}): ${n}`,...e)}function po(n,...e){Fo.logLevel<=_e.ERROR&&Fo.error(`Auth (${os}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(n,...e){throw hu(n,...e)}function Qt(n,...e){return hu(n,...e)}function Yg(n,e,t){const r=Object.assign(Object.assign({},uA()),{[e]:t});return new vi("auth","Firebase",r).create(e,{appName:n.name})}function jn(n){return Yg(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hu(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Qg.create(n,...e)}function oe(n,e,...t){if(!n)throw hu(e,...t)}function pn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw po(e),new Error(e)}function In(n,e){n||pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function dA(){return qd()==="http:"||qd()==="https:"}function qd(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dA()||Lv()||"connection"in navigator)?navigator.onLine:!0}function pA(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,t){this.shortDelay=e,this.longDelay=t,In(t>e,"Short delay should be less than long delay!"),this.isMobile=Ov()||Fv()}get(){return fA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(n,e){In(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA=new Ci(3e4,6e4);function wr(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Yn(n,e,t,r,s={}){return Xg(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=Ei(Object.assign({key:n.config.apiKey},a)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:c},i);return xv()||(h.referrerPolicy="no-referrer"),Jg.fetch()(Zg(n,n.config.apiHost,t,l),h)})}async function Xg(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},gA),e);try{const s=new yA(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw so(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw so(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw so(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw so(n,"user-disabled",a);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Yg(n,f,h);Ut(n,f)}}catch(s){if(s instanceof bn)throw s;Ut(n,"network-request-failed",{message:String(s)})}}async function Ia(n,e,t,r,s={}){const i=await Yn(n,e,t,r,s);return"mfaPendingCredential"in i&&Ut(n,"multi-factor-auth-required",{_serverResponse:i}),i}function Zg(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?du(n.config,s):`${n.config.apiScheme}://${s}`}function _A(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Qt(this.auth,"network-request-failed")),mA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function so(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Qt(n,e,r);return s.customData._tokenResponse=t,s}function Wd(n){return n!==void 0&&n.enterprise!==void 0}class vA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return _A(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function EA(n,e){return Yn(n,"GET","/v2/recaptchaConfig",wr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TA(n,e){return Yn(n,"POST","/v1/accounts:delete",e)}async function em(n,e){return Yn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wA(n,e=!1){const t=Be(n),r=await t.getIdToken(e),s=fu(r);oe(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Zs(gl(s.auth_time)),issuedAtTime:Zs(gl(s.iat)),expirationTime:Zs(gl(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function gl(n){return Number(n)*1e3}function fu(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return po("JWT malformed, contained fewer than 3 sections"),null;try{const s=vp(t);return s?JSON.parse(s):(po("Failed to decode base64 JWT payload"),null)}catch(s){return po("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Hd(n){const e=fu(n);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof bn&&IA(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function IA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zs(this.lastLoginAt),this.creationTime=Zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uo(n){var e;const t=n.auth,r=await n.getIdToken(),s=await pi(n,em(t,{idToken:r}));oe(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?tm(i.providerUserInfo):[],l=RA(n.providerData,a),c=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?h:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Zl(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,g)}async function bA(n){const e=Be(n);await Uo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RA(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function tm(n){return n.map(e=>{var{providerId:t}=e,r=uu(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SA(n,e){const t=await Xg(n,{},async()=>{const r=Ei({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=Zg(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Jg.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function PA(n,e){return Yn(n,"POST","/v2/accounts:revokeToken",wr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const t=Hd(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await SA(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Wr;return r&&(oe(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(oe(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(oe(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wr,this.toJSON())}_performRefresh(){return pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(n,e){oe(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class gn{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=uu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new AA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Zl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await pi(this,this.stsTokenManager.getToken(this.auth,e));return oe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return wA(this,e)}reload(){return bA(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new gn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Uo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(fn(this.auth.app))return Promise.reject(jn(this.auth));const e=await this.getIdToken();return await pi(this,TA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,l,c,h,f;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,y=(s=t.email)!==null&&s!==void 0?s:void 0,w=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,P=(a=t.photoURL)!==null&&a!==void 0?a:void 0,C=(l=t.tenantId)!==null&&l!==void 0?l:void 0,k=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,$=(h=t.createdAt)!==null&&h!==void 0?h:void 0,L=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:G,emailVerified:H,isAnonymous:ne,providerData:J,stsTokenManager:_}=t;oe(G&&_,e,"internal-error");const m=Wr.fromJSON(this.name,_);oe(typeof G=="string",e,"internal-error"),kn(g,e.name),kn(y,e.name),oe(typeof H=="boolean",e,"internal-error"),oe(typeof ne=="boolean",e,"internal-error"),kn(w,e.name),kn(P,e.name),kn(C,e.name),kn(k,e.name),kn($,e.name),kn(L,e.name);const v=new gn({uid:G,auth:e,email:y,emailVerified:H,displayName:g,isAnonymous:ne,photoURL:P,phoneNumber:w,tenantId:C,stsTokenManager:m,createdAt:$,lastLoginAt:L});return J&&Array.isArray(J)&&(v.providerData=J.map(I=>Object.assign({},I))),k&&(v._redirectEventId=k),v}static async _fromIdTokenResponse(e,t,r=!1){const s=new Wr;s.updateFromServerResponse(t);const i=new gn({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Uo(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];oe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?tm(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Wr;l.updateFromIdToken(r);const c=new gn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Zl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd=new Map;function mn(n){In(n instanceof Function,"Expected a class definition");let e=Kd.get(n);return e?(In(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Kd.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}nm.type="NONE";const zd=nm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(n,e,t){return`firebase:${n}:${e}:${t}`}class Hr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=go(this.userKey,s.apiKey,i),this.fullPersistenceKey=go("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Hr(mn(zd),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||mn(zd);const a=go(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(a);if(f){const g=gn._fromJSON(e,f);h!==i&&(l=g),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Hr(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Hr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(om(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lm(e))return"Blackberry";if(cm(e))return"Webos";if(sm(e))return"Safari";if((e.includes("chrome/")||im(e))&&!e.includes("edge/"))return"Chrome";if(am(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function rm(n=ht()){return/firefox\//i.test(n)}function sm(n=ht()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function im(n=ht()){return/crios\//i.test(n)}function om(n=ht()){return/iemobile/i.test(n)}function am(n=ht()){return/android/i.test(n)}function lm(n=ht()){return/blackberry/i.test(n)}function cm(n=ht()){return/webos/i.test(n)}function pu(n=ht()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function CA(n=ht()){var e;return pu(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kA(){return Uv()&&document.documentMode===10}function um(n=ht()){return pu(n)||am(n)||cm(n)||lm(n)||/windows phone/i.test(n)||om(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(n,e=[]){let t;switch(n){case"Browser":t=Gd(ht());break;case"Worker":t=`${Gd(ht())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${os}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DA(n,e={}){return Yn(n,"GET","/v2/passwordPolicy",wr(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA=6;class OA{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:NA,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qd(this),this.idTokenSubscription=new Qd(this),this.beforeStateQueue=new VA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=mn(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Hr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await em(this,{idToken:e}),r=await gn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(fn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Uo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(fn(this.app))return Promise.reject(jn(this));const t=e?Be(e):null;return t&&oe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return fn(this.app)?Promise.reject(jn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return fn(this.app)?Promise.reject(jn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await DA(this),t=new OA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vi("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await PA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&mn(e)||this._popupRedirectResolver;oe(t,this,"argument-error"),this.redirectPersistenceManager=await Hr.create(this,[mn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&hA(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function us(n){return Be(n)}class Qd{constructor(e){this.auth=e,this.observer=null,this.addObserver=zv(t=>this.observer=t)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Aa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xA(n){Aa=n}function dm(n){return Aa.loadJS(n)}function LA(){return Aa.recaptchaEnterpriseScript}function FA(){return Aa.gapiScript}function UA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const BA="recaptcha-enterprise",$A="NO_RECAPTCHA";class jA{constructor(e){this.type=BA,this.auth=us(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{EA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new vA(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,a,l){const c=window.grecaptcha;Wd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a($A)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,a)=>{r(this.auth).then(l=>{if(!t&&Wd(window.grecaptcha))s(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=LA();c.length!==0&&(c+=l),dm(c).then(()=>{s(l,i,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function Yd(n,e,t,r=!1){const s=new jA(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Jd(n,e,t,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Yd(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Yd(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qA(n,e){const t=Ic(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(So(i,e??{}))return s;Ut(s,"already-initialized")}return t.initialize({options:e})}function WA(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(mn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function HA(n,e,t){const r=us(n);oe(r._canInitEmulator,r,"emulator-config-failed"),oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=fm(e),{host:a,port:l}=KA(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),zA()}function fm(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function KA(n){const e=fm(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Xd(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Xd(a)}}}function Xd(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function zA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return pn("not implemented")}_getIdTokenResponse(e){return pn("not implemented")}_linkToIdToken(e,t){return pn("not implemented")}_getReauthenticationResolver(e){return pn("not implemented")}}async function GA(n,e){return Yn(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QA(n,e){return Ia(n,"POST","/v1/accounts:signInWithPassword",wr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YA(n,e){return Ia(n,"POST","/v1/accounts:signInWithEmailLink",wr(n,e))}async function JA(n,e){return Ia(n,"POST","/v1/accounts:signInWithEmailLink",wr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends gu{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new gi(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new gi(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jd(e,t,"signInWithPassword",QA);case"emailLink":return YA(e,{email:this._email,oobCode:this._password});default:Ut(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jd(e,r,"signUpPassword",GA);case"emailLink":return JA(e,{idToken:t,email:this._email,oobCode:this._password});default:Ut(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kr(n,e){return Ia(n,"POST","/v1/accounts:signInWithIdp",wr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA="http://localhost";class yr extends gu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ut("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=uu(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new yr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Kr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Kr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Kr(e,t)}buildRequest(){const e={requestUri:XA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ei(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function eb(n){const e=xs(Ls(n)).link,t=e?xs(Ls(e)).deep_link_id:null,r=xs(Ls(n)).deep_link_id;return(r?xs(Ls(r)).link:null)||r||t||e||n}class mu{constructor(e){var t,r,s,i,a,l;const c=xs(Ls(e)),h=(t=c.apiKey)!==null&&t!==void 0?t:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,g=ZA((s=c.mode)!==null&&s!==void 0?s:null);oe(h&&f&&g,"argument-error"),this.apiKey=h,this.operation=g,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=eb(e);try{return new mu(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(){this.providerId=hs.PROVIDER_ID}static credential(e,t){return gi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=mu.parseLink(t);return oe(r,"argument-error"),gi._fromEmailAndCode(e,r.code,r.tenantId)}}hs.PROVIDER_ID="password";hs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";hs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki extends pm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends ki{constructor(){super("facebook.com")}static credential(e){return yr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends ki{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return yr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return On.credential(t,r)}catch{return null}}}On.GOOGLE_SIGN_IN_METHOD="google.com";On.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends ki{constructor(){super("github.com")}static credential(e){return yr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.GITHUB_SIGN_IN_METHOD="github.com";Mn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends ki{constructor(){super("twitter.com")}static credential(e,t){return yr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return xn.credential(t,r)}catch{return null}}}xn.TWITTER_SIGN_IN_METHOD="twitter.com";xn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await gn._fromIdTokenResponse(e,r,s),a=Zd(r);return new is({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Zd(r);return new is({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Zd(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo extends bn{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Bo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Bo(e,t,r,s)}}function gm(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Bo._fromErrorAndOperation(n,i,e,r):i})}async function tb(n,e,t=!1){const r=await pi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return is._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nb(n,e,t=!1){const{auth:r}=n;if(fn(r.app))return Promise.reject(jn(r));const s="reauthenticate";try{const i=await pi(n,gm(r,s,e,n),t);oe(i.idToken,r,"internal-error");const a=fu(i.idToken);oe(a,r,"internal-error");const{sub:l}=a;return oe(n.uid===l,r,"user-mismatch"),is._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ut(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mm(n,e,t=!1){if(fn(n.app))return Promise.reject(jn(n));const r="signIn",s=await gm(n,r,e),i=await is._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function rb(n,e){return mm(us(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sb(n){const e=us(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function ib(n,e,t){return fn(n.app)?Promise.reject(jn(n)):rb(Be(n),hs.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&sb(n),r})}function ob(n,e,t,r){return Be(n).onIdTokenChanged(e,t,r)}function ab(n,e,t){return Be(n).beforeAuthStateChanged(e,t)}function lb(n,e,t,r){return Be(n).onAuthStateChanged(e,t,r)}function cb(n){return Be(n).signOut()}const $o="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem($o,"1"),this.storage.removeItem($o),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub=1e3,hb=10;class ym extends _m{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=um(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);kA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,hb):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},ub)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ym.type="LOCAL";const db=ym;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm extends _m{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}vm.type="SESSION";const Em=vm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fb(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new ba(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(t.origin,i)),c=await fb(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ba.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const h=_u("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const y=g;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(y.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(){return window}function gb(n){Yt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(){return typeof Yt().WorkerGlobalScope<"u"&&typeof Yt().importScripts=="function"}async function mb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _b(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function yb(){return Tm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm="firebaseLocalStorageDb",vb=1,jo="firebaseLocalStorage",Im="fbase_key";class Vi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ra(n,e){return n.transaction([jo],e?"readwrite":"readonly").objectStore(jo)}function Eb(){const n=indexedDB.deleteDatabase(wm);return new Vi(n).toPromise()}function ec(){const n=indexedDB.open(wm,vb);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(jo,{keyPath:Im})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(jo)?e(r):(r.close(),await Eb(),e(await ec()))})})}async function ef(n,e,t){const r=Ra(n,!0).put({[Im]:e,value:t});return new Vi(r).toPromise()}async function Tb(n,e){const t=Ra(n,!1).get(e),r=await new Vi(t).toPromise();return r===void 0?null:r.value}function tf(n,e){const t=Ra(n,!0).delete(e);return new Vi(t).toPromise()}const wb=800,Ib=3;class Am{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ec(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Ib)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ba._getInstance(yb()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await mb(),!this.activeServiceWorker)return;this.sender=new pb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_b()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ec();return await ef(e,$o,"1"),await tf(e,$o),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>ef(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Tb(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>tf(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ra(s,!1).getAll();return new Vi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Am.type="LOCAL";const Ab=Am;new Ci(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bb(n,e){return e?mn(e):(oe(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu extends gu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Kr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Kr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Rb(n){return mm(n.auth,new yu(n),n.bypassAuthState)}function Sb(n){const{auth:e,user:t}=n;return oe(t,e,"internal-error"),nb(t,new yu(n),n.bypassAuthState)}async function Pb(n){const{auth:e,user:t}=n;return oe(t,e,"internal-error"),tb(t,new yu(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Rb;case"linkViaPopup":case"linkViaRedirect":return Pb;case"reauthViaPopup":case"reauthViaRedirect":return Sb;default:Ut(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb=new Ci(2e3,1e4);class Mr extends bm{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Mr.currentPopupAction&&Mr.currentPopupAction.cancel(),Mr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=_u();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Cb.get())};e()}}Mr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb="pendingRedirect",mo=new Map;class Vb extends bm{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=mo.get(this.auth._key());if(!e){try{const r=await Db(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}mo.set(this.auth._key(),e)}return this.bypassAuthState||mo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Db(n,e){const t=Mb(e),r=Ob(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Nb(n,e){mo.set(n._key(),e)}function Ob(n){return mn(n._redirectPersistence)}function Mb(n){return go(kb,n.config.apiKey,n.name)}async function xb(n,e,t=!1){if(fn(n.app))return Promise.reject(jn(n));const r=us(n),s=bb(r,e),a=await new Vb(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb=10*60*1e3;class Fb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ub(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Rm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Qt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Lb&&this.cachedEventUids.clear(),this.cachedEventUids.has(nf(e))}saveEventToCache(e){this.cachedEventUids.add(nf(e)),this.lastProcessedEventTime=Date.now()}}function nf(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Rm({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ub(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rm(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bb(n,e={}){return Yn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jb=/^https?/;async function qb(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Bb(n);for(const t of e)try{if(Wb(t))return}catch{}Ut(n,"unauthorized-domain")}function Wb(n){const e=Xl(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!jb.test(t))return!1;if($b.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb=new Ci(3e4,6e4);function rf(){const n=Yt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Kb(n){return new Promise((e,t)=>{var r,s,i;function a(){rf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rf(),t(Qt(n,"network-request-failed"))},timeout:Hb.get()})}if(!((s=(r=Yt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Yt().gapi)===null||i===void 0)&&i.load)a();else{const l=UA("iframefcb");return Yt()[l]=()=>{gapi.load?a():t(Qt(n,"network-request-failed"))},dm(`${FA()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw _o=null,e})}let _o=null;function zb(n){return _o=_o||Kb(n),_o}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb=new Ci(5e3,15e3),Qb="__/auth/iframe",Yb="emulator/auth/iframe",Jb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Xb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zb(n){const e=n.config;oe(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?du(e,Yb):`https://${n.config.authDomain}/${Qb}`,r={apiKey:e.apiKey,appName:n.name,v:os},s=Xb.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Ei(r).slice(1)}`}async function e0(n){const e=await zb(n),t=Yt().gapi;return oe(t,n,"internal-error"),e.open({where:document.body,url:Zb(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Jb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Qt(n,"network-request-failed"),l=Yt().setTimeout(()=>{i(a)},Gb.get());function c(){Yt().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},n0=500,r0=600,s0="_blank",i0="http://localhost";class sf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function o0(n,e,t,r=n0,s=r0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},t0),{width:r.toString(),height:s.toString(),top:i,left:a}),h=ht().toLowerCase();t&&(l=im(h)?s0:t),rm(h)&&(e=e||i0,c.scrollbars="yes");const f=Object.entries(c).reduce((y,[w,P])=>`${y}${w}=${P},`,"");if(CA(h)&&l!=="_self")return a0(e||"",l),new sf(null);const g=window.open(e||"",l,f);oe(g,n,"popup-blocked");try{g.focus()}catch{}return new sf(g)}function a0(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0="__/auth/handler",c0="emulator/auth/handler",u0=encodeURIComponent("fac");async function of(n,e,t,r,s,i){oe(n.config.authDomain,n,"auth-domain-config-required"),oe(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:os,eventId:s};if(e instanceof pm){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Kv(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))a[f]=g}if(e instanceof ki){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await n._getAppCheckToken(),h=c?`#${u0}=${encodeURIComponent(c)}`:"";return`${h0(n)}?${Ei(l).slice(1)}${h}`}function h0({config:n}){return n.emulator?du(n,c0):`https://${n.authDomain}/${l0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml="webStorageSupport";class d0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Em,this._completeRedirectFn=xb,this._overrideRedirectResult=Nb}async _openPopup(e,t,r,s){var i;In((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await of(e,t,r,Xl(),s);return o0(e,a,_u())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await of(e,t,r,Xl(),s);return gb(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(In(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await e0(e),r=new Fb(e);return t.register("authEvent",s=>(oe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ml,{type:ml},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ml];a!==void 0&&t(!!a),Ut(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=qb(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return um()||sm()||pu()}}const f0=d0;var af="@firebase/auth",lf="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function m0(n){Yr(new pr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;oe(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hm(n)},h=new MA(r,s,i,c);return WA(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Yr(new pr("auth-internal",e=>{const t=us(e.getProvider("auth").getImmediate());return(r=>new p0(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bn(af,lf,g0(n)),Bn(af,lf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0=5*60,y0=wp("authIdTokenMaxAge")||_0;let cf=null;const v0=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>y0)return;const s=t==null?void 0:t.token;cf!==s&&(cf=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function E0(n=Rp()){const e=Ic(n,"auth");if(e.isInitialized())return e.getImmediate();const t=qA(n,{popupRedirectResolver:f0,persistence:[Ab,db,Em]}),r=wp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=v0(i.toString());ab(t,a,()=>a(t.currentUser)),ob(t,l=>a(l))}}const s=Ep("auth");return s&&HA(t,`http://${s}`),t}function T0(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}xA({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Qt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",T0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});m0("Browser");const w0={apiKey:"AIzaSyBTn3Z_B1MYRJ-hOsL0I94QWBq2xh3EdFs",authDomain:"henryshus.firebaseapp.com",projectId:"henryshus",storageBucket:"henryshus.firebasestorage.app",messagingSenderId:"877597619520",appId:"1:877597619520:web:61e33ff74b9f03aa45f6a5",measurementId:"G-ESKWZ556XM"},Sm=bp(w0),Pt=qI(Sm),_l=E0(Sm);function Pm(){const n=Fe([]),e=Fe([]),t=Fe(!1);let r=null,s=null;function i(){r||(r=$d(ro(Pt,"workstations"),w=>{const P=[];w.forEach(C=>{P.push({id:C.id,...C.data()})}),P.sort((C,k)=>C.name.localeCompare(k.name,"nb")),n.value=P},w=>console.error("Workstations error:",w)))}function a(){if(s)return;const w=dl(ro(Pt,"borrowRecords"),XI("returnedAt","==",null));s=$d(w,P=>{const C=[];P.forEach(k=>{C.push({id:k.id,...k.data()})}),C.sort((k,$)=>{var L,G;return(((L=$.borrowedAt)==null?void 0:L.toMillis())??0)-(((G=k.borrowedAt)==null?void 0:G.toMillis())??0)}),e.value=C},P=>console.error("Active borrows error:",P))}Jo(()=>{r&&r(),s&&s()});async function l(w,P,C){const k=jd(Pt),$=or(ro(Pt,"borrowRecords")),L=or(Pt,"workstations",w);k.update(L,{status:"borrowed",borrower:P,borrowedAt:pl(),currentBorrowRecord:$.id}),k.set($,{workstation:w,borrower:P,borrowedAt:pl(),returnedAt:null,controllers:C??null}),await k.commit()}async function c(w){const P=or(Pt,"workstations",w),C=await Ud(P);if(!C.exists())return;const k=C.data().currentBorrowRecord,$=jd(Pt);$.update(P,{status:"available",borrower:null,borrowedAt:null,currentBorrowRecord:null}),k&&$.update(or(Pt,"borrowRecords",k),{returnedAt:pl()}),await $.commit()}async function h(w=20,P){let C=dl(ro(Pt,"borrowRecords"),ZI("borrowedAt","desc"),eA(w));P&&(C=dl(C,tA(P)));const k=await iA(C),$=[];let L=null;return k.forEach(G=>{$.push({id:G.id,...G.data()}),L=G}),{records:$,lastVisible:L}}async function f(){const w=[{name:"PlayStation",type:"playstation",keyboard:"Kontroller x2",mouse:""},{name:"PlayStation 2",type:"playstation",keyboard:"Kontroller x2",mouse:""},{name:"PC 1",type:"pc",keyboard:"Keyboard 1",mouse:"Mouse 1"},{name:"PC 2",type:"pc",keyboard:"Keyboard 2",mouse:"Mouse 2"},{name:"PC 3",type:"pc",keyboard:"Keyboard 3",mouse:"Mouse 3"}];for(const P of w){const C=or(Pt,"workstations",P.name);(await Ud(C)).exists()||await Bd(C,{name:P.name,type:P.type,keyboard:P.keyboard,mouse:P.mouse,status:"available",borrower:null,borrowedAt:null,currentBorrowRecord:null})}}async function g(w,P,C,k){await Bd(or(Pt,"workstations",w),{name:w,type:P,keyboard:C||"",mouse:k||"",status:"available",borrower:null,borrowedAt:null,currentBorrowRecord:null})}async function y(w){await oA(or(Pt,"workstations",w))}return{workstations:n,activeBorrows:e,loading:t,subscribeWorkstations:i,subscribeActiveBorrows:a,borrowWorkstation:l,returnWorkstation:c,getHistory:h,seedDefaultWorkstations:f,addWorkstation:g,removeWorkstation:y}}const I0={class:"student-layout"},A0={key:0,class:"empty-state"},b0={key:1,class:"ws-scroll"},R0={key:0,class:"ps-row"},S0=["onClick","onKeydown"],P0={class:"ws-bar-inner"},C0={class:"ws-bar-name"},k0={key:0,class:"ws-bar-detail"},V0={class:"ws-block-badge",style:{background:"rgba(0,0,0,0.15)",color:"inherit"}},D0={class:"ws-row"},N0=["onClick","onKeydown"],O0={class:"ws-block-inner"},M0={class:"ws-block-name"},x0={key:0,class:"ws-block-detail"},L0={class:"ws-block-badge",style:{background:"rgba(0,0,0,0.15)",color:"inherit"}},F0={class:"modal"},U0={class:"modal-emoji"},B0={class:"form-group"},$0={key:0,class:"form-group"},j0={class:"ctrl-select"},q0={class:"modal-actions"},W0=["disabled"],H0=Qo({__name:"StudentView",setup(n){const e=At("currentView"),t=At("showToast"),r=At("loading"),{workstations:s,subscribeWorkstations:i,borrowWorkstation:a}=Pm(),l=Fe(!1),c=Fe(null),h=Fe(""),f=Fe(2),g=Fe(null),y={PlayStation:"#ED4B82","PlayStation 2":"#FDAE00","PC 1":"#2BB9A8","PC 2":"#3C8D2D","PC 3":"#EB9532"},w=Os(()=>s.value.filter(ne=>ne.type==="playstation")),P=Os(()=>s.value.filter(ne=>ne.type==="pc")),C=Os(()=>s.value.find(ne=>ne.id===c.value)),k=Os(()=>{var ne;return((ne=C.value)==null?void 0:ne.type)==="playstation"});function $(ne){return y[ne.name]||"#ED4B82"}function L(ne){c.value=ne,h.value="",f.value=2,l.value=!0,xf(()=>{var J;return(J=g.value)==null?void 0:J.focus()})}function G(){l.value=!1,c.value=null,h.value=""}async function H(){const ne=h.value.trim();if(!(!ne||!c.value)){r.value=!0;try{await a(c.value,ne,k.value?f.value:void 0),l.value=!1,t(`Du låner ${c.value}`,"success"),c.value=null,h.value=""}catch(J){console.error(J),t("Kunne ikke fullføre lånet","error")}finally{r.value=!1}}}return mc(()=>i()),(ne,J)=>(pe(),ge("div",I0,[B("button",{class:"admin-corner",onClick:J[0]||(J[0]=_=>e.value="login")},"Admin"),Or(s).length===0?(pe(),ge("p",A0,"Laster...")):(pe(),ge("div",b0,[w.value.length?(pe(),ge("div",R0,[(pe(!0),ge(lt,null,Ur(w.value,_=>(pe(),ge("div",{key:_.id,class:"ws-bar available",tabindex:"0",role:"button",style:zr({background:_.status==="available"?$(_):void 0}),onClick:m=>_.status==="available"&&L(_.id),onKeydown:nl(m=>_.status==="available"&&L(_.id),["enter"])},[B("div",P0,[J[6]||(J[6]=B("div",{class:"ws-bar-emoji"},"🎮",-1)),B("div",C0,Ne(_.name),1),_.keyboard?(pe(),ge("div",k0,Ne(_.keyboard),1)):gt("",!0),B("div",V0,Ne(_.status==="available"?"Trykk for å låne":"Opptatt"),1)])],44,S0))),128))])):gt("",!0),B("div",D0,[(pe(!0),ge(lt,null,Ur(P.value,_=>(pe(),ge("div",{key:_.id,class:"ws-block available",tabindex:"0",role:"button",style:zr({background:_.status==="available"?$(_):void 0}),onClick:m=>_.status==="available"&&L(_.id),onKeydown:nl(m=>_.status==="available"&&L(_.id),["enter"])},[B("div",O0,[J[7]||(J[7]=B("div",{class:"ws-block-emoji"},"💻",-1)),B("div",M0,Ne(_.name),1),_.keyboard||_.mouse?(pe(),ge("div",x0,Ne([_.keyboard,_.mouse].filter(Boolean).join(" · ")),1)):gt("",!0),B("div",L0,Ne(_.status==="available"?"Trykk for å låne":"Opptatt"),1)])],44,N0))),128))])])),(pe(),Qs(Q_,{to:"body"},[l.value&&C.value?(pe(),ge("div",{key:0,class:"modal-overlay",onClick:Ec(G,["self"])},[B("div",F0,[B("div",U0,Ne(k.value?"🎮":"💻"),1),B("h3",null,Ne(C.value.name),1),J[10]||(J[10]=B("p",{class:"modal-sub"},"Skriv navnet ditt for å låne",-1)),B("div",B0,[J[8]||(J[8]=B("label",{for:"name-input"},"Ditt navn",-1)),cn(B("input",{id:"name-input",ref_key:"nameInput",ref:g,"onUpdate:modelValue":J[1]||(J[1]=_=>h.value=_),class:"input",placeholder:"Skriv her...",autocomplete:"name",onKeydown:nl(H,["enter"])},null,544),[[$r,h.value]])]),k.value?(pe(),ge("div",$0,[J[9]||(J[9]=B("label",{for:"ctrl-input"},"Antall kontrollere",-1)),B("div",j0,[B("button",{class:Tt(["ctrl-btn",{active:f.value===1}]),onClick:J[2]||(J[2]=_=>f.value=1)},"1",2),B("button",{class:Tt(["ctrl-btn",{active:f.value===2}]),onClick:J[3]||(J[3]=_=>f.value=2)},"2",2),B("button",{class:Tt(["ctrl-btn",{active:f.value===3}]),onClick:J[4]||(J[4]=_=>f.value=3)},"3",2),B("button",{class:Tt(["ctrl-btn",{active:f.value===4}]),onClick:J[5]||(J[5]=_=>f.value=4)},"4",2)])])):gt("",!0),B("div",q0,[B("button",{class:"btn btn-primary btn-full",disabled:!h.value.trim(),onClick:H}," Bekreft lån ",8,W0),B("button",{class:"btn btn-secondary btn-full",onClick:G},"Avbryt")])])])):gt("",!0)]))]))}}),K0=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},z0=K0(H0,[["__scopeId","data-v-b1ab576a"]]),yl=Fe(null);let Vs=null;function Cm(){Vs||(Vs=lb(_l,r=>{yl.value=r})),Jo(()=>{Vs&&(Vs(),Vs=null)});async function n(r,s){await ib(_l,r,s)}async function e(){await cb(_l)}function t(){return yl.value!==null}return{currentUser:yl,login:n,logout:e,isAdmin:t}}const G0={class:"view active"},Q0={class:"header"},Y0={class:"header-top"},J0={class:"content"},X0={class:"card login-card"},Z0={class:"form-group"},eR={class:"form-group"},tR={key:0,class:"error-message"},nR=Qo({__name:"LoginView",setup(n){const e=At("currentView");At("showToast");const t=At("loading"),{login:r}=Cm(),s=Fe(""),i=Fe(""),a=Fe("");async function l(){a.value="",t.value=!0;try{await r(s.value,i.value),e.value="admin"}catch(c){const h=c.code;h==="auth/user-not-found"?a.value="Bruker ikke funnet":h==="auth/wrong-password"?a.value="Feil passord":h==="auth/invalid-email"?a.value="Ugyldig e-post":h==="auth/too-many-requests"?a.value="For mange forsøk. Prøv igjen senere.":a.value="Feil e-post eller passord"}finally{t.value=!1}}return(c,h)=>(pe(),ge("div",G0,[B("header",Q0,[B("div",Y0,[B("button",{class:"btn-text back-btn",onClick:h[0]||(h[0]=f=>e.value="student")}," ← Tilbake "),h[3]||(h[3]=B("h1",{class:"header-title"},"Admin",-1))])]),B("main",J0,[B("section",X0,[B("form",{onSubmit:Ec(l,["prevent"])},[B("div",Z0,[h[4]||(h[4]=B("label",{for:"login-email"},"E-post",-1)),cn(B("input",{id:"login-email","onUpdate:modelValue":h[1]||(h[1]=f=>s.value=f),class:"input",type:"email",placeholder:"admin@example.com",autocomplete:"email",required:""},null,512),[[$r,s.value]])]),B("div",eR,[h[5]||(h[5]=B("label",{for:"login-password"},"Passord",-1)),cn(B("input",{id:"login-password","onUpdate:modelValue":h[2]||(h[2]=f=>i.value=f),class:"input",type:"password",placeholder:"Passord",autocomplete:"current-password",required:""},null,512),[[$r,i.value]])]),h[6]||(h[6]=B("button",{type:"submit",class:"btn btn-primary btn-full"},"Logg inn",-1)),a.value?(pe(),ge("p",tR,Ne(a.value),1)):gt("",!0)],32)])])]))}}),rR={class:"view active"},sR={class:"content"},iR={class:"admin-tabs"},oR={key:0,class:"empty-state"},aR={key:1,class:"borrows-list"},lR={class:"borrow-card-info"},cR={key:0,class:"borrow-card-time"},uR={class:"borrow-card-time"},hR=["onClick"],dR={key:0,class:"empty-state"},fR={key:1,class:"borrows-list"},pR={class:"borrow-card-info"},gR={key:0,class:"borrow-card-time"},mR={class:"borrow-card-time"},_R={key:0},yR={class:"workstations-manage-list"},vR={class:"ws-name"},ER={class:"ws-status"},TR=["onClick"],wR={key:0,class:"empty-state"},IR={class:"form-group"},AR={class:"form-group"},bR={style:{display:"flex",gap:"8px"}},RR={class:"form-group"},SR={for:"new-keyboard"},PR=["placeholder"],CR={key:0,class:"form-group"},kR=Qo({__name:"AdminView",setup(n){const e=At("currentView"),t=At("showToast"),r=At("loading"),{logout:s}=Cm(),{workstations:i,activeBorrows:a,subscribeWorkstations:l,subscribeActiveBorrows:c,returnWorkstation:h,getHistory:f,seedDefaultWorkstations:g,addWorkstation:y,removeWorkstation:w}=Pm(),P=Fe("borrows"),C=Fe([]),k=Fe(null),$=Fe(""),L=Fe("pc"),G=Fe(""),H=Fe("");async function ne(){await s(),e.value="student"}async function J(ae){if(confirm(`Returner ${ae}?`)){r.value=!0;try{await h(ae),t(`${ae} er returnert`,"success")}catch(Y){console.error(Y),t("Kunne ikke returnere","error")}finally{r.value=!1}}}async function _(ae=!1){r.value=!0;try{const Y=await f(20,ae?k.value:null);k.value=Y.lastVisible,ae?C.value.push(...Y.records):C.value=Y.records}catch(Y){console.error(Y),t("Kunne ikke laste historikk","error")}finally{r.value=!1}}async function m(){if(confirm("Sett inn standardenheter (PC 1, PC 2, PC 3)?")){r.value=!0;try{await g(),t("Standardenheter er lagt til","success")}catch(ae){console.error(ae),t("Kunne ikke sette inn enheter","error")}finally{r.value=!1}}}async function v(){if($.value.trim()){r.value=!0;try{await y($.value.trim(),L.value,G.value.trim(),H.value.trim()),t(`${$.value} er lagt til`,"success"),$.value="",G.value="",H.value=""}catch(ae){console.error(ae),t("Kunne ikke legge til enheten","error")}finally{r.value=!1}}}async function I(ae){if(confirm(`Fjern ${ae}?`)){r.value=!0;try{await w(ae),t(`${ae} er fjernet`,"success")}catch(Y){console.error(Y),t("Kunne ikke fjerne enheten","error")}finally{r.value=!1}}}function A(ae){P.value=ae,ae==="history"&&(C.value=[],k.value=null,_())}function R(ae){if(!ae)return"—";const Y=ae.toDate?ae.toDate():new Date(ae);return`${String(Y.getDate()).padStart(2,"0")}.${String(Y.getMonth()+1).padStart(2,"0")} ${String(Y.getHours()).padStart(2,"0")}:${String(Y.getMinutes()).padStart(2,"0")}`}function T(ae){if(!ae)return"—";const Y=ae.toDate?ae.toDate():new Date(ae);return`${String(Y.getDate()).padStart(2,"0")}.${String(Y.getMonth()+1).padStart(2,"0")}.${Y.getFullYear()} ${String(Y.getHours()).padStart(2,"0")}:${String(Y.getMinutes()).padStart(2,"0")}`}return mc(()=>{l(),c()}),(ae,Y)=>(pe(),ge("div",rR,[B("header",{class:"header"},[B("div",{class:"header-row"},[Y[9]||(Y[9]=B("h1",{class:"header-title"},"Admin",-1)),B("button",{class:"btn-text",onClick:ne},"Logg ut")])]),B("main",sR,[B("ul",iR,[B("li",null,[B("button",{class:Tt(["tab-btn",{active:P.value==="borrows"}]),onClick:Y[0]||(Y[0]=te=>A("borrows"))},"Utlån",2)]),B("li",null,[B("button",{class:Tt(["tab-btn",{active:P.value==="history"}]),onClick:Y[1]||(Y[1]=te=>A("history"))},"Historikk",2)]),B("li",null,[B("button",{class:Tt(["tab-btn",{active:P.value==="manage"}]),onClick:Y[2]||(Y[2]=te=>A("manage"))},"Enheter",2)])]),cn(B("section",null,[Y[10]||(Y[10]=B("h2",{class:"section-title"},"Utlånt utstyr",-1)),Or(a).length===0?(pe(),ge("div",oR,"Ingen utlånt utstyr")):(pe(),ge("div",aR,[(pe(!0),ge(lt,null,Ur(Or(a),te=>(pe(),ge("div",{key:te.id,class:"borrow-card"},[B("div",lR,[B("h4",null,Ne(te.workstation),1),B("p",null,"Lånt av: "+Ne(te.borrower),1),te.controllers?(pe(),ge("div",cR,"🎮 "+Ne(te.controllers)+" kontrollere",1)):gt("",!0),B("div",uR,Ne(R(te.borrowedAt)),1)]),B("button",{class:"btn btn-danger btn-sm",onClick:Ie=>J(te.workstation)},"Returner",8,hR)]))),128))]))],512),[[Xa,P.value==="borrows"]]),cn(B("section",null,[Y[11]||(Y[11]=B("h2",{class:"section-title"},"Historikk",-1)),C.value.length===0?(pe(),ge("div",dR,"Ingen historikk")):(pe(),ge("div",fR,[(pe(!0),ge(lt,null,Ur(C.value,te=>(pe(),ge("div",{key:te.id,class:"borrow-card"},[B("div",pR,[B("h4",null,Ne(te.workstation),1),B("p",null,"Lånt av: "+Ne(te.borrower),1),te.controllers?(pe(),ge("div",gR,"🎮 "+Ne(te.controllers)+" kontrollere",1)):gt("",!0),B("div",mR,[dp(" Lånt: "+Ne(T(te.borrowedAt))+" ",1),te.returnedAt?(pe(),ge("span",_R," | Returnert: "+Ne(T(te.returnedAt)),1)):gt("",!0)])]),B("span",{style:zr([{"font-size":"0.8125rem","font-weight":"600"},{color:te.returnedAt?"var(--green)":"var(--red)"}])},Ne(te.returnedAt?"Returnert":"Aktiv"),5)]))),128)),C.value.length>=20?(pe(),ge("button",{key:0,class:"btn btn-secondary btn-full",onClick:Y[3]||(Y[3]=te=>_(!0))},"Last flere")):gt("",!0)]))],512),[[Xa,P.value==="history"]]),cn(B("section",null,[Y[17]||(Y[17]=B("h2",{class:"section-title"},"Administrer enheter",-1)),B("div",yR,[(pe(!0),ge(lt,null,Ur(Or(i),te=>(pe(),ge("div",{key:te.id,class:"ws-manage-item"},[B("div",null,[B("div",vR,Ne(te.type==="playstation"?"🎮":"💻")+" "+Ne(te.name),1),B("div",ER,Ne(te.status==="available"?"Ledig":"Utlånt"),1)]),te.status==="available"?(pe(),ge("button",{key:0,class:"btn-text",onClick:Ie=>I(te.name)},"Fjern",8,TR)):gt("",!0)]))),128)),Or(i).length===0?(pe(),ge("div",wR,"Ingen enheter")):gt("",!0)]),B("button",{class:"btn btn-secondary btn-full",style:{"margin-bottom":"16px"},onClick:m}," Sett inn standardenheter (PS 1-2 + PC 1-3) "),B("form",{class:"add-form",onSubmit:Ec(v,["prevent"])},[Y[15]||(Y[15]=B("h3",null,"Legg til ny enhet",-1)),B("div",IR,[Y[12]||(Y[12]=B("label",{for:"new-name"},"Navn",-1)),cn(B("input",{id:"new-name","onUpdate:modelValue":Y[4]||(Y[4]=te=>$.value=te),class:"input",placeholder:"F.eks. PC 4",required:""},null,512),[[$r,$.value]])]),B("div",AR,[Y[13]||(Y[13]=B("label",null,"Type",-1)),B("div",bR,[B("button",{type:"button",class:Tt(["btn",L.value==="pc"?"btn-primary":"btn-secondary"]),style:{flex:"1"},onClick:Y[5]||(Y[5]=te=>L.value="pc")},"💻 PC",2),B("button",{type:"button",class:Tt(["btn",L.value==="playstation"?"btn-primary":"btn-secondary"]),style:{flex:"1"},onClick:Y[6]||(Y[6]=te=>L.value="playstation")},"🎮 PlayStation",2)])]),B("div",RR,[B("label",SR,Ne(L.value==="playstation"?"Tilbehør":"Tastatur"),1),cn(B("input",{id:"new-keyboard","onUpdate:modelValue":Y[7]||(Y[7]=te=>G.value=te),class:"input",placeholder:L.value==="playstation"?"F.eks. Kontroller x2, ladestasjon":"F.eks. Tastatur 4"},null,8,PR),[[$r,G.value]])]),L.value==="pc"?(pe(),ge("div",CR,[Y[14]||(Y[14]=B("label",{for:"new-mouse"},"Mus",-1)),cn(B("input",{id:"new-mouse","onUpdate:modelValue":Y[8]||(Y[8]=te=>H.value=te),class:"input",placeholder:"F.eks. Mus 4"},null,512),[[$r,H.value]])])):gt("",!0),Y[16]||(Y[16]=B("button",{type:"submit",class:"btn btn-primary"},"Legg til",-1))],32)],512),[[Xa,P.value==="manage"]])])]))}}),VR={id:"toast-container"},DR={key:0,id:"loading-overlay"},NR=Qo({__name:"App",setup(n){const e=Fe("student"),t=Fe([]);let r=0;function s(a,l="info"){const c=++r;t.value.push({id:c,message:a,type:l}),setTimeout(()=>{const h=t.value.findIndex(f=>f.id===c);h!==-1&&t.value.splice(h,1)},3e3)}oo("showToast",s),oo("currentView",e);const i=Fe(!1);return oo("loading",i),(a,l)=>(pe(),ge(lt,null,[B("div",VR,[(pe(!0),ge(lt,null,Ur(t.value,c=>(pe(),ge("div",{key:c.id,class:Tt(["toast",c.type])},Ne(c.message),3))),128))]),i.value?(pe(),ge("div",DR,[...l[0]||(l[0]=[B("div",{class:"spinner"},null,-1),B("p",null,"Laster...",-1)])])):gt("",!0),e.value==="student"?(pe(),Qs(z0,{key:1})):e.value==="login"?(pe(),Qs(nR,{key:2})):e.value==="admin"?(pe(),Qs(kR,{key:3})):gt("",!0)],64))}});Tv(NR).mount("#app");

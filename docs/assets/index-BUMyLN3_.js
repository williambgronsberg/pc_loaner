(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ic(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ce={},Br=[],Qt=()=>{},mf=()=>!1,Ko=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),zo=n=>n.startsWith("onUpdate:"),nt=Object.assign,oc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},n_=Object.prototype.hasOwnProperty,Ie=(n,e)=>n_.call(n,e),ce=Array.isArray,$r=n=>_i(n)==="[object Map]",_f=n=>_i(n)==="[object Set]",gh=n=>_i(n)==="[object Date]",pe=n=>typeof n=="function",Oe=n=>typeof n=="string",en=n=>typeof n=="symbol",be=n=>n!==null&&typeof n=="object",yf=n=>(be(n)||pe(n))&&pe(n.then)&&pe(n.catch),vf=Object.prototype.toString,_i=n=>vf.call(n),r_=n=>_i(n).slice(8,-1),Ef=n=>_i(n)==="[object Object]",ac=n=>Oe(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,qs=ic(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Go=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},s_=/-\w/g,xt=Go(n=>n.replace(s_,e=>e.slice(1).toUpperCase())),i_=/\B([A-Z])/g,Yn=Go(n=>n.replace(i_,"-$1").toLowerCase()),wf=Go(n=>n.charAt(0).toUpperCase()+n.slice(1)),Wa=Go(n=>n?`on${wf(n)}`:""),Gt=(n,e)=>!Object.is(n,e),lo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Tf=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},lc=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let mh;const Qo=()=>mh||(mh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function yi(n){if(ce(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=Oe(r)?c_(r):yi(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Oe(n)||be(n))return n}const o_=/;(?![^(]*\))/g,a_=/:([^]+)/,l_=/\/\*[^]*?\*\//g;function c_(n){const e={};return n.replace(l_,"").split(o_).forEach(t=>{if(t){const r=t.split(a_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function mt(n){let e="";if(Oe(n))e=n;else if(ce(n))for(let t=0;t<n.length;t++){const r=mt(n[t]);r&&(e+=r+" ")}else if(be(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const u_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",h_=ic(u_);function If(n){return!!n||n===""}function d_(n,e){if(n.length!==e.length)return!1;let t=!0;for(let r=0;t&&r<n.length;r++)t=cc(n[r],e[r]);return t}function cc(n,e){if(n===e)return!0;let t=gh(n),r=gh(e);if(t||r)return t&&r?n.getTime()===e.getTime():!1;if(t=en(n),r=en(e),t||r)return n===e;if(t=ce(n),r=ce(e),t||r)return t&&r?d_(n,e):!1;if(t=be(n),r=be(e),t||r){if(!t||!r)return!1;const s=Object.keys(n).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in n){const l=n.hasOwnProperty(a),c=e.hasOwnProperty(a);if(l&&!c||!l&&c||!cc(n[a],e[a]))return!1}}return String(n)===String(e)}const Af=n=>!!(n&&n.__v_isRef===!0),Se=n=>Oe(n)?n:n==null?"":ce(n)||be(n)&&(n.toString===vf||!pe(n.toString))?Af(n)?Se(n.value):JSON.stringify(n,bf,2):String(n),bf=(n,e)=>Af(e)?bf(n,e.value):$r(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[Ha(r,i)+" =>"]=s,t),{})}:_f(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ha(t))}:en(e)?Ha(e):be(e)&&!ce(e)&&!Ef(e)?String(e):e,Ha=(n,e="")=>{var t;return en(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ye;class f_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Ye&&(Ye.active?(this.parent=Ye,this.index=(Ye.scopes||(Ye.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Ye;try{return Ye=this,e()}finally{Ye=t}}}on(){++this._on===1&&(this.prevScope=Ye,Ye=this)}off(){if(this._on>0&&--this._on===0){if(Ye===this)Ye=this.prevScope;else{let e=Ye;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function p_(){return Ye}let ke;const Ka=new WeakSet;class Rf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ye&&(Ye.active?Ye.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ka.has(this)&&(Ka.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Pf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,_h(this),Cf(this);const e=ke,t=Mt;ke=this,Mt=!0;try{return this.fn()}finally{kf(this),ke=e,Mt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)dc(e);this.deps=this.depsTail=void 0,_h(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ka.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Tl(this)&&this.run()}get dirty(){return Tl(this)}}let Sf=0,Ws,Hs;function Pf(n,e=!1){if(n.flags|=8,e){n.next=Hs,Hs=n;return}n.next=Ws,Ws=n}function uc(){Sf++}function hc(){if(--Sf>0)return;if(Hs){let e=Hs;for(Hs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ws;){let e=Ws;for(Ws=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function Cf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function kf(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),dc(r),g_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function Tl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Vf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Vf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ti)||(n.globalVersion=ti,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Tl(n))))return;n.flags|=2;const e=n.dep,t=ke,r=Mt;ke=n,Mt=!0;try{Cf(n);const s=n.fn(n._value);(e.version===0||Gt(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{ke=t,Mt=r,kf(n),n.flags&=-3}}function dc(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)dc(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function g_(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Mt=!0;const Df=[];function tn(){Df.push(Mt),Mt=!1}function nn(){const n=Df.pop();Mt=n===void 0?!0:n}function _h(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ke;ke=void 0;try{e()}finally{ke=t}}}let ti=0;class m_{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class fc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ke||!Mt||ke===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ke)t=this.activeLink=new m_(ke,this),ke.deps?(t.prevDep=ke.depsTail,ke.depsTail.nextDep=t,ke.depsTail=t):ke.deps=ke.depsTail=t,Nf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=ke.depsTail,t.nextDep=void 0,ke.depsTail.nextDep=t,ke.depsTail=t,ke.deps===t&&(ke.deps=r)}return t}trigger(e){this.version++,ti++,this.notify(e)}notify(e){uc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{hc()}}}function Nf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Nf(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Il=new WeakMap,fr=Symbol(""),Al=Symbol(""),ni=Symbol("");function ct(n,e,t){if(Mt&&ke){let r=Il.get(n);r||Il.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new fc),s.map=r,s.key=t),s.track()}}function fn(n,e,t,r,s,i){const a=Il.get(n);if(!a){ti++;return}const l=c=>{c&&c.trigger()};if(uc(),e==="clear")a.forEach(l);else{const c=ce(n),h=c&&ac(t);if(c&&t==="length"){const f=Number(r);a.forEach((p,_)=>{(_==="length"||_===ni||!en(_)&&_>=f)&&l(p)})}else switch((t!==void 0||a.has(void 0))&&l(a.get(t)),h&&l(a.get(ni)),e){case"add":c?h&&l(a.get("length")):(l(a.get(fr)),$r(n)&&l(a.get(Al)));break;case"delete":c||(l(a.get(fr)),$r(n)&&l(a.get(Al)));break;case"set":$r(n)&&l(a.get(fr));break}}hc()}function kr(n){const e=Te(n);return e===n?e:(ct(e,"iterate",ni),kt(n)?e:e.map(Lt))}function Yo(n){return ct(n=Te(n),"iterate",ni),n}function Kt(n,e){return En(n)?Yr(pr(n)?Lt(e):e):Lt(e)}const __={__proto__:null,[Symbol.iterator](){return za(this,Symbol.iterator,n=>Kt(this,n))},concat(...n){return kr(this).concat(...n.map(e=>ce(e)?kr(e):e))},entries(){return za(this,"entries",n=>(n[1]=Kt(this,n[1]),n))},every(n,e){return un(this,"every",n,e,void 0,arguments)},filter(n,e){return un(this,"filter",n,e,t=>t.map(r=>Kt(this,r)),arguments)},find(n,e){return un(this,"find",n,e,t=>Kt(this,t),arguments)},findIndex(n,e){return un(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return un(this,"findLast",n,e,t=>Kt(this,t),arguments)},findLastIndex(n,e){return un(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return un(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ga(this,"includes",n)},indexOf(...n){return Ga(this,"indexOf",n)},join(n){return kr(this).join(n)},lastIndexOf(...n){return Ga(this,"lastIndexOf",n)},map(n,e){return un(this,"map",n,e,void 0,arguments)},pop(){return Cs(this,"pop")},push(...n){return Cs(this,"push",n)},reduce(n,...e){return yh(this,"reduce",n,e)},reduceRight(n,...e){return yh(this,"reduceRight",n,e)},shift(){return Cs(this,"shift")},some(n,e){return un(this,"some",n,e,void 0,arguments)},splice(...n){return Cs(this,"splice",n)},toReversed(){return kr(this).toReversed()},toSorted(n){return kr(this).toSorted(n)},toSpliced(...n){return kr(this).toSpliced(...n)},unshift(...n){return Cs(this,"unshift",n)},values(){return za(this,"values",n=>Kt(this,n))}};function za(n,e,t){const r=Yo(n),s=r[e]();return r!==n&&!kt(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=t(i.value)),i}),s}const y_=Array.prototype;function un(n,e,t,r,s,i){const a=Yo(n),l=a!==n&&!kt(n),c=a[e];if(c!==y_[e]){const p=c.apply(n,i);return l?Lt(p):p}let h=t;a!==n&&(l?h=function(p,_){return t.call(this,Kt(n,p),_,n)}:t.length>2&&(h=function(p,_){return t.call(this,p,_,n)}));const f=c.call(a,h,r);return l&&s?s(f):f}function yh(n,e,t,r){const s=Yo(n),i=s!==n&&!kt(n);let a=t,l=!1;s!==n&&(i?(l=r.length===0,a=function(h,f,p){return l&&(l=!1,h=Kt(n,h)),t.call(this,h,Kt(n,f),p,n)}):t.length>3&&(a=function(h,f,p){return t.call(this,h,f,p,n)}));const c=s[e](a,...r);return l?Kt(n,c):c}function Ga(n,e,t){const r=Te(n);ct(r,"iterate",ni);const s=r[e](...t);return(s===-1||s===!1)&&_c(t[0])?(t[0]=Te(t[0]),r[e](...t)):s}function Cs(n,e,t=[]){tn(),uc();const r=Te(n)[e].apply(n,t);return hc(),nn(),r}const v_=ic("__proto__,__v_isRef,__isVue"),Of=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(en));function E_(n){en(n)||(n=String(n));const e=Te(this);return ct(e,"has",n),e.hasOwnProperty(n)}class xf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?k_:Uf:i?Ff:Lf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=ce(e);if(!s){let c;if(a&&(c=__[t]))return c;if(t==="hasOwnProperty")return E_}const l=Reflect.get(e,t,ht(e)?e:r);if((en(t)?Of.has(t):v_(t))||(s||ct(e,"get",t),i))return l;if(ht(l)){const c=a&&ac(t)?l:l.value;return s&&be(c)?Rl(c):c}return be(l)?s?Rl(l):gc(l):l}}class Mf extends xf{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];const a=ce(e)&&ac(t);if(!this._isShallow){const h=En(i);if(!kt(r)&&!En(r)&&(i=Te(i),r=Te(r)),!a&&ht(i)&&!ht(r))return h||(i.value=r),!0}const l=a?Number(t)<e.length:Ie(e,t),c=Reflect.set(e,t,r,ht(e)?e:s);return e===Te(s)&&c&&(l?Gt(r,i)&&fn(e,"set",t,r):fn(e,"add",t,r)),c}deleteProperty(e,t){const r=Ie(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&fn(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!en(t)||!Of.has(t))&&ct(e,"has",t),r}ownKeys(e){return ct(e,"iterate",ce(e)?"length":fr),Reflect.ownKeys(e)}}class w_ extends xf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const T_=new Mf,I_=new w_,A_=new Mf(!0);const bl=n=>n,Xi=n=>Reflect.getPrototypeOf(n);function b_(n,e,t){return function(...r){const s=this.__v_raw,i=Te(s),a=$r(i),l=n==="entries"||n===Symbol.iterator&&a,c=n==="keys"&&a,h=s[n](...r),f=t?bl:e?Yr:Lt;return!e&&ct(i,"iterate",c?Al:fr),nt(Object.create(h),{next(){const{value:p,done:_}=h.next();return _?{value:p,done:_}:{value:l?[f(p[0]),f(p[1])]:f(p),done:_}}})}}function Zi(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function R_(n,e){const t={get(s){const i=this.__v_raw,a=Te(i),l=Te(s);n||(Gt(s,l)&&ct(a,"get",s),ct(a,"get",l));const{has:c}=Xi(a),h=e?bl:n?Yr:Lt;if(c.call(a,s))return h(i.get(s));if(c.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!n&&ct(Te(s),"iterate",fr),s.size},has(s){const i=this.__v_raw,a=Te(i),l=Te(s);return n||(Gt(s,l)&&ct(a,"has",s),ct(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=Te(l),h=e?bl:n?Yr:Lt;return!n&&ct(c,"iterate",fr),l.forEach((f,p)=>s.call(i,h(f),h(p),a))}};return nt(t,n?{add:Zi("add"),set:Zi("set"),delete:Zi("delete"),clear:Zi("clear")}:{add(s){const i=Te(this),a=Xi(i),l=Te(s),c=!e&&!kt(s)&&!En(s)?l:s;return a.has.call(i,c)||Gt(s,c)&&a.has.call(i,s)||Gt(l,c)&&a.has.call(i,l)||(i.add(c),fn(i,"add",c,c)),this},set(s,i){!e&&!kt(i)&&!En(i)&&(i=Te(i));const a=Te(this),{has:l,get:c}=Xi(a);let h=l.call(a,s);h||(s=Te(s),h=l.call(a,s));const f=c.call(a,s);return a.set(s,i),h?Gt(i,f)&&fn(a,"set",s,i):fn(a,"add",s,i),this},delete(s){const i=Te(this),{has:a,get:l}=Xi(i);let c=a.call(i,s);c||(s=Te(s),c=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&fn(i,"delete",s,void 0),h},clear(){const s=Te(this),i=s.size!==0,a=s.clear();return i&&fn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=b_(s,n,e)}),t}function pc(n,e){const t=R_(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(Ie(t,s)&&s in r?t:r,s,i)}const S_={get:pc(!1,!1)},P_={get:pc(!1,!0)},C_={get:pc(!0,!1)};const Lf=new WeakMap,Ff=new WeakMap,Uf=new WeakMap,k_=new WeakMap;function V_(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gc(n){return En(n)?n:mc(n,!1,T_,S_,Lf)}function D_(n){return mc(n,!1,A_,P_,Ff)}function Rl(n){return mc(n,!0,I_,C_,Uf)}function mc(n,e,t,r,s){if(!be(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const i=s.get(n);if(i)return i;const a=V_(r_(n));if(a===0)return n;const l=new Proxy(n,a===2?r:t);return s.set(n,l),l}function pr(n){return En(n)?pr(n.__v_raw):!!(n&&n.__v_isReactive)}function En(n){return!!(n&&n.__v_isReadonly)}function kt(n){return!!(n&&n.__v_isShallow)}function _c(n){return n?!!n.__v_raw:!1}function Te(n){const e=n&&n.__v_raw;return e?Te(e):n}function N_(n){return!Ie(n,"__v_skip")&&Object.isExtensible(n)&&Tf(n,"__v_skip",!0),n}const Lt=n=>be(n)?gc(n):n,Yr=n=>be(n)?Rl(n):n;function ht(n){return n?n.__v_isRef===!0:!1}function Pe(n){return O_(n,!1)}function O_(n,e){return ht(n)?n:new x_(n,e)}class x_{constructor(e,t){this.dep=new fc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Te(e),this._value=t?e:Lt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||kt(e)||En(e);e=r?e:Te(e),Gt(e,t)&&(this._rawValue=e,this._value=r?e:Lt(e),this.dep.trigger())}}function Lr(n){return ht(n)?n.value:n}const M_={get:(n,e,t)=>e==="__v_raw"?n:Lr(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return ht(s)&&!ht(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function Bf(n){return pr(n)?n:new Proxy(n,M_)}class L_{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new fc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ti-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ke!==this)return Pf(this,!0),!0}get value(){const e=this.dep.track();return Vf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function F_(n,e,t=!1){let r,s;return pe(n)?r=n:(r=n.get,s=n.set),new L_(r,s,t)}const eo={},wo=new WeakMap;let lr;function U_(n,e=!1,t=lr){if(t){let r=wo.get(t);r||wo.set(t,r=[]),r.push(n)}}function B_(n,e,t=Ce){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=t,h=H=>s?H:kt(H)||s===!1||s===0?pn(H,1):pn(H);let f,p,_,A,P=!1,C=!1;if(ht(n)?(p=()=>n.value,P=kt(n)):pr(n)?(p=()=>h(n),P=!0):ce(n)?(C=!0,P=n.some(H=>pr(H)||kt(H)),p=()=>n.map(H=>{if(ht(H))return H.value;if(pr(H))return h(H);if(pe(H))return c?c(H,2):H()})):pe(n)?e?p=c?()=>c(n,2):n:p=()=>{if(_){tn();try{_()}finally{nn()}}const H=lr;lr=f;try{return c?c(n,3,[A]):n(A)}finally{lr=H}}:p=Qt,e&&s){const H=p,ie=s===!0?1/0:s;p=()=>pn(H(),ie)}const k=p_(),j=()=>{f.stop(),k&&k.active&&oc(k.effects,f)};if(i&&e){const H=e;e=(...ie)=>{const de=H(...ie);return j(),de}}let B=C?new Array(n.length).fill(eo):eo;const Q=H=>{if(!(!(f.flags&1)||!f.dirty&&!H))if(e){const ie=f.run();if(H||s||P||(C?ie.some((de,T)=>Gt(de,B[T])):Gt(ie,B))){_&&_();const de=lr;lr=f;try{const T=[ie,B===eo?void 0:C&&B[0]===eo?[]:B,A];B=ie,c?c(e,3,T):e(...T)}finally{lr=de}}}else f.run()};return l&&l(Q),f=new Rf(p),f.scheduler=a?()=>a(Q,!1):Q,A=H=>U_(H,!1,f),_=f.onStop=()=>{const H=wo.get(f);if(H){if(c)c(H,4);else for(const ie of H)ie();wo.delete(f)}},e?r?Q(!0):B=f.run():a?a(Q.bind(null,!0),!0):f.run(),j.pause=f.pause.bind(f),j.resume=f.resume.bind(f),j.stop=j,j}function pn(n,e=1/0,t){if(e<=0||!be(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,ht(n))pn(n.value,e,t);else if(ce(n))for(let r=0;r<n.length;r++)pn(n[r],e,t);else if(_f(n)||$r(n))n.forEach(r=>{pn(r,e,t)});else if(Ef(n)){for(const r in n)pn(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&pn(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vi(n,e,t,r){try{return r?n(...r):n()}catch(s){Jo(s,e,t)}}function Ft(n,e,t,r){if(pe(n)){const s=vi(n,e,t,r);return s&&yf(s)&&s.catch(i=>{Jo(i,e,t)}),s}if(ce(n)){const s=[];for(let i=0;i<n.length;i++)s.push(Ft(n[i],e,t,r));return s}}function Jo(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ce;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](n,c,h)===!1)return}l=l.parent}if(i){tn(),vi(i,null,10,[n,c,h]),nn();return}}$_(n,t,s,r,a)}function $_(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const _t=[];let Ht=-1;const jr=[];let Nn=null,Vr=0;const $f=Promise.resolve();let To=null;function Sl(n){const e=To||$f;return n?e.then(this?n.bind(this):n):e}function j_(n){let e=Ht+1,t=_t.length;for(;e<t;){const r=e+t>>>1,s=_t[r],i=ri(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function yc(n){if(!(n.flags&1)){const e=ri(n),t=_t[_t.length-1];!t||!(n.flags&2)&&e>=ri(t)?_t.push(n):_t.splice(j_(e),0,n),n.flags|=1,jf()}}function jf(){To||(To=$f.then(Wf))}function q_(n){ce(n)?jr.push(...n):Nn&&n.id===-1?Nn.splice(Vr+1,0,n):n.flags&1||(jr.push(n),n.flags|=1),jf()}function vh(n,e,t=Ht+1){for(;t<_t.length;t++){const r=_t[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;_t.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function qf(n){if(jr.length){const e=[...new Set(jr)].sort((t,r)=>ri(t)-ri(r));if(jr.length=0,Nn){Nn.push(...e);return}for(Nn=e,Vr=0;Vr<Nn.length;Vr++){const t=Nn[Vr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Nn=null,Vr=0}}const ri=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Wf(n){try{for(Ht=0;Ht<_t.length;Ht++){const e=_t[Ht];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),vi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ht<_t.length;Ht++){const e=_t[Ht];e&&(e.flags&=-2)}Ht=-1,_t.length=0,qf(),To=null,(_t.length||jr.length)&&Wf()}}let Ct=null,Hf=null;function Io(n){const e=Ct;return Ct=n,Hf=n&&n.type.__scopeId||null,e}function W_(n,e=Ct,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&Nh(-1);const i=Io(e);let a;try{a=n(...s)}finally{Io(i),r._d&&Nh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Ot(n,e){if(Ct===null)return n;const t=na(Ct),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=Ce]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&pn(a),r.push({dir:i,instance:t,value:a,oldValue:void 0,arg:l,modifiers:c}))}return n}function ir(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(tn(),Ft(c,t,8,[n.el,l,n,e]),nn())}}function co(n,e){if(yt){let t=yt.provides;const r=yt.parent&&yt.parent.provides;r===t&&(t=yt.provides=Object.create(r)),t[n]=e}}function At(n,e,t=!1){const r=qy();if(r||qr){let s=qr?qr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&pe(e)?e.call(r&&r.proxy):e}}const H_=Symbol.for("v-scx"),K_=()=>At(H_);function Qa(n,e,t){return Kf(n,e,t)}function Kf(n,e,t=Ce){const{immediate:r,deep:s,flush:i,once:a}=t,l=nt({},t),c=e&&r||!e&&i!=="post";let h;if(ii){if(i==="sync"){const A=K_();h=A.__watcherHandles||(A.__watcherHandles=[])}else if(!c){const A=()=>{};return A.stop=Qt,A.resume=Qt,A.pause=Qt,A}}const f=yt;l.call=(A,P,C)=>Ft(A,f,P,C);let p=!1;i==="post"?l.scheduler=A=>{gt(A,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(A,P)=>{P?A():yc(A)}),l.augmentJob=A=>{e&&(A.flags|=4),p&&(A.flags|=2,f&&(A.id=f.uid,A.i=f))};const _=B_(n,e,l);return ii&&(h?h.push(_):c&&_()),_}function z_(n,e,t){const r=this.proxy,s=Oe(n)?n.includes(".")?zf(r,n):()=>r[n]:n.bind(r,r);let i;pe(e)?i=e:(i=e.handler,t=e);const a=wi(this),l=Kf(s,i.bind(r),t);return a(),l}function zf(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const Dn=new WeakMap,Gf=Symbol("_vte"),G_=n=>n.__isTeleport,ur=n=>n&&(n.disabled||n.disabled===""),Q_=n=>n&&(n.defer||n.defer===""),Eh=n=>typeof SVGElement<"u"&&n instanceof SVGElement,wh=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,Pl=(n,e)=>{const t=n&&n.to;return Oe(t)?e?e(t):null:t},Y_={name:"Teleport",__isTeleport:!0,process(n,e,t,r,s,i,a,l,c,h){const{mc:f,pc:p,pbc:_,o:{insert:A,querySelector:P,createText:C,createComment:k,parentNode:j}}=h,B=ur(e.props);let{dynamicChildren:Q}=e;const H=(T,m,y)=>{T.shapeFlag&16&&f(T.children,m,y,s,i,a,l,c)},ie=(T=e)=>{const m=ur(T.props),y=T.target=Pl(T.props,P),I=Cl(y,T,C,A);y&&(a!=="svg"&&Eh(y)?a="svg":a!=="mathml"&&wh(y)&&(a="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(y),m||(H(T,y,I),Os(T,!1)))},de=T=>{const m=()=>{if(Dn.get(T)===m){if(Dn.delete(T),ur(T.props)){const y=j(T.el)||t;H(T,y,T.anchor),Os(T,!0)}ie(T)}};Dn.set(T,m),gt(m,i)};if(n==null){const T=e.el=C(""),m=e.anchor=C("");if(A(T,t,r),A(m,t,r),Q_(e.props)||i&&i.pendingBranch){de(e);return}B&&(H(e,t,m),Os(e,!0)),ie()}else{e.el=n.el;const T=e.anchor=n.anchor,m=Dn.get(n);if(m){m.flags|=8,Dn.delete(n),de(e);return}e.targetStart=n.targetStart;const y=e.target=n.target,I=e.targetAnchor=n.targetAnchor,v=ur(n.props),b=v?t:y,w=v?T:I;if(a==="svg"||Eh(y)?a="svg":(a==="mathml"||wh(y))&&(a="mathml"),Q?(_(n.dynamicChildren,Q,b,s,i,a,l),Ic(n,e,!0)):c||p(n,e,b,w,s,i,a,l,!1),B)v?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):to(e,t,T,h,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const qe=Pl(e.props,P);qe&&(e.target=qe,to(e,qe,null,h,0))}else v&&to(e,y,I,h,1);Os(e,B)}},remove(n,e,t,{um:r,o:{remove:s}},i){const{shapeFlag:a,children:l,anchor:c,targetStart:h,targetAnchor:f,target:p,props:_}=n,A=ur(_),P=i||!A,C=Dn.get(n);if(C&&(C.flags|=8,Dn.delete(n)),p&&(s(h),s(f)),i&&s(c),!C&&(A||p)&&a&16)for(let k=0;k<l.length;k++){const j=l[k];r(j,e,t,P,!!j.dynamicChildren)}},move:to,hydrate:J_};function to(n,e,t,{o:{insert:r},m:s},i=2){i===0&&r(n.targetAnchor,e,t);const{el:a,anchor:l,shapeFlag:c,children:h,props:f}=n,p=i===2;if(p&&r(a,e,t),!Dn.has(n)&&(!p||ur(f))&&c&16)for(let _=0;_<h.length;_++)s(h[_],e,t,2);p&&r(l,e,t)}function J_(n,e,t,r,s,i,{o:{nextSibling:a,parentNode:l,querySelector:c,insert:h,createText:f}},p){function _(k,j){let B=j;for(;B;){if(B&&B.nodeType===8){if(B.data==="teleport start anchor")e.targetStart=B;else if(B.data==="teleport anchor"){e.targetAnchor=B,k._lpa=e.targetAnchor&&a(e.targetAnchor);break}}B=a(B)}}function A(k,j){j.anchor=p(a(k),j,l(k),t,r,s,i)}const P=e.target=Pl(e.props,c),C=ur(e.props);if(P){const k=P._lpa||P.firstChild;e.shapeFlag&16&&(C?(A(n,e),_(P,k),e.targetAnchor||Cl(P,e,f,h,l(n)===P?n:null)):(e.anchor=a(n),_(P,k),e.targetAnchor||Cl(P,e,f,h),p(k&&a(k),e,P,t,r,s,i))),Os(e,C)}else C&&e.shapeFlag&16&&(A(n,e),e.targetStart=n,e.targetAnchor=a(n));return e.anchor&&a(e.anchor)}const Th=Y_;function Os(n,e){const t=n.ctx;if(t&&t.ut){let r,s;for(e?(r=n.el,s=n.anchor):(r=n.targetStart,s=n.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",t.uid),r=r.nextSibling;t.ut()}}function Cl(n,e,t,r,s=null){const i=e.targetStart=t(""),a=e.targetAnchor=t("");return i[Gf]=a,n&&(r(i,n,s),r(a,n,s)),a}const Ya=Symbol("_leaveCb");function vc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,vc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Ei(n,e){return pe(n)?nt({name:n.name},e,{setup:n}):n}function Qf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Ih(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Ao=new WeakMap;function Ks(n,e,t,r,s=!1){if(ce(n)){n.forEach((C,k)=>Ks(C,e&&(ce(e)?e[k]:e),t,r,s));return}if(zs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ks(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?na(r.component):r.el,a=s?null:i,{i:l,r:c}=n,h=e&&e.r,f=l.refs===Ce?l.refs={}:l.refs,p=l.setupState,_=Te(p),A=p===Ce?mf:C=>Ih(f,C)?!1:Ie(_,C),P=(C,k)=>!(k&&Ih(f,k));if(h!=null&&h!==c){if(Ah(e),Oe(h))f[h]=null,A(h)&&(p[h]=null);else if(ht(h)){const C=e;P(h,C.k)&&(h.value=null),C.k&&(f[C.k]=null)}}if(pe(c)){tn();try{vi(c,l,12,[a,f])}finally{nn()}}else{const C=Oe(c),k=ht(c);if(C||k){const j=()=>{if(n.f){const B=C?A(c)?p[c]:f[c]:P()||!n.k?c.value:f[n.k];if(s)ce(B)&&oc(B,i);else if(ce(B))B.includes(i)||B.push(i);else if(C)f[c]=[i],A(c)&&(p[c]=f[c]);else{const Q=[i];P(c,n.k)&&(c.value=Q),n.k&&(f[n.k]=Q)}}else C?(f[c]=a,A(c)&&(p[c]=a)):k&&(P(c,n.k)&&(c.value=a),n.k&&(f[n.k]=a))};if(a){const B=()=>{j(),Ao.delete(n)};B.id=-1,Ao.set(n,B),gt(B,t)}else Ah(n),j()}}}function Ah(n){const e=Ao.get(n);e&&(e.flags|=8,Ao.delete(n))}Qo().requestIdleCallback;Qo().cancelIdleCallback;const zs=n=>!!n.type.__asyncLoader,Yf=n=>n.type.__isKeepAlive;function X_(n,e){Jf(n,"a",e)}function Z_(n,e){Jf(n,"da",e)}function Jf(n,e,t=yt){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Xo(e,r,t),t){let s=t.parent;for(;s&&s.parent;)Yf(s.parent.vnode)&&ey(r,e,t,s),s=s.parent}}function ey(n,e,t,r){const s=Xo(e,n,r,!0);Zo(()=>{oc(r[e],s)},t)}function Xo(n,e,t=yt,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...a)=>{tn();const l=wi(t),c=Ft(e,t,n,a);return l(),nn(),c});return r?s.unshift(i):s.push(i),i}}const bn=n=>(e,t=yt)=>{(!ii||n==="sp")&&Xo(n,(...r)=>e(...r),t)},ty=bn("bm"),Ec=bn("m"),ny=bn("bu"),ry=bn("u"),sy=bn("bum"),Zo=bn("um"),iy=bn("sp"),oy=bn("rtg"),ay=bn("rtc");function ly(n,e=yt){Xo("ec",n,e)}const cy=Symbol.for("v-ndc");function hr(n,e,t,r){let s;const i=t,a=ce(n);if(a||Oe(n)){const l=a&&pr(n);let c=!1,h=!1;l&&(c=!kt(n),h=En(n),n=Yo(n)),s=new Array(n.length);for(let f=0,p=n.length;f<p;f++)s[f]=e(c?h?Yr(Lt(n[f])):Lt(n[f]):n[f],f,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let l=0;l<n;l++)s[l]=e(l+1,l,void 0,i)}else if(be(n))if(n[Symbol.iterator])s=Array.from(n,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(n);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const f=l[c];s[c]=e(n[f],f,c,i)}}else s=[];return s}const kl=n=>n?_p(n)?na(n):kl(n.parent):null,Gs=nt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>kl(n.parent),$root:n=>kl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Zf(n),$forceUpdate:n=>n.f||(n.f=()=>{yc(n.update)}),$nextTick:n=>n.n||(n.n=Sl.bind(n.proxy)),$watch:n=>z_.bind(n)}),Ja=(n,e)=>n!==Ce&&!n.__isScriptSetup&&Ie(n,e),uy={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=n;if(e[0]!=="$"){const _=a[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(Ja(r,e))return a[e]=1,r[e];if(s!==Ce&&Ie(s,e))return a[e]=2,s[e];if(Ie(i,e))return a[e]=3,i[e];if(t!==Ce&&Ie(t,e))return a[e]=4,t[e];Vl&&(a[e]=0)}}const h=Gs[e];let f,p;if(h)return e==="$attrs"&&ct(n.attrs,"get",""),h(n);if((f=l.__cssModules)&&(f=f[e]))return f;if(t!==Ce&&Ie(t,e))return a[e]=4,t[e];if(p=c.config.globalProperties,Ie(p,e))return p[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return Ja(s,e)?(s[e]=t,!0):r!==Ce&&Ie(r,e)?(r[e]=t,!0):Ie(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,props:i,type:a}},l){let c;return!!(t[l]||n!==Ce&&l[0]!=="$"&&Ie(n,l)||Ja(e,l)||Ie(i,l)||Ie(r,l)||Ie(Gs,l)||Ie(s.config.globalProperties,l)||(c=a.__cssModules)&&c[l])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ie(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function bh(n){return ce(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Vl=!0;function hy(n){const e=Zf(n),t=n.proxy,r=n.ctx;Vl=!1,e.beforeCreate&&Rh(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:f,beforeMount:p,mounted:_,beforeUpdate:A,updated:P,activated:C,deactivated:k,beforeDestroy:j,beforeUnmount:B,destroyed:Q,unmounted:H,render:ie,renderTracked:de,renderTriggered:T,errorCaptured:m,serverPrefetch:y,expose:I,inheritAttrs:v,components:b,directives:w,filters:qe}=e;if(h&&dy(h,r,null),a)for(const X in a){const $=a[X];pe($)&&(r[X]=$.bind(t))}if(s){const X=s.call(t,t);be(X)&&(n.data=gc(X))}if(Vl=!0,i)for(const X in i){const $=i[X],te=pe($)?$.bind(t,t):pe($.get)?$.get.bind(t,t):Qt,jt=!pe($)&&pe($.set)?$.set.bind(t):Qt,on=Fr({get:te,set:jt});Object.defineProperty(r,X,{enumerable:!0,configurable:!0,get:()=>on.value,set:We=>on.value=We})}if(l)for(const X in l)Xf(l[X],r,t,X);if(c){const X=pe(c)?c.call(t):c;Reflect.ownKeys(X).forEach($=>{co($,X[$])})}f&&Rh(f,n,"c");function Ue(X,$){ce($)?$.forEach(te=>X(te.bind(t))):$&&X($.bind(t))}if(Ue(ty,p),Ue(Ec,_),Ue(ny,A),Ue(ry,P),Ue(X_,C),Ue(Z_,k),Ue(ly,m),Ue(ay,de),Ue(oy,T),Ue(sy,B),Ue(Zo,H),Ue(iy,y),ce(I))if(I.length){const X=n.exposed||(n.exposed={});I.forEach($=>{Object.defineProperty(X,$,{get:()=>t[$],set:te=>t[$]=te,enumerable:!0})})}else n.exposed||(n.exposed={});ie&&n.render===Qt&&(n.render=ie),v!=null&&(n.inheritAttrs=v),b&&(n.components=b),w&&(n.directives=w),y&&Qf(n)}function dy(n,e,t=Qt){ce(n)&&(n=Dl(n));for(const r in n){const s=n[r];let i;be(s)?"default"in s?i=At(s.from||r,s.default,!0):i=At(s.from||r):i=At(s),ht(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function Rh(n,e,t){Ft(ce(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function Xf(n,e,t,r){let s=r.includes(".")?zf(t,r):()=>t[r];if(Oe(n)){const i=e[n];pe(i)&&Qa(s,i)}else if(pe(n))Qa(s,n.bind(t));else if(be(n))if(ce(n))n.forEach(i=>Xf(i,e,t,r));else{const i=pe(n.handler)?n.handler.bind(t):e[n.handler];pe(i)&&Qa(s,i,n)}}function Zf(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!t&&!r?c=e:(c={},s.length&&s.forEach(h=>bo(c,h,a,!0)),bo(c,e,a)),be(e)&&i.set(e,c),c}function bo(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&bo(n,i,t,!0),s&&s.forEach(a=>bo(n,a,t,!0));for(const a in e)if(!(r&&a==="expose")){const l=fy[a]||t&&t[a];n[a]=l?l(n[a],e[a]):e[a]}return n}const fy={data:Sh,props:Ph,emits:Ph,methods:xs,computed:xs,beforeCreate:pt,created:pt,beforeMount:pt,mounted:pt,beforeUpdate:pt,updated:pt,beforeDestroy:pt,beforeUnmount:pt,destroyed:pt,unmounted:pt,activated:pt,deactivated:pt,errorCaptured:pt,serverPrefetch:pt,components:xs,directives:xs,watch:gy,provide:Sh,inject:py};function Sh(n,e){return e?n?function(){return nt(pe(n)?n.call(this,this):n,pe(e)?e.call(this,this):e)}:e:n}function py(n,e){return xs(Dl(n),Dl(e))}function Dl(n){if(ce(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function pt(n,e){return n?[...new Set([].concat(n,e))]:e}function xs(n,e){return n?nt(Object.create(null),n,e):e}function Ph(n,e){return n?ce(n)&&ce(e)?[...new Set([...n,...e])]:nt(Object.create(null),bh(n),bh(e??{})):e}function gy(n,e){if(!n)return e;if(!e)return n;const t=nt(Object.create(null),n);for(const r in e)t[r]=pt(n[r],e[r]);return t}function ep(){return{app:null,config:{isNativeTag:mf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let my=0;function _y(n,e){return function(r,s=null){pe(r)||(r=nt({},r)),s!=null&&!be(s)&&(s=null);const i=ep(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:my++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Qy,get config(){return i.config},set config(f){},use(f,...p){return a.has(f)||(f&&pe(f.install)?(a.add(f),f.install(h,...p)):pe(f)&&(a.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,_){if(!c){const A=h._ceVNode||Vt(r,s);return A.appContext=i,_===!0?_="svg":_===!1&&(_=void 0),n(A,f,_),c=!0,h._container=f,f.__vue_app__=h,na(A.component)}},onUnmount(f){l.push(f)},unmount(){c&&(Ft(l,h._instance,16),n(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=qr;qr=h;try{return f()}finally{qr=p}}};return h}}let qr=null;const yy=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${xt(e)}Modifiers`]||n[`${Yn(e)}Modifiers`];function vy(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Ce;let s=t;const i=e.startsWith("update:"),a=i&&yy(r,e.slice(7));a&&(a.trim&&(s=t.map(f=>Oe(f)?f.trim():f)),a.number&&(s=t.map(lc)));let l,c=r[l=Wa(e)]||r[l=Wa(xt(e))];!c&&i&&(c=r[l=Wa(Yn(e))]),c&&Ft(c,n,6,s);const h=r[l+"Once"];if(h){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,Ft(h,n,6,s)}}const Ey=new WeakMap;function tp(n,e,t=!1){const r=t?Ey:e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let a={},l=!1;if(!pe(n)){const c=h=>{const f=tp(h,e,!0);f&&(l=!0,nt(a,f))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!i&&!l?(be(n)&&r.set(n,null),null):(ce(i)?i.forEach(c=>a[c]=null):nt(a,i),be(n)&&r.set(n,a),a)}function ea(n,e){return!n||!Ko(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Ie(n,e[0].toLowerCase()+e.slice(1))||Ie(n,Yn(e))||Ie(n,e))}function Ch(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:f,props:p,data:_,setupState:A,ctx:P,inheritAttrs:C}=n,k=Io(n);let j,B;try{if(t.shapeFlag&4){const H=s||r,ie=H;j=zt(h.call(ie,H,f,p,A,_,P)),B=l}else{const H=e;j=zt(H.length>1?H(p,{attrs:l,slots:a,emit:c}):H(p,null)),B=e.props?l:wy(l)}}catch(H){Qs.length=0,Jo(H,n,1),j=Vt(Hn)}let Q=j;if(B&&C!==!1){const H=Object.keys(B),{shapeFlag:ie}=Q;H.length&&ie&7&&(i&&H.some(zo)&&(B=Ty(B,i)),Q=Jr(Q,B,!1,!0))}return t.dirs&&(Q=Jr(Q,null,!1,!0),Q.dirs=Q.dirs?Q.dirs.concat(t.dirs):t.dirs),t.transition&&vc(Q,t.transition),j=Q,Io(k),j}const wy=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ko(t))&&((e||(e={}))[t]=n[t]);return e},Ty=(n,e)=>{const t={};for(const r in n)(!zo(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function Iy(n,e,t){const{props:r,children:s,component:i}=n,{props:a,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?kh(r,a,h):!!a;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const _=f[p];if(np(a,r,_)&&!ea(h,_))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?kh(r,a,h):!0:!!a;return!1}function kh(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(np(e,n,i)&&!ea(t,i))return!0}return!1}function np(n,e,t){const r=n[t],s=e[t];return t==="style"&&be(r)&&be(s)?!cc(r,s):r!==s}function Ay({vnode:n,parent:e,suspense:t},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=r,n=s),s===n)(n=e.vnode).el=r,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=r)}const rp={},sp=()=>Object.create(rp),ip=n=>Object.getPrototypeOf(n)===rp;function by(n,e,t,r=!1){const s={},i=sp();n.propsDefaults=Object.create(null),op(n,e,s,i);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=r?s:D_(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function Ry(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=n,l=Te(s),[c]=n.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=n.vnode.dynamicProps;for(let p=0;p<f.length;p++){let _=f[p];if(ea(n.emitsOptions,_))continue;const A=e[_];if(c)if(Ie(i,_))A!==i[_]&&(i[_]=A,h=!0);else{const P=xt(_);s[P]=Nl(c,l,P,A,n,!1)}else A!==i[_]&&(i[_]=A,h=!0)}}}else{op(n,e,s,i)&&(h=!0);let f;for(const p in l)(!e||!Ie(e,p)&&((f=Yn(p))===p||!Ie(e,f)))&&(c?t&&(t[p]!==void 0||t[f]!==void 0)&&(s[p]=Nl(c,l,p,void 0,n,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Ie(e,p))&&(delete i[p],h=!0)}h&&fn(n.attrs,"set","")}function op(n,e,t,r){const[s,i]=n.propsOptions;let a=!1,l;if(e)for(let c in e){if(qs(c))continue;const h=e[c];let f;s&&Ie(s,f=xt(c))?!i||!i.includes(f)?t[f]=h:(l||(l={}))[f]=h:ea(n.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=Te(t),h=l||Ce;for(let f=0;f<i.length;f++){const p=i[f];t[p]=Nl(s,c,p,h[p],n,!Ie(h,p))}}return a}function Nl(n,e,t,r,s,i){const a=n[t];if(a!=null){const l=Ie(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&pe(c)){const{propsDefaults:h}=s;if(t in h)r=h[t];else{const f=wi(s);r=h[t]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(t,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===Yn(t))&&(r=!0))}return r}const Sy=new WeakMap;function ap(n,e,t=!1){const r=t?Sy:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,a={},l=[];let c=!1;if(!pe(n)){const f=p=>{c=!0;const[_,A]=ap(p,e,!0);nt(a,_),A&&l.push(...A)};!t&&e.mixins.length&&e.mixins.forEach(f),n.extends&&f(n.extends),n.mixins&&n.mixins.forEach(f)}if(!i&&!c)return be(n)&&r.set(n,Br),Br;if(ce(i))for(let f=0;f<i.length;f++){const p=xt(i[f]);Vh(p)&&(a[p]=Ce)}else if(i)for(const f in i){const p=xt(f);if(Vh(p)){const _=i[f],A=a[p]=ce(_)||pe(_)?{type:_}:nt({},_),P=A.type;let C=!1,k=!0;if(ce(P))for(let j=0;j<P.length;++j){const B=P[j],Q=pe(B)&&B.name;if(Q==="Boolean"){C=!0;break}else Q==="String"&&(k=!1)}else C=pe(P)&&P.name==="Boolean";A[0]=C,A[1]=k,(C||Ie(A,"default"))&&l.push(p)}}const h=[a,l];return be(n)&&r.set(n,h),h}function Vh(n){return n[0]!=="$"&&!qs(n)}const wc=n=>n==="_"||n==="_ctx"||n==="$stable",Tc=n=>ce(n)?n.map(zt):[zt(n)],Py=(n,e,t)=>{if(e._n)return e;const r=W_((...s)=>Tc(e(...s)),t);return r._c=!1,r},lp=(n,e,t)=>{const r=n._ctx;for(const s in n){if(wc(s))continue;const i=n[s];if(pe(i))e[s]=Py(s,i,r);else if(i!=null){const a=Tc(i);e[s]=()=>a}}},cp=(n,e)=>{const t=Tc(e);n.slots.default=()=>t},up=(n,e,t)=>{for(const r in e)(t||!wc(r))&&(n[r]=e[r])},Cy=(n,e,t)=>{const r=n.slots=sp();if(n.vnode.shapeFlag&32){const s=e._;s?(up(r,e,t),t&&Tf(r,"_",s,!0)):lp(e,r)}else e&&cp(n,e)},ky=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,a=Ce;if(r.shapeFlag&32){const l=e._;l?t&&l===1?i=!1:up(s,e,t):(i=!e.$stable,lp(e,s)),a=e}else e&&(cp(n,e),a={default:1});if(i)for(const l in s)!wc(l)&&a[l]==null&&delete s[l]},gt=xy;function Vy(n){return Dy(n)}function Dy(n,e){const t=Qo();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:f,parentNode:p,nextSibling:_,setScopeId:A=Qt,insertStaticContent:P}=n,C=(E,R,D,F=null,L=null,x=null,G=void 0,W=null,q=!!R.dynamicChildren)=>{if(E===R)return;E&&!ks(E,R)&&(F=an(E),We(E,L,x,!0),E=null),R.patchFlag===-2&&(q=!1,R.dynamicChildren=null);const{type:M,ref:ne,shapeFlag:Y}=R;switch(M){case ta:k(E,R,D,F);break;case Hn:j(E,R,D,F);break;case Za:E==null&&B(R,D,F,G);break;case Ze:b(E,R,D,F,L,x,G,W,q);break;default:Y&1?ie(E,R,D,F,L,x,G,W,q):Y&6?w(E,R,D,F,L,x,G,W,q):(Y&64||Y&128)&&M.process(E,R,D,F,L,x,G,W,q,qt)}ne!=null&&L?Ks(ne,E&&E.ref,x,R||E,!R):ne==null&&E&&E.ref!=null&&Ks(E.ref,null,x,E,!0)},k=(E,R,D,F)=>{if(E==null)r(R.el=l(R.children),D,F);else{const L=R.el=E.el;R.children!==E.children&&h(L,R.children)}},j=(E,R,D,F)=>{E==null?r(R.el=c(R.children||""),D,F):R.el=E.el},B=(E,R,D,F)=>{[E.el,E.anchor]=P(E.children,R,D,F,E.el,E.anchor)},Q=({el:E,anchor:R},D,F)=>{let L;for(;E&&E!==R;)L=_(E),r(E,D,F),E=L;r(R,D,F)},H=({el:E,anchor:R})=>{let D;for(;E&&E!==R;)D=_(E),s(E),E=D;s(R)},ie=(E,R,D,F,L,x,G,W,q)=>{if(R.type==="svg"?G="svg":R.type==="math"&&(G="mathml"),E==null)de(R,D,F,L,x,G,W,q);else{const M=E.el&&E.el._isVueCE?E.el:null;try{M&&M._beginPatch(),y(E,R,L,x,G,W,q)}finally{M&&M._endPatch()}}},de=(E,R,D,F,L,x,G,W)=>{let q,M;const{props:ne,shapeFlag:Y,transition:Z,dirs:se}=E;if(q=E.el=a(E.type,x,ne&&ne.is,ne),Y&8?f(q,E.children):Y&16&&m(E.children,q,null,F,L,Xa(E,x),G,W),se&&ir(E,null,F,"created"),T(q,E,E.scopeId,G,F),ne){for(const fe in ne)fe!=="value"&&!qs(fe)&&i(q,fe,null,ne[fe],x,F);"value"in ne&&i(q,"value",null,ne.value,x),(M=ne.onVnodeBeforeMount)&&Wt(M,F,E)}se&&ir(E,null,F,"beforeMount");const re=Ny(L,Z);re&&Z.beforeEnter(q),r(q,R,D),((M=ne&&ne.onVnodeMounted)||re||se)&&gt(()=>{try{M&&Wt(M,F,E),re&&Z.enter(q),se&&ir(E,null,F,"mounted")}finally{}},L)},T=(E,R,D,F,L)=>{if(D&&A(E,D),F)for(let x=0;x<F.length;x++)A(E,F[x]);if(L){let x=L.subTree;if(R===x||fp(x.type)&&(x.ssContent===R||x.ssFallback===R)){const G=L.vnode;T(E,G,G.scopeId,G.slotScopeIds,L.parent)}}},m=(E,R,D,F,L,x,G,W,q=0)=>{for(let M=q;M<E.length;M++){const ne=E[M]=W?dn(E[M]):zt(E[M]);C(null,ne,R,D,F,L,x,G,W)}},y=(E,R,D,F,L,x,G)=>{const W=R.el=E.el;let{patchFlag:q,dynamicChildren:M,dirs:ne}=R;q|=E.patchFlag&16;const Y=E.props||Ce,Z=R.props||Ce;let se;if(D&&or(D,!1),(se=Z.onVnodeBeforeUpdate)&&Wt(se,D,R,E),ne&&ir(R,E,D,"beforeUpdate"),D&&or(D,!0),M&&(!E.dynamicChildren||E.dynamicChildren.length!==M.length)&&(q=0,G=!1,M=null),(Y.innerHTML&&Z.innerHTML==null||Y.textContent&&Z.textContent==null)&&f(W,""),M?I(E.dynamicChildren,M,W,D,F,Xa(R,L),x):G||$(E,R,W,null,D,F,Xa(R,L),x,!1),q>0){if(q&16)v(W,Y,Z,D,L);else if(q&2&&Y.class!==Z.class&&i(W,"class",null,Z.class,L),q&4&&i(W,"style",Y.style,Z.style,L),q&8){const re=R.dynamicProps;for(let fe=0;fe<re.length;fe++){const ve=re[fe],Ne=Y[ve],Be=Z[ve];(Be!==Ne||ve==="value")&&i(W,ve,Ne,Be,L,D)}}q&1&&E.children!==R.children&&f(W,R.children)}else!G&&M==null&&v(W,Y,Z,D,L);((se=Z.onVnodeUpdated)||ne)&&gt(()=>{se&&Wt(se,D,R,E),ne&&ir(R,E,D,"updated")},F)},I=(E,R,D,F,L,x,G)=>{for(let W=0;W<R.length;W++){const q=E[W],M=R[W],ne=q.el&&(q.type===Ze||!ks(q,M)||q.shapeFlag&198)?p(q.el):D;C(q,M,ne,null,F,L,x,G,!0)}},v=(E,R,D,F,L)=>{if(R!==D){if(R!==Ce)for(const x in R)!qs(x)&&!(x in D)&&i(E,x,R[x],null,L,F);for(const x in D){if(qs(x))continue;const G=D[x],W=R[x];G!==W&&x!=="value"&&i(E,x,W,G,L,F)}"value"in D&&i(E,"value",R.value,D.value,L)}},b=(E,R,D,F,L,x,G,W,q)=>{const M=R.el=E?E.el:l(""),ne=R.anchor=E?E.anchor:l("");let{patchFlag:Y,dynamicChildren:Z,slotScopeIds:se}=R;se&&(W=W?W.concat(se):se),E==null?(r(M,D,F),r(ne,D,F),m(R.children||[],D,ne,L,x,G,W,q)):Y>0&&Y&64&&Z&&E.dynamicChildren&&E.dynamicChildren.length===Z.length?(I(E.dynamicChildren,Z,D,L,x,G,W),(R.key!=null||L&&R===L.subTree)&&Ic(E,R,!0)):$(E,R,D,ne,L,x,G,W,q)},w=(E,R,D,F,L,x,G,W,q)=>{R.slotScopeIds=W,E==null?R.shapeFlag&512?L.ctx.activate(R,D,F,G,q):qe(R,D,F,L,x,G,q):$t(E,R,q)},qe=(E,R,D,F,L,x,G)=>{const W=E.component=jy(E,F,L);if(Yf(E)&&(W.ctx.renderer=qt),Wy(W,!1,G),W.asyncDep){if(L&&L.registerDep(W,Ue,G),!E.el){const q=W.subTree=Vt(Hn);j(null,q,R,D),E.placeholder=q.el}}else Ue(W,E,R,D,L,x,G)},$t=(E,R,D)=>{const F=R.component=E.component;if(Iy(E,R,D))if(F.asyncDep&&!F.asyncResolved){X(F,R,D);return}else F.next=R,F.update();else R.el=E.el,F.vnode=R},Ue=(E,R,D,F,L,x,G)=>{const W=()=>{if(E.isMounted){let{next:Y,bu:Z,u:se,parent:re,vnode:fe}=E;{const st=hp(E);if(st){Y&&(Y.el=fe.el,X(E,Y,G)),st.asyncDep.then(()=>{gt(()=>{E.isUnmounted||M()},L)});return}}let ve=Y,Ne;or(E,!1),Y?(Y.el=fe.el,X(E,Y,G)):Y=fe,Z&&lo(Z),(Ne=Y.props&&Y.props.onVnodeBeforeUpdate)&&Wt(Ne,re,Y,fe),or(E,!0);const Be=Ch(E),Rt=E.subTree;E.subTree=Be,C(Rt,Be,p(Rt.el),an(Rt),E,L,x),Y.el=Be.el,ve===null&&Ay(E,Be.el),se&&gt(se,L),(Ne=Y.props&&Y.props.onVnodeUpdated)&&gt(()=>Wt(Ne,re,Y,fe),L)}else{let Y;const{el:Z,props:se}=R,{bm:re,m:fe,parent:ve,root:Ne,type:Be}=E,Rt=zs(R);or(E,!1),re&&lo(re),!Rt&&(Y=se&&se.onVnodeBeforeMount)&&Wt(Y,ve,R),or(E,!0);{Ne.ce&&Ne.ce._hasShadowRoot()&&Ne.ce._injectChildStyle(Be,E.parent?E.parent.type:void 0);const st=E.subTree=Ch(E);C(null,st,D,F,E,L,x),R.el=st.el}if(fe&&gt(fe,L),!Rt&&(Y=se&&se.onVnodeMounted)){const st=R;gt(()=>Wt(Y,ve,st),L)}(R.shapeFlag&256||ve&&zs(ve.vnode)&&ve.vnode.shapeFlag&256)&&E.a&&gt(E.a,L),E.isMounted=!0,R=D=F=null}};E.scope.on();const q=E.effect=new Rf(W);E.scope.off();const M=E.update=q.run.bind(q),ne=E.job=q.runIfDirty.bind(q);ne.i=E,ne.id=E.uid,q.scheduler=()=>yc(ne),or(E,!0),M()},X=(E,R,D)=>{R.component=E;const F=E.vnode.props;E.vnode=R,E.next=null,Ry(E,R.props,F,D),ky(E,R.children,D),tn(),vh(E),nn()},$=(E,R,D,F,L,x,G,W,q=!1)=>{const M=E&&E.children,ne=E?E.shapeFlag:0,Y=R.children,{patchFlag:Z,shapeFlag:se}=R;if(Z>0){if(Z&128){jt(M,Y,D,F,L,x,G,W,q);return}else if(Z&256){te(M,Y,D,F,L,x,G,W,q);return}}se&8?(ne&16&&er(M,L,x),Y!==M&&f(D,Y)):ne&16?se&16?jt(M,Y,D,F,L,x,G,W,q):er(M,L,x,!0):(ne&8&&f(D,""),se&16&&m(Y,D,F,L,x,G,W,q))},te=(E,R,D,F,L,x,G,W,q)=>{E=E||Br,R=R||Br;const M=E.length,ne=R.length,Y=Math.min(M,ne);let Z;for(Z=0;Z<Y;Z++){const se=R[Z]=q?dn(R[Z]):zt(R[Z]);C(E[Z],se,D,null,L,x,G,W,q)}M>ne?er(E,L,x,!0,!1,Y):m(R,D,F,L,x,G,W,q,Y)},jt=(E,R,D,F,L,x,G,W,q)=>{let M=0;const ne=R.length;let Y=E.length-1,Z=ne-1;for(;M<=Y&&M<=Z;){const se=E[M],re=R[M]=q?dn(R[M]):zt(R[M]);if(ks(se,re))C(se,re,D,null,L,x,G,W,q);else break;M++}for(;M<=Y&&M<=Z;){const se=E[Y],re=R[Z]=q?dn(R[Z]):zt(R[Z]);if(ks(se,re))C(se,re,D,null,L,x,G,W,q);else break;Y--,Z--}if(M>Y){if(M<=Z){const se=Z+1,re=se<ne?R[se].el:F;for(;M<=Z;)C(null,R[M]=q?dn(R[M]):zt(R[M]),D,re,L,x,G,W,q),M++}}else if(M>Z)for(;M<=Y;)We(E[M],L,x,!0),M++;else{const se=M,re=M,fe=new Map;for(M=re;M<=Z;M++){const Ge=R[M]=q?dn(R[M]):zt(R[M]);Ge.key!=null&&fe.set(Ge.key,M)}let ve,Ne=0;const Be=Z-re+1;let Rt=!1,st=0;const Sn=new Array(Be);for(M=0;M<Be;M++)Sn[M]=0;for(M=se;M<=Y;M++){const Ge=E[M];if(Ne>=Be){We(Ge,L,x,!0);continue}let St;if(Ge.key!=null)St=fe.get(Ge.key);else for(ve=re;ve<=Z;ve++)if(Sn[ve-re]===0&&ks(Ge,R[ve])){St=ve;break}St===void 0?We(Ge,L,x,!0):(Sn[St-re]=M+1,St>=st?st=St:Rt=!0,C(Ge,R[St],D,null,L,x,G,W,q),Ne++)}const ms=Rt?Oy(Sn):Br;for(ve=ms.length-1,M=Be-1;M>=0;M--){const Ge=re+M,St=R[Ge],Mi=R[Ge+1],br=Ge+1<ne?Mi.el||dp(Mi):F;Sn[M]===0?C(null,St,D,br,L,x,G,W,q):Rt&&(ve<0||M!==ms[ve]?on(St,D,br,2):ve--)}}},on=(E,R,D,F,L=null)=>{const{el:x,type:G,transition:W,children:q,shapeFlag:M}=E;if(M&6){on(E.component.subTree,R,D,F);return}if(M&128){E.suspense.move(R,D,F);return}if(M&64){G.move(E,R,D,qt);return}if(G===Ze){r(x,R,D);for(let Y=0;Y<q.length;Y++)on(q[Y],R,D,F);r(E.anchor,R,D);return}if(G===Za){Q(E,R,D);return}if(F!==2&&M&1&&W)if(F===0)W.persisted&&!x[Ya]?r(x,R,D):(W.beforeEnter(x),r(x,R,D),gt(()=>W.enter(x),L));else{const{leave:Y,delayLeave:Z,afterLeave:se}=W,re=()=>{E.ctx.isUnmounted?s(x):r(x,R,D)},fe=()=>{const ve=x._isLeaving||!!x[Ya];x._isLeaving&&x[Ya](!0),W.persisted&&!ve?re():Y(x,()=>{re(),se&&se()})};Z?Z(x,re,fe):fe()}else r(x,R,D)},We=(E,R,D,F=!1,L=!1)=>{const{type:x,props:G,ref:W,children:q,dynamicChildren:M,shapeFlag:ne,patchFlag:Y,dirs:Z,cacheIndex:se,memo:re}=E;if(Y===-2&&(L=!1),W!=null&&(tn(),Ks(W,null,D,E,!0),nn()),se!=null&&(R.renderCache[se]=void 0),ne&256){R.ctx.deactivate(E);return}const fe=ne&1&&Z,ve=!zs(E);let Ne;if(ve&&(Ne=G&&G.onVnodeBeforeUnmount)&&Wt(Ne,R,E),ne&6)Zn(E.component,D,F);else{if(ne&128){E.suspense.unmount(D,F);return}fe&&ir(E,null,R,"beforeUnmount"),ne&64?E.type.remove(E,R,D,qt,F):M&&!M.hasOnce&&(x!==Ze||Y>0&&Y&64)?er(M,R,D,!1,!0):(x===Ze&&Y&384||!L&&ne&16)&&er(q,R,D),F&&He(E)}const Be=re!=null&&se==null;(ve&&(Ne=G&&G.onVnodeUnmounted)||fe||Be)&&gt(()=>{Ne&&Wt(Ne,R,E),fe&&ir(E,null,R,"unmounted"),Be&&(E.el=null)},D)},He=E=>{const{type:R,el:D,anchor:F,transition:L}=E;if(R===Ze){Ca(D,F);return}if(R===Za){H(E);return}const x=()=>{s(D),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(E.shapeFlag&1&&L&&!L.persisted){const{leave:G,delayLeave:W}=L,q=()=>G(D,x);W?W(E.el,x,q):q()}else x()},Ca=(E,R)=>{let D;for(;E!==R;)D=_(E),s(E),E=D;s(R)},Zn=(E,R,D)=>{const{bum:F,scope:L,job:x,subTree:G,um:W,m:q,a:M}=E;Dh(q),Dh(M),F&&lo(F),L.stop(),x&&(x.flags|=8,We(G,E,R,D)),W&&gt(W,R),gt(()=>{E.isUnmounted=!0},R)},er=(E,R,D,F=!1,L=!1,x=0)=>{for(let G=x;G<E.length;G++)We(E[G],R,D,F,L)},an=E=>{if(E.shapeFlag&6)return an(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const R=_(E.anchor||E.el),D=R&&R[Gf];return D?_(D):R};let ps=!1;const xi=(E,R,D)=>{let F;E==null?R._vnode&&(We(R._vnode,null,null,!0),F=R._vnode.component):C(R._vnode||null,E,R,null,null,null,D),R._vnode=E,ps||(ps=!0,vh(F),qf(),ps=!1)},qt={p:C,um:We,m:on,r:He,mt:qe,mc:m,pc:$,pbc:I,n:an,o:n};return{render:xi,hydrate:void 0,createApp:_y(xi)}}function Xa({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function or({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Ny(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Ic(n,e,t=!1){const r=n.children,s=e.children;if(ce(r)&&ce(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=dn(s[i]),l.el=a.el),!t&&l.patchFlag!==-2&&Ic(a,l)),l.type===ta&&(l.patchFlag===-1&&(l=s[i]=dn(l)),l.el=a.el),l.type===Hn&&!l.el&&(l.el=a.el)}}function Oy(n){const e=n.slice(),t=[0];let r,s,i,a,l;const c=n.length;for(r=0;r<c;r++){const h=n[r];if(h!==0){if(s=t[t.length-1],n[s]<h){e[r]=s,t.push(r);continue}for(i=0,a=t.length-1;i<a;)l=i+a>>1,n[t[l]]<h?i=l+1:a=l;h<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=e[a];return t}function hp(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:hp(e)}function Dh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function dp(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?dp(e.subTree):null}const fp=n=>n.__isSuspense;function xy(n,e){e&&e.pendingBranch?ce(n)?e.effects.push(...n):e.effects.push(n):q_(n)}const Ze=Symbol.for("v-fgt"),ta=Symbol.for("v-txt"),Hn=Symbol.for("v-cmt"),Za=Symbol.for("v-stc"),Qs=[];let Tt=null;function ae(n=!1){Qs.push(Tt=n?null:[])}function My(){Qs.pop(),Tt=Qs[Qs.length-1]||null}let si=1;function Nh(n,e=!1){si+=n,n<0&&Tt&&e&&(Tt.hasOnce=!0)}function pp(n){return n.dynamicChildren=si>0?Tt||Br:null,My(),si>0&&Tt&&Tt.push(n),n}function ge(n,e,t,r,s,i){return pp(O(n,e,t,r,s,i,!0))}function Wr(n,e,t,r,s){return pp(Vt(n,e,t,r,s,!0))}function gp(n){return n?n.__v_isVNode===!0:!1}function ks(n,e){return n.type===e.type&&n.key===e.key}const mp=({key:n})=>n??null,uo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Oe(n)||ht(n)||pe(n)?{i:Ct,r:n,k:e,f:!!t}:n:null);function O(n,e=null,t=null,r=0,s=null,i=n===Ze?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&mp(e),ref:e&&uo(e),scopeId:Hf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ct};return l?(Ro(c,t),i&128&&n.normalize(c)):t&&(c.shapeFlag|=Oe(t)?8:16),si>0&&!a&&Tt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Tt.push(c),c}const Vt=Ly;function Ly(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===cy)&&(n=Hn),gp(n)){const l=Jr(n,e,!0);return t&&Ro(l,t),si>0&&!i&&Tt&&(l.shapeFlag&6?Tt[Tt.indexOf(n)]=l:Tt.push(l)),l.patchFlag=-2,l}if(Gy(n)&&(n=n.__vccOpts),e){e=Fy(e);let{class:l,style:c}=e;l&&!Oe(l)&&(e.class=mt(l)),be(c)&&(_c(c)&&!ce(c)&&(c=nt({},c)),e.style=yi(c))}const a=Oe(n)?1:fp(n)?128:G_(n)?64:be(n)?4:pe(n)?2:0;return O(n,e,t,r,s,a,i,!0)}function Fy(n){return n?_c(n)||ip(n)?nt({},n):n:null}function Jr(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=n,h=e?Uy(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:n.type,props:h,key:h&&mp(h),ref:e&&e.ref?t&&i?ce(i)?i.concat(uo(e)):[i,uo(e)]:uo(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ze?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Jr(n.ssContent),ssFallback:n.ssFallback&&Jr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&r&&vc(f,c.clone(f)),f}function Dr(n=" ",e=0){return Vt(ta,null,n,e)}function Xe(n="",e=!1){return e?(ae(),Wr(Hn,null,n)):Vt(Hn,null,n)}function zt(n){return n==null||typeof n=="boolean"?Vt(Hn):ce(n)?Vt(Ze,null,n.slice()):gp(n)?dn(n):Vt(ta,null,String(n))}function dn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Jr(n)}function Ro(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(ce(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ro(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!ip(e)?e._ctx=Ct:s===3&&Ct&&(Ct.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(pe(e)){if(r&65){Ro(n,{default:e});return}e={default:e,_ctx:Ct},t=32}else e=String(e),r&64?(t=16,e=[Dr(e)]):t=8;n.children=e,n.shapeFlag|=t}function Uy(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=mt([e.class,r.class]));else if(s==="style")e.style=yi([e.style,r.style]);else if(Ko(s)){const i=e[s],a=r[s];a&&i!==a&&!(ce(i)&&i.includes(a))?e[s]=i?[].concat(i,a):a:a==null&&i==null&&!zo(s)&&(e[s]=a)}else s!==""&&(e[s]=r[s])}return e}function Wt(n,e,t,r=null){Ft(n,e,7,[t,r])}const By=ep();let $y=0;function jy(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||By,i={uid:$y++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new f_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ap(r,s),emitsOptions:tp(r,s),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=vy.bind(null,i),n.ce&&n.ce(i),i}let yt=null;const qy=()=>yt||Ct;let So,Ol;{const n=Qo(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};So=e("__VUE_INSTANCE_SETTERS__",t=>yt=t),Ol=e("__VUE_SSR_SETTERS__",t=>ii=t)}const wi=n=>{const e=yt;return So(n),n.scope.on(),()=>{n.scope.off(),So(e)}},Oh=()=>{yt&&yt.scope.off(),So(null)};function _p(n){return n.vnode.shapeFlag&4}let ii=!1;function Wy(n,e=!1,t=!1){e&&Ol(e);const{props:r,children:s}=n.vnode,i=_p(n);by(n,r,i,e),Cy(n,s,t||e);const a=i?Hy(n,e):void 0;return e&&Ol(!1),a}function Hy(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,uy);const{setup:r}=t;if(r){tn();const s=n.setupContext=r.length>1?zy(n):null,i=wi(n),a=vi(r,n,0,[n.props,s]),l=yf(a);if(nn(),i(),(l||n.sp)&&!zs(n)&&Qf(n),l){if(a.then(Oh,Oh),e)return a.then(c=>{xh(n,c)}).catch(c=>{Jo(c,n,0)});n.asyncDep=a}else xh(n,a)}else yp(n)}function xh(n,e,t){pe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:be(e)&&(n.setupState=Bf(e)),yp(n)}function yp(n,e,t){const r=n.type;n.render||(n.render=r.render||Qt);{const s=wi(n);tn();try{hy(n)}finally{nn(),s()}}}const Ky={get(n,e){return ct(n,"get",""),n[e]}};function zy(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Ky),slots:n.slots,emit:n.emit,expose:e}}function na(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Bf(N_(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Gs)return Gs[t](n)},has(e,t){return t in e||t in Gs}})):n.proxy}function Gy(n){return pe(n)&&"__vccOpts"in n}const Fr=(n,e)=>F_(n,e,ii),Qy="3.5.39";/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xl;const Mh=typeof window<"u"&&window.trustedTypes;if(Mh)try{xl=Mh.createPolicy("vue",{createHTML:n=>n})}catch{}const vp=xl?n=>xl.createHTML(n):n=>n,Yy="http://www.w3.org/2000/svg",Jy="http://www.w3.org/1998/Math/MathML",hn=typeof document<"u"?document:null,Lh=hn&&hn.createElement("template"),Xy={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?hn.createElementNS(Yy,n):e==="mathml"?hn.createElementNS(Jy,n):t?hn.createElement(n,{is:t}):hn.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>hn.createTextNode(n),createComment:n=>hn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>hn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const a=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{Lh.innerHTML=vp(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const l=Lh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Zy=Symbol("_vtc");function ev(n,e,t){const r=n[Zy];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Po=Symbol("_vod"),Ep=Symbol("_vsh"),el={name:"show",beforeMount(n,{value:e},{transition:t}){n[Po]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Vs(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:r}){!e!=!t&&(r?e?(r.beforeEnter(n),Vs(n,!0),r.enter(n)):r.leave(n,()=>{Vs(n,!1)}):Vs(n,e))},beforeUnmount(n,{value:e}){Vs(n,e)}};function Vs(n,e){n.style.display=e?n[Po]:"none",n[Ep]=!e}const tv=Symbol(""),nv=/(?:^|;)\s*display\s*:/;function rv(n,e,t){const r=n.style,s=Oe(t);let i=!1;if(t&&!s){if(e)if(Oe(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();t[l]==null&&Ms(r,l,"")}else for(const a in e)t[a]==null&&Ms(r,a,"");for(const a in t){a==="display"&&(i=!0);const l=t[a];l!=null?iv(n,a,!Oe(e)&&e?e[a]:void 0,l)||Ms(r,a,l):Ms(r,a,"")}}else if(s){if(e!==t){const a=r[tv];a&&(t+=";"+a),r.cssText=t,i=nv.test(t)}}else e&&n.removeAttribute("style");Po in n&&(n[Po]=i?r.display:"",n[Ep]&&(r.display="none"))}const Fh=/\s*!important$/;function Ms(n,e,t){if(ce(t))t.forEach(r=>Ms(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=sv(n,e);Fh.test(t)?n.setProperty(Yn(r),t.replace(Fh,""),"important"):n[r]=t}}const Uh=["Webkit","Moz","ms"],tl={};function sv(n,e){const t=tl[e];if(t)return t;let r=xt(e);if(r!=="filter"&&r in n)return tl[e]=r;r=wf(r);for(let s=0;s<Uh.length;s++){const i=Uh[s]+r;if(i in n)return tl[e]=i}return e}function iv(n,e,t,r){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Oe(r)&&t===r}const Bh="http://www.w3.org/1999/xlink";function $h(n,e,t,r,s,i=h_(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Bh,e.slice(6,e.length)):n.setAttributeNS(Bh,e,t):t==null||i&&!If(t)?n.removeAttribute(e):n.setAttribute(e,i?"":en(t)?String(t):t)}function jh(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?vp(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(l!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=If(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function Nr(n,e,t,r){n.addEventListener(e,t,r)}function ov(n,e,t,r){n.removeEventListener(e,t,r)}const qh=Symbol("_vei");function av(n,e,t,r,s=null){const i=n[qh]||(n[qh]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=uv(e);if(r){const h=i[e]=fv(r,s);Nr(n,l,h,c)}else a&&(ov(n,l,a,c),i[e]=void 0)}}const lv=/(Once|Passive|Capture)$/,cv=/^on:?(?:Once|Passive|Capture)$/;function uv(n){let e,t;for(;(t=n.match(lv))&&!cv.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Yn(n.slice(2)),e]}let nl=0;const hv=Promise.resolve(),dv=()=>nl||(hv.then(()=>nl=0),nl=Date.now());function fv(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;const s=t.value;if(ce(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const a=s.slice(),l=[r];for(let c=0;c<a.length&&!r._stopped;c++){const h=a[c];h&&Ft(h,e,5,l)}}else Ft(s,e,5,[r])};return t.value=n,t.attached=dv(),t}const Wh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,pv=(n,e,t,r,s,i)=>{const a=s==="svg";e==="class"?ev(n,r,a):e==="style"?rv(n,t,r):Ko(e)?zo(e)||av(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):gv(n,e,r,a))?(jh(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&$h(n,e,r,a,i,e!=="value")):n._isVueCE&&(mv(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Oe(r)))?jh(n,xt(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),$h(n,e,r,a))};function gv(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&Wh(e)&&pe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Wh(e)&&Oe(t)?!1:e in n}function mv(n,e){const t=n._def.props;if(!t)return!1;const r=xt(e);return Array.isArray(t)?t.some(s=>xt(s)===r):Object.keys(t).some(s=>xt(s)===r)}const Hh=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ce(e)?t=>lo(e,t):e};function _v(n){n.target.composing=!0}function Kh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const rl=Symbol("_assign");function zh(n,e,t){return e&&(n=n.trim()),t&&(n=lc(n)),n}const Un={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[rl]=Hh(s);const i=r||s.props&&s.props.type==="number";Nr(n,e?"change":"input",a=>{a.target.composing||n[rl](zh(n.value,t,i))}),(t||i)&&Nr(n,"change",()=>{n.value=zh(n.value,t,i)}),e||(Nr(n,"compositionstart",_v),Nr(n,"compositionend",Kh),Nr(n,"change",Kh))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},a){if(n[rl]=Hh(a),n.composing)return;const l=(i||n.type==="number")&&!/^0\d/.test(n.value)?lc(n.value):n.value,c=e??"";if(l===c)return;const h=n.getRootNode();(h instanceof Document||h instanceof ShadowRoot)&&h.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===c)||(n.value=c)}},yv=["ctrl","shift","alt","meta"],vv={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>yv.some(t=>n[`${t}Key`]&&!e.includes(t))},Ys=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),r=e.join(".");return t[r]||(t[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const l=vv[e[a]];if(l&&l(s,e))return}return n(s,...i)})},Ev={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},sl=(n,e)=>{const t=n._withKeys||(n._withKeys={}),r=e.join(".");return t[r]||(t[r]=s=>{if(!("key"in s))return;const i=Yn(s.key);if(e.some(a=>a===i||Ev[a]===i))return n(s)})},wv=nt({patchProp:pv},Xy);let Gh;function Tv(){return Gh||(Gh=Vy(wv))}const Iv=(...n)=>{const e=Tv().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=bv(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,Av(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function Av(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function bv(n){return Oe(n)?document.querySelector(n):n}var Qh={};/**
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
 */const wp=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Rv=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Tp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,c=s+2<n.length,h=c?n[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let _=(l&15)<<2|h>>6,A=h&63;c||(A=64,a||(_=64)),r.push(t[f],t[p],t[_],t[A])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(wp(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Rv(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new Sv;const _=i<<2|l>>4;if(r.push(_),h!==64){const A=l<<4&240|h>>2;if(r.push(A),p!==64){const P=h<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Sv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Pv=function(n){const e=wp(n);return Tp.encodeByteArray(e,!0)},Co=function(n){return Pv(n).replace(/\./g,"")},Ip=function(n){try{return Tp.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Cv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const kv=()=>Cv().__FIREBASE_DEFAULTS__,Vv=()=>{if(typeof process>"u"||typeof Qh>"u")return;const n=Qh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Dv=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ip(n[1]);return e&&JSON.parse(e)},ra=()=>{try{return kv()||Vv()||Dv()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ap=n=>{var e,t;return(t=(e=ra())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Nv=n=>{const e=Ap(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},bp=()=>{var n;return(n=ra())===null||n===void 0?void 0:n.config},Rp=n=>{var e;return(e=ra())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Ov{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function xv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Co(JSON.stringify(t)),Co(JSON.stringify(a)),""].join(".")}/**
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
 */function dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function Lv(){var n;const e=(n=ra())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Fv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Uv(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Bv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $v(){const n=dt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function jv(){return!Lv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function qv(){try{return typeof indexedDB=="object"}catch{return!1}}function Wv(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Hv="FirebaseError";class Rn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Hv,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ti.prototype.create)}}class Ti{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Kv(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Rn(s,l,r)}}function Kv(n,e){return n.replace(zv,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const zv=/\{\$([^}]+)}/g;function Gv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ko(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Yh(i)&&Yh(a)){if(!ko(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Yh(n){return n!==null&&typeof n=="object"}/**
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
 */function Ii(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ls(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Fs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Qv(n,e){const t=new Yv(n,e);return t.subscribe.bind(t)}class Yv{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Jv(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=il),s.error===void 0&&(s.error=il),s.complete===void 0&&(s.complete=il);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Jv(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function il(){}/**
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
 */function Fe(n){return n&&n._delegate?n._delegate:n}class mr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const cr="[DEFAULT]";/**
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
 */class Xv{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Ov;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eE(e))try{this.getOrInitializeService({instanceIdentifier:cr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=cr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cr){return this.instances.has(e)}getOptions(e=cr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Zv(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=cr){return this.component?this.component.multipleInstances?e:cr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zv(n){return n===cr?void 0:n}function eE(n){return n.instantiationMode==="EAGER"}/**
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
 */class tE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Xv(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var _e;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(_e||(_e={}));const nE={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},rE=_e.INFO,sE={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},iE=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=sE[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ac{constructor(e){this.name=e,this._logLevel=rE,this._logHandler=iE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const oE=(n,e)=>e.some(t=>n instanceof t);let Jh,Xh;function aE(){return Jh||(Jh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lE(){return Xh||(Xh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sp=new WeakMap,Ml=new WeakMap,Pp=new WeakMap,ol=new WeakMap,bc=new WeakMap;function cE(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Bn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Sp.set(t,n)}).catch(()=>{}),bc.set(e,n),e}function uE(n){if(Ml.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Ml.set(n,e)}let Ll={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ml.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Pp.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Bn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function hE(n){Ll=n(Ll)}function dE(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(al(this),e,...t);return Pp.set(r,e.sort?e.sort():[e]),Bn(r)}:lE().includes(n)?function(...e){return n.apply(al(this),e),Bn(Sp.get(this))}:function(...e){return Bn(n.apply(al(this),e))}}function fE(n){return typeof n=="function"?dE(n):(n instanceof IDBTransaction&&uE(n),oE(n,aE())?new Proxy(n,Ll):n)}function Bn(n){if(n instanceof IDBRequest)return cE(n);if(ol.has(n))return ol.get(n);const e=fE(n);return e!==n&&(ol.set(n,e),bc.set(e,n)),e}const al=n=>bc.get(n);function pE(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=Bn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Bn(a.result),c.oldVersion,c.newVersion,Bn(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const gE=["get","getKey","getAll","getAllKeys","count"],mE=["put","add","delete","clear"],ll=new Map;function Zh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ll.get(e))return ll.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=mE.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||gE.includes(t)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),s&&c.done]))[0]};return ll.set(e,i),i}hE(n=>({...n,get:(e,t,r)=>Zh(e,t)||n.get(e,t,r),has:(e,t)=>!!Zh(e,t)||n.has(e,t)}));/**
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
 */class _E{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(yE(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function yE(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fl="@firebase/app",ed="0.10.13";/**
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
 */const wn=new Ac("@firebase/app"),vE="@firebase/app-compat",EE="@firebase/analytics-compat",wE="@firebase/analytics",TE="@firebase/app-check-compat",IE="@firebase/app-check",AE="@firebase/auth",bE="@firebase/auth-compat",RE="@firebase/database",SE="@firebase/data-connect",PE="@firebase/database-compat",CE="@firebase/functions",kE="@firebase/functions-compat",VE="@firebase/installations",DE="@firebase/installations-compat",NE="@firebase/messaging",OE="@firebase/messaging-compat",xE="@firebase/performance",ME="@firebase/performance-compat",LE="@firebase/remote-config",FE="@firebase/remote-config-compat",UE="@firebase/storage",BE="@firebase/storage-compat",$E="@firebase/firestore",jE="@firebase/vertexai-preview",qE="@firebase/firestore-compat",WE="firebase",HE="10.14.1";/**
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
 */const Ul="[DEFAULT]",KE={[Fl]:"fire-core",[vE]:"fire-core-compat",[wE]:"fire-analytics",[EE]:"fire-analytics-compat",[IE]:"fire-app-check",[TE]:"fire-app-check-compat",[AE]:"fire-auth",[bE]:"fire-auth-compat",[RE]:"fire-rtdb",[SE]:"fire-data-connect",[PE]:"fire-rtdb-compat",[CE]:"fire-fn",[kE]:"fire-fn-compat",[VE]:"fire-iid",[DE]:"fire-iid-compat",[NE]:"fire-fcm",[OE]:"fire-fcm-compat",[xE]:"fire-perf",[ME]:"fire-perf-compat",[LE]:"fire-rc",[FE]:"fire-rc-compat",[UE]:"fire-gcs",[BE]:"fire-gcs-compat",[$E]:"fire-fst",[qE]:"fire-fst-compat",[jE]:"fire-vertex","fire-js":"fire-js",[WE]:"fire-js-all"};/**
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
 */const Vo=new Map,zE=new Map,Bl=new Map;function td(n,e){try{n.container.addComponent(e)}catch(t){wn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Xr(n){const e=n.name;if(Bl.has(e))return wn.debug(`There were multiple attempts to register component ${e}.`),!1;Bl.set(e,n);for(const t of Vo.values())td(t,n);for(const t of zE.values())td(t,n);return!0}function Rc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function gn(n){return n.settings!==void 0}/**
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
 */const GE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$n=new Ti("app","Firebase",GE);/**
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
 */class QE{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $n.create("app-deleted",{appName:this._name})}}/**
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
 */const ls=HE;function Cp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ul,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw $n.create("bad-app-name",{appName:String(s)});if(t||(t=bp()),!t)throw $n.create("no-options");const i=Vo.get(s);if(i){if(ko(t,i.options)&&ko(r,i.config))return i;throw $n.create("duplicate-app",{appName:s})}const a=new tE(s);for(const c of Bl.values())a.addComponent(c);const l=new QE(t,r,a);return Vo.set(s,l),l}function kp(n=Ul){const e=Vo.get(n);if(!e&&n===Ul&&bp())return Cp();if(!e)throw $n.create("no-app",{appName:n});return e}function jn(n,e,t){var r;let s=(r=KE[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wn.warn(l.join(" "));return}Xr(new mr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const YE="firebase-heartbeat-database",JE=1,oi="firebase-heartbeat-store";let cl=null;function Vp(){return cl||(cl=pE(YE,JE,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(oi)}catch(t){console.warn(t)}}}}).catch(n=>{throw $n.create("idb-open",{originalErrorMessage:n.message})})),cl}async function XE(n){try{const t=(await Vp()).transaction(oi),r=await t.objectStore(oi).get(Dp(n));return await t.done,r}catch(e){if(e instanceof Rn)wn.warn(e.message);else{const t=$n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wn.warn(t.message)}}}async function nd(n,e){try{const r=(await Vp()).transaction(oi,"readwrite");await r.objectStore(oi).put(e,Dp(n)),await r.done}catch(t){if(t instanceof Rn)wn.warn(t.message);else{const r=$n.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});wn.warn(r.message)}}}function Dp(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ZE=1024,ew=30*24*60*60*1e3;class tw{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new rw(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=rd();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=ew}),this._storage.overwrite(this._heartbeatsCache))}catch(r){wn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=rd(),{heartbeatsToSend:r,unsentEntries:s}=nw(this._heartbeatsCache.heartbeats),i=Co(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return wn.warn(t),""}}}function rd(){return new Date().toISOString().substring(0,10)}function nw(n,e=ZE){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),sd(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),sd(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class rw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qv()?Wv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await XE(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return nd(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return nd(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function sd(n){return Co(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function sw(n){Xr(new mr("platform-logger",e=>new _E(e),"PRIVATE")),Xr(new mr("heartbeat",e=>new tw(e),"PRIVATE")),jn(Fl,ed,n),jn(Fl,ed,"esm2017"),jn("fire-js","")}sw("");var id=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gr,Np;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,m){function y(){}y.prototype=m.prototype,T.D=m.prototype,T.prototype=new y,T.prototype.constructor=T,T.C=function(I,v,b){for(var w=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)w[qe-2]=arguments[qe];return m.prototype[v].apply(I,w)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,m,y){y||(y=0);var I=Array(16);if(typeof m=="string")for(var v=0;16>v;++v)I[v]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(v=0;16>v;++v)I[v]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=T.g[0],y=T.g[1],v=T.g[2];var b=T.g[3],w=m+(b^y&(v^b))+I[0]+3614090360&4294967295;m=y+(w<<7&4294967295|w>>>25),w=b+(v^m&(y^v))+I[1]+3905402710&4294967295,b=m+(w<<12&4294967295|w>>>20),w=v+(y^b&(m^y))+I[2]+606105819&4294967295,v=b+(w<<17&4294967295|w>>>15),w=y+(m^v&(b^m))+I[3]+3250441966&4294967295,y=v+(w<<22&4294967295|w>>>10),w=m+(b^y&(v^b))+I[4]+4118548399&4294967295,m=y+(w<<7&4294967295|w>>>25),w=b+(v^m&(y^v))+I[5]+1200080426&4294967295,b=m+(w<<12&4294967295|w>>>20),w=v+(y^b&(m^y))+I[6]+2821735955&4294967295,v=b+(w<<17&4294967295|w>>>15),w=y+(m^v&(b^m))+I[7]+4249261313&4294967295,y=v+(w<<22&4294967295|w>>>10),w=m+(b^y&(v^b))+I[8]+1770035416&4294967295,m=y+(w<<7&4294967295|w>>>25),w=b+(v^m&(y^v))+I[9]+2336552879&4294967295,b=m+(w<<12&4294967295|w>>>20),w=v+(y^b&(m^y))+I[10]+4294925233&4294967295,v=b+(w<<17&4294967295|w>>>15),w=y+(m^v&(b^m))+I[11]+2304563134&4294967295,y=v+(w<<22&4294967295|w>>>10),w=m+(b^y&(v^b))+I[12]+1804603682&4294967295,m=y+(w<<7&4294967295|w>>>25),w=b+(v^m&(y^v))+I[13]+4254626195&4294967295,b=m+(w<<12&4294967295|w>>>20),w=v+(y^b&(m^y))+I[14]+2792965006&4294967295,v=b+(w<<17&4294967295|w>>>15),w=y+(m^v&(b^m))+I[15]+1236535329&4294967295,y=v+(w<<22&4294967295|w>>>10),w=m+(v^b&(y^v))+I[1]+4129170786&4294967295,m=y+(w<<5&4294967295|w>>>27),w=b+(y^v&(m^y))+I[6]+3225465664&4294967295,b=m+(w<<9&4294967295|w>>>23),w=v+(m^y&(b^m))+I[11]+643717713&4294967295,v=b+(w<<14&4294967295|w>>>18),w=y+(b^m&(v^b))+I[0]+3921069994&4294967295,y=v+(w<<20&4294967295|w>>>12),w=m+(v^b&(y^v))+I[5]+3593408605&4294967295,m=y+(w<<5&4294967295|w>>>27),w=b+(y^v&(m^y))+I[10]+38016083&4294967295,b=m+(w<<9&4294967295|w>>>23),w=v+(m^y&(b^m))+I[15]+3634488961&4294967295,v=b+(w<<14&4294967295|w>>>18),w=y+(b^m&(v^b))+I[4]+3889429448&4294967295,y=v+(w<<20&4294967295|w>>>12),w=m+(v^b&(y^v))+I[9]+568446438&4294967295,m=y+(w<<5&4294967295|w>>>27),w=b+(y^v&(m^y))+I[14]+3275163606&4294967295,b=m+(w<<9&4294967295|w>>>23),w=v+(m^y&(b^m))+I[3]+4107603335&4294967295,v=b+(w<<14&4294967295|w>>>18),w=y+(b^m&(v^b))+I[8]+1163531501&4294967295,y=v+(w<<20&4294967295|w>>>12),w=m+(v^b&(y^v))+I[13]+2850285829&4294967295,m=y+(w<<5&4294967295|w>>>27),w=b+(y^v&(m^y))+I[2]+4243563512&4294967295,b=m+(w<<9&4294967295|w>>>23),w=v+(m^y&(b^m))+I[7]+1735328473&4294967295,v=b+(w<<14&4294967295|w>>>18),w=y+(b^m&(v^b))+I[12]+2368359562&4294967295,y=v+(w<<20&4294967295|w>>>12),w=m+(y^v^b)+I[5]+4294588738&4294967295,m=y+(w<<4&4294967295|w>>>28),w=b+(m^y^v)+I[8]+2272392833&4294967295,b=m+(w<<11&4294967295|w>>>21),w=v+(b^m^y)+I[11]+1839030562&4294967295,v=b+(w<<16&4294967295|w>>>16),w=y+(v^b^m)+I[14]+4259657740&4294967295,y=v+(w<<23&4294967295|w>>>9),w=m+(y^v^b)+I[1]+2763975236&4294967295,m=y+(w<<4&4294967295|w>>>28),w=b+(m^y^v)+I[4]+1272893353&4294967295,b=m+(w<<11&4294967295|w>>>21),w=v+(b^m^y)+I[7]+4139469664&4294967295,v=b+(w<<16&4294967295|w>>>16),w=y+(v^b^m)+I[10]+3200236656&4294967295,y=v+(w<<23&4294967295|w>>>9),w=m+(y^v^b)+I[13]+681279174&4294967295,m=y+(w<<4&4294967295|w>>>28),w=b+(m^y^v)+I[0]+3936430074&4294967295,b=m+(w<<11&4294967295|w>>>21),w=v+(b^m^y)+I[3]+3572445317&4294967295,v=b+(w<<16&4294967295|w>>>16),w=y+(v^b^m)+I[6]+76029189&4294967295,y=v+(w<<23&4294967295|w>>>9),w=m+(y^v^b)+I[9]+3654602809&4294967295,m=y+(w<<4&4294967295|w>>>28),w=b+(m^y^v)+I[12]+3873151461&4294967295,b=m+(w<<11&4294967295|w>>>21),w=v+(b^m^y)+I[15]+530742520&4294967295,v=b+(w<<16&4294967295|w>>>16),w=y+(v^b^m)+I[2]+3299628645&4294967295,y=v+(w<<23&4294967295|w>>>9),w=m+(v^(y|~b))+I[0]+4096336452&4294967295,m=y+(w<<6&4294967295|w>>>26),w=b+(y^(m|~v))+I[7]+1126891415&4294967295,b=m+(w<<10&4294967295|w>>>22),w=v+(m^(b|~y))+I[14]+2878612391&4294967295,v=b+(w<<15&4294967295|w>>>17),w=y+(b^(v|~m))+I[5]+4237533241&4294967295,y=v+(w<<21&4294967295|w>>>11),w=m+(v^(y|~b))+I[12]+1700485571&4294967295,m=y+(w<<6&4294967295|w>>>26),w=b+(y^(m|~v))+I[3]+2399980690&4294967295,b=m+(w<<10&4294967295|w>>>22),w=v+(m^(b|~y))+I[10]+4293915773&4294967295,v=b+(w<<15&4294967295|w>>>17),w=y+(b^(v|~m))+I[1]+2240044497&4294967295,y=v+(w<<21&4294967295|w>>>11),w=m+(v^(y|~b))+I[8]+1873313359&4294967295,m=y+(w<<6&4294967295|w>>>26),w=b+(y^(m|~v))+I[15]+4264355552&4294967295,b=m+(w<<10&4294967295|w>>>22),w=v+(m^(b|~y))+I[6]+2734768916&4294967295,v=b+(w<<15&4294967295|w>>>17),w=y+(b^(v|~m))+I[13]+1309151649&4294967295,y=v+(w<<21&4294967295|w>>>11),w=m+(v^(y|~b))+I[4]+4149444226&4294967295,m=y+(w<<6&4294967295|w>>>26),w=b+(y^(m|~v))+I[11]+3174756917&4294967295,b=m+(w<<10&4294967295|w>>>22),w=v+(m^(b|~y))+I[2]+718787259&4294967295,v=b+(w<<15&4294967295|w>>>17),w=y+(b^(v|~m))+I[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(v+(w<<21&4294967295|w>>>11))&4294967295,T.g[2]=T.g[2]+v&4294967295,T.g[3]=T.g[3]+b&4294967295}r.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var y=m-this.blockSize,I=this.B,v=this.h,b=0;b<m;){if(v==0)for(;b<=y;)s(this,T,b),b+=this.blockSize;if(typeof T=="string"){for(;b<m;)if(I[v++]=T.charCodeAt(b++),v==this.blockSize){s(this,I),v=0;break}}else for(;b<m;)if(I[v++]=T[b++],v==this.blockSize){s(this,I),v=0;break}}this.h=v,this.o+=m},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var y=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=y&255,y/=256;for(this.u(T),T=Array(16),m=y=0;4>m;++m)for(var I=0;32>I;I+=8)T[y++]=this.g[m]>>>I&255;return T};function i(T,m){var y=l;return Object.prototype.hasOwnProperty.call(y,T)?y[T]:y[T]=m(T)}function a(T,m){this.h=m;for(var y=[],I=!0,v=T.length-1;0<=v;v--){var b=T[v]|0;I&&b==m||(y[v]=b,I=!1)}this.g=y}var l={};function c(T){return-128<=T&&128>T?i(T,function(m){return new a([m|0],0>m?-1:0)}):new a([T|0],0>T?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return p;if(0>T)return k(h(-T));for(var m=[],y=1,I=0;T>=y;I++)m[I]=T/y|0,y*=4294967296;return new a(m,0)}function f(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return k(f(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(m,8)),I=p,v=0;v<T.length;v+=8){var b=Math.min(8,T.length-v),w=parseInt(T.substring(v,v+b),m);8>b?(b=h(Math.pow(m,b)),I=I.j(b).add(h(w))):(I=I.j(y),I=I.add(h(w)))}return I}var p=c(0),_=c(1),A=c(16777216);n=a.prototype,n.m=function(){if(C(this))return-k(this).m();for(var T=0,m=1,y=0;y<this.g.length;y++){var I=this.i(y);T+=(0<=I?I:4294967296+I)*m,m*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(P(this))return"0";if(C(this))return"-"+k(this).toString(T);for(var m=h(Math.pow(T,6)),y=this,I="";;){var v=H(y,m).g;y=j(y,v.j(m));var b=((0<y.g.length?y.g[0]:y.h)>>>0).toString(T);if(y=v,P(y))return b+I;for(;6>b.length;)b="0"+b;I=b+I}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function P(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function C(T){return T.h==-1}n.l=function(T){return T=j(this,T),C(T)?-1:P(T)?0:1};function k(T){for(var m=T.g.length,y=[],I=0;I<m;I++)y[I]=~T.g[I];return new a(y,~T.h).add(_)}n.abs=function(){return C(this)?k(this):this},n.add=function(T){for(var m=Math.max(this.g.length,T.g.length),y=[],I=0,v=0;v<=m;v++){var b=I+(this.i(v)&65535)+(T.i(v)&65535),w=(b>>>16)+(this.i(v)>>>16)+(T.i(v)>>>16);I=w>>>16,b&=65535,w&=65535,y[v]=w<<16|b}return new a(y,y[y.length-1]&-2147483648?-1:0)};function j(T,m){return T.add(k(m))}n.j=function(T){if(P(this)||P(T))return p;if(C(this))return C(T)?k(this).j(k(T)):k(k(this).j(T));if(C(T))return k(this.j(k(T)));if(0>this.l(A)&&0>T.l(A))return h(this.m()*T.m());for(var m=this.g.length+T.g.length,y=[],I=0;I<2*m;I++)y[I]=0;for(I=0;I<this.g.length;I++)for(var v=0;v<T.g.length;v++){var b=this.i(I)>>>16,w=this.i(I)&65535,qe=T.i(v)>>>16,$t=T.i(v)&65535;y[2*I+2*v]+=w*$t,B(y,2*I+2*v),y[2*I+2*v+1]+=b*$t,B(y,2*I+2*v+1),y[2*I+2*v+1]+=w*qe,B(y,2*I+2*v+1),y[2*I+2*v+2]+=b*qe,B(y,2*I+2*v+2)}for(I=0;I<m;I++)y[I]=y[2*I+1]<<16|y[2*I];for(I=m;I<2*m;I++)y[I]=0;return new a(y,0)};function B(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function Q(T,m){this.g=T,this.h=m}function H(T,m){if(P(m))throw Error("division by zero");if(P(T))return new Q(p,p);if(C(T))return m=H(k(T),m),new Q(k(m.g),k(m.h));if(C(m))return m=H(T,k(m)),new Q(k(m.g),m.h);if(30<T.g.length){if(C(T)||C(m))throw Error("slowDivide_ only works with positive integers.");for(var y=_,I=m;0>=I.l(T);)y=ie(y),I=ie(I);var v=de(y,1),b=de(I,1);for(I=de(I,2),y=de(y,2);!P(I);){var w=b.add(I);0>=w.l(T)&&(v=v.add(y),b=w),I=de(I,1),y=de(y,1)}return m=j(T,v.j(m)),new Q(v,m)}for(v=p;0<=T.l(m);){for(y=Math.max(1,Math.floor(T.m()/m.m())),I=Math.ceil(Math.log(y)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),b=h(y),w=b.j(m);C(w)||0<w.l(T);)y-=I,b=h(y),w=b.j(m);P(b)&&(b=_),v=v.add(b),T=j(T,w)}return new Q(v,T)}n.A=function(T){return H(this,T).h},n.and=function(T){for(var m=Math.max(this.g.length,T.g.length),y=[],I=0;I<m;I++)y[I]=this.i(I)&T.i(I);return new a(y,this.h&T.h)},n.or=function(T){for(var m=Math.max(this.g.length,T.g.length),y=[],I=0;I<m;I++)y[I]=this.i(I)|T.i(I);return new a(y,this.h|T.h)},n.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),y=[],I=0;I<m;I++)y[I]=this.i(I)^T.i(I);return new a(y,this.h^T.h)};function ie(T){for(var m=T.g.length+1,y=[],I=0;I<m;I++)y[I]=T.i(I)<<1|T.i(I-1)>>>31;return new a(y,T.h)}function de(T,m){var y=m>>5;m%=32;for(var I=T.g.length-y,v=[],b=0;b<I;b++)v[b]=0<m?T.i(b+y)>>>m|T.i(b+y+1)<<32-m:T.i(b+y);return new a(v,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Np=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,gr=a}).apply(typeof id<"u"?id:typeof self<"u"?self:typeof window<"u"?window:{});var no=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Op,Us,xp,ho,$l,Mp,Lp,Fp;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof no=="object"&&no];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var d=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var S=o[g];if(!(S in d))break e;d=d[S]}o=o[o.length-1],g=d[o],u=u(g),u!=g&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var d=0,g=!1,S={next:function(){if(!g&&d<o.length){var V=d++;return{value:u(V,o[V]),done:!1}}return g=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function p(o,u,d){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,g),o.apply(u,S)}}return function(){return o.apply(u,arguments)}}function _(o,u,d){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,_.apply(null,arguments)}function A(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function P(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(g,S,V){for(var K=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)K[Re-2]=arguments[Re];return u.prototype[S].apply(g,K)}}function C(o){const u=o.length;if(0<u){const d=Array(u);for(let g=0;g<u;g++)d[g]=o[g];return d}return[]}function k(o,u){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(c(g)){const S=o.length||0,V=g.length||0;o.length=S+V;for(let K=0;K<V;K++)o[S+K]=g[K]}else o.push(g)}}class j{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(o){return/^[\s\xa0]*$/.test(o)}function Q(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function H(o){return H[" "](o),o}H[" "]=function(){};var ie=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function de(o,u,d){for(const g in o)u.call(d,o[g],g,o)}function T(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function m(o){const u={};for(const d in o)u[d]=o[d];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(o,u){let d,g;for(let S=1;S<arguments.length;S++){g=arguments[S];for(d in g)o[d]=g[d];for(let V=0;V<y.length;V++)d=y[V],Object.prototype.hasOwnProperty.call(g,d)&&(o[d]=g[d])}}function v(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function b(o){l.setTimeout(()=>{throw o},0)}function w(){var o=te;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class qe{constructor(){this.h=this.g=null}add(u,d){const g=$t.get();g.set(u,d),this.h?this.h.next=g:this.g=g,this.h=g}}var $t=new j(()=>new Ue,o=>o.reset());class Ue{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let X,$=!1,te=new qe,jt=()=>{const o=l.Promise.resolve(void 0);X=()=>{o.then(on)}};var on=()=>{for(var o;o=w();){try{o.h.call(o.g)}catch(d){b(d)}var u=$t;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}$=!1};function We(){this.s=this.s,this.C=this.C}We.prototype.s=!1,We.prototype.ma=function(){this.s||(this.s=!0,this.N())},We.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function He(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}He.prototype.h=function(){this.defaultPrevented=!0};var Ca=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return o}();function Zn(o,u){if(He.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(ie){e:{try{H(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:er[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Zn.aa.h.call(this)}}P(Zn,He);var er={2:"touch",3:"pen",4:"mouse"};Zn.prototype.h=function(){Zn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var an="closure_listenable_"+(1e6*Math.random()|0),ps=0;function xi(o,u,d,g,S){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!g,this.ha=S,this.key=++ps,this.da=this.fa=!1}function qt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function gs(o){this.src=o,this.g={},this.h=0}gs.prototype.add=function(o,u,d,g,S){var V=o.toString();o=this.g[V],o||(o=this.g[V]=[],this.h++);var K=R(o,u,g,S);return-1<K?(u=o[K],d||(u.fa=!1)):(u=new xi(u,this.src,V,!!g,S),u.fa=d,o.push(u)),u};function E(o,u){var d=u.type;if(d in o.g){var g=o.g[d],S=Array.prototype.indexOf.call(g,u,void 0),V;(V=0<=S)&&Array.prototype.splice.call(g,S,1),V&&(qt(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function R(o,u,d,g){for(var S=0;S<o.length;++S){var V=o[S];if(!V.da&&V.listener==u&&V.capture==!!d&&V.ha==g)return S}return-1}var D="closure_lm_"+(1e6*Math.random()|0),F={};function L(o,u,d,g,S){if(Array.isArray(u)){for(var V=0;V<u.length;V++)L(o,u[V],d,g,S);return null}return d=se(d),o&&o[an]?o.K(u,d,h(g)?!!g.capture:!1,S):x(o,u,d,!1,g,S)}function x(o,u,d,g,S,V){if(!u)throw Error("Invalid event type");var K=h(S)?!!S.capture:!!S,Re=Y(o);if(Re||(o[D]=Re=new gs(o)),d=Re.add(u,d,g,K,V),d.proxy)return d;if(g=G(),d.proxy=g,g.src=o,g.listener=d,o.addEventListener)Ca||(S=K),S===void 0&&(S=!1),o.addEventListener(u.toString(),g,S);else if(o.attachEvent)o.attachEvent(M(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function G(){function o(d){return u.call(o.src,o.listener,d)}const u=ne;return o}function W(o,u,d,g,S){if(Array.isArray(u))for(var V=0;V<u.length;V++)W(o,u[V],d,g,S);else g=h(g)?!!g.capture:!!g,d=se(d),o&&o[an]?(o=o.i,u=String(u).toString(),u in o.g&&(V=o.g[u],d=R(V,d,g,S),-1<d&&(qt(V[d]),Array.prototype.splice.call(V,d,1),V.length==0&&(delete o.g[u],o.h--)))):o&&(o=Y(o))&&(u=o.g[u.toString()],o=-1,u&&(o=R(u,d,g,S)),(d=-1<o?u[o]:null)&&q(d))}function q(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[an])E(u.i,o);else{var d=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(d,g,o.capture):u.detachEvent?u.detachEvent(M(d),g):u.addListener&&u.removeListener&&u.removeListener(g),(d=Y(u))?(E(d,o),d.h==0&&(d.src=null,u[D]=null)):qt(o)}}}function M(o){return o in F?F[o]:F[o]="on"+o}function ne(o,u){if(o.da)o=!0;else{u=new Zn(u,this);var d=o.listener,g=o.ha||o.src;o.fa&&q(o),o=d.call(g,u)}return o}function Y(o){return o=o[D],o instanceof gs?o:null}var Z="__closure_events_fn_"+(1e9*Math.random()>>>0);function se(o){return typeof o=="function"?o:(o[Z]||(o[Z]=function(u){return o.handleEvent(u)}),o[Z])}function re(){We.call(this),this.i=new gs(this),this.M=this,this.F=null}P(re,We),re.prototype[an]=!0,re.prototype.removeEventListener=function(o,u,d,g){W(this,o,u,d,g)};function fe(o,u){var d,g=o.F;if(g)for(d=[];g;g=g.F)d.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new He(u,o);else if(u instanceof He)u.target=u.target||o;else{var S=u;u=new He(g,o),I(u,S)}if(S=!0,d)for(var V=d.length-1;0<=V;V--){var K=u.g=d[V];S=ve(K,g,!0,u)&&S}if(K=u.g=o,S=ve(K,g,!0,u)&&S,S=ve(K,g,!1,u)&&S,d)for(V=0;V<d.length;V++)K=u.g=d[V],S=ve(K,g,!1,u)&&S}re.prototype.N=function(){if(re.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],g=0;g<d.length;g++)qt(d[g]);delete o.g[u],o.h--}}this.F=null},re.prototype.K=function(o,u,d,g){return this.i.add(String(o),u,!1,d,g)},re.prototype.L=function(o,u,d,g){return this.i.add(String(o),u,!0,d,g)};function ve(o,u,d,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,V=0;V<u.length;++V){var K=u[V];if(K&&!K.da&&K.capture==d){var Re=K.listener,Qe=K.ha||K.src;K.fa&&E(o.i,K),S=Re.call(Qe,g)!==!1&&S}}return S&&!g.defaultPrevented}function Ne(o,u,d){if(typeof o=="function")d&&(o=_(o,d));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function Be(o){o.g=Ne(()=>{o.g=null,o.i&&(o.i=!1,Be(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Rt extends We{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Be(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function st(o){We.call(this),this.h=o,this.g={}}P(st,We);var Sn=[];function ms(o){de(o.g,function(u,d){this.g.hasOwnProperty(d)&&q(u)},o),o.g={}}st.prototype.N=function(){st.aa.N.call(this),ms(this)},st.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ge=l.JSON.stringify,St=l.JSON.parse,Mi=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function br(){}br.prototype.h=null;function Au(o){return o.h||(o.h=o.i())}function bu(){}var _s={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ka(){He.call(this,"d")}P(ka,He);function Va(){He.call(this,"c")}P(Va,He);var tr={},Ru=null;function Li(){return Ru=Ru||new re}tr.La="serverreachability";function Su(o){He.call(this,tr.La,o)}P(Su,He);function ys(o){const u=Li();fe(u,new Su(u))}tr.STAT_EVENT="statevent";function Pu(o,u){He.call(this,tr.STAT_EVENT,o),this.stat=u}P(Pu,He);function ft(o){const u=Li();fe(u,new Pu(u,o))}tr.Ma="timingevent";function Cu(o,u){He.call(this,tr.Ma,o),this.size=u}P(Cu,He);function vs(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function Es(){this.g=!0}Es.prototype.xa=function(){this.g=!1};function Nm(o,u,d,g,S,V){o.info(function(){if(o.g)if(V)for(var K="",Re=V.split("&"),Qe=0;Qe<Re.length;Qe++){var Ee=Re[Qe].split("=");if(1<Ee.length){var it=Ee[0];Ee=Ee[1];var ot=it.split("_");K=2<=ot.length&&ot[1]=="type"?K+(it+"="+Ee+"&"):K+(it+"=redacted&")}}else K=null;else K=V;return"XMLHTTP REQ ("+g+") [attempt "+S+"]: "+u+`
`+d+`
`+K})}function Om(o,u,d,g,S,V,K){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+S+"]: "+u+`
`+d+`
`+V+" "+K})}function Rr(o,u,d,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Mm(o,d)+(g?" "+g:"")})}function xm(o,u){o.info(function(){return"TIMEOUT: "+u})}Es.prototype.info=function(){};function Mm(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var g=d[o];if(!(2>g.length)){var S=g[1];if(Array.isArray(S)&&!(1>S.length)){var V=S[0];if(V!="noop"&&V!="stop"&&V!="close")for(var K=1;K<S.length;K++)S[K]=""}}}}return Ge(d)}catch{return u}}var Fi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ku={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Da;function Ui(){}P(Ui,br),Ui.prototype.g=function(){return new XMLHttpRequest},Ui.prototype.i=function(){return{}},Da=new Ui;function Pn(o,u,d,g){this.j=o,this.i=u,this.l=d,this.R=g||1,this.U=new st(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vu}function Vu(){this.i=null,this.g="",this.h=!1}var Du={},Na={};function Oa(o,u,d){o.L=1,o.v=qi(ln(u)),o.m=d,o.P=!0,Nu(o,null)}function Nu(o,u){o.F=Date.now(),Bi(o),o.A=ln(o.v);var d=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),zu(d.i,"t",g),o.C=0,d=o.j.J,o.h=new Vu,o.g=hh(o.j,d?u:null,!o.m),0<o.O&&(o.M=new Rt(_(o.Y,o,o.g),o.O)),u=o.U,d=o.g,g=o.ca;var S="readystatechange";Array.isArray(S)||(S&&(Sn[0]=S.toString()),S=Sn);for(var V=0;V<S.length;V++){var K=L(d,S[V],g||u.handleEvent,!1,u.h||u);if(!K)break;u.g[K.key]=K}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),ys(),Nm(o.i,o.u,o.A,o.l,o.R,o.m)}Pn.prototype.ca=function(o){o=o.target;const u=this.M;u&&cn(o)==3?u.j():this.Y(o)},Pn.prototype.Y=function(o){try{if(o==this.g)e:{const ot=cn(this.g);var u=this.g.Ba();const Cr=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||eh(this.g)))){this.J||ot!=4||u==7||(u==8||0>=Cr?ys(3):ys(2)),xa(this);var d=this.g.Z();this.X=d;t:if(Ou(this)){var g=eh(this.g);o="";var S=g.length,V=cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){nr(this),ws(this);var K="";break t}this.h.i=new l.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(V&&u==S-1)});g.length=0,this.h.g+=o,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=d==200,Om(this.i,this.u,this.A,this.l,this.R,ot,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Re,Qe=this.g;if((Re=Qe.g?Qe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(Re)){var Ee=Re;break t}}Ee=null}if(d=Ee)Rr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ma(this,d);else{this.o=!1,this.s=3,ft(12),nr(this),ws(this);break e}}if(this.P){d=!0;let Nt;for(;!this.J&&this.C<K.length;)if(Nt=Lm(this,K),Nt==Na){ot==4&&(this.s=4,ft(14),d=!1),Rr(this.i,this.l,null,"[Incomplete Response]");break}else if(Nt==Du){this.s=4,ft(15),Rr(this.i,this.l,K,"[Invalid Chunk]"),d=!1;break}else Rr(this.i,this.l,Nt,null),Ma(this,Nt);if(Ou(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||K.length!=0||this.h.h||(this.s=1,ft(16),d=!1),this.o=this.o&&d,!d)Rr(this.i,this.l,K,"[Invalid Chunked Response]"),nr(this),ws(this);else if(0<K.length&&!this.W){this.W=!0;var it=this.j;it.g==this&&it.ba&&!it.M&&(it.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),ja(it),it.M=!0,ft(11))}}else Rr(this.i,this.l,K,null),Ma(this,K);ot==4&&nr(this),this.o&&!this.J&&(ot==4?ah(this.j,this):(this.o=!1,Bi(this)))}else e_(this.g),d==400&&0<K.indexOf("Unknown SID")?(this.s=3,ft(12)):(this.s=0,ft(13)),nr(this),ws(this)}}}catch{}finally{}};function Ou(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Lm(o,u){var d=o.C,g=u.indexOf(`
`,d);return g==-1?Na:(d=Number(u.substring(d,g)),isNaN(d)?Du:(g+=1,g+d>u.length?Na:(u=u.slice(g,g+d),o.C=g+d,u)))}Pn.prototype.cancel=function(){this.J=!0,nr(this)};function Bi(o){o.S=Date.now()+o.I,xu(o,o.I)}function xu(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=vs(_(o.ba,o),u)}function xa(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Pn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(xm(this.i,this.A),this.L!=2&&(ys(),ft(17)),nr(this),this.s=2,ws(this)):xu(this,this.S-o)};function ws(o){o.j.G==0||o.J||ah(o.j,o)}function nr(o){xa(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,ms(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Ma(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||La(d.h,o))){if(!o.K&&La(d.h,o)&&d.G==3){try{var g=d.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var S=g;if(S[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Qi(d),zi(d);else break e;$a(d),ft(18)}}else d.za=S[1],0<d.za-d.T&&37500>S[2]&&d.F&&d.v==0&&!d.C&&(d.C=vs(_(d.Za,d),6e3));if(1>=Fu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else sr(d,11)}else if((o.K||d.g==o)&&Qi(d),!B(u))for(S=d.Da.g.parse(u),u=0;u<S.length;u++){let Ee=S[u];if(d.T=Ee[0],Ee=Ee[1],d.G==2)if(Ee[0]=="c"){d.K=Ee[1],d.ia=Ee[2];const it=Ee[3];it!=null&&(d.la=it,d.j.info("VER="+d.la));const ot=Ee[4];ot!=null&&(d.Aa=ot,d.j.info("SVER="+d.Aa));const Cr=Ee[5];Cr!=null&&typeof Cr=="number"&&0<Cr&&(g=1.5*Cr,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Nt=o.g;if(Nt){const Ji=Nt.g?Nt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ji){var V=g.h;V.g||Ji.indexOf("spdy")==-1&&Ji.indexOf("quic")==-1&&Ji.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Fa(V,V.h),V.h=null))}if(g.D){const qa=Nt.g?Nt.g.getResponseHeader("X-HTTP-Session-Id"):null;qa&&(g.ya=qa,De(g.I,g.D,qa))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var K=o;if(g.qa=uh(g,g.J?g.ia:null,g.W),K.K){Uu(g.h,K);var Re=K,Qe=g.L;Qe&&(Re.I=Qe),Re.B&&(xa(Re),Bi(Re)),g.g=K}else ih(g);0<d.i.length&&Gi(d)}else Ee[0]!="stop"&&Ee[0]!="close"||sr(d,7);else d.G==3&&(Ee[0]=="stop"||Ee[0]=="close"?Ee[0]=="stop"?sr(d,7):Ba(d):Ee[0]!="noop"&&d.l&&d.l.ta(Ee),d.v=0)}}ys(4)}catch{}}var Fm=class{constructor(o,u){this.g=o,this.map=u}};function Mu(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Lu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Fu(o){return o.h?1:o.g?o.g.size:0}function La(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Fa(o,u){o.g?o.g.add(u):o.h=u}function Uu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Mu.prototype.cancel=function(){if(this.i=Bu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Bu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return C(o.i)}function Um(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],d=o.length,g=0;g<d;g++)u.push(o[g]);return u}u=[],d=0;for(g in o)u[d++]=o[g];return u}function Bm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const g in o)u[d++]=g;return u}}}function $u(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=Bm(o),g=Um(o),S=g.length,V=0;V<S;V++)u.call(void 0,g[V],d&&d[V],o)}var ju=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $m(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var g=o[d].indexOf("="),S=null;if(0<=g){var V=o[d].substring(0,g);S=o[d].substring(g+1)}else V=o[d];u(V,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function rr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof rr){this.h=o.h,$i(this,o.j),this.o=o.o,this.g=o.g,ji(this,o.s),this.l=o.l;var u=o.i,d=new As;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),qu(this,d),this.m=o.m}else o&&(u=String(o).match(ju))?(this.h=!1,$i(this,u[1]||"",!0),this.o=Ts(u[2]||""),this.g=Ts(u[3]||"",!0),ji(this,u[4]),this.l=Ts(u[5]||"",!0),qu(this,u[6]||"",!0),this.m=Ts(u[7]||"")):(this.h=!1,this.i=new As(null,this.h))}rr.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Is(u,Wu,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Is(u,Wu,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Is(d,d.charAt(0)=="/"?Wm:qm,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Is(d,Km)),o.join("")};function ln(o){return new rr(o)}function $i(o,u,d){o.j=d?Ts(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function ji(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function qu(o,u,d){u instanceof As?(o.i=u,zm(o.i,o.h)):(d||(u=Is(u,Hm)),o.i=new As(u,o.h))}function De(o,u,d){o.i.set(u,d)}function qi(o){return De(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Ts(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Is(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,jm),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function jm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Wu=/[#\/\?@]/g,qm=/[#\?:]/g,Wm=/[#\?]/g,Hm=/[#\?@]/g,Km=/#/g;function As(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Cn(o){o.g||(o.g=new Map,o.h=0,o.i&&$m(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=As.prototype,n.add=function(o,u){Cn(this),this.i=null,o=Sr(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function Hu(o,u){Cn(o),u=Sr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Ku(o,u){return Cn(o),u=Sr(o,u),o.g.has(u)}n.forEach=function(o,u){Cn(this),this.g.forEach(function(d,g){d.forEach(function(S){o.call(u,S,g,this)},this)},this)},n.na=function(){Cn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let g=0;g<u.length;g++){const S=o[g];for(let V=0;V<S.length;V++)d.push(u[g])}return d},n.V=function(o){Cn(this);let u=[];if(typeof o=="string")Ku(this,o)&&(u=u.concat(this.g.get(Sr(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},n.set=function(o,u){return Cn(this),this.i=null,o=Sr(this,o),Ku(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function zu(o,u,d){Hu(o,u),0<d.length&&(o.i=null,o.g.set(Sr(o,u),C(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var g=u[d];const V=encodeURIComponent(String(g)),K=this.V(g);for(g=0;g<K.length;g++){var S=V;K[g]!==""&&(S+="="+encodeURIComponent(String(K[g]))),o.push(S)}}return this.i=o.join("&")};function Sr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function zm(o,u){u&&!o.j&&(Cn(o),o.i=null,o.g.forEach(function(d,g){var S=g.toLowerCase();g!=S&&(Hu(this,g),zu(this,S,d))},o)),o.j=u}function Gm(o,u){const d=new Es;if(l.Image){const g=new Image;g.onload=A(kn,d,"TestLoadImage: loaded",!0,u,g),g.onerror=A(kn,d,"TestLoadImage: error",!1,u,g),g.onabort=A(kn,d,"TestLoadImage: abort",!1,u,g),g.ontimeout=A(kn,d,"TestLoadImage: timeout",!1,u,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function Qm(o,u){const d=new Es,g=new AbortController,S=setTimeout(()=>{g.abort(),kn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(V=>{clearTimeout(S),V.ok?kn(d,"TestPingServer: ok",!0,u):kn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),kn(d,"TestPingServer: error",!1,u)})}function kn(o,u,d,g,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),g(d)}catch{}}function Ym(){this.g=new Mi}function Jm(o,u,d){const g=d||"";try{$u(o,function(S,V){let K=S;h(S)&&(K=Ge(S)),u.push(g+V+"="+encodeURIComponent(K))})}catch(S){throw u.push(g+"type="+encodeURIComponent("_badmap")),S}}function Wi(o){this.l=o.Ub||null,this.j=o.eb||!1}P(Wi,br),Wi.prototype.g=function(){return new Hi(this.l,this.j)},Wi.prototype.i=function(o){return function(){return o}}({});function Hi(o,u){re.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Hi,re),n=Hi.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Rs(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bs(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Rs(this)),this.g&&(this.readyState=3,Rs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Gu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Gu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?bs(this):Rs(this),this.readyState==3&&Gu(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,bs(this))},n.Qa=function(o){this.g&&(this.response=o,bs(this))},n.ga=function(){this.g&&bs(this)};function bs(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Rs(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function Rs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Hi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Qu(o){let u="";return de(o,function(d,g){u+=g,u+=":",u+=d,u+=`\r
`}),u}function Ua(o,u,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Qu(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):De(o,u,d))}function Me(o){re.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Me,re);var Xm=/^https?$/i,Zm=["POST","PUT"];n=Me.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Da.g(),this.v=this.o?Au(this.o):Au(Da),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(V){Yu(this,V);return}if(o=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var S in g)d.set(S,g[S]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())d.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),S=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Zm,u,void 0))||g||S||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,K]of d)this.g.setRequestHeader(V,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Zu(this),this.u=!0,this.g.send(o),this.u=!1}catch(V){Yu(this,V)}};function Yu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Ju(o),Ki(o)}function Ju(o){o.A||(o.A=!0,fe(o,"complete"),fe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,fe(this,"complete"),fe(this,"abort"),Ki(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ki(this,!0)),Me.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Xu(this):this.bb())},n.bb=function(){Xu(this)};function Xu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||cn(o)!=4||o.Z()!=2)){if(o.u&&cn(o)==4)Ne(o.Ea,0,o);else if(fe(o,"readystatechange"),cn(o)==4){o.h=!1;try{const K=o.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var g;if(g=K===0){var S=String(o.D).match(ju)[1]||null;!S&&l.self&&l.self.location&&(S=l.self.location.protocol.slice(0,-1)),g=!Xm.test(S?S.toLowerCase():"")}d=g}if(d)fe(o,"complete"),fe(o,"success");else{o.m=6;try{var V=2<cn(o)?o.g.statusText:""}catch{V=""}o.l=V+" ["+o.Z()+"]",Ju(o)}}finally{Ki(o)}}}}function Ki(o,u){if(o.g){Zu(o);const d=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||fe(o,"ready");try{d.onreadystatechange=g}catch{}}}function Zu(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function cn(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<cn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),St(u)}};function eh(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function e_(o){const u={};o=(o.g&&2<=cn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(B(o[g]))continue;var d=v(o[g]);const S=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=u[S]||[];u[S]=V,V.push(d)}T(u,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ss(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function th(o){this.Aa=0,this.i=[],this.j=new Es,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ss("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ss("baseRetryDelayMs",5e3,o),this.cb=Ss("retryDelaySeedMs",1e4,o),this.Wa=Ss("forwardChannelMaxRetries",2,o),this.wa=Ss("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Mu(o&&o.concurrentRequestLimit),this.Da=new Ym,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=th.prototype,n.la=8,n.G=1,n.connect=function(o,u,d,g){ft(0),this.W=o,this.H=u||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=uh(this,null,this.W),Gi(this)};function Ba(o){if(nh(o),o.G==3){var u=o.U++,d=ln(o.I);if(De(d,"SID",o.K),De(d,"RID",u),De(d,"TYPE","terminate"),Ps(o,d),u=new Pn(o,o.j,u),u.L=2,u.v=qi(ln(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=hh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Bi(u)}ch(o)}function zi(o){o.g&&(ja(o),o.g.cancel(),o.g=null)}function nh(o){zi(o),o.u&&(l.clearTimeout(o.u),o.u=null),Qi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Gi(o){if(!Lu(o.h)&&!o.s){o.s=!0;var u=o.Ga;X||jt(),$||(X(),$=!0),te.add(u,o),o.B=0}}function t_(o,u){return Fu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=vs(_(o.Ga,o,u),lh(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const S=new Pn(this,this.j,o);let V=this.o;if(this.S&&(V?(V=m(V),I(V,this.S)):V=this.S),this.m!==null||this.O||(S.H=V,V=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=sh(this,S,u),d=ln(this.I),De(d,"RID",o),De(d,"CVER",22),this.D&&De(d,"X-HTTP-Session-Id",this.D),Ps(this,d),V&&(this.O?u="headers="+encodeURIComponent(String(Qu(V)))+"&"+u:this.m&&Ua(d,this.m,V)),Fa(this.h,S),this.Ua&&De(d,"TYPE","init"),this.P?(De(d,"$req",u),De(d,"SID","null"),S.T=!0,Oa(S,d,null)):Oa(S,d,u),this.G=2}}else this.G==3&&(o?rh(this,o):this.i.length==0||Lu(this.h)||rh(this))};function rh(o,u){var d;u?d=u.l:d=o.U++;const g=ln(o.I);De(g,"SID",o.K),De(g,"RID",d),De(g,"AID",o.T),Ps(o,g),o.m&&o.o&&Ua(g,o.m,o.o),d=new Pn(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=sh(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Fa(o.h,d),Oa(d,g,u)}function Ps(o,u){o.H&&de(o.H,function(d,g){De(u,g,d)}),o.l&&$u({},function(d,g){De(u,g,d)})}function sh(o,u,d){d=Math.min(o.i.length,d);var g=o.l?_(o.l.Na,o.l,o):null;e:{var S=o.i;let V=-1;for(;;){const K=["count="+d];V==-1?0<d?(V=S[0].g,K.push("ofs="+V)):V=0:K.push("ofs="+V);let Re=!0;for(let Qe=0;Qe<d;Qe++){let Ee=S[Qe].g;const it=S[Qe].map;if(Ee-=V,0>Ee)V=Math.max(0,S[Qe].g-100),Re=!1;else try{Jm(it,K,"req"+Ee+"_")}catch{g&&g(it)}}if(Re){g=K.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,g}function ih(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;X||jt(),$||(X(),$=!0),te.add(u,o),o.v=0}}function $a(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=vs(_(o.Fa,o),lh(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,oh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=vs(_(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ft(10),zi(this),oh(this))};function ja(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function oh(o){o.g=new Pn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=ln(o.qa);De(u,"RID","rpc"),De(u,"SID",o.K),De(u,"AID",o.T),De(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&De(u,"TO",o.ja),De(u,"TYPE","xmlhttp"),Ps(o,u),o.m&&o.o&&Ua(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=qi(ln(u)),d.m=null,d.P=!0,Nu(d,o)}n.Za=function(){this.C!=null&&(this.C=null,zi(this),$a(this),ft(19))};function Qi(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function ah(o,u){var d=null;if(o.g==u){Qi(o),ja(o),o.g=null;var g=2}else if(La(o.h,u))d=u.D,Uu(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var S=o.B;g=Li(),fe(g,new Cu(g,d)),Gi(o)}else ih(o);else if(S=u.s,S==3||S==0&&0<u.X||!(g==1&&t_(o,u)||g==2&&$a(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),S){case 1:sr(o,5);break;case 4:sr(o,10);break;case 3:sr(o,6);break;default:sr(o,2)}}}function lh(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function sr(o,u){if(o.j.info("Error code "+u),u==2){var d=_(o.fb,o),g=o.Xa;const S=!g;g=new rr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||$i(g,"https"),qi(g),S?Gm(g.toString(),d):Qm(g.toString(),d)}else ft(2);o.G=0,o.l&&o.l.sa(u),ch(o),nh(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function ch(o){if(o.G=0,o.ka=[],o.l){const u=Bu(o.h);(u.length!=0||o.i.length!=0)&&(k(o.ka,u),k(o.ka,o.i),o.h.i.length=0,C(o.i),o.i.length=0),o.l.ra()}}function uh(o,u,d){var g=d instanceof rr?ln(d):new rr(d);if(g.g!="")u&&(g.g=u+"."+g.g),ji(g,g.s);else{var S=l.location;g=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var V=new rr(null);g&&$i(V,g),u&&(V.g=u),S&&ji(V,S),d&&(V.l=d),g=V}return d=o.D,u=o.ya,d&&u&&De(g,d,u),De(g,"VER",o.la),Ps(o,g),g}function hh(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Me(new Wi({eb:d})):new Me(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function dh(){}n=dh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Yi(){}Yi.prototype.g=function(o,u){return new wt(o,u)};function wt(o,u){re.call(this),this.g=new th(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!B(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!B(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Pr(this)}P(wt,re),wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){Ba(this.g)},wt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Ge(o),o=d);u.i.push(new Fm(u.Ya++,o)),u.G==3&&Gi(u)},wt.prototype.N=function(){this.g.l=null,delete this.j,Ba(this.g),delete this.g,wt.aa.N.call(this)};function fh(o){ka.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}P(fh,ka);function ph(){Va.call(this),this.status=1}P(ph,Va);function Pr(o){this.g=o}P(Pr,dh),Pr.prototype.ua=function(){fe(this.g,"a")},Pr.prototype.ta=function(o){fe(this.g,new fh(o))},Pr.prototype.sa=function(o){fe(this.g,new ph)},Pr.prototype.ra=function(){fe(this.g,"b")},Yi.prototype.createWebChannel=Yi.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,Fp=function(){return new Yi},Lp=function(){return Li()},Mp=tr,$l={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Fi.NO_ERROR=0,Fi.TIMEOUT=8,Fi.HTTP_ERROR=6,ho=Fi,ku.COMPLETE="complete",xp=ku,bu.EventType=_s,_s.OPEN="a",_s.CLOSE="b",_s.ERROR="c",_s.MESSAGE="d",re.prototype.listen=re.prototype.K,Us=bu,Me.prototype.listenOnce=Me.prototype.L,Me.prototype.getLastError=Me.prototype.Ka,Me.prototype.getLastErrorCode=Me.prototype.Ba,Me.prototype.getStatus=Me.prototype.Z,Me.prototype.getResponseJson=Me.prototype.Oa,Me.prototype.getResponseText=Me.prototype.oa,Me.prototype.send=Me.prototype.ea,Me.prototype.setWithCredentials=Me.prototype.Ha,Op=Me}).apply(typeof no<"u"?no:typeof self<"u"?self:typeof window<"u"?window:{});const od="@firebase/firestore";/**
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
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
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
 */let cs="10.14.0";/**
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
 */const _r=new Ac("@firebase/firestore");function Ds(){return _r.logLevel}function J(n,...e){if(_r.logLevel<=_e.DEBUG){const t=e.map(Sc);_r.debug(`Firestore (${cs}): ${n}`,...t)}}function Tn(n,...e){if(_r.logLevel<=_e.ERROR){const t=e.map(Sc);_r.error(`Firestore (${cs}): ${n}`,...t)}}function Zr(n,...e){if(_r.logLevel<=_e.WARN){const t=e.map(Sc);_r.warn(`Firestore (${cs}): ${n}`,...t)}}function Sc(n){if(typeof n=="string")return n;try{/**
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
 */function le(n="Unexpected state"){const e=`FIRESTORE (${cs}) INTERNAL ASSERTION FAILED: `+n;throw Tn(e),new Error(e)}function Ae(n,e){n||le()}function he(n,e){return n}/**
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
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Rn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class vn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Up{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class iw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(lt.UNAUTHENTICATED))}shutdown(){}}class ow{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class aw{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ae(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new vn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new vn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new vn)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ae(typeof r.accessToken=="string"),new Up(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ae(e===null||typeof e=="string"),new lt(e)}}class lw{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class cw{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new lw(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class uw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hw{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Ae(this.o===void 0);const r=i=>{i.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,J("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ae(typeof t.token=="string"),this.R=t.token,new uw(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function dw(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Bp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=dw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function we(n,e){return n<e?-1:n>e?1:0}function es(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */class Ke{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new z(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new z(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new z(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Ke(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ai{constructor(e,t,r){t===void 0?t=0:t>e.length&&le(),r===void 0?r=e.length-t:r>e.length-t&&le(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ai.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ai?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ve extends ai{construct(e,t,r){return new Ve(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Ve(t)}static emptyPath(){return new Ve([])}}const fw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends ai{construct(e,t,r){return new et(e,t,r)}static isValidIdentifier(e){return fw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new et(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new z(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new z(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new z(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new z(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new et(t)}static emptyPath(){return new et([])}}/**
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
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(Ve.fromString(e))}static fromName(e){return new ee(Ve.fromString(e).popFirst(5))}static empty(){return new ee(Ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ve.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new Ve(e.slice()))}}function pw(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=ue.fromTimestamp(r===1e9?new Ke(t+1,0):new Ke(t,r));return new Kn(s,ee.empty(),e)}function gw(n){return new Kn(n.readTime,n.key,-1)}class Kn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Kn(ue.min(),ee.empty(),-1)}static max(){return new Kn(ue.max(),ee.empty(),-1)}}function mw(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ee.comparator(n.documentKey,e.documentKey),t!==0?t:we(n.largestBatchId,e.largestBatchId))}/**
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
 */const _w="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ai(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==_w)throw n;J("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&le(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof U?t:U.resolve(t)}catch(t){return U.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):U.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):U.reject(t)}static resolve(e){return new U((t,r)=>{t(e)})}static reject(e){return new U((t,r)=>{r(e)})}static waitFor(e){return new U((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},c=>r(c))}),a=!0,i===s&&t()})}static or(e){let t=U.resolve(!1);for(const r of e)t=t.next(s=>s?U.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new U((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;t(e[h]).next(f=>{a[h]=f,++l,l===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new U((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function vw(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function bi(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Pc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Pc.oe=-1;function sa(n){return n==null}function Do(n){return n===0&&1/n==-1/0}function Ew(n){return typeof n=="number"&&Number.isInteger(n)&&!Do(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function ad(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function wr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function $p(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class xe{constructor(e,t){this.comparator=e,this.root=t||Je.EMPTY}insert(e,t){return new xe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Je.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Je.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ro(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ro(this.root,e,this.comparator,!1)}getReverseIterator(){return new ro(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ro(this.root,e,this.comparator,!0)}}class ro{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Je{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Je.RED,this.left=s??Je.EMPTY,this.right=i??Je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Je(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Je.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw le();const e=this.left.check();if(e!==this.right.check())throw le();return e+(this.isRed()?0:1)}}Je.EMPTY=null,Je.RED=!0,Je.BLACK=!1;Je.EMPTY=new class{constructor(){this.size=0}get key(){throw le()}get value(){throw le()}get color(){throw le()}get left(){throw le()}get right(){throw le()}copy(e,t,r,s,i){return this}insert(e,t,r){return new Je(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class tt{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ld(this.data.getIterator())}getIteratorFrom(e){return new ld(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new tt(this.comparator);return t.data=e,t}}class ld{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class It{constructor(e){this.fields=e,e.sort(et.comparator)}static empty(){return new It([])}unionWith(e){let t=new tt(et.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new It(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return es(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class jp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new jp("Invalid base64 string: "+i):i}}(e);return new rt(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new rt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const ww=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zn(n){if(Ae(!!n),typeof n=="string"){let e=0;const t=ww.exec(n);if(Ae(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(n.seconds),nanos:Le(n.nanos)}}function Le(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function yr(n){return typeof n=="string"?rt.fromBase64String(n):rt.fromUint8Array(n)}/**
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
 */function ia(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Cc(n){const e=n.mapValue.fields.__previous_value__;return ia(e)?Cc(e):e}function li(n){const e=zn(n.mapValue.fields.__local_write_time__.timestampValue);return new Ke(e.seconds,e.nanos)}/**
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
 */class Tw{constructor(e,t,r,s,i,a,l,c,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class ci{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ci("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ci&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const so={mapValue:{}};function vr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ia(n)?4:Aw(n)?9007199254740991:Iw(n)?10:11:le()}function rn(n,e){if(n===e)return!0;const t=vr(n);if(t!==vr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return li(n).isEqual(li(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=zn(s.timestampValue),l=zn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return yr(s.bytesValue).isEqual(yr(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Le(s.geoPointValue.latitude)===Le(i.geoPointValue.latitude)&&Le(s.geoPointValue.longitude)===Le(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Le(s.integerValue)===Le(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Le(s.doubleValue),l=Le(i.doubleValue);return a===l?Do(a)===Do(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return es(n.arrayValue.values||[],e.arrayValue.values||[],rn);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(ad(a)!==ad(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!rn(a[c],l[c])))return!1;return!0}(n,e);default:return le()}}function ui(n,e){return(n.values||[]).find(t=>rn(t,e))!==void 0}function ts(n,e){if(n===e)return 0;const t=vr(n),r=vr(e);if(t!==r)return we(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return we(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=Le(i.integerValue||i.doubleValue),c=Le(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return cd(n.timestampValue,e.timestampValue);case 4:return cd(li(n),li(e));case 5:return we(n.stringValue,e.stringValue);case 6:return function(i,a){const l=yr(i),c=yr(a);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=we(l[h],c[h]);if(f!==0)return f}return we(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=we(Le(i.latitude),Le(a.latitude));return l!==0?l:we(Le(i.longitude),Le(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return ud(n.arrayValue,e.arrayValue);case 10:return function(i,a){var l,c,h,f;const p=i.fields||{},_=a.fields||{},A=(l=p.value)===null||l===void 0?void 0:l.arrayValue,P=(c=_.value)===null||c===void 0?void 0:c.arrayValue,C=we(((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0,((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0);return C!==0?C:ud(A,P)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===so.mapValue&&a===so.mapValue)return 0;if(i===so.mapValue)return 1;if(a===so.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const _=we(c[p],f[p]);if(_!==0)return _;const A=ts(l[c[p]],h[f[p]]);if(A!==0)return A}return we(c.length,f.length)}(n.mapValue,e.mapValue);default:throw le()}}function cd(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return we(n,e);const t=zn(n),r=zn(e),s=we(t.seconds,r.seconds);return s!==0?s:we(t.nanos,r.nanos)}function ud(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=ts(t[s],r[s]);if(i)return i}return we(t.length,r.length)}function ns(n){return jl(n)}function jl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=zn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return yr(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ee.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=jl(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${jl(t.fields[a])}`;return s+"}"}(n.mapValue):le()}function No(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ql(n){return!!n&&"integerValue"in n}function kc(n){return!!n&&"arrayValue"in n}function hd(n){return!!n&&"nullValue"in n}function dd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function fo(n){return!!n&&"mapValue"in n}function Iw(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Js(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return wr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Js(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Js(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Aw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Et{constructor(e){this.value=e}static empty(){return new Et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!fo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Js(t)}setAll(e){let t=et.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=Js(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());fo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];fo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){wr(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Et(Js(this.value))}}function qp(n){const e=[];return wr(n.fields,(t,r)=>{const s=new et([t]);if(fo(r)){const i=qp(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new It(e)}/**
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
 */class ut{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new ut(e,0,ue.min(),ue.min(),ue.min(),Et.empty(),0)}static newFoundDocument(e,t,r,s){return new ut(e,1,t,ue.min(),r,s,0)}static newNoDocument(e,t){return new ut(e,2,t,ue.min(),ue.min(),Et.empty(),0)}static newUnknownDocument(e,t){return new ut(e,3,t,ue.min(),ue.min(),Et.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class rs{constructor(e,t){this.position=e,this.inclusive=t}}function fd(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=ee.comparator(ee.fromName(a.referenceValue),t.key):r=ts(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function pd(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!rn(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class hi{constructor(e,t="asc"){this.field=e,this.dir=t}}function bw(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Wp{}class je extends Wp{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Sw(e,t,r):t==="array-contains"?new kw(e,r):t==="in"?new Vw(e,r):t==="not-in"?new Dw(e,r):t==="array-contains-any"?new Nw(e,r):new je(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Pw(e,r):new Cw(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ts(t,this.value)):t!==null&&vr(this.value)===vr(t)&&this.matchesComparison(ts(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ut extends Wp{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Ut(e,t)}matches(e){return Hp(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Hp(n){return n.op==="and"}function Kp(n){return Rw(n)&&Hp(n)}function Rw(n){for(const e of n.filters)if(e instanceof Ut)return!1;return!0}function Wl(n){if(n instanceof je)return n.field.canonicalString()+n.op.toString()+ns(n.value);if(Kp(n))return n.filters.map(e=>Wl(e)).join(",");{const e=n.filters.map(t=>Wl(t)).join(",");return`${n.op}(${e})`}}function zp(n,e){return n instanceof je?function(r,s){return s instanceof je&&r.op===s.op&&r.field.isEqual(s.field)&&rn(r.value,s.value)}(n,e):n instanceof Ut?function(r,s){return s instanceof Ut&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&zp(a,s.filters[l]),!0):!1}(n,e):void le()}function Gp(n){return n instanceof je?function(t){return`${t.field.canonicalString()} ${t.op} ${ns(t.value)}`}(n):n instanceof Ut?function(t){return t.op.toString()+" {"+t.getFilters().map(Gp).join(" ,")+"}"}(n):"Filter"}class Sw extends je{constructor(e,t,r){super(e,t,r),this.key=ee.fromName(r.referenceValue)}matches(e){const t=ee.comparator(e.key,this.key);return this.matchesComparison(t)}}class Pw extends je{constructor(e,t){super(e,"in",t),this.keys=Qp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Cw extends je{constructor(e,t){super(e,"not-in",t),this.keys=Qp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Qp(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>ee.fromName(r.referenceValue))}class kw extends je{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return kc(t)&&ui(t.arrayValue,this.value)}}class Vw extends je{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ui(this.value.arrayValue,t)}}class Dw extends je{constructor(e,t){super(e,"not-in",t)}matches(e){if(ui(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ui(this.value.arrayValue,t)}}class Nw extends je{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!kc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ui(this.value.arrayValue,r))}}/**
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
 */class Ow{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.ue=null}}function gd(n,e=null,t=[],r=[],s=null,i=null,a=null){return new Ow(n,e,t,r,s,i,a)}function Vc(n){const e=he(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Wl(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),sa(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>ns(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>ns(r)).join(",")),e.ue=t}return e.ue}function Dc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!bw(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!zp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!pd(n.startAt,e.startAt)&&pd(n.endAt,e.endAt)}function Hl(n){return ee.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Tr{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function xw(n,e,t,r,s,i,a,l){return new Tr(n,e,t,r,s,i,a,l)}function oa(n){return new Tr(n)}function md(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Nc(n){return n.collectionGroup!==null}function Hr(n){const e=he(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new tt(et.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new hi(i,r))}),t.has(et.keyField().canonicalString())||e.ce.push(new hi(et.keyField(),r))}return e.ce}function Yt(n){const e=he(n);return e.le||(e.le=Mw(e,Hr(n))),e.le}function Mw(n,e){if(n.limitType==="F")return gd(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new hi(s.field,i)});const t=n.endAt?new rs(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new rs(n.startAt.position,n.startAt.inclusive):null;return gd(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Kl(n,e){const t=n.filters.concat([e]);return new Tr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Oo(n,e,t){return new Tr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function aa(n,e){return Dc(Yt(n),Yt(e))&&n.limitType===e.limitType}function Yp(n){return`${Vc(Yt(n))}|lt:${n.limitType}`}function Or(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Gp(s)).join(", ")}]`),sa(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>ns(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>ns(s)).join(",")),`Target(${r})`}(Yt(n))}; limitType=${n.limitType})`}function la(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ee.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Hr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=fd(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,Hr(r),s)||r.endAt&&!function(a,l,c){const h=fd(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,Hr(r),s))}(n,e)}function Lw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Jp(n){return(e,t)=>{let r=!1;for(const s of Hr(n)){const i=Fw(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Fw(n,e,t){const r=n.field.isKeyField()?ee.comparator(e.key,t.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?ts(c,h):le()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return le()}}/**
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
 */class us{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){wr(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return $p(this.inner)}size(){return this.innerSize}}/**
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
 */const Uw=new xe(ee.comparator);function In(){return Uw}const Xp=new xe(ee.comparator);function Bs(...n){let e=Xp;for(const t of n)e=e.insert(t.key,t);return e}function Zp(n){let e=Xp;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function dr(){return Xs()}function eg(){return Xs()}function Xs(){return new us(n=>n.toString(),(n,e)=>n.isEqual(e))}const Bw=new xe(ee.comparator),$w=new tt(ee.comparator);function me(...n){let e=$w;for(const t of n)e=e.add(t);return e}const jw=new tt(we);function qw(){return jw}/**
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
 */function Oc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Do(e)?"-0":e}}function tg(n){return{integerValue:""+n}}function Ww(n,e){return Ew(e)?tg(e):Oc(n,e)}/**
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
 */class ca{constructor(){this._=void 0}}function Hw(n,e,t){return n instanceof di?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ia(i)&&(i=Cc(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):n instanceof fi?rg(n,e):n instanceof pi?sg(n,e):function(s,i){const a=ng(s,i),l=_d(a)+_d(s.Pe);return ql(a)&&ql(s.Pe)?tg(l):Oc(s.serializer,l)}(n,e)}function Kw(n,e,t){return n instanceof fi?rg(n,e):n instanceof pi?sg(n,e):t}function ng(n,e){return n instanceof xo?function(r){return ql(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class di extends ca{}class fi extends ca{constructor(e){super(),this.elements=e}}function rg(n,e){const t=ig(e);for(const r of n.elements)t.some(s=>rn(s,r))||t.push(r);return{arrayValue:{values:t}}}class pi extends ca{constructor(e){super(),this.elements=e}}function sg(n,e){let t=ig(e);for(const r of n.elements)t=t.filter(s=>!rn(s,r));return{arrayValue:{values:t}}}class xo extends ca{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function _d(n){return Le(n.integerValue||n.doubleValue)}function ig(n){return kc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class zw{constructor(e,t){this.field=e,this.transform=t}}function Gw(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof fi&&s instanceof fi||r instanceof pi&&s instanceof pi?es(r.elements,s.elements,rn):r instanceof xo&&s instanceof xo?rn(r.Pe,s.Pe):r instanceof di&&s instanceof di}(n.transform,e.transform)}class Qw{constructor(e,t){this.version=e,this.transformResults=t}}class bt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new bt}static exists(e){return new bt(void 0,e)}static updateTime(e){return new bt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function po(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ua{}function og(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ha(n.key,bt.none()):new Ri(n.key,n.data,bt.none());{const t=n.data,r=Et.empty();let s=new tt(et.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Jn(n.key,r,new It(s.toArray()),bt.none())}}function Yw(n,e,t){n instanceof Ri?function(s,i,a){const l=s.value.clone(),c=vd(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Jn?function(s,i,a){if(!po(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=vd(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(ag(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Zs(n,e,t,r){return n instanceof Ri?function(i,a,l,c){if(!po(i.precondition,a))return l;const h=i.value.clone(),f=Ed(i.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof Jn?function(i,a,l,c){if(!po(i.precondition,a))return l;const h=Ed(i.fieldTransforms,c,a),f=a.data;return f.setAll(ag(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,a,l){return po(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function Jw(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=ng(r.transform,s||null);i!=null&&(t===null&&(t=Et.empty()),t.set(r.field,i))}return t||null}function yd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&es(r,s,(i,a)=>Gw(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ri extends ua{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Jn extends ua{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ag(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function vd(n,e,t){const r=new Map;Ae(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,Kw(a,l,t[s]))}return r}function Ed(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,Hw(i,a,e))}return r}class ha extends ua{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Xw extends ua{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Zw{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Yw(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Zs(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Zs(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=eg();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const c=og(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(ue.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),me())}isEqual(e){return this.batchId===e.batchId&&es(this.mutations,e.mutations,(t,r)=>yd(t,r))&&es(this.baseMutations,e.baseMutations,(t,r)=>yd(t,r))}}class xc{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Ae(e.mutations.length===r.length);let s=function(){return Bw}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new xc(e,t,r,s)}}/**
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
 */class eT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class tT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var $e,ye;function nT(n){switch(n){default:return le();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function lg(n){if(n===void 0)return Tn("GRPC error has no .code"),N.UNKNOWN;switch(n){case $e.OK:return N.OK;case $e.CANCELLED:return N.CANCELLED;case $e.UNKNOWN:return N.UNKNOWN;case $e.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case $e.INTERNAL:return N.INTERNAL;case $e.UNAVAILABLE:return N.UNAVAILABLE;case $e.UNAUTHENTICATED:return N.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case $e.NOT_FOUND:return N.NOT_FOUND;case $e.ALREADY_EXISTS:return N.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return N.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case $e.ABORTED:return N.ABORTED;case $e.OUT_OF_RANGE:return N.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return N.UNIMPLEMENTED;case $e.DATA_LOSS:return N.DATA_LOSS;default:return le()}}(ye=$e||($e={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function rT(){return new TextEncoder}/**
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
 */const sT=new gr([4294967295,4294967295],0);function wd(n){const e=rT().encode(n),t=new Np;return t.update(e),new Uint8Array(t.digest())}function Td(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new gr([t,r],0),new gr([s,i],0)]}class Mc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new $s(`Invalid padding: ${t}`);if(r<0)throw new $s(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new $s(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new $s(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=gr.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(gr.fromNumber(r)));return s.compare(sT)===1&&(s=new gr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=wd(e),[r,s]=Td(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Mc(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=wd(e),[r,s]=Td(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class $s extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class da{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Si.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new da(ue.min(),s,new xe(we),In(),me())}}class Si{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Si(r,t,me(),me(),me())}}/**
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
 */class go{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class cg{constructor(e,t){this.targetId=e,this.me=t}}class ug{constructor(e,t,r=rt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Id{constructor(){this.fe=0,this.ge=bd(),this.pe=rt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=me(),t=me(),r=me();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:le()}}),new Si(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=bd()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ae(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class iT{constructor(e){this.Le=e,this.Be=new Map,this.ke=In(),this.qe=Ad(),this.Qe=new xe(we)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:le()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(Hl(i))if(r===0){const a=new ee(i.path);this.Ue(t,a,ut.newNoDocument(a,ue.min()))}else Ae(r===1);else{const a=this.Ye(t);if(a!==r){const l=this.Ze(e),c=l?this.Xe(l,e,a):1;if(c!==0){this.je(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=yr(r).toUint8Array()}catch(c){if(c instanceof jp)return Zr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Mc(a,s,i)}catch(c){return Zr(c instanceof $s?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,a)=>{const l=this.Je(a);if(l){if(i.current&&Hl(l.target)){const c=new ee(l.target.path);this.ke.get(c)!==null||this.it(a,c)||this.Ue(a,c,ut.newNoDocument(c,e))}i.be&&(t.set(a,i.ve()),i.Ce())}});let r=me();this.qe.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new da(e,t,this.Qe,this.ke,r);return this.ke=In(),this.qe=Ad(),this.Qe=new xe(we),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Id,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new tt(we),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||J("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Id),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Ad(){return new xe(ee.comparator)}function bd(){return new xe(ee.comparator)}const oT={asc:"ASCENDING",desc:"DESCENDING"},aT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},lT={and:"AND",or:"OR"};class cT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function zl(n,e){return n.useProto3Json||sa(e)?e:{value:e}}function Mo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hg(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function uT(n,e){return Mo(n,e.toTimestamp())}function Jt(n){return Ae(!!n),ue.fromTimestamp(function(t){const r=zn(t);return new Ke(r.seconds,r.nanos)}(n))}function Lc(n,e){return Gl(n,e).canonicalString()}function Gl(n,e){const t=function(s){return new Ve(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function dg(n){const e=Ve.fromString(n);return Ae(_g(e)),e}function Ql(n,e){return Lc(n.databaseId,e.path)}function ul(n,e){const t=dg(e);if(t.get(1)!==n.databaseId.projectId)throw new z(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new z(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ee(pg(t))}function fg(n,e){return Lc(n.databaseId,e)}function hT(n){const e=dg(n);return e.length===4?Ve.emptyPath():pg(e)}function Yl(n){return new Ve(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function pg(n){return Ae(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Rd(n,e,t){return{name:Ql(n,e),fields:t.value.mapValue.fields}}function dT(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:le()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Ae(f===void 0||typeof f=="string"),rt.fromBase64String(f||"")):(Ae(f===void 0||f instanceof Buffer||f instanceof Uint8Array),rt.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?N.UNKNOWN:lg(h.code);return new z(f,h.message||"")}(a);t=new ug(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ul(n,r.document.name),i=Jt(r.document.updateTime),a=r.document.createTime?Jt(r.document.createTime):ue.min(),l=new Et({mapValue:{fields:r.document.fields}}),c=ut.newFoundDocument(s,i,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];t=new go(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ul(n,r.document),i=r.readTime?Jt(r.readTime):ue.min(),a=ut.newNoDocument(s,i),l=r.removedTargetIds||[];t=new go([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ul(n,r.document),i=r.removedTargetIds||[];t=new go([],i,s,null)}else{if(!("filter"in e))return le();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new tT(s,i),l=r.targetId;t=new cg(l,a)}}return t}function fT(n,e){let t;if(e instanceof Ri)t={update:Rd(n,e.key,e.value)};else if(e instanceof ha)t={delete:Ql(n,e.key)};else if(e instanceof Jn)t={update:Rd(n,e.key,e.data),updateMask:TT(e.fieldMask)};else{if(!(e instanceof Xw))return le();t={verify:Ql(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof di)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof fi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof pi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof xo)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw le()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:uT(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:le()}(n,e.precondition)),t}function pT(n,e){return n&&n.length>0?(Ae(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?Jt(s.updateTime):Jt(i);return a.isEqual(ue.min())&&(a=Jt(i)),new Qw(a,s.transformResults||[])}(t,e))):[]}function gT(n,e){return{documents:[fg(n,e.path)]}}function mT(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=fg(n,s);const i=function(h){if(h.length!==0)return mg(Ut.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(_){return{field:xr(_.field),direction:vT(_.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=zl(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:s}}function _T(n){let e=hT(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Ae(r===1);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(p){const _=gg(p);return _ instanceof Ut&&Kp(_)?_.getFilters():[_]}(t.where));let a=[];t.orderBy&&(a=function(p){return p.map(_=>function(P){return new hi(Mr(P.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(_))}(t.orderBy));let l=null;t.limit&&(l=function(p){let _;return _=typeof p=="object"?p.value:p,sa(_)?null:_}(t.limit));let c=null;t.startAt&&(c=function(p){const _=!!p.before,A=p.values||[];return new rs(A,_)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const _=!p.before,A=p.values||[];return new rs(A,_)}(t.endAt)),xw(e,s,a,i,l,"F",c,h)}function yT(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function gg(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Mr(t.unaryFilter.field);return je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Mr(t.unaryFilter.field);return je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Mr(t.unaryFilter.field);return je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Mr(t.unaryFilter.field);return je.create(a,"!=",{nullValue:"NULL_VALUE"});default:return le()}}(n):n.fieldFilter!==void 0?function(t){return je.create(Mr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return le()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ut.create(t.compositeFilter.filters.map(r=>gg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return le()}}(t.compositeFilter.op))}(n):le()}function vT(n){return oT[n]}function ET(n){return aT[n]}function wT(n){return lT[n]}function xr(n){return{fieldPath:n.canonicalString()}}function Mr(n){return et.fromServerFormat(n.fieldPath)}function mg(n){return n instanceof je?function(t){if(t.op==="=="){if(dd(t.value))return{unaryFilter:{field:xr(t.field),op:"IS_NAN"}};if(hd(t.value))return{unaryFilter:{field:xr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(dd(t.value))return{unaryFilter:{field:xr(t.field),op:"IS_NOT_NAN"}};if(hd(t.value))return{unaryFilter:{field:xr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xr(t.field),op:ET(t.op),value:t.value}}}(n):n instanceof Ut?function(t){const r=t.getFilters().map(s=>mg(s));return r.length===1?r[0]:{compositeFilter:{op:wT(t.op),filters:r}}}(n):le()}function TT(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function _g(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Fn{constructor(e,t,r,s,i=ue.min(),a=ue.min(),l=rt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Fn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class IT{constructor(e){this.ct=e}}function AT(n){const e=_T({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Oo(e,e.limit,"L"):e}/**
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
 */class bT{constructor(){this.un=new RT}addToCollectionParentIndex(e,t){return this.un.add(t),U.resolve()}getCollectionParents(e,t){return U.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return U.resolve()}deleteFieldIndex(e,t){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,t){return U.resolve()}getDocumentsMatchingTarget(e,t){return U.resolve(null)}getIndexType(e,t){return U.resolve(0)}getFieldIndexes(e,t){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,t){return U.resolve(Kn.min())}getMinOffsetFromCollectionGroup(e,t){return U.resolve(Kn.min())}updateCollectionGroup(e,t,r){return U.resolve()}updateIndexEntries(e,t){return U.resolve()}}class RT{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new tt(Ve.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new tt(Ve.comparator)).toArray()}}/**
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
 */class ss{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ss(0)}static kn(){return new ss(-1)}}/**
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
 */class ST{constructor(){this.changes=new us(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?U.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class PT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class CT{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Zs(r.mutation,s,It.empty(),Ke.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,me()).next(()=>r))}getLocalViewOfDocuments(e,t,r=me()){const s=dr();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Bs();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=dr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,me()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=In();const a=Xs(),l=function(){return Xs()}();return t.forEach((c,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Jn)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Zs(f.mutation,h,f.mutation.getFieldMask(),Ke.now())):a.set(h.key,It.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var p;return l.set(h,new PT(f,(p=a.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Xs();let s=new xe((a,l)=>a-l),i=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let f=r.get(c)||It.empty();f=l.applyToLocalView(h,f),r.set(c,f);const p=(s.get(l.batchId)||me()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,p=eg();f.forEach(_=>{if(!i.has(_)){const A=og(t.get(_),r.get(_));A!==null&&p.set(_,A),i=i.add(_)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return U.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return ee.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Nc(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):U.resolve(dr());let l=-1,c=i;return a.next(h=>U.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?U.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{c=c.insert(f,_)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,me())).next(f=>({batchId:l,changes:Zp(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ee(t)).next(r=>{let s=Bs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Bs();return this.indexManager.getCollectionParents(e,i).next(l=>U.forEach(l,c=>{const h=function(p,_){return new Tr(_,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,_)=>{a=a.insert(p,_)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,ut.newInvalidDocument(f)))});let l=Bs();return a.forEach((c,h)=>{const f=i.get(c);f!==void 0&&Zs(f.mutation,h,It.empty(),Ke.now()),la(t,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class kT{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return U.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Jt(s.createTime)}}(t)),U.resolve()}getNamedQuery(e,t){return U.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:AT(s.bundledQuery),readTime:Jt(s.readTime)}}(t)),U.resolve()}}/**
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
 */class VT{constructor(){this.overlays=new xe(ee.comparator),this.Ir=new Map}getOverlay(e,t){return U.resolve(this.overlays.get(t))}getOverlays(e,t){const r=dr();return U.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),U.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),U.resolve()}getOverlaysForCollection(e,t,r){const s=dr(),i=t.length+1,a=new ee(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return U.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new xe((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=dr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=dr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return U.resolve(l)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new eT(t,r));let i=this.Ir.get(t);i===void 0&&(i=me(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
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
 */class DT{constructor(){this.sessionToken=rt.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,U.resolve()}}/**
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
 */class Fc{constructor(){this.Tr=new tt(ze.Er),this.dr=new tt(ze.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new ze(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new ze(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new ee(new Ve([])),r=new ze(t,e),s=new ze(t,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new ee(new Ve([])),r=new ze(t,e),s=new ze(t,e+1);let i=me();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new ze(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return ee.comparator(e.key,t.key)||we(e.wr,t.wr)}static Ar(e,t){return we(e.wr,t.wr)||ee.comparator(e.key,t.key)}}/**
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
 */class NT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new tt(ze.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Zw(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.br=this.br.add(new ze(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(a)}lookupMutationBatch(e,t){return U.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ze(t,0),s=new ze(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const l=this.Dr(a.wr);i.push(l)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new tt(we);return t.forEach(s=>{const i=new ze(s,0),a=new ze(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],l=>{r=r.add(l.wr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;ee.isDocumentKey(i)||(i=i.child(""));const a=new ze(new ee(i),0);let l=new tt(we);return this.br.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.wr)),!0)},a),U.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Ae(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return U.forEach(t.mutations,s=>{const i=new ze(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new ze(t,0),s=this.br.firstAfterOrEqual(r);return U.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class OT{constructor(e){this.Mr=e,this.docs=function(){return new xe(ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return U.resolve(r?r.document.mutableCopy():ut.newInvalidDocument(t))}getEntries(e,t){let r=In();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ut.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=In();const a=t.path,l=new ee(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||mw(gw(f),r)<=0||(s.has(f.key)||la(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,t,r,s){le()}Or(e,t){return U.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new xT(this)}getSize(e){return U.resolve(this.size)}}class xT extends ST{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),U.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class MT{constructor(e){this.persistence=e,this.Nr=new us(t=>Vc(t),Dc),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Fc,this.targetCount=0,this.kr=ss.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),U.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new ss(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,U.resolve()}updateTargetData(e,t){return this.Kn(t),U.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return U.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),U.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),U.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return U.resolve(r)}containsKey(e,t){return U.resolve(this.Br.containsKey(t))}}/**
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
 */class LT{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Pc(0),this.Kr=!1,this.Kr=!0,this.$r=new DT,this.referenceDelegate=e(this),this.Ur=new MT(this),this.indexManager=new bT,this.remoteDocumentCache=function(s){return new OT(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new IT(t),this.Gr=new kT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new VT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new NT(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){J("MemoryPersistence","Starting transaction:",e);const s=new FT(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return U.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class FT extends yw{constructor(e){super(),this.currentSequenceNumber=e}}class Uc{constructor(e){this.persistence=e,this.Jr=new Fc,this.Yr=null}static Zr(e){return new Uc(e)}get Xr(){if(this.Yr)return this.Yr;throw le()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),U.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),U.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,r=>{const s=ee.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,ue.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return U.or([()=>U.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class Bc{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=me(),s=me();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Bc(e,t.fromCache,r,s)}}/**
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
 */class UT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class BT{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return jv()?8:vw(dt())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new UT;return this.Xi(e,t,a).next(l=>{if(i.result=l,this.zi)return this.es(e,t,a,l.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(Ds()<=_e.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",Or(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(Ds()<=_e.DEBUG&&J("QueryEngine","Query:",Or(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Ds()<=_e.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",Or(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yt(t))):U.resolve())}Yi(e,t){if(md(t))return U.resolve(null);let r=Yt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Oo(t,null,"F"),r=Yt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=me(...i);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.ts(t,l);return this.ns(t,h,a,c.readTime)?this.Yi(e,Oo(t,null,"F")):this.rs(e,h,t,c)}))})))}Zi(e,t,r,s){return md(t)||s.isEqual(ue.min())?U.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(t,i);return this.ns(t,a,r,s)?U.resolve(null):(Ds()<=_e.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Or(t)),this.rs(e,a,t,pw(s,-1)).next(l=>l))})}ts(e,t){let r=new tt(Jp(e));return t.forEach((s,i)=>{la(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return Ds()<=_e.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",Or(t)),this.Ji.getDocumentsMatchingQuery(e,t,Kn.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */class $T{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new xe(we),this._s=new us(i=>Vc(i),Dc),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new CT(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function jT(n,e,t,r){return new $T(n,e,t,r)}async function yg(n,e){const t=he(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=me();for(const h of s){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(r,c).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:l}))})})}function qT(n,e){const t=he(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const p=h.batch,_=p.keys();let A=U.resolve();return _.forEach(P=>{A=A.next(()=>f.getEntry(c,P)).next(C=>{const k=h.docVersions.get(P);Ae(k!==null),C.version.compareTo(k)<0&&(p.applyToRemoteDocument(C,h),C.isValidDocument()&&(C.setReadTime(h.commitVersion),f.addEntry(C)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=me();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function vg(n){const e=he(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function WT(n,e){const t=he(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const l=[];e.targetChanges.forEach((f,p)=>{const _=s.get(p);if(!_)return;l.push(t.Ur.removeMatchingKeys(i,f.removedDocuments,p).next(()=>t.Ur.addMatchingKeys(i,f.addedDocuments,p)));let A=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?A=A.withResumeToken(rt.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),s=s.insert(p,A),function(C,k,j){return C.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(_,A,f)&&l.push(t.Ur.updateTargetData(i,A))});let c=In(),h=me();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(HT(i,a,e.documentUpdates).next(f=>{c=f.Ps,h=f.Is})),!r.isEqual(ue.min())){const f=t.Ur.getLastRemoteSnapshotVersion(i).next(p=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return U.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(t.os=s,i))}function HT(n,e,t){let r=me(),s=me();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=In();return t.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ue.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):J("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Ps:a,Is:s}})}function KT(n,e){const t=he(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function zT(n,e){const t=he(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):t.Ur.allocateTargetId(r).next(a=>(s=new Fn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function Jl(n,e,t){const r=he(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!bi(a))throw a;J("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Sd(n,e,t){const r=he(n);let s=ue.min(),i=me();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,f){const p=he(c),_=p._s.get(f);return _!==void 0?U.resolve(p.os.get(_)):p.Ur.getTargetData(h,f)}(r,a,Yt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?s:ue.min(),t?i:me())).next(l=>(GT(r,Lw(e),l),{documents:l,Ts:i})))}function GT(n,e,t){let r=n.us.get(e)||ue.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}class Pd{constructor(){this.activeTargetIds=qw()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class QT{constructor(){this.so=new Pd,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Pd,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class YT{_o(e){}shutdown(){}}/**
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
 */class Cd{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){J("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){J("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let io=null;function hl(){return io===null?io=function(){return 268435456+Math.round(2147483648*Math.random())}():io++,"0x"+io.toString(16)}/**
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
 */const JT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class XT{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const at="WebChannelConnection";class ZT extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,a){const l=hl(),c=this.xo(t,r.toUriEncodedString());J("RestConnection",`Sending RPC '${t}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,a),this.No(t,c,h,s).then(f=>(J("RestConnection",`Received RPC '${t}' ${l}: `,f),f),f=>{throw Zr("RestConnection",`RPC '${t}' ${l} failed with error: `,f,"url: ",c,"request:",s),f})}Lo(t,r,s,i,a,l){return this.Mo(t,r,s,i,a)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+cs}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}xo(t,r){const s=JT[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=hl();return new Promise((a,l)=>{const c=new Op;c.setWithCredentials(!0),c.listenOnce(xp.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ho.NO_ERROR:const f=c.getResponseJson();J(at,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),a(f);break;case ho.TIMEOUT:J(at,`RPC '${e}' ${i} timed out`),l(new z(N.DEADLINE_EXCEEDED,"Request time out"));break;case ho.HTTP_ERROR:const p=c.getStatus();if(J(at,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let _=c.getResponseJson();Array.isArray(_)&&(_=_[0]);const A=_==null?void 0:_.error;if(A&&A.status&&A.message){const P=function(k){const j=k.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(j)>=0?j:N.UNKNOWN}(A.status);l(new z(P,A.message))}else l(new z(N.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new z(N.UNAVAILABLE,"Connection failed."));break;default:le()}}finally{J(at,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);J(at,`RPC '${e}' ${i} sending request:`,s),c.send(t,"POST",h,r,15)})}Bo(e,t,r){const s=hl(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Fp(),l=Lp(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const f=i.join("");J(at,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=a.createWebChannel(f,c);let _=!1,A=!1;const P=new XT({Io:k=>{A?J(at,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(_||(J(at,`Opening RPC '${e}' stream ${s} transport.`),p.open(),_=!0),J(at,`RPC '${e}' stream ${s} sending:`,k),p.send(k))},To:()=>p.close()}),C=(k,j,B)=>{k.listen(j,Q=>{try{B(Q)}catch(H){setTimeout(()=>{throw H},0)}})};return C(p,Us.EventType.OPEN,()=>{A||(J(at,`RPC '${e}' stream ${s} transport opened.`),P.yo())}),C(p,Us.EventType.CLOSE,()=>{A||(A=!0,J(at,`RPC '${e}' stream ${s} transport closed`),P.So())}),C(p,Us.EventType.ERROR,k=>{A||(A=!0,Zr(at,`RPC '${e}' stream ${s} transport errored:`,k),P.So(new z(N.UNAVAILABLE,"The operation could not be completed")))}),C(p,Us.EventType.MESSAGE,k=>{var j;if(!A){const B=k.data[0];Ae(!!B);const Q=B,H=Q.error||((j=Q[0])===null||j===void 0?void 0:j.error);if(H){J(at,`RPC '${e}' stream ${s} received error:`,H);const ie=H.status;let de=function(y){const I=$e[y];if(I!==void 0)return lg(I)}(ie),T=H.message;de===void 0&&(de=N.INTERNAL,T="Unknown error status: "+ie+" with message "+H.message),A=!0,P.So(new z(de,T)),p.close()}else J(at,`RPC '${e}' stream ${s} received:`,B),P.bo(B)}}),C(l,Mp.STAT_EVENT,k=>{k.stat===$l.PROXY?J(at,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===$l.NOPROXY&&J(at,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function dl(){return typeof document<"u"?document:null}/**
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
 */function fa(n){return new cT(n,!0)}/**
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
 */class Eg{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&J("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class wg{constructor(e,t,r,s,i,a,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Eg(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(Tn(t.toString()),Tn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new z(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return J("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(J("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class eI extends wg{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=dT(this.serializer,e),r=function(i){if(!("targetChange"in i))return ue.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ue.min():a.readTime?Jt(a.readTime):ue.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Yl(this.serializer),t.addTarget=function(i,a){let l;const c=a.target;if(l=Hl(c)?{documents:gT(i,c)}:{query:mT(i,c)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=hg(i,a.resumeToken);const h=zl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(ue.min())>0){l.readTime=Mo(i,a.snapshotVersion.toTimestamp());const h=zl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=yT(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Yl(this.serializer),t.removeTarget=e,this.a_(t)}}class tI extends wg{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Ae(!!e.streamToken),this.lastStreamToken=e.streamToken,Ae(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=pT(e.writeResults,e.commitTime),r=Jt(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Yl(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>fT(this.serializer,r))};this.a_(t)}}/**
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
 */class nI extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new z(N.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,Gl(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(N.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,Gl(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new z(N.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class rI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Tn(t),this.D_=!1):J("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class sI{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{Ir(this)&&(J("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=he(c);h.L_.add(4),await Pi(h),h.q_.set("Unknown"),h.L_.delete(4),await pa(h)}(this))})}),this.q_=new rI(r,s)}}async function pa(n){if(Ir(n))for(const e of n.B_)await e(!0)}async function Pi(n){for(const e of n.B_)await e(!1)}function Tg(n,e){const t=he(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Wc(t)?qc(t):hs(t).r_()&&jc(t,e))}function $c(n,e){const t=he(n),r=hs(t);t.N_.delete(e),r.r_()&&Ig(t,e),t.N_.size===0&&(r.r_()?r.o_():Ir(t)&&t.q_.set("Unknown"))}function jc(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}hs(n).A_(e)}function Ig(n,e){n.Q_.xe(e),hs(n).R_(e)}function qc(n){n.Q_=new iT({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),hs(n).start(),n.q_.v_()}function Wc(n){return Ir(n)&&!hs(n).n_()&&n.N_.size>0}function Ir(n){return he(n).L_.size===0}function Ag(n){n.Q_=void 0}async function iI(n){n.q_.set("Online")}async function oI(n){n.N_.forEach((e,t)=>{jc(n,e)})}async function aI(n,e){Ag(n),Wc(n)?(n.q_.M_(e),qc(n)):n.q_.set("Unknown")}async function lI(n,e,t){if(n.q_.set("Online"),e instanceof ug&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.N_.delete(l),s.Q_.removeTarget(l))}(n,e)}catch(r){J("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Lo(n,r)}else if(e instanceof go?n.Q_.Ke(e):e instanceof cg?n.Q_.He(e):n.Q_.We(e),!t.isEqual(ue.min()))try{const r=await vg(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.Q_.rt(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const f=i.N_.get(c);if(!f)return;i.N_.set(c,f.withResumeToken(rt.EMPTY_BYTE_STRING,f.snapshotVersion)),Ig(i,c);const p=new Fn(f.target,c,h,f.sequenceNumber);jc(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){J("RemoteStore","Failed to raise snapshot:",r),await Lo(n,r)}}async function Lo(n,e,t){if(!bi(e))throw e;n.L_.add(1),await Pi(n),n.q_.set("Offline"),t||(t=()=>vg(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{J("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await pa(n)})}function bg(n,e){return e().catch(t=>Lo(n,t,e))}async function ga(n){const e=he(n),t=Gn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;cI(e);)try{const s=await KT(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,uI(e,s)}catch(s){await Lo(e,s)}Rg(e)&&Sg(e)}function cI(n){return Ir(n)&&n.O_.length<10}function uI(n,e){n.O_.push(e);const t=Gn(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Rg(n){return Ir(n)&&!Gn(n).n_()&&n.O_.length>0}function Sg(n){Gn(n).start()}async function hI(n){Gn(n).p_()}async function dI(n){const e=Gn(n);for(const t of n.O_)e.m_(t.mutations)}async function fI(n,e,t){const r=n.O_.shift(),s=xc.from(r,e,t);await bg(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ga(n)}async function pI(n,e){e&&Gn(n).V_&&await async function(r,s){if(function(a){return nT(a)&&a!==N.ABORTED}(s.code)){const i=r.O_.shift();Gn(r).s_(),await bg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ga(r)}}(n,e),Rg(n)&&Sg(n)}async function kd(n,e){const t=he(n);t.asyncQueue.verifyOperationInProgress(),J("RemoteStore","RemoteStore received new credentials");const r=Ir(t);t.L_.add(3),await Pi(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await pa(t)}async function gI(n,e){const t=he(n);e?(t.L_.delete(2),await pa(t)):e||(t.L_.add(2),await Pi(t),t.q_.set("Unknown"))}function hs(n){return n.K_||(n.K_=function(t,r,s){const i=he(t);return i.w_(),new eI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:iI.bind(null,n),Ro:oI.bind(null,n),mo:aI.bind(null,n),d_:lI.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Wc(n)?qc(n):n.q_.set("Unknown")):(await n.K_.stop(),Ag(n))})),n.K_}function Gn(n){return n.U_||(n.U_=function(t,r,s){const i=he(t);return i.w_(),new tI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:hI.bind(null,n),mo:pI.bind(null,n),f_:dI.bind(null,n),g_:fI.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await ga(n)):(await n.U_.stop(),n.O_.length>0&&(J("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class Hc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new vn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new Hc(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Kc(n,e){if(Tn("AsyncQueue",`${e}: ${n}`),bi(n))return new z(N.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Kr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||ee.comparator(t.key,r.key):(t,r)=>ee.comparator(t.key,r.key),this.keyedMap=Bs(),this.sortedSet=new xe(this.comparator)}static emptySet(e){return new Kr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Kr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Kr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Vd{constructor(){this.W_=new xe(ee.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):le():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class is{constructor(e,t,r,s,i,a,l,c,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new is(e,t,Kr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&aa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class mI{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class _I{constructor(){this.queries=Dd(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=he(t),i=s.queries;s.queries=Dd(),i.forEach((a,l)=>{for(const c of l.j_)c.onError(r)})})(this,new z(N.ABORTED,"Firestore shutting down"))}}function Dd(){return new us(n=>Yp(n),aa)}async function zc(n,e){const t=he(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new mI,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=Kc(a,`Initialization of query '${Or(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&Qc(t)}async function Gc(n,e){const t=he(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function yI(n,e){const t=he(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.j_)l.X_(s)&&(r=!0);a.z_=s}}r&&Qc(t)}function vI(n,e,t){const r=he(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function Qc(n){n.Y_.forEach(e=>{e.next()})}var Xl,Nd;(Nd=Xl||(Xl={})).ea="default",Nd.Cache="cache";class Yc{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new is(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=is.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Xl.Cache}}/**
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
 */class Pg{constructor(e){this.key=e}}class Cg{constructor(e){this.key=e}}class EI{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=me(),this.mutatedKeys=me(),this.Aa=Jp(e),this.Ra=new Kr(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Vd,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const _=s.get(f),A=la(this.query,p)?p:null,P=!!_&&this.mutatedKeys.has(_.key),C=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let k=!1;_&&A?_.data.isEqual(A.data)?P!==C&&(r.track({type:3,doc:A}),k=!0):this.ga(_,A)||(r.track({type:2,doc:A}),k=!0,(c&&this.Aa(A,c)>0||h&&this.Aa(A,h)<0)&&(l=!0)):!_&&A?(r.track({type:0,doc:A}),k=!0):_&&!A&&(r.track({type:1,doc:_}),k=!0,(c||h)&&(l=!0)),k&&(A?(a=a.add(A),i=C?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:l,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,p)=>function(A,P){const C=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le()}};return C(A)-C(P)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),s=s!=null&&s;const l=t&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,h=c!==this.Ea;return this.Ea=c,a.length!==0||h?{snapshot:new is(this.query,e.Ra,i,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Vd,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=me(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Cg(r))}),this.da.forEach(r=>{e.has(r)||t.push(new Pg(r))}),t}ba(e){this.Ta=e.Ts,this.da=me();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return is.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class wI{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class TI{constructor(e){this.key=e,this.va=!1}}class II{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new us(l=>Yp(l),aa),this.Ma=new Map,this.xa=new Set,this.Oa=new xe(ee.comparator),this.Na=new Map,this.La=new Fc,this.Ba={},this.ka=new Map,this.qa=ss.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function AI(n,e,t=!0){const r=xg(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await kg(r,e,t,!0),s}async function bI(n,e){const t=xg(n);await kg(t,e,!0,!1)}async function kg(n,e,t,r){const s=await zT(n.localStore,Yt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await RI(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Tg(n.remoteStore,s),l}async function RI(n,e,t,r,s){n.Ka=(p,_,A)=>async function(C,k,j,B){let Q=k.view.ma(j);Q.ns&&(Q=await Sd(C.localStore,k.query,!1).then(({documents:T})=>k.view.ma(T,Q)));const H=B&&B.targetChanges.get(k.targetId),ie=B&&B.targetMismatches.get(k.targetId)!=null,de=k.view.applyChanges(Q,C.isPrimaryClient,H,ie);return xd(C,k.targetId,de.wa),de.snapshot}(n,p,_,A);const i=await Sd(n.localStore,e,!0),a=new EI(e,i.Ts),l=a.ma(i.documents),c=Si.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(l,n.isPrimaryClient,c);xd(n,t,h.wa);const f=new wI(e,t,a);return n.Fa.set(e,f),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),h.snapshot}async function SI(n,e,t){const r=he(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!aa(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Jl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&$c(r.remoteStore,s.targetId),Zl(r,s.targetId)}).catch(Ai)):(Zl(r,s.targetId),await Jl(r.localStore,s.targetId,!0))}async function PI(n,e){const t=he(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),$c(t.remoteStore,r.targetId))}async function CI(n,e,t){const r=MI(n);try{const s=await function(a,l){const c=he(a),h=Ke.now(),f=l.reduce((A,P)=>A.add(P.key),me());let p,_;return c.persistence.runTransaction("Locally write mutations","readwrite",A=>{let P=In(),C=me();return c.cs.getEntries(A,f).next(k=>{P=k,P.forEach((j,B)=>{B.isValidDocument()||(C=C.add(j))})}).next(()=>c.localDocuments.getOverlayedDocuments(A,P)).next(k=>{p=k;const j=[];for(const B of l){const Q=Jw(B,p.get(B.key).overlayedDocument);Q!=null&&j.push(new Jn(B.key,Q,qp(Q.value.mapValue),bt.exists(!0)))}return c.mutationQueue.addMutationBatch(A,h,j,l)}).next(k=>{_=k;const j=k.applyToLocalDocumentSet(p,C);return c.documentOverlayCache.saveOverlays(A,k.batchId,j)})}).then(()=>({batchId:_.batchId,changes:Zp(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let h=a.Ba[a.currentUser.toKey()];h||(h=new xe(we)),h=h.insert(l,c),a.Ba[a.currentUser.toKey()]=h}(r,s.batchId,t),await Ci(r,s.changes),await ga(r.remoteStore)}catch(s){const i=Kc(s,"Failed to persist write");t.reject(i)}}async function Vg(n,e){const t=he(n);try{const r=await WT(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Na.get(i);a&&(Ae(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?Ae(a.va):s.removedDocuments.size>0&&(Ae(a.va),a.va=!1))}),await Ci(t,r,e)}catch(r){await Ai(r)}}function Od(n,e,t){const r=he(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,a)=>{const l=a.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=he(a);c.onlineState=l;let h=!1;c.queries.forEach((f,p)=>{for(const _ of p.j_)_.Z_(l)&&(h=!0)}),h&&Qc(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function kI(n,e,t){const r=he(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new xe(ee.comparator);a=a.insert(i,ut.newNoDocument(i,ue.min()));const l=me().add(i),c=new da(ue.min(),new Map,new xe(we),a,l);await Vg(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),Jc(r)}else await Jl(r.localStore,e,!1).then(()=>Zl(r,e,t)).catch(Ai)}async function VI(n,e){const t=he(n),r=e.batch.batchId;try{const s=await qT(t.localStore,e);Ng(t,r,null),Dg(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ci(t,s)}catch(s){await Ai(s)}}async function DI(n,e,t){const r=he(n);try{const s=await function(a,l){const c=he(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(Ae(p!==null),f=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(r.localStore,e);Ng(r,e,t),Dg(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ci(r,s)}catch(s){await Ai(s)}}function Dg(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Ng(n,e,t){const r=he(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Zl(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Og(n,r)})}function Og(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&($c(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Jc(n))}function xd(n,e,t){for(const r of t)r instanceof Pg?(n.La.addReference(r.key,e),NI(n,r)):r instanceof Cg?(J("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Og(n,r.key)):le()}function NI(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(J("SyncEngine","New document in limbo: "+t),n.xa.add(r),Jc(n))}function Jc(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new ee(Ve.fromString(e)),r=n.qa.next();n.Na.set(r,new TI(t)),n.Oa=n.Oa.insert(t,r),Tg(n.remoteStore,new Fn(Yt(oa(t.path)),r,"TargetPurposeLimboResolution",Pc.oe))}}async function Ci(n,e,t){const r=he(n),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{a.push(r.Ka(c,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Bc.Wi(c.targetId,h);i.push(p)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(c,h){const f=he(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>U.forEach(h,_=>U.forEach(_.$i,A=>f.persistence.referenceDelegate.addReference(p,_.targetId,A)).next(()=>U.forEach(_.Ui,A=>f.persistence.referenceDelegate.removeReference(p,_.targetId,A)))))}catch(p){if(!bi(p))throw p;J("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const _=p.targetId;if(!p.fromCache){const A=f.os.get(_),P=A.snapshotVersion,C=A.withLastLimboFreeSnapshotVersion(P);f.os=f.os.insert(_,C)}}}(r.localStore,i))}async function OI(n,e){const t=he(n);if(!t.currentUser.isEqual(e)){J("SyncEngine","User change. New user:",e.toKey());const r=await yg(t.localStore,e);t.currentUser=e,function(i,a){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new z(N.CANCELLED,a))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ci(t,r.hs)}}function xI(n,e){const t=he(n),r=t.Na.get(e);if(r&&r.va)return me().add(r.key);{let s=me();const i=t.Ma.get(e);if(!i)return s;for(const a of i){const l=t.Fa.get(a);s=s.unionWith(l.view.Va)}return s}}function xg(n){const e=he(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Vg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=xI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kI.bind(null,e),e.Ca.d_=yI.bind(null,e.eventManager),e.Ca.$a=vI.bind(null,e.eventManager),e}function MI(n){const e=he(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=VI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=DI.bind(null,e),e}class Fo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=fa(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return jT(this.persistence,new BT,e.initialUser,this.serializer)}Ga(e){return new LT(Uc.Zr,this.serializer)}Wa(e){return new QT}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Fo.provider={build:()=>new Fo};class ec{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Od(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=OI.bind(null,this.syncEngine),await gI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new _I}()}createDatastore(e){const t=fa(e.databaseInfo.databaseId),r=function(i){return new ZT(i)}(e.databaseInfo);return function(i,a,l,c){return new nI(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new sI(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Od(this.syncEngine,t,0),function(){return Cd.D()?new Cd:new YT}())}createSyncEngine(e,t){return function(s,i,a,l,c,h,f){const p=new II(s,i,a,l,c,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=he(s);J("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Pi(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ec.provider={build:()=>new ec};/**
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
 */class Xc{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Tn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class LI{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=lt.UNAUTHENTICATED,this.clientId=Bp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{J("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(J("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Kc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function fl(n,e){n.asyncQueue.verifyOperationInProgress(),J("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await yg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Md(n,e){n.asyncQueue.verifyOperationInProgress();const t=await FI(n);J("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>kd(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>kd(e.remoteStore,s)),n._onlineComponents=e}async function FI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){J("FirestoreClient","Using user provided OfflineComponentProvider");try{await fl(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Zr("Error using user provided cache. Falling back to memory cache: "+t),await fl(n,new Fo)}}else J("FirestoreClient","Using default OfflineComponentProvider"),await fl(n,new Fo);return n._offlineComponents}async function Mg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(J("FirestoreClient","Using user provided OnlineComponentProvider"),await Md(n,n._uninitializedComponentsProvider._online)):(J("FirestoreClient","Using default OnlineComponentProvider"),await Md(n,new ec))),n._onlineComponents}function UI(n){return Mg(n).then(e=>e.syncEngine)}async function Uo(n){const e=await Mg(n),t=e.eventManager;return t.onListen=AI.bind(null,e.syncEngine),t.onUnlisten=SI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=bI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=PI.bind(null,e.syncEngine),t}function BI(n,e,t={}){const r=new vn;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const f=new Xc({next:_=>{f.Za(),a.enqueueAndForget(()=>Gc(i,p));const A=_.docs.has(l);!A&&_.fromCache?h.reject(new z(N.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&_.fromCache&&c&&c.source==="server"?h.reject(new z(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),p=new Yc(oa(l.path),f,{includeMetadataChanges:!0,_a:!0});return zc(i,p)}(await Uo(n),n.asyncQueue,e,t,r)),r.promise}function $I(n,e,t={}){const r=new vn;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const f=new Xc({next:_=>{f.Za(),a.enqueueAndForget(()=>Gc(i,p)),_.fromCache&&c.source==="server"?h.reject(new z(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),p=new Yc(l,f,{includeMetadataChanges:!0,_a:!0});return zc(i,p)}(await Uo(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Lg(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Ld=new Map;/**
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
 */function Fg(n,e,t){if(!t)throw new z(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function jI(n,e,t,r){if(e===!0&&r===!0)throw new z(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Fd(n){if(!ee.isDocumentKey(n))throw new z(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ud(n){if(ee.isDocumentKey(n))throw new z(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ma(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":le()}function Dt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new z(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ma(n);throw new z(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function qI(n,e){if(e<=0)throw new z(N.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */class Bd{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new z(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}jI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Lg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new z(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new z(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new z(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _a{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bd({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new iw;switch(r.type){case"firstParty":return new cw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Ld.get(t);r&&(J("ComponentProvider","Removing Datastore"),Ld.delete(t),r.terminate())}(this),Promise.resolve()}}function WI(n,e,t,r={}){var s;const i=(n=Dt(n,_a))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&Zr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=lt.MOCK_USER;else{l=xv(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new z(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new lt(h)}n._authCredentials=new ow(new Up(l,c))}}/**
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
 */class sn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new sn(this.firestore,e,this._query)}}class vt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}}class qn extends sn{constructor(e,t,r){super(e,t,oa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new ee(e))}withConverter(e){return new qn(this.firestore,e,this._path)}}function oo(n,e,...t){if(n=Fe(n),Fg("collection","path",e),n instanceof _a){const r=Ve.fromString(e,...t);return Ud(r),new qn(n,null,r)}{if(!(n instanceof vt||n instanceof qn))throw new z(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ve.fromString(e,...t));return Ud(r),new qn(n.firestore,null,r)}}function ar(n,e,...t){if(n=Fe(n),arguments.length===1&&(e=Bp.newId()),Fg("doc","path",e),n instanceof _a){const r=Ve.fromString(e,...t);return Fd(r),new vt(n,null,new ee(r))}{if(!(n instanceof vt||n instanceof qn))throw new z(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ve.fromString(e,...t));return Fd(r),new vt(n.firestore,n instanceof qn?n.converter:null,new ee(r))}}/**
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
 */class $d{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Eg(this,"async_queue_retry"),this.Vu=()=>{const r=dl();r&&J("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=dl();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=dl();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new vn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!bi(e))throw e;J("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Tn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=Hc.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&le()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function jd(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class Qn extends _a{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new $d,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new $d(e),this._firestoreClient=void 0,await e}}}function HI(n,e){const t=typeof n=="object"?n:kp(),r=typeof n=="string"?n:"(default)",s=Rc(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Nv("firestore");i&&WI(s,...i)}return s}function ki(n){if(n._terminated)throw new z(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||KI(n),n._firestoreClient}function KI(n){var e,t,r;const s=n._freezeSettings(),i=function(l,c,h,f){return new Tw(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Lg(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new LI(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(n._componentsProvider))}/**
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
 */class os{constructor(e){this._byteString=e}static fromBase64String(e){try{return new os(rt.fromBase64String(e))}catch(t){throw new z(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new os(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ya{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new z(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class va{constructor(e){this._methodName=e}}/**
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
 */class Zc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new z(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new z(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
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
 */class eu{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const zI=/^__.*__$/;class GI{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Jn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ri(e,this.data,t,this.fieldTransforms)}}class Ug{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Jn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Bg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le()}}class tu{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new tu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Bo(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Bg(this.Cu)&&zI.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class QI{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||fa(e)}Qu(e,t,r,s=!1){return new tu({Cu:e,methodName:t,qu:r,path:et.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ea(n){const e=n._freezeSettings(),t=fa(n._databaseId);return new QI(n._databaseId,!!e.ignoreUndefinedProperties,t)}function $g(n,e,t,r,s,i={}){const a=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);ru("Data must be an object, but it was:",a,r);const l=qg(r,a);let c,h;if(i.merge)c=new It(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const _=tc(e,p,t);if(!a.contains(_))throw new z(N.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);Hg(f,_)||f.push(_)}c=new It(f),h=a.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=a.fieldTransforms;return new GI(new Et(l),c,h)}class wa extends va{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof wa}}class nu extends va{_toFieldTransform(e){return new zw(e.path,new di)}isEqual(e){return e instanceof nu}}function YI(n,e,t,r){const s=n.Qu(1,e,t);ru("Data must be an object, but it was:",s,r);const i=[],a=Et.empty();wr(r,(c,h)=>{const f=su(e,c,t);h=Fe(h);const p=s.Nu(f);if(h instanceof wa)i.push(f);else{const _=Vi(h,p);_!=null&&(i.push(f),a.set(f,_))}});const l=new It(i);return new Ug(a,l,s.fieldTransforms)}function JI(n,e,t,r,s,i){const a=n.Qu(1,e,t),l=[tc(e,r,t)],c=[s];if(i.length%2!=0)throw new z(N.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)l.push(tc(e,i[_])),c.push(i[_+1]);const h=[],f=Et.empty();for(let _=l.length-1;_>=0;--_)if(!Hg(h,l[_])){const A=l[_];let P=c[_];P=Fe(P);const C=a.Nu(A);if(P instanceof wa)h.push(A);else{const k=Vi(P,C);k!=null&&(h.push(A),f.set(A,k))}}const p=new It(h);return new Ug(f,p,a.fieldTransforms)}function jg(n,e,t,r=!1){return Vi(t,n.Qu(r?4:3,e))}function Vi(n,e){if(Wg(n=Fe(n)))return ru("Unsupported field value:",e,n),qg(n,e);if(n instanceof va)return function(r,s){if(!Bg(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=Vi(l,s.Lu(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Fe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ww(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ke.fromDate(r);return{timestampValue:Mo(s.serializer,i)}}if(r instanceof Ke){const i=new Ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Mo(s.serializer,i)}}if(r instanceof Zc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof os)return{bytesValue:hg(s.serializer,r._byteString)};if(r instanceof vt){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Lc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof eu)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return Oc(l.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${ma(r)}`)}(n,e)}function qg(n,e){const t={};return $p(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wr(n,(r,s)=>{const i=Vi(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Wg(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ke||n instanceof Zc||n instanceof os||n instanceof vt||n instanceof va||n instanceof eu)}function ru(n,e,t){if(!Wg(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=ma(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function tc(n,e,t){if((e=Fe(e))instanceof ya)return e._internalPath;if(typeof e=="string")return su(n,e);throw Bo("Field path arguments must be of type string or ",n,!1,void 0,t)}const XI=new RegExp("[~\\*/\\[\\]]");function su(n,e,t){if(e.search(XI)>=0)throw Bo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ya(...e.split("."))._internalPath}catch{throw Bo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Bo(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new z(N.INVALID_ARGUMENT,l+n+c)}function Hg(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class iu{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ZI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ta("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ZI extends iu{data(){return super.data()}}function Ta(n,e){return typeof e=="string"?su(n,e):e instanceof ya?e._internalPath:e._delegate._internalPath}/**
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
 */function Kg(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new z(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ou{}class Ia extends ou{}function pl(n,e,...t){let r=[];e instanceof ou&&r.push(e),r=r.concat(t),function(i){const a=i.filter(c=>c instanceof au).length,l=i.filter(c=>c instanceof Aa).length;if(a>1||a>0&&l>0)throw new z(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Aa extends Ia{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Aa(e,t,r)}_apply(e){const t=this._parse(e);return zg(e._query,t),new sn(e.firestore,e.converter,Kl(e._query,t))}_parse(e){const t=Ea(e.firestore);return function(i,a,l,c,h,f,p){let _;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new z(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Wd(p,f);const A=[];for(const P of p)A.push(qd(c,i,P));_={arrayValue:{values:A}}}else _=qd(c,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Wd(p,f),_=jg(l,a,p,f==="in"||f==="not-in");return je.create(h,f,_)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function eA(n,e,t){const r=e,s=Ta("where",n);return Aa._create(s,r,t)}class au extends ou{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new au(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Ut.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const l=i.getFlattenedFilters();for(const c of l)zg(a,c),a=Kl(a,c)}(e._query,t),new sn(e.firestore,e.converter,Kl(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class lu extends Ia{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new lu(e,t)}_apply(e){const t=function(s,i,a){if(s.startAt!==null)throw new z(N.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new z(N.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new hi(i,a)}(e._query,this._field,this._direction);return new sn(e.firestore,e.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new Tr(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function tA(n,e="asc"){const t=e,r=Ta("orderBy",n);return lu._create(r,t)}class cu extends Ia{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new cu(e,t,r)}_apply(e){return new sn(e.firestore,e.converter,Oo(e._query,this._limit,this._limitType))}}function nA(n){return qI("limit",n),cu._create("limit",n,"F")}class uu extends Ia{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new uu(e,t,r)}_apply(e){const t=sA(e,this.type,this._docOrFields,this._inclusive);return new sn(e.firestore,e.converter,function(s,i){return new Tr(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(e._query,t))}}function rA(...n){return uu._create("startAfter",n,!1)}function sA(n,e,t,r){if(t[0]=Fe(t[0]),t[0]instanceof iu)return function(i,a,l,c,h){if(!c)throw new z(N.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${l}().`);const f=[];for(const p of Hr(i))if(p.field.isKeyField())f.push(No(a,c.key));else{const _=c.data.field(p.field);if(ia(_))throw new z(N.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+p.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(_===null){const A=p.field.canonicalString();throw new z(N.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${A}' (used as the orderBy) does not exist.`)}f.push(_)}return new rs(f,h)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const s=Ea(n.firestore);return function(a,l,c,h,f,p){const _=a.explicitOrderBy;if(f.length>_.length)throw new z(N.INVALID_ARGUMENT,`Too many arguments provided to ${h}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const A=[];for(let P=0;P<f.length;P++){const C=f[P];if(_[P].field.isKeyField()){if(typeof C!="string")throw new z(N.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${h}(), but got a ${typeof C}`);if(!Nc(a)&&C.indexOf("/")!==-1)throw new z(N.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${h}() must be a plain document ID, but '${C}' contains a slash.`);const k=a.path.child(Ve.fromString(C));if(!ee.isDocumentKey(k))throw new z(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${h}() must result in a valid document path, but '${k}' is not because it contains an odd number of segments.`);const j=new ee(k);A.push(No(l,j))}else{const k=jg(c,h,C);A.push(k)}}return new rs(A,p)}(n._query,n.firestore._databaseId,s,e,t,r)}}function qd(n,e,t){if(typeof(t=Fe(t))=="string"){if(t==="")throw new z(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Nc(e)&&t.indexOf("/")!==-1)throw new z(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Ve.fromString(t));if(!ee.isDocumentKey(r))throw new z(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return No(n,new ee(r))}if(t instanceof vt)return No(n,t._key);throw new z(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ma(t)}.`)}function Wd(n,e){if(!Array.isArray(n)||n.length===0)throw new z(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function zg(n,e){const t=function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new z(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class iA{convertValue(e,t="none"){switch(vr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(yr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw le()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return wr(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Le(a.doubleValue));return new eu(i)}convertGeoPoint(e){return new Zc(Le(e.latitude),Le(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Cc(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(li(e));default:return null}}convertTimestamp(e){const t=zn(e);return new Ke(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Ve.fromString(e);Ae(_g(r));const s=new ci(r.get(1),r.get(3)),i=new ee(r.popFirst(5));return s.isEqual(t)||Tn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function Gg(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
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
 */class js{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Qg extends iu{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new mo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ta("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class mo extends Qg{data(e={}){return super.data(e)}}class Yg{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new js(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new mo(this._firestore,this._userDataWriter,r.key,r,new js(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new z(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new mo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new js(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new mo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new js(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:oA(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function oA(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le()}}/**
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
 */function Hd(n){n=Dt(n,vt);const e=Dt(n.firestore,Qn);return BI(ki(e),n._key).then(t=>Jg(e,n,t))}class hu extends iA{constructor(e){super(),this.firestore=e}convertBytes(e){return new os(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,t)}}function aA(n){n=Dt(n,sn);const e=Dt(n.firestore,Qn),t=ki(e),r=new hu(e);return Kg(n._query),$I(t,n._query).then(s=>new Yg(e,r,n,s))}function Kd(n,e,t){n=Dt(n,vt);const r=Dt(n.firestore,Qn),s=Gg(n.converter,e,t);return du(r,[$g(Ea(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,bt.none())])}function lA(n){return du(Dt(n.firestore,Qn),[new ha(n._key,bt.none())])}function zd(n,...e){var t,r,s;n=Fe(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||jd(e[a])||(i=e[a],a++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(jd(e[a])){const p=e[a];e[a]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[a+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[a+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,h,f;if(n instanceof vt)h=Dt(n.firestore,Qn),f=oa(n._key.path),c={next:p=>{e[a]&&e[a](Jg(h,n,p))},error:e[a+1],complete:e[a+2]};else{const p=Dt(n,sn);h=Dt(p.firestore,Qn),f=p._query;const _=new hu(h);c={next:A=>{e[a]&&e[a](new Yg(h,_,p,A))},error:e[a+1],complete:e[a+2]},Kg(n._query)}return function(_,A,P,C){const k=new Xc(C),j=new Yc(A,k,P);return _.asyncQueue.enqueueAndForget(async()=>zc(await Uo(_),j)),()=>{k.Za(),_.asyncQueue.enqueueAndForget(async()=>Gc(await Uo(_),j))}}(ki(h),f,l,c)}function du(n,e){return function(r,s){const i=new vn;return r.asyncQueue.enqueueAndForget(async()=>CI(await UI(r),s,i)),i.promise}(ki(n),e)}function Jg(n,e,t){const r=t.docs.get(e._key),s=new hu(n);return new Qg(n,s,e._key,r,new js(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class cA{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Ea(e)}set(e,t,r){this._verifyNotCommitted();const s=gl(e,this._firestore),i=Gg(s.converter,t,r),a=$g(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,bt.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=gl(e,this._firestore);let a;return a=typeof(t=Fe(t))=="string"||t instanceof ya?JI(this._dataReader,"WriteBatch.update",i._key,t,r,s):YI(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(a.toMutation(i._key,bt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=gl(e,this._firestore);return this._mutations=this._mutations.concat(new ha(t._key,bt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new z(N.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function gl(n,e){if((n=Fe(n)).firestore!==e)throw new z(N.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function ml(){return new nu("serverTimestamp")}/**
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
 */function Gd(n){return ki(n=Dt(n,Qn)),new cA(n,e=>du(n,e))}(function(e,t=!0){(function(s){cs=s})(ls),Xr(new mr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new Qn(new aw(r.getProvider("auth-internal")),new hw(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new z(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ci(h.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),jn(od,"4.7.3",e),jn(od,"4.7.3","esm2017")})();var uA="firebase",hA="10.14.1";/**
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
 */jn(uA,hA,"app");function fu(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Xg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dA=Xg,Zg=new Ti("auth","Firebase",Xg());/**
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
 */const $o=new Ac("@firebase/auth");function fA(n,...e){$o.logLevel<=_e.WARN&&$o.warn(`Auth (${ls}): ${n}`,...e)}function _o(n,...e){$o.logLevel<=_e.ERROR&&$o.error(`Auth (${ls}): ${n}`,...e)}/**
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
 */function Bt(n,...e){throw pu(n,...e)}function Xt(n,...e){return pu(n,...e)}function em(n,e,t){const r=Object.assign(Object.assign({},dA()),{[e]:t});return new Ti("auth","Firebase",r).create(e,{appName:n.name})}function Wn(n){return em(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pu(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Zg.create(n,...e)}function oe(n,e,...t){if(!n)throw pu(e,...t)}function mn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw _o(e),new Error(e)}function An(n,e){n||mn(e)}/**
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
 */function nc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function pA(){return Qd()==="http:"||Qd()==="https:"}function Qd(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function gA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pA()||Uv()||"connection"in navigator)?navigator.onLine:!0}function mA(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Di{constructor(e,t){this.shortDelay=e,this.longDelay=t,An(t>e,"Short delay should be less than long delay!"),this.isMobile=Mv()||Bv()}get(){return gA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function gu(n,e){An(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class tm{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const _A={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const yA=new Di(3e4,6e4);function Ar(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Xn(n,e,t,r,s={}){return nm(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=Ii(Object.assign({key:n.config.apiKey},a)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:c},i);return Fv()||(h.referrerPolicy="no-referrer"),tm.fetch()(rm(n,n.config.apiHost,t,l),h)})}async function nm(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},_A),e);try{const s=new EA(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw ao(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ao(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw ao(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw ao(n,"user-disabled",a);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw em(n,f,h);Bt(n,f)}}catch(s){if(s instanceof Rn)throw s;Bt(n,"network-request-failed",{message:String(s)})}}async function ba(n,e,t,r,s={}){const i=await Xn(n,e,t,r,s);return"mfaPendingCredential"in i&&Bt(n,"multi-factor-auth-required",{_serverResponse:i}),i}function rm(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?gu(n.config,s):`${n.config.apiScheme}://${s}`}function vA(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class EA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Xt(this.auth,"network-request-failed")),yA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ao(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Xt(n,e,r);return s.customData._tokenResponse=t,s}function Yd(n){return n!==void 0&&n.enterprise!==void 0}class wA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return vA(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function TA(n,e){return Xn(n,"GET","/v2/recaptchaConfig",Ar(n,e))}/**
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
 */async function IA(n,e){return Xn(n,"POST","/v1/accounts:delete",e)}async function sm(n,e){return Xn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function ei(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function AA(n,e=!1){const t=Fe(n),r=await t.getIdToken(e),s=mu(r);oe(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ei(_l(s.auth_time)),issuedAtTime:ei(_l(s.iat)),expirationTime:ei(_l(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function _l(n){return Number(n)*1e3}function mu(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return _o("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ip(t);return s?JSON.parse(s):(_o("Failed to decode base64 JWT payload"),null)}catch(s){return _o("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Jd(n){const e=mu(n);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function gi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Rn&&bA(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function bA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class RA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class rc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ei(this.lastLoginAt),this.creationTime=ei(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function jo(n){var e;const t=n.auth,r=await n.getIdToken(),s=await gi(n,sm(t,{idToken:r}));oe(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?im(i.providerUserInfo):[],l=PA(n.providerData,a),c=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new rc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,p)}async function SA(n){const e=Fe(n);await jo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function PA(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function im(n){return n.map(e=>{var{providerId:t}=e,r=fu(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function CA(n,e){const t=await nm(n,{},async()=>{const r=Ii({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=rm(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",tm.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function kA(n,e){return Xn(n,"POST","/v2/accounts:revokeToken",Ar(n,e))}/**
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
 */class zr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const t=Jd(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await CA(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new zr;return r&&(oe(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(oe(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(oe(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zr,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
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
 */function Vn(n,e){oe(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class _n{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=fu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new RA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new rc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await gi(this,this.stsTokenManager.getToken(this.auth,e));return oe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return AA(this,e)}reload(){return SA(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new _n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await jo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gn(this.auth.app))return Promise.reject(Wn(this.auth));const e=await this.getIdToken();return await gi(this,IA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,l,c,h,f;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,_=(s=t.email)!==null&&s!==void 0?s:void 0,A=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,P=(a=t.photoURL)!==null&&a!==void 0?a:void 0,C=(l=t.tenantId)!==null&&l!==void 0?l:void 0,k=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,j=(h=t.createdAt)!==null&&h!==void 0?h:void 0,B=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:Q,emailVerified:H,isAnonymous:ie,providerData:de,stsTokenManager:T}=t;oe(Q&&T,e,"internal-error");const m=zr.fromJSON(this.name,T);oe(typeof Q=="string",e,"internal-error"),Vn(p,e.name),Vn(_,e.name),oe(typeof H=="boolean",e,"internal-error"),oe(typeof ie=="boolean",e,"internal-error"),Vn(A,e.name),Vn(P,e.name),Vn(C,e.name),Vn(k,e.name),Vn(j,e.name),Vn(B,e.name);const y=new _n({uid:Q,auth:e,email:_,emailVerified:H,displayName:p,isAnonymous:ie,photoURL:P,phoneNumber:A,tenantId:C,stsTokenManager:m,createdAt:j,lastLoginAt:B});return de&&Array.isArray(de)&&(y.providerData=de.map(I=>Object.assign({},I))),k&&(y._redirectEventId=k),y}static async _fromIdTokenResponse(e,t,r=!1){const s=new zr;s.updateFromServerResponse(t);const i=new _n({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await jo(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];oe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?im(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new zr;l.updateFromIdToken(r);const c=new _n({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new rc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
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
 */const Xd=new Map;function yn(n){An(n instanceof Function,"Expected a class definition");let e=Xd.get(n);return e?(An(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Xd.set(n,e),e)}/**
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
 */class om{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}om.type="NONE";const Zd=om;/**
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
 */function yo(n,e,t){return`firebase:${n}:${e}:${t}`}class Gr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=yo(this.userKey,s.apiKey,i),this.fullPersistenceKey=yo("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_n._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Gr(yn(Zd),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||yn(Zd);const a=yo(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(a);if(f){const p=_n._fromJSON(e,f);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Gr(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Gr(i,e,r))}}/**
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
 */function ef(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(um(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(am(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dm(e))return"Blackberry";if(fm(e))return"Webos";if(lm(e))return"Safari";if((e.includes("chrome/")||cm(e))&&!e.includes("edge/"))return"Chrome";if(hm(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function am(n=dt()){return/firefox\//i.test(n)}function lm(n=dt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cm(n=dt()){return/crios\//i.test(n)}function um(n=dt()){return/iemobile/i.test(n)}function hm(n=dt()){return/android/i.test(n)}function dm(n=dt()){return/blackberry/i.test(n)}function fm(n=dt()){return/webos/i.test(n)}function _u(n=dt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function VA(n=dt()){var e;return _u(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function DA(){return $v()&&document.documentMode===10}function pm(n=dt()){return _u(n)||hm(n)||fm(n)||dm(n)||/windows phone/i.test(n)||um(n)}/**
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
 */function gm(n,e=[]){let t;switch(n){case"Browser":t=ef(dt());break;case"Worker":t=`${ef(dt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ls}/${r}`}/**
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
 */class NA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function OA(n,e={}){return Xn(n,"GET","/v2/passwordPolicy",Ar(n,e))}/**
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
 */const xA=6;class MA{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:xA,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class LA{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tf(this),this.idTokenSubscription=new tf(this),this.beforeStateQueue=new NA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=yn(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Gr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await sm(this,{idToken:e}),r=await _n._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(gn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await jo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gn(this.app))return Promise.reject(Wn(this));const t=e?Fe(e):null;return t&&oe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gn(this.app)?Promise.reject(Wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gn(this.app)?Promise.reject(Wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await OA(this),t=new MA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ti("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await kA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&yn(e)||this._popupRedirectResolver;oe(t,this,"argument-error"),this.redirectPersistenceManager=await Gr.create(this,[yn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&fA(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ds(n){return Fe(n)}class tf{constructor(e){this.auth=e,this.observer=null,this.addObserver=Qv(t=>this.observer=t)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ra={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function FA(n){Ra=n}function mm(n){return Ra.loadJS(n)}function UA(){return Ra.recaptchaEnterpriseScript}function BA(){return Ra.gapiScript}function $A(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const jA="recaptcha-enterprise",qA="NO_RECAPTCHA";class WA{constructor(e){this.type=jA,this.auth=ds(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{TA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new wA(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,a,l){const c=window.grecaptcha;Yd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(qA)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,a)=>{r(this.auth).then(l=>{if(!t&&Yd(window.grecaptcha))s(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=UA();c.length!==0&&(c+=l),mm(c).then(()=>{s(l,i,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function nf(n,e,t,r=!1){const s=new WA(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function rf(n,e,t,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await nf(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await nf(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(i)})}/**
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
 */function HA(n,e){const t=Rc(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(ko(i,e??{}))return s;Bt(s,"already-initialized")}return t.initialize({options:e})}function KA(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(yn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function zA(n,e,t){const r=ds(n);oe(r._canInitEmulator,r,"emulator-config-failed"),oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=_m(e),{host:a,port:l}=GA(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),QA()}function _m(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function GA(n){const e=_m(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:sf(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:sf(a)}}}function sf(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function QA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class yu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,t){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}async function YA(n,e){return Xn(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function JA(n,e){return ba(n,"POST","/v1/accounts:signInWithPassword",Ar(n,e))}/**
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
 */async function XA(n,e){return ba(n,"POST","/v1/accounts:signInWithEmailLink",Ar(n,e))}async function ZA(n,e){return ba(n,"POST","/v1/accounts:signInWithEmailLink",Ar(n,e))}/**
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
 */class mi extends yu{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new mi(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new mi(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rf(e,t,"signInWithPassword",JA);case"emailLink":return XA(e,{email:this._email,oobCode:this._password});default:Bt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rf(e,r,"signUpPassword",YA);case"emailLink":return ZA(e,{idToken:t,email:this._email,oobCode:this._password});default:Bt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Qr(n,e){return ba(n,"POST","/v1/accounts:signInWithIdp",Ar(n,e))}/**
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
 */const eb="http://localhost";class Er extends yu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Er(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Bt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=fu(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Er(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Qr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Qr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qr(e,t)}buildRequest(){const e={requestUri:eb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ii(t)}return e}}/**
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
 */function tb(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nb(n){const e=Ls(Fs(n)).link,t=e?Ls(Fs(e)).deep_link_id:null,r=Ls(Fs(n)).deep_link_id;return(r?Ls(Fs(r)).link:null)||r||t||e||n}class vu{constructor(e){var t,r,s,i,a,l;const c=Ls(Fs(e)),h=(t=c.apiKey)!==null&&t!==void 0?t:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,p=tb((s=c.mode)!==null&&s!==void 0?s:null);oe(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=nb(e);try{return new vu(t)}catch{return null}}}/**
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
 */class fs{constructor(){this.providerId=fs.PROVIDER_ID}static credential(e,t){return mi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=vu.parseLink(t);return oe(r,"argument-error"),mi._fromEmailAndCode(e,r.code,r.tenantId)}}fs.PROVIDER_ID="password";fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ym{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ni extends ym{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class On extends Ni{constructor(){super("facebook.com")}static credential(e){return Er._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.FACEBOOK_SIGN_IN_METHOD="facebook.com";On.PROVIDER_ID="facebook.com";/**
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
 */class xn extends Ni{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Er._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return xn.credential(t,r)}catch{return null}}}xn.GOOGLE_SIGN_IN_METHOD="google.com";xn.PROVIDER_ID="google.com";/**
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
 */class Mn extends Ni{constructor(){super("github.com")}static credential(e){return Er._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.GITHUB_SIGN_IN_METHOD="github.com";Mn.PROVIDER_ID="github.com";/**
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
 */class Ln extends Ni{constructor(){super("twitter.com")}static credential(e,t){return Er._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Ln.credential(t,r)}catch{return null}}}Ln.TWITTER_SIGN_IN_METHOD="twitter.com";Ln.PROVIDER_ID="twitter.com";/**
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
 */class as{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await _n._fromIdTokenResponse(e,r,s),a=of(r);return new as({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=of(r);return new as({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function of(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class qo extends Rn{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,qo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new qo(e,t,r,s)}}function vm(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?qo._fromErrorAndOperation(n,i,e,r):i})}async function rb(n,e,t=!1){const r=await gi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return as._forOperation(n,"link",r)}/**
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
 */async function sb(n,e,t=!1){const{auth:r}=n;if(gn(r.app))return Promise.reject(Wn(r));const s="reauthenticate";try{const i=await gi(n,vm(r,s,e,n),t);oe(i.idToken,r,"internal-error");const a=mu(i.idToken);oe(a,r,"internal-error");const{sub:l}=a;return oe(n.uid===l,r,"user-mismatch"),as._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Bt(r,"user-mismatch"),i}}/**
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
 */async function Em(n,e,t=!1){if(gn(n.app))return Promise.reject(Wn(n));const r="signIn",s=await vm(n,r,e),i=await as._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function ib(n,e){return Em(ds(n),e)}/**
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
 */async function ob(n){const e=ds(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function ab(n,e,t){return gn(n.app)?Promise.reject(Wn(n)):ib(Fe(n),fs.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ob(n),r})}function lb(n,e,t,r){return Fe(n).onIdTokenChanged(e,t,r)}function cb(n,e,t){return Fe(n).beforeAuthStateChanged(e,t)}function ub(n,e,t,r){return Fe(n).onAuthStateChanged(e,t,r)}function hb(n){return Fe(n).signOut()}const Wo="__sak";/**
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
 */class wm{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Wo,"1"),this.storage.removeItem(Wo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const db=1e3,fb=10;class Tm extends wm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=pm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);DA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,fb):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},db)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Tm.type="LOCAL";const pb=Tm;/**
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
 */class Im extends wm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Im.type="SESSION";const Am=Im;/**
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
 */function gb(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Sa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Sa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(t.origin,i)),c=await gb(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sa.receivers=[];/**
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
 */function Eu(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class mb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const h=Eu("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const _=p;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(_.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Zt(){return window}function _b(n){Zt().location.href=n}/**
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
 */function bm(){return typeof Zt().WorkerGlobalScope<"u"&&typeof Zt().importScripts=="function"}async function yb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vb(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Eb(){return bm()?self:null}/**
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
 */const Rm="firebaseLocalStorageDb",wb=1,Ho="firebaseLocalStorage",Sm="fbase_key";class Oi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Pa(n,e){return n.transaction([Ho],e?"readwrite":"readonly").objectStore(Ho)}function Tb(){const n=indexedDB.deleteDatabase(Rm);return new Oi(n).toPromise()}function sc(){const n=indexedDB.open(Rm,wb);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ho,{keyPath:Sm})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ho)?e(r):(r.close(),await Tb(),e(await sc()))})})}async function af(n,e,t){const r=Pa(n,!0).put({[Sm]:e,value:t});return new Oi(r).toPromise()}async function Ib(n,e){const t=Pa(n,!1).get(e),r=await new Oi(t).toPromise();return r===void 0?null:r.value}function lf(n,e){const t=Pa(n,!0).delete(e);return new Oi(t).toPromise()}const Ab=800,bb=3;class Pm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>bb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sa._getInstance(Eb()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await yb(),!this.activeServiceWorker)return;this.sender=new mb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sc();return await af(e,Wo,"1"),await lf(e,Wo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>af(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Ib(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>lf(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Pa(s,!1).getAll();return new Oi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ab)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pm.type="LOCAL";const Rb=Pm;new Di(3e4,6e4);/**
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
 */function Sb(n,e){return e?yn(e):(oe(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class wu extends yu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Qr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Qr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Pb(n){return Em(n.auth,new wu(n),n.bypassAuthState)}function Cb(n){const{auth:e,user:t}=n;return oe(t,e,"internal-error"),sb(t,new wu(n),n.bypassAuthState)}async function kb(n){const{auth:e,user:t}=n;return oe(t,e,"internal-error"),rb(t,new wu(n),n.bypassAuthState)}/**
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
 */class Cm{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Pb;case"linkViaPopup":case"linkViaRedirect":return kb;case"reauthViaPopup":case"reauthViaRedirect":return Cb;default:Bt(this.auth,"internal-error")}}resolve(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Vb=new Di(2e3,1e4);class Ur extends Cm{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ur.currentPopupAction&&Ur.currentPopupAction.cancel(),Ur.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){An(this.filter.length===1,"Popup operations only handle one event");const e=Eu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ur.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Vb.get())};e()}}Ur.currentPopupAction=null;/**
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
 */const Db="pendingRedirect",vo=new Map;class Nb extends Cm{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=vo.get(this.auth._key());if(!e){try{const r=await Ob(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}vo.set(this.auth._key(),e)}return this.bypassAuthState||vo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ob(n,e){const t=Lb(e),r=Mb(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function xb(n,e){vo.set(n._key(),e)}function Mb(n){return yn(n._redirectPersistence)}function Lb(n){return yo(Db,n.config.apiKey,n.name)}async function Fb(n,e,t=!1){if(gn(n.app))return Promise.reject(Wn(n));const r=ds(n),s=Sb(r,e),a=await new Nb(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const Ub=10*60*1e3;class Bb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$b(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!km(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Xt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ub&&this.cachedEventUids.clear(),this.cachedEventUids.has(cf(e))}saveEventToCache(e){this.cachedEventUids.add(cf(e)),this.lastProcessedEventTime=Date.now()}}function cf(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function km({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $b(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return km(n);default:return!1}}/**
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
 */async function jb(n,e={}){return Xn(n,"GET","/v1/projects",e)}/**
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
 */const qb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Wb=/^https?/;async function Hb(n){if(n.config.emulator)return;const{authorizedDomains:e}=await jb(n);for(const t of e)try{if(Kb(t))return}catch{}Bt(n,"unauthorized-domain")}function Kb(n){const e=nc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Wb.test(t))return!1;if(qb.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const zb=new Di(3e4,6e4);function uf(){const n=Zt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Gb(n){return new Promise((e,t)=>{var r,s,i;function a(){uf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{uf(),t(Xt(n,"network-request-failed"))},timeout:zb.get()})}if(!((s=(r=Zt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Zt().gapi)===null||i===void 0)&&i.load)a();else{const l=$A("iframefcb");return Zt()[l]=()=>{gapi.load?a():t(Xt(n,"network-request-failed"))},mm(`${BA()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw Eo=null,e})}let Eo=null;function Qb(n){return Eo=Eo||Gb(n),Eo}/**
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
 */const Yb=new Di(5e3,15e3),Jb="__/auth/iframe",Xb="emulator/auth/iframe",Zb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},e0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function t0(n){const e=n.config;oe(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?gu(e,Xb):`https://${n.config.authDomain}/${Jb}`,r={apiKey:e.apiKey,appName:n.name,v:ls},s=e0.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Ii(r).slice(1)}`}async function n0(n){const e=await Qb(n),t=Zt().gapi;return oe(t,n,"internal-error"),e.open({where:document.body,url:t0(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Zb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Xt(n,"network-request-failed"),l=Zt().setTimeout(()=>{i(a)},Yb.get());function c(){Zt().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
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
 */const r0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},s0=500,i0=600,o0="_blank",a0="http://localhost";class hf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function l0(n,e,t,r=s0,s=i0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},r0),{width:r.toString(),height:s.toString(),top:i,left:a}),h=dt().toLowerCase();t&&(l=cm(h)?o0:t),am(h)&&(e=e||a0,c.scrollbars="yes");const f=Object.entries(c).reduce((_,[A,P])=>`${_}${A}=${P},`,"");if(VA(h)&&l!=="_self")return c0(e||"",l),new hf(null);const p=window.open(e||"",l,f);oe(p,n,"popup-blocked");try{p.focus()}catch{}return new hf(p)}function c0(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const u0="__/auth/handler",h0="emulator/auth/handler",d0=encodeURIComponent("fac");async function df(n,e,t,r,s,i){oe(n.config.authDomain,n,"auth-domain-config-required"),oe(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ls,eventId:s};if(e instanceof ym){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Gv(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(e instanceof Ni){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await n._getAppCheckToken(),h=c?`#${d0}=${encodeURIComponent(c)}`:"";return`${f0(n)}?${Ii(l).slice(1)}${h}`}function f0({config:n}){return n.emulator?gu(n,h0):`https://${n.authDomain}/${u0}`}/**
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
 */const yl="webStorageSupport";class p0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Am,this._completeRedirectFn=Fb,this._overrideRedirectResult=xb}async _openPopup(e,t,r,s){var i;An((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await df(e,t,r,nc(),s);return l0(e,a,Eu())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await df(e,t,r,nc(),s);return _b(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(An(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await n0(e),r=new Bb(e);return t.register("authEvent",s=>(oe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(yl,{type:yl},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[yl];a!==void 0&&t(!!a),Bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Hb(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return pm()||lm()||_u()}}const g0=p0;var ff="@firebase/auth",pf="1.7.9";/**
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
 */class m0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function _0(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function y0(n){Xr(new mr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;oe(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gm(n)},h=new LA(r,s,i,c);return KA(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Xr(new mr("auth-internal",e=>{const t=ds(e.getProvider("auth").getImmediate());return(r=>new m0(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),jn(ff,pf,_0(n)),jn(ff,pf,"esm2017")}/**
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
 */const v0=5*60,E0=Rp("authIdTokenMaxAge")||v0;let gf=null;const w0=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>E0)return;const s=t==null?void 0:t.token;gf!==s&&(gf=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function T0(n=kp()){const e=Rc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=HA(n,{popupRedirectResolver:g0,persistence:[Rb,pb,Am]}),r=Rp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=w0(i.toString());cb(t,a,()=>a(t.currentUser)),lb(t,l=>a(l))}}const s=Ap("auth");return s&&zA(t,`http://${s}`),t}function I0(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}FA({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Xt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",I0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});y0("Browser");const A0={apiKey:"AIzaSyBTn3Z_B1MYRJ-hOsL0I94QWBq2xh3EdFs",authDomain:"henryshus.firebaseapp.com",projectId:"henryshus",storageBucket:"henryshus.firebasestorage.app",messagingSenderId:"877597619520",appId:"1:877597619520:web:61e33ff74b9f03aa45f6a5",measurementId:"G-ESKWZ556XM"},Vm=Cp(A0),Pt=HI(Vm),vl=T0(Vm);function Dm(){const n=Pe([]),e=Pe([]),t=Pe(!1);let r=null,s=null;function i(){r||(r=zd(oo(Pt,"workstations"),A=>{const P=[];A.forEach(C=>{P.push({id:C.id,...C.data()})}),P.sort((C,k)=>C.name.localeCompare(k.name,"nb")),n.value=P},A=>console.error("Workstations error:",A)))}function a(){if(s)return;const A=pl(oo(Pt,"borrowRecords"),eA("returnedAt","==",null));s=zd(A,P=>{const C=[];P.forEach(k=>{C.push({id:k.id,...k.data()})}),C.sort((k,j)=>{var B,Q;return(((B=j.borrowedAt)==null?void 0:B.toMillis())??0)-(((Q=k.borrowedAt)==null?void 0:Q.toMillis())??0)}),e.value=C},P=>console.error("Active borrows error:",P))}Zo(()=>{r&&r(),s&&s()});async function l(A,P,C){const k=Gd(Pt),j=ar(oo(Pt,"borrowRecords")),B=ar(Pt,"workstations",A);k.update(B,{status:"borrowed",borrower:P,borrowedAt:ml(),currentBorrowRecord:j.id}),k.set(j,{workstation:A,borrower:P,borrowedAt:ml(),returnedAt:null,controllers:C??null}),await k.commit()}async function c(A){const P=ar(Pt,"workstations",A),C=await Hd(P);if(!C.exists())return;const k=C.data().currentBorrowRecord,j=Gd(Pt);j.update(P,{status:"available",borrower:null,borrowedAt:null,currentBorrowRecord:null}),k&&j.update(ar(Pt,"borrowRecords",k),{returnedAt:ml()}),await j.commit()}async function h(A=20,P){let C=pl(oo(Pt,"borrowRecords"),tA("borrowedAt","desc"),nA(A));P&&(C=pl(C,rA(P)));const k=await aA(C),j=[];let B=null;return k.forEach(Q=>{j.push({id:Q.id,...Q.data()}),B=Q}),{records:j,lastVisible:B}}async function f(){const A=[{name:"PlayStation",type:"playstation",keyboard:"Kontroller x2",mouse:""},{name:"PlayStation 2",type:"playstation",keyboard:"Kontroller x2",mouse:""},{name:"PC 1",type:"pc",keyboard:"Keyboard 1",mouse:"Mouse 1"},{name:"PC 2",type:"pc",keyboard:"Keyboard 2",mouse:"Mouse 2"},{name:"PC 3",type:"pc",keyboard:"Keyboard 3",mouse:"Mouse 3"}];for(const P of A){const C=ar(Pt,"workstations",P.name);(await Hd(C)).exists()||await Kd(C,{name:P.name,type:P.type,keyboard:P.keyboard,mouse:P.mouse,status:"available",borrower:null,borrowedAt:null,currentBorrowRecord:null})}}async function p(A,P,C,k){await Kd(ar(Pt,"workstations",A),{name:A,type:P,keyboard:C||"",mouse:k||"",status:"available",borrower:null,borrowedAt:null,currentBorrowRecord:null})}async function _(A){await lA(ar(Pt,"workstations",A))}return{workstations:n,activeBorrows:e,loading:t,subscribeWorkstations:i,subscribeActiveBorrows:a,borrowWorkstation:l,returnWorkstation:c,getHistory:h,seedDefaultWorkstations:f,addWorkstation:p,removeWorkstation:_}}const El=Pe(null);let Ns=null;function Tu(){Ns||(Ns=ub(vl,r=>{El.value=r})),Zo(()=>{Ns&&(Ns(),Ns=null)});async function n(r,s){await ab(vl,r,s)}async function e(){await hb(vl)}function t(){return El.value!==null}return{currentUser:El,login:n,logout:e,isAdmin:t}}const b0={class:"student-layout"},R0={key:0,class:"init-load"},S0={key:1,class:"ws-scroll"},P0={key:0,class:"ps-row"},C0=["onClick","onKeydown"],k0={class:"ws-bar-inner"},V0={class:"ws-bar-name"},D0={key:0,class:"ws-bar-detail"},N0={class:"ws-row"},O0=["onClick","onKeydown"],x0={class:"ws-block-inner"},M0={class:"ws-block-name"},L0={key:0,class:"ws-block-detail"},F0={class:"modal"},U0={class:"form-group"},B0={key:0,class:"form-group"},$0={class:"ctrl-select"},j0={class:"modal-actions"},q0=["disabled"],W0={class:"modal"},H0={class:"form-group"},K0={class:"form-group"},z0={class:"modal-actions"},G0={key:0,class:"error-message"},Q0=Ei({__name:"StudentView",setup(n){const e=At("currentView"),t=At("showToast"),r=At("loading"),{workstations:s,subscribeWorkstations:i,borrowWorkstation:a}=Dm(),{login:l}=Tu(),c=Pe(!1),h=Pe(null),f=Pe(""),p=Pe(2),_=Pe(null),A=Pe(!1),P=Pe(""),C=Pe(""),k=Pe(""),j=Pe(null);async function B(){k.value="",r.value=!0;try{await l(P.value,C.value),A.value=!1,P.value="",C.value="",e.value="admin"}catch(I){const v=I.code;v==="auth/user-not-found"?k.value="Bruker ikke funnet":v==="auth/wrong-password"?k.value="Feil passord":v==="auth/invalid-email"?k.value="Ugyldig e-post":v==="auth/too-many-requests"?k.value="For mange forsøk. Prøv igjen senere.":k.value="Feil e-post eller passord"}finally{r.value=!1}}const Q=Fr(()=>s.value.filter(I=>I.type==="playstation")),H=Fr(()=>s.value.filter(I=>I.type==="pc")),ie=Fr(()=>s.value.find(I=>I.id===h.value)),de=Fr(()=>{var I;return((I=ie.value)==null?void 0:I.type)==="playstation"});function T(I){h.value=I,f.value="",p.value=2,c.value=!0,Sl(()=>{var v;return(v=_.value)==null?void 0:v.focus()})}function m(){c.value=!1,h.value=null,f.value=""}async function y(){const I=f.value.trim();if(!(!I||!h.value)){r.value=!0;try{await a(h.value,I,de.value?p.value:void 0),c.value=!1,t(`Du låner ${h.value}`,"success"),h.value=null,f.value=""}catch(v){console.error(v),t("Kunne ikke fullføre lånet","error")}finally{r.value=!1}}}return Ec(()=>i()),(I,v)=>(ae(),ge("div",b0,[O("button",{class:"admin-corner",onClick:v[0]||(v[0]=b=>{A.value=!0,Sl(()=>{var w;return(w=j.value)==null?void 0:w.focus()})})},"Admin"),Lr(s).length===0?(ae(),ge("div",R0,[...v[10]||(v[10]=[O("div",{class:"loader-ring"},null,-1),O("p",null,"Laster...",-1)])])):(ae(),ge("div",S0,[Q.value.length?(ae(),ge("div",P0,[(ae(!0),ge(Ze,null,hr(Q.value,b=>(ae(),ge("div",{key:b.id,class:mt(["ws-bar",b.status]),tabindex:"0",role:"button",onClick:w=>b.status==="available"&&T(b.id),onKeydown:sl(w=>b.status==="available"&&T(b.id),["enter"])},[O("div",k0,[O("div",V0,Se(b.name),1),b.keyboard?(ae(),ge("div",D0,Se(b.keyboard),1)):Xe("",!0),O("div",{class:mt(["ws-block-badge",b.status])},Se(b.status==="available"?"Trykk for å låne":"Opptatt"),3)])],42,C0))),128))])):Xe("",!0),O("div",N0,[(ae(!0),ge(Ze,null,hr(H.value,b=>(ae(),ge("div",{key:b.id,class:mt(["ws-block",b.status]),tabindex:"0",role:"button",onClick:w=>b.status==="available"&&T(b.id),onKeydown:sl(w=>b.status==="available"&&T(b.id),["enter"])},[O("div",x0,[O("div",M0,Se(b.name),1),b.keyboard||b.mouse?(ae(),ge("div",L0,Se([b.keyboard,b.mouse].filter(Boolean).join(" · ")),1)):Xe("",!0),O("div",{class:mt(["ws-block-badge",b.status])},Se(b.status==="available"?"Trykk for å låne":"Opptatt"),3)])],42,O0))),128))])])),(ae(),Wr(Th,{to:"body"},[c.value&&ie.value?(ae(),ge("div",{key:0,class:"modal-overlay",onClick:Ys(m,["self"])},[O("div",F0,[O("h3",null,Se(ie.value.name),1),v[13]||(v[13]=O("p",{class:"modal-sub"},"Skriv navnet ditt for å låne",-1)),O("div",U0,[v[11]||(v[11]=O("label",{for:"name-input"},"Ditt navn",-1)),Ot(O("input",{id:"name-input",ref_key:"nameInput",ref:_,"onUpdate:modelValue":v[1]||(v[1]=b=>f.value=b),class:"input",placeholder:"Skriv her...",autocomplete:"name",onKeydown:sl(y,["enter"])},null,544),[[Un,f.value]])]),de.value?(ae(),ge("div",B0,[v[12]||(v[12]=O("label",{for:"ctrl-input"},"Antall kontrollere",-1)),O("div",$0,[O("button",{class:mt(["ctrl-btn",{active:p.value===1}]),onClick:v[2]||(v[2]=b=>p.value=1)},"1",2),O("button",{class:mt(["ctrl-btn",{active:p.value===2}]),onClick:v[3]||(v[3]=b=>p.value=2)},"2",2),O("button",{class:mt(["ctrl-btn",{active:p.value===3}]),onClick:v[4]||(v[4]=b=>p.value=3)},"3",2),O("button",{class:mt(["ctrl-btn",{active:p.value===4}]),onClick:v[5]||(v[5]=b=>p.value=4)},"4",2)])])):Xe("",!0),O("div",j0,[O("button",{class:"btn btn-primary btn-full",disabled:!f.value.trim(),onClick:y}," Bekreft lån ",8,q0),O("button",{class:"btn btn-secondary btn-full",onClick:m},"Avbryt")])])])):Xe("",!0)])),(ae(),Wr(Th,{to:"body"},[A.value?(ae(),ge("div",{key:0,class:"modal-overlay",onClick:v[9]||(v[9]=Ys(b=>A.value=!1,["self"]))},[O("div",W0,[v[17]||(v[17]=O("h3",null,"Admin",-1)),v[18]||(v[18]=O("p",{class:"modal-sub"},"Logg inn for å administrere",-1)),O("form",{onSubmit:Ys(B,["prevent"])},[O("div",H0,[v[14]||(v[14]=O("label",{for:"login-email"},"E-post",-1)),Ot(O("input",{id:"login-email",ref_key:"emailInput",ref:j,"onUpdate:modelValue":v[6]||(v[6]=b=>P.value=b),class:"input",type:"email",placeholder:"admin@example.com",autocomplete:"email",required:""},null,512),[[Un,P.value]])]),O("div",K0,[v[15]||(v[15]=O("label",{for:"login-password"},"Passord",-1)),Ot(O("input",{id:"login-password","onUpdate:modelValue":v[7]||(v[7]=b=>C.value=b),class:"input",type:"password",placeholder:"Passord",autocomplete:"current-password",required:""},null,512),[[Un,C.value]])]),O("div",z0,[v[16]||(v[16]=O("button",{type:"submit",class:"btn btn-primary btn-full"},"Logg inn",-1)),O("button",{type:"button",class:"btn btn-secondary btn-full",onClick:v[8]||(v[8]=b=>A.value=!1)},"Avbryt")]),k.value?(ae(),ge("p",G0,Se(k.value),1)):Xe("",!0)],32)])])):Xe("",!0)]))]))}}),Iu=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},Y0=Iu(Q0,[["__scopeId","data-v-8bb9bfba"]]),J0={class:"view active"},X0={class:"header"},Z0={class:"header-top"},eR={class:"content"},tR={class:"card login-card"},nR={class:"form-group"},rR={class:"form-group"},sR={key:0,class:"error-message"},iR=Ei({__name:"LoginView",setup(n){const e=At("currentView");At("showToast");const t=At("loading"),{login:r}=Tu(),s=Pe(""),i=Pe(""),a=Pe("");async function l(){a.value="",t.value=!0;try{await r(s.value,i.value),e.value="admin"}catch(c){const h=c.code;h==="auth/user-not-found"?a.value="Bruker ikke funnet":h==="auth/wrong-password"?a.value="Feil passord":h==="auth/invalid-email"?a.value="Ugyldig e-post":h==="auth/too-many-requests"?a.value="For mange forsøk. Prøv igjen senere.":a.value="Feil e-post eller passord"}finally{t.value=!1}}return(c,h)=>(ae(),ge("div",J0,[O("header",X0,[O("div",Z0,[O("button",{class:"btn-text back-btn",onClick:h[0]||(h[0]=f=>e.value="student")}," ← Tilbake "),h[3]||(h[3]=O("h1",{class:"header-title"},"Admin",-1))])]),O("main",eR,[O("section",tR,[O("form",{onSubmit:Ys(l,["prevent"])},[O("div",nR,[h[4]||(h[4]=O("label",{for:"login-email"},"E-post",-1)),Ot(O("input",{id:"login-email","onUpdate:modelValue":h[1]||(h[1]=f=>s.value=f),class:"input",type:"email",placeholder:"admin@example.com",autocomplete:"email",required:""},null,512),[[Un,s.value]])]),O("div",rR,[h[5]||(h[5]=O("label",{for:"login-password"},"Passord",-1)),Ot(O("input",{id:"login-password","onUpdate:modelValue":h[2]||(h[2]=f=>i.value=f),class:"input",type:"password",placeholder:"Passord",autocomplete:"current-password",required:""},null,512),[[Un,i.value]])]),h[6]||(h[6]=O("button",{type:"submit",class:"btn btn-primary btn-full"},"Logg inn",-1)),a.value?(ae(),ge("p",sR,Se(a.value),1)):Xe("",!0)],32)])])]))}}),oR=["innerHTML"],aR=Ei({__name:"SfIcon",props:{name:{},size:{}},setup(n){const e={gamecontroller:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M6 12H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2" />
  <rect x="6" y="12" width="12" height="8" rx="2" />
  <circle cx="9" cy="16" r="1" fill="currentColor" />
  <circle cx="15" cy="16" r="1" fill="currentColor" />
  <path d="M10 12v-2M14 12v-2" />
</svg>`,desktopcomputer:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="3" width="20" height="14" rx="2" />
  <line x1="8" y1="21" x2="16" y2="21" />
  <line x1="12" y1="17" x2="12" y2="21" />
</svg>`,"chevron.left":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="15 18 9 12 15 6" />
</svg>`,"rectangle.stack":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="4" width="18" height="6" rx="1" />
  <rect x="3" y="11" width="18" height="9" rx="1" />
</svg>`,"list.bullet":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="8" y1="6" x2="21" y2="6" />
  <line x1="8" y1="12" x2="21" y2="12" />
  <line x1="8" y1="18" x2="21" y2="18" />
  <circle cx="4" cy="6" r="1" fill="currentColor" />
  <circle cx="4" cy="12" r="1" fill="currentColor" />
  <circle cx="4" cy="18" r="1" fill="currentColor" />
</svg>`,gearshape:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="3" />
  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
</svg>`,"arrow.right.square":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="3" width="18" height="18" rx="2" />
  <line x1="12" y1="8" x2="16" y2="12" />
  <line x1="12" y1="16" x2="16" y2="12" />
  <line x1="8" y1="12" x2="16" y2="12" />
</svg>`,xmark:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="18" y1="6" x2="6" y2="18" />
  <line x1="6" y1="6" x2="18" y2="18" />
</svg>`,"tray.and.arrow.down":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="7 10 12 15 17 10" />
  <line x1="12" y1="15" x2="12" y2="3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
</svg>`,"checkmark.circle.fill":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
  <polyline points="22 4 12 14.01 9 11.01" />
</svg>`};return(t,r)=>(ae(),ge("span",{class:"sf-icon",style:yi({width:(n.size??20)+"px",height:(n.size??20)+"px"}),innerHTML:e[n.name]},null,12,oR))}}),wl=Iu(aR,[["__scopeId","data-v-8bfe09d2"]]),lR={class:"admin-split"},cR={class:"sidebar"},uR={class:"sidebar-nav"},hR=["onClick"],dR={class:"sidebar-item-icon"},fR={class:"sidebar-item-label"},pR={class:"sidebar-footer"},gR={class:"sidebar-footer-text"},mR={class:"admin-content"},_R={key:0,class:"empty-state"},yR={key:1,class:"borrows-list"},vR={class:"borrow-card-info"},ER={key:0,class:"borrow-card-time"},wR={class:"borrow-card-time"},TR=["onClick"],IR={key:0,class:"empty-state"},AR={key:1,class:"borrows-list"},bR={class:"borrow-card-info"},RR={key:0,class:"borrow-card-time"},SR={class:"borrow-card-time"},PR={key:0},CR={class:"workstations-manage-list"},kR={class:"ws-name"},VR={class:"ws-status"},DR=["onClick"],NR={key:0,class:"empty-state"},OR={class:"form-group"},xR={class:"form-group"},MR={style:{display:"flex",gap:"8px"}},LR={class:"form-group"},FR={for:"new-keyboard"},UR=["placeholder"],BR={key:0,class:"form-group"},$R=Ei({__name:"AdminView",setup(n){const e=At("currentView"),t=At("showToast"),r=At("loading"),{currentUser:s,logout:i}=Tu(),{workstations:a,activeBorrows:l,subscribeWorkstations:c,subscribeActiveBorrows:h,returnWorkstation:f,getHistory:p,seedDefaultWorkstations:_,addWorkstation:A,removeWorkstation:P}=Dm(),C=Pe("borrows"),k=[{key:"borrows",label:"Utlån",icon:"📋"},{key:"history",label:"Historikk",icon:"🕐"},{key:"manage",label:"Enheter",icon:"⚙️"}],j=Fr(()=>{var X;return((X=s.value)==null?void 0:X.email)??""}),B=Pe([]),Q=Pe(null),H=Pe(""),ie=Pe("pc"),de=Pe(""),T=Pe("");async function m(){await i(),e.value="student"}async function y(X){if(confirm(`Returner ${X}?`)){r.value=!0;try{await f(X),t(`${X} er returnert`,"success")}catch($){console.error($),t("Kunne ikke returnere","error")}finally{r.value=!1}}}async function I(X=!1){r.value=!0;try{const $=await p(20,X?Q.value:null);Q.value=$.lastVisible,X?B.value.push(...$.records):B.value=$.records}catch($){console.error($),t("Kunne ikke laste historikk","error")}finally{r.value=!1}}async function v(){if(confirm("Sett inn standardenheter (PC 1, PC 2, PC 3)?")){r.value=!0;try{await _(),t("Standardenheter er lagt til","success")}catch(X){console.error(X),t("Kunne ikke sette inn enheter","error")}finally{r.value=!1}}}async function b(){if(H.value.trim()){r.value=!0;try{await A(H.value.trim(),ie.value,de.value.trim(),T.value.trim()),t(`${H.value} er lagt til`,"success"),H.value="",de.value="",T.value=""}catch(X){console.error(X),t("Kunne ikke legge til enheten","error")}finally{r.value=!1}}}async function w(X){if(confirm(`Fjern ${X}?`)){r.value=!0;try{await P(X),t(`${X} er fjernet`,"success")}catch($){console.error($),t("Kunne ikke fjerne enheten","error")}finally{r.value=!1}}}function qe(X){C.value=X,X==="history"&&(B.value=[],Q.value=null,I())}function $t(X){if(!X)return"—";const $=X.toDate?X.toDate():new Date(X);return`${String($.getDate()).padStart(2,"0")}.${String($.getMonth()+1).padStart(2,"0")} ${String($.getHours()).padStart(2,"0")}:${String($.getMinutes()).padStart(2,"0")}`}function Ue(X){if(!X)return"—";const $=X.toDate?X.toDate():new Date(X);return`${String($.getDate()).padStart(2,"0")}.${String($.getMonth()+1).padStart(2,"0")}.${$.getFullYear()} ${String($.getHours()).padStart(2,"0")}:${String($.getMinutes()).padStart(2,"0")}`}return Ec(()=>{c(),h()}),(X,$)=>(ae(),ge("div",lR,[O("aside",cR,[O("div",{class:"sidebar-top"},[$[7]||($[7]=O("div",{class:"sidebar-title"},"Admin",-1)),O("button",{class:"sidebar-close",onClick:m},[...$[6]||($[6]=[O("span",{class:"sidebar-close-icon"},"←",-1),Dr(" Logg ut ",-1)])])]),O("nav",uR,[(ae(),ge(Ze,null,hr(k,te=>O("button",{key:te.key,class:mt(["sidebar-item",{active:C.value===te.key}]),onClick:jt=>qe(te.key)},[O("span",dR,Se(te.icon),1),O("span",fR,Se(te.label),1)],10,hR)),64))]),O("div",pR,[O("div",gR,Se(j.value),1)])]),O("main",mR,[Ot(O("section",null,[$[8]||($[8]=O("h2",{class:"section-title"},"Utlånt utstyr",-1)),Lr(l).length===0?(ae(),ge("div",_R,"Ingen utlånt utstyr")):(ae(),ge("div",yR,[(ae(!0),ge(Ze,null,hr(Lr(l),te=>(ae(),ge("div",{key:te.id,class:"borrow-card"},[O("div",vR,[O("h4",null,Se(te.workstation),1),O("p",null,"Lånt av: "+Se(te.borrower),1),te.controllers?(ae(),ge("div",ER,"🎮 "+Se(te.controllers)+" kontrollere",1)):Xe("",!0),O("div",wR,Se($t(te.borrowedAt)),1)]),O("button",{class:"btn btn-danger btn-sm",onClick:jt=>y(te.workstation)},"Returner",8,TR)]))),128))]))],512),[[el,C.value==="borrows"]]),Ot(O("section",null,[$[9]||($[9]=O("h2",{class:"section-title"},"Historikk",-1)),B.value.length===0?(ae(),ge("div",IR,"Ingen historikk")):(ae(),ge("div",AR,[(ae(!0),ge(Ze,null,hr(B.value,te=>(ae(),ge("div",{key:te.id,class:"borrow-card"},[O("div",bR,[O("h4",null,Se(te.workstation),1),O("p",null,"Lånt av: "+Se(te.borrower),1),te.controllers?(ae(),ge("div",RR,"🎮 "+Se(te.controllers)+" kontrollere",1)):Xe("",!0),O("div",SR,[Dr(" Lånt: "+Se(Ue(te.borrowedAt))+" ",1),te.returnedAt?(ae(),ge("span",PR," | Returnert: "+Se(Ue(te.returnedAt)),1)):Xe("",!0)])]),O("span",{style:yi([{"font-size":"0.8125rem","font-weight":"600"},{color:te.returnedAt?"var(--accent-success)":"var(--accent-error)"}])},Se(te.returnedAt?"Returnert":"Aktiv"),5)]))),128)),B.value.length>=20?(ae(),ge("button",{key:0,class:"btn btn-secondary btn-full",onClick:$[0]||($[0]=te=>I(!0))},"Last flere")):Xe("",!0)]))],512),[[el,C.value==="history"]]),Ot(O("section",null,[$[17]||($[17]=O("h2",{class:"section-title"},"Administrer enheter",-1)),O("div",CR,[(ae(!0),ge(Ze,null,hr(Lr(a),te=>(ae(),ge("div",{key:te.id,class:"ws-manage-item"},[O("div",null,[O("div",kR,[Vt(wl,{name:te.type==="playstation"?"gamecontroller":"desktopcomputer",size:16},null,8,["name"]),Dr(" "+Se(te.name),1)]),O("div",VR,Se(te.status==="available"?"Ledig":"Utlånt"),1)]),te.status==="available"?(ae(),ge("button",{key:0,class:"btn-text",onClick:jt=>w(te.name)},"Fjern",8,DR)):Xe("",!0)]))),128)),Lr(a).length===0?(ae(),ge("div",NR,"Ingen enheter")):Xe("",!0)]),O("button",{class:"btn btn-secondary btn-full",style:{"margin-bottom":"16px"},onClick:v}," Sett inn standardenheter (PS 1-2 + PC 1-3) "),O("form",{class:"add-form",onSubmit:Ys(b,["prevent"])},[$[15]||($[15]=O("h3",null,"Legg til ny enhet",-1)),O("div",OR,[$[10]||($[10]=O("label",{for:"new-name"},"Navn",-1)),Ot(O("input",{id:"new-name","onUpdate:modelValue":$[1]||($[1]=te=>H.value=te),class:"input",placeholder:"F.eks. PC 4",required:""},null,512),[[Un,H.value]])]),O("div",xR,[$[13]||($[13]=O("label",null,"Type",-1)),O("div",MR,[O("button",{type:"button",class:mt(["btn",ie.value==="pc"?"btn-primary":"btn-secondary"]),style:{flex:"1",gap:"6px"},onClick:$[2]||($[2]=te=>ie.value="pc")},[Vt(wl,{name:"desktopcomputer",size:16}),$[11]||($[11]=Dr(" PC",-1))],2),O("button",{type:"button",class:mt(["btn",ie.value==="playstation"?"btn-primary":"btn-secondary"]),style:{flex:"1",gap:"6px"},onClick:$[3]||($[3]=te=>ie.value="playstation")},[Vt(wl,{name:"gamecontroller",size:16}),$[12]||($[12]=Dr(" PlayStation",-1))],2)])]),O("div",LR,[O("label",FR,Se(ie.value==="playstation"?"Tilbehør":"Tastatur"),1),Ot(O("input",{id:"new-keyboard","onUpdate:modelValue":$[4]||($[4]=te=>de.value=te),class:"input",placeholder:ie.value==="playstation"?"F.eks. Kontroller x2, ladestasjon":"F.eks. Tastatur 4"},null,8,UR),[[Un,de.value]])]),ie.value==="pc"?(ae(),ge("div",BR,[$[14]||($[14]=O("label",{for:"new-mouse"},"Mus",-1)),Ot(O("input",{id:"new-mouse","onUpdate:modelValue":$[5]||($[5]=te=>T.value=te),class:"input",placeholder:"F.eks. Mus 4"},null,512),[[Un,T.value]])])):Xe("",!0),$[16]||($[16]=O("button",{type:"submit",class:"btn btn-primary"},"Legg til",-1))],32)],512),[[el,C.value==="manage"]])])]))}}),jR=Iu($R,[["__scopeId","data-v-4e3788de"]]),qR={id:"toast-container"},WR={key:0,id:"loading-overlay"},HR=Ei({__name:"App",setup(n){const e=Pe("student"),t=Pe([]);let r=0;function s(a,l="info"){const c=++r;t.value.push({id:c,message:a,type:l}),setTimeout(()=>{const h=t.value.findIndex(f=>f.id===c);h!==-1&&t.value.splice(h,1)},3e3)}co("showToast",s),co("currentView",e);const i=Pe(!1);return co("loading",i),(a,l)=>(ae(),ge(Ze,null,[O("div",qR,[(ae(!0),ge(Ze,null,hr(t.value,c=>(ae(),ge("div",{key:c.id,class:mt(["toast",c.type])},Se(c.message),3))),128))]),i.value?(ae(),ge("div",WR,[...l[0]||(l[0]=[O("div",{class:"loader-ring"},null,-1),O("p",null,"Laster...",-1)])])):Xe("",!0),e.value==="student"?(ae(),Wr(Y0,{key:1})):e.value==="login"?(ae(),Wr(iR,{key:2})):e.value==="admin"?(ae(),Wr(jR,{key:3})):Xe("",!0)],64))}});Iv(HR).mount("#app");

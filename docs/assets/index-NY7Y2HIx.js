(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function oc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ve={},qr=[],tn=()=>{},mf=()=>!1,Qo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Yo=n=>n.startsWith("onUpdate:"),ot=Object.assign,ac=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},s_=Object.prototype.hasOwnProperty,Re=(n,e)=>s_.call(n,e),ue=Array.isArray,Wr=n=>vi(n)==="[object Map]",_f=n=>vi(n)==="[object Set]",gh=n=>vi(n)==="[object Date]",ge=n=>typeof n=="function",Le=n=>typeof n=="string",an=n=>typeof n=="symbol",Pe=n=>n!==null&&typeof n=="object",yf=n=>(Pe(n)||ge(n))&&ge(n.then)&&ge(n.catch),vf=Object.prototype.toString,vi=n=>vf.call(n),i_=n=>vi(n).slice(8,-1),Ef=n=>vi(n)==="[object Object]",lc=n=>Le(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Hs=oc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Jo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},o_=/-\w/g,jt=Jo(n=>n.replace(o_,e=>e.slice(1).toUpperCase())),a_=/\B([A-Z])/g,nr=Jo(n=>n.replace(a_,"-$1").toLowerCase()),wf=Jo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ka=Jo(n=>n?`on${wf(n)}`:""),Zt=(n,e)=>!Object.is(n,e),ho=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Tf=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},cc=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let mh;const Xo=()=>mh||(mh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zo(n){if(ue(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=Le(r)?h_(r):Zo(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Le(n)||Pe(n))return n}const l_=/;(?![^(]*\))/g,c_=/:([^]+)/,u_=/\/\*[^]*?\*\//g;function h_(n){const e={};return n.replace(u_,"").split(l_).forEach(t=>{if(t){const r=t.split(c_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ze(n){let e="";if(Le(n))e=n;else if(ue(n))for(let t=0;t<n.length;t++){const r=Ze(n[t]);r&&(e+=r+" ")}else if(Pe(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const d_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",f_=oc(d_);function If(n){return!!n||n===""}function p_(n,e){if(n.length!==e.length)return!1;let t=!0;for(let r=0;t&&r<n.length;r++)t=uc(n[r],e[r]);return t}function uc(n,e){if(n===e)return!0;let t=gh(n),r=gh(e);if(t||r)return t&&r?n.getTime()===e.getTime():!1;if(t=an(n),r=an(e),t||r)return n===e;if(t=ue(n),r=ue(e),t||r)return t&&r?p_(n,e):!1;if(t=Pe(n),r=Pe(e),t||r){if(!t||!r)return!1;const s=Object.keys(n).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in n){const l=n.hasOwnProperty(a),c=e.hasOwnProperty(a);if(l&&!c||!l&&c||!uc(n[a],e[a]))return!1}}return String(n)===String(e)}const Af=n=>!!(n&&n.__v_isRef===!0),ke=n=>Le(n)?n:n==null?"":ue(n)||Pe(n)&&(n.toString===vf||!ge(n.toString))?Af(n)?ke(n.value):JSON.stringify(n,bf,2):String(n),bf=(n,e)=>Af(e)?bf(n,e.value):Wr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[za(r,i)+" =>"]=s,t),{})}:_f(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>za(t))}:an(e)?za(e):Pe(e)&&!ue(e)&&!Ef(e)?String(e):e,za=(n,e="")=>{var t;return an(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let nt;class g_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&nt&&(nt.active?(this.parent=nt,this.index=(nt.scopes||(nt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=nt;try{return nt=this,e()}finally{nt=t}}}on(){++this._on===1&&(this.prevScope=nt,nt=this)}off(){if(this._on>0&&--this._on===0){if(nt===this)nt=this.prevScope;else{let e=nt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function m_(){return nt}let Ne;const Ga=new WeakSet;class Rf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,nt&&(nt.active?nt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ga.has(this)&&(Ga.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Pf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,_h(this),Cf(this);const e=Ne,t=qt;Ne=this,qt=!0;try{return this.fn()}finally{kf(this),Ne=e,qt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)fc(e);this.deps=this.depsTail=void 0,_h(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ga.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Il(this)&&this.run()}get dirty(){return Il(this)}}let Sf=0,Ks,zs;function Pf(n,e=!1){if(n.flags|=8,e){n.next=zs,zs=n;return}n.next=Ks,Ks=n}function hc(){Sf++}function dc(){if(--Sf>0)return;if(zs){let e=zs;for(zs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ks;){let e=Ks;for(Ks=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function Cf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function kf(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),fc(r),__(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function Il(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Vf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Vf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ri)||(n.globalVersion=ri,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Il(n))))return;n.flags|=2;const e=n.dep,t=Ne,r=qt;Ne=n,qt=!0;try{Cf(n);const s=n.fn(n._value);(e.version===0||Zt(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ne=t,qt=r,kf(n),n.flags&=-3}}function fc(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)fc(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function __(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let qt=!0;const Df=[];function ln(){Df.push(qt),qt=!1}function cn(){const n=Df.pop();qt=n===void 0?!0:n}function _h(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Ne;Ne=void 0;try{e()}finally{Ne=t}}}let ri=0;class y_{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class pc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ne||!qt||Ne===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ne)t=this.activeLink=new y_(Ne,this),Ne.deps?(t.prevDep=Ne.depsTail,Ne.depsTail.nextDep=t,Ne.depsTail=t):Ne.deps=Ne.depsTail=t,Nf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=Ne.depsTail,t.nextDep=void 0,Ne.depsTail.nextDep=t,Ne.depsTail=t,Ne.deps===t&&(Ne.deps=r)}return t}trigger(e){this.version++,ri++,this.notify(e)}notify(e){hc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{dc()}}}function Nf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Nf(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Al=new WeakMap,mr=Symbol(""),bl=Symbol(""),si=Symbol("");function pt(n,e,t){if(qt&&Ne){let r=Al.get(n);r||Al.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new pc),s.map=r,s.key=t),s.track()}}function vn(n,e,t,r,s,i){const a=Al.get(n);if(!a){ri++;return}const l=c=>{c&&c.trigger()};if(hc(),e==="clear")a.forEach(l);else{const c=ue(n),h=c&&lc(t);if(c&&t==="length"){const f=Number(r);a.forEach((p,_)=>{(_==="length"||_===si||!an(_)&&_>=f)&&l(p)})}else switch((t!==void 0||a.has(void 0))&&l(a.get(t)),h&&l(a.get(si)),e){case"add":c?h&&l(a.get("length")):(l(a.get(mr)),Wr(n)&&l(a.get(bl)));break;case"delete":c||(l(a.get(mr)),Wr(n)&&l(a.get(bl)));break;case"set":Wr(n)&&l(a.get(mr));break}}dc()}function Or(n){const e=be(n);return e===n?e:(pt(e,"iterate",si),Ft(n)?e:e.map(Wt))}function ea(n){return pt(n=be(n),"iterate",si),n}function Jt(n,e){return Rn(n)?Zr(_r(n)?Wt(e):e):Wt(e)}const v_={__proto__:null,[Symbol.iterator](){return Qa(this,Symbol.iterator,n=>Jt(this,n))},concat(...n){return Or(this).concat(...n.map(e=>ue(e)?Or(e):e))},entries(){return Qa(this,"entries",n=>(n[1]=Jt(this,n[1]),n))},every(n,e){return gn(this,"every",n,e,void 0,arguments)},filter(n,e){return gn(this,"filter",n,e,t=>t.map(r=>Jt(this,r)),arguments)},find(n,e){return gn(this,"find",n,e,t=>Jt(this,t),arguments)},findIndex(n,e){return gn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return gn(this,"findLast",n,e,t=>Jt(this,t),arguments)},findLastIndex(n,e){return gn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return gn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ya(this,"includes",n)},indexOf(...n){return Ya(this,"indexOf",n)},join(n){return Or(this).join(n)},lastIndexOf(...n){return Ya(this,"lastIndexOf",n)},map(n,e){return gn(this,"map",n,e,void 0,arguments)},pop(){return Vs(this,"pop")},push(...n){return Vs(this,"push",n)},reduce(n,...e){return yh(this,"reduce",n,e)},reduceRight(n,...e){return yh(this,"reduceRight",n,e)},shift(){return Vs(this,"shift")},some(n,e){return gn(this,"some",n,e,void 0,arguments)},splice(...n){return Vs(this,"splice",n)},toReversed(){return Or(this).toReversed()},toSorted(n){return Or(this).toSorted(n)},toSpliced(...n){return Or(this).toSpliced(...n)},unshift(...n){return Vs(this,"unshift",n)},values(){return Qa(this,"values",n=>Jt(this,n))}};function Qa(n,e,t){const r=ea(n),s=r[e]();return r!==n&&!Ft(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=t(i.value)),i}),s}const E_=Array.prototype;function gn(n,e,t,r,s,i){const a=ea(n),l=a!==n&&!Ft(n),c=a[e];if(c!==E_[e]){const p=c.apply(n,i);return l?Wt(p):p}let h=t;a!==n&&(l?h=function(p,_){return t.call(this,Jt(n,p),_,n)}:t.length>2&&(h=function(p,_){return t.call(this,p,_,n)}));const f=c.call(a,h,r);return l&&s?s(f):f}function yh(n,e,t,r){const s=ea(n),i=s!==n&&!Ft(n);let a=t,l=!1;s!==n&&(i?(l=r.length===0,a=function(h,f,p){return l&&(l=!1,h=Jt(n,h)),t.call(this,h,Jt(n,f),p,n)}):t.length>3&&(a=function(h,f,p){return t.call(this,h,f,p,n)}));const c=s[e](a,...r);return l?Jt(n,c):c}function Ya(n,e,t){const r=be(n);pt(r,"iterate",si);const s=r[e](...t);return(s===-1||s===!1)&&yc(t[0])?(t[0]=be(t[0]),r[e](...t)):s}function Vs(n,e,t=[]){ln(),hc();const r=be(n)[e].apply(n,t);return dc(),cn(),r}const w_=oc("__proto__,__v_isRef,__isVue"),Of=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(an));function T_(n){an(n)||(n=String(n));const e=be(this);return pt(e,"has",n),e.hasOwnProperty(n)}class xf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?D_:Uf:i?Ff:Lf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=ue(e);if(!s){let c;if(a&&(c=v_[t]))return c;if(t==="hasOwnProperty")return T_}const l=Reflect.get(e,t,mt(e)?e:r);if((an(t)?Of.has(t):w_(t))||(s||pt(e,"get",t),i))return l;if(mt(l)){const c=a&&lc(t)?l:l.value;return s&&Pe(c)?Sl(c):c}return Pe(l)?s?Sl(l):mc(l):l}}class Mf extends xf{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];const a=ue(e)&&lc(t);if(!this._isShallow){const h=Rn(i);if(!Ft(r)&&!Rn(r)&&(i=be(i),r=be(r)),!a&&mt(i)&&!mt(r))return h||(i.value=r),!0}const l=a?Number(t)<e.length:Re(e,t),c=Reflect.set(e,t,r,mt(e)?e:s);return e===be(s)&&c&&(l?Zt(r,i)&&vn(e,"set",t,r):vn(e,"add",t,r)),c}deleteProperty(e,t){const r=Re(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&vn(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!an(t)||!Of.has(t))&&pt(e,"has",t),r}ownKeys(e){return pt(e,"iterate",ue(e)?"length":mr),Reflect.ownKeys(e)}}class I_ extends xf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const A_=new Mf,b_=new I_,R_=new Mf(!0);const Rl=n=>n,to=n=>Reflect.getPrototypeOf(n);function S_(n,e,t){return function(...r){const s=this.__v_raw,i=be(s),a=Wr(i),l=n==="entries"||n===Symbol.iterator&&a,c=n==="keys"&&a,h=s[n](...r),f=t?Rl:e?Zr:Wt;return!e&&pt(i,"iterate",c?bl:mr),ot(Object.create(h),{next(){const{value:p,done:_}=h.next();return _?{value:p,done:_}:{value:l?[f(p[0]),f(p[1])]:f(p),done:_}}})}}function no(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function P_(n,e){const t={get(s){const i=this.__v_raw,a=be(i),l=be(s);n||(Zt(s,l)&&pt(a,"get",s),pt(a,"get",l));const{has:c}=to(a),h=e?Rl:n?Zr:Wt;if(c.call(a,s))return h(i.get(s));if(c.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!n&&pt(be(s),"iterate",mr),s.size},has(s){const i=this.__v_raw,a=be(i),l=be(s);return n||(Zt(s,l)&&pt(a,"has",s),pt(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=be(l),h=e?Rl:n?Zr:Wt;return!n&&pt(c,"iterate",mr),l.forEach((f,p)=>s.call(i,h(f),h(p),a))}};return ot(t,n?{add:no("add"),set:no("set"),delete:no("delete"),clear:no("clear")}:{add(s){const i=be(this),a=to(i),l=be(s),c=!e&&!Ft(s)&&!Rn(s)?l:s;return a.has.call(i,c)||Zt(s,c)&&a.has.call(i,s)||Zt(l,c)&&a.has.call(i,l)||(i.add(c),vn(i,"add",c,c)),this},set(s,i){!e&&!Ft(i)&&!Rn(i)&&(i=be(i));const a=be(this),{has:l,get:c}=to(a);let h=l.call(a,s);h||(s=be(s),h=l.call(a,s));const f=c.call(a,s);return a.set(s,i),h?Zt(i,f)&&vn(a,"set",s,i):vn(a,"add",s,i),this},delete(s){const i=be(this),{has:a,get:l}=to(i);let c=a.call(i,s);c||(s=be(s),c=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&vn(i,"delete",s,void 0),h},clear(){const s=be(this),i=s.size!==0,a=s.clear();return i&&vn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=S_(s,n,e)}),t}function gc(n,e){const t=P_(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(Re(t,s)&&s in r?t:r,s,i)}const C_={get:gc(!1,!1)},k_={get:gc(!1,!0)},V_={get:gc(!0,!1)};const Lf=new WeakMap,Ff=new WeakMap,Uf=new WeakMap,D_=new WeakMap;function N_(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function mc(n){return Rn(n)?n:_c(n,!1,A_,C_,Lf)}function O_(n){return _c(n,!1,R_,k_,Ff)}function Sl(n){return _c(n,!0,b_,V_,Uf)}function _c(n,e,t,r,s){if(!Pe(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const i=s.get(n);if(i)return i;const a=N_(i_(n));if(a===0)return n;const l=new Proxy(n,a===2?r:t);return s.set(n,l),l}function _r(n){return Rn(n)?_r(n.__v_raw):!!(n&&n.__v_isReactive)}function Rn(n){return!!(n&&n.__v_isReadonly)}function Ft(n){return!!(n&&n.__v_isShallow)}function yc(n){return n?!!n.__v_raw:!1}function be(n){const e=n&&n.__v_raw;return e?be(e):n}function x_(n){return!Re(n,"__v_skip")&&Object.isExtensible(n)&&Tf(n,"__v_skip",!0),n}const Wt=n=>Pe(n)?mc(n):n,Zr=n=>Pe(n)?Sl(n):n;function mt(n){return n?n.__v_isRef===!0:!1}function Ae(n){return M_(n,!1)}function M_(n,e){return mt(n)?n:new L_(n,e)}class L_{constructor(e,t){this.dep=new pc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:be(e),this._value=t?e:Wt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||Ft(e)||Rn(e);e=r?e:be(e),Zt(e,t)&&(this._rawValue=e,this._value=r?e:Wt(e),this.dep.trigger())}}function Br(n){return mt(n)?n.value:n}const F_={get:(n,e,t)=>e==="__v_raw"?n:Br(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return mt(s)&&!mt(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function Bf(n){return _r(n)?n:new Proxy(n,F_)}class U_{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new pc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ri-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ne!==this)return Pf(this,!0),!0}get value(){const e=this.dep.track();return Vf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function B_(n,e,t=!1){let r,s;return ge(n)?r=n:(r=n.get,s=n.set),new U_(r,s,t)}const ro={},Ao=new WeakMap;let hr;function $_(n,e=!1,t=hr){if(t){let r=Ao.get(t);r||Ao.set(t,r=[]),r.push(n)}}function j_(n,e,t=Ve){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=t,h=q=>s?q:Ft(q)||s===!1||s===0?En(q,1):En(q);let f,p,_,b,k=!1,P=!1;if(mt(n)?(p=()=>n.value,k=Ft(n)):_r(n)?(p=()=>h(n),k=!0):ue(n)?(P=!0,k=n.some(q=>_r(q)||Ft(q)),p=()=>n.map(q=>{if(mt(q))return q.value;if(_r(q))return h(q);if(ge(q))return c?c(q,2):q()})):ge(n)?e?p=c?()=>c(n,2):n:p=()=>{if(_){ln();try{_()}finally{cn()}}const q=hr;hr=f;try{return c?c(n,3,[b]):n(b)}finally{hr=q}}:p=tn,e&&s){const q=p,ae=s===!0?1/0:s;p=()=>En(q(),ae)}const C=m_(),B=()=>{f.stop(),C&&C.active&&ac(C.effects,f)};if(i&&e){const q=e;e=(...ae)=>{const oe=q(...ae);return B(),oe}}let $=P?new Array(n.length).fill(ro):ro;const z=q=>{if(!(!(f.flags&1)||!f.dirty&&!q))if(e){const ae=f.run();if(q||s||k||(P?ae.some((oe,T)=>Zt(oe,$[T])):Zt(ae,$))){_&&_();const oe=hr;hr=f;try{const T=[ae,$===ro?void 0:P&&$[0]===ro?[]:$,b];$=ae,c?c(e,3,T):e(...T)}finally{hr=oe}}}else f.run()};return l&&l(z),f=new Rf(p),f.scheduler=a?()=>a(z,!1):z,b=q=>$_(q,!1,f),_=f.onStop=()=>{const q=Ao.get(f);if(q){if(c)c(q,4);else for(const ae of q)ae();Ao.delete(f)}},e?r?z(!0):$=f.run():a?a(z.bind(null,!0),!0):f.run(),B.pause=f.pause.bind(f),B.resume=f.resume.bind(f),B.stop=B,B}function En(n,e=1/0,t){if(e<=0||!Pe(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,mt(n))En(n.value,e,t);else if(ue(n))for(let r=0;r<n.length;r++)En(n[r],e,t);else if(_f(n)||Wr(n))n.forEach(r=>{En(r,e,t)});else if(Ef(n)){for(const r in n)En(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&En(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ei(n,e,t,r){try{return r?n(...r):n()}catch(s){ta(s,e,t)}}function Ht(n,e,t,r){if(ge(n)){const s=Ei(n,e,t,r);return s&&yf(s)&&s.catch(i=>{ta(i,e,t)}),s}if(ue(n)){const s=[];for(let i=0;i<n.length;i++)s.push(Ht(n[i],e,t,r));return s}}function ta(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ve;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](n,c,h)===!1)return}l=l.parent}if(i){ln(),Ei(i,null,10,[n,c,h]),cn();return}}q_(n,t,s,r,a)}function q_(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const It=[];let Yt=-1;const Hr=[];let $n=null,xr=0;const $f=Promise.resolve();let bo=null;function Pl(n){const e=bo||$f;return n?e.then(this?n.bind(this):n):e}function W_(n){let e=Yt+1,t=It.length;for(;e<t;){const r=e+t>>>1,s=It[r],i=ii(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function vc(n){if(!(n.flags&1)){const e=ii(n),t=It[It.length-1];!t||!(n.flags&2)&&e>=ii(t)?It.push(n):It.splice(W_(e),0,n),n.flags|=1,jf()}}function jf(){bo||(bo=$f.then(Wf))}function H_(n){ue(n)?Hr.push(...n):$n&&n.id===-1?$n.splice(xr+1,0,n):n.flags&1||(Hr.push(n),n.flags|=1),jf()}function vh(n,e,t=Yt+1){for(;t<It.length;t++){const r=It[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;It.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function qf(n){if(Hr.length){const e=[...new Set(Hr)].sort((t,r)=>ii(t)-ii(r));if(Hr.length=0,$n){$n.push(...e);return}for($n=e,xr=0;xr<$n.length;xr++){const t=$n[xr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}$n=null,xr=0}}const ii=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Wf(n){try{for(Yt=0;Yt<It.length;Yt++){const e=It[Yt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ei(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Yt<It.length;Yt++){const e=It[Yt];e&&(e.flags&=-2)}Yt=-1,It.length=0,qf(),bo=null,(It.length||Hr.length)&&Wf()}}let Lt=null,Hf=null;function Ro(n){const e=Lt;return Lt=n,Hf=n&&n.type.__scopeId||null,e}function K_(n,e=Lt,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&Nh(-1);const i=Ro(e);let a;try{a=n(...s)}finally{Ro(i),r._d&&Nh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Vt(n,e){if(Lt===null)return n;const t=oa(Lt),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=Ve]=e[s];i&&(ge(i)&&(i={mounted:i,updated:i}),i.deep&&En(a),r.push({dir:i,instance:t,value:a,oldValue:void 0,arg:l,modifiers:c}))}return n}function cr(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(ln(),Ht(c,t,8,[n.el,l,n,e]),cn())}}function fo(n,e){if(At){let t=At.provides;const r=At.parent&&At.parent.provides;r===t&&(t=At.provides=Object.create(r)),t[n]=e}}function Ot(n,e,t=!1){const r=Hy();if(r||Kr){let s=Kr?Kr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ge(e)?e.call(r&&r.proxy):e}}const z_=Symbol.for("v-scx"),G_=()=>Ot(z_);function Ja(n,e,t){return Kf(n,e,t)}function Kf(n,e,t=Ve){const{immediate:r,deep:s,flush:i,once:a}=t,l=ot({},t),c=e&&r||!e&&i!=="post";let h;if(ai){if(i==="sync"){const b=G_();h=b.__watcherHandles||(b.__watcherHandles=[])}else if(!c){const b=()=>{};return b.stop=tn,b.resume=tn,b.pause=tn,b}}const f=At;l.call=(b,k,P)=>Ht(b,f,k,P);let p=!1;i==="post"?l.scheduler=b=>{Tt(b,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(b,k)=>{k?b():vc(b)}),l.augmentJob=b=>{e&&(b.flags|=4),p&&(b.flags|=2,f&&(b.id=f.uid,b.i=f))};const _=j_(n,e,l);return ai&&(h?h.push(_):c&&_()),_}function Q_(n,e,t){const r=this.proxy,s=Le(n)?n.includes(".")?zf(r,n):()=>r[n]:n.bind(r,r);let i;ge(e)?i=e:(i=e.handler,t=e);const a=Ti(this),l=Kf(s,i.bind(r),t);return a(),l}function zf(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const Bn=new WeakMap,Gf=Symbol("_vte"),Y_=n=>n.__isTeleport,fr=n=>n&&(n.disabled||n.disabled===""),J_=n=>n&&(n.defer||n.defer===""),Eh=n=>typeof SVGElement<"u"&&n instanceof SVGElement,wh=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,Cl=(n,e)=>{const t=n&&n.to;return Le(t)?e?e(t):null:t},X_={name:"Teleport",__isTeleport:!0,process(n,e,t,r,s,i,a,l,c,h){const{mc:f,pc:p,pbc:_,o:{insert:b,querySelector:k,createText:P,createComment:C,parentNode:B}}=h,$=fr(e.props);let{dynamicChildren:z}=e;const q=(T,m,y)=>{T.shapeFlag&16&&f(T.children,m,y,s,i,a,l,c)},ae=(T=e)=>{const m=fr(T.props),y=T.target=Cl(T.props,k),I=kl(y,T,P,b);y&&(a!=="svg"&&Eh(y)?a="svg":a!=="mathml"&&wh(y)&&(a="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(y),m||(q(T,y,I),Ms(T,!1)))},oe=T=>{const m=()=>{if(Bn.get(T)===m){if(Bn.delete(T),fr(T.props)){const y=B(T.el)||t;q(T,y,T.anchor),Ms(T,!0)}ae(T)}};Bn.set(T,m),Tt(m,i)};if(n==null){const T=e.el=P(""),m=e.anchor=P("");if(b(T,t,r),b(m,t,r),J_(e.props)||i&&i.pendingBranch){oe(e);return}$&&(q(e,t,m),Ms(e,!0)),ae()}else{e.el=n.el;const T=e.anchor=n.anchor,m=Bn.get(n);if(m){m.flags|=8,Bn.delete(n),oe(e);return}e.targetStart=n.targetStart;const y=e.target=n.target,I=e.targetAnchor=n.targetAnchor,v=fr(n.props),A=v?t:y,w=v?T:I;if(a==="svg"||Eh(y)?a="svg":(a==="mathml"||wh(y))&&(a="mathml"),z?(_(n.dynamicChildren,z,A,s,i,a,l),Ac(n,e,!0)):c||p(n,e,A,w,s,i,a,l,!1),$)v?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):so(e,t,T,h,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const Ge=Cl(e.props,k);Ge&&(e.target=Ge,so(e,Ge,null,h,0))}else v&&so(e,y,I,h,1);Ms(e,$)}},remove(n,e,t,{um:r,o:{remove:s}},i){const{shapeFlag:a,children:l,anchor:c,targetStart:h,targetAnchor:f,target:p,props:_}=n,b=fr(_),k=i||!b,P=Bn.get(n);if(P&&(P.flags|=8,Bn.delete(n)),p&&(s(h),s(f)),i&&s(c),!P&&(b||p)&&a&16)for(let C=0;C<l.length;C++){const B=l[C];r(B,e,t,k,!!B.dynamicChildren)}},move:so,hydrate:Z_};function so(n,e,t,{o:{insert:r},m:s},i=2){i===0&&r(n.targetAnchor,e,t);const{el:a,anchor:l,shapeFlag:c,children:h,props:f}=n,p=i===2;if(p&&r(a,e,t),!Bn.has(n)&&(!p||fr(f))&&c&16)for(let _=0;_<h.length;_++)s(h[_],e,t,2);p&&r(l,e,t)}function Z_(n,e,t,r,s,i,{o:{nextSibling:a,parentNode:l,querySelector:c,insert:h,createText:f}},p){function _(C,B){let $=B;for(;$;){if($&&$.nodeType===8){if($.data==="teleport start anchor")e.targetStart=$;else if($.data==="teleport anchor"){e.targetAnchor=$,C._lpa=e.targetAnchor&&a(e.targetAnchor);break}}$=a($)}}function b(C,B){B.anchor=p(a(C),B,l(C),t,r,s,i)}const k=e.target=Cl(e.props,c),P=fr(e.props);if(k){const C=k._lpa||k.firstChild;e.shapeFlag&16&&(P?(b(n,e),_(k,C),e.targetAnchor||kl(k,e,f,h,l(n)===k?n:null)):(e.anchor=a(n),_(k,C),e.targetAnchor||kl(k,e,f,h),p(C&&a(C),e,k,t,r,s,i))),Ms(e,P)}else P&&e.shapeFlag&16&&(b(n,e),e.targetStart=n,e.targetAnchor=a(n));return e.anchor&&a(e.anchor)}const Th=X_;function Ms(n,e){const t=n.ctx;if(t&&t.ut){let r,s;for(e?(r=n.el,s=n.anchor):(r=n.targetStart,s=n.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",t.uid),r=r.nextSibling;t.ut()}}function kl(n,e,t,r,s=null){const i=e.targetStart=t(""),a=e.targetAnchor=t("");return i[Gf]=a,n&&(r(i,n,s),r(a,n,s)),a}const Xa=Symbol("_leaveCb");function Ec(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Ec(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function wi(n,e){return ge(n)?ot({name:n.name},e,{setup:n}):n}function Qf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Ih(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const So=new WeakMap;function Gs(n,e,t,r,s=!1){if(ue(n)){n.forEach((P,C)=>Gs(P,e&&(ue(e)?e[C]:e),t,r,s));return}if(Qs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Gs(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?oa(r.component):r.el,a=s?null:i,{i:l,r:c}=n,h=e&&e.r,f=l.refs===Ve?l.refs={}:l.refs,p=l.setupState,_=be(p),b=p===Ve?mf:P=>Ih(f,P)?!1:Re(_,P),k=(P,C)=>!(C&&Ih(f,C));if(h!=null&&h!==c){if(Ah(e),Le(h))f[h]=null,b(h)&&(p[h]=null);else if(mt(h)){const P=e;k(h,P.k)&&(h.value=null),P.k&&(f[P.k]=null)}}if(ge(c)){ln();try{Ei(c,l,12,[a,f])}finally{cn()}}else{const P=Le(c),C=mt(c);if(P||C){const B=()=>{if(n.f){const $=P?b(c)?p[c]:f[c]:k()||!n.k?c.value:f[n.k];if(s)ue($)&&ac($,i);else if(ue($))$.includes(i)||$.push(i);else if(P)f[c]=[i],b(c)&&(p[c]=f[c]);else{const z=[i];k(c,n.k)&&(c.value=z),n.k&&(f[n.k]=z)}}else P?(f[c]=a,b(c)&&(p[c]=a)):C&&(k(c,n.k)&&(c.value=a),n.k&&(f[n.k]=a))};if(a){const $=()=>{B(),So.delete(n)};$.id=-1,So.set(n,$),Tt($,t)}else Ah(n),B()}}}function Ah(n){const e=So.get(n);e&&(e.flags|=8,So.delete(n))}Xo().requestIdleCallback;Xo().cancelIdleCallback;const Qs=n=>!!n.type.__asyncLoader,Yf=n=>n.type.__isKeepAlive;function ey(n,e){Jf(n,"a",e)}function ty(n,e){Jf(n,"da",e)}function Jf(n,e,t=At){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(na(e,r,t),t){let s=t.parent;for(;s&&s.parent;)Yf(s.parent.vnode)&&ny(r,e,t,s),s=s.parent}}function ny(n,e,t,r){const s=na(e,n,r,!0);ra(()=>{ac(r[e],s)},t)}function na(n,e,t=At,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...a)=>{ln();const l=Ti(t),c=Ht(e,t,n,a);return l(),cn(),c});return r?s.unshift(i):s.push(i),i}}const Dn=n=>(e,t=At)=>{(!ai||n==="sp")&&na(n,(...r)=>e(...r),t)},ry=Dn("bm"),wc=Dn("m"),sy=Dn("bu"),iy=Dn("u"),oy=Dn("bum"),ra=Dn("um"),ay=Dn("sp"),ly=Dn("rtg"),cy=Dn("rtc");function uy(n,e=At){na("ec",n,e)}const hy=Symbol.for("v-ndc");function pr(n,e,t,r){let s;const i=t,a=ue(n);if(a||Le(n)){const l=a&&_r(n);let c=!1,h=!1;l&&(c=!Ft(n),h=Rn(n),n=ea(n)),s=new Array(n.length);for(let f=0,p=n.length;f<p;f++)s[f]=e(c?h?Zr(Wt(n[f])):Wt(n[f]):n[f],f,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let l=0;l<n;l++)s[l]=e(l+1,l,void 0,i)}else if(Pe(n))if(n[Symbol.iterator])s=Array.from(n,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(n);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const f=l[c];s[c]=e(n[f],f,c,i)}}else s=[];return s}const Vl=n=>n?_p(n)?oa(n):Vl(n.parent):null,Ys=ot(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Vl(n.parent),$root:n=>Vl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Zf(n),$forceUpdate:n=>n.f||(n.f=()=>{vc(n.update)}),$nextTick:n=>n.n||(n.n=Pl.bind(n.proxy)),$watch:n=>Q_.bind(n)}),Za=(n,e)=>n!==Ve&&!n.__isScriptSetup&&Re(n,e),dy={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=n;if(e[0]!=="$"){const _=a[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(Za(r,e))return a[e]=1,r[e];if(s!==Ve&&Re(s,e))return a[e]=2,s[e];if(Re(i,e))return a[e]=3,i[e];if(t!==Ve&&Re(t,e))return a[e]=4,t[e];Dl&&(a[e]=0)}}const h=Ys[e];let f,p;if(h)return e==="$attrs"&&pt(n.attrs,"get",""),h(n);if((f=l.__cssModules)&&(f=f[e]))return f;if(t!==Ve&&Re(t,e))return a[e]=4,t[e];if(p=c.config.globalProperties,Re(p,e))return p[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return Za(s,e)?(s[e]=t,!0):r!==Ve&&Re(r,e)?(r[e]=t,!0):Re(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,props:i,type:a}},l){let c;return!!(t[l]||n!==Ve&&l[0]!=="$"&&Re(n,l)||Za(e,l)||Re(i,l)||Re(r,l)||Re(Ys,l)||Re(s.config.globalProperties,l)||(c=a.__cssModules)&&c[l])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Re(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function bh(n){return ue(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Dl=!0;function fy(n){const e=Zf(n),t=n.proxy,r=n.ctx;Dl=!1,e.beforeCreate&&Rh(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:f,beforeMount:p,mounted:_,beforeUpdate:b,updated:k,activated:P,deactivated:C,beforeDestroy:B,beforeUnmount:$,destroyed:z,unmounted:q,render:ae,renderTracked:oe,renderTriggered:T,errorCaptured:m,serverPrefetch:y,expose:I,inheritAttrs:v,components:A,directives:w,filters:Ge}=e;if(h&&py(h,r,null),a)for(const ve in a){const me=a[ve];ge(me)&&(r[ve]=me.bind(t))}if(s){const ve=s.call(t,t);Pe(ve)&&(n.data=mc(ve))}if(Dl=!0,i)for(const ve in i){const me=i[ve],Pt=ge(me)?me.bind(t,t):ge(me.get)?me.get.bind(t,t):tn,dn=!ge(me)&&ge(me.set)?me.set.bind(t):tn,Ut=$r({get:Pt,set:dn});Object.defineProperty(r,ve,{enumerable:!0,configurable:!0,get:()=>Ut.value,set:$e=>Ut.value=$e})}if(l)for(const ve in l)Xf(l[ve],r,t,ve);if(c){const ve=ge(c)?c.call(t):c;Reflect.ownKeys(ve).forEach(me=>{fo(me,ve[me])})}f&&Rh(f,n,"c");function De(ve,me){ue(me)?me.forEach(Pt=>ve(Pt.bind(t))):me&&ve(me.bind(t))}if(De(ry,p),De(wc,_),De(sy,b),De(iy,k),De(ey,P),De(ty,C),De(uy,m),De(cy,oe),De(ly,T),De(oy,$),De(ra,q),De(ay,y),ue(I))if(I.length){const ve=n.exposed||(n.exposed={});I.forEach(me=>{Object.defineProperty(ve,me,{get:()=>t[me],set:Pt=>t[me]=Pt,enumerable:!0})})}else n.exposed||(n.exposed={});ae&&n.render===tn&&(n.render=ae),v!=null&&(n.inheritAttrs=v),A&&(n.components=A),w&&(n.directives=w),y&&Qf(n)}function py(n,e,t=tn){ue(n)&&(n=Nl(n));for(const r in n){const s=n[r];let i;Pe(s)?"default"in s?i=Ot(s.from||r,s.default,!0):i=Ot(s.from||r):i=Ot(s),mt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function Rh(n,e,t){Ht(ue(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function Xf(n,e,t,r){let s=r.includes(".")?zf(t,r):()=>t[r];if(Le(n)){const i=e[n];ge(i)&&Ja(s,i)}else if(ge(n))Ja(s,n.bind(t));else if(Pe(n))if(ue(n))n.forEach(i=>Xf(i,e,t,r));else{const i=ge(n.handler)?n.handler.bind(t):e[n.handler];ge(i)&&Ja(s,i,n)}}function Zf(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!t&&!r?c=e:(c={},s.length&&s.forEach(h=>Po(c,h,a,!0)),Po(c,e,a)),Pe(e)&&i.set(e,c),c}function Po(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&Po(n,i,t,!0),s&&s.forEach(a=>Po(n,a,t,!0));for(const a in e)if(!(r&&a==="expose")){const l=gy[a]||t&&t[a];n[a]=l?l(n[a],e[a]):e[a]}return n}const gy={data:Sh,props:Ph,emits:Ph,methods:Ls,computed:Ls,beforeCreate:wt,created:wt,beforeMount:wt,mounted:wt,beforeUpdate:wt,updated:wt,beforeDestroy:wt,beforeUnmount:wt,destroyed:wt,unmounted:wt,activated:wt,deactivated:wt,errorCaptured:wt,serverPrefetch:wt,components:Ls,directives:Ls,watch:_y,provide:Sh,inject:my};function Sh(n,e){return e?n?function(){return ot(ge(n)?n.call(this,this):n,ge(e)?e.call(this,this):e)}:e:n}function my(n,e){return Ls(Nl(n),Nl(e))}function Nl(n){if(ue(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function wt(n,e){return n?[...new Set([].concat(n,e))]:e}function Ls(n,e){return n?ot(Object.create(null),n,e):e}function Ph(n,e){return n?ue(n)&&ue(e)?[...new Set([...n,...e])]:ot(Object.create(null),bh(n),bh(e??{})):e}function _y(n,e){if(!n)return e;if(!e)return n;const t=ot(Object.create(null),n);for(const r in e)t[r]=wt(n[r],e[r]);return t}function ep(){return{app:null,config:{isNativeTag:mf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yy=0;function vy(n,e){return function(r,s=null){ge(r)||(r=ot({},r)),s!=null&&!Pe(s)&&(s=null);const i=ep(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:yy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Jy,get config(){return i.config},set config(f){},use(f,...p){return a.has(f)||(f&&ge(f.install)?(a.add(f),f.install(h,...p)):ge(f)&&(a.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,_){if(!c){const b=h._ceVNode||Je(r,s);return b.appContext=i,_===!0?_="svg":_===!1&&(_=void 0),n(b,f,_),c=!0,h._container=f,f.__vue_app__=h,oa(b.component)}},onUnmount(f){l.push(f)},unmount(){c&&(Ht(l,h._instance,16),n(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=Kr;Kr=h;try{return f()}finally{Kr=p}}};return h}}let Kr=null;const Ey=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${jt(e)}Modifiers`]||n[`${nr(e)}Modifiers`];function wy(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Ve;let s=t;const i=e.startsWith("update:"),a=i&&Ey(r,e.slice(7));a&&(a.trim&&(s=t.map(f=>Le(f)?f.trim():f)),a.number&&(s=t.map(cc)));let l,c=r[l=Ka(e)]||r[l=Ka(jt(e))];!c&&i&&(c=r[l=Ka(nr(e))]),c&&Ht(c,n,6,s);const h=r[l+"Once"];if(h){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,Ht(h,n,6,s)}}const Ty=new WeakMap;function tp(n,e,t=!1){const r=t?Ty:e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let a={},l=!1;if(!ge(n)){const c=h=>{const f=tp(h,e,!0);f&&(l=!0,ot(a,f))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!i&&!l?(Pe(n)&&r.set(n,null),null):(ue(i)?i.forEach(c=>a[c]=null):ot(a,i),Pe(n)&&r.set(n,a),a)}function sa(n,e){return!n||!Qo(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Re(n,e[0].toLowerCase()+e.slice(1))||Re(n,nr(e))||Re(n,e))}function Ch(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:f,props:p,data:_,setupState:b,ctx:k,inheritAttrs:P}=n,C=Ro(n);let B,$;try{if(t.shapeFlag&4){const q=s||r,ae=q;B=Xt(h.call(ae,q,f,p,b,_,k)),$=l}else{const q=e;B=Xt(q.length>1?q(p,{attrs:l,slots:a,emit:c}):q(p,null)),$=e.props?l:Iy(l)}}catch(q){Js.length=0,ta(q,n,1),B=Je(Xn)}let z=B;if($&&P!==!1){const q=Object.keys($),{shapeFlag:ae}=z;q.length&&ae&7&&(i&&q.some(Yo)&&($=Ay($,i)),z=es(z,$,!1,!0))}return t.dirs&&(z=es(z,null,!1,!0),z.dirs=z.dirs?z.dirs.concat(t.dirs):t.dirs),t.transition&&Ec(z,t.transition),B=z,Ro(C),B}const Iy=n=>{let e;for(const t in n)(t==="class"||t==="style"||Qo(t))&&((e||(e={}))[t]=n[t]);return e},Ay=(n,e)=>{const t={};for(const r in n)(!Yo(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function by(n,e,t){const{props:r,children:s,component:i}=n,{props:a,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?kh(r,a,h):!!a;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const _=f[p];if(np(a,r,_)&&!sa(h,_))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?kh(r,a,h):!0:!!a;return!1}function kh(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(np(e,n,i)&&!sa(t,i))return!0}return!1}function np(n,e,t){const r=n[t],s=e[t];return t==="style"&&Pe(r)&&Pe(s)?!uc(r,s):r!==s}function Ry({vnode:n,parent:e,suspense:t},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=r,n=s),s===n)(n=e.vnode).el=r,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=r)}const rp={},sp=()=>Object.create(rp),ip=n=>Object.getPrototypeOf(n)===rp;function Sy(n,e,t,r=!1){const s={},i=sp();n.propsDefaults=Object.create(null),op(n,e,s,i);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=r?s:O_(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function Py(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=n,l=be(s),[c]=n.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=n.vnode.dynamicProps;for(let p=0;p<f.length;p++){let _=f[p];if(sa(n.emitsOptions,_))continue;const b=e[_];if(c)if(Re(i,_))b!==i[_]&&(i[_]=b,h=!0);else{const k=jt(_);s[k]=Ol(c,l,k,b,n,!1)}else b!==i[_]&&(i[_]=b,h=!0)}}}else{op(n,e,s,i)&&(h=!0);let f;for(const p in l)(!e||!Re(e,p)&&((f=nr(p))===p||!Re(e,f)))&&(c?t&&(t[p]!==void 0||t[f]!==void 0)&&(s[p]=Ol(c,l,p,void 0,n,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Re(e,p))&&(delete i[p],h=!0)}h&&vn(n.attrs,"set","")}function op(n,e,t,r){const[s,i]=n.propsOptions;let a=!1,l;if(e)for(let c in e){if(Hs(c))continue;const h=e[c];let f;s&&Re(s,f=jt(c))?!i||!i.includes(f)?t[f]=h:(l||(l={}))[f]=h:sa(n.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=be(t),h=l||Ve;for(let f=0;f<i.length;f++){const p=i[f];t[p]=Ol(s,c,p,h[p],n,!Re(h,p))}}return a}function Ol(n,e,t,r,s,i){const a=n[t];if(a!=null){const l=Re(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ge(c)){const{propsDefaults:h}=s;if(t in h)r=h[t];else{const f=Ti(s);r=h[t]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(t,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===nr(t))&&(r=!0))}return r}const Cy=new WeakMap;function ap(n,e,t=!1){const r=t?Cy:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,a={},l=[];let c=!1;if(!ge(n)){const f=p=>{c=!0;const[_,b]=ap(p,e,!0);ot(a,_),b&&l.push(...b)};!t&&e.mixins.length&&e.mixins.forEach(f),n.extends&&f(n.extends),n.mixins&&n.mixins.forEach(f)}if(!i&&!c)return Pe(n)&&r.set(n,qr),qr;if(ue(i))for(let f=0;f<i.length;f++){const p=jt(i[f]);Vh(p)&&(a[p]=Ve)}else if(i)for(const f in i){const p=jt(f);if(Vh(p)){const _=i[f],b=a[p]=ue(_)||ge(_)?{type:_}:ot({},_),k=b.type;let P=!1,C=!0;if(ue(k))for(let B=0;B<k.length;++B){const $=k[B],z=ge($)&&$.name;if(z==="Boolean"){P=!0;break}else z==="String"&&(C=!1)}else P=ge(k)&&k.name==="Boolean";b[0]=P,b[1]=C,(P||Re(b,"default"))&&l.push(p)}}const h=[a,l];return Pe(n)&&r.set(n,h),h}function Vh(n){return n[0]!=="$"&&!Hs(n)}const Tc=n=>n==="_"||n==="_ctx"||n==="$stable",Ic=n=>ue(n)?n.map(Xt):[Xt(n)],ky=(n,e,t)=>{if(e._n)return e;const r=K_((...s)=>Ic(e(...s)),t);return r._c=!1,r},lp=(n,e,t)=>{const r=n._ctx;for(const s in n){if(Tc(s))continue;const i=n[s];if(ge(i))e[s]=ky(s,i,r);else if(i!=null){const a=Ic(i);e[s]=()=>a}}},cp=(n,e)=>{const t=Ic(e);n.slots.default=()=>t},up=(n,e,t)=>{for(const r in e)(t||!Tc(r))&&(n[r]=e[r])},Vy=(n,e,t)=>{const r=n.slots=sp();if(n.vnode.shapeFlag&32){const s=e._;s?(up(r,e,t),t&&Tf(r,"_",s,!0)):lp(e,r)}else e&&cp(n,e)},Dy=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,a=Ve;if(r.shapeFlag&32){const l=e._;l?t&&l===1?i=!1:up(s,e,t):(i=!e.$stable,lp(e,s)),a=e}else e&&(cp(n,e),a={default:1});if(i)for(const l in s)!Tc(l)&&a[l]==null&&delete s[l]},Tt=Ly;function Ny(n){return Oy(n)}function Oy(n,e){const t=Xo();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:f,parentNode:p,nextSibling:_,setScopeId:b=tn,insertStaticContent:k}=n,P=(E,R,D,F=null,L=null,x=null,Q=void 0,W=null,j=!!R.dynamicChildren)=>{if(E===R)return;E&&!Ds(E,R)&&(F=ee(E),$e(E,L,x,!0),E=null),R.patchFlag===-2&&(j=!1,R.dynamicChildren=null);const{type:M,ref:te,shapeFlag:Y}=R;switch(M){case ia:C(E,R,D,F);break;case Xn:B(E,R,D,F);break;case tl:E==null&&$(R,D,F,Q);break;case Ke:A(E,R,D,F,L,x,Q,W,j);break;default:Y&1?ae(E,R,D,F,L,x,Q,W,j):Y&6?w(E,R,D,F,L,x,Q,W,j):(Y&64||Y&128)&&M.process(E,R,D,F,L,x,Q,W,j,Gt)}te!=null&&L?Gs(te,E&&E.ref,x,R||E,!R):te==null&&E&&E.ref!=null&&Gs(E.ref,null,x,E,!0)},C=(E,R,D,F)=>{if(E==null)r(R.el=l(R.children),D,F);else{const L=R.el=E.el;R.children!==E.children&&h(L,R.children)}},B=(E,R,D,F)=>{E==null?r(R.el=c(R.children||""),D,F):R.el=E.el},$=(E,R,D,F)=>{[E.el,E.anchor]=k(E.children,R,D,F,E.el,E.anchor)},z=({el:E,anchor:R},D,F)=>{let L;for(;E&&E!==R;)L=_(E),r(E,D,F),E=L;r(R,D,F)},q=({el:E,anchor:R})=>{let D;for(;E&&E!==R;)D=_(E),s(E),E=D;s(R)},ae=(E,R,D,F,L,x,Q,W,j)=>{if(R.type==="svg"?Q="svg":R.type==="math"&&(Q="mathml"),E==null)oe(R,D,F,L,x,Q,W,j);else{const M=E.el&&E.el._isVueCE?E.el:null;try{M&&M._beginPatch(),y(E,R,L,x,Q,W,j)}finally{M&&M._endPatch()}}},oe=(E,R,D,F,L,x,Q,W)=>{let j,M;const{props:te,shapeFlag:Y,transition:X,dirs:se}=E;if(j=E.el=a(E.type,x,te&&te.is,te),Y&8?f(j,E.children):Y&16&&m(E.children,j,null,F,L,el(E,x),Q,W),se&&cr(E,null,F,"created"),T(j,E,E.scopeId,Q,F),te){for(const pe in te)pe!=="value"&&!Hs(pe)&&i(j,pe,null,te[pe],x,F);"value"in te&&i(j,"value",null,te.value,x),(M=te.onVnodeBeforeMount)&&Qt(M,F,E)}se&&cr(E,null,F,"beforeMount");const ne=xy(L,X);ne&&X.beforeEnter(j),r(j,R,D),((M=te&&te.onVnodeMounted)||ne||se)&&Tt(()=>{try{M&&Qt(M,F,E),ne&&X.enter(j),se&&cr(E,null,F,"mounted")}finally{}},L)},T=(E,R,D,F,L)=>{if(D&&b(E,D),F)for(let x=0;x<F.length;x++)b(E,F[x]);if(L){let x=L.subTree;if(R===x||fp(x.type)&&(x.ssContent===R||x.ssFallback===R)){const Q=L.vnode;T(E,Q,Q.scopeId,Q.slotScopeIds,L.parent)}}},m=(E,R,D,F,L,x,Q,W,j=0)=>{for(let M=j;M<E.length;M++){const te=E[M]=W?yn(E[M]):Xt(E[M]);P(null,te,R,D,F,L,x,Q,W)}},y=(E,R,D,F,L,x,Q)=>{const W=R.el=E.el;let{patchFlag:j,dynamicChildren:M,dirs:te}=R;j|=E.patchFlag&16;const Y=E.props||Ve,X=R.props||Ve;let se;if(D&&ur(D,!1),(se=X.onVnodeBeforeUpdate)&&Qt(se,D,R,E),te&&cr(R,E,D,"beforeUpdate"),D&&ur(D,!0),M&&(!E.dynamicChildren||E.dynamicChildren.length!==M.length)&&(j=0,Q=!1,M=null),(Y.innerHTML&&X.innerHTML==null||Y.textContent&&X.textContent==null)&&f(W,""),M?I(E.dynamicChildren,M,W,D,F,el(R,L),x):Q||me(E,R,W,null,D,F,el(R,L),x,!1),j>0){if(j&16)v(W,Y,X,D,L);else if(j&2&&Y.class!==X.class&&i(W,"class",null,X.class,L),j&4&&i(W,"style",Y.style,X.style,L),j&8){const ne=R.dynamicProps;for(let pe=0;pe<ne.length;pe++){const we=ne[pe],Me=Y[we],We=X[we];(We!==Me||we==="value")&&i(W,we,Me,We,L,D)}}j&1&&E.children!==R.children&&f(W,R.children)}else!Q&&M==null&&v(W,Y,X,D,L);((se=X.onVnodeUpdated)||te)&&Tt(()=>{se&&Qt(se,D,R,E),te&&cr(R,E,D,"updated")},F)},I=(E,R,D,F,L,x,Q)=>{for(let W=0;W<R.length;W++){const j=E[W],M=R[W],te=j.el&&(j.type===Ke||!Ds(j,M)||j.shapeFlag&198)?p(j.el):D;P(j,M,te,null,F,L,x,Q,!0)}},v=(E,R,D,F,L)=>{if(R!==D){if(R!==Ve)for(const x in R)!Hs(x)&&!(x in D)&&i(E,x,R[x],null,L,F);for(const x in D){if(Hs(x))continue;const Q=D[x],W=R[x];Q!==W&&x!=="value"&&i(E,x,W,Q,L,F)}"value"in D&&i(E,"value",R.value,D.value,L)}},A=(E,R,D,F,L,x,Q,W,j)=>{const M=R.el=E?E.el:l(""),te=R.anchor=E?E.anchor:l("");let{patchFlag:Y,dynamicChildren:X,slotScopeIds:se}=R;se&&(W=W?W.concat(se):se),E==null?(r(M,D,F),r(te,D,F),m(R.children||[],D,te,L,x,Q,W,j)):Y>0&&Y&64&&X&&E.dynamicChildren&&E.dynamicChildren.length===X.length?(I(E.dynamicChildren,X,D,L,x,Q,W),(R.key!=null||L&&R===L.subTree)&&Ac(E,R,!0)):me(E,R,D,te,L,x,Q,W,j)},w=(E,R,D,F,L,x,Q,W,j)=>{R.slotScopeIds=W,E==null?R.shapeFlag&512?L.ctx.activate(R,D,F,Q,j):Ge(R,D,F,L,x,Q,j):lt(E,R,j)},Ge=(E,R,D,F,L,x,Q)=>{const W=E.component=Wy(E,F,L);if(Yf(E)&&(W.ctx.renderer=Gt),Ky(W,!1,Q),W.asyncDep){if(L&&L.registerDep(W,De,Q),!E.el){const j=W.subTree=Je(Xn);B(null,j,R,D),E.placeholder=j.el}}else De(W,E,R,D,L,x,Q)},lt=(E,R,D)=>{const F=R.component=E.component;if(by(E,R,D))if(F.asyncDep&&!F.asyncResolved){ve(F,R,D);return}else F.next=R,F.update();else R.el=E.el,F.vnode=R},De=(E,R,D,F,L,x,Q)=>{const W=()=>{if(E.isMounted){let{next:Y,bu:X,u:se,parent:ne,vnode:pe}=E;{const ct=hp(E);if(ct){Y&&(Y.el=pe.el,ve(E,Y,Q)),ct.asyncDep.then(()=>{Tt(()=>{E.isUnmounted||M()},L)});return}}let we=Y,Me;ur(E,!1),Y?(Y.el=pe.el,ve(E,Y,Q)):Y=pe,X&&ho(X),(Me=Y.props&&Y.props.onVnodeBeforeUpdate)&&Qt(Me,ne,Y,pe),ur(E,!0);const We=Ch(E),xt=E.subTree;E.subTree=We,P(xt,We,p(xt.el),ee(xt),E,L,x),Y.el=We.el,we===null&&Ry(E,We.el),se&&Tt(se,L),(Me=Y.props&&Y.props.onVnodeUpdated)&&Tt(()=>Qt(Me,ne,Y,pe),L)}else{let Y;const{el:X,props:se}=R,{bm:ne,m:pe,parent:we,root:Me,type:We}=E,xt=Qs(R);ur(E,!1),ne&&ho(ne),!xt&&(Y=se&&se.onVnodeBeforeMount)&&Qt(Y,we,R),ur(E,!0);{Me.ce&&Me.ce._hasShadowRoot()&&Me.ce._injectChildStyle(We,E.parent?E.parent.type:void 0);const ct=E.subTree=Ch(E);P(null,ct,D,F,E,L,x),R.el=ct.el}if(pe&&Tt(pe,L),!xt&&(Y=se&&se.onVnodeMounted)){const ct=R;Tt(()=>Qt(Y,we,ct),L)}(R.shapeFlag&256||we&&Qs(we.vnode)&&we.vnode.shapeFlag&256)&&E.a&&Tt(E.a,L),E.isMounted=!0,R=D=F=null}};E.scope.on();const j=E.effect=new Rf(W);E.scope.off();const M=E.update=j.run.bind(j),te=E.job=j.runIfDirty.bind(j);te.i=E,te.id=E.uid,j.scheduler=()=>vc(te),ur(E,!0),M()},ve=(E,R,D)=>{R.component=E;const F=E.vnode.props;E.vnode=R,E.next=null,Py(E,R.props,F,D),Dy(E,R.children,D),ln(),vh(E),cn()},me=(E,R,D,F,L,x,Q,W,j=!1)=>{const M=E&&E.children,te=E?E.shapeFlag:0,Y=R.children,{patchFlag:X,shapeFlag:se}=R;if(X>0){if(X&128){dn(M,Y,D,F,L,x,Q,W,j);return}else if(X&256){Pt(M,Y,D,F,L,x,Q,W,j);return}}se&8?(te&16&&G(M,L,x),Y!==M&&f(D,Y)):te&16?se&16?dn(M,Y,D,F,L,x,Q,W,j):G(M,L,x,!0):(te&8&&f(D,""),se&16&&m(Y,D,F,L,x,Q,W,j))},Pt=(E,R,D,F,L,x,Q,W,j)=>{E=E||qr,R=R||qr;const M=E.length,te=R.length,Y=Math.min(M,te);let X;for(X=0;X<Y;X++){const se=R[X]=j?yn(R[X]):Xt(R[X]);P(E[X],se,D,null,L,x,Q,W,j)}M>te?G(E,L,x,!0,!1,Y):m(R,D,F,L,x,Q,W,j,Y)},dn=(E,R,D,F,L,x,Q,W,j)=>{let M=0;const te=R.length;let Y=E.length-1,X=te-1;for(;M<=Y&&M<=X;){const se=E[M],ne=R[M]=j?yn(R[M]):Xt(R[M]);if(Ds(se,ne))P(se,ne,D,null,L,x,Q,W,j);else break;M++}for(;M<=Y&&M<=X;){const se=E[Y],ne=R[X]=j?yn(R[X]):Xt(R[X]);if(Ds(se,ne))P(se,ne,D,null,L,x,Q,W,j);else break;Y--,X--}if(M>Y){if(M<=X){const se=X+1,ne=se<te?R[se].el:F;for(;M<=X;)P(null,R[M]=j?yn(R[M]):Xt(R[M]),D,ne,L,x,Q,W,j),M++}}else if(M>X)for(;M<=Y;)$e(E[M],L,x,!0),M++;else{const se=M,ne=M,pe=new Map;for(M=ne;M<=X;M++){const et=R[M]=j?yn(R[M]):Xt(R[M]);et.key!=null&&pe.set(et.key,M)}let we,Me=0;const We=X-ne+1;let xt=!1,ct=0;const On=new Array(We);for(M=0;M<We;M++)On[M]=0;for(M=se;M<=Y;M++){const et=E[M];if(Me>=We){$e(et,L,x,!0);continue}let Mt;if(et.key!=null)Mt=pe.get(et.key);else for(we=ne;we<=X;we++)if(On[we-ne]===0&&Ds(et,R[we])){Mt=we;break}Mt===void 0?$e(et,L,x,!0):(On[Mt-ne]=M+1,Mt>=ct?ct=Mt:xt=!0,P(et,R[Mt],D,null,L,x,Q,W,j),Me++)}const ys=xt?My(On):qr;for(we=ys.length-1,M=We-1;M>=0;M--){const et=ne+M,Mt=R[et],Ui=R[et+1],Cr=et+1<te?Ui.el||dp(Ui):F;On[M]===0?P(null,Mt,D,Cr,L,x,Q,W,j):xt&&(we<0||M!==ys[we]?Ut(Mt,D,Cr,2):we--)}}},Ut=(E,R,D,F,L=null)=>{const{el:x,type:Q,transition:W,children:j,shapeFlag:M}=E;if(M&6){Ut(E.component.subTree,R,D,F);return}if(M&128){E.suspense.move(R,D,F);return}if(M&64){Q.move(E,R,D,Gt);return}if(Q===Ke){r(x,R,D);for(let Y=0;Y<j.length;Y++)Ut(j[Y],R,D,F);r(E.anchor,R,D);return}if(Q===tl){z(E,R,D);return}if(F!==2&&M&1&&W)if(F===0)W.persisted&&!x[Xa]?r(x,R,D):(W.beforeEnter(x),r(x,R,D),Tt(()=>W.enter(x),L));else{const{leave:Y,delayLeave:X,afterLeave:se}=W,ne=()=>{E.ctx.isUnmounted?s(x):r(x,R,D)},pe=()=>{const we=x._isLeaving||!!x[Xa];x._isLeaving&&x[Xa](!0),W.persisted&&!we?ne():Y(x,()=>{ne(),se&&se()})};X?X(x,ne,pe):pe()}else r(x,R,D)},$e=(E,R,D,F=!1,L=!1)=>{const{type:x,props:Q,ref:W,children:j,dynamicChildren:M,shapeFlag:te,patchFlag:Y,dirs:X,cacheIndex:se,memo:ne}=E;if(Y===-2&&(L=!1),W!=null&&(ln(),Gs(W,null,D,E,!0),cn()),se!=null&&(R.renderCache[se]=void 0),te&256){R.ctx.deactivate(E);return}const pe=te&1&&X,we=!Qs(E);let Me;if(we&&(Me=Q&&Q.onVnodeBeforeUnmount)&&Qt(Me,R,E),te&6)le(E.component,D,F);else{if(te&128){E.suspense.unmount(D,F);return}pe&&cr(E,null,R,"beforeUnmount"),te&64?E.type.remove(E,R,D,Gt,F):M&&!M.hasOnce&&(x!==Ke||Y>0&&Y&64)?G(M,R,D,!1,!0):(x===Ke&&Y&384||!L&&te&16)&&G(j,R,D),F&&je(E)}const We=ne!=null&&se==null;(we&&(Me=Q&&Q.onVnodeUnmounted)||pe||We)&&Tt(()=>{Me&&Qt(Me,R,E),pe&&cr(E,null,R,"unmounted"),We&&(E.el=null)},D)},je=E=>{const{type:R,el:D,anchor:F,transition:L}=E;if(R===Ke){Pr(D,F);return}if(R===tl){q(E);return}const x=()=>{s(D),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(E.shapeFlag&1&&L&&!L.persisted){const{leave:Q,delayLeave:W}=L,j=()=>Q(D,x);W?W(E.el,x,j):j()}else x()},Pr=(E,R)=>{let D;for(;E!==R;)D=_(E),s(E),E=D;s(R)},le=(E,R,D)=>{const{bum:F,scope:L,job:x,subTree:Q,um:W,m:j,a:M}=E;Dh(j),Dh(M),F&&ho(F),L.stop(),x&&(x.flags|=8,$e(Q,E,R,D)),W&&Tt(W,R),Tt(()=>{E.isUnmounted=!0},R)},G=(E,R,D,F=!1,L=!1,x=0)=>{for(let Q=x;Q<E.length;Q++)$e(E[Q],R,D,F,L)},ee=E=>{if(E.shapeFlag&6)return ee(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const R=_(E.anchor||E.el),D=R&&R[Gf];return D?_(D):R};let vt=!1;const Fi=(E,R,D)=>{let F;E==null?R._vnode&&($e(R._vnode,null,null,!0),F=R._vnode.component):P(R._vnode||null,E,R,null,null,null,D),R._vnode=E,vt||(vt=!0,vh(F),qf(),vt=!1)},Gt={p:P,um:$e,m:Ut,r:je,mt:Ge,mc:m,pc:me,pbc:I,n:ee,o:n};return{render:Fi,hydrate:void 0,createApp:vy(Fi)}}function el({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ur({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function xy(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Ac(n,e,t=!1){const r=n.children,s=e.children;if(ue(r)&&ue(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=yn(s[i]),l.el=a.el),!t&&l.patchFlag!==-2&&Ac(a,l)),l.type===ia&&(l.patchFlag===-1&&(l=s[i]=yn(l)),l.el=a.el),l.type===Xn&&!l.el&&(l.el=a.el)}}function My(n){const e=n.slice(),t=[0];let r,s,i,a,l;const c=n.length;for(r=0;r<c;r++){const h=n[r];if(h!==0){if(s=t[t.length-1],n[s]<h){e[r]=s,t.push(r);continue}for(i=0,a=t.length-1;i<a;)l=i+a>>1,n[t[l]]<h?i=l+1:a=l;h<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=e[a];return t}function hp(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:hp(e)}function Dh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function dp(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?dp(e.subTree):null}const fp=n=>n.__isSuspense;function Ly(n,e){e&&e.pendingBranch?ue(n)?e.effects.push(...n):e.effects.push(n):H_(n)}const Ke=Symbol.for("v-fgt"),ia=Symbol.for("v-txt"),Xn=Symbol.for("v-cmt"),tl=Symbol.for("v-stc"),Js=[];let Dt=null;function re(n=!1){Js.push(Dt=n?null:[])}function Fy(){Js.pop(),Dt=Js[Js.length-1]||null}let oi=1;function Nh(n,e=!1){oi+=n,n<0&&Dt&&e&&(Dt.hasOnce=!0)}function pp(n){return n.dynamicChildren=oi>0?Dt||qr:null,Fy(),oi>0&&Dt&&Dt.push(n),n}function he(n,e,t,r,s,i){return pp(O(n,e,t,r,s,i,!0))}function zr(n,e,t,r,s){return pp(Je(n,e,t,r,s,!0))}function gp(n){return n?n.__v_isVNode===!0:!1}function Ds(n,e){return n.type===e.type&&n.key===e.key}const mp=({key:n})=>n??null,po=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Le(n)||mt(n)||ge(n)?{i:Lt,r:n,k:e,f:!!t}:n:null);function O(n,e=null,t=null,r=0,s=null,i=n===Ke?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&mp(e),ref:e&&po(e),scopeId:Hf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Lt};return l?(Co(c,t),i&128&&n.normalize(c)):t&&(c.shapeFlag|=Le(t)?8:16),oi>0&&!a&&Dt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Dt.push(c),c}const Je=Uy;function Uy(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===hy)&&(n=Xn),gp(n)){const l=es(n,e,!0);return t&&Co(l,t),oi>0&&!i&&Dt&&(l.shapeFlag&6?Dt[Dt.indexOf(n)]=l:Dt.push(l)),l.patchFlag=-2,l}if(Yy(n)&&(n=n.__vccOpts),e){e=By(e);let{class:l,style:c}=e;l&&!Le(l)&&(e.class=Ze(l)),Pe(c)&&(yc(c)&&!ue(c)&&(c=ot({},c)),e.style=Zo(c))}const a=Le(n)?1:fp(n)?128:Y_(n)?64:Pe(n)?4:ge(n)?2:0;return O(n,e,t,r,s,a,i,!0)}function By(n){return n?yc(n)||ip(n)?ot({},n):n:null}function es(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=n,h=e?$y(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:n.type,props:h,key:h&&mp(h),ref:e&&e.ref?t&&i?ue(i)?i.concat(po(e)):[i,po(e)]:po(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ke?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&es(n.ssContent),ssFallback:n.ssFallback&&es(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&r&&Ec(f,c.clone(f)),f}function $t(n=" ",e=0){return Je(ia,null,n,e)}function Qe(n="",e=!1){return e?(re(),zr(Xn,null,n)):Je(Xn,null,n)}function Xt(n){return n==null||typeof n=="boolean"?Je(Xn):ue(n)?Je(Ke,null,n.slice()):gp(n)?yn(n):Je(ia,null,String(n))}function yn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:es(n)}function Co(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(ue(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Co(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!ip(e)?e._ctx=Lt:s===3&&Lt&&(Lt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(ge(e)){if(r&65){Co(n,{default:e});return}e={default:e,_ctx:Lt},t=32}else e=String(e),r&64?(t=16,e=[$t(e)]):t=8;n.children=e,n.shapeFlag|=t}function $y(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ze([e.class,r.class]));else if(s==="style")e.style=Zo([e.style,r.style]);else if(Qo(s)){const i=e[s],a=r[s];a&&i!==a&&!(ue(i)&&i.includes(a))?e[s]=i?[].concat(i,a):a:a==null&&i==null&&!Yo(s)&&(e[s]=a)}else s!==""&&(e[s]=r[s])}return e}function Qt(n,e,t,r=null){Ht(n,e,7,[t,r])}const jy=ep();let qy=0;function Wy(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||jy,i={uid:qy++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new g_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ap(r,s),emitsOptions:tp(r,s),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:r.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=wy.bind(null,i),n.ce&&n.ce(i),i}let At=null;const Hy=()=>At||Lt;let ko,xl;{const n=Xo(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};ko=e("__VUE_INSTANCE_SETTERS__",t=>At=t),xl=e("__VUE_SSR_SETTERS__",t=>ai=t)}const Ti=n=>{const e=At;return ko(n),n.scope.on(),()=>{n.scope.off(),ko(e)}},Oh=()=>{At&&At.scope.off(),ko(null)};function _p(n){return n.vnode.shapeFlag&4}let ai=!1;function Ky(n,e=!1,t=!1){e&&xl(e);const{props:r,children:s}=n.vnode,i=_p(n);Sy(n,r,i,e),Vy(n,s,t||e);const a=i?zy(n,e):void 0;return e&&xl(!1),a}function zy(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,dy);const{setup:r}=t;if(r){ln();const s=n.setupContext=r.length>1?Qy(n):null,i=Ti(n),a=Ei(r,n,0,[n.props,s]),l=yf(a);if(cn(),i(),(l||n.sp)&&!Qs(n)&&Qf(n),l){if(a.then(Oh,Oh),e)return a.then(c=>{xh(n,c)}).catch(c=>{ta(c,n,0)});n.asyncDep=a}else xh(n,a)}else yp(n)}function xh(n,e,t){ge(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Pe(e)&&(n.setupState=Bf(e)),yp(n)}function yp(n,e,t){const r=n.type;n.render||(n.render=r.render||tn);{const s=Ti(n);ln();try{fy(n)}finally{cn(),s()}}}const Gy={get(n,e){return pt(n,"get",""),n[e]}};function Qy(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Gy),slots:n.slots,emit:n.emit,expose:e}}function oa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Bf(x_(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ys)return Ys[t](n)},has(e,t){return t in e||t in Ys}})):n.proxy}function Yy(n){return ge(n)&&"__vccOpts"in n}const $r=(n,e)=>B_(n,e,ai),Jy="3.5.39";/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ml;const Mh=typeof window<"u"&&window.trustedTypes;if(Mh)try{Ml=Mh.createPolicy("vue",{createHTML:n=>n})}catch{}const vp=Ml?n=>Ml.createHTML(n):n=>n,Xy="http://www.w3.org/2000/svg",Zy="http://www.w3.org/1998/Math/MathML",_n=typeof document<"u"?document:null,Lh=_n&&_n.createElement("template"),ev={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?_n.createElementNS(Xy,n):e==="mathml"?_n.createElementNS(Zy,n):t?_n.createElement(n,{is:t}):_n.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>_n.createTextNode(n),createComment:n=>_n.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>_n.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const a=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{Lh.innerHTML=vp(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const l=Lh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},tv=Symbol("_vtc");function nv(n,e,t){const r=n[tv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Vo=Symbol("_vod"),Ep=Symbol("_vsh"),nl={name:"show",beforeMount(n,{value:e},{transition:t}){n[Vo]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Ns(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:r}){!e!=!t&&(r?e?(r.beforeEnter(n),Ns(n,!0),r.enter(n)):r.leave(n,()=>{Ns(n,!1)}):Ns(n,e))},beforeUnmount(n,{value:e}){Ns(n,e)}};function Ns(n,e){n.style.display=e?n[Vo]:"none",n[Ep]=!e}const rv=Symbol(""),sv=/(?:^|;)\s*display\s*:/;function iv(n,e,t){const r=n.style,s=Le(t);let i=!1;if(t&&!s){if(e)if(Le(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();t[l]==null&&Fs(r,l,"")}else for(const a in e)t[a]==null&&Fs(r,a,"");for(const a in t){a==="display"&&(i=!0);const l=t[a];l!=null?av(n,a,!Le(e)&&e?e[a]:void 0,l)||Fs(r,a,l):Fs(r,a,"")}}else if(s){if(e!==t){const a=r[rv];a&&(t+=";"+a),r.cssText=t,i=sv.test(t)}}else e&&n.removeAttribute("style");Vo in n&&(n[Vo]=i?r.display:"",n[Ep]&&(r.display="none"))}const Fh=/\s*!important$/;function Fs(n,e,t){if(ue(t))t.forEach(r=>Fs(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=ov(n,e);Fh.test(t)?n.setProperty(nr(r),t.replace(Fh,""),"important"):n[r]=t}}const Uh=["Webkit","Moz","ms"],rl={};function ov(n,e){const t=rl[e];if(t)return t;let r=jt(e);if(r!=="filter"&&r in n)return rl[e]=r;r=wf(r);for(let s=0;s<Uh.length;s++){const i=Uh[s]+r;if(i in n)return rl[e]=i}return e}function av(n,e,t,r){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Le(r)&&t===r}const Bh="http://www.w3.org/1999/xlink";function $h(n,e,t,r,s,i=f_(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Bh,e.slice(6,e.length)):n.setAttributeNS(Bh,e,t):t==null||i&&!If(t)?n.removeAttribute(e):n.setAttribute(e,i?"":an(t)?String(t):t)}function jh(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?vp(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(l!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=If(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function Mr(n,e,t,r){n.addEventListener(e,t,r)}function lv(n,e,t,r){n.removeEventListener(e,t,r)}const qh=Symbol("_vei");function cv(n,e,t,r,s=null){const i=n[qh]||(n[qh]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=dv(e);if(r){const h=i[e]=gv(r,s);Mr(n,l,h,c)}else a&&(lv(n,l,a,c),i[e]=void 0)}}const uv=/(Once|Passive|Capture)$/,hv=/^on:?(?:Once|Passive|Capture)$/;function dv(n){let e,t;for(;(t=n.match(uv))&&!hv.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):nr(n.slice(2)),e]}let sl=0;const fv=Promise.resolve(),pv=()=>sl||(fv.then(()=>sl=0),sl=Date.now());function gv(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;const s=t.value;if(ue(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const a=s.slice(),l=[r];for(let c=0;c<a.length&&!r._stopped;c++){const h=a[c];h&&Ht(h,e,5,l)}}else Ht(s,e,5,[r])};return t.value=n,t.attached=pv(),t}const Wh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,mv=(n,e,t,r,s,i)=>{const a=s==="svg";e==="class"?nv(n,r,a):e==="style"?iv(n,t,r):Qo(e)?Yo(e)||cv(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):_v(n,e,r,a))?(jh(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&$h(n,e,r,a,i,e!=="value")):n._isVueCE&&(yv(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Le(r)))?jh(n,jt(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),$h(n,e,r,a))};function _v(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&Wh(e)&&ge(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Wh(e)&&Le(t)?!1:e in n}function yv(n,e){const t=n._def.props;if(!t)return!1;const r=jt(e);return Array.isArray(t)?t.some(s=>jt(s)===r):Object.keys(t).some(s=>jt(s)===r)}const Hh=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ue(e)?t=>ho(e,t):e};function vv(n){n.target.composing=!0}function Kh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const il=Symbol("_assign");function zh(n,e,t){return e&&(n=n.trim()),t&&(n=cc(n)),n}const en={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[il]=Hh(s);const i=r||s.props&&s.props.type==="number";Mr(n,e?"change":"input",a=>{a.target.composing||n[il](zh(n.value,t,i))}),(t||i)&&Mr(n,"change",()=>{n.value=zh(n.value,t,i)}),e||(Mr(n,"compositionstart",vv),Mr(n,"compositionend",Kh),Mr(n,"change",Kh))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},a){if(n[il]=Hh(a),n.composing)return;const l=(i||n.type==="number")&&!/^0\d/.test(n.value)?cc(n.value):n.value,c=e??"";if(l===c)return;const h=n.getRootNode();(h instanceof Document||h instanceof ShadowRoot)&&h.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===c)||(n.value=c)}},Ev=["ctrl","shift","alt","meta"],wv={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Ev.some(t=>n[`${t}Key`]&&!e.includes(t))},Xs=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),r=e.join(".");return t[r]||(t[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const l=wv[e[a]];if(l&&l(s,e))return}return n(s,...i)})},Tv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ol=(n,e)=>{const t=n._withKeys||(n._withKeys={}),r=e.join(".");return t[r]||(t[r]=s=>{if(!("key"in s))return;const i=nr(s.key);if(e.some(a=>a===i||Tv[a]===i))return n(s)})},Iv=ot({patchProp:mv},ev);let Gh;function Av(){return Gh||(Gh=Ny(Iv))}const bv=(...n)=>{const e=Av().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=Sv(r);if(!s)return;const i=e._component;!ge(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,Rv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function Rv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Sv(n){return Le(n)?document.querySelector(n):n}var Qh={};/**
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
 */const wp=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Pv=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Tp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,c=s+2<n.length,h=c?n[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let _=(l&15)<<2|h>>6,b=h&63;c||(b=64,a||(_=64)),r.push(t[f],t[p],t[_],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(wp(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Pv(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new Cv;const _=i<<2|l>>4;if(r.push(_),h!==64){const b=l<<4&240|h>>2;if(r.push(b),p!==64){const k=h<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Cv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kv=function(n){const e=wp(n);return Tp.encodeByteArray(e,!0)},Do=function(n){return kv(n).replace(/\./g,"")},Ip=function(n){try{return Tp.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Vv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Dv=()=>Vv().__FIREBASE_DEFAULTS__,Nv=()=>{if(typeof process>"u"||typeof Qh>"u")return;const n=Qh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ov=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ip(n[1]);return e&&JSON.parse(e)},aa=()=>{try{return Dv()||Nv()||Ov()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ap=n=>{var e,t;return(t=(e=aa())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},xv=n=>{const e=Ap(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},bp=()=>{var n;return(n=aa())===null||n===void 0?void 0:n.config},Rp=n=>{var e;return(e=aa())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Mv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Lv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Do(JSON.stringify(t)),Do(JSON.stringify(a)),""].join(".")}/**
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
 */function yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yt())}function Uv(){var n;const e=(n=aa())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Bv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function $v(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function jv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qv(){const n=yt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Wv(){return!Uv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Hv(){try{return typeof indexedDB=="object"}catch{return!1}}function Kv(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const zv="FirebaseError";class Nn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=zv,Object.setPrototypeOf(this,Nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ii.prototype.create)}}class Ii{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Gv(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Nn(s,l,r)}}function Gv(n,e){return n.replace(Qv,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Qv=/\{\$([^}]+)}/g;function Yv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function No(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Yh(i)&&Yh(a)){if(!No(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Yh(n){return n!==null&&typeof n=="object"}/**
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
 */function Ai(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Us(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Bs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Jv(n,e){const t=new Xv(n,e);return t.subscribe.bind(t)}class Xv{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Zv(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=al),s.error===void 0&&(s.error=al),s.complete===void 0&&(s.complete=al);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Zv(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function al(){}/**
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
 */function Be(n){return n&&n._delegate?n._delegate:n}class vr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const dr="[DEFAULT]";/**
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
 */class eE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Mv;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nE(e))try{this.getOrInitializeService({instanceIdentifier:dr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=dr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=dr){return this.instances.has(e)}getOptions(e=dr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:tE(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=dr){return this.component?this.component.multipleInstances?e:dr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tE(n){return n===dr?void 0:n}function nE(n){return n.instantiationMode==="EAGER"}/**
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
 */class rE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new eE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ye;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ye||(ye={}));const sE={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},iE=ye.INFO,oE={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},aE=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=oE[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bc{constructor(e){this.name=e,this._logLevel=iE,this._logHandler=aE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const lE=(n,e)=>e.some(t=>n instanceof t);let Jh,Xh;function cE(){return Jh||(Jh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uE(){return Xh||(Xh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sp=new WeakMap,Ll=new WeakMap,Pp=new WeakMap,ll=new WeakMap,Rc=new WeakMap;function hE(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(zn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Sp.set(t,n)}).catch(()=>{}),Rc.set(e,n),e}function dE(n){if(Ll.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Ll.set(n,e)}let Fl={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ll.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Pp.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return zn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function fE(n){Fl=n(Fl)}function pE(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(cl(this),e,...t);return Pp.set(r,e.sort?e.sort():[e]),zn(r)}:uE().includes(n)?function(...e){return n.apply(cl(this),e),zn(Sp.get(this))}:function(...e){return zn(n.apply(cl(this),e))}}function gE(n){return typeof n=="function"?pE(n):(n instanceof IDBTransaction&&dE(n),lE(n,cE())?new Proxy(n,Fl):n)}function zn(n){if(n instanceof IDBRequest)return hE(n);if(ll.has(n))return ll.get(n);const e=gE(n);return e!==n&&(ll.set(n,e),Rc.set(e,n)),e}const cl=n=>Rc.get(n);function mE(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=zn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(zn(a.result),c.oldVersion,c.newVersion,zn(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const _E=["get","getKey","getAll","getAllKeys","count"],yE=["put","add","delete","clear"],ul=new Map;function Zh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ul.get(e))return ul.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=yE.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||_E.includes(t)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),s&&c.done]))[0]};return ul.set(e,i),i}fE(n=>({...n,get:(e,t,r)=>Zh(e,t)||n.get(e,t,r),has:(e,t)=>!!Zh(e,t)||n.has(e,t)}));/**
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
 */class vE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(EE(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function EE(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ul="@firebase/app",ed="0.10.13";/**
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
 */const Sn=new bc("@firebase/app"),wE="@firebase/app-compat",TE="@firebase/analytics-compat",IE="@firebase/analytics",AE="@firebase/app-check-compat",bE="@firebase/app-check",RE="@firebase/auth",SE="@firebase/auth-compat",PE="@firebase/database",CE="@firebase/data-connect",kE="@firebase/database-compat",VE="@firebase/functions",DE="@firebase/functions-compat",NE="@firebase/installations",OE="@firebase/installations-compat",xE="@firebase/messaging",ME="@firebase/messaging-compat",LE="@firebase/performance",FE="@firebase/performance-compat",UE="@firebase/remote-config",BE="@firebase/remote-config-compat",$E="@firebase/storage",jE="@firebase/storage-compat",qE="@firebase/firestore",WE="@firebase/vertexai-preview",HE="@firebase/firestore-compat",KE="firebase",zE="10.14.1";/**
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
 */const Bl="[DEFAULT]",GE={[Ul]:"fire-core",[wE]:"fire-core-compat",[IE]:"fire-analytics",[TE]:"fire-analytics-compat",[bE]:"fire-app-check",[AE]:"fire-app-check-compat",[RE]:"fire-auth",[SE]:"fire-auth-compat",[PE]:"fire-rtdb",[CE]:"fire-data-connect",[kE]:"fire-rtdb-compat",[VE]:"fire-fn",[DE]:"fire-fn-compat",[NE]:"fire-iid",[OE]:"fire-iid-compat",[xE]:"fire-fcm",[ME]:"fire-fcm-compat",[LE]:"fire-perf",[FE]:"fire-perf-compat",[UE]:"fire-rc",[BE]:"fire-rc-compat",[$E]:"fire-gcs",[jE]:"fire-gcs-compat",[qE]:"fire-fst",[HE]:"fire-fst-compat",[WE]:"fire-vertex","fire-js":"fire-js",[KE]:"fire-js-all"};/**
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
 */const Oo=new Map,QE=new Map,$l=new Map;function td(n,e){try{n.container.addComponent(e)}catch(t){Sn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ts(n){const e=n.name;if($l.has(e))return Sn.debug(`There were multiple attempts to register component ${e}.`),!1;$l.set(e,n);for(const t of Oo.values())td(t,n);for(const t of QE.values())td(t,n);return!0}function Sc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function wn(n){return n.settings!==void 0}/**
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
 */const YE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gn=new Ii("app","Firebase",YE);/**
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
 */class JE{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gn.create("app-deleted",{appName:this._name})}}/**
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
 */const hs=zE;function Cp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Bl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Gn.create("bad-app-name",{appName:String(s)});if(t||(t=bp()),!t)throw Gn.create("no-options");const i=Oo.get(s);if(i){if(No(t,i.options)&&No(r,i.config))return i;throw Gn.create("duplicate-app",{appName:s})}const a=new rE(s);for(const c of $l.values())a.addComponent(c);const l=new JE(t,r,a);return Oo.set(s,l),l}function kp(n=Bl){const e=Oo.get(n);if(!e&&n===Bl&&bp())return Cp();if(!e)throw Gn.create("no-app",{appName:n});return e}function Qn(n,e,t){var r;let s=(r=GE[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sn.warn(l.join(" "));return}ts(new vr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const XE="firebase-heartbeat-database",ZE=1,li="firebase-heartbeat-store";let hl=null;function Vp(){return hl||(hl=mE(XE,ZE,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(li)}catch(t){console.warn(t)}}}}).catch(n=>{throw Gn.create("idb-open",{originalErrorMessage:n.message})})),hl}async function ew(n){try{const t=(await Vp()).transaction(li),r=await t.objectStore(li).get(Dp(n));return await t.done,r}catch(e){if(e instanceof Nn)Sn.warn(e.message);else{const t=Gn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Sn.warn(t.message)}}}async function nd(n,e){try{const r=(await Vp()).transaction(li,"readwrite");await r.objectStore(li).put(e,Dp(n)),await r.done}catch(t){if(t instanceof Nn)Sn.warn(t.message);else{const r=Gn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Sn.warn(r.message)}}}function Dp(n){return`${n.name}!${n.options.appId}`}/**
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
 */const tw=1024,nw=30*24*60*60*1e3;class rw{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new iw(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=rd();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=nw}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Sn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=rd(),{heartbeatsToSend:r,unsentEntries:s}=sw(this._heartbeatsCache.heartbeats),i=Do(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Sn.warn(t),""}}}function rd(){return new Date().toISOString().substring(0,10)}function sw(n,e=tw){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),sd(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),sd(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class iw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hv()?Kv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ew(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return nd(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return nd(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function sd(n){return Do(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function ow(n){ts(new vr("platform-logger",e=>new vE(e),"PRIVATE")),ts(new vr("heartbeat",e=>new rw(e),"PRIVATE")),Qn(Ul,ed,n),Qn(Ul,ed,"esm2017"),Qn("fire-js","")}ow("");var id=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yr,Np;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,m){function y(){}y.prototype=m.prototype,T.D=m.prototype,T.prototype=new y,T.prototype.constructor=T,T.C=function(I,v,A){for(var w=Array(arguments.length-2),Ge=2;Ge<arguments.length;Ge++)w[Ge-2]=arguments[Ge];return m.prototype[v].apply(I,w)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,m,y){y||(y=0);var I=Array(16);if(typeof m=="string")for(var v=0;16>v;++v)I[v]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(v=0;16>v;++v)I[v]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=T.g[0],y=T.g[1],v=T.g[2];var A=T.g[3],w=m+(A^y&(v^A))+I[0]+3614090360&4294967295;m=y+(w<<7&4294967295|w>>>25),w=A+(v^m&(y^v))+I[1]+3905402710&4294967295,A=m+(w<<12&4294967295|w>>>20),w=v+(y^A&(m^y))+I[2]+606105819&4294967295,v=A+(w<<17&4294967295|w>>>15),w=y+(m^v&(A^m))+I[3]+3250441966&4294967295,y=v+(w<<22&4294967295|w>>>10),w=m+(A^y&(v^A))+I[4]+4118548399&4294967295,m=y+(w<<7&4294967295|w>>>25),w=A+(v^m&(y^v))+I[5]+1200080426&4294967295,A=m+(w<<12&4294967295|w>>>20),w=v+(y^A&(m^y))+I[6]+2821735955&4294967295,v=A+(w<<17&4294967295|w>>>15),w=y+(m^v&(A^m))+I[7]+4249261313&4294967295,y=v+(w<<22&4294967295|w>>>10),w=m+(A^y&(v^A))+I[8]+1770035416&4294967295,m=y+(w<<7&4294967295|w>>>25),w=A+(v^m&(y^v))+I[9]+2336552879&4294967295,A=m+(w<<12&4294967295|w>>>20),w=v+(y^A&(m^y))+I[10]+4294925233&4294967295,v=A+(w<<17&4294967295|w>>>15),w=y+(m^v&(A^m))+I[11]+2304563134&4294967295,y=v+(w<<22&4294967295|w>>>10),w=m+(A^y&(v^A))+I[12]+1804603682&4294967295,m=y+(w<<7&4294967295|w>>>25),w=A+(v^m&(y^v))+I[13]+4254626195&4294967295,A=m+(w<<12&4294967295|w>>>20),w=v+(y^A&(m^y))+I[14]+2792965006&4294967295,v=A+(w<<17&4294967295|w>>>15),w=y+(m^v&(A^m))+I[15]+1236535329&4294967295,y=v+(w<<22&4294967295|w>>>10),w=m+(v^A&(y^v))+I[1]+4129170786&4294967295,m=y+(w<<5&4294967295|w>>>27),w=A+(y^v&(m^y))+I[6]+3225465664&4294967295,A=m+(w<<9&4294967295|w>>>23),w=v+(m^y&(A^m))+I[11]+643717713&4294967295,v=A+(w<<14&4294967295|w>>>18),w=y+(A^m&(v^A))+I[0]+3921069994&4294967295,y=v+(w<<20&4294967295|w>>>12),w=m+(v^A&(y^v))+I[5]+3593408605&4294967295,m=y+(w<<5&4294967295|w>>>27),w=A+(y^v&(m^y))+I[10]+38016083&4294967295,A=m+(w<<9&4294967295|w>>>23),w=v+(m^y&(A^m))+I[15]+3634488961&4294967295,v=A+(w<<14&4294967295|w>>>18),w=y+(A^m&(v^A))+I[4]+3889429448&4294967295,y=v+(w<<20&4294967295|w>>>12),w=m+(v^A&(y^v))+I[9]+568446438&4294967295,m=y+(w<<5&4294967295|w>>>27),w=A+(y^v&(m^y))+I[14]+3275163606&4294967295,A=m+(w<<9&4294967295|w>>>23),w=v+(m^y&(A^m))+I[3]+4107603335&4294967295,v=A+(w<<14&4294967295|w>>>18),w=y+(A^m&(v^A))+I[8]+1163531501&4294967295,y=v+(w<<20&4294967295|w>>>12),w=m+(v^A&(y^v))+I[13]+2850285829&4294967295,m=y+(w<<5&4294967295|w>>>27),w=A+(y^v&(m^y))+I[2]+4243563512&4294967295,A=m+(w<<9&4294967295|w>>>23),w=v+(m^y&(A^m))+I[7]+1735328473&4294967295,v=A+(w<<14&4294967295|w>>>18),w=y+(A^m&(v^A))+I[12]+2368359562&4294967295,y=v+(w<<20&4294967295|w>>>12),w=m+(y^v^A)+I[5]+4294588738&4294967295,m=y+(w<<4&4294967295|w>>>28),w=A+(m^y^v)+I[8]+2272392833&4294967295,A=m+(w<<11&4294967295|w>>>21),w=v+(A^m^y)+I[11]+1839030562&4294967295,v=A+(w<<16&4294967295|w>>>16),w=y+(v^A^m)+I[14]+4259657740&4294967295,y=v+(w<<23&4294967295|w>>>9),w=m+(y^v^A)+I[1]+2763975236&4294967295,m=y+(w<<4&4294967295|w>>>28),w=A+(m^y^v)+I[4]+1272893353&4294967295,A=m+(w<<11&4294967295|w>>>21),w=v+(A^m^y)+I[7]+4139469664&4294967295,v=A+(w<<16&4294967295|w>>>16),w=y+(v^A^m)+I[10]+3200236656&4294967295,y=v+(w<<23&4294967295|w>>>9),w=m+(y^v^A)+I[13]+681279174&4294967295,m=y+(w<<4&4294967295|w>>>28),w=A+(m^y^v)+I[0]+3936430074&4294967295,A=m+(w<<11&4294967295|w>>>21),w=v+(A^m^y)+I[3]+3572445317&4294967295,v=A+(w<<16&4294967295|w>>>16),w=y+(v^A^m)+I[6]+76029189&4294967295,y=v+(w<<23&4294967295|w>>>9),w=m+(y^v^A)+I[9]+3654602809&4294967295,m=y+(w<<4&4294967295|w>>>28),w=A+(m^y^v)+I[12]+3873151461&4294967295,A=m+(w<<11&4294967295|w>>>21),w=v+(A^m^y)+I[15]+530742520&4294967295,v=A+(w<<16&4294967295|w>>>16),w=y+(v^A^m)+I[2]+3299628645&4294967295,y=v+(w<<23&4294967295|w>>>9),w=m+(v^(y|~A))+I[0]+4096336452&4294967295,m=y+(w<<6&4294967295|w>>>26),w=A+(y^(m|~v))+I[7]+1126891415&4294967295,A=m+(w<<10&4294967295|w>>>22),w=v+(m^(A|~y))+I[14]+2878612391&4294967295,v=A+(w<<15&4294967295|w>>>17),w=y+(A^(v|~m))+I[5]+4237533241&4294967295,y=v+(w<<21&4294967295|w>>>11),w=m+(v^(y|~A))+I[12]+1700485571&4294967295,m=y+(w<<6&4294967295|w>>>26),w=A+(y^(m|~v))+I[3]+2399980690&4294967295,A=m+(w<<10&4294967295|w>>>22),w=v+(m^(A|~y))+I[10]+4293915773&4294967295,v=A+(w<<15&4294967295|w>>>17),w=y+(A^(v|~m))+I[1]+2240044497&4294967295,y=v+(w<<21&4294967295|w>>>11),w=m+(v^(y|~A))+I[8]+1873313359&4294967295,m=y+(w<<6&4294967295|w>>>26),w=A+(y^(m|~v))+I[15]+4264355552&4294967295,A=m+(w<<10&4294967295|w>>>22),w=v+(m^(A|~y))+I[6]+2734768916&4294967295,v=A+(w<<15&4294967295|w>>>17),w=y+(A^(v|~m))+I[13]+1309151649&4294967295,y=v+(w<<21&4294967295|w>>>11),w=m+(v^(y|~A))+I[4]+4149444226&4294967295,m=y+(w<<6&4294967295|w>>>26),w=A+(y^(m|~v))+I[11]+3174756917&4294967295,A=m+(w<<10&4294967295|w>>>22),w=v+(m^(A|~y))+I[2]+718787259&4294967295,v=A+(w<<15&4294967295|w>>>17),w=y+(A^(v|~m))+I[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(v+(w<<21&4294967295|w>>>11))&4294967295,T.g[2]=T.g[2]+v&4294967295,T.g[3]=T.g[3]+A&4294967295}r.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var y=m-this.blockSize,I=this.B,v=this.h,A=0;A<m;){if(v==0)for(;A<=y;)s(this,T,A),A+=this.blockSize;if(typeof T=="string"){for(;A<m;)if(I[v++]=T.charCodeAt(A++),v==this.blockSize){s(this,I),v=0;break}}else for(;A<m;)if(I[v++]=T[A++],v==this.blockSize){s(this,I),v=0;break}}this.h=v,this.o+=m},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var y=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=y&255,y/=256;for(this.u(T),T=Array(16),m=y=0;4>m;++m)for(var I=0;32>I;I+=8)T[y++]=this.g[m]>>>I&255;return T};function i(T,m){var y=l;return Object.prototype.hasOwnProperty.call(y,T)?y[T]:y[T]=m(T)}function a(T,m){this.h=m;for(var y=[],I=!0,v=T.length-1;0<=v;v--){var A=T[v]|0;I&&A==m||(y[v]=A,I=!1)}this.g=y}var l={};function c(T){return-128<=T&&128>T?i(T,function(m){return new a([m|0],0>m?-1:0)}):new a([T|0],0>T?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return p;if(0>T)return C(h(-T));for(var m=[],y=1,I=0;T>=y;I++)m[I]=T/y|0,y*=4294967296;return new a(m,0)}function f(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return C(f(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(m,8)),I=p,v=0;v<T.length;v+=8){var A=Math.min(8,T.length-v),w=parseInt(T.substring(v,v+A),m);8>A?(A=h(Math.pow(m,A)),I=I.j(A).add(h(w))):(I=I.j(y),I=I.add(h(w)))}return I}var p=c(0),_=c(1),b=c(16777216);n=a.prototype,n.m=function(){if(P(this))return-C(this).m();for(var T=0,m=1,y=0;y<this.g.length;y++){var I=this.i(y);T+=(0<=I?I:4294967296+I)*m,m*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(k(this))return"0";if(P(this))return"-"+C(this).toString(T);for(var m=h(Math.pow(T,6)),y=this,I="";;){var v=q(y,m).g;y=B(y,v.j(m));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(T);if(y=v,k(y))return A+I;for(;6>A.length;)A="0"+A;I=A+I}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function k(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function P(T){return T.h==-1}n.l=function(T){return T=B(this,T),P(T)?-1:k(T)?0:1};function C(T){for(var m=T.g.length,y=[],I=0;I<m;I++)y[I]=~T.g[I];return new a(y,~T.h).add(_)}n.abs=function(){return P(this)?C(this):this},n.add=function(T){for(var m=Math.max(this.g.length,T.g.length),y=[],I=0,v=0;v<=m;v++){var A=I+(this.i(v)&65535)+(T.i(v)&65535),w=(A>>>16)+(this.i(v)>>>16)+(T.i(v)>>>16);I=w>>>16,A&=65535,w&=65535,y[v]=w<<16|A}return new a(y,y[y.length-1]&-2147483648?-1:0)};function B(T,m){return T.add(C(m))}n.j=function(T){if(k(this)||k(T))return p;if(P(this))return P(T)?C(this).j(C(T)):C(C(this).j(T));if(P(T))return C(this.j(C(T)));if(0>this.l(b)&&0>T.l(b))return h(this.m()*T.m());for(var m=this.g.length+T.g.length,y=[],I=0;I<2*m;I++)y[I]=0;for(I=0;I<this.g.length;I++)for(var v=0;v<T.g.length;v++){var A=this.i(I)>>>16,w=this.i(I)&65535,Ge=T.i(v)>>>16,lt=T.i(v)&65535;y[2*I+2*v]+=w*lt,$(y,2*I+2*v),y[2*I+2*v+1]+=A*lt,$(y,2*I+2*v+1),y[2*I+2*v+1]+=w*Ge,$(y,2*I+2*v+1),y[2*I+2*v+2]+=A*Ge,$(y,2*I+2*v+2)}for(I=0;I<m;I++)y[I]=y[2*I+1]<<16|y[2*I];for(I=m;I<2*m;I++)y[I]=0;return new a(y,0)};function $(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function z(T,m){this.g=T,this.h=m}function q(T,m){if(k(m))throw Error("division by zero");if(k(T))return new z(p,p);if(P(T))return m=q(C(T),m),new z(C(m.g),C(m.h));if(P(m))return m=q(T,C(m)),new z(C(m.g),m.h);if(30<T.g.length){if(P(T)||P(m))throw Error("slowDivide_ only works with positive integers.");for(var y=_,I=m;0>=I.l(T);)y=ae(y),I=ae(I);var v=oe(y,1),A=oe(I,1);for(I=oe(I,2),y=oe(y,2);!k(I);){var w=A.add(I);0>=w.l(T)&&(v=v.add(y),A=w),I=oe(I,1),y=oe(y,1)}return m=B(T,v.j(m)),new z(v,m)}for(v=p;0<=T.l(m);){for(y=Math.max(1,Math.floor(T.m()/m.m())),I=Math.ceil(Math.log(y)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),A=h(y),w=A.j(m);P(w)||0<w.l(T);)y-=I,A=h(y),w=A.j(m);k(A)&&(A=_),v=v.add(A),T=B(T,w)}return new z(v,T)}n.A=function(T){return q(this,T).h},n.and=function(T){for(var m=Math.max(this.g.length,T.g.length),y=[],I=0;I<m;I++)y[I]=this.i(I)&T.i(I);return new a(y,this.h&T.h)},n.or=function(T){for(var m=Math.max(this.g.length,T.g.length),y=[],I=0;I<m;I++)y[I]=this.i(I)|T.i(I);return new a(y,this.h|T.h)},n.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),y=[],I=0;I<m;I++)y[I]=this.i(I)^T.i(I);return new a(y,this.h^T.h)};function ae(T){for(var m=T.g.length+1,y=[],I=0;I<m;I++)y[I]=T.i(I)<<1|T.i(I-1)>>>31;return new a(y,T.h)}function oe(T,m){var y=m>>5;m%=32;for(var I=T.g.length-y,v=[],A=0;A<I;A++)v[A]=0<m?T.i(A+y)>>>m|T.i(A+y+1)<<32-m:T.i(A+y);return new a(v,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Np=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,yr=a}).apply(typeof id<"u"?id:typeof self<"u"?self:typeof window<"u"?window:{});var io=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Op,$s,xp,go,jl,Mp,Lp,Fp;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof io=="object"&&io];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var d=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var S=o[g];if(!(S in d))break e;d=d[S]}o=o[o.length-1],g=d[o],u=u(g),u!=g&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var d=0,g=!1,S={next:function(){if(!g&&d<o.length){var V=d++;return{value:u(V,o[V]),done:!1}}return g=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function p(o,u,d){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,g),o.apply(u,S)}}return function(){return o.apply(u,arguments)}}function _(o,u,d){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,_.apply(null,arguments)}function b(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function k(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(g,S,V){for(var H=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)H[Ce-2]=arguments[Ce];return u.prototype[S].apply(g,H)}}function P(o){const u=o.length;if(0<u){const d=Array(u);for(let g=0;g<u;g++)d[g]=o[g];return d}return[]}function C(o,u){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(c(g)){const S=o.length||0,V=g.length||0;o.length=S+V;for(let H=0;H<V;H++)o[S+H]=g[H]}else o.push(g)}}class B{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function $(o){return/^[\s\xa0]*$/.test(o)}function z(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function q(o){return q[" "](o),o}q[" "]=function(){};var ae=z().indexOf("Gecko")!=-1&&!(z().toLowerCase().indexOf("webkit")!=-1&&z().indexOf("Edge")==-1)&&!(z().indexOf("Trident")!=-1||z().indexOf("MSIE")!=-1)&&z().indexOf("Edge")==-1;function oe(o,u,d){for(const g in o)u.call(d,o[g],g,o)}function T(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function m(o){const u={};for(const d in o)u[d]=o[d];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(o,u){let d,g;for(let S=1;S<arguments.length;S++){g=arguments[S];for(d in g)o[d]=g[d];for(let V=0;V<y.length;V++)d=y[V],Object.prototype.hasOwnProperty.call(g,d)&&(o[d]=g[d])}}function v(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function A(o){l.setTimeout(()=>{throw o},0)}function w(){var o=Pt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class Ge{constructor(){this.h=this.g=null}add(u,d){const g=lt.get();g.set(u,d),this.h?this.h.next=g:this.g=g,this.h=g}}var lt=new B(()=>new De,o=>o.reset());class De{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ve,me=!1,Pt=new Ge,dn=()=>{const o=l.Promise.resolve(void 0);ve=()=>{o.then(Ut)}};var Ut=()=>{for(var o;o=w();){try{o.h.call(o.g)}catch(d){A(d)}var u=lt;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}me=!1};function $e(){this.s=this.s,this.C=this.C}$e.prototype.s=!1,$e.prototype.ma=function(){this.s||(this.s=!0,this.N())},$e.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function je(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}je.prototype.h=function(){this.defaultPrevented=!0};var Pr=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return o}();function le(o,u){if(je.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(ae){e:{try{q(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:G[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&le.aa.h.call(this)}}k(le,je);var G={2:"touch",3:"pen",4:"mouse"};le.prototype.h=function(){le.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var ee="closure_listenable_"+(1e6*Math.random()|0),vt=0;function Fi(o,u,d,g,S){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!g,this.ha=S,this.key=++vt,this.da=this.fa=!1}function Gt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function _s(o){this.src=o,this.g={},this.h=0}_s.prototype.add=function(o,u,d,g,S){var V=o.toString();o=this.g[V],o||(o=this.g[V]=[],this.h++);var H=R(o,u,g,S);return-1<H?(u=o[H],d||(u.fa=!1)):(u=new Fi(u,this.src,V,!!g,S),u.fa=d,o.push(u)),u};function E(o,u){var d=u.type;if(d in o.g){var g=o.g[d],S=Array.prototype.indexOf.call(g,u,void 0),V;(V=0<=S)&&Array.prototype.splice.call(g,S,1),V&&(Gt(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function R(o,u,d,g){for(var S=0;S<o.length;++S){var V=o[S];if(!V.da&&V.listener==u&&V.capture==!!d&&V.ha==g)return S}return-1}var D="closure_lm_"+(1e6*Math.random()|0),F={};function L(o,u,d,g,S){if(Array.isArray(u)){for(var V=0;V<u.length;V++)L(o,u[V],d,g,S);return null}return d=se(d),o&&o[ee]?o.K(u,d,h(g)?!!g.capture:!1,S):x(o,u,d,!1,g,S)}function x(o,u,d,g,S,V){if(!u)throw Error("Invalid event type");var H=h(S)?!!S.capture:!!S,Ce=Y(o);if(Ce||(o[D]=Ce=new _s(o)),d=Ce.add(u,d,g,H,V),d.proxy)return d;if(g=Q(),d.proxy=g,g.src=o,g.listener=d,o.addEventListener)Pr||(S=H),S===void 0&&(S=!1),o.addEventListener(u.toString(),g,S);else if(o.attachEvent)o.attachEvent(M(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Q(){function o(d){return u.call(o.src,o.listener,d)}const u=te;return o}function W(o,u,d,g,S){if(Array.isArray(u))for(var V=0;V<u.length;V++)W(o,u[V],d,g,S);else g=h(g)?!!g.capture:!!g,d=se(d),o&&o[ee]?(o=o.i,u=String(u).toString(),u in o.g&&(V=o.g[u],d=R(V,d,g,S),-1<d&&(Gt(V[d]),Array.prototype.splice.call(V,d,1),V.length==0&&(delete o.g[u],o.h--)))):o&&(o=Y(o))&&(u=o.g[u.toString()],o=-1,u&&(o=R(u,d,g,S)),(d=-1<o?u[o]:null)&&j(d))}function j(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[ee])E(u.i,o);else{var d=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(d,g,o.capture):u.detachEvent?u.detachEvent(M(d),g):u.addListener&&u.removeListener&&u.removeListener(g),(d=Y(u))?(E(d,o),d.h==0&&(d.src=null,u[D]=null)):Gt(o)}}}function M(o){return o in F?F[o]:F[o]="on"+o}function te(o,u){if(o.da)o=!0;else{u=new le(u,this);var d=o.listener,g=o.ha||o.src;o.fa&&j(o),o=d.call(g,u)}return o}function Y(o){return o=o[D],o instanceof _s?o:null}var X="__closure_events_fn_"+(1e9*Math.random()>>>0);function se(o){return typeof o=="function"?o:(o[X]||(o[X]=function(u){return o.handleEvent(u)}),o[X])}function ne(){$e.call(this),this.i=new _s(this),this.M=this,this.F=null}k(ne,$e),ne.prototype[ee]=!0,ne.prototype.removeEventListener=function(o,u,d,g){W(this,o,u,d,g)};function pe(o,u){var d,g=o.F;if(g)for(d=[];g;g=g.F)d.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new je(u,o);else if(u instanceof je)u.target=u.target||o;else{var S=u;u=new je(g,o),I(u,S)}if(S=!0,d)for(var V=d.length-1;0<=V;V--){var H=u.g=d[V];S=we(H,g,!0,u)&&S}if(H=u.g=o,S=we(H,g,!0,u)&&S,S=we(H,g,!1,u)&&S,d)for(V=0;V<d.length;V++)H=u.g=d[V],S=we(H,g,!1,u)&&S}ne.prototype.N=function(){if(ne.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],g=0;g<d.length;g++)Gt(d[g]);delete o.g[u],o.h--}}this.F=null},ne.prototype.K=function(o,u,d,g){return this.i.add(String(o),u,!1,d,g)},ne.prototype.L=function(o,u,d,g){return this.i.add(String(o),u,!0,d,g)};function we(o,u,d,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,V=0;V<u.length;++V){var H=u[V];if(H&&!H.da&&H.capture==d){var Ce=H.listener,tt=H.ha||H.src;H.fa&&E(o.i,H),S=Ce.call(tt,g)!==!1&&S}}return S&&!g.defaultPrevented}function Me(o,u,d){if(typeof o=="function")d&&(o=_(o,d));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function We(o){o.g=Me(()=>{o.g=null,o.i&&(o.i=!1,We(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class xt extends $e{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:We(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ct(o){$e.call(this),this.h=o,this.g={}}k(ct,$e);var On=[];function ys(o){oe(o.g,function(u,d){this.g.hasOwnProperty(d)&&j(u)},o),o.g={}}ct.prototype.N=function(){ct.aa.N.call(this),ys(this)},ct.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var et=l.JSON.stringify,Mt=l.JSON.parse,Ui=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Cr(){}Cr.prototype.h=null;function Au(o){return o.h||(o.h=o.i())}function bu(){}var vs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Da(){je.call(this,"d")}k(Da,je);function Na(){je.call(this,"c")}k(Na,je);var ir={},Ru=null;function Bi(){return Ru=Ru||new ne}ir.La="serverreachability";function Su(o){je.call(this,ir.La,o)}k(Su,je);function Es(o){const u=Bi();pe(u,new Su(u))}ir.STAT_EVENT="statevent";function Pu(o,u){je.call(this,ir.STAT_EVENT,o),this.stat=u}k(Pu,je);function Et(o){const u=Bi();pe(u,new Pu(u,o))}ir.Ma="timingevent";function Cu(o,u){je.call(this,ir.Ma,o),this.size=u}k(Cu,je);function ws(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function Ts(){this.g=!0}Ts.prototype.xa=function(){this.g=!1};function xm(o,u,d,g,S,V){o.info(function(){if(o.g)if(V)for(var H="",Ce=V.split("&"),tt=0;tt<Ce.length;tt++){var Te=Ce[tt].split("=");if(1<Te.length){var ut=Te[0];Te=Te[1];var ht=ut.split("_");H=2<=ht.length&&ht[1]=="type"?H+(ut+"="+Te+"&"):H+(ut+"=redacted&")}}else H=null;else H=V;return"XMLHTTP REQ ("+g+") [attempt "+S+"]: "+u+`
`+d+`
`+H})}function Mm(o,u,d,g,S,V,H){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+S+"]: "+u+`
`+d+`
`+V+" "+H})}function kr(o,u,d,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Fm(o,d)+(g?" "+g:"")})}function Lm(o,u){o.info(function(){return"TIMEOUT: "+u})}Ts.prototype.info=function(){};function Fm(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var g=d[o];if(!(2>g.length)){var S=g[1];if(Array.isArray(S)&&!(1>S.length)){var V=S[0];if(V!="noop"&&V!="stop"&&V!="close")for(var H=1;H<S.length;H++)S[H]=""}}}}return et(d)}catch{return u}}var $i={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ku={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Oa;function ji(){}k(ji,Cr),ji.prototype.g=function(){return new XMLHttpRequest},ji.prototype.i=function(){return{}},Oa=new ji;function xn(o,u,d,g){this.j=o,this.i=u,this.l=d,this.R=g||1,this.U=new ct(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vu}function Vu(){this.i=null,this.g="",this.h=!1}var Du={},xa={};function Ma(o,u,d){o.L=1,o.v=Ki(fn(u)),o.m=d,o.P=!0,Nu(o,null)}function Nu(o,u){o.F=Date.now(),qi(o),o.A=fn(o.v);var d=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),zu(d.i,"t",g),o.C=0,d=o.j.J,o.h=new Vu,o.g=hh(o.j,d?u:null,!o.m),0<o.O&&(o.M=new xt(_(o.Y,o,o.g),o.O)),u=o.U,d=o.g,g=o.ca;var S="readystatechange";Array.isArray(S)||(S&&(On[0]=S.toString()),S=On);for(var V=0;V<S.length;V++){var H=L(d,S[V],g||u.handleEvent,!1,u.h||u);if(!H)break;u.g[H.key]=H}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Es(),xm(o.i,o.u,o.A,o.l,o.R,o.m)}xn.prototype.ca=function(o){o=o.target;const u=this.M;u&&pn(o)==3?u.j():this.Y(o)},xn.prototype.Y=function(o){try{if(o==this.g)e:{const ht=pn(this.g);var u=this.g.Ba();const Nr=this.g.Z();if(!(3>ht)&&(ht!=3||this.g&&(this.h.h||this.g.oa()||eh(this.g)))){this.J||ht!=4||u==7||(u==8||0>=Nr?Es(3):Es(2)),La(this);var d=this.g.Z();this.X=d;t:if(Ou(this)){var g=eh(this.g);o="";var S=g.length,V=pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){or(this),Is(this);var H="";break t}this.h.i=new l.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(V&&u==S-1)});g.length=0,this.h.g+=o,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=d==200,Mm(this.i,this.u,this.A,this.l,this.R,ht,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Ce,tt=this.g;if((Ce=tt.g?tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(Ce)){var Te=Ce;break t}}Te=null}if(d=Te)kr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fa(this,d);else{this.o=!1,this.s=3,Et(12),or(this),Is(this);break e}}if(this.P){d=!0;let Bt;for(;!this.J&&this.C<H.length;)if(Bt=Um(this,H),Bt==xa){ht==4&&(this.s=4,Et(14),d=!1),kr(this.i,this.l,null,"[Incomplete Response]");break}else if(Bt==Du){this.s=4,Et(15),kr(this.i,this.l,H,"[Invalid Chunk]"),d=!1;break}else kr(this.i,this.l,Bt,null),Fa(this,Bt);if(Ou(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ht!=4||H.length!=0||this.h.h||(this.s=1,Et(16),d=!1),this.o=this.o&&d,!d)kr(this.i,this.l,H,"[Invalid Chunked Response]"),or(this),Is(this);else if(0<H.length&&!this.W){this.W=!0;var ut=this.j;ut.g==this&&ut.ba&&!ut.M&&(ut.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),Wa(ut),ut.M=!0,Et(11))}}else kr(this.i,this.l,H,null),Fa(this,H);ht==4&&or(this),this.o&&!this.J&&(ht==4?ah(this.j,this):(this.o=!1,qi(this)))}else n_(this.g),d==400&&0<H.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),or(this),Is(this)}}}catch{}finally{}};function Ou(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Um(o,u){var d=o.C,g=u.indexOf(`
`,d);return g==-1?xa:(d=Number(u.substring(d,g)),isNaN(d)?Du:(g+=1,g+d>u.length?xa:(u=u.slice(g,g+d),o.C=g+d,u)))}xn.prototype.cancel=function(){this.J=!0,or(this)};function qi(o){o.S=Date.now()+o.I,xu(o,o.I)}function xu(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=ws(_(o.ba,o),u)}function La(o){o.B&&(l.clearTimeout(o.B),o.B=null)}xn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Lm(this.i,this.A),this.L!=2&&(Es(),Et(17)),or(this),this.s=2,Is(this)):xu(this,this.S-o)};function Is(o){o.j.G==0||o.J||ah(o.j,o)}function or(o){La(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,ys(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Fa(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||Ua(d.h,o))){if(!o.K&&Ua(d.h,o)&&d.G==3){try{var g=d.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var S=g;if(S[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Xi(d),Yi(d);else break e;qa(d),Et(18)}}else d.za=S[1],0<d.za-d.T&&37500>S[2]&&d.F&&d.v==0&&!d.C&&(d.C=ws(_(d.Za,d),6e3));if(1>=Fu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else lr(d,11)}else if((o.K||d.g==o)&&Xi(d),!$(u))for(S=d.Da.g.parse(u),u=0;u<S.length;u++){let Te=S[u];if(d.T=Te[0],Te=Te[1],d.G==2)if(Te[0]=="c"){d.K=Te[1],d.ia=Te[2];const ut=Te[3];ut!=null&&(d.la=ut,d.j.info("VER="+d.la));const ht=Te[4];ht!=null&&(d.Aa=ht,d.j.info("SVER="+d.Aa));const Nr=Te[5];Nr!=null&&typeof Nr=="number"&&0<Nr&&(g=1.5*Nr,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Bt=o.g;if(Bt){const eo=Bt.g?Bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(eo){var V=g.h;V.g||eo.indexOf("spdy")==-1&&eo.indexOf("quic")==-1&&eo.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Ba(V,V.h),V.h=null))}if(g.D){const Ha=Bt.g?Bt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ha&&(g.ya=Ha,xe(g.I,g.D,Ha))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var H=o;if(g.qa=uh(g,g.J?g.ia:null,g.W),H.K){Uu(g.h,H);var Ce=H,tt=g.L;tt&&(Ce.I=tt),Ce.B&&(La(Ce),qi(Ce)),g.g=H}else ih(g);0<d.i.length&&Ji(d)}else Te[0]!="stop"&&Te[0]!="close"||lr(d,7);else d.G==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?lr(d,7):ja(d):Te[0]!="noop"&&d.l&&d.l.ta(Te),d.v=0)}}Es(4)}catch{}}var Bm=class{constructor(o,u){this.g=o,this.map=u}};function Mu(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Lu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Fu(o){return o.h?1:o.g?o.g.size:0}function Ua(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Ba(o,u){o.g?o.g.add(u):o.h=u}function Uu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Mu.prototype.cancel=function(){if(this.i=Bu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Bu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return P(o.i)}function $m(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],d=o.length,g=0;g<d;g++)u.push(o[g]);return u}u=[],d=0;for(g in o)u[d++]=o[g];return u}function jm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const g in o)u[d++]=g;return u}}}function $u(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=jm(o),g=$m(o),S=g.length,V=0;V<S;V++)u.call(void 0,g[V],d&&d[V],o)}var ju=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qm(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var g=o[d].indexOf("="),S=null;if(0<=g){var V=o[d].substring(0,g);S=o[d].substring(g+1)}else V=o[d];u(V,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function ar(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof ar){this.h=o.h,Wi(this,o.j),this.o=o.o,this.g=o.g,Hi(this,o.s),this.l=o.l;var u=o.i,d=new Rs;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),qu(this,d),this.m=o.m}else o&&(u=String(o).match(ju))?(this.h=!1,Wi(this,u[1]||"",!0),this.o=As(u[2]||""),this.g=As(u[3]||"",!0),Hi(this,u[4]),this.l=As(u[5]||"",!0),qu(this,u[6]||"",!0),this.m=As(u[7]||"")):(this.h=!1,this.i=new Rs(null,this.h))}ar.prototype.toString=function(){var o=[],u=this.j;u&&o.push(bs(u,Wu,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(bs(u,Wu,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(bs(d,d.charAt(0)=="/"?Km:Hm,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",bs(d,Gm)),o.join("")};function fn(o){return new ar(o)}function Wi(o,u,d){o.j=d?As(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Hi(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function qu(o,u,d){u instanceof Rs?(o.i=u,Qm(o.i,o.h)):(d||(u=bs(u,zm)),o.i=new Rs(u,o.h))}function xe(o,u,d){o.i.set(u,d)}function Ki(o){return xe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function As(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function bs(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,Wm),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Wm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Wu=/[#\/\?@]/g,Hm=/[#\?:]/g,Km=/[#\?]/g,zm=/[#\?@]/g,Gm=/#/g;function Rs(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Mn(o){o.g||(o.g=new Map,o.h=0,o.i&&qm(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=Rs.prototype,n.add=function(o,u){Mn(this),this.i=null,o=Vr(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function Hu(o,u){Mn(o),u=Vr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Ku(o,u){return Mn(o),u=Vr(o,u),o.g.has(u)}n.forEach=function(o,u){Mn(this),this.g.forEach(function(d,g){d.forEach(function(S){o.call(u,S,g,this)},this)},this)},n.na=function(){Mn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let g=0;g<u.length;g++){const S=o[g];for(let V=0;V<S.length;V++)d.push(u[g])}return d},n.V=function(o){Mn(this);let u=[];if(typeof o=="string")Ku(this,o)&&(u=u.concat(this.g.get(Vr(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},n.set=function(o,u){return Mn(this),this.i=null,o=Vr(this,o),Ku(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function zu(o,u,d){Hu(o,u),0<d.length&&(o.i=null,o.g.set(Vr(o,u),P(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var g=u[d];const V=encodeURIComponent(String(g)),H=this.V(g);for(g=0;g<H.length;g++){var S=V;H[g]!==""&&(S+="="+encodeURIComponent(String(H[g]))),o.push(S)}}return this.i=o.join("&")};function Vr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Qm(o,u){u&&!o.j&&(Mn(o),o.i=null,o.g.forEach(function(d,g){var S=g.toLowerCase();g!=S&&(Hu(this,g),zu(this,S,d))},o)),o.j=u}function Ym(o,u){const d=new Ts;if(l.Image){const g=new Image;g.onload=b(Ln,d,"TestLoadImage: loaded",!0,u,g),g.onerror=b(Ln,d,"TestLoadImage: error",!1,u,g),g.onabort=b(Ln,d,"TestLoadImage: abort",!1,u,g),g.ontimeout=b(Ln,d,"TestLoadImage: timeout",!1,u,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function Jm(o,u){const d=new Ts,g=new AbortController,S=setTimeout(()=>{g.abort(),Ln(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(V=>{clearTimeout(S),V.ok?Ln(d,"TestPingServer: ok",!0,u):Ln(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),Ln(d,"TestPingServer: error",!1,u)})}function Ln(o,u,d,g,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),g(d)}catch{}}function Xm(){this.g=new Ui}function Zm(o,u,d){const g=d||"";try{$u(o,function(S,V){let H=S;h(S)&&(H=et(S)),u.push(g+V+"="+encodeURIComponent(H))})}catch(S){throw u.push(g+"type="+encodeURIComponent("_badmap")),S}}function zi(o){this.l=o.Ub||null,this.j=o.eb||!1}k(zi,Cr),zi.prototype.g=function(){return new Gi(this.l,this.j)},zi.prototype.i=function(o){return function(){return o}}({});function Gi(o,u){ne.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Gi,ne),n=Gi.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Ps(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ss(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ps(this)),this.g&&(this.readyState=3,Ps(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Gu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Gu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Ss(this):Ps(this),this.readyState==3&&Gu(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Ss(this))},n.Qa=function(o){this.g&&(this.response=o,Ss(this))},n.ga=function(){this.g&&Ss(this)};function Ss(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Ps(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function Ps(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Gi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Qu(o){let u="";return oe(o,function(d,g){u+=g,u+=":",u+=d,u+=`\r
`}),u}function $a(o,u,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Qu(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):xe(o,u,d))}function Ue(o){ne.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Ue,ne);var e_=/^https?$/i,t_=["POST","PUT"];n=Ue.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Oa.g(),this.v=this.o?Au(this.o):Au(Oa),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(V){Yu(this,V);return}if(o=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var S in g)d.set(S,g[S]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())d.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),S=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(t_,u,void 0))||g||S||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,H]of d)this.g.setRequestHeader(V,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Zu(this),this.u=!0,this.g.send(o),this.u=!1}catch(V){Yu(this,V)}};function Yu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Ju(o),Qi(o)}function Ju(o){o.A||(o.A=!0,pe(o,"complete"),pe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,pe(this,"complete"),pe(this,"abort"),Qi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qi(this,!0)),Ue.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Xu(this):this.bb())},n.bb=function(){Xu(this)};function Xu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||pn(o)!=4||o.Z()!=2)){if(o.u&&pn(o)==4)Me(o.Ea,0,o);else if(pe(o,"readystatechange"),pn(o)==4){o.h=!1;try{const H=o.Z();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var g;if(g=H===0){var S=String(o.D).match(ju)[1]||null;!S&&l.self&&l.self.location&&(S=l.self.location.protocol.slice(0,-1)),g=!e_.test(S?S.toLowerCase():"")}d=g}if(d)pe(o,"complete"),pe(o,"success");else{o.m=6;try{var V=2<pn(o)?o.g.statusText:""}catch{V=""}o.l=V+" ["+o.Z()+"]",Ju(o)}}finally{Qi(o)}}}}function Qi(o,u){if(o.g){Zu(o);const d=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||pe(o,"ready");try{d.onreadystatechange=g}catch{}}}function Zu(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function pn(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<pn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Mt(u)}};function eh(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function n_(o){const u={};o=(o.g&&2<=pn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if($(o[g]))continue;var d=v(o[g]);const S=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=u[S]||[];u[S]=V,V.push(d)}T(u,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Cs(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function th(o){this.Aa=0,this.i=[],this.j=new Ts,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Cs("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Cs("baseRetryDelayMs",5e3,o),this.cb=Cs("retryDelaySeedMs",1e4,o),this.Wa=Cs("forwardChannelMaxRetries",2,o),this.wa=Cs("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Mu(o&&o.concurrentRequestLimit),this.Da=new Xm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=th.prototype,n.la=8,n.G=1,n.connect=function(o,u,d,g){Et(0),this.W=o,this.H=u||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=uh(this,null,this.W),Ji(this)};function ja(o){if(nh(o),o.G==3){var u=o.U++,d=fn(o.I);if(xe(d,"SID",o.K),xe(d,"RID",u),xe(d,"TYPE","terminate"),ks(o,d),u=new xn(o,o.j,u),u.L=2,u.v=Ki(fn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=hh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),qi(u)}ch(o)}function Yi(o){o.g&&(Wa(o),o.g.cancel(),o.g=null)}function nh(o){Yi(o),o.u&&(l.clearTimeout(o.u),o.u=null),Xi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Ji(o){if(!Lu(o.h)&&!o.s){o.s=!0;var u=o.Ga;ve||dn(),me||(ve(),me=!0),Pt.add(u,o),o.B=0}}function r_(o,u){return Fu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=ws(_(o.Ga,o,u),lh(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const S=new xn(this,this.j,o);let V=this.o;if(this.S&&(V?(V=m(V),I(V,this.S)):V=this.S),this.m!==null||this.O||(S.H=V,V=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=sh(this,S,u),d=fn(this.I),xe(d,"RID",o),xe(d,"CVER",22),this.D&&xe(d,"X-HTTP-Session-Id",this.D),ks(this,d),V&&(this.O?u="headers="+encodeURIComponent(String(Qu(V)))+"&"+u:this.m&&$a(d,this.m,V)),Ba(this.h,S),this.Ua&&xe(d,"TYPE","init"),this.P?(xe(d,"$req",u),xe(d,"SID","null"),S.T=!0,Ma(S,d,null)):Ma(S,d,u),this.G=2}}else this.G==3&&(o?rh(this,o):this.i.length==0||Lu(this.h)||rh(this))};function rh(o,u){var d;u?d=u.l:d=o.U++;const g=fn(o.I);xe(g,"SID",o.K),xe(g,"RID",d),xe(g,"AID",o.T),ks(o,g),o.m&&o.o&&$a(g,o.m,o.o),d=new xn(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=sh(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ba(o.h,d),Ma(d,g,u)}function ks(o,u){o.H&&oe(o.H,function(d,g){xe(u,g,d)}),o.l&&$u({},function(d,g){xe(u,g,d)})}function sh(o,u,d){d=Math.min(o.i.length,d);var g=o.l?_(o.l.Na,o.l,o):null;e:{var S=o.i;let V=-1;for(;;){const H=["count="+d];V==-1?0<d?(V=S[0].g,H.push("ofs="+V)):V=0:H.push("ofs="+V);let Ce=!0;for(let tt=0;tt<d;tt++){let Te=S[tt].g;const ut=S[tt].map;if(Te-=V,0>Te)V=Math.max(0,S[tt].g-100),Ce=!1;else try{Zm(ut,H,"req"+Te+"_")}catch{g&&g(ut)}}if(Ce){g=H.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,g}function ih(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;ve||dn(),me||(ve(),me=!0),Pt.add(u,o),o.v=0}}function qa(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=ws(_(o.Fa,o),lh(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,oh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=ws(_(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),Yi(this),oh(this))};function Wa(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function oh(o){o.g=new xn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=fn(o.qa);xe(u,"RID","rpc"),xe(u,"SID",o.K),xe(u,"AID",o.T),xe(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&xe(u,"TO",o.ja),xe(u,"TYPE","xmlhttp"),ks(o,u),o.m&&o.o&&$a(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Ki(fn(u)),d.m=null,d.P=!0,Nu(d,o)}n.Za=function(){this.C!=null&&(this.C=null,Yi(this),qa(this),Et(19))};function Xi(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function ah(o,u){var d=null;if(o.g==u){Xi(o),Wa(o),o.g=null;var g=2}else if(Ua(o.h,u))d=u.D,Uu(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var S=o.B;g=Bi(),pe(g,new Cu(g,d)),Ji(o)}else ih(o);else if(S=u.s,S==3||S==0&&0<u.X||!(g==1&&r_(o,u)||g==2&&qa(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),S){case 1:lr(o,5);break;case 4:lr(o,10);break;case 3:lr(o,6);break;default:lr(o,2)}}}function lh(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function lr(o,u){if(o.j.info("Error code "+u),u==2){var d=_(o.fb,o),g=o.Xa;const S=!g;g=new ar(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Wi(g,"https"),Ki(g),S?Ym(g.toString(),d):Jm(g.toString(),d)}else Et(2);o.G=0,o.l&&o.l.sa(u),ch(o),nh(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function ch(o){if(o.G=0,o.ka=[],o.l){const u=Bu(o.h);(u.length!=0||o.i.length!=0)&&(C(o.ka,u),C(o.ka,o.i),o.h.i.length=0,P(o.i),o.i.length=0),o.l.ra()}}function uh(o,u,d){var g=d instanceof ar?fn(d):new ar(d);if(g.g!="")u&&(g.g=u+"."+g.g),Hi(g,g.s);else{var S=l.location;g=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var V=new ar(null);g&&Wi(V,g),u&&(V.g=u),S&&Hi(V,S),d&&(V.l=d),g=V}return d=o.D,u=o.ya,d&&u&&xe(g,d,u),xe(g,"VER",o.la),ks(o,g),g}function hh(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Ue(new zi({eb:d})):new Ue(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function dh(){}n=dh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Zi(){}Zi.prototype.g=function(o,u){return new Ct(o,u)};function Ct(o,u){ne.call(this),this.g=new th(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!$(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!$(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Dr(this)}k(Ct,ne),Ct.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){ja(this.g)},Ct.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=et(o),o=d);u.i.push(new Bm(u.Ya++,o)),u.G==3&&Ji(u)},Ct.prototype.N=function(){this.g.l=null,delete this.j,ja(this.g),delete this.g,Ct.aa.N.call(this)};function fh(o){Da.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}k(fh,Da);function ph(){Na.call(this),this.status=1}k(ph,Na);function Dr(o){this.g=o}k(Dr,dh),Dr.prototype.ua=function(){pe(this.g,"a")},Dr.prototype.ta=function(o){pe(this.g,new fh(o))},Dr.prototype.sa=function(o){pe(this.g,new ph)},Dr.prototype.ra=function(){pe(this.g,"b")},Zi.prototype.createWebChannel=Zi.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,Fp=function(){return new Zi},Lp=function(){return Bi()},Mp=ir,jl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},$i.NO_ERROR=0,$i.TIMEOUT=8,$i.HTTP_ERROR=6,go=$i,ku.COMPLETE="complete",xp=ku,bu.EventType=vs,vs.OPEN="a",vs.CLOSE="b",vs.ERROR="c",vs.MESSAGE="d",ne.prototype.listen=ne.prototype.K,$s=bu,Ue.prototype.listenOnce=Ue.prototype.L,Ue.prototype.getLastError=Ue.prototype.Ka,Ue.prototype.getLastErrorCode=Ue.prototype.Ba,Ue.prototype.getStatus=Ue.prototype.Z,Ue.prototype.getResponseJson=Ue.prototype.Oa,Ue.prototype.getResponseText=Ue.prototype.oa,Ue.prototype.send=Ue.prototype.ea,Ue.prototype.setWithCredentials=Ue.prototype.Ha,Op=Ue}).apply(typeof io<"u"?io:typeof self<"u"?self:typeof window<"u"?window:{});const od="@firebase/firestore";/**
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
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
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
 */let ds="10.14.0";/**
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
 */const Er=new bc("@firebase/firestore");function Os(){return Er.logLevel}function J(n,...e){if(Er.logLevel<=ye.DEBUG){const t=e.map(Pc);Er.debug(`Firestore (${ds}): ${n}`,...t)}}function Pn(n,...e){if(Er.logLevel<=ye.ERROR){const t=e.map(Pc);Er.error(`Firestore (${ds}): ${n}`,...t)}}function ns(n,...e){if(Er.logLevel<=ye.WARN){const t=e.map(Pc);Er.warn(`Firestore (${ds}): ${n}`,...t)}}function Pc(n){if(typeof n=="string")return n;try{/**
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
 */function ce(n="Unexpected state"){const e=`FIRESTORE (${ds}) INTERNAL ASSERTION FAILED: `+n;throw Pn(e),new Error(e)}function Se(n,e){n||ce()}function fe(n,e){return n}/**
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
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Nn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class bn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Up{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class aw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ft.UNAUTHENTICATED))}shutdown(){}}class lw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class cw{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Se(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new bn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new bn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new bn)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string"),new Up(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new ft(e)}}class uw{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class hw{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new uw(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fw{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Se(this.o===void 0);const r=i=>{i.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,J("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Se(typeof t.token=="string"),this.R=t.token,new dw(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function pw(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Bp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=pw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function Ie(n,e){return n<e?-1:n>e?1:0}function rs(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */class Ye{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new K(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new K(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new K(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Ye(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class de{constructor(e){this.timestamp=e}static fromTimestamp(e){return new de(e)}static min(){return new de(new Ye(0,0))}static max(){return new de(new Ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ci{constructor(e,t,r){t===void 0?t=0:t>e.length&&ce(),r===void 0?r=e.length-t:r>e.length-t&&ce(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ci.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ci?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Oe extends ci{construct(e,t,r){return new Oe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Oe(t)}static emptyPath(){return new Oe([])}}const gw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends ci{construct(e,t,r){return new st(e,t,r)}static isValidIdentifier(e){return gw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new st(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new K(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new K(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new K(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new K(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(t)}static emptyPath(){return new st([])}}/**
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
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(Oe.fromString(e))}static fromName(e){return new Z(Oe.fromString(e).popFirst(5))}static empty(){return new Z(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Oe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new Oe(e.slice()))}}function mw(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=de.fromTimestamp(r===1e9?new Ye(t+1,0):new Ye(t,r));return new Zn(s,Z.empty(),e)}function _w(n){return new Zn(n.readTime,n.key,-1)}class Zn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Zn(de.min(),Z.empty(),-1)}static max(){return new Zn(de.max(),Z.empty(),-1)}}function yw(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Z.comparator(n.documentKey,e.documentKey),t!==0?t:Ie(n.largestBatchId,e.largestBatchId))}/**
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
 */const vw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ew{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function bi(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==vw)throw n;J("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ce(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof U?t:U.resolve(t)}catch(t){return U.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):U.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):U.reject(t)}static resolve(e){return new U((t,r)=>{t(e)})}static reject(e){return new U((t,r)=>{r(e)})}static waitFor(e){return new U((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},c=>r(c))}),a=!0,i===s&&t()})}static or(e){let t=U.resolve(!1);for(const r of e)t=t.next(s=>s?U.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new U((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;t(e[h]).next(f=>{a[h]=f,++l,l===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new U((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function ww(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ri(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Cc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Cc.oe=-1;function la(n){return n==null}function xo(n){return n===0&&1/n==-1/0}function Tw(n){return typeof n=="number"&&Number.isInteger(n)&&!xo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function ad(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ar(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function $p(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Fe{constructor(e,t){this.comparator=e,this.root=t||rt.EMPTY}insert(e,t){return new Fe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new oo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new oo(this.root,e,this.comparator,!1)}getReverseIterator(){return new oo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new oo(this.root,e,this.comparator,!0)}}class oo{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??rt.RED,this.left=s??rt.EMPTY,this.right=i??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new rt(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return rt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ce();const e=this.left.check();if(e!==this.right.check())throw ce();return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw ce()}get value(){throw ce()}get color(){throw ce()}get left(){throw ce()}get right(){throw ce()}copy(e,t,r,s,i){return this}insert(e,t,r){return new rt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class it{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ld(this.data.getIterator())}getIteratorFrom(e){return new ld(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof it)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new it(this.comparator);return t.data=e,t}}class ld{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Nt{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new Nt([])}unionWith(e){let t=new it(st.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Nt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return rs(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new jp("Invalid base64 string: "+i):i}}(e);return new at(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new at(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const Iw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function er(n){if(Se(!!n),typeof n=="string"){let e=0;const t=Iw.exec(n);if(Se(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(n.seconds),nanos:qe(n.nanos)}}function qe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function wr(n){return typeof n=="string"?at.fromBase64String(n):at.fromUint8Array(n)}/**
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
 */function ca(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function kc(n){const e=n.mapValue.fields.__previous_value__;return ca(e)?kc(e):e}function ui(n){const e=er(n.mapValue.fields.__local_write_time__.timestampValue);return new Ye(e.seconds,e.nanos)}/**
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
 */class Aw{constructor(e,t,r,s,i,a,l,c,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class hi{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new hi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof hi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ao={mapValue:{}};function Tr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ca(n)?4:Rw(n)?9007199254740991:bw(n)?10:11:ce()}function un(n,e){if(n===e)return!0;const t=Tr(n);if(t!==Tr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ui(n).isEqual(ui(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=er(s.timestampValue),l=er(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return wr(s.bytesValue).isEqual(wr(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return qe(s.geoPointValue.latitude)===qe(i.geoPointValue.latitude)&&qe(s.geoPointValue.longitude)===qe(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return qe(s.integerValue)===qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=qe(s.doubleValue),l=qe(i.doubleValue);return a===l?xo(a)===xo(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return rs(n.arrayValue.values||[],e.arrayValue.values||[],un);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(ad(a)!==ad(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!un(a[c],l[c])))return!1;return!0}(n,e);default:return ce()}}function di(n,e){return(n.values||[]).find(t=>un(t,e))!==void 0}function ss(n,e){if(n===e)return 0;const t=Tr(n),r=Tr(e);if(t!==r)return Ie(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ie(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=qe(i.integerValue||i.doubleValue),c=qe(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return cd(n.timestampValue,e.timestampValue);case 4:return cd(ui(n),ui(e));case 5:return Ie(n.stringValue,e.stringValue);case 6:return function(i,a){const l=wr(i),c=wr(a);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=Ie(l[h],c[h]);if(f!==0)return f}return Ie(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=Ie(qe(i.latitude),qe(a.latitude));return l!==0?l:Ie(qe(i.longitude),qe(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return ud(n.arrayValue,e.arrayValue);case 10:return function(i,a){var l,c,h,f;const p=i.fields||{},_=a.fields||{},b=(l=p.value)===null||l===void 0?void 0:l.arrayValue,k=(c=_.value)===null||c===void 0?void 0:c.arrayValue,P=Ie(((h=b==null?void 0:b.values)===null||h===void 0?void 0:h.length)||0,((f=k==null?void 0:k.values)===null||f===void 0?void 0:f.length)||0);return P!==0?P:ud(b,k)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===ao.mapValue&&a===ao.mapValue)return 0;if(i===ao.mapValue)return 1;if(a===ao.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const _=Ie(c[p],f[p]);if(_!==0)return _;const b=ss(l[c[p]],h[f[p]]);if(b!==0)return b}return Ie(c.length,f.length)}(n.mapValue,e.mapValue);default:throw ce()}}function cd(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ie(n,e);const t=er(n),r=er(e),s=Ie(t.seconds,r.seconds);return s!==0?s:Ie(t.nanos,r.nanos)}function ud(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=ss(t[s],r[s]);if(i)return i}return Ie(t.length,r.length)}function is(n){return ql(n)}function ql(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=er(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return wr(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Z.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=ql(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${ql(t.fields[a])}`;return s+"}"}(n.mapValue):ce()}function Mo(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Wl(n){return!!n&&"integerValue"in n}function Vc(n){return!!n&&"arrayValue"in n}function hd(n){return!!n&&"nullValue"in n}function dd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function mo(n){return!!n&&"mapValue"in n}function bw(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Zs(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ar(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Zs(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Zs(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Rw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class bt{constructor(e){this.value=e}static empty(){return new bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!mo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Zs(t)}setAll(e){let t=st.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=Zs(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());mo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return un(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];mo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Ar(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new bt(Zs(this.value))}}function qp(n){const e=[];return Ar(n.fields,(t,r)=>{const s=new st([t]);if(mo(r)){const i=qp(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Nt(e)}/**
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
 */class gt{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new gt(e,0,de.min(),de.min(),de.min(),bt.empty(),0)}static newFoundDocument(e,t,r,s){return new gt(e,1,t,de.min(),r,s,0)}static newNoDocument(e,t){return new gt(e,2,t,de.min(),de.min(),bt.empty(),0)}static newUnknownDocument(e,t){return new gt(e,3,t,de.min(),de.min(),bt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class os{constructor(e,t){this.position=e,this.inclusive=t}}function fd(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=Z.comparator(Z.fromName(a.referenceValue),t.key):r=ss(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function pd(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!un(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class fi{constructor(e,t="asc"){this.field=e,this.dir=t}}function Sw(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Wp{}class ze extends Wp{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Cw(e,t,r):t==="array-contains"?new Dw(e,r):t==="in"?new Nw(e,r):t==="not-in"?new Ow(e,r):t==="array-contains-any"?new xw(e,r):new ze(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new kw(e,r):new Vw(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ss(t,this.value)):t!==null&&Tr(this.value)===Tr(t)&&this.matchesComparison(ss(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kt extends Wp{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Kt(e,t)}matches(e){return Hp(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Hp(n){return n.op==="and"}function Kp(n){return Pw(n)&&Hp(n)}function Pw(n){for(const e of n.filters)if(e instanceof Kt)return!1;return!0}function Hl(n){if(n instanceof ze)return n.field.canonicalString()+n.op.toString()+is(n.value);if(Kp(n))return n.filters.map(e=>Hl(e)).join(",");{const e=n.filters.map(t=>Hl(t)).join(",");return`${n.op}(${e})`}}function zp(n,e){return n instanceof ze?function(r,s){return s instanceof ze&&r.op===s.op&&r.field.isEqual(s.field)&&un(r.value,s.value)}(n,e):n instanceof Kt?function(r,s){return s instanceof Kt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&zp(a,s.filters[l]),!0):!1}(n,e):void ce()}function Gp(n){return n instanceof ze?function(t){return`${t.field.canonicalString()} ${t.op} ${is(t.value)}`}(n):n instanceof Kt?function(t){return t.op.toString()+" {"+t.getFilters().map(Gp).join(" ,")+"}"}(n):"Filter"}class Cw extends ze{constructor(e,t,r){super(e,t,r),this.key=Z.fromName(r.referenceValue)}matches(e){const t=Z.comparator(e.key,this.key);return this.matchesComparison(t)}}class kw extends ze{constructor(e,t){super(e,"in",t),this.keys=Qp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Vw extends ze{constructor(e,t){super(e,"not-in",t),this.keys=Qp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Qp(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>Z.fromName(r.referenceValue))}class Dw extends ze{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Vc(t)&&di(t.arrayValue,this.value)}}class Nw extends ze{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&di(this.value.arrayValue,t)}}class Ow extends ze{constructor(e,t){super(e,"not-in",t)}matches(e){if(di(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!di(this.value.arrayValue,t)}}class xw extends ze{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Vc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>di(this.value.arrayValue,r))}}/**
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
 */class Mw{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.ue=null}}function gd(n,e=null,t=[],r=[],s=null,i=null,a=null){return new Mw(n,e,t,r,s,i,a)}function Dc(n){const e=fe(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Hl(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),la(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>is(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>is(r)).join(",")),e.ue=t}return e.ue}function Nc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Sw(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!zp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!pd(n.startAt,e.startAt)&&pd(n.endAt,e.endAt)}function Kl(n){return Z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class br{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Lw(n,e,t,r,s,i,a,l){return new br(n,e,t,r,s,i,a,l)}function ua(n){return new br(n)}function md(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Oc(n){return n.collectionGroup!==null}function Gr(n){const e=fe(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new it(st.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new fi(i,r))}),t.has(st.keyField().canonicalString())||e.ce.push(new fi(st.keyField(),r))}return e.ce}function nn(n){const e=fe(n);return e.le||(e.le=Fw(e,Gr(n))),e.le}function Fw(n,e){if(n.limitType==="F")return gd(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new fi(s.field,i)});const t=n.endAt?new os(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new os(n.startAt.position,n.startAt.inclusive):null;return gd(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function zl(n,e){const t=n.filters.concat([e]);return new br(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Lo(n,e,t){return new br(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ha(n,e){return Nc(nn(n),nn(e))&&n.limitType===e.limitType}function Yp(n){return`${Dc(nn(n))}|lt:${n.limitType}`}function Lr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Gp(s)).join(", ")}]`),la(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>is(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>is(s)).join(",")),`Target(${r})`}(nn(n))}; limitType=${n.limitType})`}function da(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Z.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Gr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=fd(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,Gr(r),s)||r.endAt&&!function(a,l,c){const h=fd(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,Gr(r),s))}(n,e)}function Uw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Jp(n){return(e,t)=>{let r=!1;for(const s of Gr(n)){const i=Bw(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Bw(n,e,t){const r=n.field.isKeyField()?Z.comparator(e.key,t.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?ss(c,h):ce()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ce()}}/**
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
 */class fs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ar(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return $p(this.inner)}size(){return this.innerSize}}/**
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
 */const $w=new Fe(Z.comparator);function Cn(){return $w}const Xp=new Fe(Z.comparator);function js(...n){let e=Xp;for(const t of n)e=e.insert(t.key,t);return e}function Zp(n){let e=Xp;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function gr(){return ei()}function eg(){return ei()}function ei(){return new fs(n=>n.toString(),(n,e)=>n.isEqual(e))}const jw=new Fe(Z.comparator),qw=new it(Z.comparator);function _e(...n){let e=qw;for(const t of n)e=e.add(t);return e}const Ww=new it(Ie);function Hw(){return Ww}/**
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
 */function xc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xo(e)?"-0":e}}function tg(n){return{integerValue:""+n}}function Kw(n,e){return Tw(e)?tg(e):xc(n,e)}/**
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
 */class fa{constructor(){this._=void 0}}function zw(n,e,t){return n instanceof pi?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ca(i)&&(i=kc(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):n instanceof gi?rg(n,e):n instanceof mi?sg(n,e):function(s,i){const a=ng(s,i),l=_d(a)+_d(s.Pe);return Wl(a)&&Wl(s.Pe)?tg(l):xc(s.serializer,l)}(n,e)}function Gw(n,e,t){return n instanceof gi?rg(n,e):n instanceof mi?sg(n,e):t}function ng(n,e){return n instanceof Fo?function(r){return Wl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class pi extends fa{}class gi extends fa{constructor(e){super(),this.elements=e}}function rg(n,e){const t=ig(e);for(const r of n.elements)t.some(s=>un(s,r))||t.push(r);return{arrayValue:{values:t}}}class mi extends fa{constructor(e){super(),this.elements=e}}function sg(n,e){let t=ig(e);for(const r of n.elements)t=t.filter(s=>!un(s,r));return{arrayValue:{values:t}}}class Fo extends fa{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function _d(n){return qe(n.integerValue||n.doubleValue)}function ig(n){return Vc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Qw{constructor(e,t){this.field=e,this.transform=t}}function Yw(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof gi&&s instanceof gi||r instanceof mi&&s instanceof mi?rs(r.elements,s.elements,un):r instanceof Fo&&s instanceof Fo?un(r.Pe,s.Pe):r instanceof pi&&s instanceof pi}(n.transform,e.transform)}class Jw{constructor(e,t){this.version=e,this.transformResults=t}}class Rt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Rt}static exists(e){return new Rt(void 0,e)}static updateTime(e){return new Rt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _o(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class pa{}function og(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ga(n.key,Rt.none()):new Si(n.key,n.data,Rt.none());{const t=n.data,r=bt.empty();let s=new it(st.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new rr(n.key,r,new Nt(s.toArray()),Rt.none())}}function Xw(n,e,t){n instanceof Si?function(s,i,a){const l=s.value.clone(),c=vd(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof rr?function(s,i,a){if(!_o(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=vd(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(ag(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function ti(n,e,t,r){return n instanceof Si?function(i,a,l,c){if(!_o(i.precondition,a))return l;const h=i.value.clone(),f=Ed(i.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof rr?function(i,a,l,c){if(!_o(i.precondition,a))return l;const h=Ed(i.fieldTransforms,c,a),f=a.data;return f.setAll(ag(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,a,l){return _o(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function Zw(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=ng(r.transform,s||null);i!=null&&(t===null&&(t=bt.empty()),t.set(r.field,i))}return t||null}function yd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&rs(r,s,(i,a)=>Yw(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Si extends pa{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class rr extends pa{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ag(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function vd(n,e,t){const r=new Map;Se(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,Gw(a,l,t[s]))}return r}function Ed(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,zw(i,a,e))}return r}class ga extends pa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class eT extends pa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class tT{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Xw(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ti(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ti(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=eg();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const c=og(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(de.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),_e())}isEqual(e){return this.batchId===e.batchId&&rs(this.mutations,e.mutations,(t,r)=>yd(t,r))&&rs(this.baseMutations,e.baseMutations,(t,r)=>yd(t,r))}}class Mc{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Se(e.mutations.length===r.length);let s=function(){return jw}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Mc(e,t,r,s)}}/**
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
 */class nT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class rT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var He,Ee;function sT(n){switch(n){default:return ce();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function lg(n){if(n===void 0)return Pn("GRPC error has no .code"),N.UNKNOWN;switch(n){case He.OK:return N.OK;case He.CANCELLED:return N.CANCELLED;case He.UNKNOWN:return N.UNKNOWN;case He.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case He.INTERNAL:return N.INTERNAL;case He.UNAVAILABLE:return N.UNAVAILABLE;case He.UNAUTHENTICATED:return N.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case He.NOT_FOUND:return N.NOT_FOUND;case He.ALREADY_EXISTS:return N.ALREADY_EXISTS;case He.PERMISSION_DENIED:return N.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case He.ABORTED:return N.ABORTED;case He.OUT_OF_RANGE:return N.OUT_OF_RANGE;case He.UNIMPLEMENTED:return N.UNIMPLEMENTED;case He.DATA_LOSS:return N.DATA_LOSS;default:return ce()}}(Ee=He||(He={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function iT(){return new TextEncoder}/**
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
 */const oT=new yr([4294967295,4294967295],0);function wd(n){const e=iT().encode(n),t=new Np;return t.update(e),new Uint8Array(t.digest())}function Td(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new yr([t,r],0),new yr([s,i],0)]}class Lc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new qs(`Invalid padding: ${t}`);if(r<0)throw new qs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new qs(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new qs(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=yr.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(yr.fromNumber(r)));return s.compare(oT)===1&&(s=new yr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=wd(e),[r,s]=Td(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Lc(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=wd(e),[r,s]=Td(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class qs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ma{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Pi.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ma(de.min(),s,new Fe(Ie),Cn(),_e())}}class Pi{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Pi(r,t,_e(),_e(),_e())}}/**
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
 */class yo{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class cg{constructor(e,t){this.targetId=e,this.me=t}}class ug{constructor(e,t,r=at.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Id{constructor(){this.fe=0,this.ge=bd(),this.pe=at.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=_e(),t=_e(),r=_e();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:ce()}}),new Pi(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=bd()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Se(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class aT{constructor(e){this.Le=e,this.Be=new Map,this.ke=Cn(),this.qe=Ad(),this.Qe=new Fe(Ie)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:ce()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(Kl(i))if(r===0){const a=new Z(i.path);this.Ue(t,a,gt.newNoDocument(a,de.min()))}else Se(r===1);else{const a=this.Ye(t);if(a!==r){const l=this.Ze(e),c=l?this.Xe(l,e,a):1;if(c!==0){this.je(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=wr(r).toUint8Array()}catch(c){if(c instanceof jp)return ns("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Lc(a,s,i)}catch(c){return ns(c instanceof qs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,a)=>{const l=this.Je(a);if(l){if(i.current&&Kl(l.target)){const c=new Z(l.target.path);this.ke.get(c)!==null||this.it(a,c)||this.Ue(a,c,gt.newNoDocument(c,e))}i.be&&(t.set(a,i.ve()),i.Ce())}});let r=_e();this.qe.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new ma(e,t,this.Qe,this.ke,r);return this.ke=Cn(),this.qe=Ad(),this.Qe=new Fe(Ie),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Id,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new it(Ie),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||J("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Id),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Ad(){return new Fe(Z.comparator)}function bd(){return new Fe(Z.comparator)}const lT={asc:"ASCENDING",desc:"DESCENDING"},cT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},uT={and:"AND",or:"OR"};class hT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Gl(n,e){return n.useProto3Json||la(e)?e:{value:e}}function Uo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hg(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function dT(n,e){return Uo(n,e.toTimestamp())}function rn(n){return Se(!!n),de.fromTimestamp(function(t){const r=er(t);return new Ye(r.seconds,r.nanos)}(n))}function Fc(n,e){return Ql(n,e).canonicalString()}function Ql(n,e){const t=function(s){return new Oe(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function dg(n){const e=Oe.fromString(n);return Se(_g(e)),e}function Yl(n,e){return Fc(n.databaseId,e.path)}function dl(n,e){const t=dg(e);if(t.get(1)!==n.databaseId.projectId)throw new K(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new K(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Z(pg(t))}function fg(n,e){return Fc(n.databaseId,e)}function fT(n){const e=dg(n);return e.length===4?Oe.emptyPath():pg(e)}function Jl(n){return new Oe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function pg(n){return Se(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Rd(n,e,t){return{name:Yl(n,e),fields:t.value.mapValue.fields}}function pT(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ce()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Se(f===void 0||typeof f=="string"),at.fromBase64String(f||"")):(Se(f===void 0||f instanceof Buffer||f instanceof Uint8Array),at.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?N.UNKNOWN:lg(h.code);return new K(f,h.message||"")}(a);t=new ug(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=dl(n,r.document.name),i=rn(r.document.updateTime),a=r.document.createTime?rn(r.document.createTime):de.min(),l=new bt({mapValue:{fields:r.document.fields}}),c=gt.newFoundDocument(s,i,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];t=new yo(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=dl(n,r.document),i=r.readTime?rn(r.readTime):de.min(),a=gt.newNoDocument(s,i),l=r.removedTargetIds||[];t=new yo([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=dl(n,r.document),i=r.removedTargetIds||[];t=new yo([],i,s,null)}else{if(!("filter"in e))return ce();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new rT(s,i),l=r.targetId;t=new cg(l,a)}}return t}function gT(n,e){let t;if(e instanceof Si)t={update:Rd(n,e.key,e.value)};else if(e instanceof ga)t={delete:Yl(n,e.key)};else if(e instanceof rr)t={update:Rd(n,e.key,e.data),updateMask:AT(e.fieldMask)};else{if(!(e instanceof eT))return ce();t={verify:Yl(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof pi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof gi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof mi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Fo)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw ce()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:dT(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ce()}(n,e.precondition)),t}function mT(n,e){return n&&n.length>0?(Se(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?rn(s.updateTime):rn(i);return a.isEqual(de.min())&&(a=rn(i)),new Jw(a,s.transformResults||[])}(t,e))):[]}function _T(n,e){return{documents:[fg(n,e.path)]}}function yT(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=fg(n,s);const i=function(h){if(h.length!==0)return mg(Kt.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(_){return{field:Fr(_.field),direction:wT(_.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Gl(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:s}}function vT(n){let e=fT(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Se(r===1);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(p){const _=gg(p);return _ instanceof Kt&&Kp(_)?_.getFilters():[_]}(t.where));let a=[];t.orderBy&&(a=function(p){return p.map(_=>function(k){return new fi(Ur(k.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(_))}(t.orderBy));let l=null;t.limit&&(l=function(p){let _;return _=typeof p=="object"?p.value:p,la(_)?null:_}(t.limit));let c=null;t.startAt&&(c=function(p){const _=!!p.before,b=p.values||[];return new os(b,_)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const _=!p.before,b=p.values||[];return new os(b,_)}(t.endAt)),Lw(e,s,a,i,l,"F",c,h)}function ET(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function gg(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Ur(t.unaryFilter.field);return ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ur(t.unaryFilter.field);return ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ur(t.unaryFilter.field);return ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ur(t.unaryFilter.field);return ze.create(a,"!=",{nullValue:"NULL_VALUE"});default:return ce()}}(n):n.fieldFilter!==void 0?function(t){return ze.create(Ur(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ce()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Kt.create(t.compositeFilter.filters.map(r=>gg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ce()}}(t.compositeFilter.op))}(n):ce()}function wT(n){return lT[n]}function TT(n){return cT[n]}function IT(n){return uT[n]}function Fr(n){return{fieldPath:n.canonicalString()}}function Ur(n){return st.fromServerFormat(n.fieldPath)}function mg(n){return n instanceof ze?function(t){if(t.op==="=="){if(dd(t.value))return{unaryFilter:{field:Fr(t.field),op:"IS_NAN"}};if(hd(t.value))return{unaryFilter:{field:Fr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(dd(t.value))return{unaryFilter:{field:Fr(t.field),op:"IS_NOT_NAN"}};if(hd(t.value))return{unaryFilter:{field:Fr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fr(t.field),op:TT(t.op),value:t.value}}}(n):n instanceof Kt?function(t){const r=t.getFilters().map(s=>mg(s));return r.length===1?r[0]:{compositeFilter:{op:IT(t.op),filters:r}}}(n):ce()}function AT(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function _g(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Kn{constructor(e,t,r,s,i=de.min(),a=de.min(),l=at.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Kn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class bT{constructor(e){this.ct=e}}function RT(n){const e=vT({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Lo(e,e.limit,"L"):e}/**
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
 */class ST{constructor(){this.un=new PT}addToCollectionParentIndex(e,t){return this.un.add(t),U.resolve()}getCollectionParents(e,t){return U.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return U.resolve()}deleteFieldIndex(e,t){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,t){return U.resolve()}getDocumentsMatchingTarget(e,t){return U.resolve(null)}getIndexType(e,t){return U.resolve(0)}getFieldIndexes(e,t){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,t){return U.resolve(Zn.min())}getMinOffsetFromCollectionGroup(e,t){return U.resolve(Zn.min())}updateCollectionGroup(e,t,r){return U.resolve()}updateIndexEntries(e,t){return U.resolve()}}class PT{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new it(Oe.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new it(Oe.comparator)).toArray()}}/**
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
 */class as{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new as(0)}static kn(){return new as(-1)}}/**
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
 */class CT{constructor(){this.changes=new fs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?U.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class kT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class VT{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&ti(r.mutation,s,Nt.empty(),Ye.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,_e()).next(()=>r))}getLocalViewOfDocuments(e,t,r=_e()){const s=gr();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=js();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=gr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,_e()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=Cn();const a=ei(),l=function(){return ei()}();return t.forEach((c,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof rr)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),ti(f.mutation,h,f.mutation.getFieldMask(),Ye.now())):a.set(h.key,Nt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var p;return l.set(h,new kT(f,(p=a.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,t){const r=ei();let s=new Fe((a,l)=>a-l),i=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let f=r.get(c)||Nt.empty();f=l.applyToLocalView(h,f),r.set(c,f);const p=(s.get(l.batchId)||_e()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,p=eg();f.forEach(_=>{if(!i.has(_)){const b=og(t.get(_),r.get(_));b!==null&&p.set(_,b),i=i.add(_)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return U.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return Z.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Oc(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):U.resolve(gr());let l=-1,c=i;return a.next(h=>U.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?U.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{c=c.insert(f,_)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,_e())).next(f=>({batchId:l,changes:Zp(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Z(t)).next(r=>{let s=js();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=js();return this.indexManager.getCollectionParents(e,i).next(l=>U.forEach(l,c=>{const h=function(p,_){return new br(_,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,_)=>{a=a.insert(p,_)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,gt.newInvalidDocument(f)))});let l=js();return a.forEach((c,h)=>{const f=i.get(c);f!==void 0&&ti(f.mutation,h,Nt.empty(),Ye.now()),da(t,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class DT{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return U.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:rn(s.createTime)}}(t)),U.resolve()}getNamedQuery(e,t){return U.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:RT(s.bundledQuery),readTime:rn(s.readTime)}}(t)),U.resolve()}}/**
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
 */class NT{constructor(){this.overlays=new Fe(Z.comparator),this.Ir=new Map}getOverlay(e,t){return U.resolve(this.overlays.get(t))}getOverlays(e,t){const r=gr();return U.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),U.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),U.resolve()}getOverlaysForCollection(e,t,r){const s=gr(),i=t.length+1,a=new Z(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return U.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Fe((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=gr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=gr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return U.resolve(l)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new nT(t,r));let i=this.Ir.get(t);i===void 0&&(i=_e(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
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
 */class OT{constructor(){this.sessionToken=at.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,U.resolve()}}/**
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
 */class Uc{constructor(){this.Tr=new it(Xe.Er),this.dr=new it(Xe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new Xe(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new Xe(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new Z(new Oe([])),r=new Xe(t,e),s=new Xe(t,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new Z(new Oe([])),r=new Xe(t,e),s=new Xe(t,e+1);let i=_e();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Xe(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return Z.comparator(e.key,t.key)||Ie(e.wr,t.wr)}static Ar(e,t){return Ie(e.wr,t.wr)||Z.comparator(e.key,t.key)}}/**
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
 */class xT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new it(Xe.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new tT(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.br=this.br.add(new Xe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(a)}lookupMutationBatch(e,t){return U.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Xe(t,0),s=new Xe(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const l=this.Dr(a.wr);i.push(l)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new it(Ie);return t.forEach(s=>{const i=new Xe(s,0),a=new Xe(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],l=>{r=r.add(l.wr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;Z.isDocumentKey(i)||(i=i.child(""));const a=new Xe(new Z(i),0);let l=new it(Ie);return this.br.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.wr)),!0)},a),U.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Se(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return U.forEach(t.mutations,s=>{const i=new Xe(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new Xe(t,0),s=this.br.firstAfterOrEqual(r);return U.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class MT{constructor(e){this.Mr=e,this.docs=function(){return new Fe(Z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return U.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(t))}getEntries(e,t){let r=Cn();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():gt.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Cn();const a=t.path,l=new Z(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||yw(_w(f),r)<=0||(s.has(f.key)||da(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,t,r,s){ce()}Or(e,t){return U.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new LT(this)}getSize(e){return U.resolve(this.size)}}class LT extends CT{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),U.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class FT{constructor(e){this.persistence=e,this.Nr=new fs(t=>Dc(t),Nc),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Uc,this.targetCount=0,this.kr=as.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),U.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new as(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,U.resolve()}updateTargetData(e,t){return this.Kn(t),U.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return U.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),U.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),U.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return U.resolve(r)}containsKey(e,t){return U.resolve(this.Br.containsKey(t))}}/**
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
 */class UT{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Cc(0),this.Kr=!1,this.Kr=!0,this.$r=new OT,this.referenceDelegate=e(this),this.Ur=new FT(this),this.indexManager=new ST,this.remoteDocumentCache=function(s){return new MT(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new bT(t),this.Gr=new DT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new NT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new xT(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){J("MemoryPersistence","Starting transaction:",e);const s=new BT(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return U.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class BT extends Ew{constructor(e){super(),this.currentSequenceNumber=e}}class Bc{constructor(e){this.persistence=e,this.Jr=new Uc,this.Yr=null}static Zr(e){return new Bc(e)}get Xr(){if(this.Yr)return this.Yr;throw ce()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),U.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),U.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,r=>{const s=Z.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,de.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return U.or([()=>U.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class $c{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=_e(),s=_e();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new $c(e,t.fromCache,r,s)}}/**
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
 */class $T{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class jT{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Wv()?8:ww(yt())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new $T;return this.Xi(e,t,a).next(l=>{if(i.result=l,this.zi)return this.es(e,t,a,l.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(Os()<=ye.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",Lr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(Os()<=ye.DEBUG&&J("QueryEngine","Query:",Lr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Os()<=ye.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",Lr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nn(t))):U.resolve())}Yi(e,t){if(md(t))return U.resolve(null);let r=nn(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Lo(t,null,"F"),r=nn(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=_e(...i);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.ts(t,l);return this.ns(t,h,a,c.readTime)?this.Yi(e,Lo(t,null,"F")):this.rs(e,h,t,c)}))})))}Zi(e,t,r,s){return md(t)||s.isEqual(de.min())?U.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(t,i);return this.ns(t,a,r,s)?U.resolve(null):(Os()<=ye.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Lr(t)),this.rs(e,a,t,mw(s,-1)).next(l=>l))})}ts(e,t){let r=new it(Jp(e));return t.forEach((s,i)=>{da(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return Os()<=ye.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",Lr(t)),this.Ji.getDocumentsMatchingQuery(e,t,Zn.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */class qT{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new Fe(Ie),this._s=new fs(i=>Dc(i),Nc),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new VT(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function WT(n,e,t,r){return new qT(n,e,t,r)}async function yg(n,e){const t=fe(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=_e();for(const h of s){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(r,c).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:l}))})})}function HT(n,e){const t=fe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const p=h.batch,_=p.keys();let b=U.resolve();return _.forEach(k=>{b=b.next(()=>f.getEntry(c,k)).next(P=>{const C=h.docVersions.get(k);Se(C!==null),P.version.compareTo(C)<0&&(p.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),f.addEntry(P)))})}),b.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=_e();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function vg(n){const e=fe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function KT(n,e){const t=fe(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const l=[];e.targetChanges.forEach((f,p)=>{const _=s.get(p);if(!_)return;l.push(t.Ur.removeMatchingKeys(i,f.removedDocuments,p).next(()=>t.Ur.addMatchingKeys(i,f.addedDocuments,p)));let b=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?b=b.withResumeToken(at.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):f.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(f.resumeToken,r)),s=s.insert(p,b),function(P,C,B){return P.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(_,b,f)&&l.push(t.Ur.updateTargetData(i,b))});let c=Cn(),h=_e();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(zT(i,a,e.documentUpdates).next(f=>{c=f.Ps,h=f.Is})),!r.isEqual(de.min())){const f=t.Ur.getLastRemoteSnapshotVersion(i).next(p=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return U.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(t.os=s,i))}function zT(n,e,t){let r=_e(),s=_e();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Cn();return t.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(de.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):J("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Ps:a,Is:s}})}function GT(n,e){const t=fe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function QT(n,e){const t=fe(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):t.Ur.allocateTargetId(r).next(a=>(s=new Kn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function Xl(n,e,t){const r=fe(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Ri(a))throw a;J("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Sd(n,e,t){const r=fe(n);let s=de.min(),i=_e();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,f){const p=fe(c),_=p._s.get(f);return _!==void 0?U.resolve(p.os.get(_)):p.Ur.getTargetData(h,f)}(r,a,nn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?s:de.min(),t?i:_e())).next(l=>(YT(r,Uw(e),l),{documents:l,Ts:i})))}function YT(n,e,t){let r=n.us.get(e)||de.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}class Pd{constructor(){this.activeTargetIds=Hw()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class JT{constructor(){this.so=new Pd,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Pd,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class XT{_o(e){}shutdown(){}}/**
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
 */let lo=null;function fl(){return lo===null?lo=function(){return 268435456+Math.round(2147483648*Math.random())}():lo++,"0x"+lo.toString(16)}/**
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
 */const ZT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class eI{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const dt="WebChannelConnection";class tI extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,a){const l=fl(),c=this.xo(t,r.toUriEncodedString());J("RestConnection",`Sending RPC '${t}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,a),this.No(t,c,h,s).then(f=>(J("RestConnection",`Received RPC '${t}' ${l}: `,f),f),f=>{throw ns("RestConnection",`RPC '${t}' ${l} failed with error: `,f,"url: ",c,"request:",s),f})}Lo(t,r,s,i,a,l){return this.Mo(t,r,s,i,a)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ds}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}xo(t,r){const s=ZT[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=fl();return new Promise((a,l)=>{const c=new Op;c.setWithCredentials(!0),c.listenOnce(xp.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case go.NO_ERROR:const f=c.getResponseJson();J(dt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),a(f);break;case go.TIMEOUT:J(dt,`RPC '${e}' ${i} timed out`),l(new K(N.DEADLINE_EXCEEDED,"Request time out"));break;case go.HTTP_ERROR:const p=c.getStatus();if(J(dt,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let _=c.getResponseJson();Array.isArray(_)&&(_=_[0]);const b=_==null?void 0:_.error;if(b&&b.status&&b.message){const k=function(C){const B=C.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(B)>=0?B:N.UNKNOWN}(b.status);l(new K(k,b.message))}else l(new K(N.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new K(N.UNAVAILABLE,"Connection failed."));break;default:ce()}}finally{J(dt,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);J(dt,`RPC '${e}' ${i} sending request:`,s),c.send(t,"POST",h,r,15)})}Bo(e,t,r){const s=fl(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Fp(),l=Lp(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const f=i.join("");J(dt,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=a.createWebChannel(f,c);let _=!1,b=!1;const k=new eI({Io:C=>{b?J(dt,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(_||(J(dt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),_=!0),J(dt,`RPC '${e}' stream ${s} sending:`,C),p.send(C))},To:()=>p.close()}),P=(C,B,$)=>{C.listen(B,z=>{try{$(z)}catch(q){setTimeout(()=>{throw q},0)}})};return P(p,$s.EventType.OPEN,()=>{b||(J(dt,`RPC '${e}' stream ${s} transport opened.`),k.yo())}),P(p,$s.EventType.CLOSE,()=>{b||(b=!0,J(dt,`RPC '${e}' stream ${s} transport closed`),k.So())}),P(p,$s.EventType.ERROR,C=>{b||(b=!0,ns(dt,`RPC '${e}' stream ${s} transport errored:`,C),k.So(new K(N.UNAVAILABLE,"The operation could not be completed")))}),P(p,$s.EventType.MESSAGE,C=>{var B;if(!b){const $=C.data[0];Se(!!$);const z=$,q=z.error||((B=z[0])===null||B===void 0?void 0:B.error);if(q){J(dt,`RPC '${e}' stream ${s} received error:`,q);const ae=q.status;let oe=function(y){const I=He[y];if(I!==void 0)return lg(I)}(ae),T=q.message;oe===void 0&&(oe=N.INTERNAL,T="Unknown error status: "+ae+" with message "+q.message),b=!0,k.So(new K(oe,T)),p.close()}else J(dt,`RPC '${e}' stream ${s} received:`,$),k.bo($)}}),P(l,Mp.STAT_EVENT,C=>{C.stat===jl.PROXY?J(dt,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===jl.NOPROXY&&J(dt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.wo()},0),k}}function pl(){return typeof document<"u"?document:null}/**
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
 */function _a(n){return new hT(n,!0)}/**
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
 */class wg{constructor(e,t,r,s,i,a,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Eg(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(Pn(t.toString()),Pn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new K(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return J("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(J("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nI extends wg{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=pT(this.serializer,e),r=function(i){if(!("targetChange"in i))return de.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?de.min():a.readTime?rn(a.readTime):de.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Jl(this.serializer),t.addTarget=function(i,a){let l;const c=a.target;if(l=Kl(c)?{documents:_T(i,c)}:{query:yT(i,c)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=hg(i,a.resumeToken);const h=Gl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(de.min())>0){l.readTime=Uo(i,a.snapshotVersion.toTimestamp());const h=Gl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=ET(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Jl(this.serializer),t.removeTarget=e,this.a_(t)}}class rI extends wg{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Se(!!e.streamToken),this.lastStreamToken=e.streamToken,Se(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=mT(e.writeResults,e.commitTime),r=rn(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Jl(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>gT(this.serializer,r))};this.a_(t)}}/**
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
 */class sI extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new K(N.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,Ql(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(N.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,Ql(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new K(N.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class iI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Pn(t),this.D_=!1):J("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class oI{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{Rr(this)&&(J("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=fe(c);h.L_.add(4),await Ci(h),h.q_.set("Unknown"),h.L_.delete(4),await ya(h)}(this))})}),this.q_=new iI(r,s)}}async function ya(n){if(Rr(n))for(const e of n.B_)await e(!0)}async function Ci(n){for(const e of n.B_)await e(!1)}function Tg(n,e){const t=fe(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Hc(t)?Wc(t):ps(t).r_()&&qc(t,e))}function jc(n,e){const t=fe(n),r=ps(t);t.N_.delete(e),r.r_()&&Ig(t,e),t.N_.size===0&&(r.r_()?r.o_():Rr(t)&&t.q_.set("Unknown"))}function qc(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ps(n).A_(e)}function Ig(n,e){n.Q_.xe(e),ps(n).R_(e)}function Wc(n){n.Q_=new aT({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),ps(n).start(),n.q_.v_()}function Hc(n){return Rr(n)&&!ps(n).n_()&&n.N_.size>0}function Rr(n){return fe(n).L_.size===0}function Ag(n){n.Q_=void 0}async function aI(n){n.q_.set("Online")}async function lI(n){n.N_.forEach((e,t)=>{qc(n,e)})}async function cI(n,e){Ag(n),Hc(n)?(n.q_.M_(e),Wc(n)):n.q_.set("Unknown")}async function uI(n,e,t){if(n.q_.set("Online"),e instanceof ug&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.N_.delete(l),s.Q_.removeTarget(l))}(n,e)}catch(r){J("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Bo(n,r)}else if(e instanceof yo?n.Q_.Ke(e):e instanceof cg?n.Q_.He(e):n.Q_.We(e),!t.isEqual(de.min()))try{const r=await vg(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.Q_.rt(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const f=i.N_.get(c);if(!f)return;i.N_.set(c,f.withResumeToken(at.EMPTY_BYTE_STRING,f.snapshotVersion)),Ig(i,c);const p=new Kn(f.target,c,h,f.sequenceNumber);qc(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){J("RemoteStore","Failed to raise snapshot:",r),await Bo(n,r)}}async function Bo(n,e,t){if(!Ri(e))throw e;n.L_.add(1),await Ci(n),n.q_.set("Offline"),t||(t=()=>vg(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{J("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await ya(n)})}function bg(n,e){return e().catch(t=>Bo(n,t,e))}async function va(n){const e=fe(n),t=tr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;hI(e);)try{const s=await GT(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,dI(e,s)}catch(s){await Bo(e,s)}Rg(e)&&Sg(e)}function hI(n){return Rr(n)&&n.O_.length<10}function dI(n,e){n.O_.push(e);const t=tr(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Rg(n){return Rr(n)&&!tr(n).n_()&&n.O_.length>0}function Sg(n){tr(n).start()}async function fI(n){tr(n).p_()}async function pI(n){const e=tr(n);for(const t of n.O_)e.m_(t.mutations)}async function gI(n,e,t){const r=n.O_.shift(),s=Mc.from(r,e,t);await bg(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await va(n)}async function mI(n,e){e&&tr(n).V_&&await async function(r,s){if(function(a){return sT(a)&&a!==N.ABORTED}(s.code)){const i=r.O_.shift();tr(r).s_(),await bg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await va(r)}}(n,e),Rg(n)&&Sg(n)}async function kd(n,e){const t=fe(n);t.asyncQueue.verifyOperationInProgress(),J("RemoteStore","RemoteStore received new credentials");const r=Rr(t);t.L_.add(3),await Ci(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await ya(t)}async function _I(n,e){const t=fe(n);e?(t.L_.delete(2),await ya(t)):e||(t.L_.add(2),await Ci(t),t.q_.set("Unknown"))}function ps(n){return n.K_||(n.K_=function(t,r,s){const i=fe(t);return i.w_(),new nI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:aI.bind(null,n),Ro:lI.bind(null,n),mo:cI.bind(null,n),d_:uI.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Hc(n)?Wc(n):n.q_.set("Unknown")):(await n.K_.stop(),Ag(n))})),n.K_}function tr(n){return n.U_||(n.U_=function(t,r,s){const i=fe(t);return i.w_(),new rI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:fI.bind(null,n),mo:mI.bind(null,n),f_:pI.bind(null,n),g_:gI.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await va(n)):(await n.U_.stop(),n.O_.length>0&&(J("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class Kc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new Kc(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zc(n,e){if(Pn("AsyncQueue",`${e}: ${n}`),Ri(n))return new K(N.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Qr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||Z.comparator(t.key,r.key):(t,r)=>Z.comparator(t.key,r.key),this.keyedMap=js(),this.sortedSet=new Fe(this.comparator)}static emptySet(e){return new Qr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Qr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Qr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Vd{constructor(){this.W_=new Fe(Z.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):ce():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class ls{constructor(e,t,r,s,i,a,l,c,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new ls(e,t,Qr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ha(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class yI{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class vI{constructor(){this.queries=Dd(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=fe(t),i=s.queries;s.queries=Dd(),i.forEach((a,l)=>{for(const c of l.j_)c.onError(r)})})(this,new K(N.ABORTED,"Firestore shutting down"))}}function Dd(){return new fs(n=>Yp(n),ha)}async function Gc(n,e){const t=fe(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new yI,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=zc(a,`Initialization of query '${Lr(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&Yc(t)}async function Qc(n,e){const t=fe(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function EI(n,e){const t=fe(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.j_)l.X_(s)&&(r=!0);a.z_=s}}r&&Yc(t)}function wI(n,e,t){const r=fe(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function Yc(n){n.Y_.forEach(e=>{e.next()})}var Zl,Nd;(Nd=Zl||(Zl={})).ea="default",Nd.Cache="cache";class Jc{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ls(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=ls.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Zl.Cache}}/**
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
 */class Pg{constructor(e){this.key=e}}class Cg{constructor(e){this.key=e}}class TI{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=_e(),this.mutatedKeys=_e(),this.Aa=Jp(e),this.Ra=new Qr(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Vd,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const _=s.get(f),b=da(this.query,p)?p:null,k=!!_&&this.mutatedKeys.has(_.key),P=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let C=!1;_&&b?_.data.isEqual(b.data)?k!==P&&(r.track({type:3,doc:b}),C=!0):this.ga(_,b)||(r.track({type:2,doc:b}),C=!0,(c&&this.Aa(b,c)>0||h&&this.Aa(b,h)<0)&&(l=!0)):!_&&b?(r.track({type:0,doc:b}),C=!0):_&&!b&&(r.track({type:1,doc:_}),C=!0,(c||h)&&(l=!0)),C&&(b?(a=a.add(b),i=P?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:l,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,p)=>function(b,k){const P=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce()}};return P(b)-P(k)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),s=s!=null&&s;const l=t&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,h=c!==this.Ea;return this.Ea=c,a.length!==0||h?{snapshot:new ls(this.query,e.Ra,i,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Vd,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=_e(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Cg(r))}),this.da.forEach(r=>{e.has(r)||t.push(new Pg(r))}),t}ba(e){this.Ta=e.Ts,this.da=_e();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return ls.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class II{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class AI{constructor(e){this.key=e,this.va=!1}}class bI{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new fs(l=>Yp(l),ha),this.Ma=new Map,this.xa=new Set,this.Oa=new Fe(Z.comparator),this.Na=new Map,this.La=new Uc,this.Ba={},this.ka=new Map,this.qa=as.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function RI(n,e,t=!0){const r=xg(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await kg(r,e,t,!0),s}async function SI(n,e){const t=xg(n);await kg(t,e,!0,!1)}async function kg(n,e,t,r){const s=await QT(n.localStore,nn(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await PI(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Tg(n.remoteStore,s),l}async function PI(n,e,t,r,s){n.Ka=(p,_,b)=>async function(P,C,B,$){let z=C.view.ma(B);z.ns&&(z=await Sd(P.localStore,C.query,!1).then(({documents:T})=>C.view.ma(T,z)));const q=$&&$.targetChanges.get(C.targetId),ae=$&&$.targetMismatches.get(C.targetId)!=null,oe=C.view.applyChanges(z,P.isPrimaryClient,q,ae);return xd(P,C.targetId,oe.wa),oe.snapshot}(n,p,_,b);const i=await Sd(n.localStore,e,!0),a=new TI(e,i.Ts),l=a.ma(i.documents),c=Pi.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(l,n.isPrimaryClient,c);xd(n,t,h.wa);const f=new II(e,t,a);return n.Fa.set(e,f),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),h.snapshot}async function CI(n,e,t){const r=fe(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!ha(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Xl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&jc(r.remoteStore,s.targetId),ec(r,s.targetId)}).catch(bi)):(ec(r,s.targetId),await Xl(r.localStore,s.targetId,!0))}async function kI(n,e){const t=fe(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),jc(t.remoteStore,r.targetId))}async function VI(n,e,t){const r=FI(n);try{const s=await function(a,l){const c=fe(a),h=Ye.now(),f=l.reduce((b,k)=>b.add(k.key),_e());let p,_;return c.persistence.runTransaction("Locally write mutations","readwrite",b=>{let k=Cn(),P=_e();return c.cs.getEntries(b,f).next(C=>{k=C,k.forEach((B,$)=>{$.isValidDocument()||(P=P.add(B))})}).next(()=>c.localDocuments.getOverlayedDocuments(b,k)).next(C=>{p=C;const B=[];for(const $ of l){const z=Zw($,p.get($.key).overlayedDocument);z!=null&&B.push(new rr($.key,z,qp(z.value.mapValue),Rt.exists(!0)))}return c.mutationQueue.addMutationBatch(b,h,B,l)}).next(C=>{_=C;const B=C.applyToLocalDocumentSet(p,P);return c.documentOverlayCache.saveOverlays(b,C.batchId,B)})}).then(()=>({batchId:_.batchId,changes:Zp(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let h=a.Ba[a.currentUser.toKey()];h||(h=new Fe(Ie)),h=h.insert(l,c),a.Ba[a.currentUser.toKey()]=h}(r,s.batchId,t),await ki(r,s.changes),await va(r.remoteStore)}catch(s){const i=zc(s,"Failed to persist write");t.reject(i)}}async function Vg(n,e){const t=fe(n);try{const r=await KT(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Na.get(i);a&&(Se(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?Se(a.va):s.removedDocuments.size>0&&(Se(a.va),a.va=!1))}),await ki(t,r,e)}catch(r){await bi(r)}}function Od(n,e,t){const r=fe(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,a)=>{const l=a.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=fe(a);c.onlineState=l;let h=!1;c.queries.forEach((f,p)=>{for(const _ of p.j_)_.Z_(l)&&(h=!0)}),h&&Yc(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function DI(n,e,t){const r=fe(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new Fe(Z.comparator);a=a.insert(i,gt.newNoDocument(i,de.min()));const l=_e().add(i),c=new ma(de.min(),new Map,new Fe(Ie),a,l);await Vg(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),Xc(r)}else await Xl(r.localStore,e,!1).then(()=>ec(r,e,t)).catch(bi)}async function NI(n,e){const t=fe(n),r=e.batch.batchId;try{const s=await HT(t.localStore,e);Ng(t,r,null),Dg(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ki(t,s)}catch(s){await bi(s)}}async function OI(n,e,t){const r=fe(n);try{const s=await function(a,l){const c=fe(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(Se(p!==null),f=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(r.localStore,e);Ng(r,e,t),Dg(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ki(r,s)}catch(s){await bi(s)}}function Dg(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Ng(n,e,t){const r=fe(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function ec(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Og(n,r)})}function Og(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(jc(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Xc(n))}function xd(n,e,t){for(const r of t)r instanceof Pg?(n.La.addReference(r.key,e),xI(n,r)):r instanceof Cg?(J("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Og(n,r.key)):ce()}function xI(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(J("SyncEngine","New document in limbo: "+t),n.xa.add(r),Xc(n))}function Xc(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new Z(Oe.fromString(e)),r=n.qa.next();n.Na.set(r,new AI(t)),n.Oa=n.Oa.insert(t,r),Tg(n.remoteStore,new Kn(nn(ua(t.path)),r,"TargetPurposeLimboResolution",Cc.oe))}}async function ki(n,e,t){const r=fe(n),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{a.push(r.Ka(c,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=$c.Wi(c.targetId,h);i.push(p)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(c,h){const f=fe(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>U.forEach(h,_=>U.forEach(_.$i,b=>f.persistence.referenceDelegate.addReference(p,_.targetId,b)).next(()=>U.forEach(_.Ui,b=>f.persistence.referenceDelegate.removeReference(p,_.targetId,b)))))}catch(p){if(!Ri(p))throw p;J("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const _=p.targetId;if(!p.fromCache){const b=f.os.get(_),k=b.snapshotVersion,P=b.withLastLimboFreeSnapshotVersion(k);f.os=f.os.insert(_,P)}}}(r.localStore,i))}async function MI(n,e){const t=fe(n);if(!t.currentUser.isEqual(e)){J("SyncEngine","User change. New user:",e.toKey());const r=await yg(t.localStore,e);t.currentUser=e,function(i,a){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new K(N.CANCELLED,a))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ki(t,r.hs)}}function LI(n,e){const t=fe(n),r=t.Na.get(e);if(r&&r.va)return _e().add(r.key);{let s=_e();const i=t.Ma.get(e);if(!i)return s;for(const a of i){const l=t.Fa.get(a);s=s.unionWith(l.view.Va)}return s}}function xg(n){const e=fe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Vg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=LI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=DI.bind(null,e),e.Ca.d_=EI.bind(null,e.eventManager),e.Ca.$a=wI.bind(null,e.eventManager),e}function FI(n){const e=fe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=NI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=OI.bind(null,e),e}class $o{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=_a(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return WT(this.persistence,new jT,e.initialUser,this.serializer)}Ga(e){return new UT(Bc.Zr,this.serializer)}Wa(e){return new JT}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}$o.provider={build:()=>new $o};class tc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Od(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=MI.bind(null,this.syncEngine),await _I(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new vI}()}createDatastore(e){const t=_a(e.databaseInfo.databaseId),r=function(i){return new tI(i)}(e.databaseInfo);return function(i,a,l,c){return new sI(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new oI(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Od(this.syncEngine,t,0),function(){return Cd.D()?new Cd:new XT}())}createSyncEngine(e,t){return function(s,i,a,l,c,h,f){const p=new bI(s,i,a,l,c,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=fe(s);J("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Ci(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}tc.provider={build:()=>new tc};/**
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
 */class Zc{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Pn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class UI{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=ft.UNAUTHENTICATED,this.clientId=Bp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{J("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(J("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=zc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function gl(n,e){n.asyncQueue.verifyOperationInProgress(),J("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await yg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Md(n,e){n.asyncQueue.verifyOperationInProgress();const t=await BI(n);J("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>kd(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>kd(e.remoteStore,s)),n._onlineComponents=e}async function BI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){J("FirestoreClient","Using user provided OfflineComponentProvider");try{await gl(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;ns("Error using user provided cache. Falling back to memory cache: "+t),await gl(n,new $o)}}else J("FirestoreClient","Using default OfflineComponentProvider"),await gl(n,new $o);return n._offlineComponents}async function Mg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(J("FirestoreClient","Using user provided OnlineComponentProvider"),await Md(n,n._uninitializedComponentsProvider._online)):(J("FirestoreClient","Using default OnlineComponentProvider"),await Md(n,new tc))),n._onlineComponents}function $I(n){return Mg(n).then(e=>e.syncEngine)}async function jo(n){const e=await Mg(n),t=e.eventManager;return t.onListen=RI.bind(null,e.syncEngine),t.onUnlisten=CI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=SI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=kI.bind(null,e.syncEngine),t}function jI(n,e,t={}){const r=new bn;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const f=new Zc({next:_=>{f.Za(),a.enqueueAndForget(()=>Qc(i,p));const b=_.docs.has(l);!b&&_.fromCache?h.reject(new K(N.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&_.fromCache&&c&&c.source==="server"?h.reject(new K(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),p=new Jc(ua(l.path),f,{includeMetadataChanges:!0,_a:!0});return Gc(i,p)}(await jo(n),n.asyncQueue,e,t,r)),r.promise}function qI(n,e,t={}){const r=new bn;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const f=new Zc({next:_=>{f.Za(),a.enqueueAndForget(()=>Qc(i,p)),_.fromCache&&c.source==="server"?h.reject(new K(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),p=new Jc(l,f,{includeMetadataChanges:!0,_a:!0});return Gc(i,p)}(await jo(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Fg(n,e,t){if(!t)throw new K(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function WI(n,e,t,r){if(e===!0&&r===!0)throw new K(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Fd(n){if(!Z.isDocumentKey(n))throw new K(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ud(n){if(Z.isDocumentKey(n))throw new K(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ea(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ce()}function St(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new K(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ea(n);throw new K(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function HI(n,e){if(e<=0)throw new K(N.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */class Bd{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}WI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Lg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new K(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new K(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new K(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wa{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bd({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new aw;switch(r.type){case"firstParty":return new hw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Ld.get(t);r&&(J("ComponentProvider","Removing Datastore"),Ld.delete(t),r.terminate())}(this),Promise.resolve()}}function KI(n,e,t,r={}){var s;const i=(n=St(n,wa))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&ns("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=ft.MOCK_USER;else{l=Lv(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new K(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ft(h)}n._authCredentials=new lw(new Up(l,c))}}/**
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
 */class hn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new hn(this.firestore,e,this._query)}}class _t{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _t(this.firestore,e,this._key)}}class Yn extends hn{constructor(e,t,r){super(e,t,ua(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _t(this.firestore,null,new Z(e))}withConverter(e){return new Yn(this.firestore,e,this._path)}}function co(n,e,...t){if(n=Be(n),Fg("collection","path",e),n instanceof wa){const r=Oe.fromString(e,...t);return Ud(r),new Yn(n,null,r)}{if(!(n instanceof _t||n instanceof Yn))throw new K(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Oe.fromString(e,...t));return Ud(r),new Yn(n.firestore,null,r)}}function Fn(n,e,...t){if(n=Be(n),arguments.length===1&&(e=Bp.newId()),Fg("doc","path",e),n instanceof wa){const r=Oe.fromString(e,...t);return Fd(r),new _t(n,null,new Z(r))}{if(!(n instanceof _t||n instanceof Yn))throw new K(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Oe.fromString(e,...t));return Fd(r),new _t(n.firestore,n instanceof Yn?n.converter:null,new Z(r))}}/**
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
 */class $d{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Eg(this,"async_queue_retry"),this.Vu=()=>{const r=pl();r&&J("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=pl();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=pl();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new bn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ri(e))throw e;J("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Pn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=Kc.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&ce()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function jd(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class kn extends wa{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new $d,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new $d(e),this._firestoreClient=void 0,await e}}}function zI(n,e){const t=typeof n=="object"?n:kp(),r=typeof n=="string"?n:"(default)",s=Sc(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=xv("firestore");i&&KI(s,...i)}return s}function Vi(n){if(n._terminated)throw new K(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||GI(n),n._firestoreClient}function GI(n){var e,t,r;const s=n._freezeSettings(),i=function(l,c,h,f){return new Aw(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Lg(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new UI(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(n._componentsProvider))}/**
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
 */class cs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cs(at.fromBase64String(e))}catch(t){throw new K(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new cs(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Di{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new K(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ta{constructor(e){this._methodName=e}}/**
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
 */class eu{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new K(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new K(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}}/**
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
 */class tu{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const QI=/^__.*__$/;class YI{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new rr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Si(e,this.data,t,this.fieldTransforms)}}class Ug{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new rr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Bg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ce()}}class nu{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new nu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return qo(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Bg(this.Cu)&&QI.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class JI{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||_a(e)}Qu(e,t,r,s=!1){return new nu({Cu:e,methodName:t,qu:r,path:st.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ni(n){const e=n._freezeSettings(),t=_a(n._databaseId);return new JI(n._databaseId,!!e.ignoreUndefinedProperties,t)}function $g(n,e,t,r,s,i={}){const a=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);su("Data must be an object, but it was:",a,r);const l=Hg(r,a);let c,h;if(i.merge)c=new Nt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const _=nc(e,p,t);if(!a.contains(_))throw new K(N.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);zg(f,_)||f.push(_)}c=new Nt(f),h=a.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=a.fieldTransforms;return new YI(new bt(l),c,h)}class Ia extends Ta{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ia}}class ru extends Ta{_toFieldTransform(e){return new Qw(e.path,new pi)}isEqual(e){return e instanceof ru}}function jg(n,e,t,r){const s=n.Qu(1,e,t);su("Data must be an object, but it was:",s,r);const i=[],a=bt.empty();Ar(r,(c,h)=>{const f=iu(e,c,t);h=Be(h);const p=s.Nu(f);if(h instanceof Ia)i.push(f);else{const _=Oi(h,p);_!=null&&(i.push(f),a.set(f,_))}});const l=new Nt(i);return new Ug(a,l,s.fieldTransforms)}function qg(n,e,t,r,s,i){const a=n.Qu(1,e,t),l=[nc(e,r,t)],c=[s];if(i.length%2!=0)throw new K(N.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)l.push(nc(e,i[_])),c.push(i[_+1]);const h=[],f=bt.empty();for(let _=l.length-1;_>=0;--_)if(!zg(h,l[_])){const b=l[_];let k=c[_];k=Be(k);const P=a.Nu(b);if(k instanceof Ia)h.push(b);else{const C=Oi(k,P);C!=null&&(h.push(b),f.set(b,C))}}const p=new Nt(h);return new Ug(f,p,a.fieldTransforms)}function Wg(n,e,t,r=!1){return Oi(t,n.Qu(r?4:3,e))}function Oi(n,e){if(Kg(n=Be(n)))return su("Unsupported field value:",e,n),Hg(n,e);if(n instanceof Ta)return function(r,s){if(!Bg(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=Oi(l,s.Lu(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Be(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Kw(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ye.fromDate(r);return{timestampValue:Uo(s.serializer,i)}}if(r instanceof Ye){const i=new Ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Uo(s.serializer,i)}}if(r instanceof eu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof cs)return{bytesValue:hg(s.serializer,r._byteString)};if(r instanceof _t){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Fc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof tu)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return xc(l.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Ea(r)}`)}(n,e)}function Hg(n,e){const t={};return $p(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ar(n,(r,s)=>{const i=Oi(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Kg(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ye||n instanceof eu||n instanceof cs||n instanceof _t||n instanceof Ta||n instanceof tu)}function su(n,e,t){if(!Kg(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Ea(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function nc(n,e,t){if((e=Be(e))instanceof Di)return e._internalPath;if(typeof e=="string")return iu(n,e);throw qo("Field path arguments must be of type string or ",n,!1,void 0,t)}const XI=new RegExp("[~\\*/\\[\\]]");function iu(n,e,t){if(e.search(XI)>=0)throw qo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Di(...e.split("."))._internalPath}catch{throw qo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function qo(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new K(N.INVALID_ARGUMENT,l+n+c)}function zg(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class ou{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ZI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Aa("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ZI extends ou{data(){return super.data()}}function Aa(n,e){return typeof e=="string"?iu(n,e):e instanceof Di?e._internalPath:e._delegate._internalPath}/**
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
 */function Gg(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new K(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class au{}class ba extends au{}function ml(n,e,...t){let r=[];e instanceof au&&r.push(e),r=r.concat(t),function(i){const a=i.filter(c=>c instanceof lu).length,l=i.filter(c=>c instanceof Ra).length;if(a>1||a>0&&l>0)throw new K(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Ra extends ba{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Ra(e,t,r)}_apply(e){const t=this._parse(e);return Qg(e._query,t),new hn(e.firestore,e.converter,zl(e._query,t))}_parse(e){const t=Ni(e.firestore);return function(i,a,l,c,h,f,p){let _;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new K(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Wd(p,f);const b=[];for(const k of p)b.push(qd(c,i,k));_={arrayValue:{values:b}}}else _=qd(c,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Wd(p,f),_=Wg(l,a,p,f==="in"||f==="not-in");return ze.create(h,f,_)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function eA(n,e,t){const r=e,s=Aa("where",n);return Ra._create(s,r,t)}class lu extends au{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new lu(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Kt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const l=i.getFlattenedFilters();for(const c of l)Qg(a,c),a=zl(a,c)}(e._query,t),new hn(e.firestore,e.converter,zl(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class cu extends ba{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new cu(e,t)}_apply(e){const t=function(s,i,a){if(s.startAt!==null)throw new K(N.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new K(N.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new fi(i,a)}(e._query,this._field,this._direction);return new hn(e.firestore,e.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new br(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function tA(n,e="asc"){const t=e,r=Aa("orderBy",n);return cu._create(r,t)}class uu extends ba{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new uu(e,t,r)}_apply(e){return new hn(e.firestore,e.converter,Lo(e._query,this._limit,this._limitType))}}function nA(n){return HI("limit",n),uu._create("limit",n,"F")}class hu extends ba{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new hu(e,t,r)}_apply(e){const t=sA(e,this.type,this._docOrFields,this._inclusive);return new hn(e.firestore,e.converter,function(s,i){return new br(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(e._query,t))}}function rA(...n){return hu._create("startAfter",n,!1)}function sA(n,e,t,r){if(t[0]=Be(t[0]),t[0]instanceof ou)return function(i,a,l,c,h){if(!c)throw new K(N.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${l}().`);const f=[];for(const p of Gr(i))if(p.field.isKeyField())f.push(Mo(a,c.key));else{const _=c.data.field(p.field);if(ca(_))throw new K(N.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+p.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(_===null){const b=p.field.canonicalString();throw new K(N.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${b}' (used as the orderBy) does not exist.`)}f.push(_)}return new os(f,h)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const s=Ni(n.firestore);return function(a,l,c,h,f,p){const _=a.explicitOrderBy;if(f.length>_.length)throw new K(N.INVALID_ARGUMENT,`Too many arguments provided to ${h}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const b=[];for(let k=0;k<f.length;k++){const P=f[k];if(_[k].field.isKeyField()){if(typeof P!="string")throw new K(N.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${h}(), but got a ${typeof P}`);if(!Oc(a)&&P.indexOf("/")!==-1)throw new K(N.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${h}() must be a plain document ID, but '${P}' contains a slash.`);const C=a.path.child(Oe.fromString(P));if(!Z.isDocumentKey(C))throw new K(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${h}() must result in a valid document path, but '${C}' is not because it contains an odd number of segments.`);const B=new Z(C);b.push(Mo(l,B))}else{const C=Wg(c,h,P);b.push(C)}}return new os(b,p)}(n._query,n.firestore._databaseId,s,e,t,r)}}function qd(n,e,t){if(typeof(t=Be(t))=="string"){if(t==="")throw new K(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Oc(e)&&t.indexOf("/")!==-1)throw new K(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Oe.fromString(t));if(!Z.isDocumentKey(r))throw new K(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Mo(n,new Z(r))}if(t instanceof _t)return Mo(n,t._key);throw new K(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ea(t)}.`)}function Wd(n,e){if(!Array.isArray(n)||n.length===0)throw new K(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Qg(n,e){const t=function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new K(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class iA{convertValue(e,t="none"){switch(Tr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(wr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ce()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Ar(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>qe(a.doubleValue));return new tu(i)}convertGeoPoint(e){return new eu(qe(e.latitude),qe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=kc(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ui(e));default:return null}}convertTimestamp(e){const t=er(e);return new Ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Oe.fromString(e);Se(_g(r));const s=new hi(r.get(1),r.get(3)),i=new Z(r.popFirst(5));return s.isEqual(t)||Pn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function Yg(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
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
 */class Ws{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Jg extends ou{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new vo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Aa("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class vo extends Jg{data(e={}){return super.data(e)}}class Xg{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Ws(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new vo(this._firestore,this._userDataWriter,r.key,r,new Ws(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new K(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new vo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ws(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new vo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ws(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:oA(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function oA(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce()}}/**
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
 */function Hd(n){n=St(n,_t);const e=St(n.firestore,kn);return jI(Vi(e),n._key).then(t=>Zg(e,n,t))}class du extends iA{constructor(e){super(),this.firestore=e}convertBytes(e){return new cs(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new _t(this.firestore,null,t)}}function aA(n){n=St(n,hn);const e=St(n.firestore,kn),t=Vi(e),r=new du(e);return Gg(n._query),qI(t,n._query).then(s=>new Xg(e,r,n,s))}function Kd(n,e,t){n=St(n,_t);const r=St(n.firestore,kn),s=Yg(n.converter,e,t);return Sa(r,[$g(Ni(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Rt.none())])}function lA(n,e,t,...r){n=St(n,_t);const s=St(n.firestore,kn),i=Ni(s);let a;return a=typeof(e=Be(e))=="string"||e instanceof Di?qg(i,"updateDoc",n._key,e,t,r):jg(i,"updateDoc",n._key,e),Sa(s,[a.toMutation(n._key,Rt.exists(!0))])}function cA(n){return Sa(St(n.firestore,kn),[new ga(n._key,Rt.none())])}function zd(n,...e){var t,r,s;n=Be(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||jd(e[a])||(i=e[a],a++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(jd(e[a])){const p=e[a];e[a]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[a+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[a+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,h,f;if(n instanceof _t)h=St(n.firestore,kn),f=ua(n._key.path),c={next:p=>{e[a]&&e[a](Zg(h,n,p))},error:e[a+1],complete:e[a+2]};else{const p=St(n,hn);h=St(p.firestore,kn),f=p._query;const _=new du(h);c={next:b=>{e[a]&&e[a](new Xg(h,_,p,b))},error:e[a+1],complete:e[a+2]},Gg(n._query)}return function(_,b,k,P){const C=new Zc(P),B=new Jc(b,C,k);return _.asyncQueue.enqueueAndForget(async()=>Gc(await jo(_),B)),()=>{C.Za(),_.asyncQueue.enqueueAndForget(async()=>Qc(await jo(_),B))}}(Vi(h),f,l,c)}function Sa(n,e){return function(r,s){const i=new bn;return r.asyncQueue.enqueueAndForget(async()=>VI(await $I(r),s,i)),i.promise}(Vi(n),e)}function Zg(n,e,t){const r=t.docs.get(e._key),s=new du(n);return new Jg(n,s,e._key,r,new Ws(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class uA{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Ni(e)}set(e,t,r){this._verifyNotCommitted();const s=_l(e,this._firestore),i=Yg(s.converter,t,r),a=$g(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,Rt.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=_l(e,this._firestore);let a;return a=typeof(t=Be(t))=="string"||t instanceof Di?qg(this._dataReader,"WriteBatch.update",i._key,t,r,s):jg(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(a.toMutation(i._key,Rt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=_l(e,this._firestore);return this._mutations=this._mutations.concat(new ga(t._key,Rt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new K(N.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function _l(n,e){if((n=Be(n)).firestore!==e)throw new K(N.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function yl(){return new ru("serverTimestamp")}/**
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
 */function Gd(n){return Vi(n=St(n,kn)),new uA(n,e=>Sa(n,e))}(function(e,t=!0){(function(s){ds=s})(hs),ts(new vr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new kn(new cw(r.getProvider("auth-internal")),new fw(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new K(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hi(h.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Qn(od,"4.7.3",e),Qn(od,"4.7.3","esm2017")})();var hA="firebase",dA="10.14.1";/**
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
 */Qn(hA,dA,"app");function fu(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function em(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fA=em,tm=new Ii("auth","Firebase",em());/**
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
 */const Wo=new bc("@firebase/auth");function pA(n,...e){Wo.logLevel<=ye.WARN&&Wo.warn(`Auth (${hs}): ${n}`,...e)}function Eo(n,...e){Wo.logLevel<=ye.ERROR&&Wo.error(`Auth (${hs}): ${n}`,...e)}/**
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
 */function zt(n,...e){throw pu(n,...e)}function sn(n,...e){return pu(n,...e)}function nm(n,e,t){const r=Object.assign(Object.assign({},fA()),{[e]:t});return new Ii("auth","Firebase",r).create(e,{appName:n.name})}function Jn(n){return nm(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pu(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return tm.create(n,...e)}function ie(n,e,...t){if(!n)throw pu(e,...t)}function Tn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Eo(e),new Error(e)}function Vn(n,e){n||Tn(e)}/**
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
 */function rc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function gA(){return Qd()==="http:"||Qd()==="https:"}function Qd(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function mA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gA()||$v()||"connection"in navigator)?navigator.onLine:!0}function _A(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class xi{constructor(e,t){this.shortDelay=e,this.longDelay=t,Vn(t>e,"Short delay should be less than long delay!"),this.isMobile=Fv()||jv()}get(){return mA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function gu(n,e){Vn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class rm{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const yA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const vA=new xi(3e4,6e4);function Sr(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function sr(n,e,t,r,s={}){return sm(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=Ai(Object.assign({key:n.config.apiKey},a)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:c},i);return Bv()||(h.referrerPolicy="no-referrer"),rm.fetch()(im(n,n.config.apiHost,t,l),h)})}async function sm(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},yA),e);try{const s=new wA(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw uo(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw uo(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw uo(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw uo(n,"user-disabled",a);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw nm(n,f,h);zt(n,f)}}catch(s){if(s instanceof Nn)throw s;zt(n,"network-request-failed",{message:String(s)})}}async function Pa(n,e,t,r,s={}){const i=await sr(n,e,t,r,s);return"mfaPendingCredential"in i&&zt(n,"multi-factor-auth-required",{_serverResponse:i}),i}function im(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?gu(n.config,s):`${n.config.apiScheme}://${s}`}function EA(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class wA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(sn(this.auth,"network-request-failed")),vA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function uo(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=sn(n,e,r);return s.customData._tokenResponse=t,s}function Yd(n){return n!==void 0&&n.enterprise!==void 0}class TA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return EA(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function IA(n,e){return sr(n,"GET","/v2/recaptchaConfig",Sr(n,e))}/**
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
 */async function AA(n,e){return sr(n,"POST","/v1/accounts:delete",e)}async function om(n,e){return sr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function ni(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bA(n,e=!1){const t=Be(n),r=await t.getIdToken(e),s=mu(r);ie(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ni(vl(s.auth_time)),issuedAtTime:ni(vl(s.iat)),expirationTime:ni(vl(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function vl(n){return Number(n)*1e3}function mu(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Eo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ip(t);return s?JSON.parse(s):(Eo("Failed to decode base64 JWT payload"),null)}catch(s){return Eo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Jd(n){const e=mu(n);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function _i(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Nn&&RA(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function RA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class SA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class sc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ni(this.lastLoginAt),this.creationTime=ni(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ho(n){var e;const t=n.auth,r=await n.getIdToken(),s=await _i(n,om(t,{idToken:r}));ie(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?am(i.providerUserInfo):[],l=CA(n.providerData,a),c=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new sc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,p)}async function PA(n){const e=Be(n);await Ho(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function CA(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function am(n){return n.map(e=>{var{providerId:t}=e,r=fu(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function kA(n,e){const t=await sm(n,{},async()=>{const r=Ai({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=im(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",rm.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function VA(n,e){return sr(n,"POST","/v2/accounts:revokeToken",Sr(n,e))}/**
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
 */class Yr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const t=Jd(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await kA(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Yr;return r&&(ie(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ie(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ie(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yr,this.toJSON())}_performRefresh(){return Tn("not implemented")}}/**
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
 */function Un(n,e){ie(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class In{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=fu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new SA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new sc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await _i(this,this.stsTokenManager.getToken(this.auth,e));return ie(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return bA(this,e)}reload(){return PA(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new In(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ho(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wn(this.auth.app))return Promise.reject(Jn(this.auth));const e=await this.getIdToken();return await _i(this,AA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,l,c,h,f;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,_=(s=t.email)!==null&&s!==void 0?s:void 0,b=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,k=(a=t.photoURL)!==null&&a!==void 0?a:void 0,P=(l=t.tenantId)!==null&&l!==void 0?l:void 0,C=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,B=(h=t.createdAt)!==null&&h!==void 0?h:void 0,$=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:z,emailVerified:q,isAnonymous:ae,providerData:oe,stsTokenManager:T}=t;ie(z&&T,e,"internal-error");const m=Yr.fromJSON(this.name,T);ie(typeof z=="string",e,"internal-error"),Un(p,e.name),Un(_,e.name),ie(typeof q=="boolean",e,"internal-error"),ie(typeof ae=="boolean",e,"internal-error"),Un(b,e.name),Un(k,e.name),Un(P,e.name),Un(C,e.name),Un(B,e.name),Un($,e.name);const y=new In({uid:z,auth:e,email:_,emailVerified:q,displayName:p,isAnonymous:ae,photoURL:k,phoneNumber:b,tenantId:P,stsTokenManager:m,createdAt:B,lastLoginAt:$});return oe&&Array.isArray(oe)&&(y.providerData=oe.map(I=>Object.assign({},I))),C&&(y._redirectEventId=C),y}static async _fromIdTokenResponse(e,t,r=!1){const s=new Yr;s.updateFromServerResponse(t);const i=new In({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ho(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];ie(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?am(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Yr;l.updateFromIdToken(r);const c=new In({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new sc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
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
 */const Xd=new Map;function An(n){Vn(n instanceof Function,"Expected a class definition");let e=Xd.get(n);return e?(Vn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Xd.set(n,e),e)}/**
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
 */class lm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}lm.type="NONE";const Zd=lm;/**
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
 */function wo(n,e,t){return`firebase:${n}:${e}:${t}`}class Jr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=wo(this.userKey,s.apiKey,i),this.fullPersistenceKey=wo("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?In._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Jr(An(Zd),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||An(Zd);const a=wo(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(a);if(f){const p=In._fromJSON(e,f);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Jr(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Jr(i,e,r))}}/**
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
 */function ef(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pm(e))return"Blackberry";if(gm(e))return"Webos";if(um(e))return"Safari";if((e.includes("chrome/")||hm(e))&&!e.includes("edge/"))return"Chrome";if(fm(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function cm(n=yt()){return/firefox\//i.test(n)}function um(n=yt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function hm(n=yt()){return/crios\//i.test(n)}function dm(n=yt()){return/iemobile/i.test(n)}function fm(n=yt()){return/android/i.test(n)}function pm(n=yt()){return/blackberry/i.test(n)}function gm(n=yt()){return/webos/i.test(n)}function _u(n=yt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function DA(n=yt()){var e;return _u(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function NA(){return qv()&&document.documentMode===10}function mm(n=yt()){return _u(n)||fm(n)||gm(n)||pm(n)||/windows phone/i.test(n)||dm(n)}/**
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
 */function _m(n,e=[]){let t;switch(n){case"Browser":t=ef(yt());break;case"Worker":t=`${ef(yt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${hs}/${r}`}/**
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
 */class OA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function xA(n,e={}){return sr(n,"GET","/v2/passwordPolicy",Sr(n,e))}/**
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
 */const MA=6;class LA{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:MA,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class FA{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tf(this),this.idTokenSubscription=new tf(this),this.beforeStateQueue=new OA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=An(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Jr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await om(this,{idToken:e}),r=await In._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(wn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ho(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_A()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wn(this.app))return Promise.reject(Jn(this));const t=e?Be(e):null;return t&&ie(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wn(this.app)?Promise.reject(Jn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wn(this.app)?Promise.reject(Jn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(An(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xA(this),t=new LA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ii("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await VA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&An(e)||this._popupRedirectResolver;ie(t,this,"argument-error"),this.redirectPersistenceManager=await Jr.create(this,[An(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_m(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&pA(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function gs(n){return Be(n)}class tf{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jv(t=>this.observer=t)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ca={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function UA(n){Ca=n}function ym(n){return Ca.loadJS(n)}function BA(){return Ca.recaptchaEnterpriseScript}function $A(){return Ca.gapiScript}function jA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const qA="recaptcha-enterprise",WA="NO_RECAPTCHA";class HA{constructor(e){this.type=qA,this.auth=gs(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{IA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new TA(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,a,l){const c=window.grecaptcha;Yd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(WA)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,a)=>{r(this.auth).then(l=>{if(!t&&Yd(window.grecaptcha))s(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=BA();c.length!==0&&(c+=l),ym(c).then(()=>{s(l,i,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function nf(n,e,t,r=!1){const s=new HA(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function rf(n,e,t,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await nf(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await nf(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(i)})}/**
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
 */function KA(n,e){const t=Sc(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(No(i,e??{}))return s;zt(s,"already-initialized")}return t.initialize({options:e})}function zA(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(An);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function GA(n,e,t){const r=gs(n);ie(r._canInitEmulator,r,"emulator-config-failed"),ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=vm(e),{host:a,port:l}=QA(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),YA()}function vm(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function QA(n){const e=vm(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:sf(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:sf(a)}}}function sf(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function YA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class yu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Tn("not implemented")}_getIdTokenResponse(e){return Tn("not implemented")}_linkToIdToken(e,t){return Tn("not implemented")}_getReauthenticationResolver(e){return Tn("not implemented")}}async function JA(n,e){return sr(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function XA(n,e){return Pa(n,"POST","/v1/accounts:signInWithPassword",Sr(n,e))}/**
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
 */async function ZA(n,e){return Pa(n,"POST","/v1/accounts:signInWithEmailLink",Sr(n,e))}async function eb(n,e){return Pa(n,"POST","/v1/accounts:signInWithEmailLink",Sr(n,e))}/**
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
 */class yi extends yu{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new yi(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new yi(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rf(e,t,"signInWithPassword",XA);case"emailLink":return ZA(e,{email:this._email,oobCode:this._password});default:zt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rf(e,r,"signUpPassword",JA);case"emailLink":return eb(e,{idToken:t,email:this._email,oobCode:this._password});default:zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Xr(n,e){return Pa(n,"POST","/v1/accounts:signInWithIdp",Sr(n,e))}/**
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
 */const tb="http://localhost";class Ir extends yu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):zt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=fu(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Ir(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Xr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Xr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Xr(e,t)}buildRequest(){const e={requestUri:tb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ai(t)}return e}}/**
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
 */function nb(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function rb(n){const e=Us(Bs(n)).link,t=e?Us(Bs(e)).deep_link_id:null,r=Us(Bs(n)).deep_link_id;return(r?Us(Bs(r)).link:null)||r||t||e||n}class vu{constructor(e){var t,r,s,i,a,l;const c=Us(Bs(e)),h=(t=c.apiKey)!==null&&t!==void 0?t:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,p=nb((s=c.mode)!==null&&s!==void 0?s:null);ie(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=rb(e);try{return new vu(t)}catch{return null}}}/**
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
 */class ms{constructor(){this.providerId=ms.PROVIDER_ID}static credential(e,t){return yi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=vu.parseLink(t);return ie(r,"argument-error"),yi._fromEmailAndCode(e,r.code,r.tenantId)}}ms.PROVIDER_ID="password";ms.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ms.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Em{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Mi extends Em{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class jn extends Mi{constructor(){super("facebook.com")}static credential(e){return Ir._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";jn.PROVIDER_ID="facebook.com";/**
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
 */class qn extends Mi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ir._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return qn.credential(t,r)}catch{return null}}}qn.GOOGLE_SIGN_IN_METHOD="google.com";qn.PROVIDER_ID="google.com";/**
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
 */class Wn extends Mi{constructor(){super("github.com")}static credential(e){return Ir._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.GITHUB_SIGN_IN_METHOD="github.com";Wn.PROVIDER_ID="github.com";/**
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
 */class Hn extends Mi{constructor(){super("twitter.com")}static credential(e,t){return Ir._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Hn.credential(t,r)}catch{return null}}}Hn.TWITTER_SIGN_IN_METHOD="twitter.com";Hn.PROVIDER_ID="twitter.com";/**
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
 */class us{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await In._fromIdTokenResponse(e,r,s),a=of(r);return new us({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=of(r);return new us({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function of(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Ko extends Nn{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ko.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Ko(e,t,r,s)}}function wm(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ko._fromErrorAndOperation(n,i,e,r):i})}async function sb(n,e,t=!1){const r=await _i(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return us._forOperation(n,"link",r)}/**
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
 */async function ib(n,e,t=!1){const{auth:r}=n;if(wn(r.app))return Promise.reject(Jn(r));const s="reauthenticate";try{const i=await _i(n,wm(r,s,e,n),t);ie(i.idToken,r,"internal-error");const a=mu(i.idToken);ie(a,r,"internal-error");const{sub:l}=a;return ie(n.uid===l,r,"user-mismatch"),us._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&zt(r,"user-mismatch"),i}}/**
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
 */async function Tm(n,e,t=!1){if(wn(n.app))return Promise.reject(Jn(n));const r="signIn",s=await wm(n,r,e),i=await us._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function ob(n,e){return Tm(gs(n),e)}/**
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
 */async function ab(n){const e=gs(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function lb(n,e,t){return wn(n.app)?Promise.reject(Jn(n)):ob(Be(n),ms.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ab(n),r})}function cb(n,e,t,r){return Be(n).onIdTokenChanged(e,t,r)}function ub(n,e,t){return Be(n).beforeAuthStateChanged(e,t)}function hb(n,e,t,r){return Be(n).onAuthStateChanged(e,t,r)}function db(n){return Be(n).signOut()}const zo="__sak";/**
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
 */class Im{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(zo,"1"),this.storage.removeItem(zo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const fb=1e3,pb=10;class Am extends Im{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=mm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);NA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,pb):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},fb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Am.type="LOCAL";const gb=Am;/**
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
 */class bm extends Im{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}bm.type="SESSION";const Rm=bm;/**
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
 */function mb(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ka{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new ka(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(t.origin,i)),c=await mb(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ka.receivers=[];/**
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
 */class _b{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const h=Eu("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const _=p;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(_.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function on(){return window}function yb(n){on().location.href=n}/**
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
 */function Sm(){return typeof on().WorkerGlobalScope<"u"&&typeof on().importScripts=="function"}async function vb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Eb(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function wb(){return Sm()?self:null}/**
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
 */const Pm="firebaseLocalStorageDb",Tb=1,Go="firebaseLocalStorage",Cm="fbase_key";class Li{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Va(n,e){return n.transaction([Go],e?"readwrite":"readonly").objectStore(Go)}function Ib(){const n=indexedDB.deleteDatabase(Pm);return new Li(n).toPromise()}function ic(){const n=indexedDB.open(Pm,Tb);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Go,{keyPath:Cm})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Go)?e(r):(r.close(),await Ib(),e(await ic()))})})}async function af(n,e,t){const r=Va(n,!0).put({[Cm]:e,value:t});return new Li(r).toPromise()}async function Ab(n,e){const t=Va(n,!1).get(e),r=await new Li(t).toPromise();return r===void 0?null:r.value}function lf(n,e){const t=Va(n,!0).delete(e);return new Li(t).toPromise()}const bb=800,Rb=3;class km{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ic(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Rb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Sm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ka._getInstance(wb()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await vb(),!this.activeServiceWorker)return;this.sender=new _b(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Eb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ic();return await af(e,zo,"1"),await lf(e,zo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>af(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Ab(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>lf(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Va(s,!1).getAll();return new Li(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}km.type="LOCAL";const Sb=km;new xi(3e4,6e4);/**
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
 */function Pb(n,e){return e?An(e):(ie(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class wu extends yu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Xr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Xr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Cb(n){return Tm(n.auth,new wu(n),n.bypassAuthState)}function kb(n){const{auth:e,user:t}=n;return ie(t,e,"internal-error"),ib(t,new wu(n),n.bypassAuthState)}async function Vb(n){const{auth:e,user:t}=n;return ie(t,e,"internal-error"),sb(t,new wu(n),n.bypassAuthState)}/**
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
 */class Vm{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Cb;case"linkViaPopup":case"linkViaRedirect":return Vb;case"reauthViaPopup":case"reauthViaRedirect":return kb;default:zt(this.auth,"internal-error")}}resolve(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Db=new xi(2e3,1e4);class jr extends Vm{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,jr.currentPopupAction&&jr.currentPopupAction.cancel(),jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){Vn(this.filter.length===1,"Popup operations only handle one event");const e=Eu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Db.get())};e()}}jr.currentPopupAction=null;/**
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
 */const Nb="pendingRedirect",To=new Map;class Ob extends Vm{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=To.get(this.auth._key());if(!e){try{const r=await xb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}To.set(this.auth._key(),e)}return this.bypassAuthState||To.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xb(n,e){const t=Fb(e),r=Lb(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Mb(n,e){To.set(n._key(),e)}function Lb(n){return An(n._redirectPersistence)}function Fb(n){return wo(Nb,n.config.apiKey,n.name)}async function Ub(n,e,t=!1){if(wn(n.app))return Promise.reject(Jn(n));const r=gs(n),s=Pb(r,e),a=await new Ob(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const Bb=10*60*1e3;class $b{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jb(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Dm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(sn(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Bb&&this.cachedEventUids.clear(),this.cachedEventUids.has(cf(e))}saveEventToCache(e){this.cachedEventUids.add(cf(e)),this.lastProcessedEventTime=Date.now()}}function cf(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Dm({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jb(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dm(n);default:return!1}}/**
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
 */async function qb(n,e={}){return sr(n,"GET","/v1/projects",e)}/**
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
 */const Wb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hb=/^https?/;async function Kb(n){if(n.config.emulator)return;const{authorizedDomains:e}=await qb(n);for(const t of e)try{if(zb(t))return}catch{}zt(n,"unauthorized-domain")}function zb(n){const e=rc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Hb.test(t))return!1;if(Wb.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Gb=new xi(3e4,6e4);function uf(){const n=on().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Qb(n){return new Promise((e,t)=>{var r,s,i;function a(){uf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{uf(),t(sn(n,"network-request-failed"))},timeout:Gb.get()})}if(!((s=(r=on().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=on().gapi)===null||i===void 0)&&i.load)a();else{const l=jA("iframefcb");return on()[l]=()=>{gapi.load?a():t(sn(n,"network-request-failed"))},ym(`${$A()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw Io=null,e})}let Io=null;function Yb(n){return Io=Io||Qb(n),Io}/**
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
 */const Jb=new xi(5e3,15e3),Xb="__/auth/iframe",Zb="emulator/auth/iframe",e0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},t0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function n0(n){const e=n.config;ie(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?gu(e,Zb):`https://${n.config.authDomain}/${Xb}`,r={apiKey:e.apiKey,appName:n.name,v:hs},s=t0.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Ai(r).slice(1)}`}async function r0(n){const e=await Yb(n),t=on().gapi;return ie(t,n,"internal-error"),e.open({where:document.body,url:n0(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:e0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=sn(n,"network-request-failed"),l=on().setTimeout(()=>{i(a)},Jb.get());function c(){on().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
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
 */const s0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},i0=500,o0=600,a0="_blank",l0="http://localhost";class hf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function c0(n,e,t,r=i0,s=o0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},s0),{width:r.toString(),height:s.toString(),top:i,left:a}),h=yt().toLowerCase();t&&(l=hm(h)?a0:t),cm(h)&&(e=e||l0,c.scrollbars="yes");const f=Object.entries(c).reduce((_,[b,k])=>`${_}${b}=${k},`,"");if(DA(h)&&l!=="_self")return u0(e||"",l),new hf(null);const p=window.open(e||"",l,f);ie(p,n,"popup-blocked");try{p.focus()}catch{}return new hf(p)}function u0(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const h0="__/auth/handler",d0="emulator/auth/handler",f0=encodeURIComponent("fac");async function df(n,e,t,r,s,i){ie(n.config.authDomain,n,"auth-domain-config-required"),ie(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:hs,eventId:s};if(e instanceof Em){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Yv(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(e instanceof Mi){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await n._getAppCheckToken(),h=c?`#${f0}=${encodeURIComponent(c)}`:"";return`${p0(n)}?${Ai(l).slice(1)}${h}`}function p0({config:n}){return n.emulator?gu(n,d0):`https://${n.authDomain}/${h0}`}/**
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
 */const El="webStorageSupport";class g0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rm,this._completeRedirectFn=Ub,this._overrideRedirectResult=Mb}async _openPopup(e,t,r,s){var i;Vn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await df(e,t,r,rc(),s);return c0(e,a,Eu())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await df(e,t,r,rc(),s);return yb(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Vn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await r0(e),r=new $b(e);return t.register("authEvent",s=>(ie(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(El,{type:El},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[El];a!==void 0&&t(!!a),zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Kb(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return mm()||um()||_u()}}const m0=g0;var ff="@firebase/auth",pf="1.7.9";/**
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
 */class _0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function y0(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function v0(n){ts(new vr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;ie(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_m(n)},h=new FA(r,s,i,c);return zA(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ts(new vr("auth-internal",e=>{const t=gs(e.getProvider("auth").getImmediate());return(r=>new _0(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qn(ff,pf,y0(n)),Qn(ff,pf,"esm2017")}/**
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
 */const E0=5*60,w0=Rp("authIdTokenMaxAge")||E0;let gf=null;const T0=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>w0)return;const s=t==null?void 0:t.token;gf!==s&&(gf=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function I0(n=kp()){const e=Sc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=KA(n,{popupRedirectResolver:m0,persistence:[Sb,gb,Rm]}),r=Rp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=T0(i.toString());ub(t,a,()=>a(t.currentUser)),cb(t,l=>a(l))}}const s=Ap("auth");return s&&GA(t,`http://${s}`),t}function A0(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}UA({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=sn("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",A0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});v0("Browser");const b0={apiKey:"AIzaSyBTn3Z_B1MYRJ-hOsL0I94QWBq2xh3EdFs",authDomain:"henryshus.firebaseapp.com",projectId:"henryshus",storageBucket:"henryshus.firebasestorage.app",messagingSenderId:"877597619520",appId:"1:877597619520:web:61e33ff74b9f03aa45f6a5",measurementId:"G-ESKWZ556XM"},Nm=Cp(b0),kt=zI(Nm),wl=I0(Nm);function Om(){const n=Ae([]),e=Ae([]),t=Ae(!1);let r=null,s=null;function i(){r||(r=zd(co(kt,"workstations"),k=>{const P=[];k.forEach(C=>{P.push({id:C.id,...C.data()})}),P.sort((C,B)=>C.name.localeCompare(B.name,"nb")),n.value=P},k=>console.error("Workstations error:",k)))}function a(){if(s)return;const k=ml(co(kt,"borrowRecords"),eA("returnedAt","==",null));s=zd(k,P=>{const C=[];P.forEach(B=>{C.push({id:B.id,...B.data()})}),C.sort((B,$)=>{var z,q;return(((z=$.borrowedAt)==null?void 0:z.toMillis())??0)-(((q=B.borrowedAt)==null?void 0:q.toMillis())??0)}),e.value=C},P=>console.error("Active borrows error:",P))}ra(()=>{r&&r(),s&&s()});async function l(k,P,C){const B=Gd(kt),$=Fn(co(kt,"borrowRecords")),z=Fn(kt,"workstations",k);B.update(z,{status:"borrowed",borrower:P,borrowedAt:yl(),currentBorrowRecord:$.id}),B.set($,{workstation:k,borrower:P,borrowedAt:yl(),returnedAt:null,controllers:C??null}),await B.commit()}async function c(k){const P=Fn(kt,"workstations",k),C=await Hd(P);if(!C.exists())return;const B=C.data().currentBorrowRecord,$=Gd(kt);$.update(P,{status:"available",borrower:null,borrowedAt:null,currentBorrowRecord:null}),B&&$.update(Fn(kt,"borrowRecords",B),{returnedAt:yl()}),await $.commit()}async function h(k=20,P){let C=ml(co(kt,"borrowRecords"),tA("borrowedAt","desc"),nA(k));P&&(C=ml(C,rA(P)));const B=await aA(C),$=[];let z=null;return B.forEach(q=>{$.push({id:q.id,...q.data()}),z=q}),{records:$,lastVisible:z}}async function f(){const k=[{name:"PlayStation",type:"playstation",keyboard:"Kontroller x2",mouse:""},{name:"PlayStation 2",type:"playstation",keyboard:"Kontroller x2",mouse:""},{name:"PC 1",type:"pc",keyboard:"Keyboard 1",mouse:"Mouse 1"},{name:"PC 2",type:"pc",keyboard:"Keyboard 2",mouse:"Mouse 2"},{name:"PC 3",type:"pc",keyboard:"Keyboard 3",mouse:"Mouse 3"}];for(const P of k){const C=Fn(kt,"workstations",P.name);(await Hd(C)).exists()||await Kd(C,{name:P.name,type:P.type,keyboard:P.keyboard,mouse:P.mouse,status:"available",borrower:null,borrowedAt:null,currentBorrowRecord:null})}}async function p(k,P,C,B){await Kd(Fn(kt,"workstations",k),{name:k,type:P,keyboard:C||"",mouse:B||"",status:"available",borrower:null,borrowedAt:null,currentBorrowRecord:null})}async function _(k){await cA(Fn(kt,"workstations",k))}async function b(k,P){const C={};P.keyboard!==void 0&&(C.keyboard=P.keyboard),P.mouse!==void 0&&(C.mouse=P.mouse),P.type!==void 0&&(C.type=P.type),await lA(Fn(kt,"workstations",k),C)}return{workstations:n,activeBorrows:e,loading:t,subscribeWorkstations:i,subscribeActiveBorrows:a,borrowWorkstation:l,returnWorkstation:c,getHistory:h,seedDefaultWorkstations:f,addWorkstation:p,removeWorkstation:_,updateWorkstation:b}}const Tl=Ae(null);let xs=null;function Tu(){xs||(xs=hb(wl,r=>{Tl.value=r})),ra(()=>{xs&&(xs(),xs=null)});async function n(r,s){await lb(wl,r,s)}async function e(){await db(wl)}function t(){return Tl.value!==null}return{currentUser:Tl,login:n,logout:e,isAdmin:t}}const R0={class:"student-layout"},S0={key:0,class:"init-load"},P0={key:1,class:"ws-scroll"},C0={key:0,class:"ps-row"},k0=["onClick","onKeydown"],V0={class:"ws-bar-inner"},D0={class:"ws-bar-name"},N0={key:0,class:"ws-bar-detail"},O0={class:"ws-row"},x0=["onClick","onKeydown"],M0={class:"ws-block-inner"},L0={class:"ws-block-name"},F0={key:0,class:"ws-block-detail"},U0={class:"modal"},B0={class:"form-group"},$0={key:0,class:"form-group"},j0={class:"ctrl-select"},q0={class:"modal-actions"},W0=["disabled"],H0={class:"modal"},K0={class:"form-group"},z0={class:"form-group"},G0={class:"modal-actions"},Q0={key:0,class:"error-message"},Y0=wi({__name:"StudentView",setup(n){const e=Ot("currentView"),t=Ot("showToast"),r=Ot("loading"),{workstations:s,subscribeWorkstations:i,borrowWorkstation:a}=Om(),{login:l}=Tu(),c=Ae(!1),h=Ae(null),f=Ae(""),p=Ae(2),_=Ae(null),b=Ae(!1),k=Ae(""),P=Ae(""),C=Ae(""),B=Ae(null);async function $(){C.value="",r.value=!0;try{await l(k.value,P.value),b.value=!1,k.value="",P.value="",e.value="admin"}catch(I){const v=I.code;v==="auth/user-not-found"?C.value="Bruker ikke funnet":v==="auth/wrong-password"?C.value="Feil passord":v==="auth/invalid-email"?C.value="Ugyldig e-post":v==="auth/too-many-requests"?C.value="For mange forsøk. Prøv igjen senere.":C.value="Feil e-post eller passord"}finally{r.value=!1}}const z=$r(()=>s.value.filter(I=>I.type==="playstation")),q=$r(()=>s.value.filter(I=>I.type==="pc")),ae=$r(()=>s.value.find(I=>I.id===h.value)),oe=$r(()=>{var I;return((I=ae.value)==null?void 0:I.type)==="playstation"});function T(I){h.value=I,f.value="",p.value=2,c.value=!0,Pl(()=>{var v;return(v=_.value)==null?void 0:v.focus()})}function m(){c.value=!1,h.value=null,f.value=""}async function y(){const I=f.value.trim();if(!(!I||!h.value)){r.value=!0;try{await a(h.value,I,oe.value?p.value:void 0),c.value=!1,t(`Du låner ${h.value}`,"success"),h.value=null,f.value=""}catch(v){console.error(v),t("Kunne ikke fullføre lånet","error")}finally{r.value=!1}}}return wc(()=>i()),(I,v)=>(re(),he("div",R0,[O("button",{class:"admin-corner",onClick:v[0]||(v[0]=A=>{b.value=!0,Pl(()=>{var w;return(w=B.value)==null?void 0:w.focus()})})},"Admin"),Br(s).length===0?(re(),he("div",S0,[...v[10]||(v[10]=[O("div",{class:"loader-ring"},null,-1),O("p",null,"Laster...",-1)])])):(re(),he("div",P0,[z.value.length?(re(),he("div",C0,[(re(!0),he(Ke,null,pr(z.value,A=>(re(),he("div",{key:A.id,class:Ze(["ws-bar",A.status]),tabindex:"0",role:"button",onClick:w=>A.status==="available"&&T(A.id),onKeydown:ol(w=>A.status==="available"&&T(A.id),["enter"])},[O("div",V0,[O("div",D0,ke(A.name),1),A.keyboard?(re(),he("div",N0,ke(A.keyboard),1)):Qe("",!0),O("div",{class:Ze(["ws-block-badge",A.status])},ke(A.status==="available"?"Trykk for å låne":"Opptatt"),3)])],42,k0))),128))])):Qe("",!0),O("div",O0,[(re(!0),he(Ke,null,pr(q.value,A=>(re(),he("div",{key:A.id,class:Ze(["ws-block",A.status]),tabindex:"0",role:"button",onClick:w=>A.status==="available"&&T(A.id),onKeydown:ol(w=>A.status==="available"&&T(A.id),["enter"])},[O("div",M0,[O("div",L0,ke(A.name),1),A.keyboard||A.mouse?(re(),he("div",F0,ke([A.keyboard,A.mouse].filter(Boolean).join(" · ")),1)):Qe("",!0),O("div",{class:Ze(["ws-block-badge",A.status])},ke(A.status==="available"?"Trykk for å låne":"Opptatt"),3)])],42,x0))),128))])])),(re(),zr(Th,{to:"body"},[c.value&&ae.value?(re(),he("div",{key:0,class:"modal-overlay",onClick:Xs(m,["self"])},[O("div",U0,[O("h3",null,ke(ae.value.name),1),v[13]||(v[13]=O("p",{class:"modal-sub"},"Skriv navnet ditt for å låne",-1)),O("div",B0,[v[11]||(v[11]=O("label",{for:"name-input"},"Ditt navn",-1)),Vt(O("input",{id:"name-input",ref_key:"nameInput",ref:_,"onUpdate:modelValue":v[1]||(v[1]=A=>f.value=A),class:"input",placeholder:"Skriv her...",autocomplete:"name",onKeydown:ol(y,["enter"])},null,544),[[en,f.value]])]),oe.value?(re(),he("div",$0,[v[12]||(v[12]=O("label",{for:"ctrl-input"},"Antall kontrollere",-1)),O("div",j0,[O("button",{class:Ze(["ctrl-btn",{active:p.value===1}]),onClick:v[2]||(v[2]=A=>p.value=1)},"1",2),O("button",{class:Ze(["ctrl-btn",{active:p.value===2}]),onClick:v[3]||(v[3]=A=>p.value=2)},"2",2),O("button",{class:Ze(["ctrl-btn",{active:p.value===3}]),onClick:v[4]||(v[4]=A=>p.value=3)},"3",2),O("button",{class:Ze(["ctrl-btn",{active:p.value===4}]),onClick:v[5]||(v[5]=A=>p.value=4)},"4",2)])])):Qe("",!0),O("div",q0,[O("button",{class:"btn btn-primary btn-full",disabled:!f.value.trim(),onClick:y}," Bekreft lån ",8,W0),O("button",{class:"btn btn-secondary btn-full",onClick:m},"Avbryt")])])])):Qe("",!0)])),(re(),zr(Th,{to:"body"},[b.value?(re(),he("div",{key:0,class:"modal-overlay",onClick:v[9]||(v[9]=Xs(A=>b.value=!1,["self"]))},[O("div",H0,[v[17]||(v[17]=O("h3",null,"Admin",-1)),v[18]||(v[18]=O("p",{class:"modal-sub"},"Logg inn for å administrere",-1)),O("form",{onSubmit:Xs($,["prevent"])},[O("div",K0,[v[14]||(v[14]=O("label",{for:"login-email"},"E-post",-1)),Vt(O("input",{id:"login-email",ref_key:"emailInput",ref:B,"onUpdate:modelValue":v[6]||(v[6]=A=>k.value=A),class:"input",type:"email",placeholder:"admin@example.com",autocomplete:"email",required:""},null,512),[[en,k.value]])]),O("div",z0,[v[15]||(v[15]=O("label",{for:"login-password"},"Passord",-1)),Vt(O("input",{id:"login-password","onUpdate:modelValue":v[7]||(v[7]=A=>P.value=A),class:"input",type:"password",placeholder:"Passord",autocomplete:"current-password",required:""},null,512),[[en,P.value]])]),O("div",G0,[v[16]||(v[16]=O("button",{type:"submit",class:"btn btn-primary btn-full"},"Logg inn",-1)),O("button",{type:"button",class:"btn btn-secondary btn-full",onClick:v[8]||(v[8]=A=>b.value=!1)},"Avbryt")]),C.value?(re(),he("p",Q0,ke(C.value),1)):Qe("",!0)],32)])])):Qe("",!0)]))]))}}),Iu=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},J0=Iu(Y0,[["__scopeId","data-v-8bb9bfba"]]),X0={class:"view active"},Z0={class:"header"},eR={class:"header-top"},tR={class:"content"},nR={class:"card login-card"},rR={class:"form-group"},sR={class:"form-group"},iR={key:0,class:"error-message"},oR=wi({__name:"LoginView",setup(n){const e=Ot("currentView");Ot("showToast");const t=Ot("loading"),{login:r}=Tu(),s=Ae(""),i=Ae(""),a=Ae("");async function l(){a.value="",t.value=!0;try{await r(s.value,i.value),e.value="admin"}catch(c){const h=c.code;h==="auth/user-not-found"?a.value="Bruker ikke funnet":h==="auth/wrong-password"?a.value="Feil passord":h==="auth/invalid-email"?a.value="Ugyldig e-post":h==="auth/too-many-requests"?a.value="For mange forsøk. Prøv igjen senere.":a.value="Feil e-post eller passord"}finally{t.value=!1}}return(c,h)=>(re(),he("div",X0,[O("header",Z0,[O("div",eR,[O("button",{class:"btn-text back-btn",onClick:h[0]||(h[0]=f=>e.value="student")}," ← Tilbake "),h[3]||(h[3]=O("h1",{class:"header-title"},"Admin",-1))])]),O("main",tR,[O("section",nR,[O("form",{onSubmit:Xs(l,["prevent"])},[O("div",rR,[h[4]||(h[4]=O("label",{for:"login-email"},"E-post",-1)),Vt(O("input",{id:"login-email","onUpdate:modelValue":h[1]||(h[1]=f=>s.value=f),class:"input",type:"email",placeholder:"admin@example.com",autocomplete:"email",required:""},null,512),[[en,s.value]])]),O("div",sR,[h[5]||(h[5]=O("label",{for:"login-password"},"Passord",-1)),Vt(O("input",{id:"login-password","onUpdate:modelValue":h[2]||(h[2]=f=>i.value=f),class:"input",type:"password",placeholder:"Passord",autocomplete:"current-password",required:""},null,512),[[en,i.value]])]),h[6]||(h[6]=O("button",{type:"submit",class:"btn btn-primary btn-full"},"Logg inn",-1)),a.value?(re(),he("p",iR,ke(a.value),1)):Qe("",!0)],32)])])]))}}),aR=["innerHTML"],lR=wi({__name:"SfIcon",props:{name:{},size:{}},setup(n){const e={gamecontroller:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
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
</svg>`};return(t,r)=>(re(),he("span",{class:"sf-icon",style:Zo({width:(n.size??20)+"px",height:(n.size??20)+"px"}),innerHTML:e[n.name]},null,12,aR))}}),mn=Iu(lR,[["__scopeId","data-v-8bfe09d2"]]),cR={class:"admin-split"},uR={class:"sidebar"},hR={class:"sidebar-nav"},dR=["onClick"],fR={class:"sidebar-footer"},pR={class:"sidebar-email"},gR={class:"admin-content"},mR={key:0,class:"empty-state"},_R={key:1,class:"card-list"},yR={class:"card-body"},vR={class:"card-title"},ER={class:"card-meta"},wR={class:"card-meta"},TR=["onClick"],IR={key:0,class:"empty-state"},AR={key:1,class:"card-list"},bR={class:"card-body"},RR={class:"card-title"},SR={class:"card-meta"},PR={class:"card-meta"},CR={key:1},kR={class:"card-list"},VR={key:0,class:"edit-inline"},DR={class:"edit-name"},NR={class:"type-picker",style:{"margin-bottom":"8px"}},OR=["placeholder"],xR={class:"card-body"},MR={class:"card-title"},LR={class:"card-meta"},FR=["onClick"],UR=["onClick"],BR={key:0,class:"empty-state"},$R={class:"form-group"},jR={class:"form-group"},qR={class:"type-picker"},WR={class:"form-group"},HR={for:"new-keyboard"},KR=["placeholder"],zR={key:0,class:"form-group"},GR=wi({__name:"AdminView",setup(n){const e=Ot("currentView"),t=Ot("showToast"),r=Ot("loading"),{currentUser:s,logout:i}=Tu(),{workstations:a,activeBorrows:l,subscribeWorkstations:c,subscribeActiveBorrows:h,returnWorkstation:f,getHistory:p,seedDefaultWorkstations:_,addWorkstation:b,removeWorkstation:k,updateWorkstation:P}=Om(),C=Ae("borrows"),B=[{key:"borrows",label:"Utlån",icon:"list"},{key:"history",label:"Historikk",icon:"clock"},{key:"manage",label:"Enheter",icon:"gear"}],$=$r(()=>{var le;return((le=s.value)==null?void 0:le.email)??""}),z=Ae([]),q=Ae(null),ae=Ae(""),oe=Ae("pc"),T=Ae(""),m=Ae("");async function y(){await i(),e.value="student"}async function I(le){if(confirm(`Returner ${le}?`)){r.value=!0;try{await f(le),t(`${le} er returnert`,"success")}catch(G){console.error(G),t("Kunne ikke returnere","error")}finally{r.value=!1}}}async function v(le=!1){r.value=!0;try{const G=await p(20,le?q.value:null);q.value=G.lastVisible,le?z.value.push(...G.records):z.value=G.records}catch(G){console.error(G),t("Kunne ikke laste historikk","error")}finally{r.value=!1}}async function A(){if(confirm("Sett inn standardenheter?")){r.value=!0;try{await _(),t("Standardenheter er lagt til","success")}catch(le){console.error(le),t("Kunne ikke sette inn enheter","error")}finally{r.value=!1}}}async function w(){if(ae.value.trim()){r.value=!0;try{await b(ae.value.trim(),oe.value,T.value.trim(),m.value.trim()),t(`${ae.value} er lagt til`,"success"),ae.value="",T.value="",m.value=""}catch(le){console.error(le),t("Kunne ikke legge til enheten","error")}finally{r.value=!1}}}async function Ge(le){if(confirm(`Fjern ${le}?`)){r.value=!0;try{await k(le),t(`${le} er fjernet`,"success")}catch(G){console.error(G),t("Kunne ikke fjerne enheten","error")}finally{r.value=!1}}}const lt=Ae(null),De=Ae("pc"),ve=Ae(""),me=Ae("");function Pt(le){lt.value=le.id,De.value=le.type,ve.value=le.keyboard||"",me.value=le.mouse||""}function dn(){lt.value=null}async function Ut(){if(lt.value){r.value=!0;try{await P(lt.value,{type:De.value,keyboard:ve.value.trim(),mouse:me.value.trim()}),t(`${lt.value} er oppdatert`,"success"),lt.value=null}catch(le){console.error(le),t("Kunne ikke oppdatere enheten","error")}finally{r.value=!1}}}function $e(le){C.value=le,le==="history"&&(z.value=[],q.value=null,v())}function je(le){if(!le)return"—";const G=le.toDate?le.toDate():new Date(le);return`${String(G.getDate()).padStart(2,"0")}.${String(G.getMonth()+1).padStart(2,"0")} ${String(G.getHours()).padStart(2,"0")}:${String(G.getMinutes()).padStart(2,"0")}`}function Pr(le){if(!le)return"—";const G=le.toDate?le.toDate():new Date(le);return`${String(G.getDate()).padStart(2,"0")}.${String(G.getMonth()+1).padStart(2,"0")}.${G.getFullYear()} ${String(G.getHours()).padStart(2,"0")}:${String(G.getMinutes()).padStart(2,"0")}`}return wc(()=>{c(),h()}),(le,G)=>(re(),he("div",cR,[O("aside",uR,[O("div",{class:"sidebar-top"},[G[10]||(G[10]=O("div",{class:"sidebar-title"},"Admin",-1)),O("button",{class:"sidebar-logout",onClick:y}," Logg ut ")]),O("nav",hR,[(re(),he(Ke,null,pr(B,ee=>O("button",{key:ee.key,class:Ze(["sidebar-item",{active:C.value===ee.key}]),onClick:vt=>$e(ee.key)},[Je(mn,{name:ee.icon,size:20},null,8,["name"]),O("span",null,ke(ee.label),1)],10,dR)),64))]),O("div",fR,[O("div",pR,ke($.value),1)])]),O("main",gR,[Vt(O("section",null,[G[11]||(G[11]=O("h2",{class:"section-title"},"Utlån",-1)),Br(l).length===0?(re(),he("div",mR,"Ingen utlån")):(re(),he("div",_R,[(re(!0),he(Ke,null,pr(Br(l),ee=>(re(),he("div",{key:ee.id,class:"card-row"},[O("div",yR,[O("div",vR,ke(ee.workstation),1),O("div",ER,ke(ee.borrower),1),O("div",wR,[ee.controllers?(re(),he(Ke,{key:0},[Je(mn,{name:"gamecontroller",size:12}),$t(" "+ke(ee.controllers)+" kontrollere · ",1)],64)):Qe("",!0),$t(" "+ke(je(ee.borrowedAt)),1)])]),O("button",{class:"btn-return",onClick:vt=>I(ee.workstation)},"Returner",8,TR)]))),128))]))],512),[[nl,C.value==="borrows"]]),Vt(O("section",null,[G[12]||(G[12]=O("h2",{class:"section-title"},"Historikk",-1)),z.value.length===0?(re(),he("div",IR,"Ingen historikk")):(re(),he("div",AR,[(re(!0),he(Ke,null,pr(z.value,ee=>(re(),he("div",{key:ee.id,class:"card-row history-row"},[O("div",bR,[O("div",RR,ke(ee.workstation),1),O("div",SR,ke(ee.borrower),1),O("div",PR,[ee.controllers?(re(),he(Ke,{key:0},[Je(mn,{name:"gamecontroller",size:12}),$t(" "+ke(ee.controllers)+" kontrollere · ",1)],64)):Qe("",!0),$t(" Lånt "+ke(Pr(ee.borrowedAt))+" ",1),ee.returnedAt?(re(),he("span",CR," | retur "+ke(Pr(ee.returnedAt)),1)):Qe("",!0)])]),O("span",{class:Ze(["card-status",ee.returnedAt?"returned":"active"])},ke(ee.returnedAt?"Returnert":"Aktiv"),3)]))),128)),z.value.length>=20?(re(),he("button",{key:0,class:"btn-load",onClick:G[0]||(G[0]=ee=>v(!0))},"Last flere")):Qe("",!0)]))],512),[[nl,C.value==="history"]]),Vt(O("section",null,[G[23]||(G[23]=O("h2",{class:"section-title"},"Enheter",-1)),O("div",kR,[(re(!0),he(Ke,null,pr(Br(a),ee=>(re(),he("div",{key:ee.id,class:"card-row manage-row"},[lt.value===ee.id?(re(),he("div",VR,[O("div",DR,ke(ee.name),1),O("div",NR,[O("button",{type:"button",class:Ze(["type-btn",{active:De.value==="pc"}]),onClick:G[1]||(G[1]=vt=>De.value="pc")},[Je(mn,{name:"desktopcomputer",size:16}),G[13]||(G[13]=$t(" PC ",-1))],2),O("button",{type:"button",class:Ze(["type-btn",{active:De.value==="playstation"}]),onClick:G[2]||(G[2]=vt=>De.value="playstation")},[Je(mn,{name:"gamecontroller",size:16}),G[14]||(G[14]=$t(" PS ",-1))],2)]),Vt(O("input",{"onUpdate:modelValue":G[3]||(G[3]=vt=>ve.value=vt),class:"input",placeholder:De.value==="playstation"?"Tilbehør":"Tastatur",style:{"margin-bottom":"6px"}},null,8,OR),[[en,ve.value]]),De.value==="pc"?Vt((re(),he("input",{key:0,"onUpdate:modelValue":G[4]||(G[4]=vt=>me.value=vt),class:"input",placeholder:"Mus",style:{"margin-bottom":"6px"}},null,512)),[[en,me.value]]):Qe("",!0),O("div",{class:"edit-actions"},[O("button",{class:"btn-return",onClick:Ut},"Lagre"),O("button",{class:"btn-remove",onClick:dn},"Avbryt")])])):(re(),he(Ke,{key:1},[O("div",xR,[O("div",MR,[Je(mn,{name:ee.type==="playstation"?"gamecontroller":"desktopcomputer",size:16},null,8,["name"]),$t(" "+ke(ee.name),1)]),O("div",LR,ke(ee.status==="available"?"Ledig":"Utlånt"),1)]),ee.status==="available"?(re(),he("button",{key:0,class:"btn-edit",onClick:vt=>Pt(ee)},"Rediger",8,FR)):Qe("",!0),ee.status==="available"?(re(),he("button",{key:1,class:"btn-remove",onClick:vt=>Ge(ee.name)},"Fjern",8,UR)):Qe("",!0)],64))]))),128)),Br(a).length===0?(re(),he("div",BR,"Ingen enheter")):Qe("",!0)]),O("button",{class:"btn-seed",onClick:A},[Je(mn,{name:"tray.and.arrow.down",size:16}),G[15]||(G[15]=$t(" Sett inn standardenheter ",-1))]),O("form",{class:"add-form",onSubmit:Xs(w,["prevent"])},[G[21]||(G[21]=O("h3",null,"Ny enhet",-1)),O("div",$R,[G[16]||(G[16]=O("label",{for:"new-name"},"Navn",-1)),Vt(O("input",{id:"new-name","onUpdate:modelValue":G[5]||(G[5]=ee=>ae.value=ee),class:"input",placeholder:"F.eks. PC 4",required:""},null,512),[[en,ae.value]])]),O("div",jR,[G[19]||(G[19]=O("label",null,"Type",-1)),O("div",qR,[O("button",{type:"button",class:Ze(["type-btn",{active:oe.value==="pc"}]),onClick:G[6]||(G[6]=ee=>oe.value="pc")},[Je(mn,{name:"desktopcomputer",size:18}),G[17]||(G[17]=$t(" PC ",-1))],2),O("button",{type:"button",class:Ze(["type-btn",{active:oe.value==="playstation"}]),onClick:G[7]||(G[7]=ee=>oe.value="playstation")},[Je(mn,{name:"gamecontroller",size:18}),G[18]||(G[18]=$t(" PlayStation ",-1))],2)])]),O("div",WR,[O("label",HR,ke(oe.value==="playstation"?"Tilbehør":"Tastatur"),1),Vt(O("input",{id:"new-keyboard","onUpdate:modelValue":G[8]||(G[8]=ee=>T.value=ee),class:"input",placeholder:oe.value==="playstation"?"F.eks. Kontroller x2, ladestasjon":"F.eks. Tastatur 4"},null,8,KR),[[en,T.value]])]),oe.value==="pc"?(re(),he("div",zR,[G[20]||(G[20]=O("label",{for:"new-mouse"},"Mus",-1)),Vt(O("input",{id:"new-mouse","onUpdate:modelValue":G[9]||(G[9]=ee=>m.value=ee),class:"input",placeholder:"F.eks. Mus 4"},null,512),[[en,m.value]])])):Qe("",!0),G[22]||(G[22]=O("button",{type:"submit",class:"btn-submit"},"Legg til",-1))],32)],512),[[nl,C.value==="manage"]])])]))}}),QR=Iu(GR,[["__scopeId","data-v-78f3e16d"]]),YR={id:"toast-container"},JR={key:0,id:"loading-overlay"},XR=wi({__name:"App",setup(n){const e=Ae("student"),t=Ae([]);let r=0;function s(a,l="info"){const c=++r;t.value.push({id:c,message:a,type:l}),setTimeout(()=>{const h=t.value.findIndex(f=>f.id===c);h!==-1&&t.value.splice(h,1)},3e3)}fo("showToast",s),fo("currentView",e);const i=Ae(!1);return fo("loading",i),(a,l)=>(re(),he(Ke,null,[O("div",YR,[(re(!0),he(Ke,null,pr(t.value,c=>(re(),he("div",{key:c.id,class:Ze(["toast",c.type])},ke(c.message),3))),128))]),i.value?(re(),he("div",JR,[...l[0]||(l[0]=[O("div",{class:"loader-ring"},null,-1),O("p",null,"Laster...",-1)])])):Qe("",!0),e.value==="student"?(re(),zr(J0,{key:1})):e.value==="login"?(re(),zr(oR,{key:2})):e.value==="admin"?(re(),zr(QR,{key:3})):Qe("",!0)],64))}});bv(XR).mount("#app");

(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function lc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ke={},qr=[],rn=()=>{},_f=()=>!1,Qo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Yo=n=>n.startsWith("onUpdate:"),ot=Object.assign,cc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},i_=Object.prototype.hasOwnProperty,Re=(n,e)=>i_.call(n,e),ue=Array.isArray,Wr=n=>Ei(n)==="[object Map]",yf=n=>Ei(n)==="[object Set]",_h=n=>Ei(n)==="[object Date]",ge=n=>typeof n=="function",Me=n=>typeof n=="string",cn=n=>typeof n=="symbol",Pe=n=>n!==null&&typeof n=="object",vf=n=>(Pe(n)||ge(n))&&ge(n.then)&&ge(n.catch),Ef=Object.prototype.toString,Ei=n=>Ef.call(n),o_=n=>Ei(n).slice(8,-1),wf=n=>Ei(n)==="[object Object]",uc=n=>Me(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ks=lc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Jo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},a_=/-\w/g,Wt=Jo(n=>n.replace(a_,e=>e.slice(1).toUpperCase())),l_=/\B([A-Z])/g,rr=Jo(n=>n.replace(l_,"-$1").toLowerCase()),Tf=Jo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ka=Jo(n=>n?`on${Tf(n)}`:""),nn=(n,e)=>!Object.is(n,e),ho=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},If=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},hc=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let yh;const Xo=()=>yh||(yh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zo(n){if(ue(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=Me(r)?d_(r):Zo(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Me(n)||Pe(n))return n}const c_=/;(?![^(]*\))/g,u_=/:([^]+)/,h_=/\/\*[^]*?\*\//g;function d_(n){const e={};return n.replace(h_,"").split(c_).forEach(t=>{if(t){const r=t.split(u_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ze(n){let e="";if(Me(n))e=n;else if(ue(n))for(let t=0;t<n.length;t++){const r=Ze(n[t]);r&&(e+=r+" ")}else if(Pe(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const f_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",p_=lc(f_);function Af(n){return!!n||n===""}function g_(n,e){if(n.length!==e.length)return!1;let t=!0;for(let r=0;t&&r<n.length;r++)t=dc(n[r],e[r]);return t}function dc(n,e){if(n===e)return!0;let t=_h(n),r=_h(e);if(t||r)return t&&r?n.getTime()===e.getTime():!1;if(t=cn(n),r=cn(e),t||r)return n===e;if(t=ue(n),r=ue(e),t||r)return t&&r?g_(n,e):!1;if(t=Pe(n),r=Pe(e),t||r){if(!t||!r)return!1;const s=Object.keys(n).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in n){const l=n.hasOwnProperty(a),c=e.hasOwnProperty(a);if(l&&!c||!l&&c||!dc(n[a],e[a]))return!1}}return String(n)===String(e)}const bf=n=>!!(n&&n.__v_isRef===!0),Ve=n=>Me(n)?n:n==null?"":ue(n)||Pe(n)&&(n.toString===Ef||!ge(n.toString))?bf(n)?Ve(n.value):JSON.stringify(n,Rf,2):String(n),Rf=(n,e)=>bf(e)?Rf(n,e.value):Wr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[za(r,i)+" =>"]=s,t),{})}:yf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>za(t))}:cn(e)?za(e):Pe(e)&&!ue(e)&&!wf(e)?String(e):e,za=(n,e="")=>{var t;return cn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let nt;class m_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&nt&&(nt.active?(this.parent=nt,this.index=(nt.scopes||(nt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=nt;try{return nt=this,e()}finally{nt=t}}}on(){++this._on===1&&(this.prevScope=nt,nt=this)}off(){if(this._on>0&&--this._on===0){if(nt===this)nt=this.prevScope;else{let e=nt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function __(){return nt}let De;const Ga=new WeakSet;class Sf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,nt&&(nt.active?nt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ga.has(this)&&(Ga.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Cf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,vh(this),kf(this);const e=De,t=Ht;De=this,Ht=!0;try{return this.fn()}finally{Vf(this),De=e,Ht=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)gc(e);this.deps=this.depsTail=void 0,vh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ga.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){bl(this)&&this.run()}get dirty(){return bl(this)}}let Pf=0,zs,Gs;function Cf(n,e=!1){if(n.flags|=8,e){n.next=Gs,Gs=n;return}n.next=zs,zs=n}function fc(){Pf++}function pc(){if(--Pf>0)return;if(Gs){let e=Gs;for(Gs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;zs;){let e=zs;for(zs=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function kf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Vf(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),gc(r),y_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function bl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Df(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Df(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===si)||(n.globalVersion=si,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!bl(n))))return;n.flags|=2;const e=n.dep,t=De,r=Ht;De=n,Ht=!0;try{kf(n);const s=n.fn(n._value);(e.version===0||nn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{De=t,Ht=r,Vf(n),n.flags&=-3}}function gc(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)gc(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function y_(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Ht=!0;const Nf=[];function un(){Nf.push(Ht),Ht=!1}function hn(){const n=Nf.pop();Ht=n===void 0?!0:n}function vh(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=De;De=void 0;try{e()}finally{De=t}}}let si=0;class v_{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class mc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!De||!Ht||De===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==De)t=this.activeLink=new v_(De,this),De.deps?(t.prevDep=De.depsTail,De.depsTail.nextDep=t,De.depsTail=t):De.deps=De.depsTail=t,Of(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=De.depsTail,t.nextDep=void 0,De.depsTail.nextDep=t,De.depsTail=t,De.deps===t&&(De.deps=r)}return t}trigger(e){this.version++,si++,this.notify(e)}notify(e){fc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{pc()}}}function Of(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Of(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Rl=new WeakMap,_r=Symbol(""),Sl=Symbol(""),ii=Symbol("");function _t(n,e,t){if(Ht&&De){let r=Rl.get(n);r||Rl.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new mc),s.map=r,s.key=t),s.track()}}function wn(n,e,t,r,s,i){const a=Rl.get(n);if(!a){si++;return}const l=c=>{c&&c.trigger()};if(fc(),e==="clear")a.forEach(l);else{const c=ue(n),h=c&&uc(t);if(c&&t==="length"){const f=Number(r);a.forEach((p,_)=>{(_==="length"||_===ii||!cn(_)&&_>=f)&&l(p)})}else switch((t!==void 0||a.has(void 0))&&l(a.get(t)),h&&l(a.get(ii)),e){case"add":c?h&&l(a.get("length")):(l(a.get(_r)),Wr(n)&&l(a.get(Sl)));break;case"delete":c||(l(a.get(_r)),Wr(n)&&l(a.get(Sl)));break;case"set":Wr(n)&&l(a.get(_r));break}}pc()}function Or(n){const e=be(n);return e===n?e:(_t(e,"iterate",ii),Ft(n)?e:e.map(Kt))}function ea(n){return _t(n=be(n),"iterate",ii),n}function en(n,e){return Pn(n)?Zr(yr(n)?Kt(e):e):Kt(e)}const E_={__proto__:null,[Symbol.iterator](){return Qa(this,Symbol.iterator,n=>en(this,n))},concat(...n){return Or(this).concat(...n.map(e=>ue(e)?Or(e):e))},entries(){return Qa(this,"entries",n=>(n[1]=en(this,n[1]),n))},every(n,e){return _n(this,"every",n,e,void 0,arguments)},filter(n,e){return _n(this,"filter",n,e,t=>t.map(r=>en(this,r)),arguments)},find(n,e){return _n(this,"find",n,e,t=>en(this,t),arguments)},findIndex(n,e){return _n(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return _n(this,"findLast",n,e,t=>en(this,t),arguments)},findLastIndex(n,e){return _n(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return _n(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ya(this,"includes",n)},indexOf(...n){return Ya(this,"indexOf",n)},join(n){return Or(this).join(n)},lastIndexOf(...n){return Ya(this,"lastIndexOf",n)},map(n,e){return _n(this,"map",n,e,void 0,arguments)},pop(){return Ds(this,"pop")},push(...n){return Ds(this,"push",n)},reduce(n,...e){return Eh(this,"reduce",n,e)},reduceRight(n,...e){return Eh(this,"reduceRight",n,e)},shift(){return Ds(this,"shift")},some(n,e){return _n(this,"some",n,e,void 0,arguments)},splice(...n){return Ds(this,"splice",n)},toReversed(){return Or(this).toReversed()},toSorted(n){return Or(this).toSorted(n)},toSpliced(...n){return Or(this).toSpliced(...n)},unshift(...n){return Ds(this,"unshift",n)},values(){return Qa(this,"values",n=>en(this,n))}};function Qa(n,e,t){const r=ea(n),s=r[e]();return r!==n&&!Ft(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=t(i.value)),i}),s}const w_=Array.prototype;function _n(n,e,t,r,s,i){const a=ea(n),l=a!==n&&!Ft(n),c=a[e];if(c!==w_[e]){const p=c.apply(n,i);return l?Kt(p):p}let h=t;a!==n&&(l?h=function(p,_){return t.call(this,en(n,p),_,n)}:t.length>2&&(h=function(p,_){return t.call(this,p,_,n)}));const f=c.call(a,h,r);return l&&s?s(f):f}function Eh(n,e,t,r){const s=ea(n),i=s!==n&&!Ft(n);let a=t,l=!1;s!==n&&(i?(l=r.length===0,a=function(h,f,p){return l&&(l=!1,h=en(n,h)),t.call(this,h,en(n,f),p,n)}):t.length>3&&(a=function(h,f,p){return t.call(this,h,f,p,n)}));const c=s[e](a,...r);return l?en(n,c):c}function Ya(n,e,t){const r=be(n);_t(r,"iterate",ii);const s=r[e](...t);return(s===-1||s===!1)&&Ec(t[0])?(t[0]=be(t[0]),r[e](...t)):s}function Ds(n,e,t=[]){un(),fc();const r=be(n)[e].apply(n,t);return pc(),hn(),r}const T_=lc("__proto__,__v_isRef,__isVue"),xf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(cn));function I_(n){cn(n)||(n=String(n));const e=be(this);return _t(e,"has",n),e.hasOwnProperty(n)}class Mf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?N_:Bf:i?Uf:Ff).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=ue(e);if(!s){let c;if(a&&(c=E_[t]))return c;if(t==="hasOwnProperty")return I_}const l=Reflect.get(e,t,vt(e)?e:r);if((cn(t)?xf.has(t):T_(t))||(s||_t(e,"get",t),i))return l;if(vt(l)){const c=a&&uc(t)?l:l.value;return s&&Pe(c)?Cl(c):c}return Pe(l)?s?Cl(l):yc(l):l}}class Lf extends Mf{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];const a=ue(e)&&uc(t);if(!this._isShallow){const h=Pn(i);if(!Ft(r)&&!Pn(r)&&(i=be(i),r=be(r)),!a&&vt(i)&&!vt(r))return h||(i.value=r),!0}const l=a?Number(t)<e.length:Re(e,t),c=Reflect.set(e,t,r,vt(e)?e:s);return e===be(s)&&c&&(l?nn(r,i)&&wn(e,"set",t,r):wn(e,"add",t,r)),c}deleteProperty(e,t){const r=Re(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&wn(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!cn(t)||!xf.has(t))&&_t(e,"has",t),r}ownKeys(e){return _t(e,"iterate",ue(e)?"length":_r),Reflect.ownKeys(e)}}class A_ extends Mf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const b_=new Lf,R_=new A_,S_=new Lf(!0);const Pl=n=>n,to=n=>Reflect.getPrototypeOf(n);function P_(n,e,t){return function(...r){const s=this.__v_raw,i=be(s),a=Wr(i),l=n==="entries"||n===Symbol.iterator&&a,c=n==="keys"&&a,h=s[n](...r),f=t?Pl:e?Zr:Kt;return!e&&_t(i,"iterate",c?Sl:_r),ot(Object.create(h),{next(){const{value:p,done:_}=h.next();return _?{value:p,done:_}:{value:l?[f(p[0]),f(p[1])]:f(p),done:_}}})}}function no(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function C_(n,e){const t={get(s){const i=this.__v_raw,a=be(i),l=be(s);n||(nn(s,l)&&_t(a,"get",s),_t(a,"get",l));const{has:c}=to(a),h=e?Pl:n?Zr:Kt;if(c.call(a,s))return h(i.get(s));if(c.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!n&&_t(be(s),"iterate",_r),s.size},has(s){const i=this.__v_raw,a=be(i),l=be(s);return n||(nn(s,l)&&_t(a,"has",s),_t(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=be(l),h=e?Pl:n?Zr:Kt;return!n&&_t(c,"iterate",_r),l.forEach((f,p)=>s.call(i,h(f),h(p),a))}};return ot(t,n?{add:no("add"),set:no("set"),delete:no("delete"),clear:no("clear")}:{add(s){const i=be(this),a=to(i),l=be(s),c=!e&&!Ft(s)&&!Pn(s)?l:s;return a.has.call(i,c)||nn(s,c)&&a.has.call(i,s)||nn(l,c)&&a.has.call(i,l)||(i.add(c),wn(i,"add",c,c)),this},set(s,i){!e&&!Ft(i)&&!Pn(i)&&(i=be(i));const a=be(this),{has:l,get:c}=to(a);let h=l.call(a,s);h||(s=be(s),h=l.call(a,s));const f=c.call(a,s);return a.set(s,i),h?nn(i,f)&&wn(a,"set",s,i):wn(a,"add",s,i),this},delete(s){const i=be(this),{has:a,get:l}=to(i);let c=a.call(i,s);c||(s=be(s),c=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&wn(i,"delete",s,void 0),h},clear(){const s=be(this),i=s.size!==0,a=s.clear();return i&&wn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=P_(s,n,e)}),t}function _c(n,e){const t=C_(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(Re(t,s)&&s in r?t:r,s,i)}const k_={get:_c(!1,!1)},V_={get:_c(!1,!0)},D_={get:_c(!0,!1)};const Ff=new WeakMap,Uf=new WeakMap,Bf=new WeakMap,N_=new WeakMap;function O_(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yc(n){return Pn(n)?n:vc(n,!1,b_,k_,Ff)}function x_(n){return vc(n,!1,S_,V_,Uf)}function Cl(n){return vc(n,!0,R_,D_,Bf)}function vc(n,e,t,r,s){if(!Pe(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const i=s.get(n);if(i)return i;const a=O_(o_(n));if(a===0)return n;const l=new Proxy(n,a===2?r:t);return s.set(n,l),l}function yr(n){return Pn(n)?yr(n.__v_raw):!!(n&&n.__v_isReactive)}function Pn(n){return!!(n&&n.__v_isReadonly)}function Ft(n){return!!(n&&n.__v_isShallow)}function Ec(n){return n?!!n.__v_raw:!1}function be(n){const e=n&&n.__v_raw;return e?be(e):n}function M_(n){return!Re(n,"__v_skip")&&Object.isExtensible(n)&&If(n,"__v_skip",!0),n}const Kt=n=>Pe(n)?yc(n):n,Zr=n=>Pe(n)?Cl(n):n;function vt(n){return n?n.__v_isRef===!0:!1}function Ie(n){return L_(n,!1)}function L_(n,e){return vt(n)?n:new F_(n,e)}class F_{constructor(e,t){this.dep=new mc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:be(e),this._value=t?e:Kt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||Ft(e)||Pn(e);e=r?e:be(e),nn(e,t)&&(this._rawValue=e,this._value=r?e:Kt(e),this.dep.trigger())}}function Br(n){return vt(n)?n.value:n}const U_={get:(n,e,t)=>e==="__v_raw"?n:Br(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return vt(s)&&!vt(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function $f(n){return yr(n)?n:new Proxy(n,U_)}class B_{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new mc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=si-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&De!==this)return Cf(this,!0),!0}get value(){const e=this.dep.track();return Df(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function $_(n,e,t=!1){let r,s;return ge(n)?r=n:(r=n.get,s=n.set),new B_(r,s,t)}const ro={},Ao=new WeakMap;let dr;function j_(n,e=!1,t=dr){if(t){let r=Ao.get(t);r||Ao.set(t,r=[]),r.push(n)}}function q_(n,e,t=ke){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=t,h=q=>s?q:Ft(q)||s===!1||s===0?Tn(q,1):Tn(q);let f,p,_,b,k=!1,S=!1;if(vt(n)?(p=()=>n.value,k=Ft(n)):yr(n)?(p=()=>h(n),k=!0):ue(n)?(S=!0,k=n.some(q=>yr(q)||Ft(q)),p=()=>n.map(q=>{if(vt(q))return q.value;if(yr(q))return h(q);if(ge(q))return c?c(q,2):q()})):ge(n)?e?p=c?()=>c(n,2):n:p=()=>{if(_){un();try{_()}finally{hn()}}const q=dr;dr=f;try{return c?c(n,3,[b]):n(b)}finally{dr=q}}:p=rn,e&&s){const q=p,le=s===!0?1/0:s;p=()=>Tn(q(),le)}const C=__(),$=()=>{f.stop(),C&&C.active&&cc(C.effects,f)};if(i&&e){const q=e;e=(...le)=>{const oe=q(...le);return $(),oe}}let F=S?new Array(n.length).fill(ro):ro;const H=q=>{if(!(!(f.flags&1)||!f.dirty&&!q))if(e){const le=f.run();if(q||s||k||(S?le.some((oe,T)=>nn(oe,F[T])):nn(le,F))){_&&_();const oe=dr;dr=f;try{const T=[le,F===ro?void 0:S&&F[0]===ro?[]:F,b];F=le,c?c(e,3,T):e(...T)}finally{dr=oe}}}else f.run()};return l&&l(H),f=new Sf(p),f.scheduler=a?()=>a(H,!1):H,b=q=>j_(q,!1,f),_=f.onStop=()=>{const q=Ao.get(f);if(q){if(c)c(q,4);else for(const le of q)le();Ao.delete(f)}},e?r?H(!0):F=f.run():a?a(H.bind(null,!0),!0):f.run(),$.pause=f.pause.bind(f),$.resume=f.resume.bind(f),$.stop=$,$}function Tn(n,e=1/0,t){if(e<=0||!Pe(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,vt(n))Tn(n.value,e,t);else if(ue(n))for(let r=0;r<n.length;r++)Tn(n[r],e,t);else if(yf(n)||Wr(n))n.forEach(r=>{Tn(r,e,t)});else if(wf(n)){for(const r in n)Tn(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&Tn(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function wi(n,e,t,r){try{return r?n(...r):n()}catch(s){ta(s,e,t)}}function zt(n,e,t,r){if(ge(n)){const s=wi(n,e,t,r);return s&&vf(s)&&s.catch(i=>{ta(i,e,t)}),s}if(ue(n)){const s=[];for(let i=0;i<n.length;i++)s.push(zt(n[i],e,t,r));return s}}function ta(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||ke;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](n,c,h)===!1)return}l=l.parent}if(i){un(),wi(i,null,10,[n,c,h]),hn();return}}W_(n,t,s,r,a)}function W_(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const bt=[];let Zt=-1;const Hr=[];let jn=null,xr=0;const jf=Promise.resolve();let bo=null;function kl(n){const e=bo||jf;return n?e.then(this?n.bind(this):n):e}function H_(n){let e=Zt+1,t=bt.length;for(;e<t;){const r=e+t>>>1,s=bt[r],i=oi(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function wc(n){if(!(n.flags&1)){const e=oi(n),t=bt[bt.length-1];!t||!(n.flags&2)&&e>=oi(t)?bt.push(n):bt.splice(H_(e),0,n),n.flags|=1,qf()}}function qf(){bo||(bo=jf.then(Hf))}function K_(n){ue(n)?Hr.push(...n):jn&&n.id===-1?jn.splice(xr+1,0,n):n.flags&1||(Hr.push(n),n.flags|=1),qf()}function wh(n,e,t=Zt+1){for(;t<bt.length;t++){const r=bt[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;bt.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Wf(n){if(Hr.length){const e=[...new Set(Hr)].sort((t,r)=>oi(t)-oi(r));if(Hr.length=0,jn){jn.push(...e);return}for(jn=e,xr=0;xr<jn.length;xr++){const t=jn[xr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}jn=null,xr=0}}const oi=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Hf(n){try{for(Zt=0;Zt<bt.length;Zt++){const e=bt[Zt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),wi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Zt<bt.length;Zt++){const e=bt[Zt];e&&(e.flags&=-2)}Zt=-1,bt.length=0,Wf(),bo=null,(bt.length||Hr.length)&&Hf()}}let Lt=null,Kf=null;function Ro(n){const e=Lt;return Lt=n,Kf=n&&n.type.__scopeId||null,e}function z_(n,e=Lt,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&xh(-1);const i=Ro(e);let a;try{a=n(...s)}finally{Ro(i),r._d&&xh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function St(n,e){if(Lt===null)return n;const t=oa(Lt),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=ke]=e[s];i&&(ge(i)&&(i={mounted:i,updated:i}),i.deep&&Tn(a),r.push({dir:i,instance:t,value:a,oldValue:void 0,arg:l,modifiers:c}))}return n}function ur(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(un(),zt(c,t,8,[n.el,l,n,e]),hn())}}function fo(n,e){if(Rt){let t=Rt.provides;const r=Rt.parent&&Rt.parent.provides;r===t&&(t=Rt.provides=Object.create(r)),t[n]=e}}function Ot(n,e,t=!1){const r=Ky();if(r||Kr){let s=Kr?Kr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ge(e)?e.call(r&&r.proxy):e}}const G_=Symbol.for("v-scx"),Q_=()=>Ot(G_);function Ja(n,e,t){return zf(n,e,t)}function zf(n,e,t=ke){const{immediate:r,deep:s,flush:i,once:a}=t,l=ot({},t),c=e&&r||!e&&i!=="post";let h;if(li){if(i==="sync"){const b=Q_();h=b.__watcherHandles||(b.__watcherHandles=[])}else if(!c){const b=()=>{};return b.stop=rn,b.resume=rn,b.pause=rn,b}}const f=Rt;l.call=(b,k,S)=>zt(b,f,k,S);let p=!1;i==="post"?l.scheduler=b=>{At(b,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(b,k)=>{k?b():wc(b)}),l.augmentJob=b=>{e&&(b.flags|=4),p&&(b.flags|=2,f&&(b.id=f.uid,b.i=f))};const _=q_(n,e,l);return li&&(h?h.push(_):c&&_()),_}function Y_(n,e,t){const r=this.proxy,s=Me(n)?n.includes(".")?Gf(r,n):()=>r[n]:n.bind(r,r);let i;ge(e)?i=e:(i=e.handler,t=e);const a=Ii(this),l=zf(s,i.bind(r),t);return a(),l}function Gf(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const $n=new WeakMap,Qf=Symbol("_vte"),J_=n=>n.__isTeleport,pr=n=>n&&(n.disabled||n.disabled===""),X_=n=>n&&(n.defer||n.defer===""),Th=n=>typeof SVGElement<"u"&&n instanceof SVGElement,Ih=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,Vl=(n,e)=>{const t=n&&n.to;return Me(t)?e?e(t):null:t},Z_={name:"Teleport",__isTeleport:!0,process(n,e,t,r,s,i,a,l,c,h){const{mc:f,pc:p,pbc:_,o:{insert:b,querySelector:k,createText:S,createComment:C,parentNode:$}}=h,F=pr(e.props);let{dynamicChildren:H}=e;const q=(T,m,y)=>{T.shapeFlag&16&&f(T.children,m,y,s,i,a,l,c)},le=(T=e)=>{const m=pr(T.props),y=T.target=Vl(T.props,k),I=Dl(y,T,S,b);y&&(a!=="svg"&&Th(y)?a="svg":a!=="mathml"&&Ih(y)&&(a="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(y),m||(q(T,y,I),Ls(T,!1)))},oe=T=>{const m=()=>{if($n.get(T)===m){if($n.delete(T),pr(T.props)){const y=$(T.el)||t;q(T,y,T.anchor),Ls(T,!0)}le(T)}};$n.set(T,m),At(m,i)};if(n==null){const T=e.el=S(""),m=e.anchor=S("");if(b(T,t,r),b(m,t,r),X_(e.props)||i&&i.pendingBranch){oe(e);return}F&&(q(e,t,m),Ls(e,!0)),le()}else{e.el=n.el;const T=e.anchor=n.anchor,m=$n.get(n);if(m){m.flags|=8,$n.delete(n),oe(e);return}e.targetStart=n.targetStart;const y=e.target=n.target,I=e.targetAnchor=n.targetAnchor,v=pr(n.props),A=v?t:y,w=v?T:I;if(a==="svg"||Th(y)?a="svg":(a==="mathml"||Ih(y))&&(a="mathml"),H?(_(n.dynamicChildren,H,A,s,i,a,l),Rc(n,e,!0)):c||p(n,e,A,w,s,i,a,l,!1),F)v?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):so(e,t,T,h,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const Ge=Vl(e.props,k);Ge&&(e.target=Ge,so(e,Ge,null,h,0))}else v&&so(e,y,I,h,1);Ls(e,F)}},remove(n,e,t,{um:r,o:{remove:s}},i){const{shapeFlag:a,children:l,anchor:c,targetStart:h,targetAnchor:f,target:p,props:_}=n,b=pr(_),k=i||!b,S=$n.get(n);if(S&&(S.flags|=8,$n.delete(n)),p&&(s(h),s(f)),i&&s(c),!S&&(b||p)&&a&16)for(let C=0;C<l.length;C++){const $=l[C];r($,e,t,k,!!$.dynamicChildren)}},move:so,hydrate:ey};function so(n,e,t,{o:{insert:r},m:s},i=2){i===0&&r(n.targetAnchor,e,t);const{el:a,anchor:l,shapeFlag:c,children:h,props:f}=n,p=i===2;if(p&&r(a,e,t),!$n.has(n)&&(!p||pr(f))&&c&16)for(let _=0;_<h.length;_++)s(h[_],e,t,2);p&&r(l,e,t)}function ey(n,e,t,r,s,i,{o:{nextSibling:a,parentNode:l,querySelector:c,insert:h,createText:f}},p){function _(C,$){let F=$;for(;F;){if(F&&F.nodeType===8){if(F.data==="teleport start anchor")e.targetStart=F;else if(F.data==="teleport anchor"){e.targetAnchor=F,C._lpa=e.targetAnchor&&a(e.targetAnchor);break}}F=a(F)}}function b(C,$){$.anchor=p(a(C),$,l(C),t,r,s,i)}const k=e.target=Vl(e.props,c),S=pr(e.props);if(k){const C=k._lpa||k.firstChild;e.shapeFlag&16&&(S?(b(n,e),_(k,C),e.targetAnchor||Dl(k,e,f,h,l(n)===k?n:null)):(e.anchor=a(n),_(k,C),e.targetAnchor||Dl(k,e,f,h),p(C&&a(C),e,k,t,r,s,i))),Ls(e,S)}else S&&e.shapeFlag&16&&(b(n,e),e.targetStart=n,e.targetAnchor=a(n));return e.anchor&&a(e.anchor)}const Ah=Z_;function Ls(n,e){const t=n.ctx;if(t&&t.ut){let r,s;for(e?(r=n.el,s=n.anchor):(r=n.targetStart,s=n.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",t.uid),r=r.nextSibling;t.ut()}}function Dl(n,e,t,r,s=null){const i=e.targetStart=t(""),a=e.targetAnchor=t("");return i[Qf]=a,n&&(r(i,n,s),r(a,n,s)),a}const Xa=Symbol("_leaveCb");function Tc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Tc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Ti(n,e){return ge(n)?ot({name:n.name},e,{setup:n}):n}function Yf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function bh(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const So=new WeakMap;function Qs(n,e,t,r,s=!1){if(ue(n)){n.forEach((S,C)=>Qs(S,e&&(ue(e)?e[C]:e),t,r,s));return}if(Ys(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Qs(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?oa(r.component):r.el,a=s?null:i,{i:l,r:c}=n,h=e&&e.r,f=l.refs===ke?l.refs={}:l.refs,p=l.setupState,_=be(p),b=p===ke?_f:S=>bh(f,S)?!1:Re(_,S),k=(S,C)=>!(C&&bh(f,C));if(h!=null&&h!==c){if(Rh(e),Me(h))f[h]=null,b(h)&&(p[h]=null);else if(vt(h)){const S=e;k(h,S.k)&&(h.value=null),S.k&&(f[S.k]=null)}}if(ge(c)){un();try{wi(c,l,12,[a,f])}finally{hn()}}else{const S=Me(c),C=vt(c);if(S||C){const $=()=>{if(n.f){const F=S?b(c)?p[c]:f[c]:k()||!n.k?c.value:f[n.k];if(s)ue(F)&&cc(F,i);else if(ue(F))F.includes(i)||F.push(i);else if(S)f[c]=[i],b(c)&&(p[c]=f[c]);else{const H=[i];k(c,n.k)&&(c.value=H),n.k&&(f[n.k]=H)}}else S?(f[c]=a,b(c)&&(p[c]=a)):C&&(k(c,n.k)&&(c.value=a),n.k&&(f[n.k]=a))};if(a){const F=()=>{$(),So.delete(n)};F.id=-1,So.set(n,F),At(F,t)}else Rh(n),$()}}}function Rh(n){const e=So.get(n);e&&(e.flags|=8,So.delete(n))}Xo().requestIdleCallback;Xo().cancelIdleCallback;const Ys=n=>!!n.type.__asyncLoader,Jf=n=>n.type.__isKeepAlive;function ty(n,e){Xf(n,"a",e)}function ny(n,e){Xf(n,"da",e)}function Xf(n,e,t=Rt){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(na(e,r,t),t){let s=t.parent;for(;s&&s.parent;)Jf(s.parent.vnode)&&ry(r,e,t,s),s=s.parent}}function ry(n,e,t,r){const s=na(e,n,r,!0);ra(()=>{cc(r[e],s)},t)}function na(n,e,t=Rt,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...a)=>{un();const l=Ii(t),c=zt(e,t,n,a);return l(),hn(),c});return r?s.unshift(i):s.push(i),i}}const On=n=>(e,t=Rt)=>{(!li||n==="sp")&&na(n,(...r)=>e(...r),t)},sy=On("bm"),Ic=On("m"),iy=On("bu"),oy=On("u"),ay=On("bum"),ra=On("um"),ly=On("sp"),cy=On("rtg"),uy=On("rtc");function hy(n,e=Rt){na("ec",n,e)}const dy=Symbol.for("v-ndc");function gr(n,e,t,r){let s;const i=t,a=ue(n);if(a||Me(n)){const l=a&&yr(n);let c=!1,h=!1;l&&(c=!Ft(n),h=Pn(n),n=ea(n)),s=new Array(n.length);for(let f=0,p=n.length;f<p;f++)s[f]=e(c?h?Zr(Kt(n[f])):Kt(n[f]):n[f],f,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let l=0;l<n;l++)s[l]=e(l+1,l,void 0,i)}else if(Pe(n))if(n[Symbol.iterator])s=Array.from(n,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(n);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const f=l[c];s[c]=e(n[f],f,c,i)}}else s=[];return s}const Nl=n=>n?yp(n)?oa(n):Nl(n.parent):null,Js=ot(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Nl(n.parent),$root:n=>Nl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>ep(n),$forceUpdate:n=>n.f||(n.f=()=>{wc(n.update)}),$nextTick:n=>n.n||(n.n=kl.bind(n.proxy)),$watch:n=>Y_.bind(n)}),Za=(n,e)=>n!==ke&&!n.__isScriptSetup&&Re(n,e),fy={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=n;if(e[0]!=="$"){const _=a[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(Za(r,e))return a[e]=1,r[e];if(s!==ke&&Re(s,e))return a[e]=2,s[e];if(Re(i,e))return a[e]=3,i[e];if(t!==ke&&Re(t,e))return a[e]=4,t[e];Ol&&(a[e]=0)}}const h=Js[e];let f,p;if(h)return e==="$attrs"&&_t(n.attrs,"get",""),h(n);if((f=l.__cssModules)&&(f=f[e]))return f;if(t!==ke&&Re(t,e))return a[e]=4,t[e];if(p=c.config.globalProperties,Re(p,e))return p[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return Za(s,e)?(s[e]=t,!0):r!==ke&&Re(r,e)?(r[e]=t,!0):Re(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,props:i,type:a}},l){let c;return!!(t[l]||n!==ke&&l[0]!=="$"&&Re(n,l)||Za(e,l)||Re(i,l)||Re(r,l)||Re(Js,l)||Re(s.config.globalProperties,l)||(c=a.__cssModules)&&c[l])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Re(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Sh(n){return ue(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ol=!0;function py(n){const e=ep(n),t=n.proxy,r=n.ctx;Ol=!1,e.beforeCreate&&Ph(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:f,beforeMount:p,mounted:_,beforeUpdate:b,updated:k,activated:S,deactivated:C,beforeDestroy:$,beforeUnmount:F,destroyed:H,unmounted:q,render:le,renderTracked:oe,renderTriggered:T,errorCaptured:m,serverPrefetch:y,expose:I,inheritAttrs:v,components:A,directives:w,filters:Ge}=e;if(h&&gy(h,r,null),a)for(const me in a){const _e=a[me];ge(_e)&&(r[me]=_e.bind(t))}if(s){const me=s.call(t,t);Pe(me)&&(n.data=yc(me))}if(Ol=!0,i)for(const me in i){const _e=i[me],ct=ge(_e)?_e.bind(t,t):ge(_e.get)?_e.get.bind(t,t):rn,pn=!ge(_e)&&ge(_e.set)?_e.set.bind(t):rn,Ut=$r({get:ct,set:pn});Object.defineProperty(r,me,{enumerable:!0,configurable:!0,get:()=>Ut.value,set:$e=>Ut.value=$e})}if(l)for(const me in l)Zf(l[me],r,t,me);if(c){const me=ge(c)?c.call(t):c;Reflect.ownKeys(me).forEach(_e=>{fo(_e,me[_e])})}f&&Ph(f,n,"c");function Fe(me,_e){ue(_e)?_e.forEach(ct=>me(ct.bind(t))):_e&&me(_e.bind(t))}if(Fe(sy,p),Fe(Ic,_),Fe(iy,b),Fe(oy,k),Fe(ty,S),Fe(ny,C),Fe(hy,m),Fe(uy,oe),Fe(cy,T),Fe(ay,F),Fe(ra,q),Fe(ly,y),ue(I))if(I.length){const me=n.exposed||(n.exposed={});I.forEach(_e=>{Object.defineProperty(me,_e,{get:()=>t[_e],set:ct=>t[_e]=ct,enumerable:!0})})}else n.exposed||(n.exposed={});le&&n.render===rn&&(n.render=le),v!=null&&(n.inheritAttrs=v),A&&(n.components=A),w&&(n.directives=w),y&&Yf(n)}function gy(n,e,t=rn){ue(n)&&(n=xl(n));for(const r in n){const s=n[r];let i;Pe(s)?"default"in s?i=Ot(s.from||r,s.default,!0):i=Ot(s.from||r):i=Ot(s),vt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function Ph(n,e,t){zt(ue(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function Zf(n,e,t,r){let s=r.includes(".")?Gf(t,r):()=>t[r];if(Me(n)){const i=e[n];ge(i)&&Ja(s,i)}else if(ge(n))Ja(s,n.bind(t));else if(Pe(n))if(ue(n))n.forEach(i=>Zf(i,e,t,r));else{const i=ge(n.handler)?n.handler.bind(t):e[n.handler];ge(i)&&Ja(s,i,n)}}function ep(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!t&&!r?c=e:(c={},s.length&&s.forEach(h=>Po(c,h,a,!0)),Po(c,e,a)),Pe(e)&&i.set(e,c),c}function Po(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&Po(n,i,t,!0),s&&s.forEach(a=>Po(n,a,t,!0));for(const a in e)if(!(r&&a==="expose")){const l=my[a]||t&&t[a];n[a]=l?l(n[a],e[a]):e[a]}return n}const my={data:Ch,props:kh,emits:kh,methods:Fs,computed:Fs,beforeCreate:It,created:It,beforeMount:It,mounted:It,beforeUpdate:It,updated:It,beforeDestroy:It,beforeUnmount:It,destroyed:It,unmounted:It,activated:It,deactivated:It,errorCaptured:It,serverPrefetch:It,components:Fs,directives:Fs,watch:yy,provide:Ch,inject:_y};function Ch(n,e){return e?n?function(){return ot(ge(n)?n.call(this,this):n,ge(e)?e.call(this,this):e)}:e:n}function _y(n,e){return Fs(xl(n),xl(e))}function xl(n){if(ue(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function It(n,e){return n?[...new Set([].concat(n,e))]:e}function Fs(n,e){return n?ot(Object.create(null),n,e):e}function kh(n,e){return n?ue(n)&&ue(e)?[...new Set([...n,...e])]:ot(Object.create(null),Sh(n),Sh(e??{})):e}function yy(n,e){if(!n)return e;if(!e)return n;const t=ot(Object.create(null),n);for(const r in e)t[r]=It(n[r],e[r]);return t}function tp(){return{app:null,config:{isNativeTag:_f,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vy=0;function Ey(n,e){return function(r,s=null){ge(r)||(r=ot({},r)),s!=null&&!Pe(s)&&(s=null);const i=tp(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:vy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Xy,get config(){return i.config},set config(f){},use(f,...p){return a.has(f)||(f&&ge(f.install)?(a.add(f),f.install(h,...p)):ge(f)&&(a.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,_){if(!c){const b=h._ceVNode||Je(r,s);return b.appContext=i,_===!0?_="svg":_===!1&&(_=void 0),n(b,f,_),c=!0,h._container=f,f.__vue_app__=h,oa(b.component)}},onUnmount(f){l.push(f)},unmount(){c&&(zt(l,h._instance,16),n(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=Kr;Kr=h;try{return f()}finally{Kr=p}}};return h}}let Kr=null;const wy=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Wt(e)}Modifiers`]||n[`${rr(e)}Modifiers`];function Ty(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||ke;let s=t;const i=e.startsWith("update:"),a=i&&wy(r,e.slice(7));a&&(a.trim&&(s=t.map(f=>Me(f)?f.trim():f)),a.number&&(s=t.map(hc)));let l,c=r[l=Ka(e)]||r[l=Ka(Wt(e))];!c&&i&&(c=r[l=Ka(rr(e))]),c&&zt(c,n,6,s);const h=r[l+"Once"];if(h){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,zt(h,n,6,s)}}const Iy=new WeakMap;function np(n,e,t=!1){const r=t?Iy:e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let a={},l=!1;if(!ge(n)){const c=h=>{const f=np(h,e,!0);f&&(l=!0,ot(a,f))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!i&&!l?(Pe(n)&&r.set(n,null),null):(ue(i)?i.forEach(c=>a[c]=null):ot(a,i),Pe(n)&&r.set(n,a),a)}function sa(n,e){return!n||!Qo(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Re(n,e[0].toLowerCase()+e.slice(1))||Re(n,rr(e))||Re(n,e))}function Vh(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:f,props:p,data:_,setupState:b,ctx:k,inheritAttrs:S}=n,C=Ro(n);let $,F;try{if(t.shapeFlag&4){const q=s||r,le=q;$=tn(h.call(le,q,f,p,b,_,k)),F=l}else{const q=e;$=tn(q.length>1?q(p,{attrs:l,slots:a,emit:c}):q(p,null)),F=e.props?l:Ay(l)}}catch(q){Xs.length=0,ta(q,n,1),$=Je(Zn)}let H=$;if(F&&S!==!1){const q=Object.keys(F),{shapeFlag:le}=H;q.length&&le&7&&(i&&q.some(Yo)&&(F=by(F,i)),H=es(H,F,!1,!0))}return t.dirs&&(H=es(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(t.dirs):t.dirs),t.transition&&Tc(H,t.transition),$=H,Ro(C),$}const Ay=n=>{let e;for(const t in n)(t==="class"||t==="style"||Qo(t))&&((e||(e={}))[t]=n[t]);return e},by=(n,e)=>{const t={};for(const r in n)(!Yo(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function Ry(n,e,t){const{props:r,children:s,component:i}=n,{props:a,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?Dh(r,a,h):!!a;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const _=f[p];if(rp(a,r,_)&&!sa(h,_))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?Dh(r,a,h):!0:!!a;return!1}function Dh(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(rp(e,n,i)&&!sa(t,i))return!0}return!1}function rp(n,e,t){const r=n[t],s=e[t];return t==="style"&&Pe(r)&&Pe(s)?!dc(r,s):r!==s}function Sy({vnode:n,parent:e,suspense:t},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=r,n=s),s===n)(n=e.vnode).el=r,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=r)}const sp={},ip=()=>Object.create(sp),op=n=>Object.getPrototypeOf(n)===sp;function Py(n,e,t,r=!1){const s={},i=ip();n.propsDefaults=Object.create(null),ap(n,e,s,i);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=r?s:x_(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function Cy(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=n,l=be(s),[c]=n.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=n.vnode.dynamicProps;for(let p=0;p<f.length;p++){let _=f[p];if(sa(n.emitsOptions,_))continue;const b=e[_];if(c)if(Re(i,_))b!==i[_]&&(i[_]=b,h=!0);else{const k=Wt(_);s[k]=Ml(c,l,k,b,n,!1)}else b!==i[_]&&(i[_]=b,h=!0)}}}else{ap(n,e,s,i)&&(h=!0);let f;for(const p in l)(!e||!Re(e,p)&&((f=rr(p))===p||!Re(e,f)))&&(c?t&&(t[p]!==void 0||t[f]!==void 0)&&(s[p]=Ml(c,l,p,void 0,n,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Re(e,p))&&(delete i[p],h=!0)}h&&wn(n.attrs,"set","")}function ap(n,e,t,r){const[s,i]=n.propsOptions;let a=!1,l;if(e)for(let c in e){if(Ks(c))continue;const h=e[c];let f;s&&Re(s,f=Wt(c))?!i||!i.includes(f)?t[f]=h:(l||(l={}))[f]=h:sa(n.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=be(t),h=l||ke;for(let f=0;f<i.length;f++){const p=i[f];t[p]=Ml(s,c,p,h[p],n,!Re(h,p))}}return a}function Ml(n,e,t,r,s,i){const a=n[t];if(a!=null){const l=Re(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ge(c)){const{propsDefaults:h}=s;if(t in h)r=h[t];else{const f=Ii(s);r=h[t]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(t,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===rr(t))&&(r=!0))}return r}const ky=new WeakMap;function lp(n,e,t=!1){const r=t?ky:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,a={},l=[];let c=!1;if(!ge(n)){const f=p=>{c=!0;const[_,b]=lp(p,e,!0);ot(a,_),b&&l.push(...b)};!t&&e.mixins.length&&e.mixins.forEach(f),n.extends&&f(n.extends),n.mixins&&n.mixins.forEach(f)}if(!i&&!c)return Pe(n)&&r.set(n,qr),qr;if(ue(i))for(let f=0;f<i.length;f++){const p=Wt(i[f]);Nh(p)&&(a[p]=ke)}else if(i)for(const f in i){const p=Wt(f);if(Nh(p)){const _=i[f],b=a[p]=ue(_)||ge(_)?{type:_}:ot({},_),k=b.type;let S=!1,C=!0;if(ue(k))for(let $=0;$<k.length;++$){const F=k[$],H=ge(F)&&F.name;if(H==="Boolean"){S=!0;break}else H==="String"&&(C=!1)}else S=ge(k)&&k.name==="Boolean";b[0]=S,b[1]=C,(S||Re(b,"default"))&&l.push(p)}}const h=[a,l];return Pe(n)&&r.set(n,h),h}function Nh(n){return n[0]!=="$"&&!Ks(n)}const Ac=n=>n==="_"||n==="_ctx"||n==="$stable",bc=n=>ue(n)?n.map(tn):[tn(n)],Vy=(n,e,t)=>{if(e._n)return e;const r=z_((...s)=>bc(e(...s)),t);return r._c=!1,r},cp=(n,e,t)=>{const r=n._ctx;for(const s in n){if(Ac(s))continue;const i=n[s];if(ge(i))e[s]=Vy(s,i,r);else if(i!=null){const a=bc(i);e[s]=()=>a}}},up=(n,e)=>{const t=bc(e);n.slots.default=()=>t},hp=(n,e,t)=>{for(const r in e)(t||!Ac(r))&&(n[r]=e[r])},Dy=(n,e,t)=>{const r=n.slots=ip();if(n.vnode.shapeFlag&32){const s=e._;s?(hp(r,e,t),t&&If(r,"_",s,!0)):cp(e,r)}else e&&up(n,e)},Ny=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,a=ke;if(r.shapeFlag&32){const l=e._;l?t&&l===1?i=!1:hp(s,e,t):(i=!e.$stable,cp(e,s)),a=e}else e&&(up(n,e),a={default:1});if(i)for(const l in s)!Ac(l)&&a[l]==null&&delete s[l]},At=Fy;function Oy(n){return xy(n)}function xy(n,e){const t=Xo();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:f,parentNode:p,nextSibling:_,setScopeId:b=rn,insertStaticContent:k}=n,S=(E,R,D,U=null,L=null,x=null,Q=void 0,K=null,j=!!R.dynamicChildren)=>{if(E===R)return;E&&!Ns(E,R)&&(U=W(E),$e(E,L,x,!0),E=null),R.patchFlag===-2&&(j=!1,R.dynamicChildren=null);const{type:M,ref:ee,shapeFlag:Y}=R;switch(M){case ia:C(E,R,D,U);break;case Zn:$(E,R,D,U);break;case tl:E==null&&F(R,D,U,Q);break;case Ke:A(E,R,D,U,L,x,Q,K,j);break;default:Y&1?le(E,R,D,U,L,x,Q,K,j):Y&6?w(E,R,D,U,L,x,Q,K,j):(Y&64||Y&128)&&M.process(E,R,D,U,L,x,Q,K,j,Jt)}ee!=null&&L?Qs(ee,E&&E.ref,x,R||E,!R):ee==null&&E&&E.ref!=null&&Qs(E.ref,null,x,E,!0)},C=(E,R,D,U)=>{if(E==null)r(R.el=l(R.children),D,U);else{const L=R.el=E.el;R.children!==E.children&&h(L,R.children)}},$=(E,R,D,U)=>{E==null?r(R.el=c(R.children||""),D,U):R.el=E.el},F=(E,R,D,U)=>{[E.el,E.anchor]=k(E.children,R,D,U,E.el,E.anchor)},H=({el:E,anchor:R},D,U)=>{let L;for(;E&&E!==R;)L=_(E),r(E,D,U),E=L;r(R,D,U)},q=({el:E,anchor:R})=>{let D;for(;E&&E!==R;)D=_(E),s(E),E=D;s(R)},le=(E,R,D,U,L,x,Q,K,j)=>{if(R.type==="svg"?Q="svg":R.type==="math"&&(Q="mathml"),E==null)oe(R,D,U,L,x,Q,K,j);else{const M=E.el&&E.el._isVueCE?E.el:null;try{M&&M._beginPatch(),y(E,R,L,x,Q,K,j)}finally{M&&M._endPatch()}}},oe=(E,R,D,U,L,x,Q,K)=>{let j,M;const{props:ee,shapeFlag:Y,transition:X,dirs:se}=E;if(j=E.el=a(E.type,x,ee&&ee.is,ee),Y&8?f(j,E.children):Y&16&&m(E.children,j,null,U,L,el(E,x),Q,K),se&&ur(E,null,U,"created"),T(j,E,E.scopeId,Q,U),ee){for(const pe in ee)pe!=="value"&&!Ks(pe)&&i(j,pe,null,ee[pe],x,U);"value"in ee&&i(j,"value",null,ee.value,x),(M=ee.onVnodeBeforeMount)&&Xt(M,U,E)}se&&ur(E,null,U,"beforeMount");const te=My(L,X);te&&X.beforeEnter(j),r(j,R,D),((M=ee&&ee.onVnodeMounted)||te||se)&&At(()=>{try{M&&Xt(M,U,E),te&&X.enter(j),se&&ur(E,null,U,"mounted")}finally{}},L)},T=(E,R,D,U,L)=>{if(D&&b(E,D),U)for(let x=0;x<U.length;x++)b(E,U[x]);if(L){let x=L.subTree;if(R===x||pp(x.type)&&(x.ssContent===R||x.ssFallback===R)){const Q=L.vnode;T(E,Q,Q.scopeId,Q.slotScopeIds,L.parent)}}},m=(E,R,D,U,L,x,Q,K,j=0)=>{for(let M=j;M<E.length;M++){const ee=E[M]=K?En(E[M]):tn(E[M]);S(null,ee,R,D,U,L,x,Q,K)}},y=(E,R,D,U,L,x,Q)=>{const K=R.el=E.el;let{patchFlag:j,dynamicChildren:M,dirs:ee}=R;j|=E.patchFlag&16;const Y=E.props||ke,X=R.props||ke;let se;if(D&&hr(D,!1),(se=X.onVnodeBeforeUpdate)&&Xt(se,D,R,E),ee&&ur(R,E,D,"beforeUpdate"),D&&hr(D,!0),M&&(!E.dynamicChildren||E.dynamicChildren.length!==M.length)&&(j=0,Q=!1,M=null),(Y.innerHTML&&X.innerHTML==null||Y.textContent&&X.textContent==null)&&f(K,""),M?I(E.dynamicChildren,M,K,D,U,el(R,L),x):Q||_e(E,R,K,null,D,U,el(R,L),x,!1),j>0){if(j&16)v(K,Y,X,D,L);else if(j&2&&Y.class!==X.class&&i(K,"class",null,X.class,L),j&4&&i(K,"style",Y.style,X.style,L),j&8){const te=R.dynamicProps;for(let pe=0;pe<te.length;pe++){const we=te[pe],xe=Y[we],We=X[we];(We!==xe||we==="value")&&i(K,we,xe,We,L,D)}}j&1&&E.children!==R.children&&f(K,R.children)}else!Q&&M==null&&v(K,Y,X,D,L);((se=X.onVnodeUpdated)||ee)&&At(()=>{se&&Xt(se,D,R,E),ee&&ur(R,E,D,"updated")},U)},I=(E,R,D,U,L,x,Q)=>{for(let K=0;K<R.length;K++){const j=E[K],M=R[K],ee=j.el&&(j.type===Ke||!Ns(j,M)||j.shapeFlag&198)?p(j.el):D;S(j,M,ee,null,U,L,x,Q,!0)}},v=(E,R,D,U,L)=>{if(R!==D){if(R!==ke)for(const x in R)!Ks(x)&&!(x in D)&&i(E,x,R[x],null,L,U);for(const x in D){if(Ks(x))continue;const Q=D[x],K=R[x];Q!==K&&x!=="value"&&i(E,x,K,Q,L,U)}"value"in D&&i(E,"value",R.value,D.value,L)}},A=(E,R,D,U,L,x,Q,K,j)=>{const M=R.el=E?E.el:l(""),ee=R.anchor=E?E.anchor:l("");let{patchFlag:Y,dynamicChildren:X,slotScopeIds:se}=R;se&&(K=K?K.concat(se):se),E==null?(r(M,D,U),r(ee,D,U),m(R.children||[],D,ee,L,x,Q,K,j)):Y>0&&Y&64&&X&&E.dynamicChildren&&E.dynamicChildren.length===X.length?(I(E.dynamicChildren,X,D,L,x,Q,K),(R.key!=null||L&&R===L.subTree)&&Rc(E,R,!0)):_e(E,R,D,ee,L,x,Q,K,j)},w=(E,R,D,U,L,x,Q,K,j)=>{R.slotScopeIds=K,E==null?R.shapeFlag&512?L.ctx.activate(R,D,U,Q,j):Ge(R,D,U,L,x,Q,j):lt(E,R,j)},Ge=(E,R,D,U,L,x,Q)=>{const K=E.component=Hy(E,U,L);if(Jf(E)&&(K.ctx.renderer=Jt),zy(K,!1,Q),K.asyncDep){if(L&&L.registerDep(K,Fe,Q),!E.el){const j=K.subTree=Je(Zn);$(null,j,R,D),E.placeholder=j.el}}else Fe(K,E,R,D,L,x,Q)},lt=(E,R,D)=>{const U=R.component=E.component;if(Ry(E,R,D))if(U.asyncDep&&!U.asyncResolved){me(U,R,D);return}else U.next=R,U.update();else R.el=E.el,U.vnode=R},Fe=(E,R,D,U,L,x,Q)=>{const K=()=>{if(E.isMounted){let{next:Y,bu:X,u:se,parent:te,vnode:pe}=E;{const ht=dp(E);if(ht){Y&&(Y.el=pe.el,me(E,Y,Q)),ht.asyncDep.then(()=>{At(()=>{E.isUnmounted||M()},L)});return}}let we=Y,xe;hr(E,!1),Y?(Y.el=pe.el,me(E,Y,Q)):Y=pe,X&&ho(X),(xe=Y.props&&Y.props.onVnodeBeforeUpdate)&&Xt(xe,te,Y,pe),hr(E,!0);const We=Vh(E),xt=E.subTree;E.subTree=We,S(xt,We,p(xt.el),W(xt),E,L,x),Y.el=We.el,we===null&&Sy(E,We.el),se&&At(se,L),(xe=Y.props&&Y.props.onVnodeUpdated)&&At(()=>Xt(xe,te,Y,pe),L)}else{let Y;const{el:X,props:se}=R,{bm:te,m:pe,parent:we,root:xe,type:We}=E,xt=Ys(R);hr(E,!1),te&&ho(te),!xt&&(Y=se&&se.onVnodeBeforeMount)&&Xt(Y,we,R),hr(E,!0);{xe.ce&&xe.ce._hasShadowRoot()&&xe.ce._injectChildStyle(We,E.parent?E.parent.type:void 0);const ht=E.subTree=Vh(E);S(null,ht,D,U,E,L,x),R.el=ht.el}if(pe&&At(pe,L),!xt&&(Y=se&&se.onVnodeMounted)){const ht=R;At(()=>Xt(Y,we,ht),L)}(R.shapeFlag&256||we&&Ys(we.vnode)&&we.vnode.shapeFlag&256)&&E.a&&At(E.a,L),E.isMounted=!0,R=D=U=null}};E.scope.on();const j=E.effect=new Sf(K);E.scope.off();const M=E.update=j.run.bind(j),ee=E.job=j.runIfDirty.bind(j);ee.i=E,ee.id=E.uid,j.scheduler=()=>wc(ee),hr(E,!0),M()},me=(E,R,D)=>{R.component=E;const U=E.vnode.props;E.vnode=R,E.next=null,Cy(E,R.props,U,D),Ny(E,R.children,D),un(),wh(E),hn()},_e=(E,R,D,U,L,x,Q,K,j=!1)=>{const M=E&&E.children,ee=E?E.shapeFlag:0,Y=R.children,{patchFlag:X,shapeFlag:se}=R;if(X>0){if(X&128){pn(M,Y,D,U,L,x,Q,K,j);return}else if(X&256){ct(M,Y,D,U,L,x,Q,K,j);return}}se&8?(ee&16&&ae(M,L,x),Y!==M&&f(D,Y)):ee&16?se&16?pn(M,Y,D,U,L,x,Q,K,j):ae(M,L,x,!0):(ee&8&&f(D,""),se&16&&m(Y,D,U,L,x,Q,K,j))},ct=(E,R,D,U,L,x,Q,K,j)=>{E=E||qr,R=R||qr;const M=E.length,ee=R.length,Y=Math.min(M,ee);let X;for(X=0;X<Y;X++){const se=R[X]=j?En(R[X]):tn(R[X]);S(E[X],se,D,null,L,x,Q,K,j)}M>ee?ae(E,L,x,!0,!1,Y):m(R,D,U,L,x,Q,K,j,Y)},pn=(E,R,D,U,L,x,Q,K,j)=>{let M=0;const ee=R.length;let Y=E.length-1,X=ee-1;for(;M<=Y&&M<=X;){const se=E[M],te=R[M]=j?En(R[M]):tn(R[M]);if(Ns(se,te))S(se,te,D,null,L,x,Q,K,j);else break;M++}for(;M<=Y&&M<=X;){const se=E[Y],te=R[X]=j?En(R[X]):tn(R[X]);if(Ns(se,te))S(se,te,D,null,L,x,Q,K,j);else break;Y--,X--}if(M>Y){if(M<=X){const se=X+1,te=se<ee?R[se].el:U;for(;M<=X;)S(null,R[M]=j?En(R[M]):tn(R[M]),D,te,L,x,Q,K,j),M++}}else if(M>X)for(;M<=Y;)$e(E[M],L,x,!0),M++;else{const se=M,te=M,pe=new Map;for(M=te;M<=X;M++){const et=R[M]=j?En(R[M]):tn(R[M]);et.key!=null&&pe.set(et.key,M)}let we,xe=0;const We=X-te+1;let xt=!1,ht=0;const Mn=new Array(We);for(M=0;M<We;M++)Mn[M]=0;for(M=se;M<=Y;M++){const et=E[M];if(xe>=We){$e(et,L,x,!0);continue}let Mt;if(et.key!=null)Mt=pe.get(et.key);else for(we=te;we<=X;we++)if(Mn[we-te]===0&&Ns(et,R[we])){Mt=we;break}Mt===void 0?$e(et,L,x,!0):(Mn[Mt-te]=M+1,Mt>=ht?ht=Mt:xt=!0,S(et,R[Mt],D,null,L,x,Q,K,j),xe++)}const vs=xt?Ly(Mn):qr;for(we=vs.length-1,M=We-1;M>=0;M--){const et=te+M,Mt=R[et],Ui=R[et+1],Cr=et+1<ee?Ui.el||fp(Ui):U;Mn[M]===0?S(null,Mt,D,Cr,L,x,Q,K,j):xt&&(we<0||M!==vs[we]?Ut(Mt,D,Cr,2):we--)}}},Ut=(E,R,D,U,L=null)=>{const{el:x,type:Q,transition:K,children:j,shapeFlag:M}=E;if(M&6){Ut(E.component.subTree,R,D,U);return}if(M&128){E.suspense.move(R,D,U);return}if(M&64){Q.move(E,R,D,Jt);return}if(Q===Ke){r(x,R,D);for(let Y=0;Y<j.length;Y++)Ut(j[Y],R,D,U);r(E.anchor,R,D);return}if(Q===tl){H(E,R,D);return}if(U!==2&&M&1&&K)if(U===0)K.persisted&&!x[Xa]?r(x,R,D):(K.beforeEnter(x),r(x,R,D),At(()=>K.enter(x),L));else{const{leave:Y,delayLeave:X,afterLeave:se}=K,te=()=>{E.ctx.isUnmounted?s(x):r(x,R,D)},pe=()=>{const we=x._isLeaving||!!x[Xa];x._isLeaving&&x[Xa](!0),K.persisted&&!we?te():Y(x,()=>{te(),se&&se()})};X?X(x,te,pe):pe()}else r(x,R,D)},$e=(E,R,D,U=!1,L=!1)=>{const{type:x,props:Q,ref:K,children:j,dynamicChildren:M,shapeFlag:ee,patchFlag:Y,dirs:X,cacheIndex:se,memo:te}=E;if(Y===-2&&(L=!1),K!=null&&(un(),Qs(K,null,D,E,!0),hn()),se!=null&&(R.renderCache[se]=void 0),ee&256){R.ctx.deactivate(E);return}const pe=ee&1&&X,we=!Ys(E);let xe;if(we&&(xe=Q&&Q.onVnodeBeforeUnmount)&&Xt(xe,R,E),ee&6)Yt(E.component,D,U);else{if(ee&128){E.suspense.unmount(D,U);return}pe&&ur(E,null,R,"beforeUnmount"),ee&64?E.type.remove(E,R,D,Jt,U):M&&!M.hasOnce&&(x!==Ke||Y>0&&Y&64)?ae(M,R,D,!1,!0):(x===Ke&&Y&384||!L&&ee&16)&&ae(j,R,D),U&&je(E)}const We=te!=null&&se==null;(we&&(xe=Q&&Q.onVnodeUnmounted)||pe||We)&&At(()=>{xe&&Xt(xe,R,E),pe&&ur(E,null,R,"unmounted"),We&&(E.el=null)},D)},je=E=>{const{type:R,el:D,anchor:U,transition:L}=E;if(R===Ke){_s(D,U);return}if(R===tl){q(E);return}const x=()=>{s(D),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(E.shapeFlag&1&&L&&!L.persisted){const{leave:Q,delayLeave:K}=L,j=()=>Q(D,x);K?K(E.el,x,j):j()}else x()},_s=(E,R)=>{let D;for(;E!==R;)D=_(E),s(E),E=D;s(R)},Yt=(E,R,D)=>{const{bum:U,scope:L,job:x,subTree:Q,um:K,m:j,a:M}=E;Oh(j),Oh(M),U&&ho(U),L.stop(),x&&(x.flags|=8,$e(Q,E,R,D)),K&&At(K,R),At(()=>{E.isUnmounted=!0},R)},ae=(E,R,D,U=!1,L=!1,x=0)=>{for(let Q=x;Q<E.length;Q++)$e(E[Q],R,D,U,L)},W=E=>{if(E.shapeFlag&6)return W(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const R=_(E.anchor||E.el),D=R&&R[Qf];return D?_(D):R};let re=!1;const ut=(E,R,D)=>{let U;E==null?R._vnode&&($e(R._vnode,null,null,!0),U=R._vnode.component):S(R._vnode||null,E,R,null,null,null,D),R._vnode=E,re||(re=!0,wh(U),Wf(),re=!1)},Jt={p:S,um:$e,m:Ut,r:je,mt:Ge,mc:m,pc:_e,pbc:I,n:W,o:n};return{render:ut,hydrate:void 0,createApp:Ey(ut)}}function el({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function hr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function My(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Rc(n,e,t=!1){const r=n.children,s=e.children;if(ue(r)&&ue(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=En(s[i]),l.el=a.el),!t&&l.patchFlag!==-2&&Rc(a,l)),l.type===ia&&(l.patchFlag===-1&&(l=s[i]=En(l)),l.el=a.el),l.type===Zn&&!l.el&&(l.el=a.el)}}function Ly(n){const e=n.slice(),t=[0];let r,s,i,a,l;const c=n.length;for(r=0;r<c;r++){const h=n[r];if(h!==0){if(s=t[t.length-1],n[s]<h){e[r]=s,t.push(r);continue}for(i=0,a=t.length-1;i<a;)l=i+a>>1,n[t[l]]<h?i=l+1:a=l;h<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=e[a];return t}function dp(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:dp(e)}function Oh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function fp(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?fp(e.subTree):null}const pp=n=>n.__isSuspense;function Fy(n,e){e&&e.pendingBranch?ue(n)?e.effects.push(...n):e.effects.push(n):K_(n)}const Ke=Symbol.for("v-fgt"),ia=Symbol.for("v-txt"),Zn=Symbol.for("v-cmt"),tl=Symbol.for("v-stc"),Xs=[];let Dt=null;function ne(n=!1){Xs.push(Dt=n?null:[])}function Uy(){Xs.pop(),Dt=Xs[Xs.length-1]||null}let ai=1;function xh(n,e=!1){ai+=n,n<0&&Dt&&e&&(Dt.hasOnce=!0)}function gp(n){return n.dynamicChildren=ai>0?Dt||qr:null,Uy(),ai>0&&Dt&&Dt.push(n),n}function he(n,e,t,r,s,i){return gp(O(n,e,t,r,s,i,!0))}function zr(n,e,t,r,s){return gp(Je(n,e,t,r,s,!0))}function mp(n){return n?n.__v_isVNode===!0:!1}function Ns(n,e){return n.type===e.type&&n.key===e.key}const _p=({key:n})=>n??null,po=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Me(n)||vt(n)||ge(n)?{i:Lt,r:n,k:e,f:!!t}:n:null);function O(n,e=null,t=null,r=0,s=null,i=n===Ke?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&_p(e),ref:e&&po(e),scopeId:Kf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Lt};return l?(Co(c,t),i&128&&n.normalize(c)):t&&(c.shapeFlag|=Me(t)?8:16),ai>0&&!a&&Dt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Dt.push(c),c}const Je=By;function By(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===dy)&&(n=Zn),mp(n)){const l=es(n,e,!0);return t&&Co(l,t),ai>0&&!i&&Dt&&(l.shapeFlag&6?Dt[Dt.indexOf(n)]=l:Dt.push(l)),l.patchFlag=-2,l}if(Jy(n)&&(n=n.__vccOpts),e){e=$y(e);let{class:l,style:c}=e;l&&!Me(l)&&(e.class=Ze(l)),Pe(c)&&(Ec(c)&&!ue(c)&&(c=ot({},c)),e.style=Zo(c))}const a=Me(n)?1:pp(n)?128:J_(n)?64:Pe(n)?4:ge(n)?2:0;return O(n,e,t,r,s,a,i,!0)}function $y(n){return n?Ec(n)||op(n)?ot({},n):n:null}function es(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=n,h=e?jy(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:n.type,props:h,key:h&&_p(h),ref:e&&e.ref?t&&i?ue(i)?i.concat(po(e)):[i,po(e)]:po(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ke?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&es(n.ssContent),ssFallback:n.ssFallback&&es(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&r&&Tc(f,c.clone(f)),f}function jt(n=" ",e=0){return Je(ia,null,n,e)}function Qe(n="",e=!1){return e?(ne(),zr(Zn,null,n)):Je(Zn,null,n)}function tn(n){return n==null||typeof n=="boolean"?Je(Zn):ue(n)?Je(Ke,null,n.slice()):mp(n)?En(n):Je(ia,null,String(n))}function En(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:es(n)}function Co(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(ue(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Co(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!op(e)?e._ctx=Lt:s===3&&Lt&&(Lt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(ge(e)){if(r&65){Co(n,{default:e});return}e={default:e,_ctx:Lt},t=32}else e=String(e),r&64?(t=16,e=[jt(e)]):t=8;n.children=e,n.shapeFlag|=t}function jy(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ze([e.class,r.class]));else if(s==="style")e.style=Zo([e.style,r.style]);else if(Qo(s)){const i=e[s],a=r[s];a&&i!==a&&!(ue(i)&&i.includes(a))?e[s]=i?[].concat(i,a):a:a==null&&i==null&&!Yo(s)&&(e[s]=a)}else s!==""&&(e[s]=r[s])}return e}function Xt(n,e,t,r=null){zt(n,e,7,[t,r])}const qy=tp();let Wy=0;function Hy(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||qy,i={uid:Wy++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new m_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lp(r,s),emitsOptions:np(r,s),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:r.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ty.bind(null,i),n.ce&&n.ce(i),i}let Rt=null;const Ky=()=>Rt||Lt;let ko,Ll;{const n=Xo(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};ko=e("__VUE_INSTANCE_SETTERS__",t=>Rt=t),Ll=e("__VUE_SSR_SETTERS__",t=>li=t)}const Ii=n=>{const e=Rt;return ko(n),n.scope.on(),()=>{n.scope.off(),ko(e)}},Mh=()=>{Rt&&Rt.scope.off(),ko(null)};function yp(n){return n.vnode.shapeFlag&4}let li=!1;function zy(n,e=!1,t=!1){e&&Ll(e);const{props:r,children:s}=n.vnode,i=yp(n);Py(n,r,i,e),Dy(n,s,t||e);const a=i?Gy(n,e):void 0;return e&&Ll(!1),a}function Gy(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,fy);const{setup:r}=t;if(r){un();const s=n.setupContext=r.length>1?Yy(n):null,i=Ii(n),a=wi(r,n,0,[n.props,s]),l=vf(a);if(hn(),i(),(l||n.sp)&&!Ys(n)&&Yf(n),l){if(a.then(Mh,Mh),e)return a.then(c=>{Lh(n,c)}).catch(c=>{ta(c,n,0)});n.asyncDep=a}else Lh(n,a)}else vp(n)}function Lh(n,e,t){ge(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Pe(e)&&(n.setupState=$f(e)),vp(n)}function vp(n,e,t){const r=n.type;n.render||(n.render=r.render||rn);{const s=Ii(n);un();try{py(n)}finally{hn(),s()}}}const Qy={get(n,e){return _t(n,"get",""),n[e]}};function Yy(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Qy),slots:n.slots,emit:n.emit,expose:e}}function oa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy($f(M_(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Js)return Js[t](n)},has(e,t){return t in e||t in Js}})):n.proxy}function Jy(n){return ge(n)&&"__vccOpts"in n}const $r=(n,e)=>$_(n,e,li),Xy="3.5.39";/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Fl;const Fh=typeof window<"u"&&window.trustedTypes;if(Fh)try{Fl=Fh.createPolicy("vue",{createHTML:n=>n})}catch{}const Ep=Fl?n=>Fl.createHTML(n):n=>n,Zy="http://www.w3.org/2000/svg",ev="http://www.w3.org/1998/Math/MathML",vn=typeof document<"u"?document:null,Uh=vn&&vn.createElement("template"),tv={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?vn.createElementNS(Zy,n):e==="mathml"?vn.createElementNS(ev,n):t?vn.createElement(n,{is:t}):vn.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>vn.createTextNode(n),createComment:n=>vn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>vn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const a=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{Uh.innerHTML=Ep(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const l=Uh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},nv=Symbol("_vtc");function rv(n,e,t){const r=n[nv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Vo=Symbol("_vod"),wp=Symbol("_vsh"),nl={name:"show",beforeMount(n,{value:e},{transition:t}){n[Vo]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Os(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:r}){!e!=!t&&(r?e?(r.beforeEnter(n),Os(n,!0),r.enter(n)):r.leave(n,()=>{Os(n,!1)}):Os(n,e))},beforeUnmount(n,{value:e}){Os(n,e)}};function Os(n,e){n.style.display=e?n[Vo]:"none",n[wp]=!e}const sv=Symbol(""),iv=/(?:^|;)\s*display\s*:/;function ov(n,e,t){const r=n.style,s=Me(t);let i=!1;if(t&&!s){if(e)if(Me(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();t[l]==null&&Us(r,l,"")}else for(const a in e)t[a]==null&&Us(r,a,"");for(const a in t){a==="display"&&(i=!0);const l=t[a];l!=null?lv(n,a,!Me(e)&&e?e[a]:void 0,l)||Us(r,a,l):Us(r,a,"")}}else if(s){if(e!==t){const a=r[sv];a&&(t+=";"+a),r.cssText=t,i=iv.test(t)}}else e&&n.removeAttribute("style");Vo in n&&(n[Vo]=i?r.display:"",n[wp]&&(r.display="none"))}const Bh=/\s*!important$/;function Us(n,e,t){if(ue(t))t.forEach(r=>Us(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=av(n,e);Bh.test(t)?n.setProperty(rr(r),t.replace(Bh,""),"important"):n[r]=t}}const $h=["Webkit","Moz","ms"],rl={};function av(n,e){const t=rl[e];if(t)return t;let r=Wt(e);if(r!=="filter"&&r in n)return rl[e]=r;r=Tf(r);for(let s=0;s<$h.length;s++){const i=$h[s]+r;if(i in n)return rl[e]=i}return e}function lv(n,e,t,r){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Me(r)&&t===r}const jh="http://www.w3.org/1999/xlink";function qh(n,e,t,r,s,i=p_(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(jh,e.slice(6,e.length)):n.setAttributeNS(jh,e,t):t==null||i&&!Af(t)?n.removeAttribute(e):n.setAttribute(e,i?"":cn(t)?String(t):t)}function Wh(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Ep(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(l!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=Af(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function Mr(n,e,t,r){n.addEventListener(e,t,r)}function cv(n,e,t,r){n.removeEventListener(e,t,r)}const Hh=Symbol("_vei");function uv(n,e,t,r,s=null){const i=n[Hh]||(n[Hh]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=fv(e);if(r){const h=i[e]=mv(r,s);Mr(n,l,h,c)}else a&&(cv(n,l,a,c),i[e]=void 0)}}const hv=/(Once|Passive|Capture)$/,dv=/^on:?(?:Once|Passive|Capture)$/;function fv(n){let e,t;for(;(t=n.match(hv))&&!dv.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):rr(n.slice(2)),e]}let sl=0;const pv=Promise.resolve(),gv=()=>sl||(pv.then(()=>sl=0),sl=Date.now());function mv(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;const s=t.value;if(ue(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const a=s.slice(),l=[r];for(let c=0;c<a.length&&!r._stopped;c++){const h=a[c];h&&zt(h,e,5,l)}}else zt(s,e,5,[r])};return t.value=n,t.attached=gv(),t}const Kh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,_v=(n,e,t,r,s,i)=>{const a=s==="svg";e==="class"?rv(n,r,a):e==="style"?ov(n,t,r):Qo(e)?Yo(e)||uv(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):yv(n,e,r,a))?(Wh(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&qh(n,e,r,a,i,e!=="value")):n._isVueCE&&(vv(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Me(r)))?Wh(n,Wt(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),qh(n,e,r,a))};function yv(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&Kh(e)&&ge(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Kh(e)&&Me(t)?!1:e in n}function vv(n,e){const t=n._def.props;if(!t)return!1;const r=Wt(e);return Array.isArray(t)?t.some(s=>Wt(s)===r):Object.keys(t).some(s=>Wt(s)===r)}const zh=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ue(e)?t=>ho(e,t):e};function Ev(n){n.target.composing=!0}function Gh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const il=Symbol("_assign");function Qh(n,e,t){return e&&(n=n.trim()),t&&(n=hc(n)),n}const qt={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[il]=zh(s);const i=r||s.props&&s.props.type==="number";Mr(n,e?"change":"input",a=>{a.target.composing||n[il](Qh(n.value,t,i))}),(t||i)&&Mr(n,"change",()=>{n.value=Qh(n.value,t,i)}),e||(Mr(n,"compositionstart",Ev),Mr(n,"compositionend",Gh),Mr(n,"change",Gh))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},a){if(n[il]=zh(a),n.composing)return;const l=(i||n.type==="number")&&!/^0\d/.test(n.value)?hc(n.value):n.value,c=e??"";if(l===c)return;const h=n.getRootNode();(h instanceof Document||h instanceof ShadowRoot)&&h.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===c)||(n.value=c)}},wv=["ctrl","shift","alt","meta"],Tv={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>wv.some(t=>n[`${t}Key`]&&!e.includes(t))},Zs=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),r=e.join(".");return t[r]||(t[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const l=Tv[e[a]];if(l&&l(s,e))return}return n(s,...i)})},Iv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ol=(n,e)=>{const t=n._withKeys||(n._withKeys={}),r=e.join(".");return t[r]||(t[r]=s=>{if(!("key"in s))return;const i=rr(s.key);if(e.some(a=>a===i||Iv[a]===i))return n(s)})},Av=ot({patchProp:_v},tv);let Yh;function bv(){return Yh||(Yh=Oy(Av))}const Rv=(...n)=>{const e=bv().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=Pv(r);if(!s)return;const i=e._component;!ge(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,Sv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function Sv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Pv(n){return Me(n)?document.querySelector(n):n}var Jh={};/**
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
 */const Tp=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Cv=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Ip={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,c=s+2<n.length,h=c?n[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let _=(l&15)<<2|h>>6,b=h&63;c||(b=64,a||(_=64)),r.push(t[f],t[p],t[_],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Tp(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Cv(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new kv;const _=i<<2|l>>4;if(r.push(_),h!==64){const b=l<<4&240|h>>2;if(r.push(b),p!==64){const k=h<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class kv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vv=function(n){const e=Tp(n);return Ip.encodeByteArray(e,!0)},Do=function(n){return Vv(n).replace(/\./g,"")},Ap=function(n){try{return Ip.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Dv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Nv=()=>Dv().__FIREBASE_DEFAULTS__,Ov=()=>{if(typeof process>"u"||typeof Jh>"u")return;const n=Jh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},xv=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ap(n[1]);return e&&JSON.parse(e)},aa=()=>{try{return Nv()||Ov()||xv()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},bp=n=>{var e,t;return(t=(e=aa())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Mv=n=>{const e=bp(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Rp=()=>{var n;return(n=aa())===null||n===void 0?void 0:n.config},Sp=n=>{var e;return(e=aa())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Lv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Fv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Do(JSON.stringify(t)),Do(JSON.stringify(a)),""].join(".")}/**
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
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Uv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function Bv(){var n;const e=(n=aa())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $v(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function jv(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function qv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wv(){const n=wt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Hv(){return!Bv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Kv(){try{return typeof indexedDB=="object"}catch{return!1}}function zv(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Gv="FirebaseError";class xn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Gv,Object.setPrototypeOf(this,xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ai.prototype.create)}}class Ai{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Qv(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new xn(s,l,r)}}function Qv(n,e){return n.replace(Yv,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Yv=/\{\$([^}]+)}/g;function Jv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function No(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Xh(i)&&Xh(a)){if(!No(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Xh(n){return n!==null&&typeof n=="object"}/**
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
 */function bi(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Bs(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function $s(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Xv(n,e){const t=new Zv(n,e);return t.subscribe.bind(t)}class Zv{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");eE(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=al),s.error===void 0&&(s.error=al),s.complete===void 0&&(s.complete=al);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eE(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function al(){}/**
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
 */function Be(n){return n&&n._delegate?n._delegate:n}class Er{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const fr="[DEFAULT]";/**
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
 */class tE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Lv;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rE(e))try{this.getOrInitializeService({instanceIdentifier:fr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fr){return this.instances.has(e)}getOptions(e=fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nE(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=fr){return this.component?this.component.multipleInstances?e:fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nE(n){return n===fr?void 0:n}function rE(n){return n.instantiationMode==="EAGER"}/**
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
 */class sE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new tE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ve;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ve||(ve={}));const iE={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},oE=ve.INFO,aE={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},lE=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=aE[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sc{constructor(e){this.name=e,this._logLevel=oE,this._logHandler=lE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?iE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const cE=(n,e)=>e.some(t=>n instanceof t);let Zh,ed;function uE(){return Zh||(Zh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hE(){return ed||(ed=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pp=new WeakMap,Ul=new WeakMap,Cp=new WeakMap,ll=new WeakMap,Pc=new WeakMap;function dE(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Gn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Pp.set(t,n)}).catch(()=>{}),Pc.set(e,n),e}function fE(n){if(Ul.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Ul.set(n,e)}let Bl={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ul.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Cp.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Gn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function pE(n){Bl=n(Bl)}function gE(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(cl(this),e,...t);return Cp.set(r,e.sort?e.sort():[e]),Gn(r)}:hE().includes(n)?function(...e){return n.apply(cl(this),e),Gn(Pp.get(this))}:function(...e){return Gn(n.apply(cl(this),e))}}function mE(n){return typeof n=="function"?gE(n):(n instanceof IDBTransaction&&fE(n),cE(n,uE())?new Proxy(n,Bl):n)}function Gn(n){if(n instanceof IDBRequest)return dE(n);if(ll.has(n))return ll.get(n);const e=mE(n);return e!==n&&(ll.set(n,e),Pc.set(e,n)),e}const cl=n=>Pc.get(n);function _E(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=Gn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Gn(a.result),c.oldVersion,c.newVersion,Gn(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const yE=["get","getKey","getAll","getAllKeys","count"],vE=["put","add","delete","clear"],ul=new Map;function td(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ul.get(e))return ul.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=vE.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||yE.includes(t)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),s&&c.done]))[0]};return ul.set(e,i),i}pE(n=>({...n,get:(e,t,r)=>td(e,t)||n.get(e,t,r),has:(e,t)=>!!td(e,t)||n.has(e,t)}));/**
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
 */class EE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(wE(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function wE(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $l="@firebase/app",nd="0.10.13";/**
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
 */const Cn=new Sc("@firebase/app"),TE="@firebase/app-compat",IE="@firebase/analytics-compat",AE="@firebase/analytics",bE="@firebase/app-check-compat",RE="@firebase/app-check",SE="@firebase/auth",PE="@firebase/auth-compat",CE="@firebase/database",kE="@firebase/data-connect",VE="@firebase/database-compat",DE="@firebase/functions",NE="@firebase/functions-compat",OE="@firebase/installations",xE="@firebase/installations-compat",ME="@firebase/messaging",LE="@firebase/messaging-compat",FE="@firebase/performance",UE="@firebase/performance-compat",BE="@firebase/remote-config",$E="@firebase/remote-config-compat",jE="@firebase/storage",qE="@firebase/storage-compat",WE="@firebase/firestore",HE="@firebase/vertexai-preview",KE="@firebase/firestore-compat",zE="firebase",GE="10.14.1";/**
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
 */const jl="[DEFAULT]",QE={[$l]:"fire-core",[TE]:"fire-core-compat",[AE]:"fire-analytics",[IE]:"fire-analytics-compat",[RE]:"fire-app-check",[bE]:"fire-app-check-compat",[SE]:"fire-auth",[PE]:"fire-auth-compat",[CE]:"fire-rtdb",[kE]:"fire-data-connect",[VE]:"fire-rtdb-compat",[DE]:"fire-fn",[NE]:"fire-fn-compat",[OE]:"fire-iid",[xE]:"fire-iid-compat",[ME]:"fire-fcm",[LE]:"fire-fcm-compat",[FE]:"fire-perf",[UE]:"fire-perf-compat",[BE]:"fire-rc",[$E]:"fire-rc-compat",[jE]:"fire-gcs",[qE]:"fire-gcs-compat",[WE]:"fire-fst",[KE]:"fire-fst-compat",[HE]:"fire-vertex","fire-js":"fire-js",[zE]:"fire-js-all"};/**
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
 */const Oo=new Map,YE=new Map,ql=new Map;function rd(n,e){try{n.container.addComponent(e)}catch(t){Cn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ts(n){const e=n.name;if(ql.has(e))return Cn.debug(`There were multiple attempts to register component ${e}.`),!1;ql.set(e,n);for(const t of Oo.values())rd(t,n);for(const t of YE.values())rd(t,n);return!0}function Cc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function In(n){return n.settings!==void 0}/**
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
 */const JE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qn=new Ai("app","Firebase",JE);/**
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
 */class XE{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Er("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qn.create("app-deleted",{appName:this._name})}}/**
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
 */const hs=GE;function kp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:jl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Qn.create("bad-app-name",{appName:String(s)});if(t||(t=Rp()),!t)throw Qn.create("no-options");const i=Oo.get(s);if(i){if(No(t,i.options)&&No(r,i.config))return i;throw Qn.create("duplicate-app",{appName:s})}const a=new sE(s);for(const c of ql.values())a.addComponent(c);const l=new XE(t,r,a);return Oo.set(s,l),l}function Vp(n=jl){const e=Oo.get(n);if(!e&&n===jl&&Rp())return kp();if(!e)throw Qn.create("no-app",{appName:n});return e}function Yn(n,e,t){var r;let s=(r=QE[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cn.warn(l.join(" "));return}ts(new Er(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ZE="firebase-heartbeat-database",ew=1,ci="firebase-heartbeat-store";let hl=null;function Dp(){return hl||(hl=_E(ZE,ew,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ci)}catch(t){console.warn(t)}}}}).catch(n=>{throw Qn.create("idb-open",{originalErrorMessage:n.message})})),hl}async function tw(n){try{const t=(await Dp()).transaction(ci),r=await t.objectStore(ci).get(Np(n));return await t.done,r}catch(e){if(e instanceof xn)Cn.warn(e.message);else{const t=Qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cn.warn(t.message)}}}async function sd(n,e){try{const r=(await Dp()).transaction(ci,"readwrite");await r.objectStore(ci).put(e,Np(n)),await r.done}catch(t){if(t instanceof xn)Cn.warn(t.message);else{const r=Qn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Cn.warn(r.message)}}}function Np(n){return`${n.name}!${n.options.appId}`}/**
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
 */const nw=1024,rw=30*24*60*60*1e3;class sw{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ow(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=id();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=rw}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Cn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=id(),{heartbeatsToSend:r,unsentEntries:s}=iw(this._heartbeatsCache.heartbeats),i=Do(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Cn.warn(t),""}}}function id(){return new Date().toISOString().substring(0,10)}function iw(n,e=nw){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),od(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),od(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class ow{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kv()?zv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await tw(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return sd(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return sd(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function od(n){return Do(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function aw(n){ts(new Er("platform-logger",e=>new EE(e),"PRIVATE")),ts(new Er("heartbeat",e=>new sw(e),"PRIVATE")),Yn($l,nd,n),Yn($l,nd,"esm2017"),Yn("fire-js","")}aw("");var ad=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vr,Op;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,m){function y(){}y.prototype=m.prototype,T.D=m.prototype,T.prototype=new y,T.prototype.constructor=T,T.C=function(I,v,A){for(var w=Array(arguments.length-2),Ge=2;Ge<arguments.length;Ge++)w[Ge-2]=arguments[Ge];return m.prototype[v].apply(I,w)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,m,y){y||(y=0);var I=Array(16);if(typeof m=="string")for(var v=0;16>v;++v)I[v]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(v=0;16>v;++v)I[v]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=T.g[0],y=T.g[1],v=T.g[2];var A=T.g[3],w=m+(A^y&(v^A))+I[0]+3614090360&4294967295;m=y+(w<<7&4294967295|w>>>25),w=A+(v^m&(y^v))+I[1]+3905402710&4294967295,A=m+(w<<12&4294967295|w>>>20),w=v+(y^A&(m^y))+I[2]+606105819&4294967295,v=A+(w<<17&4294967295|w>>>15),w=y+(m^v&(A^m))+I[3]+3250441966&4294967295,y=v+(w<<22&4294967295|w>>>10),w=m+(A^y&(v^A))+I[4]+4118548399&4294967295,m=y+(w<<7&4294967295|w>>>25),w=A+(v^m&(y^v))+I[5]+1200080426&4294967295,A=m+(w<<12&4294967295|w>>>20),w=v+(y^A&(m^y))+I[6]+2821735955&4294967295,v=A+(w<<17&4294967295|w>>>15),w=y+(m^v&(A^m))+I[7]+4249261313&4294967295,y=v+(w<<22&4294967295|w>>>10),w=m+(A^y&(v^A))+I[8]+1770035416&4294967295,m=y+(w<<7&4294967295|w>>>25),w=A+(v^m&(y^v))+I[9]+2336552879&4294967295,A=m+(w<<12&4294967295|w>>>20),w=v+(y^A&(m^y))+I[10]+4294925233&4294967295,v=A+(w<<17&4294967295|w>>>15),w=y+(m^v&(A^m))+I[11]+2304563134&4294967295,y=v+(w<<22&4294967295|w>>>10),w=m+(A^y&(v^A))+I[12]+1804603682&4294967295,m=y+(w<<7&4294967295|w>>>25),w=A+(v^m&(y^v))+I[13]+4254626195&4294967295,A=m+(w<<12&4294967295|w>>>20),w=v+(y^A&(m^y))+I[14]+2792965006&4294967295,v=A+(w<<17&4294967295|w>>>15),w=y+(m^v&(A^m))+I[15]+1236535329&4294967295,y=v+(w<<22&4294967295|w>>>10),w=m+(v^A&(y^v))+I[1]+4129170786&4294967295,m=y+(w<<5&4294967295|w>>>27),w=A+(y^v&(m^y))+I[6]+3225465664&4294967295,A=m+(w<<9&4294967295|w>>>23),w=v+(m^y&(A^m))+I[11]+643717713&4294967295,v=A+(w<<14&4294967295|w>>>18),w=y+(A^m&(v^A))+I[0]+3921069994&4294967295,y=v+(w<<20&4294967295|w>>>12),w=m+(v^A&(y^v))+I[5]+3593408605&4294967295,m=y+(w<<5&4294967295|w>>>27),w=A+(y^v&(m^y))+I[10]+38016083&4294967295,A=m+(w<<9&4294967295|w>>>23),w=v+(m^y&(A^m))+I[15]+3634488961&4294967295,v=A+(w<<14&4294967295|w>>>18),w=y+(A^m&(v^A))+I[4]+3889429448&4294967295,y=v+(w<<20&4294967295|w>>>12),w=m+(v^A&(y^v))+I[9]+568446438&4294967295,m=y+(w<<5&4294967295|w>>>27),w=A+(y^v&(m^y))+I[14]+3275163606&4294967295,A=m+(w<<9&4294967295|w>>>23),w=v+(m^y&(A^m))+I[3]+4107603335&4294967295,v=A+(w<<14&4294967295|w>>>18),w=y+(A^m&(v^A))+I[8]+1163531501&4294967295,y=v+(w<<20&4294967295|w>>>12),w=m+(v^A&(y^v))+I[13]+2850285829&4294967295,m=y+(w<<5&4294967295|w>>>27),w=A+(y^v&(m^y))+I[2]+4243563512&4294967295,A=m+(w<<9&4294967295|w>>>23),w=v+(m^y&(A^m))+I[7]+1735328473&4294967295,v=A+(w<<14&4294967295|w>>>18),w=y+(A^m&(v^A))+I[12]+2368359562&4294967295,y=v+(w<<20&4294967295|w>>>12),w=m+(y^v^A)+I[5]+4294588738&4294967295,m=y+(w<<4&4294967295|w>>>28),w=A+(m^y^v)+I[8]+2272392833&4294967295,A=m+(w<<11&4294967295|w>>>21),w=v+(A^m^y)+I[11]+1839030562&4294967295,v=A+(w<<16&4294967295|w>>>16),w=y+(v^A^m)+I[14]+4259657740&4294967295,y=v+(w<<23&4294967295|w>>>9),w=m+(y^v^A)+I[1]+2763975236&4294967295,m=y+(w<<4&4294967295|w>>>28),w=A+(m^y^v)+I[4]+1272893353&4294967295,A=m+(w<<11&4294967295|w>>>21),w=v+(A^m^y)+I[7]+4139469664&4294967295,v=A+(w<<16&4294967295|w>>>16),w=y+(v^A^m)+I[10]+3200236656&4294967295,y=v+(w<<23&4294967295|w>>>9),w=m+(y^v^A)+I[13]+681279174&4294967295,m=y+(w<<4&4294967295|w>>>28),w=A+(m^y^v)+I[0]+3936430074&4294967295,A=m+(w<<11&4294967295|w>>>21),w=v+(A^m^y)+I[3]+3572445317&4294967295,v=A+(w<<16&4294967295|w>>>16),w=y+(v^A^m)+I[6]+76029189&4294967295,y=v+(w<<23&4294967295|w>>>9),w=m+(y^v^A)+I[9]+3654602809&4294967295,m=y+(w<<4&4294967295|w>>>28),w=A+(m^y^v)+I[12]+3873151461&4294967295,A=m+(w<<11&4294967295|w>>>21),w=v+(A^m^y)+I[15]+530742520&4294967295,v=A+(w<<16&4294967295|w>>>16),w=y+(v^A^m)+I[2]+3299628645&4294967295,y=v+(w<<23&4294967295|w>>>9),w=m+(v^(y|~A))+I[0]+4096336452&4294967295,m=y+(w<<6&4294967295|w>>>26),w=A+(y^(m|~v))+I[7]+1126891415&4294967295,A=m+(w<<10&4294967295|w>>>22),w=v+(m^(A|~y))+I[14]+2878612391&4294967295,v=A+(w<<15&4294967295|w>>>17),w=y+(A^(v|~m))+I[5]+4237533241&4294967295,y=v+(w<<21&4294967295|w>>>11),w=m+(v^(y|~A))+I[12]+1700485571&4294967295,m=y+(w<<6&4294967295|w>>>26),w=A+(y^(m|~v))+I[3]+2399980690&4294967295,A=m+(w<<10&4294967295|w>>>22),w=v+(m^(A|~y))+I[10]+4293915773&4294967295,v=A+(w<<15&4294967295|w>>>17),w=y+(A^(v|~m))+I[1]+2240044497&4294967295,y=v+(w<<21&4294967295|w>>>11),w=m+(v^(y|~A))+I[8]+1873313359&4294967295,m=y+(w<<6&4294967295|w>>>26),w=A+(y^(m|~v))+I[15]+4264355552&4294967295,A=m+(w<<10&4294967295|w>>>22),w=v+(m^(A|~y))+I[6]+2734768916&4294967295,v=A+(w<<15&4294967295|w>>>17),w=y+(A^(v|~m))+I[13]+1309151649&4294967295,y=v+(w<<21&4294967295|w>>>11),w=m+(v^(y|~A))+I[4]+4149444226&4294967295,m=y+(w<<6&4294967295|w>>>26),w=A+(y^(m|~v))+I[11]+3174756917&4294967295,A=m+(w<<10&4294967295|w>>>22),w=v+(m^(A|~y))+I[2]+718787259&4294967295,v=A+(w<<15&4294967295|w>>>17),w=y+(A^(v|~m))+I[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(v+(w<<21&4294967295|w>>>11))&4294967295,T.g[2]=T.g[2]+v&4294967295,T.g[3]=T.g[3]+A&4294967295}r.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var y=m-this.blockSize,I=this.B,v=this.h,A=0;A<m;){if(v==0)for(;A<=y;)s(this,T,A),A+=this.blockSize;if(typeof T=="string"){for(;A<m;)if(I[v++]=T.charCodeAt(A++),v==this.blockSize){s(this,I),v=0;break}}else for(;A<m;)if(I[v++]=T[A++],v==this.blockSize){s(this,I),v=0;break}}this.h=v,this.o+=m},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var y=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=y&255,y/=256;for(this.u(T),T=Array(16),m=y=0;4>m;++m)for(var I=0;32>I;I+=8)T[y++]=this.g[m]>>>I&255;return T};function i(T,m){var y=l;return Object.prototype.hasOwnProperty.call(y,T)?y[T]:y[T]=m(T)}function a(T,m){this.h=m;for(var y=[],I=!0,v=T.length-1;0<=v;v--){var A=T[v]|0;I&&A==m||(y[v]=A,I=!1)}this.g=y}var l={};function c(T){return-128<=T&&128>T?i(T,function(m){return new a([m|0],0>m?-1:0)}):new a([T|0],0>T?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return p;if(0>T)return C(h(-T));for(var m=[],y=1,I=0;T>=y;I++)m[I]=T/y|0,y*=4294967296;return new a(m,0)}function f(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return C(f(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(m,8)),I=p,v=0;v<T.length;v+=8){var A=Math.min(8,T.length-v),w=parseInt(T.substring(v,v+A),m);8>A?(A=h(Math.pow(m,A)),I=I.j(A).add(h(w))):(I=I.j(y),I=I.add(h(w)))}return I}var p=c(0),_=c(1),b=c(16777216);n=a.prototype,n.m=function(){if(S(this))return-C(this).m();for(var T=0,m=1,y=0;y<this.g.length;y++){var I=this.i(y);T+=(0<=I?I:4294967296+I)*m,m*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(k(this))return"0";if(S(this))return"-"+C(this).toString(T);for(var m=h(Math.pow(T,6)),y=this,I="";;){var v=q(y,m).g;y=$(y,v.j(m));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(T);if(y=v,k(y))return A+I;for(;6>A.length;)A="0"+A;I=A+I}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function k(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function S(T){return T.h==-1}n.l=function(T){return T=$(this,T),S(T)?-1:k(T)?0:1};function C(T){for(var m=T.g.length,y=[],I=0;I<m;I++)y[I]=~T.g[I];return new a(y,~T.h).add(_)}n.abs=function(){return S(this)?C(this):this},n.add=function(T){for(var m=Math.max(this.g.length,T.g.length),y=[],I=0,v=0;v<=m;v++){var A=I+(this.i(v)&65535)+(T.i(v)&65535),w=(A>>>16)+(this.i(v)>>>16)+(T.i(v)>>>16);I=w>>>16,A&=65535,w&=65535,y[v]=w<<16|A}return new a(y,y[y.length-1]&-2147483648?-1:0)};function $(T,m){return T.add(C(m))}n.j=function(T){if(k(this)||k(T))return p;if(S(this))return S(T)?C(this).j(C(T)):C(C(this).j(T));if(S(T))return C(this.j(C(T)));if(0>this.l(b)&&0>T.l(b))return h(this.m()*T.m());for(var m=this.g.length+T.g.length,y=[],I=0;I<2*m;I++)y[I]=0;for(I=0;I<this.g.length;I++)for(var v=0;v<T.g.length;v++){var A=this.i(I)>>>16,w=this.i(I)&65535,Ge=T.i(v)>>>16,lt=T.i(v)&65535;y[2*I+2*v]+=w*lt,F(y,2*I+2*v),y[2*I+2*v+1]+=A*lt,F(y,2*I+2*v+1),y[2*I+2*v+1]+=w*Ge,F(y,2*I+2*v+1),y[2*I+2*v+2]+=A*Ge,F(y,2*I+2*v+2)}for(I=0;I<m;I++)y[I]=y[2*I+1]<<16|y[2*I];for(I=m;I<2*m;I++)y[I]=0;return new a(y,0)};function F(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function H(T,m){this.g=T,this.h=m}function q(T,m){if(k(m))throw Error("division by zero");if(k(T))return new H(p,p);if(S(T))return m=q(C(T),m),new H(C(m.g),C(m.h));if(S(m))return m=q(T,C(m)),new H(C(m.g),m.h);if(30<T.g.length){if(S(T)||S(m))throw Error("slowDivide_ only works with positive integers.");for(var y=_,I=m;0>=I.l(T);)y=le(y),I=le(I);var v=oe(y,1),A=oe(I,1);for(I=oe(I,2),y=oe(y,2);!k(I);){var w=A.add(I);0>=w.l(T)&&(v=v.add(y),A=w),I=oe(I,1),y=oe(y,1)}return m=$(T,v.j(m)),new H(v,m)}for(v=p;0<=T.l(m);){for(y=Math.max(1,Math.floor(T.m()/m.m())),I=Math.ceil(Math.log(y)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),A=h(y),w=A.j(m);S(w)||0<w.l(T);)y-=I,A=h(y),w=A.j(m);k(A)&&(A=_),v=v.add(A),T=$(T,w)}return new H(v,T)}n.A=function(T){return q(this,T).h},n.and=function(T){for(var m=Math.max(this.g.length,T.g.length),y=[],I=0;I<m;I++)y[I]=this.i(I)&T.i(I);return new a(y,this.h&T.h)},n.or=function(T){for(var m=Math.max(this.g.length,T.g.length),y=[],I=0;I<m;I++)y[I]=this.i(I)|T.i(I);return new a(y,this.h|T.h)},n.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),y=[],I=0;I<m;I++)y[I]=this.i(I)^T.i(I);return new a(y,this.h^T.h)};function le(T){for(var m=T.g.length+1,y=[],I=0;I<m;I++)y[I]=T.i(I)<<1|T.i(I-1)>>>31;return new a(y,T.h)}function oe(T,m){var y=m>>5;m%=32;for(var I=T.g.length-y,v=[],A=0;A<I;A++)v[A]=0<m?T.i(A+y)>>>m|T.i(A+y+1)<<32-m:T.i(A+y);return new a(v,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Op=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,vr=a}).apply(typeof ad<"u"?ad:typeof self<"u"?self:typeof window<"u"?window:{});var io=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xp,js,Mp,go,Wl,Lp,Fp,Up;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof io=="object"&&io];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var d=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var P=o[g];if(!(P in d))break e;d=d[P]}o=o[o.length-1],g=d[o],u=u(g),u!=g&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var d=0,g=!1,P={next:function(){if(!g&&d<o.length){var V=d++;return{value:u(V,o[V]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function p(o,u,d){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),o.apply(u,P)}}return function(){return o.apply(u,arguments)}}function _(o,u,d){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,_.apply(null,arguments)}function b(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function k(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(g,P,V){for(var z=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)z[Ce-2]=arguments[Ce];return u.prototype[P].apply(g,z)}}function S(o){const u=o.length;if(0<u){const d=Array(u);for(let g=0;g<u;g++)d[g]=o[g];return d}return[]}function C(o,u){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(c(g)){const P=o.length||0,V=g.length||0;o.length=P+V;for(let z=0;z<V;z++)o[P+z]=g[z]}else o.push(g)}}class ${constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function F(o){return/^[\s\xa0]*$/.test(o)}function H(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function q(o){return q[" "](o),o}q[" "]=function(){};var le=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function oe(o,u,d){for(const g in o)u.call(d,o[g],g,o)}function T(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function m(o){const u={};for(const d in o)u[d]=o[d];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(o,u){let d,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(d in g)o[d]=g[d];for(let V=0;V<y.length;V++)d=y[V],Object.prototype.hasOwnProperty.call(g,d)&&(o[d]=g[d])}}function v(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function A(o){l.setTimeout(()=>{throw o},0)}function w(){var o=ct;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class Ge{constructor(){this.h=this.g=null}add(u,d){const g=lt.get();g.set(u,d),this.h?this.h.next=g:this.g=g,this.h=g}}var lt=new $(()=>new Fe,o=>o.reset());class Fe{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let me,_e=!1,ct=new Ge,pn=()=>{const o=l.Promise.resolve(void 0);me=()=>{o.then(Ut)}};var Ut=()=>{for(var o;o=w();){try{o.h.call(o.g)}catch(d){A(d)}var u=lt;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}_e=!1};function $e(){this.s=this.s,this.C=this.C}$e.prototype.s=!1,$e.prototype.ma=function(){this.s||(this.s=!0,this.N())},$e.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function je(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}je.prototype.h=function(){this.defaultPrevented=!0};var _s=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return o}();function Yt(o,u){if(je.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(le){e:{try{q(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:ae[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Yt.aa.h.call(this)}}k(Yt,je);var ae={2:"touch",3:"pen",4:"mouse"};Yt.prototype.h=function(){Yt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var W="closure_listenable_"+(1e6*Math.random()|0),re=0;function ut(o,u,d,g,P){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!g,this.ha=P,this.key=++re,this.da=this.fa=!1}function Jt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ys(o){this.src=o,this.g={},this.h=0}ys.prototype.add=function(o,u,d,g,P){var V=o.toString();o=this.g[V],o||(o=this.g[V]=[],this.h++);var z=R(o,u,g,P);return-1<z?(u=o[z],d||(u.fa=!1)):(u=new ut(u,this.src,V,!!g,P),u.fa=d,o.push(u)),u};function E(o,u){var d=u.type;if(d in o.g){var g=o.g[d],P=Array.prototype.indexOf.call(g,u,void 0),V;(V=0<=P)&&Array.prototype.splice.call(g,P,1),V&&(Jt(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function R(o,u,d,g){for(var P=0;P<o.length;++P){var V=o[P];if(!V.da&&V.listener==u&&V.capture==!!d&&V.ha==g)return P}return-1}var D="closure_lm_"+(1e6*Math.random()|0),U={};function L(o,u,d,g,P){if(Array.isArray(u)){for(var V=0;V<u.length;V++)L(o,u[V],d,g,P);return null}return d=se(d),o&&o[W]?o.K(u,d,h(g)?!!g.capture:!1,P):x(o,u,d,!1,g,P)}function x(o,u,d,g,P,V){if(!u)throw Error("Invalid event type");var z=h(P)?!!P.capture:!!P,Ce=Y(o);if(Ce||(o[D]=Ce=new ys(o)),d=Ce.add(u,d,g,z,V),d.proxy)return d;if(g=Q(),d.proxy=g,g.src=o,g.listener=d,o.addEventListener)_s||(P=z),P===void 0&&(P=!1),o.addEventListener(u.toString(),g,P);else if(o.attachEvent)o.attachEvent(M(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Q(){function o(d){return u.call(o.src,o.listener,d)}const u=ee;return o}function K(o,u,d,g,P){if(Array.isArray(u))for(var V=0;V<u.length;V++)K(o,u[V],d,g,P);else g=h(g)?!!g.capture:!!g,d=se(d),o&&o[W]?(o=o.i,u=String(u).toString(),u in o.g&&(V=o.g[u],d=R(V,d,g,P),-1<d&&(Jt(V[d]),Array.prototype.splice.call(V,d,1),V.length==0&&(delete o.g[u],o.h--)))):o&&(o=Y(o))&&(u=o.g[u.toString()],o=-1,u&&(o=R(u,d,g,P)),(d=-1<o?u[o]:null)&&j(d))}function j(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[W])E(u.i,o);else{var d=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(d,g,o.capture):u.detachEvent?u.detachEvent(M(d),g):u.addListener&&u.removeListener&&u.removeListener(g),(d=Y(u))?(E(d,o),d.h==0&&(d.src=null,u[D]=null)):Jt(o)}}}function M(o){return o in U?U[o]:U[o]="on"+o}function ee(o,u){if(o.da)o=!0;else{u=new Yt(u,this);var d=o.listener,g=o.ha||o.src;o.fa&&j(o),o=d.call(g,u)}return o}function Y(o){return o=o[D],o instanceof ys?o:null}var X="__closure_events_fn_"+(1e9*Math.random()>>>0);function se(o){return typeof o=="function"?o:(o[X]||(o[X]=function(u){return o.handleEvent(u)}),o[X])}function te(){$e.call(this),this.i=new ys(this),this.M=this,this.F=null}k(te,$e),te.prototype[W]=!0,te.prototype.removeEventListener=function(o,u,d,g){K(this,o,u,d,g)};function pe(o,u){var d,g=o.F;if(g)for(d=[];g;g=g.F)d.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new je(u,o);else if(u instanceof je)u.target=u.target||o;else{var P=u;u=new je(g,o),I(u,P)}if(P=!0,d)for(var V=d.length-1;0<=V;V--){var z=u.g=d[V];P=we(z,g,!0,u)&&P}if(z=u.g=o,P=we(z,g,!0,u)&&P,P=we(z,g,!1,u)&&P,d)for(V=0;V<d.length;V++)z=u.g=d[V],P=we(z,g,!1,u)&&P}te.prototype.N=function(){if(te.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],g=0;g<d.length;g++)Jt(d[g]);delete o.g[u],o.h--}}this.F=null},te.prototype.K=function(o,u,d,g){return this.i.add(String(o),u,!1,d,g)},te.prototype.L=function(o,u,d,g){return this.i.add(String(o),u,!0,d,g)};function we(o,u,d,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,V=0;V<u.length;++V){var z=u[V];if(z&&!z.da&&z.capture==d){var Ce=z.listener,tt=z.ha||z.src;z.fa&&E(o.i,z),P=Ce.call(tt,g)!==!1&&P}}return P&&!g.defaultPrevented}function xe(o,u,d){if(typeof o=="function")d&&(o=_(o,d));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function We(o){o.g=xe(()=>{o.g=null,o.i&&(o.i=!1,We(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class xt extends $e{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:We(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ht(o){$e.call(this),this.h=o,this.g={}}k(ht,$e);var Mn=[];function vs(o){oe(o.g,function(u,d){this.g.hasOwnProperty(d)&&j(u)},o),o.g={}}ht.prototype.N=function(){ht.aa.N.call(this),vs(this)},ht.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var et=l.JSON.stringify,Mt=l.JSON.parse,Ui=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Cr(){}Cr.prototype.h=null;function Ru(o){return o.h||(o.h=o.i())}function Su(){}var Es={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Da(){je.call(this,"d")}k(Da,je);function Na(){je.call(this,"c")}k(Na,je);var or={},Pu=null;function Bi(){return Pu=Pu||new te}or.La="serverreachability";function Cu(o){je.call(this,or.La,o)}k(Cu,je);function ws(o){const u=Bi();pe(u,new Cu(u))}or.STAT_EVENT="statevent";function ku(o,u){je.call(this,or.STAT_EVENT,o),this.stat=u}k(ku,je);function Tt(o){const u=Bi();pe(u,new ku(u,o))}or.Ma="timingevent";function Vu(o,u){je.call(this,or.Ma,o),this.size=u}k(Vu,je);function Ts(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function Is(){this.g=!0}Is.prototype.xa=function(){this.g=!1};function Mm(o,u,d,g,P,V){o.info(function(){if(o.g)if(V)for(var z="",Ce=V.split("&"),tt=0;tt<Ce.length;tt++){var Te=Ce[tt].split("=");if(1<Te.length){var dt=Te[0];Te=Te[1];var ft=dt.split("_");z=2<=ft.length&&ft[1]=="type"?z+(dt+"="+Te+"&"):z+(dt+"=redacted&")}}else z=null;else z=V;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+u+`
`+d+`
`+z})}function Lm(o,u,d,g,P,V,z){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+u+`
`+d+`
`+V+" "+z})}function kr(o,u,d,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Um(o,d)+(g?" "+g:"")})}function Fm(o,u){o.info(function(){return"TIMEOUT: "+u})}Is.prototype.info=function(){};function Um(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var g=d[o];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var V=P[0];if(V!="noop"&&V!="stop"&&V!="close")for(var z=1;z<P.length;z++)P[z]=""}}}}return et(d)}catch{return u}}var $i={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Du={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Oa;function ji(){}k(ji,Cr),ji.prototype.g=function(){return new XMLHttpRequest},ji.prototype.i=function(){return{}},Oa=new ji;function Ln(o,u,d,g){this.j=o,this.i=u,this.l=d,this.R=g||1,this.U=new ht(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Nu}function Nu(){this.i=null,this.g="",this.h=!1}var Ou={},xa={};function Ma(o,u,d){o.L=1,o.v=Ki(gn(u)),o.m=d,o.P=!0,xu(o,null)}function xu(o,u){o.F=Date.now(),qi(o),o.A=gn(o.v);var d=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),Qu(d.i,"t",g),o.C=0,d=o.j.J,o.h=new Nu,o.g=fh(o.j,d?u:null,!o.m),0<o.O&&(o.M=new xt(_(o.Y,o,o.g),o.O)),u=o.U,d=o.g,g=o.ca;var P="readystatechange";Array.isArray(P)||(P&&(Mn[0]=P.toString()),P=Mn);for(var V=0;V<P.length;V++){var z=L(d,P[V],g||u.handleEvent,!1,u.h||u);if(!z)break;u.g[z.key]=z}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),ws(),Mm(o.i,o.u,o.A,o.l,o.R,o.m)}Ln.prototype.ca=function(o){o=o.target;const u=this.M;u&&mn(o)==3?u.j():this.Y(o)},Ln.prototype.Y=function(o){try{if(o==this.g)e:{const ft=mn(this.g);var u=this.g.Ba();const Nr=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||nh(this.g)))){this.J||ft!=4||u==7||(u==8||0>=Nr?ws(3):ws(2)),La(this);var d=this.g.Z();this.X=d;t:if(Mu(this)){var g=nh(this.g);o="";var P=g.length,V=mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ar(this),As(this);var z="";break t}this.h.i=new l.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(V&&u==P-1)});g.length=0,this.h.g+=o,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=d==200,Lm(this.i,this.u,this.A,this.l,this.R,ft,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Ce,tt=this.g;if((Ce=tt.g?tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(Ce)){var Te=Ce;break t}}Te=null}if(d=Te)kr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fa(this,d);else{this.o=!1,this.s=3,Tt(12),ar(this),As(this);break e}}if(this.P){d=!0;let Bt;for(;!this.J&&this.C<z.length;)if(Bt=Bm(this,z),Bt==xa){ft==4&&(this.s=4,Tt(14),d=!1),kr(this.i,this.l,null,"[Incomplete Response]");break}else if(Bt==Ou){this.s=4,Tt(15),kr(this.i,this.l,z,"[Invalid Chunk]"),d=!1;break}else kr(this.i,this.l,Bt,null),Fa(this,Bt);if(Mu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||z.length!=0||this.h.h||(this.s=1,Tt(16),d=!1),this.o=this.o&&d,!d)kr(this.i,this.l,z,"[Invalid Chunked Response]"),ar(this),As(this);else if(0<z.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Wa(dt),dt.M=!0,Tt(11))}}else kr(this.i,this.l,z,null),Fa(this,z);ft==4&&ar(this),this.o&&!this.J&&(ft==4?ch(this.j,this):(this.o=!1,qi(this)))}else r_(this.g),d==400&&0<z.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),ar(this),As(this)}}}catch{}finally{}};function Mu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Bm(o,u){var d=o.C,g=u.indexOf(`
`,d);return g==-1?xa:(d=Number(u.substring(d,g)),isNaN(d)?Ou:(g+=1,g+d>u.length?xa:(u=u.slice(g,g+d),o.C=g+d,u)))}Ln.prototype.cancel=function(){this.J=!0,ar(this)};function qi(o){o.S=Date.now()+o.I,Lu(o,o.I)}function Lu(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Ts(_(o.ba,o),u)}function La(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Ln.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Fm(this.i,this.A),this.L!=2&&(ws(),Tt(17)),ar(this),this.s=2,As(this)):Lu(this,this.S-o)};function As(o){o.j.G==0||o.J||ch(o.j,o)}function ar(o){La(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,vs(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Fa(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||Ua(d.h,o))){if(!o.K&&Ua(d.h,o)&&d.G==3){try{var g=d.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Xi(d),Yi(d);else break e;qa(d),Tt(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=Ts(_(d.Za,d),6e3));if(1>=Bu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else cr(d,11)}else if((o.K||d.g==o)&&Xi(d),!F(u))for(P=d.Da.g.parse(u),u=0;u<P.length;u++){let Te=P[u];if(d.T=Te[0],Te=Te[1],d.G==2)if(Te[0]=="c"){d.K=Te[1],d.ia=Te[2];const dt=Te[3];dt!=null&&(d.la=dt,d.j.info("VER="+d.la));const ft=Te[4];ft!=null&&(d.Aa=ft,d.j.info("SVER="+d.Aa));const Nr=Te[5];Nr!=null&&typeof Nr=="number"&&0<Nr&&(g=1.5*Nr,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Bt=o.g;if(Bt){const eo=Bt.g?Bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(eo){var V=g.h;V.g||eo.indexOf("spdy")==-1&&eo.indexOf("quic")==-1&&eo.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Ba(V,V.h),V.h=null))}if(g.D){const Ha=Bt.g?Bt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ha&&(g.ya=Ha,Oe(g.I,g.D,Ha))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var z=o;if(g.qa=dh(g,g.J?g.ia:null,g.W),z.K){$u(g.h,z);var Ce=z,tt=g.L;tt&&(Ce.I=tt),Ce.B&&(La(Ce),qi(Ce)),g.g=z}else ah(g);0<d.i.length&&Ji(d)}else Te[0]!="stop"&&Te[0]!="close"||cr(d,7);else d.G==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?cr(d,7):ja(d):Te[0]!="noop"&&d.l&&d.l.ta(Te),d.v=0)}}ws(4)}catch{}}var $m=class{constructor(o,u){this.g=o,this.map=u}};function Fu(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Uu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Bu(o){return o.h?1:o.g?o.g.size:0}function Ua(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Ba(o,u){o.g?o.g.add(u):o.h=u}function $u(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Fu.prototype.cancel=function(){if(this.i=ju(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function ju(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return S(o.i)}function jm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],d=o.length,g=0;g<d;g++)u.push(o[g]);return u}u=[],d=0;for(g in o)u[d++]=o[g];return u}function qm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const g in o)u[d++]=g;return u}}}function qu(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=qm(o),g=jm(o),P=g.length,V=0;V<P;V++)u.call(void 0,g[V],d&&d[V],o)}var Wu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wm(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var g=o[d].indexOf("="),P=null;if(0<=g){var V=o[d].substring(0,g);P=o[d].substring(g+1)}else V=o[d];u(V,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function lr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof lr){this.h=o.h,Wi(this,o.j),this.o=o.o,this.g=o.g,Hi(this,o.s),this.l=o.l;var u=o.i,d=new Ss;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Hu(this,d),this.m=o.m}else o&&(u=String(o).match(Wu))?(this.h=!1,Wi(this,u[1]||"",!0),this.o=bs(u[2]||""),this.g=bs(u[3]||"",!0),Hi(this,u[4]),this.l=bs(u[5]||"",!0),Hu(this,u[6]||"",!0),this.m=bs(u[7]||"")):(this.h=!1,this.i=new Ss(null,this.h))}lr.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Rs(u,Ku,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Rs(u,Ku,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Rs(d,d.charAt(0)=="/"?zm:Km,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Rs(d,Qm)),o.join("")};function gn(o){return new lr(o)}function Wi(o,u,d){o.j=d?bs(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Hi(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Hu(o,u,d){u instanceof Ss?(o.i=u,Ym(o.i,o.h)):(d||(u=Rs(u,Gm)),o.i=new Ss(u,o.h))}function Oe(o,u,d){o.i.set(u,d)}function Ki(o){return Oe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function bs(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Rs(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,Hm),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Hm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Ku=/[#\/\?@]/g,Km=/[#\?:]/g,zm=/[#\?]/g,Gm=/[#\?@]/g,Qm=/#/g;function Ss(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Fn(o){o.g||(o.g=new Map,o.h=0,o.i&&Wm(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=Ss.prototype,n.add=function(o,u){Fn(this),this.i=null,o=Vr(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function zu(o,u){Fn(o),u=Vr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Gu(o,u){return Fn(o),u=Vr(o,u),o.g.has(u)}n.forEach=function(o,u){Fn(this),this.g.forEach(function(d,g){d.forEach(function(P){o.call(u,P,g,this)},this)},this)},n.na=function(){Fn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let g=0;g<u.length;g++){const P=o[g];for(let V=0;V<P.length;V++)d.push(u[g])}return d},n.V=function(o){Fn(this);let u=[];if(typeof o=="string")Gu(this,o)&&(u=u.concat(this.g.get(Vr(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},n.set=function(o,u){return Fn(this),this.i=null,o=Vr(this,o),Gu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Qu(o,u,d){zu(o,u),0<d.length&&(o.i=null,o.g.set(Vr(o,u),S(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var g=u[d];const V=encodeURIComponent(String(g)),z=this.V(g);for(g=0;g<z.length;g++){var P=V;z[g]!==""&&(P+="="+encodeURIComponent(String(z[g]))),o.push(P)}}return this.i=o.join("&")};function Vr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Ym(o,u){u&&!o.j&&(Fn(o),o.i=null,o.g.forEach(function(d,g){var P=g.toLowerCase();g!=P&&(zu(this,g),Qu(this,P,d))},o)),o.j=u}function Jm(o,u){const d=new Is;if(l.Image){const g=new Image;g.onload=b(Un,d,"TestLoadImage: loaded",!0,u,g),g.onerror=b(Un,d,"TestLoadImage: error",!1,u,g),g.onabort=b(Un,d,"TestLoadImage: abort",!1,u,g),g.ontimeout=b(Un,d,"TestLoadImage: timeout",!1,u,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function Xm(o,u){const d=new Is,g=new AbortController,P=setTimeout(()=>{g.abort(),Un(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(V=>{clearTimeout(P),V.ok?Un(d,"TestPingServer: ok",!0,u):Un(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),Un(d,"TestPingServer: error",!1,u)})}function Un(o,u,d,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(d)}catch{}}function Zm(){this.g=new Ui}function e_(o,u,d){const g=d||"";try{qu(o,function(P,V){let z=P;h(P)&&(z=et(P)),u.push(g+V+"="+encodeURIComponent(z))})}catch(P){throw u.push(g+"type="+encodeURIComponent("_badmap")),P}}function zi(o){this.l=o.Ub||null,this.j=o.eb||!1}k(zi,Cr),zi.prototype.g=function(){return new Gi(this.l,this.j)},zi.prototype.i=function(o){return function(){return o}}({});function Gi(o,u){te.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Gi,te),n=Gi.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Cs(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ps(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Cs(this)),this.g&&(this.readyState=3,Cs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Yu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Yu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Ps(this):Cs(this),this.readyState==3&&Yu(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Ps(this))},n.Qa=function(o){this.g&&(this.response=o,Ps(this))},n.ga=function(){this.g&&Ps(this)};function Ps(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Cs(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function Cs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Gi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ju(o){let u="";return oe(o,function(d,g){u+=g,u+=":",u+=d,u+=`\r
`}),u}function $a(o,u,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Ju(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):Oe(o,u,d))}function Ue(o){te.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Ue,te);var t_=/^https?$/i,n_=["POST","PUT"];n=Ue.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Oa.g(),this.v=this.o?Ru(this.o):Ru(Oa),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(V){Xu(this,V);return}if(o=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)d.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())d.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),P=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(n_,u,void 0))||g||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,z]of d)this.g.setRequestHeader(V,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{th(this),this.u=!0,this.g.send(o),this.u=!1}catch(V){Xu(this,V)}};function Xu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Zu(o),Qi(o)}function Zu(o){o.A||(o.A=!0,pe(o,"complete"),pe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,pe(this,"complete"),pe(this,"abort"),Qi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qi(this,!0)),Ue.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?eh(this):this.bb())},n.bb=function(){eh(this)};function eh(o){if(o.h&&typeof a<"u"&&(!o.v[1]||mn(o)!=4||o.Z()!=2)){if(o.u&&mn(o)==4)xe(o.Ea,0,o);else if(pe(o,"readystatechange"),mn(o)==4){o.h=!1;try{const z=o.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var g;if(g=z===0){var P=String(o.D).match(Wu)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),g=!t_.test(P?P.toLowerCase():"")}d=g}if(d)pe(o,"complete"),pe(o,"success");else{o.m=6;try{var V=2<mn(o)?o.g.statusText:""}catch{V=""}o.l=V+" ["+o.Z()+"]",Zu(o)}}finally{Qi(o)}}}}function Qi(o,u){if(o.g){th(o);const d=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||pe(o,"ready");try{d.onreadystatechange=g}catch{}}}function th(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function mn(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<mn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Mt(u)}};function nh(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function r_(o){const u={};o=(o.g&&2<=mn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(F(o[g]))continue;var d=v(o[g]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=u[P]||[];u[P]=V,V.push(d)}T(u,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ks(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function rh(o){this.Aa=0,this.i=[],this.j=new Is,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ks("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ks("baseRetryDelayMs",5e3,o),this.cb=ks("retryDelaySeedMs",1e4,o),this.Wa=ks("forwardChannelMaxRetries",2,o),this.wa=ks("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Fu(o&&o.concurrentRequestLimit),this.Da=new Zm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=rh.prototype,n.la=8,n.G=1,n.connect=function(o,u,d,g){Tt(0),this.W=o,this.H=u||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=dh(this,null,this.W),Ji(this)};function ja(o){if(sh(o),o.G==3){var u=o.U++,d=gn(o.I);if(Oe(d,"SID",o.K),Oe(d,"RID",u),Oe(d,"TYPE","terminate"),Vs(o,d),u=new Ln(o,o.j,u),u.L=2,u.v=Ki(gn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=fh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),qi(u)}hh(o)}function Yi(o){o.g&&(Wa(o),o.g.cancel(),o.g=null)}function sh(o){Yi(o),o.u&&(l.clearTimeout(o.u),o.u=null),Xi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Ji(o){if(!Uu(o.h)&&!o.s){o.s=!0;var u=o.Ga;me||pn(),_e||(me(),_e=!0),ct.add(u,o),o.B=0}}function s_(o,u){return Bu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Ts(_(o.Ga,o,u),uh(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const P=new Ln(this,this.j,o);let V=this.o;if(this.S&&(V?(V=m(V),I(V,this.S)):V=this.S),this.m!==null||this.O||(P.H=V,V=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=oh(this,P,u),d=gn(this.I),Oe(d,"RID",o),Oe(d,"CVER",22),this.D&&Oe(d,"X-HTTP-Session-Id",this.D),Vs(this,d),V&&(this.O?u="headers="+encodeURIComponent(String(Ju(V)))+"&"+u:this.m&&$a(d,this.m,V)),Ba(this.h,P),this.Ua&&Oe(d,"TYPE","init"),this.P?(Oe(d,"$req",u),Oe(d,"SID","null"),P.T=!0,Ma(P,d,null)):Ma(P,d,u),this.G=2}}else this.G==3&&(o?ih(this,o):this.i.length==0||Uu(this.h)||ih(this))};function ih(o,u){var d;u?d=u.l:d=o.U++;const g=gn(o.I);Oe(g,"SID",o.K),Oe(g,"RID",d),Oe(g,"AID",o.T),Vs(o,g),o.m&&o.o&&$a(g,o.m,o.o),d=new Ln(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=oh(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ba(o.h,d),Ma(d,g,u)}function Vs(o,u){o.H&&oe(o.H,function(d,g){Oe(u,g,d)}),o.l&&qu({},function(d,g){Oe(u,g,d)})}function oh(o,u,d){d=Math.min(o.i.length,d);var g=o.l?_(o.l.Na,o.l,o):null;e:{var P=o.i;let V=-1;for(;;){const z=["count="+d];V==-1?0<d?(V=P[0].g,z.push("ofs="+V)):V=0:z.push("ofs="+V);let Ce=!0;for(let tt=0;tt<d;tt++){let Te=P[tt].g;const dt=P[tt].map;if(Te-=V,0>Te)V=Math.max(0,P[tt].g-100),Ce=!1;else try{e_(dt,z,"req"+Te+"_")}catch{g&&g(dt)}}if(Ce){g=z.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,g}function ah(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;me||pn(),_e||(me(),_e=!0),ct.add(u,o),o.v=0}}function qa(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Ts(_(o.Fa,o),uh(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,lh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Ts(_(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Tt(10),Yi(this),lh(this))};function Wa(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function lh(o){o.g=new Ln(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=gn(o.qa);Oe(u,"RID","rpc"),Oe(u,"SID",o.K),Oe(u,"AID",o.T),Oe(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Oe(u,"TO",o.ja),Oe(u,"TYPE","xmlhttp"),Vs(o,u),o.m&&o.o&&$a(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Ki(gn(u)),d.m=null,d.P=!0,xu(d,o)}n.Za=function(){this.C!=null&&(this.C=null,Yi(this),qa(this),Tt(19))};function Xi(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function ch(o,u){var d=null;if(o.g==u){Xi(o),Wa(o),o.g=null;var g=2}else if(Ua(o.h,u))d=u.D,$u(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var P=o.B;g=Bi(),pe(g,new Vu(g,d)),Ji(o)}else ah(o);else if(P=u.s,P==3||P==0&&0<u.X||!(g==1&&s_(o,u)||g==2&&qa(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),P){case 1:cr(o,5);break;case 4:cr(o,10);break;case 3:cr(o,6);break;default:cr(o,2)}}}function uh(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function cr(o,u){if(o.j.info("Error code "+u),u==2){var d=_(o.fb,o),g=o.Xa;const P=!g;g=new lr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Wi(g,"https"),Ki(g),P?Jm(g.toString(),d):Xm(g.toString(),d)}else Tt(2);o.G=0,o.l&&o.l.sa(u),hh(o),sh(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function hh(o){if(o.G=0,o.ka=[],o.l){const u=ju(o.h);(u.length!=0||o.i.length!=0)&&(C(o.ka,u),C(o.ka,o.i),o.h.i.length=0,S(o.i),o.i.length=0),o.l.ra()}}function dh(o,u,d){var g=d instanceof lr?gn(d):new lr(d);if(g.g!="")u&&(g.g=u+"."+g.g),Hi(g,g.s);else{var P=l.location;g=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var V=new lr(null);g&&Wi(V,g),u&&(V.g=u),P&&Hi(V,P),d&&(V.l=d),g=V}return d=o.D,u=o.ya,d&&u&&Oe(g,d,u),Oe(g,"VER",o.la),Vs(o,g),g}function fh(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Ue(new zi({eb:d})):new Ue(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ph(){}n=ph.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Zi(){}Zi.prototype.g=function(o,u){return new Vt(o,u)};function Vt(o,u){te.call(this),this.g=new rh(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!F(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!F(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Dr(this)}k(Vt,te),Vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){ja(this.g)},Vt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=et(o),o=d);u.i.push(new $m(u.Ya++,o)),u.G==3&&Ji(u)},Vt.prototype.N=function(){this.g.l=null,delete this.j,ja(this.g),delete this.g,Vt.aa.N.call(this)};function gh(o){Da.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}k(gh,Da);function mh(){Na.call(this),this.status=1}k(mh,Na);function Dr(o){this.g=o}k(Dr,ph),Dr.prototype.ua=function(){pe(this.g,"a")},Dr.prototype.ta=function(o){pe(this.g,new gh(o))},Dr.prototype.sa=function(o){pe(this.g,new mh)},Dr.prototype.ra=function(){pe(this.g,"b")},Zi.prototype.createWebChannel=Zi.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,Up=function(){return new Zi},Fp=function(){return Bi()},Lp=or,Wl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},$i.NO_ERROR=0,$i.TIMEOUT=8,$i.HTTP_ERROR=6,go=$i,Du.COMPLETE="complete",Mp=Du,Su.EventType=Es,Es.OPEN="a",Es.CLOSE="b",Es.ERROR="c",Es.MESSAGE="d",te.prototype.listen=te.prototype.K,js=Su,Ue.prototype.listenOnce=Ue.prototype.L,Ue.prototype.getLastError=Ue.prototype.Ka,Ue.prototype.getLastErrorCode=Ue.prototype.Ba,Ue.prototype.getStatus=Ue.prototype.Z,Ue.prototype.getResponseJson=Ue.prototype.Oa,Ue.prototype.getResponseText=Ue.prototype.oa,Ue.prototype.send=Ue.prototype.ea,Ue.prototype.setWithCredentials=Ue.prototype.Ha,xp=Ue}).apply(typeof io<"u"?io:typeof self<"u"?self:typeof window<"u"?window:{});const ld="@firebase/firestore";/**
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
 */class mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
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
 */const wr=new Sc("@firebase/firestore");function xs(){return wr.logLevel}function J(n,...e){if(wr.logLevel<=ve.DEBUG){const t=e.map(kc);wr.debug(`Firestore (${ds}): ${n}`,...t)}}function kn(n,...e){if(wr.logLevel<=ve.ERROR){const t=e.map(kc);wr.error(`Firestore (${ds}): ${n}`,...t)}}function ns(n,...e){if(wr.logLevel<=ve.WARN){const t=e.map(kc);wr.warn(`Firestore (${ds}): ${n}`,...t)}}function kc(n){if(typeof n=="string")return n;try{/**
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
 */function ce(n="Unexpected state"){const e=`FIRESTORE (${ds}) INTERNAL ASSERTION FAILED: `+n;throw kn(e),new Error(e)}function Se(n,e){n||ce()}function fe(n,e){return n}/**
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
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends xn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Sn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Bp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class lw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(mt.UNAUTHENTICATED))}shutdown(){}}class cw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class uw{constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Se(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new Sn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Sn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Sn)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string"),new Bp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new mt(e)}}class hw{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class dw{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new hw(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pw{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Se(this.o===void 0);const r=i=>{i.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,J("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Se(typeof t.token=="string"),this.R=t.token,new fw(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function gw(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class $p{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=gw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function Ae(n,e){return n<e?-1:n>e?1:0}function rs(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */class Ye{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new G(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new G(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new G(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Ye(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ui{constructor(e,t,r){t===void 0?t=0:t>e.length&&ce(),r===void 0?r=e.length-t:r>e.length-t&&ce(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ui.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ui?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ne extends ui{construct(e,t,r){return new Ne(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Ne(t)}static emptyPath(){return new Ne([])}}const mw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends ui{construct(e,t,r){return new st(e,t,r)}static isValidIdentifier(e){return mw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new st(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new G(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new G(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new G(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new G(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(t)}static emptyPath(){return new st([])}}/**
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
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(Ne.fromString(e))}static fromName(e){return new Z(Ne.fromString(e).popFirst(5))}static empty(){return new Z(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ne.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new Ne(e.slice()))}}function _w(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=de.fromTimestamp(r===1e9?new Ye(t+1,0):new Ye(t,r));return new er(s,Z.empty(),e)}function yw(n){return new er(n.readTime,n.key,-1)}class er{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new er(de.min(),Z.empty(),-1)}static max(){return new er(de.max(),Z.empty(),-1)}}function vw(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Z.comparator(n.documentKey,e.documentKey),t!==0?t:Ae(n.largestBatchId,e.largestBatchId))}/**
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
 */const Ew="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ww{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ri(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==Ew)throw n;J("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ce(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new B((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof B?t:B.resolve(t)}catch(t){return B.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):B.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):B.reject(t)}static resolve(e){return new B((t,r)=>{t(e)})}static reject(e){return new B((t,r)=>{r(e)})}static waitFor(e){return new B((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},c=>r(c))}),a=!0,i===s&&t()})}static or(e){let t=B.resolve(!1);for(const r of e)t=t.next(s=>s?B.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new B((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;t(e[h]).next(f=>{a[h]=f,++l,l===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new B((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function Tw(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Si(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Vc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Vc.oe=-1;function la(n){return n==null}function xo(n){return n===0&&1/n==-1/0}function Iw(n){return typeof n=="number"&&Number.isInteger(n)&&!xo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function cd(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function br(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function jp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Le{constructor(e,t){this.comparator=e,this.root=t||rt.EMPTY}insert(e,t){return new Le(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new Le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new oo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new oo(this.root,e,this.comparator,!1)}getReverseIterator(){return new oo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new oo(this.root,e,this.comparator,!0)}}class oo{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??rt.RED,this.left=s??rt.EMPTY,this.right=i??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new rt(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return rt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ce();const e=this.left.check();if(e!==this.right.check())throw ce();return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw ce()}get value(){throw ce()}get color(){throw ce()}get left(){throw ce()}get right(){throw ce()}copy(e,t,r,s,i){return this}insert(e,t,r){return new rt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class it{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ud(this.data.getIterator())}getIteratorFrom(e){return new ud(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof it)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new it(this.comparator);return t.data=e,t}}class ud{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class qp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new qp("Invalid base64 string: "+i):i}}(e);return new at(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new at(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const Aw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function tr(n){if(Se(!!n),typeof n=="string"){let e=0;const t=Aw.exec(n);if(Se(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(n.seconds),nanos:qe(n.nanos)}}function qe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Tr(n){return typeof n=="string"?at.fromBase64String(n):at.fromUint8Array(n)}/**
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
 */function ca(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Dc(n){const e=n.mapValue.fields.__previous_value__;return ca(e)?Dc(e):e}function hi(n){const e=tr(n.mapValue.fields.__local_write_time__.timestampValue);return new Ye(e.seconds,e.nanos)}/**
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
 */class bw{constructor(e,t,r,s,i,a,l,c,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class di{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new di("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof di&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ao={mapValue:{}};function Ir(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ca(n)?4:Sw(n)?9007199254740991:Rw(n)?10:11:ce()}function dn(n,e){if(n===e)return!0;const t=Ir(n);if(t!==Ir(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return hi(n).isEqual(hi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=tr(s.timestampValue),l=tr(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Tr(s.bytesValue).isEqual(Tr(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return qe(s.geoPointValue.latitude)===qe(i.geoPointValue.latitude)&&qe(s.geoPointValue.longitude)===qe(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return qe(s.integerValue)===qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=qe(s.doubleValue),l=qe(i.doubleValue);return a===l?xo(a)===xo(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return rs(n.arrayValue.values||[],e.arrayValue.values||[],dn);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(cd(a)!==cd(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!dn(a[c],l[c])))return!1;return!0}(n,e);default:return ce()}}function fi(n,e){return(n.values||[]).find(t=>dn(t,e))!==void 0}function ss(n,e){if(n===e)return 0;const t=Ir(n),r=Ir(e);if(t!==r)return Ae(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ae(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=qe(i.integerValue||i.doubleValue),c=qe(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return hd(n.timestampValue,e.timestampValue);case 4:return hd(hi(n),hi(e));case 5:return Ae(n.stringValue,e.stringValue);case 6:return function(i,a){const l=Tr(i),c=Tr(a);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=Ae(l[h],c[h]);if(f!==0)return f}return Ae(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=Ae(qe(i.latitude),qe(a.latitude));return l!==0?l:Ae(qe(i.longitude),qe(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return dd(n.arrayValue,e.arrayValue);case 10:return function(i,a){var l,c,h,f;const p=i.fields||{},_=a.fields||{},b=(l=p.value)===null||l===void 0?void 0:l.arrayValue,k=(c=_.value)===null||c===void 0?void 0:c.arrayValue,S=Ae(((h=b==null?void 0:b.values)===null||h===void 0?void 0:h.length)||0,((f=k==null?void 0:k.values)===null||f===void 0?void 0:f.length)||0);return S!==0?S:dd(b,k)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===ao.mapValue&&a===ao.mapValue)return 0;if(i===ao.mapValue)return 1;if(a===ao.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const _=Ae(c[p],f[p]);if(_!==0)return _;const b=ss(l[c[p]],h[f[p]]);if(b!==0)return b}return Ae(c.length,f.length)}(n.mapValue,e.mapValue);default:throw ce()}}function hd(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ae(n,e);const t=tr(n),r=tr(e),s=Ae(t.seconds,r.seconds);return s!==0?s:Ae(t.nanos,r.nanos)}function dd(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=ss(t[s],r[s]);if(i)return i}return Ae(t.length,r.length)}function is(n){return Hl(n)}function Hl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=tr(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Tr(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Z.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Hl(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Hl(t.fields[a])}`;return s+"}"}(n.mapValue):ce()}function Mo(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Kl(n){return!!n&&"integerValue"in n}function Nc(n){return!!n&&"arrayValue"in n}function fd(n){return!!n&&"nullValue"in n}function pd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function mo(n){return!!n&&"mapValue"in n}function Rw(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function ei(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return br(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ei(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ei(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Sw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Pt{constructor(e){this.value=e}static empty(){return new Pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!mo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ei(t)}setAll(e){let t=st.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=ei(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());mo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return dn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];mo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){br(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Pt(ei(this.value))}}function Wp(n){const e=[];return br(n.fields,(t,r)=>{const s=new st([t]);if(mo(r)){const i=Wp(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Nt(e)}/**
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
 */class yt{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new yt(e,0,de.min(),de.min(),de.min(),Pt.empty(),0)}static newFoundDocument(e,t,r,s){return new yt(e,1,t,de.min(),r,s,0)}static newNoDocument(e,t){return new yt(e,2,t,de.min(),de.min(),Pt.empty(),0)}static newUnknownDocument(e,t){return new yt(e,3,t,de.min(),de.min(),Pt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class os{constructor(e,t){this.position=e,this.inclusive=t}}function gd(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=Z.comparator(Z.fromName(a.referenceValue),t.key):r=ss(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function md(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!dn(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class pi{constructor(e,t="asc"){this.field=e,this.dir=t}}function Pw(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Hp{}class ze extends Hp{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new kw(e,t,r):t==="array-contains"?new Nw(e,r):t==="in"?new Ow(e,r):t==="not-in"?new xw(e,r):t==="array-contains-any"?new Mw(e,r):new ze(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Vw(e,r):new Dw(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ss(t,this.value)):t!==null&&Ir(this.value)===Ir(t)&&this.matchesComparison(ss(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gt extends Hp{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Gt(e,t)}matches(e){return Kp(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Kp(n){return n.op==="and"}function zp(n){return Cw(n)&&Kp(n)}function Cw(n){for(const e of n.filters)if(e instanceof Gt)return!1;return!0}function zl(n){if(n instanceof ze)return n.field.canonicalString()+n.op.toString()+is(n.value);if(zp(n))return n.filters.map(e=>zl(e)).join(",");{const e=n.filters.map(t=>zl(t)).join(",");return`${n.op}(${e})`}}function Gp(n,e){return n instanceof ze?function(r,s){return s instanceof ze&&r.op===s.op&&r.field.isEqual(s.field)&&dn(r.value,s.value)}(n,e):n instanceof Gt?function(r,s){return s instanceof Gt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Gp(a,s.filters[l]),!0):!1}(n,e):void ce()}function Qp(n){return n instanceof ze?function(t){return`${t.field.canonicalString()} ${t.op} ${is(t.value)}`}(n):n instanceof Gt?function(t){return t.op.toString()+" {"+t.getFilters().map(Qp).join(" ,")+"}"}(n):"Filter"}class kw extends ze{constructor(e,t,r){super(e,t,r),this.key=Z.fromName(r.referenceValue)}matches(e){const t=Z.comparator(e.key,this.key);return this.matchesComparison(t)}}class Vw extends ze{constructor(e,t){super(e,"in",t),this.keys=Yp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Dw extends ze{constructor(e,t){super(e,"not-in",t),this.keys=Yp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Yp(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>Z.fromName(r.referenceValue))}class Nw extends ze{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Nc(t)&&fi(t.arrayValue,this.value)}}class Ow extends ze{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&fi(this.value.arrayValue,t)}}class xw extends ze{constructor(e,t){super(e,"not-in",t)}matches(e){if(fi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!fi(this.value.arrayValue,t)}}class Mw extends ze{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Nc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>fi(this.value.arrayValue,r))}}/**
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
 */class Lw{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.ue=null}}function _d(n,e=null,t=[],r=[],s=null,i=null,a=null){return new Lw(n,e,t,r,s,i,a)}function Oc(n){const e=fe(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>zl(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),la(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>is(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>is(r)).join(",")),e.ue=t}return e.ue}function xc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Pw(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Gp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!md(n.startAt,e.startAt)&&md(n.endAt,e.endAt)}function Gl(n){return Z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Rr{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Fw(n,e,t,r,s,i,a,l){return new Rr(n,e,t,r,s,i,a,l)}function ua(n){return new Rr(n)}function yd(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Mc(n){return n.collectionGroup!==null}function Gr(n){const e=fe(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new it(st.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new pi(i,r))}),t.has(st.keyField().canonicalString())||e.ce.push(new pi(st.keyField(),r))}return e.ce}function sn(n){const e=fe(n);return e.le||(e.le=Uw(e,Gr(n))),e.le}function Uw(n,e){if(n.limitType==="F")return _d(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new pi(s.field,i)});const t=n.endAt?new os(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new os(n.startAt.position,n.startAt.inclusive):null;return _d(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ql(n,e){const t=n.filters.concat([e]);return new Rr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Lo(n,e,t){return new Rr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ha(n,e){return xc(sn(n),sn(e))&&n.limitType===e.limitType}function Jp(n){return`${Oc(sn(n))}|lt:${n.limitType}`}function Lr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Qp(s)).join(", ")}]`),la(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>is(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>is(s)).join(",")),`Target(${r})`}(sn(n))}; limitType=${n.limitType})`}function da(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Z.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Gr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=gd(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,Gr(r),s)||r.endAt&&!function(a,l,c){const h=gd(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,Gr(r),s))}(n,e)}function Bw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Xp(n){return(e,t)=>{let r=!1;for(const s of Gr(n)){const i=$w(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function $w(n,e,t){const r=n.field.isKeyField()?Z.comparator(e.key,t.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?ss(c,h):ce()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ce()}}/**
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
 */class fs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){br(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return jp(this.inner)}size(){return this.innerSize}}/**
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
 */const jw=new Le(Z.comparator);function Vn(){return jw}const Zp=new Le(Z.comparator);function qs(...n){let e=Zp;for(const t of n)e=e.insert(t.key,t);return e}function eg(n){let e=Zp;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function mr(){return ti()}function tg(){return ti()}function ti(){return new fs(n=>n.toString(),(n,e)=>n.isEqual(e))}const qw=new Le(Z.comparator),Ww=new it(Z.comparator);function ye(...n){let e=Ww;for(const t of n)e=e.add(t);return e}const Hw=new it(Ae);function Kw(){return Hw}/**
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
 */function Lc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xo(e)?"-0":e}}function ng(n){return{integerValue:""+n}}function zw(n,e){return Iw(e)?ng(e):Lc(n,e)}/**
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
 */class fa{constructor(){this._=void 0}}function Gw(n,e,t){return n instanceof gi?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ca(i)&&(i=Dc(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):n instanceof mi?sg(n,e):n instanceof _i?ig(n,e):function(s,i){const a=rg(s,i),l=vd(a)+vd(s.Pe);return Kl(a)&&Kl(s.Pe)?ng(l):Lc(s.serializer,l)}(n,e)}function Qw(n,e,t){return n instanceof mi?sg(n,e):n instanceof _i?ig(n,e):t}function rg(n,e){return n instanceof Fo?function(r){return Kl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class gi extends fa{}class mi extends fa{constructor(e){super(),this.elements=e}}function sg(n,e){const t=og(e);for(const r of n.elements)t.some(s=>dn(s,r))||t.push(r);return{arrayValue:{values:t}}}class _i extends fa{constructor(e){super(),this.elements=e}}function ig(n,e){let t=og(e);for(const r of n.elements)t=t.filter(s=>!dn(s,r));return{arrayValue:{values:t}}}class Fo extends fa{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function vd(n){return qe(n.integerValue||n.doubleValue)}function og(n){return Nc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Yw{constructor(e,t){this.field=e,this.transform=t}}function Jw(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof mi&&s instanceof mi||r instanceof _i&&s instanceof _i?rs(r.elements,s.elements,dn):r instanceof Fo&&s instanceof Fo?dn(r.Pe,s.Pe):r instanceof gi&&s instanceof gi}(n.transform,e.transform)}class Xw{constructor(e,t){this.version=e,this.transformResults=t}}class Ct{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ct}static exists(e){return new Ct(void 0,e)}static updateTime(e){return new Ct(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _o(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class pa{}function ag(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ga(n.key,Ct.none()):new Pi(n.key,n.data,Ct.none());{const t=n.data,r=Pt.empty();let s=new it(st.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new sr(n.key,r,new Nt(s.toArray()),Ct.none())}}function Zw(n,e,t){n instanceof Pi?function(s,i,a){const l=s.value.clone(),c=wd(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof sr?function(s,i,a){if(!_o(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=wd(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(lg(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function ni(n,e,t,r){return n instanceof Pi?function(i,a,l,c){if(!_o(i.precondition,a))return l;const h=i.value.clone(),f=Td(i.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof sr?function(i,a,l,c){if(!_o(i.precondition,a))return l;const h=Td(i.fieldTransforms,c,a),f=a.data;return f.setAll(lg(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,a,l){return _o(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function eT(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=rg(r.transform,s||null);i!=null&&(t===null&&(t=Pt.empty()),t.set(r.field,i))}return t||null}function Ed(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&rs(r,s,(i,a)=>Jw(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Pi extends pa{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class sr extends pa{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function lg(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function wd(n,e,t){const r=new Map;Se(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,Qw(a,l,t[s]))}return r}function Td(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,Gw(i,a,e))}return r}class ga extends pa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tT extends pa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class nT{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Zw(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ni(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ni(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=tg();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const c=ag(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(de.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ye())}isEqual(e){return this.batchId===e.batchId&&rs(this.mutations,e.mutations,(t,r)=>Ed(t,r))&&rs(this.baseMutations,e.baseMutations,(t,r)=>Ed(t,r))}}class Fc{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Se(e.mutations.length===r.length);let s=function(){return qw}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Fc(e,t,r,s)}}/**
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
 */class rT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class sT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var He,Ee;function iT(n){switch(n){default:return ce();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function cg(n){if(n===void 0)return kn("GRPC error has no .code"),N.UNKNOWN;switch(n){case He.OK:return N.OK;case He.CANCELLED:return N.CANCELLED;case He.UNKNOWN:return N.UNKNOWN;case He.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case He.INTERNAL:return N.INTERNAL;case He.UNAVAILABLE:return N.UNAVAILABLE;case He.UNAUTHENTICATED:return N.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case He.NOT_FOUND:return N.NOT_FOUND;case He.ALREADY_EXISTS:return N.ALREADY_EXISTS;case He.PERMISSION_DENIED:return N.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case He.ABORTED:return N.ABORTED;case He.OUT_OF_RANGE:return N.OUT_OF_RANGE;case He.UNIMPLEMENTED:return N.UNIMPLEMENTED;case He.DATA_LOSS:return N.DATA_LOSS;default:return ce()}}(Ee=He||(He={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function oT(){return new TextEncoder}/**
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
 */const aT=new vr([4294967295,4294967295],0);function Id(n){const e=oT().encode(n),t=new Op;return t.update(e),new Uint8Array(t.digest())}function Ad(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new vr([t,r],0),new vr([s,i],0)]}class Uc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ws(`Invalid padding: ${t}`);if(r<0)throw new Ws(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ws(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ws(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=vr.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(vr.fromNumber(r)));return s.compare(aT)===1&&(s=new vr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Id(e),[r,s]=Ad(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Uc(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=Id(e),[r,s]=Ad(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ws extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ma{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Ci.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ma(de.min(),s,new Le(Ae),Vn(),ye())}}class Ci{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ci(r,t,ye(),ye(),ye())}}/**
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
 */class yo{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class ug{constructor(e,t){this.targetId=e,this.me=t}}class hg{constructor(e,t,r=at.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class bd{constructor(){this.fe=0,this.ge=Sd(),this.pe=at.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ye(),t=ye(),r=ye();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:ce()}}),new Ci(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Sd()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Se(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class lT{constructor(e){this.Le=e,this.Be=new Map,this.ke=Vn(),this.qe=Rd(),this.Qe=new Le(Ae)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:ce()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(Gl(i))if(r===0){const a=new Z(i.path);this.Ue(t,a,yt.newNoDocument(a,de.min()))}else Se(r===1);else{const a=this.Ye(t);if(a!==r){const l=this.Ze(e),c=l?this.Xe(l,e,a):1;if(c!==0){this.je(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=Tr(r).toUint8Array()}catch(c){if(c instanceof qp)return ns("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Uc(a,s,i)}catch(c){return ns(c instanceof Ws?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,a)=>{const l=this.Je(a);if(l){if(i.current&&Gl(l.target)){const c=new Z(l.target.path);this.ke.get(c)!==null||this.it(a,c)||this.Ue(a,c,yt.newNoDocument(c,e))}i.be&&(t.set(a,i.ve()),i.Ce())}});let r=ye();this.qe.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new ma(e,t,this.Qe,this.ke,r);return this.ke=Vn(),this.qe=Rd(),this.Qe=new Le(Ae),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new bd,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new it(Ae),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||J("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new bd),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Rd(){return new Le(Z.comparator)}function Sd(){return new Le(Z.comparator)}const cT={asc:"ASCENDING",desc:"DESCENDING"},uT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},hT={and:"AND",or:"OR"};class dT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Yl(n,e){return n.useProto3Json||la(e)?e:{value:e}}function Uo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dg(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function fT(n,e){return Uo(n,e.toTimestamp())}function on(n){return Se(!!n),de.fromTimestamp(function(t){const r=tr(t);return new Ye(r.seconds,r.nanos)}(n))}function Bc(n,e){return Jl(n,e).canonicalString()}function Jl(n,e){const t=function(s){return new Ne(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function fg(n){const e=Ne.fromString(n);return Se(yg(e)),e}function Xl(n,e){return Bc(n.databaseId,e.path)}function dl(n,e){const t=fg(e);if(t.get(1)!==n.databaseId.projectId)throw new G(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new G(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Z(gg(t))}function pg(n,e){return Bc(n.databaseId,e)}function pT(n){const e=fg(n);return e.length===4?Ne.emptyPath():gg(e)}function Zl(n){return new Ne(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function gg(n){return Se(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Pd(n,e,t){return{name:Xl(n,e),fields:t.value.mapValue.fields}}function gT(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ce()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Se(f===void 0||typeof f=="string"),at.fromBase64String(f||"")):(Se(f===void 0||f instanceof Buffer||f instanceof Uint8Array),at.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?N.UNKNOWN:cg(h.code);return new G(f,h.message||"")}(a);t=new hg(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=dl(n,r.document.name),i=on(r.document.updateTime),a=r.document.createTime?on(r.document.createTime):de.min(),l=new Pt({mapValue:{fields:r.document.fields}}),c=yt.newFoundDocument(s,i,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];t=new yo(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=dl(n,r.document),i=r.readTime?on(r.readTime):de.min(),a=yt.newNoDocument(s,i),l=r.removedTargetIds||[];t=new yo([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=dl(n,r.document),i=r.removedTargetIds||[];t=new yo([],i,s,null)}else{if(!("filter"in e))return ce();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new sT(s,i),l=r.targetId;t=new ug(l,a)}}return t}function mT(n,e){let t;if(e instanceof Pi)t={update:Pd(n,e.key,e.value)};else if(e instanceof ga)t={delete:Xl(n,e.key)};else if(e instanceof sr)t={update:Pd(n,e.key,e.data),updateMask:bT(e.fieldMask)};else{if(!(e instanceof tT))return ce();t={verify:Xl(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof gi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof mi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof _i)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Fo)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw ce()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:fT(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ce()}(n,e.precondition)),t}function _T(n,e){return n&&n.length>0?(Se(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?on(s.updateTime):on(i);return a.isEqual(de.min())&&(a=on(i)),new Xw(a,s.transformResults||[])}(t,e))):[]}function yT(n,e){return{documents:[pg(n,e.path)]}}function vT(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=pg(n,s);const i=function(h){if(h.length!==0)return _g(Gt.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(_){return{field:Fr(_.field),direction:TT(_.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Yl(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:s}}function ET(n){let e=pT(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Se(r===1);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(p){const _=mg(p);return _ instanceof Gt&&zp(_)?_.getFilters():[_]}(t.where));let a=[];t.orderBy&&(a=function(p){return p.map(_=>function(k){return new pi(Ur(k.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(_))}(t.orderBy));let l=null;t.limit&&(l=function(p){let _;return _=typeof p=="object"?p.value:p,la(_)?null:_}(t.limit));let c=null;t.startAt&&(c=function(p){const _=!!p.before,b=p.values||[];return new os(b,_)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const _=!p.before,b=p.values||[];return new os(b,_)}(t.endAt)),Fw(e,s,a,i,l,"F",c,h)}function wT(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function mg(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Ur(t.unaryFilter.field);return ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ur(t.unaryFilter.field);return ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ur(t.unaryFilter.field);return ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ur(t.unaryFilter.field);return ze.create(a,"!=",{nullValue:"NULL_VALUE"});default:return ce()}}(n):n.fieldFilter!==void 0?function(t){return ze.create(Ur(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ce()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Gt.create(t.compositeFilter.filters.map(r=>mg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ce()}}(t.compositeFilter.op))}(n):ce()}function TT(n){return cT[n]}function IT(n){return uT[n]}function AT(n){return hT[n]}function Fr(n){return{fieldPath:n.canonicalString()}}function Ur(n){return st.fromServerFormat(n.fieldPath)}function _g(n){return n instanceof ze?function(t){if(t.op==="=="){if(pd(t.value))return{unaryFilter:{field:Fr(t.field),op:"IS_NAN"}};if(fd(t.value))return{unaryFilter:{field:Fr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(pd(t.value))return{unaryFilter:{field:Fr(t.field),op:"IS_NOT_NAN"}};if(fd(t.value))return{unaryFilter:{field:Fr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fr(t.field),op:IT(t.op),value:t.value}}}(n):n instanceof Gt?function(t){const r=t.getFilters().map(s=>_g(s));return r.length===1?r[0]:{compositeFilter:{op:AT(t.op),filters:r}}}(n):ce()}function bT(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function yg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class zn{constructor(e,t,r,s,i=de.min(),a=de.min(),l=at.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new zn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class RT{constructor(e){this.ct=e}}function ST(n){const e=ET({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Lo(e,e.limit,"L"):e}/**
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
 */class PT{constructor(){this.un=new CT}addToCollectionParentIndex(e,t){return this.un.add(t),B.resolve()}getCollectionParents(e,t){return B.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return B.resolve()}deleteFieldIndex(e,t){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,t){return B.resolve()}getDocumentsMatchingTarget(e,t){return B.resolve(null)}getIndexType(e,t){return B.resolve(0)}getFieldIndexes(e,t){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,t){return B.resolve(er.min())}getMinOffsetFromCollectionGroup(e,t){return B.resolve(er.min())}updateCollectionGroup(e,t,r){return B.resolve()}updateIndexEntries(e,t){return B.resolve()}}class CT{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new it(Ne.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new it(Ne.comparator)).toArray()}}/**
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
 */class kT{constructor(){this.changes=new fs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,yt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?B.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class VT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class DT{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&ni(r.mutation,s,Nt.empty(),Ye.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ye()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ye()){const s=mr();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=qs();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=mr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ye()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=Vn();const a=ti(),l=function(){return ti()}();return t.forEach((c,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof sr)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),ni(f.mutation,h,f.mutation.getFieldMask(),Ye.now())):a.set(h.key,Nt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var p;return l.set(h,new VT(f,(p=a.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,t){const r=ti();let s=new Le((a,l)=>a-l),i=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let f=r.get(c)||Nt.empty();f=l.applyToLocalView(h,f),r.set(c,f);const p=(s.get(l.batchId)||ye()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,p=tg();f.forEach(_=>{if(!i.has(_)){const b=ag(t.get(_),r.get(_));b!==null&&p.set(_,b),i=i.add(_)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return B.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return Z.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Mc(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):B.resolve(mr());let l=-1,c=i;return a.next(h=>B.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?B.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{c=c.insert(f,_)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,ye())).next(f=>({batchId:l,changes:eg(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Z(t)).next(r=>{let s=qs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=qs();return this.indexManager.getCollectionParents(e,i).next(l=>B.forEach(l,c=>{const h=function(p,_){return new Rr(_,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,_)=>{a=a.insert(p,_)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,yt.newInvalidDocument(f)))});let l=qs();return a.forEach((c,h)=>{const f=i.get(c);f!==void 0&&ni(f.mutation,h,Nt.empty(),Ye.now()),da(t,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class NT{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return B.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:on(s.createTime)}}(t)),B.resolve()}getNamedQuery(e,t){return B.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:ST(s.bundledQuery),readTime:on(s.readTime)}}(t)),B.resolve()}}/**
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
 */class OT{constructor(){this.overlays=new Le(Z.comparator),this.Ir=new Map}getOverlay(e,t){return B.resolve(this.overlays.get(t))}getOverlays(e,t){const r=mr();return B.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),B.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),B.resolve()}getOverlaysForCollection(e,t,r){const s=mr(),i=t.length+1,a=new Z(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return B.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Le((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=mr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=mr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return B.resolve(l)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new rT(t,r));let i=this.Ir.get(t);i===void 0&&(i=ye(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
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
 */class xT{constructor(){this.sessionToken=at.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,B.resolve()}}/**
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
 */class $c{constructor(){this.Tr=new it(Xe.Er),this.dr=new it(Xe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new Xe(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new Xe(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new Z(new Ne([])),r=new Xe(t,e),s=new Xe(t,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new Z(new Ne([])),r=new Xe(t,e),s=new Xe(t,e+1);let i=ye();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Xe(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return Z.comparator(e.key,t.key)||Ae(e.wr,t.wr)}static Ar(e,t){return Ae(e.wr,t.wr)||Z.comparator(e.key,t.key)}}/**
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
 */class MT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new it(Xe.Er)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new nT(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.br=this.br.add(new Xe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return B.resolve(a)}lookupMutationBatch(e,t){return B.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return B.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Xe(t,0),s=new Xe(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const l=this.Dr(a.wr);i.push(l)}),B.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new it(Ae);return t.forEach(s=>{const i=new Xe(s,0),a=new Xe(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],l=>{r=r.add(l.wr)})}),B.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;Z.isDocumentKey(i)||(i=i.child(""));const a=new Xe(new Z(i),0);let l=new it(Ae);return this.br.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.wr)),!0)},a),B.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Se(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return B.forEach(t.mutations,s=>{const i=new Xe(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new Xe(t,0),s=this.br.firstAfterOrEqual(r);return B.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class LT{constructor(e){this.Mr=e,this.docs=function(){return new Le(Z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return B.resolve(r?r.document.mutableCopy():yt.newInvalidDocument(t))}getEntries(e,t){let r=Vn();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():yt.newInvalidDocument(s))}),B.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Vn();const a=t.path,l=new Z(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||vw(yw(f),r)<=0||(s.has(f.key)||da(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return B.resolve(i)}getAllFromCollectionGroup(e,t,r,s){ce()}Or(e,t){return B.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new FT(this)}getSize(e){return B.resolve(this.size)}}class FT extends kT{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),B.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class UT{constructor(e){this.persistence=e,this.Nr=new fs(t=>Oc(t),xc),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.Lr=0,this.Br=new $c,this.targetCount=0,this.kr=as.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),B.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new as(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,B.resolve()}updateTargetData(e,t){return this.Kn(t),B.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),B.waitFor(i).next(()=>s)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return B.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),B.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),B.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),B.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return B.resolve(r)}containsKey(e,t){return B.resolve(this.Br.containsKey(t))}}/**
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
 */class BT{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Vc(0),this.Kr=!1,this.Kr=!0,this.$r=new xT,this.referenceDelegate=e(this),this.Ur=new UT(this),this.indexManager=new PT,this.remoteDocumentCache=function(s){return new LT(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new RT(t),this.Gr=new NT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new OT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new MT(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){J("MemoryPersistence","Starting transaction:",e);const s=new $T(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return B.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class $T extends ww{constructor(e){super(),this.currentSequenceNumber=e}}class jc{constructor(e){this.persistence=e,this.Jr=new $c,this.Yr=null}static Zr(e){return new jc(e)}get Xr(){if(this.Yr)return this.Yr;throw ce()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),B.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),B.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.Xr,r=>{const s=Z.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,de.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return B.or([()=>B.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class qc{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=ye(),s=ye();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new qc(e,t.fromCache,r,s)}}/**
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
 */class jT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class qT{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Hv()?8:Tw(wt())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new jT;return this.Xi(e,t,a).next(l=>{if(i.result=l,this.zi)return this.es(e,t,a,l.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(xs()<=ve.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",Lr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),B.resolve()):(xs()<=ve.DEBUG&&J("QueryEngine","Query:",Lr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(xs()<=ve.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",Lr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,sn(t))):B.resolve())}Yi(e,t){if(yd(t))return B.resolve(null);let r=sn(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Lo(t,null,"F"),r=sn(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=ye(...i);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.ts(t,l);return this.ns(t,h,a,c.readTime)?this.Yi(e,Lo(t,null,"F")):this.rs(e,h,t,c)}))})))}Zi(e,t,r,s){return yd(t)||s.isEqual(de.min())?B.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(t,i);return this.ns(t,a,r,s)?B.resolve(null):(xs()<=ve.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Lr(t)),this.rs(e,a,t,_w(s,-1)).next(l=>l))})}ts(e,t){let r=new it(Xp(e));return t.forEach((s,i)=>{da(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return xs()<=ve.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",Lr(t)),this.Ji.getDocumentsMatchingQuery(e,t,er.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */class WT{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new Le(Ae),this._s=new fs(i=>Oc(i),xc),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new DT(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function HT(n,e,t,r){return new WT(n,e,t,r)}async function vg(n,e){const t=fe(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=ye();for(const h of s){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(r,c).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:l}))})})}function KT(n,e){const t=fe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const p=h.batch,_=p.keys();let b=B.resolve();return _.forEach(k=>{b=b.next(()=>f.getEntry(c,k)).next(S=>{const C=h.docVersions.get(k);Se(C!==null),S.version.compareTo(C)<0&&(p.applyToRemoteDocument(S,h),S.isValidDocument()&&(S.setReadTime(h.commitVersion),f.addEntry(S)))})}),b.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=ye();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Eg(n){const e=fe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function zT(n,e){const t=fe(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const l=[];e.targetChanges.forEach((f,p)=>{const _=s.get(p);if(!_)return;l.push(t.Ur.removeMatchingKeys(i,f.removedDocuments,p).next(()=>t.Ur.addMatchingKeys(i,f.addedDocuments,p)));let b=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?b=b.withResumeToken(at.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):f.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(f.resumeToken,r)),s=s.insert(p,b),function(S,C,$){return S.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(_,b,f)&&l.push(t.Ur.updateTargetData(i,b))});let c=Vn(),h=ye();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(GT(i,a,e.documentUpdates).next(f=>{c=f.Ps,h=f.Is})),!r.isEqual(de.min())){const f=t.Ur.getLastRemoteSnapshotVersion(i).next(p=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return B.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(t.os=s,i))}function GT(n,e,t){let r=ye(),s=ye();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Vn();return t.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(de.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):J("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Ps:a,Is:s}})}function QT(n,e){const t=fe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function YT(n,e){const t=fe(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,B.resolve(s)):t.Ur.allocateTargetId(r).next(a=>(s=new zn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function ec(n,e,t){const r=fe(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Si(a))throw a;J("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Cd(n,e,t){const r=fe(n);let s=de.min(),i=ye();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,f){const p=fe(c),_=p._s.get(f);return _!==void 0?B.resolve(p.os.get(_)):p.Ur.getTargetData(h,f)}(r,a,sn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?s:de.min(),t?i:ye())).next(l=>(JT(r,Bw(e),l),{documents:l,Ts:i})))}function JT(n,e,t){let r=n.us.get(e)||de.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}class kd{constructor(){this.activeTargetIds=Kw()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class XT{constructor(){this.so=new kd,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new kd,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ZT{_o(e){}shutdown(){}}/**
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
 */class Vd{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){J("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){J("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const eI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class tI{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const pt="WebChannelConnection";class nI extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,a){const l=fl(),c=this.xo(t,r.toUriEncodedString());J("RestConnection",`Sending RPC '${t}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,a),this.No(t,c,h,s).then(f=>(J("RestConnection",`Received RPC '${t}' ${l}: `,f),f),f=>{throw ns("RestConnection",`RPC '${t}' ${l} failed with error: `,f,"url: ",c,"request:",s),f})}Lo(t,r,s,i,a,l){return this.Mo(t,r,s,i,a)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ds}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}xo(t,r){const s=eI[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=fl();return new Promise((a,l)=>{const c=new xp;c.setWithCredentials(!0),c.listenOnce(Mp.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case go.NO_ERROR:const f=c.getResponseJson();J(pt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),a(f);break;case go.TIMEOUT:J(pt,`RPC '${e}' ${i} timed out`),l(new G(N.DEADLINE_EXCEEDED,"Request time out"));break;case go.HTTP_ERROR:const p=c.getStatus();if(J(pt,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let _=c.getResponseJson();Array.isArray(_)&&(_=_[0]);const b=_==null?void 0:_.error;if(b&&b.status&&b.message){const k=function(C){const $=C.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf($)>=0?$:N.UNKNOWN}(b.status);l(new G(k,b.message))}else l(new G(N.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new G(N.UNAVAILABLE,"Connection failed."));break;default:ce()}}finally{J(pt,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);J(pt,`RPC '${e}' ${i} sending request:`,s),c.send(t,"POST",h,r,15)})}Bo(e,t,r){const s=fl(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Up(),l=Fp(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const f=i.join("");J(pt,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=a.createWebChannel(f,c);let _=!1,b=!1;const k=new tI({Io:C=>{b?J(pt,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(_||(J(pt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),_=!0),J(pt,`RPC '${e}' stream ${s} sending:`,C),p.send(C))},To:()=>p.close()}),S=(C,$,F)=>{C.listen($,H=>{try{F(H)}catch(q){setTimeout(()=>{throw q},0)}})};return S(p,js.EventType.OPEN,()=>{b||(J(pt,`RPC '${e}' stream ${s} transport opened.`),k.yo())}),S(p,js.EventType.CLOSE,()=>{b||(b=!0,J(pt,`RPC '${e}' stream ${s} transport closed`),k.So())}),S(p,js.EventType.ERROR,C=>{b||(b=!0,ns(pt,`RPC '${e}' stream ${s} transport errored:`,C),k.So(new G(N.UNAVAILABLE,"The operation could not be completed")))}),S(p,js.EventType.MESSAGE,C=>{var $;if(!b){const F=C.data[0];Se(!!F);const H=F,q=H.error||(($=H[0])===null||$===void 0?void 0:$.error);if(q){J(pt,`RPC '${e}' stream ${s} received error:`,q);const le=q.status;let oe=function(y){const I=He[y];if(I!==void 0)return cg(I)}(le),T=q.message;oe===void 0&&(oe=N.INTERNAL,T="Unknown error status: "+le+" with message "+q.message),b=!0,k.So(new G(oe,T)),p.close()}else J(pt,`RPC '${e}' stream ${s} received:`,F),k.bo(F)}}),S(l,Lp.STAT_EVENT,C=>{C.stat===Wl.PROXY?J(pt,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===Wl.NOPROXY&&J(pt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.wo()},0),k}}function pl(){return typeof document<"u"?document:null}/**
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
 */function _a(n){return new dT(n,!0)}/**
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
 */class wg{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&J("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Tg{constructor(e,t,r,s,i,a,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new wg(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(kn(t.toString()),kn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new G(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return J("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(J("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rI extends Tg{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=gT(this.serializer,e),r=function(i){if(!("targetChange"in i))return de.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?de.min():a.readTime?on(a.readTime):de.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Zl(this.serializer),t.addTarget=function(i,a){let l;const c=a.target;if(l=Gl(c)?{documents:yT(i,c)}:{query:vT(i,c)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=dg(i,a.resumeToken);const h=Yl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(de.min())>0){l.readTime=Uo(i,a.snapshotVersion.toTimestamp());const h=Yl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=wT(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Zl(this.serializer),t.removeTarget=e,this.a_(t)}}class sI extends Tg{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Se(!!e.streamToken),this.lastStreamToken=e.streamToken,Se(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=_T(e.writeResults,e.commitTime),r=on(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Zl(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>mT(this.serializer,r))};this.a_(t)}}/**
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
 */class iI extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new G(N.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,Jl(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new G(N.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,Jl(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new G(N.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class oI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(kn(t),this.D_=!1):J("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class aI{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{Sr(this)&&(J("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=fe(c);h.L_.add(4),await ki(h),h.q_.set("Unknown"),h.L_.delete(4),await ya(h)}(this))})}),this.q_=new oI(r,s)}}async function ya(n){if(Sr(n))for(const e of n.B_)await e(!0)}async function ki(n){for(const e of n.B_)await e(!1)}function Ig(n,e){const t=fe(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),zc(t)?Kc(t):ps(t).r_()&&Hc(t,e))}function Wc(n,e){const t=fe(n),r=ps(t);t.N_.delete(e),r.r_()&&Ag(t,e),t.N_.size===0&&(r.r_()?r.o_():Sr(t)&&t.q_.set("Unknown"))}function Hc(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ps(n).A_(e)}function Ag(n,e){n.Q_.xe(e),ps(n).R_(e)}function Kc(n){n.Q_=new lT({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),ps(n).start(),n.q_.v_()}function zc(n){return Sr(n)&&!ps(n).n_()&&n.N_.size>0}function Sr(n){return fe(n).L_.size===0}function bg(n){n.Q_=void 0}async function lI(n){n.q_.set("Online")}async function cI(n){n.N_.forEach((e,t)=>{Hc(n,e)})}async function uI(n,e){bg(n),zc(n)?(n.q_.M_(e),Kc(n)):n.q_.set("Unknown")}async function hI(n,e,t){if(n.q_.set("Online"),e instanceof hg&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.N_.delete(l),s.Q_.removeTarget(l))}(n,e)}catch(r){J("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Bo(n,r)}else if(e instanceof yo?n.Q_.Ke(e):e instanceof ug?n.Q_.He(e):n.Q_.We(e),!t.isEqual(de.min()))try{const r=await Eg(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.Q_.rt(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const f=i.N_.get(c);if(!f)return;i.N_.set(c,f.withResumeToken(at.EMPTY_BYTE_STRING,f.snapshotVersion)),Ag(i,c);const p=new zn(f.target,c,h,f.sequenceNumber);Hc(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){J("RemoteStore","Failed to raise snapshot:",r),await Bo(n,r)}}async function Bo(n,e,t){if(!Si(e))throw e;n.L_.add(1),await ki(n),n.q_.set("Offline"),t||(t=()=>Eg(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{J("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await ya(n)})}function Rg(n,e){return e().catch(t=>Bo(n,t,e))}async function va(n){const e=fe(n),t=nr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;dI(e);)try{const s=await QT(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,fI(e,s)}catch(s){await Bo(e,s)}Sg(e)&&Pg(e)}function dI(n){return Sr(n)&&n.O_.length<10}function fI(n,e){n.O_.push(e);const t=nr(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Sg(n){return Sr(n)&&!nr(n).n_()&&n.O_.length>0}function Pg(n){nr(n).start()}async function pI(n){nr(n).p_()}async function gI(n){const e=nr(n);for(const t of n.O_)e.m_(t.mutations)}async function mI(n,e,t){const r=n.O_.shift(),s=Fc.from(r,e,t);await Rg(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await va(n)}async function _I(n,e){e&&nr(n).V_&&await async function(r,s){if(function(a){return iT(a)&&a!==N.ABORTED}(s.code)){const i=r.O_.shift();nr(r).s_(),await Rg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await va(r)}}(n,e),Sg(n)&&Pg(n)}async function Dd(n,e){const t=fe(n);t.asyncQueue.verifyOperationInProgress(),J("RemoteStore","RemoteStore received new credentials");const r=Sr(t);t.L_.add(3),await ki(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await ya(t)}async function yI(n,e){const t=fe(n);e?(t.L_.delete(2),await ya(t)):e||(t.L_.add(2),await ki(t),t.q_.set("Unknown"))}function ps(n){return n.K_||(n.K_=function(t,r,s){const i=fe(t);return i.w_(),new rI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:lI.bind(null,n),Ro:cI.bind(null,n),mo:uI.bind(null,n),d_:hI.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),zc(n)?Kc(n):n.q_.set("Unknown")):(await n.K_.stop(),bg(n))})),n.K_}function nr(n){return n.U_||(n.U_=function(t,r,s){const i=fe(t);return i.w_(),new sI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:pI.bind(null,n),mo:_I.bind(null,n),f_:gI.bind(null,n),g_:mI.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await va(n)):(await n.U_.stop(),n.O_.length>0&&(J("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class Gc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Sn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new Gc(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qc(n,e){if(kn("AsyncQueue",`${e}: ${n}`),Si(n))return new G(N.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Qr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||Z.comparator(t.key,r.key):(t,r)=>Z.comparator(t.key,r.key),this.keyedMap=qs(),this.sortedSet=new Le(this.comparator)}static emptySet(e){return new Qr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Qr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Nd{constructor(){this.W_=new Le(Z.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):ce():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class ls{constructor(e,t,r,s,i,a,l,c,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new ls(e,t,Qr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ha(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class vI{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class EI{constructor(){this.queries=Od(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=fe(t),i=s.queries;s.queries=Od(),i.forEach((a,l)=>{for(const c of l.j_)c.onError(r)})})(this,new G(N.ABORTED,"Firestore shutting down"))}}function Od(){return new fs(n=>Jp(n),ha)}async function Yc(n,e){const t=fe(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new vI,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=Qc(a,`Initialization of query '${Lr(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&Xc(t)}async function Jc(n,e){const t=fe(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function wI(n,e){const t=fe(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.j_)l.X_(s)&&(r=!0);a.z_=s}}r&&Xc(t)}function TI(n,e,t){const r=fe(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function Xc(n){n.Y_.forEach(e=>{e.next()})}var tc,xd;(xd=tc||(tc={})).ea="default",xd.Cache="cache";class Zc{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ls(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=ls.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==tc.Cache}}/**
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
 */class Cg{constructor(e){this.key=e}}class kg{constructor(e){this.key=e}}class II{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ye(),this.mutatedKeys=ye(),this.Aa=Xp(e),this.Ra=new Qr(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Nd,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const _=s.get(f),b=da(this.query,p)?p:null,k=!!_&&this.mutatedKeys.has(_.key),S=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let C=!1;_&&b?_.data.isEqual(b.data)?k!==S&&(r.track({type:3,doc:b}),C=!0):this.ga(_,b)||(r.track({type:2,doc:b}),C=!0,(c&&this.Aa(b,c)>0||h&&this.Aa(b,h)<0)&&(l=!0)):!_&&b?(r.track({type:0,doc:b}),C=!0):_&&!b&&(r.track({type:1,doc:_}),C=!0,(c||h)&&(l=!0)),C&&(b?(a=a.add(b),i=S?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:l,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,p)=>function(b,k){const S=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce()}};return S(b)-S(k)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),s=s!=null&&s;const l=t&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,h=c!==this.Ea;return this.Ea=c,a.length!==0||h?{snapshot:new ls(this.query,e.Ra,i,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Nd,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ye(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new kg(r))}),this.da.forEach(r=>{e.has(r)||t.push(new Cg(r))}),t}ba(e){this.Ta=e.Ts,this.da=ye();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return ls.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class AI{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class bI{constructor(e){this.key=e,this.va=!1}}class RI{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new fs(l=>Jp(l),ha),this.Ma=new Map,this.xa=new Set,this.Oa=new Le(Z.comparator),this.Na=new Map,this.La=new $c,this.Ba={},this.ka=new Map,this.qa=as.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function SI(n,e,t=!0){const r=Mg(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Vg(r,e,t,!0),s}async function PI(n,e){const t=Mg(n);await Vg(t,e,!0,!1)}async function Vg(n,e,t,r){const s=await YT(n.localStore,sn(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await CI(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Ig(n.remoteStore,s),l}async function CI(n,e,t,r,s){n.Ka=(p,_,b)=>async function(S,C,$,F){let H=C.view.ma($);H.ns&&(H=await Cd(S.localStore,C.query,!1).then(({documents:T})=>C.view.ma(T,H)));const q=F&&F.targetChanges.get(C.targetId),le=F&&F.targetMismatches.get(C.targetId)!=null,oe=C.view.applyChanges(H,S.isPrimaryClient,q,le);return Ld(S,C.targetId,oe.wa),oe.snapshot}(n,p,_,b);const i=await Cd(n.localStore,e,!0),a=new II(e,i.Ts),l=a.ma(i.documents),c=Ci.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(l,n.isPrimaryClient,c);Ld(n,t,h.wa);const f=new AI(e,t,a);return n.Fa.set(e,f),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),h.snapshot}async function kI(n,e,t){const r=fe(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!ha(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ec(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Wc(r.remoteStore,s.targetId),nc(r,s.targetId)}).catch(Ri)):(nc(r,s.targetId),await ec(r.localStore,s.targetId,!0))}async function VI(n,e){const t=fe(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Wc(t.remoteStore,r.targetId))}async function DI(n,e,t){const r=UI(n);try{const s=await function(a,l){const c=fe(a),h=Ye.now(),f=l.reduce((b,k)=>b.add(k.key),ye());let p,_;return c.persistence.runTransaction("Locally write mutations","readwrite",b=>{let k=Vn(),S=ye();return c.cs.getEntries(b,f).next(C=>{k=C,k.forEach(($,F)=>{F.isValidDocument()||(S=S.add($))})}).next(()=>c.localDocuments.getOverlayedDocuments(b,k)).next(C=>{p=C;const $=[];for(const F of l){const H=eT(F,p.get(F.key).overlayedDocument);H!=null&&$.push(new sr(F.key,H,Wp(H.value.mapValue),Ct.exists(!0)))}return c.mutationQueue.addMutationBatch(b,h,$,l)}).next(C=>{_=C;const $=C.applyToLocalDocumentSet(p,S);return c.documentOverlayCache.saveOverlays(b,C.batchId,$)})}).then(()=>({batchId:_.batchId,changes:eg(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let h=a.Ba[a.currentUser.toKey()];h||(h=new Le(Ae)),h=h.insert(l,c),a.Ba[a.currentUser.toKey()]=h}(r,s.batchId,t),await Vi(r,s.changes),await va(r.remoteStore)}catch(s){const i=Qc(s,"Failed to persist write");t.reject(i)}}async function Dg(n,e){const t=fe(n);try{const r=await zT(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Na.get(i);a&&(Se(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?Se(a.va):s.removedDocuments.size>0&&(Se(a.va),a.va=!1))}),await Vi(t,r,e)}catch(r){await Ri(r)}}function Md(n,e,t){const r=fe(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,a)=>{const l=a.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=fe(a);c.onlineState=l;let h=!1;c.queries.forEach((f,p)=>{for(const _ of p.j_)_.Z_(l)&&(h=!0)}),h&&Xc(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function NI(n,e,t){const r=fe(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new Le(Z.comparator);a=a.insert(i,yt.newNoDocument(i,de.min()));const l=ye().add(i),c=new ma(de.min(),new Map,new Le(Ae),a,l);await Dg(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),eu(r)}else await ec(r.localStore,e,!1).then(()=>nc(r,e,t)).catch(Ri)}async function OI(n,e){const t=fe(n),r=e.batch.batchId;try{const s=await KT(t.localStore,e);Og(t,r,null),Ng(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Vi(t,s)}catch(s){await Ri(s)}}async function xI(n,e,t){const r=fe(n);try{const s=await function(a,l){const c=fe(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(Se(p!==null),f=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(r.localStore,e);Og(r,e,t),Ng(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Vi(r,s)}catch(s){await Ri(s)}}function Ng(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Og(n,e,t){const r=fe(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function nc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||xg(n,r)})}function xg(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Wc(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),eu(n))}function Ld(n,e,t){for(const r of t)r instanceof Cg?(n.La.addReference(r.key,e),MI(n,r)):r instanceof kg?(J("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||xg(n,r.key)):ce()}function MI(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(J("SyncEngine","New document in limbo: "+t),n.xa.add(r),eu(n))}function eu(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new Z(Ne.fromString(e)),r=n.qa.next();n.Na.set(r,new bI(t)),n.Oa=n.Oa.insert(t,r),Ig(n.remoteStore,new zn(sn(ua(t.path)),r,"TargetPurposeLimboResolution",Vc.oe))}}async function Vi(n,e,t){const r=fe(n),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{a.push(r.Ka(c,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=qc.Wi(c.targetId,h);i.push(p)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(c,h){const f=fe(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>B.forEach(h,_=>B.forEach(_.$i,b=>f.persistence.referenceDelegate.addReference(p,_.targetId,b)).next(()=>B.forEach(_.Ui,b=>f.persistence.referenceDelegate.removeReference(p,_.targetId,b)))))}catch(p){if(!Si(p))throw p;J("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const _=p.targetId;if(!p.fromCache){const b=f.os.get(_),k=b.snapshotVersion,S=b.withLastLimboFreeSnapshotVersion(k);f.os=f.os.insert(_,S)}}}(r.localStore,i))}async function LI(n,e){const t=fe(n);if(!t.currentUser.isEqual(e)){J("SyncEngine","User change. New user:",e.toKey());const r=await vg(t.localStore,e);t.currentUser=e,function(i,a){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new G(N.CANCELLED,a))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Vi(t,r.hs)}}function FI(n,e){const t=fe(n),r=t.Na.get(e);if(r&&r.va)return ye().add(r.key);{let s=ye();const i=t.Ma.get(e);if(!i)return s;for(const a of i){const l=t.Fa.get(a);s=s.unionWith(l.view.Va)}return s}}function Mg(n){const e=fe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Dg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=FI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=NI.bind(null,e),e.Ca.d_=wI.bind(null,e.eventManager),e.Ca.$a=TI.bind(null,e.eventManager),e}function UI(n){const e=fe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=OI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xI.bind(null,e),e}class $o{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=_a(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return HT(this.persistence,new qT,e.initialUser,this.serializer)}Ga(e){return new BT(jc.Zr,this.serializer)}Wa(e){return new XT}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}$o.provider={build:()=>new $o};class rc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Md(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=LI.bind(null,this.syncEngine),await yI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new EI}()}createDatastore(e){const t=_a(e.databaseInfo.databaseId),r=function(i){return new nI(i)}(e.databaseInfo);return function(i,a,l,c){return new iI(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new aI(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Md(this.syncEngine,t,0),function(){return Vd.D()?new Vd:new ZT}())}createSyncEngine(e,t){return function(s,i,a,l,c,h,f){const p=new RI(s,i,a,l,c,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=fe(s);J("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await ki(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}rc.provider={build:()=>new rc};/**
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
 */class tu{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):kn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class BI{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=mt.UNAUTHENTICATED,this.clientId=$p.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{J("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(J("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Sn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Qc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function gl(n,e){n.asyncQueue.verifyOperationInProgress(),J("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await vg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Fd(n,e){n.asyncQueue.verifyOperationInProgress();const t=await $I(n);J("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Dd(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Dd(e.remoteStore,s)),n._onlineComponents=e}async function $I(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){J("FirestoreClient","Using user provided OfflineComponentProvider");try{await gl(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;ns("Error using user provided cache. Falling back to memory cache: "+t),await gl(n,new $o)}}else J("FirestoreClient","Using default OfflineComponentProvider"),await gl(n,new $o);return n._offlineComponents}async function Lg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(J("FirestoreClient","Using user provided OnlineComponentProvider"),await Fd(n,n._uninitializedComponentsProvider._online)):(J("FirestoreClient","Using default OnlineComponentProvider"),await Fd(n,new rc))),n._onlineComponents}function jI(n){return Lg(n).then(e=>e.syncEngine)}async function jo(n){const e=await Lg(n),t=e.eventManager;return t.onListen=SI.bind(null,e.syncEngine),t.onUnlisten=kI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=PI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=VI.bind(null,e.syncEngine),t}function qI(n,e,t={}){const r=new Sn;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const f=new tu({next:_=>{f.Za(),a.enqueueAndForget(()=>Jc(i,p));const b=_.docs.has(l);!b&&_.fromCache?h.reject(new G(N.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&_.fromCache&&c&&c.source==="server"?h.reject(new G(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),p=new Zc(ua(l.path),f,{includeMetadataChanges:!0,_a:!0});return Yc(i,p)}(await jo(n),n.asyncQueue,e,t,r)),r.promise}function WI(n,e,t={}){const r=new Sn;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const f=new tu({next:_=>{f.Za(),a.enqueueAndForget(()=>Jc(i,p)),_.fromCache&&c.source==="server"?h.reject(new G(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),p=new Zc(l,f,{includeMetadataChanges:!0,_a:!0});return Yc(i,p)}(await jo(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Fg(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Ud=new Map;/**
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
 */function Ug(n,e,t){if(!t)throw new G(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function HI(n,e,t,r){if(e===!0&&r===!0)throw new G(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Bd(n){if(!Z.isDocumentKey(n))throw new G(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function $d(n){if(Z.isDocumentKey(n))throw new G(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ea(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ce()}function kt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new G(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ea(n);throw new G(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function KI(n,e){if(e<=0)throw new G(N.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */class jd{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}HI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Fg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new G(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new G(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new G(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wa{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jd({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new lw;switch(r.type){case"firstParty":return new dw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Ud.get(t);r&&(J("ComponentProvider","Removing Datastore"),Ud.delete(t),r.terminate())}(this),Promise.resolve()}}function zI(n,e,t,r={}){var s;const i=(n=kt(n,wa))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&ns("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=mt.MOCK_USER;else{l=Fv(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new G(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new mt(h)}n._authCredentials=new cw(new Bp(l,c))}}/**
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
 */class fn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new fn(this.firestore,e,this._query)}}class Et{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Et(this.firestore,e,this._key)}}class Jn extends fn{constructor(e,t,r){super(e,t,ua(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Et(this.firestore,null,new Z(e))}withConverter(e){return new Jn(this.firestore,e,this._path)}}function co(n,e,...t){if(n=Be(n),Ug("collection","path",e),n instanceof wa){const r=Ne.fromString(e,...t);return $d(r),new Jn(n,null,r)}{if(!(n instanceof Et||n instanceof Jn))throw new G(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ne.fromString(e,...t));return $d(r),new Jn(n.firestore,null,r)}}function $t(n,e,...t){if(n=Be(n),arguments.length===1&&(e=$p.newId()),Ug("doc","path",e),n instanceof wa){const r=Ne.fromString(e,...t);return Bd(r),new Et(n,null,new Z(r))}{if(!(n instanceof Et||n instanceof Jn))throw new G(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ne.fromString(e,...t));return Bd(r),new Et(n.firestore,n instanceof Jn?n.converter:null,new Z(r))}}/**
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
 */class qd{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new wg(this,"async_queue_retry"),this.Vu=()=>{const r=pl();r&&J("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=pl();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=pl();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Sn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Si(e))throw e;J("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw kn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=Gc.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&ce()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function Wd(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class Dn extends wa{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new qd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new qd(e),this._firestoreClient=void 0,await e}}}function GI(n,e){const t=typeof n=="object"?n:Vp(),r=typeof n=="string"?n:"(default)",s=Cc(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Mv("firestore");i&&zI(s,...i)}return s}function Di(n){if(n._terminated)throw new G(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||QI(n),n._firestoreClient}function QI(n){var e,t,r;const s=n._freezeSettings(),i=function(l,c,h,f){return new bw(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Fg(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new BI(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(n._componentsProvider))}/**
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
 */class cs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cs(at.fromBase64String(e))}catch(t){throw new G(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new cs(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ni{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new G(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class nu{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new G(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new G(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}}/**
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
 */class ru{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const YI=/^__.*__$/;class JI{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new sr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Pi(e,this.data,t,this.fieldTransforms)}}class Bg{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new sr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function $g(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ce()}}class su{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new su(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return qo(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if($g(this.Cu)&&YI.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class XI{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||_a(e)}Qu(e,t,r,s=!1){return new su({Cu:e,methodName:t,qu:r,path:st.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Oi(n){const e=n._freezeSettings(),t=_a(n._databaseId);return new XI(n._databaseId,!!e.ignoreUndefinedProperties,t)}function jg(n,e,t,r,s,i={}){const a=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);ou("Data must be an object, but it was:",a,r);const l=Kg(r,a);let c,h;if(i.merge)c=new Nt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const _=sc(e,p,t);if(!a.contains(_))throw new G(N.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);Gg(f,_)||f.push(_)}c=new Nt(f),h=a.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=a.fieldTransforms;return new JI(new Pt(l),c,h)}class Ia extends Ta{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ia}}class iu extends Ta{_toFieldTransform(e){return new Yw(e.path,new gi)}isEqual(e){return e instanceof iu}}function qg(n,e,t,r){const s=n.Qu(1,e,t);ou("Data must be an object, but it was:",s,r);const i=[],a=Pt.empty();br(r,(c,h)=>{const f=au(e,c,t);h=Be(h);const p=s.Nu(f);if(h instanceof Ia)i.push(f);else{const _=xi(h,p);_!=null&&(i.push(f),a.set(f,_))}});const l=new Nt(i);return new Bg(a,l,s.fieldTransforms)}function Wg(n,e,t,r,s,i){const a=n.Qu(1,e,t),l=[sc(e,r,t)],c=[s];if(i.length%2!=0)throw new G(N.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)l.push(sc(e,i[_])),c.push(i[_+1]);const h=[],f=Pt.empty();for(let _=l.length-1;_>=0;--_)if(!Gg(h,l[_])){const b=l[_];let k=c[_];k=Be(k);const S=a.Nu(b);if(k instanceof Ia)h.push(b);else{const C=xi(k,S);C!=null&&(h.push(b),f.set(b,C))}}const p=new Nt(h);return new Bg(f,p,a.fieldTransforms)}function Hg(n,e,t,r=!1){return xi(t,n.Qu(r?4:3,e))}function xi(n,e){if(zg(n=Be(n)))return ou("Unsupported field value:",e,n),Kg(n,e);if(n instanceof Ta)return function(r,s){if(!$g(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=xi(l,s.Lu(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Be(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return zw(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ye.fromDate(r);return{timestampValue:Uo(s.serializer,i)}}if(r instanceof Ye){const i=new Ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Uo(s.serializer,i)}}if(r instanceof nu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof cs)return{bytesValue:dg(s.serializer,r._byteString)};if(r instanceof Et){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Bc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ru)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return Lc(l.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Ea(r)}`)}(n,e)}function Kg(n,e){const t={};return jp(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):br(n,(r,s)=>{const i=xi(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function zg(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ye||n instanceof nu||n instanceof cs||n instanceof Et||n instanceof Ta||n instanceof ru)}function ou(n,e,t){if(!zg(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Ea(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function sc(n,e,t){if((e=Be(e))instanceof Ni)return e._internalPath;if(typeof e=="string")return au(n,e);throw qo("Field path arguments must be of type string or ",n,!1,void 0,t)}const ZI=new RegExp("[~\\*/\\[\\]]");function au(n,e,t){if(e.search(ZI)>=0)throw qo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ni(...e.split("."))._internalPath}catch{throw qo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function qo(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new G(N.INVALID_ARGUMENT,l+n+c)}function Gg(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class lu{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new eA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Aa("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class eA extends lu{data(){return super.data()}}function Aa(n,e){return typeof e=="string"?au(n,e):e instanceof Ni?e._internalPath:e._delegate._internalPath}/**
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
 */function Qg(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new G(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cu{}class ba extends cu{}function ml(n,e,...t){let r=[];e instanceof cu&&r.push(e),r=r.concat(t),function(i){const a=i.filter(c=>c instanceof uu).length,l=i.filter(c=>c instanceof Ra).length;if(a>1||a>0&&l>0)throw new G(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Ra extends ba{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Ra(e,t,r)}_apply(e){const t=this._parse(e);return Yg(e._query,t),new fn(e.firestore,e.converter,Ql(e._query,t))}_parse(e){const t=Oi(e.firestore);return function(i,a,l,c,h,f,p){let _;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new G(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Kd(p,f);const b=[];for(const k of p)b.push(Hd(c,i,k));_={arrayValue:{values:b}}}else _=Hd(c,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Kd(p,f),_=Hg(l,a,p,f==="in"||f==="not-in");return ze.create(h,f,_)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function tA(n,e,t){const r=e,s=Aa("where",n);return Ra._create(s,r,t)}class uu extends cu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new uu(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Gt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const l=i.getFlattenedFilters();for(const c of l)Yg(a,c),a=Ql(a,c)}(e._query,t),new fn(e.firestore,e.converter,Ql(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class hu extends ba{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new hu(e,t)}_apply(e){const t=function(s,i,a){if(s.startAt!==null)throw new G(N.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new G(N.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new pi(i,a)}(e._query,this._field,this._direction);return new fn(e.firestore,e.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new Rr(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function nA(n,e="asc"){const t=e,r=Aa("orderBy",n);return hu._create(r,t)}class du extends ba{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new du(e,t,r)}_apply(e){return new fn(e.firestore,e.converter,Lo(e._query,this._limit,this._limitType))}}function rA(n){return KI("limit",n),du._create("limit",n,"F")}class fu extends ba{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new fu(e,t,r)}_apply(e){const t=iA(e,this.type,this._docOrFields,this._inclusive);return new fn(e.firestore,e.converter,function(s,i){return new Rr(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(e._query,t))}}function sA(...n){return fu._create("startAfter",n,!1)}function iA(n,e,t,r){if(t[0]=Be(t[0]),t[0]instanceof lu)return function(i,a,l,c,h){if(!c)throw new G(N.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${l}().`);const f=[];for(const p of Gr(i))if(p.field.isKeyField())f.push(Mo(a,c.key));else{const _=c.data.field(p.field);if(ca(_))throw new G(N.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+p.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(_===null){const b=p.field.canonicalString();throw new G(N.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${b}' (used as the orderBy) does not exist.`)}f.push(_)}return new os(f,h)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const s=Oi(n.firestore);return function(a,l,c,h,f,p){const _=a.explicitOrderBy;if(f.length>_.length)throw new G(N.INVALID_ARGUMENT,`Too many arguments provided to ${h}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const b=[];for(let k=0;k<f.length;k++){const S=f[k];if(_[k].field.isKeyField()){if(typeof S!="string")throw new G(N.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${h}(), but got a ${typeof S}`);if(!Mc(a)&&S.indexOf("/")!==-1)throw new G(N.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${h}() must be a plain document ID, but '${S}' contains a slash.`);const C=a.path.child(Ne.fromString(S));if(!Z.isDocumentKey(C))throw new G(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${h}() must result in a valid document path, but '${C}' is not because it contains an odd number of segments.`);const $=new Z(C);b.push(Mo(l,$))}else{const C=Hg(c,h,S);b.push(C)}}return new os(b,p)}(n._query,n.firestore._databaseId,s,e,t,r)}}function Hd(n,e,t){if(typeof(t=Be(t))=="string"){if(t==="")throw new G(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Mc(e)&&t.indexOf("/")!==-1)throw new G(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Ne.fromString(t));if(!Z.isDocumentKey(r))throw new G(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Mo(n,new Z(r))}if(t instanceof Et)return Mo(n,t._key);throw new G(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ea(t)}.`)}function Kd(n,e){if(!Array.isArray(n)||n.length===0)throw new G(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Yg(n,e){const t=function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new G(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new G(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class oA{convertValue(e,t="none"){switch(Ir(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Tr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ce()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return br(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>qe(a.doubleValue));return new ru(i)}convertGeoPoint(e){return new nu(qe(e.latitude),qe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Dc(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(hi(e));default:return null}}convertTimestamp(e){const t=tr(e);return new Ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Ne.fromString(e);Se(yg(r));const s=new di(r.get(1),r.get(3)),i=new Z(r.popFirst(5));return s.isEqual(t)||kn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function Jg(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
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
 */class Hs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Xg extends lu{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new vo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Aa("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class vo extends Xg{data(e={}){return super.data(e)}}class Zg{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Hs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new vo(this._firestore,this._userDataWriter,r.key,r,new Hs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new G(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new vo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Hs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new vo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Hs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:aA(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function aA(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce()}}/**
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
 */function _l(n){n=kt(n,Et);const e=kt(n.firestore,Dn);return qI(Di(e),n._key).then(t=>em(e,n,t))}class pu extends oA{constructor(e){super(),this.firestore=e}convertBytes(e){return new cs(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Et(this.firestore,null,t)}}function lA(n){n=kt(n,fn);const e=kt(n.firestore,Dn),t=Di(e),r=new pu(e);return Qg(n._query),WI(t,n._query).then(s=>new Zg(e,r,n,s))}function yl(n,e,t){n=kt(n,Et);const r=kt(n.firestore,Dn),s=Jg(n.converter,e,t);return Sa(r,[jg(Oi(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Ct.none())])}function cA(n,e,t,...r){n=kt(n,Et);const s=kt(n.firestore,Dn),i=Oi(s);let a;return a=typeof(e=Be(e))=="string"||e instanceof Ni?Wg(i,"updateDoc",n._key,e,t,r):qg(i,"updateDoc",n._key,e),Sa(s,[a.toMutation(n._key,Ct.exists(!0))])}function zd(n){return Sa(kt(n.firestore,Dn),[new ga(n._key,Ct.none())])}function Gd(n,...e){var t,r,s;n=Be(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Wd(e[a])||(i=e[a],a++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Wd(e[a])){const p=e[a];e[a]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[a+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[a+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,h,f;if(n instanceof Et)h=kt(n.firestore,Dn),f=ua(n._key.path),c={next:p=>{e[a]&&e[a](em(h,n,p))},error:e[a+1],complete:e[a+2]};else{const p=kt(n,fn);h=kt(p.firestore,Dn),f=p._query;const _=new pu(h);c={next:b=>{e[a]&&e[a](new Zg(h,_,p,b))},error:e[a+1],complete:e[a+2]},Qg(n._query)}return function(_,b,k,S){const C=new tu(S),$=new Zc(b,C,k);return _.asyncQueue.enqueueAndForget(async()=>Yc(await jo(_),$)),()=>{C.Za(),_.asyncQueue.enqueueAndForget(async()=>Jc(await jo(_),$))}}(Di(h),f,l,c)}function Sa(n,e){return function(r,s){const i=new Sn;return r.asyncQueue.enqueueAndForget(async()=>DI(await jI(r),s,i)),i.promise}(Di(n),e)}function em(n,e,t){const r=t.docs.get(e._key),s=new pu(n);return new Xg(n,s,e._key,r,new Hs(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class uA{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Oi(e)}set(e,t,r){this._verifyNotCommitted();const s=vl(e,this._firestore),i=Jg(s.converter,t,r),a=jg(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,Ct.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=vl(e,this._firestore);let a;return a=typeof(t=Be(t))=="string"||t instanceof Ni?Wg(this._dataReader,"WriteBatch.update",i._key,t,r,s):qg(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(a.toMutation(i._key,Ct.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=vl(e,this._firestore);return this._mutations=this._mutations.concat(new ga(t._key,Ct.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new G(N.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function vl(n,e){if((n=Be(n)).firestore!==e)throw new G(N.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function El(){return new iu("serverTimestamp")}/**
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
 */function Qd(n){return Di(n=kt(n,Dn)),new uA(n,e=>Sa(n,e))}(function(e,t=!0){(function(s){ds=s})(hs),ts(new Er("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new Dn(new uw(r.getProvider("auth-internal")),new pw(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new G(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new di(h.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Yn(ld,"4.7.3",e),Yn(ld,"4.7.3","esm2017")})();var hA="firebase",dA="10.14.1";/**
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
 */Yn(hA,dA,"app");function gu(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function tm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fA=tm,nm=new Ai("auth","Firebase",tm());/**
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
 */const Wo=new Sc("@firebase/auth");function pA(n,...e){Wo.logLevel<=ve.WARN&&Wo.warn(`Auth (${hs}): ${n}`,...e)}function Eo(n,...e){Wo.logLevel<=ve.ERROR&&Wo.error(`Auth (${hs}): ${n}`,...e)}/**
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
 */function Qt(n,...e){throw mu(n,...e)}function an(n,...e){return mu(n,...e)}function rm(n,e,t){const r=Object.assign(Object.assign({},fA()),{[e]:t});return new Ai("auth","Firebase",r).create(e,{appName:n.name})}function Xn(n){return rm(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mu(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return nm.create(n,...e)}function ie(n,e,...t){if(!n)throw mu(e,...t)}function An(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Eo(e),new Error(e)}function Nn(n,e){n||An(e)}/**
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
 */function ic(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function gA(){return Yd()==="http:"||Yd()==="https:"}function Yd(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function mA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gA()||jv()||"connection"in navigator)?navigator.onLine:!0}function _A(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Mi{constructor(e,t){this.shortDelay=e,this.longDelay=t,Nn(t>e,"Short delay should be less than long delay!"),this.isMobile=Uv()||qv()}get(){return mA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function _u(n,e){Nn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class sm{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;An("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;An("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;An("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const vA=new Mi(3e4,6e4);function Pr(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ir(n,e,t,r,s={}){return im(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=bi(Object.assign({key:n.config.apiKey},a)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:c},i);return $v()||(h.referrerPolicy="no-referrer"),sm.fetch()(om(n,n.config.apiHost,t,l),h)})}async function im(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},yA),e);try{const s=new wA(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw uo(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw uo(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw uo(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw uo(n,"user-disabled",a);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw rm(n,f,h);Qt(n,f)}}catch(s){if(s instanceof xn)throw s;Qt(n,"network-request-failed",{message:String(s)})}}async function Pa(n,e,t,r,s={}){const i=await ir(n,e,t,r,s);return"mfaPendingCredential"in i&&Qt(n,"multi-factor-auth-required",{_serverResponse:i}),i}function om(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?_u(n.config,s):`${n.config.apiScheme}://${s}`}function EA(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class wA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(an(this.auth,"network-request-failed")),vA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function uo(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=an(n,e,r);return s.customData._tokenResponse=t,s}function Jd(n){return n!==void 0&&n.enterprise!==void 0}class TA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return EA(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function IA(n,e){return ir(n,"GET","/v2/recaptchaConfig",Pr(n,e))}/**
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
 */async function AA(n,e){return ir(n,"POST","/v1/accounts:delete",e)}async function am(n,e){return ir(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function ri(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bA(n,e=!1){const t=Be(n),r=await t.getIdToken(e),s=yu(r);ie(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ri(wl(s.auth_time)),issuedAtTime:ri(wl(s.iat)),expirationTime:ri(wl(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function wl(n){return Number(n)*1e3}function yu(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Eo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ap(t);return s?JSON.parse(s):(Eo("Failed to decode base64 JWT payload"),null)}catch(s){return Eo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Xd(n){const e=yu(n);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function yi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof xn&&RA(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function RA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class oc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ri(this.lastLoginAt),this.creationTime=ri(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ho(n){var e;const t=n.auth,r=await n.getIdToken(),s=await yi(n,am(t,{idToken:r}));ie(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?lm(i.providerUserInfo):[],l=CA(n.providerData,a),c=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new oc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,p)}async function PA(n){const e=Be(n);await Ho(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function CA(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function lm(n){return n.map(e=>{var{providerId:t}=e,r=gu(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function kA(n,e){const t=await im(n,{},async()=>{const r=bi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=om(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",sm.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function VA(n,e){return ir(n,"POST","/v2/accounts:revokeToken",Pr(n,e))}/**
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
 */class Yr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const t=Xd(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await kA(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Yr;return r&&(ie(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ie(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ie(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yr,this.toJSON())}_performRefresh(){return An("not implemented")}}/**
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
 */function Bn(n,e){ie(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class bn{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=gu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new SA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new oc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await yi(this,this.stsTokenManager.getToken(this.auth,e));return ie(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return bA(this,e)}reload(){return PA(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new bn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ho(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(In(this.auth.app))return Promise.reject(Xn(this.auth));const e=await this.getIdToken();return await yi(this,AA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,l,c,h,f;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,_=(s=t.email)!==null&&s!==void 0?s:void 0,b=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,k=(a=t.photoURL)!==null&&a!==void 0?a:void 0,S=(l=t.tenantId)!==null&&l!==void 0?l:void 0,C=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,$=(h=t.createdAt)!==null&&h!==void 0?h:void 0,F=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:H,emailVerified:q,isAnonymous:le,providerData:oe,stsTokenManager:T}=t;ie(H&&T,e,"internal-error");const m=Yr.fromJSON(this.name,T);ie(typeof H=="string",e,"internal-error"),Bn(p,e.name),Bn(_,e.name),ie(typeof q=="boolean",e,"internal-error"),ie(typeof le=="boolean",e,"internal-error"),Bn(b,e.name),Bn(k,e.name),Bn(S,e.name),Bn(C,e.name),Bn($,e.name),Bn(F,e.name);const y=new bn({uid:H,auth:e,email:_,emailVerified:q,displayName:p,isAnonymous:le,photoURL:k,phoneNumber:b,tenantId:S,stsTokenManager:m,createdAt:$,lastLoginAt:F});return oe&&Array.isArray(oe)&&(y.providerData=oe.map(I=>Object.assign({},I))),C&&(y._redirectEventId=C),y}static async _fromIdTokenResponse(e,t,r=!1){const s=new Yr;s.updateFromServerResponse(t);const i=new bn({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ho(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];ie(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?lm(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Yr;l.updateFromIdToken(r);const c=new bn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new oc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
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
 */const Zd=new Map;function Rn(n){Nn(n instanceof Function,"Expected a class definition");let e=Zd.get(n);return e?(Nn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Zd.set(n,e),e)}/**
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
 */class cm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}cm.type="NONE";const ef=cm;/**
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
 */function wo(n,e,t){return`firebase:${n}:${e}:${t}`}class Jr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=wo(this.userKey,s.apiKey,i),this.fullPersistenceKey=wo("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?bn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Jr(Rn(ef),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Rn(ef);const a=wo(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(a);if(f){const p=bn._fromJSON(e,f);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Jr(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Jr(i,e,r))}}/**
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
 */function tf(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(um(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gm(e))return"Blackberry";if(mm(e))return"Webos";if(hm(e))return"Safari";if((e.includes("chrome/")||dm(e))&&!e.includes("edge/"))return"Chrome";if(pm(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function um(n=wt()){return/firefox\//i.test(n)}function hm(n=wt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dm(n=wt()){return/crios\//i.test(n)}function fm(n=wt()){return/iemobile/i.test(n)}function pm(n=wt()){return/android/i.test(n)}function gm(n=wt()){return/blackberry/i.test(n)}function mm(n=wt()){return/webos/i.test(n)}function vu(n=wt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function DA(n=wt()){var e;return vu(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function NA(){return Wv()&&document.documentMode===10}function _m(n=wt()){return vu(n)||pm(n)||mm(n)||gm(n)||/windows phone/i.test(n)||fm(n)}/**
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
 */function ym(n,e=[]){let t;switch(n){case"Browser":t=tf(wt());break;case"Worker":t=`${tf(wt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${hs}/${r}`}/**
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
 */async function xA(n,e={}){return ir(n,"GET","/v2/passwordPolicy",Pr(n,e))}/**
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
 */class FA{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nf(this),this.idTokenSubscription=new nf(this),this.beforeStateQueue=new OA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Rn(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Jr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await am(this,{idToken:e}),r=await bn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(In(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ho(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_A()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(In(this.app))return Promise.reject(Xn(this));const t=e?Be(e):null;return t&&ie(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return In(this.app)?Promise.reject(Xn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return In(this.app)?Promise.reject(Xn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xA(this),t=new LA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ai("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await VA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Rn(e)||this._popupRedirectResolver;ie(t,this,"argument-error"),this.redirectPersistenceManager=await Jr.create(this,[Rn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ym(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&pA(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function gs(n){return Be(n)}class nf{constructor(e){this.auth=e,this.observer=null,this.addObserver=Xv(t=>this.observer=t)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ca={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function UA(n){Ca=n}function vm(n){return Ca.loadJS(n)}function BA(){return Ca.recaptchaEnterpriseScript}function $A(){return Ca.gapiScript}function jA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const qA="recaptcha-enterprise",WA="NO_RECAPTCHA";class HA{constructor(e){this.type=qA,this.auth=gs(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{IA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new TA(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,a,l){const c=window.grecaptcha;Jd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(WA)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,a)=>{r(this.auth).then(l=>{if(!t&&Jd(window.grecaptcha))s(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=BA();c.length!==0&&(c+=l),vm(c).then(()=>{s(l,i,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function rf(n,e,t,r=!1){const s=new HA(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function sf(n,e,t,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await rf(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await rf(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(i)})}/**
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
 */function KA(n,e){const t=Cc(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(No(i,e??{}))return s;Qt(s,"already-initialized")}return t.initialize({options:e})}function zA(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Rn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function GA(n,e,t){const r=gs(n);ie(r._canInitEmulator,r,"emulator-config-failed"),ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Em(e),{host:a,port:l}=QA(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),YA()}function Em(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function QA(n){const e=Em(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:of(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:of(a)}}}function of(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function YA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Eu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return An("not implemented")}_getIdTokenResponse(e){return An("not implemented")}_linkToIdToken(e,t){return An("not implemented")}_getReauthenticationResolver(e){return An("not implemented")}}async function JA(n,e){return ir(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function XA(n,e){return Pa(n,"POST","/v1/accounts:signInWithPassword",Pr(n,e))}/**
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
 */async function ZA(n,e){return Pa(n,"POST","/v1/accounts:signInWithEmailLink",Pr(n,e))}async function eb(n,e){return Pa(n,"POST","/v1/accounts:signInWithEmailLink",Pr(n,e))}/**
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
 */class vi extends Eu{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new vi(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new vi(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sf(e,t,"signInWithPassword",XA);case"emailLink":return ZA(e,{email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sf(e,r,"signUpPassword",JA);case"emailLink":return eb(e,{idToken:t,email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Xr(n,e){return Pa(n,"POST","/v1/accounts:signInWithIdp",Pr(n,e))}/**
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
 */const tb="http://localhost";class Ar extends Eu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ar(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Qt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=gu(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Ar(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Xr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Xr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Xr(e,t)}buildRequest(){const e={requestUri:tb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=bi(t)}return e}}/**
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
 */function nb(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function rb(n){const e=Bs($s(n)).link,t=e?Bs($s(e)).deep_link_id:null,r=Bs($s(n)).deep_link_id;return(r?Bs($s(r)).link:null)||r||t||e||n}class wu{constructor(e){var t,r,s,i,a,l;const c=Bs($s(e)),h=(t=c.apiKey)!==null&&t!==void 0?t:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,p=nb((s=c.mode)!==null&&s!==void 0?s:null);ie(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=rb(e);try{return new wu(t)}catch{return null}}}/**
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
 */class ms{constructor(){this.providerId=ms.PROVIDER_ID}static credential(e,t){return vi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=wu.parseLink(t);return ie(r,"argument-error"),vi._fromEmailAndCode(e,r.code,r.tenantId)}}ms.PROVIDER_ID="password";ms.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ms.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class wm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Li extends wm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class qn extends Li{constructor(){super("facebook.com")}static credential(e){return Ar._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";qn.PROVIDER_ID="facebook.com";/**
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
 */class Wn extends Li{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ar._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Wn.credential(t,r)}catch{return null}}}Wn.GOOGLE_SIGN_IN_METHOD="google.com";Wn.PROVIDER_ID="google.com";/**
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
 */class Hn extends Li{constructor(){super("github.com")}static credential(e){return Ar._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.GITHUB_SIGN_IN_METHOD="github.com";Hn.PROVIDER_ID="github.com";/**
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
 */class Kn extends Li{constructor(){super("twitter.com")}static credential(e,t){return Ar._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Kn.credential(t,r)}catch{return null}}}Kn.TWITTER_SIGN_IN_METHOD="twitter.com";Kn.PROVIDER_ID="twitter.com";/**
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
 */class us{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await bn._fromIdTokenResponse(e,r,s),a=af(r);return new us({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=af(r);return new us({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function af(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Ko extends xn{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ko.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Ko(e,t,r,s)}}function Tm(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ko._fromErrorAndOperation(n,i,e,r):i})}async function sb(n,e,t=!1){const r=await yi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return us._forOperation(n,"link",r)}/**
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
 */async function ib(n,e,t=!1){const{auth:r}=n;if(In(r.app))return Promise.reject(Xn(r));const s="reauthenticate";try{const i=await yi(n,Tm(r,s,e,n),t);ie(i.idToken,r,"internal-error");const a=yu(i.idToken);ie(a,r,"internal-error");const{sub:l}=a;return ie(n.uid===l,r,"user-mismatch"),us._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Qt(r,"user-mismatch"),i}}/**
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
 */async function Im(n,e,t=!1){if(In(n.app))return Promise.reject(Xn(n));const r="signIn",s=await Tm(n,r,e),i=await us._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function ob(n,e){return Im(gs(n),e)}/**
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
 */async function ab(n){const e=gs(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function lb(n,e,t){return In(n.app)?Promise.reject(Xn(n)):ob(Be(n),ms.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ab(n),r})}function cb(n,e,t,r){return Be(n).onIdTokenChanged(e,t,r)}function ub(n,e,t){return Be(n).beforeAuthStateChanged(e,t)}function hb(n,e,t,r){return Be(n).onAuthStateChanged(e,t,r)}function db(n){return Be(n).signOut()}const zo="__sak";/**
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
 */class Am{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(zo,"1"),this.storage.removeItem(zo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const fb=1e3,pb=10;class bm extends Am{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_m(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);NA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,pb):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},fb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}bm.type="LOCAL";const gb=bm;/**
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
 */class Rm extends Am{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Rm.type="SESSION";const Sm=Rm;/**
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
 */function Tu(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class _b{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const h=Tu("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const _=p;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(_.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function ln(){return window}function yb(n){ln().location.href=n}/**
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
 */function Pm(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function vb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Eb(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function wb(){return Pm()?self:null}/**
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
 */const Cm="firebaseLocalStorageDb",Tb=1,Go="firebaseLocalStorage",km="fbase_key";class Fi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Va(n,e){return n.transaction([Go],e?"readwrite":"readonly").objectStore(Go)}function Ib(){const n=indexedDB.deleteDatabase(Cm);return new Fi(n).toPromise()}function ac(){const n=indexedDB.open(Cm,Tb);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Go,{keyPath:km})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Go)?e(r):(r.close(),await Ib(),e(await ac()))})})}async function lf(n,e,t){const r=Va(n,!0).put({[km]:e,value:t});return new Fi(r).toPromise()}async function Ab(n,e){const t=Va(n,!1).get(e),r=await new Fi(t).toPromise();return r===void 0?null:r.value}function cf(n,e){const t=Va(n,!0).delete(e);return new Fi(t).toPromise()}const bb=800,Rb=3;class Vm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ac(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Rb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ka._getInstance(wb()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await vb(),!this.activeServiceWorker)return;this.sender=new _b(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Eb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ac();return await lf(e,zo,"1"),await cf(e,zo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>lf(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Ab(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>cf(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Va(s,!1).getAll();return new Fi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vm.type="LOCAL";const Sb=Vm;new Mi(3e4,6e4);/**
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
 */function Pb(n,e){return e?Rn(e):(ie(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Iu extends Eu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Xr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Xr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Cb(n){return Im(n.auth,new Iu(n),n.bypassAuthState)}function kb(n){const{auth:e,user:t}=n;return ie(t,e,"internal-error"),ib(t,new Iu(n),n.bypassAuthState)}async function Vb(n){const{auth:e,user:t}=n;return ie(t,e,"internal-error"),sb(t,new Iu(n),n.bypassAuthState)}/**
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
 */class Dm{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Cb;case"linkViaPopup":case"linkViaRedirect":return Vb;case"reauthViaPopup":case"reauthViaRedirect":return kb;default:Qt(this.auth,"internal-error")}}resolve(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Db=new Mi(2e3,1e4);class jr extends Dm{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,jr.currentPopupAction&&jr.currentPopupAction.cancel(),jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){Nn(this.filter.length===1,"Popup operations only handle one event");const e=Tu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(an(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Db.get())};e()}}jr.currentPopupAction=null;/**
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
 */const Nb="pendingRedirect",To=new Map;class Ob extends Dm{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=To.get(this.auth._key());if(!e){try{const r=await xb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}To.set(this.auth._key(),e)}return this.bypassAuthState||To.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xb(n,e){const t=Fb(e),r=Lb(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Mb(n,e){To.set(n._key(),e)}function Lb(n){return Rn(n._redirectPersistence)}function Fb(n){return wo(Nb,n.config.apiKey,n.name)}async function Ub(n,e,t=!1){if(In(n.app))return Promise.reject(Xn(n));const r=gs(n),s=Pb(r,e),a=await new Ob(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const Bb=10*60*1e3;class $b{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jb(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Nm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(an(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Bb&&this.cachedEventUids.clear(),this.cachedEventUids.has(uf(e))}saveEventToCache(e){this.cachedEventUids.add(uf(e)),this.lastProcessedEventTime=Date.now()}}function uf(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Nm({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jb(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nm(n);default:return!1}}/**
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
 */async function qb(n,e={}){return ir(n,"GET","/v1/projects",e)}/**
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
 */const Wb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hb=/^https?/;async function Kb(n){if(n.config.emulator)return;const{authorizedDomains:e}=await qb(n);for(const t of e)try{if(zb(t))return}catch{}Qt(n,"unauthorized-domain")}function zb(n){const e=ic(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Hb.test(t))return!1;if(Wb.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Gb=new Mi(3e4,6e4);function hf(){const n=ln().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Qb(n){return new Promise((e,t)=>{var r,s,i;function a(){hf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hf(),t(an(n,"network-request-failed"))},timeout:Gb.get()})}if(!((s=(r=ln().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ln().gapi)===null||i===void 0)&&i.load)a();else{const l=jA("iframefcb");return ln()[l]=()=>{gapi.load?a():t(an(n,"network-request-failed"))},vm(`${$A()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw Io=null,e})}let Io=null;function Yb(n){return Io=Io||Qb(n),Io}/**
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
 */const Jb=new Mi(5e3,15e3),Xb="__/auth/iframe",Zb="emulator/auth/iframe",e0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},t0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function n0(n){const e=n.config;ie(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?_u(e,Zb):`https://${n.config.authDomain}/${Xb}`,r={apiKey:e.apiKey,appName:n.name,v:hs},s=t0.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${bi(r).slice(1)}`}async function r0(n){const e=await Yb(n),t=ln().gapi;return ie(t,n,"internal-error"),e.open({where:document.body,url:n0(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:e0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=an(n,"network-request-failed"),l=ln().setTimeout(()=>{i(a)},Jb.get());function c(){ln().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
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
 */const s0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},i0=500,o0=600,a0="_blank",l0="http://localhost";class df{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function c0(n,e,t,r=i0,s=o0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},s0),{width:r.toString(),height:s.toString(),top:i,left:a}),h=wt().toLowerCase();t&&(l=dm(h)?a0:t),um(h)&&(e=e||l0,c.scrollbars="yes");const f=Object.entries(c).reduce((_,[b,k])=>`${_}${b}=${k},`,"");if(DA(h)&&l!=="_self")return u0(e||"",l),new df(null);const p=window.open(e||"",l,f);ie(p,n,"popup-blocked");try{p.focus()}catch{}return new df(p)}function u0(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const h0="__/auth/handler",d0="emulator/auth/handler",f0=encodeURIComponent("fac");async function ff(n,e,t,r,s,i){ie(n.config.authDomain,n,"auth-domain-config-required"),ie(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:hs,eventId:s};if(e instanceof wm){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Jv(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(e instanceof Li){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await n._getAppCheckToken(),h=c?`#${f0}=${encodeURIComponent(c)}`:"";return`${p0(n)}?${bi(l).slice(1)}${h}`}function p0({config:n}){return n.emulator?_u(n,d0):`https://${n.authDomain}/${h0}`}/**
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
 */const Tl="webStorageSupport";class g0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sm,this._completeRedirectFn=Ub,this._overrideRedirectResult=Mb}async _openPopup(e,t,r,s){var i;Nn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await ff(e,t,r,ic(),s);return c0(e,a,Tu())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await ff(e,t,r,ic(),s);return yb(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Nn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await r0(e),r=new $b(e);return t.register("authEvent",s=>(ie(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Tl,{type:Tl},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Tl];a!==void 0&&t(!!a),Qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Kb(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return _m()||hm()||vu()}}const m0=g0;var pf="@firebase/auth",gf="1.7.9";/**
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
 */function y0(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function v0(n){ts(new Er("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;ie(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ym(n)},h=new FA(r,s,i,c);return zA(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ts(new Er("auth-internal",e=>{const t=gs(e.getProvider("auth").getImmediate());return(r=>new _0(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yn(pf,gf,y0(n)),Yn(pf,gf,"esm2017")}/**
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
 */const E0=5*60,w0=Sp("authIdTokenMaxAge")||E0;let mf=null;const T0=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>w0)return;const s=t==null?void 0:t.token;mf!==s&&(mf=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function I0(n=Vp()){const e=Cc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=KA(n,{popupRedirectResolver:m0,persistence:[Sb,gb,Sm]}),r=Sp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=T0(i.toString());ub(t,a,()=>a(t.currentUser)),cb(t,l=>a(l))}}const s=bp("auth");return s&&GA(t,`http://${s}`),t}function A0(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}UA({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=an("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",A0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});v0("Browser");const b0={apiKey:"AIzaSyBTn3Z_B1MYRJ-hOsL0I94QWBq2xh3EdFs",authDomain:"henryshus.firebaseapp.com",projectId:"henryshus",storageBucket:"henryshus.firebasestorage.app",messagingSenderId:"877597619520",appId:"1:877597619520:web:61e33ff74b9f03aa45f6a5",measurementId:"G-ESKWZ556XM"},Om=kp(b0),gt=GI(Om),Il=I0(Om);function xm(){const n=Ie([]),e=Ie([]),t=Ie(!1);let r=null,s=null;function i(){r||(r=Gd(co(gt,"workstations"),k=>{const S=[];k.forEach(C=>{S.push({id:C.id,...C.data()})}),S.sort((C,$)=>C.name.localeCompare($.name,"nb")),n.value=S},k=>console.error("Workstations error:",k)))}function a(){if(s)return;const k=ml(co(gt,"borrowRecords"),tA("returnedAt","==",null));s=Gd(k,S=>{const C=[];S.forEach($=>{C.push({id:$.id,...$.data()})}),C.sort(($,F)=>{var H,q;return(((H=F.borrowedAt)==null?void 0:H.toMillis())??0)-(((q=$.borrowedAt)==null?void 0:q.toMillis())??0)}),e.value=C},S=>console.error("Active borrows error:",S))}ra(()=>{r&&r(),s&&s()});async function l(k,S,C){const $=Qd(gt),F=$t(co(gt,"borrowRecords")),H=$t(gt,"workstations",k);$.update(H,{status:"borrowed",borrower:S,borrowedAt:El(),currentBorrowRecord:F.id}),$.set(F,{workstation:k,borrower:S,borrowedAt:El(),returnedAt:null,controllers:C??null}),await $.commit()}async function c(k){const S=$t(gt,"workstations",k),C=await _l(S);if(!C.exists())return;const $=C.data().currentBorrowRecord,F=Qd(gt);F.update(S,{status:"available",borrower:null,borrowedAt:null,currentBorrowRecord:null}),$&&F.update($t(gt,"borrowRecords",$),{returnedAt:El()}),await F.commit()}async function h(k=20,S){let C=ml(co(gt,"borrowRecords"),nA("borrowedAt","desc"),rA(k));S&&(C=ml(C,sA(S)));const $=await lA(C),F=[];let H=null;return $.forEach(q=>{F.push({id:q.id,...q.data()}),H=q}),{records:F,lastVisible:H}}async function f(){const k=[{name:"PlayStation",type:"playstation",keyboard:"Kontroller x2",mouse:""},{name:"PlayStation 2",type:"playstation",keyboard:"Kontroller x2",mouse:""},{name:"PC 1",type:"pc",keyboard:"Keyboard 1",mouse:"Mouse 1"},{name:"PC 2",type:"pc",keyboard:"Keyboard 2",mouse:"Mouse 2"},{name:"PC 3",type:"pc",keyboard:"Keyboard 3",mouse:"Mouse 3"}];for(const S of k){const C=$t(gt,"workstations",S.name);(await _l(C)).exists()||await yl(C,{name:S.name,type:S.type,keyboard:S.keyboard,mouse:S.mouse,status:"available",borrower:null,borrowedAt:null,currentBorrowRecord:null})}}async function p(k,S,C,$){await yl($t(gt,"workstations",k),{name:k,type:S,keyboard:C||"",mouse:$||"",status:"available",borrower:null,borrowedAt:null,currentBorrowRecord:null})}async function _(k){await zd($t(gt,"workstations",k))}async function b(k,S){var $;const C=($=S.newName)==null?void 0:$.trim();if(C&&C!==k){const F=await _l($t(gt,"workstations",k));if(!F.exists())return;const H=F.data();await yl($t(gt,"workstations",C),{...H,name:C,keyboard:S.keyboard??H.keyboard,mouse:S.mouse??H.mouse,type:S.type??H.type}),await zd($t(gt,"workstations",k))}else{const F={};S.keyboard!==void 0&&(F.keyboard=S.keyboard),S.mouse!==void 0&&(F.mouse=S.mouse),S.type!==void 0&&(F.type=S.type),await cA($t(gt,"workstations",k),F)}}return{workstations:n,activeBorrows:e,loading:t,subscribeWorkstations:i,subscribeActiveBorrows:a,borrowWorkstation:l,returnWorkstation:c,getHistory:h,seedDefaultWorkstations:f,addWorkstation:p,removeWorkstation:_,updateWorkstation:b}}const Al=Ie(null);let Ms=null;function Au(){Ms||(Ms=hb(Il,r=>{Al.value=r})),ra(()=>{Ms&&(Ms(),Ms=null)});async function n(r,s){await lb(Il,r,s)}async function e(){await db(Il)}function t(){return Al.value!==null}return{currentUser:Al,login:n,logout:e,isAdmin:t}}const R0={class:"student-layout"},S0={key:0,class:"init-load"},P0={key:1,class:"ws-scroll"},C0={key:0,class:"ps-row"},k0=["onClick","onKeydown"],V0={class:"ws-bar-inner"},D0={class:"ws-bar-name"},N0={key:0,class:"ws-bar-detail"},O0={class:"ws-row"},x0=["onClick","onKeydown"],M0={class:"ws-block-inner"},L0={class:"ws-block-name"},F0={key:0,class:"ws-block-detail"},U0={class:"modal"},B0={class:"form-group"},$0={key:0,class:"form-group"},j0={class:"ctrl-select"},q0={class:"modal-actions"},W0=["disabled"],H0={class:"modal"},K0={class:"form-group"},z0={class:"form-group"},G0={class:"modal-actions"},Q0={key:0,class:"error-message"},Y0=Ti({__name:"StudentView",setup(n){const e=Ot("currentView"),t=Ot("showToast"),r=Ot("loading"),{workstations:s,subscribeWorkstations:i,borrowWorkstation:a}=xm(),{login:l}=Au(),c=Ie(!1),h=Ie(null),f=Ie(""),p=Ie(2),_=Ie(null),b=Ie(!1),k=Ie(""),S=Ie(""),C=Ie(""),$=Ie(null);async function F(){C.value="",r.value=!0;try{await l(k.value,S.value),b.value=!1,k.value="",S.value="",e.value="admin"}catch(I){const v=I.code;v==="auth/user-not-found"?C.value="Bruker ikke funnet":v==="auth/wrong-password"?C.value="Feil passord":v==="auth/invalid-email"?C.value="Ugyldig e-post":v==="auth/too-many-requests"?C.value="For mange forsøk. Prøv igjen senere.":C.value="Feil e-post eller passord"}finally{r.value=!1}}const H=$r(()=>s.value.filter(I=>I.type==="playstation")),q=$r(()=>s.value.filter(I=>I.type==="pc")),le=$r(()=>s.value.find(I=>I.id===h.value)),oe=$r(()=>{var I;return((I=le.value)==null?void 0:I.type)==="playstation"});function T(I){h.value=I,f.value="",p.value=2,c.value=!0,kl(()=>{var v;return(v=_.value)==null?void 0:v.focus()})}function m(){c.value=!1,h.value=null,f.value=""}async function y(){const I=f.value.trim();if(!(!I||!h.value)){r.value=!0;try{await a(h.value,I,oe.value?p.value:void 0),c.value=!1,t(`Du låner ${h.value}`,"success"),h.value=null,f.value=""}catch(v){console.error(v),t("Kunne ikke fullføre lånet","error")}finally{r.value=!1}}}return Ic(()=>i()),(I,v)=>(ne(),he("div",R0,[O("button",{class:"admin-corner",onClick:v[0]||(v[0]=A=>{b.value=!0,kl(()=>{var w;return(w=$.value)==null?void 0:w.focus()})})},"Admin"),Br(s).length===0?(ne(),he("div",S0,[...v[10]||(v[10]=[O("div",{class:"loader-ring"},null,-1),O("p",null,"Laster...",-1)])])):(ne(),he("div",P0,[H.value.length?(ne(),he("div",C0,[(ne(!0),he(Ke,null,gr(H.value,A=>(ne(),he("div",{key:A.id,class:Ze(["ws-bar",A.status]),tabindex:"0",role:"button",onClick:w=>A.status==="available"&&T(A.id),onKeydown:ol(w=>A.status==="available"&&T(A.id),["enter"])},[O("div",V0,[O("div",D0,Ve(A.name),1),A.keyboard?(ne(),he("div",N0,Ve(A.keyboard),1)):Qe("",!0),O("div",{class:Ze(["ws-block-badge",A.status])},Ve(A.status==="available"?"Trykk for å låne":"Opptatt"),3)])],42,k0))),128))])):Qe("",!0),O("div",O0,[(ne(!0),he(Ke,null,gr(q.value,A=>(ne(),he("div",{key:A.id,class:Ze(["ws-block",A.status]),tabindex:"0",role:"button",onClick:w=>A.status==="available"&&T(A.id),onKeydown:ol(w=>A.status==="available"&&T(A.id),["enter"])},[O("div",M0,[O("div",L0,Ve(A.name),1),A.keyboard||A.mouse?(ne(),he("div",F0,Ve([A.keyboard,A.mouse].filter(Boolean).join(" · ")),1)):Qe("",!0),O("div",{class:Ze(["ws-block-badge",A.status])},Ve(A.status==="available"?"Trykk for å låne":"Opptatt"),3)])],42,x0))),128))])])),(ne(),zr(Ah,{to:"body"},[c.value&&le.value?(ne(),he("div",{key:0,class:"modal-overlay",onClick:Zs(m,["self"])},[O("div",U0,[O("h3",null,Ve(le.value.name),1),v[13]||(v[13]=O("p",{class:"modal-sub"},"Skriv navnet ditt for å låne",-1)),O("div",B0,[v[11]||(v[11]=O("label",{for:"name-input"},"Ditt navn",-1)),St(O("input",{id:"name-input",ref_key:"nameInput",ref:_,"onUpdate:modelValue":v[1]||(v[1]=A=>f.value=A),class:"input",placeholder:"Skriv her...",autocomplete:"name",onKeydown:ol(y,["enter"])},null,544),[[qt,f.value]])]),oe.value?(ne(),he("div",$0,[v[12]||(v[12]=O("label",{for:"ctrl-input"},"Antall kontrollere",-1)),O("div",j0,[O("button",{class:Ze(["ctrl-btn",{active:p.value===1}]),onClick:v[2]||(v[2]=A=>p.value=1)},"1",2),O("button",{class:Ze(["ctrl-btn",{active:p.value===2}]),onClick:v[3]||(v[3]=A=>p.value=2)},"2",2),O("button",{class:Ze(["ctrl-btn",{active:p.value===3}]),onClick:v[4]||(v[4]=A=>p.value=3)},"3",2),O("button",{class:Ze(["ctrl-btn",{active:p.value===4}]),onClick:v[5]||(v[5]=A=>p.value=4)},"4",2)])])):Qe("",!0),O("div",q0,[O("button",{class:"btn btn-primary btn-full",disabled:!f.value.trim(),onClick:y}," Bekreft lån ",8,W0),O("button",{class:"btn btn-secondary btn-full",onClick:m},"Avbryt")])])])):Qe("",!0)])),(ne(),zr(Ah,{to:"body"},[b.value?(ne(),he("div",{key:0,class:"modal-overlay",onClick:v[9]||(v[9]=Zs(A=>b.value=!1,["self"]))},[O("div",H0,[v[17]||(v[17]=O("h3",null,"Admin",-1)),v[18]||(v[18]=O("p",{class:"modal-sub"},"Logg inn for å administrere",-1)),O("form",{onSubmit:Zs(F,["prevent"])},[O("div",K0,[v[14]||(v[14]=O("label",{for:"login-email"},"E-post",-1)),St(O("input",{id:"login-email",ref_key:"emailInput",ref:$,"onUpdate:modelValue":v[6]||(v[6]=A=>k.value=A),class:"input",type:"email",placeholder:"admin@example.com",autocomplete:"email",required:""},null,512),[[qt,k.value]])]),O("div",z0,[v[15]||(v[15]=O("label",{for:"login-password"},"Passord",-1)),St(O("input",{id:"login-password","onUpdate:modelValue":v[7]||(v[7]=A=>S.value=A),class:"input",type:"password",placeholder:"Passord",autocomplete:"current-password",required:""},null,512),[[qt,S.value]])]),O("div",G0,[v[16]||(v[16]=O("button",{type:"submit",class:"btn btn-primary btn-full"},"Logg inn",-1)),O("button",{type:"button",class:"btn btn-secondary btn-full",onClick:v[8]||(v[8]=A=>b.value=!1)},"Avbryt")]),C.value?(ne(),he("p",Q0,Ve(C.value),1)):Qe("",!0)],32)])])):Qe("",!0)]))]))}}),bu=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},J0=bu(Y0,[["__scopeId","data-v-8bb9bfba"]]),X0={class:"view active"},Z0={class:"header"},eR={class:"header-top"},tR={class:"content"},nR={class:"card login-card"},rR={class:"form-group"},sR={class:"form-group"},iR={key:0,class:"error-message"},oR=Ti({__name:"LoginView",setup(n){const e=Ot("currentView");Ot("showToast");const t=Ot("loading"),{login:r}=Au(),s=Ie(""),i=Ie(""),a=Ie("");async function l(){a.value="",t.value=!0;try{await r(s.value,i.value),e.value="admin"}catch(c){const h=c.code;h==="auth/user-not-found"?a.value="Bruker ikke funnet":h==="auth/wrong-password"?a.value="Feil passord":h==="auth/invalid-email"?a.value="Ugyldig e-post":h==="auth/too-many-requests"?a.value="For mange forsøk. Prøv igjen senere.":a.value="Feil e-post eller passord"}finally{t.value=!1}}return(c,h)=>(ne(),he("div",X0,[O("header",Z0,[O("div",eR,[O("button",{class:"btn-text back-btn",onClick:h[0]||(h[0]=f=>e.value="student")}," ← Tilbake "),h[3]||(h[3]=O("h1",{class:"header-title"},"Admin",-1))])]),O("main",tR,[O("section",nR,[O("form",{onSubmit:Zs(l,["prevent"])},[O("div",rR,[h[4]||(h[4]=O("label",{for:"login-email"},"E-post",-1)),St(O("input",{id:"login-email","onUpdate:modelValue":h[1]||(h[1]=f=>s.value=f),class:"input",type:"email",placeholder:"admin@example.com",autocomplete:"email",required:""},null,512),[[qt,s.value]])]),O("div",sR,[h[5]||(h[5]=O("label",{for:"login-password"},"Passord",-1)),St(O("input",{id:"login-password","onUpdate:modelValue":h[2]||(h[2]=f=>i.value=f),class:"input",type:"password",placeholder:"Passord",autocomplete:"current-password",required:""},null,512),[[qt,i.value]])]),h[6]||(h[6]=O("button",{type:"submit",class:"btn btn-primary btn-full"},"Logg inn",-1)),a.value?(ne(),he("p",iR,Ve(a.value),1)):Qe("",!0)],32)])])]))}}),aR=["innerHTML"],lR=Ti({__name:"SfIcon",props:{name:{},size:{}},setup(n){const e={gamecontroller:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
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
</svg>`};return(t,r)=>(ne(),he("span",{class:"sf-icon",style:Zo({width:(n.size??20)+"px",height:(n.size??20)+"px"}),innerHTML:e[n.name]},null,12,aR))}}),yn=bu(lR,[["__scopeId","data-v-8bfe09d2"]]),cR={class:"admin-split"},uR={class:"sidebar"},hR={class:"sidebar-nav"},dR=["onClick"],fR={class:"sidebar-footer"},pR={class:"sidebar-email"},gR={class:"admin-content"},mR={key:0,class:"empty-state"},_R={key:1,class:"card-list"},yR={class:"card-body"},vR={class:"card-title"},ER={class:"card-meta"},wR={class:"card-meta"},TR=["onClick"],IR={key:0,class:"empty-state"},AR={key:1,class:"card-list"},bR={class:"card-body"},RR={class:"card-title"},SR={class:"card-meta"},PR={class:"card-meta"},CR={key:1},kR={class:"card-list"},VR={key:0,class:"edit-inline"},DR={class:"form-group"},NR={class:"type-picker",style:{"margin-bottom":"8px"}},OR=["placeholder"],xR={class:"card-body"},MR={class:"card-title"},LR={class:"card-meta"},FR=["onClick"],UR=["onClick"],BR={key:0,class:"empty-state"},$R={class:"form-group"},jR={class:"form-group"},qR={class:"type-picker"},WR={class:"form-group"},HR={for:"new-keyboard"},KR=["placeholder"],zR={key:0,class:"form-group"},GR=Ti({__name:"AdminView",setup(n){const e=Ot("currentView"),t=Ot("showToast"),r=Ot("loading"),{currentUser:s,logout:i}=Au(),{workstations:a,activeBorrows:l,subscribeWorkstations:c,subscribeActiveBorrows:h,returnWorkstation:f,getHistory:p,seedDefaultWorkstations:_,addWorkstation:b,removeWorkstation:k,updateWorkstation:S}=xm(),C=Ie("borrows"),$=[{key:"borrows",label:"Utlån",icon:"list"},{key:"history",label:"Historikk",icon:"clock"},{key:"manage",label:"Enheter",icon:"gear"}],F=$r(()=>{var ae;return((ae=s.value)==null?void 0:ae.email)??""}),H=Ie([]),q=Ie(null),le=Ie(""),oe=Ie("pc"),T=Ie(""),m=Ie("");async function y(){await i(),e.value="student"}async function I(ae){if(confirm(`Returner ${ae}?`)){r.value=!0;try{await f(ae),t(`${ae} er returnert`,"success")}catch(W){console.error(W),t("Kunne ikke returnere","error")}finally{r.value=!1}}}async function v(ae=!1){r.value=!0;try{const W=await p(20,ae?q.value:null);q.value=W.lastVisible,ae?H.value.push(...W.records):H.value=W.records}catch(W){console.error(W),t("Kunne ikke laste historikk","error")}finally{r.value=!1}}async function A(){if(confirm("Sett inn standardenheter?")){r.value=!0;try{await _(),t("Standardenheter er lagt til","success")}catch(ae){console.error(ae),t("Kunne ikke sette inn enheter","error")}finally{r.value=!1}}}async function w(){if(le.value.trim()){r.value=!0;try{await b(le.value.trim(),oe.value,T.value.trim(),m.value.trim()),t(`${le.value} er lagt til`,"success"),le.value="",T.value="",m.value=""}catch(ae){console.error(ae),t("Kunne ikke legge til enheten","error")}finally{r.value=!1}}}async function Ge(ae){if(confirm(`Fjern ${ae}?`)){r.value=!0;try{await k(ae),t(`${ae} er fjernet`,"success")}catch(W){console.error(W),t("Kunne ikke fjerne enheten","error")}finally{r.value=!1}}}const lt=Ie(null),Fe=Ie(""),me=Ie("pc"),_e=Ie(""),ct=Ie("");function pn(ae){lt.value=ae.id,Fe.value=ae.name,me.value=ae.type,_e.value=ae.keyboard||"",ct.value=ae.mouse||""}function Ut(){lt.value=null}async function $e(){if(lt.value){r.value=!0;try{await S(lt.value,{newName:Fe.value.trim(),type:me.value,keyboard:_e.value.trim(),mouse:ct.value.trim()}),t(`${lt.value} er oppdatert`,"success"),lt.value=null}catch(ae){console.error(ae),t("Kunne ikke oppdatere enheten","error")}finally{r.value=!1}}}function je(ae){C.value=ae,ae==="history"&&(H.value=[],q.value=null,v())}function _s(ae){if(!ae)return"—";const W=ae.toDate?ae.toDate():new Date(ae);return`${String(W.getDate()).padStart(2,"0")}.${String(W.getMonth()+1).padStart(2,"0")} ${String(W.getHours()).padStart(2,"0")}:${String(W.getMinutes()).padStart(2,"0")}`}function Yt(ae){if(!ae)return"—";const W=ae.toDate?ae.toDate():new Date(ae);return`${String(W.getDate()).padStart(2,"0")}.${String(W.getMonth()+1).padStart(2,"0")}.${W.getFullYear()} ${String(W.getHours()).padStart(2,"0")}:${String(W.getMinutes()).padStart(2,"0")}`}return Ic(()=>{c(),h()}),(ae,W)=>(ne(),he("div",cR,[O("aside",uR,[O("div",{class:"sidebar-top"},[W[11]||(W[11]=O("div",{class:"sidebar-title"},"Admin",-1)),O("button",{class:"sidebar-logout",onClick:y}," Logg ut ")]),O("nav",hR,[(ne(),he(Ke,null,gr($,re=>O("button",{key:re.key,class:Ze(["sidebar-item",{active:C.value===re.key}]),onClick:ut=>je(re.key)},[Je(yn,{name:re.icon,size:20},null,8,["name"]),O("span",null,Ve(re.label),1)],10,dR)),64))]),O("div",fR,[O("div",pR,Ve(F.value),1)])]),O("main",gR,[St(O("section",null,[W[12]||(W[12]=O("h2",{class:"section-title"},"Utlån",-1)),Br(l).length===0?(ne(),he("div",mR,"Ingen utlån")):(ne(),he("div",_R,[(ne(!0),he(Ke,null,gr(Br(l),re=>(ne(),he("div",{key:re.id,class:"card-row"},[O("div",yR,[O("div",vR,Ve(re.workstation),1),O("div",ER,Ve(re.borrower),1),O("div",wR,[re.controllers?(ne(),he(Ke,{key:0},[Je(yn,{name:"gamecontroller",size:12}),jt(" "+Ve(re.controllers)+" kontrollere · ",1)],64)):Qe("",!0),jt(" "+Ve(_s(re.borrowedAt)),1)])]),O("button",{class:"btn-return",onClick:ut=>I(re.workstation)},"Returner",8,TR)]))),128))]))],512),[[nl,C.value==="borrows"]]),St(O("section",null,[W[13]||(W[13]=O("h2",{class:"section-title"},"Historikk",-1)),H.value.length===0?(ne(),he("div",IR,"Ingen historikk")):(ne(),he("div",AR,[(ne(!0),he(Ke,null,gr(H.value,re=>(ne(),he("div",{key:re.id,class:"card-row history-row"},[O("div",bR,[O("div",RR,Ve(re.workstation),1),O("div",SR,Ve(re.borrower),1),O("div",PR,[re.controllers?(ne(),he(Ke,{key:0},[Je(yn,{name:"gamecontroller",size:12}),jt(" "+Ve(re.controllers)+" kontrollere · ",1)],64)):Qe("",!0),jt(" Lånt "+Ve(Yt(re.borrowedAt))+" ",1),re.returnedAt?(ne(),he("span",CR," | retur "+Ve(Yt(re.returnedAt)),1)):Qe("",!0)])]),O("span",{class:Ze(["card-status",re.returnedAt?"returned":"active"])},Ve(re.returnedAt?"Returnert":"Aktiv"),3)]))),128)),H.value.length>=20?(ne(),he("button",{key:0,class:"btn-load",onClick:W[0]||(W[0]=re=>v(!0))},"Last flere")):Qe("",!0)]))],512),[[nl,C.value==="history"]]),St(O("section",null,[W[25]||(W[25]=O("h2",{class:"section-title"},"Enheter",-1)),O("div",kR,[(ne(!0),he(Ke,null,gr(Br(a),re=>(ne(),he("div",{key:re.id,class:"card-row manage-row"},[lt.value===re.id?(ne(),he("div",VR,[O("div",DR,[W[14]||(W[14]=O("label",null,"Navn",-1)),St(O("input",{"onUpdate:modelValue":W[1]||(W[1]=ut=>Fe.value=ut),class:"input",placeholder:"Navn"},null,512),[[qt,Fe.value]])]),O("div",NR,[O("button",{type:"button",class:Ze(["type-btn",{active:me.value==="pc"}]),onClick:W[2]||(W[2]=ut=>me.value="pc")},[Je(yn,{name:"desktopcomputer",size:16}),W[15]||(W[15]=jt(" PC ",-1))],2),O("button",{type:"button",class:Ze(["type-btn",{active:me.value==="playstation"}]),onClick:W[3]||(W[3]=ut=>me.value="playstation")},[Je(yn,{name:"gamecontroller",size:16}),W[16]||(W[16]=jt(" PS ",-1))],2)]),St(O("input",{"onUpdate:modelValue":W[4]||(W[4]=ut=>_e.value=ut),class:"input",placeholder:me.value==="playstation"?"Tilbehør":"Tastatur",style:{"margin-bottom":"6px"}},null,8,OR),[[qt,_e.value]]),me.value==="pc"?St((ne(),he("input",{key:0,"onUpdate:modelValue":W[5]||(W[5]=ut=>ct.value=ut),class:"input",placeholder:"Mus",style:{"margin-bottom":"6px"}},null,512)),[[qt,ct.value]]):Qe("",!0),O("div",{class:"edit-actions"},[O("button",{class:"btn-return",onClick:$e},"Lagre"),O("button",{class:"btn-remove",onClick:Ut},"Avbryt")])])):(ne(),he(Ke,{key:1},[O("div",xR,[O("div",MR,[Je(yn,{name:re.type==="playstation"?"gamecontroller":"desktopcomputer",size:16},null,8,["name"]),jt(" "+Ve(re.name),1)]),O("div",LR,Ve(re.status==="available"?"Ledig":"Utlånt"),1)]),re.status==="available"?(ne(),he("button",{key:0,class:"btn-edit",onClick:ut=>pn(re)},"Rediger",8,FR)):Qe("",!0),re.status==="available"?(ne(),he("button",{key:1,class:"btn-remove",onClick:ut=>Ge(re.name)},"Fjern",8,UR)):Qe("",!0)],64))]))),128)),Br(a).length===0?(ne(),he("div",BR,"Ingen enheter")):Qe("",!0)]),O("button",{class:"btn-seed",onClick:A},[Je(yn,{name:"tray.and.arrow.down",size:16}),W[17]||(W[17]=jt(" Sett inn standardenheter ",-1))]),O("form",{class:"add-form",onSubmit:Zs(w,["prevent"])},[W[23]||(W[23]=O("h3",null,"Ny enhet",-1)),O("div",$R,[W[18]||(W[18]=O("label",{for:"new-name"},"Navn",-1)),St(O("input",{id:"new-name","onUpdate:modelValue":W[6]||(W[6]=re=>le.value=re),class:"input",placeholder:"F.eks. PC 4",required:""},null,512),[[qt,le.value]])]),O("div",jR,[W[21]||(W[21]=O("label",null,"Type",-1)),O("div",qR,[O("button",{type:"button",class:Ze(["type-btn",{active:oe.value==="pc"}]),onClick:W[7]||(W[7]=re=>oe.value="pc")},[Je(yn,{name:"desktopcomputer",size:18}),W[19]||(W[19]=jt(" PC ",-1))],2),O("button",{type:"button",class:Ze(["type-btn",{active:oe.value==="playstation"}]),onClick:W[8]||(W[8]=re=>oe.value="playstation")},[Je(yn,{name:"gamecontroller",size:18}),W[20]||(W[20]=jt(" PlayStation ",-1))],2)])]),O("div",WR,[O("label",HR,Ve(oe.value==="playstation"?"Tilbehør":"Tastatur"),1),St(O("input",{id:"new-keyboard","onUpdate:modelValue":W[9]||(W[9]=re=>T.value=re),class:"input",placeholder:oe.value==="playstation"?"F.eks. Kontroller x2, ladestasjon":"F.eks. Tastatur 4"},null,8,KR),[[qt,T.value]])]),oe.value==="pc"?(ne(),he("div",zR,[W[22]||(W[22]=O("label",{for:"new-mouse"},"Mus",-1)),St(O("input",{id:"new-mouse","onUpdate:modelValue":W[10]||(W[10]=re=>m.value=re),class:"input",placeholder:"F.eks. Mus 4"},null,512),[[qt,m.value]])])):Qe("",!0),W[24]||(W[24]=O("button",{type:"submit",class:"btn-submit"},"Legg til",-1))],32)],512),[[nl,C.value==="manage"]])])]))}}),QR=bu(GR,[["__scopeId","data-v-c30b2f04"]]),YR={id:"toast-container"},JR={key:0,id:"loading-overlay"},XR=Ti({__name:"App",setup(n){const e=Ie("student"),t=Ie([]);let r=0;function s(a,l="info"){const c=++r;t.value.push({id:c,message:a,type:l}),setTimeout(()=>{const h=t.value.findIndex(f=>f.id===c);h!==-1&&t.value.splice(h,1)},3e3)}fo("showToast",s),fo("currentView",e);const i=Ie(!1);return fo("loading",i),(a,l)=>(ne(),he(Ke,null,[O("div",YR,[(ne(!0),he(Ke,null,gr(t.value,c=>(ne(),he("div",{key:c.id,class:Ze(["toast",c.type])},Ve(c.message),3))),128))]),i.value?(ne(),he("div",JR,[...l[0]||(l[0]=[O("div",{class:"loader-ring"},null,-1),O("p",null,"Laster...",-1)])])):Qe("",!0),e.value==="student"?(ne(),zr(J0,{key:1})):e.value==="login"?(ne(),zr(oR,{key:2})):e.value==="admin"?(ne(),zr(QR,{key:3})):Qe("",!0)],64))}});Rv(XR).mount("#app");

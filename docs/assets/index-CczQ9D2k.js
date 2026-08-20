(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function oc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const De={},Kr=[],rn=()=>{},hf=()=>!1,Qo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Jo=t=>t.startsWith("onUpdate:"),ut=Object.assign,ac=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},e_=Object.prototype.hasOwnProperty,Se=(t,e)=>e_.call(t,e),fe=Array.isArray,zr=t=>vi(t)==="[object Map]",df=t=>vi(t)==="[object Set]",dh=t=>vi(t)==="[object Date]",ye=t=>typeof t=="function",Ue=t=>typeof t=="string",cn=t=>typeof t=="symbol",ke=t=>t!==null&&typeof t=="object",ff=t=>(ke(t)||ye(t))&&ye(t.then)&&ye(t.catch),pf=Object.prototype.toString,vi=t=>pf.call(t),t_=t=>vi(t).slice(8,-1),mf=t=>vi(t)==="[object Object]",lc=t=>Ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ks=oc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},n_=/-\w/g,Kt=Yo(t=>t.replace(n_,e=>e.slice(1).toUpperCase())),r_=/\B([A-Z])/g,sr=Yo(t=>t.replace(r_,"-$1").toLowerCase()),gf=Yo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Wa=Yo(t=>t?`on${gf(t)}`:""),nn=(t,e)=>!Object.is(t,e),ho=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},_f=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},cc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let fh;const Xo=()=>fh||(fh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zo(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ue(r)?a_(r):Zo(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ue(t)||ke(t))return t}const s_=/;(?![^(]*\))/g,i_=/:([^]+)/,o_=/\/\*[^]*?\*\//g;function a_(t){const e={};return t.replace(o_,"").split(s_).forEach(n=>{if(n){const r=n.split(i_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function rt(t){let e="";if(Ue(t))e=t;else if(fe(t))for(let n=0;n<t.length;n++){const r=rt(t[n]);r&&(e+=r+" ")}else if(ke(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const l_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",c_=oc(l_);function yf(t){return!!t||t===""}function u_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=uc(t[r],e[r]);return n}function uc(t,e){if(t===e)return!0;let n=dh(t),r=dh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=cn(t),r=cn(e),n||r)return t===e;if(n=fe(t),r=fe(e),n||r)return n&&r?u_(t,e):!1;if(n=ke(t),r=ke(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in t){const l=t.hasOwnProperty(a),c=e.hasOwnProperty(a);if(l&&!c||!l&&c||!uc(t[a],e[a]))return!1}}return String(t)===String(e)}const vf=t=>!!(t&&t.__v_isRef===!0),Ce=t=>Ue(t)?t:t==null?"":fe(t)||ke(t)&&(t.toString===pf||!ye(t.toString))?vf(t)?Ce(t.value):JSON.stringify(t,Ef,2):String(t),Ef=(t,e)=>vf(e)?Ef(t,e.value):zr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ha(r,i)+" =>"]=s,n),{})}:df(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ha(n))}:cn(e)?Ha(e):ke(e)&&!fe(e)&&!mf(e)?String(e):e,Ha=(t,e="")=>{var n;return cn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ot;class h_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&ot&&(ot.active?(this.parent=ot,this.index=(ot.scopes||(ot.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=ot;try{return ot=this,e()}finally{ot=n}}}on(){++this._on===1&&(this.prevScope=ot,ot=this)}off(){if(this._on>0&&--this._on===0){if(ot===this)ot=this.prevScope;else{let e=ot;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function d_(){return ot}let Ne;const Ka=new WeakSet;class wf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ot&&(ot.active?ot.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ka.has(this)&&(Ka.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||If(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ph(this),Af(this);const e=Ne,n=zt;Ne=this,zt=!0;try{return this.fn()}finally{bf(this),Ne=e,zt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)fc(e);this.deps=this.depsTail=void 0,ph(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ka.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){wl(this)&&this.run()}get dirty(){return wl(this)}}let Tf=0,zs,Gs;function If(t,e=!1){if(t.flags|=8,e){t.next=Gs,Gs=t;return}t.next=zs,zs=t}function hc(){Tf++}function dc(){if(--Tf>0)return;if(Gs){let e=Gs;for(Gs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;zs;){let e=zs;for(zs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Af(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function bf(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),fc(r),f_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function wl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Rf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Rf(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===si)||(t.globalVersion=si,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!wl(t))))return;t.flags|=2;const e=t.dep,n=Ne,r=zt;Ne=t,zt=!0;try{Af(t);const s=t.fn(t._value);(e.version===0||nn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ne=n,zt=r,bf(t),t.flags&=-3}}function fc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)fc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function f_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let zt=!0;const Sf=[];function un(){Sf.push(zt),zt=!1}function hn(){const t=Sf.pop();zt=t===void 0?!0:t}function ph(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ne;Ne=void 0;try{e()}finally{Ne=n}}}let si=0;class p_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class pc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ne||!zt||Ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ne)n=this.activeLink=new p_(Ne,this),Ne.deps?(n.prevDep=Ne.depsTail,Ne.depsTail.nextDep=n,Ne.depsTail=n):Ne.deps=Ne.depsTail=n,Pf(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ne.depsTail,n.nextDep=void 0,Ne.depsTail.nextDep=n,Ne.depsTail=n,Ne.deps===n&&(Ne.deps=r)}return n}trigger(e){this.version++,si++,this.notify(e)}notify(e){hc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{dc()}}}function Pf(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Pf(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Tl=new WeakMap,vr=Symbol(""),Il=Symbol(""),ii=Symbol("");function _t(t,e,n){if(zt&&Ne){let r=Tl.get(t);r||Tl.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new pc),s.map=r,s.key=n),s.track()}}function wn(t,e,n,r,s,i){const a=Tl.get(t);if(!a){si++;return}const l=c=>{c&&c.trigger()};if(hc(),e==="clear")a.forEach(l);else{const c=fe(t),h=c&&lc(n);if(c&&n==="length"){const f=Number(r);a.forEach((m,y)=>{(y==="length"||y===ii||!cn(y)&&y>=f)&&l(m)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),h&&l(a.get(ii)),e){case"add":c?h&&l(a.get("length")):(l(a.get(vr)),zr(t)&&l(a.get(Il)));break;case"delete":c||(l(a.get(vr)),zr(t)&&l(a.get(Il)));break;case"set":zr(t)&&l(a.get(vr));break}}dc()}function Lr(t){const e=Re(t);return e===t?e:(_t(e,"iterate",ii),Wt(t)?e:e.map(Gt))}function ea(t){return _t(t=Re(t),"iterate",ii),t}function en(t,e){return Pn(t)?es(Er(t)?Gt(e):e):Gt(e)}const m_={__proto__:null,[Symbol.iterator](){return za(this,Symbol.iterator,t=>en(this,t))},concat(...t){return Lr(this).concat(...t.map(e=>fe(e)?Lr(e):e))},entries(){return za(this,"entries",t=>(t[1]=en(this,t[1]),t))},every(t,e){return _n(this,"every",t,e,void 0,arguments)},filter(t,e){return _n(this,"filter",t,e,n=>n.map(r=>en(this,r)),arguments)},find(t,e){return _n(this,"find",t,e,n=>en(this,n),arguments)},findIndex(t,e){return _n(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return _n(this,"findLast",t,e,n=>en(this,n),arguments)},findLastIndex(t,e){return _n(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return _n(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ga(this,"includes",t)},indexOf(...t){return Ga(this,"indexOf",t)},join(t){return Lr(this).join(t)},lastIndexOf(...t){return Ga(this,"lastIndexOf",t)},map(t,e){return _n(this,"map",t,e,void 0,arguments)},pop(){return ks(this,"pop")},push(...t){return ks(this,"push",t)},reduce(t,...e){return mh(this,"reduce",t,e)},reduceRight(t,...e){return mh(this,"reduceRight",t,e)},shift(){return ks(this,"shift")},some(t,e){return _n(this,"some",t,e,void 0,arguments)},splice(...t){return ks(this,"splice",t)},toReversed(){return Lr(this).toReversed()},toSorted(t){return Lr(this).toSorted(t)},toSpliced(...t){return Lr(this).toSpliced(...t)},unshift(...t){return ks(this,"unshift",t)},values(){return za(this,"values",t=>en(this,t))}};function za(t,e,n){const r=ea(t),s=r[e]();return r!==t&&!Wt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const g_=Array.prototype;function _n(t,e,n,r,s,i){const a=ea(t),l=a!==t&&!Wt(t),c=a[e];if(c!==g_[e]){const m=c.apply(t,i);return l?Gt(m):m}let h=n;a!==t&&(l?h=function(m,y){return n.call(this,en(t,m),y,t)}:n.length>2&&(h=function(m,y){return n.call(this,m,y,t)}));const f=c.call(a,h,r);return l&&s?s(f):f}function mh(t,e,n,r){const s=ea(t),i=s!==t&&!Wt(t);let a=n,l=!1;s!==t&&(i?(l=r.length===0,a=function(h,f,m){return l&&(l=!1,h=en(t,h)),n.call(this,h,en(t,f),m,t)}):n.length>3&&(a=function(h,f,m){return n.call(this,h,f,m,t)}));const c=s[e](a,...r);return l?en(t,c):c}function Ga(t,e,n){const r=Re(t);_t(r,"iterate",ii);const s=r[e](...n);return(s===-1||s===!1)&&yc(n[0])?(n[0]=Re(n[0]),r[e](...n)):s}function ks(t,e,n=[]){un(),hc();const r=Re(t)[e].apply(t,n);return dc(),hn(),r}const __=oc("__proto__,__v_isRef,__isVue"),Cf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(cn));function y_(t){cn(t)||(t=String(t));const e=Re(this);return _t(e,"has",t),e.hasOwnProperty(t)}class kf{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?P_:Of:i?Nf:Df).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=fe(e);if(!s){let c;if(a&&(c=m_[n]))return c;if(n==="hasOwnProperty")return y_}const l=Reflect.get(e,n,vt(e)?e:r);if((cn(n)?Cf.has(n):__(n))||(s||_t(e,"get",n),i))return l;if(vt(l)){const c=a&&lc(n)?l:l.value;return s&&ke(c)?bl(c):c}return ke(l)?s?bl(l):gc(l):l}}class Vf extends kf{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const a=fe(e)&&lc(n);if(!this._isShallow){const h=Pn(i);if(!Wt(r)&&!Pn(r)&&(i=Re(i),r=Re(r)),!a&&vt(i)&&!vt(r))return h||(i.value=r),!0}const l=a?Number(n)<e.length:Se(e,n),c=Reflect.set(e,n,r,vt(e)?e:s);return e===Re(s)&&c&&(l?nn(r,i)&&wn(e,"set",n,r):wn(e,"add",n,r)),c}deleteProperty(e,n){const r=Se(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&wn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!cn(n)||!Cf.has(n))&&_t(e,"has",n),r}ownKeys(e){return _t(e,"iterate",fe(e)?"length":vr),Reflect.ownKeys(e)}}class v_ extends kf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const E_=new Vf,w_=new v_,T_=new Vf(!0);const Al=t=>t,eo=t=>Reflect.getPrototypeOf(t);function I_(t,e,n){return function(...r){const s=this.__v_raw,i=Re(s),a=zr(i),l=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,h=s[t](...r),f=n?Al:e?es:Gt;return!e&&_t(i,"iterate",c?Il:vr),ut(Object.create(h),{next(){const{value:m,done:y}=h.next();return y?{value:m,done:y}:{value:l?[f(m[0]),f(m[1])]:f(m),done:y}}})}}function to(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function A_(t,e){const n={get(s){const i=this.__v_raw,a=Re(i),l=Re(s);t||(nn(s,l)&&_t(a,"get",s),_t(a,"get",l));const{has:c}=eo(a),h=e?Al:t?es:Gt;if(c.call(a,s))return h(i.get(s));if(c.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!t&&_t(Re(s),"iterate",vr),s.size},has(s){const i=this.__v_raw,a=Re(i),l=Re(s);return t||(nn(s,l)&&_t(a,"has",s),_t(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=Re(l),h=e?Al:t?es:Gt;return!t&&_t(c,"iterate",vr),l.forEach((f,m)=>s.call(i,h(f),h(m),a))}};return ut(n,t?{add:to("add"),set:to("set"),delete:to("delete"),clear:to("clear")}:{add(s){const i=Re(this),a=eo(i),l=Re(s),c=!e&&!Wt(s)&&!Pn(s)?l:s;return a.has.call(i,c)||nn(s,c)&&a.has.call(i,s)||nn(l,c)&&a.has.call(i,l)||(i.add(c),wn(i,"add",c,c)),this},set(s,i){!e&&!Wt(i)&&!Pn(i)&&(i=Re(i));const a=Re(this),{has:l,get:c}=eo(a);let h=l.call(a,s);h||(s=Re(s),h=l.call(a,s));const f=c.call(a,s);return a.set(s,i),h?nn(i,f)&&wn(a,"set",s,i):wn(a,"add",s,i),this},delete(s){const i=Re(this),{has:a,get:l}=eo(i);let c=a.call(i,s);c||(s=Re(s),c=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&wn(i,"delete",s,void 0),h},clear(){const s=Re(this),i=s.size!==0,a=s.clear();return i&&wn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=I_(s,t,e)}),n}function mc(t,e){const n=A_(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Se(n,s)&&s in r?n:r,s,i)}const b_={get:mc(!1,!1)},R_={get:mc(!1,!0)},S_={get:mc(!0,!1)};const Df=new WeakMap,Nf=new WeakMap,Of=new WeakMap,P_=new WeakMap;function C_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gc(t){return Pn(t)?t:_c(t,!1,E_,b_,Df)}function k_(t){return _c(t,!1,T_,R_,Nf)}function bl(t){return _c(t,!0,w_,S_,Of)}function _c(t,e,n,r,s){if(!ke(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const i=s.get(t);if(i)return i;const a=C_(t_(t));if(a===0)return t;const l=new Proxy(t,a===2?r:n);return s.set(t,l),l}function Er(t){return Pn(t)?Er(t.__v_raw):!!(t&&t.__v_isReactive)}function Pn(t){return!!(t&&t.__v_isReadonly)}function Wt(t){return!!(t&&t.__v_isShallow)}function yc(t){return t?!!t.__v_raw:!1}function Re(t){const e=t&&t.__v_raw;return e?Re(e):t}function V_(t){return!Se(t,"__v_skip")&&Object.isExtensible(t)&&_f(t,"__v_skip",!0),t}const Gt=t=>ke(t)?gc(t):t,es=t=>ke(t)?bl(t):t;function vt(t){return t?t.__v_isRef===!0:!1}function ve(t){return D_(t,!1)}function D_(t,e){return vt(t)?t:new N_(t,e)}class N_{constructor(e,n){this.dep=new pc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Re(e),this._value=n?e:Gt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Wt(e)||Pn(e);e=r?e:Re(e),nn(e,n)&&(this._rawValue=e,this._value=r?e:Gt(e),this.dep.trigger())}}function qr(t){return vt(t)?t.value:t}const O_={get:(t,e,n)=>e==="__v_raw"?t:qr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return vt(s)&&!vt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function xf(t){return Er(t)?t:new Proxy(t,O_)}class x_{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new pc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=si-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ne!==this)return If(this,!0),!0}get value(){const e=this.dep.track();return Rf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function M_(t,e,n=!1){let r,s;return ye(t)?r=t:(r=t.get,s=t.set),new x_(r,s,n)}const no={},Ao=new WeakMap;let fr;function L_(t,e=!1,n=fr){if(n){let r=Ao.get(n);r||Ao.set(n,r=[]),r.push(t)}}function F_(t,e,n=De){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=n,h=L=>s?L:Wt(L)||s===!1||s===0?Tn(L,1):Tn(L);let f,m,y,b,V=!1,N=!1;if(vt(t)?(m=()=>t.value,V=Wt(t)):Er(t)?(m=()=>h(t),V=!0):fe(t)?(N=!0,V=t.some(L=>Er(L)||Wt(L)),m=()=>t.map(L=>{if(vt(L))return L.value;if(Er(L))return h(L);if(ye(L))return c?c(L,2):L()})):ye(t)?e?m=c?()=>c(t,2):t:m=()=>{if(y){un();try{y()}finally{hn()}}const L=fr;fr=f;try{return c?c(t,3,[b]):t(b)}finally{fr=L}}:m=rn,e&&s){const L=m,Y=s===!0?1/0:s;m=()=>Tn(L(),Y)}const P=d_(),O=()=>{f.stop(),P&&P.active&&ac(P.effects,f)};if(i&&e){const L=e;e=(...Y)=>{const ne=L(...Y);return O(),ne}}let x=N?new Array(t.length).fill(no):no;const W=L=>{if(!(!(f.flags&1)||!f.dirty&&!L))if(e){const Y=f.run();if(L||s||V||(N?Y.some((ne,w)=>nn(ne,x[w])):nn(Y,x))){y&&y();const ne=fr;fr=f;try{const w=[Y,x===no?void 0:N&&x[0]===no?[]:x,b];x=Y,c?c(e,3,w):e(...w)}finally{fr=ne}}}else f.run()};return l&&l(W),f=new wf(m),f.scheduler=a?()=>a(W,!1):W,b=L=>L_(L,!1,f),y=f.onStop=()=>{const L=Ao.get(f);if(L){if(c)c(L,4);else for(const Y of L)Y();Ao.delete(f)}},e?r?W(!0):x=f.run():a?a(W.bind(null,!0),!0):f.run(),O.pause=f.pause.bind(f),O.resume=f.resume.bind(f),O.stop=O,O}function Tn(t,e=1/0,n){if(e<=0||!ke(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,vt(t))Tn(t.value,e,n);else if(fe(t))for(let r=0;r<t.length;r++)Tn(t[r],e,n);else if(df(t)||zr(t))t.forEach(r=>{Tn(r,e,n)});else if(mf(t)){for(const r in t)Tn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Tn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ei(t,e,n,r){try{return r?t(...r):t()}catch(s){ta(s,e,n)}}function Qt(t,e,n,r){if(ye(t)){const s=Ei(t,e,n,r);return s&&ff(s)&&s.catch(i=>{ta(i,e,n)}),s}if(fe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Qt(t[i],e,n,r));return s}}function ta(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||De;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let m=0;m<f.length;m++)if(f[m](t,c,h)===!1)return}l=l.parent}if(i){un(),Ei(i,null,10,[t,c,h]),hn();return}}U_(t,n,s,r,a)}function U_(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Rt=[];let Zt=-1;const Gr=[];let qn=null,Fr=0;const Mf=Promise.resolve();let bo=null;function Rl(t){const e=bo||Mf;return t?e.then(this?t.bind(this):t):e}function B_(t){let e=Zt+1,n=Rt.length;for(;e<n;){const r=e+n>>>1,s=Rt[r],i=oi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function vc(t){if(!(t.flags&1)){const e=oi(t),n=Rt[Rt.length-1];!n||!(t.flags&2)&&e>=oi(n)?Rt.push(t):Rt.splice(B_(e),0,t),t.flags|=1,Lf()}}function Lf(){bo||(bo=Mf.then(Uf))}function $_(t){fe(t)?Gr.push(...t):qn&&t.id===-1?qn.splice(Fr+1,0,t):t.flags&1||(Gr.push(t),t.flags|=1),Lf()}function gh(t,e,n=Zt+1){for(;n<Rt.length;n++){const r=Rt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Rt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ff(t){if(Gr.length){const e=[...new Set(Gr)].sort((n,r)=>oi(n)-oi(r));if(Gr.length=0,qn){qn.push(...e);return}for(qn=e,Fr=0;Fr<qn.length;Fr++){const n=qn[Fr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}qn=null,Fr=0}}const oi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Uf(t){try{for(Zt=0;Zt<Rt.length;Zt++){const e=Rt[Zt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ei(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Zt<Rt.length;Zt++){const e=Rt[Zt];e&&(e.flags&=-2)}Zt=-1,Rt.length=0,Ff(),bo=null,(Rt.length||Gr.length)&&Uf()}}let qt=null,Bf=null;function Ro(t){const e=qt;return qt=t,Bf=t&&t.type.__scopeId||null,e}function j_(t,e=qt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ch(-1);const i=Ro(e);let a;try{a=t(...s)}finally{Ro(i),r._d&&Ch(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function et(t,e){if(qt===null)return t;const n=oa(qt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=De]=e[s];i&&(ye(i)&&(i={mounted:i,updated:i}),i.deep&&Tn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function hr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(un(),Qt(c,n,8,[t.el,l,t,e]),hn())}}function fo(t,e){if(St){let n=St.provides;const r=St.parent&&St.parent.provides;r===n&&(n=St.provides=Object.create(r)),n[t]=e}}function Ft(t,e,n=!1){const r=$y();if(r||Qr){let s=Qr?Qr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ye(e)?e.call(r&&r.proxy):e}}const q_=Symbol.for("v-scx"),W_=()=>Ft(q_);function Qa(t,e,n){return $f(t,e,n)}function $f(t,e,n=De){const{immediate:r,deep:s,flush:i,once:a}=n,l=ut({},n),c=e&&r||!e&&i!=="post";let h;if(li){if(i==="sync"){const b=W_();h=b.__watcherHandles||(b.__watcherHandles=[])}else if(!c){const b=()=>{};return b.stop=rn,b.resume=rn,b.pause=rn,b}}const f=St;l.call=(b,V,N)=>Qt(b,f,V,N);let m=!1;i==="post"?l.scheduler=b=>{At(b,f&&f.suspense)}:i!=="sync"&&(m=!0,l.scheduler=(b,V)=>{V?b():vc(b)}),l.augmentJob=b=>{e&&(b.flags|=4),m&&(b.flags|=2,f&&(b.id=f.uid,b.i=f))};const y=F_(t,e,l);return li&&(h?h.push(y):c&&y()),y}function H_(t,e,n){const r=this.proxy,s=Ue(t)?t.includes(".")?jf(r,t):()=>r[t]:t.bind(r,r);let i;ye(e)?i=e:(i=e.handler,n=e);const a=Ti(this),l=$f(s,i.bind(r),n);return a(),l}function jf(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const jn=new WeakMap,qf=Symbol("_vte"),K_=t=>t.__isTeleport,mr=t=>t&&(t.disabled||t.disabled===""),z_=t=>t&&(t.defer||t.defer===""),_h=t=>typeof SVGElement<"u"&&t instanceof SVGElement,yh=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Sl=(t,e)=>{const n=t&&t.to;return Ue(n)?e?e(n):null:n},G_={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,a,l,c,h){const{mc:f,pc:m,pbc:y,o:{insert:b,querySelector:V,createText:N,createComment:P,parentNode:O}}=h,x=mr(e.props);let{dynamicChildren:W}=e;const L=(w,g,_)=>{w.shapeFlag&16&&f(w.children,g,_,s,i,a,l,c)},Y=(w=e)=>{const g=mr(w.props),_=w.target=Sl(w.props,V),T=Pl(_,w,N,b);_&&(a!=="svg"&&_h(_)?a="svg":a!=="mathml"&&yh(_)&&(a="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(_),g||(L(w,_,T),Ls(w,!1)))},ne=w=>{const g=()=>{if(jn.get(w)===g){if(jn.delete(w),mr(w.props)){const _=O(w.el)||n;L(w,_,w.anchor),Ls(w,!0)}Y(w)}};jn.set(w,g),At(g,i)};if(t==null){const w=e.el=N(""),g=e.anchor=N("");if(b(w,n,r),b(g,n,r),z_(e.props)||i&&i.pendingBranch){ne(e);return}x&&(L(e,n,g),Ls(e,!0)),Y()}else{e.el=t.el;const w=e.anchor=t.anchor,g=jn.get(t);if(g){g.flags|=8,jn.delete(t),ne(e);return}e.targetStart=t.targetStart;const _=e.target=t.target,T=e.targetAnchor=t.targetAnchor,I=mr(t.props),R=I?n:_,E=I?w:T;if(a==="svg"||_h(_)?a="svg":(a==="mathml"||yh(_))&&(a="mathml"),W?(y(t.dynamicChildren,W,R,s,i,a,l),Ac(t,e,!0)):c||m(t,e,R,E,s,i,a,l,!1),x)I?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):ro(e,n,w,h,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const $e=Sl(e.props,V);$e&&(e.target=$e,ro(e,$e,null,h,0))}else I&&ro(e,_,T,h,1);Ls(e,x)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:a,children:l,anchor:c,targetStart:h,targetAnchor:f,target:m,props:y}=t,b=mr(y),V=i||!b,N=jn.get(t);if(N&&(N.flags|=8,jn.delete(t)),m&&(s(h),s(f)),i&&s(c),!N&&(b||m)&&a&16)for(let P=0;P<l.length;P++){const O=l[P];r(O,e,n,V,!!O.dynamicChildren)}},move:ro,hydrate:Q_};function ro(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:a,anchor:l,shapeFlag:c,children:h,props:f}=t,m=i===2;if(m&&r(a,e,n),!jn.has(t)&&(!m||mr(f))&&c&16)for(let y=0;y<h.length;y++)s(h[y],e,n,2);m&&r(l,e,n)}function Q_(t,e,n,r,s,i,{o:{nextSibling:a,parentNode:l,querySelector:c,insert:h,createText:f}},m){function y(P,O){let x=O;for(;x;){if(x&&x.nodeType===8){if(x.data==="teleport start anchor")e.targetStart=x;else if(x.data==="teleport anchor"){e.targetAnchor=x,P._lpa=e.targetAnchor&&a(e.targetAnchor);break}}x=a(x)}}function b(P,O){O.anchor=m(a(P),O,l(P),n,r,s,i)}const V=e.target=Sl(e.props,c),N=mr(e.props);if(V){const P=V._lpa||V.firstChild;e.shapeFlag&16&&(N?(b(t,e),y(V,P),e.targetAnchor||Pl(V,e,f,h,l(t)===V?t:null)):(e.anchor=a(t),y(V,P),e.targetAnchor||Pl(V,e,f,h),m(P&&a(P),e,V,n,r,s,i))),Ls(e,N)}else N&&e.shapeFlag&16&&(b(t,e),e.targetStart=t,e.targetAnchor=a(t));return e.anchor&&a(e.anchor)}const Ja=G_;function Ls(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function Pl(t,e,n,r,s=null){const i=e.targetStart=n(""),a=e.targetAnchor=n("");return i[qf]=a,t&&(r(i,t,s),r(a,t,s)),a}const Ya=Symbol("_leaveCb");function Ec(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ec(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function wi(t,e){return ye(t)?ut({name:t.name},e,{setup:t}):t}function Wf(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function vh(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const So=new WeakMap;function Qs(t,e,n,r,s=!1){if(fe(t)){t.forEach((N,P)=>Qs(N,e&&(fe(e)?e[P]:e),n,r,s));return}if(Js(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Qs(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?oa(r.component):r.el,a=s?null:i,{i:l,r:c}=t,h=e&&e.r,f=l.refs===De?l.refs={}:l.refs,m=l.setupState,y=Re(m),b=m===De?hf:N=>vh(f,N)?!1:Se(y,N),V=(N,P)=>!(P&&vh(f,P));if(h!=null&&h!==c){if(Eh(e),Ue(h))f[h]=null,b(h)&&(m[h]=null);else if(vt(h)){const N=e;V(h,N.k)&&(h.value=null),N.k&&(f[N.k]=null)}}if(ye(c)){un();try{Ei(c,l,12,[a,f])}finally{hn()}}else{const N=Ue(c),P=vt(c);if(N||P){const O=()=>{if(t.f){const x=N?b(c)?m[c]:f[c]:V()||!t.k?c.value:f[t.k];if(s)fe(x)&&ac(x,i);else if(fe(x))x.includes(i)||x.push(i);else if(N)f[c]=[i],b(c)&&(m[c]=f[c]);else{const W=[i];V(c,t.k)&&(c.value=W),t.k&&(f[t.k]=W)}}else N?(f[c]=a,b(c)&&(m[c]=a)):P&&(V(c,t.k)&&(c.value=a),t.k&&(f[t.k]=a))};if(a){const x=()=>{O(),So.delete(t)};x.id=-1,So.set(t,x),At(x,n)}else Eh(t),O()}}}function Eh(t){const e=So.get(t);e&&(e.flags|=8,So.delete(t))}Xo().requestIdleCallback;Xo().cancelIdleCallback;const Js=t=>!!t.type.__asyncLoader,Hf=t=>t.type.__isKeepAlive;function J_(t,e){Kf(t,"a",e)}function Y_(t,e){Kf(t,"da",e)}function Kf(t,e,n=St){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(na(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Hf(s.parent.vnode)&&X_(r,e,n,s),s=s.parent}}function X_(t,e,n,r){const s=na(e,t,r,!0);ra(()=>{ac(r[e],s)},n)}function na(t,e,n=St,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{un();const l=Ti(n),c=Qt(e,n,t,a);return l(),hn(),c});return r?s.unshift(i):s.push(i),i}}const On=t=>(e,n=St)=>{(!li||t==="sp")&&na(t,(...r)=>e(...r),n)},Z_=On("bm"),wc=On("m"),ey=On("bu"),ty=On("u"),ny=On("bum"),ra=On("um"),ry=On("sp"),sy=On("rtg"),iy=On("rtc");function oy(t,e=St){na("ec",t,e)}const ay=Symbol.for("v-ndc");function _r(t,e,n,r){let s;const i=n,a=fe(t);if(a||Ue(t)){const l=a&&Er(t);let c=!1,h=!1;l&&(c=!Wt(t),h=Pn(t),t=ea(t)),s=new Array(t.length);for(let f=0,m=t.length;f<m;f++)s[f]=e(c?h?es(Gt(t[f])):Gt(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(ke(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}const Cl=t=>t?dp(t)?oa(t):Cl(t.parent):null,Ys=ut(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Cl(t.parent),$root:t=>Cl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Gf(t),$forceUpdate:t=>t.f||(t.f=()=>{vc(t.update)}),$nextTick:t=>t.n||(t.n=Rl.bind(t.proxy)),$watch:t=>H_.bind(t)}),Xa=(t,e)=>t!==De&&!t.__isScriptSetup&&Se(t,e),ly={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=t;if(e[0]!=="$"){const y=a[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Xa(r,e))return a[e]=1,r[e];if(s!==De&&Se(s,e))return a[e]=2,s[e];if(Se(i,e))return a[e]=3,i[e];if(n!==De&&Se(n,e))return a[e]=4,n[e];kl&&(a[e]=0)}}const h=Ys[e];let f,m;if(h)return e==="$attrs"&&_t(t.attrs,"get",""),h(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(n!==De&&Se(n,e))return a[e]=4,n[e];if(m=c.config.globalProperties,Se(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Xa(s,e)?(s[e]=n,!0):r!==De&&Se(r,e)?(r[e]=n,!0):Se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:a}},l){let c;return!!(n[l]||t!==De&&l[0]!=="$"&&Se(t,l)||Xa(e,l)||Se(i,l)||Se(r,l)||Se(Ys,l)||Se(s.config.globalProperties,l)||(c=a.__cssModules)&&c[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function wh(t){return fe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let kl=!0;function cy(t){const e=Gf(t),n=t.proxy,r=t.ctx;kl=!1,e.beforeCreate&&Th(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:f,beforeMount:m,mounted:y,beforeUpdate:b,updated:V,activated:N,deactivated:P,beforeDestroy:O,beforeUnmount:x,destroyed:W,unmounted:L,render:Y,renderTracked:ne,renderTriggered:w,errorCaptured:g,serverPrefetch:_,expose:T,inheritAttrs:I,components:R,directives:E,filters:$e}=e;if(h&&uy(h,r,null),a)for(const F in a){const H=a[F];ye(H)&&(r[F]=H.bind(n))}if(s){const F=s.call(n,n);ke(F)&&(t.data=gc(F))}if(kl=!0,i)for(const F in i){const H=i[F],Me=ye(H)?H.bind(n,n):ye(H.get)?H.get.bind(n,n):rn,Ut=!ye(H)&&ye(H.set)?H.set.bind(n):rn,Pt=Wr({get:Me,set:Ut});Object.defineProperty(r,F,{enumerable:!0,configurable:!0,get:()=>Pt.value,set:He=>Pt.value=He})}if(l)for(const F in l)zf(l[F],r,n,F);if(c){const F=ye(c)?c.call(n):c;Reflect.ownKeys(F).forEach(H=>{fo(H,F[H])})}f&&Th(f,t,"c");function _e(F,H){fe(H)?H.forEach(Me=>F(Me.bind(n))):H&&F(H.bind(n))}if(_e(Z_,m),_e(wc,y),_e(ey,b),_e(ty,V),_e(J_,N),_e(Y_,P),_e(oy,g),_e(iy,ne),_e(sy,w),_e(ny,x),_e(ra,L),_e(ry,_),fe(T))if(T.length){const F=t.exposed||(t.exposed={});T.forEach(H=>{Object.defineProperty(F,H,{get:()=>n[H],set:Me=>n[H]=Me,enumerable:!0})})}else t.exposed||(t.exposed={});Y&&t.render===rn&&(t.render=Y),I!=null&&(t.inheritAttrs=I),R&&(t.components=R),E&&(t.directives=E),_&&Wf(t)}function uy(t,e,n=rn){fe(t)&&(t=Vl(t));for(const r in t){const s=t[r];let i;ke(s)?"default"in s?i=Ft(s.from||r,s.default,!0):i=Ft(s.from||r):i=Ft(s),vt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function Th(t,e,n){Qt(fe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function zf(t,e,n,r){let s=r.includes(".")?jf(n,r):()=>n[r];if(Ue(t)){const i=e[t];ye(i)&&Qa(s,i)}else if(ye(t))Qa(s,t.bind(n));else if(ke(t))if(fe(t))t.forEach(i=>zf(i,e,n,r));else{const i=ye(t.handler)?t.handler.bind(n):e[t.handler];ye(i)&&Qa(s,i,t)}}function Gf(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>Po(c,h,a,!0)),Po(c,e,a)),ke(e)&&i.set(e,c),c}function Po(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Po(t,i,n,!0),s&&s.forEach(a=>Po(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const l=hy[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const hy={data:Ih,props:Ah,emits:Ah,methods:Fs,computed:Fs,beforeCreate:It,created:It,beforeMount:It,mounted:It,beforeUpdate:It,updated:It,beforeDestroy:It,beforeUnmount:It,destroyed:It,unmounted:It,activated:It,deactivated:It,errorCaptured:It,serverPrefetch:It,components:Fs,directives:Fs,watch:fy,provide:Ih,inject:dy};function Ih(t,e){return e?t?function(){return ut(ye(t)?t.call(this,this):t,ye(e)?e.call(this,this):e)}:e:t}function dy(t,e){return Fs(Vl(t),Vl(e))}function Vl(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function It(t,e){return t?[...new Set([].concat(t,e))]:e}function Fs(t,e){return t?ut(Object.create(null),t,e):e}function Ah(t,e){return t?fe(t)&&fe(e)?[...new Set([...t,...e])]:ut(Object.create(null),wh(t),wh(e??{})):e}function fy(t,e){if(!t)return e;if(!e)return t;const n=ut(Object.create(null),t);for(const r in e)n[r]=It(t[r],e[r]);return n}function Qf(){return{app:null,config:{isNativeTag:hf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let py=0;function my(t,e){return function(r,s=null){ye(r)||(r=ut({},r)),s!=null&&!ke(s)&&(s=null);const i=Qf(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:py++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:zy,get config(){return i.config},set config(f){},use(f,...m){return a.has(f)||(f&&ye(f.install)?(a.add(f),f.install(h,...m)):ye(f)&&(a.add(f),f(h,...m))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,m){return m?(i.components[f]=m,h):i.components[f]},directive(f,m){return m?(i.directives[f]=m,h):i.directives[f]},mount(f,m,y){if(!c){const b=h._ceVNode||tt(r,s);return b.appContext=i,y===!0?y="svg":y===!1&&(y=void 0),t(b,f,y),c=!0,h._container=f,f.__vue_app__=h,oa(b.component)}},onUnmount(f){l.push(f)},unmount(){c&&(Qt(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,m){return i.provides[f]=m,h},runWithContext(f){const m=Qr;Qr=h;try{return f()}finally{Qr=m}}};return h}}let Qr=null;const gy=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Kt(e)}Modifiers`]||t[`${sr(e)}Modifiers`];function _y(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||De;let s=n;const i=e.startsWith("update:"),a=i&&gy(r,e.slice(7));a&&(a.trim&&(s=n.map(f=>Ue(f)?f.trim():f)),a.number&&(s=n.map(cc)));let l,c=r[l=Wa(e)]||r[l=Wa(Kt(e))];!c&&i&&(c=r[l=Wa(sr(e))]),c&&Qt(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Qt(h,t,6,s)}}const yy=new WeakMap;function Jf(t,e,n=!1){const r=n?yy:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},l=!1;if(!ye(t)){const c=h=>{const f=Jf(h,e,!0);f&&(l=!0,ut(a,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(ke(t)&&r.set(t,null),null):(fe(i)?i.forEach(c=>a[c]=null):ut(a,i),ke(t)&&r.set(t,a),a)}function sa(t,e){return!t||!Qo(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Se(t,e[0].toLowerCase()+e.slice(1))||Se(t,sr(e))||Se(t,e))}function bh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:f,props:m,data:y,setupState:b,ctx:V,inheritAttrs:N}=t,P=Ro(t);let O,x;try{if(n.shapeFlag&4){const L=s||r,Y=L;O=tn(h.call(Y,L,f,m,b,y,V)),x=l}else{const L=e;O=tn(L.length>1?L(m,{attrs:l,slots:a,emit:c}):L(m,null)),x=e.props?l:vy(l)}}catch(L){Xs.length=0,ta(L,t,1),O=tt(er)}let W=O;if(x&&N!==!1){const L=Object.keys(x),{shapeFlag:Y}=W;L.length&&Y&7&&(i&&L.some(Jo)&&(x=Ey(x,i)),W=ts(W,x,!1,!0))}return n.dirs&&(W=ts(W,null,!1,!0),W.dirs=W.dirs?W.dirs.concat(n.dirs):n.dirs),n.transition&&Ec(W,n.transition),O=W,Ro(P),O}const vy=t=>{let e;for(const n in t)(n==="class"||n==="style"||Qo(n))&&((e||(e={}))[n]=t[n]);return e},Ey=(t,e)=>{const n={};for(const r in t)(!Jo(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function wy(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Rh(r,a,h):!!a;if(c&8){const f=e.dynamicProps;for(let m=0;m<f.length;m++){const y=f[m];if(Yf(a,r,y)&&!sa(h,y))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?Rh(r,a,h):!0:!!a;return!1}function Rh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(Yf(e,t,i)&&!sa(n,i))return!0}return!1}function Yf(t,e,n){const r=t[n],s=e[n];return n==="style"&&ke(r)&&ke(s)?!uc(r,s):r!==s}function Ty({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const Xf={},Zf=()=>Object.create(Xf),ep=t=>Object.getPrototypeOf(t)===Xf;function Iy(t,e,n,r=!1){const s={},i=Zf();t.propsDefaults=Object.create(null),tp(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:k_(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Ay(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,l=Re(s),[c]=t.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=t.vnode.dynamicProps;for(let m=0;m<f.length;m++){let y=f[m];if(sa(t.emitsOptions,y))continue;const b=e[y];if(c)if(Se(i,y))b!==i[y]&&(i[y]=b,h=!0);else{const V=Kt(y);s[V]=Dl(c,l,V,b,t,!1)}else b!==i[y]&&(i[y]=b,h=!0)}}}else{tp(t,e,s,i)&&(h=!0);let f;for(const m in l)(!e||!Se(e,m)&&((f=sr(m))===m||!Se(e,f)))&&(c?n&&(n[m]!==void 0||n[f]!==void 0)&&(s[m]=Dl(c,l,m,void 0,t,!0)):delete s[m]);if(i!==l)for(const m in i)(!e||!Se(e,m))&&(delete i[m],h=!0)}h&&wn(t.attrs,"set","")}function tp(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,l;if(e)for(let c in e){if(Ks(c))continue;const h=e[c];let f;s&&Se(s,f=Kt(c))?!i||!i.includes(f)?n[f]=h:(l||(l={}))[f]=h:sa(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=Re(n),h=l||De;for(let f=0;f<i.length;f++){const m=i[f];n[m]=Dl(s,c,m,h[m],t,!Se(h,m))}}return a}function Dl(t,e,n,r,s,i){const a=t[n];if(a!=null){const l=Se(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ye(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=Ti(s);r=h[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===sr(n))&&(r=!0))}return r}const by=new WeakMap;function np(t,e,n=!1){const r=n?by:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},l=[];let c=!1;if(!ye(t)){const f=m=>{c=!0;const[y,b]=np(m,e,!0);ut(a,y),b&&l.push(...b)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return ke(t)&&r.set(t,Kr),Kr;if(fe(i))for(let f=0;f<i.length;f++){const m=Kt(i[f]);Sh(m)&&(a[m]=De)}else if(i)for(const f in i){const m=Kt(f);if(Sh(m)){const y=i[f],b=a[m]=fe(y)||ye(y)?{type:y}:ut({},y),V=b.type;let N=!1,P=!0;if(fe(V))for(let O=0;O<V.length;++O){const x=V[O],W=ye(x)&&x.name;if(W==="Boolean"){N=!0;break}else W==="String"&&(P=!1)}else N=ye(V)&&V.name==="Boolean";b[0]=N,b[1]=P,(N||Se(b,"default"))&&l.push(m)}}const h=[a,l];return ke(t)&&r.set(t,h),h}function Sh(t){return t[0]!=="$"&&!Ks(t)}const Tc=t=>t==="_"||t==="_ctx"||t==="$stable",Ic=t=>fe(t)?t.map(tn):[tn(t)],Ry=(t,e,n)=>{if(e._n)return e;const r=j_((...s)=>Ic(e(...s)),n);return r._c=!1,r},rp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Tc(s))continue;const i=t[s];if(ye(i))e[s]=Ry(s,i,r);else if(i!=null){const a=Ic(i);e[s]=()=>a}}},sp=(t,e)=>{const n=Ic(e);t.slots.default=()=>n},ip=(t,e,n)=>{for(const r in e)(n||!Tc(r))&&(t[r]=e[r])},Sy=(t,e,n)=>{const r=t.slots=Zf();if(t.vnode.shapeFlag&32){const s=e._;s?(ip(r,e,n),n&&_f(r,"_",s,!0)):rp(e,r)}else e&&sp(t,e)},Py=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=De;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:ip(s,e,n):(i=!e.$stable,rp(e,s)),a=e}else e&&(sp(t,e),a={default:1});if(i)for(const l in s)!Tc(l)&&a[l]==null&&delete s[l]},At=Ny;function Cy(t){return ky(t)}function ky(t,e){const n=Xo();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:f,parentNode:m,nextSibling:y,setScopeId:b=rn,insertStaticContent:V}=t,N=(v,A,D,j=null,$=null,U=null,J=void 0,z=null,K=!!A.dynamicChildren)=>{if(v===A)return;v&&!Vs(v,A)&&(j=Bt(v),He(v,$,U,!0),v=null),A.patchFlag===-2&&(K=!1,A.dynamicChildren=null);const{type:B,ref:oe,shapeFlag:X}=A;switch(B){case ia:P(v,A,D,j);break;case er:O(v,A,D,j);break;case el:v==null&&x(A,D,j,J);break;case qe:R(v,A,D,j,$,U,J,z,K);break;default:X&1?Y(v,A,D,j,$,U,J,z,K):X&6?E(v,A,D,j,$,U,J,z,K):(X&64||X&128)&&B.process(v,A,D,j,$,U,J,z,K,te)}oe!=null&&$?Qs(oe,v&&v.ref,U,A||v,!A):oe==null&&v&&v.ref!=null&&Qs(v.ref,null,U,v,!0)},P=(v,A,D,j)=>{if(v==null)r(A.el=l(A.children),D,j);else{const $=A.el=v.el;A.children!==v.children&&h($,A.children)}},O=(v,A,D,j)=>{v==null?r(A.el=c(A.children||""),D,j):A.el=v.el},x=(v,A,D,j)=>{[v.el,v.anchor]=V(v.children,A,D,j,v.el,v.anchor)},W=({el:v,anchor:A},D,j)=>{let $;for(;v&&v!==A;)$=y(v),r(v,D,j),v=$;r(A,D,j)},L=({el:v,anchor:A})=>{let D;for(;v&&v!==A;)D=y(v),s(v),v=D;s(A)},Y=(v,A,D,j,$,U,J,z,K)=>{if(A.type==="svg"?J="svg":A.type==="math"&&(J="mathml"),v==null)ne(A,D,j,$,U,J,z,K);else{const B=v.el&&v.el._isVueCE?v.el:null;try{B&&B._beginPatch(),_(v,A,$,U,J,z,K)}finally{B&&B._endPatch()}}},ne=(v,A,D,j,$,U,J,z)=>{let K,B;const{props:oe,shapeFlag:X,transition:re,dirs:ce}=v;if(K=v.el=a(v.type,U,oe&&oe.is,oe),X&8?f(K,v.children):X&16&&g(v.children,K,null,j,$,Za(v,U),J,z),ce&&hr(v,null,j,"created"),w(K,v,v.scopeId,J,j),oe){for(const ge in oe)ge!=="value"&&!Ks(ge)&&i(K,ge,null,oe[ge],U,j);"value"in oe&&i(K,"value",null,oe.value,U),(B=oe.onVnodeBeforeMount)&&Xt(B,j,v)}ce&&hr(v,null,j,"beforeMount");const ae=Vy($,re);ae&&re.beforeEnter(K),r(K,A,D),((B=oe&&oe.onVnodeMounted)||ae||ce)&&At(()=>{try{B&&Xt(B,j,v),ae&&re.enter(K),ce&&hr(v,null,j,"mounted")}finally{}},$)},w=(v,A,D,j,$)=>{if(D&&b(v,D),j)for(let U=0;U<j.length;U++)b(v,j[U]);if($){let U=$.subTree;if(A===U||lp(U.type)&&(U.ssContent===A||U.ssFallback===A)){const J=$.vnode;w(v,J,J.scopeId,J.slotScopeIds,$.parent)}}},g=(v,A,D,j,$,U,J,z,K=0)=>{for(let B=K;B<v.length;B++){const oe=v[B]=z?En(v[B]):tn(v[B]);N(null,oe,A,D,j,$,U,J,z)}},_=(v,A,D,j,$,U,J)=>{const z=A.el=v.el;let{patchFlag:K,dynamicChildren:B,dirs:oe}=A;K|=v.patchFlag&16;const X=v.props||De,re=A.props||De;let ce;if(D&&dr(D,!1),(ce=re.onVnodeBeforeUpdate)&&Xt(ce,D,A,v),oe&&hr(A,v,D,"beforeUpdate"),D&&dr(D,!0),B&&(!v.dynamicChildren||v.dynamicChildren.length!==B.length)&&(K=0,J=!1,B=null),(X.innerHTML&&re.innerHTML==null||X.textContent&&re.textContent==null)&&f(z,""),B?T(v.dynamicChildren,B,z,D,j,Za(A,$),U):J||H(v,A,z,null,D,j,Za(A,$),U,!1),K>0){if(K&16)I(z,X,re,D,$);else if(K&2&&X.class!==re.class&&i(z,"class",null,re.class,$),K&4&&i(z,"style",X.style,re.style,$),K&8){const ae=A.dynamicProps;for(let ge=0;ge<ae.length;ge++){const Ie=ae[ge],Le=X[Ie],Je=re[Ie];(Je!==Le||Ie==="value")&&i(z,Ie,Le,Je,$,D)}}K&1&&v.children!==A.children&&f(z,A.children)}else!J&&B==null&&I(z,X,re,D,$);((ce=re.onVnodeUpdated)||oe)&&At(()=>{ce&&Xt(ce,D,A,v),oe&&hr(A,v,D,"updated")},j)},T=(v,A,D,j,$,U,J)=>{for(let z=0;z<A.length;z++){const K=v[z],B=A[z],oe=K.el&&(K.type===qe||!Vs(K,B)||K.shapeFlag&198)?m(K.el):D;N(K,B,oe,null,j,$,U,J,!0)}},I=(v,A,D,j,$)=>{if(A!==D){if(A!==De)for(const U in A)!Ks(U)&&!(U in D)&&i(v,U,A[U],null,$,j);for(const U in D){if(Ks(U))continue;const J=D[U],z=A[U];J!==z&&U!=="value"&&i(v,U,z,J,$,j)}"value"in D&&i(v,"value",A.value,D.value,$)}},R=(v,A,D,j,$,U,J,z,K)=>{const B=A.el=v?v.el:l(""),oe=A.anchor=v?v.anchor:l("");let{patchFlag:X,dynamicChildren:re,slotScopeIds:ce}=A;ce&&(z=z?z.concat(ce):ce),v==null?(r(B,D,j),r(oe,D,j),g(A.children||[],D,oe,$,U,J,z,K)):X>0&&X&64&&re&&v.dynamicChildren&&v.dynamicChildren.length===re.length?(T(v.dynamicChildren,re,D,$,U,J,z),(A.key!=null||$&&A===$.subTree)&&Ac(v,A,!0)):H(v,A,D,oe,$,U,J,z,K)},E=(v,A,D,j,$,U,J,z,K)=>{A.slotScopeIds=z,v==null?A.shapeFlag&512?$.ctx.activate(A,D,j,J,K):$e(A,D,j,$,U,J,K):Dt(v,A,K)},$e=(v,A,D,j,$,U,J)=>{const z=v.component=By(v,j,$);if(Hf(v)&&(z.ctx.renderer=te),jy(z,!1,J),z.asyncDep){if($&&$.registerDep(z,_e,J),!v.el){const K=z.subTree=tt(er);O(null,K,A,D),v.placeholder=K.el}}else _e(z,v,A,D,$,U,J)},Dt=(v,A,D)=>{const j=A.component=v.component;if(wy(v,A,D))if(j.asyncDep&&!j.asyncResolved){F(j,A,D);return}else j.next=A,j.update();else A.el=v.el,j.vnode=A},_e=(v,A,D,j,$,U,J)=>{const z=()=>{if(v.isMounted){let{next:X,bu:re,u:ce,parent:ae,vnode:ge}=v;{const dt=op(v);if(dt){X&&(X.el=ge.el,F(v,X,J)),dt.asyncDep.then(()=>{At(()=>{v.isUnmounted||B()},$)});return}}let Ie=X,Le;dr(v,!1),X?(X.el=ge.el,F(v,X,J)):X=ge,re&&ho(re),(Le=X.props&&X.props.onVnodeBeforeUpdate)&&Xt(Le,ae,X,ge),dr(v,!0);const Je=bh(v),$t=v.subTree;v.subTree=Je,N($t,Je,m($t.el),Bt($t),v,$,U),X.el=Je.el,Ie===null&&Ty(v,Je.el),ce&&At(ce,$),(Le=X.props&&X.props.onVnodeUpdated)&&At(()=>Xt(Le,ae,X,ge),$)}else{let X;const{el:re,props:ce}=A,{bm:ae,m:ge,parent:Ie,root:Le,type:Je}=v,$t=Js(A);dr(v,!1),ae&&ho(ae),!$t&&(X=ce&&ce.onVnodeBeforeMount)&&Xt(X,Ie,A),dr(v,!0);{Le.ce&&Le.ce._hasShadowRoot()&&Le.ce._injectChildStyle(Je,v.parent?v.parent.type:void 0);const dt=v.subTree=bh(v);N(null,dt,D,j,v,$,U),A.el=dt.el}if(ge&&At(ge,$),!$t&&(X=ce&&ce.onVnodeMounted)){const dt=A;At(()=>Xt(X,Ie,dt),$)}(A.shapeFlag&256||Ie&&Js(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&v.a&&At(v.a,$),v.isMounted=!0,A=D=j=null}};v.scope.on();const K=v.effect=new wf(z);v.scope.off();const B=v.update=K.run.bind(K),oe=v.job=K.runIfDirty.bind(K);oe.i=v,oe.id=v.uid,K.scheduler=()=>vc(oe),dr(v,!0),B()},F=(v,A,D)=>{A.component=v;const j=v.vnode.props;v.vnode=A,v.next=null,Ay(v,A.props,j,D),Py(v,A.children,D),un(),gh(v),hn()},H=(v,A,D,j,$,U,J,z,K=!1)=>{const B=v&&v.children,oe=v?v.shapeFlag:0,X=A.children,{patchFlag:re,shapeFlag:ce}=A;if(re>0){if(re&128){Ut(B,X,D,j,$,U,J,z,K);return}else if(re&256){Me(B,X,D,j,$,U,J,z,K);return}}ce&8?(oe&16&&pn(B,$,U),X!==B&&f(D,X)):oe&16?ce&16?Ut(B,X,D,j,$,U,J,z,K):pn(B,$,U,!0):(oe&8&&f(D,""),ce&16&&g(X,D,j,$,U,J,z,K))},Me=(v,A,D,j,$,U,J,z,K)=>{v=v||Kr,A=A||Kr;const B=v.length,oe=A.length,X=Math.min(B,oe);let re;for(re=0;re<X;re++){const ce=A[re]=K?En(A[re]):tn(A[re]);N(v[re],ce,D,null,$,U,J,z,K)}B>oe?pn(v,$,U,!0,!1,X):g(A,D,j,$,U,J,z,K,X)},Ut=(v,A,D,j,$,U,J,z,K)=>{let B=0;const oe=A.length;let X=v.length-1,re=oe-1;for(;B<=X&&B<=re;){const ce=v[B],ae=A[B]=K?En(A[B]):tn(A[B]);if(Vs(ce,ae))N(ce,ae,D,null,$,U,J,z,K);else break;B++}for(;B<=X&&B<=re;){const ce=v[X],ae=A[re]=K?En(A[re]):tn(A[re]);if(Vs(ce,ae))N(ce,ae,D,null,$,U,J,z,K);else break;X--,re--}if(B>X){if(B<=re){const ce=re+1,ae=ce<oe?A[ce].el:j;for(;B<=re;)N(null,A[B]=K?En(A[B]):tn(A[B]),D,ae,$,U,J,z,K),B++}}else if(B>re)for(;B<=X;)He(v[B],$,U,!0),B++;else{const ce=B,ae=B,ge=new Map;for(B=ae;B<=re;B++){const st=A[B]=K?En(A[B]):tn(A[B]);st.key!=null&&ge.set(st.key,B)}let Ie,Le=0;const Je=re-ae+1;let $t=!1,dt=0;const Ln=new Array(Je);for(B=0;B<Je;B++)Ln[B]=0;for(B=ce;B<=X;B++){const st=v[B];if(Le>=Je){He(st,$,U,!0);continue}let jt;if(st.key!=null)jt=ge.get(st.key);else for(Ie=ae;Ie<=re;Ie++)if(Ln[Ie-ae]===0&&Vs(st,A[Ie])){jt=Ie;break}jt===void 0?He(st,$,U,!0):(Ln[jt-ae]=B+1,jt>=dt?dt=jt:$t=!0,N(st,A[jt],D,null,$,U,J,z,K),Le++)}const _s=$t?Dy(Ln):Kr;for(Ie=_s.length-1,B=Je-1;B>=0;B--){const st=ae+B,jt=A[st],Fi=A[st+1],Dr=st+1<oe?Fi.el||ap(Fi):j;Ln[B]===0?N(null,jt,D,Dr,$,U,J,z,K):$t&&(Ie<0||B!==_s[Ie]?Pt(jt,D,Dr,2):Ie--)}}},Pt=(v,A,D,j,$=null)=>{const{el:U,type:J,transition:z,children:K,shapeFlag:B}=v;if(B&6){Pt(v.component.subTree,A,D,j);return}if(B&128){v.suspense.move(A,D,j);return}if(B&64){J.move(v,A,D,te);return}if(J===qe){r(U,A,D);for(let X=0;X<K.length;X++)Pt(K[X],A,D,j);r(v.anchor,A,D);return}if(J===el){W(v,A,D);return}if(j!==2&&B&1&&z)if(j===0)z.persisted&&!U[Ya]?r(U,A,D):(z.beforeEnter(U),r(U,A,D),At(()=>z.enter(U),$));else{const{leave:X,delayLeave:re,afterLeave:ce}=z,ae=()=>{v.ctx.isUnmounted?s(U):r(U,A,D)},ge=()=>{const Ie=U._isLeaving||!!U[Ya];U._isLeaving&&U[Ya](!0),z.persisted&&!Ie?ae():X(U,()=>{ae(),ce&&ce()})};re?re(U,ae,ge):ge()}else r(U,A,D)},He=(v,A,D,j=!1,$=!1)=>{const{type:U,props:J,ref:z,children:K,dynamicChildren:B,shapeFlag:oe,patchFlag:X,dirs:re,cacheIndex:ce,memo:ae}=v;if(X===-2&&($=!1),z!=null&&(un(),Qs(z,null,D,v,!0),hn()),ce!=null&&(A.renderCache[ce]=void 0),oe&256){A.ctx.deactivate(v);return}const ge=oe&1&&re,Ie=!Js(v);let Le;if(Ie&&(Le=J&&J.onVnodeBeforeUnmount)&&Xt(Le,A,v),oe&6)fn(v.component,D,j);else{if(oe&128){v.suspense.unmount(D,j);return}ge&&hr(v,null,A,"beforeUnmount"),oe&64?v.type.remove(v,A,D,te,j):B&&!B.hasOnce&&(U!==qe||X>0&&X&64)?pn(B,A,D,!1,!0):(U===qe&&X&384||!$&&oe&16)&&pn(K,A,D),j&&Ke(v)}const Je=ae!=null&&ce==null;(Ie&&(Le=J&&J.onVnodeUnmounted)||ge||Je)&&At(()=>{Le&&Xt(Le,A,v),ge&&hr(v,null,A,"unmounted"),Je&&(v.el=null)},D)},Ke=v=>{const{type:A,el:D,anchor:j,transition:$}=v;if(A===qe){gs(D,j);return}if(A===el){L(v);return}const U=()=>{s(D),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(v.shapeFlag&1&&$&&!$.persisted){const{leave:J,delayLeave:z}=$,K=()=>J(D,U);z?z(v.el,U,K):K()}else U()},gs=(v,A)=>{let D;for(;v!==A;)D=y(v),s(v),v=D;s(A)},fn=(v,A,D)=>{const{bum:j,scope:$,job:U,subTree:J,um:z,m:K,a:B}=v;Ph(K),Ph(B),j&&ho(j),$.stop(),U&&(U.flags|=8,He(J,v,A,D)),z&&At(z,A),At(()=>{v.isUnmounted=!0},A)},pn=(v,A,D,j=!1,$=!1,U=0)=>{for(let J=U;J<v.length;J++)He(v[J],A,D,j,$)},Bt=v=>{if(v.shapeFlag&6)return Bt(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const A=y(v.anchor||v.el),D=A&&A[qf];return D?y(D):A};let de=!1;const Q=(v,A,D)=>{let j;v==null?A._vnode&&(He(A._vnode,null,null,!0),j=A._vnode.component):N(A._vnode||null,v,A,null,null,null,D),A._vnode=v,de||(de=!0,gh(j),Ff(),de=!1)},te={p:N,um:He,m:Pt,r:Ke,mt:$e,mc:g,pc:H,pbc:T,n:Bt,o:t};return{render:Q,hydrate:void 0,createApp:my(Q)}}function Za({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function dr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Vy(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ac(t,e,n=!1){const r=t.children,s=e.children;if(fe(r)&&fe(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=En(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&Ac(a,l)),l.type===ia&&(l.patchFlag===-1&&(l=s[i]=En(l)),l.el=a.el),l.type===er&&!l.el&&(l.el=a.el)}}function Dy(t){const e=t.slice(),n=[0];let r,s,i,a,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,t[n[l]]<h?i=l+1:a=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function op(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:op(e)}function Ph(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function ap(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?ap(e.subTree):null}const lp=t=>t.__isSuspense;function Ny(t,e){e&&e.pendingBranch?fe(t)?e.effects.push(...t):e.effects.push(t):$_(t)}const qe=Symbol.for("v-fgt"),ia=Symbol.for("v-txt"),er=Symbol.for("v-cmt"),el=Symbol.for("v-stc"),Xs=[];let Mt=null;function se(t=!1){Xs.push(Mt=t?null:[])}function Oy(){Xs.pop(),Mt=Xs[Xs.length-1]||null}let ai=1;function Ch(t,e=!1){ai+=t,t<0&&Mt&&e&&(Mt.hasOnce=!0)}function cp(t){return t.dynamicChildren=ai>0?Mt||Kr:null,Oy(),ai>0&&Mt&&Mt.push(t),t}function le(t,e,n,r,s,i){return cp(k(t,e,n,r,s,i,!0))}function wr(t,e,n,r,s){return cp(tt(t,e,n,r,s,!0))}function up(t){return t?t.__v_isVNode===!0:!1}function Vs(t,e){return t.type===e.type&&t.key===e.key}const hp=({key:t})=>t??null,po=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ue(t)||vt(t)||ye(t)?{i:qt,r:t,k:e,f:!!n}:t:null);function k(t,e=null,n=null,r=0,s=null,i=t===qe?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&hp(e),ref:e&&po(e),scopeId:Bf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:qt};return l?(Co(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ue(n)?8:16),ai>0&&!a&&Mt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Mt.push(c),c}const tt=xy;function xy(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===ay)&&(t=er),up(t)){const l=ts(t,e,!0);return n&&Co(l,n),ai>0&&!i&&Mt&&(l.shapeFlag&6?Mt[Mt.indexOf(t)]=l:Mt.push(l)),l.patchFlag=-2,l}if(Ky(t)&&(t=t.__vccOpts),e){e=My(e);let{class:l,style:c}=e;l&&!Ue(l)&&(e.class=rt(l)),ke(c)&&(yc(c)&&!fe(c)&&(c=ut({},c)),e.style=Zo(c))}const a=Ue(t)?1:lp(t)?128:K_(t)?64:ke(t)?4:ye(t)?2:0;return k(t,e,n,r,s,a,i,!0)}function My(t){return t?yc(t)||ep(t)?ut({},t):t:null}function ts(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=t,h=e?Ly(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&hp(h),ref:e&&e.ref?n&&i?fe(i)?i.concat(po(e)):[i,po(e)]:po(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==qe?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ts(t.ssContent),ssFallback:t.ssFallback&&ts(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Ec(f,c.clone(f)),f}function xt(t=" ",e=0){return tt(ia,null,t,e)}function Fe(t="",e=!1){return e?(se(),wr(er,null,t)):tt(er,null,t)}function tn(t){return t==null||typeof t=="boolean"?tt(er):fe(t)?tt(qe,null,t.slice()):up(t)?En(t):tt(ia,null,String(t))}function En(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ts(t)}function Co(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(fe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Co(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!ep(e)?e._ctx=qt:s===3&&qt&&(qt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(ye(e)){if(r&65){Co(t,{default:e});return}e={default:e,_ctx:qt},n=32}else e=String(e),r&64?(n=16,e=[xt(e)]):n=8;t.children=e,t.shapeFlag|=n}function Ly(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=rt([e.class,r.class]));else if(s==="style")e.style=Zo([e.style,r.style]);else if(Qo(s)){const i=e[s],a=r[s];a&&i!==a&&!(fe(i)&&i.includes(a))?e[s]=i?[].concat(i,a):a:a==null&&i==null&&!Jo(s)&&(e[s]=a)}else s!==""&&(e[s]=r[s])}return e}function Xt(t,e,n,r=null){Qt(t,e,7,[n,r])}const Fy=Qf();let Uy=0;function By(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Fy,i={uid:Uy++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new h_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:np(r,s),emitsOptions:Jf(r,s),emit:null,emitted:null,propsDefaults:De,inheritAttrs:r.inheritAttrs,ctx:De,data:De,props:De,attrs:De,slots:De,refs:De,setupState:De,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=_y.bind(null,i),t.ce&&t.ce(i),i}let St=null;const $y=()=>St||qt;let ko,Nl;{const t=Xo(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};ko=e("__VUE_INSTANCE_SETTERS__",n=>St=n),Nl=e("__VUE_SSR_SETTERS__",n=>li=n)}const Ti=t=>{const e=St;return ko(t),t.scope.on(),()=>{t.scope.off(),ko(e)}},kh=()=>{St&&St.scope.off(),ko(null)};function dp(t){return t.vnode.shapeFlag&4}let li=!1;function jy(t,e=!1,n=!1){e&&Nl(e);const{props:r,children:s}=t.vnode,i=dp(t);Iy(t,r,i,e),Sy(t,s,n||e);const a=i?qy(t,e):void 0;return e&&Nl(!1),a}function qy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,ly);const{setup:r}=n;if(r){un();const s=t.setupContext=r.length>1?Hy(t):null,i=Ti(t),a=Ei(r,t,0,[t.props,s]),l=ff(a);if(hn(),i(),(l||t.sp)&&!Js(t)&&Wf(t),l){if(a.then(kh,kh),e)return a.then(c=>{Vh(t,c)}).catch(c=>{ta(c,t,0)});t.asyncDep=a}else Vh(t,a)}else fp(t)}function Vh(t,e,n){ye(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ke(e)&&(t.setupState=xf(e)),fp(t)}function fp(t,e,n){const r=t.type;t.render||(t.render=r.render||rn);{const s=Ti(t);un();try{cy(t)}finally{hn(),s()}}}const Wy={get(t,e){return _t(t,"get",""),t[e]}};function Hy(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Wy),slots:t.slots,emit:t.emit,expose:e}}function oa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(xf(V_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ys)return Ys[n](t)},has(e,n){return n in e||n in Ys}})):t.proxy}function Ky(t){return ye(t)&&"__vccOpts"in t}const Wr=(t,e)=>M_(t,e,li),zy="3.5.39";/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ol;const Dh=typeof window<"u"&&window.trustedTypes;if(Dh)try{Ol=Dh.createPolicy("vue",{createHTML:t=>t})}catch{}const pp=Ol?t=>Ol.createHTML(t):t=>t,Gy="http://www.w3.org/2000/svg",Qy="http://www.w3.org/1998/Math/MathML",vn=typeof document<"u"?document:null,Nh=vn&&vn.createElement("template"),Jy={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?vn.createElementNS(Gy,t):e==="mathml"?vn.createElementNS(Qy,t):n?vn.createElement(t,{is:n}):vn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>vn.createTextNode(t),createComment:t=>vn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>vn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Nh.innerHTML=pp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Nh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Yy=Symbol("_vtc");function Xy(t,e,n){const r=t[Yy];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Vo=Symbol("_vod"),mp=Symbol("_vsh"),tl={name:"show",beforeMount(t,{value:e},{transition:n}){t[Vo]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ds(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Ds(t,!0),r.enter(t)):r.leave(t,()=>{Ds(t,!1)}):Ds(t,e))},beforeUnmount(t,{value:e}){Ds(t,e)}};function Ds(t,e){t.style.display=e?t[Vo]:"none",t[mp]=!e}const Zy=Symbol(""),ev=/(?:^|;)\s*display\s*:/;function tv(t,e,n){const r=t.style,s=Ue(n);let i=!1;if(n&&!s){if(e)if(Ue(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&Us(r,l,"")}else for(const a in e)n[a]==null&&Us(r,a,"");for(const a in n){a==="display"&&(i=!0);const l=n[a];l!=null?rv(t,a,!Ue(e)&&e?e[a]:void 0,l)||Us(r,a,l):Us(r,a,"")}}else if(s){if(e!==n){const a=r[Zy];a&&(n+=";"+a),r.cssText=n,i=ev.test(n)}}else e&&t.removeAttribute("style");Vo in t&&(t[Vo]=i?r.display:"",t[mp]&&(r.display="none"))}const Oh=/\s*!important$/;function Us(t,e,n){if(fe(n))n.forEach(r=>Us(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=nv(t,e);Oh.test(n)?t.setProperty(sr(r),n.replace(Oh,""),"important"):t[r]=n}}const xh=["Webkit","Moz","ms"],nl={};function nv(t,e){const n=nl[e];if(n)return n;let r=Kt(e);if(r!=="filter"&&r in t)return nl[e]=r;r=gf(r);for(let s=0;s<xh.length;s++){const i=xh[s]+r;if(i in t)return nl[e]=i}return e}function rv(t,e,n,r){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Ue(r)&&n===r}const Mh="http://www.w3.org/1999/xlink";function Lh(t,e,n,r,s,i=c_(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Mh,e.slice(6,e.length)):t.setAttributeNS(Mh,e,n):n==null||i&&!yf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":cn(n)?String(n):n)}function Fh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?pp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=yf(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function Ur(t,e,n,r){t.addEventListener(e,n,r)}function sv(t,e,n,r){t.removeEventListener(e,n,r)}const Uh=Symbol("_vei");function iv(t,e,n,r,s=null){const i=t[Uh]||(t[Uh]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=lv(e);if(r){const h=i[e]=hv(r,s);Ur(t,l,h,c)}else a&&(sv(t,l,a,c),i[e]=void 0)}}const ov=/(Once|Passive|Capture)$/,av=/^on:?(?:Once|Passive|Capture)$/;function lv(t){let e,n;for(;(n=t.match(ov))&&!av.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):sr(t.slice(2)),e]}let rl=0;const cv=Promise.resolve(),uv=()=>rl||(cv.then(()=>rl=0),rl=Date.now());function hv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(fe(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const a=s.slice(),l=[r];for(let c=0;c<a.length&&!r._stopped;c++){const h=a[c];h&&Qt(h,e,5,l)}}else Qt(s,e,5,[r])};return n.value=t,n.attached=uv(),n}const Bh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,dv=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?Xy(t,r,a):e==="style"?tv(t,n,r):Qo(e)?Jo(e)||iv(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):fv(t,e,r,a))?(Fh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Lh(t,e,r,a,i,e!=="value")):t._isVueCE&&(pv(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Ue(r)))?Fh(t,Kt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Lh(t,e,r,a))};function fv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Bh(e)&&ye(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Bh(e)&&Ue(n)?!1:e in t}function pv(t,e){const n=t._def.props;if(!n)return!1;const r=Kt(e);return Array.isArray(n)?n.some(s=>Kt(s)===r):Object.keys(n).some(s=>Kt(s)===r)}const $h=t=>{const e=t.props["onUpdate:modelValue"]||!1;return fe(e)?n=>ho(e,n):e};function mv(t){t.target.composing=!0}function jh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const sl=Symbol("_assign");function qh(t,e,n){return e&&(t=t.trim()),n&&(t=cc(t)),t}const bt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[sl]=$h(s);const i=r||s.props&&s.props.type==="number";Ur(t,e?"change":"input",a=>{a.target.composing||t[sl](qh(t.value,n,i))}),(n||i)&&Ur(t,"change",()=>{t.value=qh(t.value,n,i)}),e||(Ur(t,"compositionstart",mv),Ur(t,"compositionend",jh),Ur(t,"change",jh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[sl]=$h(a),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?cc(t.value):t.value,c=e??"";if(l===c)return;const h=t.getRootNode();(h instanceof Document||h instanceof ShadowRoot)&&h.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c)}},gv=["ctrl","shift","alt","meta"],_v={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>gv.some(n=>t[`${n}Key`]&&!e.includes(n))},gr=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const l=_v[e[a]];if(l&&l(s,e))return}return t(s,...i)})},yv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},il=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=sr(s.key);if(e.some(a=>a===i||yv[a]===i))return t(s)})},vv=ut({patchProp:dv},Jy);let Wh;function Ev(){return Wh||(Wh=Cy(vv))}const wv=(...t)=>{const e=Ev().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Iv(r);if(!s)return;const i=e._component;!ye(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,Tv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function Tv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Iv(t){return Ue(t)?document.querySelector(t):t}var Hh={};/**
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
 */const gp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Av=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},_p={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,l=a?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,f=i>>2,m=(i&3)<<4|l>>4;let y=(l&15)<<2|h>>6,b=h&63;c||(b=64,a||(y=64)),r.push(n[f],n[m],n[y],n[b])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(gp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Av(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||m==null)throw new bv;const y=i<<2|l>>4;if(r.push(y),h!==64){const b=l<<4&240|h>>2;if(r.push(b),m!==64){const V=h<<6&192|m;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class bv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Rv=function(t){const e=gp(t);return _p.encodeByteArray(e,!0)},Do=function(t){return Rv(t).replace(/\./g,"")},yp=function(t){try{return _p.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const Pv=()=>Sv().__FIREBASE_DEFAULTS__,Cv=()=>{if(typeof process>"u"||typeof Hh>"u")return;const t=Hh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},kv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&yp(t[1]);return e&&JSON.parse(e)},aa=()=>{try{return Pv()||Cv()||kv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vp=t=>{var e,n;return(n=(e=aa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Vv=t=>{const e=vp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ep=()=>{var t;return(t=aa())===null||t===void 0?void 0:t.config},wp=t=>{var e;return(e=aa())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Dv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Nv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Do(JSON.stringify(n)),Do(JSON.stringify(a)),""].join(".")}/**
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
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ov(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function xv(){var t;const e=(t=aa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Mv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Lv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Fv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Uv(){const t=wt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Bv(){return!xv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $v(){try{return typeof indexedDB=="object"}catch{return!1}}function jv(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const qv="FirebaseError";class xn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=qv,Object.setPrototypeOf(this,xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ii.prototype.create)}}class Ii{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Wv(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new xn(s,l,r)}}function Wv(t,e){return t.replace(Hv,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Hv=/\{\$([^}]+)}/g;function Kv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function No(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(Kh(i)&&Kh(a)){if(!No(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Kh(t){return t!==null&&typeof t=="object"}/**
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
 */function Ai(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Bs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function $s(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function zv(t,e){const n=new Gv(t,e);return n.subscribe.bind(n)}class Gv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Qv(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ol),s.error===void 0&&(s.error=ol),s.complete===void 0&&(s.complete=ol);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Qv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ol(){}/**
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
 */function Qe(t){return t&&t._delegate?t._delegate:t}class Ir{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const pr="[DEFAULT]";/**
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
 */class Jv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Dv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xv(e))try{this.getOrInitializeService({instanceIdentifier:pr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=pr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pr){return this.instances.has(e)}getOptions(e=pr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yv(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=pr){return this.component?this.component.multipleInstances?e:pr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yv(t){return t===pr?void 0:t}function Xv(t){return t.instantiationMode==="EAGER"}/**
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
 */class Zv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Jv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const eE={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},tE=we.INFO,nE={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},rE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=nE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bc{constructor(e){this.name=e,this._logLevel=tE,this._logHandler=rE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?eE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const sE=(t,e)=>e.some(n=>t instanceof n);let zh,Gh;function iE(){return zh||(zh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function oE(){return Gh||(Gh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tp=new WeakMap,xl=new WeakMap,Ip=new WeakMap,al=new WeakMap,Rc=new WeakMap;function aE(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(Qn(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Tp.set(n,t)}).catch(()=>{}),Rc.set(e,t),e}function lE(t){if(xl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});xl.set(t,e)}let Ml={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ip.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function cE(t){Ml=t(Ml)}function uE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ll(this),e,...n);return Ip.set(r,e.sort?e.sort():[e]),Qn(r)}:oE().includes(t)?function(...e){return t.apply(ll(this),e),Qn(Tp.get(this))}:function(...e){return Qn(t.apply(ll(this),e))}}function hE(t){return typeof t=="function"?uE(t):(t instanceof IDBTransaction&&lE(t),sE(t,iE())?new Proxy(t,Ml):t)}function Qn(t){if(t instanceof IDBRequest)return aE(t);if(al.has(t))return al.get(t);const e=hE(t);return e!==t&&(al.set(t,e),Rc.set(e,t)),e}const ll=t=>Rc.get(t);function dE(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),l=Qn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Qn(a.result),c.oldVersion,c.newVersion,Qn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const fE=["get","getKey","getAll","getAllKeys","count"],pE=["put","add","delete","clear"],cl=new Map;function Qh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cl.get(e))return cl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=pE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||fE.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return cl.set(e,i),i}cE(t=>({...t,get:(e,n,r)=>Qh(e,n)||t.get(e,n,r),has:(e,n)=>!!Qh(e,n)||t.has(e,n)}));/**
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
 */class mE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function gE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ll="@firebase/app",Jh="0.10.13";/**
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
 */const Cn=new bc("@firebase/app"),_E="@firebase/app-compat",yE="@firebase/analytics-compat",vE="@firebase/analytics",EE="@firebase/app-check-compat",wE="@firebase/app-check",TE="@firebase/auth",IE="@firebase/auth-compat",AE="@firebase/database",bE="@firebase/data-connect",RE="@firebase/database-compat",SE="@firebase/functions",PE="@firebase/functions-compat",CE="@firebase/installations",kE="@firebase/installations-compat",VE="@firebase/messaging",DE="@firebase/messaging-compat",NE="@firebase/performance",OE="@firebase/performance-compat",xE="@firebase/remote-config",ME="@firebase/remote-config-compat",LE="@firebase/storage",FE="@firebase/storage-compat",UE="@firebase/firestore",BE="@firebase/vertexai-preview",$E="@firebase/firestore-compat",jE="firebase",qE="10.14.1";/**
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
 */const Fl="[DEFAULT]",WE={[Ll]:"fire-core",[_E]:"fire-core-compat",[vE]:"fire-analytics",[yE]:"fire-analytics-compat",[wE]:"fire-app-check",[EE]:"fire-app-check-compat",[TE]:"fire-auth",[IE]:"fire-auth-compat",[AE]:"fire-rtdb",[bE]:"fire-data-connect",[RE]:"fire-rtdb-compat",[SE]:"fire-fn",[PE]:"fire-fn-compat",[CE]:"fire-iid",[kE]:"fire-iid-compat",[VE]:"fire-fcm",[DE]:"fire-fcm-compat",[NE]:"fire-perf",[OE]:"fire-perf-compat",[xE]:"fire-rc",[ME]:"fire-rc-compat",[LE]:"fire-gcs",[FE]:"fire-gcs-compat",[UE]:"fire-fst",[$E]:"fire-fst-compat",[BE]:"fire-vertex","fire-js":"fire-js",[jE]:"fire-js-all"};/**
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
 */const Oo=new Map,HE=new Map,Ul=new Map;function Yh(t,e){try{t.container.addComponent(e)}catch(n){Cn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ns(t){const e=t.name;if(Ul.has(e))return Cn.debug(`There were multiple attempts to register component ${e}.`),!1;Ul.set(e,t);for(const n of Oo.values())Yh(n,t);for(const n of HE.values())Yh(n,t);return!0}function Sc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function In(t){return t.settings!==void 0}/**
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
 */const KE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jn=new Ii("app","Firebase",KE);/**
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
 */class zE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ir("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jn.create("app-deleted",{appName:this._name})}}/**
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
 */const hs=qE;function Ap(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Fl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Jn.create("bad-app-name",{appName:String(s)});if(n||(n=Ep()),!n)throw Jn.create("no-options");const i=Oo.get(s);if(i){if(No(n,i.options)&&No(r,i.config))return i;throw Jn.create("duplicate-app",{appName:s})}const a=new Zv(s);for(const c of Ul.values())a.addComponent(c);const l=new zE(n,r,a);return Oo.set(s,l),l}function bp(t=Fl){const e=Oo.get(t);if(!e&&t===Fl&&Ep())return Ap();if(!e)throw Jn.create("no-app",{appName:t});return e}function Yn(t,e,n){var r;let s=(r=WE[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cn.warn(l.join(" "));return}ns(new Ir(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const GE="firebase-heartbeat-database",QE=1,ci="firebase-heartbeat-store";let ul=null;function Rp(){return ul||(ul=dE(GE,QE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ci)}catch(n){console.warn(n)}}}}).catch(t=>{throw Jn.create("idb-open",{originalErrorMessage:t.message})})),ul}async function JE(t){try{const n=(await Rp()).transaction(ci),r=await n.objectStore(ci).get(Sp(t));return await n.done,r}catch(e){if(e instanceof xn)Cn.warn(e.message);else{const n=Jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cn.warn(n.message)}}}async function Xh(t,e){try{const r=(await Rp()).transaction(ci,"readwrite");await r.objectStore(ci).put(e,Sp(t)),await r.done}catch(n){if(n instanceof xn)Cn.warn(n.message);else{const r=Jn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Cn.warn(r.message)}}}function Sp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const YE=1024,XE=30*24*60*60*1e3;class ZE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Zh();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=XE}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Cn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Zh(),{heartbeatsToSend:r,unsentEntries:s}=ew(this._heartbeatsCache.heartbeats),i=Do(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Cn.warn(n),""}}}function Zh(){return new Date().toISOString().substring(0,10)}function ew(t,e=YE){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),ed(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ed(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class tw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $v()?jv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await JE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Xh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Xh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ed(t){return Do(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function nw(t){ns(new Ir("platform-logger",e=>new mE(e),"PRIVATE")),ns(new Ir("heartbeat",e=>new ZE(e),"PRIVATE")),Yn(Ll,Jh,t),Yn(Ll,Jh,"esm2017"),Yn("fire-js","")}nw("");var td=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tr,Pp;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,g){function _(){}_.prototype=g.prototype,w.D=g.prototype,w.prototype=new _,w.prototype.constructor=w,w.C=function(T,I,R){for(var E=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)E[$e-2]=arguments[$e];return g.prototype[I].apply(T,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,g,_){_||(_=0);var T=Array(16);if(typeof g=="string")for(var I=0;16>I;++I)T[I]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(I=0;16>I;++I)T[I]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=w.g[0],_=w.g[1],I=w.g[2];var R=w.g[3],E=g+(R^_&(I^R))+T[0]+3614090360&4294967295;g=_+(E<<7&4294967295|E>>>25),E=R+(I^g&(_^I))+T[1]+3905402710&4294967295,R=g+(E<<12&4294967295|E>>>20),E=I+(_^R&(g^_))+T[2]+606105819&4294967295,I=R+(E<<17&4294967295|E>>>15),E=_+(g^I&(R^g))+T[3]+3250441966&4294967295,_=I+(E<<22&4294967295|E>>>10),E=g+(R^_&(I^R))+T[4]+4118548399&4294967295,g=_+(E<<7&4294967295|E>>>25),E=R+(I^g&(_^I))+T[5]+1200080426&4294967295,R=g+(E<<12&4294967295|E>>>20),E=I+(_^R&(g^_))+T[6]+2821735955&4294967295,I=R+(E<<17&4294967295|E>>>15),E=_+(g^I&(R^g))+T[7]+4249261313&4294967295,_=I+(E<<22&4294967295|E>>>10),E=g+(R^_&(I^R))+T[8]+1770035416&4294967295,g=_+(E<<7&4294967295|E>>>25),E=R+(I^g&(_^I))+T[9]+2336552879&4294967295,R=g+(E<<12&4294967295|E>>>20),E=I+(_^R&(g^_))+T[10]+4294925233&4294967295,I=R+(E<<17&4294967295|E>>>15),E=_+(g^I&(R^g))+T[11]+2304563134&4294967295,_=I+(E<<22&4294967295|E>>>10),E=g+(R^_&(I^R))+T[12]+1804603682&4294967295,g=_+(E<<7&4294967295|E>>>25),E=R+(I^g&(_^I))+T[13]+4254626195&4294967295,R=g+(E<<12&4294967295|E>>>20),E=I+(_^R&(g^_))+T[14]+2792965006&4294967295,I=R+(E<<17&4294967295|E>>>15),E=_+(g^I&(R^g))+T[15]+1236535329&4294967295,_=I+(E<<22&4294967295|E>>>10),E=g+(I^R&(_^I))+T[1]+4129170786&4294967295,g=_+(E<<5&4294967295|E>>>27),E=R+(_^I&(g^_))+T[6]+3225465664&4294967295,R=g+(E<<9&4294967295|E>>>23),E=I+(g^_&(R^g))+T[11]+643717713&4294967295,I=R+(E<<14&4294967295|E>>>18),E=_+(R^g&(I^R))+T[0]+3921069994&4294967295,_=I+(E<<20&4294967295|E>>>12),E=g+(I^R&(_^I))+T[5]+3593408605&4294967295,g=_+(E<<5&4294967295|E>>>27),E=R+(_^I&(g^_))+T[10]+38016083&4294967295,R=g+(E<<9&4294967295|E>>>23),E=I+(g^_&(R^g))+T[15]+3634488961&4294967295,I=R+(E<<14&4294967295|E>>>18),E=_+(R^g&(I^R))+T[4]+3889429448&4294967295,_=I+(E<<20&4294967295|E>>>12),E=g+(I^R&(_^I))+T[9]+568446438&4294967295,g=_+(E<<5&4294967295|E>>>27),E=R+(_^I&(g^_))+T[14]+3275163606&4294967295,R=g+(E<<9&4294967295|E>>>23),E=I+(g^_&(R^g))+T[3]+4107603335&4294967295,I=R+(E<<14&4294967295|E>>>18),E=_+(R^g&(I^R))+T[8]+1163531501&4294967295,_=I+(E<<20&4294967295|E>>>12),E=g+(I^R&(_^I))+T[13]+2850285829&4294967295,g=_+(E<<5&4294967295|E>>>27),E=R+(_^I&(g^_))+T[2]+4243563512&4294967295,R=g+(E<<9&4294967295|E>>>23),E=I+(g^_&(R^g))+T[7]+1735328473&4294967295,I=R+(E<<14&4294967295|E>>>18),E=_+(R^g&(I^R))+T[12]+2368359562&4294967295,_=I+(E<<20&4294967295|E>>>12),E=g+(_^I^R)+T[5]+4294588738&4294967295,g=_+(E<<4&4294967295|E>>>28),E=R+(g^_^I)+T[8]+2272392833&4294967295,R=g+(E<<11&4294967295|E>>>21),E=I+(R^g^_)+T[11]+1839030562&4294967295,I=R+(E<<16&4294967295|E>>>16),E=_+(I^R^g)+T[14]+4259657740&4294967295,_=I+(E<<23&4294967295|E>>>9),E=g+(_^I^R)+T[1]+2763975236&4294967295,g=_+(E<<4&4294967295|E>>>28),E=R+(g^_^I)+T[4]+1272893353&4294967295,R=g+(E<<11&4294967295|E>>>21),E=I+(R^g^_)+T[7]+4139469664&4294967295,I=R+(E<<16&4294967295|E>>>16),E=_+(I^R^g)+T[10]+3200236656&4294967295,_=I+(E<<23&4294967295|E>>>9),E=g+(_^I^R)+T[13]+681279174&4294967295,g=_+(E<<4&4294967295|E>>>28),E=R+(g^_^I)+T[0]+3936430074&4294967295,R=g+(E<<11&4294967295|E>>>21),E=I+(R^g^_)+T[3]+3572445317&4294967295,I=R+(E<<16&4294967295|E>>>16),E=_+(I^R^g)+T[6]+76029189&4294967295,_=I+(E<<23&4294967295|E>>>9),E=g+(_^I^R)+T[9]+3654602809&4294967295,g=_+(E<<4&4294967295|E>>>28),E=R+(g^_^I)+T[12]+3873151461&4294967295,R=g+(E<<11&4294967295|E>>>21),E=I+(R^g^_)+T[15]+530742520&4294967295,I=R+(E<<16&4294967295|E>>>16),E=_+(I^R^g)+T[2]+3299628645&4294967295,_=I+(E<<23&4294967295|E>>>9),E=g+(I^(_|~R))+T[0]+4096336452&4294967295,g=_+(E<<6&4294967295|E>>>26),E=R+(_^(g|~I))+T[7]+1126891415&4294967295,R=g+(E<<10&4294967295|E>>>22),E=I+(g^(R|~_))+T[14]+2878612391&4294967295,I=R+(E<<15&4294967295|E>>>17),E=_+(R^(I|~g))+T[5]+4237533241&4294967295,_=I+(E<<21&4294967295|E>>>11),E=g+(I^(_|~R))+T[12]+1700485571&4294967295,g=_+(E<<6&4294967295|E>>>26),E=R+(_^(g|~I))+T[3]+2399980690&4294967295,R=g+(E<<10&4294967295|E>>>22),E=I+(g^(R|~_))+T[10]+4293915773&4294967295,I=R+(E<<15&4294967295|E>>>17),E=_+(R^(I|~g))+T[1]+2240044497&4294967295,_=I+(E<<21&4294967295|E>>>11),E=g+(I^(_|~R))+T[8]+1873313359&4294967295,g=_+(E<<6&4294967295|E>>>26),E=R+(_^(g|~I))+T[15]+4264355552&4294967295,R=g+(E<<10&4294967295|E>>>22),E=I+(g^(R|~_))+T[6]+2734768916&4294967295,I=R+(E<<15&4294967295|E>>>17),E=_+(R^(I|~g))+T[13]+1309151649&4294967295,_=I+(E<<21&4294967295|E>>>11),E=g+(I^(_|~R))+T[4]+4149444226&4294967295,g=_+(E<<6&4294967295|E>>>26),E=R+(_^(g|~I))+T[11]+3174756917&4294967295,R=g+(E<<10&4294967295|E>>>22),E=I+(g^(R|~_))+T[2]+718787259&4294967295,I=R+(E<<15&4294967295|E>>>17),E=_+(R^(I|~g))+T[9]+3951481745&4294967295,w.g[0]=w.g[0]+g&4294967295,w.g[1]=w.g[1]+(I+(E<<21&4294967295|E>>>11))&4294967295,w.g[2]=w.g[2]+I&4294967295,w.g[3]=w.g[3]+R&4294967295}r.prototype.u=function(w,g){g===void 0&&(g=w.length);for(var _=g-this.blockSize,T=this.B,I=this.h,R=0;R<g;){if(I==0)for(;R<=_;)s(this,w,R),R+=this.blockSize;if(typeof w=="string"){for(;R<g;)if(T[I++]=w.charCodeAt(R++),I==this.blockSize){s(this,T),I=0;break}}else for(;R<g;)if(T[I++]=w[R++],I==this.blockSize){s(this,T),I=0;break}}this.h=I,this.o+=g},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var g=1;g<w.length-8;++g)w[g]=0;var _=8*this.o;for(g=w.length-8;g<w.length;++g)w[g]=_&255,_/=256;for(this.u(w),w=Array(16),g=_=0;4>g;++g)for(var T=0;32>T;T+=8)w[_++]=this.g[g]>>>T&255;return w};function i(w,g){var _=l;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=g(w)}function a(w,g){this.h=g;for(var _=[],T=!0,I=w.length-1;0<=I;I--){var R=w[I]|0;T&&R==g||(_[I]=R,T=!1)}this.g=_}var l={};function c(w){return-128<=w&&128>w?i(w,function(g){return new a([g|0],0>g?-1:0)}):new a([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return m;if(0>w)return P(h(-w));for(var g=[],_=1,T=0;w>=_;T++)g[T]=w/_|0,_*=4294967296;return new a(g,0)}function f(w,g){if(w.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(w.charAt(0)=="-")return P(f(w.substring(1),g));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(g,8)),T=m,I=0;I<w.length;I+=8){var R=Math.min(8,w.length-I),E=parseInt(w.substring(I,I+R),g);8>R?(R=h(Math.pow(g,R)),T=T.j(R).add(h(E))):(T=T.j(_),T=T.add(h(E)))}return T}var m=c(0),y=c(1),b=c(16777216);t=a.prototype,t.m=function(){if(N(this))return-P(this).m();for(var w=0,g=1,_=0;_<this.g.length;_++){var T=this.i(_);w+=(0<=T?T:4294967296+T)*g,g*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(V(this))return"0";if(N(this))return"-"+P(this).toString(w);for(var g=h(Math.pow(w,6)),_=this,T="";;){var I=L(_,g).g;_=O(_,I.j(g));var R=((0<_.g.length?_.g[0]:_.h)>>>0).toString(w);if(_=I,V(_))return R+T;for(;6>R.length;)R="0"+R;T=R+T}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function V(w){if(w.h!=0)return!1;for(var g=0;g<w.g.length;g++)if(w.g[g]!=0)return!1;return!0}function N(w){return w.h==-1}t.l=function(w){return w=O(this,w),N(w)?-1:V(w)?0:1};function P(w){for(var g=w.g.length,_=[],T=0;T<g;T++)_[T]=~w.g[T];return new a(_,~w.h).add(y)}t.abs=function(){return N(this)?P(this):this},t.add=function(w){for(var g=Math.max(this.g.length,w.g.length),_=[],T=0,I=0;I<=g;I++){var R=T+(this.i(I)&65535)+(w.i(I)&65535),E=(R>>>16)+(this.i(I)>>>16)+(w.i(I)>>>16);T=E>>>16,R&=65535,E&=65535,_[I]=E<<16|R}return new a(_,_[_.length-1]&-2147483648?-1:0)};function O(w,g){return w.add(P(g))}t.j=function(w){if(V(this)||V(w))return m;if(N(this))return N(w)?P(this).j(P(w)):P(P(this).j(w));if(N(w))return P(this.j(P(w)));if(0>this.l(b)&&0>w.l(b))return h(this.m()*w.m());for(var g=this.g.length+w.g.length,_=[],T=0;T<2*g;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(var I=0;I<w.g.length;I++){var R=this.i(T)>>>16,E=this.i(T)&65535,$e=w.i(I)>>>16,Dt=w.i(I)&65535;_[2*T+2*I]+=E*Dt,x(_,2*T+2*I),_[2*T+2*I+1]+=R*Dt,x(_,2*T+2*I+1),_[2*T+2*I+1]+=E*$e,x(_,2*T+2*I+1),_[2*T+2*I+2]+=R*$e,x(_,2*T+2*I+2)}for(T=0;T<g;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=g;T<2*g;T++)_[T]=0;return new a(_,0)};function x(w,g){for(;(w[g]&65535)!=w[g];)w[g+1]+=w[g]>>>16,w[g]&=65535,g++}function W(w,g){this.g=w,this.h=g}function L(w,g){if(V(g))throw Error("division by zero");if(V(w))return new W(m,m);if(N(w))return g=L(P(w),g),new W(P(g.g),P(g.h));if(N(g))return g=L(w,P(g)),new W(P(g.g),g.h);if(30<w.g.length){if(N(w)||N(g))throw Error("slowDivide_ only works with positive integers.");for(var _=y,T=g;0>=T.l(w);)_=Y(_),T=Y(T);var I=ne(_,1),R=ne(T,1);for(T=ne(T,2),_=ne(_,2);!V(T);){var E=R.add(T);0>=E.l(w)&&(I=I.add(_),R=E),T=ne(T,1),_=ne(_,1)}return g=O(w,I.j(g)),new W(I,g)}for(I=m;0<=w.l(g);){for(_=Math.max(1,Math.floor(w.m()/g.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),R=h(_),E=R.j(g);N(E)||0<E.l(w);)_-=T,R=h(_),E=R.j(g);V(R)&&(R=y),I=I.add(R),w=O(w,E)}return new W(I,w)}t.A=function(w){return L(this,w).h},t.and=function(w){for(var g=Math.max(this.g.length,w.g.length),_=[],T=0;T<g;T++)_[T]=this.i(T)&w.i(T);return new a(_,this.h&w.h)},t.or=function(w){for(var g=Math.max(this.g.length,w.g.length),_=[],T=0;T<g;T++)_[T]=this.i(T)|w.i(T);return new a(_,this.h|w.h)},t.xor=function(w){for(var g=Math.max(this.g.length,w.g.length),_=[],T=0;T<g;T++)_[T]=this.i(T)^w.i(T);return new a(_,this.h^w.h)};function Y(w){for(var g=w.g.length+1,_=[],T=0;T<g;T++)_[T]=w.i(T)<<1|w.i(T-1)>>>31;return new a(_,w.h)}function ne(w,g){var _=g>>5;g%=32;for(var T=w.g.length-_,I=[],R=0;R<T;R++)I[R]=0<g?w.i(R+_)>>>g|w.i(R+_+1)<<32-g:w.i(R+_);return new a(I,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Pp=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Tr=a}).apply(typeof td<"u"?td:typeof self<"u"?self:typeof window<"u"?window:{});var so=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cp,js,kp,mo,Bl,Vp,Dp,Np;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof so=="object"&&so];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)e:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var S=o[p];if(!(S in d))break e;d=d[S]}o=o[o.length-1],p=d[o],u=u(p),u!=p&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var d=0,p=!1,S={next:function(){if(!p&&d<o.length){var C=d++;return{value:u(C,o[C]),done:!1}}return p=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function m(o,u,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,p),o.apply(u,S)}}return function(){return o.apply(u,arguments)}}function y(o,u,d){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,y.apply(null,arguments)}function b(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function V(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,S,C){for(var G=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)G[Ve-2]=arguments[Ve];return u.prototype[S].apply(p,G)}}function N(o){const u=o.length;if(0<u){const d=Array(u);for(let p=0;p<u;p++)d[p]=o[p];return d}return[]}function P(o,u){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(c(p)){const S=o.length||0,C=p.length||0;o.length=S+C;for(let G=0;G<C;G++)o[S+G]=p[G]}else o.push(p)}}class O{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function x(o){return/^[\s\xa0]*$/.test(o)}function W(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function L(o){return L[" "](o),o}L[" "]=function(){};var Y=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function ne(o,u,d){for(const p in o)u.call(d,o[p],p,o)}function w(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function g(o){const u={};for(const d in o)u[d]=o[d];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,u){let d,p;for(let S=1;S<arguments.length;S++){p=arguments[S];for(d in p)o[d]=p[d];for(let C=0;C<_.length;C++)d=_[C],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function I(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function R(o){l.setTimeout(()=>{throw o},0)}function E(){var o=Me;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class $e{constructor(){this.h=this.g=null}add(u,d){const p=Dt.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var Dt=new O(()=>new _e,o=>o.reset());class _e{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let F,H=!1,Me=new $e,Ut=()=>{const o=l.Promise.resolve(void 0);F=()=>{o.then(Pt)}};var Pt=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(d){R(d)}var u=Dt;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}H=!1};function He(){this.s=this.s,this.C=this.C}He.prototype.s=!1,He.prototype.ma=function(){this.s||(this.s=!0,this.N())},He.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ke(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Ke.prototype.h=function(){this.defaultPrevented=!0};var gs=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return o}();function fn(o,u){if(Ke.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(Y){e:{try{L(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:pn[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&fn.aa.h.call(this)}}V(fn,Ke);var pn={2:"touch",3:"pen",4:"mouse"};fn.prototype.h=function(){fn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Bt="closure_listenable_"+(1e6*Math.random()|0),de=0;function Q(o,u,d,p,S){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=S,this.key=++de,this.da=this.fa=!1}function te(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ze(o){this.src=o,this.g={},this.h=0}Ze.prototype.add=function(o,u,d,p,S){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var G=A(o,u,p,S);return-1<G?(u=o[G],d||(u.fa=!1)):(u=new Q(u,this.src,C,!!p,S),u.fa=d,o.push(u)),u};function v(o,u){var d=u.type;if(d in o.g){var p=o.g[d],S=Array.prototype.indexOf.call(p,u,void 0),C;(C=0<=S)&&Array.prototype.splice.call(p,S,1),C&&(te(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function A(o,u,d,p){for(var S=0;S<o.length;++S){var C=o[S];if(!C.da&&C.listener==u&&C.capture==!!d&&C.ha==p)return S}return-1}var D="closure_lm_"+(1e6*Math.random()|0),j={};function $(o,u,d,p,S){if(Array.isArray(u)){for(var C=0;C<u.length;C++)$(o,u[C],d,p,S);return null}return d=ce(d),o&&o[Bt]?o.K(u,d,h(p)?!!p.capture:!1,S):U(o,u,d,!1,p,S)}function U(o,u,d,p,S,C){if(!u)throw Error("Invalid event type");var G=h(S)?!!S.capture:!!S,Ve=X(o);if(Ve||(o[D]=Ve=new Ze(o)),d=Ve.add(u,d,p,G,C),d.proxy)return d;if(p=J(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)gs||(S=G),S===void 0&&(S=!1),o.addEventListener(u.toString(),p,S);else if(o.attachEvent)o.attachEvent(B(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function J(){function o(d){return u.call(o.src,o.listener,d)}const u=oe;return o}function z(o,u,d,p,S){if(Array.isArray(u))for(var C=0;C<u.length;C++)z(o,u[C],d,p,S);else p=h(p)?!!p.capture:!!p,d=ce(d),o&&o[Bt]?(o=o.i,u=String(u).toString(),u in o.g&&(C=o.g[u],d=A(C,d,p,S),-1<d&&(te(C[d]),Array.prototype.splice.call(C,d,1),C.length==0&&(delete o.g[u],o.h--)))):o&&(o=X(o))&&(u=o.g[u.toString()],o=-1,u&&(o=A(u,d,p,S)),(d=-1<o?u[o]:null)&&K(d))}function K(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Bt])v(u.i,o);else{var d=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(d,p,o.capture):u.detachEvent?u.detachEvent(B(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=X(u))?(v(d,o),d.h==0&&(d.src=null,u[D]=null)):te(o)}}}function B(o){return o in j?j[o]:j[o]="on"+o}function oe(o,u){if(o.da)o=!0;else{u=new fn(u,this);var d=o.listener,p=o.ha||o.src;o.fa&&K(o),o=d.call(p,u)}return o}function X(o){return o=o[D],o instanceof Ze?o:null}var re="__closure_events_fn_"+(1e9*Math.random()>>>0);function ce(o){return typeof o=="function"?o:(o[re]||(o[re]=function(u){return o.handleEvent(u)}),o[re])}function ae(){He.call(this),this.i=new Ze(this),this.M=this,this.F=null}V(ae,He),ae.prototype[Bt]=!0,ae.prototype.removeEventListener=function(o,u,d,p){z(this,o,u,d,p)};function ge(o,u){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new Ke(u,o);else if(u instanceof Ke)u.target=u.target||o;else{var S=u;u=new Ke(p,o),T(u,S)}if(S=!0,d)for(var C=d.length-1;0<=C;C--){var G=u.g=d[C];S=Ie(G,p,!0,u)&&S}if(G=u.g=o,S=Ie(G,p,!0,u)&&S,S=Ie(G,p,!1,u)&&S,d)for(C=0;C<d.length;C++)G=u.g=d[C],S=Ie(G,p,!1,u)&&S}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],p=0;p<d.length;p++)te(d[p]);delete o.g[u],o.h--}}this.F=null},ae.prototype.K=function(o,u,d,p){return this.i.add(String(o),u,!1,d,p)},ae.prototype.L=function(o,u,d,p){return this.i.add(String(o),u,!0,d,p)};function Ie(o,u,d,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,C=0;C<u.length;++C){var G=u[C];if(G&&!G.da&&G.capture==d){var Ve=G.listener,it=G.ha||G.src;G.fa&&v(o.i,G),S=Ve.call(it,p)!==!1&&S}}return S&&!p.defaultPrevented}function Le(o,u,d){if(typeof o=="function")d&&(o=y(o,d));else if(o&&typeof o.handleEvent=="function")o=y(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function Je(o){o.g=Le(()=>{o.g=null,o.i&&(o.i=!1,Je(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class $t extends He{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Je(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function dt(o){He.call(this),this.h=o,this.g={}}V(dt,He);var Ln=[];function _s(o){ne(o.g,function(u,d){this.g.hasOwnProperty(d)&&K(u)},o),o.g={}}dt.prototype.N=function(){dt.aa.N.call(this),_s(this)},dt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var st=l.JSON.stringify,jt=l.JSON.parse,Fi=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Dr(){}Dr.prototype.h=null;function wu(o){return o.h||(o.h=o.i())}function Tu(){}var ys={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ka(){Ke.call(this,"d")}V(ka,Ke);function Va(){Ke.call(this,"c")}V(Va,Ke);var ar={},Iu=null;function Ui(){return Iu=Iu||new ae}ar.La="serverreachability";function Au(o){Ke.call(this,ar.La,o)}V(Au,Ke);function vs(o){const u=Ui();ge(u,new Au(u))}ar.STAT_EVENT="statevent";function bu(o,u){Ke.call(this,ar.STAT_EVENT,o),this.stat=u}V(bu,Ke);function Tt(o){const u=Ui();ge(u,new bu(u,o))}ar.Ma="timingevent";function Ru(o,u){Ke.call(this,ar.Ma,o),this.size=u}V(Ru,Ke);function Es(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function ws(){this.g=!0}ws.prototype.xa=function(){this.g=!1};function Vg(o,u,d,p,S,C){o.info(function(){if(o.g)if(C)for(var G="",Ve=C.split("&"),it=0;it<Ve.length;it++){var Ae=Ve[it].split("=");if(1<Ae.length){var ft=Ae[0];Ae=Ae[1];var pt=ft.split("_");G=2<=pt.length&&pt[1]=="type"?G+(ft+"="+Ae+"&"):G+(ft+"=redacted&")}}else G=null;else G=C;return"XMLHTTP REQ ("+p+") [attempt "+S+"]: "+u+`
`+d+`
`+G})}function Dg(o,u,d,p,S,C,G){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+S+"]: "+u+`
`+d+`
`+C+" "+G})}function Nr(o,u,d,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Og(o,d)+(p?" "+p:"")})}function Ng(o,u){o.info(function(){return"TIMEOUT: "+u})}ws.prototype.info=function(){};function Og(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var S=p[1];if(Array.isArray(S)&&!(1>S.length)){var C=S[0];if(C!="noop"&&C!="stop"&&C!="close")for(var G=1;G<S.length;G++)S[G]=""}}}}return st(d)}catch{return u}}var Bi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Su={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Da;function $i(){}V($i,Dr),$i.prototype.g=function(){return new XMLHttpRequest},$i.prototype.i=function(){return{}},Da=new $i;function Fn(o,u,d,p){this.j=o,this.i=u,this.l=d,this.R=p||1,this.U=new dt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Pu}function Pu(){this.i=null,this.g="",this.h=!1}var Cu={},Na={};function Oa(o,u,d){o.L=1,o.v=Hi(mn(u)),o.m=d,o.P=!0,ku(o,null)}function ku(o,u){o.F=Date.now(),ji(o),o.A=mn(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Wu(d.i,"t",p),o.C=0,d=o.j.J,o.h=new Pu,o.g=lh(o.j,d?u:null,!o.m),0<o.O&&(o.M=new $t(y(o.Y,o,o.g),o.O)),u=o.U,d=o.g,p=o.ca;var S="readystatechange";Array.isArray(S)||(S&&(Ln[0]=S.toString()),S=Ln);for(var C=0;C<S.length;C++){var G=$(d,S[C],p||u.handleEvent,!1,u.h||u);if(!G)break;u.g[G.key]=G}u=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),vs(),Vg(o.i,o.u,o.A,o.l,o.R,o.m)}Fn.prototype.ca=function(o){o=o.target;const u=this.M;u&&gn(o)==3?u.j():this.Y(o)},Fn.prototype.Y=function(o){try{if(o==this.g)e:{const pt=gn(this.g);var u=this.g.Ba();const Mr=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||Yu(this.g)))){this.J||pt!=4||u==7||(u==8||0>=Mr?vs(3):vs(2)),xa(this);var d=this.g.Z();this.X=d;t:if(Vu(this)){var p=Yu(this.g);o="";var S=p.length,C=gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){lr(this),Ts(this);var G="";break t}this.h.i=new l.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(C&&u==S-1)});p.length=0,this.h.g+=o,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=d==200,Dg(this.i,this.u,this.A,this.l,this.R,pt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,it=this.g;if((Ve=it.g?it.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(Ve)){var Ae=Ve;break t}}Ae=null}if(d=Ae)Nr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ma(this,d);else{this.o=!1,this.s=3,Tt(12),lr(this),Ts(this);break e}}if(this.P){d=!0;let Ht;for(;!this.J&&this.C<G.length;)if(Ht=xg(this,G),Ht==Na){pt==4&&(this.s=4,Tt(14),d=!1),Nr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ht==Cu){this.s=4,Tt(15),Nr(this.i,this.l,G,"[Invalid Chunk]"),d=!1;break}else Nr(this.i,this.l,Ht,null),Ma(this,Ht);if(Vu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||G.length!=0||this.h.h||(this.s=1,Tt(16),d=!1),this.o=this.o&&d,!d)Nr(this.i,this.l,G,"[Invalid Chunked Response]"),lr(this),Ts(this);else if(0<G.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),ja(ft),ft.M=!0,Tt(11))}}else Nr(this.i,this.l,G,null),Ma(this,G);pt==4&&lr(this),this.o&&!this.J&&(pt==4?sh(this.j,this):(this.o=!1,ji(this)))}else Xg(this.g),d==400&&0<G.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),lr(this),Ts(this)}}}catch{}finally{}};function Vu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function xg(o,u){var d=o.C,p=u.indexOf(`
`,d);return p==-1?Na:(d=Number(u.substring(d,p)),isNaN(d)?Cu:(p+=1,p+d>u.length?Na:(u=u.slice(p,p+d),o.C=p+d,u)))}Fn.prototype.cancel=function(){this.J=!0,lr(this)};function ji(o){o.S=Date.now()+o.I,Du(o,o.I)}function Du(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Es(y(o.ba,o),u)}function xa(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Fn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Ng(this.i,this.A),this.L!=2&&(vs(),Tt(17)),lr(this),this.s=2,Ts(this)):Du(this,this.S-o)};function Ts(o){o.j.G==0||o.J||sh(o.j,o)}function lr(o){xa(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,_s(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Ma(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||La(d.h,o))){if(!o.K&&La(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var S=p;if(S[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Yi(d),Qi(d);else break e;$a(d),Tt(18)}}else d.za=S[1],0<d.za-d.T&&37500>S[2]&&d.F&&d.v==0&&!d.C&&(d.C=Es(y(d.Za,d),6e3));if(1>=xu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else ur(d,11)}else if((o.K||d.g==o)&&Yi(d),!x(u))for(S=d.Da.g.parse(u),u=0;u<S.length;u++){let Ae=S[u];if(d.T=Ae[0],Ae=Ae[1],d.G==2)if(Ae[0]=="c"){d.K=Ae[1],d.ia=Ae[2];const ft=Ae[3];ft!=null&&(d.la=ft,d.j.info("VER="+d.la));const pt=Ae[4];pt!=null&&(d.Aa=pt,d.j.info("SVER="+d.Aa));const Mr=Ae[5];Mr!=null&&typeof Mr=="number"&&0<Mr&&(p=1.5*Mr,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Ht=o.g;if(Ht){const Zi=Ht.g?Ht.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zi){var C=p.h;C.g||Zi.indexOf("spdy")==-1&&Zi.indexOf("quic")==-1&&Zi.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Fa(C,C.h),C.h=null))}if(p.D){const qa=Ht.g?Ht.g.getResponseHeader("X-HTTP-Session-Id"):null;qa&&(p.ya=qa,Oe(p.I,p.D,qa))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var G=o;if(p.qa=ah(p,p.J?p.ia:null,p.W),G.K){Mu(p.h,G);var Ve=G,it=p.L;it&&(Ve.I=it),Ve.B&&(xa(Ve),ji(Ve)),p.g=G}else nh(p);0<d.i.length&&Ji(d)}else Ae[0]!="stop"&&Ae[0]!="close"||ur(d,7);else d.G==3&&(Ae[0]=="stop"||Ae[0]=="close"?Ae[0]=="stop"?ur(d,7):Ba(d):Ae[0]!="noop"&&d.l&&d.l.ta(Ae),d.v=0)}}vs(4)}catch{}}var Mg=class{constructor(o,u){this.g=o,this.map=u}};function Nu(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ou(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function xu(o){return o.h?1:o.g?o.g.size:0}function La(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Fa(o,u){o.g?o.g.add(u):o.h=u}function Mu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Nu.prototype.cancel=function(){if(this.i=Lu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Lu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return N(o.i)}function Lg(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],d=o.length,p=0;p<d;p++)u.push(o[p]);return u}u=[],d=0;for(p in o)u[d++]=o[p];return u}function Fg(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const p in o)u[d++]=p;return u}}}function Fu(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=Fg(o),p=Lg(o),S=p.length,C=0;C<S;C++)u.call(void 0,p[C],d&&d[C],o)}var Uu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ug(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),S=null;if(0<=p){var C=o[d].substring(0,p);S=o[d].substring(p+1)}else C=o[d];u(C,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function cr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof cr){this.h=o.h,qi(this,o.j),this.o=o.o,this.g=o.g,Wi(this,o.s),this.l=o.l;var u=o.i,d=new bs;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Bu(this,d),this.m=o.m}else o&&(u=String(o).match(Uu))?(this.h=!1,qi(this,u[1]||"",!0),this.o=Is(u[2]||""),this.g=Is(u[3]||"",!0),Wi(this,u[4]),this.l=Is(u[5]||"",!0),Bu(this,u[6]||"",!0),this.m=Is(u[7]||"")):(this.h=!1,this.i=new bs(null,this.h))}cr.prototype.toString=function(){var o=[],u=this.j;u&&o.push(As(u,$u,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(As(u,$u,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(As(d,d.charAt(0)=="/"?jg:$g,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",As(d,Wg)),o.join("")};function mn(o){return new cr(o)}function qi(o,u,d){o.j=d?Is(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Wi(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Bu(o,u,d){u instanceof bs?(o.i=u,Hg(o.i,o.h)):(d||(u=As(u,qg)),o.i=new bs(u,o.h))}function Oe(o,u,d){o.i.set(u,d)}function Hi(o){return Oe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Is(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function As(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,Bg),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Bg(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var $u=/[#\/\?@]/g,$g=/[#\?:]/g,jg=/[#\?]/g,qg=/[#\?@]/g,Wg=/#/g;function bs(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Un(o){o.g||(o.g=new Map,o.h=0,o.i&&Ug(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=bs.prototype,t.add=function(o,u){Un(this),this.i=null,o=Or(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function ju(o,u){Un(o),u=Or(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function qu(o,u){return Un(o),u=Or(o,u),o.g.has(u)}t.forEach=function(o,u){Un(this),this.g.forEach(function(d,p){d.forEach(function(S){o.call(u,S,p,this)},this)},this)},t.na=function(){Un(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let p=0;p<u.length;p++){const S=o[p];for(let C=0;C<S.length;C++)d.push(u[p])}return d},t.V=function(o){Un(this);let u=[];if(typeof o=="string")qu(this,o)&&(u=u.concat(this.g.get(Or(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},t.set=function(o,u){return Un(this),this.i=null,o=Or(this,o),qu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Wu(o,u,d){ju(o,u),0<d.length&&(o.i=null,o.g.set(Or(o,u),N(d)),o.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var p=u[d];const C=encodeURIComponent(String(p)),G=this.V(p);for(p=0;p<G.length;p++){var S=C;G[p]!==""&&(S+="="+encodeURIComponent(String(G[p]))),o.push(S)}}return this.i=o.join("&")};function Or(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Hg(o,u){u&&!o.j&&(Un(o),o.i=null,o.g.forEach(function(d,p){var S=p.toLowerCase();p!=S&&(ju(this,p),Wu(this,S,d))},o)),o.j=u}function Kg(o,u){const d=new ws;if(l.Image){const p=new Image;p.onload=b(Bn,d,"TestLoadImage: loaded",!0,u,p),p.onerror=b(Bn,d,"TestLoadImage: error",!1,u,p),p.onabort=b(Bn,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=b(Bn,d,"TestLoadImage: timeout",!1,u,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function zg(o,u){const d=new ws,p=new AbortController,S=setTimeout(()=>{p.abort(),Bn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(C=>{clearTimeout(S),C.ok?Bn(d,"TestPingServer: ok",!0,u):Bn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),Bn(d,"TestPingServer: error",!1,u)})}function Bn(o,u,d,p,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),p(d)}catch{}}function Gg(){this.g=new Fi}function Qg(o,u,d){const p=d||"";try{Fu(o,function(S,C){let G=S;h(S)&&(G=st(S)),u.push(p+C+"="+encodeURIComponent(G))})}catch(S){throw u.push(p+"type="+encodeURIComponent("_badmap")),S}}function Ki(o){this.l=o.Ub||null,this.j=o.eb||!1}V(Ki,Dr),Ki.prototype.g=function(){return new zi(this.l,this.j)},Ki.prototype.i=function(o){return function(){return o}}({});function zi(o,u){ae.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(zi,ae),t=zi.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Ss(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rs(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ss(this)),this.g&&(this.readyState=3,Ss(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Hu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Hu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Rs(this):Ss(this),this.readyState==3&&Hu(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,Rs(this))},t.Qa=function(o){this.g&&(this.response=o,Rs(this))},t.ga=function(){this.g&&Rs(this)};function Rs(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Ss(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function Ss(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(zi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ku(o){let u="";return ne(o,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function Ua(o,u,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Ku(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):Oe(o,u,d))}function je(o){ae.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(je,ae);var Jg=/^https?$/i,Yg=["POST","PUT"];t=je.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Da.g(),this.v=this.o?wu(this.o):wu(Da),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){zu(this,C);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var S in p)d.set(S,p[S]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())d.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(C=>C.toLowerCase()=="content-type"),S=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Yg,u,void 0))||p||S||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,G]of d)this.g.setRequestHeader(C,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ju(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){zu(this,C)}};function zu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Gu(o),Gi(o)}function Gu(o){o.A||(o.A=!0,ge(o,"complete"),ge(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ge(this,"complete"),ge(this,"abort"),Gi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Gi(this,!0)),je.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Qu(this):this.bb())},t.bb=function(){Qu(this)};function Qu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||gn(o)!=4||o.Z()!=2)){if(o.u&&gn(o)==4)Le(o.Ea,0,o);else if(ge(o,"readystatechange"),gn(o)==4){o.h=!1;try{const G=o.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var p;if(p=G===0){var S=String(o.D).match(Uu)[1]||null;!S&&l.self&&l.self.location&&(S=l.self.location.protocol.slice(0,-1)),p=!Jg.test(S?S.toLowerCase():"")}d=p}if(d)ge(o,"complete"),ge(o,"success");else{o.m=6;try{var C=2<gn(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",Gu(o)}}finally{Gi(o)}}}}function Gi(o,u){if(o.g){Ju(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||ge(o,"ready");try{d.onreadystatechange=p}catch{}}}function Ju(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function gn(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<gn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),jt(u)}};function Yu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Xg(o){const u={};o=(o.g&&2<=gn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(x(o[p]))continue;var d=I(o[p]);const S=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const C=u[S]||[];u[S]=C,C.push(d)}w(u,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ps(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function Xu(o){this.Aa=0,this.i=[],this.j=new ws,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ps("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ps("baseRetryDelayMs",5e3,o),this.cb=Ps("retryDelaySeedMs",1e4,o),this.Wa=Ps("forwardChannelMaxRetries",2,o),this.wa=Ps("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Nu(o&&o.concurrentRequestLimit),this.Da=new Gg,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Xu.prototype,t.la=8,t.G=1,t.connect=function(o,u,d,p){Tt(0),this.W=o,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=ah(this,null,this.W),Ji(this)};function Ba(o){if(Zu(o),o.G==3){var u=o.U++,d=mn(o.I);if(Oe(d,"SID",o.K),Oe(d,"RID",u),Oe(d,"TYPE","terminate"),Cs(o,d),u=new Fn(o,o.j,u),u.L=2,u.v=Hi(mn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=lh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),ji(u)}oh(o)}function Qi(o){o.g&&(ja(o),o.g.cancel(),o.g=null)}function Zu(o){Qi(o),o.u&&(l.clearTimeout(o.u),o.u=null),Yi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Ji(o){if(!Ou(o.h)&&!o.s){o.s=!0;var u=o.Ga;F||Ut(),H||(F(),H=!0),Me.add(u,o),o.B=0}}function Zg(o,u){return xu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Es(y(o.Ga,o,u),ih(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const S=new Fn(this,this.j,o);let C=this.o;if(this.S&&(C?(C=g(C),T(C,this.S)):C=this.S),this.m!==null||this.O||(S.H=C,C=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=th(this,S,u),d=mn(this.I),Oe(d,"RID",o),Oe(d,"CVER",22),this.D&&Oe(d,"X-HTTP-Session-Id",this.D),Cs(this,d),C&&(this.O?u="headers="+encodeURIComponent(String(Ku(C)))+"&"+u:this.m&&Ua(d,this.m,C)),Fa(this.h,S),this.Ua&&Oe(d,"TYPE","init"),this.P?(Oe(d,"$req",u),Oe(d,"SID","null"),S.T=!0,Oa(S,d,null)):Oa(S,d,u),this.G=2}}else this.G==3&&(o?eh(this,o):this.i.length==0||Ou(this.h)||eh(this))};function eh(o,u){var d;u?d=u.l:d=o.U++;const p=mn(o.I);Oe(p,"SID",o.K),Oe(p,"RID",d),Oe(p,"AID",o.T),Cs(o,p),o.m&&o.o&&Ua(p,o.m,o.o),d=new Fn(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=th(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Fa(o.h,d),Oa(d,p,u)}function Cs(o,u){o.H&&ne(o.H,function(d,p){Oe(u,p,d)}),o.l&&Fu({},function(d,p){Oe(u,p,d)})}function th(o,u,d){d=Math.min(o.i.length,d);var p=o.l?y(o.l.Na,o.l,o):null;e:{var S=o.i;let C=-1;for(;;){const G=["count="+d];C==-1?0<d?(C=S[0].g,G.push("ofs="+C)):C=0:G.push("ofs="+C);let Ve=!0;for(let it=0;it<d;it++){let Ae=S[it].g;const ft=S[it].map;if(Ae-=C,0>Ae)C=Math.max(0,S[it].g-100),Ve=!1;else try{Qg(ft,G,"req"+Ae+"_")}catch{p&&p(ft)}}if(Ve){p=G.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,p}function nh(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;F||Ut(),H||(F(),H=!0),Me.add(u,o),o.v=0}}function $a(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Es(y(o.Fa,o),ih(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,rh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Es(y(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Tt(10),Qi(this),rh(this))};function ja(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function rh(o){o.g=new Fn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=mn(o.qa);Oe(u,"RID","rpc"),Oe(u,"SID",o.K),Oe(u,"AID",o.T),Oe(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Oe(u,"TO",o.ja),Oe(u,"TYPE","xmlhttp"),Cs(o,u),o.m&&o.o&&Ua(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Hi(mn(u)),d.m=null,d.P=!0,ku(d,o)}t.Za=function(){this.C!=null&&(this.C=null,Qi(this),$a(this),Tt(19))};function Yi(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function sh(o,u){var d=null;if(o.g==u){Yi(o),ja(o),o.g=null;var p=2}else if(La(o.h,u))d=u.D,Mu(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var S=o.B;p=Ui(),ge(p,new Ru(p,d)),Ji(o)}else nh(o);else if(S=u.s,S==3||S==0&&0<u.X||!(p==1&&Zg(o,u)||p==2&&$a(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),S){case 1:ur(o,5);break;case 4:ur(o,10);break;case 3:ur(o,6);break;default:ur(o,2)}}}function ih(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function ur(o,u){if(o.j.info("Error code "+u),u==2){var d=y(o.fb,o),p=o.Xa;const S=!p;p=new cr(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||qi(p,"https"),Hi(p),S?Kg(p.toString(),d):zg(p.toString(),d)}else Tt(2);o.G=0,o.l&&o.l.sa(u),oh(o),Zu(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function oh(o){if(o.G=0,o.ka=[],o.l){const u=Lu(o.h);(u.length!=0||o.i.length!=0)&&(P(o.ka,u),P(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function ah(o,u,d){var p=d instanceof cr?mn(d):new cr(d);if(p.g!="")u&&(p.g=u+"."+p.g),Wi(p,p.s);else{var S=l.location;p=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var C=new cr(null);p&&qi(C,p),u&&(C.g=u),S&&Wi(C,S),d&&(C.l=d),p=C}return d=o.D,u=o.ya,d&&u&&Oe(p,d,u),Oe(p,"VER",o.la),Cs(o,p),p}function lh(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new je(new Ki({eb:d})):new je(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ch(){}t=ch.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Xi(){}Xi.prototype.g=function(o,u){return new Nt(o,u)};function Nt(o,u){ae.call(this),this.g=new Xu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!x(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!x(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new xr(this)}V(Nt,ae),Nt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Nt.prototype.close=function(){Ba(this.g)},Nt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=st(o),o=d);u.i.push(new Mg(u.Ya++,o)),u.G==3&&Ji(u)},Nt.prototype.N=function(){this.g.l=null,delete this.j,Ba(this.g),delete this.g,Nt.aa.N.call(this)};function uh(o){ka.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}V(uh,ka);function hh(){Va.call(this),this.status=1}V(hh,Va);function xr(o){this.g=o}V(xr,ch),xr.prototype.ua=function(){ge(this.g,"a")},xr.prototype.ta=function(o){ge(this.g,new uh(o))},xr.prototype.sa=function(o){ge(this.g,new hh)},xr.prototype.ra=function(){ge(this.g,"b")},Xi.prototype.createWebChannel=Xi.prototype.g,Nt.prototype.send=Nt.prototype.o,Nt.prototype.open=Nt.prototype.m,Nt.prototype.close=Nt.prototype.close,Np=function(){return new Xi},Dp=function(){return Ui()},Vp=ar,Bl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Bi.NO_ERROR=0,Bi.TIMEOUT=8,Bi.HTTP_ERROR=6,mo=Bi,Su.COMPLETE="complete",kp=Su,Tu.EventType=ys,ys.OPEN="a",ys.CLOSE="b",ys.ERROR="c",ys.MESSAGE="d",ae.prototype.listen=ae.prototype.K,js=Tu,je.prototype.listenOnce=je.prototype.L,je.prototype.getLastError=je.prototype.Ka,je.prototype.getLastErrorCode=je.prototype.Ba,je.prototype.getStatus=je.prototype.Z,je.prototype.getResponseJson=je.prototype.Oa,je.prototype.getResponseText=je.prototype.oa,je.prototype.send=je.prototype.ea,je.prototype.setWithCredentials=je.prototype.Ha,Cp=je}).apply(typeof so<"u"?so:typeof self<"u"?self:typeof window<"u"?window:{});const nd="@firebase/firestore";/**
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
 */class gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
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
 */const Ar=new bc("@firebase/firestore");function Ns(){return Ar.logLevel}function ee(t,...e){if(Ar.logLevel<=we.DEBUG){const n=e.map(Pc);Ar.debug(`Firestore (${ds}): ${t}`,...n)}}function kn(t,...e){if(Ar.logLevel<=we.ERROR){const n=e.map(Pc);Ar.error(`Firestore (${ds}): ${t}`,...n)}}function rs(t,...e){if(Ar.logLevel<=we.WARN){const n=e.map(Pc);Ar.warn(`Firestore (${ds}): ${t}`,...n)}}function Pc(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function he(t="Unexpected state"){const e=`FIRESTORE (${ds}) INTERNAL ASSERTION FAILED: `+t;throw kn(e),new Error(e)}function Pe(t,e){t||he()}function me(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends xn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Sn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Op{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(gt.UNAUTHENTICATED))}shutdown(){}}class sw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class iw{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Pe(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Sn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Sn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Sn)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Pe(typeof r.accessToken=="string"),new Op(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string"),new gt(e)}}class ow{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class aw{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new ow(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class lw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cw{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Pe(this.o===void 0);const r=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Pe(typeof n.token=="string"),this.R=n.token,new lw(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class xp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=uw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function be(t,e){return t<e?-1:t>e?1:0}function ss(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class We{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Z(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Z(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Z(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return We.fromMillis(Date.now())}static fromDate(e){return We.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new We(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class pe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new pe(e)}static min(){return new pe(new We(0,0))}static max(){return new pe(new We(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ui{constructor(e,n,r){n===void 0?n=0:n>e.length&&he(),r===void 0?r=e.length-n:r>e.length-n&&he(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ui.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ui?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),a=n.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class xe extends ui{construct(e,n,r){return new xe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Z(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new xe(n)}static emptyPath(){return new xe([])}}const hw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends ui{construct(e,n,r){return new lt(e,n,r)}static isValidIdentifier(e){return hw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new lt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Z(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Z(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Z(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new Z(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new lt(n)}static emptyPath(){return new lt([])}}/**
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
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(xe.fromString(e))}static fromName(e){return new ie(xe.fromString(e).popFirst(5))}static empty(){return new ie(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new xe(e.slice()))}}function dw(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=pe.fromTimestamp(r===1e9?new We(n+1,0):new We(n,r));return new tr(s,ie.empty(),e)}function fw(t){return new tr(t.readTime,t.key,-1)}class tr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new tr(pe.min(),ie.empty(),-1)}static max(){return new tr(pe.max(),ie.empty(),-1)}}function pw(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ie.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function bi(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==mw)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&he(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new q((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof q?n:q.resolve(n)}catch(n){return q.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):q.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):q.reject(n)}static resolve(e){return new q((n,r)=>{n(e)})}static reject(e){return new q((n,r)=>{r(e)})}static waitFor(e){return new q((n,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&n()},c=>r(c))}),a=!0,i===s&&n()})}static or(e){let n=q.resolve(!1);for(const r of e)n=n.next(s=>s?q.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new q((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(f=>{a[h]=f,++l,l===i&&r(a)},f=>s(f))}})}static doWhile(e,n){return new q((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function _w(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ri(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Cc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Cc.oe=-1;function la(t){return t==null}function xo(t){return t===0&&1/t==-1/0}function yw(t){return typeof t=="number"&&Number.isInteger(t)&&!xo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function rd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Pr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Mp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Be{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new io(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new io(this.root,e,this.comparator,!1)}getReverseIterator(){return new io(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new io(this.root,e,this.comparator,!0)}}class io{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??at.RED,this.left=s??at.EMPTY,this.right=i??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new at(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return at.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw he();const e=this.left.check();if(e!==this.right.check())throw he();return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw he()}get value(){throw he()}get color(){throw he()}get left(){throw he()}get right(){throw he()}copy(e,n,r,s,i){return this}insert(e,n,r){return new at(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ct{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new sd(this.data.getIterator())}getIteratorFrom(e){return new sd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ct(this.comparator);return n.data=e,n}}class sd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.fields=e,e.sort(lt.comparator)}static empty(){return new Lt([])}unionWith(e){let n=new ct(lt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ss(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Lp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Lp("Invalid base64 string: "+i):i}}(e);return new ht(n)}static fromUint8Array(e){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const vw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nr(t){if(Pe(!!t),typeof t=="string"){let e=0;const n=vw.exec(t);if(Pe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function br(t){return typeof t=="string"?ht.fromBase64String(t):ht.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Vc(t){const e=t.mapValue.fields.__previous_value__;return kc(e)?Vc(e):e}function hi(t){const e=nr(t.mapValue.fields.__local_write_time__.timestampValue);return new We(e.seconds,e.nanos)}/**
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
 */class Ew{constructor(e,n,r,s,i,a,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class di{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new di("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof di&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo={mapValue:{}};function Rr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?kc(t)?4:Tw(t)?9007199254740991:ww(t)?10:11:he()}function dn(t,e){if(t===e)return!0;const n=Rr(t);if(n!==Rr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return hi(t).isEqual(hi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=nr(s.timestampValue),l=nr(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return br(s.bytesValue).isEqual(br(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ge(s.geoPointValue.latitude)===Ge(i.geoPointValue.latitude)&&Ge(s.geoPointValue.longitude)===Ge(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ge(s.integerValue)===Ge(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Ge(s.doubleValue),l=Ge(i.doubleValue);return a===l?xo(a)===xo(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return ss(t.arrayValue.values||[],e.arrayValue.values||[],dn);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(rd(a)!==rd(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!dn(a[c],l[c])))return!1;return!0}(t,e);default:return he()}}function fi(t,e){return(t.values||[]).find(n=>dn(n,e))!==void 0}function is(t,e){if(t===e)return 0;const n=Rr(t),r=Rr(e);if(n!==r)return be(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(i,a){const l=Ge(i.integerValue||i.doubleValue),c=Ge(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return id(t.timestampValue,e.timestampValue);case 4:return id(hi(t),hi(e));case 5:return be(t.stringValue,e.stringValue);case 6:return function(i,a){const l=br(i),c=br(a);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=be(l[h],c[h]);if(f!==0)return f}return be(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const l=be(Ge(i.latitude),Ge(a.latitude));return l!==0?l:be(Ge(i.longitude),Ge(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return od(t.arrayValue,e.arrayValue);case 10:return function(i,a){var l,c,h,f;const m=i.fields||{},y=a.fields||{},b=(l=m.value)===null||l===void 0?void 0:l.arrayValue,V=(c=y.value)===null||c===void 0?void 0:c.arrayValue,N=be(((h=b==null?void 0:b.values)===null||h===void 0?void 0:h.length)||0,((f=V==null?void 0:V.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:od(b,V)}(t.mapValue,e.mapValue);case 11:return function(i,a){if(i===oo.mapValue&&a===oo.mapValue)return 0;if(i===oo.mapValue)return 1;if(a===oo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let m=0;m<c.length&&m<f.length;++m){const y=be(c[m],f[m]);if(y!==0)return y;const b=is(l[c[m]],h[f[m]]);if(b!==0)return b}return be(c.length,f.length)}(t.mapValue,e.mapValue);default:throw he()}}function id(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=nr(t),r=nr(e),s=be(n.seconds,r.seconds);return s!==0?s:be(n.nanos,r.nanos)}function od(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=is(n[s],r[s]);if(i)return i}return be(n.length,r.length)}function os(t){return $l(t)}function $l(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=nr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return br(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ie.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=$l(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${$l(n.fields[a])}`;return s+"}"}(t.mapValue):he()}function ad(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function jl(t){return!!t&&"integerValue"in t}function Dc(t){return!!t&&"arrayValue"in t}function ld(t){return!!t&&"nullValue"in t}function cd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function go(t){return!!t&&"mapValue"in t}function ww(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Zs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Pr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Zs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Zs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Tw(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ct{constructor(e){this.value=e}static empty(){return new Ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!go(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Zs(n)}setAll(e){let n=lt.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=Zs(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());go(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];go(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Pr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ct(Zs(this.value))}}function Fp(t){const e=[];return Pr(t.fields,(n,r)=>{const s=new lt([n]);if(go(r)){const i=Fp(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Lt(e)}/**
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
 */class yt{constructor(e,n,r,s,i,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new yt(e,0,pe.min(),pe.min(),pe.min(),Ct.empty(),0)}static newFoundDocument(e,n,r,s){return new yt(e,1,n,pe.min(),r,s,0)}static newNoDocument(e,n){return new yt(e,2,n,pe.min(),pe.min(),Ct.empty(),0)}static newUnknownDocument(e,n){return new yt(e,3,n,pe.min(),pe.min(),Ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Mo{constructor(e,n){this.position=e,this.inclusive=n}}function ud(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=ie.comparator(ie.fromName(a.referenceValue),n.key):r=is(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function hd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!dn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Lo{constructor(e,n="asc"){this.field=e,this.dir=n}}function Iw(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Up{}class Xe extends Up{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new bw(e,n,r):n==="array-contains"?new Pw(e,r):n==="in"?new Cw(e,r):n==="not-in"?new kw(e,r):n==="array-contains-any"?new Vw(e,r):new Xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Rw(e,r):new Sw(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(is(n,this.value)):n!==null&&Rr(this.value)===Rr(n)&&this.matchesComparison(is(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Jt extends Up{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Jt(e,n)}matches(e){return Bp(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Bp(t){return t.op==="and"}function $p(t){return Aw(t)&&Bp(t)}function Aw(t){for(const e of t.filters)if(e instanceof Jt)return!1;return!0}function ql(t){if(t instanceof Xe)return t.field.canonicalString()+t.op.toString()+os(t.value);if($p(t))return t.filters.map(e=>ql(e)).join(",");{const e=t.filters.map(n=>ql(n)).join(",");return`${t.op}(${e})`}}function jp(t,e){return t instanceof Xe?function(r,s){return s instanceof Xe&&r.op===s.op&&r.field.isEqual(s.field)&&dn(r.value,s.value)}(t,e):t instanceof Jt?function(r,s){return s instanceof Jt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&jp(a,s.filters[l]),!0):!1}(t,e):void he()}function qp(t){return t instanceof Xe?function(n){return`${n.field.canonicalString()} ${n.op} ${os(n.value)}`}(t):t instanceof Jt?function(n){return n.op.toString()+" {"+n.getFilters().map(qp).join(" ,")+"}"}(t):"Filter"}class bw extends Xe{constructor(e,n,r){super(e,n,r),this.key=ie.fromName(r.referenceValue)}matches(e){const n=ie.comparator(e.key,this.key);return this.matchesComparison(n)}}class Rw extends Xe{constructor(e,n){super(e,"in",n),this.keys=Wp("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Sw extends Xe{constructor(e,n){super(e,"not-in",n),this.keys=Wp("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Wp(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ie.fromName(r.referenceValue))}class Pw extends Xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Dc(n)&&fi(n.arrayValue,this.value)}}class Cw extends Xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&fi(this.value.arrayValue,n)}}class kw extends Xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(fi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!fi(this.value.arrayValue,n)}}class Vw extends Xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Dc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>fi(this.value.arrayValue,r))}}/**
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
 */class Dw{constructor(e,n=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.ue=null}}function dd(t,e=null,n=[],r=[],s=null,i=null,a=null){return new Dw(t,e,n,r,s,i,a)}function Nc(t){const e=me(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ql(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),la(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>os(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>os(r)).join(",")),e.ue=n}return e.ue}function Oc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Iw(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!jp(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!hd(t.startAt,e.startAt)&&hd(t.endAt,e.endAt)}function Wl(t){return ie.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Si{constructor(e,n=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Nw(t,e,n,r,s,i,a,l){return new Si(t,e,n,r,s,i,a,l)}function ca(t){return new Si(t)}function fd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Hp(t){return t.collectionGroup!==null}function ei(t){const e=me(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ct(lt.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Lo(i,r))}),n.has(lt.keyField().canonicalString())||e.ce.push(new Lo(lt.keyField(),r))}return e.ce}function sn(t){const e=me(t);return e.le||(e.le=Ow(e,ei(t))),e.le}function Ow(t,e){if(t.limitType==="F")return dd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Lo(s.field,i)});const n=t.endAt?new Mo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Mo(t.startAt.position,t.startAt.inclusive):null;return dd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Hl(t,e){const n=t.filters.concat([e]);return new Si(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Kl(t,e,n){return new Si(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ua(t,e){return Oc(sn(t),sn(e))&&t.limitType===e.limitType}function Kp(t){return`${Nc(sn(t))}|lt:${t.limitType}`}function Br(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>qp(s)).join(", ")}]`),la(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>os(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>os(s)).join(",")),`Target(${r})`}(sn(t))}; limitType=${t.limitType})`}function ha(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ie.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ei(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=ud(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,ei(r),s)||r.endAt&&!function(a,l,c){const h=ud(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,ei(r),s))}(t,e)}function xw(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function zp(t){return(e,n)=>{let r=!1;for(const s of ei(t)){const i=Mw(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Mw(t,e,n){const r=t.field.isKeyField()?ie.comparator(e.key,n.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?is(c,h):he()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return he()}}/**
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
 */class fs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Pr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Mp(this.inner)}size(){return this.innerSize}}/**
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
 */const Lw=new Be(ie.comparator);function Vn(){return Lw}const Gp=new Be(ie.comparator);function qs(...t){let e=Gp;for(const n of t)e=e.insert(n.key,n);return e}function Qp(t){let e=Gp;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function yr(){return ti()}function Jp(){return ti()}function ti(){return new fs(t=>t.toString(),(t,e)=>t.isEqual(e))}const Fw=new Be(ie.comparator),Uw=new ct(ie.comparator);function Ee(...t){let e=Uw;for(const n of t)e=e.add(n);return e}const Bw=new ct(be);function $w(){return Bw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xo(e)?"-0":e}}function Yp(t){return{integerValue:""+t}}function jw(t,e){return yw(e)?Yp(e):xc(t,e)}/**
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
 */class da{constructor(){this._=void 0}}function qw(t,e,n){return t instanceof pi?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&kc(i)&&(i=Vc(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(n,e):t instanceof mi?Zp(t,e):t instanceof gi?em(t,e):function(s,i){const a=Xp(s,i),l=pd(a)+pd(s.Pe);return jl(a)&&jl(s.Pe)?Yp(l):xc(s.serializer,l)}(t,e)}function Ww(t,e,n){return t instanceof mi?Zp(t,e):t instanceof gi?em(t,e):n}function Xp(t,e){return t instanceof Fo?function(r){return jl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class pi extends da{}class mi extends da{constructor(e){super(),this.elements=e}}function Zp(t,e){const n=tm(e);for(const r of t.elements)n.some(s=>dn(s,r))||n.push(r);return{arrayValue:{values:n}}}class gi extends da{constructor(e){super(),this.elements=e}}function em(t,e){let n=tm(e);for(const r of t.elements)n=n.filter(s=>!dn(s,r));return{arrayValue:{values:n}}}class Fo extends da{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function pd(t){return Ge(t.integerValue||t.doubleValue)}function tm(t){return Dc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Hw{constructor(e,n){this.field=e,this.transform=n}}function Kw(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof mi&&s instanceof mi||r instanceof gi&&s instanceof gi?ss(r.elements,s.elements,dn):r instanceof Fo&&s instanceof Fo?dn(r.Pe,s.Pe):r instanceof pi&&s instanceof pi}(t.transform,e.transform)}class zw{constructor(e,n){this.version=e,this.transformResults=n}}class kt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new kt}static exists(e){return new kt(void 0,e)}static updateTime(e){return new kt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _o(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class fa{}function nm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new pa(t.key,kt.none()):new Pi(t.key,t.data,kt.none());{const n=t.data,r=Ct.empty();let s=new ct(lt.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new ir(t.key,r,new Lt(s.toArray()),kt.none())}}function Gw(t,e,n){t instanceof Pi?function(s,i,a){const l=s.value.clone(),c=gd(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ir?function(s,i,a){if(!_o(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=gd(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(rm(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function ni(t,e,n,r){return t instanceof Pi?function(i,a,l,c){if(!_o(i.precondition,a))return l;const h=i.value.clone(),f=_d(i.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof ir?function(i,a,l,c){if(!_o(i.precondition,a))return l;const h=_d(i.fieldTransforms,c,a),f=a.data;return f.setAll(rm(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,a,l){return _o(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function Qw(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Xp(r.transform,s||null);i!=null&&(n===null&&(n=Ct.empty()),n.set(r.field,i))}return n||null}function md(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ss(r,s,(i,a)=>Kw(i,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Pi extends fa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ir extends fa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function rm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function gd(t,e,n){const r=new Map;Pe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,Ww(a,l,n[s]))}return r}function _d(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,qw(i,a,e))}return r}class pa extends fa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Jw extends fa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Yw{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Gw(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ni(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ni(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Jp();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const c=nm(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(pe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ee())}isEqual(e){return this.batchId===e.batchId&&ss(this.mutations,e.mutations,(n,r)=>md(n,r))&&ss(this.baseMutations,e.baseMutations,(n,r)=>md(n,r))}}class Mc{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Pe(e.mutations.length===r.length);let s=function(){return Fw}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Mc(e,n,r,s)}}/**
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
 */class Xw{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Zw{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ye,Te;function eT(t){switch(t){default:return he();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function sm(t){if(t===void 0)return kn("GRPC error has no .code"),M.UNKNOWN;switch(t){case Ye.OK:return M.OK;case Ye.CANCELLED:return M.CANCELLED;case Ye.UNKNOWN:return M.UNKNOWN;case Ye.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Ye.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Ye.INTERNAL:return M.INTERNAL;case Ye.UNAVAILABLE:return M.UNAVAILABLE;case Ye.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Ye.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Ye.NOT_FOUND:return M.NOT_FOUND;case Ye.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Ye.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Ye.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Ye.ABORTED:return M.ABORTED;case Ye.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Ye.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Ye.DATA_LOSS:return M.DATA_LOSS;default:return he()}}(Te=Ye||(Ye={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function tT(){return new TextEncoder}/**
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
 */const nT=new Tr([4294967295,4294967295],0);function yd(t){const e=tT().encode(t),n=new Pp;return n.update(e),new Uint8Array(n.digest())}function vd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Tr([n,r],0),new Tr([s,i],0)]}class Lc{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ws(`Invalid padding: ${n}`);if(r<0)throw new Ws(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ws(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ws(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Tr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Tr.fromNumber(r)));return s.compare(nT)===1&&(s=new Tr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=yd(e),[r,s]=vd(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Lc(i,s,n);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const n=yd(e),[r,s]=vd(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ws extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ma{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ci.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ma(pe.min(),s,new Be(be),Vn(),Ee())}}class Ci{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ci(r,n,Ee(),Ee(),Ee())}}/**
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
 */class yo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class im{constructor(e,n){this.targetId=e,this.me=n}}class om{constructor(e,n,r=ht.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ed{constructor(){this.fe=0,this.ge=Td(),this.pe=ht.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ee(),n=Ee(),r=Ee();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:he()}}),new Ci(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Td()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Pe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class rT{constructor(e){this.Le=e,this.Be=new Map,this.ke=Vn(),this.qe=wd(),this.Qe=new Be(be)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:he()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Wl(i))if(r===0){const a=new ie(i.path);this.Ue(n,a,yt.newNoDocument(a,pe.min()))}else Pe(r===1);else{const a=this.Ye(n);if(a!==r){const l=this.Ze(e),c=l?this.Xe(l,e,a):1;if(c!==0){this.je(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,l;try{a=br(r).toUint8Array()}catch(c){if(c instanceof Lp)return rs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Lc(a,s,i)}catch(c){return rs(c instanceof Ws?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,a)=>{const l=this.Je(a);if(l){if(i.current&&Wl(l.target)){const c=new ie(l.target.path);this.ke.get(c)!==null||this.it(a,c)||this.Ue(a,c,yt.newNoDocument(c,e))}i.be&&(n.set(a,i.ve()),i.Ce())}});let r=Ee();this.qe.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new ma(e,n,this.Qe,this.ke,r);return this.ke=Vn(),this.qe=wd(),this.Qe=new Be(be),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Ed,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ct(be),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Ed),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function wd(){return new Be(ie.comparator)}function Td(){return new Be(ie.comparator)}const sT={asc:"ASCENDING",desc:"DESCENDING"},iT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},oT={and:"AND",or:"OR"};class aT{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function zl(t,e){return t.useProto3Json||la(e)?e:{value:e}}function Uo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function am(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function lT(t,e){return Uo(t,e.toTimestamp())}function on(t){return Pe(!!t),pe.fromTimestamp(function(n){const r=nr(n);return new We(r.seconds,r.nanos)}(t))}function Fc(t,e){return Gl(t,e).canonicalString()}function Gl(t,e){const n=function(s){return new xe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function lm(t){const e=xe.fromString(t);return Pe(fm(e)),e}function Ql(t,e){return Fc(t.databaseId,e.path)}function hl(t,e){const n=lm(e);if(n.get(1)!==t.databaseId.projectId)throw new Z(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Z(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ie(um(n))}function cm(t,e){return Fc(t.databaseId,e)}function cT(t){const e=lm(t);return e.length===4?xe.emptyPath():um(e)}function Jl(t){return new xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function um(t){return Pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Id(t,e,n){return{name:Ql(t,e),fields:n.value.mapValue.fields}}function uT(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:he()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Pe(f===void 0||typeof f=="string"),ht.fromBase64String(f||"")):(Pe(f===void 0||f instanceof Buffer||f instanceof Uint8Array),ht.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?M.UNKNOWN:sm(h.code);return new Z(f,h.message||"")}(a);n=new om(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=hl(t,r.document.name),i=on(r.document.updateTime),a=r.document.createTime?on(r.document.createTime):pe.min(),l=new Ct({mapValue:{fields:r.document.fields}}),c=yt.newFoundDocument(s,i,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new yo(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=hl(t,r.document),i=r.readTime?on(r.readTime):pe.min(),a=yt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new yo([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=hl(t,r.document),i=r.removedTargetIds||[];n=new yo([],i,s,null)}else{if(!("filter"in e))return he();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new Zw(s,i),l=r.targetId;n=new im(l,a)}}return n}function hT(t,e){let n;if(e instanceof Pi)n={update:Id(t,e.key,e.value)};else if(e instanceof pa)n={delete:Ql(t,e.key)};else if(e instanceof ir)n={update:Id(t,e.key,e.data),updateMask:ET(e.fieldMask)};else{if(!(e instanceof Jw))return he();n={verify:Ql(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof pi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof mi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof gi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Fo)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw he()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:lT(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:he()}(t,e.precondition)),n}function dT(t,e){return t&&t.length>0?(Pe(e!==void 0),t.map(n=>function(s,i){let a=s.updateTime?on(s.updateTime):on(i);return a.isEqual(pe.min())&&(a=on(i)),new zw(a,s.transformResults||[])}(n,e))):[]}function fT(t,e){return{documents:[cm(t,e.path)]}}function pT(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=cm(t,s);const i=function(h){if(h.length!==0)return dm(Jt.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:$r(y.field),direction:_T(y.dir)}}(f))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const l=zl(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function mT(t){let e=cT(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Pe(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(m){const y=hm(m);return y instanceof Jt&&$p(y)?y.getFilters():[y]}(n.where));let a=[];n.orderBy&&(a=function(m){return m.map(y=>function(V){return new Lo(jr(V.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(m){let y;return y=typeof m=="object"?m.value:m,la(y)?null:y}(n.limit));let c=null;n.startAt&&(c=function(m){const y=!!m.before,b=m.values||[];return new Mo(b,y)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const y=!m.before,b=m.values||[];return new Mo(b,y)}(n.endAt)),Nw(e,s,a,i,l,"F",c,h)}function gT(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function hm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=jr(n.unaryFilter.field);return Xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=jr(n.unaryFilter.field);return Xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=jr(n.unaryFilter.field);return Xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=jr(n.unaryFilter.field);return Xe.create(a,"!=",{nullValue:"NULL_VALUE"});default:return he()}}(t):t.fieldFilter!==void 0?function(n){return Xe.create(jr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return he()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Jt.create(n.compositeFilter.filters.map(r=>hm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return he()}}(n.compositeFilter.op))}(t):he()}function _T(t){return sT[t]}function yT(t){return iT[t]}function vT(t){return oT[t]}function $r(t){return{fieldPath:t.canonicalString()}}function jr(t){return lt.fromServerFormat(t.fieldPath)}function dm(t){return t instanceof Xe?function(n){if(n.op==="=="){if(cd(n.value))return{unaryFilter:{field:$r(n.field),op:"IS_NAN"}};if(ld(n.value))return{unaryFilter:{field:$r(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(cd(n.value))return{unaryFilter:{field:$r(n.field),op:"IS_NOT_NAN"}};if(ld(n.value))return{unaryFilter:{field:$r(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$r(n.field),op:yT(n.op),value:n.value}}}(t):t instanceof Jt?function(n){const r=n.getFilters().map(s=>dm(s));return r.length===1?r[0]:{compositeFilter:{op:vT(n.op),filters:r}}}(t):he()}function ET(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function fm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Gn{constructor(e,n,r,s,i=pe.min(),a=pe.min(),l=ht.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Gn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class wT{constructor(e){this.ct=e}}function TT(t){const e=mT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Kl(e,e.limit,"L"):e}/**
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
 */class IT{constructor(){this.un=new AT}addToCollectionParentIndex(e,n){return this.un.add(n),q.resolve()}getCollectionParents(e,n){return q.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return q.resolve()}deleteFieldIndex(e,n){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,n){return q.resolve()}getDocumentsMatchingTarget(e,n){return q.resolve(null)}getIndexType(e,n){return q.resolve(0)}getFieldIndexes(e,n){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,n){return q.resolve(tr.min())}getMinOffsetFromCollectionGroup(e,n){return q.resolve(tr.min())}updateCollectionGroup(e,n,r){return q.resolve()}updateIndexEntries(e,n){return q.resolve()}}class AT{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ct(xe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ct(xe.comparator)).toArray()}}/**
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
 */class bT{constructor(){this.changes=new fs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,yt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?q.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class RT{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class ST{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ni(r.mutation,s,Lt.empty(),We.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ee()){const s=yr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let a=qs();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=yr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ee()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,s){let i=Vn();const a=ti(),l=function(){return ti()}();return n.forEach((c,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof ir)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),ni(f.mutation,h,f.mutation.getFieldMask(),We.now())):a.set(h.key,Lt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,f)=>a.set(h,f)),n.forEach((h,f)=>{var m;return l.set(h,new RT(f,(m=a.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=ti();let s=new Be((a,l)=>a-l),i=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let f=r.get(c)||Lt.empty();f=l.applyToLocalView(h,f),r.set(c,f);const m=(s.get(l.batchId)||Ee()).add(c);s=s.insert(l.batchId,m)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,m=Jp();f.forEach(y=>{if(!i.has(y)){const b=nm(n.get(y),r.get(y));b!==null&&m.set(y,b),i=i.add(y)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,m))}return q.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(a){return ie.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Hp(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):q.resolve(yr());let l=-1,c=i;return a.next(h=>q.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(f)?q.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{c=c.insert(f,y)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,Ee())).next(f=>({batchId:l,changes:Qp(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ie(n)).next(r=>{let s=qs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=qs();return this.indexManager.getCollectionParents(e,i).next(l=>q.forEach(l,c=>{const h=function(m,y){return new Si(y,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((m,y)=>{a=a.insert(m,y)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(a=>{i.forEach((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,yt.newInvalidDocument(f)))});let l=qs();return a.forEach((c,h)=>{const f=i.get(c);f!==void 0&&ni(f.mutation,h,Lt.empty(),We.now()),ha(n,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return q.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:on(s.createTime)}}(n)),q.resolve()}getNamedQuery(e,n){return q.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:TT(s.bundledQuery),readTime:on(s.readTime)}}(n)),q.resolve()}}/**
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
 */class CT{constructor(){this.overlays=new Be(ie.comparator),this.Ir=new Map}getOverlay(e,n){return q.resolve(this.overlays.get(n))}getOverlays(e,n){const r=yr();return q.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),q.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),q.resolve()}getOverlaysForCollection(e,n,r){const s=yr(),i=n.length+1,a=new ie(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return q.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Be((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=yr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=yr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return q.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Xw(n,r));let i=this.Ir.get(n);i===void 0&&(i=Ee(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class kT{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,q.resolve()}}/**
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
 */class Uc{constructor(){this.Tr=new ct(nt.Er),this.dr=new ct(nt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new nt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new nt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new ie(new xe([])),r=new nt(n,e),s=new nt(n,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ie(new xe([])),r=new nt(n,e),s=new nt(n,e+1);let i=Ee();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const n=new nt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ie.comparator(e.key,n.key)||be(e.wr,n.wr)}static Ar(e,n){return be(e.wr,n.wr)||ie.comparator(e.key,n.key)}}/**
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
 */class VT{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ct(nt.Er)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Yw(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.br=this.br.add(new nt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return q.resolve(a)}lookupMutationBatch(e,n){return q.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return q.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new nt(n,0),s=new nt(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const l=this.Dr(a.wr);i.push(l)}),q.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ct(be);return n.forEach(s=>{const i=new nt(s,0),a=new nt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],l=>{r=r.add(l.wr)})}),q.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ie.isDocumentKey(i)||(i=i.child(""));const a=new nt(new ie(i),0);let l=new ct(be);return this.br.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.wr)),!0)},a),q.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Pe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return q.forEach(n.mutations,s=>{const i=new nt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new nt(n,0),s=this.br.firstAfterOrEqual(r);return q.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class DT{constructor(e){this.Mr=e,this.docs=function(){return new Be(ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return q.resolve(r?r.document.mutableCopy():yt.newInvalidDocument(n))}getEntries(e,n){let r=Vn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():yt.newInvalidDocument(s))}),q.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Vn();const a=n.path,l=new ie(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||pw(fw(f),r)<=0||(s.has(f.key)||ha(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return q.resolve(i)}getAllFromCollectionGroup(e,n,r,s){he()}Or(e,n){return q.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new NT(this)}getSize(e){return q.resolve(this.size)}}class NT extends bT{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),q.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class OT{constructor(e){this.persistence=e,this.Nr=new fs(n=>Nc(n),Oc),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Uc,this.targetCount=0,this.kr=as.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),q.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new as(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,q.resolve()}updateTargetData(e,n){return this.Kn(n),q.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),q.waitFor(i).next(()=>s)}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return q.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),q.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),q.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),q.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return q.resolve(r)}containsKey(e,n){return q.resolve(this.Br.containsKey(n))}}/**
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
 */class xT{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Cc(0),this.Kr=!1,this.Kr=!0,this.$r=new kT,this.referenceDelegate=e(this),this.Ur=new OT(this),this.indexManager=new IT,this.remoteDocumentCache=function(s){return new DT(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new wT(n),this.Gr=new PT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new CT,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new VT(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const s=new MT(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return q.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class MT extends gw{constructor(e){super(),this.currentSequenceNumber=e}}class Bc{constructor(e){this.persistence=e,this.Jr=new Uc,this.Yr=null}static Zr(e){return new Bc(e)}get Xr(){if(this.Yr)return this.Yr;throw he()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),q.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),q.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),q.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.Xr,r=>{const s=ie.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,pe.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return q.or([()=>q.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class $c{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=Ee(),s=Ee();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new $c(e,n.fromCache,r,s)}}/**
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
 */class LT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class FT{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Bv()?8:_w(wt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new LT;return this.Xi(e,n,a).next(l=>{if(i.result=l,this.zi)return this.es(e,n,a,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Ns()<=we.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",Br(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),q.resolve()):(Ns()<=we.DEBUG&&ee("QueryEngine","Query:",Br(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Ns()<=we.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",Br(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,sn(n))):q.resolve())}Yi(e,n){if(fd(n))return q.resolve(null);let r=sn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Kl(n,null,"F"),r=sn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=Ee(...i);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.ts(n,l);return this.ns(n,h,a,c.readTime)?this.Yi(e,Kl(n,null,"F")):this.rs(e,h,n,c)}))})))}Zi(e,n,r,s){return fd(n)||s.isEqual(pe.min())?q.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(n,i);return this.ns(n,a,r,s)?q.resolve(null):(Ns()<=we.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Br(n)),this.rs(e,a,n,dw(s,-1)).next(l=>l))})}ts(e,n){let r=new ct(zp(e));return n.forEach((s,i)=>{ha(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Ns()<=we.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",Br(n)),this.Ji.getDocumentsMatchingQuery(e,n,tr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Be(be),this._s=new fs(i=>Nc(i),Oc),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ST(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function BT(t,e,n,r){return new UT(t,e,n,r)}async function pm(t,e){const n=me(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=Ee();for(const h of s){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:l}))})})}function $T(t,e){const n=me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const m=h.batch,y=m.keys();let b=q.resolve();return y.forEach(V=>{b=b.next(()=>f.getEntry(c,V)).next(N=>{const P=h.docVersions.get(V);Pe(P!==null),N.version.compareTo(P)<0&&(m.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),b.next(()=>l.mutationQueue.removeMutationBatch(c,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Ee();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function mm(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function jT(t,e){const n=me(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((f,m)=>{const y=s.get(m);if(!y)return;l.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,m)));let b=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?b=b.withResumeToken(ht.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):f.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(f.resumeToken,r)),s=s.insert(m,b),function(N,P,O){return N.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(y,b,f)&&l.push(n.Ur.updateTargetData(i,b))});let c=Vn(),h=Ee();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(qT(i,a,e.documentUpdates).next(f=>{c=f.Ps,h=f.Is})),!r.isEqual(pe.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(m=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return q.waitFor(l).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.os=s,i))}function qT(t,e,n){let r=Ee(),s=Ee();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let a=Vn();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(pe.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):ee("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Ps:a,Is:s}})}function WT(t,e){const n=me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function HT(t,e){const n=me(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,q.resolve(s)):n.Ur.allocateTargetId(r).next(a=>(s=new Gn(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Yl(t,e,n){const r=me(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Ri(a))throw a;ee("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Ad(t,e,n){const r=me(t);let s=pe.min(),i=Ee();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,f){const m=me(c),y=m._s.get(f);return y!==void 0?q.resolve(m.os.get(y)):m.Ur.getTargetData(h,f)}(r,a,sn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,n?s:pe.min(),n?i:Ee())).next(l=>(KT(r,xw(e),l),{documents:l,Ts:i})))}function KT(t,e,n){let r=t.us.get(e)||pe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class bd{constructor(){this.activeTargetIds=$w()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zT{constructor(){this.so=new bd,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new bd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class GT{_o(e){}shutdown(){}}/**
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
 */class Rd{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ee("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ee("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ao=null;function dl(){return ao===null?ao=function(){return 268435456+Math.round(2147483648*Math.random())}():ao++,"0x"+ao.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class JT{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const mt="WebChannelConnection";class YT extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,a){const l=dl(),c=this.xo(n,r.toUriEncodedString());ee("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,a),this.No(n,c,h,s).then(f=>(ee("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw rs("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",c,"request:",s),f})}Lo(n,r,s,i,a,l){return this.Mo(n,r,s,i,a)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ds}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>n[a]=i),s&&s.headers.forEach((i,a)=>n[a]=i)}xo(n,r){const s=QT[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=dl();return new Promise((a,l)=>{const c=new Cp;c.setWithCredentials(!0),c.listenOnce(kp.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case mo.NO_ERROR:const f=c.getResponseJson();ee(mt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),a(f);break;case mo.TIMEOUT:ee(mt,`RPC '${e}' ${i} timed out`),l(new Z(M.DEADLINE_EXCEEDED,"Request time out"));break;case mo.HTTP_ERROR:const m=c.getStatus();if(ee(mt,`RPC '${e}' ${i} failed with status:`,m,"response text:",c.getResponseText()),m>0){let y=c.getResponseJson();Array.isArray(y)&&(y=y[0]);const b=y==null?void 0:y.error;if(b&&b.status&&b.message){const V=function(P){const O=P.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(O)>=0?O:M.UNKNOWN}(b.status);l(new Z(V,b.message))}else l(new Z(M.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new Z(M.UNAVAILABLE,"Connection failed."));break;default:he()}}finally{ee(mt,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);ee(mt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=dl(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Np(),l=Dp(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");ee(mt,`Creating RPC '${e}' stream ${s}: ${f}`,c);const m=a.createWebChannel(f,c);let y=!1,b=!1;const V=new JT({Io:P=>{b?ee(mt,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(y||(ee(mt,`Opening RPC '${e}' stream ${s} transport.`),m.open(),y=!0),ee(mt,`RPC '${e}' stream ${s} sending:`,P),m.send(P))},To:()=>m.close()}),N=(P,O,x)=>{P.listen(O,W=>{try{x(W)}catch(L){setTimeout(()=>{throw L},0)}})};return N(m,js.EventType.OPEN,()=>{b||(ee(mt,`RPC '${e}' stream ${s} transport opened.`),V.yo())}),N(m,js.EventType.CLOSE,()=>{b||(b=!0,ee(mt,`RPC '${e}' stream ${s} transport closed`),V.So())}),N(m,js.EventType.ERROR,P=>{b||(b=!0,rs(mt,`RPC '${e}' stream ${s} transport errored:`,P),V.So(new Z(M.UNAVAILABLE,"The operation could not be completed")))}),N(m,js.EventType.MESSAGE,P=>{var O;if(!b){const x=P.data[0];Pe(!!x);const W=x,L=W.error||((O=W[0])===null||O===void 0?void 0:O.error);if(L){ee(mt,`RPC '${e}' stream ${s} received error:`,L);const Y=L.status;let ne=function(_){const T=Ye[_];if(T!==void 0)return sm(T)}(Y),w=L.message;ne===void 0&&(ne=M.INTERNAL,w="Unknown error status: "+Y+" with message "+L.message),b=!0,V.So(new Z(ne,w)),m.close()}else ee(mt,`RPC '${e}' stream ${s} received:`,x),V.bo(x)}}),N(l,Vp.STAT_EVENT,P=>{P.stat===Bl.PROXY?ee(mt,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===Bl.NOPROXY&&ee(mt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{V.wo()},0),V}}function fl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(t){return new aT(t,!0)}/**
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
 */class gm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&ee("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class _m{constructor(e,n,r,s,i,a,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new gm(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(kn(n.toString()),kn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new Z(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return ee("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(ee("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class XT extends _m{constructor(e,n,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=uT(this.serializer,e),r=function(i){if(!("targetChange"in i))return pe.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?pe.min():a.readTime?on(a.readTime):pe.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Jl(this.serializer),n.addTarget=function(i,a){let l;const c=a.target;if(l=Wl(c)?{documents:fT(i,c)}:{query:pT(i,c)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=am(i,a.resumeToken);const h=zl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(pe.min())>0){l.readTime=Uo(i,a.snapshotVersion.toTimestamp());const h=zl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=gT(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Jl(this.serializer),n.removeTarget=e,this.a_(n)}}class ZT extends _m{constructor(e,n,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Pe(!!e.streamToken),this.lastStreamToken=e.streamToken,Pe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=dT(e.writeResults,e.commitTime),r=on(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Jl(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>hT(this.serializer,r))};this.a_(n)}}/**
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
 */class eI extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new Z(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,Gl(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Z(M.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,Gl(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new Z(M.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class tI{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(kn(n),this.D_=!1):ee("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class nI{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{Cr(this)&&(ee("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=me(c);h.L_.add(4),await ki(h),h.q_.set("Unknown"),h.L_.delete(4),await _a(h)}(this))})}),this.q_=new tI(r,s)}}async function _a(t){if(Cr(t))for(const e of t.B_)await e(!0)}async function ki(t){for(const e of t.B_)await e(!1)}function ym(t,e){const n=me(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Hc(n)?Wc(n):ps(n).r_()&&qc(n,e))}function jc(t,e){const n=me(t),r=ps(n);n.N_.delete(e),r.r_()&&vm(n,e),n.N_.size===0&&(r.r_()?r.o_():Cr(n)&&n.q_.set("Unknown"))}function qc(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ps(t).A_(e)}function vm(t,e){t.Q_.xe(e),ps(t).R_(e)}function Wc(t){t.Q_=new rT({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ps(t).start(),t.q_.v_()}function Hc(t){return Cr(t)&&!ps(t).n_()&&t.N_.size>0}function Cr(t){return me(t).L_.size===0}function Em(t){t.Q_=void 0}async function rI(t){t.q_.set("Online")}async function sI(t){t.N_.forEach((e,n)=>{qc(t,e)})}async function iI(t,e){Em(t),Hc(t)?(t.q_.M_(e),Wc(t)):t.q_.set("Unknown")}async function oI(t,e,n){if(t.q_.set("Online"),e instanceof om&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){ee("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Bo(t,r)}else if(e instanceof yo?t.Q_.Ke(e):e instanceof im?t.Q_.He(e):t.Q_.We(e),!n.isEqual(pe.min()))try{const r=await mm(t.localStore);n.compareTo(r)>=0&&await function(i,a){const l=i.Q_.rt(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const f=i.N_.get(c);if(!f)return;i.N_.set(c,f.withResumeToken(ht.EMPTY_BYTE_STRING,f.snapshotVersion)),vm(i,c);const m=new Gn(f.target,c,h,f.sequenceNumber);qc(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){ee("RemoteStore","Failed to raise snapshot:",r),await Bo(t,r)}}async function Bo(t,e,n){if(!Ri(e))throw e;t.L_.add(1),await ki(t),t.q_.set("Offline"),n||(n=()=>mm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await _a(t)})}function wm(t,e){return e().catch(n=>Bo(t,n,e))}async function ya(t){const e=me(t),n=rr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;aI(e);)try{const s=await WT(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,lI(e,s)}catch(s){await Bo(e,s)}Tm(e)&&Im(e)}function aI(t){return Cr(t)&&t.O_.length<10}function lI(t,e){t.O_.push(e);const n=rr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Tm(t){return Cr(t)&&!rr(t).n_()&&t.O_.length>0}function Im(t){rr(t).start()}async function cI(t){rr(t).p_()}async function uI(t){const e=rr(t);for(const n of t.O_)e.m_(n.mutations)}async function hI(t,e,n){const r=t.O_.shift(),s=Mc.from(r,e,n);await wm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ya(t)}async function dI(t,e){e&&rr(t).V_&&await async function(r,s){if(function(a){return eT(a)&&a!==M.ABORTED}(s.code)){const i=r.O_.shift();rr(r).s_(),await wm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ya(r)}}(t,e),Tm(t)&&Im(t)}async function Sd(t,e){const n=me(t);n.asyncQueue.verifyOperationInProgress(),ee("RemoteStore","RemoteStore received new credentials");const r=Cr(n);n.L_.add(3),await ki(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await _a(n)}async function fI(t,e){const n=me(t);e?(n.L_.delete(2),await _a(n)):e||(n.L_.add(2),await ki(n),n.q_.set("Unknown"))}function ps(t){return t.K_||(t.K_=function(n,r,s){const i=me(n);return i.w_(),new XT(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:rI.bind(null,t),Ro:sI.bind(null,t),mo:iI.bind(null,t),d_:oI.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Hc(t)?Wc(t):t.q_.set("Unknown")):(await t.K_.stop(),Em(t))})),t.K_}function rr(t){return t.U_||(t.U_=function(n,r,s){const i=me(n);return i.w_(),new ZT(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:cI.bind(null,t),mo:dI.bind(null,t),f_:uI.bind(null,t),g_:hI.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await ya(t)):(await t.U_.stop(),t.O_.length>0&&(ee("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class Kc{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Sn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,l=new Kc(e,n,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zc(t,e){if(kn("AsyncQueue",`${e}: ${t}`),Ri(t))return new Z(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Jr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ie.comparator(n.key,r.key):(n,r)=>ie.comparator(n.key,r.key),this.keyedMap=qs(),this.sortedSet=new Be(this.comparator)}static emptySet(e){return new Jr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Jr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Jr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Pd{constructor(){this.W_=new Be(ie.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):he():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ls{constructor(e,n,r,s,i,a,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new ls(e,n,Jr.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ua(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class pI{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class mI{constructor(){this.queries=Cd(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=me(n),i=s.queries;s.queries=Cd(),i.forEach((a,l)=>{for(const c of l.j_)c.onError(r)})})(this,new Z(M.ABORTED,"Firestore shutting down"))}}function Cd(){return new fs(t=>Kp(t),ua)}async function Gc(t,e){const n=me(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new pI,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const l=zc(a,`Initialization of query '${Br(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Jc(n)}async function Qc(t,e){const n=me(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function gI(t,e){const n=me(t);let r=!1;for(const s of e){const i=s.query,a=n.queries.get(i);if(a){for(const l of a.j_)l.X_(s)&&(r=!0);a.z_=s}}r&&Jc(n)}function _I(t,e,n){const r=me(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Jc(t){t.Y_.forEach(e=>{e.next()})}var Xl,kd;(kd=Xl||(Xl={})).ea="default",kd.Cache="cache";class Yc{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ls(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ls.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Xl.Cache}}/**
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
 */class Am{constructor(e){this.key=e}}class bm{constructor(e){this.key=e}}class yI{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Ee(),this.mutatedKeys=Ee(),this.Aa=zp(e),this.Ra=new Jr(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Pd,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const y=s.get(f),b=ha(this.query,m)?m:null,V=!!y&&this.mutatedKeys.has(y.key),N=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let P=!1;y&&b?y.data.isEqual(b.data)?V!==N&&(r.track({type:3,doc:b}),P=!0):this.ga(y,b)||(r.track({type:2,doc:b}),P=!0,(c&&this.Aa(b,c)>0||h&&this.Aa(b,h)<0)&&(l=!0)):!y&&b?(r.track({type:0,doc:b}),P=!0):y&&!b&&(r.track({type:1,doc:y}),P=!0,(c||h)&&(l=!0)),P&&(b?(a=a.add(b),i=N?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,m)=>function(b,V){const N=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he()}};return N(b)-N(V)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,h=c!==this.Ea;return this.Ea=c,a.length!==0||h?{snapshot:new ls(this.query,e.Ra,i,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Pd,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Ee(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new bm(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Am(r))}),n}ba(e){this.Ta=e.Ts,this.da=Ee();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ls.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class vI{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class EI{constructor(e){this.key=e,this.va=!1}}class wI{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new fs(l=>Kp(l),ua),this.Ma=new Map,this.xa=new Set,this.Oa=new Be(ie.comparator),this.Na=new Map,this.La=new Uc,this.Ba={},this.ka=new Map,this.qa=as.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function TI(t,e,n=!0){const r=Vm(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Rm(r,e,n,!0),s}async function II(t,e){const n=Vm(t);await Rm(n,e,!0,!1)}async function Rm(t,e,n,r){const s=await HT(t.localStore,sn(e)),i=s.targetId,a=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await AI(t,e,i,a==="current",s.resumeToken)),t.isPrimaryClient&&n&&ym(t.remoteStore,s),l}async function AI(t,e,n,r,s){t.Ka=(m,y,b)=>async function(N,P,O,x){let W=P.view.ma(O);W.ns&&(W=await Ad(N.localStore,P.query,!1).then(({documents:w})=>P.view.ma(w,W)));const L=x&&x.targetChanges.get(P.targetId),Y=x&&x.targetMismatches.get(P.targetId)!=null,ne=P.view.applyChanges(W,N.isPrimaryClient,L,Y);return Dd(N,P.targetId,ne.wa),ne.snapshot}(t,m,y,b);const i=await Ad(t.localStore,e,!0),a=new yI(e,i.Ts),l=a.ma(i.documents),c=Ci.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=a.applyChanges(l,t.isPrimaryClient,c);Dd(t,n,h.wa);const f=new vI(e,n,a);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function bI(t,e,n){const r=me(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!ua(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Yl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&jc(r.remoteStore,s.targetId),Zl(r,s.targetId)}).catch(bi)):(Zl(r,s.targetId),await Yl(r.localStore,s.targetId,!0))}async function RI(t,e){const n=me(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),jc(n.remoteStore,r.targetId))}async function SI(t,e,n){const r=OI(t);try{const s=await function(a,l){const c=me(a),h=We.now(),f=l.reduce((b,V)=>b.add(V.key),Ee());let m,y;return c.persistence.runTransaction("Locally write mutations","readwrite",b=>{let V=Vn(),N=Ee();return c.cs.getEntries(b,f).next(P=>{V=P,V.forEach((O,x)=>{x.isValidDocument()||(N=N.add(O))})}).next(()=>c.localDocuments.getOverlayedDocuments(b,V)).next(P=>{m=P;const O=[];for(const x of l){const W=Qw(x,m.get(x.key).overlayedDocument);W!=null&&O.push(new ir(x.key,W,Fp(W.value.mapValue),kt.exists(!0)))}return c.mutationQueue.addMutationBatch(b,h,O,l)}).next(P=>{y=P;const O=P.applyToLocalDocumentSet(m,N);return c.documentOverlayCache.saveOverlays(b,P.batchId,O)})}).then(()=>({batchId:y.batchId,changes:Qp(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let h=a.Ba[a.currentUser.toKey()];h||(h=new Be(be)),h=h.insert(l,c),a.Ba[a.currentUser.toKey()]=h}(r,s.batchId,n),await Vi(r,s.changes),await ya(r.remoteStore)}catch(s){const i=zc(s,"Failed to persist write");n.reject(i)}}async function Sm(t,e){const n=me(t);try{const r=await jT(n.localStore,e);e.targetChanges.forEach((s,i)=>{const a=n.Na.get(i);a&&(Pe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?Pe(a.va):s.removedDocuments.size>0&&(Pe(a.va),a.va=!1))}),await Vi(n,r,e)}catch(r){await bi(r)}}function Vd(t,e,n){const r=me(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,a)=>{const l=a.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=me(a);c.onlineState=l;let h=!1;c.queries.forEach((f,m)=>{for(const y of m.j_)y.Z_(l)&&(h=!0)}),h&&Jc(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function PI(t,e,n){const r=me(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new Be(ie.comparator);a=a.insert(i,yt.newNoDocument(i,pe.min()));const l=Ee().add(i),c=new ma(pe.min(),new Map,new Be(be),a,l);await Sm(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),Xc(r)}else await Yl(r.localStore,e,!1).then(()=>Zl(r,e,n)).catch(bi)}async function CI(t,e){const n=me(t),r=e.batch.batchId;try{const s=await $T(n.localStore,e);Cm(n,r,null),Pm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Vi(n,s)}catch(s){await bi(s)}}async function kI(t,e,n){const r=me(t);try{const s=await function(a,l){const c=me(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(m=>(Pe(m!==null),f=m.keys(),c.mutationQueue.removeMutationBatch(h,m))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(r.localStore,e);Cm(r,e,n),Pm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Vi(r,s)}catch(s){await bi(s)}}function Pm(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Cm(t,e,n){const r=me(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Zl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||km(t,r)})}function km(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(jc(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Xc(t))}function Dd(t,e,n){for(const r of n)r instanceof Am?(t.La.addReference(r.key,e),VI(t,r)):r instanceof bm?(ee("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||km(t,r.key)):he()}function VI(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(ee("SyncEngine","New document in limbo: "+n),t.xa.add(r),Xc(t))}function Xc(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new ie(xe.fromString(e)),r=t.qa.next();t.Na.set(r,new EI(n)),t.Oa=t.Oa.insert(n,r),ym(t.remoteStore,new Gn(sn(ca(n.path)),r,"TargetPurposeLimboResolution",Cc.oe))}}async function Vi(t,e,n){const r=me(t),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{a.push(r.Ka(c,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(h){s.push(h);const m=$c.Wi(c.targetId,h);i.push(m)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(c,h){const f=me(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>q.forEach(h,y=>q.forEach(y.$i,b=>f.persistence.referenceDelegate.addReference(m,y.targetId,b)).next(()=>q.forEach(y.Ui,b=>f.persistence.referenceDelegate.removeReference(m,y.targetId,b)))))}catch(m){if(!Ri(m))throw m;ee("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const y=m.targetId;if(!m.fromCache){const b=f.os.get(y),V=b.snapshotVersion,N=b.withLastLimboFreeSnapshotVersion(V);f.os=f.os.insert(y,N)}}}(r.localStore,i))}async function DI(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){ee("SyncEngine","User change. New user:",e.toKey());const r=await pm(n.localStore,e);n.currentUser=e,function(i,a){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new Z(M.CANCELLED,a))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Vi(n,r.hs)}}function NI(t,e){const n=me(t),r=n.Na.get(e);if(r&&r.va)return Ee().add(r.key);{let s=Ee();const i=n.Ma.get(e);if(!i)return s;for(const a of i){const l=n.Fa.get(a);s=s.unionWith(l.view.Va)}return s}}function Vm(t){const e=me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Sm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=NI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=PI.bind(null,e),e.Ca.d_=gI.bind(null,e.eventManager),e.Ca.$a=_I.bind(null,e.eventManager),e}function OI(t){const e=me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=CI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=kI.bind(null,e),e}class $o{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ga(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return BT(this.persistence,new FT,e.initialUser,this.serializer)}Ga(e){return new xT(Bc.Zr,this.serializer)}Wa(e){return new zT}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}$o.provider={build:()=>new $o};class ec{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Vd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=DI.bind(null,this.syncEngine),await fI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new mI}()}createDatastore(e){const n=ga(e.databaseInfo.databaseId),r=function(i){return new YT(i)}(e.databaseInfo);return function(i,a,l,c){return new eI(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,a,l){return new nI(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Vd(this.syncEngine,n,0),function(){return Rd.D()?new Rd:new GT}())}createSyncEngine(e,n){return function(s,i,a,l,c,h,f){const m=new wI(s,i,a,l,c,h);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=me(s);ee("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await ki(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}ec.provider={build:()=>new ec};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Zc{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):kn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class xI{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=gt.UNAUTHENTICATED,this.clientId=xp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{ee("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(ee("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Sn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=zc(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function pl(t,e){t.asyncQueue.verifyOperationInProgress(),ee("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await pm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Nd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await MI(t);ee("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Sd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Sd(e.remoteStore,s)),t._onlineComponents=e}async function MI(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee("FirestoreClient","Using user provided OfflineComponentProvider");try{await pl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;rs("Error using user provided cache. Falling back to memory cache: "+n),await pl(t,new $o)}}else ee("FirestoreClient","Using default OfflineComponentProvider"),await pl(t,new $o);return t._offlineComponents}async function Dm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee("FirestoreClient","Using user provided OnlineComponentProvider"),await Nd(t,t._uninitializedComponentsProvider._online)):(ee("FirestoreClient","Using default OnlineComponentProvider"),await Nd(t,new ec))),t._onlineComponents}function LI(t){return Dm(t).then(e=>e.syncEngine)}async function jo(t){const e=await Dm(t),n=e.eventManager;return n.onListen=TI.bind(null,e.syncEngine),n.onUnlisten=bI.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=II.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=RI.bind(null,e.syncEngine),n}function FI(t,e,n={}){const r=new Sn;return t.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const f=new Zc({next:y=>{f.Za(),a.enqueueAndForget(()=>Qc(i,m));const b=y.docs.has(l);!b&&y.fromCache?h.reject(new Z(M.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&y.fromCache&&c&&c.source==="server"?h.reject(new Z(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(y)},error:y=>h.reject(y)}),m=new Yc(ca(l.path),f,{includeMetadataChanges:!0,_a:!0});return Gc(i,m)}(await jo(t),t.asyncQueue,e,n,r)),r.promise}function UI(t,e,n={}){const r=new Sn;return t.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const f=new Zc({next:y=>{f.Za(),a.enqueueAndForget(()=>Qc(i,m)),y.fromCache&&c.source==="server"?h.reject(new Z(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(y)},error:y=>h.reject(y)}),m=new Yc(l,f,{includeMetadataChanges:!0,_a:!0});return Gc(i,m)}(await jo(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Nm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od=new Map;/**
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
 */function Om(t,e,n){if(!n)throw new Z(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function BI(t,e,n,r){if(e===!0&&r===!0)throw new Z(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function xd(t){if(!ie.isDocumentKey(t))throw new Z(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Md(t){if(ie.isDocumentKey(t))throw new Z(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function va(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":he()}function Vt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Z(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=va(t);throw new Z(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Z(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Z(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}BI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Nm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ea{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ld({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Z(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ld(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new rw;switch(r.type){case"firstParty":return new aw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Z(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Od.get(n);r&&(ee("ComponentProvider","Removing Datastore"),Od.delete(n),r.terminate())}(this),Promise.resolve()}}function $I(t,e,n,r={}){var s;const i=(t=Vt(t,Ea))._getSettings(),a=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&rs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=gt.MOCK_USER;else{l=Nv(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new Z(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new gt(h)}t._authCredentials=new sw(new Op(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new kr(this.firestore,e,this._query)}}class Et{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Et(this.firestore,e,this._key)}}class Xn extends kr{constructor(e,n,r){super(e,n,ca(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Et(this.firestore,null,new ie(e))}withConverter(e){return new Xn(this.firestore,e,this._path)}}function Os(t,e,...n){if(t=Qe(t),Om("collection","path",e),t instanceof Ea){const r=xe.fromString(e,...n);return Md(r),new Xn(t,null,r)}{if(!(t instanceof Et||t instanceof Xn))throw new Z(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return Md(r),new Xn(t.firestore,null,r)}}function Ot(t,e,...n){if(t=Qe(t),arguments.length===1&&(e=xp.newId()),Om("doc","path",e),t instanceof Ea){const r=xe.fromString(e,...n);return xd(r),new Et(t,null,new ie(r))}{if(!(t instanceof Et||t instanceof Xn))throw new Z(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return xd(r),new Et(t.firestore,t instanceof Xn?t.converter:null,new ie(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new gm(this,"async_queue_retry"),this.Vu=()=>{const r=fl();r&&ee("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=fl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=fl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Sn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ri(e))throw e;ee("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw kn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=Kc.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&he()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Ud(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Dn extends Ea{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Fd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Fd(e),this._firestoreClient=void 0,await e}}}function jI(t,e){const n=typeof t=="object"?t:bp(),r=typeof t=="string"?t:"(default)",s=Sc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Vv("firestore");i&&$I(s,...i)}return s}function Di(t){if(t._terminated)throw new Z(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||qI(t),t._firestoreClient}function qI(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,h,f){return new Ew(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Nm(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new xI(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cs(ht.fromBase64String(e))}catch(n){throw new Z(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new cs(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Z(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e){this._methodName=e}}/**
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
 */class eu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Z(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Z(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
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
 */class tu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const WI=/^__.*__$/;class HI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ir(e,this.data,this.fieldMask,n,this.fieldTransforms):new Pi(e,this.data,n,this.fieldTransforms)}}class xm{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ir(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Mm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he()}}class nu{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new nu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return qo(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Mm(this.Cu)&&WI.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class KI{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ga(e)}Qu(e,n,r,s=!1){return new nu({Cu:e,methodName:n,qu:r,path:lt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ta(t){const e=t._freezeSettings(),n=ga(t._databaseId);return new KI(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Lm(t,e,n,r,s,i={}){const a=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);su("Data must be an object, but it was:",a,r);const l=Bm(r,a);let c,h;if(i.merge)c=new Lt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const y=tc(e,m,n);if(!a.contains(y))throw new Z(M.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);jm(f,y)||f.push(y)}c=new Lt(f),h=a.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,h=a.fieldTransforms;return new HI(new Ct(l),c,h)}class Ia extends wa{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ia}}class ru extends wa{_toFieldTransform(e){return new Hw(e.path,new pi)}isEqual(e){return e instanceof ru}}function Fm(t,e,n,r){const s=t.Qu(1,e,n);su("Data must be an object, but it was:",s,r);const i=[],a=Ct.empty();Pr(r,(c,h)=>{const f=iu(e,c,n);h=Qe(h);const m=s.Nu(f);if(h instanceof Ia)i.push(f);else{const y=Oi(h,m);y!=null&&(i.push(f),a.set(f,y))}});const l=new Lt(i);return new xm(a,l,s.fieldTransforms)}function Um(t,e,n,r,s,i){const a=t.Qu(1,e,n),l=[tc(e,r,n)],c=[s];if(i.length%2!=0)throw new Z(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<i.length;y+=2)l.push(tc(e,i[y])),c.push(i[y+1]);const h=[],f=Ct.empty();for(let y=l.length-1;y>=0;--y)if(!jm(h,l[y])){const b=l[y];let V=c[y];V=Qe(V);const N=a.Nu(b);if(V instanceof Ia)h.push(b);else{const P=Oi(V,N);P!=null&&(h.push(b),f.set(b,P))}}const m=new Lt(h);return new xm(f,m,a.fieldTransforms)}function zI(t,e,n,r=!1){return Oi(n,t.Qu(r?4:3,e))}function Oi(t,e){if($m(t=Qe(t)))return su("Unsupported field value:",e,t),Bm(t,e);if(t instanceof wa)return function(r,s){if(!Mm(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=Oi(l,s.Lu(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Qe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return jw(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=We.fromDate(r);return{timestampValue:Uo(s.serializer,i)}}if(r instanceof We){const i=new We(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Uo(s.serializer,i)}}if(r instanceof eu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof cs)return{bytesValue:am(s.serializer,r._byteString)};if(r instanceof Et){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Fc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof tu)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return xc(l.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${va(r)}`)}(t,e)}function Bm(t,e){const n={};return Mp(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pr(t,(r,s)=>{const i=Oi(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function $m(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof We||t instanceof eu||t instanceof cs||t instanceof Et||t instanceof wa||t instanceof tu)}function su(t,e,n){if(!$m(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=va(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function tc(t,e,n){if((e=Qe(e))instanceof Ni)return e._internalPath;if(typeof e=="string")return iu(t,e);throw qo("Field path arguments must be of type string or ",t,!1,void 0,n)}const GI=new RegExp("[~\\*/\\[\\]]");function iu(t,e,n){if(e.search(GI)>=0)throw qo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ni(...e.split("."))._internalPath}catch{throw qo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function qo(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new Z(M.INVALID_ARGUMENT,l+t+c)}function jm(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new QI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ou("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class QI extends qm{data(){return super.data()}}function ou(t,e){return typeof e=="string"?iu(t,e):e instanceof Ni?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Z(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class au{}class JI extends au{}function YI(t,e,...n){let r=[];e instanceof au&&r.push(e),r=r.concat(n),function(i){const a=i.filter(c=>c instanceof lu).length,l=i.filter(c=>c instanceof Aa).length;if(a>1||a>0&&l>0)throw new Z(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Aa extends JI{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Aa(e,n,r)}_apply(e){const n=this._parse(e);return Hm(e._query,n),new kr(e.firestore,e.converter,Hl(e._query,n))}_parse(e){const n=Ta(e.firestore);return function(i,a,l,c,h,f,m){let y;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new Z(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){$d(m,f);const b=[];for(const V of m)b.push(Bd(c,i,V));y={arrayValue:{values:b}}}else y=Bd(c,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||$d(m,f),y=zI(l,a,m,f==="in"||f==="not-in");return Xe.create(h,f,y)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function XI(t,e,n){const r=e,s=ou("where",t);return Aa._create(s,r,n)}class lu extends au{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new lu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Jt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let a=s;const l=i.getFlattenedFilters();for(const c of l)Hm(a,c),a=Hl(a,c)}(e._query,n),new kr(e.firestore,e.converter,Hl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Bd(t,e,n){if(typeof(n=Qe(n))=="string"){if(n==="")throw new Z(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Hp(e)&&n.indexOf("/")!==-1)throw new Z(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(xe.fromString(n));if(!ie.isDocumentKey(r))throw new Z(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ad(t,new ie(r))}if(n instanceof Et)return ad(t,n._key);throw new Z(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${va(n)}.`)}function $d(t,e){if(!Array.isArray(t)||t.length===0)throw new Z(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Hm(t,e){const n=function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Z(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Z(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class ZI{convertValue(e,n="none"){switch(Rr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(br(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw he()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Pr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Ge(a.doubleValue));return new tu(i)}convertGeoPoint(e){return new eu(Ge(e.latitude),Ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Vc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(hi(e));default:return null}}convertTimestamp(e){const n=nr(e);return new We(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=xe.fromString(e);Pe(fm(r));const s=new di(r.get(1),r.get(3)),i=new ie(r.popFirst(5));return s.isEqual(n)||kn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class zm extends qm{constructor(e,n,r,s,i,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new vo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ou("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class vo extends zm{data(e={}){return super.data(e)}}class Gm{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Hs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new vo(this._firestore,this._userDataWriter,r.key,r,new Hs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Z(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new vo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Hs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new vo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Hs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:eA(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function eA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(t){t=Vt(t,Et);const e=Vt(t.firestore,Dn);return FI(Di(e),t._key).then(n=>Qm(e,t,n))}class cu extends ZI{constructor(e){super(),this.firestore=e}convertBytes(e){return new cs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Et(this.firestore,null,n)}}function jd(t){t=Vt(t,kr);const e=Vt(t.firestore,Dn),n=Di(e),r=new cu(e);return Wm(t._query),UI(n,t._query).then(s=>new Gm(e,r,t,s))}function gl(t,e,n){t=Vt(t,Et);const r=Vt(t.firestore,Dn),s=Km(t.converter,e,n);return ba(r,[Lm(Ta(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,kt.none())])}function tA(t,e,n,...r){t=Vt(t,Et);const s=Vt(t.firestore,Dn),i=Ta(s);let a;return a=typeof(e=Qe(e))=="string"||e instanceof Ni?Um(i,"updateDoc",t._key,e,n,r):Fm(i,"updateDoc",t._key,e),ba(s,[a.toMutation(t._key,kt.exists(!0))])}function qd(t){return ba(Vt(t.firestore,Dn),[new pa(t._key,kt.none())])}function Wd(t,...e){var n,r,s;t=Qe(t);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Ud(e[a])||(i=e[a],a++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Ud(e[a])){const m=e[a];e[a]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[a+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[a+2]=(s=m.complete)===null||s===void 0?void 0:s.bind(m)}let c,h,f;if(t instanceof Et)h=Vt(t.firestore,Dn),f=ca(t._key.path),c={next:m=>{e[a]&&e[a](Qm(h,t,m))},error:e[a+1],complete:e[a+2]};else{const m=Vt(t,kr);h=Vt(m.firestore,Dn),f=m._query;const y=new cu(h);c={next:b=>{e[a]&&e[a](new Gm(h,y,m,b))},error:e[a+1],complete:e[a+2]},Wm(t._query)}return function(y,b,V,N){const P=new Zc(N),O=new Yc(b,P,V);return y.asyncQueue.enqueueAndForget(async()=>Gc(await jo(y),O)),()=>{P.Za(),y.asyncQueue.enqueueAndForget(async()=>Qc(await jo(y),O))}}(Di(h),f,l,c)}function ba(t,e){return function(r,s){const i=new Sn;return r.asyncQueue.enqueueAndForget(async()=>SI(await LI(r),s,i)),i.promise}(Di(t),e)}function Qm(t,e,n){const r=n.docs.get(e._key),s=new cu(t);return new zm(t,s,e._key,r,new Hs(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Ta(e)}set(e,n,r){this._verifyNotCommitted();const s=_l(e,this._firestore),i=Km(s.converter,n,r),a=Lm(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,kt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=_l(e,this._firestore);let a;return a=typeof(n=Qe(n))=="string"||n instanceof Ni?Um(this._dataReader,"WriteBatch.update",i._key,n,r,s):Fm(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(a.toMutation(i._key,kt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=_l(e,this._firestore);return this._mutations=this._mutations.concat(new pa(n._key,kt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new Z(M.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function _l(t,e){if((t=Qe(t)).firestore!==e)throw new Z(M.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function xs(){return new ru("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(t){return Di(t=Vt(t,Dn)),new nA(t,e=>ba(t,e))}(function(e,n=!0){(function(s){ds=s})(hs),ns(new Ir("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new Dn(new iw(r.getProvider("auth-internal")),new cw(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Z(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new di(h.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Yn(nd,"4.7.3",e),Yn(nd,"4.7.3","esm2017")})();var rA="firebase",sA="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yn(rA,sA,"app");function uu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Jm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const iA=Jm,Ym=new Ii("auth","Firebase",Jm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo=new bc("@firebase/auth");function oA(t,...e){Wo.logLevel<=we.WARN&&Wo.warn(`Auth (${hs}): ${t}`,...e)}function Eo(t,...e){Wo.logLevel<=we.ERROR&&Wo.error(`Auth (${hs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(t,...e){throw hu(t,...e)}function an(t,...e){return hu(t,...e)}function Xm(t,e,n){const r=Object.assign(Object.assign({},iA()),{[e]:n});return new Ii("auth","Firebase",r).create(e,{appName:t.name})}function Zn(t){return Xm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ym.create(t,...e)}function ue(t,e,...n){if(!t)throw hu(e,...n)}function An(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Eo(e),new Error(e)}function Nn(t,e){t||An(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function aA(){return Hd()==="http:"||Hd()==="https:"}function Hd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(aA()||Lv()||"connection"in navigator)?navigator.onLine:!0}function cA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Nn(n>e,"Short delay should be less than long delay!"),this.isMobile=Ov()||Fv()}get(){return lA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(t,e){Nn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;An("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;An("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;An("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA=new xi(3e4,6e4);function or(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Mn(t,e,n,r,s={}){return eg(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=Ai(Object.assign({key:t.config.apiKey},a)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return Mv()||(h.referrerPolicy="no-referrer"),Zm.fetch()(tg(t,t.config.apiHost,n,l),h)})}async function eg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},uA),e);try{const s=new fA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw co(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw co(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw co(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw co(t,"user-disabled",a);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Xm(t,f,h);Yt(t,f)}}catch(s){if(s instanceof xn)throw s;Yt(t,"network-request-failed",{message:String(s)})}}async function Ra(t,e,n,r,s={}){const i=await Mn(t,e,n,r,s);return"mfaPendingCredential"in i&&Yt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function tg(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?du(t.config,s):`${t.config.apiScheme}://${s}`}function dA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class fA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(an(this.auth,"network-request-failed")),hA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function co(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=an(t,e,r);return s.customData._tokenResponse=n,s}function Kd(t){return t!==void 0&&t.enterprise!==void 0}class pA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return dA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function mA(t,e){return Mn(t,"GET","/v2/recaptchaConfig",or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gA(t,e){return Mn(t,"POST","/v1/accounts:delete",e)}async function ng(t,e){return Mn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _A(t,e=!1){const n=Qe(t),r=await n.getIdToken(e),s=fu(r);ue(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ri(yl(s.auth_time)),issuedAtTime:ri(yl(s.iat)),expirationTime:ri(yl(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function yl(t){return Number(t)*1e3}function fu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Eo("JWT malformed, contained fewer than 3 sections"),null;try{const s=yp(n);return s?JSON.parse(s):(Eo("Failed to decode base64 JWT payload"),null)}catch(s){return Eo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function zd(t){const e=fu(t);return ue(e,"internal-error"),ue(typeof e.exp<"u","internal-error"),ue(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xn&&yA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function yA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ri(this.lastLoginAt),this.creationTime=ri(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ho(t){var e;const n=t.auth,r=await t.getIdToken(),s=await _i(t,ng(n,{idToken:r}));ue(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?rg(i.providerUserInfo):[],l=wA(t.providerData,a),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?h:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new rc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function EA(t){const e=Qe(t);await Ho(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function wA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function rg(t){return t.map(e=>{var{providerId:n}=e,r=uu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TA(t,e){const n=await eg(t,{},async()=>{const r=Ai({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=tg(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Zm.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function IA(t,e){return Mn(t,"POST","/v2/accounts:revokeToken",or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken<"u","internal-error"),ue(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ue(e.length!==0,"internal-error");const n=zd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ue(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await TA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new Yr;return r&&(ue(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ue(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ue(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yr,this.toJSON())}_performRefresh(){return An("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t,e){ue(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class bn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=uu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new rc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await _i(this,this.stsTokenManager.getToken(this.auth,e));return ue(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _A(this,e)}reload(){return EA(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new bn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ho(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(In(this.auth.app))return Promise.reject(Zn(this.auth));const e=await this.getIdToken();return await _i(this,gA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,a,l,c,h,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(s=n.email)!==null&&s!==void 0?s:void 0,b=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,V=(a=n.photoURL)!==null&&a!==void 0?a:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,P=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,O=(h=n.createdAt)!==null&&h!==void 0?h:void 0,x=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:W,emailVerified:L,isAnonymous:Y,providerData:ne,stsTokenManager:w}=n;ue(W&&w,e,"internal-error");const g=Yr.fromJSON(this.name,w);ue(typeof W=="string",e,"internal-error"),$n(m,e.name),$n(y,e.name),ue(typeof L=="boolean",e,"internal-error"),ue(typeof Y=="boolean",e,"internal-error"),$n(b,e.name),$n(V,e.name),$n(N,e.name),$n(P,e.name),$n(O,e.name),$n(x,e.name);const _=new bn({uid:W,auth:e,email:y,emailVerified:L,displayName:m,isAnonymous:Y,photoURL:V,phoneNumber:b,tenantId:N,stsTokenManager:g,createdAt:O,lastLoginAt:x});return ne&&Array.isArray(ne)&&(_.providerData=ne.map(T=>Object.assign({},T))),P&&(_._redirectEventId=P),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new Yr;s.updateFromServerResponse(n);const i=new bn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ho(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ue(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?rg(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Yr;l.updateFromIdToken(r);const c=new bn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new rc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd=new Map;function Rn(t){Nn(t instanceof Function,"Expected a class definition");let e=Gd.get(t);return e?(Nn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Gd.set(t,e),e)}/**
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
 */class sg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}sg.type="NONE";const Qd=sg;/**
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
 */function wo(t,e,n){return`firebase:${t}:${e}:${n}`}class Xr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=wo(this.userKey,s.apiKey,i),this.fullPersistenceKey=wo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?bn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Xr(Rn(Qd),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Rn(Qd);const a=wo(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(a);if(f){const m=bn._fromJSON(e,f);h!==i&&(l=m),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Xr(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Xr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ig(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ug(e))return"Blackberry";if(hg(e))return"Webos";if(og(e))return"Safari";if((e.includes("chrome/")||ag(e))&&!e.includes("edge/"))return"Chrome";if(cg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ig(t=wt()){return/firefox\//i.test(t)}function og(t=wt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ag(t=wt()){return/crios\//i.test(t)}function lg(t=wt()){return/iemobile/i.test(t)}function cg(t=wt()){return/android/i.test(t)}function ug(t=wt()){return/blackberry/i.test(t)}function hg(t=wt()){return/webos/i.test(t)}function pu(t=wt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function AA(t=wt()){var e;return pu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function bA(){return Uv()&&document.documentMode===10}function dg(t=wt()){return pu(t)||cg(t)||hg(t)||ug(t)||/windows phone/i.test(t)||lg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(t,e=[]){let n;switch(t){case"Browser":n=Jd(wt());break;case"Worker":n=`${Jd(wt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hs}/${r}`}/**
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
 */class RA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function SA(t,e={}){return Mn(t,"GET","/v2/passwordPolicy",or(t,e))}/**
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
 */const PA=6;class CA{constructor(e){var n,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:PA,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yd(this),this.idTokenSubscription=new Yd(this),this.beforeStateQueue=new RA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ym,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Xr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ng(this,{idToken:e}),r=await bn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(In(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ho(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=cA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(In(this.app))return Promise.reject(Zn(this));const n=e?Qe(e):null;return n&&ue(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return In(this.app)?Promise.reject(Zn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return In(this.app)?Promise.reject(Zn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await SA(this),n=new CA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ii("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await IA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rn(e)||this._popupRedirectResolver;ue(n,this,"argument-error"),this.redirectPersistenceManager=await Xr.create(this,[Rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ue(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&oA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Vr(t){return Qe(t)}class Yd{constructor(e){this.auth=e,this.observer=null,this.addObserver=zv(n=>this.observer=n)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function VA(t){Sa=t}function pg(t){return Sa.loadJS(t)}function DA(){return Sa.recaptchaEnterpriseScript}function NA(){return Sa.gapiScript}function OA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const xA="recaptcha-enterprise",MA="NO_RECAPTCHA";class LA{constructor(e){this.type=xA,this.auth=Vr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{mA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new pA(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,a,l){const c=window.grecaptcha;Kd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(MA)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,a)=>{r(this.auth).then(l=>{if(!n&&Kd(window.grecaptcha))s(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=DA();c.length!==0&&(c+=l),pg(c).then(()=>{s(l,i,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function Xd(t,e,n,r=!1){const s=new LA(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function sc(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Xd(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Xd(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FA(t,e){const n=Sc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(No(i,e??{}))return s;Yt(s,"already-initialized")}return n.initialize({options:e})}function UA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function BA(t,e,n){const r=Vr(t);ue(r._canInitEmulator,r,"emulator-config-failed"),ue(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=mg(e),{host:a,port:l}=$A(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),jA()}function mg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $A(t){const e=mg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Zd(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Zd(a)}}}function Zd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function jA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return An("not implemented")}_getIdTokenResponse(e){return An("not implemented")}_linkToIdToken(e,n){return An("not implemented")}_getReauthenticationResolver(e){return An("not implemented")}}async function qA(t,e){return Mn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WA(t,e){return Ra(t,"POST","/v1/accounts:signInWithPassword",or(t,e))}async function HA(t,e){return Mn(t,"POST","/v1/accounts:sendOobCode",or(t,e))}async function KA(t,e){return HA(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zA(t,e){return Ra(t,"POST","/v1/accounts:signInWithEmailLink",or(t,e))}async function GA(t,e){return Ra(t,"POST","/v1/accounts:signInWithEmailLink",or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends mu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new yi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new yi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sc(e,n,"signInWithPassword",WA);case"emailLink":return zA(e,{email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sc(e,r,"signUpPassword",qA);case"emailLink":return GA(e,{idToken:n,email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zr(t,e){return Ra(t,"POST","/v1/accounts:signInWithIdp",or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA="http://localhost";class Sr extends mu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Sr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=uu(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Sr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Zr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Zr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zr(e,n)}buildRequest(){const e={requestUri:QA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ai(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function YA(t){const e=Bs($s(t)).link,n=e?Bs($s(e)).deep_link_id:null,r=Bs($s(t)).deep_link_id;return(r?Bs($s(r)).link:null)||r||n||e||t}class gu{constructor(e){var n,r,s,i,a,l;const c=Bs($s(e)),h=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,m=JA((s=c.mode)!==null&&s!==void 0?s:null);ue(h&&f&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=YA(e);try{return new gu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(){this.providerId=ms.PROVIDER_ID}static credential(e,n){return yi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=gu.parseLink(n);return ue(r,"argument-error"),yi._fromEmailAndCode(e,r.code,r.tenantId)}}ms.PROVIDER_ID="password";ms.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ms.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Mi extends gg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends Mi{constructor(){super("facebook.com")}static credential(e){return Sr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends Mi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Sr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.GOOGLE_SIGN_IN_METHOD="google.com";Hn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Mi{constructor(){super("github.com")}static credential(e){return Sr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.GITHUB_SIGN_IN_METHOD="github.com";Kn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Mi{constructor(){super("twitter.com")}static credential(e,n){return Sr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return zn.credential(n,r)}catch{return null}}}zn.TWITTER_SIGN_IN_METHOD="twitter.com";zn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await bn._fromIdTokenResponse(e,r,s),a=ef(r);return new us({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ef(r);return new us({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ef(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko extends xn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ko.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ko(e,n,r,s)}}function _g(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ko._fromErrorAndOperation(t,i,e,r):i})}async function XA(t,e,n=!1){const r=await _i(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return us._forOperation(t,"link",r)}/**
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
 */async function ZA(t,e,n=!1){const{auth:r}=t;if(In(r.app))return Promise.reject(Zn(r));const s="reauthenticate";try{const i=await _i(t,_g(r,s,e,t),n);ue(i.idToken,r,"internal-error");const a=fu(i.idToken);ue(a,r,"internal-error");const{sub:l}=a;return ue(t.uid===l,r,"user-mismatch"),us._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Yt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yg(t,e,n=!1){if(In(t.app))return Promise.reject(Zn(t));const r="signIn",s=await _g(t,r,e),i=await us._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function eb(t,e){return yg(Vr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tb(t){const e=Vr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function nb(t,e,n){const r=Vr(t);await sc(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",KA)}function rb(t,e,n){return In(t.app)?Promise.reject(Zn(t)):eb(Qe(t),ms.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&tb(t),r})}function sb(t,e,n,r){return Qe(t).onIdTokenChanged(e,n,r)}function ib(t,e,n){return Qe(t).beforeAuthStateChanged(e,n)}function ob(t,e,n,r){return Qe(t).onAuthStateChanged(e,n,r)}function ab(t){return Qe(t).signOut()}const zo="__sak";/**
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
 */class vg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zo,"1"),this.storage.removeItem(zo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb=1e3,cb=10;class Eg extends vg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=dg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);bA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,cb):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},lb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Eg.type="LOCAL";const ub=Eg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg extends vg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}wg.type="SESSION";const Tg=wg;/**
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
 */function hb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Pa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Pa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(n.origin,i)),c=await hb(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class db{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const h=_u("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(m){const y=m;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(y.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(){return window}function fb(t){ln().location.href=t}/**
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
 */function Ig(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function pb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function gb(){return Ig()?self:null}/**
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
 */const Ag="firebaseLocalStorageDb",_b=1,Go="firebaseLocalStorage",bg="fbase_key";class Li{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ca(t,e){return t.transaction([Go],e?"readwrite":"readonly").objectStore(Go)}function yb(){const t=indexedDB.deleteDatabase(Ag);return new Li(t).toPromise()}function ic(){const t=indexedDB.open(Ag,_b);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Go,{keyPath:bg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Go)?e(r):(r.close(),await yb(),e(await ic()))})})}async function tf(t,e,n){const r=Ca(t,!0).put({[bg]:e,value:n});return new Li(r).toPromise()}async function vb(t,e){const n=Ca(t,!1).get(e),r=await new Li(n).toPromise();return r===void 0?null:r.value}function nf(t,e){const n=Ca(t,!0).delete(e);return new Li(n).toPromise()}const Eb=800,wb=3;class Rg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ic(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>wb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ig()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pa._getInstance(gb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await pb(),!this.activeServiceWorker)return;this.sender=new db(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ic();return await tf(e,zo,"1"),await nf(e,zo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>tf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>vb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>nf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ca(s,!1).getAll();return new Li(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Eb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Rg.type="LOCAL";const Tb=Rg;new xi(3e4,6e4);/**
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
 */function Ib(t,e){return e?Rn(e):(ue(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class yu extends mu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Zr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Zr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ab(t){return yg(t.auth,new yu(t),t.bypassAuthState)}function bb(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),ZA(n,new yu(t),t.bypassAuthState)}async function Rb(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),XA(n,new yu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ab;case"linkViaPopup":case"linkViaRedirect":return Rb;case"reauthViaPopup":case"reauthViaRedirect":return bb;default:Yt(this.auth,"internal-error")}}resolve(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb=new xi(2e3,1e4);class Hr extends Sg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Hr.currentPopupAction&&Hr.currentPopupAction.cancel(),Hr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){Nn(this.filter.length===1,"Popup operations only handle one event");const e=_u();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(an(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Sb.get())};e()}}Hr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb="pendingRedirect",To=new Map;class Cb extends Sg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=To.get(this.auth._key());if(!e){try{const r=await kb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}To.set(this.auth._key(),e)}return this.bypassAuthState||To.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kb(t,e){const n=Nb(e),r=Db(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Vb(t,e){To.set(t._key(),e)}function Db(t){return Rn(t._redirectPersistence)}function Nb(t){return wo(Pb,t.config.apiKey,t.name)}async function Ob(t,e,n=!1){if(In(t.app))return Promise.reject(Zn(t));const r=Vr(t),s=Ib(r,e),a=await new Cb(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb=10*60*1e3;class Mb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Lb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Pg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(an(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xb&&this.cachedEventUids.clear(),this.cachedEventUids.has(rf(e))}saveEventToCache(e){this.cachedEventUids.add(rf(e)),this.lastProcessedEventTime=Date.now()}}function rf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Pg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Lb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fb(t,e={}){return Mn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Bb=/^https?/;async function $b(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Fb(t);for(const n of e)try{if(jb(n))return}catch{}Yt(t,"unauthorized-domain")}function jb(t){const e=nc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!Bb.test(n))return!1;if(Ub.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const qb=new xi(3e4,6e4);function sf(){const t=ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Wb(t){return new Promise((e,n)=>{var r,s,i;function a(){sf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sf(),n(an(t,"network-request-failed"))},timeout:qb.get()})}if(!((s=(r=ln().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ln().gapi)===null||i===void 0)&&i.load)a();else{const l=OA("iframefcb");return ln()[l]=()=>{gapi.load?a():n(an(t,"network-request-failed"))},pg(`${NA()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Io=null,e})}let Io=null;function Hb(t){return Io=Io||Wb(t),Io}/**
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
 */const Kb=new xi(5e3,15e3),zb="__/auth/iframe",Gb="emulator/auth/iframe",Qb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Jb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Yb(t){const e=t.config;ue(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?du(e,Gb):`https://${t.config.authDomain}/${zb}`,r={apiKey:e.apiKey,appName:t.name,v:hs},s=Jb.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ai(r).slice(1)}`}async function Xb(t){const e=await Hb(t),n=ln().gapi;return ue(n,t,"internal-error"),e.open({where:document.body,url:Yb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Qb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=an(t,"network-request-failed"),l=ln().setTimeout(()=>{i(a)},Kb.get());function c(){ln().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
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
 */const Zb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},e0=500,t0=600,n0="_blank",r0="http://localhost";class of{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function s0(t,e,n,r=e0,s=t0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Zb),{width:r.toString(),height:s.toString(),top:i,left:a}),h=wt().toLowerCase();n&&(l=ag(h)?n0:n),ig(h)&&(e=e||r0,c.scrollbars="yes");const f=Object.entries(c).reduce((y,[b,V])=>`${y}${b}=${V},`,"");if(AA(h)&&l!=="_self")return i0(e||"",l),new of(null);const m=window.open(e||"",l,f);ue(m,t,"popup-blocked");try{m.focus()}catch{}return new of(m)}function i0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const o0="__/auth/handler",a0="emulator/auth/handler",l0=encodeURIComponent("fac");async function af(t,e,n,r,s,i){ue(t.config.authDomain,t,"auth-domain-config-required"),ue(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:hs,eventId:s};if(e instanceof gg){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",Kv(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))a[f]=m}if(e instanceof Mi){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(a.scopes=f.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),h=c?`#${l0}=${encodeURIComponent(c)}`:"";return`${c0(t)}?${Ai(l).slice(1)}${h}`}function c0({config:t}){return t.emulator?du(t,a0):`https://${t.authDomain}/${o0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl="webStorageSupport";class u0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tg,this._completeRedirectFn=Ob,this._overrideRedirectResult=Vb}async _openPopup(e,n,r,s){var i;Nn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await af(e,n,r,nc(),s);return s0(e,a,_u())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await af(e,n,r,nc(),s);return fb(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Nn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Xb(e),r=new Mb(e);return n.register("authEvent",s=>(ue(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(vl,{type:vl},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[vl];a!==void 0&&n(!!a),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$b(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return dg()||og()||pu()}}const h0=u0;var lf="@firebase/auth",cf="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function p0(t){ns(new Ir("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;ue(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fg(t)},h=new kA(r,s,i,c);return UA(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ns(new Ir("auth-internal",e=>{const n=Vr(e.getProvider("auth").getImmediate());return(r=>new d0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yn(lf,cf,f0(t)),Yn(lf,cf,"esm2017")}/**
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
 */const m0=5*60,g0=wp("authIdTokenMaxAge")||m0;let uf=null;const _0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>g0)return;const s=n==null?void 0:n.token;uf!==s&&(uf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function y0(t=bp()){const e=Sc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=FA(t,{popupRedirectResolver:h0,persistence:[Tb,ub,Tg]}),r=wp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=_0(i.toString());ib(n,a,()=>a(n.currentUser)),sb(n,l=>a(l))}}const s=vp("auth");return s&&BA(n,`http://${s}`),n}function v0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}VA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=an("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",v0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});p0("Browser");const E0={apiKey:"AIzaSyBTn3Z_B1MYRJ-hOsL0I94QWBq2xh3EdFs",authDomain:"henryshus.firebaseapp.com",projectId:"henryshus",storageBucket:"henryshus.firebasestorage.app",messagingSenderId:"877597619520",appId:"1:877597619520:web:61e33ff74b9f03aa45f6a5",measurementId:"G-ESKWZ556XM"},Cg=Ap(E0),ze=jI(Cg),uo=y0(Cg);function kg(){const t=ve([]),e=ve([]),n=ve(!1);let r=null,s=null;async function i(){const P=We.now(),O=new We(P.seconds-86400,P.nanoseconds);for(const x of e.value)if(x.borrowedAt&&x.borrowedAt.toMillis()<=O.toMillis()){const W=lo(ze),L=Ot(ze,"workstations",x.workstation);W.update(Ot(ze,"borrowRecords",x.id),{returnedAt:xs()}),W.update(L,{status:"available",borrower:null,borrowedAt:null,currentBorrowRecord:null}),await W.commit()}}function a(){r||(r=Wd(Os(ze,"workstations"),P=>{const O=[];P.forEach(x=>{O.push({id:x.id,...x.data()})}),O.sort((x,W)=>x.name.localeCompare(W.name,"nb")),t.value=O},P=>console.error("Workstations error:",P)))}function l(){if(s)return;const P=YI(Os(ze,"borrowRecords"),XI("returnedAt","==",null));s=Wd(P,O=>{const x=[];O.forEach(W=>{x.push({id:W.id,...W.data()})}),x.sort((W,L)=>{var Y,ne;return(((Y=L.borrowedAt)==null?void 0:Y.toMillis())??0)-(((ne=W.borrowedAt)==null?void 0:ne.toMillis())??0)}),e.value=x,i()},O=>console.error("Active borrows error:",O))}ra(()=>{r&&r(),s&&s()});async function c(P,O,x,W){const L=lo(ze),Y=Ot(Os(ze,"borrowRecords")),ne=Ot(ze,"workstations",P);L.update(ne,{status:"borrowed",borrower:O,borrowedAt:xs(),currentBorrowRecord:Y.id});const w={workstation:P,borrower:O,phone:x,borrowedAt:xs(),returnedAt:null,controllers:W??null,anonymizedAt:null};L.set(Y,w),await L.commit()}async function h(P){const O=Ot(ze,"workstations",P),x=await ml(O);if(!x.exists())return;const W=x.data(),L=W.currentBorrowRecord,Y=W.borrower,ne=lo(ze);if(ne.update(O,{status:"available",borrower:null,borrowedAt:null,currentBorrowRecord:null}),L){const w={returnedAt:xs()};Y&&(w.borrower=Y),ne.update(Ot(ze,"borrowRecords",L),w)}await ne.commit()}async function f(){const P=await jd(Os(ze,"borrowRecords")),O=[];for(const x of P.docs){const W={id:x.id,...x.data()};W.returnedAt&&O.push(W)}return O.sort((x,W)=>{var L,Y;return(((L=W.borrowedAt)==null?void 0:L.toMillis())??0)-(((Y=x.borrowedAt)==null?void 0:Y.toMillis())??0)}),O}async function m(){const P=We.fromMillis(Date.now()-2592e6),O=await jd(Os(ze,"borrowRecords")),x=lo(ze);let W=0;for(const L of O.docs){const Y=L.data();Y.returnedAt&&Y.returnedAt.toMillis()<=P.toMillis()&&!Y.anonymizedAt&&(x.update(L.ref,{borrower:"Anonymisert",phone:"",anonymizedAt:xs()}),W++)}W>0&&await x.commit()}async function y(){const P=[{name:"PlayStation",type:"playstation",keyboard:"Kontroller x2",mouse:"",accessories:""},{name:"PlayStation 2",type:"playstation",keyboard:"Kontroller x2",mouse:"",accessories:""},{name:"PC 1",type:"pc",keyboard:"Keyboard 1",mouse:"Mouse 1",accessories:"Headset"},{name:"PC 2",type:"pc",keyboard:"Keyboard 2",mouse:"Mouse 2",accessories:""},{name:"PC 3",type:"pc",keyboard:"Keyboard 3",mouse:"Mouse 3",accessories:""}];for(const O of P){const x=Ot(ze,"workstations",O.name);(await ml(x)).exists()||await gl(x,{name:O.name,type:O.type,keyboard:O.keyboard,mouse:O.mouse,accessories:O.accessories,status:"available",borrower:null,borrowedAt:null,currentBorrowRecord:null})}}async function b(P,O,x,W,L){await gl(Ot(ze,"workstations",P),{name:P,type:O,keyboard:x||"",mouse:W||"",accessories:L||"",status:"available",borrower:null,borrowedAt:null,currentBorrowRecord:null})}async function V(P){await qd(Ot(ze,"workstations",P))}async function N(P,O){var W;const x=(W=O.newName)==null?void 0:W.trim();if(x&&x!==P){const L=await ml(Ot(ze,"workstations",P));if(!L.exists())return;const Y=L.data();await gl(Ot(ze,"workstations",x),{...Y,name:x,keyboard:O.keyboard??Y.keyboard,mouse:O.mouse??Y.mouse,accessories:O.accessories??Y.accessories,type:O.type??Y.type}),await qd(Ot(ze,"workstations",P))}else{const L={};O.keyboard!==void 0&&(L.keyboard=O.keyboard),O.mouse!==void 0&&(L.mouse=O.mouse),O.accessories!==void 0&&(L.accessories=O.accessories),O.type!==void 0&&(L.type=O.type),await tA(Ot(ze,"workstations",P),L)}}return{workstations:t,activeBorrows:e,loading:n,subscribeWorkstations:a,subscribeActiveBorrows:l,borrowWorkstation:c,returnWorkstation:h,getHistory:f,anonymizeOldRecords:m,seedDefaultWorkstations:y,addWorkstation:b,removeWorkstation:V,updateWorkstation:N}}const El=ve(null);let Ms=null;function vu(){Ms||(Ms=ob(uo,r=>{El.value=r})),ra(()=>{Ms&&(Ms(),Ms=null)});async function t(r,s){await rb(uo,r,s)}async function e(){await ab(uo)}function n(){return El.value!==null}return{currentUser:El,login:t,logout:e,isAdmin:n,sendPasswordReset:r=>nb(uo,r)}}const w0={class:"student-layout"},T0={key:0,class:"init-load"},I0={key:1,class:"ws-scroll"},A0={key:0,class:"ps-row"},b0=["onClick","onKeydown"],R0={class:"ws-bar-inner"},S0={class:"ws-bar-name"},P0={key:0,class:"ws-bar-detail"},C0={class:"ws-row"},k0=["onClick","onKeydown"],V0={class:"ws-block-inner"},D0={class:"ws-block-name"},N0={key:0,class:"ws-block-detail"},O0={class:"modal"},x0={class:"form-group"},M0={class:"form-group"},L0={key:0,class:"form-group"},F0={class:"ctrl-select"},U0={class:"modal-actions"},B0=["disabled"],$0={class:"modal"},j0={class:"form-group"},q0={class:"form-group"},W0={class:"modal-actions"},H0={key:0,class:"error-message"},K0={class:"modal modal-reset"},z0={class:"form-group"},G0={class:"modal-actions"},Q0=["disabled"],J0={class:"modal-actions"},Y0=wi({__name:"StudentView",setup(t){const e=Ft("currentView"),n=Ft("showToast"),r=Ft("loading"),{workstations:s,subscribeWorkstations:i,borrowWorkstation:a}=kg(),{login:l,sendPasswordReset:c}=vu(),h=ve(!1),f=ve(""),m=ve(!1),y=ve(!1),b=ve(null),V=ve(""),N=ve(""),P=ve(0),O=ve(null),x=ve(!1),W=ve(""),L=ve(""),Y=ve(""),ne=ve(null);async function w(){Y.value="",r.value=!0;try{await l(W.value,L.value),x.value=!1,W.value="",L.value="",e.value="admin"}catch(_e){const F=_e.code;F==="auth/user-not-found"?Y.value="Bruker ikke funnet":F==="auth/wrong-password"?Y.value="Feil passord":F==="auth/invalid-email"?Y.value="Ugyldig e-post":F==="auth/too-many-requests"?Y.value="For mange forsøk. Prøv igjen senere.":Y.value="Feil e-post eller passord"}finally{r.value=!1}}async function g(){f.value.trim()&&(m.value=!0,await c(f.value.trim()).catch(()=>{}))}const _=Wr(()=>s.value.filter(_e=>_e.type==="playstation")),T=Wr(()=>s.value.filter(_e=>_e.type==="pc")),I=Wr(()=>s.value.find(_e=>_e.id===b.value)),R=Wr(()=>{var _e;return((_e=I.value)==null?void 0:_e.type)==="playstation"});function E(_e){b.value=_e,V.value="",N.value="",P.value=0,y.value=!0,Rl(()=>{var F;return(F=O.value)==null?void 0:F.focus()})}function $e(){y.value=!1,b.value=null,V.value="",N.value="",P.value=0}async function Dt(){const _e=V.value.trim(),F=N.value.trim();if(!(!_e||!b.value)&&F&&!(R.value&&!P.value)){r.value=!0;try{await a(b.value,_e,F,R.value?P.value:void 0),y.value=!1,n(`Du låner ${b.value}`,"success"),b.value=null,V.value="",N.value=""}catch(H){console.error(H),n("Kunne ikke fullføre lånet","error")}finally{r.value=!1}}}return wc(()=>i()),(_e,F)=>(se(),le("div",w0,[k("button",{class:"admin-corner",onClick:F[0]||(F[0]=H=>{x.value=!0,Rl(()=>{var Me;return(Me=ne.value)==null?void 0:Me.focus()})})},"Admin"),qr(s).length===0?(se(),le("div",T0,[...F[16]||(F[16]=[k("div",{class:"loader-ring"},null,-1),k("p",null,"Laster...",-1)])])):(se(),le("div",I0,[_.value.length?(se(),le("div",A0,[(se(!0),le(qe,null,_r(_.value,H=>(se(),le("div",{key:H.id,class:rt(["ws-bar",H.status]),tabindex:"0",role:"button",onClick:Me=>H.status==="available"&&E(H.id),onKeydown:il(Me=>H.status==="available"&&E(H.id),["enter"])},[k("div",R0,[k("div",S0,Ce(H.name),1),H.keyboard?(se(),le("div",P0,Ce(H.keyboard),1)):Fe("",!0),k("div",{class:rt(["ws-block-badge",H.status])},Ce(H.status==="available"?"Trykk for å låne":"Opptatt"),3)])],42,b0))),128))])):Fe("",!0),k("div",C0,[(se(!0),le(qe,null,_r(T.value,H=>(se(),le("div",{key:H.id,class:rt(["ws-block",H.status]),tabindex:"0",role:"button",onClick:Me=>H.status==="available"&&E(H.id),onKeydown:il(Me=>H.status==="available"&&E(H.id),["enter"])},[k("div",V0,[k("div",D0,Ce(H.name),1),H.keyboard||H.mouse||H.accessories?(se(),le("div",N0,Ce([H.keyboard,H.mouse,H.accessories].filter(Boolean).join(" · ")),1)):Fe("",!0),k("div",{class:rt(["ws-block-badge",H.status])},Ce(H.status==="available"?"Trykk for å låne":"Opptatt"),3)])],42,k0))),128))])])),(se(),wr(Ja,{to:"body"},[y.value&&I.value?(se(),le("div",{key:0,class:"modal-overlay",onClick:gr($e,["self"])},[k("div",O0,[k("h3",null,Ce(I.value.name),1),F[20]||(F[20]=k("p",{class:"modal-sub"},"Skriv navnet ditt for å låne",-1)),k("div",x0,[F[17]||(F[17]=k("label",{for:"name-input"},"Ditt navn",-1)),et(k("input",{id:"name-input",ref_key:"nameInput",ref:O,"onUpdate:modelValue":F[1]||(F[1]=H=>V.value=H),class:"input",placeholder:"Skriv her...",autocomplete:"name",onKeydown:il(Dt,["enter"])},null,544),[[bt,V.value]])]),k("div",M0,[F[18]||(F[18]=k("label",{for:"phone-input"},"Telefon",-1)),et(k("input",{id:"phone-input","onUpdate:modelValue":F[2]||(F[2]=H=>N.value=H),class:"input",type:"tel",placeholder:"12345678",autocomplete:"tel",required:""},null,512),[[bt,N.value]])]),R.value?(se(),le("div",L0,[F[19]||(F[19]=k("label",{for:"ctrl-input"},"Antall kontrollere",-1)),k("div",F0,[k("button",{class:rt(["ctrl-btn",{active:P.value===1}]),onClick:F[3]||(F[3]=H=>P.value=1)},"1",2),k("button",{class:rt(["ctrl-btn",{active:P.value===2}]),onClick:F[4]||(F[4]=H=>P.value=2)},"2",2),k("button",{class:rt(["ctrl-btn",{active:P.value===3}]),onClick:F[5]||(F[5]=H=>P.value=3)},"3",2),k("button",{class:rt(["ctrl-btn",{active:P.value===4}]),onClick:F[6]||(F[6]=H=>P.value=4)},"4",2)])])):Fe("",!0),k("div",U0,[k("button",{class:"btn btn-primary btn-full",disabled:!V.value.trim()||!N.value.trim()||R.value&&!P.value,onClick:Dt}," Bekreft lån ",8,B0),k("button",{class:"btn btn-secondary btn-full",onClick:$e},"Avbryt")])])])):Fe("",!0)])),(se(),wr(Ja,{to:"body"},[x.value?(se(),le("div",{key:0,class:"modal-overlay",onClick:F[11]||(F[11]=gr(H=>x.value=!1,["self"]))},[k("div",$0,[F[24]||(F[24]=k("h3",null,"Admin",-1)),F[25]||(F[25]=k("p",{class:"modal-sub"},"Logg inn for å administrere",-1)),k("form",{onSubmit:gr(w,["prevent"])},[k("div",j0,[F[21]||(F[21]=k("label",{for:"login-email"},"E-post",-1)),et(k("input",{id:"login-email",ref_key:"emailInput",ref:ne,"onUpdate:modelValue":F[7]||(F[7]=H=>W.value=H),class:"input",type:"email",placeholder:"admin@eksempel.no",autocomplete:"email",required:""},null,512),[[bt,W.value]])]),k("div",q0,[F[22]||(F[22]=k("label",{for:"login-password"},"Passord",-1)),et(k("input",{id:"login-password","onUpdate:modelValue":F[8]||(F[8]=H=>L.value=H),class:"input",type:"password",placeholder:"Passord",autocomplete:"current-password",required:""},null,512),[[bt,L.value]])]),k("button",{type:"button",class:"btn-text",style:{"margin-top":"4px"},onClick:F[9]||(F[9]=H=>h.value=!0)},"Glemt passordet?"),k("div",W0,[F[23]||(F[23]=k("button",{type:"submit",class:"btn btn-primary btn-full"},"Logg inn",-1)),k("button",{type:"button",class:"btn btn-secondary btn-full",onClick:F[10]||(F[10]=H=>x.value=!1)},"Avbryt")]),Y.value?(se(),le("p",H0,Ce(Y.value),1)):Fe("",!0)],32)])])):Fe("",!0)])),(se(),wr(Ja,{to:"body"},[h.value?(se(),le("div",{key:0,class:"modal-overlay",onClick:F[15]||(F[15]=gr(H=>h.value=!1,["self"]))},[k("div",K0,[m.value?(se(),le(qe,{key:1},[F[28]||(F[28]=k("h3",null,"Tilbakestill passord",-1)),F[29]||(F[29]=k("p",{class:"modal-sub"},"Hvis e-posten du skrev inn finnes i systemet vårt, vil du motta en tilbakestillingslenke.",-1)),k("div",J0,[k("button",{type:"button",class:"btn btn-primary btn-full",onClick:F[14]||(F[14]=H=>h.value=!1)},"OK")])],64)):(se(),le(qe,{key:0},[F[27]||(F[27]=k("h3",null,"Tilbakestill passord",-1)),k("form",{onSubmit:gr(g,["prevent"])},[k("div",z0,[F[26]||(F[26]=k("label",{for:"reset-email"},"E-post",-1)),et(k("input",{id:"reset-email","onUpdate:modelValue":F[12]||(F[12]=H=>f.value=H),class:"input",type:"email",placeholder:"admin@eksempel.no",autocomplete:"email",required:""},null,512),[[bt,f.value]])]),k("div",G0,[k("button",{type:"submit",class:"btn btn-primary btn-full",disabled:!f.value.trim()},"Send",8,Q0),k("button",{type:"button",class:"btn btn-secondary btn-full",onClick:F[13]||(F[13]=H=>h.value=!1)},"Lukk")])],32)],64))])])):Fe("",!0)]))]))}}),Eu=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},X0=Eu(Y0,[["__scopeId","data-v-d4ac19ac"]]),Z0={class:"view active"},eR={class:"header"},tR={class:"header-top"},nR={class:"content"},rR={class:"card login-card"},sR={class:"form-group"},iR={class:"form-group"},oR={key:0,class:"error-message"},aR=wi({__name:"LoginView",setup(t){const e=Ft("currentView");Ft("showToast");const n=Ft("loading"),{login:r}=vu(),s=ve(""),i=ve(""),a=ve("");async function l(){a.value="",n.value=!0;try{await r(s.value,i.value),e.value="admin"}catch(c){const h=c.code;h==="auth/user-not-found"?a.value="Bruker ikke funnet":h==="auth/wrong-password"?a.value="Feil passord":h==="auth/invalid-email"?a.value="Ugyldig e-post":h==="auth/too-many-requests"?a.value="For mange forsøk. Prøv igjen senere.":a.value="Feil e-post eller passord"}finally{n.value=!1}}return(c,h)=>(se(),le("div",Z0,[k("header",eR,[k("div",tR,[k("button",{class:"btn-text back-btn",onClick:h[0]||(h[0]=f=>e.value="student")}," ← Tilbake "),h[3]||(h[3]=k("h1",{class:"header-title"},"Admin",-1))])]),k("main",nR,[k("section",rR,[k("form",{onSubmit:gr(l,["prevent"])},[k("div",sR,[h[4]||(h[4]=k("label",{for:"login-email"},"E-post",-1)),et(k("input",{id:"login-email","onUpdate:modelValue":h[1]||(h[1]=f=>s.value=f),class:"input",type:"email",placeholder:"admin@eksempel.no",autocomplete:"email",required:""},null,512),[[bt,s.value]])]),k("div",iR,[h[5]||(h[5]=k("label",{for:"login-password"},"Passord",-1)),et(k("input",{id:"login-password","onUpdate:modelValue":h[2]||(h[2]=f=>i.value=f),class:"input",type:"password",placeholder:"Passord",autocomplete:"current-password",required:""},null,512),[[bt,i.value]])]),h[6]||(h[6]=k("button",{type:"submit",class:"btn btn-primary btn-full"},"Logg inn",-1)),a.value?(se(),le("p",oR,Ce(a.value),1)):Fe("",!0)],32)])])]))}}),lR=["innerHTML"],cR=wi({__name:"SfIcon",props:{name:{},size:{}},setup(t){const e={gamecontroller:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
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
</svg>`};return(n,r)=>(se(),le("span",{class:"sf-icon",style:Zo({width:(t.size??20)+"px",height:(t.size??20)+"px"}),innerHTML:e[t.name]},null,12,lR))}}),yn=Eu(cR,[["__scopeId","data-v-8bfe09d2"]]),uR={class:"admin-split"},hR={class:"sidebar"},dR={class:"sidebar-nav"},fR=["onClick"],pR={class:"sidebar-footer"},mR={class:"sidebar-email"},gR={class:"admin-content"},_R={key:0,class:"empty-state"},yR={key:1,class:"card-list"},vR={class:"card-body"},ER={class:"card-title"},wR={class:"card-meta"},TR={key:0},IR={class:"card-meta"},AR=["onClick"],bR={key:0,class:"empty-state"},RR={key:1,class:"card-list"},SR={class:"card-body"},PR={class:"card-title"},CR={class:"card-meta"},kR={key:0},VR={class:"card-meta"},DR={key:1},NR={class:"card-list"},OR={key:0,class:"edit-inline"},xR={class:"form-group"},MR={class:"type-picker",style:{"margin-bottom":"8px"}},LR=["placeholder"],FR={class:"card-body"},UR={class:"card-title"},BR={class:"card-meta"},$R=["onClick"],jR=["onClick"],qR={key:0,class:"empty-state"},WR={class:"form-group"},HR={class:"form-group"},KR={class:"type-picker"},zR={class:"form-group"},GR={for:"new-keyboard"},QR=["placeholder"],JR={key:0,class:"form-group"},YR={key:1,class:"form-group"},XR=wi({__name:"AdminView",setup(t){const e=Ft("currentView"),n=Ft("showToast"),r=Ft("loading"),{currentUser:s,logout:i}=vu(),{workstations:a,activeBorrows:l,subscribeWorkstations:c,subscribeActiveBorrows:h,returnWorkstation:f,getHistory:m,anonymizeOldRecords:y,seedDefaultWorkstations:b,addWorkstation:V,removeWorkstation:N,updateWorkstation:P}=kg(),O=ve("borrows"),x=[{key:"borrows",label:"Utlån",icon:"list"},{key:"history",label:"Historikk",icon:"clock"},{key:"manage",label:"Enheter",icon:"gear"}],W=Wr(()=>{var de;return((de=s.value)==null?void 0:de.email)??""}),L=ve([]),Y=ve(""),ne=ve("pc"),w=ve(""),g=ve(""),_=ve("");async function T(){await i(),e.value="student"}async function I(de){if(confirm(`Returner ${de}?`)){r.value=!0;try{await f(de),n(`${de} er returnert`,"success")}catch(Q){console.error(Q),n("Kunne ikke returnere","error")}finally{r.value=!1}}}async function R(){r.value=!0;try{await y(),L.value=await m()}catch(de){console.error(de),n("Kunne ikke laste historikk","error")}finally{r.value=!1}}async function E(){if(confirm("Sett inn standardenheter?")){r.value=!0;try{await b(),n("Standardenheter er lagt til","success")}catch(de){console.error(de),n("Kunne ikke sette inn enheter","error")}finally{r.value=!1}}}async function $e(){if(Y.value.trim()){r.value=!0;try{await V(Y.value.trim(),ne.value,w.value.trim(),g.value.trim(),_.value.trim()),n(`${Y.value} er lagt til`,"success"),Y.value="",w.value="",g.value="",_.value=""}catch(de){console.error(de),n("Kunne ikke legge til enheten","error")}finally{r.value=!1}}}async function Dt(de){if(confirm(`Fjern ${de}?`)){r.value=!0;try{await N(de),n(`${de} er fjernet`,"success")}catch(Q){console.error(Q),n("Kunne ikke fjerne enheten","error")}finally{r.value=!1}}}const _e=ve(null),F=ve(""),H=ve("pc"),Me=ve(""),Ut=ve(""),Pt=ve("");function He(de){_e.value=de.id,F.value=de.name,H.value=de.type,Me.value=de.keyboard||"",Ut.value=de.mouse||"",Pt.value=de.accessories||""}function Ke(){_e.value=null}async function gs(){if(_e.value){r.value=!0;try{await P(_e.value,{newName:F.value.trim(),type:H.value,keyboard:Me.value.trim(),mouse:Ut.value.trim(),accessories:Pt.value.trim()}),n(`${_e.value} er oppdatert`,"success"),_e.value=null}catch(de){console.error(de),n("Kunne ikke oppdatere enheten","error")}finally{r.value=!1}}}function fn(de){O.value=de,de==="history"&&(L.value=[],R())}function pn(de){if(!de)return"—";const Q=de.toDate?de.toDate():new Date(de);return`${String(Q.getDate()).padStart(2,"0")}.${String(Q.getMonth()+1).padStart(2,"0")} ${String(Q.getHours()).padStart(2,"0")}:${String(Q.getMinutes()).padStart(2,"0")}`}function Bt(de){if(!de)return"—";const Q=de.toDate?de.toDate():new Date(de);return`${String(Q.getDate()).padStart(2,"0")}.${String(Q.getMonth()+1).padStart(2,"0")}.${Q.getFullYear()} ${String(Q.getHours()).padStart(2,"0")}:${String(Q.getMinutes()).padStart(2,"0")}`}return wc(()=>{c(),h()}),(de,Q)=>(se(),le("div",uR,[k("aside",hR,[k("div",{class:"sidebar-top"},[Q[12]||(Q[12]=k("div",{class:"sidebar-title"},"Admin",-1)),k("button",{class:"sidebar-logout",onClick:T}," Logg ut ")]),k("nav",dR,[(se(),le(qe,null,_r(x,te=>k("button",{key:te.key,class:rt(["sidebar-item",{active:O.value===te.key}]),onClick:Ze=>fn(te.key)},[tt(yn,{name:te.icon,size:20},null,8,["name"]),k("span",null,Ce(te.label),1)],10,fR)),64))]),k("div",pR,[k("div",mR,Ce(W.value),1)])]),k("main",gR,[et(k("section",null,[Q[13]||(Q[13]=k("h2",{class:"section-title"},"Utlån",-1)),qr(l).length===0?(se(),le("div",_R,"Ingen utlån")):(se(),le("div",yR,[(se(!0),le(qe,null,_r(qr(l),te=>(se(),le("div",{key:te.id,class:"card-row"},[k("div",vR,[k("div",ER,Ce(te.workstation),1),k("div",wR,[xt(Ce(te.borrower),1),te.phone?(se(),le("span",TR," · "+Ce(te.phone),1)):Fe("",!0)]),k("div",IR,[te.controllers?(se(),le(qe,{key:0},[tt(yn,{name:"gamecontroller",size:12}),xt(" "+Ce(te.controllers)+" kontrollere · ",1)],64)):Fe("",!0),xt(" "+Ce(pn(te.borrowedAt)),1)])]),k("button",{class:"btn-return",onClick:Ze=>I(te.workstation)},"Returner",8,AR)]))),128))]))],512),[[tl,O.value==="borrows"]]),et(k("section",null,[Q[14]||(Q[14]=k("h2",{class:"section-title"},"Historikk",-1)),L.value.length===0?(se(),le("div",bR,"Ingen historikk")):(se(),le("div",RR,[(se(!0),le(qe,null,_r(L.value,te=>(se(),le("div",{key:te.id,class:"card-row history-row"},[k("div",SR,[k("div",PR,Ce(te.workstation),1),k("div",CR,[xt(Ce(te.borrower),1),te.phone?(se(),le("span",kR," · "+Ce(te.phone),1)):Fe("",!0)]),k("div",VR,[te.controllers?(se(),le(qe,{key:0},[tt(yn,{name:"gamecontroller",size:12}),xt(" "+Ce(te.controllers)+" kontrollere · ",1)],64)):Fe("",!0),xt(" Lånt "+Ce(Bt(te.borrowedAt))+" ",1),te.returnedAt?(se(),le("span",DR," | retur "+Ce(Bt(te.returnedAt)),1)):Fe("",!0)])]),k("span",{class:rt(["card-status",te.returnedAt?"returned":"active"])},Ce(te.returnedAt?"Returnert":"Aktiv"),3)]))),128))]))],512),[[tl,O.value==="history"]]),et(k("section",null,[Q[27]||(Q[27]=k("h2",{class:"section-title"},"Enheter",-1)),k("div",NR,[(se(!0),le(qe,null,_r(qr(a),te=>(se(),le("div",{key:te.id,class:"card-row manage-row"},[_e.value===te.id?(se(),le("div",OR,[k("div",xR,[Q[15]||(Q[15]=k("label",null,"Navn",-1)),et(k("input",{"onUpdate:modelValue":Q[0]||(Q[0]=Ze=>F.value=Ze),class:"input",placeholder:"Navn"},null,512),[[bt,F.value]])]),k("div",MR,[k("button",{type:"button",class:rt(["type-btn",{active:H.value==="pc"}]),onClick:Q[1]||(Q[1]=Ze=>H.value="pc")},[tt(yn,{name:"desktopcomputer",size:16}),Q[16]||(Q[16]=xt(" PC ",-1))],2),k("button",{type:"button",class:rt(["type-btn",{active:H.value==="playstation"}]),onClick:Q[2]||(Q[2]=Ze=>H.value="playstation")},[tt(yn,{name:"gamecontroller",size:16}),Q[17]||(Q[17]=xt(" PS ",-1))],2)]),et(k("input",{"onUpdate:modelValue":Q[3]||(Q[3]=Ze=>Me.value=Ze),class:"input",placeholder:H.value==="playstation"?"Tilbehør":"Tastatur",style:{"margin-bottom":"6px"}},null,8,LR),[[bt,Me.value]]),H.value==="pc"?et((se(),le("input",{key:0,"onUpdate:modelValue":Q[4]||(Q[4]=Ze=>Ut.value=Ze),class:"input",placeholder:"Mus",style:{"margin-bottom":"6px"}},null,512)),[[bt,Ut.value]]):Fe("",!0),H.value==="pc"?et((se(),le("input",{key:1,"onUpdate:modelValue":Q[5]||(Q[5]=Ze=>Pt.value=Ze),class:"input",placeholder:"Annet tilbehør",style:{"margin-bottom":"6px"}},null,512)),[[bt,Pt.value]]):Fe("",!0),k("div",{class:"edit-actions"},[k("button",{class:"btn-return",onClick:gs},"Lagre"),k("button",{class:"btn-remove",onClick:Ke},"Avbryt")])])):(se(),le(qe,{key:1},[k("div",FR,[k("div",UR,[tt(yn,{name:te.type==="playstation"?"gamecontroller":"desktopcomputer",size:16},null,8,["name"]),xt(" "+Ce(te.name),1)]),k("div",BR,Ce(te.status==="available"?"Ledig":"Utlånt"),1)]),te.status==="available"?(se(),le("button",{key:0,class:"btn-edit",onClick:Ze=>He(te)},"Rediger",8,$R)):Fe("",!0),te.status==="available"?(se(),le("button",{key:1,class:"btn-remove",onClick:Ze=>Dt(te.name)},"Fjern",8,jR)):Fe("",!0)],64))]))),128)),qr(a).length===0?(se(),le("div",qR,"Ingen enheter")):Fe("",!0)]),k("button",{class:"btn-seed",onClick:E},[tt(yn,{name:"tray.and.arrow.down",size:16}),Q[18]||(Q[18]=xt(" Sett inn standardenheter ",-1))]),k("form",{class:"add-form",onSubmit:gr($e,["prevent"])},[Q[25]||(Q[25]=k("h3",null,"Ny enhet",-1)),k("div",WR,[Q[19]||(Q[19]=k("label",{for:"new-name"},"Navn",-1)),et(k("input",{id:"new-name","onUpdate:modelValue":Q[6]||(Q[6]=te=>Y.value=te),class:"input",placeholder:"F.eks. PC 4",required:""},null,512),[[bt,Y.value]])]),k("div",HR,[Q[22]||(Q[22]=k("label",null,"Type",-1)),k("div",KR,[k("button",{type:"button",class:rt(["type-btn",{active:ne.value==="pc"}]),onClick:Q[7]||(Q[7]=te=>ne.value="pc")},[tt(yn,{name:"desktopcomputer",size:18}),Q[20]||(Q[20]=xt(" PC ",-1))],2),k("button",{type:"button",class:rt(["type-btn",{active:ne.value==="playstation"}]),onClick:Q[8]||(Q[8]=te=>ne.value="playstation")},[tt(yn,{name:"gamecontroller",size:18}),Q[21]||(Q[21]=xt(" PlayStation ",-1))],2)])]),k("div",zR,[k("label",GR,Ce(ne.value==="playstation"?"Tilbehør":"Tastatur"),1),et(k("input",{id:"new-keyboard","onUpdate:modelValue":Q[9]||(Q[9]=te=>w.value=te),class:"input",placeholder:ne.value==="playstation"?"F.eks. Kontroller x2, ladestasjon":"F.eks. Tastatur 4"},null,8,QR),[[bt,w.value]])]),ne.value==="pc"?(se(),le("div",JR,[Q[23]||(Q[23]=k("label",{for:"new-mouse"},"Mus",-1)),et(k("input",{id:"new-mouse","onUpdate:modelValue":Q[10]||(Q[10]=te=>g.value=te),class:"input",placeholder:"F.eks. Mus 4"},null,512),[[bt,g.value]])])):Fe("",!0),ne.value==="pc"?(se(),le("div",YR,[Q[24]||(Q[24]=k("label",{for:"new-accessories"},"Annet tilbehør",-1)),et(k("input",{id:"new-accessories","onUpdate:modelValue":Q[11]||(Q[11]=te=>_.value=te),class:"input",placeholder:"F.eks. Headset"},null,512),[[bt,_.value]])])):Fe("",!0),Q[26]||(Q[26]=k("button",{type:"submit",class:"btn-submit"},"Legg til",-1))],32)],512),[[tl,O.value==="manage"]])])]))}}),ZR=Eu(XR,[["__scopeId","data-v-ed813cfa"]]),eS={id:"toast-container"},tS={key:0,id:"loading-overlay"},nS=wi({__name:"App",setup(t){const e=ve("student"),n=ve([]);let r=0;function s(a,l="info"){const c=++r;n.value.push({id:c,message:a,type:l}),setTimeout(()=>{const h=n.value.findIndex(f=>f.id===c);h!==-1&&n.value.splice(h,1)},3e3)}fo("showToast",s),fo("currentView",e);const i=ve(!1);return fo("loading",i),(a,l)=>(se(),le(qe,null,[k("div",eS,[(se(!0),le(qe,null,_r(n.value,c=>(se(),le("div",{key:c.id,class:rt(["toast",c.type])},Ce(c.message),3))),128))]),i.value?(se(),le("div",tS,[...l[0]||(l[0]=[k("div",{class:"loader-ring"},null,-1),k("p",null,"Laster...",-1)])])):Fe("",!0),e.value==="student"?(se(),wr(X0,{key:1})):e.value==="login"?(se(),wr(aR,{key:2})):e.value==="admin"?(se(),wr(ZR,{key:3})):Fe("",!0)],64))}});wv(nS).mount("#app");

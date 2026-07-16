(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function dc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const De={},zr=[],rn=()=>{},_f=()=>!1,Jo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Xo=t=>t.startsWith("onUpdate:"),ut=Object.assign,fc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},i_=Object.prototype.hasOwnProperty,Se=(t,e)=>i_.call(t,e),pe=Array.isArray,Gr=t=>Ei(t)==="[object Map]",yf=t=>Ei(t)==="[object Set]",wh=t=>Ei(t)==="[object Date]",ye=t=>typeof t=="function",Ue=t=>typeof t=="string",cn=t=>typeof t=="symbol",Ce=t=>t!==null&&typeof t=="object",vf=t=>(Ce(t)||ye(t))&&ye(t.then)&&ye(t.catch),Ef=Object.prototype.toString,Ei=t=>Ef.call(t),o_=t=>Ei(t).slice(8,-1),wf=t=>Ei(t)==="[object Object]",pc=t=>Ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,zs=dc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},a_=/-\w/g,Kt=Zo(t=>t.replace(a_,e=>e.slice(1).toUpperCase())),l_=/\B([A-Z])/g,ir=Zo(t=>t.replace(l_,"-$1").toLowerCase()),Tf=Zo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ga=Zo(t=>t?`on${Tf(t)}`:""),nn=(t,e)=>!Object.is(t,e),po=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},If=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},mc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Th;const ea=()=>Th||(Th=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ta(t){if(pe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ue(r)?d_(r):ta(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ue(t)||Ce(t))return t}const c_=/;(?![^(]*\))/g,u_=/:([^]+)/,h_=/\/\*[^]*?\*\//g;function d_(t){const e={};return t.replace(h_,"").split(c_).forEach(n=>{if(n){const r=n.split(u_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function nt(t){let e="";if(Ue(t))e=t;else if(pe(t))for(let n=0;n<t.length;n++){const r=nt(t[n]);r&&(e+=r+" ")}else if(Ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const f_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",p_=dc(f_);function Af(t){return!!t||t===""}function m_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=gc(t[r],e[r]);return n}function gc(t,e){if(t===e)return!0;let n=wh(t),r=wh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=cn(t),r=cn(e),n||r)return t===e;if(n=pe(t),r=pe(e),n||r)return n&&r?m_(t,e):!1;if(n=Ce(t),r=Ce(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in t){const l=t.hasOwnProperty(a),c=e.hasOwnProperty(a);if(l&&!c||!l&&c||!gc(t[a],e[a]))return!1}}return String(t)===String(e)}const bf=t=>!!(t&&t.__v_isRef===!0),Ne=t=>Ue(t)?t:t==null?"":pe(t)||Ce(t)&&(t.toString===Ef||!ye(t.toString))?bf(t)?Ne(t.value):JSON.stringify(t,Rf,2):String(t),Rf=(t,e)=>bf(e)?Rf(t,e.value):Gr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Qa(r,i)+" =>"]=s,n),{})}:yf(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Qa(n))}:cn(e)?Qa(e):Ce(e)&&!pe(e)&&!wf(e)?String(e):e,Qa=(t,e="")=>{var n;return cn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let it;class g_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&it&&(it.active?(this.parent=it,this.index=(it.scopes||(it.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=it;try{return it=this,e()}finally{it=n}}}on(){++this._on===1&&(this.prevScope=it,it=this)}off(){if(this._on>0&&--this._on===0){if(it===this)it=this.prevScope;else{let e=it;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function __(){return it}let Oe;const Ya=new WeakSet;class Sf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,it&&(it.active?it.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ya.has(this)&&(Ya.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Cf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ih(this),kf(this);const e=Oe,n=zt;Oe=this,zt=!0;try{return this.fn()}finally{Vf(this),Oe=e,zt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)vc(e);this.deps=this.depsTail=void 0,Ih(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ya.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Pl(this)&&this.run()}get dirty(){return Pl(this)}}let Pf=0,Gs,Qs;function Cf(t,e=!1){if(t.flags|=8,e){t.next=Qs,Qs=t;return}t.next=Gs,Gs=t}function _c(){Pf++}function yc(){if(--Pf>0)return;if(Qs){let e=Qs;for(Qs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Gs;){let e=Gs;for(Gs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function kf(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Vf(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),vc(r),y_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Pl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Df(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Df(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===si)||(t.globalVersion=si,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Pl(t))))return;t.flags|=2;const e=t.dep,n=Oe,r=zt;Oe=t,zt=!0;try{kf(t);const s=t.fn(t._value);(e.version===0||nn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Oe=n,zt=r,Vf(t),t.flags&=-3}}function vc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)vc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function y_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let zt=!0;const Nf=[];function un(){Nf.push(zt),zt=!1}function hn(){const t=Nf.pop();zt=t===void 0?!0:t}function Ih(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Oe;Oe=void 0;try{e()}finally{Oe=n}}}let si=0;class v_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ec{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Oe||!zt||Oe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Oe)n=this.activeLink=new v_(Oe,this),Oe.deps?(n.prevDep=Oe.depsTail,Oe.depsTail.nextDep=n,Oe.depsTail=n):Oe.deps=Oe.depsTail=n,Of(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Oe.depsTail,n.nextDep=void 0,Oe.depsTail.nextDep=n,Oe.depsTail=n,Oe.deps===n&&(Oe.deps=r)}return n}trigger(e){this.version++,si++,this.notify(e)}notify(e){_c();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{yc()}}}function Of(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Of(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Cl=new WeakMap,Er=Symbol(""),kl=Symbol(""),ii=Symbol("");function yt(t,e,n){if(zt&&Oe){let r=Cl.get(t);r||Cl.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Ec),s.map=r,s.key=n),s.track()}}function Tn(t,e,n,r,s,i){const a=Cl.get(t);if(!a){si++;return}const l=c=>{c&&c.trigger()};if(_c(),e==="clear")a.forEach(l);else{const c=pe(t),h=c&&pc(n);if(c&&n==="length"){const f=Number(r);a.forEach((m,_)=>{(_==="length"||_===ii||!cn(_)&&_>=f)&&l(m)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),h&&l(a.get(ii)),e){case"add":c?h&&l(a.get("length")):(l(a.get(Er)),Gr(t)&&l(a.get(kl)));break;case"delete":c||(l(a.get(Er)),Gr(t)&&l(a.get(kl)));break;case"set":Gr(t)&&l(a.get(Er));break}}yc()}function Fr(t){const e=Re(t);return e===t?e:(yt(e,"iterate",ii),qt(t)?e:e.map(Gt))}function na(t){return yt(t=Re(t),"iterate",ii),t}function en(t,e){return Cn(t)?ns(wr(t)?Gt(e):e):Gt(e)}const E_={__proto__:null,[Symbol.iterator](){return Ja(this,Symbol.iterator,t=>en(this,t))},concat(...t){return Fr(this).concat(...t.map(e=>pe(e)?Fr(e):e))},entries(){return Ja(this,"entries",t=>(t[1]=en(this,t[1]),t))},every(t,e){return yn(this,"every",t,e,void 0,arguments)},filter(t,e){return yn(this,"filter",t,e,n=>n.map(r=>en(this,r)),arguments)},find(t,e){return yn(this,"find",t,e,n=>en(this,n),arguments)},findIndex(t,e){return yn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return yn(this,"findLast",t,e,n=>en(this,n),arguments)},findLastIndex(t,e){return yn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return yn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Xa(this,"includes",t)},indexOf(...t){return Xa(this,"indexOf",t)},join(t){return Fr(this).join(t)},lastIndexOf(...t){return Xa(this,"lastIndexOf",t)},map(t,e){return yn(this,"map",t,e,void 0,arguments)},pop(){return Ns(this,"pop")},push(...t){return Ns(this,"push",t)},reduce(t,...e){return Ah(this,"reduce",t,e)},reduceRight(t,...e){return Ah(this,"reduceRight",t,e)},shift(){return Ns(this,"shift")},some(t,e){return yn(this,"some",t,e,void 0,arguments)},splice(...t){return Ns(this,"splice",t)},toReversed(){return Fr(this).toReversed()},toSorted(t){return Fr(this).toSorted(t)},toSpliced(...t){return Fr(this).toSpliced(...t)},unshift(...t){return Ns(this,"unshift",t)},values(){return Ja(this,"values",t=>en(this,t))}};function Ja(t,e,n){const r=na(t),s=r[e]();return r!==t&&!qt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const w_=Array.prototype;function yn(t,e,n,r,s,i){const a=na(t),l=a!==t&&!qt(t),c=a[e];if(c!==w_[e]){const m=c.apply(t,i);return l?Gt(m):m}let h=n;a!==t&&(l?h=function(m,_){return n.call(this,en(t,m),_,t)}:n.length>2&&(h=function(m,_){return n.call(this,m,_,t)}));const f=c.call(a,h,r);return l&&s?s(f):f}function Ah(t,e,n,r){const s=na(t),i=s!==t&&!qt(t);let a=n,l=!1;s!==t&&(i?(l=r.length===0,a=function(h,f,m){return l&&(l=!1,h=en(t,h)),n.call(this,h,en(t,f),m,t)}):n.length>3&&(a=function(h,f,m){return n.call(this,h,f,m,t)}));const c=s[e](a,...r);return l?en(t,c):c}function Xa(t,e,n){const r=Re(t);yt(r,"iterate",ii);const s=r[e](...n);return(s===-1||s===!1)&&Ac(n[0])?(n[0]=Re(n[0]),r[e](...n)):s}function Ns(t,e,n=[]){un(),_c();const r=Re(t)[e].apply(t,n);return yc(),hn(),r}const T_=dc("__proto__,__v_isRef,__isVue"),xf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(cn));function I_(t){cn(t)||(t=String(t));const e=Re(this);return yt(e,"has",t),e.hasOwnProperty(t)}class Mf{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?N_:Bf:i?Uf:Ff).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=pe(e);if(!s){let c;if(a&&(c=E_[n]))return c;if(n==="hasOwnProperty")return I_}const l=Reflect.get(e,n,Et(e)?e:r);if((cn(n)?xf.has(n):T_(n))||(s||yt(e,"get",n),i))return l;if(Et(l)){const c=a&&pc(n)?l:l.value;return s&&Ce(c)?Dl(c):c}return Ce(l)?s?Dl(l):Tc(l):l}}class Lf extends Mf{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const a=pe(e)&&pc(n);if(!this._isShallow){const h=Cn(i);if(!qt(r)&&!Cn(r)&&(i=Re(i),r=Re(r)),!a&&Et(i)&&!Et(r))return h||(i.value=r),!0}const l=a?Number(n)<e.length:Se(e,n),c=Reflect.set(e,n,r,Et(e)?e:s);return e===Re(s)&&c&&(l?nn(r,i)&&Tn(e,"set",n,r):Tn(e,"add",n,r)),c}deleteProperty(e,n){const r=Se(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Tn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!cn(n)||!xf.has(n))&&yt(e,"has",n),r}ownKeys(e){return yt(e,"iterate",pe(e)?"length":Er),Reflect.ownKeys(e)}}class A_ extends Mf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const b_=new Lf,R_=new A_,S_=new Lf(!0);const Vl=t=>t,to=t=>Reflect.getPrototypeOf(t);function P_(t,e,n){return function(...r){const s=this.__v_raw,i=Re(s),a=Gr(i),l=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,h=s[t](...r),f=n?Vl:e?ns:Gt;return!e&&yt(i,"iterate",c?kl:Er),ut(Object.create(h),{next(){const{value:m,done:_}=h.next();return _?{value:m,done:_}:{value:l?[f(m[0]),f(m[1])]:f(m),done:_}}})}}function no(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function C_(t,e){const n={get(s){const i=this.__v_raw,a=Re(i),l=Re(s);t||(nn(s,l)&&yt(a,"get",s),yt(a,"get",l));const{has:c}=to(a),h=e?Vl:t?ns:Gt;if(c.call(a,s))return h(i.get(s));if(c.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!t&&yt(Re(s),"iterate",Er),s.size},has(s){const i=this.__v_raw,a=Re(i),l=Re(s);return t||(nn(s,l)&&yt(a,"has",s),yt(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=Re(l),h=e?Vl:t?ns:Gt;return!t&&yt(c,"iterate",Er),l.forEach((f,m)=>s.call(i,h(f),h(m),a))}};return ut(n,t?{add:no("add"),set:no("set"),delete:no("delete"),clear:no("clear")}:{add(s){const i=Re(this),a=to(i),l=Re(s),c=!e&&!qt(s)&&!Cn(s)?l:s;return a.has.call(i,c)||nn(s,c)&&a.has.call(i,s)||nn(l,c)&&a.has.call(i,l)||(i.add(c),Tn(i,"add",c,c)),this},set(s,i){!e&&!qt(i)&&!Cn(i)&&(i=Re(i));const a=Re(this),{has:l,get:c}=to(a);let h=l.call(a,s);h||(s=Re(s),h=l.call(a,s));const f=c.call(a,s);return a.set(s,i),h?nn(i,f)&&Tn(a,"set",s,i):Tn(a,"add",s,i),this},delete(s){const i=Re(this),{has:a,get:l}=to(i);let c=a.call(i,s);c||(s=Re(s),c=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&Tn(i,"delete",s,void 0),h},clear(){const s=Re(this),i=s.size!==0,a=s.clear();return i&&Tn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=P_(s,t,e)}),n}function wc(t,e){const n=C_(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Se(n,s)&&s in r?n:r,s,i)}const k_={get:wc(!1,!1)},V_={get:wc(!1,!0)},D_={get:wc(!0,!1)};const Ff=new WeakMap,Uf=new WeakMap,Bf=new WeakMap,N_=new WeakMap;function O_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Tc(t){return Cn(t)?t:Ic(t,!1,b_,k_,Ff)}function x_(t){return Ic(t,!1,S_,V_,Uf)}function Dl(t){return Ic(t,!0,R_,D_,Bf)}function Ic(t,e,n,r,s){if(!Ce(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const i=s.get(t);if(i)return i;const a=O_(o_(t));if(a===0)return t;const l=new Proxy(t,a===2?r:n);return s.set(t,l),l}function wr(t){return Cn(t)?wr(t.__v_raw):!!(t&&t.__v_isReactive)}function Cn(t){return!!(t&&t.__v_isReadonly)}function qt(t){return!!(t&&t.__v_isShallow)}function Ac(t){return t?!!t.__v_raw:!1}function Re(t){const e=t&&t.__v_raw;return e?Re(e):t}function M_(t){return!Se(t,"__v_skip")&&Object.isExtensible(t)&&If(t,"__v_skip",!0),t}const Gt=t=>Ce(t)?Tc(t):t,ns=t=>Ce(t)?Dl(t):t;function Et(t){return t?t.__v_isRef===!0:!1}function ve(t){return L_(t,!1)}function L_(t,e){return Et(t)?t:new F_(t,e)}class F_{constructor(e,n){this.dep=new Ec,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Re(e),this._value=n?e:Gt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||qt(e)||Cn(e);e=r?e:Re(e),nn(e,n)&&(this._rawValue=e,this._value=r?e:Gt(e),this.dep.trigger())}}function Wr(t){return Et(t)?t.value:t}const U_={get:(t,e,n)=>e==="__v_raw"?t:Wr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Et(s)&&!Et(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function $f(t){return wr(t)?t:new Proxy(t,U_)}class B_{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ec(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=si-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Oe!==this)return Cf(this,!0),!0}get value(){const e=this.dep.track();return Df(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function $_(t,e,n=!1){let r,s;return ye(t)?r=t:(r=t.get,s=t.set),new B_(r,s,n)}const ro={},Ro=new WeakMap;let pr;function j_(t,e=!1,n=pr){if(n){let r=Ro.get(n);r||Ro.set(n,r=[]),r.push(t)}}function q_(t,e,n=De){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=n,h=j=>s?j:qt(j)||s===!1||s===0?In(j,1):In(j);let f,m,_,I,k=!1,P=!1;if(Et(t)?(m=()=>t.value,k=qt(t)):wr(t)?(m=()=>h(t),k=!0):pe(t)?(P=!0,k=t.some(j=>wr(j)||qt(j)),m=()=>t.map(j=>{if(Et(j))return j.value;if(wr(j))return h(j);if(ye(j))return c?c(j,2):j()})):ye(t)?e?m=c?()=>c(t,2):t:m=()=>{if(_){un();try{_()}finally{hn()}}const j=pr;pr=f;try{return c?c(t,3,[I]):t(I)}finally{pr=j}}:m=rn,e&&s){const j=m,ie=s===!0?1/0:s;m=()=>In(j(),ie)}const S=__(),x=()=>{f.stop(),S&&S.active&&fc(S.effects,f)};if(i&&e){const j=e;e=(...ie)=>{const oe=j(...ie);return x(),oe}}let M=P?new Array(t.length).fill(ro):ro;const q=j=>{if(!(!(f.flags&1)||!f.dirty&&!j))if(e){const ie=f.run();if(j||s||k||(P?ie.some((oe,w)=>nn(oe,M[w])):nn(ie,M))){_&&_();const oe=pr;pr=f;try{const w=[ie,M===ro?void 0:P&&M[0]===ro?[]:M,I];M=ie,c?c(e,3,w):e(...w)}finally{pr=oe}}}else f.run()};return l&&l(q),f=new Sf(m),f.scheduler=a?()=>a(q,!1):q,I=j=>j_(j,!1,f),_=f.onStop=()=>{const j=Ro.get(f);if(j){if(c)c(j,4);else for(const ie of j)ie();Ro.delete(f)}},e?r?q(!0):M=f.run():a?a(q.bind(null,!0),!0):f.run(),x.pause=f.pause.bind(f),x.resume=f.resume.bind(f),x.stop=x,x}function In(t,e=1/0,n){if(e<=0||!Ce(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Et(t))In(t.value,e,n);else if(pe(t))for(let r=0;r<t.length;r++)In(t[r],e,n);else if(yf(t)||Gr(t))t.forEach(r=>{In(r,e,n)});else if(wf(t)){for(const r in t)In(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&In(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function wi(t,e,n,r){try{return r?t(...r):t()}catch(s){ra(s,e,n)}}function Qt(t,e,n,r){if(ye(t)){const s=wi(t,e,n,r);return s&&vf(s)&&s.catch(i=>{ra(i,e,n)}),s}if(pe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Qt(t[i],e,n,r));return s}}function ra(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||De;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let m=0;m<f.length;m++)if(f[m](t,c,h)===!1)return}l=l.parent}if(i){un(),wi(i,null,10,[t,c,h]),hn();return}}W_(t,n,s,r,a)}function W_(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Rt=[];let Zt=-1;const Qr=[];let Wn=null,Ur=0;const jf=Promise.resolve();let So=null;function Nl(t){const e=So||jf;return t?e.then(this?t.bind(this):t):e}function H_(t){let e=Zt+1,n=Rt.length;for(;e<n;){const r=e+n>>>1,s=Rt[r],i=oi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function bc(t){if(!(t.flags&1)){const e=oi(t),n=Rt[Rt.length-1];!n||!(t.flags&2)&&e>=oi(n)?Rt.push(t):Rt.splice(H_(e),0,t),t.flags|=1,qf()}}function qf(){So||(So=jf.then(Hf))}function K_(t){pe(t)?Qr.push(...t):Wn&&t.id===-1?Wn.splice(Ur+1,0,t):t.flags&1||(Qr.push(t),t.flags|=1),qf()}function bh(t,e,n=Zt+1){for(;n<Rt.length;n++){const r=Rt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Rt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Wf(t){if(Qr.length){const e=[...new Set(Qr)].sort((n,r)=>oi(n)-oi(r));if(Qr.length=0,Wn){Wn.push(...e);return}for(Wn=e,Ur=0;Ur<Wn.length;Ur++){const n=Wn[Ur];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Wn=null,Ur=0}}const oi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Hf(t){try{for(Zt=0;Zt<Rt.length;Zt++){const e=Rt[Zt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),wi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Zt<Rt.length;Zt++){const e=Rt[Zt];e&&(e.flags&=-2)}Zt=-1,Rt.length=0,Wf(),So=null,(Rt.length||Qr.length)&&Hf()}}let jt=null,Kf=null;function Po(t){const e=jt;return jt=t,Kf=t&&t.type.__scopeId||null,e}function z_(t,e=jt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Fh(-1);const i=Po(e);let a;try{a=t(...s)}finally{Po(i),r._d&&Fh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function ot(t,e){if(jt===null)return t;const n=la(jt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=De]=e[s];i&&(ye(i)&&(i={mounted:i,updated:i}),i.deep&&In(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function dr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(un(),Qt(c,n,8,[t.el,l,t,e]),hn())}}function mo(t,e){if(St){let n=St.provides;const r=St.parent&&St.parent.provides;r===n&&(n=St.provides=Object.create(r)),n[t]=e}}function Lt(t,e,n=!1){const r=Ky();if(r||Yr){let s=Yr?Yr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ye(e)?e.call(r&&r.proxy):e}}const G_=Symbol.for("v-scx"),Q_=()=>Lt(G_);function Za(t,e,n){return zf(t,e,n)}function zf(t,e,n=De){const{immediate:r,deep:s,flush:i,once:a}=n,l=ut({},n),c=e&&r||!e&&i!=="post";let h;if(li){if(i==="sync"){const I=Q_();h=I.__watcherHandles||(I.__watcherHandles=[])}else if(!c){const I=()=>{};return I.stop=rn,I.resume=rn,I.pause=rn,I}}const f=St;l.call=(I,k,P)=>Qt(I,f,k,P);let m=!1;i==="post"?l.scheduler=I=>{bt(I,f&&f.suspense)}:i!=="sync"&&(m=!0,l.scheduler=(I,k)=>{k?I():bc(I)}),l.augmentJob=I=>{e&&(I.flags|=4),m&&(I.flags|=2,f&&(I.id=f.uid,I.i=f))};const _=q_(t,e,l);return li&&(h?h.push(_):c&&_()),_}function Y_(t,e,n){const r=this.proxy,s=Ue(t)?t.includes(".")?Gf(r,t):()=>r[t]:t.bind(r,r);let i;ye(e)?i=e:(i=e.handler,n=e);const a=Ii(this),l=zf(s,i.bind(r),n);return a(),l}function Gf(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const qn=new WeakMap,Qf=Symbol("_vte"),J_=t=>t.__isTeleport,gr=t=>t&&(t.disabled||t.disabled===""),X_=t=>t&&(t.defer||t.defer===""),Rh=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Sh=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Ol=(t,e)=>{const n=t&&t.to;return Ue(n)?e?e(n):null:n},Z_={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,a,l,c,h){const{mc:f,pc:m,pbc:_,o:{insert:I,querySelector:k,createText:P,createComment:S,parentNode:x}}=h,M=gr(e.props);let{dynamicChildren:q}=e;const j=(w,g,y)=>{w.shapeFlag&16&&f(w.children,g,y,s,i,a,l,c)},ie=(w=e)=>{const g=gr(w.props),y=w.target=Ol(w.props,k),T=xl(y,w,P,I);y&&(a!=="svg"&&Rh(y)?a="svg":a!=="mathml"&&Sh(y)&&(a="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(y),g||(j(w,y,T),Fs(w,!1)))},oe=w=>{const g=()=>{if(qn.get(w)===g){if(qn.delete(w),gr(w.props)){const y=x(w.el)||n;j(w,y,w.anchor),Fs(w,!0)}ie(w)}};qn.set(w,g),bt(g,i)};if(t==null){const w=e.el=P(""),g=e.anchor=P("");if(I(w,n,r),I(g,n,r),X_(e.props)||i&&i.pendingBranch){oe(e);return}M&&(j(e,n,g),Fs(e,!0)),ie()}else{e.el=t.el;const w=e.anchor=t.anchor,g=qn.get(t);if(g){g.flags|=8,qn.delete(t),oe(e);return}e.targetStart=t.targetStart;const y=e.target=t.target,T=e.targetAnchor=t.targetAnchor,A=gr(t.props),R=A?n:y,E=A?w:T;if(a==="svg"||Rh(y)?a="svg":(a==="mathml"||Sh(y))&&(a="mathml"),q?(_(t.dynamicChildren,q,R,s,i,a,l),kc(t,e,!0)):c||m(t,e,R,E,s,i,a,l,!1),M)A?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):so(e,n,w,h,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const $e=Ol(e.props,k);$e&&(e.target=$e,so(e,$e,null,h,0))}else A&&so(e,y,T,h,1);Fs(e,M)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:a,children:l,anchor:c,targetStart:h,targetAnchor:f,target:m,props:_}=t,I=gr(_),k=i||!I,P=qn.get(t);if(P&&(P.flags|=8,qn.delete(t)),m&&(s(h),s(f)),i&&s(c),!P&&(I||m)&&a&16)for(let S=0;S<l.length;S++){const x=l[S];r(x,e,n,k,!!x.dynamicChildren)}},move:so,hydrate:ey};function so(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:a,anchor:l,shapeFlag:c,children:h,props:f}=t,m=i===2;if(m&&r(a,e,n),!qn.has(t)&&(!m||gr(f))&&c&16)for(let _=0;_<h.length;_++)s(h[_],e,n,2);m&&r(l,e,n)}function ey(t,e,n,r,s,i,{o:{nextSibling:a,parentNode:l,querySelector:c,insert:h,createText:f}},m){function _(S,x){let M=x;for(;M;){if(M&&M.nodeType===8){if(M.data==="teleport start anchor")e.targetStart=M;else if(M.data==="teleport anchor"){e.targetAnchor=M,S._lpa=e.targetAnchor&&a(e.targetAnchor);break}}M=a(M)}}function I(S,x){x.anchor=m(a(S),x,l(S),n,r,s,i)}const k=e.target=Ol(e.props,c),P=gr(e.props);if(k){const S=k._lpa||k.firstChild;e.shapeFlag&16&&(P?(I(t,e),_(k,S),e.targetAnchor||xl(k,e,f,h,l(t)===k?t:null)):(e.anchor=a(t),_(k,S),e.targetAnchor||xl(k,e,f,h),m(S&&a(S),e,k,n,r,s,i))),Fs(e,P)}else P&&e.shapeFlag&16&&(I(t,e),e.targetStart=t,e.targetAnchor=a(t));return e.anchor&&a(e.anchor)}const el=Z_;function Fs(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function xl(t,e,n,r,s=null){const i=e.targetStart=n(""),a=e.targetAnchor=n("");return i[Qf]=a,t&&(r(i,t,s),r(a,t,s)),a}const tl=Symbol("_leaveCb");function Rc(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Rc(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ti(t,e){return ye(t)?ut({name:t.name},e,{setup:t}):t}function Yf(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ph(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Co=new WeakMap;function Ys(t,e,n,r,s=!1){if(pe(t)){t.forEach((P,S)=>Ys(P,e&&(pe(e)?e[S]:e),n,r,s));return}if(Js(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ys(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?la(r.component):r.el,a=s?null:i,{i:l,r:c}=t,h=e&&e.r,f=l.refs===De?l.refs={}:l.refs,m=l.setupState,_=Re(m),I=m===De?_f:P=>Ph(f,P)?!1:Se(_,P),k=(P,S)=>!(S&&Ph(f,S));if(h!=null&&h!==c){if(Ch(e),Ue(h))f[h]=null,I(h)&&(m[h]=null);else if(Et(h)){const P=e;k(h,P.k)&&(h.value=null),P.k&&(f[P.k]=null)}}if(ye(c)){un();try{wi(c,l,12,[a,f])}finally{hn()}}else{const P=Ue(c),S=Et(c);if(P||S){const x=()=>{if(t.f){const M=P?I(c)?m[c]:f[c]:k()||!t.k?c.value:f[t.k];if(s)pe(M)&&fc(M,i);else if(pe(M))M.includes(i)||M.push(i);else if(P)f[c]=[i],I(c)&&(m[c]=f[c]);else{const q=[i];k(c,t.k)&&(c.value=q),t.k&&(f[t.k]=q)}}else P?(f[c]=a,I(c)&&(m[c]=a)):S&&(k(c,t.k)&&(c.value=a),t.k&&(f[t.k]=a))};if(a){const M=()=>{x(),Co.delete(t)};M.id=-1,Co.set(t,M),bt(M,n)}else Ch(t),x()}}}function Ch(t){const e=Co.get(t);e&&(e.flags|=8,Co.delete(t))}ea().requestIdleCallback;ea().cancelIdleCallback;const Js=t=>!!t.type.__asyncLoader,Jf=t=>t.type.__isKeepAlive;function ty(t,e){Xf(t,"a",e)}function ny(t,e){Xf(t,"da",e)}function Xf(t,e,n=St){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(sa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Jf(s.parent.vnode)&&ry(r,e,n,s),s=s.parent}}function ry(t,e,n,r){const s=sa(e,t,r,!0);ia(()=>{fc(r[e],s)},n)}function sa(t,e,n=St,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{un();const l=Ii(n),c=Qt(e,n,t,a);return l(),hn(),c});return r?s.unshift(i):s.push(i),i}}const xn=t=>(e,n=St)=>{(!li||t==="sp")&&sa(t,(...r)=>e(...r),n)},sy=xn("bm"),Sc=xn("m"),iy=xn("bu"),oy=xn("u"),ay=xn("bum"),ia=xn("um"),ly=xn("sp"),cy=xn("rtg"),uy=xn("rtc");function hy(t,e=St){sa("ec",t,e)}const dy=Symbol.for("v-ndc");function yr(t,e,n,r){let s;const i=n,a=pe(t);if(a||Ue(t)){const l=a&&wr(t);let c=!1,h=!1;l&&(c=!qt(t),h=Cn(t),t=na(t)),s=new Array(t.length);for(let f=0,m=t.length;f<m;f++)s[f]=e(c?h?ns(Gt(t[f])):Gt(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Ce(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}const Ml=t=>t?yp(t)?la(t):Ml(t.parent):null,Xs=ut(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ml(t.parent),$root:t=>Ml(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>ep(t),$forceUpdate:t=>t.f||(t.f=()=>{bc(t.update)}),$nextTick:t=>t.n||(t.n=Nl.bind(t.proxy)),$watch:t=>Y_.bind(t)}),nl=(t,e)=>t!==De&&!t.__isScriptSetup&&Se(t,e),fy={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=t;if(e[0]!=="$"){const _=a[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(nl(r,e))return a[e]=1,r[e];if(s!==De&&Se(s,e))return a[e]=2,s[e];if(Se(i,e))return a[e]=3,i[e];if(n!==De&&Se(n,e))return a[e]=4,n[e];Ll&&(a[e]=0)}}const h=Xs[e];let f,m;if(h)return e==="$attrs"&&yt(t.attrs,"get",""),h(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(n!==De&&Se(n,e))return a[e]=4,n[e];if(m=c.config.globalProperties,Se(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return nl(s,e)?(s[e]=n,!0):r!==De&&Se(r,e)?(r[e]=n,!0):Se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:a}},l){let c;return!!(n[l]||t!==De&&l[0]!=="$"&&Se(t,l)||nl(e,l)||Se(i,l)||Se(r,l)||Se(Xs,l)||Se(s.config.globalProperties,l)||(c=a.__cssModules)&&c[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function kh(t){return pe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ll=!0;function py(t){const e=ep(t),n=t.proxy,r=t.ctx;Ll=!1,e.beforeCreate&&Vh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:f,beforeMount:m,mounted:_,beforeUpdate:I,updated:k,activated:P,deactivated:S,beforeDestroy:x,beforeUnmount:M,destroyed:q,unmounted:j,render:ie,renderTracked:oe,renderTriggered:w,errorCaptured:g,serverPrefetch:y,expose:T,inheritAttrs:A,components:R,directives:E,filters:$e}=e;if(h&&my(h,r,null),a)for(const G in a){const le=a[G];ye(le)&&(r[G]=le.bind(n))}if(s){const G=s.call(n,n);Ce(G)&&(t.data=Tc(G))}if(Ll=!0,i)for(const G in i){const le=i[G],dt=ye(le)?le.bind(n,n):ye(le.get)?le.get.bind(n,n):rn,Ft=!ye(le)&&ye(le.set)?le.set.bind(n):rn,Pt=Hr({get:dt,set:Ft});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>Pt.value,set:Ke=>Pt.value=Ke})}if(l)for(const G in l)Zf(l[G],r,n,G);if(c){const G=ye(c)?c.call(n):c;Reflect.ownKeys(G).forEach(le=>{mo(le,G[le])})}f&&Vh(f,t,"c");function W(G,le){pe(le)?le.forEach(dt=>G(dt.bind(n))):le&&G(le.bind(n))}if(W(sy,m),W(Sc,_),W(iy,I),W(oy,k),W(ty,P),W(ny,S),W(hy,g),W(uy,oe),W(cy,w),W(ay,M),W(ia,j),W(ly,y),pe(T))if(T.length){const G=t.exposed||(t.exposed={});T.forEach(le=>{Object.defineProperty(G,le,{get:()=>n[le],set:dt=>n[le]=dt,enumerable:!0})})}else t.exposed||(t.exposed={});ie&&t.render===rn&&(t.render=ie),A!=null&&(t.inheritAttrs=A),R&&(t.components=R),E&&(t.directives=E),y&&Yf(t)}function my(t,e,n=rn){pe(t)&&(t=Fl(t));for(const r in t){const s=t[r];let i;Ce(s)?"default"in s?i=Lt(s.from||r,s.default,!0):i=Lt(s.from||r):i=Lt(s),Et(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function Vh(t,e,n){Qt(pe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Zf(t,e,n,r){let s=r.includes(".")?Gf(n,r):()=>n[r];if(Ue(t)){const i=e[t];ye(i)&&Za(s,i)}else if(ye(t))Za(s,t.bind(n));else if(Ce(t))if(pe(t))t.forEach(i=>Zf(i,e,n,r));else{const i=ye(t.handler)?t.handler.bind(n):e[t.handler];ye(i)&&Za(s,i,t)}}function ep(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>ko(c,h,a,!0)),ko(c,e,a)),Ce(e)&&i.set(e,c),c}function ko(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ko(t,i,n,!0),s&&s.forEach(a=>ko(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const l=gy[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const gy={data:Dh,props:Nh,emits:Nh,methods:Us,computed:Us,beforeCreate:At,created:At,beforeMount:At,mounted:At,beforeUpdate:At,updated:At,beforeDestroy:At,beforeUnmount:At,destroyed:At,unmounted:At,activated:At,deactivated:At,errorCaptured:At,serverPrefetch:At,components:Us,directives:Us,watch:yy,provide:Dh,inject:_y};function Dh(t,e){return e?t?function(){return ut(ye(t)?t.call(this,this):t,ye(e)?e.call(this,this):e)}:e:t}function _y(t,e){return Us(Fl(t),Fl(e))}function Fl(t){if(pe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function At(t,e){return t?[...new Set([].concat(t,e))]:e}function Us(t,e){return t?ut(Object.create(null),t,e):e}function Nh(t,e){return t?pe(t)&&pe(e)?[...new Set([...t,...e])]:ut(Object.create(null),kh(t),kh(e??{})):e}function yy(t,e){if(!t)return e;if(!e)return t;const n=ut(Object.create(null),t);for(const r in e)n[r]=At(t[r],e[r]);return n}function tp(){return{app:null,config:{isNativeTag:_f,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vy=0;function Ey(t,e){return function(r,s=null){ye(r)||(r=ut({},r)),s!=null&&!Ce(s)&&(s=null);const i=tp(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:vy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Xy,get config(){return i.config},set config(f){},use(f,...m){return a.has(f)||(f&&ye(f.install)?(a.add(f),f.install(h,...m)):ye(f)&&(a.add(f),f(h,...m))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,m){return m?(i.components[f]=m,h):i.components[f]},directive(f,m){return m?(i.directives[f]=m,h):i.directives[f]},mount(f,m,_){if(!c){const I=h._ceVNode||et(r,s);return I.appContext=i,_===!0?_="svg":_===!1&&(_=void 0),t(I,f,_),c=!0,h._container=f,f.__vue_app__=h,la(I.component)}},onUnmount(f){l.push(f)},unmount(){c&&(Qt(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,m){return i.provides[f]=m,h},runWithContext(f){const m=Yr;Yr=h;try{return f()}finally{Yr=m}}};return h}}let Yr=null;const wy=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Kt(e)}Modifiers`]||t[`${ir(e)}Modifiers`];function Ty(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||De;let s=n;const i=e.startsWith("update:"),a=i&&wy(r,e.slice(7));a&&(a.trim&&(s=n.map(f=>Ue(f)?f.trim():f)),a.number&&(s=n.map(mc)));let l,c=r[l=Ga(e)]||r[l=Ga(Kt(e))];!c&&i&&(c=r[l=Ga(ir(e))]),c&&Qt(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Qt(h,t,6,s)}}const Iy=new WeakMap;function np(t,e,n=!1){const r=n?Iy:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},l=!1;if(!ye(t)){const c=h=>{const f=np(h,e,!0);f&&(l=!0,ut(a,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Ce(t)&&r.set(t,null),null):(pe(i)?i.forEach(c=>a[c]=null):ut(a,i),Ce(t)&&r.set(t,a),a)}function oa(t,e){return!t||!Jo(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Se(t,e[0].toLowerCase()+e.slice(1))||Se(t,ir(e))||Se(t,e))}function Oh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:f,props:m,data:_,setupState:I,ctx:k,inheritAttrs:P}=t,S=Po(t);let x,M;try{if(n.shapeFlag&4){const j=s||r,ie=j;x=tn(h.call(ie,j,f,m,I,_,k)),M=l}else{const j=e;x=tn(j.length>1?j(m,{attrs:l,slots:a,emit:c}):j(m,null)),M=e.props?l:Ay(l)}}catch(j){Zs.length=0,ra(j,t,1),x=et(tr)}let q=x;if(M&&P!==!1){const j=Object.keys(M),{shapeFlag:ie}=q;j.length&&ie&7&&(i&&j.some(Xo)&&(M=by(M,i)),q=rs(q,M,!1,!0))}return n.dirs&&(q=rs(q,null,!1,!0),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&Rc(q,n.transition),x=q,Po(S),x}const Ay=t=>{let e;for(const n in t)(n==="class"||n==="style"||Jo(n))&&((e||(e={}))[n]=t[n]);return e},by=(t,e)=>{const n={};for(const r in t)(!Xo(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Ry(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?xh(r,a,h):!!a;if(c&8){const f=e.dynamicProps;for(let m=0;m<f.length;m++){const _=f[m];if(rp(a,r,_)&&!oa(h,_))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?xh(r,a,h):!0:!!a;return!1}function xh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(rp(e,t,i)&&!oa(n,i))return!0}return!1}function rp(t,e,n){const r=t[n],s=e[n];return n==="style"&&Ce(r)&&Ce(s)?!gc(r,s):r!==s}function Sy({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const sp={},ip=()=>Object.create(sp),op=t=>Object.getPrototypeOf(t)===sp;function Py(t,e,n,r=!1){const s={},i=ip();t.propsDefaults=Object.create(null),ap(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:x_(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Cy(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,l=Re(s),[c]=t.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=t.vnode.dynamicProps;for(let m=0;m<f.length;m++){let _=f[m];if(oa(t.emitsOptions,_))continue;const I=e[_];if(c)if(Se(i,_))I!==i[_]&&(i[_]=I,h=!0);else{const k=Kt(_);s[k]=Ul(c,l,k,I,t,!1)}else I!==i[_]&&(i[_]=I,h=!0)}}}else{ap(t,e,s,i)&&(h=!0);let f;for(const m in l)(!e||!Se(e,m)&&((f=ir(m))===m||!Se(e,f)))&&(c?n&&(n[m]!==void 0||n[f]!==void 0)&&(s[m]=Ul(c,l,m,void 0,t,!0)):delete s[m]);if(i!==l)for(const m in i)(!e||!Se(e,m))&&(delete i[m],h=!0)}h&&Tn(t.attrs,"set","")}function ap(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,l;if(e)for(let c in e){if(zs(c))continue;const h=e[c];let f;s&&Se(s,f=Kt(c))?!i||!i.includes(f)?n[f]=h:(l||(l={}))[f]=h:oa(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=Re(n),h=l||De;for(let f=0;f<i.length;f++){const m=i[f];n[m]=Ul(s,c,m,h[m],t,!Se(h,m))}}return a}function Ul(t,e,n,r,s,i){const a=t[n];if(a!=null){const l=Se(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ye(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=Ii(s);r=h[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===ir(n))&&(r=!0))}return r}const ky=new WeakMap;function lp(t,e,n=!1){const r=n?ky:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},l=[];let c=!1;if(!ye(t)){const f=m=>{c=!0;const[_,I]=lp(m,e,!0);ut(a,_),I&&l.push(...I)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return Ce(t)&&r.set(t,zr),zr;if(pe(i))for(let f=0;f<i.length;f++){const m=Kt(i[f]);Mh(m)&&(a[m]=De)}else if(i)for(const f in i){const m=Kt(f);if(Mh(m)){const _=i[f],I=a[m]=pe(_)||ye(_)?{type:_}:ut({},_),k=I.type;let P=!1,S=!0;if(pe(k))for(let x=0;x<k.length;++x){const M=k[x],q=ye(M)&&M.name;if(q==="Boolean"){P=!0;break}else q==="String"&&(S=!1)}else P=ye(k)&&k.name==="Boolean";I[0]=P,I[1]=S,(P||Se(I,"default"))&&l.push(m)}}const h=[a,l];return Ce(t)&&r.set(t,h),h}function Mh(t){return t[0]!=="$"&&!zs(t)}const Pc=t=>t==="_"||t==="_ctx"||t==="$stable",Cc=t=>pe(t)?t.map(tn):[tn(t)],Vy=(t,e,n)=>{if(e._n)return e;const r=z_((...s)=>Cc(e(...s)),n);return r._c=!1,r},cp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Pc(s))continue;const i=t[s];if(ye(i))e[s]=Vy(s,i,r);else if(i!=null){const a=Cc(i);e[s]=()=>a}}},up=(t,e)=>{const n=Cc(e);t.slots.default=()=>n},hp=(t,e,n)=>{for(const r in e)(n||!Pc(r))&&(t[r]=e[r])},Dy=(t,e,n)=>{const r=t.slots=ip();if(t.vnode.shapeFlag&32){const s=e._;s?(hp(r,e,n),n&&If(r,"_",s,!0)):cp(e,r)}else e&&up(t,e)},Ny=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=De;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:hp(s,e,n):(i=!e.$stable,cp(e,s)),a=e}else e&&(up(t,e),a={default:1});if(i)for(const l in s)!Pc(l)&&a[l]==null&&delete s[l]},bt=Fy;function Oy(t){return xy(t)}function xy(t,e){const n=ea();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:f,parentNode:m,nextSibling:_,setScopeId:I=rn,insertStaticContent:k}=t,P=(v,b,N,B=null,U=null,L=null,J=void 0,z=null,H=!!b.dynamicChildren)=>{if(v===b)return;v&&!Os(v,b)&&(B=Ut(v),Ke(v,U,L,!0),v=null),b.patchFlag===-2&&(H=!1,b.dynamicChildren=null);const{type:F,ref:se,shapeFlag:X}=b;switch(F){case aa:S(v,b,N,B);break;case tr:x(v,b,N,B);break;case sl:v==null&&M(b,N,B,J);break;case We:R(v,b,N,B,U,L,J,z,H);break;default:X&1?ie(v,b,N,B,U,L,J,z,H):X&6?E(v,b,N,B,U,L,J,z,H):(X&64||X&128)&&F.process(v,b,N,B,U,L,J,z,H,te)}se!=null&&U?Ys(se,v&&v.ref,L,b||v,!b):se==null&&v&&v.ref!=null&&Ys(v.ref,null,L,v,!0)},S=(v,b,N,B)=>{if(v==null)r(b.el=l(b.children),N,B);else{const U=b.el=v.el;b.children!==v.children&&h(U,b.children)}},x=(v,b,N,B)=>{v==null?r(b.el=c(b.children||""),N,B):b.el=v.el},M=(v,b,N,B)=>{[v.el,v.anchor]=k(v.children,b,N,B,v.el,v.anchor)},q=({el:v,anchor:b},N,B)=>{let U;for(;v&&v!==b;)U=_(v),r(v,N,B),v=U;r(b,N,B)},j=({el:v,anchor:b})=>{let N;for(;v&&v!==b;)N=_(v),s(v),v=N;s(b)},ie=(v,b,N,B,U,L,J,z,H)=>{if(b.type==="svg"?J="svg":b.type==="math"&&(J="mathml"),v==null)oe(b,N,B,U,L,J,z,H);else{const F=v.el&&v.el._isVueCE?v.el:null;try{F&&F._beginPatch(),y(v,b,U,L,J,z,H)}finally{F&&F._endPatch()}}},oe=(v,b,N,B,U,L,J,z)=>{let H,F;const{props:se,shapeFlag:X,transition:ee,dirs:ce}=v;if(H=v.el=a(v.type,L,se&&se.is,se),X&8?f(H,v.children):X&16&&g(v.children,H,null,B,U,rl(v,L),J,z),ce&&dr(v,null,B,"created"),w(H,v,v.scopeId,J,B),se){for(const _e in se)_e!=="value"&&!zs(_e)&&i(H,_e,null,se[_e],L,B);"value"in se&&i(H,"value",null,se.value,L),(F=se.onVnodeBeforeMount)&&Xt(F,B,v)}ce&&dr(v,null,B,"beforeMount");const ae=My(U,ee);ae&&ee.beforeEnter(H),r(H,b,N),((F=se&&se.onVnodeMounted)||ae||ce)&&bt(()=>{try{F&&Xt(F,B,v),ae&&ee.enter(H),ce&&dr(v,null,B,"mounted")}finally{}},U)},w=(v,b,N,B,U)=>{if(N&&I(v,N),B)for(let L=0;L<B.length;L++)I(v,B[L]);if(U){let L=U.subTree;if(b===L||pp(L.type)&&(L.ssContent===b||L.ssFallback===b)){const J=U.vnode;w(v,J,J.scopeId,J.slotScopeIds,U.parent)}}},g=(v,b,N,B,U,L,J,z,H=0)=>{for(let F=H;F<v.length;F++){const se=v[F]=z?wn(v[F]):tn(v[F]);P(null,se,b,N,B,U,L,J,z)}},y=(v,b,N,B,U,L,J)=>{const z=b.el=v.el;let{patchFlag:H,dynamicChildren:F,dirs:se}=b;H|=v.patchFlag&16;const X=v.props||De,ee=b.props||De;let ce;if(N&&fr(N,!1),(ce=ee.onVnodeBeforeUpdate)&&Xt(ce,N,b,v),se&&dr(b,v,N,"beforeUpdate"),N&&fr(N,!0),F&&(!v.dynamicChildren||v.dynamicChildren.length!==F.length)&&(H=0,J=!1,F=null),(X.innerHTML&&ee.innerHTML==null||X.textContent&&ee.textContent==null)&&f(z,""),F?T(v.dynamicChildren,F,z,N,B,rl(b,U),L):J||le(v,b,z,null,N,B,rl(b,U),L,!1),H>0){if(H&16)A(z,X,ee,N,U);else if(H&2&&X.class!==ee.class&&i(z,"class",null,ee.class,U),H&4&&i(z,"style",X.style,ee.style,U),H&8){const ae=b.dynamicProps;for(let _e=0;_e<ae.length;_e++){const Ie=ae[_e],Le=X[Ie],Qe=ee[Ie];(Qe!==Le||Ie==="value")&&i(z,Ie,Le,Qe,U,N)}}H&1&&v.children!==b.children&&f(z,b.children)}else!J&&F==null&&A(z,X,ee,N,U);((ce=ee.onVnodeUpdated)||se)&&bt(()=>{ce&&Xt(ce,N,b,v),se&&dr(b,v,N,"updated")},B)},T=(v,b,N,B,U,L,J)=>{for(let z=0;z<b.length;z++){const H=v[z],F=b[z],se=H.el&&(H.type===We||!Os(H,F)||H.shapeFlag&198)?m(H.el):N;P(H,F,se,null,B,U,L,J,!0)}},A=(v,b,N,B,U)=>{if(b!==N){if(b!==De)for(const L in b)!zs(L)&&!(L in N)&&i(v,L,b[L],null,U,B);for(const L in N){if(zs(L))continue;const J=N[L],z=b[L];J!==z&&L!=="value"&&i(v,L,z,J,U,B)}"value"in N&&i(v,"value",b.value,N.value,U)}},R=(v,b,N,B,U,L,J,z,H)=>{const F=b.el=v?v.el:l(""),se=b.anchor=v?v.anchor:l("");let{patchFlag:X,dynamicChildren:ee,slotScopeIds:ce}=b;ce&&(z=z?z.concat(ce):ce),v==null?(r(F,N,B),r(se,N,B),g(b.children||[],N,se,U,L,J,z,H)):X>0&&X&64&&ee&&v.dynamicChildren&&v.dynamicChildren.length===ee.length?(T(v.dynamicChildren,ee,N,U,L,J,z),(b.key!=null||U&&b===U.subTree)&&kc(v,b,!0)):le(v,b,N,se,U,L,J,z,H)},E=(v,b,N,B,U,L,J,z,H)=>{b.slotScopeIds=z,v==null?b.shapeFlag&512?U.ctx.activate(b,N,B,J,H):$e(b,N,B,U,L,J,H):ke(v,b,H)},$e=(v,b,N,B,U,L,J)=>{const z=v.component=Hy(v,B,U);if(Jf(v)&&(z.ctx.renderer=te),zy(z,!1,J),z.asyncDep){if(U&&U.registerDep(z,W,J),!v.el){const H=z.subTree=et(tr);x(null,H,b,N),v.placeholder=H.el}}else W(z,v,b,N,U,L,J)},ke=(v,b,N)=>{const B=b.component=v.component;if(Ry(v,b,N))if(B.asyncDep&&!B.asyncResolved){G(B,b,N);return}else B.next=b,B.update();else b.el=v.el,B.vnode=b},W=(v,b,N,B,U,L,J)=>{const z=()=>{if(v.isMounted){let{next:X,bu:ee,u:ce,parent:ae,vnode:_e}=v;{const ft=dp(v);if(ft){X&&(X.el=_e.el,G(v,X,J)),ft.asyncDep.then(()=>{bt(()=>{v.isUnmounted||F()},U)});return}}let Ie=X,Le;fr(v,!1),X?(X.el=_e.el,G(v,X,J)):X=_e,ee&&po(ee),(Le=X.props&&X.props.onVnodeBeforeUpdate)&&Xt(Le,ae,X,_e),fr(v,!0);const Qe=Oh(v),Bt=v.subTree;v.subTree=Qe,P(Bt,Qe,m(Bt.el),Ut(Bt),v,U,L),X.el=Qe.el,Ie===null&&Sy(v,Qe.el),ce&&bt(ce,U),(Le=X.props&&X.props.onVnodeUpdated)&&bt(()=>Xt(Le,ae,X,_e),U)}else{let X;const{el:ee,props:ce}=b,{bm:ae,m:_e,parent:Ie,root:Le,type:Qe}=v,Bt=Js(b);fr(v,!1),ae&&po(ae),!Bt&&(X=ce&&ce.onVnodeBeforeMount)&&Xt(X,Ie,b),fr(v,!0);{Le.ce&&Le.ce._hasShadowRoot()&&Le.ce._injectChildStyle(Qe,v.parent?v.parent.type:void 0);const ft=v.subTree=Oh(v);P(null,ft,N,B,v,U,L),b.el=ft.el}if(_e&&bt(_e,U),!Bt&&(X=ce&&ce.onVnodeMounted)){const ft=b;bt(()=>Xt(X,Ie,ft),U)}(b.shapeFlag&256||Ie&&Js(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&v.a&&bt(v.a,U),v.isMounted=!0,b=N=B=null}};v.scope.on();const H=v.effect=new Sf(z);v.scope.off();const F=v.update=H.run.bind(H),se=v.job=H.runIfDirty.bind(H);se.i=v,se.id=v.uid,H.scheduler=()=>bc(se),fr(v,!0),F()},G=(v,b,N)=>{b.component=v;const B=v.vnode.props;v.vnode=b,v.next=null,Cy(v,b.props,B,N),Ny(v,b.children,N),un(),bh(v),hn()},le=(v,b,N,B,U,L,J,z,H=!1)=>{const F=v&&v.children,se=v?v.shapeFlag:0,X=b.children,{patchFlag:ee,shapeFlag:ce}=b;if(ee>0){if(ee&128){Ft(F,X,N,B,U,L,J,z,H);return}else if(ee&256){dt(F,X,N,B,U,L,J,z,H);return}}ce&8?(se&16&&mn(F,U,L),X!==F&&f(N,X)):se&16?ce&16?Ft(F,X,N,B,U,L,J,z,H):mn(F,U,L,!0):(se&8&&f(N,""),ce&16&&g(X,N,B,U,L,J,z,H))},dt=(v,b,N,B,U,L,J,z,H)=>{v=v||zr,b=b||zr;const F=v.length,se=b.length,X=Math.min(F,se);let ee;for(ee=0;ee<X;ee++){const ce=b[ee]=H?wn(b[ee]):tn(b[ee]);P(v[ee],ce,N,null,U,L,J,z,H)}F>se?mn(v,U,L,!0,!1,X):g(b,N,B,U,L,J,z,H,X)},Ft=(v,b,N,B,U,L,J,z,H)=>{let F=0;const se=b.length;let X=v.length-1,ee=se-1;for(;F<=X&&F<=ee;){const ce=v[F],ae=b[F]=H?wn(b[F]):tn(b[F]);if(Os(ce,ae))P(ce,ae,N,null,U,L,J,z,H);else break;F++}for(;F<=X&&F<=ee;){const ce=v[X],ae=b[ee]=H?wn(b[ee]):tn(b[ee]);if(Os(ce,ae))P(ce,ae,N,null,U,L,J,z,H);else break;X--,ee--}if(F>X){if(F<=ee){const ce=ee+1,ae=ce<se?b[ce].el:B;for(;F<=ee;)P(null,b[F]=H?wn(b[F]):tn(b[F]),N,ae,U,L,J,z,H),F++}}else if(F>ee)for(;F<=X;)Ke(v[F],U,L,!0),F++;else{const ce=F,ae=F,_e=new Map;for(F=ae;F<=ee;F++){const rt=b[F]=H?wn(b[F]):tn(b[F]);rt.key!=null&&_e.set(rt.key,F)}let Ie,Le=0;const Qe=ee-ae+1;let Bt=!1,ft=0;const Fn=new Array(Qe);for(F=0;F<Qe;F++)Fn[F]=0;for(F=ce;F<=X;F++){const rt=v[F];if(Le>=Qe){Ke(rt,U,L,!0);continue}let $t;if(rt.key!=null)$t=_e.get(rt.key);else for(Ie=ae;Ie<=ee;Ie++)if(Fn[Ie-ae]===0&&Os(rt,b[Ie])){$t=Ie;break}$t===void 0?Ke(rt,U,L,!0):(Fn[$t-ae]=F+1,$t>=ft?ft=$t:Bt=!0,P(rt,b[$t],N,null,U,L,J,z,H),Le++)}const Es=Bt?Ly(Fn):zr;for(Ie=Es.length-1,F=Qe-1;F>=0;F--){const rt=ae+F,$t=b[rt],Ui=b[rt+1],Nr=rt+1<se?Ui.el||fp(Ui):B;Fn[F]===0?P(null,$t,N,Nr,U,L,J,z,H):Bt&&(Ie<0||F!==Es[Ie]?Pt($t,N,Nr,2):Ie--)}}},Pt=(v,b,N,B,U=null)=>{const{el:L,type:J,transition:z,children:H,shapeFlag:F}=v;if(F&6){Pt(v.component.subTree,b,N,B);return}if(F&128){v.suspense.move(b,N,B);return}if(F&64){J.move(v,b,N,te);return}if(J===We){r(L,b,N);for(let X=0;X<H.length;X++)Pt(H[X],b,N,B);r(v.anchor,b,N);return}if(J===sl){q(v,b,N);return}if(B!==2&&F&1&&z)if(B===0)z.persisted&&!L[tl]?r(L,b,N):(z.beforeEnter(L),r(L,b,N),bt(()=>z.enter(L),U));else{const{leave:X,delayLeave:ee,afterLeave:ce}=z,ae=()=>{v.ctx.isUnmounted?s(L):r(L,b,N)},_e=()=>{const Ie=L._isLeaving||!!L[tl];L._isLeaving&&L[tl](!0),z.persisted&&!Ie?ae():X(L,()=>{ae(),ce&&ce()})};ee?ee(L,ae,_e):_e()}else r(L,b,N)},Ke=(v,b,N,B=!1,U=!1)=>{const{type:L,props:J,ref:z,children:H,dynamicChildren:F,shapeFlag:se,patchFlag:X,dirs:ee,cacheIndex:ce,memo:ae}=v;if(X===-2&&(U=!1),z!=null&&(un(),Ys(z,null,N,v,!0),hn()),ce!=null&&(b.renderCache[ce]=void 0),se&256){b.ctx.deactivate(v);return}const _e=se&1&&ee,Ie=!Js(v);let Le;if(Ie&&(Le=J&&J.onVnodeBeforeUnmount)&&Xt(Le,b,v),se&6)pn(v.component,N,B);else{if(se&128){v.suspense.unmount(N,B);return}_e&&dr(v,null,b,"beforeUnmount"),se&64?v.type.remove(v,b,N,te,B):F&&!F.hasOnce&&(L!==We||X>0&&X&64)?mn(F,b,N,!1,!0):(L===We&&X&384||!U&&se&16)&&mn(H,b,N),B&&ze(v)}const Qe=ae!=null&&ce==null;(Ie&&(Le=J&&J.onVnodeUnmounted)||_e||Qe)&&bt(()=>{Le&&Xt(Le,b,v),_e&&dr(v,null,b,"unmounted"),Qe&&(v.el=null)},N)},ze=v=>{const{type:b,el:N,anchor:B,transition:U}=v;if(b===We){vs(N,B);return}if(b===sl){j(v);return}const L=()=>{s(N),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(v.shapeFlag&1&&U&&!U.persisted){const{leave:J,delayLeave:z}=U,H=()=>J(N,L);z?z(v.el,L,H):H()}else L()},vs=(v,b)=>{let N;for(;v!==b;)N=_(v),s(v),v=N;s(b)},pn=(v,b,N)=>{const{bum:B,scope:U,job:L,subTree:J,um:z,m:H,a:F}=v;Lh(H),Lh(F),B&&po(B),U.stop(),L&&(L.flags|=8,Ke(J,v,b,N)),z&&bt(z,b),bt(()=>{v.isUnmounted=!0},b)},mn=(v,b,N,B=!1,U=!1,L=0)=>{for(let J=L;J<v.length;J++)Ke(v[J],b,N,B,U)},Ut=v=>{if(v.shapeFlag&6)return Ut(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const b=_(v.anchor||v.el),N=b&&b[Qf];return N?_(N):b};let de=!1;const K=(v,b,N)=>{let B;v==null?b._vnode&&(Ke(b._vnode,null,null,!0),B=b._vnode.component):P(b._vnode||null,v,b,null,null,null,N),b._vnode=v,de||(de=!0,bh(B),Wf(),de=!1)},te={p:P,um:Ke,m:Pt,r:ze,mt:$e,mc:g,pc:le,pbc:T,n:Ut,o:t};return{render:K,hydrate:void 0,createApp:Ey(K)}}function rl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function fr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function My(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function kc(t,e,n=!1){const r=t.children,s=e.children;if(pe(r)&&pe(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=wn(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&kc(a,l)),l.type===aa&&(l.patchFlag===-1&&(l=s[i]=wn(l)),l.el=a.el),l.type===tr&&!l.el&&(l.el=a.el)}}function Ly(t){const e=t.slice(),n=[0];let r,s,i,a,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,t[n[l]]<h?i=l+1:a=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function dp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:dp(e)}function Lh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function fp(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?fp(e.subTree):null}const pp=t=>t.__isSuspense;function Fy(t,e){e&&e.pendingBranch?pe(t)?e.effects.push(...t):e.effects.push(t):K_(t)}const We=Symbol.for("v-fgt"),aa=Symbol.for("v-txt"),tr=Symbol.for("v-cmt"),sl=Symbol.for("v-stc"),Zs=[];let xt=null;function ne(t=!1){Zs.push(xt=t?null:[])}function Uy(){Zs.pop(),xt=Zs[Zs.length-1]||null}let ai=1;function Fh(t,e=!1){ai+=t,t<0&&xt&&e&&(xt.hasOnce=!0)}function mp(t){return t.dynamicChildren=ai>0?xt||zr:null,Uy(),ai>0&&xt&&xt.push(t),t}function ue(t,e,n,r,s,i){return mp(D(t,e,n,r,s,i,!0))}function Tr(t,e,n,r,s){return mp(et(t,e,n,r,s,!0))}function gp(t){return t?t.__v_isVNode===!0:!1}function Os(t,e){return t.type===e.type&&t.key===e.key}const _p=({key:t})=>t??null,go=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ue(t)||Et(t)||ye(t)?{i:jt,r:t,k:e,f:!!n}:t:null);function D(t,e=null,n=null,r=0,s=null,i=t===We?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&_p(e),ref:e&&go(e),scopeId:Kf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:jt};return l?(Vo(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ue(n)?8:16),ai>0&&!a&&xt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&xt.push(c),c}const et=By;function By(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===dy)&&(t=tr),gp(t)){const l=rs(t,e,!0);return n&&Vo(l,n),ai>0&&!i&&xt&&(l.shapeFlag&6?xt[xt.indexOf(t)]=l:xt.push(l)),l.patchFlag=-2,l}if(Jy(t)&&(t=t.__vccOpts),e){e=$y(e);let{class:l,style:c}=e;l&&!Ue(l)&&(e.class=nt(l)),Ce(c)&&(Ac(c)&&!pe(c)&&(c=ut({},c)),e.style=ta(c))}const a=Ue(t)?1:pp(t)?128:J_(t)?64:Ce(t)?4:ye(t)?2:0;return D(t,e,n,r,s,a,i,!0)}function $y(t){return t?Ac(t)||op(t)?ut({},t):t:null}function rs(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=t,h=e?jy(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&_p(h),ref:e&&e.ref?n&&i?pe(i)?i.concat(go(e)):[i,go(e)]:go(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==We?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&rs(t.ssContent),ssFallback:t.ssFallback&&rs(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Rc(f,c.clone(f)),f}function Ht(t=" ",e=0){return et(aa,null,t,e)}function qe(t="",e=!1){return e?(ne(),Tr(tr,null,t)):et(tr,null,t)}function tn(t){return t==null||typeof t=="boolean"?et(tr):pe(t)?et(We,null,t.slice()):gp(t)?wn(t):et(aa,null,String(t))}function wn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:rs(t)}function Vo(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(pe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Vo(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!op(e)?e._ctx=jt:s===3&&jt&&(jt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(ye(e)){if(r&65){Vo(t,{default:e});return}e={default:e,_ctx:jt},n=32}else e=String(e),r&64?(n=16,e=[Ht(e)]):n=8;t.children=e,t.shapeFlag|=n}function jy(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=nt([e.class,r.class]));else if(s==="style")e.style=ta([e.style,r.style]);else if(Jo(s)){const i=e[s],a=r[s];a&&i!==a&&!(pe(i)&&i.includes(a))?e[s]=i?[].concat(i,a):a:a==null&&i==null&&!Xo(s)&&(e[s]=a)}else s!==""&&(e[s]=r[s])}return e}function Xt(t,e,n,r=null){Qt(t,e,7,[n,r])}const qy=tp();let Wy=0;function Hy(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||qy,i={uid:Wy++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new g_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lp(r,s),emitsOptions:np(r,s),emit:null,emitted:null,propsDefaults:De,inheritAttrs:r.inheritAttrs,ctx:De,data:De,props:De,attrs:De,slots:De,refs:De,setupState:De,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ty.bind(null,i),t.ce&&t.ce(i),i}let St=null;const Ky=()=>St||jt;let Do,Bl;{const t=ea(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Do=e("__VUE_INSTANCE_SETTERS__",n=>St=n),Bl=e("__VUE_SSR_SETTERS__",n=>li=n)}const Ii=t=>{const e=St;return Do(t),t.scope.on(),()=>{t.scope.off(),Do(e)}},Uh=()=>{St&&St.scope.off(),Do(null)};function yp(t){return t.vnode.shapeFlag&4}let li=!1;function zy(t,e=!1,n=!1){e&&Bl(e);const{props:r,children:s}=t.vnode,i=yp(t);Py(t,r,i,e),Dy(t,s,n||e);const a=i?Gy(t,e):void 0;return e&&Bl(!1),a}function Gy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,fy);const{setup:r}=n;if(r){un();const s=t.setupContext=r.length>1?Yy(t):null,i=Ii(t),a=wi(r,t,0,[t.props,s]),l=vf(a);if(hn(),i(),(l||t.sp)&&!Js(t)&&Yf(t),l){if(a.then(Uh,Uh),e)return a.then(c=>{Bh(t,c)}).catch(c=>{ra(c,t,0)});t.asyncDep=a}else Bh(t,a)}else vp(t)}function Bh(t,e,n){ye(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ce(e)&&(t.setupState=$f(e)),vp(t)}function vp(t,e,n){const r=t.type;t.render||(t.render=r.render||rn);{const s=Ii(t);un();try{py(t)}finally{hn(),s()}}}const Qy={get(t,e){return yt(t,"get",""),t[e]}};function Yy(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Qy),slots:t.slots,emit:t.emit,expose:e}}function la(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy($f(M_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Xs)return Xs[n](t)},has(e,n){return n in e||n in Xs}})):t.proxy}function Jy(t){return ye(t)&&"__vccOpts"in t}const Hr=(t,e)=>$_(t,e,li),Xy="3.5.39";/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $l;const $h=typeof window<"u"&&window.trustedTypes;if($h)try{$l=$h.createPolicy("vue",{createHTML:t=>t})}catch{}const Ep=$l?t=>$l.createHTML(t):t=>t,Zy="http://www.w3.org/2000/svg",ev="http://www.w3.org/1998/Math/MathML",En=typeof document<"u"?document:null,jh=En&&En.createElement("template"),tv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?En.createElementNS(Zy,t):e==="mathml"?En.createElementNS(ev,t):n?En.createElement(t,{is:n}):En.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>En.createTextNode(t),createComment:t=>En.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>En.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{jh.innerHTML=Ep(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=jh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},nv=Symbol("_vtc");function rv(t,e,n){const r=t[nv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const No=Symbol("_vod"),wp=Symbol("_vsh"),il={name:"show",beforeMount(t,{value:e},{transition:n}){t[No]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):xs(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),xs(t,!0),r.enter(t)):r.leave(t,()=>{xs(t,!1)}):xs(t,e))},beforeUnmount(t,{value:e}){xs(t,e)}};function xs(t,e){t.style.display=e?t[No]:"none",t[wp]=!e}const sv=Symbol(""),iv=/(?:^|;)\s*display\s*:/;function ov(t,e,n){const r=t.style,s=Ue(n);let i=!1;if(n&&!s){if(e)if(Ue(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&Bs(r,l,"")}else for(const a in e)n[a]==null&&Bs(r,a,"");for(const a in n){a==="display"&&(i=!0);const l=n[a];l!=null?lv(t,a,!Ue(e)&&e?e[a]:void 0,l)||Bs(r,a,l):Bs(r,a,"")}}else if(s){if(e!==n){const a=r[sv];a&&(n+=";"+a),r.cssText=n,i=iv.test(n)}}else e&&t.removeAttribute("style");No in t&&(t[No]=i?r.display:"",t[wp]&&(r.display="none"))}const qh=/\s*!important$/;function Bs(t,e,n){if(pe(n))n.forEach(r=>Bs(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=av(t,e);qh.test(n)?t.setProperty(ir(r),n.replace(qh,""),"important"):t[r]=n}}const Wh=["Webkit","Moz","ms"],ol={};function av(t,e){const n=ol[e];if(n)return n;let r=Kt(e);if(r!=="filter"&&r in t)return ol[e]=r;r=Tf(r);for(let s=0;s<Wh.length;s++){const i=Wh[s]+r;if(i in t)return ol[e]=i}return e}function lv(t,e,n,r){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Ue(r)&&n===r}const Hh="http://www.w3.org/1999/xlink";function Kh(t,e,n,r,s,i=p_(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Hh,e.slice(6,e.length)):t.setAttributeNS(Hh,e,n):n==null||i&&!Af(n)?t.removeAttribute(e):t.setAttribute(e,i?"":cn(n)?String(n):n)}function zh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Ep(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Af(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function Br(t,e,n,r){t.addEventListener(e,n,r)}function cv(t,e,n,r){t.removeEventListener(e,n,r)}const Gh=Symbol("_vei");function uv(t,e,n,r,s=null){const i=t[Gh]||(t[Gh]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=fv(e);if(r){const h=i[e]=gv(r,s);Br(t,l,h,c)}else a&&(cv(t,l,a,c),i[e]=void 0)}}const hv=/(Once|Passive|Capture)$/,dv=/^on:?(?:Once|Passive|Capture)$/;function fv(t){let e,n;for(;(n=t.match(hv))&&!dv.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):ir(t.slice(2)),e]}let al=0;const pv=Promise.resolve(),mv=()=>al||(pv.then(()=>al=0),al=Date.now());function gv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(pe(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const a=s.slice(),l=[r];for(let c=0;c<a.length&&!r._stopped;c++){const h=a[c];h&&Qt(h,e,5,l)}}else Qt(s,e,5,[r])};return n.value=t,n.attached=mv(),n}const Qh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,_v=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?rv(t,r,a):e==="style"?ov(t,n,r):Jo(e)?Xo(e)||uv(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):yv(t,e,r,a))?(zh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Kh(t,e,r,a,i,e!=="value")):t._isVueCE&&(vv(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Ue(r)))?zh(t,Kt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Kh(t,e,r,a))};function yv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Qh(e)&&ye(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Qh(e)&&Ue(n)?!1:e in t}function vv(t,e){const n=t._def.props;if(!n)return!1;const r=Kt(e);return Array.isArray(n)?n.some(s=>Kt(s)===r):Object.keys(n).some(s=>Kt(s)===r)}const Yh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return pe(e)?n=>po(e,n):e};function Ev(t){t.target.composing=!0}function Jh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ll=Symbol("_assign");function Xh(t,e,n){return e&&(t=t.trim()),n&&(t=mc(t)),t}const Ct={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[ll]=Yh(s);const i=r||s.props&&s.props.type==="number";Br(t,e?"change":"input",a=>{a.target.composing||t[ll](Xh(t.value,n,i))}),(n||i)&&Br(t,"change",()=>{t.value=Xh(t.value,n,i)}),e||(Br(t,"compositionstart",Ev),Br(t,"compositionend",Jh),Br(t,"change",Jh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[ll]=Yh(a),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?mc(t.value):t.value,c=e??"";if(l===c)return;const h=t.getRootNode();(h instanceof Document||h instanceof ShadowRoot)&&h.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c)}},wv=["ctrl","shift","alt","meta"],Tv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>wv.some(n=>t[`${n}Key`]&&!e.includes(n))},_r=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const l=Tv[e[a]];if(l&&l(s,e))return}return t(s,...i)})},Iv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},cl=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=ir(s.key);if(e.some(a=>a===i||Iv[a]===i))return t(s)})},Av=ut({patchProp:_v},tv);let Zh;function bv(){return Zh||(Zh=Oy(Av))}const Rv=(...t)=>{const e=bv().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Pv(r);if(!s)return;const i=e._component;!ye(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,Sv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function Sv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Pv(t){return Ue(t)?document.querySelector(t):t}var ed={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Cv=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Ip={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,l=a?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,f=i>>2,m=(i&3)<<4|l>>4;let _=(l&15)<<2|h>>6,I=h&63;c||(I=64,a||(_=64)),r.push(n[f],n[m],n[_],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Tp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Cv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||m==null)throw new kv;const _=i<<2|l>>4;if(r.push(_),h!==64){const I=l<<4&240|h>>2;if(r.push(I),m!==64){const k=h<<6&192|m;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vv=function(t){const e=Tp(t);return Ip.encodeByteArray(e,!0)},Oo=function(t){return Vv(t).replace(/\./g,"")},Ap=function(t){try{return Ip.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const Nv=()=>Dv().__FIREBASE_DEFAULTS__,Ov=()=>{if(typeof process>"u"||typeof ed>"u")return;const t=ed.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},xv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ap(t[1]);return e&&JSON.parse(e)},ca=()=>{try{return Nv()||Ov()||xv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},bp=t=>{var e,n;return(n=(e=ca())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Mv=t=>{const e=bp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Rp=()=>{var t;return(t=ca())===null||t===void 0?void 0:t.config},Sp=t=>{var e;return(e=ca())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Fv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Oo(JSON.stringify(n)),Oo(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Uv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tt())}function Bv(){var t;const e=(t=ca())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $v(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function jv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wv(){const t=Tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Hv(){return!Bv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Kv(){try{return typeof indexedDB=="object"}catch{return!1}}function zv(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv="FirebaseError";class Mn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Gv,Object.setPrototypeOf(this,Mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ai.prototype.create)}}class Ai{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Qv(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Mn(s,l,r)}}function Qv(t,e){return t.replace(Yv,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Yv=/\{\$([^}]+)}/g;function Jv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(td(i)&&td(a)){if(!xo(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function td(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $s(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function js(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Xv(t,e){const n=new Zv(t,e);return n.subscribe.bind(n)}class Zv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");eE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ul),s.error===void 0&&(s.error=ul),s.complete===void 0&&(s.complete=ul);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ul(){}/**
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
 */function He(t){return t&&t._delegate?t._delegate:t}class Ar{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const mr="[DEFAULT]";/**
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
 */class tE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Lv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rE(e))try{this.getOrInitializeService({instanceIdentifier:mr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=mr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=mr){return this.instances.has(e)}getOptions(e=mr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=mr){return this.component?this.component.multipleInstances?e:mr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nE(t){return t===mr?void 0:t}function rE(t){return t.instantiationMode==="EAGER"}/**
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
 */class sE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const iE={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},oE=we.INFO,aE={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},lE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=aE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vc{constructor(e){this.name=e,this._logLevel=oE,this._logHandler=lE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?iE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const cE=(t,e)=>e.some(n=>t instanceof n);let nd,rd;function uE(){return nd||(nd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hE(){return rd||(rd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pp=new WeakMap,jl=new WeakMap,Cp=new WeakMap,hl=new WeakMap,Dc=new WeakMap;function dE(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(Yn(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Pp.set(n,t)}).catch(()=>{}),Dc.set(e,t),e}function fE(t){if(jl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});jl.set(t,e)}let ql={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return jl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Cp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pE(t){ql=t(ql)}function mE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(dl(this),e,...n);return Cp.set(r,e.sort?e.sort():[e]),Yn(r)}:hE().includes(t)?function(...e){return t.apply(dl(this),e),Yn(Pp.get(this))}:function(...e){return Yn(t.apply(dl(this),e))}}function gE(t){return typeof t=="function"?mE(t):(t instanceof IDBTransaction&&fE(t),cE(t,uE())?new Proxy(t,ql):t)}function Yn(t){if(t instanceof IDBRequest)return dE(t);if(hl.has(t))return hl.get(t);const e=gE(t);return e!==t&&(hl.set(t,e),Dc.set(e,t)),e}const dl=t=>Dc.get(t);function _E(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),l=Yn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Yn(a.result),c.oldVersion,c.newVersion,Yn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const yE=["get","getKey","getAll","getAllKeys","count"],vE=["put","add","delete","clear"],fl=new Map;function sd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fl.get(e))return fl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=vE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||yE.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return fl.set(e,i),i}pE(t=>({...t,get:(e,n,r)=>sd(e,n)||t.get(e,n,r),has:(e,n)=>!!sd(e,n)||t.has(e,n)}));/**
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
 */class EE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function wE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wl="@firebase/app",id="0.10.13";/**
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
 */const kn=new Vc("@firebase/app"),TE="@firebase/app-compat",IE="@firebase/analytics-compat",AE="@firebase/analytics",bE="@firebase/app-check-compat",RE="@firebase/app-check",SE="@firebase/auth",PE="@firebase/auth-compat",CE="@firebase/database",kE="@firebase/data-connect",VE="@firebase/database-compat",DE="@firebase/functions",NE="@firebase/functions-compat",OE="@firebase/installations",xE="@firebase/installations-compat",ME="@firebase/messaging",LE="@firebase/messaging-compat",FE="@firebase/performance",UE="@firebase/performance-compat",BE="@firebase/remote-config",$E="@firebase/remote-config-compat",jE="@firebase/storage",qE="@firebase/storage-compat",WE="@firebase/firestore",HE="@firebase/vertexai-preview",KE="@firebase/firestore-compat",zE="firebase",GE="10.14.1";/**
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
 */const Hl="[DEFAULT]",QE={[Wl]:"fire-core",[TE]:"fire-core-compat",[AE]:"fire-analytics",[IE]:"fire-analytics-compat",[RE]:"fire-app-check",[bE]:"fire-app-check-compat",[SE]:"fire-auth",[PE]:"fire-auth-compat",[CE]:"fire-rtdb",[kE]:"fire-data-connect",[VE]:"fire-rtdb-compat",[DE]:"fire-fn",[NE]:"fire-fn-compat",[OE]:"fire-iid",[xE]:"fire-iid-compat",[ME]:"fire-fcm",[LE]:"fire-fcm-compat",[FE]:"fire-perf",[UE]:"fire-perf-compat",[BE]:"fire-rc",[$E]:"fire-rc-compat",[jE]:"fire-gcs",[qE]:"fire-gcs-compat",[WE]:"fire-fst",[KE]:"fire-fst-compat",[HE]:"fire-vertex","fire-js":"fire-js",[zE]:"fire-js-all"};/**
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
 */const Mo=new Map,YE=new Map,Kl=new Map;function od(t,e){try{t.container.addComponent(e)}catch(n){kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ss(t){const e=t.name;if(Kl.has(e))return kn.debug(`There were multiple attempts to register component ${e}.`),!1;Kl.set(e,t);for(const n of Mo.values())od(n,t);for(const n of YE.values())od(n,t);return!0}function Nc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function An(t){return t.settings!==void 0}/**
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
 */const JE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jn=new Ai("app","Firebase",JE);/**
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
 */class XE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jn.create("app-deleted",{appName:this._name})}}/**
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
 */const ps=GE;function kp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Hl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Jn.create("bad-app-name",{appName:String(s)});if(n||(n=Rp()),!n)throw Jn.create("no-options");const i=Mo.get(s);if(i){if(xo(n,i.options)&&xo(r,i.config))return i;throw Jn.create("duplicate-app",{appName:s})}const a=new sE(s);for(const c of Kl.values())a.addComponent(c);const l=new XE(n,r,a);return Mo.set(s,l),l}function Vp(t=Hl){const e=Mo.get(t);if(!e&&t===Hl&&Rp())return kp();if(!e)throw Jn.create("no-app",{appName:t});return e}function Xn(t,e,n){var r;let s=(r=QE[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kn.warn(l.join(" "));return}ss(new Ar(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ZE="firebase-heartbeat-database",ew=1,ci="firebase-heartbeat-store";let pl=null;function Dp(){return pl||(pl=_E(ZE,ew,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ci)}catch(n){console.warn(n)}}}}).catch(t=>{throw Jn.create("idb-open",{originalErrorMessage:t.message})})),pl}async function tw(t){try{const n=(await Dp()).transaction(ci),r=await n.objectStore(ci).get(Np(t));return await n.done,r}catch(e){if(e instanceof Mn)kn.warn(e.message);else{const n=Jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kn.warn(n.message)}}}async function ad(t,e){try{const r=(await Dp()).transaction(ci,"readwrite");await r.objectStore(ci).put(e,Np(t)),await r.done}catch(n){if(n instanceof Mn)kn.warn(n.message);else{const r=Jn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});kn.warn(r.message)}}}function Np(t){return`${t.name}!${t.options.appId}`}/**
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
 */const nw=1024,rw=30*24*60*60*1e3;class sw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ow(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ld();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=rw}),this._storage.overwrite(this._heartbeatsCache))}catch(r){kn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ld(),{heartbeatsToSend:r,unsentEntries:s}=iw(this._heartbeatsCache.heartbeats),i=Oo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return kn.warn(n),""}}}function ld(){return new Date().toISOString().substring(0,10)}function iw(t,e=nw){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),cd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),cd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ow{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kv()?zv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await tw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ad(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ad(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function cd(t){return Oo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function aw(t){ss(new Ar("platform-logger",e=>new EE(e),"PRIVATE")),ss(new Ar("heartbeat",e=>new sw(e),"PRIVATE")),Xn(Wl,id,t),Xn(Wl,id,"esm2017"),Xn("fire-js","")}aw("");var ud=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ir,Op;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,g){function y(){}y.prototype=g.prototype,w.D=g.prototype,w.prototype=new y,w.prototype.constructor=w,w.C=function(T,A,R){for(var E=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)E[$e-2]=arguments[$e];return g.prototype[A].apply(T,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,g,y){y||(y=0);var T=Array(16);if(typeof g=="string")for(var A=0;16>A;++A)T[A]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(A=0;16>A;++A)T[A]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=w.g[0],y=w.g[1],A=w.g[2];var R=w.g[3],E=g+(R^y&(A^R))+T[0]+3614090360&4294967295;g=y+(E<<7&4294967295|E>>>25),E=R+(A^g&(y^A))+T[1]+3905402710&4294967295,R=g+(E<<12&4294967295|E>>>20),E=A+(y^R&(g^y))+T[2]+606105819&4294967295,A=R+(E<<17&4294967295|E>>>15),E=y+(g^A&(R^g))+T[3]+3250441966&4294967295,y=A+(E<<22&4294967295|E>>>10),E=g+(R^y&(A^R))+T[4]+4118548399&4294967295,g=y+(E<<7&4294967295|E>>>25),E=R+(A^g&(y^A))+T[5]+1200080426&4294967295,R=g+(E<<12&4294967295|E>>>20),E=A+(y^R&(g^y))+T[6]+2821735955&4294967295,A=R+(E<<17&4294967295|E>>>15),E=y+(g^A&(R^g))+T[7]+4249261313&4294967295,y=A+(E<<22&4294967295|E>>>10),E=g+(R^y&(A^R))+T[8]+1770035416&4294967295,g=y+(E<<7&4294967295|E>>>25),E=R+(A^g&(y^A))+T[9]+2336552879&4294967295,R=g+(E<<12&4294967295|E>>>20),E=A+(y^R&(g^y))+T[10]+4294925233&4294967295,A=R+(E<<17&4294967295|E>>>15),E=y+(g^A&(R^g))+T[11]+2304563134&4294967295,y=A+(E<<22&4294967295|E>>>10),E=g+(R^y&(A^R))+T[12]+1804603682&4294967295,g=y+(E<<7&4294967295|E>>>25),E=R+(A^g&(y^A))+T[13]+4254626195&4294967295,R=g+(E<<12&4294967295|E>>>20),E=A+(y^R&(g^y))+T[14]+2792965006&4294967295,A=R+(E<<17&4294967295|E>>>15),E=y+(g^A&(R^g))+T[15]+1236535329&4294967295,y=A+(E<<22&4294967295|E>>>10),E=g+(A^R&(y^A))+T[1]+4129170786&4294967295,g=y+(E<<5&4294967295|E>>>27),E=R+(y^A&(g^y))+T[6]+3225465664&4294967295,R=g+(E<<9&4294967295|E>>>23),E=A+(g^y&(R^g))+T[11]+643717713&4294967295,A=R+(E<<14&4294967295|E>>>18),E=y+(R^g&(A^R))+T[0]+3921069994&4294967295,y=A+(E<<20&4294967295|E>>>12),E=g+(A^R&(y^A))+T[5]+3593408605&4294967295,g=y+(E<<5&4294967295|E>>>27),E=R+(y^A&(g^y))+T[10]+38016083&4294967295,R=g+(E<<9&4294967295|E>>>23),E=A+(g^y&(R^g))+T[15]+3634488961&4294967295,A=R+(E<<14&4294967295|E>>>18),E=y+(R^g&(A^R))+T[4]+3889429448&4294967295,y=A+(E<<20&4294967295|E>>>12),E=g+(A^R&(y^A))+T[9]+568446438&4294967295,g=y+(E<<5&4294967295|E>>>27),E=R+(y^A&(g^y))+T[14]+3275163606&4294967295,R=g+(E<<9&4294967295|E>>>23),E=A+(g^y&(R^g))+T[3]+4107603335&4294967295,A=R+(E<<14&4294967295|E>>>18),E=y+(R^g&(A^R))+T[8]+1163531501&4294967295,y=A+(E<<20&4294967295|E>>>12),E=g+(A^R&(y^A))+T[13]+2850285829&4294967295,g=y+(E<<5&4294967295|E>>>27),E=R+(y^A&(g^y))+T[2]+4243563512&4294967295,R=g+(E<<9&4294967295|E>>>23),E=A+(g^y&(R^g))+T[7]+1735328473&4294967295,A=R+(E<<14&4294967295|E>>>18),E=y+(R^g&(A^R))+T[12]+2368359562&4294967295,y=A+(E<<20&4294967295|E>>>12),E=g+(y^A^R)+T[5]+4294588738&4294967295,g=y+(E<<4&4294967295|E>>>28),E=R+(g^y^A)+T[8]+2272392833&4294967295,R=g+(E<<11&4294967295|E>>>21),E=A+(R^g^y)+T[11]+1839030562&4294967295,A=R+(E<<16&4294967295|E>>>16),E=y+(A^R^g)+T[14]+4259657740&4294967295,y=A+(E<<23&4294967295|E>>>9),E=g+(y^A^R)+T[1]+2763975236&4294967295,g=y+(E<<4&4294967295|E>>>28),E=R+(g^y^A)+T[4]+1272893353&4294967295,R=g+(E<<11&4294967295|E>>>21),E=A+(R^g^y)+T[7]+4139469664&4294967295,A=R+(E<<16&4294967295|E>>>16),E=y+(A^R^g)+T[10]+3200236656&4294967295,y=A+(E<<23&4294967295|E>>>9),E=g+(y^A^R)+T[13]+681279174&4294967295,g=y+(E<<4&4294967295|E>>>28),E=R+(g^y^A)+T[0]+3936430074&4294967295,R=g+(E<<11&4294967295|E>>>21),E=A+(R^g^y)+T[3]+3572445317&4294967295,A=R+(E<<16&4294967295|E>>>16),E=y+(A^R^g)+T[6]+76029189&4294967295,y=A+(E<<23&4294967295|E>>>9),E=g+(y^A^R)+T[9]+3654602809&4294967295,g=y+(E<<4&4294967295|E>>>28),E=R+(g^y^A)+T[12]+3873151461&4294967295,R=g+(E<<11&4294967295|E>>>21),E=A+(R^g^y)+T[15]+530742520&4294967295,A=R+(E<<16&4294967295|E>>>16),E=y+(A^R^g)+T[2]+3299628645&4294967295,y=A+(E<<23&4294967295|E>>>9),E=g+(A^(y|~R))+T[0]+4096336452&4294967295,g=y+(E<<6&4294967295|E>>>26),E=R+(y^(g|~A))+T[7]+1126891415&4294967295,R=g+(E<<10&4294967295|E>>>22),E=A+(g^(R|~y))+T[14]+2878612391&4294967295,A=R+(E<<15&4294967295|E>>>17),E=y+(R^(A|~g))+T[5]+4237533241&4294967295,y=A+(E<<21&4294967295|E>>>11),E=g+(A^(y|~R))+T[12]+1700485571&4294967295,g=y+(E<<6&4294967295|E>>>26),E=R+(y^(g|~A))+T[3]+2399980690&4294967295,R=g+(E<<10&4294967295|E>>>22),E=A+(g^(R|~y))+T[10]+4293915773&4294967295,A=R+(E<<15&4294967295|E>>>17),E=y+(R^(A|~g))+T[1]+2240044497&4294967295,y=A+(E<<21&4294967295|E>>>11),E=g+(A^(y|~R))+T[8]+1873313359&4294967295,g=y+(E<<6&4294967295|E>>>26),E=R+(y^(g|~A))+T[15]+4264355552&4294967295,R=g+(E<<10&4294967295|E>>>22),E=A+(g^(R|~y))+T[6]+2734768916&4294967295,A=R+(E<<15&4294967295|E>>>17),E=y+(R^(A|~g))+T[13]+1309151649&4294967295,y=A+(E<<21&4294967295|E>>>11),E=g+(A^(y|~R))+T[4]+4149444226&4294967295,g=y+(E<<6&4294967295|E>>>26),E=R+(y^(g|~A))+T[11]+3174756917&4294967295,R=g+(E<<10&4294967295|E>>>22),E=A+(g^(R|~y))+T[2]+718787259&4294967295,A=R+(E<<15&4294967295|E>>>17),E=y+(R^(A|~g))+T[9]+3951481745&4294967295,w.g[0]=w.g[0]+g&4294967295,w.g[1]=w.g[1]+(A+(E<<21&4294967295|E>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+R&4294967295}r.prototype.u=function(w,g){g===void 0&&(g=w.length);for(var y=g-this.blockSize,T=this.B,A=this.h,R=0;R<g;){if(A==0)for(;R<=y;)s(this,w,R),R+=this.blockSize;if(typeof w=="string"){for(;R<g;)if(T[A++]=w.charCodeAt(R++),A==this.blockSize){s(this,T),A=0;break}}else for(;R<g;)if(T[A++]=w[R++],A==this.blockSize){s(this,T),A=0;break}}this.h=A,this.o+=g},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var g=1;g<w.length-8;++g)w[g]=0;var y=8*this.o;for(g=w.length-8;g<w.length;++g)w[g]=y&255,y/=256;for(this.u(w),w=Array(16),g=y=0;4>g;++g)for(var T=0;32>T;T+=8)w[y++]=this.g[g]>>>T&255;return w};function i(w,g){var y=l;return Object.prototype.hasOwnProperty.call(y,w)?y[w]:y[w]=g(w)}function a(w,g){this.h=g;for(var y=[],T=!0,A=w.length-1;0<=A;A--){var R=w[A]|0;T&&R==g||(y[A]=R,T=!1)}this.g=y}var l={};function c(w){return-128<=w&&128>w?i(w,function(g){return new a([g|0],0>g?-1:0)}):new a([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return m;if(0>w)return S(h(-w));for(var g=[],y=1,T=0;w>=y;T++)g[T]=w/y|0,y*=4294967296;return new a(g,0)}function f(w,g){if(w.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(w.charAt(0)=="-")return S(f(w.substring(1),g));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(g,8)),T=m,A=0;A<w.length;A+=8){var R=Math.min(8,w.length-A),E=parseInt(w.substring(A,A+R),g);8>R?(R=h(Math.pow(g,R)),T=T.j(R).add(h(E))):(T=T.j(y),T=T.add(h(E)))}return T}var m=c(0),_=c(1),I=c(16777216);t=a.prototype,t.m=function(){if(P(this))return-S(this).m();for(var w=0,g=1,y=0;y<this.g.length;y++){var T=this.i(y);w+=(0<=T?T:4294967296+T)*g,g*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(k(this))return"0";if(P(this))return"-"+S(this).toString(w);for(var g=h(Math.pow(w,6)),y=this,T="";;){var A=j(y,g).g;y=x(y,A.j(g));var R=((0<y.g.length?y.g[0]:y.h)>>>0).toString(w);if(y=A,k(y))return R+T;for(;6>R.length;)R="0"+R;T=R+T}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function k(w){if(w.h!=0)return!1;for(var g=0;g<w.g.length;g++)if(w.g[g]!=0)return!1;return!0}function P(w){return w.h==-1}t.l=function(w){return w=x(this,w),P(w)?-1:k(w)?0:1};function S(w){for(var g=w.g.length,y=[],T=0;T<g;T++)y[T]=~w.g[T];return new a(y,~w.h).add(_)}t.abs=function(){return P(this)?S(this):this},t.add=function(w){for(var g=Math.max(this.g.length,w.g.length),y=[],T=0,A=0;A<=g;A++){var R=T+(this.i(A)&65535)+(w.i(A)&65535),E=(R>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);T=E>>>16,R&=65535,E&=65535,y[A]=E<<16|R}return new a(y,y[y.length-1]&-2147483648?-1:0)};function x(w,g){return w.add(S(g))}t.j=function(w){if(k(this)||k(w))return m;if(P(this))return P(w)?S(this).j(S(w)):S(S(this).j(w));if(P(w))return S(this.j(S(w)));if(0>this.l(I)&&0>w.l(I))return h(this.m()*w.m());for(var g=this.g.length+w.g.length,y=[],T=0;T<2*g;T++)y[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<w.g.length;A++){var R=this.i(T)>>>16,E=this.i(T)&65535,$e=w.i(A)>>>16,ke=w.i(A)&65535;y[2*T+2*A]+=E*ke,M(y,2*T+2*A),y[2*T+2*A+1]+=R*ke,M(y,2*T+2*A+1),y[2*T+2*A+1]+=E*$e,M(y,2*T+2*A+1),y[2*T+2*A+2]+=R*$e,M(y,2*T+2*A+2)}for(T=0;T<g;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=g;T<2*g;T++)y[T]=0;return new a(y,0)};function M(w,g){for(;(w[g]&65535)!=w[g];)w[g+1]+=w[g]>>>16,w[g]&=65535,g++}function q(w,g){this.g=w,this.h=g}function j(w,g){if(k(g))throw Error("division by zero");if(k(w))return new q(m,m);if(P(w))return g=j(S(w),g),new q(S(g.g),S(g.h));if(P(g))return g=j(w,S(g)),new q(S(g.g),g.h);if(30<w.g.length){if(P(w)||P(g))throw Error("slowDivide_ only works with positive integers.");for(var y=_,T=g;0>=T.l(w);)y=ie(y),T=ie(T);var A=oe(y,1),R=oe(T,1);for(T=oe(T,2),y=oe(y,2);!k(T);){var E=R.add(T);0>=E.l(w)&&(A=A.add(y),R=E),T=oe(T,1),y=oe(y,1)}return g=x(w,A.j(g)),new q(A,g)}for(A=m;0<=w.l(g);){for(y=Math.max(1,Math.floor(w.m()/g.m())),T=Math.ceil(Math.log(y)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),R=h(y),E=R.j(g);P(E)||0<E.l(w);)y-=T,R=h(y),E=R.j(g);k(R)&&(R=_),A=A.add(R),w=x(w,E)}return new q(A,w)}t.A=function(w){return j(this,w).h},t.and=function(w){for(var g=Math.max(this.g.length,w.g.length),y=[],T=0;T<g;T++)y[T]=this.i(T)&w.i(T);return new a(y,this.h&w.h)},t.or=function(w){for(var g=Math.max(this.g.length,w.g.length),y=[],T=0;T<g;T++)y[T]=this.i(T)|w.i(T);return new a(y,this.h|w.h)},t.xor=function(w){for(var g=Math.max(this.g.length,w.g.length),y=[],T=0;T<g;T++)y[T]=this.i(T)^w.i(T);return new a(y,this.h^w.h)};function ie(w){for(var g=w.g.length+1,y=[],T=0;T<g;T++)y[T]=w.i(T)<<1|w.i(T-1)>>>31;return new a(y,w.h)}function oe(w,g){var y=g>>5;g%=32;for(var T=w.g.length-y,A=[],R=0;R<T;R++)A[R]=0<g?w.i(R+y)>>>g|w.i(R+y+1)<<32-g:w.i(R+y);return new a(A,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Op=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Ir=a}).apply(typeof ud<"u"?ud:typeof self<"u"?self:typeof window<"u"?window:{});var io=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xp,qs,Mp,_o,zl,Lp,Fp,Up;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof io=="object"&&io];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)e:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var C=o[p];if(!(C in d))break e;d=d[C]}o=o[o.length-1],p=d[o],u=u(p),u!=p&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var d=0,p=!1,C={next:function(){if(!p&&d<o.length){var V=d++;return{value:u(V,o[V]),done:!1}}return p=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function m(o,u,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,p),o.apply(u,C)}}return function(){return o.apply(u,arguments)}}function _(o,u,d){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,_.apply(null,arguments)}function I(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function k(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,C,V){for(var Q=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)Q[Ve-2]=arguments[Ve];return u.prototype[C].apply(p,Q)}}function P(o){const u=o.length;if(0<u){const d=Array(u);for(let p=0;p<u;p++)d[p]=o[p];return d}return[]}function S(o,u){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(c(p)){const C=o.length||0,V=p.length||0;o.length=C+V;for(let Q=0;Q<V;Q++)o[C+Q]=p[Q]}else o.push(p)}}class x{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function M(o){return/^[\s\xa0]*$/.test(o)}function q(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function j(o){return j[" "](o),o}j[" "]=function(){};var ie=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function oe(o,u,d){for(const p in o)u.call(d,o[p],p,o)}function w(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function g(o){const u={};for(const d in o)u[d]=o[d];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,u){let d,p;for(let C=1;C<arguments.length;C++){p=arguments[C];for(d in p)o[d]=p[d];for(let V=0;V<y.length;V++)d=y[V],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function A(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function R(o){l.setTimeout(()=>{throw o},0)}function E(){var o=dt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class $e{constructor(){this.h=this.g=null}add(u,d){const p=ke.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var ke=new x(()=>new W,o=>o.reset());class W{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let G,le=!1,dt=new $e,Ft=()=>{const o=l.Promise.resolve(void 0);G=()=>{o.then(Pt)}};var Pt=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(d){R(d)}var u=ke;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}le=!1};function Ke(){this.s=this.s,this.C=this.C}Ke.prototype.s=!1,Ke.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ke.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ze(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}ze.prototype.h=function(){this.defaultPrevented=!0};var vs=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return o}();function pn(o,u){if(ze.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(ie){e:{try{j(u.nodeName);var C=!0;break e}catch{}C=!1}C||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:mn[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&pn.aa.h.call(this)}}k(pn,ze);var mn={2:"touch",3:"pen",4:"mouse"};pn.prototype.h=function(){pn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Ut="closure_listenable_"+(1e6*Math.random()|0),de=0;function K(o,u,d,p,C){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=C,this.key=++de,this.da=this.fa=!1}function te(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Xe(o){this.src=o,this.g={},this.h=0}Xe.prototype.add=function(o,u,d,p,C){var V=o.toString();o=this.g[V],o||(o=this.g[V]=[],this.h++);var Q=b(o,u,p,C);return-1<Q?(u=o[Q],d||(u.fa=!1)):(u=new K(u,this.src,V,!!p,C),u.fa=d,o.push(u)),u};function v(o,u){var d=u.type;if(d in o.g){var p=o.g[d],C=Array.prototype.indexOf.call(p,u,void 0),V;(V=0<=C)&&Array.prototype.splice.call(p,C,1),V&&(te(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function b(o,u,d,p){for(var C=0;C<o.length;++C){var V=o[C];if(!V.da&&V.listener==u&&V.capture==!!d&&V.ha==p)return C}return-1}var N="closure_lm_"+(1e6*Math.random()|0),B={};function U(o,u,d,p,C){if(Array.isArray(u)){for(var V=0;V<u.length;V++)U(o,u[V],d,p,C);return null}return d=ce(d),o&&o[Ut]?o.K(u,d,h(p)?!!p.capture:!1,C):L(o,u,d,!1,p,C)}function L(o,u,d,p,C,V){if(!u)throw Error("Invalid event type");var Q=h(C)?!!C.capture:!!C,Ve=X(o);if(Ve||(o[N]=Ve=new Xe(o)),d=Ve.add(u,d,p,Q,V),d.proxy)return d;if(p=J(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)vs||(C=Q),C===void 0&&(C=!1),o.addEventListener(u.toString(),p,C);else if(o.attachEvent)o.attachEvent(F(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function J(){function o(d){return u.call(o.src,o.listener,d)}const u=se;return o}function z(o,u,d,p,C){if(Array.isArray(u))for(var V=0;V<u.length;V++)z(o,u[V],d,p,C);else p=h(p)?!!p.capture:!!p,d=ce(d),o&&o[Ut]?(o=o.i,u=String(u).toString(),u in o.g&&(V=o.g[u],d=b(V,d,p,C),-1<d&&(te(V[d]),Array.prototype.splice.call(V,d,1),V.length==0&&(delete o.g[u],o.h--)))):o&&(o=X(o))&&(u=o.g[u.toString()],o=-1,u&&(o=b(u,d,p,C)),(d=-1<o?u[o]:null)&&H(d))}function H(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Ut])v(u.i,o);else{var d=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(d,p,o.capture):u.detachEvent?u.detachEvent(F(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=X(u))?(v(d,o),d.h==0&&(d.src=null,u[N]=null)):te(o)}}}function F(o){return o in B?B[o]:B[o]="on"+o}function se(o,u){if(o.da)o=!0;else{u=new pn(u,this);var d=o.listener,p=o.ha||o.src;o.fa&&H(o),o=d.call(p,u)}return o}function X(o){return o=o[N],o instanceof Xe?o:null}var ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function ce(o){return typeof o=="function"?o:(o[ee]||(o[ee]=function(u){return o.handleEvent(u)}),o[ee])}function ae(){Ke.call(this),this.i=new Xe(this),this.M=this,this.F=null}k(ae,Ke),ae.prototype[Ut]=!0,ae.prototype.removeEventListener=function(o,u,d,p){z(this,o,u,d,p)};function _e(o,u){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new ze(u,o);else if(u instanceof ze)u.target=u.target||o;else{var C=u;u=new ze(p,o),T(u,C)}if(C=!0,d)for(var V=d.length-1;0<=V;V--){var Q=u.g=d[V];C=Ie(Q,p,!0,u)&&C}if(Q=u.g=o,C=Ie(Q,p,!0,u)&&C,C=Ie(Q,p,!1,u)&&C,d)for(V=0;V<d.length;V++)Q=u.g=d[V],C=Ie(Q,p,!1,u)&&C}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],p=0;p<d.length;p++)te(d[p]);delete o.g[u],o.h--}}this.F=null},ae.prototype.K=function(o,u,d,p){return this.i.add(String(o),u,!1,d,p)},ae.prototype.L=function(o,u,d,p){return this.i.add(String(o),u,!0,d,p)};function Ie(o,u,d,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var C=!0,V=0;V<u.length;++V){var Q=u[V];if(Q&&!Q.da&&Q.capture==d){var Ve=Q.listener,st=Q.ha||Q.src;Q.fa&&v(o.i,Q),C=Ve.call(st,p)!==!1&&C}}return C&&!p.defaultPrevented}function Le(o,u,d){if(typeof o=="function")d&&(o=_(o,d));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function Qe(o){o.g=Le(()=>{o.g=null,o.i&&(o.i=!1,Qe(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Bt extends Ke{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Qe(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ft(o){Ke.call(this),this.h=o,this.g={}}k(ft,Ke);var Fn=[];function Es(o){oe(o.g,function(u,d){this.g.hasOwnProperty(d)&&H(u)},o),o.g={}}ft.prototype.N=function(){ft.aa.N.call(this),Es(this)},ft.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var rt=l.JSON.stringify,$t=l.JSON.parse,Ui=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Nr(){}Nr.prototype.h=null;function ku(o){return o.h||(o.h=o.i())}function Vu(){}var ws={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Oa(){ze.call(this,"d")}k(Oa,ze);function xa(){ze.call(this,"c")}k(xa,ze);var lr={},Du=null;function Bi(){return Du=Du||new ae}lr.La="serverreachability";function Nu(o){ze.call(this,lr.La,o)}k(Nu,ze);function Ts(o){const u=Bi();_e(u,new Nu(u))}lr.STAT_EVENT="statevent";function Ou(o,u){ze.call(this,lr.STAT_EVENT,o),this.stat=u}k(Ou,ze);function It(o){const u=Bi();_e(u,new Ou(u,o))}lr.Ma="timingevent";function xu(o,u){ze.call(this,lr.Ma,o),this.size=u}k(xu,ze);function Is(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function As(){this.g=!0}As.prototype.xa=function(){this.g=!1};function Mg(o,u,d,p,C,V){o.info(function(){if(o.g)if(V)for(var Q="",Ve=V.split("&"),st=0;st<Ve.length;st++){var Ae=Ve[st].split("=");if(1<Ae.length){var pt=Ae[0];Ae=Ae[1];var mt=pt.split("_");Q=2<=mt.length&&mt[1]=="type"?Q+(pt+"="+Ae+"&"):Q+(pt+"=redacted&")}}else Q=null;else Q=V;return"XMLHTTP REQ ("+p+") [attempt "+C+"]: "+u+`
`+d+`
`+Q})}function Lg(o,u,d,p,C,V,Q){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+C+"]: "+u+`
`+d+`
`+V+" "+Q})}function Or(o,u,d,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Ug(o,d)+(p?" "+p:"")})}function Fg(o,u){o.info(function(){return"TIMEOUT: "+u})}As.prototype.info=function(){};function Ug(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var C=p[1];if(Array.isArray(C)&&!(1>C.length)){var V=C[0];if(V!="noop"&&V!="stop"&&V!="close")for(var Q=1;Q<C.length;Q++)C[Q]=""}}}}return rt(d)}catch{return u}}var $i={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Mu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ma;function ji(){}k(ji,Nr),ji.prototype.g=function(){return new XMLHttpRequest},ji.prototype.i=function(){return{}},Ma=new ji;function Un(o,u,d,p){this.j=o,this.i=u,this.l=d,this.R=p||1,this.U=new ft(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Lu}function Lu(){this.i=null,this.g="",this.h=!1}var Fu={},La={};function Fa(o,u,d){o.L=1,o.v=Ki(gn(u)),o.m=d,o.P=!0,Uu(o,null)}function Uu(o,u){o.F=Date.now(),qi(o),o.A=gn(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Zu(d.i,"t",p),o.C=0,d=o.j.J,o.h=new Lu,o.g=_h(o.j,d?u:null,!o.m),0<o.O&&(o.M=new Bt(_(o.Y,o,o.g),o.O)),u=o.U,d=o.g,p=o.ca;var C="readystatechange";Array.isArray(C)||(C&&(Fn[0]=C.toString()),C=Fn);for(var V=0;V<C.length;V++){var Q=U(d,C[V],p||u.handleEvent,!1,u.h||u);if(!Q)break;u.g[Q.key]=Q}u=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Ts(),Mg(o.i,o.u,o.A,o.l,o.R,o.m)}Un.prototype.ca=function(o){o=o.target;const u=this.M;u&&_n(o)==3?u.j():this.Y(o)},Un.prototype.Y=function(o){try{if(o==this.g)e:{const mt=_n(this.g);var u=this.g.Ba();const Lr=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||oh(this.g)))){this.J||mt!=4||u==7||(u==8||0>=Lr?Ts(3):Ts(2)),Ua(this);var d=this.g.Z();this.X=d;t:if(Bu(this)){var p=oh(this.g);o="";var C=p.length,V=_n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cr(this),bs(this);var Q="";break t}this.h.i=new l.TextDecoder}for(u=0;u<C;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(V&&u==C-1)});p.length=0,this.h.g+=o,this.C=0,Q=this.h.g}else Q=this.g.oa();if(this.o=d==200,Lg(this.i,this.u,this.A,this.l,this.R,mt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,st=this.g;if((Ve=st.g?st.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(Ve)){var Ae=Ve;break t}}Ae=null}if(d=Ae)Or(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ba(this,d);else{this.o=!1,this.s=3,It(12),cr(this),bs(this);break e}}if(this.P){d=!0;let Wt;for(;!this.J&&this.C<Q.length;)if(Wt=Bg(this,Q),Wt==La){mt==4&&(this.s=4,It(14),d=!1),Or(this.i,this.l,null,"[Incomplete Response]");break}else if(Wt==Fu){this.s=4,It(15),Or(this.i,this.l,Q,"[Invalid Chunk]"),d=!1;break}else Or(this.i,this.l,Wt,null),Ba(this,Wt);if(Bu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||Q.length!=0||this.h.h||(this.s=1,It(16),d=!1),this.o=this.o&&d,!d)Or(this.i,this.l,Q,"[Invalid Chunked Response]"),cr(this),bs(this);else if(0<Q.length&&!this.W){this.W=!0;var pt=this.j;pt.g==this&&pt.ba&&!pt.M&&(pt.j.info("Great, no buffering proxy detected. Bytes received: "+Q.length),Ka(pt),pt.M=!0,It(11))}}else Or(this.i,this.l,Q,null),Ba(this,Q);mt==4&&cr(this),this.o&&!this.J&&(mt==4?fh(this.j,this):(this.o=!1,qi(this)))}else r_(this.g),d==400&&0<Q.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),cr(this),bs(this)}}}catch{}finally{}};function Bu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Bg(o,u){var d=o.C,p=u.indexOf(`
`,d);return p==-1?La:(d=Number(u.substring(d,p)),isNaN(d)?Fu:(p+=1,p+d>u.length?La:(u=u.slice(p,p+d),o.C=p+d,u)))}Un.prototype.cancel=function(){this.J=!0,cr(this)};function qi(o){o.S=Date.now()+o.I,$u(o,o.I)}function $u(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Is(_(o.ba,o),u)}function Ua(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Un.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Fg(this.i,this.A),this.L!=2&&(Ts(),It(17)),cr(this),this.s=2,bs(this)):$u(this,this.S-o)};function bs(o){o.j.G==0||o.J||fh(o.j,o)}function cr(o){Ua(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Es(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Ba(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||$a(d.h,o))){if(!o.K&&$a(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var C=p;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Xi(d),Yi(d);else break e;Ha(d),It(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=Is(_(d.Za,d),6e3));if(1>=Wu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else hr(d,11)}else if((o.K||d.g==o)&&Xi(d),!M(u))for(C=d.Da.g.parse(u),u=0;u<C.length;u++){let Ae=C[u];if(d.T=Ae[0],Ae=Ae[1],d.G==2)if(Ae[0]=="c"){d.K=Ae[1],d.ia=Ae[2];const pt=Ae[3];pt!=null&&(d.la=pt,d.j.info("VER="+d.la));const mt=Ae[4];mt!=null&&(d.Aa=mt,d.j.info("SVER="+d.Aa));const Lr=Ae[5];Lr!=null&&typeof Lr=="number"&&0<Lr&&(p=1.5*Lr,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Wt=o.g;if(Wt){const eo=Wt.g?Wt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(eo){var V=p.h;V.g||eo.indexOf("spdy")==-1&&eo.indexOf("quic")==-1&&eo.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(ja(V,V.h),V.h=null))}if(p.D){const za=Wt.g?Wt.g.getResponseHeader("X-HTTP-Session-Id"):null;za&&(p.ya=za,Me(p.I,p.D,za))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var Q=o;if(p.qa=gh(p,p.J?p.ia:null,p.W),Q.K){Hu(p.h,Q);var Ve=Q,st=p.L;st&&(Ve.I=st),Ve.B&&(Ua(Ve),qi(Ve)),p.g=Q}else hh(p);0<d.i.length&&Ji(d)}else Ae[0]!="stop"&&Ae[0]!="close"||hr(d,7);else d.G==3&&(Ae[0]=="stop"||Ae[0]=="close"?Ae[0]=="stop"?hr(d,7):Wa(d):Ae[0]!="noop"&&d.l&&d.l.ta(Ae),d.v=0)}}Ts(4)}catch{}}var $g=class{constructor(o,u){this.g=o,this.map=u}};function ju(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function qu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Wu(o){return o.h?1:o.g?o.g.size:0}function $a(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function ja(o,u){o.g?o.g.add(u):o.h=u}function Hu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}ju.prototype.cancel=function(){if(this.i=Ku(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ku(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return P(o.i)}function jg(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],d=o.length,p=0;p<d;p++)u.push(o[p]);return u}u=[],d=0;for(p in o)u[d++]=o[p];return u}function qg(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const p in o)u[d++]=p;return u}}}function zu(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=qg(o),p=jg(o),C=p.length,V=0;V<C;V++)u.call(void 0,p[V],d&&d[V],o)}var Gu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wg(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),C=null;if(0<=p){var V=o[d].substring(0,p);C=o[d].substring(p+1)}else V=o[d];u(V,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function ur(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof ur){this.h=o.h,Wi(this,o.j),this.o=o.o,this.g=o.g,Hi(this,o.s),this.l=o.l;var u=o.i,d=new Ps;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Qu(this,d),this.m=o.m}else o&&(u=String(o).match(Gu))?(this.h=!1,Wi(this,u[1]||"",!0),this.o=Rs(u[2]||""),this.g=Rs(u[3]||"",!0),Hi(this,u[4]),this.l=Rs(u[5]||"",!0),Qu(this,u[6]||"",!0),this.m=Rs(u[7]||"")):(this.h=!1,this.i=new Ps(null,this.h))}ur.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Ss(u,Yu,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Ss(u,Yu,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Ss(d,d.charAt(0)=="/"?zg:Kg,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Ss(d,Qg)),o.join("")};function gn(o){return new ur(o)}function Wi(o,u,d){o.j=d?Rs(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Hi(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Qu(o,u,d){u instanceof Ps?(o.i=u,Yg(o.i,o.h)):(d||(u=Ss(u,Gg)),o.i=new Ps(u,o.h))}function Me(o,u,d){o.i.set(u,d)}function Ki(o){return Me(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Rs(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ss(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,Hg),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Hg(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Yu=/[#\/\?@]/g,Kg=/[#\?:]/g,zg=/[#\?]/g,Gg=/[#\?@]/g,Qg=/#/g;function Ps(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Bn(o){o.g||(o.g=new Map,o.h=0,o.i&&Wg(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=Ps.prototype,t.add=function(o,u){Bn(this),this.i=null,o=xr(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function Ju(o,u){Bn(o),u=xr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Xu(o,u){return Bn(o),u=xr(o,u),o.g.has(u)}t.forEach=function(o,u){Bn(this),this.g.forEach(function(d,p){d.forEach(function(C){o.call(u,C,p,this)},this)},this)},t.na=function(){Bn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let p=0;p<u.length;p++){const C=o[p];for(let V=0;V<C.length;V++)d.push(u[p])}return d},t.V=function(o){Bn(this);let u=[];if(typeof o=="string")Xu(this,o)&&(u=u.concat(this.g.get(xr(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},t.set=function(o,u){return Bn(this),this.i=null,o=xr(this,o),Xu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Zu(o,u,d){Ju(o,u),0<d.length&&(o.i=null,o.g.set(xr(o,u),P(d)),o.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var p=u[d];const V=encodeURIComponent(String(p)),Q=this.V(p);for(p=0;p<Q.length;p++){var C=V;Q[p]!==""&&(C+="="+encodeURIComponent(String(Q[p]))),o.push(C)}}return this.i=o.join("&")};function xr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Yg(o,u){u&&!o.j&&(Bn(o),o.i=null,o.g.forEach(function(d,p){var C=p.toLowerCase();p!=C&&(Ju(this,p),Zu(this,C,d))},o)),o.j=u}function Jg(o,u){const d=new As;if(l.Image){const p=new Image;p.onload=I($n,d,"TestLoadImage: loaded",!0,u,p),p.onerror=I($n,d,"TestLoadImage: error",!1,u,p),p.onabort=I($n,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=I($n,d,"TestLoadImage: timeout",!1,u,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function Xg(o,u){const d=new As,p=new AbortController,C=setTimeout(()=>{p.abort(),$n(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(V=>{clearTimeout(C),V.ok?$n(d,"TestPingServer: ok",!0,u):$n(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),$n(d,"TestPingServer: error",!1,u)})}function $n(o,u,d,p,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),p(d)}catch{}}function Zg(){this.g=new Ui}function e_(o,u,d){const p=d||"";try{zu(o,function(C,V){let Q=C;h(C)&&(Q=rt(C)),u.push(p+V+"="+encodeURIComponent(Q))})}catch(C){throw u.push(p+"type="+encodeURIComponent("_badmap")),C}}function zi(o){this.l=o.Ub||null,this.j=o.eb||!1}k(zi,Nr),zi.prototype.g=function(){return new Gi(this.l,this.j)},zi.prototype.i=function(o){return function(){return o}}({});function Gi(o,u){ae.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Gi,ae),t=Gi.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,ks(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cs(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ks(this)),this.g&&(this.readyState=3,ks(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;eh(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function eh(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Cs(this):ks(this),this.readyState==3&&eh(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,Cs(this))},t.Qa=function(o){this.g&&(this.response=o,Cs(this))},t.ga=function(){this.g&&Cs(this)};function Cs(o){o.readyState=4,o.l=null,o.j=null,o.v=null,ks(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function ks(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Gi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function th(o){let u="";return oe(o,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function qa(o,u,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=th(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):Me(o,u,d))}function je(o){ae.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(je,ae);var t_=/^https?$/i,n_=["POST","PUT"];t=je.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ma.g(),this.v=this.o?ku(this.o):ku(Ma),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(V){nh(this,V);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var C in p)d.set(C,p[C]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const V of p.keys())d.set(V,p.get(V));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),C=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(n_,u,void 0))||p||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,Q]of d)this.g.setRequestHeader(V,Q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ih(this),this.u=!0,this.g.send(o),this.u=!1}catch(V){nh(this,V)}};function nh(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,rh(o),Qi(o)}function rh(o){o.A||(o.A=!0,_e(o,"complete"),_e(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,_e(this,"complete"),_e(this,"abort"),Qi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qi(this,!0)),je.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?sh(this):this.bb())},t.bb=function(){sh(this)};function sh(o){if(o.h&&typeof a<"u"&&(!o.v[1]||_n(o)!=4||o.Z()!=2)){if(o.u&&_n(o)==4)Le(o.Ea,0,o);else if(_e(o,"readystatechange"),_n(o)==4){o.h=!1;try{const Q=o.Z();e:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var p;if(p=Q===0){var C=String(o.D).match(Gu)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),p=!t_.test(C?C.toLowerCase():"")}d=p}if(d)_e(o,"complete"),_e(o,"success");else{o.m=6;try{var V=2<_n(o)?o.g.statusText:""}catch{V=""}o.l=V+" ["+o.Z()+"]",rh(o)}}finally{Qi(o)}}}}function Qi(o,u){if(o.g){ih(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||_e(o,"ready");try{d.onreadystatechange=p}catch{}}}function ih(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function _n(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<_n(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),$t(u)}};function oh(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function r_(o){const u={};o=(o.g&&2<=_n(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(M(o[p]))continue;var d=A(o[p]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=u[C]||[];u[C]=V,V.push(d)}w(u,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vs(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function ah(o){this.Aa=0,this.i=[],this.j=new As,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Vs("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Vs("baseRetryDelayMs",5e3,o),this.cb=Vs("retryDelaySeedMs",1e4,o),this.Wa=Vs("forwardChannelMaxRetries",2,o),this.wa=Vs("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new ju(o&&o.concurrentRequestLimit),this.Da=new Zg,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=ah.prototype,t.la=8,t.G=1,t.connect=function(o,u,d,p){It(0),this.W=o,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=gh(this,null,this.W),Ji(this)};function Wa(o){if(lh(o),o.G==3){var u=o.U++,d=gn(o.I);if(Me(d,"SID",o.K),Me(d,"RID",u),Me(d,"TYPE","terminate"),Ds(o,d),u=new Un(o,o.j,u),u.L=2,u.v=Ki(gn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=_h(u.j,null),u.g.ea(u.v)),u.F=Date.now(),qi(u)}mh(o)}function Yi(o){o.g&&(Ka(o),o.g.cancel(),o.g=null)}function lh(o){Yi(o),o.u&&(l.clearTimeout(o.u),o.u=null),Xi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Ji(o){if(!qu(o.h)&&!o.s){o.s=!0;var u=o.Ga;G||Ft(),le||(G(),le=!0),dt.add(u,o),o.B=0}}function s_(o,u){return Wu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Is(_(o.Ga,o,u),ph(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const C=new Un(this,this.j,o);let V=this.o;if(this.S&&(V?(V=g(V),T(V,this.S)):V=this.S),this.m!==null||this.O||(C.H=V,V=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=uh(this,C,u),d=gn(this.I),Me(d,"RID",o),Me(d,"CVER",22),this.D&&Me(d,"X-HTTP-Session-Id",this.D),Ds(this,d),V&&(this.O?u="headers="+encodeURIComponent(String(th(V)))+"&"+u:this.m&&qa(d,this.m,V)),ja(this.h,C),this.Ua&&Me(d,"TYPE","init"),this.P?(Me(d,"$req",u),Me(d,"SID","null"),C.T=!0,Fa(C,d,null)):Fa(C,d,u),this.G=2}}else this.G==3&&(o?ch(this,o):this.i.length==0||qu(this.h)||ch(this))};function ch(o,u){var d;u?d=u.l:d=o.U++;const p=gn(o.I);Me(p,"SID",o.K),Me(p,"RID",d),Me(p,"AID",o.T),Ds(o,p),o.m&&o.o&&qa(p,o.m,o.o),d=new Un(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=uh(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ja(o.h,d),Fa(d,p,u)}function Ds(o,u){o.H&&oe(o.H,function(d,p){Me(u,p,d)}),o.l&&zu({},function(d,p){Me(u,p,d)})}function uh(o,u,d){d=Math.min(o.i.length,d);var p=o.l?_(o.l.Na,o.l,o):null;e:{var C=o.i;let V=-1;for(;;){const Q=["count="+d];V==-1?0<d?(V=C[0].g,Q.push("ofs="+V)):V=0:Q.push("ofs="+V);let Ve=!0;for(let st=0;st<d;st++){let Ae=C[st].g;const pt=C[st].map;if(Ae-=V,0>Ae)V=Math.max(0,C[st].g-100),Ve=!1;else try{e_(pt,Q,"req"+Ae+"_")}catch{p&&p(pt)}}if(Ve){p=Q.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,p}function hh(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;G||Ft(),le||(G(),le=!0),dt.add(u,o),o.v=0}}function Ha(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Is(_(o.Fa,o),ph(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,dh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Is(_(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),Yi(this),dh(this))};function Ka(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function dh(o){o.g=new Un(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=gn(o.qa);Me(u,"RID","rpc"),Me(u,"SID",o.K),Me(u,"AID",o.T),Me(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Me(u,"TO",o.ja),Me(u,"TYPE","xmlhttp"),Ds(o,u),o.m&&o.o&&qa(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Ki(gn(u)),d.m=null,d.P=!0,Uu(d,o)}t.Za=function(){this.C!=null&&(this.C=null,Yi(this),Ha(this),It(19))};function Xi(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function fh(o,u){var d=null;if(o.g==u){Xi(o),Ka(o),o.g=null;var p=2}else if($a(o.h,u))d=u.D,Hu(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var C=o.B;p=Bi(),_e(p,new xu(p,d)),Ji(o)}else hh(o);else if(C=u.s,C==3||C==0&&0<u.X||!(p==1&&s_(o,u)||p==2&&Ha(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),C){case 1:hr(o,5);break;case 4:hr(o,10);break;case 3:hr(o,6);break;default:hr(o,2)}}}function ph(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function hr(o,u){if(o.j.info("Error code "+u),u==2){var d=_(o.fb,o),p=o.Xa;const C=!p;p=new ur(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Wi(p,"https"),Ki(p),C?Jg(p.toString(),d):Xg(p.toString(),d)}else It(2);o.G=0,o.l&&o.l.sa(u),mh(o),lh(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function mh(o){if(o.G=0,o.ka=[],o.l){const u=Ku(o.h);(u.length!=0||o.i.length!=0)&&(S(o.ka,u),S(o.ka,o.i),o.h.i.length=0,P(o.i),o.i.length=0),o.l.ra()}}function gh(o,u,d){var p=d instanceof ur?gn(d):new ur(d);if(p.g!="")u&&(p.g=u+"."+p.g),Hi(p,p.s);else{var C=l.location;p=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;var V=new ur(null);p&&Wi(V,p),u&&(V.g=u),C&&Hi(V,C),d&&(V.l=d),p=V}return d=o.D,u=o.ya,d&&u&&Me(p,d,u),Me(p,"VER",o.la),Ds(o,p),p}function _h(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new je(new zi({eb:d})):new je(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function yh(){}t=yh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Zi(){}Zi.prototype.g=function(o,u){return new Nt(o,u)};function Nt(o,u){ae.call(this),this.g=new ah(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!M(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!M(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Mr(this)}k(Nt,ae),Nt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Nt.prototype.close=function(){Wa(this.g)},Nt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=rt(o),o=d);u.i.push(new $g(u.Ya++,o)),u.G==3&&Ji(u)},Nt.prototype.N=function(){this.g.l=null,delete this.j,Wa(this.g),delete this.g,Nt.aa.N.call(this)};function vh(o){Oa.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}k(vh,Oa);function Eh(){xa.call(this),this.status=1}k(Eh,xa);function Mr(o){this.g=o}k(Mr,yh),Mr.prototype.ua=function(){_e(this.g,"a")},Mr.prototype.ta=function(o){_e(this.g,new vh(o))},Mr.prototype.sa=function(o){_e(this.g,new Eh)},Mr.prototype.ra=function(){_e(this.g,"b")},Zi.prototype.createWebChannel=Zi.prototype.g,Nt.prototype.send=Nt.prototype.o,Nt.prototype.open=Nt.prototype.m,Nt.prototype.close=Nt.prototype.close,Up=function(){return new Zi},Fp=function(){return Bi()},Lp=lr,zl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},$i.NO_ERROR=0,$i.TIMEOUT=8,$i.HTTP_ERROR=6,_o=$i,Mu.COMPLETE="complete",Mp=Mu,Vu.EventType=ws,ws.OPEN="a",ws.CLOSE="b",ws.ERROR="c",ws.MESSAGE="d",ae.prototype.listen=ae.prototype.K,qs=Vu,je.prototype.listenOnce=je.prototype.L,je.prototype.getLastError=je.prototype.Ka,je.prototype.getLastErrorCode=je.prototype.Ba,je.prototype.getStatus=je.prototype.Z,je.prototype.getResponseJson=je.prototype.Oa,je.prototype.getResponseText=je.prototype.oa,je.prototype.send=je.prototype.ea,je.prototype.setWithCredentials=je.prototype.Ha,xp=je}).apply(typeof io<"u"?io:typeof self<"u"?self:typeof window<"u"?window:{});const hd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ms="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=new Vc("@firebase/firestore");function Ms(){return br.logLevel}function Z(t,...e){if(br.logLevel<=we.DEBUG){const n=e.map(Oc);br.debug(`Firestore (${ms}): ${t}`,...n)}}function Vn(t,...e){if(br.logLevel<=we.ERROR){const n=e.map(Oc);br.error(`Firestore (${ms}): ${t}`,...n)}}function is(t,...e){if(br.logLevel<=we.WARN){const n=e.map(Oc);br.warn(`Firestore (${ms}): ${t}`,...n)}}function Oc(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function fe(t="Unexpected state"){const e=`FIRESTORE (${ms}) INTERNAL ASSERTION FAILED: `+t;throw Vn(e),new Error(e)}function Pe(t,e){t||fe()}function ge(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends Mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class lw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(_t.UNAUTHENTICATED))}shutdown(){}}class cw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class uw{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Pe(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Pn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Pn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Pn)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Pe(typeof r.accessToken=="string"),new Bp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string"),new _t(e)}}class hw{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class dw{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new hw(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pw{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Pe(this.o===void 0);const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Pe(typeof n.token=="string"),this.R=n.token,new fw(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=mw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function be(t,e){return t<e?-1:t>e?1:0}function os(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Y(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Fe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.timestamp=e}static fromTimestamp(e){return new me(e)}static min(){return new me(new Fe(0,0))}static max(){return new me(new Fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,n,r){n===void 0?n=0:n>e.length&&fe(),r===void 0?r=e.length-n:r>e.length-n&&fe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ui.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ui?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),a=n.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class xe extends ui{construct(e,n,r){return new xe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new xe(n)}static emptyPath(){return new xe([])}}const gw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends ui{construct(e,n,r){return new lt(e,n,r)}static isValidIdentifier(e){return gw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new lt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Y(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Y(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Y(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new Y(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new lt(n)}static emptyPath(){return new lt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(xe.fromString(e))}static fromName(e){return new re(xe.fromString(e).popFirst(5))}static empty(){return new re(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new xe(e.slice()))}}function _w(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=me.fromTimestamp(r===1e9?new Fe(n+1,0):new Fe(n,r));return new nr(s,re.empty(),e)}function yw(t){return new nr(t.readTime,t.key,-1)}class nr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new nr(me.min(),re.empty(),-1)}static max(){return new nr(me.max(),re.empty(),-1)}}function vw(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function Ri(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==Ew)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&fe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&n()},c=>r(c))}),a=!0,i===s&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(s=>s?$.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new $((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(f=>{a[h]=f,++l,l===i&&r(a)},f=>s(f))}})}static doWhile(e,n){return new $((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Tw(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Si(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class xc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}xc.oe=-1;function ua(t){return t==null}function Lo(t){return t===0&&1/t==-1/0}function Iw(t){return typeof t=="number"&&Number.isInteger(t)&&!Lo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Cr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function jp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new oo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new oo(this.root,e,this.comparator,!1)}getReverseIterator(){return new oo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new oo(this.root,e,this.comparator,!0)}}class oo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??at.RED,this.left=s??at.EMPTY,this.right=i??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new at(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return at.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw fe();const e=this.left.check();if(e!==this.right.check())throw fe();return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw fe()}get value(){throw fe()}get color(){throw fe()}get left(){throw fe()}get right(){throw fe()}copy(e,n,r,s,i){return this}insert(e,n,r){return new at(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new fd(this.data.getIterator())}getIteratorFrom(e){return new fd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ct(this.comparator);return n.data=e,n}}class fd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.fields=e,e.sort(lt.comparator)}static empty(){return new Mt([])}unionWith(e){let n=new ct(lt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Mt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return os(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new qp("Invalid base64 string: "+i):i}}(e);return new ht(n)}static fromUint8Array(e){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const Aw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rr(t){if(Pe(!!t),typeof t=="string"){let e=0;const n=Aw.exec(t);if(Pe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Rr(t){return typeof t=="string"?ht.fromBase64String(t):ht.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Mc(t){const e=t.mapValue.fields.__previous_value__;return ha(e)?Mc(e):e}function hi(t){const e=rr(t.mapValue.fields.__local_write_time__.timestampValue);return new Fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e,n,r,s,i,a,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class di{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new di("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof di&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao={mapValue:{}};function Sr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ha(t)?4:Sw(t)?9007199254740991:Rw(t)?10:11:fe()}function dn(t,e){if(t===e)return!0;const n=Sr(t);if(n!==Sr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return hi(t).isEqual(hi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=rr(s.timestampValue),l=rr(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Rr(s.bytesValue).isEqual(Rr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ge(s.geoPointValue.latitude)===Ge(i.geoPointValue.latitude)&&Ge(s.geoPointValue.longitude)===Ge(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ge(s.integerValue)===Ge(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Ge(s.doubleValue),l=Ge(i.doubleValue);return a===l?Lo(a)===Lo(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return os(t.arrayValue.values||[],e.arrayValue.values||[],dn);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(dd(a)!==dd(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!dn(a[c],l[c])))return!1;return!0}(t,e);default:return fe()}}function fi(t,e){return(t.values||[]).find(n=>dn(n,e))!==void 0}function as(t,e){if(t===e)return 0;const n=Sr(t),r=Sr(e);if(n!==r)return be(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(i,a){const l=Ge(i.integerValue||i.doubleValue),c=Ge(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return pd(t.timestampValue,e.timestampValue);case 4:return pd(hi(t),hi(e));case 5:return be(t.stringValue,e.stringValue);case 6:return function(i,a){const l=Rr(i),c=Rr(a);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=be(l[h],c[h]);if(f!==0)return f}return be(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const l=be(Ge(i.latitude),Ge(a.latitude));return l!==0?l:be(Ge(i.longitude),Ge(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return md(t.arrayValue,e.arrayValue);case 10:return function(i,a){var l,c,h,f;const m=i.fields||{},_=a.fields||{},I=(l=m.value)===null||l===void 0?void 0:l.arrayValue,k=(c=_.value)===null||c===void 0?void 0:c.arrayValue,P=be(((h=I==null?void 0:I.values)===null||h===void 0?void 0:h.length)||0,((f=k==null?void 0:k.values)===null||f===void 0?void 0:f.length)||0);return P!==0?P:md(I,k)}(t.mapValue,e.mapValue);case 11:return function(i,a){if(i===ao.mapValue&&a===ao.mapValue)return 0;if(i===ao.mapValue)return 1;if(a===ao.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let m=0;m<c.length&&m<f.length;++m){const _=be(c[m],f[m]);if(_!==0)return _;const I=as(l[c[m]],h[f[m]]);if(I!==0)return I}return be(c.length,f.length)}(t.mapValue,e.mapValue);default:throw fe()}}function pd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=rr(t),r=rr(e),s=be(n.seconds,r.seconds);return s!==0?s:be(n.nanos,r.nanos)}function md(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=as(n[s],r[s]);if(i)return i}return be(n.length,r.length)}function ls(t){return Gl(t)}function Gl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=rr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Rr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return re.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Gl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Gl(n.fields[a])}`;return s+"}"}(t.mapValue):fe()}function Fo(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ql(t){return!!t&&"integerValue"in t}function Lc(t){return!!t&&"arrayValue"in t}function gd(t){return!!t&&"nullValue"in t}function _d(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function yo(t){return!!t&&"mapValue"in t}function Rw(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ei(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Cr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ei(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ei(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Sw(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!yo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ei(n)}setAll(e){let n=lt.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=ei(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());yo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];yo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Cr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new kt(ei(this.value))}}function Wp(t){const e=[];return Cr(t.fields,(n,r)=>{const s=new lt([n]);if(yo(r)){const i=Wp(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Mt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,n,r,s,i,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new vt(e,0,me.min(),me.min(),me.min(),kt.empty(),0)}static newFoundDocument(e,n,r,s){return new vt(e,1,n,me.min(),r,s,0)}static newNoDocument(e,n){return new vt(e,2,n,me.min(),me.min(),kt.empty(),0)}static newUnknownDocument(e,n){return new vt(e,3,n,me.min(),me.min(),kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(me.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=me.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class cs{constructor(e,n){this.position=e,this.inclusive=n}}function yd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=re.comparator(re.fromName(a.referenceValue),n.key):r=as(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function vd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!dn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class pi{constructor(e,n="asc"){this.field=e,this.dir=n}}function Pw(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Hp{}class Je extends Hp{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new kw(e,n,r):n==="array-contains"?new Nw(e,r):n==="in"?new Ow(e,r):n==="not-in"?new xw(e,r):n==="array-contains-any"?new Mw(e,r):new Je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Vw(e,r):new Dw(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(as(n,this.value)):n!==null&&Sr(this.value)===Sr(n)&&this.matchesComparison(as(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Yt extends Hp{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Yt(e,n)}matches(e){return Kp(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Kp(t){return t.op==="and"}function zp(t){return Cw(t)&&Kp(t)}function Cw(t){for(const e of t.filters)if(e instanceof Yt)return!1;return!0}function Yl(t){if(t instanceof Je)return t.field.canonicalString()+t.op.toString()+ls(t.value);if(zp(t))return t.filters.map(e=>Yl(e)).join(",");{const e=t.filters.map(n=>Yl(n)).join(",");return`${t.op}(${e})`}}function Gp(t,e){return t instanceof Je?function(r,s){return s instanceof Je&&r.op===s.op&&r.field.isEqual(s.field)&&dn(r.value,s.value)}(t,e):t instanceof Yt?function(r,s){return s instanceof Yt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Gp(a,s.filters[l]),!0):!1}(t,e):void fe()}function Qp(t){return t instanceof Je?function(n){return`${n.field.canonicalString()} ${n.op} ${ls(n.value)}`}(t):t instanceof Yt?function(n){return n.op.toString()+" {"+n.getFilters().map(Qp).join(" ,")+"}"}(t):"Filter"}class kw extends Je{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class Vw extends Je{constructor(e,n){super(e,"in",n),this.keys=Yp("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Dw extends Je{constructor(e,n){super(e,"not-in",n),this.keys=Yp("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Yp(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>re.fromName(r.referenceValue))}class Nw extends Je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Lc(n)&&fi(n.arrayValue,this.value)}}class Ow extends Je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&fi(this.value.arrayValue,n)}}class xw extends Je{constructor(e,n){super(e,"not-in",n)}matches(e){if(fi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!fi(this.value.arrayValue,n)}}class Mw extends Je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Lc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>fi(this.value.arrayValue,r))}}/**
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
 */class Lw{constructor(e,n=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.ue=null}}function Ed(t,e=null,n=[],r=[],s=null,i=null,a=null){return new Lw(t,e,n,r,s,i,a)}function Fc(t){const e=ge(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Yl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ua(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ls(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ls(r)).join(",")),e.ue=n}return e.ue}function Uc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Pw(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Gp(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!vd(t.startAt,e.startAt)&&vd(t.endAt,e.endAt)}function Jl(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,n=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Fw(t,e,n,r,s,i,a,l){return new kr(t,e,n,r,s,i,a,l)}function da(t){return new kr(t)}function wd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Bc(t){return t.collectionGroup!==null}function Jr(t){const e=ge(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ct(lt.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new pi(i,r))}),n.has(lt.keyField().canonicalString())||e.ce.push(new pi(lt.keyField(),r))}return e.ce}function sn(t){const e=ge(t);return e.le||(e.le=Uw(e,Jr(t))),e.le}function Uw(t,e){if(t.limitType==="F")return Ed(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new pi(s.field,i)});const n=t.endAt?new cs(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new cs(t.startAt.position,t.startAt.inclusive):null;return Ed(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Xl(t,e){const n=t.filters.concat([e]);return new kr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Uo(t,e,n){return new kr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function fa(t,e){return Uc(sn(t),sn(e))&&t.limitType===e.limitType}function Jp(t){return`${Fc(sn(t))}|lt:${t.limitType}`}function $r(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Qp(s)).join(", ")}]`),ua(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ls(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ls(s)).join(",")),`Target(${r})`}(sn(t))}; limitType=${t.limitType})`}function pa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):re.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Jr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=yd(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,Jr(r),s)||r.endAt&&!function(a,l,c){const h=yd(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,Jr(r),s))}(t,e)}function Bw(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Xp(t){return(e,n)=>{let r=!1;for(const s of Jr(t)){const i=$w(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function $w(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?as(c,h):fe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return fe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Cr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return jp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw=new Be(re.comparator);function Dn(){return jw}const Zp=new Be(re.comparator);function Ws(...t){let e=Zp;for(const n of t)e=e.insert(n.key,n);return e}function em(t){let e=Zp;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function vr(){return ti()}function tm(){return ti()}function ti(){return new gs(t=>t.toString(),(t,e)=>t.isEqual(e))}const qw=new Be(re.comparator),Ww=new ct(re.comparator);function Ee(...t){let e=Ww;for(const n of t)e=e.add(n);return e}const Hw=new ct(be);function Kw(){return Hw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Lo(e)?"-0":e}}function nm(t){return{integerValue:""+t}}function zw(t,e){return Iw(e)?nm(e):$c(t,e)}/**
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
 */class ma{constructor(){this._=void 0}}function Gw(t,e,n){return t instanceof mi?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ha(i)&&(i=Mc(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(n,e):t instanceof gi?sm(t,e):t instanceof _i?im(t,e):function(s,i){const a=rm(s,i),l=Td(a)+Td(s.Pe);return Ql(a)&&Ql(s.Pe)?nm(l):$c(s.serializer,l)}(t,e)}function Qw(t,e,n){return t instanceof gi?sm(t,e):t instanceof _i?im(t,e):n}function rm(t,e){return t instanceof Bo?function(r){return Ql(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class mi extends ma{}class gi extends ma{constructor(e){super(),this.elements=e}}function sm(t,e){const n=om(e);for(const r of t.elements)n.some(s=>dn(s,r))||n.push(r);return{arrayValue:{values:n}}}class _i extends ma{constructor(e){super(),this.elements=e}}function im(t,e){let n=om(e);for(const r of t.elements)n=n.filter(s=>!dn(s,r));return{arrayValue:{values:n}}}class Bo extends ma{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Td(t){return Ge(t.integerValue||t.doubleValue)}function om(t){return Lc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e,n){this.field=e,this.transform=n}}function Jw(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof gi&&s instanceof gi||r instanceof _i&&s instanceof _i?os(r.elements,s.elements,dn):r instanceof Bo&&s instanceof Bo?dn(r.Pe,s.Pe):r instanceof mi&&s instanceof mi}(t.transform,e.transform)}class Xw{constructor(e,n){this.version=e,this.transformResults=n}}class Vt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Vt}static exists(e){return new Vt(void 0,e)}static updateTime(e){return new Vt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ga{}function am(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new _a(t.key,Vt.none()):new Pi(t.key,t.data,Vt.none());{const n=t.data,r=kt.empty();let s=new ct(lt.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new or(t.key,r,new Mt(s.toArray()),Vt.none())}}function Zw(t,e,n){t instanceof Pi?function(s,i,a){const l=s.value.clone(),c=Ad(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof or?function(s,i,a){if(!vo(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Ad(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(lm(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function ni(t,e,n,r){return t instanceof Pi?function(i,a,l,c){if(!vo(i.precondition,a))return l;const h=i.value.clone(),f=bd(i.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof or?function(i,a,l,c){if(!vo(i.precondition,a))return l;const h=bd(i.fieldTransforms,c,a),f=a.data;return f.setAll(lm(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,a,l){return vo(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function eT(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=rm(r.transform,s||null);i!=null&&(n===null&&(n=kt.empty()),n.set(r.field,i))}return n||null}function Id(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&os(r,s,(i,a)=>Jw(i,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Pi extends ga{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class or extends ga{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function lm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ad(t,e,n){const r=new Map;Pe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,Qw(a,l,n[s]))}return r}function bd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,Gw(i,a,e))}return r}class _a extends ga{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tT extends ga{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Zw(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ni(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ni(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=tm();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const c=am(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(me.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ee())}isEqual(e){return this.batchId===e.batchId&&os(this.mutations,e.mutations,(n,r)=>Id(n,r))&&os(this.baseMutations,e.baseMutations,(n,r)=>Id(n,r))}}class jc{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Pe(e.mutations.length===r.length);let s=function(){return qw}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new jc(e,n,r,s)}}/**
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
 */class rT{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class sT{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ye,Te;function iT(t){switch(t){default:return fe();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function cm(t){if(t===void 0)return Vn("GRPC error has no .code"),O.UNKNOWN;switch(t){case Ye.OK:return O.OK;case Ye.CANCELLED:return O.CANCELLED;case Ye.UNKNOWN:return O.UNKNOWN;case Ye.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Ye.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Ye.INTERNAL:return O.INTERNAL;case Ye.UNAVAILABLE:return O.UNAVAILABLE;case Ye.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Ye.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Ye.NOT_FOUND:return O.NOT_FOUND;case Ye.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Ye.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Ye.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Ye.ABORTED:return O.ABORTED;case Ye.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Ye.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Ye.DATA_LOSS:return O.DATA_LOSS;default:return fe()}}(Te=Ye||(Ye={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const aT=new Ir([4294967295,4294967295],0);function Rd(t){const e=oT().encode(t),n=new Op;return n.update(e),new Uint8Array(n.digest())}function Sd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ir([n,r],0),new Ir([s,i],0)]}class qc{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Hs(`Invalid padding: ${n}`);if(r<0)throw new Hs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Hs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Hs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Ir.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Ir.fromNumber(r)));return s.compare(aT)===1&&(s=new Ir([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Rd(e),[r,s]=Sd(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new qc(i,s,n);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const n=Rd(e),[r,s]=Sd(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Hs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ci.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ya(me.min(),s,new Be(be),Dn(),Ee())}}class Ci{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ci(r,n,Ee(),Ee(),Ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class um{constructor(e,n){this.targetId=e,this.me=n}}class hm{constructor(e,n,r=ht.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Pd{constructor(){this.fe=0,this.ge=kd(),this.pe=ht.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ee(),n=Ee(),r=Ee();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:fe()}}),new Ci(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=kd()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Pe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class lT{constructor(e){this.Le=e,this.Be=new Map,this.ke=Dn(),this.qe=Cd(),this.Qe=new Be(be)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:fe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Jl(i))if(r===0){const a=new re(i.path);this.Ue(n,a,vt.newNoDocument(a,me.min()))}else Pe(r===1);else{const a=this.Ye(n);if(a!==r){const l=this.Ze(e),c=l?this.Xe(l,e,a):1;if(c!==0){this.je(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,l;try{a=Rr(r).toUint8Array()}catch(c){if(c instanceof qp)return is("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new qc(a,s,i)}catch(c){return is(c instanceof Hs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,a)=>{const l=this.Je(a);if(l){if(i.current&&Jl(l.target)){const c=new re(l.target.path);this.ke.get(c)!==null||this.it(a,c)||this.Ue(a,c,vt.newNoDocument(c,e))}i.be&&(n.set(a,i.ve()),i.Ce())}});let r=Ee();this.qe.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new ya(e,n,this.Qe,this.ke,r);return this.ke=Dn(),this.qe=Cd(),this.Qe=new Be(be),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Pd,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ct(be),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Pd),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Cd(){return new Be(re.comparator)}function kd(){return new Be(re.comparator)}const cT={asc:"ASCENDING",desc:"DESCENDING"},uT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},hT={and:"AND",or:"OR"};class dT{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Zl(t,e){return t.useProto3Json||ua(e)?e:{value:e}}function $o(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function fT(t,e){return $o(t,e.toTimestamp())}function on(t){return Pe(!!t),me.fromTimestamp(function(n){const r=rr(n);return new Fe(r.seconds,r.nanos)}(t))}function Wc(t,e){return ec(t,e).canonicalString()}function ec(t,e){const n=function(s){return new xe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function fm(t){const e=xe.fromString(t);return Pe(ym(e)),e}function tc(t,e){return Wc(t.databaseId,e.path)}function ml(t,e){const n=fm(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(mm(n))}function pm(t,e){return Wc(t.databaseId,e)}function pT(t){const e=fm(t);return e.length===4?xe.emptyPath():mm(e)}function nc(t){return new xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function mm(t){return Pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Vd(t,e,n){return{name:tc(t,e),fields:n.value.mapValue.fields}}function mT(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:fe()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Pe(f===void 0||typeof f=="string"),ht.fromBase64String(f||"")):(Pe(f===void 0||f instanceof Buffer||f instanceof Uint8Array),ht.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?O.UNKNOWN:cm(h.code);return new Y(f,h.message||"")}(a);n=new hm(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ml(t,r.document.name),i=on(r.document.updateTime),a=r.document.createTime?on(r.document.createTime):me.min(),l=new kt({mapValue:{fields:r.document.fields}}),c=vt.newFoundDocument(s,i,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Eo(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ml(t,r.document),i=r.readTime?on(r.readTime):me.min(),a=vt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Eo([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ml(t,r.document),i=r.removedTargetIds||[];n=new Eo([],i,s,null)}else{if(!("filter"in e))return fe();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new sT(s,i),l=r.targetId;n=new um(l,a)}}return n}function gT(t,e){let n;if(e instanceof Pi)n={update:Vd(t,e.key,e.value)};else if(e instanceof _a)n={delete:tc(t,e.key)};else if(e instanceof or)n={update:Vd(t,e.key,e.data),updateMask:bT(e.fieldMask)};else{if(!(e instanceof tT))return fe();n={verify:tc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof mi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof gi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof _i)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Bo)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw fe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:fT(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:fe()}(t,e.precondition)),n}function _T(t,e){return t&&t.length>0?(Pe(e!==void 0),t.map(n=>function(s,i){let a=s.updateTime?on(s.updateTime):on(i);return a.isEqual(me.min())&&(a=on(i)),new Xw(a,s.transformResults||[])}(n,e))):[]}function yT(t,e){return{documents:[pm(t,e.path)]}}function vT(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=pm(t,s);const i=function(h){if(h.length!==0)return _m(Yt.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(_){return{field:jr(_.field),direction:TT(_.dir)}}(f))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const l=Zl(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function ET(t){let e=pT(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Pe(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(m){const _=gm(m);return _ instanceof Yt&&zp(_)?_.getFilters():[_]}(n.where));let a=[];n.orderBy&&(a=function(m){return m.map(_=>function(k){return new pi(qr(k.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(_))}(n.orderBy));let l=null;n.limit&&(l=function(m){let _;return _=typeof m=="object"?m.value:m,ua(_)?null:_}(n.limit));let c=null;n.startAt&&(c=function(m){const _=!!m.before,I=m.values||[];return new cs(I,_)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const _=!m.before,I=m.values||[];return new cs(I,_)}(n.endAt)),Fw(e,s,a,i,l,"F",c,h)}function wT(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function gm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=qr(n.unaryFilter.field);return Je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=qr(n.unaryFilter.field);return Je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=qr(n.unaryFilter.field);return Je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=qr(n.unaryFilter.field);return Je.create(a,"!=",{nullValue:"NULL_VALUE"});default:return fe()}}(t):t.fieldFilter!==void 0?function(n){return Je.create(qr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return fe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Yt.create(n.compositeFilter.filters.map(r=>gm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return fe()}}(n.compositeFilter.op))}(t):fe()}function TT(t){return cT[t]}function IT(t){return uT[t]}function AT(t){return hT[t]}function jr(t){return{fieldPath:t.canonicalString()}}function qr(t){return lt.fromServerFormat(t.fieldPath)}function _m(t){return t instanceof Je?function(n){if(n.op==="=="){if(_d(n.value))return{unaryFilter:{field:jr(n.field),op:"IS_NAN"}};if(gd(n.value))return{unaryFilter:{field:jr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(_d(n.value))return{unaryFilter:{field:jr(n.field),op:"IS_NOT_NAN"}};if(gd(n.value))return{unaryFilter:{field:jr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jr(n.field),op:IT(n.op),value:n.value}}}(t):t instanceof Yt?function(n){const r=n.getFilters().map(s=>_m(s));return r.length===1?r[0]:{compositeFilter:{op:AT(n.op),filters:r}}}(t):fe()}function bT(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ym(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,n,r,s,i=me.min(),a=me.min(),l=ht.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Qn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e){this.ct=e}}function ST(t){const e=ET({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Uo(e,e.limit,"L"):e}/**
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
 */class PT{constructor(){this.un=new CT}addToCollectionParentIndex(e,n){return this.un.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(nr.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(nr.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class CT{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ct(xe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ct(xe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new us(0)}static kn(){return new us(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(){this.changes=new gs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class VT{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ni(r.mutation,s,Mt.empty(),Fe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ee()){const s=vr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let a=Ws();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=vr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ee()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,s){let i=Dn();const a=ti(),l=function(){return ti()}();return n.forEach((c,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof or)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),ni(f.mutation,h,f.mutation.getFieldMask(),Fe.now())):a.set(h.key,Mt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,f)=>a.set(h,f)),n.forEach((h,f)=>{var m;return l.set(h,new VT(f,(m=a.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=ti();let s=new Be((a,l)=>a-l),i=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let f=r.get(c)||Mt.empty();f=l.applyToLocalView(h,f),r.set(c,f);const m=(s.get(l.batchId)||Ee()).add(c);s=s.insert(l.batchId,m)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,m=tm();f.forEach(_=>{if(!i.has(_)){const I=am(n.get(_),r.get(_));I!==null&&m.set(_,I),i=i.add(_)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,m))}return $.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(a){return re.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Bc(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):$.resolve(vr());let l=-1,c=i;return a.next(h=>$.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(f)?$.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{c=c.insert(f,_)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,Ee())).next(f=>({batchId:l,changes:em(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next(r=>{let s=Ws();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=Ws();return this.indexManager.getCollectionParents(e,i).next(l=>$.forEach(l,c=>{const h=function(m,_){return new kr(_,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((m,_)=>{a=a.insert(m,_)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(a=>{i.forEach((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,vt.newInvalidDocument(f)))});let l=Ws();return a.forEach((c,h)=>{const f=i.get(c);f!==void 0&&ni(f.mutation,h,Mt.empty(),Fe.now()),pa(n,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return $.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:on(s.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:ST(s.bundledQuery),readTime:on(s.readTime)}}(n)),$.resolve()}}/**
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
 */class OT{constructor(){this.overlays=new Be(re.comparator),this.Ir=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=vr();return $.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const s=vr(),i=n.length+1,a=new re(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return $.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Be((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=vr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=vr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return $.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new rT(n,r));let i=this.Ir.get(n);i===void 0&&(i=Ee(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class xT{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(){this.Tr=new ct(tt.Er),this.dr=new ct(tt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new tt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new tt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new re(new xe([])),r=new tt(n,e),s=new tt(n,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new re(new xe([])),r=new tt(n,e),s=new tt(n,e+1);let i=Ee();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const n=new tt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class tt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return re.comparator(e.key,n.key)||be(e.wr,n.wr)}static Ar(e,n){return be(e.wr,n.wr)||re.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ct(tt.Er)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new nT(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.br=this.br.add(new tt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return $.resolve(a)}lookupMutationBatch(e,n){return $.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return $.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new tt(n,0),s=new tt(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const l=this.Dr(a.wr);i.push(l)}),$.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ct(be);return n.forEach(s=>{const i=new tt(s,0),a=new tt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],l=>{r=r.add(l.wr)})}),$.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;re.isDocumentKey(i)||(i=i.child(""));const a=new tt(new re(i),0);let l=new ct(be);return this.br.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.wr)),!0)},a),$.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Pe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return $.forEach(n.mutations,s=>{const i=new tt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new tt(n,0),s=this.br.firstAfterOrEqual(r);return $.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(e){this.Mr=e,this.docs=function(){return new Be(re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(n))}getEntries(e,n){let r=Dn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():vt.newInvalidDocument(s))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Dn();const a=n.path,l=new re(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||vw(yw(f),r)<=0||(s.has(f.key)||pa(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return $.resolve(i)}getAllFromCollectionGroup(e,n,r,s){fe()}Or(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new FT(this)}getSize(e){return $.resolve(this.size)}}class FT extends kT{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e){this.persistence=e,this.Nr=new gs(n=>Fc(n),Uc),this.lastRemoteSnapshotVersion=me.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Hc,this.targetCount=0,this.kr=us.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),$.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new us(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Kn(n),$.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),$.waitFor(i).next(()=>s)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),$.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e,n){this.qr={},this.overlays={},this.Qr=new xc(0),this.Kr=!1,this.Kr=!0,this.$r=new xT,this.referenceDelegate=e(this),this.Ur=new UT(this),this.indexManager=new PT,this.remoteDocumentCache=function(s){return new LT(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new RT(n),this.Gr=new NT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new OT,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new MT(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new $T(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return $.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class $T extends ww{constructor(e){super(),this.currentSequenceNumber=e}}class Kc{constructor(e){this.persistence=e,this.Jr=new Hc,this.Yr=null}static Zr(e){return new Kc(e)}get Xr(){if(this.Yr)return this.Yr;throw fe()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),$.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Xr,r=>{const s=re.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,me.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return $.or([()=>$.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=Ee(),s=Ee();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new zc(e,n.fromCache,r,s)}}/**
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
 */class qT{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Hv()?8:Tw(Tt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new jT;return this.Xi(e,n,a).next(l=>{if(i.result=l,this.zi)return this.es(e,n,a,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Ms()<=we.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",$r(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),$.resolve()):(Ms()<=we.DEBUG&&Z("QueryEngine","Query:",$r(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Ms()<=we.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",$r(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,sn(n))):$.resolve())}Yi(e,n){if(wd(n))return $.resolve(null);let r=sn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Uo(n,null,"F"),r=sn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=Ee(...i);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.ts(n,l);return this.ns(n,h,a,c.readTime)?this.Yi(e,Uo(n,null,"F")):this.rs(e,h,n,c)}))})))}Zi(e,n,r,s){return wd(n)||s.isEqual(me.min())?$.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(n,i);return this.ns(n,a,r,s)?$.resolve(null):(Ms()<=we.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),$r(n)),this.rs(e,a,n,_w(s,-1)).next(l=>l))})}ts(e,n){let r=new ct(Xp(e));return n.forEach((s,i)=>{pa(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Ms()<=we.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",$r(n)),this.Ji.getDocumentsMatchingQuery(e,n,nr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Be(be),this._s=new gs(i=>Fc(i),Uc),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new DT(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function HT(t,e,n,r){return new WT(t,e,n,r)}async function vm(t,e){const n=ge(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=Ee();for(const h of s){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:l}))})})}function KT(t,e){const n=ge(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const m=h.batch,_=m.keys();let I=$.resolve();return _.forEach(k=>{I=I.next(()=>f.getEntry(c,k)).next(P=>{const S=h.docVersions.get(k);Pe(S!==null),P.version.compareTo(S)<0&&(m.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),f.addEntry(P)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(c,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Ee();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Em(t){const e=ge(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function zT(t,e){const n=ge(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((f,m)=>{const _=s.get(m);if(!_)return;l.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,m)));let I=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?I=I.withResumeToken(ht.EMPTY_BYTE_STRING,me.min()).withLastLimboFreeSnapshotVersion(me.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,r)),s=s.insert(m,I),function(P,S,x){return P.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(_,I,f)&&l.push(n.Ur.updateTargetData(i,I))});let c=Dn(),h=Ee();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(GT(i,a,e.documentUpdates).next(f=>{c=f.Ps,h=f.Is})),!r.isEqual(me.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(m=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return $.waitFor(l).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.os=s,i))}function GT(t,e,n){let r=Ee(),s=Ee();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let a=Dn();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(me.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):Z("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Ps:a,Is:s}})}function QT(t,e){const n=ge(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function YT(t,e){const n=ge(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,$.resolve(s)):n.Ur.allocateTargetId(r).next(a=>(s=new Qn(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function rc(t,e,n){const r=ge(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Si(a))throw a;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Dd(t,e,n){const r=ge(t);let s=me.min(),i=Ee();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,f){const m=ge(c),_=m._s.get(f);return _!==void 0?$.resolve(m.os.get(_)):m.Ur.getTargetData(h,f)}(r,a,sn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,n?s:me.min(),n?i:Ee())).next(l=>(JT(r,Bw(e),l),{documents:l,Ts:i})))}function JT(t,e,n){let r=t.us.get(e)||me.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Nd{constructor(){this.activeTargetIds=Kw()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class XT{constructor(){this.so=new Nd,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Nd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Od{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let lo=null;function gl(){return lo===null?lo=function(){return 268435456+Math.round(2147483648*Math.random())}():lo++,"0x"+lo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const gt="WebChannelConnection";class nI extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,a){const l=gl(),c=this.xo(n,r.toUriEncodedString());Z("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,a),this.No(n,c,h,s).then(f=>(Z("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw is("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",c,"request:",s),f})}Lo(n,r,s,i,a,l){return this.Mo(n,r,s,i,a)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ms}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>n[a]=i),s&&s.headers.forEach((i,a)=>n[a]=i)}xo(n,r){const s=eI[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=gl();return new Promise((a,l)=>{const c=new xp;c.setWithCredentials(!0),c.listenOnce(Mp.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case _o.NO_ERROR:const f=c.getResponseJson();Z(gt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),a(f);break;case _o.TIMEOUT:Z(gt,`RPC '${e}' ${i} timed out`),l(new Y(O.DEADLINE_EXCEEDED,"Request time out"));break;case _o.HTTP_ERROR:const m=c.getStatus();if(Z(gt,`RPC '${e}' ${i} failed with status:`,m,"response text:",c.getResponseText()),m>0){let _=c.getResponseJson();Array.isArray(_)&&(_=_[0]);const I=_==null?void 0:_.error;if(I&&I.status&&I.message){const k=function(S){const x=S.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(x)>=0?x:O.UNKNOWN}(I.status);l(new Y(k,I.message))}else l(new Y(O.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new Y(O.UNAVAILABLE,"Connection failed."));break;default:fe()}}finally{Z(gt,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);Z(gt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=gl(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Up(),l=Fp(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");Z(gt,`Creating RPC '${e}' stream ${s}: ${f}`,c);const m=a.createWebChannel(f,c);let _=!1,I=!1;const k=new tI({Io:S=>{I?Z(gt,`Not sending because RPC '${e}' stream ${s} is closed:`,S):(_||(Z(gt,`Opening RPC '${e}' stream ${s} transport.`),m.open(),_=!0),Z(gt,`RPC '${e}' stream ${s} sending:`,S),m.send(S))},To:()=>m.close()}),P=(S,x,M)=>{S.listen(x,q=>{try{M(q)}catch(j){setTimeout(()=>{throw j},0)}})};return P(m,qs.EventType.OPEN,()=>{I||(Z(gt,`RPC '${e}' stream ${s} transport opened.`),k.yo())}),P(m,qs.EventType.CLOSE,()=>{I||(I=!0,Z(gt,`RPC '${e}' stream ${s} transport closed`),k.So())}),P(m,qs.EventType.ERROR,S=>{I||(I=!0,is(gt,`RPC '${e}' stream ${s} transport errored:`,S),k.So(new Y(O.UNAVAILABLE,"The operation could not be completed")))}),P(m,qs.EventType.MESSAGE,S=>{var x;if(!I){const M=S.data[0];Pe(!!M);const q=M,j=q.error||((x=q[0])===null||x===void 0?void 0:x.error);if(j){Z(gt,`RPC '${e}' stream ${s} received error:`,j);const ie=j.status;let oe=function(y){const T=Ye[y];if(T!==void 0)return cm(T)}(ie),w=j.message;oe===void 0&&(oe=O.INTERNAL,w="Unknown error status: "+ie+" with message "+j.message),I=!0,k.So(new Y(oe,w)),m.close()}else Z(gt,`RPC '${e}' stream ${s} received:`,M),k.bo(M)}}),P(l,Lp.STAT_EVENT,S=>{S.stat===zl.PROXY?Z(gt,`RPC '${e}' stream ${s} detected buffering proxy`):S.stat===zl.NOPROXY&&Z(gt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.wo()},0),k}}function _l(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(t){return new dT(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e,n,r,s,i,a,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new wm(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(Vn(n.toString()),Vn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new Y(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rI extends Tm{constructor(e,n,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=mT(this.serializer,e),r=function(i){if(!("targetChange"in i))return me.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?me.min():a.readTime?on(a.readTime):me.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=nc(this.serializer),n.addTarget=function(i,a){let l;const c=a.target;if(l=Jl(c)?{documents:yT(i,c)}:{query:vT(i,c)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=dm(i,a.resumeToken);const h=Zl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(me.min())>0){l.readTime=$o(i,a.snapshotVersion.toTimestamp());const h=Zl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=wT(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=nc(this.serializer),n.removeTarget=e,this.a_(n)}}class sI extends Tm{constructor(e,n,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Pe(!!e.streamToken),this.lastStreamToken=e.streamToken,Pe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=_T(e.writeResults,e.commitTime),r=on(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=nc(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>gT(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new Y(O.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,ec(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(O.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,ec(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new Y(O.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class oI{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Vn(n),this.D_=!1):Z("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{Vr(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=ge(c);h.L_.add(4),await ki(h),h.q_.set("Unknown"),h.L_.delete(4),await Ea(h)}(this))})}),this.q_=new oI(r,s)}}async function Ea(t){if(Vr(t))for(const e of t.B_)await e(!0)}async function ki(t){for(const e of t.B_)await e(!1)}function Im(t,e){const n=ge(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Jc(n)?Yc(n):_s(n).r_()&&Qc(n,e))}function Gc(t,e){const n=ge(t),r=_s(n);n.N_.delete(e),r.r_()&&Am(n,e),n.N_.size===0&&(r.r_()?r.o_():Vr(n)&&n.q_.set("Unknown"))}function Qc(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(me.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}_s(t).A_(e)}function Am(t,e){t.Q_.xe(e),_s(t).R_(e)}function Yc(t){t.Q_=new lT({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),_s(t).start(),t.q_.v_()}function Jc(t){return Vr(t)&&!_s(t).n_()&&t.N_.size>0}function Vr(t){return ge(t).L_.size===0}function bm(t){t.Q_=void 0}async function lI(t){t.q_.set("Online")}async function cI(t){t.N_.forEach((e,n)=>{Qc(t,e)})}async function uI(t,e){bm(t),Jc(t)?(t.q_.M_(e),Yc(t)):t.q_.set("Unknown")}async function hI(t,e,n){if(t.q_.set("Online"),e instanceof hm&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await jo(t,r)}else if(e instanceof Eo?t.Q_.Ke(e):e instanceof um?t.Q_.He(e):t.Q_.We(e),!n.isEqual(me.min()))try{const r=await Em(t.localStore);n.compareTo(r)>=0&&await function(i,a){const l=i.Q_.rt(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const f=i.N_.get(c);if(!f)return;i.N_.set(c,f.withResumeToken(ht.EMPTY_BYTE_STRING,f.snapshotVersion)),Am(i,c);const m=new Qn(f.target,c,h,f.sequenceNumber);Qc(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){Z("RemoteStore","Failed to raise snapshot:",r),await jo(t,r)}}async function jo(t,e,n){if(!Si(e))throw e;t.L_.add(1),await ki(t),t.q_.set("Offline"),n||(n=()=>Em(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Ea(t)})}function Rm(t,e){return e().catch(n=>jo(t,n,e))}async function wa(t){const e=ge(t),n=sr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;dI(e);)try{const s=await QT(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,fI(e,s)}catch(s){await jo(e,s)}Sm(e)&&Pm(e)}function dI(t){return Vr(t)&&t.O_.length<10}function fI(t,e){t.O_.push(e);const n=sr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Sm(t){return Vr(t)&&!sr(t).n_()&&t.O_.length>0}function Pm(t){sr(t).start()}async function pI(t){sr(t).p_()}async function mI(t){const e=sr(t);for(const n of t.O_)e.m_(n.mutations)}async function gI(t,e,n){const r=t.O_.shift(),s=jc.from(r,e,n);await Rm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await wa(t)}async function _I(t,e){e&&sr(t).V_&&await async function(r,s){if(function(a){return iT(a)&&a!==O.ABORTED}(s.code)){const i=r.O_.shift();sr(r).s_(),await Rm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await wa(r)}}(t,e),Sm(t)&&Pm(t)}async function xd(t,e){const n=ge(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const r=Vr(n);n.L_.add(3),await ki(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ea(n)}async function yI(t,e){const n=ge(t);e?(n.L_.delete(2),await Ea(n)):e||(n.L_.add(2),await ki(n),n.q_.set("Unknown"))}function _s(t){return t.K_||(t.K_=function(n,r,s){const i=ge(n);return i.w_(),new rI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:lI.bind(null,t),Ro:cI.bind(null,t),mo:uI.bind(null,t),d_:hI.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Jc(t)?Yc(t):t.q_.set("Unknown")):(await t.K_.stop(),bm(t))})),t.K_}function sr(t){return t.U_||(t.U_=function(n,r,s){const i=ge(n);return i.w_(),new sI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:pI.bind(null,t),mo:_I.bind(null,t),f_:mI.bind(null,t),g_:gI.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await wa(t)):(await t.U_.stop(),t.O_.length>0&&(Z("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Pn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,l=new Xc(e,n,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zc(t,e){if(Vn("AsyncQueue",`${e}: ${t}`),Si(t))return new Y(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=Ws(),this.sortedSet=new Be(this.comparator)}static emptySet(e){return new Xr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Xr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Xr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(){this.W_=new Be(re.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):fe():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class hs{constructor(e,n,r,s,i,a,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new hs(e,n,Xr.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class EI{constructor(){this.queries=Ld(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=ge(n),i=s.queries;s.queries=Ld(),i.forEach((a,l)=>{for(const c of l.j_)c.onError(r)})})(this,new Y(O.ABORTED,"Firestore shutting down"))}}function Ld(){return new gs(t=>Jp(t),fa)}async function eu(t,e){const n=ge(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new vI,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const l=Zc(a,`Initialization of query '${$r(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&nu(n)}async function tu(t,e){const n=ge(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function wI(t,e){const n=ge(t);let r=!1;for(const s of e){const i=s.query,a=n.queries.get(i);if(a){for(const l of a.j_)l.X_(s)&&(r=!0);a.z_=s}}r&&nu(n)}function TI(t,e,n){const r=ge(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function nu(t){t.Y_.forEach(e=>{e.next()})}var sc,Fd;(Fd=sc||(sc={})).ea="default",Fd.Cache="cache";class ru{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new hs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=hs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==sc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e){this.key=e}}class km{constructor(e){this.key=e}}class II{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Ee(),this.mutatedKeys=Ee(),this.Aa=Xp(e),this.Ra=new Xr(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Md,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const _=s.get(f),I=pa(this.query,m)?m:null,k=!!_&&this.mutatedKeys.has(_.key),P=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let S=!1;_&&I?_.data.isEqual(I.data)?k!==P&&(r.track({type:3,doc:I}),S=!0):this.ga(_,I)||(r.track({type:2,doc:I}),S=!0,(c&&this.Aa(I,c)>0||h&&this.Aa(I,h)<0)&&(l=!0)):!_&&I?(r.track({type:0,doc:I}),S=!0):_&&!I&&(r.track({type:1,doc:_}),S=!0,(c||h)&&(l=!0)),S&&(I?(a=a.add(I),i=P?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,m)=>function(I,k){const P=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fe()}};return P(I)-P(k)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,h=c!==this.Ea;return this.Ea=c,a.length!==0||h?{snapshot:new hs(this.query,e.Ra,i,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Md,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Ee(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new km(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Cm(r))}),n}ba(e){this.Ta=e.Ts,this.da=Ee();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return hs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class AI{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class bI{constructor(e){this.key=e,this.va=!1}}class RI{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new gs(l=>Jp(l),fa),this.Ma=new Map,this.xa=new Set,this.Oa=new Be(re.comparator),this.Na=new Map,this.La=new Hc,this.Ba={},this.ka=new Map,this.qa=us.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function SI(t,e,n=!0){const r=Mm(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Vm(r,e,n,!0),s}async function PI(t,e){const n=Mm(t);await Vm(n,e,!0,!1)}async function Vm(t,e,n,r){const s=await YT(t.localStore,sn(e)),i=s.targetId,a=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await CI(t,e,i,a==="current",s.resumeToken)),t.isPrimaryClient&&n&&Im(t.remoteStore,s),l}async function CI(t,e,n,r,s){t.Ka=(m,_,I)=>async function(P,S,x,M){let q=S.view.ma(x);q.ns&&(q=await Dd(P.localStore,S.query,!1).then(({documents:w})=>S.view.ma(w,q)));const j=M&&M.targetChanges.get(S.targetId),ie=M&&M.targetMismatches.get(S.targetId)!=null,oe=S.view.applyChanges(q,P.isPrimaryClient,j,ie);return Bd(P,S.targetId,oe.wa),oe.snapshot}(t,m,_,I);const i=await Dd(t.localStore,e,!0),a=new II(e,i.Ts),l=a.ma(i.documents),c=Ci.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=a.applyChanges(l,t.isPrimaryClient,c);Bd(t,n,h.wa);const f=new AI(e,n,a);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function kI(t,e,n){const r=ge(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!fa(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await rc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Gc(r.remoteStore,s.targetId),ic(r,s.targetId)}).catch(Ri)):(ic(r,s.targetId),await rc(r.localStore,s.targetId,!0))}async function VI(t,e){const n=ge(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Gc(n.remoteStore,r.targetId))}async function DI(t,e,n){const r=UI(t);try{const s=await function(a,l){const c=ge(a),h=Fe.now(),f=l.reduce((I,k)=>I.add(k.key),Ee());let m,_;return c.persistence.runTransaction("Locally write mutations","readwrite",I=>{let k=Dn(),P=Ee();return c.cs.getEntries(I,f).next(S=>{k=S,k.forEach((x,M)=>{M.isValidDocument()||(P=P.add(x))})}).next(()=>c.localDocuments.getOverlayedDocuments(I,k)).next(S=>{m=S;const x=[];for(const M of l){const q=eT(M,m.get(M.key).overlayedDocument);q!=null&&x.push(new or(M.key,q,Wp(q.value.mapValue),Vt.exists(!0)))}return c.mutationQueue.addMutationBatch(I,h,x,l)}).next(S=>{_=S;const x=S.applyToLocalDocumentSet(m,P);return c.documentOverlayCache.saveOverlays(I,S.batchId,x)})}).then(()=>({batchId:_.batchId,changes:em(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let h=a.Ba[a.currentUser.toKey()];h||(h=new Be(be)),h=h.insert(l,c),a.Ba[a.currentUser.toKey()]=h}(r,s.batchId,n),await Vi(r,s.changes),await wa(r.remoteStore)}catch(s){const i=Zc(s,"Failed to persist write");n.reject(i)}}async function Dm(t,e){const n=ge(t);try{const r=await zT(n.localStore,e);e.targetChanges.forEach((s,i)=>{const a=n.Na.get(i);a&&(Pe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?Pe(a.va):s.removedDocuments.size>0&&(Pe(a.va),a.va=!1))}),await Vi(n,r,e)}catch(r){await Ri(r)}}function Ud(t,e,n){const r=ge(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,a)=>{const l=a.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=ge(a);c.onlineState=l;let h=!1;c.queries.forEach((f,m)=>{for(const _ of m.j_)_.Z_(l)&&(h=!0)}),h&&nu(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function NI(t,e,n){const r=ge(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new Be(re.comparator);a=a.insert(i,vt.newNoDocument(i,me.min()));const l=Ee().add(i),c=new ya(me.min(),new Map,new Be(be),a,l);await Dm(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),su(r)}else await rc(r.localStore,e,!1).then(()=>ic(r,e,n)).catch(Ri)}async function OI(t,e){const n=ge(t),r=e.batch.batchId;try{const s=await KT(n.localStore,e);Om(n,r,null),Nm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Vi(n,s)}catch(s){await Ri(s)}}async function xI(t,e,n){const r=ge(t);try{const s=await function(a,l){const c=ge(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(m=>(Pe(m!==null),f=m.keys(),c.mutationQueue.removeMutationBatch(h,m))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(r.localStore,e);Om(r,e,n),Nm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Vi(r,s)}catch(s){await Ri(s)}}function Nm(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Om(t,e,n){const r=ge(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function ic(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||xm(t,r)})}function xm(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Gc(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),su(t))}function Bd(t,e,n){for(const r of n)r instanceof Cm?(t.La.addReference(r.key,e),MI(t,r)):r instanceof km?(Z("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||xm(t,r.key)):fe()}function MI(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Z("SyncEngine","New document in limbo: "+n),t.xa.add(r),su(t))}function su(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new re(xe.fromString(e)),r=t.qa.next();t.Na.set(r,new bI(n)),t.Oa=t.Oa.insert(n,r),Im(t.remoteStore,new Qn(sn(da(n.path)),r,"TargetPurposeLimboResolution",xc.oe))}}async function Vi(t,e,n){const r=ge(t),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{a.push(r.Ka(c,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(h){s.push(h);const m=zc.Wi(c.targetId,h);i.push(m)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(c,h){const f=ge(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>$.forEach(h,_=>$.forEach(_.$i,I=>f.persistence.referenceDelegate.addReference(m,_.targetId,I)).next(()=>$.forEach(_.Ui,I=>f.persistence.referenceDelegate.removeReference(m,_.targetId,I)))))}catch(m){if(!Si(m))throw m;Z("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const _=m.targetId;if(!m.fromCache){const I=f.os.get(_),k=I.snapshotVersion,P=I.withLastLimboFreeSnapshotVersion(k);f.os=f.os.insert(_,P)}}}(r.localStore,i))}async function LI(t,e){const n=ge(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const r=await vm(n.localStore,e);n.currentUser=e,function(i,a){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new Y(O.CANCELLED,a))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Vi(n,r.hs)}}function FI(t,e){const n=ge(t),r=n.Na.get(e);if(r&&r.va)return Ee().add(r.key);{let s=Ee();const i=n.Ma.get(e);if(!i)return s;for(const a of i){const l=n.Fa.get(a);s=s.unionWith(l.view.Va)}return s}}function Mm(t){const e=ge(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Dm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=FI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=NI.bind(null,e),e.Ca.d_=wI.bind(null,e.eventManager),e.Ca.$a=TI.bind(null,e.eventManager),e}function UI(t){const e=ge(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=OI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xI.bind(null,e),e}class qo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=va(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return HT(this.persistence,new qT,e.initialUser,this.serializer)}Ga(e){return new BT(Kc.Zr,this.serializer)}Wa(e){return new XT}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}qo.provider={build:()=>new qo};class oc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ud(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=LI.bind(null,this.syncEngine),await yI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new EI}()}createDatastore(e){const n=va(e.databaseInfo.databaseId),r=function(i){return new nI(i)}(e.databaseInfo);return function(i,a,l,c){return new iI(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,a,l){return new aI(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Ud(this.syncEngine,n,0),function(){return Od.D()?new Od:new ZT}())}createSyncEngine(e,n){return function(s,i,a,l,c,h,f){const m=new RI(s,i,a,l,c,h);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ge(s);Z("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await ki(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}oc.provider={build:()=>new oc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class iu{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Vn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=_t.UNAUTHENTICATED,this.clientId=$p.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{Z("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(Z("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Zc(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function yl(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await vm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function $d(t,e){t.asyncQueue.verifyOperationInProgress();const n=await $I(t);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>xd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>xd(e.remoteStore,s)),t._onlineComponents=e}async function $I(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await yl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===O.FAILED_PRECONDITION||s.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;is("Error using user provided cache. Falling back to memory cache: "+n),await yl(t,new qo)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await yl(t,new qo);return t._offlineComponents}async function Lm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await $d(t,t._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await $d(t,new oc))),t._onlineComponents}function jI(t){return Lm(t).then(e=>e.syncEngine)}async function Wo(t){const e=await Lm(t),n=e.eventManager;return n.onListen=SI.bind(null,e.syncEngine),n.onUnlisten=kI.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=PI.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=VI.bind(null,e.syncEngine),n}function qI(t,e,n={}){const r=new Pn;return t.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const f=new iu({next:_=>{f.Za(),a.enqueueAndForget(()=>tu(i,m));const I=_.docs.has(l);!I&&_.fromCache?h.reject(new Y(O.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&_.fromCache&&c&&c.source==="server"?h.reject(new Y(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),m=new ru(da(l.path),f,{includeMetadataChanges:!0,_a:!0});return eu(i,m)}(await Wo(t),t.asyncQueue,e,n,r)),r.promise}function WI(t,e,n={}){const r=new Pn;return t.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const f=new iu({next:_=>{f.Za(),a.enqueueAndForget(()=>tu(i,m)),_.fromCache&&c.source==="server"?h.reject(new Y(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),m=new ru(l,f,{includeMetadataChanges:!0,_a:!0});return eu(i,m)}(await Wo(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Fm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(t,e,n){if(!n)throw new Y(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function HI(t,e,n,r){if(e===!0&&r===!0)throw new Y(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function qd(t){if(!re.isDocumentKey(t))throw new Y(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Wd(t){if(re.isDocumentKey(t))throw new Y(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ta(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":fe()}function Dt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ta(t);throw new Y(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function KI(t,e){if(e<=0)throw new Y(O.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}HI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Fm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Y(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Y(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Y(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ia{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hd({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new lw;switch(r.type){case"firstParty":return new dw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=jd.get(n);r&&(Z("ComponentProvider","Removing Datastore"),jd.delete(n),r.terminate())}(this),Promise.resolve()}}function zI(t,e,n,r={}){var s;const i=(t=Dt(t,Ia))._getSettings(),a=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&is("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=_t.MOCK_USER;else{l=Fv(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new Y(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new _t(h)}t._authCredentials=new cw(new Bp(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new fn(this.firestore,e,this._query)}}class wt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wt(this.firestore,e,this._key)}}class Zn extends fn{constructor(e,n,r){super(e,n,da(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wt(this.firestore,null,new re(e))}withConverter(e){return new Zn(this.firestore,e,this._path)}}function co(t,e,...n){if(t=He(t),Um("collection","path",e),t instanceof Ia){const r=xe.fromString(e,...n);return Wd(r),new Zn(t,null,r)}{if(!(t instanceof wt||t instanceof Zn))throw new Y(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return Wd(r),new Zn(t.firestore,null,r)}}function Ot(t,e,...n){if(t=He(t),arguments.length===1&&(e=$p.newId()),Um("doc","path",e),t instanceof Ia){const r=xe.fromString(e,...n);return qd(r),new wt(t,null,new re(r))}{if(!(t instanceof wt||t instanceof Zn))throw new Y(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return qd(r),new wt(t.firestore,t instanceof Zn?t.converter:null,new re(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new wm(this,"async_queue_retry"),this.Vu=()=>{const r=_l();r&&Z("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=_l();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=_l();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Pn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Si(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Vn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=Xc.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&fe()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function zd(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Nn extends Ia{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Kd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Kd(e),this._firestoreClient=void 0,await e}}}function GI(t,e){const n=typeof t=="object"?t:Vp(),r=typeof t=="string"?t:"(default)",s=Nc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Mv("firestore");i&&zI(s,...i)}return s}function Di(t){if(t._terminated)throw new Y(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||QI(t),t._firestoreClient}function QI(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,h,f){return new bw(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Fm(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new BI(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ds(ht.fromBase64String(e))}catch(n){throw new Y(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ds(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
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
 */class au{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI=/^__.*__$/;class JI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new or(e,this.data,this.fieldMask,n,this.fieldTransforms):new Pi(e,this.data,n,this.fieldTransforms)}}class Bm{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new or(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function $m(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fe()}}class lu{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new lu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ho(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if($m(this.Cu)&&YI.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class XI{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||va(e)}Qu(e,n,r,s=!1){return new lu({Cu:e,methodName:n,qu:r,path:lt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Oi(t){const e=t._freezeSettings(),n=va(t._databaseId);return new XI(t._databaseId,!!e.ignoreUndefinedProperties,n)}function jm(t,e,n,r,s,i={}){const a=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);uu("Data must be an object, but it was:",a,r);const l=Km(r,a);let c,h;if(i.merge)c=new Mt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const _=ac(e,m,n);if(!a.contains(_))throw new Y(O.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);Gm(f,_)||f.push(_)}c=new Mt(f),h=a.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,h=a.fieldTransforms;return new JI(new kt(l),c,h)}class ba extends Aa{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ba}}class cu extends Aa{_toFieldTransform(e){return new Yw(e.path,new mi)}isEqual(e){return e instanceof cu}}function qm(t,e,n,r){const s=t.Qu(1,e,n);uu("Data must be an object, but it was:",s,r);const i=[],a=kt.empty();Cr(r,(c,h)=>{const f=hu(e,c,n);h=He(h);const m=s.Nu(f);if(h instanceof ba)i.push(f);else{const _=xi(h,m);_!=null&&(i.push(f),a.set(f,_))}});const l=new Mt(i);return new Bm(a,l,s.fieldTransforms)}function Wm(t,e,n,r,s,i){const a=t.Qu(1,e,n),l=[ac(e,r,n)],c=[s];if(i.length%2!=0)throw new Y(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)l.push(ac(e,i[_])),c.push(i[_+1]);const h=[],f=kt.empty();for(let _=l.length-1;_>=0;--_)if(!Gm(h,l[_])){const I=l[_];let k=c[_];k=He(k);const P=a.Nu(I);if(k instanceof ba)h.push(I);else{const S=xi(k,P);S!=null&&(h.push(I),f.set(I,S))}}const m=new Mt(h);return new Bm(f,m,a.fieldTransforms)}function Hm(t,e,n,r=!1){return xi(n,t.Qu(r?4:3,e))}function xi(t,e){if(zm(t=He(t)))return uu("Unsupported field value:",e,t),Km(t,e);if(t instanceof Aa)return function(r,s){if(!$m(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=xi(l,s.Lu(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=He(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return zw(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Fe.fromDate(r);return{timestampValue:$o(s.serializer,i)}}if(r instanceof Fe){const i=new Fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:$o(s.serializer,i)}}if(r instanceof ou)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ds)return{bytesValue:dm(s.serializer,r._byteString)};if(r instanceof wt){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Wc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof au)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return $c(l.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Ta(r)}`)}(t,e)}function Km(t,e){const n={};return jp(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Cr(t,(r,s)=>{const i=xi(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function zm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fe||t instanceof ou||t instanceof ds||t instanceof wt||t instanceof Aa||t instanceof au)}function uu(t,e,n){if(!zm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Ta(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function ac(t,e,n){if((e=He(e))instanceof Ni)return e._internalPath;if(typeof e=="string")return hu(t,e);throw Ho("Field path arguments must be of type string or ",t,!1,void 0,n)}const ZI=new RegExp("[~\\*/\\[\\]]");function hu(t,e,n){if(e.search(ZI)>=0)throw Ho(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ni(...e.split("."))._internalPath}catch{throw Ho(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ho(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new Y(O.INVALID_ARGUMENT,l+t+c)}function Gm(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new eA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ra("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class eA extends du{data(){return super.data()}}function Ra(t,e){return typeof e=="string"?hu(t,e):e instanceof Ni?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fu{}class Sa extends fu{}function vl(t,e,...n){let r=[];e instanceof fu&&r.push(e),r=r.concat(n),function(i){const a=i.filter(c=>c instanceof pu).length,l=i.filter(c=>c instanceof Pa).length;if(a>1||a>0&&l>0)throw new Y(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Pa extends Sa{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Pa(e,n,r)}_apply(e){const n=this._parse(e);return Ym(e._query,n),new fn(e.firestore,e.converter,Xl(e._query,n))}_parse(e){const n=Oi(e.firestore);return function(i,a,l,c,h,f,m){let _;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new Y(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Qd(m,f);const I=[];for(const k of m)I.push(Gd(c,i,k));_={arrayValue:{values:I}}}else _=Gd(c,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Qd(m,f),_=Hm(l,a,m,f==="in"||f==="not-in");return Je.create(h,f,_)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function tA(t,e,n){const r=e,s=Ra("where",t);return Pa._create(s,r,n)}class pu extends fu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new pu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Yt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let a=s;const l=i.getFlattenedFilters();for(const c of l)Ym(a,c),a=Xl(a,c)}(e._query,n),new fn(e.firestore,e.converter,Xl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class mu extends Sa{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new mu(e,n)}_apply(e){const n=function(s,i,a){if(s.startAt!==null)throw new Y(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Y(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new pi(i,a)}(e._query,this._field,this._direction);return new fn(e.firestore,e.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new kr(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function nA(t,e="asc"){const n=e,r=Ra("orderBy",t);return mu._create(r,n)}class gu extends Sa{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new gu(e,n,r)}_apply(e){return new fn(e.firestore,e.converter,Uo(e._query,this._limit,this._limitType))}}function rA(t){return KI("limit",t),gu._create("limit",t,"F")}class _u extends Sa{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new _u(e,n,r)}_apply(e){const n=iA(e,this.type,this._docOrFields,this._inclusive);return new fn(e.firestore,e.converter,function(s,i){return new kr(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(e._query,n))}}function sA(...t){return _u._create("startAfter",t,!1)}function iA(t,e,n,r){if(n[0]=He(n[0]),n[0]instanceof du)return function(i,a,l,c,h){if(!c)throw new Y(O.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${l}().`);const f=[];for(const m of Jr(i))if(m.field.isKeyField())f.push(Fo(a,c.key));else{const _=c.data.field(m.field);if(ha(_))throw new Y(O.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+m.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(_===null){const I=m.field.canonicalString();throw new Y(O.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${I}' (used as the orderBy) does not exist.`)}f.push(_)}return new cs(f,h)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const s=Oi(t.firestore);return function(a,l,c,h,f,m){const _=a.explicitOrderBy;if(f.length>_.length)throw new Y(O.INVALID_ARGUMENT,`Too many arguments provided to ${h}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const I=[];for(let k=0;k<f.length;k++){const P=f[k];if(_[k].field.isKeyField()){if(typeof P!="string")throw new Y(O.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${h}(), but got a ${typeof P}`);if(!Bc(a)&&P.indexOf("/")!==-1)throw new Y(O.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${h}() must be a plain document ID, but '${P}' contains a slash.`);const S=a.path.child(xe.fromString(P));if(!re.isDocumentKey(S))throw new Y(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${h}() must result in a valid document path, but '${S}' is not because it contains an odd number of segments.`);const x=new re(S);I.push(Fo(l,x))}else{const S=Hm(c,h,P);I.push(S)}}return new cs(I,m)}(t._query,t.firestore._databaseId,s,e,n,r)}}function Gd(t,e,n){if(typeof(n=He(n))=="string"){if(n==="")throw new Y(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Bc(e)&&n.indexOf("/")!==-1)throw new Y(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(xe.fromString(n));if(!re.isDocumentKey(r))throw new Y(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Fo(t,new re(r))}if(n instanceof wt)return Fo(t,n._key);throw new Y(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ta(n)}.`)}function Qd(t,e){if(!Array.isArray(t)||t.length===0)throw new Y(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ym(t,e){const n=function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Y(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class oA{convertValue(e,n="none"){switch(Sr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Rr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw fe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Cr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Ge(a.doubleValue));return new au(i)}convertGeoPoint(e){return new ou(Ge(e.latitude),Ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Mc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(hi(e));default:return null}}convertTimestamp(e){const n=rr(e);return new Fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=xe.fromString(e);Pe(ym(r));const s=new di(r.get(1),r.get(3)),i=new re(r.popFirst(5));return s.isEqual(n)||Vn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Xm extends du{constructor(e,n,r,s,i,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new wo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ra("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class wo extends Xm{data(e={}){return super.data(e)}}class Zm{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ks(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new wo(this._firestore,this._userDataWriter,r.key,r,new Ks(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new wo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ks(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new wo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ks(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:aA(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function aA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fe()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(t){t=Dt(t,wt);const e=Dt(t.firestore,Nn);return qI(Di(e),t._key).then(n=>eg(e,t,n))}class yu extends oA{constructor(e){super(),this.firestore=e}convertBytes(e){return new ds(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,n)}}function lA(t){t=Dt(t,fn);const e=Dt(t.firestore,Nn),n=Di(e),r=new yu(e);return Qm(t._query),WI(n,t._query).then(s=>new Zm(e,r,t,s))}function wl(t,e,n){t=Dt(t,wt);const r=Dt(t.firestore,Nn),s=Jm(t.converter,e,n);return Ca(r,[jm(Oi(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Vt.none())])}function cA(t,e,n,...r){t=Dt(t,wt);const s=Dt(t.firestore,Nn),i=Oi(s);let a;return a=typeof(e=He(e))=="string"||e instanceof Ni?Wm(i,"updateDoc",t._key,e,n,r):qm(i,"updateDoc",t._key,e),Ca(s,[a.toMutation(t._key,Vt.exists(!0))])}function Tl(t){return Ca(Dt(t.firestore,Nn),[new _a(t._key,Vt.none())])}function Yd(t,...e){var n,r,s;t=He(t);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||zd(e[a])||(i=e[a],a++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(zd(e[a])){const m=e[a];e[a]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[a+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[a+2]=(s=m.complete)===null||s===void 0?void 0:s.bind(m)}let c,h,f;if(t instanceof wt)h=Dt(t.firestore,Nn),f=da(t._key.path),c={next:m=>{e[a]&&e[a](eg(h,t,m))},error:e[a+1],complete:e[a+2]};else{const m=Dt(t,fn);h=Dt(m.firestore,Nn),f=m._query;const _=new yu(h);c={next:I=>{e[a]&&e[a](new Zm(h,_,m,I))},error:e[a+1],complete:e[a+2]},Qm(t._query)}return function(_,I,k,P){const S=new iu(P),x=new ru(I,S,k);return _.asyncQueue.enqueueAndForget(async()=>eu(await Wo(_),x)),()=>{S.Za(),_.asyncQueue.enqueueAndForget(async()=>tu(await Wo(_),x))}}(Di(h),f,l,c)}function Ca(t,e){return function(r,s){const i=new Pn;return r.asyncQueue.enqueueAndForget(async()=>DI(await jI(r),s,i)),i.promise}(Di(t),e)}function eg(t,e,n){const r=n.docs.get(e._key),s=new yu(t);return new Xm(t,s,e._key,r,new Ks(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Oi(e)}set(e,n,r){this._verifyNotCommitted();const s=Il(e,this._firestore),i=Jm(s.converter,n,r),a=jm(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,Vt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Il(e,this._firestore);let a;return a=typeof(n=He(n))=="string"||n instanceof Ni?Wm(this._dataReader,"WriteBatch.update",i._key,n,r,s):qm(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(a.toMutation(i._key,Vt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Il(e,this._firestore);return this._mutations=this._mutations.concat(new _a(n._key,Vt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new Y(O.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Il(t,e){if((t=He(t)).firestore!==e)throw new Y(O.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function uo(){return new cu("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(t){return Di(t=Dt(t,Nn)),new uA(t,e=>Ca(t,e))}(function(e,n=!0){(function(s){ms=s})(ps),ss(new Ar("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new Nn(new uw(r.getProvider("auth-internal")),new pw(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Y(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new di(h.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Xn(hd,"4.7.3",e),Xn(hd,"4.7.3","esm2017")})();var hA="firebase",dA="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xn(hA,dA,"app");function vu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function tg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fA=tg,ng=new Ai("auth","Firebase",tg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko=new Vc("@firebase/auth");function pA(t,...e){Ko.logLevel<=we.WARN&&Ko.warn(`Auth (${ps}): ${t}`,...e)}function To(t,...e){Ko.logLevel<=we.ERROR&&Ko.error(`Auth (${ps}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t,...e){throw Eu(t,...e)}function an(t,...e){return Eu(t,...e)}function rg(t,e,n){const r=Object.assign(Object.assign({},fA()),{[e]:n});return new Ai("auth","Firebase",r).create(e,{appName:t.name})}function er(t){return rg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Eu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ng.create(t,...e)}function he(t,e,...n){if(!t)throw Eu(e,...n)}function bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw To(e),new Error(e)}function On(t,e){t||bn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function mA(){return Jd()==="http:"||Jd()==="https:"}function Jd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mA()||jv()||"connection"in navigator)?navigator.onLine:!0}function _A(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,n){this.shortDelay=e,this.longDelay=n,On(n>e,"Short delay should be less than long delay!"),this.isMobile=Uv()||qv()}get(){return gA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(t,e){On(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const vA=new Mi(3e4,6e4);function ar(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ln(t,e,n,r,s={}){return ig(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=bi(Object.assign({key:t.config.apiKey},a)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return $v()||(h.referrerPolicy="no-referrer"),sg.fetch()(og(t,t.config.apiHost,n,l),h)})}async function ig(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},yA),e);try{const s=new wA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw ho(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ho(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw ho(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw ho(t,"user-disabled",a);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw rg(t,f,h);Jt(t,f)}}catch(s){if(s instanceof Mn)throw s;Jt(t,"network-request-failed",{message:String(s)})}}async function ka(t,e,n,r,s={}){const i=await Ln(t,e,n,r,s);return"mfaPendingCredential"in i&&Jt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function og(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?wu(t.config,s):`${t.config.apiScheme}://${s}`}function EA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class wA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(an(this.auth,"network-request-failed")),vA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ho(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=an(t,e,r);return s.customData._tokenResponse=n,s}function Xd(t){return t!==void 0&&t.enterprise!==void 0}class TA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return EA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function IA(t,e){return Ln(t,"GET","/v2/recaptchaConfig",ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AA(t,e){return Ln(t,"POST","/v1/accounts:delete",e)}async function ag(t,e){return Ln(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bA(t,e=!1){const n=He(t),r=await n.getIdToken(e),s=Tu(r);he(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ri(bl(s.auth_time)),issuedAtTime:ri(bl(s.iat)),expirationTime:ri(bl(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function bl(t){return Number(t)*1e3}function Tu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return To("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ap(n);return s?JSON.parse(s):(To("Failed to decode base64 JWT payload"),null)}catch(s){return To("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Zd(t){const e=Tu(t);return he(e,"internal-error"),he(typeof e.exp<"u","internal-error"),he(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Mn&&RA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function RA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ri(this.lastLoginAt),this.creationTime=ri(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await yi(t,ag(n,{idToken:r}));he(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?lg(i.providerUserInfo):[],l=CA(t.providerData,a),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?h:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new cc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function PA(t){const e=He(t);await zo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function CA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function lg(t){return t.map(e=>{var{providerId:n}=e,r=vu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kA(t,e){const n=await ig(t,{},async()=>{const r=bi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=og(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",sg.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function VA(t,e){return Ln(t,"POST","/v2/accounts:revokeToken",ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){he(e.idToken,"internal-error"),he(typeof e.idToken<"u","internal-error"),he(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){he(e.length!==0,"internal-error");const n=Zd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(he(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await kA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new Zr;return r&&(he(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(he(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(he(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zr,this.toJSON())}_performRefresh(){return bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(t,e){he(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Rn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=vu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new SA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new cc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await yi(this,this.stsTokenManager.getToken(this.auth,e));return he(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bA(this,e)}reload(){return PA(this)}_assign(e){this!==e&&(he(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Rn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){he(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await zo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(An(this.auth.app))return Promise.reject(er(this.auth));const e=await this.getIdToken();return await yi(this,AA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,a,l,c,h,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,_=(s=n.email)!==null&&s!==void 0?s:void 0,I=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,k=(a=n.photoURL)!==null&&a!==void 0?a:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,S=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,x=(h=n.createdAt)!==null&&h!==void 0?h:void 0,M=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:q,emailVerified:j,isAnonymous:ie,providerData:oe,stsTokenManager:w}=n;he(q&&w,e,"internal-error");const g=Zr.fromJSON(this.name,w);he(typeof q=="string",e,"internal-error"),jn(m,e.name),jn(_,e.name),he(typeof j=="boolean",e,"internal-error"),he(typeof ie=="boolean",e,"internal-error"),jn(I,e.name),jn(k,e.name),jn(P,e.name),jn(S,e.name),jn(x,e.name),jn(M,e.name);const y=new Rn({uid:q,auth:e,email:_,emailVerified:j,displayName:m,isAnonymous:ie,photoURL:k,phoneNumber:I,tenantId:P,stsTokenManager:g,createdAt:x,lastLoginAt:M});return oe&&Array.isArray(oe)&&(y.providerData=oe.map(T=>Object.assign({},T))),S&&(y._redirectEventId=S),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new Zr;s.updateFromServerResponse(n);const i=new Rn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await zo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];he(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?lg(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Zr;l.updateFromIdToken(r);const c=new Rn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new cc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef=new Map;function Sn(t){On(t instanceof Function,"Expected a class definition");let e=ef.get(t);return e?(On(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ef.set(t,e),e)}/**
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
 */class cg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}cg.type="NONE";const tf=cg;/**
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
 */function Io(t,e,n){return`firebase:${t}:${e}:${n}`}class es{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Io(this.userKey,s.apiKey,i),this.fullPersistenceKey=Io("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Rn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new es(Sn(tf),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Sn(tf);const a=Io(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(a);if(f){const m=Rn._fromJSON(e,f);h!==i&&(l=m),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new es(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new es(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ug(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mg(e))return"Blackberry";if(gg(e))return"Webos";if(hg(e))return"Safari";if((e.includes("chrome/")||dg(e))&&!e.includes("edge/"))return"Chrome";if(pg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ug(t=Tt()){return/firefox\//i.test(t)}function hg(t=Tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dg(t=Tt()){return/crios\//i.test(t)}function fg(t=Tt()){return/iemobile/i.test(t)}function pg(t=Tt()){return/android/i.test(t)}function mg(t=Tt()){return/blackberry/i.test(t)}function gg(t=Tt()){return/webos/i.test(t)}function Iu(t=Tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function DA(t=Tt()){var e;return Iu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function NA(){return Wv()&&document.documentMode===10}function _g(t=Tt()){return Iu(t)||pg(t)||gg(t)||mg(t)||/windows phone/i.test(t)||fg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(t,e=[]){let n;switch(t){case"Browser":n=nf(Tt());break;case"Worker":n=`${nf(Tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ps}/${r}`}/**
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
 */class OA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function xA(t,e={}){return Ln(t,"GET","/v2/passwordPolicy",ar(t,e))}/**
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
 */const MA=6;class LA{constructor(e){var n,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:MA,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rf(this),this.idTokenSubscription=new rf(this),this.beforeStateQueue=new OA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ng,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Sn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await es.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ag(this,{idToken:e}),r=await Rn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(An(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return he(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_A()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(An(this.app))return Promise.reject(er(this));const n=e?He(e):null;return n&&he(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&he(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return An(this.app)?Promise.reject(er(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return An(this.app)?Promise.reject(er(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Sn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xA(this),n=new LA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ai("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await VA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Sn(e)||this._popupRedirectResolver;he(n,this,"argument-error"),this.redirectPersistenceManager=await es.create(this,[Sn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(he(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return he(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&pA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Dr(t){return He(t)}class rf{constructor(e){this.auth=e,this.observer=null,this.addObserver=Xv(n=>this.observer=n)}get next(){return he(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Va={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function UA(t){Va=t}function vg(t){return Va.loadJS(t)}function BA(){return Va.recaptchaEnterpriseScript}function $A(){return Va.gapiScript}function jA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const qA="recaptcha-enterprise",WA="NO_RECAPTCHA";class HA{constructor(e){this.type=qA,this.auth=Dr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{IA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new TA(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,a,l){const c=window.grecaptcha;Xd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(WA)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,a)=>{r(this.auth).then(l=>{if(!n&&Xd(window.grecaptcha))s(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=BA();c.length!==0&&(c+=l),vg(c).then(()=>{s(l,i,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function sf(t,e,n,r=!1){const s=new HA(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function uc(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await sf(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await sf(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KA(t,e){const n=Nc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(xo(i,e??{}))return s;Jt(s,"already-initialized")}return n.initialize({options:e})}function zA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Sn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function GA(t,e,n){const r=Dr(t);he(r._canInitEmulator,r,"emulator-config-failed"),he(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Eg(e),{host:a,port:l}=QA(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),YA()}function Eg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function QA(t){const e=Eg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:of(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:of(a)}}}function of(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function YA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bn("not implemented")}_getIdTokenResponse(e){return bn("not implemented")}_linkToIdToken(e,n){return bn("not implemented")}_getReauthenticationResolver(e){return bn("not implemented")}}async function JA(t,e){return Ln(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XA(t,e){return ka(t,"POST","/v1/accounts:signInWithPassword",ar(t,e))}async function ZA(t,e){return Ln(t,"POST","/v1/accounts:sendOobCode",ar(t,e))}async function eb(t,e){return ZA(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tb(t,e){return ka(t,"POST","/v1/accounts:signInWithEmailLink",ar(t,e))}async function nb(t,e){return ka(t,"POST","/v1/accounts:signInWithEmailLink",ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends Au{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new vi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new vi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uc(e,n,"signInWithPassword",XA);case"emailLink":return tb(e,{email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uc(e,r,"signUpPassword",JA);case"emailLink":return nb(e,{idToken:n,email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ts(t,e){return ka(t,"POST","/v1/accounts:signInWithIdp",ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb="http://localhost";class Pr extends Au{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Pr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=vu(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Pr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return ts(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ts(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ts(e,n)}buildRequest(){const e={requestUri:rb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=bi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ib(t){const e=$s(js(t)).link,n=e?$s(js(e)).deep_link_id:null,r=$s(js(t)).deep_link_id;return(r?$s(js(r)).link:null)||r||n||e||t}class bu{constructor(e){var n,r,s,i,a,l;const c=$s(js(e)),h=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,m=sb((s=c.mode)!==null&&s!==void 0?s:null);he(h&&f&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=ib(e);try{return new bu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(){this.providerId=ys.PROVIDER_ID}static credential(e,n){return vi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=bu.parseLink(n);return he(r,"argument-error"),vi._fromEmailAndCode(e,r.code,r.tenantId)}}ys.PROVIDER_ID="password";ys.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ys.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Li extends wg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends Li{constructor(){super("facebook.com")}static credential(e){return Pr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Hn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Li{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Pr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Kn.credential(n,r)}catch{return null}}}Kn.GOOGLE_SIGN_IN_METHOD="google.com";Kn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Li{constructor(){super("github.com")}static credential(e){return Pr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.GITHUB_SIGN_IN_METHOD="github.com";zn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends Li{constructor(){super("twitter.com")}static credential(e,n){return Pr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Gn.credential(n,r)}catch{return null}}}Gn.TWITTER_SIGN_IN_METHOD="twitter.com";Gn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Rn._fromIdTokenResponse(e,r,s),a=af(r);return new fs({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=af(r);return new fs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function af(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go extends Mn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Go.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Go(e,n,r,s)}}function Tg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Go._fromErrorAndOperation(t,i,e,r):i})}async function ob(t,e,n=!1){const r=await yi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fs._forOperation(t,"link",r)}/**
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
 */async function ab(t,e,n=!1){const{auth:r}=t;if(An(r.app))return Promise.reject(er(r));const s="reauthenticate";try{const i=await yi(t,Tg(r,s,e,t),n);he(i.idToken,r,"internal-error");const a=Tu(i.idToken);he(a,r,"internal-error");const{sub:l}=a;return he(t.uid===l,r,"user-mismatch"),fs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Jt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ig(t,e,n=!1){if(An(t.app))return Promise.reject(er(t));const r="signIn",s=await Tg(t,r,e),i=await fs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function lb(t,e){return Ig(Dr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cb(t){const e=Dr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ub(t,e,n){const r=Dr(t);await uc(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",eb)}function hb(t,e,n){return An(t.app)?Promise.reject(er(t)):lb(He(t),ys.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&cb(t),r})}function db(t,e,n,r){return He(t).onIdTokenChanged(e,n,r)}function fb(t,e,n){return He(t).beforeAuthStateChanged(e,n)}function pb(t,e,n,r){return He(t).onAuthStateChanged(e,n,r)}function mb(t){return He(t).signOut()}const Qo="__sak";/**
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
 */class Ag{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Qo,"1"),this.storage.removeItem(Qo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb=1e3,_b=10;class bg extends Ag{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_g(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);NA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,_b):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},gb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}bg.type="LOCAL";const yb=bg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg extends Ag{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Rg.type="SESSION";const Sg=Rg;/**
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
 */function vb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Da{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Da(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(n.origin,i)),c=await vb(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Da.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Eb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const h=Ru("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(m){const _=m;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(_.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(){return window}function wb(t){ln().location.href=t}/**
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
 */function Pg(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function Tb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ib(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ab(){return Pg()?self:null}/**
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
 */const Cg="firebaseLocalStorageDb",bb=1,Yo="firebaseLocalStorage",kg="fbase_key";class Fi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Na(t,e){return t.transaction([Yo],e?"readwrite":"readonly").objectStore(Yo)}function Rb(){const t=indexedDB.deleteDatabase(Cg);return new Fi(t).toPromise()}function hc(){const t=indexedDB.open(Cg,bb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Yo,{keyPath:kg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Yo)?e(r):(r.close(),await Rb(),e(await hc()))})})}async function lf(t,e,n){const r=Na(t,!0).put({[kg]:e,value:n});return new Fi(r).toPromise()}async function Sb(t,e){const n=Na(t,!1).get(e),r=await new Fi(n).toPromise();return r===void 0?null:r.value}function cf(t,e){const n=Na(t,!0).delete(e);return new Fi(n).toPromise()}const Pb=800,Cb=3;class Vg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Cb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Da._getInstance(Ab()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Tb(),!this.activeServiceWorker)return;this.sender=new Eb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ib()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hc();return await lf(e,Qo,"1"),await cf(e,Qo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>lf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Sb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Na(s,!1).getAll();return new Fi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Pb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vg.type="LOCAL";const kb=Vg;new Mi(3e4,6e4);/**
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
 */function Vb(t,e){return e?Sn(e):(he(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Su extends Au{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ts(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ts(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ts(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Db(t){return Ig(t.auth,new Su(t),t.bypassAuthState)}function Nb(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),ab(n,new Su(t),t.bypassAuthState)}async function Ob(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),ob(n,new Su(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Db;case"linkViaPopup":case"linkViaRedirect":return Ob;case"reauthViaPopup":case"reauthViaRedirect":return Nb;default:Jt(this.auth,"internal-error")}}resolve(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb=new Mi(2e3,1e4);class Kr extends Dg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Kr.currentPopupAction&&Kr.currentPopupAction.cancel(),Kr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return he(e,this.auth,"internal-error"),e}async onExecution(){On(this.filter.length===1,"Popup operations only handle one event");const e=Ru();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(an(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xb.get())};e()}}Kr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mb="pendingRedirect",Ao=new Map;class Lb extends Dg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ao.get(this.auth._key());if(!e){try{const r=await Fb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ao.set(this.auth._key(),e)}return this.bypassAuthState||Ao.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Fb(t,e){const n=$b(e),r=Bb(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Ub(t,e){Ao.set(t._key(),e)}function Bb(t){return Sn(t._redirectPersistence)}function $b(t){return Io(Mb,t.config.apiKey,t.name)}async function jb(t,e,n=!1){if(An(t.app))return Promise.reject(er(t));const r=Dr(t),s=Vb(r,e),a=await new Lb(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb=10*60*1e3;class Wb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Hb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ng(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(an(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qb&&this.cachedEventUids.clear(),this.cachedEventUids.has(uf(e))}saveEventToCache(e){this.cachedEventUids.add(uf(e)),this.lastProcessedEventTime=Date.now()}}function uf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ng({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Hb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ng(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kb(t,e={}){return Ln(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gb=/^https?/;async function Qb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Kb(t);for(const n of e)try{if(Yb(n))return}catch{}Jt(t,"unauthorized-domain")}function Yb(t){const e=lc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!Gb.test(n))return!1;if(zb.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Jb=new Mi(3e4,6e4);function hf(){const t=ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Xb(t){return new Promise((e,n)=>{var r,s,i;function a(){hf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hf(),n(an(t,"network-request-failed"))},timeout:Jb.get()})}if(!((s=(r=ln().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ln().gapi)===null||i===void 0)&&i.load)a();else{const l=jA("iframefcb");return ln()[l]=()=>{gapi.load?a():n(an(t,"network-request-failed"))},vg(`${$A()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw bo=null,e})}let bo=null;function Zb(t){return bo=bo||Xb(t),bo}/**
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
 */const e0=new Mi(5e3,15e3),t0="__/auth/iframe",n0="emulator/auth/iframe",r0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},s0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function i0(t){const e=t.config;he(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?wu(e,n0):`https://${t.config.authDomain}/${t0}`,r={apiKey:e.apiKey,appName:t.name,v:ps},s=s0.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${bi(r).slice(1)}`}async function o0(t){const e=await Zb(t),n=ln().gapi;return he(n,t,"internal-error"),e.open({where:document.body,url:i0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:r0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=an(t,"network-request-failed"),l=ln().setTimeout(()=>{i(a)},e0.get());function c(){ln().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
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
 */const a0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},l0=500,c0=600,u0="_blank",h0="http://localhost";class df{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function d0(t,e,n,r=l0,s=c0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},a0),{width:r.toString(),height:s.toString(),top:i,left:a}),h=Tt().toLowerCase();n&&(l=dg(h)?u0:n),ug(h)&&(e=e||h0,c.scrollbars="yes");const f=Object.entries(c).reduce((_,[I,k])=>`${_}${I}=${k},`,"");if(DA(h)&&l!=="_self")return f0(e||"",l),new df(null);const m=window.open(e||"",l,f);he(m,t,"popup-blocked");try{m.focus()}catch{}return new df(m)}function f0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const p0="__/auth/handler",m0="emulator/auth/handler",g0=encodeURIComponent("fac");async function ff(t,e,n,r,s,i){he(t.config.authDomain,t,"auth-domain-config-required"),he(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ps,eventId:s};if(e instanceof wg){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",Jv(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))a[f]=m}if(e instanceof Li){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(a.scopes=f.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),h=c?`#${g0}=${encodeURIComponent(c)}`:"";return`${_0(t)}?${bi(l).slice(1)}${h}`}function _0({config:t}){return t.emulator?wu(t,m0):`https://${t.authDomain}/${p0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl="webStorageSupport";class y0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sg,this._completeRedirectFn=jb,this._overrideRedirectResult=Ub}async _openPopup(e,n,r,s){var i;On((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await ff(e,n,r,lc(),s);return d0(e,a,Ru())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ff(e,n,r,lc(),s);return wb(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(On(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await o0(e),r=new Wb(e);return n.register("authEvent",s=>(he(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Rl,{type:Rl},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Rl];a!==void 0&&n(!!a),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Qb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return _g()||hg()||Iu()}}const v0=y0;var pf="@firebase/auth",mf="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){he(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function T0(t){ss(new Ar("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;he(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yg(t)},h=new FA(r,s,i,c);return zA(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ss(new Ar("auth-internal",e=>{const n=Dr(e.getProvider("auth").getImmediate());return(r=>new E0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xn(pf,mf,w0(t)),Xn(pf,mf,"esm2017")}/**
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
 */const I0=5*60,A0=Sp("authIdTokenMaxAge")||I0;let gf=null;const b0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>A0)return;const s=n==null?void 0:n.token;gf!==s&&(gf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function R0(t=Vp()){const e=Nc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=KA(t,{popupRedirectResolver:v0,persistence:[kb,yb,Sg]}),r=Sp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=b0(i.toString());fb(n,a,()=>a(n.currentUser)),db(n,l=>a(l))}}const s=bp("auth");return s&&GA(n,`http://${s}`),n}function S0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}UA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=an("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",S0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});T0("Browser");const P0={apiKey:"AIzaSyBTn3Z_B1MYRJ-hOsL0I94QWBq2xh3EdFs",authDomain:"henryshus.firebaseapp.com",projectId:"henryshus",storageBucket:"henryshus.firebasestorage.app",messagingSenderId:"877597619520",appId:"1:877597619520:web:61e33ff74b9f03aa45f6a5",measurementId:"G-ESKWZ556XM"},Og=kp(P0),Ze=GI(Og),fo=R0(Og);function xg(){const t=ve([]),e=ve([]),n=ve(!1);let r=null,s=null;async function i(){const P=Fe.now(),S=new Fe(P.seconds-86400,P.nanoseconds);for(const x of e.value)if(x.borrowedAt&&x.borrowedAt.toMillis()<=S.toMillis()){const M=Al(Ze),q=Ot(Ze,"workstations",x.workstation);M.update(Ot(Ze,"borrowRecords",x.id),{returnedAt:uo()}),M.update(q,{status:"available",borrower:null,borrowedAt:null,currentBorrowRecord:null}),await M.commit()}}function a(){r||(r=Yd(co(Ze,"workstations"),P=>{const S=[];P.forEach(x=>{S.push({id:x.id,...x.data()})}),S.sort((x,M)=>x.name.localeCompare(M.name,"nb")),t.value=S},P=>console.error("Workstations error:",P)))}function l(){if(s)return;const P=vl(co(Ze,"borrowRecords"),tA("returnedAt","==",null));s=Yd(P,S=>{const x=[];S.forEach(M=>{x.push({id:M.id,...M.data()})}),x.sort((M,q)=>{var j,ie;return(((j=q.borrowedAt)==null?void 0:j.toMillis())??0)-(((ie=M.borrowedAt)==null?void 0:ie.toMillis())??0)}),e.value=x,i()},S=>console.error("Active borrows error:",S))}ia(()=>{r&&r(),s&&s()});async function c(P,S,x){const M=Al(Ze),q=Ot(co(Ze,"borrowRecords")),j=Ot(Ze,"workstations",P);M.update(j,{status:"borrowed",borrower:S,borrowedAt:uo(),currentBorrowRecord:q.id}),M.set(q,{workstation:P,borrower:S,borrowedAt:uo(),returnedAt:null,controllers:x??null}),await M.commit()}async function h(P){const S=Ot(Ze,"workstations",P),x=await El(S);if(!x.exists())return;const M=x.data().currentBorrowRecord,q=Al(Ze);q.update(S,{status:"available",borrower:null,borrowedAt:null,currentBorrowRecord:null}),M&&q.update(Ot(Ze,"borrowRecords",M),{returnedAt:uo(),borrower:null}),await q.commit()}async function f(P=20,S){const x=Fe.now(),M=new Fe(x.seconds-86400,x.nanoseconds);let q=vl(co(Ze,"borrowRecords"),nA("borrowedAt","desc"),rA(P));S&&(q=vl(q,sA(S)));const j=await lA(q),ie=[];let oe=null;for(const w of j.docs){oe=w;const g={id:w.id,...w.data()},y=g.borrowedAt&&g.borrowedAt.toMillis()<=M.toMillis();g.returnedAt&&(y?await Tl(w.ref):ie.push(g))}return{records:ie,lastVisible:oe}}async function m(){const P=[{name:"PlayStation",type:"playstation",keyboard:"Kontroller x2",mouse:"",accessories:""},{name:"PlayStation 2",type:"playstation",keyboard:"Kontroller x2",mouse:"",accessories:""},{name:"PC 1",type:"pc",keyboard:"Keyboard 1",mouse:"Mouse 1",accessories:"Headset"},{name:"PC 2",type:"pc",keyboard:"Keyboard 2",mouse:"Mouse 2",accessories:""},{name:"PC 3",type:"pc",keyboard:"Keyboard 3",mouse:"Mouse 3",accessories:""}];for(const S of P){const x=Ot(Ze,"workstations",S.name);(await El(x)).exists()||await wl(x,{name:S.name,type:S.type,keyboard:S.keyboard,mouse:S.mouse,accessories:S.accessories,status:"available",borrower:null,borrowedAt:null,currentBorrowRecord:null})}}async function _(P,S,x,M,q){await wl(Ot(Ze,"workstations",P),{name:P,type:S,keyboard:x||"",mouse:M||"",accessories:q||"",status:"available",borrower:null,borrowedAt:null,currentBorrowRecord:null})}async function I(P){await Tl(Ot(Ze,"workstations",P))}async function k(P,S){var M;const x=(M=S.newName)==null?void 0:M.trim();if(x&&x!==P){const q=await El(Ot(Ze,"workstations",P));if(!q.exists())return;const j=q.data();await wl(Ot(Ze,"workstations",x),{...j,name:x,keyboard:S.keyboard??j.keyboard,mouse:S.mouse??j.mouse,accessories:S.accessories??j.accessories,type:S.type??j.type}),await Tl(Ot(Ze,"workstations",P))}else{const q={};S.keyboard!==void 0&&(q.keyboard=S.keyboard),S.mouse!==void 0&&(q.mouse=S.mouse),S.accessories!==void 0&&(q.accessories=S.accessories),S.type!==void 0&&(q.type=S.type),await cA(Ot(Ze,"workstations",P),q)}}return{workstations:t,activeBorrows:e,loading:n,subscribeWorkstations:a,subscribeActiveBorrows:l,borrowWorkstation:c,returnWorkstation:h,getHistory:f,seedDefaultWorkstations:m,addWorkstation:_,removeWorkstation:I,updateWorkstation:k}}const Sl=ve(null);let Ls=null;function Pu(){Ls||(Ls=pb(fo,r=>{Sl.value=r})),ia(()=>{Ls&&(Ls(),Ls=null)});async function t(r,s){await hb(fo,r,s)}async function e(){await mb(fo)}function n(){return Sl.value!==null}return{currentUser:Sl,login:t,logout:e,isAdmin:n,sendPasswordReset:r=>ub(fo,r)}}const C0={class:"student-layout"},k0={key:0,class:"init-load"},V0={key:1,class:"ws-scroll"},D0={key:0,class:"ps-row"},N0=["onClick","onKeydown"],O0={class:"ws-bar-inner"},x0={class:"ws-bar-name"},M0={key:0,class:"ws-bar-detail"},L0={class:"ws-row"},F0=["onClick","onKeydown"],U0={class:"ws-block-inner"},B0={class:"ws-block-name"},$0={key:0,class:"ws-block-detail"},j0={class:"modal"},q0={class:"form-group"},W0={key:0,class:"form-group"},H0={class:"ctrl-select"},K0={class:"modal-actions"},z0=["disabled"],G0={class:"modal"},Q0={class:"form-group"},Y0={class:"form-group"},J0={class:"modal-actions"},X0={key:0,class:"error-message"},Z0={class:"modal modal-reset"},eR={class:"form-group"},tR={class:"modal-actions"},nR=["disabled"],rR={class:"modal-actions"},sR=Ti({__name:"StudentView",setup(t){const e=Lt("currentView"),n=Lt("showToast"),r=Lt("loading"),{workstations:s,subscribeWorkstations:i,borrowWorkstation:a}=xg(),{login:l,sendPasswordReset:c}=Pu(),h=ve(!1),f=ve(""),m=ve(!1),_=ve(!1),I=ve(null),k=ve(""),P=ve(0),S=ve(null),x=ve(!1),M=ve(""),q=ve(""),j=ve(""),ie=ve(null);async function oe(){j.value="",r.value=!0;try{await l(M.value,q.value),x.value=!1,M.value="",q.value="",e.value="admin"}catch(ke){const W=ke.code;W==="auth/user-not-found"?j.value="Bruker ikke funnet":W==="auth/wrong-password"?j.value="Feil passord":W==="auth/invalid-email"?j.value="Ugyldig e-post":W==="auth/too-many-requests"?j.value="For mange forsøk. Prøv igjen senere.":j.value="Feil e-post eller passord"}finally{r.value=!1}}async function w(){f.value.trim()&&(m.value=!0,await c(f.value.trim()).catch(()=>{}))}const g=Hr(()=>s.value.filter(ke=>ke.type==="playstation")),y=Hr(()=>s.value.filter(ke=>ke.type==="pc")),T=Hr(()=>s.value.find(ke=>ke.id===I.value)),A=Hr(()=>{var ke;return((ke=T.value)==null?void 0:ke.type)==="playstation"});function R(ke){I.value=ke,k.value="",P.value=0,_.value=!0,Nl(()=>{var W;return(W=S.value)==null?void 0:W.focus()})}function E(){_.value=!1,I.value=null,k.value="",P.value=0}async function $e(){const ke=k.value.trim();if(!(!ke||!I.value)&&!(A.value&&!P.value)){r.value=!0;try{await a(I.value,ke,A.value?P.value:void 0),_.value=!1,n(`Du låner ${I.value}`,"success"),I.value=null,k.value=""}catch(W){console.error(W),n("Kunne ikke fullføre lånet","error")}finally{r.value=!1}}}return Sc(()=>i()),(ke,W)=>(ne(),ue("div",C0,[D("button",{class:"admin-corner",onClick:W[0]||(W[0]=G=>{x.value=!0,Nl(()=>{var le;return(le=ie.value)==null?void 0:le.focus()})})},"Admin"),Wr(s).length===0?(ne(),ue("div",k0,[...W[15]||(W[15]=[D("div",{class:"loader-ring"},null,-1),D("p",null,"Laster...",-1)])])):(ne(),ue("div",V0,[g.value.length?(ne(),ue("div",D0,[(ne(!0),ue(We,null,yr(g.value,G=>(ne(),ue("div",{key:G.id,class:nt(["ws-bar",G.status]),tabindex:"0",role:"button",onClick:le=>G.status==="available"&&R(G.id),onKeydown:cl(le=>G.status==="available"&&R(G.id),["enter"])},[D("div",O0,[D("div",x0,Ne(G.name),1),G.keyboard?(ne(),ue("div",M0,Ne(G.keyboard),1)):qe("",!0),D("div",{class:nt(["ws-block-badge",G.status])},Ne(G.status==="available"?"Trykk for å låne":"Opptatt"),3)])],42,N0))),128))])):qe("",!0),D("div",L0,[(ne(!0),ue(We,null,yr(y.value,G=>(ne(),ue("div",{key:G.id,class:nt(["ws-block",G.status]),tabindex:"0",role:"button",onClick:le=>G.status==="available"&&R(G.id),onKeydown:cl(le=>G.status==="available"&&R(G.id),["enter"])},[D("div",U0,[D("div",B0,Ne(G.name),1),G.keyboard||G.mouse||G.accessories?(ne(),ue("div",$0,Ne([G.keyboard,G.mouse,G.accessories].filter(Boolean).join(" · ")),1)):qe("",!0),D("div",{class:nt(["ws-block-badge",G.status])},Ne(G.status==="available"?"Trykk for å låne":"Opptatt"),3)])],42,F0))),128))])])),(ne(),Tr(el,{to:"body"},[_.value&&T.value?(ne(),ue("div",{key:0,class:"modal-overlay",onClick:_r(E,["self"])},[D("div",j0,[D("h3",null,Ne(T.value.name),1),W[18]||(W[18]=D("p",{class:"modal-sub"},"Skriv navnet ditt for å låne",-1)),D("div",q0,[W[16]||(W[16]=D("label",{for:"name-input"},"Ditt navn",-1)),ot(D("input",{id:"name-input",ref_key:"nameInput",ref:S,"onUpdate:modelValue":W[1]||(W[1]=G=>k.value=G),class:"input",placeholder:"Skriv her...",autocomplete:"name",onKeydown:cl($e,["enter"])},null,544),[[Ct,k.value]])]),A.value?(ne(),ue("div",W0,[W[17]||(W[17]=D("label",{for:"ctrl-input"},"Antall kontrollere",-1)),D("div",H0,[D("button",{class:nt(["ctrl-btn",{active:P.value===1}]),onClick:W[2]||(W[2]=G=>P.value=1)},"1",2),D("button",{class:nt(["ctrl-btn",{active:P.value===2}]),onClick:W[3]||(W[3]=G=>P.value=2)},"2",2),D("button",{class:nt(["ctrl-btn",{active:P.value===3}]),onClick:W[4]||(W[4]=G=>P.value=3)},"3",2),D("button",{class:nt(["ctrl-btn",{active:P.value===4}]),onClick:W[5]||(W[5]=G=>P.value=4)},"4",2)])])):qe("",!0),D("div",K0,[D("button",{class:"btn btn-primary btn-full",disabled:!k.value.trim()||A.value&&!P.value,onClick:$e}," Bekreft lån ",8,z0),D("button",{class:"btn btn-secondary btn-full",onClick:E},"Avbryt")])])])):qe("",!0)])),(ne(),Tr(el,{to:"body"},[x.value?(ne(),ue("div",{key:0,class:"modal-overlay",onClick:W[10]||(W[10]=_r(G=>x.value=!1,["self"]))},[D("div",G0,[W[22]||(W[22]=D("h3",null,"Admin",-1)),W[23]||(W[23]=D("p",{class:"modal-sub"},"Logg inn for å administrere",-1)),D("form",{onSubmit:_r(oe,["prevent"])},[D("div",Q0,[W[19]||(W[19]=D("label",{for:"login-email"},"E-post",-1)),ot(D("input",{id:"login-email",ref_key:"emailInput",ref:ie,"onUpdate:modelValue":W[6]||(W[6]=G=>M.value=G),class:"input",type:"email",placeholder:"admin@eksempel.no",autocomplete:"email",required:""},null,512),[[Ct,M.value]])]),D("div",Y0,[W[20]||(W[20]=D("label",{for:"login-password"},"Passord",-1)),ot(D("input",{id:"login-password","onUpdate:modelValue":W[7]||(W[7]=G=>q.value=G),class:"input",type:"password",placeholder:"Passord",autocomplete:"current-password",required:""},null,512),[[Ct,q.value]])]),D("button",{type:"button",class:"btn-text",style:{"margin-top":"4px"},onClick:W[8]||(W[8]=G=>h.value=!0)},"Glemt passordet?"),D("div",J0,[W[21]||(W[21]=D("button",{type:"submit",class:"btn btn-primary btn-full"},"Logg inn",-1)),D("button",{type:"button",class:"btn btn-secondary btn-full",onClick:W[9]||(W[9]=G=>x.value=!1)},"Avbryt")]),j.value?(ne(),ue("p",X0,Ne(j.value),1)):qe("",!0)],32)])])):qe("",!0)])),(ne(),Tr(el,{to:"body"},[h.value?(ne(),ue("div",{key:0,class:"modal-overlay",onClick:W[14]||(W[14]=_r(G=>h.value=!1,["self"]))},[D("div",Z0,[m.value?(ne(),ue(We,{key:1},[W[26]||(W[26]=D("h3",null,"Tilbakestill passord",-1)),W[27]||(W[27]=D("p",{class:"modal-sub"},"Hvis e-posten du skrev inn finnes i systemet vårt, vil du motta en tilbakestillingslenke.",-1)),D("div",rR,[D("button",{type:"button",class:"btn btn-primary btn-full",onClick:W[13]||(W[13]=G=>h.value=!1)},"OK")])],64)):(ne(),ue(We,{key:0},[W[25]||(W[25]=D("h3",null,"Tilbakestill passord",-1)),D("form",{onSubmit:_r(w,["prevent"])},[D("div",eR,[W[24]||(W[24]=D("label",{for:"reset-email"},"E-post",-1)),ot(D("input",{id:"reset-email","onUpdate:modelValue":W[11]||(W[11]=G=>f.value=G),class:"input",type:"email",placeholder:"admin@eksempel.no",autocomplete:"email",required:""},null,512),[[Ct,f.value]])]),D("div",tR,[D("button",{type:"submit",class:"btn btn-primary btn-full",disabled:!f.value.trim()},"Send",8,nR),D("button",{type:"button",class:"btn btn-secondary btn-full",onClick:W[12]||(W[12]=G=>h.value=!1)},"Lukk")])],32)],64))])])):qe("",!0)]))]))}}),Cu=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},iR=Cu(sR,[["__scopeId","data-v-d18fd56a"]]),oR={class:"view active"},aR={class:"header"},lR={class:"header-top"},cR={class:"content"},uR={class:"card login-card"},hR={class:"form-group"},dR={class:"form-group"},fR={key:0,class:"error-message"},pR=Ti({__name:"LoginView",setup(t){const e=Lt("currentView");Lt("showToast");const n=Lt("loading"),{login:r}=Pu(),s=ve(""),i=ve(""),a=ve("");async function l(){a.value="",n.value=!0;try{await r(s.value,i.value),e.value="admin"}catch(c){const h=c.code;h==="auth/user-not-found"?a.value="Bruker ikke funnet":h==="auth/wrong-password"?a.value="Feil passord":h==="auth/invalid-email"?a.value="Ugyldig e-post":h==="auth/too-many-requests"?a.value="For mange forsøk. Prøv igjen senere.":a.value="Feil e-post eller passord"}finally{n.value=!1}}return(c,h)=>(ne(),ue("div",oR,[D("header",aR,[D("div",lR,[D("button",{class:"btn-text back-btn",onClick:h[0]||(h[0]=f=>e.value="student")}," ← Tilbake "),h[3]||(h[3]=D("h1",{class:"header-title"},"Admin",-1))])]),D("main",cR,[D("section",uR,[D("form",{onSubmit:_r(l,["prevent"])},[D("div",hR,[h[4]||(h[4]=D("label",{for:"login-email"},"E-post",-1)),ot(D("input",{id:"login-email","onUpdate:modelValue":h[1]||(h[1]=f=>s.value=f),class:"input",type:"email",placeholder:"admin@eksempel.no",autocomplete:"email",required:""},null,512),[[Ct,s.value]])]),D("div",dR,[h[5]||(h[5]=D("label",{for:"login-password"},"Passord",-1)),ot(D("input",{id:"login-password","onUpdate:modelValue":h[2]||(h[2]=f=>i.value=f),class:"input",type:"password",placeholder:"Passord",autocomplete:"current-password",required:""},null,512),[[Ct,i.value]])]),h[6]||(h[6]=D("button",{type:"submit",class:"btn btn-primary btn-full"},"Logg inn",-1)),a.value?(ne(),ue("p",fR,Ne(a.value),1)):qe("",!0)],32)])])]))}}),mR=["innerHTML"],gR=Ti({__name:"SfIcon",props:{name:{},size:{}},setup(t){const e={gamecontroller:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
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
</svg>`};return(n,r)=>(ne(),ue("span",{class:"sf-icon",style:ta({width:(t.size??20)+"px",height:(t.size??20)+"px"}),innerHTML:e[t.name]},null,12,mR))}}),vn=Cu(gR,[["__scopeId","data-v-8bfe09d2"]]),_R={class:"admin-split"},yR={class:"sidebar"},vR={class:"sidebar-nav"},ER=["onClick"],wR={class:"sidebar-footer"},TR={class:"sidebar-email"},IR={class:"admin-content"},AR={key:0,class:"empty-state"},bR={key:1,class:"card-list"},RR={class:"card-body"},SR={class:"card-title"},PR={class:"card-meta"},CR={class:"card-meta"},kR=["onClick"],VR={key:0,class:"empty-state"},DR={key:1,class:"card-list"},NR={class:"card-body"},OR={class:"card-title"},xR={class:"card-meta"},MR={class:"card-meta"},LR={key:1},FR={class:"card-list"},UR={key:0,class:"edit-inline"},BR={class:"form-group"},$R={class:"type-picker",style:{"margin-bottom":"8px"}},jR=["placeholder"],qR={class:"card-body"},WR={class:"card-title"},HR={class:"card-meta"},KR=["onClick"],zR=["onClick"],GR={key:0,class:"empty-state"},QR={class:"form-group"},YR={class:"form-group"},JR={class:"type-picker"},XR={class:"form-group"},ZR={for:"new-keyboard"},eS=["placeholder"],tS={key:0,class:"form-group"},nS={key:1,class:"form-group"},rS=Ti({__name:"AdminView",setup(t){const e=Lt("currentView"),n=Lt("showToast"),r=Lt("loading"),{currentUser:s,logout:i}=Pu(),{workstations:a,activeBorrows:l,subscribeWorkstations:c,subscribeActiveBorrows:h,returnWorkstation:f,getHistory:m,seedDefaultWorkstations:_,addWorkstation:I,removeWorkstation:k,updateWorkstation:P}=xg(),S=ve("borrows"),x=[{key:"borrows",label:"Utlån",icon:"list"},{key:"history",label:"Historikk",icon:"clock"},{key:"manage",label:"Enheter",icon:"gear"}],M=Hr(()=>{var de;return((de=s.value)==null?void 0:de.email)??""}),q=ve([]),j=ve(null),ie=ve(""),oe=ve("pc"),w=ve(""),g=ve(""),y=ve("");async function T(){await i(),e.value="student"}async function A(de){if(confirm(`Returner ${de}?`)){r.value=!0;try{await f(de),n(`${de} er returnert`,"success")}catch(K){console.error(K),n("Kunne ikke returnere","error")}finally{r.value=!1}}}async function R(de=!1){r.value=!0;try{const K=await m(20,de?j.value:null);j.value=K.lastVisible,de?q.value.push(...K.records):q.value=K.records}catch(K){console.error(K),n("Kunne ikke laste historikk","error")}finally{r.value=!1}}async function E(){if(confirm("Sett inn standardenheter?")){r.value=!0;try{await _(),n("Standardenheter er lagt til","success")}catch(de){console.error(de),n("Kunne ikke sette inn enheter","error")}finally{r.value=!1}}}async function $e(){if(ie.value.trim()){r.value=!0;try{await I(ie.value.trim(),oe.value,w.value.trim(),g.value.trim(),y.value.trim()),n(`${ie.value} er lagt til`,"success"),ie.value="",w.value="",g.value="",y.value=""}catch(de){console.error(de),n("Kunne ikke legge til enheten","error")}finally{r.value=!1}}}async function ke(de){if(confirm(`Fjern ${de}?`)){r.value=!0;try{await k(de),n(`${de} er fjernet`,"success")}catch(K){console.error(K),n("Kunne ikke fjerne enheten","error")}finally{r.value=!1}}}const W=ve(null),G=ve(""),le=ve("pc"),dt=ve(""),Ft=ve(""),Pt=ve("");function Ke(de){W.value=de.id,G.value=de.name,le.value=de.type,dt.value=de.keyboard||"",Ft.value=de.mouse||"",Pt.value=de.accessories||""}function ze(){W.value=null}async function vs(){if(W.value){r.value=!0;try{await P(W.value,{newName:G.value.trim(),type:le.value,keyboard:dt.value.trim(),mouse:Ft.value.trim(),accessories:Pt.value.trim()}),n(`${W.value} er oppdatert`,"success"),W.value=null}catch(de){console.error(de),n("Kunne ikke oppdatere enheten","error")}finally{r.value=!1}}}function pn(de){S.value=de,de==="history"&&(q.value=[],j.value=null,R())}function mn(de){if(!de)return"—";const K=de.toDate?de.toDate():new Date(de);return`${String(K.getDate()).padStart(2,"0")}.${String(K.getMonth()+1).padStart(2,"0")} ${String(K.getHours()).padStart(2,"0")}:${String(K.getMinutes()).padStart(2,"0")}`}function Ut(de){if(!de)return"—";const K=de.toDate?de.toDate():new Date(de);return`${String(K.getDate()).padStart(2,"0")}.${String(K.getMonth()+1).padStart(2,"0")}.${K.getFullYear()} ${String(K.getHours()).padStart(2,"0")}:${String(K.getMinutes()).padStart(2,"0")}`}return Sc(()=>{c(),h()}),(de,K)=>(ne(),ue("div",_R,[D("aside",yR,[D("div",{class:"sidebar-top"},[K[13]||(K[13]=D("div",{class:"sidebar-title"},"Admin",-1)),D("button",{class:"sidebar-logout",onClick:T}," Logg ut ")]),D("nav",vR,[(ne(),ue(We,null,yr(x,te=>D("button",{key:te.key,class:nt(["sidebar-item",{active:S.value===te.key}]),onClick:Xe=>pn(te.key)},[et(vn,{name:te.icon,size:20},null,8,["name"]),D("span",null,Ne(te.label),1)],10,ER)),64))]),D("div",wR,[D("div",TR,Ne(M.value),1)])]),D("main",IR,[ot(D("section",null,[K[14]||(K[14]=D("h2",{class:"section-title"},"Utlån",-1)),Wr(l).length===0?(ne(),ue("div",AR,"Ingen utlån")):(ne(),ue("div",bR,[(ne(!0),ue(We,null,yr(Wr(l),te=>(ne(),ue("div",{key:te.id,class:"card-row"},[D("div",RR,[D("div",SR,Ne(te.workstation),1),D("div",PR,Ne(te.borrower),1),D("div",CR,[te.controllers?(ne(),ue(We,{key:0},[et(vn,{name:"gamecontroller",size:12}),Ht(" "+Ne(te.controllers)+" kontrollere · ",1)],64)):qe("",!0),Ht(" "+Ne(mn(te.borrowedAt)),1)])]),D("button",{class:"btn-return",onClick:Xe=>A(te.workstation)},"Returner",8,kR)]))),128))]))],512),[[il,S.value==="borrows"]]),ot(D("section",null,[K[15]||(K[15]=D("h2",{class:"section-title"},"Historikk",-1)),q.value.length===0?(ne(),ue("div",VR,"Ingen historikk")):(ne(),ue("div",DR,[(ne(!0),ue(We,null,yr(q.value,te=>(ne(),ue("div",{key:te.id,class:"card-row history-row"},[D("div",NR,[D("div",OR,Ne(te.workstation),1),D("div",xR,Ne(te.borrower),1),D("div",MR,[te.controllers?(ne(),ue(We,{key:0},[et(vn,{name:"gamecontroller",size:12}),Ht(" "+Ne(te.controllers)+" kontrollere · ",1)],64)):qe("",!0),Ht(" Lånt "+Ne(Ut(te.borrowedAt))+" ",1),te.returnedAt?(ne(),ue("span",LR," | retur "+Ne(Ut(te.returnedAt)),1)):qe("",!0)])]),D("span",{class:nt(["card-status",te.returnedAt?"returned":"active"])},Ne(te.returnedAt?"Returnert":"Aktiv"),3)]))),128)),q.value.length>=20?(ne(),ue("button",{key:0,class:"btn-load",onClick:K[0]||(K[0]=te=>R(!0))},"Last flere")):qe("",!0)]))],512),[[il,S.value==="history"]]),ot(D("section",null,[K[28]||(K[28]=D("h2",{class:"section-title"},"Enheter",-1)),D("div",FR,[(ne(!0),ue(We,null,yr(Wr(a),te=>(ne(),ue("div",{key:te.id,class:"card-row manage-row"},[W.value===te.id?(ne(),ue("div",UR,[D("div",BR,[K[16]||(K[16]=D("label",null,"Navn",-1)),ot(D("input",{"onUpdate:modelValue":K[1]||(K[1]=Xe=>G.value=Xe),class:"input",placeholder:"Navn"},null,512),[[Ct,G.value]])]),D("div",$R,[D("button",{type:"button",class:nt(["type-btn",{active:le.value==="pc"}]),onClick:K[2]||(K[2]=Xe=>le.value="pc")},[et(vn,{name:"desktopcomputer",size:16}),K[17]||(K[17]=Ht(" PC ",-1))],2),D("button",{type:"button",class:nt(["type-btn",{active:le.value==="playstation"}]),onClick:K[3]||(K[3]=Xe=>le.value="playstation")},[et(vn,{name:"gamecontroller",size:16}),K[18]||(K[18]=Ht(" PS ",-1))],2)]),ot(D("input",{"onUpdate:modelValue":K[4]||(K[4]=Xe=>dt.value=Xe),class:"input",placeholder:le.value==="playstation"?"Tilbehør":"Tastatur",style:{"margin-bottom":"6px"}},null,8,jR),[[Ct,dt.value]]),le.value==="pc"?ot((ne(),ue("input",{key:0,"onUpdate:modelValue":K[5]||(K[5]=Xe=>Ft.value=Xe),class:"input",placeholder:"Mus",style:{"margin-bottom":"6px"}},null,512)),[[Ct,Ft.value]]):qe("",!0),le.value==="pc"?ot((ne(),ue("input",{key:1,"onUpdate:modelValue":K[6]||(K[6]=Xe=>Pt.value=Xe),class:"input",placeholder:"Annet tilbehør",style:{"margin-bottom":"6px"}},null,512)),[[Ct,Pt.value]]):qe("",!0),D("div",{class:"edit-actions"},[D("button",{class:"btn-return",onClick:vs},"Lagre"),D("button",{class:"btn-remove",onClick:ze},"Avbryt")])])):(ne(),ue(We,{key:1},[D("div",qR,[D("div",WR,[et(vn,{name:te.type==="playstation"?"gamecontroller":"desktopcomputer",size:16},null,8,["name"]),Ht(" "+Ne(te.name),1)]),D("div",HR,Ne(te.status==="available"?"Ledig":"Utlånt"),1)]),te.status==="available"?(ne(),ue("button",{key:0,class:"btn-edit",onClick:Xe=>Ke(te)},"Rediger",8,KR)):qe("",!0),te.status==="available"?(ne(),ue("button",{key:1,class:"btn-remove",onClick:Xe=>ke(te.name)},"Fjern",8,zR)):qe("",!0)],64))]))),128)),Wr(a).length===0?(ne(),ue("div",GR,"Ingen enheter")):qe("",!0)]),D("button",{class:"btn-seed",onClick:E},[et(vn,{name:"tray.and.arrow.down",size:16}),K[19]||(K[19]=Ht(" Sett inn standardenheter ",-1))]),D("form",{class:"add-form",onSubmit:_r($e,["prevent"])},[K[26]||(K[26]=D("h3",null,"Ny enhet",-1)),D("div",QR,[K[20]||(K[20]=D("label",{for:"new-name"},"Navn",-1)),ot(D("input",{id:"new-name","onUpdate:modelValue":K[7]||(K[7]=te=>ie.value=te),class:"input",placeholder:"F.eks. PC 4",required:""},null,512),[[Ct,ie.value]])]),D("div",YR,[K[23]||(K[23]=D("label",null,"Type",-1)),D("div",JR,[D("button",{type:"button",class:nt(["type-btn",{active:oe.value==="pc"}]),onClick:K[8]||(K[8]=te=>oe.value="pc")},[et(vn,{name:"desktopcomputer",size:18}),K[21]||(K[21]=Ht(" PC ",-1))],2),D("button",{type:"button",class:nt(["type-btn",{active:oe.value==="playstation"}]),onClick:K[9]||(K[9]=te=>oe.value="playstation")},[et(vn,{name:"gamecontroller",size:18}),K[22]||(K[22]=Ht(" PlayStation ",-1))],2)])]),D("div",XR,[D("label",ZR,Ne(oe.value==="playstation"?"Tilbehør":"Tastatur"),1),ot(D("input",{id:"new-keyboard","onUpdate:modelValue":K[10]||(K[10]=te=>w.value=te),class:"input",placeholder:oe.value==="playstation"?"F.eks. Kontroller x2, ladestasjon":"F.eks. Tastatur 4"},null,8,eS),[[Ct,w.value]])]),oe.value==="pc"?(ne(),ue("div",tS,[K[24]||(K[24]=D("label",{for:"new-mouse"},"Mus",-1)),ot(D("input",{id:"new-mouse","onUpdate:modelValue":K[11]||(K[11]=te=>g.value=te),class:"input",placeholder:"F.eks. Mus 4"},null,512),[[Ct,g.value]])])):qe("",!0),oe.value==="pc"?(ne(),ue("div",nS,[K[25]||(K[25]=D("label",{for:"new-accessories"},"Annet tilbehør",-1)),ot(D("input",{id:"new-accessories","onUpdate:modelValue":K[12]||(K[12]=te=>y.value=te),class:"input",placeholder:"F.eks. Headset"},null,512),[[Ct,y.value]])])):qe("",!0),K[27]||(K[27]=D("button",{type:"submit",class:"btn-submit"},"Legg til",-1))],32)],512),[[il,S.value==="manage"]])])]))}}),sS=Cu(rS,[["__scopeId","data-v-72e8864b"]]),iS={id:"toast-container"},oS={key:0,id:"loading-overlay"},aS=Ti({__name:"App",setup(t){const e=ve("student"),n=ve([]);let r=0;function s(a,l="info"){const c=++r;n.value.push({id:c,message:a,type:l}),setTimeout(()=>{const h=n.value.findIndex(f=>f.id===c);h!==-1&&n.value.splice(h,1)},3e3)}mo("showToast",s),mo("currentView",e);const i=ve(!1);return mo("loading",i),(a,l)=>(ne(),ue(We,null,[l[1]||(l[1]=D("div",{class:"rotate-blocker"},"Vennligst roter iPad-en til liggende retning",-1)),D("div",iS,[(ne(!0),ue(We,null,yr(n.value,c=>(ne(),ue("div",{key:c.id,class:nt(["toast",c.type])},Ne(c.message),3))),128))]),i.value?(ne(),ue("div",oS,[...l[0]||(l[0]=[D("div",{class:"loader-ring"},null,-1),D("p",null,"Laster...",-1)])])):qe("",!0),e.value==="student"?(ne(),Tr(iR,{key:1})):e.value==="login"?(ne(),Tr(pR,{key:2})):e.value==="admin"?(ne(),Tr(sS,{key:3})):qe("",!0)],64))}});Rv(aS).mount("#app");

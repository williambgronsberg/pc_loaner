(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Pe={},xr=[],Ht=()=>{},ud=()=>!1,jo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),qo=n=>n.startsWith("onUpdate:"),et=Object.assign,ec=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},e_=Object.prototype.hasOwnProperty,Ie=(n,e)=>e_.call(n,e),ie=Array.isArray,Lr=n=>gi(n)==="[object Map]",hd=n=>gi(n)==="[object Set]",lh=n=>gi(n)==="[object Date]",ce=n=>typeof n=="function",Ne=n=>typeof n=="string",Yt=n=>typeof n=="symbol",Re=n=>n!==null&&typeof n=="object",fd=n=>(Re(n)||ce(n))&&ce(n.then)&&ce(n.catch),dd=Object.prototype.toString,gi=n=>dd.call(n),t_=n=>gi(n).slice(8,-1),pd=n=>gi(n)==="[object Object]",tc=n=>Ne(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,$s=Zl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},n_=/-\w/g,Dt=Wo(n=>n.replace(n_,e=>e.slice(1).toUpperCase())),r_=/\B([A-Z])/g,Gn=Wo(n=>n.replace(r_,"-$1").toLowerCase()),gd=Wo(n=>n.charAt(0).toUpperCase()+n.slice(1)),ja=Wo(n=>n?`on${gd(n)}`:""),qt=(n,e)=>!Object.is(n,e),so=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},md=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},nc=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let ch;const Ho=()=>ch||(ch=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ko(n){if(ie(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=Ne(r)?a_(r):Ko(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ne(n)||Re(n))return n}const s_=/;(?![^(]*\))/g,i_=/:([^]+)/,o_=/\/\*[^]*?\*\//g;function a_(n){const e={};return n.replace(o_,"").split(s_).forEach(t=>{if(t){const r=t.split(i_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function mn(n){let e="";if(Ne(n))e=n;else if(ie(n))for(let t=0;t<n.length;t++){const r=mn(n[t]);r&&(e+=r+" ")}else if(Re(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const l_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",c_=Zl(l_);function _d(n){return!!n||n===""}function u_(n,e){if(n.length!==e.length)return!1;let t=!0;for(let r=0;t&&r<n.length;r++)t=rc(n[r],e[r]);return t}function rc(n,e){if(n===e)return!0;let t=lh(n),r=lh(e);if(t||r)return t&&r?n.getTime()===e.getTime():!1;if(t=Yt(n),r=Yt(e),t||r)return n===e;if(t=ie(n),r=ie(e),t||r)return t&&r?u_(n,e):!1;if(t=Re(n),r=Re(e),t||r){if(!t||!r)return!1;const s=Object.keys(n).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in n){const l=n.hasOwnProperty(a),c=e.hasOwnProperty(a);if(l&&!c||!l&&c||!rc(n[a],e[a]))return!1}}return String(n)===String(e)}const yd=n=>!!(n&&n.__v_isRef===!0),He=n=>Ne(n)?n:n==null?"":ie(n)||Re(n)&&(n.toString===dd||!ce(n.toString))?yd(n)?He(n.value):JSON.stringify(n,vd,2):String(n),vd=(n,e)=>yd(e)?vd(n,e.value):Lr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[qa(r,i)+" =>"]=s,t),{})}:hd(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>qa(t))}:Yt(e)?qa(e):Re(e)&&!ie(e)&&!pd(e)?String(e):e,qa=(n,e="")=>{var t;return Yt(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ye;class h_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Ye&&(Ye.active?(this.parent=Ye,this.index=(Ye.scopes||(Ye.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Ye;try{return Ye=this,e()}finally{Ye=t}}}on(){++this._on===1&&(this.prevScope=Ye,Ye=this)}off(){if(this._on>0&&--this._on===0){if(Ye===this)Ye=this.prevScope;else{let e=Ye;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function f_(){return Ye}let Ce;const Wa=new WeakSet;class Ed{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ye&&(Ye.active?Ye.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Wa.has(this)&&(Wa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||wd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,uh(this),Id(this);const e=Ce,t=Nt;Ce=this,Nt=!0;try{return this.fn()}finally{Ad(this),Ce=e,Nt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)oc(e);this.deps=this.depsTail=void 0,uh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Wa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){_l(this)&&this.run()}get dirty(){return _l(this)}}let Td=0,js,qs;function wd(n,e=!1){if(n.flags|=8,e){n.next=qs,qs=n;return}n.next=js,js=n}function sc(){Td++}function ic(){if(--Td>0)return;if(qs){let e=qs;for(qs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;js;){let e=js;for(js=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function Id(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ad(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),oc(r),d_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function _l(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(bd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function bd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Zs)||(n.globalVersion=Zs,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!_l(n))))return;n.flags|=2;const e=n.dep,t=Ce,r=Nt;Ce=n,Nt=!0;try{Id(n);const s=n.fn(n._value);(e.version===0||qt(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ce=t,Nt=r,Ad(n),n.flags&=-3}}function oc(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)oc(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function d_(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Nt=!0;const Rd=[];function Jt(){Rd.push(Nt),Nt=!1}function Xt(){const n=Rd.pop();Nt=n===void 0?!0:n}function uh(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Ce;Ce=void 0;try{e()}finally{Ce=t}}}let Zs=0;class p_{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ac{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ce||!Nt||Ce===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ce)t=this.activeLink=new p_(Ce,this),Ce.deps?(t.prevDep=Ce.depsTail,Ce.depsTail.nextDep=t,Ce.depsTail=t):Ce.deps=Ce.depsTail=t,Sd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=Ce.depsTail,t.nextDep=void 0,Ce.depsTail.nextDep=t,Ce.depsTail=t,Ce.deps===t&&(Ce.deps=r)}return t}trigger(e){this.version++,Zs++,this.notify(e)}notify(e){sc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{ic()}}}function Sd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Sd(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const yl=new WeakMap,fr=Symbol(""),vl=Symbol(""),ei=Symbol("");function at(n,e,t){if(Nt&&Ce){let r=yl.get(n);r||yl.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new ac),s.map=r,s.key=t),s.track()}}function un(n,e,t,r,s,i){const a=yl.get(n);if(!a){Zs++;return}const l=c=>{c&&c.trigger()};if(sc(),e==="clear")a.forEach(l);else{const c=ie(n),h=c&&tc(t);if(c&&t==="length"){const d=Number(r);a.forEach((p,y)=>{(y==="length"||y===ei||!Yt(y)&&y>=d)&&l(p)})}else switch((t!==void 0||a.has(void 0))&&l(a.get(t)),h&&l(a.get(ei)),e){case"add":c?h&&l(a.get("length")):(l(a.get(fr)),Lr(n)&&l(a.get(vl)));break;case"delete":c||(l(a.get(fr)),Lr(n)&&l(a.get(vl)));break;case"set":Lr(n)&&l(a.get(fr));break}}ic()}function Cr(n){const e=we(n);return e===n?e:(at(e,"iterate",ei),Pt(n)?e:e.map(Ot))}function zo(n){return at(n=we(n),"iterate",ei),n}function $t(n,e){return vn(n)?zr(dr(n)?Ot(e):e):Ot(e)}const g_={__proto__:null,[Symbol.iterator](){return Ha(this,Symbol.iterator,n=>$t(this,n))},concat(...n){return Cr(this).concat(...n.map(e=>ie(e)?Cr(e):e))},entries(){return Ha(this,"entries",n=>(n[1]=$t(this,n[1]),n))},every(n,e){return on(this,"every",n,e,void 0,arguments)},filter(n,e){return on(this,"filter",n,e,t=>t.map(r=>$t(this,r)),arguments)},find(n,e){return on(this,"find",n,e,t=>$t(this,t),arguments)},findIndex(n,e){return on(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return on(this,"findLast",n,e,t=>$t(this,t),arguments)},findLastIndex(n,e){return on(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return on(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ka(this,"includes",n)},indexOf(...n){return Ka(this,"indexOf",n)},join(n){return Cr(this).join(n)},lastIndexOf(...n){return Ka(this,"lastIndexOf",n)},map(n,e){return on(this,"map",n,e,void 0,arguments)},pop(){return Rs(this,"pop")},push(...n){return Rs(this,"push",n)},reduce(n,...e){return hh(this,"reduce",n,e)},reduceRight(n,...e){return hh(this,"reduceRight",n,e)},shift(){return Rs(this,"shift")},some(n,e){return on(this,"some",n,e,void 0,arguments)},splice(...n){return Rs(this,"splice",n)},toReversed(){return Cr(this).toReversed()},toSorted(n){return Cr(this).toSorted(n)},toSpliced(...n){return Cr(this).toSpliced(...n)},unshift(...n){return Rs(this,"unshift",n)},values(){return Ha(this,"values",n=>$t(this,n))}};function Ha(n,e,t){const r=zo(n),s=r[e]();return r!==n&&!Pt(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=t(i.value)),i}),s}const m_=Array.prototype;function on(n,e,t,r,s,i){const a=zo(n),l=a!==n&&!Pt(n),c=a[e];if(c!==m_[e]){const p=c.apply(n,i);return l?Ot(p):p}let h=t;a!==n&&(l?h=function(p,y){return t.call(this,$t(n,p),y,n)}:t.length>2&&(h=function(p,y){return t.call(this,p,y,n)}));const d=c.call(a,h,r);return l&&s?s(d):d}function hh(n,e,t,r){const s=zo(n),i=s!==n&&!Pt(n);let a=t,l=!1;s!==n&&(i?(l=r.length===0,a=function(h,d,p){return l&&(l=!1,h=$t(n,h)),t.call(this,h,$t(n,d),p,n)}):t.length>3&&(a=function(h,d,p){return t.call(this,h,d,p,n)}));const c=s[e](a,...r);return l?$t(n,c):c}function Ka(n,e,t){const r=we(n);at(r,"iterate",ei);const s=r[e](...t);return(s===-1||s===!1)&&hc(t[0])?(t[0]=we(t[0]),r[e](...t)):s}function Rs(n,e,t=[]){Jt(),sc();const r=we(n)[e].apply(n,t);return ic(),Xt(),r}const __=Zl("__proto__,__v_isRef,__isVue"),Pd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Yt));function y_(n){Yt(n)||(n=String(n));const e=we(this);return at(e,"has",n),e.hasOwnProperty(n)}class Cd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?P_:Nd:i?Dd:Vd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=ie(e);if(!s){let c;if(a&&(c=g_[t]))return c;if(t==="hasOwnProperty")return y_}const l=Reflect.get(e,t,ut(e)?e:r);if((Yt(t)?Pd.has(t):__(t))||(s||at(e,"get",t),i))return l;if(ut(l)){const c=a&&tc(t)?l:l.value;return s&&Re(c)?Tl(c):c}return Re(l)?s?Tl(l):cc(l):l}}class kd extends Cd{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];const a=ie(e)&&tc(t);if(!this._isShallow){const h=vn(i);if(!Pt(r)&&!vn(r)&&(i=we(i),r=we(r)),!a&&ut(i)&&!ut(r))return h||(i.value=r),!0}const l=a?Number(t)<e.length:Ie(e,t),c=Reflect.set(e,t,r,ut(e)?e:s);return e===we(s)&&c&&(l?qt(r,i)&&un(e,"set",t,r):un(e,"add",t,r)),c}deleteProperty(e,t){const r=Ie(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&un(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!Yt(t)||!Pd.has(t))&&at(e,"has",t),r}ownKeys(e){return at(e,"iterate",ie(e)?"length":fr),Reflect.ownKeys(e)}}class v_ extends Cd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const E_=new kd,T_=new v_,w_=new kd(!0);const El=n=>n,Gi=n=>Reflect.getPrototypeOf(n);function I_(n,e,t){return function(...r){const s=this.__v_raw,i=we(s),a=Lr(i),l=n==="entries"||n===Symbol.iterator&&a,c=n==="keys"&&a,h=s[n](...r),d=t?El:e?zr:Ot;return!e&&at(i,"iterate",c?vl:fr),et(Object.create(h),{next(){const{value:p,done:y}=h.next();return y?{value:p,done:y}:{value:l?[d(p[0]),d(p[1])]:d(p),done:y}}})}}function Qi(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function A_(n,e){const t={get(s){const i=this.__v_raw,a=we(i),l=we(s);n||(qt(s,l)&&at(a,"get",s),at(a,"get",l));const{has:c}=Gi(a),h=e?El:n?zr:Ot;if(c.call(a,s))return h(i.get(s));if(c.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!n&&at(we(s),"iterate",fr),s.size},has(s){const i=this.__v_raw,a=we(i),l=we(s);return n||(qt(s,l)&&at(a,"has",s),at(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=we(l),h=e?El:n?zr:Ot;return!n&&at(c,"iterate",fr),l.forEach((d,p)=>s.call(i,h(d),h(p),a))}};return et(t,n?{add:Qi("add"),set:Qi("set"),delete:Qi("delete"),clear:Qi("clear")}:{add(s){const i=we(this),a=Gi(i),l=we(s),c=!e&&!Pt(s)&&!vn(s)?l:s;return a.has.call(i,c)||qt(s,c)&&a.has.call(i,s)||qt(l,c)&&a.has.call(i,l)||(i.add(c),un(i,"add",c,c)),this},set(s,i){!e&&!Pt(i)&&!vn(i)&&(i=we(i));const a=we(this),{has:l,get:c}=Gi(a);let h=l.call(a,s);h||(s=we(s),h=l.call(a,s));const d=c.call(a,s);return a.set(s,i),h?qt(i,d)&&un(a,"set",s,i):un(a,"add",s,i),this},delete(s){const i=we(this),{has:a,get:l}=Gi(i);let c=a.call(i,s);c||(s=we(s),c=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&un(i,"delete",s,void 0),h},clear(){const s=we(this),i=s.size!==0,a=s.clear();return i&&un(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=I_(s,n,e)}),t}function lc(n,e){const t=A_(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(Ie(t,s)&&s in r?t:r,s,i)}const b_={get:lc(!1,!1)},R_={get:lc(!1,!0)},S_={get:lc(!0,!1)};const Vd=new WeakMap,Dd=new WeakMap,Nd=new WeakMap,P_=new WeakMap;function C_(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cc(n){return vn(n)?n:uc(n,!1,E_,b_,Vd)}function k_(n){return uc(n,!1,w_,R_,Dd)}function Tl(n){return uc(n,!0,T_,S_,Nd)}function uc(n,e,t,r,s){if(!Re(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const i=s.get(n);if(i)return i;const a=C_(t_(n));if(a===0)return n;const l=new Proxy(n,a===2?r:t);return s.set(n,l),l}function dr(n){return vn(n)?dr(n.__v_raw):!!(n&&n.__v_isReactive)}function vn(n){return!!(n&&n.__v_isReadonly)}function Pt(n){return!!(n&&n.__v_isShallow)}function hc(n){return n?!!n.__v_raw:!1}function we(n){const e=n&&n.__v_raw;return e?we(e):n}function V_(n){return!Ie(n,"__v_skip")&&Object.isExtensible(n)&&md(n,"__v_skip",!0),n}const Ot=n=>Re(n)?cc(n):n,zr=n=>Re(n)?Tl(n):n;function ut(n){return n?n.__v_isRef===!0:!1}function Be(n){return D_(n,!1)}function D_(n,e){return ut(n)?n:new N_(n,e)}class N_{constructor(e,t){this.dep=new ac,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:we(e),this._value=t?e:Ot(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||Pt(e)||vn(e);e=r?e:we(e),qt(e,t)&&(this._rawValue=e,this._value=r?e:Ot(e),this.dep.trigger())}}function ur(n){return ut(n)?n.value:n}const O_={get:(n,e,t)=>e==="__v_raw"?n:ur(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return ut(s)&&!ut(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function Od(n){return dr(n)?n:new Proxy(n,O_)}class M_{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new ac(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Zs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ce!==this)return wd(this,!0),!0}get value(){const e=this.dep.track();return bd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function x_(n,e,t=!1){let r,s;return ce(n)?r=n:(r=n.get,s=n.set),new M_(r,s,t)}const Yi={},_o=new WeakMap;let ar;function L_(n,e=!1,t=ar){if(t){let r=_o.get(t);r||_o.set(t,r=[]),r.push(n)}}function F_(n,e,t=Pe){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=t,h=z=>s?z:Pt(z)||s===!1||s===0?hn(z,1):hn(z);let d,p,y,w,C=!1,P=!1;if(ut(n)?(p=()=>n.value,C=Pt(n)):dr(n)?(p=()=>h(n),C=!0):ie(n)?(P=!0,C=n.some(z=>dr(z)||Pt(z)),p=()=>n.map(z=>{if(ut(z))return z.value;if(dr(z))return h(z);if(ce(z))return c?c(z,2):z()})):ce(n)?e?p=c?()=>c(n,2):n:p=()=>{if(y){Jt();try{y()}finally{Xt()}}const z=ar;ar=d;try{return c?c(n,3,[w]):n(w)}finally{ar=z}}:p=Ht,e&&s){const z=p,fe=s===!0?1/0:s;p=()=>hn(z(),fe)}const k=f_(),O=()=>{d.stop(),k&&k.active&&ec(k.effects,d)};if(i&&e){const z=e;e=(...fe)=>{const he=z(...fe);return O(),he}}let B=P?new Array(n.length).fill(Yi):Yi;const Q=z=>{if(!(!(d.flags&1)||!d.dirty&&!z))if(e){const fe=d.run();if(z||s||C||(P?fe.some((he,T)=>qt(he,B[T])):qt(fe,B))){y&&y();const he=ar;ar=d;try{const T=[fe,B===Yi?void 0:P&&B[0]===Yi?[]:B,w];B=fe,c?c(e,3,T):e(...T)}finally{ar=he}}}else d.run()};return l&&l(Q),d=new Ed(p),d.scheduler=a?()=>a(Q,!1):Q,w=z=>L_(z,!1,d),y=d.onStop=()=>{const z=_o.get(d);if(z){if(c)c(z,4);else for(const fe of z)fe();_o.delete(d)}},e?r?Q(!0):B=d.run():a?a(Q.bind(null,!0),!0):d.run(),O.pause=d.pause.bind(d),O.resume=d.resume.bind(d),O.stop=O,O}function hn(n,e=1/0,t){if(e<=0||!Re(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,ut(n))hn(n.value,e,t);else if(ie(n))for(let r=0;r<n.length;r++)hn(n[r],e,t);else if(hd(n)||Lr(n))n.forEach(r=>{hn(r,e,t)});else if(pd(n)){for(const r in n)hn(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&hn(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function mi(n,e,t,r){try{return r?n(...r):n()}catch(s){Go(s,e,t)}}function Mt(n,e,t,r){if(ce(n)){const s=mi(n,e,t,r);return s&&fd(s)&&s.catch(i=>{Go(i,e,t)}),s}if(ie(n)){const s=[];for(let i=0;i<n.length;i++)s.push(Mt(n[i],e,t,r));return s}}function Go(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Pe;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](n,c,h)===!1)return}l=l.parent}if(i){Jt(),mi(i,null,10,[n,c,h]),Xt();return}}U_(n,t,s,r,a)}function U_(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const gt=[];let Bt=-1;const Fr=[];let Dn=null,kr=0;const Md=Promise.resolve();let yo=null;function xd(n){const e=yo||Md;return n?e.then(this?n.bind(this):n):e}function B_(n){let e=Bt+1,t=gt.length;for(;e<t;){const r=e+t>>>1,s=gt[r],i=ti(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function fc(n){if(!(n.flags&1)){const e=ti(n),t=gt[gt.length-1];!t||!(n.flags&2)&&e>=ti(t)?gt.push(n):gt.splice(B_(e),0,n),n.flags|=1,Ld()}}function Ld(){yo||(yo=Md.then(Ud))}function $_(n){ie(n)?Fr.push(...n):Dn&&n.id===-1?Dn.splice(kr+1,0,n):n.flags&1||(Fr.push(n),n.flags|=1),Ld()}function fh(n,e,t=Bt+1){for(;t<gt.length;t++){const r=gt[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;gt.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Fd(n){if(Fr.length){const e=[...new Set(Fr)].sort((t,r)=>ti(t)-ti(r));if(Fr.length=0,Dn){Dn.push(...e);return}for(Dn=e,kr=0;kr<Dn.length;kr++){const t=Dn[kr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Dn=null,kr=0}}const ti=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Ud(n){try{for(Bt=0;Bt<gt.length;Bt++){const e=gt[Bt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),mi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Bt<gt.length;Bt++){const e=gt[Bt];e&&(e.flags&=-2)}Bt=-1,gt.length=0,Fd(),yo=null,(gt.length||Fr.length)&&Ud()}}let St=null,Bd=null;function vo(n){const e=St;return St=n,Bd=n&&n.type.__scopeId||null,e}function j_(n,e=St,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&bh(-1);const i=vo(e);let a;try{a=n(...s)}finally{vo(i),r._d&&bh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function ln(n,e){if(St===null)return n;const t=ea(St),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=Pe]=e[s];i&&(ce(i)&&(i={mounted:i,updated:i}),i.deep&&hn(a),r.push({dir:i,instance:t,value:a,oldValue:void 0,arg:l,modifiers:c}))}return n}function sr(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(Jt(),Mt(c,t,8,[n.el,l,n,e]),Xt())}}function io(n,e){if(mt){let t=mt.provides;const r=mt.parent&&mt.parent.provides;r===t&&(t=mt.provides=Object.create(r)),t[n]=e}}function It(n,e,t=!1){const r=jy();if(r||Br){let s=Br?Br._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ce(e)?e.call(r&&r.proxy):e}}const q_=Symbol.for("v-scx"),W_=()=>It(q_);function za(n,e,t){return $d(n,e,t)}function $d(n,e,t=Pe){const{immediate:r,deep:s,flush:i,once:a}=t,l=et({},t),c=e&&r||!e&&i!=="post";let h;if(ri){if(i==="sync"){const w=W_();h=w.__watcherHandles||(w.__watcherHandles=[])}else if(!c){const w=()=>{};return w.stop=Ht,w.resume=Ht,w.pause=Ht,w}}const d=mt;l.call=(w,C,P)=>Mt(w,d,C,P);let p=!1;i==="post"?l.scheduler=w=>{pt(w,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(w,C)=>{C?w():fc(w)}),l.augmentJob=w=>{e&&(w.flags|=4),p&&(w.flags|=2,d&&(w.id=d.uid,w.i=d))};const y=F_(n,e,l);return ri&&(h?h.push(y):c&&y()),y}function H_(n,e,t){const r=this.proxy,s=Ne(n)?n.includes(".")?jd(r,n):()=>r[n]:n.bind(r,r);let i;ce(e)?i=e:(i=e.handler,t=e);const a=_i(this),l=$d(s,i.bind(r),t);return a(),l}function jd(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const Vn=new WeakMap,qd=Symbol("_vte"),K_=n=>n.__isTeleport,cr=n=>n&&(n.disabled||n.disabled===""),z_=n=>n&&(n.defer||n.defer===""),dh=n=>typeof SVGElement<"u"&&n instanceof SVGElement,ph=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,wl=(n,e)=>{const t=n&&n.to;return Ne(t)?e?e(t):null:t},G_={name:"Teleport",__isTeleport:!0,process(n,e,t,r,s,i,a,l,c,h){const{mc:d,pc:p,pbc:y,o:{insert:w,querySelector:C,createText:P,createComment:k,parentNode:O}}=h,B=cr(e.props);let{dynamicChildren:Q}=e;const z=(T,m,v)=>{T.shapeFlag&16&&d(T.children,m,v,s,i,a,l,c)},fe=(T=e)=>{const m=cr(T.props),v=T.target=wl(T.props,C),I=Il(v,T,P,w);v&&(a!=="svg"&&dh(v)?a="svg":a!=="mathml"&&ph(v)&&(a="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(v),m||(z(T,v,I),Ds(T,!1)))},he=T=>{const m=()=>{if(Vn.get(T)===m){if(Vn.delete(T),cr(T.props)){const v=O(T.el)||t;z(T,v,T.anchor),Ds(T,!0)}fe(T)}};Vn.set(T,m),pt(m,i)};if(n==null){const T=e.el=P(""),m=e.anchor=P("");if(w(T,t,r),w(m,t,r),z_(e.props)||i&&i.pendingBranch){he(e);return}B&&(z(e,t,m),Ds(e,!0)),fe()}else{e.el=n.el;const T=e.anchor=n.anchor,m=Vn.get(n);if(m){m.flags|=8,Vn.delete(n),he(e);return}e.targetStart=n.targetStart;const v=e.target=n.target,I=e.targetAnchor=n.targetAnchor,b=cr(n.props),R=b?t:v,_=b?T:I;if(a==="svg"||dh(v)?a="svg":(a==="mathml"||ph(v))&&(a="mathml"),Q?(y(n.dynamicChildren,Q,R,s,i,a,l),_c(n,e,!0)):c||p(n,e,R,_,s,i,a,l,!1),B)b?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):Ji(e,t,T,h,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const Y=wl(e.props,C);Y&&(e.target=Y,Ji(e,Y,null,h,0))}else b&&Ji(e,v,I,h,1);Ds(e,B)}},remove(n,e,t,{um:r,o:{remove:s}},i){const{shapeFlag:a,children:l,anchor:c,targetStart:h,targetAnchor:d,target:p,props:y}=n,w=cr(y),C=i||!w,P=Vn.get(n);if(P&&(P.flags|=8,Vn.delete(n)),p&&(s(h),s(d)),i&&s(c),!P&&(w||p)&&a&16)for(let k=0;k<l.length;k++){const O=l[k];r(O,e,t,C,!!O.dynamicChildren)}},move:Ji,hydrate:Q_};function Ji(n,e,t,{o:{insert:r},m:s},i=2){i===0&&r(n.targetAnchor,e,t);const{el:a,anchor:l,shapeFlag:c,children:h,props:d}=n,p=i===2;if(p&&r(a,e,t),!Vn.has(n)&&(!p||cr(d))&&c&16)for(let y=0;y<h.length;y++)s(h[y],e,t,2);p&&r(l,e,t)}function Q_(n,e,t,r,s,i,{o:{nextSibling:a,parentNode:l,querySelector:c,insert:h,createText:d}},p){function y(k,O){let B=O;for(;B;){if(B&&B.nodeType===8){if(B.data==="teleport start anchor")e.targetStart=B;else if(B.data==="teleport anchor"){e.targetAnchor=B,k._lpa=e.targetAnchor&&a(e.targetAnchor);break}}B=a(B)}}function w(k,O){O.anchor=p(a(k),O,l(k),t,r,s,i)}const C=e.target=wl(e.props,c),P=cr(e.props);if(C){const k=C._lpa||C.firstChild;e.shapeFlag&16&&(P?(w(n,e),y(C,k),e.targetAnchor||Il(C,e,d,h,l(n)===C?n:null)):(e.anchor=a(n),y(C,k),e.targetAnchor||Il(C,e,d,h),p(k&&a(k),e,C,t,r,s,i))),Ds(e,P)}else P&&e.shapeFlag&16&&(w(n,e),e.targetStart=n,e.targetAnchor=a(n));return e.anchor&&a(e.anchor)}const Y_=G_;function Ds(n,e){const t=n.ctx;if(t&&t.ut){let r,s;for(e?(r=n.el,s=n.anchor):(r=n.targetStart,s=n.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",t.uid),r=r.nextSibling;t.ut()}}function Il(n,e,t,r,s=null){const i=e.targetStart=t(""),a=e.targetAnchor=t("");return i[qd]=a,n&&(r(i,n,s),r(a,n,s)),a}const Ga=Symbol("_leaveCb");function dc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,dc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Qo(n,e){return ce(n)?et({name:n.name},e,{setup:n}):n}function Wd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function gh(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Eo=new WeakMap;function Ws(n,e,t,r,s=!1){if(ie(n)){n.forEach((P,k)=>Ws(P,e&&(ie(e)?e[k]:e),t,r,s));return}if(Hs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ws(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?ea(r.component):r.el,a=s?null:i,{i:l,r:c}=n,h=e&&e.r,d=l.refs===Pe?l.refs={}:l.refs,p=l.setupState,y=we(p),w=p===Pe?ud:P=>gh(d,P)?!1:Ie(y,P),C=(P,k)=>!(k&&gh(d,k));if(h!=null&&h!==c){if(mh(e),Ne(h))d[h]=null,w(h)&&(p[h]=null);else if(ut(h)){const P=e;C(h,P.k)&&(h.value=null),P.k&&(d[P.k]=null)}}if(ce(c)){Jt();try{mi(c,l,12,[a,d])}finally{Xt()}}else{const P=Ne(c),k=ut(c);if(P||k){const O=()=>{if(n.f){const B=P?w(c)?p[c]:d[c]:C()||!n.k?c.value:d[n.k];if(s)ie(B)&&ec(B,i);else if(ie(B))B.includes(i)||B.push(i);else if(P)d[c]=[i],w(c)&&(p[c]=d[c]);else{const Q=[i];C(c,n.k)&&(c.value=Q),n.k&&(d[n.k]=Q)}}else P?(d[c]=a,w(c)&&(p[c]=a)):k&&(C(c,n.k)&&(c.value=a),n.k&&(d[n.k]=a))};if(a){const B=()=>{O(),Eo.delete(n)};B.id=-1,Eo.set(n,B),pt(B,t)}else mh(n),O()}}}function mh(n){const e=Eo.get(n);e&&(e.flags|=8,Eo.delete(n))}Ho().requestIdleCallback;Ho().cancelIdleCallback;const Hs=n=>!!n.type.__asyncLoader,Hd=n=>n.type.__isKeepAlive;function J_(n,e){Kd(n,"a",e)}function X_(n,e){Kd(n,"da",e)}function Kd(n,e,t=mt){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Yo(e,r,t),t){let s=t.parent;for(;s&&s.parent;)Hd(s.parent.vnode)&&Z_(r,e,t,s),s=s.parent}}function Z_(n,e,t,r){const s=Yo(e,n,r,!0);Jo(()=>{ec(r[e],s)},t)}function Yo(n,e,t=mt,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...a)=>{Jt();const l=_i(t),c=Mt(e,t,n,a);return l(),Xt(),c});return r?s.unshift(i):s.push(i),i}}const An=n=>(e,t=mt)=>{(!ri||n==="sp")&&Yo(n,(...r)=>e(...r),t)},ey=An("bm"),pc=An("m"),ty=An("bu"),ny=An("u"),ry=An("bum"),Jo=An("um"),sy=An("sp"),iy=An("rtg"),oy=An("rtc");function ay(n,e=mt){Yo("ec",n,e)}const ly=Symbol.for("v-ndc");function Ur(n,e,t,r){let s;const i=t,a=ie(n);if(a||Ne(n)){const l=a&&dr(n);let c=!1,h=!1;l&&(c=!Pt(n),h=vn(n),n=zo(n)),s=new Array(n.length);for(let d=0,p=n.length;d<p;d++)s[d]=e(c?h?zr(Ot(n[d])):Ot(n[d]):n[d],d,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let l=0;l<n;l++)s[l]=e(l+1,l,void 0,i)}else if(Re(n))if(n[Symbol.iterator])s=Array.from(n,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(n);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const d=l[c];s[c]=e(n[d],d,c,i)}}else s=[];return s}const Al=n=>n?dp(n)?ea(n):Al(n.parent):null,Ks=et(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Al(n.parent),$root:n=>Al(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Gd(n),$forceUpdate:n=>n.f||(n.f=()=>{fc(n.update)}),$nextTick:n=>n.n||(n.n=xd.bind(n.proxy)),$watch:n=>H_.bind(n)}),Qa=(n,e)=>n!==Pe&&!n.__isScriptSetup&&Ie(n,e),cy={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=n;if(e[0]!=="$"){const y=a[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(Qa(r,e))return a[e]=1,r[e];if(s!==Pe&&Ie(s,e))return a[e]=2,s[e];if(Ie(i,e))return a[e]=3,i[e];if(t!==Pe&&Ie(t,e))return a[e]=4,t[e];bl&&(a[e]=0)}}const h=Ks[e];let d,p;if(h)return e==="$attrs"&&at(n.attrs,"get",""),h(n);if((d=l.__cssModules)&&(d=d[e]))return d;if(t!==Pe&&Ie(t,e))return a[e]=4,t[e];if(p=c.config.globalProperties,Ie(p,e))return p[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return Qa(s,e)?(s[e]=t,!0):r!==Pe&&Ie(r,e)?(r[e]=t,!0):Ie(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,props:i,type:a}},l){let c;return!!(t[l]||n!==Pe&&l[0]!=="$"&&Ie(n,l)||Qa(e,l)||Ie(i,l)||Ie(r,l)||Ie(Ks,l)||Ie(s.config.globalProperties,l)||(c=a.__cssModules)&&c[l])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ie(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function _h(n){return ie(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let bl=!0;function uy(n){const e=Gd(n),t=n.proxy,r=n.ctx;bl=!1,e.beforeCreate&&yh(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:d,beforeMount:p,mounted:y,beforeUpdate:w,updated:C,activated:P,deactivated:k,beforeDestroy:O,beforeUnmount:B,destroyed:Q,unmounted:z,render:fe,renderTracked:he,renderTriggered:T,errorCaptured:m,serverPrefetch:v,expose:I,inheritAttrs:b,components:R,directives:_,filters:Y}=e;if(h&&hy(h,r,null),a)for(const Ae in a){const ye=a[Ae];ce(ye)&&(r[Ae]=ye.bind(t))}if(s){const Ae=s.call(t,t);Re(Ae)&&(n.data=cc(Ae))}if(bl=!0,i)for(const Ae in i){const ye=i[Ae],kt=ce(ye)?ye.bind(t,t):ce(ye.get)?ye.get.bind(t,t):Ht,Jn=!ce(ye)&&ce(ye.set)?ye.set.bind(t):Ht,tn=gp({get:kt,set:Jn});Object.defineProperty(r,Ae,{enumerable:!0,configurable:!0,get:()=>tn.value,set:qe=>tn.value=qe})}if(l)for(const Ae in l)zd(l[Ae],r,t,Ae);if(c){const Ae=ce(c)?c.call(t):c;Reflect.ownKeys(Ae).forEach(ye=>{io(ye,Ae[ye])})}d&&yh(d,n,"c");function je(Ae,ye){ie(ye)?ye.forEach(kt=>Ae(kt.bind(t))):ye&&Ae(ye.bind(t))}if(je(ey,p),je(pc,y),je(ty,w),je(ny,C),je(J_,P),je(X_,k),je(ay,m),je(oy,he),je(iy,T),je(ry,B),je(Jo,z),je(sy,v),ie(I))if(I.length){const Ae=n.exposed||(n.exposed={});I.forEach(ye=>{Object.defineProperty(Ae,ye,{get:()=>t[ye],set:kt=>t[ye]=kt,enumerable:!0})})}else n.exposed||(n.exposed={});fe&&n.render===Ht&&(n.render=fe),b!=null&&(n.inheritAttrs=b),R&&(n.components=R),_&&(n.directives=_),v&&Wd(n)}function hy(n,e,t=Ht){ie(n)&&(n=Rl(n));for(const r in n){const s=n[r];let i;Re(s)?"default"in s?i=It(s.from||r,s.default,!0):i=It(s.from||r):i=It(s),ut(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function yh(n,e,t){Mt(ie(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function zd(n,e,t,r){let s=r.includes(".")?jd(t,r):()=>t[r];if(Ne(n)){const i=e[n];ce(i)&&za(s,i)}else if(ce(n))za(s,n.bind(t));else if(Re(n))if(ie(n))n.forEach(i=>zd(i,e,t,r));else{const i=ce(n.handler)?n.handler.bind(t):e[n.handler];ce(i)&&za(s,i,n)}}function Gd(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!t&&!r?c=e:(c={},s.length&&s.forEach(h=>To(c,h,a,!0)),To(c,e,a)),Re(e)&&i.set(e,c),c}function To(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&To(n,i,t,!0),s&&s.forEach(a=>To(n,a,t,!0));for(const a in e)if(!(r&&a==="expose")){const l=fy[a]||t&&t[a];n[a]=l?l(n[a],e[a]):e[a]}return n}const fy={data:vh,props:Eh,emits:Eh,methods:Ns,computed:Ns,beforeCreate:dt,created:dt,beforeMount:dt,mounted:dt,beforeUpdate:dt,updated:dt,beforeDestroy:dt,beforeUnmount:dt,destroyed:dt,unmounted:dt,activated:dt,deactivated:dt,errorCaptured:dt,serverPrefetch:dt,components:Ns,directives:Ns,watch:py,provide:vh,inject:dy};function vh(n,e){return e?n?function(){return et(ce(n)?n.call(this,this):n,ce(e)?e.call(this,this):e)}:e:n}function dy(n,e){return Ns(Rl(n),Rl(e))}function Rl(n){if(ie(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function dt(n,e){return n?[...new Set([].concat(n,e))]:e}function Ns(n,e){return n?et(Object.create(null),n,e):e}function Eh(n,e){return n?ie(n)&&ie(e)?[...new Set([...n,...e])]:et(Object.create(null),_h(n),_h(e??{})):e}function py(n,e){if(!n)return e;if(!e)return n;const t=et(Object.create(null),n);for(const r in e)t[r]=dt(n[r],e[r]);return t}function Qd(){return{app:null,config:{isNativeTag:ud,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gy=0;function my(n,e){return function(r,s=null){ce(r)||(r=et({},r)),s!=null&&!Re(s)&&(s=null);const i=Qd(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:gy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Gy,get config(){return i.config},set config(d){},use(d,...p){return a.has(d)||(d&&ce(d.install)?(a.add(d),d.install(h,...p)):ce(d)&&(a.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,y){if(!c){const w=h._ceVNode||_n(r,s);return w.appContext=i,y===!0?y="svg":y===!1&&(y=void 0),n(w,d,y),c=!0,h._container=d,d.__vue_app__=h,ea(w.component)}},onUnmount(d){l.push(d)},unmount(){c&&(Mt(l,h._instance,16),n(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=Br;Br=h;try{return d()}finally{Br=p}}};return h}}let Br=null;const _y=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Dt(e)}Modifiers`]||n[`${Gn(e)}Modifiers`];function yy(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Pe;let s=t;const i=e.startsWith("update:"),a=i&&_y(r,e.slice(7));a&&(a.trim&&(s=t.map(d=>Ne(d)?d.trim():d)),a.number&&(s=t.map(nc)));let l,c=r[l=ja(e)]||r[l=ja(Dt(e))];!c&&i&&(c=r[l=ja(Gn(e))]),c&&Mt(c,n,6,s);const h=r[l+"Once"];if(h){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,Mt(h,n,6,s)}}const vy=new WeakMap;function Yd(n,e,t=!1){const r=t?vy:e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let a={},l=!1;if(!ce(n)){const c=h=>{const d=Yd(h,e,!0);d&&(l=!0,et(a,d))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!i&&!l?(Re(n)&&r.set(n,null),null):(ie(i)?i.forEach(c=>a[c]=null):et(a,i),Re(n)&&r.set(n,a),a)}function Xo(n,e){return!n||!jo(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Ie(n,e[0].toLowerCase()+e.slice(1))||Ie(n,Gn(e))||Ie(n,e))}function Th(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:d,props:p,data:y,setupState:w,ctx:C,inheritAttrs:P}=n,k=vo(n);let O,B;try{if(t.shapeFlag&4){const z=s||r,fe=z;O=jt(h.call(fe,z,d,p,w,y,C)),B=l}else{const z=e;O=jt(z.length>1?z(p,{attrs:l,slots:a,emit:c}):z(p,null)),B=e.props?l:Ey(l)}}catch(z){zs.length=0,Go(z,n,1),O=_n(qn)}let Q=O;if(B&&P!==!1){const z=Object.keys(B),{shapeFlag:fe}=Q;z.length&&fe&7&&(i&&z.some(qo)&&(B=Ty(B,i)),Q=Gr(Q,B,!1,!0))}return t.dirs&&(Q=Gr(Q,null,!1,!0),Q.dirs=Q.dirs?Q.dirs.concat(t.dirs):t.dirs),t.transition&&dc(Q,t.transition),O=Q,vo(k),O}const Ey=n=>{let e;for(const t in n)(t==="class"||t==="style"||jo(t))&&((e||(e={}))[t]=n[t]);return e},Ty=(n,e)=>{const t={};for(const r in n)(!qo(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function wy(n,e,t){const{props:r,children:s,component:i}=n,{props:a,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?wh(r,a,h):!!a;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const y=d[p];if(Jd(a,r,y)&&!Xo(h,y))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?wh(r,a,h):!0:!!a;return!1}function wh(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(Jd(e,n,i)&&!Xo(t,i))return!0}return!1}function Jd(n,e,t){const r=n[t],s=e[t];return t==="style"&&Re(r)&&Re(s)?!rc(r,s):r!==s}function Iy({vnode:n,parent:e,suspense:t},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=r,n=s),s===n)(n=e.vnode).el=r,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=r)}const Xd={},Zd=()=>Object.create(Xd),ep=n=>Object.getPrototypeOf(n)===Xd;function Ay(n,e,t,r=!1){const s={},i=Zd();n.propsDefaults=Object.create(null),tp(n,e,s,i);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=r?s:k_(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function by(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=n,l=we(s),[c]=n.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=n.vnode.dynamicProps;for(let p=0;p<d.length;p++){let y=d[p];if(Xo(n.emitsOptions,y))continue;const w=e[y];if(c)if(Ie(i,y))w!==i[y]&&(i[y]=w,h=!0);else{const C=Dt(y);s[C]=Sl(c,l,C,w,n,!1)}else w!==i[y]&&(i[y]=w,h=!0)}}}else{tp(n,e,s,i)&&(h=!0);let d;for(const p in l)(!e||!Ie(e,p)&&((d=Gn(p))===p||!Ie(e,d)))&&(c?t&&(t[p]!==void 0||t[d]!==void 0)&&(s[p]=Sl(c,l,p,void 0,n,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Ie(e,p))&&(delete i[p],h=!0)}h&&un(n.attrs,"set","")}function tp(n,e,t,r){const[s,i]=n.propsOptions;let a=!1,l;if(e)for(let c in e){if($s(c))continue;const h=e[c];let d;s&&Ie(s,d=Dt(c))?!i||!i.includes(d)?t[d]=h:(l||(l={}))[d]=h:Xo(n.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=we(t),h=l||Pe;for(let d=0;d<i.length;d++){const p=i[d];t[p]=Sl(s,c,p,h[p],n,!Ie(h,p))}}return a}function Sl(n,e,t,r,s,i){const a=n[t];if(a!=null){const l=Ie(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ce(c)){const{propsDefaults:h}=s;if(t in h)r=h[t];else{const d=_i(s);r=h[t]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(t,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===Gn(t))&&(r=!0))}return r}const Ry=new WeakMap;function np(n,e,t=!1){const r=t?Ry:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,a={},l=[];let c=!1;if(!ce(n)){const d=p=>{c=!0;const[y,w]=np(p,e,!0);et(a,y),w&&l.push(...w)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!i&&!c)return Re(n)&&r.set(n,xr),xr;if(ie(i))for(let d=0;d<i.length;d++){const p=Dt(i[d]);Ih(p)&&(a[p]=Pe)}else if(i)for(const d in i){const p=Dt(d);if(Ih(p)){const y=i[d],w=a[p]=ie(y)||ce(y)?{type:y}:et({},y),C=w.type;let P=!1,k=!0;if(ie(C))for(let O=0;O<C.length;++O){const B=C[O],Q=ce(B)&&B.name;if(Q==="Boolean"){P=!0;break}else Q==="String"&&(k=!1)}else P=ce(C)&&C.name==="Boolean";w[0]=P,w[1]=k,(P||Ie(w,"default"))&&l.push(p)}}const h=[a,l];return Re(n)&&r.set(n,h),h}function Ih(n){return n[0]!=="$"&&!$s(n)}const gc=n=>n==="_"||n==="_ctx"||n==="$stable",mc=n=>ie(n)?n.map(jt):[jt(n)],Sy=(n,e,t)=>{if(e._n)return e;const r=j_((...s)=>mc(e(...s)),t);return r._c=!1,r},rp=(n,e,t)=>{const r=n._ctx;for(const s in n){if(gc(s))continue;const i=n[s];if(ce(i))e[s]=Sy(s,i,r);else if(i!=null){const a=mc(i);e[s]=()=>a}}},sp=(n,e)=>{const t=mc(e);n.slots.default=()=>t},ip=(n,e,t)=>{for(const r in e)(t||!gc(r))&&(n[r]=e[r])},Py=(n,e,t)=>{const r=n.slots=Zd();if(n.vnode.shapeFlag&32){const s=e._;s?(ip(r,e,t),t&&md(r,"_",s,!0)):rp(e,r)}else e&&sp(n,e)},Cy=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,a=Pe;if(r.shapeFlag&32){const l=e._;l?t&&l===1?i=!1:ip(s,e,t):(i=!e.$stable,rp(e,s)),a=e}else e&&(sp(n,e),a={default:1});if(i)for(const l in s)!gc(l)&&a[l]==null&&delete s[l]},pt=Oy;function ky(n){return Vy(n)}function Vy(n,e){const t=Ho();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:d,parentNode:p,nextSibling:y,setScopeId:w=Ht,insertStaticContent:C}=n,P=(E,A,D,F=null,L=null,M=null,K=void 0,q=null,$=!!A.dynamicChildren)=>{if(E===A)return;E&&!Ss(E,A)&&(F=nn(E),qe(E,L,M,!0),E=null),A.patchFlag===-2&&($=!1,A.dynamicChildren=null);const{type:x,ref:ee,shapeFlag:G}=A;switch(x){case Zo:k(E,A,D,F);break;case qn:O(E,A,D,F);break;case Ja:E==null&&B(A,D,F,K);break;case lt:R(E,A,D,F,L,M,K,q,$);break;default:G&1?fe(E,A,D,F,L,M,K,q,$):G&6?_(E,A,D,F,L,M,K,q,$):(G&64||G&128)&&x.process(E,A,D,F,L,M,K,q,$,Ft)}ee!=null&&L?Ws(ee,E&&E.ref,M,A||E,!A):ee==null&&E&&E.ref!=null&&Ws(E.ref,null,M,E,!0)},k=(E,A,D,F)=>{if(E==null)r(A.el=l(A.children),D,F);else{const L=A.el=E.el;A.children!==E.children&&h(L,A.children)}},O=(E,A,D,F)=>{E==null?r(A.el=c(A.children||""),D,F):A.el=E.el},B=(E,A,D,F)=>{[E.el,E.anchor]=C(E.children,A,D,F,E.el,E.anchor)},Q=({el:E,anchor:A},D,F)=>{let L;for(;E&&E!==A;)L=y(E),r(E,D,F),E=L;r(A,D,F)},z=({el:E,anchor:A})=>{let D;for(;E&&E!==A;)D=y(E),s(E),E=D;s(A)},fe=(E,A,D,F,L,M,K,q,$)=>{if(A.type==="svg"?K="svg":A.type==="math"&&(K="mathml"),E==null)he(A,D,F,L,M,K,q,$);else{const x=E.el&&E.el._isVueCE?E.el:null;try{x&&x._beginPatch(),v(E,A,L,M,K,q,$)}finally{x&&x._endPatch()}}},he=(E,A,D,F,L,M,K,q)=>{let $,x;const{props:ee,shapeFlag:G,transition:X,dirs:ne}=E;if($=E.el=a(E.type,M,ee&&ee.is,ee),G&8?d($,E.children):G&16&&m(E.children,$,null,F,L,Ya(E,M),K,q),ne&&sr(E,null,F,"created"),T($,E,E.scopeId,K,F),ee){for(const le in ee)le!=="value"&&!$s(le)&&i($,le,null,ee[le],M,F);"value"in ee&&i($,"value",null,ee.value,M),(x=ee.onVnodeBeforeMount)&&Ut(x,F,E)}ne&&sr(E,null,F,"beforeMount");const te=Dy(L,X);te&&X.beforeEnter($),r($,A,D),((x=ee&&ee.onVnodeMounted)||te||ne)&&pt(()=>{try{x&&Ut(x,F,E),te&&X.enter($),ne&&sr(E,null,F,"mounted")}finally{}},L)},T=(E,A,D,F,L)=>{if(D&&w(E,D),F)for(let M=0;M<F.length;M++)w(E,F[M]);if(L){let M=L.subTree;if(A===M||lp(M.type)&&(M.ssContent===A||M.ssFallback===A)){const K=L.vnode;T(E,K,K.scopeId,K.slotScopeIds,L.parent)}}},m=(E,A,D,F,L,M,K,q,$=0)=>{for(let x=$;x<E.length;x++){const ee=E[x]=q?cn(E[x]):jt(E[x]);P(null,ee,A,D,F,L,M,K,q)}},v=(E,A,D,F,L,M,K)=>{const q=A.el=E.el;let{patchFlag:$,dynamicChildren:x,dirs:ee}=A;$|=E.patchFlag&16;const G=E.props||Pe,X=A.props||Pe;let ne;if(D&&ir(D,!1),(ne=X.onVnodeBeforeUpdate)&&Ut(ne,D,A,E),ee&&sr(A,E,D,"beforeUpdate"),D&&ir(D,!0),x&&(!E.dynamicChildren||E.dynamicChildren.length!==x.length)&&($=0,K=!1,x=null),(G.innerHTML&&X.innerHTML==null||G.textContent&&X.textContent==null)&&d(q,""),x?I(E.dynamicChildren,x,q,D,F,Ya(A,L),M):K||ye(E,A,q,null,D,F,Ya(A,L),M,!1),$>0){if($&16)b(q,G,X,D,L);else if($&2&&G.class!==X.class&&i(q,"class",null,X.class,L),$&4&&i(q,"style",G.style,X.style,L),$&8){const te=A.dynamicProps;for(let le=0;le<te.length;le++){const _e=te[le],De=G[_e],Fe=X[_e];(Fe!==De||_e==="value")&&i(q,_e,De,Fe,L,D)}}$&1&&E.children!==A.children&&d(q,A.children)}else!K&&x==null&&b(q,G,X,D,L);((ne=X.onVnodeUpdated)||ee)&&pt(()=>{ne&&Ut(ne,D,A,E),ee&&sr(A,E,D,"updated")},F)},I=(E,A,D,F,L,M,K)=>{for(let q=0;q<A.length;q++){const $=E[q],x=A[q],ee=$.el&&($.type===lt||!Ss($,x)||$.shapeFlag&198)?p($.el):D;P($,x,ee,null,F,L,M,K,!0)}},b=(E,A,D,F,L)=>{if(A!==D){if(A!==Pe)for(const M in A)!$s(M)&&!(M in D)&&i(E,M,A[M],null,L,F);for(const M in D){if($s(M))continue;const K=D[M],q=A[M];K!==q&&M!=="value"&&i(E,M,q,K,L,F)}"value"in D&&i(E,"value",A.value,D.value,L)}},R=(E,A,D,F,L,M,K,q,$)=>{const x=A.el=E?E.el:l(""),ee=A.anchor=E?E.anchor:l("");let{patchFlag:G,dynamicChildren:X,slotScopeIds:ne}=A;ne&&(q=q?q.concat(ne):ne),E==null?(r(x,D,F),r(ee,D,F),m(A.children||[],D,ee,L,M,K,q,$)):G>0&&G&64&&X&&E.dynamicChildren&&E.dynamicChildren.length===X.length?(I(E.dynamicChildren,X,D,L,M,K,q),(A.key!=null||L&&A===L.subTree)&&_c(E,A,!0)):ye(E,A,D,ee,L,M,K,q,$)},_=(E,A,D,F,L,M,K,q,$)=>{A.slotScopeIds=q,E==null?A.shapeFlag&512?L.ctx.activate(A,D,F,K,$):Y(A,D,F,L,M,K,$):ue(E,A,$)},Y=(E,A,D,F,L,M,K)=>{const q=E.component=$y(E,F,L);if(Hd(E)&&(q.ctx.renderer=Ft),qy(q,!1,K),q.asyncDep){if(L&&L.registerDep(q,je,K),!E.el){const $=q.subTree=_n(qn);O(null,$,A,D),E.placeholder=$.el}}else je(q,E,A,D,L,M,K)},ue=(E,A,D)=>{const F=A.component=E.component;if(wy(E,A,D))if(F.asyncDep&&!F.asyncResolved){Ae(F,A,D);return}else F.next=A,F.update();else A.el=E.el,F.vnode=A},je=(E,A,D,F,L,M,K)=>{const q=()=>{if(E.isMounted){let{next:G,bu:X,u:ne,parent:te,vnode:le}=E;{const nt=op(E);if(nt){G&&(G.el=le.el,Ae(E,G,K)),nt.asyncDep.then(()=>{pt(()=>{E.isUnmounted||x()},L)});return}}let _e=G,De;ir(E,!1),G?(G.el=le.el,Ae(E,G,K)):G=le,X&&so(X),(De=G.props&&G.props.onVnodeBeforeUpdate)&&Ut(De,te,G,le),ir(E,!0);const Fe=Th(E),bt=E.subTree;E.subTree=Fe,P(bt,Fe,p(bt.el),nn(bt),E,L,M),G.el=Fe.el,_e===null&&Iy(E,Fe.el),ne&&pt(ne,L),(De=G.props&&G.props.onVnodeUpdated)&&pt(()=>Ut(De,te,G,le),L)}else{let G;const{el:X,props:ne}=A,{bm:te,m:le,parent:_e,root:De,type:Fe}=E,bt=Hs(A);ir(E,!1),te&&so(te),!bt&&(G=ne&&ne.onVnodeBeforeMount)&&Ut(G,_e,A),ir(E,!0);{De.ce&&De.ce._hasShadowRoot()&&De.ce._injectChildStyle(Fe,E.parent?E.parent.type:void 0);const nt=E.subTree=Th(E);P(null,nt,D,F,E,L,M),A.el=nt.el}if(le&&pt(le,L),!bt&&(G=ne&&ne.onVnodeMounted)){const nt=A;pt(()=>Ut(G,_e,nt),L)}(A.shapeFlag&256||_e&&Hs(_e.vnode)&&_e.vnode.shapeFlag&256)&&E.a&&pt(E.a,L),E.isMounted=!0,A=D=F=null}};E.scope.on();const $=E.effect=new Ed(q);E.scope.off();const x=E.update=$.run.bind($),ee=E.job=$.runIfDirty.bind($);ee.i=E,ee.id=E.uid,$.scheduler=()=>fc(ee),ir(E,!0),x()},Ae=(E,A,D)=>{A.component=E;const F=E.vnode.props;E.vnode=A,E.next=null,by(E,A.props,F,D),Cy(E,A.children,D),Jt(),fh(E),Xt()},ye=(E,A,D,F,L,M,K,q,$=!1)=>{const x=E&&E.children,ee=E?E.shapeFlag:0,G=A.children,{patchFlag:X,shapeFlag:ne}=A;if(X>0){if(X&128){Jn(x,G,D,F,L,M,K,q,$);return}else if(X&256){kt(x,G,D,F,L,M,K,q,$);return}}ne&8?(ee&16&&Zn(x,L,M),G!==x&&d(D,G)):ee&16?ne&16?Jn(x,G,D,F,L,M,K,q,$):Zn(x,L,M,!0):(ee&8&&d(D,""),ne&16&&m(G,D,F,L,M,K,q,$))},kt=(E,A,D,F,L,M,K,q,$)=>{E=E||xr,A=A||xr;const x=E.length,ee=A.length,G=Math.min(x,ee);let X;for(X=0;X<G;X++){const ne=A[X]=$?cn(A[X]):jt(A[X]);P(E[X],ne,D,null,L,M,K,q,$)}x>ee?Zn(E,L,M,!0,!1,G):m(A,D,F,L,M,K,q,$,G)},Jn=(E,A,D,F,L,M,K,q,$)=>{let x=0;const ee=A.length;let G=E.length-1,X=ee-1;for(;x<=G&&x<=X;){const ne=E[x],te=A[x]=$?cn(A[x]):jt(A[x]);if(Ss(ne,te))P(ne,te,D,null,L,M,K,q,$);else break;x++}for(;x<=G&&x<=X;){const ne=E[G],te=A[X]=$?cn(A[X]):jt(A[X]);if(Ss(ne,te))P(ne,te,D,null,L,M,K,q,$);else break;G--,X--}if(x>G){if(x<=X){const ne=X+1,te=ne<ee?A[ne].el:F;for(;x<=X;)P(null,A[x]=$?cn(A[x]):jt(A[x]),D,te,L,M,K,q,$),x++}}else if(x>X)for(;x<=G;)qe(E[x],L,M,!0),x++;else{const ne=x,te=x,le=new Map;for(x=te;x<=X;x++){const Ge=A[x]=$?cn(A[x]):jt(A[x]);Ge.key!=null&&le.set(Ge.key,x)}let _e,De=0;const Fe=X-te+1;let bt=!1,nt=0;const Rn=new Array(Fe);for(x=0;x<Fe;x++)Rn[x]=0;for(x=ne;x<=G;x++){const Ge=E[x];if(De>=Fe){qe(Ge,L,M,!0);continue}let Rt;if(Ge.key!=null)Rt=le.get(Ge.key);else for(_e=te;_e<=X;_e++)if(Rn[_e-te]===0&&Ss(Ge,A[_e])){Rt=_e;break}Rt===void 0?qe(Ge,L,M,!0):(Rn[Rt-te]=x+1,Rt>=nt?nt=Rt:bt=!0,P(Ge,A[Rt],D,null,L,M,K,q,$),De++)}const ds=bt?Ny(Rn):xr;for(_e=ds.length-1,x=Fe-1;x>=0;x--){const Ge=te+x,Rt=A[Ge],Di=A[Ge+1],Ar=Ge+1<ee?Di.el||ap(Di):F;Rn[x]===0?P(null,Rt,D,Ar,L,M,K,q,$):bt&&(_e<0||x!==ds[_e]?tn(Rt,D,Ar,2):_e--)}}},tn=(E,A,D,F,L=null)=>{const{el:M,type:K,transition:q,children:$,shapeFlag:x}=E;if(x&6){tn(E.component.subTree,A,D,F);return}if(x&128){E.suspense.move(A,D,F);return}if(x&64){K.move(E,A,D,Ft);return}if(K===lt){r(M,A,D);for(let G=0;G<$.length;G++)tn($[G],A,D,F);r(E.anchor,A,D);return}if(K===Ja){Q(E,A,D);return}if(F!==2&&x&1&&q)if(F===0)q.persisted&&!M[Ga]?r(M,A,D):(q.beforeEnter(M),r(M,A,D),pt(()=>q.enter(M),L));else{const{leave:G,delayLeave:X,afterLeave:ne}=q,te=()=>{E.ctx.isUnmounted?s(M):r(M,A,D)},le=()=>{const _e=M._isLeaving||!!M[Ga];M._isLeaving&&M[Ga](!0),q.persisted&&!_e?te():G(M,()=>{te(),ne&&ne()})};X?X(M,te,le):le()}else r(M,A,D)},qe=(E,A,D,F=!1,L=!1)=>{const{type:M,props:K,ref:q,children:$,dynamicChildren:x,shapeFlag:ee,patchFlag:G,dirs:X,cacheIndex:ne,memo:te}=E;if(G===-2&&(L=!1),q!=null&&(Jt(),Ws(q,null,D,E,!0),Xt()),ne!=null&&(A.renderCache[ne]=void 0),ee&256){A.ctx.deactivate(E);return}const le=ee&1&&X,_e=!Hs(E);let De;if(_e&&(De=K&&K.onVnodeBeforeUnmount)&&Ut(De,A,E),ee&6)Xn(E.component,D,F);else{if(ee&128){E.suspense.unmount(D,F);return}le&&sr(E,null,A,"beforeUnmount"),ee&64?E.type.remove(E,A,D,Ft,F):x&&!x.hasOnce&&(M!==lt||G>0&&G&64)?Zn(x,A,D,!1,!0):(M===lt&&G&384||!L&&ee&16)&&Zn($,A,D),F&&We(E)}const Fe=te!=null&&ne==null;(_e&&(De=K&&K.onVnodeUnmounted)||le||Fe)&&pt(()=>{De&&Ut(De,A,E),le&&sr(E,null,A,"unmounted"),Fe&&(E.el=null)},D)},We=E=>{const{type:A,el:D,anchor:F,transition:L}=E;if(A===lt){Sa(D,F);return}if(A===Ja){z(E);return}const M=()=>{s(D),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(E.shapeFlag&1&&L&&!L.persisted){const{leave:K,delayLeave:q}=L,$=()=>K(D,M);q?q(E.el,M,$):$()}else M()},Sa=(E,A)=>{let D;for(;E!==A;)D=y(E),s(E),E=D;s(A)},Xn=(E,A,D)=>{const{bum:F,scope:L,job:M,subTree:K,um:q,m:$,a:x}=E;Ah($),Ah(x),F&&so(F),L.stop(),M&&(M.flags|=8,qe(K,E,A,D)),q&&pt(q,A),pt(()=>{E.isUnmounted=!0},A)},Zn=(E,A,D,F=!1,L=!1,M=0)=>{for(let K=M;K<E.length;K++)qe(E[K],A,D,F,L)},nn=E=>{if(E.shapeFlag&6)return nn(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const A=y(E.anchor||E.el),D=A&&A[qd];return D?y(D):A};let hs=!1;const Vi=(E,A,D)=>{let F;E==null?A._vnode&&(qe(A._vnode,null,null,!0),F=A._vnode.component):P(A._vnode||null,E,A,null,null,null,D),A._vnode=E,hs||(hs=!0,fh(F),Fd(),hs=!1)},Ft={p:P,um:qe,m:tn,r:We,mt:Y,mc:m,pc:ye,pbc:I,n:nn,o:n};return{render:Vi,hydrate:void 0,createApp:my(Vi)}}function Ya({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ir({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Dy(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function _c(n,e,t=!1){const r=n.children,s=e.children;if(ie(r)&&ie(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=cn(s[i]),l.el=a.el),!t&&l.patchFlag!==-2&&_c(a,l)),l.type===Zo&&(l.patchFlag===-1&&(l=s[i]=cn(l)),l.el=a.el),l.type===qn&&!l.el&&(l.el=a.el)}}function Ny(n){const e=n.slice(),t=[0];let r,s,i,a,l;const c=n.length;for(r=0;r<c;r++){const h=n[r];if(h!==0){if(s=t[t.length-1],n[s]<h){e[r]=s,t.push(r);continue}for(i=0,a=t.length-1;i<a;)l=i+a>>1,n[t[l]]<h?i=l+1:a=l;h<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=e[a];return t}function op(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:op(e)}function Ah(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function ap(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?ap(e.subTree):null}const lp=n=>n.__isSuspense;function Oy(n,e){e&&e.pendingBranch?ie(n)?e.effects.push(...n):e.effects.push(n):$_(n)}const lt=Symbol.for("v-fgt"),Zo=Symbol.for("v-txt"),qn=Symbol.for("v-cmt"),Ja=Symbol.for("v-stc"),zs=[];let Tt=null;function de(n=!1){zs.push(Tt=n?null:[])}function My(){zs.pop(),Tt=zs[zs.length-1]||null}let ni=1;function bh(n,e=!1){ni+=n,n<0&&Tt&&e&&(Tt.hasOnce=!0)}function cp(n){return n.dynamicChildren=ni>0?Tt||xr:null,My(),ni>0&&Tt&&Tt.push(n),n}function Te(n,e,t,r,s,i){return cp(j(n,e,t,r,s,i,!0))}function Gs(n,e,t,r,s){return cp(_n(n,e,t,r,s,!0))}function up(n){return n?n.__v_isVNode===!0:!1}function Ss(n,e){return n.type===e.type&&n.key===e.key}const hp=({key:n})=>n??null,oo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ne(n)||ut(n)||ce(n)?{i:St,r:n,k:e,f:!!t}:n:null);function j(n,e=null,t=null,r=0,s=null,i=n===lt?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&hp(e),ref:e&&oo(e),scopeId:Bd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:St};return l?(wo(c,t),i&128&&n.normalize(c)):t&&(c.shapeFlag|=Ne(t)?8:16),ni>0&&!a&&Tt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Tt.push(c),c}const _n=xy;function xy(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===ly)&&(n=qn),up(n)){const l=Gr(n,e,!0);return t&&wo(l,t),ni>0&&!i&&Tt&&(l.shapeFlag&6?Tt[Tt.indexOf(n)]=l:Tt.push(l)),l.patchFlag=-2,l}if(zy(n)&&(n=n.__vccOpts),e){e=Ly(e);let{class:l,style:c}=e;l&&!Ne(l)&&(e.class=mn(l)),Re(c)&&(hc(c)&&!ie(c)&&(c=et({},c)),e.style=Ko(c))}const a=Ne(n)?1:lp(n)?128:K_(n)?64:Re(n)?4:ce(n)?2:0;return j(n,e,t,r,s,a,i,!0)}function Ly(n){return n?hc(n)||ep(n)?et({},n):n:null}function Gr(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=n,h=e?Fy(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:h,key:h&&hp(h),ref:e&&e.ref?t&&i?ie(i)?i.concat(oo(e)):[i,oo(e)]:oo(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==lt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Gr(n.ssContent),ssFallback:n.ssFallback&&Gr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&r&&dc(d,c.clone(d)),d}function fp(n=" ",e=0){return _n(Zo,null,n,e)}function Wt(n="",e=!1){return e?(de(),Gs(qn,null,n)):_n(qn,null,n)}function jt(n){return n==null||typeof n=="boolean"?_n(qn):ie(n)?_n(lt,null,n.slice()):up(n)?cn(n):_n(Zo,null,String(n))}function cn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Gr(n)}function wo(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(ie(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),wo(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!ep(e)?e._ctx=St:s===3&&St&&(St.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(ce(e)){if(r&65){wo(n,{default:e});return}e={default:e,_ctx:St},t=32}else e=String(e),r&64?(t=16,e=[fp(e)]):t=8;n.children=e,n.shapeFlag|=t}function Fy(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=mn([e.class,r.class]));else if(s==="style")e.style=Ko([e.style,r.style]);else if(jo(s)){const i=e[s],a=r[s];a&&i!==a&&!(ie(i)&&i.includes(a))?e[s]=i?[].concat(i,a):a:a==null&&i==null&&!qo(s)&&(e[s]=a)}else s!==""&&(e[s]=r[s])}return e}function Ut(n,e,t,r=null){Mt(n,e,7,[t,r])}const Uy=Qd();let By=0;function $y(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||Uy,i={uid:By++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new h_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:np(r,s),emitsOptions:Yd(r,s),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:r.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=yy.bind(null,i),n.ce&&n.ce(i),i}let mt=null;const jy=()=>mt||St;let Io,Pl;{const n=Ho(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Io=e("__VUE_INSTANCE_SETTERS__",t=>mt=t),Pl=e("__VUE_SSR_SETTERS__",t=>ri=t)}const _i=n=>{const e=mt;return Io(n),n.scope.on(),()=>{n.scope.off(),Io(e)}},Rh=()=>{mt&&mt.scope.off(),Io(null)};function dp(n){return n.vnode.shapeFlag&4}let ri=!1;function qy(n,e=!1,t=!1){e&&Pl(e);const{props:r,children:s}=n.vnode,i=dp(n);Ay(n,r,i,e),Py(n,s,t||e);const a=i?Wy(n,e):void 0;return e&&Pl(!1),a}function Wy(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,cy);const{setup:r}=t;if(r){Jt();const s=n.setupContext=r.length>1?Ky(n):null,i=_i(n),a=mi(r,n,0,[n.props,s]),l=fd(a);if(Xt(),i(),(l||n.sp)&&!Hs(n)&&Wd(n),l){if(a.then(Rh,Rh),e)return a.then(c=>{Sh(n,c)}).catch(c=>{Go(c,n,0)});n.asyncDep=a}else Sh(n,a)}else pp(n)}function Sh(n,e,t){ce(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Re(e)&&(n.setupState=Od(e)),pp(n)}function pp(n,e,t){const r=n.type;n.render||(n.render=r.render||Ht);{const s=_i(n);Jt();try{uy(n)}finally{Xt(),s()}}}const Hy={get(n,e){return at(n,"get",""),n[e]}};function Ky(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Hy),slots:n.slots,emit:n.emit,expose:e}}function ea(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Od(V_(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ks)return Ks[t](n)},has(e,t){return t in e||t in Ks}})):n.proxy}function zy(n){return ce(n)&&"__vccOpts"in n}const gp=(n,e)=>x_(n,e,ri),Gy="3.5.39";/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Cl;const Ph=typeof window<"u"&&window.trustedTypes;if(Ph)try{Cl=Ph.createPolicy("vue",{createHTML:n=>n})}catch{}const mp=Cl?n=>Cl.createHTML(n):n=>n,Qy="http://www.w3.org/2000/svg",Yy="http://www.w3.org/1998/Math/MathML",an=typeof document<"u"?document:null,Ch=an&&an.createElement("template"),Jy={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?an.createElementNS(Qy,n):e==="mathml"?an.createElementNS(Yy,n):t?an.createElement(n,{is:t}):an.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>an.createTextNode(n),createComment:n=>an.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>an.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const a=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{Ch.innerHTML=mp(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const l=Ch.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Xy=Symbol("_vtc");function Zy(n,e,t){const r=n[Xy];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Ao=Symbol("_vod"),_p=Symbol("_vsh"),Xa={name:"show",beforeMount(n,{value:e},{transition:t}){n[Ao]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Ps(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:r}){!e!=!t&&(r?e?(r.beforeEnter(n),Ps(n,!0),r.enter(n)):r.leave(n,()=>{Ps(n,!1)}):Ps(n,e))},beforeUnmount(n,{value:e}){Ps(n,e)}};function Ps(n,e){n.style.display=e?n[Ao]:"none",n[_p]=!e}const ev=Symbol(""),tv=/(?:^|;)\s*display\s*:/;function nv(n,e,t){const r=n.style,s=Ne(t);let i=!1;if(t&&!s){if(e)if(Ne(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();t[l]==null&&Os(r,l,"")}else for(const a in e)t[a]==null&&Os(r,a,"");for(const a in t){a==="display"&&(i=!0);const l=t[a];l!=null?sv(n,a,!Ne(e)&&e?e[a]:void 0,l)||Os(r,a,l):Os(r,a,"")}}else if(s){if(e!==t){const a=r[ev];a&&(t+=";"+a),r.cssText=t,i=tv.test(t)}}else e&&n.removeAttribute("style");Ao in n&&(n[Ao]=i?r.display:"",n[_p]&&(r.display="none"))}const kh=/\s*!important$/;function Os(n,e,t){if(ie(t))t.forEach(r=>Os(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=rv(n,e);kh.test(t)?n.setProperty(Gn(r),t.replace(kh,""),"important"):n[r]=t}}const Vh=["Webkit","Moz","ms"],Za={};function rv(n,e){const t=Za[e];if(t)return t;let r=Dt(e);if(r!=="filter"&&r in n)return Za[e]=r;r=gd(r);for(let s=0;s<Vh.length;s++){const i=Vh[s]+r;if(i in n)return Za[e]=i}return e}function sv(n,e,t,r){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Ne(r)&&t===r}const Dh="http://www.w3.org/1999/xlink";function Nh(n,e,t,r,s,i=c_(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Dh,e.slice(6,e.length)):n.setAttributeNS(Dh,e,t):t==null||i&&!_d(t)?n.removeAttribute(e):n.setAttribute(e,i?"":Yt(t)?String(t):t)}function Oh(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?mp(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(l!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=_d(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function Vr(n,e,t,r){n.addEventListener(e,t,r)}function iv(n,e,t,r){n.removeEventListener(e,t,r)}const Mh=Symbol("_vei");function ov(n,e,t,r,s=null){const i=n[Mh]||(n[Mh]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=cv(e);if(r){const h=i[e]=fv(r,s);Vr(n,l,h,c)}else a&&(iv(n,l,a,c),i[e]=void 0)}}const av=/(Once|Passive|Capture)$/,lv=/^on:?(?:Once|Passive|Capture)$/;function cv(n){let e,t;for(;(t=n.match(av))&&!lv.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Gn(n.slice(2)),e]}let el=0;const uv=Promise.resolve(),hv=()=>el||(uv.then(()=>el=0),el=Date.now());function fv(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;const s=t.value;if(ie(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const a=s.slice(),l=[r];for(let c=0;c<a.length&&!r._stopped;c++){const h=a[c];h&&Mt(h,e,5,l)}}else Mt(s,e,5,[r])};return t.value=n,t.attached=hv(),t}const xh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,dv=(n,e,t,r,s,i)=>{const a=s==="svg";e==="class"?Zy(n,r,a):e==="style"?nv(n,t,r):jo(e)?qo(e)||ov(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):pv(n,e,r,a))?(Oh(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Nh(n,e,r,a,i,e!=="value")):n._isVueCE&&(gv(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Ne(r)))?Oh(n,Dt(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),Nh(n,e,r,a))};function pv(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&xh(e)&&ce(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return xh(e)&&Ne(t)?!1:e in n}function gv(n,e){const t=n._def.props;if(!t)return!1;const r=Dt(e);return Array.isArray(t)?t.some(s=>Dt(s)===r):Object.keys(t).some(s=>Dt(s)===r)}const Lh=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ie(e)?t=>so(e,t):e};function mv(n){n.target.composing=!0}function Fh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const tl=Symbol("_assign");function Uh(n,e,t){return e&&(n=n.trim()),t&&(n=nc(n)),n}const $r={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[tl]=Lh(s);const i=r||s.props&&s.props.type==="number";Vr(n,e?"change":"input",a=>{a.target.composing||n[tl](Uh(n.value,t,i))}),(t||i)&&Vr(n,"change",()=>{n.value=Uh(n.value,t,i)}),e||(Vr(n,"compositionstart",mv),Vr(n,"compositionend",Fh),Vr(n,"change",Fh))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},a){if(n[tl]=Lh(a),n.composing)return;const l=(i||n.type==="number")&&!/^0\d/.test(n.value)?nc(n.value):n.value,c=e??"";if(l===c)return;const h=n.getRootNode();(h instanceof Document||h instanceof ShadowRoot)&&h.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===c)||(n.value=c)}},_v=["ctrl","shift","alt","meta"],yv={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>_v.some(t=>n[`${t}Key`]&&!e.includes(t))},yc=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),r=e.join(".");return t[r]||(t[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const l=yv[e[a]];if(l&&l(s,e))return}return n(s,...i)})},vv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Bh=(n,e)=>{const t=n._withKeys||(n._withKeys={}),r=e.join(".");return t[r]||(t[r]=s=>{if(!("key"in s))return;const i=Gn(s.key);if(e.some(a=>a===i||vv[a]===i))return n(s)})},Ev=et({patchProp:dv},Jy);let $h;function Tv(){return $h||($h=ky(Ev))}const wv=(...n)=>{const e=Tv().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=Av(r);if(!s)return;const i=e._component;!ce(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,Iv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function Iv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Av(n){return Ne(n)?document.querySelector(n):n}var jh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},bv=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},vp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,c=s+2<n.length,h=c?n[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let y=(l&15)<<2|h>>6,w=h&63;c||(w=64,a||(y=64)),r.push(t[d],t[p],t[y],t[w])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(yp(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):bv(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new Rv;const y=i<<2|l>>4;if(r.push(y),h!==64){const w=l<<4&240|h>>2;if(r.push(w),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Rv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sv=function(n){const e=yp(n);return vp.encodeByteArray(e,!0)},bo=function(n){return Sv(n).replace(/\./g,"")},Ep=function(n){try{return vp.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Pv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Cv=()=>Pv().__FIREBASE_DEFAULTS__,kv=()=>{if(typeof process>"u"||typeof jh>"u")return;const n=jh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Vv=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ep(n[1]);return e&&JSON.parse(e)},ta=()=>{try{return Cv()||kv()||Vv()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Tp=n=>{var e,t;return(t=(e=ta())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Dv=n=>{const e=Tp(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},wp=()=>{var n;return(n=ta())===null||n===void 0?void 0:n.config},Ip=n=>{var e;return(e=ta())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Ov(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[bo(JSON.stringify(t)),bo(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function xv(){var n;const e=(n=ta())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Lv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Fv(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Uv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Bv(){const n=ht();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function $v(){return!xv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function jv(){try{return typeof indexedDB=="object"}catch{return!1}}function qv(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv="FirebaseError";class bn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Wv,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yi.prototype.create)}}class yi{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Hv(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new bn(s,l,r)}}function Hv(n,e){return n.replace(Kv,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Kv=/\{\$([^}]+)}/g;function zv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ro(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(qh(i)&&qh(a)){if(!Ro(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function qh(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ms(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function xs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Gv(n,e){const t=new Qv(n,e);return t.subscribe.bind(t)}class Qv{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Yv(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=nl),s.error===void 0&&(s.error=nl),s.complete===void 0&&(s.complete=nl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yv(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function nl(){}/**
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
 */function Le(n){return n&&n._delegate?n._delegate:n}class gr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Jv{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Nv;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zv(e))try{this.getOrInitializeService({instanceIdentifier:lr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=lr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=lr){return this.instances.has(e)}getOptions(e=lr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Xv(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=lr){return this.component?this.component.multipleInstances?e:lr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xv(n){return n===lr?void 0:n}function Zv(n){return n.instantiationMode==="EAGER"}/**
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
 */class eE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Jv(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ge||(ge={}));const tE={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},nE=ge.INFO,rE={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},sE=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=rE[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vc{constructor(e){this.name=e,this._logLevel=nE,this._logHandler=sE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const iE=(n,e)=>e.some(t=>n instanceof t);let Wh,Hh;function oE(){return Wh||(Wh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aE(){return Hh||(Hh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ap=new WeakMap,kl=new WeakMap,bp=new WeakMap,rl=new WeakMap,Ec=new WeakMap;function lE(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Fn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Ap.set(t,n)}).catch(()=>{}),Ec.set(e,n),e}function cE(n){if(kl.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});kl.set(n,e)}let Vl={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return kl.get(n);if(e==="objectStoreNames")return n.objectStoreNames||bp.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Fn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function uE(n){Vl=n(Vl)}function hE(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(sl(this),e,...t);return bp.set(r,e.sort?e.sort():[e]),Fn(r)}:aE().includes(n)?function(...e){return n.apply(sl(this),e),Fn(Ap.get(this))}:function(...e){return Fn(n.apply(sl(this),e))}}function fE(n){return typeof n=="function"?hE(n):(n instanceof IDBTransaction&&cE(n),iE(n,oE())?new Proxy(n,Vl):n)}function Fn(n){if(n instanceof IDBRequest)return lE(n);if(rl.has(n))return rl.get(n);const e=fE(n);return e!==n&&(rl.set(n,e),Ec.set(e,n)),e}const sl=n=>Ec.get(n);function dE(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=Fn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Fn(a.result),c.oldVersion,c.newVersion,Fn(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const pE=["get","getKey","getAll","getAllKeys","count"],gE=["put","add","delete","clear"],il=new Map;function Kh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(il.get(e))return il.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=gE.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||pE.includes(t)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),s&&c.done]))[0]};return il.set(e,i),i}uE(n=>({...n,get:(e,t,r)=>Kh(e,t)||n.get(e,t,r),has:(e,t)=>!!Kh(e,t)||n.has(e,t)}));/**
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
 */class mE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(_E(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function _E(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Dl="@firebase/app",zh="0.10.13";/**
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
 */const En=new vc("@firebase/app"),yE="@firebase/app-compat",vE="@firebase/analytics-compat",EE="@firebase/analytics",TE="@firebase/app-check-compat",wE="@firebase/app-check",IE="@firebase/auth",AE="@firebase/auth-compat",bE="@firebase/database",RE="@firebase/data-connect",SE="@firebase/database-compat",PE="@firebase/functions",CE="@firebase/functions-compat",kE="@firebase/installations",VE="@firebase/installations-compat",DE="@firebase/messaging",NE="@firebase/messaging-compat",OE="@firebase/performance",ME="@firebase/performance-compat",xE="@firebase/remote-config",LE="@firebase/remote-config-compat",FE="@firebase/storage",UE="@firebase/storage-compat",BE="@firebase/firestore",$E="@firebase/vertexai-preview",jE="@firebase/firestore-compat",qE="firebase",WE="10.14.1";/**
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
 */const Nl="[DEFAULT]",HE={[Dl]:"fire-core",[yE]:"fire-core-compat",[EE]:"fire-analytics",[vE]:"fire-analytics-compat",[wE]:"fire-app-check",[TE]:"fire-app-check-compat",[IE]:"fire-auth",[AE]:"fire-auth-compat",[bE]:"fire-rtdb",[RE]:"fire-data-connect",[SE]:"fire-rtdb-compat",[PE]:"fire-fn",[CE]:"fire-fn-compat",[kE]:"fire-iid",[VE]:"fire-iid-compat",[DE]:"fire-fcm",[NE]:"fire-fcm-compat",[OE]:"fire-perf",[ME]:"fire-perf-compat",[xE]:"fire-rc",[LE]:"fire-rc-compat",[FE]:"fire-gcs",[UE]:"fire-gcs-compat",[BE]:"fire-fst",[jE]:"fire-fst-compat",[$E]:"fire-vertex","fire-js":"fire-js",[qE]:"fire-js-all"};/**
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
 */const So=new Map,KE=new Map,Ol=new Map;function Gh(n,e){try{n.container.addComponent(e)}catch(t){En.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Qr(n){const e=n.name;if(Ol.has(e))return En.debug(`There were multiple attempts to register component ${e}.`),!1;Ol.set(e,n);for(const t of So.values())Gh(t,n);for(const t of KE.values())Gh(t,n);return!0}function Tc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function fn(n){return n.settings!==void 0}/**
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
 */const zE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Un=new yi("app","Firebase",zE);/**
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
 */class GE{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Un.create("app-deleted",{appName:this._name})}}/**
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
 */const is=WE;function Rp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Nl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Un.create("bad-app-name",{appName:String(s)});if(t||(t=wp()),!t)throw Un.create("no-options");const i=So.get(s);if(i){if(Ro(t,i.options)&&Ro(r,i.config))return i;throw Un.create("duplicate-app",{appName:s})}const a=new eE(s);for(const c of Ol.values())a.addComponent(c);const l=new GE(t,r,a);return So.set(s,l),l}function Sp(n=Nl){const e=So.get(n);if(!e&&n===Nl&&wp())return Rp();if(!e)throw Un.create("no-app",{appName:n});return e}function Bn(n,e,t){var r;let s=(r=HE[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),En.warn(l.join(" "));return}Qr(new gr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const QE="firebase-heartbeat-database",YE=1,si="firebase-heartbeat-store";let ol=null;function Pp(){return ol||(ol=dE(QE,YE,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(si)}catch(t){console.warn(t)}}}}).catch(n=>{throw Un.create("idb-open",{originalErrorMessage:n.message})})),ol}async function JE(n){try{const t=(await Pp()).transaction(si),r=await t.objectStore(si).get(Cp(n));return await t.done,r}catch(e){if(e instanceof bn)En.warn(e.message);else{const t=Un.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});En.warn(t.message)}}}async function Qh(n,e){try{const r=(await Pp()).transaction(si,"readwrite");await r.objectStore(si).put(e,Cp(n)),await r.done}catch(t){if(t instanceof bn)En.warn(t.message);else{const r=Un.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});En.warn(r.message)}}}function Cp(n){return`${n.name}!${n.options.appId}`}/**
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
 */const XE=1024,ZE=30*24*60*60*1e3;class eT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new nT(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Yh();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=ZE}),this._storage.overwrite(this._heartbeatsCache))}catch(r){En.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Yh(),{heartbeatsToSend:r,unsentEntries:s}=tT(this._heartbeatsCache.heartbeats),i=bo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return En.warn(t),""}}}function Yh(){return new Date().toISOString().substring(0,10)}function tT(n,e=XE){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Jh(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Jh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class nT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jv()?qv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await JE(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Jh(n){return bo(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function rT(n){Qr(new gr("platform-logger",e=>new mE(e),"PRIVATE")),Qr(new gr("heartbeat",e=>new eT(e),"PRIVATE")),Bn(Dl,zh,n),Bn(Dl,zh,"esm2017"),Bn("fire-js","")}rT("");var Xh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pr,kp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,m){function v(){}v.prototype=m.prototype,T.D=m.prototype,T.prototype=new v,T.prototype.constructor=T,T.C=function(I,b,R){for(var _=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)_[Y-2]=arguments[Y];return m.prototype[b].apply(I,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,m,v){v||(v=0);var I=Array(16);if(typeof m=="string")for(var b=0;16>b;++b)I[b]=m.charCodeAt(v++)|m.charCodeAt(v++)<<8|m.charCodeAt(v++)<<16|m.charCodeAt(v++)<<24;else for(b=0;16>b;++b)I[b]=m[v++]|m[v++]<<8|m[v++]<<16|m[v++]<<24;m=T.g[0],v=T.g[1],b=T.g[2];var R=T.g[3],_=m+(R^v&(b^R))+I[0]+3614090360&4294967295;m=v+(_<<7&4294967295|_>>>25),_=R+(b^m&(v^b))+I[1]+3905402710&4294967295,R=m+(_<<12&4294967295|_>>>20),_=b+(v^R&(m^v))+I[2]+606105819&4294967295,b=R+(_<<17&4294967295|_>>>15),_=v+(m^b&(R^m))+I[3]+3250441966&4294967295,v=b+(_<<22&4294967295|_>>>10),_=m+(R^v&(b^R))+I[4]+4118548399&4294967295,m=v+(_<<7&4294967295|_>>>25),_=R+(b^m&(v^b))+I[5]+1200080426&4294967295,R=m+(_<<12&4294967295|_>>>20),_=b+(v^R&(m^v))+I[6]+2821735955&4294967295,b=R+(_<<17&4294967295|_>>>15),_=v+(m^b&(R^m))+I[7]+4249261313&4294967295,v=b+(_<<22&4294967295|_>>>10),_=m+(R^v&(b^R))+I[8]+1770035416&4294967295,m=v+(_<<7&4294967295|_>>>25),_=R+(b^m&(v^b))+I[9]+2336552879&4294967295,R=m+(_<<12&4294967295|_>>>20),_=b+(v^R&(m^v))+I[10]+4294925233&4294967295,b=R+(_<<17&4294967295|_>>>15),_=v+(m^b&(R^m))+I[11]+2304563134&4294967295,v=b+(_<<22&4294967295|_>>>10),_=m+(R^v&(b^R))+I[12]+1804603682&4294967295,m=v+(_<<7&4294967295|_>>>25),_=R+(b^m&(v^b))+I[13]+4254626195&4294967295,R=m+(_<<12&4294967295|_>>>20),_=b+(v^R&(m^v))+I[14]+2792965006&4294967295,b=R+(_<<17&4294967295|_>>>15),_=v+(m^b&(R^m))+I[15]+1236535329&4294967295,v=b+(_<<22&4294967295|_>>>10),_=m+(b^R&(v^b))+I[1]+4129170786&4294967295,m=v+(_<<5&4294967295|_>>>27),_=R+(v^b&(m^v))+I[6]+3225465664&4294967295,R=m+(_<<9&4294967295|_>>>23),_=b+(m^v&(R^m))+I[11]+643717713&4294967295,b=R+(_<<14&4294967295|_>>>18),_=v+(R^m&(b^R))+I[0]+3921069994&4294967295,v=b+(_<<20&4294967295|_>>>12),_=m+(b^R&(v^b))+I[5]+3593408605&4294967295,m=v+(_<<5&4294967295|_>>>27),_=R+(v^b&(m^v))+I[10]+38016083&4294967295,R=m+(_<<9&4294967295|_>>>23),_=b+(m^v&(R^m))+I[15]+3634488961&4294967295,b=R+(_<<14&4294967295|_>>>18),_=v+(R^m&(b^R))+I[4]+3889429448&4294967295,v=b+(_<<20&4294967295|_>>>12),_=m+(b^R&(v^b))+I[9]+568446438&4294967295,m=v+(_<<5&4294967295|_>>>27),_=R+(v^b&(m^v))+I[14]+3275163606&4294967295,R=m+(_<<9&4294967295|_>>>23),_=b+(m^v&(R^m))+I[3]+4107603335&4294967295,b=R+(_<<14&4294967295|_>>>18),_=v+(R^m&(b^R))+I[8]+1163531501&4294967295,v=b+(_<<20&4294967295|_>>>12),_=m+(b^R&(v^b))+I[13]+2850285829&4294967295,m=v+(_<<5&4294967295|_>>>27),_=R+(v^b&(m^v))+I[2]+4243563512&4294967295,R=m+(_<<9&4294967295|_>>>23),_=b+(m^v&(R^m))+I[7]+1735328473&4294967295,b=R+(_<<14&4294967295|_>>>18),_=v+(R^m&(b^R))+I[12]+2368359562&4294967295,v=b+(_<<20&4294967295|_>>>12),_=m+(v^b^R)+I[5]+4294588738&4294967295,m=v+(_<<4&4294967295|_>>>28),_=R+(m^v^b)+I[8]+2272392833&4294967295,R=m+(_<<11&4294967295|_>>>21),_=b+(R^m^v)+I[11]+1839030562&4294967295,b=R+(_<<16&4294967295|_>>>16),_=v+(b^R^m)+I[14]+4259657740&4294967295,v=b+(_<<23&4294967295|_>>>9),_=m+(v^b^R)+I[1]+2763975236&4294967295,m=v+(_<<4&4294967295|_>>>28),_=R+(m^v^b)+I[4]+1272893353&4294967295,R=m+(_<<11&4294967295|_>>>21),_=b+(R^m^v)+I[7]+4139469664&4294967295,b=R+(_<<16&4294967295|_>>>16),_=v+(b^R^m)+I[10]+3200236656&4294967295,v=b+(_<<23&4294967295|_>>>9),_=m+(v^b^R)+I[13]+681279174&4294967295,m=v+(_<<4&4294967295|_>>>28),_=R+(m^v^b)+I[0]+3936430074&4294967295,R=m+(_<<11&4294967295|_>>>21),_=b+(R^m^v)+I[3]+3572445317&4294967295,b=R+(_<<16&4294967295|_>>>16),_=v+(b^R^m)+I[6]+76029189&4294967295,v=b+(_<<23&4294967295|_>>>9),_=m+(v^b^R)+I[9]+3654602809&4294967295,m=v+(_<<4&4294967295|_>>>28),_=R+(m^v^b)+I[12]+3873151461&4294967295,R=m+(_<<11&4294967295|_>>>21),_=b+(R^m^v)+I[15]+530742520&4294967295,b=R+(_<<16&4294967295|_>>>16),_=v+(b^R^m)+I[2]+3299628645&4294967295,v=b+(_<<23&4294967295|_>>>9),_=m+(b^(v|~R))+I[0]+4096336452&4294967295,m=v+(_<<6&4294967295|_>>>26),_=R+(v^(m|~b))+I[7]+1126891415&4294967295,R=m+(_<<10&4294967295|_>>>22),_=b+(m^(R|~v))+I[14]+2878612391&4294967295,b=R+(_<<15&4294967295|_>>>17),_=v+(R^(b|~m))+I[5]+4237533241&4294967295,v=b+(_<<21&4294967295|_>>>11),_=m+(b^(v|~R))+I[12]+1700485571&4294967295,m=v+(_<<6&4294967295|_>>>26),_=R+(v^(m|~b))+I[3]+2399980690&4294967295,R=m+(_<<10&4294967295|_>>>22),_=b+(m^(R|~v))+I[10]+4293915773&4294967295,b=R+(_<<15&4294967295|_>>>17),_=v+(R^(b|~m))+I[1]+2240044497&4294967295,v=b+(_<<21&4294967295|_>>>11),_=m+(b^(v|~R))+I[8]+1873313359&4294967295,m=v+(_<<6&4294967295|_>>>26),_=R+(v^(m|~b))+I[15]+4264355552&4294967295,R=m+(_<<10&4294967295|_>>>22),_=b+(m^(R|~v))+I[6]+2734768916&4294967295,b=R+(_<<15&4294967295|_>>>17),_=v+(R^(b|~m))+I[13]+1309151649&4294967295,v=b+(_<<21&4294967295|_>>>11),_=m+(b^(v|~R))+I[4]+4149444226&4294967295,m=v+(_<<6&4294967295|_>>>26),_=R+(v^(m|~b))+I[11]+3174756917&4294967295,R=m+(_<<10&4294967295|_>>>22),_=b+(m^(R|~v))+I[2]+718787259&4294967295,b=R+(_<<15&4294967295|_>>>17),_=v+(R^(b|~m))+I[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(b+(_<<21&4294967295|_>>>11))&4294967295,T.g[2]=T.g[2]+b&4294967295,T.g[3]=T.g[3]+R&4294967295}r.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var v=m-this.blockSize,I=this.B,b=this.h,R=0;R<m;){if(b==0)for(;R<=v;)s(this,T,R),R+=this.blockSize;if(typeof T=="string"){for(;R<m;)if(I[b++]=T.charCodeAt(R++),b==this.blockSize){s(this,I),b=0;break}}else for(;R<m;)if(I[b++]=T[R++],b==this.blockSize){s(this,I),b=0;break}}this.h=b,this.o+=m},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var v=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=v&255,v/=256;for(this.u(T),T=Array(16),m=v=0;4>m;++m)for(var I=0;32>I;I+=8)T[v++]=this.g[m]>>>I&255;return T};function i(T,m){var v=l;return Object.prototype.hasOwnProperty.call(v,T)?v[T]:v[T]=m(T)}function a(T,m){this.h=m;for(var v=[],I=!0,b=T.length-1;0<=b;b--){var R=T[b]|0;I&&R==m||(v[b]=R,I=!1)}this.g=v}var l={};function c(T){return-128<=T&&128>T?i(T,function(m){return new a([m|0],0>m?-1:0)}):new a([T|0],0>T?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return p;if(0>T)return k(h(-T));for(var m=[],v=1,I=0;T>=v;I++)m[I]=T/v|0,v*=4294967296;return new a(m,0)}function d(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return k(d(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(m,8)),I=p,b=0;b<T.length;b+=8){var R=Math.min(8,T.length-b),_=parseInt(T.substring(b,b+R),m);8>R?(R=h(Math.pow(m,R)),I=I.j(R).add(h(_))):(I=I.j(v),I=I.add(h(_)))}return I}var p=c(0),y=c(1),w=c(16777216);n=a.prototype,n.m=function(){if(P(this))return-k(this).m();for(var T=0,m=1,v=0;v<this.g.length;v++){var I=this.i(v);T+=(0<=I?I:4294967296+I)*m,m*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(C(this))return"0";if(P(this))return"-"+k(this).toString(T);for(var m=h(Math.pow(T,6)),v=this,I="";;){var b=z(v,m).g;v=O(v,b.j(m));var R=((0<v.g.length?v.g[0]:v.h)>>>0).toString(T);if(v=b,C(v))return R+I;for(;6>R.length;)R="0"+R;I=R+I}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function C(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function P(T){return T.h==-1}n.l=function(T){return T=O(this,T),P(T)?-1:C(T)?0:1};function k(T){for(var m=T.g.length,v=[],I=0;I<m;I++)v[I]=~T.g[I];return new a(v,~T.h).add(y)}n.abs=function(){return P(this)?k(this):this},n.add=function(T){for(var m=Math.max(this.g.length,T.g.length),v=[],I=0,b=0;b<=m;b++){var R=I+(this.i(b)&65535)+(T.i(b)&65535),_=(R>>>16)+(this.i(b)>>>16)+(T.i(b)>>>16);I=_>>>16,R&=65535,_&=65535,v[b]=_<<16|R}return new a(v,v[v.length-1]&-2147483648?-1:0)};function O(T,m){return T.add(k(m))}n.j=function(T){if(C(this)||C(T))return p;if(P(this))return P(T)?k(this).j(k(T)):k(k(this).j(T));if(P(T))return k(this.j(k(T)));if(0>this.l(w)&&0>T.l(w))return h(this.m()*T.m());for(var m=this.g.length+T.g.length,v=[],I=0;I<2*m;I++)v[I]=0;for(I=0;I<this.g.length;I++)for(var b=0;b<T.g.length;b++){var R=this.i(I)>>>16,_=this.i(I)&65535,Y=T.i(b)>>>16,ue=T.i(b)&65535;v[2*I+2*b]+=_*ue,B(v,2*I+2*b),v[2*I+2*b+1]+=R*ue,B(v,2*I+2*b+1),v[2*I+2*b+1]+=_*Y,B(v,2*I+2*b+1),v[2*I+2*b+2]+=R*Y,B(v,2*I+2*b+2)}for(I=0;I<m;I++)v[I]=v[2*I+1]<<16|v[2*I];for(I=m;I<2*m;I++)v[I]=0;return new a(v,0)};function B(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function Q(T,m){this.g=T,this.h=m}function z(T,m){if(C(m))throw Error("division by zero");if(C(T))return new Q(p,p);if(P(T))return m=z(k(T),m),new Q(k(m.g),k(m.h));if(P(m))return m=z(T,k(m)),new Q(k(m.g),m.h);if(30<T.g.length){if(P(T)||P(m))throw Error("slowDivide_ only works with positive integers.");for(var v=y,I=m;0>=I.l(T);)v=fe(v),I=fe(I);var b=he(v,1),R=he(I,1);for(I=he(I,2),v=he(v,2);!C(I);){var _=R.add(I);0>=_.l(T)&&(b=b.add(v),R=_),I=he(I,1),v=he(v,1)}return m=O(T,b.j(m)),new Q(b,m)}for(b=p;0<=T.l(m);){for(v=Math.max(1,Math.floor(T.m()/m.m())),I=Math.ceil(Math.log(v)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),R=h(v),_=R.j(m);P(_)||0<_.l(T);)v-=I,R=h(v),_=R.j(m);C(R)&&(R=y),b=b.add(R),T=O(T,_)}return new Q(b,T)}n.A=function(T){return z(this,T).h},n.and=function(T){for(var m=Math.max(this.g.length,T.g.length),v=[],I=0;I<m;I++)v[I]=this.i(I)&T.i(I);return new a(v,this.h&T.h)},n.or=function(T){for(var m=Math.max(this.g.length,T.g.length),v=[],I=0;I<m;I++)v[I]=this.i(I)|T.i(I);return new a(v,this.h|T.h)},n.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),v=[],I=0;I<m;I++)v[I]=this.i(I)^T.i(I);return new a(v,this.h^T.h)};function fe(T){for(var m=T.g.length+1,v=[],I=0;I<m;I++)v[I]=T.i(I)<<1|T.i(I-1)>>>31;return new a(v,T.h)}function he(T,m){var v=m>>5;m%=32;for(var I=T.g.length-v,b=[],R=0;R<I;R++)b[R]=0<m?T.i(R+v)>>>m|T.i(R+v+1)<<32-m:T.i(R+v);return new a(b,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,kp=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,pr=a}).apply(typeof Xh<"u"?Xh:typeof self<"u"?self:typeof window<"u"?window:{});var Xi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vp,Ls,Dp,ao,Ml,Np,Op,Mp;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xi=="object"&&Xi];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var S=o[g];if(!(S in f))break e;f=f[S]}o=o[o.length-1],g=f[o],u=u(g),u!=g&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,g=!1,S={next:function(){if(!g&&f<o.length){var V=f++;return{value:u(V,o[V]),done:!1}}return g=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function p(o,u,f){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,g),o.apply(u,S)}}return function(){return o.apply(u,arguments)}}function y(o,u,f){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,y.apply(null,arguments)}function w(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function C(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(g,S,V){for(var W=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)W[Se-2]=arguments[Se];return u.prototype[S].apply(g,W)}}function P(o){const u=o.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=o[g];return f}return[]}function k(o,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const S=o.length||0,V=g.length||0;o.length=S+V;for(let W=0;W<V;W++)o[S+W]=g[W]}else o.push(g)}}class O{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(o){return/^[\s\xa0]*$/.test(o)}function Q(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function z(o){return z[" "](o),o}z[" "]=function(){};var fe=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function he(o,u,f){for(const g in o)u.call(f,o[g],g,o)}function T(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function m(o){const u={};for(const f in o)u[f]=o[f];return u}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(o,u){let f,g;for(let S=1;S<arguments.length;S++){g=arguments[S];for(f in g)o[f]=g[f];for(let V=0;V<v.length;V++)f=v[V],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function b(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function R(o){l.setTimeout(()=>{throw o},0)}function _(){var o=kt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class Y{constructor(){this.h=this.g=null}add(u,f){const g=ue.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var ue=new O(()=>new je,o=>o.reset());class je{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Ae,ye=!1,kt=new Y,Jn=()=>{const o=l.Promise.resolve(void 0);Ae=()=>{o.then(tn)}};var tn=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(f){R(f)}var u=ue;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}ye=!1};function qe(){this.s=this.s,this.C=this.C}qe.prototype.s=!1,qe.prototype.ma=function(){this.s||(this.s=!0,this.N())},qe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function We(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}We.prototype.h=function(){this.defaultPrevented=!0};var Sa=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return o}();function Xn(o,u){if(We.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(fe){e:{try{z(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Zn[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Xn.aa.h.call(this)}}C(Xn,We);var Zn={2:"touch",3:"pen",4:"mouse"};Xn.prototype.h=function(){Xn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var nn="closure_listenable_"+(1e6*Math.random()|0),hs=0;function Vi(o,u,f,g,S){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=S,this.key=++hs,this.da=this.fa=!1}function Ft(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function fs(o){this.src=o,this.g={},this.h=0}fs.prototype.add=function(o,u,f,g,S){var V=o.toString();o=this.g[V],o||(o=this.g[V]=[],this.h++);var W=A(o,u,g,S);return-1<W?(u=o[W],f||(u.fa=!1)):(u=new Vi(u,this.src,V,!!g,S),u.fa=f,o.push(u)),u};function E(o,u){var f=u.type;if(f in o.g){var g=o.g[f],S=Array.prototype.indexOf.call(g,u,void 0),V;(V=0<=S)&&Array.prototype.splice.call(g,S,1),V&&(Ft(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function A(o,u,f,g){for(var S=0;S<o.length;++S){var V=o[S];if(!V.da&&V.listener==u&&V.capture==!!f&&V.ha==g)return S}return-1}var D="closure_lm_"+(1e6*Math.random()|0),F={};function L(o,u,f,g,S){if(Array.isArray(u)){for(var V=0;V<u.length;V++)L(o,u[V],f,g,S);return null}return f=ne(f),o&&o[nn]?o.K(u,f,h(g)?!!g.capture:!1,S):M(o,u,f,!1,g,S)}function M(o,u,f,g,S,V){if(!u)throw Error("Invalid event type");var W=h(S)?!!S.capture:!!S,Se=G(o);if(Se||(o[D]=Se=new fs(o)),f=Se.add(u,f,g,W,V),f.proxy)return f;if(g=K(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)Sa||(S=W),S===void 0&&(S=!1),o.addEventListener(u.toString(),g,S);else if(o.attachEvent)o.attachEvent(x(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function K(){function o(f){return u.call(o.src,o.listener,f)}const u=ee;return o}function q(o,u,f,g,S){if(Array.isArray(u))for(var V=0;V<u.length;V++)q(o,u[V],f,g,S);else g=h(g)?!!g.capture:!!g,f=ne(f),o&&o[nn]?(o=o.i,u=String(u).toString(),u in o.g&&(V=o.g[u],f=A(V,f,g,S),-1<f&&(Ft(V[f]),Array.prototype.splice.call(V,f,1),V.length==0&&(delete o.g[u],o.h--)))):o&&(o=G(o))&&(u=o.g[u.toString()],o=-1,u&&(o=A(u,f,g,S)),(f=-1<o?u[o]:null)&&$(f))}function $(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[nn])E(u.i,o);else{var f=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(f,g,o.capture):u.detachEvent?u.detachEvent(x(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=G(u))?(E(f,o),f.h==0&&(f.src=null,u[D]=null)):Ft(o)}}}function x(o){return o in F?F[o]:F[o]="on"+o}function ee(o,u){if(o.da)o=!0;else{u=new Xn(u,this);var f=o.listener,g=o.ha||o.src;o.fa&&$(o),o=f.call(g,u)}return o}function G(o){return o=o[D],o instanceof fs?o:null}var X="__closure_events_fn_"+(1e9*Math.random()>>>0);function ne(o){return typeof o=="function"?o:(o[X]||(o[X]=function(u){return o.handleEvent(u)}),o[X])}function te(){qe.call(this),this.i=new fs(this),this.M=this,this.F=null}C(te,qe),te.prototype[nn]=!0,te.prototype.removeEventListener=function(o,u,f,g){q(this,o,u,f,g)};function le(o,u){var f,g=o.F;if(g)for(f=[];g;g=g.F)f.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new We(u,o);else if(u instanceof We)u.target=u.target||o;else{var S=u;u=new We(g,o),I(u,S)}if(S=!0,f)for(var V=f.length-1;0<=V;V--){var W=u.g=f[V];S=_e(W,g,!0,u)&&S}if(W=u.g=o,S=_e(W,g,!0,u)&&S,S=_e(W,g,!1,u)&&S,f)for(V=0;V<f.length;V++)W=u.g=f[V],S=_e(W,g,!1,u)&&S}te.prototype.N=function(){if(te.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],g=0;g<f.length;g++)Ft(f[g]);delete o.g[u],o.h--}}this.F=null},te.prototype.K=function(o,u,f,g){return this.i.add(String(o),u,!1,f,g)},te.prototype.L=function(o,u,f,g){return this.i.add(String(o),u,!0,f,g)};function _e(o,u,f,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,V=0;V<u.length;++V){var W=u[V];if(W&&!W.da&&W.capture==f){var Se=W.listener,Qe=W.ha||W.src;W.fa&&E(o.i,W),S=Se.call(Qe,g)!==!1&&S}}return S&&!g.defaultPrevented}function De(o,u,f){if(typeof o=="function")f&&(o=y(o,f));else if(o&&typeof o.handleEvent=="function")o=y(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function Fe(o){o.g=De(()=>{o.g=null,o.i&&(o.i=!1,Fe(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class bt extends qe{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Fe(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function nt(o){qe.call(this),this.h=o,this.g={}}C(nt,qe);var Rn=[];function ds(o){he(o.g,function(u,f){this.g.hasOwnProperty(f)&&$(u)},o),o.g={}}nt.prototype.N=function(){nt.aa.N.call(this),ds(this)},nt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ge=l.JSON.stringify,Rt=l.JSON.parse,Di=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Ar(){}Ar.prototype.h=null;function _u(o){return o.h||(o.h=o.i())}function yu(){}var ps={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Pa(){We.call(this,"d")}C(Pa,We);function Ca(){We.call(this,"c")}C(Ca,We);var er={},vu=null;function Ni(){return vu=vu||new te}er.La="serverreachability";function Eu(o){We.call(this,er.La,o)}C(Eu,We);function gs(o){const u=Ni();le(u,new Eu(u))}er.STAT_EVENT="statevent";function Tu(o,u){We.call(this,er.STAT_EVENT,o),this.stat=u}C(Tu,We);function ft(o){const u=Ni();le(u,new Tu(u,o))}er.Ma="timingevent";function wu(o,u){We.call(this,er.Ma,o),this.size=u}C(wu,We);function ms(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function _s(){this.g=!0}_s.prototype.xa=function(){this.g=!1};function Vm(o,u,f,g,S,V){o.info(function(){if(o.g)if(V)for(var W="",Se=V.split("&"),Qe=0;Qe<Se.length;Qe++){var ve=Se[Qe].split("=");if(1<ve.length){var rt=ve[0];ve=ve[1];var st=rt.split("_");W=2<=st.length&&st[1]=="type"?W+(rt+"="+ve+"&"):W+(rt+"=redacted&")}}else W=null;else W=V;return"XMLHTTP REQ ("+g+") [attempt "+S+"]: "+u+`
`+f+`
`+W})}function Dm(o,u,f,g,S,V,W){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+S+"]: "+u+`
`+f+`
`+V+" "+W})}function br(o,u,f,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Om(o,f)+(g?" "+g:"")})}function Nm(o,u){o.info(function(){return"TIMEOUT: "+u})}_s.prototype.info=function(){};function Om(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var g=f[o];if(!(2>g.length)){var S=g[1];if(Array.isArray(S)&&!(1>S.length)){var V=S[0];if(V!="noop"&&V!="stop"&&V!="close")for(var W=1;W<S.length;W++)S[W]=""}}}}return Ge(f)}catch{return u}}var Oi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Iu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ka;function Mi(){}C(Mi,Ar),Mi.prototype.g=function(){return new XMLHttpRequest},Mi.prototype.i=function(){return{}},ka=new Mi;function Sn(o,u,f,g){this.j=o,this.i=u,this.l=f,this.R=g||1,this.U=new nt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Au}function Au(){this.i=null,this.g="",this.h=!1}var bu={},Va={};function Da(o,u,f){o.L=1,o.v=Ui(rn(u)),o.m=f,o.P=!0,Ru(o,null)}function Ru(o,u){o.F=Date.now(),xi(o),o.A=rn(o.v);var f=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),Bu(f.i,"t",g),o.C=0,f=o.j.J,o.h=new Au,o.g=sh(o.j,f?u:null,!o.m),0<o.O&&(o.M=new bt(y(o.Y,o,o.g),o.O)),u=o.U,f=o.g,g=o.ca;var S="readystatechange";Array.isArray(S)||(S&&(Rn[0]=S.toString()),S=Rn);for(var V=0;V<S.length;V++){var W=L(f,S[V],g||u.handleEvent,!1,u.h||u);if(!W)break;u.g[W.key]=W}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),gs(),Vm(o.i,o.u,o.A,o.l,o.R,o.m)}Sn.prototype.ca=function(o){o=o.target;const u=this.M;u&&sn(o)==3?u.j():this.Y(o)},Sn.prototype.Y=function(o){try{if(o==this.g)e:{const st=sn(this.g);var u=this.g.Ba();const Pr=this.g.Z();if(!(3>st)&&(st!=3||this.g&&(this.h.h||this.g.oa()||zu(this.g)))){this.J||st!=4||u==7||(u==8||0>=Pr?gs(3):gs(2)),Na(this);var f=this.g.Z();this.X=f;t:if(Su(this)){var g=zu(this.g);o="";var S=g.length,V=sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){tr(this),ys(this);var W="";break t}this.h.i=new l.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(V&&u==S-1)});g.length=0,this.h.g+=o,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=f==200,Dm(this.i,this.u,this.A,this.l,this.R,st,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Se,Qe=this.g;if((Se=Qe.g?Qe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(Se)){var ve=Se;break t}}ve=null}if(f=ve)br(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Oa(this,f);else{this.o=!1,this.s=3,ft(12),tr(this),ys(this);break e}}if(this.P){f=!0;let Vt;for(;!this.J&&this.C<W.length;)if(Vt=Mm(this,W),Vt==Va){st==4&&(this.s=4,ft(14),f=!1),br(this.i,this.l,null,"[Incomplete Response]");break}else if(Vt==bu){this.s=4,ft(15),br(this.i,this.l,W,"[Invalid Chunk]"),f=!1;break}else br(this.i,this.l,Vt,null),Oa(this,Vt);if(Su(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),st!=4||W.length!=0||this.h.h||(this.s=1,ft(16),f=!1),this.o=this.o&&f,!f)br(this.i,this.l,W,"[Invalid Chunked Response]"),tr(this),ys(this);else if(0<W.length&&!this.W){this.W=!0;var rt=this.j;rt.g==this&&rt.ba&&!rt.M&&(rt.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),Ba(rt),rt.M=!0,ft(11))}}else br(this.i,this.l,W,null),Oa(this,W);st==4&&tr(this),this.o&&!this.J&&(st==4?eh(this.j,this):(this.o=!1,xi(this)))}else Xm(this.g),f==400&&0<W.indexOf("Unknown SID")?(this.s=3,ft(12)):(this.s=0,ft(13)),tr(this),ys(this)}}}catch{}finally{}};function Su(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Mm(o,u){var f=o.C,g=u.indexOf(`
`,f);return g==-1?Va:(f=Number(u.substring(f,g)),isNaN(f)?bu:(g+=1,g+f>u.length?Va:(u=u.slice(g,g+f),o.C=g+f,u)))}Sn.prototype.cancel=function(){this.J=!0,tr(this)};function xi(o){o.S=Date.now()+o.I,Pu(o,o.I)}function Pu(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=ms(y(o.ba,o),u)}function Na(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Sn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Nm(this.i,this.A),this.L!=2&&(gs(),ft(17)),tr(this),this.s=2,ys(this)):Pu(this,this.S-o)};function ys(o){o.j.G==0||o.J||eh(o.j,o)}function tr(o){Na(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,ds(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Oa(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||Ma(f.h,o))){if(!o.K&&Ma(f.h,o)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var S=g;if(S[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Hi(f),qi(f);else break e;Ua(f),ft(18)}}else f.za=S[1],0<f.za-f.T&&37500>S[2]&&f.F&&f.v==0&&!f.C&&(f.C=ms(y(f.Za,f),6e3));if(1>=Vu(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else rr(f,11)}else if((o.K||f.g==o)&&Hi(f),!B(u))for(S=f.Da.g.parse(u),u=0;u<S.length;u++){let ve=S[u];if(f.T=ve[0],ve=ve[1],f.G==2)if(ve[0]=="c"){f.K=ve[1],f.ia=ve[2];const rt=ve[3];rt!=null&&(f.la=rt,f.j.info("VER="+f.la));const st=ve[4];st!=null&&(f.Aa=st,f.j.info("SVER="+f.Aa));const Pr=ve[5];Pr!=null&&typeof Pr=="number"&&0<Pr&&(g=1.5*Pr,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Vt=o.g;if(Vt){const zi=Vt.g?Vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zi){var V=g.h;V.g||zi.indexOf("spdy")==-1&&zi.indexOf("quic")==-1&&zi.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(xa(V,V.h),V.h=null))}if(g.D){const $a=Vt.g?Vt.g.getResponseHeader("X-HTTP-Session-Id"):null;$a&&(g.ya=$a,Ve(g.I,g.D,$a))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var W=o;if(g.qa=rh(g,g.J?g.ia:null,g.W),W.K){Du(g.h,W);var Se=W,Qe=g.L;Qe&&(Se.I=Qe),Se.B&&(Na(Se),xi(Se)),g.g=W}else Xu(g);0<f.i.length&&Wi(f)}else ve[0]!="stop"&&ve[0]!="close"||rr(f,7);else f.G==3&&(ve[0]=="stop"||ve[0]=="close"?ve[0]=="stop"?rr(f,7):Fa(f):ve[0]!="noop"&&f.l&&f.l.ta(ve),f.v=0)}}gs(4)}catch{}}var xm=class{constructor(o,u){this.g=o,this.map=u}};function Cu(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ku(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Vu(o){return o.h?1:o.g?o.g.size:0}function Ma(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function xa(o,u){o.g?o.g.add(u):o.h=u}function Du(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Cu.prototype.cancel=function(){if(this.i=Nu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Nu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return P(o.i)}function Lm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],f=o.length,g=0;g<f;g++)u.push(o[g]);return u}u=[],f=0;for(g in o)u[f++]=o[g];return u}function Fm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const g in o)u[f++]=g;return u}}}function Ou(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=Fm(o),g=Lm(o),S=g.length,V=0;V<S;V++)u.call(void 0,g[V],f&&f[V],o)}var Mu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Um(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var g=o[f].indexOf("="),S=null;if(0<=g){var V=o[f].substring(0,g);S=o[f].substring(g+1)}else V=o[f];u(V,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function nr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof nr){this.h=o.h,Li(this,o.j),this.o=o.o,this.g=o.g,Fi(this,o.s),this.l=o.l;var u=o.i,f=new Ts;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),xu(this,f),this.m=o.m}else o&&(u=String(o).match(Mu))?(this.h=!1,Li(this,u[1]||"",!0),this.o=vs(u[2]||""),this.g=vs(u[3]||"",!0),Fi(this,u[4]),this.l=vs(u[5]||"",!0),xu(this,u[6]||"",!0),this.m=vs(u[7]||"")):(this.h=!1,this.i=new Ts(null,this.h))}nr.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Es(u,Lu,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Es(u,Lu,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Es(f,f.charAt(0)=="/"?jm:$m,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Es(f,Wm)),o.join("")};function rn(o){return new nr(o)}function Li(o,u,f){o.j=f?vs(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Fi(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function xu(o,u,f){u instanceof Ts?(o.i=u,Hm(o.i,o.h)):(f||(u=Es(u,qm)),o.i=new Ts(u,o.h))}function Ve(o,u,f){o.i.set(u,f)}function Ui(o){return Ve(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function vs(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Es(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,Bm),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Bm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Lu=/[#\/\?@]/g,$m=/[#\?:]/g,jm=/[#\?]/g,qm=/[#\?@]/g,Wm=/#/g;function Ts(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Pn(o){o.g||(o.g=new Map,o.h=0,o.i&&Um(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}n=Ts.prototype,n.add=function(o,u){Pn(this),this.i=null,o=Rr(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function Fu(o,u){Pn(o),u=Rr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Uu(o,u){return Pn(o),u=Rr(o,u),o.g.has(u)}n.forEach=function(o,u){Pn(this),this.g.forEach(function(f,g){f.forEach(function(S){o.call(u,S,g,this)},this)},this)},n.na=function(){Pn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const S=o[g];for(let V=0;V<S.length;V++)f.push(u[g])}return f},n.V=function(o){Pn(this);let u=[];if(typeof o=="string")Uu(this,o)&&(u=u.concat(this.g.get(Rr(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},n.set=function(o,u){return Pn(this),this.i=null,o=Rr(this,o),Uu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Bu(o,u,f){Fu(o,u),0<f.length&&(o.i=null,o.g.set(Rr(o,u),P(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const V=encodeURIComponent(String(g)),W=this.V(g);for(g=0;g<W.length;g++){var S=V;W[g]!==""&&(S+="="+encodeURIComponent(String(W[g]))),o.push(S)}}return this.i=o.join("&")};function Rr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Hm(o,u){u&&!o.j&&(Pn(o),o.i=null,o.g.forEach(function(f,g){var S=g.toLowerCase();g!=S&&(Fu(this,g),Bu(this,S,f))},o)),o.j=u}function Km(o,u){const f=new _s;if(l.Image){const g=new Image;g.onload=w(Cn,f,"TestLoadImage: loaded",!0,u,g),g.onerror=w(Cn,f,"TestLoadImage: error",!1,u,g),g.onabort=w(Cn,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=w(Cn,f,"TestLoadImage: timeout",!1,u,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function zm(o,u){const f=new _s,g=new AbortController,S=setTimeout(()=>{g.abort(),Cn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(V=>{clearTimeout(S),V.ok?Cn(f,"TestPingServer: ok",!0,u):Cn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),Cn(f,"TestPingServer: error",!1,u)})}function Cn(o,u,f,g,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),g(f)}catch{}}function Gm(){this.g=new Di}function Qm(o,u,f){const g=f||"";try{Ou(o,function(S,V){let W=S;h(S)&&(W=Ge(S)),u.push(g+V+"="+encodeURIComponent(W))})}catch(S){throw u.push(g+"type="+encodeURIComponent("_badmap")),S}}function Bi(o){this.l=o.Ub||null,this.j=o.eb||!1}C(Bi,Ar),Bi.prototype.g=function(){return new $i(this.l,this.j)},Bi.prototype.i=function(o){return function(){return o}}({});function $i(o,u){te.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C($i,te),n=$i.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Is(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ws(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Is(this)),this.g&&(this.readyState=3,Is(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;$u(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function $u(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?ws(this):Is(this),this.readyState==3&&$u(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,ws(this))},n.Qa=function(o){this.g&&(this.response=o,ws(this))},n.ga=function(){this.g&&ws(this)};function ws(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Is(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function Is(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty($i.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ju(o){let u="";return he(o,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function La(o,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=ju(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Ve(o,u,f))}function Me(o){te.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Me,te);var Ym=/^https?$/i,Jm=["POST","PUT"];n=Me.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ka.g(),this.v=this.o?_u(this.o):_u(ka),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(V){qu(this,V);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var S in g)f.set(S,g[S]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())f.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(V=>V.toLowerCase()=="content-type"),S=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Jm,u,void 0))||g||S||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,W]of f)this.g.setRequestHeader(V,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ku(this),this.u=!0,this.g.send(o),this.u=!1}catch(V){qu(this,V)}};function qu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Wu(o),ji(o)}function Wu(o){o.A||(o.A=!0,le(o,"complete"),le(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,le(this,"complete"),le(this,"abort"),ji(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ji(this,!0)),Me.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Hu(this):this.bb())},n.bb=function(){Hu(this)};function Hu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||sn(o)!=4||o.Z()!=2)){if(o.u&&sn(o)==4)De(o.Ea,0,o);else if(le(o,"readystatechange"),sn(o)==4){o.h=!1;try{const W=o.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=W===0){var S=String(o.D).match(Mu)[1]||null;!S&&l.self&&l.self.location&&(S=l.self.location.protocol.slice(0,-1)),g=!Ym.test(S?S.toLowerCase():"")}f=g}if(f)le(o,"complete"),le(o,"success");else{o.m=6;try{var V=2<sn(o)?o.g.statusText:""}catch{V=""}o.l=V+" ["+o.Z()+"]",Wu(o)}}finally{ji(o)}}}}function ji(o,u){if(o.g){Ku(o);const f=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||le(o,"ready");try{f.onreadystatechange=g}catch{}}}function Ku(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function sn(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<sn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Rt(u)}};function zu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Xm(o){const u={};o=(o.g&&2<=sn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(B(o[g]))continue;var f=b(o[g]);const S=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const V=u[S]||[];u[S]=V,V.push(f)}T(u,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function As(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function Gu(o){this.Aa=0,this.i=[],this.j=new _s,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=As("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=As("baseRetryDelayMs",5e3,o),this.cb=As("retryDelaySeedMs",1e4,o),this.Wa=As("forwardChannelMaxRetries",2,o),this.wa=As("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Cu(o&&o.concurrentRequestLimit),this.Da=new Gm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Gu.prototype,n.la=8,n.G=1,n.connect=function(o,u,f,g){ft(0),this.W=o,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=rh(this,null,this.W),Wi(this)};function Fa(o){if(Qu(o),o.G==3){var u=o.U++,f=rn(o.I);if(Ve(f,"SID",o.K),Ve(f,"RID",u),Ve(f,"TYPE","terminate"),bs(o,f),u=new Sn(o,o.j,u),u.L=2,u.v=Ui(rn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=sh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),xi(u)}nh(o)}function qi(o){o.g&&(Ba(o),o.g.cancel(),o.g=null)}function Qu(o){qi(o),o.u&&(l.clearTimeout(o.u),o.u=null),Hi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Wi(o){if(!ku(o.h)&&!o.s){o.s=!0;var u=o.Ga;Ae||Jn(),ye||(Ae(),ye=!0),kt.add(u,o),o.B=0}}function Zm(o,u){return Vu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=ms(y(o.Ga,o,u),th(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const S=new Sn(this,this.j,o);let V=this.o;if(this.S&&(V?(V=m(V),I(V,this.S)):V=this.S),this.m!==null||this.O||(S.H=V,V=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Ju(this,S,u),f=rn(this.I),Ve(f,"RID",o),Ve(f,"CVER",22),this.D&&Ve(f,"X-HTTP-Session-Id",this.D),bs(this,f),V&&(this.O?u="headers="+encodeURIComponent(String(ju(V)))+"&"+u:this.m&&La(f,this.m,V)),xa(this.h,S),this.Ua&&Ve(f,"TYPE","init"),this.P?(Ve(f,"$req",u),Ve(f,"SID","null"),S.T=!0,Da(S,f,null)):Da(S,f,u),this.G=2}}else this.G==3&&(o?Yu(this,o):this.i.length==0||ku(this.h)||Yu(this))};function Yu(o,u){var f;u?f=u.l:f=o.U++;const g=rn(o.I);Ve(g,"SID",o.K),Ve(g,"RID",f),Ve(g,"AID",o.T),bs(o,g),o.m&&o.o&&La(g,o.m,o.o),f=new Sn(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Ju(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),xa(o.h,f),Da(f,g,u)}function bs(o,u){o.H&&he(o.H,function(f,g){Ve(u,g,f)}),o.l&&Ou({},function(f,g){Ve(u,g,f)})}function Ju(o,u,f){f=Math.min(o.i.length,f);var g=o.l?y(o.l.Na,o.l,o):null;e:{var S=o.i;let V=-1;for(;;){const W=["count="+f];V==-1?0<f?(V=S[0].g,W.push("ofs="+V)):V=0:W.push("ofs="+V);let Se=!0;for(let Qe=0;Qe<f;Qe++){let ve=S[Qe].g;const rt=S[Qe].map;if(ve-=V,0>ve)V=Math.max(0,S[Qe].g-100),Se=!1;else try{Qm(rt,W,"req"+ve+"_")}catch{g&&g(rt)}}if(Se){g=W.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,g}function Xu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Ae||Jn(),ye||(Ae(),ye=!0),kt.add(u,o),o.v=0}}function Ua(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=ms(y(o.Fa,o),th(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Zu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=ms(y(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ft(10),qi(this),Zu(this))};function Ba(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Zu(o){o.g=new Sn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=rn(o.qa);Ve(u,"RID","rpc"),Ve(u,"SID",o.K),Ve(u,"AID",o.T),Ve(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Ve(u,"TO",o.ja),Ve(u,"TYPE","xmlhttp"),bs(o,u),o.m&&o.o&&La(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=Ui(rn(u)),f.m=null,f.P=!0,Ru(f,o)}n.Za=function(){this.C!=null&&(this.C=null,qi(this),Ua(this),ft(19))};function Hi(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function eh(o,u){var f=null;if(o.g==u){Hi(o),Ba(o),o.g=null;var g=2}else if(Ma(o.h,u))f=u.D,Du(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var S=o.B;g=Ni(),le(g,new wu(g,f)),Wi(o)}else Xu(o);else if(S=u.s,S==3||S==0&&0<u.X||!(g==1&&Zm(o,u)||g==2&&Ua(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),S){case 1:rr(o,5);break;case 4:rr(o,10);break;case 3:rr(o,6);break;default:rr(o,2)}}}function th(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function rr(o,u){if(o.j.info("Error code "+u),u==2){var f=y(o.fb,o),g=o.Xa;const S=!g;g=new nr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Li(g,"https"),Ui(g),S?Km(g.toString(),f):zm(g.toString(),f)}else ft(2);o.G=0,o.l&&o.l.sa(u),nh(o),Qu(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function nh(o){if(o.G=0,o.ka=[],o.l){const u=Nu(o.h);(u.length!=0||o.i.length!=0)&&(k(o.ka,u),k(o.ka,o.i),o.h.i.length=0,P(o.i),o.i.length=0),o.l.ra()}}function rh(o,u,f){var g=f instanceof nr?rn(f):new nr(f);if(g.g!="")u&&(g.g=u+"."+g.g),Fi(g,g.s);else{var S=l.location;g=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var V=new nr(null);g&&Li(V,g),u&&(V.g=u),S&&Fi(V,S),f&&(V.l=f),g=V}return f=o.D,u=o.ya,f&&u&&Ve(g,f,u),Ve(g,"VER",o.la),bs(o,g),g}function sh(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Me(new Bi({eb:f})):new Me(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ih(){}n=ih.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ki(){}Ki.prototype.g=function(o,u){return new vt(o,u)};function vt(o,u){te.call(this),this.g=new Gu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!B(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!B(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Sr(this)}C(vt,te),vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){Fa(this.g)},vt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=Ge(o),o=f);u.i.push(new xm(u.Ya++,o)),u.G==3&&Wi(u)},vt.prototype.N=function(){this.g.l=null,delete this.j,Fa(this.g),delete this.g,vt.aa.N.call(this)};function oh(o){Pa.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}C(oh,Pa);function ah(){Ca.call(this),this.status=1}C(ah,Ca);function Sr(o){this.g=o}C(Sr,ih),Sr.prototype.ua=function(){le(this.g,"a")},Sr.prototype.ta=function(o){le(this.g,new oh(o))},Sr.prototype.sa=function(o){le(this.g,new ah)},Sr.prototype.ra=function(){le(this.g,"b")},Ki.prototype.createWebChannel=Ki.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,Mp=function(){return new Ki},Op=function(){return Ni()},Np=er,Ml={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Oi.NO_ERROR=0,Oi.TIMEOUT=8,Oi.HTTP_ERROR=6,ao=Oi,Iu.COMPLETE="complete",Dp=Iu,yu.EventType=ps,ps.OPEN="a",ps.CLOSE="b",ps.ERROR="c",ps.MESSAGE="d",te.prototype.listen=te.prototype.K,Ls=yu,Me.prototype.listenOnce=Me.prototype.L,Me.prototype.getLastError=Me.prototype.Ka,Me.prototype.getLastErrorCode=Me.prototype.Ba,Me.prototype.getStatus=Me.prototype.Z,Me.prototype.getResponseJson=Me.prototype.Oa,Me.prototype.getResponseText=Me.prototype.oa,Me.prototype.send=Me.prototype.ea,Me.prototype.setWithCredentials=Me.prototype.Ha,Vp=Me}).apply(typeof Xi<"u"?Xi:typeof self<"u"?self:typeof window<"u"?window:{});const Zh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let os="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=new vc("@firebase/firestore");function Cs(){return mr.logLevel}function J(n,...e){if(mr.logLevel<=ge.DEBUG){const t=e.map(wc);mr.debug(`Firestore (${os}): ${n}`,...t)}}function Tn(n,...e){if(mr.logLevel<=ge.ERROR){const t=e.map(wc);mr.error(`Firestore (${os}): ${n}`,...t)}}function Yr(n,...e){if(mr.logLevel<=ge.WARN){const t=e.map(wc);mr.warn(`Firestore (${os}): ${n}`,...t)}}function wc(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function se(n="Unexpected state"){const e=`FIRESTORE (${os}) INTERNAL ASSERTION FAILED: `+n;throw Tn(e),new Error(e)}function be(n,e){n||se()}function ae(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends bn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class xp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ot.UNAUTHENTICATED))}shutdown(){}}class iT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class oT{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){be(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new yn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new yn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new yn)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(be(typeof r.accessToken=="string"),new xp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new ot(e)}}class aT{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class lT{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new aT(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uT{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){be(this.o===void 0);const r=i=>{i.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,J("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(be(typeof t.token=="string"),this.R=t.token,new cT(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=hT(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function Ee(n,e){return n<e?-1:n>e?1:0}function Jr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new H(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new H(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new H(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Ke(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ee(this.nanoseconds,e.nanoseconds):Ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new oe(e)}static min(){return new oe(new Ke(0,0))}static max(){return new oe(new Ke(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t,r){t===void 0?t=0:t>e.length&&se(),r===void 0?r=e.length-t:r>e.length-t&&se(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ii.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ii?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ke extends ii{construct(e,t,r){return new ke(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ke(t)}static emptyPath(){return new ke([])}}const fT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends ii{construct(e,t,r){return new Xe(e,t,r)}static isValidIdentifier(e){return fT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Xe(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new H(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new H(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new H(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new H(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(t)}static emptyPath(){return new Xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(ke.fromString(e))}static fromName(e){return new Z(ke.fromString(e).popFirst(5))}static empty(){return new Z(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ke.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new ke(e.slice()))}}function dT(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=oe.fromTimestamp(r===1e9?new Ke(t+1,0):new Ke(t,r));return new Wn(s,Z.empty(),e)}function pT(n){return new Wn(n.readTime,n.key,-1)}class Wn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Wn(oe.min(),Z.empty(),-1)}static max(){return new Wn(oe.max(),Z.empty(),-1)}}function gT(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Z.comparator(n.documentKey,e.documentKey),t!==0?t:Ee(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _T{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ei(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==mT)throw n;J("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&se(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof U?t:U.resolve(t)}catch(t){return U.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):U.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):U.reject(t)}static resolve(e){return new U((t,r)=>{t(e)})}static reject(e){return new U((t,r)=>{r(e)})}static waitFor(e){return new U((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},c=>r(c))}),a=!0,i===s&&t()})}static or(e){let t=U.resolve(!1);for(const r of e)t=t.next(s=>s?U.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new U((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;t(e[h]).next(d=>{a[h]=d,++l,l===i&&r(a)},d=>s(d))}})}static doWhile(e,t){return new U((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function yT(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ti(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ic{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ic.oe=-1;function na(n){return n==null}function Po(n){return n===0&&1/n==-1/0}function vT(n){return typeof n=="number"&&Number.isInteger(n)&&!Po(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Er(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Fp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,t){this.comparator=e,this.root=t||Je.EMPTY}insert(e,t){return new Oe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Je.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Je.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zi(this.root,e,this.comparator,!0)}}class Zi{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Je{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Je.RED,this.left=s??Je.EMPTY,this.right=i??Je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Je(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Je.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw se();const e=this.left.check();if(e!==this.right.check())throw se();return e+(this.isRed()?0:1)}}Je.EMPTY=null,Je.RED=!0,Je.BLACK=!1;Je.EMPTY=new class{constructor(){this.size=0}get key(){throw se()}get value(){throw se()}get color(){throw se()}get left(){throw se()}get right(){throw se()}copy(e,t,r,s,i){return this}insert(e,t,r){return new Je(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new tf(this.data.getIterator())}getIteratorFrom(e){return new tf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ze(this.comparator);return t.data=e,t}}class tf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new wt([])}unionWith(e){let t=new Ze(Xe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new wt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Jr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Up extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Up("Invalid base64 string: "+i):i}}(e);return new tt(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new tt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const ET=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hn(n){if(be(!!n),typeof n=="string"){let e=0;const t=ET.exec(n);if(be(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:xe(n.seconds),nanos:xe(n.nanos)}}function xe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function _r(n){return typeof n=="string"?tt.fromBase64String(n):tt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ac(n){const e=n.mapValue.fields.__previous_value__;return ra(e)?Ac(e):e}function oi(n){const e=Hn(n.mapValue.fields.__local_write_time__.timestampValue);return new Ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e,t,r,s,i,a,l,c,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class ai{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ai("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ai&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo={mapValue:{}};function yr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ra(n)?4:IT(n)?9007199254740991:wT(n)?10:11:se()}function Zt(n,e){if(n===e)return!0;const t=yr(n);if(t!==yr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return oi(n).isEqual(oi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Hn(s.timestampValue),l=Hn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return _r(s.bytesValue).isEqual(_r(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return xe(s.geoPointValue.latitude)===xe(i.geoPointValue.latitude)&&xe(s.geoPointValue.longitude)===xe(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return xe(s.integerValue)===xe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=xe(s.doubleValue),l=xe(i.doubleValue);return a===l?Po(a)===Po(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return Jr(n.arrayValue.values||[],e.arrayValue.values||[],Zt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(ef(a)!==ef(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!Zt(a[c],l[c])))return!1;return!0}(n,e);default:return se()}}function li(n,e){return(n.values||[]).find(t=>Zt(t,e))!==void 0}function Xr(n,e){if(n===e)return 0;const t=yr(n),r=yr(e);if(t!==r)return Ee(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ee(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=xe(i.integerValue||i.doubleValue),c=xe(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return nf(n.timestampValue,e.timestampValue);case 4:return nf(oi(n),oi(e));case 5:return Ee(n.stringValue,e.stringValue);case 6:return function(i,a){const l=_r(i),c=_r(a);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=Ee(l[h],c[h]);if(d!==0)return d}return Ee(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=Ee(xe(i.latitude),xe(a.latitude));return l!==0?l:Ee(xe(i.longitude),xe(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return rf(n.arrayValue,e.arrayValue);case 10:return function(i,a){var l,c,h,d;const p=i.fields||{},y=a.fields||{},w=(l=p.value)===null||l===void 0?void 0:l.arrayValue,C=(c=y.value)===null||c===void 0?void 0:c.arrayValue,P=Ee(((h=w==null?void 0:w.values)===null||h===void 0?void 0:h.length)||0,((d=C==null?void 0:C.values)===null||d===void 0?void 0:d.length)||0);return P!==0?P:rf(w,C)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===eo.mapValue&&a===eo.mapValue)return 0;if(i===eo.mapValue)return 1;if(a===eo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const y=Ee(c[p],d[p]);if(y!==0)return y;const w=Xr(l[c[p]],h[d[p]]);if(w!==0)return w}return Ee(c.length,d.length)}(n.mapValue,e.mapValue);default:throw se()}}function nf(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ee(n,e);const t=Hn(n),r=Hn(e),s=Ee(t.seconds,r.seconds);return s!==0?s:Ee(t.nanos,r.nanos)}function rf(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Xr(t[s],r[s]);if(i)return i}return Ee(t.length,r.length)}function Zr(n){return xl(n)}function xl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Hn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return _r(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Z.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=xl(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${xl(t.fields[a])}`;return s+"}"}(n.mapValue):se()}function Co(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ll(n){return!!n&&"integerValue"in n}function bc(n){return!!n&&"arrayValue"in n}function sf(n){return!!n&&"nullValue"in n}function of(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function lo(n){return!!n&&"mapValue"in n}function wT(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Qs(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Er(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Qs(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Qs(n.arrayValue.values[t]);return e}return Object.assign({},n)}function IT(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.value=e}static empty(){return new yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!lo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qs(t)}setAll(e){let t=Xe.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=Qs(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());lo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Zt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];lo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Er(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new yt(Qs(this.value))}}function Bp(n){const e=[];return Er(n.fields,(t,r)=>{const s=new Xe([t]);if(lo(r)){const i=Bp(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new wt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new ct(e,0,oe.min(),oe.min(),oe.min(),yt.empty(),0)}static newFoundDocument(e,t,r,s){return new ct(e,1,t,oe.min(),r,s,0)}static newNoDocument(e,t){return new ct(e,2,t,oe.min(),oe.min(),yt.empty(),0)}static newUnknownDocument(e,t){return new ct(e,3,t,oe.min(),oe.min(),yt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class es{constructor(e,t){this.position=e,this.inclusive=t}}function af(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=Z.comparator(Z.fromName(a.referenceValue),t.key):r=Xr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function lf(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Zt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ci{constructor(e,t="asc"){this.field=e,this.dir=t}}function AT(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class $p{}class $e extends $p{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new RT(e,t,r):t==="array-contains"?new CT(e,r):t==="in"?new kT(e,r):t==="not-in"?new VT(e,r):t==="array-contains-any"?new DT(e,r):new $e(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new ST(e,r):new PT(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Xr(t,this.value)):t!==null&&yr(this.value)===yr(t)&&this.matchesComparison(Xr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return se()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xt extends $p{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new xt(e,t)}matches(e){return jp(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function jp(n){return n.op==="and"}function qp(n){return bT(n)&&jp(n)}function bT(n){for(const e of n.filters)if(e instanceof xt)return!1;return!0}function Fl(n){if(n instanceof $e)return n.field.canonicalString()+n.op.toString()+Zr(n.value);if(qp(n))return n.filters.map(e=>Fl(e)).join(",");{const e=n.filters.map(t=>Fl(t)).join(",");return`${n.op}(${e})`}}function Wp(n,e){return n instanceof $e?function(r,s){return s instanceof $e&&r.op===s.op&&r.field.isEqual(s.field)&&Zt(r.value,s.value)}(n,e):n instanceof xt?function(r,s){return s instanceof xt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Wp(a,s.filters[l]),!0):!1}(n,e):void se()}function Hp(n){return n instanceof $e?function(t){return`${t.field.canonicalString()} ${t.op} ${Zr(t.value)}`}(n):n instanceof xt?function(t){return t.op.toString()+" {"+t.getFilters().map(Hp).join(" ,")+"}"}(n):"Filter"}class RT extends $e{constructor(e,t,r){super(e,t,r),this.key=Z.fromName(r.referenceValue)}matches(e){const t=Z.comparator(e.key,this.key);return this.matchesComparison(t)}}class ST extends $e{constructor(e,t){super(e,"in",t),this.keys=Kp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class PT extends $e{constructor(e,t){super(e,"not-in",t),this.keys=Kp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Kp(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>Z.fromName(r.referenceValue))}class CT extends $e{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return bc(t)&&li(t.arrayValue,this.value)}}class kT extends $e{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&li(this.value.arrayValue,t)}}class VT extends $e{constructor(e,t){super(e,"not-in",t)}matches(e){if(li(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!li(this.value.arrayValue,t)}}class DT extends $e{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!bc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>li(this.value.arrayValue,r))}}/**
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
 */class NT{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.ue=null}}function cf(n,e=null,t=[],r=[],s=null,i=null,a=null){return new NT(n,e,t,r,s,i,a)}function Rc(n){const e=ae(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Fl(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),na(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Zr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Zr(r)).join(",")),e.ue=t}return e.ue}function Sc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!AT(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Wp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!lf(n.startAt,e.startAt)&&lf(n.endAt,e.endAt)}function Ul(n){return Z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function OT(n,e,t,r,s,i,a,l){return new Tr(n,e,t,r,s,i,a,l)}function sa(n){return new Tr(n)}function uf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Pc(n){return n.collectionGroup!==null}function jr(n){const e=ae(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ze(Xe.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new ci(i,r))}),t.has(Xe.keyField().canonicalString())||e.ce.push(new ci(Xe.keyField(),r))}return e.ce}function Kt(n){const e=ae(n);return e.le||(e.le=MT(e,jr(n))),e.le}function MT(n,e){if(n.limitType==="F")return cf(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ci(s.field,i)});const t=n.endAt?new es(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new es(n.startAt.position,n.startAt.inclusive):null;return cf(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Bl(n,e){const t=n.filters.concat([e]);return new Tr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ko(n,e,t){return new Tr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ia(n,e){return Sc(Kt(n),Kt(e))&&n.limitType===e.limitType}function zp(n){return`${Rc(Kt(n))}|lt:${n.limitType}`}function Dr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Hp(s)).join(", ")}]`),na(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Zr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Zr(s)).join(",")),`Target(${r})`}(Kt(n))}; limitType=${n.limitType})`}function oa(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Z.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of jr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=af(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,jr(r),s)||r.endAt&&!function(a,l,c){const h=af(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,jr(r),s))}(n,e)}function xT(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Gp(n){return(e,t)=>{let r=!1;for(const s of jr(n)){const i=LT(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function LT(n,e,t){const r=n.field.isKeyField()?Z.comparator(e.key,t.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?Xr(c,h):se()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return se()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Er(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Fp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT=new Oe(Z.comparator);function wn(){return FT}const Qp=new Oe(Z.comparator);function Fs(...n){let e=Qp;for(const t of n)e=e.insert(t.key,t);return e}function Yp(n){let e=Qp;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function hr(){return Ys()}function Jp(){return Ys()}function Ys(){return new as(n=>n.toString(),(n,e)=>n.isEqual(e))}const UT=new Oe(Z.comparator),BT=new Ze(Z.comparator);function pe(...n){let e=BT;for(const t of n)e=e.add(t);return e}const $T=new Ze(Ee);function jT(){return $T}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Po(e)?"-0":e}}function Xp(n){return{integerValue:""+n}}function qT(n,e){return vT(e)?Xp(e):Cc(n,e)}/**
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
 */class aa{constructor(){this._=void 0}}function WT(n,e,t){return n instanceof ui?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ra(i)&&(i=Ac(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):n instanceof hi?eg(n,e):n instanceof fi?tg(n,e):function(s,i){const a=Zp(s,i),l=hf(a)+hf(s.Pe);return Ll(a)&&Ll(s.Pe)?Xp(l):Cc(s.serializer,l)}(n,e)}function HT(n,e,t){return n instanceof hi?eg(n,e):n instanceof fi?tg(n,e):t}function Zp(n,e){return n instanceof Vo?function(r){return Ll(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ui extends aa{}class hi extends aa{constructor(e){super(),this.elements=e}}function eg(n,e){const t=ng(e);for(const r of n.elements)t.some(s=>Zt(s,r))||t.push(r);return{arrayValue:{values:t}}}class fi extends aa{constructor(e){super(),this.elements=e}}function tg(n,e){let t=ng(e);for(const r of n.elements)t=t.filter(s=>!Zt(s,r));return{arrayValue:{values:t}}}class Vo extends aa{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function hf(n){return xe(n.integerValue||n.doubleValue)}function ng(n){return bc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e,t){this.field=e,this.transform=t}}function zT(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof hi&&s instanceof hi||r instanceof fi&&s instanceof fi?Jr(r.elements,s.elements,Zt):r instanceof Vo&&s instanceof Vo?Zt(r.Pe,s.Pe):r instanceof ui&&s instanceof ui}(n.transform,e.transform)}class GT{constructor(e,t){this.version=e,this.transformResults=t}}class At{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new At}static exists(e){return new At(void 0,e)}static updateTime(e){return new At(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function co(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class la{}function rg(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ca(n.key,At.none()):new wi(n.key,n.data,At.none());{const t=n.data,r=yt.empty();let s=new Ze(Xe.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Qn(n.key,r,new wt(s.toArray()),At.none())}}function QT(n,e,t){n instanceof wi?function(s,i,a){const l=s.value.clone(),c=df(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Qn?function(s,i,a){if(!co(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=df(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(sg(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Js(n,e,t,r){return n instanceof wi?function(i,a,l,c){if(!co(i.precondition,a))return l;const h=i.value.clone(),d=pf(i.fieldTransforms,c,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof Qn?function(i,a,l,c){if(!co(i.precondition,a))return l;const h=pf(i.fieldTransforms,c,a),d=a.data;return d.setAll(sg(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,a,l){return co(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function YT(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Zp(r.transform,s||null);i!=null&&(t===null&&(t=yt.empty()),t.set(r.field,i))}return t||null}function ff(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Jr(r,s,(i,a)=>zT(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class wi extends la{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Qn extends la{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function sg(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function df(n,e,t){const r=new Map;be(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,HT(a,l,t[s]))}return r}function pf(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,WT(i,a,e))}return r}class ca extends la{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class JT extends la{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&QT(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Js(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Js(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Jp();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const c=rg(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(oe.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),pe())}isEqual(e){return this.batchId===e.batchId&&Jr(this.mutations,e.mutations,(t,r)=>ff(t,r))&&Jr(this.baseMutations,e.baseMutations,(t,r)=>ff(t,r))}}class kc{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){be(e.mutations.length===r.length);let s=function(){return UT}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new kc(e,t,r,s)}}/**
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
 */class ZT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ew{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ue,me;function tw(n){switch(n){default:return se();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function ig(n){if(n===void 0)return Tn("GRPC error has no .code"),N.UNKNOWN;switch(n){case Ue.OK:return N.OK;case Ue.CANCELLED:return N.CANCELLED;case Ue.UNKNOWN:return N.UNKNOWN;case Ue.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case Ue.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case Ue.INTERNAL:return N.INTERNAL;case Ue.UNAVAILABLE:return N.UNAVAILABLE;case Ue.UNAUTHENTICATED:return N.UNAUTHENTICATED;case Ue.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case Ue.NOT_FOUND:return N.NOT_FOUND;case Ue.ALREADY_EXISTS:return N.ALREADY_EXISTS;case Ue.PERMISSION_DENIED:return N.PERMISSION_DENIED;case Ue.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case Ue.ABORTED:return N.ABORTED;case Ue.OUT_OF_RANGE:return N.OUT_OF_RANGE;case Ue.UNIMPLEMENTED:return N.UNIMPLEMENTED;case Ue.DATA_LOSS:return N.DATA_LOSS;default:return se()}}(me=Ue||(Ue={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function nw(){return new TextEncoder}/**
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
 */const rw=new pr([4294967295,4294967295],0);function gf(n){const e=nw().encode(n),t=new kp;return t.update(e),new Uint8Array(t.digest())}function mf(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new pr([t,r],0),new pr([s,i],0)]}class Vc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Us(`Invalid padding: ${t}`);if(r<0)throw new Us(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Us(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Us(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=pr.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(pr.fromNumber(r)));return s.compare(rw)===1&&(s=new pr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=gf(e),[r,s]=mf(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Vc(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=gf(e),[r,s]=mf(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Us extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Ii.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ua(oe.min(),s,new Oe(Ee),wn(),pe())}}class Ii{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ii(r,t,pe(),pe(),pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class og{constructor(e,t){this.targetId=e,this.me=t}}class ag{constructor(e,t,r=tt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class _f{constructor(){this.fe=0,this.ge=vf(),this.pe=tt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=pe(),t=pe(),r=pe();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:se()}}),new Ii(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=vf()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,be(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class sw{constructor(e){this.Le=e,this.Be=new Map,this.ke=wn(),this.qe=yf(),this.Qe=new Oe(Ee)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:se()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(Ul(i))if(r===0){const a=new Z(i.path);this.Ue(t,a,ct.newNoDocument(a,oe.min()))}else be(r===1);else{const a=this.Ye(t);if(a!==r){const l=this.Ze(e),c=l?this.Xe(l,e,a):1;if(c!==0){this.je(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=_r(r).toUint8Array()}catch(c){if(c instanceof Up)return Yr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Vc(a,s,i)}catch(c){return Yr(c instanceof Us?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,a)=>{const l=this.Je(a);if(l){if(i.current&&Ul(l.target)){const c=new Z(l.target.path);this.ke.get(c)!==null||this.it(a,c)||this.Ue(a,c,ct.newNoDocument(c,e))}i.be&&(t.set(a,i.ve()),i.Ce())}});let r=pe();this.qe.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new ua(e,t,this.Qe,this.ke,r);return this.ke=wn(),this.qe=yf(),this.Qe=new Oe(Ee),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new _f,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ze(Ee),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||J("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new _f),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function yf(){return new Oe(Z.comparator)}function vf(){return new Oe(Z.comparator)}const iw={asc:"ASCENDING",desc:"DESCENDING"},ow={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},aw={and:"AND",or:"OR"};class lw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function $l(n,e){return n.useProto3Json||na(e)?e:{value:e}}function Do(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lg(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function cw(n,e){return Do(n,e.toTimestamp())}function zt(n){return be(!!n),oe.fromTimestamp(function(t){const r=Hn(t);return new Ke(r.seconds,r.nanos)}(n))}function Dc(n,e){return jl(n,e).canonicalString()}function jl(n,e){const t=function(s){return new ke(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function cg(n){const e=ke.fromString(n);return be(pg(e)),e}function ql(n,e){return Dc(n.databaseId,e.path)}function al(n,e){const t=cg(e);if(t.get(1)!==n.databaseId.projectId)throw new H(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new H(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Z(hg(t))}function ug(n,e){return Dc(n.databaseId,e)}function uw(n){const e=cg(n);return e.length===4?ke.emptyPath():hg(e)}function Wl(n){return new ke(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function hg(n){return be(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Ef(n,e,t){return{name:ql(n,e),fields:t.value.mapValue.fields}}function hw(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:se()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(be(d===void 0||typeof d=="string"),tt.fromBase64String(d||"")):(be(d===void 0||d instanceof Buffer||d instanceof Uint8Array),tt.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const d=h.code===void 0?N.UNKNOWN:ig(h.code);return new H(d,h.message||"")}(a);t=new ag(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=al(n,r.document.name),i=zt(r.document.updateTime),a=r.document.createTime?zt(r.document.createTime):oe.min(),l=new yt({mapValue:{fields:r.document.fields}}),c=ct.newFoundDocument(s,i,a,l),h=r.targetIds||[],d=r.removedTargetIds||[];t=new uo(h,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=al(n,r.document),i=r.readTime?zt(r.readTime):oe.min(),a=ct.newNoDocument(s,i),l=r.removedTargetIds||[];t=new uo([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=al(n,r.document),i=r.removedTargetIds||[];t=new uo([],i,s,null)}else{if(!("filter"in e))return se();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new ew(s,i),l=r.targetId;t=new og(l,a)}}return t}function fw(n,e){let t;if(e instanceof wi)t={update:Ef(n,e.key,e.value)};else if(e instanceof ca)t={delete:ql(n,e.key)};else if(e instanceof Qn)t={update:Ef(n,e.key,e.data),updateMask:Tw(e.fieldMask)};else{if(!(e instanceof JT))return se();t={verify:ql(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof ui)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof hi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof fi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Vo)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw se()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:cw(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:se()}(n,e.precondition)),t}function dw(n,e){return n&&n.length>0?(be(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?zt(s.updateTime):zt(i);return a.isEqual(oe.min())&&(a=zt(i)),new GT(a,s.transformResults||[])}(t,e))):[]}function pw(n,e){return{documents:[ug(n,e.path)]}}function gw(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=ug(n,s);const i=function(h){if(h.length!==0)return dg(xt.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(d=>function(y){return{field:Nr(y.field),direction:yw(y.dir)}}(d))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=$l(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:s}}function mw(n){let e=uw(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){be(r===1);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=function(p){const y=fg(p);return y instanceof xt&&qp(y)?y.getFilters():[y]}(t.where));let a=[];t.orderBy&&(a=function(p){return p.map(y=>function(C){return new ci(Or(C.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(y))}(t.orderBy));let l=null;t.limit&&(l=function(p){let y;return y=typeof p=="object"?p.value:p,na(y)?null:y}(t.limit));let c=null;t.startAt&&(c=function(p){const y=!!p.before,w=p.values||[];return new es(w,y)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const y=!p.before,w=p.values||[];return new es(w,y)}(t.endAt)),OT(e,s,a,i,l,"F",c,h)}function _w(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return se()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function fg(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Or(t.unaryFilter.field);return $e.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Or(t.unaryFilter.field);return $e.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Or(t.unaryFilter.field);return $e.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Or(t.unaryFilter.field);return $e.create(a,"!=",{nullValue:"NULL_VALUE"});default:return se()}}(n):n.fieldFilter!==void 0?function(t){return $e.create(Or(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return se()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return xt.create(t.compositeFilter.filters.map(r=>fg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return se()}}(t.compositeFilter.op))}(n):se()}function yw(n){return iw[n]}function vw(n){return ow[n]}function Ew(n){return aw[n]}function Nr(n){return{fieldPath:n.canonicalString()}}function Or(n){return Xe.fromServerFormat(n.fieldPath)}function dg(n){return n instanceof $e?function(t){if(t.op==="=="){if(of(t.value))return{unaryFilter:{field:Nr(t.field),op:"IS_NAN"}};if(sf(t.value))return{unaryFilter:{field:Nr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(of(t.value))return{unaryFilter:{field:Nr(t.field),op:"IS_NOT_NAN"}};if(sf(t.value))return{unaryFilter:{field:Nr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Nr(t.field),op:vw(t.op),value:t.value}}}(n):n instanceof xt?function(t){const r=t.getFilters().map(s=>dg(s));return r.length===1?r[0]:{compositeFilter:{op:Ew(t.op),filters:r}}}(n):se()}function Tw(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function pg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,t,r,s,i=oe.min(),a=oe.min(),l=tt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Ln(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e){this.ct=e}}function Iw(n){const e=mw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ko(e,e.limit,"L"):e}/**
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
 */class Aw{constructor(){this.un=new bw}addToCollectionParentIndex(e,t){return this.un.add(t),U.resolve()}getCollectionParents(e,t){return U.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return U.resolve()}deleteFieldIndex(e,t){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,t){return U.resolve()}getDocumentsMatchingTarget(e,t){return U.resolve(null)}getIndexType(e,t){return U.resolve(0)}getFieldIndexes(e,t){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,t){return U.resolve(Wn.min())}getMinOffsetFromCollectionGroup(e,t){return U.resolve(Wn.min())}updateCollectionGroup(e,t,r){return U.resolve()}updateIndexEntries(e,t){return U.resolve()}}class bw{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Ze(ke.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ze(ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ts(0)}static kn(){return new ts(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(){this.changes=new as(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?U.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Sw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Js(r.mutation,s,wt.empty(),Ke.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,pe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=pe()){const s=hr();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Fs();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=hr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,pe()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=wn();const a=Ys(),l=function(){return Ys()}();return t.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Qn)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),Js(d.mutation,h,d.mutation.getFieldMask(),Ke.now())):a.set(h.key,wt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,d)=>a.set(h,d)),t.forEach((h,d)=>{var p;return l.set(h,new Sw(d,(p=a.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Ys();let s=new Oe((a,l)=>a-l),i=pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let d=r.get(c)||wt.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(s.get(l.batchId)||pe()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=Jp();d.forEach(y=>{if(!i.has(y)){const w=rg(t.get(y),r.get(y));w!==null&&p.set(y,w),i=i.add(y)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return U.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return Z.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Pc(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):U.resolve(hr());let l=-1,c=i;return a.next(h=>U.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?U.resolve():this.remoteDocumentCache.getEntry(e,d).next(y=>{c=c.insert(d,y)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,pe())).next(d=>({batchId:l,changes:Yp(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Z(t)).next(r=>{let s=Fs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Fs();return this.indexManager.getCollectionParents(e,i).next(l=>U.forEach(l,c=>{const h=function(p,y){return new Tr(y,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,y)=>{a=a.insert(p,y)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((c,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,ct.newInvalidDocument(d)))});let l=Fs();return a.forEach((c,h)=>{const d=i.get(c);d!==void 0&&Js(d.mutation,h,wt.empty(),Ke.now()),oa(t,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return U.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:zt(s.createTime)}}(t)),U.resolve()}getNamedQuery(e,t){return U.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:Iw(s.bundledQuery),readTime:zt(s.readTime)}}(t)),U.resolve()}}/**
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
 */class kw{constructor(){this.overlays=new Oe(Z.comparator),this.Ir=new Map}getOverlay(e,t){return U.resolve(this.overlays.get(t))}getOverlays(e,t){const r=hr();return U.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),U.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),U.resolve()}getOverlaysForCollection(e,t,r){const s=hr(),i=t.length+1,a=new Z(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return U.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Oe((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=hr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=hr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return U.resolve(l)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new ZT(t,r));let i=this.Ir.get(t);i===void 0&&(i=pe(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
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
 */class Vw{constructor(){this.sessionToken=tt.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(){this.Tr=new Ze(ze.Er),this.dr=new Ze(ze.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new ze(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new ze(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new Z(new ke([])),r=new ze(t,e),s=new ze(t,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new Z(new ke([])),r=new ze(t,e),s=new ze(t,e+1);let i=pe();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new ze(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return Z.comparator(e.key,t.key)||Ee(e.wr,t.wr)}static Ar(e,t){return Ee(e.wr,t.wr)||Z.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Ze(ze.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new XT(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.br=this.br.add(new ze(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(a)}lookupMutationBatch(e,t){return U.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ze(t,0),s=new ze(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const l=this.Dr(a.wr);i.push(l)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ze(Ee);return t.forEach(s=>{const i=new ze(s,0),a=new ze(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],l=>{r=r.add(l.wr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;Z.isDocumentKey(i)||(i=i.child(""));const a=new ze(new Z(i),0);let l=new Ze(Ee);return this.br.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.wr)),!0)},a),U.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){be(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return U.forEach(t.mutations,s=>{const i=new ze(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new ze(t,0),s=this.br.firstAfterOrEqual(r);return U.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e){this.Mr=e,this.docs=function(){return new Oe(Z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return U.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(t))}getEntries(e,t){let r=wn();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ct.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=wn();const a=t.path,l=new Z(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||gT(pT(d),r)<=0||(s.has(d.key)||oa(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,t,r,s){se()}Or(e,t){return U.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Ow(this)}getSize(e){return U.resolve(this.size)}}class Ow extends Rw{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),U.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e){this.persistence=e,this.Nr=new as(t=>Rc(t),Sc),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Nc,this.targetCount=0,this.kr=ts.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),U.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new ts(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,U.resolve()}updateTargetData(e,t){return this.Kn(t),U.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return U.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),U.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),U.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return U.resolve(r)}containsKey(e,t){return U.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Ic(0),this.Kr=!1,this.Kr=!0,this.$r=new Vw,this.referenceDelegate=e(this),this.Ur=new Mw(this),this.indexManager=new Aw,this.remoteDocumentCache=function(s){return new Nw(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new ww(t),this.Gr=new Cw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new kw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new Dw(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){J("MemoryPersistence","Starting transaction:",e);const s=new Lw(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return U.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class Lw extends _T{constructor(e){super(),this.currentSequenceNumber=e}}class Oc{constructor(e){this.persistence=e,this.Jr=new Nc,this.Yr=null}static Zr(e){return new Oc(e)}get Xr(){if(this.Yr)return this.Yr;throw se()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),U.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),U.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,r=>{const s=Z.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,oe.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return U.or([()=>U.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=pe(),s=pe();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Mc(e,t.fromCache,r,s)}}/**
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
 */class Fw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Uw{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return $v()?8:yT(ht())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Fw;return this.Xi(e,t,a).next(l=>{if(i.result=l,this.zi)return this.es(e,t,a,l.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(Cs()<=ge.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",Dr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(Cs()<=ge.DEBUG&&J("QueryEngine","Query:",Dr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Cs()<=ge.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",Dr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kt(t))):U.resolve())}Yi(e,t){if(uf(t))return U.resolve(null);let r=Kt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=ko(t,null,"F"),r=Kt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=pe(...i);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.ts(t,l);return this.ns(t,h,a,c.readTime)?this.Yi(e,ko(t,null,"F")):this.rs(e,h,t,c)}))})))}Zi(e,t,r,s){return uf(t)||s.isEqual(oe.min())?U.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(t,i);return this.ns(t,a,r,s)?U.resolve(null):(Cs()<=ge.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Dr(t)),this.rs(e,a,t,dT(s,-1)).next(l=>l))})}ts(e,t){let r=new Ze(Gp(e));return t.forEach((s,i)=>{oa(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return Cs()<=ge.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",Dr(t)),this.Ji.getDocumentsMatchingQuery(e,t,Wn.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new Oe(Ee),this._s=new as(i=>Rc(i),Sc),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Pw(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function $w(n,e,t,r){return new Bw(n,e,t,r)}async function gg(n,e){const t=ae(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=pe();for(const h of s){a.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return t.localDocuments.getDocuments(r,c).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:l}))})})}function jw(n,e){const t=ae(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const p=h.batch,y=p.keys();let w=U.resolve();return y.forEach(C=>{w=w.next(()=>d.getEntry(c,C)).next(P=>{const k=h.docVersions.get(C);be(k!==null),P.version.compareTo(k)<0&&(p.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),d.addEntry(P)))})}),w.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=pe();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function mg(n){const e=ae(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function qw(n,e){const t=ae(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const l=[];e.targetChanges.forEach((d,p)=>{const y=s.get(p);if(!y)return;l.push(t.Ur.removeMatchingKeys(i,d.removedDocuments,p).next(()=>t.Ur.addMatchingKeys(i,d.addedDocuments,p)));let w=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(tt.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):d.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(d.resumeToken,r)),s=s.insert(p,w),function(P,k,O){return P.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(y,w,d)&&l.push(t.Ur.updateTargetData(i,w))});let c=wn(),h=pe();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(Ww(i,a,e.documentUpdates).next(d=>{c=d.Ps,h=d.Is})),!r.isEqual(oe.min())){const d=t.Ur.getLastRemoteSnapshotVersion(i).next(p=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return U.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(t.os=s,i))}function Ww(n,e,t){let r=pe(),s=pe();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=wn();return t.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(oe.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):J("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Ps:a,Is:s}})}function Hw(n,e){const t=ae(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Kw(n,e){const t=ae(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):t.Ur.allocateTargetId(r).next(a=>(s=new Ln(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function Hl(n,e,t){const r=ae(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Ti(a))throw a;J("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Tf(n,e,t){const r=ae(n);let s=oe.min(),i=pe();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,d){const p=ae(c),y=p._s.get(d);return y!==void 0?U.resolve(p.os.get(y)):p.Ur.getTargetData(h,d)}(r,a,Kt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?s:oe.min(),t?i:pe())).next(l=>(zw(r,xT(e),l),{documents:l,Ts:i})))}function zw(n,e,t){let r=n.us.get(e)||oe.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}class wf{constructor(){this.activeTargetIds=jT()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Gw{constructor(){this.so=new wf,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new wf,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Qw{_o(e){}shutdown(){}}/**
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
 */class If{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){J("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){J("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let to=null;function ll(){return to===null?to=function(){return 268435456+Math.round(2147483648*Math.random())}():to++,"0x"+to.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it="WebChannelConnection";class Xw extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,a){const l=ll(),c=this.xo(t,r.toUriEncodedString());J("RestConnection",`Sending RPC '${t}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,a),this.No(t,c,h,s).then(d=>(J("RestConnection",`Received RPC '${t}' ${l}: `,d),d),d=>{throw Yr("RestConnection",`RPC '${t}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}Lo(t,r,s,i,a,l){return this.Mo(t,r,s,i,a)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+os}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}xo(t,r){const s=Yw[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=ll();return new Promise((a,l)=>{const c=new Vp;c.setWithCredentials(!0),c.listenOnce(Dp.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ao.NO_ERROR:const d=c.getResponseJson();J(it,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),a(d);break;case ao.TIMEOUT:J(it,`RPC '${e}' ${i} timed out`),l(new H(N.DEADLINE_EXCEEDED,"Request time out"));break;case ao.HTTP_ERROR:const p=c.getStatus();if(J(it,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let y=c.getResponseJson();Array.isArray(y)&&(y=y[0]);const w=y==null?void 0:y.error;if(w&&w.status&&w.message){const C=function(k){const O=k.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(O)>=0?O:N.UNKNOWN}(w.status);l(new H(C,w.message))}else l(new H(N.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new H(N.UNAVAILABLE,"Connection failed."));break;default:se()}}finally{J(it,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);J(it,`RPC '${e}' ${i} sending request:`,s),c.send(t,"POST",h,r,15)})}Bo(e,t,r){const s=ll(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Mp(),l=Op(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const d=i.join("");J(it,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=a.createWebChannel(d,c);let y=!1,w=!1;const C=new Jw({Io:k=>{w?J(it,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(y||(J(it,`Opening RPC '${e}' stream ${s} transport.`),p.open(),y=!0),J(it,`RPC '${e}' stream ${s} sending:`,k),p.send(k))},To:()=>p.close()}),P=(k,O,B)=>{k.listen(O,Q=>{try{B(Q)}catch(z){setTimeout(()=>{throw z},0)}})};return P(p,Ls.EventType.OPEN,()=>{w||(J(it,`RPC '${e}' stream ${s} transport opened.`),C.yo())}),P(p,Ls.EventType.CLOSE,()=>{w||(w=!0,J(it,`RPC '${e}' stream ${s} transport closed`),C.So())}),P(p,Ls.EventType.ERROR,k=>{w||(w=!0,Yr(it,`RPC '${e}' stream ${s} transport errored:`,k),C.So(new H(N.UNAVAILABLE,"The operation could not be completed")))}),P(p,Ls.EventType.MESSAGE,k=>{var O;if(!w){const B=k.data[0];be(!!B);const Q=B,z=Q.error||((O=Q[0])===null||O===void 0?void 0:O.error);if(z){J(it,`RPC '${e}' stream ${s} received error:`,z);const fe=z.status;let he=function(v){const I=Ue[v];if(I!==void 0)return ig(I)}(fe),T=z.message;he===void 0&&(he=N.INTERNAL,T="Unknown error status: "+fe+" with message "+z.message),w=!0,C.So(new H(he,T)),p.close()}else J(it,`RPC '${e}' stream ${s} received:`,B),C.bo(B)}}),P(l,Np.STAT_EVENT,k=>{k.stat===Ml.PROXY?J(it,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===Ml.NOPROXY&&J(it,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function cl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(n){return new lw(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&J("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,t,r,s,i,a,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new _g(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(Tn(t.toString()),Tn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new H(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return J("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(J("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Zw extends yg{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=hw(this.serializer,e),r=function(i){if(!("targetChange"in i))return oe.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?oe.min():a.readTime?zt(a.readTime):oe.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Wl(this.serializer),t.addTarget=function(i,a){let l;const c=a.target;if(l=Ul(c)?{documents:pw(i,c)}:{query:gw(i,c)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=lg(i,a.resumeToken);const h=$l(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(oe.min())>0){l.readTime=Do(i,a.snapshotVersion.toTimestamp());const h=$l(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=_w(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Wl(this.serializer),t.removeTarget=e,this.a_(t)}}class eI extends yg{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return be(!!e.streamToken),this.lastStreamToken=e.streamToken,be(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=dw(e.writeResults,e.commitTime),r=zt(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Wl(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>fw(this.serializer,r))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new H(N.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,jl(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(N.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,jl(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new H(N.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class nI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
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
 */class rI{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{wr(this)&&(J("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=ae(c);h.L_.add(4),await Ai(h),h.q_.set("Unknown"),h.L_.delete(4),await fa(h)}(this))})}),this.q_=new nI(r,s)}}async function fa(n){if(wr(n))for(const e of n.B_)await e(!0)}async function Ai(n){for(const e of n.B_)await e(!1)}function vg(n,e){const t=ae(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Uc(t)?Fc(t):ls(t).r_()&&Lc(t,e))}function xc(n,e){const t=ae(n),r=ls(t);t.N_.delete(e),r.r_()&&Eg(t,e),t.N_.size===0&&(r.r_()?r.o_():wr(t)&&t.q_.set("Unknown"))}function Lc(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ls(n).A_(e)}function Eg(n,e){n.Q_.xe(e),ls(n).R_(e)}function Fc(n){n.Q_=new sw({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),ls(n).start(),n.q_.v_()}function Uc(n){return wr(n)&&!ls(n).n_()&&n.N_.size>0}function wr(n){return ae(n).L_.size===0}function Tg(n){n.Q_=void 0}async function sI(n){n.q_.set("Online")}async function iI(n){n.N_.forEach((e,t)=>{Lc(n,e)})}async function oI(n,e){Tg(n),Uc(n)?(n.q_.M_(e),Fc(n)):n.q_.set("Unknown")}async function aI(n,e,t){if(n.q_.set("Online"),e instanceof ag&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.N_.delete(l),s.Q_.removeTarget(l))}(n,e)}catch(r){J("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await No(n,r)}else if(e instanceof uo?n.Q_.Ke(e):e instanceof og?n.Q_.He(e):n.Q_.We(e),!t.isEqual(oe.min()))try{const r=await mg(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.Q_.rt(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.N_.get(h);d&&i.N_.set(h,d.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const d=i.N_.get(c);if(!d)return;i.N_.set(c,d.withResumeToken(tt.EMPTY_BYTE_STRING,d.snapshotVersion)),Eg(i,c);const p=new Ln(d.target,c,h,d.sequenceNumber);Lc(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){J("RemoteStore","Failed to raise snapshot:",r),await No(n,r)}}async function No(n,e,t){if(!Ti(e))throw e;n.L_.add(1),await Ai(n),n.q_.set("Offline"),t||(t=()=>mg(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{J("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await fa(n)})}function wg(n,e){return e().catch(t=>No(n,t,e))}async function da(n){const e=ae(n),t=Kn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;lI(e);)try{const s=await Hw(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,cI(e,s)}catch(s){await No(e,s)}Ig(e)&&Ag(e)}function lI(n){return wr(n)&&n.O_.length<10}function cI(n,e){n.O_.push(e);const t=Kn(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Ig(n){return wr(n)&&!Kn(n).n_()&&n.O_.length>0}function Ag(n){Kn(n).start()}async function uI(n){Kn(n).p_()}async function hI(n){const e=Kn(n);for(const t of n.O_)e.m_(t.mutations)}async function fI(n,e,t){const r=n.O_.shift(),s=kc.from(r,e,t);await wg(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await da(n)}async function dI(n,e){e&&Kn(n).V_&&await async function(r,s){if(function(a){return tw(a)&&a!==N.ABORTED}(s.code)){const i=r.O_.shift();Kn(r).s_(),await wg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await da(r)}}(n,e),Ig(n)&&Ag(n)}async function Af(n,e){const t=ae(n);t.asyncQueue.verifyOperationInProgress(),J("RemoteStore","RemoteStore received new credentials");const r=wr(t);t.L_.add(3),await Ai(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await fa(t)}async function pI(n,e){const t=ae(n);e?(t.L_.delete(2),await fa(t)):e||(t.L_.add(2),await Ai(t),t.q_.set("Unknown"))}function ls(n){return n.K_||(n.K_=function(t,r,s){const i=ae(t);return i.w_(),new Zw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:sI.bind(null,n),Ro:iI.bind(null,n),mo:oI.bind(null,n),d_:aI.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Uc(n)?Fc(n):n.q_.set("Unknown")):(await n.K_.stop(),Tg(n))})),n.K_}function Kn(n){return n.U_||(n.U_=function(t,r,s){const i=ae(t);return i.w_(),new eI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:uI.bind(null,n),mo:dI.bind(null,n),f_:hI.bind(null,n),g_:fI.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await da(n)):(await n.U_.stop(),n.O_.length>0&&(J("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new yn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new Bc(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $c(n,e){if(Tn("AsyncQueue",`${e}: ${n}`),Ti(n))return new H(N.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||Z.comparator(t.key,r.key):(t,r)=>Z.comparator(t.key,r.key),this.keyedMap=Fs(),this.sortedSet=new Oe(this.comparator)}static emptySet(e){return new qr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof qr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class bf{constructor(){this.W_=new Oe(Z.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):se():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class ns{constructor(e,t,r,s,i,a,l,c,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new ns(e,t,qr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ia(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class mI{constructor(){this.queries=Rf(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=ae(t),i=s.queries;s.queries=Rf(),i.forEach((a,l)=>{for(const c of l.j_)c.onError(r)})})(this,new H(N.ABORTED,"Firestore shutting down"))}}function Rf(){return new as(n=>zp(n),ia)}async function jc(n,e){const t=ae(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new gI,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=$c(a,`Initialization of query '${Dr(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&Wc(t)}async function qc(n,e){const t=ae(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function _I(n,e){const t=ae(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.j_)l.X_(s)&&(r=!0);a.z_=s}}r&&Wc(t)}function yI(n,e,t){const r=ae(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function Wc(n){n.Y_.forEach(e=>{e.next()})}var Kl,Sf;(Sf=Kl||(Kl={})).ea="default",Sf.Cache="cache";class Hc{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ns(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=ns.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Kl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e){this.key=e}}class Rg{constructor(e){this.key=e}}class vI{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=pe(),this.mutatedKeys=pe(),this.Aa=Gp(e),this.Ra=new qr(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new bf,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const y=s.get(d),w=oa(this.query,p)?p:null,C=!!y&&this.mutatedKeys.has(y.key),P=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let k=!1;y&&w?y.data.isEqual(w.data)?C!==P&&(r.track({type:3,doc:w}),k=!0):this.ga(y,w)||(r.track({type:2,doc:w}),k=!0,(c&&this.Aa(w,c)>0||h&&this.Aa(w,h)<0)&&(l=!0)):!y&&w?(r.track({type:0,doc:w}),k=!0):y&&!w&&(r.track({type:1,doc:y}),k=!0,(c||h)&&(l=!0)),k&&(w?(a=a.add(w),i=P?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ra:a,fa:r,ns:l,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((d,p)=>function(w,C){const P=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return se()}};return P(w)-P(C)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),s=s!=null&&s;const l=t&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,h=c!==this.Ea;return this.Ea=c,a.length!==0||h?{snapshot:new ns(this.query,e.Ra,i,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new bf,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=pe(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Rg(r))}),this.da.forEach(r=>{e.has(r)||t.push(new bg(r))}),t}ba(e){this.Ta=e.Ts,this.da=pe();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return ns.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class EI{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class TI{constructor(e){this.key=e,this.va=!1}}class wI{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new as(l=>zp(l),ia),this.Ma=new Map,this.xa=new Set,this.Oa=new Oe(Z.comparator),this.Na=new Map,this.La=new Nc,this.Ba={},this.ka=new Map,this.qa=ts.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function II(n,e,t=!0){const r=Dg(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Sg(r,e,t,!0),s}async function AI(n,e){const t=Dg(n);await Sg(t,e,!0,!1)}async function Sg(n,e,t,r){const s=await Kw(n.localStore,Kt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await bI(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&vg(n.remoteStore,s),l}async function bI(n,e,t,r,s){n.Ka=(p,y,w)=>async function(P,k,O,B){let Q=k.view.ma(O);Q.ns&&(Q=await Tf(P.localStore,k.query,!1).then(({documents:T})=>k.view.ma(T,Q)));const z=B&&B.targetChanges.get(k.targetId),fe=B&&B.targetMismatches.get(k.targetId)!=null,he=k.view.applyChanges(Q,P.isPrimaryClient,z,fe);return Cf(P,k.targetId,he.wa),he.snapshot}(n,p,y,w);const i=await Tf(n.localStore,e,!0),a=new vI(e,i.Ts),l=a.ma(i.documents),c=Ii.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(l,n.isPrimaryClient,c);Cf(n,t,h.wa);const d=new EI(e,t,a);return n.Fa.set(e,d),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),h.snapshot}async function RI(n,e,t){const r=ae(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!ia(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Hl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&xc(r.remoteStore,s.targetId),zl(r,s.targetId)}).catch(Ei)):(zl(r,s.targetId),await Hl(r.localStore,s.targetId,!0))}async function SI(n,e){const t=ae(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),xc(t.remoteStore,r.targetId))}async function PI(n,e,t){const r=MI(n);try{const s=await function(a,l){const c=ae(a),h=Ke.now(),d=l.reduce((w,C)=>w.add(C.key),pe());let p,y;return c.persistence.runTransaction("Locally write mutations","readwrite",w=>{let C=wn(),P=pe();return c.cs.getEntries(w,d).next(k=>{C=k,C.forEach((O,B)=>{B.isValidDocument()||(P=P.add(O))})}).next(()=>c.localDocuments.getOverlayedDocuments(w,C)).next(k=>{p=k;const O=[];for(const B of l){const Q=YT(B,p.get(B.key).overlayedDocument);Q!=null&&O.push(new Qn(B.key,Q,Bp(Q.value.mapValue),At.exists(!0)))}return c.mutationQueue.addMutationBatch(w,h,O,l)}).next(k=>{y=k;const O=k.applyToLocalDocumentSet(p,P);return c.documentOverlayCache.saveOverlays(w,k.batchId,O)})}).then(()=>({batchId:y.batchId,changes:Yp(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let h=a.Ba[a.currentUser.toKey()];h||(h=new Oe(Ee)),h=h.insert(l,c),a.Ba[a.currentUser.toKey()]=h}(r,s.batchId,t),await bi(r,s.changes),await da(r.remoteStore)}catch(s){const i=$c(s,"Failed to persist write");t.reject(i)}}async function Pg(n,e){const t=ae(n);try{const r=await qw(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Na.get(i);a&&(be(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?be(a.va):s.removedDocuments.size>0&&(be(a.va),a.va=!1))}),await bi(t,r,e)}catch(r){await Ei(r)}}function Pf(n,e,t){const r=ae(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,a)=>{const l=a.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=ae(a);c.onlineState=l;let h=!1;c.queries.forEach((d,p)=>{for(const y of p.j_)y.Z_(l)&&(h=!0)}),h&&Wc(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function CI(n,e,t){const r=ae(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new Oe(Z.comparator);a=a.insert(i,ct.newNoDocument(i,oe.min()));const l=pe().add(i),c=new ua(oe.min(),new Map,new Oe(Ee),a,l);await Pg(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),Kc(r)}else await Hl(r.localStore,e,!1).then(()=>zl(r,e,t)).catch(Ei)}async function kI(n,e){const t=ae(n),r=e.batch.batchId;try{const s=await jw(t.localStore,e);kg(t,r,null),Cg(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await bi(t,s)}catch(s){await Ei(s)}}async function VI(n,e,t){const r=ae(n);try{const s=await function(a,l){const c=ae(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(be(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,e);kg(r,e,t),Cg(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await bi(r,s)}catch(s){await Ei(s)}}function Cg(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function kg(n,e,t){const r=ae(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function zl(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Vg(n,r)})}function Vg(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(xc(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Kc(n))}function Cf(n,e,t){for(const r of t)r instanceof bg?(n.La.addReference(r.key,e),DI(n,r)):r instanceof Rg?(J("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Vg(n,r.key)):se()}function DI(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(J("SyncEngine","New document in limbo: "+t),n.xa.add(r),Kc(n))}function Kc(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new Z(ke.fromString(e)),r=n.qa.next();n.Na.set(r,new TI(t)),n.Oa=n.Oa.insert(t,r),vg(n.remoteStore,new Ln(Kt(sa(t.path)),r,"TargetPurposeLimboResolution",Ic.oe))}}async function bi(n,e,t){const r=ae(n),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{a.push(r.Ka(c,e,t).then(h=>{var d;if((h||t)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=t==null?void 0:t.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Mc.Wi(c.targetId,h);i.push(p)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(c,h){const d=ae(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>U.forEach(h,y=>U.forEach(y.$i,w=>d.persistence.referenceDelegate.addReference(p,y.targetId,w)).next(()=>U.forEach(y.Ui,w=>d.persistence.referenceDelegate.removeReference(p,y.targetId,w)))))}catch(p){if(!Ti(p))throw p;J("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const y=p.targetId;if(!p.fromCache){const w=d.os.get(y),C=w.snapshotVersion,P=w.withLastLimboFreeSnapshotVersion(C);d.os=d.os.insert(y,P)}}}(r.localStore,i))}async function NI(n,e){const t=ae(n);if(!t.currentUser.isEqual(e)){J("SyncEngine","User change. New user:",e.toKey());const r=await gg(t.localStore,e);t.currentUser=e,function(i,a){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new H(N.CANCELLED,a))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await bi(t,r.hs)}}function OI(n,e){const t=ae(n),r=t.Na.get(e);if(r&&r.va)return pe().add(r.key);{let s=pe();const i=t.Ma.get(e);if(!i)return s;for(const a of i){const l=t.Fa.get(a);s=s.unionWith(l.view.Va)}return s}}function Dg(n){const e=ae(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Pg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=OI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=CI.bind(null,e),e.Ca.d_=_I.bind(null,e.eventManager),e.Ca.$a=yI.bind(null,e.eventManager),e}function MI(n){const e=ae(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=kI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=VI.bind(null,e),e}class Oo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ha(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return $w(this.persistence,new Uw,e.initialUser,this.serializer)}Ga(e){return new xw(Oc.Zr,this.serializer)}Wa(e){return new Gw}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Oo.provider={build:()=>new Oo};class Gl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Pf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=NI.bind(null,this.syncEngine),await pI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new mI}()}createDatastore(e){const t=ha(e.databaseInfo.databaseId),r=function(i){return new Xw(i)}(e.databaseInfo);return function(i,a,l,c){return new tI(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new rI(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Pf(this.syncEngine,t,0),function(){return If.D()?new If:new Qw}())}createSyncEngine(e,t){return function(s,i,a,l,c,h,d){const p=new wI(s,i,a,l,c,h);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=ae(s);J("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Ai(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Gl.provider={build:()=>new Gl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class zc{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Tn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=ot.UNAUTHENTICATED,this.clientId=Lp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{J("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(J("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=$c(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ul(n,e){n.asyncQueue.verifyOperationInProgress(),J("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await gg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function kf(n,e){n.asyncQueue.verifyOperationInProgress();const t=await LI(n);J("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Af(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Af(e.remoteStore,s)),n._onlineComponents=e}async function LI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){J("FirestoreClient","Using user provided OfflineComponentProvider");try{await ul(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Yr("Error using user provided cache. Falling back to memory cache: "+t),await ul(n,new Oo)}}else J("FirestoreClient","Using default OfflineComponentProvider"),await ul(n,new Oo);return n._offlineComponents}async function Ng(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(J("FirestoreClient","Using user provided OnlineComponentProvider"),await kf(n,n._uninitializedComponentsProvider._online)):(J("FirestoreClient","Using default OnlineComponentProvider"),await kf(n,new Gl))),n._onlineComponents}function FI(n){return Ng(n).then(e=>e.syncEngine)}async function Mo(n){const e=await Ng(n),t=e.eventManager;return t.onListen=II.bind(null,e.syncEngine),t.onUnlisten=RI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=AI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=SI.bind(null,e.syncEngine),t}function UI(n,e,t={}){const r=new yn;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const d=new zc({next:y=>{d.Za(),a.enqueueAndForget(()=>qc(i,p));const w=y.docs.has(l);!w&&y.fromCache?h.reject(new H(N.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&y.fromCache&&c&&c.source==="server"?h.reject(new H(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(y)},error:y=>h.reject(y)}),p=new Hc(sa(l.path),d,{includeMetadataChanges:!0,_a:!0});return jc(i,p)}(await Mo(n),n.asyncQueue,e,t,r)),r.promise}function BI(n,e,t={}){const r=new yn;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const d=new zc({next:y=>{d.Za(),a.enqueueAndForget(()=>qc(i,p)),y.fromCache&&c.source==="server"?h.reject(new H(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(y)},error:y=>h.reject(y)}),p=new Hc(l,d,{includeMetadataChanges:!0,_a:!0});return jc(i,p)}(await Mo(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Og(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(n,e,t){if(!t)throw new H(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function $I(n,e,t,r){if(e===!0&&r===!0)throw new H(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Df(n){if(!Z.isDocumentKey(n))throw new H(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Nf(n){if(Z.isDocumentKey(n))throw new H(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function pa(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":se()}function Ct(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new H(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=pa(n);throw new H(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function jI(n,e){if(e<=0)throw new H(N.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$I("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Og((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new H(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new H(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new H(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ga{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Of({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Of(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new sT;switch(r.type){case"firstParty":return new lT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Vf.get(t);r&&(J("ComponentProvider","Removing Datastore"),Vf.delete(t),r.terminate())}(this),Promise.resolve()}}function qI(n,e,t,r={}){var s;const i=(n=Ct(n,ga))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&Yr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=ot.MOCK_USER;else{l=Ov(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new H(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ot(h)}n._authCredentials=new iT(new xp(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new en(this.firestore,e,this._query)}}class _t{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $n(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _t(this.firestore,e,this._key)}}class $n extends en{constructor(e,t,r){super(e,t,sa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _t(this.firestore,null,new Z(e))}withConverter(e){return new $n(this.firestore,e,this._path)}}function ks(n,e,...t){if(n=Le(n),Mg("collection","path",e),n instanceof ga){const r=ke.fromString(e,...t);return Nf(r),new $n(n,null,r)}{if(!(n instanceof _t||n instanceof $n))throw new H(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ke.fromString(e,...t));return Nf(r),new $n(n.firestore,null,r)}}function or(n,e,...t){if(n=Le(n),arguments.length===1&&(e=Lp.newId()),Mg("doc","path",e),n instanceof ga){const r=ke.fromString(e,...t);return Df(r),new _t(n,null,new Z(r))}{if(!(n instanceof _t||n instanceof $n))throw new H(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ke.fromString(e,...t));return Df(r),new _t(n.firestore,n instanceof $n?n.converter:null,new Z(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new _g(this,"async_queue_retry"),this.Vu=()=>{const r=cl();r&&J("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=cl();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=cl();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new yn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ti(e))throw e;J("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Tn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=Bc.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&se()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function xf(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class zn extends ga{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Mf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Mf(e),this._firestoreClient=void 0,await e}}}function WI(n,e){const t=typeof n=="object"?n:Sp(),r=typeof n=="string"?n:"(default)",s=Tc(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Dv("firestore");i&&qI(s,...i)}return s}function Ri(n){if(n._terminated)throw new H(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||HI(n),n._firestoreClient}function HI(n){var e,t,r;const s=n._freezeSettings(),i=function(l,c,h,d){return new TT(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Og(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new xI(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new rs(tt.fromBase64String(e))}catch(t){throw new H(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new rs(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new H(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Gc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new H(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new H(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ee(this._lat,e._lat)||Ee(this._long,e._long)}}/**
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
 */class Qc{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI=/^__.*__$/;class zI{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Qn(e,this.data,this.fieldMask,t,this.fieldTransforms):new wi(e,this.data,t,this.fieldTransforms)}}class xg{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Qn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Lg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se()}}class Yc{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Yc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return xo(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Lg(this.Cu)&&KI.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class GI{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ha(e)}Qu(e,t,r,s=!1){return new Yc({Cu:e,methodName:t,qu:r,path:Xe.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ya(n){const e=n._freezeSettings(),t=ha(n._databaseId);return new GI(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Fg(n,e,t,r,s,i={}){const a=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);Xc("Data must be an object, but it was:",a,r);const l=Bg(r,a);let c,h;if(i.merge)c=new wt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const y=Ql(e,p,t);if(!a.contains(y))throw new H(N.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);jg(d,y)||d.push(y)}c=new wt(d),h=a.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=a.fieldTransforms;return new zI(new yt(l),c,h)}class va extends _a{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof va}}class Jc extends _a{_toFieldTransform(e){return new KT(e.path,new ui)}isEqual(e){return e instanceof Jc}}function QI(n,e,t,r){const s=n.Qu(1,e,t);Xc("Data must be an object, but it was:",s,r);const i=[],a=yt.empty();Er(r,(c,h)=>{const d=Zc(e,c,t);h=Le(h);const p=s.Nu(d);if(h instanceof va)i.push(d);else{const y=Si(h,p);y!=null&&(i.push(d),a.set(d,y))}});const l=new wt(i);return new xg(a,l,s.fieldTransforms)}function YI(n,e,t,r,s,i){const a=n.Qu(1,e,t),l=[Ql(e,r,t)],c=[s];if(i.length%2!=0)throw new H(N.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<i.length;y+=2)l.push(Ql(e,i[y])),c.push(i[y+1]);const h=[],d=yt.empty();for(let y=l.length-1;y>=0;--y)if(!jg(h,l[y])){const w=l[y];let C=c[y];C=Le(C);const P=a.Nu(w);if(C instanceof va)h.push(w);else{const k=Si(C,P);k!=null&&(h.push(w),d.set(w,k))}}const p=new wt(h);return new xg(d,p,a.fieldTransforms)}function Ug(n,e,t,r=!1){return Si(t,n.Qu(r?4:3,e))}function Si(n,e){if($g(n=Le(n)))return Xc("Unsupported field value:",e,n),Bg(n,e);if(n instanceof _a)return function(r,s){if(!Lg(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=Si(l,s.Lu(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Le(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return qT(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ke.fromDate(r);return{timestampValue:Do(s.serializer,i)}}if(r instanceof Ke){const i=new Ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Do(s.serializer,i)}}if(r instanceof Gc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof rs)return{bytesValue:lg(s.serializer,r._byteString)};if(r instanceof _t){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Dc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Qc)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return Cc(l.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${pa(r)}`)}(n,e)}function Bg(n,e){const t={};return Fp(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Er(n,(r,s)=>{const i=Si(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function $g(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ke||n instanceof Gc||n instanceof rs||n instanceof _t||n instanceof _a||n instanceof Qc)}function Xc(n,e,t){if(!$g(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=pa(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function Ql(n,e,t){if((e=Le(e))instanceof ma)return e._internalPath;if(typeof e=="string")return Zc(n,e);throw xo("Field path arguments must be of type string or ",n,!1,void 0,t)}const JI=new RegExp("[~\\*/\\[\\]]");function Zc(n,e,t){if(e.search(JI)>=0)throw xo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ma(...e.split("."))._internalPath}catch{throw xo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function xo(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new H(N.INVALID_ARGUMENT,l+n+c)}function jg(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new XI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ea("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class XI extends eu{data(){return super.data()}}function Ea(n,e){return typeof e=="string"?Zc(n,e):e instanceof ma?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new H(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class tu{}class Ta extends tu{}function no(n,e,...t){let r=[];e instanceof tu&&r.push(e),r=r.concat(t),function(i){const a=i.filter(c=>c instanceof nu).length,l=i.filter(c=>c instanceof wa).length;if(a>1||a>0&&l>0)throw new H(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class wa extends Ta{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new wa(e,t,r)}_apply(e){const t=this._parse(e);return Wg(e._query,t),new en(e.firestore,e.converter,Bl(e._query,t))}_parse(e){const t=ya(e.firestore);return function(i,a,l,c,h,d,p){let y;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new H(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Uf(p,d);const w=[];for(const C of p)w.push(Ff(c,i,C));y={arrayValue:{values:w}}}else y=Ff(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Uf(p,d),y=Ug(l,a,p,d==="in"||d==="not-in");return $e.create(h,d,y)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function ZI(n,e,t){const r=e,s=Ea("where",n);return wa._create(s,r,t)}class nu extends tu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new nu(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:xt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const l=i.getFlattenedFilters();for(const c of l)Wg(a,c),a=Bl(a,c)}(e._query,t),new en(e.firestore,e.converter,Bl(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ru extends Ta{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new ru(e,t)}_apply(e){const t=function(s,i,a){if(s.startAt!==null)throw new H(N.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new H(N.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ci(i,a)}(e._query,this._field,this._direction);return new en(e.firestore,e.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new Tr(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function eA(n,e="asc"){const t=e,r=Ea("orderBy",n);return ru._create(r,t)}class su extends Ta{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new su(e,t,r)}_apply(e){return new en(e.firestore,e.converter,ko(e._query,this._limit,this._limitType))}}function Lf(n){return jI("limit",n),su._create("limit",n,"F")}class iu extends Ta{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new iu(e,t,r)}_apply(e){const t=nA(e,this.type,this._docOrFields,this._inclusive);return new en(e.firestore,e.converter,function(s,i){return new Tr(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(e._query,t))}}function tA(...n){return iu._create("startAfter",n,!1)}function nA(n,e,t,r){if(t[0]=Le(t[0]),t[0]instanceof eu)return function(i,a,l,c,h){if(!c)throw new H(N.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${l}().`);const d=[];for(const p of jr(i))if(p.field.isKeyField())d.push(Co(a,c.key));else{const y=c.data.field(p.field);if(ra(y))throw new H(N.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+p.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(y===null){const w=p.field.canonicalString();throw new H(N.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${w}' (used as the orderBy) does not exist.`)}d.push(y)}return new es(d,h)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const s=ya(n.firestore);return function(a,l,c,h,d,p){const y=a.explicitOrderBy;if(d.length>y.length)throw new H(N.INVALID_ARGUMENT,`Too many arguments provided to ${h}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const w=[];for(let C=0;C<d.length;C++){const P=d[C];if(y[C].field.isKeyField()){if(typeof P!="string")throw new H(N.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${h}(), but got a ${typeof P}`);if(!Pc(a)&&P.indexOf("/")!==-1)throw new H(N.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${h}() must be a plain document ID, but '${P}' contains a slash.`);const k=a.path.child(ke.fromString(P));if(!Z.isDocumentKey(k))throw new H(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${h}() must result in a valid document path, but '${k}' is not because it contains an odd number of segments.`);const O=new Z(k);w.push(Co(l,O))}else{const k=Ug(c,h,P);w.push(k)}}return new es(w,p)}(n._query,n.firestore._databaseId,s,e,t,r)}}function Ff(n,e,t){if(typeof(t=Le(t))=="string"){if(t==="")throw new H(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Pc(e)&&t.indexOf("/")!==-1)throw new H(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ke.fromString(t));if(!Z.isDocumentKey(r))throw new H(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Co(n,new Z(r))}if(t instanceof _t)return Co(n,t._key);throw new H(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${pa(t)}.`)}function Uf(n,e){if(!Array.isArray(n)||n.length===0)throw new H(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Wg(n,e){const t=function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new H(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class rA{convertValue(e,t="none"){switch(yr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(_r(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw se()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Er(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>xe(a.doubleValue));return new Qc(i)}convertGeoPoint(e){return new Gc(xe(e.latitude),xe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ac(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(oi(e));default:return null}}convertTimestamp(e){const t=Hn(e);return new Ke(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ke.fromString(e);be(pg(r));const s=new ai(r.get(1),r.get(3)),i=new Z(r.popFirst(5));return s.isEqual(t)||Tn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Kg extends eu{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ho(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ea("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class ho extends Kg{data(e={}){return super.data(e)}}class zg{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Bs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ho(this._firestore,this._userDataWriter,r.key,r,new Bs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new H(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new ho(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Bs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new ho(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Bs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:sA(l.type),doc:c,oldIndex:h,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function sA(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return se()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iA(n){n=Ct(n,_t);const e=Ct(n.firestore,zn);return UI(Ri(e),n._key).then(t=>Gg(e,n,t))}class ou extends rA{constructor(e){super(),this.firestore=e}convertBytes(e){return new rs(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new _t(this.firestore,null,t)}}function Bf(n){n=Ct(n,en);const e=Ct(n.firestore,zn),t=Ri(e),r=new ou(e);return qg(n._query),BI(t,n._query).then(s=>new zg(e,r,n,s))}function $f(n,e,t){n=Ct(n,_t);const r=Ct(n.firestore,zn),s=Hg(n.converter,e,t);return au(r,[Fg(ya(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,At.none())])}function oA(n){return au(Ct(n.firestore,zn),[new ca(n._key,At.none())])}function jf(n,...e){var t,r,s;n=Le(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||xf(e[a])||(i=e[a],a++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(xf(e[a])){const p=e[a];e[a]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[a+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[a+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,h,d;if(n instanceof _t)h=Ct(n.firestore,zn),d=sa(n._key.path),c={next:p=>{e[a]&&e[a](Gg(h,n,p))},error:e[a+1],complete:e[a+2]};else{const p=Ct(n,en);h=Ct(p.firestore,zn),d=p._query;const y=new ou(h);c={next:w=>{e[a]&&e[a](new zg(h,y,p,w))},error:e[a+1],complete:e[a+2]},qg(n._query)}return function(y,w,C,P){const k=new zc(P),O=new Hc(w,k,C);return y.asyncQueue.enqueueAndForget(async()=>jc(await Mo(y),O)),()=>{k.Za(),y.asyncQueue.enqueueAndForget(async()=>qc(await Mo(y),O))}}(Ri(h),d,l,c)}function au(n,e){return function(r,s){const i=new yn;return r.asyncQueue.enqueueAndForget(async()=>PI(await FI(r),s,i)),i.promise}(Ri(n),e)}function Gg(n,e,t){const r=t.docs.get(e._key),s=new ou(n);return new Kg(n,s,e._key,r,new Bs(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=ya(e)}set(e,t,r){this._verifyNotCommitted();const s=hl(e,this._firestore),i=Hg(s.converter,t,r),a=Fg(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,At.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=hl(e,this._firestore);let a;return a=typeof(t=Le(t))=="string"||t instanceof ma?YI(this._dataReader,"WriteBatch.update",i._key,t,r,s):QI(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(a.toMutation(i._key,At.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=hl(e,this._firestore);return this._mutations=this._mutations.concat(new ca(t._key,At.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new H(N.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function hl(n,e){if((n=Le(n)).firestore!==e)throw new H(N.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function fl(){return new Jc("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qf(n){return Ri(n=Ct(n,zn)),new aA(n,e=>au(n,e))}(function(e,t=!0){(function(s){os=s})(is),Qr(new gr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new zn(new oT(r.getProvider("auth-internal")),new uT(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new H(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ai(h.options.projectId,d)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Bn(Zh,"4.7.3",e),Bn(Zh,"4.7.3","esm2017")})();var lA="firebase",cA="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bn(lA,cA,"app");function lu(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Qg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uA=Qg,Yg=new yi("auth","Firebase",Qg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo=new vc("@firebase/auth");function hA(n,...e){Lo.logLevel<=ge.WARN&&Lo.warn(`Auth (${is}): ${n}`,...e)}function fo(n,...e){Lo.logLevel<=ge.ERROR&&Lo.error(`Auth (${is}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(n,...e){throw cu(n,...e)}function Gt(n,...e){return cu(n,...e)}function Jg(n,e,t){const r=Object.assign(Object.assign({},uA()),{[e]:t});return new yi("auth","Firebase",r).create(e,{appName:n.name})}function jn(n){return Jg(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function cu(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Yg.create(n,...e)}function re(n,e,...t){if(!n)throw cu(e,...t)}function dn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw fo(e),new Error(e)}function In(n,e){n||dn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function fA(){return Wf()==="http:"||Wf()==="https:"}function Wf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fA()||Fv()||"connection"in navigator)?navigator.onLine:!0}function pA(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,t){this.shortDelay=e,this.longDelay=t,In(t>e,"Short delay should be less than long delay!"),this.isMobile=Mv()||Uv()}get(){return dA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(n,e){In(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const mA=new Pi(3e4,6e4);function Ir(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Yn(n,e,t,r,s={}){return Zg(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=vi(Object.assign({key:n.config.apiKey},a)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:c},i);return Lv()||(h.referrerPolicy="no-referrer"),Xg.fetch()(em(n,n.config.apiHost,t,l),h)})}async function Zg(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},gA),e);try{const s=new yA(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw ro(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ro(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw ro(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw ro(n,"user-disabled",a);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Jg(n,d,h);Lt(n,d)}}catch(s){if(s instanceof bn)throw s;Lt(n,"network-request-failed",{message:String(s)})}}async function Ia(n,e,t,r,s={}){const i=await Yn(n,e,t,r,s);return"mfaPendingCredential"in i&&Lt(n,"multi-factor-auth-required",{_serverResponse:i}),i}function em(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?uu(n.config,s):`${n.config.apiScheme}://${s}`}function _A(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Gt(this.auth,"network-request-failed")),mA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ro(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Gt(n,e,r);return s.customData._tokenResponse=t,s}function Hf(n){return n!==void 0&&n.enterprise!==void 0}class vA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return _A(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function EA(n,e){return Yn(n,"GET","/v2/recaptchaConfig",Ir(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TA(n,e){return Yn(n,"POST","/v1/accounts:delete",e)}async function tm(n,e){return Yn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wA(n,e=!1){const t=Le(n),r=await t.getIdToken(e),s=hu(r);re(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Xs(dl(s.auth_time)),issuedAtTime:Xs(dl(s.iat)),expirationTime:Xs(dl(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function dl(n){return Number(n)*1e3}function hu(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return fo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ep(t);return s?JSON.parse(s):(fo("Failed to decode base64 JWT payload"),null)}catch(s){return fo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Kf(n){const e=hu(n);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function di(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof bn&&IA(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function IA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Jl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xs(this.lastLoginAt),this.creationTime=Xs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fo(n){var e;const t=n.auth,r=await n.getIdToken(),s=await di(n,tm(t,{idToken:r}));re(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?nm(i.providerUserInfo):[],l=RA(n.providerData,a),c=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Jl(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,p)}async function bA(n){const e=Le(n);await Fo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RA(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function nm(n){return n.map(e=>{var{providerId:t}=e,r=lu(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SA(n,e){const t=await Zg(n,{},async()=>{const r=vi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=em(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Xg.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function PA(n,e){return Yn(n,"POST","/v2/accounts:revokeToken",Ir(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Kf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){re(e.length!==0,"internal-error");const t=Kf(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await SA(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Wr;return r&&(re(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(re(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(re(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wr,this.toJSON())}_performRefresh(){return dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(n,e){re(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class pn{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=lu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new AA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Jl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await di(this,this.stsTokenManager.getToken(this.auth,e));return re(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return wA(this,e)}reload(){return bA(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new pn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Fo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(fn(this.auth.app))return Promise.reject(jn(this.auth));const e=await this.getIdToken();return await di(this,TA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,l,c,h,d;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,y=(s=t.email)!==null&&s!==void 0?s:void 0,w=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,C=(a=t.photoURL)!==null&&a!==void 0?a:void 0,P=(l=t.tenantId)!==null&&l!==void 0?l:void 0,k=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,O=(h=t.createdAt)!==null&&h!==void 0?h:void 0,B=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:Q,emailVerified:z,isAnonymous:fe,providerData:he,stsTokenManager:T}=t;re(Q&&T,e,"internal-error");const m=Wr.fromJSON(this.name,T);re(typeof Q=="string",e,"internal-error"),kn(p,e.name),kn(y,e.name),re(typeof z=="boolean",e,"internal-error"),re(typeof fe=="boolean",e,"internal-error"),kn(w,e.name),kn(C,e.name),kn(P,e.name),kn(k,e.name),kn(O,e.name),kn(B,e.name);const v=new pn({uid:Q,auth:e,email:y,emailVerified:z,displayName:p,isAnonymous:fe,photoURL:C,phoneNumber:w,tenantId:P,stsTokenManager:m,createdAt:O,lastLoginAt:B});return he&&Array.isArray(he)&&(v.providerData=he.map(I=>Object.assign({},I))),k&&(v._redirectEventId=k),v}static async _fromIdTokenResponse(e,t,r=!1){const s=new Wr;s.updateFromServerResponse(t);const i=new pn({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Fo(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];re(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?nm(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Wr;l.updateFromIdToken(r);const c=new pn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Jl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf=new Map;function gn(n){In(n instanceof Function,"Expected a class definition");let e=zf.get(n);return e?(In(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,zf.set(n,e),e)}/**
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
 */class rm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}rm.type="NONE";const Gf=rm;/**
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
 */function po(n,e,t){return`firebase:${n}:${e}:${t}`}class Hr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=po(this.userKey,s.apiKey,i),this.fullPersistenceKey=po("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Hr(gn(Gf),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||gn(Gf);const a=po(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const d=await h._get(a);if(d){const p=pn._fromJSON(e,d);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Hr(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Hr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(am(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cm(e))return"Blackberry";if(um(e))return"Webos";if(im(e))return"Safari";if((e.includes("chrome/")||om(e))&&!e.includes("edge/"))return"Chrome";if(lm(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sm(n=ht()){return/firefox\//i.test(n)}function im(n=ht()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function om(n=ht()){return/crios\//i.test(n)}function am(n=ht()){return/iemobile/i.test(n)}function lm(n=ht()){return/android/i.test(n)}function cm(n=ht()){return/blackberry/i.test(n)}function um(n=ht()){return/webos/i.test(n)}function fu(n=ht()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function CA(n=ht()){var e;return fu(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kA(){return Bv()&&document.documentMode===10}function hm(n=ht()){return fu(n)||lm(n)||um(n)||cm(n)||/windows phone/i.test(n)||am(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(n,e=[]){let t;switch(n){case"Browser":t=Qf(ht());break;case"Worker":t=`${Qf(ht())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${is}/${r}`}/**
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
 */async function DA(n,e={}){return Yn(n,"GET","/v2/passwordPolicy",Ir(n,e))}/**
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
 */class MA{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yf(this),this.idTokenSubscription=new Yf(this),this.beforeStateQueue=new VA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=gn(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Hr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await tm(this,{idToken:e}),r=await pn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(fn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Fo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(fn(this.app))return Promise.reject(jn(this));const t=e?Le(e):null;return t&&re(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return fn(this.app)?Promise.reject(jn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return fn(this.app)?Promise.reject(jn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await DA(this),t=new OA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new yi("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await PA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&gn(e)||this._popupRedirectResolver;re(t,this,"argument-error"),this.redirectPersistenceManager=await Hr.create(this,[gn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&hA(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function cs(n){return Le(n)}class Yf{constructor(e){this.auth=e,this.observer=null,this.addObserver=Gv(t=>this.observer=t)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Aa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xA(n){Aa=n}function dm(n){return Aa.loadJS(n)}function LA(){return Aa.recaptchaEnterpriseScript}function FA(){return Aa.gapiScript}function UA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const BA="recaptcha-enterprise",$A="NO_RECAPTCHA";class jA{constructor(e){this.type=BA,this.auth=cs(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{EA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new vA(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,a,l){const c=window.grecaptcha;Hf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a($A)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,a)=>{r(this.auth).then(l=>{if(!t&&Hf(window.grecaptcha))s(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=LA();c.length!==0&&(c+=l),dm(c).then(()=>{s(l,i,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function Jf(n,e,t,r=!1){const s=new jA(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Xf(n,e,t,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Jf(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Jf(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qA(n,e){const t=Tc(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Ro(i,e??{}))return s;Lt(s,"already-initialized")}return t.initialize({options:e})}function WA(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(gn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function HA(n,e,t){const r=cs(n);re(r._canInitEmulator,r,"emulator-config-failed"),re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=pm(e),{host:a,port:l}=KA(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),zA()}function pm(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function KA(n){const e=pm(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Zf(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Zf(a)}}}function Zf(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function zA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return dn("not implemented")}_getIdTokenResponse(e){return dn("not implemented")}_linkToIdToken(e,t){return dn("not implemented")}_getReauthenticationResolver(e){return dn("not implemented")}}async function GA(n,e){return Yn(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QA(n,e){return Ia(n,"POST","/v1/accounts:signInWithPassword",Ir(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YA(n,e){return Ia(n,"POST","/v1/accounts:signInWithEmailLink",Ir(n,e))}async function JA(n,e){return Ia(n,"POST","/v1/accounts:signInWithEmailLink",Ir(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends du{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new pi(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new pi(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xf(e,t,"signInWithPassword",QA);case"emailLink":return YA(e,{email:this._email,oobCode:this._password});default:Lt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xf(e,r,"signUpPassword",GA);case"emailLink":return JA(e,{idToken:t,email:this._email,oobCode:this._password});default:Lt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kr(n,e){return Ia(n,"POST","/v1/accounts:signInWithIdp",Ir(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA="http://localhost";class vr extends du{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Lt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=lu(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new vr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Kr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Kr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Kr(e,t)}buildRequest(){const e={requestUri:XA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=vi(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function eb(n){const e=Ms(xs(n)).link,t=e?Ms(xs(e)).deep_link_id:null,r=Ms(xs(n)).deep_link_id;return(r?Ms(xs(r)).link:null)||r||t||e||n}class pu{constructor(e){var t,r,s,i,a,l;const c=Ms(xs(e)),h=(t=c.apiKey)!==null&&t!==void 0?t:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=ZA((s=c.mode)!==null&&s!==void 0?s:null);re(h&&d&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=eb(e);try{return new pu(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(){this.providerId=us.PROVIDER_ID}static credential(e,t){return pi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=pu.parseLink(t);return re(r,"argument-error"),pi._fromEmailAndCode(e,r.code,r.tenantId)}}us.PROVIDER_ID="password";us.EMAIL_PASSWORD_SIGN_IN_METHOD="password";us.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ci extends gm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends Ci{constructor(){super("facebook.com")}static credential(e){return vr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Ci{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return vr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return On.credential(t,r)}catch{return null}}}On.GOOGLE_SIGN_IN_METHOD="google.com";On.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends Ci{constructor(){super("github.com")}static credential(e){return vr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.GITHUB_SIGN_IN_METHOD="github.com";Mn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Ci{constructor(){super("twitter.com")}static credential(e,t){return vr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return xn.credential(t,r)}catch{return null}}}xn.TWITTER_SIGN_IN_METHOD="twitter.com";xn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await pn._fromIdTokenResponse(e,r,s),a=ed(r);return new ss({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=ed(r);return new ss({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function ed(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo extends bn{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Uo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Uo(e,t,r,s)}}function mm(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Uo._fromErrorAndOperation(n,i,e,r):i})}async function tb(n,e,t=!1){const r=await di(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ss._forOperation(n,"link",r)}/**
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
 */async function nb(n,e,t=!1){const{auth:r}=n;if(fn(r.app))return Promise.reject(jn(r));const s="reauthenticate";try{const i=await di(n,mm(r,s,e,n),t);re(i.idToken,r,"internal-error");const a=hu(i.idToken);re(a,r,"internal-error");const{sub:l}=a;return re(n.uid===l,r,"user-mismatch"),ss._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Lt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _m(n,e,t=!1){if(fn(n.app))return Promise.reject(jn(n));const r="signIn",s=await mm(n,r,e),i=await ss._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function rb(n,e){return _m(cs(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sb(n){const e=cs(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function ib(n,e,t){return fn(n.app)?Promise.reject(jn(n)):rb(Le(n),us.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&sb(n),r})}function ob(n,e,t,r){return Le(n).onIdTokenChanged(e,t,r)}function ab(n,e,t){return Le(n).beforeAuthStateChanged(e,t)}function lb(n,e,t,r){return Le(n).onAuthStateChanged(e,t,r)}function cb(n){return Le(n).signOut()}const Bo="__sak";/**
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
 */class ym{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Bo,"1"),this.storage.removeItem(Bo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub=1e3,hb=10;class vm extends ym{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=hm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);kA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,hb):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},ub)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}vm.type="LOCAL";const fb=vm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em extends ym{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Em.type="SESSION";const Tm=Em;/**
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
 */function db(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ba{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new ba(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(t.origin,i)),c=await db(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ba.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class pb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const h=gu("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const y=p;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(y.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(){return window}function gb(n){Qt().location.href=n}/**
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
 */function wm(){return typeof Qt().WorkerGlobalScope<"u"&&typeof Qt().importScripts=="function"}async function mb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _b(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function yb(){return wm()?self:null}/**
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
 */const Im="firebaseLocalStorageDb",vb=1,$o="firebaseLocalStorage",Am="fbase_key";class ki{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ra(n,e){return n.transaction([$o],e?"readwrite":"readonly").objectStore($o)}function Eb(){const n=indexedDB.deleteDatabase(Im);return new ki(n).toPromise()}function Xl(){const n=indexedDB.open(Im,vb);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore($o,{keyPath:Am})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains($o)?e(r):(r.close(),await Eb(),e(await Xl()))})})}async function td(n,e,t){const r=Ra(n,!0).put({[Am]:e,value:t});return new ki(r).toPromise()}async function Tb(n,e){const t=Ra(n,!1).get(e),r=await new ki(t).toPromise();return r===void 0?null:r.value}function nd(n,e){const t=Ra(n,!0).delete(e);return new ki(t).toPromise()}const wb=800,Ib=3;class bm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xl(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Ib)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ba._getInstance(yb()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await mb(),!this.activeServiceWorker)return;this.sender=new pb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_b()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xl();return await td(e,Bo,"1"),await nd(e,Bo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>td(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Tb(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>nd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ra(s,!1).getAll();return new ki(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bm.type="LOCAL";const Ab=bm;new Pi(3e4,6e4);/**
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
 */function bb(n,e){return e?gn(e):(re(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class mu extends du{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Kr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Kr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Rb(n){return _m(n.auth,new mu(n),n.bypassAuthState)}function Sb(n){const{auth:e,user:t}=n;return re(t,e,"internal-error"),nb(t,new mu(n),n.bypassAuthState)}async function Pb(n){const{auth:e,user:t}=n;return re(t,e,"internal-error"),tb(t,new mu(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Rb;case"linkViaPopup":case"linkViaRedirect":return Pb;case"reauthViaPopup":case"reauthViaRedirect":return Sb;default:Lt(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb=new Pi(2e3,1e4);class Mr extends Rm{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Mr.currentPopupAction&&Mr.currentPopupAction.cancel(),Mr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=gu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Cb.get())};e()}}Mr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb="pendingRedirect",go=new Map;class Vb extends Rm{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=go.get(this.auth._key());if(!e){try{const r=await Db(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}go.set(this.auth._key(),e)}return this.bypassAuthState||go.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Db(n,e){const t=Mb(e),r=Ob(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Nb(n,e){go.set(n._key(),e)}function Ob(n){return gn(n._redirectPersistence)}function Mb(n){return po(kb,n.config.apiKey,n.name)}async function xb(n,e,t=!1){if(fn(n.app))return Promise.reject(jn(n));const r=cs(n),s=bb(r,e),a=await new Vb(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb=10*60*1e3;class Fb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ub(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Sm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Gt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Lb&&this.cachedEventUids.clear(),this.cachedEventUids.has(rd(e))}saveEventToCache(e){this.cachedEventUids.add(rd(e)),this.lastProcessedEventTime=Date.now()}}function rd(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Sm({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ub(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sm(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const $b=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jb=/^https?/;async function qb(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Bb(n);for(const t of e)try{if(Wb(t))return}catch{}Lt(n,"unauthorized-domain")}function Wb(n){const e=Yl(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!jb.test(t))return!1;if($b.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Hb=new Pi(3e4,6e4);function sd(){const n=Qt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Kb(n){return new Promise((e,t)=>{var r,s,i;function a(){sd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sd(),t(Gt(n,"network-request-failed"))},timeout:Hb.get()})}if(!((s=(r=Qt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Qt().gapi)===null||i===void 0)&&i.load)a();else{const l=UA("iframefcb");return Qt()[l]=()=>{gapi.load?a():t(Gt(n,"network-request-failed"))},dm(`${FA()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw mo=null,e})}let mo=null;function zb(n){return mo=mo||Kb(n),mo}/**
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
 */const Gb=new Pi(5e3,15e3),Qb="__/auth/iframe",Yb="emulator/auth/iframe",Jb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Xb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zb(n){const e=n.config;re(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?uu(e,Yb):`https://${n.config.authDomain}/${Qb}`,r={apiKey:e.apiKey,appName:n.name,v:is},s=Xb.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${vi(r).slice(1)}`}async function eR(n){const e=await zb(n),t=Qt().gapi;return re(t,n,"internal-error"),e.open({where:document.body,url:Zb(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Jb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Gt(n,"network-request-failed"),l=Qt().setTimeout(()=>{i(a)},Gb.get());function c(){Qt().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
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
 */const tR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nR=500,rR=600,sR="_blank",iR="http://localhost";class id{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oR(n,e,t,r=nR,s=rR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},tR),{width:r.toString(),height:s.toString(),top:i,left:a}),h=ht().toLowerCase();t&&(l=om(h)?sR:t),sm(h)&&(e=e||iR,c.scrollbars="yes");const d=Object.entries(c).reduce((y,[w,C])=>`${y}${w}=${C},`,"");if(CA(h)&&l!=="_self")return aR(e||"",l),new id(null);const p=window.open(e||"",l,d);re(p,n,"popup-blocked");try{p.focus()}catch{}return new id(p)}function aR(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const lR="__/auth/handler",cR="emulator/auth/handler",uR=encodeURIComponent("fac");async function od(n,e,t,r,s,i){re(n.config.authDomain,n,"auth-domain-config-required"),re(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:is,eventId:s};if(e instanceof gm){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",zv(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))a[d]=p}if(e instanceof Ci){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await n._getAppCheckToken(),h=c?`#${uR}=${encodeURIComponent(c)}`:"";return`${hR(n)}?${vi(l).slice(1)}${h}`}function hR({config:n}){return n.emulator?uu(n,cR):`https://${n.authDomain}/${lR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl="webStorageSupport";class fR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tm,this._completeRedirectFn=xb,this._overrideRedirectResult=Nb}async _openPopup(e,t,r,s){var i;In((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await od(e,t,r,Yl(),s);return oR(e,a,gu())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await od(e,t,r,Yl(),s);return gb(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(In(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await eR(e),r=new Fb(e);return t.register("authEvent",s=>(re(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(pl,{type:pl},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[pl];a!==void 0&&t(!!a),Lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=qb(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return hm()||im()||fu()}}const dR=fR;var ad="@firebase/auth",ld="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gR(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function mR(n){Qr(new gr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;re(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fm(n)},h=new MA(r,s,i,c);return WA(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Qr(new gr("auth-internal",e=>{const t=cs(e.getProvider("auth").getImmediate());return(r=>new pR(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bn(ad,ld,gR(n)),Bn(ad,ld,"esm2017")}/**
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
 */const _R=5*60,yR=Ip("authIdTokenMaxAge")||_R;let cd=null;const vR=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>yR)return;const s=t==null?void 0:t.token;cd!==s&&(cd=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ER(n=Sp()){const e=Tc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=qA(n,{popupRedirectResolver:dR,persistence:[Ab,fb,Tm]}),r=Ip("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=vR(i.toString());ab(t,a,()=>a(t.currentUser)),ob(t,l=>a(l))}}const s=Tp("auth");return s&&HA(t,`http://${s}`),t}function TR(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}xA({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Gt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",TR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});mR("Browser");const wR={apiKey:"AIzaSyBTn3Z_B1MYRJ-hOsL0I94QWBq2xh3EdFs",authDomain:"henryshus.firebaseapp.com",projectId:"henryshus",storageBucket:"henryshus.firebasestorage.app",messagingSenderId:"877597619520",appId:"1:877597619520:web:61e33ff74b9f03aa45f6a5",measurementId:"G-ESKWZ556XM"},Pm=Rp(wR),Et=WI(Pm),gl=ER(Pm);function Cm(){const n=Be([]),e=Be([]),t=Be(!1);let r=null,s=null;function i(){r||(r=jf(ks(Et,"workstations"),w=>{const C=[];w.forEach(P=>{C.push({id:P.id,...P.data()})}),C.sort((P,k)=>P.name.localeCompare(k.name,"nb")),n.value=C},w=>console.error("Workstations error:",w)))}function a(){if(s)return;const w=no(ks(Et,"borrowRecords"),ZI("returnedAt","==",null));s=jf(w,C=>{const P=[];C.forEach(k=>{P.push({id:k.id,...k.data()})}),P.sort((k,O)=>{var B,Q;return(((B=O.borrowedAt)==null?void 0:B.toMillis())??0)-(((Q=k.borrowedAt)==null?void 0:Q.toMillis())??0)}),e.value=P},C=>console.error("Active borrows error:",C))}Jo(()=>{r&&r(),s&&s()});async function l(w,C){const P=qf(Et),k=or(ks(Et,"borrowRecords")),O=or(Et,"workstations",w);P.update(O,{status:"borrowed",borrower:C,borrowedAt:fl(),currentBorrowRecord:k.id}),P.set(k,{workstation:w,borrower:C,borrowedAt:fl(),returnedAt:null}),await P.commit()}async function c(w){const C=or(Et,"workstations",w),P=await iA(C);if(!P.exists())return;const k=P.data().currentBorrowRecord,O=qf(Et);O.update(C,{status:"available",borrower:null,borrowedAt:null,currentBorrowRecord:null}),k&&O.update(or(Et,"borrowRecords",k),{returnedAt:fl()}),await O.commit()}async function h(w=20,C){let P=no(ks(Et,"borrowRecords"),eA("borrowedAt","desc"),Lf(w));C&&(P=no(P,tA(C)));const k=await Bf(P),O=[];let B=null;return k.forEach(Q=>{O.push({id:Q.id,...Q.data()}),B=Q}),{records:O,lastVisible:B}}async function d(){if(!(await Bf(no(ks(Et,"workstations"),Lf(1)))).empty)return;const C=[{name:"PC 1",keyboard:"Keyboard 1",mouse:"Mouse 1"},{name:"PC 2",keyboard:"Keyboard 2",mouse:"Mouse 2"},{name:"PC 3",keyboard:"Keyboard 3",mouse:"Mouse 3"}];for(const P of C)await $f(or(Et,"workstations",P.name),{...P,status:"available",borrower:null,borrowedAt:null,currentBorrowRecord:null})}async function p(w,C,P){await $f(or(Et,"workstations",w),{name:w,keyboard:C||"",mouse:P||"",status:"available",borrower:null,borrowedAt:null,currentBorrowRecord:null})}async function y(w){await oA(or(Et,"workstations",w))}return{workstations:n,activeBorrows:e,loading:t,subscribeWorkstations:i,subscribeActiveBorrows:a,borrowWorkstation:l,returnWorkstation:c,getHistory:h,seedDefaultWorkstations:d,addWorkstation:p,removeWorkstation:y}}const IR={style:{display:"flex","flex-direction":"column","min-height":"100dvh"}},AR={class:"header"},bR={class:"content"},RR={key:0,class:"empty-state"},SR={key:1,class:"ws-grid"},PR=["onClick","onKeydown"],CR={class:"ws-name"},kR={key:0,class:"ws-detail"},VR={key:1,class:"ws-borrower"},DR={class:"modal"},NR={class:"form-group"},OR={class:"modal-items"},MR={class:"modal-actions"},xR=["disabled"],LR=Qo({__name:"StudentView",setup(n){const e=It("currentView"),t=It("showToast"),r=It("loading"),{workstations:s,subscribeWorkstations:i,borrowWorkstation:a}=Cm(),l=Be(!1),c=Be(null),h=Be(""),d=Be(null),p=gp(()=>s.value.find(P=>P.id===c.value));function y(P){c.value=P,h.value="",l.value=!0,xd(()=>{var k;return(k=d.value)==null?void 0:k.focus()})}function w(){l.value=!1,c.value=null,h.value=""}async function C(){const P=h.value.trim();if(!(!P||!c.value)){r.value=!0;try{await a(c.value,P),l.value=!1,t(`Du låner ${c.value}`,"success"),c.value=null,h.value=""}catch(k){console.error(k),t("Kunne ikke fullføre lånet","error")}finally{r.value=!1}}}return pc(()=>i()),(P,k)=>(de(),Te("div",IR,[j("header",AR,[k[2]||(k[2]=j("div",null,[j("div",{class:"header-title"},"Lån utstyr"),j("div",{class:"header-subtitle"},"Trykk på en ledig enhet")],-1)),j("button",{class:"btn-admin-link",onClick:k[0]||(k[0]=O=>e.value="login")},"Admin")]),j("main",bR,[ur(s).length===0?(de(),Te("p",RR,"Laster...")):(de(),Te("div",SR,[(de(!0),Te(lt,null,Ur(ur(s),O=>(de(),Te("div",{key:O.id,class:mn(["ws-card",O.status]),tabindex:"0",role:"button",onClick:B=>O.status==="available"&&y(O.id),onKeydown:Bh(B=>O.status==="available"&&y(O.id),["enter"])},[k[3]||(k[3]=j("div",{class:"ws-emoji"},"💻",-1)),j("div",CR,He(O.name),1),O.keyboard||O.mouse?(de(),Te("div",kR,He([O.keyboard,O.mouse].filter(Boolean).join(" · ")),1)):Wt("",!0),O.status==="borrowed"&&O.borrower?(de(),Te("div",VR,He(O.borrower),1)):Wt("",!0),j("div",{class:mn(["ws-badge",O.status])},He(O.status==="available"?"Ledig":"Opptatt"),3)],42,PR))),128))]))]),(de(),Gs(Y_,{to:"body"},[l.value&&p.value?(de(),Te("div",{key:0,class:"modal-overlay",onClick:yc(w,["self"])},[j("div",DR,[j("h3",null,He(p.value.name),1),k[5]||(k[5]=j("p",{class:"modal-sub"},"Skriv inn navnet ditt for å låne",-1)),j("div",NR,[k[4]||(k[4]=j("label",{for:"name-input"},"Ditt navn",-1)),ln(j("input",{id:"name-input",ref_key:"nameInput",ref:d,"onUpdate:modelValue":k[1]||(k[1]=O=>h.value=O),class:"input",placeholder:"Skriv her...",autocomplete:"name",onKeydown:Bh(C,["enter"])},null,544),[[$r,h.value]])]),j("ul",OR,[(de(!0),Te(lt,null,Ur([p.value.name,p.value.keyboard,p.value.mouse].filter(Boolean),O=>(de(),Te("li",{key:O},He(O),1))),128))]),j("div",MR,[j("button",{class:"btn btn-primary btn-full",disabled:!h.value.trim(),onClick:C}," Bekreft lån ",8,xR),j("button",{class:"btn btn-secondary btn-full",onClick:w},"Avbryt")])])])):Wt("",!0)]))]))}}),ml=Be(null);let Vs=null;function km(){Vs||(Vs=lb(gl,r=>{ml.value=r})),Jo(()=>{Vs&&(Vs(),Vs=null)});async function n(r,s){await ib(gl,r,s)}async function e(){await cb(gl)}function t(){return ml.value!==null}return{currentUser:ml,login:n,logout:e,isAdmin:t}}const FR={class:"view active"},UR={class:"header"},BR={class:"header-top"},$R={class:"content"},jR={class:"card login-card"},qR={class:"form-group"},WR={class:"form-group"},HR={key:0,class:"error-message"},KR=Qo({__name:"LoginView",setup(n){const e=It("currentView");It("showToast");const t=It("loading"),{login:r}=km(),s=Be(""),i=Be(""),a=Be("");async function l(){a.value="",t.value=!0;try{await r(s.value,i.value),e.value="admin"}catch(c){const h=c.code;h==="auth/user-not-found"?a.value="Bruker ikke funnet":h==="auth/wrong-password"?a.value="Feil passord":h==="auth/invalid-email"?a.value="Ugyldig e-post":h==="auth/too-many-requests"?a.value="For mange forsøk. Prøv igjen senere.":a.value="Feil e-post eller passord"}finally{t.value=!1}}return(c,h)=>(de(),Te("div",FR,[j("header",UR,[j("div",BR,[j("button",{class:"btn-text back-btn",onClick:h[0]||(h[0]=d=>e.value="student")}," ← Tilbake "),h[3]||(h[3]=j("h1",{class:"header-title"},"Admin",-1))])]),j("main",$R,[j("section",jR,[j("form",{onSubmit:yc(l,["prevent"])},[j("div",qR,[h[4]||(h[4]=j("label",{for:"login-email"},"E-post",-1)),ln(j("input",{id:"login-email","onUpdate:modelValue":h[1]||(h[1]=d=>s.value=d),class:"input",type:"email",placeholder:"admin@example.com",autocomplete:"email",required:""},null,512),[[$r,s.value]])]),j("div",WR,[h[5]||(h[5]=j("label",{for:"login-password"},"Passord",-1)),ln(j("input",{id:"login-password","onUpdate:modelValue":h[2]||(h[2]=d=>i.value=d),class:"input",type:"password",placeholder:"Passord",autocomplete:"current-password",required:""},null,512),[[$r,i.value]])]),h[6]||(h[6]=j("button",{type:"submit",class:"btn btn-primary btn-full"},"Logg inn",-1)),a.value?(de(),Te("p",HR,He(a.value),1)):Wt("",!0)],32)])])]))}}),zR={class:"view active"},GR={class:"content"},QR={class:"admin-tabs"},YR={key:0,class:"empty-state"},JR={key:1,class:"borrows-list"},XR={class:"borrow-card-info"},ZR={class:"borrow-card-time"},e0=["onClick"],t0={key:0,class:"empty-state"},n0={key:1,class:"borrows-list"},r0={class:"borrow-card-info"},s0={class:"borrow-card-time"},i0={key:0},o0={class:"workstations-manage-list"},a0={class:"ws-name"},l0={class:"ws-status"},c0=["onClick"],u0={key:0,class:"empty-state"},h0={class:"form-group"},f0={class:"form-group"},d0={class:"form-group"},p0=Qo({__name:"AdminView",setup(n){const e=It("currentView"),t=It("showToast"),r=It("loading"),{logout:s}=km(),{workstations:i,activeBorrows:a,subscribeWorkstations:l,subscribeActiveBorrows:c,returnWorkstation:h,getHistory:d,seedDefaultWorkstations:p,addWorkstation:y,removeWorkstation:w}=Cm(),C=Be("borrows"),P=Be([]),k=Be(null),O=Be(""),B=Be(""),Q=Be("");async function z(){await s(),e.value="student"}async function fe(_){if(confirm(`Returner ${_}?`)){r.value=!0;try{await h(_),t(`${_} er returnert`,"success")}catch(Y){console.error(Y),t("Kunne ikke returnere","error")}finally{r.value=!1}}}async function he(_=!1){r.value=!0;try{const Y=await d(20,_?k.value:null);k.value=Y.lastVisible,_?P.value.push(...Y.records):P.value=Y.records}catch(Y){console.error(Y),t("Kunne ikke laste historikk","error")}finally{r.value=!1}}async function T(){if(confirm("Sett inn standardenheter (PC 1, PC 2, PC 3)?")){r.value=!0;try{await p(),t("Standardenheter er lagt til","success")}catch(_){console.error(_),t("Kunne ikke sette inn enheter","error")}finally{r.value=!1}}}async function m(){if(O.value.trim()){r.value=!0;try{await y(O.value.trim(),B.value.trim(),Q.value.trim()),t(`${O.value} er lagt til`,"success"),O.value="",B.value="",Q.value=""}catch(_){console.error(_),t("Kunne ikke legge til enheten","error")}finally{r.value=!1}}}async function v(_){if(confirm(`Fjern ${_}?`)){r.value=!0;try{await w(_),t(`${_} er fjernet`,"success")}catch(Y){console.error(Y),t("Kunne ikke fjerne enheten","error")}finally{r.value=!1}}}function I(_){C.value=_,_==="history"&&(P.value=[],k.value=null,he())}function b(_){if(!_)return"—";const Y=_.toDate?_.toDate():new Date(_);return`${String(Y.getDate()).padStart(2,"0")}.${String(Y.getMonth()+1).padStart(2,"0")} ${String(Y.getHours()).padStart(2,"0")}:${String(Y.getMinutes()).padStart(2,"0")}`}function R(_){if(!_)return"—";const Y=_.toDate?_.toDate():new Date(_);return`${String(Y.getDate()).padStart(2,"0")}.${String(Y.getMonth()+1).padStart(2,"0")}.${Y.getFullYear()} ${String(Y.getHours()).padStart(2,"0")}:${String(Y.getMinutes()).padStart(2,"0")}`}return pc(()=>{l(),c()}),(_,Y)=>(de(),Te("div",zR,[j("header",{class:"header"},[j("div",{class:"header-row"},[Y[7]||(Y[7]=j("h1",{class:"header-title"},"Admin",-1)),j("button",{class:"btn-text",onClick:z},"Logg ut")])]),j("main",GR,[j("ul",QR,[j("li",null,[j("button",{class:mn(["tab-btn",{active:C.value==="borrows"}]),onClick:Y[0]||(Y[0]=ue=>I("borrows"))},"Utlån",2)]),j("li",null,[j("button",{class:mn(["tab-btn",{active:C.value==="history"}]),onClick:Y[1]||(Y[1]=ue=>I("history"))},"Historikk",2)]),j("li",null,[j("button",{class:mn(["tab-btn",{active:C.value==="manage"}]),onClick:Y[2]||(Y[2]=ue=>I("manage"))},"Enheter",2)])]),ln(j("section",null,[Y[8]||(Y[8]=j("h2",{class:"section-title"},"Utlånt utstyr",-1)),ur(a).length===0?(de(),Te("div",YR,"Ingen utlånt utstyr")):(de(),Te("div",JR,[(de(!0),Te(lt,null,Ur(ur(a),ue=>(de(),Te("div",{key:ue.id,class:"borrow-card"},[j("div",XR,[j("h4",null,He(ue.workstation),1),j("p",null,"Lånt av: "+He(ue.borrower),1),j("div",ZR,He(b(ue.borrowedAt)),1)]),j("button",{class:"btn btn-danger btn-sm",onClick:je=>fe(ue.workstation)},"Returner",8,e0)]))),128))]))],512),[[Xa,C.value==="borrows"]]),ln(j("section",null,[Y[9]||(Y[9]=j("h2",{class:"section-title"},"Historikk",-1)),P.value.length===0?(de(),Te("div",t0,"Ingen historikk")):(de(),Te("div",n0,[(de(!0),Te(lt,null,Ur(P.value,ue=>(de(),Te("div",{key:ue.id,class:"borrow-card"},[j("div",r0,[j("h4",null,He(ue.workstation),1),j("p",null,"Lånt av: "+He(ue.borrower),1),j("div",s0,[fp(" Lånt: "+He(R(ue.borrowedAt))+" ",1),ue.returnedAt?(de(),Te("span",i0," | Returnert: "+He(R(ue.returnedAt)),1)):Wt("",!0)])]),j("span",{style:Ko([{"font-size":"0.8125rem","font-weight":"600"},{color:ue.returnedAt?"var(--green)":"var(--red)"}])},He(ue.returnedAt?"Returnert":"Aktiv"),5)]))),128)),P.value.length>=20?(de(),Te("button",{key:0,class:"btn btn-secondary btn-full",onClick:Y[3]||(Y[3]=ue=>he(!0))},"Last flere")):Wt("",!0)]))],512),[[Xa,C.value==="history"]]),ln(j("section",null,[Y[15]||(Y[15]=j("h2",{class:"section-title"},"Administrer enheter",-1)),j("div",o0,[(de(!0),Te(lt,null,Ur(ur(i),ue=>(de(),Te("div",{key:ue.id,class:"workstation-manage-item"},[j("div",null,[j("div",a0,He(ue.name),1),j("div",l0,He(ue.status==="available"?"Ledig":"Utlånt"),1)]),ue.status==="available"?(de(),Te("button",{key:0,class:"btn-text",onClick:je=>v(ue.name)},"Fjern",8,c0)):Wt("",!0)]))),128)),ur(i).length===0?(de(),Te("div",u0,"Ingen enheter")):Wt("",!0)]),j("button",{class:"btn btn-secondary btn-full",style:{"margin-bottom":"16px"},onClick:T}," Sett inn standardenheter (PC 1-3) "),j("form",{class:"add-workstation-form card",onSubmit:yc(m,["prevent"])},[Y[13]||(Y[13]=j("h3",null,"Legg til ny enhet",-1)),j("div",h0,[Y[10]||(Y[10]=j("label",{for:"new-name"},"Navn",-1)),ln(j("input",{id:"new-name","onUpdate:modelValue":Y[4]||(Y[4]=ue=>O.value=ue),class:"input",placeholder:"F.eks. PC 4",required:""},null,512),[[$r,O.value]])]),j("div",f0,[Y[11]||(Y[11]=j("label",{for:"new-keyboard"},"Tastatur",-1)),ln(j("input",{id:"new-keyboard","onUpdate:modelValue":Y[5]||(Y[5]=ue=>B.value=ue),class:"input",placeholder:"F.eks. Tastatur 4"},null,512),[[$r,B.value]])]),j("div",d0,[Y[12]||(Y[12]=j("label",{for:"new-mouse"},"Mus",-1)),ln(j("input",{id:"new-mouse","onUpdate:modelValue":Y[6]||(Y[6]=ue=>Q.value=ue),class:"input",placeholder:"F.eks. Mus 4"},null,512),[[$r,Q.value]])]),Y[14]||(Y[14]=j("button",{type:"submit",class:"btn btn-primary"},"Legg til",-1))],32)],512),[[Xa,C.value==="manage"]])])]))}}),g0={id:"toast-container"},m0={key:0,id:"loading-overlay"},_0=Qo({__name:"App",setup(n){const e=Be("student"),t=Be([]);let r=0;function s(a,l="info"){const c=++r;t.value.push({id:c,message:a,type:l}),setTimeout(()=>{const h=t.value.findIndex(d=>d.id===c);h!==-1&&t.value.splice(h,1)},3e3)}io("showToast",s),io("currentView",e);const i=Be(!1);return io("loading",i),(a,l)=>(de(),Te(lt,null,[j("div",g0,[(de(!0),Te(lt,null,Ur(t.value,c=>(de(),Te("div",{key:c.id,class:mn(["toast",c.type])},He(c.message),3))),128))]),i.value?(de(),Te("div",m0,[...l[0]||(l[0]=[j("div",{class:"spinner"},null,-1),j("p",null,"Laster...",-1)])])):Wt("",!0),e.value==="student"?(de(),Gs(LR,{key:1})):e.value==="login"?(de(),Gs(KR,{key:2})):e.value==="admin"?(de(),Gs(p0,{key:3})):Wt("",!0)],64))}});wv(_0).mount("#app");

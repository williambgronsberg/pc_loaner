(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ic(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const De={},ns=[],cn=()=>{},Df=()=>!1,ca=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ua=t=>t.startsWith("onUpdate:"),Ze=Object.assign,Ac=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},P_=Object.prototype.hasOwnProperty,Re=(t,e)=>P_.call(t,e),le=Array.isArray,rs=t=>Di(t)==="[object Map]",Nf=t=>Di(t)==="[object Set]",Sh=t=>Di(t)==="[object Date]",pe=t=>typeof t=="function",Ue=t=>typeof t=="string",Jt=t=>typeof t=="symbol",Se=t=>t!==null&&typeof t=="object",Of=t=>(Se(t)||pe(t))&&pe(t.then)&&pe(t.catch),xf=Object.prototype.toString,Di=t=>xf.call(t),k_=t=>Di(t).slice(8,-1),Mf=t=>Di(t)==="[object Object]",bc=t=>Ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ri=Ic(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ha=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},V_=/-\w/g,Gt=ha(t=>t.replace(V_,e=>e.slice(1).toUpperCase())),D_=/\B([A-Z])/g,cr=ha(t=>t.replace(D_,"-$1").toLowerCase()),Lf=ha(t=>t.charAt(0).toUpperCase()+t.slice(1)),ol=ha(t=>t?`on${Lf(t)}`:""),an=(t,e)=>!Object.is(t,e),Ao=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ff=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Rc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},N_=t=>{const e=Ue(t)?Number(t):NaN;return isNaN(e)?t:e};let Ch;const da=()=>Ch||(Ch=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function fa(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ue(r)?L_(r):fa(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ue(t)||Se(t))return t}const O_=/;(?![^(]*\))/g,x_=/:([^]+)/,M_=/\/\*[^]*?\*\//g;function L_(t){const e={};return t.replace(M_,"").split(O_).forEach(n=>{if(n){const r=n.split(x_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function We(t){let e="";if(Ue(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=We(t[n]);r&&(e+=r+" ")}else if(Se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const F_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",U_=Ic(F_);function Uf(t){return!!t||t===""}function B_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Sc(t[r],e[r]);return n}function Sc(t,e){if(t===e)return!0;let n=Sh(t),r=Sh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Jt(t),r=Jt(e),n||r)return t===e;if(n=le(t),r=le(e),n||r)return n&&r?B_(t,e):!1;if(n=Se(t),r=Se(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Sc(t[o],e[o]))return!1}}return String(t)===String(e)}const Bf=t=>!!(t&&t.__v_isRef===!0),Ie=t=>Ue(t)?t:t==null?"":le(t)||Se(t)&&(t.toString===xf||!pe(t.toString))?Bf(t)?Ie(t.value):JSON.stringify(t,$f,2):String(t),$f=(t,e)=>Bf(e)?$f(t,e.value):rs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[al(r,i)+" =>"]=s,n),{})}:Nf(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>al(n))}:Jt(e)?al(e):Se(e)&&!le(e)&&!Mf(e)?String(e):e,al=(t,e="")=>{var n;return Jt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let it;class $_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&it&&(it.active?(this.parent=it,this.index=(it.scopes||(it.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=it;try{return it=this,e()}finally{it=n}}}on(){++this._on===1&&(this.prevScope=it,it=this)}off(){if(this._on>0&&--this._on===0){if(it===this)it=this.prevScope;else{let e=it;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function j_(){return it}let Oe;const ll=new WeakSet;class jf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,it&&(it.active?it.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ll.has(this)&&(ll.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Hf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ph(this),Wf(this);const e=Oe,n=Qt;Oe=this,Qt=!0;try{return this.fn()}finally{Kf(this),Oe=e,Qt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)kc(e);this.deps=this.depsTail=void 0,Ph(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ll.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ll(this)&&this.run()}get dirty(){return Ll(this)}}let qf=0,si,ii;function Hf(t,e=!1){if(t.flags|=8,e){t.next=ii,ii=t;return}t.next=si,si=t}function Cc(){qf++}function Pc(){if(--qf>0)return;if(ii){let e=ii;for(ii=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;si;){let e=si;for(si=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Wf(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Kf(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),kc(r),q_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Ll(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(zf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function zf(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===pi)||(t.globalVersion=pi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Ll(t))))return;t.flags|=2;const e=t.dep,n=Oe,r=Qt;Oe=t,Qt=!0;try{Wf(t);const s=t.fn(t._value);(e.version===0||an(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Oe=n,Qt=r,Kf(t),t.flags&=-3}}function kc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)kc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function q_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Qt=!0;const Gf=[];function pn(){Gf.push(Qt),Qt=!1}function mn(){const t=Gf.pop();Qt=t===void 0?!0:t}function Ph(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Oe;Oe=void 0;try{e()}finally{Oe=n}}}let pi=0;class H_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Vc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Oe||!Qt||Oe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Oe)n=this.activeLink=new H_(Oe,this),Oe.deps?(n.prevDep=Oe.depsTail,Oe.depsTail.nextDep=n,Oe.depsTail=n):Oe.deps=Oe.depsTail=n,Qf(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Oe.depsTail,n.nextDep=void 0,Oe.depsTail.nextDep=n,Oe.depsTail=n,Oe.deps===n&&(Oe.deps=r)}return n}trigger(e){this.version++,pi++,this.notify(e)}notify(e){Cc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Pc()}}}function Qf(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Qf(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Fl=new WeakMap,Cr=Symbol(""),Ul=Symbol(""),mi=Symbol("");function mt(t,e,n){if(Qt&&Oe){let r=Fl.get(t);r||Fl.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Vc),s.map=r,s.key=n),s.track()}}function An(t,e,n,r,s,i){const o=Fl.get(t);if(!o){pi++;return}const l=c=>{c&&c.trigger()};if(Cc(),e==="clear")o.forEach(l);else{const c=le(t),h=c&&bc(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,y)=>{(y==="length"||y===mi||!Jt(y)&&y>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),h&&l(o.get(mi)),e){case"add":c?h&&l(o.get("length")):(l(o.get(Cr)),rs(t)&&l(o.get(Ul)));break;case"delete":c||(l(o.get(Cr)),rs(t)&&l(o.get(Ul)));break;case"set":rs(t)&&l(o.get(Cr));break}}Pc()}function zr(t){const e=be(t);return e===t?e:(mt(e,"iterate",mi),Ht(t)?e:e.map(Xt))}function pa(t){return mt(t=be(t),"iterate",mi),t}function sn(t,e){return Vn(t)?hs(Pr(t)?Xt(e):e):Xt(e)}const W_={__proto__:null,[Symbol.iterator](){return cl(this,Symbol.iterator,t=>sn(this,t))},concat(...t){return zr(this).concat(...t.map(e=>le(e)?zr(e):e))},entries(){return cl(this,"entries",t=>(t[1]=sn(this,t[1]),t))},every(t,e){return En(this,"every",t,e,void 0,arguments)},filter(t,e){return En(this,"filter",t,e,n=>n.map(r=>sn(this,r)),arguments)},find(t,e){return En(this,"find",t,e,n=>sn(this,n),arguments)},findIndex(t,e){return En(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return En(this,"findLast",t,e,n=>sn(this,n),arguments)},findLastIndex(t,e){return En(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return En(this,"forEach",t,e,void 0,arguments)},includes(...t){return ul(this,"includes",t)},indexOf(...t){return ul(this,"indexOf",t)},join(t){return zr(this).join(t)},lastIndexOf(...t){return ul(this,"lastIndexOf",t)},map(t,e){return En(this,"map",t,e,void 0,arguments)},pop(){return Bs(this,"pop")},push(...t){return Bs(this,"push",t)},reduce(t,...e){return kh(this,"reduce",t,e)},reduceRight(t,...e){return kh(this,"reduceRight",t,e)},shift(){return Bs(this,"shift")},some(t,e){return En(this,"some",t,e,void 0,arguments)},splice(...t){return Bs(this,"splice",t)},toReversed(){return zr(this).toReversed()},toSorted(t){return zr(this).toSorted(t)},toSpliced(...t){return zr(this).toSpliced(...t)},unshift(...t){return Bs(this,"unshift",t)},values(){return cl(this,"values",t=>sn(this,t))}};function cl(t,e,n){const r=pa(t),s=r[e]();return r!==t&&!Ht(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const K_=Array.prototype;function En(t,e,n,r,s,i){const o=pa(t),l=o!==t&&!Ht(t),c=o[e];if(c!==K_[e]){const p=c.apply(t,i);return l?Xt(p):p}let h=n;o!==t&&(l?h=function(p,y){return n.call(this,sn(t,p),y,t)}:n.length>2&&(h=function(p,y){return n.call(this,p,y,t)}));const d=c.call(o,h,r);return l&&s?s(d):d}function kh(t,e,n,r){const s=pa(t),i=s!==t&&!Ht(t);let o=n,l=!1;s!==t&&(i?(l=r.length===0,o=function(h,d,p){return l&&(l=!1,h=sn(t,h)),n.call(this,h,sn(t,d),p,t)}):n.length>3&&(o=function(h,d,p){return n.call(this,h,d,p,t)}));const c=s[e](o,...r);return l?sn(t,c):c}function ul(t,e,n){const r=be(t);mt(r,"iterate",mi);const s=r[e](...n);return(s===-1||s===!1)&&xc(n[0])?(n[0]=be(n[0]),r[e](...n)):s}function Bs(t,e,n=[]){pn(),Cc();const r=be(t)[e].apply(t,n);return Pc(),mn(),r}const z_=Ic("__proto__,__v_isRef,__isVue"),Yf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Jt));function G_(t){Jt(t)||(t=String(t));const e=be(this);return mt(e,"has",t),e.hasOwnProperty(t)}class Jf{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?sy:tp:i?ep:Zf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=le(e);if(!s){let c;if(o&&(c=W_[n]))return c;if(n==="hasOwnProperty")return G_}const l=Reflect.get(e,n,vt(e)?e:r);if((Jt(n)?Yf.has(n):z_(n))||(s||mt(e,"get",n),i))return l;if(vt(l)){const c=o&&bc(n)?l:l.value;return s&&Se(c)?$l(c):c}return Se(l)?s?$l(l):Nc(l):l}}class Xf extends Jf{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=le(e)&&bc(n);if(!this._isShallow){const h=Vn(i);if(!Ht(r)&&!Vn(r)&&(i=be(i),r=be(r)),!o&&vt(i)&&!vt(r))return h||(i.value=r),!0}const l=o?Number(n)<e.length:Re(e,n),c=Reflect.set(e,n,r,vt(e)?e:s);return e===be(s)&&c&&(l?an(r,i)&&An(e,"set",n,r):An(e,"add",n,r)),c}deleteProperty(e,n){const r=Re(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&An(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Jt(n)||!Yf.has(n))&&mt(e,"has",n),r}ownKeys(e){return mt(e,"iterate",le(e)?"length":Cr),Reflect.ownKeys(e)}}class Q_ extends Jf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Y_=new Xf,J_=new Q_,X_=new Xf(!0);const Bl=t=>t,fo=t=>Reflect.getPrototypeOf(t);function Z_(t,e,n){return function(...r){const s=this.__v_raw,i=be(s),o=rs(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,h=s[t](...r),d=n?Bl:e?hs:Xt;return!e&&mt(i,"iterate",c?Ul:Cr),Ze(Object.create(h),{next(){const{value:p,done:y}=h.next();return y?{value:p,done:y}:{value:l?[d(p[0]),d(p[1])]:d(p),done:y}}})}}function po(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function ey(t,e){const n={get(s){const i=this.__v_raw,o=be(i),l=be(s);t||(an(s,l)&&mt(o,"get",s),mt(o,"get",l));const{has:c}=fo(o),h=e?Bl:t?hs:Xt;if(c.call(o,s))return h(i.get(s));if(c.call(o,l))return h(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&mt(be(s),"iterate",Cr),s.size},has(s){const i=this.__v_raw,o=be(i),l=be(s);return t||(an(s,l)&&mt(o,"has",s),mt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=be(l),h=e?Bl:t?hs:Xt;return!t&&mt(c,"iterate",Cr),l.forEach((d,p)=>s.call(i,h(d),h(p),o))}};return Ze(n,t?{add:po("add"),set:po("set"),delete:po("delete"),clear:po("clear")}:{add(s){const i=be(this),o=fo(i),l=be(s),c=!e&&!Ht(s)&&!Vn(s)?l:s;return o.has.call(i,c)||an(s,c)&&o.has.call(i,s)||an(l,c)&&o.has.call(i,l)||(i.add(c),An(i,"add",c,c)),this},set(s,i){!e&&!Ht(i)&&!Vn(i)&&(i=be(i));const o=be(this),{has:l,get:c}=fo(o);let h=l.call(o,s);h||(s=be(s),h=l.call(o,s));const d=c.call(o,s);return o.set(s,i),h?an(i,d)&&An(o,"set",s,i):An(o,"add",s,i),this},delete(s){const i=be(this),{has:o,get:l}=fo(i);let c=o.call(i,s);c||(s=be(s),c=o.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&An(i,"delete",s,void 0),h},clear(){const s=be(this),i=s.size!==0,o=s.clear();return i&&An(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Z_(s,t,e)}),n}function Dc(t,e){const n=ey(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Re(n,s)&&s in r?n:r,s,i)}const ty={get:Dc(!1,!1)},ny={get:Dc(!1,!0)},ry={get:Dc(!0,!1)};const Zf=new WeakMap,ep=new WeakMap,tp=new WeakMap,sy=new WeakMap;function iy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Nc(t){return Vn(t)?t:Oc(t,!1,Y_,ty,Zf)}function oy(t){return Oc(t,!1,X_,ny,ep)}function $l(t){return Oc(t,!0,J_,ry,tp)}function Oc(t,e,n,r,s){if(!Se(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const i=s.get(t);if(i)return i;const o=iy(k_(t));if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function Pr(t){return Vn(t)?Pr(t.__v_raw):!!(t&&t.__v_isReactive)}function Vn(t){return!!(t&&t.__v_isReadonly)}function Ht(t){return!!(t&&t.__v_isShallow)}function xc(t){return t?!!t.__v_raw:!1}function be(t){const e=t&&t.__v_raw;return e?be(e):t}function ay(t){return!Re(t,"__v_skip")&&Object.isExtensible(t)&&Ff(t,"__v_skip",!0),t}const Xt=t=>Se(t)?Nc(t):t,hs=t=>Se(t)?$l(t):t;function vt(t){return t?t.__v_isRef===!0:!1}function me(t){return ly(t,!1)}function ly(t,e){return vt(t)?t:new cy(t,e)}class cy{constructor(e,n){this.dep=new Vc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:be(e),this._value=n?e:Xt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ht(e)||Vn(e);e=r?e:be(e),an(e,n)&&(this._rawValue=e,this._value=r?e:Xt(e),this.dep.trigger())}}function Zr(t){return vt(t)?t.value:t}const uy={get:(t,e,n)=>e==="__v_raw"?t:Zr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return vt(s)&&!vt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function np(t){return Pr(t)?t:new Proxy(t,uy)}class hy{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Vc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=pi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Oe!==this)return Hf(this,!0),!0}get value(){const e=this.dep.track();return zf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function dy(t,e,n=!1){let r,s;return pe(t)?r=t:(r=t.get,s=t.set),new hy(r,s,n)}const mo={},Lo=new WeakMap;let Tr;function fy(t,e=!1,n=Tr){if(n){let r=Lo.get(n);r||Lo.set(n,r=[]),r.push(t)}}function py(t,e,n=De){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,h=L=>s?L:Ht(L)||s===!1||s===0?bn(L,1):bn(L);let d,p,y,S,V=!1,O=!1;if(vt(t)?(p=()=>t.value,V=Ht(t)):Pr(t)?(p=()=>h(t),V=!0):le(t)?(O=!0,V=t.some(L=>Pr(L)||Ht(L)),p=()=>t.map(L=>{if(vt(L))return L.value;if(Pr(L))return h(L);if(pe(L))return c?c(L,2):L()})):pe(t)?e?p=c?()=>c(t,2):t:p=()=>{if(y){pn();try{y()}finally{mn()}}const L=Tr;Tr=d;try{return c?c(t,3,[S]):t(S)}finally{Tr=L}}:p=cn,e&&s){const L=p,Q=s===!0?1/0:s;p=()=>bn(L(),Q)}const P=j_(),M=()=>{d.stop(),P&&P.active&&Ac(P.effects,d)};if(i&&e){const L=e;e=(...Q)=>{const Z=L(...Q);return M(),Z}}let x=O?new Array(t.length).fill(mo):mo;const H=L=>{if(!(!(d.flags&1)||!d.dirty&&!L))if(e){const Q=d.run();if(L||s||V||(O?Q.some((Z,w)=>an(Z,x[w])):an(Q,x))){y&&y();const Z=Tr;Tr=d;try{const w=[Q,x===mo?void 0:O&&x[0]===mo?[]:x,S];x=Q,c?c(e,3,w):e(...w)}finally{Tr=Z}}}else d.run()};return l&&l(H),d=new jf(p),d.scheduler=o?()=>o(H,!1):H,S=L=>fy(L,!1,d),y=d.onStop=()=>{const L=Lo.get(d);if(L){if(c)c(L,4);else for(const Q of L)Q();Lo.delete(d)}},e?r?H(!0):x=d.run():o?o(H.bind(null,!0),!0):d.run(),M.pause=d.pause.bind(d),M.resume=d.resume.bind(d),M.stop=M,M}function bn(t,e=1/0,n){if(e<=0||!Se(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,vt(t))bn(t.value,e,n);else if(le(t))for(let r=0;r<t.length;r++)bn(t[r],e,n);else if(Nf(t)||rs(t))t.forEach(r=>{bn(r,e,n)});else if(Mf(t)){for(const r in t)bn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&bn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ni(t,e,n,r){try{return r?t(...r):t()}catch(s){ma(s,e,n)}}function Wt(t,e,n,r){if(pe(t)){const s=Ni(t,e,n,r);return s&&Of(s)&&s.catch(i=>{ma(i,e,n)}),s}if(le(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Wt(t[i],e,n,r));return s}}function ma(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||De;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,h)===!1)return}l=l.parent}if(i){pn(),Ni(i,null,10,[t,c,h]),mn();return}}my(t,n,s,r,o)}function my(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Rt=[];let rn=-1;const ss=[];let Gn=null,Gr=0;const rp=Promise.resolve();let Fo=null;function jl(t){const e=Fo||rp;return t?e.then(this?t.bind(this):t):e}function gy(t){let e=rn+1,n=Rt.length;for(;e<n;){const r=e+n>>>1,s=Rt[r],i=gi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Mc(t){if(!(t.flags&1)){const e=gi(t),n=Rt[Rt.length-1];!n||!(t.flags&2)&&e>=gi(n)?Rt.push(t):Rt.splice(gy(e),0,t),t.flags|=1,sp()}}function sp(){Fo||(Fo=rp.then(op))}function _y(t){le(t)?ss.push(...t):Gn&&t.id===-1?Gn.splice(Gr+1,0,t):t.flags&1||(ss.push(t),t.flags|=1),sp()}function Vh(t,e,n=rn+1){for(;n<Rt.length;n++){const r=Rt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Rt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function ip(t){if(ss.length){const e=[...new Set(ss)].sort((n,r)=>gi(n)-gi(r));if(ss.length=0,Gn){Gn.push(...e);return}for(Gn=e,Gr=0;Gr<Gn.length;Gr++){const n=Gn[Gr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Gn=null,Gr=0}}const gi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function op(t){try{for(rn=0;rn<Rt.length;rn++){const e=Rt[rn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ni(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;rn<Rt.length;rn++){const e=Rt[rn];e&&(e.flags&=-2)}rn=-1,Rt.length=0,ip(),Fo=null,(Rt.length||ss.length)&&op()}}let yt=null,ap=null;function Uo(t){const e=yt;return yt=t,ap=t&&t.type.__scopeId||null,e}function Lc(t,e=yt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&jo(-1);const i=Uo(e);let o;try{o=t(...s)}finally{Uo(i),r._d&&jo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function et(t,e){if(yt===null)return t;const n=Ta(yt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=De]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&bn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function yr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(pn(),Wt(c,n,8,[t.el,l,t,e]),mn())}}function bo(t,e){if(St){let n=St.provides;const r=St.parent&&St.parent.provides;r===n&&(n=St.provides=Object.create(r)),n[t]=e}}function Mt(t,e,n=!1){const r=Up();if(r||os){let s=os?os._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}const yy=Symbol.for("v-scx"),vy=()=>Mt(yy);function hl(t,e,n){return lp(t,e,n)}function lp(t,e,n=De){const{immediate:r,deep:s,flush:i,once:o}=n,l=Ze({},n),c=e&&r||!e&&i!=="post";let h;if(Ei){if(i==="sync"){const S=vy();h=S.__watcherHandles||(S.__watcherHandles=[])}else if(!c){const S=()=>{};return S.stop=cn,S.resume=cn,S.pause=cn,S}}const d=St;l.call=(S,V,O)=>Wt(S,d,V,O);let p=!1;i==="post"?l.scheduler=S=>{At(S,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(S,V)=>{V?S():Mc(S)}),l.augmentJob=S=>{e&&(S.flags|=4),p&&(S.flags|=2,d&&(S.id=d.uid,S.i=d))};const y=py(t,e,l);return Ei&&(h?h.push(y):c&&y()),y}function Ey(t,e,n){const r=this.proxy,s=Ue(t)?t.includes(".")?cp(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=Oi(this),l=lp(s,i.bind(r),n);return o(),l}function cp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const zn=new WeakMap,up=Symbol("_vte"),hp=t=>t.__isTeleport,Ar=t=>t&&(t.disabled||t.disabled===""),wy=t=>t&&(t.defer||t.defer===""),Dh=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Nh=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,ql=(t,e)=>{const n=t&&t.to;return Ue(n)?e?e(n):null:n},Ty={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,l,c,h){const{mc:d,pc:p,pbc:y,o:{insert:S,querySelector:V,createText:O,createComment:P,parentNode:M}}=h,x=Ar(e.props);let{dynamicChildren:H}=e;const L=(w,_,g)=>{w.shapeFlag&16&&d(w.children,_,g,s,i,o,l,c)},Q=(w=e)=>{const _=Ar(w.props),g=w.target=ql(w.props,V),A=Hl(g,w,O,S);g&&(o!=="svg"&&Dh(g)?o="svg":o!=="mathml"&&Nh(g)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(g),_||(L(w,g,A),Gs(w,!1)))},Z=w=>{const _=()=>{if(zn.get(w)===_){if(zn.delete(w),Ar(w.props)){const g=M(w.el)||n;L(w,g,w.anchor),Gs(w,!0)}Q(w)}};zn.set(w,_),At(_,i)};if(t==null){const w=e.el=O(""),_=e.anchor=O("");if(S(w,n,r),S(_,n,r),wy(e.props)||i&&i.pendingBranch){Z(e);return}x&&(L(e,n,_),Gs(e,!0)),Q()}else{e.el=t.el;const w=e.anchor=t.anchor,_=zn.get(t);if(_){_.flags|=8,zn.delete(t),Z(e);return}e.targetStart=t.targetStart;const g=e.target=t.target,A=e.targetAnchor=t.targetAnchor,R=Ar(t.props),I=R?n:g,v=R?w:A;if(o==="svg"||Dh(g)?o="svg":(o==="mathml"||Nh(g))&&(o="mathml"),H?(y(t.dynamicChildren,H,I,s,i,o,l),Bc(t,e,!0)):c||p(t,e,I,v,s,i,o,l,!1),x)R?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):go(e,n,w,h,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const ye=ql(e.props,V);ye&&(e.target=ye,go(e,ye,null,h,0))}else R&&go(e,g,A,h,1);Gs(e,x)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:l,anchor:c,targetStart:h,targetAnchor:d,target:p,props:y}=t,S=Ar(y),V=i||!S,O=zn.get(t);if(O&&(O.flags|=8,zn.delete(t)),p&&(s(h),s(d)),i&&s(c),!O&&(S||p)&&o&16)for(let P=0;P<l.length;P++){const M=l[P];r(M,e,n,V,!!M.dynamicChildren)}},move:go,hydrate:Iy};function go(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:l,shapeFlag:c,children:h,props:d}=t,p=i===2;if(p&&r(o,e,n),!zn.has(t)&&(!p||Ar(d))&&c&16)for(let y=0;y<h.length;y++)s(h[y],e,n,2);p&&r(l,e,n)}function Iy(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:l,querySelector:c,insert:h,createText:d}},p){function y(P,M){let x=M;for(;x;){if(x&&x.nodeType===8){if(x.data==="teleport start anchor")e.targetStart=x;else if(x.data==="teleport anchor"){e.targetAnchor=x,P._lpa=e.targetAnchor&&o(e.targetAnchor);break}}x=o(x)}}function S(P,M){M.anchor=p(o(P),M,l(P),n,r,s,i)}const V=e.target=ql(e.props,c),O=Ar(e.props);if(V){const P=V._lpa||V.firstChild;e.shapeFlag&16&&(O?(S(t,e),y(V,P),e.targetAnchor||Hl(V,e,d,h,l(t)===V?t:null)):(e.anchor=o(t),y(V,P),e.targetAnchor||Hl(V,e,d,h),p(P&&o(P),e,V,n,r,s,i))),Gs(e,O)}else O&&e.shapeFlag&16&&(S(t,e),e.targetStart=t,e.targetAnchor=o(t));return e.anchor&&o(e.anchor)}const Ro=Ty;function Gs(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function Hl(t,e,n,r,s=null){const i=e.targetStart=n(""),o=e.targetAnchor=n("");return i[up]=o,t&&(r(i,t,s),r(o,t,s)),o}const qt=Symbol("_leaveCb"),$s=Symbol("_enterCb");function Ay(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ya(()=>{t.isMounted=!0}),vp(()=>{t.isUnmounting=!0}),t}const jt=[Function,Array],dp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:jt,onEnter:jt,onAfterEnter:jt,onEnterCancelled:jt,onBeforeLeave:jt,onLeave:jt,onAfterLeave:jt,onLeaveCancelled:jt,onBeforeAppear:jt,onAppear:jt,onAfterAppear:jt,onAppearCancelled:jt},fp=t=>{const e=t.subTree;return e.component?fp(e.component):e},by={name:"BaseTransition",props:dp,setup(t,{slots:e}){const n=Up(),r=Ay();return()=>{const s=e.default&&gp(e.default(),!0),i=s&&s.length?pp(s):n.subTree?Ve():void 0;if(!i)return;const o=be(t),{mode:l}=o;if(r.isLeaving)return dl(i);const c=Oh(i);if(!c)return dl(i);let h=Wl(c,o,r,n,p=>h=p);c.type!==_t&&_i(c,h);let d=n.subTree&&Oh(n.subTree);if(d&&d.type!==_t&&!br(d,c)&&fp(n).type!==_t){let p=Wl(d,o,r,n);if(_i(d,p),l==="out-in"&&c.type!==_t)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,d=void 0},dl(i);l==="in-out"&&c.type!==_t?p.delayLeave=(y,S,V)=>{const O=mp(r,d);O[String(d.key)]=d,y[qt]=()=>{S(),y[qt]=void 0,delete h.delayedLeave,d=void 0},h.delayedLeave=()=>{V(),delete h.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return i}}};function pp(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==_t){e=n;break}}return e}const Ry=by;function mp(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Wl(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:h,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:y,onLeave:S,onAfterLeave:V,onLeaveCancelled:O,onBeforeAppear:P,onAppear:M,onAfterAppear:x,onAppearCancelled:H}=e,L=String(t.key),Q=mp(n,t),Z=(g,A)=>{g&&Wt(g,r,9,A)},w=(g,A)=>{const R=A[1];Z(g,A),le(g)?g.every(I=>I.length<=1)&&R():g.length<=1&&R()},_={mode:o,persisted:l,beforeEnter(g){let A=c;if(!n.isMounted)if(i)A=P||c;else return;g[qt]&&g[qt](!0);const R=Q[L];R&&br(t,R)&&R.el[qt]&&R.el[qt](),Z(A,[g])},enter(g){if(Q[L]===t)return;let A=h,R=d,I=p;if(!n.isMounted)if(i)A=M||h,R=x||d,I=H||p;else return;let v=!1;g[$s]=Ge=>{v||(v=!0,Ge?Z(I,[g]):Z(R,[g]),_.delayedLeave&&_.delayedLeave(),g[$s]=void 0)};const ye=g[$s].bind(null,!1);A?w(A,[g,ye]):ye()},leave(g,A){const R=String(t.key);if(g[$s]&&g[$s](!0),n.isUnmounting)return A();Z(y,[g]);let I=!1;g[qt]=ye=>{I||(I=!0,A(),ye?Z(O,[g]):Z(V,[g]),g[qt]=void 0,Q[R]===t&&delete Q[R])};const v=g[qt].bind(null,!1);Q[R]=t,S?w(S,[g,v]):v()},clone(g){const A=Wl(g,e,n,r,s);return s&&s(A),A}};return _}function dl(t){if(ga(t))return t=ir(t),t.children=null,t}function Oh(t){if(!ga(t))return hp(t.type)&&t.children?pp(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&pe(n.default))return n.default()}}function _i(t,e){t.shapeFlag&6&&t.component?(t.transition=e,_i(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function gp(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ne?(o.patchFlag&128&&s++,r=r.concat(gp(o.children,e,l))):(e||o.type!==_t)&&r.push(l!=null?ir(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Mr(t,e){return pe(t)?Ze({name:t.name},e,{setup:t}):t}function _p(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function xh(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Bo=new WeakMap;function oi(t,e,n,r,s=!1){if(le(t)){t.forEach((O,P)=>oi(O,e&&(le(e)?e[P]:e),n,r,s));return}if(is(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&oi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Ta(r.component):r.el,o=s?null:i,{i:l,r:c}=t,h=e&&e.r,d=l.refs===De?l.refs={}:l.refs,p=l.setupState,y=be(p),S=p===De?Df:O=>xh(d,O)?!1:Re(y,O),V=(O,P)=>!(P&&xh(d,P));if(h!=null&&h!==c){if(Mh(e),Ue(h))d[h]=null,S(h)&&(p[h]=null);else if(vt(h)){const O=e;V(h,O.k)&&(h.value=null),O.k&&(d[O.k]=null)}}if(pe(c)){pn();try{Ni(c,l,12,[o,d])}finally{mn()}}else{const O=Ue(c),P=vt(c);if(O||P){const M=()=>{if(t.f){const x=O?S(c)?p[c]:d[c]:V()||!t.k?c.value:d[t.k];if(s)le(x)&&Ac(x,i);else if(le(x))x.includes(i)||x.push(i);else if(O)d[c]=[i],S(c)&&(p[c]=d[c]);else{const H=[i];V(c,t.k)&&(c.value=H),t.k&&(d[t.k]=H)}}else O?(d[c]=o,S(c)&&(p[c]=o)):P&&(V(c,t.k)&&(c.value=o),t.k&&(d[t.k]=o))};if(o){const x=()=>{M(),Bo.delete(t)};x.id=-1,Bo.set(t,x),At(x,n)}else Mh(t),M()}}}function Mh(t){const e=Bo.get(t);e&&(e.flags|=8,Bo.delete(t))}da().requestIdleCallback;da().cancelIdleCallback;const is=t=>!!t.type.__asyncLoader,ga=t=>t.type.__isKeepAlive;function Sy(t,e){yp(t,"a",e)}function Cy(t,e){yp(t,"da",e)}function yp(t,e,n=St){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(_a(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ga(s.parent.vnode)&&Py(r,e,n,s),s=s.parent}}function Py(t,e,n,r){const s=_a(e,t,r,!0);va(()=>{Ac(r[e],s)},n)}function _a(t,e,n=St,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{pn();const l=Oi(n),c=Wt(e,n,t,o);return l(),mn(),c});return r?s.unshift(i):s.push(i),i}}const Ln=t=>(e,n=St)=>{(!Ei||t==="sp")&&_a(t,(...r)=>e(...r),n)},ky=Ln("bm"),ya=Ln("m"),Vy=Ln("bu"),Dy=Ln("u"),vp=Ln("bum"),va=Ln("um"),Ny=Ln("sp"),Oy=Ln("rtg"),xy=Ln("rtc");function My(t,e=St){_a("ec",t,e)}const Ly=Symbol.for("v-ndc");function Rr(t,e,n,r){let s;const i=n,o=le(t);if(o||Ue(t)){const l=o&&Pr(t);let c=!1,h=!1;l&&(c=!Ht(t),h=Vn(t),t=pa(t)),s=new Array(t.length);for(let d=0,p=t.length;d<p;d++)s[d]=e(c?h?hs(Xt(t[d])):Xt(t[d]):t[d],d,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Se(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}function Fy(t,e,n={},r,s){if(yt.ce||yt.parent&&is(yt.parent)&&yt.parent.ce){const h=Object.keys(n).length>0;return ee(),Yt(Ne,null,[xe("slot",n,r)],h?-2:64)}let i=t[e];i&&i._c&&(i._d=!1),ee();const o=i&&Ep(i(n)),l=n.key||o&&o.key,c=Yt(Ne,{key:(l&&!Jt(l)?l:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),c}function Ep(t){return t.some(e=>vi(e)?!(e.type===_t||e.type===Ne&&!Ep(e.children)):!0)?t:null}const Kl=t=>t?Bp(t)?Ta(t):Kl(t.parent):null,ai=Ze(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Kl(t.parent),$root:t=>Kl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Tp(t),$forceUpdate:t=>t.f||(t.f=()=>{Mc(t.update)}),$nextTick:t=>t.n||(t.n=jl.bind(t.proxy)),$watch:t=>Ey.bind(t)}),fl=(t,e)=>t!==De&&!t.__isScriptSetup&&Re(t,e),Uy={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(fl(r,e))return o[e]=1,r[e];if(s!==De&&Re(s,e))return o[e]=2,s[e];if(Re(i,e))return o[e]=3,i[e];if(n!==De&&Re(n,e))return o[e]=4,n[e];zl&&(o[e]=0)}}const h=ai[e];let d,p;if(h)return e==="$attrs"&&mt(t.attrs,"get",""),h(t);if((d=l.__cssModules)&&(d=d[e]))return d;if(n!==De&&Re(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Re(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return fl(s,e)?(s[e]=n,!0):r!==De&&Re(r,e)?(r[e]=n,!0):Re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},l){let c;return!!(n[l]||t!==De&&l[0]!=="$"&&Re(t,l)||fl(e,l)||Re(i,l)||Re(r,l)||Re(ai,l)||Re(s.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Lh(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let zl=!0;function By(t){const e=Tp(t),n=t.proxy,r=t.ctx;zl=!1,e.beforeCreate&&Fh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:h,created:d,beforeMount:p,mounted:y,beforeUpdate:S,updated:V,activated:O,deactivated:P,beforeDestroy:M,beforeUnmount:x,destroyed:H,unmounted:L,render:Q,renderTracked:Z,renderTriggered:w,errorCaptured:_,serverPrefetch:g,expose:A,inheritAttrs:R,components:I,directives:v,filters:ye}=e;if(h&&$y(h,r,null),o)for(const F in o){const z=o[F];pe(z)&&(r[F]=z.bind(n))}if(s){const F=s.call(n,n);Se(F)&&(t.data=Nc(F))}if(zl=!0,i)for(const F in i){const z=i[F],Qe=pe(z)?z.bind(n,n):pe(z.get)?z.get.bind(n,n):cn,_n=!pe(z)&&pe(z.set)?z.set.bind(n):cn,nt=es({get:Qe,set:_n});Object.defineProperty(r,F,{enumerable:!0,configurable:!0,get:()=>nt.value,set:Fe=>nt.value=Fe})}if(l)for(const F in l)wp(l[F],r,n,F);if(c){const F=pe(c)?c.call(n):c;Reflect.ownKeys(F).forEach(z=>{bo(z,F[z])})}d&&Fh(d,t,"c");function ge(F,z){le(z)?z.forEach(Qe=>F(Qe.bind(n))):z&&F(z.bind(n))}if(ge(ky,p),ge(ya,y),ge(Vy,S),ge(Dy,V),ge(Sy,O),ge(Cy,P),ge(My,_),ge(xy,Z),ge(Oy,w),ge(vp,x),ge(va,L),ge(Ny,g),le(A))if(A.length){const F=t.exposed||(t.exposed={});A.forEach(z=>{Object.defineProperty(F,z,{get:()=>n[z],set:Qe=>n[z]=Qe,enumerable:!0})})}else t.exposed||(t.exposed={});Q&&t.render===cn&&(t.render=Q),R!=null&&(t.inheritAttrs=R),I&&(t.components=I),v&&(t.directives=v),g&&_p(t)}function $y(t,e,n=cn){le(t)&&(t=Gl(t));for(const r in t){const s=t[r];let i;Se(s)?"default"in s?i=Mt(s.from||r,s.default,!0):i=Mt(s.from||r):i=Mt(s),vt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Fh(t,e,n){Wt(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function wp(t,e,n,r){let s=r.includes(".")?cp(n,r):()=>n[r];if(Ue(t)){const i=e[t];pe(i)&&hl(s,i)}else if(pe(t))hl(s,t.bind(n));else if(Se(t))if(le(t))t.forEach(i=>wp(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&hl(s,i,t)}}function Tp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>$o(c,h,o,!0)),$o(c,e,o)),Se(e)&&i.set(e,c),c}function $o(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&$o(t,i,n,!0),s&&s.forEach(o=>$o(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=jy[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const jy={data:Uh,props:Bh,emits:Bh,methods:Qs,computed:Qs,beforeCreate:It,created:It,beforeMount:It,mounted:It,beforeUpdate:It,updated:It,beforeDestroy:It,beforeUnmount:It,destroyed:It,unmounted:It,activated:It,deactivated:It,errorCaptured:It,serverPrefetch:It,components:Qs,directives:Qs,watch:Hy,provide:Uh,inject:qy};function Uh(t,e){return e?t?function(){return Ze(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function qy(t,e){return Qs(Gl(t),Gl(e))}function Gl(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function It(t,e){return t?[...new Set([].concat(t,e))]:e}function Qs(t,e){return t?Ze(Object.create(null),t,e):e}function Bh(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:Ze(Object.create(null),Lh(t),Lh(e??{})):e}function Hy(t,e){if(!t)return e;if(!e)return t;const n=Ze(Object.create(null),t);for(const r in e)n[r]=It(t[r],e[r]);return n}function Ip(){return{app:null,config:{isNativeTag:Df,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wy=0;function Ky(t,e){return function(r,s=null){pe(r)||(r=Ze({},r)),s!=null&&!Se(s)&&(s=null);const i=Ip(),o=new WeakSet,l=[];let c=!1;const h=i.app={_uid:Wy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Av,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&pe(d.install)?(o.add(d),d.install(h,...p)):pe(d)&&(o.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,y){if(!c){const S=h._ceVNode||xe(r,s);return S.appContext=i,y===!0?y="svg":y===!1&&(y=void 0),t(S,d,y),c=!0,h._container=d,d.__vue_app__=h,Ta(S.component)}},onUnmount(d){l.push(d)},unmount(){c&&(Wt(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=os;os=h;try{return d()}finally{os=p}}};return h}}let os=null;const zy=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Gt(e)}Modifiers`]||t[`${cr(e)}Modifiers`];function Gy(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||De;let s=n;const i=e.startsWith("update:"),o=i&&zy(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>Ue(d)?d.trim():d)),o.number&&(s=n.map(Rc)));let l,c=r[l=ol(e)]||r[l=ol(Gt(e))];!c&&i&&(c=r[l=ol(cr(e))]),c&&Wt(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Wt(h,t,6,s)}}const Qy=new WeakMap;function Ap(t,e,n=!1){const r=n?Qy:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!pe(t)){const c=h=>{const d=Ap(h,e,!0);d&&(l=!0,Ze(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Se(t)&&r.set(t,null),null):(le(i)?i.forEach(c=>o[c]=null):Ze(o,i),Se(t)&&r.set(t,o),o)}function Ea(t,e){return!t||!ca(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Re(t,e[0].toLowerCase()+e.slice(1))||Re(t,cr(e))||Re(t,e))}function $h(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:h,renderCache:d,props:p,data:y,setupState:S,ctx:V,inheritAttrs:O}=t,P=Uo(t);let M,x;try{if(n.shapeFlag&4){const L=s||r,Q=L;M=on(h.call(Q,L,d,p,S,y,V)),x=l}else{const L=e;M=on(L.length>1?L(p,{attrs:l,slots:o,emit:c}):L(p,null)),x=e.props?l:Yy(l)}}catch(L){li.length=0,ma(L,t,1),M=xe(_t)}let H=M;if(x&&O!==!1){const L=Object.keys(x),{shapeFlag:Q}=H;L.length&&Q&7&&(i&&L.some(ua)&&(x=Jy(x,i)),H=ir(H,x,!1,!0))}return n.dirs&&(H=ir(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&_i(H,n.transition),M=H,Uo(P),M}const Yy=t=>{let e;for(const n in t)(n==="class"||n==="style"||ca(n))&&((e||(e={}))[n]=t[n]);return e},Jy=(t,e)=>{const n={};for(const r in t)(!ua(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Xy(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?jh(r,o,h):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const y=d[p];if(bp(o,r,y)&&!Ea(h,y))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?jh(r,o,h):!0:!!o;return!1}function jh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(bp(e,t,i)&&!Ea(n,i))return!0}return!1}function bp(t,e,n){const r=t[n],s=e[n];return n==="style"&&Se(r)&&Se(s)?!Sc(r,s):r!==s}function Zy({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const Rp={},Sp=()=>Object.create(Rp),Cp=t=>Object.getPrototypeOf(t)===Rp;function ev(t,e,n,r=!1){const s={},i=Sp();t.propsDefaults=Object.create(null),Pp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:oy(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function tv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=be(s),[c]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let y=d[p];if(Ea(t.emitsOptions,y))continue;const S=e[y];if(c)if(Re(i,y))S!==i[y]&&(i[y]=S,h=!0);else{const V=Gt(y);s[V]=Ql(c,l,V,S,t,!1)}else S!==i[y]&&(i[y]=S,h=!0)}}}else{Pp(t,e,s,i)&&(h=!0);let d;for(const p in l)(!e||!Re(e,p)&&((d=cr(p))===p||!Re(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Ql(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Re(e,p))&&(delete i[p],h=!0)}h&&An(t.attrs,"set","")}function Pp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(ri(c))continue;const h=e[c];let d;s&&Re(s,d=Gt(c))?!i||!i.includes(d)?n[d]=h:(l||(l={}))[d]=h:Ea(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,o=!0)}if(i){const c=be(n),h=l||De;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Ql(s,c,p,h[p],t,!Re(h,p))}}return o}function Ql(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Re(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&pe(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=Oi(s);r=h[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===cr(n))&&(r=!0))}return r}const nv=new WeakMap;function kp(t,e,n=!1){const r=n?nv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!pe(t)){const d=p=>{c=!0;const[y,S]=kp(p,e,!0);Ze(o,y),S&&l.push(...S)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return Se(t)&&r.set(t,ns),ns;if(le(i))for(let d=0;d<i.length;d++){const p=Gt(i[d]);qh(p)&&(o[p]=De)}else if(i)for(const d in i){const p=Gt(d);if(qh(p)){const y=i[d],S=o[p]=le(y)||pe(y)?{type:y}:Ze({},y),V=S.type;let O=!1,P=!0;if(le(V))for(let M=0;M<V.length;++M){const x=V[M],H=pe(x)&&x.name;if(H==="Boolean"){O=!0;break}else H==="String"&&(P=!1)}else O=pe(V)&&V.name==="Boolean";S[0]=O,S[1]=P,(O||Re(S,"default"))&&l.push(p)}}const h=[o,l];return Se(t)&&r.set(t,h),h}function qh(t){return t[0]!=="$"&&!ri(t)}const Fc=t=>t==="_"||t==="_ctx"||t==="$stable",Uc=t=>le(t)?t.map(on):[on(t)],rv=(t,e,n)=>{if(e._n)return e;const r=Lc((...s)=>Uc(e(...s)),n);return r._c=!1,r},Vp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Fc(s))continue;const i=t[s];if(pe(i))e[s]=rv(s,i,r);else if(i!=null){const o=Uc(i);e[s]=()=>o}}},Dp=(t,e)=>{const n=Uc(e);t.slots.default=()=>n},Np=(t,e,n)=>{for(const r in e)(n||!Fc(r))&&(t[r]=e[r])},sv=(t,e,n)=>{const r=t.slots=Sp();if(t.vnode.shapeFlag&32){const s=e._;s?(Np(r,e,n),n&&Ff(r,"_",s,!0)):Vp(e,r)}else e&&Dp(t,e)},iv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=De;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Np(s,e,n):(i=!e.$stable,Vp(e,s)),o=e}else e&&(Dp(t,e),o={default:1});if(i)for(const l in s)!Fc(l)&&o[l]==null&&delete s[l]},At=uv;function ov(t){return av(t)}function av(t,e){const n=da();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:h,setElementText:d,parentNode:p,nextSibling:y,setScopeId:S=cn,insertStaticContent:V}=t,O=(E,T,b,q=null,$=null,B=null,Y=void 0,D=null,W=!!T.dynamicChildren)=>{if(E===T)return;E&&!br(E,T)&&(q=Kt(E),Fe(E,$,B,!0),E=null),T.patchFlag===-2&&(W=!1,T.dynamicChildren=null);const{type:j,ref:ie,shapeFlag:J}=T;switch(j){case wa:P(E,T,b,q);break;case _t:M(E,T,b,q);break;case ml:E==null&&x(T,b,q,Y);break;case Ne:I(E,T,b,q,$,B,Y,D,W);break;default:J&1?Q(E,T,b,q,$,B,Y,D,W):J&6?v(E,T,b,q,$,B,Y,D,W):(J&64||J&128)&&j.process(E,T,b,q,$,B,Y,D,W,Ut)}ie!=null&&$?oi(ie,E&&E.ref,B,T||E,!T):ie==null&&E&&E.ref!=null&&oi(E.ref,null,B,E,!0)},P=(E,T,b,q)=>{if(E==null)r(T.el=l(T.children),b,q);else{const $=T.el=E.el;T.children!==E.children&&h($,T.children)}},M=(E,T,b,q)=>{E==null?r(T.el=c(T.children||""),b,q):T.el=E.el},x=(E,T,b,q)=>{[E.el,E.anchor]=V(E.children,T,b,q,E.el,E.anchor)},H=({el:E,anchor:T},b,q)=>{let $;for(;E&&E!==T;)$=y(E),r(E,b,q),E=$;r(T,b,q)},L=({el:E,anchor:T})=>{let b;for(;E&&E!==T;)b=y(E),s(E),E=b;s(T)},Q=(E,T,b,q,$,B,Y,D,W)=>{if(T.type==="svg"?Y="svg":T.type==="math"&&(Y="mathml"),E==null)Z(T,b,q,$,B,Y,D,W);else{const j=E.el&&E.el._isVueCE?E.el:null;try{j&&j._beginPatch(),g(E,T,$,B,Y,D,W)}finally{j&&j._endPatch()}}},Z=(E,T,b,q,$,B,Y,D)=>{let W,j;const{props:ie,shapeFlag:J,transition:ne,dirs:ae}=E;if(W=E.el=o(E.type,B,ie&&ie.is,ie),J&8?d(W,E.children):J&16&&_(E.children,W,null,q,$,pl(E,B),Y,D),ae&&yr(E,null,q,"created"),w(W,E,E.scopeId,Y,q),ie){for(const fe in ie)fe!=="value"&&!ri(fe)&&i(W,fe,null,ie[fe],B,q);"value"in ie&&i(W,"value",null,ie.value,B),(j=ie.onVnodeBeforeMount)&&tn(j,q,E)}ae&&yr(E,null,q,"beforeMount");const oe=lv($,ne);oe&&ne.beforeEnter(W),r(W,T,b),((j=ie&&ie.onVnodeMounted)||oe||ae)&&At(()=>{try{j&&tn(j,q,E),oe&&ne.enter(W),ae&&yr(E,null,q,"mounted")}finally{}},$)},w=(E,T,b,q,$)=>{if(b&&S(E,b),q)for(let B=0;B<q.length;B++)S(E,q[B]);if($){let B=$.subTree;if(T===B||Mp(B.type)&&(B.ssContent===T||B.ssFallback===T)){const Y=$.vnode;w(E,Y,Y.scopeId,Y.slotScopeIds,$.parent)}}},_=(E,T,b,q,$,B,Y,D,W=0)=>{for(let j=W;j<E.length;j++){const ie=E[j]=D?In(E[j]):on(E[j]);O(null,ie,T,b,q,$,B,Y,D)}},g=(E,T,b,q,$,B,Y)=>{const D=T.el=E.el;let{patchFlag:W,dynamicChildren:j,dirs:ie}=T;W|=E.patchFlag&16;const J=E.props||De,ne=T.props||De;let ae;if(b&&vr(b,!1),(ae=ne.onVnodeBeforeUpdate)&&tn(ae,b,T,E),ie&&yr(T,E,b,"beforeUpdate"),b&&vr(b,!0),j&&(!E.dynamicChildren||E.dynamicChildren.length!==j.length)&&(W=0,Y=!1,j=null),(J.innerHTML&&ne.innerHTML==null||J.textContent&&ne.textContent==null)&&d(D,""),j?A(E.dynamicChildren,j,D,b,q,pl(T,$),B):Y||z(E,T,D,null,b,q,pl(T,$),B,!1),W>0){if(W&16)R(D,J,ne,b,$);else if(W&2&&J.class!==ne.class&&i(D,"class",null,ne.class,$),W&4&&i(D,"style",J.style,ne.style,$),W&8){const oe=T.dynamicProps;for(let fe=0;fe<oe.length;fe++){const we=oe[fe],Be=J[we],Ye=ne[we];(Ye!==Be||we==="value")&&i(D,we,Be,Ye,$,b)}}W&1&&E.children!==T.children&&d(D,T.children)}else!Y&&j==null&&R(D,J,ne,b,$);((ae=ne.onVnodeUpdated)||ie)&&At(()=>{ae&&tn(ae,b,T,E),ie&&yr(T,E,b,"updated")},q)},A=(E,T,b,q,$,B,Y)=>{for(let D=0;D<T.length;D++){const W=E[D],j=T[D],ie=W.el&&(W.type===Ne||!br(W,j)||W.shapeFlag&198)?p(W.el):b;O(W,j,ie,null,q,$,B,Y,!0)}},R=(E,T,b,q,$)=>{if(T!==b){if(T!==De)for(const B in T)!ri(B)&&!(B in b)&&i(E,B,T[B],null,$,q);for(const B in b){if(ri(B))continue;const Y=b[B],D=T[B];Y!==D&&B!=="value"&&i(E,B,D,Y,$,q)}"value"in b&&i(E,"value",T.value,b.value,$)}},I=(E,T,b,q,$,B,Y,D,W)=>{const j=T.el=E?E.el:l(""),ie=T.anchor=E?E.anchor:l("");let{patchFlag:J,dynamicChildren:ne,slotScopeIds:ae}=T;ae&&(D=D?D.concat(ae):ae),E==null?(r(j,b,q),r(ie,b,q),_(T.children||[],b,ie,$,B,Y,D,W)):J>0&&J&64&&ne&&E.dynamicChildren&&E.dynamicChildren.length===ne.length?(A(E.dynamicChildren,ne,b,$,B,Y,D),(T.key!=null||$&&T===$.subTree)&&Bc(E,T,!0)):z(E,T,b,ie,$,B,Y,D,W)},v=(E,T,b,q,$,B,Y,D,W)=>{T.slotScopeIds=D,E==null?T.shapeFlag&512?$.ctx.activate(T,b,q,Y,W):ye(T,b,q,$,B,Y,W):Ge(E,T,W)},ye=(E,T,b,q,$,B,Y)=>{const D=E.component=_v(E,q,$);if(ga(E)&&(D.ctx.renderer=Ut),yv(D,!1,Y),D.asyncDep){if($&&$.registerDep(D,ge,Y),!E.el){const W=D.subTree=xe(_t);M(null,W,T,b),E.placeholder=W.el}}else ge(D,E,T,b,$,B,Y)},Ge=(E,T,b)=>{const q=T.component=E.component;if(Xy(E,T,b))if(q.asyncDep&&!q.asyncResolved){F(q,T,b);return}else q.next=T,q.update();else T.el=E.el,q.vnode=T},ge=(E,T,b,q,$,B,Y)=>{const D=()=>{if(E.isMounted){let{next:J,bu:ne,u:ae,parent:oe,vnode:fe}=E;{const ut=Op(E);if(ut){J&&(J.el=fe.el,F(E,J,Y)),ut.asyncDep.then(()=>{At(()=>{E.isUnmounted||j()},$)});return}}let we=J,Be;vr(E,!1),J?(J.el=fe.el,F(E,J,Y)):J=fe,ne&&Ao(ne),(Be=J.props&&J.props.onVnodeBeforeUpdate)&&tn(Be,oe,J,fe),vr(E,!0);const Ye=$h(E),Bt=E.subTree;E.subTree=Ye,O(Bt,Ye,p(Bt.el),Kt(Bt),E,$,B),J.el=Ye.el,we===null&&Zy(E,Ye.el),ae&&At(ae,$),(Be=J.props&&J.props.onVnodeUpdated)&&At(()=>tn(Be,oe,J,fe),$)}else{let J;const{el:ne,props:ae}=T,{bm:oe,m:fe,parent:we,root:Be,type:Ye}=E,Bt=is(T);vr(E,!1),oe&&Ao(oe),!Bt&&(J=ae&&ae.onVnodeBeforeMount)&&tn(J,we,T),vr(E,!0);{Be.ce&&Be.ce._hasShadowRoot()&&Be.ce._injectChildStyle(Ye,E.parent?E.parent.type:void 0);const ut=E.subTree=$h(E);O(null,ut,b,q,E,$,B),T.el=ut.el}if(fe&&At(fe,$),!Bt&&(J=ae&&ae.onVnodeMounted)){const ut=T;At(()=>tn(J,we,ut),$)}(T.shapeFlag&256||we&&is(we.vnode)&&we.vnode.shapeFlag&256)&&E.a&&At(E.a,$),E.isMounted=!0,T=b=q=null}};E.scope.on();const W=E.effect=new jf(D);E.scope.off();const j=E.update=W.run.bind(W),ie=E.job=W.runIfDirty.bind(W);ie.i=E,ie.id=E.uid,W.scheduler=()=>Mc(ie),vr(E,!0),j()},F=(E,T,b)=>{T.component=E;const q=E.vnode.props;E.vnode=T,E.next=null,tv(E,T.props,q,b),iv(E,T.children,b),pn(),Vh(E),mn()},z=(E,T,b,q,$,B,Y,D,W=!1)=>{const j=E&&E.children,ie=E?E.shapeFlag:0,J=T.children,{patchFlag:ne,shapeFlag:ae}=T;if(ne>0){if(ne&128){_n(j,J,b,q,$,B,Y,D,W);return}else if(ne&256){Qe(j,J,b,q,$,B,Y,D,W);return}}ae&8?(ie&16&&Ft(j,$,B),J!==j&&d(b,J)):ie&16?ae&16?_n(j,J,b,q,$,B,Y,D,W):Ft(j,$,B,!0):(ie&8&&d(b,""),ae&16&&_(J,b,q,$,B,Y,D,W))},Qe=(E,T,b,q,$,B,Y,D,W)=>{E=E||ns,T=T||ns;const j=E.length,ie=T.length,J=Math.min(j,ie);let ne;for(ne=0;ne<J;ne++){const ae=T[ne]=W?In(T[ne]):on(T[ne]);O(E[ne],ae,b,null,$,B,Y,D,W)}j>ie?Ft(E,$,B,!0,!1,J):_(T,b,q,$,B,Y,D,W,J)},_n=(E,T,b,q,$,B,Y,D,W)=>{let j=0;const ie=T.length;let J=E.length-1,ne=ie-1;for(;j<=J&&j<=ne;){const ae=E[j],oe=T[j]=W?In(T[j]):on(T[j]);if(br(ae,oe))O(ae,oe,b,null,$,B,Y,D,W);else break;j++}for(;j<=J&&j<=ne;){const ae=E[J],oe=T[ne]=W?In(T[ne]):on(T[ne]);if(br(ae,oe))O(ae,oe,b,null,$,B,Y,D,W);else break;J--,ne--}if(j>J){if(j<=ne){const ae=ne+1,oe=ae<ie?T[ae].el:q;for(;j<=ne;)O(null,T[j]=W?In(T[j]):on(T[j]),b,oe,$,B,Y,D,W),j++}}else if(j>ne)for(;j<=J;)Fe(E[j],$,B,!0),j++;else{const ae=j,oe=j,fe=new Map;for(j=oe;j<=ne;j++){const rt=T[j]=W?In(T[j]):on(T[j]);rt.key!=null&&fe.set(rt.key,j)}let we,Be=0;const Ye=ne-oe+1;let Bt=!1,ut=0;const $n=new Array(Ye);for(j=0;j<Ye;j++)$n[j]=0;for(j=ae;j<=J;j++){const rt=E[j];if(Be>=Ye){Fe(rt,$,B,!0);continue}let $t;if(rt.key!=null)$t=fe.get(rt.key);else for(we=oe;we<=ne;we++)if($n[we-oe]===0&&br(rt,T[we])){$t=we;break}$t===void 0?Fe(rt,$,B,!0):($n[$t-oe]=j+1,$t>=ut?ut=$t:Bt=!0,O(rt,T[$t],b,null,$,B,Y,D,W),Be++)}const Ss=Bt?cv($n):ns;for(we=Ss.length-1,j=Ye-1;j>=0;j--){const rt=oe+j,$t=T[rt],Yi=T[rt+1],jr=rt+1<ie?Yi.el||xp(Yi):q;$n[j]===0?O(null,$t,b,jr,$,B,Y,D,W):Bt&&(we<0||j!==Ss[we]?nt($t,b,jr,2):we--)}}},nt=(E,T,b,q,$=null)=>{const{el:B,type:Y,transition:D,children:W,shapeFlag:j}=E;if(j&6){nt(E.component.subTree,T,b,q);return}if(j&128){E.suspense.move(T,b,q);return}if(j&64){Y.move(E,T,b,Ut);return}if(Y===Ne){r(B,T,b);for(let J=0;J<W.length;J++)nt(W[J],T,b,q);r(E.anchor,T,b);return}if(Y===ml){H(E,T,b);return}if(q!==2&&j&1&&D)if(q===0)D.persisted&&!B[qt]?r(B,T,b):(D.beforeEnter(B),r(B,T,b),At(()=>D.enter(B),$));else{const{leave:J,delayLeave:ne,afterLeave:ae}=D,oe=()=>{E.ctx.isUnmounted?s(B):r(B,T,b)},fe=()=>{const we=B._isLeaving||!!B[qt];B._isLeaving&&B[qt](!0),D.persisted&&!we?oe():J(B,()=>{oe(),ae&&ae()})};ne?ne(B,oe,fe):fe()}else r(B,T,b)},Fe=(E,T,b,q=!1,$=!1)=>{const{type:B,props:Y,ref:D,children:W,dynamicChildren:j,shapeFlag:ie,patchFlag:J,dirs:ne,cacheIndex:ae,memo:oe}=E;if(J===-2&&($=!1),D!=null&&(pn(),oi(D,null,b,E,!0),mn()),ae!=null&&(T.renderCache[ae]=void 0),ie&256){T.ctx.deactivate(E);return}const fe=ie&1&&ne,we=!is(E);let Be;if(we&&(Be=Y&&Y.onVnodeBeforeUnmount)&&tn(Be,T,E),ie&6)Lt(E.component,b,q);else{if(ie&128){E.suspense.unmount(b,q);return}fe&&yr(E,null,T,"beforeUnmount"),ie&64?E.type.remove(E,T,b,Ut,q):j&&!j.hasOnce&&(B!==Ne||J>0&&J&64)?Ft(j,T,b,!1,!0):(B===Ne&&J&384||!$&&ie&16)&&Ft(W,T,b),q&&Ce(E)}const Ye=oe!=null&&ae==null;(we&&(Be=Y&&Y.onVnodeUnmounted)||fe||Ye)&&At(()=>{Be&&tn(Be,T,E),fe&&yr(E,null,T,"unmounted"),Ye&&(E.el=null)},b)},Ce=E=>{const{type:T,el:b,anchor:q,transition:$}=E;if(T===Ne){Bn(b,q);return}if(T===ml){L(E);return}const B=()=>{s(b),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(E.shapeFlag&1&&$&&!$.persisted){const{leave:Y,delayLeave:D}=$,W=()=>Y(b,B);D?D(E.el,B,W):W()}else B()},Bn=(E,T)=>{let b;for(;E!==T;)b=y(E),s(E),E=b;s(T)},Lt=(E,T,b)=>{const{bum:q,scope:$,job:B,subTree:Y,um:D,m:W,a:j}=E;Hh(W),Hh(j),q&&Ao(q),$.stop(),B&&(B.flags|=8,Fe(Y,E,T,b)),D&&At(D,T),At(()=>{E.isUnmounted=!0},T)},Ft=(E,T,b,q=!1,$=!1,B=0)=>{for(let Y=B;Y<E.length;Y++)Fe(E[Y],T,b,q,$)},Kt=E=>{if(E.shapeFlag&6)return Kt(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const T=y(E.anchor||E.el),b=T&&T[up];return b?y(b):T};let dr=!1;const $r=(E,T,b)=>{let q;E==null?T._vnode&&(Fe(T._vnode,null,null,!0),q=T._vnode.component):O(T._vnode||null,E,T,null,null,null,b),T._vnode=E,dr||(dr=!0,Vh(q),ip(),dr=!1)},Ut={p:O,um:Fe,m:nt,r:Ce,mt:ye,mc:_,pc:z,pbc:A,n:Kt,o:t};return{render:$r,hydrate:void 0,createApp:Ky($r)}}function pl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function vr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function lv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Bc(t,e,n=!1){const r=t.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=In(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Bc(o,l)),l.type===wa&&(l.patchFlag===-1&&(l=s[i]=In(l)),l.el=o.el),l.type===_t&&!l.el&&(l.el=o.el)}}function cv(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<h?i=l+1:o=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Op(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Op(e)}function Hh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function xp(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?xp(e.subTree):null}const Mp=t=>t.__isSuspense;function uv(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):_y(t)}const Ne=Symbol.for("v-fgt"),wa=Symbol.for("v-txt"),_t=Symbol.for("v-cmt"),ml=Symbol.for("v-stc"),li=[];let Ot=null;function ee(t=!1){li.push(Ot=t?null:[])}function hv(){li.pop(),Ot=li[li.length-1]||null}let yi=1;function jo(t,e=!1){yi+=t,t<0&&Ot&&e&&(Ot.hasOnce=!0)}function Lp(t){return t.dynamicChildren=yi>0?Ot||ns:null,hv(),yi>0&&Ot&&Ot.push(t),t}function se(t,e,n,r,s,i){return Lp(k(t,e,n,r,s,i,!0))}function Yt(t,e,n,r,s){return Lp(xe(t,e,n,r,s,!0))}function vi(t){return t?t.__v_isVNode===!0:!1}function br(t,e){return t.type===e.type&&t.key===e.key}const Fp=({key:t})=>t??null,So=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ue(t)||vt(t)||pe(t)?{i:yt,r:t,k:e,f:!!n}:t:null);function k(t,e=null,n=null,r=0,s=null,i=t===Ne?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Fp(e),ref:e&&So(e),scopeId:ap,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:yt};return l?(qo(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ue(n)?8:16),yi>0&&!o&&Ot&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ot.push(c),c}const xe=dv;function dv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Ly)&&(t=_t),vi(t)){const l=ir(t,e,!0);return n&&qo(l,n),yi>0&&!i&&Ot&&(l.shapeFlag&6?Ot[Ot.indexOf(t)]=l:Ot.push(l)),l.patchFlag=-2,l}if(Tv(t)&&(t=t.__vccOpts),e){e=fv(e);let{class:l,style:c}=e;l&&!Ue(l)&&(e.class=We(l)),Se(c)&&(xc(c)&&!le(c)&&(c=Ze({},c)),e.style=fa(c))}const o=Ue(t)?1:Mp(t)?128:hp(t)?64:Se(t)?4:pe(t)?2:0;return k(t,e,n,r,s,o,i,!0)}function fv(t){return t?xc(t)||Cp(t)?Ze({},t):t:null}function ir(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,h=e?pv(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Fp(h),ref:e&&e.ref?n&&i?le(i)?i.concat(So(e)):[i,So(e)]:So(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ne?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ir(t.ssContent),ssFallback:t.ssFallback&&ir(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&_i(d,c.clone(d)),d}function Nt(t=" ",e=0){return xe(wa,null,t,e)}function Ve(t="",e=!1){return e?(ee(),Yt(_t,null,t)):xe(_t,null,t)}function on(t){return t==null||typeof t=="boolean"?xe(_t):le(t)?xe(Ne,null,t.slice()):vi(t)?In(t):xe(wa,null,String(t))}function In(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ir(t)}function qo(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),qo(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Cp(e)?e._ctx=yt:s===3&&yt&&(yt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(pe(e)){if(r&65){qo(t,{default:e});return}e={default:e,_ctx:yt},n=32}else e=String(e),r&64?(n=16,e=[Nt(e)]):n=8;t.children=e,t.shapeFlag|=n}function pv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=We([e.class,r.class]));else if(s==="style")e.style=fa([e.style,r.style]);else if(ca(s)){const i=e[s],o=r[s];o&&i!==o&&!(le(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!ua(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function tn(t,e,n,r=null){Wt(t,e,7,[n,r])}const mv=Ip();let gv=0;function _v(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||mv,i={uid:gv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new $_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:kp(r,s),emitsOptions:Ap(r,s),emit:null,emitted:null,propsDefaults:De,inheritAttrs:r.inheritAttrs,ctx:De,data:De,props:De,attrs:De,slots:De,refs:De,setupState:De,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Gy.bind(null,i),t.ce&&t.ce(i),i}let St=null;const Up=()=>St||yt;let Ho,Yl;{const t=da(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ho=e("__VUE_INSTANCE_SETTERS__",n=>St=n),Yl=e("__VUE_SSR_SETTERS__",n=>Ei=n)}const Oi=t=>{const e=St;return Ho(t),t.scope.on(),()=>{t.scope.off(),Ho(e)}},Wh=()=>{St&&St.scope.off(),Ho(null)};function Bp(t){return t.vnode.shapeFlag&4}let Ei=!1;function yv(t,e=!1,n=!1){e&&Yl(e);const{props:r,children:s}=t.vnode,i=Bp(t);ev(t,r,i,e),sv(t,s,n||e);const o=i?vv(t,e):void 0;return e&&Yl(!1),o}function vv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Uy);const{setup:r}=n;if(r){pn();const s=t.setupContext=r.length>1?wv(t):null,i=Oi(t),o=Ni(r,t,0,[t.props,s]),l=Of(o);if(mn(),i(),(l||t.sp)&&!is(t)&&_p(t),l){if(o.then(Wh,Wh),e)return o.then(c=>{Kh(t,c)}).catch(c=>{ma(c,t,0)});t.asyncDep=o}else Kh(t,o)}else $p(t)}function Kh(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Se(e)&&(t.setupState=np(e)),$p(t)}function $p(t,e,n){const r=t.type;t.render||(t.render=r.render||cn);{const s=Oi(t);pn();try{By(t)}finally{mn(),s()}}}const Ev={get(t,e){return mt(t,"get",""),t[e]}};function wv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Ev),slots:t.slots,emit:t.emit,expose:e}}function Ta(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(np(ay(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ai)return ai[n](t)},has(e,n){return n in e||n in ai}})):t.proxy}function Tv(t){return pe(t)&&"__vccOpts"in t}const es=(t,e)=>dy(t,e,Ei);function Iv(t,e,n){try{jo(-1);const r=arguments.length;return r===2?Se(e)&&!le(e)?vi(e)?xe(t,null,[e]):xe(t,e):xe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&vi(n)&&(n=[n]),xe(t,e,n))}finally{jo(1)}}const Av="3.5.39";/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Jl;const zh=typeof window<"u"&&window.trustedTypes;if(zh)try{Jl=zh.createPolicy("vue",{createHTML:t=>t})}catch{}const jp=Jl?t=>Jl.createHTML(t):t=>t,bv="http://www.w3.org/2000/svg",Rv="http://www.w3.org/1998/Math/MathML",Tn=typeof document<"u"?document:null,Gh=Tn&&Tn.createElement("template"),Sv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Tn.createElementNS(bv,t):e==="mathml"?Tn.createElementNS(Rv,t):n?Tn.createElement(t,{is:n}):Tn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Tn.createTextNode(t),createComment:t=>Tn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Tn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Gh.innerHTML=jp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Gh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Wn="transition",js="animation",wi=Symbol("_vtc"),qp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Cv=Ze({},dp,qp),Pv=t=>(t.displayName="Transition",t.props=Cv,t),kv=Pv((t,{slots:e})=>Iv(Ry,Vv(t),e)),Er=(t,e=[])=>{le(t)?t.forEach(n=>n(...e)):t&&t(...e)},Qh=t=>t?le(t)?t.some(e=>e.length>1):t.length>1:!1;function Vv(t){const e={};for(const I in t)I in qp||(e[I]=t[I]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:h=o,appearToClass:d=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:y=`${n}-leave-active`,leaveToClass:S=`${n}-leave-to`}=t,V=Dv(s),O=V&&V[0],P=V&&V[1],{onBeforeEnter:M,onEnter:x,onEnterCancelled:H,onLeave:L,onLeaveCancelled:Q,onBeforeAppear:Z=M,onAppear:w=x,onAppearCancelled:_=H}=e,g=(I,v,ye,Ge)=>{I._enterCancelled=Ge,wr(I,v?d:l),wr(I,v?h:o),ye&&ye()},A=(I,v)=>{I._isLeaving=!1,wr(I,p),wr(I,S),wr(I,y),v&&v()},R=I=>(v,ye)=>{const Ge=I?w:x,ge=()=>g(v,I,ye);Er(Ge,[v,ge]),Yh(()=>{wr(v,I?c:i),wn(v,I?d:l),Qh(Ge)||Jh(v,r,O,ge)})};return Ze(e,{onBeforeEnter(I){Er(M,[I]),wn(I,i),wn(I,o)},onBeforeAppear(I){Er(Z,[I]),wn(I,c),wn(I,h)},onEnter:R(!1),onAppear:R(!0),onLeave(I,v){I._isLeaving=!0;const ye=()=>A(I,v);wn(I,p),I._enterCancelled?(wn(I,y),ed(I)):(ed(I),wn(I,y)),Yh(()=>{I._isLeaving&&(wr(I,p),wn(I,S),Qh(L)||Jh(I,r,P,ye))}),Er(L,[I,ye])},onEnterCancelled(I){g(I,!1,void 0,!0),Er(H,[I])},onAppearCancelled(I){g(I,!0,void 0,!0),Er(_,[I])},onLeaveCancelled(I){A(I),Er(Q,[I])}})}function Dv(t){if(t==null)return null;if(Se(t))return[gl(t.enter),gl(t.leave)];{const e=gl(t);return[e,e]}}function gl(t){return N_(t)}function wn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[wi]||(t[wi]=new Set)).add(e)}function wr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[wi];n&&(n.delete(e),n.size||(t[wi]=void 0))}function Yh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Nv=0;function Jh(t,e,n,r){const s=t._endId=++Nv,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=Ov(t,e);if(!o)return r();const h=o+"end";let d=0;const p=()=>{t.removeEventListener(h,y),i()},y=S=>{S.target===t&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},l+1),t.addEventListener(h,y)}function Ov(t,e){const n=window.getComputedStyle(t),r=V=>(n[V]||"").split(", "),s=r(`${Wn}Delay`),i=r(`${Wn}Duration`),o=Xh(s,i),l=r(`${js}Delay`),c=r(`${js}Duration`),h=Xh(l,c);let d=null,p=0,y=0;e===Wn?o>0&&(d=Wn,p=o,y=i.length):e===js?h>0&&(d=js,p=h,y=c.length):(p=Math.max(o,h),d=p>0?o>h?Wn:js:null,y=d?d===Wn?i.length:c.length:0);const S=d===Wn&&/\b(?:transform|all)(?:,|$)/.test(r(`${Wn}Property`).toString());return{type:d,timeout:p,propCount:y,hasTransform:S}}function Xh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Zh(n)+Zh(t[r])))}function Zh(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function ed(t){return(t?t.ownerDocument:document).body.offsetHeight}function xv(t,e,n){const r=t[wi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Wo=Symbol("_vod"),Hp=Symbol("_vsh"),_l={name:"show",beforeMount(t,{value:e},{transition:n}){t[Wo]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):qs(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),qs(t,!0),r.enter(t)):r.leave(t,()=>{qs(t,!1)}):qs(t,e))},beforeUnmount(t,{value:e}){qs(t,e)}};function qs(t,e){t.style.display=e?t[Wo]:"none",t[Hp]=!e}const Mv=Symbol(""),Lv=/(?:^|;)\s*display\s*:/;function Fv(t,e,n){const r=t.style,s=Ue(n);let i=!1;if(n&&!s){if(e)if(Ue(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Ys(r,l,"")}else for(const o in e)n[o]==null&&Ys(r,o,"");for(const o in n){o==="display"&&(i=!0);const l=n[o];l!=null?Bv(t,o,!Ue(e)&&e?e[o]:void 0,l)||Ys(r,o,l):Ys(r,o,"")}}else if(s){if(e!==n){const o=r[Mv];o&&(n+=";"+o),r.cssText=n,i=Lv.test(n)}}else e&&t.removeAttribute("style");Wo in t&&(t[Wo]=i?r.display:"",t[Hp]&&(r.display="none"))}const td=/\s*!important$/;function Ys(t,e,n){if(le(n))n.forEach(r=>Ys(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Uv(t,e);td.test(n)?t.setProperty(cr(r),n.replace(td,""),"important"):t[r]=n}}const nd=["Webkit","Moz","ms"],yl={};function Uv(t,e){const n=yl[e];if(n)return n;let r=Gt(e);if(r!=="filter"&&r in t)return yl[e]=r;r=Lf(r);for(let s=0;s<nd.length;s++){const i=nd[s]+r;if(i in t)return yl[e]=i}return e}function Bv(t,e,n,r){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Ue(r)&&n===r}const rd="http://www.w3.org/1999/xlink";function sd(t,e,n,r,s,i=U_(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(rd,e.slice(6,e.length)):t.setAttributeNS(rd,e,n):n==null||i&&!Uf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Jt(n)?String(n):n)}function id(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?jp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Uf(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Qr(t,e,n,r){t.addEventListener(e,n,r)}function $v(t,e,n,r){t.removeEventListener(e,n,r)}const od=Symbol("_vei");function jv(t,e,n,r,s=null){const i=t[od]||(t[od]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=Wv(e);if(r){const h=i[e]=Gv(r,s);Qr(t,l,h,c)}else o&&($v(t,l,o,c),i[e]=void 0)}}const qv=/(Once|Passive|Capture)$/,Hv=/^on:?(?:Once|Passive|Capture)$/;function Wv(t){let e,n;for(;(n=t.match(qv))&&!Hv.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):cr(t.slice(2)),e]}let vl=0;const Kv=Promise.resolve(),zv=()=>vl||(Kv.then(()=>vl=0),vl=Date.now());function Gv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(le(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const o=s.slice(),l=[r];for(let c=0;c<o.length&&!r._stopped;c++){const h=o[c];h&&Wt(h,e,5,l)}}else Wt(s,e,5,[r])};return n.value=t,n.attached=zv(),n}const ad=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Qv=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?xv(t,r,o):e==="style"?Fv(t,n,r):ca(e)?ua(e)||jv(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Yv(t,e,r,o))?(id(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&sd(t,e,r,o,i,e!=="value")):t._isVueCE&&(Jv(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Ue(r)))?id(t,Gt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),sd(t,e,r,o))};function Yv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&ad(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ad(e)&&Ue(n)?!1:e in t}function Jv(t,e){const n=t._def.props;if(!n)return!1;const r=Gt(e);return Array.isArray(n)?n.some(s=>Gt(s)===r):Object.keys(n).some(s=>Gt(s)===r)}const ld=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>Ao(e,n):e};function Xv(t){t.target.composing=!0}function cd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const El=Symbol("_assign");function ud(t,e,n){return e&&(t=t.trim()),n&&(t=Rc(t)),t}const bt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[El]=ld(s);const i=r||s.props&&s.props.type==="number";Qr(t,e?"change":"input",o=>{o.target.composing||t[El](ud(t.value,n,i))}),(n||i)&&Qr(t,"change",()=>{t.value=ud(t.value,n,i)}),e||(Qr(t,"compositionstart",Xv),Qr(t,"compositionend",cd),Qr(t,"change",cd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[El]=ld(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Rc(t.value):t.value,c=e??"";if(l===c)return;const h=t.getRootNode();(h instanceof Document||h instanceof ShadowRoot)&&h.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c)}},Zv=["ctrl","shift","alt","meta"],eE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Zv.some(n=>t[`${n}Key`]&&!e.includes(n))},ln=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=eE[e[o]];if(l&&l(s,e))return}return t(s,...i)})},tE={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},wl=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=cr(s.key);if(e.some(o=>o===i||tE[o]===i))return t(s)})},nE=Ze({patchProp:Qv},Sv);let hd;function rE(){return hd||(hd=ov(nE))}const sE=(...t)=>{const e=rE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=oE(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,iE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function iE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function oE(t){return Ue(t)?document.querySelector(t):t}var dd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},aE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Kp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let y=(l&15)<<2|h>>6,S=h&63;c||(S=64,o||(y=64)),r.push(n[d],n[p],n[y],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Wp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):aE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new lE;const y=i<<2|l>>4;if(r.push(y),h!==64){const S=l<<4&240|h>>2;if(r.push(S),p!==64){const V=h<<6&192|p;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class lE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cE=function(t){const e=Wp(t);return Kp.encodeByteArray(e,!0)},Ko=function(t){return cE(t).replace(/\./g,"")},zp=function(t){try{return Kp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function uE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const hE=()=>uE().__FIREBASE_DEFAULTS__,dE=()=>{if(typeof process>"u"||typeof dd>"u")return;const t=dd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&zp(t[1]);return e&&JSON.parse(e)},Ia=()=>{try{return hE()||dE()||fE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Gp=t=>{var e,n;return(n=(e=Ia())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},pE=t=>{const e=Gp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Qp=()=>{var t;return(t=Ia())===null||t===void 0?void 0:t.config},Yp=t=>{var e;return(e=Ia())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function gE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ko(JSON.stringify(n)),Ko(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _E(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function yE(){var t;const e=(t=Ia())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function vE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function EE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function TE(){const t=wt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function IE(){return!yE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function AE(){try{return typeof indexedDB=="object"}catch{return!1}}function bE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE="FirebaseError";class Fn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=RE,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xi.prototype.create)}}class xi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?SE(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Fn(s,l,r)}}function SE(t,e){return t.replace(CE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const CE=/\{\$([^}]+)}/g;function PE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(fd(i)&&fd(o)){if(!zo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function fd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Js(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Xs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function kE(t,e){const n=new VE(t,e);return n.subscribe.bind(n)}class VE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");DE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Tl),s.error===void 0&&(s.error=Tl),s.complete===void 0&&(s.complete=Tl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function DE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Tl(){}/**
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
 */function ze(t){return t&&t._delegate?t._delegate:t}class Vr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ir="[DEFAULT]";/**
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
 */class NE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new mE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xE(e))try{this.getOrInitializeService({instanceIdentifier:Ir})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ir){return this.instances.has(e)}getOptions(e=Ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:OE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ir){return this.component?this.component.multipleInstances?e:Ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function OE(t){return t===Ir?void 0:t}function xE(t){return t.instantiationMode==="EAGER"}/**
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
 */class ME{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new NE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const LE={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},FE=ve.INFO,UE={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},BE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=UE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $c{constructor(e){this.name=e,this._logLevel=FE,this._logHandler=BE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?LE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const $E=(t,e)=>e.some(n=>t instanceof n);let pd,md;function jE(){return pd||(pd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qE(){return md||(md=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jp=new WeakMap,Xl=new WeakMap,Xp=new WeakMap,Il=new WeakMap,jc=new WeakMap;function HE(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(er(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Jp.set(n,t)}).catch(()=>{}),jc.set(e,t),e}function WE(t){if(Xl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Xl.set(t,e)}let Zl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Xp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return er(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function KE(t){Zl=t(Zl)}function zE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Al(this),e,...n);return Xp.set(r,e.sort?e.sort():[e]),er(r)}:qE().includes(t)?function(...e){return t.apply(Al(this),e),er(Jp.get(this))}:function(...e){return er(t.apply(Al(this),e))}}function GE(t){return typeof t=="function"?zE(t):(t instanceof IDBTransaction&&WE(t),$E(t,jE())?new Proxy(t,Zl):t)}function er(t){if(t instanceof IDBRequest)return HE(t);if(Il.has(t))return Il.get(t);const e=GE(t);return e!==t&&(Il.set(t,e),jc.set(e,t)),e}const Al=t=>jc.get(t);function QE(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=er(o);return r&&o.addEventListener("upgradeneeded",c=>{r(er(o.result),c.oldVersion,c.newVersion,er(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const YE=["get","getKey","getAll","getAllKeys","count"],JE=["put","add","delete","clear"],bl=new Map;function gd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bl.get(e))return bl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=JE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||YE.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return bl.set(e,i),i}KE(t=>({...t,get:(e,n,r)=>gd(e,n)||t.get(e,n,r),has:(e,n)=>!!gd(e,n)||t.has(e,n)}));/**
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
 */class XE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ZE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ZE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ec="@firebase/app",_d="0.10.13";/**
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
 */const Dn=new $c("@firebase/app"),ew="@firebase/app-compat",tw="@firebase/analytics-compat",nw="@firebase/analytics",rw="@firebase/app-check-compat",sw="@firebase/app-check",iw="@firebase/auth",ow="@firebase/auth-compat",aw="@firebase/database",lw="@firebase/data-connect",cw="@firebase/database-compat",uw="@firebase/functions",hw="@firebase/functions-compat",dw="@firebase/installations",fw="@firebase/installations-compat",pw="@firebase/messaging",mw="@firebase/messaging-compat",gw="@firebase/performance",_w="@firebase/performance-compat",yw="@firebase/remote-config",vw="@firebase/remote-config-compat",Ew="@firebase/storage",ww="@firebase/storage-compat",Tw="@firebase/firestore",Iw="@firebase/vertexai-preview",Aw="@firebase/firestore-compat",bw="firebase",Rw="10.14.1";/**
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
 */const tc="[DEFAULT]",Sw={[ec]:"fire-core",[ew]:"fire-core-compat",[nw]:"fire-analytics",[tw]:"fire-analytics-compat",[sw]:"fire-app-check",[rw]:"fire-app-check-compat",[iw]:"fire-auth",[ow]:"fire-auth-compat",[aw]:"fire-rtdb",[lw]:"fire-data-connect",[cw]:"fire-rtdb-compat",[uw]:"fire-fn",[hw]:"fire-fn-compat",[dw]:"fire-iid",[fw]:"fire-iid-compat",[pw]:"fire-fcm",[mw]:"fire-fcm-compat",[gw]:"fire-perf",[_w]:"fire-perf-compat",[yw]:"fire-rc",[vw]:"fire-rc-compat",[Ew]:"fire-gcs",[ww]:"fire-gcs-compat",[Tw]:"fire-fst",[Aw]:"fire-fst-compat",[Iw]:"fire-vertex","fire-js":"fire-js",[bw]:"fire-js-all"};/**
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
 */const Go=new Map,Cw=new Map,nc=new Map;function yd(t,e){try{t.container.addComponent(e)}catch(n){Dn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ds(t){const e=t.name;if(nc.has(e))return Dn.debug(`There were multiple attempts to register component ${e}.`),!1;nc.set(e,t);for(const n of Go.values())yd(n,t);for(const n of Cw.values())yd(n,t);return!0}function qc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Rn(t){return t.settings!==void 0}/**
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
 */const Pw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},tr=new xi("app","Firebase",Pw);/**
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
 */class kw{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tr.create("app-deleted",{appName:this._name})}}/**
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
 */const ws=Rw;function Zp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:tc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw tr.create("bad-app-name",{appName:String(s)});if(n||(n=Qp()),!n)throw tr.create("no-options");const i=Go.get(s);if(i){if(zo(n,i.options)&&zo(r,i.config))return i;throw tr.create("duplicate-app",{appName:s})}const o=new ME(s);for(const c of nc.values())o.addComponent(c);const l=new kw(n,r,o);return Go.set(s,l),l}function em(t=tc){const e=Go.get(t);if(!e&&t===tc&&Qp())return Zp();if(!e)throw tr.create("no-app",{appName:t});return e}function nr(t,e,n){var r;let s=(r=Sw[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dn.warn(l.join(" "));return}ds(new Vr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Vw="firebase-heartbeat-database",Dw=1,Ti="firebase-heartbeat-store";let Rl=null;function tm(){return Rl||(Rl=QE(Vw,Dw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ti)}catch(n){console.warn(n)}}}}).catch(t=>{throw tr.create("idb-open",{originalErrorMessage:t.message})})),Rl}async function Nw(t){try{const n=(await tm()).transaction(Ti),r=await n.objectStore(Ti).get(nm(t));return await n.done,r}catch(e){if(e instanceof Fn)Dn.warn(e.message);else{const n=tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dn.warn(n.message)}}}async function vd(t,e){try{const r=(await tm()).transaction(Ti,"readwrite");await r.objectStore(Ti).put(e,nm(t)),await r.done}catch(n){if(n instanceof Fn)Dn.warn(n.message);else{const r=tr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Dn.warn(r.message)}}}function nm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ow=1024,xw=30*24*60*60*1e3;class Mw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Fw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ed();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=xw}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Dn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ed(),{heartbeatsToSend:r,unsentEntries:s}=Lw(this._heartbeatsCache.heartbeats),i=Ko(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Dn.warn(n),""}}}function Ed(){return new Date().toISOString().substring(0,10)}function Lw(t,e=Ow){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),wd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),wd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Fw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return AE()?bE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Nw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return vd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return vd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function wd(t){return Ko(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Uw(t){ds(new Vr("platform-logger",e=>new XE(e),"PRIVATE")),ds(new Vr("heartbeat",e=>new Mw(e),"PRIVATE")),nr(ec,_d,t),nr(ec,_d,"esm2017"),nr("fire-js","")}Uw("");var Td=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kr,rm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,_){function g(){}g.prototype=_.prototype,w.D=_.prototype,w.prototype=new g,w.prototype.constructor=w,w.C=function(A,R,I){for(var v=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)v[ye-2]=arguments[ye];return _.prototype[R].apply(A,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,_,g){g||(g=0);var A=Array(16);if(typeof _=="string")for(var R=0;16>R;++R)A[R]=_.charCodeAt(g++)|_.charCodeAt(g++)<<8|_.charCodeAt(g++)<<16|_.charCodeAt(g++)<<24;else for(R=0;16>R;++R)A[R]=_[g++]|_[g++]<<8|_[g++]<<16|_[g++]<<24;_=w.g[0],g=w.g[1],R=w.g[2];var I=w.g[3],v=_+(I^g&(R^I))+A[0]+3614090360&4294967295;_=g+(v<<7&4294967295|v>>>25),v=I+(R^_&(g^R))+A[1]+3905402710&4294967295,I=_+(v<<12&4294967295|v>>>20),v=R+(g^I&(_^g))+A[2]+606105819&4294967295,R=I+(v<<17&4294967295|v>>>15),v=g+(_^R&(I^_))+A[3]+3250441966&4294967295,g=R+(v<<22&4294967295|v>>>10),v=_+(I^g&(R^I))+A[4]+4118548399&4294967295,_=g+(v<<7&4294967295|v>>>25),v=I+(R^_&(g^R))+A[5]+1200080426&4294967295,I=_+(v<<12&4294967295|v>>>20),v=R+(g^I&(_^g))+A[6]+2821735955&4294967295,R=I+(v<<17&4294967295|v>>>15),v=g+(_^R&(I^_))+A[7]+4249261313&4294967295,g=R+(v<<22&4294967295|v>>>10),v=_+(I^g&(R^I))+A[8]+1770035416&4294967295,_=g+(v<<7&4294967295|v>>>25),v=I+(R^_&(g^R))+A[9]+2336552879&4294967295,I=_+(v<<12&4294967295|v>>>20),v=R+(g^I&(_^g))+A[10]+4294925233&4294967295,R=I+(v<<17&4294967295|v>>>15),v=g+(_^R&(I^_))+A[11]+2304563134&4294967295,g=R+(v<<22&4294967295|v>>>10),v=_+(I^g&(R^I))+A[12]+1804603682&4294967295,_=g+(v<<7&4294967295|v>>>25),v=I+(R^_&(g^R))+A[13]+4254626195&4294967295,I=_+(v<<12&4294967295|v>>>20),v=R+(g^I&(_^g))+A[14]+2792965006&4294967295,R=I+(v<<17&4294967295|v>>>15),v=g+(_^R&(I^_))+A[15]+1236535329&4294967295,g=R+(v<<22&4294967295|v>>>10),v=_+(R^I&(g^R))+A[1]+4129170786&4294967295,_=g+(v<<5&4294967295|v>>>27),v=I+(g^R&(_^g))+A[6]+3225465664&4294967295,I=_+(v<<9&4294967295|v>>>23),v=R+(_^g&(I^_))+A[11]+643717713&4294967295,R=I+(v<<14&4294967295|v>>>18),v=g+(I^_&(R^I))+A[0]+3921069994&4294967295,g=R+(v<<20&4294967295|v>>>12),v=_+(R^I&(g^R))+A[5]+3593408605&4294967295,_=g+(v<<5&4294967295|v>>>27),v=I+(g^R&(_^g))+A[10]+38016083&4294967295,I=_+(v<<9&4294967295|v>>>23),v=R+(_^g&(I^_))+A[15]+3634488961&4294967295,R=I+(v<<14&4294967295|v>>>18),v=g+(I^_&(R^I))+A[4]+3889429448&4294967295,g=R+(v<<20&4294967295|v>>>12),v=_+(R^I&(g^R))+A[9]+568446438&4294967295,_=g+(v<<5&4294967295|v>>>27),v=I+(g^R&(_^g))+A[14]+3275163606&4294967295,I=_+(v<<9&4294967295|v>>>23),v=R+(_^g&(I^_))+A[3]+4107603335&4294967295,R=I+(v<<14&4294967295|v>>>18),v=g+(I^_&(R^I))+A[8]+1163531501&4294967295,g=R+(v<<20&4294967295|v>>>12),v=_+(R^I&(g^R))+A[13]+2850285829&4294967295,_=g+(v<<5&4294967295|v>>>27),v=I+(g^R&(_^g))+A[2]+4243563512&4294967295,I=_+(v<<9&4294967295|v>>>23),v=R+(_^g&(I^_))+A[7]+1735328473&4294967295,R=I+(v<<14&4294967295|v>>>18),v=g+(I^_&(R^I))+A[12]+2368359562&4294967295,g=R+(v<<20&4294967295|v>>>12),v=_+(g^R^I)+A[5]+4294588738&4294967295,_=g+(v<<4&4294967295|v>>>28),v=I+(_^g^R)+A[8]+2272392833&4294967295,I=_+(v<<11&4294967295|v>>>21),v=R+(I^_^g)+A[11]+1839030562&4294967295,R=I+(v<<16&4294967295|v>>>16),v=g+(R^I^_)+A[14]+4259657740&4294967295,g=R+(v<<23&4294967295|v>>>9),v=_+(g^R^I)+A[1]+2763975236&4294967295,_=g+(v<<4&4294967295|v>>>28),v=I+(_^g^R)+A[4]+1272893353&4294967295,I=_+(v<<11&4294967295|v>>>21),v=R+(I^_^g)+A[7]+4139469664&4294967295,R=I+(v<<16&4294967295|v>>>16),v=g+(R^I^_)+A[10]+3200236656&4294967295,g=R+(v<<23&4294967295|v>>>9),v=_+(g^R^I)+A[13]+681279174&4294967295,_=g+(v<<4&4294967295|v>>>28),v=I+(_^g^R)+A[0]+3936430074&4294967295,I=_+(v<<11&4294967295|v>>>21),v=R+(I^_^g)+A[3]+3572445317&4294967295,R=I+(v<<16&4294967295|v>>>16),v=g+(R^I^_)+A[6]+76029189&4294967295,g=R+(v<<23&4294967295|v>>>9),v=_+(g^R^I)+A[9]+3654602809&4294967295,_=g+(v<<4&4294967295|v>>>28),v=I+(_^g^R)+A[12]+3873151461&4294967295,I=_+(v<<11&4294967295|v>>>21),v=R+(I^_^g)+A[15]+530742520&4294967295,R=I+(v<<16&4294967295|v>>>16),v=g+(R^I^_)+A[2]+3299628645&4294967295,g=R+(v<<23&4294967295|v>>>9),v=_+(R^(g|~I))+A[0]+4096336452&4294967295,_=g+(v<<6&4294967295|v>>>26),v=I+(g^(_|~R))+A[7]+1126891415&4294967295,I=_+(v<<10&4294967295|v>>>22),v=R+(_^(I|~g))+A[14]+2878612391&4294967295,R=I+(v<<15&4294967295|v>>>17),v=g+(I^(R|~_))+A[5]+4237533241&4294967295,g=R+(v<<21&4294967295|v>>>11),v=_+(R^(g|~I))+A[12]+1700485571&4294967295,_=g+(v<<6&4294967295|v>>>26),v=I+(g^(_|~R))+A[3]+2399980690&4294967295,I=_+(v<<10&4294967295|v>>>22),v=R+(_^(I|~g))+A[10]+4293915773&4294967295,R=I+(v<<15&4294967295|v>>>17),v=g+(I^(R|~_))+A[1]+2240044497&4294967295,g=R+(v<<21&4294967295|v>>>11),v=_+(R^(g|~I))+A[8]+1873313359&4294967295,_=g+(v<<6&4294967295|v>>>26),v=I+(g^(_|~R))+A[15]+4264355552&4294967295,I=_+(v<<10&4294967295|v>>>22),v=R+(_^(I|~g))+A[6]+2734768916&4294967295,R=I+(v<<15&4294967295|v>>>17),v=g+(I^(R|~_))+A[13]+1309151649&4294967295,g=R+(v<<21&4294967295|v>>>11),v=_+(R^(g|~I))+A[4]+4149444226&4294967295,_=g+(v<<6&4294967295|v>>>26),v=I+(g^(_|~R))+A[11]+3174756917&4294967295,I=_+(v<<10&4294967295|v>>>22),v=R+(_^(I|~g))+A[2]+718787259&4294967295,R=I+(v<<15&4294967295|v>>>17),v=g+(I^(R|~_))+A[9]+3951481745&4294967295,w.g[0]=w.g[0]+_&4294967295,w.g[1]=w.g[1]+(R+(v<<21&4294967295|v>>>11))&4294967295,w.g[2]=w.g[2]+R&4294967295,w.g[3]=w.g[3]+I&4294967295}r.prototype.u=function(w,_){_===void 0&&(_=w.length);for(var g=_-this.blockSize,A=this.B,R=this.h,I=0;I<_;){if(R==0)for(;I<=g;)s(this,w,I),I+=this.blockSize;if(typeof w=="string"){for(;I<_;)if(A[R++]=w.charCodeAt(I++),R==this.blockSize){s(this,A),R=0;break}}else for(;I<_;)if(A[R++]=w[I++],R==this.blockSize){s(this,A),R=0;break}}this.h=R,this.o+=_},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var _=1;_<w.length-8;++_)w[_]=0;var g=8*this.o;for(_=w.length-8;_<w.length;++_)w[_]=g&255,g/=256;for(this.u(w),w=Array(16),_=g=0;4>_;++_)for(var A=0;32>A;A+=8)w[g++]=this.g[_]>>>A&255;return w};function i(w,_){var g=l;return Object.prototype.hasOwnProperty.call(g,w)?g[w]:g[w]=_(w)}function o(w,_){this.h=_;for(var g=[],A=!0,R=w.length-1;0<=R;R--){var I=w[R]|0;A&&I==_||(g[R]=I,A=!1)}this.g=g}var l={};function c(w){return-128<=w&&128>w?i(w,function(_){return new o([_|0],0>_?-1:0)}):new o([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return P(h(-w));for(var _=[],g=1,A=0;w>=g;A++)_[A]=w/g|0,g*=4294967296;return new o(_,0)}function d(w,_){if(w.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(w.charAt(0)=="-")return P(d(w.substring(1),_));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=h(Math.pow(_,8)),A=p,R=0;R<w.length;R+=8){var I=Math.min(8,w.length-R),v=parseInt(w.substring(R,R+I),_);8>I?(I=h(Math.pow(_,I)),A=A.j(I).add(h(v))):(A=A.j(g),A=A.add(h(v)))}return A}var p=c(0),y=c(1),S=c(16777216);t=o.prototype,t.m=function(){if(O(this))return-P(this).m();for(var w=0,_=1,g=0;g<this.g.length;g++){var A=this.i(g);w+=(0<=A?A:4294967296+A)*_,_*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(V(this))return"0";if(O(this))return"-"+P(this).toString(w);for(var _=h(Math.pow(w,6)),g=this,A="";;){var R=L(g,_).g;g=M(g,R.j(_));var I=((0<g.g.length?g.g[0]:g.h)>>>0).toString(w);if(g=R,V(g))return I+A;for(;6>I.length;)I="0"+I;A=I+A}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function V(w){if(w.h!=0)return!1;for(var _=0;_<w.g.length;_++)if(w.g[_]!=0)return!1;return!0}function O(w){return w.h==-1}t.l=function(w){return w=M(this,w),O(w)?-1:V(w)?0:1};function P(w){for(var _=w.g.length,g=[],A=0;A<_;A++)g[A]=~w.g[A];return new o(g,~w.h).add(y)}t.abs=function(){return O(this)?P(this):this},t.add=function(w){for(var _=Math.max(this.g.length,w.g.length),g=[],A=0,R=0;R<=_;R++){var I=A+(this.i(R)&65535)+(w.i(R)&65535),v=(I>>>16)+(this.i(R)>>>16)+(w.i(R)>>>16);A=v>>>16,I&=65535,v&=65535,g[R]=v<<16|I}return new o(g,g[g.length-1]&-2147483648?-1:0)};function M(w,_){return w.add(P(_))}t.j=function(w){if(V(this)||V(w))return p;if(O(this))return O(w)?P(this).j(P(w)):P(P(this).j(w));if(O(w))return P(this.j(P(w)));if(0>this.l(S)&&0>w.l(S))return h(this.m()*w.m());for(var _=this.g.length+w.g.length,g=[],A=0;A<2*_;A++)g[A]=0;for(A=0;A<this.g.length;A++)for(var R=0;R<w.g.length;R++){var I=this.i(A)>>>16,v=this.i(A)&65535,ye=w.i(R)>>>16,Ge=w.i(R)&65535;g[2*A+2*R]+=v*Ge,x(g,2*A+2*R),g[2*A+2*R+1]+=I*Ge,x(g,2*A+2*R+1),g[2*A+2*R+1]+=v*ye,x(g,2*A+2*R+1),g[2*A+2*R+2]+=I*ye,x(g,2*A+2*R+2)}for(A=0;A<_;A++)g[A]=g[2*A+1]<<16|g[2*A];for(A=_;A<2*_;A++)g[A]=0;return new o(g,0)};function x(w,_){for(;(w[_]&65535)!=w[_];)w[_+1]+=w[_]>>>16,w[_]&=65535,_++}function H(w,_){this.g=w,this.h=_}function L(w,_){if(V(_))throw Error("division by zero");if(V(w))return new H(p,p);if(O(w))return _=L(P(w),_),new H(P(_.g),P(_.h));if(O(_))return _=L(w,P(_)),new H(P(_.g),_.h);if(30<w.g.length){if(O(w)||O(_))throw Error("slowDivide_ only works with positive integers.");for(var g=y,A=_;0>=A.l(w);)g=Q(g),A=Q(A);var R=Z(g,1),I=Z(A,1);for(A=Z(A,2),g=Z(g,2);!V(A);){var v=I.add(A);0>=v.l(w)&&(R=R.add(g),I=v),A=Z(A,1),g=Z(g,1)}return _=M(w,R.j(_)),new H(R,_)}for(R=p;0<=w.l(_);){for(g=Math.max(1,Math.floor(w.m()/_.m())),A=Math.ceil(Math.log(g)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),I=h(g),v=I.j(_);O(v)||0<v.l(w);)g-=A,I=h(g),v=I.j(_);V(I)&&(I=y),R=R.add(I),w=M(w,v)}return new H(R,w)}t.A=function(w){return L(this,w).h},t.and=function(w){for(var _=Math.max(this.g.length,w.g.length),g=[],A=0;A<_;A++)g[A]=this.i(A)&w.i(A);return new o(g,this.h&w.h)},t.or=function(w){for(var _=Math.max(this.g.length,w.g.length),g=[],A=0;A<_;A++)g[A]=this.i(A)|w.i(A);return new o(g,this.h|w.h)},t.xor=function(w){for(var _=Math.max(this.g.length,w.g.length),g=[],A=0;A<_;A++)g[A]=this.i(A)^w.i(A);return new o(g,this.h^w.h)};function Q(w){for(var _=w.g.length+1,g=[],A=0;A<_;A++)g[A]=w.i(A)<<1|w.i(A-1)>>>31;return new o(g,w.h)}function Z(w,_){var g=_>>5;_%=32;for(var A=w.g.length-g,R=[],I=0;I<A;I++)R[I]=0<_?w.i(I+g)>>>_|w.i(I+g+1)<<32-_:w.i(I+g);return new o(R,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,rm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=d,kr=o}).apply(typeof Td<"u"?Td:typeof self<"u"?self:typeof window<"u"?window:{});var _o=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sm,Zs,im,Co,rc,om,am,lm;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,f){return a==Array.prototype||a==Object.prototype||(a[u]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof _o=="object"&&_o];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var f=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var C=a[m];if(!(C in f))break e;f=f[C]}a=a[a.length-1],m=f[a],u=u(m),u!=m&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var f=0,m=!1,C={next:function(){if(!m&&f<a.length){var N=f++;return{value:u(N,a[N]),done:!1}}return m=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function d(a,u,f){return a.call.apply(a.bind,arguments)}function p(a,u,f){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,m),a.apply(u,C)}}return function(){return a.apply(u,arguments)}}function y(a,u,f){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,y.apply(null,arguments)}function S(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function V(a,u){function f(){}f.prototype=u.prototype,a.aa=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(m,C,N){for(var G=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)G[ke-2]=arguments[ke];return u.prototype[C].apply(m,G)}}function O(a){const u=a.length;if(0<u){const f=Array(u);for(let m=0;m<u;m++)f[m]=a[m];return f}return[]}function P(a,u){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(c(m)){const C=a.length||0,N=m.length||0;a.length=C+N;for(let G=0;G<N;G++)a[C+G]=m[G]}else a.push(m)}}class M{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function x(a){return/^[\s\xa0]*$/.test(a)}function H(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function L(a){return L[" "](a),a}L[" "]=function(){};var Q=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function Z(a,u,f){for(const m in a)u.call(f,a[m],m,a)}function w(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function _(a){const u={};for(const f in a)u[f]=a[f];return u}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,u){let f,m;for(let C=1;C<arguments.length;C++){m=arguments[C];for(f in m)a[f]=m[f];for(let N=0;N<g.length;N++)f=g[N],Object.prototype.hasOwnProperty.call(m,f)&&(a[f]=m[f])}}function R(a){var u=1;a=a.split(":");const f=[];for(;0<u&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function I(a){l.setTimeout(()=>{throw a},0)}function v(){var a=Qe;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class ye{constructor(){this.h=this.g=null}add(u,f){const m=Ge.get();m.set(u,f),this.h?this.h.next=m:this.g=m,this.h=m}}var Ge=new M(()=>new ge,a=>a.reset());class ge{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let F,z=!1,Qe=new ye,_n=()=>{const a=l.Promise.resolve(void 0);F=()=>{a.then(nt)}};var nt=()=>{for(var a;a=v();){try{a.h.call(a.g)}catch(f){I(f)}var u=Ge;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}z=!1};function Fe(){this.s=this.s,this.C=this.C}Fe.prototype.s=!1,Fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ce(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Ce.prototype.h=function(){this.defaultPrevented=!0};var Bn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return a}();function Lt(a,u){if(Ce.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(Q){e:{try{L(u.nodeName);var C=!0;break e}catch{}C=!1}C||(u=null)}}else f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ft[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Lt.aa.h.call(this)}}V(Lt,Ce);var Ft={2:"touch",3:"pen",4:"mouse"};Lt.prototype.h=function(){Lt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Kt="closure_listenable_"+(1e6*Math.random()|0),dr=0;function $r(a,u,f,m,C){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!m,this.ha=C,this.key=++dr,this.da=this.fa=!1}function Ut(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function fr(a){this.src=a,this.g={},this.h=0}fr.prototype.add=function(a,u,f,m,C){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var G=T(a,u,m,C);return-1<G?(u=a[G],f||(u.fa=!1)):(u=new $r(u,this.src,N,!!m,C),u.fa=f,a.push(u)),u};function E(a,u){var f=u.type;if(f in a.g){var m=a.g[f],C=Array.prototype.indexOf.call(m,u,void 0),N;(N=0<=C)&&Array.prototype.splice.call(m,C,1),N&&(Ut(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function T(a,u,f,m){for(var C=0;C<a.length;++C){var N=a[C];if(!N.da&&N.listener==u&&N.capture==!!f&&N.ha==m)return C}return-1}var b="closure_lm_"+(1e6*Math.random()|0),q={};function $(a,u,f,m,C){if(Array.isArray(u)){for(var N=0;N<u.length;N++)$(a,u[N],f,m,C);return null}return f=ae(f),a&&a[Kt]?a.K(u,f,h(m)?!!m.capture:!1,C):B(a,u,f,!1,m,C)}function B(a,u,f,m,C,N){if(!u)throw Error("Invalid event type");var G=h(C)?!!C.capture:!!C,ke=J(a);if(ke||(a[b]=ke=new fr(a)),f=ke.add(u,f,m,G,N),f.proxy)return f;if(m=Y(),f.proxy=m,m.src=a,m.listener=f,a.addEventListener)Bn||(C=G),C===void 0&&(C=!1),a.addEventListener(u.toString(),m,C);else if(a.attachEvent)a.attachEvent(j(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Y(){function a(f){return u.call(a.src,a.listener,f)}const u=ie;return a}function D(a,u,f,m,C){if(Array.isArray(u))for(var N=0;N<u.length;N++)D(a,u[N],f,m,C);else m=h(m)?!!m.capture:!!m,f=ae(f),a&&a[Kt]?(a=a.i,u=String(u).toString(),u in a.g&&(N=a.g[u],f=T(N,f,m,C),-1<f&&(Ut(N[f]),Array.prototype.splice.call(N,f,1),N.length==0&&(delete a.g[u],a.h--)))):a&&(a=J(a))&&(u=a.g[u.toString()],a=-1,u&&(a=T(u,f,m,C)),(f=-1<a?u[a]:null)&&W(f))}function W(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[Kt])E(u.i,a);else{var f=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(f,m,a.capture):u.detachEvent?u.detachEvent(j(f),m):u.addListener&&u.removeListener&&u.removeListener(m),(f=J(u))?(E(f,a),f.h==0&&(f.src=null,u[b]=null)):Ut(a)}}}function j(a){return a in q?q[a]:q[a]="on"+a}function ie(a,u){if(a.da)a=!0;else{u=new Lt(u,this);var f=a.listener,m=a.ha||a.src;a.fa&&W(a),a=f.call(m,u)}return a}function J(a){return a=a[b],a instanceof fr?a:null}var ne="__closure_events_fn_"+(1e9*Math.random()>>>0);function ae(a){return typeof a=="function"?a:(a[ne]||(a[ne]=function(u){return a.handleEvent(u)}),a[ne])}function oe(){Fe.call(this),this.i=new fr(this),this.M=this,this.F=null}V(oe,Fe),oe.prototype[Kt]=!0,oe.prototype.removeEventListener=function(a,u,f,m){D(this,a,u,f,m)};function fe(a,u){var f,m=a.F;if(m)for(f=[];m;m=m.F)f.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new Ce(u,a);else if(u instanceof Ce)u.target=u.target||a;else{var C=u;u=new Ce(m,a),A(u,C)}if(C=!0,f)for(var N=f.length-1;0<=N;N--){var G=u.g=f[N];C=we(G,m,!0,u)&&C}if(G=u.g=a,C=we(G,m,!0,u)&&C,C=we(G,m,!1,u)&&C,f)for(N=0;N<f.length;N++)G=u.g=f[N],C=we(G,m,!1,u)&&C}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var f=a.g[u],m=0;m<f.length;m++)Ut(f[m]);delete a.g[u],a.h--}}this.F=null},oe.prototype.K=function(a,u,f,m){return this.i.add(String(a),u,!1,f,m)},oe.prototype.L=function(a,u,f,m){return this.i.add(String(a),u,!0,f,m)};function we(a,u,f,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var C=!0,N=0;N<u.length;++N){var G=u[N];if(G&&!G.da&&G.capture==f){var ke=G.listener,st=G.ha||G.src;G.fa&&E(a.i,G),C=ke.call(st,m)!==!1&&C}}return C&&!m.defaultPrevented}function Be(a,u,f){if(typeof a=="function")f&&(a=y(a,f));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(a,u||0)}function Ye(a){a.g=Be(()=>{a.g=null,a.i&&(a.i=!1,Ye(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Bt extends Fe{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ye(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ut(a){Fe.call(this),this.h=a,this.g={}}V(ut,Fe);var $n=[];function Ss(a){Z(a.g,function(u,f){this.g.hasOwnProperty(f)&&W(u)},a),a.g={}}ut.prototype.N=function(){ut.aa.N.call(this),Ss(this)},ut.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var rt=l.JSON.stringify,$t=l.JSON.parse,Yi=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function jr(){}jr.prototype.h=null;function Mu(a){return a.h||(a.h=a.i())}function Lu(){}var Cs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ka(){Ce.call(this,"d")}V(Ka,Ce);function za(){Ce.call(this,"c")}V(za,Ce);var pr={},Fu=null;function Ji(){return Fu=Fu||new oe}pr.La="serverreachability";function Uu(a){Ce.call(this,pr.La,a)}V(Uu,Ce);function Ps(a){const u=Ji();fe(u,new Uu(u))}pr.STAT_EVENT="statevent";function Bu(a,u){Ce.call(this,pr.STAT_EVENT,a),this.stat=u}V(Bu,Ce);function Tt(a){const u=Ji();fe(u,new Bu(u,a))}pr.Ma="timingevent";function $u(a,u){Ce.call(this,pr.Ma,a),this.size=u}V($u,Ce);function ks(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},u)}function Vs(){this.g=!0}Vs.prototype.xa=function(){this.g=!1};function o_(a,u,f,m,C,N){a.info(function(){if(a.g)if(N)for(var G="",ke=N.split("&"),st=0;st<ke.length;st++){var Te=ke[st].split("=");if(1<Te.length){var ht=Te[0];Te=Te[1];var dt=ht.split("_");G=2<=dt.length&&dt[1]=="type"?G+(ht+"="+Te+"&"):G+(ht+"=redacted&")}}else G=null;else G=N;return"XMLHTTP REQ ("+m+") [attempt "+C+"]: "+u+`
`+f+`
`+G})}function a_(a,u,f,m,C,N,G){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+C+"]: "+u+`
`+f+`
`+N+" "+G})}function qr(a,u,f,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+c_(a,f)+(m?" "+m:"")})}function l_(a,u){a.info(function(){return"TIMEOUT: "+u})}Vs.prototype.info=function(){};function c_(a,u){if(!a.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var m=f[a];if(!(2>m.length)){var C=m[1];if(Array.isArray(C)&&!(1>C.length)){var N=C[0];if(N!="noop"&&N!="stop"&&N!="close")for(var G=1;G<C.length;G++)C[G]=""}}}}return rt(f)}catch{return u}}var Xi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ju={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ga;function Zi(){}V(Zi,jr),Zi.prototype.g=function(){return new XMLHttpRequest},Zi.prototype.i=function(){return{}},Ga=new Zi;function jn(a,u,f,m){this.j=a,this.i=u,this.l=f,this.R=m||1,this.U=new ut(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new qu}function qu(){this.i=null,this.g="",this.h=!1}var Hu={},Qa={};function Ya(a,u,f){a.L=1,a.v=ro(yn(u)),a.m=f,a.P=!0,Wu(a,null)}function Wu(a,u){a.F=Date.now(),eo(a),a.A=yn(a.v);var f=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),ih(f.i,"t",m),a.C=0,f=a.j.J,a.h=new qu,a.g=Ih(a.j,f?u:null,!a.m),0<a.O&&(a.M=new Bt(y(a.Y,a,a.g),a.O)),u=a.U,f=a.g,m=a.ca;var C="readystatechange";Array.isArray(C)||(C&&($n[0]=C.toString()),C=$n);for(var N=0;N<C.length;N++){var G=$(f,C[N],m||u.handleEvent,!1,u.h||u);if(!G)break;u.g[G.key]=G}u=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Ps(),o_(a.i,a.u,a.A,a.l,a.R,a.m)}jn.prototype.ca=function(a){a=a.target;const u=this.M;u&&vn(a)==3?u.j():this.Y(a)},jn.prototype.Y=function(a){try{if(a==this.g)e:{const dt=vn(this.g);var u=this.g.Ba();const Kr=this.g.Z();if(!(3>dt)&&(dt!=3||this.g&&(this.h.h||this.g.oa()||dh(this.g)))){this.J||dt!=4||u==7||(u==8||0>=Kr?Ps(3):Ps(2)),Ja(this);var f=this.g.Z();this.X=f;t:if(Ku(this)){var m=dh(this.g);a="";var C=m.length,N=vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mr(this),Ds(this);var G="";break t}this.h.i=new l.TextDecoder}for(u=0;u<C;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(N&&u==C-1)});m.length=0,this.h.g+=a,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=f==200,a_(this.i,this.u,this.A,this.l,this.R,dt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ke,st=this.g;if((ke=st.g?st.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(ke)){var Te=ke;break t}}Te=null}if(f=Te)qr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xa(this,f);else{this.o=!1,this.s=3,Tt(12),mr(this),Ds(this);break e}}if(this.P){f=!0;let zt;for(;!this.J&&this.C<G.length;)if(zt=u_(this,G),zt==Qa){dt==4&&(this.s=4,Tt(14),f=!1),qr(this.i,this.l,null,"[Incomplete Response]");break}else if(zt==Hu){this.s=4,Tt(15),qr(this.i,this.l,G,"[Invalid Chunk]"),f=!1;break}else qr(this.i,this.l,zt,null),Xa(this,zt);if(Ku(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dt!=4||G.length!=0||this.h.h||(this.s=1,Tt(16),f=!1),this.o=this.o&&f,!f)qr(this.i,this.l,G,"[Invalid Chunked Response]"),mr(this),Ds(this);else if(0<G.length&&!this.W){this.W=!0;var ht=this.j;ht.g==this&&ht.ba&&!ht.M&&(ht.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),sl(ht),ht.M=!0,Tt(11))}}else qr(this.i,this.l,G,null),Xa(this,G);dt==4&&mr(this),this.o&&!this.J&&(dt==4?vh(this.j,this):(this.o=!1,eo(this)))}else S_(this.g),f==400&&0<G.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),mr(this),Ds(this)}}}catch{}finally{}};function Ku(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function u_(a,u){var f=a.C,m=u.indexOf(`
`,f);return m==-1?Qa:(f=Number(u.substring(f,m)),isNaN(f)?Hu:(m+=1,m+f>u.length?Qa:(u=u.slice(m,m+f),a.C=m+f,u)))}jn.prototype.cancel=function(){this.J=!0,mr(this)};function eo(a){a.S=Date.now()+a.I,zu(a,a.I)}function zu(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ks(y(a.ba,a),u)}function Ja(a){a.B&&(l.clearTimeout(a.B),a.B=null)}jn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(l_(this.i,this.A),this.L!=2&&(Ps(),Tt(17)),mr(this),this.s=2,Ds(this)):zu(this,this.S-a)};function Ds(a){a.j.G==0||a.J||vh(a.j,a)}function mr(a){Ja(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Ss(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function Xa(a,u){try{var f=a.j;if(f.G!=0&&(f.g==a||Za(f.h,a))){if(!a.K&&Za(f.h,a)&&f.G==3){try{var m=f.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var C=m;if(C[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)co(f),ao(f);else break e;rl(f),Tt(18)}}else f.za=C[1],0<f.za-f.T&&37500>C[2]&&f.F&&f.v==0&&!f.C&&(f.C=ks(y(f.Za,f),6e3));if(1>=Yu(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else _r(f,11)}else if((a.K||f.g==a)&&co(f),!x(u))for(C=f.Da.g.parse(u),u=0;u<C.length;u++){let Te=C[u];if(f.T=Te[0],Te=Te[1],f.G==2)if(Te[0]=="c"){f.K=Te[1],f.ia=Te[2];const ht=Te[3];ht!=null&&(f.la=ht,f.j.info("VER="+f.la));const dt=Te[4];dt!=null&&(f.Aa=dt,f.j.info("SVER="+f.Aa));const Kr=Te[5];Kr!=null&&typeof Kr=="number"&&0<Kr&&(m=1.5*Kr,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const zt=a.g;if(zt){const ho=zt.g?zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ho){var N=m.h;N.g||ho.indexOf("spdy")==-1&&ho.indexOf("quic")==-1&&ho.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(el(N,N.h),N.h=null))}if(m.D){const il=zt.g?zt.g.getResponseHeader("X-HTTP-Session-Id"):null;il&&(m.ya=il,Me(m.I,m.D,il))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var G=a;if(m.qa=Th(m,m.J?m.ia:null,m.W),G.K){Ju(m.h,G);var ke=G,st=m.L;st&&(ke.I=st),ke.B&&(Ja(ke),eo(ke)),m.g=G}else _h(m);0<f.i.length&&lo(f)}else Te[0]!="stop"&&Te[0]!="close"||_r(f,7);else f.G==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?_r(f,7):nl(f):Te[0]!="noop"&&f.l&&f.l.ta(Te),f.v=0)}}Ps(4)}catch{}}var h_=class{constructor(a,u){this.g=a,this.map=u}};function Gu(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Yu(a){return a.h?1:a.g?a.g.size:0}function Za(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function el(a,u){a.g?a.g.add(u):a.h=u}function Ju(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Gu.prototype.cancel=function(){if(this.i=Xu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Xu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.D);return u}return O(a.i)}function d_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var u=[],f=a.length,m=0;m<f;m++)u.push(a[m]);return u}u=[],f=0;for(m in a)u[f++]=a[m];return u}function f_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var u=[];a=a.length;for(var f=0;f<a;f++)u.push(f);return u}u=[],f=0;for(const m in a)u[f++]=m;return u}}}function Zu(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var f=f_(a),m=d_(a),C=m.length,N=0;N<C;N++)u.call(void 0,m[N],f&&f[N],a)}var eh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function p_(a,u){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var m=a[f].indexOf("="),C=null;if(0<=m){var N=a[f].substring(0,m);C=a[f].substring(m+1)}else N=a[f];u(N,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function gr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof gr){this.h=a.h,to(this,a.j),this.o=a.o,this.g=a.g,no(this,a.s),this.l=a.l;var u=a.i,f=new xs;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),th(this,f),this.m=a.m}else a&&(u=String(a).match(eh))?(this.h=!1,to(this,u[1]||"",!0),this.o=Ns(u[2]||""),this.g=Ns(u[3]||"",!0),no(this,u[4]),this.l=Ns(u[5]||"",!0),th(this,u[6]||"",!0),this.m=Ns(u[7]||"")):(this.h=!1,this.i=new xs(null,this.h))}gr.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Os(u,nh,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Os(u,nh,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Os(f,f.charAt(0)=="/"?__:g_,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Os(f,v_)),a.join("")};function yn(a){return new gr(a)}function to(a,u,f){a.j=f?Ns(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function no(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function th(a,u,f){u instanceof xs?(a.i=u,E_(a.i,a.h)):(f||(u=Os(u,y_)),a.i=new xs(u,a.h))}function Me(a,u,f){a.i.set(u,f)}function ro(a){return Me(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ns(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Os(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,m_),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function m_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var nh=/[#\/\?@]/g,g_=/[#\?:]/g,__=/[#\?]/g,y_=/[#\?@]/g,v_=/#/g;function xs(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function qn(a){a.g||(a.g=new Map,a.h=0,a.i&&p_(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=xs.prototype,t.add=function(a,u){qn(this),this.i=null,a=Hr(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function rh(a,u){qn(a),u=Hr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function sh(a,u){return qn(a),u=Hr(a,u),a.g.has(u)}t.forEach=function(a,u){qn(this),this.g.forEach(function(f,m){f.forEach(function(C){a.call(u,C,m,this)},this)},this)},t.na=function(){qn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let m=0;m<u.length;m++){const C=a[m];for(let N=0;N<C.length;N++)f.push(u[m])}return f},t.V=function(a){qn(this);let u=[];if(typeof a=="string")sh(this,a)&&(u=u.concat(this.g.get(Hr(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)u=u.concat(a[f])}return u},t.set=function(a,u){return qn(this),this.i=null,a=Hr(this,a),sh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function ih(a,u,f){rh(a,u),0<f.length&&(a.i=null,a.g.set(Hr(a,u),O(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var m=u[f];const N=encodeURIComponent(String(m)),G=this.V(m);for(m=0;m<G.length;m++){var C=N;G[m]!==""&&(C+="="+encodeURIComponent(String(G[m]))),a.push(C)}}return this.i=a.join("&")};function Hr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function E_(a,u){u&&!a.j&&(qn(a),a.i=null,a.g.forEach(function(f,m){var C=m.toLowerCase();m!=C&&(rh(this,m),ih(this,C,f))},a)),a.j=u}function w_(a,u){const f=new Vs;if(l.Image){const m=new Image;m.onload=S(Hn,f,"TestLoadImage: loaded",!0,u,m),m.onerror=S(Hn,f,"TestLoadImage: error",!1,u,m),m.onabort=S(Hn,f,"TestLoadImage: abort",!1,u,m),m.ontimeout=S(Hn,f,"TestLoadImage: timeout",!1,u,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function T_(a,u){const f=new Vs,m=new AbortController,C=setTimeout(()=>{m.abort(),Hn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(N=>{clearTimeout(C),N.ok?Hn(f,"TestPingServer: ok",!0,u):Hn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),Hn(f,"TestPingServer: error",!1,u)})}function Hn(a,u,f,m,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),m(f)}catch{}}function I_(){this.g=new Yi}function A_(a,u,f){const m=f||"";try{Zu(a,function(C,N){let G=C;h(C)&&(G=rt(C)),u.push(m+N+"="+encodeURIComponent(G))})}catch(C){throw u.push(m+"type="+encodeURIComponent("_badmap")),C}}function so(a){this.l=a.Ub||null,this.j=a.eb||!1}V(so,jr),so.prototype.g=function(){return new io(this.l,this.j)},so.prototype.i=function(a){return function(){return a}}({});function io(a,u){oe.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(io,oe),t=io.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Ls(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ms(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ls(this)),this.g&&(this.readyState=3,Ls(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;oh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function oh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Ms(this):Ls(this),this.readyState==3&&oh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ms(this))},t.Qa=function(a){this.g&&(this.response=a,Ms(this))},t.ga=function(){this.g&&Ms(this)};function Ms(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ls(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function Ls(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(io.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ah(a){let u="";return Z(a,function(f,m){u+=m,u+=":",u+=f,u+=`\r
`}),u}function tl(a,u,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=ah(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Me(a,u,f))}function je(a){oe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(je,oe);var b_=/^https?$/i,R_=["POST","PUT"];t=je.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ga.g(),this.v=this.o?Mu(this.o):Mu(Ga),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(N){lh(this,N);return}if(a=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var C in m)f.set(C,m[C]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const N of m.keys())f.set(N,m.get(N));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(N=>N.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(R_,u,void 0))||m||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,G]of f)this.g.setRequestHeader(N,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{hh(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){lh(this,N)}};function lh(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,ch(a),oo(a)}function ch(a){a.A||(a.A=!0,fe(a,"complete"),fe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,fe(this,"complete"),fe(this,"abort"),oo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),oo(this,!0)),je.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?uh(this):this.bb())},t.bb=function(){uh(this)};function uh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||vn(a)!=4||a.Z()!=2)){if(a.u&&vn(a)==4)Be(a.Ea,0,a);else if(fe(a,"readystatechange"),vn(a)==4){a.h=!1;try{const G=a.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var m;if(m=G===0){var C=String(a.D).match(eh)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),m=!b_.test(C?C.toLowerCase():"")}f=m}if(f)fe(a,"complete"),fe(a,"success");else{a.m=6;try{var N=2<vn(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",ch(a)}}finally{oo(a)}}}}function oo(a,u){if(a.g){hh(a);const f=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||fe(a,"ready");try{f.onreadystatechange=m}catch{}}}function hh(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function vn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<vn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),$t(u)}};function dh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function S_(a){const u={};a=(a.g&&2<=vn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(x(a[m]))continue;var f=R(a[m]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const N=u[C]||[];u[C]=N,N.push(f)}w(u,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fs(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function fh(a){this.Aa=0,this.i=[],this.j=new Vs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Fs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Fs("baseRetryDelayMs",5e3,a),this.cb=Fs("retryDelaySeedMs",1e4,a),this.Wa=Fs("forwardChannelMaxRetries",2,a),this.wa=Fs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Gu(a&&a.concurrentRequestLimit),this.Da=new I_,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=fh.prototype,t.la=8,t.G=1,t.connect=function(a,u,f,m){Tt(0),this.W=a,this.H=u||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=Th(this,null,this.W),lo(this)};function nl(a){if(ph(a),a.G==3){var u=a.U++,f=yn(a.I);if(Me(f,"SID",a.K),Me(f,"RID",u),Me(f,"TYPE","terminate"),Us(a,f),u=new jn(a,a.j,u),u.L=2,u.v=ro(yn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=Ih(u.j,null),u.g.ea(u.v)),u.F=Date.now(),eo(u)}wh(a)}function ao(a){a.g&&(sl(a),a.g.cancel(),a.g=null)}function ph(a){ao(a),a.u&&(l.clearTimeout(a.u),a.u=null),co(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function lo(a){if(!Qu(a.h)&&!a.s){a.s=!0;var u=a.Ga;F||_n(),z||(F(),z=!0),Qe.add(u,a),a.B=0}}function C_(a,u){return Yu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ks(y(a.Ga,a,u),Eh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new jn(this,this.j,a);let N=this.o;if(this.S&&(N?(N=_(N),A(N,this.S)):N=this.S),this.m!==null||this.O||(C.H=N,N=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=gh(this,C,u),f=yn(this.I),Me(f,"RID",a),Me(f,"CVER",22),this.D&&Me(f,"X-HTTP-Session-Id",this.D),Us(this,f),N&&(this.O?u="headers="+encodeURIComponent(String(ah(N)))+"&"+u:this.m&&tl(f,this.m,N)),el(this.h,C),this.Ua&&Me(f,"TYPE","init"),this.P?(Me(f,"$req",u),Me(f,"SID","null"),C.T=!0,Ya(C,f,null)):Ya(C,f,u),this.G=2}}else this.G==3&&(a?mh(this,a):this.i.length==0||Qu(this.h)||mh(this))};function mh(a,u){var f;u?f=u.l:f=a.U++;const m=yn(a.I);Me(m,"SID",a.K),Me(m,"RID",f),Me(m,"AID",a.T),Us(a,m),a.m&&a.o&&tl(m,a.m,a.o),f=new jn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),u&&(a.i=u.D.concat(a.i)),u=gh(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),el(a.h,f),Ya(f,m,u)}function Us(a,u){a.H&&Z(a.H,function(f,m){Me(u,m,f)}),a.l&&Zu({},function(f,m){Me(u,m,f)})}function gh(a,u,f){f=Math.min(a.i.length,f);var m=a.l?y(a.l.Na,a.l,a):null;e:{var C=a.i;let N=-1;for(;;){const G=["count="+f];N==-1?0<f?(N=C[0].g,G.push("ofs="+N)):N=0:G.push("ofs="+N);let ke=!0;for(let st=0;st<f;st++){let Te=C[st].g;const ht=C[st].map;if(Te-=N,0>Te)N=Math.max(0,C[st].g-100),ke=!1;else try{A_(ht,G,"req"+Te+"_")}catch{m&&m(ht)}}if(ke){m=G.join("&");break e}}}return a=a.i.splice(0,f),u.D=a,m}function _h(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;F||_n(),z||(F(),z=!0),Qe.add(u,a),a.v=0}}function rl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ks(y(a.Fa,a),Eh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,yh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ks(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Tt(10),ao(this),yh(this))};function sl(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function yh(a){a.g=new jn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=yn(a.qa);Me(u,"RID","rpc"),Me(u,"SID",a.K),Me(u,"AID",a.T),Me(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&Me(u,"TO",a.ja),Me(u,"TYPE","xmlhttp"),Us(a,u),a.m&&a.o&&tl(u,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=ro(yn(u)),f.m=null,f.P=!0,Wu(f,a)}t.Za=function(){this.C!=null&&(this.C=null,ao(this),rl(this),Tt(19))};function co(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function vh(a,u){var f=null;if(a.g==u){co(a),sl(a),a.g=null;var m=2}else if(Za(a.h,u))f=u.D,Ju(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var C=a.B;m=Ji(),fe(m,new $u(m,f)),lo(a)}else _h(a);else if(C=u.s,C==3||C==0&&0<u.X||!(m==1&&C_(a,u)||m==2&&rl(a)))switch(f&&0<f.length&&(u=a.h,u.i=u.i.concat(f)),C){case 1:_r(a,5);break;case 4:_r(a,10);break;case 3:_r(a,6);break;default:_r(a,2)}}}function Eh(a,u){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*u}function _r(a,u){if(a.j.info("Error code "+u),u==2){var f=y(a.fb,a),m=a.Xa;const C=!m;m=new gr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||to(m,"https"),ro(m),C?w_(m.toString(),f):T_(m.toString(),f)}else Tt(2);a.G=0,a.l&&a.l.sa(u),wh(a),ph(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function wh(a){if(a.G=0,a.ka=[],a.l){const u=Xu(a.h);(u.length!=0||a.i.length!=0)&&(P(a.ka,u),P(a.ka,a.i),a.h.i.length=0,O(a.i),a.i.length=0),a.l.ra()}}function Th(a,u,f){var m=f instanceof gr?yn(f):new gr(f);if(m.g!="")u&&(m.g=u+"."+m.g),no(m,m.s);else{var C=l.location;m=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;var N=new gr(null);m&&to(N,m),u&&(N.g=u),C&&no(N,C),f&&(N.l=f),m=N}return f=a.D,u=a.ya,f&&u&&Me(m,f,u),Me(m,"VER",a.la),Us(a,m),m}function Ih(a,u,f){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new je(new so({eb:f})):new je(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ah(){}t=Ah.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function uo(){}uo.prototype.g=function(a,u){return new Vt(a,u)};function Vt(a,u){oe.call(this),this.g=new fh(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!x(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!x(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Wr(this)}V(Vt,oe),Vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){nl(this.g)},Vt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=rt(a),a=f);u.i.push(new h_(u.Ya++,a)),u.G==3&&lo(u)},Vt.prototype.N=function(){this.g.l=null,delete this.j,nl(this.g),delete this.g,Vt.aa.N.call(this)};function bh(a){Ka.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}V(bh,Ka);function Rh(){za.call(this),this.status=1}V(Rh,za);function Wr(a){this.g=a}V(Wr,Ah),Wr.prototype.ua=function(){fe(this.g,"a")},Wr.prototype.ta=function(a){fe(this.g,new bh(a))},Wr.prototype.sa=function(a){fe(this.g,new Rh)},Wr.prototype.ra=function(){fe(this.g,"b")},uo.prototype.createWebChannel=uo.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,lm=function(){return new uo},am=function(){return Ji()},om=pr,rc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Xi.NO_ERROR=0,Xi.TIMEOUT=8,Xi.HTTP_ERROR=6,Co=Xi,ju.COMPLETE="complete",im=ju,Lu.EventType=Cs,Cs.OPEN="a",Cs.CLOSE="b",Cs.ERROR="c",Cs.MESSAGE="d",oe.prototype.listen=oe.prototype.K,Zs=Lu,je.prototype.listenOnce=je.prototype.L,je.prototype.getLastError=je.prototype.Ka,je.prototype.getLastErrorCode=je.prototype.Ba,je.prototype.getStatus=je.prototype.Z,je.prototype.getResponseJson=je.prototype.Oa,je.prototype.getResponseText=je.prototype.oa,je.prototype.send=je.prototype.ea,je.prototype.setWithCredentials=je.prototype.Ha,sm=je}).apply(typeof _o<"u"?_o:typeof self<"u"?self:typeof window<"u"?window:{});const Id="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ts="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new $c("@firebase/firestore");function Hs(){return Dr.logLevel}function te(t,...e){if(Dr.logLevel<=ve.DEBUG){const n=e.map(Hc);Dr.debug(`Firestore (${Ts}): ${t}`,...n)}}function Nn(t,...e){if(Dr.logLevel<=ve.ERROR){const n=e.map(Hc);Dr.error(`Firestore (${Ts}): ${t}`,...n)}}function fs(t,...e){if(Dr.logLevel<=ve.WARN){const n=e.map(Hc);Dr.warn(`Firestore (${Ts}): ${t}`,...n)}}function Hc(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ue(t="Unexpected state"){const e=`FIRESTORE (${Ts}) INTERNAL ASSERTION FAILED: `+t;throw Nn(e),new Error(e)}function Pe(t,e){t||ue()}function de(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends Fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Bw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(pt.UNAUTHENTICATED))}shutdown(){}}class $w{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class jw{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Pe(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new kn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new kn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new kn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Pe(typeof r.accessToken=="string"),new cm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string"),new pt(e)}}class qw{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Hw{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new qw(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ww{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Kw{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Pe(this.o===void 0);const r=i=>{i.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Pe(typeof n.token=="string"),this.R=n.token,new Ww(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zw(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=zw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ae(t,e){return t<e?-1:t>e?1:0}function ps(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new X(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return qe.fromMillis(Date.now())}static fromDate(e){return qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.timestamp=e}static fromTimestamp(e){return new he(e)}static min(){return new he(new qe(0,0))}static max(){return new he(new qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,n,r){n===void 0?n=0:n>e.length&&ue(),r===void 0?r=e.length-n:r>e.length-n&&ue(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ii.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ii?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Le extends Ii{construct(e,n,r){return new Le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new X(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Le(n)}static emptyPath(){return new Le([])}}const Gw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends Ii{construct(e,n,r){return new at(e,n,r)}static isValidIdentifier(e){return Gw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new at(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new X(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new X(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new X(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new X(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(Le.fromString(e))}static fromName(e){return new re(Le.fromString(e).popFirst(5))}static empty(){return new re(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new Le(e.slice()))}}function Qw(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=he.fromTimestamp(r===1e9?new qe(n+1,0):new qe(n,r));return new or(s,re.empty(),e)}function Yw(t){return new or(t.readTime,t.key,-1)}class or{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new or(he.min(),re.empty(),-1)}static max(){return new or(he.max(),re.empty(),-1)}}function Jw(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:Ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Zw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Li(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==Xw)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ue(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new K((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof K?n:K.resolve(n)}catch(n){return K.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):K.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):K.reject(n)}static resolve(e){return new K((n,r)=>{n(e)})}static reject(e){return new K((n,r)=>{r(e)})}static waitFor(e){return new K((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=K.resolve(!1);for(const r of e)n=n.next(s=>s?K.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new K((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(d=>{o[h]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new K((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function eT(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Fi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Wc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Wc.oe=-1;function Aa(t){return t==null}function Qo(t){return t===0&&1/t==-1/0}function tT(t){return typeof t=="number"&&Number.isInteger(t)&&!Qo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Lr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function hm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n){this.comparator=e,this.root=n||ot.EMPTY}insert(e,n){return new $e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yo(this.root,e,this.comparator,!1)}getReverseIterator(){return new yo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yo(this.root,e,this.comparator,!0)}}class yo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ot.RED,this.left=s??ot.EMPTY,this.right=i??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ot(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ot.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ue();const e=this.left.check();if(e!==this.right.check())throw ue();return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw ue()}get value(){throw ue()}get color(){throw ue()}get left(){throw ue()}get right(){throw ue()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ot(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new bd(this.data.getIterator())}getIteratorFrom(e){return new bd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof lt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new lt(this.comparator);return n.data=e,n}}class bd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new xt([])}unionWith(e){let n=new lt(at.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ps(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class dm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new dm("Invalid base64 string: "+i):i}}(e);return new ct(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const nT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ar(t){if(Pe(!!t),typeof t=="string"){let e=0;const n=nT.exec(t);if(Pe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ke(t.seconds),nanos:Ke(t.nanos)}}function Ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Nr(t){return typeof t=="string"?ct.fromBase64String(t):ct.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function zc(t){const e=t.mapValue.fields.__previous_value__;return Kc(e)?zc(e):e}function Ai(t){const e=ar(t.mapValue.fields.__local_write_time__.timestampValue);return new qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e,n,r,s,i,o,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class bi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new bi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof bi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo={mapValue:{}};function Or(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Kc(t)?4:iT(t)?9007199254740991:sT(t)?10:11:ue()}function gn(t,e){if(t===e)return!0;const n=Or(t);if(n!==Or(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ai(t).isEqual(Ai(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ar(s.timestampValue),l=ar(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Nr(s.bytesValue).isEqual(Nr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ke(s.geoPointValue.latitude)===Ke(i.geoPointValue.latitude)&&Ke(s.geoPointValue.longitude)===Ke(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ke(s.integerValue)===Ke(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ke(s.doubleValue),l=Ke(i.doubleValue);return o===l?Qo(o)===Qo(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ps(t.arrayValue.values||[],e.arrayValue.values||[],gn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Ad(o)!==Ad(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!gn(o[c],l[c])))return!1;return!0}(t,e);default:return ue()}}function Ri(t,e){return(t.values||[]).find(n=>gn(n,e))!==void 0}function ms(t,e){if(t===e)return 0;const n=Or(t),r=Or(e);if(n!==r)return Ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ae(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ke(i.integerValue||i.doubleValue),c=Ke(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Rd(t.timestampValue,e.timestampValue);case 4:return Rd(Ai(t),Ai(e));case 5:return Ae(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Nr(i),c=Nr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=Ae(l[h],c[h]);if(d!==0)return d}return Ae(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Ae(Ke(i.latitude),Ke(o.latitude));return l!==0?l:Ae(Ke(i.longitude),Ke(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Sd(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,h,d;const p=i.fields||{},y=o.fields||{},S=(l=p.value)===null||l===void 0?void 0:l.arrayValue,V=(c=y.value)===null||c===void 0?void 0:c.arrayValue,O=Ae(((h=S==null?void 0:S.values)===null||h===void 0?void 0:h.length)||0,((d=V==null?void 0:V.values)===null||d===void 0?void 0:d.length)||0);return O!==0?O:Sd(S,V)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===vo.mapValue&&o===vo.mapValue)return 0;if(i===vo.mapValue)return 1;if(o===vo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=o.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const y=Ae(c[p],d[p]);if(y!==0)return y;const S=ms(l[c[p]],h[d[p]]);if(S!==0)return S}return Ae(c.length,d.length)}(t.mapValue,e.mapValue);default:throw ue()}}function Rd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ae(t,e);const n=ar(t),r=ar(e),s=Ae(n.seconds,r.seconds);return s!==0?s:Ae(n.nanos,r.nanos)}function Sd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ms(n[s],r[s]);if(i)return i}return Ae(n.length,r.length)}function gs(t){return sc(t)}function sc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ar(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Nr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return re.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=sc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${sc(n.fields[o])}`;return s+"}"}(t.mapValue):ue()}function Cd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ic(t){return!!t&&"integerValue"in t}function Gc(t){return!!t&&"arrayValue"in t}function Pd(t){return!!t&&"nullValue"in t}function kd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Po(t){return!!t&&"mapValue"in t}function sT(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ci(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Lr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ci(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ci(t.arrayValue.values[n]);return e}return Object.assign({},t)}function iT(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.value=e}static empty(){return new Ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Po(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ci(n)}setAll(e){let n=at.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=ci(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Po(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return gn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Po(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Lr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ct(ci(this.value))}}function fm(t){const e=[];return Lr(t.fields,(n,r)=>{const s=new at([n]);if(Po(r)){const i=fm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new xt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new gt(e,0,he.min(),he.min(),he.min(),Ct.empty(),0)}static newFoundDocument(e,n,r,s){return new gt(e,1,n,he.min(),r,s,0)}static newNoDocument(e,n){return new gt(e,2,n,he.min(),he.min(),Ct.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,he.min(),he.min(),Ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Yo{constructor(e,n){this.position=e,this.inclusive=n}}function Vd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=re.comparator(re.fromName(o.referenceValue),n.key):r=ms(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Dd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!gn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Jo{constructor(e,n="asc"){this.field=e,this.dir=n}}function oT(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class pm{}class Xe extends pm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new lT(e,n,r):n==="array-contains"?new hT(e,r):n==="in"?new dT(e,r):n==="not-in"?new fT(e,r):n==="array-contains-any"?new pT(e,r):new Xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new cT(e,r):new uT(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ms(n,this.value)):n!==null&&Or(this.value)===Or(n)&&this.matchesComparison(ms(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Zt extends pm{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Zt(e,n)}matches(e){return mm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function mm(t){return t.op==="and"}function gm(t){return aT(t)&&mm(t)}function aT(t){for(const e of t.filters)if(e instanceof Zt)return!1;return!0}function oc(t){if(t instanceof Xe)return t.field.canonicalString()+t.op.toString()+gs(t.value);if(gm(t))return t.filters.map(e=>oc(e)).join(",");{const e=t.filters.map(n=>oc(n)).join(",");return`${t.op}(${e})`}}function _m(t,e){return t instanceof Xe?function(r,s){return s instanceof Xe&&r.op===s.op&&r.field.isEqual(s.field)&&gn(r.value,s.value)}(t,e):t instanceof Zt?function(r,s){return s instanceof Zt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&_m(o,s.filters[l]),!0):!1}(t,e):void ue()}function ym(t){return t instanceof Xe?function(n){return`${n.field.canonicalString()} ${n.op} ${gs(n.value)}`}(t):t instanceof Zt?function(n){return n.op.toString()+" {"+n.getFilters().map(ym).join(" ,")+"}"}(t):"Filter"}class lT extends Xe{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class cT extends Xe{constructor(e,n){super(e,"in",n),this.keys=vm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class uT extends Xe{constructor(e,n){super(e,"not-in",n),this.keys=vm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function vm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>re.fromName(r.referenceValue))}class hT extends Xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Gc(n)&&Ri(n.arrayValue,this.value)}}class dT extends Xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ri(this.value.arrayValue,n)}}class fT extends Xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ri(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ri(this.value.arrayValue,n)}}class pT extends Xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Gc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ri(this.value.arrayValue,r))}}/**
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
 */class mT{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function Nd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new mT(t,e,n,r,s,i,o)}function Qc(t){const e=de(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>oc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Aa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>gs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>gs(r)).join(",")),e.ue=n}return e.ue}function Yc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!oT(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!_m(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Dd(t.startAt,e.startAt)&&Dd(t.endAt,e.endAt)}function ac(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function gT(t,e,n,r,s,i,o,l){return new Ui(t,e,n,r,s,i,o,l)}function ba(t){return new Ui(t)}function Od(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Em(t){return t.collectionGroup!==null}function ui(t){const e=de(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new lt(at.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Jo(i,r))}),n.has(at.keyField().canonicalString())||e.ce.push(new Jo(at.keyField(),r))}return e.ce}function un(t){const e=de(t);return e.le||(e.le=_T(e,ui(t))),e.le}function _T(t,e){if(t.limitType==="F")return Nd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Jo(s.field,i)});const n=t.endAt?new Yo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Yo(t.startAt.position,t.startAt.inclusive):null;return Nd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function lc(t,e){const n=t.filters.concat([e]);return new Ui(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function cc(t,e,n){return new Ui(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ra(t,e){return Yc(un(t),un(e))&&t.limitType===e.limitType}function wm(t){return`${Qc(un(t))}|lt:${t.limitType}`}function Yr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>ym(s)).join(", ")}]`),Aa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>gs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>gs(s)).join(",")),`Target(${r})`}(un(t))}; limitType=${t.limitType})`}function Sa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):re.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ui(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const h=Vd(o,l,c);return o.inclusive?h<=0:h<0}(r.startAt,ui(r),s)||r.endAt&&!function(o,l,c){const h=Vd(o,l,c);return o.inclusive?h>=0:h>0}(r.endAt,ui(r),s))}(t,e)}function yT(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Tm(t){return(e,n)=>{let r=!1;for(const s of ui(t)){const i=vT(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function vT(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),h=l.data.field(i);return c!==null&&h!==null?ms(c,h):ue()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ue()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Lr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return hm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET=new $e(re.comparator);function On(){return ET}const Im=new $e(re.comparator);function ei(...t){let e=Im;for(const n of t)e=e.insert(n.key,n);return e}function Am(t){let e=Im;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Sr(){return hi()}function bm(){return hi()}function hi(){return new Is(t=>t.toString(),(t,e)=>t.isEqual(e))}const wT=new $e(re.comparator),TT=new lt(re.comparator);function _e(...t){let e=TT;for(const n of t)e=e.add(n);return e}const IT=new lt(Ae);function AT(){return IT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qo(e)?"-0":e}}function Rm(t){return{integerValue:""+t}}function bT(t,e){return tT(e)?Rm(e):Jc(t,e)}/**
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
 */class Ca{constructor(){this._=void 0}}function RT(t,e,n){return t instanceof Si?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Kc(i)&&(i=zc(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Ci?Cm(t,e):t instanceof Pi?Pm(t,e):function(s,i){const o=Sm(s,i),l=xd(o)+xd(s.Pe);return ic(o)&&ic(s.Pe)?Rm(l):Jc(s.serializer,l)}(t,e)}function ST(t,e,n){return t instanceof Ci?Cm(t,e):t instanceof Pi?Pm(t,e):n}function Sm(t,e){return t instanceof Xo?function(r){return ic(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Si extends Ca{}class Ci extends Ca{constructor(e){super(),this.elements=e}}function Cm(t,e){const n=km(e);for(const r of t.elements)n.some(s=>gn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Pi extends Ca{constructor(e){super(),this.elements=e}}function Pm(t,e){let n=km(e);for(const r of t.elements)n=n.filter(s=>!gn(s,r));return{arrayValue:{values:n}}}class Xo extends Ca{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function xd(t){return Ke(t.integerValue||t.doubleValue)}function km(t){return Gc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e,n){this.field=e,this.transform=n}}function PT(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ci&&s instanceof Ci||r instanceof Pi&&s instanceof Pi?ps(r.elements,s.elements,gn):r instanceof Xo&&s instanceof Xo?gn(r.Pe,s.Pe):r instanceof Si&&s instanceof Si}(t.transform,e.transform)}class kT{constructor(e,n){this.version=e,this.transformResults=n}}class Pt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Pt}static exists(e){return new Pt(void 0,e)}static updateTime(e){return new Pt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ko(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Pa{}function Vm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ka(t.key,Pt.none()):new Bi(t.key,t.data,Pt.none());{const n=t.data,r=Ct.empty();let s=new lt(at.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ur(t.key,r,new xt(s.toArray()),Pt.none())}}function VT(t,e,n){t instanceof Bi?function(s,i,o){const l=s.value.clone(),c=Ld(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ur?function(s,i,o){if(!ko(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Ld(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Dm(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function di(t,e,n,r){return t instanceof Bi?function(i,o,l,c){if(!ko(i.precondition,o))return l;const h=i.value.clone(),d=Fd(i.fieldTransforms,c,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof ur?function(i,o,l,c){if(!ko(i.precondition,o))return l;const h=Fd(i.fieldTransforms,c,o),d=o.data;return d.setAll(Dm(i)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return ko(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function DT(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Sm(r.transform,s||null);i!=null&&(n===null&&(n=Ct.empty()),n.set(r.field,i))}return n||null}function Md(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ps(r,s,(i,o)=>PT(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Bi extends Pa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ur extends Pa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Dm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ld(t,e,n){const r=new Map;Pe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,ST(o,l,n[s]))}return r}function Fd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,RT(i,o,e))}return r}class ka extends Pa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class NT extends Pa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&VT(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=di(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=di(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=bm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=Vm(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),_e())}isEqual(e){return this.batchId===e.batchId&&ps(this.mutations,e.mutations,(n,r)=>Md(n,r))&&ps(this.baseMutations,e.baseMutations,(n,r)=>Md(n,r))}}class Xc{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Pe(e.mutations.length===r.length);let s=function(){return wT}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Xc(e,n,r,s)}}/**
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
 */class xT{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class MT{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Je,Ee;function LT(t){switch(t){default:return ue();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0}}function Nm(t){if(t===void 0)return Nn("GRPC error has no .code"),U.UNKNOWN;switch(t){case Je.OK:return U.OK;case Je.CANCELLED:return U.CANCELLED;case Je.UNKNOWN:return U.UNKNOWN;case Je.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Je.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Je.INTERNAL:return U.INTERNAL;case Je.UNAVAILABLE:return U.UNAVAILABLE;case Je.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Je.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Je.NOT_FOUND:return U.NOT_FOUND;case Je.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Je.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Je.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Je.ABORTED:return U.ABORTED;case Je.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Je.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Je.DATA_LOSS:return U.DATA_LOSS;default:return ue()}}(Ee=Je||(Je={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function FT(){return new TextEncoder}/**
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
 */const UT=new kr([4294967295,4294967295],0);function Ud(t){const e=FT().encode(t),n=new rm;return n.update(e),new Uint8Array(n.digest())}function Bd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new kr([n,r],0),new kr([s,i],0)]}class Zc{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ti(`Invalid padding: ${n}`);if(r<0)throw new ti(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ti(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ti(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=kr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(kr.fromNumber(r)));return s.compare(UT)===1&&(s=new kr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Ud(e),[r,s]=Bd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Zc(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Ud(e),[r,s]=Bd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ti extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,$i.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Va(he.min(),s,new $e(Ae),On(),_e())}}class $i{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new $i(r,n,_e(),_e(),_e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Om{constructor(e,n){this.targetId=e,this.me=n}}class xm{constructor(e,n,r=ct.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class $d{constructor(){this.fe=0,this.ge=qd(),this.pe=ct.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=_e(),n=_e(),r=_e();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ue()}}),new $i(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=qd()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Pe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class BT{constructor(e){this.Le=e,this.Be=new Map,this.ke=On(),this.qe=jd(),this.Qe=new $e(Ae)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ue()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(ac(i))if(r===0){const o=new re(i.path);this.Ue(n,o,gt.newNoDocument(o,he.min()))}else Pe(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Nr(r).toUint8Array()}catch(c){if(c instanceof dm)return fs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Zc(o,s,i)}catch(c){return fs(c instanceof ti?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&ac(l.target)){const c=new re(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,gt.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=_e();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Va(e,n,this.Qe,this.ke,r);return this.ke=On(),this.qe=jd(),this.Qe=new $e(Ae),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new $d,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new lt(Ae),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new $d),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function jd(){return new $e(re.comparator)}function qd(){return new $e(re.comparator)}const $T={asc:"ASCENDING",desc:"DESCENDING"},jT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},qT={and:"AND",or:"OR"};class HT{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function uc(t,e){return t.useProto3Json||Aa(e)?e:{value:e}}function Zo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Mm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function WT(t,e){return Zo(t,e.toTimestamp())}function hn(t){return Pe(!!t),he.fromTimestamp(function(n){const r=ar(n);return new qe(r.seconds,r.nanos)}(t))}function eu(t,e){return hc(t,e).canonicalString()}function hc(t,e){const n=function(s){return new Le(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Lm(t){const e=Le.fromString(t);return Pe(jm(e)),e}function dc(t,e){return eu(t.databaseId,e.path)}function Sl(t,e){const n=Lm(e);if(n.get(1)!==t.databaseId.projectId)throw new X(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(Um(n))}function Fm(t,e){return eu(t.databaseId,e)}function KT(t){const e=Lm(t);return e.length===4?Le.emptyPath():Um(e)}function fc(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Um(t){return Pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Hd(t,e,n){return{name:dc(t,e),fields:n.value.mapValue.fields}}function zT(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ue()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Pe(d===void 0||typeof d=="string"),ct.fromBase64String(d||"")):(Pe(d===void 0||d instanceof Buffer||d instanceof Uint8Array),ct.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const d=h.code===void 0?U.UNKNOWN:Nm(h.code);return new X(d,h.message||"")}(o);n=new xm(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Sl(t,r.document.name),i=hn(r.document.updateTime),o=r.document.createTime?hn(r.document.createTime):he.min(),l=new Ct({mapValue:{fields:r.document.fields}}),c=gt.newFoundDocument(s,i,o,l),h=r.targetIds||[],d=r.removedTargetIds||[];n=new Vo(h,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Sl(t,r.document),i=r.readTime?hn(r.readTime):he.min(),o=gt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Vo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Sl(t,r.document),i=r.removedTargetIds||[];n=new Vo([],i,s,null)}else{if(!("filter"in e))return ue();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new MT(s,i),l=r.targetId;n=new Om(l,o)}}return n}function GT(t,e){let n;if(e instanceof Bi)n={update:Hd(t,e.key,e.value)};else if(e instanceof ka)n={delete:dc(t,e.key)};else if(e instanceof ur)n={update:Hd(t,e.key,e.data),updateMask:rI(e.fieldMask)};else{if(!(e instanceof NT))return ue();n={verify:dc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Si)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ci)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Pi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Xo)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw ue()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:WT(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ue()}(t,e.precondition)),n}function QT(t,e){return t&&t.length>0?(Pe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?hn(s.updateTime):hn(i);return o.isEqual(he.min())&&(o=hn(i)),new kT(o,s.transformResults||[])}(n,e))):[]}function YT(t,e){return{documents:[Fm(t,e.path)]}}function JT(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Fm(t,s);const i=function(h){if(h.length!==0)return $m(Zt.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(d=>function(y){return{field:Jr(y.field),direction:eI(y.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=uc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function XT(t){let e=KT(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Pe(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const y=Bm(p);return y instanceof Zt&&gm(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(y=>function(V){return new Jo(Xr(V.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(p){let y;return y=typeof p=="object"?p.value:p,Aa(y)?null:y}(n.limit));let c=null;n.startAt&&(c=function(p){const y=!!p.before,S=p.values||[];return new Yo(S,y)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const y=!p.before,S=p.values||[];return new Yo(S,y)}(n.endAt)),gT(e,s,o,i,l,"F",c,h)}function ZT(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Bm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Xr(n.unaryFilter.field);return Xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Xr(n.unaryFilter.field);return Xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Xr(n.unaryFilter.field);return Xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Xr(n.unaryFilter.field);return Xe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ue()}}(t):t.fieldFilter!==void 0?function(n){return Xe.create(Xr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ue()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Zt.create(n.compositeFilter.filters.map(r=>Bm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ue()}}(n.compositeFilter.op))}(t):ue()}function eI(t){return $T[t]}function tI(t){return jT[t]}function nI(t){return qT[t]}function Jr(t){return{fieldPath:t.canonicalString()}}function Xr(t){return at.fromServerFormat(t.fieldPath)}function $m(t){return t instanceof Xe?function(n){if(n.op==="=="){if(kd(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NAN"}};if(Pd(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(kd(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NOT_NAN"}};if(Pd(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jr(n.field),op:tI(n.op),value:n.value}}}(t):t instanceof Zt?function(n){const r=n.getFilters().map(s=>$m(s));return r.length===1?r[0]:{compositeFilter:{op:nI(n.op),filters:r}}}(t):ue()}function rI(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function jm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n,r,s,i=he.min(),o=he.min(),l=ct.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Zn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e){this.ct=e}}function iI(t){const e=XT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?cc(e,e.limit,"L"):e}/**
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
 */class oI{constructor(){this.un=new aI}addToCollectionParentIndex(e,n){return this.un.add(n),K.resolve()}getCollectionParents(e,n){return K.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return K.resolve()}deleteFieldIndex(e,n){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,n){return K.resolve()}getDocumentsMatchingTarget(e,n){return K.resolve(null)}getIndexType(e,n){return K.resolve(0)}getFieldIndexes(e,n){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,n){return K.resolve(or.min())}getMinOffsetFromCollectionGroup(e,n){return K.resolve(or.min())}updateCollectionGroup(e,n,r){return K.resolve()}updateIndexEntries(e,n){return K.resolve()}}class aI{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new lt(Le.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new lt(Le.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new _s(0)}static kn(){return new _s(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(){this.changes=new Is(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?K.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class cI{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&di(r.mutation,s,xt.empty(),qe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,_e()).next(()=>r))}getLocalViewOfDocuments(e,n,r=_e()){const s=Sr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ei();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Sr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,_e()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=On();const o=hi(),l=function(){return hi()}();return n.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof ur)?i=i.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),di(d.mutation,h,d.mutation.getFieldMask(),qe.now())):o.set(h.key,xt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,d)=>o.set(h,d)),n.forEach((h,d)=>{var p;return l.set(h,new cI(d,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=hi();let s=new $e((o,l)=>o-l),i=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let d=r.get(c)||xt.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(s.get(l.batchId)||_e()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=bm();d.forEach(y=>{if(!i.has(y)){const S=Vm(n.get(y),r.get(y));S!==null&&p.set(y,S),i=i.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return K.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return re.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Em(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):K.resolve(Sr());let l=-1,c=i;return o.next(h=>K.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?K.resolve():this.remoteDocumentCache.getEntry(e,d).next(y=>{c=c.insert(d,y)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,_e())).next(d=>({batchId:l,changes:Am(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next(r=>{let s=ei();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ei();return this.indexManager.getCollectionParents(e,i).next(l=>K.forEach(l,c=>{const h=function(p,y){return new Ui(y,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,y)=>{o=o.insert(p,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,gt.newInvalidDocument(d)))});let l=ei();return o.forEach((c,h)=>{const d=i.get(c);d!==void 0&&di(d.mutation,h,xt.empty(),qe.now()),Sa(n,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return K.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:hn(s.createTime)}}(n)),K.resolve()}getNamedQuery(e,n){return K.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:iI(s.bundledQuery),readTime:hn(s.readTime)}}(n)),K.resolve()}}/**
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
 */class dI{constructor(){this.overlays=new $e(re.comparator),this.Ir=new Map}getOverlay(e,n){return K.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Sr();return K.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),K.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),K.resolve()}getOverlaysForCollection(e,n,r){const s=Sr(),i=n.length+1,o=new re(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return K.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new $e((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=Sr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=Sr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return K.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new xT(n,r));let i=this.Ir.get(n);i===void 0&&(i=_e(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class fI{constructor(){this.sessionToken=ct.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,K.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(){this.Tr=new lt(tt.Er),this.dr=new lt(tt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new tt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new tt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new re(new Le([])),r=new tt(n,e),s=new tt(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new re(new Le([])),r=new tt(n,e),s=new tt(n,e+1);let i=_e();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new tt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class tt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return re.comparator(e.key,n.key)||Ae(e.wr,n.wr)}static Ar(e,n){return Ae(e.wr,n.wr)||re.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new lt(tt.Er)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new OT(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new tt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return K.resolve(o)}lookupMutationBatch(e,n){return K.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return K.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new tt(n,0),s=new tt(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),K.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new lt(Ae);return n.forEach(s=>{const i=new tt(s,0),o=new tt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),K.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;re.isDocumentKey(i)||(i=i.child(""));const o=new tt(new re(i),0);let l=new lt(Ae);return this.br.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.wr)),!0)},o),K.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Pe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return K.forEach(n.mutations,s=>{const i=new tt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new tt(n,0),s=this.br.firstAfterOrEqual(r);return K.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e){this.Mr=e,this.docs=function(){return new $e(re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return K.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let r=On();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():gt.newInvalidDocument(s))}),K.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=On();const o=n.path,l=new re(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Jw(Yw(d),r)<=0||(s.has(d.key)||Sa(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return K.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ue()}Or(e,n){return K.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new gI(this)}getSize(e){return K.resolve(this.size)}}class gI extends lI{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),K.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e){this.persistence=e,this.Nr=new Is(n=>Qc(n),Yc),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.Lr=0,this.Br=new tu,this.targetCount=0,this.kr=_s.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),K.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new _s(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,K.resolve()}updateTargetData(e,n){return this.Kn(n),K.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),K.waitFor(i).next(()=>s)}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return K.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),K.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),K.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),K.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return K.resolve(r)}containsKey(e,n){return K.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Wc(0),this.Kr=!1,this.Kr=!0,this.$r=new fI,this.referenceDelegate=e(this),this.Ur=new _I(this),this.indexManager=new oI,this.remoteDocumentCache=function(s){return new mI(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new sI(n),this.Gr=new hI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new dI,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new pI(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const s=new vI(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return K.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class vI extends Zw{constructor(e){super(),this.currentSequenceNumber=e}}class nu{constructor(e){this.persistence=e,this.Jr=new tu,this.Yr=null}static Zr(e){return new nu(e)}get Xr(){if(this.Yr)return this.Yr;throw ue()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),K.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),K.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),K.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.Xr,r=>{const s=re.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,he.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return K.or([()=>K.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=_e(),s=_e();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ru(e,n.fromCache,r,s)}}/**
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
 */class EI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class wI{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return IE()?8:eT(wt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new EI;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Hs()<=ve.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",Yr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),K.resolve()):(Hs()<=ve.DEBUG&&te("QueryEngine","Query:",Yr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Hs()<=ve.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",Yr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,un(n))):K.resolve())}Yi(e,n){if(Od(n))return K.resolve(null);let r=un(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=cc(n,null,"F"),r=un(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=_e(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.ts(n,l);return this.ns(n,h,o,c.readTime)?this.Yi(e,cc(n,null,"F")):this.rs(e,h,n,c)}))})))}Zi(e,n,r,s){return Od(n)||s.isEqual(he.min())?K.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?K.resolve(null):(Hs()<=ve.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Yr(n)),this.rs(e,o,n,Qw(s,-1)).next(l=>l))})}ts(e,n){let r=new lt(Tm(e));return n.forEach((s,i)=>{Sa(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Hs()<=ve.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",Yr(n)),this.Ji.getDocumentsMatchingQuery(e,n,or.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new $e(Ae),this._s=new Is(i=>Qc(i),Yc),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new uI(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function II(t,e,n,r){return new TI(t,e,n,r)}async function qm(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=_e();for(const h of s){o.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function AI(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const p=h.batch,y=p.keys();let S=K.resolve();return y.forEach(V=>{S=S.next(()=>d.getEntry(c,V)).next(O=>{const P=h.docVersions.get(V);Pe(P!==null),O.version.compareTo(P)<0&&(p.applyToRemoteDocument(O,h),O.isValidDocument()&&(O.setReadTime(h.commitVersion),d.addEntry(O)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=_e();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Hm(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function bI(t,e){const n=de(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((d,p)=>{const y=s.get(p);if(!y)return;l.push(n.Ur.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,d.addedDocuments,p)));let S=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?S=S.withResumeToken(ct.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):d.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(d.resumeToken,r)),s=s.insert(p,S),function(O,P,M){return O.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=3e8?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(y,S,d)&&l.push(n.Ur.updateTargetData(i,S))});let c=On(),h=_e();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(RI(i,o,e.documentUpdates).next(d=>{c=d.Ps,h=d.Is})),!r.isEqual(he.min())){const d=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return K.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.os=s,i))}function RI(t,e,n){let r=_e(),s=_e();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=On();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(he.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):te("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Ps:o,Is:s}})}function SI(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function CI(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,K.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new Zn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function pc(t,e,n){const r=de(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Fi(o))throw o;te("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Wd(t,e,n){const r=de(t);let s=he.min(),i=_e();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,d){const p=de(c),y=p._s.get(d);return y!==void 0?K.resolve(p.os.get(y)):p.Ur.getTargetData(h,d)}(r,o,un(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:he.min(),n?i:_e())).next(l=>(PI(r,yT(e),l),{documents:l,Ts:i})))}function PI(t,e,n){let r=t.us.get(e)||he.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Kd{constructor(){this.activeTargetIds=AT()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class kI{constructor(){this.so=new Kd,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Kd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class VI{_o(e){}shutdown(){}}/**
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
 */class zd{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Eo=null;function Cl(){return Eo===null?Eo=function(){return 268435456+Math.round(2147483648*Math.random())}():Eo++,"0x"+Eo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="WebChannelConnection";class OI extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=Cl(),c=this.xo(n,r.toUriEncodedString());te("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,c,h,s).then(d=>(te("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw fs("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ts}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=DI[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Cl();return new Promise((o,l)=>{const c=new sm;c.setWithCredentials(!0),c.listenOnce(im.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Co.NO_ERROR:const d=c.getResponseJson();te(ft,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case Co.TIMEOUT:te(ft,`RPC '${e}' ${i} timed out`),l(new X(U.DEADLINE_EXCEEDED,"Request time out"));break;case Co.HTTP_ERROR:const p=c.getStatus();if(te(ft,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let y=c.getResponseJson();Array.isArray(y)&&(y=y[0]);const S=y==null?void 0:y.error;if(S&&S.status&&S.message){const V=function(P){const M=P.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(M)>=0?M:U.UNKNOWN}(S.status);l(new X(V,S.message))}else l(new X(U.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new X(U.UNAVAILABLE,"Connection failed."));break;default:ue()}}finally{te(ft,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);te(ft,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=Cl(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=lm(),l=am(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");te(ft,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);let y=!1,S=!1;const V=new NI({Io:P=>{S?te(ft,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(y||(te(ft,`Opening RPC '${e}' stream ${s} transport.`),p.open(),y=!0),te(ft,`RPC '${e}' stream ${s} sending:`,P),p.send(P))},To:()=>p.close()}),O=(P,M,x)=>{P.listen(M,H=>{try{x(H)}catch(L){setTimeout(()=>{throw L},0)}})};return O(p,Zs.EventType.OPEN,()=>{S||(te(ft,`RPC '${e}' stream ${s} transport opened.`),V.yo())}),O(p,Zs.EventType.CLOSE,()=>{S||(S=!0,te(ft,`RPC '${e}' stream ${s} transport closed`),V.So())}),O(p,Zs.EventType.ERROR,P=>{S||(S=!0,fs(ft,`RPC '${e}' stream ${s} transport errored:`,P),V.So(new X(U.UNAVAILABLE,"The operation could not be completed")))}),O(p,Zs.EventType.MESSAGE,P=>{var M;if(!S){const x=P.data[0];Pe(!!x);const H=x,L=H.error||((M=H[0])===null||M===void 0?void 0:M.error);if(L){te(ft,`RPC '${e}' stream ${s} received error:`,L);const Q=L.status;let Z=function(g){const A=Je[g];if(A!==void 0)return Nm(A)}(Q),w=L.message;Z===void 0&&(Z=U.INTERNAL,w="Unknown error status: "+Q+" with message "+L.message),S=!0,V.So(new X(Z,w)),p.close()}else te(ft,`RPC '${e}' stream ${s} received:`,x),V.bo(x)}}),O(l,om.STAT_EVENT,P=>{P.stat===rc.PROXY?te(ft,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===rc.NOPROXY&&te(ft,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{V.wo()},0),V}}function Pl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(t){return new HT(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&te("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e,n,r,s,i,o,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Wm(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(Nn(n.toString()),Nn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new X(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class xI extends Km{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=zT(this.serializer,e),r=function(i){if(!("targetChange"in i))return he.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?he.min():o.readTime?hn(o.readTime):he.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=fc(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=ac(c)?{documents:YT(i,c)}:{query:JT(i,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Mm(i,o.resumeToken);const h=uc(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(he.min())>0){l.readTime=Zo(i,o.snapshotVersion.toTimestamp());const h=uc(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=ZT(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=fc(this.serializer),n.removeTarget=e,this.a_(n)}}class MI extends Km{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Pe(!!e.streamToken),this.lastStreamToken=e.streamToken,Pe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=QT(e.writeResults,e.commitTime),r=hn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=fc(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>GT(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new X(U.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,hc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X(U.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,hc(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new X(U.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class FI{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Nn(n),this.D_=!1):te("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Fr(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=de(c);h.L_.add(4),await ji(h),h.q_.set("Unknown"),h.L_.delete(4),await Na(h)}(this))})}),this.q_=new FI(r,s)}}async function Na(t){if(Fr(t))for(const e of t.B_)await e(!0)}async function ji(t){for(const e of t.B_)await e(!1)}function zm(t,e){const n=de(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),au(n)?ou(n):As(n).r_()&&iu(n,e))}function su(t,e){const n=de(t),r=As(n);n.N_.delete(e),r.r_()&&Gm(n,e),n.N_.size===0&&(r.r_()?r.o_():Fr(n)&&n.q_.set("Unknown"))}function iu(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}As(t).A_(e)}function Gm(t,e){t.Q_.xe(e),As(t).R_(e)}function ou(t){t.Q_=new BT({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),As(t).start(),t.q_.v_()}function au(t){return Fr(t)&&!As(t).n_()&&t.N_.size>0}function Fr(t){return de(t).L_.size===0}function Qm(t){t.Q_=void 0}async function BI(t){t.q_.set("Online")}async function $I(t){t.N_.forEach((e,n)=>{iu(t,e)})}async function jI(t,e){Qm(t),au(t)?(t.q_.M_(e),ou(t)):t.q_.set("Unknown")}async function qI(t,e,n){if(t.q_.set("Online"),e instanceof xm&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){te("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ea(t,r)}else if(e instanceof Vo?t.Q_.Ke(e):e instanceof Om?t.Q_.He(e):t.Q_.We(e),!n.isEqual(he.min()))try{const r=await Hm(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.N_.get(h);d&&i.N_.set(h,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,h)=>{const d=i.N_.get(c);if(!d)return;i.N_.set(c,d.withResumeToken(ct.EMPTY_BYTE_STRING,d.snapshotVersion)),Gm(i,c);const p=new Zn(d.target,c,h,d.sequenceNumber);iu(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){te("RemoteStore","Failed to raise snapshot:",r),await ea(t,r)}}async function ea(t,e,n){if(!Fi(e))throw e;t.L_.add(1),await ji(t),t.q_.set("Offline"),n||(n=()=>Hm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Na(t)})}function Ym(t,e){return e().catch(n=>ea(t,n,e))}async function Oa(t){const e=de(t),n=lr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;HI(e);)try{const s=await SI(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,WI(e,s)}catch(s){await ea(e,s)}Jm(e)&&Xm(e)}function HI(t){return Fr(t)&&t.O_.length<10}function WI(t,e){t.O_.push(e);const n=lr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Jm(t){return Fr(t)&&!lr(t).n_()&&t.O_.length>0}function Xm(t){lr(t).start()}async function KI(t){lr(t).p_()}async function zI(t){const e=lr(t);for(const n of t.O_)e.m_(n.mutations)}async function GI(t,e,n){const r=t.O_.shift(),s=Xc.from(r,e,n);await Ym(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Oa(t)}async function QI(t,e){e&&lr(t).V_&&await async function(r,s){if(function(o){return LT(o)&&o!==U.ABORTED}(s.code)){const i=r.O_.shift();lr(r).s_(),await Ym(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Oa(r)}}(t,e),Jm(t)&&Xm(t)}async function Gd(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const r=Fr(n);n.L_.add(3),await ji(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Na(n)}async function YI(t,e){const n=de(t);e?(n.L_.delete(2),await Na(n)):e||(n.L_.add(2),await ji(n),n.q_.set("Unknown"))}function As(t){return t.K_||(t.K_=function(n,r,s){const i=de(n);return i.w_(),new xI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:BI.bind(null,t),Ro:$I.bind(null,t),mo:jI.bind(null,t),d_:qI.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),au(t)?ou(t):t.q_.set("Unknown")):(await t.K_.stop(),Qm(t))})),t.K_}function lr(t){return t.U_||(t.U_=function(n,r,s){const i=de(n);return i.w_(),new MI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:KI.bind(null,t),mo:QI.bind(null,t),f_:zI.bind(null,t),g_:GI.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Oa(t)):(await t.U_.stop(),t.O_.length>0&&(te("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new lu(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cu(t,e){if(Nn("AsyncQueue",`${e}: ${t}`),Fi(t))return new X(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=ei(),this.sortedSet=new $e(this.comparator)}static emptySet(e){return new as(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof as)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new as;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(){this.W_=new $e(re.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ue():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ys{constructor(e,n,r,s,i,o,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ys(e,n,as.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ra(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class XI{constructor(){this.queries=Yd(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=de(n),i=s.queries;s.queries=Yd(),i.forEach((o,l)=>{for(const c of l.j_)c.onError(r)})})(this,new X(U.ABORTED,"Firestore shutting down"))}}function Yd(){return new Is(t=>wm(t),Ra)}async function uu(t,e){const n=de(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new JI,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=cu(o,`Initialization of query '${Yr(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&du(n)}async function hu(t,e){const n=de(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function ZI(t,e){const n=de(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&du(n)}function eA(t,e,n){const r=de(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function du(t){t.Y_.forEach(e=>{e.next()})}var mc,Jd;(Jd=mc||(mc={})).ea="default",Jd.Cache="cache";class fu{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ys(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ys.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==mc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e){this.key=e}}class eg{constructor(e){this.key=e}}class tA{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=_e(),this.mutatedKeys=_e(),this.Aa=Tm(e),this.Ra=new as(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Qd,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const y=s.get(d),S=Sa(this.query,p)?p:null,V=!!y&&this.mutatedKeys.has(y.key),O=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let P=!1;y&&S?y.data.isEqual(S.data)?V!==O&&(r.track({type:3,doc:S}),P=!0):this.ga(y,S)||(r.track({type:2,doc:S}),P=!0,(c&&this.Aa(S,c)>0||h&&this.Aa(S,h)<0)&&(l=!0)):!y&&S?(r.track({type:0,doc:S}),P=!0):y&&!S&&(r.track({type:1,doc:y}),P=!0,(c||h)&&(l=!0)),P&&(S?(o=o.add(S),i=O?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(S,V){const O=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue()}};return O(S)-O(V)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,h=c!==this.Ea;return this.Ea=c,o.length!==0||h?{snapshot:new ys(this.query,e.Ra,i,o,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Qd,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=_e(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new eg(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Zm(r))}),n}ba(e){this.Ta=e.Ts,this.da=_e();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ys.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class nA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class rA{constructor(e){this.key=e,this.va=!1}}class sA{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Is(l=>wm(l),Ra),this.Ma=new Map,this.xa=new Set,this.Oa=new $e(re.comparator),this.Na=new Map,this.La=new tu,this.Ba={},this.ka=new Map,this.qa=_s.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function iA(t,e,n=!0){const r=og(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await tg(r,e,n,!0),s}async function oA(t,e){const n=og(t);await tg(n,e,!0,!1)}async function tg(t,e,n,r){const s=await CI(t.localStore,un(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await aA(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&zm(t.remoteStore,s),l}async function aA(t,e,n,r,s){t.Ka=(p,y,S)=>async function(O,P,M,x){let H=P.view.ma(M);H.ns&&(H=await Wd(O.localStore,P.query,!1).then(({documents:w})=>P.view.ma(w,H)));const L=x&&x.targetChanges.get(P.targetId),Q=x&&x.targetMismatches.get(P.targetId)!=null,Z=P.view.applyChanges(H,O.isPrimaryClient,L,Q);return Zd(O,P.targetId,Z.wa),Z.snapshot}(t,p,y,S);const i=await Wd(t.localStore,e,!0),o=new tA(e,i.Ts),l=o.ma(i.documents),c=$i.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,c);Zd(t,n,h.wa);const d=new nA(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function lA(t,e,n){const r=de(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Ra(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await pc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&su(r.remoteStore,s.targetId),gc(r,s.targetId)}).catch(Li)):(gc(r,s.targetId),await pc(r.localStore,s.targetId,!0))}async function cA(t,e){const n=de(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),su(n.remoteStore,r.targetId))}async function uA(t,e,n){const r=_A(t);try{const s=await function(o,l){const c=de(o),h=qe.now(),d=l.reduce((S,V)=>S.add(V.key),_e());let p,y;return c.persistence.runTransaction("Locally write mutations","readwrite",S=>{let V=On(),O=_e();return c.cs.getEntries(S,d).next(P=>{V=P,V.forEach((M,x)=>{x.isValidDocument()||(O=O.add(M))})}).next(()=>c.localDocuments.getOverlayedDocuments(S,V)).next(P=>{p=P;const M=[];for(const x of l){const H=DT(x,p.get(x.key).overlayedDocument);H!=null&&M.push(new ur(x.key,H,fm(H.value.mapValue),Pt.exists(!0)))}return c.mutationQueue.addMutationBatch(S,h,M,l)}).next(P=>{y=P;const M=P.applyToLocalDocumentSet(p,O);return c.documentOverlayCache.saveOverlays(S,P.batchId,M)})}).then(()=>({batchId:y.batchId,changes:Am(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let h=o.Ba[o.currentUser.toKey()];h||(h=new $e(Ae)),h=h.insert(l,c),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await qi(r,s.changes),await Oa(r.remoteStore)}catch(s){const i=cu(s,"Failed to persist write");n.reject(i)}}async function ng(t,e){const n=de(t);try{const r=await bI(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(Pe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Pe(o.va):s.removedDocuments.size>0&&(Pe(o.va),o.va=!1))}),await qi(n,r,e)}catch(r){await Li(r)}}function Xd(t,e,n){const r=de(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=de(o);c.onlineState=l;let h=!1;c.queries.forEach((d,p)=>{for(const y of p.j_)y.Z_(l)&&(h=!0)}),h&&du(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function hA(t,e,n){const r=de(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new $e(re.comparator);o=o.insert(i,gt.newNoDocument(i,he.min()));const l=_e().add(i),c=new Va(he.min(),new Map,new $e(Ae),o,l);await ng(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),pu(r)}else await pc(r.localStore,e,!1).then(()=>gc(r,e,n)).catch(Li)}async function dA(t,e){const n=de(t),r=e.batch.batchId;try{const s=await AI(n.localStore,e);sg(n,r,null),rg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await qi(n,s)}catch(s){await Li(s)}}async function fA(t,e,n){const r=de(t);try{const s=await function(o,l){const c=de(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(Pe(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,e);sg(r,e,n),rg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await qi(r,s)}catch(s){await Li(s)}}function rg(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function sg(t,e,n){const r=de(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function gc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||ig(t,r)})}function ig(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(su(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),pu(t))}function Zd(t,e,n){for(const r of n)r instanceof Zm?(t.La.addReference(r.key,e),pA(t,r)):r instanceof eg?(te("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||ig(t,r.key)):ue()}function pA(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(te("SyncEngine","New document in limbo: "+n),t.xa.add(r),pu(t))}function pu(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new re(Le.fromString(e)),r=t.qa.next();t.Na.set(r,new rA(n)),t.Oa=t.Oa.insert(n,r),zm(t.remoteStore,new Zn(un(ba(n.path)),r,"TargetPurposeLimboResolution",Wc.oe))}}async function qi(t,e,n){const r=de(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{o.push(r.Ka(c,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=ru.Wi(c.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(c,h){const d=de(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>K.forEach(h,y=>K.forEach(y.$i,S=>d.persistence.referenceDelegate.addReference(p,y.targetId,S)).next(()=>K.forEach(y.Ui,S=>d.persistence.referenceDelegate.removeReference(p,y.targetId,S)))))}catch(p){if(!Fi(p))throw p;te("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const y=p.targetId;if(!p.fromCache){const S=d.os.get(y),V=S.snapshotVersion,O=S.withLastLimboFreeSnapshotVersion(V);d.os=d.os.insert(y,O)}}}(r.localStore,i))}async function mA(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const r=await qm(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new X(U.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await qi(n,r.hs)}}function gA(t,e){const n=de(t),r=n.Na.get(e);if(r&&r.va)return _e().add(r.key);{let s=_e();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function og(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ng.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hA.bind(null,e),e.Ca.d_=ZI.bind(null,e.eventManager),e.Ca.$a=eA.bind(null,e.eventManager),e}function _A(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fA.bind(null,e),e}class ta{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Da(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return II(this.persistence,new wI,e.initialUser,this.serializer)}Ga(e){return new yI(nu.Zr,this.serializer)}Wa(e){return new kI}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ta.provider={build:()=>new ta};class _c{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=mA.bind(null,this.syncEngine),await YI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new XI}()}createDatastore(e){const n=Da(e.databaseInfo.databaseId),r=function(i){return new OI(i)}(e.databaseInfo);return function(i,o,l,c){return new LI(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new UI(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Xd(this.syncEngine,n,0),function(){return zd.D()?new zd:new VI}())}createSyncEngine(e,n){return function(s,i,o,l,c,h,d){const p=new sA(s,i,o,l,c,h);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=de(s);te("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await ji(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}_c.provider={build:()=>new _c};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class mu{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Nn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=pt.UNAUTHENTICATED,this.clientId=um.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{te("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(te("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=cu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function kl(t,e){t.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await qm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ef(t,e){t.asyncQueue.verifyOperationInProgress();const n=await vA(t);te("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Gd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Gd(e.remoteStore,s)),t._onlineComponents=e}async function vA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te("FirestoreClient","Using user provided OfflineComponentProvider");try{await kl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;fs("Error using user provided cache. Falling back to memory cache: "+n),await kl(t,new ta)}}else te("FirestoreClient","Using default OfflineComponentProvider"),await kl(t,new ta);return t._offlineComponents}async function ag(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te("FirestoreClient","Using user provided OnlineComponentProvider"),await ef(t,t._uninitializedComponentsProvider._online)):(te("FirestoreClient","Using default OnlineComponentProvider"),await ef(t,new _c))),t._onlineComponents}function EA(t){return ag(t).then(e=>e.syncEngine)}async function na(t){const e=await ag(t),n=e.eventManager;return n.onListen=iA.bind(null,e.syncEngine),n.onUnlisten=lA.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=oA.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=cA.bind(null,e.syncEngine),n}function wA(t,e,n={}){const r=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const d=new mu({next:y=>{d.Za(),o.enqueueAndForget(()=>hu(i,p));const S=y.docs.has(l);!S&&y.fromCache?h.reject(new X(U.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&y.fromCache&&c&&c.source==="server"?h.reject(new X(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(y)},error:y=>h.reject(y)}),p=new fu(ba(l.path),d,{includeMetadataChanges:!0,_a:!0});return uu(i,p)}(await na(t),t.asyncQueue,e,n,r)),r.promise}function TA(t,e,n={}){const r=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const d=new mu({next:y=>{d.Za(),o.enqueueAndForget(()=>hu(i,p)),y.fromCache&&c.source==="server"?h.reject(new X(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(y)},error:y=>h.reject(y)}),p=new fu(l,d,{includeMetadataChanges:!0,_a:!0});return uu(i,p)}(await na(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function lg(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(t,e,n){if(!n)throw new X(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function IA(t,e,n,r){if(e===!0&&r===!0)throw new X(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function nf(t){if(!re.isDocumentKey(t))throw new X(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function rf(t){if(re.isDocumentKey(t))throw new X(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function xa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue()}function kt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xa(t);throw new X(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new X(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new X(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}IA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new X(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new X(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new X(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ma{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sf({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new X(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Bw;switch(r.type){case"firstParty":return new Hw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=tf.get(n);r&&(te("ComponentProvider","Removing Datastore"),tf.delete(n),r.terminate())}(this),Promise.resolve()}}function AA(t,e,n,r={}){var s;const i=(t=kt(t,Ma))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&fs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=pt.MOCK_USER;else{l=gE(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new X(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new pt(h)}t._authCredentials=new $w(new cm(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ur(this.firestore,e,this._query)}}class Et{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Et(this.firestore,e,this._key)}}class rr extends Ur{constructor(e,n,r){super(e,n,ba(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Et(this.firestore,null,new re(e))}withConverter(e){return new rr(this.firestore,e,this._path)}}function Ws(t,e,...n){if(t=ze(t),cg("collection","path",e),t instanceof Ma){const r=Le.fromString(e,...n);return rf(r),new rr(t,null,r)}{if(!(t instanceof Et||t instanceof rr))throw new X(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return rf(r),new rr(t.firestore,null,r)}}function Dt(t,e,...n){if(t=ze(t),arguments.length===1&&(e=um.newId()),cg("doc","path",e),t instanceof Ma){const r=Le.fromString(e,...n);return nf(r),new Et(t,null,new re(r))}{if(!(t instanceof Et||t instanceof rr))throw new X(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return nf(r),new Et(t.firestore,t instanceof rr?t.converter:null,new re(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Wm(this,"async_queue_retry"),this.Vu=()=>{const r=Pl();r&&te("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Pl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Pl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new kn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Fi(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Nn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=lu.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&ue()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function af(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class xn extends Ma{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new of,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new of(e),this._firestoreClient=void 0,await e}}}function bA(t,e){const n=typeof t=="object"?t:em(),r=typeof t=="string"?t:"(default)",s=qc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=pE("firestore");i&&AA(s,...i)}return s}function Hi(t){if(t._terminated)throw new X(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||RA(t),t._firestoreClient}function RA(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,h,d){return new rT(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,lg(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new yA(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vs(ct.fromBase64String(e))}catch(n){throw new X(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new vs(ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}}/**
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
 */class _u{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA=/^__.*__$/;class CA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ur(e,this.data,this.fieldMask,n,this.fieldTransforms):new Bi(e,this.data,n,this.fieldTransforms)}}class ug{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ur(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function hg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue()}}class yu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new yu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ra(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(hg(this.Cu)&&SA.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class PA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Da(e)}Qu(e,n,r,s=!1){return new yu({Cu:e,methodName:n,qu:r,path:at.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Fa(t){const e=t._freezeSettings(),n=Da(t._databaseId);return new PA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function dg(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);Eu("Data must be an object, but it was:",o,r);const l=mg(r,o);let c,h;if(i.merge)c=new xt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const y=yc(e,p,n);if(!o.contains(y))throw new X(U.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);_g(d,y)||d.push(y)}c=new xt(d),h=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=o.fieldTransforms;return new CA(new Ct(l),c,h)}class Ua extends La{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ua}}class vu extends La{_toFieldTransform(e){return new CT(e.path,new Si)}isEqual(e){return e instanceof vu}}function fg(t,e,n,r){const s=t.Qu(1,e,n);Eu("Data must be an object, but it was:",s,r);const i=[],o=Ct.empty();Lr(r,(c,h)=>{const d=wu(e,c,n);h=ze(h);const p=s.Nu(d);if(h instanceof Ua)i.push(d);else{const y=Ki(h,p);y!=null&&(i.push(d),o.set(d,y))}});const l=new xt(i);return new ug(o,l,s.fieldTransforms)}function pg(t,e,n,r,s,i){const o=t.Qu(1,e,n),l=[yc(e,r,n)],c=[s];if(i.length%2!=0)throw new X(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<i.length;y+=2)l.push(yc(e,i[y])),c.push(i[y+1]);const h=[],d=Ct.empty();for(let y=l.length-1;y>=0;--y)if(!_g(h,l[y])){const S=l[y];let V=c[y];V=ze(V);const O=o.Nu(S);if(V instanceof Ua)h.push(S);else{const P=Ki(V,O);P!=null&&(h.push(S),d.set(S,P))}}const p=new xt(h);return new ug(d,p,o.fieldTransforms)}function kA(t,e,n,r=!1){return Ki(n,t.Qu(r?4:3,e))}function Ki(t,e){if(gg(t=ze(t)))return Eu("Unsupported field value:",e,t),mg(t,e);if(t instanceof La)return function(r,s){if(!hg(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=Ki(l,s.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ze(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return bT(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=qe.fromDate(r);return{timestampValue:Zo(s.serializer,i)}}if(r instanceof qe){const i=new qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Zo(s.serializer,i)}}if(r instanceof gu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof vs)return{bytesValue:Mm(s.serializer,r._byteString)};if(r instanceof Et){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:eu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof _u)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return Jc(l.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${xa(r)}`)}(t,e)}function mg(t,e){const n={};return hm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Lr(t,(r,s)=>{const i=Ki(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function gg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof qe||t instanceof gu||t instanceof vs||t instanceof Et||t instanceof La||t instanceof _u)}function Eu(t,e,n){if(!gg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=xa(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function yc(t,e,n){if((e=ze(e))instanceof Wi)return e._internalPath;if(typeof e=="string")return wu(t,e);throw ra("Field path arguments must be of type string or ",t,!1,void 0,n)}const VA=new RegExp("[~\\*/\\[\\]]");function wu(t,e,n){if(e.search(VA)>=0)throw ra(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Wi(...e.split("."))._internalPath}catch{throw ra(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ra(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new X(U.INVALID_ARGUMENT,l+t+c)}function _g(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new DA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Tu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class DA extends yg{data(){return super.data()}}function Tu(t,e){return typeof e=="string"?wu(t,e):e instanceof Wi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Iu{}class NA extends Iu{}function OA(t,e,...n){let r=[];e instanceof Iu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Au).length,l=i.filter(c=>c instanceof Ba).length;if(o>1||o>0&&l>0)throw new X(U.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Ba extends NA{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ba(e,n,r)}_apply(e){const n=this._parse(e);return Eg(e._query,n),new Ur(e.firestore,e.converter,lc(e._query,n))}_parse(e){const n=Fa(e.firestore);return function(i,o,l,c,h,d,p){let y;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new X(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){cf(p,d);const S=[];for(const V of p)S.push(lf(c,i,V));y={arrayValue:{values:S}}}else y=lf(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||cf(p,d),y=kA(l,o,p,d==="in"||d==="not-in");return Xe.create(h,d,y)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function xA(t,e,n){const r=e,s=Tu("where",t);return Ba._create(s,r,n)}class Au extends Iu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Au(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Zt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)Eg(o,c),o=lc(o,c)}(e._query,n),new Ur(e.firestore,e.converter,lc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function lf(t,e,n){if(typeof(n=ze(n))=="string"){if(n==="")throw new X(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Em(e)&&n.indexOf("/")!==-1)throw new X(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Le.fromString(n));if(!re.isDocumentKey(r))throw new X(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Cd(t,new re(r))}if(n instanceof Et)return Cd(t,n._key);throw new X(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${xa(n)}.`)}function cf(t,e){if(!Array.isArray(t)||t.length===0)throw new X(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Eg(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new X(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new X(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class MA{convertValue(e,n="none"){switch(Or(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Nr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ue()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Lr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ke(o.doubleValue));return new _u(i)}convertGeoPoint(e){return new gu(Ke(e.latitude),Ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=zc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ai(e));default:return null}}convertTimestamp(e){const n=ar(e);return new qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Le.fromString(e);Pe(jm(r));const s=new bi(r.get(1),r.get(3)),i=new re(r.popFirst(5));return s.isEqual(n)||Nn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Tg extends yg{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Do(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Tu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Do extends Tg{data(e={}){return super.data(e)}}class Ig{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ni(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Do(this._firestore,this._userDataWriter,r.key,r,new ni(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Do(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ni(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Do(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ni(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:LA(l.type),doc:c,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function LA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ue()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(t){t=kt(t,Et);const e=kt(t.firestore,xn);return wA(Hi(e),t._key).then(n=>Ag(e,t,n))}class bu extends MA{constructor(e){super(),this.firestore=e}convertBytes(e){return new vs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Et(this.firestore,null,n)}}function uf(t){t=kt(t,Ur);const e=kt(t.firestore,xn),n=Hi(e),r=new bu(e);return vg(t._query),TA(n,t._query).then(s=>new Ig(e,r,t,s))}function Dl(t,e,n){t=kt(t,Et);const r=kt(t.firestore,xn),s=wg(t.converter,e,n);return $a(r,[dg(Fa(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Pt.none())])}function FA(t,e,n,...r){t=kt(t,Et);const s=kt(t.firestore,xn),i=Fa(s);let o;return o=typeof(e=ze(e))=="string"||e instanceof Wi?pg(i,"updateDoc",t._key,e,n,r):fg(i,"updateDoc",t._key,e),$a(s,[o.toMutation(t._key,Pt.exists(!0))])}function hf(t){return $a(kt(t.firestore,xn),[new ka(t._key,Pt.none())])}function df(t,...e){var n,r,s;t=ze(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||af(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(af(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,h,d;if(t instanceof Et)h=kt(t.firestore,xn),d=ba(t._key.path),c={next:p=>{e[o]&&e[o](Ag(h,t,p))},error:e[o+1],complete:e[o+2]};else{const p=kt(t,Ur);h=kt(p.firestore,xn),d=p._query;const y=new bu(h);c={next:S=>{e[o]&&e[o](new Ig(h,y,p,S))},error:e[o+1],complete:e[o+2]},vg(t._query)}return function(y,S,V,O){const P=new mu(O),M=new fu(S,P,V);return y.asyncQueue.enqueueAndForget(async()=>uu(await na(y),M)),()=>{P.Za(),y.asyncQueue.enqueueAndForget(async()=>hu(await na(y),M))}}(Hi(h),d,l,c)}function $a(t,e){return function(r,s){const i=new kn;return r.asyncQueue.enqueueAndForget(async()=>uA(await EA(r),s,i)),i.promise}(Hi(t),e)}function Ag(t,e,n){const r=n.docs.get(e._key),s=new bu(t);return new Tg(t,s,e._key,r,new ni(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Fa(e)}set(e,n,r){this._verifyNotCommitted();const s=Nl(e,this._firestore),i=wg(s.converter,n,r),o=dg(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Pt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Nl(e,this._firestore);let o;return o=typeof(n=ze(n))=="string"||n instanceof Wi?pg(this._dataReader,"WriteBatch.update",i._key,n,r,s):fg(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Pt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Nl(e,this._firestore);return this._mutations=this._mutations.concat(new ka(n._key,Pt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new X(U.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Nl(t,e){if((t=ze(t)).firestore!==e)throw new X(U.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function Ks(){return new vu("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(t){return Hi(t=kt(t,xn)),new UA(t,e=>$a(t,e))}(function(e,n=!0){(function(s){Ts=s})(ws),ds(new Vr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new xn(new jw(r.getProvider("auth-internal")),new Kw(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new X(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bi(h.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),nr(Id,"4.7.3",e),nr(Id,"4.7.3","esm2017")})();var BA="firebase",$A="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nr(BA,$A,"app");function Ru(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function bg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jA=bg,Rg=new xi("auth","Firebase",bg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa=new $c("@firebase/auth");function qA(t,...e){sa.logLevel<=ve.WARN&&sa.warn(`Auth (${ws}): ${t}`,...e)}function No(t,...e){sa.logLevel<=ve.ERROR&&sa.error(`Auth (${ws}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(t,...e){throw Su(t,...e)}function dn(t,...e){return Su(t,...e)}function Sg(t,e,n){const r=Object.assign(Object.assign({},jA()),{[e]:n});return new xi("auth","Firebase",r).create(e,{appName:t.name})}function sr(t){return Sg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Su(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Rg.create(t,...e)}function ce(t,e,...n){if(!t)throw Su(e,...n)}function Sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw No(e),new Error(e)}function Mn(t,e){t||Sn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function HA(){return ff()==="http:"||ff()==="https:"}function ff(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(HA()||EE()||"connection"in navigator)?navigator.onLine:!0}function KA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mn(n>e,"Short delay should be less than long delay!"),this.isMobile=_E()||wE()}get(){return WA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(t,e){Mn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA=new zi(3e4,6e4);function hr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Un(t,e,n,r,s={}){return Pg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Mi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return vE()||(h.referrerPolicy="no-referrer"),Cg.fetch()(kg(t,t.config.apiHost,n,l),h)})}async function Pg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},zA),e);try{const s=new YA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw To(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw To(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw To(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw To(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Sg(t,d,h);en(t,d)}}catch(s){if(s instanceof Fn)throw s;en(t,"network-request-failed",{message:String(s)})}}async function ja(t,e,n,r,s={}){const i=await Un(t,e,n,r,s);return"mfaPendingCredential"in i&&en(t,"multi-factor-auth-required",{_serverResponse:i}),i}function kg(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Cu(t.config,s):`${t.config.apiScheme}://${s}`}function QA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class YA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(dn(this.auth,"network-request-failed")),GA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function To(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=dn(t,e,r);return s.customData._tokenResponse=n,s}function pf(t){return t!==void 0&&t.enterprise!==void 0}class JA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return QA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function XA(t,e){return Un(t,"GET","/v2/recaptchaConfig",hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZA(t,e){return Un(t,"POST","/v1/accounts:delete",e)}async function Vg(t,e){return Un(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function eb(t,e=!1){const n=ze(t),r=await n.getIdToken(e),s=Pu(r);ce(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:fi(Ol(s.auth_time)),issuedAtTime:fi(Ol(s.iat)),expirationTime:fi(Ol(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ol(t){return Number(t)*1e3}function Pu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return No("JWT malformed, contained fewer than 3 sections"),null;try{const s=zp(n);return s?JSON.parse(s):(No("Failed to decode base64 JWT payload"),null)}catch(s){return No("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function mf(t){const e=Pu(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ki(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Fn&&tb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function tb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fi(this.lastLoginAt),this.creationTime=fi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ia(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ki(t,Vg(n,{idToken:r}));ce(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Dg(i.providerUserInfo):[],l=sb(t.providerData,o),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Ec(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function rb(t){const e=ze(t);await ia(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Dg(t){return t.map(e=>{var{providerId:n}=e,r=Ru(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ib(t,e){const n=await Pg(t,{},async()=>{const r=Mi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=kg(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Cg.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ob(t,e){return Un(t,"POST","/v2/accounts:revokeToken",hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):mf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=mf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await ib(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ls;return r&&(ce(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ce(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ce(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ls,this.toJSON())}_performRefresh(){return Sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Cn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ru(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ec(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ki(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return eb(this,e)}reload(){return rb(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Cn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ia(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Rn(this.auth.app))return Promise.reject(sr(this.auth));const e=await this.getIdToken();return await ki(this,ZA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(s=n.email)!==null&&s!==void 0?s:void 0,S=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,V=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(l=n.tenantId)!==null&&l!==void 0?l:void 0,P=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,M=(h=n.createdAt)!==null&&h!==void 0?h:void 0,x=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:H,emailVerified:L,isAnonymous:Q,providerData:Z,stsTokenManager:w}=n;ce(H&&w,e,"internal-error");const _=ls.fromJSON(this.name,w);ce(typeof H=="string",e,"internal-error"),Kn(p,e.name),Kn(y,e.name),ce(typeof L=="boolean",e,"internal-error"),ce(typeof Q=="boolean",e,"internal-error"),Kn(S,e.name),Kn(V,e.name),Kn(O,e.name),Kn(P,e.name),Kn(M,e.name),Kn(x,e.name);const g=new Cn({uid:H,auth:e,email:y,emailVerified:L,displayName:p,isAnonymous:Q,photoURL:V,phoneNumber:S,tenantId:O,stsTokenManager:_,createdAt:M,lastLoginAt:x});return Z&&Array.isArray(Z)&&(g.providerData=Z.map(A=>Object.assign({},A))),P&&(g._redirectEventId=P),g}static async _fromIdTokenResponse(e,n,r=!1){const s=new ls;s.updateFromServerResponse(n);const i=new Cn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ia(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ce(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Dg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new ls;l.updateFromIdToken(r);const c=new Cn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ec(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf=new Map;function Pn(t){Mn(t instanceof Function,"Expected a class definition");let e=gf.get(t);return e?(Mn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gf.set(t,e),e)}/**
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
 */class Ng{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ng.type="NONE";const _f=Ng;/**
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
 */function Oo(t,e,n){return`firebase:${t}:${e}:${n}`}class cs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Oo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Oo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new cs(Pn(_f),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Pn(_f);const o=Oo(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const d=await h._get(o);if(d){const p=Cn._fromJSON(e,d);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new cs(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new cs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Og(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ug(e))return"Blackberry";if(Bg(e))return"Webos";if(xg(e))return"Safari";if((e.includes("chrome/")||Mg(e))&&!e.includes("edge/"))return"Chrome";if(Fg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Og(t=wt()){return/firefox\//i.test(t)}function xg(t=wt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Mg(t=wt()){return/crios\//i.test(t)}function Lg(t=wt()){return/iemobile/i.test(t)}function Fg(t=wt()){return/android/i.test(t)}function Ug(t=wt()){return/blackberry/i.test(t)}function Bg(t=wt()){return/webos/i.test(t)}function ku(t=wt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ab(t=wt()){var e;return ku(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lb(){return TE()&&document.documentMode===10}function $g(t=wt()){return ku(t)||Fg(t)||Bg(t)||Ug(t)||/windows phone/i.test(t)||Lg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(t,e=[]){let n;switch(t){case"Browser":n=yf(wt());break;case"Worker":n=`${yf(wt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ws}/${r}`}/**
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
 */class cb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function ub(t,e={}){return Un(t,"GET","/v2/passwordPolicy",hr(t,e))}/**
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
 */const hb=6;class db{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:hb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vf(this),this.idTokenSubscription=new vf(this),this.beforeStateQueue=new cb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Pn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await cs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Vg(this,{idToken:e}),r=await Cn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Rn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ia(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=KA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Rn(this.app))return Promise.reject(sr(this));const n=e?ze(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Rn(this.app)?Promise.reject(sr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Rn(this.app)?Promise.reject(sr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ub(this),n=new db(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new xi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ob(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Pn(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await cs.create(this,[Pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&qA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Br(t){return ze(t)}class vf{constructor(e){this.auth=e,this.observer=null,this.addObserver=kE(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pb(t){qa=t}function qg(t){return qa.loadJS(t)}function mb(){return qa.recaptchaEnterpriseScript}function gb(){return qa.gapiScript}function _b(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const yb="recaptcha-enterprise",vb="NO_RECAPTCHA";class Eb{constructor(e){this.type=yb,this.auth=Br(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{XA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new JA(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;pf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(vb)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&pf(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=mb();c.length!==0&&(c+=l),qg(c).then(()=>{s(l,i,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function Ef(t,e,n,r=!1){const s=new Eb(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function wc(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Ef(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ef(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wb(t,e){const n=qc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(zo(i,e??{}))return s;en(s,"already-initialized")}return n.initialize({options:e})}function Tb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ib(t,e,n){const r=Br(t);ce(r._canInitEmulator,r,"emulator-config-failed"),ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Hg(e),{host:o,port:l}=Ab(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),bb()}function Hg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ab(t){const e=Hg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:wf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:wf(o)}}}function wf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function bb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Sn("not implemented")}_getIdTokenResponse(e){return Sn("not implemented")}_linkToIdToken(e,n){return Sn("not implemented")}_getReauthenticationResolver(e){return Sn("not implemented")}}async function Rb(t,e){return Un(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sb(t,e){return ja(t,"POST","/v1/accounts:signInWithPassword",hr(t,e))}async function Cb(t,e){return Un(t,"POST","/v1/accounts:sendOobCode",hr(t,e))}async function Pb(t,e){return Cb(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kb(t,e){return ja(t,"POST","/v1/accounts:signInWithEmailLink",hr(t,e))}async function Vb(t,e){return ja(t,"POST","/v1/accounts:signInWithEmailLink",hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi extends Vu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Vi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Vi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wc(e,n,"signInWithPassword",Sb);case"emailLink":return kb(e,{email:this._email,oobCode:this._password});default:en(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wc(e,r,"signUpPassword",Rb);case"emailLink":return Vb(e,{idToken:n,email:this._email,oobCode:this._password});default:en(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function us(t,e){return ja(t,"POST","/v1/accounts:signInWithIdp",hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db="http://localhost";class xr extends Vu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):en("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ru(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new xr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return us(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,us(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,us(e,n)}buildRequest(){const e={requestUri:Db,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Mi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ob(t){const e=Js(Xs(t)).link,n=e?Js(Xs(e)).deep_link_id:null,r=Js(Xs(t)).deep_link_id;return(r?Js(Xs(r)).link:null)||r||n||e||t}class Du{constructor(e){var n,r,s,i,o,l;const c=Js(Xs(e)),h=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=Nb((s=c.mode)!==null&&s!==void 0?s:null);ce(h&&d&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Ob(e);try{return new Du(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(){this.providerId=bs.PROVIDER_ID}static credential(e,n){return Vi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Du.parseLink(n);return ce(r,"argument-error"),Vi._fromEmailAndCode(e,r.code,r.tenantId)}}bs.PROVIDER_ID="password";bs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";bs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Gi extends Wg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Gi{constructor(){super("facebook.com")}static credential(e){return xr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Gi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.GOOGLE_SIGN_IN_METHOD="google.com";Yn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Gi{constructor(){super("github.com")}static credential(e){return xr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Gi{constructor(){super("twitter.com")}static credential(e,n){return xr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.TWITTER_SIGN_IN_METHOD="twitter.com";Xn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Cn._fromIdTokenResponse(e,r,s),o=Tf(r);return new Es({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Tf(r);return new Es({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Tf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa extends Fn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,oa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new oa(e,n,r,s)}}function Kg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?oa._fromErrorAndOperation(t,i,e,r):i})}async function xb(t,e,n=!1){const r=await ki(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Es._forOperation(t,"link",r)}/**
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
 */async function Mb(t,e,n=!1){const{auth:r}=t;if(Rn(r.app))return Promise.reject(sr(r));const s="reauthenticate";try{const i=await ki(t,Kg(r,s,e,t),n);ce(i.idToken,r,"internal-error");const o=Pu(i.idToken);ce(o,r,"internal-error");const{sub:l}=o;return ce(t.uid===l,r,"user-mismatch"),Es._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&en(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zg(t,e,n=!1){if(Rn(t.app))return Promise.reject(sr(t));const r="signIn",s=await Kg(t,r,e),i=await Es._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Lb(t,e){return zg(Br(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fb(t){const e=Br(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ub(t,e,n){const r=Br(t);await wc(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Pb)}function Bb(t,e,n){return Rn(t.app)?Promise.reject(sr(t)):Lb(ze(t),bs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Fb(t),r})}function $b(t,e,n,r){return ze(t).onIdTokenChanged(e,n,r)}function jb(t,e,n){return ze(t).beforeAuthStateChanged(e,n)}function qb(t,e,n,r){return ze(t).onAuthStateChanged(e,n,r)}function Hb(t){return ze(t).signOut()}const aa="__sak";/**
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
 */class Gg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(aa,"1"),this.storage.removeItem(aa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb=1e3,Kb=10;class Qg extends Gg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=$g(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);lb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Kb):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Wb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qg.type="LOCAL";const zb=Qg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg extends Gg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Yg.type="SESSION";const Jg=Yg;/**
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
 */function Gb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ha{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ha(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),c=await Gb(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ha.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Qb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const h=Nu("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const y=p;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(y.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(){return window}function Yb(t){fn().location.href=t}/**
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
 */function Xg(){return typeof fn().WorkerGlobalScope<"u"&&typeof fn().importScripts=="function"}async function Jb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Xb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Zb(){return Xg()?self:null}/**
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
 */const Zg="firebaseLocalStorageDb",e0=1,la="firebaseLocalStorage",e_="fbase_key";class Qi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wa(t,e){return t.transaction([la],e?"readwrite":"readonly").objectStore(la)}function t0(){const t=indexedDB.deleteDatabase(Zg);return new Qi(t).toPromise()}function Tc(){const t=indexedDB.open(Zg,e0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(la,{keyPath:e_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(la)?e(r):(r.close(),await t0(),e(await Tc()))})})}async function If(t,e,n){const r=Wa(t,!0).put({[e_]:e,value:n});return new Qi(r).toPromise()}async function n0(t,e){const n=Wa(t,!1).get(e),r=await new Qi(n).toPromise();return r===void 0?null:r.value}function Af(t,e){const n=Wa(t,!0).delete(e);return new Qi(n).toPromise()}const r0=800,s0=3;class t_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>s0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ha._getInstance(Zb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Jb(),!this.activeServiceWorker)return;this.sender=new Qb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Xb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tc();return await If(e,aa,"1"),await Af(e,aa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>If(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>n0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Af(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Wa(s,!1).getAll();return new Qi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),r0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}t_.type="LOCAL";const i0=t_;new zi(3e4,6e4);/**
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
 */function o0(t,e){return e?Pn(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ou extends Vu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return us(e,this._buildIdpRequest())}_linkToIdToken(e,n){return us(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return us(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function a0(t){return zg(t.auth,new Ou(t),t.bypassAuthState)}function l0(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),Mb(n,new Ou(t),t.bypassAuthState)}async function c0(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),xb(n,new Ou(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return a0;case"linkViaPopup":case"linkViaRedirect":return c0;case"reauthViaPopup":case"reauthViaRedirect":return l0;default:en(this.auth,"internal-error")}}resolve(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0=new zi(2e3,1e4);class ts extends n_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ts.currentPopupAction&&ts.currentPopupAction.cancel(),ts.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){Mn(this.filter.length===1,"Popup operations only handle one event");const e=Nu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ts.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,u0.get())};e()}}ts.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0="pendingRedirect",xo=new Map;class d0 extends n_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=xo.get(this.auth._key());if(!e){try{const r=await f0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}xo.set(this.auth._key(),e)}return this.bypassAuthState||xo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function f0(t,e){const n=g0(e),r=m0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function p0(t,e){xo.set(t._key(),e)}function m0(t){return Pn(t._redirectPersistence)}function g0(t){return Oo(h0,t.config.apiKey,t.name)}async function _0(t,e,n=!1){if(Rn(t.app))return Promise.reject(sr(t));const r=Br(t),s=o0(r,e),o=await new d0(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0=10*60*1e3;class v0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!E0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!r_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(dn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=y0&&this.cachedEventUids.clear(),this.cachedEventUids.has(bf(e))}saveEventToCache(e){this.cachedEventUids.add(bf(e)),this.lastProcessedEventTime=Date.now()}}function bf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function r_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function E0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return r_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w0(t,e={}){return Un(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,I0=/^https?/;async function A0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await w0(t);for(const n of e)try{if(b0(n))return}catch{}en(t,"unauthorized-domain")}function b0(t){const e=vc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!I0.test(n))return!1;if(T0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const R0=new zi(3e4,6e4);function Rf(){const t=fn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function S0(t){return new Promise((e,n)=>{var r,s,i;function o(){Rf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Rf(),n(dn(t,"network-request-failed"))},timeout:R0.get()})}if(!((s=(r=fn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=fn().gapi)===null||i===void 0)&&i.load)o();else{const l=_b("iframefcb");return fn()[l]=()=>{gapi.load?o():n(dn(t,"network-request-failed"))},qg(`${gb()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Mo=null,e})}let Mo=null;function C0(t){return Mo=Mo||S0(t),Mo}/**
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
 */const P0=new zi(5e3,15e3),k0="__/auth/iframe",V0="emulator/auth/iframe",D0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},N0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function O0(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Cu(e,V0):`https://${t.config.authDomain}/${k0}`,r={apiKey:e.apiKey,appName:t.name,v:ws},s=N0.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Mi(r).slice(1)}`}async function x0(t){const e=await C0(t),n=fn().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:O0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:D0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=dn(t,"network-request-failed"),l=fn().setTimeout(()=>{i(o)},P0.get());function c(){fn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const M0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},L0=500,F0=600,U0="_blank",B0="http://localhost";class Sf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $0(t,e,n,r=L0,s=F0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},M0),{width:r.toString(),height:s.toString(),top:i,left:o}),h=wt().toLowerCase();n&&(l=Mg(h)?U0:n),Og(h)&&(e=e||B0,c.scrollbars="yes");const d=Object.entries(c).reduce((y,[S,V])=>`${y}${S}=${V},`,"");if(ab(h)&&l!=="_self")return j0(e||"",l),new Sf(null);const p=window.open(e||"",l,d);ce(p,t,"popup-blocked");try{p.focus()}catch{}return new Sf(p)}function j0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const q0="__/auth/handler",H0="emulator/auth/handler",W0=encodeURIComponent("fac");async function Cf(t,e,n,r,s,i){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ws,eventId:s};if(e instanceof Wg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",PE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Gi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),h=c?`#${W0}=${encodeURIComponent(c)}`:"";return`${K0(t)}?${Mi(l).slice(1)}${h}`}function K0({config:t}){return t.emulator?Cu(t,H0):`https://${t.authDomain}/${q0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl="webStorageSupport";class z0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jg,this._completeRedirectFn=_0,this._overrideRedirectResult=p0}async _openPopup(e,n,r,s){var i;Mn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Cf(e,n,r,vc(),s);return $0(e,o,Nu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Cf(e,n,r,vc(),s);return Yb(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Mn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await x0(e),r=new v0(e);return n.register("authEvent",s=>(ce(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xl,{type:xl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[xl];o!==void 0&&n(!!o),en(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=A0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return $g()||xg()||ku()}}const G0=z0;var Pf="@firebase/auth",kf="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function J0(t){ds(new Vr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jg(t)},h=new fb(r,s,i,c);return Tb(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ds(new Vr("auth-internal",e=>{const n=Br(e.getProvider("auth").getImmediate());return(r=>new Q0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nr(Pf,kf,Y0(t)),nr(Pf,kf,"esm2017")}/**
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
 */const X0=5*60,Z0=Yp("authIdTokenMaxAge")||X0;let Vf=null;const eR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Z0)return;const s=n==null?void 0:n.token;Vf!==s&&(Vf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function tR(t=em()){const e=qc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=wb(t,{popupRedirectResolver:G0,persistence:[i0,zb,Jg]}),r=Yp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=eR(i.toString());jb(n,o,()=>o(n.currentUser)),$b(n,l=>o(l))}}const s=Gp("auth");return s&&Ib(n,`http://${s}`),n}function nR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}pb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=dn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",nR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});J0("Browser");const rR={apiKey:"AIzaSyBTn3Z_B1MYRJ-hOsL0I94QWBq2xh3EdFs",authDomain:"henryshus.firebaseapp.com",projectId:"henryshus",storageBucket:"henryshus.firebasestorage.app",messagingSenderId:"877597619520",appId:"1:877597619520:web:61e33ff74b9f03aa45f6a5",measurementId:"G-ESKWZ556XM"},s_=Zp(rR),He=bA(s_),Io=tR(s_);function i_(){const t=me([]),e=me([]),n=me(!1);let r=null,s=null;async function i(){const P=qe.now(),M=new qe(P.seconds-86400,P.nanoseconds);for(const x of e.value)if(x.borrowedAt&&x.borrowedAt.toMillis()<=M.toMillis()){const H=wo(He),L=Dt(He,"workstations",x.workstation);H.update(Dt(He,"borrowRecords",x.id),{returnedAt:Ks()}),H.update(L,{status:"available",borrower:null,borrowedAt:null,currentBorrowRecord:null}),await H.commit()}}function o(){r||(r=df(Ws(He,"workstations"),P=>{const M=[];P.forEach(x=>{M.push({id:x.id,...x.data()})}),M.sort((x,H)=>x.name.localeCompare(H.name,"nb")),t.value=M},P=>console.error("Workstations error:",P)))}function l(){if(s)return;const P=OA(Ws(He,"borrowRecords"),xA("returnedAt","==",null));s=df(P,M=>{const x=[];M.forEach(H=>{x.push({id:H.id,...H.data()})}),x.sort((H,L)=>{var Q,Z;return(((Q=L.borrowedAt)==null?void 0:Q.toMillis())??0)-(((Z=H.borrowedAt)==null?void 0:Z.toMillis())??0)}),e.value=x,i()},M=>console.error("Active borrows error:",M))}va(()=>{r&&r(),s&&s()});async function c(P,M,x,H){const L=wo(He),Q=Dt(Ws(He,"borrowRecords")),Z=Dt(He,"workstations",P);L.update(Z,{status:"borrowed",borrower:M,borrowedAt:Ks(),currentBorrowRecord:Q.id});const w={workstation:P,borrower:M,phone:x,borrowedAt:Ks(),returnedAt:null,controllers:H??null,anonymizedAt:null};L.set(Q,w),await L.commit()}async function h(P){const M=Dt(He,"workstations",P),x=await Vl(M);if(!x.exists())return;const H=x.data(),L=H.currentBorrowRecord,Q=H.borrower,Z=wo(He);if(Z.update(M,{status:"available",borrower:null,borrowedAt:null,currentBorrowRecord:null}),L){const w={returnedAt:Ks()};Q&&(w.borrower=Q),Z.update(Dt(He,"borrowRecords",L),w)}await Z.commit()}async function d(){const P=await uf(Ws(He,"borrowRecords")),M=[];for(const x of P.docs){const H={id:x.id,...x.data()};H.returnedAt&&M.push(H)}return M.sort((x,H)=>{var L,Q;return(((L=H.borrowedAt)==null?void 0:L.toMillis())??0)-(((Q=x.borrowedAt)==null?void 0:Q.toMillis())??0)}),M}async function p(){const P=qe.fromMillis(Date.now()-2592e6),M=await uf(Ws(He,"borrowRecords")),x=wo(He);let H=0;for(const L of M.docs){const Q=L.data();Q.returnedAt&&Q.returnedAt.toMillis()<=P.toMillis()&&!Q.anonymizedAt&&(x.update(L.ref,{borrower:"Anonymisert",phone:"",anonymizedAt:Ks()}),H++)}H>0&&await x.commit()}async function y(){const P=[{name:"PlayStation",type:"playstation",keyboard:"Kontroller x2",mouse:"",accessories:""},{name:"PlayStation 2",type:"playstation",keyboard:"Kontroller x2",mouse:"",accessories:""},{name:"PC 1",type:"pc",keyboard:"Keyboard 1",mouse:"Mouse 1",accessories:"Headset"},{name:"PC 2",type:"pc",keyboard:"Keyboard 2",mouse:"Mouse 2",accessories:""},{name:"PC 3",type:"pc",keyboard:"Keyboard 3",mouse:"Mouse 3",accessories:""}];for(const M of P){const x=Dt(He,"workstations",M.name);(await Vl(x)).exists()||await Dl(x,{name:M.name,type:M.type,keyboard:M.keyboard,mouse:M.mouse,accessories:M.accessories,status:"available",borrower:null,borrowedAt:null,currentBorrowRecord:null})}}async function S(P,M,x,H,L){await Dl(Dt(He,"workstations",P),{name:P,type:M,keyboard:x||"",mouse:H||"",accessories:L||"",status:"available",borrower:null,borrowedAt:null,currentBorrowRecord:null})}async function V(P){await hf(Dt(He,"workstations",P))}async function O(P,M){var H;const x=(H=M.newName)==null?void 0:H.trim();if(x&&x!==P){const L=await Vl(Dt(He,"workstations",P));if(!L.exists())return;const Q=L.data();await Dl(Dt(He,"workstations",x),{...Q,name:x,keyboard:M.keyboard??Q.keyboard,mouse:M.mouse??Q.mouse,accessories:M.accessories??Q.accessories,type:M.type??Q.type}),await hf(Dt(He,"workstations",P))}else{const L={};M.keyboard!==void 0&&(L.keyboard=M.keyboard),M.mouse!==void 0&&(L.mouse=M.mouse),M.accessories!==void 0&&(L.accessories=M.accessories),M.type!==void 0&&(L.type=M.type),await FA(Dt(He,"workstations",P),L)}}return{workstations:t,activeBorrows:e,loading:n,subscribeWorkstations:o,subscribeActiveBorrows:l,borrowWorkstation:c,returnWorkstation:h,getHistory:d,anonymizeOldRecords:p,seedDefaultWorkstations:y,addWorkstation:S,removeWorkstation:V,updateWorkstation:O}}const Ml=me(null);let zs=null;function xu(){zs||(zs=qb(Io,r=>{Ml.value=r})),va(()=>{zs&&(zs(),zs=null)});async function t(r,s){await Bb(Io,r,s)}async function e(){await Hb(Io)}function n(){return Ml.value!==null}return{currentUser:Ml,login:t,logout:e,isAdmin:n,sendPasswordReset:r=>Ub(Io,r)}}const sR={class:"student-layout"},iR={key:0,class:"init-load"},oR={key:1,class:"ws-scroll"},aR={key:0,class:"ps-row"},lR=["onClick","onKeydown"],cR={class:"ws-bar-inner"},uR={class:"ws-bar-name"},hR={key:0,class:"ws-bar-detail"},dR={class:"ws-row"},fR=["onClick","onKeydown"],pR={class:"ws-block-inner"},mR={class:"ws-block-name"},gR={key:0,class:"ws-block-detail"},_R={class:"modal"},yR={class:"form-group"},vR={class:"form-group"},ER={key:0,class:"form-group"},wR={class:"ctrl-select"},TR={class:"modal-actions"},IR=["disabled"],AR={class:"modal"},bR={class:"form-group"},RR={class:"form-group"},SR={class:"modal-actions"},CR={key:0,class:"error-message"},PR={class:"modal modal-reset"},kR={class:"form-group"},VR={class:"modal-actions"},DR=["disabled"],NR={class:"modal-actions"},OR=Mr({__name:"StudentView",setup(t){const e=Mt("currentView"),n=Mt("showToast"),r=Mt("loading"),{workstations:s,subscribeWorkstations:i,borrowWorkstation:o}=i_(),{login:l,sendPasswordReset:c}=xu(),h=me(!1),d=me(""),p=me(!1),y=me(!1),S=me(null),V=me(""),O=me(""),P=me(0),M=me(null),x=me(!1),H=me(""),L=me(""),Q=me(""),Z=me(null);async function w(){Q.value="",r.value=!0;try{await l(H.value,L.value),x.value=!1,H.value="",L.value="",e.value="admin"}catch(ge){const F=ge.code;F==="auth/user-not-found"?Q.value="Bruker ikke funnet":F==="auth/wrong-password"?Q.value="Feil passord":F==="auth/invalid-email"?Q.value="Ugyldig e-post":F==="auth/too-many-requests"?Q.value="For mange forsøk. Prøv igjen senere.":Q.value="Feil e-post eller passord"}finally{r.value=!1}}async function _(){d.value.trim()&&(p.value=!0,await c(d.value.trim()).catch(()=>{}))}const g=es(()=>s.value.filter(ge=>ge.type==="playstation")),A=es(()=>s.value.filter(ge=>ge.type==="pc")),R=es(()=>s.value.find(ge=>ge.id===S.value)),I=es(()=>{var ge;return((ge=R.value)==null?void 0:ge.type)==="playstation"});function v(ge){S.value=ge,V.value="",O.value="",P.value=0,y.value=!0,jl(()=>{var F;return(F=M.value)==null?void 0:F.focus()})}function ye(){y.value=!1,S.value=null,V.value="",O.value="",P.value=0}async function Ge(){const ge=V.value.trim(),F=O.value.trim();if(!(!ge||!S.value)&&F&&!(I.value&&!P.value)){r.value=!0;try{await o(S.value,ge,F,I.value?P.value:void 0),y.value=!1,n(`Du låner ${S.value}`,"success"),S.value=null,V.value="",O.value=""}catch(z){console.error(z),n("Kunne ikke fullføre lånet","error")}finally{r.value=!1}}}return ya(()=>i()),(ge,F)=>(ee(),se("div",sR,[k("button",{class:"admin-corner",onClick:F[0]||(F[0]=z=>{x.value=!0,jl(()=>{var Qe;return(Qe=Z.value)==null?void 0:Qe.focus()})})},"Admin"),Zr(s).length===0?(ee(),se("div",iR,[...F[16]||(F[16]=[k("div",{class:"loader-ring"},null,-1),k("p",null,"Laster...",-1)])])):(ee(),se("div",oR,[g.value.length?(ee(),se("div",aR,[(ee(!0),se(Ne,null,Rr(g.value,z=>(ee(),se("div",{key:z.id,class:We(["ws-bar",z.status]),tabindex:"0",role:"button",onClick:Qe=>z.status==="available"&&v(z.id),onKeydown:wl(Qe=>z.status==="available"&&v(z.id),["enter"])},[k("div",cR,[k("div",uR,Ie(z.name),1),z.keyboard?(ee(),se("div",hR,Ie(z.keyboard),1)):Ve("",!0),k("div",{class:We(["ws-block-badge",z.status])},Ie(z.status==="available"?"Trykk for å låne":"Opptatt"),3)])],42,lR))),128))])):Ve("",!0),k("div",dR,[(ee(!0),se(Ne,null,Rr(A.value,z=>(ee(),se("div",{key:z.id,class:We(["ws-block",z.status]),tabindex:"0",role:"button",onClick:Qe=>z.status==="available"&&v(z.id),onKeydown:wl(Qe=>z.status==="available"&&v(z.id),["enter"])},[k("div",pR,[k("div",mR,Ie(z.name),1),z.keyboard||z.mouse||z.accessories?(ee(),se("div",gR,Ie([z.keyboard,z.mouse,z.accessories].filter(Boolean).join(" · ")),1)):Ve("",!0),k("div",{class:We(["ws-block-badge",z.status])},Ie(z.status==="available"?"Trykk for å låne":"Opptatt"),3)])],42,fR))),128))])])),(ee(),Yt(Ro,{to:"body"},[y.value&&R.value?(ee(),se("div",{key:0,class:"modal-overlay",onClick:ln(ye,["self"])},[k("div",_R,[k("h3",null,Ie(R.value.name),1),F[20]||(F[20]=k("p",{class:"modal-sub"},"Skriv navnet ditt for å låne",-1)),k("div",yR,[F[17]||(F[17]=k("label",{for:"name-input"},"Ditt navn",-1)),et(k("input",{id:"name-input",ref_key:"nameInput",ref:M,"onUpdate:modelValue":F[1]||(F[1]=z=>V.value=z),class:"input",placeholder:"Skriv her...",autocomplete:"name",onKeydown:wl(Ge,["enter"])},null,544),[[bt,V.value]])]),k("div",vR,[F[18]||(F[18]=k("label",{for:"phone-input"},"Telefon",-1)),et(k("input",{id:"phone-input","onUpdate:modelValue":F[2]||(F[2]=z=>O.value=z),class:"input",type:"tel",placeholder:"12345678",autocomplete:"tel",required:""},null,512),[[bt,O.value]])]),I.value?(ee(),se("div",ER,[F[19]||(F[19]=k("label",{for:"ctrl-input"},"Antall kontrollere",-1)),k("div",wR,[k("button",{class:We(["ctrl-btn",{active:P.value===1}]),onClick:F[3]||(F[3]=z=>P.value=1)},"1",2),k("button",{class:We(["ctrl-btn",{active:P.value===2}]),onClick:F[4]||(F[4]=z=>P.value=2)},"2",2),k("button",{class:We(["ctrl-btn",{active:P.value===3}]),onClick:F[5]||(F[5]=z=>P.value=3)},"3",2),k("button",{class:We(["ctrl-btn",{active:P.value===4}]),onClick:F[6]||(F[6]=z=>P.value=4)},"4",2)])])):Ve("",!0),k("div",TR,[k("button",{class:"btn btn-primary btn-full",disabled:!V.value.trim()||!O.value.trim()||I.value&&!P.value,onClick:Ge}," Bekreft lån ",8,IR),k("button",{class:"btn btn-secondary btn-full",onClick:ye},"Avbryt")])])])):Ve("",!0)])),(ee(),Yt(Ro,{to:"body"},[x.value?(ee(),se("div",{key:0,class:"modal-overlay",onClick:F[11]||(F[11]=ln(z=>x.value=!1,["self"]))},[k("div",AR,[F[24]||(F[24]=k("h3",null,"Admin",-1)),F[25]||(F[25]=k("p",{class:"modal-sub"},"Logg inn for å administrere",-1)),k("form",{onSubmit:ln(w,["prevent"])},[k("div",bR,[F[21]||(F[21]=k("label",{for:"login-email"},"E-post",-1)),et(k("input",{id:"login-email",ref_key:"emailInput",ref:Z,"onUpdate:modelValue":F[7]||(F[7]=z=>H.value=z),class:"input",type:"email",placeholder:"admin@eksempel.no",autocomplete:"email",required:""},null,512),[[bt,H.value]])]),k("div",RR,[F[22]||(F[22]=k("label",{for:"login-password"},"Passord",-1)),et(k("input",{id:"login-password","onUpdate:modelValue":F[8]||(F[8]=z=>L.value=z),class:"input",type:"password",placeholder:"Passord",autocomplete:"current-password",required:""},null,512),[[bt,L.value]])]),k("button",{type:"button",class:"btn-text",style:{"margin-top":"4px"},onClick:F[9]||(F[9]=z=>h.value=!0)},"Glemt passordet?"),k("div",SR,[F[23]||(F[23]=k("button",{type:"submit",class:"btn btn-primary btn-full"},"Logg inn",-1)),k("button",{type:"button",class:"btn btn-secondary btn-full",onClick:F[10]||(F[10]=z=>x.value=!1)},"Avbryt")]),Q.value?(ee(),se("p",CR,Ie(Q.value),1)):Ve("",!0)],32)])])):Ve("",!0)])),(ee(),Yt(Ro,{to:"body"},[h.value?(ee(),se("div",{key:0,class:"modal-overlay",onClick:F[15]||(F[15]=ln(z=>h.value=!1,["self"]))},[k("div",PR,[p.value?(ee(),se(Ne,{key:1},[F[28]||(F[28]=k("h3",null,"Tilbakestill passord",-1)),F[29]||(F[29]=k("p",{class:"modal-sub"},"Hvis e-posten du skrev inn finnes i systemet vårt, vil du motta en tilbakestillingslenke.",-1)),k("div",NR,[k("button",{type:"button",class:"btn btn-primary btn-full",onClick:F[14]||(F[14]=z=>h.value=!1)},"OK")])],64)):(ee(),se(Ne,{key:0},[F[27]||(F[27]=k("h3",null,"Tilbakestill passord",-1)),k("form",{onSubmit:ln(_,["prevent"])},[k("div",kR,[F[26]||(F[26]=k("label",{for:"reset-email"},"E-post",-1)),et(k("input",{id:"reset-email","onUpdate:modelValue":F[12]||(F[12]=z=>d.value=z),class:"input",type:"email",placeholder:"admin@eksempel.no",autocomplete:"email",required:""},null,512),[[bt,d.value]])]),k("div",VR,[k("button",{type:"submit",class:"btn btn-primary btn-full",disabled:!d.value.trim()},"Send",8,DR),k("button",{type:"button",class:"btn btn-secondary btn-full",onClick:F[13]||(F[13]=z=>h.value=!1)},"Lukk")])],32)],64))])])):Ve("",!0)]))]))}}),Rs=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},xR=Rs(OR,[["__scopeId","data-v-3fc1d357"]]),MR={class:"view active"},LR={class:"header"},FR={class:"header-top"},UR={class:"content"},BR={class:"card login-card"},$R={class:"form-group"},jR={class:"form-group"},qR={key:0,class:"error-message"},HR=Mr({__name:"LoginView",setup(t){const e=Mt("currentView");Mt("showToast");const n=Mt("loading"),{login:r}=xu(),s=me(""),i=me(""),o=me("");async function l(){o.value="",n.value=!0;try{await r(s.value,i.value),e.value="admin"}catch(c){const h=c.code;h==="auth/user-not-found"?o.value="Bruker ikke funnet":h==="auth/wrong-password"?o.value="Feil passord":h==="auth/invalid-email"?o.value="Ugyldig e-post":h==="auth/too-many-requests"?o.value="For mange forsøk. Prøv igjen senere.":o.value="Feil e-post eller passord"}finally{n.value=!1}}return(c,h)=>(ee(),se("div",MR,[k("header",LR,[k("div",FR,[k("button",{class:"btn-text back-btn",onClick:h[0]||(h[0]=d=>e.value="student")}," ← Tilbake "),h[3]||(h[3]=k("h1",{class:"header-title"},"Admin",-1))])]),k("main",UR,[k("section",BR,[k("form",{onSubmit:ln(l,["prevent"])},[k("div",$R,[h[4]||(h[4]=k("label",{for:"login-email"},"E-post",-1)),et(k("input",{id:"login-email","onUpdate:modelValue":h[1]||(h[1]=d=>s.value=d),class:"input",type:"email",placeholder:"admin@eksempel.no",autocomplete:"email",required:""},null,512),[[bt,s.value]])]),k("div",jR,[h[5]||(h[5]=k("label",{for:"login-password"},"Passord",-1)),et(k("input",{id:"login-password","onUpdate:modelValue":h[2]||(h[2]=d=>i.value=d),class:"input",type:"password",placeholder:"Passord",autocomplete:"current-password",required:""},null,512),[[bt,i.value]])]),h[6]||(h[6]=k("button",{type:"submit",class:"btn btn-primary btn-full"},"Logg inn",-1)),o.value?(ee(),se("p",qR,Ie(o.value),1)):Ve("",!0)],32)])])]))}}),WR=Rs(HR,[["__scopeId","data-v-16000267"]]),KR=["innerHTML"],zR=Mr({__name:"SfIcon",props:{name:{},size:{}},setup(t){const e={gamecontroller:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
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
</svg>`,"line.3.horizontal":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="3" y1="6" x2="21" y2="6" />
  <line x1="3" y1="12" x2="21" y2="12" />
  <line x1="3" y1="18" x2="21" y2="18" />
</svg>`,"tray.and.arrow.down":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="7 10 12 15 17 10" />
  <line x1="12" y1="15" x2="12" y2="3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
</svg>`,"checkmark.circle.fill":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
  <polyline points="22 4 12 14.01 9 11.01" />
</svg>`};return(n,r)=>(ee(),se("span",{class:"sf-icon",style:fa({width:(t.size??20)+"px",height:(t.size??20)+"px"}),innerHTML:e[t.name]},null,12,KR))}}),nn=Rs(zR,[["__scopeId","data-v-ed5cca7c"]]),GR={class:"sheet-content"},QR=Mr({__name:"BaseSheet",props:{show:{type:Boolean}},emits:["close"],setup(t,{emit:e}){const n=e,r=me(null);let s=0,i=0,o=!1;function l(d){d.touches[0].clientY<40&&(s=d.touches[0].clientY,o=!0)}function c(d){o&&(i=d.touches[0].clientY-s,i>0&&r.value&&(r.value.style.transform=`translateY(${i}px)`))}function h(){o&&(o=!1,i>100&&r.value&&n("close"),r.value&&(r.value.style.transform=""),i=0)}return(d,p)=>(ee(),Yt(Ro,{to:"body"},[xe(kv,{name:"sheet"},{default:Lc(()=>[t.show?(ee(),se("div",{key:0,class:"sheet-overlay",onClick:p[0]||(p[0]=ln(y=>n("close"),["self"]))},[k("div",{ref_key:"sheetRef",ref:r,class:"sheet",onTouchstart:ln(l,["prevent"]),onTouchmove:ln(c,["prevent"]),onTouchend:h},[p[1]||(p[1]=k("div",{class:"sheet-handle"},null,-1)),k("div",GR,[Fy(d.$slots,"default",{},void 0,!0)])],544)])):Ve("",!0)]),_:3})]))}}),YR=Rs(QR,[["__scopeId","data-v-bf5786e0"]]),JR={class:"confirm-head"},XR={key:0,class:"confirm-message"},ZR={class:"confirm-actions"},eS=Mr({__name:"ConfirmSheet",props:{show:{type:Boolean},title:{},message:{},confirmLabel:{},cancelLabel:{},danger:{type:Boolean}},emits:["confirm","close"],setup(t,{emit:e}){const n=e;return(r,s)=>(ee(),Yt(YR,{show:t.show,onClose:s[2]||(s[2]=i=>n("close"))},{default:Lc(()=>[k("div",JR,[k("h3",null,Ie(t.title),1),t.message?(ee(),se("p",XR,Ie(t.message),1)):Ve("",!0)]),k("div",ZR,[k("button",{class:We(["confirm-btn confirm-primary",{danger:t.danger}]),onClick:s[0]||(s[0]=i=>n("confirm"))},Ie(t.confirmLabel),3),k("button",{class:"confirm-btn confirm-cancel",onClick:s[1]||(s[1]=i=>n("close"))},Ie(t.cancelLabel??"Avbryt"),1)])]),_:1},8,["show"]))}}),tS=Rs(eS,[["__scopeId","data-v-f68954fa"]]),nS={class:"admin-split"},rS={class:"sidebar-nav"},sS=["onClick"],iS={class:"sidebar-footer"},oS={class:"sidebar-email"},aS={class:"admin-content"},lS={key:0,class:"empty-state"},cS={key:1,class:"card-list"},uS={class:"card-body"},hS={class:"card-title"},dS={class:"card-meta"},fS={key:0},pS={class:"card-meta"},mS=["onClick"],gS={key:0,class:"empty-state"},_S={key:1,class:"card-list"},yS={class:"card-body"},vS={class:"card-title"},ES={class:"card-meta"},wS={key:0},TS={class:"card-meta"},IS={key:1},AS={class:"card-list manage-list"},bS={key:0,class:"edit-inline"},RS={class:"form-group"},SS={class:"type-picker",style:{"margin-bottom":"8px"}},CS=["placeholder"],PS={class:"card-body"},kS={class:"card-title"},VS={class:"card-meta"},DS=["onClick"],NS=["onClick"],OS={key:0,class:"empty-state"},xS={class:"form-group"},MS={class:"form-group"},LS={class:"type-picker"},FS={class:"form-group"},US={for:"new-keyboard"},BS=["placeholder"],$S={key:0,class:"form-group"},jS={key:1,class:"form-group"},qS=Mr({__name:"AdminView",setup(t){const e=Mt("currentView"),n=Mt("showToast"),r=Mt("loading"),{currentUser:s,logout:i}=xu(),{workstations:o,activeBorrows:l,subscribeWorkstations:c,subscribeActiveBorrows:h,returnWorkstation:d,getHistory:p,anonymizeOldRecords:y,seedDefaultWorkstations:S,addWorkstation:V,removeWorkstation:O,updateWorkstation:P}=i_(),M=me("borrows"),x=me(!1),H=[{key:"borrows",label:"Utlån",icon:"list"},{key:"history",label:"Historikk",icon:"clock"},{key:"manage",label:"Enheter",icon:"gear"}],L=es(()=>{var T;return((T=s.value)==null?void 0:T.email)??""}),Q=me([]),Z=me(""),w=me("pc"),_=me(""),g=me(""),A=me("");async function R(){await i(),e.value="student"}async function I(T){r.value=!0;try{await d(T),n(`${T} er returnert`,"success")}catch(b){console.error(b),n("Kunne ikke returnere","error")}finally{r.value=!1}}async function v(){r.value=!0;try{await y(),Q.value=await p()}catch(T){console.error(T),n("Kunne ikke laste historikk","error")}finally{r.value=!1}}async function ye(){r.value=!0;try{await S(),n("Standardenheter er lagt til","success")}catch(T){console.error(T),n("Kunne ikke sette inn enheter","error")}finally{r.value=!1}}async function Ge(){if(Z.value.trim()){r.value=!0;try{await V(Z.value.trim(),w.value,_.value.trim(),g.value.trim(),A.value.trim()),n(`${Z.value} er lagt til`,"success"),Z.value="",_.value="",g.value="",A.value=""}catch(T){console.error(T),n("Kunne ikke legge til enheten","error")}finally{r.value=!1}}}async function ge(T){r.value=!0;try{await O(T),n(`${T} er fjernet`,"success")}catch(b){console.error(b),n("Kunne ikke fjerne enheten","error")}finally{r.value=!1}}const F=me(null);function z(T){F.value=T}function Qe(){F.value=null}function _n(){const T=F.value;T&&(F.value=null,T.onConfirm())}const nt=me(null),Fe=me(""),Ce=me("pc"),Bn=me(""),Lt=me(""),Ft=me("");function Kt(T){nt.value=T.id,Fe.value=T.name,Ce.value=T.type,Bn.value=T.keyboard||"",Lt.value=T.mouse||"",Ft.value=T.accessories||""}function dr(){nt.value=null}async function $r(){if(nt.value){r.value=!0;try{await P(nt.value,{newName:Fe.value.trim(),type:Ce.value,keyboard:Bn.value.trim(),mouse:Lt.value.trim(),accessories:Ft.value.trim()}),n(`${nt.value} er oppdatert`,"success"),nt.value=null}catch(T){console.error(T),n("Kunne ikke oppdatere enheten","error")}finally{r.value=!1}}}function Ut(T){M.value=T,x.value=!1,T==="history"&&(Q.value=[],v())}function fr(T){if(!T)return"—";const b=T.toDate?T.toDate():new Date(T);return`${String(b.getDate()).padStart(2,"0")}.${String(b.getMonth()+1).padStart(2,"0")} ${String(b.getHours()).padStart(2,"0")}:${String(b.getMinutes()).padStart(2,"0")}`}function E(T){if(!T)return"—";const b=T.toDate?T.toDate():new Date(T);return`${String(b.getDate()).padStart(2,"0")}.${String(b.getMonth()+1).padStart(2,"0")}.${b.getFullYear()} ${String(b.getHours()).padStart(2,"0")}:${String(b.getMinutes()).padStart(2,"0")}`}return ya(()=>{c(),h()}),(T,b)=>{var q,$,B,Y;return ee(),se(Ne,null,[k("div",nS,[k("button",{class:We(["menu-toggle",{hidden:x.value||F.value!==null}]),onClick:b[0]||(b[0]=D=>x.value=!0),"aria-label":"Åpne meny"},[xe(nn,{name:"line.3.horizontal",size:22}),b[15]||(b[15]=k("span",null,"Meny",-1))],2),x.value?(ee(),se("div",{key:0,class:"sidebar-backdrop",onClick:b[1]||(b[1]=D=>x.value=!1)})):Ve("",!0),k("aside",{class:We(["sidebar",{open:x.value}])},[k("div",{class:"sidebar-top"},[b[16]||(b[16]=k("div",{class:"sidebar-title"},"Admin",-1)),k("button",{class:"sidebar-logout",onClick:R}," Logg ut ")]),k("nav",rS,[(ee(),se(Ne,null,Rr(H,D=>k("button",{key:D.key,class:We(["sidebar-item",{active:M.value===D.key}]),onClick:W=>Ut(D.key)},[xe(nn,{name:D.icon,size:20},null,8,["name"]),k("span",null,Ie(D.label),1)],10,sS)),64))]),k("div",iS,[k("div",oS,Ie(L.value),1)])],2),k("main",aS,[et(k("section",null,[b[17]||(b[17]=k("h2",{class:"section-title"},"Utlån",-1)),Zr(l).length===0?(ee(),se("div",lS,"Ingen utlån")):(ee(),se("div",cS,[(ee(!0),se(Ne,null,Rr(Zr(l),D=>(ee(),se("div",{key:D.id,class:"card-row"},[k("div",uS,[k("div",hS,Ie(D.workstation),1),k("div",dS,[Nt(Ie(D.borrower),1),D.phone?(ee(),se("span",fS," · "+Ie(D.phone),1)):Ve("",!0)]),k("div",pS,[D.controllers?(ee(),se(Ne,{key:0},[xe(nn,{name:"gamecontroller",size:12}),Nt(" "+Ie(D.controllers)+" kontrollere · ",1)],64)):Ve("",!0),Nt(" "+Ie(fr(D.borrowedAt)),1)])]),k("button",{class:"btn-return",onClick:W=>z({title:`Returner ${D.workstation}?`,message:"Enheten blir tilgjengelig igjen etter retur.",confirmLabel:"Returner",onConfirm:()=>I(D.workstation)})},"Returner",8,mS)]))),128))]))],512),[[_l,M.value==="borrows"]]),et(k("section",null,[b[18]||(b[18]=k("h2",{class:"section-title"},"Historikk",-1)),Q.value.length===0?(ee(),se("div",gS,"Ingen historikk")):(ee(),se("div",_S,[(ee(!0),se(Ne,null,Rr(Q.value,D=>(ee(),se("div",{key:D.id,class:"card-row history-row"},[k("div",yS,[k("div",vS,Ie(D.workstation),1),k("div",ES,[Nt(Ie(D.borrower),1),D.phone?(ee(),se("span",wS," · "+Ie(D.phone),1)):Ve("",!0)]),k("div",TS,[D.controllers?(ee(),se(Ne,{key:0},[xe(nn,{name:"gamecontroller",size:12}),Nt(" "+Ie(D.controllers)+" kontrollere · ",1)],64)):Ve("",!0),Nt(" Lånt "+Ie(E(D.borrowedAt))+" ",1),D.returnedAt?(ee(),se("span",IS," | retur "+Ie(E(D.returnedAt)),1)):Ve("",!0)])]),k("span",{class:We(["card-status",D.returnedAt?"returned":"active"])},Ie(D.returnedAt?"Returnert":"Aktiv"),3)]))),128))]))],512),[[_l,M.value==="history"]]),et(k("section",null,[b[31]||(b[31]=k("h2",{class:"section-title"},"Enheter",-1)),k("div",AS,[(ee(!0),se(Ne,null,Rr(Zr(o),D=>(ee(),se("div",{key:D.id,class:"card-row manage-row"},[nt.value===D.id?(ee(),se("div",bS,[k("div",RS,[b[19]||(b[19]=k("label",null,"Navn",-1)),et(k("input",{"onUpdate:modelValue":b[2]||(b[2]=W=>Fe.value=W),class:"input",placeholder:"Navn"},null,512),[[bt,Fe.value]])]),k("div",SS,[k("button",{type:"button",class:We(["type-btn",{active:Ce.value==="pc"}]),onClick:b[3]||(b[3]=W=>Ce.value="pc")},[xe(nn,{name:"desktopcomputer",size:16}),b[20]||(b[20]=Nt(" PC ",-1))],2),k("button",{type:"button",class:We(["type-btn",{active:Ce.value==="playstation"}]),onClick:b[4]||(b[4]=W=>Ce.value="playstation")},[xe(nn,{name:"gamecontroller",size:16}),b[21]||(b[21]=Nt(" PS ",-1))],2)]),et(k("input",{"onUpdate:modelValue":b[5]||(b[5]=W=>Bn.value=W),class:"input",placeholder:Ce.value==="playstation"?"Tilbehør":"Tastatur",style:{"margin-bottom":"6px"}},null,8,CS),[[bt,Bn.value]]),Ce.value==="pc"?et((ee(),se("input",{key:0,"onUpdate:modelValue":b[6]||(b[6]=W=>Lt.value=W),class:"input",placeholder:"Mus",style:{"margin-bottom":"6px"}},null,512)),[[bt,Lt.value]]):Ve("",!0),Ce.value==="pc"?et((ee(),se("input",{key:1,"onUpdate:modelValue":b[7]||(b[7]=W=>Ft.value=W),class:"input",placeholder:"Annet tilbehør",style:{"margin-bottom":"6px"}},null,512)),[[bt,Ft.value]]):Ve("",!0),k("div",{class:"edit-actions"},[k("button",{class:"btn-return",onClick:$r},"Lagre"),k("button",{class:"btn-remove",onClick:dr},"Avbryt")])])):(ee(),se(Ne,{key:1},[k("div",PS,[k("div",kS,[xe(nn,{name:D.type==="playstation"?"gamecontroller":"desktopcomputer",size:16},null,8,["name"]),Nt(" "+Ie(D.name),1)]),k("div",VS,Ie(D.status==="available"?"Ledig":"Utlånt"),1)]),D.status==="available"?(ee(),se("button",{key:0,class:"btn-edit",onClick:W=>Kt(D)},"Rediger",8,DS)):Ve("",!0),D.status==="available"?(ee(),se("button",{key:1,class:"btn-remove",onClick:W=>z({title:`Fjern ${D.name}?`,message:"Enheten og dens lån blir slettet.",confirmLabel:"Fjern",danger:!0,onConfirm:()=>ge(D.name)})},"Fjern",8,NS)):Ve("",!0)],64))]))),128)),Zr(o).length===0?(ee(),se("div",OS,"Ingen enheter")):Ve("",!0)]),k("button",{class:"btn-seed",onClick:b[8]||(b[8]=D=>z({title:"Sett inn standardenheter?",message:"Legger til standardenhetene som mangler.",confirmLabel:"Sett inn",onConfirm:ye}))},[xe(nn,{name:"tray.and.arrow.down",size:16}),b[22]||(b[22]=Nt(" Sett inn standardenheter ",-1))]),k("form",{class:"add-form",onSubmit:ln(Ge,["prevent"])},[b[29]||(b[29]=k("h3",null,"Ny enhet",-1)),k("div",xS,[b[23]||(b[23]=k("label",{for:"new-name"},"Navn",-1)),et(k("input",{id:"new-name","onUpdate:modelValue":b[9]||(b[9]=D=>Z.value=D),class:"input",placeholder:"F.eks. PC 4",required:""},null,512),[[bt,Z.value]])]),k("div",MS,[b[26]||(b[26]=k("label",null,"Type",-1)),k("div",LS,[k("button",{type:"button",class:We(["type-btn",{active:w.value==="pc"}]),onClick:b[10]||(b[10]=D=>w.value="pc")},[xe(nn,{name:"desktopcomputer",size:18}),b[24]||(b[24]=Nt(" PC ",-1))],2),k("button",{type:"button",class:We(["type-btn",{active:w.value==="playstation"}]),onClick:b[11]||(b[11]=D=>w.value="playstation")},[xe(nn,{name:"gamecontroller",size:18}),b[25]||(b[25]=Nt(" PlayStation ",-1))],2)])]),k("div",FS,[k("label",US,Ie(w.value==="playstation"?"Tilbehør":"Tastatur"),1),et(k("input",{id:"new-keyboard","onUpdate:modelValue":b[12]||(b[12]=D=>_.value=D),class:"input",placeholder:w.value==="playstation"?"F.eks. Kontroller x2, ladestasjon":"F.eks. Tastatur 4"},null,8,BS),[[bt,_.value]])]),w.value==="pc"?(ee(),se("div",$S,[b[27]||(b[27]=k("label",{for:"new-mouse"},"Mus",-1)),et(k("input",{id:"new-mouse","onUpdate:modelValue":b[13]||(b[13]=D=>g.value=D),class:"input",placeholder:"F.eks. Mus 4"},null,512),[[bt,g.value]])])):Ve("",!0),w.value==="pc"?(ee(),se("div",jS,[b[28]||(b[28]=k("label",{for:"new-accessories"},"Annet tilbehør",-1)),et(k("input",{id:"new-accessories","onUpdate:modelValue":b[14]||(b[14]=D=>A.value=D),class:"input",placeholder:"F.eks. Headset"},null,512),[[bt,A.value]])])):Ve("",!0),b[30]||(b[30]=k("button",{type:"submit",class:"btn-submit"},"Legg til",-1))],32)],512),[[_l,M.value==="manage"]])])]),xe(tS,{show:F.value!==null,title:((q=F.value)==null?void 0:q.title)??"",message:($=F.value)==null?void 0:$.message,"confirm-label":((B=F.value)==null?void 0:B.confirmLabel)??"OK",danger:(Y=F.value)==null?void 0:Y.danger,onConfirm:_n,onClose:Qe},null,8,["show","title","message","confirm-label","danger"])],64)}}}),HS=Rs(qS,[["__scopeId","data-v-51ea315a"]]),WS={id:"toast-container"},KS={key:0,id:"loading-overlay"},zS=Mr({__name:"App",setup(t){const e=me("student"),n=me([]);let r=0;function s(o,l="info"){const c=++r;n.value.push({id:c,message:o,type:l}),setTimeout(()=>{const h=n.value.findIndex(d=>d.id===c);h!==-1&&n.value.splice(h,1)},3e3)}bo("showToast",s),bo("currentView",e);const i=me(!1);return bo("loading",i),(o,l)=>(ee(),se(Ne,null,[k("div",WS,[(ee(!0),se(Ne,null,Rr(n.value,c=>(ee(),se("div",{key:c.id,class:We(["toast",c.type])},Ie(c.message),3))),128))]),i.value?(ee(),se("div",KS,[...l[0]||(l[0]=[k("div",{class:"loader-ring"},null,-1),k("p",null,"Laster...",-1)])])):Ve("",!0),e.value==="student"?(ee(),Yt(xR,{key:1})):e.value==="login"?(ee(),Yt(WR,{key:2})):e.value==="admin"?(ee(),Yt(HS,{key:3})):Ve("",!0)],64))}});sE(zS).mount("#app");

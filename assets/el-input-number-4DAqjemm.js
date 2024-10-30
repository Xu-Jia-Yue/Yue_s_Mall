import{a4 as W,A as ce,au as de,B as f,av as me,aw as E,d as ee,O as pe,N as be,r as fe,$ as ve,ax as Ne,D as N,a1 as A,ay as Ve,az as he,E as Ie,o as Ee,aA as ye,aB as we,a as v,c as M,v as j,m as t,P as z,aC as P,q,e as K,w as H,j as F,aD as ge,aE as _e,R as Q,V as J,aF as Se,aG as Ae,Q as O,Y as Pe,K as Fe,a2 as Te}from"./index-B75pHzMF.js";import{E as Ce}from"./el-input-f3cQYkP_.js";import{C as ne,I as T,U as I,t as De,d as X}from"./event-BE20p1dL.js";const Be=100,ke=600,Z={beforeMount(l,V){const i=V.value,{interval:a=Be,delay:y=ke}=W(i)?{}:i;let c,m;const u=()=>W(i)?i():i.handler(),p=()=>{m&&(clearTimeout(m),m=void 0),c&&(clearInterval(c),c=void 0)};l.addEventListener("mousedown",w=>{w.button===0&&(p(),u(),document.addEventListener("mouseup",()=>p(),{once:!0}),m=setTimeout(()=>{c=setInterval(()=>{u()},a)},y))})}},xe=ce({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:de,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:l=>l===null||f(l)||["min","max"].includes(l),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:l=>l>=0&&l===Number.parseInt(`${l}`,10)},validateEvent:{type:Boolean,default:!0},...me(["ariaLabel"])}),Le={[ne]:(l,V)=>V!==l,blur:l=>l instanceof FocusEvent,focus:l=>l instanceof FocusEvent,[T]:l=>f(l)||E(l),[I]:l=>f(l)||E(l)},Me=["aria-label","onKeydown"],ze=["aria-label","onKeydown"],Ke=ee({name:"ElInputNumber"}),Oe=ee({...Ke,props:xe,emits:Le,setup(l,{expose:V,emit:i}){const a=l,{t:y}=pe(),c=be("input-number"),m=fe(),u=ve({currentValue:a.modelValue,userInput:null}),{formItem:p}=Ne(),w=N(()=>f(a.modelValue)&&a.modelValue<=a.min),R=N(()=>f(a.modelValue)&&a.modelValue>=a.max),te=N(()=>{const e=$(a.step);return A(a.precision)?Math.max($(a.modelValue),e):(e>a.precision,a.precision)}),C=N(()=>a.controls&&a.controlsPosition==="right"),U=Ve(),h=he(),D=N(()=>{if(u.userInput!==null)return u.userInput;let e=u.currentValue;if(E(e))return"";if(f(e)){if(Number.isNaN(e))return"";A(a.precision)||(e=e.toFixed(a.precision))}return e}),B=(e,n)=>{if(A(n)&&(n=te.value),n===0)return Math.round(e);let r=String(e);const o=r.indexOf(".");if(o===-1||!r.replace(".","").split("")[o+n])return e;const _=r.length;return r.charAt(_-1)==="5"&&(r=`${r.slice(0,Math.max(0,_-1))}6`),Number.parseFloat(Number(r).toFixed(n))},$=e=>{if(E(e))return 0;const n=e.toString(),r=n.indexOf(".");let o=0;return r!==-1&&(o=n.length-r-1),o},Y=(e,n=1)=>f(e)?B(e+a.step*n):u.currentValue,k=()=>{if(a.readonly||h.value||R.value)return;const e=Number(D.value)||0,n=Y(e);g(n),i(T,u.currentValue),L()},x=()=>{if(a.readonly||h.value||w.value)return;const e=Number(D.value)||0,n=Y(e,-1);g(n),i(T,u.currentValue),L()},G=(e,n)=>{const{max:r,min:o,step:s,precision:b,stepStrictly:_,valueOnClear:S}=a;r<o&&De("InputNumber","min should not be greater than max.");let d=Number(e);if(E(e)||Number.isNaN(d))return null;if(e===""){if(S===null)return null;d=Fe(S)?{min:o,max:r}[S]:S}return _&&(d=B(Math.round(d/s)*s,b)),A(b)||(d=B(d,b)),(d>r||d<o)&&(d=d>r?r:o,n&&i(I,d)),d},g=(e,n=!0)=>{var r;const o=u.currentValue,s=G(e);if(!n){i(I,s);return}o===s&&e||(u.userInput=null,i(I,s),o!==s&&i(ne,s,o),a.validateEvent&&((r=p==null?void 0:p.validate)==null||r.call(p,"change").catch(b=>X())),u.currentValue=s)},ae=e=>{u.userInput=e;const n=e===""?null:Number(e);i(T,n),g(n,!1)},re=e=>{const n=e!==""?Number(e):"";(f(n)&&!Number.isNaN(n)||e==="")&&g(n),L(),u.userInput=null},le=()=>{var e,n;(n=(e=m.value)==null?void 0:e.focus)==null||n.call(e)},ue=()=>{var e,n;(n=(e=m.value)==null?void 0:e.blur)==null||n.call(e)},se=e=>{i("focus",e)},oe=e=>{var n;u.userInput=null,i("blur",e),a.validateEvent&&((n=p==null?void 0:p.validate)==null||n.call(p,"blur").catch(r=>X()))},L=()=>{u.currentValue!==a.modelValue&&(u.currentValue=a.modelValue)},ie=e=>{document.activeElement===e.target&&e.preventDefault()};return Ie(()=>a.modelValue,(e,n)=>{const r=G(e,!0);u.userInput===null&&r!==n&&(u.currentValue=r)},{immediate:!0}),Ee(()=>{var e;const{min:n,max:r,modelValue:o}=a,s=(e=m.value)==null?void 0:e.input;if(s.setAttribute("role","spinbutton"),Number.isFinite(r)?s.setAttribute("aria-valuemax",String(r)):s.removeAttribute("aria-valuemax"),Number.isFinite(n)?s.setAttribute("aria-valuemin",String(n)):s.removeAttribute("aria-valuemin"),s.setAttribute("aria-valuenow",u.currentValue||u.currentValue===0?String(u.currentValue):""),s.setAttribute("aria-disabled",String(h.value)),!f(o)&&o!=null){let b=Number(o);Number.isNaN(b)&&(b=null),i(I,b)}s.addEventListener("wheel",ie,{passive:!1})}),ye(()=>{var e,n;const r=(e=m.value)==null?void 0:e.input;r==null||r.setAttribute("aria-valuenow",`${(n=u.currentValue)!=null?n:""}`)}),we({from:"label",replacement:"aria-label",version:"2.8.0",scope:"el-input-number",ref:"https://element-plus.org/en-US/component/input-number.html"},N(()=>!!a.label)),V({focus:le,blur:ue}),(e,n)=>(v(),M("div",{class:z([t(c).b(),t(c).m(t(U)),t(c).is("disabled",t(h)),t(c).is("without-controls",!e.controls),t(c).is("controls-right",t(C))]),onDragstart:n[0]||(n[0]=O(()=>{},["prevent"]))},[e.controls?j((v(),M("span",{key:0,role:"button","aria-label":t(y)("el.inputNumber.decrease"),class:z([t(c).e("decrease"),t(c).is("disabled",t(w))]),onKeydown:P(x,["enter"])},[q(e.$slots,"decrease-icon",{},()=>[K(t(Q),null,{default:H(()=>[t(C)?(v(),F(t(ge),{key:0})):(v(),F(t(_e),{key:1}))]),_:1})])],42,Me)),[[t(Z),x]]):J("v-if",!0),e.controls?j((v(),M("span",{key:1,role:"button","aria-label":t(y)("el.inputNumber.increase"),class:z([t(c).e("increase"),t(c).is("disabled",t(R))]),onKeydown:P(k,["enter"])},[q(e.$slots,"increase-icon",{},()=>[K(t(Q),null,{default:H(()=>[t(C)?(v(),F(t(Se),{key:0})):(v(),F(t(Ae),{key:1}))]),_:1})])],42,ze)),[[t(Z),k]]):J("v-if",!0),K(t(Ce),{id:e.id,ref_key:"input",ref:m,type:"number",step:e.step,"model-value":t(D),placeholder:e.placeholder,readonly:e.readonly,disabled:t(h),size:t(U),max:e.max,min:e.min,name:e.name,"aria-label":e.label||e.ariaLabel,"validate-event":!1,onKeydown:[P(O(k,["prevent"]),["up"]),P(O(x,["prevent"]),["down"])],onBlur:oe,onFocus:se,onInput:ae,onChange:re},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","aria-label","onKeydown"])],34))}});var Re=Pe(Oe,[["__file","input-number.vue"]]);const Ge=Te(Re);export{Ge as E};

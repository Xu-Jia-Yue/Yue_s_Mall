import{A as me,B as Ae,C as Le,r as I,D as A,m as e,E as Y,G as He,o as he,H as Pe,I as Oe,J as Ve,K as ze,L as De,M as ge,d as ee,N as pe,O as Re,a as $,c as R,j as ue,w as x,v as Q,b as P,P as H,Q as q,e as J,R as ce,S as Ge,T as Z,U as ve,V as U,W as Fe,q as ye,X as Ie,F as Ke,g as Ue,t as We,Y as Ce,Z as je,$ as Xe,a0 as Ye,a1 as qe,a2 as Je,a3 as Qe,i as Ze}from"./index-B75pHzMF.js";import{u as xe}from"./index-YlUhqEa-.js";import{f as et}from"./vnode-BUxZuyNd.js";import{t as fe}from"./throttle-BNAXIpr9.js";const tt=me({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0},motionBlur:{type:Boolean,default:!1}}),at={change:(a,O)=>[a,O].every(Ae)},we=Symbol("carouselContextKey"),de=300,st=(a,O,r)=>{const{children:o,addChild:N,removeChild:b}=xe(ge(),"ElCarouselItem"),B=Le(),s=I(-1),C=I(null),E=I(!1),w=I(),k=I(0),S=I(!0),g=I(!0),d=I(!1),G=A(()=>a.arrow!=="never"&&!e(_)),V=A(()=>o.value.some(t=>t.props.label.toString().length>0)),T=A(()=>a.type==="card"),_=A(()=>a.direction==="vertical"),F=A(()=>a.height!=="auto"?{height:a.height}:{height:`${k.value}px`,overflow:"hidden"}),n=fe(t=>{m(t)},de,{trailing:!0}),i=fe(t=>{z(t)},de),p=t=>S.value?s.value<=1?t<=1:t>1:!0;function v(){C.value&&(clearInterval(C.value),C.value=null)}function y(){a.interval<=0||!a.autoplay||C.value||(C.value=setInterval(()=>L(),a.interval))}const L=()=>{g.value||(d.value=!0),g.value=!1,s.value<o.value.length-1?s.value=s.value+1:a.loop&&(s.value=0)};function m(t){if(g.value||(d.value=!0),g.value=!1,ze(t)){const K=o.value.filter(D=>D.props.name===t);K.length>0&&(t=o.value.indexOf(K[0]))}if(t=Number(t),Number.isNaN(t)||t!==Math.floor(t))return;const u=o.value.length,M=s.value;t<0?s.value=a.loop?u-1:0:t>=u?s.value=a.loop?0:u-1:s.value=t,M===s.value&&l(M),le()}function l(t){o.value.forEach((u,M)=>{u.translateItem(M,s.value,t)})}function W(t,u){var M,K,D,j;const X=e(o),re=X.length;if(re===0||!t.states.inStage)return!1;const Ee=u+1,ke=u-1,ie=re-1,Ne=X[ie].states.active,Me=X[0].states.active,Be=(K=(M=X[Ee])==null?void 0:M.states)==null?void 0:K.active,$e=(j=(D=X[ke])==null?void 0:D.states)==null?void 0:j.active;return u===ie&&Me||Be?"left":u===0&&Ne||$e?"right":!1}function te(){E.value=!0,a.pauseOnHover&&v()}function ae(){E.value=!1,y()}function se(){d.value=!1}function f(t){e(_)||o.value.forEach((u,M)=>{t===W(u,M)&&(u.states.hover=!0)})}function c(){e(_)||o.value.forEach(t=>{t.states.hover=!1})}function h(t){t!==s.value&&(g.value||(d.value=!0)),s.value=t}function z(t){a.trigger==="hover"&&t!==s.value&&(s.value=t,g.value||(d.value=!0))}function oe(){m(s.value-1)}function be(){m(s.value+1)}function le(){v(),a.pauseOnHover||y()}function Se(t){a.height==="auto"&&(k.value=t)}function Te(){var t;const u=(t=B.default)==null?void 0:t.call(B);if(!u)return null;const M=et(u),K="ElCarouselItem",D=M.filter(j=>De(j)&&j.type.name===K);return(D==null?void 0:D.length)===2&&a.loop&&!T.value?(S.value=!0,D):(S.value=!1,null)}Y(()=>s.value,(t,u)=>{l(u),S.value&&(t=t%2,u=u%2),u>-1&&O("change",t,u)}),Y(()=>a.autoplay,t=>{t?y():v()}),Y(()=>a.loop,()=>{m(s.value)}),Y(()=>a.interval,()=>{le()});const ne=He();return he(()=>{Y(()=>o.value,()=>{o.value.length>0&&m(a.initialIndex)},{immediate:!0}),ne.value=Pe(w.value,()=>{l()}),y()}),Oe(()=>{v(),w.value&&ne.value&&ne.value.stop()}),Ve(we,{root:w,isCardType:T,isVertical:_,items:o,loop:a.loop,addItem:N,removeItem:b,setActiveItem:m,setContainerHeight:Se}),{root:w,activeIndex:s,arrowDisplay:G,hasLabel:V,hover:E,isCardType:T,isTransitioning:d,items:o,isVertical:_,containerStyle:F,isItemsTwoLength:S,handleButtonEnter:f,handleTransitionEnd:se,handleButtonLeave:c,handleIndicatorClick:h,handleMouseEnter:te,handleMouseLeave:ae,setActiveItem:m,prev:oe,next:be,PlaceholderItem:Te,isTwoLengthShow:p,throttledArrowClick:n,throttledIndicatorHover:i}},ot=["aria-label"],nt=["aria-label"],lt=["onMouseenter","onClick"],rt=["aria-label"],it={key:0},ut={key:3,xmlns:"http://www.w3.org/2000/svg",version:"1.1",style:{display:"none"}},ct=P("defs",null,[P("filter",{id:"elCarouselHorizontal"},[P("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"12,0"})]),P("filter",{id:"elCarouselVertical"},[P("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0,10"})])],-1),vt=[ct],ft="ElCarousel",dt=ee({name:ft}),mt=ee({...dt,props:tt,emits:at,setup(a,{expose:O,emit:r}){const o=a,{root:N,activeIndex:b,arrowDisplay:B,hasLabel:s,hover:C,isCardType:E,items:w,isVertical:k,containerStyle:S,handleButtonEnter:g,handleButtonLeave:d,isTransitioning:G,handleIndicatorClick:V,handleMouseEnter:T,handleMouseLeave:_,handleTransitionEnd:F,setActiveItem:n,prev:i,next:p,PlaceholderItem:v,isTwoLengthShow:y,throttledArrowClick:L,throttledIndicatorHover:m}=st(o,r),l=pe("carousel"),{t:W}=Re(),te=A(()=>{const f=[l.b(),l.m(o.direction)];return e(E)&&f.push(l.m("card")),f}),ae=A(()=>{const f=[l.e("container")];return o.motionBlur&&e(G)&&f.push(e(k)?`${l.namespace.value}-transitioning-vertical`:`${l.namespace.value}-transitioning`),f}),se=A(()=>{const f=[l.e("indicators"),l.em("indicators",o.direction)];return e(s)&&f.push(l.em("indicators","labels")),o.indicatorPosition==="outside"&&f.push(l.em("indicators","outside")),e(k)&&f.push(l.em("indicators","right")),f});return O({setActiveItem:n,prev:i,next:p}),(f,c)=>($(),R("div",{ref_key:"root",ref:N,class:H(e(te)),onMouseenter:c[7]||(c[7]=q((...h)=>e(T)&&e(T)(...h),["stop"])),onMouseleave:c[8]||(c[8]=q((...h)=>e(_)&&e(_)(...h),["stop"]))},[e(B)?($(),ue(ve,{key:0,name:"carousel-arrow-left",persisted:""},{default:x(()=>[Q(P("button",{type:"button",class:H([e(l).e("arrow"),e(l).em("arrow","left")]),"aria-label":e(W)("el.carousel.leftArrow"),onMouseenter:c[0]||(c[0]=h=>e(g)("left")),onMouseleave:c[1]||(c[1]=(...h)=>e(d)&&e(d)(...h)),onClick:c[2]||(c[2]=q(h=>e(L)(e(b)-1),["stop"]))},[J(e(ce),null,{default:x(()=>[J(e(Ge))]),_:1})],42,ot),[[Z,(f.arrow==="always"||e(C))&&(o.loop||e(b)>0)]])]),_:1})):U("v-if",!0),e(B)?($(),ue(ve,{key:1,name:"carousel-arrow-right",persisted:""},{default:x(()=>[Q(P("button",{type:"button",class:H([e(l).e("arrow"),e(l).em("arrow","right")]),"aria-label":e(W)("el.carousel.rightArrow"),onMouseenter:c[3]||(c[3]=h=>e(g)("right")),onMouseleave:c[4]||(c[4]=(...h)=>e(d)&&e(d)(...h)),onClick:c[5]||(c[5]=q(h=>e(L)(e(b)+1),["stop"]))},[J(e(ce),null,{default:x(()=>[J(e(Fe))]),_:1})],42,nt),[[Z,(f.arrow==="always"||e(C))&&(o.loop||e(b)<e(w).length-1)]])]),_:1})):U("v-if",!0),P("div",{class:H(e(ae)),style:Ie(e(S)),onTransitionend:c[6]||(c[6]=(...h)=>e(F)&&e(F)(...h))},[J(e(v)),ye(f.$slots,"default")],38),f.indicatorPosition!=="none"?($(),R("ul",{key:2,class:H(e(se))},[($(!0),R(Ke,null,Ue(e(w),(h,z)=>Q(($(),R("li",{key:z,class:H([e(l).e("indicator"),e(l).em("indicator",f.direction),e(l).is("active",z===e(b))]),onMouseenter:oe=>e(m)(z),onClick:q(oe=>e(V)(z),["stop"])},[P("button",{class:H(e(l).e("button")),"aria-label":e(W)("el.carousel.indicator",{index:z+1})},[e(s)?($(),R("span",it,We(h.props.label),1)):U("v-if",!0)],10,rt)],42,lt)),[[Z,e(y)(z)]])),128))],2)):U("v-if",!0),o.motionBlur?($(),R("svg",ut,vt)):U("v-if",!0)],34))}});var ht=Ce(mt,[["__file","carousel.vue"]]);const gt=me({name:{type:String,default:""},label:{type:[String,Number],default:""}}),pt=(a,O)=>{const r=je(we),o=ge(),N=.83,b=I(),B=I(!1),s=I(0),C=I(1),E=I(!1),w=I(!1),k=I(!1),S=I(!1),{isCardType:g,isVertical:d}=r;function G(n,i,p){const v=p-1,y=i-1,L=i+1,m=p/2;return i===0&&n===v?-1:i===v&&n===0?p:n<y&&i-n>=m?p+1:n>L&&n-i>=m?-2:n}function V(n,i){var p,v;const y=e(d)?((p=r.root.value)==null?void 0:p.offsetHeight)||0:((v=r.root.value)==null?void 0:v.offsetWidth)||0;return k.value?y*((2-N)*(n-i)+1)/4:n<i?-(1+N)*y/4:(3+N)*y/4}function T(n,i,p){const v=r.root.value;return v?((p?v.offsetHeight:v.offsetWidth)||0)*(n-i):0}const _=(n,i,p)=>{var v;const y=e(g),L=(v=r.items.value.length)!=null?v:Number.NaN,m=n===i;!y&&!qe(p)&&(S.value=m||n===p),!m&&L>2&&r.loop&&(n=G(n,i,L));const l=e(d);E.value=m,y?(k.value=Math.round(Math.abs(n-i))<=1,s.value=V(n,i),C.value=e(E)?1:N):s.value=T(n,i,l),w.value=!0,m&&b.value&&r.setContainerHeight(b.value.offsetHeight)};function F(){if(r&&e(g)){const n=r.items.value.findIndex(({uid:i})=>i===o.uid);r.setActiveItem(n)}}return he(()=>{r.addItem({props:a,states:Xe({hover:B,translate:s,scale:C,active:E,ready:w,inStage:k,animating:S}),uid:o.uid,translateItem:_})}),Ye(()=>{r.removeItem(o.uid)}),{carouselItemRef:b,active:E,animating:S,hover:B,inStage:k,isVertical:d,translate:s,isCardType:g,scale:C,ready:w,handleItemClick:F}},yt=ee({name:"ElCarouselItem"}),It=ee({...yt,props:gt,setup(a){const O=a,r=pe("carousel"),{carouselItemRef:o,active:N,animating:b,hover:B,inStage:s,isVertical:C,translate:E,isCardType:w,scale:k,ready:S,handleItemClick:g}=pt(O),d=A(()=>[r.e("item"),r.is("active",N.value),r.is("in-stage",s.value),r.is("hover",B.value),r.is("animating",b.value),{[r.em("item","card")]:w.value,[r.em("item","card-vertical")]:w.value&&C.value}]),G=A(()=>{const T=`${`translate${e(C)?"Y":"X"}`}(${e(E)}px)`,_=`scale(${e(k)})`;return{transform:[T,_].join(" ")}});return(V,T)=>Q(($(),R("div",{ref_key:"carouselItemRef",ref:o,class:H(e(d)),style:Ie(e(G)),onClick:T[0]||(T[0]=(..._)=>e(g)&&e(g)(..._))},[e(w)?Q(($(),R("div",{key:0,class:H(e(r).e("mask"))},null,2)),[[Z,!e(N)]]):U("v-if",!0),ye(V.$slots,"default")],6)),[[Z,e(S)]])}});var _e=Ce(It,[["__file","carousel-item.vue"]]);const St=Je(ht,{CarouselItem:_e}),Tt=Qe(_e),Et=(a=1)=>Ze.get("/home/banner",{params:{distributionSite:a}});export{St as E,Tt as a,Et as g};

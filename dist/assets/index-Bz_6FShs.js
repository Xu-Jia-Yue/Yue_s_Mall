import{i as T,d as L,r as g,o as H,l as z,a as d,c as r,b as e,t as _,F as x,g as I,u as O,j as Y,w as $,_ as S,a9 as F,E as U,v as w,T as M,m as N,X as j,P as D,aa as q,ab as J,y as K,e as m,n as f,V as A,ac as X,ad as Q,p as W,f as Z}from"./index-B75pHzMF.js";import{v as ee}from"./el-loading-Dh1b9LRe.js";import"./el-input-f3cQYkP_.js";import{E as se}from"./el-input-number-4DAqjemm.js";import{E as te,a as oe}from"./el-breadcrumb-item-BfaUJm9H.js";import"./event-BE20p1dL.js";const ae=t=>T.get("/goods",{params:{id:t}}),ne=t=>T.get("/goods/hot",{params:t}),le={class:"goods-hot"},ce=["src"],ie={class:"name ellipsis"},de={class:"desc ellipsis"},ue={class:"price"},re=L({__name:"DetailHot",props:{type:{type:Number}},setup(t){const n=O(),c=t,s=g([]),u=async o=>{const{result:l}=await ne({id:o,type:c.type,limit:3});s.value=l};return H(()=>{u(n.params.id)}),(o,l)=>{const a=z("RouterLink");return d(),r("div",le,[e("h3",null,_(c.type===1?"24小时热销榜":"周热销榜"),1),(d(!0),r(x,null,I(s.value,i=>(d(),Y(a,{class:"goods-item",to:`/detail/${i.id}`,key:i.id},{default:$(()=>[e("img",{src:i.picture,alt:""},null,8,ce),e("p",ie,_(i.name),1),e("p",de,_(i.desc),1),e("p",ue,"¥"+_(i.price),1)]),_:2},1032,["to"]))),128))])}}}),G=S(re,[["__scopeId","data-v-3cacd57d"]]),_e={class:"goods-image"},pe=["src"],ve={class:"small"},me=["onMouseenter"],ge=["src"],he=L({__name:"DetailImgs",props:["imgList"],setup(t){const n=t,c=g(0),s=y=>{c.value=y},u=g(null),{elementX:o,elementY:l,isOutside:a}=F(u),i=g(0),v=g(0),p=g(0),b=g(0);return U([o,l,a],()=>{a.value||(o.value>100&&o.value<300&&(i.value=o.value-100),l.value>100&&l.value<300&&(v.value=l.value-100),o.value>300&&(i.value=200),o.value<100&&(i.value=0),l.value>300&&(v.value=200),l.value<100&&(v.value=0),p.value=-i.value*2,b.value=-v.value*2)}),(y,V)=>(d(),r("div",_e,[e("div",{class:"middle",ref_key:"target",ref:u},[e("img",{src:n.imgList[c.value],alt:""},null,8,pe),w(e("div",{class:"layer",style:j({left:`${i.value}px`,top:`${v.value}px`})},null,4),[[M,!N(a)]])],512),e("ul",ve,[(d(!0),r(x,null,I(n.imgList,(C,E)=>(d(),r("li",{key:E,onMouseenter:B=>s(E),class:D({active:E===c.value})},[e("img",{src:C,alt:""},null,8,ge)],42,me))),128))]),w(e("div",{class:"large",style:j([{backgroundImage:`url(${n.imgList[0]})`,backgroundPositionX:`${p.value}px`,backgroundPositionY:`${b.value}px`}])},null,4),[[M,!N(a)]])]))}}),fe=S(he,[["__scopeId","data-v-f66f7ac9"]]);function ke(t){const n=[],c=2**t.length;for(let s=0;s<c;s+=1){const u=[];for(let o=0;o<t.length;o+=1)s&1<<o&&u.push(t[o]);n.push(u)}return n}const P="★",be=t=>{const n={};return t&&t.length>0&&t.forEach(c=>{if(c.inventory){const s=c.specs.map(o=>o.valueName);ke(s).forEach(o=>{const l=o.join(P);n[l]||(n[l]=[]),n[l].push(c.id)})}}),n};function ye(t,n){t&&t.length>0&&t.forEach(c=>{c.values.forEach(s=>{s.disabled=!n[s.name]})})}const R=t=>{const n=[];return t.forEach((c,s)=>{const u=c.values.find(o=>o.selected);u?n[s]=u.name:n[s]=void 0}),n},$e=(t,n)=>{t.forEach((c,s)=>{const u=R(t);c.values.forEach(o=>{if(!o.selected){u[s]=o.name;const l=u.filter(a=>a).join(P);o.disabled=!n[l]}})})},xe={name:"XtxGoodSku",props:{goods:{type:Object,default:()=>({specs:[],skus:[]})}},emits:["change"],setup(t,{emit:n}){let c={};return q(()=>{c=be(t.goods.skus),ye(t.goods.specs,c)}),{clickSpecs:(u,o)=>{if(o.disabled)return!1;o.selected?o.selected=!1:(u.values.forEach(a=>{a.selected=!1}),o.selected=!0),$e(t.goods.specs,c);const l=R(t.goods.specs).filter(a=>a);if(l.length===t.goods.specs.length){const a=c[l.join(P)][0],i=t.goods.skus.find(v=>v.id===a);n("change",{skuId:i.id,price:i.price,oldPrice:i.oldPrice,inventory:i.inventory,specsText:i.specs.reduce((v,p)=>`${v} ${p.name}：${p.valueName}`,"").trim()})}else n("change",{})}}}},Ie={class:"goods-sku"},Ee=["onClick","src"],Se=["onClick"];function Ce(t,n,c,s,u,o){return d(),r("div",Ie,[(d(!0),r(x,null,I(c.goods.specs,l=>(d(),r("dl",{key:l.id},[e("dt",null,_(l.name),1),e("dd",null,[(d(!0),r(x,null,I(l.values,a=>(d(),r(x,{key:a.name},[a.picture?(d(),r("img",{key:0,class:D({selected:a.selected,disabled:a.disabled}),onClick:i=>s.clickSpecs(l,a),src:a.picture},null,10,Ee)):(d(),r("span",{key:1,class:D({selected:a.selected,disabled:a.disabled}),onClick:i=>s.clickSpecs(l,a)},_(a.name),11,Se))],64))),128))])]))),128))])}const we=S(xe,[["render",Ce],["__scopeId","data-v-a19755b3"]]),h=t=>(W("data-v-94110874"),t=t(),Z(),t),De={key:0,class:"xtx-goods-page"},Le={key:0,class:"container"},Pe={class:"bread-container"},Ve={class:"info-container"},Be={class:"goods-info"},Me={class:"media"},Ne={class:"goods-sales"},je=h(()=>e("p",null,"销量人气",-1)),Ae=h(()=>e("p",null,[e("i",{class:"iconfont icon-task-filling"}),f("销量人气")],-1)),Xe=h(()=>e("p",null,"商品评价",-1)),Ge=h(()=>e("p",null,[e("i",{class:"iconfont icon-comment-filling"}),f("查看评价")],-1)),Te=h(()=>e("p",null,"收藏人气",-1)),He=h(()=>e("p",null,[e("i",{class:"iconfont icon-favorite-filling"}),f("收藏商品")],-1)),Oe=h(()=>e("p",null,"品牌信息",-1)),Re={key:0},ze=h(()=>e("p",null,[e("i",{class:"iconfont icon-dynamic-filling"}),f("品牌主页")],-1)),Ye={class:"spec"},Fe={class:"g-name"},Ue={class:"g-desc"},qe={class:"g-price"},Je=h(()=>e("div",{class:"g-service"},[e("dl",null,[e("dt",null,"促销"),e("dd",null,"12月好物放送，App领券购买直降120元")]),e("dl",null,[e("dt",null,"服务"),e("dd",null,[e("span",null,"无忧退货"),e("span",null,"快速退款"),e("span",null,"免费包邮"),e("a",{href:"javascript:;"},"了解详情")])])],-1)),Ke={class:"goods-footer"},Qe={class:"goods-article"},We={class:"goods-tabs"},Ze=h(()=>e("nav",null,[e("a",null,"商品详情")],-1)),es={class:"goods-detail"},ss={class:"attrs"},ts={class:"dt"},os={class:"dd"},as=["src"],ns={class:"goods-aside"},ls={key:1},cs=L({__name:"index",setup(t){const n=g(!1),c=O(),s=g({}),u=async p=>{n.value=!0;const{result:b}=await ae(p);s.value=b,n.value=!1},o=J(),l=g(1),a=g({}),i=p=>{a.value=p},v=()=>{a.value.skuId?(o.addCart({id:s.value.id,name:s.value.name,picture:s.value.mainPictures[0],price:s.value.price,count:l.value,skuId:a.value.skuId,attrsText:a.value.specText,selected:!0}),X({type:"success",message:"添加成功"})):X({type:"warning",message:"请选择规格"})};return H(()=>{u(c.params.id)}),K(p=>{u(p.params.id)}),(p,b)=>{const y=te,V=oe,C=se,E=Q,B=ee;return s.value?w((d(),r("div",De,[s.value.details?(d(),r("div",Le,[e("div",Pe,[m(V,{separator:">"},{default:$(()=>[m(y,{to:{path:"/"}},{default:$(()=>[f("首页")]),_:1}),m(y,{to:{path:`/category/${s.value.categories[1].id}`}},{default:$(()=>[f(_(s.value.categories[1].name),1)]),_:1},8,["to"]),m(y,{to:{path:`/category/sub/${s.value.categories[0].id}`}},{default:$(()=>[f(_(s.value.categories[0].name),1)]),_:1},8,["to"]),m(y,null,{default:$(()=>[f(_(s.value.name),1)]),_:1})]),_:1})]),e("div",Ve,[e("div",null,[e("div",Be,[e("div",Me,[m(fe,{imgList:s.value.mainPictures},null,8,["imgList"]),e("ul",Ne,[e("li",null,[je,e("p",null,_(s.value.salesCount),1),Ae]),e("li",null,[Xe,e("p",null,_(s.value.commentCount)+"+",1),Ge]),e("li",null,[Te,e("p",null,_(s.value.collectCount)+"+",1),He]),e("li",null,[Oe,s.value.brand?(d(),r("p",Re,_(s.value.brand.name),1)):A("",!0),ze])])]),e("div",Ye,[e("p",Fe,_(s.value.name),1),e("p",Ue,_(s.value.desc),1),e("p",qe,[e("span",null,_(s.value.oldPrice),1),e("span",null,_(s.value.price),1)]),Je,m(we,{goods:s.value,onChange:i},null,8,["goods"]),m(C,{modelValue:l.value,"onUpdate:modelValue":b[0]||(b[0]=k=>l.value=k),min:1},null,8,["modelValue"]),e("div",null,[m(E,{size:"large",class:"btn",onClick:v},{default:$(()=>[f(" 加入购物车 ")]),_:1})])])]),e("div",Ke,[e("div",Qe,[e("div",We,[Ze,e("div",es,[e("ul",ss,[(d(!0),r(x,null,I(s.value.details.properties,k=>(d(),r("li",{key:k.value},[e("span",ts,_(k.name),1),e("span",os,_(k.value),1)]))),128))]),(d(!0),r(x,null,I(s.value.details.pictures,k=>(d(),r("img",{src:k,key:k,alt:""},null,8,as))),128))])])]),e("div",ns,[m(G,{type:1}),m(G,{type:2})])])])])])):A("",!0)])),[[B,n.value]]):(d(),r("div",ls,"加载中..."))}}}),vs=S(cs,[["__scopeId","data-v-94110874"]]);export{vs as default};

import{_ as p}from"./Djecwb_v.js";import{u as h}from"./BqUvtMHT.js";import{q as u}from"./DEZhdWR8.js";import{f as m,h as w,c as o,a as t,F as f,r as y,i as v,o as r,t as s,b as d,w as _,d as n}from"./DiyP6pou.js";import"./BpUWW4O-.js";const x={class:"blog-outer"},b={class:"blog-wrapper"},g=t("div",{class:"blog-header"},[t("h1",null,"QAComet White Papers"),t("h2",{class:"subheader"},"Stay up to date with QA's impact on the startup world with our latest research.")],-1),k={class:"content-wrapper"},C={class:"blog-post-wrapper"},A={class:"date-wrapper"},D={class:"month"},N={class:"day"},B={class:"year"},V={class:"description-wrapper"},T=m({__name:"index",async setup(q){let a,i;const{data:l}=([a,i]=w(()=>h("white-papers",()=>u("/white-papers").only(["title","link","created","shortDescription"]).sort({"created.number":-1,$numeric:!0}).find())),a=await a,i(),a);return(F,L)=>{const c=p;return r(),o("div",x,[t("div",b,[g,t("div",k,[(r(!0),o(f,null,y(v(l),e=>(r(),o("div",C,[t("div",A,[t("div",D,s(e.created.month),1),t("div",N,s(e.created.day),1),t("div",B,s(e.created.year),1)]),t("div",V,[t("h3",null,[d(c,{to:e.link},{default:_(()=>[n(s(e.title),1)]),_:2},1032,["to"])]),t("p",null,[n(s(e.shortDescription)+" ",1),d(c,{class:"read",to:e.link},{default:_(()=>[n("Continue Reading")]),_:2},1032,["to"])])])]))),256))])])])}}});export{T as default};

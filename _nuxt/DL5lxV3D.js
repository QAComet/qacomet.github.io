import{_ as v}from"./DCzuR2_n.js";import w from"./Zy_XdWAb.js";import{f as q,u as C,g as N,o as s,c as o,h as t,a,b as l,w as f,d as p,F as S,r as x,t as r,s as n,v as B}from"./U2BLDky7.js";import{u as V}from"./KvzU8DeL.js";import{q as E}from"./wCY1haoS.js";const H={class:"blog-outer"},I={key:0,class:"blog-wrapper"},$={class:"blog-meta"},j={key:0,class:"blog-breadcrumbs"},A={class:"crumb"},D=a("span",{class:"sep"},"›",-1),F={class:"crumb"},L={key:0,class:"sep"},P={key:0,class:"blog-header"},R={key:0},T=["href"],O={key:1},z={key:2},G={key:3,class:"blog-created-date"},J={key:0},Z=q({__name:"BlogPage",props:{path:{type:String,required:!0},link:{type:String,required:!1},formId:{type:String,require:!1}},async setup(i){let c,d;const{path:u,link:K,formId:_}=i;C({script:[{children:"(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[]).push(arguments);},l=d.createElement(e),l.async=1,l.src=u,n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})(window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');ml('account','909122');"}]});function b(){_&&ml("show",_,!0)}const{data:e}=([c,d]=N(()=>V("blog-post-"+u,()=>E(u).findOne(),"$fqRr3791H4")),c=await c,d(),c);return(g,M)=>{const m=v,y=w;return s(),o("div",H,[t(e)?(s(),o("div",I,[a("div",$,[t(e).breadcrumbs?(s(),o("div",j,[a("div",A,[l(m,{to:"/"},{default:f(()=>[p("Home")]),_:1}),D]),(s(!0),o(S,null,x(t(e).breadcrumbs,(h,k)=>(s(),o("div",F,[l(m,{to:h.path},{default:f(()=>[p(r(h.name),1)]),_:2},1032,["to"]),k!=t(e).breadcrumbs.length-1?(s(),o("span",L,"›")):n("",!0)]))),256))])):n("",!0),i.formId?(s(),o("div",{key:1,class:"blog-subscribe",onClick:b},"Subscribe")):n("",!0)]),t(e)&&(t(e).title||t(e).subtitle)?(s(),o("div",P,[t(e).link?(s(),o("h1",R,[a("a",{href:t(e).link},r(t(e).title),9,T)])):(s(),o("h1",O,r(t(e).title),1)),t(e).subtitle?(s(),o("h3",z,r(t(e).subtitle),1)):n("",!0),t(e).created?(s(),o("div",G,r(t(e).created.string),1)):n("",!0)])):n("",!0),a("section",null,[i.path?(s(),o("div",J,[l(y,{value:t(e)},null,8,["value"])])):n("",!0),B(g.$slots,"default")])])):n("",!0)])}}});export{Z as _};

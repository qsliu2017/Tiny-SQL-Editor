import{d as h,o as r,c,a as d,t as m,F as p,r as f,b as o,e as y,w as E,f as v,g,E as x,h as S,i as b,s as q,S as L,j as N,u as w,k}from"./vendor.a2170b55.js";const O=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&u(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}};O();var T=(t,n)=>{const l=t.__vccOpts||t;for(const[u,e]of n)l[u]=e;return l};const A={key:0,class:"error"},C={key:1,class:"output"},R=o("    "),V=o(`
      `),B=o(`
        `),I=o(`
          `),F=o(`
        `),j=o(`
      `),D=o(`
      `),J=o(`
        `),M=o(`
          `),$=o(`
        `),K=o(`
      `),P=o(`
    `),U=o(`
  `),Q=h({props:{result:null},setup(t){const n=e=>e instanceof Error,l=e=>e,u=e=>e;return(e,s)=>n(t.result)?(r(),c("div",A,[d("p",null,m(l(t.result).message),1)])):(r(),c("pre",C,[R,(r(!0),c(p,null,f(u(t.result),a=>(r(),c("table",null,[V,d("thead",null,[B,d("tr",null,[I,(r(!0),c(p,null,f(a.columns,i=>(r(),c("td",null,m(i),1))),256)),F]),j]),D,d("tbody",null,[J,(r(!0),c(p,null,f(a.values,i=>(r(),c("tr",null,[M,(r(!0),c(p,null,f(i,_=>(r(),c("td",null,m(_),1))),256)),$]))),256)),K]),P]))),256)),U]))}});var z=T(Q,[["__scopeId","data-v-ba9aa828"]]);const G=h({props:{sqlExecutor:null},setup(t){const n=t,l=y();let u;const e={beforeMount(i){u=new x({state:S.create({extensions:[b,q({dialect:L,upperCaseKeywords:!0})],doc:`CREATE TABLE hello (a int, b char);
INSERT INTO hello VALUES (0, 'hello');
INSERT INTO hello VALUES (1, 'world');
SELECT * FROM hello;`}),parent:i})}},s=()=>u.state.doc.toJSON().reduce((i,_)=>i+_,""),a=()=>{l.value=n.sqlExecutor(s())};return(i,_)=>(r(),c("div",null,[E(d("div",null,null,512),[[e,!0]]),d("button",{onClick:a},"Execute"),l.value?(r(),v(z,{key:0,result:l.value},null,8,["result"])):g("",!0)]))}}),H=await N({locateFile:t=>`https://sql.js.org/dist/${t}`}),W=new H.Database,X=t=>{try{return W.exec(t)}catch(n){return n}};const Y=h({setup(t){return(n,l)=>(r(),v(G,{"sql-executor":w(X)},null,8,["sql-executor"]))}});k(Y).mount("#app");

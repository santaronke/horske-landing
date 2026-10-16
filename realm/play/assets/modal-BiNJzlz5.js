import{m as ct,c as mt}from"./index-Dknj_YLb.js";import{J as I}from"./joust-2BfEs9QO.js";import{l as ft,S as g,q as m,A as E,s as W,u as q}from"./econ-Deg9OsSu.js";const gt=`/* The village's modals (src/modal/modal.js). Paper: art/ui/paper.webp, a tileable parchment made with SVG filters\r
   (fractal noise lit as a bump map for the fibres, fine grain, slow stains; scratchpad paper/gen.html), aged at the\r
   edges with inset shadows. */\r
#wmodal{--ink:#2b1a0d;--paper:#efdcb3;--card:rgba(255,249,234,.62);--navy:#1d3778;--navy2:#132a62;--gold1:#ffd85a;--gold2:#e0a91f;--red:#b8322a;--green:#3a8a43;\r
  --gothic:"Grenze Gotisch",Georgia,serif;--ui:Gelasio,Georgia,"Times New Roman",serif;\r
  position:fixed;inset:0;z-index:50;font-family:var(--ui);color:var(--ink);-webkit-tap-highlight-color:transparent}\r
#wmodal *{box-sizing:border-box}\r
:where(#wmodal) button{font:inherit;color:inherit;cursor:pointer} /* :where keeps the reset weaker than the component rules */\r
.mback{position:absolute;inset:0} /* the village's box draws the dim, over the screen's safe areas too (build_realm.py) */\r
.mpanel{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:min(1080px,calc(100% - 40px));height:min(720px,calc(100% - 40px));display:flex;flex-direction:column;\r
  background:var(--paper) url(art/ui/paper.webp) center/1024px;border:3px solid var(--ink);box-shadow:0 10px 0 var(--ink),inset 0 0 70px rgba(122,78,28,.34),inset 0 0 14px rgba(122,78,28,.38);\r
  animation:min .24s cubic-bezier(.16,1,.3,1)}\r
.mpanel::before{content:"";position:absolute;inset:7px;border:2px solid #c98c1d;pointer-events:none}\r
@keyframes min{from{opacity:0;transform:translate(-50%,-48%) scale(.97)}}\r
.mhead{position:relative;z-index:4;display:flex;align-items:center;flex-wrap:wrap;gap:10px 16px;padding:16px 22px 12px}\r
.mhead h1{margin:0;font-family:var(--gothic);font-weight:900;font-size:36px;line-height:1;color:var(--navy)}\r
.mtabs{display:flex;gap:3px;padding:3px;border:2px solid var(--ink);border-radius:10px;background:rgba(255,248,230,.5)}\r
.mtabs button{border:0;background:none;padding:6px 16px;border-radius:7px;font-weight:700;font-size:16px;color:#5a4630}\r
.mtabs button.on{background:var(--navy);color:#ffe08a}\r
.mlink{display:inline-flex;align-items:center;gap:6px;padding:5px 12px;border:2px solid var(--navy);border-radius:999px;background:rgba(255,248,230,.6);font-weight:700;font-size:14px;color:var(--navy);text-decoration:none;white-space:nowrap}\r
.mlink:hover{background:var(--navy);color:#ffe08a}\r
.vh{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}\r
.mchip{margin-left:auto;display:inline-flex;align-items:center;gap:8px;padding:5px 14px 5px 6px;border:2px solid var(--ink);border-radius:999px;background:#fff8e6;font-weight:700;font-size:17px;white-space:nowrap}\r
.mchip small{font-weight:500;font-size:12px;color:#7a6446}\r
.coin{display:inline-block;width:22px;height:22px;flex:none;border-radius:50%;background:radial-gradient(circle at 35% 35%,#ffe9a0,#e0a91f 60%,#8a5f10);box-shadow:0 0 0 2px var(--ink);vertical-align:-5px}\r
.mcard .coin,.big .coin{width:14px;height:14px;margin-right:4px;vertical-align:-2px;box-shadow:0 0 0 1.5px var(--ink)}\r
.big .coin{width:24px;height:24px;vertical-align:-3px}\r
.flame{display:inline-block;width:18px;height:22px;background:radial-gradient(ellipse at 50% 70%,#ffe08a 0 25%,#f08a24 45%,#c8312a 70%,transparent 72%);border-radius:50% 50% 45% 45%/60% 60% 40% 40%}\r
.mx{width:40px;height:40px;border:0;background:none;font-size:32px;line-height:1;padding:0}\r
.mtoast{position:absolute;left:50%;bottom:26px;transform:translateX(-50%);z-index:5;pointer-events:none;max-width:min(560px,90%);padding:9px 16px;border:2px solid var(--ink);border-radius:10px;background:#fff3c8;font-weight:700;font-size:15px;text-align:center;box-shadow:0 4px 0 var(--ink);animation:tin .2s ease-out}\r
.mtoast.bad{background:#ffd9d2}\r
@keyframes tin{from{opacity:0;transform:translate(-50%,6px)}}\r
.mbody{position:relative;flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) 330px;gap:18px;padding:2px 22px 22px}\r
.mleft{display:flex;flex-direction:column;min-height:0}\r
.mlead{margin:0 0 10px;font-size:14px;color:#6a5236}\r
.mfilters{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 4px}\r
.mf{padding:5px 12px;border-radius:999px;border:2px solid var(--ink);background:#fff8e6;font-size:14px;font-weight:700}\r
.mf small{margin-left:5px;font-weight:500;opacity:.7}\r
.mf.on{background:var(--ink);color:#f6ead0}\r
.mgrid{flex:1;min-height:0;overflow:auto;display:grid;grid-template-columns:repeat(auto-fill,minmax(116px,1fr));align-content:start;gap:16px 12px;padding:12px 10px 10px;margin:0 -10px;scrollbar-width:thin;scrollbar-color:#a8834a transparent}\r
.mcard{position:relative;display:flex;flex-direction:column;align-items:stretch;border:3px solid var(--ink);border-radius:10px;background:var(--card);padding:6px 6px 8px;text-align:center;transition:transform .12s}\r
.mcard:hover{transform:translateY(-2px)}\r
.mcard.sel{outline:4px solid var(--navy);outline-offset:2px}\r
.mcard .pic{position:relative;aspect-ratio:1;border-radius:6px;background:#c9d6e8 center/cover no-repeat;border:2px solid var(--rar,#8aa1c2)}\r
.mcard.lk .pic{filter:grayscale(1) brightness(.62)}\r
.mcard .lock{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);padding:3px 9px;border-radius:999px;background:rgba(20,15,10,.86);color:#f6ead0;font-size:12px;font-weight:700;white-space:nowrap}\r
.mcard .cnt{position:absolute;left:4px;bottom:4px;padding:1px 6px;border-radius:999px;background:rgba(20,15,10,.8);color:#fff;font-size:11px;font-weight:700}\r
.mcard .nm{display:block;margin-top:6px;font-size:13px;font-weight:700;line-height:1.15;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\r
.mcard .sub{display:block;font-size:12px;color:#7a6446;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\r
.badge{position:absolute;top:-9px;right:-9px;min-width:30px;height:24px;padding:0 6px;border-radius:999px;border:2px solid var(--ink);background:var(--gold1);font-size:13px;font-weight:700;line-height:20px}\r
.tag{position:absolute;left:-9px;top:-9px;padding:2px 8px;border-radius:999px;border:2px solid var(--ink);color:#fff;font-size:12px;font-weight:700;line-height:16px;white-space:nowrap}\r
.tag.worn{background:var(--green)}.tag.mint{background:var(--red)}.tag.melt{background:#c26a16}\r
.r1{--rar:#b0763d}.r2{--rar:#4f8fe0}.r3{--rar:#a35fd8}.r4{--rar:#e0b020}\r
.mdet{position:relative;display:flex;flex-direction:column;min-height:0;overflow:auto;border:3px solid var(--ink);border-radius:12px;background:rgba(255,249,234,.72);padding:14px;scrollbar-width:thin}\r
.mdx{display:none}\r
.dpic{flex:none;aspect-ratio:1;max-height:42%;border-radius:8px;border:3px solid var(--rar);background:#c9d6e8 center/cover no-repeat}\r
.dinfo h2{margin:12px 0 2px;font-family:var(--gothic);font-weight:900;font-size:30px;line-height:1;color:var(--navy)}\r
.dsub{margin:0;font-size:14px;color:#7a6446}\r
.dstats{display:grid;grid-template-columns:1fr auto;gap:5px 10px;margin:10px 0 0;font-size:15px}\r
.dstats dt{margin:0}.dstats dd{margin:0;font-weight:700;text-align:right}\r
.dact{margin-top:auto;padding-top:12px;display:flex;flex-direction:column;gap:8px}\r
.mnote{margin:0;font-size:14px;line-height:1.4}\r
.mgrid>.mnote{grid-column:1/-1;padding:18px;border:2px dashed rgba(43,26,13,.45);border-radius:10px;text-align:center;font-size:15px}\r
.mbody.solo{grid-template-columns:minmax(0,1fr)}\r
.mempty{flex:1;min-height:0;margin-top:12px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:24px;border:2px dashed rgba(43,26,13,.4);border-radius:12px;text-align:center}\r
.mempty h2{margin:0;font-family:var(--gothic);font-weight:900;font-size:32px;line-height:1.05;color:var(--navy)}\r
.mempty .mnote{max-width:420px;font-size:15px}\r
.mempty .dact{flex-direction:row;flex-wrap:wrap;justify-content:center;margin-top:8px;padding-top:0}\r
.mempty .mbtn{min-width:220px}\r
.mnote.ok{color:var(--green);font-weight:700}\r
.mnote.lock{color:#6a5236}\r
.mbtn{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;min-height:48px;padding:8px 14px;border:0;border-radius:10px;font-weight:700;font-size:18px;line-height:1.1;\r
  box-shadow:0 0 0 2px #0a1636,0 5px 0 2px #0a1636,inset 0 3px 0 rgba(255,255,255,.45);transition:transform .1s}\r
.mbtn small{font-size:13px;font-weight:500}\r
.mbtn:active{transform:translateY(3px);box-shadow:0 0 0 2px #0a1636,0 2px 0 2px #0a1636}\r
.mbtn.gold{color:var(--ink);background:linear-gradient(#ffd85a,#e0a91f)}\r
.mbtn.navy{color:#ffe08a;background:linear-gradient(#2c4f9e,#1d3778 60%,#132a62)}\r
.mbtn.danger{color:#fff3e8;background:linear-gradient(#d4473c,#9c2119)}\r
.mbtn.ghost{color:var(--ink);background:rgba(255,248,230,.7);box-shadow:0 0 0 2px var(--ink),0 3px 0 2px var(--ink)}\r
.mbtn.sm{min-height:36px;padding:5px 12px;font-size:15px}\r
.mqty{display:flex;align-items:center;gap:10px;font-size:14px}\r
.mqty button{width:38px;height:38px;border:2px solid var(--ink);border-radius:8px;background:#fff8e6;font-size:20px;font-weight:700}\r
.mqty b{min-width:20px;text-align:center;font-size:18px}\r
.mlist{display:flex;flex-direction:column;gap:6px;margin-top:6px;font-size:14px}\r
.mli{display:flex;align-items:center;justify-content:space-between;gap:8px}\r
.mli .mbtn{min-height:34px;padding:4px 12px;font-size:14px}\r
.mprice{display:flex;align-items:center;gap:8px;font-weight:700;font-size:15px}\r
.mprice input{flex:1;min-width:0;height:44px;padding:0 10px;border:2px solid var(--ink);border-radius:8px;background:#fffaf0;font:inherit;font-size:18px}\r
.msugg{display:flex;flex-wrap:wrap;gap:6px}\r
.msugg button{padding:4px 10px;border:2px solid var(--ink);border-radius:999px;background:#fff8e6;font-weight:700;font-size:13px}\r
.mwait{position:absolute;inset:0;z-index:3;display:grid;place-items:center;background:rgba(239,220,179,.25);cursor:progress}\r
.mwait span{width:44px;height:44px;border-radius:50%;border:5px solid rgba(43,26,13,.25);border-top-color:var(--ink);animation:spin .8s linear infinite}\r
@keyframes spin{to{transform:rotate(360deg)}}\r
.mconfirm{position:absolute;inset:0;z-index:5;display:grid;place-items:center;padding:16px;background:rgba(20,12,4,.45)}\r
.mconfirm>div{width:min(440px,100%);padding:20px 22px 22px;border:3px solid var(--ink);border-radius:12px;background:var(--paper) url(art/ui/paper.webp) center/1024px;box-shadow:0 8px 0 var(--ink),inset 0 0 40px rgba(122,78,28,.3);text-align:center;animation:min2 .18s ease-out}\r
@keyframes min2{from{opacity:0;transform:scale(.96)}}\r
.mconfirm h2{margin:0 0 8px;font-family:var(--gothic);font-weight:900;font-size:28px;line-height:1.05;color:var(--navy)}\r
.mconfirm p{margin:0 0 16px;font-size:15px;line-height:1.45}\r
.mcbtns{display:grid;grid-template-columns:1fr 1fr;gap:12px}\r
.mbody.season{grid-template-columns:minmax(0,1fr) minmax(0,1fr);overflow:auto;align-content:start}\r
.scol{display:flex;flex-direction:column;gap:14px;min-width:0}\r
.mcardbox{border:3px solid var(--ink);border-radius:12px;background:rgba(255,249,234,.66);padding:14px 16px 16px}\r
.mcardbox h3{margin:0 0 10px;font-family:var(--gothic);font-weight:900;font-size:26px;line-height:1;color:var(--navy)}\r
.mcardbox.pass{border-color:var(--ink);box-shadow:inset 0 0 0 3px rgba(224,169,31,.6)}\r
.mcardbox>.mbtn{width:100%;margin:4px 0 12px}\r
.perks{list-style:none;margin:0 0 14px;padding:0;display:flex;flex-direction:column;gap:8px}\r
.perks li{display:flex;flex-direction:column;padding-left:26px;position:relative;font-size:14px;line-height:1.3}\r
.perks li::before{content:"✓";position:absolute;left:2px;top:0;font-weight:700;color:var(--green);font-size:16px}\r
.perks b{font-size:15px}\r
.big{margin:0 0 10px;font-size:30px;font-weight:700}\r
.pbar{display:grid;grid-template-columns:76px 1fr auto;align-items:center;gap:10px;font-size:14px;margin:4px 0}\r
.pbar i{height:10px;border-radius:5px;background:rgba(43,26,13,.15);box-shadow:inset 0 0 0 1px rgba(43,26,13,.3);overflow:hidden}\r
.pbar i b{display:block;height:100%;background:linear-gradient(#ffd85a,#e0a91f)}\r
.pbar em{font-style:normal;font-weight:700;min-width:70px;text-align:right}\r
.how{margin:0 0 10px;padding-left:20px;font-size:14px;line-height:1.45}\r
.trow{display:flex;align-items:center;flex-wrap:wrap;gap:8px;margin:6px 0;font-size:14px}\r
.trow span{min-width:120px}\r
.trow b{min-width:24px;text-align:center}\r
@media (max-width:700px) and (min-height:501px),(max-width:700px) and (orientation:portrait){\r
  .mpanel{left:0;top:0;transform:none;width:100%;height:100%;border-width:0;box-shadow:inset 0 0 50px rgba(122,78,28,.34);animation:none}\r
  .mpanel::before{inset:4px}\r
  .mhead{gap:8px 10px;padding:12px 12px 8px}\r
  .mhead h1{font-size:28px;flex:1 1 auto}\r
  .mx{order:2}\r
  .mtabs{order:3}\r
  .mchip{order:4;margin-left:auto;font-size:15px;padding:4px 10px 4px 5px}\r
  .mlink{order:5}\r
  .mbody{grid-template-columns:1fr;padding:2px 12px 12px}\r
  .mgrid{grid-template-columns:repeat(3,minmax(0,1fr));gap:14px 10px}\r
  .mdet{position:absolute;left:0;right:0;bottom:0;z-index:2;max-height:66%;border-radius:16px 16px 0 0;border-bottom:0;flex-direction:row;flex-wrap:wrap;align-content:flex-start;gap:0 12px;padding:14px 14px 18px;\r
    background:var(--paper) url(art/ui/paper.webp) center/1024px;box-shadow:0 -6px 0 rgba(43,26,13,.25),inset 0 0 30px rgba(122,78,28,.25);transform:translateY(108%);transition:transform .26s cubic-bezier(.16,1,.3,1)}\r
  .mdet.up{transform:none}\r
  .mdx{display:block;position:absolute;right:6px;top:4px;width:40px;height:40px;border:0;background:none;font-size:28px}\r
  .dpic{width:96px;max-height:none}\r
  .dinfo{flex:1;min-width:0;padding-right:30px}\r
  .dinfo h2{margin-top:2px;font-size:24px}\r
  .dstats{font-size:14px;margin-top:6px}\r
  .dact{width:100%;margin-top:12px;padding-top:0}\r
  .mbody.season{grid-template-columns:1fr;overflow:auto}\r
  .mtoast{top:110px;bottom:auto}\r
}\r
@media (orientation:landscape) and (max-height:500px){\r
  .mpanel{left:0;top:0;transform:none;width:100%;height:100%;border-width:0;box-shadow:inset 0 0 50px rgba(122,78,28,.34);animation:none}\r
  .mpanel::before{inset:4px}\r
  .mhead{padding:8px 14px 6px;gap:8px 12px}\r
  .mhead h1{font-size:26px}\r
  .mtabs button{padding:4px 12px;font-size:14px}\r
  .mbody{grid-template-columns:minmax(0,1fr) 270px;gap:12px;padding:0 14px 10px}\r
  .mgrid{grid-template-columns:repeat(auto-fill,minmax(88px,1fr))}\r
  .mbody{grid-template-columns:minmax(0,1fr) 250px}\r
  .mdet{padding:10px;flex-direction:row;flex-wrap:wrap;align-content:flex-start;gap:0 10px}\r
  .dpic{width:72px;max-height:none}\r
  .dinfo{flex:1;min-width:0}\r
  .dact{width:100%}\r
  .dinfo h2{font-size:21px;margin-top:0}\r
  .mcard .nm{font-size:12px}.mcard .sub{font-size:11px}\r
  .mempty{padding:12px}.mempty h2{font-size:26px}\r
  .dstats{font-size:13px}\r
  .mbtn{min-height:42px;font-size:16px}\r
}\r
@media (prefers-reduced-motion:reduce){.mpanel,.mconfirm>div,.mtoast,.mdet{animation:none;transition:none}}\r
`,Z="https://app.roninchain.com/swap?outputCurrency=0xc0Ca45c2e9448D3876Ca86220B2418C719298396",L={smith:{name:"The Blacksmith",tabs:[["armory","Armory"],["forge","Forge"]]},market:{name:"The Market",tabs:[["market","Market"],["season","Season pass"]],link:["Buy $HORSKE",Z]}},H={armory:"smith",forge:"smith",market:"market",season:"market"},T=$=>$>=9?"r4":$>=7?"r3":$>=4?"r2":"r1",Y={r1:"Common",r2:"Rare",r3:"Epic",r4:"Legendary"},z=$=>String($??"").replace(/[&<>"]/g,P=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[P]),S=$=>I.armors.find(P=>P.tier===$)||I.armors[0],j=$=>$.portrait?`background-image:url(${mt($.portrait)})`:"",Q=$=>`${Math.round($*1e3)/10}%`;function bt({room:$,player:P,door:_,place:D,onClose:J}){const a={place:L[D]?D:H[_]||"smith",tab:_,filter:{armory:"all",forge:"all",market:"sale"},pick:{},sheet:!1,confirm:null,qty:{},price:{},v:0};L[a.place].tabs.some(([t])=>t===a.tab)||(a.tab=L[a.place].tabs[0][0]),document.head.insertAdjacentHTML("beforeend",`<style id="web-modal">${gt}</style>`);const F=document.createElement("div");F.id="wmodal",document.body.appendChild(F);const K=matchMedia("(max-width: 700px) and (min-height: 501px), (max-width: 700px) and (orientation: portrait)"),N=(t,e)=>window.sendAction(t,e),v=()=>{a.v++};function U(){const t=P.state,e=t.econ||null,s=e?e.season:1,i=ft(t.xp),o=t.items||[],c=(e&&e.nfts||[]).filter(k=>k.season===s),n=!!(e&&e.pass),u=n?Math.max(0,g.pass.mintCap-(e.mints||0)):0,b=k=>o.filter(p=>p.tier===k),y=k=>c.filter(p=>p.tier===k);return{s:t,ec:e,season:s,lvl:i,items:o,nftsNow:c,hasPass:n,mintsLeft:u,bound:b,mine:y,owns:k=>k===1||y(k).length>0,coins:e?e.horske:null,forge:t.forge||0,worn:t.armor||1}}const tt=t=>`<span class="mchip"><i class="coin"></i>${t.coins==null?"…":m(t.coins)}</span>`,et=t=>`<span class="mchip"><i class="flame"></i>${m(t.forge)} <small>forge points</small></span>`,x=(t,e,s="",i="gold",o="")=>`<button class="mbtn ${i}" data-act="${e}" ${s}>${t}${o?`<small>${o}</small>`:""}</button>`,w=(t,e="")=>`<p class="mnote ${e}">${t}</p>`,R=({key:t,a:e,tags:s="",sub:i="",locked:o=!1,worn:d=!1,count:c=0,badge:n=""})=>{const u=e.tier,b=a.pick[a.tab]===t;return`<button class="mcard ${T(u)}${o?" lk":""}${b?" sel":""}" data-act="pick" data-key="${t}" aria-pressed="${b}">
      <span class="pic" style="${j(e)}">${o?`<span class="lock">${o}</span>`:""}${c>1?`<span class="cnt">×${c}</span>`:""}</span>
      <span class="nm">${z(e.name)}</span><span class="sub">${i}</span>${s}${n?`<span class="badge">${n}</span>`:""}${d?'<span class="tag worn">Worn</span>':""}</button>`},G=(t,e)=>`<div class="mfilters" role="tablist">${e.map(([s,i,o])=>`<button class="mf${a.filter[t]===s?" on":""}" data-act="filter" data-f="${s}">${i}<small>${o}</small></button>`).join("")}</div>`,at=(t,e,s)=>`<div class="mempty"><h2>${t}</h2>${w(e)}<div class="dact">${s}</div></div>`,B=t=>`<aside class="mdet${a.sheet?" up":""}"><button class="mdx" data-act="sheet-close" aria-label="Close the details">&times;</button>${t}</aside>`;function nt(t){const e=I.armors.map(r=>{const h=r.tier,C=q(h)>t.lvl,M=t.owns(h),O=t.bound(h).length;return{a:r,t:h,lock:C,have:M,mint:O,yours:M||O>0,nft:t.mine(h).length}}),s=a.filter.armory,i=e.filter(r=>s==="all"||(s==="yours"?r.yours:r.lock));(!a.pick.armory||!e.some(r=>"t"+r.t===a.pick.armory))&&(a.pick.armory="t"+t.worn);const o=i.map(r=>R({key:"t"+r.t,a:r.a,worn:t.worn===r.t,locked:r.lock?`Level ${q(r.t)}`:!1,count:r.nft+r.mint,badge:`+${Math.round(W(r.t)*100)}`,sub:r.t===1?"Starter":`${Y[T(r.t)]} · tier ${r.t}`,tags:r.mint&&!r.have?'<span class="tag mint">Mint</span>':r.mint?`<span class="tag mint">+${r.mint} to mint</span>`:""})).join("")||w(s==="locked"?"Every set is open to you.":"Nothing here yet."),d=e.find(r=>"t"+r.t===a.pick.armory)||e[0],c=d.t,n=d.a,u=d.mint,b=t.mine(c);let y="";if(d.lock?y=w(`You wear this set from level ${q(c)}. You are level ${t.lvl}: joust the bosses in the lists to level up.`,"lock"):t.worn===c?y=w("You are wearing this set.","ok"):d.have&&(y=x("Wear this set","do",`data-do="equip" data-tier="${c}"`)),u)if(!t.hasPass)y+=w("A set you win is bound to you until you mint it, and minting needs the season pass.")+x("Get the season pass","goto",'data-tab="season"',"navy");else if(!t.mintsLeft)y+=w(`Your pass has no mints left (${g.pass.mintCap} used).`);else{const r=Math.max(1,Math.min(u,t.mintsLeft)),h=Math.min(r,a.qty[c]||1);y+=(r>1?`<div class="mqty"><button data-act="qty" data-tier="${c}" data-d="-1" aria-label="One less">−</button><b>${h}</b><button data-act="qty" data-tier="${c}" data-d="1" aria-label="One more">+</button><span>of ${u} to mint</span></div>`:"")+x(d.lock?h>1?`Mint ${h}`:"Mint":h>1?`Mint ${h} to wear`:"Mint to wear","ask",`data-ask="mint" data-tier="${c}" data-n="${h}"`,"gold",`${m(g.mintPrice*h)} coins`)}!d.lock&&!d.have&&!u&&c!==1&&(y+=w("Not yours yet: win it from a boss in the lists, forge it at the forge, or buy one in the market.")+x("See the market","goto",'data-tab="market"',"navy"));const l=b.length?`<div class="mlist"><b>Your NFTs of this set</b>${b.map(r=>`<div class="mli"><span>NFT #${r.id}${r.listing?` · on sale for ${m(r.price)}`:""}</span>${r.listing?x("Cancel sale","do",`data-do="unlist" data-id="${r.listing}"`,"ghost"):x("Sell","goto",`data-tab="market" data-f="sell" data-key="n${r.id}"`,"ghost")}</div>`).join("")}</div>`:"",k=B(`<div class="dpic ${T(c)}" style="${j(n)}"></div><div class="dinfo"><h2>${z(n.name)}</h2>
      <p class="dsub">${c===1?"The starter":`${Y[T(c)]} set · tier ${c}`}${d.nft+u?` · you own ${d.nft+u}`:""}</p>
      <dl class="dstats"><dt>Set bonus</dt><dd>+${Math.round(W(c)*100)}</dd><dt>Hit bonus</dt><dd>+${Q(n.bonus||0)}</dd><dt>Defense</dt><dd>+${Q(n.def||0)}</dd><dt>Wear at</dt><dd>Level ${q(c)}</dd></dl></div>
      <div class="dact">${y}${l}</div>`),p=e.filter(r=>r.yours).length,f=e.filter(r=>r.lock).length;return`<div class="mbody"><div class="mleft">${G("armory",[["all","All",e.length],["yours","Yours",p],["locked","Locked",f]])}<div class="mgrid">${o}</div></div>${k}</div>`}function it(t){const e=t.nftsNow.filter(l=>!l.listing),s={};e.forEach(l=>(s[l.tier]=s[l.tier]||[]).push(l));const i=I.armors.filter(l=>l.tier>=2).map(l=>({a:l,t:l.tier,cost:E(l.tier),melt:s[l.tier]||[]})),o=a.filter.forge,d=i.filter(l=>o==="all"||(o==="melt"?l.melt.length:t.forge>=l.cost));(!a.pick.forge||!i.some(l=>"t"+l.t===a.pick.forge))&&(a.pick.forge="t"+(i.find(l=>l.melt.length)||i.find(l=>t.forge>=l.cost)||i[0]).t);const c=d.map(l=>R({key:"t"+l.t,a:l.a,count:l.melt.length,sub:`Forge for ${m(l.cost)} pt${l.cost===1?"":"s"}`,tags:l.melt.length?`<span class="tag melt">Melt +${m(l.cost)}</span>`:"",badge:t.forge>=l.cost?"✓":""})).join("")||w(o==="melt"?"Nothing to melt: only NFTs melt, and a set you win is minted first (the season pass).":"No set within your points yet."),n=i.find(l=>"t"+l.t===a.pick.forge)||i[0];let b=t.forge>=n.cost?x(`Forge ${z(n.a.name)}`,"ask",`data-ask="forge" data-tier="${n.t}"`,"gold",`${m(n.cost)} forge point${n.cost===1?"":"s"}`):w(`It takes ${m(n.cost)} forge point${n.cost===1?"":"s"} and you have ${m(t.forge)}. Melt NFTs to get points.`);n.melt.length&&(b+=x(`Melt one${n.melt.length>1?` of ${n.melt.length}`:""}`,"ask",`data-ask="burn" data-tier="${n.t}" data-id="${n.melt[0].id}"`,"danger",`+${m(n.cost)} forge point${n.cost===1?"":"s"}`));const y=B(`<div class="dpic ${T(n.t)}" style="${j(n.a)}"></div><div class="dinfo"><h2>${z(n.a.name)}</h2>
      <p class="dsub">${Y[T(n.t)]} set · tier ${n.t}</p>
      <dl class="dstats"><dt>Forge cost</dt><dd>${m(n.cost)} pt${n.cost===1?"":"s"}</dd><dt>A melt gives</dt><dd>+${m(n.cost)} pt${n.cost===1?"":"s"}</dd><dt>Wear at</dt><dd>Level ${q(n.t)}</dd><dt>Yours to melt</dt><dd>${n.melt.length}</dd></dl></div>
      <div class="dact">${b}</div>`);return`<div class="mbody"><div class="mleft"><p class="mlead">Melt your NFTs into forge points, and forge any set with them. A tier is worth twice the one below.</p>
      ${G("forge",[["all","All sets",i.length],["melt","Yours to melt",i.filter(l=>l.melt.length).length],["can","Within your points",i.filter(l=>t.forge>=l.cost).length]])}<div class="mgrid">${c}</div></div>${y}</div>`}function ot(t){const e=t.ec&&t.ec.market||[],s=P.userId,i=t.nftsNow.filter(p=>!p.listing),o=a.filter.market,d=e.filter(p=>o==="mine"?p.seller===s:!0),c=t.ec&&t.ec.trades||{n:0,vol:0};let n,u="";const b=`<p class="mlead">${e.length} for sale · ${c.n} sold · ${m(c.vol)} traded · ${g.royalty}% of every sale goes to the prize pool</p>
      ${G("market",[["sale","For sale",e.length],["mine","Your listings",e.filter(p=>p.seller===s).length],["sell","Sell yours",i.length]])}`,y=x("Go to the armory","goto",'data-tab="armory"',"navy"),l=x("Sell one of yours","filter",'data-f="sell"',"gold"),k=(p,f,r)=>`<div class="mbody solo"><div class="mleft">${b}${at(p,f,r)}</div></div>`;if(o==="sell"&&!i.length)return k("Nothing to sell","A set you win is bound to you until you mint it, and minting needs the season pass.",y+(t.hasPass?"":x("Get the season pass","goto",'data-tab="season"',"gold")));if(o!=="sell"&&!d.length)return k(o==="mine"?"Nothing of yours on sale":"Nothing on sale yet",o==="mine"?"List one of your NFTs and it shows here.":"Mint a set at the Blacksmith and be the first to list one.",i.length?l:y);if(o==="sell"){(!a.pick.market||!i.some(f=>"n"+f.id===a.pick.market))&&(a.pick.market=i[0]?"n"+i[0].id:null),n=i.map(f=>R({key:"n"+f.id,a:S(f.tier),sub:`NFT #${f.id}`,badge:""})).join("");const p=i.find(f=>"n"+f.id===a.pick.market);if(p){const f=S(p.tier),r=e.filter(M=>M.tier===p.tier).reduce((M,O)=>Math.min(M,O.price),1/0),h=a.price[p.id]??"",C=[r<1/0?r:null,E(p.tier)*5e3,g.mintPrice*2].filter((M,O,pt)=>M&&pt.indexOf(M)===O).slice(0,3);u=B(`<div class="dpic ${T(p.tier)}" style="${j(f)}"></div><div class="dinfo"><h2>${z(f.name)}</h2><p class="dsub">NFT #${p.id} · ${Y[T(p.tier)]}</p>
          <dl class="dstats"><dt>Cheapest on sale</dt><dd>${r<1/0?m(r):"none"}</dd><dt>Royalty</dt><dd>${g.royalty}% to the pool</dd></dl></div>
          <div class="dact"><label class="mprice">Your price<input id="mprice" data-nft="${p.id}" type="number" min="1" step="1" inputmode="numeric" value="${z(h)}" placeholder="0"><span>coins</span></label>
          ${C.length?`<div class="msugg">${C.map(M=>`<button data-act="price" data-nft="${p.id}" data-v="${M}">${m(M)}</button>`).join("")}</div>`:""}
          ${x("List for sale","ask",`data-ask="list" data-id="${p.id}"`,"gold",h?`${m(+h)} coins`:"")}</div>`)}}else{(!a.pick.market||!d.some(f=>"l"+f.id===a.pick.market))&&(a.pick.market=d[0]?"l"+d[0].id:null),n=d.map(f=>R({key:"l"+f.id,a:S(f.tier),sub:`<i class="coin"></i>${m(f.price)}`,tags:f.seller===s?'<span class="tag worn">Yours</span>':""})).join("");const p=d.find(f=>"l"+f.id===a.pick.market);if(p){const f=S(p.tier),r=p.seller===s,h=(t.coins||0)>=p.price,C=r?x("Cancel the sale","do",`data-do="unlist" data-id="${p.id}"`,"navy"):h?x("Buy","ask",`data-ask="buy" data-id="${p.id}"`,"gold",`${m(p.price)} coins`):w(`It costs ${m(p.price)} and you have ${m(t.coins||0)}.`)+x("Buy $HORSKE","link",`data-href="${Z}"`,"navy");u=B(`<div class="dpic ${T(p.tier)}" style="${j(f)}"></div><div class="dinfo"><h2>${z(f.name)}</h2><p class="dsub">${r?"Your listing":`Sold by ${z(p.name||"a knight")}`} · ${Y[T(p.tier)]}</p>
          <dl class="dstats"><dt>Price</dt><dd>${m(p.price)}</dd><dt>Set bonus</dt><dd>+${Math.round(W(p.tier)*100)}</dd><dt>Wear at</dt><dd>Level ${q(p.tier)}</dd></dl></div><div class="dact">${C}</div>`)}}return`<div class="mbody"><div class="mleft">${b}<div class="mgrid">${n}</div></div>${u}</div>`}function rt(t){const e=t.ec,s=e&&e.pool||{pass:0,mint:0,royalty:0,pod:0,paid:0},i=s.pass+s.mint+s.royalty+s.pod,o=(f,r)=>`<div class="pbar"><span>${f}</span><i><b style="width:${i?Math.round(r/i*100):0}%"></b></i><em>${m(r)}</em></div>`,d=[["Ranked jousts","free, against other knights' ghosts; Elo shares the prize pool"],["Mint your sets",`${m(g.mintPrice)} each, up to ${g.pass.mintCap}, all to the prize pool`],[`${g.pass.freeRuns} free bouts a day`,`instead of ${g.freeRuns}`],[`×${g.pass.dropMult} drop chance`,"from every boss"]],c=t.s,n=c.fake||{ronkeverse:0,oneOfOne:0},u=n.colored||0,b=(f,r,h)=>`<button class="mbtn ghost sm" data-act="do" data-do="fake" data-r="${Math.max(0,f)}" data-o="${Math.max(0,r)}" data-c="${u}" data-rarest="${z(n.rarest||"")}">${h}</button>`,y=`<section class="mcardbox pass"><h3>Season ${t.season} pass</h3>
      <ul class="perks">${d.map(([f,r])=>`<li><b>${f}</b><span>${r}</span></li>`).join("")}</ul>
      ${t.hasPass?w(`✓ Yours · ${e.mints}/${g.pass.mintCap} mints used`,"ok"):`${x("Buy the pass","ask",'data-ask="buyPass"',"gold",`${m(g.pass.price)} coins`)}${w(`${Math.round(g.pass.toPool*100)}% of the price goes to the prize pool.`)}`}</section>`,l=`<section class="mcardbox"><h3>Prize pool</h3><p class="big"><i class="coin"></i>${m(i-s.paid)}</p>
      ${o("Passes",s.pass)}${o("Mints",s.mint)}${o("Royalties",s.royalty)}${o("PoD",s.pod)}
      ${w(`At the season's end the top ${Math.round(g.payoutShare*100)}% of ranked knights share it, more for a higher place.`)}</section>`,k=`<section class="mcardbox"><h3>How the season works</h3><ol class="how"><li>Joust the bosses to level up (0 to 20); a win can drop a set.</li><li>A set that drops is minted (season pass) before you wear it or sell it here.</li><li>Climb ranked: at the season's end the top ${Math.round(g.payoutShare*100)}% share the prize pool.</li></ol>${w("Play money for now: the coins, the pass and the NFTs here are not on a chain yet.")}</section>`,p=c.tools?`<section class="mcardbox tools"><h3>Test tools · play money</h3>
      <div class="trow"><span>Ronkeverse NFTs</span>${b(n.ronkeverse-5,n.oneOfOne,"−5")}<b>${n.ronkeverse}</b>${b(n.ronkeverse+5,n.oneOfOne,"+5")}</div>
      <div class="trow"><span>1/1 NFTs</span>${b(n.ronkeverse,n.oneOfOne-1,"−1")}<b>${n.oneOfOne}</b>${b(n.ronkeverse,n.oneOfOne+1,"+1")}</div>
      <div class="trow">${x(`+${m(g.faucet)} coins`,"do",'data-do="faucet"',"gold sm")}${x("Refresh","do",'data-do="sync"',"navy sm")}${x("Reset my season","ask",'data-ask="resetMe"',"ghost sm")}</div></section>`:"";return`<div class="mbody season"><div class="scol">${y}${k}</div><div class="scol">${l}${p}</div></div>`}function st(t,e,s){const i=+e.dataset.tier,o=i?S(i):null;if(t==="mint"){const d=+e.dataset.n||1;return{title:`Mint ${d>1?d+" × ":""}${o.name}?`,text:`It costs ${m(g.mintPrice*d)} coins (you have ${m(s.coins||0)}), all of it to the prize pool. A minted set is an NFT: you can wear it or sell it.`,cta:"Mint",run:()=>N("mint",{mint:{tier:i,n:d}})}}if(t==="forge")return{title:`Forge ${o.name}?`,text:`It costs ${m(E(i))} forge points (you have ${m(s.forge)}). The set is bound to you; mint it to wear or sell it.`,cta:"Forge",run:()=>N("forge",{forge:i})};if(t==="burn"){const d=+e.dataset.id;return{title:`Melt ${o.name} #${d}?`,text:`The NFT is destroyed and you get ${m(E(i))} forge point${E(i)===1?"":"s"}. This can't be undone.`,cta:"Melt it",danger:!0,run:()=>N("burn",{burn:{nft:d}})}}if(t==="buy"){const d=+e.dataset.id,c=(s.ec&&s.ec.market||[]).find(n=>n.id===d);return c&&{title:`Buy ${S(c.tier).name}?`,text:`It costs ${m(c.price)} coins (you have ${m(s.coins||0)}). The NFT is yours at once.`,cta:"Buy",run:()=>N("buy",{buy:d})}}if(t==="list"){const d=+e.dataset.id,c=s.nftsNow.find(u=>u.id===d),n=Math.round(+(a.price[d]||0));return n>0?{title:`List ${S(c.tier).name} #${d} for ${m(n)}?`,text:`When it sells you get ${m(n-Math.floor(n*g.royalty/100))} coins; ${g.royalty}% goes to the prize pool. You can cancel the sale while it's listed.`,cta:"List it",run:()=>N("list",{list:{nft:d,price:n}})}:(dt("Type your price first."),null)}return t==="buyPass"?{title:`Buy the season ${s.season} pass?`,text:`It costs ${m(g.pass.price)} coins (you have ${m(s.coins||0)}). ${Math.round(g.pass.toPool*100)}% goes to the prize pool.`,cta:"Buy the pass",run:()=>N("buyPass")}:t==="resetMe"?{title:"Reset your season?",text:"Your level, sets, NFTs and coins start over. Play money only.",cta:"Reset",danger:!0,run:()=>N("resetMe")}:null}let A=null;function dt(t,e=!1){A={text:t,ok:e,until:performance.now()+3200},v()}function lt(){const t=U(),e=L[a.place],s=a.tab==="armory"?nt(t):a.tab==="forge"?it(t):a.tab==="market"?ot(t):rt(t),i=a.tab==="forge"?et(t):tt(t),o=t.s.toast&&$.nowMs-t.s.toast.at<5e3?{text:t.s.toast.text,ok:t.s.toast.ok}:A&&performance.now()<A.until?A:null,d=a.confirm;return`<div class="mback" data-act="close"></div>
      <div class="mpanel${t.s.busy?" busy":""}" role="dialog" aria-modal="true" aria-labelledby="mtitle">
        <header class="mhead"><h1 id="mtitle">${e.name}</h1>
          <nav class="mtabs" role="tablist">${e.tabs.map(([c,n])=>`<button role="tab" aria-selected="${a.tab===c}" class="${a.tab===c?"on":""}" data-act="tab" data-tab="${c}">${n}</button>`).join("")}</nav>
          ${e.link?`<a class="mlink" href="${e.link[1]}" target="_blank" rel="noopener">${e.link[0]}<span aria-hidden="true">↗</span><span class="vh"> (opens a new tab)</span></a>`:""}
          ${i}<button class="mx" data-act="close" aria-label="Close">&times;</button></header>
        ${o?`<div class="mtoast${o.ok===!1?" bad":""}" role="status">${z(o.text)}</div>`:""}
        ${s}
        ${t.s.busy?'<div class="mwait"><span></span></div>':""}
        ${d?`<div class="mconfirm" role="alertdialog" aria-modal="true" aria-labelledby="mctitle"><div><h2 id="mctitle">${z(d.title)}</h2><p>${z(d.text)}</p>
          <div class="mcbtns">${x(z(d.cta),"yes","",d.danger?"danger":"gold")}${x("Cancel","no","","ghost")}</div></div></div>`:""}
      </div>`}let V="";function X(){var i,o;const t=P.state,e=A&&performance.now()<A.until,s=[(i=t.econ)==null?void 0:i.at,t.busy,(o=t.toast)==null?void 0:o.at,t.forge,t.armor,t.xp,(t.items||[]).length,JSON.stringify(t.fake||null),a.v,e,t.toast&&$.nowMs-t.toast.at<5e3,K.matches].join("|");s!==V&&(V=s,ct(F,`<div id="wmodal">${lt()}</div>`,{onBeforeElUpdated:(d,c)=>!(d===document.activeElement&&d.tagName==="INPUT")})),requestAnimationFrame(X)}return requestAnimationFrame(X),F.addEventListener("click",t=>{const e=t.target.closest("[data-act]");if(!e||!F.contains(e))return;const s=U(),i=e.dataset.act;if(i==="close"){if(a.confirm){a.confirm=null,v();return}J();return}if(i==="tab"){a.tab=e.dataset.tab,a.sheet=!1,v();return}if(i==="filter"){a.filter[a.tab]=e.dataset.f,a.pick[a.tab]=null,a.sheet=!1,v();return}if(i==="pick"){a.pick[a.tab]=e.dataset.key,a.sheet=!0,v();return}if(i==="sheet-close"){a.sheet=!1,v();return}if(i==="goto"){const o=e.dataset.tab;a.place=H[o],a.tab=o,e.dataset.f&&(a.filter[o]=e.dataset.f),e.dataset.key?(a.pick[o]=e.dataset.key,a.sheet=!0):a.sheet=!1,v();return}if(i==="qty"){const o=+e.dataset.tier,d=Math.max(1,Math.min(s.bound(o).length,s.mintsLeft));a.qty[o]=Math.max(1,Math.min(d,(a.qty[o]||1)+ +e.dataset.d)),v();return}if(i==="price"){a.price[+e.dataset.nft]=e.dataset.v,v();return}if(i==="link"){window.open(e.dataset.href,"_blank","noopener");return}if(i==="ask"){a.confirm=st(e.dataset.ask,e,s),v();return}if(i==="yes"){const o=a.confirm;a.confirm=null,v(),o==null||o.run();return}if(i==="no"){a.confirm=null,v();return}if(i==="do"){const o=e.dataset.do;o==="equip"?N("equip",{equip:{kind:"set",tier:+e.dataset.tier}}):o==="unlist"?N("unlist",{unlist:+e.dataset.id}):o==="fake"?N("fake",{fake:{ronkeverse:+e.dataset.r,oneOfOne:+e.dataset.o,colored:+e.dataset.c,rarest:e.dataset.rarest||""}}):N(o);return}}),F.addEventListener("input",t=>{t.target.id==="mprice"&&(a.price[+t.target.dataset.nft]=t.target.value)}),F.addEventListener("change",t=>{t.target.id==="mprice"&&v()}),addEventListener("focus",()=>{var t;document.activeElement===document.body&&((t=F.querySelector(".mx"))==null||t.focus({preventScroll:!0}))}),addEventListener("keydown",t=>{t.key==="Escape"&&(a.confirm?(a.confirm=null,v()):a.sheet&&K.matches?(a.sheet=!1,v()):J())}),{open(t,e){a.place=L[e]?e:H[t]||a.place,a.tab=L[a.place].tabs.some(([s])=>s===t)?t:L[a.place].tabs[0][0],a.sheet=!1,a.confirm=null,v()}}}export{bt as startModal};

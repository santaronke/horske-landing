import{m as xt,c as ut}from"./index-9lBzUm52.js";import{J as G}from"./joust-2BfEs9QO.js";import{l as bt,S as x,q as m,A as E,s as W,u as C}from"./econ-Deg9OsSu.js";const vt=`/* The village's modals (src/modal/modal.js). Paper: art/ui/paper.webp, a tileable parchment made with SVG filters\r
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
/* the Ronin Market tab: live cards, each the NFT's page on the market */\r
.rcard{text-decoration:none;color:inherit;cursor:pointer}\r
.rcard .pic{background-color:#e9dcc0;background-size:cover}\r
.rcard .rp{font-weight:700;font-size:13px;color:var(--ink)}\r
.rcard:focus-visible{outline:4px solid var(--navy);outline-offset:2px}\r
.rmore{grid-column:1/-1;display:flex;justify-content:center;padding:6px 0 4px}\r
.rmore .mbtn{min-width:240px}\r
.mchip.live{gap:7px;padding:5px 12px;font-size:14px}\r
.mchip.live .dot{width:9px;height:9px;border-radius:50%;background:#2fa44f;box-shadow:0 0 0 3px rgba(47,164,79,.25);animation:rlive 1.6s ease-in-out infinite}\r
@keyframes rlive{50%{box-shadow:0 0 0 6px rgba(47,164,79,0)}}\r
.rspin{width:40px;height:40px;border-radius:50%;border:5px solid rgba(43,26,13,.2);border-top-color:var(--ink);animation:spin .8s linear infinite}\r
@media (prefers-reduced-motion:reduce){.mpanel,.mconfirm>div,.mtoast,.mdet,.mchip.live .dot,.rspin{animation:none;transition:none}}\r
/* the Market's three tabs on one line on a phone, and its header on one row sideways (17/10, the Ronin Market tab) */\r
.rcard .rp small{margin-left:3px;font-size:10px;font-weight:700;opacity:.75}\r
@media (max-width:700px) and (min-height:501px),(max-width:700px) and (orientation:portrait){\r
  .mtabs{max-width:100%}\r
  .mtabs button{padding:6px 10px;font-size:14px;white-space:nowrap}\r
}\r
@media (orientation:landscape) and (max-height:500px){\r
  .mhead h1{font-size:23px}\r
  .mtabs button{padding:4px 10px;font-size:13px}\r
  .mlink{padding:3px 9px;font-size:12px}\r
  .mchip{font-size:13px;padding:3px 9px 3px 4px}\r
  .mchip.live{padding:3px 9px}\r
}\r
`,nt="https://app.roninchain.com/swap?outputCurrency=0xc0Ca45c2e9448D3876Ca86220B2418C719298396",$t={ronkeverse:{name:"Ronkeverse",page:g=>`https://marketplace.roninchain.com/collections/ronkeverse/${g}`}},yt="/api/ronin-market",tt=48,kt=3e4,L={smith:{name:"The Blacksmith",tabs:[["armory","Armory"],["forge","Forge"]]},market:{name:"The Market",tabs:[["ronin","Ronin Market"],["market","Armor market"],["season","Season pass"]],link:["Buy $HORSKE",nt]}},H={armory:"smith",forge:"smith",ronin:"market",market:"market",season:"market"},T=g=>g>=9?"r4":g>=7?"r3":g>=4?"r2":"r1",j={r1:"Common",r2:"Rare",r3:"Epic",r4:"Legendary"},v=g=>String(g??"").replace(/[&<>"]/g,S=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[S]),P=g=>G.armors.find(S=>S.tier===g)||G.armors[0],q=g=>g.portrait?`background-image:url(${ut(g.portrait)})`:"",et=g=>`${Math.round(g*1e3)/10}%`,at=g=>g>=1e3?m(Math.round(g)):String(Math.round(g*100)/100),wt=g=>new Date(g).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"});function Tt({room:g,player:S,door:D,place:J,onClose:U}){const a={place:L[J]?J:H[D]||"smith",tab:D,filter:{armory:"all",forge:"all",market:"sale"},pick:{},sheet:!1,confirm:null,qty:{},price:{},rm:{key:"ronkeverse",items:[],total:0,pages:1,loading:!1,error:null,at:0},v:0};L[a.place].tabs.some(([t])=>t===a.tab)||(a.tab=L[a.place].tabs[0][0]),document.head.insertAdjacentHTML("beforeend",`<style id="web-modal">${vt}</style>`);const R=document.createElement("div");R.id="wmodal",document.body.appendChild(R);const V=matchMedia("(max-width: 700px) and (min-height: 501px), (max-width: 700px) and (orientation: portrait)"),N=(t,e)=>window.sendAction(t,e),$=()=>{a.v++};function K(){const t=S.state,e=t.econ||null,s=e?e.season:1,n=bt(t.xp),r=t.items||[],c=(e&&e.nfts||[]).filter(z=>z.season===s),o=!!(e&&e.pass),b=o?Math.max(0,x.pass.mintCap-(e.mints||0)):0,y=z=>r.filter(p=>p.tier===z),k=z=>c.filter(p=>p.tier===z);return{s:t,ec:e,season:s,lvl:n,items:r,nftsNow:c,hasPass:o,mintsLeft:b,bound:y,mine:k,owns:z=>z===1||k(z).length>0,coins:e?e.horske:null,forge:t.forge||0,worn:t.armor||1}}const it=t=>`<span class="mchip"><i class="coin"></i>${t.coins==null?"…":m(t.coins)}</span>`,rt=t=>`<span class="mchip"><i class="flame"></i>${m(t.forge)} <small>forge points</small></span>`,h=(t,e,s="",n="gold",r="")=>`<button class="mbtn ${n}" data-act="${e}" ${s}>${t}${r?`<small>${r}</small>`:""}</button>`,w=(t,e="")=>`<p class="mnote ${e}">${t}</p>`,Y=({key:t,a:e,tags:s="",sub:n="",locked:r=!1,worn:i=!1,count:c=0,badge:o=""})=>{const b=e.tier,y=a.pick[a.tab]===t;return`<button class="mcard ${T(b)}${r?" lk":""}${y?" sel":""}" data-act="pick" data-key="${t}" aria-pressed="${y}">
      <span class="pic" style="${q(e)}">${r?`<span class="lock">${r}</span>`:""}${c>1?`<span class="cnt">×${c}</span>`:""}</span>
      <span class="nm">${v(e.name)}</span><span class="sub">${n}</span>${s}${o?`<span class="badge">${o}</span>`:""}${i?'<span class="tag worn">Worn</span>':""}</button>`},_=(t,e)=>`<div class="mfilters" role="tablist">${e.map(([s,n,r])=>`<button class="mf${a.filter[t]===s?" on":""}" data-act="filter" data-f="${s}">${n}<small>${r}</small></button>`).join("")}</div>`,X=(t,e,s)=>`<div class="mempty"><h2>${t}</h2>${w(e)}<div class="dact">${s}</div></div>`,I=t=>`<aside class="mdet${a.sheet?" up":""}"><button class="mdx" data-act="sheet-close" aria-label="Close the details">&times;</button>${t}</aside>`;function ot(t){const e=G.armors.map(d=>{const u=d.tier,O=C(u)>t.lvl,M=t.owns(u),A=t.bound(u).length;return{a:d,t:u,lock:O,have:M,mint:A,yours:M||A>0,nft:t.mine(u).length}}),s=a.filter.armory,n=e.filter(d=>s==="all"||(s==="yours"?d.yours:d.lock));(!a.pick.armory||!e.some(d=>"t"+d.t===a.pick.armory))&&(a.pick.armory="t"+t.worn);const r=n.map(d=>Y({key:"t"+d.t,a:d.a,worn:t.worn===d.t,locked:d.lock?`Level ${C(d.t)}`:!1,count:d.nft+d.mint,badge:`+${Math.round(W(d.t)*100)}`,sub:d.t===1?"Starter":`${j[T(d.t)]} · tier ${d.t}`,tags:d.mint&&!d.have?'<span class="tag mint">Mint</span>':d.mint?`<span class="tag mint">+${d.mint} to mint</span>`:""})).join("")||w(s==="locked"?"Every set is open to you.":"Nothing here yet."),i=e.find(d=>"t"+d.t===a.pick.armory)||e[0],c=i.t,o=i.a,b=i.mint,y=t.mine(c);let k="";if(i.lock?k=w(`You wear this set from level ${C(c)}. You are level ${t.lvl}: joust the bosses in the lists to level up.`,"lock"):t.worn===c?k=w("You are wearing this set.","ok"):i.have&&(k=h("Wear this set","do",`data-do="equip" data-tier="${c}"`)),b)if(!t.hasPass)k+=w("A set you win is bound to you until you mint it, and minting needs the season pass.")+h("Get the season pass","goto",'data-tab="season"',"navy");else if(!t.mintsLeft)k+=w(`Your pass has no mints left (${x.pass.mintCap} used).`);else{const d=Math.max(1,Math.min(b,t.mintsLeft)),u=Math.min(d,a.qty[c]||1);k+=(d>1?`<div class="mqty"><button data-act="qty" data-tier="${c}" data-d="-1" aria-label="One less">−</button><b>${u}</b><button data-act="qty" data-tier="${c}" data-d="1" aria-label="One more">+</button><span>of ${b} to mint</span></div>`:"")+h(i.lock?u>1?`Mint ${u}`:"Mint":u>1?`Mint ${u} to wear`:"Mint to wear","ask",`data-ask="mint" data-tier="${c}" data-n="${u}"`,"gold",`${m(x.mintPrice*u)} coins`)}!i.lock&&!i.have&&!b&&c!==1&&(k+=w("Not yours yet: win it from a boss in the lists, forge it at the forge, or buy one in the market.")+h("See the market","goto",'data-tab="market"',"navy"));const l=y.length?`<div class="mlist"><b>Your NFTs of this set</b>${y.map(d=>`<div class="mli"><span>NFT #${d.id}${d.listing?` · on sale for ${m(d.price)}`:""}</span>${d.listing?h("Cancel sale","do",`data-do="unlist" data-id="${d.listing}"`,"ghost"):h("Sell","goto",`data-tab="market" data-f="sell" data-key="n${d.id}"`,"ghost")}</div>`).join("")}</div>`:"",z=I(`<div class="dpic ${T(c)}" style="${q(o)}"></div><div class="dinfo"><h2>${v(o.name)}</h2>
      <p class="dsub">${c===1?"The starter":`${j[T(c)]} set · tier ${c}`}${i.nft+b?` · you own ${i.nft+b}`:""}</p>
      <dl class="dstats"><dt>Set bonus</dt><dd>+${Math.round(W(c)*100)}</dd><dt>Hit bonus</dt><dd>+${et(o.bonus||0)}</dd><dt>Defense</dt><dd>+${et(o.def||0)}</dd><dt>Wear at</dt><dd>Level ${C(c)}</dd></dl></div>
      <div class="dact">${k}${l}</div>`),p=e.filter(d=>d.yours).length,f=e.filter(d=>d.lock).length;return`<div class="mbody"><div class="mleft">${_("armory",[["all","All",e.length],["yours","Yours",p],["locked","Locked",f]])}<div class="mgrid">${r}</div></div>${z}</div>`}function st(t){const e=t.nftsNow.filter(l=>!l.listing),s={};e.forEach(l=>(s[l.tier]=s[l.tier]||[]).push(l));const n=G.armors.filter(l=>l.tier>=2).map(l=>({a:l,t:l.tier,cost:E(l.tier),melt:s[l.tier]||[]})),r=a.filter.forge,i=n.filter(l=>r==="all"||(r==="melt"?l.melt.length:t.forge>=l.cost));(!a.pick.forge||!n.some(l=>"t"+l.t===a.pick.forge))&&(a.pick.forge="t"+(n.find(l=>l.melt.length)||n.find(l=>t.forge>=l.cost)||n[0]).t);const c=i.map(l=>Y({key:"t"+l.t,a:l.a,count:l.melt.length,sub:`Forge for ${m(l.cost)} pt${l.cost===1?"":"s"}`,tags:l.melt.length?`<span class="tag melt">Melt +${m(l.cost)}</span>`:"",badge:t.forge>=l.cost?"✓":""})).join("")||w(r==="melt"?"Nothing to melt: only NFTs melt, and a set you win is minted first (the season pass).":"No set within your points yet."),o=n.find(l=>"t"+l.t===a.pick.forge)||n[0];let y=t.forge>=o.cost?h(`Forge ${v(o.a.name)}`,"ask",`data-ask="forge" data-tier="${o.t}"`,"gold",`${m(o.cost)} forge point${o.cost===1?"":"s"}`):w(`It takes ${m(o.cost)} forge point${o.cost===1?"":"s"} and you have ${m(t.forge)}. Melt NFTs to get points.`);o.melt.length&&(y+=h(`Melt one${o.melt.length>1?` of ${o.melt.length}`:""}`,"ask",`data-ask="burn" data-tier="${o.t}" data-id="${o.melt[0].id}"`,"danger",`+${m(o.cost)} forge point${o.cost===1?"":"s"}`));const k=I(`<div class="dpic ${T(o.t)}" style="${q(o.a)}"></div><div class="dinfo"><h2>${v(o.a.name)}</h2>
      <p class="dsub">${j[T(o.t)]} set · tier ${o.t}</p>
      <dl class="dstats"><dt>Forge cost</dt><dd>${m(o.cost)} pt${o.cost===1?"":"s"}</dd><dt>A melt gives</dt><dd>+${m(o.cost)} pt${o.cost===1?"":"s"}</dd><dt>Wear at</dt><dd>Level ${C(o.t)}</dd><dt>Yours to melt</dt><dd>${o.melt.length}</dd></dl></div>
      <div class="dact">${y}</div>`);return`<div class="mbody"><div class="mleft"><p class="mlead">Melt your NFTs into forge points, and forge any set with them. A tier is worth twice the one below.</p>
      ${_("forge",[["all","All sets",n.length],["melt","Yours to melt",n.filter(l=>l.melt.length).length],["can","Within your points",n.filter(l=>t.forge>=l.cost).length]])}<div class="mgrid">${c}</div></div>${k}</div>`}function dt(t){const e=t.ec&&t.ec.market||[],s=S.userId,n=t.nftsNow.filter(p=>!p.listing),r=a.filter.market,i=e.filter(p=>r==="mine"?p.seller===s:!0),c=t.ec&&t.ec.trades||{n:0,vol:0};let o,b="";const y=`<p class="mlead">${e.length} for sale · ${c.n} sold · ${m(c.vol)} traded · ${x.royalty}% of every sale goes to the prize pool</p>
      ${_("market",[["sale","For sale",e.length],["mine","Your listings",e.filter(p=>p.seller===s).length],["sell","Sell yours",n.length]])}`,k=h("Go to the armory","goto",'data-tab="armory"',"navy"),l=h("Sell one of yours","filter",'data-f="sell"',"gold"),z=(p,f,d)=>`<div class="mbody solo"><div class="mleft">${y}${X(p,f,d)}</div></div>`;if(r==="sell"&&!n.length)return z("Nothing to sell","A set you win is bound to you until you mint it, and minting needs the season pass.",k+(t.hasPass?"":h("Get the season pass","goto",'data-tab="season"',"gold")));if(r!=="sell"&&!i.length)return z(r==="mine"?"Nothing of yours on sale":"Nothing on sale yet",r==="mine"?"List one of your NFTs and it shows here.":"Mint a set at the Blacksmith and be the first to list one.",n.length?l:k);if(r==="sell"){(!a.pick.market||!n.some(f=>"n"+f.id===a.pick.market))&&(a.pick.market=n[0]?"n"+n[0].id:null),o=n.map(f=>Y({key:"n"+f.id,a:P(f.tier),sub:`NFT #${f.id}`,badge:""})).join("");const p=n.find(f=>"n"+f.id===a.pick.market);if(p){const f=P(p.tier),d=e.filter(M=>M.tier===p.tier).reduce((M,A)=>Math.min(M,A.price),1/0),u=a.price[p.id]??"",O=[d<1/0?d:null,E(p.tier)*5e3,x.mintPrice*2].filter((M,A,ht)=>M&&ht.indexOf(M)===A).slice(0,3);b=I(`<div class="dpic ${T(p.tier)}" style="${q(f)}"></div><div class="dinfo"><h2>${v(f.name)}</h2><p class="dsub">NFT #${p.id} · ${j[T(p.tier)]}</p>
          <dl class="dstats"><dt>Cheapest on sale</dt><dd>${d<1/0?m(d):"none"}</dd><dt>Royalty</dt><dd>${x.royalty}% to the pool</dd></dl></div>
          <div class="dact"><label class="mprice">Your price<input id="mprice" data-nft="${p.id}" type="number" min="1" step="1" inputmode="numeric" value="${v(u)}" placeholder="0"><span>coins</span></label>
          ${O.length?`<div class="msugg">${O.map(M=>`<button data-act="price" data-nft="${p.id}" data-v="${M}">${m(M)}</button>`).join("")}</div>`:""}
          ${h("List for sale","ask",`data-ask="list" data-id="${p.id}"`,"gold",u?`${m(+u)} coins`:"")}</div>`)}}else{(!a.pick.market||!i.some(f=>"l"+f.id===a.pick.market))&&(a.pick.market=i[0]?"l"+i[0].id:null),o=i.map(f=>Y({key:"l"+f.id,a:P(f.tier),sub:`<i class="coin"></i>${m(f.price)}`,tags:f.seller===s?'<span class="tag worn">Yours</span>':""})).join("");const p=i.find(f=>"l"+f.id===a.pick.market);if(p){const f=P(p.tier),d=p.seller===s,u=(t.coins||0)>=p.price,O=d?h("Cancel the sale","do",`data-do="unlist" data-id="${p.id}"`,"navy"):u?h("Buy","ask",`data-ask="buy" data-id="${p.id}"`,"gold",`${m(p.price)} coins`):w(`It costs ${m(p.price)} and you have ${m(t.coins||0)}.`)+h("Buy $HORSKE","link",`data-href="${nt}"`,"navy");b=I(`<div class="dpic ${T(p.tier)}" style="${q(f)}"></div><div class="dinfo"><h2>${v(f.name)}</h2><p class="dsub">${d?"Your listing":`Sold by ${v(p.name||"a knight")}`} · ${j[T(p.tier)]}</p>
          <dl class="dstats"><dt>Price</dt><dd>${m(p.price)}</dd><dt>Set bonus</dt><dd>+${Math.round(W(p.tier)*100)}</dd><dt>Wear at</dt><dd>Level ${C(p.tier)}</dd></dl></div><div class="dact">${O}</div>`)}}return`<div class="mbody"><div class="mleft">${y}<div class="mgrid">${o}</div></div>${b}</div>`}function lt(t){const e=t.ec,s=e&&e.pool||{pass:0,mint:0,royalty:0,pod:0,paid:0},n=s.pass+s.mint+s.royalty+s.pod,r=(f,d)=>`<div class="pbar"><span>${f}</span><i><b style="width:${n?Math.round(d/n*100):0}%"></b></i><em>${m(d)}</em></div>`,i=[["Ranked jousts","free, against other knights' ghosts; Elo shares the prize pool"],["Mint your sets",`${m(x.mintPrice)} each, up to ${x.pass.mintCap}, all to the prize pool`],[`${x.pass.freeRuns} free bouts a day`,`instead of ${x.freeRuns}`],[`×${x.pass.dropMult} drop chance`,"from every boss"]],c=t.s,o=c.fake||{ronkeverse:0,oneOfOne:0},b=o.colored||0,y=(f,d,u)=>`<button class="mbtn ghost sm" data-act="do" data-do="fake" data-r="${Math.max(0,f)}" data-o="${Math.max(0,d)}" data-c="${b}" data-rarest="${v(o.rarest||"")}">${u}</button>`,k=`<section class="mcardbox pass"><h3>Season ${t.season} pass</h3>
      <ul class="perks">${i.map(([f,d])=>`<li><b>${f}</b><span>${d}</span></li>`).join("")}</ul>
      ${t.hasPass?w(`✓ Yours · ${e.mints}/${x.pass.mintCap} mints used`,"ok"):`${h("Buy the pass","ask",'data-ask="buyPass"',"gold",`${m(x.pass.price)} coins`)}${w(`${Math.round(x.pass.toPool*100)}% of the price goes to the prize pool.`)}`}</section>`,l=`<section class="mcardbox"><h3>Prize pool</h3><p class="big"><i class="coin"></i>${m(n-s.paid)}</p>
      ${r("Passes",s.pass)}${r("Mints",s.mint)}${r("Royalties",s.royalty)}${r("PoD",s.pod)}
      ${w(`At the season's end the top ${Math.round(x.payoutShare*100)}% of ranked knights share it, more for a higher place.`)}</section>`,z=`<section class="mcardbox"><h3>How the season works</h3><ol class="how"><li>Joust the bosses to level up (0 to 20); a win can drop a set.</li><li>A set that drops is minted (season pass) before you wear it or sell it here.</li><li>Climb ranked: at the season's end the top ${Math.round(x.payoutShare*100)}% share the prize pool.</li></ol>${w("Play money for now: the coins, the pass and the NFTs here are not on a chain yet.")}</section>`,p=c.tools?`<section class="mcardbox tools"><h3>Test tools · play money</h3>
      <div class="trow"><span>Ronkeverse NFTs</span>${y(o.ronkeverse-5,o.oneOfOne,"−5")}<b>${o.ronkeverse}</b>${y(o.ronkeverse+5,o.oneOfOne,"+5")}</div>
      <div class="trow"><span>1/1 NFTs</span>${y(o.ronkeverse,o.oneOfOne-1,"−1")}<b>${o.oneOfOne}</b>${y(o.ronkeverse,o.oneOfOne+1,"+1")}</div>
      <div class="trow">${h(`+${m(x.faucet)} coins`,"do",'data-do="faucet"',"gold sm")}${h("Refresh","do",'data-do="sync"',"navy sm")}${h("Reset my season","ask",'data-ask="resetMe"',"ghost sm")}</div></section>`:"";return`<div class="mbody season"><div class="scol">${k}${z}</div><div class="scol">${l}${p}</div></div>`}function pt(t,e,s){const n=+e.dataset.tier,r=n?P(n):null;if(t==="mint"){const i=+e.dataset.n||1;return{title:`Mint ${i>1?i+" × ":""}${r.name}?`,text:`It costs ${m(x.mintPrice*i)} coins (you have ${m(s.coins||0)}), all of it to the prize pool. A minted set is an NFT: you can wear it or sell it.`,cta:"Mint",run:()=>N("mint",{mint:{tier:n,n:i}})}}if(t==="forge")return{title:`Forge ${r.name}?`,text:`It costs ${m(E(n))} forge points (you have ${m(s.forge)}). The set is bound to you; mint it to wear or sell it.`,cta:"Forge",run:()=>N("forge",{forge:n})};if(t==="burn"){const i=+e.dataset.id;return{title:`Melt ${r.name} #${i}?`,text:`The NFT is destroyed and you get ${m(E(n))} forge point${E(n)===1?"":"s"}. This can't be undone.`,cta:"Melt it",danger:!0,run:()=>N("burn",{burn:{nft:i}})}}if(t==="buy"){const i=+e.dataset.id,c=(s.ec&&s.ec.market||[]).find(o=>o.id===i);return c&&{title:`Buy ${P(c.tier).name}?`,text:`It costs ${m(c.price)} coins (you have ${m(s.coins||0)}). The NFT is yours at once.`,cta:"Buy",run:()=>N("buy",{buy:i})}}if(t==="list"){const i=+e.dataset.id,c=s.nftsNow.find(b=>b.id===i),o=Math.round(+(a.price[i]||0));return o>0?{title:`List ${P(c.tier).name} #${i} for ${m(o)}?`,text:`When it sells you get ${m(o-Math.floor(o*x.royalty/100))} coins; ${x.royalty}% goes to the prize pool. You can cancel the sale while it's listed.`,cta:"List it",run:()=>N("list",{list:{nft:i,price:o}})}:(ft("Type your price first."),null)}return t==="buyPass"?{title:`Buy the season ${s.season} pass?`,text:`It costs ${m(x.pass.price)} coins (you have ${m(s.coins||0)}). ${Math.round(x.pass.toPool*100)}% goes to the prize pool.`,cta:"Buy the pass",run:()=>N("buyPass")}:t==="resetMe"?{title:"Reset your season?",text:"Your level, sets, NFTs and coins start over. Play money only.",cta:"Reset",danger:!0,run:()=>N("resetMe")}:null}async function B(){const t=a.rm;if(!t.loading){t.loading=!0,$();try{const e=[];let s=0;for(let n=0;n<t.pages;n++){const r=await fetch(`${yt}?collection=${t.key}&from=${n*tt}&size=${tt}`);if(!r.ok)throw new Error("HTTP "+r.status);const i=await r.json();if(s=i.total,e.push(...i.items),e.length>=s||!i.items.length)break}t.items=e,t.total=s,t.at=Date.now(),t.error=null}catch(e){t.error=String((e==null?void 0:e.message)||e)}t.loading=!1,$()}}setInterval(()=>{a.tab==="ronin"&&document.visibilityState==="visible"&&B()},kt);const ct=()=>`<span class="mchip live"><i class="dot"></i>Live${a.rm.at?` <small>${wt(a.rm.at)}</small>`:""}</span>`;function mt(){const t=a.rm,e=$t[t.key];!t.at&&!t.loading&&!t.error&&queueMicrotask(B);const s=`<p class="mlead">Live from the Ronin Market: ${e.name} for sale, cheapest first, refreshed every 30 s. A card opens it on the market.</p>
      <div class="mfilters" role="tablist"><button class="mf on" data-act="rcol" data-k="${t.key}">${e.name}<small>${t.total?m(t.total):""}</small></button></div>`;if(!t.items.length)return`<div class="mbody solo"><div class="mleft">${s}${t.error?X("The Ronin Market did not answer","Try again in a moment.",h("Try again","rload","","gold")):`<div class="mempty"><span class="rspin"></span>${w("Opening the Ronin Market…")}</div>`}</div></div>`;const n=t.items.map(i=>`<a class="mcard rcard" href="${e.page(encodeURIComponent(i.id))}" target="_blank" rel="noopener" aria-label="${v(i.name)}, ${at(i.price)} ${v(i.symbol)}, on the Ronin Market (opens a new tab)">
      <span class="pic" style="background-image:url('${v(String(i.image).replace(/([?&])w=\d+/,"$1w=300"))}')"></span>
      <span class="nm">${v(String(i.name).replace(/^.*?#/,"#"))}</span><span class="sub rp">${at(i.price)}<small>${v(i.symbol)}</small></span>${i.body?`<span class="sub">${v(i.body)}</span>`:""}</a>`).join(""),r=t.items.length<t.total?`<div class="rmore">${h(t.loading?"Loading…":`Show more (${m(t.total-t.items.length)} left)`,"rmore","","ghost")}</div>`:"";return`<div class="mbody solo"><div class="mleft">${s}<div class="mgrid rgrid">${n}${r}</div></div></div>`}let F=null;function ft(t,e=!1){F={text:t,ok:e,until:performance.now()+3200},$()}function gt(){const t=K(),e=L[a.place],s=a.tab==="armory"?ot(t):a.tab==="forge"?st(t):a.tab==="ronin"?mt():a.tab==="market"?dt(t):lt(t),n=a.tab==="forge"?rt(t):a.tab==="ronin"?ct():it(t),r=t.s.toast&&g.nowMs-t.s.toast.at<5e3?{text:t.s.toast.text,ok:t.s.toast.ok}:F&&performance.now()<F.until?F:null,i=a.confirm;return`<div class="mback" data-act="close"></div>
      <div class="mpanel${t.s.busy?" busy":""}" role="dialog" aria-modal="true" aria-labelledby="mtitle">
        <header class="mhead"><h1 id="mtitle">${e.name}</h1>
          <nav class="mtabs" role="tablist">${e.tabs.map(([c,o])=>`<button role="tab" aria-selected="${a.tab===c}" class="${a.tab===c?"on":""}" data-act="tab" data-tab="${c}">${o}</button>`).join("")}</nav>
          ${e.link?`<a class="mlink" href="${e.link[1]}" target="_blank" rel="noopener">${e.link[0]}<span aria-hidden="true">↗</span><span class="vh"> (opens a new tab)</span></a>`:""}
          ${n}<button class="mx" data-act="close" aria-label="Close">&times;</button></header>
        ${r?`<div class="mtoast${r.ok===!1?" bad":""}" role="status">${v(r.text)}</div>`:""}
        ${s}
        ${t.s.busy?'<div class="mwait"><span></span></div>':""}
        ${i?`<div class="mconfirm" role="alertdialog" aria-modal="true" aria-labelledby="mctitle"><div><h2 id="mctitle">${v(i.title)}</h2><p>${v(i.text)}</p>
          <div class="mcbtns">${h(v(i.cta),"yes","",i.danger?"danger":"gold")}${h("Cancel","no","","ghost")}</div></div></div>`:""}
      </div>`}let Q="";function Z(){var n,r;const t=S.state,e=F&&performance.now()<F.until,s=[(n=t.econ)==null?void 0:n.at,t.busy,(r=t.toast)==null?void 0:r.at,t.forge,t.armor,t.xp,(t.items||[]).length,JSON.stringify(t.fake||null),a.v,e,t.toast&&g.nowMs-t.toast.at<5e3,V.matches].join("|");s!==Q&&(Q=s,xt(R,`<div id="wmodal">${gt()}</div>`,{onBeforeElUpdated:(i,c)=>!(i===document.activeElement&&i.tagName==="INPUT")})),requestAnimationFrame(Z)}return requestAnimationFrame(Z),R.addEventListener("click",t=>{const e=t.target.closest("[data-act]");if(!e||!R.contains(e))return;const s=K(),n=e.dataset.act;if(n==="close"){if(a.confirm){a.confirm=null,$();return}U();return}if(n==="tab"){a.tab=e.dataset.tab,a.sheet=!1,$();return}if(n==="filter"){a.filter[a.tab]=e.dataset.f,a.pick[a.tab]=null,a.sheet=!1,$();return}if(n==="pick"){a.pick[a.tab]=e.dataset.key,a.sheet=!0,$();return}if(n==="sheet-close"){a.sheet=!1,$();return}if(n==="goto"){const r=e.dataset.tab;a.place=H[r],a.tab=r,e.dataset.f&&(a.filter[r]=e.dataset.f),e.dataset.key?(a.pick[r]=e.dataset.key,a.sheet=!0):a.sheet=!1,$();return}if(n==="qty"){const r=+e.dataset.tier,i=Math.max(1,Math.min(s.bound(r).length,s.mintsLeft));a.qty[r]=Math.max(1,Math.min(i,(a.qty[r]||1)+ +e.dataset.d)),$();return}if(n==="price"){a.price[+e.dataset.nft]=e.dataset.v,$();return}if(n==="link"){window.open(e.dataset.href,"_blank","noopener");return}if(n==="rmore"){a.rm.pages++,B();return}if(n==="rload"){a.rm.error=null,B();return}if(n!=="rcol"){if(n==="ask"){a.confirm=pt(e.dataset.ask,e,s),$();return}if(n==="yes"){const r=a.confirm;a.confirm=null,$(),r==null||r.run();return}if(n==="no"){a.confirm=null,$();return}if(n==="do"){const r=e.dataset.do;r==="equip"?N("equip",{equip:{kind:"set",tier:+e.dataset.tier}}):r==="unlist"?N("unlist",{unlist:+e.dataset.id}):r==="fake"?N("fake",{fake:{ronkeverse:+e.dataset.r,oneOfOne:+e.dataset.o,colored:+e.dataset.c,rarest:e.dataset.rarest||""}}):N(r);return}}}),R.addEventListener("input",t=>{t.target.id==="mprice"&&(a.price[+t.target.dataset.nft]=t.target.value)}),R.addEventListener("change",t=>{t.target.id==="mprice"&&$()}),addEventListener("focus",()=>{var t;document.activeElement===document.body&&((t=R.querySelector(".mx"))==null||t.focus({preventScroll:!0}))}),addEventListener("keydown",t=>{t.key==="Escape"&&(a.confirm?(a.confirm=null,$()):a.sheet&&V.matches?(a.sheet=!1,$()):U())}),{open(t,e){a.place=L[e]?e:H[t]||a.place,a.tab=L[a.place].tabs.some(([s])=>s===t)?t:L[a.place].tabs[0][0],a.sheet=!1,a.confirm=null,$()}}}export{Tt as startModal};

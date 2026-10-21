import{m as Lt}from"./morphdom-esm-DUuvMkUq.js";import{J as at}from"./joust-2BfEs9QO.js";import{l as Bt,S as w,v as h,B as Q,s as rt,u as W,Q as G,T as gt,J,g as Ft,I as Yt,M as ut,K as xt,L as D,N as bt}from"./main-2SLqzhXQ.js";import{m as It}from"./houseQuests-DaoSq5KB.js";import{g as _t,c as Wt}from"./chain-DKLIdc6c.js";const Gt=`/* The village's modals (src/modal/modal.js). Paper: art/ui/paper.webp, a tileable parchment made with SVG filters\r
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
.mx{width:40px;height:40px;border:0;border-radius:50%;background:none;font-size:32px;line-height:1;padding:0}\r
/* no square ring around the × (Rafael, 17/10: "odeio esse quadrado que fica"): the dialog takes the focus when it opens\r
   (modal.js), and a key user tabbing to the × sees a soft round mark instead of the browser's square */\r
.mx:focus,.mpanel:focus{outline:none}\r
.mx:focus-visible{background:rgba(43,26,13,.14)}\r
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
/* a tab or a button that waits (17/10, the Market's Armor market and Season pass): grey with a Soon badge, no click,\r
   like the village's Joust Arena card (build_realm.py .go.off) */\r
.mtabs button.soon{display:inline-flex;align-items:center;gap:6px;color:#8a7d6c;cursor:default}\r
.mtabs button.soon small,.mbtn.soon small{padding:1px 7px;border-radius:999px;background:#4a4038;color:#efe7da;font-size:10px;font-weight:700;letter-spacing:.06em;line-height:1.5;text-transform:uppercase}\r
.mbtn.soon{flex-direction:row;gap:8px;cursor:default;color:#5d544b;background:linear-gradient(#d8d0c4,#b2a99c);box-shadow:0 0 0 2px #4a4038,0 5px 0 2px #4a4038,inset 0 3px 0 rgba(255,255,255,.4)}\r
.mbtn.soon:active{transform:none;box-shadow:0 0 0 2px #4a4038,0 5px 0 2px #4a4038,inset 0 3px 0 rgba(255,255,255,.4)}\r
@media (max-width:700px) and (min-height:501px),(max-width:700px) and (orientation:portrait),(orientation:landscape) and (max-height:500px){\r
  /* the three tabs still on one line (and a phone held sideways keeps its header on one row): Soon under the name */\r
  .mtabs button.soon{flex-direction:column;justify-content:center;gap:1px;padding:3px 8px;font-size:12px;line-height:1.1}\r
  .mtabs button.soon small{padding:0 6px;font-size:9px}\r
}\r
/* the Ronin Market's line with its Live pill on one row (17/10); a header without a pill keeps its × at the end */\r
.mleadrow{display:flex;align-items:center;flex-wrap:wrap;gap:6px 14px;margin:0 0 10px}\r
.mleadrow .mlead{flex:1 1 320px;margin:0}\r
.mhead.nochip .mx{margin-left:auto}\r
.mhead .hlive{display:none}\r
@media (max-width:700px) and (min-height:501px),(max-width:700px) and (orientation:portrait){\r
  .mhead .hlive{display:inline-flex}   /* upright, the pill stays by Buy $HORSKE, as before */\r
  .mleadrow .mchip.live{display:none}\r
}\r
/* the Tavern (17/10): the quests, each a row with its seal, what it asks and where it stands; today's chance beside them */\r
.mbody.tavern{grid-template-columns:minmax(0,1.25fr) minmax(0,1fr)}\r
.qlist{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:7px}\r
.qrow{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:12px;padding:6px 12px;border:2px solid rgba(43,26,13,.5);border-radius:10px;background:rgba(255,248,230,.55)}\r
.qrow.on{border-color:var(--green);background:rgba(226,242,214,.62)}\r
.qseal{display:grid;place-items:center;width:44px;height:44px;border-radius:50%;border:3px solid var(--ink);background:radial-gradient(circle at 35% 35%,#ffe9a0,#e0a91f 62%,#9a6a12);box-shadow:0 3px 0 rgba(43,26,13,.35);font-weight:900;font-size:21px;line-height:1;color:var(--ink)}\r
a.mbtn{text-decoration:none}\r
.qrow.on .qseal{background:radial-gradient(circle at 35% 35%,#bfe8aa,#3a8a43 66%,#24602c);color:#fff} /* its size: .qseal, per layout */\r
.qtxt{display:flex;flex-direction:column;gap:2px;min-width:0}\r
.qtxt b{font-size:15px;line-height:1.15}\r
.qtxt small{font-size:12.5px;line-height:1.3;color:#6a5236}\r
.qside{display:flex;flex-direction:column;align-items:flex-end;gap:2px;text-align:right;font-size:14px;white-space:nowrap}\r
.qside small{font-size:12px;color:#7a6446}\r
.qside .mbtn{min-width:118px}\r
.qok{color:var(--green);font-weight:700}\r
.qsoon{color:#7a6446;font-size:13px}\r
.qprog b{font-size:20px}\r
/* the Tavern on the chain (20/10): the post's link pasted under its quest, small links, the house's message */\r
.qx{grid-column:2/-1;display:flex;gap:6px;min-width:0}\r
.qx input{flex:1;min-width:0;padding:6px 9px;border:2px solid rgba(43,26,13,.55);border-radius:8px;background:#fffdf6;font:inherit;font-size:13.5px;color:var(--ink)}\r
.qx input:focus-visible{outline:3px solid var(--navy);outline-offset:1px}\r
.qx .mbtn{min-width:0;padding-inline:14px}\r
.qlink{font-size:12.5px;font-weight:700;color:var(--navy);text-decoration:underline;text-underline-offset:2px}\r
.qlinkbtn{padding:0;border:0;background:none;font:inherit;font-weight:700;color:var(--navy);text-decoration:underline;text-underline-offset:2px;cursor:pointer}\r
.qbad{color:#9b2c1f}\r
.qbig{font-family:var(--gothic);font-weight:900;color:var(--navy)}\r
.qbig small{font-family:var(--ui);font-size:16px;font-weight:500;color:#6a5236}\r
.mchip.qchip{padding:5px 14px;color:var(--green)}\r
.qnote{margin-top:10px;font-size:13px;color:#6a5236}\r
.qseg{display:inline-flex;flex-wrap:wrap;gap:6px}\r
.qseg .mf{padding:4px 12px}\r
.qside .qseg .mf{padding:3px 11px;font-size:13px}\r
/* the Ronke Score's test switch, under the chance's lines */\r
.qtiers{display:flex;flex-direction:column;gap:6px;margin:12px 0 0}\r
.qtiers>span:first-child{font-size:13px;font-weight:700;color:#6a5236}\r
.qtiers .mf{padding:3px 10px;font-size:13px}\r
@media (max-width:700px) and (min-height:501px),(max-width:700px) and (orientation:portrait){\r
  .mbody.tavern{grid-template-columns:1fr}\r
  .qrow{grid-template-columns:auto minmax(0,1fr);gap:6px 10px;padding:9px 10px}\r
  .qside{grid-column:2;flex-direction:row;align-items:center;flex-wrap:wrap;gap:4px 10px;text-align:left}\r
  .qseal{width:44px;height:44px;font-size:21px}\r
  .mchip.qchip{order:1;padding:4px 10px} /* no tabs here: the chip sits by the title and the close button stays at the end */\r
}\r
@media (orientation:landscape) and (max-height:500px){\r
  .qrow{gap:10px;padding:6px 10px}\r
  .qseal{width:40px;height:40px;font-size:19px}\r
  .qtxt b{font-size:15px}.qtxt small{font-size:12px}\r
  .tavern .mcardbox{padding:10px 12px 12px}\r
  .tavern .mcardbox h3{font-size:22px}\r
}\r
`,it="https://app.roninchain.com/swap?outputCurrency=0xc0Ca45c2e9448D3876Ca86220B2418C719298396",Dt={ronkeverse:{name:"Ronkeverse",page:u=>`https://marketplace.roninchain.com/collections/ronkeverse/${u}`}},Ht="/api/ronin-market",yt=48,Qt=3e4,F={smith:{name:"The Blacksmith",tabs:[["armory","Armory"],["forge","Forge"]]},market:{name:"The Market",tabs:[["ronin","Ronin Market"],["market","Armor market"],["season","Season pass"]],link:["Buy $HORSKE",it]},tavern:{name:"The Tavern",tabs:[["quests","Quests"]]}},U={armory:"smith",forge:"smith",ronin:"market",market:"market",season:"market",quests:"tavern"},B=new Set(["market","season","armory","forge"]),kt=u=>(F[u].tabs.find(([A])=>!B.has(A))||F[u].tabs[0])[0],E=u=>u>=9?"r4":u>=7?"r3":u>=4?"r2":"r1",X={r1:"Common",r2:"Rare",r3:"Epic",r4:"Legendary"},f=u=>String(u??"").replace(/[&<>"]/g,A=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[A]),L=u=>at.armors.find(A=>A.tier===u)||at.armors[0],K=u=>u.portrait?`background-image:url(${Yt(u.portrait)})`:"",R=u=>`${+(Math.round(u*1e4)/100).toFixed(2)}%`,j=u=>`+${R(u)}`,vt=u=>u>=1e3?h(Math.round(u)):String(Math.round(u*100)/100),$t=u=>new Date(u).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"});let nt=null;function wt(){if(nt==null)try{nt=!!Wt().on}catch{nt=!1}return nt}function Zt({room:u,player:A,quests:S,door:ot,place:lt,onClose:dt}){const o={place:Object.hasOwn(F,lt??"")?lt:Object.hasOwn(U,ot??"")?U[ot]:"market",tab:ot,filter:{armory:"all",forge:"all",market:"sale"},pick:{},sheet:!1,confirm:null,qty:{},price:{},rm:{key:"ronkeverse",items:[],total:0,pages:1,loading:!1,error:null,at:0},v:0};(!F[o.place].tabs.some(([t])=>t===o.tab)||B.has(o.tab))&&(o.tab=kt(o.place)),document.head.insertAdjacentHTML("beforeend",`<style id="web-modal">${Gt}</style>`);const O=document.createElement("div");O.id="wmodal",document.body.appendChild(O);const pt=matchMedia("(max-width: 700px) and (min-height: 501px), (max-width: 700px) and (orientation: portrait)"),T=(t,e)=>window.sendAction(t,e),q=()=>{o.v++},N=wt()?_t():null,v=N?It(N):null;N&&(N.restore().catch(()=>{}),N.loadJackpot().catch(()=>{}));function ct(){const t=A.state,e=t.econ||null,s=e?e.season:1,n=Bt(t.xp),c=t.items||[],d=(e&&e.nfts||[]).filter(g=>g.season===s),r=!!(e&&e.pass),x=r?Math.max(0,w.pass.mintCap-(e.mints||0)):0,k=g=>c.filter(m=>m.tier===g),$=g=>d.filter(m=>m.tier===g);return{s:t,ec:e,season:s,lvl:n,items:c,nftsNow:d,hasPass:r,mintsLeft:x,bound:k,mine:$,owns:g=>g===1||$(g).length>0,coins:e?e.horske:null,forge:t.forge||0,worn:t.armor||1}}const qt=t=>`<span class="mchip"><i class="coin"></i>${t.coins==null?"…":h(t.coins)}</span>`,zt=t=>`<span class="mchip"><i class="flame"></i>${h(t.forge)} <small>forge points</small></span>`,y=(t,e,s="",n="gold",c="")=>`<button class="mbtn ${n}" data-act="${e}" ${s}>${t}${c?`<small>${c}</small>`:""}</button>`,H=(t,e,s="",n="navy")=>B.has(e)?`<button class="mbtn soon" disabled aria-disabled="true">${t}<small>Soon</small></button>`:y(t,"goto",`data-tab="${e}" ${s}`,n),z=(t,e="")=>`<p class="mnote ${e}">${t}</p>`,V=({key:t,a:e,tags:s="",sub:n="",locked:c=!1,worn:a=!1,count:d=0,badge:r=""})=>{const x=e.tier,k=o.pick[o.tab]===t;return`<button class="mcard ${E(x)}${c?" lk":""}${k?" sel":""}" data-act="pick" data-key="${t}" aria-pressed="${k}">
      <span class="pic" style="${K(e)}">${c?`<span class="lock">${c}</span>`:""}${d>1?`<span class="cnt">×${d}</span>`:""}</span>
      <span class="nm">${f(e.name)}</span><span class="sub">${n}</span>${s}${r?`<span class="badge">${r}</span>`:""}${a?'<span class="tag worn">Worn</span>':""}</button>`},st=(t,e)=>`<div class="mfilters" role="tablist">${e.map(([s,n,c])=>`<button class="mf${o.filter[t]===s?" on":""}" data-act="filter" data-f="${s}">${n}<small>${c}</small></button>`).join("")}</div>`,Y=(t,e,s)=>`<div class="mempty"><h2>${t}</h2>${z(e)}<div class="dact">${s}</div></div>`,Z=t=>`<aside class="mdet${o.sheet?" up":""}"><button class="mdx" data-act="sheet-close" aria-label="Close the details">&times;</button>${t}</aside>`;function Mt(t){const e=at.armors.map(i=>{const b=i.tier,C=W(b)>t.lvl,M=t.owns(b),_=t.bound(b).length;return{a:i,t:b,lock:C,have:M,mint:_,yours:M||_>0,nft:t.mine(b).length}}),s=o.filter.armory,n=e.filter(i=>s==="all"||(s==="yours"?i.yours:i.lock));(!o.pick.armory||!e.some(i=>"t"+i.t===o.pick.armory))&&(o.pick.armory="t"+t.worn);const c=n.map(i=>V({key:"t"+i.t,a:i.a,worn:t.worn===i.t,locked:i.lock?`Level ${W(i.t)}`:!1,count:i.nft+i.mint,badge:`+${Math.round(rt(i.t)*100)}`,sub:i.t===1?"Starter":`${X[E(i.t)]} · tier ${i.t}`,tags:i.mint&&!i.have?'<span class="tag mint">Mint</span>':i.mint?`<span class="tag mint">+${i.mint} to mint</span>`:""})).join("")||z(s==="locked"?"Every set is open to you.":"Nothing here yet."),a=e.find(i=>"t"+i.t===o.pick.armory)||e[0],d=a.t,r=a.a,x=a.mint,k=t.mine(d);let $="";if(a.lock?$=z(`You wear this set from level ${W(d)}. You are level ${t.lvl}: beat the bosses in the Joust Arena to level up.`,"lock"):t.worn===d?$=z("You are wearing this set.","ok"):a.have&&($=y("Wear this set","do",`data-do="equip" data-tier="${d}"`)),x)if(!t.hasPass)$+=z("A set you win is bound to you until you mint it, and minting needs the season pass.")+H("Get the season pass","season");else if(!t.mintsLeft)$+=z(`Your pass has no mints left (${w.pass.mintCap} used).`);else{const i=Math.max(1,Math.min(x,t.mintsLeft)),b=Math.min(i,o.qty[d]||1);$+=(i>1?`<div class="mqty"><button data-act="qty" data-tier="${d}" data-d="-1" aria-label="One less">−</button><b>${b}</b><button data-act="qty" data-tier="${d}" data-d="1" aria-label="One more">+</button><span>of ${x} to mint</span></div>`:"")+y(a.lock?b>1?`Mint ${b}`:"Mint":b>1?`Mint ${b} to wear`:"Mint to wear","ask",`data-ask="mint" data-tier="${d}" data-n="${b}"`,"gold",`${h(w.mintPrice*b)} coins`)}!a.lock&&!a.have&&!x&&d!==1&&($+=z("Not yours yet: win it from a boss in the Joust Arena, forge it at the forge, or buy one in the market.")+H("See the market","market"));const l=k.length?`<div class="mlist"><b>Your NFTs of this set</b>${k.map(i=>`<div class="mli"><span>NFT #${i.id}${i.listing?` · on sale for ${h(i.price)}`:""}</span>${i.listing?y("Cancel sale","do",`data-do="unlist" data-id="${i.listing}"`,"ghost"):H("Sell","market",`data-f="sell" data-key="n${i.id}"`,"ghost")}</div>`).join("")}</div>`:"",g=Z(`<div class="dpic ${E(d)}" style="${K(r)}"></div><div class="dinfo"><h2>${f(r.name)}</h2>
      <p class="dsub">${d===1?"The starter":`${X[E(d)]} set · tier ${d}`}${a.nft+x?` · you own ${a.nft+x}`:""}</p>
      <dl class="dstats"><dt>Set bonus</dt><dd>+${Math.round(rt(d)*100)}</dd><dt>Hit bonus</dt><dd>+${R(r.bonus||0)}</dd><dt>Defense</dt><dd>+${R(r.def||0)}</dd><dt>Wear at</dt><dd>Level ${W(d)}</dd></dl></div>
      <div class="dact">${$}${l}</div>`),m=e.filter(i=>i.yours).length,p=e.filter(i=>i.lock).length;return`<div class="mbody"><div class="mleft">${st("armory",[["all","All",e.length],["yours","Yours",m],["locked","Locked",p]])}<div class="mgrid">${c}</div></div>${g}</div>`}function St(t){const e=t.nftsNow.filter(l=>!l.listing),s={};e.forEach(l=>(s[l.tier]=s[l.tier]||[]).push(l));const n=at.armors.filter(l=>l.tier>=2).map(l=>({a:l,t:l.tier,cost:Q(l.tier),melt:s[l.tier]||[]})),c=o.filter.forge,a=n.filter(l=>c==="all"||(c==="melt"?l.melt.length:t.forge>=l.cost));(!o.pick.forge||!n.some(l=>"t"+l.t===o.pick.forge))&&(o.pick.forge="t"+(n.find(l=>l.melt.length)||n.find(l=>t.forge>=l.cost)||n[0]).t);const d=a.map(l=>V({key:"t"+l.t,a:l.a,count:l.melt.length,sub:`Forge for ${h(l.cost)} pt${l.cost===1?"":"s"}`,tags:l.melt.length?`<span class="tag melt">Melt +${h(l.cost)}</span>`:"",badge:t.forge>=l.cost?"✓":""})).join("")||z(c==="melt"?"Nothing to melt: only NFTs melt, and a set you win is minted first (the season pass).":"No set within your points yet."),r=n.find(l=>"t"+l.t===o.pick.forge)||n[0];let k=t.forge>=r.cost?y(`Forge ${f(r.a.name)}`,"ask",`data-ask="forge" data-tier="${r.t}"`,"gold",`${h(r.cost)} forge point${r.cost===1?"":"s"}`):z(`It takes ${h(r.cost)} forge point${r.cost===1?"":"s"} and you have ${h(t.forge)}. Melt NFTs to get points.`);r.melt.length&&(k+=y(`Melt one${r.melt.length>1?` of ${r.melt.length}`:""}`,"ask",`data-ask="burn" data-tier="${r.t}" data-id="${r.melt[0].id}"`,"danger",`+${h(r.cost)} forge point${r.cost===1?"":"s"}`));const $=Z(`<div class="dpic ${E(r.t)}" style="${K(r.a)}"></div><div class="dinfo"><h2>${f(r.a.name)}</h2>
      <p class="dsub">${X[E(r.t)]} set · tier ${r.t}</p>
      <dl class="dstats"><dt>Forge cost</dt><dd>${h(r.cost)} pt${r.cost===1?"":"s"}</dd><dt>A melt gives</dt><dd>+${h(r.cost)} pt${r.cost===1?"":"s"}</dd><dt>Wear at</dt><dd>Level ${W(r.t)}</dd><dt>Yours to melt</dt><dd>${r.melt.length}</dd></dl></div>
      <div class="dact">${k}</div>`);return`<div class="mbody"><div class="mleft"><p class="mlead">Melt your NFTs into forge points, and forge any set with them. A tier is worth twice the one below.</p>
      ${st("forge",[["all","All sets",n.length],["melt","Yours to melt",n.filter(l=>l.melt.length).length],["can","Within your points",n.filter(l=>t.forge>=l.cost).length]])}<div class="mgrid">${d}</div></div>${$}</div>`}function Tt(t){const e=t.ec&&t.ec.market||[],s=A.userId,n=t.nftsNow.filter(m=>!m.listing),c=o.filter.market,a=e.filter(m=>c==="mine"?m.seller===s:!0),d=t.ec&&t.ec.trades||{n:0,vol:0};let r,x="";const k=`<p class="mlead">${e.length} for sale · ${d.n} sold · ${h(d.vol)} traded · ${w.royalty}% of every sale goes to the prize pool</p>
      ${st("market",[["sale","For sale",e.length],["mine","Your listings",e.filter(m=>m.seller===s).length],["sell","Sell yours",n.length]])}`,$=H("Go to the armory","armory"),l=y("Sell one of yours","filter",'data-f="sell"',"gold"),g=(m,p,i)=>`<div class="mbody solo"><div class="mleft">${k}${Y(m,p,i)}</div></div>`;if(c==="sell"&&!n.length)return g("Nothing to sell","A set you win is bound to you until you mint it, and minting needs the season pass.",$+(t.hasPass?"":H("Get the season pass","season","","gold")));if(c!=="sell"&&!a.length)return g(c==="mine"?"Nothing of yours on sale":"Nothing on sale yet",c==="mine"?"List one of your NFTs and it shows here.":"Mint a set at the Blacksmith and be the first to list one.",n.length?l:$);if(c==="sell"){(!o.pick.market||!n.some(p=>"n"+p.id===o.pick.market))&&(o.pick.market=n[0]?"n"+n[0].id:null),r=n.map(p=>V({key:"n"+p.id,a:L(p.tier),sub:`NFT #${p.id}`,badge:""})).join("");const m=n.find(p=>"n"+p.id===o.pick.market);if(m){const p=L(m.tier),i=e.filter(M=>M.tier===m.tier).reduce((M,_)=>Math.min(M,_.price),1/0),b=o.price[m.id]??"",C=[i<1/0?i:null,Q(m.tier)*5e3,w.mintPrice*2].filter((M,_,jt)=>M&&jt.indexOf(M)===_).slice(0,3);x=Z(`<div class="dpic ${E(m.tier)}" style="${K(p)}"></div><div class="dinfo"><h2>${f(p.name)}</h2><p class="dsub">NFT #${m.id} · ${X[E(m.tier)]}</p>
          <dl class="dstats"><dt>Cheapest on sale</dt><dd>${i<1/0?h(i):"none"}</dd><dt>Royalty</dt><dd>${w.royalty}% to the pool</dd></dl></div>
          <div class="dact"><label class="mprice">Your price<input id="mprice" data-nft="${m.id}" type="number" min="1" step="1" inputmode="numeric" value="${f(b)}" placeholder="0"><span>coins</span></label>
          ${C.length?`<div class="msugg">${C.map(M=>`<button data-act="price" data-nft="${m.id}" data-v="${M}">${h(M)}</button>`).join("")}</div>`:""}
          ${y("List for sale","ask",`data-ask="list" data-id="${m.id}"`,"gold",b?`${h(+b)} coins`:"")}</div>`)}}else{(!o.pick.market||!a.some(p=>"l"+p.id===o.pick.market))&&(o.pick.market=a[0]?"l"+a[0].id:null),r=a.map(p=>V({key:"l"+p.id,a:L(p.tier),sub:`<i class="coin"></i>${h(p.price)}`,tags:p.seller===s?'<span class="tag worn">Yours</span>':""})).join("");const m=a.find(p=>"l"+p.id===o.pick.market);if(m){const p=L(m.tier),i=m.seller===s,b=(t.coins||0)>=m.price,C=i?y("Cancel the sale","do",`data-do="unlist" data-id="${m.id}"`,"navy"):b?y("Buy","ask",`data-ask="buy" data-id="${m.id}"`,"gold",`${h(m.price)} coins`):z(`It costs ${h(m.price)} and you have ${h(t.coins||0)}.`)+y("Buy $HORSKE","link",`data-href="${it}"`,"navy");x=Z(`<div class="dpic ${E(m.tier)}" style="${K(p)}"></div><div class="dinfo"><h2>${f(p.name)}</h2><p class="dsub">${i?"Your listing":`Sold by ${f(m.name||"a knight")}`} · ${X[E(m.tier)]}</p>
          <dl class="dstats"><dt>Price</dt><dd>${h(m.price)}</dd><dt>Set bonus</dt><dd>+${Math.round(rt(m.tier)*100)}</dd><dt>Wear at</dt><dd>Level ${W(m.tier)}</dd></dl></div><div class="dact">${C}</div>`)}}return`<div class="mbody"><div class="mleft">${k}<div class="mgrid">${r}</div></div>${x}</div>`}function Rt(t){const e=t.ec,s=e&&e.pool||{pass:0,mint:0,royalty:0,pod:0,paid:0},n=s.pass+s.mint+s.royalty+s.pod,c=(p,i)=>`<div class="pbar"><span>${p}</span><i><b style="width:${n?Math.round(i/n*100):0}%"></b></i><em>${h(i)}</em></div>`,a=[["Ranked jousts","free, against other knights' ghosts; Elo shares the prize pool"],["Mint your sets",`${h(w.mintPrice)} each, up to ${w.pass.mintCap}, all to the prize pool`],[`${w.pass.freeRuns} free bouts a day`,`instead of ${w.freeRuns}`],[`×${w.pass.dropMult} drop chance`,"from every boss"]],d=t.s,r=d.fake||{ronkeverse:0,oneOfOne:0},x=r.colored||0,k=(p,i,b)=>`<button class="mbtn ghost sm" data-act="do" data-do="fake" data-r="${Math.max(0,p)}" data-o="${Math.max(0,i)}" data-c="${x}" data-rarest="${f(r.rarest||"")}">${b}</button>`,$=`<section class="mcardbox pass"><h3>Season ${t.season} pass</h3>
      <ul class="perks">${a.map(([p,i])=>`<li><b>${p}</b><span>${i}</span></li>`).join("")}</ul>
      ${t.hasPass?z(`✓ Yours · ${e.mints}/${w.pass.mintCap} mints used`,"ok"):`${y("Buy the pass","ask",'data-ask="buyPass"',"gold",`${h(w.pass.price)} coins`)}${z(`${Math.round(w.pass.toPool*100)}% of the price goes to the prize pool.`)}`}</section>`,l=`<section class="mcardbox"><h3>Prize pool</h3><p class="big"><i class="coin"></i>${h(n-s.paid)}</p>
      ${c("Passes",s.pass)}${c("Mints",s.mint)}${c("Royalties",s.royalty)}${c("PoD",s.pod)}
      ${z(`At the season's end the top ${Math.round(w.payoutShare*100)}% of ranked knights share it, more for a higher place.`)}</section>`,g=`<section class="mcardbox"><h3>How the season works</h3><ol class="how"><li>Joust the bosses to level up (0 to 20); a win can drop a set.</li><li>A set that drops is minted (season pass) before you wear it or sell it here.</li><li>Climb ranked: at the season's end the top ${Math.round(w.payoutShare*100)}% share the prize pool.</li></ol>${z("Play money for now: the coins, the pass and the NFTs here are not on a chain yet.")}</section>`,m=d.tools?`<section class="mcardbox tools"><h3>Test tools · play money</h3>
      <div class="trow"><span>Ronkeverse NFTs</span>${k(r.ronkeverse-5,r.oneOfOne,"−5")}<b>${r.ronkeverse}</b>${k(r.ronkeverse+5,r.oneOfOne,"+5")}</div>
      <div class="trow"><span>1/1 NFTs</span>${k(r.ronkeverse,r.oneOfOne-1,"−1")}<b>${r.oneOfOne}</b>${k(r.ronkeverse,r.oneOfOne+1,"+1")}</div>
      <div class="trow">${y(`+${h(w.faucet)} coins`,"do",'data-do="faucet"',"gold sm")}${y("Refresh","do",'data-do="sync"',"navy sm")}${y("Reset my season","ask",'data-ask="resetMe"',"ghost sm")}</div></section>`:"";return`<div class="mbody season"><div class="scol">${$}${g}</div><div class="scol">${l}${m}</div></div>`}const Ot=t=>new Date(t*1e3).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}),tt=t=>t==null?0:Number(BigInt(t)/10n**18n);function Nt(t){var m;const e=N.state,s=v.state,n=v.view(),c=p=>`<div class="mbody solo"><div class="mleft">${p}</div></div>`;if(!e.address)return c(Y("Connect your wallet","The house checks your quests on the chain for the wallet you connect.",y(e.busy==="connect"?"Waiting for your wallet…":"Connect Ronin Wallet","qconnect","","gold")));if(!n)return((m=s.error)==null?void 0:m.code)==="signin_needed"?c(Y("Sign in to see your quests","One signature in your wallet, no transaction: the house then checks your quests for this wallet.",y(s.busy?"Waiting for your wallet…":"Sign in","qsignin","","gold"))):s.error&&!s.busy?c(Y("The house did not answer",f(s.error.message),y("Try again","qreload","","gold"))):c(`<div class="mempty"><span class="rspin"></span>${z("Reading your quests from the house…")}</div>`);const a=N.jackpotUsd(),d=n.code,r=(p,i)=>{var b,C;if(p==="checkin")return i?'<span class="qok">✓ Done today</span>':y(s.busy==="checkin"?"Checking in…":"Check in","qcheckin","","gold sm");if(p==="xpost")return i?`<span class="qok">✓ Posted today</span>${n.post?`<a class="qlink" href="${f(n.post)}" target="_blank" rel="noopener">see the post ↗</a>`:""}`:`<a class="mbtn gold sm" href="${f(xt(a!=null&&a>=1?a:null,d))}" target="_blank" rel="noopener">Post on X<span class="vh"> (opens X in a new tab)</span></a>`;if(p==="lock")return i?`<span class="qok">✓ ${h(tt((b=n.lock)==null?void 0:b.amount))} locked</span><small>until ${Ot(n.lock.until)}</small>`:n.lockAddress?`<span class="qsoon">Lock on Ronin</span><small>${h(tt((C=n.lock)==null?void 0:C.amount))} locked now</small>`:'<span class="qsoon">Opens soon</span><small>the lock goes live on Ronin</small>';if(p==="weekly")return i?`<span class="qok">✓ ${h(tt(n.boughtWeek))} this week</span>`:!n.buysReady||n.boughtWeek==null?'<span class="qsoon">Counting your buys…</span>':`<span class="qprog"><b>${h(Math.min(1e4,tt(n.boughtWeek)))}</b>/10,000</span><a class="qlink" href="${it}" target="_blank" rel="noopener">Buy $HORSKE ↗</a>`;if(p==="bouts"){const M=n.bouts||{today:0,yesterday:0};return`<span class="qprog"><b>${Math.min(D,M.today)}/${D}</b> today</span><small>${i?`active: ${M.yesterday} yesterday`:M.today>=D?"counts tomorrow":"for tomorrow"}</small>`}return i?`<span class="qok">✓ ${h(n.ronkes)} Ronke${n.ronkes===1?"":"s"}</span>`:n.ronkes==null?'<span class="qsoon">Not read yet</span>':'<button class="mbtn ghost sm" data-act="goto" data-tab="ronin">Get a Ronke</button>'},x=G.map(p=>{const i=!!n.on[p.id],b=p.id==="xpost"&&!i?`${p.text.split(":")[0]}: post it with your code ${d}, then paste the post's link here.`:p.id==="lock"?"Lock 100,000 HORSKE for 90 days. The bonus holds while it stays locked.":p.text,C=p.id==="xpost"&&!i?`<div class="qx"><input id="qxurl" type="url" inputmode="url" placeholder="https://x.com/you/status/…" aria-label="Your post's link" value="${f(o.qx||"")}"><button class="mbtn navy sm" data-act="qxcheck">${s.busy==="post"?"Checking…":"Check"}</button></div>`:"";return`<li class="qrow${i?" on":""}"><span class="qseal" aria-hidden="true">${i?"✓":"+"}</span>
        <span class="qtxt"><b>${f(p.name)}</b><small>${f(b)}</small></span><span class="qside">${r(p.id,i)}</span>${C}</li>`}).join(""),k=`<section class="mcardbox"><h3>Quests</h3><p class="mlead">All ${G.length} together add ${j(bt)} to your chance in Fight the house. The house checks each one on the chain.</p><ul class="qlist">${x}</ul>
      <p class="mnote qnote">${s.error?`<b class="qbad">${f(s.error.message)}</b> `:""}Checked at ${$t(s.at)} · <button class="qlinkbtn" data-act="qfresh">${s.busy==="load"?"Reading…":"Read again"}</button></p></section>`,$=v.chance(),l=n.rank==null?null:gt.filter(p=>p.rank&&n.rank<=p.rank).sort((p,i)=>p.rank-i.rank)[0]??null,g=`<section class="mcardbox pass"><h3>Your chance today</h3>
      <p class="big qbig">${R($.lo)} <small>to</small> ${R($.hi)}</p>
      <dl class="dstats"><dt>Everyone</dt><dd>${R(J)}</dd><dt>Quests (${n.n} of ${G.length})</dt><dd>${j(n.questBps/1e4)}</dd>
        <dt>Ronke Score${n.rank!=null?` (rank ${h(n.rank)}${l?`, ${f(l.name)}`:""})`:""}</dt><dd>${j(n.scoreBps/1e4)}</dd><dt>Perfect taps</dt><dd>up to +3%</dd></dl>
      ${n.questBps+n.scoreBps>n.maxExtraBps?`<p class="mnote qnote">The arena takes up to ${j(n.maxExtraBps/1e4)} from the quests and the Ronke Score together.</p>`:""}
      <p class="mnote qnote">Ronke Score is your wallet's rank on ronkeverse.com/score: top 69 +2%, top 100 +1.5%, top 200 +1%, top 500 +0.5%. The house signs your bonus into each bet. Your chance never goes above ${R(ut)}. A win pays 2x.</p></section>`;return`<div class="mbody season tavern"><div class="scol">${k}</div><div class="scol">${g}</div></div>`}function Ct(t){if(v)return Nt();const e=S?S.view():null;if(!e)return`<div class="mbody solo"><div class="mleft">${z("The quests run with the site's rules (not with ?spawn).")}</div></div>`;const s=t.s.tools,n=e.bouts,c=(l,g,m)=>`<span class="qseg" role="group" aria-label="${f(m)}">${[[0,"Off"],[1,"On"]].map(([p,i])=>`<button class="mf${+g===p?" on":""}" data-act="qset" data-k="${l}" data-v="${p}" aria-pressed="${+g===p}">${i}</button>`).join("")}</span>`,a=(l,g)=>l.test?s?`${c(l.id,g,`Test switch: ${l.name}`)}<small>test switch</small>`:'<span class="qsoon">With your wallet</span>':l.id==="checkin"?g?'<span class="qok">✓ Done today</span>':y("Check in","qcheck","","gold sm"):l.id==="xpost"?g?'<span class="qok">✓ Posted today</span>':`<a class="mbtn gold sm" href="${f(xt())}" target="_blank" rel="noopener" data-act="qpost">Post on X<span class="vh"> (opens X in a new tab)</span></a>`:`<span class="qprog"><b>${Math.min(D,n.today)}/${D}</b> today</span><small>${n.today>=D?"counts tomorrow":"for tomorrow"}</small>`,d=G.map(l=>{const g=e.on[l.id],m=l.id==="bouts"&&g?`${l.text} Active today: ${n.yesterday} bets yesterday.`:l.text;return`<li class="qrow${g?" on":""}"><span class="qseal" aria-hidden="true">${g?"✓":"+"}</span>
        <span class="qtxt"><b>${f(l.name)}</b><small>${f(m)}</small></span><span class="qside">${a(l,g)}</span></li>`}).join(""),r=`<section class="mcardbox"><h3>Quests</h3><p class="mlead">All ${G.length} together add ${j(bt)} to your chance in Fight the house.</p><ul class="qlist">${d}</ul></section>`,x=s?`<div class="qtiers"><span>Test switch: your Ronke Score</span><span class="qseg" role="group" aria-label="Test switch: your Ronke Score">${gt.map(l=>`<button class="mf${e.tier.id===l.id?" on":""}" data-act="qset" data-k="tier" data-v="${l.id}" aria-pressed="${e.tier.id===l.id}">${f(l.name)}</button>`).join("")}</span></div>`:"",k=wt(),$=`<section class="mcardbox pass"><h3>Your chance today</h3>
      <p class="big qbig">${R(k?J:e.lo)} <small>to</small> ${R(k?J+Ft():e.hi)}</p>
      ${k?`<p class="mnote qnote">Saigon test: bets on the chain ride at ${R(J)} plus the bar. Your quests and Ronke Score count once the house carries them.</p>`:""}
      <dl class="dstats"><dt>Everyone</dt><dd>${R(J)}</dd><dt>Quests (${e.n} of ${G.length})</dt><dd>${j(e.quests)}</dd>
        <dt>Ronke Score${e.tier.id?` (${f(e.tier.name)})`:""}</dt><dd>${j(e.score)}</dd><dt>Perfect taps</dt><dd>up to +3%</dd></dl>
      ${x}
      <p class="mnote qnote">Ronke Score is your wallet's rank on ronkeverse.com/score: top 69 +2%, top 100 +1.5%, top 200 +1%, top 500 +0.5%. Your chance never goes above ${R(ut)}. A win pays 2x.</p>
      ${s?'<p class="mnote qnote">Play money: the test switches stand in for the wallet until it comes. The check-in, the post on X and the bets count for real.</p>':""}</section>`;return`<div class="mbody season tavern"><div class="scol">${r}</div><div class="scol">${$}</div></div>`}function Et(t,e,s){const n=+e.dataset.tier,c=n?L(n):null;if(t==="mint"){const a=+e.dataset.n||1;return{title:`Mint ${a>1?a+" × ":""}${c.name}?`,text:`It costs ${h(w.mintPrice*a)} coins (you have ${h(s.coins||0)}), all of it to the prize pool. A minted set is an NFT: you can wear it or sell it.`,cta:"Mint",run:()=>T("mint",{mint:{tier:n,n:a}})}}if(t==="forge")return{title:`Forge ${c.name}?`,text:`It costs ${h(Q(n))} forge points (you have ${h(s.forge)}). The set is bound to you; mint it to wear or sell it.`,cta:"Forge",run:()=>T("forge",{forge:n})};if(t==="burn"){const a=+e.dataset.id;return{title:`Melt ${c.name} #${a}?`,text:`The NFT is destroyed and you get ${h(Q(n))} forge point${Q(n)===1?"":"s"}. This can't be undone.`,cta:"Melt it",danger:!0,run:()=>T("burn",{burn:{nft:a}})}}if(t==="buy"){const a=+e.dataset.id,d=(s.ec&&s.ec.market||[]).find(r=>r.id===a);return d&&{title:`Buy ${L(d.tier).name}?`,text:`It costs ${h(d.price)} coins (you have ${h(s.coins||0)}). The NFT is yours at once.`,cta:"Buy",run:()=>T("buy",{buy:a})}}if(t==="list"){const a=+e.dataset.id,d=s.nftsNow.find(x=>x.id===a),r=Math.round(+(o.price[a]||0));return r>0?{title:`List ${L(d.tier).name} #${a} for ${h(r)}?`,text:`When it sells you get ${h(r-Math.floor(r*w.royalty/100))} coins; ${w.royalty}% goes to the prize pool. You can cancel the sale while it's listed.`,cta:"List it",run:()=>T("list",{list:{nft:a,price:r}})}:(P("Type your price first."),null)}return t==="buyPass"?{title:`Buy the season ${s.season} pass?`,text:`It costs ${h(w.pass.price)} coins (you have ${h(s.coins||0)}). ${Math.round(w.pass.toPool*100)}% goes to the prize pool.`,cta:"Buy the pass",run:()=>T("buyPass")}:t==="resetMe"?{title:"Reset your season?",text:"Your level, sets, NFTs and coins start over. Play money only.",cta:"Reset",danger:!0,run:()=>T("resetMe")}:null}async function et(){const t=o.rm;if(!t.loading){t.loading=!0,q();try{const e=[];let s=0;for(let n=0;n<t.pages;n++){const c=await fetch(`${Ht}?collection=${t.key}&from=${n*yt}&size=${yt}`);if(!c.ok)throw new Error("HTTP "+c.status);const a=await c.json();if(s=a.total,e.push(...a.items),e.length>=s||!a.items.length)break}t.items=e,t.total=s,t.at=Date.now(),t.error=null}catch(e){t.error=String((e==null?void 0:e.message)||e)}t.loading=!1,q()}}setInterval(()=>{o.tab==="ronin"&&document.visibilityState==="visible"&&et()},Qt);const mt=(t="")=>`<span class="mchip live${t?" "+t:""}"><i class="dot"></i>Live${o.rm.at?` <small>${$t(o.rm.at)}</small>`:""}</span>`;function At(){const t=o.rm,e=Dt[t.key];!t.at&&!t.loading&&!t.error&&queueMicrotask(et);const s=`<div class="mleadrow"><p class="mlead">Live from the Ronin Market: ${e.name} for sale, cheapest first, refreshed every 30 s. A card opens it on the market.</p>${mt()}</div>
      <div class="mfilters" role="tablist"><button class="mf on" data-act="rcol" data-k="${t.key}">${e.name}<small>${t.total?h(t.total):""}</small></button></div>`;if(!t.items.length)return`<div class="mbody solo"><div class="mleft">${s}${t.error?Y("The Ronin Market did not answer","Try again in a moment.",y("Try again","rload","","gold")):`<div class="mempty"><span class="rspin"></span>${z("Opening the Ronin Market…")}</div>`}</div></div>`;const n=t.items.map(a=>`<a class="mcard rcard" href="${e.page(encodeURIComponent(a.id))}" target="_blank" rel="noopener" aria-label="${f(a.name)}, ${vt(a.price)} ${f(a.symbol)}, on the Ronin Market (opens a new tab)">
      <span class="pic" style="background-image:url('${f(String(a.image).replace(/([?&])w=\d+/,"$1w=300"))}')"></span>
      <span class="nm">${f(String(a.name).replace(/^.*?#/,"#"))}</span><span class="sub rp">${vt(a.price)}<small>${f(a.symbol)}</small></span>${a.body?`<span class="sub">${f(a.body)}</span>`:""}</a>`).join(""),c=t.items.length<t.total?`<div class="rmore">${y(t.loading?"Loading…":`Show more (${h(t.total-t.items.length)} left)`,"rmore","","ghost")}</div>`:"";return`<div class="mbody solo"><div class="mleft">${s}<div class="mgrid rgrid">${n}${c}</div></div></div>`}let I=null;function P(t,e=!1){I={text:t,ok:e,until:performance.now()+3200},q()}function Pt(){const t=ct(),e=F[o.place],s=B.has(o.tab)?`<div class="mbody solo"><div class="mleft">${Y("Soon",`${f(e.name)} opens soon.`,"")}</div></div>`:o.tab==="armory"?Mt(t):o.tab==="forge"?St(t):o.tab==="ronin"?At():o.tab==="market"?Tt(t):o.tab==="quests"?Ct(t):Rt(t),n=o.tab==="quests"?v?v.view()?{bonus:v.chance().extra}:null:S?S.view():null:null,c=o.tab==="forge"?zt(t):o.tab==="ronin"?mt("hlive"):n?`<span class="mchip qchip">${j(n.bonus)} <small>to your chance</small></span>`:o.tab==="quests"&&v?"":qt(t),a=t.s.toast&&u.nowMs-t.s.toast.at<5e3?{text:t.s.toast.text,ok:t.s.toast.ok}:I&&performance.now()<I.until?I:null,d=o.confirm;return`<div class="mback" data-act="close"></div>
      <div class="mpanel${t.s.busy?" busy":""}" role="dialog" aria-modal="true" aria-labelledby="mtitle" tabindex="-1">
        <header class="mhead${o.tab==="ronin"?" nochip":""}"><h1 id="mtitle">${e.name}</h1>
          ${e.tabs.length>1?`<nav class="mtabs" role="tablist">${e.tabs.map(([r,x])=>B.has(r)?`<button role="tab" aria-selected="false" aria-disabled="true" class="soon" disabled>${x}<small>Soon</small></button>`:`<button role="tab" aria-selected="${o.tab===r}" class="${o.tab===r?"on":""}" data-act="tab" data-tab="${r}">${x}</button>`).join("")}</nav>`:""}
          ${e.link?`<a class="mlink" href="${e.link[1]}" target="_blank" rel="noopener">${e.link[0]}<span aria-hidden="true">↗</span><span class="vh"> (opens a new tab)</span></a>`:""}
          ${c}<button class="mx" data-act="close" aria-label="Close">&times;</button></header>
        ${a?`<div class="mtoast${a.ok===!1?" bad":""}" role="status">${f(a.text)}</div>`:""}
        ${s}
        ${t.s.busy?'<div class="mwait"><span></span></div>':""}
        ${d?`<div class="mconfirm" role="alertdialog" aria-modal="true" aria-labelledby="mctitle"><div><h2 id="mctitle">${f(d.title)}</h2><p>${f(d.text)}</p>
          <div class="mcbtns">${y(f(d.cta),"yes","",d.danger?"danger":"gold")}${y("Cancel","no","","ghost")}</div></div></div>`:""}
      </div>`}let ht="";function ft(){var a,d;const t=A.state,e=I&&performance.now()<I.until,s=o.tab==="quests"&&S&&!v?S.view():null,n=o.tab==="quests"&&v?[v.view()?1:0,v.state.v,N.state.address,N.state.busy,N.jackpotUsd()].join(","):"",c=[(a=t.econ)==null?void 0:a.at,t.busy,(d=t.toast)==null?void 0:d.at,t.forge,t.armor,t.xp,(t.items||[]).length,JSON.stringify(t.fake||null),o.v,e,t.toast&&u.nowMs-t.toast.at<5e3,pt.matches,s?[s.bonus,s.day,s.bouts.today,s.bouts.yesterday,...Object.values(s.on)].join(","):"",n].join("|");c!==ht&&(ht=c,Lt(O,`<div id="wmodal">${Pt()}</div>`,{onBeforeElUpdated:(r,x)=>!(r===document.activeElement&&r.tagName==="INPUT")})),requestAnimationFrame(ft)}return requestAnimationFrame(ft),O.addEventListener("click",t=>{var c;const e=t.target.closest("[data-act]");if(!e||!O.contains(e))return;const s=ct(),n=e.dataset.act;if(n==="close"){if(o.confirm){o.confirm=null,q();return}dt();return}if(!((n==="tab"||n==="goto")&&B.has(e.dataset.tab))){if(n==="tab"){o.tab=e.dataset.tab,o.sheet=!1,q();return}if(n==="filter"){o.filter[o.tab]=e.dataset.f,o.pick[o.tab]=null,o.sheet=!1,q();return}if(n==="pick"){o.pick[o.tab]=e.dataset.key,o.sheet=!0,q();return}if(n==="sheet-close"){o.sheet=!1,q();return}if(n==="goto"){const a=e.dataset.tab;o.place=U[a],o.tab=a,e.dataset.f&&(o.filter[a]=e.dataset.f),e.dataset.key?(o.pick[a]=e.dataset.key,o.sheet=!0):o.sheet=!1,q();return}if(n==="qty"){const a=+e.dataset.tier,d=Math.max(1,Math.min(s.bound(a).length,s.mintsLeft));o.qty[a]=Math.max(1,Math.min(d,(o.qty[a]||1)+ +e.dataset.d)),q();return}if(n==="price"){o.price[+e.dataset.nft]=e.dataset.v,q();return}if(n==="link"){window.open(e.dataset.href,"_blank","noopener");return}if(n==="rmore"){o.rm.pages++,et();return}if(n==="rload"){o.rm.error=null,et();return}if(n!=="rcol"){if(n==="qconnect"){N.connect().then(()=>v.load(),a=>P((a==null?void 0:a.message)||"The wallet did not connect")),q();return}if(n==="qsignin"){v.state.error=null,v.load({signIn:!0}).then(()=>{v.state.error&&P(v.state.error.message)});return}if(n==="qreload"||n==="qfresh"){v.state.error=null,v.load({fresh:n==="qfresh"});return}if(n==="qcheckin"){v.checkIn().then(a=>{var d;return P(a?a.done?"Checked in for today.":"You checked in today already.":((d=v.state.actionError)==null?void 0:d.message)||"The house did not answer",!!a)});return}if(n==="qxcheck"){const a=(((c=O.querySelector("#qxurl"))==null?void 0:c.value)||o.qx||"").trim();if(!a){P("Paste your post's link first.");return}o.qx=a,v.post(a).then(d=>{var r;d?(o.qx="",P("Your post counts for today.",!0)):P(((r=v.state.actionError)==null?void 0:r.message)||"The house did not answer")});return}if(n==="qcheck"){S==null||S.checkIn(),P("Checked in for today.",!0);return}if(n==="qpost"){S==null||S.posted(),P("Counted for today.",!0);return}if(n==="qset"){const a=e.dataset.k,d=+e.dataset.v;if(a==="ronke"){const r=s.s.fake||{};T("fake",{fake:{ronkeverse:r.ronkeverse||0,oneOfOne:r.oneOfOne||0,colored:r.colored||0,rarest:d?"ronke":"none"}})}else S==null||S.setTest(a,a==="tier"?d:!!d);q();return}if(n==="ask"){o.confirm=Et(e.dataset.ask,e,s),q();return}if(n==="yes"){const a=o.confirm;o.confirm=null,q(),a==null||a.run();return}if(n==="no"){o.confirm=null,q();return}if(n==="do"){const a=e.dataset.do;a==="equip"?T("equip",{equip:{kind:"set",tier:+e.dataset.tier}}):a==="unlist"?T("unlist",{unlist:+e.dataset.id}):a==="fake"?T("fake",{fake:{ronkeverse:+e.dataset.r,oneOfOne:+e.dataset.o,colored:+e.dataset.c,rarest:e.dataset.rarest||""}}):T(a);return}}}}),O.addEventListener("input",t=>{t.target.id==="mprice"&&(o.price[+t.target.dataset.nft]=t.target.value),t.target.id==="qxurl"&&(o.qx=t.target.value)}),O.addEventListener("keydown",t=>{var e;t.target.id==="qxurl"&&t.key==="Enter"&&((e=O.querySelector('[data-act="qxcheck"]'))==null||e.click())}),O.addEventListener("change",t=>{t.target.id==="mprice"&&q()}),addEventListener("focus",()=>{var t;document.activeElement===document.body&&((t=O.querySelector(".mpanel"))==null||t.focus({preventScroll:!0}))}),addEventListener("keydown",t=>{t.key==="Escape"&&(o.confirm?(o.confirm=null,q()):o.sheet&&pt.matches?(o.sheet=!1,q()):dt())}),{open(t,e){o.place=Object.hasOwn(F,e??"")?e:Object.hasOwn(U,t??"")?U[t]:o.place,o.tab=F[o.place].tabs.some(([s])=>s===t)&&!B.has(t)?t:kt(o.place),o.sheet=!1,o.confirm=null,q()}}}export{Zt as startModal};

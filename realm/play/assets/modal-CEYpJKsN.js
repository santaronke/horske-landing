import{I as qt,l as Mt,S as b,q as m,A as Y,s as U,u as F,Q as lt,T as St,J as Tt,K as V,P as D,L as Rt,M as Nt}from"./index-Cd4h57NY.js";import{J as K}from"./joust-2BfEs9QO.js";const Ot=`/* The village's modals (src/modal/modal.js). Paper: art/ui/paper.webp, a tileable parchment made with SVG filters\r
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
.qlist{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:10px}\r
.qrow{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:12px;padding:10px 12px;border:2px solid rgba(43,26,13,.5);border-radius:10px;background:rgba(255,248,230,.55)}\r
.qrow.on{border-color:var(--green);background:rgba(226,242,214,.62)}\r
.qseal{display:grid;place-items:center;width:52px;height:52px;border-radius:50%;border:3px solid var(--ink);background:radial-gradient(circle at 35% 35%,#ffe9a0,#e0a91f 62%,#9a6a12);box-shadow:0 3px 0 rgba(43,26,13,.35);font-weight:900;font-size:12px;letter-spacing:-.02em;color:var(--ink)}\r
.qrow.on .qseal{background:radial-gradient(circle at 35% 35%,#bfe8aa,#3a8a43 66%,#24602c);color:#fff;font-size:24px}\r
.qtxt{display:flex;flex-direction:column;gap:2px;min-width:0}\r
.qtxt b{font-size:16px;line-height:1.15}\r
.qtxt small{font-size:13px;line-height:1.3;color:#6a5236}\r
.qside{display:flex;flex-direction:column;align-items:flex-end;gap:2px;text-align:right;font-size:14px;white-space:nowrap}\r
.qside small{font-size:12px;color:#7a6446}\r
.qside .mbtn{min-width:118px}\r
.qok{color:var(--green);font-weight:700}\r
.qsoon{color:#7a6446;font-size:13px}\r
.qprog b{font-size:20px}\r
.qbig{font-family:var(--gothic);font-weight:900;color:var(--navy)}\r
.qbig small{font-family:var(--ui);font-size:16px;font-weight:500;color:#6a5236}\r
.mchip.qchip{padding:5px 14px;color:var(--green)}\r
.qnote{margin-top:10px;font-size:13px;color:#6a5236}\r
.qseg{display:inline-flex;flex-wrap:wrap;gap:6px}\r
.qseg .mf{padding:4px 12px}\r
.trow.qtiers{align-items:flex-start}\r
@media (max-width:700px) and (min-height:501px),(max-width:700px) and (orientation:portrait){\r
  .mbody.tavern{grid-template-columns:1fr}\r
  .qrow{grid-template-columns:auto minmax(0,1fr);gap:6px 10px;padding:9px 10px}\r
  .qside{grid-column:2;flex-direction:row;align-items:center;flex-wrap:wrap;gap:4px 10px;text-align:left}\r
  .qseal{width:44px;height:44px;font-size:11px}\r
  .mchip.qchip{order:1;padding:4px 10px} /* no tabs here: the chip sits by the title and the close button stays at the end */\r
}\r
@media (orientation:landscape) and (max-height:500px){\r
  .qrow{gap:10px;padding:6px 10px}\r
  .qseal{width:40px;height:40px;font-size:10px}\r
  .qtxt b{font-size:15px}.qtxt small{font-size:12px}\r
  .tavern .mcardbox{padding:10px 12px 12px}\r
  .tavern .mcardbox h3{font-size:22px}\r
}\r
`,ft="https://app.roninchain.com/swap?outputCurrency=0xc0Ca45c2e9448D3876Ca86220B2418C719298396",At={ronkeverse:{name:"Ronkeverse",page:g=>`https://marketplace.roninchain.com/collections/ronkeverse/${g}`}},Et="/api/ronin-market",pt=48,Lt=3e4,C={smith:{name:"The Blacksmith",tabs:[["armory","Armory"],["forge","Forge"]]},market:{name:"The Market",tabs:[["ronin","Ronin Market"],["market","Armor market"],["season","Season pass"]],link:["Buy $HORSKE",ft]},tavern:{name:"The Tavern",tabs:[["quests","Quests"]]}},X={armory:"smith",forge:"smith",ronin:"market",market:"market",season:"market",quests:"tavern"},I=new Set(["market","season"]),ct=g=>C[g].tabs.find(([R])=>!I.has(R))[0],T=g=>g>=9?"r4":g>=7?"r3":g>=4?"r2":"r1",B={r1:"Common",r2:"Rare",r3:"Epic",r4:"Legendary"},u=g=>String(g??"").replace(/[&<>"]/g,R=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[R]),O=g=>K.armors.find(R=>R.tier===g)||K.armors[0],H=g=>g.portrait?`background-image:url(${Tt(g.portrait)})`:"",j=g=>`${Math.round(g*1e3)/10}%`,A=g=>`+${Math.round(g*1e3)/10}%`,mt=g=>g>=1e3?m(Math.round(g)):String(Math.round(g*100)/100),Pt=g=>new Date(g).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"});function Ct({room:g,player:R,quests:q,door:Z,place:tt,onClose:et}){const a={place:C[tt]?tt:X[Z]||"smith",tab:Z,filter:{armory:"all",forge:"all",market:"sale"},pick:{},sheet:!1,confirm:null,qty:{},price:{},rm:{key:"ronkeverse",items:[],total:0,pages:1,loading:!1,error:null,at:0},v:0};(!C[a.place].tabs.some(([t])=>t===a.tab)||I.has(a.tab))&&(a.tab=ct(a.place)),document.head.insertAdjacentHTML("beforeend",`<style id="web-modal">${Ot}</style>`);const N=document.createElement("div");N.id="wmodal",document.body.appendChild(N);const at=matchMedia("(max-width: 700px) and (min-height: 501px), (max-width: 700px) and (orientation: portrait)"),M=(t,e)=>window.sendAction(t,e),w=()=>{a.v++};function nt(){const t=R.state,e=t.econ||null,i=e?e.season:1,n=Mt(t.xp),s=t.items||[],p=(e&&e.nfts||[]).filter($=>$.season===i),r=!!(e&&e.pass),x=r?Math.max(0,b.pass.mintCap-(e.mints||0)):0,k=$=>s.filter(c=>c.tier===$),f=$=>p.filter(c=>c.tier===$);return{s:t,ec:e,season:i,lvl:n,items:s,nftsNow:p,hasPass:r,mintsLeft:x,bound:k,mine:f,owns:$=>$===1||f($).length>0,coins:e?e.horske:null,forge:t.forge||0,worn:t.armor||1}}const ht=t=>`<span class="mchip"><i class="coin"></i>${t.coins==null?"…":m(t.coins)}</span>`,gt=t=>`<span class="mchip"><i class="flame"></i>${m(t.forge)} <small>forge points</small></span>`,v=(t,e,i="",n="gold",s="")=>`<button class="mbtn ${n}" data-act="${e}" ${i}>${t}${s?`<small>${s}</small>`:""}</button>`,_=(t,e,i="",n="navy")=>I.has(e)?`<button class="mbtn soon" disabled aria-disabled="true">${t}<small>Soon</small></button>`:v(t,"goto",`data-tab="${e}" ${i}`,n),z=(t,e="")=>`<p class="mnote ${e}">${t}</p>`,G=({key:t,a:e,tags:i="",sub:n="",locked:s=!1,worn:o=!1,count:p=0,badge:r=""})=>{const x=e.tier,k=a.pick[a.tab]===t;return`<button class="mcard ${T(x)}${s?" lk":""}${k?" sel":""}" data-act="pick" data-key="${t}" aria-pressed="${k}">
      <span class="pic" style="${H(e)}">${s?`<span class="lock">${s}</span>`:""}${p>1?`<span class="cnt">×${p}</span>`:""}</span>
      <span class="nm">${u(e.name)}</span><span class="sub">${n}</span>${i}${r?`<span class="badge">${r}</span>`:""}${o?'<span class="tag worn">Worn</span>':""}</button>`},Q=(t,e)=>`<div class="mfilters" role="tablist">${e.map(([i,n,s])=>`<button class="mf${a.filter[t]===i?" on":""}" data-act="filter" data-f="${i}">${n}<small>${s}</small></button>`).join("")}</div>`,it=(t,e,i)=>`<div class="mempty"><h2>${t}</h2>${z(e)}<div class="dact">${i}</div></div>`,W=t=>`<aside class="mdet${a.sheet?" up":""}"><button class="mdx" data-act="sheet-close" aria-label="Close the details">&times;</button>${t}</aside>`;function xt(t){const e=K.armors.map(d=>{const y=d.tier,L=F(y)>t.lvl,S=t.owns(y),P=t.bound(y).length;return{a:d,t:y,lock:L,have:S,mint:P,yours:S||P>0,nft:t.mine(y).length}}),i=a.filter.armory,n=e.filter(d=>i==="all"||(i==="yours"?d.yours:d.lock));(!a.pick.armory||!e.some(d=>"t"+d.t===a.pick.armory))&&(a.pick.armory="t"+t.worn);const s=n.map(d=>G({key:"t"+d.t,a:d.a,worn:t.worn===d.t,locked:d.lock?`Level ${F(d.t)}`:!1,count:d.nft+d.mint,badge:`+${Math.round(U(d.t)*100)}`,sub:d.t===1?"Starter":`${B[T(d.t)]} · tier ${d.t}`,tags:d.mint&&!d.have?'<span class="tag mint">Mint</span>':d.mint?`<span class="tag mint">+${d.mint} to mint</span>`:""})).join("")||z(i==="locked"?"Every set is open to you.":"Nothing here yet."),o=e.find(d=>"t"+d.t===a.pick.armory)||e[0],p=o.t,r=o.a,x=o.mint,k=t.mine(p);let f="";if(o.lock?f=z(`You wear this set from level ${F(p)}. You are level ${t.lvl}: beat the bosses in the Joust Arena to level up.`,"lock"):t.worn===p?f=z("You are wearing this set.","ok"):o.have&&(f=v("Wear this set","do",`data-do="equip" data-tier="${p}"`)),x)if(!t.hasPass)f+=z("A set you win is bound to you until you mint it, and minting needs the season pass.")+_("Get the season pass","season");else if(!t.mintsLeft)f+=z(`Your pass has no mints left (${b.pass.mintCap} used).`);else{const d=Math.max(1,Math.min(x,t.mintsLeft)),y=Math.min(d,a.qty[p]||1);f+=(d>1?`<div class="mqty"><button data-act="qty" data-tier="${p}" data-d="-1" aria-label="One less">−</button><b>${y}</b><button data-act="qty" data-tier="${p}" data-d="1" aria-label="One more">+</button><span>of ${x} to mint</span></div>`:"")+v(o.lock?y>1?`Mint ${y}`:"Mint":y>1?`Mint ${y} to wear`:"Mint to wear","ask",`data-ask="mint" data-tier="${p}" data-n="${y}"`,"gold",`${m(b.mintPrice*y)} coins`)}!o.lock&&!o.have&&!x&&p!==1&&(f+=z("Not yours yet: win it from a boss in the Joust Arena, forge it at the forge, or buy one in the market.")+_("See the market","market"));const l=k.length?`<div class="mlist"><b>Your NFTs of this set</b>${k.map(d=>`<div class="mli"><span>NFT #${d.id}${d.listing?` · on sale for ${m(d.price)}`:""}</span>${d.listing?v("Cancel sale","do",`data-do="unlist" data-id="${d.listing}"`,"ghost"):_("Sell","market",`data-f="sell" data-key="n${d.id}"`,"ghost")}</div>`).join("")}</div>`:"",$=W(`<div class="dpic ${T(p)}" style="${H(r)}"></div><div class="dinfo"><h2>${u(r.name)}</h2>
      <p class="dsub">${p===1?"The starter":`${B[T(p)]} set · tier ${p}`}${o.nft+x?` · you own ${o.nft+x}`:""}</p>
      <dl class="dstats"><dt>Set bonus</dt><dd>+${Math.round(U(p)*100)}</dd><dt>Hit bonus</dt><dd>+${j(r.bonus||0)}</dd><dt>Defense</dt><dd>+${j(r.def||0)}</dd><dt>Wear at</dt><dd>Level ${F(p)}</dd></dl></div>
      <div class="dact">${f}${l}</div>`),c=e.filter(d=>d.yours).length,h=e.filter(d=>d.lock).length;return`<div class="mbody"><div class="mleft">${Q("armory",[["all","All",e.length],["yours","Yours",c],["locked","Locked",h]])}<div class="mgrid">${s}</div></div>${$}</div>`}function ut(t){const e=t.nftsNow.filter(l=>!l.listing),i={};e.forEach(l=>(i[l.tier]=i[l.tier]||[]).push(l));const n=K.armors.filter(l=>l.tier>=2).map(l=>({a:l,t:l.tier,cost:Y(l.tier),melt:i[l.tier]||[]})),s=a.filter.forge,o=n.filter(l=>s==="all"||(s==="melt"?l.melt.length:t.forge>=l.cost));(!a.pick.forge||!n.some(l=>"t"+l.t===a.pick.forge))&&(a.pick.forge="t"+(n.find(l=>l.melt.length)||n.find(l=>t.forge>=l.cost)||n[0]).t);const p=o.map(l=>G({key:"t"+l.t,a:l.a,count:l.melt.length,sub:`Forge for ${m(l.cost)} pt${l.cost===1?"":"s"}`,tags:l.melt.length?`<span class="tag melt">Melt +${m(l.cost)}</span>`:"",badge:t.forge>=l.cost?"✓":""})).join("")||z(s==="melt"?"Nothing to melt: only NFTs melt, and a set you win is minted first (the season pass).":"No set within your points yet."),r=n.find(l=>"t"+l.t===a.pick.forge)||n[0];let k=t.forge>=r.cost?v(`Forge ${u(r.a.name)}`,"ask",`data-ask="forge" data-tier="${r.t}"`,"gold",`${m(r.cost)} forge point${r.cost===1?"":"s"}`):z(`It takes ${m(r.cost)} forge point${r.cost===1?"":"s"} and you have ${m(t.forge)}. Melt NFTs to get points.`);r.melt.length&&(k+=v(`Melt one${r.melt.length>1?` of ${r.melt.length}`:""}`,"ask",`data-ask="burn" data-tier="${r.t}" data-id="${r.melt[0].id}"`,"danger",`+${m(r.cost)} forge point${r.cost===1?"":"s"}`));const f=W(`<div class="dpic ${T(r.t)}" style="${H(r.a)}"></div><div class="dinfo"><h2>${u(r.a.name)}</h2>
      <p class="dsub">${B[T(r.t)]} set · tier ${r.t}</p>
      <dl class="dstats"><dt>Forge cost</dt><dd>${m(r.cost)} pt${r.cost===1?"":"s"}</dd><dt>A melt gives</dt><dd>+${m(r.cost)} pt${r.cost===1?"":"s"}</dd><dt>Wear at</dt><dd>Level ${F(r.t)}</dd><dt>Yours to melt</dt><dd>${r.melt.length}</dd></dl></div>
      <div class="dact">${k}</div>`);return`<div class="mbody"><div class="mleft"><p class="mlead">Melt your NFTs into forge points, and forge any set with them. A tier is worth twice the one below.</p>
      ${Q("forge",[["all","All sets",n.length],["melt","Yours to melt",n.filter(l=>l.melt.length).length],["can","Within your points",n.filter(l=>t.forge>=l.cost).length]])}<div class="mgrid">${p}</div></div>${f}</div>`}function bt(t){const e=t.ec&&t.ec.market||[],i=R.userId,n=t.nftsNow.filter(c=>!c.listing),s=a.filter.market,o=e.filter(c=>s==="mine"?c.seller===i:!0),p=t.ec&&t.ec.trades||{n:0,vol:0};let r,x="";const k=`<p class="mlead">${e.length} for sale · ${p.n} sold · ${m(p.vol)} traded · ${b.royalty}% of every sale goes to the prize pool</p>
      ${Q("market",[["sale","For sale",e.length],["mine","Your listings",e.filter(c=>c.seller===i).length],["sell","Sell yours",n.length]])}`,f=v("Go to the armory","goto",'data-tab="armory"',"navy"),l=v("Sell one of yours","filter",'data-f="sell"',"gold"),$=(c,h,d)=>`<div class="mbody solo"><div class="mleft">${k}${it(c,h,d)}</div></div>`;if(s==="sell"&&!n.length)return $("Nothing to sell","A set you win is bound to you until you mint it, and minting needs the season pass.",f+(t.hasPass?"":_("Get the season pass","season","","gold")));if(s!=="sell"&&!o.length)return $(s==="mine"?"Nothing of yours on sale":"Nothing on sale yet",s==="mine"?"List one of your NFTs and it shows here.":"Mint a set at the Blacksmith and be the first to list one.",n.length?l:f);if(s==="sell"){(!a.pick.market||!n.some(h=>"n"+h.id===a.pick.market))&&(a.pick.market=n[0]?"n"+n[0].id:null),r=n.map(h=>G({key:"n"+h.id,a:O(h.tier),sub:`NFT #${h.id}`,badge:""})).join("");const c=n.find(h=>"n"+h.id===a.pick.market);if(c){const h=O(c.tier),d=e.filter(S=>S.tier===c.tier).reduce((S,P)=>Math.min(S,P.price),1/0),y=a.price[c.id]??"",L=[d<1/0?d:null,Y(c.tier)*5e3,b.mintPrice*2].filter((S,P,zt)=>S&&zt.indexOf(S)===P).slice(0,3);x=W(`<div class="dpic ${T(c.tier)}" style="${H(h)}"></div><div class="dinfo"><h2>${u(h.name)}</h2><p class="dsub">NFT #${c.id} · ${B[T(c.tier)]}</p>
          <dl class="dstats"><dt>Cheapest on sale</dt><dd>${d<1/0?m(d):"none"}</dd><dt>Royalty</dt><dd>${b.royalty}% to the pool</dd></dl></div>
          <div class="dact"><label class="mprice">Your price<input id="mprice" data-nft="${c.id}" type="number" min="1" step="1" inputmode="numeric" value="${u(y)}" placeholder="0"><span>coins</span></label>
          ${L.length?`<div class="msugg">${L.map(S=>`<button data-act="price" data-nft="${c.id}" data-v="${S}">${m(S)}</button>`).join("")}</div>`:""}
          ${v("List for sale","ask",`data-ask="list" data-id="${c.id}"`,"gold",y?`${m(+y)} coins`:"")}</div>`)}}else{(!a.pick.market||!o.some(h=>"l"+h.id===a.pick.market))&&(a.pick.market=o[0]?"l"+o[0].id:null),r=o.map(h=>G({key:"l"+h.id,a:O(h.tier),sub:`<i class="coin"></i>${m(h.price)}`,tags:h.seller===i?'<span class="tag worn">Yours</span>':""})).join("");const c=o.find(h=>"l"+h.id===a.pick.market);if(c){const h=O(c.tier),d=c.seller===i,y=(t.coins||0)>=c.price,L=d?v("Cancel the sale","do",`data-do="unlist" data-id="${c.id}"`,"navy"):y?v("Buy","ask",`data-ask="buy" data-id="${c.id}"`,"gold",`${m(c.price)} coins`):z(`It costs ${m(c.price)} and you have ${m(t.coins||0)}.`)+v("Buy $HORSKE","link",`data-href="${ft}"`,"navy");x=W(`<div class="dpic ${T(c.tier)}" style="${H(h)}"></div><div class="dinfo"><h2>${u(h.name)}</h2><p class="dsub">${d?"Your listing":`Sold by ${u(c.name||"a knight")}`} · ${B[T(c.tier)]}</p>
          <dl class="dstats"><dt>Price</dt><dd>${m(c.price)}</dd><dt>Set bonus</dt><dd>+${Math.round(U(c.tier)*100)}</dd><dt>Wear at</dt><dd>Level ${F(c.tier)}</dd></dl></div><div class="dact">${L}</div>`)}}return`<div class="mbody"><div class="mleft">${k}<div class="mgrid">${r}</div></div>${x}</div>`}function vt(t){const e=t.ec,i=e&&e.pool||{pass:0,mint:0,royalty:0,pod:0,paid:0},n=i.pass+i.mint+i.royalty+i.pod,s=(h,d)=>`<div class="pbar"><span>${h}</span><i><b style="width:${n?Math.round(d/n*100):0}%"></b></i><em>${m(d)}</em></div>`,o=[["Ranked jousts","free, against other knights' ghosts; Elo shares the prize pool"],["Mint your sets",`${m(b.mintPrice)} each, up to ${b.pass.mintCap}, all to the prize pool`],[`${b.pass.freeRuns} free bouts a day`,`instead of ${b.freeRuns}`],[`×${b.pass.dropMult} drop chance`,"from every boss"]],p=t.s,r=p.fake||{ronkeverse:0,oneOfOne:0},x=r.colored||0,k=(h,d,y)=>`<button class="mbtn ghost sm" data-act="do" data-do="fake" data-r="${Math.max(0,h)}" data-o="${Math.max(0,d)}" data-c="${x}" data-rarest="${u(r.rarest||"")}">${y}</button>`,f=`<section class="mcardbox pass"><h3>Season ${t.season} pass</h3>
      <ul class="perks">${o.map(([h,d])=>`<li><b>${h}</b><span>${d}</span></li>`).join("")}</ul>
      ${t.hasPass?z(`✓ Yours · ${e.mints}/${b.pass.mintCap} mints used`,"ok"):`${v("Buy the pass","ask",'data-ask="buyPass"',"gold",`${m(b.pass.price)} coins`)}${z(`${Math.round(b.pass.toPool*100)}% of the price goes to the prize pool.`)}`}</section>`,l=`<section class="mcardbox"><h3>Prize pool</h3><p class="big"><i class="coin"></i>${m(n-i.paid)}</p>
      ${s("Passes",i.pass)}${s("Mints",i.mint)}${s("Royalties",i.royalty)}${s("PoD",i.pod)}
      ${z(`At the season's end the top ${Math.round(b.payoutShare*100)}% of ranked knights share it, more for a higher place.`)}</section>`,$=`<section class="mcardbox"><h3>How the season works</h3><ol class="how"><li>Joust the bosses to level up (0 to 20); a win can drop a set.</li><li>A set that drops is minted (season pass) before you wear it or sell it here.</li><li>Climb ranked: at the season's end the top ${Math.round(b.payoutShare*100)}% share the prize pool.</li></ol>${z("Play money for now: the coins, the pass and the NFTs here are not on a chain yet.")}</section>`,c=p.tools?`<section class="mcardbox tools"><h3>Test tools · play money</h3>
      <div class="trow"><span>Ronkeverse NFTs</span>${k(r.ronkeverse-5,r.oneOfOne,"−5")}<b>${r.ronkeverse}</b>${k(r.ronkeverse+5,r.oneOfOne,"+5")}</div>
      <div class="trow"><span>1/1 NFTs</span>${k(r.ronkeverse,r.oneOfOne-1,"−1")}<b>${r.oneOfOne}</b>${k(r.ronkeverse,r.oneOfOne+1,"+1")}</div>
      <div class="trow">${v(`+${m(b.faucet)} coins`,"do",'data-do="faucet"',"gold sm")}${v("Refresh","do",'data-do="sync"',"navy sm")}${v("Reset my season","ask",'data-ask="resetMe"',"ghost sm")}</div></section>`:"";return`<div class="mbody season"><div class="scol">${f}${$}</div><div class="scol">${l}${c}</div></div>`}function $t(t){const e=q?q.view():null;if(!e)return`<div class="mbody solo"><div class="mleft">${z("The quests run with the site's rules (not with ?spawn).")}</div></div>`;const i=t.s.tools,n=e.bouts,s=(f,l)=>f.id==="checkin"?l?'<span class="qok">✓ Done today</span>':v("Check in","qcheck","","gold sm"):f.id==="bouts"?`<span class="qprog"><b>${Math.min(V,n.today)}/${V}</b> today</span><small>${n.today>=V?`${A(D)} tomorrow`:"for tomorrow"}</small>`:l?`<span class="qok">✓ ${f.id==="lock"?"Locked":f.id==="weekly"?"Bought":"Held"}</span>${i?"<small>test switch</small>":""}`:'<span class="qsoon">With your wallet</span>',o=lt.map(f=>{const l=e.on[f.id],$=f.id==="bouts"&&l?`${f.text} Active today: ${n.yesterday} bets yesterday.`:f.text;return`<li class="qrow${l?" on":""}"><span class="qseal" aria-hidden="true">${l?"✓":A(D)}</span>
        <span class="qtxt"><b>${u(f.name)}</b><small>${u($)}</small></span><span class="qside">${s(f,l)}</span></li>`}).join(""),p=`<section class="mcardbox"><h3>Quests</h3><p class="mlead">Each one adds ${A(D)} to your chance in Fight the house.</p><ul class="qlist">${o}</ul></section>`,r=`<section class="mcardbox pass"><h3>Your chance today</h3>
      <p class="big qbig">${j(e.lo)} <small>to</small> ${j(e.hi)}</p>
      <dl class="dstats"><dt>Everyone</dt><dd>${j(Rt)}</dd><dt>Quests (${e.n} of ${lt.length})</dt><dd>${A(e.quests)}</dd>
        <dt>Ronke Score${e.tier.id?` (${u(e.tier.name)})`:""}</dt><dd>${A(e.score)}</dd><dt>Perfect taps</dt><dd>up to +3%</dd></dl>
      <p class="mnote qnote">Ronke Score is your wallet's rank on ronkeverse.com/score: top 69 +2%, top 100 +1.5%, top 200 +1%, top 500 +0.5%. Your chance never goes above ${j(Nt)}. A win pays 2x.</p></section>`,x=(f,l)=>`<span class="qseg" role="group">${[[0,"Off"],[1,"On"]].map(([$,c])=>`<button class="mf${+l===$?" on":""}" data-act="qset" data-k="${f}" data-v="${$}" aria-pressed="${+l===$}">${c}</button>`).join("")}</span>`,k=i?`<section class="mcardbox tools"><h3>Test switches · play money</h3>
      <div class="trow"><span>Lock HORSKE</span>${x("lock",e.on.lock)}</div>
      <div class="trow"><span>Buy HORSKE this week</span>${x("weekly",e.on.weekly)}</div>
      <div class="trow"><span>Hold a Ronke</span>${x("ronke",e.on.ronke)}</div>
      <div class="trow qtiers"><span>Ronke Score</span><span class="qseg" role="group">${St.map(f=>`<button class="mf${e.tier.id===f.id?" on":""}" data-act="qset" data-k="tier" data-v="${f.id}" aria-pressed="${e.tier.id===f.id}">${u(f.name)}</button>`).join("")}</span></div>
      ${z("They stand in for the wallet until it comes. The check-in and the bets count for real.")}</section>`:"";return`<div class="mbody season tavern"><div class="scol">${p}</div><div class="scol">${r}${k}</div></div>`}function yt(t,e,i){const n=+e.dataset.tier,s=n?O(n):null;if(t==="mint"){const o=+e.dataset.n||1;return{title:`Mint ${o>1?o+" × ":""}${s.name}?`,text:`It costs ${m(b.mintPrice*o)} coins (you have ${m(i.coins||0)}), all of it to the prize pool. A minted set is an NFT: you can wear it or sell it.`,cta:"Mint",run:()=>M("mint",{mint:{tier:n,n:o}})}}if(t==="forge")return{title:`Forge ${s.name}?`,text:`It costs ${m(Y(n))} forge points (you have ${m(i.forge)}). The set is bound to you; mint it to wear or sell it.`,cta:"Forge",run:()=>M("forge",{forge:n})};if(t==="burn"){const o=+e.dataset.id;return{title:`Melt ${s.name} #${o}?`,text:`The NFT is destroyed and you get ${m(Y(n))} forge point${Y(n)===1?"":"s"}. This can't be undone.`,cta:"Melt it",danger:!0,run:()=>M("burn",{burn:{nft:o}})}}if(t==="buy"){const o=+e.dataset.id,p=(i.ec&&i.ec.market||[]).find(r=>r.id===o);return p&&{title:`Buy ${O(p.tier).name}?`,text:`It costs ${m(p.price)} coins (you have ${m(i.coins||0)}). The NFT is yours at once.`,cta:"Buy",run:()=>M("buy",{buy:o})}}if(t==="list"){const o=+e.dataset.id,p=i.nftsNow.find(x=>x.id===o),r=Math.round(+(a.price[o]||0));return r>0?{title:`List ${O(p.tier).name} #${o} for ${m(r)}?`,text:`When it sells you get ${m(r-Math.floor(r*b.royalty/100))} coins; ${b.royalty}% goes to the prize pool. You can cancel the sale while it's listed.`,cta:"List it",run:()=>M("list",{list:{nft:o,price:r}})}:(rt("Type your price first."),null)}return t==="buyPass"?{title:`Buy the season ${i.season} pass?`,text:`It costs ${m(b.pass.price)} coins (you have ${m(i.coins||0)}). ${Math.round(b.pass.toPool*100)}% goes to the prize pool.`,cta:"Buy the pass",run:()=>M("buyPass")}:t==="resetMe"?{title:"Reset your season?",text:"Your level, sets, NFTs and coins start over. Play money only.",cta:"Reset",danger:!0,run:()=>M("resetMe")}:null}async function J(){const t=a.rm;if(!t.loading){t.loading=!0,w();try{const e=[];let i=0;for(let n=0;n<t.pages;n++){const s=await fetch(`${Et}?collection=${t.key}&from=${n*pt}&size=${pt}`);if(!s.ok)throw new Error("HTTP "+s.status);const o=await s.json();if(i=o.total,e.push(...o.items),e.length>=i||!o.items.length)break}t.items=e,t.total=i,t.at=Date.now(),t.error=null}catch(e){t.error=String((e==null?void 0:e.message)||e)}t.loading=!1,w()}}setInterval(()=>{a.tab==="ronin"&&document.visibilityState==="visible"&&J()},Lt);const ot=(t="")=>`<span class="mchip live${t?" "+t:""}"><i class="dot"></i>Live${a.rm.at?` <small>${Pt(a.rm.at)}</small>`:""}</span>`;function kt(){const t=a.rm,e=At[t.key];!t.at&&!t.loading&&!t.error&&queueMicrotask(J);const i=`<div class="mleadrow"><p class="mlead">Live from the Ronin Market: ${e.name} for sale, cheapest first, refreshed every 30 s. A card opens it on the market.</p>${ot()}</div>
      <div class="mfilters" role="tablist"><button class="mf on" data-act="rcol" data-k="${t.key}">${e.name}<small>${t.total?m(t.total):""}</small></button></div>`;if(!t.items.length)return`<div class="mbody solo"><div class="mleft">${i}${t.error?it("The Ronin Market did not answer","Try again in a moment.",v("Try again","rload","","gold")):`<div class="mempty"><span class="rspin"></span>${z("Opening the Ronin Market…")}</div>`}</div></div>`;const n=t.items.map(o=>`<a class="mcard rcard" href="${e.page(encodeURIComponent(o.id))}" target="_blank" rel="noopener" aria-label="${u(o.name)}, ${mt(o.price)} ${u(o.symbol)}, on the Ronin Market (opens a new tab)">
      <span class="pic" style="background-image:url('${u(String(o.image).replace(/([?&])w=\d+/,"$1w=300"))}')"></span>
      <span class="nm">${u(String(o.name).replace(/^.*?#/,"#"))}</span><span class="sub rp">${mt(o.price)}<small>${u(o.symbol)}</small></span>${o.body?`<span class="sub">${u(o.body)}</span>`:""}</a>`).join(""),s=t.items.length<t.total?`<div class="rmore">${v(t.loading?"Loading…":`Show more (${m(t.total-t.items.length)} left)`,"rmore","","ghost")}</div>`:"";return`<div class="mbody solo"><div class="mleft">${i}<div class="mgrid rgrid">${n}${s}</div></div></div>`}let E=null;function rt(t,e=!1){E={text:t,ok:e,until:performance.now()+3200},w()}function wt(){const t=nt(),e=C[a.place],i=a.tab==="armory"?xt(t):a.tab==="forge"?ut(t):a.tab==="ronin"?kt():a.tab==="market"?bt(t):a.tab==="quests"?$t(t):vt(t),n=a.tab==="quests"&&q?q.view():null,s=a.tab==="forge"?gt(t):a.tab==="ronin"?ot("hlive"):n?`<span class="mchip qchip">${A(n.bonus)} <small>to your chance</small></span>`:ht(t),o=t.s.toast&&g.nowMs-t.s.toast.at<5e3?{text:t.s.toast.text,ok:t.s.toast.ok}:E&&performance.now()<E.until?E:null,p=a.confirm;return`<div class="mback" data-act="close"></div>
      <div class="mpanel${t.s.busy?" busy":""}" role="dialog" aria-modal="true" aria-labelledby="mtitle">
        <header class="mhead${a.tab==="ronin"?" nochip":""}"><h1 id="mtitle">${e.name}</h1>
          ${e.tabs.length>1?`<nav class="mtabs" role="tablist">${e.tabs.map(([r,x])=>I.has(r)?`<button role="tab" aria-selected="false" aria-disabled="true" class="soon" disabled>${x}<small>Soon</small></button>`:`<button role="tab" aria-selected="${a.tab===r}" class="${a.tab===r?"on":""}" data-act="tab" data-tab="${r}">${x}</button>`).join("")}</nav>`:""}
          ${e.link?`<a class="mlink" href="${e.link[1]}" target="_blank" rel="noopener">${e.link[0]}<span aria-hidden="true">↗</span><span class="vh"> (opens a new tab)</span></a>`:""}
          ${s}<button class="mx" data-act="close" aria-label="Close">&times;</button></header>
        ${o?`<div class="mtoast${o.ok===!1?" bad":""}" role="status">${u(o.text)}</div>`:""}
        ${i}
        ${t.s.busy?'<div class="mwait"><span></span></div>':""}
        ${p?`<div class="mconfirm" role="alertdialog" aria-modal="true" aria-labelledby="mctitle"><div><h2 id="mctitle">${u(p.title)}</h2><p>${u(p.text)}</p>
          <div class="mcbtns">${v(u(p.cta),"yes","",p.danger?"danger":"gold")}${v("Cancel","no","","ghost")}</div></div></div>`:""}
      </div>`}let st="";function dt(){var s,o;const t=R.state,e=E&&performance.now()<E.until,i=a.tab==="quests"&&q?q.view():null,n=[(s=t.econ)==null?void 0:s.at,t.busy,(o=t.toast)==null?void 0:o.at,t.forge,t.armor,t.xp,(t.items||[]).length,JSON.stringify(t.fake||null),a.v,e,t.toast&&g.nowMs-t.toast.at<5e3,at.matches,i?[i.bonus,i.day,i.bouts.today,i.bouts.yesterday,...Object.values(i.on)].join(","):""].join("|");n!==st&&(st=n,qt(N,`<div id="wmodal">${wt()}</div>`,{onBeforeElUpdated:(p,r)=>!(p===document.activeElement&&p.tagName==="INPUT")})),requestAnimationFrame(dt)}return requestAnimationFrame(dt),N.addEventListener("click",t=>{const e=t.target.closest("[data-act]");if(!e||!N.contains(e))return;const i=nt(),n=e.dataset.act;if(n==="close"){if(a.confirm){a.confirm=null,w();return}et();return}if(!((n==="tab"||n==="goto")&&I.has(e.dataset.tab))){if(n==="tab"){a.tab=e.dataset.tab,a.sheet=!1,w();return}if(n==="filter"){a.filter[a.tab]=e.dataset.f,a.pick[a.tab]=null,a.sheet=!1,w();return}if(n==="pick"){a.pick[a.tab]=e.dataset.key,a.sheet=!0,w();return}if(n==="sheet-close"){a.sheet=!1,w();return}if(n==="goto"){const s=e.dataset.tab;a.place=X[s],a.tab=s,e.dataset.f&&(a.filter[s]=e.dataset.f),e.dataset.key?(a.pick[s]=e.dataset.key,a.sheet=!0):a.sheet=!1,w();return}if(n==="qty"){const s=+e.dataset.tier,o=Math.max(1,Math.min(i.bound(s).length,i.mintsLeft));a.qty[s]=Math.max(1,Math.min(o,(a.qty[s]||1)+ +e.dataset.d)),w();return}if(n==="price"){a.price[+e.dataset.nft]=e.dataset.v,w();return}if(n==="link"){window.open(e.dataset.href,"_blank","noopener");return}if(n==="rmore"){a.rm.pages++,J();return}if(n==="rload"){a.rm.error=null,J();return}if(n!=="rcol"){if(n==="qcheck"){q==null||q.checkIn(),rt(`Checked in: ${A(D)} to your chance today.`,!0);return}if(n==="qset"){const s=e.dataset.k,o=+e.dataset.v;if(s==="ronke"){const p=i.s.fake||{};M("fake",{fake:{ronkeverse:p.ronkeverse||0,oneOfOne:p.oneOfOne||0,colored:p.colored||0,rarest:o?"ronke":"none"}})}else q==null||q.setTest(s,s==="tier"?o:!!o);w();return}if(n==="ask"){a.confirm=yt(e.dataset.ask,e,i),w();return}if(n==="yes"){const s=a.confirm;a.confirm=null,w(),s==null||s.run();return}if(n==="no"){a.confirm=null,w();return}if(n==="do"){const s=e.dataset.do;s==="equip"?M("equip",{equip:{kind:"set",tier:+e.dataset.tier}}):s==="unlist"?M("unlist",{unlist:+e.dataset.id}):s==="fake"?M("fake",{fake:{ronkeverse:+e.dataset.r,oneOfOne:+e.dataset.o,colored:+e.dataset.c,rarest:e.dataset.rarest||""}}):M(s);return}}}}),N.addEventListener("input",t=>{t.target.id==="mprice"&&(a.price[+t.target.dataset.nft]=t.target.value)}),N.addEventListener("change",t=>{t.target.id==="mprice"&&w()}),addEventListener("focus",()=>{var t;document.activeElement===document.body&&((t=N.querySelector(".mx"))==null||t.focus({preventScroll:!0}))}),addEventListener("keydown",t=>{t.key==="Escape"&&(a.confirm?(a.confirm=null,w()):a.sheet&&at.matches?(a.sheet=!1,w()):et())}),{open(t,e){a.place=C[e]?e:X[t]||a.place,a.tab=C[a.place].tabs.some(([i])=>i===t)&&!I.has(t)?t:ct(a.place),a.sheet=!1,a.confirm=null,w()}}}export{Ct as startModal};

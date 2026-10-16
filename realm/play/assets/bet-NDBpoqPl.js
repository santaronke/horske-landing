import{m as K,c as q}from"./index-Dknj_YLb.js";import{x as W,y as R,S,z as F,w as O,q as d,H as j}from"./econ-Deg9OsSu.js";const I=`/* The Lists' betting panel and result card (src/bet/bet.js), on the paper of the village's modals (art/ui/paper.webp,\r
   src/modal/modal.css). A side panel over the live lists on a wide screen, a bottom sheet on an upright phone. */\r
#wbet{--ink:#2b1a0d;--paper:#efdcb3;--card:rgba(255,249,234,.66);--navy:#1d3778;--gold1:#ffd85a;--gold2:#e0a91f;--red:#a8231c;--green:#2f7a2b;\r
  --gothic:"Grenze Gotisch",Georgia,serif;--ui:Gelasio,Georgia,"Times New Roman",serif;\r
  position:fixed;inset:0;z-index:40;pointer-events:none;font-family:var(--ui);color:var(--ink);-webkit-tap-highlight-color:transparent}\r
#wbet *{box-sizing:border-box}\r
:where(#wbet) button{font:inherit;color:inherit;cursor:pointer}\r
.bpanel,.bend{pointer-events:auto;position:absolute;background:var(--paper) url(art/ui/paper.webp) center/1024px;border:3px solid var(--ink);\r
  box-shadow:0 8px 0 var(--ink),inset 0 0 60px rgba(122,78,28,.32),inset 0 0 12px rgba(122,78,28,.36)}\r
.bpanel::before,.bend::before{content:"";position:absolute;inset:6px;border:2px solid #c98c1d;pointer-events:none}\r
.bpanel{right:max(16px,env(safe-area-inset-right,0px));top:16px;height:min(680px,calc(100% - 40px));width:min(410px,calc(100% - 32px));display:flex;flex-direction:column;animation:bin .24s cubic-bezier(.16,1,.3,1)}\r
@keyframes bin{from{opacity:0;transform:translateX(14px)}}\r
@keyframes bup{from{opacity:0;transform:translateY(24px)}}\r
.bhead{position:relative;z-index:4;display:flex;align-items:center;gap:10px;padding:16px 18px 8px}\r
.bhead h1{margin:0;font-family:var(--gothic);font-weight:900;font-size:32px;line-height:1;color:var(--navy)}\r
.bback{flex:none;padding:6px 12px;border:2px solid var(--ink);border-radius:999px;background:rgba(255,248,230,.7);font-weight:700;font-size:14px}\r
.bchipc{margin-left:auto;display:inline-flex;align-items:center;gap:7px;padding:4px 12px 4px 5px;border:2px solid var(--ink);border-radius:999px;background:#fff8e6;font-weight:700;font-size:16px;white-space:nowrap}\r
.coin{display:inline-block;width:20px;height:20px;flex:none;border-radius:50%;background:radial-gradient(circle at 35% 35%,#ffe9a0,#e0a91f 60%,#8a5f10);box-shadow:0 0 0 2px var(--ink);vertical-align:-4px}\r
.btabs{position:relative;display:flex;gap:3px;margin:2px 18px 8px;padding:3px;border:2px solid var(--ink);border-radius:10px;background:rgba(255,248,230,.5)}\r
.btabs button{flex:1;border:0;background:none;padding:6px 10px;border-radius:7px;font-weight:700;font-size:16px;color:#5a4630}\r
.btabs button.on{background:var(--navy);color:#ffe08a}\r
.bbody{position:relative;flex:1;min-height:0;overflow:auto;padding:4px 18px 10px;scrollbar-width:thin;scrollbar-color:#a8834a transparent}\r
.blead{margin:0 0 10px;font-size:14px;line-height:1.4;color:#5a4630}\r
.bsect{margin:14px 0 8px;font-family:var(--gothic);font-weight:900;font-size:22px;line-height:1;color:var(--navy)}\r
.brare{display:flex;align-items:center;gap:10px;margin:0 0 4px;font-size:14px;font-weight:700}\r
.brare em{margin-left:4px;padding:1px 6px;border-radius:999px;background:var(--ink);color:#f6ead0;font-style:normal;font-size:11px;vertical-align:1px}\r
.brare select{flex:1;min-width:0;height:38px;padding:0 8px;border:2px solid var(--ink);border-radius:8px;background:#fffaf0;font:inherit;font-size:14px;font-weight:500}\r
.briders{display:grid;grid-template-columns:1fr 1fr;gap:10px}\r
.brider{position:relative;display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;column-gap:8px;min-height:66px;padding:8px 10px 8px 16px;border:3px solid var(--ink);border-radius:10px;background:var(--card);text-align:left;transition:transform .12s}\r
.brider::before{content:"";position:absolute;left:0;top:0;bottom:0;width:7px;border-radius:7px 0 0 7px;background:var(--rar)}\r
.brider:not(.lk):hover{transform:translateY(-2px)}\r
.brider.on{outline:4px solid var(--navy);outline-offset:2px;background:rgba(255,251,240,.92)}\r
.brider.on::after{content:"✓";position:absolute;right:-10px;top:-10px;width:24px;height:24px;border-radius:50%;background:var(--navy);color:#ffe08a;font-size:14px;font-weight:700;line-height:24px;text-align:center;box-shadow:0 0 0 2px var(--ink)}\r
.brider.lk{cursor:default;opacity:.62;filter:grayscale(.7)}\r
.bri b{display:block;font-size:16px;line-height:1.1}\r
.bri small{display:block;margin-top:3px;font-size:12px;line-height:1.25;color:#6a5236}\r
.bpct{font-family:var(--gothic);font-weight:900;font-size:28px;line-height:1;color:var(--navy);text-align:right}\r
.bpct small{display:block;margin-bottom:2px;font-family:var(--ui);font-weight:700;font-size:11px;color:#6a5236}\r
.r1{--rar:#b0763d}.r2{--rar:#4f8fe0}.r3{--rar:#a35fd8}.r4{--rar:#e0b020}\r
.bstakes{flex:1;min-width:0;display:grid;grid-template-columns:repeat(4,1fr);gap:6px}\r
.bstake{min-height:42px;padding:2px;border:2px solid var(--ink);border-radius:9px;background:#fff8e6;font-weight:700;font-size:15px}\r
.bstake.on{background:linear-gradient(#ffd85a,#e0a91f);box-shadow:0 3px 0 var(--ink)}\r
.bstake:disabled{opacity:.4;cursor:default}\r
.bhouse{margin:14px 0 0;font-size:12px;line-height:1.4;color:#6a5236}\r
.bslip{position:relative;display:flex;flex-direction:column;gap:10px;margin:0 12px 12px;padding:10px 12px 12px;border:3px solid var(--ink);border-radius:12px;background:rgba(255,251,240,.9);box-shadow:inset 0 0 0 3px rgba(224,169,31,.55)}\r
.bslip.col{display:block}\r
.bslipt{display:flex;align-items:center;gap:10px}\r
.bslipt>span{flex:none;font-family:var(--gothic);font-weight:900;font-size:19px;line-height:1;color:var(--navy)}\r
.bslipr{display:flex;align-items:center;gap:12px}\r
.bwin{flex:1;min-width:0;display:flex;flex-direction:column}\r
.bwin small{font-weight:700;font-size:13px;color:#6a5236;text-transform:uppercase;letter-spacing:.08em}\r
.bwin b{font-family:var(--gothic);font-weight:900;font-size:36px;line-height:1;color:var(--green);white-space:nowrap}\r
.bwin b .coin{width:24px;height:24px;margin-right:6px;vertical-align:-2px}\r
.bwin span{margin-top:3px;font-size:12px;color:#6a5236;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\r
.bbtn{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;min-height:52px;padding:8px 18px;border:0;border-radius:10px;font-weight:700;font-size:20px;line-height:1.1;text-decoration:none;white-space:nowrap;\r
  box-shadow:0 0 0 2px #0a1636,0 5px 0 2px #0a1636,inset 0 3px 0 rgba(255,255,255,.45);transition:transform .1s}\r
.bbtn small{font-size:13px;font-weight:500}\r
.bbtn:active{transform:translateY(3px);box-shadow:0 0 0 2px #0a1636,0 2px 0 2px #0a1636}\r
.bbtn.gold{color:var(--ink);background:linear-gradient(#ffd85a,#e0a91f)}\r
.bbtn.navy{color:#ffe08a;background:linear-gradient(#2c4f9e,#1d3778 60%,#132a62)}\r
.bbtn.ghost{color:var(--ink);background:rgba(255,248,230,.75);box-shadow:0 0 0 2px var(--ink),0 3px 0 2px var(--ink)}\r
.bshort p{margin:0 0 10px;font-size:14px;line-height:1.4}\r
.brow{display:flex;flex-wrap:wrap;gap:10px}\r
.brow .bbtn{flex:1;min-width:150px;font-size:16px;min-height:46px}\r
.bnote{margin:0;font-size:14px}\r
.bsort{display:flex;gap:3px;margin:4px 0 10px;padding:3px;border:2px solid var(--ink);border-radius:10px;background:rgba(255,248,230,.5)}\r
.bsort button{flex:1;border:0;background:none;padding:5px 8px;border-radius:7px;font-weight:700;font-size:14px;color:#5a4630}\r
.bsort button.on{background:var(--ink);color:#f6ead0}\r
.blist{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:6px}\r
.blist li{display:flex;align-items:center;gap:10px;min-height:48px;padding:6px 10px;border:2px solid rgba(43,26,13,.55);border-radius:9px;background:var(--card)}\r
.blist li.me{border-color:var(--ink);box-shadow:inset 0 0 0 3px rgba(224,169,31,.7)}\r
.brank{width:26px;text-align:center;font-family:var(--gothic);font-weight:900;font-size:20px;color:var(--navy)}\r
.bname{flex:1;min-width:0;display:flex;flex-direction:column}\r
.bname b{font-size:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\r
.bname small{font-size:12px;color:#6a5236}\r
.bval{font-size:15px}.bval.up{color:var(--green)}.bval.down{color:var(--red)}\r
.bempty{margin:8px 0;padding:18px;border:2px dashed rgba(43,26,13,.4);border-radius:10px;text-align:center;font-size:15px}\r
.btoast{position:absolute;left:50%;bottom:100%;transform:translate(-50%,-10px);z-index:5;pointer-events:none;width:max-content;max-width:min(520px,92vw);padding:9px 16px;border:2px solid var(--ink);border-radius:10px;background:#fff3c8;font-weight:700;font-size:15px;text-align:center;box-shadow:0 4px 0 var(--ink);animation:btin .2s ease-out}\r
.bpanel>.btoast{bottom:96px;transform:translateX(-50%)}\r
.btoast.bad{background:#ffd9d2}\r
@keyframes btin{from{opacity:0}}\r
.bwait{position:absolute;inset:0;z-index:3;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;background:rgba(239,220,179,.55);cursor:progress;pointer-events:auto}\r
.bwait span{width:42px;height:42px;border-radius:50%;border:5px solid rgba(43,26,13,.25);border-top-color:var(--ink);animation:bspin .8s linear infinite}\r
.bwait b{font-family:var(--gothic);font-weight:900;font-size:24px;color:var(--navy)}\r
#wbet>.bwait{background:rgba(8,10,30,.25)}\r
@keyframes bspin{to{transform:rotate(360deg)}}\r
/* the result card */\r
.bend{left:50%;bottom:max(22px,env(safe-area-inset-bottom,0px));width:min(540px,calc(100% - 24px));padding:34px 20px 14px;transform:translateX(-50%);text-align:center;animation:bend .32s cubic-bezier(.16,1,.3,1) both}\r
@keyframes bend{from{opacity:0;transform:translate(-50%,16px)}}\r
.brib{position:absolute;left:50%;top:0;transform:translate(-50%,-55%);z-index:1}\r
.brib span{display:block;padding:8px 44px 10px;font-family:var(--gothic);font-weight:900;font-size:34px;line-height:1;white-space:nowrap;\r
  clip-path:polygon(0 0,100% 0,calc(100% - 18px) 50%,100% 100%,0 100%,18px 50%);filter:drop-shadow(0 3px 0 var(--ink))}\r
.bend.win .brib span{color:var(--ink);background:linear-gradient(#ffe08a,#e0a91f 70%,#b8860b);text-shadow:0 1px 0 rgba(255,255,255,.5)}\r
.bend.loss .brib span{color:#fff3e8;background:linear-gradient(#c8392f,#8e1a14);text-shadow:0 2px 0 #4a0d09}\r
.bend.wait .brib span{color:#f6ead0;background:linear-gradient(#5a6070,#33384a)}\r
.bres{display:flex;align-items:center;gap:12px;padding:10px 12px;border:3px solid var(--ink);border-radius:12px;background:var(--card);text-align:left}\r
.bpor{flex:none;width:56px;height:56px;border-radius:8px;border:2px solid var(--ink);background:center 20%/cover no-repeat}\r
.bwho{flex:1;min-width:0;display:flex;flex-direction:column}\r
.bwho small,.bbig small{font-weight:700;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#6a5236}\r
.bwho b{font-size:18px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\r
.bbig{display:flex;flex-direction:column;align-items:flex-end}\r
.bbig b{font-family:var(--gothic);font-weight:900;font-size:40px;line-height:1;white-space:nowrap}\r
.bend.win .bbig b{color:var(--green)}.bend.loss .bbig b{color:var(--red)}.bend.wait .bbig b{color:var(--navy)}\r
.bdet{margin:10px 0 12px;font-size:14px;color:#5a4630}\r
.bacts{display:grid;grid-template-columns:3fr 2fr;gap:12px;align-items:stretch}\r
.bacts .bshort{grid-column:1/-1;text-align:left}\r
.bacts.one{grid-template-columns:1fr}\r
.blink{margin:12px auto 0;display:block;border:0;background:none;padding:6px 10px;font-weight:700;font-size:14px;color:var(--navy);text-decoration:underline;text-underline-offset:3px}\r
/* an upright phone: the panel is a bottom sheet over the lists, the result card spans the screen's foot */\r
@media (max-width:700px) and (min-height:501px),(max-width:700px) and (orientation:portrait){\r
  .bpanel{left:0;right:0;top:auto;bottom:0;width:auto;height:min(80%,680px);border-width:3px 0 0;border-radius:18px 18px 0 0;box-shadow:0 -6px 0 rgba(43,26,13,.3),inset 0 0 40px rgba(122,78,28,.3);animation-name:bup}\r
  .bpanel::before{inset:5px;border-radius:13px 13px 0 0}\r
  .bhead{padding:14px 14px 6px}\r
  .bhead h1{font-size:26px}\r
  .bchipc{font-size:15px}\r
  .btabs{margin:2px 14px 6px}\r
  .bbody{padding:2px 14px 8px}\r
  .blead{font-size:13px}\r
  .briders{gap:8px}\r
  .brider{min-height:60px;padding:7px 8px 7px 14px}\r
  .bri b{font-size:15px}\r
  .bpct{font-size:24px}\r
  .bslip{margin:0 10px calc(10px + env(safe-area-inset-bottom,0px));padding:10px}\r
  .bwin b{font-size:30px}\r
  .bbtn{font-size:18px;padding:8px 14px}\r
  .bend{bottom:calc(10px + env(safe-area-inset-bottom,0px));padding:30px 14px 10px}\r
  .brib span{font-size:28px;padding:7px 34px 9px}\r
  .bbig b{font-size:32px}\r
  .bacts{grid-template-columns:1fr}\r
}\r
/* a sideways phone: a narrower side panel, the slip and the stakes kept in view */\r
@media (orientation:landscape) and (max-height:500px){\r
  .bpanel{right:max(8px,env(safe-area-inset-right,0px));top:8px;height:auto;bottom:max(12px,env(safe-area-inset-bottom,0px));width:min(430px,58%)}\r
  .bhead{padding:10px 14px 4px}\r
  .bhead h1{font-size:24px}\r
  .btabs{margin:2px 14px 4px}\r
  .btabs button{padding:4px 8px;font-size:14px}\r
  .bbody{padding:2px 14px 6px}\r
  .blead{display:none}\r
  .bsect{margin:6px 0 5px;font-size:16px}\r
  .briders{grid-template-columns:repeat(4,minmax(0,1fr));gap:6px}\r
  .brider{min-height:0;grid-template-columns:minmax(0,1fr);row-gap:2px;padding:5px 6px 5px 12px;text-align:center}\r
  .bri b{font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\r
  .bri small{display:none}\r
  .bpct{font-size:20px;text-align:center}\r
  .bpct small{display:none}\r
  .brider.on::after{right:-7px;top:-7px;width:18px;height:18px;font-size:11px;line-height:18px}\r
  .bstake{min-height:34px;font-size:14px}\r
  .bslip{margin:0 10px 8px;padding:6px 10px;gap:6px}\r
  .bslipt>span{font-size:16px}\r
  .bwin b{font-size:24px}\r
  .bbtn{min-height:44px;font-size:16px}\r
  .bend{bottom:max(8px,env(safe-area-inset-bottom,0px));padding:26px 14px 8px;width:min(520px,calc(100% - 24px))}\r
  .brib span{font-size:24px;padding:6px 30px 8px}\r
  .bres{padding:6px 10px}\r
  .bpor{width:44px;height:44px}\r
  .bbig b{font-size:30px}\r
  .bdet{margin:6px 0 8px}\r
  .blink{margin-top:6px;padding:2px 8px}\r
}\r
@media (prefers-reduced-motion:reduce){.bpanel,.bend,.btoast{animation:none}.brider{transition:none}}\r
`,X="https://app.roninchain.com/swap?outputCurrency=0xc0Ca45c2e9448D3876Ca86220B2418C719298396",$=[100,1e3,1e4,1e5],D={free:"r1",ronke:"r2",colored:"r3",one:"r4"},U={gambaBet:"Placing your bet",gambaSettle:"The judges decide",sync:"Updating",faucet:"Adding test HORSKE"},x=c=>String(c??"").replace(/[&<>"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[m]),V=c=>c?q(c)||c:"",_=c=>`${(Math.round((c||0)*1e4)/100).toFixed(2)}%`,A=c=>`${c>0?"+":c<0?"−":""}${d(Math.abs(c))}`;function Z({room:c,player:m,village:E}){const h=S.gamba,r={tab:"bet",sort:"wagered",rider:null,amount:null,v:0};document.head.insertAdjacentHTML("beforeend",`<style id="web-bet">${I}</style>`);const u=document.createElement("div");u.id="wbet",document.body.appendChild(u);const v=(e,n)=>window.sendAction(e,n),k=()=>{r.v++};function z(){const e=m.state,n=e.econ||null,a=e.fake||{},t=W(a)!=="free";r.rider==null&&(r.rider=e.gambaPick&&e.gambaPick.rider||"free"),(!R(r.rider,a)||t&&r.rider==="free")&&(r.rider=t?"ronke":"free"),r.amount==null&&(r.amount=e.gambaPick&&e.gambaPick.amount||1e3);const o=n?n.horske:null,i=F(),s=$.filter(b=>b<=i&&(o==null||b<=o));return s.length&&!s.includes(r.amount)&&(r.amount=s[s.length-1]),{s:e,ec:n,fake:a,holder:t,coins:o,max:i,fits:s,gt:n&&n.gtoday||{},riders:h.riders.filter(b=>!(t&&b.id==="free"))}}const w=(e,n,a="",t="gold",o="")=>`<button class="bbtn ${t}" data-act="${n}" ${a}>${e}${o?`<small>${o}</small>`:""}</button>`,P=e=>`<span class="bchipc"><i class="coin"></i>${e.coins==null?"…":d(e.coins)}</span>`,B=(e,n)=>`<div class="bshort"><p>You have ${d(e.coins||0)} HORSKE${n?`, and this bet takes ${d(n)}`:""}.</p>
    <div class="brow"><a class="bbtn navy" href="${X}" target="_blank" rel="noopener">Buy $HORSKE<small>on Ronin ↗</small></a>${e.s.tools?w(`+${d(S.faucet)} test HORSKE`,"faucet","","ghost"):""}</div></div>`;function Y(e,n){const a=R(e.id,n.fake),t=e.daily?Math.max(0,e.daily-(n.gt[e.id]||0)):null,o=r.rider===e.id,i=Math.round(j(e.id)*100),s=Math.round(e.cap*100),b=a?e.daily?t?`${t} of ${e.daily} boosted bets left today`:"Boosted bets used today: rides as a Ronke":`${i}% with no tap`:e.id==="ronke"?"Needs a Ronkeverse NFT":e.id==="one"?"Needs a 1/1":"Needs a colored Ronke";return`<button class="brider ${D[e.id]||"r1"}${o?" on":""}${a?"":" lk"}" data-act="rider" data-id="${e.id}" aria-pressed="${o}"${a?"":" disabled"}>
      <span class="bri"><b>${x(e.name)}</b><small>${b}</small></span><span class="bpct"><small>up to</small>${s}%</span></button>`}function N(e){const n=e.s,a=O(r.rider),t=Math.round(j(a.id)*100),o=Math.round(a.cap*100),i=e.ec&&e.ec.house||{bets:0,wagered:0,paid:0},s=i.wagered?Math.round((i.wagered-i.paid)/i.wagered*1e3)/10:null,b=e.fake.rarest||"",g=n.tools?`<label class="brare"><span>Your rarest Ronke <em>test</em></span>
      <select id="brare" data-r="${e.fake.ronkeverse||0}" data-o="${e.fake.oneOfOne||0}" data-c="${e.fake.colored||0}">
        <option value=""${b?"":" selected"} disabled>Say it</option>${h.bodies.map(l=>`<option value="${l.id}"${b===l.id?" selected":""}>${x(l.name)}${l.n?` · ${d(l.n)} exist`:""}</option>`).join("")}</select></label>`:"",f=$.map(l=>{const G=!e.fits.includes(l);return`<button class="bstake${r.amount===l?" on":""}" data-act="stake" data-v="${l}" aria-pressed="${r.amount===l}"${G?" disabled":""}>${d(l)}</button>`}).join(""),p=e.coins!=null&&e.fits.length>0?`<div class="bslip"><div class="bslipt"><span>Your bet</span><div class="bstakes" role="group" aria-label="Your bet">${f}</div></div>
        <div class="bslipr"><div class="bwin"><small>Win</small><b><i class="coin"></i>${d(r.amount*h.payout)}</b><span>${x(a.name)} · ${t}–${o}% chance</span></div>
        ${w(`Bet ${d(r.amount)}`,"bet","","gold",`pays ${h.payout}×`)}</div></div>`:e.coins==null?'<div class="bslip"><p class="bnote">Opening your purse…</p></div>':`<div class="bslip col">${B(e,$[0])}</div>`;return`<div class="bbody">
        <p class="blead">Bet against the house: a win pays ${h.payout}×. Each pass your tap adds up to +${Math.round(h.barPerPass*100)}%, and the third pass decides.</p>
        ${g}
        <h3 class="bsect">Your rider</h3><div class="briders">${e.riders.map(l=>Y(l,e)).join("")}</div>
        <p class="bhouse">${i.bets?`This season: ${d(i.bets)} bet${i.bets===1?"":"s"} · ${d(i.wagered)} wagered · the house kept ${d(i.wagered-i.paid)}${s!=null?` (${s}%)`:""}`:"No bets this season yet."}</p>
      </div>${p}`}function C(e){const n=m.userId,a=e.ec&&e.ec.glb||[],t=h.lbMinBets,o=e.ec&&e.ec.gme||{bets:0},i=a.slice().sort((p,l)=>l.net-p.net),s=r.sort==="net"?i:a,b=a.findIndex(p=>p.id===n)+1,g=i.findIndex(p=>p.id===n)+1,f=o.bets>=t&&b?`You are #${b} by volume and #${g} by profit.`:`${Math.max(0,t-o.bets)} more bet${t-o.bets===1?"":"s"} this season to enter the board.`,y=s.slice(0,20).map((p,l)=>`<li class="${p.id===n?"me":""}"><b class="brank">${l+1}</b><span class="bname"><b>${x(p.name||"Knight")}</b><small>${d(p.bets)} bets · ${r.sort==="wagered"?`net ${A(p.net)}`:`${d(p.wagered)} wagered`}</small></span>
      <b class="bval${r.sort==="net"?p.net>0?" up":p.net<0?" down":"":""}">${r.sort==="wagered"?d(p.wagered):A(p.net)}</b></li>`).join("");return`<div class="bbody">
        <div class="bsort" role="group" aria-label="Order">${[["wagered","By volume"],["net","By profit"]].map(([p,l])=>`<button class="${r.sort===p?"on":""}" data-act="sort" data-k="${p}" aria-pressed="${r.sort===p}">${l}</button>`).join("")}</div>
        ${y?`<ol class="blist">${y}</ol>`:`<p class="bempty">Nobody has ${t} settled bets this season yet.</p>`}
        <p class="bhouse">${f} The board counts knights with ${t} or more settled bets this season.</p></div>`}function L(e){const n=e.s,a=n.bout||{},t=n.vs||{},o=O(a.rider),i=a.pending?"wait":a.win?"win":"loss",s=a.pending?"Settling…":a.win?"You win!":"The house wins",b=a.pending?d(a.amount):a.win?`+${d(a.payout)}`:`−${d(a.amount)}`,g=a.pending?"Bet against":a.win?"Beat":"Lost to",f=e.coins==null||e.coins>=(a.amount||0)?w("Bet again","again","","gold",`${d(a.amount)} on the ${x(o.name)}`):B(e,a.amount);return`<section class="bend ${i}" aria-labelledby="btitle">
      <div class="brib"><span id="btitle">${s}</span></div>
      <div class="bres"><span class="bpor" style="background-image:url(${V(t.portrait)});background-color:${x(t.color||"#888")}"></span>
        <span class="bwho"><small>${g}</small><b>${x(a.rival||t.name||"The House")}</b></span>
        <span class="bbig"><small>${a.pending?"Bet":"Result"}</small><b>${b}</b></span></div>
      <p class="bdet">${x(o.name)} · bet ${d(a.amount)} · chance ${_(a.chance)}${a.pending?" · the bank settles it on your next visit":""}</p>
      <div class="bacts">${f}${w("Change the bet","change","","ghost")}</div>
      <button class="blink" data-act="village">Back to the village</button>
    </section>`}function H(){const e=z(),n=e.s,a=n.toast&&c.nowMs-n.toast.at<5e3?n.toast:null,t=a?`<div class="btoast${a.ok===!1?" bad":""}" role="status">${x(a.text)}</div>`:"",o=n.busy?`<div class="bwait"><span></span><b>${x(U[n.busy]||"Working")}…</b></div>`:"";return n.phase==="end"&&n.bout&&n.bout.gamba?`${L(e)}${t}${o}`:n.phase==="end"?`<section class="bend wait" aria-labelledby="btitle"><div class="brib"><span id="btitle">Bout over</span></div>
      <p class="bdet">The Lists take bets for now.</p><div class="bacts one">${w("Back to the bets","change")}</div></section>${t}${o}`:n.phase!=="armory"?"":`<section class="bpanel" aria-labelledby="bh">
        <header class="bhead"><button class="bback" data-act="village">‹ Village</button><h1 id="bh">The Lists</h1>${P(e)}</header>
        <nav class="btabs" role="tablist">${[["bet","Bet"],["board","Board"]].map(([i,s])=>`<button role="tab" aria-selected="${r.tab===i}" class="${r.tab===i?"on":""}" data-act="tab" data-k="${i}">${s}</button>`).join("")}</nav>
        ${r.tab==="board"?C(e):N(e)}
        ${t}${o}
      </section>`}let T="";function M(){var a,t,o,i,s,b,g,f;const e=m.state,n=[e.phase,(a=e.econ)==null?void 0:a.at,e.busy,(t=e.toast)==null?void 0:t.at,e.toast&&c.nowMs-e.toast.at<5e3,(o=e.fake)==null?void 0:o.rarest,(i=e.fake)==null?void 0:i.ronkeverse,(s=e.fake)==null?void 0:s.oneOfOne,(b=e.fake)==null?void 0:b.colored,(g=e.bout)==null?void 0:g.pending,(f=e.bout)==null?void 0:f.win,r.v].join("|");n!==T&&(T=n,K(u,`<div id="wbet">${H()}</div>`)),requestAnimationFrame(M)}requestAnimationFrame(M),u.addEventListener("click",e=>{var i;const n=e.target.closest("[data-act]");if(!n||!u.contains(n)||n.disabled)return;const a=z(),t=n.dataset.act,o=a.s;if(t==="village"){location.assign(E);return}if(t==="tab"){r.tab=n.dataset.k,k();return}if(t==="sort"){r.sort=n.dataset.k,k();return}if(t==="rider"){r.rider=n.dataset.id,(i=window.gambaRider)==null||i.call(window,r.rider),k();return}if(t==="stake"){r.amount=+n.dataset.v,k();return}if(t==="bet"){o.busy||v("gambaBet",{gambaBet:{rider:r.rider,amount:r.amount}});return}if(t==="again"){const s=o.bout||{};o.busy||v("gambaBet",{gambaBet:{rider:s.rider||r.rider,amount:s.amount||r.amount}});return}if(t==="change"){v("toArmory");return}if(t==="faucet"){v("faucet");return}}),u.addEventListener("keydown",e=>{(e.key==="Enter"||e.key===" ")&&e.target.closest("button, a, select")&&e.stopPropagation()}),u.addEventListener("change",e=>{const n=e.target;n.id==="brare"&&v("fake",{fake:{ronkeverse:+n.dataset.r,oneOfOne:+n.dataset.o,colored:+n.dataset.c,rarest:n.value}})})}export{Z as startBet};

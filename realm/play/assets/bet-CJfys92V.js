import{m as C,c as G}from"./index-CY_wTdpA.js";import{x as K,y as j,S as R,z as U,w as q,q as d}from"./econ-Deg9OsSu.js";const D=`/* The Lists' betting panel and result card (src/bet/bet.js), in the joust HUD's own look (world/scripts/ui.js: navy
   panels in a gold ring, cream cards, the red JOUST! button), so they sit with the bout's HUD over the bright lists.
   Rafael on the paper version, 16/10: "achei que ficou confuso. não sei se o papel funciona aqui". A side panel on a
   wide screen, a bottom sheet on an upright phone. */
#wbet{--navy:#1d3778;--navy2:#132a62;--deep:#0a1636;--well:#0f2150;--gold1:#ffe08a;--gold2:#d9a21f;--ink:#2b1a0d;--cream:#fff3d6;--muted:#c9d4f2;
  --card1:#fbf0d4;--card2:#efdcae;--win:#8fd18b;--lose:#ff9a7a;--ring:0 0 0 2px var(--deep),0 0 0 5px var(--gold2),0 0 0 7px var(--deep);
  --gothic:"Grenze Gotisch",Georgia,serif;--ui:Gelasio,Georgia,"Times New Roman",serif;
  position:fixed;inset:0;z-index:40;pointer-events:none;font-family:var(--ui);color:var(--cream);-webkit-tap-highlight-color:transparent}
#wbet *{box-sizing:border-box}
:where(#wbet) button{font:inherit;color:inherit;cursor:pointer}
.bpanel,.bend{pointer-events:auto;position:absolute;background:linear-gradient(var(--navy),var(--navy2));border-radius:12px;
  box-shadow:var(--ring),0 9px 0 7px rgba(10,22,54,.55),inset 0 0 0 2px rgba(255,224,138,.22)}
.bpanel{right:max(26px,env(safe-area-inset-right,0px));top:26px;width:min(380px,calc(100% - 52px));max-height:calc(100% - 60px);display:flex;flex-direction:column;animation:bin .24s cubic-bezier(.16,1,.3,1)}
@keyframes bin{from{opacity:0;transform:translateX(14px)}}
@keyframes bup{from{opacity:0;transform:translateY(24px)}}
.bhead{position:relative;z-index:4;display:flex;align-items:center;gap:10px;padding:14px 14px 10px}
.bhead h1{margin:0;font-family:var(--gothic);font-weight:900;font-size:30px;line-height:1;color:var(--gold1);text-shadow:2px 2px 0 var(--deep)}
.bback{flex:none;padding:7px 11px;border:0;border-radius:7px;font-weight:700;font-size:14px;color:var(--ink)!important;background:linear-gradient(var(--gold1),var(--gold2));box-shadow:0 0 0 2px var(--deep),0 3px 0 2px var(--deep)}
.bchipc{margin-left:auto;display:inline-flex;align-items:center;gap:7px;padding:4px 12px 4px 5px;border-radius:999px;background:var(--deep);box-shadow:inset 0 0 0 1px rgba(255,224,138,.4);font-weight:700;font-size:16px;color:var(--gold1);white-space:nowrap}
.coin{display:inline-block;width:20px;height:20px;flex:none;border-radius:50%;background:radial-gradient(circle at 35% 35%,#ffe9a0,#e0a91f 60%,#8a5f10);box-shadow:0 0 0 2px var(--deep);vertical-align:-4px}
.btabs{display:flex;gap:6px;margin:0 14px 4px}
.btabs button,.bsort button,.bpick button{border:0;border-radius:7px;font-weight:700;color:var(--muted);background:var(--well);box-shadow:inset 0 0 0 2px rgba(255,224,138,.22)}
.btabs button{flex:1;min-height:38px;font-size:15px}
.btabs button.on,.bsort button.on,.bpick button.on{color:var(--ink);background:linear-gradient(var(--gold1),var(--gold2));box-shadow:0 0 0 2px var(--deep),0 3px 0 2px var(--deep)}
.bbody{position:relative;flex:1 1 auto;min-height:0;overflow:auto;padding:2px 16px 16px;scrollbar-width:thin;scrollbar-color:#3a5aa8 transparent}
.bq{margin:12px 0 8px;font-weight:700;font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--gold1)}
/* the stakes: each says what it wins */
.bstakes{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.bstake{display:flex;flex-direction:column;align-items:center;gap:2px;padding:9px 6px 10px;border:0;border-radius:9px;color:var(--ink)!important;background:linear-gradient(var(--card1),var(--card2));box-shadow:0 0 0 2px var(--deep),0 4px 0 2px var(--deep);transition:transform .1s}
.bstake small{font-weight:700;font-size:11px;letter-spacing:.16em;text-transform:uppercase;opacity:.65}
.bstake b{font-family:var(--gothic);font-weight:900;font-size:30px;line-height:1}
.bstake em{font-style:normal;font-weight:700;font-size:13px;color:#2f7a2b}
.bstake.on{background:linear-gradient(var(--gold1),var(--gold2));box-shadow:0 0 0 2px var(--deep),0 0 0 5px var(--cream),0 0 0 7px var(--deep),0 4px 0 7px var(--deep)}
.bstake.on em{color:#1f5a1c}
.bstake:not(:disabled):active{transform:translateY(3px)}
.bstake:disabled{opacity:.35;cursor:default}
.bpick{display:flex;flex-wrap:wrap;gap:8px}
.bpick button{flex:1 1 0;min-width:120px;min-height:44px;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:4px 8px;font-size:15px}
.bpick button small{font-weight:500;font-size:11px;opacity:.85}
/* the one action: the HUD's JOUST! button */
.bgo{width:100%;margin:20px 0 4px;display:flex;flex-direction:column;align-items:center;gap:1px;min-height:60px;padding:8px 10px;border:0;border-radius:10px;color:var(--cream)!important;text-shadow:2px 2px 0 #5a1410;
  background:linear-gradient(#e8564a,#b02a22 60%,#8e1f1a);box-shadow:0 0 0 3px var(--ink),0 0 0 7px var(--gold2),0 0 0 9px var(--ink),0 7px 0 9px var(--ink);transition:transform .1s}
.bgo b{font-family:var(--gothic);font-weight:900;font-size:30px;line-height:1}
.bgo small{font-weight:700;font-size:14px}
.bgo:active{transform:translateY(4px);box-shadow:0 0 0 3px var(--ink),0 0 0 7px var(--gold2),0 0 0 9px var(--ink),0 3px 0 9px var(--ink)}
.bhint{margin:18px 0 0;font-size:13px;line-height:1.4;color:var(--muted);text-align:center}
.btest{margin-top:14px;padding-top:10px;border-top:1px solid rgba(255,224,138,.18);font-size:13px;color:var(--muted)}
.btest summary{display:inline-flex;align-items:center;gap:6px;cursor:pointer;list-style:none;font-weight:700;letter-spacing:.06em}
.btest summary::-webkit-details-marker{display:none}
.btest summary::before{content:"▸";color:var(--gold1)}
.btest[open] summary::before{content:"▾"}
.btest p{margin:6px 0 0;font-size:12px;opacity:.8}
.brare{display:flex;align-items:center;gap:10px;margin-top:8px;font-weight:700}
.brare select{flex:1;min-width:0;height:36px;padding:0 8px;border:0;border-radius:7px;background:var(--card1);color:var(--ink);font:inherit;font-weight:500;box-shadow:0 0 0 2px var(--deep)}
/* buttons of the short purse and the result card */
.bbtn{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;min-height:50px;padding:7px 14px;border:0;border-radius:9px;font-weight:700;font-size:18px;line-height:1.1;text-decoration:none;white-space:nowrap;transition:transform .1s}
.bbtn small{font-size:12px;font-weight:500}
.bbtn:active{transform:translateY(3px)}
.bbtn.gold{color:var(--ink);background:linear-gradient(var(--gold1),var(--gold2));box-shadow:0 0 0 2px var(--deep),0 4px 0 2px var(--deep)}
.bbtn.navy{color:var(--gold1);background:linear-gradient(#2c4f9e,var(--navy));box-shadow:0 0 0 2px var(--deep),0 0 0 4px rgba(255,224,138,.35),0 4px 0 4px var(--deep)}
.bbtn.red{color:var(--cream);text-shadow:2px 2px 0 #5a1410;background:linear-gradient(#e8564a,#b02a22 60%,#8e1f1a);box-shadow:0 0 0 2px var(--ink),0 0 0 5px var(--gold2),0 0 0 7px var(--ink),0 5px 0 7px var(--ink)}
.bshort{margin-top:16px;text-align:center}
.bshort p{margin:0 0 12px;font-size:14px;line-height:1.4}
.brow{display:flex;flex-wrap:wrap;gap:12px}
.brow .bbtn{flex:1;min-width:150px;font-size:16px;min-height:46px}
/* the board */
.bsort{display:flex;gap:6px;margin:8px 0 10px}
.bsort button{flex:1;min-height:34px;font-size:14px}
.blist{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:6px}
.blist li{display:flex;align-items:center;gap:10px;min-height:48px;padding:6px 10px;border-radius:8px;background:var(--well);box-shadow:inset 0 0 0 2px rgba(255,224,138,.18)}
.blist li.me{box-shadow:inset 0 0 0 2px var(--gold1)}
.brank{width:26px;text-align:center;font-family:var(--gothic);font-weight:900;font-size:20px;color:var(--gold1)}
.bname{flex:1;min-width:0;display:flex;flex-direction:column}
.bname b{font-size:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.bname small{font-size:12px;color:var(--muted)}
.bval{font-size:15px}.bval.up{color:var(--win)}.bval.down{color:var(--lose)}
.bempty{margin:8px 0;padding:18px;border-radius:10px;border:2px dashed rgba(255,224,138,.3);text-align:center;font-size:15px}
.bhouse{margin:12px 0 0;font-size:12px;line-height:1.4;color:var(--muted)}
/* the toast (top of the screen, as the world's) and the busy veil */
.btoast{position:absolute;left:50%;top:max(16px,env(safe-area-inset-top,0px));transform:translateX(-50%);z-index:5;pointer-events:none;width:max-content;max-width:min(520px,92vw);padding:9px 18px;border-radius:9px;
  background:linear-gradient(var(--navy),var(--navy2));box-shadow:var(--ring);font-weight:700;font-size:15px;color:var(--gold1);text-align:center;animation:btin .2s ease-out}
.btoast.bad{color:var(--cream);background:linear-gradient(#b02a22,#7d1a14)}
@keyframes btin{from{opacity:0;transform:translate(-50%,-6px)}}
.bwait{position:absolute;inset:0;z-index:3;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;border-radius:12px;background:rgba(10,22,54,.62);cursor:progress;pointer-events:auto}
.bwait span{width:42px;height:42px;border-radius:50%;border:5px solid rgba(255,224,138,.25);border-top-color:var(--gold1);animation:bspin .8s linear infinite}
.bwait b{font-family:var(--gothic);font-weight:900;font-size:24px;color:var(--gold1)}
#wbet>.bwait{border-radius:0;background:rgba(10,22,54,.35)}
@keyframes bspin{to{transform:rotate(360deg)}}
/* the result card */
.bend{left:50%;bottom:max(24px,env(safe-area-inset-bottom,0px));width:min(540px,calc(100% - 36px));padding:38px 18px 14px;transform:translateX(-50%);text-align:center;animation:bend .32s cubic-bezier(.16,1,.3,1) both}
@keyframes bend{from{opacity:0;transform:translate(-50%,16px)}}
.brib{position:absolute;left:50%;top:0;transform:translate(-50%,-55%);z-index:1;filter:drop-shadow(0 3px 0 var(--deep))}
.brib span{display:block;padding:6px 46px 8px;font-family:var(--gothic);font-weight:900;font-size:36px;line-height:1;white-space:nowrap;clip-path:polygon(0 0,100% 0,calc(100% - 18px) 50%,100% 100%,0 100%,18px 50%)}
.bend.win .brib span{color:var(--ink);background:linear-gradient(var(--gold1),var(--gold2) 70%,#a87a10)}
.bend.loss .brib span{color:var(--cream);text-shadow:2px 2px 0 #4a0d09;background:linear-gradient(#e8564a,#b02a22 60%,#8e1f1a)}
.bend.wait .brib span{color:var(--cream);background:linear-gradient(#5a6070,#33384a)}
.bres{display:flex;align-items:center;gap:12px;padding:10px 12px;border-radius:10px;background:var(--well);box-shadow:inset 0 0 0 2px rgba(255,224,138,.22);text-align:left}
.bpor{flex:none;width:56px;height:56px;border-radius:8px;box-shadow:0 0 0 2px var(--gold2);background:center 20%/cover no-repeat}
.bwho{flex:1;min-width:0;display:flex;flex-direction:column}
.bwho small,.bbig small{font-weight:700;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--gold1);opacity:.85}
.bwho b{font-size:18px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.bbig{display:flex;flex-direction:column;align-items:flex-end}
.bbig b{font-family:var(--gothic);font-weight:900;font-size:40px;line-height:1;white-space:nowrap;text-shadow:2px 2px 0 var(--deep)}
.bend.win .bbig b{color:var(--win)}.bend.loss .bbig b{color:var(--lose)}.bend.wait .bbig b{color:var(--gold1)}
.bdet{margin:10px 0 16px;font-size:14px;color:var(--muted)}
.bacts{display:grid;grid-template-columns:3fr 2fr;gap:18px;align-items:stretch;padding:0 6px}
.bacts .bshort{grid-column:1/-1;margin-top:0}
.bacts.one{grid-template-columns:1fr}
.blink{margin:16px auto 0;display:block;border:0;background:none;padding:6px 10px;font-weight:700;font-size:14px;color:var(--gold1)!important;text-decoration:underline;text-underline-offset:3px}
/* an upright phone: the panel is a bottom sheet, the result card spans the screen's foot */
@media (max-width:700px) and (min-height:501px),(max-width:700px) and (orientation:portrait){
  .bpanel{left:0;right:0;top:auto;bottom:0;width:auto;max-height:88%;border-radius:16px 16px 0 0;animation-name:bup}
  .bhead{padding:14px 14px 8px}
  .bhead h1{font-size:27px}
  .bchipc{font-size:15px}
  .bbody{padding:2px 14px calc(16px + env(safe-area-inset-bottom,0px))}
  .bstake b{font-size:28px}
  .bend{bottom:calc(12px + env(safe-area-inset-bottom,0px));padding:32px 14px 10px}
  .brib span{font-size:30px;padding:6px 34px 8px}
  .bbig b{font-size:32px}
  .bacts{grid-template-columns:1fr;gap:18px}
}
/* a sideways phone: a side panel, the stakes in one row */
@media (orientation:landscape) and (max-height:500px){
  .bpanel{right:max(12px,env(safe-area-inset-right,0px));top:12px;width:min(410px,58%);max-height:calc(100% - 24px)}
  .bhead{padding:9px 12px 6px}
  .bhead h1{font-size:23px}
  .bback{padding:5px 9px;font-size:13px}
  .bchipc{font-size:14px;padding:3px 10px 3px 4px}
  .btabs{margin:0 12px 2px}
  .btabs button{min-height:32px;font-size:14px}
  .bbody{padding:2px 12px 12px}
  .bq{margin:8px 0 6px}
  .bstakes{grid-template-columns:repeat(4,1fr);gap:9px}
  .bstake{padding:5px 3px 6px}
  .bstake b{font-size:19px}
  .bstake small{font-size:9px}
  .bstake em{font-size:11px}
  .bgo{min-height:46px;margin-top:16px}
  .bgo b{font-size:22px}
  .bgo small{font-size:12px}
  .bhint{margin-top:12px;font-size:12px}
  .bend{bottom:max(10px,env(safe-area-inset-bottom,0px));padding:28px 14px 8px;width:min(520px,calc(100% - 28px))}
  .brib span{font-size:24px;padding:5px 30px 7px}
  .bres{padding:6px 10px}
  .bpor{width:44px;height:44px}
  .bbig b{font-size:30px}
  .bdet{margin:6px 0 12px}
  .bbtn{min-height:42px;font-size:16px}
  .blink{margin-top:10px;padding:2px 8px}
}
@media (prefers-reduced-motion:reduce){.bpanel,.bend,.btoast{animation:none}.bstake,.bgo,.bbtn{transition:none}}
`,N="https://app.roninchain.com/swap?outputCurrency=0xc0Ca45c2e9448D3876Ca86220B2418C719298396",z=[100,1e3,1e4,1e5],I={gambaBet:"Placing your bet",gambaSettle:"The judges decide",sync:"Updating",faucet:"Adding test HORSKE"},g=b=>String(b??"").replace(/[&<>"]/g,u=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[u]),W=b=>b?G(b)||b:"",F=b=>`${(Math.round((b||0)*1e4)/100).toFixed(2)}%`,A=b=>`${b>0?"+":b<0?"−":""}${d(Math.abs(b))}`;function V({room:b,player:u,village:E}){const v=R.gamba,n={tab:"bet",sort:"wagered",rider:null,amount:null,test:!1,v:0};document.head.insertAdjacentHTML("beforeend",`<style id="web-bet">${D}</style>`);const m=document.createElement("div");m.id="wbet",document.body.appendChild(m);const w=(e,t)=>window.sendAction(e,t),k=()=>{n.v++};function B(){const e=u.state,t=e.econ||null,a=e.fake||{},o=K(a)!=="free";n.rider==null&&(n.rider=e.gambaPick&&e.gambaPick.rider||"free"),(!j(n.rider,a)||o&&n.rider==="free")&&(n.rider=o?"ronke":"free"),n.amount==null&&(n.amount=e.gambaPick&&e.gambaPick.amount||1e3);const i=t?t.horske:null,r=U(),l=z.filter(c=>c<=r&&(i==null||c<=i));return l.length&&!l.includes(n.amount)&&(n.amount=l[l.length-1]),{s:e,ec:t,fake:a,holder:o,coins:i,max:r,fits:l,gt:t&&t.gtoday||{},riders:v.riders.filter(c=>!(o&&c.id==="free"))}}const $=(e,t,a="",o="gold",i="")=>`<button class="bbtn ${o}" data-act="${t}" ${a}>${e}${i?`<small>${i}</small>`:""}</button>`,M=e=>`<span class="bchipc"><i class="coin"></i>${e.coins==null?"…":d(e.coins)}</span>`,T=(e,t)=>`<div class="bshort"><p>You have ${d(e.coins||0)} HORSKE${t?`, and this bet takes ${d(t)}`:""}.</p>
    <div class="brow"><a class="bbtn gold" href="${N}" target="_blank" rel="noopener">Buy $HORSKE<small>on Ronin ↗</small></a>${e.s.tools?$(`+${d(R.faucet)} test HORSKE`,"faucet","","navy"):""}</div></div>`;function Y(e){const t=e.s,a=q(n.rider),o=Math.round(a.cap*100),i=z.map(s=>{const h=n.amount===s;return`<button class="bstake${h?" on":""}" data-act="stake" data-v="${s}" aria-pressed="${h}"${e.fits.includes(s)?"":" disabled"}><small>Bet</small><b>${d(s)}</b><em>win ${d(s*v.payout)}</em></button>`}).join(""),r=e.riders.filter(s=>j(s.id,e.fake)),l=r.length>1?`<p class="bq">Rider</p><div class="bpick" role="group" aria-label="Rider">${r.map(s=>{const h=n.rider===s.id,p=s.daily?Math.max(0,s.daily-(e.gt[s.id]||0)):null;return`<button class="${h?"on":""}" data-act="rider" data-id="${s.id}" aria-pressed="${h}">${g(s.name)} · ${Math.round(s.cap*100)}%${p!=null?`<small>${p?`${p} boosted left today`:"boosted bets used today"}</small>`:""}</button>`}).join("")}</div>`:"",c=e.coins==null?'<p class="bhint">Opening your purse…</p>':e.fits.length?`<button class="bgo" data-act="bet"><b>Bet ${d(n.amount)}</b><small>to win ${d(n.amount*v.payout)}</small></button>
        <p class="bhint">Your chance: up to ${o}%. Hit the bar on each pass to raise it.</p>`:T(e,z[0]),x=e.fake.rarest||"",f=t.tools?`<details class="btest"${n.test?" open":""}><summary data-act="testmode">Test mode</summary>
      <label class="brare"><span>Your rarest Ronke</span><select id="brare" data-r="${e.fake.ronkeverse||0}" data-o="${e.fake.oneOfOne||0}" data-c="${e.fake.colored||0}">
        <option value=""${x?"":" selected"} disabled>Say it</option>${v.bodies.map(s=>`<option value="${s.id}"${x===s.id?" selected":""}>${g(s.name)}${s.n?` · ${d(s.n)} exist`:""}</option>`).join("")}</select></label>
      <p>Once live, your wallet says it.</p></details>`:"";return`<div class="bbody"><p class="bq">Your bet</p><div class="bstakes" role="group" aria-label="Your bet">${i}</div>${l}${c}${f}</div>`}function H(e){const t=u.userId,a=e.ec&&e.ec.glb||[],o=v.lbMinBets,i=e.ec&&e.ec.gme||{bets:0},r=e.ec&&e.ec.house||{bets:0,wagered:0,paid:0},l=a.slice().sort((p,y)=>y.net-p.net),c=n.sort==="net"?l:a,x=a.findIndex(p=>p.id===t)+1,f=l.findIndex(p=>p.id===t)+1,s=i.bets>=o&&x?`You are #${x} by volume and #${f} by profit.`:`${Math.max(0,o-i.bets)} more bet${o-i.bets===1?"":"s"} this season to enter the board.`,h=c.slice(0,20).map((p,y)=>`<li class="${p.id===t?"me":""}"><b class="brank">${y+1}</b><span class="bname"><b>${g(p.name||"Knight")}</b><small>${d(p.bets)} bets · ${n.sort==="wagered"?`net ${A(p.net)}`:`${d(p.wagered)} wagered`}</small></span>
      <b class="bval${n.sort==="net"?p.net>0?" up":p.net<0?" down":"":""}">${n.sort==="wagered"?d(p.wagered):A(p.net)}</b></li>`).join("");return`<div class="bbody">
        <div class="bsort" role="group" aria-label="Order">${[["wagered","By volume"],["net","By profit"]].map(([p,y])=>`<button class="${n.sort===p?"on":""}" data-act="sort" data-k="${p}" aria-pressed="${n.sort===p}">${y}</button>`).join("")}</div>
        ${h?`<ol class="blist">${h}</ol>`:`<p class="bempty">Nobody has ${o} settled bets this season yet.</p>`}
        <p class="bhouse">${s} The board counts knights with ${o} or more settled bets this season.</p>
        <p class="bhouse">${r.bets?`This season: ${d(r.bets)} bet${r.bets===1?"":"s"} · ${d(r.wagered)} wagered · paid out ${d(r.paid)}`:"No bets this season yet."}</p></div>`}function L(e){const t=e.s,a=t.bout||{},o=t.vs||{},i=q(a.rider),r=a.pending?"wait":a.win?"win":"loss",l=a.pending?"Settling…":a.win?"You win!":"The house wins",c=a.pending?d(a.amount):a.win?`+${d(a.payout)}`:`−${d(a.amount)}`,x=a.pending?"Bet against":a.win?"Beat":"Lost to",f=e.coins==null||e.coins>=(a.amount||0)?$("Bet again","again","","red",`${d(a.amount)} on the ${g(i.name)}`):T(e,a.amount);return`<section class="bend ${r}" aria-labelledby="btitle">
      <div class="brib"><span id="btitle">${l}</span></div>
      <div class="bres"><span class="bpor" style="background-image:url(${W(o.portrait)});background-color:${g(o.color||"#888")}"></span>
        <span class="bwho"><small>${x}</small><b>${g(a.rival||o.name||"The House")}</b></span>
        <span class="bbig"><small>${a.pending?"Bet":"Result"}</small><b>${c}</b></span></div>
      <p class="bdet">${g(i.name)} · bet ${d(a.amount)} · chance ${F(a.chance)}${a.pending?" · the bank settles it on your next visit":""}</p>
      <div class="bacts">${f}${$("Change the bet","change","","navy")}</div>
      <button class="blink" data-act="village">Back to the village</button>
    </section>`}function P(){const e=B(),t=e.s,a=t.toast&&b.nowMs-t.toast.at<5e3?t.toast:null,o=a?`<div class="btoast${a.ok===!1?" bad":""}" role="status">${g(a.text)}</div>`:"",i=t.busy?`<div class="bwait"><span></span><b>${g(I[t.busy]||"Working")}…</b></div>`:"";return t.phase==="end"&&t.bout&&t.bout.gamba?`${L(e)}${o}${i}`:t.phase==="end"?`<section class="bend wait" aria-labelledby="btitle"><div class="brib"><span id="btitle">Bout over</span></div>
      <p class="bdet">The Lists take bets for now.</p><div class="bacts one">${$("Back to the bets","change","","red")}</div></section>${o}${i}`:t.phase!=="armory"?"":`<section class="bpanel" aria-labelledby="bh">
        <header class="bhead"><button class="bback" data-act="village">‹ Village</button><h1 id="bh">The Lists</h1>${M(e)}</header>
        <nav class="btabs" role="tablist">${[["bet","Bet"],["board","Board"]].map(([r,l])=>`<button role="tab" aria-selected="${n.tab===r}" class="${n.tab===r?"on":""}" data-act="tab" data-k="${r}">${l}</button>`).join("")}</nav>
        ${n.tab==="board"?H(e):Y(e)}
        ${i}
      </section>${o}`}let O="";function S(){var a,o,i,r,l,c,x,f;const e=u.state,t=[e.phase,(a=e.econ)==null?void 0:a.at,e.busy,(o=e.toast)==null?void 0:o.at,e.toast&&b.nowMs-e.toast.at<5e3,(i=e.fake)==null?void 0:i.rarest,(r=e.fake)==null?void 0:r.ronkeverse,(l=e.fake)==null?void 0:l.oneOfOne,(c=e.fake)==null?void 0:c.colored,(x=e.bout)==null?void 0:x.pending,(f=e.bout)==null?void 0:f.win,n.v].join("|");t!==O&&(O=t,C(m,`<div id="wbet">${P()}</div>`)),requestAnimationFrame(S)}requestAnimationFrame(S),m.addEventListener("click",e=>{var r;const t=e.target.closest("[data-act]");if(!t||!m.contains(t)||t.disabled)return;const a=B(),o=t.dataset.act,i=a.s;if(o==="village"){location.assign(E);return}if(o==="tab"){n.tab=t.dataset.k,k();return}if(o==="sort"){n.sort=t.dataset.k,k();return}if(o==="rider"){n.rider=t.dataset.id,(r=window.gambaRider)==null||r.call(window,n.rider),k();return}if(o==="stake"){n.amount=+t.dataset.v,k();return}if(o==="bet"){i.busy||w("gambaBet",{gambaBet:{rider:n.rider,amount:n.amount}});return}if(o==="again"){const l=i.bout||{};i.busy||w("gambaBet",{gambaBet:{rider:l.rider||n.rider,amount:l.amount||n.amount}});return}if(o==="change"){w("toArmory");return}if(o==="faucet"){w("faucet");return}if(o==="testmode"){e.preventDefault(),n.test=!n.test,k();return}}),m.addEventListener("keydown",e=>{(e.key==="Enter"||e.key===" ")&&e.target.closest("button, a, select")&&e.stopPropagation()}),m.addEventListener("change",e=>{const t=e.target;t.id==="brare"&&w("fake",{fake:{ronkeverse:+t.dataset.r,oneOfOne:+t.dataset.o,colored:+t.dataset.c,rarest:t.value}})})}export{V as startBet};

import{S as R,I,z as L,q as s,w as P,J as N}from"./index--B0lZoqG.js";const W=`/* The Lists' betting panel and result card (src/bet/bet.js) as a wooden board in the style of the site's header bar\r
   (horske-realm assets bar-l/bar-mid/bar-r: dark wood, a gold bevel at the edge): Rafael, 17/10, on the menu "queria\r
   que o menus fosse algo de madeira dentro da justa", showing the header, "talvez algo nesse estilo?". The wood is the\r
   header's own (art/ui/wood-dark.webp: its band between the gold edges, mirrored below so it repeats with no seam),\r
   cut into planks; the red Bet button is the header's Log out button. A side panel on a wide screen, a bottom sheet\r
   on an upright phone. */\r
#wbet{--wood:#42250f;--deep:#1d130b;--well:rgba(20,10,3,.5);--wellring:rgba(240,189,69,.28);--gold:#f0bd45;--gold1:#ffe08a;--gold2:#d9a21f;--ink:#1d130b;\r
  --cream:#fff3d6;--muted:#e3cfa8;--card1:#fbf0d4;--card2:#efdcae;--win:#9be08f;--lose:#ff9a7a;\r
  --bevel:0 0 0 1px #452600,0 0 0 2px #926e3d,0 0 0 3px #d6b37f,0 0 0 4px #a1805a,0 0 0 6px #1d130b;\r
  --gothic:"Grenze Gotisch",Georgia,serif;--ui:Gelasio,Georgia,"Times New Roman",serif;\r
  position:fixed;inset:0;z-index:40;pointer-events:none;font-family:var(--ui);color:var(--cream);-webkit-tap-highlight-color:transparent}\r
#wbet *{box-sizing:border-box}\r
:where(#wbet) button{font:inherit;color:inherit;cursor:pointer}\r
/* the board: the header's wood in planks, its gold bevel round the edge */\r
.bpanel,.bend{pointer-events:auto;position:absolute;border-radius:6px;\r
  background:repeating-linear-gradient(180deg,transparent 0 56px,rgba(16,7,0,.6) 56px 58px,rgba(255,214,150,.09) 58px 59px,transparent 59px 60px),var(--wood) url(art/ui/wood-dark.webp) 0 0/700px auto repeat;\r
  box-shadow:var(--bevel),0 12px 22px rgba(0,0,0,.5),inset 0 0 40px rgba(0,0,0,.45)}\r
.bpanel{right:max(26px,env(safe-area-inset-right,0px));top:26px;width:min(410px,calc(100% - 52px));max-height:calc(100% - 60px);display:flex;flex-direction:column;animation:bin .24s cubic-bezier(.16,1,.3,1)}\r
@keyframes bin{from{opacity:0;transform:translateX(14px)}}\r
@keyframes bup{from{opacity:0;transform:translateY(24px)}}\r
.bhead{position:relative;z-index:4;display:flex;align-items:center;gap:10px;padding:14px 14px 10px}\r
.bhead h1{margin:0;white-space:nowrap;font-family:var(--gothic);font-weight:900;font-size:27px;line-height:1;color:var(--gold);-webkit-text-stroke:1.5px var(--ink);paint-order:stroke fill;text-shadow:0 3px 0 var(--ink)}\r
.bback{flex:none;padding:7px 11px;border:0;border-radius:7px;font-weight:700;font-size:14px;color:var(--ink)!important;background:linear-gradient(var(--gold1),var(--gold2));box-shadow:0 0 0 2px var(--deep),0 3px 0 2px var(--deep)}\r
.bchipc{margin-left:auto;display:inline-flex;align-items:center;gap:7px;padding:4px 12px 4px 5px;border-radius:999px;background:var(--well);box-shadow:inset 0 0 0 1px var(--wellring);font-weight:700;font-size:16px;color:var(--gold1);white-space:nowrap}\r
.coin{display:inline-block;width:20px;height:20px;flex:none;border-radius:50%;background:radial-gradient(circle at 35% 35%,#ffe9a0,#e0a91f 60%,#8a5f10);box-shadow:0 0 0 2px var(--deep);vertical-align:-4px}\r
.btabs{display:flex;gap:6px;margin:0 14px 4px}\r
.btabs button,.bsort button{border:0;border-radius:7px;font-weight:700;color:var(--muted);background:var(--well);box-shadow:inset 0 0 0 2px var(--wellring)}\r
.btabs button{flex:1;min-height:38px;font-size:15px}\r
.btabs button.on,.bsort button.on{color:var(--ink);background:linear-gradient(var(--gold1),var(--gold2));box-shadow:0 0 0 2px var(--deep),0 3px 0 2px var(--deep)}\r
.bbody{position:relative;flex:1 1 auto;min-height:0;overflow:auto;padding:2px 16px 16px;scrollbar-width:thin;scrollbar-color:#8a5f2a transparent}\r
.bq{margin:12px 0 8px;font-weight:700;font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--gold);text-shadow:0 1px 0 var(--ink)}\r
/* the stakes: each says what it wins */\r
.bstakes{display:grid;grid-template-columns:1fr 1fr;gap:12px}\r
.bstake{display:flex;flex-direction:column;align-items:center;gap:2px;padding:9px 6px 10px;border:0;border-radius:9px;color:var(--ink)!important;background:linear-gradient(var(--card1),var(--card2));box-shadow:0 0 0 2px var(--deep),0 4px 0 2px var(--deep);transition:transform .1s}\r
.bstake small{font-weight:700;font-size:11px;letter-spacing:.16em;text-transform:uppercase;opacity:.65}\r
.bstake b{font-family:var(--gothic);font-weight:900;font-size:30px;line-height:1}\r
.bstake em{font-style:normal;font-weight:700;font-size:13px;color:#2f7a2b}\r
.bstake.on{background:linear-gradient(var(--gold1),var(--gold2));box-shadow:0 0 0 2px var(--deep),0 0 0 5px var(--cream),0 0 0 7px var(--deep),0 4px 0 7px var(--deep)}\r
.bstake.on em{color:#1f5a1c}\r
.bstake:not(:disabled):active{transform:translateY(3px)}\r
.bstake:disabled{opacity:.35;cursor:default}\r
/* the one action: the header's red button, larger */\r
.bgo{width:100%;margin:20px 0 4px;display:flex;flex-direction:column;align-items:center;gap:1px;min-height:60px;padding:8px 10px;border:0;border-radius:10px;color:#fff!important;text-shadow:0 2px 0 #5a1410;\r
  background:linear-gradient(#c8363c,#8e1a1f);box-shadow:0 0 0 3px #d9a947,0 0 0 5px var(--ink),inset 0 3px 0 rgba(255,255,255,.3),0 6px 0 5px var(--ink);transition:transform .1s}\r
.bgo b{font-family:var(--gothic);font-weight:900;font-size:30px;line-height:1}\r
.bgo small{font-weight:700;font-size:14px}\r
.bgo:active{transform:translateY(4px);box-shadow:0 0 0 3px #d9a947,0 0 0 5px var(--ink),inset 0 3px 0 rgba(255,255,255,.3),0 2px 0 5px var(--ink)}\r
.bhint{margin:18px 0 0;font-size:13px;line-height:1.4;color:var(--muted);text-align:center;text-shadow:0 1px 0 var(--ink)}\r
.bhint.bextra{margin-top:2px;color:var(--gold)} /* what the Tavern adds, right under the chance */\r
/* buttons of the short purse and the result card */\r
.bbtn{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;min-height:50px;padding:7px 14px;border:0;border-radius:9px;font-weight:700;font-size:18px;line-height:1.1;text-decoration:none;white-space:nowrap;transition:transform .1s}\r
.bbtn small{font-size:12px;font-weight:500}\r
.bbtn:active{transform:translateY(3px)}\r
.bbtn.gold{color:var(--ink);background:linear-gradient(var(--gold1),var(--gold2));box-shadow:0 0 0 2px var(--deep),0 4px 0 2px var(--deep)}\r
.bbtn.dark{color:var(--gold1);background:var(--well);box-shadow:0 0 0 2px var(--deep),0 0 0 4px rgba(240,189,69,.45),0 4px 0 4px var(--deep)}\r
.bbtn.red{color:#fff;text-shadow:0 2px 0 #5a1410;background:linear-gradient(#c8363c,#8e1a1f);box-shadow:0 0 0 2px #d9a947,0 0 0 4px var(--ink),inset 0 2px 0 rgba(255,255,255,.3),0 5px 0 4px var(--ink)}\r
.bshort{margin-top:16px;text-align:center}\r
.bshort p{margin:0 0 12px;font-size:14px;line-height:1.4}\r
.brow{display:flex;flex-wrap:wrap;gap:12px}\r
.brow .bbtn{flex:1;min-width:150px;font-size:16px;min-height:46px}\r
/* the board */\r
.bsort{display:flex;gap:6px;margin:8px 0 10px}\r
.bsort button{flex:1;min-height:34px;font-size:14px}\r
.blist{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:6px}\r
.blist li{display:flex;align-items:center;gap:10px;min-height:48px;padding:6px 10px;border-radius:8px;background:var(--well);box-shadow:inset 0 0 0 2px var(--wellring)}\r
.blist li.me{box-shadow:inset 0 0 0 2px var(--gold1)}\r
.brank{width:26px;text-align:center;font-family:var(--gothic);font-weight:900;font-size:20px;color:var(--gold)}\r
.bname{flex:1;min-width:0;display:flex;flex-direction:column}\r
.bname b{font-size:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\r
.bname small{font-size:12px;color:var(--muted)}\r
.bval{font-size:15px}.bval.up{color:var(--win)}.bval.down{color:var(--lose)}\r
.bempty{margin:8px 0;padding:18px;border-radius:10px;border:2px dashed rgba(240,189,69,.35);text-align:center;font-size:15px}\r
.bhouse{margin:12px 0 0;font-size:12px;line-height:1.4;color:var(--muted)}\r
/* the toast (top of the screen, as the world's) and the busy veil */\r
.btoast{position:absolute;left:50%;top:max(16px,env(safe-area-inset-top,0px));transform:translateX(-50%);z-index:5;pointer-events:none;width:max-content;max-width:min(520px,92vw);padding:9px 18px;border-radius:6px;\r
  background:var(--wood) url(art/ui/wood-dark.webp) 0 0/700px auto;box-shadow:var(--bevel);font-weight:700;font-size:15px;color:var(--gold1);text-align:center;animation:btin .2s ease-out}\r
.btoast.bad{color:#fff;background:linear-gradient(#c8363c,#8e1a1f)}\r
@keyframes btin{from{opacity:0;transform:translate(-50%,-6px)}}\r
.bwait{position:absolute;inset:0;z-index:3;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;border-radius:6px;background:rgba(20,10,3,.62);cursor:progress;pointer-events:auto}\r
.bwait span{width:42px;height:42px;border-radius:50%;border:5px solid rgba(240,189,69,.25);border-top-color:var(--gold);animation:bspin .8s linear infinite}\r
.bwait b{font-family:var(--gothic);font-weight:900;font-size:24px;color:var(--gold)}\r
#wbet>.bwait{border-radius:0;background:rgba(20,10,3,.35)}\r
@keyframes bspin{to{transform:rotate(360deg)}}\r
/* the result card */\r
.bend{left:50%;bottom:max(24px,env(safe-area-inset-bottom,0px));width:min(540px,calc(100% - 36px));padding:38px 18px 14px;transform:translateX(-50%);text-align:center;animation:bend .32s cubic-bezier(.16,1,.3,1) both}\r
@keyframes bend{from{opacity:0;transform:translate(-50%,16px)}}\r
.brib{position:absolute;left:50%;top:0;transform:translate(-50%,-55%);z-index:1;filter:drop-shadow(0 3px 0 var(--deep))}\r
.brib span{display:block;padding:6px 46px 8px;font-family:var(--gothic);font-weight:900;font-size:36px;line-height:1;white-space:nowrap;clip-path:polygon(0 0,100% 0,calc(100% - 18px) 50%,100% 100%,0 100%,18px 50%)}\r
.bend.win .brib span{color:var(--ink);background:linear-gradient(var(--gold1),var(--gold2) 70%,#a87a10)}\r
.bend.loss .brib span{color:#fff;text-shadow:0 2px 0 #4a0d09;background:linear-gradient(#c8363c,#8e1a1f)}\r
.bend.wait .brib span{color:var(--cream);background:linear-gradient(#5a6070,#33384a)}\r
.bres{display:flex;align-items:center;gap:12px;padding:10px 12px;border-radius:9px;background:var(--well);box-shadow:inset 0 0 0 2px var(--wellring);text-align:left}\r
.bpor{flex:none;width:56px;height:56px;border-radius:8px;box-shadow:0 0 0 2px var(--gold2);background:center 20%/cover no-repeat}\r
.bwho{flex:1;min-width:0;display:flex;flex-direction:column}\r
.bwho small,.bbig small{font-weight:700;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--gold);opacity:.9}\r
.bwho b{font-size:18px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\r
.bbig{display:flex;flex-direction:column;align-items:flex-end}\r
.bbig b{font-family:var(--gothic);font-weight:900;font-size:40px;line-height:1;white-space:nowrap;-webkit-text-stroke:1.5px var(--ink);paint-order:stroke fill;text-shadow:0 3px 0 var(--ink)}\r
.bend.win .bbig b{color:var(--win)}.bend.loss .bbig b{color:var(--lose)}.bend.wait .bbig b{color:var(--gold1)}\r
.bdet{margin:10px 0 16px;font-size:14px;color:var(--muted);text-shadow:0 1px 0 var(--ink)}\r
.bacts{display:grid;grid-template-columns:3fr 2fr;gap:18px;align-items:stretch;padding:0 6px}\r
.bacts .bshort{grid-column:1/-1;margin-top:0}\r
.bacts.one{grid-template-columns:1fr}\r
.blink{margin:16px auto 0;display:block;border:0;background:none;padding:6px 10px;font-weight:700;font-size:14px;color:var(--gold1)!important;text-decoration:underline;text-underline-offset:3px}\r
/* an upright phone: the panel is a bottom sheet, the result card spans the screen's foot */\r
@media (max-width:700px) and (min-height:501px),(max-width:700px) and (orientation:portrait){\r
  .bpanel{left:0;right:0;top:auto;bottom:0;width:auto;max-height:88%;border-radius:12px 12px 0 0;animation-name:bup}\r
  .bhead{padding:14px 14px 8px}\r
  .bhead h1{font-size:27px}\r
  .bchipc{font-size:15px}\r
  .bbody{padding:2px 14px calc(16px + env(safe-area-inset-bottom,0px))}\r
  .bstake b{font-size:28px}\r
  .bend{bottom:calc(12px + env(safe-area-inset-bottom,0px));padding:32px 14px 10px}\r
  .brib span{font-size:30px;padding:6px 34px 8px}\r
  .bbig b{font-size:32px}\r
  .bacts{grid-template-columns:1fr;gap:18px}\r
}\r
/* a sideways phone: a side panel, the stakes in one row */\r
@media (orientation:landscape) and (max-height:500px){\r
  .bpanel{right:max(12px,env(safe-area-inset-right,0px));top:12px;width:min(410px,58%);max-height:calc(100% - 24px)}\r
  .bhead{padding:9px 12px 6px}\r
  .bhead h1{font-size:23px}\r
  .bback{padding:5px 9px;font-size:13px}\r
  .bchipc{font-size:14px;padding:3px 10px 3px 4px}\r
  .btabs{margin:0 12px 2px}\r
  .btabs button{min-height:32px;font-size:14px}\r
  .bbody{padding:2px 12px 12px}\r
  .bq{margin:8px 0 6px}\r
  .bstakes{grid-template-columns:repeat(4,1fr);gap:9px}\r
  .bstake{padding:5px 3px 6px}\r
  .bstake b{font-size:19px}\r
  .bstake small{font-size:9px}\r
  .bstake em{font-size:11px}\r
  .bgo{min-height:46px;margin-top:16px}\r
  .bgo b{font-size:22px}\r
  .bgo small{font-size:12px}\r
  .bhint{margin-top:12px;font-size:12px}\r
  .bend{bottom:max(10px,env(safe-area-inset-bottom,0px));padding:28px 14px 8px;width:min(520px,calc(100% - 28px))}\r
  .brib span{font-size:24px;padding:5px 30px 7px}\r
  .bres{padding:6px 10px}\r
  .bpor{width:44px;height:44px}\r
  .bbig b{font-size:30px}\r
  .bdet{margin:6px 0 12px}\r
  .bbtn{min-height:42px;font-size:16px}\r
  .blink{margin-top:10px;padding:2px 8px}\r
}\r
@media (prefers-reduced-motion:reduce){.bpanel,.bend,.btoast{animation:none}.bstake,.bgo,.bbtn{transition:none}}\r
`,D="https://app.roninchain.com/swap?outputCurrency=0xc0Ca45c2e9448D3876Ca86220B2418C719298396",$=[100,1e3,1e4,1e5],y="free",F={gambaBet:"Placing your bet",gambaSettle:"The judges decide",sync:"Updating",faucet:"Adding test HORSKE"},f=d=>String(d??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[c]),J=d=>d?N(d)||d:"",X=d=>`${(Math.round((d||0)*1e4)/100).toFixed(2)}%`,E=d=>`${Math.round((d||0)*1e3)/10}%`,j=d=>`${d>0?"+":d<0?"−":""}${s(Math.abs(d))}`;function V({room:d,player:c,village:Y,quests:g}){const v=R.gamba,o={tab:"bet",sort:"wagered",amount:null,v:0};document.head.insertAdjacentHTML("beforeend",`<style id="web-bet">${W}</style>`);const l=document.createElement("div");l.id="wbet",document.body.appendChild(l);const u=(t,a)=>window.sendAction(t,a),k=()=>{o.v++};function z(){const t=c.state,a=t.econ||null;o.amount==null&&(o.amount=t.gambaPick&&t.gambaPick.amount||1e3);const e=a?a.horske:null,n=L(),r=$.filter(i=>i<=n&&(e==null||i<=e));return r.length&&!r.includes(o.amount)&&(o.amount=r[r.length-1]),{s:t,ec:a,coins:e,max:n,fits:r,qv:g?g.view():null}}const m=(t,a,e="",n="gold",r="")=>`<button class="bbtn ${n}" data-act="${a}" ${e}>${t}${r?`<small>${r}</small>`:""}</button>`,q=t=>`<span class="bchipc"><i class="coin"></i>${t.coins==null?"…":s(t.coins)}</span>`,B=(t,a)=>`<div class="bshort"><p>You have ${s(t.coins||0)} HORSKE${a?`, and this bet takes ${s(a)}`:""}.</p>
    <div class="brow"><a class="bbtn gold" href="${D}" target="_blank" rel="noopener">Buy $HORSKE<small>on Ronin ↗</small></a>${t.s.tools?m(`+${s(R.faucet)} test HORSKE`,"faucet","","dark"):""}</div></div>`;function M(t){const a=P(y).cap,e=t.qv,n=$.map(b=>{const x=o.amount===b;return`<button class="bstake${x?" on":""}" data-act="stake" data-v="${b}" aria-pressed="${x}"${t.fits.includes(b)?"":" disabled"}><small>Bet</small><b>${s(b)}</b><em>win ${s(b*v.payout)}</em></button>`}).join(""),r=e?e.bonus>0?`<p class="bhint bextra">Tavern quests and your Ronke Score add +${E(e.bonus)}.</p>`:`<p class="bhint bextra">Do the Tavern's quests to raise it.</p>`:"",i=t.coins==null?'<p class="bhint">Opening your purse…</p>':t.fits.length?`<button class="bgo" data-act="bet"><b>Bet ${s(o.amount)}</b><small>to win ${s(o.amount*v.payout)}</small></button>
        <p class="bhint">Your chance: up to ${E(a)}. Hit the bar on each pass to raise it.</p>${r}`:B(t,$[0]);return`<div class="bbody"><p class="bq">Your bet</p><div class="bstakes" role="group" aria-label="Your bet">${n}</div>${i}</div>`}function H(t){const a=c.userId,e=t.ec&&t.ec.glb||[],n=v.lbMinBets,r=t.ec&&t.ec.gme||{bets:0},i=t.ec&&t.ec.house||{bets:0,wagered:0,paid:0},b=e.slice().sort((p,h)=>h.net-p.net),x=o.sort==="net"?b:e,w=e.findIndex(p=>p.id===a)+1,O=b.findIndex(p=>p.id===a)+1,G=r.bets>=n&&w?`You are #${w} by volume and #${O} by profit.`:`${Math.max(0,n-r.bets)} more bet${n-r.bets===1?"":"s"} this season to enter the board.`,A=x.slice(0,20).map((p,h)=>`<li class="${p.id===a?"me":""}"><b class="brank">${h+1}</b><span class="bname"><b>${f(p.name||"Knight")}</b><small>${s(p.bets)} bets · ${o.sort==="wagered"?`net ${j(p.net)}`:`${s(p.wagered)} wagered`}</small></span>
      <b class="bval${o.sort==="net"?p.net>0?" up":p.net<0?" down":"":""}">${o.sort==="wagered"?s(p.wagered):j(p.net)}</b></li>`).join("");return`<div class="bbody">
        <div class="bsort" role="group" aria-label="Order">${[["wagered","By volume"],["net","By profit"]].map(([p,h])=>`<button class="${o.sort===p?"on":""}" data-act="sort" data-k="${p}" aria-pressed="${o.sort===p}">${h}</button>`).join("")}</div>
        ${A?`<ol class="blist">${A}</ol>`:`<p class="bempty">Nobody has ${n} settled bets this season yet.</p>`}
        <p class="bhouse">${G} The board counts knights with ${n} or more settled bets this season.</p>
        <p class="bhouse">${i.bets?`This season: ${s(i.bets)} bet${i.bets===1?"":"s"} · ${s(i.wagered)} wagered · paid out ${s(i.paid)}`:"No bets this season yet."}</p></div>`}function C(t){const a=t.s,e=a.bout||{},n=a.vs||{},r=e.pending?"wait":e.win?"win":"loss",i=e.pending?"Settling…":e.win?"You win!":"The house wins",b=e.pending?s(e.amount):e.win?`+${s(e.payout)}`:`−${s(e.amount)}`,x=e.pending?"Bet against":e.win?"Beat":"Lost to",w=t.coins==null||t.coins>=(e.amount||0)?m("Bet again","again","","red",`${s(e.amount)} HORSKE`):B(t,e.amount);return`<section class="bend ${r}" aria-labelledby="btitle">
      <div class="brib"><span id="btitle">${i}</span></div>
      <div class="bres"><span class="bpor" style="background-image:url(${J(n.portrait)});background-color:${f(n.color||"#888")}"></span>
        <span class="bwho"><small>${x}</small><b>${f(e.rival||n.name||"The House")}</b></span>
        <span class="bbig"><small>${e.pending?"Bet":"Result"}</small><b>${b}</b></span></div>
      <p class="bdet">Bet ${s(e.amount)} · chance ${X(e.chance)}${e.pending?" · the bank settles it on your next visit":""}</p>
      <div class="bacts">${w}${m("Change the bet","change","","dark")}</div>
      <button class="blink" data-act="village">Back to the village</button>
    </section>`}function K(){const t=z(),a=t.s,e=a.toast&&d.nowMs-a.toast.at<5e3?a.toast:null,n=e?`<div class="btoast${e.ok===!1?" bad":""}" role="status">${f(e.text)}</div>`:"",r=a.busy?`<div class="bwait"><span></span><b>${f(F[a.busy]||"Working")}…</b></div>`:"";return a.phase==="end"&&a.bout&&a.bout.gamba?`${C(t)}${n}${r}`:a.phase==="end"?`<section class="bend wait" aria-labelledby="btitle"><div class="brib"><span id="btitle">Bout over</span></div>
      <p class="bdet">The Joust Arena takes bets for now.</p><div class="bacts one">${m("Back to the bets","change","","red")}</div></section>${n}${r}`:a.phase!=="armory"?"":`<section class="bpanel" aria-labelledby="bh">
        <header class="bhead"><button class="bback" data-act="village">‹ Village</button><h1 id="bh">Joust Arena</h1>${q(t)}</header>
        <nav class="btabs" role="tablist">${[["bet","Bet"],["board","Board"]].map(([i,b])=>`<button role="tab" aria-selected="${o.tab===i}" class="${o.tab===i?"on":""}" data-act="tab" data-k="${i}">${b}</button>`).join("")}</nav>
        ${o.tab==="board"?H(t):M(t)}
        ${r}
      </section>${n}`}let T="";function S(){var e,n,r,i;const t=c.state,a=[t.phase,(e=t.econ)==null?void 0:e.at,t.busy,(n=t.toast)==null?void 0:n.at,t.toast&&d.nowMs-t.toast.at<5e3,g==null?void 0:g.view().bonus,(r=t.bout)==null?void 0:r.pending,(i=t.bout)==null?void 0:i.win,o.v].join("|");a!==T&&(T=a,I(l,`<div id="wbet">${K()}</div>`)),requestAnimationFrame(S)}requestAnimationFrame(S),l.addEventListener("click",t=>{const a=t.target.closest("[data-act]");if(!a||!l.contains(a)||a.disabled)return;const e=z(),n=a.dataset.act,r=e.s;if(n==="village"){location.assign(Y);return}if(n==="tab"){o.tab=a.dataset.k,k();return}if(n==="sort"){o.sort=a.dataset.k,k();return}if(n==="stake"){o.amount=+a.dataset.v,k();return}if(n==="bet"){r.busy||u("gambaBet",{gambaBet:{rider:y,amount:o.amount}});return}if(n==="again"){const i=r.bout||{};r.busy||u("gambaBet",{gambaBet:{rider:y,amount:i.amount||o.amount}});return}if(n==="change"){u("toArmory");return}if(n==="faucet"){u("faucet");return}}),l.addEventListener("keydown",t=>{(t.key==="Enter"||t.key===" ")&&t.target.closest("button, a, select")&&t.stopPropagation()})}export{V as startBet};

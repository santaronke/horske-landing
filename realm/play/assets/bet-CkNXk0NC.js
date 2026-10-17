import{m as H,c as G}from"./index-0bgXMEbJ.js";import{x as K,y as S,S as R,z as N,w as q,q as d}from"./econ-Deg9OsSu.js";const I=`/* The Lists' betting panel and result card (src/bet/bet.js) as a wooden board in the style of the site's header bar\r
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
.bpanel{right:max(26px,env(safe-area-inset-right,0px));top:26px;width:min(380px,calc(100% - 52px));max-height:calc(100% - 60px);display:flex;flex-direction:column;animation:bin .24s cubic-bezier(.16,1,.3,1)}\r
@keyframes bin{from{opacity:0;transform:translateX(14px)}}\r
@keyframes bup{from{opacity:0;transform:translateY(24px)}}\r
.bhead{position:relative;z-index:4;display:flex;align-items:center;gap:10px;padding:14px 14px 10px}\r
.bhead h1{margin:0;font-family:var(--gothic);font-weight:900;font-size:30px;line-height:1;color:var(--gold);-webkit-text-stroke:1.5px var(--ink);paint-order:stroke fill;text-shadow:0 3px 0 var(--ink)}\r
.bback{flex:none;padding:7px 11px;border:0;border-radius:7px;font-weight:700;font-size:14px;color:var(--ink)!important;background:linear-gradient(var(--gold1),var(--gold2));box-shadow:0 0 0 2px var(--deep),0 3px 0 2px var(--deep)}\r
.bchipc{margin-left:auto;display:inline-flex;align-items:center;gap:7px;padding:4px 12px 4px 5px;border-radius:999px;background:var(--well);box-shadow:inset 0 0 0 1px var(--wellring);font-weight:700;font-size:16px;color:var(--gold1);white-space:nowrap}\r
.coin{display:inline-block;width:20px;height:20px;flex:none;border-radius:50%;background:radial-gradient(circle at 35% 35%,#ffe9a0,#e0a91f 60%,#8a5f10);box-shadow:0 0 0 2px var(--deep);vertical-align:-4px}\r
.btabs{display:flex;gap:6px;margin:0 14px 4px}\r
.btabs button,.bsort button,.bpick button{border:0;border-radius:7px;font-weight:700;color:var(--muted);background:var(--well);box-shadow:inset 0 0 0 2px var(--wellring)}\r
.btabs button{flex:1;min-height:38px;font-size:15px}\r
.btabs button.on,.bsort button.on,.bpick button.on{color:var(--ink);background:linear-gradient(var(--gold1),var(--gold2));box-shadow:0 0 0 2px var(--deep),0 3px 0 2px var(--deep)}\r
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
.bpick{display:flex;flex-wrap:wrap;gap:8px}\r
.bpick button{flex:1 1 0;min-width:120px;min-height:44px;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:4px 8px;font-size:15px}\r
.bpick button small{font-weight:500;font-size:11px;opacity:.85}\r
/* the one action: the header's red button, larger */\r
.bgo{width:100%;margin:20px 0 4px;display:flex;flex-direction:column;align-items:center;gap:1px;min-height:60px;padding:8px 10px;border:0;border-radius:10px;color:#fff!important;text-shadow:0 2px 0 #5a1410;\r
  background:linear-gradient(#c8363c,#8e1a1f);box-shadow:0 0 0 3px #d9a947,0 0 0 5px var(--ink),inset 0 3px 0 rgba(255,255,255,.3),0 6px 0 5px var(--ink);transition:transform .1s}\r
.bgo b{font-family:var(--gothic);font-weight:900;font-size:30px;line-height:1}\r
.bgo small{font-weight:700;font-size:14px}\r
.bgo:active{transform:translateY(4px);box-shadow:0 0 0 3px #d9a947,0 0 0 5px var(--ink),inset 0 3px 0 rgba(255,255,255,.3),0 2px 0 5px var(--ink)}\r
.bhint{margin:18px 0 0;font-size:13px;line-height:1.4;color:var(--muted);text-align:center;text-shadow:0 1px 0 var(--ink)}\r
.btest{margin-top:14px;padding-top:10px;border-top:1px solid rgba(240,189,69,.22);font-size:13px;color:var(--muted)}\r
.btest summary{display:inline-flex;align-items:center;gap:6px;cursor:pointer;list-style:none;font-weight:700;letter-spacing:.06em}\r
.btest summary::-webkit-details-marker{display:none}\r
.btest summary::before{content:"▸";color:var(--gold)}\r
.btest[open] summary::before{content:"▾"}\r
.btest p{margin:6px 0 0;font-size:12px;opacity:.8}\r
.brare{display:flex;align-items:center;gap:10px;margin-top:8px;font-weight:700}\r
.brare select{flex:1;min-width:0;height:36px;padding:0 8px;border:0;border-radius:7px;background:var(--card1);color:var(--ink);font:inherit;font-weight:500;box-shadow:0 0 0 2px var(--deep)}\r
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
`,W="https://app.roninchain.com/swap?outputCurrency=0xc0Ca45c2e9448D3876Ca86220B2418C719298396",z=[100,1e3,1e4,1e5],F={gambaBet:"Placing your bet",gambaSettle:"The judges decide",sync:"Updating",faucet:"Adding test HORSKE"},g=b=>String(b??"").replace(/[&<>"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[m]),X=b=>b?G(b)||b:"",D=b=>`${(Math.round((b||0)*1e4)/100).toFixed(2)}%`,A=b=>`${b>0?"+":b<0?"−":""}${d(Math.abs(b))}`;function _({room:b,player:m,village:E}){const w=R.gamba,n={tab:"bet",sort:"wagered",rider:null,amount:null,test:!1,v:0};document.head.insertAdjacentHTML("beforeend",`<style id="web-bet">${I}</style>`);const u=document.createElement("div");u.id="wbet",document.body.appendChild(u);const v=(e,t)=>window.sendAction(e,t),k=()=>{n.v++};function B(){const e=m.state,t=e.econ||null,a=e.fake||{},r=K(a)!=="free";n.rider==null&&(n.rider=e.gambaPick&&e.gambaPick.rider||"free"),(!S(n.rider,a)||r&&n.rider==="free")&&(n.rider=r?"ronke":"free"),n.amount==null&&(n.amount=e.gambaPick&&e.gambaPick.amount||1e3);const o=t?t.horske:null,i=N(),l=z.filter(c=>c<=i&&(o==null||c<=o));return l.length&&!l.includes(n.amount)&&(n.amount=l[l.length-1]),{s:e,ec:t,fake:a,holder:r,coins:o,max:i,fits:l,gt:t&&t.gtoday||{},riders:w.riders.filter(c=>!(r&&c.id==="free"))}}const y=(e,t,a="",r="gold",o="")=>`<button class="bbtn ${r}" data-act="${t}" ${a}>${e}${o?`<small>${o}</small>`:""}</button>`,M=e=>`<span class="bchipc"><i class="coin"></i>${e.coins==null?"…":d(e.coins)}</span>`,T=(e,t)=>`<div class="bshort"><p>You have ${d(e.coins||0)} HORSKE${t?`, and this bet takes ${d(t)}`:""}.</p>
    <div class="brow"><a class="bbtn gold" href="${W}" target="_blank" rel="noopener">Buy $HORSKE<small>on Ronin ↗</small></a>${e.s.tools?y(`+${d(R.faucet)} test HORSKE`,"faucet","","dark"):""}</div></div>`;function Y(e){const t=e.s,a=q(n.rider),r=Math.round(a.cap*100),o=z.map(s=>{const h=n.amount===s;return`<button class="bstake${h?" on":""}" data-act="stake" data-v="${s}" aria-pressed="${h}"${e.fits.includes(s)?"":" disabled"}><small>Bet</small><b>${d(s)}</b><em>win ${d(s*w.payout)}</em></button>`}).join(""),i=e.riders.filter(s=>S(s.id,e.fake)),l=i.length>1?`<p class="bq">Rider</p><div class="bpick" role="group" aria-label="Rider">${i.map(s=>{const h=n.rider===s.id,p=s.daily?Math.max(0,s.daily-(e.gt[s.id]||0)):null;return`<button class="${h?"on":""}" data-act="rider" data-id="${s.id}" aria-pressed="${h}">${g(s.name)} · ${Math.round(s.cap*100)}%${p!=null?`<small>${p?`${p} boosted left today`:"boosted bets used today"}</small>`:""}</button>`}).join("")}</div>`:"",c=e.coins==null?'<p class="bhint">Opening your purse…</p>':e.fits.length?`<button class="bgo" data-act="bet"><b>Bet ${d(n.amount)}</b><small>to win ${d(n.amount*w.payout)}</small></button>
        <p class="bhint">Your chance: up to ${r}%. Hit the bar on each pass to raise it.</p>`:T(e,z[0]),x=e.fake.rarest||"",f=t.tools?`<details class="btest"${n.test?" open":""}><summary data-act="testmode">Test mode</summary>
      <label class="brare"><span>Your rarest Ronke</span><select id="brare" data-r="${e.fake.ronkeverse||0}" data-o="${e.fake.oneOfOne||0}" data-c="${e.fake.colored||0}">
        <option value=""${x?"":" selected"} disabled>Say it</option>${w.bodies.map(s=>`<option value="${s.id}"${x===s.id?" selected":""}>${g(s.name)}${s.n?` · ${d(s.n)} exist`:""}</option>`).join("")}</select></label>
      <p>Once live, your wallet says it.</p></details>`:"";return`<div class="bbody"><p class="bq">Your bet</p><div class="bstakes" role="group" aria-label="Your bet">${o}</div>${l}${c}${f}</div>`}function L(e){const t=m.userId,a=e.ec&&e.ec.glb||[],r=w.lbMinBets,o=e.ec&&e.ec.gme||{bets:0},i=e.ec&&e.ec.house||{bets:0,wagered:0,paid:0},l=a.slice().sort((p,$)=>$.net-p.net),c=n.sort==="net"?l:a,x=a.findIndex(p=>p.id===t)+1,f=l.findIndex(p=>p.id===t)+1,s=o.bets>=r&&x?`You are #${x} by volume and #${f} by profit.`:`${Math.max(0,r-o.bets)} more bet${r-o.bets===1?"":"s"} this season to enter the board.`,h=c.slice(0,20).map((p,$)=>`<li class="${p.id===t?"me":""}"><b class="brank">${$+1}</b><span class="bname"><b>${g(p.name||"Knight")}</b><small>${d(p.bets)} bets · ${n.sort==="wagered"?`net ${A(p.net)}`:`${d(p.wagered)} wagered`}</small></span>
      <b class="bval${n.sort==="net"?p.net>0?" up":p.net<0?" down":"":""}">${n.sort==="wagered"?d(p.wagered):A(p.net)}</b></li>`).join("");return`<div class="bbody">
        <div class="bsort" role="group" aria-label="Order">${[["wagered","By volume"],["net","By profit"]].map(([p,$])=>`<button class="${n.sort===p?"on":""}" data-act="sort" data-k="${p}" aria-pressed="${n.sort===p}">${$}</button>`).join("")}</div>
        ${h?`<ol class="blist">${h}</ol>`:`<p class="bempty">Nobody has ${r} settled bets this season yet.</p>`}
        <p class="bhouse">${s} The board counts knights with ${r} or more settled bets this season.</p>
        <p class="bhouse">${i.bets?`This season: ${d(i.bets)} bet${i.bets===1?"":"s"} · ${d(i.wagered)} wagered · paid out ${d(i.paid)}`:"No bets this season yet."}</p></div>`}function P(e){const t=e.s,a=t.bout||{},r=t.vs||{},o=q(a.rider),i=a.pending?"wait":a.win?"win":"loss",l=a.pending?"Settling…":a.win?"You win!":"The house wins",c=a.pending?d(a.amount):a.win?`+${d(a.payout)}`:`−${d(a.amount)}`,x=a.pending?"Bet against":a.win?"Beat":"Lost to",f=e.coins==null||e.coins>=(a.amount||0)?y("Bet again","again","","red",`${d(a.amount)} on the ${g(o.name)}`):T(e,a.amount);return`<section class="bend ${i}" aria-labelledby="btitle">
      <div class="brib"><span id="btitle">${l}</span></div>
      <div class="bres"><span class="bpor" style="background-image:url(${X(r.portrait)});background-color:${g(r.color||"#888")}"></span>
        <span class="bwho"><small>${x}</small><b>${g(a.rival||r.name||"The House")}</b></span>
        <span class="bbig"><small>${a.pending?"Bet":"Result"}</small><b>${c}</b></span></div>
      <p class="bdet">${g(o.name)} · bet ${d(a.amount)} · chance ${D(a.chance)}${a.pending?" · the bank settles it on your next visit":""}</p>
      <div class="bacts">${f}${y("Change the bet","change","","dark")}</div>
      <button class="blink" data-act="village">Back to the village</button>
    </section>`}function C(){const e=B(),t=e.s,a=t.toast&&b.nowMs-t.toast.at<5e3?t.toast:null,r=a?`<div class="btoast${a.ok===!1?" bad":""}" role="status">${g(a.text)}</div>`:"",o=t.busy?`<div class="bwait"><span></span><b>${g(F[t.busy]||"Working")}…</b></div>`:"";return t.phase==="end"&&t.bout&&t.bout.gamba?`${P(e)}${r}${o}`:t.phase==="end"?`<section class="bend wait" aria-labelledby="btitle"><div class="brib"><span id="btitle">Bout over</span></div>
      <p class="bdet">The Lists take bets for now.</p><div class="bacts one">${y("Back to the bets","change","","red")}</div></section>${r}${o}`:t.phase!=="armory"?"":`<section class="bpanel" aria-labelledby="bh">
        <header class="bhead"><button class="bback" data-act="village">‹ Village</button><h1 id="bh">The Lists</h1>${M(e)}</header>
        <nav class="btabs" role="tablist">${[["bet","Bet"],["board","Board"]].map(([i,l])=>`<button role="tab" aria-selected="${n.tab===i}" class="${n.tab===i?"on":""}" data-act="tab" data-k="${i}">${l}</button>`).join("")}</nav>
        ${n.tab==="board"?L(e):Y(e)}
        ${o}
      </section>${r}`}let j="";function O(){var a,r,o,i,l,c,x,f;const e=m.state,t=[e.phase,(a=e.econ)==null?void 0:a.at,e.busy,(r=e.toast)==null?void 0:r.at,e.toast&&b.nowMs-e.toast.at<5e3,(o=e.fake)==null?void 0:o.rarest,(i=e.fake)==null?void 0:i.ronkeverse,(l=e.fake)==null?void 0:l.oneOfOne,(c=e.fake)==null?void 0:c.colored,(x=e.bout)==null?void 0:x.pending,(f=e.bout)==null?void 0:f.win,n.v].join("|");t!==j&&(j=t,H(u,`<div id="wbet">${C()}</div>`)),requestAnimationFrame(O)}requestAnimationFrame(O),u.addEventListener("click",e=>{var i;const t=e.target.closest("[data-act]");if(!t||!u.contains(t)||t.disabled)return;const a=B(),r=t.dataset.act,o=a.s;if(r==="village"){location.assign(E);return}if(r==="tab"){n.tab=t.dataset.k,k();return}if(r==="sort"){n.sort=t.dataset.k,k();return}if(r==="rider"){n.rider=t.dataset.id,(i=window.gambaRider)==null||i.call(window,n.rider),k();return}if(r==="stake"){n.amount=+t.dataset.v,k();return}if(r==="bet"){o.busy||v("gambaBet",{gambaBet:{rider:n.rider,amount:n.amount}});return}if(r==="again"){const l=o.bout||{};o.busy||v("gambaBet",{gambaBet:{rider:l.rider||n.rider,amount:l.amount||n.amount}});return}if(r==="change"){v("toArmory");return}if(r==="faucet"){v("faucet");return}if(r==="testmode"){e.preventDefault(),n.test=!n.test,k();return}}),u.addEventListener("keydown",e=>{(e.key==="Enter"||e.key===" ")&&e.target.closest("button, a, select")&&e.stopPropagation()}),u.addEventListener("change",e=>{const t=e.target;t.id==="brare"&&v("fake",{fake:{ronkeverse:+t.dataset.r,oneOfOne:+t.dataset.o,colored:+t.dataset.c,rarest:t.value}})})}export{_ as startBet};

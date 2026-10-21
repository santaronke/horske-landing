import{c as L,m as P}from"./config-5sKWrvMd.js";import{m as N,g as H}from"./chain-Jo2e17Ks.js";import{c as I,m as i,r as E,o as _,w as $,s as b,a as C,p as z,b as M,t as F,d as B,h as T}from"./view-B_w9TCd3.js";const G=`/* The stats page (src/stats/stats.js; 20/10, Horske Racing's "All races & stats" for the joust): its layout (a column of
   boards: the totals, the chance, the records, the daily volume, every bout), in the arena's own wood and gold
   (src/bet/bet.css' tokens and art/ui/wood-dark.webp), not Horske Racing's colours. A column of cards on a phone. */
:root{--wood:#42250f;--deep:#1d130b;--well:rgba(20,10,3,.5);--wellring:rgba(240,189,69,.28);--gold:#f0bd45;--gold1:#ffe08a;--gold2:#d9a21f;--ink:#1d130b;
  --cream:#fff3d6;--muted:#e3cfa8;--win:#9be08f;--lose:#ff9a7a;
  --bevel:0 0 0 1px #452600,0 0 0 2px #926e3d,0 0 0 3px #d6b37f,0 0 0 4px #a1805a,0 0 0 6px #1d130b;
  --gothic:"Grenze Gotisch",Georgia,serif;--ui:Gelasio,Georgia,"Times New Roman",serif;--mono:ui-monospace,Consolas,"Courier New",monospace}
*{box-sizing:border-box}
html,body{background:var(--deep) url(art/ui/wood-dark.webp) 0 0/700px auto repeat;background-blend-mode:multiply}
body{min-height:100vh;font-family:var(--ui);color:var(--cream);-webkit-tap-highlight-color:transparent}
#stats{max-width:1000px;margin:0 auto;padding:max(18px,env(safe-area-inset-top)) max(16px,env(safe-area-inset-right)) calc(40px + env(safe-area-inset-bottom)) max(16px,env(safe-area-inset-left));display:flex;flex-direction:column;gap:22px}
a{color:var(--gold1)}
button,select,input{font:inherit;color:inherit}
/* the head */
.shead{display:flex;align-items:center;gap:14px;flex-wrap:wrap}
.shead h1{margin:0;font-family:var(--gothic);font-weight:900;font-size:clamp(26px,5vw,38px);line-height:1;color:var(--gold);-webkit-text-stroke:1.5px var(--ink);paint-order:stroke fill;text-shadow:0 3px 0 var(--ink)}
.sback{flex:none;padding:8px 12px;border-radius:8px;font-weight:700;font-size:14px;text-decoration:none;color:var(--ink)!important;background:linear-gradient(var(--gold1),var(--gold2));box-shadow:0 0 0 2px var(--deep),0 3px 0 2px var(--deep)}
/* a board: the header's wood, its gold bevel */
.sboard{position:relative;padding:16px 18px 18px;border-radius:6px;background:repeating-linear-gradient(180deg,transparent 0 56px,rgba(16,7,0,.6) 56px 58px,rgba(255,214,150,.09) 58px 59px,transparent 59px 60px),var(--wood) url(art/ui/wood-dark.webp) 0 0/700px auto repeat;
  box-shadow:var(--bevel),0 12px 22px rgba(0,0,0,.5),inset 0 0 40px rgba(0,0,0,.45)}
.sboard h2{margin:0 0 12px;font-family:var(--gothic);font-weight:900;font-size:26px;line-height:1;color:var(--gold);text-shadow:0 2px 0 var(--ink)}
.sboard h2 small{font-family:var(--ui);font-weight:500;font-size:13px;color:var(--muted);text-shadow:none;margin-left:6px}
.snote{margin:0 0 12px;font-size:13px;line-height:1.45;color:var(--muted)}
.sbad{color:var(--lose)}
.swell{border-radius:9px;background:var(--well);box-shadow:inset 0 0 0 2px var(--wellring)}
/* the controls and the totals */
.sctl{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:14px}
.sper{display:flex;align-items:center;gap:8px;font-weight:700;font-size:13px;letter-spacing:.1em;text-transform:uppercase;color:var(--gold)}
.sper select{min-height:38px;padding:0 10px;border-radius:8px;border:0;background:var(--well);box-shadow:inset 0 0 0 2px var(--wellring);color:var(--cream);font-size:15px;letter-spacing:0;text-transform:none}
.sper option{background:var(--deep);color:var(--cream)}
.sbtn{display:inline-flex;align-items:center;gap:6px;min-height:38px;padding:0 14px;border:0;border-radius:8px;font-weight:700;font-size:14px;text-decoration:none;cursor:pointer;color:var(--gold1)!important;background:var(--well);box-shadow:0 0 0 2px var(--deep),0 0 0 4px rgba(240,189,69,.45),0 3px 0 4px var(--deep)}
.sbtn:disabled{opacity:.45;cursor:default}
.snums{display:grid;grid-template-columns:repeat(5,1fr);gap:10px}
.snums>div{display:flex;flex-direction:column;gap:4px;padding:10px 12px;min-width:0}
.snums small{font-weight:700;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--gold)}
.snums b{font-family:var(--gothic);font-weight:900;font-size:28px;line-height:1;color:var(--cream);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.snums em{font-style:normal;font-size:12px;color:var(--muted)}
.snums .sjack{box-shadow:inset 0 0 0 2px var(--gold2),inset 0 0 16px rgba(240,189,69,.22)}
.snums .sjack b{color:var(--gold1)}
.sbehind{margin:12px 0 0;font-size:13px;color:var(--muted)}
/* the chance */
.schance{width:100%;border-collapse:separate;border-spacing:0 6px}
.schance th{font-weight:700;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--gold);text-align:left;padding:0 10px}
.schance td{padding:8px 10px;background:var(--well);font-size:15px}
.schance td:first-child{border-radius:8px 0 0 8px;font-family:var(--gothic);font-weight:900;font-size:20px;color:var(--gold1)}
.schance td:last-child{border-radius:0 8px 8px 0;width:46%}
.sbar{position:relative;height:12px;border-radius:6px;background:rgba(0,0,0,.35);overflow:visible}
.sbar i{position:absolute;left:0;top:0;bottom:0;border-radius:6px;background:linear-gradient(90deg,var(--gold2),var(--gold1))}
.sbar u{position:absolute;top:-4px;bottom:-4px;width:2px;background:var(--cream);box-shadow:0 0 0 1px var(--ink)}
.srate{display:flex;align-items:center;gap:10px}
.srate .sbar{flex:1}
.srate span{width:52px;text-align:right;font-weight:700}
/* the records */
.srecs{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.srec{display:flex;flex-direction:column;gap:6px;padding:10px 12px;min-width:0}
.srec header{display:flex;align-items:center;justify-content:space-between;gap:8px;font-weight:700;font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:var(--gold)}
.srec b{font-family:var(--gothic);font-weight:900;font-size:24px;line-height:1.05;color:var(--cream)}
.srec b.up{color:var(--win)}
.srec p{margin:0;font-size:13px;line-height:1.35;color:var(--muted);overflow-wrap:anywhere}
.sx{flex:none;padding:3px 9px;border-radius:999px;font-size:11px;font-weight:700;letter-spacing:.04em;text-transform:none;text-decoration:none;color:#fff!important;background:#0b0b0b;box-shadow:0 0 0 1px var(--gold2)}
/* the daily volume */
.sday{margin:0 0 10px;font-size:14px;color:var(--cream)}
.schart{display:block;width:100%;height:150px;border-radius:9px;background:var(--well);box-shadow:inset 0 0 0 2px var(--wellring)}
.schart rect{fill:var(--gold2);cursor:pointer}
.schart rect.on{fill:var(--gold1)}
.schart rect:hover{fill:var(--gold1)}
.saxis{display:flex;justify-content:space-between;margin-top:6px;font-size:12px;color:var(--muted)}
/* every bout */
.sfind{display:flex;gap:8px;margin-bottom:10px;flex-wrap:wrap}
.sfind input{flex:1;min-width:200px;min-height:40px;padding:0 12px;border:0;border-radius:8px;background:var(--well);box-shadow:inset 0 0 0 2px var(--wellring);font-family:var(--mono);font-size:14px}
.sfind input::placeholder{color:var(--muted);opacity:.8}
.sall{width:100%;border-collapse:collapse;font-size:14px}
.sall th{font-weight:700;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--gold);text-align:left;padding:6px 8px;border-bottom:2px solid var(--wellring)}
.sall td{padding:9px 8px;border-bottom:1px solid rgba(240,189,69,.14);white-space:nowrap}
.sall tr.srow{cursor:pointer}
.sall tr.srow:hover td,.sall tr.srow.open td{background:rgba(240,189,69,.08)}
.sall td.won{color:var(--win);font-weight:700}.sall td.lost{color:var(--lose);font-weight:700}.sall td.refunded,.sall td.open{color:var(--muted)}
.sall .smono{font-family:var(--mono);font-size:13px}
.sall .sto{text-align:right}
.sall a{text-decoration:none}
.stxt{display:none} /* the transaction link's words: on a phone's card only */
.sempty{padding:18px;text-align:center;color:var(--muted)}
.spages{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:12px;font-size:14px;color:var(--muted)}
/* a bout's proof */
.sproof td{white-space:normal;background:rgba(0,0,0,.25)}
.sp{display:flex;flex-direction:column;gap:10px;padding:4px 2px 8px}
.sp dl{display:grid;grid-template-columns:max-content 1fr;gap:6px 14px;margin:0;font-size:13px}
.sp dt{font-weight:700;color:var(--gold)}
.sp dd{margin:0;min-width:0;overflow-wrap:anywhere;color:var(--cream)}
.sp code{font-family:var(--mono);font-size:12px;color:var(--muted)}
.sp .sline{display:flex;align-items:center;gap:12px;flex-wrap:wrap}
.scheck{font-weight:700;font-size:14px}
.scheck.ok{color:var(--win)}.scheck.bad{color:var(--lose)}
.sfoot{margin:0;font-size:12px;color:var(--muted);text-align:center}
:focus-visible{outline:3px solid var(--gold1);outline-offset:2px}
/* a tablet: fewer columns */
@media (max-width:860px){.snums{grid-template-columns:repeat(3,1fr)}.srecs{grid-template-columns:repeat(2,1fr)}}
/* a phone: two columns of numbers, one of records, and every bout a card */
@media (max-width:640px){
  #stats{gap:16px}
  .sboard{padding:14px 12px 14px}
  .snums{grid-template-columns:repeat(2,1fr)}
  .snums .sjack{grid-column:1/-1}
  .snums b{font-size:24px}
  .srecs{grid-template-columns:1fr}
  .schance td:last-child{width:40%}
  .sall thead{display:none}
  .sall,.sall tbody{display:block}
  .sall tr.srow{display:grid;grid-template-columns:1fr 1fr;gap:4px 12px;padding:10px;margin-bottom:8px;border-radius:9px;background:var(--well);box-shadow:inset 0 0 0 2px var(--wellring)}
  .sall tr.srow td{display:flex;flex-direction:column;padding:0;border:0;background:none!important;white-space:normal}
  .sall tr.srow td::before{content:attr(data-label);font-weight:700;font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--gold)}
  .sall tr.srow td.sto{grid-column:1/-1;text-align:left}
  .sall tr.srow td.sto::before{content:none}
  .sall tr.srow td.sto .stxt{display:inline}
  .sall tr.sproof{display:block;margin:-6px 0 10px}
  .sall tr.sproof td{display:block;padding:10px;border-radius:0 0 9px 9px}
  .sp dl{grid-template-columns:1fr}
  .sp dt{margin-top:4px}
}
@media (prefers-reduced-motion:reduce){*{transition:none!important;animation:none!important}}
`,W="https://horskeverse.vercel.app",K=[["all","All time"],["24h","Last 24 hours"],["7d","Last 7 days"],["30d","Last 30 days"]],Z=25,q=3e4,V=/^0x[0-9a-fA-F]{40}$/,r=e=>String(e??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),o=e=>Number(e??0).toLocaleString("en-US"),U=e=>`https://x.com/intent/post?text=${encodeURIComponent(`${e}

⚔️ Fight the house:`)}&url=${encodeURIComponent(W)}&via=HorskeOnRonke`;document.head.insertAdjacentHTML("beforeend",`<style>${G}</style>`);const y=L(),v=y.on&&y.house?N(y.house):null,u=y.on?H():null,a={period:"all",stats:null,list:null,next:null,pages:[null],player:"",typed:"",err:null,open:null,full:{},checks:{},day:null},O=e=>(e==null?void 0:e.code)==="no_record"||(e==null?void 0:e.status)===404?"soon":(e==null?void 0:e.message)||"The house did not answer";async function R(){try{a.stats=await v.stats({period:a.period}),a.err=null}catch(e){a.err=O(e)}p()}async function w(){try{const e=await v.bouts({limit:Z,period:a.period,player:a.player||void 0,before:a.pages[a.pages.length-1]||void 0});Object.assign(a,{list:e.bouts,next:e.next})}catch(e){a.err=O(e)}p()}const S=()=>u==null?void 0:u.loadJackpot().then(p,()=>{}),D=new URLSearchParams(location.search).get("chain")==="dev"?"./?door=bet&chain=dev&devwallet&mute":"./?door=bet",A=()=>`<header class="shead"><a class="sback" href="${D}">‹ Joust Arena</a><h1>All jousts &amp; stats</h1></header>`;function Y(){var h,g;const e=(h=a.stats)==null?void 0:h.totals,t=(g=a.stats)==null?void 0:g.jackpots,s=u==null?void 0:u.jackpotUsd(),n=u==null?void 0:u.wholeJackpot(),l=(f,x,d="",m="")=>`<div class="swell ${m}"><small>${f}</small><b>${r(x)}</b>${d?`<em>${r(d)}</em>`:""}</div>`,c=a.stats&&a.stats.head!=null&&a.stats.to!=null&&a.stats.head-a.stats.to>60?`<p class="sbehind">The house is still reading the arena's history: block ${o(a.stats.to)} of ${o(a.stats.head)}.</p>`:"";return`<section class="sboard" aria-label="Totals">
    <div class="sctl"><label class="sper"><span>Period</span><select data-act="period">${K.map(([f,x])=>`<option value="${f}"${a.period===f?" selected":""}>${x}</option>`).join("")}</select></label>
      <a class="sbtn" href="${r(v.csvUrl({period:a.period,player:a.player||void 0}))}" download>⇩ Download every joust (CSV)</a></div>
    <div class="snums">
      ${l("Jousts",e?o(e.bouts):"…",e&&e.open?`${o(e.open)} drawing now`:"")}
      ${l("Players",e?o(e.players):"…")}
      ${l("Wagered",e?i(e.wageredUsd):"…","at each bet's price")}
      ${l("Paid to players",e?i(e.paidUsd):"…",e?`${E(e.winRate)} of bets won`:"")}
      ${l("Jackpot now",s!=null?i(s):n!=null?`${o(n)} HORSKE`:"…",`${s!=null&&n!=null?`${o(n)} HORSKE · `:""}${t?t.hits?`${o(t.hits)} hit${t.hits===1?"":"s"} paid ${i(t.paidUsd)}`:"no hit yet":""}`,"sjack")}
    </div>${c}</section>`}function Q(){var s;const e=((s=a.stats)==null?void 0:s.chance)??[];return`<section class="sboard" aria-labelledby="sh-chance"><h2 id="sh-chance">Chance</h2>
    <p class="snote">Every joust is a fresh draw. Your chance is 43% plus the bar you hit on the three passes. Over many jousts, each chance should win about as often as it says: the line marks it.</p>${e.length?`<table class="schance"><thead><tr><th>Chance</th><th>Jousts</th><th>Won</th><th>Win rate</th></tr></thead><tbody>${e.map(n=>`<tr><td>${n.pct}%</td><td>${o(n.bouts)}</td><td>${o(n.won)}</td><td><div class="srate"><div class="sbar" title="the line: the chance itself"><i style="width:${(n.winRate*100).toFixed(1)}%"></i><u style="left:${n.pct}%"></u></div><span>${E(n.winRate)}</span></div></td></tr>`).join("")}</tbody></table>`:'<p class="snote">No joust drawn yet.</p>'}</section>`}const X=[["biggestWin","Biggest win",e=>[`+${i(e.usd)}`,`${b(e.player)} · ${$(e.at)}`,!0],e=>`🏆 Biggest win in the Joust Arena: +${i(e.usd)}`],["biggestBet","Biggest bet",e=>[i(e.usd),`${b(e.player)} · ${e.status==="won"?"won it":e.status==="lost"?"lost it":"drawing"}`],e=>`💰 Biggest bet in the Joust Arena: ${i(e.usd)}`],["hottestStreak","Hottest streak",e=>[`${o(e.wins)} win${e.wins===1?"":"s"} in a row`,`${b(e.player)} · ${$(e.at)}`],e=>`🔥 ${e.wins} wins in a row in the Joust Arena`],["mostBouts","Most jousts",e=>[`${o(e.bouts)} jousts`,`${b(e.player)} · ${i(e.wageredUsd)} wagered`],e=>`⚔️ ${o(e.bouts)} jousts ridden in the Joust Arena`],["luckiest","Luckiest player",e=>[B(e.netUsd),`${b(e.player)} · in ${o(e.bouts)} jousts`,e.netUsd>0],e=>`🍀 Luckiest player of the Joust Arena: ${B(e.netUsd)}`],["sharpest","Sharpest lance",e=>[`${e.chancePct}% chance`,`${b(e.player)} · average over ${o(e.bouts)} jousts`],e=>`🎯 Sharpest lance of the Joust Arena: ${e.chancePct}% average chance`],["biggestJackpot","Biggest jackpot",e=>[i(e.usd),`${b(e.player)} · ${$(e.at)}`,!0],e=>`🏆 Joust Arena jackpot hit: ${i(e.usd)}`]];function ee(){var l,c;const e=((l=a.stats)==null?void 0:l.records)??{},t=(c=a.stats)==null?void 0:c.totals,s=([h,g,f,x])=>{const d=e[h],[m,j,J]=d?f(d):["—",h==="sharpest"?"Ten jousts drawn to qualify":h==="biggestJackpot"?"No hit yet":"No joust yet"];return`<article class="srec swell"><header><span>${g}</span>${d?`<a class="sx" href="${r(U(x(d)))}" target="_blank" rel="noopener">𝕏 Share</a>`:""}</header><b class="${J?"up":""}">${r(m)}</b><p>${r(j)}</p></article>`},n=t?`<article class="srec swell"><header><span>Total action</span><a class="sx" href="${r(U(`⚔️ ${o(t.bouts)} jousts and ${i(t.wageredUsd)} wagered in the Joust Arena`))}" target="_blank" rel="noopener">𝕏 Share</a></header><b>${o(t.bouts)} jousts</b><p>${i(t.wageredUsd)} wagered by ${o(t.players)} player${t.players===1?"":"s"}</p></article>`:"";return`<section class="sboard" aria-labelledby="sh-rec"><h2 id="sh-rec">Records</h2><div class="srecs">${X.map(s).join("")}${n}</div></section>`}function te(e){if(!e.length)return[];const t=[],s=new Map(e.map(n=>[n.day,n]));for(let n=Date.parse(e[0].day+"T00:00:00Z"),l=Date.parse(e[e.length-1].day+"T00:00:00Z");n<=l;n+=864e5){const c=new Date(n).toISOString().slice(0,10);t.push(s.get(c)??{day:c,wageredUsd:0,bouts:0,players:0})}return t}function ae(){var x;const e=te(((x=a.stats)==null?void 0:x.daily)??[]);if(!e.length)return'<section class="sboard" aria-labelledby="sh-day"><h2 id="sh-day">Daily volume <small>$ wagered per day (UTC)</small></h2><p class="snote">No joust yet.</p></section>';const t=a.day!=null&&a.day<e.length?a.day:e.length-1,s=e[t],n=Math.max(...e.map(d=>d.wageredUsd),.01),l=10,c=Math.max(e.length,14),h=c-e.length,g=e.map((d,m)=>{const j=d.wageredUsd>0?Math.max(2,d.wageredUsd/n*96):0;return`<rect data-act="day" data-i="${m}" class="${m===t?"on":""}" x="${(h+m)*l+1}" y="${100-j}" width="${l-2}" height="${j}"><title>${d.day}: ${i(d.wageredUsd)}</title></rect>`}).join("");return`<section class="sboard" aria-labelledby="sh-day"><h2 id="sh-day">Daily volume <small>$ wagered per day (UTC)</small></h2>
    <p class="sday"><b>${(d=>$(Date.parse(d+"T12:00:00Z")/1e3).split(",")[0])(s.day)}</b> · ${i(s.wageredUsd)} wagered · ${o(s.bouts)} joust${s.bouts===1?"":"s"} · ${o(s.players)} player${s.players===1?"":"s"}</p>
    <svg class="schart" viewBox="0 0 ${c*l} 100" preserveAspectRatio="none" role="img" aria-label="Dollars wagered each day">${g}</svg>
    <div class="saxis"><span>${e[0].day}</span><span>${e[e.length-1].day}</span></div></section>`}function se(e){const t=a.full[e.id];if(!t)return'<p class="snote">Reading the bout…</p>';const s=a.checks[e.id],n=(h,g)=>`<a href="${r(`${y.explorer}/tx/${h}`)}" target="_blank" rel="noopener">${g} ↗</a>`,l=t.secret?`<dt>Commitment</dt><dd><code>${r(t.commitment)}</code><br><small>sha256 of the house's secret, carried by the bet before the joust</small></dd>
      <dt>Client seed</dt><dd><code>${r(t.clientSeed)}</code></dd>
      <dt>Secret</dt><dd><code>${r(t.secret)}</code></dd>
      <dt>Number</dt><dd><code>${r(t.number)}</code><br><small>sha256("horske:joust:v1" ‖ bout ‖ secret ‖ client seed)</small></dd>
      <dt>Roll</dt><dd>number mod 10,000 = <b>${o(t.roll)}</b>: ${t.roll<t.chanceBps?`won, under the chance's ${o(t.chanceBps)}`:`lost, at or over the chance's ${o(t.chanceBps)}`}</dd>`:`<dt>Draw</dt><dd>${t.status==="refunded"?"Refunded: the house did not draw it in time":"Not drawn yet"}</dd>`,c=t.secret?`<div class="sline"><button class="sbtn" data-act="check" data-id="${r(t.id)}">Check the draw</button>${s?s.ok?'<span class="scheck ok">✓ The draw matches. Anyone can work it out again.</span>':'<span class="scheck bad">✗ The draw does not match this record.</span>':""}</div>`:"";return`<div class="sp"><dl>
      <dt>Bout</dt><dd><code>${r(t.id)}</code></dd>
      <dt>Player</dt><dd><code>${r(t.player)}</code></dd>
      <dt>Bet</dt><dd>${r(C(t))} · ${T(t.amount)} HORSKE · chance ${z(t.chanceBps)}${t.barBps?` (the bar added ${z(t.barBps)})`:""} · jackpot ticket ${t.jackpotOdds?`1 in ${o(t.jackpotOdds)}`:"none"}</dd>
      ${l}
      <dt>Transactions</dt><dd>${n(t.betTx,"Bet")}${t.settleTx?` · ${n(t.settleTx,t.status==="refunded"?"Refund":"Draw")}`:""}</dd>
      ${t.jackpot?`<dt>Jackpot</dt><dd>Hit: +${i(t.jackpot.usd)} · ${T(t.jackpot.amount)} HORSKE</dd>`:""}
    </dl>${c}</div>`}function ne(){const e=a.list==null?'<p class="snote">Reading the jousts…</p>':a.list.length?`<table class="sall"><thead><tr><th>Time (UTC)</th><th>Player</th><th>Bet</th><th>Chance</th><th>Result</th><th>Payout</th><th class="sto">Tx</th></tr></thead><tbody>${a.list.map(t=>{const s=_(t),n=a.open===t.id;return`<tr class="srow${n?" open":""}" data-act="open" data-id="${r(t.id)}" tabindex="0" aria-expanded="${n}"><td data-label="Time">${$(t.placedAt)}</td><td data-label="Player" class="smono">${r(b(t.player))}</td><td data-label="Bet">${r(C(t))}</td><td data-label="Chance">${z(t.chanceBps)}</td>
        <td data-label="Result" class="${s.kind}">${s.kind==="won"?"Won":s.kind==="lost"?"Lost":s.text}</td><td data-label="Payout">${r(M(t))}</td><td class="sto"><a href="${r(F(t,y.explorer))}" target="_blank" rel="noopener" aria-label="The bout's transaction"><span class="stxt">See the transaction </span>↗</a></td></tr>${n?`<tr class="sproof"><td colspan="7">${se(t)}</td></tr>`:""}`}).join("")}</tbody></table>`:`<p class="sempty">${a.player?"No joust of this wallet in the period.":"No joust in the period."}</p>`;return`<section class="sboard" aria-labelledby="sh-all"><h2 id="sh-all">All jousts <small>newest first</small></h2>
    <form class="sfind" data-act="find"><input name="player" value="${r(a.typed)}" placeholder="Filter by wallet 0x…" spellcheck="false" autocomplete="off" aria-label="Filter by wallet"><button class="sbtn" type="submit">Filter</button>${a.player?'<button class="sbtn" type="button" data-act="clear">Clear</button>':""}</form>
    ${e}
    <nav class="spages"><button class="sbtn" data-act="newer"${a.pages.length>1?"":" disabled"}>← Newer</button><span>Page ${a.pages.length}</span><button class="sbtn" data-act="older"${a.next?"":" disabled"}>Older →</button></nav></section>`}function p(){const e=s=>`${A()}<section class="sboard"><p>${s}</p></section>`,t=v?a.err==="soon"?e("The jousts' record comes with the house's next update."):[A(),a.err?`<p class="sbad">${r(a.err)}</p>`:"",Y(),Q(),ee(),ae(),ne(),`<p class="sfoot">From the house's record of the arena's events. Every draw can be checked here, in your browser.</p>`].join(""):e(`Open the Joust Arena with the test link first: this page reads the same house. <a href="${D}">Go to the arena</a>.`);P(document.getElementById("stats"),`<main id="stats">${t}</main>`,{onBeforeElUpdated:(s,n)=>!(s===document.activeElement&&s.tagName==="INPUT")})}const k=document.getElementById("stats");k.addEventListener("click",e=>{const t=e.target.closest("[data-act]");if(!t||e.target.closest("a"))return;const s=t.dataset.act;if(s==="open"){if(a.open=a.open===t.dataset.id?null:t.dataset.id,a.open&&!a.full[a.open]){const n=a.open;v.bout(n).then(l=>a.full[n]=l.bout,()=>{}).finally(p)}p()}else if(s==="check"){const n=t.dataset.id;I(a.full[n]).then(l=>a.checks[n]=l,()=>a.checks[n]={ok:!1}).finally(p)}else s==="day"?(a.day=Number(t.dataset.i),p()):s==="older"&&a.next?(a.pages.push(a.next),a.list=null,p(),w()):s==="newer"&&a.pages.length>1?(a.pages.pop(),a.list=null,p(),w()):s==="clear"&&(Object.assign(a,{player:"",typed:"",pages:[null],list:null}),p(),w())});k.addEventListener("keydown",e=>{var s,n;const t=(n=(s=e.target).closest)==null?void 0:n.call(s,"tr[data-act=open]");t&&(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),t.click())});k.addEventListener("input",e=>{e.target.name==="player"&&(a.typed=e.target.value)});k.addEventListener("change",e=>{e.target.dataset.act==="period"&&(Object.assign(a,{period:e.target.value,pages:[null],list:null,stats:null,day:null}),p(),R(),w())});k.addEventListener("submit",e=>{e.preventDefault();const t=a.typed.trim();if(t&&!V.test(t))return a.err="A wallet is 0x and 40 letters or digits.",p();Object.assign(a,{player:t.toLowerCase(),pages:[null],list:null,err:null}),p(),w()});p();v&&(R(),w(),S(),setInterval(()=>{document.hidden||(R(),S(),a.pages.length===1&&w())},q));

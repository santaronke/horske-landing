import{S as T,I as ut,A as q,v as l,x as gt,g as ht,J as xt}from"./index-m_UtFGam.js";import{g as ft,E as B}from"./chain-CQf1exDM.js";import"./config-CxlQWhDH.js";const mt=`/* The Lists' betting panel and result card (src/bet/bet.js) as a wooden board in the style of the site's header bar
   (horske-realm assets bar-l/bar-mid/bar-r: dark wood, a gold bevel at the edge): Rafael, 17/10, on the menu "queria
   que o menus fosse algo de madeira dentro da justa", showing the header, "talvez algo nesse estilo?". The wood is the
   header's own (art/ui/wood-dark.webp: its band between the gold edges, mirrored below so it repeats with no seam),
   cut into planks; the red Bet button is the header's Log out button. A side panel on a wide screen, a bottom sheet
   on an upright phone. */
#wbet{--wood:#42250f;--deep:#1d130b;--well:rgba(20,10,3,.5);--wellring:rgba(240,189,69,.28);--gold:#f0bd45;--gold1:#ffe08a;--gold2:#d9a21f;--ink:#1d130b;
  --cream:#fff3d6;--muted:#e3cfa8;--card1:#fbf0d4;--card2:#efdcae;--win:#9be08f;--lose:#ff9a7a;
  --bevel:0 0 0 1px #452600,0 0 0 2px #926e3d,0 0 0 3px #d6b37f,0 0 0 4px #a1805a,0 0 0 6px #1d130b;
  --gothic:"Grenze Gotisch",Georgia,serif;--ui:Gelasio,Georgia,"Times New Roman",serif;
  position:fixed;inset:0;z-index:40;pointer-events:none;font-family:var(--ui);color:var(--cream);-webkit-tap-highlight-color:transparent}
#wbet *{box-sizing:border-box}
:where(#wbet) button{font:inherit;color:inherit;cursor:pointer}
/* the board: the header's wood in planks, its gold bevel round the edge */
.bpanel,.bend{pointer-events:auto;position:absolute;border-radius:6px;
  background:repeating-linear-gradient(180deg,transparent 0 56px,rgba(16,7,0,.6) 56px 58px,rgba(255,214,150,.09) 58px 59px,transparent 59px 60px),var(--wood) url(art/ui/wood-dark.webp) 0 0/700px auto repeat;
  box-shadow:var(--bevel),0 12px 22px rgba(0,0,0,.5),inset 0 0 40px rgba(0,0,0,.45)}
/* centred top to bottom on a wide screen (Rafael, 18/10, on a 1917x912 window where it hugged the top: "o menu poderia ficar mais
   centralizado verticalmente né?"); margins, not a transform, so the slide-in keeps its own */
.bpanel{right:max(26px,env(safe-area-inset-right,0px));top:0;bottom:0;margin:auto 0;height:fit-content;width:min(410px,calc(100% - 52px));max-height:calc(100% - 60px);display:flex;flex-direction:column;animation:bin .24s cubic-bezier(.16,1,.3,1)}
@keyframes bin{from{opacity:0;transform:translateX(14px)}}
@keyframes bup{from{opacity:0;transform:translateY(24px)}}
.bhead{position:relative;z-index:4;display:flex;align-items:center;gap:10px;padding:14px 14px 10px}
.bhead h1{margin:0;white-space:nowrap;font-family:var(--gothic);font-weight:900;font-size:27px;line-height:1;color:var(--gold);-webkit-text-stroke:1.5px var(--ink);paint-order:stroke fill;text-shadow:0 3px 0 var(--ink)}
.bback{flex:none;padding:7px 11px;border:0;border-radius:7px;font-weight:700;font-size:14px;color:var(--ink)!important;background:linear-gradient(var(--gold1),var(--gold2));box-shadow:0 0 0 2px var(--deep),0 3px 0 2px var(--deep)}
.bchipc{margin-left:auto;display:inline-flex;align-items:center;gap:7px;padding:4px 12px 4px 5px;border-radius:999px;background:var(--well);box-shadow:inset 0 0 0 1px var(--wellring);font-weight:700;font-size:16px;color:var(--gold1);white-space:nowrap}
.coin{display:inline-block;width:20px;height:20px;flex:none;border-radius:50%;background:radial-gradient(circle at 35% 35%,#ffe9a0,#e0a91f 60%,#8a5f10);box-shadow:0 0 0 2px var(--deep);vertical-align:-4px}
.btabs{display:flex;gap:6px;margin:0 14px 4px}
.btabs button,.bsort button{border:0;border-radius:7px;font-weight:700;color:var(--muted);background:var(--well);box-shadow:inset 0 0 0 2px var(--wellring)}
.btabs button{flex:1;min-height:38px;font-size:15px}
.btabs button.on,.bsort button.on{color:var(--ink);background:linear-gradient(var(--gold1),var(--gold2));box-shadow:0 0 0 2px var(--deep),0 3px 0 2px var(--deep)}
.bbody{position:relative;flex:1 1 auto;min-height:0;overflow:auto;padding:2px 16px 16px;scrollbar-width:thin;scrollbar-color:#8a5f2a transparent}
.bq{margin:12px 0 8px;font-weight:700;font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--gold);text-shadow:0 1px 0 var(--ink)}
/* the jackpot's pot (20/10): a gold strip under the header, and a line on the result card; a new value counts up, lit */
.bjack{position:relative;z-index:3;display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:4px 10px;margin:0 14px 10px;padding:7px 14px;border-radius:9px;
  background:radial-gradient(90% 160% at 50% 0%,rgba(255,224,138,.2),transparent 65%),var(--well);box-shadow:inset 0 0 0 2px var(--gold2),inset 0 0 16px rgba(240,189,69,.22)}
.bjl{display:inline-flex;align-items:center;gap:7px;font-weight:700;font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:var(--gold);text-shadow:0 1px 0 var(--ink)}
.bjl .coin{width:18px;height:18px}
.bjv{font-family:var(--gothic);font-weight:900;font-size:30px;line-height:1;white-space:nowrap;color:var(--gold1);-webkit-text-stroke:1.5px var(--ink);paint-order:stroke fill;text-shadow:0 3px 0 var(--ink);font-variant-numeric:tabular-nums}
.bjh{font-size:12px;font-weight:700;color:var(--muted);white-space:nowrap}
.bjup{font-style:normal;font-weight:700;font-size:15px;color:var(--win);text-shadow:0 1px 0 var(--ink);white-space:nowrap}
.bjack.up .bjv{animation:bjlit .9s ease-out}
@keyframes bjlit{from{text-shadow:0 3px 0 var(--ink),0 0 22px rgba(255,214,90,.95)}}
.bjack.card{margin:12px 0 0}
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
/* the one action: the header's red button, larger */
.bgo{width:100%;margin:20px 0 4px;display:flex;flex-direction:column;align-items:center;gap:1px;min-height:60px;padding:8px 10px;border:0;border-radius:10px;color:#fff!important;text-shadow:0 2px 0 #5a1410;
  background:linear-gradient(#c8363c,#8e1a1f);box-shadow:0 0 0 3px #d9a947,0 0 0 5px var(--ink),inset 0 3px 0 rgba(255,255,255,.3),0 6px 0 5px var(--ink);transition:transform .1s}
.bgo b{font-family:var(--gothic);font-weight:900;font-size:30px;line-height:1}
.bgo small{font-weight:700;font-size:14px}
.bgo:disabled,.bbtn:disabled{filter:grayscale(.7) brightness(.85);cursor:default;pointer-events:none}
.bgo:active{transform:translateY(4px);box-shadow:0 0 0 3px #d9a947,0 0 0 5px var(--ink),inset 0 3px 0 rgba(255,255,255,.3),0 2px 0 5px var(--ink)}
.bhint{margin:18px 0 0;font-size:13px;line-height:1.4;color:var(--muted);text-align:center;text-shadow:0 1px 0 var(--ink)}
.bhint.bextra{margin-top:2px;color:var(--gold)} /* what the Tavern adds, right under the chance */
.bhint.bbad{color:var(--lose)} /* the wallet's or the house's no, in its own words */
.bchainstep .bbtn{margin:14px auto 0;min-width:220px}
/* the bet on the chain at the third pass: a banner over the lists while the wallet and the chain work */
.bchain{position:fixed;left:50%;top:max(14px,env(safe-area-inset-top));transform:translateX(-50%);display:flex;align-items:center;gap:10px;padding:10px 18px;border-radius:10px;
  background:var(--wood) url(art/ui/wood-dark.webp) 0 0/700px auto repeat;box-shadow:var(--bevel),0 8px 18px rgba(0,0,0,.5);font-weight:700;font-size:17px;color:var(--gold1);
  text-shadow:0 2px 0 var(--ink);white-space:nowrap;pointer-events:none;animation:bup .25s ease-out}
.bchain span{width:16px;height:16px;border-radius:50%;border:3px solid var(--gold);border-top-color:transparent;animation:bspin .8s linear infinite}
@keyframes bspin{to{transform:rotate(360deg)}}
@media (prefers-reduced-motion:reduce){.bchain,.bchain span{animation:none}}
/* buttons of the short purse and the result card */
.bbtn{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;min-height:50px;padding:7px 14px;border:0;border-radius:9px;font-weight:700;font-size:18px;line-height:1.1;text-decoration:none;white-space:nowrap;transition:transform .1s}
.bbtn small{font-size:12px;font-weight:500}
.bbtn:active{transform:translateY(3px)}
.bbtn.gold{color:var(--ink);background:linear-gradient(var(--gold1),var(--gold2));box-shadow:0 0 0 2px var(--deep),0 4px 0 2px var(--deep)}
.bbtn.dark{color:var(--gold1);background:var(--well);box-shadow:0 0 0 2px var(--deep),0 0 0 4px rgba(240,189,69,.45),0 4px 0 4px var(--deep)}
.bbtn.red{color:#fff;text-shadow:0 2px 0 #5a1410;background:linear-gradient(#c8363c,#8e1a1f);box-shadow:0 0 0 2px #d9a947,0 0 0 4px var(--ink),inset 0 2px 0 rgba(255,255,255,.3),0 5px 0 4px var(--ink)}
.bshort{margin-top:16px;text-align:center}
.bshort p{margin:0 0 12px;font-size:14px;line-height:1.4}
.brow{display:flex;flex-wrap:wrap;gap:12px}
.brow .bbtn{flex:1;min-width:150px;font-size:16px;min-height:46px}
/* the board */
.bsort{display:flex;gap:6px;margin:8px 0 10px}
.bsort button{flex:1;min-height:34px;font-size:14px}
.blist{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:6px}
.blist li{display:flex;align-items:center;gap:10px;min-height:48px;padding:6px 10px;border-radius:8px;background:var(--well);box-shadow:inset 0 0 0 2px var(--wellring)}
.blist li.me{box-shadow:inset 0 0 0 2px var(--gold1)}
.brank{width:26px;text-align:center;font-family:var(--gothic);font-weight:900;font-size:20px;color:var(--gold)}
.bname{flex:1;min-width:0;display:flex;flex-direction:column}
.bname b{font-size:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.bname small{font-size:12px;color:var(--muted)}
.bval{font-size:15px}.bval.up{color:var(--win)}.bval.down{color:var(--lose)}
.bempty{margin:8px 0;padding:18px;border-radius:10px;border:2px dashed rgba(240,189,69,.35);text-align:center;font-size:15px}
.bhouse{margin:12px 0 0;font-size:12px;line-height:1.4;color:var(--muted)}
/* the toast (top of the screen, as the world's) and the busy veil */
.btoast{position:absolute;left:50%;top:max(16px,env(safe-area-inset-top,0px));transform:translateX(-50%);z-index:5;pointer-events:none;width:max-content;max-width:min(520px,92vw);padding:9px 18px;border-radius:6px;
  background:var(--wood) url(art/ui/wood-dark.webp) 0 0/700px auto;box-shadow:var(--bevel);font-weight:700;font-size:15px;color:var(--gold1);text-align:center;animation:btin .2s ease-out}
.btoast.bad{color:#fff;background:linear-gradient(#c8363c,#8e1a1f)}
@keyframes btin{from{opacity:0;transform:translate(-50%,-6px)}}
.bwait{position:absolute;inset:0;z-index:3;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;border-radius:6px;background:rgba(20,10,3,.62);cursor:progress;pointer-events:auto}
.bwait span{width:42px;height:42px;border-radius:50%;border:5px solid rgba(240,189,69,.25);border-top-color:var(--gold);animation:bspin .8s linear infinite}
.bwait b{font-family:var(--gothic);font-weight:900;font-size:24px;color:var(--gold)}
#wbet>.bwait{border-radius:0;background:rgba(20,10,3,.35)}
@keyframes bspin{to{transform:rotate(360deg)}}
/* the result card */
.bend{left:50%;bottom:max(24px,env(safe-area-inset-bottom,0px));width:min(540px,calc(100% - 36px));padding:38px 18px 14px;transform:translateX(-50%);text-align:center;animation:bend .32s cubic-bezier(.16,1,.3,1) both}
@keyframes bend{from{opacity:0;transform:translate(-50%,16px)}}
.brib{position:absolute;left:50%;top:0;transform:translate(-50%,-55%);z-index:1;filter:drop-shadow(0 3px 0 var(--deep))}
.brib span{display:block;padding:6px 46px 8px;font-family:var(--gothic);font-weight:900;font-size:36px;line-height:1;white-space:nowrap;clip-path:polygon(0 0,100% 0,calc(100% - 18px) 50%,100% 100%,0 100%,18px 50%)}
.bend.win .brib span{color:var(--ink);background:linear-gradient(var(--gold1),var(--gold2) 70%,#a87a10)}
.bend.loss .brib span{color:#fff;text-shadow:0 2px 0 #4a0d09;background:linear-gradient(#c8363c,#8e1a1f)}
.bend.wait .brib span{color:var(--cream);background:linear-gradient(#5a6070,#33384a)}
.bres{display:flex;align-items:center;gap:12px;padding:10px 12px;border-radius:9px;background:var(--well);box-shadow:inset 0 0 0 2px var(--wellring);text-align:left}
.bpor{flex:none;width:56px;height:56px;border-radius:8px;box-shadow:0 0 0 2px var(--gold2);background:center 20%/cover no-repeat}
.bwho{flex:1;min-width:0;display:flex;flex-direction:column}
.bwho small,.bbig small{font-weight:700;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--gold);opacity:.9}
.bwho b{font-size:18px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.bbig{display:flex;flex-direction:column;align-items:flex-end}
.bbig b{font-family:var(--gothic);font-weight:900;font-size:40px;line-height:1;white-space:nowrap;-webkit-text-stroke:1.5px var(--ink);paint-order:stroke fill;text-shadow:0 3px 0 var(--ink)}
.bend.win .bbig b{color:var(--win)}.bend.loss .bbig b{color:var(--lose)}.bend.wait .bbig b{color:var(--gold1)}
.bdet{margin:10px 0 16px;font-size:14px;color:var(--muted);text-shadow:0 1px 0 var(--ink)}
.bacts{display:grid;grid-template-columns:3fr 2fr;gap:18px;align-items:stretch;padding:0 6px}
.bacts .bshort{grid-column:1/-1;margin-top:0}
.bacts.one{grid-template-columns:1fr}
.bacts>:nth-child(3):last-child{grid-column:1/-1} /* a bet still open: check, refund, then the change across the row */
.blink{margin:16px auto 0;display:block;border:0;background:none;padding:6px 10px;font-weight:700;font-size:14px;color:var(--gold1)!important;text-decoration:underline;text-underline-offset:3px}
/* an upright phone: the panel is a bottom sheet, the result card spans the screen's foot */
@media (max-width:700px) and (min-height:501px),(max-width:700px) and (orientation:portrait){
  .bpanel{left:0;right:0;top:auto;bottom:0;margin:0;height:auto;width:auto;max-height:88%;border-radius:12px 12px 0 0;animation-name:bup}
  .bhead{padding:14px 14px 8px}
  .bhead h1{font-size:27px}
  .bchipc{font-size:15px}
  .bbody{padding:2px 14px calc(16px + env(safe-area-inset-bottom,0px))}
  .bstake b{font-size:28px}
  .bjv{font-size:27px}
  .bend{bottom:calc(12px + env(safe-area-inset-bottom,0px));padding:32px 14px 10px}
  .brib span{font-size:30px;padding:6px 34px 8px}
  .bbig b{font-size:32px}
  .bacts{grid-template-columns:1fr;gap:18px}
}
/* a sideways phone: a side panel, the stakes in one row */
@media (orientation:landscape) and (max-height:500px){
  .bpanel{right:max(12px,env(safe-area-inset-right,0px));top:12px;bottom:auto;margin:0;height:auto;width:min(410px,58%);max-height:calc(100% - 24px)}
  .bhead{padding:9px 12px 6px}
  .bhead h1{font-size:23px}
  .bback{padding:5px 9px;font-size:13px}
  .bchipc{font-size:14px;padding:3px 10px 3px 4px}
  .btabs{margin:0 12px 2px}
  .btabs button{min-height:32px;font-size:14px}
  .bjack{margin:0 12px 6px;padding:4px 10px}
  .bjack.card{margin:8px 0 0}
  .bjv{font-size:22px}
  .bjl .coin{width:15px;height:15px}
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
@media (prefers-reduced-motion:reduce){.bpanel,.bend,.btoast,.bjack.up .bjv{animation:none}.bstake,.bgo,.bbtn{transition:none}}
`,U="https://app.roninchain.com/swap?outputCurrency=0xc0Ca45c2e9448D3876Ca86220B2418C719298396",X=[100,1e3,1e4,1e5],S="free",wt={gambaBet:"Placing your bet",gambaSettle:"The judges decide",sync:"Updating",faucet:"Adding test HORSKE"},vt="https://wallet.roninchain.com",kt={nowallet:["Install the Ronin Wallet to bet on the Saigon testnet.","wallet"],nohouse:["The house's address is missing: open the test link the team sent.",""],connect:["Bet with your Ronin Wallet on the Saigon testnet.","cconnect:Connect wallet"],network:["Your wallet is on another network.","cnetwork:Switch to Saigon"],signin:["Sign in so the house can make your bets. This signs no transaction.","csignin:Sign in"],loading:["Reading your purse…",""],faucet:["You need test HORSKE: 1,000,000, free once an hour.","cfaucet:Get test HORSKE"],approve:["Once: let the arena take your bets from your test HORSKE.","capprove:Allow the arena"]},E={signin:"Sign in with your wallet to finish the bet",offer:"The house signs your bet…",confirm:"Confirm your bet in the wallet",placing:"Your bet is on its way…",settling:"The judges reveal the draw…"},g=b=>String(b??"").replace(/[&<>"]/g,$=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[$]),$t=b=>b?xt(b)||b:"",K=b=>`${(Math.round((b||0)*1e4)/100).toFixed(2)}%`,H=b=>`${+(Math.round((b||0)*1e4)/100).toFixed(2)}%`,Q=b=>`${b>0?"+":b<0?"−":""}${l(Math.abs(b))}`,V=b=>`${Math.floor(b/60)}:${String(b%60).padStart(2,"0")}`,k=b=>b<1?b.toFixed(2):String(+b.toFixed(2)),Z=b=>b>=1e3?`$${l(Math.round(b))}`:`$${b.toFixed(2)}`;function jt({room:b,player:$,village:tt,quests:v}){var I;const y=T.gamba,s=ft(),i={tab:"bet",sort:"wagered",amount:null,usd:1,v:0,jp:{unit:null,shown:null,from:0,to:0,t0:0,base:null}};s.on()&&(s.restore().catch(()=>{}),v==null||v.useBonus(!1)),document.head.insertAdjacentHTML("beforeend",`<style id="web-bet">${mt}</style>`);const j=document.createElement("div");j.id="wbet",document.body.appendChild(j);const z=(t,e)=>window.sendAction(t,e),R=()=>{i.v++};function M(){const t=$.state,e=t.econ||null,n=s.on(),o=s.state,a=n&&Array.isArray(o.stakes)?o.stakes:null;a&&o.maxBet!=null&&(T.gamba.maxBet=Math.max(T.gamba.maxBet,Number(o.maxBet/B))),i.amount==null&&(i.amount=t.gambaPick&&t.gambaPick.amount||1e3);const r=n?o.balance==null?null:s.wholeBalance():e?e.horske:null,d=n&&o.minBet!=null?Number(o.minBet/B):0,x=n&&o.maxBet!=null?Math.min(q(),Number(o.maxBet/B)):q(),m=a??X.map(p=>({usd:null,amount:p})),c=m.filter(p=>p.amount>=d&&p.amount<=x&&(r==null||p.amount<=r)).map(p=>p.amount);if(a){const p=a.filter(h=>c.includes(h.amount)).map(h=>h.usd);p.length&&!p.includes(i.usd)&&(i.usd=p[p.length-1]),i.amount=(a.find(h=>h.usd===i.usd)||a[0]).amount}else c.length&&!c.includes(i.amount)&&(i.amount=c[c.length-1]);return{s:t,ec:e,coins:r,fits:c,all:m,list:a,lo:d,qv:v?v.view():null,on:n,step:n?s.step():"off"}}const f=(t,e,n="",o="gold",a="")=>`<button class="bbtn ${o}" data-act="${e}" ${n}>${t}${a?`<small>${a}</small>`:""}</button>`,et=t=>`<span class="bchipc"><i class="coin"></i>${t.coins==null?"…":l(t.coins)}</span>`,Y=(t,e)=>`<div class="bshort"><p>You have ${l(t.coins||0)} HORSKE${e?`, and this bet takes ${l(e)}`:""}.</p>
    <div class="brow"><a class="bbtn gold" href="${U}" target="_blank" rel="noopener">Buy $HORSKE<small>on Ronin ↗</small></a>${t.s.tools?f(`+${l(T.faucet)} test HORSKE`,"faucet","","dark"):""}</div></div>`;function N(t){var c,p;const e=s.state,[n,o]=kt[t.step]||["…",""],[a,r]=o.split(":"),d=e.busy?'<p class="bhint">Waiting for your wallet…</p>':o==="wallet"?`<a class="bbtn gold" href="${vt}" target="_blank" rel="noopener">Get Ronin Wallet<small>wallet.roninchain.com ↗</small></a>`:a?f(r,a):t.step==="loading"&&(((c=e.error)==null?void 0:c.code)==="purse"||((p=e.error)==null?void 0:p.code)==="stakes")?f("Try again","crefresh"):"",x=e.error?`<p class="bhint bbad">${g(e.error.message)}</p>`:"",m=e.address?`<p class="bhint">${g(e.address.slice(0,6)+"…"+e.address.slice(-4))} · Saigon</p>`:"";return`<div class="bbody bchainstep"><p class="bq">Saigon test</p><p class="bhint">${g(n)}</p>${d}${x}${m}</div>`}function nt(t){if(t.on&&t.step==="pending")return at(t);if(t.on&&t.step!=="ready")return N(t);const e=gt(S).cap,n=t.qv,o=t.all.map(c=>{const p=c.amount,h=i.amount===p,u=c.usd!=null?`$${k(c.usd)}`:l(p),w=c.usd!=null?`$${k(c.usd*y.payout)}`:l(p*y.payout);return`<button class="bstake${h?" on":""}" data-act="stake" data-v="${p}" data-usd="${c.usd??""}" aria-pressed="${h}"${t.fits.includes(p)?"":" disabled"}><small>Bet</small><b>${u}</b><em>win ${w}</em></button>`}).join(""),a=n?n.bonus>0?`<p class="bhint bextra">Tavern quests and your Ronke Score add +${H(n.bonus)}.</p>`:`<p class="bhint bextra">Do the Tavern's quests to raise it.</p>`:"",r=(s.state.baseBps??4300)/1e4,d=t.on?`<p class="bhint">Your chance: ${H(r)} plus the bar, up to ${H(r+ht())}. Hit the bar on each pass to raise it.</p><p class="bhint bextra">Saigon test: the Tavern's bonus is not on the chain yet.</p>`:`<p class="bhint">Your chance: up to ${H(e)}. Hit the bar on each pass to raise it.</p>${a}`,x=t.on?s.holdLeft():0,m=t.coins==null?'<p class="bhint">Opening your purse…</p>':x>0&&t.fits.length?`<button class="bgo" data-act="bet" disabled><b>Bet again in ${V(x)}</b><small>your last bets' offers are still open on the chain</small></button>${d}`:t.fits.length&&t.list?`<button class="bgo" data-act="bet"><b>Bet $${k(i.usd)}</b><small>${l(i.amount)} HORSKE · to win $${k(i.usd*y.payout)}</small></button>${d}`:t.fits.length?`<button class="bgo" data-act="bet"><b>Bet ${l(i.amount)}</b><small>to win ${l(i.amount*y.payout)}</small></button>${d}`:t.on?N({...t,step:"faucet"}):Y(t,X[0]);return`<div class="bbody"><p class="bq">Your bet</p><div class="bstakes" role="group" aria-label="Your bet">${o}</div>${m}</div>`}function at(t){var h;const e=s.state,n=e.pending;if(!n)return"";const o=Number(n.amount/B),a=(e.baseBps??4300)/1e4+n.barBps/1e4,r=n.usd!=null?`$${k(n.usd)} · ${l(o)} HORSKE`:`${l(o)} HORSKE`,d=n.usd!=null?`$${k(n.usd*y.payout)}`:l(o*y.payout),x=e.busy==="pending"?e.waiting?"Waiting for the house…":E[(h=e.bout)==null?void 0:h.stage]||"Waiting for your wallet…":null,m=s.ridingElsewhere(n.joustId),c=x?`<p class="bhint">${g(x)}</p>`:m?'<p class="bhint">This bet is being ridden in another tab: finish it there.</p>':t.coins!=null&&t.coins<o?`<p class="bhint">You need ${l(o)} HORSKE to sign it.</p><div class="brow"><a class="bbtn gold" href="${U}" target="_blank" rel="noopener">Buy $HORSKE<small>on Ronin ↗</small></a>${s.cfg.chainId!==2020?f("Get test HORSKE","cfaucet","","dark"):""}</div>${n.offered?f("Sign the bet","cpending","","dark","if it already went out, its result"):""}`:f("Sign the bet","cpending","","gold",`to win ${d}`),p=e.error&&e.busy==null?`<p class="bhint bbad">${g(e.error.message)}</p>`:"";return`<div class="bbody bchainstep"><p class="bq">Your pending bet</p>
      <p class="bhint">This bet was not signed. Sign it to keep betting: the same stake, and the bar your taps earned.</p>
      <p class="bdet">${r} · chance ${K(a)}</p>${c}${p}</div>`}function ot(){const t=s.state.pendingDone,e=t.refunded?"wait":t.won?"win":"loss",n=t.refunded?"Bet refunded":t.won?"You win!":"The house wins",o=t.refunded?l(t.amount):t.won?`+${l(Number(BigInt(t.payout??0)/B))}`:`−${l(t.amount)}`,a=t.txHash?`<a class="blink" href="${s.cfg.explorer}/tx/${g(t.txHash)}" target="_blank" rel="noopener">See the draw on Saigon ↗</a>`:"";return`<section class="bend ${e}" aria-labelledby="btitle"><div class="brib"><span id="btitle">${n}</span></div>
      <div class="bres"><span class="bwho"><small>Your pending bet</small><b>The House</b></span>
        <span class="bbig"><small>Result</small><b>${o}</b></span></div>${A(!0)}
      <p class="bdet">Bet ${l(t.amount)} · chance ${K(t.chance)}</p>
      <div class="bacts one">${f("Back to the bets","cpdone","","red")}</div>${a}</section>`}function st(t){const e=$.userId,n=t.ec&&t.ec.glb||[],o=y.lbMinBets,a=t.ec&&t.ec.gme||{bets:0},r=t.ec&&t.ec.house||{bets:0,wagered:0,paid:0},d=n.slice().sort((u,w)=>w.net-u.net),x=i.sort==="net"?d:n,m=n.findIndex(u=>u.id===e)+1,c=d.findIndex(u=>u.id===e)+1,p=a.bets>=o&&m?`You are #${m} by volume and #${c} by profit.`:`${Math.max(0,o-a.bets)} more bet${o-a.bets===1?"":"s"} this season to enter the board.`,h=x.slice(0,20).map((u,w)=>`<li class="${u.id===e?"me":""}"><b class="brank">${w+1}</b><span class="bname"><b>${g(u.name||"Knight")}</b><small>${l(u.bets)} bets · ${i.sort==="wagered"?`net ${Q(u.net)}`:`${l(u.wagered)} wagered`}</small></span>
      <b class="bval${i.sort==="net"?u.net>0?" up":u.net<0?" down":"":""}">${i.sort==="wagered"?l(u.wagered):Q(u.net)}</b></li>`).join("");return`<div class="bbody">
        <div class="bsort" role="group" aria-label="Order">${[["wagered","By volume"],["net","By profit"]].map(([u,w])=>`<button class="${i.sort===u?"on":""}" data-act="sort" data-k="${u}" aria-pressed="${i.sort===u}">${w}</button>`).join("")}</div>
        ${h?`<ol class="blist">${h}</ol>`:`<p class="bempty">Nobody has ${o} settled bets this season yet.</p>`}
        <p class="bhouse">${p} The board counts knights with ${o} or more settled bets this season.</p>
        <p class="bhouse">${r.bets?`This season: ${l(r.bets)} bet${r.bets===1?"":"s"} · ${l(r.wagered)} wagered · paid out ${l(r.paid)}`:"No bets this season yet."}</p></div>`}function it(t){var P,_,J;const e=t.s,n=e.bout||{},o=e.vs||{},a=t.on&&n.pending?s.state.cancelled:null;if(a&&s.state.pending)return`<section class="bend wait" aria-labelledby="btitle"><div class="brib"><span id="btitle">Bet waiting</span></div>
        <p class="bdet">${g(a.message||"The bet did not reach the chain")}. Nothing was spent, and the bet waits for your signature: sign it to keep betting.</p>
        <div class="bacts">${s.state.busy==="pending"?`<p class="bhint">${g(E[(P=s.state.bout)==null?void 0:P.stage]||"Waiting for your wallet…")}</p>`:t.coins!=null&&t.coins<Number(s.state.pending.amount/B)&&!s.state.pending.offered?`<p class="bhint">You need ${l(Number(s.state.pending.amount/B))} HORSKE to sign it.</p>`:f("Sign the bet","cpending","","red")}${f("Back to the bets","change","","dark")}</div>
        ${s.state.error&&s.state.busy==null?`<p class="bdet bbad">${g(s.state.error.message)}</p>`:""}
        <button class="blink" data-act="village">Back to the kingdom</button></section>`;if(a){const F=s.holdLeft(),ct=F>0?`<button class="bbtn red" data-act="again" disabled>Bet again in ${V(F)}<small>your last offers are still open</small></button>`:f("Bet again","again","","red",t.list?`$${k(i.usd)}`:`${l(((_=e.gambaPick)==null?void 0:_.amount)||i.amount)} HORSKE`);return`<section class="bend wait" aria-labelledby="btitle"><div class="brib"><span id="btitle">Bet cancelled</span></div>
        <p class="bdet">${g(a.message||"The bet did not reach the chain")}.${a.code==="lost"||a.code==="refunded"?"":" Nothing was spent."}</p>
        <div class="bacts">${ct}${f("Change the bet","change","","dark")}</div>
        <button class="blink" data-act="village">Back to the kingdom</button></section>`}const r=t.on&&((J=s.state.bout)==null?void 0:J.stage)==="done"?s.state.bout.result:null,d=r!=null&&r.txHash?`<a class="blink" href="${s.cfg.explorer}/tx/${g(r.txHash)}" target="_blank" rel="noopener">See the draw on Saigon ↗</a>`:"",x=n.pending?"wait":n.win?"win":"loss",m=n.pending?"Settling…":n.win?"You win!":"The house wins",c=n.pending?l(n.amount):n.win?`+${l(n.payout)}`:`−${l(n.amount)}`,p=n.pending?"Bet against":n.win?"Beat":"Lost to",h=t.on&&n.pending&&e.gamba&&e.gamba.id&&!e.gamba.result,u=h&&i.refund&&i.refund.id===e.gamba.id&&i.refund.now+(Date.now()-i.refund.seenAt)/1e3>=i.refund.at?f("Get your HORSKE back","crefund","","gold","not settled in time"):"",w=h?`${f("Check the result","check","","red",t.step==="ready"?"the chain settles it":"connect your wallet first")}${u}`:t.coins==null||t.coins>=(n.amount||0)?f("Bet again","again","","red",t.list?`$${k(i.usd)}`:`${l(n.amount)} HORSKE`):Y(t,n.amount);return`<section class="bend ${x}" aria-labelledby="btitle">
      <div class="brib"><span id="btitle">${m}</span></div>
      <div class="bres"><span class="bpor" style="background-image:url(${$t(o.portrait)});background-color:${g(o.color||"#888")}"></span>
        <span class="bwho"><small>${p}</small><b>${g(n.rival||o.name||"The House")}</b></span>
        <span class="bbig"><small>${n.pending?"Bet":"Result"}</small><b>${c}</b></span></div>${t.on?A(!0):""}
      <p class="bdet">Bet ${l(n.amount)} · chance ${K(n.chance)}${n.pending?t.on?t.step==="ready"?" · the chain settles it: check the result in a moment":" · connect your wallet, then check the result":" · the bank settles it on your next visit":""}</p>${h&&s.state.error&&s.state.busy==null?`<p class="bdet bbad">${g(s.state.error.message)}</p>`:""}
      <div class="bacts">${w}${f("Change the bet","change","","dark")}</div>${d}
      <button class="blink" data-act="village">Back to the kingdom</button>
    </section>`}const rt=900,O=(I=globalThis.matchMedia)==null?void 0:I.call(globalThis,"(prefers-reduced-motion: reduce)"),C=t=>i.jp.unit==="usd"?Z(t):`${l(Math.round(t))} HORSKE`;let D=0;function lt(t){!s.on()||t.phase!=="armory"&&t.phase!=="end"||document.hidden||Date.now()-D<3e4||(D=Date.now(),s.loadJackpot().catch(()=>{}))}function dt(t){const e=i.jp,n=s.jackpotUsd(),o=s.wholeJackpot(),a=n!=null?{unit:"usd",v:n}:o!=null?{unit:"horske",v:o}:null;if(!a||!s.on()||t.phase!=="armory"&&t.phase!=="end")return;if((e.shown==null||e.unit!==a.unit)&&Object.assign(e,{unit:a.unit,shown:a.v,from:a.v,to:a.v,t0:0,base:null}),t.phase==="end"||!!s.state.pendingDone?e.base==null&&(e.base=e.shown):e.base=null,a.v!==e.to&&(a.v<e.shown||O!=null&&O.matches?Object.assign(e,{shown:a.v,from:a.v,to:a.v,t0:0}):Object.assign(e,{from:e.shown,to:a.v,t0:performance.now()})),e.t0){const d=Math.min(1,(performance.now()-e.t0)/rt);e.shown=e.from+(e.to-e.from)*(1-(1-d)**3),d>=1&&Object.assign(e,{shown:e.to,t0:0})}}function A(t){const e=i.jp;if(!s.on()||e.shown==null)return"";const n=t&&e.base!=null?e.to-e.base:0,o=n>=(e.unit==="usd"?.005:.5)?`<em class="bjup">+${e.unit==="usd"?Z(n):l(Math.round(n))}</em>`:"",a=s.wholeJackpot(),r=!t&&e.unit==="usd"&&a!=null?`<small class="bjh">${l(a)} HORSKE</small>`:"";return`<div class="bjack${t?" card":""}${e.t0?" up":""}"><span class="bjl"><i class="coin"></i>Jackpot</span><b class="bjv">${g(C(e.shown))}</b>${o}${r}</div>`}function pt(){const t=M(),e=t.s,n=e.toast&&b.nowMs-e.toast.at<5e3?e.toast:null,o=n?t.on?String(n.text).replace(/^Error: /,""):n.text:"",a=n?`<div class="btoast${n.ok===!1?" bad":""}" role="status">${g(o)}</div>`:"",r=t.on&&s.state.waiting?"Waiting for the house":null,d=e.busy?`<div class="bwait"><span></span><b>${g(r||wt[e.busy]||"Working")}…</b></div>`:"",x=t.on?s.state.bout:null,m=x&&E[x.stage]?`<div class="bchain" role="status"><span></span><b>${g(r?`${r}…`:E[x.stage])}</b></div>`:"";return m&&e.phase!=="armory"&&e.phase!=="end"?m:t.on&&s.state.pendingDone&&(e.phase==="armory"||e.phase==="end")?`${ot()}${a}`:e.phase==="end"&&e.bout&&e.bout.gamba?`${it(t)}${a}${d}`:e.phase==="end"?`<section class="bend wait" aria-labelledby="btitle"><div class="brib"><span id="btitle">Bout over</span></div>
      <p class="bdet">The Joust Arena takes bets for now.</p><div class="bacts one">${f("Back to the bets","change","","red")}</div></section>${a}${d}`:e.phase!=="armory"?"":`<section class="bpanel" aria-labelledby="bh">
        <header class="bhead"><button class="bback" data-act="village">‹ Kingdom</button><h1 id="bh">Joust Arena</h1>${et(t)}</header>
        ${A(!1)}
        <nav class="btabs" role="tablist">${[["bet","Bet"],["board","Board"]].map(([c,p])=>`<button role="tab" aria-selected="${i.tab===c}" class="${i.tab===c?"on":""}" data-act="tab" data-k="${c}">${p}</button>`).join("")}</nav>
        ${i.tab==="board"?st(t):nt(t)}
        ${d}
      </section>${a}`}let W=0;function bt(t){var n,o;if(!s.on()||t.phase!=="end"||!((n=t.bout)!=null&&n.pending)||!((o=t.gamba)!=null&&o.id)||t.gamba.result||Date.now()-W<2e4)return;W=Date.now();const e=t.gamba.id;s.refundable(e).then(a=>{i.refund=a?{id:e,...a,seenAt:Date.now()}:null,R()},()=>{})}let L="";function G(){var o,a,r,d;const t=$.state;bt(t),lt(t),dt(t);const e=i.jp.shown==null?"":`${C(i.jp.shown)}:${i.jp.t0?1:0}:${i.jp.base??""}`,n=[t.phase,(o=t.econ)==null?void 0:o.at,t.busy,(a=t.toast)==null?void 0:a.at,t.toast&&b.nowMs-t.toast.at<5e3,v==null?void 0:v.view().bonus,(r=t.bout)==null?void 0:r.pending,(d=t.bout)==null?void 0:d.win,i.v,s.state.v,s.on()?s.holdLeft():0,e].join("|");n!==L&&(L=n,ut(j,`<div id="wbet">${pt()}</div>`)),requestAnimationFrame(G)}requestAnimationFrame(G),j.addEventListener("click",t=>{const e=t.target.closest("[data-act]");if(!e||!j.contains(e)||e.disabled)return;const n=M(),o=e.dataset.act,a=n.s;if(o==="village"){location.assign(tt);return}if(o==="tab"){i.tab=e.dataset.k,R();return}if(o==="sort"){i.sort=e.dataset.k,R();return}if(o==="stake"){i.amount=+e.dataset.v,e.dataset.usd&&(i.usd=+e.dataset.usd),R();return}if(o==="bet"){a.busy||z("gambaBet",{gambaBet:{rider:S,amount:i.amount}});return}if(o==="again"){const r=a.bout||{};a.busy||z("gambaBet",{gambaBet:{rider:S,amount:n.list?i.amount:r.amount||i.amount}});return}if(o==="change"){z("toArmory");return}if(o==="faucet"){z("faucet");return}if(o==="cconnect"){s.connect().catch(()=>{});return}if(o==="cnetwork"){s.switchNetwork().catch(()=>{});return}if(o==="csignin"){s.signIn().catch(()=>{});return}if(o==="cfaucet"){s.faucet().catch(()=>{});return}if(o==="capprove"){s.approve().catch(()=>{});return}if(o==="crefresh"){s.refreshNow().catch(()=>{});return}if(o==="cpending"){s.finishPending().catch(()=>{});return}if(o==="cpdone"){s.clearPendingDone(),a.phase==="end"&&z("toArmory");return}if(o==="check"){a.gamba&&a.gamba.id&&!a.gamba.result&&!a.busy&&z("gambaBet",{gambaBet:{rider:S,amount:a.gamba.amount||i.amount}});return}if(o==="crefund"){const r=a.gamba&&a.gamba.id;r&&s.refund(r).then(()=>{const d=$.state.gamba;d&&d.id===r&&!d.result&&!$.state.busy&&z("gambaBet",{gambaBet:{rider:S,amount:d.amount||i.amount}})},()=>{});return}}),j.addEventListener("keydown",t=>{(t.key==="Enter"||t.key===" ")&&t.target.closest("button, a, select")&&t.stopPropagation()})}export{jt as startBet};

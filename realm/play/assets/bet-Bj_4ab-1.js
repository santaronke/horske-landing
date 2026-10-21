import{m as ft}from"./morphdom-esm-DUuvMkUq.js";import{S as A,A as F,v as p,x as mt,g as wt,I as vt}from"./main-DJKpijn0.js";import{g as $t,E as S}from"./chain-B9dRIyy0.js";import{m as kt}from"./houseQuests-Be0Scrd-.js";import{m as X,r as yt,d as jt,o as zt,t as St,s as Bt,a as Tt,p as Rt,e as Et}from"./view-B_w9TCd3.js";const Ht=`/* The Lists' betting panel and result card (src/bet/bet.js) as a wooden board in the style of the site's header bar
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
/* the Activity tab (20/10, Horske Racing's stats and recent activities): the wallet's numbers, then the newest jousts */
.bstats{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.bstats div{display:flex;flex-direction:column;align-items:center;gap:3px;padding:8px 4px;border-radius:8px;background:var(--well);box-shadow:inset 0 0 0 2px var(--wellring)}
.bstats small{font-weight:700;font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--gold)}
.bstats b{font-family:var(--gothic);font-weight:900;font-size:22px;line-height:1;color:var(--cream);white-space:nowrap}
.bstats b.up{color:var(--win)}.bstats b.down{color:var(--lose)}
.bhint.bnone{margin:4px 0 0;text-align:left}
.bacthead{display:flex;align-items:center;justify-content:space-between;gap:10px}
.bacthead .bsort{margin:12px 0 8px;flex:none}
.bacthead .bsort button{min-height:30px;padding:0 12px;font-size:13px}
.bacthead .bsort button:disabled{opacity:.45;cursor:default}
.bfeed{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:6px}
.bfeed a{display:flex;align-items:center;gap:10px;min-height:48px;padding:6px 10px;border-radius:8px;background:var(--well);box-shadow:inset 0 0 0 2px var(--wellring);color:var(--cream);text-decoration:none}
.bfeed a:hover{box-shadow:inset 0 0 0 2px var(--gold2)}
.bfl{flex:1;min-width:0;display:flex;flex-direction:column}
.bfl b{font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.bfl small{font-size:12px;color:var(--muted)}
.bfres{font-weight:700;font-size:15px;white-space:nowrap}
.bfres.won{color:var(--win)}.bfres.lost{color:var(--lose)}.bfres.refunded,.bfres.open{color:var(--muted)}
.bfago{width:30px;text-align:right;font-size:12px;color:var(--muted)}
.ball{margin:14px 0 0;width:100%}
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
`,Q="https://app.roninchain.com/swap?outputCurrency=0xc0Ca45c2e9448D3876Ca86220B2418C719298396",V=[100,1e3,1e4,1e5],E="free",Ot={gambaBet:"Placing your bet",gambaSettle:"The judges decide",sync:"Updating",faucet:"Adding test HORSKE"},At="https://wallet.roninchain.com",Kt={nowallet:["Install the Ronin Wallet to bet on the Saigon testnet.","wallet"],nohouse:["The house's address is missing: open the test link the team sent.",""],connect:["Bet with your Ronin Wallet on the Saigon testnet.","cconnect:Connect wallet"],network:["Your wallet is on another network.","cnetwork:Switch to Saigon"],signin:["Sign in so the house can make your bets. This signs no transaction.","csignin:Sign in"],loading:["Reading your purse…",""],faucet:["You need test HORSKE: 1,000,000, free once an hour.","cfaucet:Get test HORSKE"],approve:["Once: let the arena take your bets from your test HORSKE.","capprove:Allow the arena"]},K={signin:"Sign in with your wallet to finish the bet",offer:"The house signs your bet…",confirm:"Confirm your bet in the wallet",placing:"Your bet is on its way…",settling:"The judges reveal the draw…"},b=g=>String(g??"").replace(/[&<>"]/g,k=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[k]),Yt=g=>g?vt(g)||g:"",N=g=>`${(Math.round((g||0)*1e4)/100).toFixed(2)}%`,B=g=>`${+(Math.round((g||0)*1e4)/100).toFixed(2)}%`,Z=g=>`${g>0?"+":g<0?"−":""}${p(Math.abs(g))}`,tt=g=>`${Math.floor(g/60)}:${String(g%60).padStart(2,"0")}`,$=g=>g<1?g.toFixed(2):String(+g.toFixed(2));var et;const Mt="stats.html"+(new URLSearchParams(((et=globalThis.location)==null?void 0:et.search)??"").get("chain")==="dev"?"?chain=dev":"");function _t({room:g,player:k,village:nt,quests:v}){var G;const y=A.gamba,i=$t(),s={tab:"bet",sort:"wagered",amount:null,usd:1,v:0,jp:{unit:null,shown:null,from:0,to:0,t0:0,base:null},act:{who:"all",list:null,mine:null,to:null,head:null,at:0,busy:!1,err:null,seen:null}},j=i.on()?kt(i):null;i.on()&&(i.restore().catch(()=>{}),v==null||v.useBonus(!1)),document.head.insertAdjacentHTML("beforeend",`<style id="web-bet">${Ht}</style>`);const T=document.createElement("div");T.id="wbet",document.body.appendChild(T);const z=(t,e)=>window.sendAction(t,e),R=()=>{s.v++};function D(){const t=k.state,e=t.econ||null,n=i.on(),a=i.state,o=n&&Array.isArray(a.stakes)?a.stakes:null;o&&a.maxBet!=null&&(A.gamba.maxBet=Math.max(A.gamba.maxBet,Number(a.maxBet/S))),s.amount==null&&(s.amount=t.gambaPick&&t.gambaPick.amount||1e3);const r=n?a.balance==null?null:i.wholeBalance():e?e.horske:null,d=n&&a.minBet!=null?Number(a.minBet/S):0,x=n&&a.maxBet!=null?Math.min(F(),Number(a.maxBet/S)):F(),f=o??V.map(c=>({usd:null,amount:c})),u=f.filter(c=>c.amount>=d&&c.amount<=x&&(r==null||c.amount<=r)).map(c=>c.amount);if(o){const c=o.filter(h=>u.includes(h.amount)).map(h=>h.usd);c.length&&!c.includes(s.usd)&&(s.usd=c[c.length-1]),s.amount=(o.find(h=>h.usd===s.usd)||o[0]).amount}else u.length&&!u.includes(s.amount)&&(s.amount=u[u.length-1]);return{s:t,ec:e,coins:r,fits:u,all:f,list:o,lo:d,qv:v?v.view():null,on:n,step:n?i.step():"off"}}const w=(t,e,n="",a="gold",o="")=>`<button class="bbtn ${a}" data-act="${e}" ${n}>${t}${o?`<small>${o}</small>`:""}</button>`,at=t=>`<span class="bchipc"><i class="coin"></i>${t.coins==null?"…":p(t.coins)}</span>`,C=(t,e)=>`<div class="bshort"><p>You have ${p(t.coins||0)} HORSKE${e?`, and this bet takes ${p(e)}`:""}.</p>
    <div class="brow"><a class="bbtn gold" href="${Q}" target="_blank" rel="noopener">Buy $HORSKE<small>on Ronin ↗</small></a>${t.s.tools?w(`+${p(A.faucet)} test HORSKE`,"faucet","","dark"):""}</div></div>`;function L(t){var u,c;const e=i.state,[n,a]=Kt[t.step]||["…",""],[o,r]=a.split(":"),d=e.busy?'<p class="bhint">Waiting for your wallet…</p>':a==="wallet"?`<a class="bbtn gold" href="${At}" target="_blank" rel="noopener">Get Ronin Wallet<small>wallet.roninchain.com ↗</small></a>`:o?w(r,o):t.step==="loading"&&(((u=e.error)==null?void 0:u.code)==="purse"||((c=e.error)==null?void 0:c.code)==="stakes")?w("Try again","crefresh"):"",x=e.error?`<p class="bhint bbad">${b(e.error.message)}</p>`:"",f=e.address?`<p class="bhint">${b(e.address.slice(0,6)+"…"+e.address.slice(-4))} · Saigon</p>`:"";return`<div class="bbody bchainstep"><p class="bq">Saigon test</p><p class="bhint">${b(n)}</p>${d}${x}${f}</div>`}function ot(t){if(t.on&&t.step==="pending")return rt(t);if(t.on&&t.step!=="ready")return L(t);const e=mt(E).cap,n=t.qv,a=t.all.map(h=>{const l=h.amount,m=s.amount===l,H=h.usd!=null?`$${$(h.usd)}`:p(l),O=h.usd!=null?`$${$(h.usd*y.payout)}`:p(l*y.payout);return`<button class="bstake${m?" on":""}" data-act="stake" data-v="${l}" data-usd="${h.usd??""}" aria-pressed="${m}"${t.fits.includes(l)?"":" disabled"}><small>Bet</small><b>${H}</b><em>win ${O}</em></button>`}).join(""),o=n?n.bonus>0?`<p class="bhint bextra">Tavern quests and your Ronke Score add +${B(n.bonus)}.</p>`:`<p class="bhint bextra">Do the Tavern's quests to raise it.</p>`:"",r=(i.state.baseBps??4300)/1e4,d=j?j.view():null,x=d?j.chance():null,f=t.on?x?`<p class="bhint">Your chance: ${B(x.lo)} plus the bar, up to ${B(x.hi)}. Hit the bar on each pass to raise it.</p><p class="bhint bextra">${x.extra>0?`Tavern quests and your Ronke Score add +${B(x.extra)}: the house signs it into your bet.`:"Do the Tavern's quests to raise it."}</p>`:`<p class="bhint">Your chance: ${B(r)} plus the bar, up to ${B(r+wt())}. Hit the bar on each pass to raise it.</p><p class="bhint bextra">The Tavern's quests and your Ronke Score add up to +3% once you sign in.</p>`:`<p class="bhint">Your chance: up to ${B(e)}. Hit the bar on each pass to raise it.</p>${o}`,u=t.on?i.holdLeft():0,c=t.coins==null?'<p class="bhint">Opening your purse…</p>':u>0&&t.fits.length?`<button class="bgo" data-act="bet" disabled><b>Bet again in ${tt(u)}</b><small>your last bets' offers are still open on the chain</small></button>${f}`:t.fits.length&&t.list?`<button class="bgo" data-act="bet"><b>Bet $${$(s.usd)}</b><small>${p(s.amount)} HORSKE · to win $${$(s.usd*y.payout)}</small></button>${f}`:t.fits.length?`<button class="bgo" data-act="bet"><b>Bet ${p(s.amount)}</b><small>to win ${p(s.amount*y.payout)}</small></button>${f}`:t.on?L({...t,step:"faucet"}):C(t,V[0]);return`<div class="bbody"><p class="bq">Your bet</p><div class="bstakes" role="group" aria-label="Your bet">${a}</div>${c}</div>`}function st(t){const e=s.act,n=i.state.address;if(e.err==="soon")return`<div class="bbody bact"><p class="bhint">The jousts' record comes with the house's next update.</p></div>`;const a=l=>[["Jousts",String(l.bouts)],["Won",String(l.won)],["Lost",String(l.lost)],["Win rate",yt(l.winRate)],["Streak",l.streak?`${l.streak.n} ${l.streak.kind}`:"—"],["Net",jt(l.netUsd)]],o=n?e.mine?`<div class="bstats">${a(e.mine).map(([l,m])=>`<div><small>${l}</small><b class="${l==="Net"?e.mine.netUsd>0?"up":e.mine.netUsd<0?"down":"":""}">${b(m)}</b></div>`).join("")}</div>`:'<p class="bhint bnone">Reading your jousts…</p>':'<p class="bhint bnone">Connect your wallet to see your jousts.</p>',r=[["all","Everyone"],["me","You"]].map(([l,m])=>`<button class="${e.who===l?"on":""}" data-act="actwho" data-k="${l}" aria-pressed="${e.who===l}"${l==="me"&&!n?" disabled":""}>${m}</button>`).join(""),d=Math.floor(Date.now()/1e3),x=n?n.toLowerCase():null,f=l=>{const m=zt(l);return`<li><a href="${b(St(l,i.cfg.explorer))}" target="_blank" rel="noopener"><span class="bfl"><b>${b(Bt(l.player))}${l.player===x?" · you":""}</b><small>${b(Tt(l))} · ${Rt(l.chanceBps)}</small></span><span class="bfres ${m.kind}">${b(m.text)}</span><span class="bfago">${Et(l.placedAt,d)}</span></a></li>`},u=e.list==null?`<p class="bhint bnone">Reading the house's record…</p>`:e.list.length?`<ol class="bfeed">${e.list.map(f).join("")}</ol>`:`<p class="bempty">${e.who==="me"?"No jousts of yours yet.":"No jousts yet."}</p>`,c=e.to!=null&&e.head!=null&&e.head-e.to>60?`<p class="bhint">The house is still reading the arena's history.</p>`:"",h=e.err?`<p class="bhint bbad">${b(e.err)}</p>`:"";return`<div class="bbody bact"><p class="bq">Your jousts</p>${o}<div class="bacthead"><p class="bq">Recent</p><span class="bsort" role="group" aria-label="Whose jousts">${r}</span></div>${u}${c}${h}
      <a class="bbtn dark ball" href="${Mt}">All jousts &amp; stats</a></div>`}function it(t){var o;const e=i.on()?i.record():null;if(!e||s.tab!=="activity"||t.phase!=="armory"||document.hidden||s.act.busy)return;const n=((o=i.state.bout)==null?void 0:o.stage)==="done"?i.state.bout.localId:null;if(n!==s.act.seen&&Object.assign(s.act,{seen:n,at:0}),Date.now()-s.act.at<15e3)return;const a=i.state.address;Object.assign(s.act,{busy:!0,at:Date.now()}),Promise.all([e.bouts({limit:8,player:s.act.who==="me"&&a?a:void 0}),a?e.stats({player:a}):null]).then(([r,d])=>Object.assign(s.act,{list:r.bouts,to:r.to,head:r.head,mine:(d==null?void 0:d.player)??null,err:null}),r=>Object.assign(s.act,{err:(r==null?void 0:r.code)==="no_record"||(r==null?void 0:r.status)===404?"soon":(r==null?void 0:r.message)||"The house did not answer"})).finally(()=>{s.act.busy=!1,R()})}function rt(t){var h;const e=i.state,n=e.pending;if(!n)return"";const a=Number(n.amount/S),o=(e.baseBps??4300)/1e4+n.barBps/1e4,r=n.usd!=null?`$${$(n.usd)} · ${p(a)} HORSKE`:`${p(a)} HORSKE`,d=n.usd!=null?`$${$(n.usd*y.payout)}`:p(a*y.payout),x=e.busy==="pending"?e.waiting?"Waiting for the house…":K[(h=e.bout)==null?void 0:h.stage]||"Waiting for your wallet…":null,f=i.ridingElsewhere(n.joustId),u=x?`<p class="bhint">${b(x)}</p>`:f?'<p class="bhint">This bet is being ridden in another tab: finish it there.</p>':t.coins!=null&&t.coins<a?`<p class="bhint">You need ${p(a)} HORSKE to sign it.</p><div class="brow"><a class="bbtn gold" href="${Q}" target="_blank" rel="noopener">Buy $HORSKE<small>on Ronin ↗</small></a>${i.cfg.chainId!==2020?w("Get test HORSKE","cfaucet","","dark"):""}</div>${n.offered?w("Sign the bet","cpending","","dark","if it already went out, its result"):""}`:w("Sign the bet","cpending","","gold",`to win ${d}`),c=e.error&&e.busy==null?`<p class="bhint bbad">${b(e.error.message)}</p>`:"";return`<div class="bbody bchainstep"><p class="bq">Your pending bet</p>
      <p class="bhint">This bet was not signed. Sign it to keep betting: the same stake, and the bar your taps earned.</p>
      <p class="bdet">${r} · chance ${N(o)}</p>${u}${c}</div>`}function lt(){const t=i.state.pendingDone,e=t.refunded?"wait":t.won?"win":"loss",n=t.refunded?"Bet refunded":t.won?"You win!":"The house wins",a=t.refunded?p(t.amount):t.won?`+${p(Number(BigInt(t.payout??0)/S))}`:`−${p(t.amount)}`,o=t.txHash?`<a class="blink" href="${i.cfg.explorer}/tx/${b(t.txHash)}" target="_blank" rel="noopener">See the draw on Saigon ↗</a>`:"";return`<section class="bend ${e}" aria-labelledby="btitle"><div class="brib"><span id="btitle">${n}</span></div>
      <div class="bres"><span class="bwho"><small>Your pending bet</small><b>The House</b></span>
        <span class="bbig"><small>Result</small><b>${a}</b></span></div>${M(!0)}
      <p class="bdet">Bet ${p(t.amount)} · chance ${N(t.chance)}</p>
      <div class="bacts one">${w("Back to the bets","cpdone","","red")}</div>${o}</section>`}function dt(t){const e=k.userId,n=t.ec&&t.ec.glb||[],a=y.lbMinBets,o=t.ec&&t.ec.gme||{bets:0},r=t.ec&&t.ec.house||{bets:0,wagered:0,paid:0},d=n.slice().sort((l,m)=>m.net-l.net),x=s.sort==="net"?d:n,f=n.findIndex(l=>l.id===e)+1,u=d.findIndex(l=>l.id===e)+1,c=o.bets>=a&&f?`You are #${f} by volume and #${u} by profit.`:`${Math.max(0,a-o.bets)} more bet${a-o.bets===1?"":"s"} this season to enter the board.`,h=x.slice(0,20).map((l,m)=>`<li class="${l.id===e?"me":""}"><b class="brank">${m+1}</b><span class="bname"><b>${b(l.name||"Knight")}</b><small>${p(l.bets)} bets · ${s.sort==="wagered"?`net ${Z(l.net)}`:`${p(l.wagered)} wagered`}</small></span>
      <b class="bval${s.sort==="net"?l.net>0?" up":l.net<0?" down":"":""}">${s.sort==="wagered"?p(l.wagered):Z(l.net)}</b></li>`).join("");return`<div class="bbody">
        <div class="bsort" role="group" aria-label="Order">${[["wagered","By volume"],["net","By profit"]].map(([l,m])=>`<button class="${s.sort===l?"on":""}" data-act="sort" data-k="${l}" aria-pressed="${s.sort===l}">${m}</button>`).join("")}</div>
        ${h?`<ol class="blist">${h}</ol>`:`<p class="bempty">Nobody has ${a} settled bets this season yet.</p>`}
        <p class="bhouse">${c} The board counts knights with ${a} or more settled bets this season.</p>
        <p class="bhouse">${r.bets?`This season: ${p(r.bets)} bet${r.bets===1?"":"s"} · ${p(r.wagered)} wagered · paid out ${p(r.paid)}`:"No bets this season yet."}</p></div>`}function pt(t){var H,O,J;const e=t.s,n=e.bout||{},a=e.vs||{},o=t.on&&n.pending?i.state.cancelled:null;if(o&&i.state.pending)return`<section class="bend wait" aria-labelledby="btitle"><div class="brib"><span id="btitle">Bet waiting</span></div>
        <p class="bdet">${b(o.message||"The bet did not reach the chain")}. Nothing was spent, and the bet waits for your signature: sign it to keep betting.</p>
        <div class="bacts">${i.state.busy==="pending"?`<p class="bhint">${b(K[(H=i.state.bout)==null?void 0:H.stage]||"Waiting for your wallet…")}</p>`:t.coins!=null&&t.coins<Number(i.state.pending.amount/S)&&!i.state.pending.offered?`<p class="bhint">You need ${p(Number(i.state.pending.amount/S))} HORSKE to sign it.</p>`:w("Sign the bet","cpending","","red")}${w("Back to the bets","change","","dark")}</div>
        ${i.state.error&&i.state.busy==null?`<p class="bdet bbad">${b(i.state.error.message)}</p>`:""}
        <button class="blink" data-act="village">Back to the kingdom</button></section>`;if(o){const U=i.holdLeft(),xt=U>0?`<button class="bbtn red" data-act="again" disabled>Bet again in ${tt(U)}<small>your last offers are still open</small></button>`:w("Bet again","again","","red",t.list?`$${$(s.usd)}`:`${p(((O=e.gambaPick)==null?void 0:O.amount)||s.amount)} HORSKE`);return`<section class="bend wait" aria-labelledby="btitle"><div class="brib"><span id="btitle">Bet cancelled</span></div>
        <p class="bdet">${b(o.message||"The bet did not reach the chain")}.${o.code==="lost"||o.code==="refunded"?"":" Nothing was spent."}</p>
        <div class="bacts">${xt}${w("Change the bet","change","","dark")}</div>
        <button class="blink" data-act="village">Back to the kingdom</button></section>`}const r=t.on&&((J=i.state.bout)==null?void 0:J.stage)==="done"?i.state.bout.result:null,d=r!=null&&r.txHash?`<a class="blink" href="${i.cfg.explorer}/tx/${b(r.txHash)}" target="_blank" rel="noopener">See the draw on Saigon ↗</a>`:"",x=n.pending?"wait":n.win?"win":"loss",f=n.pending?"Settling…":n.win?"You win!":"The house wins",u=n.pending?p(n.amount):n.win?`+${p(n.payout)}`:`−${p(n.amount)}`,c=n.pending?"Bet against":n.win?"Beat":"Lost to",h=t.on&&n.pending&&e.gamba&&e.gamba.id&&!e.gamba.result,l=h&&s.refund&&s.refund.id===e.gamba.id&&s.refund.now+(Date.now()-s.refund.seenAt)/1e3>=s.refund.at?w("Get your HORSKE back","crefund","","gold","not settled in time"):"",m=h?`${w("Check the result","check","","red",t.step==="ready"?"the chain settles it":"connect your wallet first")}${l}`:t.coins==null||t.coins>=(n.amount||0)?w("Bet again","again","","red",t.list?`$${$(s.usd)}`:`${p(n.amount)} HORSKE`):C(t,n.amount);return`<section class="bend ${x}" aria-labelledby="btitle">
      <div class="brib"><span id="btitle">${f}</span></div>
      <div class="bres"><span class="bpor" style="background-image:url(${Yt(a.portrait)});background-color:${b(a.color||"#888")}"></span>
        <span class="bwho"><small>${c}</small><b>${b(n.rival||a.name||"The House")}</b></span>
        <span class="bbig"><small>${n.pending?"Bet":"Result"}</small><b>${u}</b></span></div>${t.on?M(!0):""}
      <p class="bdet">Bet ${p(n.amount)} · chance ${N(n.chance)}${n.pending?t.on?t.step==="ready"?" · the chain settles it: check the result in a moment":" · connect your wallet, then check the result":" · the bank settles it on your next visit":""}</p>${h&&i.state.error&&i.state.busy==null?`<p class="bdet bbad">${b(i.state.error.message)}</p>`:""}
      <div class="bacts">${m}${w("Change the bet","change","","dark")}</div>${d}
      <button class="blink" data-act="village">Back to the kingdom</button>
    </section>`}const ct=900,Y=(G=globalThis.matchMedia)==null?void 0:G.call(globalThis,"(prefers-reduced-motion: reduce)"),W=t=>s.jp.unit==="usd"?X(t):`${p(Math.round(t))} HORSKE`;let _=0;function bt(t){!i.on()||t.phase!=="armory"&&t.phase!=="end"||document.hidden||Date.now()-_<3e4||(_=Date.now(),i.loadJackpot().catch(()=>{}))}function ut(t){const e=s.jp,n=i.jackpotUsd(),a=i.wholeJackpot(),o=n!=null?{unit:"usd",v:n}:a!=null?{unit:"horske",v:a}:null;if(!o||!i.on()||t.phase!=="armory"&&t.phase!=="end")return;if((e.shown==null||e.unit!==o.unit)&&Object.assign(e,{unit:o.unit,shown:o.v,from:o.v,to:o.v,t0:0,base:null}),t.phase==="end"||!!i.state.pendingDone?e.base==null&&(e.base=e.shown):e.base=null,o.v!==e.to&&(o.v<e.shown||Y!=null&&Y.matches?Object.assign(e,{shown:o.v,from:o.v,to:o.v,t0:0}):Object.assign(e,{from:e.shown,to:o.v,t0:performance.now()})),e.t0){const d=Math.min(1,(performance.now()-e.t0)/ct);e.shown=e.from+(e.to-e.from)*(1-(1-d)**3),d>=1&&Object.assign(e,{shown:e.to,t0:0})}}function M(t){const e=s.jp;if(!i.on()||e.shown==null)return"";const n=t&&e.base!=null?e.to-e.base:0,a=n>=(e.unit==="usd"?.005:.5)?`<em class="bjup">+${e.unit==="usd"?X(n):p(Math.round(n))}</em>`:"",o=i.wholeJackpot(),r=!t&&e.unit==="usd"&&o!=null?`<small class="bjh">${p(o)} HORSKE</small>`:"";return`<div class="bjack${t?" card":""}${e.t0?" up":""}"><span class="bjl"><i class="coin"></i>Jackpot</span><b class="bjv">${b(W(e.shown))}</b>${a}${r}</div>`}function ht(){const t=D(),e=t.s,n=e.toast&&g.nowMs-e.toast.at<5e3?e.toast:null,a=n?t.on?String(n.text).replace(/^Error: /,""):n.text:"",o=n?`<div class="btoast${n.ok===!1?" bad":""}" role="status">${b(a)}</div>`:"",r=t.on&&i.state.waiting?"Waiting for the house":null,d=e.busy?`<div class="bwait"><span></span><b>${b(r||Ot[e.busy]||"Working")}…</b></div>`:"",x=t.on?i.state.bout:null,f=x&&K[x.stage]?`<div class="bchain" role="status"><span></span><b>${b(r?`${r}…`:K[x.stage])}</b></div>`:"";return f&&e.phase!=="armory"&&e.phase!=="end"?f:t.on&&i.state.pendingDone&&(e.phase==="armory"||e.phase==="end")?`${lt()}${o}`:e.phase==="end"&&e.bout&&e.bout.gamba?`${pt(t)}${o}${d}`:e.phase==="end"?`<section class="bend wait" aria-labelledby="btitle"><div class="brib"><span id="btitle">Bout over</span></div>
      <p class="bdet">The Joust Arena takes bets for now.</p><div class="bacts one">${w("Back to the bets","change","","red")}</div></section>${o}${d}`:e.phase!=="armory"?"":`<section class="bpanel" aria-labelledby="bh">
        <header class="bhead"><button class="bback" data-act="village">‹ Kingdom</button><h1 id="bh">Joust Arena</h1>${at(t)}</header>
        ${M(!1)}
        <nav class="btabs" role="tablist">${[["bet","Bet"],...t.on?[["activity","Activity"]]:[],["board","Board"]].map(([u,c])=>`<button role="tab" aria-selected="${s.tab===u}" class="${s.tab===u?"on":""}" data-act="tab" data-k="${u}">${c}</button>`).join("")}</nav>
        ${s.tab==="board"?dt(t):s.tab==="activity"&&t.on?st():ot(t)}
        ${d}
      </section>${o}`}let P=0;function gt(t){var n,a;if(!i.on()||t.phase!=="end"||!((n=t.bout)!=null&&n.pending)||!((a=t.gamba)!=null&&a.id)||t.gamba.result||Date.now()-P<2e4)return;P=Date.now();const e=t.gamba.id;i.refundable(e).then(o=>{s.refund=o?{id:e,...o,seenAt:Date.now()}:null,R()},()=>{})}let I="";function q(){var a,o,r,d;const t=k.state;gt(t),bt(t),ut(t),it(t);const e=s.jp.shown==null?"":`${W(s.jp.shown)}:${s.jp.t0?1:0}:${s.jp.base??""}`,n=[t.phase,(a=t.econ)==null?void 0:a.at,t.busy,(o=t.toast)==null?void 0:o.at,t.toast&&g.nowMs-t.toast.at<5e3,v==null?void 0:v.view().bonus,j?`${j.view()?j.chance().extra:"-"}:${j.state.v}`:"",(r=t.bout)==null?void 0:r.pending,(d=t.bout)==null?void 0:d.win,s.v,i.state.v,i.on()?i.holdLeft():0,e,s.tab==="activity"?Math.floor(Date.now()/3e4):0].join("|");n!==I&&(I=n,ft(T,`<div id="wbet">${ht()}</div>`)),requestAnimationFrame(q)}requestAnimationFrame(q),T.addEventListener("click",t=>{const e=t.target.closest("[data-act]");if(!e||!T.contains(e)||e.disabled)return;const n=D(),a=e.dataset.act,o=n.s;if(a==="village"){location.assign(nt);return}if(a==="tab"){s.tab=e.dataset.k,s.tab==="activity"&&(s.act.at=0),R();return}if(a==="actwho"){Object.assign(s.act,{who:e.dataset.k,list:null,at:0}),R();return}if(a==="sort"){s.sort=e.dataset.k,R();return}if(a==="stake"){s.amount=+e.dataset.v,e.dataset.usd&&(s.usd=+e.dataset.usd),R();return}if(a==="bet"){o.busy||z("gambaBet",{gambaBet:{rider:E,amount:s.amount}});return}if(a==="again"){const r=o.bout||{};o.busy||z("gambaBet",{gambaBet:{rider:E,amount:n.list?s.amount:r.amount||s.amount}});return}if(a==="change"){z("toArmory");return}if(a==="faucet"){z("faucet");return}if(a==="cconnect"){i.connect().catch(()=>{});return}if(a==="cnetwork"){i.switchNetwork().catch(()=>{});return}if(a==="csignin"){i.signIn().catch(()=>{});return}if(a==="cfaucet"){i.faucet().catch(()=>{});return}if(a==="capprove"){i.approve().catch(()=>{});return}if(a==="crefresh"){i.refreshNow().catch(()=>{});return}if(a==="cpending"){i.finishPending().catch(()=>{});return}if(a==="cpdone"){i.clearPendingDone(),o.phase==="end"&&z("toArmory");return}if(a==="check"){o.gamba&&o.gamba.id&&!o.gamba.result&&!o.busy&&z("gambaBet",{gambaBet:{rider:E,amount:o.gamba.amount||s.amount}});return}if(a==="crefund"){const r=o.gamba&&o.gamba.id;r&&i.refund(r).then(()=>{const d=k.state.gamba;d&&d.id===r&&!d.result&&!k.state.busy&&z("gambaBet",{gambaBet:{rider:E,amount:d.amount||s.amount}})},()=>{});return}}),T.addEventListener("keydown",t=>{(t.key==="Enter"||t.key===" ")&&t.target.closest("button, a, select")&&t.stopPropagation()})}export{_t as startBet};

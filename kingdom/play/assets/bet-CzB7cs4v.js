import{m as Et,g as At}from"./config-Ani7DI4g.js";import{S as Y,A as ot,v as p,x as Ot,g as Nt,I as Ht}from"./main-Bw7Z2Vb5.js";import{g as Yt,E}from"./chain-BAs_0RxS.js";import{m as Kt}from"./houseQuests-ML6tIqEr.js";import{m as K,s as st,r as Mt,d as L,o as _t,t as Ct,a as Dt,p as Lt,e as It}from"./view-B_w9TCd3.js";const Pt=`/* The Lists' betting panel and result card (src/bet/bet.js) as a wooden board in the style of the site's header bar
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
/* the name on the board (21/10): a box under the list, the house's (or the browser's) answer under it */
.bnamebox{margin:14px 0 0}
.bnamebox .bq{display:block}
.bnrow{display:flex;gap:8px;margin-top:6px}
.bnrow input{flex:1;min-width:0;min-height:40px;padding:0 12px;border:0;border-radius:8px;background:var(--well);box-shadow:inset 0 0 0 2px var(--wellring);color:var(--cream);font:inherit;font-size:15px}
.bnrow input::placeholder{color:var(--muted);opacity:.6}
.bnrow input:focus-visible{outline:3px solid var(--gold1);outline-offset:1px}
.bnrow .bbtn{flex:none;min-width:96px;min-height:40px}
.bhint.bok{color:var(--win)}
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
`,it=3,ut=16,Wt=/^[A-Za-z0-9À-ÖØ-öø-ÿ _-]+$/,qt=["house","thehouse","santa","ronke","mod","support","team","knight","you","kingdom","joust","jousting"],Ut=["horske","santaronke","ronkeverse","admin","moderator","official"],P=c=>String(c??"").normalize("NFC").trim().replace(/\s+/g," "),Gt=c=>P(c).normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[ _-]/g,"");function Jt(c){const w=P(c);if(w.length>ut)return"long";if(!Wt.test(w)&&w.length)return"chars";const O=Gt(w);return w.length<it||O.length<it?"short":qt.includes(O)||Ut.some(y=>O.includes(y))?"reserved":null}const rt={short:"A name has 3 to 16 characters.",long:"A name has 3 to 16 characters.",chars:"Letters, digits, spaces, _ and - only.",reserved:"That name is reserved.",taken:"That name is taken.",wait:"You changed your name a moment ago: try again in a minute."},lt="https://app.roninchain.com/swap?outputCurrency=0xc0Ca45c2e9448D3876Ca86220B2418C719298396",dt=[100,1e3,1e4,1e5],N=c=>{try{return st(At(c))}catch{return st(c)}},H="free",Ft={gambaBet:"Placing your bet",gambaSettle:"The judges decide",sync:"Updating",faucet:"Adding test HORSKE"},Xt="https://wallet.roninchain.com",Qt={nowallet:["Install the Ronin Wallet to bet on the Saigon testnet.","wallet"],nohouse:["The house's address is missing: open the test link the team sent.",""],connect:["Bet with your Ronin Wallet on the Saigon testnet.","cconnect:Connect wallet"],network:["Your wallet is on another network.","cnetwork:Switch to Saigon"],signin:["Sign in so the house can make your bets. This signs no transaction.","csignin:Sign in"],loading:["Reading your purse…",""],faucet:["You need test HORSKE: 1,000,000, free once an hour.","cfaucet:Get test HORSKE"],approve:["Once: let the arena take your bets from your test HORSKE.","capprove:Allow the arena"]},M={signin:"Sign in with your wallet to finish the bet",offer:"The house signs your bet…",confirm:"Confirm your bet in the wallet",placing:"Your bet is on its way…",settling:"The judges reveal the draw…"},u=c=>String(c??"").replace(/[&<>"]/g,w=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[w]),Vt=c=>c?Ht(c)||c:"",I=c=>`${(Math.round((c||0)*1e4)/100).toFixed(2)}%`,A=c=>`${+(Math.round((c||0)*1e4)/100).toFixed(2)}%`,pt=c=>`${c>0?"+":c<0?"−":""}${p(Math.abs(c))}`,bt=c=>`${Math.floor(c/60)}:${String(c%60).padStart(2,"0")}`,T=c=>c<1?c.toFixed(2):String(+c.toFixed(2));var ct;const Zt="stats.html"+(new URLSearchParams(((ct=globalThis.location)==null?void 0:ct.search)??"").get("chain")==="dev"?"?chain=dev":"");function se({room:c,player:w,village:O,quests:y}){var et;const R=Y.gamba,i=Yt(),o={tab:"bet",sort:"wagered",amount:null,usd:1,v:0,jp:{unit:null,shown:null,from:0,to:0,t0:0,base:null},act:{who:"all",list:null,mine:null,to:null,head:null,at:0,busy:!1,err:null,seen:null,names:{}},brd:{data:null,at:0,busy:!1,err:null,seen:null,who:null},nm:{text:null,busy:!1,msg:null,ok:!1}},j=i.on()?Kt(i):null;let W=0;i.on()&&(i.restore().catch(()=>{}),y==null||y.useBonus(0)),document.head.insertAdjacentHTML("beforeend",`<style id="web-bet">${Pt}</style>`);const S=document.createElement("div");S.id="wbet",document.body.appendChild(S);const z=(t,e)=>window.sendAction(t,e),k=()=>{o.v++};function _(){const t=w.state,e=t.econ||null,a=i.on(),s=i.state,n=a&&Array.isArray(s.stakes)?s.stakes:null;n&&s.maxBet!=null&&(Y.gamba.maxBet=Math.max(Y.gamba.maxBet,Number(s.maxBet/E))),o.amount==null&&(o.amount=t.gambaPick&&t.gambaPick.amount||1e3);const r=a?s.balance==null?null:i.wholeBalance():e?e.horske:null,d=a&&s.minBet!=null?Number(s.minBet/E):0,g=a&&s.maxBet!=null?Math.min(ot(),Number(s.maxBet/E)):ot(),b=n??dt.map(h=>({usd:null,amount:h})),x=b.filter(h=>h.amount>=d&&h.amount<=g&&(r==null||h.amount<=r)).map(h=>h.amount);if(n){const h=n.filter(m=>x.includes(m.amount)).map(m=>m.usd);h.length&&!h.includes(o.usd)&&(o.usd=h[h.length-1]),o.amount=(n.find(m=>m.usd===o.usd)||n[0]).amount}else x.length&&!x.includes(o.amount)&&(o.amount=x[x.length-1]);return{s:t,ec:e,coins:r,fits:x,all:b,list:n,lo:d,qv:y?y.view():null,on:a,step:a?i.step():"off"}}const v=(t,e,a="",s="gold",n="")=>`<button class="bbtn ${s}" data-act="${e}" ${a}>${t}${n?`<small>${n}</small>`:""}</button>`,ht=t=>`<span class="bchipc"><i class="coin"></i>${t.coins==null?"…":p(t.coins)}</span>`,q=(t,e)=>`<div class="bshort"><p>You have ${p(t.coins||0)} HORSKE${e?`, and this bet takes ${p(e)}`:""}.</p>
    <div class="brow"><a class="bbtn gold" href="${lt}" target="_blank" rel="noopener">Buy $HORSKE<small>on Ronin ↗</small></a>${t.s.tools?v(`+${p(Y.faucet)} test HORSKE`,"faucet","","dark"):""}</div></div>`;function U(t){var x,h;const e=i.state,[a,s]=Qt[t.step]||["…",""],[n,r]=s.split(":"),d=e.busy?'<p class="bhint">Waiting for your wallet…</p>':s==="wallet"?`<a class="bbtn gold" href="${Xt}" target="_blank" rel="noopener">Get Ronin Wallet<small>wallet.roninchain.com ↗</small></a>`:n?v(r,n):t.step==="loading"&&(((x=e.error)==null?void 0:x.code)==="purse"||((h=e.error)==null?void 0:h.code)==="stakes")?v("Try again","crefresh"):"",g=e.error?`<p class="bhint bbad">${u(e.error.message)}</p>`:"",b=e.address?`<p class="bhint">${u(e.address.slice(0,6)+"…"+e.address.slice(-4))} · Saigon</p>`:"";return`<div class="bbody bchainstep"><p class="bq">Saigon test</p><p class="bhint">${u(a)}</p>${d}${g}${b}</div>`}function gt(t){if(t.on&&t.step==="pending")return ft(t);if(t.on&&t.step!=="ready")return U(t);const e=Ot(H).cap,a=t.qv,s=t.all.map(m=>{const l=m.amount,$=o.amount===l,f=m.usd!=null?`$${T(m.usd)}`:p(l),B=m.usd!=null?`$${T(m.usd*R.payout)}`:p(l*R.payout);return`<button class="bstake${$?" on":""}" data-act="stake" data-v="${l}" data-usd="${m.usd??""}" aria-pressed="${$}"${t.fits.includes(l)?"":" disabled"}><small>Bet</small><b>${f}</b><em>win ${B}</em></button>`}).join(""),n=a?a.bonus>0?`<p class="bhint bextra">The Tavern's quests and your Ronke Score add +${A(a.bonus)}.</p>`:`<p class="bhint bextra">Do the Tavern's quests to raise it.</p>`:"",r=(i.state.baseBps??4300)/1e4,d=j?j.view():null,g=d?j.chance():null,b=t.on?g?`<p class="bhint">Your chance: ${A(g.lo)} plus the bar, up to ${A(g.hi)}. Hit the bar on each pass to raise it.</p><p class="bhint bextra">${g.extra>0?`The Tavern's quests and your Ronke Score add +${A(g.extra)}: the house signs it into your bet.`:"Do the Tavern's quests to raise it."}</p>`:`<p class="bhint">Your chance: ${A(r)} plus the bar, up to ${A(r+Nt())}. Hit the bar on each pass to raise it.</p><p class="bhint bextra">The Tavern's quests and your Ronke Score add up to +3% once you sign in.</p>`:`<p class="bhint">Your chance: up to ${A(e)}. Hit the bar on each pass to raise it.</p>${n}`,x=t.on?i.holdLeft():0,h=t.coins==null?'<p class="bhint">Opening your purse…</p>':x>0&&t.fits.length?`<button class="bgo" data-act="bet" disabled><b>Bet again in ${bt(x)}</b><small>your last bets' offers are still open on the chain</small></button>${b}`:t.fits.length&&t.list?`<button class="bgo" data-act="bet"><b>Bet $${T(o.usd)}</b><small>${p(o.amount)} HORSKE · to win $${T(o.usd*R.payout)}</small></button>${b}`:t.fits.length?`<button class="bgo" data-act="bet"><b>Bet ${p(o.amount)}</b><small>to win ${p(o.amount*R.payout)}</small></button>${b}`:t.on?U({...t,step:"faucet"}):q(t,dt[0]);return`<div class="bbody"><p class="bq">Your bet</p><div class="bstakes" role="group" aria-label="Your bet">${s}</div>${h}</div>`}function xt(t){const e=o.act,a=i.state.address;if(e.err==="soon")return`<div class="bbody bact"><p class="bhint">The jousts' record comes with the house's next update.</p></div>`;const s=l=>[["Jousts",String(l.bouts)],["Won",String(l.won)],["Lost",String(l.lost)],["Win rate",Mt(l.winRate)],["Streak",l.streak?`${l.streak.n} ${l.streak.kind}`:"—"],["Net",L(l.netUsd)]],n=a?e.mine?`<div class="bstats">${s(e.mine).map(([l,$])=>`<div><small>${l}</small><b class="${l==="Net"?e.mine.netUsd>0?"up":e.mine.netUsd<0?"down":"":""}">${u($)}</b></div>`).join("")}</div>`:'<p class="bhint bnone">Reading your jousts…</p>':'<p class="bhint bnone">Connect your wallet to see your jousts.</p>',r=[["all","Everyone"],["me","You"]].map(([l,$])=>`<button class="${e.who===l?"on":""}" data-act="actwho" data-k="${l}" aria-pressed="${e.who===l}"${l==="me"&&!a?" disabled":""}>${$}</button>`).join(""),d=Math.floor(Date.now()/1e3),g=a?a.toLowerCase():null,b=l=>{var f;const $=_t(l);return`<li><a href="${u(Ct(l,i.cfg.explorer))}" target="_blank" rel="noopener"><span class="bfl"><b>${u((f=e.names)!=null&&f[l.player]?`${e.names[l.player]} · ${N(l.player)}`:N(l.player))}${l.player===g?" · you":""}</b><small>${u(Dt(l))} · ${Lt(l.chanceBps)}</small></span><span class="bfres ${$.kind}">${u($.text)}</span><span class="bfago">${It(l.placedAt,d)}</span></a></li>`},x=e.list==null?`<p class="bhint bnone">Reading the house's record…</p>`:e.list.length?`<ol class="bfeed">${e.list.map(b).join("")}</ol>`:`<p class="bempty">${e.who==="me"?"No jousts of yours yet.":"No jousts yet."}</p>`,h=e.to!=null&&e.head!=null&&e.head-e.to>60?`<p class="bhint">The house is still reading the arena's history.</p>`:"",m=e.err?`<p class="bhint bbad">${u(e.err)}</p>`:"";return`<div class="bbody bact"><p class="bq">Your jousts</p>${n}<div class="bacthead"><p class="bq">Recent</p><span class="bsort" role="group" aria-label="Whose jousts">${r}</span></div>${x}${h}${m}
      <a class="bbtn dark ball" href="${Zt}">All jousts &amp; stats</a></div>`}function mt(t){var n;const e=i.on()?i.record():null;if(!e||o.tab!=="activity"||t.phase!=="armory"||document.hidden||o.act.busy)return;const a=((n=i.state.bout)==null?void 0:n.stage)==="done"?i.state.bout.localId:null;if(a!==o.act.seen&&Object.assign(o.act,{seen:a,at:0}),Date.now()-o.act.at<15e3)return;const s=i.state.address;Object.assign(o.act,{busy:!0,at:Date.now()}),Promise.all([e.bouts({limit:8,player:o.act.who==="me"&&s?s:void 0}),s?e.stats({player:s}):null]).then(([r,d])=>Object.assign(o.act,{list:r.bouts,to:r.to,head:r.head,mine:(d==null?void 0:d.player)??null,names:r.names||{},err:null}),r=>Object.assign(o.act,{err:(r==null?void 0:r.code)==="no_record"||(r==null?void 0:r.status)===404?"soon":(r==null?void 0:r.message)||"The house did not answer"})).finally(()=>{o.act.busy=!1,k()})}function ft(t){var m;const e=i.state,a=e.pending;if(!a)return"";const s=Number(a.amount/E),n=(e.baseBps??4300)/1e4+a.barBps/1e4,r=a.usd!=null?`$${T(a.usd)} · ${p(s)} HORSKE`:`${p(s)} HORSKE`,d=a.usd!=null?`$${T(a.usd*R.payout)}`:p(s*R.payout),g=e.busy==="pending"?e.waiting?"Waiting for the house…":M[(m=e.bout)==null?void 0:m.stage]||"Waiting for your wallet…":null,b=i.ridingElsewhere(a.joustId),x=g?`<p class="bhint">${u(g)}</p>`:b?'<p class="bhint">This bet is being ridden in another tab: finish it there.</p>':t.coins!=null&&t.coins<s?`<p class="bhint">You need ${p(s)} HORSKE to sign it.</p><div class="brow"><a class="bbtn gold" href="${lt}" target="_blank" rel="noopener">Buy $HORSKE<small>on Ronin ↗</small></a>${i.cfg.chainId!==2020?v("Get test HORSKE","cfaucet","","dark"):""}</div>${a.offered?v("Sign the bet","cpending","","dark","if it already went out, its result"):""}`:v("Sign the bet","cpending","","gold",`to win ${d}`),h=e.error&&e.busy==null?`<p class="bhint bbad">${u(e.error.message)}</p>`:"";return`<div class="bbody bchainstep"><p class="bq">Your pending bet</p>
      <p class="bhint">This bet was not signed. Sign it to keep betting: the same stake, and the bar your taps earned.</p>
      <p class="bdet">${r} · chance ${I(n)}</p>${x}${h}</div>`}function wt(){const t=i.state.pendingDone,e=t.refunded?"wait":t.won?"win":"loss",a=t.refunded?"Bet refunded":t.won?"You win!":"The house wins",s=t.refunded?p(t.amount):t.won?`+${p(Number(BigInt(t.payout??0)/E))}`:`−${p(t.amount)}`,n=t.txHash?`<a class="blink" href="${i.cfg.explorer}/tx/${u(t.txHash)}" target="_blank" rel="noopener">See the draw on Saigon ↗</a>`:"";return`<section class="bend ${e}" aria-labelledby="btitle"><div class="brib"><span id="btitle">${a}</span></div>
      <div class="bres"><span class="bwho"><small>Your pending bet</small><b>The House</b></span>
        <span class="bbig"><small>Result</small><b>${s}</b></span></div>${D(!0)}
      <p class="bdet">Bet ${p(t.amount)} · chance ${I(t.chance)}</p>
      <div class="bacts one">${v("Back to the bets","cpdone","","red")}</div>${n}</section>`}const G=()=>`<div class="bsort" role="group" aria-label="Order">${[["wagered","By volume"],["net","By profit"]].map(([t,e])=>`<button class="${o.sort===t?"on":""}" data-act="sort" data-k="${t}" aria-pressed="${o.sort===t}">${e}</button>`).join("")}</div>`;function J(t){const e=o.nm;return`<div class="bnamebox"><label class="bq" for="bnm">Your name on the board</label>
      <div class="bnrow"><input id="bnm" maxlength="${ut}" autocomplete="off" spellcheck="false" placeholder="3 to 16 letters or digits" value="${u(e.text??t??"")}"><button class="bbtn dark" data-act="bname"${e.busy?" disabled":""}>${e.busy?"Saving…":"Save"}</button></div>
      ${e.msg?`<p class="bhint ${e.ok?"bok":"bbad"}">${u(e.msg)}</p>`:""}</div>`}function vt(t){if(t.on)return $t();const e=w.userId,a=t.ec&&t.ec.glb||[],s=R.lbMinBets,n=t.ec&&t.ec.gme||{bets:0},r=t.ec&&t.ec.house||{bets:0,wagered:0,paid:0},d=a.slice().sort((f,B)=>B.net-f.net),g=o.sort==="net"?d:a,b=a.findIndex(f=>f.id===e)+1,x=d.findIndex(f=>f.id===e)+1,h=n.bets>=s&&b?`You are #${b} by volume and #${x} by profit.`:`${Math.max(0,s-n.bets)} more bet${s-n.bets===1?"":"s"} this season to enter the board.`,m=t.qv&&t.qv.wallet,l=g.slice(0,20).map((f,B)=>`<li class="${f.id===e?"me":""}"><b class="brank">${B+1}</b><span class="bname"><b>${u(f.name||"Knight")}</b><small>${f.id===e&&m?`${u(N(m))} · `:""}${p(f.bets)} bets · ${o.sort==="wagered"?`net ${pt(f.net)}`:`${p(f.wagered)} wagered`}</small></span>
      <b class="bval${o.sort==="net"?f.net>0?" up":f.net<0?" down":"":""}">${o.sort==="wagered"?p(f.wagered):pt(f.net)}</b></li>`).join(""),$=w.displayName&&w.displayName!=="Knight"?w.displayName:"";return`<div class="bbody">${G()}
        ${l?`<ol class="blist">${l}</ol>`:`<p class="bempty">Nobody has ${s} settled bets this season yet.</p>`}
        <p class="bhouse">${h} The board counts knights with ${s} or more settled bets this season.</p>
        <p class="bhouse">${r.bets?`This season: ${p(r.bets)} bet${r.bets===1?"":"s"} · ${p(r.wagered)} wagered · paid out ${p(r.paid)}`:"No bets this season yet."}</p>
        ${J($)}</div>`}function $t(){const t=o.brd,e=t.data,a=i.state.address?i.state.address.toLowerCase():null,s=e&&e.names||{},n=e?(o.sort==="net"?e.net:e.wagered)||[]:null,r=(b,x)=>{const h=s[b.player];return`<li class="${b.player===a?"me":""}"><b class="brank">${x+1}</b><span class="bname"><b>${u(h||N(b.player))}</b><small>${h?`${u(N(b.player))} · `:""}${p(b.bouts)} joust${b.bouts===1?"":"s"} · ${o.sort==="wagered"?`net ${L(b.netUsd)}`:`${K(b.wageredUsd)} wagered`}</small></span>
        <b class="bval${o.sort==="net"?b.netUsd>0?" up":b.netUsd<0?" down":"":""}">${o.sort==="wagered"?K(b.wageredUsd):L(b.netUsd)}</b></li>`},d=e?n.length?`<ol class="blist">${n.map(r).join("")}</ol>`:'<p class="bempty">No settled jousts yet.</p>':`<p class="bhint ${t.err?"bbad":"bnone"}">${u(t.err||"Reading the house's board…")}</p>`,g=a?e&&e.me?`You are #${e.me.byWagered} by volume and #${e.me.byNet} by profit.`:e?"Your first settled joust puts you on the board.":"":"Connect your wallet to see your place.";return`<div class="bbody">${G()}${d}<p class="bhouse">${g} Every wallet with a settled joust counts.</p>${a?J(s[a]||""):""}</div>`}function F(t){const e=S.querySelector("#bnm"),a=P(e?e.value:o.nm.text??""),s=a?Jt(a):null;if(s){Object.assign(o.nm,{msg:rt[s],ok:!1}),k();return}if(t.on){if(!i.state.address){Object.assign(o.nm,{msg:"Connect your wallet first.",ok:!1}),k();return}Object.assign(o.nm,{busy:!0,msg:null}),k(),i.houseQuests({signIn:!0,run:n=>n.setName(a)}).then(n=>{const r=i.state.address.toLowerCase();o.brd.data&&(o.brd.data.names={...o.brd.data.names,[r]:n.name}),Object.assign(o.nm,{text:null,msg:n.name?`Saved: ${n.name}.`:"Your name is off the board.",ok:!0}),o.brd.at=0},n=>Object.assign(o.nm,{msg:rt[n==null?void 0:n.code]||(n==null?void 0:n.message)||"The house did not answer.",ok:!1})).finally(()=>{o.nm.busy=!1,k()});return}try{a?localStorage.setItem("justa-web:name",JSON.stringify(a)):localStorage.removeItem("justa-web:name")}catch{}w.displayName=a||"Knight",z("sync"),Object.assign(o.nm,{text:null,msg:a?`Saved: ${a}.`:"Back to Knight.",ok:!0}),k()}function yt(){var s;const t=i.on()?i.record():null;if(!t||typeof t.board!="function"||o.tab!=="board"||document.hidden||o.brd.busy)return;const e=((s=i.state.bout)==null?void 0:s.stage)==="done"?i.state.bout.localId:null,a=i.state.address||null;(e!==o.brd.seen||a!==o.brd.who)&&Object.assign(o.brd,{seen:e,who:a,at:0}),!(Date.now()-o.brd.at<3e4)&&(Object.assign(o.brd,{busy:!0,at:Date.now()}),t.board({player:a||void 0,limit:20}).then(n=>Object.assign(o.brd,{data:n,err:null}),n=>Object.assign(o.brd,{err:(n==null?void 0:n.status)===404||(n==null?void 0:n.code)==="http_404"?"The board comes with the house's next update.":(n==null?void 0:n.message)||"The house did not answer"})).finally(()=>{o.brd.busy=!1,k()}))}function kt(t){var f,B,nt;const e=t.s,a=e.bout||{},s=e.vs||{},n=t.on&&a.pending?i.state.cancelled:null;if(n&&i.state.pending)return`<section class="bend wait" aria-labelledby="btitle"><div class="brib"><span id="btitle">Bet waiting</span></div>
        <p class="bdet">${u(n.message||"The bet did not reach the chain")}. Nothing was spent, and the bet waits for your signature: sign it to keep betting.</p>
        <div class="bacts">${i.state.busy==="pending"?`<p class="bhint">${u(M[(f=i.state.bout)==null?void 0:f.stage]||"Waiting for your wallet…")}</p>`:t.coins!=null&&t.coins<Number(i.state.pending.amount/E)&&!i.state.pending.offered?`<p class="bhint">You need ${p(Number(i.state.pending.amount/E))} HORSKE to sign it.</p>`:v("Sign the bet","cpending","","red")}${v("Back to the bets","change","","dark")}</div>
        ${i.state.error&&i.state.busy==null?`<p class="bdet bbad">${u(i.state.error.message)}</p>`:""}
        <button class="blink" data-act="village">Back to the kingdom</button></section>`;if(n){const at=i.holdLeft(),Rt=at>0?`<button class="bbtn red" data-act="again" disabled>Bet again in ${bt(at)}<small>your last offers are still open</small></button>`:v("Bet again","again","","red",t.list?`$${T(o.usd)}`:`${p(((B=e.gambaPick)==null?void 0:B.amount)||o.amount)} HORSKE`);return`<section class="bend wait" aria-labelledby="btitle"><div class="brib"><span id="btitle">Bet cancelled</span></div>
        <p class="bdet">${u(n.message||"The bet did not reach the chain")}.${n.code==="lost"||n.code==="refunded"?"":" Nothing was spent."}</p>
        <div class="bacts">${Rt}${v("Change the bet","change","","dark")}</div>
        <button class="blink" data-act="village">Back to the kingdom</button></section>`}const r=t.on&&((nt=i.state.bout)==null?void 0:nt.stage)==="done"?i.state.bout.result:null,d=r!=null&&r.txHash?`<a class="blink" href="${i.cfg.explorer}/tx/${u(r.txHash)}" target="_blank" rel="noopener">See the draw on Saigon ↗</a>`:"",g=a.pending?"wait":a.win?"win":"loss",b=a.pending?"Settling…":a.win?"You win!":"The house wins",x=a.pending?p(a.amount):a.win?`+${p(a.payout)}`:`−${p(a.amount)}`,h=a.pending?"Bet against":a.win?"Beat":"Lost to",m=t.on&&a.pending&&e.gamba&&e.gamba.id&&!e.gamba.result,l=m&&o.refund&&o.refund.id===e.gamba.id&&o.refund.now+(Date.now()-o.refund.seenAt)/1e3>=o.refund.at?v("Get your HORSKE back","crefund","","gold","not settled in time"):"",$=m?`${v("Check the result","check","","red",t.step==="ready"?"the chain settles it":"connect your wallet first")}${l}`:t.coins==null||t.coins>=(a.amount||0)?v("Bet again","again","","red",t.list?`$${T(o.usd)}`:`${p(a.amount)} HORSKE`):q(t,a.amount);return`<section class="bend ${g}" aria-labelledby="btitle">
      <div class="brib"><span id="btitle">${b}</span></div>
      <div class="bres"><span class="bpor" style="background-image:url(${Vt(s.portrait)});background-color:${u(s.color||"#888")}"></span>
        <span class="bwho"><small>${h}</small><b>${u(a.rival||s.name||"The House")}</b></span>
        <span class="bbig"><small>${a.pending?"Bet":"Result"}</small><b>${x}</b></span></div>${t.on?D(!0):""}
      <p class="bdet">Bet ${p(a.amount)} · chance ${I(a.chance)}${a.pending?t.on?t.step==="ready"?" · the chain settles it: check the result in a moment":" · connect your wallet, then check the result":" · the bank settles it on your next visit":""}</p>${m&&i.state.error&&i.state.busy==null?`<p class="bdet bbad">${u(i.state.error.message)}</p>`:""}
      <div class="bacts">${$}${v("Change the bet","change","","dark")}</div>${d}
      <button class="blink" data-act="village">Back to the kingdom</button>
    </section>`}const jt=900,C=(et=globalThis.matchMedia)==null?void 0:et.call(globalThis,"(prefers-reduced-motion: reduce)"),X=t=>o.jp.unit==="usd"?K(t):`${p(Math.round(t))} HORSKE`;let Q=0;function St(t){!i.on()||t.phase!=="armory"&&t.phase!=="end"||document.hidden||Date.now()-Q<3e4||(Q=Date.now(),i.loadJackpot().catch(()=>{}))}function zt(t){const e=o.jp,a=i.jackpotUsd(),s=i.wholeJackpot(),n=a!=null?{unit:"usd",v:a}:s!=null?{unit:"horske",v:s}:null;if(!n||!i.on()||t.phase!=="armory"&&t.phase!=="end")return;if((e.shown==null||e.unit!==n.unit)&&Object.assign(e,{unit:n.unit,shown:n.v,from:n.v,to:n.v,t0:0,base:null}),t.phase==="end"||!!i.state.pendingDone?e.base==null&&(e.base=e.shown):e.base=null,n.v!==e.to&&(n.v<e.shown||C!=null&&C.matches?Object.assign(e,{shown:n.v,from:n.v,to:n.v,t0:0}):Object.assign(e,{from:e.shown,to:n.v,t0:performance.now()})),e.t0){const d=Math.min(1,(performance.now()-e.t0)/jt);e.shown=e.from+(e.to-e.from)*(1-(1-d)**3),d>=1&&Object.assign(e,{shown:e.to,t0:0})}}function D(t){const e=o.jp;if(!i.on()||e.shown==null)return"";const a=t&&e.base!=null?e.to-e.base:0,s=a>=(e.unit==="usd"?.005:.5)?`<em class="bjup">+${e.unit==="usd"?K(a):p(Math.round(a))}</em>`:"",n=i.wholeJackpot(),r=!t&&e.unit==="usd"&&n!=null?`<small class="bjh">${p(n)} HORSKE</small>`:"";return`<div class="bjack${t?" card":""}${e.t0?" up":""}"><span class="bjl"><i class="coin"></i>Jackpot</span><b class="bjv">${u(X(e.shown))}</b>${s}${r}</div>`}function Bt(){const t=_(),e=t.s,a=e.toast&&c.nowMs-e.toast.at<5e3?e.toast:null,s=a?t.on?String(a.text).replace(/^Error: /,""):a.text:"",n=a?`<div class="btoast${a.ok===!1?" bad":""}" role="status">${u(s)}</div>`:"",r=t.on&&i.state.waiting?"Waiting for the house":null,d=e.busy?`<div class="bwait"><span></span><b>${u(r||Ft[e.busy]||"Working")}…</b></div>`:"",g=t.on?i.state.bout:null,b=g&&M[g.stage]?`<div class="bchain" role="status"><span></span><b>${u(r?`${r}…`:M[g.stage])}</b></div>`:"";return b&&e.phase!=="armory"&&e.phase!=="end"?b:t.on&&i.state.pendingDone&&(e.phase==="armory"||e.phase==="end")?`${wt()}${n}`:e.phase==="end"&&e.bout&&e.bout.gamba?`${kt(t)}${n}${d}`:e.phase==="end"?`<section class="bend wait" aria-labelledby="btitle"><div class="brib"><span id="btitle">Bout over</span></div>
      <p class="bdet">The Joust Arena takes bets for now.</p><div class="bacts one">${v("Back to the bets","change","","red")}</div></section>${n}${d}`:e.phase!=="armory"?"":`<section class="bpanel" aria-labelledby="bh">
        <header class="bhead"><button class="bback" data-act="village">‹ Kingdom</button><h1 id="bh">Joust Arena</h1>${ht(t)}</header>
        ${D(!1)}
        <nav class="btabs" role="tablist">${[["bet","Bet"],...t.on?[["activity","Activity"]]:[],["board","Board"]].map(([x,h])=>`<button role="tab" aria-selected="${o.tab===x}" class="${o.tab===x?"on":""}" data-act="tab" data-k="${x}">${h}</button>`).join("")}</nav>
        ${o.tab==="board"?vt(t):o.tab==="activity"&&t.on?xt():gt(t)}
        ${d}
      </section>${n}`}let V=0;function Tt(t){var a,s;if(!i.on()||t.phase!=="end"||!((a=t.bout)!=null&&a.pending)||!((s=t.gamba)!=null&&s.id)||t.gamba.result||Date.now()-V<2e4)return;V=Date.now();const e=t.gamba.id;i.refundable(e).then(n=>{o.refund=n?{id:e,...n,seenAt:Date.now()}:null,k()},()=>{})}let Z="";function tt(){var s,n,r,d;const t=w.state;if(j&&y){const g=j.view()?j.chance().extra:0;g!==W&&(W=g,y.useBonus(g))}Tt(t),St(t),zt(t),mt(t),yt();const e=o.jp.shown==null?"":`${X(o.jp.shown)}:${o.jp.t0?1:0}:${o.jp.base??""}`,a=[t.phase,(s=t.econ)==null?void 0:s.at,t.busy,(n=t.toast)==null?void 0:n.at,t.toast&&c.nowMs-t.toast.at<5e3,y==null?void 0:y.view().bonus,j?`${j.view()?j.chance().extra:"-"}:${j.state.v}`:"",(r=t.bout)==null?void 0:r.pending,(d=t.bout)==null?void 0:d.win,o.v,i.state.v,i.on()?i.holdLeft():0,e,o.tab==="activity"?Math.floor(Date.now()/3e4):0].join("|");a!==Z&&(Z=a,Et(S,`<div id="wbet">${Bt()}</div>`)),requestAnimationFrame(tt)}requestAnimationFrame(tt),S.addEventListener("click",t=>{const e=t.target.closest("[data-act]");if(!e||!S.contains(e)||e.disabled)return;const a=_(),s=e.dataset.act,n=a.s;if(s==="village"){location.assign(O);return}if(s==="tab"){o.tab=e.dataset.k,o.tab==="activity"&&(o.act.at=0),o.tab==="board"&&(o.brd.at=0),k();return}if(s==="bname"){F(a);return}if(s==="actwho"){Object.assign(o.act,{who:e.dataset.k,list:null,at:0}),k();return}if(s==="sort"){o.sort=e.dataset.k,k();return}if(s==="stake"){o.amount=+e.dataset.v,e.dataset.usd&&(o.usd=+e.dataset.usd),k();return}if(s==="bet"){n.busy||z("gambaBet",{gambaBet:{rider:H,amount:o.amount}});return}if(s==="again"){const r=n.bout||{};n.busy||z("gambaBet",{gambaBet:{rider:H,amount:a.list?o.amount:r.amount||o.amount}});return}if(s==="change"){z("toArmory");return}if(s==="faucet"){z("faucet");return}if(s==="cconnect"){i.connect().catch(()=>{});return}if(s==="cnetwork"){i.switchNetwork().catch(()=>{});return}if(s==="csignin"){i.signIn().catch(()=>{});return}if(s==="cfaucet"){i.faucet().catch(()=>{});return}if(s==="capprove"){i.approve().catch(()=>{});return}if(s==="crefresh"){i.refreshNow().catch(()=>{});return}if(s==="cpending"){i.finishPending().catch(()=>{});return}if(s==="cpdone"){i.clearPendingDone(),n.phase==="end"&&z("toArmory");return}if(s==="check"){n.gamba&&n.gamba.id&&!n.gamba.result&&!n.busy&&z("gambaBet",{gambaBet:{rider:H,amount:n.gamba.amount||o.amount}});return}if(s==="crefund"){const r=n.gamba&&n.gamba.id;r&&i.refund(r).then(()=>{const d=w.state.gamba;d&&d.id===r&&!d.result&&!w.state.busy&&z("gambaBet",{gambaBet:{rider:H,amount:d.amount||o.amount}})},()=>{});return}}),S.addEventListener("keydown",t=>{if(t.target.id==="bnm"){t.stopPropagation(),t.key==="Enter"&&F(_());return}(t.key==="Enter"||t.key===" ")&&t.target.closest("button, a, select")&&t.stopPropagation()}),S.addEventListener("keyup",t=>{t.target.id==="bnm"&&t.stopPropagation()}),S.addEventListener("input",t=>{t.target.id==="bnm"&&(o.nm.text=t.target.value)})}export{se as startBet};

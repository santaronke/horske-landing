import{m as De,g as qe}from"./config-DseBut2u.js";import{S as K,A as be,v as u,x as Ie,g as ue,I as Pe}from"./main-C_x--ser.js";import{g as We,E as N,c as Ue}from"./chain-AVAyGGSc.js";import{m as Ge,O as G}from"./houseQuests-DXMEUi6z.js";import{m as C,s as he,r as Je,d as J,o as Fe,t as Xe,a as Qe,p as Ve,e as Ze}from"./view-B_w9TCd3.js";const et=`/* The Lists' betting panel and result card (src/bet/bet.js) as a wooden board in the style of the site's header bar
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
/* how you ride (21/10): the taps or one pass with no tap, over the stakes; the pick gold, as a stake's */
.bmodes{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:0 0 6px}
.bmode{display:flex;flex-direction:column;align-items:center;gap:1px;padding:7px 6px 8px;border:0;border-radius:9px;color:var(--ink)!important;background:linear-gradient(var(--card1),var(--card2));box-shadow:0 0 0 2px var(--deep),0 3px 0 2px var(--deep);cursor:pointer;transition:transform .1s}
.bmode b{font-family:var(--gothic);font-weight:900;font-size:19px;line-height:1.1}
.bmode small{font-weight:700;font-size:12px;color:#2f7a2b}
.bmode.on{background:linear-gradient(var(--gold1),var(--gold2));box-shadow:0 0 0 2px var(--deep),0 0 0 4px var(--cream),0 0 0 6px var(--deep),0 3px 0 6px var(--deep)}
.bmode.on small{color:#1f5a1c}
.bmode:active{transform:translateY(2px)}
/* a run: the boost mode, taken by itself while the day's runs last (no choice to make) */
.bmodes.boost{grid-template-columns:1fr}
.bmodes.boost .bmode{cursor:default}
.bmodes.boost .bmode:active{transform:none}
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
/* the runs (21/10): the bet rides at a fixed chance with no tap, said over the stakes and under the button */
.bhint.brun{margin-top:12px;font-size:14px;color:var(--gold1)}
.bhint.brun b{color:#ffe08a}
.bchainstep .bbtn{margin:14px auto 0;min-width:220px}
/* the bet on the chain: a banner over the lists while the wallet and the chain work, just under the Gamba scoreboard
   (its top set each frame by bet.js; this one without a scoreboard) */
.bchain{position:fixed;left:50%;top:max(14px,env(safe-area-inset-top));transform:translateX(-50%);display:flex;align-items:center;gap:10px;padding:10px 18px;border-radius:10px;
  background:var(--wood) url(art/ui/wood-dark.webp) 0 0/700px auto repeat;box-shadow:var(--bevel),0 8px 18px rgba(0,0,0,.5);font-weight:700;font-size:17px;color:var(--gold1);
  text-shadow:0 2px 0 var(--ink);white-space:nowrap;pointer-events:none;animation:bchainup .25s ease-out}
/* its own entrance, centred all the way (bup's transform would drop the translateX for its quarter second) */
@keyframes bchainup{from{opacity:0;transform:translate(-50%,12px)}}
/* the scoreboard's no-tap label (vite.config.js RUN_LABEL): one line, its two parts on two lines on the phone held upright
   (the world's own breakpoint for its narrow scoreboard), where one line pushed the chance out of the board */
@media (max-width:640px) and (min-height:520px),(orientation:portrait){
  #arm.gsb .g2l{display:inline-block;vertical-align:middle;white-space:normal;line-height:1.25}
  #arm.gsb .g2l .gbr{display:block;height:0;overflow:hidden}
}
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
  .bbody{padding:2px 12px 4px}
  .bq{margin:6px 0 4px}
  .bstakes{grid-template-columns:repeat(4,1fr);gap:9px}
  .bstake{padding:3px 3px 4px}
  .bstake b{font-size:19px}
  .bstake small{font-size:9px}
  .bstake em{font-size:11px}
  /* a short screen: the two ways to ride on one line each, without their title (the stakes keep their room) */
  .bq.bride{display:none}
  .bmodes{gap:9px;margin:4px 0 0}
  .bmode{flex-direction:row;justify-content:center;align-items:baseline;gap:6px;padding:4px 6px 5px}
  .bmode b{font-size:15px}
  .bmode small{font-size:11px}
  .bgo{min-height:42px;margin-top:10px}
  .bgo b{font-size:22px}
  .bgo small{font-size:12px}
  .bhint{margin-top:6px;font-size:12px}
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
`,ge=3,ye=16,tt=/^[A-Za-z0-9À-ÖØ-öø-ÿ _-]+$/,nt=["house","thehouse","santa","ronke","mod","support","team","knight","you","kingdom","joust","jousting"],at=["horske","santaronke","ronkeverse","admin","moderator","official"],X=h=>String(h??"").normalize("NFC").trim().replace(/\s+/g," "),ot=h=>X(h).normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[ _-]/g,"");function st(h){const w=X(h);if(w.length>ye)return"long";if(!tt.test(w)&&w.length)return"chars";const H=ot(w);return w.length<ge||H.length<ge?"short":nt.includes(H)||at.some(j=>H.includes(j))?"reserved":null}const me={short:"A name has 3 to 16 characters.",long:"A name has 3 to 16 characters.",chars:"Letters, digits, spaces, _ and - only.",reserved:"That name is reserved.",taken:"That name is taken.",wait:"You changed your name a moment ago: try again in a minute."},xe="https://app.roninchain.com/swap?outputCurrency=0xc0Ca45c2e9448D3876Ca86220B2418C719298396",fe=[100,1e3,1e4,1e5],Y=h=>{try{return he(qe(h))}catch{return he(h)}},M="free",it={gambaBet:"Placing your bet",gambaSettle:"The judges decide",sync:"Updating",faucet:"Adding test HORSKE"},rt="https://wallet.roninchain.com",lt={nowallet:["Install the Ronin Wallet to bet on the Saigon testnet.","wallet"],nohouse:["The house's address is missing: open the test link the team sent.",""],connect:["Bet with your Ronin Wallet on the Saigon testnet.","cconnect:Connect wallet"],network:["Your wallet is on another network.","cnetwork:Switch to Saigon"],signin:["Sign in so the house can make your bets. This signs no transaction.","csignin:Sign in"],loading:["Reading your purse…",""],faucet:["You need test HORSKE: 1,000,000, free once an hour.","cfaucet:Get test HORSKE"],approve:["Once: let the arena take your bets from your test HORSKE.","capprove:Allow the arena"]},D={signin:"Sign in with your wallet to finish the bet",offer:"The house signs your bet…",confirm:"Confirm your bet in the wallet",placing:"Your bet is on its way…",settling:"The judges reveal the draw…"},g=h=>String(h??"").replace(/[&<>"]/g,w=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[w]),dt=h=>h?Pe(h)||h:"",F=h=>`${(Math.round((h||0)*1e4)/100).toFixed(2)}%`,y=h=>`${+(Math.round((h||0)*1e4)/100).toFixed(2)}%`,we=h=>`${h>0?"+":h<0?"−":""}${u(Math.abs(h))}`,ve=h=>`${Math.floor(h/60)}:${String(h%60).padStart(2,"0")}`,E=h=>h<1?h.toFixed(2):String(+h.toFixed(2));var $e;const pt="stats.html"+(new URLSearchParams((($e=globalThis.location)==null?void 0:$e.search)??"").get("chain")==="dev"?"?chain=dev":"");function mt({room:h,player:w,village:H,quests:j}){var pe,ce;const O=K.gamba,s=We(),n={tab:"bet",sort:"wagered",amount:null,usd:1,v:0,jp:{unit:null,shown:null,from:0,to:0,t0:0,base:null},act:{who:"all",list:null,mine:null,to:null,head:null,at:0,busy:!1,err:null,seen:null,names:{}},brd:{data:null,at:0,busy:!1,err:null,seen:null,who:null},nm:{text:null,busy:!1,msg:null,ok:!1}},S=s.on()?Ge(s):null;try{n.ride=localStorage.getItem("justa-web:ride")==="one"?"one":"tap"}catch{n.ride="tap"}(pe=s.setRide)==null||pe.call(s,n.ride);let Q=0;s.on()&&(s.restore().catch(()=>{}),j==null||j.useBonus(0)),document.head.insertAdjacentHTML("beforeend",`<style id="web-bet">${et}</style>`);const B=document.createElement("div");B.id="wbet",document.body.appendChild(B);const T=(e,t)=>window.sendAction(e,t),k=()=>{n.v++};function q(){const e=w.state,t=e.econ||null,a=s.on(),i=s.state,o=a&&Array.isArray(i.stakes)?i.stakes:null;o&&i.maxBet!=null&&(K.gamba.maxBet=Math.max(K.gamba.maxBet,Number(i.maxBet/N))),n.amount==null&&(n.amount=e.gambaPick&&e.gambaPick.amount||1e3);const r=a?i.balance==null?null:s.wholeBalance():t?t.horske:null,d=a&&i.minBet!=null?Number(i.minBet/N):0,c=a&&i.maxBet!=null?Math.min(be(),Number(i.maxBet/N)):be(),l=o??fe.map(p=>({usd:null,amount:p})),m=l.filter(p=>p.amount>=d&&p.amount<=c&&(r==null||p.amount<=r)).map(p=>p.amount);if(o){const p=o.filter(f=>m.includes(f.amount)).map(f=>f.usd);p.length&&!p.includes(n.usd)&&(n.usd=p[p.length-1]),n.amount=(o.find(f=>f.usd===n.usd)||o[0]).amount}else m.length&&!m.includes(n.amount)&&(n.amount=m[m.length-1]);return{s:e,ec:t,coins:r,fits:m,all:l,list:o,lo:d,qv:j?j.view():null,on:a,step:a?s.step():"off"}}const $=(e,t,a="",i="gold",o="")=>`<button class="bbtn ${i}" data-act="${t}" ${a}>${e}${o?`<small>${o}</small>`:""}</button>`,V=(e="gold")=>{var a;const t=((a=s.faucetLeft)==null?void 0:a.call(s))||0;return t>0?`<button class="bbtn ${e}" disabled>Next test HORSKE in ${Math.ceil(t/60)} min<small>1,000,000 free once an hour</small></button>`:$("Get test HORSKE","cfaucet","",e)},ke=e=>`<span class="bchipc"><i class="coin"></i>${e.coins==null?"…":u(e.coins)}</span>`,Z=(e,t)=>`<div class="bshort"><p>You have ${u(e.coins||0)} HORSKE${t?`, and this bet takes ${u(t)}`:""}.</p>
    <div class="brow"><a class="bbtn gold" href="${xe}" target="_blank" rel="noopener">Buy $HORSKE<small>on Ronin ↗</small></a>${e.s.tools?$(`+${u(K.faucet)} test HORSKE`,"faucet","","dark"):""}</div></div>`;function ee(e){var m,p;const t=s.state,[a,i]=lt[e.step]||["…",""],[o,r]=i.split(":"),d=t.busy?'<p class="bhint">Waiting for your wallet…</p>':i==="wallet"?`<a class="bbtn gold" href="${rt}" target="_blank" rel="noopener">Get Ronin Wallet<small>wallet.roninchain.com ↗</small></a>`:o==="cfaucet"?V():o?$(r,o):e.step==="loading"&&(((m=t.error)==null?void 0:m.code)==="purse"||((p=t.error)==null?void 0:p.code)==="stakes")?$("Try again","crefresh"):"",c=t.error?`<p class="bhint bbad">${g(t.error.message)}</p>`:"",l=t.address?`<p class="bhint">${g(t.address.slice(0,6)+"…"+t.address.slice(-4))} · Saigon</p>`:"";return`<div class="bbody bchainstep"><p class="bq">Saigon test</p><p class="bhint">${g(a)}</p>${d}${c}${l}</div>`}function je(e){var _;if(e.on&&e.step==="pending")return Te(e);if(e.on&&e.step!=="ready")return ee(e);const t=Ie(M).cap,a=e.qv,i=e.all.map(z=>{const A=z.amount,L=n.amount===A,Ke=z.usd!=null?`$${E(z.usd)}`:u(A),Ce=z.usd!=null?`$${E(z.usd*O.payout)}`:u(A*O.payout);return`<button class="bstake${L?" on":""}" data-act="stake" data-v="${A}" data-usd="${z.usd??""}" aria-pressed="${L}"${e.fits.includes(A)?"":" disabled"}><small>Bet</small><b>${Ke}</b><em>win ${Ce}</em></button>`}).join(""),o=a?a.bonus>0?`<p class="bhint bextra">The Tavern's quests and your Ronke Score add +${y(a.bonus)}.</p>`:`<p class="bhint bextra">Do the Tavern's quests to raise it.</p>`:"",r=(s.state.baseBps??4300)/1e4,d=S?S.view():null,c=d?S.chance():null,l=e.on&&((_=d==null?void 0:d.runs)!=null&&_.next)?d.runs:null,m=l?`<p class="bhint brun"><b>⚡ Boosted run</b> One pass, no tap: your chance is locked at ${y(l.chanceBps/1e4)}. ${l.runs>1?`${l.left} of ${l.runs} runs left today.`:"Your run today."}</p>${l.streak?"":`<p class="bhint bextra">Bet 5 times today and tomorrow's runs ride at 51%.</p>`}`:"",p=G/1e4,f=e.on?c?Math.min(c.hi,c.lo+p):r+p:t-ue()+p,b=`<p class="bhint">Your chance: ${y(f)}. One pass, no tap: +${y(p)}.</p>${e.on?c?`<p class="bhint bextra">${c.extra>0?`The Tavern's quests and your Ronke Score add +${y(c.extra)}: the house signs it into your bet.`:"Do the Tavern's quests to raise it."}</p>`:`<p class="bhint bextra">The Tavern's quests and your Ronke Score add up to +3% once you sign in.</p>`:o}`,v=l?m:n.ride==="one"?b:e.on?c?`<p class="bhint">Your chance: ${y(c.lo)} plus the bar, up to ${y(c.hi)}. Hit the bar on each pass to raise it.</p><p class="bhint bextra">${c.extra>0?`The Tavern's quests and your Ronke Score add +${y(c.extra)}: the house signs it into your bet.`:"Do the Tavern's quests to raise it."}</p>`:`<p class="bhint">Your chance: ${y(r)} plus the bar, up to ${y(r+ue())}. Hit the bar on each pass to raise it.</p><p class="bhint bextra">The Tavern's quests and your Ronke Score add up to +3% once you sign in.</p>`:`<p class="bhint">Your chance: up to ${y(t)}. Hit the bar on each pass to raise it.</p>${o}`,x=e.on?s.holdLeft():0,R=e.coins==null?'<p class="bhint">Opening your purse…</p>':x>0&&e.fits.length?`<button class="bgo" data-act="bet" disabled><b>Bet again in ${ve(x)}</b><small>your last bets' offers are still open on the chain</small></button>${v}`:e.fits.length&&e.list?`<button class="bgo" data-act="bet"><b>Bet $${E(n.usd)}</b><small>${u(n.amount)} HORSKE · to win $${E(n.usd*O.payout)}</small></button>${v}`:e.fits.length?`<button class="bgo" data-act="bet"><b>Bet ${u(n.amount)}</b><small>to win ${u(n.amount*O.payout)}</small></button>${v}`:e.on?ee({...e,step:"faucet"}):Z(e,fe[0]);return`<div class="bbody">${l?`<p class="bq bride">How you ride</p><div class="bmodes boost"><div class="bmode on" role="status"><b>⚡ Boosted run</b><small>one pass · ${y(l.chanceBps/1e4)} locked</small></div></div>`:`<p class="bq bride">How you ride</p><div class="bmodes" role="radiogroup" aria-label="How you ride">${[["tap","Tap the bar","up to +3%"],["one","One pass",`no tap · +${y(G/1e4)}`]].map(([z,A,L])=>`<button class="bmode${n.ride===z?" on":""}" data-act="ride" data-v="${z}" role="radio" aria-checked="${n.ride===z}"><b>${A}</b><small>${L}</small></button>`).join("")}</div>`}<p class="bq">Your bet</p><div class="bstakes" role="group" aria-label="Your bet">${i}</div>${R}</div>`}function Se(e){const t=n.act,a=s.state.address;if(t.err==="soon")return`<div class="bbody bact"><p class="bhint">The jousts' record comes with the house's next update.</p></div>`;const i=b=>[["Jousts",String(b.bouts)],["Won",String(b.won)],["Lost",String(b.lost)],["Win rate",Je(b.winRate)],["Streak",b.streak?`${b.streak.n} ${b.streak.kind}`:"—"],["Net",J(b.netUsd)]],o=a?t.mine?`<div class="bstats">${i(t.mine).map(([b,v])=>`<div><small>${b}</small><b class="${b==="Net"?t.mine.netUsd>0?"up":t.mine.netUsd<0?"down":"":""}">${g(v)}</b></div>`).join("")}</div>`:'<p class="bhint bnone">Reading your jousts…</p>':'<p class="bhint bnone">Connect your wallet to see your jousts.</p>',r=[["all","Everyone"],["me","You"]].map(([b,v])=>`<button class="${t.who===b?"on":""}" data-act="actwho" data-k="${b}" aria-pressed="${t.who===b}"${b==="me"&&!a?" disabled":""}>${v}</button>`).join(""),d=Math.floor(Date.now()/1e3),c=a?a.toLowerCase():null,l=b=>{var x;const v=Fe(b);return`<li><a href="${g(Xe(b,s.cfg.explorer))}" target="_blank" rel="noopener"><span class="bfl"><b>${g((x=t.names)!=null&&x[b.player]?`${t.names[b.player]} · ${Y(b.player)}`:Y(b.player))}${b.player===c?" · you":""}</b><small>${g(Qe(b))} · ${Ve(b.chanceBps)}</small></span><span class="bfres ${v.kind}">${g(v.text)}</span><span class="bfago">${Ze(b.placedAt,d)}</span></a></li>`},m=t.list==null?`<p class="bhint bnone">Reading the house's record…</p>`:t.list.length?`<ol class="bfeed">${t.list.map(l).join("")}</ol>`:`<p class="bempty">${t.who==="me"?"No jousts of yours yet.":"No jousts yet."}</p>`,p=t.to!=null&&t.head!=null&&t.head-t.to>60?`<p class="bhint">The house is still reading the arena's history.</p>`:"",f=t.err?`<p class="bhint bbad">${g(t.err)}</p>`:"";return`<div class="bbody bact"><p class="bq">Your jousts</p>${o}<div class="bacthead"><p class="bq">Recent</p><span class="bsort" role="group" aria-label="Whose jousts">${r}</span></div>${m}${p}${f}
      <a class="bbtn dark ball" href="${pt}">All jousts &amp; stats</a></div>`}let te=null;function ze(){var t;const e=((t=s.state.bout)==null?void 0:t.stage)==="done"?s.state.bout.localId:null;!S||e==null||e===te||(te=e,S.load().catch(()=>{}))}function Be(e){var o;const t=s.on()?s.record():null;if(!t||n.tab!=="activity"||e.phase!=="armory"||document.hidden||n.act.busy)return;const a=((o=s.state.bout)==null?void 0:o.stage)==="done"?s.state.bout.localId:null;if(a!==n.act.seen&&Object.assign(n.act,{seen:a,at:0}),Date.now()-n.act.at<15e3)return;const i=s.state.address;Object.assign(n.act,{busy:!0,at:Date.now()}),Promise.all([t.bouts({limit:8,player:n.act.who==="me"&&i?i:void 0}),i?t.stats({player:i}):null]).then(([r,d])=>Object.assign(n.act,{list:r.bouts,to:r.to,head:r.head,mine:(d==null?void 0:d.player)??null,names:r.names||{},err:null}),r=>Object.assign(n.act,{err:(r==null?void 0:r.code)==="no_record"||(r==null?void 0:r.status)===404?"soon":(r==null?void 0:r.message)||"The house did not answer"})).finally(()=>{n.act.busy=!1,k()})}function Te(e){var f;const t=s.state,a=t.pending;if(!a)return"";const i=Number(a.amount/N),o=a.run?Ue({barBps:300,extraBps:a.extraBps,boosted:!0},t)/1e4:(t.baseBps??4300)/1e4+a.barBps/1e4,r=a.usd!=null?`$${E(a.usd)} · ${u(i)} HORSKE`:`${u(i)} HORSKE`,d=a.usd!=null?`$${E(a.usd*O.payout)}`:u(i*O.payout),c=t.busy==="pending"?t.waiting?"Waiting for the house…":D[(f=t.bout)==null?void 0:f.stage]||"Waiting for your wallet…":null,l=s.ridingElsewhere(a.joustId),m=c?`<p class="bhint">${g(c)}</p>`:l?'<p class="bhint">This bet is being ridden in another tab: finish it there.</p>':e.coins!=null&&e.coins<i?`<p class="bhint">You need ${u(i)} HORSKE to sign it.</p><div class="brow"><a class="bbtn gold" href="${xe}" target="_blank" rel="noopener">Buy $HORSKE<small>on Ronin ↗</small></a>${s.cfg.chainId!==2020?V("dark"):""}</div>${a.offered?$("Sign the bet","cpending","","dark","if it already went out, its result"):""}`:$("Sign the bet","cpending","","gold",`to win ${d}`),p=t.error&&t.busy==null?`<p class="bhint bbad">${g(t.error.message)}</p>`:"";return`<div class="bbody bchainstep"><p class="bq">Your pending bet</p>
      <p class="bhint">${a.run?"This boosted run was not signed. Sign it to keep betting: the same stake, one pass at the run's locked chance.":a.one?`This bet was not signed. Sign it to keep betting: the same stake, ridden as one pass (+${y(G/1e4)}).`:"This bet was not signed. Sign it to keep betting: the same stake, and the bar your taps earned."}</p>
      <p class="bdet">${r} · chance ${F(o)}</p>${m}${p}</div>`}function Re(){const e=s.state.pendingDone,t=e.refunded?"wait":e.won?"win":"loss",a=e.refunded?"Bet refunded":e.won?"You win!":"The house wins",i=e.refunded?u(e.amount):e.won?`+${u(Number(BigInt(e.payout??0)/N))}`:`−${u(e.amount)}`,o=e.txHash?`<a class="blink" href="${s.cfg.explorer}/tx/${g(e.txHash)}" target="_blank" rel="noopener">See the draw on Saigon ↗</a>`:"";return`<section class="bend ${t}" aria-labelledby="btitle"><div class="brib"><span id="btitle">${a}</span></div>
      <div class="bres"><span class="bwho"><small>Your pending bet</small><b>The House</b></span>
        <span class="bbig"><small>Result</small><b>${i}</b></span></div>${P(!0)}
      <p class="bdet">Bet ${u(e.amount)} · chance ${F(e.chance)}</p>
      <div class="bacts one">${$("Back to the bets","cpdone","","red")}</div>${o}</section>`}const ne=()=>`<div class="bsort" role="group" aria-label="Order">${[["wagered","By volume"],["net","By profit"]].map(([e,t])=>`<button class="${n.sort===e?"on":""}" data-act="sort" data-k="${e}" aria-pressed="${n.sort===e}">${t}</button>`).join("")}</div>`;function ae(e){const t=n.nm;return`<div class="bnamebox"><label class="bq" for="bnm">Your name on the board</label>
      <div class="bnrow"><input id="bnm" maxlength="${ye}" autocomplete="off" spellcheck="false" placeholder="3 to 16 letters or digits" value="${g(t.text??e??"")}"><button class="bbtn dark" data-act="bname"${t.busy?" disabled":""}>${t.busy?"Saving…":"Save"}</button></div>
      ${t.msg?`<p class="bhint ${t.ok?"bok":"bbad"}">${g(t.msg)}</p>`:""}</div>`}function Ee(e){if(e.on)return Oe();const t=w.userId,a=e.ec&&e.ec.glb||[],i=O.lbMinBets,o=e.ec&&e.ec.gme||{bets:0},r=e.ec&&e.ec.house||{bets:0,wagered:0,paid:0},d=a.slice().sort((x,R)=>R.net-x.net),c=n.sort==="net"?d:a,l=a.findIndex(x=>x.id===t)+1,m=d.findIndex(x=>x.id===t)+1,p=o.bets>=i&&l?`You are #${l} by volume and #${m} by profit.`:`${Math.max(0,i-o.bets)} more bet${i-o.bets===1?"":"s"} this season to enter the board.`,f=e.qv&&e.qv.wallet,b=c.slice(0,20).map((x,R)=>`<li class="${x.id===t?"me":""}"><b class="brank">${R+1}</b><span class="bname"><b>${g(x.name||"Knight")}</b><small>${x.id===t&&f?`${g(Y(f))} · `:""}${u(x.bets)} bets · ${n.sort==="wagered"?`net ${we(x.net)}`:`${u(x.wagered)} wagered`}</small></span>
      <b class="bval${n.sort==="net"?x.net>0?" up":x.net<0?" down":"":""}">${n.sort==="wagered"?u(x.wagered):we(x.net)}</b></li>`).join(""),v=w.displayName&&w.displayName!=="Knight"?w.displayName:"";return`<div class="bbody">${ne()}
        ${b?`<ol class="blist">${b}</ol>`:`<p class="bempty">Nobody has ${i} settled bets this season yet.</p>`}
        <p class="bhouse">${p} The board counts knights with ${i} or more settled bets this season.</p>
        <p class="bhouse">${r.bets?`This season: ${u(r.bets)} bet${r.bets===1?"":"s"} · ${u(r.wagered)} wagered · paid out ${u(r.paid)}`:"No bets this season yet."}</p>
        ${ae(v)}</div>`}function Oe(){const e=n.brd,t=e.data,a=s.state.address?s.state.address.toLowerCase():null,i=t&&t.names||{},o=t?(n.sort==="net"?t.net:t.wagered)||[]:null,r=(l,m)=>{const p=i[l.player];return`<li class="${l.player===a?"me":""}"><b class="brank">${m+1}</b><span class="bname"><b>${g(p||Y(l.player))}</b><small>${p?`${g(Y(l.player))} · `:""}${u(l.bouts)} joust${l.bouts===1?"":"s"} · ${n.sort==="wagered"?`net ${J(l.netUsd)}`:`${C(l.wageredUsd)} wagered`}</small></span>
        <b class="bval${n.sort==="net"?l.netUsd>0?" up":l.netUsd<0?" down":"":""}">${n.sort==="wagered"?C(l.wageredUsd):J(l.netUsd)}</b></li>`},d=t?o.length?`<ol class="blist">${o.map(r).join("")}</ol>`:'<p class="bempty">No settled jousts yet.</p>':`<p class="bhint ${e.err?"bbad":"bnone"}">${g(e.err||"Reading the house's board…")}</p>`,c=a?t&&t.me?`You are #${t.me.byWagered} by volume and #${t.me.byNet} by profit.`:t?"Your first settled joust puts you on the board.":"":"Connect your wallet to see your place.";return`<div class="bbody">${ne()}${d}<p class="bhouse">${c} Every wallet with a settled joust counts.</p>${a?ae(i[a]||""):""}</div>`}function oe(e){const t=B.querySelector("#bnm"),a=X(t?t.value:n.nm.text??""),i=a?st(a):null;if(i){Object.assign(n.nm,{msg:me[i],ok:!1}),k();return}if(e.on){if(!s.state.address){Object.assign(n.nm,{msg:"Connect your wallet first.",ok:!1}),k();return}Object.assign(n.nm,{busy:!0,msg:null}),k(),s.houseQuests({signIn:!0,run:o=>o.setName(a)}).then(o=>{const r=s.state.address.toLowerCase();n.brd.data&&(n.brd.data.names={...n.brd.data.names,[r]:o.name}),Object.assign(n.nm,{text:null,msg:o.name?`Saved: ${o.name}.`:"Your name is off the board.",ok:!0}),n.brd.at=0},o=>Object.assign(n.nm,{msg:me[o==null?void 0:o.code]||(o==null?void 0:o.message)||"The house did not answer.",ok:!1})).finally(()=>{n.nm.busy=!1,k()});return}try{a?localStorage.setItem("justa-web:name",JSON.stringify(a)):localStorage.removeItem("justa-web:name")}catch{}w.displayName=a||"Knight",T("sync"),Object.assign(n.nm,{text:null,msg:a?`Saved: ${a}.`:"Back to Knight.",ok:!0}),k()}function Ae(){var i;const e=s.on()?s.record():null;if(!e||typeof e.board!="function"||n.tab!=="board"||document.hidden||n.brd.busy)return;const t=((i=s.state.bout)==null?void 0:i.stage)==="done"?s.state.bout.localId:null,a=s.state.address||null;(t!==n.brd.seen||a!==n.brd.who)&&Object.assign(n.brd,{seen:t,who:a,at:0}),!(Date.now()-n.brd.at<3e4)&&(Object.assign(n.brd,{busy:!0,at:Date.now()}),e.board({player:a||void 0,limit:20}).then(o=>Object.assign(n.brd,{data:o,err:null}),o=>Object.assign(n.brd,{err:(o==null?void 0:o.status)===404||(o==null?void 0:o.code)==="http_404"?"The board comes with the house's next update.":(o==null?void 0:o.message)||"The house did not answer"})).finally(()=>{n.brd.busy=!1,k()}))}function Ne(e){var x,R,U;const t=e.s,a=t.bout||{},i=t.vs||{},o=e.on&&a.pending?s.state.cancelled:null;if(o&&s.state.pending)return`<section class="bend wait" aria-labelledby="btitle"><div class="brib"><span id="btitle">Bet waiting</span></div>
        <p class="bdet">${g(o.message||"The bet did not reach the chain")}. Nothing was spent, and the bet waits for your signature: sign it to keep betting.</p>
        <div class="bacts">${s.state.busy==="pending"?`<p class="bhint">${g(D[(x=s.state.bout)==null?void 0:x.stage]||"Waiting for your wallet…")}</p>`:e.coins!=null&&e.coins<Number(s.state.pending.amount/N)&&!s.state.pending.offered?`<p class="bhint">You need ${u(Number(s.state.pending.amount/N))} HORSKE to sign it.</p>`:$("Sign the bet","cpending","","red")}${$("Back to the bets","change","","dark")}</div>
        ${s.state.error&&s.state.busy==null?`<p class="bdet bbad">${g(s.state.error.message)}</p>`:""}
        <button class="blink" data-act="village">Back to the kingdom</button></section>`;if(o){const _=s.holdLeft(),z=_>0?`<button class="bbtn red" data-act="again" disabled>Bet again in ${ve(_)}<small>your last offers are still open</small></button>`:$("Bet again","again","","red",`${e.list?`$${E(n.usd)}`:`${u(((R=t.gambaPick)==null?void 0:R.amount)||n.amount)} HORSKE`}${n.ride==="one"?" · one pass":""}`);return`<section class="bend wait" aria-labelledby="btitle"><div class="brib"><span id="btitle">Bet cancelled</span></div>
        <p class="bdet">${g(o.message||"The bet did not reach the chain")}.${o.code==="lost"||o.code==="refunded"?"":" Nothing was spent."}</p>
        <div class="bacts">${z}${$("Change the bet","change","","dark")}</div>
        <button class="blink" data-act="village">Back to the kingdom</button></section>`}const r=e.on&&((U=s.state.bout)==null?void 0:U.stage)==="done"?s.state.bout.result:null,d=r!=null&&r.txHash?`<a class="blink" href="${s.cfg.explorer}/tx/${g(r.txHash)}" target="_blank" rel="noopener">See the draw on Saigon ↗</a>`:"",c=a.pending?"wait":a.win?"win":"loss",l=a.pending?"Settling…":a.win?"You win!":"The house wins",m=a.pending?u(a.amount):a.win?`+${u(a.payout)}`:`−${u(a.amount)}`,p=a.pending?"Bet against":a.win?"Beat":"Lost to",f=e.on&&a.pending&&t.gamba&&t.gamba.id&&!t.gamba.result,b=f&&n.refund&&n.refund.id===t.gamba.id&&n.refund.now+(Date.now()-n.refund.seenAt)/1e3>=n.refund.at?$("Get your HORSKE back","crefund","","gold","not settled in time"):"",v=f?`${$("Check the result","check","","red",e.step==="ready"?"the chain settles it":"connect your wallet first")}${b}`:e.coins==null||e.coins>=(a.amount||0)?$("Bet again","again","","red",`${e.list?`$${E(n.usd)}`:`${u(a.amount)} HORSKE`}${n.ride==="one"?" · one pass":""}`):Z(e,a.amount);return`<section class="bend ${c}" aria-labelledby="btitle">
      <div class="brib"><span id="btitle">${l}</span></div>
      <div class="bres"><span class="bpor" style="background-image:url(${dt(i.portrait)});background-color:${g(i.color||"#888")}"></span>
        <span class="bwho"><small>${p}</small><b>${g(a.rival||i.name||"The House")}</b></span>
        <span class="bbig"><small>${a.pending?"Bet":"Result"}</small><b>${m}</b></span></div>${e.on?P(!0):""}
      <p class="bdet">Bet ${u(a.amount)} · chance ${F(a.chance)}${a.pending?e.on?e.step==="ready"?" · the chain settles it: check the result in a moment":" · connect your wallet, then check the result":" · the bank settles it on your next visit":""}</p>${f&&s.state.error&&s.state.busy==null?`<p class="bdet bbad">${g(s.state.error.message)}</p>`:""}
      <div class="bacts">${v}${$("Change the bet","change","","dark")}</div>${d}
      <button class="blink" data-act="village">Back to the kingdom</button>
    </section>`}const He=900,I=(ce=globalThis.matchMedia)==null?void 0:ce.call(globalThis,"(prefers-reduced-motion: reduce)"),se=e=>n.jp.unit==="usd"?C(e):`${u(Math.round(e))} HORSKE`;let ie=0;function _e(e){!s.on()||e.phase!=="armory"&&e.phase!=="end"||document.hidden||Date.now()-ie<3e4||(ie=Date.now(),s.loadJackpot().catch(()=>{}))}function Ye(e){const t=n.jp,a=s.jackpotUsd(),i=s.wholeJackpot(),o=a!=null?{unit:"usd",v:a}:i!=null?{unit:"horske",v:i}:null;if(!o||!s.on()||e.phase!=="armory"&&e.phase!=="end")return;if((t.shown==null||t.unit!==o.unit)&&Object.assign(t,{unit:o.unit,shown:o.v,from:o.v,to:o.v,t0:0,base:null}),e.phase==="end"||!!s.state.pendingDone?t.base==null&&(t.base=t.shown):t.base=null,o.v!==t.to&&(o.v<t.shown||I!=null&&I.matches?Object.assign(t,{shown:o.v,from:o.v,to:o.v,t0:0}):Object.assign(t,{from:t.shown,to:o.v,t0:performance.now()})),t.t0){const d=Math.min(1,(performance.now()-t.t0)/He);t.shown=t.from+(t.to-t.from)*(1-(1-d)**3),d>=1&&Object.assign(t,{shown:t.to,t0:0})}}function P(e){const t=n.jp;if(!s.on()||t.shown==null)return"";const a=e&&t.base!=null?t.to-t.base:0,i=a>=(t.unit==="usd"?.005:.5)?`<em class="bjup">+${t.unit==="usd"?C(a):u(Math.round(a))}</em>`:"",o=s.wholeJackpot(),r=!e&&t.unit==="usd"&&o!=null?`<small class="bjh">${u(o)} HORSKE</small>`:"";return`<div class="bjack${e?" card":""}${t.t0?" up":""}"><span class="bjl"><i class="coin"></i>Jackpot</span><b class="bjv">${g(se(t.shown))}</b>${i}${r}</div>`}function Me(){const e=q(),t=e.s,a=t.toast&&h.nowMs-t.toast.at<5e3?t.toast:null,i=a?e.on?String(a.text).replace(/^Error: /,""):a.text:"",o=a?`<div class="btoast${a.ok===!1?" bad":""}" role="status">${g(i)}</div>`:"",r=e.on&&s.state.waiting?"Waiting for the house":null,d=t.busy?`<div class="bwait"><span></span><b>${g(r||it[t.busy]||"Working")}…</b></div>`:"",c=e.on?s.state.bout:null,l=c&&D[c.stage]?`<div class="bchain" role="status"><span></span><b>${g(r?`${r}…`:D[c.stage])}</b></div>`:"";return l&&t.phase!=="armory"&&t.phase!=="end"?l:e.on&&s.state.pendingDone&&(t.phase==="armory"||t.phase==="end")?`${Re()}${o}`:t.phase==="end"&&t.bout&&t.bout.gamba?`${Ne(e)}${o}${d}`:t.phase==="end"?`<section class="bend wait" aria-labelledby="btitle"><div class="brib"><span id="btitle">Bout over</span></div>
      <p class="bdet">The Joust Arena takes bets for now.</p><div class="bacts one">${$("Back to the bets","change","","red")}</div></section>${o}${d}`:t.phase!=="armory"?"":`<section class="bpanel" aria-labelledby="bh">
        <header class="bhead"><button class="bback" data-act="village">‹ Kingdom</button><h1 id="bh">Joust Arena</h1>${ke(e)}</header>
        ${P(!1)}
        <nav class="btabs" role="tablist">${[["bet","Bet"],...e.on?[["activity","Activity"]]:[],["board","Board"]].map(([m,p])=>`<button role="tab" aria-selected="${n.tab===m}" class="${n.tab===m?"on":""}" data-act="tab" data-k="${m}">${p}</button>`).join("")}</nav>
        ${n.tab==="board"?Ee(e):n.tab==="activity"&&e.on?Se():je(e)}
        ${d}
      </section>${o}`}let re=0;function Le(e){var a,i;if(!s.on()||e.phase!=="end"||!((a=e.bout)!=null&&a.pending)||!((i=e.gamba)!=null&&i.id)||e.gamba.result||Date.now()-re<2e4)return;re=Date.now();const t=e.gamba.id;s.refundable(t).then(o=>{n.refund=o?{id:t,...o,seenAt:Date.now()}:null,k()},()=>{})}let le="",W=null;function de(){var o,r,d,c,l,m;const e=w.state;if(S&&j){const p=S.view()?S.chance().extra:0;p!==Q&&(Q=p,j.useBonus(p))}Le(e),_e(e),Ye(e),Be(e),ze(),Ae();const t=n.jp.shown==null?"":`${se(n.jp.shown)}:${n.jp.t0?1:0}:${n.jp.base??""}`,a=[e.phase,(o=e.econ)==null?void 0:o.at,e.busy,(r=e.toast)==null?void 0:r.at,e.toast&&h.nowMs-e.toast.at<5e3,j==null?void 0:j.view().bonus,S?`${S.view()?S.chance().extra:"-"}:${S.state.v}`:"",(d=e.bout)==null?void 0:d.pending,(c=e.bout)==null?void 0:c.win,n.v,s.state.v,s.on()?s.holdLeft():0,t,n.tab==="activity"?Math.floor(Date.now()/3e4):0,s.on()&&((l=s.faucetLeft)==null?void 0:l.call(s))>0?Math.floor(Date.now()/6e4):0].join("|");a!==le&&(le=a,De(B,`<div id="wbet">${Me()}</div>`));const i=B.querySelector(".bchain");if(i){const p=(m=document.querySelector(".gsb"))==null?void 0:m.getBoundingClientRect(),f=!!(p&&p.height);W??(W=performance.now());const b=f?`${Math.round(p.bottom+36)}px`:"",v=f||performance.now()-W>500?"":"hidden";i.style.top!==b&&(i.style.top=b),i.style.visibility!==v&&(i.style.visibility=v)}else W=null;requestAnimationFrame(de)}requestAnimationFrame(de),B.addEventListener("click",e=>{var r;const t=e.target.closest("[data-act]");if(!t||!B.contains(t)||t.disabled)return;const a=q(),i=t.dataset.act,o=a.s;if(i==="village"){location.assign(H);return}if(i==="tab"){n.tab=t.dataset.k,n.tab==="activity"&&(n.act.at=0),n.tab==="board"&&(n.brd.at=0),k();return}if(i==="bname"){oe(a);return}if(i==="actwho"){Object.assign(n.act,{who:t.dataset.k,list:null,at:0}),k();return}if(i==="sort"){n.sort=t.dataset.k,k();return}if(i==="stake"){n.amount=+t.dataset.v,t.dataset.usd&&(n.usd=+t.dataset.usd),k();return}if(i==="ride"){n.ride=t.dataset.v==="one"?"one":"tap";try{localStorage.setItem("justa-web:ride",n.ride)}catch{}(r=s.setRide)==null||r.call(s,n.ride),k();return}if(i==="bet"){o.busy||T("gambaBet",{gambaBet:{rider:M,amount:n.amount}});return}if(i==="again"){const d=o.bout||{};o.busy||T("gambaBet",{gambaBet:{rider:M,amount:a.list?n.amount:d.amount||n.amount}});return}if(i==="change"){T("toArmory");return}if(i==="faucet"){T("faucet");return}if(i==="cconnect"){s.connect().catch(()=>{});return}if(i==="cnetwork"){s.switchNetwork().catch(()=>{});return}if(i==="csignin"){s.signIn().catch(()=>{});return}if(i==="cfaucet"){s.faucet().catch(()=>{});return}if(i==="capprove"){s.approve().catch(()=>{});return}if(i==="crefresh"){s.refreshNow().catch(()=>{});return}if(i==="cpending"){s.finishPending().catch(()=>{});return}if(i==="cpdone"){s.clearPendingDone(),o.phase==="end"&&T("toArmory");return}if(i==="check"){o.gamba&&o.gamba.id&&!o.gamba.result&&!o.busy&&T("gambaBet",{gambaBet:{rider:M,amount:o.gamba.amount||n.amount}});return}if(i==="crefund"){const d=o.gamba&&o.gamba.id;d&&s.refund(d).then(()=>{const c=w.state.gamba;c&&c.id===d&&!c.result&&!w.state.busy&&T("gambaBet",{gambaBet:{rider:M,amount:c.amount||n.amount}})},()=>{});return}}),B.addEventListener("keydown",e=>{if(e.target.id==="bnm"){e.stopPropagation(),e.key==="Enter"&&oe(q());return}(e.key==="Enter"||e.key===" ")&&e.target.closest("button, a, select")&&e.stopPropagation()}),B.addEventListener("keyup",e=>{e.target.id==="bnm"&&e.stopPropagation()}),B.addEventListener("input",e=>{e.target.id==="bnm"&&(n.nm.text=e.target.value)})}export{mt as startBet};

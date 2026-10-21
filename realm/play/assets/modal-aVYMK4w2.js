import{c as $t,m as qt,i as at}from"./config-DSa0ZbPd.js";import{J as Qe}from"./joust-2BfEs9QO.js";import{J as St,K as Rt,L as zt,M as Ot,N as Tt,O as ke,P as ue,Q as ht,R as Pe,T as W,U as ft,V as Ae,W as Te,X as tt,Y as Oe,Z as ot,_ as Et,l as Nt,S as H,v as y,B as Ce,s as Ve,u as Re,$ as ze,I as Mt,a0 as Ze,a1 as xe,a2 as At,a3 as Ct,a4 as Bt,a5 as Lt,a6 as _t}from"./main-DtNYE3yG.js";import{c as It,m as Pt}from"./houseQuests-D7desbi6.js";import{g as Ft}from"./chain-DjFL0Xhm.js";const jt=1e4,Dt=864e5,Yt={code:"read",message:"Some quests could not be read on Ronin."};function Kt({quests:c,facts:m,cfg:q={},fetchFn:B=(...n)=>globalThis.fetch(...n),now:I=()=>Date.now(),maxExtraBps:G=300,subtle:u}={}){const n={busy:null,actionError:null,v:0,postAt:-1/0},_=()=>{n.v++},Z=()=>Math.floor(I()/Dt),L={get busy(){return n.busy??m.state.busy},get error(){var v,S;return(S=(v=m.state.facts)==null?void 0:v.failed)!=null&&S.length?Yt:null},set error(v){},get actionError(){return n.actionError},set actionError(v){n.actionError=v},get at(){return m.state.at},get v(){return n.v+m.state.v},get wallet(){return m.state.wallet},get ready(){return m.state.ready}};function O(){const v=m.state.facts;if(!v||!c)return null;const S=c.view();if(S.wallet!==v.wallet)return null;const p=Math.round(S.quests*1e4),F=Math.round(S.score*1e4),M=v.failed||[];return{wallet:v.wallet,on:S.on,n:S.n,questBps:p,rank:v.rank,scoreBps:F,extraBps:Math.min(G,p+F),maxExtraBps:G,code:v.day===Z()?v.code:null,bouts:S.bouts,lock:v.lock,boughtWeek:v.boughtWeek,buysReady:v.buysReady,ronkes:v.ronkes,post:S.post,lockAddress:q.lock??null,rankFailed:M.includes("rank"),buysFailed:M.includes("buys")}}return{local:!0,state:L,view:O,chance:()=>It(O()),load:({fresh:v=!1}={})=>m.refresh({fresh:v}),connect:()=>m.connect(),async checkIn(){const v=c.view().on.checkin;return c.checkIn(),_(),{done:!v}},async post(v){var j;const S=m.state.facts;if(n.actionError=null,!(S!=null&&S.wallet))return n.actionError={code:"wallet",message:"Connect your wallet first."},_(),!1;const p=St(v),F=p&&((j=c.postedBy)==null?void 0:j.call(c,p)),M=p?Rt(p)!==Z()?"old_post":F&&F!==S.wallet?"used":null:"link";if(M){const U=zt(M);return n.actionError={code:U.code,message:U.message},_(),!1}if(I()-n.postAt<jt)return n.actionError={code:"wait",message:"Wait a few seconds and try again."},_(),!1;n.postAt=I(),n.busy="post",_();try{const U=Z(),ee=S.day===U&&S.code?S.code:await Ot(S.wallet,U,u),P=await Tt(v,ee,{fetchFn:B,day:U});return c.posted(P,S.wallet),{url:P}}catch(U){return n.actionError=U!=null&&U.code?{code:U.code,message:String(U.message)}:{code:"code",message:"Your code of the day is not ready: reload the page."},!1}finally{n.busy=null,_()}}}}const de=100000n*Te,Ht=15e3;function Wt({provider:c,address:m,cfg:q,onDone:B=()=>{},rpcOpts:I,sendOpts:G={}}){const u={info:null,busy:null,step:null,error:null,hash:null,v:0,at:0},n=G.sleep??(p=>new Promise(F=>setTimeout(F,p))),_=()=>{u.v++},Z=()=>Pe(q.lock);async function L(){const p=m();if(!Z()||!p)return u.info=null;const[[F,M],[j],[U],ee]=await Promise.all([ke(q,q.lock,Ae,"locks",[p],I),ke(q,q.horske,ue,"balanceOf",[p],I),ke(q,q.horske,ue,"allowance",[p,q.lock],I),ht(q,I)]);return u.info={wallet:p.toLowerCase(),amount:BigInt(F),unlockAt:Number(M),balance:BigInt(j),allowance:BigInt(U),now:ee},u.at=Date.now(),_(),u.info}function O(p=u.info){return p?p.amount>0n&&p.now>=p.unlockAt?"open":p.amount>=de?"locked":p.balance>=de?"lock":"short":null}async function v(p,F){if(u.busy)return!1;u.busy=p,u.error=null,u.hash=null,_();try{const M=c(),j=m();if(!M||!j)throw new W("nowallet","Connect your wallet first");return u.step="network",_(),await ft(M,q),await F(M,j),await L().catch(()=>{}),B(p),!0}catch(M){return u.error={code:(M==null?void 0:M.code)||"error",message:String((M==null?void 0:M.message)||M),hash:(M==null?void 0:M.hash)||null},!1}finally{u.busy=null,u.step=null,_()}}const S=(p,F,M,j,U=q.lock,ee=Ae)=>(u.step=j,_(),tt(p,q,{from:F,to:U,data:M},{iface:ee,rpcOpts:I,onSent:P=>{u.hash=P,_()},...G}));return{state:u,ready:Z,read:L,status:()=>O(),lock:()=>v("lock",async(p,F)=>{const M=await L();if(M.balance<de)throw new W("short","This wallet holds less than 100,000 HORSKE");if(M.allowance<de){await S(p,F,ue.encodeFunctionData("approve",[q.lock,de]),"approve",q.horske,ue);const j=Date.now();for(;BigInt((await ke(q,q.horske,ue,"allowance",[F,q.lock],I))[0])<de;){if(Date.now()-j>Ht)throw new W("allowance","The approval is not on Ronin yet: try again in a moment");await n(1e3)}}await S(p,F,Ae.encodeFunctionData("lock",[de]),"lock")}),relock:()=>v("relock",(p,F)=>S(p,F,Ae.encodeFunctionData("relock",[]),"relock")),unlock:()=>v("unlock",(p,F)=>S(p,F,Ae.encodeFunctionData("unlock",[]),"unlock"))}}const nt=100n,Gt=300,rt=5n*10n**16n,gt=2n*10n**16n,Ut=500,xt=1500,Jt=[0,1],st={buy:Te,sell:1000n*Te},Qt=6e4,Xt=15e3,bt=4e3,wt=450,Vt=bt*wt,et="justa-castle-pending",it={Slippage:"The price moved more than 1%: try again",Expired:"It took too long: try again",NoLiquidity:"The pools cannot take that much: try less",ZeroAmount:"Type an amount first",ERC20InsufficientBalance:"Not enough HORSKE",ERC20InsufficientAllowance:"The approval is not on Ronin yet: try again in a moment"},Zt=/^[1-9]\d{0,2}(,\d{3}){2,}(\.\d*)?$|^[1-9]\d{0,2},\d{3}\.\d*$/,yt=/^\d{1,3},\d{3}$/,vt=c=>String(c??"").trim().replace(/[\s_]/g,""),en=c=>yt.test(vt(c));function tn(c){let m=vt(c);if(!m||yt.test(m)||(Zt.test(m)?m=m.replace(/,/g,""):/^\d*,\d*$/.test(m)&&(m=m.replace(",",".")),!/^(\d+\.?\d*|\.\d+)$/.test(m)))return null;const[q,B=""]=m.split(".");if(B.length>18)return null;const I=BigInt(q||"0")*Te+BigInt((B+"0".repeat(18)).slice(0,18));return I>0n?I:null}function nn(c,m=6){const q=BigInt(c),B=q/Te,I=(q%Te).toString().padStart(18,"0").slice(0,m).replace(/0+$/,"");return I?`${B}.${I}`:String(B)}function an(c,m,q,B){if(!B||!c||m==null)return 0;const I=10000n-m*q*10000n/(c*B);return I>0n?Number(I):0}function on(c){var B,I,G;const m=((B=/data="(0x[0-9a-fA-F]{8,})"/.exec(String((c==null?void 0:c.message)??"")))==null?void 0:B[1])??null,q=typeof(c==null?void 0:c.data)=="string"?c.data:typeof((I=c==null?void 0:c.data)==null?void 0:I.data)=="string"?c.data.data:m;if(!q||q.length<10)return null;try{return((G=Oe.parseError(q))==null?void 0:G.name)??null}catch{return null}}function lt(c){var B;const m=String((c==null?void 0:c.message)??c??""),q=((B=/This would fail: (\w+)/.exec(m))==null?void 0:B[1])??on(c);return q&&it[q]?new W(c.code,it[q]):/insufficient funds/i.test(m)?new W("short","Not enough RON for the gas"):c instanceof W?c:new W("error",m.slice(0,120)||"Something failed")}const rn=()=>{try{return globalThis.localStorage??null}catch{return null}},Ue=(c,m)=>String(c??"").toLowerCase()===String(m??"").toLowerCase();function sn({provider:c,cfg:m,onDone:q=()=>{},rpcOpts:B,sendOpts:I={},storage:G=rn()}){var qe,Ye;const u={v:0,account:null,restoring:!1,info:null,quote:null,quoting:!1,busy:null,step:null,hash:null,error:null,done:null,pending:null},n={buy:null,sell:null},_=new Map,Z=(i,l)=>{Ue(u.account,i)?Object.assign(u,l):_.set(String(i).toLowerCase(),l)},L=()=>{u.v++},O=()=>Pe(m.swap)&&Pe(m.horske),v=I.sleep??(i=>new Promise(l=>setTimeout(l,i)));let S=0;const p=i=>(u.busy=i,u.step=null,L(),++S),F=i=>{i===S&&(u.busy=null,u.step=null,L())};function M(i){const l=Pe(i)?i:null;if(Ue(l,u.account)&&!!l==!!u.account)return;u.account=l,u.info=null,u.done=null;const h=l?_.get(l.toLowerCase()):null;h&&(Object.assign(u,h),_.delete(l.toLowerCase())),$e(),L(),l&&ee().catch(()=>{})}async function j(){var l;const i=c();if(!i)return null;u.restoring=!0,L();try{M((l=await i.request({method:"eth_accounts"}))==null?void 0:l[0])}catch{}finally{u.restoring=!1,L()}return u.account}async function U(){var h;const i=c();if(!i)throw new W("nowallet","Install the Ronin Wallet, then reload this page");if(u.busy)return u.account;const l=p("connect");try{M((h=await i.request({method:"eth_requestAccounts"}))==null?void 0:h[0])}catch(T){throw new W("declined",(T==null?void 0:T.code)===-32002?"Your wallet is already asking: open it":"The wallet did not connect")}finally{F(l)}return u.account}async function ee(){const i=u.account;if(!i||!O())return null;const[l,[h],[T]]=await Promise.all([ot(m,"eth_getBalance",[i,"latest"],B),ke(m,m.horske,ue,"balanceOf",[i],B),ke(m,m.horske,ue,"allowance",[i,m.swap],B)]);return i!==u.account||(u.info={wallet:i.toLowerCase(),ron:BigInt(l),horske:BigInt(h),allowance:BigInt(T),at:Date.now()},L()),u.info}const P=(i,l)=>Promise.all(Jt.map(h=>ke(m,m.swap,Oe,i,[h,l],B).then(([T,Q])=>({route:h,out:BigInt(T),via:BigInt(Q)}),T=>({route:h,error:T})))),Ee=i=>i.filter(l=>l.out!=null).reduce((l,h)=>l==null||h.out>l.out?h:l,null);async function Xe(i,l,h){var T;if(h&&n[l]&&Date.now()-n[l].at<Qt)return n[l].out;for(let Q=0;Q<2;Q++){const V=((T=Ee(await P(i,st[l])))==null?void 0:T.out)??null;if(V!=null)return n[l]={out:V,at:Date.now()},V}return null}async function Fe(i,l,{fresh:h=!1}={}){var oe;const T=i==="buy"?"quoteBuy":"quoteSell",[Q,V]=await Promise.all([P(T,l),Xe(T,i,!h)]),ne=Ee(Q);if(!ne)throw((oe=Q.find(ge=>ge.error))==null?void 0:oe.error)??new W("quote","The price did not load");return{dir:i,amount:l,route:ne.route,out:ne.out,via:ne.via,impactBps:V==null?null:an(l,ne.out,st[i],V),at:Date.now(),error:null}}let C=0;async function me(i,l){const h=++C;if(!O()||l==null||l<=0n)return u.quote=null,u.quoting=!1,L(),null;u.quoting=!0,L();let T;try{T=await Fe(i,l)}catch(Q){T={dir:i,amount:l,out:null,error:lt(Q).message,at:Date.now()}}return h===C&&(u.quote=T,u.quoting=!1,L()),T}function J(i){for(const l of(i==null?void 0:i.logs)??[])if(Ue(l.address,m.swap))try{const h=Oe.parseLog(l);if((h==null?void 0:h.name)==="Bought")return BigInt(h.args.horskeOut);if((h==null?void 0:h.name)==="Sold")return BigInt(h.args.ronOut)}catch{}return null}function he(i,l){const h={dir:i.dir,amount:i.amount,route:i.route,out:J(l)??i.out,hash:i.hash,at:Date.now()};Z(i.account,{done:h}),n.buy=n.sell=null,ee().catch(()=>{}),q(h)}const te=new Map;let ie=0;const ce=i=>{var l;return i?((l=te.get(String(i).toLowerCase()))==null?void 0:l.d)??null:null},$e=()=>{u.pending=ce(u.account)};function fe(){try{const i=Object.fromEntries([...te].map(([l,h])=>[l,h.d]));te.size?G==null||G.setItem(et,JSON.stringify(i,(l,h)=>typeof h=="bigint"?h.toString():h)):G==null||G.removeItem(et)}catch{}}function je(i,l,h,T){var Q;((Q=te.get(i))==null?void 0:Q.token)===l&&(te.delete(i),fe(),h&&h.status==="0x1"?(Z(T.account,{error:null}),he(T,h)):h?Z(T.account,{error:{code:"reverted",message:"The transaction failed on the chain",hash:T.hash}}):Z(T.account,{error:{code:"slow",message:"Still not confirmed: check your wallet before you swap again",hash:T.hash}}),$e(),L())}function De(i){const l=i.account.toLowerCase(),h=++ie;te.set(l,{d:i,token:h}),fe(),$e(),L();const T=()=>ot(m,"eth_getTransactionReceipt",[i.hash],B).catch(()=>null);(async()=>{var Q;for(let V=0;V<wt&&Date.now()-i.since<Vt;V++){if(await v(bt),((Q=te.get(l))==null?void 0:Q.token)!==h)return;const ne=await T();if(ne)return je(l,h,ne,i)}je(l,h,await T(),i)})()}function Ne(i=u.account){te.delete(String(i??"").toLowerCase()),fe(),$e(),L()}async function le(i,l,h=null){if(u.busy||ce(u.account))return!1;const T=D=>D&&D.dir===i&&D.amount===l&&D.out!=null,Q=T(h)?h:T(u.quote)?u.quote:null,V=Q?Q.out*(10000n-nt)/10000n:0n,ne=p(i);u.error=null,u.hash=null,u.done=null;const oe=D=>{ne===S&&(u.step=D,L())};let ge=0;const Ke={rpcOpts:B,onSent:D=>{u.hash=D,ge=Date.now(),L()},...I};try{const D=c(),K=u.account;if(!D||!K)throw new W("nowallet","Connect your wallet first");if(!O())throw new W("closed","The Castle's swap is not open yet");if(l==null||l<=0n)throw new W("amount","Type an amount first");const Se=()=>{if(!Ue(u.account,K))throw new W("nowallet","The wallet changed: try again")},Me=async()=>{oe("price");const a=await Fe(i,l,{fresh:!0});if(a.out<V)throw u.quote=a,new W("moved","The price moved: check the new price and try again");if(a.impactBps==null)throw new W("impact","The price impact did not load: try again");if(a.impactBps>xt)throw u.quote=a,new W("impact","The price impact is over 15%: try a smaller amount");return a},pe=await ee();if(!pe)throw new W("nowallet","Connect your wallet first");if(Se(),i==="buy"&&l+gt>pe.ron)throw new W("short",l>pe.ron?"Not enough RON":"Leave a little RON for the gas");if(i==="sell"&&l>pe.horske)throw new W("short","Not enough HORSKE");if(oe("network"),await ft(D,m),i==="sell"&&pe.allowance<l){await Me(),oe("approve"),Se(),await tt(D,m,{from:K,to:m.horske,data:ue.encodeFunctionData("approve",[m.swap,l])},Ke);const a=Date.now();for(;;){const k=await ee();if(Se(),!k)throw new W("nowallet","The wallet changed: try again");if(k.allowance>=l)break;if(Date.now()-a>Xt)throw new W("allowance","The approval is not on Ronin yet: try again in a moment");await v(1e3)}}const e=await Me(),t=e.out*(10000n-nt)/10000n,o=t>V?t:V,s=BigInt(await ht(m,B)+Gt);oe(i),u.hash=null,Se();const g=i==="buy"?{from:K,to:m.swap,data:Oe.encodeFunctionData("buy",[e.route,o,s]),value:l}:{from:K,to:m.swap,data:Oe.encodeFunctionData("sell",[e.route,l,o,s])},d={dir:i,amount:l,route:e.route,out:e.out,account:K};let r;try{r=await tt(D,m,g,{...Ke,iface:Oe})}catch(a){throw(a==null?void 0:a.code)==="slow"&&a.hash&&De({...d,hash:a.hash,since:ge||Date.now()}),a}return he({...d,hash:r.hash},r.receipt),!0}catch(D){const K=lt(D);return u.error={code:K.code||"error",message:K.message,hash:(D==null?void 0:D.hash)||null},!1}finally{F(ne)}}try{const i=JSON.parse((G==null?void 0:G.getItem(et))||"null"),l=i&&typeof i=="object"?i.hash?[i]:Object.values(i):[];for(const h of l)typeof(h==null?void 0:h.hash)!="string"||!/^0x[0-9a-fA-F]{64}$/.test(h.hash)||!Pe(h.account)||!Number.isFinite(h.since)||De({...h,amount:BigInt(h.amount),out:h.out==null?null:BigInt(h.out)});te.size||fe()}catch{te.clear(),fe()}try{(Ye=(qe=c())==null?void 0:qe.on)==null||Ye.call(qe,"accountsChanged",i=>M(i==null?void 0:i[0]))}catch{}return{state:u,ready:O,restore:j,connect:U,read:ee,quote:me,swap:le,dismissPending:Ne,pendingFor:ce}}const ln=`/* The village's modals (src/modal/modal.js). Paper: art/ui/paper.webp, a tileable parchment made with SVG filters\r
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
.mx{width:40px;height:40px;border:0;border-radius:50%;background:none;font-size:32px;line-height:1;padding:0}\r
/* no square ring around the × (Rafael, 17/10: "odeio esse quadrado que fica"): the dialog takes the focus when it opens\r
   (modal.js), and a key user tabbing to the × sees a soft round mark instead of the browser's square */\r
.mx:focus,.mpanel:focus{outline:none}\r
.mx:focus-visible{background:rgba(43,26,13,.14)}\r
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
.qlist{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:7px}\r
.qrow{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:12px;padding:6px 12px;border:2px solid rgba(43,26,13,.5);border-radius:10px;background:rgba(255,248,230,.55)}\r
.qrow.on{border-color:var(--green);background:rgba(226,242,214,.62)}\r
.qseal{display:grid;place-items:center;width:44px;height:44px;border-radius:50%;border:3px solid var(--ink);background:radial-gradient(circle at 35% 35%,#ffe9a0,#e0a91f 62%,#9a6a12);box-shadow:0 3px 0 rgba(43,26,13,.35);font-weight:900;font-size:21px;line-height:1;color:var(--ink)}\r
a.mbtn{text-decoration:none}\r
.qrow.on .qseal{background:radial-gradient(circle at 35% 35%,#bfe8aa,#3a8a43 66%,#24602c);color:#fff} /* its size: .qseal, per layout */\r
.qtxt{display:flex;flex-direction:column;gap:2px;min-width:0}\r
.qtxt b{font-size:15px;line-height:1.15}\r
.qtxt small{font-size:12.5px;line-height:1.3;color:#6a5236}\r
.qside{display:flex;flex-direction:column;align-items:flex-end;gap:2px;text-align:right;font-size:14px;white-space:nowrap}\r
.qside small{font-size:12px;color:#7a6446}\r
.qside .mbtn{min-width:118px}\r
.qok{color:var(--green);font-weight:700}\r
.qsoon{color:#7a6446;font-size:13px}\r
.qprog b{font-size:20px}\r
/* the Tavern on the chain (20/10): the post's link pasted under its quest, small links, the house's message */\r
.qx{grid-column:2/-1;display:flex;gap:6px;min-width:0}\r
.qx input{flex:1;min-width:0;padding:6px 9px;border:2px solid rgba(43,26,13,.55);border-radius:8px;background:#fffdf6;font:inherit;font-size:13.5px;color:var(--ink)}\r
.qx input:focus-visible{outline:3px solid var(--navy);outline-offset:1px}\r
.qx .mbtn{min-width:0;padding-inline:14px}\r
.qlink{font-size:12.5px;font-weight:700;color:var(--navy);text-decoration:underline;text-underline-offset:2px}\r
.qlinkbtn{padding:0;border:0;background:none;font:inherit;font-weight:700;color:var(--navy);text-decoration:underline;text-underline-offset:2px;cursor:pointer}\r
.qbad{color:#9b2c1f}\r
.qbtns{display:inline-flex;gap:6px}\r
.qbtns .mbtn{min-width:0;padding-inline:12px}\r
.qbig{font-family:var(--gothic);font-weight:900;color:var(--navy)}\r
.qbig small{font-family:var(--ui);font-size:16px;font-weight:500;color:#6a5236}\r
.mchip.qchip{padding:5px 14px;color:var(--green)}\r
.qnote{margin-top:10px;font-size:13px;color:#6a5236}\r
.qseg{display:inline-flex;flex-wrap:wrap;gap:6px}\r
.qseg .mf{padding:4px 12px}\r
@media (max-width:700px) and (min-height:501px),(max-width:700px) and (orientation:portrait){\r
  .mbody.tavern{grid-template-columns:1fr}\r
  .qrow{grid-template-columns:auto minmax(0,1fr);gap:6px 10px;padding:9px 10px}\r
  .qside{grid-column:2;flex-direction:row;align-items:center;flex-wrap:wrap;gap:4px 10px;text-align:left}\r
  .qseal{width:44px;height:44px;font-size:21px}\r
  .mchip.qchip{order:1;padding:4px 10px} /* no tabs here: the chip sits by the title and the close button stays at the end */\r
}\r
@media (orientation:landscape) and (max-height:500px){\r
  .qrow{gap:10px;padding:6px 10px}\r
  .qseal{width:40px;height:40px;font-size:19px}\r
  .qtxt b{font-size:15px}.qtxt small{font-size:12px}\r
  .tavern .mcardbox{padding:10px 12px 12px}\r
  .tavern .mcardbox h3{font-size:22px}\r
}\r
/* the Tavern's own room (21/10, Rafael: "os cards precisam ter transparencia para vermos o fundo"; "os contornos da\r
   taverna podem ser a borda que usamos nos menus em madeira, aquela bordinha dourada arredondada"): Santa's waitress in the\r
   tavern behind (art/tavern, made in ChatGPT: wide on a computer and a phone held sideways, she on the right; tall on a\r
   phone held upright, she on top), the wood menus' gold bevel round the panel and the cards, and the cards of dark glass\r
   so the room shows through. On a computer the chance card sits at the bottom of its column: her face and the mugs above */\r
#wmodal .mpanel.tavern-bg{--deep:#1d130b;--gold:#f0bd45;--gold1:#ffe08a;--cream:#fff3d6;--muted:#e8d5b0;--win:#9be08f;\r
  --bevel:0 0 0 1px #452600,0 0 0 2px #926e3d,0 0 0 3px #d6b37f,0 0 0 4px #a1805a,0 0 0 6px #1d130b;\r
  --cardbevel:0 0 0 1px #452600,0 0 0 2px #926e3d,0 0 0 3px #d6b37f,0 0 0 4px #a1805a,0 0 0 5px rgba(29,19,11,.85);\r
  --glass:rgba(22,12,5,.5);\r
  color:var(--cream);border:0;border-radius:6px;background:#251310 url(art/tavern/tavern-wide.webp) 85% center/cover no-repeat;\r
  box-shadow:var(--bevel),0 12px 22px rgba(0,0,0,.5)}\r
#wmodal .mpanel.tavern-bg::before{display:none}\r
.mpanel.tavern-bg .mhead h1{color:var(--gold);-webkit-text-stroke:1.5px var(--deep);paint-order:stroke fill;text-shadow:0 3px 0 var(--deep)}\r
.mpanel.tavern-bg .mx{color:var(--cream);text-shadow:0 2px 0 var(--deep)}\r
.mpanel.tavern-bg .mx:focus-visible{background:rgba(255,243,214,.14)}\r
.mpanel.tavern-bg .mcardbox{border:0;border-radius:10px;background:var(--glass);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);box-shadow:var(--cardbevel)}\r
.mpanel.tavern-bg .mcardbox h3{color:var(--gold);-webkit-text-stroke:1px var(--deep);paint-order:stroke fill;text-shadow:0 2px 0 var(--deep)}\r
.mpanel.tavern-bg .mlead,.mpanel.tavern-bg .qnote,.mpanel.tavern-bg .qtxt small,.mpanel.tavern-bg .qside small,.mpanel.tavern-bg .qsoon,.mpanel.tavern-bg .qbig small{color:var(--muted)}\r
.mpanel.tavern-bg .qrow{border:0;background:rgba(255,236,200,.07);box-shadow:inset 0 0 0 1.5px rgba(240,189,69,.38)}\r
.mpanel.tavern-bg .qrow.on{background:rgba(110,190,100,.17);box-shadow:inset 0 0 0 1.5px rgba(155,224,143,.65)}\r
.mpanel.tavern-bg .qok{color:var(--win)}\r
.mpanel.tavern-bg .qbig{color:var(--gold);-webkit-text-stroke:1px var(--deep);paint-order:stroke fill;text-shadow:0 2px 0 var(--deep)}\r
.mpanel.tavern-bg .qlink,.mpanel.tavern-bg .qlinkbtn{color:var(--gold1)}\r
.mpanel.tavern-bg .qbad{color:#ff9a7a}\r
.mpanel.tavern-bg .qx input{border-color:rgba(240,189,69,.55)}\r
.mpanel.tavern-bg .mempty{border:0;border-radius:10px;background:var(--glass);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);box-shadow:var(--cardbevel)}\r
.mpanel.tavern-bg .mempty h2{color:var(--gold);-webkit-text-stroke:1px var(--deep);paint-order:stroke fill;text-shadow:0 2px 0 var(--deep)}\r
.mpanel.tavern-bg .mbody.tavern{align-content:stretch} /* the chance card at the panel's bottom, whatever the quests' height */\r
.mpanel.tavern-bg .mbody.tavern>.scol:last-child{justify-content:flex-end}\r
.mpanel.tavern-bg .mtoast{color:var(--ink)} /* its own cream, its own ink (the room's text is cream) */\r
@media (max-width:700px) and (min-height:501px),(max-width:700px) and (orientation:portrait){\r
  /* a phone held upright: the whole screen, so no edge round it (Rafael, 21/10: "no celular não precisa de borda pq ja usa\r
     a tela toda"); the tall picture on top, the cards from under her mugs, scrolling up over her */\r
  #wmodal .mpanel.tavern-bg{border-radius:0;background:#2b1511 url(art/tavern/tavern-tall.webp) top center/100% auto no-repeat;box-shadow:none}\r
  .mpanel.tavern-bg .mbody.tavern{padding-top:max(16px,calc(75vw - 60px));align-content:start}\r
}\r
@media (orientation:landscape) and (max-height:500px){\r
  /* a phone held sideways: the whole screen, no edge round it; the wide picture, the cards in one column on the left,\r
     she on the right */\r
  #wmodal .mpanel.tavern-bg{border-radius:0;box-shadow:none}\r
  .mpanel.tavern-bg .mbody.tavern{grid-template-columns:1fr;width:60%;align-content:start}\r
  .mpanel.tavern-bg .mbody.tavern>.scol:last-child{justify-content:flex-start}\r
  .mpanel.tavern-bg .mhead .mchip{margin-left:0} /* by the title: her face is on the right */\r
  .mpanel.tavern-bg .mhead .mx{margin-left:auto}\r
}\r
/* the Castle (20/10): the swap, one card in the middle (You pay, You get, the price, one gold button); a phone held\r
   sideways puts the price and the button beside the two fields */\r
.mbody.castle .mleft{align-items:center;overflow:auto;padding:4px 0 6px}\r
.cswap{width:min(480px,100%);display:flex;flex-direction:column;gap:12px}\r
.cmain,.cside{display:flex;flex-direction:column;gap:10px;min-width:0}\r
.cdirs{display:grid;grid-template-columns:1fr 1fr;gap:6px}\r
.cdirs .mf{padding:7px 10px;font-size:15px}\r
.cdirs .mf:disabled{opacity:.6;cursor:default}\r
.cfield{position:relative;border:2px solid rgba(43,26,13,.55);border-radius:10px;background:#fffdf6;padding:8px 12px 10px}\r
.cfield.get{background:rgba(255,248,230,.6)}\r
.cfield:focus-within{outline:3px solid var(--navy);outline-offset:1px}\r
.crow{display:flex;justify-content:space-between;align-items:baseline;gap:8px;font-size:13px;color:#6a5236}\r
.crow label,.crow>span:first-child{font-weight:700;color:var(--ink)}\r
.cbal{font-size:12.5px;white-space:nowrap}\r
.cin{display:flex;align-items:center;gap:10px;margin-top:4px}\r
.cin input,.cin output{flex:1;min-width:0;border:0;background:none;padding:2px 0;font:inherit;font-size:30px;font-weight:700;line-height:1.2;color:var(--ink);outline:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\r
.cin input::placeholder{color:rgba(43,26,13,.35)}\r
.ctok{flex:none;padding:4px 12px;border:2px solid var(--ink);border-radius:999px;background:#fff3c8;font-weight:700;font-size:15px}\r
.carrow{align-self:center;margin:-17px 0;z-index:1;display:grid;place-items:center;width:34px;height:34px;border:2px solid var(--ink);border-radius:50%;background:#f6e7c4;font-weight:700;font-size:17px;line-height:1}\r
.cstats{margin:0;font-size:14px}\r
.cstats dd.cbad{color:#9b2c1f}\r
.cstats dt small{font-size:11.5px;color:#7a6446}\r
.cside>.mbtn{width:100%}\r
.cswap .mbtn:disabled{opacity:.6;cursor:default}\r
.cswap .mbtn:disabled:active{transform:none;box-shadow:0 0 0 2px #0a1636,0 5px 0 2px #0a1636,inset 0 3px 0 rgba(255,255,255,.45)}\r
.cdone{color:var(--green);font-weight:700;font-size:14px}\r
.cafter{font-size:14px}\r
.cnote{width:min(480px,100%);margin-top:10px;font-size:13px;color:#6a5236;text-align:center}\r
@media (max-width:700px) and (min-height:501px),(max-width:700px) and (orientation:portrait){\r
  .mbody.castle .mleft{justify-content:flex-start}\r
  .cin input,.cin output{font-size:26px}\r
}\r
@media (orientation:landscape) and (max-height:500px){\r
  .cswap{width:100%;display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);gap:8px 16px;align-items:start;padding:10px 12px 12px}\r
  .cmain,.cside{gap:8px}\r
  .cfield{padding:6px 10px 8px}\r
  .cin input,.cin output{font-size:22px}\r
  .carrow{width:28px;height:28px;margin:-15px 0;font-size:14px}\r
  .cstats{font-size:13px}\r
  .cnote{display:none}\r
}\r
/* the Castle in the site's wood (Rafael, 20/10: "acho que o castelo poderia ser no estilo madeira do site"): the Joust\r
   Arena panel's board (src/bet/bet.css .bpanel: the header's wood in planks, its gold bevel), its gold gothic title, its\r
   dark wells with the gold ring, its gold tab for the side chosen, its red button for the one action */\r
#wmodal .mpanel.wood{--wood:#42250f;--deep:#1d130b;--well:rgba(20,10,3,.5);--wellring:rgba(240,189,69,.28);--gold:#f0bd45;--gold1:#ffe08a;--gold2:#d9a21f;\r
  --cream:#fff3d6;--muted:#e3cfa8;--win:#9be08f;--lose:#ff9a7a;--bevel:0 0 0 1px #452600,0 0 0 2px #926e3d,0 0 0 3px #d6b37f,0 0 0 4px #a1805a,0 0 0 6px #1d130b;\r
  color:var(--cream);border:0;border-radius:6px;\r
  background:repeating-linear-gradient(180deg,transparent 0 56px,rgba(16,7,0,.6) 56px 58px,rgba(255,214,150,.09) 58px 59px,transparent 59px 60px),var(--wood) url(art/ui/wood-dark.webp) 0 0/700px auto repeat;\r
  box-shadow:var(--bevel),0 12px 22px rgba(0,0,0,.5),inset 0 0 40px rgba(0,0,0,.45)}\r
#wmodal .mpanel.wood::before{display:none}\r
.mpanel.wood .mhead h1{color:var(--gold);-webkit-text-stroke:1.5px var(--deep);paint-order:stroke fill;text-shadow:0 3px 0 var(--deep)}\r
.mpanel.wood .mx{color:var(--cream)}\r
.mpanel.wood .mx:focus-visible{background:rgba(255,243,214,.14)}\r
.mpanel.wood .mcardbox.cswap{border:0;border-radius:10px;background:rgba(20,10,3,.3);box-shadow:inset 0 0 0 2px var(--wellring)}\r
.mpanel.wood .cdirs .mf{border:0;border-radius:7px;color:var(--muted);background:var(--well);box-shadow:inset 0 0 0 2px var(--wellring)}\r
.mpanel.wood .cdirs .mf.on{color:var(--deep);background:linear-gradient(var(--gold1),var(--gold2));box-shadow:0 0 0 2px var(--deep),0 3px 0 2px var(--deep)}\r
.mpanel.wood .cfield{border:0;background:var(--well);box-shadow:inset 0 0 0 2px var(--wellring)}\r
.mpanel.wood .cfield.get{background:rgba(20,10,3,.38)}\r
.mpanel.wood .cfield:focus-within{outline:3px solid var(--gold1);outline-offset:1px}\r
.mpanel.wood .crow{color:var(--muted)}\r
.mpanel.wood .crow label,.mpanel.wood .crow>span:first-child{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--gold);text-shadow:0 1px 0 var(--deep)}\r
.mpanel.wood .cin input,.mpanel.wood .cin output{color:var(--cream);text-shadow:0 1px 0 var(--deep)}\r
.mpanel.wood .cin input::placeholder{color:rgba(255,243,214,.35)}\r
.mpanel.wood .ctok,.mpanel.wood .carrow{border:0;background:#2a1a0b;color:var(--gold1);box-shadow:0 0 0 2px #d9a947,0 0 0 3.5px var(--deep)}\r
.mpanel.wood .cstats{color:var(--muted)}\r
.mpanel.wood .cstats dd{color:var(--cream)}\r
.mpanel.wood .cstats dt small{color:var(--muted);opacity:.8}\r
.mpanel.wood .cstats dd.cbad{color:var(--lose)}\r
.mpanel.wood .qlinkbtn,.mpanel.wood .qlink{color:var(--gold1)}\r
.mpanel.wood .cside .mbtn.gold,.mpanel.wood .mempty .mbtn.gold{color:#fff;text-shadow:0 2px 0 #5a1410;background:linear-gradient(#c8363c,#8e1a1f);\r
  box-shadow:0 0 0 3px #d9a947,0 0 0 5px var(--deep),inset 0 3px 0 rgba(255,255,255,.3),0 6px 0 5px var(--deep)}\r
.mpanel.wood .cside .mbtn.gold:active{box-shadow:0 0 0 3px #d9a947,0 0 0 5px var(--deep),0 2px 0 5px var(--deep)}\r
.mpanel.wood .cside .mbtn.gold small{color:#ffe2d0}\r
.mpanel.wood .cside .mbtn:disabled{opacity:1;filter:grayscale(.7) brightness(.85)}\r
.mpanel.wood .cside .mbtn:disabled:active{transform:none;box-shadow:0 0 0 3px #d9a947,0 0 0 5px var(--deep),inset 0 3px 0 rgba(255,255,255,.3),0 6px 0 5px var(--deep)}\r
.mpanel.wood .cdone{color:var(--win)}\r
.mpanel.wood .qbad{color:var(--lose)}\r
.mpanel.wood .mnote,.mpanel.wood .cnote{color:var(--muted)}\r
.mpanel.wood .mnote.cdone{color:var(--win)}\r
.mpanel.wood .mnote.qbad{color:var(--lose)}\r
.mpanel.wood .mempty{border-color:rgba(240,189,69,.4)}\r
.mpanel.wood .mempty h2{color:var(--gold);-webkit-text-stroke:1.5px var(--deep);paint-order:stroke fill;text-shadow:0 3px 0 var(--deep)}\r
/* the impact dialog on the same board */\r
.mpanel.wood .mconfirm>div{border:0;border-radius:6px;color:var(--cream);background:var(--wood) url(art/ui/wood-dark.webp) 0 0/700px auto repeat;box-shadow:var(--bevel),0 10px 20px rgba(0,0,0,.5),inset 0 0 30px rgba(0,0,0,.45)}\r
.mpanel.wood .mconfirm h2{color:var(--gold);-webkit-text-stroke:1.5px var(--deep);paint-order:stroke fill;text-shadow:0 3px 0 var(--deep)}\r
.mpanel.wood .mconfirm .mbtn.ghost{color:var(--muted);background:var(--well);box-shadow:inset 0 0 0 2px var(--wellring)}\r
.mpanel.wood .mconfirm .mbtn.danger{color:#fff;text-shadow:0 2px 0 #5a1410;background:linear-gradient(#c8363c,#8e1a1f);box-shadow:0 0 0 3px #d9a947,0 0 0 5px var(--deep),inset 0 3px 0 rgba(255,255,255,.3),0 6px 0 5px var(--deep)}\r
@media (max-width:700px) and (min-height:501px),(max-width:700px) and (orientation:portrait),(orientation:landscape) and (max-height:500px){\r
  #wmodal .mpanel.wood{border-radius:0;box-shadow:inset 0 0 40px rgba(0,0,0,.45)}\r
}\r
/* the Castle is its swap panel (Rafael, 20/10: "não precisa dessa largura toda. quero que só a parte do meio, o próprio\r
   painel de swap seja o castelo"): the board sized to the swap, not the village's big modal; the swap's own box drops\r
   its frame (the board is the frame). On a phone, a card with a margin round it, not the whole screen */\r
#wmodal .mpanel.castle{width:min(500px,calc(100% - 32px));height:auto;max-height:calc(100% - 32px)}\r
.mpanel.castle .mhead{padding:14px 16px 6px}\r
.mpanel.castle .mbody.castle{padding:2px 16px 16px}\r
.mpanel.castle .mbody.castle .mleft{padding:0}\r
.mpanel.castle .mcardbox.cswap{width:100%;padding:0;background:none;box-shadow:none}\r
.mpanel.castle .cnote{width:100%;margin-top:12px}\r
.mpanel.castle .mempty{flex:none;min-height:0;margin-top:4px;padding:22px 16px}\r
@media (max-width:700px) and (min-height:501px),(max-width:700px) and (orientation:portrait){\r
  #wmodal .mpanel.castle{left:50%;top:50%;transform:translate(-50%,-50%);width:calc(100% - 24px);height:auto;max-height:calc(100% - 24px);border-radius:6px;\r
    box-shadow:var(--bevel),0 12px 22px rgba(0,0,0,.5),inset 0 0 40px rgba(0,0,0,.45)}\r
  .mpanel.castle .mbody.castle .mleft{justify-content:flex-start}\r
}\r
@media (orientation:landscape) and (max-height:500px){\r
  #wmodal .mpanel.castle{left:50%;top:50%;transform:translate(-50%,-50%);width:min(820px,calc(100% - 24px));height:auto;max-height:calc(100% - 16px);border-radius:6px;\r
    box-shadow:var(--bevel),0 12px 22px rgba(0,0,0,.5),inset 0 0 40px rgba(0,0,0,.45)}\r
  .mpanel.castle .mhead{padding:8px 14px 4px}\r
  .mpanel.castle .mbody.castle{padding:0 14px 12px}\r
  .mpanel.castle .mcardbox.cswap{padding:0}\r
}\r
`,dt="https://app.roninchain.com/swap?outputCurrency=0xc0Ca45c2e9448D3876Ca86220B2418C719298396",dn={ronkeverse:{name:"Ronkeverse",page:c=>`https://marketplace.roninchain.com/collections/ronkeverse/${c}`}},cn="/api/ronin-market",ct=48,pn=3e4,ve={smith:{name:"The Blacksmith",tabs:[["armory","Armory"],["forge","Forge"]]},market:{name:"The Market",tabs:[["ronin","Ronin Market"],["market","Armor market"],["season","Season pass"]],go:["Buy $HORSKE","swap"]},tavern:{name:"The Tavern",tabs:[["quests","Quests"]]},castle:{name:"The Castle",tabs:[["swap","Swap"]]}},Be={armory:"smith",forge:"smith",ronin:"market",market:"market",season:"market",quests:"tavern",swap:"castle"},we=new Set(["market","season","armory","forge"]),pt=c=>(ve[c].tabs.find(([m])=>!we.has(m))||ve[c].tabs[0])[0],se=c=>c>=9?"r4":c>=7?"r3":c>=4?"r2":"r1",Le={r1:"Common",r2:"Rare",r3:"Epic",r4:"Legendary"},E=c=>String(c??"").replace(/[&<>"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[m]),be=c=>Qe.armors.find(m=>m.tier===c)||Qe.armors[0],_e=c=>c.portrait?`background-image:url(${Mt(c.portrait)})`:"",ye=c=>`${+(Math.round(c*1e4)/100).toFixed(2)}%`,Ie=c=>`+${ye(c)}`,ut=c=>c>=1e3?y(Math.round(c)):String(Math.round(c*100)/100),mt=c=>new Date(c).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"});let Je=null;function un(){if(Je==null)try{Je=!!$t().on}catch{Je=!1}return Je}function bn({room:c,player:m,quests:q,facts:B=null,door:I,place:G,onClose:u}){const n={place:Object.hasOwn(ve,G??"")?G:Object.hasOwn(Be,I??"")?Be[I]:"market",tab:I,filter:{armory:"all",forge:"all",market:"sale"},pick:{},sheet:!1,confirm:null,qty:{},price:{},rm:{key:"ronkeverse",items:[],total:0,pages:1,loading:!1,error:null,at:0},cs:{dir:"buy",text:"",exact:null,started:!1},v:0};(!ve[n.place].tabs.some(([e])=>e===n.tab)||we.has(n.tab))&&(n.tab=pt(n.place)),document.head.insertAdjacentHTML("beforeend",`<style id="web-modal">${ln}</style>`);const _=document.createElement("div");_.id="wmodal",document.body.appendChild(_);const Z=matchMedia("(max-width: 700px) and (min-height: 501px), (max-width: 700px) and (orientation: portrait)"),L=(e,t)=>window.sendAction(e,t),O=()=>{n.v++},v=un()?Ft():null,S=Et(),p=v?Pt(v):q&&B?Kt({quests:q,facts:B,cfg:S}):null,F=()=>v?v.state.address:(B==null?void 0:B.state.wallet)??null,M=(e,t={})=>{try{window.parent!==window&&window.parent.postMessage({type:e,...t},location.origin)}catch{}},j=p?Wt({provider:()=>at(),address:F,cfg:S,onDone:e=>{p.load({fresh:!0}),M("justa-wallet"),K({lock:"Locked: 100,000 HORSKE for 90 days. The quest counts.",relock:"90 more days: the quest counts.",unlock:"Unlocked: your HORSKE is back in your wallet."}[e],!0)}}):null,U={network:"Switching to Ronin…",approve:"Approve 100,000 in your wallet…",lock:"Locking…",relock:"Starting 90 more days…",unlock:"Unlocking…"},ee=()=>at(),P=sn({provider:ee,cfg:S,onDone:()=>{M("justa-wallet"),p==null||p.load({fresh:!0}),n.cs.text="",n.cs.exact=null}});v&&(v.restore().catch(()=>{}),v.loadJackpot().catch(()=>{}));function Ee(){const e=m.state,t=e.econ||null,o=t?t.season:1,s=Nt(e.xp),g=e.items||[],r=(t&&t.nfts||[]).filter(Y=>Y.season===o),a=!!(t&&t.pass),k=a?Math.max(0,H.pass.mintCap-(t.mints||0)):0,z=Y=>g.filter(w=>w.tier===Y),A=Y=>r.filter(w=>w.tier===Y);return{s:e,ec:t,season:o,lvl:s,items:g,nftsNow:r,hasPass:a,mintsLeft:k,bound:z,mine:A,owns:Y=>Y===1||A(Y).length>0,coins:t?t.horske:null,forge:e.forge||0,worn:e.armor||1}}const Xe=e=>`<span class="mchip"><i class="coin"></i>${e.coins==null?"…":y(e.coins)}</span>`,Fe=e=>`<span class="mchip"><i class="flame"></i>${y(e.forge)} <small>forge points</small></span>`,C=(e,t,o="",s="gold",g="")=>`<button class="mbtn ${s}" data-act="${t}" ${o}>${e}${g?`<small>${g}</small>`:""}</button>`,me=(e,t,o="",s="navy")=>we.has(t)?`<button class="mbtn soon" disabled aria-disabled="true">${e}<small>Soon</small></button>`:C(e,"goto",`data-tab="${t}" ${o}`,s),J=(e,t="")=>`<p class="mnote ${t}">${e}</p>`,he=({key:e,a:t,tags:o="",sub:s="",locked:g=!1,worn:d=!1,count:r=0,badge:a=""})=>{const k=t.tier,z=n.pick[n.tab]===e;return`<button class="mcard ${se(k)}${g?" lk":""}${z?" sel":""}" data-act="pick" data-key="${e}" aria-pressed="${z}">
      <span class="pic" style="${_e(t)}">${g?`<span class="lock">${g}</span>`:""}${r>1?`<span class="cnt">×${r}</span>`:""}</span>
      <span class="nm">${E(t.name)}</span><span class="sub">${s}</span>${o}${a?`<span class="badge">${a}</span>`:""}${d?'<span class="tag worn">Worn</span>':""}</button>`},te=(e,t)=>`<div class="mfilters" role="tablist">${t.map(([o,s,g])=>`<button class="mf${n.filter[e]===o?" on":""}" data-act="filter" data-f="${o}">${s}<small>${g}</small></button>`).join("")}</div>`,ie=(e,t,o)=>`<div class="mempty"><h2>${e}</h2>${J(t)}<div class="dact">${o}</div></div>`,ce=e=>`<aside class="mdet${n.sheet?" up":""}"><button class="mdx" data-act="sheet-close" aria-label="Close the details">&times;</button>${e}</aside>`;function $e(e){const t=Qe.armors.map(f=>{const b=f.tier,N=Re(b)>e.lvl,$=e.owns(b),X=e.bound(b).length;return{a:f,t:b,lock:N,have:$,mint:X,yours:$||X>0,nft:e.mine(b).length}}),o=n.filter.armory,s=t.filter(f=>o==="all"||(o==="yours"?f.yours:f.lock));(!n.pick.armory||!t.some(f=>"t"+f.t===n.pick.armory))&&(n.pick.armory="t"+e.worn);const g=s.map(f=>he({key:"t"+f.t,a:f.a,worn:e.worn===f.t,locked:f.lock?`Level ${Re(f.t)}`:!1,count:f.nft+f.mint,badge:`+${Math.round(Ve(f.t)*100)}`,sub:f.t===1?"Starter":`${Le[se(f.t)]} · tier ${f.t}`,tags:f.mint&&!f.have?'<span class="tag mint">Mint</span>':f.mint?`<span class="tag mint">+${f.mint} to mint</span>`:""})).join("")||J(o==="locked"?"Every set is open to you.":"Nothing here yet."),d=t.find(f=>"t"+f.t===n.pick.armory)||t[0],r=d.t,a=d.a,k=d.mint,z=e.mine(r);let A="";if(d.lock?A=J(`You wear this set from level ${Re(r)}. You are level ${e.lvl}: beat the bosses in the Joust Arena to level up.`,"lock"):e.worn===r?A=J("You are wearing this set.","ok"):d.have&&(A=C("Wear this set","do",`data-do="equip" data-tier="${r}"`)),k)if(!e.hasPass)A+=J("A set you win is bound to you until you mint it, and minting needs the season pass.")+me("Get the season pass","season");else if(!e.mintsLeft)A+=J(`Your pass has no mints left (${H.pass.mintCap} used).`);else{const f=Math.max(1,Math.min(k,e.mintsLeft)),b=Math.min(f,n.qty[r]||1);A+=(f>1?`<div class="mqty"><button data-act="qty" data-tier="${r}" data-d="-1" aria-label="One less">−</button><b>${b}</b><button data-act="qty" data-tier="${r}" data-d="1" aria-label="One more">+</button><span>of ${k} to mint</span></div>`:"")+C(d.lock?b>1?`Mint ${b}`:"Mint":b>1?`Mint ${b} to wear`:"Mint to wear","ask",`data-ask="mint" data-tier="${r}" data-n="${b}"`,"gold",`${y(H.mintPrice*b)} coins`)}!d.lock&&!d.have&&!k&&r!==1&&(A+=J("Not yours yet: win it from a boss in the Joust Arena, forge it at the forge, or buy one in the market.")+me("See the market","market"));const x=z.length?`<div class="mlist"><b>Your NFTs of this set</b>${z.map(f=>`<div class="mli"><span>NFT #${f.id}${f.listing?` · on sale for ${y(f.price)}`:""}</span>${f.listing?C("Cancel sale","do",`data-do="unlist" data-id="${f.listing}"`,"ghost"):me("Sell","market",`data-f="sell" data-key="n${f.id}"`,"ghost")}</div>`).join("")}</div>`:"",Y=ce(`<div class="dpic ${se(r)}" style="${_e(a)}"></div><div class="dinfo"><h2>${E(a.name)}</h2>
      <p class="dsub">${r===1?"The starter":`${Le[se(r)]} set · tier ${r}`}${d.nft+k?` · you own ${d.nft+k}`:""}</p>
      <dl class="dstats"><dt>Set bonus</dt><dd>+${Math.round(Ve(r)*100)}</dd><dt>Hit bonus</dt><dd>+${ye(a.bonus||0)}</dd><dt>Defense</dt><dd>+${ye(a.def||0)}</dd><dt>Wear at</dt><dd>Level ${Re(r)}</dd></dl></div>
      <div class="dact">${A}${x}</div>`),w=t.filter(f=>f.yours).length,R=t.filter(f=>f.lock).length;return`<div class="mbody"><div class="mleft">${te("armory",[["all","All",t.length],["yours","Yours",w],["locked","Locked",R]])}<div class="mgrid">${g}</div></div>${Y}</div>`}function fe(e){const t=e.nftsNow.filter(x=>!x.listing),o={};t.forEach(x=>(o[x.tier]=o[x.tier]||[]).push(x));const s=Qe.armors.filter(x=>x.tier>=2).map(x=>({a:x,t:x.tier,cost:Ce(x.tier),melt:o[x.tier]||[]})),g=n.filter.forge,d=s.filter(x=>g==="all"||(g==="melt"?x.melt.length:e.forge>=x.cost));(!n.pick.forge||!s.some(x=>"t"+x.t===n.pick.forge))&&(n.pick.forge="t"+(s.find(x=>x.melt.length)||s.find(x=>e.forge>=x.cost)||s[0]).t);const r=d.map(x=>he({key:"t"+x.t,a:x.a,count:x.melt.length,sub:`Forge for ${y(x.cost)} pt${x.cost===1?"":"s"}`,tags:x.melt.length?`<span class="tag melt">Melt +${y(x.cost)}</span>`:"",badge:e.forge>=x.cost?"✓":""})).join("")||J(g==="melt"?"Nothing to melt: only NFTs melt, and a set you win is minted first (the season pass).":"No set within your points yet."),a=s.find(x=>"t"+x.t===n.pick.forge)||s[0];let z=e.forge>=a.cost?C(`Forge ${E(a.a.name)}`,"ask",`data-ask="forge" data-tier="${a.t}"`,"gold",`${y(a.cost)} forge point${a.cost===1?"":"s"}`):J(`It takes ${y(a.cost)} forge point${a.cost===1?"":"s"} and you have ${y(e.forge)}. Melt NFTs to get points.`);a.melt.length&&(z+=C(`Melt one${a.melt.length>1?` of ${a.melt.length}`:""}`,"ask",`data-ask="burn" data-tier="${a.t}" data-id="${a.melt[0].id}"`,"danger",`+${y(a.cost)} forge point${a.cost===1?"":"s"}`));const A=ce(`<div class="dpic ${se(a.t)}" style="${_e(a.a)}"></div><div class="dinfo"><h2>${E(a.a.name)}</h2>
      <p class="dsub">${Le[se(a.t)]} set · tier ${a.t}</p>
      <dl class="dstats"><dt>Forge cost</dt><dd>${y(a.cost)} pt${a.cost===1?"":"s"}</dd><dt>A melt gives</dt><dd>+${y(a.cost)} pt${a.cost===1?"":"s"}</dd><dt>Wear at</dt><dd>Level ${Re(a.t)}</dd><dt>Yours to melt</dt><dd>${a.melt.length}</dd></dl></div>
      <div class="dact">${z}</div>`);return`<div class="mbody"><div class="mleft"><p class="mlead">Melt your NFTs into forge points, and forge any set with them. A tier is worth twice the one below.</p>
      ${te("forge",[["all","All sets",s.length],["melt","Yours to melt",s.filter(x=>x.melt.length).length],["can","Within your points",s.filter(x=>e.forge>=x.cost).length]])}<div class="mgrid">${r}</div></div>${A}</div>`}function je(e){const t=e.ec&&e.ec.market||[],o=m.userId,s=e.nftsNow.filter(w=>!w.listing),g=n.filter.market,d=t.filter(w=>g==="mine"?w.seller===o:!0),r=e.ec&&e.ec.trades||{n:0,vol:0};let a,k="";const z=`<p class="mlead">${t.length} for sale · ${r.n} sold · ${y(r.vol)} traded · ${H.royalty}% of every sale goes to the prize pool</p>
      ${te("market",[["sale","For sale",t.length],["mine","Your listings",t.filter(w=>w.seller===o).length],["sell","Sell yours",s.length]])}`,A=me("Go to the armory","armory"),x=C("Sell one of yours","filter",'data-f="sell"',"gold"),Y=(w,R,f)=>`<div class="mbody solo"><div class="mleft">${z}${ie(w,R,f)}</div></div>`;if(g==="sell"&&!s.length)return Y("Nothing to sell","A set you win is bound to you until you mint it, and minting needs the season pass.",A+(e.hasPass?"":me("Get the season pass","season","","gold")));if(g!=="sell"&&!d.length)return Y(g==="mine"?"Nothing of yours on sale":"Nothing on sale yet",g==="mine"?"List one of your NFTs and it shows here.":"Mint a set at the Blacksmith and be the first to list one.",s.length?x:A);if(g==="sell"){(!n.pick.market||!s.some(R=>"n"+R.id===n.pick.market))&&(n.pick.market=s[0]?"n"+s[0].id:null),a=s.map(R=>he({key:"n"+R.id,a:be(R.tier),sub:`NFT #${R.id}`,badge:""})).join("");const w=s.find(R=>"n"+R.id===n.pick.market);if(w){const R=be(w.tier),f=t.filter($=>$.tier===w.tier).reduce(($,X)=>Math.min($,X.price),1/0),b=n.price[w.id]??"",N=[f<1/0?f:null,Ce(w.tier)*5e3,H.mintPrice*2].filter(($,X,ae)=>$&&ae.indexOf($)===X).slice(0,3);k=ce(`<div class="dpic ${se(w.tier)}" style="${_e(R)}"></div><div class="dinfo"><h2>${E(R.name)}</h2><p class="dsub">NFT #${w.id} · ${Le[se(w.tier)]}</p>
          <dl class="dstats"><dt>Cheapest on sale</dt><dd>${f<1/0?y(f):"none"}</dd><dt>Royalty</dt><dd>${H.royalty}% to the pool</dd></dl></div>
          <div class="dact"><label class="mprice">Your price<input id="mprice" data-nft="${w.id}" type="number" min="1" step="1" inputmode="numeric" value="${E(b)}" placeholder="0"><span>coins</span></label>
          ${N.length?`<div class="msugg">${N.map($=>`<button data-act="price" data-nft="${w.id}" data-v="${$}">${y($)}</button>`).join("")}</div>`:""}
          ${C("List for sale","ask",`data-ask="list" data-id="${w.id}"`,"gold",b?`${y(+b)} coins`:"")}</div>`)}}else{(!n.pick.market||!d.some(R=>"l"+R.id===n.pick.market))&&(n.pick.market=d[0]?"l"+d[0].id:null),a=d.map(R=>he({key:"l"+R.id,a:be(R.tier),sub:`<i class="coin"></i>${y(R.price)}`,tags:R.seller===o?'<span class="tag worn">Yours</span>':""})).join("");const w=d.find(R=>"l"+R.id===n.pick.market);if(w){const R=be(w.tier),f=w.seller===o,b=(e.coins||0)>=w.price,N=f?C("Cancel the sale","do",`data-do="unlist" data-id="${w.id}"`,"navy"):b?C("Buy","ask",`data-ask="buy" data-id="${w.id}"`,"gold",`${y(w.price)} coins`):J(`It costs ${y(w.price)} and you have ${y(e.coins||0)}.`)+C("Buy $HORSKE","link",`data-href="${dt}"`,"navy");k=ce(`<div class="dpic ${se(w.tier)}" style="${_e(R)}"></div><div class="dinfo"><h2>${E(R.name)}</h2><p class="dsub">${f?"Your listing":`Sold by ${E(w.name||"a knight")}`} · ${Le[se(w.tier)]}</p>
          <dl class="dstats"><dt>Price</dt><dd>${y(w.price)}</dd><dt>Set bonus</dt><dd>+${Math.round(Ve(w.tier)*100)}</dd><dt>Wear at</dt><dd>Level ${Re(w.tier)}</dd></dl></div><div class="dact">${N}</div>`)}}return`<div class="mbody"><div class="mleft">${z}<div class="mgrid">${a}</div></div>${k}</div>`}function De(e){const t=e.ec,o=t&&t.pool||{pass:0,mint:0,royalty:0,pod:0,paid:0},s=o.pass+o.mint+o.royalty+o.pod,g=(R,f)=>`<div class="pbar"><span>${R}</span><i><b style="width:${s?Math.round(f/s*100):0}%"></b></i><em>${y(f)}</em></div>`,d=[["Ranked jousts","free, against other knights' ghosts; Elo shares the prize pool"],["Mint your sets",`${y(H.mintPrice)} each, up to ${H.pass.mintCap}, all to the prize pool`],[`${H.pass.freeRuns} free bouts a day`,`instead of ${H.freeRuns}`],[`×${H.pass.dropMult} drop chance`,"from every boss"]],r=e.s,a=r.fake||{ronkeverse:0,oneOfOne:0},k=a.colored||0,z=(R,f,b)=>`<button class="mbtn ghost sm" data-act="do" data-do="fake" data-r="${Math.max(0,R)}" data-o="${Math.max(0,f)}" data-c="${k}" data-rarest="${E(a.rarest||"")}">${b}</button>`,A=`<section class="mcardbox pass"><h3>Season ${e.season} pass</h3>
      <ul class="perks">${d.map(([R,f])=>`<li><b>${R}</b><span>${f}</span></li>`).join("")}</ul>
      ${e.hasPass?J(`✓ Yours · ${t.mints}/${H.pass.mintCap} mints used`,"ok"):`${C("Buy the pass","ask",'data-ask="buyPass"',"gold",`${y(H.pass.price)} coins`)}${J(`${Math.round(H.pass.toPool*100)}% of the price goes to the prize pool.`)}`}</section>`,x=`<section class="mcardbox"><h3>Prize pool</h3><p class="big"><i class="coin"></i>${y(s-o.paid)}</p>
      ${g("Passes",o.pass)}${g("Mints",o.mint)}${g("Royalties",o.royalty)}${g("PoD",o.pod)}
      ${J(`At the season's end the top ${Math.round(H.payoutShare*100)}% of ranked knights share it, more for a higher place.`)}</section>`,Y=`<section class="mcardbox"><h3>How the season works</h3><ol class="how"><li>Joust the bosses to level up (0 to 20); a win can drop a set.</li><li>A set that drops is minted (season pass) before you wear it or sell it here.</li><li>Climb ranked: at the season's end the top ${Math.round(H.payoutShare*100)}% share the prize pool.</li></ol>${J("Play money for now: the coins, the pass and the NFTs here are not on a chain yet.")}</section>`,w=r.tools?`<section class="mcardbox tools"><h3>Test tools · play money</h3>
      <div class="trow"><span>Ronkeverse NFTs</span>${z(a.ronkeverse-5,a.oneOfOne,"−5")}<b>${a.ronkeverse}</b>${z(a.ronkeverse+5,a.oneOfOne,"+5")}</div>
      <div class="trow"><span>1/1 NFTs</span>${z(a.ronkeverse,a.oneOfOne-1,"−1")}<b>${a.oneOfOne}</b>${z(a.ronkeverse,a.oneOfOne+1,"+1")}</div>
      <div class="trow">${C(`+${y(H.faucet)} coins`,"do",'data-do="faucet"',"gold sm")}${C("Refresh","do",'data-do="sync"',"navy sm")}${C("Reset my season","ask",'data-ask="resetMe"',"ghost sm")}</div></section>`:"";return`<div class="mbody season"><div class="scol">${A}${Y}</div><div class="scol">${x}${w}</div></div>`}const Ne=e=>new Date(e*1e3).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}),le=e=>e==null?0:Number(BigInt(e)/10n**18n);function qe(e){var f;const t=p.state,o=p.view(),s=F(),g=(v?v.state.busy:t.busy)==="connect",d=b=>`<div class="mbody solo"><div class="mleft">${b}</div></div>`;if(!s)return p.local&&!t.ready?d(`<div class="mempty"><span class="rspin"></span>${J("Reading your wallet…")}</div>`):d(ie("Connect your wallet",p.local?"Your quests are checked on Ronin for the wallet you connect.":"The house checks your quests on the chain for the wallet you connect.",C(g?"Waiting for your wallet…":"Connect Ronin Wallet","qconnect","","gold")));if(!o)return((f=t.error)==null?void 0:f.code)==="signin_needed"?d(ie("Sign in to see your quests","One signature in your wallet, no transaction: the house then checks your quests for this wallet.",C(t.busy?"Waiting for your wallet…":"Sign in","qsignin","","gold"))):t.error&&!t.busy?d(ie("The house did not answer",E(t.error.message),C("Try again","qreload","","gold"))):d(`<div class="mempty"><span class="rspin"></span>${J(p.local?"Reading your quests on Ronin…":"Reading your quests from the house…")}</div>`);const r=v?v.jackpotUsd():null,a=o.code,k=b=>{var He,We;if(!((j==null?void 0:j.ready())&&o.lockAddress&&o.lockAddress.toLowerCase()===String(S.lock).toLowerCase()))return b?`<span class="qok">✓ ${y(le((He=o.lock)==null?void 0:He.amount))} locked</span><small>until ${Ne(o.lock.until)}</small>`:'<span class="qsoon">Opens soon</span><small>the lock goes live on Ronin</small>';const $=j.state,X=$.info;if($.busy)return`<span class="qsoon">${U[$.step]||"Working…"}</span>${$.hash&&ze(S,$.hash)?`<a class="qlink" href="${E(ze(S,$.hash))}" target="_blank" rel="noopener">see it on Ronin ↗</a>`:""}`;if(!X||X.wallet!==String(s).toLowerCase())return $.reading||($.reading=!0,j.read().catch(()=>{}).finally(()=>{$.reading=!1})),b?`<span class="qok">✓ ${y(le((We=o.lock)==null?void 0:We.amount))} locked</span><small>until ${Ne(o.lock.until)}</small>`:'<span class="qsoon">Reading your lock…</span>';const ae=j.status();return ae==="open"?`<span class="qbtns">${C("Relock","qrelock","","gold sm")}${C("Unlock","qunlock","","ghost sm")}</span><small>your 90 days are up</small>`:b||ae==="locked"?`<span class="qok">✓ ${y(le(X.amount))} locked</span><small>until ${Ne(X.unlockAt)}</small>`:ae==="short"?`<span class="qsoon">You hold ${y(le(X.balance))}</span><button class="qlinkbtn" data-act="goto" data-tab="swap">Get HORSKE at the Castle</button>`:`${C(`Lock ${y(le(de))}`,"qlock","","gold sm")}<small>${X.allowance>=de?"one signature":"approve, then lock"}</small>`},z=(b,N)=>{if(b==="checkin")return N?'<span class="qok">✓ Done today</span>':C(t.busy==="checkin"?"Checking in…":"Check in","qcheckin","","gold sm");if(b==="xpost")return N?`<span class="qok">✓ Posted today</span>${o.post?`<a class="qlink" href="${E(o.post)}" target="_blank" rel="noopener">see the post ↗</a>`:""}`:`<a class="mbtn gold sm" href="${E(Lt(r!=null&&r>=1?r:null,a))}" target="_blank" rel="noopener">Post on X<span class="vh"> (opens X in a new tab)</span></a>`;if(b==="lock")return k(N);if(b==="weekly")return N?`<span class="qok">✓ ${y(le(o.boughtWeek))} this week</span>`:o.buysFailed?'<span class="qsoon">Not read</span>':!o.buysReady||o.boughtWeek==null?'<span class="qsoon">Counting your buys…</span>':`<span class="qprog"><b>${y(Math.min(1e4,le(o.boughtWeek)))}</b>/10,000</span><button class="qlinkbtn" data-act="goto" data-tab="swap">Buy at the Castle</button>`;if(b==="bouts"){const $=o.bouts||{today:0},X=`${Math.min(xe,$.today)}/${xe} today`;return N?`<span class="qok">✓ Active today</span><small>${$.today>=xe?`${X}: tomorrow too`:`${X}, for tomorrow`}</small>`:`<span class="qprog"><b>${Math.min(xe,$.today)}/${xe}</b> today</span><small>${$.today>=xe?"counts tomorrow":"for tomorrow"}</small>`}return N?`<span class="qok">✓ ${y(o.ronkes)} Ronke${o.ronkes===1?"":"s"}</span>`:o.ronkes==null?'<span class="qsoon">Not read yet</span>':'<button class="mbtn ghost sm" data-act="goto" data-tab="ronin">Get a Ronke</button>'},A=Ze.map(b=>{var ae;const N=!!o.on[b.id],$=b.id==="xpost"&&!N&&a?`${b.text.split(":")[0]}: make a new post with your code ${a}, then paste its link here.`:b.id==="lock"?"Lock 100,000 HORSKE for 90 days. The bonus holds while it stays locked.":b.id==="bouts"&&N?`You bet ${y(((ae=o.bouts)==null?void 0:ae.yesterday)??0)} times yesterday, so the bonus is on today. Bet ${xe} times today to keep it tomorrow.`:b.text,X=b.id==="xpost"&&!N?`<div class="qx"><input id="qxurl" type="url" inputmode="url" placeholder="https://x.com/you/status/…" aria-label="Your post's link" value="${E(n.qx||"")}"><button class="mbtn navy sm" data-act="qxcheck">${t.busy==="post"?"Checking…":"Check"}</button></div>`:"";return`<li class="qrow${N?" on":""}"><span class="qseal" aria-hidden="true">${N?"✓":"+"}</span>
        <span class="qtxt"><b>${E(b.name)}</b><small>${E($)}</small></span><span class="qside">${z(b.id,N)}</span>${X}</li>`}).join(""),x=`<section class="mcardbox"><h3>Quests</h3><p class="mlead">All ${Ze.length} together add ${Ie(_t)} to your chance in Fight the house. ${p.local?"Each one is checked on Ronin.":"The house checks each one on the chain."}</p><ul class="qlist">${A}</ul>
      <p class="mnote qnote">${t.error?`<b class="qbad">${E(t.error.message)}</b> `:""}Checked at ${mt(t.at)} · <button class="qlinkbtn" data-act="qfresh">${t.busy==="load"?"Reading…":"Read again"}</button></p></section>`,Y=p.chance(),w=o.rank==null?null:At.filter(b=>b.rank&&o.rank<=b.rank).sort((b,N)=>b.rank-N.rank)[0]??null,R=`<section class="mcardbox pass"><h3>Your chance today</h3>
      <p class="big qbig">${ye(Y.lo)} <small>to</small> ${ye(Y.hi)}</p>
      <dl class="dstats"><dt>Everyone</dt><dd>${ye(Ct)}</dd><dt>Quests (${o.n} of ${Ze.length})</dt><dd>${Ie(o.questBps/1e4)}</dd>
        <dt>Ronke Score${o.rank!=null?` (rank ${y(o.rank)}${w?`, ${E(w.name)}`:""})`:o.rankFailed?" (not read)":""}</dt><dd>${Ie(o.scoreBps/1e4)}</dd><dt>Perfect taps</dt><dd>up to +3%</dd></dl>
      ${o.questBps+o.scoreBps>o.maxExtraBps?`<p class="mnote qnote">The arena takes up to ${Ie(o.maxExtraBps/1e4)} from the quests and the Ronke Score together.</p>`:""}
      <p class="mnote qnote">Ronke Score is your wallet's rank on ronkeverse.com/score: top 69 +1.5%, top 100 +1%, top 200 +0.75%, top 500 +0.5%. ${p.local?"Your bonus counts in every bet.":"The house signs your bonus into each bet."} Your chance never goes above ${ye(Bt)}. A win pays 2x.</p></section>`;return`<div class="mbody season tavern"><div class="scol">${x}</div><div class="scol">${R}</div></div>`}function Ye(e){return p?qe():`<div class="mbody solo"><div class="mleft">${J("The quests run with the site's rules (not with ?spawn).")}</div></div>`}function i(e,t){if(e==null)return"…";const o=Number(e)/1e18;return o.toLocaleString("en-US",{maximumFractionDigits:t==="RON"?o>=100?2:4:o>=1e3?0:o>=1?2:4})}const l=()=>n.cs.exact&&n.cs.exact.text===n.cs.text?n.cs.exact.wei:tn(n.cs.text);let h=0;const T=(e=300)=>{clearTimeout(h),h=setTimeout(()=>P.quote(n.cs.dir,l()),e)};setInterval(()=>{var e;n.tab!=="swap"||document.visibilityState!=="visible"||P.state.busy||n.confirm||!P.ready()||(l()!=null&&P.quote(n.cs.dir,l()),P.state.account&&Date.now()-(((e=P.state.info)==null?void 0:e.at)||0)>3e4&&P.read().catch(()=>{}))},15e3);const Q={network:"Switching to Ronin…",approve:"Approve the HORSKE in your wallet…",price:"Reading the price…"};function V(){const e=re=>`<div class="mbody solo castle"><div class="mleft">${re}</div></div>`;if(!P.ready())return e(ie("Opens soon","The Castle's swap goes live on Ronin soon. Until then, Katana swaps RON for HORSKE.",`<a class="mbtn gold" href="${dt}" target="_blank" rel="noopener">Swap on Katana<span class="vh"> (opens a new tab)</span></a>`));n.cs.started||(n.cs.started=!0,P.restore());const t=P.state,o=n.cs,s=o.dir==="buy",g=s?"RON":"HORSKE",d=s?"HORSKE":"RON",r=l(),a=t.info&&t.account&&t.info.wallet===t.account.toLowerCase()?t.info:null,k=a?s?a.ron:a.horske:null,z=t.quote&&t.quote.dir===o.dir&&r!=null&&t.quote.amount===r?t.quote:null,A=z&&z.out!=null?z.out:null,x=A==null?null:s?Number(A)/Number(r):Number(r)/Number(A),Y=A==null?null:A*(10000n-nt)/10000n,w=(z==null?void 0:z.impactBps)||0,R=re=>re&&ze(S,re)?` <a class="qlink" href="${E(ze(S,re))}" target="_blank" rel="noopener">see it on Ronin ↗</a>`:"",f=R(t.hash),b=String(o.text||"").trim(),N=(re,Ge="")=>`<button class="mbtn gold" disabled>${re}${Ge?`<small>${Ge}</small>`:""}</button>`;let $;ee()?t.busy?$=N(t.busy==="connect"?"Waiting for your wallet…":t.step==="buy"||t.step==="sell"?t.hash?t.step==="buy"?"Buying…":"Selling…":`Confirm the ${t.step==="buy"?"buy":"sale"} in your wallet…`:Q[t.step]||"Working…"):P.pendingFor(t.account)?$=N("Waiting for your last swap…","it can still go through"):t.account?en(b)?$=N(`Type ${E(b.replace(",","."))} or ${E(b.replace(",",""))}`,"a comma could be either"):r==null?$=N("Type an amount"):a&&s&&r+gt>a.ron?$=N(r>a.ron?"Not enough RON":"Leave a little RON for the gas"):a&&!s&&r>a.horske?$=N("Not enough HORSKE"):z?A==null?$=N(E(z.error||"The price did not load")):z.impactBps==null?$=N("The price impact did not load","it is read again in a moment"):w>xt?$=N("Price impact over 15%","try a smaller amount"):s?$=C("Buy HORSKE","cgo","","gold"):$=a&&a.allowance<r?C("Approve and sell","cgo","","gold","two signatures in your wallet"):C("Sell HORSKE","cgo","","gold"):$=N("Reading the price…"):$=t.restoring?N("Reading your wallet…"):C("Connect Ronin Wallet","cconnect","","gold"):$='<a class="mbtn gold" href="https://wallet.roninchain.com" target="_blank" rel="noopener">Get the Ronin Wallet<span class="vh"> (opens a new tab)</span></a>';const X=t.done&&Date.now()-t.done.at<12e4?`<p class="mnote cdone">✓ ${t.done.dir==="buy"?`Bought ${i(t.done.out,"HORSKE")} HORSKE`:`Sold for ${i(t.done.out,"RON")} RON`}${ze(S,t.done.hash)?` · <a class="qlink" href="${E(ze(S,t.done.hash))}" target="_blank" rel="noopener">see it on Ronin ↗</a>`:""}</p>`:"",ae=P.pendingFor(t.account),He=t.busy?f?`<p class="mnote cafter">${f.trim()}</p>`:"":ae?`<p class="mnote cafter">${R(ae.hash).trim()}${R(ae.hash)?" · ":""}<button class="qlinkbtn" data-act="cdismiss">I checked my wallet</button></p>`:t.error?`<p class="mnote cafter qbad">${E(t.error.message)}${R(t.error.hash)}</p>`:X,We=a&&!t.busy&&!ae?' · <button class="qlinkbtn" data-act="cmax">Max</button>':"",kt=[["buy","Buy HORSKE"],["sell","Sell HORSKE"]].map(([re,Ge])=>`<button class="mf${o.dir===re?" on":""}" data-act="cdir" data-dir="${re}" aria-pressed="${o.dir===re}"${t.busy?" disabled":""}>${Ge}</button>`).join("");return e(`<section class="mcardbox cswap" aria-label="Swap RON and HORSKE">
      <div class="cmain">
        <div class="qseg cdirs" role="group" aria-label="Buy or sell HORSKE">${kt}</div>
        <div class="cfield"><div class="crow"><label for="cpay">You pay</label><span class="cbal" id="cbal">${k==null?"":`Balance ${i(k,g)} ${g}`}${We}</span></div>
          <div class="cin"><input id="cpay" type="text" inputmode="decimal" autocomplete="off" spellcheck="false" placeholder="0" aria-describedby="cbal" value="${E(o.text)}"${t.busy?" disabled":""}><span class="ctok">${g}</span></div></div>
        <span class="carrow" aria-hidden="true">↓</span>
        <div class="cfield get"><div class="crow"><span>You get</span>${t.quoting?'<span class="cbal">reading the price…</span>':""}</div>
          <div class="cin"><output id="cget" for="cpay" aria-live="polite">${A==null?r==null?"0":"…":i(A,d)}</output><span class="ctok">${d}</span></div></div>
      </div>
      <div class="cside">
        <dl class="dstats cstats"><dt>Price</dt><dd>${x==null?"…":`1 RON ≈ ${x.toLocaleString("en-US",{maximumFractionDigits:x>=100?0:2})} HORSKE`}</dd>
          <dt>You get at least</dt><dd>${Y==null?"…":`${i(Y,d)} ${d}`}</dd>
          ${w>=100?`<dt>Price impact</dt><dd${w>=500?' class="cbad"':""}>${(w/100).toFixed(w>=1e3?0:1)}%</dd>`:""}
          <dt>Route <small>(the better of 2)</small></dt><dd>${!z||A==null?"…":z.route===1?s?"RON → HORSKE":"HORSKE → RON":s?"RON → RONKE → HORSKE":"HORSKE → RONKE → RON"}</dd>
          <dt>Fees</dt><dd>${!z||A==null?"…":`Katana ${z.route===1?"1%":"1.3%"}`} · the Castle 0%</dd></dl>
        ${$}
        ${He}
      </div>
    </section>
    <p class="mnote cnote">One transaction on Katana's pools, on Ronin. The price can move up to 1% before it goes through; past that it is refused and nothing is spent but the gas.</p>`)}function ne(e,t,o){const s=+t.dataset.tier,g=s?be(s):null;if(e==="mint"){const d=+t.dataset.n||1;return{title:`Mint ${d>1?d+" × ":""}${g.name}?`,text:`It costs ${y(H.mintPrice*d)} coins (you have ${y(o.coins||0)}), all of it to the prize pool. A minted set is an NFT: you can wear it or sell it.`,cta:"Mint",run:()=>L("mint",{mint:{tier:s,n:d}})}}if(e==="forge")return{title:`Forge ${g.name}?`,text:`It costs ${y(Ce(s))} forge points (you have ${y(o.forge)}). The set is bound to you; mint it to wear or sell it.`,cta:"Forge",run:()=>L("forge",{forge:s})};if(e==="burn"){const d=+t.dataset.id;return{title:`Melt ${g.name} #${d}?`,text:`The NFT is destroyed and you get ${y(Ce(s))} forge point${Ce(s)===1?"":"s"}. This can't be undone.`,cta:"Melt it",danger:!0,run:()=>L("burn",{burn:{nft:d}})}}if(e==="buy"){const d=+t.dataset.id,r=(o.ec&&o.ec.market||[]).find(a=>a.id===d);return r&&{title:`Buy ${be(r.tier).name}?`,text:`It costs ${y(r.price)} coins (you have ${y(o.coins||0)}). The NFT is yours at once.`,cta:"Buy",run:()=>L("buy",{buy:d})}}if(e==="list"){const d=+t.dataset.id,r=o.nftsNow.find(k=>k.id===d),a=Math.round(+(n.price[d]||0));return a>0?{title:`List ${be(r.tier).name} #${d} for ${y(a)}?`,text:`When it sells you get ${y(a-Math.floor(a*H.royalty/100))} coins; ${H.royalty}% goes to the prize pool. You can cancel the sale while it's listed.`,cta:"List it",run:()=>L("list",{list:{nft:d,price:a}})}:(K("Type your price first."),null)}return e==="buyPass"?{title:`Buy the season ${o.season} pass?`,text:`It costs ${y(H.pass.price)} coins (you have ${y(o.coins||0)}). ${Math.round(H.pass.toPool*100)}% goes to the prize pool.`,cta:"Buy the pass",run:()=>L("buyPass")}:e==="resetMe"?{title:"Reset your season?",text:"Your level, sets, NFTs and coins start over. Play money only.",cta:"Reset",danger:!0,run:()=>L("resetMe")}:null}async function oe(){const e=n.rm;if(!e.loading){e.loading=!0,O();try{const t=[];let o=0;for(let s=0;s<e.pages;s++){const g=await fetch(`${cn}?collection=${e.key}&from=${s*ct}&size=${ct}`);if(!g.ok)throw new Error("HTTP "+g.status);const d=await g.json();if(o=d.total,t.push(...d.items),t.length>=o||!d.items.length)break}e.items=t,e.total=o,e.at=Date.now(),e.error=null}catch(t){e.error=String((t==null?void 0:t.message)||t)}e.loading=!1,O()}}setInterval(()=>{n.tab==="ronin"&&document.visibilityState==="visible"&&oe()},pn);const ge=(e="")=>`<span class="mchip live${e?" "+e:""}"><i class="dot"></i>Live${n.rm.at?` <small>${mt(n.rm.at)}</small>`:""}</span>`;function Ke(){const e=n.rm,t=dn[e.key];!e.at&&!e.loading&&!e.error&&queueMicrotask(oe);const o=`<div class="mleadrow"><p class="mlead">Live from the Ronin Market: ${t.name} for sale, cheapest first, refreshed every 30 s. A card opens it on the market.</p>${ge()}</div>
      <div class="mfilters" role="tablist"><button class="mf on" data-act="rcol" data-k="${e.key}">${t.name}<small>${e.total?y(e.total):""}</small></button></div>`;if(!e.items.length)return`<div class="mbody solo"><div class="mleft">${o}${e.error?ie("The Ronin Market did not answer","Try again in a moment.",C("Try again","rload","","gold")):`<div class="mempty"><span class="rspin"></span>${J("Opening the Ronin Market…")}</div>`}</div></div>`;const s=e.items.map(d=>`<a class="mcard rcard" href="${t.page(encodeURIComponent(d.id))}" target="_blank" rel="noopener" aria-label="${E(d.name)}, ${ut(d.price)} ${E(d.symbol)}, on the Ronin Market (opens a new tab)">
      <span class="pic" style="background-image:url('${E(String(d.image).replace(/([?&])w=\d+/,"$1w=300"))}')"></span>
      <span class="nm">${E(String(d.name).replace(/^.*?#/,"#"))}</span><span class="sub rp">${ut(d.price)}<small>${E(d.symbol)}</small></span>${d.body?`<span class="sub">${E(d.body)}</span>`:""}</a>`).join(""),g=e.items.length<e.total?`<div class="rmore">${C(e.loading?"Loading…":`Show more (${y(e.total-e.items.length)} left)`,"rmore","","ghost")}</div>`:"";return`<div class="mbody solo"><div class="mleft">${o}<div class="mgrid rgrid">${s}${g}</div></div></div>`}let D=null;function K(e,t=!1){D={text:e,ok:t,until:performance.now()+3200},O()}function Se(){const e=Ee(),t=ve[n.place],o=we.has(n.tab)?`<div class="mbody solo"><div class="mleft">${ie("Soon",`${E(t.name)} opens soon.`,"")}</div></div>`:n.tab==="armory"?$e(e):n.tab==="forge"?fe(e):n.tab==="ronin"?Ke():n.tab==="market"?je(e):n.tab==="quests"?Ye():n.tab==="swap"?V():De(e),s=n.tab==="quests"?p?p.view()?{bonus:p.chance().extra}:null:q?q.view():null:null,g=n.tab==="forge"?Fe(e):n.tab==="ronin"?ge("hlive"):s?`<span class="mchip qchip">${Ie(s.bonus)} <small>to your chance</small></span>`:n.tab==="quests"&&p||n.tab==="swap"?"":Xe(e),d=e.s.toast&&c.nowMs-e.s.toast.at<5e3?{text:e.s.toast.text,ok:e.s.toast.ok}:D&&performance.now()<D.until?D:null,r=n.confirm;return`<div class="mback" data-act="close"></div>
      <div class="mpanel${e.s.busy?" busy":""}${n.place==="castle"?" wood castle":""}${n.place==="tavern"?" tavern-bg":""}" role="dialog" aria-modal="true" aria-labelledby="mtitle" tabindex="-1">
        <header class="mhead${n.tab==="ronin"||n.tab==="swap"?" nochip":""}"><h1 id="mtitle">${t.name}</h1>
          ${t.tabs.length>1?`<nav class="mtabs" role="tablist">${t.tabs.map(([a,k])=>we.has(a)?`<button role="tab" aria-selected="false" aria-disabled="true" class="soon" disabled>${k}<small>Soon</small></button>`:`<button role="tab" aria-selected="${n.tab===a}" class="${n.tab===a?"on":""}" data-act="tab" data-tab="${a}">${k}</button>`).join("")}</nav>`:""}
          ${t.link?`<a class="mlink" href="${t.link[1]}" target="_blank" rel="noopener">${t.link[0]}<span aria-hidden="true">↗</span><span class="vh"> (opens a new tab)</span></a>`:""}
          ${t.go?`<button class="mlink" data-act="goto" data-tab="${t.go[1]}">${t.go[0]}</button>`:""}
          ${g}<button class="mx" data-act="close" aria-label="Close">&times;</button></header>
        ${d?`<div class="mtoast${d.ok===!1?" bad":""}" role="status">${E(d.text)}</div>`:""}
        ${o}
        ${e.s.busy?'<div class="mwait"><span></span></div>':""}
        ${r?`<div class="mconfirm" role="alertdialog" aria-modal="true" aria-labelledby="mctitle"><div><h2 id="mctitle">${E(r.title)}</h2><p>${E(r.text)}</p>
          <div class="mcbtns">${C(E(r.cta),"yes","",r.danger?"danger":"gold")}${C("Cancel","no","","ghost")}</div></div></div>`:""}
      </div>`}let Me="";function pe(){var r,a;const e=m.state,t=D&&performance.now()<D.until,o=n.tab==="quests"&&q&&!p?q.view():null,s=n.tab==="quests"&&p?[JSON.stringify(p.view()),p.state.v,F(),v?v.state.busy:p.state.busy,v?v.jackpotUsd():"",j?j.state.v:0].join(","):"",g=n.tab==="swap"?[P.state.v,n.cs.dir,n.cs.text,P.state.done&&Date.now()-P.state.done.at<12e4].join(","):"",d=[(r=e.econ)==null?void 0:r.at,e.busy,(a=e.toast)==null?void 0:a.at,e.forge,e.armor,e.xp,(e.items||[]).length,JSON.stringify(e.fake||null),n.v,t,e.toast&&c.nowMs-e.toast.at<5e3,Z.matches,o?[o.bonus,o.day,o.bouts.today,o.bouts.yesterday,...Object.values(o.on)].join(","):"",s,g].join("|");d!==Me&&(Me=d,qt(_,`<div id="wmodal">${Se()}</div>`,{onBeforeElUpdated:(k,z)=>!(k===document.activeElement&&k.tagName==="INPUT")})),requestAnimationFrame(pe)}return requestAnimationFrame(pe),_.addEventListener("click",e=>{var g,d;const t=e.target.closest("[data-act]");if(!t||!_.contains(t))return;const o=Ee(),s=t.dataset.act;if(s==="close"){if(n.confirm){n.confirm=null,O();return}u();return}if(!((s==="tab"||s==="goto")&&we.has(t.dataset.tab))){if(s==="tab"){n.tab=t.dataset.tab,n.sheet=!1,O();return}if(s==="filter"){n.filter[n.tab]=t.dataset.f,n.pick[n.tab]=null,n.sheet=!1,O();return}if(s==="pick"){n.pick[n.tab]=t.dataset.key,n.sheet=!0,O();return}if(s==="sheet-close"){n.sheet=!1,O();return}if(s==="goto"){const r=t.dataset.tab;n.place=Be[r],n.tab=r,t.dataset.f&&(n.filter[r]=t.dataset.f),t.dataset.key?(n.pick[r]=t.dataset.key,n.sheet=!0):n.sheet=!1,O();return}if(s==="qty"){const r=+t.dataset.tier,a=Math.max(1,Math.min(o.bound(r).length,o.mintsLeft));n.qty[r]=Math.max(1,Math.min(a,(n.qty[r]||1)+ +t.dataset.d)),O();return}if(s==="price"){n.price[+t.dataset.nft]=t.dataset.v,O();return}if(s==="link"){window.open(t.dataset.href,"_blank","noopener");return}if(s==="rmore"){n.rm.pages++,oe();return}if(s==="rload"){n.rm.error=null,oe();return}if(s!=="rcol"){if(s==="qconnect"){(v?v.connect().then(()=>p.load()):p.connect()).catch(r=>K((r==null?void 0:r.message)||"The wallet did not connect")),O();return}if(s==="qsignin"){p.state.error=null,p.load({signIn:!0}).then(()=>{p.state.error&&K(p.state.error.message)});return}if(s==="qreload"||s==="qfresh"){p.state.error=null,p.load({fresh:s==="qfresh"});return}if(s==="qlock"||s==="qrelock"||s==="qunlock"){const r={qlock:j.lock,qrelock:j.relock,qunlock:j.unlock}[s];r().then(a=>{!a&&j.state.error&&K(j.state.error.message)}),O();return}if(s==="cdismiss"){P.dismissPending(),O();return}if(s==="cconnect"){P.connect().catch(r=>K((r==null?void 0:r.message)||"The wallet did not connect")),O();return}if(s==="cdir"){t.dataset.dir!==n.cs.dir&&(n.cs.dir=t.dataset.dir==="sell"?"sell":"buy",n.cs.text="",n.cs.exact=null,P.quote(n.cs.dir,null)),O();return}if(s==="cmax"){const r=P.state.info;if(!r)return;const a=n.cs.dir==="buy"?r.ron>rt?r.ron-rt:0n:r.horske;if(a<=0n){K(n.cs.dir==="buy"?"Not enough RON to swap and pay the gas.":"No HORSKE to sell.");return}n.cs.text=nn(a,4),n.cs.exact=n.cs.dir==="sell"?{text:n.cs.text,wei:a}:null,T(0),O();return}if(s==="cgo"){clearTimeout(h),(g=_.querySelector("#cpay"))==null||g.blur();const r=l(),a=n.cs.dir,k=P.state.quote,z=()=>P.swap(a,r,k);if(k&&k.out!=null&&k.dir===a&&k.amount===r&&k.impactBps>=Ut){const A=a==="buy"?"RON":"HORSKE",x=a==="buy"?"HORSKE":"RON",Y=()=>{if(l()!==r||n.cs.dir!==a){K("The amount changed: check it and swap again.");return}z()};n.confirm={title:`Price impact ${(k.impactBps/100).toFixed(1)}%`,text:`You pay ${i(r,A)} ${A} and get ${i(k.out,x)} ${x}: ${(k.impactBps/100).toFixed(1)}% less than a small swap's rate. A smaller amount gets a better rate.`,cta:a==="buy"?"Buy anyway":"Sell anyway",danger:!0,run:Y}}else z();O();return}if(s==="qcheckin"){p.checkIn().then(r=>{var a;return K(r?r.done?"Checked in for today.":"You checked in today already.":((a=p.state.actionError)==null?void 0:a.message)||"The house did not answer",!!r)});return}if(s==="qxcheck"){const r=(((d=_.querySelector("#qxurl"))==null?void 0:d.value)||n.qx||"").trim();if(!r){K("Paste your post's link first.");return}n.qx=r,p.post(r).then(a=>{var k;a?(n.qx="",K("Your post counts for today.",!0)):K(((k=p.state.actionError)==null?void 0:k.message)||"The house did not answer")});return}if(s==="ask"){n.confirm=ne(t.dataset.ask,t,o),O();return}if(s==="yes"){const r=n.confirm;n.confirm=null,O(),r==null||r.run();return}if(s==="no"){n.confirm=null,O();return}if(s==="do"){const r=t.dataset.do;r==="equip"?L("equip",{equip:{kind:"set",tier:+t.dataset.tier}}):r==="unlist"?L("unlist",{unlist:+t.dataset.id}):r==="fake"?L("fake",{fake:{ronkeverse:+t.dataset.r,oneOfOne:+t.dataset.o,colored:+t.dataset.c,rarest:t.dataset.rarest||""}}):L(r);return}}}}),_.addEventListener("input",e=>{e.target.id==="mprice"&&(n.price[+e.target.dataset.nft]=e.target.value),e.target.id==="qxurl"&&(n.qx=e.target.value),e.target.id==="cpay"&&(n.cs.text=e.target.value,T(),O())}),_.addEventListener("keydown",e=>{var t,o;e.target.id==="qxurl"&&e.key==="Enter"&&((t=_.querySelector('[data-act="qxcheck"]'))==null||t.click()),e.target.id==="cpay"&&e.key==="Enter"&&((o=_.querySelector('[data-act="cgo"]'))==null||o.click())}),_.addEventListener("change",e=>{e.target.id==="mprice"&&O()}),addEventListener("focus",()=>{var e;document.activeElement===document.body&&((e=_.querySelector(".mpanel"))==null||e.focus({preventScroll:!0}))}),addEventListener("keydown",e=>{e.key==="Escape"&&(n.confirm?(n.confirm=null,O()):n.sheet&&Z.matches?(n.sheet=!1,O()):u())}),{open(e,t){n.place=Object.hasOwn(ve,t??"")?t:Object.hasOwn(Be,e??"")?Be[e]:n.place,n.tab=ve[n.place].tabs.some(([o])=>o===e)&&!we.has(e)?e:pt(n.place),n.sheet=!1,n.confirm=null,O()}}}export{bn as startModal};

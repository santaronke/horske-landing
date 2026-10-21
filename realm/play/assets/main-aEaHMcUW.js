const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/arrival-BfZeGHHz.js","assets/bank-B0gRk3-x.js","assets/config-DSa0ZbPd.js","assets/db-HsvaXaUn.js","assets/jouster-BIrWR_i-.js","assets/joust-2BfEs9QO.js","assets/chain-DjFL0Xhm.js","assets/player-CqzJShkt.js","assets/meadow-DQnD2Hmd.js","assets/tex-hero-D9FSdSdV.js","assets/color-DDSg_o2D.js","assets/tex-meadow-CQRPL3Pn.js","assets/tex-sky-H7hQEGu6.js","assets/tex-soil-6tL0S4Gb.js","assets/tileset-ground-dAb9Cutk.js","assets/ui-8iQP4AY0.js","assets/bet-ZgB9l8Vk.js","assets/houseQuests-Ds43hNNc.js","assets/view-B_w9TCd3.js","assets/modal-CxSFe5q1.js"])))=>i.map(i=>d[i]);
import{m as Mp,I as dc,D as Ep,i as Tp,c as Ap}from"./config-DSa0ZbPd.js";const Rp="modulepreload",Cp=function(i){return"/realm/play/"+i},ou={},Ie=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(t.map(c=>{if(c=Cp(c),c in ou)return;ou[c]=!0;const l=c.endsWith(".css"),f=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const h=document.createElement("link");if(h.rel=l?"stylesheet":Rp,l||(h.as="script"),h.crossOrigin="",h.href=c,o&&h.setAttribute("nonce",o),document.head.appendChild(h),l)return new Promise((d,p)=>{h.addEventListener("load",d),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})},Pp=`# name: the game's name: fill it once you know what this is. description: one line for the box art.
name: "Justa dos Ronkes"
description: "Justa dos Ronkes: galope no ritmo, mire no elmo e derrube cavaleiros Ronke para liberar armaduras e lanças."
camera: templates/camera.js#camera
defaultPlace: main
engine:
  behaviors:
    - scripts/arrival.js
  networking:
    mode: multiplayer
  ui:
    theme:
      font: Geist Pixel Square
inputs:
  actions:
    charge:
      keys: [space, enter]
      mouse: left
      gamepad: a
    equip: {}
    pickOpp: {}
    fight: {}
    toArmory: {}
    # the season (test mode, play money): sent by the HUD's buttons, handled in scripts/jouster.js econInput
    sync: {}
    peek: {}
    faucet: {}
    fake: {}
    buyPass: {}
    mint: {}
    list: {}
    unlist: {}
    buy: {}
    burn: {}
    forge: {}
    rankedFind: {}
    rankedFight: {}
    resetMe: {}
    adminPod: {}
    adminEnd: {}
    gambaBet: {}
    skip: {}
  axes:
    aim:
      keys: s/w/ArrowDown/ArrowUp
      gamepad: leftStickY
    aimX:
      gamepad: leftStickX
  touch:
    surfaces:
      default:
        sticks: []
        look: false
        pinch: false
        gestures: { press: charge }
    style: |
      [data-part="button"] { background: oklch(0.86 0.15 85); border: 4px solid oklch(0.3 0.06 50); color: oklch(0.25 0.05 50); font-weight: 800; box-shadow: 0 4px 0 oklch(0.3 0.06 50); }
      [data-part="button"][data-pressed] { background: oklch(0.95 0.12 90); transform: translateY(3px); box-shadow: 0 1px 0 oklch(0.3 0.06 50); }
player: templates/player.js#player
ui:
  render: scripts/ui.js
# nametag: the tag over other players' heads: this file, yours to edit: export default function (ctx, tag) { return html }, the shape ui.js has.
nametag: ui/nametag.js
authoring:
  starter:
    id: 2d-side
`,Lp=`atmosphere:\r
  look:\r
    script: scripts/look-default.js\r
    toneMapping: neutral\r
  sky:\r
    horizon: "oklch(0.9182 0.0362 239.2)"\r
    kind: gradient\r
    zenith: "oklch(0.5679 0.1697 257.4)"\r
defaultSpawnPoint:\r
  x: -40\r
  y: 0.1\r
  z: 2\r
gravity:\r
  x: 0\r
  y: -9.81\r
  z: 0\r
mode: 2d-side\r
terrain:\r
  generator: scripts/ground.js\r
  kind: tilemap\r
  solidTiles:\r
    - 1\r
    - 2\r
  tileSize: 1\r
  tileset: scripts/tileset-sand.js\r
  tilesetColumns: 4\r
`,Ip=`# spawn-scene v2 yaml objects\r
backdrop-clouds:\r
  overrides:\r
    feetPosition: {attach: camera, y: 2.75}\r
    id: backdrop-clouds\r
    physics: none\r
    sprite: {parallax: [0.05, 1], repeatX: true, size: [30, 6.5], sortingLayer: -26, texture: scripts/tex-sky.js?piece=clouds}\r
  template: templates/sprite.js#sprite\r
backdrop-clouds-far:\r
  overrides:\r
    feetPosition: {attach: camera, y: 1.5}\r
    id: backdrop-clouds-far\r
    physics: none\r
    sprite: {parallax: [0.02, 1], repeatX: true, size: [30, 1.25], sortingLayer: -25, texture: scripts/tex-sky.js?piece=horizon}\r
  template: templates/sprite.js#sprite\r
backdrop-clouds-high:\r
  overrides:\r
    feetPosition: {attach: camera, x: 9, y: 9.25}\r
    id: backdrop-clouds-high\r
    physics: none\r
    sprite: {parallax: [0.03, 1], repeatX: true, size: [30, 6.5], sortingLayer: -27, texture: scripts/tex-sky.js?piece=clouds}\r
  template: templates/sprite.js#sprite\r
backdrop-orb:\r
  overrides:\r
    feetPosition: {attach: camera, x: 3.6, y: 0}\r
    id: backdrop-orb\r
    physics: none\r
    sprite: {blend: add, parallax: [0, 1], size: [3, 8], sortingLayer: -28, texture: scripts/tex-sky.js?piece=orb}\r
  template: templates/sprite.js#sprite\r
backdrop-sky:\r
  overrides:\r
    feetPosition: {attach: camera, y: -2}\r
    id: backdrop-sky\r
    physics: none\r
    sprite: {parallax: [0, 1], repeatX: true, size: [0.25, 32], sortingLayer: -30, texture: scripts/tex-sky.js}\r
  template: templates/sprite.js#sprite\r
backdrop-stars:\r
  overrides:\r
    feetPosition: {attach: camera, y: 1.5}\r
    id: backdrop-stars\r
    physics: none\r
    sprite: {blend: add, parallax: [0, 1], repeatX: true, size: [16, 20], sortingLayer: -29, texture: scripts/tex-sky.js?piece=stars}\r
  template: templates/sprite.js#sprite\r
far-field-1:\r
  overrides:\r
    feetPosition: {attach: camera, y: 0}\r
    id: far-field-1\r
    physics: none\r
    sprite: {parallax: [0.35, 1], repeatX: true, size: [16, 0.75], sortingLayer: -22, texture: scripts/tex-sky.js?piece=far&n=1}\r
  template: templates/sprite.js#sprite\r
far-field-2:\r
  overrides:\r
    feetPosition: {attach: camera, y: 0}\r
    id: far-field-2\r
    physics: none\r
    sprite: {parallax: [0.2, 1], repeatX: true, size: [16, 1], sortingLayer: -23, texture: scripts/tex-sky.js?piece=far&n=2}\r
  template: templates/sprite.js#sprite\r
far-field-3:\r
  overrides:\r
    feetPosition: {attach: camera, y: 0}\r
    id: far-field-3\r
    physics: none\r
    sprite: {parallax: [0.1, 1], repeatX: true, size: [16, 1.5], sortingLayer: -24, texture: scripts/tex-sky.js?piece=far&n=3}\r
  template: templates/sprite.js#sprite\r
ground-soil:\r
  overrides:\r
    feetPosition: {attach: camera, y: -1.5}\r
    id: ground-soil\r
    physics: none\r
    sprite: {parallax: [1, 1], repeatX: true, size: [16, 1.75], sortingLayer: 12, texture: scripts/tex-soil.js}\r
  template: templates/sprite.js#sprite\r
meadow-back:\r
  overrides:\r
    feetPosition: {attach: camera, y: 0}\r
    id: meadow-back\r
    mixer: {sway: {clip: sway, loop: loop}}\r
    physics: none\r
    sprite: {parallax: [1, 1], repeatX: true, size: [16, 1.5], sortingLayer: -1, texture: scripts/tex-meadow.js?piece=back}\r
  template: templates/sprite.js#sprite\r
meadow-front:\r
  overrides:\r
    feetPosition: {attach: camera, y: -0.125}\r
    id: meadow-front\r
    mixer: {sway: {clip: sway, loop: loop}}\r
    physics: none\r
    sprite: {parallax: [1, 1], repeatX: true, size: [16, 1], sortingLayer: 11, texture: scripts/tex-meadow.js?piece=front}\r
  template: templates/sprite.js#sprite\r
meadow-mid:\r
  overrides:\r
    feetPosition: {attach: camera, y: -0.125}\r
    id: meadow-mid\r
    mixer: {sway: {clip: sway, loop: loop}}\r
    physics: none\r
    sprite: {parallax: [1, 1], repeatX: true, size: [16, 1], sortingLayer: 5, texture: scripts/tex-meadow.js}\r
  template: templates/sprite.js#sprite\r
`,Dp=`# spawn-scene v2 yaml x0z0\r
crowd-bed:\r
  audio: {clip: /cdn/value.9ab28fcfd914fc4db3788b96f730f0eb2e6fce200935c3dec53b99823b6df079.mp3, gain: 0.25, loop: true, spatial: false}\r
  id: crowd-bed\r
fanfare-music:\r
  audio: {bus: Music, clip: /cdn/moodboard-toon-vibrant/music-medieval-tournament-fanfare-lute-and-drums.mp3, gain: 0.22, loop: true, spatial: false}\r
  feetPosition: {x: 0, y: 2, z: 0}\r
  id: fanfare-music\r
lists-stands:\r
  feetPosition: {x: 0, y: -0.9, z: -12}\r
  id: lists-stands\r
  physics: none\r
  sprite: {anchor: [0.5, 0], lit: false, parallax: [0.3, 1], repeatX: true, size: [288, 15.65], sortingLayer: -21, texture: /cdn/value.969ddcf3c6c3fcf7b65a651b0901098697dde50ce06144f8755a37acda1670f2.png, uvRect: {height: 1, width: 15.67, x: 0, y: 0}}\r
tilt-barrier:\r
  feetPosition: {x: 0, y: 0, z: 1.4}\r
  id: tilt-barrier\r
  physics: none\r
  sprite: {anchor: [0.5, 0], repeatX: true, size: [209.8, 2], sortingLayer: 11, texture: /cdn/value.8e4543d77e4c514ee3bc8049699deab4c6350f59479d0404a244881c1f709d4b.png, uvRect: {height: 1, width: 46, x: 0, y: 0}}\r
`,kp=`# The web version's own layer over the copied Spawn world. world/ stays an exact copy (npm run sync); what the web\r
# version does differently lives here, and ?spawn in the URL shows the world without it.\r
#\r
# 16/10/2026, Rafael:\r
# - "a grama e a terra vamos ter que usar o que voce criou pro site": the grass bank and the dirt are the site's joust\r
#   scene (tools/web_ground.py cuts them from his background, 87 px a metre), in place of the meadow strips, the soil\r
#   strip and the drawn sand. The sand tilemap keeps its colliders; it is just not drawn.\r
# - sounds: "Lança: 1 · Elmo: — · Música: 17 / lança batendo sempre mesmo som, sem ter pro elmo".\r
\r
# 19/10/2026, Rafael, with his picture of the lists: "bota essa imagem de fundo da just". It replaces the generated sky\r
# pieces (clouds, sun, stars, far fields) and the stands art; the gradient sky strip stays under it as the base.\r
remove: [meadow-back, meadow-mid, meadow-front, ground-soil,\r
  backdrop-clouds, backdrop-clouds-far, backdrop-clouds-high, backdrop-orb, backdrop-stars,\r
  far-field-1, far-field-2, far-field-3, lists-stands]\r
\r
terrain:\r
  draw: false\r
\r
add:\r
  # his picture of the lists (tools/web_backdrop.py): one 30.6 m strip repeated, its bottom on the ground line, 10.2 m of\r
  # picture (the camera's usual view) and 4 m more sky for its widest; where and how the stands art lay (z -12, layer\r
  # -21, 30% parallax), so the riders, the tilt and the bank stay in front of it\r
  web-backdrop:\r
    feetPosition: { x: 0, y: 0, z: -12 }\r
    physics: none\r
    sprite:\r
      texture: /art/arena/backdrop.webp\r
      size: [288, 14.203]\r
      anchor: [0.5, 0]\r
      lit: false\r
      parallax: [0.3, 1]\r
      repeatX: true\r
      sortingLayer: -21\r
      uvRect: { x: 0, y: 0, width: 9.4118, height: 1 }\r
  # the dirt under the lists, from the ground line down (40 m: deeper than any screen shows)\r
  web-dirt:\r
    feetPosition: { x: 0, y: 0 }\r
    physics: none\r
    sprite:\r
      texture: /art/ground/dirt.png\r
      size: [441.5, 40]\r
      anchor: [0.5, 1]\r
      sortingLayer: 0\r
      uvRect: { x: 0, y: 0, width: 50, height: 4.53 }\r
  # the topsoil under the bank, with the details the Spawn soil has (roots, pebbles, dashes, crumbs) and its jagged\r
  # lower edge over the deep dirt (Rafael, 16/10: "poderia ter uns detalhes na terra igual tem no spawn")\r
  web-topsoil:\r
    feetPosition: { x: 0, y: -0.30 }\r
    physics: none\r
    sprite:\r
      texture: /art/ground/topsoil.png\r
      size: [441.5, 0.966]\r
      anchor: [0.5, 1]\r
      sortingLayer: 0\r
      sortingOrder: 1\r
      uvRect: { x: 0, y: 0, width: 50, height: 1 }\r
  # the grass bank on the ground line: its bright lip at y = 0, 0.345 m tall, one loop every 15.98 m\r
  web-turf:\r
    feetPosition: { x: 0, y: 0 }\r
    physics: none\r
    sprite:\r
      texture: /art/ground/turf.png\r
      size: [431.5, 0.345]\r
      anchor: [0.5, 1]\r
      sortingLayer: 11\r
      sortingOrder: 1\r
      uvRect: { x: 0, y: 0, width: 27, height: 1 }\r
\r
# drawing: layers under the opaque sky strip (backdrop-sky, layer -30) are loaded but not drawn; the place's own\r
# gradient sky lies under that strip everywhere, so it is not drawn either (16/10: "o jogo parece mais pesado")\r
render:\r
  hideBelowLayer: -30\r
  placeSky: false\r
  # where the world's effects draw among the sprites, by the effect's depth: [lowest z, layer]. The lists' lanes\r
  # (joust.yml): the rival at z 0.8 (layer 10), the barrier and the bank at 1.4 (11), the player at 2 (12), the clash and\r
  # the landing at 3 (jouster.js). Each rider's hoof dust over its rider, the splinters and the fall's dust in front of\r
  # all (17/10, Rafael: "no spawn não tinha uma fumacinha quando se acertavam na justa?"). A stand-in: fx.md and the\r
  # 2d-mode skill say nothing of it.\r
  fxLayers: [[2.5, 14], [1.4, 12.5], [-1000, 10.5]]\r
\r
# a clip the world plays → the file the web plays (null = silent). Spawn's library sounds never ship.\r
sounds:\r
  /cdn/moodboard-toon-vibrant/sfx-wooden-lance-shatter-splinters.mp3: /art/sfx/lance.mp3\r
  /cdn/moodboard-toon-vibrant/sfx-lance-hits-metal-helmet-clang.mp3: /art/sfx/lance.mp3\r
  /cdn/moodboard-toon-vibrant/music-medieval-tournament-fanfare-lute-and-drums.mp3: /art/music/medieval-battle.mp3\r
  # the cheer at "CHARGE!" (jouster.js goCharge): a short cut of the crowd he picked for wins and falls (proposal, 16/10)\r
  /cdn/moodboard-toon-vibrant/sfx-medieval-crowd-cheer.mp3: /art/sfx/charge-cheer.mp3\r
  # named in joust.yml, never played by the game since 13/10\r
  /cdn/moodboard-toon-vibrant/sfx-horse-hoof-thud-on-sand.mp3: null\r
  /cdn/moodboard-toon-vibrant/sfx-lance-whoosh-miss.mp3: null\r
  /cdn/moodboard-toon-vibrant/sfx-huge-crowd-roar-applause.mp3: null\r
  /cdn/moodboard-toon-vibrant/sfx-crowd-oooh-gasp.mp3: null\r
  /cdn/moodboard-toon-vibrant/sfx-medieval-trumpet-fanfare-short.mp3: null\r
  /cdn/moodboard-toon-vibrant/sfx-body-falls-on-sand-thud.mp3: null\r
  /cdn/moodboard-toon-vibrant/sfx-herald-horn-call.mp3: null\r
`,pc=Symbol.for("yaml.alias"),hl=Symbol.for("yaml.document"),Si=Symbol.for("yaml.map"),Xf=Symbol.for("yaml.pair"),Wn=Symbol.for("yaml.scalar"),js=Symbol.for("yaml.seq"),Mn=Symbol.for("yaml.node.type"),Zi=i=>!!i&&typeof i=="object"&&i[Mn]===pc,Qi=i=>!!i&&typeof i=="object"&&i[Mn]===hl,Xs=i=>!!i&&typeof i=="object"&&i[Mn]===Si,Et=i=>!!i&&typeof i=="object"&&i[Mn]===Xf,bt=i=>!!i&&typeof i=="object"&&i[Mn]===Wn,$s=i=>!!i&&typeof i=="object"&&i[Mn]===js;function At(i){if(i&&typeof i=="object")switch(i[Mn]){case Si:case js:return!0}return!1}function Rt(i){if(i&&typeof i=="object")switch(i[Mn]){case pc:case Si:case Wn:case js:return!0}return!1}const $f=i=>(bt(i)||At(i))&&!!i.anchor,on=Symbol("break visit"),Kf=Symbol("skip children"),Vn=Symbol("remove node");function es(i,e){const t=Yf(e);Qi(i)?Ts(null,i.contents,t,Object.freeze([i]))===Vn&&(i.contents=null):Ts(null,i,t,Object.freeze([]))}es.BREAK=on;es.SKIP=Kf;es.REMOVE=Vn;function Ts(i,e,t,n){const s=Jf(i,e,t,n);if(Rt(s)||Et(s))return Zf(i,n,s),Ts(i,s,t,n);if(typeof s!="symbol"){if(At(e)){n=Object.freeze(n.concat(e));for(let r=0;r<e.items.length;++r){const a=Ts(r,e.items[r],t,n);if(typeof a=="number")r=a-1;else{if(a===on)return on;a===Vn&&(e.items.splice(r,1),r-=1)}}}else if(Et(e)){n=Object.freeze(n.concat(e));const r=Ts("key",e.key,t,n);if(r===on)return on;r===Vn&&(e.key=null);const a=Ts("value",e.value,t,n);if(a===on)return on;a===Vn&&(e.value=null)}}return s}async function $a(i,e){const t=Yf(e);Qi(i)?await As(null,i.contents,t,Object.freeze([i]))===Vn&&(i.contents=null):await As(null,i,t,Object.freeze([]))}$a.BREAK=on;$a.SKIP=Kf;$a.REMOVE=Vn;async function As(i,e,t,n){const s=await Jf(i,e,t,n);if(Rt(s)||Et(s))return Zf(i,n,s),As(i,s,t,n);if(typeof s!="symbol"){if(At(e)){n=Object.freeze(n.concat(e));for(let r=0;r<e.items.length;++r){const a=await As(r,e.items[r],t,n);if(typeof a=="number")r=a-1;else{if(a===on)return on;a===Vn&&(e.items.splice(r,1),r-=1)}}}else if(Et(e)){n=Object.freeze(n.concat(e));const r=await As("key",e.key,t,n);if(r===on)return on;r===Vn&&(e.key=null);const a=await As("value",e.value,t,n);if(a===on)return on;a===Vn&&(e.value=null)}}return s}function Yf(i){return typeof i=="object"&&(i.Collection||i.Node||i.Value)?Object.assign({Alias:i.Node,Map:i.Node,Scalar:i.Node,Seq:i.Node},i.Value&&{Map:i.Value,Scalar:i.Value,Seq:i.Value},i.Collection&&{Map:i.Collection,Seq:i.Collection},i):i}function Jf(i,e,t,n){var s,r,a,o,c;if(typeof t=="function")return t(i,e,n);if(Xs(e))return(s=t.Map)==null?void 0:s.call(t,i,e,n);if($s(e))return(r=t.Seq)==null?void 0:r.call(t,i,e,n);if(Et(e))return(a=t.Pair)==null?void 0:a.call(t,i,e,n);if(bt(e))return(o=t.Scalar)==null?void 0:o.call(t,i,e,n);if(Zi(e))return(c=t.Alias)==null?void 0:c.call(t,i,e,n)}function Zf(i,e,t){const n=e[e.length-1];if(At(n))n.items[i]=t;else if(Et(n))i==="key"?n.key=t:n.value=t;else if(Qi(n))n.contents=t;else{const s=Zi(n)?"alias":"scalar";throw new Error(`Cannot replace node with ${s} parent`)}}const Op={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},Np=i=>i.replace(/[!,[\]{}]/g,e=>Op[e]);class nn{constructor(e,t){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},nn.defaultYaml,e),this.tags=Object.assign({},nn.defaultTags,t)}clone(){const e=new nn(this.yaml,this.tags);return e.docStart=this.docStart,e}atDocument(){const e=new nn(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:nn.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},nn.defaultTags);break}return e}add(e,t){this.atNextDocument&&(this.yaml={explicit:nn.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},nn.defaultTags),this.atNextDocument=!1);const n=e.trim().split(/[ \t]+/),s=n.shift();switch(s){case"%TAG":{if(n.length!==2&&(t(0,"%TAG directive should contain exactly two parts"),n.length<2))return!1;const[r,a]=n;return this.tags[r]=a,!0}case"%YAML":{if(this.yaml.explicit=!0,n.length!==1)return t(0,"%YAML directive should contain exactly one part"),!1;const[r]=n;if(r==="1.1"||r==="1.2")return this.yaml.version=r,!0;{const a=/^\d+\.\d+$/.test(r);return t(6,`Unsupported YAML version ${r}`,a),!1}}default:return t(0,`Unknown directive ${s}`,!0),!1}}tagName(e,t){if(e==="!")return"!";if(e[0]!=="!")return t(`Not a valid tag: ${e}`),null;if(e[1]==="<"){const a=e.slice(2,-1);return a==="!"||a==="!!"?(t(`Verbatim tags aren't resolved, so ${e} is invalid.`),null):(e[e.length-1]!==">"&&t("Verbatim tags must end with a >"),a)}const[,n,s]=e.match(/^(.*!)([^!]*)$/s);s||t(`The ${e} tag has no suffix`);const r=this.tags[n];if(r)try{return r+decodeURIComponent(s)}catch(a){return t(String(a)),null}return n==="!"?e:(t(`Could not resolve tag: ${e}`),null)}tagString(e){for(const[t,n]of Object.entries(this.tags))if(e.startsWith(n))return t+Np(e.substring(n.length));return e[0]==="!"?e:`!<${e}>`}toString(e){const t=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],n=Object.entries(this.tags);let s;if(e&&n.length>0&&Rt(e.contents)){const r={};es(e.contents,(a,o)=>{Rt(o)&&o.tag&&(r[o.tag]=!0)}),s=Object.keys(r)}else s=[];for(const[r,a]of n)r==="!!"&&a==="tag:yaml.org,2002:"||(!e||s.some(o=>o.startsWith(a)))&&t.push(`%TAG ${r} ${a}`);return t.join(`
`)}}nn.defaultYaml={explicit:!1,version:"1.2"};nn.defaultTags={"!!":"tag:yaml.org,2002:"};function Qf(i){if(/[\x00-\x19\s,[\]{}]/.test(i)){const t=`Anchor must not contain whitespace or control characters: ${JSON.stringify(i)}`;throw new Error(t)}return!0}function eh(i){const e=new Set;return es(i,{Value(t,n){n.anchor&&e.add(n.anchor)}}),e}function th(i,e){for(let t=1;;++t){const n=`${i}${t}`;if(!e.has(n))return n}}function Up(i,e){const t=[],n=new Map;let s=null;return{onAnchor:r=>{t.push(r),s??(s=eh(i));const a=th(e,s);return s.add(a),a},setAnchors:()=>{for(const r of t){const a=n.get(r);if(typeof a=="object"&&a.anchor&&(bt(a.node)||At(a.node)))a.node.anchor=a.anchor;else{const o=new Error("Failed to resolve repeated object (this should not happen)");throw o.source=r,o}}},sourceObjects:n}}function Rs(i,e,t,n){if(n&&typeof n=="object")if(Array.isArray(n))for(let s=0,r=n.length;s<r;++s){const a=n[s],o=Rs(i,n,String(s),a);o===void 0?delete n[s]:o!==a&&(n[s]=o)}else if(n instanceof Map)for(const s of Array.from(n.keys())){const r=n.get(s),a=Rs(i,n,s,r);a===void 0?n.delete(s):a!==r&&n.set(s,a)}else if(n instanceof Set)for(const s of Array.from(n)){const r=Rs(i,n,s,s);r===void 0?n.delete(s):r!==s&&(n.delete(s),n.add(r))}else for(const[s,r]of Object.entries(n)){const a=Rs(i,n,s,r);a===void 0?delete n[s]:a!==r&&(n[s]=a)}return i.call(e,t,n)}function wn(i,e,t){if(Array.isArray(i))return i.map((n,s)=>wn(n,String(s),t));if(i&&typeof i.toJSON=="function"){if(!t||!$f(i))return i.toJSON(e,t);const n={aliasCount:0,count:1,res:void 0};t.anchors.set(i,n),t.onCreate=r=>{n.res=r,delete t.onCreate};const s=i.toJSON(e,t);return t.onCreate&&t.onCreate(s),s}return typeof i=="bigint"&&!(t!=null&&t.keep)?Number(i):i}class mc{constructor(e){Object.defineProperty(this,Mn,{value:e})}clone(){const e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:t,maxAliasCount:n,onAnchor:s,reviver:r}={}){if(!Qi(e))throw new TypeError("A document argument is required");const a={anchors:new Map,doc:e,keep:!0,mapAsMap:t===!0,mapKeyWarned:!1,maxAliasCount:typeof n=="number"?n:100},o=wn(this,"",a);if(typeof s=="function")for(const{count:c,res:l}of a.anchors.values())s(l,c);return typeof r=="function"?Rs(r,{"":o},"",o):o}}class Ka extends mc{constructor(e){super(pc),this.source=e,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(e,t){if((t==null?void 0:t.maxAliasCount)===0)throw new ReferenceError("Alias resolution is disabled");let n;t!=null&&t.aliasResolveCache?n=t.aliasResolveCache:(n=[],es(e,{Node:(r,a)=>{(Zi(a)||$f(a))&&n.push(a)}}),t&&(t.aliasResolveCache=n));let s;for(const r of n){if(r===this)break;r.anchor===this.source&&(s=r)}if(s&&t){const{anchors:r,doc:a,maxAliasCount:o}=t;let c=r.get(s);if(c||(wn(s,null,t),c=r.get(s)),(c==null?void 0:c.res)===void 0){const l="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(l)}if(o>=0&&(c.count+=1,c.aliasCount===0&&(c.aliasCount=Sa(a,s,r)),c.count*c.aliasCount>o)){const l="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(l)}}return s}toJSON(e,t){if(!t)return{source:this.source};const n=this.resolve(t.doc,t);if(!n){const s=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(s)}return t.anchors.get(n).res}toString(e,t,n){const s=`*${this.source}`;if(e){if(Qf(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){const r=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(r)}if(e.implicitKey)return`${s} `}return s}}function Sa(i,e,t){if(Zi(e)){const n=e.resolve(i),s=t&&n&&t.get(n);return s?s.count*s.aliasCount:0}else if(At(e)){let n=0;for(const s of e.items){const r=Sa(i,s,t);r>n&&(n=r)}return n}else if(Et(e)){const n=Sa(i,e.key,t),s=Sa(i,e.value,t);return Math.max(n,s)}return 1}const nh=i=>!i||typeof i!="function"&&typeof i!="object";class Ye extends mc{constructor(e){super(Wn),this.value=e}toJSON(e,t){return t!=null&&t.keep?this.value:wn(this.value,e,t)}toString(){return String(this.value)}}Ye.BLOCK_FOLDED="BLOCK_FOLDED";Ye.BLOCK_LITERAL="BLOCK_LITERAL";Ye.PLAIN="PLAIN";Ye.QUOTE_DOUBLE="QUOTE_DOUBLE";Ye.QUOTE_SINGLE="QUOTE_SINGLE";const Fp="tag:yaml.org,2002:";function Bp(i,e,t){if(e){const n=t.filter(r=>r.tag===e),s=n.find(r=>!r.format)??n[0];if(!s)throw new Error(`Tag ${e} not found`);return s}return t.find(n=>{var s;return((s=n.identify)==null?void 0:s.call(n,i))&&!n.format})}function br(i,e,t){var h,d,p;if(Qi(i)&&(i=i.contents),Rt(i))return i;if(Et(i)){const y=(d=(h=t.schema[Si]).createNode)==null?void 0:d.call(h,t.schema,null,t);return y.items.push(i),y}(i instanceof String||i instanceof Number||i instanceof Boolean||typeof BigInt<"u"&&i instanceof BigInt)&&(i=i.valueOf());const{aliasDuplicateObjects:n,onAnchor:s,onTagObj:r,schema:a,sourceObjects:o}=t;let c;if(n&&i&&typeof i=="object"){if(c=o.get(i),c)return c.anchor??(c.anchor=s(i)),new Ka(c.anchor);c={anchor:null,node:null},o.set(i,c)}e!=null&&e.startsWith("!!")&&(e=Fp+e.slice(2));let l=Bp(i,e,a.tags);if(!l){if(i&&typeof i.toJSON=="function"&&(i=i.toJSON()),!i||typeof i!="object"){const y=new Ye(i);return c&&(c.node=y),y}l=i instanceof Map?a[Si]:Symbol.iterator in Object(i)?a[js]:a[Si]}r&&(r(l),delete t.onTagObj);const f=l!=null&&l.createNode?l.createNode(t.schema,i,t):typeof((p=l==null?void 0:l.nodeClass)==null?void 0:p.from)=="function"?l.nodeClass.from(t.schema,i,t):new Ye(i);return e?f.tag=e:l.default||(f.tag=l.tag),c&&(c.node=f),f}function Fa(i,e,t){let n=t;for(let s=e.length-1;s>=0;--s){const r=e[s];if(typeof r=="number"&&Number.isInteger(r)&&r>=0){const a=[];a[r]=n,n=a}else n=new Map([[r,n]])}return br(n,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:i,sourceObjects:new Map})}const pr=i=>i==null||typeof i=="object"&&!!i[Symbol.iterator]().next().done;class ih extends mc{constructor(e,t){super(e),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(e){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(t.schema=e),t.items=t.items.map(n=>Rt(n)||Et(n)?n.clone(e):n),this.range&&(t.range=this.range.slice()),t}addIn(e,t){if(pr(e))this.add(t);else{const[n,...s]=e,r=this.get(n,!0);if(At(r))r.addIn(s,t);else if(r===void 0&&this.schema)this.set(n,Fa(this.schema,s,t));else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${s}`)}}deleteIn(e){const[t,...n]=e;if(n.length===0)return this.delete(t);const s=this.get(t,!0);if(At(s))return s.deleteIn(n);throw new Error(`Expected YAML collection at ${t}. Remaining path: ${n}`)}getIn(e,t){const[n,...s]=e,r=this.get(n,!0);return s.length===0?!t&&bt(r)?r.value:r:At(r)?r.getIn(s,t):void 0}hasAllNullValues(e){return this.items.every(t=>{if(!Et(t))return!1;const n=t.value;return n==null||e&&bt(n)&&n.value==null&&!n.commentBefore&&!n.comment&&!n.tag})}hasIn(e){const[t,...n]=e;if(n.length===0)return this.has(t);const s=this.get(t,!0);return At(s)?s.hasIn(n):!1}setIn(e,t){const[n,...s]=e;if(s.length===0)this.set(n,t);else{const r=this.get(n,!0);if(At(r))r.setIn(s,t);else if(r===void 0&&this.schema)this.set(n,Fa(this.schema,s,t));else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${s}`)}}}const zp=i=>i.replace(/^(?!$)(?: $)?/gm,"#");function ni(i,e){return/^\n+$/.test(i)?i.substring(1):e?i.replace(/^(?! *$)/gm,e):i}const Vi=(i,e,t)=>i.endsWith(`
`)?ni(t,e):t.includes(`
`)?`
`+ni(t,e):(i.endsWith(" ")?"":" ")+t,sh="flow",dl="block",Ma="quoted";function Ya(i,e,t="flow",{indentAtStart:n,lineWidth:s=80,minContentWidth:r=20,onFold:a,onOverflow:o}={}){if(!s||s<0)return i;s<r&&(r=0);const c=Math.max(1+r,1+s-e.length);if(i.length<=c)return i;const l=[],f={};let h=s-e.length;typeof n=="number"&&(n>s-Math.max(2,r)?l.push(0):h=s-n);let d,p,y=!1,v=-1,_=-1,m=-1;t===dl&&(v=lu(i,v,e.length),v!==-1&&(h=v+c));for(let b;b=i[v+=1];){if(t===Ma&&b==="\\"){switch(_=v,i[v+1]){case"x":v+=3;break;case"u":v+=5;break;case"U":v+=9;break;default:v+=1}m=v}if(b===`
`)t===dl&&(v=lu(i,v,e.length)),h=v+e.length+c,d=void 0;else{if(b===" "&&p&&p!==" "&&p!==`
`&&p!=="	"){const S=i[v+1];S&&S!==" "&&S!==`
`&&S!=="	"&&(d=v)}if(v>=h)if(d)l.push(d),h=d+c,d=void 0;else if(t===Ma){for(;p===" "||p==="	";)p=b,b=i[v+=1],y=!0;const S=v>m+1?v-2:_-1;if(f[S])return i;l.push(S),f[S]=!0,h=S+c,d=void 0}else y=!0}p=b}if(y&&o&&o(),l.length===0)return i;a&&a();let R=i.slice(0,l[0]);for(let b=0;b<l.length;++b){const S=l[b],I=l[b+1]||i.length;S===0?R=`
${e}${i.slice(0,I)}`:(t===Ma&&f[S]&&(R+=`${i[S]}\\`),R+=`
${e}${i.slice(S+1,I)}`)}return R}function lu(i,e,t){let n=e,s=e+1,r=i[s];for(;r===" "||r==="	";)if(e<s+t)r=i[++e];else{do r=i[++e];while(r&&r!==`
`);n=e,s=e+1,r=i[s]}return n}const Ja=(i,e)=>({indentAtStart:e?i.indent.length:i.indentAtStart,lineWidth:i.options.lineWidth,minContentWidth:i.options.minContentWidth}),Za=i=>/^(%|---|\.\.\.)/m.test(i);function Hp(i,e,t){if(!e||e<0)return!1;const n=e-t,s=i.length;if(s<=n)return!1;for(let r=0,a=0;r<s;++r)if(i[r]===`
`){if(r-a>n)return!0;if(a=r+1,s-a<=n)return!1}return!0}function _r(i,e){const t=JSON.stringify(i);if(e.options.doubleQuotedAsJSON)return t;const{implicitKey:n}=e,s=e.options.doubleQuotedMinMultiLineLength,r=e.indent||(Za(i)?"  ":"");let a="",o=0;for(let c=0,l=t[c];l;l=t[++c])if(l===" "&&t[c+1]==="\\"&&t[c+2]==="n"&&(a+=t.slice(o,c)+"\\ ",c+=1,o=c,l="\\"),l==="\\")switch(t[c+1]){case"u":{a+=t.slice(o,c);const f=t.substr(c+2,4);switch(f){case"0000":a+="\\0";break;case"0007":a+="\\a";break;case"000b":a+="\\v";break;case"001b":a+="\\e";break;case"0085":a+="\\N";break;case"00a0":a+="\\_";break;case"2028":a+="\\L";break;case"2029":a+="\\P";break;default:f.substr(0,2)==="00"?a+="\\x"+f.substr(2):a+=t.substr(c,6)}c+=5,o=c+1}break;case"n":if(n||t[c+2]==='"'||t.length<s)c+=1;else{for(a+=t.slice(o,c)+`

`;t[c+2]==="\\"&&t[c+3]==="n"&&t[c+4]!=='"';)a+=`
`,c+=2;a+=r,t[c+2]===" "&&(a+="\\"),c+=1,o=c+1}break;default:c+=1}return a=o?a+t.slice(o):t,n?a:Ya(a,r,Ma,Ja(e,!1))}function pl(i,e){if(e.options.singleQuote===!1||e.implicitKey&&i.includes(`
`)||/[ \t]\n|\n[ \t]/.test(i))return _r(i,e);const t=e.indent||(Za(i)?"  ":""),n="'"+i.replace(/'/g,"''").replace(/\n+/g,`$&
${t}`)+"'";return e.implicitKey?n:Ya(n,t,sh,Ja(e,!1))}function Cs(i,e){const{singleQuote:t}=e.options;let n;if(t===!1)n=_r;else{const s=i.includes('"'),r=i.includes("'");s&&!r?n=pl:r&&!s?n=_r:n=t?pl:_r}return n(i,e)}let ml;try{ml=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{ml=/\n+(?!\n|$)/g}function Ea({comment:i,type:e,value:t},n,s,r){const{blockQuote:a,commentString:o,lineWidth:c}=n.options;if(!a||/\n[\t ]+$/.test(t))return Cs(t,n);const l=n.indent||(n.forceBlockIndent||Za(t)?"  ":""),f=a==="literal"?!0:a==="folded"||e===Ye.BLOCK_FOLDED?!1:e===Ye.BLOCK_LITERAL?!0:!Hp(t,c,l.length);if(!t)return f?`|
`:`>
`;let h,d;for(d=t.length;d>0;--d){const I=t[d-1];if(I!==`
`&&I!=="	"&&I!==" ")break}let p=t.substring(d);const y=p.indexOf(`
`);y===-1?h="-":t===p||y!==p.length-1?(h="+",r&&r()):h="",p&&(t=t.slice(0,-p.length),p[p.length-1]===`
`&&(p=p.slice(0,-1)),p=p.replace(ml,`$&${l}`));let v=!1,_,m=-1;for(_=0;_<t.length;++_){const I=t[_];if(I===" ")v=!0;else if(I===`
`)m=_;else break}let R=t.substring(0,m<_?m+1:_);R&&(t=t.substring(R.length),R=R.replace(/\n+/g,`$&${l}`));let S=(v?l?"2":"1":"")+h;if(i&&(S+=" "+o(i.replace(/ ?[\r\n]+/g," ")),s&&s()),!f){const I=t.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${l}`);let L=!1;const C=Ja(n,!0);a!=="folded"&&e!==Ye.BLOCK_FOLDED&&(C.onOverflow=()=>{L=!0});const D=Ya(`${R}${I}${p}`,l,dl,C);if(!L)return`>${S}
${l}${D}`}return t=t.replace(/\n+/g,`$&${l}`),`|${S}
${l}${R}${t}${p}`}function Gp(i,e,t,n){const{type:s,value:r}=i,{actualString:a,implicitKey:o,indent:c,indentStep:l,inFlow:f}=e;if(o&&r.includes(`
`)||f&&/[[\]{},]/.test(r))return Cs(r,e);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(r))return o||f||!r.includes(`
`)?Cs(r,e):Ea(i,e,t,n);if(!o&&!f&&s!==Ye.PLAIN&&r.includes(`
`))return Ea(i,e,t,n);if(Za(r)){if(c==="")return e.forceBlockIndent=!0,Ea(i,e,t,n);if(o&&c===l)return Cs(r,e)}const h=r.replace(/\n+/g,`$&
${c}`);if(a){const d=v=>{var _;return v.default&&v.tag!=="tag:yaml.org,2002:str"&&((_=v.test)==null?void 0:_.test(h))},{compat:p,tags:y}=e.doc.schema;if(y.some(d)||p!=null&&p.some(d))return Cs(r,e)}return o?h:Ya(h,c,sh,Ja(e,!1))}function Pr(i,e,t,n){const{implicitKey:s,inFlow:r}=e,a=typeof i.value=="string"?i:Object.assign({},i,{value:String(i.value)});let{type:o}=i;o!==Ye.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(a.value)&&(o=Ye.QUOTE_DOUBLE);const c=f=>{switch(f){case Ye.BLOCK_FOLDED:case Ye.BLOCK_LITERAL:return s||r?Cs(a.value,e):Ea(a,e,t,n);case Ye.QUOTE_DOUBLE:return _r(a.value,e);case Ye.QUOTE_SINGLE:return pl(a.value,e);case Ye.PLAIN:return Gp(a,e,t,n);default:return null}};let l=c(o);if(l===null){const{defaultKeyType:f,defaultStringType:h}=e.options,d=s&&f||h;if(l=c(d),l===null)throw new Error(`Unsupported default string type ${d}`)}return l}function rh(i,e){const t=Object.assign({blockQuote:!0,commentString:zp,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trailingComma:!1,trueStr:"true",verifyAliasOrder:!0},i.schema.toStringOptions,e);let n;switch(t.collectionStyle){case"block":n=!1;break;case"flow":n=!0;break;default:n=null}return{anchors:new Set,doc:i,flowCollectionPadding:t.flowCollectionPadding?" ":"",indent:"",indentStep:typeof t.indent=="number"?" ".repeat(t.indent):"  ",inFlow:n,options:t}}function Vp(i,e){var s;if(e.tag){const r=i.filter(a=>a.tag===e.tag);if(r.length>0)return r.find(a=>a.format===e.format)??r[0]}let t,n;if(bt(e)){n=e.value;let r=i.filter(a=>{var o;return(o=a.identify)==null?void 0:o.call(a,n)});if(r.length>1){const a=r.filter(o=>o.test);a.length>0&&(r=a)}t=r.find(a=>a.format===e.format)??r.find(a=>!a.format)}else n=e,t=i.find(r=>r.nodeClass&&n instanceof r.nodeClass);if(!t){const r=((s=n==null?void 0:n.constructor)==null?void 0:s.name)??(n===null?"null":typeof n);throw new Error(`Tag not resolved for ${r} value`)}return t}function Wp(i,e,{anchors:t,doc:n}){if(!n.directives)return"";const s=[],r=(bt(i)||At(i))&&i.anchor;r&&Qf(r)&&(t.add(r),s.push(`&${r}`));const a=i.tag??(e.default?null:e.tag);return a&&s.push(n.directives.tagString(a)),s.join(" ")}function Us(i,e,t,n){var c;if(Et(i))return i.toString(e,t,n);if(Zi(i)){if(e.doc.directives)return i.toString(e);if((c=e.resolvedAliases)!=null&&c.has(i))throw new TypeError("Cannot stringify circular structure without alias nodes");e.resolvedAliases?e.resolvedAliases.add(i):e.resolvedAliases=new Set([i]),i=i.resolve(e.doc)}let s;const r=Rt(i)?i:e.doc.createNode(i,{onTagObj:l=>s=l});s??(s=Vp(e.doc.schema.tags,r));const a=Wp(r,s,e);a.length>0&&(e.indentAtStart=(e.indentAtStart??0)+a.length+1);const o=typeof s.stringify=="function"?s.stringify(r,e,t,n):bt(r)?Pr(r,e,t,n):r.toString(e,t,n);return a?bt(r)||o[0]==="{"||o[0]==="["?`${a} ${o}`:`${a}
${e.indent}${o}`:o}function qp({key:i,value:e},t,n,s){const{allNullValues:r,doc:a,indent:o,indentStep:c,options:{commentString:l,indentSeq:f,simpleKeys:h}}=t;let d=Rt(i)&&i.comment||null;if(h){if(d)throw new Error("With simple keys, key nodes cannot have comments");if(At(i)||!Rt(i)&&typeof i=="object"){const C="With simple keys, collection cannot be used as a key value";throw new Error(C)}}let p=!h&&(!i||d&&e==null&&!t.inFlow||At(i)||(bt(i)?i.type===Ye.BLOCK_FOLDED||i.type===Ye.BLOCK_LITERAL:typeof i=="object"));t=Object.assign({},t,{allNullValues:!1,implicitKey:!p&&(h||!r),indent:o+c});let y=!1,v=!1,_=Us(i,t,()=>y=!0,()=>v=!0);if(!p&&!t.inFlow&&_.length>1024){if(h)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");p=!0}if(t.inFlow){if(r||e==null)return y&&n&&n(),_===""?"?":p?`? ${_}`:_}else if(r&&!h||e==null&&p)return _=`? ${_}`,d&&!y?_+=Vi(_,t.indent,l(d)):v&&s&&s(),_;y&&(d=null),p?(d&&(_+=Vi(_,t.indent,l(d))),_=`? ${_}
${o}:`):(_=`${_}:`,d&&(_+=Vi(_,t.indent,l(d))));let m,R,b;Rt(e)?(m=!!e.spaceBefore,R=e.commentBefore,b=e.comment):(m=!1,R=null,b=null,e&&typeof e=="object"&&(e=a.createNode(e))),t.implicitKey=!1,!p&&!d&&bt(e)&&(t.indentAtStart=_.length+1),v=!1,!f&&c.length>=2&&!t.inFlow&&!p&&$s(e)&&!e.flow&&!e.tag&&!e.anchor&&(t.indent=t.indent.substring(2));let S=!1;const I=Us(e,t,()=>S=!0,()=>v=!0);let L=" ";if(d||m||R){if(L=m?`
`:"",R){const C=l(R);L+=`
${ni(C,t.indent)}`}I===""&&!t.inFlow?L===`
`&&b&&(L=`

`):L+=`
${t.indent}`}else if(!p&&At(e)){const C=I[0],D=I.indexOf(`
`),E=D!==-1,w=t.inFlow??e.flow??e.items.length===0;if(E||!w){let k=!1;if(E&&(C==="&"||C==="!")){let U=I.indexOf(" ");C==="&"&&U!==-1&&U<D&&I[U+1]==="!"&&(U=I.indexOf(" ",U+1)),(U===-1||D<U)&&(k=!0)}k||(L=`
${t.indent}`)}}else(I===""||I[0]===`
`)&&(L="");return _+=L+I,t.inFlow?S&&n&&n():b&&!S?_+=Vi(_,t.indent,l(b)):v&&s&&s(),_}function ah(i,e){(i==="debug"||i==="warn")&&console.warn(e)}const jr="<<",ai={identify:i=>i===jr||typeof i=="symbol"&&i.description===jr,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new Ye(Symbol(jr)),{addToJSMap:oh}),stringify:()=>jr},jp=(i,e)=>(ai.identify(e)||bt(e)&&(!e.type||e.type===Ye.PLAIN)&&ai.identify(e.value))&&(i==null?void 0:i.doc.schema.tags.some(t=>t.tag===ai.tag&&t.default));function oh(i,e,t){const n=lh(i,t);if($s(n))for(const s of n.items)vo(i,e,s);else if(Array.isArray(n))for(const s of n)vo(i,e,s);else vo(i,e,n)}function vo(i,e,t){const n=lh(i,t);if(!Xs(n))throw new Error("Merge sources must be maps or map aliases");const s=n.toJSON(null,i,Map);for(const[r,a]of s)e instanceof Map?e.has(r)||e.set(r,a):e instanceof Set?e.add(r):Object.prototype.hasOwnProperty.call(e,r)||Object.defineProperty(e,r,{value:a,writable:!0,enumerable:!0,configurable:!0});return e}function lh(i,e){return i&&Zi(e)?e.resolve(i.doc,i):e}function ch(i,e,{key:t,value:n}){if(Rt(t)&&t.addToJSMap)t.addToJSMap(i,e,n);else if(jp(i,t))oh(i,e,n);else{const s=wn(t,"",i);if(e instanceof Map)e.set(s,wn(n,s,i));else if(e instanceof Set)e.add(s);else{const r=Xp(t,s,i),a=wn(n,r,i);r in e?Object.defineProperty(e,r,{value:a,writable:!0,enumerable:!0,configurable:!0}):e[r]=a}}return e}function Xp(i,e,t){if(e===null)return"";if(typeof e!="object")return String(e);if(Rt(i)&&(t!=null&&t.doc)){const n=rh(t.doc,{});n.anchors=new Set;for(const r of t.anchors.keys())n.anchors.add(r.anchor);n.inFlow=!0,n.inStringifyKey=!0;const s=i.toString(n);if(!t.mapKeyWarned){let r=JSON.stringify(s);r.length>40&&(r=r.substring(0,36)+'..."'),ah(t.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${r}. Set mapAsMap: true to use object keys.`),t.mapKeyWarned=!0}return s}return JSON.stringify(e)}function gc(i,e,t){const n=br(i,void 0,t),s=br(e,void 0,t);return new en(n,s)}class en{constructor(e,t=null){Object.defineProperty(this,Mn,{value:Xf}),this.key=e,this.value=t}clone(e){let{key:t,value:n}=this;return Rt(t)&&(t=t.clone(e)),Rt(n)&&(n=n.clone(e)),new en(t,n)}toJSON(e,t){const n=t!=null&&t.mapAsMap?new Map:{};return ch(t,n,this)}toString(e,t,n){return e!=null&&e.doc?qp(this,e,t,n):JSON.stringify(this)}}function uh(i,e,t){return(e.inFlow??i.flow?Kp:$p)(i,e,t)}function $p({comment:i,items:e},t,{blockItemPrefix:n,flowChars:s,itemIndent:r,onChompKeep:a,onComment:o}){const{indent:c,options:{commentString:l}}=t,f=Object.assign({},t,{indent:r,type:null});let h=!1;const d=[];for(let y=0;y<e.length;++y){const v=e[y];let _=null;if(Rt(v))!h&&v.spaceBefore&&d.push(""),Ba(t,d,v.commentBefore,h),v.comment&&(_=v.comment);else if(Et(v)){const R=Rt(v.key)?v.key:null;R&&(!h&&R.spaceBefore&&d.push(""),Ba(t,d,R.commentBefore,h))}h=!1;let m=Us(v,f,()=>_=null,()=>h=!0);_&&(m+=Vi(m,r,l(_))),h&&_&&(h=!1),d.push(n+m)}let p;if(d.length===0)p=s.start+s.end;else{p=d[0];for(let y=1;y<d.length;++y){const v=d[y];p+=v?`
${c}${v}`:`
`}}return i?(p+=`
`+ni(l(i),c),o&&o()):h&&a&&a(),p}function Kp({items:i},e,{flowChars:t,itemIndent:n}){const{indent:s,indentStep:r,flowCollectionPadding:a,options:{commentString:o}}=e;n+=r;const c=Object.assign({},e,{indent:n,inFlow:!0,type:null});let l=!1,f=0;const h=[];for(let y=0;y<i.length;++y){const v=i[y];let _=null;if(Rt(v))v.spaceBefore&&h.push(""),Ba(e,h,v.commentBefore,!1),v.comment&&(_=v.comment);else if(Et(v)){const R=Rt(v.key)?v.key:null;R&&(R.spaceBefore&&h.push(""),Ba(e,h,R.commentBefore,!1),R.comment&&(l=!0));const b=Rt(v.value)?v.value:null;b?(b.comment&&(_=b.comment),b.commentBefore&&(l=!0)):v.value==null&&(R!=null&&R.comment)&&(_=R.comment)}_&&(l=!0);let m=Us(v,c,()=>_=null);l||(l=h.length>f||m.includes(`
`)),y<i.length-1?m+=",":e.options.trailingComma&&(e.options.lineWidth>0&&(l||(l=h.reduce((R,b)=>R+b.length+2,2)+(m.length+2)>e.options.lineWidth)),l&&(m+=",")),_&&(m+=Vi(m,n,o(_))),h.push(m),f=h.length}const{start:d,end:p}=t;if(h.length===0)return d+p;if(!l){const y=h.reduce((v,_)=>v+_.length+2,2);l=e.options.lineWidth>0&&y>e.options.lineWidth}if(l){let y=d;for(const v of h)y+=v?`
${r}${s}${v}`:`
`;return`${y}
${s}${p}`}else return`${d}${a}${h.join(" ")}${a}${p}`}function Ba({indent:i,options:{commentString:e}},t,n,s){if(n&&s&&(n=n.replace(/^\n+/,"")),n){const r=ni(e(n),i);t.push(r.trimStart())}}function Wi(i,e){const t=bt(e)?e.value:e;for(const n of i)if(Et(n)&&(n.key===e||n.key===t||bt(n.key)&&n.key.value===t))return n}class gn extends ih{static get tagName(){return"tag:yaml.org,2002:map"}constructor(e){super(Si,e),this.items=[]}static from(e,t,n){const{keepUndefined:s,replacer:r}=n,a=new this(e),o=(c,l)=>{if(typeof r=="function")l=r.call(t,c,l);else if(Array.isArray(r)&&!r.includes(c))return;(l!==void 0||s)&&a.items.push(gc(c,l,n))};if(t instanceof Map)for(const[c,l]of t)o(c,l);else if(t&&typeof t=="object")for(const c of Object.keys(t))o(c,t[c]);return typeof e.sortMapEntries=="function"&&a.items.sort(e.sortMapEntries),a}add(e,t){var a;let n;Et(e)?n=e:!e||typeof e!="object"||!("key"in e)?n=new en(e,e==null?void 0:e.value):n=new en(e.key,e.value);const s=Wi(this.items,n.key),r=(a=this.schema)==null?void 0:a.sortMapEntries;if(s){if(!t)throw new Error(`Key ${n.key} already set`);bt(s.value)&&nh(n.value)?s.value.value=n.value:s.value=n.value}else if(r){const o=this.items.findIndex(c=>r(n,c)<0);o===-1?this.items.push(n):this.items.splice(o,0,n)}else this.items.push(n)}delete(e){const t=Wi(this.items,e);return t?this.items.splice(this.items.indexOf(t),1).length>0:!1}get(e,t){const n=Wi(this.items,e),s=n==null?void 0:n.value;return(!t&&bt(s)?s.value:s)??void 0}has(e){return!!Wi(this.items,e)}set(e,t){this.add(new en(e,t),!0)}toJSON(e,t,n){const s=n?new n:t!=null&&t.mapAsMap?new Map:{};t!=null&&t.onCreate&&t.onCreate(s);for(const r of this.items)ch(t,s,r);return s}toString(e,t,n){if(!e)return JSON.stringify(this);for(const s of this.items)if(!Et(s))throw new Error(`Map items must all be pairs; found ${JSON.stringify(s)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),uh(this,e,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:e.indent||"",onChompKeep:n,onComment:t})}}const Ks={collection:"map",default:!0,nodeClass:gn,tag:"tag:yaml.org,2002:map",resolve(i,e){return Xs(i)||e("Expected a mapping for this tag"),i},createNode:(i,e,t)=>gn.from(i,e,t)};class Ei extends ih{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(e){super(js,e),this.items=[]}add(e){this.items.push(e)}delete(e){const t=Xr(e);return typeof t!="number"?!1:this.items.splice(t,1).length>0}get(e,t){const n=Xr(e);if(typeof n!="number")return;const s=this.items[n];return!t&&bt(s)?s.value:s}has(e){const t=Xr(e);return typeof t=="number"&&t<this.items.length}set(e,t){const n=Xr(e);if(typeof n!="number")throw new Error(`Expected a valid index, not ${e}.`);const s=this.items[n];bt(s)&&nh(t)?s.value=t:this.items[n]=t}toJSON(e,t){const n=[];t!=null&&t.onCreate&&t.onCreate(n);let s=0;for(const r of this.items)n.push(wn(r,String(s++),t));return n}toString(e,t,n){return e?uh(this,e,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(e.indent||"")+"  ",onChompKeep:n,onComment:t}):JSON.stringify(this)}static from(e,t,n){const{replacer:s}=n,r=new this(e);if(t&&Symbol.iterator in Object(t)){let a=0;for(let o of t){if(typeof s=="function"){const c=t instanceof Set?o:String(a++);o=s.call(t,c,o)}r.items.push(br(o,void 0,n))}}return r}}function Xr(i){let e=bt(i)?i.value:i;return e&&typeof e=="string"&&(e=Number(e)),typeof e=="number"&&Number.isInteger(e)&&e>=0?e:null}const Ys={collection:"seq",default:!0,nodeClass:Ei,tag:"tag:yaml.org,2002:seq",resolve(i,e){return $s(i)||e("Expected a sequence for this tag"),i},createNode:(i,e,t)=>Ei.from(i,e,t)},Qa={identify:i=>typeof i=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:i=>i,stringify(i,e,t,n){return e=Object.assign({actualString:!0},e),Pr(i,e,t,n)}},eo={identify:i=>i==null,createNode:()=>new Ye(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new Ye(null),stringify:({source:i},e)=>typeof i=="string"&&eo.test.test(i)?i:e.options.nullStr},_c={identify:i=>typeof i=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:i=>new Ye(i[0]==="t"||i[0]==="T"),stringify({source:i,value:e},t){if(i&&_c.test.test(i)){const n=i[0]==="t"||i[0]==="T";if(e===n)return i}return e?t.options.trueStr:t.options.falseStr}};function Fn({format:i,minFractionDigits:e,tag:t,value:n}){if(typeof n=="bigint")return String(n);const s=typeof n=="number"?n:Number(n);if(!isFinite(s))return isNaN(s)?".nan":s<0?"-.inf":".inf";let r=Object.is(n,-0)?"-0":JSON.stringify(n);if(!i&&e&&(!t||t==="tag:yaml.org,2002:float")&&/^-?\d/.test(r)&&!r.includes("e")){let a=r.indexOf(".");a<0&&(a=r.length,r+=".");let o=e-(r.length-a-1);for(;o-- >0;)r+="0"}return r}const fh={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:i=>i.slice(-3).toLowerCase()==="nan"?NaN:i[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Fn},hh={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:i=>parseFloat(i),stringify(i){const e=Number(i.value);return isFinite(e)?e.toExponential():Fn(i)}},dh={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(i){const e=new Ye(parseFloat(i)),t=i.indexOf(".");return t!==-1&&i[i.length-1]==="0"&&(e.minFractionDigits=i.length-t-1),e},stringify:Fn},to=i=>typeof i=="bigint"||Number.isInteger(i),vc=(i,e,t,{intAsBigInt:n})=>n?BigInt(i):parseInt(i.substring(e),t);function ph(i,e,t){const{value:n}=i;return to(n)&&n>=0?t+n.toString(e):Fn(i)}const mh={identify:i=>to(i)&&i>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(i,e,t)=>vc(i,2,8,t),stringify:i=>ph(i,8,"0o")},gh={identify:to,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(i,e,t)=>vc(i,0,10,t),stringify:Fn},_h={identify:i=>to(i)&&i>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(i,e,t)=>vc(i,2,16,t),stringify:i=>ph(i,16,"0x")},Yp=[Ks,Ys,Qa,eo,_c,mh,gh,_h,fh,hh,dh];function cu(i){return typeof i=="bigint"||Number.isInteger(i)}const $r=({value:i})=>JSON.stringify(i),Jp=[{identify:i=>typeof i=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:i=>i,stringify:$r},{identify:i=>i==null,createNode:()=>new Ye(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:$r},{identify:i=>typeof i=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:i=>i==="true",stringify:$r},{identify:cu,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(i,e,{intAsBigInt:t})=>t?BigInt(i):parseInt(i,10),stringify:({value:i})=>cu(i)?i.toString():JSON.stringify(i)},{identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:i=>parseFloat(i),stringify:$r}],Zp={default:!0,tag:"",test:/^/,resolve(i,e){return e(`Unresolved plain scalar ${JSON.stringify(i)}`),i}},Qp=[Ks,Ys].concat(Jp,Zp),yc={identify:i=>i instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(i,e){if(typeof atob=="function"){const t=atob(i.replace(/[\n\r]/g,"")),n=new Uint8Array(t.length);for(let s=0;s<t.length;++s)n[s]=t.charCodeAt(s);return n}else return e("This environment does not support reading binary tags; either Buffer or atob is required"),i},stringify({comment:i,type:e,value:t},n,s,r){if(!t)return"";const a=t;let o;if(typeof btoa=="function"){let c="";for(let l=0;l<a.length;++l)c+=String.fromCharCode(a[l]);o=btoa(c)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(e??(e=Ye.BLOCK_LITERAL),e!==Ye.QUOTE_DOUBLE){const c=Math.max(n.options.lineWidth-n.indent.length,n.options.minContentWidth),l=Math.ceil(o.length/c),f=new Array(l);for(let h=0,d=0;h<l;++h,d+=c)f[h]=o.substr(d,c);o=f.join(e===Ye.BLOCK_LITERAL?`
`:" ")}return Pr({comment:i,type:e,value:o},n,s,r)}};function vh(i,e){if($s(i))for(let t=0;t<i.items.length;++t){let n=i.items[t];if(!Et(n)){if(Xs(n)){n.items.length>1&&e("Each pair must have its own sequence indicator");const s=n.items[0]||new en(new Ye(null));if(n.commentBefore&&(s.key.commentBefore=s.key.commentBefore?`${n.commentBefore}
${s.key.commentBefore}`:n.commentBefore),n.comment){const r=s.value??s.key;r.comment=r.comment?`${n.comment}
${r.comment}`:n.comment}n=s}i.items[t]=Et(n)?n:new en(n)}}else e("Expected a sequence for this tag");return i}function yh(i,e,t){const{replacer:n}=t,s=new Ei(i);s.tag="tag:yaml.org,2002:pairs";let r=0;if(e&&Symbol.iterator in Object(e))for(let a of e){typeof n=="function"&&(a=n.call(e,String(r++),a));let o,c;if(Array.isArray(a))if(a.length===2)o=a[0],c=a[1];else throw new TypeError(`Expected [key, value] tuple: ${a}`);else if(a&&a instanceof Object){const l=Object.keys(a);if(l.length===1)o=l[0],c=a[o];else throw new TypeError(`Expected tuple with one key, not ${l.length} keys`)}else o=a;s.items.push(gc(o,c,t))}return s}const xc={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:vh,createNode:yh};class Is extends Ei{constructor(){super(),this.add=gn.prototype.add.bind(this),this.delete=gn.prototype.delete.bind(this),this.get=gn.prototype.get.bind(this),this.has=gn.prototype.has.bind(this),this.set=gn.prototype.set.bind(this),this.tag=Is.tag}toJSON(e,t){if(!t)return super.toJSON(e);const n=new Map;t!=null&&t.onCreate&&t.onCreate(n);for(const s of this.items){let r,a;if(Et(s)?(r=wn(s.key,"",t),a=wn(s.value,r,t)):r=wn(s,"",t),n.has(r))throw new Error("Ordered maps must not include duplicate keys");n.set(r,a)}return n}static from(e,t,n){const s=yh(e,t,n),r=new this;return r.items=s.items,r}}Is.tag="tag:yaml.org,2002:omap";const bc={collection:"seq",identify:i=>i instanceof Map,nodeClass:Is,default:!1,tag:"tag:yaml.org,2002:omap",resolve(i,e){const t=vh(i,e),n=[];for(const{key:s}of t.items)bt(s)&&(n.includes(s.value)?e(`Ordered maps must not include duplicate keys: ${s.value}`):n.push(s.value));return Object.assign(new Is,t)},createNode:(i,e,t)=>Is.from(i,e,t)};function xh({value:i,source:e},t){return e&&(i?bh:wh).test.test(e)?e:i?t.options.trueStr:t.options.falseStr}const bh={identify:i=>i===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new Ye(!0),stringify:xh},wh={identify:i=>i===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new Ye(!1),stringify:xh},em={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:i=>i.slice(-3).toLowerCase()==="nan"?NaN:i[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Fn},tm={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:i=>parseFloat(i.replace(/_/g,"")),stringify(i){const e=Number(i.value);return isFinite(e)?e.toExponential():Fn(i)}},nm={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(i){const e=new Ye(parseFloat(i.replace(/_/g,""))),t=i.indexOf(".");if(t!==-1){const n=i.substring(t+1).replace(/_/g,"");n[n.length-1]==="0"&&(e.minFractionDigits=n.length)}return e},stringify:Fn},Lr=i=>typeof i=="bigint"||Number.isInteger(i);function no(i,e,t,{intAsBigInt:n}){const s=i[0];if((s==="-"||s==="+")&&(e+=1),i=i.substring(e).replace(/_/g,""),n){switch(t){case 2:i=`0b${i}`;break;case 8:i=`0o${i}`;break;case 16:i=`0x${i}`;break}const a=BigInt(i);return s==="-"?BigInt(-1)*a:a}const r=parseInt(i,t);return s==="-"?-1*r:r}function wc(i,e,t){const{value:n}=i;if(Lr(n)){const s=n.toString(e);return n<0?"-"+t+s.substr(1):t+s}return Fn(i)}const im={identify:Lr,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(i,e,t)=>no(i,2,2,t),stringify:i=>wc(i,2,"0b")},sm={identify:Lr,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(i,e,t)=>no(i,1,8,t),stringify:i=>wc(i,8,"0")},rm={identify:Lr,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(i,e,t)=>no(i,0,10,t),stringify:Fn},am={identify:Lr,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(i,e,t)=>no(i,2,16,t),stringify:i=>wc(i,16,"0x")};class Ds extends gn{constructor(e){super(e),this.tag=Ds.tag}add(e){let t;Et(e)?t=e:e&&typeof e=="object"&&"key"in e&&"value"in e&&e.value===null?t=new en(e.key,null):t=new en(e,null),Wi(this.items,t.key)||this.items.push(t)}get(e,t){const n=Wi(this.items,e);return!t&&Et(n)?bt(n.key)?n.key.value:n.key:n}set(e,t){if(typeof t!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);const n=Wi(this.items,e);n&&!t?this.items.splice(this.items.indexOf(n),1):!n&&t&&this.items.push(new en(e))}toJSON(e,t){return super.toJSON(e,t,Set)}toString(e,t,n){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),t,n);throw new Error("Set items must all have null values")}static from(e,t,n){const{replacer:s}=n,r=new this(e);if(t&&Symbol.iterator in Object(t))for(let a of t)typeof s=="function"&&(a=s.call(t,a,a)),r.items.push(gc(a,null,n));return r}}Ds.tag="tag:yaml.org,2002:set";const Sc={collection:"map",identify:i=>i instanceof Set,nodeClass:Ds,default:!1,tag:"tag:yaml.org,2002:set",createNode:(i,e,t)=>Ds.from(i,e,t),resolve(i,e){if(Xs(i)){if(i.hasAllNullValues(!0))return Object.assign(new Ds,i);e("Set items must all have null values")}else e("Expected a mapping for this tag");return i}};function Mc(i,e){const t=i[0],n=t==="-"||t==="+"?i.substring(1):i,s=a=>e?BigInt(a):Number(a),r=n.replace(/_/g,"").split(":").reduce((a,o)=>a*s(60)+s(o),s(0));return t==="-"?s(-1)*r:r}function Sh(i){let{value:e}=i,t=a=>a;if(typeof e=="bigint")t=a=>BigInt(a);else if(isNaN(e)||!isFinite(e))return Fn(i);let n="";e<0&&(n="-",e*=t(-1));const s=t(60),r=[e%s];return e<60?r.unshift(0):(e=(e-r[0])/s,r.unshift(e%s),e>=60&&(e=(e-r[0])/s,r.unshift(e))),n+r.map(a=>String(a).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}const Mh={identify:i=>typeof i=="bigint"||Number.isInteger(i),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(i,e,{intAsBigInt:t})=>Mc(i,t),stringify:Sh},Eh={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:i=>Mc(i,!1),stringify:Sh},io={identify:i=>i instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(i){const e=i.match(io.test);if(!e)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,t,n,s,r,a,o]=e.map(Number),c=e[7]?Number((e[7]+"00").substr(1,3)):0;let l=Date.UTC(t,n-1,s,r||0,a||0,o||0,c);const f=e[8];if(f&&f!=="Z"){let h=Mc(f,!1);Math.abs(h)<30&&(h*=60),l-=6e4*h}return new Date(l)},stringify:({value:i})=>(i==null?void 0:i.toISOString().replace(/(T00:00:00)?\.000Z$/,""))??""},uu=[Ks,Ys,Qa,eo,bh,wh,im,sm,rm,am,em,tm,nm,yc,ai,bc,xc,Sc,Mh,Eh,io],fu=new Map([["core",Yp],["failsafe",[Ks,Ys,Qa]],["json",Qp],["yaml11",uu],["yaml-1.1",uu]]),hu={binary:yc,bool:_c,float:dh,floatExp:hh,floatNaN:fh,floatTime:Eh,int:gh,intHex:_h,intOct:mh,intTime:Mh,map:Ks,merge:ai,null:eo,omap:bc,pairs:xc,seq:Ys,set:Sc,timestamp:io},om={"tag:yaml.org,2002:binary":yc,"tag:yaml.org,2002:merge":ai,"tag:yaml.org,2002:omap":bc,"tag:yaml.org,2002:pairs":xc,"tag:yaml.org,2002:set":Sc,"tag:yaml.org,2002:timestamp":io};function yo(i,e,t){const n=fu.get(e);if(n&&!i)return t&&!n.includes(ai)?n.concat(ai):n.slice();let s=n;if(!s)if(Array.isArray(i))s=[];else{const r=Array.from(fu.keys()).filter(a=>a!=="yaml11").map(a=>JSON.stringify(a)).join(", ");throw new Error(`Unknown schema "${e}"; use one of ${r} or define customTags array`)}if(Array.isArray(i))for(const r of i)s=s.concat(r);else typeof i=="function"&&(s=i(s.slice()));return t&&(s=s.concat(ai)),s.reduce((r,a)=>{const o=typeof a=="string"?hu[a]:a;if(!o){const c=JSON.stringify(a),l=Object.keys(hu).map(f=>JSON.stringify(f)).join(", ");throw new Error(`Unknown custom tag ${c}; use one of ${l}`)}return r.includes(o)||r.push(o),r},[])}const lm=(i,e)=>i.key<e.key?-1:i.key>e.key?1:0;class so{constructor({compat:e,customTags:t,merge:n,resolveKnownTags:s,schema:r,sortMapEntries:a,toStringDefaults:o}){this.compat=Array.isArray(e)?yo(e,"compat"):e?yo(null,e):null,this.name=typeof r=="string"&&r||"core",this.knownTags=s?om:{},this.tags=yo(t,this.name,n),this.toStringOptions=o??null,Object.defineProperty(this,Si,{value:Ks}),Object.defineProperty(this,Wn,{value:Qa}),Object.defineProperty(this,js,{value:Ys}),this.sortMapEntries=typeof a=="function"?a:a===!0?lm:null}clone(){const e=Object.create(so.prototype,Object.getOwnPropertyDescriptors(this));return e.tags=this.tags.slice(),e}}function cm(i,e){var c;const t=[];let n=e.directives===!0;if(e.directives!==!1&&i.directives){const l=i.directives.toString(i);l?(t.push(l),n=!0):i.directives.docStart&&(n=!0)}n&&t.push("---");const s=rh(i,e),{commentString:r}=s.options;if(i.commentBefore){t.length!==1&&t.unshift("");const l=r(i.commentBefore);t.unshift(ni(l,""))}let a=!1,o=null;if(i.contents){if(Rt(i.contents)){if(i.contents.spaceBefore&&n&&t.push(""),i.contents.commentBefore){const h=r(i.contents.commentBefore);t.push(ni(h,""))}s.forceBlockIndent=!!i.comment,o=i.contents.comment}const l=o?void 0:()=>a=!0;let f=Us(i.contents,s,()=>o=null,l);o&&(f+=Vi(f,"",r(o))),(f[0]==="|"||f[0]===">")&&t[t.length-1]==="---"?t[t.length-1]=`--- ${f}`:t.push(f)}else t.push(Us(i.contents,s));if((c=i.directives)!=null&&c.docEnd)if(i.comment){const l=r(i.comment);l.includes(`
`)?(t.push("..."),t.push(ni(l,""))):t.push(`... ${l}`)}else t.push("...");else{let l=i.comment;l&&a&&(l=l.replace(/^\n+/,"")),l&&((!a||o)&&t[t.length-1]!==""&&t.push(""),t.push(ni(r(l),"")))}return t.join(`
`)+`
`}class Js{constructor(e,t,n){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,Mn,{value:hl});let s=null;typeof t=="function"||Array.isArray(t)?s=t:n===void 0&&t&&(n=t,t=void 0);const r=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},n);this.options=r;let{version:a}=r;n!=null&&n._directives?(this.directives=n._directives.atDocument(),this.directives.yaml.explicit&&(a=this.directives.yaml.version)):this.directives=new nn({version:a}),this.setSchema(a,n),this.contents=e===void 0?null:this.createNode(e,s,n)}clone(){const e=Object.create(Js.prototype,{[Mn]:{value:hl}});return e.commentBefore=this.commentBefore,e.comment=this.comment,e.errors=this.errors.slice(),e.warnings=this.warnings.slice(),e.options=Object.assign({},this.options),this.directives&&(e.directives=this.directives.clone()),e.schema=this.schema.clone(),e.contents=Rt(this.contents)?this.contents.clone(e.schema):this.contents,this.range&&(e.range=this.range.slice()),e}add(e){as(this.contents)&&this.contents.add(e)}addIn(e,t){as(this.contents)&&this.contents.addIn(e,t)}createAlias(e,t){if(!e.anchor){const n=eh(this);e.anchor=!t||n.has(t)?th(t||"a",n):t}return new Ka(e.anchor)}createNode(e,t,n){let s;if(typeof t=="function")e=t.call({"":e},"",e),s=t;else if(Array.isArray(t)){const _=R=>typeof R=="number"||R instanceof String||R instanceof Number,m=t.filter(_).map(String);m.length>0&&(t=t.concat(m)),s=t}else n===void 0&&t&&(n=t,t=void 0);const{aliasDuplicateObjects:r,anchorPrefix:a,flow:o,keepUndefined:c,onTagObj:l,tag:f}=n??{},{onAnchor:h,setAnchors:d,sourceObjects:p}=Up(this,a||"a"),y={aliasDuplicateObjects:r??!0,keepUndefined:c??!1,onAnchor:h,onTagObj:l,replacer:s,schema:this.schema,sourceObjects:p},v=br(e,f,y);return o&&At(v)&&(v.flow=!0),d(),v}createPair(e,t,n={}){const s=this.createNode(e,null,n),r=this.createNode(t,null,n);return new en(s,r)}delete(e){return as(this.contents)?this.contents.delete(e):!1}deleteIn(e){return pr(e)?this.contents==null?!1:(this.contents=null,!0):as(this.contents)?this.contents.deleteIn(e):!1}get(e,t){return At(this.contents)?this.contents.get(e,t):void 0}getIn(e,t){return pr(e)?!t&&bt(this.contents)?this.contents.value:this.contents:At(this.contents)?this.contents.getIn(e,t):void 0}has(e){return At(this.contents)?this.contents.has(e):!1}hasIn(e){return pr(e)?this.contents!==void 0:At(this.contents)?this.contents.hasIn(e):!1}set(e,t){this.contents==null?this.contents=Fa(this.schema,[e],t):as(this.contents)&&this.contents.set(e,t)}setIn(e,t){pr(e)?this.contents=t:this.contents==null?this.contents=Fa(this.schema,Array.from(e),t):as(this.contents)&&this.contents.setIn(e,t)}setSchema(e,t={}){typeof e=="number"&&(e=String(e));let n;switch(e){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new nn({version:"1.1"}),n={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=e:this.directives=new nn({version:e}),n={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,n=null;break;default:{const s=JSON.stringify(e);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${s}`)}}if(t.schema instanceof Object)this.schema=t.schema;else if(n)this.schema=new so(Object.assign(n,t));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:e,jsonArg:t,mapAsMap:n,maxAliasCount:s,onAnchor:r,reviver:a}={}){const o={anchors:new Map,doc:this,keep:!e,mapAsMap:n===!0,mapKeyWarned:!1,maxAliasCount:typeof s=="number"?s:100},c=wn(this.contents,t??"",o);if(typeof r=="function")for(const{count:l,res:f}of o.anchors.values())r(f,l);return typeof a=="function"?Rs(a,{"":c},"",c):c}toJSON(e,t){return this.toJS({json:!0,jsonArg:e,mapAsMap:!1,onAnchor:t})}toString(e={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in e&&(!Number.isInteger(e.indent)||Number(e.indent)<=0)){const t=JSON.stringify(e.indent);throw new Error(`"indent" option must be a positive integer, not ${t}`)}return cm(this,e)}}function as(i){if(At(i))return!0;throw new Error("Expected a YAML collection as document contents")}class Ec extends Error{constructor(e,t,n,s){super(),this.name=e,this.code=n,this.message=s,this.pos=t}}class qi extends Ec{constructor(e,t,n){super("YAMLParseError",e,t,n)}}class Th extends Ec{constructor(e,t,n){super("YAMLWarning",e,t,n)}}const za=(i,e)=>t=>{if(t.pos[0]===-1)return;t.linePos=t.pos.map(o=>e.linePos(o));const{line:n,col:s}=t.linePos[0];t.message+=` at line ${n}, column ${s}`;let r=s-1,a=i.substring(e.lineStarts[n-1],e.lineStarts[n]).replace(/[\n\r]+$/,"");if(r>=60&&a.length>80){const o=Math.min(r-39,a.length-79);a="…"+a.substring(o),r-=o-1}if(a.length>80&&(a=a.substring(0,79)+"…"),n>1&&/^ *$/.test(a.substring(0,r))){let o=i.substring(e.lineStarts[n-2],e.lineStarts[n-1]);o.length>80&&(o=o.substring(0,79)+`…
`),a=o+a}if(/[^ ]/.test(a)){let o=1;const c=t.linePos[1];(c==null?void 0:c.line)===n&&c.col>s&&(o=Math.max(1,Math.min(c.col-s,80-r)));const l=" ".repeat(r)+"^".repeat(o);t.message+=`:

${a}
${l}
`}};function Fs(i,{flow:e,indicator:t,next:n,offset:s,onError:r,parentIndent:a,startOnNewline:o}){let c=!1,l=o,f=o,h="",d="",p=!1,y=!1,v=null,_=null,m=null,R=null,b=null,S=null,I=null;for(const D of i)switch(y&&(D.type!=="space"&&D.type!=="newline"&&D.type!=="comma"&&r(D.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),y=!1),v&&(l&&D.type!=="comment"&&D.type!=="newline"&&r(v,"TAB_AS_INDENT","Tabs are not allowed as indentation"),v=null),D.type){case"space":!e&&(t!=="doc-start"||(n==null?void 0:n.type)!=="flow-collection")&&D.source.includes("	")&&(v=D),f=!0;break;case"comment":{f||r(D,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const E=D.source.substring(1)||" ";h?h+=d+E:h=E,d="",l=!1;break}case"newline":l?h?h+=D.source:(!S||t!=="seq-item-ind")&&(c=!0):d+=D.source,l=!0,p=!0,(_||m)&&(R=D),f=!0;break;case"anchor":_&&r(D,"MULTIPLE_ANCHORS","A node can have at most one anchor"),D.source.endsWith(":")&&r(D.offset+D.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),_=D,I??(I=D.offset),l=!1,f=!1,y=!0;break;case"tag":{m&&r(D,"MULTIPLE_TAGS","A node can have at most one tag"),m=D,I??(I=D.offset),l=!1,f=!1,y=!0;break}case t:(_||m)&&r(D,"BAD_PROP_ORDER",`Anchors and tags must be after the ${D.source} indicator`),S&&r(D,"UNEXPECTED_TOKEN",`Unexpected ${D.source} in ${e??"collection"}`),S=D,l=t==="seq-item-ind"||t==="explicit-key-ind",f=!1;break;case"comma":if(e){b&&r(D,"UNEXPECTED_TOKEN",`Unexpected , in ${e}`),b=D,l=!1,f=!1;break}default:r(D,"UNEXPECTED_TOKEN",`Unexpected ${D.type} token`),l=!1,f=!1}const L=i[i.length-1],C=L?L.offset+L.source.length:s;return y&&n&&n.type!=="space"&&n.type!=="newline"&&n.type!=="comma"&&(n.type!=="scalar"||n.source!=="")&&r(n.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),v&&(l&&v.indent<=a||(n==null?void 0:n.type)==="block-map"||(n==null?void 0:n.type)==="block-seq")&&r(v,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:b,found:S,spaceBefore:c,comment:h,hasNewline:p,anchor:_,tag:m,newlineAfterProp:R,end:C,start:I??C}}function wr(i){if(!i)return null;switch(i.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(i.source.includes(`
`))return!0;if(i.end){for(const e of i.end)if(e.type==="newline")return!0}return!1;case"flow-collection":for(const e of i.items){for(const t of e.start)if(t.type==="newline")return!0;if(e.sep){for(const t of e.sep)if(t.type==="newline")return!0}if(wr(e.key)||wr(e.value))return!0}return!1;default:return!0}}function gl(i,e,t){if((e==null?void 0:e.type)==="flow-collection"){const n=e.end[0];n.indent===i&&(n.source==="]"||n.source==="}")&&wr(e)&&t(n,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function Ah(i,e,t){const{uniqueKeys:n}=i.options;if(n===!1)return!1;const s=typeof n=="function"?n:(r,a)=>r===a||bt(r)&&bt(a)&&r.value===a.value;return e.some(r=>s(r.key,t))}const du="All mapping items must start at the same column";function um({composeNode:i,composeEmptyNode:e},t,n,s,r){var f;const a=(r==null?void 0:r.nodeClass)??gn,o=new a(t.schema);t.atRoot&&(t.atRoot=!1);let c=n.offset,l=null;for(const h of n.items){const{start:d,key:p,sep:y,value:v}=h,_=Fs(d,{indicator:"explicit-key-ind",next:p??(y==null?void 0:y[0]),offset:c,onError:s,parentIndent:n.indent,startOnNewline:!0}),m=!_.found;if(m){if(p&&(p.type==="block-seq"?s(c,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in p&&p.indent!==n.indent&&s(c,"BAD_INDENT",du)),!_.anchor&&!_.tag&&!y){l=_.end,_.comment&&(o.comment?o.comment+=`
`+_.comment:o.comment=_.comment);continue}(_.newlineAfterProp||wr(p))&&s(p??d[d.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else((f=_.found)==null?void 0:f.indent)!==n.indent&&s(c,"BAD_INDENT",du);t.atKey=!0;const R=_.end,b=p?i(t,p,_,s):e(t,R,d,null,_,s);t.schema.compat&&gl(n.indent,p,s),t.atKey=!1,Ah(t,o.items,b)&&s(R,"DUPLICATE_KEY","Map keys must be unique");const S=Fs(y??[],{indicator:"map-value-ind",next:v,offset:b.range[2],onError:s,parentIndent:n.indent,startOnNewline:!p||p.type==="block-scalar"});if(c=S.end,S.found){m&&((v==null?void 0:v.type)==="block-map"&&!S.hasNewline&&s(c,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),t.options.strict&&_.start<S.found.offset-1024&&s(b.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const I=v?i(t,v,S,s):e(t,c,y,null,S,s);t.schema.compat&&gl(n.indent,v,s),c=I.range[2];const L=new en(b,I);t.options.keepSourceTokens&&(L.srcToken=h),o.items.push(L)}else{m&&s(b.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),S.comment&&(b.comment?b.comment+=`
`+S.comment:b.comment=S.comment);const I=new en(b);t.options.keepSourceTokens&&(I.srcToken=h),o.items.push(I)}}return l&&l<c&&s(l,"IMPOSSIBLE","Map comment with trailing content"),o.range=[n.offset,c,l??c],o}function fm({composeNode:i,composeEmptyNode:e},t,n,s,r){const a=(r==null?void 0:r.nodeClass)??Ei,o=new a(t.schema);t.atRoot&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let c=n.offset,l=null;for(const{start:f,value:h}of n.items){const d=Fs(f,{indicator:"seq-item-ind",next:h,offset:c,onError:s,parentIndent:n.indent,startOnNewline:!0});if(!d.found)if(d.anchor||d.tag||h)(h==null?void 0:h.type)==="block-seq"?s(d.end,"BAD_INDENT","All sequence items must start at the same column"):s(c,"MISSING_CHAR","Sequence item without - indicator");else{l=d.end,d.comment&&(o.comment=d.comment);continue}const p=h?i(t,h,d,s):e(t,d.end,f,null,d,s);t.schema.compat&&gl(n.indent,h,s),c=p.range[2],o.items.push(p)}return o.range=[n.offset,c,l??c],o}function Ir(i,e,t,n){let s="";if(i){let r=!1,a="";for(const o of i){const{source:c,type:l}=o;switch(l){case"space":r=!0;break;case"comment":{t&&!r&&n(o,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const f=c.substring(1)||" ";s?s+=a+f:s=f,a="";break}case"newline":s&&(a+=c),r=!0;break;default:n(o,"UNEXPECTED_TOKEN",`Unexpected ${l} at node end`)}e+=c.length}}return{comment:s,offset:e}}const xo="Block collections are not allowed within flow collections",bo=i=>i&&(i.type==="block-map"||i.type==="block-seq");function hm({composeNode:i,composeEmptyNode:e},t,n,s,r){var _;const a=n.start.source==="{",o=a?"flow map":"flow sequence",c=(r==null?void 0:r.nodeClass)??(a?gn:Ei),l=new c(t.schema);l.flow=!0;const f=t.atRoot;f&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let h=n.offset+n.start.source.length;for(let m=0;m<n.items.length;++m){const R=n.items[m],{start:b,key:S,sep:I,value:L}=R,C=Fs(b,{flow:o,indicator:"explicit-key-ind",next:S??(I==null?void 0:I[0]),offset:h,onError:s,parentIndent:n.indent,startOnNewline:!1});if(!C.found){if(!C.anchor&&!C.tag&&!I&&!L){m===0&&C.comma?s(C.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${o}`):m<n.items.length-1&&s(C.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${o}`),C.comment&&(l.comment?l.comment+=`
`+C.comment:l.comment=C.comment),h=C.end;continue}!a&&t.options.strict&&wr(S)&&s(S,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(m===0)C.comma&&s(C.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${o}`);else if(C.comma||s(C.start,"MISSING_CHAR",`Missing , between ${o} items`),C.comment){let D="";e:for(const E of b)switch(E.type){case"comma":case"space":break;case"comment":D=E.source.substring(1);break e;default:break e}if(D){let E=l.items[l.items.length-1];Et(E)&&(E=E.value??E.key),E.comment?E.comment+=`
`+D:E.comment=D,C.comment=C.comment.substring(D.length+1)}}if(!a&&!I&&!C.found){const D=L?i(t,L,C,s):e(t,C.end,I,null,C,s);l.items.push(D),h=D.range[2],bo(L)&&s(D.range,"BLOCK_IN_FLOW",xo)}else{t.atKey=!0;const D=C.end,E=S?i(t,S,C,s):e(t,D,b,null,C,s);bo(S)&&s(E.range,"BLOCK_IN_FLOW",xo),t.atKey=!1;const w=Fs(I??[],{flow:o,indicator:"map-value-ind",next:L,offset:E.range[2],onError:s,parentIndent:n.indent,startOnNewline:!1});if(w.found){if(!a&&!C.found&&t.options.strict){if(I)for(const F of I){if(F===w.found)break;if(F.type==="newline"){s(F,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}C.start<w.found.offset-1024&&s(w.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else L&&("source"in L&&((_=L.source)==null?void 0:_[0])===":"?s(L,"MISSING_CHAR",`Missing space after : in ${o}`):s(w.start,"MISSING_CHAR",`Missing , or : between ${o} items`));const k=L?i(t,L,w,s):w.found?e(t,w.end,I,null,w,s):null;k?bo(L)&&s(k.range,"BLOCK_IN_FLOW",xo):w.comment&&(E.comment?E.comment+=`
`+w.comment:E.comment=w.comment);const U=new en(E,k);if(t.options.keepSourceTokens&&(U.srcToken=R),a){const F=l;Ah(t,F.items,E)&&s(D,"DUPLICATE_KEY","Map keys must be unique"),F.items.push(U)}else{const F=new gn(t.schema);F.flow=!0,F.items.push(U);const W=(k??E).range;F.range=[E.range[0],W[1],W[2]],l.items.push(F)}h=k?k.range[2]:w.end}}const d=a?"}":"]",[p,...y]=n.end;let v=h;if((p==null?void 0:p.source)===d)v=p.offset+p.source.length;else{const m=o[0].toUpperCase()+o.substring(1),R=f?`${m} must end with a ${d}`:`${m} in block collection must be sufficiently indented and end with a ${d}`;s(h,f?"MISSING_CHAR":"BAD_INDENT",R),p&&p.source.length!==1&&y.unshift(p)}if(y.length>0){const m=Ir(y,v,t.options.strict,s);m.comment&&(l.comment?l.comment+=`
`+m.comment:l.comment=m.comment),l.range=[n.offset,v,m.offset]}else l.range=[n.offset,v,v];return l}function wo(i,e,t,n,s,r){const a=t.type==="block-map"?um(i,e,t,n,r):t.type==="block-seq"?fm(i,e,t,n,r):hm(i,e,t,n,r),o=a.constructor;return s==="!"||s===o.tagName?(a.tag=o.tagName,a):(s&&(a.tag=s),a)}function dm(i,e,t,n,s){var d;const r=n.tag,a=r?e.directives.tagName(r.source,p=>s(r,"TAG_RESOLVE_FAILED",p)):null;if(t.type==="block-seq"){const{anchor:p,newlineAfterProp:y}=n,v=p&&r?p.offset>r.offset?p:r:p??r;v&&(!y||y.offset<v.offset)&&s(v,"MISSING_CHAR","Missing newline after block sequence props")}const o=t.type==="block-map"?"map":t.type==="block-seq"?"seq":t.start.source==="{"?"map":"seq";if(!r||!a||a==="!"||a===gn.tagName&&o==="map"||a===Ei.tagName&&o==="seq")return wo(i,e,t,s,a);let c=e.schema.tags.find(p=>p.tag===a&&p.collection===o);if(!c){const p=e.schema.knownTags[a];if((p==null?void 0:p.collection)===o)e.schema.tags.push(Object.assign({},p,{default:!1})),c=p;else return p?s(r,"BAD_COLLECTION_TYPE",`${p.tag} used for ${o} collection, but expects ${p.collection??"scalar"}`,!0):s(r,"TAG_RESOLVE_FAILED",`Unresolved tag: ${a}`,!0),wo(i,e,t,s,a)}const l=wo(i,e,t,s,a,c),f=((d=c.resolve)==null?void 0:d.call(c,l,p=>s(r,"TAG_RESOLVE_FAILED",p),e.options))??l,h=Rt(f)?f:new Ye(f);return h.range=l.range,h.tag=a,c!=null&&c.format&&(h.format=c.format),h}function Rh(i,e,t){const n=e.offset,s=pm(e,i.options.strict,t);if(!s)return{value:"",type:null,comment:"",range:[n,n,n]};const r=s.mode===">"?Ye.BLOCK_FOLDED:Ye.BLOCK_LITERAL,a=e.source?mm(e.source):[];let o=a.length;for(let v=a.length-1;v>=0;--v){const _=a[v][1];if(_===""||_==="\r")o=v;else break}if(o===0){const v=s.chomp==="+"&&a.length>0?`
`.repeat(Math.max(1,a.length-1)):"";let _=n+s.length;return e.source&&(_+=e.source.length),{value:v,type:r,comment:s.comment,range:[n,_,_]}}let c=e.indent+s.indent,l=e.offset+s.length,f=0;for(let v=0;v<o;++v){const[_,m]=a[v];if(m===""||m==="\r")s.indent===0&&_.length>c&&(c=_.length);else{_.length<c&&t(l+_.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),s.indent===0&&(c=_.length),f=v,c===0&&!i.atRoot&&t(l,"BAD_INDENT","Block scalar values in collections must be indented");break}l+=_.length+m.length+1}for(let v=a.length-1;v>=o;--v)a[v][0].length>c&&(o=v+1);let h="",d="",p=!1;for(let v=0;v<f;++v)h+=a[v][0].slice(c)+`
`;for(let v=f;v<o;++v){let[_,m]=a[v];l+=_.length+m.length+1;const R=m[m.length-1]==="\r";if(R&&(m=m.slice(0,-1)),m&&_.length<c){const S=`Block scalar lines must not be less indented than their ${s.indent?"explicit indentation indicator":"first line"}`;t(l-m.length-(R?2:1),"BAD_INDENT",S),_=""}r===Ye.BLOCK_LITERAL?(h+=d+_.slice(c)+m,d=`
`):_.length>c||m[0]==="	"?(d===" "?d=`
`:!p&&d===`
`&&(d=`

`),h+=d+_.slice(c)+m,d=`
`,p=!0):m===""?d===`
`?h+=`
`:d=`
`:(h+=d+m,d=" ",p=!1)}switch(s.chomp){case"-":break;case"+":for(let v=o;v<a.length;++v)h+=`
`+a[v][0].slice(c);h[h.length-1]!==`
`&&(h+=`
`);break;default:h+=`
`}const y=n+s.length+e.source.length;return{value:h,type:r,comment:s.comment,range:[n,y,y]}}function pm({offset:i,props:e},t,n){if(e[0].type!=="block-scalar-header")return n(e[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:s}=e[0],r=s[0];let a=0,o="",c=-1;for(let d=1;d<s.length;++d){const p=s[d];if(!o&&(p==="-"||p==="+"))o=p;else{const y=Number(p);!a&&y?a=y:c===-1&&(c=i+d)}}c!==-1&&n(c,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${s}`);let l=!1,f="",h=s.length;for(let d=1;d<e.length;++d){const p=e[d];switch(p.type){case"space":l=!0;case"newline":h+=p.source.length;break;case"comment":t&&!l&&n(p,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),h+=p.source.length,f=p.source.substring(1);break;case"error":n(p,"UNEXPECTED_TOKEN",p.message),h+=p.source.length;break;default:{const y=`Unexpected token in block scalar header: ${p.type}`;n(p,"UNEXPECTED_TOKEN",y);const v=p.source;v&&typeof v=="string"&&(h+=v.length)}}}return{mode:r,indent:a,chomp:o,comment:f,length:h}}function mm(i){const e=i.split(/\n( *)/),t=e[0],n=t.match(/^( *)/),r=[n!=null&&n[1]?[n[1],t.slice(n[1].length)]:["",t]];for(let a=1;a<e.length;a+=2)r.push([e[a],e[a+1]]);return r}function Ch(i,e,t){const{offset:n,type:s,source:r,end:a}=i;let o,c;const l=(d,p,y)=>t(n+d,p,y);switch(s){case"scalar":o=Ye.PLAIN,c=gm(r,l);break;case"single-quoted-scalar":o=Ye.QUOTE_SINGLE,c=_m(r,l);break;case"double-quoted-scalar":o=Ye.QUOTE_DOUBLE,c=vm(r,l);break;default:return t(i,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${s}`),{value:"",type:null,comment:"",range:[n,n+r.length,n+r.length]}}const f=n+r.length,h=Ir(a,f,e,t);return{value:c,type:o,comment:h.comment,range:[n,f,h.offset]}}function gm(i,e){let t="";switch(i[0]){case"	":t="a tab character";break;case",":t="flow indicator character ,";break;case"%":t="directive indicator character %";break;case"|":case">":{t=`block scalar indicator ${i[0]}`;break}case"@":case"`":{t=`reserved character ${i[0]}`;break}}return t&&e(0,"BAD_SCALAR_START",`Plain value cannot start with ${t}`),Ph(i)}function _m(i,e){return(i[i.length-1]!=="'"||i.length===1)&&e(i.length,"MISSING_CHAR","Missing closing 'quote"),Ph(i.slice(1,-1)).replace(/''/g,"'")}function Ph(i){const e=/(.*?)\r?\n/sy;let t=e.exec(i);if(!t)return i;let n,s;try{n=new RegExp("(?<![ 	])[ 	]+$"),s=new RegExp("^[ 	]+|(?<![ 	])[ 	]+$","g")}catch{n=/[ \t]+$/,s=/^[ \t]+|[ \t]+$/g}let r=t[1].replace(n,""),a=" ",o=e.lastIndex;for(;t=e.exec(i);){const l=t[1].replace(s,"");l===""?a===`
`?r+=a:a=`
`:(r+=a+l,a=" "),o=e.lastIndex}const c=/[ \t]*(.*)/sy;return c.lastIndex=o,t=c.exec(i),r+a+((t==null?void 0:t[1])??"")}function vm(i,e){let t="";for(let n=1;n<i.length-1;++n){const s=i[n];if(!(s==="\r"&&i[n+1]===`
`))if(s===`
`){const{fold:r,offset:a}=ym(i,n);t+=r,n=a}else if(s==="\\"){let r=i[++n];const a=xm[r];if(a)t+=a;else if(r===`
`)for(r=i[n+1];r===" "||r==="	";)r=i[++n+1];else if(r==="\r"&&i[n+1]===`
`)for(r=i[++n+1];r===" "||r==="	";)r=i[++n+1];else if(r==="x"||r==="u"||r==="U"){const o=r==="x"?2:r==="u"?4:8;t+=bm(i,n+1,o,e),n+=o}else{const o=i.substr(n-1,2);e(n-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),t+=o}}else if(s===" "||s==="	"){const r=n;let a=i[n+1];for(;a===" "||a==="	";)a=i[++n+1];a!==`
`&&!(a==="\r"&&i[n+2]===`
`)&&(t+=n>r?i.slice(r,n+1):s)}else t+=s}return(i[i.length-1]!=='"'||i.length===1)&&e(i.length,"MISSING_CHAR",'Missing closing "quote'),t}function ym(i,e){let t="",n=i[e+1];for(;(n===" "||n==="	"||n===`
`||n==="\r")&&!(n==="\r"&&i[e+2]!==`
`);)n===`
`&&(t+=`
`),e+=1,n=i[e+1];return t||(t=" "),{fold:t,offset:e}}const xm={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function bm(i,e,t,n){const s=i.substr(e,t),a=s.length===t&&/^[0-9a-fA-F]+$/.test(s)?parseInt(s,16):NaN;try{return String.fromCodePoint(a)}catch{const o=i.substr(e-2,t+2);return n(e-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),o}}function Lh(i,e,t,n){const{value:s,type:r,comment:a,range:o}=e.type==="block-scalar"?Rh(i,e,n):Ch(e,i.options.strict,n),c=t?i.directives.tagName(t.source,h=>n(t,"TAG_RESOLVE_FAILED",h)):null;let l;i.options.stringKeys&&i.atKey?l=i.schema[Wn]:c?l=wm(i.schema,s,c,t,n):e.type==="scalar"?l=Sm(i,s,e,n):l=i.schema[Wn];let f;try{const h=l.resolve(s,d=>n(t??e,"TAG_RESOLVE_FAILED",d),i.options);f=bt(h)?h:new Ye(h)}catch(h){const d=h instanceof Error?h.message:String(h);n(t??e,"TAG_RESOLVE_FAILED",d),f=new Ye(s)}return f.range=o,f.source=s,r&&(f.type=r),c&&(f.tag=c),l.format&&(f.format=l.format),a&&(f.comment=a),f}function wm(i,e,t,n,s){var o;if(t==="!")return i[Wn];const r=[];for(const c of i.tags)if(!c.collection&&c.tag===t)if(c.default&&c.test)r.push(c);else return c;for(const c of r)if((o=c.test)!=null&&o.test(e))return c;const a=i.knownTags[t];return a&&!a.collection?(i.tags.push(Object.assign({},a,{default:!1,test:void 0})),a):(s(n,"TAG_RESOLVE_FAILED",`Unresolved tag: ${t}`,t!=="tag:yaml.org,2002:str"),i[Wn])}function Sm({atKey:i,directives:e,schema:t},n,s,r){const a=t.tags.find(o=>{var c;return(o.default===!0||i&&o.default==="key")&&((c=o.test)==null?void 0:c.test(n))})||t[Wn];if(t.compat){const o=t.compat.find(c=>{var l;return c.default&&((l=c.test)==null?void 0:l.test(n))})??t[Wn];if(a.tag!==o.tag){const c=e.tagString(a.tag),l=e.tagString(o.tag),f=`Value may be parsed as either ${c} or ${l}`;r(s,"TAG_RESOLVE_FAILED",f,!0)}}return a}function Mm(i,e,t){if(e){t??(t=e.length);for(let n=t-1;n>=0;--n){let s=e[n];switch(s.type){case"space":case"comment":case"newline":i-=s.source.length;continue}for(s=e[++n];(s==null?void 0:s.type)==="space";)i+=s.source.length,s=e[++n];break}}return i}const Em={composeNode:Ih,composeEmptyNode:Tc};function Ih(i,e,t,n){const s=i.atKey,{spaceBefore:r,comment:a,anchor:o,tag:c}=t;let l,f=!0;switch(e.type){case"alias":l=Tm(i,e,n),(o||c)&&n(e,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":l=Lh(i,e,c,n),o&&(l.anchor=o.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":try{l=dm(Em,i,e,t,n),o&&(l.anchor=o.source.substring(1))}catch(h){const d=h instanceof Error?h.message:String(h);n(e,"RESOURCE_EXHAUSTION",d)}break;default:{const h=e.type==="error"?e.message:`Unsupported token (type: ${e.type})`;n(e,"UNEXPECTED_TOKEN",h),f=!1}}return l??(l=Tc(i,e.offset,void 0,null,t,n)),o&&l.anchor===""&&n(o,"BAD_ALIAS","Anchor cannot be an empty string"),s&&i.options.stringKeys&&(!bt(l)||typeof l.value!="string"||l.tag&&l.tag!=="tag:yaml.org,2002:str")&&n(c??e,"NON_STRING_KEY","With stringKeys, all keys must be strings"),r&&(l.spaceBefore=!0),a&&(e.type==="scalar"&&e.source===""?l.comment=a:l.commentBefore=a),i.options.keepSourceTokens&&f&&(l.srcToken=e),l}function Tc(i,e,t,n,{spaceBefore:s,comment:r,anchor:a,tag:o,end:c},l){const f={type:"scalar",offset:Mm(e,t,n),indent:-1,source:""},h=Lh(i,f,o,l);return a&&(h.anchor=a.source.substring(1),h.anchor===""&&l(a,"BAD_ALIAS","Anchor cannot be an empty string")),s&&(h.spaceBefore=!0),r&&(h.comment=r,h.range[2]=c),h}function Tm({options:i},{offset:e,source:t,end:n},s){const r=new Ka(t.substring(1));r.source===""&&s(e,"BAD_ALIAS","Alias cannot be an empty string"),r.source.endsWith(":")&&s(e+t.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const a=e+t.length,o=Ir(n,a,i.strict,s);return r.range=[e,a,o.offset],o.comment&&(r.comment=o.comment),r}function Am(i,e,{offset:t,start:n,value:s,end:r},a){const o=Object.assign({_directives:e},i),c=new Js(void 0,o),l={atKey:!1,atRoot:!0,directives:c.directives,options:c.options,schema:c.schema},f=Fs(n,{indicator:"doc-start",next:s??(r==null?void 0:r[0]),offset:t,onError:a,parentIndent:0,startOnNewline:!0});f.found&&(c.directives.docStart=!0,s&&(s.type==="block-map"||s.type==="block-seq")&&!f.hasNewline&&a(f.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),c.contents=s?Ih(l,s,f,a):Tc(l,f.end,n,null,f,a);const h=c.contents.range[2],d=Ir(r,h,!1,a);return d.comment&&(c.comment=d.comment),c.range=[t,h,d.offset],c}function or(i){if(typeof i=="number")return[i,i+1];if(Array.isArray(i))return i.length===2?i:[i[0],i[1]];const{offset:e,source:t}=i;return[e,e+(typeof t=="string"?t.length:1)]}function pu(i){var s;let e="",t=!1,n=!1;for(let r=0;r<i.length;++r){const a=i[r];switch(a[0]){case"#":e+=(e===""?"":n?`

`:`
`)+(a.substring(1)||" "),t=!0,n=!1;break;case"%":((s=i[r+1])==null?void 0:s[0])!=="#"&&(r+=1),t=!1;break;default:t||(n=!0),t=!1}}return{comment:e,afterEmptyLine:n}}class Ac{constructor(e={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(t,n,s,r)=>{const a=or(t);r?this.warnings.push(new Th(a,n,s)):this.errors.push(new qi(a,n,s))},this.directives=new nn({version:e.version||"1.2"}),this.options=e}decorate(e,t){const{comment:n,afterEmptyLine:s}=pu(this.prelude);if(n){const r=e.contents;if(t)e.comment=e.comment?`${e.comment}
${n}`:n;else if(s||e.directives.docStart||!r)e.commentBefore=n;else if(At(r)&&!r.flow&&r.items.length>0){let a=r.items[0];Et(a)&&(a=a.key);const o=a.commentBefore;a.commentBefore=o?`${n}
${o}`:n}else{const a=r.commentBefore;r.commentBefore=a?`${n}
${a}`:n}}if(t){for(let r=0;r<this.errors.length;++r)e.errors.push(this.errors[r]);for(let r=0;r<this.warnings.length;++r)e.warnings.push(this.warnings[r])}else e.errors=this.errors,e.warnings=this.warnings;this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:pu(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(e,t=!1,n=-1){for(const s of e)yield*this.next(s);yield*this.end(t,n)}*next(e){switch(e.type){case"directive":this.directives.add(e.source,(t,n,s)=>{const r=or(e);r[0]+=t,this.onError(r,"BAD_DIRECTIVE",n,s)}),this.prelude.push(e.source),this.atDirectives=!0;break;case"document":{const t=Am(this.options,this.directives,e,this.onError);this.atDirectives&&!t.directives.docStart&&this.onError(e,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(t,!1),this.doc&&(yield this.doc),this.doc=t,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(e.source);break;case"error":{const t=e.source?`${e.message}: ${JSON.stringify(e.source)}`:e.message,n=new qi(or(e),"UNEXPECTED_TOKEN",t);this.atDirectives||!this.doc?this.errors.push(n):this.doc.errors.push(n);break}case"doc-end":{if(!this.doc){const n="Unexpected doc-end without preceding document";this.errors.push(new qi(or(e),"UNEXPECTED_TOKEN",n));break}this.doc.directives.docEnd=!0;const t=Ir(e.end,e.offset+e.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),t.comment){const n=this.doc.comment;this.doc.comment=n?`${n}
${t.comment}`:t.comment}this.doc.range[2]=t.offset;break}default:this.errors.push(new qi(or(e),"UNEXPECTED_TOKEN",`Unsupported token ${e.type}`))}}*end(e=!1,t=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(e){const n=Object.assign({_directives:this.directives},this.options),s=new Js(void 0,n);this.atDirectives&&this.onError(t,"MISSING_CHAR","Missing directives-end indicator line"),s.range=[0,t,t],this.decorate(s,!1),yield s}}}function Rm(i,e=!0,t){if(i){const n=(s,r,a)=>{const o=typeof s=="number"?s:Array.isArray(s)?s[0]:s.offset;if(t)t(o,r,a);else throw new qi([o,o+1],r,a)};switch(i.type){case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return Ch(i,e,n);case"block-scalar":return Rh({options:{strict:e}},i,n)}}return null}function Cm(i,e){const{implicitKey:t=!1,indent:n,inFlow:s=!1,offset:r=-1,type:a="PLAIN"}=e,o=Pr({type:a,value:i},{implicitKey:t,indent:n>0?" ".repeat(n):"",inFlow:s,options:{blockQuote:!0,lineWidth:-1}}),c=e.end??[{type:"newline",offset:-1,indent:n,source:`
`}];switch(o[0]){case"|":case">":{const l=o.indexOf(`
`),f=o.substring(0,l),h=o.substring(l+1)+`
`,d=[{type:"block-scalar-header",offset:r,indent:n,source:f}];return Dh(d,c)||d.push({type:"newline",offset:-1,indent:n,source:`
`}),{type:"block-scalar",offset:r,indent:n,props:d,source:h}}case'"':return{type:"double-quoted-scalar",offset:r,indent:n,source:o,end:c};case"'":return{type:"single-quoted-scalar",offset:r,indent:n,source:o,end:c};default:return{type:"scalar",offset:r,indent:n,source:o,end:c}}}function Pm(i,e,t={}){let{afterKey:n=!1,implicitKey:s=!1,inFlow:r=!1,type:a}=t,o="indent"in i?i.indent:null;if(n&&typeof o=="number"&&(o+=2),!a)switch(i.type){case"single-quoted-scalar":a="QUOTE_SINGLE";break;case"double-quoted-scalar":a="QUOTE_DOUBLE";break;case"block-scalar":{const l=i.props[0];if(l.type!=="block-scalar-header")throw new Error("Invalid block scalar header");a=l.source[0]===">"?"BLOCK_FOLDED":"BLOCK_LITERAL";break}default:a="PLAIN"}const c=Pr({type:a,value:e},{implicitKey:s||o===null,indent:o!==null&&o>0?" ".repeat(o):"",inFlow:r,options:{blockQuote:!0,lineWidth:-1}});switch(c[0]){case"|":case">":Lm(i,c);break;case'"':So(i,c,"double-quoted-scalar");break;case"'":So(i,c,"single-quoted-scalar");break;default:So(i,c,"scalar")}}function Lm(i,e){const t=e.indexOf(`
`),n=e.substring(0,t),s=e.substring(t+1)+`
`;if(i.type==="block-scalar"){const r=i.props[0];if(r.type!=="block-scalar-header")throw new Error("Invalid block scalar header");r.source=n,i.source=s}else{const{offset:r}=i,a="indent"in i?i.indent:-1,o=[{type:"block-scalar-header",offset:r,indent:a,source:n}];Dh(o,"end"in i?i.end:void 0)||o.push({type:"newline",offset:-1,indent:a,source:`
`});for(const c of Object.keys(i))c!=="type"&&c!=="offset"&&delete i[c];Object.assign(i,{type:"block-scalar",indent:a,props:o,source:s})}}function Dh(i,e){if(e)for(const t of e)switch(t.type){case"space":case"comment":i.push(t);break;case"newline":return i.push(t),!0}return!1}function So(i,e,t){switch(i.type){case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":i.type=t,i.source=e;break;case"block-scalar":{const n=i.props.slice(1);let s=e.length;i.props[0].type==="block-scalar-header"&&(s-=i.props[0].source.length);for(const r of n)r.offset+=s;delete i.props,Object.assign(i,{type:t,source:e,end:n});break}case"block-map":case"block-seq":{const s={type:"newline",offset:i.offset+e.length,indent:i.indent,source:`
`};delete i.items,Object.assign(i,{type:t,source:e,end:[s]});break}default:{const n="indent"in i?i.indent:-1,s="end"in i&&Array.isArray(i.end)?i.end.filter(r=>r.type==="space"||r.type==="comment"||r.type==="newline"):[];for(const r of Object.keys(i))r!=="type"&&r!=="offset"&&delete i[r];Object.assign(i,{type:t,indent:n,source:e,end:s})}}}const Im=i=>"type"in i?Ha(i):Ta(i);function Ha(i){switch(i.type){case"block-scalar":{let e="";for(const t of i.props)e+=Ha(t);return e+i.source}case"block-map":case"block-seq":{let e="";for(const t of i.items)e+=Ta(t);return e}case"flow-collection":{let e=i.start.source;for(const t of i.items)e+=Ta(t);for(const t of i.end)e+=t.source;return e}case"document":{let e=Ta(i);if(i.end)for(const t of i.end)e+=t.source;return e}default:{let e=i.source;if("end"in i&&i.end)for(const t of i.end)e+=t.source;return e}}}function Ta({start:i,key:e,sep:t,value:n}){let s="";for(const r of i)s+=r.source;if(e&&(s+=Ha(e)),t)for(const r of t)s+=r.source;return n&&(s+=Ha(n)),s}const _l=Symbol("break visit"),Dm=Symbol("skip children"),kh=Symbol("remove item");function Ki(i,e){"type"in i&&i.type==="document"&&(i={start:i.start,value:i.value}),Oh(Object.freeze([]),i,e)}Ki.BREAK=_l;Ki.SKIP=Dm;Ki.REMOVE=kh;Ki.itemAtPath=(i,e)=>{let t=i;for(const[n,s]of e){const r=t==null?void 0:t[n];if(r&&"items"in r)t=r.items[s];else return}return t};Ki.parentCollection=(i,e)=>{const t=Ki.itemAtPath(i,e.slice(0,-1)),n=e[e.length-1][0],s=t==null?void 0:t[n];if(s&&"items"in s)return s;throw new Error("Parent collection not found")};function Oh(i,e,t){let n=t(e,i);if(typeof n=="symbol")return n;for(const s of["key","value"]){const r=e[s];if(r&&"items"in r){for(let a=0;a<r.items.length;++a){const o=Oh(Object.freeze(i.concat([[s,a]])),r.items[a],t);if(typeof o=="number")a=o-1;else{if(o===_l)return _l;o===kh&&(r.items.splice(a,1),a-=1)}}typeof n=="function"&&s==="key"&&(n=n(e,i))}}return typeof n=="function"?n(e,i):n}const ro="\uFEFF",ao="",oo="",Sr="",km=i=>!!i&&"items"in i,Om=i=>!!i&&(i.type==="scalar"||i.type==="single-quoted-scalar"||i.type==="double-quoted-scalar"||i.type==="block-scalar");function Nm(i){switch(i){case ro:return"<BOM>";case ao:return"<DOC>";case oo:return"<FLOW_END>";case Sr:return"<SCALAR>";default:return JSON.stringify(i)}}function Nh(i){switch(i){case ro:return"byte-order-mark";case ao:return"doc-mode";case oo:return"flow-error-end";case Sr:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(i[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}const Um=Object.freeze(Object.defineProperty({__proto__:null,BOM:ro,DOCUMENT:ao,FLOW_END:oo,SCALAR:Sr,createScalarToken:Cm,isCollection:km,isScalar:Om,prettyToken:Nm,resolveAsScalar:Rm,setScalarValue:Pm,stringify:Im,tokenType:Nh,visit:Ki},Symbol.toStringTag,{value:"Module"}));function Cn(i){switch(i){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const mu=new Set("0123456789ABCDEFabcdef"),Fm=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),Kr=new Set(",[]{}"),Bm=new Set(` ,[]{}
\r	`),Mo=i=>!i||Bm.has(i);class Uh{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(e,t=!1){if(e){if(typeof e!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+e:e,this.lineEndPos=null}this.atEnd=!t;let n=this.next??"stream";for(;n&&(t||this.hasChars(1));)n=yield*this.parseNext(n)}atLineEnd(){let e=this.pos,t=this.buffer[e];for(;t===" "||t==="	";)t=this.buffer[++e];return!t||t==="#"||t===`
`?!0:t==="\r"?this.buffer[e+1]===`
`:!1}charAt(e){return this.buffer[this.pos+e]}continueScalar(e){let t=this.buffer[e];if(this.indentNext>0){let n=0;for(;t===" ";)t=this.buffer[++n+e];if(t==="\r"){const s=this.buffer[n+e+1];if(s===`
`||!s&&!this.atEnd)return e+n+1}return t===`
`||n>=this.indentNext||!t&&!this.atEnd?e+n:-1}if(t==="-"||t==="."){const n=this.buffer.substr(e,3);if((n==="---"||n==="...")&&Cn(this.buffer[e+3]))return-1}return e}getLine(){let e=this.lineEndPos;return(typeof e!="number"||e!==-1&&e<this.pos)&&(e=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=e),e===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[e-1]==="\r"&&(e-=1),this.buffer.substring(this.pos,e))}hasChars(e){return this.pos+e<=this.buffer.length}setNext(e){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=e,null}peek(e){return this.buffer.substr(this.pos,e)}*parseNext(e){switch(e){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let e=this.getLine();if(e===null)return this.setNext("stream");if(e[0]===ro&&(yield*this.pushCount(1),e=e.substring(1)),e[0]==="%"){let t=e.length,n=e.indexOf("#");for(;n!==-1;){const r=e[n-1];if(r===" "||r==="	"){t=n-1;break}else n=e.indexOf("#",n+1)}for(;;){const r=e[t-1];if(r===" "||r==="	")t-=1;else break}const s=(yield*this.pushCount(t))+(yield*this.pushSpaces(!0));return yield*this.pushCount(e.length-s),this.pushNewline(),"stream"}if(this.atLineEnd()){const t=yield*this.pushSpaces(!0);return yield*this.pushCount(e.length-t),yield*this.pushNewline(),"stream"}return yield ao,yield*this.parseLineStart()}*parseLineStart(){const e=this.charAt(0);if(!e&&!this.atEnd)return this.setNext("line-start");if(e==="-"||e==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const t=this.peek(3);if((t==="---"||t==="...")&&Cn(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,t==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!Cn(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[e,t]=this.peek(2);if(!t&&!this.atEnd)return this.setNext("block-start");if((e==="-"||e==="?"||e===":")&&Cn(t)){const n=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=n,"block-start"}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const e=this.getLine();if(e===null)return this.setNext("doc");let t=yield*this.pushIndicators();switch(e[t]){case"#":yield*this.pushCount(e.length-t);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(Mo),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return t+=yield*this.parseBlockScalarHeader(),t+=yield*this.pushSpaces(!0),yield*this.pushCount(e.length-t),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let e,t,n=-1;do e=yield*this.pushNewline(),e>0?(t=yield*this.pushSpaces(!1),this.indentValue=n=t):t=0,t+=yield*this.pushSpaces(!0);while(e+t>0);const s=this.getLine();if(s===null)return this.setNext("flow");if((n!==-1&&n<this.indentNext&&s[0]!=="#"||n===0&&(s.startsWith("---")||s.startsWith("..."))&&Cn(s[3]))&&!(n===this.indentNext-1&&this.flowLevel===1&&(s[0]==="]"||s[0]==="}")))return this.flowLevel=0,yield oo,yield*this.parseLineStart();let r=0;for(;s[r]===",";)r+=yield*this.pushCount(1),r+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(r+=yield*this.pushIndicators(),s[r]){case void 0:return"flow";case"#":return yield*this.pushCount(s.length-r),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(Mo),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const a=this.charAt(1);if(this.flowKey||Cn(a)||a===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const e=this.charAt(0);let t=this.buffer.indexOf(e,this.pos+1);if(e==="'")for(;t!==-1&&this.buffer[t+1]==="'";)t=this.buffer.indexOf("'",t+2);else for(;t!==-1;){let r=0;for(;this.buffer[t-1-r]==="\\";)r+=1;if(r%2===0)break;t=this.buffer.indexOf('"',t+1)}const n=this.buffer.substring(0,t);let s=n.indexOf(`
`,this.pos);if(s!==-1){for(;s!==-1;){const r=this.continueScalar(s+1);if(r===-1)break;s=n.indexOf(`
`,r)}s!==-1&&(t=s-(n[s-1]==="\r"?2:1))}if(t===-1){if(!this.atEnd)return this.setNext("quoted-scalar");t=this.buffer.length}return yield*this.pushToIndex(t+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let e=this.pos;for(;;){const t=this.buffer[++e];if(t==="+")this.blockScalarKeep=!0;else if(t>"0"&&t<="9")this.blockScalarIndent=Number(t)-1;else if(t!=="-")break}return yield*this.pushUntil(t=>Cn(t)||t==="#")}*parseBlockScalar(){let e=this.pos-1,t=0,n;e:for(let r=this.pos;n=this.buffer[r];++r)switch(n){case" ":t+=1;break;case`
`:e=r,t=0;break;case"\r":{const a=this.buffer[r+1];if(!a&&!this.atEnd)return this.setNext("block-scalar");if(a===`
`)break}default:break e}if(!n&&!this.atEnd)return this.setNext("block-scalar");if(t>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=t:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{const r=this.continueScalar(e+1);if(r===-1)break;e=this.buffer.indexOf(`
`,r)}while(e!==-1);if(e===-1){if(!this.atEnd)return this.setNext("block-scalar");e=this.buffer.length}}let s=e+1;for(n=this.buffer[s];n===" ";)n=this.buffer[++s];if(n==="	"){for(;n==="	"||n===" "||n==="\r"||n===`
`;)n=this.buffer[++s];e=s-1}else if(!this.blockScalarKeep)do{let r=e-1,a=this.buffer[r];a==="\r"&&(a=this.buffer[--r]);const o=r;for(;a===" ";)a=this.buffer[--r];if(a===`
`&&r>=this.pos&&r+1+t>o)e=r;else break}while(!0);return yield Sr,yield*this.pushToIndex(e+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const e=this.flowLevel>0;let t=this.pos-1,n=this.pos-1,s;for(;s=this.buffer[++n];)if(s===":"){const r=this.buffer[n+1];if(Cn(r)||e&&Kr.has(r))break;t=n}else if(Cn(s)){let r=this.buffer[n+1];if(s==="\r"&&(r===`
`?(n+=1,s=`
`,r=this.buffer[n+1]):t=n),r==="#"||e&&Kr.has(r))break;if(s===`
`){const a=this.continueScalar(n+1);if(a===-1)break;n=Math.max(n,a-2)}}else{if(e&&Kr.has(s))break;t=n}return!s&&!this.atEnd?this.setNext("plain-scalar"):(yield Sr,yield*this.pushToIndex(t+1,!0),e?"flow":"doc")}*pushCount(e){return e>0?(yield this.buffer.substr(this.pos,e),this.pos+=e,e):0}*pushToIndex(e,t){const n=this.buffer.slice(this.pos,e);return n?(yield n,this.pos+=n.length,n.length):(t&&(yield""),0)}*pushIndicators(){let e=0;e:for(;;){switch(this.charAt(0)){case"!":e+=yield*this.pushTag(),e+=yield*this.pushSpaces(!0);continue e;case"&":e+=yield*this.pushUntil(Mo),e+=yield*this.pushSpaces(!0);continue e;case"-":case"?":case":":{const t=this.flowLevel>0,n=this.charAt(1);if(Cn(n)||t&&Kr.has(n)){t?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,e+=yield*this.pushCount(1),e+=yield*this.pushSpaces(!0);continue e}}}break e}return e}*pushTag(){if(this.charAt(1)==="<"){let e=this.pos+2,t=this.buffer[e];for(;!Cn(t)&&t!==">";)t=this.buffer[++e];return yield*this.pushToIndex(t===">"?e+1:e,!1)}else{let e=this.pos+1,t=this.buffer[e];for(;t;)if(Fm.has(t))t=this.buffer[++e];else if(t==="%"&&mu.has(this.buffer[e+1])&&mu.has(this.buffer[e+2]))t=this.buffer[e+=3];else break;return yield*this.pushToIndex(e,!1)}}*pushNewline(){const e=this.buffer[this.pos];return e===`
`?yield*this.pushCount(1):e==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(e){let t=this.pos-1,n;do n=this.buffer[++t];while(n===" "||e&&n==="	");const s=t-this.pos;return s>0&&(yield this.buffer.substr(this.pos,s),this.pos=t),s}*pushUntil(e){let t=this.pos,n=this.buffer[t];for(;!e(n);)n=this.buffer[++t];return yield*this.pushToIndex(t,!1)}}class Fh{constructor(){this.lineStarts=[],this.addNewLine=e=>this.lineStarts.push(e),this.linePos=e=>{let t=0,n=this.lineStarts.length;for(;t<n;){const r=t+n>>1;this.lineStarts[r]<e?t=r+1:n=r}if(this.lineStarts[t]===e)return{line:t+1,col:1};if(t===0)return{line:0,col:e};const s=this.lineStarts[t-1];return{line:t,col:e-s+1}}}}function bi(i,e){for(let t=0;t<i.length;++t)if(i[t].type===e)return!0;return!1}function gu(i){for(let e=0;e<i.length;++e)switch(i[e].type){case"space":case"comment":case"newline":break;default:return e}return-1}function Bh(i){switch(i==null?void 0:i.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function Yr(i){switch(i.type){case"document":return i.start;case"block-map":{const e=i.items[i.items.length-1];return e.sep??e.start}case"block-seq":return i.items[i.items.length-1].start;default:return[]}}function os(i){var t;if(i.length===0)return[];let e=i.length;e:for(;--e>=0;)switch(i[e].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;((t=i[++e])==null?void 0:t.type)==="space";);return i.splice(e,i.length)}function Ga(i,e){if(e.length<1e5)Array.prototype.push.apply(i,e);else for(let t=0;t<e.length;++t)i.push(e[t])}function _u(i){if(i.start.type==="flow-seq-start")for(const e of i.items)e.sep&&!e.value&&!bi(e.start,"explicit-key-ind")&&!bi(e.sep,"map-value-ind")&&(e.key&&(e.value=e.key),delete e.key,Bh(e.value)?e.value.end?Ga(e.value.end,e.sep):e.value.end=e.sep:Ga(e.start,e.sep),delete e.sep)}let Rc=class{constructor(e){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new Uh,this.onNewLine=e}*parse(e,t=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const n of this.lexer.lex(e,t))yield*this.next(n);t||(yield*this.end())}*next(e){if(this.source=e,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=e.length;return}const t=Nh(e);if(t)if(t==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=t,yield*this.step(),t){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+e.length);break;case"space":this.atNewLine&&e[0]===" "&&(this.indent+=e.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=e.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=e.length}else{const n=`Not a YAML token: ${e}`;yield*this.pop({type:"error",offset:this.offset,message:n,source:e}),this.offset+=e.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const e=this.peek(1);if(this.type==="doc-end"&&(e==null?void 0:e.type)!=="doc-end"){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!e)return yield*this.stream();switch(e.type){case"document":return yield*this.document(e);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(e);case"block-scalar":return yield*this.blockScalar(e);case"block-map":return yield*this.blockMap(e);case"block-seq":return yield*this.blockSequence(e);case"flow-collection":return yield*this.flowCollection(e);case"doc-end":return yield*this.documentEnd(e)}yield*this.pop()}peek(e){return this.stack[this.stack.length-e]}*pop(e){const t=e??this.stack.pop();if(!t)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield t;else{const n=this.peek(1);switch(t.type==="block-scalar"?t.indent="indent"in n?n.indent:0:t.type==="flow-collection"&&n.type==="document"&&(t.indent=0),t.type==="flow-collection"&&_u(t),n.type){case"document":n.value=t;break;case"block-scalar":n.props.push(t);break;case"block-map":{const s=n.items[n.items.length-1];if(s.value){n.items.push({start:[],key:t,sep:[]}),this.onKeyLine=!0;return}else if(s.sep)s.value=t;else{Object.assign(s,{key:t,sep:[]}),this.onKeyLine=!s.explicitKey;return}break}case"block-seq":{const s=n.items[n.items.length-1];s.value?n.items.push({start:[],value:t}):s.value=t;break}case"flow-collection":{const s=n.items[n.items.length-1];!s||s.value?n.items.push({start:[],key:t,sep:[]}):s.sep?s.value=t:Object.assign(s,{key:t,sep:[]});return}default:yield*this.pop(),yield*this.pop(t)}if((n.type==="document"||n.type==="block-map"||n.type==="block-seq")&&(t.type==="block-map"||t.type==="block-seq")){const s=t.items[t.items.length-1];s&&!s.sep&&!s.value&&s.start.length>0&&gu(s.start)===-1&&(t.indent===0||s.start.every(r=>r.type!=="comment"||r.indent<t.indent))&&(n.type==="document"?n.end=s.start:n.items.push({start:s.start}),t.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const e={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&e.start.push(this.sourceToken),this.stack.push(e);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(e){if(e.value)return yield*this.lineEnd(e);switch(this.type){case"doc-start":{gu(e.start)!==-1?(yield*this.pop(),yield*this.step()):e.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":e.start.push(this.sourceToken);return}const t=this.startBlockValue(e);t?this.stack.push(t):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(e){if(this.type==="map-value-ind"){const t=Yr(this.peek(2)),n=os(t);let s;e.end?(s=e.end,s.push(this.sourceToken),delete e.end):s=[this.sourceToken];const r={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:n,key:e,sep:s}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=r}else yield*this.lineEnd(e)}*blockScalar(e){switch(this.type){case"space":case"comment":case"newline":e.props.push(this.sourceToken);return;case"scalar":if(e.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(e){var n;const t=e.items[e.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,t.value){const s="end"in t.value?t.value.end:void 0,r=Array.isArray(s)?s[s.length-1]:void 0;(r==null?void 0:r.type)==="comment"?s==null||s.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else if(t.sep)t.sep.push(this.sourceToken);else{if(this.atIndentedComment(t.start,e.indent)){const s=e.items[e.items.length-2],r=(n=s==null?void 0:s.value)==null?void 0:n.end;if(Array.isArray(r)){Ga(r,t.start),r.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return}if(this.indent>=e.indent){const s=!this.onKeyLine&&this.indent===e.indent,r=s&&(t.sep||t.explicitKey)&&this.type!=="seq-item-ind";let a=[];if(r&&t.sep&&!t.value){const o=[];for(let c=0;c<t.sep.length;++c){const l=t.sep[c];switch(l.type){case"newline":o.push(c);break;case"space":break;case"comment":l.indent>e.indent&&(o.length=0);break;default:o.length=0}}o.length>=2&&(a=t.sep.splice(o[1]))}switch(this.type){case"anchor":case"tag":r||t.value?(a.push(this.sourceToken),e.items.push({start:a}),this.onKeyLine=!0):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"explicit-key-ind":!t.sep&&!t.explicitKey?(t.start.push(this.sourceToken),t.explicitKey=!0):r||t.value?(a.push(this.sourceToken),e.items.push({start:a,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(t.explicitKey)if(t.sep)if(t.value)e.items.push({start:[],key:null,sep:[this.sourceToken]});else if(bi(t.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:null,sep:[this.sourceToken]}]});else if(Bh(t.key)&&!bi(t.sep,"newline")){const o=os(t.start),c=t.key,l=t.sep;l.push(this.sourceToken),delete t.key,delete t.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:o,key:c,sep:l}]})}else a.length>0?t.sep=t.sep.concat(a,this.sourceToken):t.sep.push(this.sourceToken);else if(bi(t.start,"newline"))Object.assign(t,{key:null,sep:[this.sourceToken]});else{const o=os(t.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:o,key:null,sep:[this.sourceToken]}]})}else t.sep?t.value||r?e.items.push({start:a,key:null,sep:[this.sourceToken]}):bi(t.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const o=this.flowScalar(this.type);r||t.value?(e.items.push({start:a,key:o,sep:[]}),this.onKeyLine=!0):t.sep?this.stack.push(o):(Object.assign(t,{key:o,sep:[]}),this.onKeyLine=!0);return}default:{const o=this.startBlockValue(e);if(o){if(o.type==="block-seq"){if(!t.explicitKey&&t.sep&&!bi(t.sep,"newline")){yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source});return}}else s&&e.items.push({start:a});this.stack.push(o);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(e){var n;const t=e.items[e.items.length-1];switch(this.type){case"newline":if(t.value){const s="end"in t.value?t.value.end:void 0,r=Array.isArray(s)?s[s.length-1]:void 0;(r==null?void 0:r.type)==="comment"?s==null||s.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(t.start,e.indent)){const s=e.items[e.items.length-2],r=(n=s==null?void 0:s.value)==null?void 0:n.end;if(Array.isArray(r)){Ga(r,t.start),r.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return;case"anchor":case"tag":if(t.value||this.indent<=e.indent)break;t.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==e.indent)break;t.value||bi(t.start,"seq-item-ind")?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return}if(this.indent>e.indent){const s=this.startBlockValue(e);if(s){this.stack.push(s);return}}yield*this.pop(),yield*this.step()}*flowCollection(e){const t=e.items[e.items.length-1];if(this.type==="flow-error-end"){let n;do yield*this.pop(),n=this.peek(1);while((n==null?void 0:n.type)==="flow-collection")}else if(e.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!t||t.sep?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return;case"map-value-ind":!t||t.value?e.items.push({start:[],key:null,sep:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!t||t.value?e.items.push({start:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const s=this.flowScalar(this.type);!t||t.value?e.items.push({start:[],key:s,sep:[]}):t.sep?this.stack.push(s):Object.assign(t,{key:s,sep:[]});return}case"flow-map-end":case"flow-seq-end":e.end.push(this.sourceToken);return}const n=this.startBlockValue(e);n?this.stack.push(n):(yield*this.pop(),yield*this.step())}else{const n=this.peek(2);if(n.type==="block-map"&&(this.type==="map-value-ind"&&n.indent===e.indent||this.type==="newline"&&!n.items[n.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&n.type!=="flow-collection"){const s=Yr(n),r=os(s);_u(e);const a=e.end.splice(1,e.end.length);a.push(this.sourceToken);const o={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:r,key:e,sep:a}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=o}else yield*this.lineEnd(e)}}flowScalar(e){if(this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}return{type:e,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(e){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const t=Yr(e),n=os(t);return n.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:n,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;const t=Yr(e),n=os(t);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:n,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(e,t){return this.type!=="comment"||this.indent<=t?!1:e.every(n=>n.type==="newline"||n.type==="space")}*documentEnd(e){this.type!=="doc-mode"&&(e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(e){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;case"space":case"comment":default:e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}};function zh(i){const e=i.prettyErrors!==!1;return{lineCounter:i.lineCounter||e&&new Fh||null,prettyErrors:e}}function zm(i,e={}){const{lineCounter:t,prettyErrors:n}=zh(e),s=new Rc(t==null?void 0:t.addNewLine),r=new Ac(e),a=Array.from(r.compose(s.parse(i)));if(n&&t)for(const o of a)o.errors.forEach(za(i,t)),o.warnings.forEach(za(i,t));return a.length>0?a:Object.assign([],{empty:!0},r.streamInfo())}function Hh(i,e={}){const{lineCounter:t,prettyErrors:n}=zh(e),s=new Rc(t==null?void 0:t.addNewLine),r=new Ac(e);let a=null;for(const o of r.compose(s.parse(i),!0,i.length))if(!a)a=o;else if(a.options.logLevel!=="silent"){a.errors.push(new qi(o.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return n&&t&&(a.errors.forEach(za(i,t)),a.warnings.forEach(za(i,t))),a}function Hm(i,e,t){let n;typeof e=="function"?n=e:t===void 0&&e&&typeof e=="object"&&(t=e);const s=Hh(i,t);if(!s)return null;if(s.warnings.forEach(r=>ah(s.options.logLevel,r)),s.errors.length>0){if(s.options.logLevel!=="silent")throw s.errors[0];s.errors=[]}return s.toJS(Object.assign({reviver:n},t))}function Gm(i,e,t){let n=null;if(typeof e=="function"||Array.isArray(e)?n=e:t===void 0&&e&&(t=e),typeof t=="string"&&(t=t.length),typeof t=="number"){const s=Math.round(t);t=s<1?void 0:s>8?{indent:8}:{indent:s}}if(i===void 0){const{keepUndefined:s}=t??e??{};if(!s)return}return Qi(i)&&!n?i.toString(t):new Js(i,n,t).toString(t)}const Aa=Object.freeze(Object.defineProperty({__proto__:null,Alias:Ka,CST:Um,Composer:Ac,Document:Js,Lexer:Uh,LineCounter:Fh,Pair:en,Parser:Rc,Scalar:Ye,Schema:so,YAMLError:Ec,YAMLMap:gn,YAMLParseError:qi,YAMLSeq:Ei,YAMLWarning:Th,isAlias:Zi,isCollection:At,isDocument:Qi,isMap:Xs,isNode:Rt,isPair:Et,isScalar:bt,isSeq:$s,parse:Hm,parseAllDocuments:zm,parseDocument:Hh,stringify:Gm,visit:es,visitAsync:$a},Symbol.toStringTag,{value:"Module"})),Vm=Object.assign({"/world/world.config.yaml":Pp}),Wm=Object.assign({"/world/places/main/config.yaml":Lp}),qm=Object.assign({"/world/places/main/cells/objects.scene":Ip,"/world/places/main/cells/x0z0.scene":Dp}),jm=Object.assign({"/world/templates/camera.js":()=>Ie(()=>import("./camera-K4zneVSs.js"),[]),"/world/templates/player.js":()=>Ie(()=>import("./player-BYsER5Iw.js"),[]),"/world/templates/sprite.js":()=>Ie(()=>import("./sprite-DoGeqWOJ.js"),[])});function Xm(i,e){const t=Aa.parse(i)??{};return Object.entries(t).map(([n,s])=>{var r;return{...s,id:(s==null?void 0:s.id)??((r=s==null?void 0:s.overrides)==null?void 0:r.id)??n,cell:e}})}async function Cc(i){const[e,t]=String(i).split("#"),n=jm["/world/"+e];if(!n)throw new Error(`no template ${e}`);const s=await n();return s[t]??s.default??{}}const vu=i=>i&&typeof i=="object"&&!Array.isArray(i);function vl(i,e){const t={...i};for(const[n,s]of Object.entries(e??{}))t[n]=vu(s)&&vu(i==null?void 0:i[n])?vl(i[n],s):s;return t}async function $m(i){if(!i.template)return i;const{template:e,overrides:t,...n}=i;return vl(vl(await Cc(e),t),n)}const Km=Object.assign({"/web/overrides.yaml":kp});function Ym(i,e){if(!e)return{...i,sounds:{},render:{}};const t=new Set(e.remove??[]),n=i.placements.filter(r=>!t.has(r.id));for(const[r,a]of Object.entries(e.add??{}))n.push({...a,id:r,cell:"web"});const s=e.terrain?{...i.place,terrain:{...i.place.terrain,...e.terrain}}:i.place;return{...i,place:s,placements:n,sounds:e.sounds??{},render:e.render??{}}}async function Jm(i,{web:e=!0}={}){const t=Aa.parse(Object.values(Vm)[0]??"")??{},n=i??t.defaultPlace??"main",s=Wm[`/world/places/${n}/config.yaml`];if(s==null)throw new Error(`no place ${n}`);const r=[];for(const[l,f]of Object.entries(qm))l.startsWith(`/world/places/${n}/cells/`)&&r.push(...Xm(f,l.split("/").pop().replace(/\.scene$/,"")));const a=await Promise.all(r.map($m)),o={config:t,name:n,place:Aa.parse(s)??{},placements:a},c=Object.values(Km)[0];return Ym(o,e&&c?Aa.parse(c):null)}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pc="172",Zm=0,yu=1,Qm=2,Gh=1,eg=2,ei=3,Ti=0,cn=1,ti=2,Mi=0,Sn=1,Mr=2,Va=3,Wa=4,tg=5,Hi=100,ng=101,ig=102,sg=103,rg=104,ag=200,og=201,lg=202,cg=203,yl=204,xl=205,ug=206,fg=207,hg=208,dg=209,pg=210,mg=211,gg=212,_g=213,vg=214,bl=0,wl=1,Sl=2,Bs=3,Ml=4,El=5,Tl=6,Al=7,Vh=0,yg=1,xg=2,oi=0,bg=1,wg=2,Sg=3,Mg=4,Eg=5,Tg=6,Ag=7,Wh=300,zs=301,Hs=302,Rl=303,Cl=304,lo=306,Er=1e3,ii=1001,Pl=1002,Wt=1003,Rg=1004,Jr=1005,ln=1006,Eo=1007,Gn=1008,qn=1009,qh=1010,jh=1011,Tr=1012,Lc=1013,Yi=1014,si=1015,Dr=1016,Ic=1017,Dc=1018,Gs=1020,Xh=35902,$h=1021,Kh=1022,bn=1023,Yh=1024,Jh=1025,ks=1026,Vs=1027,Zh=1028,kc=1029,Qh=1030,Oc=1031,Nc=1033,Ra=33776,Ca=33777,Pa=33778,La=33779,Ll=35840,Il=35841,Dl=35842,kl=35843,Ol=36196,Nl=37492,Ul=37496,Fl=37808,Bl=37809,zl=37810,Hl=37811,Gl=37812,Vl=37813,Wl=37814,ql=37815,jl=37816,Xl=37817,$l=37818,Kl=37819,Yl=37820,Jl=37821,Ia=36492,Zl=36494,Ql=36495,ed=36283,ec=36284,tc=36285,nc=36286,Cg=3200,Pg=3201,Lg=0,Ig=1,wi="",jt="srgb",Ws="srgb-linear",qa="linear",yt="srgb",ls=7680,xu=519,Dg=512,kg=513,Og=514,td=515,Ng=516,Ug=517,Fg=518,Bg=519,bu=35044,zg=35048,wu="300 es",ri=2e3,ja=2001;class Zs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],To=Math.PI/180,ic=180/Math.PI;function kr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function ht(i,e,t){return Math.max(e,Math.min(t,i))}function Hg(i,e){return(i%e+e)%e}function Ao(i,e,t){return(1-t)*i+t*e}function lr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function an(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class xt{constructor(e=0,t=0){xt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class et{constructor(e,t,n,s,r,a,o,c,l){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const f=this.elements;return f[0]=e,f[1]=s,f[2]=o,f[3]=t,f[4]=r,f[5]=c,f[6]=n,f[7]=a,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],f=n[4],h=n[7],d=n[2],p=n[5],y=n[8],v=s[0],_=s[3],m=s[6],R=s[1],b=s[4],S=s[7],I=s[2],L=s[5],C=s[8];return r[0]=a*v+o*R+c*I,r[3]=a*_+o*b+c*L,r[6]=a*m+o*S+c*C,r[1]=l*v+f*R+h*I,r[4]=l*_+f*b+h*L,r[7]=l*m+f*S+h*C,r[2]=d*v+p*R+y*I,r[5]=d*_+p*b+y*L,r[8]=d*m+p*S+y*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8];return t*a*f-t*o*l-n*r*f+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],h=f*a-o*l,d=o*c-f*r,p=l*r-a*c,y=t*h+n*d+s*p;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/y;return e[0]=h*v,e[1]=(s*l-f*n)*v,e[2]=(o*n-s*a)*v,e[3]=d*v,e[4]=(f*t-s*c)*v,e[5]=(s*r-o*t)*v,e[6]=p*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ro.makeScale(e,t)),this}rotate(e){return this.premultiply(Ro.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ro.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ro=new et;function nd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ar(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gg(){const i=Ar("canvas");return i.style.display="block",i}const Su={};function Ms(i){i in Su||(Su[i]=!0,console.warn(i))}function Vg(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Wg(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function qg(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Mu=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eu=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jg(){const i={enabled:!0,workingColorSpace:Ws,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===yt&&(s.r=li(s.r),s.g=li(s.g),s.b=li(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===yt&&(s.r=Os(s.r),s.g=Os(s.g),s.b=Os(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===wi?qa:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ws]:{primaries:e,whitePoint:n,transfer:qa,toXYZ:Mu,fromXYZ:Eu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:e,whitePoint:n,transfer:yt,toXYZ:Mu,fromXYZ:Eu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}}),i}const pt=jg();function li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let cs;class Xg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{cs===void 0&&(cs=Ar("canvas")),cs.width=e.width,cs.height=e.height;const n=cs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=cs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ar("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=li(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(li(t[n]/255)*255):t[n]=li(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $g=0;class id{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=kr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Co(s[a].image)):r.push(Co(s[a]))}else r=Co(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Co(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kg=0;class Xt extends Zs{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,n=ii,s=ii,r=ln,a=Gn,o=bn,c=qn,l=Xt.DEFAULT_ANISOTROPY,f=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=kr(),this.name="",this.source=new id(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Er:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case Pl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Er:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case Pl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=Wh;Xt.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,n=0,s=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],f=c[4],h=c[8],d=c[1],p=c[5],y=c[9],v=c[2],_=c[6],m=c[10];if(Math.abs(f-d)<.01&&Math.abs(h-v)<.01&&Math.abs(y-_)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+v)<.1&&Math.abs(y+_)<.1&&Math.abs(l+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,S=(p+1)/2,I=(m+1)/2,L=(f+d)/4,C=(h+v)/4,D=(y+_)/4;return b>S&&b>I?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=L/n,r=C/n):S>I?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=L/s,r=D/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=C/r,s=D/r),this.set(n,s,r,t),this}let R=Math.sqrt((_-y)*(_-y)+(h-v)*(h-v)+(d-f)*(d-f));return Math.abs(R)<.001&&(R=1),this.x=(_-y)/R,this.y=(h-v)/R,this.z=(d-f)/R,this.w=Math.acos((l+p+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yg extends Zs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Xt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new id(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends Yg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class sd extends Xt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jg extends Xt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Or{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],f=n[s+2],h=n[s+3];const d=r[a+0],p=r[a+1],y=r[a+2],v=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=f,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=y,e[t+3]=v;return}if(h!==v||c!==d||l!==p||f!==y){let _=1-o;const m=c*d+l*p+f*y+h*v,R=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){const I=Math.sqrt(b),L=Math.atan2(I,m*R);_=Math.sin(_*L)/I,o=Math.sin(o*L)/I}const S=o*R;if(c=c*_+d*S,l=l*_+p*S,f=f*_+y*S,h=h*_+v*S,_===1-o){const I=1/Math.sqrt(c*c+l*l+f*f+h*h);c*=I,l*=I,f*=I,h*=I}}e[t]=c,e[t+1]=l,e[t+2]=f,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],f=n[s+3],h=r[a],d=r[a+1],p=r[a+2],y=r[a+3];return e[t]=o*y+f*h+c*p-l*d,e[t+1]=c*y+f*d+l*h-o*p,e[t+2]=l*y+f*p+o*d-c*h,e[t+3]=f*y-o*h-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),f=o(s/2),h=o(r/2),d=c(n/2),p=c(s/2),y=c(r/2);switch(a){case"XYZ":this._x=d*f*h+l*p*y,this._y=l*p*h-d*f*y,this._z=l*f*y+d*p*h,this._w=l*f*h-d*p*y;break;case"YXZ":this._x=d*f*h+l*p*y,this._y=l*p*h-d*f*y,this._z=l*f*y-d*p*h,this._w=l*f*h+d*p*y;break;case"ZXY":this._x=d*f*h-l*p*y,this._y=l*p*h+d*f*y,this._z=l*f*y+d*p*h,this._w=l*f*h-d*p*y;break;case"ZYX":this._x=d*f*h-l*p*y,this._y=l*p*h+d*f*y,this._z=l*f*y-d*p*h,this._w=l*f*h+d*p*y;break;case"YZX":this._x=d*f*h+l*p*y,this._y=l*p*h+d*f*y,this._z=l*f*y-d*p*h,this._w=l*f*h-d*p*y;break;case"XZY":this._x=d*f*h-l*p*y,this._y=l*p*h-d*f*y,this._z=l*f*y+d*p*h,this._w=l*f*h+d*p*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],f=t[6],h=t[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(f-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+f)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,f=t._w;return this._x=n*f+a*o+s*l-r*c,this._y=s*f+a*c+r*o-n*l,this._z=r*f+a*l+n*c-s*o,this._w=a*f-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),f=Math.atan2(l,o),h=Math.sin((1-t)*f)/l,d=Math.sin(t*f)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,t=0,n=0){$.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),f=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*f,this.y=n+c*f+o*l-r*h,this.z=s+c*h+r*f-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Po.copy(this).projectOnVector(e),this.sub(Po)}reflect(e){return this.sub(Po.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Po=new $,Tu=new Or;class Nr{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Pn):Pn.fromBufferAttribute(r,a),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zr.copy(n.boundingBox)),Zr.applyMatrix4(e.matrixWorld),this.union(Zr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),Qr.subVectors(this.max,cr),us.subVectors(e.a,cr),fs.subVectors(e.b,cr),hs.subVectors(e.c,cr),mi.subVectors(fs,us),gi.subVectors(hs,fs),Di.subVectors(us,hs);let t=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Di.z,Di.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Di.z,0,-Di.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Di.y,Di.x,0];return!Lo(t,us,fs,hs,Qr)||(t=[1,0,0,0,1,0,0,0,1],!Lo(t,us,fs,hs,Qr))?!1:(ea.crossVectors(mi,gi),t=[ea.x,ea.y,ea.z],Lo(t,us,fs,hs,Qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kn=[new $,new $,new $,new $,new $,new $,new $,new $],Pn=new $,Zr=new Nr,us=new $,fs=new $,hs=new $,mi=new $,gi=new $,Di=new $,cr=new $,Qr=new $,ea=new $,ki=new $;function Lo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ki.fromArray(i,r);const o=s.x*Math.abs(ki.x)+s.y*Math.abs(ki.y)+s.z*Math.abs(ki.z),c=e.dot(ki),l=t.dot(ki),f=n.dot(ki);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>o)return!1}return!0}const Zg=new Nr,ur=new $,Io=new $;class Uc{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Zg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ur.subVectors(e,this.center);const t=ur.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ur,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Io.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ur.copy(e.center).add(Io)),this.expandByPoint(ur.copy(e.center).sub(Io))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yn=new $,Do=new $,ta=new $,_i=new $,ko=new $,na=new $,Oo=new $;class Qg{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Do.copy(e).add(t).multiplyScalar(.5),ta.copy(t).sub(e).normalize(),_i.copy(this.origin).sub(Do);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ta),o=_i.dot(this.direction),c=-_i.dot(ta),l=_i.lengthSq(),f=Math.abs(1-a*a);let h,d,p,y;if(f>0)if(h=a*c-o,d=a*o-c,y=r*f,h>=0)if(d>=-y)if(d<=y){const v=1/f;h*=v,d*=v,p=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d<=-y?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l):d<=y?(h=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Do).addScaledVector(ta,d),p}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const n=Yn.dot(this.direction),s=Yn.dot(Yn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),f>=0?(r=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(r=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,n,s,r){ko.subVectors(t,e),na.subVectors(n,e),Oo.crossVectors(ko,na);let a=this.direction.dot(Oo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_i.subVectors(this.origin,e);const c=o*this.direction.dot(na.crossVectors(_i,na));if(c<0)return null;const l=o*this.direction.dot(ko.cross(_i));if(l<0||c+l>a)return null;const f=-o*_i.dot(Oo);return f<0?null:this.at(f/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(e,t,n,s,r,a,o,c,l,f,h,d,p,y,v,_){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,f,h,d,p,y,v,_)}set(e,t,n,s,r,a,o,c,l,f,h,d,p,y,v,_){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=f,m[10]=h,m[14]=d,m[3]=p,m[7]=y,m[11]=v,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ds.setFromMatrixColumn(e,0).length(),r=1/ds.setFromMatrixColumn(e,1).length(),a=1/ds.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),f=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*f,p=a*h,y=o*f,v=o*h;t[0]=c*f,t[4]=-c*h,t[8]=l,t[1]=p+y*l,t[5]=d-v*l,t[9]=-o*c,t[2]=v-d*l,t[6]=y+p*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*f,p=c*h,y=l*f,v=l*h;t[0]=d+v*o,t[4]=y*o-p,t[8]=a*l,t[1]=a*h,t[5]=a*f,t[9]=-o,t[2]=p*o-y,t[6]=v+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*f,p=c*h,y=l*f,v=l*h;t[0]=d-v*o,t[4]=-a*h,t[8]=y+p*o,t[1]=p+y*o,t[5]=a*f,t[9]=v-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*f,p=a*h,y=o*f,v=o*h;t[0]=c*f,t[4]=y*l-p,t[8]=d*l+v,t[1]=c*h,t[5]=v*l+d,t[9]=p*l-y,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,p=a*l,y=o*c,v=o*l;t[0]=c*f,t[4]=v-d*h,t[8]=y*h+p,t[1]=h,t[5]=a*f,t[9]=-o*f,t[2]=-l*f,t[6]=p*h+y,t[10]=d-v*h}else if(e.order==="XZY"){const d=a*c,p=a*l,y=o*c,v=o*l;t[0]=c*f,t[4]=-h,t[8]=l*f,t[1]=d*h+v,t[5]=a*f,t[9]=p*h-y,t[2]=y*h-p,t[6]=o*f,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(e0,e,t0)}lookAt(e,t,n){const s=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),vi.crossVectors(n,dn),vi.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),vi.crossVectors(n,dn)),vi.normalize(),ia.crossVectors(dn,vi),s[0]=vi.x,s[4]=ia.x,s[8]=dn.x,s[1]=vi.y,s[5]=ia.y,s[9]=dn.y,s[2]=vi.z,s[6]=ia.z,s[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],f=n[1],h=n[5],d=n[9],p=n[13],y=n[2],v=n[6],_=n[10],m=n[14],R=n[3],b=n[7],S=n[11],I=n[15],L=s[0],C=s[4],D=s[8],E=s[12],w=s[1],k=s[5],U=s[9],F=s[13],W=s[2],Z=s[6],K=s[10],ae=s[14],J=s[3],fe=s[7],me=s[11],Me=s[15];return r[0]=a*L+o*w+c*W+l*J,r[4]=a*C+o*k+c*Z+l*fe,r[8]=a*D+o*U+c*K+l*me,r[12]=a*E+o*F+c*ae+l*Me,r[1]=f*L+h*w+d*W+p*J,r[5]=f*C+h*k+d*Z+p*fe,r[9]=f*D+h*U+d*K+p*me,r[13]=f*E+h*F+d*ae+p*Me,r[2]=y*L+v*w+_*W+m*J,r[6]=y*C+v*k+_*Z+m*fe,r[10]=y*D+v*U+_*K+m*me,r[14]=y*E+v*F+_*ae+m*Me,r[3]=R*L+b*w+S*W+I*J,r[7]=R*C+b*k+S*Z+I*fe,r[11]=R*D+b*U+S*K+I*me,r[15]=R*E+b*F+S*ae+I*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],f=e[2],h=e[6],d=e[10],p=e[14],y=e[3],v=e[7],_=e[11],m=e[15];return y*(+r*c*h-s*l*h-r*o*d+n*l*d+s*o*p-n*c*p)+v*(+t*c*p-t*l*d+r*a*d-s*a*p+s*l*f-r*c*f)+_*(+t*l*h-t*o*p-r*a*h+n*a*p+r*o*f-n*l*f)+m*(-s*o*f-t*c*h+t*o*d+s*a*h-n*a*d+n*c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],h=e[9],d=e[10],p=e[11],y=e[12],v=e[13],_=e[14],m=e[15],R=h*_*l-v*d*l+v*c*p-o*_*p-h*c*m+o*d*m,b=y*d*l-f*_*l-y*c*p+a*_*p+f*c*m-a*d*m,S=f*v*l-y*h*l+y*o*p-a*v*p-f*o*m+a*h*m,I=y*h*c-f*v*c-y*o*d+a*v*d+f*o*_-a*h*_,L=t*R+n*b+s*S+r*I;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/L;return e[0]=R*C,e[1]=(v*d*r-h*_*r-v*s*p+n*_*p+h*s*m-n*d*m)*C,e[2]=(o*_*r-v*c*r+v*s*l-n*_*l-o*s*m+n*c*m)*C,e[3]=(h*c*r-o*d*r-h*s*l+n*d*l+o*s*p-n*c*p)*C,e[4]=b*C,e[5]=(f*_*r-y*d*r+y*s*p-t*_*p-f*s*m+t*d*m)*C,e[6]=(y*c*r-a*_*r-y*s*l+t*_*l+a*s*m-t*c*m)*C,e[7]=(a*d*r-f*c*r+f*s*l-t*d*l-a*s*p+t*c*p)*C,e[8]=S*C,e[9]=(y*h*r-f*v*r-y*n*p+t*v*p+f*n*m-t*h*m)*C,e[10]=(a*v*r-y*o*r+y*n*l-t*v*l-a*n*m+t*o*m)*C,e[11]=(f*o*r-a*h*r-f*n*l+t*h*l+a*n*p-t*o*p)*C,e[12]=I*C,e[13]=(f*v*s-y*h*s+y*n*d-t*v*d-f*n*_+t*h*_)*C,e[14]=(y*o*s-a*v*s-y*n*c+t*v*c+a*n*_-t*o*_)*C,e[15]=(a*h*s-f*o*s+f*n*c-t*h*c-a*n*d+t*o*d)*C,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,f=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,f*o+n,f*c-s*a,0,l*c-s*o,f*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,f=a+a,h=o+o,d=r*l,p=r*f,y=r*h,v=a*f,_=a*h,m=o*h,R=c*l,b=c*f,S=c*h,I=n.x,L=n.y,C=n.z;return s[0]=(1-(v+m))*I,s[1]=(p+S)*I,s[2]=(y-b)*I,s[3]=0,s[4]=(p-S)*L,s[5]=(1-(d+m))*L,s[6]=(_+R)*L,s[7]=0,s[8]=(y+b)*C,s[9]=(_-R)*C,s[10]=(1-(d+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=ds.set(s[0],s[1],s[2]).length();const a=ds.set(s[4],s[5],s[6]).length(),o=ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ln.copy(this);const l=1/r,f=1/a,h=1/o;return Ln.elements[0]*=l,Ln.elements[1]*=l,Ln.elements[2]*=l,Ln.elements[4]*=f,Ln.elements[5]*=f,Ln.elements[6]*=f,Ln.elements[8]*=h,Ln.elements[9]*=h,Ln.elements[10]*=h,t.setFromRotationMatrix(Ln),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=ri){const c=this.elements,l=2*r/(t-e),f=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let p,y;if(o===ri)p=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===ja)p=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ri){const c=this.elements,l=1/(t-e),f=1/(n-s),h=1/(a-r),d=(t+e)*l,p=(n+s)*f;let y,v;if(o===ri)y=(a+r)*h,v=-2*h;else if(o===ja)y=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*f,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ds=new $,Ln=new Ot,e0=new $(0,0,0),t0=new $(1,1,1),vi=new $,ia=new $,dn=new $,Au=new Ot,Ru=new Or;class fi{constructor(e=0,t=0,n=0,s=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],f=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Au.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Au,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ru.setFromEuler(this),this.setFromQuaternion(Ru,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class rd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let n0=0;const Cu=new $,ps=new Or,Jn=new Ot,sa=new $,fr=new $,i0=new $,s0=new Or,Pu=new $(1,0,0),Lu=new $(0,1,0),Iu=new $(0,0,1),Du={type:"added"},r0={type:"removed"},ms={type:"childadded",child:null},No={type:"childremoved",child:null};class un extends Zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new $,t=new fi,n=new Or,s=new $(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ot},normalMatrix:{value:new et}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(Pu,e)}rotateY(e){return this.rotateOnAxis(Lu,e)}rotateZ(e){return this.rotateOnAxis(Iu,e)}translateOnAxis(e,t){return Cu.copy(e).applyQuaternion(this.quaternion),this.position.add(Cu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pu,e)}translateY(e){return this.translateOnAxis(Lu,e)}translateZ(e){return this.translateOnAxis(Iu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?sa.copy(e):sa.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(fr,sa,this.up):Jn.lookAt(sa,fr,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),ps.setFromRotationMatrix(Jn),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Du),ms.child=e,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(r0),No.child=e,this.dispatchEvent(No),No.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Du),ms.child=e,this.dispatchEvent(ms),ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,e,i0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,s0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),f=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),y=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),f.length>0&&(n.images=f),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),y.length>0&&(n.nodes=y)}return n.object=s,n;function a(o){const c=[];for(const l in o){const f=o[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}un.DEFAULT_UP=new $(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new $,Zn=new $,Uo=new $,Qn=new $,gs=new $,_s=new $,ku=new $,Fo=new $,Bo=new $,zo=new $,Ho=new Pt,Go=new Pt,Vo=new Pt;class On{constructor(e=new $,t=new $,n=new $){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),In.subVectors(e,t),s.cross(In);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){In.subVectors(s,t),Zn.subVectors(n,t),Uo.subVectors(e,t);const a=In.dot(In),o=In.dot(Zn),c=In.dot(Uo),l=Zn.dot(Zn),f=Zn.dot(Uo),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(l*c-o*f)*d,y=(a*f-o*c)*d;return r.set(1-p-y,y,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Qn.x),c.addScaledVector(a,Qn.y),c.addScaledVector(o,Qn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ho.setScalar(0),Go.setScalar(0),Vo.setScalar(0),Ho.fromBufferAttribute(e,t),Go.fromBufferAttribute(e,n),Vo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ho,r.x),a.addScaledVector(Go,r.y),a.addScaledVector(Vo,r.z),a}static isFrontFacing(e,t,n,s){return In.subVectors(n,t),Zn.subVectors(e,t),In.cross(Zn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),In.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return On.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return On.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;gs.subVectors(s,n),_s.subVectors(r,n),Fo.subVectors(e,n);const c=gs.dot(Fo),l=_s.dot(Fo);if(c<=0&&l<=0)return t.copy(n);Bo.subVectors(e,s);const f=gs.dot(Bo),h=_s.dot(Bo);if(f>=0&&h<=f)return t.copy(s);const d=c*h-f*l;if(d<=0&&c>=0&&f<=0)return a=c/(c-f),t.copy(n).addScaledVector(gs,a);zo.subVectors(e,r);const p=gs.dot(zo),y=_s.dot(zo);if(y>=0&&p<=y)return t.copy(r);const v=p*l-c*y;if(v<=0&&l>=0&&y<=0)return o=l/(l-y),t.copy(n).addScaledVector(_s,o);const _=f*y-p*h;if(_<=0&&h-f>=0&&p-y>=0)return ku.subVectors(r,s),o=(h-f)/(h-f+(p-y)),t.copy(s).addScaledVector(ku,o);const m=1/(_+v+d);return a=v*m,o=d*m,t.copy(n).addScaledVector(gs,a).addScaledVector(_s,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ad={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},ra={h:0,s:0,l:0};function Wo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class mt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=pt.workingColorSpace){if(e=Hg(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Wo(a,r,e+1/3),this.g=Wo(a,r,e),this.b=Wo(a,r,e-1/3)}return pt.toWorkingColorSpace(this,s),this}setStyle(e,t=jt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){const n=ad[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}copyLinearToSRGB(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return pt.fromWorkingColorSpace(Zt.copy(this),e),Math.round(ht(Zt.r*255,0,255))*65536+Math.round(ht(Zt.g*255,0,255))*256+Math.round(ht(Zt.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(Zt.copy(this),t);const n=Zt.r,s=Zt.g,r=Zt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const f=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=f<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=jt){pt.fromWorkingColorSpace(Zt.copy(this),e);const t=Zt.r,n=Zt.g,s=Zt.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(yi),this.setHSL(yi.h+e,yi.s+t,yi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yi),e.getHSL(ra);const n=Ao(yi.h,ra.h,t),s=Ao(yi.s,ra.s,t),r=Ao(yi.l,ra.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new mt;mt.NAMES=ad;let a0=0;class co extends Zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=kr(),this.name="",this.type="Material",this.blending=Sn,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yl,this.blendDst=xl,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Sn&&(n.blending=this.blending),this.side!==Ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yl&&(n.blendSrc=this.blendSrc),this.blendDst!==xl&&(n.blendDst=this.blendDst),this.blendEquation!==Hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Rr extends co{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=Vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new $,aa=new xt;class Nn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=bu,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)aa.fromBufferAttribute(this,t),aa.applyMatrix3(e),this.setXY(t,aa.x,aa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=lr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=lr(t,this.array)),t}setX(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=lr(t,this.array)),t}setY(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=lr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=lr(t,this.array)),t}setW(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array),s=an(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array),s=an(s,this.array),r=an(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bu&&(e.usage=this.usage),e}}class od extends Nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ld extends Nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ci extends Nn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let o0=0;const yn=new Ot,qo=new un,vs=new $,pn=new Nr,hr=new Nr,Vt=new $;class di extends Zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=kr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nd(e)?ld:od)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,n){return yn.makeTranslation(e,t,n),this.applyMatrix4(yn),this}scale(e,t,n){return yn.makeScale(e,t,n),this.applyMatrix4(yn),this}lookAt(e){return qo.lookAt(e),qo.updateMatrix(),this.applyMatrix4(qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ci(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const n=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];hr.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(pn.min,hr.min),pn.expandByPoint(Vt),Vt.addVectors(pn.max,hr.max),pn.expandByPoint(Vt)):(pn.expandByPoint(hr.min),pn.expandByPoint(hr.max))}pn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Vt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Vt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,f=o.count;l<f;l++)Vt.fromBufferAttribute(o,l),c&&(vs.fromBufferAttribute(e,l),Vt.add(vs)),s=Math.max(s,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let D=0;D<n.count;D++)o[D]=new $,c[D]=new $;const l=new $,f=new $,h=new $,d=new xt,p=new xt,y=new xt,v=new $,_=new $;function m(D,E,w){l.fromBufferAttribute(n,D),f.fromBufferAttribute(n,E),h.fromBufferAttribute(n,w),d.fromBufferAttribute(r,D),p.fromBufferAttribute(r,E),y.fromBufferAttribute(r,w),f.sub(l),h.sub(l),p.sub(d),y.sub(d);const k=1/(p.x*y.y-y.x*p.y);isFinite(k)&&(v.copy(f).multiplyScalar(y.y).addScaledVector(h,-p.y).multiplyScalar(k),_.copy(h).multiplyScalar(p.x).addScaledVector(f,-y.x).multiplyScalar(k),o[D].add(v),o[E].add(v),o[w].add(v),c[D].add(_),c[E].add(_),c[w].add(_))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let D=0,E=R.length;D<E;++D){const w=R[D],k=w.start,U=w.count;for(let F=k,W=k+U;F<W;F+=3)m(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const b=new $,S=new $,I=new $,L=new $;function C(D){I.fromBufferAttribute(s,D),L.copy(I);const E=o[D];b.copy(E),b.sub(I.multiplyScalar(I.dot(E))).normalize(),S.crossVectors(L,E);const k=S.dot(c[D])<0?-1:1;a.setXYZW(D,b.x,b.y,b.z,k)}for(let D=0,E=R.length;D<E;++D){const w=R[D],k=w.start,U=w.count;for(let F=k,W=k+U;F<W;F+=3)C(e.getX(F+0)),C(e.getX(F+1)),C(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new $,r=new $,a=new $,o=new $,c=new $,l=new $,f=new $,h=new $;if(e)for(let d=0,p=e.count;d<p;d+=3){const y=e.getX(d+0),v=e.getX(d+1),_=e.getX(d+2);s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,_),f.subVectors(a,r),h.subVectors(s,r),f.cross(h),o.fromBufferAttribute(n,y),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,_),o.add(f),c.add(f),l.add(f),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(_,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),f.subVectors(a,r),h.subVectors(s,r),f.cross(h),n.setXYZ(d+0,f.x,f.y,f.z),n.setXYZ(d+1,f.x,f.y,f.z),n.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,c){const l=o.array,f=o.itemSize,h=o.normalized,d=new l.constructor(c.length*f);let p=0,y=0;for(let v=0,_=c.length;v<_;v++){o.isInterleavedBufferAttribute?p=c[v]*o.data.stride+o.offset:p=c[v]*f;for(let m=0;m<f;m++)d[y++]=l[p++]}return new Nn(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new di,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let f=0,h=l.length;f<h;f++){const d=l[f],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];f.push(p.toJSON(e.data))}f.length>0&&(s[c]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const f=s[l];this.setAttribute(l,f.clone(t))}const r=e.morphAttributes;for(const l in r){const f=[],h=r[l];for(let d=0,p=h.length;d<p;d++)f.push(h[d].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,f=a.length;l<f;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ou=new Ot,Oi=new Qg,oa=new Uc,Nu=new $,la=new $,ca=new $,ua=new $,jo=new $,fa=new $,Uu=new $,ha=new $;class sn extends un{constructor(e=new di,t=new Rr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){fa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const f=o[c],h=r[c];f!==0&&(jo.fromBufferAttribute(h,e),a?fa.addScaledVector(jo,f):fa.addScaledVector(jo.sub(t),f))}t.add(fa)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(r),Oi.copy(e.ray).recast(e.near),!(oa.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(oa,Nu)===null||Oi.origin.distanceToSquared(Nu)>(e.far-e.near)**2))&&(Ou.copy(r).invert(),Oi.copy(e.ray).applyMatrix4(Ou),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,f=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,v=d.length;y<v;y++){const _=d[y],m=a[_.materialIndex],R=Math.max(_.start,p.start),b=Math.min(o.count,Math.min(_.start+_.count,p.start+p.count));for(let S=R,I=b;S<I;S+=3){const L=o.getX(S),C=o.getX(S+1),D=o.getX(S+2);s=da(this,m,e,n,l,f,h,L,C,D),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const y=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let _=y,m=v;_<m;_+=3){const R=o.getX(_),b=o.getX(_+1),S=o.getX(_+2);s=da(this,a,e,n,l,f,h,R,b,S),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let y=0,v=d.length;y<v;y++){const _=d[y],m=a[_.materialIndex],R=Math.max(_.start,p.start),b=Math.min(c.count,Math.min(_.start+_.count,p.start+p.count));for(let S=R,I=b;S<I;S+=3){const L=S,C=S+1,D=S+2;s=da(this,m,e,n,l,f,h,L,C,D),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const y=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let _=y,m=v;_<m;_+=3){const R=_,b=_+1,S=_+2;s=da(this,a,e,n,l,f,h,R,b,S),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}}function l0(i,e,t,n,s,r,a,o){let c;if(e.side===cn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Ti,o),c===null)return null;ha.copy(o),ha.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ha);return l<t.near||l>t.far?null:{distance:l,point:ha.clone(),object:i}}function da(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,la),i.getVertexPosition(c,ca),i.getVertexPosition(l,ua);const f=l0(i,e,t,n,la,ca,ua,Uu);if(f){const h=new $;On.getBarycoord(Uu,la,ca,ua,h),s&&(f.uv=On.getInterpolatedAttribute(s,o,c,l,h,new xt)),r&&(f.uv1=On.getInterpolatedAttribute(r,o,c,l,h,new xt)),a&&(f.normal=On.getInterpolatedAttribute(a,o,c,l,h,new $),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new $,materialIndex:0};On.getNormal(la,ca,ua,d.normal),f.face=d,f.barycoord=h}return f}class Ur extends di{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],f=[],h=[];let d=0,p=0;y("z","y","x",-1,-1,n,t,e,a,r,0),y("z","y","x",1,-1,n,t,-e,a,r,1),y("x","z","y",1,1,e,n,t,s,a,2),y("x","z","y",1,-1,e,n,-t,s,a,3),y("x","y","z",1,-1,e,t,n,s,r,4),y("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ci(l,3)),this.setAttribute("normal",new ci(f,3)),this.setAttribute("uv",new ci(h,2));function y(v,_,m,R,b,S,I,L,C,D,E){const w=S/C,k=I/D,U=S/2,F=I/2,W=L/2,Z=C+1,K=D+1;let ae=0,J=0;const fe=new $;for(let me=0;me<K;me++){const Me=me*k-F;for(let Re=0;Re<Z;Re++){const Ve=Re*w-U;fe[v]=Ve*R,fe[_]=Me*b,fe[m]=W,l.push(fe.x,fe.y,fe.z),fe[v]=0,fe[_]=0,fe[m]=L>0?1:-1,f.push(fe.x,fe.y,fe.z),h.push(Re/C),h.push(1-me/D),ae+=1}}for(let me=0;me<D;me++)for(let Me=0;Me<C;Me++){const Re=d+Me+Z*me,Ve=d+Me+Z*(me+1),ee=d+(Me+1)+Z*(me+1),ue=d+(Me+1)+Z*me;c.push(Re,Ve,ue),c.push(Ve,ee,ue),J+=6}o.addGroup(p,J,E),p+=J,d+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function tn(i){const e={};for(let t=0;t<i.length;t++){const n=qs(i[t]);for(const s in n)e[s]=n[s]}return e}function c0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function cd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}const u0={clone:qs,merge:tn};var f0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,h0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends co{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=f0,this.fragmentShader=h0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=c0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ud extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xi=new $,Fu=new xt,Bu=new xt;class kn extends ud{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ic*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(To*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ic*2*Math.atan(Math.tan(To*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,t){return this.getViewBounds(e,Fu,Bu),t.subVectors(Bu,Fu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(To*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ys=-90,xs=1;class d0 extends un{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new kn(ys,xs,e,t);s.layers=this.layers,this.add(s);const r=new kn(ys,xs,e,t);r.layers=this.layers,this.add(r);const a=new kn(ys,xs,e,t);a.layers=this.layers,this.add(a);const o=new kn(ys,xs,e,t);o.layers=this.layers,this.add(o);const c=new kn(ys,xs,e,t);c.layers=this.layers,this.add(c);const l=new kn(ys,xs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===ri)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ja)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,f),e.setRenderTarget(h,d,p),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class fd extends Xt{constructor(e,t,n,s,r,a,o,c,l,f){e=e!==void 0?e:[],t=t!==void 0?t:zs,super(e,t,n,s,r,a,o,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class p0 extends Ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new fd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ur(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:Mi});r.uniforms.tEquirect.value=t;const a=new sn(s,r),o=t.minFilter;return t.minFilter===Gn&&(t.minFilter=ln),new d0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class hd extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class m0 extends Xt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Wt,f=Wt,h,d){super(null,a,o,c,l,f,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class g0 extends Nn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Xo=new $,_0=new $,v0=new et;class Bi{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Xo.subVectors(n,t).cross(_0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Xo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||v0.getNormalMatrix(e),s=this.coplanarPoint(Xo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new Uc,pa=new $;class dd{constructor(e=new Bi,t=new Bi,n=new Bi,s=new Bi,r=new Bi,a=new Bi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ri){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],f=s[5],h=s[6],d=s[7],p=s[8],y=s[9],v=s[10],_=s[11],m=s[12],R=s[13],b=s[14],S=s[15];if(n[0].setComponents(c-r,d-l,_-p,S-m).normalize(),n[1].setComponents(c+r,d+l,_+p,S+m).normalize(),n[2].setComponents(c+a,d+f,_+y,S+R).normalize(),n[3].setComponents(c-a,d-f,_-y,S-R).normalize(),n[4].setComponents(c-o,d-h,_-v,S-b).normalize(),t===ri)n[5].setComponents(c+o,d+h,_+v,S+b).normalize();else if(t===ja)n[5].setComponents(o,h,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(pa.x=s.normal.x>0?e.max.x:e.min.x,pa.y=s.normal.y>0?e.max.y:e.min.y,pa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(pa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}let ma=class extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}};class sc extends Xt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pd extends Xt{constructor(e,t,n,s,r,a,o,c,l,f=ks){if(f!==ks&&f!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===ks&&(n=Yi),n===void 0&&f===Vs&&(n=Gs),super(null,s,r,a,o,c,f,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Wt,this.minFilter=c!==void 0?c:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class hi extends di{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,f=c+1,h=e/o,d=t/c,p=[],y=[],v=[],_=[];for(let m=0;m<f;m++){const R=m*d-a;for(let b=0;b<l;b++){const S=b*h-r;y.push(S,-R,0),v.push(0,0,1),_.push(b/o),_.push(1-m/c)}}for(let m=0;m<c;m++)for(let R=0;R<o;R++){const b=R+l*m,S=R+l*(m+1),I=R+1+l*(m+1),L=R+1+l*m;p.push(b,S,L),p.push(S,I,L)}this.setIndex(p),this.setAttribute("position",new ci(y,3)),this.setAttribute("normal",new ci(v,3)),this.setAttribute("uv",new ci(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hi(e.width,e.height,e.widthSegments,e.heightSegments)}}class y0 extends co{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class x0 extends co{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zu={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class b0{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){o++,r===!1&&s.onStart!==void 0&&s.onStart(f,a,o),r=!0},this.itemEnd=function(f){a++,s.onProgress!==void 0&&s.onProgress(f,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,h){return l.push(f,h),this},this.removeHandler=function(f){const h=l.indexOf(f);return h!==-1&&l.splice(h,2),this},this.getHandler=function(f){for(let h=0,d=l.length;h<d;h+=2){const p=l[h],y=l[h+1];if(p.global&&(p.lastIndex=0),p.test(f))return y}return null}}}const w0=new b0;class Fc{constructor(e){this.manager=e!==void 0?e:w0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Fc.DEFAULT_MATERIAL_NAME="__DEFAULT";class S0 extends Fc{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=zu.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Ar("img");function c(){f(),zu.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){f(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function f(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class md extends Fc{constructor(e){super(e)}load(e,t,n,s){const r=new Xt,a=new S0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Bc extends ud{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class M0 extends di{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class E0 extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function Hu(i,e,t,n){const s=T0(n);switch(t){case $h:return i*e;case Yh:return i*e;case Jh:return i*e*2;case Zh:return i*e/s.components*s.byteLength;case kc:return i*e/s.components*s.byteLength;case Qh:return i*e*2/s.components*s.byteLength;case Oc:return i*e*2/s.components*s.byteLength;case Kh:return i*e*3/s.components*s.byteLength;case bn:return i*e*4/s.components*s.byteLength;case Nc:return i*e*4/s.components*s.byteLength;case Ra:case Ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Pa:case La:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Il:case kl:return Math.max(i,16)*Math.max(e,8)/4;case Ll:case Dl:return Math.max(i,8)*Math.max(e,8)/2;case Ol:case Nl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ul:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case zl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Vl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ql:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case jl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case $l:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Kl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Yl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Jl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ia:case Zl:case Ql:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ed:case ec:return Math.ceil(i/4)*Math.ceil(e/4)*8;case tc:case nc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function T0(i){switch(i){case qn:case qh:return{byteLength:1,components:1};case Tr:case jh:case Dr:return{byteLength:2,components:1};case Ic:case Dc:return{byteLength:2,components:4};case Yi:case Lc:case si:return{byteLength:4,components:1};case Xh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pc);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gd(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function A0(i){const e=new WeakMap;function t(o,c){const l=o.array,f=o.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,f),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const f=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,f);else{h.sort((p,y)=>p.start-y.start);let d=0;for(let p=1;p<h.length;p++){const y=h[d],v=h[p];v.start<=y.start+y.count+1?y.count=Math.max(y.count,v.start+v.count-y.start):(++d,h[d]=v)}h.length=d+1;for(let p=0,y=h.length;p<y;p++){const v=h[p];i.bufferSubData(l,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var R0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,C0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,P0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,L0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,D0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,k0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,O0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,N0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,U0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,F0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,B0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,z0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,H0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,G0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,K0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,J0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Z0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Q0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,e_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,t_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,n_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,i_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,s_="gl_FragColor = linearToOutputTexel( gl_FragColor );",r_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,a_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,o_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,l_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,c_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,u_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,f_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,h_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,d_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,p_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,m_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,g_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,__=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,v_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,y_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,x_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,b_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,w_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,S_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,M_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,E_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,T_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,A_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,R_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,C_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,P_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,L_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,k_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,O_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,N_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,U_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,F_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,B_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,z_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,H_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,G_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,W_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,j_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,X_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Y_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,J_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Z_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Q_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ev=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,iv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,av=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ov=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,uv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_v=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Av=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Iv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ov=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Nv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$v=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ey=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ty=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ny=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ry=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ay=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:R0,alphahash_pars_fragment:C0,alphamap_fragment:P0,alphamap_pars_fragment:L0,alphatest_fragment:I0,alphatest_pars_fragment:D0,aomap_fragment:k0,aomap_pars_fragment:O0,batching_pars_vertex:N0,batching_vertex:U0,begin_vertex:F0,beginnormal_vertex:B0,bsdfs:z0,iridescence_fragment:H0,bumpmap_pars_fragment:G0,clipping_planes_fragment:V0,clipping_planes_pars_fragment:W0,clipping_planes_pars_vertex:q0,clipping_planes_vertex:j0,color_fragment:X0,color_pars_fragment:$0,color_pars_vertex:K0,color_vertex:Y0,common:J0,cube_uv_reflection_fragment:Z0,defaultnormal_vertex:Q0,displacementmap_pars_vertex:e_,displacementmap_vertex:t_,emissivemap_fragment:n_,emissivemap_pars_fragment:i_,colorspace_fragment:s_,colorspace_pars_fragment:r_,envmap_fragment:a_,envmap_common_pars_fragment:o_,envmap_pars_fragment:l_,envmap_pars_vertex:c_,envmap_physical_pars_fragment:x_,envmap_vertex:u_,fog_vertex:f_,fog_pars_vertex:h_,fog_fragment:d_,fog_pars_fragment:p_,gradientmap_pars_fragment:m_,lightmap_pars_fragment:g_,lights_lambert_fragment:__,lights_lambert_pars_fragment:v_,lights_pars_begin:y_,lights_toon_fragment:b_,lights_toon_pars_fragment:w_,lights_phong_fragment:S_,lights_phong_pars_fragment:M_,lights_physical_fragment:E_,lights_physical_pars_fragment:T_,lights_fragment_begin:A_,lights_fragment_maps:R_,lights_fragment_end:C_,logdepthbuf_fragment:P_,logdepthbuf_pars_fragment:L_,logdepthbuf_pars_vertex:I_,logdepthbuf_vertex:D_,map_fragment:k_,map_pars_fragment:O_,map_particle_fragment:N_,map_particle_pars_fragment:U_,metalnessmap_fragment:F_,metalnessmap_pars_fragment:B_,morphinstance_vertex:z_,morphcolor_vertex:H_,morphnormal_vertex:G_,morphtarget_pars_vertex:V_,morphtarget_vertex:W_,normal_fragment_begin:q_,normal_fragment_maps:j_,normal_pars_fragment:X_,normal_pars_vertex:$_,normal_vertex:K_,normalmap_pars_fragment:Y_,clearcoat_normal_fragment_begin:J_,clearcoat_normal_fragment_maps:Z_,clearcoat_pars_fragment:Q_,iridescence_pars_fragment:ev,opaque_fragment:tv,packing:nv,premultiplied_alpha_fragment:iv,project_vertex:sv,dithering_fragment:rv,dithering_pars_fragment:av,roughnessmap_fragment:ov,roughnessmap_pars_fragment:lv,shadowmap_pars_fragment:cv,shadowmap_pars_vertex:uv,shadowmap_vertex:fv,shadowmask_pars_fragment:hv,skinbase_vertex:dv,skinning_pars_vertex:pv,skinning_vertex:mv,skinnormal_vertex:gv,specularmap_fragment:_v,specularmap_pars_fragment:vv,tonemapping_fragment:yv,tonemapping_pars_fragment:xv,transmission_fragment:bv,transmission_pars_fragment:wv,uv_pars_fragment:Sv,uv_pars_vertex:Mv,uv_vertex:Ev,worldpos_vertex:Tv,background_vert:Av,background_frag:Rv,backgroundCube_vert:Cv,backgroundCube_frag:Pv,cube_vert:Lv,cube_frag:Iv,depth_vert:Dv,depth_frag:kv,distanceRGBA_vert:Ov,distanceRGBA_frag:Nv,equirect_vert:Uv,equirect_frag:Fv,linedashed_vert:Bv,linedashed_frag:zv,meshbasic_vert:Hv,meshbasic_frag:Gv,meshlambert_vert:Vv,meshlambert_frag:Wv,meshmatcap_vert:qv,meshmatcap_frag:jv,meshnormal_vert:Xv,meshnormal_frag:$v,meshphong_vert:Kv,meshphong_frag:Yv,meshphysical_vert:Jv,meshphysical_frag:Zv,meshtoon_vert:Qv,meshtoon_frag:ey,points_vert:ty,points_frag:ny,shadow_vert:iy,shadow_frag:sy,sprite_vert:ry,sprite_frag:ay},xe={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Hn={basic:{uniforms:tn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:tn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new mt(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:tn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:tn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:tn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new mt(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:tn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:tn([xe.points,xe.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:tn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:tn([xe.common,xe.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:tn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:tn([xe.sprite,xe.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:tn([xe.common,xe.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:tn([xe.lights,xe.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Hn.physical={uniforms:tn([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const ga={r:0,b:0,g:0},Ui=new fi,oy=new Ot;function ly(i,e,t,n,s,r,a){const o=new mt(0);let c=r===!0?0:1,l,f,h=null,d=0,p=null;function y(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?t:e).get(S)),S}function v(b){let S=!1;const I=y(b);I===null?m(o,c):I&&I.isColor&&(m(I,1),S=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(b,S){const I=y(S);I&&(I.isCubeTexture||I.mapping===lo)?(f===void 0&&(f=new sn(new Ur(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:qs(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(L,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),Ui.copy(S.backgroundRotation),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),f.material.uniforms.envMap.value=I,f.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(oy.makeRotationFromEuler(Ui)),f.material.toneMapped=pt.getTransfer(I.colorSpace)!==yt,(h!==I||d!==I.version||p!==i.toneMapping)&&(f.material.needsUpdate=!0,h=I,d=I.version,p=i.toneMapping),f.layers.enableAll(),b.unshift(f,f.geometry,f.material,0,0,null)):I&&I.isTexture&&(l===void 0&&(l=new sn(new hi(2,2),new Un({name:"BackgroundMaterial",uniforms:qs(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=I,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=pt.getTransfer(I.colorSpace)!==yt,I.matrixAutoUpdate===!0&&I.updateMatrix(),l.material.uniforms.uvTransform.value.copy(I.matrix),(h!==I||d!==I.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=I,d=I.version,p=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,S){b.getRGB(ga,cd(i)),n.buffers.color.setClear(ga.r,ga.g,ga.b,S,a)}function R(){f!==void 0&&(f.geometry.dispose(),f.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(b,S=1){o.set(b),c=S,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,m(o,c)},render:v,addToRenderList:_,dispose:R}}function cy(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(w,k,U,F,W){let Z=!1;const K=h(F,U,k);r!==K&&(r=K,l(r.object)),Z=p(w,F,U,W),Z&&y(w,F,U,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,S(w,k,U,F),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return i.createVertexArray()}function l(w){return i.bindVertexArray(w)}function f(w){return i.deleteVertexArray(w)}function h(w,k,U){const F=U.wireframe===!0;let W=n[w.id];W===void 0&&(W={},n[w.id]=W);let Z=W[k.id];Z===void 0&&(Z={},W[k.id]=Z);let K=Z[F];return K===void 0&&(K=d(c()),Z[F]=K),K}function d(w){const k=[],U=[],F=[];for(let W=0;W<t;W++)k[W]=0,U[W]=0,F[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:U,attributeDivisors:F,object:w,attributes:{},index:null}}function p(w,k,U,F){const W=r.attributes,Z=k.attributes;let K=0;const ae=U.getAttributes();for(const J in ae)if(ae[J].location>=0){const me=W[J];let Me=Z[J];if(Me===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(Me=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(Me=w.instanceColor)),me===void 0||me.attribute!==Me||Me&&me.data!==Me.data)return!0;K++}return r.attributesNum!==K||r.index!==F}function y(w,k,U,F){const W={},Z=k.attributes;let K=0;const ae=U.getAttributes();for(const J in ae)if(ae[J].location>=0){let me=Z[J];me===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(me=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(me=w.instanceColor));const Me={};Me.attribute=me,me&&me.data&&(Me.data=me.data),W[J]=Me,K++}r.attributes=W,r.attributesNum=K,r.index=F}function v(){const w=r.newAttributes;for(let k=0,U=w.length;k<U;k++)w[k]=0}function _(w){m(w,0)}function m(w,k){const U=r.newAttributes,F=r.enabledAttributes,W=r.attributeDivisors;U[w]=1,F[w]===0&&(i.enableVertexAttribArray(w),F[w]=1),W[w]!==k&&(i.vertexAttribDivisor(w,k),W[w]=k)}function R(){const w=r.newAttributes,k=r.enabledAttributes;for(let U=0,F=k.length;U<F;U++)k[U]!==w[U]&&(i.disableVertexAttribArray(U),k[U]=0)}function b(w,k,U,F,W,Z,K){K===!0?i.vertexAttribIPointer(w,k,U,W,Z):i.vertexAttribPointer(w,k,U,F,W,Z)}function S(w,k,U,F){v();const W=F.attributes,Z=U.getAttributes(),K=k.defaultAttributeValues;for(const ae in Z){const J=Z[ae];if(J.location>=0){let fe=W[ae];if(fe===void 0&&(ae==="instanceMatrix"&&w.instanceMatrix&&(fe=w.instanceMatrix),ae==="instanceColor"&&w.instanceColor&&(fe=w.instanceColor)),fe!==void 0){const me=fe.normalized,Me=fe.itemSize,Re=e.get(fe);if(Re===void 0)continue;const Ve=Re.buffer,ee=Re.type,ue=Re.bytesPerElement,Ee=ee===i.INT||ee===i.UNSIGNED_INT||fe.gpuType===Lc;if(fe.isInterleavedBufferAttribute){const ge=fe.data,Fe=ge.stride,He=fe.offset;if(ge.isInstancedInterleavedBuffer){for(let Qe=0;Qe<J.locationSize;Qe++)m(J.location+Qe,ge.meshPerAttribute);w.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Qe=0;Qe<J.locationSize;Qe++)_(J.location+Qe);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let Qe=0;Qe<J.locationSize;Qe++)b(J.location+Qe,Me/J.locationSize,ee,me,Fe*ue,(He+Me/J.locationSize*Qe)*ue,Ee)}else{if(fe.isInstancedBufferAttribute){for(let ge=0;ge<J.locationSize;ge++)m(J.location+ge,fe.meshPerAttribute);w.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ge=0;ge<J.locationSize;ge++)_(J.location+ge);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let ge=0;ge<J.locationSize;ge++)b(J.location+ge,Me/J.locationSize,ee,me,Me*ue,Me/J.locationSize*ge*ue,Ee)}}else if(K!==void 0){const me=K[ae];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(J.location,me);break;case 3:i.vertexAttrib3fv(J.location,me);break;case 4:i.vertexAttrib4fv(J.location,me);break;default:i.vertexAttrib1fv(J.location,me)}}}}R()}function I(){D();for(const w in n){const k=n[w];for(const U in k){const F=k[U];for(const W in F)f(F[W].object),delete F[W];delete k[U]}delete n[w]}}function L(w){if(n[w.id]===void 0)return;const k=n[w.id];for(const U in k){const F=k[U];for(const W in F)f(F[W].object),delete F[W];delete k[U]}delete n[w.id]}function C(w){for(const k in n){const U=n[k];if(U[w.id]===void 0)continue;const F=U[w.id];for(const W in F)f(F[W].object),delete F[W];delete U[w.id]}}function D(){E(),a=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:E,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:_,disableUnusedAttributes:R}}function uy(i,e,t){let n;function s(l){n=l}function r(l,f){i.drawArrays(n,l,f),t.update(f,n,1)}function a(l,f,h){h!==0&&(i.drawArraysInstanced(n,l,f,h),t.update(f,n,h))}function o(l,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,f,0,h);let p=0;for(let y=0;y<h;y++)p+=f[y];t.update(p,n,1)}function c(l,f,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let y=0;y<l.length;y++)a(l[y],f[y],d[y]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,f,0,d,0,h);let y=0;for(let v=0;v<h;v++)y+=f[v]*d[v];t.update(y,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function fy(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==bn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const D=C===Dr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==qn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==si&&!D)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const f=c(l);f!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=y>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:y,maxTextureSize:v,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:R,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:I,maxSamples:L}}function hy(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Bi,o=new et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=f(h,d,0)},this.setState=function(h,d,p){const y=h.clippingPlanes,v=h.clipIntersection,_=h.clipShadows,m=i.get(h);if(!s||y===null||y.length===0||r&&!_)r?f(null):l();else{const R=r?0:n,b=R*4;let S=m.clippingState||null;c.value=S,S=f(y,d,b,p);for(let I=0;I!==b;++I)S[I]=t[I];m.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=R}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(h,d,p,y){const v=h!==null?h.length:0;let _=null;if(v!==0){if(_=c.value,y!==!0||_===null){const m=p+v*4,R=d.matrixWorldInverse;o.getNormalMatrix(R),(_===null||_.length<m)&&(_=new Float32Array(m));for(let b=0,S=p;b!==v;++b,S+=4)a.copy(h[b]).applyMatrix4(R,o),a.normal.toArray(_,S),_[S+3]=a.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,_}}function dy(i){let e=new WeakMap;function t(a,o){return o===Rl?a.mapping=zs:o===Cl&&(a.mapping=Hs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Rl||o===Cl)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new p0(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Ps=4,Gu=[.125,.215,.35,.446,.526,.582],Gi=20,$o=new Bc,Vu=new mt;let Ko=null,Yo=0,Jo=0,Zo=!1;const zi=(1+Math.sqrt(5))/2,bs=1/zi,Wu=[new $(-zi,bs,0),new $(zi,bs,0),new $(-bs,0,zi),new $(bs,0,zi),new $(0,zi,-bs),new $(0,zi,bs),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class qu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Ko=this._renderer.getRenderTarget(),Yo=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),Zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$u(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ko,Yo,Jo),this._renderer.xr.enabled=Zo,e.scissorTest=!1,_a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ko=this._renderer.getRenderTarget(),Yo=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),Zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Dr,format:bn,colorSpace:Ws,depthBuffer:!1},s=ju(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ju(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=py(r)),this._blurMaterial=my(r,e,t)}return s}_compileMaterial(e){const t=new sn(this._lodPlanes[0],e);this._renderer.compile(t,$o)}_sceneToCubeUV(e,t,n,s){const o=new kn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Vu),f.toneMapping=oi,f.autoClear=!1;const p=new Rr({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),y=new sn(new Ur,p);let v=!1;const _=e.background;_?_.isColor&&(p.color.copy(_),e.background=null,v=!0):(p.color.copy(Vu),v=!0);for(let m=0;m<6;m++){const R=m%3;R===0?(o.up.set(0,c[m],0),o.lookAt(l[m],0,0)):R===1?(o.up.set(0,0,c[m]),o.lookAt(0,l[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,l[m]));const b=this._cubeSize;_a(s,R*b,m>2?b:0,b,b),f.setRenderTarget(s),v&&f.render(y,o),f.render(e,o)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===zs||e.mapping===Hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$u()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new sn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;_a(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,$o)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Wu[(s-r-1)%Wu.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new sn(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,y=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Gi-1),v=r/y,_=isFinite(r)?1+Math.floor(f*v):Gi;_>Gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Gi}`);const m=[];let R=0;for(let C=0;C<Gi;++C){const D=C/v,E=Math.exp(-D*D/2);m.push(E),C===0?R+=E:C<_&&(R+=2*E)}for(let C=0;C<m.length;C++)m[C]=m[C]/R;d.envMap.value=e.texture,d.samples.value=_,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=y,d.mipInt.value=b-n;const S=this._sizeLods[s],I=3*S*(s>b-Ps?s-b+Ps:0),L=4*(this._cubeSize-S);_a(t,I,L,3*S,2*S),c.setRenderTarget(t),c.render(h,$o)}}function py(i){const e=[],t=[],n=[];let s=i;const r=i-Ps+1+Gu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Ps?c=Gu[a-i+Ps-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),f=-l,h=1+l,d=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,y=6,v=3,_=2,m=1,R=new Float32Array(v*y*p),b=new Float32Array(_*y*p),S=new Float32Array(m*y*p);for(let L=0;L<p;L++){const C=L%3*2/3-1,D=L>2?0:-1,E=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];R.set(E,v*y*L),b.set(d,_*y*L);const w=[L,L,L,L,L,L];S.set(w,m*y*L)}const I=new di;I.setAttribute("position",new Nn(R,v)),I.setAttribute("uv",new Nn(b,_)),I.setAttribute("faceIndex",new Nn(S,m)),e.push(I),s>Ps&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ju(i,e,t){const n=new Ai(i,e,t);return n.texture.mapping=lo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _a(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function my(i,e,t){const n=new Float32Array(Gi),s=new $(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Xu(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function $u(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function zc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gy(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Rl||c===Cl,f=c===zs||c===Hs;if(l||f){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new qu(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return l&&p&&p.height>0||f&&p&&s(p)?(t===null&&(t=new qu(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let c=0;const l=6;for(let f=0;f<l;f++)o[f]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function _y(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ms("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function vy(i,e,t,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const y in d.attributes)e.remove(d.attributes[y]);d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const p in d)e.update(d[p],i.ARRAY_BUFFER)}function l(h){const d=[],p=h.index,y=h.attributes.position;let v=0;if(p!==null){const R=p.array;v=p.version;for(let b=0,S=R.length;b<S;b+=3){const I=R[b+0],L=R[b+1],C=R[b+2];d.push(I,L,L,C,C,I)}}else if(y!==void 0){const R=y.array;v=y.version;for(let b=0,S=R.length/3-1;b<S;b+=3){const I=b+0,L=b+1,C=b+2;d.push(I,L,L,C,C,I)}}else return;const _=new(nd(d)?ld:od)(d,1);_.version=v;const m=r.get(h);m&&e.remove(m),r.set(h,_)}function f(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:f}}function yy(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*a),t.update(p,n,1)}function l(d,p,y){y!==0&&(i.drawElementsInstanced(n,p,r,d*a,y),t.update(p,n,y))}function f(d,p,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,y);let _=0;for(let m=0;m<y;m++)_+=p[m];t.update(_,n,1)}function h(d,p,y,v){if(y===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<d.length;m++)l(d[m]/a,p[m],v[m]);else{_.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,v,0,y);let m=0;for(let R=0;R<y;R++)m+=p[R]*v[R];t.update(m,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function xy(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function by(i,e,t){const n=new WeakMap,s=new Pt;function r(a,o,c){const l=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let E=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let b=0;p===!0&&(b=1),y===!0&&(b=2),v===!0&&(b=3);let S=o.attributes.position.count*b,I=1;S>e.maxTextureSize&&(I=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const L=new Float32Array(S*I*4*h),C=new sd(L,S,I,h);C.type=si,C.needsUpdate=!0;const D=b*4;for(let w=0;w<h;w++){const k=_[w],U=m[w],F=R[w],W=S*I*4*w;for(let Z=0;Z<k.count;Z++){const K=Z*D;p===!0&&(s.fromBufferAttribute(k,Z),L[W+K+0]=s.x,L[W+K+1]=s.y,L[W+K+2]=s.z,L[W+K+3]=0),y===!0&&(s.fromBufferAttribute(U,Z),L[W+K+4]=s.x,L[W+K+5]=s.y,L[W+K+6]=s.z,L[W+K+7]=0),v===!0&&(s.fromBufferAttribute(F,Z),L[W+K+8]=s.x,L[W+K+9]=s.y,L[W+K+10]=s.z,L[W+K+11]=F.itemSize===4?s.w:1)}}d={count:h,texture:C,size:new xt(S,I)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<l.length;v++)p+=l[v];const y=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",y),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function wy(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,f=c.geometry,h=e.get(c,f);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const _d=new Xt,Ku=new pd(1,1),vd=new sd,yd=new Jg,xd=new fd,Yu=[],Ju=[],Zu=new Float32Array(16),Qu=new Float32Array(9),ef=new Float32Array(4);function Qs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Yu[s];if(r===void 0&&(r=new Float32Array(s),Yu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Nt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function uo(i,e){let t=Ju[e];t===void 0&&(t=new Int32Array(e),Ju[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Sy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function My(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2fv(this.addr,e),Ut(t,e)}}function Ey(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;i.uniform3fv(this.addr,e),Ut(t,e)}}function Ty(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4fv(this.addr,e),Ut(t,e)}}function Ay(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;ef.set(n),i.uniformMatrix2fv(this.addr,!1,ef),Ut(t,n)}}function Ry(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Qu.set(n),i.uniformMatrix3fv(this.addr,!1,Qu),Ut(t,n)}}function Cy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Zu.set(n),i.uniformMatrix4fv(this.addr,!1,Zu),Ut(t,n)}}function Py(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ly(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2iv(this.addr,e),Ut(t,e)}}function Iy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3iv(this.addr,e),Ut(t,e)}}function Dy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4iv(this.addr,e),Ut(t,e)}}function ky(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Oy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2uiv(this.addr,e),Ut(t,e)}}function Ny(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3uiv(this.addr,e),Ut(t,e)}}function Uy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4uiv(this.addr,e),Ut(t,e)}}function Fy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ku.compareFunction=td,r=Ku):r=_d,t.setTexture2D(e||r,s)}function By(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||yd,s)}function zy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||xd,s)}function Hy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||vd,s)}function Gy(i){switch(i){case 5126:return Sy;case 35664:return My;case 35665:return Ey;case 35666:return Ty;case 35674:return Ay;case 35675:return Ry;case 35676:return Cy;case 5124:case 35670:return Py;case 35667:case 35671:return Ly;case 35668:case 35672:return Iy;case 35669:case 35673:return Dy;case 5125:return ky;case 36294:return Oy;case 36295:return Ny;case 36296:return Uy;case 35678:case 36198:case 36298:case 36306:case 35682:return Fy;case 35679:case 36299:case 36307:return By;case 35680:case 36300:case 36308:case 36293:return zy;case 36289:case 36303:case 36311:case 36292:return Hy}}function Vy(i,e){i.uniform1fv(this.addr,e)}function Wy(i,e){const t=Qs(e,this.size,2);i.uniform2fv(this.addr,t)}function qy(i,e){const t=Qs(e,this.size,3);i.uniform3fv(this.addr,t)}function jy(i,e){const t=Qs(e,this.size,4);i.uniform4fv(this.addr,t)}function Xy(i,e){const t=Qs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function $y(i,e){const t=Qs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ky(i,e){const t=Qs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Yy(i,e){i.uniform1iv(this.addr,e)}function Jy(i,e){i.uniform2iv(this.addr,e)}function Zy(i,e){i.uniform3iv(this.addr,e)}function Qy(i,e){i.uniform4iv(this.addr,e)}function ex(i,e){i.uniform1uiv(this.addr,e)}function tx(i,e){i.uniform2uiv(this.addr,e)}function nx(i,e){i.uniform3uiv(this.addr,e)}function ix(i,e){i.uniform4uiv(this.addr,e)}function sx(i,e,t){const n=this.cache,s=e.length,r=uo(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||_d,r[a])}function rx(i,e,t){const n=this.cache,s=e.length,r=uo(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||yd,r[a])}function ax(i,e,t){const n=this.cache,s=e.length,r=uo(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||xd,r[a])}function ox(i,e,t){const n=this.cache,s=e.length,r=uo(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||vd,r[a])}function lx(i){switch(i){case 5126:return Vy;case 35664:return Wy;case 35665:return qy;case 35666:return jy;case 35674:return Xy;case 35675:return $y;case 35676:return Ky;case 5124:case 35670:return Yy;case 35667:case 35671:return Jy;case 35668:case 35672:return Zy;case 35669:case 35673:return Qy;case 5125:return ex;case 36294:return tx;case 36295:return nx;case 36296:return ix;case 35678:case 36198:case 36298:case 36306:case 35682:return sx;case 35679:case 36299:case 36307:return rx;case 35680:case 36300:case 36308:case 36293:return ax;case 36289:case 36303:case 36311:case 36292:return ox}}class cx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Gy(t.type)}}class ux{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lx(t.type)}}class fx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Qo=/(\w+)(\])?(\[|\.)?/g;function tf(i,e){i.seq.push(e),i.map[e.id]=e}function hx(i,e,t){const n=i.name,s=n.length;for(Qo.lastIndex=0;;){const r=Qo.exec(n),a=Qo.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){tf(t,l===void 0?new cx(o,i,e):new ux(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new fx(o),tf(t,h)),t=h}}}class Da{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);hx(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function nf(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const dx=37297;let px=0;function mx(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const sf=new et;function gx(i){pt._getMatrix(sf,pt.workingColorSpace,i);const e=`mat3( ${sf.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(i)){case qa:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function rf(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+mx(i.getShaderSource(e),a)}else return s}function _x(i,e){const t=gx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function vx(i,e){let t;switch(e){case bg:t="Linear";break;case wg:t="Reinhard";break;case Sg:t="Cineon";break;case Mg:t="ACESFilmic";break;case Tg:t="AgX";break;case Ag:t="Neutral";break;case Eg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const va=new $;function yx(){pt.getLuminanceCoefficients(va);const i=va.x.toFixed(4),e=va.y.toFixed(4),t=va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function bx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function wx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function mr(i){return i!==""}function af(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function of(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Sx=/^[ \t]*#include +<([\w\d./]+)>/gm;function rc(i){return i.replace(Sx,Ex)}const Mx=new Map;function Ex(i,e){let t=nt[e];if(t===void 0){const n=Mx.get(e);if(n!==void 0)t=nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return rc(t)}const Tx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lf(i){return i.replace(Tx,Ax)}function Ax(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Rx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Gh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===eg?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ei&&(e="SHADOWMAP_TYPE_VSM"),e}function Cx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case zs:case Hs:e="ENVMAP_TYPE_CUBE";break;case lo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Px(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function Lx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Vh:e="ENVMAP_BLENDING_MULTIPLY";break;case yg:e="ENVMAP_BLENDING_MIX";break;case xg:e="ENVMAP_BLENDING_ADD";break}return e}function Ix(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Dx(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Rx(t),l=Cx(t),f=Px(t),h=Lx(t),d=Ix(t),p=xx(t),y=bx(r),v=s.createProgram();let _,m,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(mr).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(mr).join(`
`),m.length>0&&(m+=`
`)):(_=[cf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),m=[cf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?nt.tonemapping_pars_fragment:"",t.toneMapping!==oi?vx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,_x("linearToOutputTexel",t.outputColorSpace),yx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mr).join(`
`)),a=rc(a),a=af(a,t),a=of(a,t),o=rc(o),o=af(o,t),o=of(o,t),a=lf(a),o=lf(o),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===wu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=R+_+a,S=R+m+o,I=nf(s,s.VERTEX_SHADER,b),L=nf(s,s.FRAGMENT_SHADER,S);s.attachShader(v,I),s.attachShader(v,L),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(k){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(v).trim(),F=s.getShaderInfoLog(I).trim(),W=s.getShaderInfoLog(L).trim();let Z=!0,K=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,I,L);else{const ae=rf(s,I,"vertex"),J=rf(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+U+`
`+ae+`
`+J)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(F===""||W==="")&&(K=!1);K&&(k.diagnostics={runnable:Z,programLog:U,vertexShader:{log:F,prefix:_},fragmentShader:{log:W,prefix:m}})}s.deleteShader(I),s.deleteShader(L),D=new Da(s,v),E=wx(s,v)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(v,dx)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=px++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=L,this}let kx=0;class Ox{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Nx(e),t.set(e,n)),n}}class Nx{constructor(e){this.id=kx++,this.code=e,this.usedTimes=0}}function Ux(i,e,t,n,s,r,a){const o=new rd,c=new Ox,l=new Set,f=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return l.add(E),E===0?"uv":`uv${E}`}function _(E,w,k,U,F){const W=U.fog,Z=F.geometry,K=E.isMeshStandardMaterial?U.environment:null,ae=(E.isMeshStandardMaterial?t:e).get(E.envMap||K),J=ae&&ae.mapping===lo?ae.image.height:null,fe=y[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const me=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Me=me!==void 0?me.length:0;let Re=0;Z.morphAttributes.position!==void 0&&(Re=1),Z.morphAttributes.normal!==void 0&&(Re=2),Z.morphAttributes.color!==void 0&&(Re=3);let Ve,ee,ue,Ee;if(fe){const Ke=Hn[fe];Ve=Ke.vertexShader,ee=Ke.fragmentShader}else Ve=E.vertexShader,ee=E.fragmentShader,c.update(E),ue=c.getVertexShaderID(E),Ee=c.getFragmentShaderID(E);const ge=i.getRenderTarget(),Fe=i.state.buffers.depth.getReversed(),He=F.isInstancedMesh===!0,Qe=F.isBatchedMesh===!0,ye=!!E.map,te=!!E.matcap,Je=!!ae,O=!!E.aoMap,st=!!E.lightMap,tt=!!E.bumpMap,Oe=!!E.normalMap,Te=!!E.displacementMap,lt=!!E.emissiveMap,De=!!E.metalnessMap,P=!!E.roughnessMap,M=E.anisotropy>0,V=E.clearcoat>0,re=E.dispersion>0,oe=E.iridescence>0,ne=E.sheen>0,ke=E.transmission>0,de=M&&!!E.anisotropyMap,Ce=V&&!!E.clearcoatMap,ct=V&&!!E.clearcoatNormalMap,he=V&&!!E.clearcoatRoughnessMap,Le=oe&&!!E.iridescenceMap,ze=oe&&!!E.iridescenceThicknessMap,We=ne&&!!E.sheenColorMap,Pe=ne&&!!E.sheenRoughnessMap,be=!!E.specularMap,Ze=!!E.specularColorMap,gt=!!E.specularIntensityMap,B=ke&&!!E.transmissionMap,pe=ke&&!!E.thicknessMap,Q=!!E.gradientMap,ie=!!E.alphaMap,we=E.alphaTest>0,q=!!E.alphaHash,Xe=!!E.extensions;let Mt=oi;E.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Mt=i.toneMapping);const Ft={shaderID:fe,shaderType:E.type,shaderName:E.name,vertexShader:Ve,fragmentShader:ee,defines:E.defines,customVertexShaderID:ue,customFragmentShaderID:Ee,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Qe,batchingColor:Qe&&F._colorsTexture!==null,instancing:He,instancingColor:He&&F.instanceColor!==null,instancingMorph:He&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ge===null?i.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Ws,alphaToCoverage:!!E.alphaToCoverage,map:ye,matcap:te,envMap:Je,envMapMode:Je&&ae.mapping,envMapCubeUVHeight:J,aoMap:O,lightMap:st,bumpMap:tt,normalMap:Oe,displacementMap:d&&Te,emissiveMap:lt,normalMapObjectSpace:Oe&&E.normalMapType===Ig,normalMapTangentSpace:Oe&&E.normalMapType===Lg,metalnessMap:De,roughnessMap:P,anisotropy:M,anisotropyMap:de,clearcoat:V,clearcoatMap:Ce,clearcoatNormalMap:ct,clearcoatRoughnessMap:he,dispersion:re,iridescence:oe,iridescenceMap:Le,iridescenceThicknessMap:ze,sheen:ne,sheenColorMap:We,sheenRoughnessMap:Pe,specularMap:be,specularColorMap:Ze,specularIntensityMap:gt,transmission:ke,transmissionMap:B,thicknessMap:pe,gradientMap:Q,opaque:E.transparent===!1&&E.blending===Sn&&E.alphaToCoverage===!1,alphaMap:ie,alphaTest:we,alphaHash:q,combine:E.combine,mapUv:ye&&v(E.map.channel),aoMapUv:O&&v(E.aoMap.channel),lightMapUv:st&&v(E.lightMap.channel),bumpMapUv:tt&&v(E.bumpMap.channel),normalMapUv:Oe&&v(E.normalMap.channel),displacementMapUv:Te&&v(E.displacementMap.channel),emissiveMapUv:lt&&v(E.emissiveMap.channel),metalnessMapUv:De&&v(E.metalnessMap.channel),roughnessMapUv:P&&v(E.roughnessMap.channel),anisotropyMapUv:de&&v(E.anisotropyMap.channel),clearcoatMapUv:Ce&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:ct&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:We&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&v(E.sheenRoughnessMap.channel),specularMapUv:be&&v(E.specularMap.channel),specularColorMapUv:Ze&&v(E.specularColorMap.channel),specularIntensityMapUv:gt&&v(E.specularIntensityMap.channel),transmissionMapUv:B&&v(E.transmissionMap.channel),thicknessMapUv:pe&&v(E.thicknessMap.channel),alphaMapUv:ie&&v(E.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Oe||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Z.attributes.uv&&(ye||ie),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Fe,skinning:F.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Re,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Mt,decodeVideoTexture:ye&&E.map.isVideoTexture===!0&&pt.getTransfer(E.map.colorSpace)===yt,decodeVideoTextureEmissive:lt&&E.emissiveMap.isVideoTexture===!0&&pt.getTransfer(E.emissiveMap.colorSpace)===yt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ti,flipSided:E.side===cn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Xe&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&E.extensions.multiDraw===!0||Qe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ft.vertexUv1s=l.has(1),Ft.vertexUv2s=l.has(2),Ft.vertexUv3s=l.has(3),l.clear(),Ft}function m(E){const w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(const k in E.defines)w.push(k),w.push(E.defines[k]);return E.isRawShaderMaterial===!1&&(R(w,E),b(w,E),w.push(i.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function R(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function b(E,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),E.push(o.mask)}function S(E){const w=y[E.type];let k;if(w){const U=Hn[w];k=u0.clone(U.uniforms)}else k=E.uniforms;return k}function I(E,w){let k;for(let U=0,F=f.length;U<F;U++){const W=f[U];if(W.cacheKey===w){k=W,++k.usedTimes;break}}return k===void 0&&(k=new Dx(i,w,E,r),f.push(k)),k}function L(E){if(--E.usedTimes===0){const w=f.indexOf(E);f[w]=f[f.length-1],f.pop(),E.destroy()}}function C(E){c.remove(E)}function D(){c.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:S,acquireProgram:I,releaseProgram:L,releaseShaderCache:C,programs:f,dispose:D}}function Fx(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Bx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function uf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ff(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,p,y,v,_){let m=i[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:p,groupOrder:y,renderOrder:h.renderOrder,z:v,group:_},i[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=p,m.groupOrder=y,m.renderOrder=h.renderOrder,m.z=v,m.group=_),e++,m}function o(h,d,p,y,v,_){const m=a(h,d,p,y,v,_);p.transmission>0?n.push(m):p.transparent===!0?s.push(m):t.push(m)}function c(h,d,p,y,v,_){const m=a(h,d,p,y,v,_);p.transmission>0?n.unshift(m):p.transparent===!0?s.unshift(m):t.unshift(m)}function l(h,d){t.length>1&&t.sort(h||Bx),n.length>1&&n.sort(d||uf),s.length>1&&s.sort(d||uf)}function f(){for(let h=e,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:f,sort:l}}function zx(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new ff,i.set(n,[a])):s>=r.length?(a=new ff,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Hx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new mt};break;case"SpotLight":t={position:new $,direction:new $,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new $,halfWidth:new $,halfHeight:new $};break}return i[e.id]=t,t}}}function Gx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Vx=0;function Wx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function qx(i){const e=new Hx,t=Gx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new $);const s=new $,r=new Ot,a=new Ot;function o(l){let f=0,h=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,y=0,v=0,_=0,m=0,R=0,b=0,S=0,I=0,L=0,C=0;l.sort(Wx);for(let E=0,w=l.length;E<w;E++){const k=l[E],U=k.color,F=k.intensity,W=k.distance,Z=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)f+=U.r*F,h+=U.g*F,d+=U.b*F;else if(k.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(k.sh.coefficients[K],F);C++}else if(k.isDirectionalLight){const K=e.get(k);if(K.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const ae=k.shadow,J=t.get(k);J.shadowIntensity=ae.intensity,J.shadowBias=ae.bias,J.shadowNormalBias=ae.normalBias,J.shadowRadius=ae.radius,J.shadowMapSize=ae.mapSize,n.directionalShadow[p]=J,n.directionalShadowMap[p]=Z,n.directionalShadowMatrix[p]=k.shadow.matrix,R++}n.directional[p]=K,p++}else if(k.isSpotLight){const K=e.get(k);K.position.setFromMatrixPosition(k.matrixWorld),K.color.copy(U).multiplyScalar(F),K.distance=W,K.coneCos=Math.cos(k.angle),K.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),K.decay=k.decay,n.spot[v]=K;const ae=k.shadow;if(k.map&&(n.spotLightMap[I]=k.map,I++,ae.updateMatrices(k),k.castShadow&&L++),n.spotLightMatrix[v]=ae.matrix,k.castShadow){const J=t.get(k);J.shadowIntensity=ae.intensity,J.shadowBias=ae.bias,J.shadowNormalBias=ae.normalBias,J.shadowRadius=ae.radius,J.shadowMapSize=ae.mapSize,n.spotShadow[v]=J,n.spotShadowMap[v]=Z,S++}v++}else if(k.isRectAreaLight){const K=e.get(k);K.color.copy(U).multiplyScalar(F),K.halfWidth.set(k.width*.5,0,0),K.halfHeight.set(0,k.height*.5,0),n.rectArea[_]=K,_++}else if(k.isPointLight){const K=e.get(k);if(K.color.copy(k.color).multiplyScalar(k.intensity),K.distance=k.distance,K.decay=k.decay,k.castShadow){const ae=k.shadow,J=t.get(k);J.shadowIntensity=ae.intensity,J.shadowBias=ae.bias,J.shadowNormalBias=ae.normalBias,J.shadowRadius=ae.radius,J.shadowMapSize=ae.mapSize,J.shadowCameraNear=ae.camera.near,J.shadowCameraFar=ae.camera.far,n.pointShadow[y]=J,n.pointShadowMap[y]=Z,n.pointShadowMatrix[y]=k.shadow.matrix,b++}n.point[y]=K,y++}else if(k.isHemisphereLight){const K=e.get(k);K.skyColor.copy(k.color).multiplyScalar(F),K.groundColor.copy(k.groundColor).multiplyScalar(F),n.hemi[m]=K,m++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=h,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==p||D.pointLength!==y||D.spotLength!==v||D.rectAreaLength!==_||D.hemiLength!==m||D.numDirectionalShadows!==R||D.numPointShadows!==b||D.numSpotShadows!==S||D.numSpotMaps!==I||D.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=_,n.point.length=y,n.hemi.length=m,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=S+I-L,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=C,D.directionalLength=p,D.pointLength=y,D.spotLength=v,D.rectAreaLength=_,D.hemiLength=m,D.numDirectionalShadows=R,D.numPointShadows=b,D.numSpotShadows=S,D.numSpotMaps=I,D.numLightProbes=C,n.version=Vx++)}function c(l,f){let h=0,d=0,p=0,y=0,v=0;const _=f.matrixWorldInverse;for(let m=0,R=l.length;m<R;m++){const b=l[m];if(b.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),h++}else if(b.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),p++}else if(b.isRectAreaLight){const S=n.rectArea[y];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(_),a.identity(),r.copy(b.matrixWorld),r.premultiply(_),a.extractRotation(r),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),y++}else if(b.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(_),d++}else if(b.isHemisphereLight){const S=n.hemi[v];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(_),v++}}}return{setup:o,setupView:c,state:n}}function hf(i){const e=new qx(i),t=[],n=[];function s(f){l.camera=f,t.length=0,n.length=0}function r(f){t.push(f)}function a(f){n.push(f)}function o(){e.setup(t)}function c(f){e.setupView(t,f)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function jx(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new hf(i),e.set(s,[o])):r>=a.length?(o=new hf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Xx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$x=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Kx(i,e,t){let n=new dd;const s=new xt,r=new xt,a=new Pt,o=new y0({depthPacking:Pg}),c=new x0,l={},f=t.maxTextureSize,h={[Ti]:cn,[cn]:Ti,[ti]:ti},d=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:Xx,fragmentShader:$x}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const y=new di;y.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new sn(y,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gh;let m=this.type;this.render=function(L,C,D){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||L.length===0)return;const E=i.getRenderTarget(),w=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Mi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const F=m!==ei&&this.type===ei,W=m===ei&&this.type!==ei;for(let Z=0,K=L.length;Z<K;Z++){const ae=L[Z],J=ae.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);const fe=J.getFrameExtents();if(s.multiply(fe),r.copy(J.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/fe.x),s.x=r.x*fe.x,J.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/fe.y),s.y=r.y*fe.y,J.mapSize.y=r.y)),J.map===null||F===!0||W===!0){const Me=this.type!==ei?{minFilter:Wt,magFilter:Wt}:{};J.map!==null&&J.map.dispose(),J.map=new Ai(s.x,s.y,Me),J.map.texture.name=ae.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();const me=J.getViewportCount();for(let Me=0;Me<me;Me++){const Re=J.getViewport(Me);a.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),U.viewport(a),J.updateMatrices(ae,Me),n=J.getFrustum(),S(C,D,J.camera,ae,this.type)}J.isPointLightShadow!==!0&&this.type===ei&&R(J,D),J.needsUpdate=!1}m=this.type,_.needsUpdate=!1,i.setRenderTarget(E,w,k)};function R(L,C){const D=e.update(v);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Ai(s.x,s.y)),d.uniforms.shadow_pass.value=L.map.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(C,null,D,d,v,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(C,null,D,p,v,null)}function b(L,C,D,E){let w=null;const k=D.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(k!==void 0)w=k;else if(w=D.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const U=w.uuid,F=C.uuid;let W=l[U];W===void 0&&(W={},l[U]=W);let Z=W[F];Z===void 0&&(Z=w.clone(),W[F]=Z,C.addEventListener("dispose",I)),w=Z}if(w.visible=C.visible,w.wireframe=C.wireframe,E===ei?w.side=C.shadowSide!==null?C.shadowSide:C.side:w.side=C.shadowSide!==null?C.shadowSide:h[C.side],w.alphaMap=C.alphaMap,w.alphaTest=C.alphaTest,w.map=C.map,w.clipShadows=C.clipShadows,w.clippingPlanes=C.clippingPlanes,w.clipIntersection=C.clipIntersection,w.displacementMap=C.displacementMap,w.displacementScale=C.displacementScale,w.displacementBias=C.displacementBias,w.wireframeLinewidth=C.wireframeLinewidth,w.linewidth=C.linewidth,D.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const U=i.properties.get(w);U.light=D}return w}function S(L,C,D,E,w){if(L.visible===!1)return;if(L.layers.test(C.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&w===ei)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,L.matrixWorld);const F=e.update(L),W=L.material;if(Array.isArray(W)){const Z=F.groups;for(let K=0,ae=Z.length;K<ae;K++){const J=Z[K],fe=W[J.materialIndex];if(fe&&fe.visible){const me=b(L,fe,E,w);L.onBeforeShadow(i,L,C,D,F,me,J),i.renderBufferDirect(D,null,F,me,L,J),L.onAfterShadow(i,L,C,D,F,me,J)}}}else if(W.visible){const Z=b(L,W,E,w);L.onBeforeShadow(i,L,C,D,F,Z,null),i.renderBufferDirect(D,null,F,Z,L,null),L.onAfterShadow(i,L,C,D,F,Z,null)}}const U=L.children;for(let F=0,W=U.length;F<W;F++)S(U[F],C,D,E,w)}function I(L){L.target.removeEventListener("dispose",I);for(const D in l){const E=l[D],w=L.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}const Yx={[bl]:wl,[Sl]:Tl,[Ml]:Al,[Bs]:El,[wl]:bl,[Tl]:Sl,[Al]:Ml,[El]:Bs};function Jx(i,e){function t(){let B=!1;const pe=new Pt;let Q=null;const ie=new Pt(0,0,0,0);return{setMask:function(we){Q!==we&&!B&&(i.colorMask(we,we,we,we),Q=we)},setLocked:function(we){B=we},setClear:function(we,q,Xe,Mt,Ft){Ft===!0&&(we*=Mt,q*=Mt,Xe*=Mt),pe.set(we,q,Xe,Mt),ie.equals(pe)===!1&&(i.clearColor(we,q,Xe,Mt),ie.copy(pe))},reset:function(){B=!1,Q=null,ie.set(-1,0,0,0)}}}function n(){let B=!1,pe=!1,Q=null,ie=null,we=null;return{setReversed:function(q){if(pe!==q){const Xe=e.get("EXT_clip_control");pe?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT);const Mt=we;we=null,this.setClear(Mt)}pe=q},getReversed:function(){return pe},setTest:function(q){q?ge(i.DEPTH_TEST):Fe(i.DEPTH_TEST)},setMask:function(q){Q!==q&&!B&&(i.depthMask(q),Q=q)},setFunc:function(q){if(pe&&(q=Yx[q]),ie!==q){switch(q){case bl:i.depthFunc(i.NEVER);break;case wl:i.depthFunc(i.ALWAYS);break;case Sl:i.depthFunc(i.LESS);break;case Bs:i.depthFunc(i.LEQUAL);break;case Ml:i.depthFunc(i.EQUAL);break;case El:i.depthFunc(i.GEQUAL);break;case Tl:i.depthFunc(i.GREATER);break;case Al:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ie=q}},setLocked:function(q){B=q},setClear:function(q){we!==q&&(pe&&(q=1-q),i.clearDepth(q),we=q)},reset:function(){B=!1,Q=null,ie=null,we=null,pe=!1}}}function s(){let B=!1,pe=null,Q=null,ie=null,we=null,q=null,Xe=null,Mt=null,Ft=null;return{setTest:function(Ke){B||(Ke?ge(i.STENCIL_TEST):Fe(i.STENCIL_TEST))},setMask:function(Ke){pe!==Ke&&!B&&(i.stencilMask(Ke),pe=Ke)},setFunc:function(Ke,$t,fn){(Q!==Ke||ie!==$t||we!==fn)&&(i.stencilFunc(Ke,$t,fn),Q=Ke,ie=$t,we=fn)},setOp:function(Ke,$t,fn){(q!==Ke||Xe!==$t||Mt!==fn)&&(i.stencilOp(Ke,$t,fn),q=Ke,Xe=$t,Mt=fn)},setLocked:function(Ke){B=Ke},setClear:function(Ke){Ft!==Ke&&(i.clearStencil(Ke),Ft=Ke)},reset:function(){B=!1,pe=null,Q=null,ie=null,we=null,q=null,Xe=null,Mt=null,Ft=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let f={},h={},d=new WeakMap,p=[],y=null,v=!1,_=null,m=null,R=null,b=null,S=null,I=null,L=null,C=new mt(0,0,0),D=0,E=!1,w=null,k=null,U=null,F=null,W=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,ae=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(J)[1]),K=ae>=1):J.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),K=ae>=2);let fe=null,me={};const Me=i.getParameter(i.SCISSOR_BOX),Re=i.getParameter(i.VIEWPORT),Ve=new Pt().fromArray(Me),ee=new Pt().fromArray(Re);function ue(B,pe,Q,ie){const we=new Uint8Array(4),q=i.createTexture();i.bindTexture(B,q),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xe=0;Xe<Q;Xe++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,ie,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(pe+Xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return q}const Ee={};Ee[i.TEXTURE_2D]=ue(i.TEXTURE_2D,i.TEXTURE_2D,1),Ee[i.TEXTURE_CUBE_MAP]=ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[i.TEXTURE_2D_ARRAY]=ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ee[i.TEXTURE_3D]=ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ge(i.DEPTH_TEST),a.setFunc(Bs),tt(!1),Oe(yu),ge(i.CULL_FACE),O(Mi);function ge(B){f[B]!==!0&&(i.enable(B),f[B]=!0)}function Fe(B){f[B]!==!1&&(i.disable(B),f[B]=!1)}function He(B,pe){return h[B]!==pe?(i.bindFramebuffer(B,pe),h[B]=pe,B===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=pe),B===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function Qe(B,pe){let Q=p,ie=!1;if(B){Q=d.get(pe),Q===void 0&&(Q=[],d.set(pe,Q));const we=B.textures;if(Q.length!==we.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let q=0,Xe=we.length;q<Xe;q++)Q[q]=i.COLOR_ATTACHMENT0+q;Q.length=we.length,ie=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,ie=!0);ie&&i.drawBuffers(Q)}function ye(B){return y!==B?(i.useProgram(B),y=B,!0):!1}const te={[Hi]:i.FUNC_ADD,[ng]:i.FUNC_SUBTRACT,[ig]:i.FUNC_REVERSE_SUBTRACT};te[sg]=i.MIN,te[rg]=i.MAX;const Je={[ag]:i.ZERO,[og]:i.ONE,[lg]:i.SRC_COLOR,[yl]:i.SRC_ALPHA,[pg]:i.SRC_ALPHA_SATURATE,[hg]:i.DST_COLOR,[ug]:i.DST_ALPHA,[cg]:i.ONE_MINUS_SRC_COLOR,[xl]:i.ONE_MINUS_SRC_ALPHA,[dg]:i.ONE_MINUS_DST_COLOR,[fg]:i.ONE_MINUS_DST_ALPHA,[mg]:i.CONSTANT_COLOR,[gg]:i.ONE_MINUS_CONSTANT_COLOR,[_g]:i.CONSTANT_ALPHA,[vg]:i.ONE_MINUS_CONSTANT_ALPHA};function O(B,pe,Q,ie,we,q,Xe,Mt,Ft,Ke){if(B===Mi){v===!0&&(Fe(i.BLEND),v=!1);return}if(v===!1&&(ge(i.BLEND),v=!0),B!==tg){if(B!==_||Ke!==E){if((m!==Hi||S!==Hi)&&(i.blendEquation(i.FUNC_ADD),m=Hi,S=Hi),Ke)switch(B){case Sn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mr:i.blendFunc(i.ONE,i.ONE);break;case Va:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Sn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Va:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}R=null,b=null,I=null,L=null,C.set(0,0,0),D=0,_=B,E=Ke}return}we=we||pe,q=q||Q,Xe=Xe||ie,(pe!==m||we!==S)&&(i.blendEquationSeparate(te[pe],te[we]),m=pe,S=we),(Q!==R||ie!==b||q!==I||Xe!==L)&&(i.blendFuncSeparate(Je[Q],Je[ie],Je[q],Je[Xe]),R=Q,b=ie,I=q,L=Xe),(Mt.equals(C)===!1||Ft!==D)&&(i.blendColor(Mt.r,Mt.g,Mt.b,Ft),C.copy(Mt),D=Ft),_=B,E=!1}function st(B,pe){B.side===ti?Fe(i.CULL_FACE):ge(i.CULL_FACE);let Q=B.side===cn;pe&&(Q=!Q),tt(Q),B.blending===Sn&&B.transparent===!1?O(Mi):O(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);const ie=B.stencilWrite;o.setTest(ie),ie&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),lt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ge(i.SAMPLE_ALPHA_TO_COVERAGE):Fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(B){w!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),w=B)}function Oe(B){B!==Zm?(ge(i.CULL_FACE),B!==k&&(B===yu?i.cullFace(i.BACK):B===Qm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Fe(i.CULL_FACE),k=B}function Te(B){B!==U&&(K&&i.lineWidth(B),U=B)}function lt(B,pe,Q){B?(ge(i.POLYGON_OFFSET_FILL),(F!==pe||W!==Q)&&(i.polygonOffset(pe,Q),F=pe,W=Q)):Fe(i.POLYGON_OFFSET_FILL)}function De(B){B?ge(i.SCISSOR_TEST):Fe(i.SCISSOR_TEST)}function P(B){B===void 0&&(B=i.TEXTURE0+Z-1),fe!==B&&(i.activeTexture(B),fe=B)}function M(B,pe,Q){Q===void 0&&(fe===null?Q=i.TEXTURE0+Z-1:Q=fe);let ie=me[Q];ie===void 0&&(ie={type:void 0,texture:void 0},me[Q]=ie),(ie.type!==B||ie.texture!==pe)&&(fe!==Q&&(i.activeTexture(Q),fe=Q),i.bindTexture(B,pe||Ee[B]),ie.type=B,ie.texture=pe)}function V(){const B=me[fe];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function re(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function oe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ne(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ke(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function de(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ce(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ct(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Le(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ze(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function We(B){Ve.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Ve.copy(B))}function Pe(B){ee.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),ee.copy(B))}function be(B,pe){let Q=l.get(pe);Q===void 0&&(Q=new WeakMap,l.set(pe,Q));let ie=Q.get(B);ie===void 0&&(ie=i.getUniformBlockIndex(pe,B.name),Q.set(B,ie))}function Ze(B,pe){const ie=l.get(pe).get(B);c.get(pe)!==ie&&(i.uniformBlockBinding(pe,ie,B.__bindingPointIndex),c.set(pe,ie))}function gt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},fe=null,me={},h={},d=new WeakMap,p=[],y=null,v=!1,_=null,m=null,R=null,b=null,S=null,I=null,L=null,C=new mt(0,0,0),D=0,E=!1,w=null,k=null,U=null,F=null,W=null,Ve.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ge,disable:Fe,bindFramebuffer:He,drawBuffers:Qe,useProgram:ye,setBlending:O,setMaterial:st,setFlipSided:tt,setCullFace:Oe,setLineWidth:Te,setPolygonOffset:lt,setScissorTest:De,activeTexture:P,bindTexture:M,unbindTexture:V,compressedTexImage2D:re,compressedTexImage3D:oe,texImage2D:Le,texImage3D:ze,updateUBOMapping:be,uniformBlockBinding:Ze,texStorage2D:ct,texStorage3D:he,texSubImage2D:ne,texSubImage3D:ke,compressedTexSubImage2D:de,compressedTexSubImage3D:Ce,scissor:We,viewport:Pe,reset:gt}}function Zx(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new xt,f=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(P,M){return p?new OffscreenCanvas(P,M):Ar("canvas")}function v(P,M,V){let re=1;const oe=De(P);if((oe.width>V||oe.height>V)&&(re=V/Math.max(oe.width,oe.height)),re<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ne=Math.floor(re*oe.width),ke=Math.floor(re*oe.height);h===void 0&&(h=y(ne,ke));const de=M?y(ne,ke):h;return de.width=ne,de.height=ke,de.getContext("2d").drawImage(P,0,0,ne,ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+ne+"x"+ke+")."),de}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),P;return P}function _(P){return P.generateMipmaps}function m(P){i.generateMipmap(P)}function R(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(P,M,V,re,oe=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ne=M;if(M===i.RED&&(V===i.FLOAT&&(ne=i.R32F),V===i.HALF_FLOAT&&(ne=i.R16F),V===i.UNSIGNED_BYTE&&(ne=i.R8)),M===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(ne=i.R8UI),V===i.UNSIGNED_SHORT&&(ne=i.R16UI),V===i.UNSIGNED_INT&&(ne=i.R32UI),V===i.BYTE&&(ne=i.R8I),V===i.SHORT&&(ne=i.R16I),V===i.INT&&(ne=i.R32I)),M===i.RG&&(V===i.FLOAT&&(ne=i.RG32F),V===i.HALF_FLOAT&&(ne=i.RG16F),V===i.UNSIGNED_BYTE&&(ne=i.RG8)),M===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(ne=i.RG8UI),V===i.UNSIGNED_SHORT&&(ne=i.RG16UI),V===i.UNSIGNED_INT&&(ne=i.RG32UI),V===i.BYTE&&(ne=i.RG8I),V===i.SHORT&&(ne=i.RG16I),V===i.INT&&(ne=i.RG32I)),M===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),V===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),V===i.UNSIGNED_INT&&(ne=i.RGB32UI),V===i.BYTE&&(ne=i.RGB8I),V===i.SHORT&&(ne=i.RGB16I),V===i.INT&&(ne=i.RGB32I)),M===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),V===i.UNSIGNED_INT&&(ne=i.RGBA32UI),V===i.BYTE&&(ne=i.RGBA8I),V===i.SHORT&&(ne=i.RGBA16I),V===i.INT&&(ne=i.RGBA32I)),M===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),M===i.RGBA){const ke=oe?qa:pt.getTransfer(re);V===i.FLOAT&&(ne=i.RGBA32F),V===i.HALF_FLOAT&&(ne=i.RGBA16F),V===i.UNSIGNED_BYTE&&(ne=ke===yt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function S(P,M){let V;return P?M===null||M===Yi||M===Gs?V=i.DEPTH24_STENCIL8:M===si?V=i.DEPTH32F_STENCIL8:M===Tr&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Yi||M===Gs?V=i.DEPTH_COMPONENT24:M===si?V=i.DEPTH_COMPONENT32F:M===Tr&&(V=i.DEPTH_COMPONENT16),V}function I(P,M){return _(P)===!0||P.isFramebufferTexture&&P.minFilter!==Wt&&P.minFilter!==ln?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function L(P){const M=P.target;M.removeEventListener("dispose",L),D(M),M.isVideoTexture&&f.delete(M)}function C(P){const M=P.target;M.removeEventListener("dispose",C),w(M)}function D(P){const M=n.get(P);if(M.__webglInit===void 0)return;const V=P.source,re=d.get(V);if(re){const oe=re[M.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&E(P),Object.keys(re).length===0&&d.delete(V)}n.remove(P)}function E(P){const M=n.get(P);i.deleteTexture(M.__webglTexture);const V=P.source,re=d.get(V);delete re[M.__cacheKey],a.memory.textures--}function w(P){const M=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(M.__webglFramebuffer[re]))for(let oe=0;oe<M.__webglFramebuffer[re].length;oe++)i.deleteFramebuffer(M.__webglFramebuffer[re][oe]);else i.deleteFramebuffer(M.__webglFramebuffer[re]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[re])}else{if(Array.isArray(M.__webglFramebuffer))for(let re=0;re<M.__webglFramebuffer.length;re++)i.deleteFramebuffer(M.__webglFramebuffer[re]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let re=0;re<M.__webglColorRenderbuffer.length;re++)M.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[re]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=P.textures;for(let re=0,oe=V.length;re<oe;re++){const ne=n.get(V[re]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),a.memory.textures--),n.remove(V[re])}n.remove(P)}let k=0;function U(){k=0}function F(){const P=k;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),k+=1,P}function W(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function Z(P,M){const V=n.get(P);if(P.isVideoTexture&&Te(P),P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){const re=P.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(V,P,M);return}}t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+M)}function K(P,M){const V=n.get(P);if(P.version>0&&V.__version!==P.version){ee(V,P,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+M)}function ae(P,M){const V=n.get(P);if(P.version>0&&V.__version!==P.version){ee(V,P,M);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+M)}function J(P,M){const V=n.get(P);if(P.version>0&&V.__version!==P.version){ue(V,P,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+M)}const fe={[Er]:i.REPEAT,[ii]:i.CLAMP_TO_EDGE,[Pl]:i.MIRRORED_REPEAT},me={[Wt]:i.NEAREST,[Rg]:i.NEAREST_MIPMAP_NEAREST,[Jr]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[Eo]:i.LINEAR_MIPMAP_NEAREST,[Gn]:i.LINEAR_MIPMAP_LINEAR},Me={[Dg]:i.NEVER,[Bg]:i.ALWAYS,[kg]:i.LESS,[td]:i.LEQUAL,[Og]:i.EQUAL,[Fg]:i.GEQUAL,[Ng]:i.GREATER,[Ug]:i.NOTEQUAL};function Re(P,M){if(M.type===si&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ln||M.magFilter===Eo||M.magFilter===Jr||M.magFilter===Gn||M.minFilter===ln||M.minFilter===Eo||M.minFilter===Jr||M.minFilter===Gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,fe[M.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,fe[M.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,fe[M.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,me[M.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,me[M.minFilter]),M.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Me[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Wt||M.minFilter!==Jr&&M.minFilter!==Gn||M.type===si&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ve(P,M){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",L));const re=M.source;let oe=d.get(re);oe===void 0&&(oe={},d.set(re,oe));const ne=W(M);if(ne!==P.__cacheKey){oe[ne]===void 0&&(oe[ne]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),oe[ne].usedTimes++;const ke=oe[P.__cacheKey];ke!==void 0&&(oe[P.__cacheKey].usedTimes--,ke.usedTimes===0&&E(M)),P.__cacheKey=ne,P.__webglTexture=oe[ne].texture}return V}function ee(P,M,V){let re=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(re=i.TEXTURE_3D);const oe=Ve(P,M),ne=M.source;t.bindTexture(re,P.__webglTexture,i.TEXTURE0+V);const ke=n.get(ne);if(ne.version!==ke.__version||oe===!0){t.activeTexture(i.TEXTURE0+V);const de=pt.getPrimaries(pt.workingColorSpace),Ce=M.colorSpace===wi?null:pt.getPrimaries(M.colorSpace),ct=M.colorSpace===wi||de===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let he=v(M.image,!1,s.maxTextureSize);he=lt(M,he);const Le=r.convert(M.format,M.colorSpace),ze=r.convert(M.type);let We=b(M.internalFormat,Le,ze,M.colorSpace,M.isVideoTexture);Re(re,M);let Pe;const be=M.mipmaps,Ze=M.isVideoTexture!==!0,gt=ke.__version===void 0||oe===!0,B=ne.dataReady,pe=I(M,he);if(M.isDepthTexture)We=S(M.format===Vs,M.type),gt&&(Ze?t.texStorage2D(i.TEXTURE_2D,1,We,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,We,he.width,he.height,0,Le,ze,null));else if(M.isDataTexture)if(be.length>0){Ze&&gt&&t.texStorage2D(i.TEXTURE_2D,pe,We,be[0].width,be[0].height);for(let Q=0,ie=be.length;Q<ie;Q++)Pe=be[Q],Ze?B&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Pe.width,Pe.height,Le,ze,Pe.data):t.texImage2D(i.TEXTURE_2D,Q,We,Pe.width,Pe.height,0,Le,ze,Pe.data);M.generateMipmaps=!1}else Ze?(gt&&t.texStorage2D(i.TEXTURE_2D,pe,We,he.width,he.height),B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he.width,he.height,Le,ze,he.data)):t.texImage2D(i.TEXTURE_2D,0,We,he.width,he.height,0,Le,ze,he.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ze&&gt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,We,be[0].width,be[0].height,he.depth);for(let Q=0,ie=be.length;Q<ie;Q++)if(Pe=be[Q],M.format!==bn)if(Le!==null)if(Ze){if(B)if(M.layerUpdates.size>0){const we=Hu(Pe.width,Pe.height,M.format,M.type);for(const q of M.layerUpdates){const Xe=Pe.data.subarray(q*we/Pe.data.BYTES_PER_ELEMENT,(q+1)*we/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,q,Pe.width,Pe.height,1,Le,Xe)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Pe.width,Pe.height,he.depth,Le,Pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,We,Pe.width,Pe.height,he.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Pe.width,Pe.height,he.depth,Le,ze,Pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,We,Pe.width,Pe.height,he.depth,0,Le,ze,Pe.data)}else{Ze&&gt&&t.texStorage2D(i.TEXTURE_2D,pe,We,be[0].width,be[0].height);for(let Q=0,ie=be.length;Q<ie;Q++)Pe=be[Q],M.format!==bn?Le!==null?Ze?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,Pe.width,Pe.height,Le,Pe.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,We,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?B&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Pe.width,Pe.height,Le,ze,Pe.data):t.texImage2D(i.TEXTURE_2D,Q,We,Pe.width,Pe.height,0,Le,ze,Pe.data)}else if(M.isDataArrayTexture)if(Ze){if(gt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,We,he.width,he.height,he.depth),B)if(M.layerUpdates.size>0){const Q=Hu(he.width,he.height,M.format,M.type);for(const ie of M.layerUpdates){const we=he.data.subarray(ie*Q/he.data.BYTES_PER_ELEMENT,(ie+1)*Q/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ie,he.width,he.height,1,Le,ze,we)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Le,ze,he.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,We,he.width,he.height,he.depth,0,Le,ze,he.data);else if(M.isData3DTexture)Ze?(gt&&t.texStorage3D(i.TEXTURE_3D,pe,We,he.width,he.height,he.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Le,ze,he.data)):t.texImage3D(i.TEXTURE_3D,0,We,he.width,he.height,he.depth,0,Le,ze,he.data);else if(M.isFramebufferTexture){if(gt)if(Ze)t.texStorage2D(i.TEXTURE_2D,pe,We,he.width,he.height);else{let Q=he.width,ie=he.height;for(let we=0;we<pe;we++)t.texImage2D(i.TEXTURE_2D,we,We,Q,ie,0,Le,ze,null),Q>>=1,ie>>=1}}else if(be.length>0){if(Ze&&gt){const Q=De(be[0]);t.texStorage2D(i.TEXTURE_2D,pe,We,Q.width,Q.height)}for(let Q=0,ie=be.length;Q<ie;Q++)Pe=be[Q],Ze?B&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Le,ze,Pe):t.texImage2D(i.TEXTURE_2D,Q,We,Le,ze,Pe);M.generateMipmaps=!1}else if(Ze){if(gt){const Q=De(he);t.texStorage2D(i.TEXTURE_2D,pe,We,Q.width,Q.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Le,ze,he)}else t.texImage2D(i.TEXTURE_2D,0,We,Le,ze,he);_(M)&&m(re),ke.__version=ne.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function ue(P,M,V){if(M.image.length!==6)return;const re=Ve(P,M),oe=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+V);const ne=n.get(oe);if(oe.version!==ne.__version||re===!0){t.activeTexture(i.TEXTURE0+V);const ke=pt.getPrimaries(pt.workingColorSpace),de=M.colorSpace===wi?null:pt.getPrimaries(M.colorSpace),Ce=M.colorSpace===wi||ke===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const ct=M.isCompressedTexture||M.image[0].isCompressedTexture,he=M.image[0]&&M.image[0].isDataTexture,Le=[];for(let ie=0;ie<6;ie++)!ct&&!he?Le[ie]=v(M.image[ie],!0,s.maxCubemapSize):Le[ie]=he?M.image[ie].image:M.image[ie],Le[ie]=lt(M,Le[ie]);const ze=Le[0],We=r.convert(M.format,M.colorSpace),Pe=r.convert(M.type),be=b(M.internalFormat,We,Pe,M.colorSpace),Ze=M.isVideoTexture!==!0,gt=ne.__version===void 0||re===!0,B=oe.dataReady;let pe=I(M,ze);Re(i.TEXTURE_CUBE_MAP,M);let Q;if(ct){Ze&&gt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,be,ze.width,ze.height);for(let ie=0;ie<6;ie++){Q=Le[ie].mipmaps;for(let we=0;we<Q.length;we++){const q=Q[we];M.format!==bn?We!==null?Ze?B&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,0,0,q.width,q.height,We,q.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,be,q.width,q.height,0,q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,0,0,q.width,q.height,We,Pe,q.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,be,q.width,q.height,0,We,Pe,q.data)}}}else{if(Q=M.mipmaps,Ze&&gt){Q.length>0&&pe++;const ie=De(Le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,be,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(he){Ze?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Le[ie].width,Le[ie].height,We,Pe,Le[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,be,Le[ie].width,Le[ie].height,0,We,Pe,Le[ie].data);for(let we=0;we<Q.length;we++){const Xe=Q[we].image[ie].image;Ze?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,0,0,Xe.width,Xe.height,We,Pe,Xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,be,Xe.width,Xe.height,0,We,Pe,Xe.data)}}else{Ze?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,We,Pe,Le[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,be,We,Pe,Le[ie]);for(let we=0;we<Q.length;we++){const q=Q[we];Ze?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,0,0,We,Pe,q.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,be,We,Pe,q.image[ie])}}}_(M)&&m(i.TEXTURE_CUBE_MAP),ne.__version=oe.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Ee(P,M,V,re,oe,ne){const ke=r.convert(V.format,V.colorSpace),de=r.convert(V.type),Ce=b(V.internalFormat,ke,de,V.colorSpace),ct=n.get(M),he=n.get(V);if(he.__renderTarget=M,!ct.__hasExternalTextures){const Le=Math.max(1,M.width>>ne),ze=Math.max(1,M.height>>ne);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,ne,Ce,Le,ze,M.depth,0,ke,de,null):t.texImage2D(oe,ne,Ce,Le,ze,0,ke,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),Oe(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,oe,he.__webglTexture,0,tt(M)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,oe,he.__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(P,M,V){if(i.bindRenderbuffer(i.RENDERBUFFER,P),M.depthBuffer){const re=M.depthTexture,oe=re&&re.isDepthTexture?re.type:null,ne=S(M.stencilBuffer,oe),ke=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=tt(M);Oe(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,ne,M.width,M.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,ne,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ne,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ke,i.RENDERBUFFER,P)}else{const re=M.textures;for(let oe=0;oe<re.length;oe++){const ne=re[oe],ke=r.convert(ne.format,ne.colorSpace),de=r.convert(ne.type),Ce=b(ne.internalFormat,ke,de,ne.colorSpace),ct=tt(M);V&&Oe(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,Ce,M.width,M.height):Oe(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,Ce,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Ce,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Fe(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const re=n.get(M.depthTexture);re.__renderTarget=M,(!re.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Z(M.depthTexture,0);const oe=re.__webglTexture,ne=tt(M);if(M.depthTexture.format===ks)Oe(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(M.depthTexture.format===Vs)Oe(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function He(P){const M=n.get(P),V=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const re=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),re){const oe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,re.removeEventListener("dispose",oe)};re.addEventListener("dispose",oe),M.__depthDisposeCallback=oe}M.__boundDepthTexture=re}if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Fe(M.__webglFramebuffer,P)}else if(V){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]===void 0)M.__webglDepthbuffer[re]=i.createRenderbuffer(),ge(M.__webglDepthbuffer[re],P,!1);else{const oe=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=M.__webglDepthbuffer[re];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,ne)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ge(M.__webglDepthbuffer,P,!1);else{const re=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,oe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(P,M,V){const re=n.get(P);M!==void 0&&Ee(re.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&He(P)}function ye(P){const M=P.texture,V=n.get(P),re=n.get(M);P.addEventListener("dispose",C);const oe=P.textures,ne=P.isWebGLCubeRenderTarget===!0,ke=oe.length>1;if(ke||(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=M.version,a.memory.textures++),ne){V.__webglFramebuffer=[];for(let de=0;de<6;de++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[de]=[];for(let Ce=0;Ce<M.mipmaps.length;Ce++)V.__webglFramebuffer[de][Ce]=i.createFramebuffer()}else V.__webglFramebuffer[de]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let de=0;de<M.mipmaps.length;de++)V.__webglFramebuffer[de]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(ke)for(let de=0,Ce=oe.length;de<Ce;de++){const ct=n.get(oe[de]);ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&Oe(P)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let de=0;de<oe.length;de++){const Ce=oe[de];V.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[de]);const ct=r.convert(Ce.format,Ce.colorSpace),he=r.convert(Ce.type),Le=b(Ce.internalFormat,ct,he,Ce.colorSpace,P.isXRRenderTarget===!0),ze=tt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,Le,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,V.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),ge(V.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),Re(i.TEXTURE_CUBE_MAP,M);for(let de=0;de<6;de++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ce=0;Ce<M.mipmaps.length;Ce++)Ee(V.__webglFramebuffer[de][Ce],P,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce);else Ee(V.__webglFramebuffer[de],P,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);_(M)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let de=0,Ce=oe.length;de<Ce;de++){const ct=oe[de],he=n.get(ct);t.bindTexture(i.TEXTURE_2D,he.__webglTexture),Re(i.TEXTURE_2D,ct),Ee(V.__webglFramebuffer,P,ct,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),_(ct)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(de=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,re.__webglTexture),Re(de,M),M.mipmaps&&M.mipmaps.length>0)for(let Ce=0;Ce<M.mipmaps.length;Ce++)Ee(V.__webglFramebuffer[Ce],P,M,i.COLOR_ATTACHMENT0,de,Ce);else Ee(V.__webglFramebuffer,P,M,i.COLOR_ATTACHMENT0,de,0);_(M)&&m(de),t.unbindTexture()}P.depthBuffer&&He(P)}function te(P){const M=P.textures;for(let V=0,re=M.length;V<re;V++){const oe=M[V];if(_(oe)){const ne=R(P),ke=n.get(oe).__webglTexture;t.bindTexture(ne,ke),m(ne),t.unbindTexture()}}}const Je=[],O=[];function st(P){if(P.samples>0){if(Oe(P)===!1){const M=P.textures,V=P.width,re=P.height;let oe=i.COLOR_BUFFER_BIT;const ne=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ke=n.get(P),de=M.length>1;if(de)for(let Ce=0;Ce<M.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let Ce=0;Ce<M.length;Ce++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),de){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ke.__webglColorRenderbuffer[Ce]);const ct=n.get(M[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ct,0)}i.blitFramebuffer(0,0,V,re,0,0,V,re,oe,i.NEAREST),c===!0&&(Je.length=0,O.length=0,Je.push(i.COLOR_ATTACHMENT0+Ce),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Je.push(ne),O.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Je))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let Ce=0;Ce<M.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,ke.__webglColorRenderbuffer[Ce]);const ct=n.get(M[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,ct,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const M=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function tt(P){return Math.min(s.maxSamples,P.samples)}function Oe(P){const M=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Te(P){const M=a.render.frame;f.get(P)!==M&&(f.set(P,M),P.update())}function lt(P,M){const V=P.colorSpace,re=P.format,oe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==Ws&&V!==wi&&(pt.getTransfer(V)===yt?(re!==bn||oe!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}function De(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=U,this.setTexture2D=Z,this.setTexture2DArray=K,this.setTexture3D=ae,this.setTextureCube=J,this.rebindTextures=Qe,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Oe}function Qx(i,e){function t(n,s=wi){let r;const a=pt.getTransfer(s);if(n===qn)return i.UNSIGNED_BYTE;if(n===Ic)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Dc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qh)return i.BYTE;if(n===jh)return i.SHORT;if(n===Tr)return i.UNSIGNED_SHORT;if(n===Lc)return i.INT;if(n===Yi)return i.UNSIGNED_INT;if(n===si)return i.FLOAT;if(n===Dr)return i.HALF_FLOAT;if(n===$h)return i.ALPHA;if(n===Kh)return i.RGB;if(n===bn)return i.RGBA;if(n===Yh)return i.LUMINANCE;if(n===Jh)return i.LUMINANCE_ALPHA;if(n===ks)return i.DEPTH_COMPONENT;if(n===Vs)return i.DEPTH_STENCIL;if(n===Zh)return i.RED;if(n===kc)return i.RED_INTEGER;if(n===Qh)return i.RG;if(n===Oc)return i.RG_INTEGER;if(n===Nc)return i.RGBA_INTEGER;if(n===Ra||n===Ca||n===Pa||n===La)if(a===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ra)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ra)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===La)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ll||n===Il||n===Dl||n===kl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Il)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Dl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===kl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ol||n===Nl||n===Ul)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ol||n===Nl)return a===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ul)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fl||n===Bl||n===zl||n===Hl||n===Gl||n===Vl||n===Wl||n===ql||n===jl||n===Xl||n===$l||n===Kl||n===Yl||n===Jl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Gl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ql)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$l)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Kl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ia||n===Zl||n===Ql)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ia)return a===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ql)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ed||n===ec||n===tc||n===nc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ia)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ec)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===tc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const eb={type:"move"};class el{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ma,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ma,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ma,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const _=t.getJointPose(v,n),m=this._getHandJoint(l,v);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}const f=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=f.position.distanceTo(h.position),p=.02,y=.005;l.inputState.pinching&&d>p+y?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-y&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(eb)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ma;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const tb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ib{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Xt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Un({vertexShader:tb,fragmentShader:nb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new sn(new hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sb extends Zs{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,f=null,h=null,d=null,p=null,y=null;const v=new ib,_=t.getContextAttributes();let m=null,R=null;const b=[],S=[],I=new xt;let L=null;const C=new kn;C.viewport=new Pt;const D=new kn;D.viewport=new Pt;const E=[C,D],w=new E0;let k=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ue=b[ee];return ue===void 0&&(ue=new el,b[ee]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ee){let ue=b[ee];return ue===void 0&&(ue=new el,b[ee]=ue),ue.getGripSpace()},this.getHand=function(ee){let ue=b[ee];return ue===void 0&&(ue=new el,b[ee]=ue),ue.getHandSpace()};function F(ee){const ue=S.indexOf(ee.inputSource);if(ue===-1)return;const Ee=b[ue];Ee!==void 0&&(Ee.update(ee.inputSource,ee.frame,l||a),Ee.dispatchEvent({type:ee.type,data:ee.inputSource}))}function W(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",Z);for(let ee=0;ee<b.length;ee++){const ue=S[ee];ue!==null&&(S[ee]=null,b[ee].disconnect(ue))}k=null,U=null,v.reset(),e.setRenderTarget(m),p=null,d=null,h=null,s=null,R=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(ee){l=ee},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",W),s.addEventListener("inputsourceschange",Z),_.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(I),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let Ee=null,ge=null,Fe=null;_.depth&&(Fe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=_.stencil?Vs:ks,ge=_.stencil?Gs:Yi);const He={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(He),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),R=new Ai(d.textureWidth,d.textureHeight,{format:bn,type:qn,depthTexture:new pd(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const Ee={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Ee),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),R=new Ai(p.framebufferWidth,p.framebufferHeight,{format:bn,type:qn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}R.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ve.setContext(s),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Z(ee){for(let ue=0;ue<ee.removed.length;ue++){const Ee=ee.removed[ue],ge=S.indexOf(Ee);ge>=0&&(S[ge]=null,b[ge].disconnect(Ee))}for(let ue=0;ue<ee.added.length;ue++){const Ee=ee.added[ue];let ge=S.indexOf(Ee);if(ge===-1){for(let He=0;He<b.length;He++)if(He>=S.length){S.push(Ee),ge=He;break}else if(S[He]===null){S[He]=Ee,ge=He;break}if(ge===-1)break}const Fe=b[ge];Fe&&Fe.connect(Ee)}}const K=new $,ae=new $;function J(ee,ue,Ee){K.setFromMatrixPosition(ue.matrixWorld),ae.setFromMatrixPosition(Ee.matrixWorld);const ge=K.distanceTo(ae),Fe=ue.projectionMatrix.elements,He=Ee.projectionMatrix.elements,Qe=Fe[14]/(Fe[10]-1),ye=Fe[14]/(Fe[10]+1),te=(Fe[9]+1)/Fe[5],Je=(Fe[9]-1)/Fe[5],O=(Fe[8]-1)/Fe[0],st=(He[8]+1)/He[0],tt=Qe*O,Oe=Qe*st,Te=ge/(-O+st),lt=Te*-O;if(ue.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(lt),ee.translateZ(Te),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Fe[10]===-1)ee.projectionMatrix.copy(ue.projectionMatrix),ee.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const De=Qe+Te,P=ye+Te,M=tt-lt,V=Oe+(ge-lt),re=te*ye/P*De,oe=Je*ye/P*De;ee.projectionMatrix.makePerspective(M,V,re,oe,De,P),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function fe(ee,ue){ue===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ue.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let ue=ee.near,Ee=ee.far;v.texture!==null&&(v.depthNear>0&&(ue=v.depthNear),v.depthFar>0&&(Ee=v.depthFar)),w.near=D.near=C.near=ue,w.far=D.far=C.far=Ee,(k!==w.near||U!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),k=w.near,U=w.far),C.layers.mask=ee.layers.mask|2,D.layers.mask=ee.layers.mask|4,w.layers.mask=C.layers.mask|D.layers.mask;const ge=ee.parent,Fe=w.cameras;fe(w,ge);for(let He=0;He<Fe.length;He++)fe(Fe[He],ge);Fe.length===2?J(w,C,D):w.projectionMatrix.copy(C.projectionMatrix),me(ee,w,ge)};function me(ee,ue,Ee){Ee===null?ee.matrix.copy(ue.matrixWorld):(ee.matrix.copy(Ee.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ue.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ue.projectionMatrix),ee.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=ic*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(ee){c=ee,d!==null&&(d.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(w)};let Me=null;function Re(ee,ue){if(f=ue.getViewerPose(l||a),y=ue,f!==null){const Ee=f.views;p!==null&&(e.setRenderTargetFramebuffer(R,p.framebuffer),e.setRenderTarget(R));let ge=!1;Ee.length!==w.cameras.length&&(w.cameras.length=0,ge=!0);for(let He=0;He<Ee.length;He++){const Qe=Ee[He];let ye=null;if(p!==null)ye=p.getViewport(Qe);else{const Je=h.getViewSubImage(d,Qe);ye=Je.viewport,He===0&&(e.setRenderTargetTextures(R,Je.colorTexture,d.ignoreDepthValues?void 0:Je.depthStencilTexture),e.setRenderTarget(R))}let te=E[He];te===void 0&&(te=new kn,te.layers.enable(He),te.viewport=new Pt,E[He]=te),te.matrix.fromArray(Qe.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Qe.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(ye.x,ye.y,ye.width,ye.height),He===0&&(w.matrix.copy(te.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ge===!0&&w.cameras.push(te)}const Fe=s.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){const He=h.getDepthInformation(Ee[0]);He&&He.isValid&&He.texture&&v.init(e,He,s.renderState)}}for(let Ee=0;Ee<b.length;Ee++){const ge=S[Ee],Fe=b[Ee];ge!==null&&Fe!==void 0&&Fe.update(ge,ue,l||a)}Me&&Me(ee,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),y=null}const Ve=new gd;Ve.setAnimationLoop(Re),this.setAnimationLoop=function(ee){Me=ee},this.dispose=function(){}}}const Fi=new fi,rb=new Ot;function ab(i,e){function t(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function n(_,m){m.color.getRGB(_.fogColor.value,cd(i)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function s(_,m,R,b,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(_,m):m.isMeshToonMaterial?(r(_,m),h(_,m)):m.isMeshPhongMaterial?(r(_,m),f(_,m)):m.isMeshStandardMaterial?(r(_,m),d(_,m),m.isMeshPhysicalMaterial&&p(_,m,S)):m.isMeshMatcapMaterial?(r(_,m),y(_,m)):m.isMeshDepthMaterial?r(_,m):m.isMeshDistanceMaterial?(r(_,m),v(_,m)):m.isMeshNormalMaterial?r(_,m):m.isLineBasicMaterial?(a(_,m),m.isLineDashedMaterial&&o(_,m)):m.isPointsMaterial?c(_,m,R,b):m.isSpriteMaterial?l(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,t(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===cn&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,t(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===cn&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,t(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,t(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);const R=e.get(m),b=R.envMap,S=R.envMapRotation;b&&(_.envMap.value=b,Fi.copy(S),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),_.envMapRotation.value.setFromMatrix4(rb.makeRotationFromEuler(Fi)),_.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap&&(_.lightMap.value=m.lightMap,_.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,_.lightMapTransform)),m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,_.aoMapTransform))}function a(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform))}function o(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function c(_,m,R,b){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*R,_.scale.value=b*.5,m.map&&(_.map.value=m.map,t(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function l(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function f(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function h(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function d(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function p(_,m,R){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===cn&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=R.texture,_.transmissionSamplerSize.value.set(R.width,R.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,_.specularIntensityMapTransform))}function y(_,m){m.matcap&&(_.matcap.value=m.matcap)}function v(_,m){const R=e.get(m).light;_.referencePosition.value.setFromMatrixPosition(R.matrixWorld),_.nearDistance.value=R.shadow.camera.near,_.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ob(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(R,b){const S=b.program;n.uniformBlockBinding(R,S)}function l(R,b){let S=s[R.id];S===void 0&&(y(R),S=f(R),s[R.id]=S,R.addEventListener("dispose",_));const I=b.program;n.updateUBOMapping(R,I);const L=e.render.frame;r[R.id]!==L&&(d(R),r[R.id]=L)}function f(R){const b=h();R.__bindingPointIndex=b;const S=i.createBuffer(),I=R.__size,L=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,I,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function h(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(R){const b=s[R.id],S=R.uniforms,I=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let L=0,C=S.length;L<C;L++){const D=Array.isArray(S[L])?S[L]:[S[L]];for(let E=0,w=D.length;E<w;E++){const k=D[E];if(p(k,L,E,I)===!0){const U=k.__offset,F=Array.isArray(k.value)?k.value:[k.value];let W=0;for(let Z=0;Z<F.length;Z++){const K=F[Z],ae=v(K);typeof K=="number"||typeof K=="boolean"?(k.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,U+W,k.__data)):K.isMatrix3?(k.__data[0]=K.elements[0],k.__data[1]=K.elements[1],k.__data[2]=K.elements[2],k.__data[3]=0,k.__data[4]=K.elements[3],k.__data[5]=K.elements[4],k.__data[6]=K.elements[5],k.__data[7]=0,k.__data[8]=K.elements[6],k.__data[9]=K.elements[7],k.__data[10]=K.elements[8],k.__data[11]=0):(K.toArray(k.__data,W),W+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(R,b,S,I){const L=R.value,C=b+"_"+S;if(I[C]===void 0)return typeof L=="number"||typeof L=="boolean"?I[C]=L:I[C]=L.clone(),!0;{const D=I[C];if(typeof L=="number"||typeof L=="boolean"){if(D!==L)return I[C]=L,!0}else if(D.equals(L)===!1)return D.copy(L),!0}return!1}function y(R){const b=R.uniforms;let S=0;const I=16;for(let C=0,D=b.length;C<D;C++){const E=Array.isArray(b[C])?b[C]:[b[C]];for(let w=0,k=E.length;w<k;w++){const U=E[w],F=Array.isArray(U.value)?U.value:[U.value];for(let W=0,Z=F.length;W<Z;W++){const K=F[W],ae=v(K),J=S%I,fe=J%ae.boundary,me=J+fe;S+=fe,me!==0&&I-me<ae.storage&&(S+=I-me),U.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=ae.storage}}}const L=S%I;return L>0&&(S+=I-L),R.__size=S,R.__cache={},this}function v(R){const b={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(b.boundary=4,b.storage=4):R.isVector2?(b.boundary=8,b.storage=8):R.isVector3||R.isColor?(b.boundary=16,b.storage=12):R.isVector4?(b.boundary=16,b.storage=16):R.isMatrix3?(b.boundary=48,b.storage=48):R.isMatrix4?(b.boundary=64,b.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),b}function _(R){const b=R.target;b.removeEventListener("dispose",_);const S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function m(){for(const R in s)i.deleteBuffer(s[R]);a=[],s={},r={}}return{bind:c,update:l,dispose:m}}class lb{constructor(e={}){const{canvas:t=Gg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const y=new Uint32Array(4),v=new Int32Array(4);let _=null,m=null;const R=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jt,this.toneMapping=oi,this.toneMappingExposure=1;const S=this;let I=!1,L=0,C=0,D=null,E=-1,w=null;const k=new Pt,U=new Pt;let F=null;const W=new mt(0);let Z=0,K=t.width,ae=t.height,J=1,fe=null,me=null;const Me=new Pt(0,0,K,ae),Re=new Pt(0,0,K,ae);let Ve=!1;const ee=new dd;let ue=!1,Ee=!1;this.transmissionResolutionScale=1;const ge=new Ot,Fe=new Ot,He=new $,Qe=new Pt,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function Je(){return D===null?J:1}let O=n;function st(T,z){return t.getContext(T,z)}try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pc}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",q,!1),O===null){const z="webgl2";if(O=st(z,T),O===null)throw st(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let tt,Oe,Te,lt,De,P,M,V,re,oe,ne,ke,de,Ce,ct,he,Le,ze,We,Pe,be,Ze,gt,B;function pe(){tt=new _y(O),tt.init(),Ze=new Qx(O,tt),Oe=new fy(O,tt,e,Ze),Te=new Jx(O,tt),Oe.reverseDepthBuffer&&d&&Te.buffers.depth.setReversed(!0),lt=new xy(O),De=new Fx,P=new Zx(O,tt,Te,De,Oe,Ze,lt),M=new dy(S),V=new gy(S),re=new A0(O),gt=new cy(O,re),oe=new vy(O,re,lt,gt),ne=new wy(O,oe,re,lt),We=new by(O,Oe,P),he=new hy(De),ke=new Ux(S,M,V,tt,Oe,gt,he),de=new ab(S,De),Ce=new zx,ct=new jx(tt),ze=new ly(S,M,V,Te,ne,p,c),Le=new Kx(S,ne,Oe),B=new ob(O,lt,Oe,Te),Pe=new uy(O,tt,lt),be=new yy(O,tt,lt),lt.programs=ke.programs,S.capabilities=Oe,S.extensions=tt,S.properties=De,S.renderLists=Ce,S.shadowMap=Le,S.state=Te,S.info=lt}pe();const Q=new sb(S,O);this.xr=Q,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const T=tt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=tt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(T){T!==void 0&&(J=T,this.setSize(K,ae,!1))},this.getSize=function(T){return T.set(K,ae)},this.setSize=function(T,z,j=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=T,ae=z,t.width=Math.floor(T*J),t.height=Math.floor(z*J),j===!0&&(t.style.width=T+"px",t.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(K*J,ae*J).floor()},this.setDrawingBufferSize=function(T,z,j){K=T,ae=z,J=j,t.width=Math.floor(T*j),t.height=Math.floor(z*j),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(k)},this.getViewport=function(T){return T.copy(Me)},this.setViewport=function(T,z,j,X){T.isVector4?Me.set(T.x,T.y,T.z,T.w):Me.set(T,z,j,X),Te.viewport(k.copy(Me).multiplyScalar(J).round())},this.getScissor=function(T){return T.copy(Re)},this.setScissor=function(T,z,j,X){T.isVector4?Re.set(T.x,T.y,T.z,T.w):Re.set(T,z,j,X),Te.scissor(U.copy(Re).multiplyScalar(J).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(T){Te.setScissorTest(Ve=T)},this.setOpaqueSort=function(T){fe=T},this.setTransparentSort=function(T){me=T},this.getClearColor=function(T){return T.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(T=!0,z=!0,j=!0){let X=0;if(T){let H=!1;if(D!==null){const ce=D.texture.format;H=ce===Nc||ce===Oc||ce===kc}if(H){const ce=D.texture.type,_e=ce===qn||ce===Yi||ce===Tr||ce===Gs||ce===Ic||ce===Dc,Ae=ze.getClearColor(),Se=ze.getClearAlpha(),Ge=Ae.r,qe=Ae.g,Ue=Ae.b;_e?(y[0]=Ge,y[1]=qe,y[2]=Ue,y[3]=Se,O.clearBufferuiv(O.COLOR,0,y)):(v[0]=Ge,v[1]=qe,v[2]=Ue,v[3]=Se,O.clearBufferiv(O.COLOR,0,v))}else X|=O.COLOR_BUFFER_BIT}z&&(X|=O.DEPTH_BUFFER_BIT),j&&(X|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",q,!1),ze.dispose(),Ce.dispose(),ct.dispose(),De.dispose(),M.dispose(),V.dispose(),ne.dispose(),gt.dispose(),B.dispose(),ke.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",er),Q.removeEventListener("sessionend",Bn),zn.stop()};function ie(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const T=lt.autoReset,z=Le.enabled,j=Le.autoUpdate,X=Le.needsUpdate,H=Le.type;pe(),lt.autoReset=T,Le.enabled=z,Le.autoUpdate=j,Le.needsUpdate=X,Le.type=H}function q(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Xe(T){const z=T.target;z.removeEventListener("dispose",Xe),Mt(z)}function Mt(T){Ft(T),De.remove(T)}function Ft(T){const z=De.get(T).programs;z!==void 0&&(z.forEach(function(j){ke.releaseProgram(j)}),T.isShaderMaterial&&ke.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,j,X,H,ce){z===null&&(z=ye);const _e=H.isMesh&&H.matrixWorld.determinant()<0,Ae=po(T,z,j,X,H);Te.setMaterial(X,_e);let Se=j.index,Ge=1;if(X.wireframe===!0){if(Se=oe.getWireframeAttribute(j),Se===void 0)return;Ge=2}const qe=j.drawRange,Ue=j.attributes.position;let ut=qe.start*Ge,dt=(qe.start+qe.count)*Ge;ce!==null&&(ut=Math.max(ut,ce.start*Ge),dt=Math.min(dt,(ce.start+ce.count)*Ge)),Se!==null?(ut=Math.max(ut,0),dt=Math.min(dt,Se.count)):Ue!=null&&(ut=Math.max(ut,0),dt=Math.min(dt,Ue.count));const Tt=dt-ut;if(Tt<0||Tt===1/0)return;gt.setup(H,X,Ae,j,Se);let vt,ft=Pe;if(Se!==null&&(vt=re.get(Se),ft=be,ft.setIndex(vt)),H.isMesh)X.wireframe===!0?(Te.setLineWidth(X.wireframeLinewidth*Je()),ft.setMode(O.LINES)):ft.setMode(O.TRIANGLES);else if(H.isLine){let ve=X.linewidth;ve===void 0&&(ve=1),Te.setLineWidth(ve*Je()),H.isLineSegments?ft.setMode(O.LINES):H.isLineLoop?ft.setMode(O.LINE_LOOP):ft.setMode(O.LINE_STRIP)}else H.isPoints?ft.setMode(O.POINTS):H.isSprite&&ft.setMode(O.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)ft.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))ft.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const ve=H._multiDrawStarts,Ct=H._multiDrawCounts,rt=H._multiDrawCount,Kt=Se?re.get(Se).bytesPerElement:1,En=De.get(X).currentProgram.getUniforms();for(let Bt=0;Bt<rt;Bt++)En.setValue(O,"_gl_DrawID",Bt),ft.render(ve[Bt]/Kt,Ct[Bt])}else if(H.isInstancedMesh)ft.renderInstances(ut,Tt,H.count);else if(j.isInstancedBufferGeometry){const ve=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ct=Math.min(j.instanceCount,ve);ft.renderInstances(ut,Tt,Ct)}else ft.render(ut,Tt)};function Ke(T,z,j){T.transparent===!0&&T.side===ti&&T.forceSinglePass===!1?(T.side=cn,T.needsUpdate=!0,Lt(T,z,j),T.side=Ti,T.needsUpdate=!0,Lt(T,z,j),T.side=ti):Lt(T,z,j)}this.compile=function(T,z,j=null){j===null&&(j=T),m=ct.get(j),m.init(z),b.push(m),j.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),T!==j&&T.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();const X=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ce=H.material;if(ce)if(Array.isArray(ce))for(let _e=0;_e<ce.length;_e++){const Ae=ce[_e];Ke(Ae,j,H),X.add(Ae)}else Ke(ce,j,H),X.add(ce)}),b.pop(),m=null,X},this.compileAsync=function(T,z,j=null){const X=this.compile(T,z,j);return new Promise(H=>{function ce(){if(X.forEach(function(_e){De.get(_e).currentProgram.isReady()&&X.delete(_e)}),X.size===0){H(T);return}setTimeout(ce,10)}tt.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let $t=null;function fn(T){$t&&$t(T)}function er(){zn.stop()}function Bn(){zn.start()}const zn=new gd;zn.setAnimationLoop(fn),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(T){$t=T,Q.setAnimationLoop(T),T===null?zn.stop():zn.start()},Q.addEventListener("sessionstart",er),Q.addEventListener("sessionend",Bn),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(z),z=Q.getCamera()),T.isScene===!0&&T.onBeforeRender(S,T,z,D),m=ct.get(T,b.length),m.init(z),b.push(m),Fe.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ee.setFromProjectionMatrix(Fe),Ee=this.localClippingEnabled,ue=he.init(this.clippingPlanes,Ee),_=Ce.get(T,R.length),_.init(),R.push(_),Q.enabled===!0&&Q.isPresenting===!0){const ce=S.xr.getDepthSensingMesh();ce!==null&&qt(ce,z,-1/0,S.sortObjects)}qt(T,z,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(fe,me),te=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,te&&ze.addToRenderList(_,T),this.info.render.frame++,ue===!0&&he.beginShadows();const j=m.state.shadowsArray;Le.render(j,T,z),ue===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=_.opaque,H=_.transmissive;if(m.setupLights(),z.isArrayCamera){const ce=z.cameras;if(H.length>0)for(let _e=0,Ae=ce.length;_e<Ae;_e++){const Se=ce[_e];jn(X,H,T,Se)}te&&ze.render(T);for(let _e=0,Ae=ce.length;_e<Ae;_e++){const Se=ce[_e];tr(_,T,Se,Se.viewport)}}else H.length>0&&jn(X,H,T,z),te&&ze.render(T),tr(_,T,z);D!==null&&C===0&&(P.updateMultisampleRenderTarget(D),P.updateRenderTargetMipmap(D)),T.isScene===!0&&T.onAfterRender(S,T,z),gt.resetDefaultState(),E=-1,w=null,b.pop(),b.length>0?(m=b[b.length-1],ue===!0&&he.setGlobalState(S.clippingPlanes,m.state.camera)):m=null,R.pop(),R.length>0?_=R[R.length-1]:_=null};function qt(T,z,j,X){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ee.intersectsSprite(T)){X&&Qe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Fe);const _e=ne.update(T),Ae=T.material;Ae.visible&&_.push(T,_e,Ae,j,Qe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ee.intersectsObject(T))){const _e=ne.update(T),Ae=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Qe.copy(T.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Qe.copy(_e.boundingSphere.center)),Qe.applyMatrix4(T.matrixWorld).applyMatrix4(Fe)),Array.isArray(Ae)){const Se=_e.groups;for(let Ge=0,qe=Se.length;Ge<qe;Ge++){const Ue=Se[Ge],ut=Ae[Ue.materialIndex];ut&&ut.visible&&_.push(T,_e,ut,j,Qe.z,Ue)}}else Ae.visible&&_.push(T,_e,Ae,j,Qe.z,null)}}const ce=T.children;for(let _e=0,Ae=ce.length;_e<Ae;_e++)qt(ce[_e],z,j,X)}function tr(T,z,j,X){const H=T.opaque,ce=T.transmissive,_e=T.transparent;m.setupLightsView(j),ue===!0&&he.setGlobalState(S.clippingPlanes,j),X&&Te.viewport(k.copy(X)),H.length>0&&Ci(H,z,j),ce.length>0&&Ci(ce,z,j),_e.length>0&&Ci(_e,z,j),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function jn(T,z,j,X){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[X.id]===void 0&&(m.state.transmissionRenderTarget[X.id]=new Ai(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?Dr:qn,minFilter:Gn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace}));const ce=m.state.transmissionRenderTarget[X.id],_e=X.viewport||k;ce.setSize(_e.z*S.transmissionResolutionScale,_e.w*S.transmissionResolutionScale);const Ae=S.getRenderTarget();S.setRenderTarget(ce),S.getClearColor(W),Z=S.getClearAlpha(),Z<1&&S.setClearColor(16777215,.5),S.clear(),te&&ze.render(j);const Se=S.toneMapping;S.toneMapping=oi;const Ge=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),m.setupLightsView(X),ue===!0&&he.setGlobalState(S.clippingPlanes,X),Ci(T,j,X),P.updateMultisampleRenderTarget(ce),P.updateRenderTargetMipmap(ce),tt.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Ue=0,ut=z.length;Ue<ut;Ue++){const dt=z[Ue],Tt=dt.object,vt=dt.geometry,ft=dt.material,ve=dt.group;if(ft.side===ti&&Tt.layers.test(X.layers)){const Ct=ft.side;ft.side=cn,ft.needsUpdate=!0,nr(Tt,j,X,vt,ft,ve),ft.side=Ct,ft.needsUpdate=!0,qe=!0}}qe===!0&&(P.updateMultisampleRenderTarget(ce),P.updateRenderTargetMipmap(ce))}S.setRenderTarget(Ae),S.setClearColor(W,Z),Ge!==void 0&&(X.viewport=Ge),S.toneMapping=Se}function Ci(T,z,j){const X=z.isScene===!0?z.overrideMaterial:null;for(let H=0,ce=T.length;H<ce;H++){const _e=T[H],Ae=_e.object,Se=_e.geometry,Ge=X===null?_e.material:X,qe=_e.group;Ae.layers.test(j.layers)&&nr(Ae,z,j,Se,Ge,qe)}}function nr(T,z,j,X,H,ce){T.onBeforeRender(S,z,j,X,H,ce),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(S,z,j,X,T,ce),H.transparent===!0&&H.side===ti&&H.forceSinglePass===!1?(H.side=cn,H.needsUpdate=!0,S.renderBufferDirect(j,z,X,H,T,ce),H.side=Ti,H.needsUpdate=!0,S.renderBufferDirect(j,z,X,H,T,ce),H.side=ti):S.renderBufferDirect(j,z,X,H,T,ce),T.onAfterRender(S,z,j,X,H,ce)}function Lt(T,z,j){z.isScene!==!0&&(z=ye);const X=De.get(T),H=m.state.lights,ce=m.state.shadowsArray,_e=H.state.version,Ae=ke.getParameters(T,H.state,ce,z,j),Se=ke.getProgramCacheKey(Ae);let Ge=X.programs;X.environment=T.isMeshStandardMaterial?z.environment:null,X.fog=z.fog,X.envMap=(T.isMeshStandardMaterial?V:M).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,Ge===void 0&&(T.addEventListener("dispose",Xe),Ge=new Map,X.programs=Ge);let qe=Ge.get(Se);if(qe!==void 0){if(X.currentProgram===qe&&X.lightsStateVersion===_e)return Fr(T,Ae),qe}else Ae.uniforms=ke.getUniforms(T),T.onBeforeCompile(Ae,S),qe=ke.acquireProgram(Ae,Se),Ge.set(Se,qe),X.uniforms=Ae.uniforms;const Ue=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ue.clippingPlanes=he.uniform),Fr(T,Ae),X.needsLights=Br(T),X.lightsStateVersion=_e,X.needsLights&&(Ue.ambientLightColor.value=H.state.ambient,Ue.lightProbe.value=H.state.probe,Ue.directionalLights.value=H.state.directional,Ue.directionalLightShadows.value=H.state.directionalShadow,Ue.spotLights.value=H.state.spot,Ue.spotLightShadows.value=H.state.spotShadow,Ue.rectAreaLights.value=H.state.rectArea,Ue.ltc_1.value=H.state.rectAreaLTC1,Ue.ltc_2.value=H.state.rectAreaLTC2,Ue.pointLights.value=H.state.point,Ue.pointLightShadows.value=H.state.pointShadow,Ue.hemisphereLights.value=H.state.hemi,Ue.directionalShadowMap.value=H.state.directionalShadowMap,Ue.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ue.spotShadowMap.value=H.state.spotShadowMap,Ue.spotLightMatrix.value=H.state.spotLightMatrix,Ue.spotLightMap.value=H.state.spotLightMap,Ue.pointShadowMap.value=H.state.pointShadowMap,Ue.pointShadowMatrix.value=H.state.pointShadowMatrix),X.currentProgram=qe,X.uniformsList=null,qe}function ir(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=Da.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function Fr(T,z){const j=De.get(T);j.outputColorSpace=z.outputColorSpace,j.batching=z.batching,j.batchingColor=z.batchingColor,j.instancing=z.instancing,j.instancingColor=z.instancingColor,j.instancingMorph=z.instancingMorph,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}function po(T,z,j,X,H){z.isScene!==!0&&(z=ye),P.resetTextureUnits();const ce=z.fog,_e=X.isMeshStandardMaterial?z.environment:null,Ae=D===null?S.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ws,Se=(X.isMeshStandardMaterial?V:M).get(X.envMap||_e),Ge=X.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,qe=!!j.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ue=!!j.morphAttributes.position,ut=!!j.morphAttributes.normal,dt=!!j.morphAttributes.color;let Tt=oi;X.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Tt=S.toneMapping);const vt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ft=vt!==void 0?vt.length:0,ve=De.get(X),Ct=m.state.lights;if(ue===!0&&(Ee===!0||T!==w)){const zt=T===w&&X.id===E;he.setState(X,T,zt)}let rt=!1;X.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==Ct.state.version||ve.outputColorSpace!==Ae||H.isBatchedMesh&&ve.batching===!1||!H.isBatchedMesh&&ve.batching===!0||H.isBatchedMesh&&ve.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&ve.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&ve.instancing===!1||!H.isInstancedMesh&&ve.instancing===!0||H.isSkinnedMesh&&ve.skinning===!1||!H.isSkinnedMesh&&ve.skinning===!0||H.isInstancedMesh&&ve.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ve.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&ve.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&ve.instancingMorph===!1&&H.morphTexture!==null||ve.envMap!==Se||X.fog===!0&&ve.fog!==ce||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==he.numPlanes||ve.numIntersection!==he.numIntersection)||ve.vertexAlphas!==Ge||ve.vertexTangents!==qe||ve.morphTargets!==Ue||ve.morphNormals!==ut||ve.morphColors!==dt||ve.toneMapping!==Tt||ve.morphTargetsCount!==ft)&&(rt=!0):(rt=!0,ve.__version=X.version);let Kt=ve.currentProgram;rt===!0&&(Kt=Lt(X,z,H));let En=!1,Bt=!1,Tn=!1;const wt=Kt.getUniforms(),rn=ve.uniforms;if(Te.useProgram(Kt.program)&&(En=!0,Bt=!0,Tn=!0),X.id!==E&&(E=X.id,Bt=!0),En||w!==T){Te.buffers.depth.getReversed()?(ge.copy(T.projectionMatrix),Wg(ge),qg(ge),wt.setValue(O,"projectionMatrix",ge)):wt.setValue(O,"projectionMatrix",T.projectionMatrix),wt.setValue(O,"viewMatrix",T.matrixWorldInverse);const Ht=wt.map.cameraPosition;Ht!==void 0&&Ht.setValue(O,He.setFromMatrixPosition(T.matrixWorld)),Oe.logarithmicDepthBuffer&&wt.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&wt.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),w!==T&&(w=T,Bt=!0,Tn=!0)}if(H.isSkinnedMesh){wt.setOptional(O,H,"bindMatrix"),wt.setOptional(O,H,"bindMatrixInverse");const zt=H.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),wt.setValue(O,"boneTexture",zt.boneTexture,P))}H.isBatchedMesh&&(wt.setOptional(O,H,"batchingTexture"),wt.setValue(O,"batchingTexture",H._matricesTexture,P),wt.setOptional(O,H,"batchingIdTexture"),wt.setValue(O,"batchingIdTexture",H._indirectTexture,P),wt.setOptional(O,H,"batchingColorTexture"),H._colorsTexture!==null&&wt.setValue(O,"batchingColorTexture",H._colorsTexture,P));const Yt=j.morphAttributes;if((Yt.position!==void 0||Yt.normal!==void 0||Yt.color!==void 0)&&We.update(H,j,Kt),(Bt||ve.receiveShadow!==H.receiveShadow)&&(ve.receiveShadow=H.receiveShadow,wt.setValue(O,"receiveShadow",H.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(rn.envMap.value=Se,rn.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&z.environment!==null&&(rn.envMapIntensity.value=z.environmentIntensity),Bt&&(wt.setValue(O,"toneMappingExposure",S.toneMappingExposure),ve.needsLights&&sr(rn,Tn),ce&&X.fog===!0&&de.refreshFogUniforms(rn,ce),de.refreshMaterialUniforms(rn,X,J,ae,m.state.transmissionRenderTarget[T.id]),Da.upload(O,ir(ve),rn,P)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Da.upload(O,ir(ve),rn,P),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&wt.setValue(O,"center",H.center),wt.setValue(O,"modelViewMatrix",H.modelViewMatrix),wt.setValue(O,"normalMatrix",H.normalMatrix),wt.setValue(O,"modelMatrix",H.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const zt=X.uniformsGroups;for(let Ht=0,Pi=zt.length;Ht<Pi;Ht++){const Xn=zt[Ht];B.update(Xn,Kt),B.bind(Xn,Kt)}}return Kt}function sr(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function Br(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(T,z,j){De.get(T.texture).__webglTexture=z,De.get(T.depthTexture).__webglTexture=j;const X=De.get(T);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=j===void 0,X.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,z){const j=De.get(T);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0};const is=O.createFramebuffer();this.setRenderTarget=function(T,z=0,j=0){D=T,L=z,C=j;let X=!0,H=null,ce=!1,_e=!1;if(T){const Se=De.get(T);if(Se.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(O.FRAMEBUFFER,null),X=!1;else if(Se.__webglFramebuffer===void 0)P.setupRenderTarget(T);else if(Se.__hasExternalTextures)P.rebindTextures(T,De.get(T.texture).__webglTexture,De.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ue=T.depthTexture;if(Se.__boundDepthTexture!==Ue){if(Ue!==null&&De.has(Ue)&&(T.width!==Ue.image.width||T.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(T)}}const Ge=T.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(_e=!0);const qe=De.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(qe[z])?H=qe[z][j]:H=qe[z],ce=!0):T.samples>0&&P.useMultisampledRTT(T)===!1?H=De.get(T).__webglMultisampledFramebuffer:Array.isArray(qe)?H=qe[j]:H=qe,k.copy(T.viewport),U.copy(T.scissor),F=T.scissorTest}else k.copy(Me).multiplyScalar(J).floor(),U.copy(Re).multiplyScalar(J).floor(),F=Ve;if(j!==0&&(H=is),Te.bindFramebuffer(O.FRAMEBUFFER,H)&&X&&Te.drawBuffers(T,H),Te.viewport(k),Te.scissor(U),Te.setScissorTest(F),ce){const Se=De.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+z,Se.__webglTexture,j)}else if(_e){const Se=De.get(T.texture),Ge=z;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Se.__webglTexture,j,Ge)}else if(T!==null&&j!==0){const Se=De.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Se.__webglTexture,j)}E=-1},this.readRenderTargetPixels=function(T,z,j,X,H,ce,_e){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=De.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(Ae=Ae[_e]),Ae){Te.bindFramebuffer(O.FRAMEBUFFER,Ae);try{const Se=T.texture,Ge=Se.format,qe=Se.type;if(!Oe.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-X&&j>=0&&j<=T.height-H&&O.readPixels(z,j,X,H,Ze.convert(Ge),Ze.convert(qe),ce)}finally{const Se=D!==null?De.get(D).__webglFramebuffer:null;Te.bindFramebuffer(O.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(T,z,j,X,H,ce,_e){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=De.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(Ae=Ae[_e]),Ae){const Se=T.texture,Ge=Se.format,qe=Se.type;if(!Oe.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=T.width-X&&j>=0&&j<=T.height-H){Te.bindFramebuffer(O.FRAMEBUFFER,Ae);const Ue=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ue),O.bufferData(O.PIXEL_PACK_BUFFER,ce.byteLength,O.STREAM_READ),O.readPixels(z,j,X,H,Ze.convert(Ge),Ze.convert(qe),0);const ut=D!==null?De.get(D).__webglFramebuffer:null;Te.bindFramebuffer(O.FRAMEBUFFER,ut);const dt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Vg(O,dt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ue),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ce),O.deleteBuffer(Ue),O.deleteSync(dt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,z=null,j=0){T.isTexture!==!0&&(Ms("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,T=arguments[1]);const X=Math.pow(2,-j),H=Math.floor(T.image.width*X),ce=Math.floor(T.image.height*X),_e=z!==null?z.x:0,Ae=z!==null?z.y:0;P.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,j,0,0,_e,Ae,H,ce),Te.unbindTexture()};const _n=O.createFramebuffer(),ss=O.createFramebuffer();this.copyTextureToTexture=function(T,z,j=null,X=null,H=0,ce=null){T.isTexture!==!0&&(Ms("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,T=arguments[1],z=arguments[2],ce=arguments[3]||0,j=null),ce===null&&(H!==0?(Ms("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=H,H=0):ce=0);let _e,Ae,Se,Ge,qe,Ue,ut,dt,Tt;const vt=T.isCompressedTexture?T.mipmaps[ce]:T.image;if(j!==null)_e=j.max.x-j.min.x,Ae=j.max.y-j.min.y,Se=j.isBox3?j.max.z-j.min.z:1,Ge=j.min.x,qe=j.min.y,Ue=j.isBox3?j.min.z:0;else{const Yt=Math.pow(2,-H);_e=Math.floor(vt.width*Yt),Ae=Math.floor(vt.height*Yt),T.isDataArrayTexture?Se=vt.depth:T.isData3DTexture?Se=Math.floor(vt.depth*Yt):Se=1,Ge=0,qe=0,Ue=0}X!==null?(ut=X.x,dt=X.y,Tt=X.z):(ut=0,dt=0,Tt=0);const ft=Ze.convert(z.format),ve=Ze.convert(z.type);let Ct;z.isData3DTexture?(P.setTexture3D(z,0),Ct=O.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(P.setTexture2DArray(z,0),Ct=O.TEXTURE_2D_ARRAY):(P.setTexture2D(z,0),Ct=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);const rt=O.getParameter(O.UNPACK_ROW_LENGTH),Kt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),En=O.getParameter(O.UNPACK_SKIP_PIXELS),Bt=O.getParameter(O.UNPACK_SKIP_ROWS),Tn=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,vt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,vt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ge),O.pixelStorei(O.UNPACK_SKIP_ROWS,qe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ue);const wt=T.isDataArrayTexture||T.isData3DTexture,rn=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){const Yt=De.get(T),zt=De.get(z),Ht=De.get(Yt.__renderTarget),Pi=De.get(zt.__renderTarget);Te.bindFramebuffer(O.READ_FRAMEBUFFER,Ht.__webglFramebuffer),Te.bindFramebuffer(O.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let Xn=0;Xn<Se;Xn++)wt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,De.get(T).__webglTexture,H,Ue+Xn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,De.get(z).__webglTexture,ce,Tt+Xn)),O.blitFramebuffer(Ge,qe,_e,Ae,ut,dt,_e,Ae,O.DEPTH_BUFFER_BIT,O.NEAREST);Te.bindFramebuffer(O.READ_FRAMEBUFFER,null),Te.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(H!==0||T.isRenderTargetTexture||De.has(T)){const Yt=De.get(T),zt=De.get(z);Te.bindFramebuffer(O.READ_FRAMEBUFFER,_n),Te.bindFramebuffer(O.DRAW_FRAMEBUFFER,ss);for(let Ht=0;Ht<Se;Ht++)wt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Yt.__webglTexture,H,Ue+Ht):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Yt.__webglTexture,H),rn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,zt.__webglTexture,ce,Tt+Ht):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,zt.__webglTexture,ce),H!==0?O.blitFramebuffer(Ge,qe,_e,Ae,ut,dt,_e,Ae,O.COLOR_BUFFER_BIT,O.NEAREST):rn?O.copyTexSubImage3D(Ct,ce,ut,dt,Tt+Ht,Ge,qe,_e,Ae):O.copyTexSubImage2D(Ct,ce,ut,dt,Ge,qe,_e,Ae);Te.bindFramebuffer(O.READ_FRAMEBUFFER,null),Te.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else rn?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(Ct,ce,ut,dt,Tt,_e,Ae,Se,ft,ve,vt.data):z.isCompressedArrayTexture?O.compressedTexSubImage3D(Ct,ce,ut,dt,Tt,_e,Ae,Se,ft,vt.data):O.texSubImage3D(Ct,ce,ut,dt,Tt,_e,Ae,Se,ft,ve,vt):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ce,ut,dt,_e,Ae,ft,ve,vt.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ce,ut,dt,vt.width,vt.height,ft,vt.data):O.texSubImage2D(O.TEXTURE_2D,ce,ut,dt,_e,Ae,ft,ve,vt);O.pixelStorei(O.UNPACK_ROW_LENGTH,rt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Kt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,En),O.pixelStorei(O.UNPACK_SKIP_ROWS,Bt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Tn),ce===0&&z.generateMipmaps&&O.generateMipmap(Ct),Te.unbindTexture()},this.copyTextureToTexture3D=function(T,z,j=null,X=null,H=0){return T.isTexture!==!0&&(Ms("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,X=arguments[1]||null,T=arguments[2],z=arguments[3],H=arguments[4]||0),Ms('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,z,j,X,H)},this.initRenderTarget=function(T){De.get(T).__webglFramebuffer===void 0&&P.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?P.setTextureCube(T,0):T.isData3DTexture?P.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?P.setTexture2DArray(T,0):P.setTexture2D(T,0),Te.unbindTexture()},this.resetState=function(){L=0,C=0,D=null,Te.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}}const bd=[.5,0];function cb(i,e,t){var y,v;const[n,s]=i.parallax??[1,1],r=((y=i.feet)==null?void 0:y.x)??0,a=((v=i.feet)==null?void 0:v.y)??0,o=i.attach?e.x+r:r+e.x*(1-n),c=a+e.y*(1-s),f=i.attach&&i.repeatX?t:i.size[0],h=i.size[1],[d,p]=i.anchor??bd;return{cx:o+(.5-d)*f,cy:c+(.5-p)*h,w:f,h}}function ub(i,e,t,n={index:0,rows:1}){var f;const s=i.uvRect??{x:0,y:0,width:1,height:1};let r=s.width,a=s.x;if(i.attach&&i.repeatX){const h=i.size[0]/(s.width||1),[d]=i.parallax??[1,1];r=t/h,a=s.x+(e.x*d-t/2-(((f=i.feet)==null?void 0:f.x)??0))/h}const o=n.rows||1,c=s.height/o,l=s.y+s.height-(n.index+1)*c;return{repeat:[r,c],offset:[a,l]}}const ac=(i,e=0)=>(i.sortingLayer??0)*1e6+(i.sortingOrder??0)*1e3+e;function fb(i,{i0:e,i1:t,k0:n,k1:s,size:r=1,columns:a=4,rows:o=1,texW:c=128,texH:l=32}){const f=[],h=[],d=[],p=1/a,y=1/o,v=.5/c,_=.5/l;let m=0;for(let R=n;R<=s;R++)for(let b=e;b<=t;b++){const S=i({x:b,y:R});if(!S)continue;const I=(S-1)%a,L=Math.floor((S-1)/a),C=b*r,D=C+r,E=0-R*r,w=E-r,k=I*p+v,U=(I+1)*p-v,F=1-L*y-_,W=1-(L+1)*y+_;f.push(C,w,0,D,w,0,D,E,0,C,E,0),h.push(k,W,U,W,U,F,k,F),d.push(m,m+1,m+2,m,m+2,m+3),m+=4}return{positions:f,uvs:h,indices:d,count:m/4}}var ts=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function wd(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function hb(i){if(i.__esModule)return i;var e=i.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(i).forEach(function(n){var s=Object.getOwnPropertyDescriptor(i,n);Object.defineProperty(t,n,s.get?s:{enumerable:!0,get:function(){return i[n]}})}),t}var Hc={exports:{}};Hc.exports;(function(i){(function(e,t,n){function s(c){var l=this,f=o();l.next=function(){var h=2091639*l.s0+l.c*23283064365386963e-26;return l.s0=l.s1,l.s1=l.s2,l.s2=h-(l.c=h|0)},l.c=1,l.s0=f(" "),l.s1=f(" "),l.s2=f(" "),l.s0-=f(c),l.s0<0&&(l.s0+=1),l.s1-=f(c),l.s1<0&&(l.s1+=1),l.s2-=f(c),l.s2<0&&(l.s2+=1),f=null}function r(c,l){return l.c=c.c,l.s0=c.s0,l.s1=c.s1,l.s2=c.s2,l}function a(c,l){var f=new s(c),h=l&&l.state,d=f.next;return d.int32=function(){return f.next()*4294967296|0},d.double=function(){return d()+(d()*2097152|0)*11102230246251565e-32},d.quick=d,h&&(typeof h=="object"&&r(h,f),d.state=function(){return r(f,{})}),d}function o(){var c=4022871197,l=function(f){f=String(f);for(var h=0;h<f.length;h++){c+=f.charCodeAt(h);var d=.02519603282416938*c;c=d>>>0,d-=c,d*=c,c=d>>>0,d-=c,c+=d*4294967296}return(c>>>0)*23283064365386963e-26};return l}t&&t.exports?t.exports=a:this.alea=a})(ts,i)})(Hc);var db=Hc.exports,Gc={exports:{}};Gc.exports;(function(i){(function(e,t,n){function s(o){var c=this,l="";c.x=0,c.y=0,c.z=0,c.w=0,c.next=function(){var h=c.x^c.x<<11;return c.x=c.y,c.y=c.z,c.z=c.w,c.w^=c.w>>>19^h^h>>>8},o===(o|0)?c.x=o:l+=o;for(var f=0;f<l.length+64;f++)c.x^=l.charCodeAt(f)|0,c.next()}function r(o,c){return c.x=o.x,c.y=o.y,c.z=o.z,c.w=o.w,c}function a(o,c){var l=new s(o),f=c&&c.state,h=function(){return(l.next()>>>0)/4294967296};return h.double=function(){do var d=l.next()>>>11,p=(l.next()>>>0)/4294967296,y=(d+p)/(1<<21);while(y===0);return y},h.int32=l.next,h.quick=h,f&&(typeof f=="object"&&r(f,l),h.state=function(){return r(l,{})}),h}t&&t.exports?t.exports=a:this.xor128=a})(ts,i)})(Gc);var pb=Gc.exports,Vc={exports:{}};Vc.exports;(function(i){(function(e,t,n){function s(o){var c=this,l="";c.next=function(){var h=c.x^c.x>>>2;return c.x=c.y,c.y=c.z,c.z=c.w,c.w=c.v,(c.d=c.d+362437|0)+(c.v=c.v^c.v<<4^(h^h<<1))|0},c.x=0,c.y=0,c.z=0,c.w=0,c.v=0,o===(o|0)?c.x=o:l+=o;for(var f=0;f<l.length+64;f++)c.x^=l.charCodeAt(f)|0,f==l.length&&(c.d=c.x<<10^c.x>>>4),c.next()}function r(o,c){return c.x=o.x,c.y=o.y,c.z=o.z,c.w=o.w,c.v=o.v,c.d=o.d,c}function a(o,c){var l=new s(o),f=c&&c.state,h=function(){return(l.next()>>>0)/4294967296};return h.double=function(){do var d=l.next()>>>11,p=(l.next()>>>0)/4294967296,y=(d+p)/(1<<21);while(y===0);return y},h.int32=l.next,h.quick=h,f&&(typeof f=="object"&&r(f,l),h.state=function(){return r(l,{})}),h}t&&t.exports?t.exports=a:this.xorwow=a})(ts,i)})(Vc);var mb=Vc.exports,Wc={exports:{}};Wc.exports;(function(i){(function(e,t,n){function s(o){var c=this;c.next=function(){var f=c.x,h=c.i,d,p;return d=f[h],d^=d>>>7,p=d^d<<24,d=f[h+1&7],p^=d^d>>>10,d=f[h+3&7],p^=d^d>>>3,d=f[h+4&7],p^=d^d<<7,d=f[h+7&7],d=d^d<<13,p^=d^d<<9,f[h]=p,c.i=h+1&7,p};function l(f,h){var d,p=[];if(h===(h|0))p[0]=h;else for(h=""+h,d=0;d<h.length;++d)p[d&7]=p[d&7]<<15^h.charCodeAt(d)+p[d+1&7]<<13;for(;p.length<8;)p.push(0);for(d=0;d<8&&p[d]===0;++d);for(d==8?p[7]=-1:p[d],f.x=p,f.i=0,d=256;d>0;--d)f.next()}l(c,o)}function r(o,c){return c.x=o.x.slice(),c.i=o.i,c}function a(o,c){o==null&&(o=+new Date);var l=new s(o),f=c&&c.state,h=function(){return(l.next()>>>0)/4294967296};return h.double=function(){do var d=l.next()>>>11,p=(l.next()>>>0)/4294967296,y=(d+p)/(1<<21);while(y===0);return y},h.int32=l.next,h.quick=h,f&&(f.x&&r(f,l),h.state=function(){return r(l,{})}),h}t&&t.exports?t.exports=a:this.xorshift7=a})(ts,i)})(Wc);var gb=Wc.exports,qc={exports:{}};qc.exports;(function(i){(function(e,t,n){function s(o){var c=this;c.next=function(){var f=c.w,h=c.X,d=c.i,p,y;return c.w=f=f+1640531527|0,y=h[d+34&127],p=h[d=d+1&127],y^=y<<13,p^=p<<17,y^=y>>>15,p^=p>>>12,y=h[d]=y^p,c.i=d,y+(f^f>>>16)|0};function l(f,h){var d,p,y,v,_,m=[],R=128;for(h===(h|0)?(p=h,h=null):(h=h+"\0",p=0,R=Math.max(R,h.length)),y=0,v=-32;v<R;++v)h&&(p^=h.charCodeAt((v+32)%h.length)),v===0&&(_=p),p^=p<<10,p^=p>>>15,p^=p<<4,p^=p>>>13,v>=0&&(_=_+1640531527|0,d=m[v&127]^=p+_,y=d==0?y+1:0);for(y>=128&&(m[(h&&h.length||0)&127]=-1),y=127,v=4*128;v>0;--v)p=m[y+34&127],d=m[y=y+1&127],p^=p<<13,d^=d<<17,p^=p>>>15,d^=d>>>12,m[y]=p^d;f.w=_,f.X=m,f.i=y}l(c,o)}function r(o,c){return c.i=o.i,c.w=o.w,c.X=o.X.slice(),c}function a(o,c){o==null&&(o=+new Date);var l=new s(o),f=c&&c.state,h=function(){return(l.next()>>>0)/4294967296};return h.double=function(){do var d=l.next()>>>11,p=(l.next()>>>0)/4294967296,y=(d+p)/(1<<21);while(y===0);return y},h.int32=l.next,h.quick=h,f&&(f.X&&r(f,l),h.state=function(){return r(l,{})}),h}t&&t.exports?t.exports=a:this.xor4096=a})(ts,i)})(qc);var _b=qc.exports,jc={exports:{}};jc.exports;(function(i){(function(e,t,n){function s(o){var c=this,l="";c.next=function(){var h=c.b,d=c.c,p=c.d,y=c.a;return h=h<<25^h>>>7^d,d=d-p|0,p=p<<24^p>>>8^y,y=y-h|0,c.b=h=h<<20^h>>>12^d,c.c=d=d-p|0,c.d=p<<16^d>>>16^y,c.a=y-h|0},c.a=0,c.b=0,c.c=-1640531527,c.d=1367130551,o===Math.floor(o)?(c.a=o/4294967296|0,c.b=o|0):l+=o;for(var f=0;f<l.length+20;f++)c.b^=l.charCodeAt(f)|0,c.next()}function r(o,c){return c.a=o.a,c.b=o.b,c.c=o.c,c.d=o.d,c}function a(o,c){var l=new s(o),f=c&&c.state,h=function(){return(l.next()>>>0)/4294967296};return h.double=function(){do var d=l.next()>>>11,p=(l.next()>>>0)/4294967296,y=(d+p)/(1<<21);while(y===0);return y},h.int32=l.next,h.quick=h,f&&(typeof f=="object"&&r(f,l),h.state=function(){return r(l,{})}),h}t&&t.exports?t.exports=a:this.tychei=a})(ts,i)})(jc);var vb=jc.exports,Sd={exports:{}};const yb={},xb=Object.freeze(Object.defineProperty({__proto__:null,default:yb},Symbol.toStringTag,{value:"Module"})),ka=hb(xb);(function(i){(function(e,t,n){var s=256,r=6,a=52,o="random",c=n.pow(s,r),l=n.pow(2,a),f=l*2,h=s-1,d;function p(S,I,L){var C=[];I=I==!0?{entropy:!0}:I||{};var D=m(_(I.entropy?[S,b(t)]:S??R(),3),C),E=new y(C),w=function(){for(var k=E.g(r),U=c,F=0;k<l;)k=(k+F)*s,U*=s,F=E.g(1);for(;k>=f;)k/=2,U/=2,F>>>=1;return(k+F)/U};return w.int32=function(){return E.g(4)|0},w.quick=function(){return E.g(4)/4294967296},w.double=w,m(b(E.S),t),(I.pass||L||function(k,U,F,W){return W&&(W.S&&v(W,E),k.state=function(){return v(E,{})}),F?(n[o]=k,U):k})(w,D,"global"in I?I.global:this==n,I.state)}function y(S){var I,L=S.length,C=this,D=0,E=C.i=C.j=0,w=C.S=[];for(L||(S=[L++]);D<s;)w[D]=D++;for(D=0;D<s;D++)w[D]=w[E=h&E+S[D%L]+(I=w[D])],w[E]=I;(C.g=function(k){for(var U,F=0,W=C.i,Z=C.j,K=C.S;k--;)U=K[W=h&W+1],F=F*s+K[h&(K[W]=K[Z=h&Z+U])+(K[Z]=U)];return C.i=W,C.j=Z,F})(s)}function v(S,I){return I.i=S.i,I.j=S.j,I.S=S.S.slice(),I}function _(S,I){var L=[],C=typeof S,D;if(I&&C=="object")for(D in S)try{L.push(_(S[D],I-1))}catch{}return L.length?L:C=="string"?S:S+"\0"}function m(S,I){for(var L=S+"",C,D=0;D<L.length;)I[h&D]=h&(C^=I[h&D]*19)+L.charCodeAt(D++);return b(I)}function R(){try{var S;return d&&(S=d.randomBytes)?S=S(s):(S=new Uint8Array(s),(e.crypto||e.msCrypto).getRandomValues(S)),b(S)}catch{var I=e.navigator,L=I&&I.plugins;return[+new Date,e,L,e.screen,b(t)]}}function b(S){return String.fromCharCode.apply(0,S)}if(m(n.random(),t),i.exports){i.exports=p;try{d=ka}catch{}}else n["seed"+o]=p})(typeof self<"u"?self:ts,[],Math)})(Sd);var bb=Sd.exports,wb=db,Sb=pb,Mb=mb,Eb=gb,Tb=_b,Ab=vb,ns=bb;ns.alea=wb;ns.xor128=Sb;ns.xorwow=Mb;ns.xorshift7=Eb;ns.xor4096=Tb;ns.tychei=Ab;var Rb=ns;const Md=wd(Rb),Cb=Object.assign({"/world/scripts/arrival.js":()=>Ie(()=>import("./arrival-BfZeGHHz.js"),__vite__mapDeps([0,1,2])),"/world/scripts/bank.js":()=>Ie(()=>import("./bank-B0gRk3-x.js"),__vite__mapDeps([1,2])),"/world/scripts/camera.js":()=>Ie(()=>import("./camera-CFdr3yOD.js"),[]),"/world/scripts/db.js":()=>Ie(()=>import("./db-HsvaXaUn.js"),__vite__mapDeps([3,2])),"/world/scripts/ground.js":()=>Ie(()=>import("./ground-b0nUTt3G.js"),[]),"/world/scripts/joust-camera.js":()=>Ie(()=>import("./joust-camera-Fg9LmHPp.js"),[]),"/world/scripts/jouster.js":()=>Ie(()=>import("./jouster-BIrWR_i-.js"),__vite__mapDeps([4,5,1,2,6])),"/world/scripts/lib/color.js":()=>Ie(()=>import("./color-DDSg_o2D.js"),[]),"/world/scripts/lib/econ.js":()=>Ie(()=>Promise.resolve().then(()=>Xc),void 0),"/world/scripts/look-default.js":()=>Ie(()=>import("./look-default-BibdNaYP.js"),[]),"/world/scripts/player.js":()=>Ie(()=>import("./player-CqzJShkt.js"),__vite__mapDeps([7,8,9,10])),"/world/scripts/tex-hero.js":()=>Ie(()=>import("./tex-hero-D9FSdSdV.js"),__vite__mapDeps([9,8,10])),"/world/scripts/tex-lance.js":()=>Ie(()=>import("./tex-lance-h9_Q8DQT.js"),[]),"/world/scripts/tex-meadow.js":()=>Ie(()=>import("./tex-meadow-CQRPL3Pn.js"),__vite__mapDeps([11,8,10])),"/world/scripts/tex-sky.js":()=>Ie(()=>import("./tex-sky-H7hQEGu6.js"),__vite__mapDeps([12,8,10])),"/world/scripts/tex-soil.js":()=>Ie(()=>import("./tex-soil-6tL0S4Gb.js"),__vite__mapDeps([13,8,10])),"/world/scripts/tex-tilt.js":()=>Ie(()=>import("./tex-tilt-DATa2CU9.js"),[]),"/world/scripts/tileset-ground.js":()=>Ie(()=>import("./tileset-ground-dAb9Cutk.js"),__vite__mapDeps([14,8])),"/world/scripts/tileset-sand.js":()=>Ie(()=>import("./tileset-sand-D3oqsxai.js"),[]),"/world/scripts/ui.js":()=>Ie(()=>import("./ui-8iQP4AY0.js"),__vite__mapDeps([15,5,2]))}),tl=new Map;function Pb(i){const[e,t=""]=String(i).split("?");return{path:e,params:Object.fromEntries(new URLSearchParams(t))}}function oc(i,e=Lb){if(tl.has(i))return tl.get(i);const t=(async()=>{const{path:n,params:s}=Pb(i),r=Cb["/world/"+n];if(!r)throw new Error(`no texture script ${n}`);const a=await r();if(typeof a.texture!="function")throw new Error(`${n} has no texture(ctx)`);const o=Md.alea(i);let c=null;const l={params:s,random:()=>o(),canvas(f,h){const d=e(Math.max(1,Math.round(f)),Math.max(1,Math.round(h)));return c||(c=d),d.getContext("2d",{willReadFrequently:!0})},atlas(){throw new Error(`${n}: ctx.atlas is not in this port yet`)},wang(){throw new Error(`${n}: ctx.wang is not in this port yet`)}};if(await a.texture(l),!c)throw new Error(`${n} drew no canvas`);return{canvas:c,meta:a.meta??{}}})();return tl.set(i,t),t}function Lb(i,e){const t=document.createElement("canvas");return t.width=i,t.height=e,t}const df=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],ya=[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],pf=[.3127,.329],Ib=90,mf=.04,xa=(i,e)=>i.map(t=>e[0].map((n,s)=>t.reduce((r,a,o)=>r+a*e[o][s],0))),gf=(i,e)=>i.map(t=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2]);function _f([[i,e,t],[n,s,r],[a,o,c]]){const l=s*c-r*o,f=-(n*c-r*a),h=n*o-s*a,d=i*l+e*f+t*h;return[[l/d,-(e*c-t*o)/d,(e*r-t*s)/d],[f/d,(i*c-t*a)/d,-(i*r-t*n)/d],[h/d,-(i*o-e*a)/d,(i*s-e*n)/d]]}function nl(i){const e=(.860117757+.000154118254*i+128641212e-15*i*i)/(1+.000842420235*i+708145163e-15*i*i),t=(.317398726+422806245e-13*i+420481691e-16*i*i)/(1-289741816e-13*i+161456053e-15*i*i);return[e,t]}const Db=([i,e])=>[4*i/(12*e-2*i+3),6*e/(12*e-2*i+3)],kb=([i,e])=>[3*i/(2*i-8*e+4),2*e/(2*i-8*e+4)],vf=([i,e])=>[i/e,1,(1-i-e)/e];function Ob(i=0,e=0){if(!i&&!e)return[[1,0,0],[0,1,0],[0,0,1]];const t=6504,n=1e6/t,s=1e6/(n+Ib*i),r=nl(t),a=nl(s),o=Db(pf),c=a[0]-r[0],l=a[1]-r[1],f=nl(t+10),h=f[0]-r[0],d=f[1]-r[1],p=Math.hypot(h,d)||1,y=-d/p,v=h/p,_=v>=0?1:-1,m=[o[0]+c+_*y*mf*e,o[1]+l+_*v*mf*e],R=gf(ya,vf(pf)),b=gf(ya,vf(kb(m))),S=[[b[0]/R[0],0,0],[0,b[1]/R[1],0],[0,0,b[2]/R[2]]];return xa(_f(df),xa(_f(ya),xa(S,xa(ya,df))))}function Nb(i,e={}){const t={exposure:1,saturation:1,contrast:1,brightness:0,temperature:0,tint:0,vignette:0,roundness:2,feather:.45,vignetteColor:[0,0,0],grain:0};if(!(i!=null&&i.look))return t;const n={op:"scene"};let s=i.look({scene:n,param:(a,o)=>e[a]??o});const r=[];for(;s&&s!==n;)r.unshift(s),s=s.input;for(const a of r){if(a.op==="grade")for(const o of["exposure","saturation","contrast","brightness","temperature","tint"])a.opts[o]!=null&&(t[o]=a.opts[o]);a.op==="vignette"&&(t.vignette=a.intensity,t.roundness=a.opts.roundness??2,t.feather=a.opts.feather??.45,t.vignetteColor=a.opts.color??[0,0,0]),a.op==="grain"&&(t.grain=a.intensity)}return t}const Ub=`
uniform sampler2D tScene; uniform float exposure, contrast, brightness, saturation, vigI, vigRound, vigFeather, grainI, time, neutralOn;
uniform mat3 wb; uniform vec3 vigColor; uniform vec2 res;
varying vec2 vUv;
vec3 neutral(vec3 c) {
  const float startCompression = 0.8 - 0.04; const float desaturation = 0.15;
  float x = min(c.r, min(c.g, c.b)); float offset = x < 0.08 ? x - 6.25 * x * x : 0.04; c -= offset;
  float peak = max(c.r, max(c.g, c.b)); if (peak < startCompression) return c;
  const float d = 1.0 - startCompression; float newPeak = 1.0 - d * d / (peak + d - startCompression);
  c *= newPeak / peak; float g = 1.0 - 1.0 / (desaturation * (peak - newPeak) + 1.0);
  return mix(c, vec3(newPeak), g);
}
vec3 enc(vec3 c) { return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c)); }
vec3 dec(vec3 c) { return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)); }
float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
void main() {
  vec3 c = wb * (texture2D(tScene, vUv).rgb * exposure);
  c = neutralOn > 0.5 ? neutral(max(c, 0.0)) : c;
  vec3 e = enc(clamp(c, 0.0, 1.0));
  e = clamp((e - 0.5) * contrast + 0.5 + brightness, 0.0, 1.0);
  vec3 l = dec(e); float Y = dot(l, vec3(0.2126, 0.7152, 0.0722));
  l = clamp(mix(vec3(Y), l, saturation), 0.0, 1.0);
  if (vigI > 0.0) { vec2 q = abs(vUv * 2.0 - 1.0); float r = pow(pow(q.x, vigRound) + pow(q.y, vigRound), 1.0 / vigRound);
    float v = smoothstep(1.0 - vigFeather, 1.0, r) * vigI; l = mix(l, vigColor, clamp(v, 0.0, 1.0)); }
  e = enc(l);
  if (grainI > 0.0) e = clamp(e + (hash(gl_FragCoord.xy + time) - 0.5) * grainI, 0.0, 1.0);
  gl_FragColor = vec4(e, 1.0);
}`;class Fb{constructor(e,t,{neutral:n=!0}={}){this.renderer=e,this.rt=new Ai(2,2,{type:qn,colorSpace:jt,depthBuffer:!1});const s=Ob(t.temperature,t.tint),r=new et().set(s[0][0],s[0][1],s[0][2],s[1][0],s[1][1],s[1][2],s[2][0],s[2][1],s[2][2]);this.material=new Un({uniforms:{tScene:{value:this.rt.texture},exposure:{value:t.exposure},contrast:{value:t.contrast},brightness:{value:t.brightness},saturation:{value:t.saturation},wb:{value:r},neutralOn:{value:n?1:0},vigI:{value:t.vignette},vigRound:{value:t.roundness},vigFeather:{value:t.feather},vigColor:{value:new $(...t.vignetteColor)},grainI:{value:t.grain},time:{value:0},res:{value:new xt(2,2)}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:Ub,depthTest:!1,depthWrite:!1}),this.quad=new sn(new hi(2,2),this.material),this.quad.frustumCulled=!1,this.scene=new hd,this.scene.add(this.quad),this.camera=new Bc(-1,1,1,-1,0,1)}setSize(e,t){this.rt.setSize(Math.max(2,e),Math.max(2,t)),this.material.uniforms.res.value.set(e,t)}render(e,t,n=0){const s=this.renderer;s.setRenderTarget(this.rt),s.clear(),s.render(e,t),s.setRenderTarget(null),this.material.uniforms.time.value=n,s.render(this.scene,this.camera)}}const yf=.4,Bb=Object.freeze({r:.5,g:.5,b:.5,a:1}),Oa=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4),Ns=(i,e,t)=>Math.min(t,Math.max(e,i));function Ls(i,e=1){const t=String(i).trim();return t.endsWith("%")?Number.parseFloat(t)/100*e:Number.parseFloat(t)}function xf(i,e,t){const n=Math.pow(i+.3963377774*e+.2158037573*t,3),s=Math.pow(i-.1055613458*e-.0638541728*t,3),r=Math.pow(i-.0894841775*e-1.291485548*t,3);return[4.0767416621*n-3.3077115913*s+.2309699292*r,-1.2684380046*n+2.6097574011*s-.3413193965*r,-.0041960863*n-.7034186147*s+1.707614701*r]}function bf([i,e,t]){const n=Math.cbrt(.4122214708*i+.5363325363*e+.0514459929*t),s=Math.cbrt(.2119034982*i+.6806995451*e+.1073969566*t),r=Math.cbrt(.0883024619*i+.2817188376*e+.6299787005*t);return[.2104542553*n+.793617785*s-.0040720468*r,1.9779984951*n-2.428592205*s+.4505937099*r,.0259040371*n+.7827717662*s-.808675766*r]}const il=.02,wf=1e-4,Sf=i=>i.every(e=>e>=0&&e<=1),Mf=i=>i.map(e=>Ns(e,0,1)),Ef=(i,e)=>Math.hypot(i[0]-e[0],i[1]-e[1],i[2]-e[2]);function zb(i,e,t){const n=t*Math.PI/180,s=Math.cos(n),r=Math.sin(n),a=p=>[i,p*s,p*r];let o=a(e),c=xf(...o);if(Sf(c))return c;let l=Mf(c);if(Ef(bf(l),o)<il)return l;let f=0,h=e,d=!0;for(;h-f>wf;){const p=(f+h)/2;if(o=a(p),c=xf(...o),d&&Sf(c)){f=p;continue}l=Mf(c);const y=Ef(bf(l),o);if(y<il){if(il-y<wf)return l;d=!1,f=p}else h=p}return l}function Hb(i){const[e,t]=i.split("/"),n=e.trim().split(/[\s,]+/);if(n.length<3)return null;const s=Ns(Ls(n[0]),0,1),r=Ns(Ls(n[1],yf),0,yf),a=Ls(n[2]);if(![s,r,a].every(Number.isFinite))return null;const[o,c,l]=s>=1?[1,1,1]:s<=0?[0,0,0]:zb(s,r,a),f=t===void 0?1:Ns(Ls(t),0,1);return{r:o,g:c,b:l,a:Number.isFinite(f)?f:1}}function Gb(i){const e=i.length===3||i.length===4?[...i].map(n=>n+n).join(""):i;if(!/^[0-9a-f]{6}([0-9a-f]{2})?$/i.test(e))return null;const t=n=>Number.parseInt(e.slice(n,n+2),16)/255;return{r:Oa(t(0)),g:Oa(t(2)),b:Oa(t(4)),a:e.length===8?t(6):1}}function Vb(i){const e=i.split(/[\s,/]+/).filter(Boolean);if(e.length<3)return null;const t=s=>Oa(Ns(Ls(s,255)/255,0,1)),n={r:t(e[0]),g:t(e[1]),b:t(e[2]),a:e[3]===void 0?1:Ns(Ls(e[3]),0,1)};return[n.r,n.g,n.b,n.a].every(Number.isFinite)?n:null}function Tf(i){const e=String(i??"").trim().toLowerCase();let t=null;return e.startsWith("#")?t=Gb(e.slice(1)):e.startsWith("oklch(")&&e.endsWith(")")?t=Hb(e.slice(6,-1)):/^rgba?\(/.test(e)&&e.endsWith(")")&&(t=Vb(e.slice(e.indexOf("(")+1,-1))),t??{...Bb}}const Wb={alpha:Sn,add:Mr,multiply:Wa,subtract:Va},Af=[1,.85,.72],qb=1e3,jb=.75,Xb=.95,$b=2,Kb=8,Yb=2,Jb=3,fo=i=>{const e=String(i),t="/realm/play/";return e.startsWith("/cdn/")?t+"cdn/"+e.slice(5).replace(/\.png$/i,".webp")+"?v="+Jb:e.startsWith("/art/")?t+e.slice(1):null},Zb=i=>String(i).replace(/\/cdn\/(value\.[0-9a-f]{64}\.(?:png|webp|mp3))/g,e=>fo(e));class Qb{constructor(e,{toneMapping:t="neutral",look:n=null,scale:s=null}={}){this.renderer=new lb({canvas:e,antialias:!1,alpha:!1,powerPreference:"high-performance"}),this.base=Math.min(devicePixelRatio||1,2),this.forced=s,this.step=0,this.gov={ms:[],sum:0,slow:0,keep:0,flips:0,sinceUp:1/0},this.renderer.setPixelRatio(this.scale),this.renderer.outputColorSpace=jt,this.renderer.toneMapping=oi,this.look=new Fb(this.renderer,n??{exposure:1,saturation:1,contrast:1,brightness:0,temperature:0,tint:0,vignette:0,roundness:2,feather:.45,vignetteColor:[0,0,0],grain:0},{neutral:t==="neutral"}),this.scene=new hd,this.camera=new Bc(-1,1,1,-1,.1,1e3),this.camera.position.set(0,0,100),this.sprites=[],this.loader=new md,this.missing=[],this.t=0}worldToScreen(e){const t=new $(e.x,e.y,0).project(this.camera);return{x:(t.x+1)/2*this.cssW,y:(1-t.y)/2*this.cssH,onScreen:Math.abs(t.x)<=1&&Math.abs(t.y)<=1}}get scale(){return this.forced??this.base*Af[this.step]}resize(e,t){this.cssW=e,this.cssH=t,this.renderer.setPixelRatio(this.scale),this.renderer.setSize(e,t,!1);const n=this.renderer.getPixelRatio();this.look.setSize(Math.round(e*n),Math.round(t*n)),this.aspect=e/Math.max(1,t)}govern(e){const t=this.gov;if(this.forced!=null||!(e>0))return;if(e>250){t.ms.length=0,t.sum=0;return}if(t.ms.push(e),t.sum+=e,t.sum<qb)return;const n=[...t.ms].sort((a,o)=>a-o)[t.ms.length>>1],s=t.sum/t.ms.length;t.ms.length=0,t.sum=0,t.sinceUp++,this.refresh=Math.max(4,Math.min(this.refresh??n,n));const r=this.refresh/s;r<jb?(t.keep=0,++t.slow>=$b&&this.step<Af.length-1&&(t.slow=0,t.sinceUp<=4&&t.flips++,this.step++,this.resize(this.cssW,this.cssH))):r>Xb?(t.slow=0,++t.keep>=Kb&&this.step>0&&t.flips<Yb&&(t.keep=0,t.sinceUp=0,this.step--,this.resize(this.cssW,this.cssH))):(t.slow=0,t.keep=0)}setSky(e){if((e==null?void 0:e.kind)!=="gradient")return;const t=Tf(e.horizon),n=Tf(e.zenith),s=new Un({uniforms:{h:{value:new $(t.r,t.g,t.b)},z:{value:new $(n.r,n.g,n.b)}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 h; uniform vec3 z; varying vec2 vUv; void main() { gl_FragColor = vec4(mix(h, z, vUv.y), 1.0); }",depthTest:!1,depthWrite:!1});this.sky=new sn(new hi(1,1),s),this.sky.renderOrder=-1e12,this.sky.frustumCulled=!1,this.scene.add(this.sky)}async picture(e,t){let n,s={};const r=fo(e);if(r)try{n=await this.loader.loadAsync(r)}catch{return this.missing.push(e),null}else{const o=await oc(e);n=new sc(o.canvas),s=o.meta}n.colorSpace=jt;const a=(t??s.filter??(r?"linear":"pixel"))==="linear";return n.magFilter=a?ln:Wt,n.minFilter=a?Gn:Wt,n.generateMipmaps=a,n.wrapS=Er,n.wrapT=ii,{tex:n,meta:s}}async addSprite(e,t){var l,f;const n=e.sprite,s=await this.picture(n.texture,n.filter);if(!s)return null;(((l=n.uvRect)==null?void 0:l.height)??1)>1&&(s.tex.wrapT=Er);const r=new Rr({map:s.tex,transparent:!0,depthTest:!1,depthWrite:!1,opacity:n.opacity??1,blending:Wb[n.blend]??Sn});n.tint!=null&&(r.color=Array.isArray(n.tint)?new mt(n.tint[0],n.tint[1],n.tint[2]):new mt(n.tint));const a=new sn(new hi(1,1),r);a.renderOrder=ac(n,t),a.frustumCulled=!1,this.scene.add(a);const o=e.feetPosition??{},c={id:e.id,mesh:a,meta:s.meta,s:{feet:o,attach:o.attach==="camera",size:n.size??[1,1],anchor:n.anchor,parallax:n.parallax,repeatX:!!n.repeatX,uvRect:n.uvRect},clip:((f=Object.values(e.mixer??{})[0])==null?void 0:f.clip)??s.meta.defaultAnimation??null};return this.sprites.push(c),c}async setTiles(e,t){const n=await oc(e.tileset),s=new sc(n.canvas);s.colorSpace=jt;const r=(n.meta.filter??"pixel")==="linear";s.magFilter=s.minFilter=r?ln:Wt,s.generateMipmaps=!1;const a=e.tilesetColumns??4,o=n.canvas.width/a,c=fb(t.tileAt,{i0:-260,i1:260,k0:0,k1:40,size:e.tileSize??1,columns:a,rows:Math.max(1,Math.round(n.canvas.height/o)),texW:n.canvas.width,texH:n.canvas.height}),l=new di;l.setAttribute("position",new ci(c.positions,3)),l.setAttribute("uv",new ci(c.uvs,2)),l.setIndex(c.indices);const f=new sn(l,new Rr({map:s,transparent:!0,depthTest:!1,depthWrite:!1}));f.renderOrder=ac({sortingLayer:0},0),f.frustumCulled=!1,this.scene.add(f),this.tiles=f}frame(e,t){var o;this.t+=t;const n=e.orthoSize,s=n*this.aspect,r=s*2*1.1,a=this.camera;a.left=-s,a.right=s,a.top=n,a.bottom=-n,a.position.set(e.x,e.y,100),a.updateProjectionMatrix(),this.sky&&(this.sky.position.set(e.x,e.y,-50),this.sky.scale.set(s*2.02,n*2.02,1));for(const c of this.sprites){const l=cb(c.s,e,r);c.mesh.position.set(l.cx,l.cy,0),c.mesh.scale.set(l.w,l.h,1);const f=c.meta.rows??1,h=c.meta.fps??0,d=c.clip&&((o=c.meta.animations)==null?void 0:o[c.clip])||null,p=d&&h?d[Math.floor(this.t*h)%d.length]:0,y=ub(c.s,e,r,{index:p,rows:f}),v=c.mesh.material.map;v.repeat.set(y.repeat[0],y.repeat[1]),v.offset.set(y.offset[0],y.offset[1])}this.look.render(this.scene,a,this.t)}}const ew=16/9,tw=1.2,sl=1.9,nw=.5,Rf=3,iw=.22,sw=Object.assign({"/world/scripts/arrival.js":()=>Ie(()=>import("./arrival-BfZeGHHz.js"),__vite__mapDeps([0,1,2])),"/world/scripts/bank.js":()=>Ie(()=>import("./bank-B0gRk3-x.js"),__vite__mapDeps([1,2])),"/world/scripts/camera.js":()=>Ie(()=>import("./camera-CFdr3yOD.js"),[]),"/world/scripts/db.js":()=>Ie(()=>import("./db-HsvaXaUn.js"),__vite__mapDeps([3,2])),"/world/scripts/ground.js":()=>Ie(()=>import("./ground-b0nUTt3G.js"),[]),"/world/scripts/joust-camera.js":()=>Ie(()=>import("./joust-camera-Fg9LmHPp.js"),[]),"/world/scripts/jouster.js":()=>Ie(()=>import("./jouster-BIrWR_i-.js"),__vite__mapDeps([4,5,1,2,6])),"/world/scripts/lib/color.js":()=>Ie(()=>import("./color-DDSg_o2D.js"),[]),"/world/scripts/lib/econ.js":()=>Ie(()=>Promise.resolve().then(()=>Xc),void 0),"/world/scripts/look-default.js":()=>Ie(()=>import("./look-default-BibdNaYP.js"),[]),"/world/scripts/player.js":()=>Ie(()=>import("./player-CqzJShkt.js"),__vite__mapDeps([7,8,9,10])),"/world/scripts/tex-hero.js":()=>Ie(()=>import("./tex-hero-D9FSdSdV.js"),__vite__mapDeps([9,8,10])),"/world/scripts/tex-lance.js":()=>Ie(()=>import("./tex-lance-h9_Q8DQT.js"),[]),"/world/scripts/tex-meadow.js":()=>Ie(()=>import("./tex-meadow-CQRPL3Pn.js"),__vite__mapDeps([11,8,10])),"/world/scripts/tex-sky.js":()=>Ie(()=>import("./tex-sky-H7hQEGu6.js"),__vite__mapDeps([12,8,10])),"/world/scripts/tex-soil.js":()=>Ie(()=>import("./tex-soil-6tL0S4Gb.js"),__vite__mapDeps([13,8,10])),"/world/scripts/tex-tilt.js":()=>Ie(()=>import("./tex-tilt-DATa2CU9.js"),[]),"/world/scripts/tileset-ground.js":()=>Ie(()=>import("./tileset-ground-dAb9Cutk.js"),__vite__mapDeps([14,8])),"/world/scripts/tileset-sand.js":()=>Ie(()=>import("./tileset-sand-D3oqsxai.js"),[]),"/world/scripts/ui.js":()=>Ie(()=>import("./ui-8iQP4AY0.js"),__vite__mapDeps([15,5,2]))});async function rw(i,e,{screenAspect:t=!1}={}){const n=await Cc(i.camera),s=[].concat(n.behavior??[]),r=await Promise.all(s.map(async c=>{const l=sw["/world/"+String(c).split("#")[0]];if(!l)throw new Error(`no camera behavior ${c}`);return l()})),a={state:structuredClone(n.state??{}),target:e,feetPosition:{x:0,y:0,z:15},rotation:null},o={x:null,y:null,on:!1};return{self:a,update(c,l,f){var L,C,D;const h=.008333333333333333;let d=Math.min(c,.25);const p=t?{aspect:f}:{};for(;d>1e-6;){const E=Math.min(h,d);d-=E;const w={self:a,now:()=>l,world:{camera:p},query:()=>[],getObject:()=>null};for(const k of r)(L=k.update)==null||L.call(k,w,E)}const y=a.state.orthoSize??((C=n.state)==null?void 0:C.orthoSize)??6;let v=a.feetPosition.x,_=a.feetPosition.y;const m=e.state??{},R=m.phase&&m.phase!=="armory"&&m.phase!=="end",b=y*f,S=e.feetPosition.x,I=S<v-b+sl||S>v+b-sl;if(!t&&R&&f>0&&f<ew&&(f<tw||I)){const E=(D=m.hud)==null?void 0:D.oppX,w=m.dir||1;let k=S+w*(b-sl);if(E!=null){const W=2*(b-nw),Z=Math.min(1,Math.max(0,(W+Rf-Math.abs(E-S))/Rf));k+=((S+E)/2-k)*Z}const U=f<1?y*(1-2*iw):_,F=1-Math.exp(-6*Math.min(c,.25));o.on||(o.x=v,o.y=_,o.on=!0),o.x+=(k-o.x)*F,o.y+=(U-o.y)*F,v=o.x,_=o.y}else if(o.on){const E=1-Math.exp(-6*Math.min(c,.25));o.x+=(v-o.x)*E,o.y+=(_-o.y)*E,Math.abs(o.x-v)<.02&&Math.abs(o.y-_)<.02?o.on=!1:(v=o.x,_=o.y)}return{x:v,y:_,orthoSize:y}}}}const aw=1/30,ow=.25,Xa=i=>i&&typeof i=="object"&&!Array.isArray(i),Cr=i=>({x:Number((i==null?void 0:i.x)??0),y:Number((i==null?void 0:i.y)??0),z:Number((i==null?void 0:i.z)??0)}),Cf={linear:i=>i,easeInQuad:i=>i*i,easeOutQuad:i=>i*(2-i),easeInOutQuad:i=>i<.5?2*i*i:-1+(4-2*i)*i,easeOutCubic:i=>1-Math.pow(1-i,3),easeInCubic:i=>i*i*i,easeInOutCubic:i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2};class lw{constructor(e,t,n){var s;this.id=e,this.room=n,this.parent=t.parent??null,this.tags=[...t.tags??[]],this.state=structuredClone(t.state??{}),this.feetPosition=Cr(t.feetPosition),this.attach=((s=t.feetPosition)==null?void 0:s.attach)??null,this.velocity=Cr(t.velocity),this.rotation={yaw:0,pitch:0,roll:0,...Xa(t.rotation)?t.rotation:{}},this.sprite=t.sprite?{...t.sprite}:null,this.physics=t.physics??null,this.visible=t.visible!==!1,this.fx=t.fx??null,this.anim={},this.audio=t.audio??null,this.scope=t.scope??null,this.audience=t.audience??null,this.lifetime=t.lifetime??null,this.bornAt=n.nowMs,this.grounded=!1,this.userId=t.userId??null,this.displayName=t.displayName??null,this.isLocal=t.isLocal??!0,this.behaviors=[].concat(t.behavior??[]),this.mods=[],this.fields={}}get body(){return Xa(this.physics)?this.physics.body:this.physics}}function ji(i){if(!i)return null;if(i._handle)return i._handle;const e=i.room,t={get id(){return i.id},get objectId(){return i.id},get tags(){return i.tags},get parent(){return i.parent},get state(){return i.state},set state(n){i.state=Xa(n)?n:{}},get feetPosition(){return i.feetPosition},set feetPosition(n){i.feetPosition=Cr(n)},get velocity(){return i.velocity},set velocity(n){i.velocity=Cr(n)},get rotation(){return i.rotation},set rotation(n){i.rotation={yaw:0,pitch:0,roll:0,...Xa(n)?n:{}}},get sprite(){return i.sprite},set sprite(n){i.sprite=n?{...n}:null},get visible(){return i.visible},set visible(n){i.visible=!!n},get fx(){return i.fx},set fx(n){i.fx=n},get anim(){return i.anim},get audio(){return i.audio},set audio(n){i.audio=n},get grounded(){return i.grounded},get userId(){return i.userId},get displayName(){return i.displayName},get isLocal(){return i.isLocal},get children(){return[...e.entities.values()].filter(n=>n.parent===i.id).map(ji)},get lifetime(){return i.lifetime},set lifetime(n){i.lifetime=n,i.bornAt=e.nowMs}};return i._handle=new Proxy(t,{get:(n,s)=>s in n?n[s]:i.fields[s],set:(n,s,r)=>(s in n?n[s]=r:i.fields[s]=r,!0),has:(n,s)=>s in n||s in i.fields,deleteProperty:(n,s)=>(delete i.fields[s],!0)}),i._handle}class cw{constructor(e={}){this.roomId=e.roomId??"web",this.scripts=e.scripts??{},this.gravity=Cr(e.gravity??{y:-9.81}),this.groundY=e.groundY??0,this.sqlFor=e.sql??null,this.startMs=e.startMs??Date.now(),this.elapsed=0,this.clock=0,this.entities=new Map,this.timers=new Map,this.tweens=[],this.listeners=new Map,this.sinks={},this.session={},this.worldState={},this.placeState={},this.rng=Md.alea(e.seed??String(this.startMs)),this.timerSeq=0,this.timeScale=1,this.freezeUntil=0,this.slowUntil=0,this.inputs=new Map,this.inputSeq=0,this.errors=[],this.cameraState={}}get nowMs(){return this.startMs+this.clock}async loadModule(e){const t=String(e).split("#")[0],n=this.scripts["/world/"+t];if(!n)throw new Error(`no behavior ${t}`);return n()}ctxOf(e,t){const n=this,s=ji(e);return{self:s,state:s?s.state:n.worldState,player:e&&e.tags.includes("player")?s:null,session:n.session,world:{state:n.worldState,camera:n.cameraState,mode:"dev",id:n.roomId},place:{state:n.placeState,gravity:n.gravity,players:n.players().map(ji)},now:()=>n.nowMs,random:()=>n.rng(),getRoomId:()=>n.roomId,sql:n.sqlFor?n.sqlFor((e==null?void 0:e.userId)??null):null,after:(r,a,o)=>n.after(e,t,r,a,o),cancel:r=>n.timers.delete(r),emit:(r,a,o)=>n.emit(r,a,o,e),on:(r,a)=>n.on(r,a),spawn:(r,a)=>n.spawn(r,a,e),destroy:r=>n.destroy(r),getObject:r=>ji(n.entities.get(r)),query:(r={})=>n.query(r,e),worldToScreen:r=>n.worldToScreen?n.worldToScreen(r):null,log:(...r)=>console.log("[world]",...r),_room:n}}async attachBehaviors(e){e.mods=await Promise.all(e.behaviors.map(t=>this.loadModule(t)));for(const t of e.mods)this.call(e,t,"onSpawn")}call(e,t,n,...s){if(typeof(t==null?void 0:t[n])=="function")try{const r=t[n](this.ctxOf(e,t),...s);return r&&typeof r.then=="function"&&r.catch(a=>this.fault(e,n,a)),r}catch(r){this.fault(e,n,r)}}fault(e,t,n){this.errors.push({at:this.nowMs,id:e==null?void 0:e.id,hook:t,message:String((n==null?void 0:n.message)??n)}),console.error(`[world] ${(e==null?void 0:e.id)??"room"} ${t}:`,n)}spawn(e,t,n){const s=typeof e=="string"?t??{}:e??{};let r=typeof e=="string"?e:s.id??`obj-${++this.timerSeq}`;const a=s.parent?`${s.parent}/${r}`:r;this.entities.has(a)&&this.destroy(a);const o=new lw(a,s,this);return this.entities.set(a,o),o.behaviors.length&&this.attachBehaviors(o).catch(c=>this.fault(o,"load",c)),a}destroy(e){for(const t of[].concat(e??[])){const n=this.entities.get(t);if(n){for(const s of[...this.entities.values()])s.parent===t&&this.destroy(s.id);for(const s of n.mods)this.call(n,s,"onDestroy");this.entities.delete(t);for(const[s,r]of this.timers)r.owner===t&&this.timers.delete(s)}}}query(e,t){let n=[...this.entities.values()];if(e.ignoreSelf!==!1&&t&&(n=n.filter(s=>s!==t)),e.tags&&(n=n.filter(s=>e.tags.every(r=>s.tags.includes(r)))),e.radius!=null&&t){const s=this.worldPosition(t);n=n.filter(r=>{const a=this.worldPosition(r);return Math.hypot(a.x-s.x,a.y-s.y,a.z-s.z)<=e.radius})}return e.select==="ids"?n.map(s=>s.id):n.map(ji)}players(){return[...this.entities.values()].filter(e=>e.tags.includes("player"))}after(e,t,n,s,r){const a=`t${++this.timerSeq}`;return this.timers.set(a,{owner:(e==null?void 0:e.id)??null,mod:t,name:s,payload:r,due:this.clock+Math.max(0,n)*1e3}),a}on(e,t){return this.listeners.has(e)||this.listeners.set(e,new Set),this.listeners.get(e).add(t),()=>{var n;return(n=this.listeners.get(e))==null?void 0:n.delete(t)}}emit(e,t,n,s){var r,a;e==="hitstop"&&(this.freezeUntil=Math.max(this.freezeUntil,this.clock+((t==null?void 0:t.duration)??0)*1e3)),e==="slowMo"&&(this.slowUntil=this.clock+((t==null?void 0:t.duration)??0)*1e3,this.slowScale=(t==null?void 0:t.scale)??.4),(a=(r=this.sinks)[e])==null||a.call(r,t,n,s);for(const o of this.listeners.get(e)??[])try{o(t,n)}catch(c){this.fault(s,"on:"+e,c)}}animate(e,t,n={}){const s=this.entities.get(typeof e=="string"?e:e==null?void 0:e.id);if(!s)return;const r=Object.entries(t).map(([a,o])=>{const c=a.split("."),l=()=>c.reduce((h,d)=>h==null?void 0:h[d],s);let f=Array.isArray(o)?o.slice():[l(),o];return f=f.map((h,d)=>typeof h=="string"&&/^[+-]=/.test(h)?Number(d?f[d-1]:l())+Number(h.replace("=","")):Number(h)),{keys:c,pts:f}});this.tweens.push({e:s,tracks:r,t0:this.elapsed+(n.delay??0)*1e3,dur:Math.max(1,(n.duration??1)*1e3),ease:Cf[n.easing]??Cf.linear})}stepTweens(){this.tweens=this.tweens.filter(e=>{if(!this.entities.has(e.e.id))return!1;if(this.elapsed<e.t0)return!0;const t=Math.min(1,(this.elapsed-e.t0)/e.dur),n=e.ease(t);for(const s of e.tracks){const r=s.pts.length-1,a=n*r,o=Math.min(r-1,Math.floor(a)),c=a-o,l=r===0?s.pts[0]:s.pts[o]+(s.pts[o+1]-s.pts[o])*c,f=s.keys.slice(0,-1).reduce((h,d)=>h[d]??(h[d]={}),e.e);f[s.keys[s.keys.length-1]]=l}return t<1})}worldPosition(e){const t={...e.feetPosition};let n=e.parent?this.entities.get(e.parent):null;for(;n;)t.x+=n.feetPosition.x,t.y+=n.feetPosition.y,t.z+=n.feetPosition.z,n=n.parent?this.entities.get(n.parent):null;return t}advance(e){let t=Math.max(0,e)*1e3,n=Math.min(Math.max(0,e),ow);for(;n>1e-6;){const s=Math.min(n,aw);n-=s,t-=s*1e3,this.clock+=s*1e3;const r=this.clock<this.freezeUntil,a=r?0:this.clock<this.slowUntil?this.slowScale:1;this.tick(s*a)}t>0&&(this.clock+=t)}tick(e){this.elapsed+=e*1e3;const t=[...this.entities.values()];for(const n of t){const s=this.inputs.get(n.id);if(s){const r=s();Object.keys(r.pressed).length&&this.inputSeq++;for(const a of n.mods)this.call(n,a,"onInput",r)}}for(const n of t)if(this.entities.has(n.id))for(const s of n.mods)this.call(n,s,"update",e);for(const n of[...this.entities.values()])(n.body==="character"||n.body==="dynamic")&&(n.feetPosition={x:n.feetPosition.x+n.velocity.x*e,y:n.feetPosition.y+n.velocity.y*e,z:n.feetPosition.z},n.grounded=!1,n.feetPosition.y<=this.groundY&&(n.feetPosition.y=this.groundY,n.velocity.y<0&&(n.velocity={...n.velocity,y:0}),n.grounded=!0)),n.lifetime!=null&&this.nowMs-n.bornAt>=n.lifetime*1e3&&this.destroy(n.id);this.stepTweens();for(const[n,s]of[...this.timers]){if(s.due>this.clock)continue;this.timers.delete(n);const r=s.owner?this.entities.get(s.owner):null;s.owner&&!r||this.call(r,s.mod,s.name,s.payload)}}}const uw=.1,Ed=-.6,Td=nt.map_fragment.replace("texture2D( map, vMapUv )",`texture2D( map, vMapUv, ${Ed.toFixed(2)} )`);Td.includes(Ed.toFixed(2))||console.warn("[justa] three's map chunk changed: the mip bias is off");const fw={alpha:Sn,add:Mr,multiply:Wa,subtract:Va};class hw{constructor(e,t,{hideBelow:n=null}={}){this.stage=e,this.room=t,this.hideBelow=n,this.views=new Map,this.sources=new Map,this.order=new Map,this.seq=0,this.loader=new md}source(e,t){const n=e+"|"+(t??"");return this.sources.has(n)||this.sources.set(n,(async()=>{const s=fo(e);let r,a={};if(s)r=await this.loader.loadAsync(s);else{const c=await oc(e);r=new sc(c.canvas),a=c.meta}r.colorSpace=jt;const o=(t??a.filter??(s?"linear":"pixel"))==="linear";return r.magFilter=o?ln:Wt,r.minFilter=o?Gn:Wt,r.generateMipmaps=o,{tex:r,meta:a}})().catch(s=>(console.warn("[justa] picture",e,(s==null?void 0:s.message)??s),null))),this.sources.get(n)}view(e){let t=this.views.get(e.id);if(!t){const n=new un,s=new Rr({transparent:!0,depthTest:!1,depthWrite:!1,visible:!1});s.onBeforeCompile=a=>{a.fragmentShader=a.fragmentShader.replace("#include <map_fragment>",Td)},s.customProgramCacheKey=()=>"sprite-bias";const r=new sn(new hi(1,1),s);r.frustumCulled=!1,n.add(r),this.stage.scene.add(n),t={pivot:n,mesh:r,ref:null,pending:null,seq:++this.seq},this.views.set(e.id,t)}return t}setTexture(e,t){const n=t.texture,s=n+"|"+(t.filter??"");e.ref!==s&&(e.ref=s,e.pending=s,this.source(n,t.filter).then(r=>{var o;if(e.pending!==s||!r)return;const a=r.tex.clone();a.wrapS=a.wrapT=ii,a.needsUpdate=!0,(o=e.mesh.material.map)==null||o.dispose(),e.mesh.material.map=a,e.mesh.material.needsUpdate=!0,e.meta=r.meta,this.stage.renderer.initTexture(a)}))}sync(){var t,n,s,r,a,o;const e=new Set;for(const c of this.room.entities.values()){const l=c.sprite;if(!l||!l.texture||Math.max(((t=l.size)==null?void 0:t[0])??1,((n=l.size)==null?void 0:n[1])??1)<uw)continue;e.add(c.id);const f=this.view(c);this.setTexture(f,l);const h=f.mesh.material.map,d=((s=l.size)==null?void 0:s[0])??1,p=((r=l.size)==null?void 0:r[1])??1,[y,v]=l.anchor??bd,_=this.room.worldPosition(c);f.pivot.position.set(_.x,_.y,0),f.pivot.rotation.z=(((a=c.rotation)==null?void 0:a.roll)??0)*Math.PI/180,f.mesh.position.set((.5-y)*d,(.5-v)*p,0),f.mesh.scale.set(d,p,1);const m=l.uvRect??{x:0,y:0,width:1,height:1};if(h){const b=!!l.flipX,S=!!l.flipY;h.repeat.set(b?-m.width:m.width,S?-m.height:m.height),h.offset.set(b?m.x+m.width:m.x,S?m.y+m.height:m.y)}const R=f.mesh.material;R.visible=!!h&&c.visible!==!1&&(l.opacity??1)>0&&!(this.hideBelow!=null&&(l.sortingLayer??0)<this.hideBelow),R.opacity=l.opacity??1,R.blending=fw[l.blend]??Sn,l.tint!=null?R.color.set(Array.isArray(l.tint)?new mt(l.tint[0],l.tint[1],l.tint[2]):new mt(l.tint)):R.color.set(16777215),f.mesh.renderOrder=ac(l,f.seq%1e3)+(_.z??0)*10}for(const[c,l]of this.views)e.has(c)||(this.stage.scene.remove(l.pivot),(o=l.mesh.material.map)==null||o.dispose(),l.mesh.material.dispose(),l.mesh.geometry.dispose(),this.views.delete(c))}}const Pf={space:["Space"],enter:["Enter","NumpadEnter"],shift:["ShiftLeft","ShiftRight"],escape:["Escape"],tab:["Tab"]};function rl(i){const e=String(i);return Pf[e.toLowerCase()]?Pf[e.toLowerCase()]:/^[a-z]$/i.test(e)?["Key"+e.toUpperCase()]:/^[0-9]$/.test(e)?["Digit"+e]:[e]}class dw{constructor(e={}){this.actions=e.actions??{},this.axesDef=e.axes??{},this.held=new Set,this.pressed=new Set,this.released=new Set,this.data={},this.at={},this.keys=new Set,this.byCode=new Map;for(const[t,n]of Object.entries(this.actions))for(const s of[].concat((n==null?void 0:n.keys)??[]))for(const r of rl(s))this.byCode.set(r,t)}action(e,t,{down:n=null,at:s=null}={}){if(n===!1){this.held.delete(e),this.released.add(e);return}this.pressed.has(e)||(this.at[e]=s??performance.now()),this.pressed.add(e),t!==void 0&&(this.data[e]=t),n===!0&&this.held.add(e)}axes(){const e={};for(const[t,n]of Object.entries(this.axesDef)){const s=String((n==null?void 0:n.keys)??"").split("/");let r=0;for(let a=0;a+1<s.length;a+=2)rl(s[a]).some(o=>this.keys.has(o))&&(r-=1),rl(s[a+1]).some(o=>this.keys.has(o))&&(r+=1);e[t]=Math.max(-1,Math.min(1,r))}return e}frame(){const e={pressed:Object.fromEntries([...this.pressed].map(t=>[t,!0])),released:Object.fromEntries([...this.released].map(t=>[t,!0])),held:Object.fromEntries([...this.held].map(t=>[t,!0])),actionData:this.data,axes:this.axes(),pressedAt:this.at};return this.pressed.clear(),this.released.clear(),this.data={},this.at={},e}bind(e){const t=s=>{var r;return/^(INPUT|TEXTAREA|SELECT)$/.test(((r=s.target)==null?void 0:r.tagName)??"")};addEventListener("keydown",s=>{if(t(s))return;this.keys.add(s.code);const r=this.byCode.get(s.code)??this.byCode.get(s.key);r&&!s.repeat&&(this.action(r,void 0,{down:!0,at:s.timeStamp}),s.preventDefault())}),addEventListener("keyup",s=>{this.keys.delete(s.code);const r=this.byCode.get(s.code)??this.byCode.get(s.key);r&&this.action(r,void 0,{down:!1})});const n=Object.entries(this.actions).filter(([,s])=>(s==null?void 0:s.mouse)==="left").map(([s])=>s);e.addEventListener("pointerdown",s=>{if(s.button===0)for(const r of n)this.action(r,void 0,{down:!0,at:s.timeStamp})}),e.addEventListener("pointerup",()=>{for(const s of n)this.action(s,void 0,{down:!1})}),addEventListener("blur",()=>{this.keys.clear(),this.held.clear()})}}const pw=30,mw=`<style id="hud-util">
:root{--spawn-chrome-reservation-right-inset:0px;--spawn-chrome-reservation-right-top:0px;--spawn-chrome-reservation-right-height:0px}
#tome-ui-container .fixed{position:fixed}#tome-ui-container .absolute{position:absolute}#tome-ui-container .inset-0{inset:0}
#tome-ui-container .pointer-events-none{pointer-events:none}#tome-ui-container .pointer-events-auto{pointer-events:auto}
</style>`;class gw{constructor({ui:e,room:t,player:n,input:s,toScreen:r,root:a=document.body}){var c;this.ui=e,this.room=t,this.player=n,this.input=s,this.toScreen=r,a.insertAdjacentHTML("beforeend",mw),this.container=document.createElement("div"),this.container.id="tome-ui-container",this.container.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:20",this.mount=document.createElement("div"),this.mount.id="tome-game-mount",this.mount.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:21",a.append(this.container,this.mount),this.last=0,this.failed=!1,this.born=new WeakMap,this.paintedAt=t.nowMs;for(const[l,f]of Object.entries(e))l!=="default"&&l!=="onMount"&&l!=="onDestroy"&&typeof f=="function"&&(window[l]=f);window.sendAction=(l,f,h={})=>{s.action(l,f,{at:performance.now(),...h}),h.down==null&&setTimeout(()=>s.action(l,void 0,{down:!1}),0)},window.sendAxis=(l,f)=>{s.sentAxes={...s.sentAxes??{},[l]:f}},window.openLink=l=>window.open(l,"_blank","noopener");const o=this.handle();try{(c=e.onMount)==null||c.call(e,this.mount,o)}catch(l){console.error("[hud] onMount",l)}}alignAnimations(){var t;const e=this.room.nowMs;for(const n of document.getAnimations()){const s=(t=n.effect)==null?void 0:t.target;if(!s||!this.container.contains(s)||!(n instanceof CSSAnimation))continue;let r=this.born.get(n);r==null&&(r=this.paintedAt,this.born.set(n,r)),n.playState!=="paused"&&n.pause(),n.currentTime=e-r}}handle(){const e=this.player;return{get state(){return e.state},get id(){return e.id},get displayName(){return e.displayName},get userId(){return e.userId}}}frame(e){if(e-this.last>=1e3/pw||this.room.inputSeq!==this.seenSeq){this.last=e,this.seenSeq=this.room.inputSeq,this.paintedAt=this.room.nowMs;const t={now:()=>this.room.nowMs,self:this.handle(),session:this.room.session,world:{engine:{ui:{referenceHeight:1080}}}};let n;try{n=this.ui.default(t,this.handle()),this.failed=!1}catch(s){this.failed||console.error("[hud] render",s),this.failed=!0,n=""}Mp(this.container,`<div id="tome-ui-container">${Zb(n)}</div>`,{childrenOnly:!0,onBeforeElUpdated:(s,r)=>s===document.activeElement&&/^(INPUT|SELECT|TEXTAREA)$/.test(s.tagName)?!1:(s.tagName==="INPUT"&&(s.type==="radio"||s.type==="checkbox")&&(s.checked=r.hasAttribute("checked")),!0)})}this.alignAnimations();for(const t of this.container.querySelectorAll("[data-world-anchor]")){const n=this.room.entities.get(t.getAttribute("data-world-anchor"));if(!n)continue;const[s,r,a]=(t.getAttribute("data-anchor-offset")??"0 0 0").split(/\s+/).map(Number),o=this.room.worldPosition(n),c=this.toScreen({x:o.x+(s||0),y:o.y+(r||0),z:o.z+(a||0)});c&&(t.style.left=c.x.toFixed(1)+"px",t.style.top=c.y.toFixed(1)+"px")}}}class _w{constructor(e={}){this.map=e,this.buffers=new Map,this.loops=[];try{this.ctx=new AudioContext}catch(s){console.warn("[audio] no AudioContext",(s==null?void 0:s.message)??s),this.ctx=null;return}if(this.master=this.ctx.createGain(),this.master.connect(this.ctx.destination),new URLSearchParams(location.search).has("mute")&&(this.master.gain.value=0),this.music=this.ctx.createGain(),this.music.connect(this.master),this.ctx.state!=="running"){const s=()=>{this.ctx.resume().then(()=>{if(this.ctx.state==="running")for(const r of["pointerdown","keydown","touchend"])removeEventListener(r,s,!0)},()=>{})};for(const r of["pointerdown","keydown","touchend"])addEventListener(r,s,!0);this.ctx.resume().catch(()=>{})}const t=()=>{this.ctx.suspend().catch(()=>{})},n=()=>{document.visibilityState==="visible"&&this.ctx.resume().catch(()=>{})};addEventListener("pagehide",t),addEventListener("freeze",t),addEventListener("pageshow",s=>{s.persisted&&n()}),addEventListener("resume",n),document.addEventListener("visibilitychange",()=>document.visibilityState==="hidden"?t():n())}get running(){var e;return((e=this.ctx)==null?void 0:e.state)==="running"}fileOf(e){return e in this.map?this.map[e]:e}async buffer(e){const t=this.fileOf(e);if(!t||!this.ctx)return null;if(!this.buffers.has(t)){const n=fo(t)??t;this.buffers.set(t,fetch(n).then(s=>{if(!s.ok)throw new Error(s.status);return s.arrayBuffer()}).then(s=>this.ctx.decodeAudioData(s)).catch(s=>(console.warn("[audio]",t,(s==null?void 0:s.message)??s),null)))}return this.buffers.get(t)}async play({clip:e,volume:t=.8,pitch:n=1}={}){if(!this.running||!e)return;const s=await this.buffer(e);if(!s)return;const r=this.ctx.createBufferSource(),a=this.ctx.createGain();r.buffer=s,r.playbackRate.value=n,a.gain.value=t,r.connect(a),a.connect(this.master),r.start()}async loop(e){const t=await this.buffer(e.clip);if(!t)return;const n=this.ctx.createBufferSource(),s=this.ctx.createGain();n.buffer=t,n.loop=e.loop!==!1,s.gain.value=e.gain??1,n.connect(s),s.connect(e.bus==="Music"?this.music:this.master),n.start(),this.loops.push(n)}}var Ad={exports:{}};(function(i,e){var t=void 0,n=function(s){return t||(t=new Promise(function(r,a){var o=typeof s<"u"?s:{},c=o.onAbort;o.onAbort=function(u){a(new Error(u)),c&&c(u)},o.postRun=o.postRun||[],o.postRun.push(function(){r(o)}),i=void 0;var l;l||(l=typeof o<"u"?o:{});var f=typeof window=="object",h=typeof importScripts=="function",d=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string";l.onRuntimeInitialized=function(){function u(G,le){switch(typeof le){case"boolean":wp(G,le?1:0);break;case"number":yp(G,le);break;case"string":xp(G,le,-1,-1);break;case"object":if(le===null)su(G);else if(le.length!=null){var Ne=Hr(le,zr);bp(G,Ne,le.length,-1),Vr(Ne)}else qr(G,"Wrong API use : tried to return a value of an unknown type ("+le+").",-1);break;default:su(G)}}function g(G,le){for(var Ne=[],$e=0;$e<G;$e+=1){var at=O(le+4*$e,"i32"),St=pp(at);if(St===1||St===2)at=vp(at);else if(St===3)at=gp(at);else if(St===4){St=at,at=mp(St),St=_p(St);for(var An=new Uint8Array(at),vn=0;vn<at;vn+=1)An[vn]=E[St+vn];at=An}else at=null;Ne.push(at)}return Ne}function x(G,le){this.Ka=G,this.db=le,this.Ia=1,this.eb=[]}function A(G,le){if(this.db=le,le=ke(G)+1,this.Xa=go(le),this.Xa===null)throw Error("Unable to allocate memory for the SQL string");de(G,w,this.Xa,le),this.cb=this.Xa,this.Ta=this.hb=null}function N(G){if(this.filename="dbfile_"+(4294967295*Math.random()>>>0),G!=null){var le=this.filename,Ne="/",$e=le;if(Ne&&(Ne=typeof Ne=="string"?Ne:$t(Ne),$e=le?De(Ne+"/"+le):Ne),le=Ze(!0,!0),$e=is($e,(le!==void 0?le:438)&4095|32768,0),G){if(typeof G=="string"){Ne=Array(G.length);for(var at=0,St=G.length;at<St;++at)Ne[at]=G.charCodeAt(at);G=Ne}_e($e,le|146),Ne=Se($e,577),ut(Ne,G,0,G.length,0),Ge(Ne),_e($e,le)}}this.handleError(je(this.filename,Y)),this.db=O(Y,"i32"),au(this.db),this.Ya={},this.Ma={}}var Y=pi(4),se=l.cwrap,je=se("sqlite3_open","number",["string","number"]),_t=se("sqlite3_close_v2","number",["number"]),it=se("sqlite3_exec","number",["number","string","number","number","number"]),It=se("sqlite3_changes","number",["number"]),Gt=se("sqlite3_prepare_v2","number",["number","string","number","number","number"]),Qc=se("sqlite3_sql","string",["number"]),Jd=se("sqlite3_normalized_sql","string",["number"]),eu=se("sqlite3_prepare_v2","number",["number","number","number","number","number"]),Zd=se("sqlite3_bind_text","number",["number","number","number","number","number"]),tu=se("sqlite3_bind_blob","number",["number","number","number","number","number"]),Qd=se("sqlite3_bind_double","number",["number","number","number"]),ep=se("sqlite3_bind_int","number",["number","number","number"]),tp=se("sqlite3_bind_parameter_index","number",["number","string"]),np=se("sqlite3_step","number",["number"]),ip=se("sqlite3_errmsg","string",["number"]),sp=se("sqlite3_column_count","number",["number"]),rp=se("sqlite3_data_count","number",["number"]),ap=se("sqlite3_column_double","number",["number","number"]),nu=se("sqlite3_column_text","string",["number","number"]),op=se("sqlite3_column_blob","number",["number","number"]),lp=se("sqlite3_column_bytes","number",["number","number"]),cp=se("sqlite3_column_type","number",["number","number"]),up=se("sqlite3_column_name","string",["number","number"]),fp=se("sqlite3_reset","number",["number"]),hp=se("sqlite3_clear_bindings","number",["number"]),dp=se("sqlite3_finalize","number",["number"]),iu=se("sqlite3_create_function_v2","number","number string number number number number number number number".split(" ")),pp=se("sqlite3_value_type","number",["number"]),mp=se("sqlite3_value_bytes","number",["number"]),gp=se("sqlite3_value_text","string",["number"]),_p=se("sqlite3_value_blob","number",["number"]),vp=se("sqlite3_value_double","number",["number"]),yp=se("sqlite3_result_double","",["number","number"]),su=se("sqlite3_result_null","",["number"]),xp=se("sqlite3_result_text","",["number","string","number","number"]),bp=se("sqlite3_result_blob","",["number","number","number","number"]),wp=se("sqlite3_result_int","",["number","number"]),qr=se("sqlite3_result_error","",["number","string","number"]),ru=se("sqlite3_aggregate_context","number",["number","number"]),au=se("RegisterExtensionFunctions","number",["number"]);x.prototype.bind=function(G){if(!this.Ka)throw"Statement closed";return this.reset(),Array.isArray(G)?this.vb(G):G!=null&&typeof G=="object"?this.wb(G):!0},x.prototype.step=function(){if(!this.Ka)throw"Statement closed";this.Ia=1;var G=np(this.Ka);switch(G){case 100:return!0;case 101:return!1;default:throw this.db.handleError(G)}},x.prototype.qb=function(G){return G==null&&(G=this.Ia,this.Ia+=1),ap(this.Ka,G)},x.prototype.zb=function(G){if(G==null&&(G=this.Ia,this.Ia+=1),G=nu(this.Ka,G),typeof BigInt!="function")throw Error("BigInt is not supported");return BigInt(G)},x.prototype.Ab=function(G){return G==null&&(G=this.Ia,this.Ia+=1),nu(this.Ka,G)},x.prototype.getBlob=function(G){G==null&&(G=this.Ia,this.Ia+=1);var le=lp(this.Ka,G);G=op(this.Ka,G);for(var Ne=new Uint8Array(le),$e=0;$e<le;$e+=1)Ne[$e]=E[G+$e];return Ne},x.prototype.get=function(G,le){le=le||{},G!=null&&this.bind(G)&&this.step(),G=[];for(var Ne=rp(this.Ka),$e=0;$e<Ne;$e+=1)switch(cp(this.Ka,$e)){case 1:var at=le.useBigInt?this.zb($e):this.qb($e);G.push(at);break;case 2:G.push(this.qb($e));break;case 3:G.push(this.Ab($e));break;case 4:G.push(this.getBlob($e));break;default:G.push(null)}return G},x.prototype.getColumnNames=function(){for(var G=[],le=sp(this.Ka),Ne=0;Ne<le;Ne+=1)G.push(up(this.Ka,Ne));return G},x.prototype.getAsObject=function(G,le){G=this.get(G,le),le=this.getColumnNames();for(var Ne={},$e=0;$e<le.length;$e+=1)Ne[le[$e]]=G[$e];return Ne},x.prototype.getSQL=function(){return Qc(this.Ka)},x.prototype.getNormalizedSQL=function(){return Jd(this.Ka)},x.prototype.run=function(G){return G!=null&&this.bind(G),this.step(),this.reset()},x.prototype.mb=function(G,le){le==null&&(le=this.Ia,this.Ia+=1),G=Ce(G);var Ne=Hr(G,zr);this.eb.push(Ne),this.db.handleError(Zd(this.Ka,le,Ne,G.length-1,0))},x.prototype.ub=function(G,le){le==null&&(le=this.Ia,this.Ia+=1);var Ne=Hr(G,zr);this.eb.push(Ne),this.db.handleError(tu(this.Ka,le,Ne,G.length,0))},x.prototype.lb=function(G,le){le==null&&(le=this.Ia,this.Ia+=1),this.db.handleError((G===(G|0)?ep:Qd)(this.Ka,le,G))},x.prototype.xb=function(G){G==null&&(G=this.Ia,this.Ia+=1),tu(this.Ka,G,0,0,0)},x.prototype.nb=function(G,le){switch(le==null&&(le=this.Ia,this.Ia+=1),typeof G){case"string":this.mb(G,le);return;case"number":this.lb(G,le);return;case"bigint":this.mb(G.toString(),le);return;case"boolean":this.lb(G+0,le);return;case"object":if(G===null){this.xb(le);return}if(G.length!=null){this.ub(G,le);return}}throw"Wrong API use : tried to bind a value of an unknown type ("+G+")."},x.prototype.wb=function(G){var le=this;return Object.keys(G).forEach(function(Ne){var $e=tp(le.Ka,Ne);$e!==0&&le.nb(G[Ne],$e)}),!0},x.prototype.vb=function(G){for(var le=0;le<G.length;le+=1)this.nb(G[le],le+1);return!0},x.prototype.reset=function(){return this.freemem(),hp(this.Ka)===0&&fp(this.Ka)===0},x.prototype.freemem=function(){for(var G;(G=this.eb.pop())!==void 0;)Vr(G)},x.prototype.free=function(){this.freemem();var G=dp(this.Ka)===0;return delete this.db.Ya[this.Ka],this.Ka=0,G},A.prototype.next=function(){if(this.Xa===null)return{done:!0};if(this.Ta!==null&&(this.Ta.free(),this.Ta=null),!this.db.db)throw this.fb(),Error("Database closed");var G=ar(),le=pi(4);st(Y),st(le);try{this.db.handleError(eu(this.db.db,this.cb,-1,Y,le)),this.cb=O(le,"i32");var Ne=O(Y,"i32");return Ne===0?(this.fb(),{done:!0}):(this.Ta=new x(Ne,this.db),this.db.Ya[Ne]=this.Ta,{value:this.Ta,done:!1})}catch($e){throw this.hb=Te(this.cb),this.fb(),$e}finally{rr(G)}},A.prototype.fb=function(){Vr(this.Xa),this.Xa=null},A.prototype.getRemainingSQL=function(){return this.hb!==null?this.hb:Te(this.cb)},typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"&&(A.prototype[Symbol.iterator]=function(){return this}),N.prototype.run=function(G,le){if(!this.db)throw"Database closed";if(le){G=this.prepare(G,le);try{G.step()}finally{G.free()}}else this.handleError(it(this.db,G,0,0,Y));return this},N.prototype.exec=function(G,le,Ne){if(!this.db)throw"Database closed";var $e=ar(),at=null;try{var St=Pi(G),An=pi(4);for(G=[];O(St,"i8")!==0;){st(Y),st(An),this.handleError(eu(this.db,St,-1,Y,An));var vn=O(Y,"i32");if(St=O(An,"i32"),vn!==0){var hn=null;for(at=new x(vn,this),le!=null&&at.bind(le);at.step();)hn===null&&(hn={columns:at.getColumnNames(),values:[]},G.push(hn)),hn.values.push(at.get(null,Ne));at.free()}}return G}catch(Rn){throw at&&at.free(),Rn}finally{rr($e)}},N.prototype.each=function(G,le,Ne,$e,at){typeof le=="function"&&($e=Ne,Ne=le,le=void 0),G=this.prepare(G,le);try{for(;G.step();)Ne(G.getAsObject(null,at))}finally{G.free()}if(typeof $e=="function")return $e()},N.prototype.prepare=function(G,le){if(st(Y),this.handleError(Gt(this.db,G,-1,Y,0)),G=O(Y,"i32"),G===0)throw"Nothing to prepare";var Ne=new x(G,this);return le!=null&&Ne.bind(le),this.Ya[G]=Ne},N.prototype.iterateStatements=function(G){return new A(G,this)},N.prototype.export=function(){Object.values(this.Ya).forEach(function(le){le.free()}),Object.values(this.Ma).forEach(rs),this.Ma={},this.handleError(_t(this.db));var G=dt(this.filename);return this.handleError(je(this.filename,Y)),this.db=O(Y,"i32"),au(this.db),G},N.prototype.close=function(){this.db!==null&&(Object.values(this.Ya).forEach(function(G){G.free()}),Object.values(this.Ma).forEach(rs),this.Ma={},this.handleError(_t(this.db)),j("/"+this.filename),this.db=null)},N.prototype.handleError=function(G){if(G===0)return null;throw G=ip(this.db),Error(G)},N.prototype.getRowsModified=function(){return It(this.db)},N.prototype.create_function=function(G,le){Object.prototype.hasOwnProperty.call(this.Ma,G)&&(rs(this.Ma[G]),delete this.Ma[G]);var Ne=Gr(function($e,at,St){at=g(at,St);try{var An=le.apply(null,at)}catch(vn){qr($e,vn,-1);return}u($e,An)},"viii");return this.Ma[G]=Ne,this.handleError(iu(this.db,G,le.length,1,0,Ne,0,0,0)),this},N.prototype.create_aggregate=function(G,le){var Ne=le.init||function(){return null},$e=le.finalize||function(hn){return hn},at=le.step;if(!at)throw"An aggregate function must have a step function in "+G;var St={};Object.hasOwnProperty.call(this.Ma,G)&&(rs(this.Ma[G]),delete this.Ma[G]),le=G+"__finalize",Object.hasOwnProperty.call(this.Ma,le)&&(rs(this.Ma[le]),delete this.Ma[le]);var An=Gr(function(hn,Rn,_o){var Ii=ru(hn,1);Object.hasOwnProperty.call(St,Ii)||(St[Ii]=Ne()),Rn=g(Rn,_o),Rn=[St[Ii]].concat(Rn);try{St[Ii]=at.apply(null,Rn)}catch(Sp){delete St[Ii],qr(hn,Sp,-1)}},"viii"),vn=Gr(function(hn){var Rn=ru(hn,1);try{var _o=$e(St[Rn])}catch(Ii){delete St[Rn],qr(hn,Ii,-1);return}u(hn,_o),delete St[Rn]},"vi");return this.Ma[G]=An,this.Ma[le]=vn,this.handleError(iu(this.db,G,at.length-1,1,0,0,An,vn,0)),this},l.Database=N};var p=Object.assign({},l),y="./this.program",v="",_,m;if(d){var R=ka,b=ka;v=__dirname+"/",m=u=>(u=ue(u)?new URL(u):b.normalize(u),R.readFileSync(u)),_=u=>(u=ue(u)?new URL(u):b.normalize(u),new Promise((g,x)=>{R.readFile(u,void 0,(A,N)=>{A?x(A):g(N.buffer)})})),!l.thisProgram&&1<process.argv.length&&(y=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),i.exports=l}else(f||h)&&(h?v=self.location.href:typeof document<"u"&&document.currentScript&&(v=document.currentScript.src),v=v.startsWith("blob:")?"":v.substr(0,v.replace(/[?#].*/,"").lastIndexOf("/")+1),h&&(m=u=>{var g=new XMLHttpRequest;return g.open("GET",u,!1),g.responseType="arraybuffer",g.send(null),new Uint8Array(g.response)}),_=u=>ue(u)?new Promise((g,x)=>{var A=new XMLHttpRequest;A.open("GET",u,!0),A.responseType="arraybuffer",A.onload=()=>{(A.status==200||A.status==0&&A.response)&&x(A.response),g(A.status)},A.onerror=g,A.send(null)}):fetch(u,{credentials:"same-origin"}).then(g=>g.ok?g.arrayBuffer():Promise.reject(Error(g.status+" : "+g.url))));var S=l.print||console.log.bind(console),I=l.printErr||console.error.bind(console);Object.assign(l,p),p=null,l.thisProgram&&(y=l.thisProgram);var L;l.wasmBinary&&(L=l.wasmBinary);var C,D=!1,E,w,k,U,F,W,Z;function K(){var u=C.buffer;l.HEAP8=E=new Int8Array(u),l.HEAP16=k=new Int16Array(u),l.HEAPU8=w=new Uint8Array(u),l.HEAPU16=new Uint16Array(u),l.HEAP32=U=new Int32Array(u),l.HEAPU32=F=new Uint32Array(u),l.HEAPF32=W=new Float32Array(u),l.HEAPF64=Z=new Float64Array(u)}var ae=[],J=[],fe=[];function me(){var u=l.preRun.shift();ae.unshift(u)}var Me=0,Re=null;function Ve(u){var g;throw(g=l.onAbort)==null||g.call(l,u),u="Aborted("+u+")",I(u),D=!0,new WebAssembly.RuntimeError(u+". Build with -sASSERTIONS for more info.")}var ee=u=>u.startsWith("data:application/octet-stream;base64,"),ue=u=>u.startsWith("file://"),Ee;function ge(u){if(u==Ee&&L)return new Uint8Array(L);if(m)return m(u);throw"both async and sync fetching of the wasm failed"}function Fe(u){return L?Promise.resolve().then(()=>ge(u)):_(u).then(g=>new Uint8Array(g),()=>ge(u))}function He(u,g,x){return Fe(u).then(A=>WebAssembly.instantiate(A,g)).then(x,A=>{I(`failed to asynchronously prepare wasm: ${A}`),Ve(A)})}function Qe(u,g){var x=Ee;L||typeof WebAssembly.instantiateStreaming!="function"||ee(x)||ue(x)||d||typeof fetch!="function"?He(x,u,g):fetch(x,{credentials:"same-origin"}).then(A=>WebAssembly.instantiateStreaming(A,u).then(g,function(N){return I(`wasm streaming compile failed: ${N}`),I("falling back to ArrayBuffer instantiation"),He(x,u,g)}))}var ye,te,Je=u=>{for(;0<u.length;)u.shift()(l)};function O(u,g="i8"){switch(g.endsWith("*")&&(g="*"),g){case"i1":return E[u];case"i8":return E[u];case"i16":return k[u>>1];case"i32":return U[u>>2];case"i64":Ve("to do getValue(i64) use WASM_BIGINT");case"float":return W[u>>2];case"double":return Z[u>>3];case"*":return F[u>>2];default:Ve(`invalid type for getValue: ${g}`)}}function st(u){var g="i32";switch(g.endsWith("*")&&(g="*"),g){case"i1":E[u]=0;break;case"i8":E[u]=0;break;case"i16":k[u>>1]=0;break;case"i32":U[u>>2]=0;break;case"i64":Ve("to do setValue(i64) use WASM_BIGINT");case"float":W[u>>2]=0;break;case"double":Z[u>>3]=0;break;case"*":F[u>>2]=0;break;default:Ve(`invalid type for setValue: ${g}`)}}var tt=typeof TextDecoder<"u"?new TextDecoder:void 0,Oe=(u,g,x)=>{var A=g+x;for(x=g;u[x]&&!(x>=A);)++x;if(16<x-g&&u.buffer&&tt)return tt.decode(u.subarray(g,x));for(A="";g<x;){var N=u[g++];if(N&128){var Y=u[g++]&63;if((N&224)==192)A+=String.fromCharCode((N&31)<<6|Y);else{var se=u[g++]&63;N=(N&240)==224?(N&15)<<12|Y<<6|se:(N&7)<<18|Y<<12|se<<6|u[g++]&63,65536>N?A+=String.fromCharCode(N):(N-=65536,A+=String.fromCharCode(55296|N>>10,56320|N&1023))}}else A+=String.fromCharCode(N)}return A},Te=(u,g)=>u?Oe(w,u,g):"",lt=(u,g)=>{for(var x=0,A=u.length-1;0<=A;A--){var N=u[A];N==="."?u.splice(A,1):N===".."?(u.splice(A,1),x++):x&&(u.splice(A,1),x--)}if(g)for(;x;x--)u.unshift("..");return u},De=u=>{var g=u.charAt(0)==="/",x=u.substr(-1)==="/";return(u=lt(u.split("/").filter(A=>!!A),!g).join("/"))||g||(u="."),u&&x&&(u+="/"),(g?"/":"")+u},P=u=>{var g=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(u).slice(1);return u=g[0],g=g[1],!u&&!g?".":(g&&(g=g.substr(0,g.length-1)),u+g)},M=u=>{if(u==="/")return"/";u=De(u),u=u.replace(/\/$/,"");var g=u.lastIndexOf("/");return g===-1?u:u.substr(g+1)},V=()=>{if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function")return x=>crypto.getRandomValues(x);if(d)try{var u=ka;if(u.randomFillSync)return x=>u.randomFillSync(x);var g=u.randomBytes;return x=>(x.set(g(x.byteLength)),x)}catch{}Ve("initRandomDevice")},re=u=>(re=V())(u),oe=(...u)=>{for(var g="",x=!1,A=u.length-1;-1<=A&&!x;A--){if(x=0<=A?u[A]:"/",typeof x!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!x)return"";g=x+"/"+g,x=x.charAt(0)==="/"}return g=lt(g.split("/").filter(N=>!!N),!x).join("/"),(x?"/":"")+g||"."},ne=[],ke=u=>{for(var g=0,x=0;x<u.length;++x){var A=u.charCodeAt(x);127>=A?g++:2047>=A?g+=2:55296<=A&&57343>=A?(g+=4,++x):g+=3}return g},de=(u,g,x,A)=>{if(!(0<A))return 0;var N=x;A=x+A-1;for(var Y=0;Y<u.length;++Y){var se=u.charCodeAt(Y);if(55296<=se&&57343>=se){var je=u.charCodeAt(++Y);se=65536+((se&1023)<<10)|je&1023}if(127>=se){if(x>=A)break;g[x++]=se}else{if(2047>=se){if(x+1>=A)break;g[x++]=192|se>>6}else{if(65535>=se){if(x+2>=A)break;g[x++]=224|se>>12}else{if(x+3>=A)break;g[x++]=240|se>>18,g[x++]=128|se>>12&63}g[x++]=128|se>>6&63}g[x++]=128|se&63}}return g[x]=0,x-N};function Ce(u,g){var x=Array(ke(u)+1);return u=de(u,x,0,x.length),g&&(x.length=u),x}var ct=[];function he(u,g){ct[u]={input:[],output:[],Wa:g},sr(u,Le)}var Le={open(u){var g=ct[u.node.rdev];if(!g)throw new q(43);u.tty=g,u.seekable=!1},close(u){u.tty.Wa.fsync(u.tty)},fsync(u){u.tty.Wa.fsync(u.tty)},read(u,g,x,A){if(!u.tty||!u.tty.Wa.rb)throw new q(60);for(var N=0,Y=0;Y<A;Y++){try{var se=u.tty.Wa.rb(u.tty)}catch{throw new q(29)}if(se===void 0&&N===0)throw new q(6);if(se==null)break;N++,g[x+Y]=se}return N&&(u.node.timestamp=Date.now()),N},write(u,g,x,A){if(!u.tty||!u.tty.Wa.ib)throw new q(60);try{for(var N=0;N<A;N++)u.tty.Wa.ib(u.tty,g[x+N])}catch{throw new q(29)}return A&&(u.node.timestamp=Date.now()),N}},ze={rb(){e:{if(!ne.length){var u=null;if(d){var g=Buffer.alloc(256),x=0,A=process.stdin.fd;try{x=R.readSync(A,g,0,256)}catch(N){if(N.toString().includes("EOF"))x=0;else throw N}0<x&&(u=g.slice(0,x).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(u=window.prompt("Input: "),u!==null&&(u+=`
`));if(!u){u=null;break e}ne=Ce(u,!0)}u=ne.shift()}return u},ib(u,g){g===null||g===10?(S(Oe(u.output,0)),u.output=[]):g!=0&&u.output.push(g)},fsync(u){u.output&&0<u.output.length&&(S(Oe(u.output,0)),u.output=[])},Lb(){return{Gb:25856,Ib:5,Fb:191,Hb:35387,Eb:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},Mb(){return 0},Nb(){return[24,80]}},We={ib(u,g){g===null||g===10?(I(Oe(u.output,0)),u.output=[]):g!=0&&u.output.push(g)},fsync(u){u.output&&0<u.output.length&&(I(Oe(u.output,0)),u.output=[])}};function Pe(u,g){var x=u.Ha?u.Ha.length:0;x>=g||(g=Math.max(g,x*(1048576>x?2:1.125)>>>0),x!=0&&(g=Math.max(g,256)),x=u.Ha,u.Ha=new Uint8Array(g),0<u.La&&u.Ha.set(x.subarray(0,u.La),0))}var be={Pa:null,Qa(){return be.createNode(null,"/",16895,0)},createNode(u,g,x,A){if((x&61440)===24576||(x&61440)===4096)throw new q(63);return be.Pa||(be.Pa={dir:{node:{Oa:be.Fa.Oa,Na:be.Fa.Na,lookup:be.Fa.lookup,$a:be.Fa.$a,rename:be.Fa.rename,unlink:be.Fa.unlink,rmdir:be.Fa.rmdir,readdir:be.Fa.readdir,symlink:be.Fa.symlink},stream:{Sa:be.Ga.Sa}},file:{node:{Oa:be.Fa.Oa,Na:be.Fa.Na},stream:{Sa:be.Ga.Sa,read:be.Ga.read,write:be.Ga.write,kb:be.Ga.kb,ab:be.Ga.ab,bb:be.Ga.bb}},link:{node:{Oa:be.Fa.Oa,Na:be.Fa.Na,readlink:be.Fa.readlink},stream:{}},ob:{node:{Oa:be.Fa.Oa,Na:be.Fa.Na},stream:po}}),x=zn(u,g,x,A),qt(x.mode)?(x.Fa=be.Pa.dir.node,x.Ga=be.Pa.dir.stream,x.Ha={}):(x.mode&61440)===32768?(x.Fa=be.Pa.file.node,x.Ga=be.Pa.file.stream,x.La=0,x.Ha=null):(x.mode&61440)===40960?(x.Fa=be.Pa.link.node,x.Ga=be.Pa.link.stream):(x.mode&61440)===8192&&(x.Fa=be.Pa.ob.node,x.Ga=be.Pa.ob.stream),x.timestamp=Date.now(),u&&(u.Ha[g]=x,u.timestamp=x.timestamp),x},Kb(u){return u.Ha?u.Ha.subarray?u.Ha.subarray(0,u.La):new Uint8Array(u.Ha):new Uint8Array(0)},Fa:{Oa(u){var g={};return g.dev=(u.mode&61440)===8192?u.id:1,g.ino=u.id,g.mode=u.mode,g.nlink=1,g.uid=0,g.gid=0,g.rdev=u.rdev,qt(u.mode)?g.size=4096:(u.mode&61440)===32768?g.size=u.La:(u.mode&61440)===40960?g.size=u.link.length:g.size=0,g.atime=new Date(u.timestamp),g.mtime=new Date(u.timestamp),g.ctime=new Date(u.timestamp),g.yb=4096,g.blocks=Math.ceil(g.size/g.yb),g},Na(u,g){if(g.mode!==void 0&&(u.mode=g.mode),g.timestamp!==void 0&&(u.timestamp=g.timestamp),g.size!==void 0&&(g=g.size,u.La!=g))if(g==0)u.Ha=null,u.La=0;else{var x=u.Ha;u.Ha=new Uint8Array(g),x&&u.Ha.set(x.subarray(0,Math.min(g,u.La))),u.La=g}},lookup(){throw Xe[44]},$a(u,g,x,A){return be.createNode(u,g,x,A)},rename(u,g,x){if(qt(u.mode)){try{var A=Bn(g,x)}catch{}if(A)for(var N in A.Ha)throw new q(55)}delete u.parent.Ha[u.name],u.parent.timestamp=Date.now(),u.name=x,g.Ha[x]=u,g.timestamp=u.parent.timestamp},unlink(u,g){delete u.Ha[g],u.timestamp=Date.now()},rmdir(u,g){var x=Bn(u,g),A;for(A in x.Ha)throw new q(55);delete u.Ha[g],u.timestamp=Date.now()},readdir(u){var g=[".",".."],x;for(x of Object.keys(u.Ha))g.push(x);return g},symlink(u,g,x){return u=be.createNode(u,g,41471,0),u.link=x,u},readlink(u){if((u.mode&61440)!==40960)throw new q(28);return u.link}},Ga:{read(u,g,x,A,N){var Y=u.node.Ha;if(N>=u.node.La)return 0;if(u=Math.min(u.node.La-N,A),8<u&&Y.subarray)g.set(Y.subarray(N,N+u),x);else for(A=0;A<u;A++)g[x+A]=Y[N+A];return u},write(u,g,x,A,N,Y){if(g.buffer===E.buffer&&(Y=!1),!A)return 0;if(u=u.node,u.timestamp=Date.now(),g.subarray&&(!u.Ha||u.Ha.subarray)){if(Y)return u.Ha=g.subarray(x,x+A),u.La=A;if(u.La===0&&N===0)return u.Ha=g.slice(x,x+A),u.La=A;if(N+A<=u.La)return u.Ha.set(g.subarray(x,x+A),N),A}if(Pe(u,N+A),u.Ha.subarray&&g.subarray)u.Ha.set(g.subarray(x,x+A),N);else for(Y=0;Y<A;Y++)u.Ha[N+Y]=g[x+Y];return u.La=Math.max(u.La,N+A),A},Sa(u,g,x){if(x===1?g+=u.position:x===2&&(u.node.mode&61440)===32768&&(g+=u.node.La),0>g)throw new q(28);return g},kb(u,g,x){Pe(u.node,g+x),u.node.La=Math.max(u.node.La,g+x)},ab(u,g,x,A,N){if((u.node.mode&61440)!==32768)throw new q(43);if(u=u.node.Ha,N&2||u.buffer!==E.buffer){if((0<x||x+g<u.length)&&(u.subarray?u=u.subarray(x,x+g):u=Array.prototype.slice.call(u,x,x+g)),x=!0,g=65536*Math.ceil(g/65536),(N=Jc(65536,g))?(w.fill(0,N,N+g),g=N):g=0,!g)throw new q(48);E.set(u,g)}else x=!1,g=u.byteOffset;return{Cb:g,tb:x}},bb(u,g,x,A){return be.Ga.write(u,g,0,A,x,!1),0}}},Ze=(u,g)=>{var x=0;return u&&(x|=365),g&&(x|=146),x},gt=null,B={},pe=[],Q=1,ie=null,we=!0,q=class{constructor(u){this.name="ErrnoError",this.Ja=u}},Xe={},Mt=class{constructor(){this.Za={},this.node=null}get flags(){return this.Za.flags}set flags(u){this.Za.flags=u}get position(){return this.Za.position}set position(u){this.Za.position=u}},Ft=class{constructor(u,g,x,A){u||(u=this),this.parent=u,this.Qa=u.Qa,this.Ua=null,this.id=Q++,this.name=g,this.mode=x,this.Fa={},this.Ga={},this.rdev=A}get read(){return(this.mode&365)===365}set read(u){u?this.mode|=365:this.mode&=-366}get write(){return(this.mode&146)===146}set write(u){u?this.mode|=146:this.mode&=-147}};function Ke(u,g={}){if(u=oe(u),!u)return{path:"",node:null};if(g=Object.assign({pb:!0,jb:0},g),8<g.jb)throw new q(32);u=u.split("/").filter(se=>!!se);for(var x=gt,A="/",N=0;N<u.length;N++){var Y=N===u.length-1;if(Y&&g.parent)break;if(x=Bn(x,u[N]),A=De(A+"/"+u[N]),x.Ua&&(!Y||Y&&g.pb)&&(x=x.Ua.root),!Y||g.Ra){for(Y=0;(x.mode&61440)===40960;)if(x=X(A),A=oe(P(A),x),x=Ke(A,{jb:g.jb+1}).node,40<Y++)throw new q(32)}}return{path:A,node:x}}function $t(u){for(var g;;){if(u===u.parent)return u=u.Qa.sb,g?u[u.length-1]!=="/"?`${u}/${g}`:u+g:u;g=g?`${u.name}/${g}`:u.name,u=u.parent}}function fn(u,g){for(var x=0,A=0;A<g.length;A++)x=(x<<5)-x+g.charCodeAt(A)|0;return(u+x>>>0)%ie.length}function er(u){var g=fn(u.parent.id,u.name);if(ie[g]===u)ie[g]=u.Va;else for(g=ie[g];g;){if(g.Va===u){g.Va=u.Va;break}g=g.Va}}function Bn(u,g){var x=qt(u.mode)?(x=jn(u,"x"))?x:u.Fa.lookup?0:2:54;if(x)throw new q(x);for(x=ie[fn(u.id,g)];x;x=x.Va){var A=x.name;if(x.parent.id===u.id&&A===g)return x}return u.Fa.lookup(u,g)}function zn(u,g,x,A){return u=new Ft(u,g,x,A),g=fn(u.parent.id,u.name),u.Va=ie[g],ie[g]=u}function qt(u){return(u&61440)===16384}function tr(u){var g=["r","w","rw"][u&3];return u&512&&(g+="w"),g}function jn(u,g){if(we)return 0;if(!g.includes("r")||u.mode&292){if(g.includes("w")&&!(u.mode&146)||g.includes("x")&&!(u.mode&73))return 2}else return 2;return 0}function Ci(u,g){try{return Bn(u,g),20}catch{}return jn(u,"wx")}function nr(u,g,x){try{var A=Bn(u,g)}catch(N){return N.Ja}if(u=jn(u,"wx"))return u;if(x){if(!qt(A.mode))return 54;if(A===A.parent||$t(A)==="/")return 10}else if(qt(A.mode))return 31;return 0}function Lt(u){if(u=pe[u],!u)throw new q(8);return u}function ir(u,g=-1){if(u=Object.assign(new Mt,u),g==-1)e:{for(g=0;4096>=g;g++)if(!pe[g])break e;throw new q(33)}return u.fd=g,pe[g]=u}function Fr(u,g=-1){var x,A;return u=ir(u,g),(A=(x=u.Ga)==null?void 0:x.Jb)==null||A.call(x,u),u}var po={open(u){var g,x;u.Ga=B[u.node.rdev].Ga,(x=(g=u.Ga).open)==null||x.call(g,u)},Sa(){throw new q(70)}};function sr(u,g){B[u]={Ga:g}}function Br(u,g){var x=g==="/";if(x&&gt)throw new q(10);if(!x&&g){var A=Ke(g,{pb:!1});if(g=A.path,A=A.node,A.Ua)throw new q(10);if(!qt(A.mode))throw new q(54)}g={type:u,Ob:{},sb:g,Bb:[]},u=u.Qa(g),u.Qa=g,g.root=u,x?gt=u:A&&(A.Ua=g,A.Qa&&A.Qa.Bb.push(g))}function is(u,g,x){var A=Ke(u,{parent:!0}).node;if(u=M(u),!u||u==="."||u==="..")throw new q(28);var N=Ci(A,u);if(N)throw new q(N);if(!A.Fa.$a)throw new q(63);return A.Fa.$a(A,u,g,x)}function _n(u,g){return is(u,(g!==void 0?g:511)&1023|16384,0)}function ss(u,g,x){typeof x>"u"&&(x=g,g=438),is(u,g|8192,x)}function T(u,g){if(!oe(u))throw new q(44);var x=Ke(g,{parent:!0}).node;if(!x)throw new q(44);g=M(g);var A=Ci(x,g);if(A)throw new q(A);if(!x.Fa.symlink)throw new q(63);x.Fa.symlink(x,g,u)}function z(u){var g=Ke(u,{parent:!0}).node;u=M(u);var x=Bn(g,u),A=nr(g,u,!0);if(A)throw new q(A);if(!g.Fa.rmdir)throw new q(63);if(x.Ua)throw new q(10);g.Fa.rmdir(g,u),er(x)}function j(u){var g=Ke(u,{parent:!0}).node;if(!g)throw new q(44);u=M(u);var x=Bn(g,u),A=nr(g,u,!1);if(A)throw new q(A);if(!g.Fa.unlink)throw new q(63);if(x.Ua)throw new q(10);g.Fa.unlink(g,u),er(x)}function X(u){if(u=Ke(u).node,!u)throw new q(44);if(!u.Fa.readlink)throw new q(28);return oe($t(u.parent),u.Fa.readlink(u))}function H(u,g){if(u=Ke(u,{Ra:!g}).node,!u)throw new q(44);if(!u.Fa.Oa)throw new q(63);return u.Fa.Oa(u)}function ce(u){return H(u,!0)}function _e(u,g){if(u=typeof u=="string"?Ke(u,{Ra:!0}).node:u,!u.Fa.Na)throw new q(63);u.Fa.Na(u,{mode:g&4095|u.mode&-4096,timestamp:Date.now()})}function Ae(u,g){if(0>g)throw new q(28);if(u=typeof u=="string"?Ke(u,{Ra:!0}).node:u,!u.Fa.Na)throw new q(63);if(qt(u.mode))throw new q(31);if((u.mode&61440)!==32768)throw new q(28);var x=jn(u,"w");if(x)throw new q(x);u.Fa.Na(u,{size:g,timestamp:Date.now()})}function Se(u,g,x){if(u==="")throw new q(44);if(typeof g=="string"){var A={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090}[g];if(typeof A>"u")throw Error(`Unknown file open mode: ${g}`);g=A}if(x=g&64?(typeof x>"u"?438:x)&4095|32768:0,typeof u=="object")var N=u;else{u=De(u);try{N=Ke(u,{Ra:!(g&131072)}).node}catch{}}if(A=!1,g&64)if(N){if(g&128)throw new q(20)}else N=is(u,x,0),A=!0;if(!N)throw new q(44);if((N.mode&61440)===8192&&(g&=-513),g&65536&&!qt(N.mode))throw new q(54);if(!A&&(x=N?(N.mode&61440)===40960?32:qt(N.mode)&&(tr(g)!=="r"||g&512)?31:jn(N,tr(g)):44))throw new q(x);return g&512&&!A&&Ae(N,0),g&=-131713,N=ir({node:N,path:$t(N),flags:g,seekable:!0,position:0,Ga:N.Ga,Db:[],error:!1}),N.Ga.open&&N.Ga.open(N),!l.logReadFiles||g&1||(Ct||(Ct={}),u in Ct||(Ct[u]=1)),N}function Ge(u){if(u.fd===null)throw new q(8);u.gb&&(u.gb=null);try{u.Ga.close&&u.Ga.close(u)}catch(g){throw g}finally{pe[u.fd]=null}u.fd=null}function qe(u,g,x){if(u.fd===null)throw new q(8);if(!u.seekable||!u.Ga.Sa)throw new q(70);if(x!=0&&x!=1&&x!=2)throw new q(28);u.position=u.Ga.Sa(u,g,x),u.Db=[]}function Ue(u,g,x,A,N){if(0>A||0>N)throw new q(28);if(u.fd===null)throw new q(8);if((u.flags&2097155)===1)throw new q(8);if(qt(u.node.mode))throw new q(31);if(!u.Ga.read)throw new q(28);var Y=typeof N<"u";if(!Y)N=u.position;else if(!u.seekable)throw new q(70);return g=u.Ga.read(u,g,x,A,N),Y||(u.position+=g),g}function ut(u,g,x,A,N){if(0>A||0>N)throw new q(28);if(u.fd===null)throw new q(8);if(!(u.flags&2097155))throw new q(8);if(qt(u.node.mode))throw new q(31);if(!u.Ga.write)throw new q(28);u.seekable&&u.flags&1024&&qe(u,0,2);var Y=typeof N<"u";if(!Y)N=u.position;else if(!u.seekable)throw new q(70);return g=u.Ga.write(u,g,x,A,N,void 0),Y||(u.position+=g),g}function dt(u){var g,x=Se(u,x||0);u=H(u).size;var A=new Uint8Array(u);return Ue(x,A,0,u,0),g=A,Ge(x),g}var Tt;function vt(u,g,x){u=De("/dev/"+u);var A=Ze(!!g,!!x);ft||(ft=64);var N=ft++<<8|0;sr(N,{open(Y){Y.seekable=!1},close(){var Y;(Y=x==null?void 0:x.buffer)!=null&&Y.length&&x(10)},read(Y,se,je,_t){for(var it=0,It=0;It<_t;It++){try{var Gt=g()}catch{throw new q(29)}if(Gt===void 0&&it===0)throw new q(6);if(Gt==null)break;it++,se[je+It]=Gt}return it&&(Y.node.timestamp=Date.now()),it},write(Y,se,je,_t){for(var it=0;it<_t;it++)try{x(se[je+it])}catch{throw new q(29)}return _t&&(Y.node.timestamp=Date.now()),it}}),ss(u,A,N)}var ft,ve={},Ct;function rt(u,g,x){if(g.charAt(0)==="/")return g;if(u=u===-100?"/":Lt(u).path,g.length==0){if(!x)throw new q(44);return u}return De(u+"/"+g)}function Kt(u,g,x){u=u(g),U[x>>2]=u.dev,U[x+4>>2]=u.mode,F[x+8>>2]=u.nlink,U[x+12>>2]=u.uid,U[x+16>>2]=u.gid,U[x+20>>2]=u.rdev,te=[u.size>>>0,(ye=u.size,1<=+Math.abs(ye)?0<ye?+Math.floor(ye/4294967296)>>>0:~~+Math.ceil((ye-+(~~ye>>>0))/4294967296)>>>0:0)],U[x+24>>2]=te[0],U[x+28>>2]=te[1],U[x+32>>2]=4096,U[x+36>>2]=u.blocks,g=u.atime.getTime();var A=u.mtime.getTime(),N=u.ctime.getTime();return te=[Math.floor(g/1e3)>>>0,(ye=Math.floor(g/1e3),1<=+Math.abs(ye)?0<ye?+Math.floor(ye/4294967296)>>>0:~~+Math.ceil((ye-+(~~ye>>>0))/4294967296)>>>0:0)],U[x+40>>2]=te[0],U[x+44>>2]=te[1],F[x+48>>2]=g%1e3*1e3,te=[Math.floor(A/1e3)>>>0,(ye=Math.floor(A/1e3),1<=+Math.abs(ye)?0<ye?+Math.floor(ye/4294967296)>>>0:~~+Math.ceil((ye-+(~~ye>>>0))/4294967296)>>>0:0)],U[x+56>>2]=te[0],U[x+60>>2]=te[1],F[x+64>>2]=A%1e3*1e3,te=[Math.floor(N/1e3)>>>0,(ye=Math.floor(N/1e3),1<=+Math.abs(ye)?0<ye?+Math.floor(ye/4294967296)>>>0:~~+Math.ceil((ye-+(~~ye>>>0))/4294967296)>>>0:0)],U[x+72>>2]=te[0],U[x+76>>2]=te[1],F[x+80>>2]=N%1e3*1e3,te=[u.ino>>>0,(ye=u.ino,1<=+Math.abs(ye)?0<ye?+Math.floor(ye/4294967296)>>>0:~~+Math.ceil((ye-+(~~ye>>>0))/4294967296)>>>0:0)],U[x+88>>2]=te[0],U[x+92>>2]=te[1],0}var En=void 0;function Bt(){var u=U[+En>>2];return En+=4,u}var Tn=(u,g)=>g+2097152>>>0<4194305-!!u?(u>>>0)+4294967296*g:NaN,wt=[0,31,60,91,121,152,182,213,244,274,305,335],rn=[0,31,59,90,120,151,181,212,243,273,304,334],Yt={},zt=()=>{if(!Ht){var u={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:y||"./this.program"},g;for(g in Yt)Yt[g]===void 0?delete u[g]:u[g]=Yt[g];var x=[];for(g in u)x.push(`${g}=${u[g]}`);Ht=x}return Ht},Ht,Pi=u=>{var g=ke(u)+1,x=pi(g);return de(u,w,x,g),x},Xn=(u,g,x,A)=>{var N={string:it=>{var It=0;return it!=null&&it!==0&&(It=Pi(it)),It},array:it=>{var It=pi(it.length);return E.set(it,It),It}};u=l["_"+u];var Y=[],se=0;if(A)for(var je=0;je<A.length;je++){var _t=N[x[je]];_t?(se===0&&(se=ar()),Y[je]=_t(A[je])):Y[je]=A[je]}return x=u(...Y),x=function(it){return se!==0&&rr(se),g==="string"?it?Oe(w,it):"":g==="boolean"?!!it:it}(x)},zr=0,Hr=(u,g)=>(g=g==1?pi(u.length):go(u.length),u.subarray||u.slice||(u=new Uint8Array(u)),w.set(u,g),g),Li,mo=[],$n,rs=u=>{Li.delete($n.get(u)),$n.set(u,null),mo.push(u)},Gr=(u,g)=>{if(!Li){Li=new WeakMap;var x=$n.length;if(Li)for(var A=0;A<0+x;A++){var N=$n.get(A);N&&Li.set(N,A)}}if(x=Li.get(u)||0)return x;if(mo.length)x=mo.pop();else{try{$n.grow(1)}catch(je){throw je instanceof RangeError?"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.":je}x=$n.length-1}try{$n.set(x,u)}catch(je){if(!(je instanceof TypeError))throw je;if(typeof WebAssembly.Function=="function"){A=WebAssembly.Function,N={i:"i32",j:"i64",f:"f32",d:"f64",e:"externref",p:"i32"};for(var Y={parameters:[],results:g[0]=="v"?[]:[N[g[0]]]},se=1;se<g.length;++se)Y.parameters.push(N[g[se]]);g=new A(Y,u)}else{for(A=[1],N=g.slice(0,1),g=g.slice(1),Y={i:127,p:127,j:126,f:125,d:124,e:111},A.push(96),se=g.length,128>se?A.push(se):A.push(se%128|128,se>>7),se=0;se<g.length;++se)A.push(Y[g[se]]);N=="v"?A.push(0):A.push(1,Y[N]),g=[0,97,115,109,1,0,0,0,1],N=A.length,128>N?g.push(N):g.push(N%128|128,N>>7),g.push(...A),g.push(2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0),g=new WebAssembly.Module(new Uint8Array(g)),g=new WebAssembly.Instance(g,{e:{f:u}}).exports.f}$n.set(x,g)}return Li.set(u,x),x};[44].forEach(u=>{Xe[u]=new q(u),Xe[u].stack="<generic error, no stack>"}),ie=Array(4096),Br(be,"/"),_n("/tmp"),_n("/home"),_n("/home/web_user"),function(){_n("/dev"),sr(259,{read:()=>0,write:(A,N,Y,se)=>se}),ss("/dev/null",259),he(1280,ze),he(1536,We),ss("/dev/tty",1280),ss("/dev/tty1",1536);var u=new Uint8Array(1024),g=0,x=()=>(g===0&&(g=re(u).byteLength),u[--g]);vt("random",x),vt("urandom",x),_n("/dev/shm"),_n("/dev/shm/tmp")}(),function(){_n("/proc");var u=_n("/proc/self");_n("/proc/self/fd"),Br({Qa(){var g=zn(u,"fd",16895,73);return g.Fa={lookup(x,A){var N=Lt(+A);return x={parent:null,Qa:{sb:"fake"},Fa:{readlink:()=>N.path}},x.parent=x}},g}},"/proc/self/fd")}();var Yd={a:(u,g,x,A)=>{Ve(`Assertion failed: ${u?Oe(w,u):""}, at: `+[g?g?Oe(w,g):"":"unknown filename",x,A?A?Oe(w,A):"":"unknown function"])},h:function(u,g){try{return u=u?Oe(w,u):"",_e(u,g),0}catch(x){if(typeof ve>"u"||x.name!=="ErrnoError")throw x;return-x.Ja}},H:function(u,g,x){try{if(g=g?Oe(w,g):"",g=rt(u,g),x&-8)return-28;var A=Ke(g,{Ra:!0}).node;return A?(u="",x&4&&(u+="r"),x&2&&(u+="w"),x&1&&(u+="x"),u&&jn(A,u)?-2:0):-44}catch(N){if(typeof ve>"u"||N.name!=="ErrnoError")throw N;return-N.Ja}},i:function(u,g){try{var x=Lt(u);return _e(x.node,g),0}catch(A){if(typeof ve>"u"||A.name!=="ErrnoError")throw A;return-A.Ja}},g:function(u){try{var g=Lt(u).node,x=typeof g=="string"?Ke(g,{Ra:!0}).node:g;if(!x.Fa.Na)throw new q(63);return x.Fa.Na(x,{timestamp:Date.now()}),0}catch(A){if(typeof ve>"u"||A.name!=="ErrnoError")throw A;return-A.Ja}},b:function(u,g,x){En=x;try{var A=Lt(u);switch(g){case 0:var N=Bt();if(0>N)break;for(;pe[N];)N++;return Fr(A,N).fd;case 1:case 2:return 0;case 3:return A.flags;case 4:return N=Bt(),A.flags|=N,0;case 12:return N=Bt(),k[N+0>>1]=2,0;case 13:case 14:return 0}return-28}catch(Y){if(typeof ve>"u"||Y.name!=="ErrnoError")throw Y;return-Y.Ja}},f:function(u,g){try{var x=Lt(u);return Kt(H,x.path,g)}catch(A){if(typeof ve>"u"||A.name!=="ErrnoError")throw A;return-A.Ja}},n:function(u,g,x){g=Tn(g,x);try{if(isNaN(g))return 61;var A=Lt(u);if(!(A.flags&2097155))throw new q(28);return Ae(A.node,g),0}catch(N){if(typeof ve>"u"||N.name!=="ErrnoError")throw N;return-N.Ja}},C:function(u,g){try{if(g===0)return-28;var x=ke("/")+1;return g<x?-68:(de("/",w,u,g),x)}catch(A){if(typeof ve>"u"||A.name!=="ErrnoError")throw A;return-A.Ja}},F:function(u,g){try{return u=u?Oe(w,u):"",Kt(ce,u,g)}catch(x){if(typeof ve>"u"||x.name!=="ErrnoError")throw x;return-x.Ja}},z:function(u,g,x){try{return g=g?Oe(w,g):"",g=rt(u,g),g=De(g),g[g.length-1]==="/"&&(g=g.substr(0,g.length-1)),_n(g,x),0}catch(A){if(typeof ve>"u"||A.name!=="ErrnoError")throw A;return-A.Ja}},E:function(u,g,x,A){try{g=g?Oe(w,g):"";var N=A&256;return g=rt(u,g,A&4096),Kt(N?ce:H,g,x)}catch(Y){if(typeof ve>"u"||Y.name!=="ErrnoError")throw Y;return-Y.Ja}},x:function(u,g,x,A){En=A;try{g=g?Oe(w,g):"",g=rt(u,g);var N=A?Bt():0;return Se(g,x,N).fd}catch(Y){if(typeof ve>"u"||Y.name!=="ErrnoError")throw Y;return-Y.Ja}},v:function(u,g,x,A){try{if(g=g?Oe(w,g):"",g=rt(u,g),0>=A)return-28;var N=X(g),Y=Math.min(A,ke(N)),se=E[x+Y];return de(N,w,x,A+1),E[x+Y]=se,Y}catch(je){if(typeof ve>"u"||je.name!=="ErrnoError")throw je;return-je.Ja}},u:function(u){try{return u=u?Oe(w,u):"",z(u),0}catch(g){if(typeof ve>"u"||g.name!=="ErrnoError")throw g;return-g.Ja}},G:function(u,g){try{return u=u?Oe(w,u):"",Kt(H,u,g)}catch(x){if(typeof ve>"u"||x.name!=="ErrnoError")throw x;return-x.Ja}},r:function(u,g,x){try{return g=g?Oe(w,g):"",g=rt(u,g),x===0?j(g):x===512?z(g):Ve("Invalid flags passed to unlinkat"),0}catch(A){if(typeof ve>"u"||A.name!=="ErrnoError")throw A;return-A.Ja}},q:function(u,g,x){try{if(g=g?Oe(w,g):"",g=rt(u,g,!0),x){var A=F[x>>2]+4294967296*U[x+4>>2],N=U[x+8>>2];Y=1e3*A+N/1e6,x+=16,A=F[x>>2]+4294967296*U[x+4>>2],N=U[x+8>>2],se=1e3*A+N/1e6}else var Y=Date.now(),se=Y;u=Y;var je=Ke(g,{Ra:!0}).node;return je.Fa.Na(je,{timestamp:Math.max(u,se)}),0}catch(_t){if(typeof ve>"u"||_t.name!=="ErrnoError")throw _t;return-_t.Ja}},l:function(u,g,x){u=new Date(1e3*Tn(u,g)),U[x>>2]=u.getSeconds(),U[x+4>>2]=u.getMinutes(),U[x+8>>2]=u.getHours(),U[x+12>>2]=u.getDate(),U[x+16>>2]=u.getMonth(),U[x+20>>2]=u.getFullYear()-1900,U[x+24>>2]=u.getDay(),g=u.getFullYear(),U[x+28>>2]=(g%4!==0||g%100===0&&g%400!==0?rn:wt)[u.getMonth()]+u.getDate()-1|0,U[x+36>>2]=-(60*u.getTimezoneOffset()),g=new Date(u.getFullYear(),6,1).getTimezoneOffset();var A=new Date(u.getFullYear(),0,1).getTimezoneOffset();U[x+32>>2]=(g!=A&&u.getTimezoneOffset()==Math.min(A,g))|0},j:function(u,g,x,A,N,Y,se,je){N=Tn(N,Y);try{if(isNaN(N))return 61;var _t=Lt(A);if(g&2&&!(x&2)&&(_t.flags&2097155)!==2)throw new q(2);if((_t.flags&2097155)===1)throw new q(2);if(!_t.Ga.ab)throw new q(43);var it=_t.Ga.ab(_t,u,N,g,x),It=it.Cb;return U[se>>2]=it.tb,F[je>>2]=It,0}catch(Gt){if(typeof ve>"u"||Gt.name!=="ErrnoError")throw Gt;return-Gt.Ja}},k:function(u,g,x,A,N,Y,se){Y=Tn(Y,se);try{var je=Lt(N);if(x&2){if((je.node.mode&61440)!==32768)throw new q(43);if(!(A&2)){var _t=w.slice(u,u+g);je.Ga.bb&&je.Ga.bb(je,_t,Y,g,A)}}}catch(it){if(typeof ve>"u"||it.name!=="ErrnoError")throw it;return-it.Ja}},y:(u,g,x,A)=>{var N=new Date().getFullYear(),Y=new Date(N,0,1).getTimezoneOffset();N=new Date(N,6,1).getTimezoneOffset(),F[u>>2]=60*Math.max(Y,N),U[g>>2]=+(Y!=N),g=se=>{var je=Math.abs(se);return`UTC${0<=se?"-":"+"}${String(Math.floor(je/60)).padStart(2,"0")}${String(je%60).padStart(2,"0")}`},u=g(Y),g=g(N),N<Y?(de(u,w,x,17),de(g,w,A,17)):(de(u,w,A,17),de(g,w,x,17))},d:()=>Date.now(),s:()=>2147483648,c:()=>performance.now(),o:u=>{var g=w.length;if(u>>>=0,2147483648<u)return!1;for(var x=1;4>=x;x*=2){var A=g*(1+.2/x);A=Math.min(A,u+100663296);var N=Math;A=Math.max(u,A);e:{N=(N.min.call(N,2147483648,A+(65536-A%65536)%65536)-C.buffer.byteLength+65535)/65536;try{C.grow(N),K();var Y=1;break e}catch{}Y=void 0}if(Y)return!0}return!1},A:(u,g)=>{var x=0;return zt().forEach((A,N)=>{var Y=g+x;for(N=F[u+4*N>>2]=Y,Y=0;Y<A.length;++Y)E[N++]=A.charCodeAt(Y);E[N]=0,x+=A.length+1}),0},B:(u,g)=>{var x=zt();F[u>>2]=x.length;var A=0;return x.forEach(N=>A+=N.length+1),F[g>>2]=A,0},e:function(u){try{var g=Lt(u);return Ge(g),0}catch(x){if(typeof ve>"u"||x.name!=="ErrnoError")throw x;return x.Ja}},p:function(u,g){try{var x=Lt(u);return E[g]=x.tty?2:qt(x.mode)?3:(x.mode&61440)===40960?7:4,k[g+2>>1]=0,te=[0,(ye=0,1<=+Math.abs(ye)?0<ye?+Math.floor(ye/4294967296)>>>0:~~+Math.ceil((ye-+(~~ye>>>0))/4294967296)>>>0:0)],U[g+8>>2]=te[0],U[g+12>>2]=te[1],te=[0,(ye=0,1<=+Math.abs(ye)?0<ye?+Math.floor(ye/4294967296)>>>0:~~+Math.ceil((ye-+(~~ye>>>0))/4294967296)>>>0:0)],U[g+16>>2]=te[0],U[g+20>>2]=te[1],0}catch(A){if(typeof ve>"u"||A.name!=="ErrnoError")throw A;return A.Ja}},w:function(u,g,x,A){try{e:{var N=Lt(u);u=g;for(var Y,se=g=0;se<x;se++){var je=F[u>>2],_t=F[u+4>>2];u+=8;var it=Ue(N,E,je,_t,Y);if(0>it){var It=-1;break e}if(g+=it,it<_t)break;typeof Y<"u"&&(Y+=it)}It=g}return F[A>>2]=It,0}catch(Gt){if(typeof ve>"u"||Gt.name!=="ErrnoError")throw Gt;return Gt.Ja}},m:function(u,g,x,A,N){g=Tn(g,x);try{if(isNaN(g))return 61;var Y=Lt(u);return qe(Y,g,A),te=[Y.position>>>0,(ye=Y.position,1<=+Math.abs(ye)?0<ye?+Math.floor(ye/4294967296)>>>0:~~+Math.ceil((ye-+(~~ye>>>0))/4294967296)>>>0:0)],U[N>>2]=te[0],U[N+4>>2]=te[1],Y.gb&&g===0&&A===0&&(Y.gb=null),0}catch(se){if(typeof ve>"u"||se.name!=="ErrnoError")throw se;return se.Ja}},D:function(u){var x;try{var g=Lt(u);return(x=g.Ga)!=null&&x.fsync?g.Ga.fsync(g):0}catch(A){if(typeof ve>"u"||A.name!=="ErrnoError")throw A;return A.Ja}},t:function(u,g,x,A){try{e:{var N=Lt(u);u=g;for(var Y,se=g=0;se<x;se++){var je=F[u>>2],_t=F[u+4>>2];u+=8;var it=ut(N,E,je,_t,Y);if(0>it){var It=-1;break e}g+=it,typeof Y<"u"&&(Y+=it)}It=g}return F[A>>2]=It,0}catch(Gt){if(typeof ve>"u"||Gt.name!=="ErrnoError")throw Gt;return Gt.Ja}}},Be=function(){var x;function u(A){var N;return Be=A.exports,C=Be.I,K(),$n=Be.K,J.unshift(Be.J),Me--,(N=l.monitorRunDependencies)==null||N.call(l,Me),Me==0&&Re&&(A=Re,Re=null,A()),Be}var g={a:Yd};if(Me++,(x=l.monitorRunDependencies)==null||x.call(l,Me),l.instantiateWasm)try{return l.instantiateWasm(g,u)}catch(A){return I(`Module.instantiateWasm callback failed with error: ${A}`),!1}return Ee||(Ee=ee("sql-wasm.wasm")?"sql-wasm.wasm":l.locateFile?l.locateFile("sql-wasm.wasm",v):v+"sql-wasm.wasm"),Qe(g,function(A){u(A.instance)}),{}}();l._sqlite3_free=u=>(l._sqlite3_free=Be.L)(u),l._sqlite3_value_text=u=>(l._sqlite3_value_text=Be.M)(u),l._sqlite3_prepare_v2=(u,g,x,A,N)=>(l._sqlite3_prepare_v2=Be.N)(u,g,x,A,N),l._sqlite3_step=u=>(l._sqlite3_step=Be.O)(u),l._sqlite3_reset=u=>(l._sqlite3_reset=Be.P)(u),l._sqlite3_exec=(u,g,x,A,N)=>(l._sqlite3_exec=Be.Q)(u,g,x,A,N),l._sqlite3_finalize=u=>(l._sqlite3_finalize=Be.R)(u),l._sqlite3_column_name=(u,g)=>(l._sqlite3_column_name=Be.S)(u,g),l._sqlite3_column_text=(u,g)=>(l._sqlite3_column_text=Be.T)(u,g),l._sqlite3_column_type=(u,g)=>(l._sqlite3_column_type=Be.U)(u,g),l._sqlite3_errmsg=u=>(l._sqlite3_errmsg=Be.V)(u),l._sqlite3_clear_bindings=u=>(l._sqlite3_clear_bindings=Be.W)(u),l._sqlite3_value_blob=u=>(l._sqlite3_value_blob=Be.X)(u),l._sqlite3_value_bytes=u=>(l._sqlite3_value_bytes=Be.Y)(u),l._sqlite3_value_double=u=>(l._sqlite3_value_double=Be.Z)(u),l._sqlite3_value_int=u=>(l._sqlite3_value_int=Be._)(u),l._sqlite3_value_type=u=>(l._sqlite3_value_type=Be.$)(u),l._sqlite3_result_blob=(u,g,x,A)=>(l._sqlite3_result_blob=Be.aa)(u,g,x,A),l._sqlite3_result_double=(u,g)=>(l._sqlite3_result_double=Be.ba)(u,g),l._sqlite3_result_error=(u,g,x)=>(l._sqlite3_result_error=Be.ca)(u,g,x),l._sqlite3_result_int=(u,g)=>(l._sqlite3_result_int=Be.da)(u,g),l._sqlite3_result_int64=(u,g,x)=>(l._sqlite3_result_int64=Be.ea)(u,g,x),l._sqlite3_result_null=u=>(l._sqlite3_result_null=Be.fa)(u),l._sqlite3_result_text=(u,g,x,A)=>(l._sqlite3_result_text=Be.ga)(u,g,x,A),l._sqlite3_aggregate_context=(u,g)=>(l._sqlite3_aggregate_context=Be.ha)(u,g),l._sqlite3_column_count=u=>(l._sqlite3_column_count=Be.ia)(u),l._sqlite3_data_count=u=>(l._sqlite3_data_count=Be.ja)(u),l._sqlite3_column_blob=(u,g)=>(l._sqlite3_column_blob=Be.ka)(u,g),l._sqlite3_column_bytes=(u,g)=>(l._sqlite3_column_bytes=Be.la)(u,g),l._sqlite3_column_double=(u,g)=>(l._sqlite3_column_double=Be.ma)(u,g),l._sqlite3_bind_blob=(u,g,x,A,N)=>(l._sqlite3_bind_blob=Be.na)(u,g,x,A,N),l._sqlite3_bind_double=(u,g,x)=>(l._sqlite3_bind_double=Be.oa)(u,g,x),l._sqlite3_bind_int=(u,g,x)=>(l._sqlite3_bind_int=Be.pa)(u,g,x),l._sqlite3_bind_text=(u,g,x,A,N)=>(l._sqlite3_bind_text=Be.qa)(u,g,x,A,N),l._sqlite3_bind_parameter_index=(u,g)=>(l._sqlite3_bind_parameter_index=Be.ra)(u,g),l._sqlite3_sql=u=>(l._sqlite3_sql=Be.sa)(u),l._sqlite3_normalized_sql=u=>(l._sqlite3_normalized_sql=Be.ta)(u),l._sqlite3_changes=u=>(l._sqlite3_changes=Be.ua)(u),l._sqlite3_close_v2=u=>(l._sqlite3_close_v2=Be.va)(u),l._sqlite3_create_function_v2=(u,g,x,A,N,Y,se,je,_t)=>(l._sqlite3_create_function_v2=Be.wa)(u,g,x,A,N,Y,se,je,_t),l._sqlite3_open=(u,g)=>(l._sqlite3_open=Be.xa)(u,g);var go=l._malloc=u=>(go=l._malloc=Be.ya)(u),Vr=l._free=u=>(Vr=l._free=Be.za)(u);l._RegisterExtensionFunctions=u=>(l._RegisterExtensionFunctions=Be.Aa)(u);var Jc=(u,g)=>(Jc=Be.Ba)(u,g),rr=u=>(rr=Be.Ca)(u),pi=u=>(pi=Be.Da)(u),ar=()=>(ar=Be.Ea)();l.stackSave=()=>ar(),l.stackRestore=u=>rr(u),l.stackAlloc=u=>pi(u),l.cwrap=(u,g,x,A)=>{var N=!x||x.every(Y=>Y==="number"||Y==="boolean");return g!=="string"&&N&&!A?l["_"+u]:(...Y)=>Xn(u,g,x,Y)},l.addFunction=Gr,l.removeFunction=rs,l.UTF8ToString=Te,l.ALLOC_NORMAL=zr,l.allocate=Hr,l.allocateUTF8OnStack=Pi;var Wr;Re=function u(){Wr||Zc(),Wr||(Re=u)};function Zc(){function u(){var x;if(!Wr&&(Wr=!0,l.calledRun=!0,!D)){if(l.noFSInit||Tt||(Tt=!0,l.stdin=l.stdin,l.stdout=l.stdout,l.stderr=l.stderr,l.stdin?vt("stdin",l.stdin):T("/dev/tty","/dev/stdin"),l.stdout?vt("stdout",null,l.stdout):T("/dev/tty","/dev/stdout"),l.stderr?vt("stderr",null,l.stderr):T("/dev/tty1","/dev/stderr"),Se("/dev/stdin",0),Se("/dev/stdout",1),Se("/dev/stderr",1)),we=!1,Je(J),(x=l.onRuntimeInitialized)==null||x.call(l),l.postRun)for(typeof l.postRun=="function"&&(l.postRun=[l.postRun]);l.postRun.length;){var g=l.postRun.shift();fe.unshift(g)}Je(fe)}}if(!(0<Me)){if(l.preRun)for(typeof l.preRun=="function"&&(l.preRun=[l.preRun]);l.preRun.length;)me();Je(ae),0<Me||(l.setStatus?(l.setStatus("Running..."),setTimeout(function(){setTimeout(function(){l.setStatus("")},1),u()},1)):u())}}if(l.preInit)for(typeof l.preInit=="function"&&(l.preInit=[l.preInit]);0<l.preInit.length;)l.preInit.pop()();return Zc(),o}),t)};i.exports=n,i.exports.default=n})(Ad);var vw=Ad.exports;const yw=wd(vw),xw="/realm/play/assets/sql-wasm-Bku9E_kW.wasm",bw="justa-web",$i="db";function Rd(){return new Promise((i,e)=>{const t=indexedDB.open(bw,1);t.onupgradeneeded=()=>t.result.createObjectStore($i),t.onsuccess=()=>i(t.result),t.onerror=()=>e(t.error)})}async function ww(){try{const i=await Rd();return await new Promise(e=>{const t=i.transaction($i).objectStore($i).get($i);t.onsuccess=()=>e(t.result??null),t.onerror=()=>e(null)})}catch{return null}}async function Sw(i){try{const e=await Rd();await new Promise(t=>{const n=e.transaction($i,"readwrite");n.objectStore($i).put(i,$i),n.oncomplete=t,n.onerror=t})}catch{}}function Mw(i,e){let t=i[0];const n={};return e.forEach((s,r)=>{const a="$p"+r;if(s!==null&&!["string","number","boolean"].includes(typeof s))throw new TypeError(`ctx.sql: \${} binds string, number, boolean or null, got ${typeof s}`);n[a]=typeof s=="boolean"?s?1:0:s,t+=a+i[r+1]}),{text:t,params:n}}async function Ew({persist:i=!0}={}){const e=await yw({locateFile:()=>xw}),t=i?await ww():null;let n=t?new e.Database(t):new e.Database,s=!1,r=null;const a=()=>{!i||!s||r||(s=!1,r=Sw(n.export()).then(()=>{r=null,s&&a()}))};function o(c,l,f){var _,m,R;const{text:h,params:d}=Mw(l,f);c!=null&&(d["@caller"]=c);let p=[],y=0;n.run("BEGIN");try{for(const b of n.iterateStatements(h)){b.bind(d);const S=[];for(;b.step();)S.push(b.getAsObject());b.getColumnNames().length&&(p=S),y+=n.getRowsModified(),b.free()}n.run("COMMIT")}catch(b){try{n.run("ROLLBACK")}catch{}throw b}const v=((R=(m=(_=n.exec("SELECT last_insert_rowid() AS id")[0])==null?void 0:_.values)==null?void 0:m[0])==null?void 0:R[0])??0;return y&&(s=!0,queueMicrotask(a)),{rows:p,changes:y,lastInsertRowid:Number(v)}}return{sqlFor:c=>(l,...f)=>Promise.resolve().then(()=>o(c,l,f)),async migrate(c){await c((l,...f)=>Promise.resolve().then(()=>o(null,l,f)))},async reset(){n.close(),n=new e.Database,s=!0,a()},get raw(){return n}}}function ui(i){return i=(i^i>>>16)>>>0,i=Math.imul(i,2146121005)>>>0,i=(i^i>>>15)>>>0,i=Math.imul(i,2221713035)>>>0,(i^i>>>16)>>>0}const Qt=(i,e)=>ui((i^ui(e+2654435769))>>>0)/4294967296;function ba(i){const e=Math.floor(i),t=i-e,n=t*t*(3-2*t),s=ui(e|0)/2147483648-1,r=ui(e+1|0)/2147483648-1;return s+(r-s)*n}const Lf={depth:1};function Tw(){return{seed:0,t:0,age:0,life:1/0,time:0,mobile:!1,size:0,spin:0,glo:1,tint:[1,1,1],p:[0,0,0],v:[0,0,0],offset:[0,0,0]}}const al=/\s*(?:(\d+(?:\.\d+)?|\.\d+)|(\.\.)|([A-Za-z_][A-Za-z0-9_]*(?:-[A-Za-z][A-Za-z0-9_]*)*)|([$%#][A-Za-z_][A-Za-z0-9_]*)|([()<>,:+\-*/.?|~@;]))/y;function Aw(i){const e=[];for(al.lastIndex=0;;){const t=al.lastIndex;if(/^\s*$/.test(i.slice(t)))break;const n=al.exec(i);if(!n)throw new Error(`fx: cannot read "${i.slice(t)}"`);n[1]!==void 0?e.push({k:"num",v:Number(n[1])}):n[2]!==void 0?e.push({k:".."}):n[3]!==void 0?e.push({k:"id",v:n[3]}):n[4]!==void 0?e.push({k:n[4][0],v:n[4].slice(1)}):e.push({k:n[5]})}return e}const Ri=i=>typeof i!="number",Ji=()=>[0,0,0],Rw={"+":(i,e)=>i+e,"-":(i,e)=>i-e,"*":(i,e)=>i*e,"/":(i,e)=>e===0?0:i/e};function If(i,e,t,n){const s=Ri(e),r=Ri(t);return!s&&!r?i(e,t):(n[0]=i(s?e[0]:e,r?t[0]:t),n[1]=i(s?e[1]:e,r?t[1]:t),n[2]=i(s?e[2]:e,r?t[2]:t),n)}function Cw(i,e,t,n){const s=Ri(i),r=Ri(e);if(!s&&!r)return i+(e-i)*t;for(let a=0;a<3;a++){const o=s?i[a]:i,c=r?e[a]:e;n[a]=o+(c-o)*t}return n}const Pw=(i,e)=>Ri(i)?i:(e[0]=e[1]=e[2]=i,e),vr=i=>({fn:()=>i,k:"const",v:i}),Lw=i=>(i.k==="const",i);class Iw{constructor(e,t){this.t=Aw(e),this.i=0,this.ids=t}peek(e){var t;return((t=this.t[this.i])==null?void 0:t.k)===e}take(e){const t=this.t[this.i];if(!t||e&&t.k!==e)throw new Error(`fx: expected ${e??"more"} at ${this.i}`);return this.i++,t}done(){return this.i>=this.t.length}value(){if(this.peek("?"))return this.tier();let e=this.sum();if(!this.peek(">"))return e;const t=[{t:0,n:e}];for(;this.peek(">");){this.take(">");const n=this.sum();if(this.peek(":")){if(this.take(":"),n.k!=="const"||Ri(n.v))throw new Error("fx: a ramp's time is a number");t.push({t:n.v,n:this.sum()})}else{t.push({t:1,n});break}}return Dw(t)}tier(){this.take("?");const e=this.take("id").v;this.take(":");const t=this.sum();this.take("|");const n=this.sum();if(e!=="mobile")throw new Error(`fx: unknown tier ?${e}`);return{fn:s=>s.mobile?t.fn(s):n.fn(s),k:"var"}}sum(){let e=this.product();for(;this.peek("+")||this.peek("-");){const t=this.take().k,n=this.product();e=ol(t,e,n)}return e}product(){let e=this.unary();for(;this.peek("*")||this.peek("/");){const t=this.take().k,n=this.unary();e=ol(t,e,n)}return e}unary(){return this.peek("-")?(this.take("-"),this.peek("num")?this.number(-this.take("num").v):ol("*",vr(-1),this.unary())):this.postfix(this.primary())}number(e){if(!this.peek(".."))return vr(e);this.take("..");const n=(this.peek("-")?(this.take("-"),-1):1)*this.take("num").v,s=this.ids.next++;return{fn:r=>e+(n-e)*Qt(r.seed,s),k:"var"}}postfix(e){var t;for(;;)if(this.peek("~"))this.take("~");else if(this.peek(".")&&((t=this.t[this.i+1])==null?void 0:t.k)==="id"){this.take(".");const n=this.take("id").v,s=this.args();e=Ow(e,n,s)}else return e}args(){this.take("(");const e=[];if(this.peek(")"))return this.take(")"),e;for(;e.push(this.value()),this.peek(",");)this.take(",");return this.take(")"),e}primary(){const e=this.t[this.i];if(!e)throw new Error("fx: a value is missing");if(e.k==="num")return this.number(this.take("num").v);if(e.k==="$")return this.take("$"),kw(e.v);if(e.k==="%"||e.k==="#")throw new Error(`fx: ${e.k}${e.v} is not read here yet`);if(e.k==="("){this.take("(");const t=this.value();return this.take(")"),t}if(e.k==="<"){this.take("<");const t=this.sum();this.take(",");const n=this.sum();this.take(",");const s=this.sum();if(this.take(">"),[t,n,s].every(a=>a.k==="const"))return vr([t.v,n.v,s.v]);const r=Ji();return{fn:a=>(r[0]=t.fn(a),r[1]=n.fn(a),r[2]=s.fn(a),r),k:"var"}}if(e.k==="id")return this.take("id"),this.peek("(")?Uw(e.v,this.args(),this.ids):{fn:()=>e.v,k:"name",name:e.v};throw new Error(`fx: unexpected ${e.k}`)}}function ol(i,e,t){const n=Rw[i];if(e.k==="const"&&t.k==="const")return vr(If(n,e.v,t.v,Ji()));const s=Ji();return{fn:r=>If(n,e.fn(r),t.fn(r),s),k:"var"}}function Dw(i){const e=Ji();return{k:"var",fn(t){const n=Math.min(Math.max(t.t,0),1);let s=1;for(;s<i.length-1&&i[s].t<n;)s++;const r=i[s-1],a=i[s],o=a.t-r.t;return Cw(r.n.fn(t),a.n.fn(t),o>0?Math.min(Math.max((n-r.t)/o,0),1):1,e)}}}function kw(i){const e={size:t=>t.size,spin:t=>t.spin,glo:t=>t.glo,tint:t=>t.tint,age:t=>t.age,life:t=>Number.isFinite(t.life)?t.life:0,v:t=>t.v}[i];if(!e)throw new Error(`fx: unknown variable $${i}`);return{fn:e,k:"var"}}function Ow(i,e,t){if(e==="c"){const r=t[0],a=Ji();return{fn:o=>{const c=i.fn(o),l=r.fn(o),f=Ri(c);return a[0]=f?c[0]:c,a[1]=(f?c[1]:c)+l,a[2]=f?c[2]:c,a},k:"var",shape:i.shape}}const n={sin:Math.sin,cos:Math.cos,abs:Math.abs,floor:Math.floor,sqrt:Math.sqrt,fract:r=>r-Math.floor(r)}[e];if(!n)throw new Error(`fx: unknown .${e}()`);const s=Ji();return{fn:r=>{const a=i.fn(r);return Ri(a)?(s[0]=n(a[0]),s[1]=n(a[1]),s[2]=n(a[2]),s):n(a)},k:"var"}}function ll(i,e,t,n=1){const s=2*i-1,r=Math.sqrt(Math.max(0,1-s*s)),a=2*Math.PI*e;return t[0]=r*Math.cos(a)*n,t[1]=s*n,t[2]=r*Math.sin(a)*n,t}function Nw(i,e,t,n){const s=2*Math.PI*e,r=i[0],a=i[1],o=i[2],c=.9*Math.cos(.9*s*a+3.3),l=Math.cos(s*o+1.3*t+2.1),f=1.3*Math.cos(1.3*s*o+.7),h=Math.cos(s*r+1.1*t+4.2),d=1.1*Math.cos(1.1*s*r+1.9),p=Math.cos(s*a+1.7*t);return n[0]=c-l,n[1]=f-h,n[2]=d-p,n}function Uw(i,e,t){const n=(a,o,c=0)=>e[a]?e[a].fn(o):c,s=t.next,r=Ji();switch(t.next+=4,i){case"up":return{fn:a=>(r[0]=0,r[1]=n(0,a,1),r[2]=0,r),k:"var"};case"sdir":case"sphereDir":return{fn:a=>ll(Qt(a.seed,s),Qt(a.seed,s+1),r),k:"var"};case"cone":return{k:"var",fn(a){const o=n(0,a,15)*Math.PI/180,c=1-Qt(a.seed,s)*(1-Math.cos(o)),l=Math.sqrt(Math.max(0,1-c*c)),f=2*Math.PI*Qt(a.seed,s+1);return r[0]=l*Math.cos(f),r[1]=c,r[2]=l*Math.sin(f),r}};case"radial":return{k:"var",fn(a){const o=a.offset[0],c=a.offset[2],l=Math.hypot(o,c),f=n(0,a,1);if(r[1]=0,l>1e-6)return r[0]=o/l*f,r[2]=c/l*f,r;const h=2*Math.PI*Qt(a.seed,s);return r[0]=Math.cos(h)*f,r[2]=Math.sin(h)*f,r}};case"blast":return{k:"var",fn(a){const o=a.offset,c=Math.hypot(o[0],o[1],o[2]),l=n(0,a,1);return c>1e-6?(r[0]=o[0]/c*l,r[1]=o[1]/c*l,r[2]=o[2]/c*l,r):ll(Qt(a.seed,s),Qt(a.seed,s+1),r,l)}};case"grav":case"gravity":return vr([0,-9.81,0]);case"buoy":case"buoyancy":return{fn:a=>(r[0]=0,r[1]=n(0,a,1),r[2]=0,r),k:"var"};case"drag":return{fn:a=>{const o=n(0,a,1);return r[0]=-o*a.v[0],r[1]=-o*a.v[1],r[2]=-o*a.v[2],r},k:"var"};case"curl":return{fn:a=>Nw(a.p,n(0,a,.5),a.time,r),k:"var"};case"force":return{fn:a=>Pw(n(0,a,0),r),k:"var"};case"hdr":case"rgb":case"vec3":return{fn:a=>(r[0]=n(0,a),r[1]=n(1,a),r[2]=n(2,a),r),k:"var"};case"spin":return{fn:a=>a.age*(2*Qt(a.seed,s)-1)*n(0,a,1)*2*Math.PI,k:"var"};case"flick":case"flicker":return{fn:a=>1+Lf.depth*n(1,a,.15)*ba(a.time*n(0,a,1)+a.seed%997),k:"var"};case"fire":case"firelight":return{fn:a=>1+Lf.depth*(.25*ba(a.time*n(0,a,1.2)+3.1)+.15*ba(a.time*n(1,a,2)+17.7)),k:"var"};case"noise":return{fn:a=>ba(n(0,a,a.time)),k:"var"};case"time":return{fn:a=>a.time,k:"var"};case"point":return{fn:()=>(r[0]=r[1]=r[2]=0,r),k:"var",shape:!0};case"disc":return{k:"var",shape:!0,fn(a){const o=n(0,a,1)*Math.sqrt(Qt(a.seed,s)),c=2*Math.PI*Qt(a.seed,s+1);return r[0]=o*Math.cos(c),r[1]=0,r[2]=o*Math.sin(c),r}};case"sphere":return{k:"var",shape:!0,fn(a){const o=n(0,a,1)*Math.cbrt(Qt(a.seed,s+2));return ll(Qt(a.seed,s),Qt(a.seed,s+1),r,o)}};case"box":return{fn:a=>{for(let o=0;o<3;o++)r[o]=(2*Qt(a.seed,s+o)-1)*n(o,a,1);return r},k:"var",shape:!0};case"line":return{k:"var",shape:!0,fn(a){const o=n(1,a,1),c=n(2,a,0),l=n(3,a,0),f=Math.hypot(o,c,l)||1,h=(Qt(a.seed,s)-.5)*n(0,a,1);return r[0]=o/f*h,r[1]=c/f*h,r[2]=l/f*h,r}};case"sprite":case"light":return{fn:()=>null,k:"render",name:i,args:e};case"bounce":return{fn:()=>null,k:"floor",args:e};default:throw new Error(`fx: unknown ${i}()`)}}function Df(i,e={next:1}){const t=new Iw(String(i),e),n=t.value();if(!t.done())throw new Error(`fx: "${i}" has more than one value`);return Lw(n)}const Fw=["life","v","size","spin","tint"],Bw=["acc","sz","col","a","rot","glo"],zw=new Set(["rate","burst","n","on","at","floor","r",...Fw,...Bw]),kf=8;function Hw(i){const e=[];let t=0,n="";for(const s of i)s==="("?t++:s===")"&&(t=Math.max(0,t-1)),/\s/.test(s)&&t===0?(n&&e.push(n),n=""):n+=s;return n&&e.push(n),e}function Gw(i){if((i==null?void 0:i.k)!=="render")throw new Error("fx: r= takes sprite(...) or light(...)");const e=n=>i.args[n],t=(n,s)=>{var r;return((r=e(n))==null?void 0:r.k)==="name"?e(n).name:s};if(i.name==="sprite"){const n=e(3);if(n&&n.k!=="const")throw new Error("fx: a sprite's stretch is a number");return{kind:"sprite",texture:t(0,"soft-disc"),blend:t(1,"alpha"),align:t(2,"full"),stretch:n?n.v:0}}return{kind:"light",color:e(0),intensity:e(1),radius:e(2)}}function Vw(i){var e;if(i.k==="name"){if(!["die","stick","bounce"].includes(i.name))throw new Error(`fx: floor=${i.name}?`);return{mode:i.name,k:.5}}if(i.k==="floor")return{mode:"bounce",k:((e=i.args[0])==null?void 0:e.k)==="const"?i.args[0].v:.5};throw new Error("fx: floor= takes die, stick or bounce(k)")}function Ww(i){const[,e,t]=i.match(/^pop\s+(\S+)\s*(.*)$/)??[];if(!e)throw new Error(`fx: "${i}" is not a pop line`);const n={name:e,ignored:[]},s={next:1};for(const r of Hw(t)){const a=r.indexOf("=");if(a<=0)throw new Error(`fx: "${r}" is not key=value`);const o=r.slice(0,a),c=r.slice(a+1);if(!zw.has(o)){n.ignored.push(o);continue}const l=o==="on"&&c.match(/^@([A-Za-z_][\w-]*)(?:\?(\d*\.?\d+))?$/);if(l){n.parent={name:l[1],chance:l[2]===void 0?1:Number(l[2])};continue}const f=Df(c,s);if(o==="r")n.r=Gw(f);else if(o==="floor")n.floor=Vw(f);else if(o==="n"){if(f.k!=="const")throw new Error("fx: n= is a number");n.n=f.v}else n[o]=f}if(!n.r)throw new Error(`fx: pop ${e} has no r=`);return!n.rate&&!n.burst&&n.n==null&&!n.parent&&(n.burst=Df("1")),n}function qw(i){var n;const e=[];for(const s of String(i).split(/\r?\n/)){const r=s.replace(/\/\/.*$/,"");r.trim()&&(/^\s/.test(r)&&e.length?e[e.length-1]+=" "+r.trim():e.push(r.trim()))}if(((n=e[0])==null?void 0:n.split(/\s+/)[0])!=="fx")throw new Error("fx: a program starts with the line fx");const t=e.slice(1).map(Ww);if(t.length>kf)throw new Error(`fx: ${t.length} populations, at most ${kf}`);for(const s of t)if(s.parent&&!t.some(r=>r.name===s.parent.name))throw new Error(`fx: pop ${s.name} is born on @${s.parent.name}, which is not here`);return{pops:t}}const Of=0,Nf=.3;class jw{constructor(){this.n=0,this.cap=0,this.grow(64)}grow(e){const t=(s,r)=>{const a=new Float64Array(e*r);return s&&a.set(s.subarray(0,this.n*r)),a};this.p=t(this.p,3),this.v=t(this.v,3),this.o=t(this.o,3),this.tint=t(this.tint,3),this.age=t(this.age,1),this.life=t(this.life,1),this.size=t(this.size,1),this.spin=t(this.spin,1),this.stuck=t(this.stuck,1);const n=new Uint32Array(e);this.seed&&n.set(this.seed.subarray(0,this.n)),this.seed=n,this.cap=e}add(){return this.n===this.cap&&this.grow(this.cap*2),this.n++}kill(e){const t=--this.n;if(e!==t){for(const[n,s]of[[this.p,3],[this.v,3],[this.o,3],[this.tint,3],[this.age,1],[this.life,1],[this.size,1],[this.spin,1],[this.stuck,1]])for(let r=0;r<s;r++)n[e*s+r]=n[t*s+r];this.seed[e]=this.seed[t]}}}const ws=(i,e)=>typeof i=="number"?(e[0]=e[1]=e[2]=i,e):i,Uf=Object.freeze([0,0,0]),Xw=Object.freeze([1,1,1]);class $w{constructor(e,{anchor:t=[0,0,0],mobile:n=!1,seed:s=1}={}){this.pops=e.pops.map(r=>({pop:r,pool:new jw,carry:0,burst:!1,children:[]}));for(const r of this.pops)r.pop.parent&&this.pops.find(a=>a.pop.name===r.pop.parent.name).children.push(r);this.anchor=[...t],this.from=[...t],this.time=0,this.emitting=!0,this.seed=ui(s>>>0),this.births=0,this.c=Tw(),this.scratch=[0,0,0],this.c.mobile=n}moveTo(e,t,n){this.anchor[0]=e,this.anchor[1]=t,this.anchor[2]=n}stop(){this.emitting=!1;for(const e of this.pops)e.pop.n!=null&&!e.pop.life&&(e.pool.n=0)}get done(){return this.pops.some(e=>e.pool.n>0)?!1:!this.emitting||this.pops.every(e=>e.pop.parent||!e.pop.rate&&e.pop.n==null&&e.burst)}read(e,t){const n=this.c;n.seed=e.seed[t],n.age=e.age[t],n.life=e.life[t],n.t=Number.isFinite(n.life)&&n.life>0?n.age/n.life:0,n.size=e.size[t],n.spin=e.spin[t];for(let s=0;s<3;s++)n.p[s]=e.p[t*3+s],n.v[s]=e.v[t*3+s],n.offset[s]=e.o[t*3+s],n.tint[s]=e.tint[t*3+s];return n}born(e,t,n,s=null){const{pop:r,pool:a}=e,o=a.add(),c=this.c;a.seed[o]=ui((this.seed^Math.imul(++this.births,2654435761))>>>0),c.seed=a.seed[o],c.age=0,c.t=0,c.life=1/0;const l=r.on??r.at,f=l&&!s?ws(l.fn(c),this.scratch):Uf;for(let p=0;p<3;p++)c.offset[p]=f[p];for(let p=0;p<3;p++)a.o[o*3+p]=f[p],a.p[o*3+p]=s?s[p]:this.from[p]+(this.anchor[p]-this.from[p])*t+f[p];const h=r.v?ws(r.v.fn(c),this.scratch):Uf;for(let p=0;p<3;p++)a.v[o*3+p]=h[p];a.life[o]=r.life?Math.max(.001,r.life.fn(c)):1/0,a.size[o]=r.size?r.size.fn(c):.1,a.spin[o]=r.spin?r.spin.fn(c):0;const d=r.tint?ws(r.tint.fn(c),this.scratch):Xw;for(let p=0;p<3;p++)a.tint[o*3+p]=d[p];a.stuck[o]=0,a.age[o]=0,this.step(e,o,(1-t)*n)}step(e,t,n){const{pop:s,pool:r}=e;if(r.age[t]+=n,r.age[t]>=r.life[t])return!1;if(r.stuck[t])return!0;if(s.acc){const c=ws(s.acc.fn(this.read(r,t)),this.scratch);for(let l=0;l<3;l++)r.v[t*3+l]+=c[l]*n}for(let c=0;c<3;c++)r.p[t*3+c]+=r.v[t*3+c]*n;const a=s.floor,o=t*3+1;if(a&&r.p[o]<Of){if(a.mode==="die")return!1;r.p[o]=Of,a.mode==="stick"?(r.v[t*3]=r.v[o]=r.v[t*3+2]=0,r.stuck[t]=1):r.v[o]<0&&(r.v[o]=-r.v[o]*a.k,r.v[t*3]*=.7,r.v[t*3+2]*=.7,r.v[o]<Nf&&(r.v[o]=0,r.stuck[t]=Math.hypot(r.v[t*3],r.v[t*3+2])<Nf?1:0))}return!0}update(e){this.time+=e,this.c.time=this.time;for(const t of this.pops){const{pop:n,pool:s}=t;for(let o=0;o<s.n;){if(this.step(t,o,e)){o++;continue}for(const c of t.children)ui((s.seed[o]^1540483477)>>>0)/4294967296<c.pop.parent.chance&&this.born(c,1,0,[s.p[o*3],s.p[o*3+1],s.p[o*3+2]]);s.kill(o)}if(!this.emitting)continue;const r=this.c;r.seed=this.seed,r.t=0,r.age=this.time;let a=0;if(n.burst&&!t.burst&&(t.burst=!0,a+=Math.max(0,Math.round(n.burst.fn(r)))),n.rate){t.carry+=Math.max(0,n.rate.fn(r))*e;const o=Math.floor(t.carry);t.carry-=o,a+=o}n.n!=null&&(a+=Math.max(0,n.n-s.n));for(let o=0;o<a;o++)this.born(t,(o+.5)/a,e)}this.from[0]=this.anchor[0],this.from[1]=this.anchor[1],this.from[2]=this.anchor[2]}draw(e,t,n=null){for(const s of this.pops){const{pop:r,pool:a}=s,o=r.r;for(let c=0;c<a.n;c++){if(n&&o.kind!=="light"&&!n(a.p[c*3],a.p[c*3+1],a.p[c*3+2],Math.max(a.size[c]*3,1)))continue;const l=this.read(a,c);if(l.glo=r.glo?r.glo.fn(l):1,o.kind==="light"){t&&t(o,l.p[0],l.p[1],l.p[2],ws(o.color?o.color.fn(l):1,this.scratch),o.intensity?o.intensity.fn(l):1,o.radius?o.radius.fn(l):5);continue}const f=r.sz?r.sz.fn(l):l.size,h=r.a?r.a.fn(l):1;if(!(f>0)||!(h>0))continue;const d=r.col?ws(r.col.fn(l),this.scratch):l.tint;e(o,l.p[0],l.p[1],l.p[2],l.v[0],l.v[1],l.v[2],f,r.rot?r.rot.fn(l):0,d,Math.min(h,1))}}}}const mn=128;function Kw(i,e,t){const n=Math.floor(i),s=Math.floor(e),r=i-n,a=e-s,o=r*r*(3-2*r),c=a*a*(3-2*a),l=(y,v)=>ui((Math.imul(n+y,668265261)^Math.imul(s+v,374761393)^t)>>>0)/4294967296,f=l(0,0),h=l(1,0),d=l(0,1),p=l(1,1);return f+(h-f)*o+(d-f)*c+(f-h-d+p)*o*c}function wa(i,e,t){let n=0,s=.5,r=0;for(let a=0;a<4;a++)n+=s*Kw(i,e,t+a*101),r+=s,i*=2.03,e*=2.03,s*=.5;return n/r}const Es=(i,e,t)=>{const n=Math.min(Math.max((t-i)/(e-i),0),1);return n*n*(3-2*n)},lc={"soft-disc":(i,e)=>{const t=i*i+e*e;return t>=1?0:(1-t)*(1-t)},"smoke-puff":(i,e)=>{const t=Math.atan2(e,i),n=Math.hypot(i,e),s=.97+.06*(wa(Math.cos(t)*1.6+3,Math.sin(t)*1.6+3,7)-.5)*2;return Es(s,s*.25,n)*(.78+.22*wa(i*2.2+5,e*2.2+5,13))},"flame-wisp":(i,e)=>{const t=(e+1)/2,n=(wa(t*2.5,1.7,29)-.5)*.5*t,s=.62*Math.pow(1-t,.55)*(.35+.65*Math.sin(Math.min(t*6,Math.PI/2))),r=Math.abs(i-n)/Math.max(s,.001),a=wa(i*3+11,t*4-2,31);return Es(1,.25,r)*Es(1,.55,t+(a-.5)*.5)*Es(0,.12,t)},ember:(i,e)=>{const t=i*i+e*e;return Math.min(1,Math.exp(-t/.035)+.35*Math.exp(-t/.25))},chip:(i,e)=>{const t=Math.atan2(e,i),n=Math.hypot(i,e),s=7,r=(t+Math.PI)/(2*Math.PI)*s,a=Math.floor(r),o=r-a,c=b=>.55+.4*(ui(b%s+41)/4294967296),l=a/s*2*Math.PI-Math.PI,f=(a+1)/s*2*Math.PI-Math.PI,h=[Math.cos(l)*c(a),Math.sin(l)*c(a)],d=[Math.cos(f)*c(a+1),Math.sin(f)*c(a+1)],p=d[0]-h[0],y=d[1]-h[1],v=Math.cos(t),_=Math.sin(t),m=v*y-_*p,R=m===0?c(a):(h[0]*y-h[1]*p)/m;return o>=0?Es(R+1/mn,R-1/mn,n):0}};lc.stalk=(i,e)=>{const t=Math.abs(i);if(t>=.96)return 0;const n=.2*Math.sqrt(1-(t/.96)**2)*(.85+.15*Math.sin(i*9));return Es(n+1/mn,n-1/mn,Math.abs(e))};const cl=new Map;function Cd(i){const e=lc[i]?i:"soft-disc";if(cl.has(e))return cl.get(e);const t=lc[e],n=new Uint8Array(mn*mn*4);for(let r=0;r<mn;r++)for(let a=0;a<mn;a++){const o=(a+.5)/mn*2-1,c=(r+.5)/mn*2-1,l=(r*mn+a)*4;n[l]=n[l+1]=n[l+2]=255,n[l+3]=Math.round(Math.min(Math.max(t(o,c),0),1)*255)}const s=new m0(n,mn,mn,bn);return s.flipY=!1,s.generateMipmaps=!0,s.minFilter=Gn,s.magFilter=ln,s.needsUpdate=!0,cl.set(e,s),s}const Pd=2048,Yw={alpha:Sn,add:Mr},Jw=`attribute vec2 iCenter; attribute vec2 iScale; attribute float iRot; attribute vec4 iColor;
varying vec2 vUv; varying vec4 vColor;
void main() {
  vUv = uv; vColor = iColor;
  vec2 p = position.xy * iScale; float c = cos(iRot), s = sin(iRot);
  p = vec2(c * p.x - s * p.y, s * p.x + c * p.y);
  gl_Position = projectionMatrix * viewMatrix * vec4(iCenter + p, 0.0, 1.0);
}`,Zw=`uniform sampler2D map; varying vec2 vUv; varying vec4 vColor;
void main() {
  float a = texture2D(map, vUv).a * vColor.a;
  if (a < 0.003) discard;
  gl_FragColor = vec4(vColor.rgb, a);
  #include <colorspace_fragment>
}`;class Qw{constructor(e,t,n,s){const r=new hi(1,1),a=new M0;a.index=r.index,a.setAttribute("position",r.attributes.position),a.setAttribute("uv",r.attributes.uv);const o=l=>new g0(new Float32Array(Pd*l),l).setUsage(zg);this.center=o(2),this.scale=o(2),this.rot=o(1),this.color=o(4),a.setAttribute("iCenter",this.center),a.setAttribute("iScale",this.scale),a.setAttribute("iRot",this.rot),a.setAttribute("iColor",this.color),a.instanceCount=0;const c=new Un({uniforms:{map:{value:Cd(t)}},vertexShader:Jw,fragmentShader:Zw,transparent:!0,depthTest:!1,depthWrite:!1,blending:Yw[n]??Sn});this.mesh=new sn(a,c),this.mesh.frustumCulled=!1,this.mesh.renderOrder=s,this.mesh.visible=!1,e.add(this.mesh),this.n=0}}class eS{constructor(e){this.scene=e,this.groups=new Map,this.dropped=0}group(e,t){const n=e.texture+"|"+e.blend+"|"+t;let s=this.groups.get(n);return s||this.groups.set(n,s=new Qw(this.scene,e.texture,e.blend,t*1e6+999e3)),s}prepare(e){e.kind!=="light"&&Cd(e.texture)}begin(){for(const e of this.groups.values())e.n=0}card(e,t,n,s,r,a,o,c,l,f,h,d){const p=this.group(t,e);if(p.n===Pd){this.dropped++;return}let y=l,v=f;t.align==="velocity"&&(y=l+Math.hypot(a,o,c)*t.stretch,v=Math.atan2(o,a));const _=p.n++;p.center.array[_*2]=n,p.center.array[_*2+1]=s,p.scale.array[_*2]=y,p.scale.array[_*2+1]=l,p.rot.array[_]=v;const m=p.color.array;m[_*4]=h[0],m[_*4+1]=h[1],m[_*4+2]=h[2],m[_*4+3]=d}end(){for(const e of this.groups.values())if(e.mesh.visible=e.n>0,e.mesh.geometry.instanceCount=e.n,!!e.n)for(const t of[e.center,e.scale,e.rot,e.color])t.clearUpdateRanges(),t.addUpdateRange(0,e.n*t.itemSize),t.needsUpdate=!0}}const tS=.1;class nS{constructor(e,{mobile:t=!1,layers:n=[[-1/0,14]]}={}){this.renderer=new eS(e),this.mobile=t,this.layers=[...n].sort((s,r)=>r[0]-s[0]),this.programs=new Map,this.attached=new Map,this.effects=[],this.warned=new Set,this.seed=1}layerOf(e){var t;for(const[n,s]of this.layers)if(e>=n)return s;return((t=this.layers[this.layers.length-1])==null?void 0:t[1])??14}warn(e){this.warned.has(e)||(this.warned.add(e),console.warn("[justa] "+e))}program(e){if(typeof e!="string"||!e.trim().startsWith("fx"))return this.warn(`fx: only program text plays here, not ${String(e).slice(0,40)}`),null;if(!this.programs.has(e))try{const t=qw(e);for(const n of t.pops)n.ignored.length&&this.warn(`fx: pop ${n.name} ignores ${n.ignored.join(", ")}`),this.renderer.prepare(n.r);this.programs.set(e,t)}catch(t){this.warn(t.message),this.programs.set(e,null)}return this.programs.get(e)}prepare(e){for(const t of e)this.program(t)}start(e,t){const n=new $w(e,{anchor:t,mobile:this.mobile,seed:this.seed++});return n.layer=this.layerOf(t[2]),this.effects.push(n),n}oneShot(e={}){const t=this.program(e.script),n=e.position;!t||!n||(this.start(t,Array.isArray(n)?n:[n.x??0,n.y??0,n.z??0]).once=!0)}update(e,t){var a;const n=Math.min(Math.max(e,0),tS),s=new Set;for(const o of t.entities.values()){const c=(a=o.fx)==null?void 0:a.script,l=this.attached.get(o.id);if(!c||o.visible===!1)continue;const f=t.worldPosition(o);if(s.add(o.id),(l==null?void 0:l.script)!==c){l==null||l.effect.stop();const h=this.program(c);if(!h){this.attached.delete(o.id);continue}this.attached.set(o.id,{script:c,effect:this.start(h,[f.x,f.y,f.z??0])})}else l.effect.moveTo(f.x,f.y,f.z??0)}for(const[o,c]of this.attached)s.has(o)||(c.effect.stop(),this.attached.delete(o));const r=this.renderer;r.begin(),this.effects=this.effects.filter(o=>{n>0&&o.update(n);const c=o.layer;return o.draw((l,f,h,d,p,y,v,_,m,R,b)=>r.card(c,l,f,h,d,p,y,v,_,m,R,b),null),!o.done}),r.end()}}const ot={live:!1,testRooms:["teste-justa"],admins:["pa_2e3191d32798f85073f61058545e6b9a","pa_f3710841bdaa8d039ecbc9e5ec447efc","pa_0116e39b6f79ca58333a506e44924da0"],epoch:0,levels:[0,217,614,1128,1736,2426,3189,4019,4910,5859,6862,7917,9021,10171,11367,12607,13888,15210,16572,17972,19409],passes:3,maxPasses:5,perPass:.8333,barSpeed:1.6,levelBonus:.01,setStep:.02,bossAcc:[.58,.6,.62,.64,.66,.68,.7,.72,.74,.76],startGrant:1e6,faucet:1e6,freeRuns:5,runPrice:5e3,holderRuns:{per:5,runs:2,capNfts:25,perOneOfOne:1},pass:{price:25e4,toPool:.8,dropMult:1.5,mintCap:20,freeRuns:10},mintPrice:2500,royalty:5,payoutShare:.4,drops:[{chance:.2,tiers:[2]},{chance:.18,tiers:[2,3]},{chance:.16,tiers:[3]},{chance:.14,tiers:[3,4]},{chance:.12,tiers:[4]},{chance:.1,tiers:[4,5]},{chance:.09,tiers:[5]},{chance:.08,tiers:[5,6]},{chance:.07,tiers:[6]},{chance:.06,tiers:[6,7]}],forgePoints:[0,1,2,4,8,16,32,64,128,256],ranked:{start:1e3,kNew:32,kOld:16,newGames:20,defenderShare:.5,attacksPerDay:5,ghosts:5},bots:[{id:"bot:rookie",name:"Rookie Bot",elo:880,tier:1,level:0,q:.3},{id:"bot:squire",name:"Squire Bot",elo:900,tier:2,level:2,q:.35},{id:"bot:stable",name:"Stable Bot",elo:920,tier:1,level:0,q:.4},{id:"bot:farmhand",name:"Farmhand Bot",elo:960,tier:1,level:1,q:.5},{id:"bot:herald",name:"Herald Bot",elo:990,tier:1,level:1,q:.6},{id:"bot:page",name:"Page Bot",elo:1e3,tier:3,level:5,q:.5},{id:"bot:groom",name:"Groom Bot",elo:1010,tier:2,level:2,q:.55},{id:"bot:archer",name:"Archer Bot",elo:1040,tier:2,level:3,q:.65},{id:"bot:knight",name:"Knight Bot",elo:1100,tier:5,level:9,q:.65},{id:"bot:champion",name:"Champion Bot",elo:1250,tier:8,level:15,q:.8}],gamba:{payout:2,passes:3,barPerPass:.01,maxBet:1e5,lbMinBets:20,riders:[{id:"free",name:"Free rider",cap:.46},{id:"ronke",name:"Ronke",cap:.47,needs:"ronkeverse"},{id:"colored",name:"Colored Ronke",cap:.48,daily:3,needs:"colored"},{id:"one",name:"1/1",cap:.5,daily:3,needs:"oneOfOne"}],bodies:[{id:"one",name:"1/1",n:159,rider:"one"},{id:"zombie",name:"Zombie Body",n:28,rider:"colored"},{id:"gold",name:"Gold Ronke",n:48,rider:"colored"},{id:"orange",name:"Orange Noise",n:82,rider:"colored"},{id:"pink",name:"Pink Noise",n:97,rider:"colored"},{id:"green",name:"Green Noise",n:112,rider:"colored"},{id:"redpurple",name:"Gradient Red Purple",n:185,rider:"colored"},{id:"blueviolet",name:"Gradient Blue Violet",n:191,rider:"colored"},{id:"nerd",name:"Nerd Ronke",n:1832,rider:"ronke"},{id:"tattoo",name:"The Ronke Tattoo",n:1936,rider:"ronke"},{id:"ronke",name:"Ronke",n:2345,rider:"ronke"},{id:"none",name:"No Ronke",n:0,rider:"free"}]}};function iS(i){if(ot.live)return!0;var e="";try{e=i&&i.getRoomId&&i.getRoomId()||""}catch{}return ot.testRooms.indexOf(e)>=0}function Ld(i){return ot.admins.indexOf(i)>=0}function sS(i){return!ot.live||Ld(i)}function Xi(i){return Math.floor(i/864e5)}function rS(i){for(var e=0,t=1;t<ot.levels.length;t++)(i||0)>=ot.levels[t]&&(e=t);return e}function aS(i){return ot.levels[Math.max(0,Math.min(ot.levels.length-1,i||0))]}function oS(i){var e=ot.levels[(i||0)+1];return e??null}function lS(i){return 2*i-2}function cS(i){return Math.max(0,(i||1)-1)*ot.setStep}function uS(i){return Math.max(0,i||0)*ot.levelBonus}function fS(i){return ot.bossAcc[Math.max(0,Math.min(ot.bossAcc.length-1,i))]}function Id(i){return 2*i}function hS(i,e){return Id(i)<=(e||0)}function dS(i,e){return Math.max(0,Math.min(e-1,Math.floor((i||0)/2)))}function pS(i,e,t){return Math.max(e,i*Math.pow(ot.perPass,(t||1)-1))}function Dd(i,e){var t=ot.holderRuns,n=Math.min(Math.max(0,i&&i.ronkeverse||0),t.capNfts);return(e?ot.pass.freeRuns:ot.freeRuns)+Math.floor(n/t.per)*t.runs+Math.max(0,i&&i.oneOfOne||0)*t.perOneOfOne}function mS(i,e,t,n){var s=i&&i.day===Xi(t)&&i.used||0;return Math.max(0,Dd(e,n)-s)}function gS(i,e){var t=Xi(e);return{day:t,used:(i&&i.day===t&&i.used||0)+1}}function _S(i,e,t,n){var s=ot.drops[Math.max(0,Math.min(ot.drops.length-1,i))];return t>=s.chance*(e?ot.pass.dropMult:1)?0:s.tiers.length>1&&n>=.7?s.tiers[1]:s.tiers[0]}function vS(i,e){var t=ot.drops[Math.max(0,Math.min(ot.drops.length-1,i))];return Math.min(1,t.chance*(e?ot.pass.dropMult:1))}function yS(i){return ot.forgePoints[(i||1)-1]||0}function xS(i,e,t,n){var s=ot.ranked,r=(n||0)<s.newGames?s.kNew:s.kOld,a=1/(1+Math.pow(10,((e||s.start)-(i||s.start))/400)),o=Math.round(r*((typeof t=="number"?t:t?1:0)-a));return{me:o,them:-Math.round(o*s.defenderShare)}}function bS(i,e){var t=Math.max(i.length?1:0,Math.floor(i.length*ot.payoutShare)),n=0,s=[],r;for(r=0;r<t;r++)n+=1/(r+1);for(r=0;r<t;r++)s.push({user_id:i[r].user_id,name:i[r].name,rank:r+1,amount:Math.floor(e*(1/(r+1))/n)});return s}function wS(i){return[i-.05,i+.06,i,i+.1,i-.08].map(function(e){return Math.round(Math.max(0,Math.min(1,e))*100)/100})}function ho(i){return ot.gamba.riders.find(function(e){return e.id===i})||ot.gamba.riders[0]}function kd(){return ot.gamba.passes*ot.gamba.barPerPass}function Od(i){return ho(i).cap-kd()}function Nd(i){var e=0;return(i||[]).slice(0,ot.gamba.passes).forEach(function(t){e+=Math.max(0,Math.min(1,+t||0))*ot.gamba.barPerPass}),e}function SS(i,e){return Math.min(ho(i).cap,Od(i)+Nd(e))}function MS(i){return 1-ho(i).cap*ot.gamba.payout}function Ud(i){return ot.gamba.bodies.find(function(e){return e.id===i})||null}function Fd(i){var e=i||{},t=Ud(e.rarest);return t?t.rider:(e.oneOfOne||0)>0?"one":(e.colored||0)>0?"colored":(e.ronkeverse||0)>0?"ronke":"free"}function ES(i,e){var t=Fd(e);return i==="free"||i===t||i==="ronke"&&t!=="free"}function TS(i,e){return ot.gamba.maxBet}function Bd(i){return i=Math.round(i||0),(i<0?"-":"")+String(Math.abs(i)).replace(/\B(?=(\d{3})+(?!\d))/g,",")}const Xc=Object.freeze(Object.defineProperty({__proto__:null,barPeriod:pS,bossAcc:fS,bossLevel:Id,bossOpen:hS,botQs:wS,dayOf:Xi,dropChance:vS,dropFor:_S,econOn:iS,eloDelta:xS,fmt:Bd,forgeValue:yS,gambaBarMax:kd,gambaBase:Od,gambaBody:Ud,gambaBonus:Nd,gambaChance:SS,gambaEdge:MS,gambaMaxBet:TS,gambaOwns:ES,gambaRider:ho,gambaTop:Fd,isAdmin:Ld,levelBonus:uS,levelFor:rS,levelXp:aS,nextLevelXp:oS,payouts:bS,runsLeft:mS,runsPerDay:Dd,setBonus:cS,spendRun:gS,testTools:sS,topBoss:dS,unlockLevel:lS},Symbol.toStringTag,{value:"Module"})),cc=.43,zd=.49,AS=.01,uc=5,Hd=10n**18n,RS=100000n*Hd,CS=10000n*Hd,PS=12345,LS=(i=PS,e="")=>`I'm jousting for $HORSKE in HORSKingdom

${i==null?"":`🏆 Jackpot: $${Bd(i)}
`}${e?`🔖 ${e}
`:""}⚔️ Fight the house:`,Ff={url:"https://horskeverse.vercel.app",via:"HorskeOnRonke"},XM=(i,e="")=>`https://x.com/intent/post?text=${encodeURIComponent(LS(i,e))}&url=${encodeURIComponent(Ff.url)}&via=${encodeURIComponent(Ff.via)}`,Na=[{id:0,name:"None",bonus:0},{id:4,name:"Top 500",rank:500,bonus:.005},{id:3,name:"Top 200",rank:200,bonus:.0075},{id:2,name:"Top 100",rank:100,bonus:.01},{id:1,name:"Top 69",rank:69,bonus:.015}];function IS(i){return!Number.isInteger(i)||i<1?Na[0]:Na.filter(e=>e.rank&&i<=e.rank).sort((e,t)=>e.rank-t.rank)[0]??Na[0]}const Bf=[{id:"checkin",name:"Check in",text:"Once a day. A new day starts at 00:00 UTC."},{id:"xpost",name:"Post on X",text:"Once a day: tell X about the joust, with your code of the day."},{id:"lock",name:"Lock HORSKE",text:"Lock 100,000 HORSKE for 90 days. The bonus holds while it stays locked."},{id:"weekly",name:"Buy HORSKE this week",text:"Buy 10,000 HORSKE every week."},{id:"bouts",name:`Bet ${uc} times`,text:`Bet ${uc} times in Fight the house in a day. The bonus is for the next day.`},{id:"ronke",name:"Hold a Ronke",text:"Any Ronkeverse NFT."}],$c="justa-web:quests",Ua=i=>Math.round(i*1e4)/1e4,DS=()=>ot.gamba.passes*ot.gamba.barPerPass,Gd=i=>({user:i,checkin:null,post:null}),Kc=/^0x[0-9a-f]{40}$/;function kS(i,e){let t;try{t=(e??globalThis.localStorage).getItem($c)}catch{return null}try{const n=JSON.parse(t??"null");if(n&&n.user===i){const s=n.post,r=s&&Number.isSafeInteger(s.day)&&typeof s.url=="string"&&Kc.test(String(s.wallet))?{day:s.day,url:s.url,wallet:s.wallet}:null;return{user:i,checkin:Number.isSafeInteger(n.checkin)?n.checkin:null,post:r}}}catch{}return Gd(i)}function OS(i,e){try{(e??globalThis.localStorage).setItem($c,JSON.stringify(i))}catch{}}const zf=i=>{try{return i==null?null:BigInt(i)}catch{return null}};function NS(i,e,t,n=null,s=(t+1)*86400-1){var y;const r=e&&e.day===t?e:e&&e.day===t-1?{day:t,today:0,yesterday:e.today}:{day:t,today:0,yesterday:0},a=n&&Kc.test(String(n.wallet))?n.wallet:null,o=zf(a&&((y=n.lock)==null?void 0:y.amount)),c=zf(a&&n.boughtWeek),l={checkin:i.checkin===t,xpost:!!(a&&i.post&&i.post.day===t&&i.post.wallet===a),lock:o!=null&&o>=RS&&Number(n.lock.until)>s,weekly:c!=null&&c>=CS,bouts:r.yesterday>=uc,ronke:!!a&&Number(n.ronkes)>0},f=Bf.filter(v=>l[v.id]).length,h=a?IS(n.rank):Na[0],d=Math.round(AS*1e4*f/Bf.length)/1e4,p=Ua(d+h.bonus);return{day:t,on:l,n:f,tier:h,wallet:a,rank:a?n.rank??null:void 0,post:l.xpost?i.post.url:null,quests:d,score:h.bonus,bonus:p,bouts:r,lo:Ua(cc+p),hi:Math.min(zd,Ua(cc+DS()+p))}}function Hf(i,e){const t=i.gamba,n=Math.min(zd,Ua(cc+t.passes*t.barPerPass+(e||0)));for(const s of t.riders)s.cap=n,delete s.daily;return n}async function US({db:i,userId:e,storage:t,now:n=()=>Date.now(),season:s=ot,every:r=3e3}){var R;Hf(s,0);const a=i.sqlFor(e),o=()=>kS(e,t);let c=o()??Gd(e),l=null,f=0,h=!0,d=null;async function p(){const b=Xi(n()),S=await a`SELECT day, COUNT(*) AS n FROM bets WHERE user_id = @caller AND status <> 'open' AND day BETWEEN ${b-1} AND ${b} GROUP BY day`,I=Object.fromEntries(S.rows.map(L=>[L.day,L.n]));l={day:b,today:I[b]||0,yesterday:I[b-1]||0}}function y(){const b=NS(c,l,Xi(n()),d,Math.floor(n()/1e3)),S=h?b.bonus:0;return S!==f&&(Hf(s,S),f=S),b}async function v(){return c=o()??c,await p(),y()}const _=b=>(c={...o()??c},b(c),OS(c,t),y());try{await v()}catch{y()}const m=setInterval(()=>{v().catch(()=>{})},r);return(R=globalThis.addEventListener)==null||R.call(globalThis,"storage",b=>{b.key===$c&&(c=o()??c,y())}),{view:y,refresh:v,useBonus(b){return h=!!b,y()},stop:()=>clearInterval(m),checkIn:()=>_(b=>{b.checkin=Xi(n())}),posted:(b,S)=>_(I=>{I.post={day:Xi(n()),url:String(b),wallet:String(S).toLowerCase()}}),setFacts(b){return d=b&&Kc.test(String(b.wallet))?b:null,y()}}}const FS=2020,BS="Ronin Mainnet",zS="https://api.roninchain.com/rpc",HS="https://app.roninchain.com",GS="0xc0Ca45c2e9448D3876Ca86220B2418C719298396",VS="0xf988f63bf26C3Ed3fBf39922149E3E7b1e5c27cB",WS="0xe514d9deb7966c8be0ca922de8a064264ea6bcd4",qS=null,jS=null,Gf={chainId:FS,chainName:BS,rpc:zS,explorer:HS,horske:GS,ronke:VS,wron:WS,lock:qS,swap:jS},$M=10n**18n,XS=18e4,$S=2e3,KS=15e3,YS=new dc(["function balanceOf(address) view returns (uint256)","function allowance(address owner, address spender) view returns (uint256)","function approve(address spender, uint256 amount) returns (bool)"]),JS=new dc(["function locks(address) view returns (uint128 amount, uint64 unlockAt)","function lock(uint256 amount) returns (uint64 unlockAt)","function relock() returns (uint64 unlockAt)","function unlock() returns (uint256 amount)","function LOCK_SECONDS() view returns (uint64)","error ZeroAmount()","error TooMuch()","error NothingLocked()","error StillLocked(uint64 unlockAt)"]),KM=new dc(["function quoteBuy(uint8 route, uint256 ronIn) returns (uint256 horskeOut, uint256 ronkeVia)","function quoteSell(uint8 route, uint256 horskeIn) returns (uint256 ronOut, uint256 ronkeVia)","function buy(uint8 route, uint256 minOut, uint256 deadline) payable returns (uint256 out)","function sell(uint8 route, uint256 amountIn, uint256 minOut, uint256 deadline) returns (uint256 out)","event Bought(address indexed buyer, uint8 route, uint256 ronIn, uint256 horskeOut)","event Sold(address indexed seller, uint8 route, uint256 horskeIn, uint256 ronOut)","error BadRoute()","error Expired()","error ZeroAmount()","error Slippage(uint256 out, uint256 minOut)","error NoLiquidity()","error ERC20InsufficientBalance(address sender, uint256 balance, uint256 needed)","error ERC20InsufficientAllowance(address spender, uint256 allowance, uint256 needed)"]);class xn extends Error{constructor(e,t){super(t),this.code=e}}function ZS({search:i=typeof location<"u"?location.search:"",dev:e=Ep}={}){return e!=null&&e.mainnet&&new URLSearchParams(i).get("chain")==="dev"?{...Gf,...e.mainnet}:{...Gf}}const fc=i=>"0x"+BigInt(i).toString(16),QS=/^0x[0-9a-fA-F]{40}$/,eM=i=>QS.test(String(i??""));function tM(i,e,t){let n;return Promise.race([i,new Promise((s,r)=>n=setTimeout(()=>r(t),e))]).finally(()=>clearTimeout(n))}async function yr(i,e,t=[],{fetchFn:n=(...s)=>globalThis.fetch(...s)}={}){let s;try{s=await tM((async()=>{const r=await n(i.rpc,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({jsonrpc:"2.0",id:1,method:e,params:t})}),a=await r.json().catch(()=>null),o=a&&typeof a=="object"&&a.error&&(a.error.code===3||typeof a.error.data=="string");if(r.ok===!1&&!o)throw new Error(`HTTP ${r.status}`);return a})(),KS,new Error("timeout"))}catch{throw new xn("rpc","Ronin did not answer: try again")}if(s!=null&&s.error)throw Object.assign(new xn("call",s.error.message||"the call failed"),{data:s.error.data});if(!s||typeof s!="object"||!("result"in s))throw new xn("rpc","Ronin did not answer: try again");return s.result}async function Vd(i,e,t,n,s=[],r){const a=await yr(i,"eth_call",[{to:e,data:t.encodeFunctionData(n,s)},"latest"],r);return t.decodeFunctionResult(n,a)}async function YM(i,e){const t=await yr(i,"eth_getBlockByNumber",["latest",!1],e);return Number(BigInt(t.timestamp))}async function JM(i,e){if(Number(BigInt(await i.request({method:"eth_chainId"})))===e.chainId)return;const n=fc(e.chainId);try{await i.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]})}catch(r){if((r==null?void 0:r.code)===4001)throw new xn("declined","The wallet stayed on its network: switch to Ronin to go on");if((r==null?void 0:r.code)===4902||/unrecognized|not added|unknown chain/i.test(String((r==null?void 0:r.message)??"")))await i.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:e.chainName,nativeCurrency:{name:"RON",symbol:"RON",decimals:18},rpcUrls:[e.rpc],blockExplorerUrls:[e.explorer]}]});else throw new xn("network","Switch your wallet to Ronin, then try again")}if(Number(BigInt(await i.request({method:"eth_chainId"})))!==e.chainId)throw new xn("network","Switch your wallet to Ronin, then try again")}function nM(i,e=null){var n,s;const t=typeof(i==null?void 0:i.data)=="string"?i.data:typeof((n=i==null?void 0:i.data)==null?void 0:n.data)=="string"?i.data.data:null;if(t&&e)try{return((s=e.parseError(t))==null?void 0:s.name)??null}catch{}return String((i==null?void 0:i.message)??"it would fail").replace(/^execution reverted:?\s*/i,"").slice(0,90)||"it would fail"}async function ZM(i,e,{from:t,to:n,data:s,value:r=0n},{iface:a=null,onSent:o=null,rpcOpts:c,waitMs:l=XS,pollMs:f=$S,sleep:h=d=>new Promise(p=>setTimeout(p,d))}={}){var m,R;const d={from:t,to:n,data:s,...r?{value:fc(r)}:{}};try{await yr(e,"eth_call",[d,"latest"],c)}catch(b){throw b.code==="rpc"?b:new xn("would_fail",`This would fail: ${nM(b,a)}`)}let p=null;try{p=BigInt(await yr(e,"eth_estimateGas",[d],c))*13n/10n}catch{p=null}let y=null;try{y=Number(BigInt(await i.request({method:"eth_chainId"})))}catch{y=null}if(y!==e.chainId)throw new xn("network","Your wallet is not on Ronin: switch it back and try again");let v;try{v=await i.request({method:"eth_sendTransaction",params:[{...d,...p?{gas:fc(p)}:{}}]})}catch(b){if((b==null?void 0:b.code)===4001||/reject|denied|cancel/i.test(String((b==null?void 0:b.message)??"")))throw new xn("declined","The wallet said no");const S=typeof(b==null?void 0:b.data)=="string"?b.data:typeof((m=b==null?void 0:b.data)==null?void 0:m.data)=="string"?b.data.data:((R=/data="(0x[0-9a-fA-F]{8,})"/.exec(String((b==null?void 0:b.message)??"")))==null?void 0:R[1])??null;throw Object.assign(new xn("send",`The wallet could not send it: ${String((b==null?void 0:b.message)??b).slice(0,80)}`),{data:S})}o==null||o(v);const _=Date.now();for(;Date.now()-_<l;){const b=await yr(e,"eth_getTransactionReceipt",[v],c).catch(()=>null);if(b){if(b.status==="0x1")return{hash:v,receipt:b};throw Object.assign(new xn("reverted","The transaction failed on the chain"),{hash:v})}await h(f)}throw Object.assign(new xn("slow","Not confirmed yet: check your wallet, then read again"),{hash:v})}const QM=(i,e)=>i.explorer?`${i.explorer}/tx/${e}`:null,iM="https://ronke-score-nine.vercel.app/api/v1/score/",Wd=/^0x[0-9a-f]{40}$/;function sM(i){const e=i==null?void 0:i.data;if(!e||typeof e!="object")throw new Error("the score API gave no data");if(e.found===!1)return null;if(!Number.isInteger(e.rank)||e.rank<1)throw new Error("the score API gave no rank");return e.rank}async function rM(i,e=globalThis.fetch){if(!Wd.test(i))throw new Error("not a wallet address");const t=await e(iM+i);if(!t.ok)throw new Error(`the score API answered ${t.status}`);return sM(await t.json())}async function aM(i){if(!i)return null;try{const e=await i.request({method:"eth_accounts"}),t=Array.isArray(e)&&typeof e[0]=="string"?e[0].toLowerCase():null;return t&&Wd.test(t)?t:null}catch{return null}}const oM="https://publish.x.com/oembed",lM=/^0x[0-9a-f]{40}$/;async function cM(i,e,t=(n=>(n=globalThis.crypto)==null?void 0:n.subtle)()){const s=String(i).toLowerCase();if(!lM.test(s))throw new Error("a wallet's address");if(!Number.isSafeInteger(e)||e<0)throw new Error("a day number");return`HK-${[...new Uint8Array(await t.digest("SHA-256",new TextEncoder().encode(`horske:x:${s}:${e}`))).slice(0,3)].map(a=>a.toString(16).padStart(2,"0")).join("").toUpperCase()}`}const uM=/^https:\/\/(?:www\.|mobile\.)?(?:x|twitter)\.com\/([A-Za-z0-9_]{1,15})\/status(?:es)?\/(\d{1,25})(?:[/?#][^\s]*)?$/;function fM(i){const e=uM.exec(String(i??"").trim());return e?`https://x.com/${e[1]}/status/${e[2]}`:null}const hM={amp:"&",lt:"<",gt:">",quot:'"',apos:"'",nbsp:" ",mdash:"—",ndash:"–",hellip:"…"},dM=i=>i.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi,(e,t)=>{if(t[0]!=="#")return hM[t.toLowerCase()]??e;const n=t[1]==="x"||t[1]==="X"?parseInt(t.slice(2),16):parseInt(t.slice(1),10);return Number.isFinite(n)&&n>0&&n<1114112?String.fromCodePoint(n):e});function pM(i){const e=/<p\b[^>]*>([\s\S]*?)<\/p>/i.exec(String(i??""));return e?dM(e[1].replace(/<br\s*\/?>/gi,`
`).replace(/<[^>]+>/g," ")).replace(/\s+/g," ").trim():""}const mM=(i,e)=>pM(i).toUpperCase().includes(String(e).toUpperCase());class qd extends Error{constructor(e,t){super(t),this.code=e}}const gM={link:"That is not a post's link: copy it from X (Share, Copy link).",not_found:"X has no public post at that link.",no_code:"The post does not carry today's code.",x_unreachable:"X did not answer; try again shortly."},dr=i=>new qd(i,gM[i]);async function eE(i,e,{fetchFn:t=globalThis.fetch,timeoutMs:n=8e3}={}){var c;const s=fM(i);if(!s)throw dr("link");const r=new AbortController,a=setTimeout(()=>r.abort(),n);let o;try{const l=await t(`${oM}?url=${encodeURIComponent(s)}&omit_script=1&dnt=true`,{signal:r.signal,headers:{accept:"application/json"}});if(l.status===404||l.status===403)throw dr("not_found");if(!l.ok)throw dr("x_unreachable");o=(c=await l.json())==null?void 0:c.html}catch(l){throw l instanceof qd?l:dr("x_unreachable")}finally{clearTimeout(a)}if(!mM(o,e))throw dr("no_code");return s}const _M="0x810b6d1374ac7ba0e83612e7d49f49a13f1de019",Vf="0xc0ca45c2e9448d3876ca86220b2418c719298396",jd="https://explorer.roninchain.com/api/v2",Yc=["0x6d58259c542ad58a51b7aeafb54be3f2fcbb5d77","0xf3500ae8dffd27e8c0943ef107f9ff534d77bf7e"],Xd=["0xf58d80185259502ca2d434c3235a21ca23b72d41","0x5f0acdd3ec767514ff1bf7e79949640bf94576bd"],vM=[...Yc,...Xd,"0x6c634a932428d768e877662c7abdd2d2e20dced3","0x7cf0fb64d72b733695d77d197c664e90d07cf45a","0x22cefc91e9b7c0f3890ebf9527ea89053490694e"],yM="0xc42079f94a6350d7e6235f29174924f928cc2ac818eb64fed8004e115fbcca67",xM=7*864e5,Wf={rank:30*6e4,ronkes:10*6e4,lock:10*6e4,buys:5*6e4},bM=5*6e4,ul=864e5,wM=10,SM=/^0x[0-9a-f]{40}$/,MM=5e3;async function $d(i,e){const t=await i(e,{headers:{accept:"application/json"}});if(!t.ok)throw new Error(`Ronin's explorer answered ${t.status}`);return t.json()}const EM=i=>{const e=String(i??"").slice(2,66);return e.length===64&&BigInt.asIntN(256,BigInt("0x"+e))<0n};async function TM(i,e){var n,s;if(!/^0x[0-9a-f]{64}$/i.test(String(e)))return!1;let t=null;for(let r=0;r<3;r++){const a=t?`?${new URLSearchParams(t)}`:"",o=await $d(i,`${jd}/transactions/${e}/logs${a}`);for(const c of Array.isArray(o==null?void 0:o.items)?o.items:[])if(Yc.includes(String(((n=c==null?void 0:c.address)==null?void 0:n.hash)??"").toLowerCase())&&String(((s=c==null?void 0:c.topics)==null?void 0:s[0])??"").toLowerCase()===yM&&EM(c.data))return!0;if(!(o!=null&&o.next_page_params))return!1;t=o.next_page_params}return!1}async function AM(i,e,{fetchFn:t=globalThis.fetch}={}){var c,l,f,h,d;if(!SM.test(i))throw new Error("not a wallet address");if(vM.includes(i))return{total:0n,buys:[]};const n=e-xM,s=[],r=new Map;let a=null,o=0n;for(let p=0;p<wM;p++){const y=new URLSearchParams({type:"ERC-20",filter:"to",token:Vf,...a??{}}),v=await $d(t,`${jd}/addresses/${i}/token-transfers?${y}`);let _=!1;for(const m of Array.isArray(v==null?void 0:v.items)?v.items:[]){const R=Date.parse(m==null?void 0:m.timestamp);if(!Number.isFinite(R))continue;if(R<n){_=!0;break}if(String(((c=m==null?void 0:m.token)==null?void 0:c.address_hash)??((l=m==null?void 0:m.token)==null?void 0:l.address)??"").toLowerCase()!==Vf||String(((f=m==null?void 0:m.to)==null?void 0:f.hash)??"").toLowerCase()!==i)continue;let b;try{b=BigInt(((h=m==null?void 0:m.total)==null?void 0:h.value)??"0")}catch{continue}if(b<=0n)continue;const S=String(((d=m==null?void 0:m.from)==null?void 0:d.hash)??"").toLowerCase();if(!Yc.includes(S)&&!Xd.includes(S))continue;const I=String(m.transaction_hash);r.has(I)||r.set(I,await TM(t,I)),r.get(I)&&(o+=b,s.push({tx:m.transaction_hash,amount:b,at:R}))}if(_||!(v!=null&&v.next_page_params))break;a=v.next_page_params}return{total:o,buys:s}}async function RM(i,e,t){const[n]=await Vd(e,_M,YS,"balanceOf",[i],t);return Number(n)}async function CM(i,e,t){if(!eM(e.lock))return null;const[n,s]=await Vd(e,e.lock,JS,"locks",[i],t);return{amount:n.toString(),until:Number(s)}}const Kd="justa-web:wallet-facts",PM=15e3,LM=3e4,fl=864e5,gr=["rank","ronkes","lock","buys"],qf=/^\d{1,78}$/,IM={rank:i=>i===null||Number.isInteger(i)&&i>=1,ronkes:i=>Number.isInteger(i)&&i>=0,lock:i=>i===null||!!i&&typeof i=="object"&&qf.test(String(i.amount))&&Number.isSafeInteger(i.until)&&i.until>=0,buys:i=>typeof i=="string"&&qf.test(i)};function DM(i,e){try{const t=JSON.parse((i??globalThis.localStorage).getItem(Kd)??"null");if(!t||t.wallet!==e||!t.kept||typeof t.kept!="object")return{};const n={};for(const s of gr){const r=t.kept[s];r&&Number.isFinite(r.at)&&IM[s](r.v)&&(n[s]={v:r.v,at:r.at})}return n}catch{return{}}}function kM(i,e,t){try{(i??globalThis.localStorage).setItem(Kd,JSON.stringify({wallet:e,kept:t}))}catch{}}function OM({onFacts:i=()=>{},provider:e=()=>Tp(),cfg:t=ZS(),fetchFn:n=(...d)=>globalThis.fetch(...d),storage:s,now:r=()=>Date.now(),every:a=bM,jobMs:o=PM,buysMs:c=LM,setTimer:l=setTimeout,clearTimer:f=clearTimeout,subtle:h}={}){const d={wallet:null,facts:null,busy:null,at:0,ready:!1,v:0};let p=!1,y=null,v=0,_=null,m=0;const R=()=>{d.v++},b=U=>{f(y),y=p?null:l(()=>k(),U)},S=()=>Math.min(a,fl-r()%fl+1e3),I=(U,F)=>new Promise((W,Z)=>{const K=l(()=>Z(new Error("timed out")),F);U.then(ae=>{f(K),W(ae)},ae=>{f(K),Z(ae)})}),L=(U,F,W)=>!!U&&F-U.at>=0&&F-U.at<W,C=(U,F,W,Z,K,ae)=>({wallet:U,day:F,code:W,rank:Z.rank??null,rankRead:Z.rank!==void 0,ronkes:Z.ronkes??null,lock:Z.lock??null,boughtWeek:Z.buys??null,buysReady:Z.buys!==void 0,failed:K,at:ae}),D=U=>{d.facts=U,d.wallet=U?U.wallet:null,d.ready=!0,R(),i(U)},E=()=>k();async function w(U,F,W){const Z=r(),K=new Set,ae=async(Re,Ve,ee)=>{const ue=F[Re];if(!W&&L(ue,Z,Wf[Re]))return ue.v;try{const Ee=await I(Ve(),ee);return F[Re]={v:Ee,at:r()},Ee}catch{if(L(ue,Z,ul))return ue.v;K.add(Re);return}},[J,fe,me,Me]=await Promise.all([ae("rank",()=>rM(U,n),o),ae("ronkes",()=>RM(U,t,{fetchFn:n}),o),ae("lock",()=>CM(U,t,{fetchFn:n}),o),ae("buys",async()=>(await AM(U,r(),{fetchFn:n})).total.toString(),c)]);return{got:{rank:J,ronkes:fe,lock:me,buys:Me},failed:gr.filter(Re=>K.has(Re))}}async function k({fresh:U=!1}={}){var me,Me;const F=++v,W=e();if(!W)return(d.wallet||!d.ready)&&D(null),m<MM?(m+=500,b(500)):b(a);if(_!==W){try{(me=_==null?void 0:_.removeListener)==null||me.call(_,"accountsChanged",E)}catch{}try{(Me=W.on)==null||Me.call(W,"accountsChanged",E)}catch{}_=W}const Z=await aM(W);if(p||F!==v)return;if(!Z)return(d.wallet||!d.ready)&&D(null),b(a);if(Z!==d.wallet){const Re=!!d.facts;d.facts=null,d.wallet=Z,R(),Re&&i(null)}const K=r(),ae=Math.floor(K/fl),J=await cM(Z,ae,h).catch(()=>null);if(p||F!==v)return;const fe=DM(s,Z);if(!d.facts&&gr.some(Re=>L(fe[Re],K,ul))&&gr.some(Re=>!L(fe[Re],K,Wf[Re]))){const Re=Object.fromEntries(gr.map(Ve=>[Ve,L(fe[Ve],K,ul)?fe[Ve].v:void 0]));D(C(Z,ae,J,Re,[],K))}d.busy="load",R();try{const{got:Re,failed:Ve}=await w(Z,fe,U);if(p||F!==v)return;kM(s,Z,fe);const ee=C(Z,ae,J,Re,Ve,r());d.at=ee.at,D(ee)}catch{}finally{F===v&&(d.busy=null,R())}F===v&&b(S())}return k(),{state:d,refresh:({fresh:U=!1}={})=>k({fresh:U}),async connect(){const U=e();if(!U)throw new Error("No Ronin Wallet in this browser");d.busy="connect",R();try{await U.request({method:"eth_requestAccounts"})}finally{d.busy=null,R()}return k()},stop(){var U;p=!0,f(y);try{(U=_==null?void 0:_.removeListener)==null||U.call(_,"accountsChanged",E)}catch{}}}}const NM=`// The joust, run on the player's own machine: the player's body is their rider, an AI knight rides the far lane.
// Phases (player.state.phase): armory → ready → charge → passEnd → (ready | end) → armory.
// Every number lives in lib/data/joust.yml. The season (TEST MODE, play money: levels 0-20, owned sets, drops, forge,
// pass, mint, market, ranked ghosts) switches on per room through lib/econ.js econOn and reads lib/data/season.yml.
import J from "./lib/data/joust.yml";
import SE from "./lib/data/season.yml";
import * as E from "./lib/econ.js";
import * as B from "./bank.js";
import { animate } from "builtin/tween";

var A = J.auto, Z = J.zones, G = J.gallop, S = J.strike, T = J.track, L = J.lanes, SND = J.sounds;
var SINK = J.rider.sink || 0, OSINK = J.rider.oppSink || 0; // how far the hooves settle into the front grass, so the horse stands in the lane, not on its back edge
var LANCE_LEN = 4.8, GRIP = 0.5, RIDER = J.rider.size, FIST_M = RIDER * 0.155;
// where the rider's fist sits in each sheet cell (px of a 420 px cell, the rider facing right); the lance's grip rides it, the fist drawn over the shaft
var FIST = { 0: [247, 208], 1: [250, 200], 2: [335, 195], 3: [352, 170], 4: [255, 147], 5: [121, 25], 6: [250, 200], 7: [250, 200] };
function fistAt(f, facing, arm) {
  if (arm && arm.grips) { var g = arm.grips[f] || arm.grips[0], cw = arm.cellW || 420, ch = arm.cellH || 420, d = dimsOf(arm), mpp = RIDER * d.hs / ch; return { x: (g[0] - d.ax * cw) * mpp * facing, y: (ch - g[1] - (arm.ay || 0) * ch) * mpp }; }
  var p = FIST[f] || FIST[0]; return { x: (p[0] - 210) / 420 * RIDER * facing, y: (420 - p[1]) / 420 * RIDER }; }
var DUST = \`fx
pop dust rate=?mobile:14|26 on=disc(.5) life=.5..0.9 v=up(.6..1.4)+sdir()*.6 size=.35..0.6 acc=buoy(.2)+drag(1.5) col=<.86,.74,.52> a=0>.45:.25>.7:.2>0 sz=$size*(.6>1.8) rot=spin(.3) r=sprite(smoke-puff,alpha)\`;
var SPLINTER = \`fx
pop chips burst=26..34 life=.6..1.1 v=sdir()*(3..7)+<0,2,0> size=.08..0.2 spin=-9..9 acc=grav()*1.4+drag(.8) col=<.72,.5,.28> a=1>.7:1>0 sz=$size rot=$age*$spin r=sprite(stalk,alpha,velocity,.04)
pop flash burst=1 life=.18 size=1.6 col=hdr(3,2.6,1.6) a=1>0 sz=$size*(.6>1.4) r=sprite(soft-disc,add)
pop dust burst=6 life=.5..0.8 v=sdir()*(.6..1.2) size=.4..0.7 acc=drag(2) col=<.9,.82,.66> a=0>.4:.4>0 sz=$size*(.6>1.6) r=sprite(smoke-puff,alpha)\`;
var THUD = \`fx
pop dust burst=18..24 on=disc(.6) life=.7..1.2 v=up(.5..1.6)+sdir()*(1..2.2) size=.5..0.9 acc=buoy(.2)+drag(1.6) col=<.86,.74,.52> a=0>.55:.3>.7:.2>0 sz=$size*(.6>2) r=sprite(smoke-puff,alpha)\`;

// a rival with a look of his own (Sir Bananas' costume) rides the tier-1 rig with his own painted sheets
function lookOf(row, fallback) { if (!row || !row.look) return fallback; var b = armorOf(1), L = row.look; return Object.assign({}, b, L, { idle: Object.assign({}, b.idle, L.idle), victory: Object.assign({}, b.victory, L.victory) }); }
var ARM = {};
export function armorOf(t) { // a painted set rides the tier-1 rig with its own sheets, poses and riderless horse
  if (ARM[t]) return ARM[t];
  var a = J.armors.find(function (r) { return r.tier === t; }) || J.armors[0], b = J.armors[0];
  return (ARM[t] = a !== b && a.idle ? Object.assign({}, b, a, { idle: Object.assign({}, b.idle, a.idle), victory: Object.assign({}, b.victory, a.victory) }) : a); }
function rlOf(arm) { var R = J.riderless; return arm && arm.riderless && R ? Object.assign({}, R, arm.riderless, { idle: Object.assign({}, R.idle, arm.riderless.idle) }) : R; }
export function lanceOf(t) { return J.lances.find(function (a) { return a.tier === t; }) || J.lances[0]; }
export function levelFor(xp) { var l = 1; for (var i = 0; i < J.levels.length; i++) if ((xp || 0) >= J.levels[i]) l = i + 1; return l; }
// a sheet's rider size and where the horse's body sits in its cell (wide cells hold the painted lance ahead of him)
function dimsOf(arm) { var w = arm.cellW || 420, h = arm.cellH || 420, hs = arm.hs || 1; return { size: [RIDER * hs * w / h, RIDER * hs], ax: arm.ax != null ? arm.ax : (arm.cellW ? 210 : w / 2) / w, hs: hs }; }
var IDLE = 99; // the standing pose at the ends of the lists: a sheet of its own, one tall cell (lance straight up)
function solo(arm, f) { return f === IDLE ? arm.idle : f === 5 ? arm.victory : null; } // a pose painted alone, one tall cell (idle: lance up; victory: the long lance raised)
function texOf(arm, f) { var RL = rlOf(arm); if (f === HORSE_IDLE && RL && RL.idle) return RL.idle.sheet; if (f >= HORSE && RL) return RL.sheet; var I = solo(arm, f); return I ? I.sheet : arm.sheet; }
var HORSE_IDLE = 110; // the riderless horse standing
var HORSE = 100; // frames HORSE+0..3: the riderless horse galloping on

// each pose's art lives on its own child sprite, always drawn (faint when off): a swap is an opacity flip, never a texture load mid-bout
var POSES = {};
function texHash(t) { var h = 5381; for (var i = 0; i < t.length; i++) h = ((h * 33) ^ t.charCodeAt(i)) >>> 0; return h.toString(36); }
function armTexs(arm) { var R = rlOf(arm), a = [arm.sheet, arm.brokenSheet, arm.idle && arm.idle.sheet, arm.idle && arm.idle.broken, arm.victory && arm.victory.sheet, arm.victory && arm.victory.broken, R && R.sheet, R && R.idle && R.idle.sheet]; return a.filter(function (t, i) { return t && a.indexOf(t) === i; }); }
var POSE_OFF = 1, POSE_HIDE = -40; // a spare pose stays fully drawn but on the layer behind the sky: loaded on the GPU, never a see-through ghost over the rider
// Every joust is private: your rider, lance, dust and fall are made on your machine only (audience "local"), so no other
// player's knight ever rides across your screen, and yours never crosses theirs. Only you and your rival stand in the lists.
function poseChild(ctx, owner, tex, spec, on) {
  var mine = owner.id === ctx.self.id, pre = mine ? "lpose-me-" : "lpose-"; // a local rival's poses are local too, or they stay behind where they were born
  var P = POSES[owner.id] || (POSES[owner.id] = {}), cid = owner.id + "/" + pre + texHash(tex), c = ctx.getObject(cid);
  if (!c) { cid = ctx.spawn(pre + texHash(tex), { audience: "local", parent: owner.id, scope: "session", physics: "none", feetPosition: { x: 0, y: 0, z: 0 }, sprite: Object.assign({}, spec, { texture: tex, opacity: 1 }, on ? {} : { sortingLayer: POSE_HIDE }) }); c = ctx.getObject(cid); }
  P[tex] = cid; return c;
}
function warmPoses(ctx, owner, arm, sink) { var base = owner.sprite || {}; armTexs(arm).forEach(function (t) { var c = poseChild(ctx, owner, t, Object.assign({}, base, { opacity: 1 }), false); if (c && c.sprite && (c.sprite.opacity !== 1 || (c.sprite.sortingLayer !== POSE_HIDE && c.sprite.texture !== (owner.sprite || {}).texture))) c.sprite = Object.assign({}, c.sprite, { opacity: 1, sortingLayer: POSE_HIDE }); }); }
function showPose(ctx, owner, spec) {
  spec = Object.assign({}, spec, { sortingLayer: owner.id === ctx.self.id ? 12 : 10 }); // the body's own sprite waits behind the sky; its pose child carries the rider's real layer
  owner.sprite = Object.assign({}, spec, { opacity: 0, sortingLayer: POSE_HIDE }); // a zero-opacity quad over the rider still washed the stands behind him: the boss's ghost
  var c = poseChild(ctx, owner, spec.texture, spec, true);
  if (c) c.sprite = Object.assign({}, spec, { opacity: 1 });
  // every other pose of this rider goes behind the sky. Ask the rider for them, not the POSES cache: a new version of
  // this file starts the cache over while the old poses stay, and one left showing rode on top of the rival (Kazuo's catch)
  (owner.children || []).forEach(function (k) {
    if (!k || !/\\/lpose-/.test(k.id) || (c && k.id === c.id)) return;
    var o = ctx.getObject(k.id);
    if (o && o.sprite && (o.sprite.sortingLayer !== POSE_HIDE || o.sprite.opacity !== 1)) o.sprite = Object.assign({}, o.sprite, { opacity: 1, sortingLayer: POSE_HIDE });
  });
}
function riderSprite(sp, arm, f, flip, bob, sink) {
  var RL = rlOf(arm);
  if (f === HORSE_IDLE && RL && RL.idle) { var Q = RL.idle, qm = Q.widthM / Q.w, qh = Q.h * qm; // the riderless horse standing still at the end of the lists
    return Object.assign({}, sp, { texture: Q.sheet, uvRect: { x: 0, y: 0, width: 1, height: 1 }, size: [Q.w * qm, qh], flipX: flip, anchor: [Q.ax, (Q.ay || 0) + (sink || 0) / qh] }); }
  if (f >= HORSE && RL) { var R = RL, hm = R.horseM / R.horsePx, hw = R.cellW * hm, hh = R.cellH * hm, n = R.frames;
    return Object.assign({}, sp, { texture: R.sheet, uvRect: { x: (f - HORSE) / n, y: 0, width: 1 / n, height: 1 }, size: [hw, hh], flipX: flip, anchor: [R.ax, R.ay + ((sink || 0) - bob) / hh] }); }
  var d = dimsOf(arm), sk = (sink || 0) / (RIDER * d.hs);
  var I = solo(arm, f);
  if (I) { var mpp = RIDER * d.hs / (arm.cellH || 420); return Object.assign({}, sp, { texture: I.sheet, uvRect: { x: 0, y: 0, width: 1, height: 1 }, size: [I.w * mpp, I.h * mpp], flipX: flip, anchor: [flip ? 1 - d.ax : d.ax, (I.ay || 0) + (sink || 0) / (I.h * mpp)] }); }
  if (f === IDLE) f = 0;
  return Object.assign({}, sp, { texture: arm.sheet, uvRect: uv(f, arm.rows), size: d.size, flipX: flip, anchor: [flip ? 1 - d.ax : d.ax, (arm.ay || 0) + sk - (arm.gallop ? 0 : bob) / (RIDER * d.hs)] }); }
function uv(i, rows) { rows = rows || 2; var c = i % 4, r = (i / 4) | 0; return { x: c / 4, y: (rows - 1 - r) / rows, width: 0.25, height: 1 / rows }; }
function clamp01(v) { return Math.max(0, Math.min(1, v)); }
function zoneOf(a) { return a >= Z.helmet.min ? "helmet" : a >= Z.shield.min ? "shield" : "chest"; }

var M = null; // this machine's working memory: speeds, timers, the strike in flight

// Kazuo's call: the game plays the lances' impact (the helmet clang, the lance breaking) and the crowd's cheer and roar;
// the lists' music (places/main) plays on its own. No hooves, horn, the crowd's "oooh", fanfare, falls, whooshes or murmur.
function sfx(ctx, clip, vol, pitch) { ctx.emit("playSound", { clip: clip, volume: vol == null ? 0.8 : vol, pitch: pitch || 1 }, { audience: { player: ctx.self.id } }); }
function say(ctx, a, b, color) { ctx.self.state.msg = { a: a, b: b || "", color: color || "#ffe27a", at: ctx.now() }; }

function sid(ctx) { return String(ctx.self.id).replace(/[^A-Za-z0-9_-]/g, "-"); } // a plain id for this player's session things
function opp(ctx) { return M && M.oppId ? ctx.getObject(M.oppId) : null; }
function oppRow() { return (M && M.rankedRow) || J.opponents[Math.min(J.opponents.length - 1, (M && M.oppIdx) || 0)]; } // a ranked bout's rival is another knight's ghost
function rivalLook(row, mine) { return row && (row.ranked || row.gamba) ? armorOf(row.armor) : lookOf(row, mine); } // a ghost rides in the set he wore, the house in the set it drew

function ensureOpp(ctx) {
  var id = "rival-" + sid(ctx);
  if (J.riderless && !ctx.getObject("preload-" + sid(ctx))) ctx.spawn("preload-" + sid(ctx), { scope: "session", audience: "local", physics: "none", feetPosition: prePos(ctx), sprite: { texture: J.riderless.sheet, size: [0.02, 0.02], sortingLayer: -40 } }); // the riderless sheet loads before any fall, so the horse never shows its rider for a beat
  preloadSet(ctx, ctx.self.state.armor || 1);
  var o = ctx.getObject(id);
  var row = oppRow();
  J.opponents.forEach(function (row) { var lkId = "preload-look-" + J.opponents.indexOf(row) + "-"; if (row.look && !ctx.getObject(lkId + "0-" + sid(ctx))) { var Lk = row.look; [Lk.sheet, Lk.brokenSheet, Lk.idle && Lk.idle.sheet, Lk.idle && Lk.idle.broken, Lk.victory && Lk.victory.sheet, Lk.victory && Lk.victory.broken].filter(Boolean).forEach(function (t, i) { ctx.spawn(lkId + i + "-" + sid(ctx), { scope: "session", audience: "local", physics: "none", feetPosition: prePos(ctx), sprite: { texture: t, size: [0.02, 0.02], sortingLayer: -40 } }); }); } }); // every rival's sheets load before he rides
  if (!o) {
    ctx.spawn(id, { tags: ["rival"], scope: "session", audience: "local", physics: "none", feetPosition: { x: T.start, y: 0, z: L.oppZ },
      sprite: Object.assign(riderSprite({ upright: true, sortingLayer: 10 }, rivalLook(row, armorOf(ctx.self.state.armor || 1)), 0, true, 0, OSINK), { opacity: 0, sortingLayer: POSE_HIDE }) });
    o = ctx.getObject(id);
  }
  M.oppId = id;
  if (o && !ctx.session.posesLocal) { ctx.session.posesLocal = true; var myArm = armorOf(ctx.self.state.armor || 1); J.opponents.forEach(function (r) { armTexs(lookOf(r, myArm)).forEach(function (t) { var old = id + "/pose-" + texHash(t); if (ctx.getObject(old)) ctx.destroy(old); }); }); } // the first rival poses were born networked and never followed him
  if (o) warmPoses(ctx, o, rivalLook(row, armorOf(ctx.self.state.armor || 1)));
  M.oppLance = ensureLance(ctx, id, row.lance, row.color);
  return o;
}

function myDust(ctx) { // the hooves' dust rides a local child: the body's own fx would be shared with the room
  var id = ctx.self.id + "/ldust", d = ctx.getObject(id);
  if (!d) { ctx.spawn("ldust", { parent: ctx.self.id, audience: "local", scope: "session", physics: "none", feetPosition: { x: 0, y: 0, z: 0 } }); d = ctx.getObject(id); }
  return d;
}

function prePos(ctx) { var p = ctx.self.feetPosition; return { x: p.x, y: 1.2, z: 0 }; } // in the camera's view, behind the backdrop: a culled preload never reaches the GPU, and the swap then flashes the old art
function followPreloads(ctx) { var at = prePos(ctx), id = sid(ctx), ids = ["preload-" + id], k, j;
  for (k = 0; k < 8; k++) ids.push("preload-set-" + id + "-" + k);
  for (k = 0; k < J.opponents.length; k++) for (j = 0; j < 6; j++) ids.push("preload-look-" + k + "-" + j + "-" + id);
  ids.forEach(function (n) { var o = ctx.getObject(n); if (o) o.feetPosition = at; });
  // a 2 cm preload only ever gets the GPU's smallest copy of the art, so the rival rode in blurry until the sharp one streamed in.
  // the chosen rival's sheets and your own set stand rider-sized (nearly clear, behind the backdrop) so the full picture is already loaded; the other rivals stay tiny to spare memory
  var pick = J.opponents.indexOf(oppRow()), big = [RIDER * 1.2, RIDER * 1.2], tiny = [0.02, 0.02];
  ids.forEach(function (n) { var o = ctx.getObject(n); if (!o || !o.sprite) return; var m = /^preload-look-(\\d+)-/.exec(n), want = m ? (+m[1] === pick ? big : tiny) : big;
    if (o.sprite.size[0] !== want[0]) o.sprite = Object.assign({}, o.sprite, { size: want, opacity: 1, sortingLayer: -40, anchor: [0.5, 0] }); }); }
function preloadSet(ctx, tier) { warmPoses(ctx, ctx.self, armorOf(tier)); // the equipped set's broken, standing, victory and riderless art load before the bout needs them
  var a = armorOf(tier), R = rlOf(a), pid = "preload-set-" + sid(ctx) + "-";
  var texs = [a.sheet, a.brokenSheet, a.idle && a.idle.sheet, a.idle && a.idle.broken, a.victory && a.victory.sheet, a.victory && a.victory.broken, R && R.sheet, R && R.idle && R.idle.sheet].filter(Boolean);
  texs.forEach(function (t, i) { var o = ctx.getObject(pid + i); if (!o) ctx.spawn(pid + i, { scope: "session", audience: "local", physics: "none", feetPosition: prePos(ctx), sprite: { texture: t, size: [0.02, 0.02], sortingLayer: -40 } }); else if (o.sprite.texture !== t) o.sprite = Object.assign({}, o.sprite, { texture: t }); });
}

function ensureLance(ctx, parentId, tier, color) {
  ["/lance", "/fist"].forEach(function (k) { if (ctx.getObject(parentId + k)) ctx.destroy(parentId + k); }); // the old shared lance and fist, from before the joust went private
  var id = parentId + "/llance", fid = parentId + "/lfist";
  var tex = "scripts/tex-lance.js?tier=" + tier + (color ? "&color=" + encodeURIComponent(color) : "");
  var l = ctx.getObject(id);
  if (!l) {
    id = ctx.spawn("llance", { parent: parentId, audience: "local", scope: "session", physics: "none", feetPosition: { x: 0, y: 2.6, z: 0.05 },
      sprite: { texture: tex, size: [LANCE_LEN, 0.42], anchor: [0.5, 0.5], sortingLayer: parentId.indexOf("rival") === 0 ? 10 : 12, sortingOrder: -1, upright: false } });
    l = ctx.getObject(id);
  }
  if (!ctx.getObject(fid)) ctx.spawn("lfist", { parent: parentId, audience: "local", scope: "session", physics: "none", feetPosition: { x: 0, y: 2.6, z: 0.08 },
    sprite: { texture: armorOf(1).fist, size: [FIST_M, FIST_M], anchor: [0.59, 0.49], sortingLayer: parentId.indexOf("rival") === 0 ? 10 : 12, sortingOrder: 2, upright: false } });
  return id;
}

function setLance(ctx, lanceId, facing, deg, frame, bob, broken, tier, color, fistTex, hidden, arm) {
  var LN = arm && arm.lance; // a layered sheet: its own painted lance passes under a fist cut from the same cell
  var l = ctx.getObject(lanceId);
  if (!l) return;
  var fo = ctx.getObject(lanceId.replace(/\\/llance$/, "/lfist"));
  if (fo && LN && arm.fistSheet) {
    var lkey = frame + "," + facing + "," + arm.fistSheet + "," + !!hidden;
    if (fo.state.k !== lkey) {
      fo.state.k = lkey; fo.visible = !hidden;
      fo.feetPosition = { x: 0, y: 0, z: 0.08 }; fo.rotation = { yaw: 0, pitch: 0, roll: 0 };
      fo.sprite = Object.assign(riderSprite(fo.sprite, Object.assign({}, arm, { sheet: arm.fistSheet }), frame, facing < 0, 0, lanceId.indexOf("rival") === 0 ? OSINK : SINK), { sortingOrder: 2, upright: false });
    }
  } else if (fo) {
    var fp = fistAt(frame, facing), fr = facing > 0 ? deg : -deg;
    var fkey = fp.x.toFixed(2) + "," + (fp.y + bob).toFixed(2) + "," + Math.round(fr) + "," + facing + "," + fistTex + "," + !!hidden;
    if (fo.state.k !== fkey) {
      fo.state.k = fkey;
      fo.visible = !hidden;
      fo.feetPosition = { x: +fp.x.toFixed(3), y: +(fp.y + bob).toFixed(3), z: 0.08 };
      fo.rotation = { yaw: 0, pitch: 0, roll: fr };
      if (fo.sprite.texture !== fistTex || fo.sprite.flipX !== (facing < 0) || fo.sprite.size[0] !== FIST_M) fo.sprite = Object.assign({}, fo.sprite, { size: [FIST_M, FIST_M], texture: fistTex, flipX: facing < 0, anchor: [facing < 0 ? 0.41 : 0.59, 0.49] });
    }
  }
  var a = facing > 0 ? deg : 180 - deg, r = a * Math.PI / 180;
  var fist = fistAt(frame, facing, arm), cx = fist.x, cy = fist.y + bob;
  var len = LN ? LN.len : LANCE_LEN, off = len * 0.5 - (LN ? LN.grip : GRIP);
  var pos = { x: +(cx + Math.cos(r) * off).toFixed(3), y: +(cy + Math.sin(r) * off).toFixed(3), z: -0.05 };
  var key = pos.x + "," + pos.y + "," + Math.round(a);
  if (l.state.k !== key) { l.state.k = key; l.feetPosition = pos; l.rotation = { yaw: 0, pitch: 0, roll: a }; }
  var tex = LN ? (broken ? LN.broken : LN.tex) : "scripts/tex-lance.js?tier=" + tier + (color ? "&color=" + encodeURIComponent(color) : "") + (broken ? "&broken=1" : "");
  var ord = LN ? 1 : -1;
  if (l.sprite.texture !== tex || l.sprite.sortingOrder !== ord || l.sprite.size[0] !== len) l.sprite = Object.assign({}, l.sprite, { texture: tex, sortingOrder: ord, size: [len, LN ? LN.thick : 0.42] });
}

function tipOf(body, facing, deg, arm) {
  var a = (facing > 0 ? deg : 180 - deg) * Math.PI / 180, LN = arm && arm.lance, r = LN ? LN.len - LN.grip : LANCE_LEN - GRIP;
  var p = body.feetPosition, f = fistAt(3, facing, arm);
  return { x: p.x + f.x + Math.cos(a) * r, y: p.y + f.y + Math.sin(a) * r, z: 3 };
}

function placeRiders(ctx, dir) {
  var s = ctx.self.state;
  ctx.self.feetPosition = { x: -dir * T.start, y: 0.05, z: L.playerZ };
  ctx.self.velocity = { x: 0, y: 0, z: 0 };
  var o = ensureOpp(ctx);
  if (o) o.feetPosition = { x: dir * T.start, y: 0, z: L.oppZ };
  M.speed = 0; M.oppSpeed = 0; M.fallen = null; M.struck = null; M.resolved = false; M.myBroken = false; M.oppBroken = false;
  M.pose = null; M.oppPose = null; M.poseUntil = 0; M.oppPoseUntil = 0;
  s.dir = dir;
}

// the boss you will ride against: in the season a boss above your level waits, so a pick that got ahead of you falls
// back to the hardest boss open to you
function openPick(s) {
  var p = Math.min(s.oppPick || 0, J.opponents.length - 1), lvl = E.levelFor(s.xp);
  return M && M.econ && !E.bossOpen(p, lvl) ? E.topBoss(lvl, J.opponents.length) : p;
}

function startBout(ctx, ranked) {
  var s = ctx.self.state;
  s.oppPick = openPick(s); M.oppIdx = s.oppPick;
  M.rankedRow = null; s.mode = "boss";
  var g = ranked === true && s.ranked && s.ranked.opp;
  if (g) { M.rankedRow = ghostRow(g); s.mode = "ranked"; }
  else if (ranked === "gamba" && s.gamba) { M.rankedRow = houseRow(s.gamba); s.mode = "gamba"; } // Gamba mode: a bet against the house
  var row = oppRow();
  s.vs = { name: row.name, portrait: row.ranked || row.gamba ? armorOf(row.armor).portrait : row.portrait, color: row.color, ranked: !!row.ranked, gamba: !!row.gamba, elo: row.elo || null }; // what the HUD names the rival
  s.opp = M.oppIdx; s.pass = 1; s.myPts = 0; s.oppPts = 0; s.bout = null; s.log = [];
  placeRiders(ctx, 1);
  enterReady(ctx);
}

// a ranked bout's rival: another knight's ghost, riding the set he wore and pressing as he pressed
function ghostRow(g) { return { name: g.name, color: "#7a5cff", armor: g.tier, lance: g.tier, acc: 0.5, speed: 0.78, ranked: true, level: g.level, qs: g.qs || [0.5], id: g.id, elo: g.elo, bot: g.bot }; }
// a Gamba bout's rival: the house, in the set it drew when the bet was placed (your rider wears your own set)
function houseRow(g) { return { name: "The House", color: "#c9a25a", armor: g.house || 1, lance: g.house || 1, acc: 0.5, speed: 0.78, gamba: true, level: 0 }; }

// a bout cut short (a publish reloads this file, or the page closed mid-joust) picks up at the same pass with the same
// score (Kazuo): an unfinished pass is ridden again, a finished one leads to the next pass or the bout's end, so nobody
// loses a bout to a reload and nobody escapes a ranked loss by closing the page
function resumeBout(ctx) {
  var s = ctx.self.state;
  if ((s.phase !== "ready" && s.phase !== "charge" && s.phase !== "passEnd") || !s.vs || !(s.pass >= 1)) return false;
  M.oppIdx = Math.min(s.opp || 0, J.opponents.length - 1);
  if (s.mode === "ranked") { if (!(s.ranked && s.ranked.opp)) return false; M.rankedRow = ghostRow(s.ranked.opp); }
  if (s.mode === "gamba") { if (!(s.gamba && s.gamba.id)) return false; M.rankedRow = houseRow(s.gamba); }
  var dir = s.dir || 1;
  if (s.phase !== "passEnd") { placeRiders(ctx, dir); enterReady(ctx); return true; }
  var log = s.log || [], last = log[log.length - 1];
  jumpPast(ctx, (last && last.uh) || null);
  return true;
}
// a finished pass, its ride to the ends skipped: the riders stand where the run ends, then the next pass or the result
function boutOver(s, fallen) { // a fall, the passes done (a tie goes on to maxPasses), or Gamba's deciding third pass ridden
  var NP = M.econ ? SE.passes : J.passes, MP = M.econ ? SE.maxPasses : J.maxPasses;
  return s.mode === "gamba" ? !!fallen || s.pass >= SE.gamba.passes : !!fallen || (s.pass >= NP && s.myPts !== s.oppPts) || s.pass >= MP;
}
function jumpPast(ctx, fallen) {
  var s = ctx.self.state, over = boutOver(s, fallen);
  placeRiders(ctx, -(s.dir || 1));
  if (over) { M.fallen = fallen; endBout(ctx); }
  else { s.pass += 1; enterReady(ctx); }
}
// SKIP (Kazuo): a switch the player leaves on or off (player.state.autoSkip). With it on, once you pressed the bar the
// riders cut to the run-in just before the slow motion: only the run up to the contact is skipped; the clash and the
// ride after it play as always, and Gamba's deciding third pass rides in full. The outcome never changes: it
// comes from your press and the rolls, not from where the horses stand.
function cutToClash(ctx, o, dir, row) {
  var s = ctx.self.state, x = 6.5; // a gap of 13: a beat at full gallop, then the slow motion (under 12) and the clash
  M.cut = true;
  if (s.phase === "ready") goCharge(ctx);
  ctx.self.feetPosition = { x: -dir * x, y: 0.05, z: L.playerZ };
  if (o) o.feetPosition = { x: dir * x, y: 0, z: L.oppZ };
  M.speed = Math.max(M.speed, G.max * A.run * 0.9); M.oppSpeed = Math.max(M.oppSpeed, row.speed * G.max * 0.9);
}

function enterReady(ctx) {
  var s = ctx.self.state, row = oppRow();
  s.phase = "ready"; M.phaseAt = ctx.now();
  M.struck = null; M.resolved = false; M.myBroken = false; M.oppBroken = false; M.lastTap = 0; M.cut = false;
  // the knight's plan for this pass: how true his tip runs and where he aims
  var r = ctx.random();
  M.aiQ = row.ranked ? clamp01(ghostQ(row, s.pass)) : clamp01(row.acc + (ctx.random() - 0.5) * A.aiNoise); // a ghost presses as its owner did that pass
  M.aiZone = M.aiQ >= A.helmetAcc ? "helmet" : "shield";
  var period = M.econ ? E.barPeriod(A.period / (SE.barSpeed || 1), A.minPeriod, s.pass) : Math.max(A.minPeriod, (A.period - A.perRank * (s.opp || 0)) * Math.pow(A.perPass, (s.pass || 1) - 1)); // the season: every boss sweeps alike, each pass 20% faster
  s.bar = { t0: ctx.now(), period: period, target: Math.round((0.15 + ctx.random() * 0.7) * 1000) / 1000 };
  s.struck = null;
  var win = tapWindow(ctx, row); s.bar.by = ctx.now() + Math.round(win * 1000); s.bar.win = Math.round(win * 100) / 100; // the tap timer
  if (row.gamba && s.pass >= SE.gamba.passes) say(ctx, "FINAL PASS", "your tap decides it", "#ffcf3a"); // Gamba: the third pass decides (Santa)
  else say(ctx, "PASS " + s.pass, "hit the target on the bar!", "#fff4d6");
}
// Santa's tap timer: how long you have to press the bar this pass. The run is simulated with the update's own rules
// (the ready beat, then the charge, the slow motion under 12 m) up to the clash, and closed a beat early, so the
// timer is honest: when it reaches zero the press is closed (onCharge), and the clash follows
function tapWindow(ctx, row) {
  var o = opp(ctx), dir = ctx.self.state.dir || 1, gap = o ? dir * (o.feetPosition.x - ctx.self.feetPosition.x) : 2 * T.start;
  var dt = 1 / 60, t = 1.8, sp = 0, osp = 0, cap = (row.speed || 0.78) * G.max;
  for (var i = 0; i < 4000 && gap > S.late; i++) { sp = Math.min(G.max * A.run, Math.max(G.min, sp + 6 * dt)); osp = Math.min(cap, osp + 4.5 * dt); gap -= (sp + osp) * (gap < 12 ? 0.35 : 1) * dt; t += dt; }
  return Math.max(1, t - 0.15);
}
function pctOf(p) { return (Math.round(p * 10000) / 100).toFixed(2) + "%"; }

export function onSpawn(ctx) {}

// a line said in the room's chat pops as a speech balloon over this rider's head (scripts/ui.js draws your own; ui/nametag.js everyone else's)
export function onSay(ctx, line) {
  if (!line || !line.text || (line.scope && line.scope !== "say")) return;
  var until = ctx.now() + 7000;
  ctx.self.state.said = { text: String(line.text).slice(0, 140), until: until };
  ctx.after(7, "clearSaid", { until: until });
}
export function clearSaid(ctx, p) { var s = ctx.self.state.said; if (s && s.until === p.until) delete ctx.self.state.said; }

export function onInput(ctx, input) {
  if (!ctx.self.isLocal || !M) return;
  var s = ctx.self.state;
  M.aimAxis = input.axes.aim || 0;
  var d = input.actionData || {};
  if (d.equip && d.equip.equip) d = Object.assign({}, d, { equip: d.equip.equip });
  if (input.pressed.equip && d.equip) {
    var lvl = levelFor(s.xp);
    if (M.econ) { // the season: a minted set of yours (or No Armor) whose level you have reached; otherwise say why not
      var et = d.equip.tier, en = itemName(et);
      if (d.equip.kind !== "set") {}
      else if (E.unlockLevel(et) > E.levelFor(s.xp)) toast(ctx, en + ": wear it at level " + E.unlockLevel(et), false);
      else if (!owns(s, et)) toast(ctx, (s.items || []).some(function (it) { return it.tier === et; }) ? "Mint " + en + " first: Armory, MINT" : "You have no " + en + " yet: win it from a boss, forge it or buy it", false);
      else { s.armor = et; s.lance = et; preloadSet(ctx, s.armor); }
    } else {
      if (d.equip.kind === "set" && armorOf(d.equip.tier).level <= lvl) { s.armor = d.equip.tier; s.lance = d.equip.tier; preloadSet(ctx, s.armor); } // a set: the armour and its lance together
      if (d.equip.kind === "armor" && armorOf(d.equip.tier).level <= lvl) s.armor = d.equip.tier;
      if (d.equip.kind === "lance" && lanceOf(d.equip.tier).level <= lvl) s.lance = d.equip.tier;
    }
  }
  var pk = d.pickOpp; if (pk && typeof pk === "object") pk = pk.pickOpp;
  if (input.pressed.pickOpp && pk != null) {
    var pi = Math.max(0, Math.min(+pk || 0, J.opponents.length - 1));
    if (M.econ && !E.bossOpen(pi, E.levelFor(s.xp))) toast(ctx, J.opponents[pi].name + " waits for you at level " + E.bossLevel(pi), false);
    else { s.oppPick = pi; M.oppIdx = pi; M.rankedRow = null; ensureOpp(ctx); }
  }
  if (input.pressed.fight && (s.phase === "armory" || s.phase === "end")) {
    M.rankedRow = null;
    if (!M.econ) startBout(ctx);
    else if (E.runsLeft(s.energy, s.fake, ctx.now(), !!(s.econ && s.econ.pass)) > 0) { s.energy = E.spendRun(s.energy, ctx.now()); startBout(ctx); } // a free bout of the day
    else act(ctx, "payRun", function () { return B.payRun(ctx).then(function (r) { if (r.ok) { ctx.self.state.startPending = true; return "Paid " + E.fmt(SE.runPrice) + " HORSKE for one more bout"; } return "No free bouts left today, and not enough HORSKE for one more"; }); });
  }
  if (input.pressed.toArmory && s.phase === "end") enterArmory(ctx);
  if (input.pressed.charge) onCharge(ctx);
  if (input.pressed.skip) s.autoSkip = !s.autoSkip; // SKIP: the switch stays as you leave it
  if (M.econ) econInput(ctx, input, d);
}

// ---- the season (TEST MODE, play money) --------------------------------------------------------------------------
function owns(s, tier) { // a set you can wear: No Armor, or an NFT of this season (Kazuo: a dropped or forged set is minted before it is worn)
  if (tier === 1) return true;
  var ec = s.econ;
  return !!(ec && (ec.nfts || []).some(function (n) { return n.tier === tier && n.season === ec.season; }));
}
function ghostQ(row, pass) { var q = row.qs || [0.5]; return q[Math.min(q.length - 1, Math.max(0, (pass || 1) - 1))] || 0; }
function itemName(tier) { var a = J.armors.find(function (r) { return r.tier === tier; }); return a ? a.name : "Set " + tier; }
function toast(ctx, text, ok) { ctx.self.state.toast = { text: text, ok: ok !== false, at: ctx.now() }; }
function seasonReset(ctx) { // a new season (or the first one this player sees): progress starts over at level 0, the wallet and minted trophies stay
  var s = ctx.self.state;
  if (s.season == null && s.classic == null) s.classic = { xp: s.xp || 0, armor: s.armor || 1, lance: s.lance || 1, beaten: s.beaten || 0, oppPick: s.oppPick || 0 }; // the pre-season save, kept aside
  if ((s.epoch || 0) !== (SE.epoch || 0)) { s.epoch = SE.epoch || 0; s.fake = { ronkeverse: 0, oneOfOne: 0, colored: 0 }; } // a fresh start: the test rooms' pretend NFTs go too
  s.season = s.econ.season; s.xp = 0; s.level = E.levelFor(0); s.items = []; s.forge = 0; s.beaten = 0; s.oppPick = 0; s.armor = 1; s.lance = 1;
  s.energy = null; s.ranked = { opp: null }; s.rankedPending = null; s.mode = "boss";
  if (M) { M.oppIdx = 0; M.rankedRow = null; }
  if (s.phase !== "armory") enterArmory(ctx);
}
// a SQL errand: one at a time (s.busy), then a fresh snapshot of the wallet and the market, then a toast
function act(ctx, name, run, force) {
  var s = ctx.self.state;
  if (s.busy && !force) return;
  s.busy = name;
  Promise.resolve().then(run).then(function (msg) { return { msg: msg, ok: !/^(No |Not |Could|Needs|Ranked needs)/.test(msg || "") }; }, function (e) { return { msg: "Error: " + String((e && e.message) || e).slice(0, 140), ok: false }; })
    .then(function (res) {
      return B.snapshot(ctx, ctx.self.displayName || "Knight").then(function (snap) { ctx.self.state.econ = snap; return res; }, function (e) { return { msg: res.msg || ("Sync failed: " + String((e && e.message) || e).slice(0, 140)), ok: false }; });
    })
    .then(function (res) { var st = ctx.self.state; st.busy = null; if (res && res.msg) toast(ctx, res.msg, res.ok); if (M && M.next) { var nx = M.next; M.next = null; nx(); } });
}
function intIn(v, lo, hi) { v = Math.floor(+v || 0); return Math.max(lo, Math.min(hi, v)); }
function econInput(ctx, input, d) {
  var s = ctx.self.state, P = input.pressed, S = (s.econ && s.econ.season) || 1, name = ctx.self.displayName || "Knight";
  var arg = function (k) { var v = d[k]; return v && typeof v === "object" && k in v ? v[k] : v; }; // sendAction(name, { name: value }) arrives either way
  var tools = E.testTools(ctx.self.userId); // the faucet, the pretend NFTs and the reset: the test rooms' tools, the admins' alone once live
  if (P.sync) act(ctx, "sync", function () { return null; });
  if (P.peek) peekBank(ctx); // the page asks while a board is open (GAMBA, RANKED): other knights' bets and Elo show up by themselves
  if (P.faucet && tools) act(ctx, "faucet", function () { return B.faucet(ctx).then(function () { return "+" + E.fmt(SE.faucet) + " test HORSKE"; }); });
  if (P.fake && tools && arg("fake")) { // the test tools' pretend NFTs, and the rarest Ronke you say you hold (Gamba's riders follow it)
    var f = arg("fake"), rb = f.rarest != null ? String(f.rarest) : s.fake && s.fake.rarest;
    s.fake = { ronkeverse: intIn(f.ronkeverse, 0, 500), oneOfOne: intIn(f.oneOfOne, 0, 50), colored: intIn(f.colored, 0, 500), rarest: E.gambaBody(rb) ? rb : null };
  }
  if (P.gambaBet && arg("gambaBet")) { // Gamba mode: { rider, amount }, a bet against the house, then the joust
    var gb = arg("gambaBet"), gr = E.gambaRider(String(gb.rider || "free")), ga = intIn(gb.amount, 0, SE.gamba.maxBet);
    if (gr.id === "free" && E.gambaTop(s.fake) !== "free") gr = E.gambaRider("ronke"); // a Ronke holder never rides the free rider (Kazuo)
    var used = ((s.econ && s.econ.gtoday) || {})[gr.id] || 0;
    if (!(s.phase === "armory" || s.phase === "end")) {}
    else if (s.gamba && s.gamba.id && !s.gamba.result) { toast(ctx, "Your last bet is still being settled", false); ctx.after(0.1, "gambaSettle", {}); }
    else if (!E.gambaOwns(gr.id, s.fake)) toast(ctx, "The " + gr.name + " rider needs " + (gr.id === "ronke" ? "a Ronkeverse NFT" : gr.id === "one" ? "a 1/1" : "a colored Ronke") + " as your rarest Ronke", false);
    else if (ga < 1) toast(ctx, "Pick how much to bet first", false);
    else if (ga > E.gambaMaxBet(gr.id, used)) toast(ctx, gr.name + " bets go up to " + E.fmt(E.gambaMaxBet(gr.id, used)) + " HORSKE", false);
    else { s.gambaPick = { rider: gr.id, amount: ga }; act(ctx, "gambaBet", function () {
      return B.gambaBet(ctx, S, E.dayOf(ctx.now()), gr.id, ga).then(function (r) {
        if (!r || !r.ok) return "Not enough HORSKE for that bet";
        var st = ctx.self.state;
        st.gamba = { id: r.id, rider: r.rider, amount: ga, qs: [], house: 1 + Math.floor(ctx.random() * J.armors.length), result: null };
        st.startPending = "gamba";
        return r.rider !== gr.id ? "Your " + gr.daily + " " + gr.name + " bets are used today: this one rides as a Ronke" : null;
      });
    }); }
  }
  if (P.buyPass) act(ctx, "buyPass", function () { return B.buyPass(ctx, S).then(function (r) { return r.ok ? "Season pass bought: ranked, minting and x" + SE.pass.dropMult + " drops are yours" : "Not enough HORSKE, or you already have this season's pass"; }); });
  if (P.mint && arg("mint")) { // { tier, n }: mint n of your bound sets of that tier, one bank call each, stopping at the first refusal
    var mv = arg("mint"), byTier = typeof mv === "object", mt = byTier ? intIn(mv.tier, 2, 10) : null;
    var batch = (s.items || []).filter(function (x) { return byTier ? x.tier === mt : x.id === String(mv); }).slice(0, byTier ? intIn(mv.n, 1, SE.pass.mintCap) : 1);
    if (batch.length) act(ctx, "mint", function () {
      var done = 0, tier = batch[0].tier;
      function one() {
        if (done >= batch.length) return Promise.resolve();
        return B.mint(ctx, S, tier).then(function (r) {
          if (!r.ok) return;
          var gone = batch[done].id; done++;
          ctx.self.state.items = (ctx.self.state.items || []).filter(function (x) { return x.id !== gone; });
          return one();
        });
      }
      return one().then(function () {
        if (!done) return "Needs the season pass, a mint left (" + SE.pass.mintCap + " a pass) and " + E.fmt(SE.mintPrice) + " HORSKE";
        if (done < batch.length) return "Minted " + done + " of " + batch.length + " " + itemName(tier) + ": out of HORSKE or pass mints";
        return (done > 1 ? done + " " : "") + itemName(tier) + " minted: " + (done > 1 ? "tradable NFTs" : "a tradable NFT") + " now";
      });
    });
  }
  if (P.list && arg("list")) {
    var L = arg("list"), lp = intIn(L.price, 0, 1e12);
    if (lp < 1) toast(ctx, "Type your price in HORSKE first", false);
    else act(ctx, "list", function () { return B.list(ctx, S, +L.nft, lp, name).then(function (r) { return r.ok ? "Listed for " + E.fmt(lp) + " HORSKE" : "Could not list it (already on sale, or not yours)"; }); });
  }
  if (P.unlist && arg("unlist") != null) { var ul = +arg("unlist"); act(ctx, "unlist", function () { return B.unlist(ctx, ul).then(function (r) { return r.ok ? "Taken off the market" : "Could not take it off"; }); }); }
  if (P.buy && arg("buy") != null) { var bl = +arg("buy"); act(ctx, "buy", function () { return B.buy(ctx, S, bl).then(function (r) { return r.ok ? "Bought " + itemName(r.tier) + "!" : "Not enough HORSKE, or it is sold already"; }); }); }
  if (P.burn && arg("burn")) {
    var bu = arg("burn"), bid = String(bu.item || ""), bit = (s.items || []).find(function (x) { return x.id === bid; });
    if (bit) toast(ctx, "Only NFTs melt: mint " + itemName(bit.tier) + " first", false); // Kazuo: a bound set is minted before it melts
    else if (bu.nft != null) { var nid = +bu.nft; act(ctx, "burn", function () { return B.burnNft(ctx, nid).then(function (r) {
      if (!r.ok) return "Could not melt it (take it off the market first)";
      ctx.self.state.forge = (ctx.self.state.forge || 0) + E.forgeValue(r.tier); return itemName(r.tier) + " NFT melted: +" + E.forgeValue(r.tier) + " forge point" + (E.forgeValue(r.tier) === 1 ? "" : "s"); }); }); }
  }
  if (P.forge && arg("forge") != null) {
    var ft = intIn(arg("forge"), 2, 10), cost = E.forgeValue(ft);
    if ((s.forge || 0) >= cost) { s.forge -= cost; s.items = (s.items || []).concat([{ id: "f" + ctx.now() + "-" + Math.floor(ctx.random() * 1e6), tier: ft, forged: true }]); toast(ctx, itemName(ft) + " forged!"); }
    else toast(ctx, "Not enough forge points: " + itemName(ft) + " costs " + cost, false);
  }
  if (P.rankedFind) {
    var find = function () { act(ctx, "rankedFind", function () {
      var st = ctx.self.state, sn = (st.econ && st.econ.season) || 1;
      if (!st.econ || !st.econ.pass) return Promise.resolve("Ranked needs the season pass");
      var me = st.econ.ranked || { elo: SE.ranked.start };
      return B.rankedFind(ctx, sn, E.dayOf(ctx.now()), me.elo, name).then(function (o) {
        if (!o) return "Could not find a rival right now";
        ctx.self.state.ranked = { opp: o }; ctx.self.state.startPending = "ranked"; return null; // Kazuo: FIND rides at once, nobody picks his rival
      });
    }); };
    if (s.busy) M.next = find; else find(); // the bank is busy (a ranked result saving): ask right after it
  }
  if (P.rankedFight && s.ranked && s.ranked.opp && s.econ && s.econ.pass && (s.phase === "armory" || s.phase === "end")) startBout(ctx, true);
  if (P.resetMe && tools) { s.econ = Object.assign({}, s.econ); s.season = -1; toast(ctx, "Your season progress starts over"); } // test tool: seasonReset runs on the next tick
  if (P.adminPod && s.isAdmin) act(ctx, "adminPod", function () { return B.addPod(ctx, S, 100000).then(function () { return "+100,000 HORSKE of PoD added to the pool"; }); });
  if (P.adminEnd && s.isAdmin) act(ctx, "adminEnd", function () {
    return B.standings(ctx, S).then(function (st) {
      var pays = E.payouts(st.rows, st.pool), i = 0;
      function next() { if (i >= pays.length) return B.openNext(ctx, S, { pool: st.pool, pays: pays }); var p = pays[i++]; return B.payOne(ctx, S, p.user_id, p.amount).then(next); }
      return next().then(function () { return "Season " + S + " closed: " + pays.length + " knight" + (pays.length === 1 ? "" : "s") + " paid " + E.fmt(st.pool) + " HORSKE. Season " + (S + 1) + " begins!"; });
    });
  });
}
// a ranked bout's result goes to SQL from this timer hook (endBout runs in update, where SQL may not)
export function rankedReport(ctx) {
  var p = ctx.self.state.rankedPending;
  if (!p) return;
  ctx.self.state.rankedPending = null;
  act(ctx, "ranked", function () { return B.rankedResult(ctx, p.S, p.day, p.oppId, p.won, p.dMe, p.dOpp, p.tier, p.level, p.qs).then(function (r) { return r ? "Elo " + (p.dMe >= 0 ? "+" : "") + p.dMe + " → " + r.elo : null; }); }, true); // a result is never dropped for a busy bank
}

function enterArmory(ctx) {
  var s = ctx.self.state;
  s.phase = "armory"; s.bout = null; s.msg = null;
  s.oppPick = openPick(s); M.oppIdx = s.oppPick; M.rankedRow = null; s.mode = "boss"; // back in the lobby, the lists hold your boss again
  placeRiders(ctx, 1);
  if (M.econ && s.econ) ctx.after(0.1, "syncBank", {}); // a fresh wallet, market, pool and season (an admin may have closed it); SQL runs from a timer hook
}
// a quiet read for the lobby's open board: never over a busy bank, at most every 5 s, and dropped if a fuller snapshot
// (an errand's) landed while it ran
function peekBank(ctx) {
  var s = ctx.self.state, t0 = ctx.now();
  if (!M || !M.econ || s.busy || !s.econ || s.phase !== "armory" || t0 - (M.peekAt || 0) < 5000) return;
  M.peekAt = t0;
  B.peek(ctx).then(function (snap) { var st = ctx.self.state; if (!st.busy && st.econ && (st.econ.at || 0) <= t0) st.econ = snap; }, function () {});
}
export function syncBank(ctx) {
  if (!M || !M.econ || ctx.self.state.busy) return;
  B.snapshot(ctx, ctx.self.displayName || "Knight").then(function (snap) { ctx.self.state.econ = snap; }, function () {});
}

function gapNow(ctx) {
  var o = opp(ctx); if (!o) return 99;
  return (ctx.self.state.dir || 1) * (o.feetPosition.x - ctx.self.feetPosition.x);
}

export function barAt(bar, now) { var ph = ((now - bar.t0) / 1000 / bar.period) % 2; return ph < 1 ? ph : 2 - ph; } // the marker 0..1, sweeping back and forth
function onCharge(ctx) {
  var s = ctx.self.state, now = ctx.now();
  if (s.phase !== "ready" && s.phase !== "charge") return;
  if (M.struck || M.resolved || M.fallen || !s.bar) return;
  if (s.bar.by && now > s.bar.by) return; // the tap timer ran out: this pass is a miss
  var m = barAt(s.bar, now), d = Math.abs(m - s.bar.target);
  var q = d <= A.perfect ? 1 : clamp01(1 - (d - A.perfect) / 0.5);
  var grade = q >= 0.95 ? "PERFECT!" : q >= 0.8 ? "GREAT" : q >= 0.6 ? "GOOD" : "MISS";
  M.struck = { q: q, zone: q >= A.helmetAcc ? "helmet" : "shield" };
  s.struck = { q: Math.round(q * 100), grade: grade, at: Math.round(m * 1000) / 1000, t: now };
  var gr = oppRow(); // Gamba: your press counts at once and the chance on the board moves with it (Santa), every pass alike
  if (gr && gr.gamba && s.gamba && (s.gamba.qs || []).length < s.pass) s.gamba = Object.assign({}, s.gamba, { qs: (s.gamba.qs || []).concat([Math.round(q * 100) / 100]) });
  M.pose = 3; M.poseUntil = now + 450;
  if (q >= 0.95) ctx.emit("screenFlash", { color: "#ffe27a", duration: 0.15, intensity: 0.25 }, { audience: { player: ctx.self.id } });
}

function goCharge(ctx) {
  var s = ctx.self.state;
  s.phase = "charge"; M.phaseAt = ctx.now(); M.speed = Math.max(M.speed, G.min);
  say(ctx, "CHARGE!", "", "#ffcf3a");
  sfx(ctx, SND.cheer, 0.4, 1.05);
}

function evalStrike(q, zone, power, def, spd01, rnd) {
  var z = Z[zone];
  if (q < z.need) return { pts: 0, glance: true, unhorse: false, q: q, zone: zone };
  var p = Math.max(0, Math.min(0.85, z.unhorse * q * (0.5 + 0.5 * spd01) * power - def));
  return { pts: z.points, glance: false, unhorse: rnd < p, q: q, zone: zone, p: p };
}

function resolvePass(ctx) {
  var s = ctx.self.state, row = oppRow(), now = ctx.now();
  if (row.gamba) return resolveGamba(ctx, row);
  M.resolved = true; M.slow = false;
  var myA = armorOf(s.armor || 1), myL = lanceOf(s.lance || 1);
  var oA = armorOf(row.armor), oL = lanceOf(row.lance);
  // the auto-battle: each rider rolls; the set and the rival's skill shift his roll, the bar only adds a bonus
  var myQ = M.struck ? M.struck.q : 0, myS, oS;
  if (M.econ) { // the season: +2 per set tier and +1 per level on both sides; boss N rides as a level 2N-2 knight in set N
    myS = A.base + E.setBonus(s.armor || 1) + E.levelBonus(E.levelFor(s.xp)) + myQ * A.barBonus + ctx.random() * A.luck;
    if (row.ranked) oS = A.base + ghostQ(row, s.pass) * A.barBonus + E.setBonus(row.armor) + E.levelBonus(row.level) + ctx.random() * A.luck;
    else { var bi = s.opp || 0; oS = E.bossAcc(bi) + E.setBonus(bi + 1) + E.levelBonus(E.bossLevel(bi)) + ctx.random() * A.luck; }
  } else {
    myS = A.base + (myA.bonus || 0) + myQ * A.barBonus + ctx.random() * A.luck;
    oS = (oppRow().acc || 0.5) + (oA.bonus || 0) + ctx.random() * A.luck;
  }
  var oDef = M.econ && !row.ranked ? armorOf((s.opp || 0) + 1).def : oA.def; // the season: boss N wears set N
  var iWin = myS >= oS, margin = Math.abs(myS - oS), uh = ctx.random() < clamp01((margin - A.unhorseMargin) * A.unhorseSlope) * (1 - 2 * ((iWin ? oDef : myA.def) || 0)); // the loser's armour turns part of the blow: Royal Champion halves the fall
  function hit(q, won) { var zone = won && margin >= A.helmetMargin ? "helmet" : "shield"; return won ? { pts: Z[zone].points, zone: zone, glance: false, unhorse: uh, q: q } : ctx.random() < A.loserBreak ? { pts: 1, zone: "shield", glance: false, unhorse: false, q: q } : { pts: 0, zone: "shield", glance: true, unhorse: false, q: q }; }
  var me = hit(myQ, iWin), them = hit(M.aiQ, !iWin);
  M.aim = me.zone === "helmet" ? 0.8 : 0.2; M.aiZone = them.zone;
  s.passScore = { me: Math.round(myS * 100), opp: Math.round(oS * 100) };
  if (s.forceFall) { delete s.forceFall; them = Object.assign({}, them, { pts: Math.max(them.pts || 0, 1), miss: false, unhorse: true }); me.unhorse = false; } // a test pass: the rival unhorses you
  if (me.unhorse && them.unhorse) { if (me.q >= them.q) them.unhorse = false; else me.unhorse = false; }
  s.myPts = (s.myPts || 0) + me.pts; s.oppPts = (s.oppPts || 0) + them.pts;
  var o = opp(ctx), dir = s.dir || 1;
  var myScale = myA.scale, oScale = oA.scale;
  var myTip = tipOf(ctx.self, dir, M.aim * 12, myA);
  var oTip = o ? tipOf(o, -dir, M.aiZone === "helmet" ? 10 : M.aiZone === "chest" ? -5 : 1, oA) : myTip;
  var aud = { audience: { player: ctx.self.id } };
  // the lances meet every pass (someone always lands one, Kazuo): one clash, first and loudest, the helmet's metal when
  // a helmet was hit, else the lance breaking; the crowd answers a beat later so it never covers the clash
  sfx(ctx, (me.pts > 0 && me.zone === "helmet") || (them.pts > 0 && them.zone === "helmet") ? SND.clang : SND.break, 1);
  // what my lance did
  var a;
  if (me.miss) a = "NO STRIKE";
  else if (me.glance) a = "GLANCED OFF";
  else a = (me.zone === "helmet" ? "HELMET HIT! +2" : me.zone === "shield" ? "LANCE BROKEN! +1" : "CHEST HIT! +1");
  if (me.pts > 0) {
    M.myBroken = true;
    ctx.emit("fx", { position: myTip, script: SPLINTER }, aud);
    if (o) { M.oppPose = 4; M.oppPoseUntil = now + 600; ctx.emit("squash", { target: o.id, axis: "x", intensity: 0.12, duration: 0.2 }, aud); }
    ctx.emit("hitstop", { duration: 0.05 }, aud);
    ctx.emit("cameraPunch", { direction: { x: dir, y: 0, z: 0 }, intensity: 0.35 }, aud);
  }
  // what his lance did
  var b;
  if (them.glance) b = row.name + " glanced off";
  else b = row.name + (them.zone === "helmet" ? " hit your helmet +2" : them.zone === "shield" ? " broke a lance on your shield +1" : " hit your chest +1");
  if (them.pts > 0) {
    M.oppBroken = true;
    ctx.emit("fx", { position: oTip, script: SPLINTER }, aud);
    M.pose = 4; M.poseUntil = now + 650;
    ctx.emit("screenShake", { intensity: 0.35, duration: 0.25 }, aud);
  }
  s.pushAt = now;
  if ((me.pts > 0 || them.pts > 0) && !me.unhorse && !them.unhorse) ctx.after(0.3, "crowd", { clip: "cheer", vol: 0.8 }); // the crowd cheers any lance that lands (Kazuo)
  if (me.unhorse || them.unhorse) {
    var loser = me.unhorse ? "opp" : "me";
    M.fallen = loser;
    unhorse(ctx, loser === "me" ? ctx.self : o, loser === "me" ? dir : -dir, loser === "me" ? myA : lookOf(row, oA));
    ctx.emit("hitstop", { duration: 0.12 }, aud);
    ctx.after(0.2, "fallSlow", {}); // the slow motion waits for the clash to ring at full speed
    ctx.emit("shockwave", { position: loser === "me" ? myTip : oTip, speed: 18, thickness: 1.2, intensity: 0.6 }, aud);
    ctx.emit("screenFlash", { color: "#fff6d8", duration: 0.25, intensity: 0.5 }, aud);
    ctx.after(0.3, "crowd", { clip: "crowdFall", vol: 1 }); // the crowd shouts and claps for a fall
    if (loser === "opp") { a = "UNHORSED!! " + row.name + " hits the dirt"; ctx.emit("milestone", { step: 10 + (s.opp || 0), name: "unhorsed " + row.name }, aud); }
    else b = row.name + " unhorsed you!";
  }
  s.log = (s.log || []).concat([{ me: me.pts, opp: them.pts, uh: M.fallen || "", q: Math.round(myQ * 100) / 100 }]); // q: this pass's press, a ranked run's ghost replays it
  say(ctx, a, b, me.pts > them.pts ? "#ffe27a" : me.pts < them.pts ? "#ff9a7a" : "#fff4d6");
  s.phase = "passEnd"; M.phaseAt = now;
}

// Gamba mode (Santa: no final charge). Passes 1 and 2: both lances break on the shields and each press adds up to
// SE.gamba.barPerPass to the chance (no points, no falls). Pass 3 decides: its press (or its timer running out) closes
// the bar and the bank draws at once (update asks gambaSettle, a timer hook: SQL runs from hooks); its clash shows the
// draw: the loser hits the dirt.
function resolveGamba(ctx, row) {
  var s = ctx.self.state, g = Object.assign({}, s.gamba || {}), now = ctx.now(), aud = { audience: { player: ctx.self.id } };
  M.resolved = true; M.slow = false;
  var o = opp(ctx), dir = s.dir || 1, myA = armorOf(s.armor || 1), oA = armorOf(row.armor);
  var myTip = tipOf(ctx.self, dir, 2, myA), oTip = o ? tipOf(o, -dir, 1, oA) : myTip;
  if (s.pass < SE.gamba.passes) {
    if ((g.qs || []).length < s.pass) g.qs = (g.qs || []).concat([0]); // no press this pass: it adds nothing
    var q = g.qs[s.pass - 1] || 0;
    s.gamba = g;
    sfx(ctx, SND.break, 1);
    M.myBroken = true; M.oppBroken = true;
    ctx.emit("fx", { position: myTip, script: SPLINTER }, aud);
    ctx.emit("fx", { position: oTip, script: SPLINTER }, aud);
    ctx.emit("hitstop", { duration: 0.05 }, aud);
    s.log = (s.log || []).concat([{ me: 0, opp: 0, uh: "", q: Math.round(q * 100) / 100 }]);
    say(ctx, "+" + (q * SE.gamba.barPerPass * 100).toFixed(2) + "%", "your chance " + pctOf(E.gambaChance(g.rider, g.qs)), q >= 0.95 ? "#ffe27a" : "#fff4d6");
  } else {
    var won = !!(g.result && g.result.status === "won"), loser = won ? "opp" : "me";
    M.fallen = loser; M.myBroken = won; M.oppBroken = !won;
    sfx(ctx, SND.clang, 1);
    ctx.emit("fx", { position: won ? myTip : oTip, script: SPLINTER }, aud);
    unhorse(ctx, loser === "me" ? ctx.self : o, loser === "me" ? dir : -dir, loser === "me" ? myA : oA);
    ctx.emit("hitstop", { duration: 0.12 }, aud);
    ctx.after(0.2, "fallSlow", {});
    ctx.emit("shockwave", { position: loser === "me" ? myTip : oTip, speed: 18, thickness: 1.2, intensity: 0.6 }, aud);
    ctx.emit("screenFlash", { color: "#fff6d8", duration: 0.25, intensity: 0.5 }, aud);
    ctx.after(0.3, "crowd", { clip: "crowdFall", vol: 1 });
    s.log = (s.log || []).concat([{ me: won ? 1 : 0, opp: won ? 0 : 1, uh: loser, q: (g.qs || [])[SE.gamba.passes - 1] || 0 }]);
    say(ctx, won ? "UNHORSED!! The House hits the dirt" : "The House unhorsed you!", "your chance was " + pctOf(E.gambaChance(g.rider, g.qs)), won ? "#ffe27a" : "#ff9a7a");
  }
  s.phase = "passEnd"; M.phaseAt = now;
}
export function gambaSettle(ctx) {
  var g = ctx.self.state.gamba;
  if (!g || !g.id || g.result || g.settling) return;
  var id = g.id, bonus = E.gambaBonus(g.qs);
  ctx.self.state.gamba = Object.assign({}, g, { settling: true });
  act(ctx, "gambaSettle", function () {
    return B.gambaSettle(ctx, id, bonus).then(function (r) {
      var st = ctx.self.state, cur = st.gamba, done = r && (r.status === "won" || r.status === "lost"), won = done && r.status === "won";
      if (cur && cur.id === id) st.gamba = Object.assign({}, cur, { settling: false }, done ? { result: { status: r.status, chance: r.chance, amount: r.amount } } : {});
      if (!done || (st.mode === "gamba" && ["ready", "charge", "passEnd"].indexOf(st.phase) >= 0)) return null; // the third pass's clash shows it
      // a bet settled after its bout (the draw came late, or on a later visit): the card and a toast say how it went
      if (st.phase === "end" && st.bout && st.bout.gamba && st.bout.pending) st.bout = Object.assign({}, st.bout, { pending: false, win: won, chance: r.chance, payout: won ? r.amount * SE.gamba.payout : 0 });
      if (st.gamba && st.gamba.id === id) st.gamba = null;
      return won ? "Your last bet won: +" + E.fmt(r.amount * SE.gamba.payout) + " HORSKE" : "The house won your last bet (" + E.fmt(r.amount) + " HORSKE)";
    }, function (e) { var cur = ctx.self.state.gamba; if (cur && cur.id === id) ctx.self.state.gamba = Object.assign({}, cur, { settling: false }); throw e; });
  }, true); // the draw is never dropped for a busy bank
}
function endGamba(ctx, row) {
  var s = ctx.self.state, g = s.gamba || {}, res = g.result || null, won = !!(res && res.status === "won");
  s.bout = { gamba: true, win: won, pending: !res, amount: g.amount || 0, rider: g.rider, chance: res ? res.chance : E.gambaChance(g.rider, g.qs), payout: won ? (g.amount || 0) * SE.gamba.payout : 0, rival: row.name, xp: 0 };
  if (res) s.gamba = null; // settled: nothing left to send (an unsettled bet stays, and is sent again on the next visit)
  s.phase = "end"; M.phaseAt = ctx.now();
  if (won) { M.pose = 5; M.poseUntil = ctx.now() + 3500; sfx(ctx, SND.crowdWin, 0.9); }
  else if (res) sfx(ctx, SND.crowdWin, 0.6);
}

function unhorse(ctx, body, facing, arm) {
  if (!body) return;
  var p = body.feetPosition;
  var id = ctx.spawn({ physics: "none", lifetime: 7, scope: "session", audience: "local", feetPosition: { x: p.x, y: p.y + 0.9, z: body.feetPosition.z + 0.1 },
    sprite: { texture: arm.sheet, uvRect: uv(7, arm.rows), size: [dimsOf(arm).size[0] * 0.92, dimsOf(arm).size[1] * 0.92], anchor: [facing < 0 ? 1 - dimsOf(arm).ax : dimsOf(arm).ax, 0.35], flipX: facing < 0, upright: false, sortingLayer: 13 } });
  var land = { x: p.x - facing * 3.4, y: 0.05 };
  animate(ctx, id, { "feetPosition.x": [p.x, p.x - facing * 1.8, land.x], "feetPosition.y": [p.y + 0.9, p.y + 3.4, 0.4] }, { duration: 1.0, easing: "easeOutQuad" });
  animate(ctx, id, { "rotation.roll": [0, facing * 160, facing * 250] }, { duration: 1.0 });
  ctx.after(1.0, "onRiderLanded", { x: land.x, y: 0.2 });
}

export function crowd(ctx, p) { if (p && SND[p.clip]) sfx(ctx, SND[p.clip], p.vol); } // the crowd's cheer or roar, a beat after the clash
export function fallSlow(ctx) { ctx.emit("slowMo", { scale: 0.3, duration: 1.1 }, { audience: { player: ctx.self.id } }); }

export function onRiderLanded(ctx, at) {
  ctx.emit("fx", { position: { x: at.x, y: 0.2, z: 3 }, script: THUD }, { audience: { player: ctx.self.id } });
  ctx.emit("screenShake", { intensity: 0.5, duration: 0.3 }, { audience: { player: ctx.self.id } });
}

function endBout(ctx) {
  var s = ctx.self.state, row = oppRow();
  if (row.gamba) return endGamba(ctx, row);
  var win = M.fallen === "opp" || (M.fallen !== "me" && s.myPts > s.oppPts);
  var draw = !M.fallen && s.myPts === s.oppPts;
  var X = J.xp, xp, ranked = !!row.ranked, lv = M.econ ? E.levelFor : levelFor;
  if (ranked) xp = 0; // a ranked bout moves only Elo: no XP, no drop
  else if (win) xp = X.winBase + X.winPerRank * (s.opp || 0) + (M.fallen === "opp" ? X.unhorse : 0) + X.perPoint * s.myPts;
  else xp = X.loss + X.perPoint * s.myPts;
  var before = lv(s.xp);
  s.xp = (s.xp || 0) + xp;
  var after = lv(s.xp);
  s.level = after;
  var unlocks = [];
  if (after > before) {
    if (M.econ) J.armors.forEach(function (g) { var u = E.unlockLevel(g.tier); if (u > before && u <= after) unlocks.push(g.name); }); // the season: set N opens at level 2N-2
    else {
      J.armors.forEach(function (g) { if (g.level > before && g.level <= after) unlocks.push(g.name); });
      J.lances.forEach(function (g) { if (g.level > before && g.level <= after) unlocks.push(g.name); });
    }
  }
  var newRival = null, nextAt = null, drop = 0, elo = null;
  if (!ranked && win && (s.opp || 0) >= (s.beaten || 0) && (s.beaten || 0) < J.opponents.length) {
    s.beaten = Math.min(J.opponents.length, (s.opp || 0) + 1); // a win over a harder rival counts the ladder up to him (in the season only bosses of your level ride)
    if (s.beaten < J.opponents.length) {
      if (!M.econ || E.bossOpen(s.beaten, after)) { newRival = J.opponents[s.beaten].name; s.oppPick = s.beaten; }
      else nextAt = { name: J.opponents[s.beaten].name, level: E.bossLevel(s.beaten) }; // the next boss waits for your level
    }
  }
  if (M.econ && !ranked && win) { // the season: a boss may drop a set, bound to your account until you mint it
    drop = E.dropFor(s.opp || 0, !!(s.econ && s.econ.pass), ctx.random(), ctx.random());
    if (drop) s.items = (s.items || []).concat([{ id: "i" + ctx.now() + "-" + Math.floor(ctx.random() * 1e6), tier: drop }]);
  }
  if (M.econ && ranked) { // Elo moves on this machine's word; scripts/bank.js writes both knights' rows from a timer hook (SQL runs on events, never per tick)
    var me = (s.econ && s.econ.ranked) || { elo: SE.ranked.start, games: 0 };
    var d = E.eloDelta(me.elo, row.elo, win ? 1 : draw ? 0.5 : 0, me.games); // a draw is half a win
    elo = { delta: d.me, before: me.elo, after: Math.max(100, me.elo + d.me) };
    s.rankedPending = { S: (s.econ && s.econ.season) || 1, day: E.dayOf(ctx.now()), oppId: row.id, won: win, dMe: d.me, dOpp: row.bot ? 0 : d.them,
      tier: s.armor || 1, level: E.levelFor(s.xp), qs: (s.log || []).map(function (p) { return p.q || 0; }) };
    ctx.after(0.05, "rankedReport", {});
    s.ranked = { opp: null };
  }
  if (win) s.wins = (s.wins || 0) + 1;
  s.bout = { win: win, draw: draw, xp: xp, levelUp: after > before ? after : 0, unlocks: unlocks, rival: row.name, newRival: newRival, nextAt: nextAt, champion: !ranked && win && (s.opp || 0) === J.opponents.length - 1, drop: drop, ranked: ranked, elo: elo };
  s.phase = "end"; M.phaseAt = ctx.now();
  var aud = { audience: { player: ctx.self.id } };
  if (win) {
    M.pose = 5; M.poseUntil = ctx.now() + 3500;
    sfx(ctx, SND.crowdWin, 0.9); // the crowd shouts and claps for a win (Kazuo's pick); no fanfare
    ctx.emit("stat", { name: "wins" }, aud);
  } else if (!draw) sfx(ctx, SND.crowdWin, 0.6); // and for the rival who won, softer
  if (after > before) ctx.emit("milestone", { step: after, name: "level " + after }, aud);
}

export function update(ctx, dt) {
  if (!ctx.self.isLocal) return;
  var s = ctx.self.state, now = ctx.now();
  if (now - (ctx.session.preAt || 0) > 400) { ctx.session.preAt = now; followPreloads(ctx); }
  if (!ctx.session.joust || !M) { // a fresh visit: the lists reset, the save (xp, gear, ladder) stays
    ctx.session.joust = true;
    M = { speed: 0, oppSpeed: 0, aim: 0, aimAxis: 0, frameT: 0, oppFrameT: 0, oppIdx: Math.min(s.oppPick || 0, J.opponents.length - 1) };
    M.econ = E.econOn(ctx); // the season (test mode) in this room?
    s.econOn = M.econ; s.isAdmin = M.econ && E.isAdmin(ctx.self.userId); s.tools = M.econ && E.testTools(ctx.self.userId);
    if (s.xp == null) s.xp = 0;
    if (M.econ) {
      if (!s.fake) s.fake = { ronkeverse: 0, oneOfOne: 0, colored: 0 };
      if (s.gamba && s.gamba.settling) s.gamba = Object.assign({}, s.gamba, { settling: false }); // the old page's draw died with it
      if (s.gamba && s.gamba.id && !s.gamba.result && (s.gamba.qs || []).length >= SE.gamba.passes) ctx.after(0.5, "gambaSettle", {}); // a bet whose bar is done: the bank draws it now
      if (!s.armor || !owns(s, s.armor) || E.unlockLevel(s.armor) > E.levelFor(s.xp)) s.armor = 1;
      s.lance = s.armor; s.level = E.levelFor(s.xp); s.busy = null; s.ranked = s.ranked || { opp: null };
    } else {
      if (!s.armor || armorOf(s.armor).level > levelFor(s.xp)) s.armor = 1;
      if (!s.lance || lanceOf(s.lance).level > levelFor(s.xp)) s.lance = 1;
      s.level = levelFor(s.xp);
    }
    M.f = null; // the rider sprite (size, sheet, anchor) repaints on the next tick
    (ctx.self.children || []).forEach(function (c) { if (c && /\\/pose-/.test(c.id)) ctx.destroy(c.id); }); // poses from before the joust went private were shared with the room
    if (ctx.self.fx) ctx.self.fx = null; // and so was the dust on the body
    M.lanceId = ensureLance(ctx, ctx.self.id, s.lance, null);
    M.oppLance = null; M.oppId = null;
    try { if (ctx.getObject("rival-" + ctx.self.id)) ctx.destroy("rival-" + ctx.self.id); } catch (e) {} // the old-spelled rival from before plain ids
    if (M.econ && s.rankedPending) ctx.after(0.5, "rankedReport", {}); // a ranked result that had not reached the bank yet
    if (resumeBout(ctx)) { if (M.econ && s.econ) ctx.after(0.1, "syncBank", {}); } // a fresh wallet and season under the resumed bout
    else enterArmory(ctx);
  }
  if (M.econ && s.econ && s.econ.season && (s.season !== s.econ.season || (s.epoch || 0) !== (SE.epoch || 0))) seasonReset(ctx); // a new season or a fresh start: level, sets, forge and ladder start over
  if (M.econ && s.today !== E.dayOf(now)) s.today = E.dayOf(now); // the day the free bouts count in, on this clock, for the HUD (it cannot read ctx.now())
  if (s.toast && now - (s.toast.at || 0) > 6000) s.toast = null; // a bank's answer shows once: gone before the lobby can open again and replay it
  if (M.econ && s.phase === "armory" && (s.armor || 1) !== 1 && !owns(s, s.armor)) { s.armor = 1; s.lance = 1; preloadSet(ctx, 1); } // a set you sold or melted (or never minted) comes off
  if (s.startPending && (s.phase === "armory" || s.phase === "end")) { var mode = s.startPending; s.startPending = false; if (mode === "ranked") { if (s.ranked && s.ranked.opp) startBout(ctx, true); } else if (mode === "gamba") { if (s.gamba && s.gamba.id) startBout(ctx, "gamba"); } else startBout(ctx); } // a bout paid for, a ranked rival found or a bet placed, in a SQL hook, starts here
  var o = opp(ctx) || ensureOpp(ctx);
  var dir = s.dir || 1, row = oppRow();
  var myA = armorOf(s.armor || 1), oA = rivalLook(row, myA); // the rival rides as your mirror: the same Ronke, the same set (his stats still come from his row); a ghost wears his own
  var gap = o ? dir * (o.feetPosition.x - ctx.self.feetPosition.x) : 99;

  // phases
  if (s.phase === "ready" && now - M.phaseAt > 1800) goCharge(ctx);
  // Gamba's third pass decides (Santa): your press, or its timer running out, closes the bar and the bank draws at once
  if (row.gamba && s.pass >= SE.gamba.passes && (s.phase === "ready" || s.phase === "charge") && s.gamba && s.gamba.id && !s.gamba.result && (M.struck || (s.bar && s.bar.by && now > s.bar.by)) && M.gsAsked !== s.gamba.id) {
    M.gsAsked = s.gamba.id;
    if ((s.gamba.qs || []).length < SE.gamba.passes) s.gamba = Object.assign({}, s.gamba, { qs: (s.gamba.qs || []).concat([Math.round((M.struck ? M.struck.q : 0) * 100) / 100]) });
    ctx.after(0.01, "gambaSettle", {});
  }
  // and its clash waits for the draw (asked for at your press, so this is rare)
  var gwait = !!row.gamba && s.phase === "charge" && s.pass >= SE.gamba.passes && !(s.gamba && s.gamba.result) && !M.resolved && gap <= S.late + 1.5;
  if (gwait && !M.gwaitAt) M.gwaitAt = now; else if (!gwait) M.gwaitAt = 0;
  if (gwait && now - M.gwaitAt > 12000) { gwait = false; M.resolved = true; s.phase = "passEnd"; M.phaseAt = now; } // the draw did not come: the bout ends unsettled and the next visit sends it again
  if (s.autoSkip && (s.phase === "ready" || s.phase === "charge") && !M.resolved && !M.cut && gap > 13.5 &&
      !(row.gamba && s.pass >= SE.gamba.passes) && !!M.struck) { cutToClash(ctx, o, dir, row); gap = 13; } // SKIP on: from your press straight to the contact (never Gamba's deciding pass)
  if (s.phase === "charge") {
    M.slow = !M.resolved && gap < 12;
    if (!M.resolved && gap <= S.late && !gwait) resolvePass(ctx);
  } else M.slow = false;
  // SKIP on (Santa): after a hit the next pass starts as soon as its words leave the screen (with SKIP on the banner
  // runs 1.85 s: Santa asked for 0.5 s, then 0.25 s more, off the 2.6 s), not when the horses reach the ends; a bout that
  // is over keeps its whole ending
  if (s.phase === "passEnd" && s.autoSkip && now - M.phaseAt > 1850 && !boutOver(s, M.fallen)) { jumpPast(ctx, null); dir = s.dir || 1; }
  else if (s.phase === "passEnd" && now - M.phaseAt > 2600) {
    var myDone = dir * ctx.self.feetPosition.x >= T.start - 0.3 || M.fallen === "me";
    var oDone = !o || -dir * o.feetPosition.x >= T.start - 0.3 || M.fallen === "opp";
    if ((myDone && oDone) || now - M.phaseAt > 8000) {
      var NP = M.econ ? SE.passes : J.passes, MP = M.econ ? SE.maxPasses : J.maxPasses; // the season: 3 passes, a tie goes on to 5
      var over = row.gamba ? !!M.fallen || s.pass >= SE.gamba.passes : M.fallen || ((s.pass >= NP) && s.myPts !== s.oppPts) || s.pass >= MP; // Gamba: the third pass decides
      if (over) endBout(ctx);
      else { s.pass += 1; s.dir = -dir; dir = -dir; enterReady(ctx); }
    }
  }

  // speeds
  var ts = M.slow ? 0.35 : 1;
  if (s.phase === "charge" && !M.resolved) {
    M.speed = Math.min(G.max * A.run, Math.max(G.min, M.speed + 6 * dt)); // the horse runs on its own
    var target = row.speed * G.max;
    M.oppSpeed = Math.min(target, M.oppSpeed + 4.5 * dt);
  } else if (s.phase === "passEnd" || (s.phase === "end" && (M.speed > 0 || M.oppSpeed > 0))) {
    var myLeft = T.end - dir * ctx.self.feetPosition.x, oLeft = o ? T.end + dir * o.feetPosition.x : 0;
    M.speed = myLeft > 0.2 ? Math.max(M.fallen === "me" ? 6 : 2.5, Math.min(M.speed, myLeft * 1.2)) : 0;
    M.oppSpeed = oLeft > 0.2 ? Math.max(M.fallen === "opp" ? 6 : 2.5, Math.min(M.oppSpeed, oLeft * 1.2)) : 0;
  } else { M.speed = 0; M.oppSpeed = 0; }
  if (gwait) { M.speed = 0; M.oppSpeed = 0; } // held at the clash until the draw lands

  // aim: the held axis plus a wobble that grows with speed
  var t = now / 1000, spd01 = M.speed / G.max;
  var wob = (Math.sin(t * 5.3) * 0.22 + Math.sin(t * 8.7 + 1) * 0.1) * (0.3 + spd01);
  if (!M.resolved) M.aim = 0.2 + wob * 0.3;

  // move
  var v = ctx.self.velocity;
  ctx.self.velocity = { x: dir * M.speed * ts, y: (v.y || 0) + ctx.place.gravity.y * dt, z: 0 };
  if (o && M.oppSpeed > 0) { var op = o.feetPosition; o.feetPosition = { x: op.x - dir * M.oppSpeed * ts * dt, y: 0, z: L.oppZ }; }

  // frames
  M.frameT += dt * ts * (M.speed < 0.3 ? 0 : 2 + M.speed * 1.25); // hooves beat faster the faster he rides
  M.oppFrameT += dt * ts * (M.oppSpeed < 0.3 ? 0 : 2 + M.oppSpeed * 1.25);
  var couched = s.phase === "charge" && gap < 14;
  function pick(speed, ft, pose, poseUntil, fallen, arm) {
    if (fallen && speed < 0.3 && J.riderless && J.riderless.idle) return HORSE_IDLE;
    if (fallen) return J.riderless ? HORSE + (((ft * 1.4) | 0) % (rlOf(arm).frames || 4)) : 6;
    if (pose != null && now < poseUntil) return pose;
    if (speed < 0.3) return arm && arm.idle ? IDLE : 0;
    if (couched && !M.resolved && !(arm && arm.gallop)) return 2; // a baked sheet's gallop already carries the couched lance: the legs keep running into the hit
    return arm && arm.gallop ? arm.gallop[((ft * 1.4) | 0) % arm.gallop.length] : (ft | 0) % 2;
  }
  var f = pick(M.speed, M.frameT, M.pose, M.poseUntil, M.fallen === "me", myA);
  if (s.phase === "end" && s.bout && s.bout.win && M.speed < 0.3) f = 5;
  var fo = pick(M.oppSpeed, M.oppFrameT, M.oppPose, M.oppPoseUntil, M.fallen === "opp", oA);
  if (s.phase === "end" && s.bout && !s.bout.win && !s.bout.draw && M.oppSpeed < 0.3 && M.fallen !== "opp") fo = 5;
  var myFlip = dir < 0, oFlip = dir > 0;
  // the gallop's lift: up as the legs stretch (frame 0), down as they gather (frame 1), a slow breath at rest
  function bobOf(speed, ft, frame) {
    if (frame === 6 || frame === 7) return 0;
    if (frame >= HORSE) return 0; // each painted cell already stands on its lowest hoof
    if (speed < 0.3) return Math.round(Math.sin(now / 1000 * 2.2) * 0.03 * 50) / 50;
    var ph = ft % 2, k = Math.sin(ph * Math.PI);
    return Math.round((ph < 1 ? 0.06 + 0.12 * k : 0.06 - 0.06 * Math.sin((ph - 1) * Math.PI)) * Math.min(1, speed / 4) * 50) / 50;
  }
  var bob = bobOf(M.speed, M.frameT, f), obob = bobOf(M.oppSpeed, M.oppFrameT, fo);
  var sp = ctx.self.sprite;
  if (M.myBroken && myA.brokenSheet) myA = Object.assign({}, myA, { sheet: myA.brokenSheet }, myA.idle ? { idle: Object.assign({}, myA.idle, { sheet: myA.idle.broken }) } : {}, myA.victory ? { victory: Object.assign({}, myA.victory, { sheet: myA.victory.broken }) } : {}); // the baked lance snaps with the pass
  if (o && M.oppBroken && oA.brokenSheet) oA = Object.assign({}, oA, { sheet: oA.brokenSheet }, oA.idle ? { idle: Object.assign({}, oA.idle, { sheet: oA.idle.broken }) } : {}, oA.victory ? { victory: Object.assign({}, oA.victory, { sheet: oA.victory.broken }) } : {});
  if (M.f !== f || M.flip !== myFlip || M.bob !== bob || sp.texture !== texOf(myA, f)) { M.f = f; M.flip = myFlip; M.bob = bob; showPose(ctx, ctx.self, riderSprite(sp, myA, f, myFlip, bob, SINK)); }
  if (o && (M.fo !== fo || M.oflip !== oFlip || M.obob !== obob || o.sprite.texture !== texOf(oA, fo))) { M.fo = fo; M.oflip = oFlip; M.obob = obob; showPose(ctx, o, riderSprite(o.sprite, oA, fo, oFlip, obob, OSINK)); }
  // dust riders
  var dustMe = M.speed > 2.2 && M.fallen !== "never";
  if (M.dustMe !== dustMe) { M.dustMe = dustMe; var du = myDust(ctx); if (du) du.fx = dustMe ? { script: DUST } : null; }
  var dustO = M.oppSpeed > 2.2;
  if (o && M.dustO !== dustO) { M.dustO = dustO; o.fx = dustO ? { script: DUST } : null; }

  // lances: upright at rest, couched on the charge, aimed by the axis
  var myDeg = f === 5 ? 86 : f === 4 ? 38 : couched ? M.aim * 12 : s.phase === "charge" ? 18 : s.phase === "passEnd" ? 22 : 72;
  if (M.fallen === "me") myDeg = -90;
  M.myDeg = M.myDeg == null ? myDeg : M.myDeg + (myDeg - M.myDeg) * Math.min(1, dt * 14);
  if (M.lanceId) {
    var lm = ctx.getObject(M.lanceId);
    if (lm) lm.visible = M.fallen !== "me" && !myA.baked;
    setLance(ctx, M.lanceId, dir, M.myDeg, f, (myA.gallop ? 0 : bob) - SINK, M.myBroken, s.lance || 1, null, myA.fist, myA.baked || M.fallen === "me" || f === 6 || f === 7 || f >= HORSE, myA);
  }
  var oDeg = fo === 5 ? 86 : fo === 4 ? 38 : s.phase === "charge" && couched ? (M.aiZone === "helmet" ? 10 : M.aiZone === "chest" ? -5 : 1) : s.phase === "charge" ? 18 : s.phase === "passEnd" ? 22 : 72;
  M.oDeg = M.oDeg == null ? oDeg : M.oDeg + (oDeg - M.oDeg) * Math.min(1, dt * 14);
  if (M.oppLance) {
    var lo = ctx.getObject(M.oppLance);
    if (lo) lo.visible = M.fallen !== "opp" && !oA.baked;
    setLance(ctx, M.oppLance, -dir, M.oDeg, fo, (oA.gallop ? 0 : obob) - OSINK, M.oppBroken, row.lance, row.color, oA.fist, oA.baked || M.fallen === "opp" || fo === 6 || fo === 7 || fo >= HORSE, oA);
  }

  // what the HUD reads, rounded so it only repaints when it moves
  var hud = { spd: Math.round(M.speed * 10) / 10, aim: Math.round(M.aim * 20) / 20, gap: Math.round(gap * 10) / 10, slow: !!M.slow, beat: M.beat && now - M.beatAt < 400 ? M.beat : "", oppX: o ? Math.round(o.feetPosition.x * 10) / 10 : 0 };
  if (JSON.stringify(s.hud) !== JSON.stringify(hud)) s.hud = hud;
}
`,UM=`/* The web version's HUD layer over the world's scripts/ui.js (which stays as Spawn has it).\r
   Rafael, 16/10/2026: "agora o menu é a cidade". The village (/realm/) is the menu: the Lists open the betting panel\r
   (?door=bet), the Tavern and the Market the site's modal (?modal); the other panes of the season lobby wait (17/10) and\r
   open on the dev server only (?door=<view>). The lobby's own HOME screen and its bottom nav bar give way to the village,\r
   and each pane's "‹ HOME" goes back to it (src/main.js turns econTab('home') into the trip home). */\r
#lobby .home { display: none !important; }\r
#lobby .act.nav { display: none !important; }\r
#lobby .phead .back { font-size: 0 !important; }\r
#lobby .phead .back::after { content: "‹ KINGDOM"; font-size: 12px; letter-spacing: .1em; }\r
/* the world's own fps meter (ui.js onMount) is a test-room tool: hidden unless the URL asks for ?meter */\r
html:not(.meter) #tome-game-mount > div { display: none !important; }\r
/* the JOUST! button belongs to the lists: it shows on the rivals pane only */\r
#lobby #ev-armory:checked ~ .act.pve, #lobby #ev-forge:checked ~ .act.pve, #lobby #ev-market:checked ~ .act.pve,\r
#lobby #ev-season:checked ~ .act.pve, #lobby #ev-gamba:checked ~ .act.pve, #lobby #ev-ranked:checked ~ .act.pve { display: none !important; }\r
/* ?door=bet, the Lists: the betting panel alone with its board (Rafael, 16/10: "aqui a gente vai ter só o gamba por\r
   enquanto. nem precisa dizer gamba nem nada", "o leaderboard do gamba pode ficar dentro do proprio gamba"). The site\r
   draws the panel and the result card (src/bet/bet.js) on the world's data; the world's lobby and result card are not\r
   drawn */\r
html.only-bet #lobby, html.only-bet #hud .endc, html.only-bet #hud .toast.endt { display: none !important; }\r
/* the bout's callouts in the site's medieval face, thick: the centre message (PASS, CHARGE!, +0.54% / your chance …,\r
   UNHORSED!!) and the grade over the bar (PERFECT! 100%, MISS 54%). The world writes them in Georgia, which a phone\r
   without Georgia draws in its own thin serif (Rafael, 16/10: "essa fonte parecia melhor no jogo original, mas acho que\r
   poderia ser uma fonte mais grossa, como é nossa fonte medieval com numeros?") */\r
#hud [id^="msg"], #hud [id^="gr"] { font-family: "Grenze Gotisch", Georgia, serif !important; font-weight: 900 !important; letter-spacing: .02em; }\r
#hud [id^="msg"] > div + div { font-weight: 700; }\r
/* the grade's percentage at the word's own size (the world sets it at 24 px beside a 42 px word; Rafael, 16/10: "pq o\r
   96% é minusculo?", "eu quero os numeros no mesmo tamanho do texto") */\r
#hud [id^="gr"] > span { font-size: 1em !important; }\r
/* ?modal: the village's modal (src/modal/modal.js draws it): no scene, no world HUD, and a see-through page so the\r
   village shows behind the modal's own backdrop */\r
html.modal, html.modal body { background: transparent !important; }\r
html.modal #view, html.modal #tome-ui-container { display: none !important; }\r
\r
/* 17/10: the aim bar and its timer in the betting board's wood (Rafael: "gostei do estilo madeira\r
   que voce criou. não consegue me mostrar como ficaria nossa barra com esse estilo que voce fez pro menu?"; on the first\r
   try, a thin flat frame: "achei que não ficou bonito igual ao menu"). The header's dark wood, a frame thick enough to\r
   read as a plank, the gold bevel and gold nails, and the hint in\r
   the menu title's gold; no corner pieces ("tira esses negócios que tu botou do timer e da barra") */\r
html.hud-wood #hud .gauge .gbar, html.hud-wood #hud .gauge .tapt {\r
  /* the menu's own finish (src/bet/bet.css .bpanel): its wood at its scale, its gold bevel, its loose drop shadow and\r
     its darkened edges, scaled to a bar an eighth of the board's height ("eu queria que a madeira tivesse o estilo\r
     exato do menu, ja que estão na mesma janela") */\r
  background: #42250f url(art/ui/wood-dark.webp) 0 0 / 700px auto repeat !important;\r
  border-radius: 9px !important;\r
  box-shadow: 0 0 0 1px #452600, 0 0 0 2px #926e3d, 0 0 0 3px #d6b37f, 0 0 0 4px #a1805a, 0 0 0 6px #1d130b, 0 12px 22px rgba(0, 0, 0, .5), inset 0 0 16px rgba(0, 0, 0, .45) !important;\r
}\r
html.hud-wood #hud .gauge .gbar { padding: 14px 34px !important; }\r
html.hud-wood #hud .gauge .tapt { padding: 9px !important; }\r
/* rounder, as the menu's cards and buttons (Rafael, 17/10: "acho que tudo pode ter borda mais arredondada aqui também"):\r
   the track and its marks and the timer's face; the target's stripes keep square ends ("isso pode ficar reto"); not\r
   too round either ("achei muito arredondado"): 9 px outside, 5 px inside. The\r
   crest and the arrow reach past the track, so it is rounded, not clipped */\r
html.hud-wood #hud .gauge .gbar > div:nth-child(3), html.hud-wood #hud .gauge .gbar > div:nth-child(3) > div:nth-child(1) { border-radius: 5px !important; }\r
html.hud-wood #hud .gauge .tapt > div { border-radius: 5px !important; }\r
html.hud-wood #hud .gauge .gbar > div:nth-child(-n+2) { width: 11px !important; height: 11px !important; margin-top: -5px !important;\r
  background: radial-gradient(circle at 35% 35%, #fff1b8, #e0a91f 55%, #7a520c) !important; box-shadow: 0 0 0 1.5px #1d130b, 0 1px 0 1.5px rgba(0, 0, 0, .4); }\r
html.hud-wood #hud .gauge .gbar > div:nth-child(1) { left: 12px !important; }\r
html.hud-wood #hud .gauge .gbar > div:nth-child(2) { right: 12px !important; }\r
html.hud-wood #hud .gauge .tip { font-family: "Grenze Gotisch", Georgia, serif !important; font-weight: 900; color: #fff3d6;\r
  -webkit-text-stroke: 1.5px #1d130b; paint-order: stroke fill; text-shadow: 0 3px 0 #1d130b !important; }\r
html.hud-wood #hud .gauge .tip span[style*="gold"] { color: #f0bd45 !important; }\r
/* the bar's phone layout (ui.js's own block: the timer above the bar's right end, the hint kept clear of it): a thinner\r
   frame than on a wide screen, and room for the timer's gold ring beside the hint */\r
@media (max-width:640px) and (min-height:520px),(orientation:portrait){\r
  html.hud-wood #hud .gauge .gbar { padding: 10px 24px !important; }\r
  html.hud-wood #hud .gauge .tapt { padding: 6px !important; }\r
  html.hud-wood #hud .gauge > div:first-child { padding-right: 92px !important; }\r
}\r
/* the bout's other two blue pieces in the same wood (Rafael, 17/10: "tem que fazer esses 2 azuis em madeira tambem igual\r
   ao menu"): the scoreboard at the top (ui.js #arm.sb, and the pass-strength pill #armps) and SKIP while it is off (on,\r
   it stays gold, as the board's chosen tabs). The timer stays solid after the tap: the world fades it to .75 to say it\r
   stopped ("timer ta ficando transparente depois do tap"), and on dark wood that read as a hole; its number stops */\r
html.hud-wood #hud #arm.sb .wood { background: none !important; box-shadow: none !important; padding: 0 !important; }\r
html.hud-wood #hud #arm.sb .pan, html.hud-wood #hud #armps .pan, html.hud-wood #hud .skipb[style*="#1d3778"] {\r
  background: #42250f url(art/ui/wood-dark.webp) 0 0 / 700px auto repeat !important;\r
  border-radius: 9px !important;\r
  box-shadow: 0 0 0 1px #452600, 0 0 0 2px #926e3d, 0 0 0 3px #d6b37f, 0 0 0 4px #a1805a, 0 0 0 6px #1d130b, 0 12px 22px rgba(0, 0, 0, .5), inset 0 0 16px rgba(0, 0, 0, .45) !important;\r
}\r
html.hud-wood #hud .skipb[style*="#1d3778"] { color: #f0bd45 !important; }\r
html.hud-wood #hud .gauge .tapt { opacity: 1 !important; }\r
/* and the board's letters (src/bet/bet.css; Rafael, 17/10: "e nao tem que mudar as fontes também?"): Gelasio for the\r
   labels and SKIP, the medieval face with its dark outline for the big numbers (your chance, the points). The timer\r
   keeps its plain even digits, chosen in the world to be read at a glance */\r
html.hud-wood #hud #arm.sb, html.hud-wood #hud #armps, html.hud-wood #hud .skipb { font-family: Gelasio, Georgia, "Times New Roman", serif !important; }\r
html.hud-wood #hud #arm.sb [id^="gc"], html.hud-wood #hud #arm.sb [id^="mp"], html.hud-wood #hud #arm.sb [id^="op"] {\r
  font-family: "Grenze Gotisch", Georgia, serif !important; font-weight: 900 !important;\r
  -webkit-text-stroke: 1.5px #1d130b; paint-order: stroke fill; text-shadow: 0 3px 0 #1d130b !important;\r
}\r
`,Ss=Object.assign({"/world/scripts/arrival.js":()=>Ie(()=>import("./arrival-BfZeGHHz.js"),__vite__mapDeps([0,1,2])),"/world/scripts/bank.js":()=>Ie(()=>import("./bank-B0gRk3-x.js"),__vite__mapDeps([1,2])),"/world/scripts/camera.js":()=>Ie(()=>import("./camera-CFdr3yOD.js"),[]),"/world/scripts/db.js":()=>Ie(()=>import("./db-HsvaXaUn.js"),__vite__mapDeps([3,2])),"/world/scripts/ground.js":()=>Ie(()=>import("./ground-b0nUTt3G.js"),[]),"/world/scripts/joust-camera.js":()=>Ie(()=>import("./joust-camera-Fg9LmHPp.js"),[]),"/world/scripts/jouster.js":()=>Ie(()=>import("./jouster-BIrWR_i-.js"),__vite__mapDeps([4,5,1,2,6])),"/world/scripts/lib/color.js":()=>Ie(()=>import("./color-DDSg_o2D.js"),[]),"/world/scripts/lib/econ.js":()=>Ie(()=>Promise.resolve().then(()=>Xc),void 0),"/world/scripts/look-default.js":()=>Ie(()=>import("./look-default-BibdNaYP.js"),[]),"/world/scripts/player.js":()=>Ie(()=>import("./player-CqzJShkt.js"),__vite__mapDeps([7,8,9,10])),"/world/scripts/tex-hero.js":()=>Ie(()=>import("./tex-hero-D9FSdSdV.js"),__vite__mapDeps([9,8,10])),"/world/scripts/tex-lance.js":()=>Ie(()=>import("./tex-lance-h9_Q8DQT.js"),[]),"/world/scripts/tex-meadow.js":()=>Ie(()=>import("./tex-meadow-CQRPL3Pn.js"),__vite__mapDeps([11,8,10])),"/world/scripts/tex-sky.js":()=>Ie(()=>import("./tex-sky-H7hQEGu6.js"),__vite__mapDeps([12,8,10])),"/world/scripts/tex-soil.js":()=>Ie(()=>import("./tex-soil-6tL0S4Gb.js"),__vite__mapDeps([13,8,10])),"/world/scripts/tex-tilt.js":()=>Ie(()=>import("./tex-tilt-DATa2CU9.js"),[]),"/world/scripts/tileset-ground.js":()=>Ie(()=>import("./tileset-ground-dAb9Cutk.js"),__vite__mapDeps([14,8])),"/world/scripts/tileset-sand.js":()=>Ie(()=>import("./tileset-sand-D3oqsxai.js"),[]),"/world/scripts/ui.js":()=>Ie(()=>import("./ui-8iQP4AY0.js"),__vite__mapDeps([15,5,2]))}),kt=new URLSearchParams(location.search),FM=new Set(["rivals","ranked","gamba","armory","forge","market","season"]),BM="teste-justa",Dn=kt.has("modal"),jf={fight:"rivals",rankedFind:"ranked",gambaBet:"bet"},hc="justa-web:";function zM(i){if(i&&/^\/(?![/\\])/.test(i))try{const e=new URL(i,location.origin);if(e.origin===location.origin)return e.pathname+e.search+e.hash}catch{}return"/realm/?back=1"}function xr(i,e){try{if(e===void 0)return JSON.parse(localStorage.getItem(hc+i)??"null");localStorage.setItem(hc+i,JSON.stringify(e))}catch{return null}return e}function HM(){let i=xr("user");return(!i||kt.has("fresh"))&&(i="web_"+Array.from(crypto.getRandomValues(new Uint8Array(8)),e=>e.toString(16).padStart(2,"0")).join(""),xr("user",i),xr("state",{})),i}function GM(i=40){return new Promise(e=>{const t=[];let n=0;const s=r=>{n&&t.push(r-n),n=r,t.length<i?requestAnimationFrame(s):e(t.sort((a,o)=>a-o)[Math.floor(i/10)])};requestAnimationFrame(s)})}async function VM(){var Ve,ee,ue,Ee,ge,Fe,He,Qe,ye;const i=zM(kt.get("village"));if(!Dn&&kt.get("door")!=="bet"){location.replace(i);return}const e=GM(),t=await Jm(kt.get("place")??void 0,{web:!0}),n=new Set((kt.get("hide")??"").split(",").filter(Boolean));t.placements=t.placements.filter(te=>!n.has(te.id));const s=t.place.atmosphere??{},r=document.getElementById("stage"),a=(Ve=s.look)!=null&&Ve.script?await Ss["/world/"+s.look.script]():null,o=document.getElementById("view"),c=Number(kt.get("scale")),l=new Qb(o,{toneMapping:((ee=s.look)==null?void 0:ee.toneMapping)??"neutral",look:Nb(a,(ue=s.look)==null?void 0:ue.params),scale:c>0?c:null});((Ee=t.render)==null?void 0:Ee.placeSky)!==!1&&l.setSky(s.sky),e.then(te=>{te>0&&(l.refresh=Math.max(4,Math.min(l.refresh??te,te)))});const f=()=>l.resize(r.clientWidth,r.clientHeight);f(),addEventListener("resize",f);const h=Dn?[]:t.placements.filter(te=>{var Je;return(Je=te.sprite)==null?void 0:Je.texture});await Promise.all(h.map((te,Je)=>l.addSprite(te,Je)));const d=t.place.terrain;!Dn&&(d==null?void 0:d.kind)==="tilemap"&&d.draw!==!1&&!kt.has("notiles")&&await l.setTiles(d,await Ss["/world/"+d.generator]());const p=await Ew();Ss["/world/scripts/db.js"]&&await p.migrate((await Ss["/world/scripts/db.js"]()).migrate);const y=HM(),v=xr("state")??{},_=await US({db:p,userId:y});let m=!1;try{m=!!Ap().on}catch{}const R=_&&!m?OM({onFacts:te=>_.setFacts(te)}):null,b=new cw({roomId:BM,scripts:Ss,gravity:t.place.gravity,groundY:0,sql:te=>p.sqlFor(te)});b.worldToScreen=te=>l.worldToScreen(te);const S=await Cc(t.config.player),I=b.spawn("player/"+y,{...S,state:{...S.state??{},...v},userId:y,displayName:xr("name")??"Knight",isLocal:!0}),L=b.entities.get(I),C=new dw(t.config.inputs);Dn||C.bind(o),b.inputs.set(I,()=>C.frame());for(const te of((ge=t.config.engine)==null?void 0:ge.behaviors)??[]){const Je=await b.loadModule(te);await b.call(L,Je,"onArrive",ji(L))}const D=Dn?null:new _w(t.sounds);if(b.sinks.playSound=te=>D==null?void 0:D.play(te),D)for(const te of t.placements)(Fe=te.audio)!=null&&Fe.clip&&D.loop(te.audio);const E=document.getElementById("flash");b.sinks.screenFlash=te=>{E.style.transition="none",E.style.background=(te==null?void 0:te.color)??"#fff",E.style.opacity=String((te==null?void 0:te.intensity)??.4),requestAnimationFrame(()=>{E.style.transition=`opacity ${((te==null?void 0:te.duration)??.2)*1e3}ms ease-out`,E.style.opacity="0"})};let w={until:0,amp:0};b.sinks.screenShake=te=>{w={until:performance.now()+((te==null?void 0:te.duration)??.3)*1e3,amp:((te==null?void 0:te.intensity)??.3)*.25}};const k=await rw(t.config,ji(L),{screenAspect:kt.get("aspect")==="real"}),U=await Ss["/world/"+(((He=t.config.ui)==null?void 0:He.render)??"scripts/ui.js")](),F=new gw({ui:U,room:b,player:L,input:C,toScreen:te=>l.worldToScreen(te)}),W=new hw(l,b,{hideBelow:((Qe=t.render)==null?void 0:Qe.hideBelowLayer)??null}),Z=Dn||kt.has("nofx")?null:new nS(l.scene,{mobile:matchMedia("(pointer: coarse)").matches,layers:(ye=t.render)==null?void 0:ye.fxLayers});Z&&(b.sinks.fx=te=>Z.oneShot(te),Z.prepare([...NM.matchAll(/`(fx\r?\n[\s\S]*?)`/g)].map(te=>te[1])));let K=b.elapsed;{document.head.insertAdjacentHTML("beforeend",`<style id="web-hud">${UM}</style>`),kt.has("meter")&&document.documentElement.classList.add("meter"),document.documentElement.classList.add("hud-wood");const te=window.econTab,Je=kt.get("door")==="bet";if(Je&&document.documentElement.classList.add("only-bet"),typeof te=="function"){const O=()=>Dn?parent.postMessage({type:"justa-close"},location.origin):location.assign(i);window.econTab=st=>st==="home"?O():Je&&st!=="gamba"?void 0:te(st),te(Je?"gamba":FM.has(kt.get("door"))?kt.get("door"):"rivals"),Je&&typeof window.gambaTab=="function"&&window.gambaTab("bet"),kt.get("door")==="gamba"&&["bet","stats","lb"].includes(kt.get("sub"))&&typeof window.gambaTab=="function"&&window.gambaTab(kt.get("sub"))}if(Je&&!Dn){const{startBet:O}=await Ie(async()=>{const{startBet:st}=await import("./bet-ZgB9l8Vk.js");return{startBet:st}},__vite__mapDeps([16,2,6,17,18]));O({room:b,player:L,village:i,quests:_})}if(Dn){globalThis.__gambaNoChainSettle=!0,document.documentElement.classList.add("modal");const{startModal:O}=await Ie(async()=>{const{startModal:Te}=await import("./modal-CxSFe5q1.js");return{startModal:Te}},__vite__mapDeps([19,2,5,17,6])),st=()=>parent.postMessage({type:"justa-close"},location.origin),tt=O({room:b,player:L,quests:_,facts:R,door:kt.get("door"),place:kt.get("building"),onClose:st});addEventListener("message",Te=>{const lt=Te.data;Te.origin!==location.origin||(lt==null?void 0:lt.type)!=="justa-door"||tt.open(lt.door,lt.place)});const Oe=window.sendAction;window.sendAction=(Te,...lt)=>jf[Te]?top.location.assign(`/realm/play/?door=${jf[Te]}`):Oe(Te,...lt),addEventListener("pageshow",Te=>{Te.persisted&&location.reload()})}}let ae="";const J=()=>{const te=JSON.stringify(L.state);if(te!==ae){ae=te;try{localStorage.setItem(hc+"state",te)}catch{}}};setInterval(J,2e3),addEventListener("pagehide",J);const fe=kt.has("prof")?{n:0,room:0,rig:0,views:0,stage:0,hud:0,frame:0}:null,me=(te,Je)=>{const O=performance.now();return fe&&(fe[te]+=O-Je),O};let Me=performance.now();function Re(te){const Je=Math.max(0,(te-Me)/1e3),O=Math.min(.1,Je);Me=te;let st=performance.now();const tt=st;if(b.advance(Je),st=me("room",st),Dn){requestAnimationFrame(Re);return}l.govern(te-(Re.prev??te)),Re.prev=te;const Oe=k.update(O,b.nowMs,l.aspect);te<w.until&&(Oe.x+=(Math.random()-.5)*w.amp,Oe.y+=(Math.random()-.5)*w.amp),st=me("rig",st),W.sync(),Z&&(Z.update((b.elapsed-K)/1e3,b),K=b.elapsed),st=me("views",st),l.frame(Oe,O),st=me("stage",st),F.frame(te),st=me("hud",st),fe&&(fe.frame+=st-tt,fe.n++),requestAnimationFrame(Re)}fe&&(window.__prof=fe),requestAnimationFrame(Re),window.__justa={world:t,stage:l,rig:k,room:b,player:L,hud:F,db:p,input:C,audio:D,quests:_},document.documentElement.classList.add("justa-ready"),Dn&&parent.postMessage({type:"justa-ready"},location.origin)}VM().catch(i=>{console.error(i),document.getElementById("fault").textContent=String((i==null?void 0:i.stack)??i)});export{uc as $,TS as A,yS as B,bS as C,oS as D,aS as E,Dd as F,vS as G,Od as H,fo as I,fM as J,cM as K,eE as L,Vd as M,YS as N,YM as O,eM as P,xn as Q,JM as R,ot as S,JS as T,$M as U,ZM as V,KM as W,yr as X,ZS as Y,QM as Z,Bf as _,Nd as a,Na as a0,cc as a1,zd as a2,XM as a3,AS as a4,wS as b,uS as c,Xi as d,iS as e,fS as f,kd as g,Id as h,Ld as i,hS as j,_S as k,rS as l,xS as m,pS as n,dS as o,SS as p,gS as q,mS as r,cS as s,sS as t,lS as u,Bd as v,Ud as w,ho as x,Fd as y,ES as z};

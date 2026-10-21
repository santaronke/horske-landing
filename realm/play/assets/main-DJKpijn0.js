const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/arrival-B096b78W.js","assets/bank-Clesp9nZ.js","assets/morphdom-esm-DUuvMkUq.js","assets/db-CYyGlf11.js","assets/jouster-Dt9SqpYW.js","assets/joust-2BfEs9QO.js","assets/chain-B9dRIyy0.js","assets/player-CqzJShkt.js","assets/meadow-DQnD2Hmd.js","assets/tex-hero-D9FSdSdV.js","assets/color-DDSg_o2D.js","assets/tex-meadow-CQRPL3Pn.js","assets/tex-sky-H7hQEGu6.js","assets/tex-soil-6tL0S4Gb.js","assets/tileset-ground-dAb9Cutk.js","assets/ui-CFGmGYL3.js","assets/bet-Bj_4ab-1.js","assets/houseQuests-Be0Scrd-.js","assets/view-B_w9TCd3.js","assets/modal-CzoVoBVK.js"])))=>i.map(i=>d[i]);
import{m as np}from"./morphdom-esm-DUuvMkUq.js";const ip="modulepreload",sp=function(i){return"/realm/play/"+i},Qc={},Ie=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(t.map(c=>{if(c=sp(c),c in Qc)return;Qc[c]=!0;const l=c.endsWith(".css"),f=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const h=document.createElement("link");if(h.rel=l?"stylesheet":ip,l||(h.as="script"),h.crossOrigin="",h.href=c,o&&h.setAttribute("nonce",o),document.head.appendChild(h),l)return new Promise((d,p)=>{h.addEventListener("load",d),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})},rp=`# name: the game's name: fill it once you know what this is. description: one line for the box art.
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
`,ap=`atmosphere:\r
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
`,op=`# spawn-scene v2 yaml objects\r
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
`,lp=`# spawn-scene v2 yaml x0z0\r
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
`,cp=`# The web version's own layer over the copied Spawn world. world/ stays an exact copy (npm run sync); what the web\r
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
`,oc=Symbol.for("yaml.alias"),ol=Symbol.for("yaml.document"),wi=Symbol.for("yaml.map"),Df=Symbol.for("yaml.pair"),Vn=Symbol.for("yaml.scalar"),qs=Symbol.for("yaml.seq"),Mn=Symbol.for("yaml.node.type"),Ji=i=>!!i&&typeof i=="object"&&i[Mn]===oc,Zi=i=>!!i&&typeof i=="object"&&i[Mn]===ol,js=i=>!!i&&typeof i=="object"&&i[Mn]===wi,St=i=>!!i&&typeof i=="object"&&i[Mn]===Df,xt=i=>!!i&&typeof i=="object"&&i[Mn]===Vn,Xs=i=>!!i&&typeof i=="object"&&i[Mn]===qs;function Tt(i){if(i&&typeof i=="object")switch(i[Mn]){case wi:case qs:return!0}return!1}function At(i){if(i&&typeof i=="object")switch(i[Mn]){case oc:case wi:case Vn:case qs:return!0}return!1}const Of=i=>(xt(i)||Tt(i))&&!!i.anchor,on=Symbol("break visit"),Nf=Symbol("skip children"),Gn=Symbol("remove node");function Qi(i,e){const t=kf(e);Zi(i)?Es(null,i.contents,t,Object.freeze([i]))===Gn&&(i.contents=null):Es(null,i,t,Object.freeze([]))}Qi.BREAK=on;Qi.SKIP=Nf;Qi.REMOVE=Gn;function Es(i,e,t,n){const s=Uf(i,e,t,n);if(At(s)||St(s))return Ff(i,n,s),Es(i,s,t,n);if(typeof s!="symbol"){if(Tt(e)){n=Object.freeze(n.concat(e));for(let r=0;r<e.items.length;++r){const a=Es(r,e.items[r],t,n);if(typeof a=="number")r=a-1;else{if(a===on)return on;a===Gn&&(e.items.splice(r,1),r-=1)}}}else if(St(e)){n=Object.freeze(n.concat(e));const r=Es("key",e.key,t,n);if(r===on)return on;r===Gn&&(e.key=null);const a=Es("value",e.value,t,n);if(a===on)return on;a===Gn&&(e.value=null)}}return s}async function Wa(i,e){const t=kf(e);Zi(i)?await Ts(null,i.contents,t,Object.freeze([i]))===Gn&&(i.contents=null):await Ts(null,i,t,Object.freeze([]))}Wa.BREAK=on;Wa.SKIP=Nf;Wa.REMOVE=Gn;async function Ts(i,e,t,n){const s=await Uf(i,e,t,n);if(At(s)||St(s))return Ff(i,n,s),Ts(i,s,t,n);if(typeof s!="symbol"){if(Tt(e)){n=Object.freeze(n.concat(e));for(let r=0;r<e.items.length;++r){const a=await Ts(r,e.items[r],t,n);if(typeof a=="number")r=a-1;else{if(a===on)return on;a===Gn&&(e.items.splice(r,1),r-=1)}}}else if(St(e)){n=Object.freeze(n.concat(e));const r=await Ts("key",e.key,t,n);if(r===on)return on;r===Gn&&(e.key=null);const a=await Ts("value",e.value,t,n);if(a===on)return on;a===Gn&&(e.value=null)}}return s}function kf(i){return typeof i=="object"&&(i.Collection||i.Node||i.Value)?Object.assign({Alias:i.Node,Map:i.Node,Scalar:i.Node,Seq:i.Node},i.Value&&{Map:i.Value,Scalar:i.Value,Seq:i.Value},i.Collection&&{Map:i.Collection,Seq:i.Collection},i):i}function Uf(i,e,t,n){var s,r,a,o,c;if(typeof t=="function")return t(i,e,n);if(js(e))return(s=t.Map)==null?void 0:s.call(t,i,e,n);if(Xs(e))return(r=t.Seq)==null?void 0:r.call(t,i,e,n);if(St(e))return(a=t.Pair)==null?void 0:a.call(t,i,e,n);if(xt(e))return(o=t.Scalar)==null?void 0:o.call(t,i,e,n);if(Ji(e))return(c=t.Alias)==null?void 0:c.call(t,i,e,n)}function Ff(i,e,t){const n=e[e.length-1];if(Tt(n))n.items[i]=t;else if(St(n))i==="key"?n.key=t:n.value=t;else if(Zi(n))n.contents=t;else{const s=Ji(n)?"alias":"scalar";throw new Error(`Cannot replace node with ${s} parent`)}}const up={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},fp=i=>i.replace(/[!,[\]{}]/g,e=>up[e]);class nn{constructor(e,t){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},nn.defaultYaml,e),this.tags=Object.assign({},nn.defaultTags,t)}clone(){const e=new nn(this.yaml,this.tags);return e.docStart=this.docStart,e}atDocument(){const e=new nn(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:nn.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},nn.defaultTags);break}return e}add(e,t){this.atNextDocument&&(this.yaml={explicit:nn.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},nn.defaultTags),this.atNextDocument=!1);const n=e.trim().split(/[ \t]+/),s=n.shift();switch(s){case"%TAG":{if(n.length!==2&&(t(0,"%TAG directive should contain exactly two parts"),n.length<2))return!1;const[r,a]=n;return this.tags[r]=a,!0}case"%YAML":{if(this.yaml.explicit=!0,n.length!==1)return t(0,"%YAML directive should contain exactly one part"),!1;const[r]=n;if(r==="1.1"||r==="1.2")return this.yaml.version=r,!0;{const a=/^\d+\.\d+$/.test(r);return t(6,`Unsupported YAML version ${r}`,a),!1}}default:return t(0,`Unknown directive ${s}`,!0),!1}}tagName(e,t){if(e==="!")return"!";if(e[0]!=="!")return t(`Not a valid tag: ${e}`),null;if(e[1]==="<"){const a=e.slice(2,-1);return a==="!"||a==="!!"?(t(`Verbatim tags aren't resolved, so ${e} is invalid.`),null):(e[e.length-1]!==">"&&t("Verbatim tags must end with a >"),a)}const[,n,s]=e.match(/^(.*!)([^!]*)$/s);s||t(`The ${e} tag has no suffix`);const r=this.tags[n];if(r)try{return r+decodeURIComponent(s)}catch(a){return t(String(a)),null}return n==="!"?e:(t(`Could not resolve tag: ${e}`),null)}tagString(e){for(const[t,n]of Object.entries(this.tags))if(e.startsWith(n))return t+fp(e.substring(n.length));return e[0]==="!"?e:`!<${e}>`}toString(e){const t=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],n=Object.entries(this.tags);let s;if(e&&n.length>0&&At(e.contents)){const r={};Qi(e.contents,(a,o)=>{At(o)&&o.tag&&(r[o.tag]=!0)}),s=Object.keys(r)}else s=[];for(const[r,a]of n)r==="!!"&&a==="tag:yaml.org,2002:"||(!e||s.some(o=>o.startsWith(a)))&&t.push(`%TAG ${r} ${a}`);return t.join(`
`)}}nn.defaultYaml={explicit:!1,version:"1.2"};nn.defaultTags={"!!":"tag:yaml.org,2002:"};function Bf(i){if(/[\x00-\x19\s,[\]{}]/.test(i)){const t=`Anchor must not contain whitespace or control characters: ${JSON.stringify(i)}`;throw new Error(t)}return!0}function zf(i){const e=new Set;return Qi(i,{Value(t,n){n.anchor&&e.add(n.anchor)}}),e}function Hf(i,e){for(let t=1;;++t){const n=`${i}${t}`;if(!e.has(n))return n}}function hp(i,e){const t=[],n=new Map;let s=null;return{onAnchor:r=>{t.push(r),s??(s=zf(i));const a=Hf(e,s);return s.add(a),a},setAnchors:()=>{for(const r of t){const a=n.get(r);if(typeof a=="object"&&a.anchor&&(xt(a.node)||Tt(a.node)))a.node.anchor=a.anchor;else{const o=new Error("Failed to resolve repeated object (this should not happen)");throw o.source=r,o}}},sourceObjects:n}}function As(i,e,t,n){if(n&&typeof n=="object")if(Array.isArray(n))for(let s=0,r=n.length;s<r;++s){const a=n[s],o=As(i,n,String(s),a);o===void 0?delete n[s]:o!==a&&(n[s]=o)}else if(n instanceof Map)for(const s of Array.from(n.keys())){const r=n.get(s),a=As(i,n,s,r);a===void 0?n.delete(s):a!==r&&n.set(s,a)}else if(n instanceof Set)for(const s of Array.from(n)){const r=As(i,n,s,s);r===void 0?n.delete(s):r!==s&&(n.delete(s),n.add(r))}else for(const[s,r]of Object.entries(n)){const a=As(i,n,s,r);a===void 0?delete n[s]:a!==r&&(n[s]=a)}return i.call(e,t,n)}function bn(i,e,t){if(Array.isArray(i))return i.map((n,s)=>bn(n,String(s),t));if(i&&typeof i.toJSON=="function"){if(!t||!Of(i))return i.toJSON(e,t);const n={aliasCount:0,count:1,res:void 0};t.anchors.set(i,n),t.onCreate=r=>{n.res=r,delete t.onCreate};const s=i.toJSON(e,t);return t.onCreate&&t.onCreate(s),s}return typeof i=="bigint"&&!(t!=null&&t.keep)?Number(i):i}class lc{constructor(e){Object.defineProperty(this,Mn,{value:e})}clone(){const e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:t,maxAliasCount:n,onAnchor:s,reviver:r}={}){if(!Zi(e))throw new TypeError("A document argument is required");const a={anchors:new Map,doc:e,keep:!0,mapAsMap:t===!0,mapKeyWarned:!1,maxAliasCount:typeof n=="number"?n:100},o=bn(this,"",a);if(typeof s=="function")for(const{count:c,res:l}of a.anchors.values())s(l,c);return typeof r=="function"?As(r,{"":o},"",o):o}}class qa extends lc{constructor(e){super(oc),this.source=e,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(e,t){if((t==null?void 0:t.maxAliasCount)===0)throw new ReferenceError("Alias resolution is disabled");let n;t!=null&&t.aliasResolveCache?n=t.aliasResolveCache:(n=[],Qi(e,{Node:(r,a)=>{(Ji(a)||Of(a))&&n.push(a)}}),t&&(t.aliasResolveCache=n));let s;for(const r of n){if(r===this)break;r.anchor===this.source&&(s=r)}if(s&&t){const{anchors:r,doc:a,maxAliasCount:o}=t;let c=r.get(s);if(c||(bn(s,null,t),c=r.get(s)),(c==null?void 0:c.res)===void 0){const l="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(l)}if(o>=0&&(c.count+=1,c.aliasCount===0&&(c.aliasCount=ya(a,s,r)),c.count*c.aliasCount>o)){const l="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(l)}}return s}toJSON(e,t){if(!t)return{source:this.source};const n=this.resolve(t.doc,t);if(!n){const s=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(s)}return t.anchors.get(n).res}toString(e,t,n){const s=`*${this.source}`;if(e){if(Bf(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){const r=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(r)}if(e.implicitKey)return`${s} `}return s}}function ya(i,e,t){if(Ji(e)){const n=e.resolve(i),s=t&&n&&t.get(n);return s?s.count*s.aliasCount:0}else if(Tt(e)){let n=0;for(const s of e.items){const r=ya(i,s,t);r>n&&(n=r)}return n}else if(St(e)){const n=ya(i,e.key,t),s=ya(i,e.value,t);return Math.max(n,s)}return 1}const Gf=i=>!i||typeof i!="function"&&typeof i!="object";class Ke extends lc{constructor(e){super(Vn),this.value=e}toJSON(e,t){return t!=null&&t.keep?this.value:bn(this.value,e,t)}toString(){return String(this.value)}}Ke.BLOCK_FOLDED="BLOCK_FOLDED";Ke.BLOCK_LITERAL="BLOCK_LITERAL";Ke.PLAIN="PLAIN";Ke.QUOTE_DOUBLE="QUOTE_DOUBLE";Ke.QUOTE_SINGLE="QUOTE_SINGLE";const dp="tag:yaml.org,2002:";function pp(i,e,t){if(e){const n=t.filter(r=>r.tag===e),s=n.find(r=>!r.format)??n[0];if(!s)throw new Error(`Tag ${e} not found`);return s}return t.find(n=>{var s;return((s=n.identify)==null?void 0:s.call(n,i))&&!n.format})}function _r(i,e,t){var h,d,p;if(Zi(i)&&(i=i.contents),At(i))return i;if(St(i)){const x=(d=(h=t.schema[wi]).createNode)==null?void 0:d.call(h,t.schema,null,t);return x.items.push(i),x}(i instanceof String||i instanceof Number||i instanceof Boolean||typeof BigInt<"u"&&i instanceof BigInt)&&(i=i.valueOf());const{aliasDuplicateObjects:n,onAnchor:s,onTagObj:r,schema:a,sourceObjects:o}=t;let c;if(n&&i&&typeof i=="object"){if(c=o.get(i),c)return c.anchor??(c.anchor=s(i)),new qa(c.anchor);c={anchor:null,node:null},o.set(i,c)}e!=null&&e.startsWith("!!")&&(e=dp+e.slice(2));let l=pp(i,e,a.tags);if(!l){if(i&&typeof i.toJSON=="function"&&(i=i.toJSON()),!i||typeof i!="object"){const x=new Ke(i);return c&&(c.node=x),x}l=i instanceof Map?a[wi]:Symbol.iterator in Object(i)?a[qs]:a[wi]}r&&(r(l),delete t.onTagObj);const f=l!=null&&l.createNode?l.createNode(t.schema,i,t):typeof((p=l==null?void 0:l.nodeClass)==null?void 0:p.from)=="function"?l.nodeClass.from(t.schema,i,t):new Ke(i);return e?f.tag=e:l.default||(f.tag=l.tag),c&&(c.node=f),f}function Da(i,e,t){let n=t;for(let s=e.length-1;s>=0;--s){const r=e[s];if(typeof r=="number"&&Number.isInteger(r)&&r>=0){const a=[];a[r]=n,n=a}else n=new Map([[r,n]])}return _r(n,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:i,sourceObjects:new Map})}const hr=i=>i==null||typeof i=="object"&&!!i[Symbol.iterator]().next().done;class Vf extends lc{constructor(e,t){super(e),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(e){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(t.schema=e),t.items=t.items.map(n=>At(n)||St(n)?n.clone(e):n),this.range&&(t.range=this.range.slice()),t}addIn(e,t){if(hr(e))this.add(t);else{const[n,...s]=e,r=this.get(n,!0);if(Tt(r))r.addIn(s,t);else if(r===void 0&&this.schema)this.set(n,Da(this.schema,s,t));else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${s}`)}}deleteIn(e){const[t,...n]=e;if(n.length===0)return this.delete(t);const s=this.get(t,!0);if(Tt(s))return s.deleteIn(n);throw new Error(`Expected YAML collection at ${t}. Remaining path: ${n}`)}getIn(e,t){const[n,...s]=e,r=this.get(n,!0);return s.length===0?!t&&xt(r)?r.value:r:Tt(r)?r.getIn(s,t):void 0}hasAllNullValues(e){return this.items.every(t=>{if(!St(t))return!1;const n=t.value;return n==null||e&&xt(n)&&n.value==null&&!n.commentBefore&&!n.comment&&!n.tag})}hasIn(e){const[t,...n]=e;if(n.length===0)return this.has(t);const s=this.get(t,!0);return Tt(s)?s.hasIn(n):!1}setIn(e,t){const[n,...s]=e;if(s.length===0)this.set(n,t);else{const r=this.get(n,!0);if(Tt(r))r.setIn(s,t);else if(r===void 0&&this.schema)this.set(n,Da(this.schema,s,t));else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${s}`)}}}const mp=i=>i.replace(/^(?!$)(?: $)?/gm,"#");function ti(i,e){return/^\n+$/.test(i)?i.substring(1):e?i.replace(/^(?! *$)/gm,e):i}const Gi=(i,e,t)=>i.endsWith(`
`)?ti(t,e):t.includes(`
`)?`
`+ti(t,e):(i.endsWith(" ")?"":" ")+t,Wf="flow",ll="block",xa="quoted";function ja(i,e,t="flow",{indentAtStart:n,lineWidth:s=80,minContentWidth:r=20,onFold:a,onOverflow:o}={}){if(!s||s<0)return i;s<r&&(r=0);const c=Math.max(1+r,1+s-e.length);if(i.length<=c)return i;const l=[],f={};let h=s-e.length;typeof n=="number"&&(n>s-Math.max(2,r)?l.push(0):h=s-n);let d,p,x=!1,y=-1,_=-1,g=-1;t===ll&&(y=eu(i,y,e.length),y!==-1&&(h=y+c));for(let A;A=i[y+=1];){if(t===xa&&A==="\\"){switch(_=y,i[y+1]){case"x":y+=3;break;case"u":y+=5;break;case"U":y+=9;break;default:y+=1}g=y}if(A===`
`)t===ll&&(y=eu(i,y,e.length)),h=y+e.length+c,d=void 0;else{if(A===" "&&p&&p!==" "&&p!==`
`&&p!=="	"){const b=i[y+1];b&&b!==" "&&b!==`
`&&b!=="	"&&(d=y)}if(y>=h)if(d)l.push(d),h=d+c,d=void 0;else if(t===xa){for(;p===" "||p==="	";)p=A,A=i[y+=1],x=!0;const b=y>g+1?y-2:_-1;if(f[b])return i;l.push(b),f[b]=!0,h=b+c,d=void 0}else x=!0}p=A}if(x&&o&&o(),l.length===0)return i;a&&a();let R=i.slice(0,l[0]);for(let A=0;A<l.length;++A){const b=l[A],L=l[A+1]||i.length;b===0?R=`
${e}${i.slice(0,L)}`:(t===xa&&f[b]&&(R+=`${i[b]}\\`),R+=`
${e}${i.slice(b+1,L)}`)}return R}function eu(i,e,t){let n=e,s=e+1,r=i[s];for(;r===" "||r==="	";)if(e<s+t)r=i[++e];else{do r=i[++e];while(r&&r!==`
`);n=e,s=e+1,r=i[s]}return n}const Xa=(i,e)=>({indentAtStart:e?i.indent.length:i.indentAtStart,lineWidth:i.options.lineWidth,minContentWidth:i.options.minContentWidth}),$a=i=>/^(%|---|\.\.\.)/m.test(i);function gp(i,e,t){if(!e||e<0)return!1;const n=e-t,s=i.length;if(s<=n)return!1;for(let r=0,a=0;r<s;++r)if(i[r]===`
`){if(r-a>n)return!0;if(a=r+1,s-a<=n)return!1}return!0}function pr(i,e){const t=JSON.stringify(i);if(e.options.doubleQuotedAsJSON)return t;const{implicitKey:n}=e,s=e.options.doubleQuotedMinMultiLineLength,r=e.indent||($a(i)?"  ":"");let a="",o=0;for(let c=0,l=t[c];l;l=t[++c])if(l===" "&&t[c+1]==="\\"&&t[c+2]==="n"&&(a+=t.slice(o,c)+"\\ ",c+=1,o=c,l="\\"),l==="\\")switch(t[c+1]){case"u":{a+=t.slice(o,c);const f=t.substr(c+2,4);switch(f){case"0000":a+="\\0";break;case"0007":a+="\\a";break;case"000b":a+="\\v";break;case"001b":a+="\\e";break;case"0085":a+="\\N";break;case"00a0":a+="\\_";break;case"2028":a+="\\L";break;case"2029":a+="\\P";break;default:f.substr(0,2)==="00"?a+="\\x"+f.substr(2):a+=t.substr(c,6)}c+=5,o=c+1}break;case"n":if(n||t[c+2]==='"'||t.length<s)c+=1;else{for(a+=t.slice(o,c)+`

`;t[c+2]==="\\"&&t[c+3]==="n"&&t[c+4]!=='"';)a+=`
`,c+=2;a+=r,t[c+2]===" "&&(a+="\\"),c+=1,o=c+1}break;default:c+=1}return a=o?a+t.slice(o):t,n?a:ja(a,r,xa,Xa(e,!1))}function cl(i,e){if(e.options.singleQuote===!1||e.implicitKey&&i.includes(`
`)||/[ \t]\n|\n[ \t]/.test(i))return pr(i,e);const t=e.indent||($a(i)?"  ":""),n="'"+i.replace(/'/g,"''").replace(/\n+/g,`$&
${t}`)+"'";return e.implicitKey?n:ja(n,t,Wf,Xa(e,!1))}function Rs(i,e){const{singleQuote:t}=e.options;let n;if(t===!1)n=pr;else{const s=i.includes('"'),r=i.includes("'");s&&!r?n=cl:r&&!s?n=pr:n=t?cl:pr}return n(i,e)}let ul;try{ul=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{ul=/\n+(?!\n|$)/g}function ba({comment:i,type:e,value:t},n,s,r){const{blockQuote:a,commentString:o,lineWidth:c}=n.options;if(!a||/\n[\t ]+$/.test(t))return Rs(t,n);const l=n.indent||(n.forceBlockIndent||$a(t)?"  ":""),f=a==="literal"?!0:a==="folded"||e===Ke.BLOCK_FOLDED?!1:e===Ke.BLOCK_LITERAL?!0:!gp(t,c,l.length);if(!t)return f?`|
`:`>
`;let h,d;for(d=t.length;d>0;--d){const L=t[d-1];if(L!==`
`&&L!=="	"&&L!==" ")break}let p=t.substring(d);const x=p.indexOf(`
`);x===-1?h="-":t===p||x!==p.length-1?(h="+",r&&r()):h="",p&&(t=t.slice(0,-p.length),p[p.length-1]===`
`&&(p=p.slice(0,-1)),p=p.replace(ul,`$&${l}`));let y=!1,_,g=-1;for(_=0;_<t.length;++_){const L=t[_];if(L===" ")y=!0;else if(L===`
`)g=_;else break}let R=t.substring(0,g<_?g+1:_);R&&(t=t.substring(R.length),R=R.replace(/\n+/g,`$&${l}`));let b=(y?l?"2":"1":"")+h;if(i&&(b+=" "+o(i.replace(/ ?[\r\n]+/g," ")),s&&s()),!f){const L=t.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${l}`);let I=!1;const C=Xa(n,!0);a!=="folded"&&e!==Ke.BLOCK_FOLDED&&(C.onOverflow=()=>{I=!0});const D=ja(`${R}${L}${p}`,l,ll,C);if(!I)return`>${b}
${l}${D}`}return t=t.replace(/\n+/g,`$&${l}`),`|${b}
${l}${R}${t}${p}`}function _p(i,e,t,n){const{type:s,value:r}=i,{actualString:a,implicitKey:o,indent:c,indentStep:l,inFlow:f}=e;if(o&&r.includes(`
`)||f&&/[[\]{},]/.test(r))return Rs(r,e);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(r))return o||f||!r.includes(`
`)?Rs(r,e):ba(i,e,t,n);if(!o&&!f&&s!==Ke.PLAIN&&r.includes(`
`))return ba(i,e,t,n);if($a(r)){if(c==="")return e.forceBlockIndent=!0,ba(i,e,t,n);if(o&&c===l)return Rs(r,e)}const h=r.replace(/\n+/g,`$&
${c}`);if(a){const d=y=>{var _;return y.default&&y.tag!=="tag:yaml.org,2002:str"&&((_=y.test)==null?void 0:_.test(h))},{compat:p,tags:x}=e.doc.schema;if(x.some(d)||p!=null&&p.some(d))return Rs(r,e)}return o?h:ja(h,c,Wf,Xa(e,!1))}function Tr(i,e,t,n){const{implicitKey:s,inFlow:r}=e,a=typeof i.value=="string"?i:Object.assign({},i,{value:String(i.value)});let{type:o}=i;o!==Ke.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(a.value)&&(o=Ke.QUOTE_DOUBLE);const c=f=>{switch(f){case Ke.BLOCK_FOLDED:case Ke.BLOCK_LITERAL:return s||r?Rs(a.value,e):ba(a,e,t,n);case Ke.QUOTE_DOUBLE:return pr(a.value,e);case Ke.QUOTE_SINGLE:return cl(a.value,e);case Ke.PLAIN:return _p(a,e,t,n);default:return null}};let l=c(o);if(l===null){const{defaultKeyType:f,defaultStringType:h}=e.options,d=s&&f||h;if(l=c(d),l===null)throw new Error(`Unsupported default string type ${d}`)}return l}function qf(i,e){const t=Object.assign({blockQuote:!0,commentString:mp,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trailingComma:!1,trueStr:"true",verifyAliasOrder:!0},i.schema.toStringOptions,e);let n;switch(t.collectionStyle){case"block":n=!1;break;case"flow":n=!0;break;default:n=null}return{anchors:new Set,doc:i,flowCollectionPadding:t.flowCollectionPadding?" ":"",indent:"",indentStep:typeof t.indent=="number"?" ".repeat(t.indent):"  ",inFlow:n,options:t}}function vp(i,e){var s;if(e.tag){const r=i.filter(a=>a.tag===e.tag);if(r.length>0)return r.find(a=>a.format===e.format)??r[0]}let t,n;if(xt(e)){n=e.value;let r=i.filter(a=>{var o;return(o=a.identify)==null?void 0:o.call(a,n)});if(r.length>1){const a=r.filter(o=>o.test);a.length>0&&(r=a)}t=r.find(a=>a.format===e.format)??r.find(a=>!a.format)}else n=e,t=i.find(r=>r.nodeClass&&n instanceof r.nodeClass);if(!t){const r=((s=n==null?void 0:n.constructor)==null?void 0:s.name)??(n===null?"null":typeof n);throw new Error(`Tag not resolved for ${r} value`)}return t}function yp(i,e,{anchors:t,doc:n}){if(!n.directives)return"";const s=[],r=(xt(i)||Tt(i))&&i.anchor;r&&Bf(r)&&(t.add(r),s.push(`&${r}`));const a=i.tag??(e.default?null:e.tag);return a&&s.push(n.directives.tagString(a)),s.join(" ")}function ks(i,e,t,n){var c;if(St(i))return i.toString(e,t,n);if(Ji(i)){if(e.doc.directives)return i.toString(e);if((c=e.resolvedAliases)!=null&&c.has(i))throw new TypeError("Cannot stringify circular structure without alias nodes");e.resolvedAliases?e.resolvedAliases.add(i):e.resolvedAliases=new Set([i]),i=i.resolve(e.doc)}let s;const r=At(i)?i:e.doc.createNode(i,{onTagObj:l=>s=l});s??(s=vp(e.doc.schema.tags,r));const a=yp(r,s,e);a.length>0&&(e.indentAtStart=(e.indentAtStart??0)+a.length+1);const o=typeof s.stringify=="function"?s.stringify(r,e,t,n):xt(r)?Tr(r,e,t,n):r.toString(e,t,n);return a?xt(r)||o[0]==="{"||o[0]==="["?`${a} ${o}`:`${a}
${e.indent}${o}`:o}function xp({key:i,value:e},t,n,s){const{allNullValues:r,doc:a,indent:o,indentStep:c,options:{commentString:l,indentSeq:f,simpleKeys:h}}=t;let d=At(i)&&i.comment||null;if(h){if(d)throw new Error("With simple keys, key nodes cannot have comments");if(Tt(i)||!At(i)&&typeof i=="object"){const C="With simple keys, collection cannot be used as a key value";throw new Error(C)}}let p=!h&&(!i||d&&e==null&&!t.inFlow||Tt(i)||(xt(i)?i.type===Ke.BLOCK_FOLDED||i.type===Ke.BLOCK_LITERAL:typeof i=="object"));t=Object.assign({},t,{allNullValues:!1,implicitKey:!p&&(h||!r),indent:o+c});let x=!1,y=!1,_=ks(i,t,()=>x=!0,()=>y=!0);if(!p&&!t.inFlow&&_.length>1024){if(h)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");p=!0}if(t.inFlow){if(r||e==null)return x&&n&&n(),_===""?"?":p?`? ${_}`:_}else if(r&&!h||e==null&&p)return _=`? ${_}`,d&&!x?_+=Gi(_,t.indent,l(d)):y&&s&&s(),_;x&&(d=null),p?(d&&(_+=Gi(_,t.indent,l(d))),_=`? ${_}
${o}:`):(_=`${_}:`,d&&(_+=Gi(_,t.indent,l(d))));let g,R,A;At(e)?(g=!!e.spaceBefore,R=e.commentBefore,A=e.comment):(g=!1,R=null,A=null,e&&typeof e=="object"&&(e=a.createNode(e))),t.implicitKey=!1,!p&&!d&&xt(e)&&(t.indentAtStart=_.length+1),y=!1,!f&&c.length>=2&&!t.inFlow&&!p&&Xs(e)&&!e.flow&&!e.tag&&!e.anchor&&(t.indent=t.indent.substring(2));let b=!1;const L=ks(e,t,()=>b=!0,()=>y=!0);let I=" ";if(d||g||R){if(I=g?`
`:"",R){const C=l(R);I+=`
${ti(C,t.indent)}`}L===""&&!t.inFlow?I===`
`&&A&&(I=`

`):I+=`
${t.indent}`}else if(!p&&Tt(e)){const C=L[0],D=L.indexOf(`
`),S=D!==-1,w=t.inFlow??e.flow??e.items.length===0;if(S||!w){let N=!1;if(S&&(C==="&"||C==="!")){let F=L.indexOf(" ");C==="&"&&F!==-1&&F<D&&L[F+1]==="!"&&(F=L.indexOf(" ",F+1)),(F===-1||D<F)&&(N=!0)}N||(I=`
${t.indent}`)}}else(L===""||L[0]===`
`)&&(I="");return _+=I+L,t.inFlow?b&&n&&n():A&&!b?_+=Gi(_,t.indent,l(A)):y&&s&&s(),_}function jf(i,e){(i==="debug"||i==="warn")&&console.warn(e)}const Gr="<<",ri={identify:i=>i===Gr||typeof i=="symbol"&&i.description===Gr,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new Ke(Symbol(Gr)),{addToJSMap:Xf}),stringify:()=>Gr},bp=(i,e)=>(ri.identify(e)||xt(e)&&(!e.type||e.type===Ke.PLAIN)&&ri.identify(e.value))&&(i==null?void 0:i.doc.schema.tags.some(t=>t.tag===ri.tag&&t.default));function Xf(i,e,t){const n=$f(i,t);if(Xs(n))for(const s of n.items)po(i,e,s);else if(Array.isArray(n))for(const s of n)po(i,e,s);else po(i,e,n)}function po(i,e,t){const n=$f(i,t);if(!js(n))throw new Error("Merge sources must be maps or map aliases");const s=n.toJSON(null,i,Map);for(const[r,a]of s)e instanceof Map?e.has(r)||e.set(r,a):e instanceof Set?e.add(r):Object.prototype.hasOwnProperty.call(e,r)||Object.defineProperty(e,r,{value:a,writable:!0,enumerable:!0,configurable:!0});return e}function $f(i,e){return i&&Ji(e)?e.resolve(i.doc,i):e}function Kf(i,e,{key:t,value:n}){if(At(t)&&t.addToJSMap)t.addToJSMap(i,e,n);else if(bp(i,t))Xf(i,e,n);else{const s=bn(t,"",i);if(e instanceof Map)e.set(s,bn(n,s,i));else if(e instanceof Set)e.add(s);else{const r=wp(t,s,i),a=bn(n,r,i);r in e?Object.defineProperty(e,r,{value:a,writable:!0,enumerable:!0,configurable:!0}):e[r]=a}}return e}function wp(i,e,t){if(e===null)return"";if(typeof e!="object")return String(e);if(At(i)&&(t!=null&&t.doc)){const n=qf(t.doc,{});n.anchors=new Set;for(const r of t.anchors.keys())n.anchors.add(r.anchor);n.inFlow=!0,n.inStringifyKey=!0;const s=i.toString(n);if(!t.mapKeyWarned){let r=JSON.stringify(s);r.length>40&&(r=r.substring(0,36)+'..."'),jf(t.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${r}. Set mapAsMap: true to use object keys.`),t.mapKeyWarned=!0}return s}return JSON.stringify(e)}function cc(i,e,t){const n=_r(i,void 0,t),s=_r(e,void 0,t);return new en(n,s)}class en{constructor(e,t=null){Object.defineProperty(this,Mn,{value:Df}),this.key=e,this.value=t}clone(e){let{key:t,value:n}=this;return At(t)&&(t=t.clone(e)),At(n)&&(n=n.clone(e)),new en(t,n)}toJSON(e,t){const n=t!=null&&t.mapAsMap?new Map:{};return Kf(t,n,this)}toString(e,t,n){return e!=null&&e.doc?xp(this,e,t,n):JSON.stringify(this)}}function Yf(i,e,t){return(e.inFlow??i.flow?Sp:Mp)(i,e,t)}function Mp({comment:i,items:e},t,{blockItemPrefix:n,flowChars:s,itemIndent:r,onChompKeep:a,onComment:o}){const{indent:c,options:{commentString:l}}=t,f=Object.assign({},t,{indent:r,type:null});let h=!1;const d=[];for(let x=0;x<e.length;++x){const y=e[x];let _=null;if(At(y))!h&&y.spaceBefore&&d.push(""),Oa(t,d,y.commentBefore,h),y.comment&&(_=y.comment);else if(St(y)){const R=At(y.key)?y.key:null;R&&(!h&&R.spaceBefore&&d.push(""),Oa(t,d,R.commentBefore,h))}h=!1;let g=ks(y,f,()=>_=null,()=>h=!0);_&&(g+=Gi(g,r,l(_))),h&&_&&(h=!1),d.push(n+g)}let p;if(d.length===0)p=s.start+s.end;else{p=d[0];for(let x=1;x<d.length;++x){const y=d[x];p+=y?`
${c}${y}`:`
`}}return i?(p+=`
`+ti(l(i),c),o&&o()):h&&a&&a(),p}function Sp({items:i},e,{flowChars:t,itemIndent:n}){const{indent:s,indentStep:r,flowCollectionPadding:a,options:{commentString:o}}=e;n+=r;const c=Object.assign({},e,{indent:n,inFlow:!0,type:null});let l=!1,f=0;const h=[];for(let x=0;x<i.length;++x){const y=i[x];let _=null;if(At(y))y.spaceBefore&&h.push(""),Oa(e,h,y.commentBefore,!1),y.comment&&(_=y.comment);else if(St(y)){const R=At(y.key)?y.key:null;R&&(R.spaceBefore&&h.push(""),Oa(e,h,R.commentBefore,!1),R.comment&&(l=!0));const A=At(y.value)?y.value:null;A?(A.comment&&(_=A.comment),A.commentBefore&&(l=!0)):y.value==null&&(R!=null&&R.comment)&&(_=R.comment)}_&&(l=!0);let g=ks(y,c,()=>_=null);l||(l=h.length>f||g.includes(`
`)),x<i.length-1?g+=",":e.options.trailingComma&&(e.options.lineWidth>0&&(l||(l=h.reduce((R,A)=>R+A.length+2,2)+(g.length+2)>e.options.lineWidth)),l&&(g+=",")),_&&(g+=Gi(g,n,o(_))),h.push(g),f=h.length}const{start:d,end:p}=t;if(h.length===0)return d+p;if(!l){const x=h.reduce((y,_)=>y+_.length+2,2);l=e.options.lineWidth>0&&x>e.options.lineWidth}if(l){let x=d;for(const y of h)x+=y?`
${r}${s}${y}`:`
`;return`${x}
${s}${p}`}else return`${d}${a}${h.join(" ")}${a}${p}`}function Oa({indent:i,options:{commentString:e}},t,n,s){if(n&&s&&(n=n.replace(/^\n+/,"")),n){const r=ti(e(n),i);t.push(r.trimStart())}}function Vi(i,e){const t=xt(e)?e.value:e;for(const n of i)if(St(n)&&(n.key===e||n.key===t||xt(n.key)&&n.key.value===t))return n}class gn extends Vf{static get tagName(){return"tag:yaml.org,2002:map"}constructor(e){super(wi,e),this.items=[]}static from(e,t,n){const{keepUndefined:s,replacer:r}=n,a=new this(e),o=(c,l)=>{if(typeof r=="function")l=r.call(t,c,l);else if(Array.isArray(r)&&!r.includes(c))return;(l!==void 0||s)&&a.items.push(cc(c,l,n))};if(t instanceof Map)for(const[c,l]of t)o(c,l);else if(t&&typeof t=="object")for(const c of Object.keys(t))o(c,t[c]);return typeof e.sortMapEntries=="function"&&a.items.sort(e.sortMapEntries),a}add(e,t){var a;let n;St(e)?n=e:!e||typeof e!="object"||!("key"in e)?n=new en(e,e==null?void 0:e.value):n=new en(e.key,e.value);const s=Vi(this.items,n.key),r=(a=this.schema)==null?void 0:a.sortMapEntries;if(s){if(!t)throw new Error(`Key ${n.key} already set`);xt(s.value)&&Gf(n.value)?s.value.value=n.value:s.value=n.value}else if(r){const o=this.items.findIndex(c=>r(n,c)<0);o===-1?this.items.push(n):this.items.splice(o,0,n)}else this.items.push(n)}delete(e){const t=Vi(this.items,e);return t?this.items.splice(this.items.indexOf(t),1).length>0:!1}get(e,t){const n=Vi(this.items,e),s=n==null?void 0:n.value;return(!t&&xt(s)?s.value:s)??void 0}has(e){return!!Vi(this.items,e)}set(e,t){this.add(new en(e,t),!0)}toJSON(e,t,n){const s=n?new n:t!=null&&t.mapAsMap?new Map:{};t!=null&&t.onCreate&&t.onCreate(s);for(const r of this.items)Kf(t,s,r);return s}toString(e,t,n){if(!e)return JSON.stringify(this);for(const s of this.items)if(!St(s))throw new Error(`Map items must all be pairs; found ${JSON.stringify(s)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),Yf(this,e,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:e.indent||"",onChompKeep:n,onComment:t})}}const $s={collection:"map",default:!0,nodeClass:gn,tag:"tag:yaml.org,2002:map",resolve(i,e){return js(i)||e("Expected a mapping for this tag"),i},createNode:(i,e,t)=>gn.from(i,e,t)};class Si extends Vf{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(e){super(qs,e),this.items=[]}add(e){this.items.push(e)}delete(e){const t=Vr(e);return typeof t!="number"?!1:this.items.splice(t,1).length>0}get(e,t){const n=Vr(e);if(typeof n!="number")return;const s=this.items[n];return!t&&xt(s)?s.value:s}has(e){const t=Vr(e);return typeof t=="number"&&t<this.items.length}set(e,t){const n=Vr(e);if(typeof n!="number")throw new Error(`Expected a valid index, not ${e}.`);const s=this.items[n];xt(s)&&Gf(t)?s.value=t:this.items[n]=t}toJSON(e,t){const n=[];t!=null&&t.onCreate&&t.onCreate(n);let s=0;for(const r of this.items)n.push(bn(r,String(s++),t));return n}toString(e,t,n){return e?Yf(this,e,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(e.indent||"")+"  ",onChompKeep:n,onComment:t}):JSON.stringify(this)}static from(e,t,n){const{replacer:s}=n,r=new this(e);if(t&&Symbol.iterator in Object(t)){let a=0;for(let o of t){if(typeof s=="function"){const c=t instanceof Set?o:String(a++);o=s.call(t,c,o)}r.items.push(_r(o,void 0,n))}}return r}}function Vr(i){let e=xt(i)?i.value:i;return e&&typeof e=="string"&&(e=Number(e)),typeof e=="number"&&Number.isInteger(e)&&e>=0?e:null}const Ks={collection:"seq",default:!0,nodeClass:Si,tag:"tag:yaml.org,2002:seq",resolve(i,e){return Xs(i)||e("Expected a sequence for this tag"),i},createNode:(i,e,t)=>Si.from(i,e,t)},Ka={identify:i=>typeof i=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:i=>i,stringify(i,e,t,n){return e=Object.assign({actualString:!0},e),Tr(i,e,t,n)}},Ya={identify:i=>i==null,createNode:()=>new Ke(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new Ke(null),stringify:({source:i},e)=>typeof i=="string"&&Ya.test.test(i)?i:e.options.nullStr},uc={identify:i=>typeof i=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:i=>new Ke(i[0]==="t"||i[0]==="T"),stringify({source:i,value:e},t){if(i&&uc.test.test(i)){const n=i[0]==="t"||i[0]==="T";if(e===n)return i}return e?t.options.trueStr:t.options.falseStr}};function Un({format:i,minFractionDigits:e,tag:t,value:n}){if(typeof n=="bigint")return String(n);const s=typeof n=="number"?n:Number(n);if(!isFinite(s))return isNaN(s)?".nan":s<0?"-.inf":".inf";let r=Object.is(n,-0)?"-0":JSON.stringify(n);if(!i&&e&&(!t||t==="tag:yaml.org,2002:float")&&/^-?\d/.test(r)&&!r.includes("e")){let a=r.indexOf(".");a<0&&(a=r.length,r+=".");let o=e-(r.length-a-1);for(;o-- >0;)r+="0"}return r}const Jf={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:i=>i.slice(-3).toLowerCase()==="nan"?NaN:i[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Un},Zf={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:i=>parseFloat(i),stringify(i){const e=Number(i.value);return isFinite(e)?e.toExponential():Un(i)}},Qf={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(i){const e=new Ke(parseFloat(i)),t=i.indexOf(".");return t!==-1&&i[i.length-1]==="0"&&(e.minFractionDigits=i.length-t-1),e},stringify:Un},Ja=i=>typeof i=="bigint"||Number.isInteger(i),fc=(i,e,t,{intAsBigInt:n})=>n?BigInt(i):parseInt(i.substring(e),t);function eh(i,e,t){const{value:n}=i;return Ja(n)&&n>=0?t+n.toString(e):Un(i)}const th={identify:i=>Ja(i)&&i>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(i,e,t)=>fc(i,2,8,t),stringify:i=>eh(i,8,"0o")},nh={identify:Ja,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(i,e,t)=>fc(i,0,10,t),stringify:Un},ih={identify:i=>Ja(i)&&i>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(i,e,t)=>fc(i,2,16,t),stringify:i=>eh(i,16,"0x")},Ep=[$s,Ks,Ka,Ya,uc,th,nh,ih,Jf,Zf,Qf];function tu(i){return typeof i=="bigint"||Number.isInteger(i)}const Wr=({value:i})=>JSON.stringify(i),Tp=[{identify:i=>typeof i=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:i=>i,stringify:Wr},{identify:i=>i==null,createNode:()=>new Ke(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:Wr},{identify:i=>typeof i=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:i=>i==="true",stringify:Wr},{identify:tu,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(i,e,{intAsBigInt:t})=>t?BigInt(i):parseInt(i,10),stringify:({value:i})=>tu(i)?i.toString():JSON.stringify(i)},{identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:i=>parseFloat(i),stringify:Wr}],Ap={default:!0,tag:"",test:/^/,resolve(i,e){return e(`Unresolved plain scalar ${JSON.stringify(i)}`),i}},Rp=[$s,Ks].concat(Tp,Ap),hc={identify:i=>i instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(i,e){if(typeof atob=="function"){const t=atob(i.replace(/[\n\r]/g,"")),n=new Uint8Array(t.length);for(let s=0;s<t.length;++s)n[s]=t.charCodeAt(s);return n}else return e("This environment does not support reading binary tags; either Buffer or atob is required"),i},stringify({comment:i,type:e,value:t},n,s,r){if(!t)return"";const a=t;let o;if(typeof btoa=="function"){let c="";for(let l=0;l<a.length;++l)c+=String.fromCharCode(a[l]);o=btoa(c)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(e??(e=Ke.BLOCK_LITERAL),e!==Ke.QUOTE_DOUBLE){const c=Math.max(n.options.lineWidth-n.indent.length,n.options.minContentWidth),l=Math.ceil(o.length/c),f=new Array(l);for(let h=0,d=0;h<l;++h,d+=c)f[h]=o.substr(d,c);o=f.join(e===Ke.BLOCK_LITERAL?`
`:" ")}return Tr({comment:i,type:e,value:o},n,s,r)}};function sh(i,e){if(Xs(i))for(let t=0;t<i.items.length;++t){let n=i.items[t];if(!St(n)){if(js(n)){n.items.length>1&&e("Each pair must have its own sequence indicator");const s=n.items[0]||new en(new Ke(null));if(n.commentBefore&&(s.key.commentBefore=s.key.commentBefore?`${n.commentBefore}
${s.key.commentBefore}`:n.commentBefore),n.comment){const r=s.value??s.key;r.comment=r.comment?`${n.comment}
${r.comment}`:n.comment}n=s}i.items[t]=St(n)?n:new en(n)}}else e("Expected a sequence for this tag");return i}function rh(i,e,t){const{replacer:n}=t,s=new Si(i);s.tag="tag:yaml.org,2002:pairs";let r=0;if(e&&Symbol.iterator in Object(e))for(let a of e){typeof n=="function"&&(a=n.call(e,String(r++),a));let o,c;if(Array.isArray(a))if(a.length===2)o=a[0],c=a[1];else throw new TypeError(`Expected [key, value] tuple: ${a}`);else if(a&&a instanceof Object){const l=Object.keys(a);if(l.length===1)o=l[0],c=a[o];else throw new TypeError(`Expected tuple with one key, not ${l.length} keys`)}else o=a;s.items.push(cc(o,c,t))}return s}const dc={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:sh,createNode:rh};class Ls extends Si{constructor(){super(),this.add=gn.prototype.add.bind(this),this.delete=gn.prototype.delete.bind(this),this.get=gn.prototype.get.bind(this),this.has=gn.prototype.has.bind(this),this.set=gn.prototype.set.bind(this),this.tag=Ls.tag}toJSON(e,t){if(!t)return super.toJSON(e);const n=new Map;t!=null&&t.onCreate&&t.onCreate(n);for(const s of this.items){let r,a;if(St(s)?(r=bn(s.key,"",t),a=bn(s.value,r,t)):r=bn(s,"",t),n.has(r))throw new Error("Ordered maps must not include duplicate keys");n.set(r,a)}return n}static from(e,t,n){const s=rh(e,t,n),r=new this;return r.items=s.items,r}}Ls.tag="tag:yaml.org,2002:omap";const pc={collection:"seq",identify:i=>i instanceof Map,nodeClass:Ls,default:!1,tag:"tag:yaml.org,2002:omap",resolve(i,e){const t=sh(i,e),n=[];for(const{key:s}of t.items)xt(s)&&(n.includes(s.value)?e(`Ordered maps must not include duplicate keys: ${s.value}`):n.push(s.value));return Object.assign(new Ls,t)},createNode:(i,e,t)=>Ls.from(i,e,t)};function ah({value:i,source:e},t){return e&&(i?oh:lh).test.test(e)?e:i?t.options.trueStr:t.options.falseStr}const oh={identify:i=>i===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new Ke(!0),stringify:ah},lh={identify:i=>i===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new Ke(!1),stringify:ah},Cp={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:i=>i.slice(-3).toLowerCase()==="nan"?NaN:i[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Un},Pp={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:i=>parseFloat(i.replace(/_/g,"")),stringify(i){const e=Number(i.value);return isFinite(e)?e.toExponential():Un(i)}},Lp={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(i){const e=new Ke(parseFloat(i.replace(/_/g,""))),t=i.indexOf(".");if(t!==-1){const n=i.substring(t+1).replace(/_/g,"");n[n.length-1]==="0"&&(e.minFractionDigits=n.length)}return e},stringify:Un},Ar=i=>typeof i=="bigint"||Number.isInteger(i);function Za(i,e,t,{intAsBigInt:n}){const s=i[0];if((s==="-"||s==="+")&&(e+=1),i=i.substring(e).replace(/_/g,""),n){switch(t){case 2:i=`0b${i}`;break;case 8:i=`0o${i}`;break;case 16:i=`0x${i}`;break}const a=BigInt(i);return s==="-"?BigInt(-1)*a:a}const r=parseInt(i,t);return s==="-"?-1*r:r}function mc(i,e,t){const{value:n}=i;if(Ar(n)){const s=n.toString(e);return n<0?"-"+t+s.substr(1):t+s}return Un(i)}const Ip={identify:Ar,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(i,e,t)=>Za(i,2,2,t),stringify:i=>mc(i,2,"0b")},Dp={identify:Ar,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(i,e,t)=>Za(i,1,8,t),stringify:i=>mc(i,8,"0")},Op={identify:Ar,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(i,e,t)=>Za(i,0,10,t),stringify:Un},Np={identify:Ar,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(i,e,t)=>Za(i,2,16,t),stringify:i=>mc(i,16,"0x")};class Is extends gn{constructor(e){super(e),this.tag=Is.tag}add(e){let t;St(e)?t=e:e&&typeof e=="object"&&"key"in e&&"value"in e&&e.value===null?t=new en(e.key,null):t=new en(e,null),Vi(this.items,t.key)||this.items.push(t)}get(e,t){const n=Vi(this.items,e);return!t&&St(n)?xt(n.key)?n.key.value:n.key:n}set(e,t){if(typeof t!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);const n=Vi(this.items,e);n&&!t?this.items.splice(this.items.indexOf(n),1):!n&&t&&this.items.push(new en(e))}toJSON(e,t){return super.toJSON(e,t,Set)}toString(e,t,n){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),t,n);throw new Error("Set items must all have null values")}static from(e,t,n){const{replacer:s}=n,r=new this(e);if(t&&Symbol.iterator in Object(t))for(let a of t)typeof s=="function"&&(a=s.call(t,a,a)),r.items.push(cc(a,null,n));return r}}Is.tag="tag:yaml.org,2002:set";const gc={collection:"map",identify:i=>i instanceof Set,nodeClass:Is,default:!1,tag:"tag:yaml.org,2002:set",createNode:(i,e,t)=>Is.from(i,e,t),resolve(i,e){if(js(i)){if(i.hasAllNullValues(!0))return Object.assign(new Is,i);e("Set items must all have null values")}else e("Expected a mapping for this tag");return i}};function _c(i,e){const t=i[0],n=t==="-"||t==="+"?i.substring(1):i,s=a=>e?BigInt(a):Number(a),r=n.replace(/_/g,"").split(":").reduce((a,o)=>a*s(60)+s(o),s(0));return t==="-"?s(-1)*r:r}function ch(i){let{value:e}=i,t=a=>a;if(typeof e=="bigint")t=a=>BigInt(a);else if(isNaN(e)||!isFinite(e))return Un(i);let n="";e<0&&(n="-",e*=t(-1));const s=t(60),r=[e%s];return e<60?r.unshift(0):(e=(e-r[0])/s,r.unshift(e%s),e>=60&&(e=(e-r[0])/s,r.unshift(e))),n+r.map(a=>String(a).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}const uh={identify:i=>typeof i=="bigint"||Number.isInteger(i),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(i,e,{intAsBigInt:t})=>_c(i,t),stringify:ch},fh={identify:i=>typeof i=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:i=>_c(i,!1),stringify:ch},Qa={identify:i=>i instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(i){const e=i.match(Qa.test);if(!e)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,t,n,s,r,a,o]=e.map(Number),c=e[7]?Number((e[7]+"00").substr(1,3)):0;let l=Date.UTC(t,n-1,s,r||0,a||0,o||0,c);const f=e[8];if(f&&f!=="Z"){let h=_c(f,!1);Math.abs(h)<30&&(h*=60),l-=6e4*h}return new Date(l)},stringify:({value:i})=>(i==null?void 0:i.toISOString().replace(/(T00:00:00)?\.000Z$/,""))??""},nu=[$s,Ks,Ka,Ya,oh,lh,Ip,Dp,Op,Np,Cp,Pp,Lp,hc,ri,pc,dc,gc,uh,fh,Qa],iu=new Map([["core",Ep],["failsafe",[$s,Ks,Ka]],["json",Rp],["yaml11",nu],["yaml-1.1",nu]]),su={binary:hc,bool:uc,float:Qf,floatExp:Zf,floatNaN:Jf,floatTime:fh,int:nh,intHex:ih,intOct:th,intTime:uh,map:$s,merge:ri,null:Ya,omap:pc,pairs:dc,seq:Ks,set:gc,timestamp:Qa},kp={"tag:yaml.org,2002:binary":hc,"tag:yaml.org,2002:merge":ri,"tag:yaml.org,2002:omap":pc,"tag:yaml.org,2002:pairs":dc,"tag:yaml.org,2002:set":gc,"tag:yaml.org,2002:timestamp":Qa};function mo(i,e,t){const n=iu.get(e);if(n&&!i)return t&&!n.includes(ri)?n.concat(ri):n.slice();let s=n;if(!s)if(Array.isArray(i))s=[];else{const r=Array.from(iu.keys()).filter(a=>a!=="yaml11").map(a=>JSON.stringify(a)).join(", ");throw new Error(`Unknown schema "${e}"; use one of ${r} or define customTags array`)}if(Array.isArray(i))for(const r of i)s=s.concat(r);else typeof i=="function"&&(s=i(s.slice()));return t&&(s=s.concat(ri)),s.reduce((r,a)=>{const o=typeof a=="string"?su[a]:a;if(!o){const c=JSON.stringify(a),l=Object.keys(su).map(f=>JSON.stringify(f)).join(", ");throw new Error(`Unknown custom tag ${c}; use one of ${l}`)}return r.includes(o)||r.push(o),r},[])}const Up=(i,e)=>i.key<e.key?-1:i.key>e.key?1:0;class eo{constructor({compat:e,customTags:t,merge:n,resolveKnownTags:s,schema:r,sortMapEntries:a,toStringDefaults:o}){this.compat=Array.isArray(e)?mo(e,"compat"):e?mo(null,e):null,this.name=typeof r=="string"&&r||"core",this.knownTags=s?kp:{},this.tags=mo(t,this.name,n),this.toStringOptions=o??null,Object.defineProperty(this,wi,{value:$s}),Object.defineProperty(this,Vn,{value:Ka}),Object.defineProperty(this,qs,{value:Ks}),this.sortMapEntries=typeof a=="function"?a:a===!0?Up:null}clone(){const e=Object.create(eo.prototype,Object.getOwnPropertyDescriptors(this));return e.tags=this.tags.slice(),e}}function Fp(i,e){var c;const t=[];let n=e.directives===!0;if(e.directives!==!1&&i.directives){const l=i.directives.toString(i);l?(t.push(l),n=!0):i.directives.docStart&&(n=!0)}n&&t.push("---");const s=qf(i,e),{commentString:r}=s.options;if(i.commentBefore){t.length!==1&&t.unshift("");const l=r(i.commentBefore);t.unshift(ti(l,""))}let a=!1,o=null;if(i.contents){if(At(i.contents)){if(i.contents.spaceBefore&&n&&t.push(""),i.contents.commentBefore){const h=r(i.contents.commentBefore);t.push(ti(h,""))}s.forceBlockIndent=!!i.comment,o=i.contents.comment}const l=o?void 0:()=>a=!0;let f=ks(i.contents,s,()=>o=null,l);o&&(f+=Gi(f,"",r(o))),(f[0]==="|"||f[0]===">")&&t[t.length-1]==="---"?t[t.length-1]=`--- ${f}`:t.push(f)}else t.push(ks(i.contents,s));if((c=i.directives)!=null&&c.docEnd)if(i.comment){const l=r(i.comment);l.includes(`
`)?(t.push("..."),t.push(ti(l,""))):t.push(`... ${l}`)}else t.push("...");else{let l=i.comment;l&&a&&(l=l.replace(/^\n+/,"")),l&&((!a||o)&&t[t.length-1]!==""&&t.push(""),t.push(ti(r(l),"")))}return t.join(`
`)+`
`}class Ys{constructor(e,t,n){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,Mn,{value:ol});let s=null;typeof t=="function"||Array.isArray(t)?s=t:n===void 0&&t&&(n=t,t=void 0);const r=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},n);this.options=r;let{version:a}=r;n!=null&&n._directives?(this.directives=n._directives.atDocument(),this.directives.yaml.explicit&&(a=this.directives.yaml.version)):this.directives=new nn({version:a}),this.setSchema(a,n),this.contents=e===void 0?null:this.createNode(e,s,n)}clone(){const e=Object.create(Ys.prototype,{[Mn]:{value:ol}});return e.commentBefore=this.commentBefore,e.comment=this.comment,e.errors=this.errors.slice(),e.warnings=this.warnings.slice(),e.options=Object.assign({},this.options),this.directives&&(e.directives=this.directives.clone()),e.schema=this.schema.clone(),e.contents=At(this.contents)?this.contents.clone(e.schema):this.contents,this.range&&(e.range=this.range.slice()),e}add(e){rs(this.contents)&&this.contents.add(e)}addIn(e,t){rs(this.contents)&&this.contents.addIn(e,t)}createAlias(e,t){if(!e.anchor){const n=zf(this);e.anchor=!t||n.has(t)?Hf(t||"a",n):t}return new qa(e.anchor)}createNode(e,t,n){let s;if(typeof t=="function")e=t.call({"":e},"",e),s=t;else if(Array.isArray(t)){const _=R=>typeof R=="number"||R instanceof String||R instanceof Number,g=t.filter(_).map(String);g.length>0&&(t=t.concat(g)),s=t}else n===void 0&&t&&(n=t,t=void 0);const{aliasDuplicateObjects:r,anchorPrefix:a,flow:o,keepUndefined:c,onTagObj:l,tag:f}=n??{},{onAnchor:h,setAnchors:d,sourceObjects:p}=hp(this,a||"a"),x={aliasDuplicateObjects:r??!0,keepUndefined:c??!1,onAnchor:h,onTagObj:l,replacer:s,schema:this.schema,sourceObjects:p},y=_r(e,f,x);return o&&Tt(y)&&(y.flow=!0),d(),y}createPair(e,t,n={}){const s=this.createNode(e,null,n),r=this.createNode(t,null,n);return new en(s,r)}delete(e){return rs(this.contents)?this.contents.delete(e):!1}deleteIn(e){return hr(e)?this.contents==null?!1:(this.contents=null,!0):rs(this.contents)?this.contents.deleteIn(e):!1}get(e,t){return Tt(this.contents)?this.contents.get(e,t):void 0}getIn(e,t){return hr(e)?!t&&xt(this.contents)?this.contents.value:this.contents:Tt(this.contents)?this.contents.getIn(e,t):void 0}has(e){return Tt(this.contents)?this.contents.has(e):!1}hasIn(e){return hr(e)?this.contents!==void 0:Tt(this.contents)?this.contents.hasIn(e):!1}set(e,t){this.contents==null?this.contents=Da(this.schema,[e],t):rs(this.contents)&&this.contents.set(e,t)}setIn(e,t){hr(e)?this.contents=t:this.contents==null?this.contents=Da(this.schema,Array.from(e),t):rs(this.contents)&&this.contents.setIn(e,t)}setSchema(e,t={}){typeof e=="number"&&(e=String(e));let n;switch(e){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new nn({version:"1.1"}),n={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=e:this.directives=new nn({version:e}),n={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,n=null;break;default:{const s=JSON.stringify(e);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${s}`)}}if(t.schema instanceof Object)this.schema=t.schema;else if(n)this.schema=new eo(Object.assign(n,t));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:e,jsonArg:t,mapAsMap:n,maxAliasCount:s,onAnchor:r,reviver:a}={}){const o={anchors:new Map,doc:this,keep:!e,mapAsMap:n===!0,mapKeyWarned:!1,maxAliasCount:typeof s=="number"?s:100},c=bn(this.contents,t??"",o);if(typeof r=="function")for(const{count:l,res:f}of o.anchors.values())r(f,l);return typeof a=="function"?As(a,{"":c},"",c):c}toJSON(e,t){return this.toJS({json:!0,jsonArg:e,mapAsMap:!1,onAnchor:t})}toString(e={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in e&&(!Number.isInteger(e.indent)||Number(e.indent)<=0)){const t=JSON.stringify(e.indent);throw new Error(`"indent" option must be a positive integer, not ${t}`)}return Fp(this,e)}}function rs(i){if(Tt(i))return!0;throw new Error("Expected a YAML collection as document contents")}class vc extends Error{constructor(e,t,n,s){super(),this.name=e,this.code=n,this.message=s,this.pos=t}}class Wi extends vc{constructor(e,t,n){super("YAMLParseError",e,t,n)}}class hh extends vc{constructor(e,t,n){super("YAMLWarning",e,t,n)}}const Na=(i,e)=>t=>{if(t.pos[0]===-1)return;t.linePos=t.pos.map(o=>e.linePos(o));const{line:n,col:s}=t.linePos[0];t.message+=` at line ${n}, column ${s}`;let r=s-1,a=i.substring(e.lineStarts[n-1],e.lineStarts[n]).replace(/[\n\r]+$/,"");if(r>=60&&a.length>80){const o=Math.min(r-39,a.length-79);a="…"+a.substring(o),r-=o-1}if(a.length>80&&(a=a.substring(0,79)+"…"),n>1&&/^ *$/.test(a.substring(0,r))){let o=i.substring(e.lineStarts[n-2],e.lineStarts[n-1]);o.length>80&&(o=o.substring(0,79)+`…
`),a=o+a}if(/[^ ]/.test(a)){let o=1;const c=t.linePos[1];(c==null?void 0:c.line)===n&&c.col>s&&(o=Math.max(1,Math.min(c.col-s,80-r)));const l=" ".repeat(r)+"^".repeat(o);t.message+=`:

${a}
${l}
`}};function Us(i,{flow:e,indicator:t,next:n,offset:s,onError:r,parentIndent:a,startOnNewline:o}){let c=!1,l=o,f=o,h="",d="",p=!1,x=!1,y=null,_=null,g=null,R=null,A=null,b=null,L=null;for(const D of i)switch(x&&(D.type!=="space"&&D.type!=="newline"&&D.type!=="comma"&&r(D.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),x=!1),y&&(l&&D.type!=="comment"&&D.type!=="newline"&&r(y,"TAB_AS_INDENT","Tabs are not allowed as indentation"),y=null),D.type){case"space":!e&&(t!=="doc-start"||(n==null?void 0:n.type)!=="flow-collection")&&D.source.includes("	")&&(y=D),f=!0;break;case"comment":{f||r(D,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const S=D.source.substring(1)||" ";h?h+=d+S:h=S,d="",l=!1;break}case"newline":l?h?h+=D.source:(!b||t!=="seq-item-ind")&&(c=!0):d+=D.source,l=!0,p=!0,(_||g)&&(R=D),f=!0;break;case"anchor":_&&r(D,"MULTIPLE_ANCHORS","A node can have at most one anchor"),D.source.endsWith(":")&&r(D.offset+D.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),_=D,L??(L=D.offset),l=!1,f=!1,x=!0;break;case"tag":{g&&r(D,"MULTIPLE_TAGS","A node can have at most one tag"),g=D,L??(L=D.offset),l=!1,f=!1,x=!0;break}case t:(_||g)&&r(D,"BAD_PROP_ORDER",`Anchors and tags must be after the ${D.source} indicator`),b&&r(D,"UNEXPECTED_TOKEN",`Unexpected ${D.source} in ${e??"collection"}`),b=D,l=t==="seq-item-ind"||t==="explicit-key-ind",f=!1;break;case"comma":if(e){A&&r(D,"UNEXPECTED_TOKEN",`Unexpected , in ${e}`),A=D,l=!1,f=!1;break}default:r(D,"UNEXPECTED_TOKEN",`Unexpected ${D.type} token`),l=!1,f=!1}const I=i[i.length-1],C=I?I.offset+I.source.length:s;return x&&n&&n.type!=="space"&&n.type!=="newline"&&n.type!=="comma"&&(n.type!=="scalar"||n.source!=="")&&r(n.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),y&&(l&&y.indent<=a||(n==null?void 0:n.type)==="block-map"||(n==null?void 0:n.type)==="block-seq")&&r(y,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:A,found:b,spaceBefore:c,comment:h,hasNewline:p,anchor:_,tag:g,newlineAfterProp:R,end:C,start:L??C}}function vr(i){if(!i)return null;switch(i.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(i.source.includes(`
`))return!0;if(i.end){for(const e of i.end)if(e.type==="newline")return!0}return!1;case"flow-collection":for(const e of i.items){for(const t of e.start)if(t.type==="newline")return!0;if(e.sep){for(const t of e.sep)if(t.type==="newline")return!0}if(vr(e.key)||vr(e.value))return!0}return!1;default:return!0}}function fl(i,e,t){if((e==null?void 0:e.type)==="flow-collection"){const n=e.end[0];n.indent===i&&(n.source==="]"||n.source==="}")&&vr(e)&&t(n,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function dh(i,e,t){const{uniqueKeys:n}=i.options;if(n===!1)return!1;const s=typeof n=="function"?n:(r,a)=>r===a||xt(r)&&xt(a)&&r.value===a.value;return e.some(r=>s(r.key,t))}const ru="All mapping items must start at the same column";function Bp({composeNode:i,composeEmptyNode:e},t,n,s,r){var f;const a=(r==null?void 0:r.nodeClass)??gn,o=new a(t.schema);t.atRoot&&(t.atRoot=!1);let c=n.offset,l=null;for(const h of n.items){const{start:d,key:p,sep:x,value:y}=h,_=Us(d,{indicator:"explicit-key-ind",next:p??(x==null?void 0:x[0]),offset:c,onError:s,parentIndent:n.indent,startOnNewline:!0}),g=!_.found;if(g){if(p&&(p.type==="block-seq"?s(c,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in p&&p.indent!==n.indent&&s(c,"BAD_INDENT",ru)),!_.anchor&&!_.tag&&!x){l=_.end,_.comment&&(o.comment?o.comment+=`
`+_.comment:o.comment=_.comment);continue}(_.newlineAfterProp||vr(p))&&s(p??d[d.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else((f=_.found)==null?void 0:f.indent)!==n.indent&&s(c,"BAD_INDENT",ru);t.atKey=!0;const R=_.end,A=p?i(t,p,_,s):e(t,R,d,null,_,s);t.schema.compat&&fl(n.indent,p,s),t.atKey=!1,dh(t,o.items,A)&&s(R,"DUPLICATE_KEY","Map keys must be unique");const b=Us(x??[],{indicator:"map-value-ind",next:y,offset:A.range[2],onError:s,parentIndent:n.indent,startOnNewline:!p||p.type==="block-scalar"});if(c=b.end,b.found){g&&((y==null?void 0:y.type)==="block-map"&&!b.hasNewline&&s(c,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),t.options.strict&&_.start<b.found.offset-1024&&s(A.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const L=y?i(t,y,b,s):e(t,c,x,null,b,s);t.schema.compat&&fl(n.indent,y,s),c=L.range[2];const I=new en(A,L);t.options.keepSourceTokens&&(I.srcToken=h),o.items.push(I)}else{g&&s(A.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),b.comment&&(A.comment?A.comment+=`
`+b.comment:A.comment=b.comment);const L=new en(A);t.options.keepSourceTokens&&(L.srcToken=h),o.items.push(L)}}return l&&l<c&&s(l,"IMPOSSIBLE","Map comment with trailing content"),o.range=[n.offset,c,l??c],o}function zp({composeNode:i,composeEmptyNode:e},t,n,s,r){const a=(r==null?void 0:r.nodeClass)??Si,o=new a(t.schema);t.atRoot&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let c=n.offset,l=null;for(const{start:f,value:h}of n.items){const d=Us(f,{indicator:"seq-item-ind",next:h,offset:c,onError:s,parentIndent:n.indent,startOnNewline:!0});if(!d.found)if(d.anchor||d.tag||h)(h==null?void 0:h.type)==="block-seq"?s(d.end,"BAD_INDENT","All sequence items must start at the same column"):s(c,"MISSING_CHAR","Sequence item without - indicator");else{l=d.end,d.comment&&(o.comment=d.comment);continue}const p=h?i(t,h,d,s):e(t,d.end,f,null,d,s);t.schema.compat&&fl(n.indent,h,s),c=p.range[2],o.items.push(p)}return o.range=[n.offset,c,l??c],o}function Rr(i,e,t,n){let s="";if(i){let r=!1,a="";for(const o of i){const{source:c,type:l}=o;switch(l){case"space":r=!0;break;case"comment":{t&&!r&&n(o,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const f=c.substring(1)||" ";s?s+=a+f:s=f,a="";break}case"newline":s&&(a+=c),r=!0;break;default:n(o,"UNEXPECTED_TOKEN",`Unexpected ${l} at node end`)}e+=c.length}}return{comment:s,offset:e}}const go="Block collections are not allowed within flow collections",_o=i=>i&&(i.type==="block-map"||i.type==="block-seq");function Hp({composeNode:i,composeEmptyNode:e},t,n,s,r){var _;const a=n.start.source==="{",o=a?"flow map":"flow sequence",c=(r==null?void 0:r.nodeClass)??(a?gn:Si),l=new c(t.schema);l.flow=!0;const f=t.atRoot;f&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let h=n.offset+n.start.source.length;for(let g=0;g<n.items.length;++g){const R=n.items[g],{start:A,key:b,sep:L,value:I}=R,C=Us(A,{flow:o,indicator:"explicit-key-ind",next:b??(L==null?void 0:L[0]),offset:h,onError:s,parentIndent:n.indent,startOnNewline:!1});if(!C.found){if(!C.anchor&&!C.tag&&!L&&!I){g===0&&C.comma?s(C.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${o}`):g<n.items.length-1&&s(C.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${o}`),C.comment&&(l.comment?l.comment+=`
`+C.comment:l.comment=C.comment),h=C.end;continue}!a&&t.options.strict&&vr(b)&&s(b,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(g===0)C.comma&&s(C.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${o}`);else if(C.comma||s(C.start,"MISSING_CHAR",`Missing , between ${o} items`),C.comment){let D="";e:for(const S of A)switch(S.type){case"comma":case"space":break;case"comment":D=S.source.substring(1);break e;default:break e}if(D){let S=l.items[l.items.length-1];St(S)&&(S=S.value??S.key),S.comment?S.comment+=`
`+D:S.comment=D,C.comment=C.comment.substring(D.length+1)}}if(!a&&!L&&!C.found){const D=I?i(t,I,C,s):e(t,C.end,L,null,C,s);l.items.push(D),h=D.range[2],_o(I)&&s(D.range,"BLOCK_IN_FLOW",go)}else{t.atKey=!0;const D=C.end,S=b?i(t,b,C,s):e(t,D,A,null,C,s);_o(b)&&s(S.range,"BLOCK_IN_FLOW",go),t.atKey=!1;const w=Us(L??[],{flow:o,indicator:"map-value-ind",next:I,offset:S.range[2],onError:s,parentIndent:n.indent,startOnNewline:!1});if(w.found){if(!a&&!C.found&&t.options.strict){if(L)for(const B of L){if(B===w.found)break;if(B.type==="newline"){s(B,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}C.start<w.found.offset-1024&&s(w.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else I&&("source"in I&&((_=I.source)==null?void 0:_[0])===":"?s(I,"MISSING_CHAR",`Missing space after : in ${o}`):s(w.start,"MISSING_CHAR",`Missing , or : between ${o} items`));const N=I?i(t,I,w,s):w.found?e(t,w.end,L,null,w,s):null;N?_o(I)&&s(N.range,"BLOCK_IN_FLOW",go):w.comment&&(S.comment?S.comment+=`
`+w.comment:S.comment=w.comment);const F=new en(S,N);if(t.options.keepSourceTokens&&(F.srcToken=R),a){const B=l;dh(t,B.items,S)&&s(D,"DUPLICATE_KEY","Map keys must be unique"),B.items.push(F)}else{const B=new gn(t.schema);B.flow=!0,B.items.push(F);const $=(N??S).range;B.range=[S.range[0],$[1],$[2]],l.items.push(B)}h=N?N.range[2]:w.end}}const d=a?"}":"]",[p,...x]=n.end;let y=h;if((p==null?void 0:p.source)===d)y=p.offset+p.source.length;else{const g=o[0].toUpperCase()+o.substring(1),R=f?`${g} must end with a ${d}`:`${g} in block collection must be sufficiently indented and end with a ${d}`;s(h,f?"MISSING_CHAR":"BAD_INDENT",R),p&&p.source.length!==1&&x.unshift(p)}if(x.length>0){const g=Rr(x,y,t.options.strict,s);g.comment&&(l.comment?l.comment+=`
`+g.comment:l.comment=g.comment),l.range=[n.offset,y,g.offset]}else l.range=[n.offset,y,y];return l}function vo(i,e,t,n,s,r){const a=t.type==="block-map"?Bp(i,e,t,n,r):t.type==="block-seq"?zp(i,e,t,n,r):Hp(i,e,t,n,r),o=a.constructor;return s==="!"||s===o.tagName?(a.tag=o.tagName,a):(s&&(a.tag=s),a)}function Gp(i,e,t,n,s){var d;const r=n.tag,a=r?e.directives.tagName(r.source,p=>s(r,"TAG_RESOLVE_FAILED",p)):null;if(t.type==="block-seq"){const{anchor:p,newlineAfterProp:x}=n,y=p&&r?p.offset>r.offset?p:r:p??r;y&&(!x||x.offset<y.offset)&&s(y,"MISSING_CHAR","Missing newline after block sequence props")}const o=t.type==="block-map"?"map":t.type==="block-seq"?"seq":t.start.source==="{"?"map":"seq";if(!r||!a||a==="!"||a===gn.tagName&&o==="map"||a===Si.tagName&&o==="seq")return vo(i,e,t,s,a);let c=e.schema.tags.find(p=>p.tag===a&&p.collection===o);if(!c){const p=e.schema.knownTags[a];if((p==null?void 0:p.collection)===o)e.schema.tags.push(Object.assign({},p,{default:!1})),c=p;else return p?s(r,"BAD_COLLECTION_TYPE",`${p.tag} used for ${o} collection, but expects ${p.collection??"scalar"}`,!0):s(r,"TAG_RESOLVE_FAILED",`Unresolved tag: ${a}`,!0),vo(i,e,t,s,a)}const l=vo(i,e,t,s,a,c),f=((d=c.resolve)==null?void 0:d.call(c,l,p=>s(r,"TAG_RESOLVE_FAILED",p),e.options))??l,h=At(f)?f:new Ke(f);return h.range=l.range,h.tag=a,c!=null&&c.format&&(h.format=c.format),h}function ph(i,e,t){const n=e.offset,s=Vp(e,i.options.strict,t);if(!s)return{value:"",type:null,comment:"",range:[n,n,n]};const r=s.mode===">"?Ke.BLOCK_FOLDED:Ke.BLOCK_LITERAL,a=e.source?Wp(e.source):[];let o=a.length;for(let y=a.length-1;y>=0;--y){const _=a[y][1];if(_===""||_==="\r")o=y;else break}if(o===0){const y=s.chomp==="+"&&a.length>0?`
`.repeat(Math.max(1,a.length-1)):"";let _=n+s.length;return e.source&&(_+=e.source.length),{value:y,type:r,comment:s.comment,range:[n,_,_]}}let c=e.indent+s.indent,l=e.offset+s.length,f=0;for(let y=0;y<o;++y){const[_,g]=a[y];if(g===""||g==="\r")s.indent===0&&_.length>c&&(c=_.length);else{_.length<c&&t(l+_.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),s.indent===0&&(c=_.length),f=y,c===0&&!i.atRoot&&t(l,"BAD_INDENT","Block scalar values in collections must be indented");break}l+=_.length+g.length+1}for(let y=a.length-1;y>=o;--y)a[y][0].length>c&&(o=y+1);let h="",d="",p=!1;for(let y=0;y<f;++y)h+=a[y][0].slice(c)+`
`;for(let y=f;y<o;++y){let[_,g]=a[y];l+=_.length+g.length+1;const R=g[g.length-1]==="\r";if(R&&(g=g.slice(0,-1)),g&&_.length<c){const b=`Block scalar lines must not be less indented than their ${s.indent?"explicit indentation indicator":"first line"}`;t(l-g.length-(R?2:1),"BAD_INDENT",b),_=""}r===Ke.BLOCK_LITERAL?(h+=d+_.slice(c)+g,d=`
`):_.length>c||g[0]==="	"?(d===" "?d=`
`:!p&&d===`
`&&(d=`

`),h+=d+_.slice(c)+g,d=`
`,p=!0):g===""?d===`
`?h+=`
`:d=`
`:(h+=d+g,d=" ",p=!1)}switch(s.chomp){case"-":break;case"+":for(let y=o;y<a.length;++y)h+=`
`+a[y][0].slice(c);h[h.length-1]!==`
`&&(h+=`
`);break;default:h+=`
`}const x=n+s.length+e.source.length;return{value:h,type:r,comment:s.comment,range:[n,x,x]}}function Vp({offset:i,props:e},t,n){if(e[0].type!=="block-scalar-header")return n(e[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:s}=e[0],r=s[0];let a=0,o="",c=-1;for(let d=1;d<s.length;++d){const p=s[d];if(!o&&(p==="-"||p==="+"))o=p;else{const x=Number(p);!a&&x?a=x:c===-1&&(c=i+d)}}c!==-1&&n(c,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${s}`);let l=!1,f="",h=s.length;for(let d=1;d<e.length;++d){const p=e[d];switch(p.type){case"space":l=!0;case"newline":h+=p.source.length;break;case"comment":t&&!l&&n(p,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),h+=p.source.length,f=p.source.substring(1);break;case"error":n(p,"UNEXPECTED_TOKEN",p.message),h+=p.source.length;break;default:{const x=`Unexpected token in block scalar header: ${p.type}`;n(p,"UNEXPECTED_TOKEN",x);const y=p.source;y&&typeof y=="string"&&(h+=y.length)}}}return{mode:r,indent:a,chomp:o,comment:f,length:h}}function Wp(i){const e=i.split(/\n( *)/),t=e[0],n=t.match(/^( *)/),r=[n!=null&&n[1]?[n[1],t.slice(n[1].length)]:["",t]];for(let a=1;a<e.length;a+=2)r.push([e[a],e[a+1]]);return r}function mh(i,e,t){const{offset:n,type:s,source:r,end:a}=i;let o,c;const l=(d,p,x)=>t(n+d,p,x);switch(s){case"scalar":o=Ke.PLAIN,c=qp(r,l);break;case"single-quoted-scalar":o=Ke.QUOTE_SINGLE,c=jp(r,l);break;case"double-quoted-scalar":o=Ke.QUOTE_DOUBLE,c=Xp(r,l);break;default:return t(i,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${s}`),{value:"",type:null,comment:"",range:[n,n+r.length,n+r.length]}}const f=n+r.length,h=Rr(a,f,e,t);return{value:c,type:o,comment:h.comment,range:[n,f,h.offset]}}function qp(i,e){let t="";switch(i[0]){case"	":t="a tab character";break;case",":t="flow indicator character ,";break;case"%":t="directive indicator character %";break;case"|":case">":{t=`block scalar indicator ${i[0]}`;break}case"@":case"`":{t=`reserved character ${i[0]}`;break}}return t&&e(0,"BAD_SCALAR_START",`Plain value cannot start with ${t}`),gh(i)}function jp(i,e){return(i[i.length-1]!=="'"||i.length===1)&&e(i.length,"MISSING_CHAR","Missing closing 'quote"),gh(i.slice(1,-1)).replace(/''/g,"'")}function gh(i){const e=/(.*?)\r?\n/sy;let t=e.exec(i);if(!t)return i;let n,s;try{n=new RegExp("(?<![ 	])[ 	]+$"),s=new RegExp("^[ 	]+|(?<![ 	])[ 	]+$","g")}catch{n=/[ \t]+$/,s=/^[ \t]+|[ \t]+$/g}let r=t[1].replace(n,""),a=" ",o=e.lastIndex;for(;t=e.exec(i);){const l=t[1].replace(s,"");l===""?a===`
`?r+=a:a=`
`:(r+=a+l,a=" "),o=e.lastIndex}const c=/[ \t]*(.*)/sy;return c.lastIndex=o,t=c.exec(i),r+a+((t==null?void 0:t[1])??"")}function Xp(i,e){let t="";for(let n=1;n<i.length-1;++n){const s=i[n];if(!(s==="\r"&&i[n+1]===`
`))if(s===`
`){const{fold:r,offset:a}=$p(i,n);t+=r,n=a}else if(s==="\\"){let r=i[++n];const a=Kp[r];if(a)t+=a;else if(r===`
`)for(r=i[n+1];r===" "||r==="	";)r=i[++n+1];else if(r==="\r"&&i[n+1]===`
`)for(r=i[++n+1];r===" "||r==="	";)r=i[++n+1];else if(r==="x"||r==="u"||r==="U"){const o=r==="x"?2:r==="u"?4:8;t+=Yp(i,n+1,o,e),n+=o}else{const o=i.substr(n-1,2);e(n-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),t+=o}}else if(s===" "||s==="	"){const r=n;let a=i[n+1];for(;a===" "||a==="	";)a=i[++n+1];a!==`
`&&!(a==="\r"&&i[n+2]===`
`)&&(t+=n>r?i.slice(r,n+1):s)}else t+=s}return(i[i.length-1]!=='"'||i.length===1)&&e(i.length,"MISSING_CHAR",'Missing closing "quote'),t}function $p(i,e){let t="",n=i[e+1];for(;(n===" "||n==="	"||n===`
`||n==="\r")&&!(n==="\r"&&i[e+2]!==`
`);)n===`
`&&(t+=`
`),e+=1,n=i[e+1];return t||(t=" "),{fold:t,offset:e}}const Kp={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function Yp(i,e,t,n){const s=i.substr(e,t),a=s.length===t&&/^[0-9a-fA-F]+$/.test(s)?parseInt(s,16):NaN;try{return String.fromCodePoint(a)}catch{const o=i.substr(e-2,t+2);return n(e-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),o}}function _h(i,e,t,n){const{value:s,type:r,comment:a,range:o}=e.type==="block-scalar"?ph(i,e,n):mh(e,i.options.strict,n),c=t?i.directives.tagName(t.source,h=>n(t,"TAG_RESOLVE_FAILED",h)):null;let l;i.options.stringKeys&&i.atKey?l=i.schema[Vn]:c?l=Jp(i.schema,s,c,t,n):e.type==="scalar"?l=Zp(i,s,e,n):l=i.schema[Vn];let f;try{const h=l.resolve(s,d=>n(t??e,"TAG_RESOLVE_FAILED",d),i.options);f=xt(h)?h:new Ke(h)}catch(h){const d=h instanceof Error?h.message:String(h);n(t??e,"TAG_RESOLVE_FAILED",d),f=new Ke(s)}return f.range=o,f.source=s,r&&(f.type=r),c&&(f.tag=c),l.format&&(f.format=l.format),a&&(f.comment=a),f}function Jp(i,e,t,n,s){var o;if(t==="!")return i[Vn];const r=[];for(const c of i.tags)if(!c.collection&&c.tag===t)if(c.default&&c.test)r.push(c);else return c;for(const c of r)if((o=c.test)!=null&&o.test(e))return c;const a=i.knownTags[t];return a&&!a.collection?(i.tags.push(Object.assign({},a,{default:!1,test:void 0})),a):(s(n,"TAG_RESOLVE_FAILED",`Unresolved tag: ${t}`,t!=="tag:yaml.org,2002:str"),i[Vn])}function Zp({atKey:i,directives:e,schema:t},n,s,r){const a=t.tags.find(o=>{var c;return(o.default===!0||i&&o.default==="key")&&((c=o.test)==null?void 0:c.test(n))})||t[Vn];if(t.compat){const o=t.compat.find(c=>{var l;return c.default&&((l=c.test)==null?void 0:l.test(n))})??t[Vn];if(a.tag!==o.tag){const c=e.tagString(a.tag),l=e.tagString(o.tag),f=`Value may be parsed as either ${c} or ${l}`;r(s,"TAG_RESOLVE_FAILED",f,!0)}}return a}function Qp(i,e,t){if(e){t??(t=e.length);for(let n=t-1;n>=0;--n){let s=e[n];switch(s.type){case"space":case"comment":case"newline":i-=s.source.length;continue}for(s=e[++n];(s==null?void 0:s.type)==="space";)i+=s.source.length,s=e[++n];break}}return i}const em={composeNode:vh,composeEmptyNode:yc};function vh(i,e,t,n){const s=i.atKey,{spaceBefore:r,comment:a,anchor:o,tag:c}=t;let l,f=!0;switch(e.type){case"alias":l=tm(i,e,n),(o||c)&&n(e,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":l=_h(i,e,c,n),o&&(l.anchor=o.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":try{l=Gp(em,i,e,t,n),o&&(l.anchor=o.source.substring(1))}catch(h){const d=h instanceof Error?h.message:String(h);n(e,"RESOURCE_EXHAUSTION",d)}break;default:{const h=e.type==="error"?e.message:`Unsupported token (type: ${e.type})`;n(e,"UNEXPECTED_TOKEN",h),f=!1}}return l??(l=yc(i,e.offset,void 0,null,t,n)),o&&l.anchor===""&&n(o,"BAD_ALIAS","Anchor cannot be an empty string"),s&&i.options.stringKeys&&(!xt(l)||typeof l.value!="string"||l.tag&&l.tag!=="tag:yaml.org,2002:str")&&n(c??e,"NON_STRING_KEY","With stringKeys, all keys must be strings"),r&&(l.spaceBefore=!0),a&&(e.type==="scalar"&&e.source===""?l.comment=a:l.commentBefore=a),i.options.keepSourceTokens&&f&&(l.srcToken=e),l}function yc(i,e,t,n,{spaceBefore:s,comment:r,anchor:a,tag:o,end:c},l){const f={type:"scalar",offset:Qp(e,t,n),indent:-1,source:""},h=_h(i,f,o,l);return a&&(h.anchor=a.source.substring(1),h.anchor===""&&l(a,"BAD_ALIAS","Anchor cannot be an empty string")),s&&(h.spaceBefore=!0),r&&(h.comment=r,h.range[2]=c),h}function tm({options:i},{offset:e,source:t,end:n},s){const r=new qa(t.substring(1));r.source===""&&s(e,"BAD_ALIAS","Alias cannot be an empty string"),r.source.endsWith(":")&&s(e+t.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const a=e+t.length,o=Rr(n,a,i.strict,s);return r.range=[e,a,o.offset],o.comment&&(r.comment=o.comment),r}function nm(i,e,{offset:t,start:n,value:s,end:r},a){const o=Object.assign({_directives:e},i),c=new Ys(void 0,o),l={atKey:!1,atRoot:!0,directives:c.directives,options:c.options,schema:c.schema},f=Us(n,{indicator:"doc-start",next:s??(r==null?void 0:r[0]),offset:t,onError:a,parentIndent:0,startOnNewline:!0});f.found&&(c.directives.docStart=!0,s&&(s.type==="block-map"||s.type==="block-seq")&&!f.hasNewline&&a(f.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),c.contents=s?vh(l,s,f,a):yc(l,f.end,n,null,f,a);const h=c.contents.range[2],d=Rr(r,h,!1,a);return d.comment&&(c.comment=d.comment),c.range=[t,h,d.offset],c}function ar(i){if(typeof i=="number")return[i,i+1];if(Array.isArray(i))return i.length===2?i:[i[0],i[1]];const{offset:e,source:t}=i;return[e,e+(typeof t=="string"?t.length:1)]}function au(i){var s;let e="",t=!1,n=!1;for(let r=0;r<i.length;++r){const a=i[r];switch(a[0]){case"#":e+=(e===""?"":n?`

`:`
`)+(a.substring(1)||" "),t=!0,n=!1;break;case"%":((s=i[r+1])==null?void 0:s[0])!=="#"&&(r+=1),t=!1;break;default:t||(n=!0),t=!1}}return{comment:e,afterEmptyLine:n}}class xc{constructor(e={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(t,n,s,r)=>{const a=ar(t);r?this.warnings.push(new hh(a,n,s)):this.errors.push(new Wi(a,n,s))},this.directives=new nn({version:e.version||"1.2"}),this.options=e}decorate(e,t){const{comment:n,afterEmptyLine:s}=au(this.prelude);if(n){const r=e.contents;if(t)e.comment=e.comment?`${e.comment}
${n}`:n;else if(s||e.directives.docStart||!r)e.commentBefore=n;else if(Tt(r)&&!r.flow&&r.items.length>0){let a=r.items[0];St(a)&&(a=a.key);const o=a.commentBefore;a.commentBefore=o?`${n}
${o}`:n}else{const a=r.commentBefore;r.commentBefore=a?`${n}
${a}`:n}}if(t){for(let r=0;r<this.errors.length;++r)e.errors.push(this.errors[r]);for(let r=0;r<this.warnings.length;++r)e.warnings.push(this.warnings[r])}else e.errors=this.errors,e.warnings=this.warnings;this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:au(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(e,t=!1,n=-1){for(const s of e)yield*this.next(s);yield*this.end(t,n)}*next(e){switch(e.type){case"directive":this.directives.add(e.source,(t,n,s)=>{const r=ar(e);r[0]+=t,this.onError(r,"BAD_DIRECTIVE",n,s)}),this.prelude.push(e.source),this.atDirectives=!0;break;case"document":{const t=nm(this.options,this.directives,e,this.onError);this.atDirectives&&!t.directives.docStart&&this.onError(e,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(t,!1),this.doc&&(yield this.doc),this.doc=t,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(e.source);break;case"error":{const t=e.source?`${e.message}: ${JSON.stringify(e.source)}`:e.message,n=new Wi(ar(e),"UNEXPECTED_TOKEN",t);this.atDirectives||!this.doc?this.errors.push(n):this.doc.errors.push(n);break}case"doc-end":{if(!this.doc){const n="Unexpected doc-end without preceding document";this.errors.push(new Wi(ar(e),"UNEXPECTED_TOKEN",n));break}this.doc.directives.docEnd=!0;const t=Rr(e.end,e.offset+e.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),t.comment){const n=this.doc.comment;this.doc.comment=n?`${n}
${t.comment}`:t.comment}this.doc.range[2]=t.offset;break}default:this.errors.push(new Wi(ar(e),"UNEXPECTED_TOKEN",`Unsupported token ${e.type}`))}}*end(e=!1,t=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(e){const n=Object.assign({_directives:this.directives},this.options),s=new Ys(void 0,n);this.atDirectives&&this.onError(t,"MISSING_CHAR","Missing directives-end indicator line"),s.range=[0,t,t],this.decorate(s,!1),yield s}}}function im(i,e=!0,t){if(i){const n=(s,r,a)=>{const o=typeof s=="number"?s:Array.isArray(s)?s[0]:s.offset;if(t)t(o,r,a);else throw new Wi([o,o+1],r,a)};switch(i.type){case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return mh(i,e,n);case"block-scalar":return ph({options:{strict:e}},i,n)}}return null}function sm(i,e){const{implicitKey:t=!1,indent:n,inFlow:s=!1,offset:r=-1,type:a="PLAIN"}=e,o=Tr({type:a,value:i},{implicitKey:t,indent:n>0?" ".repeat(n):"",inFlow:s,options:{blockQuote:!0,lineWidth:-1}}),c=e.end??[{type:"newline",offset:-1,indent:n,source:`
`}];switch(o[0]){case"|":case">":{const l=o.indexOf(`
`),f=o.substring(0,l),h=o.substring(l+1)+`
`,d=[{type:"block-scalar-header",offset:r,indent:n,source:f}];return yh(d,c)||d.push({type:"newline",offset:-1,indent:n,source:`
`}),{type:"block-scalar",offset:r,indent:n,props:d,source:h}}case'"':return{type:"double-quoted-scalar",offset:r,indent:n,source:o,end:c};case"'":return{type:"single-quoted-scalar",offset:r,indent:n,source:o,end:c};default:return{type:"scalar",offset:r,indent:n,source:o,end:c}}}function rm(i,e,t={}){let{afterKey:n=!1,implicitKey:s=!1,inFlow:r=!1,type:a}=t,o="indent"in i?i.indent:null;if(n&&typeof o=="number"&&(o+=2),!a)switch(i.type){case"single-quoted-scalar":a="QUOTE_SINGLE";break;case"double-quoted-scalar":a="QUOTE_DOUBLE";break;case"block-scalar":{const l=i.props[0];if(l.type!=="block-scalar-header")throw new Error("Invalid block scalar header");a=l.source[0]===">"?"BLOCK_FOLDED":"BLOCK_LITERAL";break}default:a="PLAIN"}const c=Tr({type:a,value:e},{implicitKey:s||o===null,indent:o!==null&&o>0?" ".repeat(o):"",inFlow:r,options:{blockQuote:!0,lineWidth:-1}});switch(c[0]){case"|":case">":am(i,c);break;case'"':yo(i,c,"double-quoted-scalar");break;case"'":yo(i,c,"single-quoted-scalar");break;default:yo(i,c,"scalar")}}function am(i,e){const t=e.indexOf(`
`),n=e.substring(0,t),s=e.substring(t+1)+`
`;if(i.type==="block-scalar"){const r=i.props[0];if(r.type!=="block-scalar-header")throw new Error("Invalid block scalar header");r.source=n,i.source=s}else{const{offset:r}=i,a="indent"in i?i.indent:-1,o=[{type:"block-scalar-header",offset:r,indent:a,source:n}];yh(o,"end"in i?i.end:void 0)||o.push({type:"newline",offset:-1,indent:a,source:`
`});for(const c of Object.keys(i))c!=="type"&&c!=="offset"&&delete i[c];Object.assign(i,{type:"block-scalar",indent:a,props:o,source:s})}}function yh(i,e){if(e)for(const t of e)switch(t.type){case"space":case"comment":i.push(t);break;case"newline":return i.push(t),!0}return!1}function yo(i,e,t){switch(i.type){case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":i.type=t,i.source=e;break;case"block-scalar":{const n=i.props.slice(1);let s=e.length;i.props[0].type==="block-scalar-header"&&(s-=i.props[0].source.length);for(const r of n)r.offset+=s;delete i.props,Object.assign(i,{type:t,source:e,end:n});break}case"block-map":case"block-seq":{const s={type:"newline",offset:i.offset+e.length,indent:i.indent,source:`
`};delete i.items,Object.assign(i,{type:t,source:e,end:[s]});break}default:{const n="indent"in i?i.indent:-1,s="end"in i&&Array.isArray(i.end)?i.end.filter(r=>r.type==="space"||r.type==="comment"||r.type==="newline"):[];for(const r of Object.keys(i))r!=="type"&&r!=="offset"&&delete i[r];Object.assign(i,{type:t,indent:n,source:e,end:s})}}}const om=i=>"type"in i?ka(i):wa(i);function ka(i){switch(i.type){case"block-scalar":{let e="";for(const t of i.props)e+=ka(t);return e+i.source}case"block-map":case"block-seq":{let e="";for(const t of i.items)e+=wa(t);return e}case"flow-collection":{let e=i.start.source;for(const t of i.items)e+=wa(t);for(const t of i.end)e+=t.source;return e}case"document":{let e=wa(i);if(i.end)for(const t of i.end)e+=t.source;return e}default:{let e=i.source;if("end"in i&&i.end)for(const t of i.end)e+=t.source;return e}}}function wa({start:i,key:e,sep:t,value:n}){let s="";for(const r of i)s+=r.source;if(e&&(s+=ka(e)),t)for(const r of t)s+=r.source;return n&&(s+=ka(n)),s}const hl=Symbol("break visit"),lm=Symbol("skip children"),xh=Symbol("remove item");function $i(i,e){"type"in i&&i.type==="document"&&(i={start:i.start,value:i.value}),bh(Object.freeze([]),i,e)}$i.BREAK=hl;$i.SKIP=lm;$i.REMOVE=xh;$i.itemAtPath=(i,e)=>{let t=i;for(const[n,s]of e){const r=t==null?void 0:t[n];if(r&&"items"in r)t=r.items[s];else return}return t};$i.parentCollection=(i,e)=>{const t=$i.itemAtPath(i,e.slice(0,-1)),n=e[e.length-1][0],s=t==null?void 0:t[n];if(s&&"items"in s)return s;throw new Error("Parent collection not found")};function bh(i,e,t){let n=t(e,i);if(typeof n=="symbol")return n;for(const s of["key","value"]){const r=e[s];if(r&&"items"in r){for(let a=0;a<r.items.length;++a){const o=bh(Object.freeze(i.concat([[s,a]])),r.items[a],t);if(typeof o=="number")a=o-1;else{if(o===hl)return hl;o===xh&&(r.items.splice(a,1),a-=1)}}typeof n=="function"&&s==="key"&&(n=n(e,i))}}return typeof n=="function"?n(e,i):n}const to="\uFEFF",no="",io="",yr="",cm=i=>!!i&&"items"in i,um=i=>!!i&&(i.type==="scalar"||i.type==="single-quoted-scalar"||i.type==="double-quoted-scalar"||i.type==="block-scalar");function fm(i){switch(i){case to:return"<BOM>";case no:return"<DOC>";case io:return"<FLOW_END>";case yr:return"<SCALAR>";default:return JSON.stringify(i)}}function wh(i){switch(i){case to:return"byte-order-mark";case no:return"doc-mode";case io:return"flow-error-end";case yr:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(i[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}const hm=Object.freeze(Object.defineProperty({__proto__:null,BOM:to,DOCUMENT:no,FLOW_END:io,SCALAR:yr,createScalarToken:sm,isCollection:cm,isScalar:um,prettyToken:fm,resolveAsScalar:im,setScalarValue:rm,stringify:om,tokenType:wh,visit:$i},Symbol.toStringTag,{value:"Module"}));function Rn(i){switch(i){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const ou=new Set("0123456789ABCDEFabcdef"),dm=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),qr=new Set(",[]{}"),pm=new Set(` ,[]{}
\r	`),xo=i=>!i||pm.has(i);class Mh{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(e,t=!1){if(e){if(typeof e!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+e:e,this.lineEndPos=null}this.atEnd=!t;let n=this.next??"stream";for(;n&&(t||this.hasChars(1));)n=yield*this.parseNext(n)}atLineEnd(){let e=this.pos,t=this.buffer[e];for(;t===" "||t==="	";)t=this.buffer[++e];return!t||t==="#"||t===`
`?!0:t==="\r"?this.buffer[e+1]===`
`:!1}charAt(e){return this.buffer[this.pos+e]}continueScalar(e){let t=this.buffer[e];if(this.indentNext>0){let n=0;for(;t===" ";)t=this.buffer[++n+e];if(t==="\r"){const s=this.buffer[n+e+1];if(s===`
`||!s&&!this.atEnd)return e+n+1}return t===`
`||n>=this.indentNext||!t&&!this.atEnd?e+n:-1}if(t==="-"||t==="."){const n=this.buffer.substr(e,3);if((n==="---"||n==="...")&&Rn(this.buffer[e+3]))return-1}return e}getLine(){let e=this.lineEndPos;return(typeof e!="number"||e!==-1&&e<this.pos)&&(e=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=e),e===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[e-1]==="\r"&&(e-=1),this.buffer.substring(this.pos,e))}hasChars(e){return this.pos+e<=this.buffer.length}setNext(e){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=e,null}peek(e){return this.buffer.substr(this.pos,e)}*parseNext(e){switch(e){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let e=this.getLine();if(e===null)return this.setNext("stream");if(e[0]===to&&(yield*this.pushCount(1),e=e.substring(1)),e[0]==="%"){let t=e.length,n=e.indexOf("#");for(;n!==-1;){const r=e[n-1];if(r===" "||r==="	"){t=n-1;break}else n=e.indexOf("#",n+1)}for(;;){const r=e[t-1];if(r===" "||r==="	")t-=1;else break}const s=(yield*this.pushCount(t))+(yield*this.pushSpaces(!0));return yield*this.pushCount(e.length-s),this.pushNewline(),"stream"}if(this.atLineEnd()){const t=yield*this.pushSpaces(!0);return yield*this.pushCount(e.length-t),yield*this.pushNewline(),"stream"}return yield no,yield*this.parseLineStart()}*parseLineStart(){const e=this.charAt(0);if(!e&&!this.atEnd)return this.setNext("line-start");if(e==="-"||e==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const t=this.peek(3);if((t==="---"||t==="...")&&Rn(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,t==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!Rn(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[e,t]=this.peek(2);if(!t&&!this.atEnd)return this.setNext("block-start");if((e==="-"||e==="?"||e===":")&&Rn(t)){const n=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=n,"block-start"}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const e=this.getLine();if(e===null)return this.setNext("doc");let t=yield*this.pushIndicators();switch(e[t]){case"#":yield*this.pushCount(e.length-t);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(xo),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return t+=yield*this.parseBlockScalarHeader(),t+=yield*this.pushSpaces(!0),yield*this.pushCount(e.length-t),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let e,t,n=-1;do e=yield*this.pushNewline(),e>0?(t=yield*this.pushSpaces(!1),this.indentValue=n=t):t=0,t+=yield*this.pushSpaces(!0);while(e+t>0);const s=this.getLine();if(s===null)return this.setNext("flow");if((n!==-1&&n<this.indentNext&&s[0]!=="#"||n===0&&(s.startsWith("---")||s.startsWith("..."))&&Rn(s[3]))&&!(n===this.indentNext-1&&this.flowLevel===1&&(s[0]==="]"||s[0]==="}")))return this.flowLevel=0,yield io,yield*this.parseLineStart();let r=0;for(;s[r]===",";)r+=yield*this.pushCount(1),r+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(r+=yield*this.pushIndicators(),s[r]){case void 0:return"flow";case"#":return yield*this.pushCount(s.length-r),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(xo),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const a=this.charAt(1);if(this.flowKey||Rn(a)||a===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const e=this.charAt(0);let t=this.buffer.indexOf(e,this.pos+1);if(e==="'")for(;t!==-1&&this.buffer[t+1]==="'";)t=this.buffer.indexOf("'",t+2);else for(;t!==-1;){let r=0;for(;this.buffer[t-1-r]==="\\";)r+=1;if(r%2===0)break;t=this.buffer.indexOf('"',t+1)}const n=this.buffer.substring(0,t);let s=n.indexOf(`
`,this.pos);if(s!==-1){for(;s!==-1;){const r=this.continueScalar(s+1);if(r===-1)break;s=n.indexOf(`
`,r)}s!==-1&&(t=s-(n[s-1]==="\r"?2:1))}if(t===-1){if(!this.atEnd)return this.setNext("quoted-scalar");t=this.buffer.length}return yield*this.pushToIndex(t+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let e=this.pos;for(;;){const t=this.buffer[++e];if(t==="+")this.blockScalarKeep=!0;else if(t>"0"&&t<="9")this.blockScalarIndent=Number(t)-1;else if(t!=="-")break}return yield*this.pushUntil(t=>Rn(t)||t==="#")}*parseBlockScalar(){let e=this.pos-1,t=0,n;e:for(let r=this.pos;n=this.buffer[r];++r)switch(n){case" ":t+=1;break;case`
`:e=r,t=0;break;case"\r":{const a=this.buffer[r+1];if(!a&&!this.atEnd)return this.setNext("block-scalar");if(a===`
`)break}default:break e}if(!n&&!this.atEnd)return this.setNext("block-scalar");if(t>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=t:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{const r=this.continueScalar(e+1);if(r===-1)break;e=this.buffer.indexOf(`
`,r)}while(e!==-1);if(e===-1){if(!this.atEnd)return this.setNext("block-scalar");e=this.buffer.length}}let s=e+1;for(n=this.buffer[s];n===" ";)n=this.buffer[++s];if(n==="	"){for(;n==="	"||n===" "||n==="\r"||n===`
`;)n=this.buffer[++s];e=s-1}else if(!this.blockScalarKeep)do{let r=e-1,a=this.buffer[r];a==="\r"&&(a=this.buffer[--r]);const o=r;for(;a===" ";)a=this.buffer[--r];if(a===`
`&&r>=this.pos&&r+1+t>o)e=r;else break}while(!0);return yield yr,yield*this.pushToIndex(e+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const e=this.flowLevel>0;let t=this.pos-1,n=this.pos-1,s;for(;s=this.buffer[++n];)if(s===":"){const r=this.buffer[n+1];if(Rn(r)||e&&qr.has(r))break;t=n}else if(Rn(s)){let r=this.buffer[n+1];if(s==="\r"&&(r===`
`?(n+=1,s=`
`,r=this.buffer[n+1]):t=n),r==="#"||e&&qr.has(r))break;if(s===`
`){const a=this.continueScalar(n+1);if(a===-1)break;n=Math.max(n,a-2)}}else{if(e&&qr.has(s))break;t=n}return!s&&!this.atEnd?this.setNext("plain-scalar"):(yield yr,yield*this.pushToIndex(t+1,!0),e?"flow":"doc")}*pushCount(e){return e>0?(yield this.buffer.substr(this.pos,e),this.pos+=e,e):0}*pushToIndex(e,t){const n=this.buffer.slice(this.pos,e);return n?(yield n,this.pos+=n.length,n.length):(t&&(yield""),0)}*pushIndicators(){let e=0;e:for(;;){switch(this.charAt(0)){case"!":e+=yield*this.pushTag(),e+=yield*this.pushSpaces(!0);continue e;case"&":e+=yield*this.pushUntil(xo),e+=yield*this.pushSpaces(!0);continue e;case"-":case"?":case":":{const t=this.flowLevel>0,n=this.charAt(1);if(Rn(n)||t&&qr.has(n)){t?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,e+=yield*this.pushCount(1),e+=yield*this.pushSpaces(!0);continue e}}}break e}return e}*pushTag(){if(this.charAt(1)==="<"){let e=this.pos+2,t=this.buffer[e];for(;!Rn(t)&&t!==">";)t=this.buffer[++e];return yield*this.pushToIndex(t===">"?e+1:e,!1)}else{let e=this.pos+1,t=this.buffer[e];for(;t;)if(dm.has(t))t=this.buffer[++e];else if(t==="%"&&ou.has(this.buffer[e+1])&&ou.has(this.buffer[e+2]))t=this.buffer[e+=3];else break;return yield*this.pushToIndex(e,!1)}}*pushNewline(){const e=this.buffer[this.pos];return e===`
`?yield*this.pushCount(1):e==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(e){let t=this.pos-1,n;do n=this.buffer[++t];while(n===" "||e&&n==="	");const s=t-this.pos;return s>0&&(yield this.buffer.substr(this.pos,s),this.pos=t),s}*pushUntil(e){let t=this.pos,n=this.buffer[t];for(;!e(n);)n=this.buffer[++t];return yield*this.pushToIndex(t,!1)}}class Sh{constructor(){this.lineStarts=[],this.addNewLine=e=>this.lineStarts.push(e),this.linePos=e=>{let t=0,n=this.lineStarts.length;for(;t<n;){const r=t+n>>1;this.lineStarts[r]<e?t=r+1:n=r}if(this.lineStarts[t]===e)return{line:t+1,col:1};if(t===0)return{line:0,col:e};const s=this.lineStarts[t-1];return{line:t,col:e-s+1}}}}function xi(i,e){for(let t=0;t<i.length;++t)if(i[t].type===e)return!0;return!1}function lu(i){for(let e=0;e<i.length;++e)switch(i[e].type){case"space":case"comment":case"newline":break;default:return e}return-1}function Eh(i){switch(i==null?void 0:i.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function jr(i){switch(i.type){case"document":return i.start;case"block-map":{const e=i.items[i.items.length-1];return e.sep??e.start}case"block-seq":return i.items[i.items.length-1].start;default:return[]}}function as(i){var t;if(i.length===0)return[];let e=i.length;e:for(;--e>=0;)switch(i[e].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;((t=i[++e])==null?void 0:t.type)==="space";);return i.splice(e,i.length)}function Ua(i,e){if(e.length<1e5)Array.prototype.push.apply(i,e);else for(let t=0;t<e.length;++t)i.push(e[t])}function cu(i){if(i.start.type==="flow-seq-start")for(const e of i.items)e.sep&&!e.value&&!xi(e.start,"explicit-key-ind")&&!xi(e.sep,"map-value-ind")&&(e.key&&(e.value=e.key),delete e.key,Eh(e.value)?e.value.end?Ua(e.value.end,e.sep):e.value.end=e.sep:Ua(e.start,e.sep),delete e.sep)}let bc=class{constructor(e){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new Mh,this.onNewLine=e}*parse(e,t=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const n of this.lexer.lex(e,t))yield*this.next(n);t||(yield*this.end())}*next(e){if(this.source=e,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=e.length;return}const t=wh(e);if(t)if(t==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=t,yield*this.step(),t){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+e.length);break;case"space":this.atNewLine&&e[0]===" "&&(this.indent+=e.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=e.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=e.length}else{const n=`Not a YAML token: ${e}`;yield*this.pop({type:"error",offset:this.offset,message:n,source:e}),this.offset+=e.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const e=this.peek(1);if(this.type==="doc-end"&&(e==null?void 0:e.type)!=="doc-end"){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!e)return yield*this.stream();switch(e.type){case"document":return yield*this.document(e);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(e);case"block-scalar":return yield*this.blockScalar(e);case"block-map":return yield*this.blockMap(e);case"block-seq":return yield*this.blockSequence(e);case"flow-collection":return yield*this.flowCollection(e);case"doc-end":return yield*this.documentEnd(e)}yield*this.pop()}peek(e){return this.stack[this.stack.length-e]}*pop(e){const t=e??this.stack.pop();if(!t)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield t;else{const n=this.peek(1);switch(t.type==="block-scalar"?t.indent="indent"in n?n.indent:0:t.type==="flow-collection"&&n.type==="document"&&(t.indent=0),t.type==="flow-collection"&&cu(t),n.type){case"document":n.value=t;break;case"block-scalar":n.props.push(t);break;case"block-map":{const s=n.items[n.items.length-1];if(s.value){n.items.push({start:[],key:t,sep:[]}),this.onKeyLine=!0;return}else if(s.sep)s.value=t;else{Object.assign(s,{key:t,sep:[]}),this.onKeyLine=!s.explicitKey;return}break}case"block-seq":{const s=n.items[n.items.length-1];s.value?n.items.push({start:[],value:t}):s.value=t;break}case"flow-collection":{const s=n.items[n.items.length-1];!s||s.value?n.items.push({start:[],key:t,sep:[]}):s.sep?s.value=t:Object.assign(s,{key:t,sep:[]});return}default:yield*this.pop(),yield*this.pop(t)}if((n.type==="document"||n.type==="block-map"||n.type==="block-seq")&&(t.type==="block-map"||t.type==="block-seq")){const s=t.items[t.items.length-1];s&&!s.sep&&!s.value&&s.start.length>0&&lu(s.start)===-1&&(t.indent===0||s.start.every(r=>r.type!=="comment"||r.indent<t.indent))&&(n.type==="document"?n.end=s.start:n.items.push({start:s.start}),t.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const e={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&e.start.push(this.sourceToken),this.stack.push(e);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(e){if(e.value)return yield*this.lineEnd(e);switch(this.type){case"doc-start":{lu(e.start)!==-1?(yield*this.pop(),yield*this.step()):e.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":e.start.push(this.sourceToken);return}const t=this.startBlockValue(e);t?this.stack.push(t):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(e){if(this.type==="map-value-ind"){const t=jr(this.peek(2)),n=as(t);let s;e.end?(s=e.end,s.push(this.sourceToken),delete e.end):s=[this.sourceToken];const r={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:n,key:e,sep:s}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=r}else yield*this.lineEnd(e)}*blockScalar(e){switch(this.type){case"space":case"comment":case"newline":e.props.push(this.sourceToken);return;case"scalar":if(e.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(e){var n;const t=e.items[e.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,t.value){const s="end"in t.value?t.value.end:void 0,r=Array.isArray(s)?s[s.length-1]:void 0;(r==null?void 0:r.type)==="comment"?s==null||s.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else if(t.sep)t.sep.push(this.sourceToken);else{if(this.atIndentedComment(t.start,e.indent)){const s=e.items[e.items.length-2],r=(n=s==null?void 0:s.value)==null?void 0:n.end;if(Array.isArray(r)){Ua(r,t.start),r.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return}if(this.indent>=e.indent){const s=!this.onKeyLine&&this.indent===e.indent,r=s&&(t.sep||t.explicitKey)&&this.type!=="seq-item-ind";let a=[];if(r&&t.sep&&!t.value){const o=[];for(let c=0;c<t.sep.length;++c){const l=t.sep[c];switch(l.type){case"newline":o.push(c);break;case"space":break;case"comment":l.indent>e.indent&&(o.length=0);break;default:o.length=0}}o.length>=2&&(a=t.sep.splice(o[1]))}switch(this.type){case"anchor":case"tag":r||t.value?(a.push(this.sourceToken),e.items.push({start:a}),this.onKeyLine=!0):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"explicit-key-ind":!t.sep&&!t.explicitKey?(t.start.push(this.sourceToken),t.explicitKey=!0):r||t.value?(a.push(this.sourceToken),e.items.push({start:a,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(t.explicitKey)if(t.sep)if(t.value)e.items.push({start:[],key:null,sep:[this.sourceToken]});else if(xi(t.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:null,sep:[this.sourceToken]}]});else if(Eh(t.key)&&!xi(t.sep,"newline")){const o=as(t.start),c=t.key,l=t.sep;l.push(this.sourceToken),delete t.key,delete t.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:o,key:c,sep:l}]})}else a.length>0?t.sep=t.sep.concat(a,this.sourceToken):t.sep.push(this.sourceToken);else if(xi(t.start,"newline"))Object.assign(t,{key:null,sep:[this.sourceToken]});else{const o=as(t.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:o,key:null,sep:[this.sourceToken]}]})}else t.sep?t.value||r?e.items.push({start:a,key:null,sep:[this.sourceToken]}):xi(t.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const o=this.flowScalar(this.type);r||t.value?(e.items.push({start:a,key:o,sep:[]}),this.onKeyLine=!0):t.sep?this.stack.push(o):(Object.assign(t,{key:o,sep:[]}),this.onKeyLine=!0);return}default:{const o=this.startBlockValue(e);if(o){if(o.type==="block-seq"){if(!t.explicitKey&&t.sep&&!xi(t.sep,"newline")){yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source});return}}else s&&e.items.push({start:a});this.stack.push(o);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(e){var n;const t=e.items[e.items.length-1];switch(this.type){case"newline":if(t.value){const s="end"in t.value?t.value.end:void 0,r=Array.isArray(s)?s[s.length-1]:void 0;(r==null?void 0:r.type)==="comment"?s==null||s.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(t.start,e.indent)){const s=e.items[e.items.length-2],r=(n=s==null?void 0:s.value)==null?void 0:n.end;if(Array.isArray(r)){Ua(r,t.start),r.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return;case"anchor":case"tag":if(t.value||this.indent<=e.indent)break;t.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==e.indent)break;t.value||xi(t.start,"seq-item-ind")?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return}if(this.indent>e.indent){const s=this.startBlockValue(e);if(s){this.stack.push(s);return}}yield*this.pop(),yield*this.step()}*flowCollection(e){const t=e.items[e.items.length-1];if(this.type==="flow-error-end"){let n;do yield*this.pop(),n=this.peek(1);while((n==null?void 0:n.type)==="flow-collection")}else if(e.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!t||t.sep?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return;case"map-value-ind":!t||t.value?e.items.push({start:[],key:null,sep:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!t||t.value?e.items.push({start:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const s=this.flowScalar(this.type);!t||t.value?e.items.push({start:[],key:s,sep:[]}):t.sep?this.stack.push(s):Object.assign(t,{key:s,sep:[]});return}case"flow-map-end":case"flow-seq-end":e.end.push(this.sourceToken);return}const n=this.startBlockValue(e);n?this.stack.push(n):(yield*this.pop(),yield*this.step())}else{const n=this.peek(2);if(n.type==="block-map"&&(this.type==="map-value-ind"&&n.indent===e.indent||this.type==="newline"&&!n.items[n.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&n.type!=="flow-collection"){const s=jr(n),r=as(s);cu(e);const a=e.end.splice(1,e.end.length);a.push(this.sourceToken);const o={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:r,key:e,sep:a}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=o}else yield*this.lineEnd(e)}}flowScalar(e){if(this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}return{type:e,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(e){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const t=jr(e),n=as(t);return n.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:n,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;const t=jr(e),n=as(t);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:n,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(e,t){return this.type!=="comment"||this.indent<=t?!1:e.every(n=>n.type==="newline"||n.type==="space")}*documentEnd(e){this.type!=="doc-mode"&&(e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(e){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;case"space":case"comment":default:e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}};function Th(i){const e=i.prettyErrors!==!1;return{lineCounter:i.lineCounter||e&&new Sh||null,prettyErrors:e}}function mm(i,e={}){const{lineCounter:t,prettyErrors:n}=Th(e),s=new bc(t==null?void 0:t.addNewLine),r=new xc(e),a=Array.from(r.compose(s.parse(i)));if(n&&t)for(const o of a)o.errors.forEach(Na(i,t)),o.warnings.forEach(Na(i,t));return a.length>0?a:Object.assign([],{empty:!0},r.streamInfo())}function Ah(i,e={}){const{lineCounter:t,prettyErrors:n}=Th(e),s=new bc(t==null?void 0:t.addNewLine),r=new xc(e);let a=null;for(const o of r.compose(s.parse(i),!0,i.length))if(!a)a=o;else if(a.options.logLevel!=="silent"){a.errors.push(new Wi(o.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return n&&t&&(a.errors.forEach(Na(i,t)),a.warnings.forEach(Na(i,t))),a}function gm(i,e,t){let n;typeof e=="function"?n=e:t===void 0&&e&&typeof e=="object"&&(t=e);const s=Ah(i,t);if(!s)return null;if(s.warnings.forEach(r=>jf(s.options.logLevel,r)),s.errors.length>0){if(s.options.logLevel!=="silent")throw s.errors[0];s.errors=[]}return s.toJS(Object.assign({reviver:n},t))}function _m(i,e,t){let n=null;if(typeof e=="function"||Array.isArray(e)?n=e:t===void 0&&e&&(t=e),typeof t=="string"&&(t=t.length),typeof t=="number"){const s=Math.round(t);t=s<1?void 0:s>8?{indent:8}:{indent:s}}if(i===void 0){const{keepUndefined:s}=t??e??{};if(!s)return}return Zi(i)&&!n?i.toString(t):new Ys(i,n,t).toString(t)}const Ma=Object.freeze(Object.defineProperty({__proto__:null,Alias:qa,CST:hm,Composer:xc,Document:Ys,Lexer:Mh,LineCounter:Sh,Pair:en,Parser:bc,Scalar:Ke,Schema:eo,YAMLError:vc,YAMLMap:gn,YAMLParseError:Wi,YAMLSeq:Si,YAMLWarning:hh,isAlias:Ji,isCollection:Tt,isDocument:Zi,isMap:js,isNode:At,isPair:St,isScalar:xt,isSeq:Xs,parse:gm,parseAllDocuments:mm,parseDocument:Ah,stringify:_m,visit:Qi,visitAsync:Wa},Symbol.toStringTag,{value:"Module"})),vm=Object.assign({"/world/world.config.yaml":rp}),ym=Object.assign({"/world/places/main/config.yaml":ap}),xm=Object.assign({"/world/places/main/cells/objects.scene":op,"/world/places/main/cells/x0z0.scene":lp}),bm=Object.assign({"/world/templates/camera.js":()=>Ie(()=>import("./camera-K4zneVSs.js"),[]),"/world/templates/player.js":()=>Ie(()=>import("./player-BYsER5Iw.js"),[]),"/world/templates/sprite.js":()=>Ie(()=>import("./sprite-DoGeqWOJ.js"),[])});function wm(i,e){const t=Ma.parse(i)??{};return Object.entries(t).map(([n,s])=>{var r;return{...s,id:(s==null?void 0:s.id)??((r=s==null?void 0:s.overrides)==null?void 0:r.id)??n,cell:e}})}async function wc(i){const[e,t]=String(i).split("#"),n=bm["/world/"+e];if(!n)throw new Error(`no template ${e}`);const s=await n();return s[t]??s.default??{}}const uu=i=>i&&typeof i=="object"&&!Array.isArray(i);function dl(i,e){const t={...i};for(const[n,s]of Object.entries(e??{}))t[n]=uu(s)&&uu(i==null?void 0:i[n])?dl(i[n],s):s;return t}async function Mm(i){if(!i.template)return i;const{template:e,overrides:t,...n}=i;return dl(dl(await wc(e),t),n)}const Sm=Object.assign({"/web/overrides.yaml":cp});function Em(i,e){if(!e)return{...i,sounds:{},render:{}};const t=new Set(e.remove??[]),n=i.placements.filter(r=>!t.has(r.id));for(const[r,a]of Object.entries(e.add??{}))n.push({...a,id:r,cell:"web"});const s=e.terrain?{...i.place,terrain:{...i.place.terrain,...e.terrain}}:i.place;return{...i,place:s,placements:n,sounds:e.sounds??{},render:e.render??{}}}async function Tm(i,{web:e=!0}={}){const t=Ma.parse(Object.values(vm)[0]??"")??{},n=i??t.defaultPlace??"main",s=ym[`/world/places/${n}/config.yaml`];if(s==null)throw new Error(`no place ${n}`);const r=[];for(const[l,f]of Object.entries(xm))l.startsWith(`/world/places/${n}/cells/`)&&r.push(...wm(f,l.split("/").pop().replace(/\.scene$/,"")));const a=await Promise.all(r.map(Mm)),o={config:t,name:n,place:Ma.parse(s)??{},placements:a},c=Object.values(Sm)[0];return Em(o,e&&c?Ma.parse(c):null)}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mc="172",Am=0,fu=1,Rm=2,Rh=1,Cm=2,Qn=3,Ei=0,cn=1,ei=2,Mi=0,wn=1,xr=2,Fa=3,Ba=4,Pm=5,zi=100,Lm=101,Im=102,Dm=103,Om=104,Nm=200,km=201,Um=202,Fm=203,pl=204,ml=205,Bm=206,zm=207,Hm=208,Gm=209,Vm=210,Wm=211,qm=212,jm=213,Xm=214,gl=0,_l=1,vl=2,Fs=3,yl=4,xl=5,bl=6,wl=7,Ch=0,$m=1,Km=2,ai=0,Ym=1,Jm=2,Zm=3,Qm=4,eg=5,tg=6,ng=7,Ph=300,Bs=301,zs=302,Ml=303,Sl=304,so=306,br=1e3,ni=1001,El=1002,Wt=1003,ig=1004,Xr=1005,ln=1006,bo=1007,Hn=1008,Wn=1009,Lh=1010,Ih=1011,wr=1012,Sc=1013,Ki=1014,ii=1015,Cr=1016,Ec=1017,Tc=1018,Hs=1020,Dh=35902,Oh=1021,Nh=1022,xn=1023,kh=1024,Uh=1025,Ds=1026,Gs=1027,Fh=1028,Ac=1029,Bh=1030,Rc=1031,Cc=1033,Sa=33776,Ea=33777,Ta=33778,Aa=33779,Tl=35840,Al=35841,Rl=35842,Cl=35843,Pl=36196,Ll=37492,Il=37496,Dl=37808,Ol=37809,Nl=37810,kl=37811,Ul=37812,Fl=37813,Bl=37814,zl=37815,Hl=37816,Gl=37817,Vl=37818,Wl=37819,ql=37820,jl=37821,Ra=36492,Xl=36494,$l=36495,zh=36283,Kl=36284,Yl=36285,Jl=36286,sg=3200,rg=3201,ag=0,og=1,bi="",jt="srgb",Vs="srgb-linear",za="linear",vt="srgb",os=7680,hu=519,lg=512,cg=513,ug=514,Hh=515,fg=516,hg=517,dg=518,pg=519,du=35044,mg=35048,pu="300 es",si=2e3,Ha=2001;class Js{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wo=Math.PI/180,Zl=180/Math.PI;function Pr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function ut(i,e,t){return Math.max(e,Math.min(t,i))}function gg(i,e){return(i%e+e)%e}function Mo(i,e,t){return(1-t)*i+t*e}function or(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function an(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class yt{constructor(e=0,t=0){yt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,n,s,r,a,o,c,l){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const f=this.elements;return f[0]=e,f[1]=s,f[2]=o,f[3]=t,f[4]=r,f[5]=c,f[6]=n,f[7]=a,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],f=n[4],h=n[7],d=n[2],p=n[5],x=n[8],y=s[0],_=s[3],g=s[6],R=s[1],A=s[4],b=s[7],L=s[2],I=s[5],C=s[8];return r[0]=a*y+o*R+c*L,r[3]=a*_+o*A+c*I,r[6]=a*g+o*b+c*C,r[1]=l*y+f*R+h*L,r[4]=l*_+f*A+h*I,r[7]=l*g+f*b+h*C,r[2]=d*y+p*R+x*L,r[5]=d*_+p*A+x*I,r[8]=d*g+p*b+x*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8];return t*a*f-t*o*l-n*r*f+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],h=f*a-o*l,d=o*c-f*r,p=l*r-a*c,x=t*h+n*d+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=h*y,e[1]=(s*l-f*n)*y,e[2]=(o*n-s*a)*y,e[3]=d*y,e[4]=(f*t-s*c)*y,e[5]=(s*r-o*t)*y,e[6]=p*y,e[7]=(n*c-l*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(So.makeScale(e,t)),this}rotate(e){return this.premultiply(So.makeRotation(-e)),this}translate(e,t){return this.premultiply(So.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const So=new Qe;function Gh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _g(){const i=Mr("canvas");return i.style.display="block",i}const mu={};function Ms(i){i in mu||(mu[i]=!0,console.warn(i))}function vg(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function yg(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function xg(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const gu=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_u=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bg(){const i={enabled:!0,workingColorSpace:Vs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===vt&&(s.r=oi(s.r),s.g=oi(s.g),s.b=oi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===vt&&(s.r=Os(s.r),s.g=Os(s.g),s.b=Os(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bi?za:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Vs]:{primaries:e,whitePoint:n,transfer:za,toXYZ:gu,fromXYZ:_u,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:gu,fromXYZ:_u,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}}),i}const ht=bg();function oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ls;class wg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ls===void 0&&(ls=Mr("canvas")),ls.width=e.width,ls.height=e.height;const n=ls.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ls}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=oi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(oi(t[n]/255)*255):t[n]=oi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Mg=0;class Vh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mg++}),this.uuid=Pr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Eo(s[a].image)):r.push(Eo(s[a]))}else r=Eo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Eo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sg=0;class Xt extends Js{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,n=ni,s=ni,r=ln,a=Hn,o=xn,c=Wn,l=Xt.DEFAULT_ANISOTROPY,f=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=Pr(),this.name="",this.source=new Vh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ph)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case br:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case El:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case br:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case El:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=Ph;Xt.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,n=0,s=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],f=c[4],h=c[8],d=c[1],p=c[5],x=c[9],y=c[2],_=c[6],g=c[10];if(Math.abs(f-d)<.01&&Math.abs(h-y)<.01&&Math.abs(x-_)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+y)<.1&&Math.abs(x+_)<.1&&Math.abs(l+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(l+1)/2,b=(p+1)/2,L=(g+1)/2,I=(f+d)/4,C=(h+y)/4,D=(x+_)/4;return A>b&&A>L?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=I/n,r=C/n):b>L?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=I/s,r=D/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=C/r,s=D/r),this.set(n,s,r,t),this}let R=Math.sqrt((_-x)*(_-x)+(h-y)*(h-y)+(d-f)*(d-f));return Math.abs(R)<.001&&(R=1),this.x=(_-x)/R,this.y=(h-y)/R,this.z=(d-f)/R,this.w=Math.acos((l+p+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Eg extends Js{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Xt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Vh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends Eg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Wh extends Xt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tg extends Xt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lr{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],f=n[s+2],h=n[s+3];const d=r[a+0],p=r[a+1],x=r[a+2],y=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=f,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=x,e[t+3]=y;return}if(h!==y||c!==d||l!==p||f!==x){let _=1-o;const g=c*d+l*p+f*x+h*y,R=g>=0?1:-1,A=1-g*g;if(A>Number.EPSILON){const L=Math.sqrt(A),I=Math.atan2(L,g*R);_=Math.sin(_*I)/L,o=Math.sin(o*I)/L}const b=o*R;if(c=c*_+d*b,l=l*_+p*b,f=f*_+x*b,h=h*_+y*b,_===1-o){const L=1/Math.sqrt(c*c+l*l+f*f+h*h);c*=L,l*=L,f*=L,h*=L}}e[t]=c,e[t+1]=l,e[t+2]=f,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],f=n[s+3],h=r[a],d=r[a+1],p=r[a+2],x=r[a+3];return e[t]=o*x+f*h+c*p-l*d,e[t+1]=c*x+f*d+l*h-o*p,e[t+2]=l*x+f*p+o*d-c*h,e[t+3]=f*x-o*h-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),f=o(s/2),h=o(r/2),d=c(n/2),p=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=d*f*h+l*p*x,this._y=l*p*h-d*f*x,this._z=l*f*x+d*p*h,this._w=l*f*h-d*p*x;break;case"YXZ":this._x=d*f*h+l*p*x,this._y=l*p*h-d*f*x,this._z=l*f*x-d*p*h,this._w=l*f*h+d*p*x;break;case"ZXY":this._x=d*f*h-l*p*x,this._y=l*p*h+d*f*x,this._z=l*f*x+d*p*h,this._w=l*f*h-d*p*x;break;case"ZYX":this._x=d*f*h-l*p*x,this._y=l*p*h+d*f*x,this._z=l*f*x-d*p*h,this._w=l*f*h+d*p*x;break;case"YZX":this._x=d*f*h+l*p*x,this._y=l*p*h+d*f*x,this._z=l*f*x-d*p*h,this._w=l*f*h-d*p*x;break;case"XZY":this._x=d*f*h-l*p*x,this._y=l*p*h-d*f*x,this._z=l*f*x+d*p*h,this._w=l*f*h+d*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],f=t[6],h=t[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(f-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+f)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,f=t._w;return this._x=n*f+a*o+s*l-r*c,this._y=s*f+a*c+r*o-n*l,this._z=r*f+a*l+n*c-s*o,this._w=a*f-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),f=Math.atan2(l,o),h=Math.sin((1-t)*f)/l,d=Math.sin(t*f)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,n=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),f=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*f,this.y=n+c*f+o*l-r*h,this.z=s+c*h+r*f-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return To.copy(this).projectOnVector(e),this.sub(To)}reflect(e){return this.sub(To.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const To=new X,vu=new Lr;class Ir{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Cn):Cn.fromBufferAttribute(r,a),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$r.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$r.copy(n.boundingBox)),$r.applyMatrix4(e.matrixWorld),this.union($r)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lr),Kr.subVectors(this.max,lr),cs.subVectors(e.a,lr),us.subVectors(e.b,lr),fs.subVectors(e.c,lr),pi.subVectors(us,cs),mi.subVectors(fs,us),Ii.subVectors(cs,fs);let t=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Ii.z,Ii.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Ii.z,0,-Ii.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Ii.y,Ii.x,0];return!Ao(t,cs,us,fs,Kr)||(t=[1,0,0,0,1,0,0,0,1],!Ao(t,cs,us,fs,Kr))?!1:(Yr.crossVectors(pi,mi),t=[Yr.x,Yr.y,Yr.z],Ao(t,cs,us,fs,Kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $n=[new X,new X,new X,new X,new X,new X,new X,new X],Cn=new X,$r=new Ir,cs=new X,us=new X,fs=new X,pi=new X,mi=new X,Ii=new X,lr=new X,Kr=new X,Yr=new X,Di=new X;function Ao(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Di.fromArray(i,r);const o=s.x*Math.abs(Di.x)+s.y*Math.abs(Di.y)+s.z*Math.abs(Di.z),c=e.dot(Di),l=t.dot(Di),f=n.dot(Di);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>o)return!1}return!0}const Ag=new Ir,cr=new X,Ro=new X;class Pc{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ag.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cr.subVectors(e,this.center);const t=cr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(cr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ro.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cr.copy(e.center).add(Ro)),this.expandByPoint(cr.copy(e.center).sub(Ro))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kn=new X,Co=new X,Jr=new X,gi=new X,Po=new X,Zr=new X,Lo=new X;class Rg{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Co.copy(e).add(t).multiplyScalar(.5),Jr.copy(t).sub(e).normalize(),gi.copy(this.origin).sub(Co);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Jr),o=gi.dot(this.direction),c=-gi.dot(Jr),l=gi.lengthSq(),f=Math.abs(1-a*a);let h,d,p,x;if(f>0)if(h=a*c-o,d=a*o-c,x=r*f,h>=0)if(d>=-x)if(d<=x){const y=1/f;h*=y,d*=y,p=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d<=-x?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l):d<=x?(h=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Co).addScaledVector(Jr,d),p}intersectSphere(e,t){Kn.subVectors(e.center,this.origin);const n=Kn.dot(this.direction),s=Kn.dot(Kn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),f>=0?(r=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(r=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,n,s,r){Po.subVectors(t,e),Zr.subVectors(n,e),Lo.crossVectors(Po,Zr);let a=this.direction.dot(Lo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;gi.subVectors(this.origin,e);const c=o*this.direction.dot(Zr.crossVectors(gi,Zr));if(c<0)return null;const l=o*this.direction.dot(Po.cross(gi));if(l<0||c+l>a)return null;const f=-o*gi.dot(Lo);return f<0?null:this.at(f/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(e,t,n,s,r,a,o,c,l,f,h,d,p,x,y,_){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,f,h,d,p,x,y,_)}set(e,t,n,s,r,a,o,c,l,f,h,d,p,x,y,_){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=c,g[2]=l,g[6]=f,g[10]=h,g[14]=d,g[3]=p,g[7]=x,g[11]=y,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/hs.setFromMatrixColumn(e,0).length(),r=1/hs.setFromMatrixColumn(e,1).length(),a=1/hs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),f=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*f,p=a*h,x=o*f,y=o*h;t[0]=c*f,t[4]=-c*h,t[8]=l,t[1]=p+x*l,t[5]=d-y*l,t[9]=-o*c,t[2]=y-d*l,t[6]=x+p*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*f,p=c*h,x=l*f,y=l*h;t[0]=d+y*o,t[4]=x*o-p,t[8]=a*l,t[1]=a*h,t[5]=a*f,t[9]=-o,t[2]=p*o-x,t[6]=y+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*f,p=c*h,x=l*f,y=l*h;t[0]=d-y*o,t[4]=-a*h,t[8]=x+p*o,t[1]=p+x*o,t[5]=a*f,t[9]=y-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*f,p=a*h,x=o*f,y=o*h;t[0]=c*f,t[4]=x*l-p,t[8]=d*l+y,t[1]=c*h,t[5]=y*l+d,t[9]=p*l-x,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,p=a*l,x=o*c,y=o*l;t[0]=c*f,t[4]=y-d*h,t[8]=x*h+p,t[1]=h,t[5]=a*f,t[9]=-o*f,t[2]=-l*f,t[6]=p*h+x,t[10]=d-y*h}else if(e.order==="XZY"){const d=a*c,p=a*l,x=o*c,y=o*l;t[0]=c*f,t[4]=-h,t[8]=l*f,t[1]=d*h+y,t[5]=a*f,t[9]=p*h-x,t[2]=x*h-p,t[6]=o*f,t[10]=y*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cg,e,Pg)}lookAt(e,t,n){const s=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),_i.crossVectors(n,dn),_i.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),_i.crossVectors(n,dn)),_i.normalize(),Qr.crossVectors(dn,_i),s[0]=_i.x,s[4]=Qr.x,s[8]=dn.x,s[1]=_i.y,s[5]=Qr.y,s[9]=dn.y,s[2]=_i.z,s[6]=Qr.z,s[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],f=n[1],h=n[5],d=n[9],p=n[13],x=n[2],y=n[6],_=n[10],g=n[14],R=n[3],A=n[7],b=n[11],L=n[15],I=s[0],C=s[4],D=s[8],S=s[12],w=s[1],N=s[5],F=s[9],B=s[13],$=s[2],re=s[6],Q=s[10],ce=s[14],Y=s[3],de=s[7],Me=s[11],Ee=s[15];return r[0]=a*I+o*w+c*$+l*Y,r[4]=a*C+o*N+c*re+l*de,r[8]=a*D+o*F+c*Q+l*Me,r[12]=a*S+o*B+c*ce+l*Ee,r[1]=f*I+h*w+d*$+p*Y,r[5]=f*C+h*N+d*re+p*de,r[9]=f*D+h*F+d*Q+p*Me,r[13]=f*S+h*B+d*ce+p*Ee,r[2]=x*I+y*w+_*$+g*Y,r[6]=x*C+y*N+_*re+g*de,r[10]=x*D+y*F+_*Q+g*Me,r[14]=x*S+y*B+_*ce+g*Ee,r[3]=R*I+A*w+b*$+L*Y,r[7]=R*C+A*N+b*re+L*de,r[11]=R*D+A*F+b*Q+L*Me,r[15]=R*S+A*B+b*ce+L*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],f=e[2],h=e[6],d=e[10],p=e[14],x=e[3],y=e[7],_=e[11],g=e[15];return x*(+r*c*h-s*l*h-r*o*d+n*l*d+s*o*p-n*c*p)+y*(+t*c*p-t*l*d+r*a*d-s*a*p+s*l*f-r*c*f)+_*(+t*l*h-t*o*p-r*a*h+n*a*p+r*o*f-n*l*f)+g*(-s*o*f-t*c*h+t*o*d+s*a*h-n*a*d+n*c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],h=e[9],d=e[10],p=e[11],x=e[12],y=e[13],_=e[14],g=e[15],R=h*_*l-y*d*l+y*c*p-o*_*p-h*c*g+o*d*g,A=x*d*l-f*_*l-x*c*p+a*_*p+f*c*g-a*d*g,b=f*y*l-x*h*l+x*o*p-a*y*p-f*o*g+a*h*g,L=x*h*c-f*y*c-x*o*d+a*y*d+f*o*_-a*h*_,I=t*R+n*A+s*b+r*L;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/I;return e[0]=R*C,e[1]=(y*d*r-h*_*r-y*s*p+n*_*p+h*s*g-n*d*g)*C,e[2]=(o*_*r-y*c*r+y*s*l-n*_*l-o*s*g+n*c*g)*C,e[3]=(h*c*r-o*d*r-h*s*l+n*d*l+o*s*p-n*c*p)*C,e[4]=A*C,e[5]=(f*_*r-x*d*r+x*s*p-t*_*p-f*s*g+t*d*g)*C,e[6]=(x*c*r-a*_*r-x*s*l+t*_*l+a*s*g-t*c*g)*C,e[7]=(a*d*r-f*c*r+f*s*l-t*d*l-a*s*p+t*c*p)*C,e[8]=b*C,e[9]=(x*h*r-f*y*r-x*n*p+t*y*p+f*n*g-t*h*g)*C,e[10]=(a*y*r-x*o*r+x*n*l-t*y*l-a*n*g+t*o*g)*C,e[11]=(f*o*r-a*h*r-f*n*l+t*h*l+a*n*p-t*o*p)*C,e[12]=L*C,e[13]=(f*y*s-x*h*s+x*n*d-t*y*d-f*n*_+t*h*_)*C,e[14]=(x*o*s-a*y*s-x*n*c+t*y*c+a*n*_-t*o*_)*C,e[15]=(a*h*s-f*o*s+f*n*c-t*h*c-a*n*d+t*o*d)*C,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,f=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,f*o+n,f*c-s*a,0,l*c-s*o,f*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,f=a+a,h=o+o,d=r*l,p=r*f,x=r*h,y=a*f,_=a*h,g=o*h,R=c*l,A=c*f,b=c*h,L=n.x,I=n.y,C=n.z;return s[0]=(1-(y+g))*L,s[1]=(p+b)*L,s[2]=(x-A)*L,s[3]=0,s[4]=(p-b)*I,s[5]=(1-(d+g))*I,s[6]=(_+R)*I,s[7]=0,s[8]=(x+A)*C,s[9]=(_-R)*C,s[10]=(1-(d+y))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=hs.set(s[0],s[1],s[2]).length();const a=hs.set(s[4],s[5],s[6]).length(),o=hs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Pn.copy(this);const l=1/r,f=1/a,h=1/o;return Pn.elements[0]*=l,Pn.elements[1]*=l,Pn.elements[2]*=l,Pn.elements[4]*=f,Pn.elements[5]*=f,Pn.elements[6]*=f,Pn.elements[8]*=h,Pn.elements[9]*=h,Pn.elements[10]*=h,t.setFromRotationMatrix(Pn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=si){const c=this.elements,l=2*r/(t-e),f=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let p,x;if(o===si)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ha)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=si){const c=this.elements,l=1/(t-e),f=1/(n-s),h=1/(a-r),d=(t+e)*l,p=(n+s)*f;let x,y;if(o===si)x=(a+r)*h,y=-2*h;else if(o===Ha)x=r*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*f,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=y,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const hs=new X,Pn=new Nt,Cg=new X(0,0,0),Pg=new X(1,1,1),_i=new X,Qr=new X,dn=new X,yu=new Nt,xu=new Lr;class ui{constructor(e=0,t=0,n=0,s=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],f=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ut(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xu.setFromEuler(this),this.setFromQuaternion(xu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class qh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lg=0;const bu=new X,ds=new Lr,Yn=new Nt,ea=new X,ur=new X,Ig=new X,Dg=new Lr,wu=new X(1,0,0),Mu=new X(0,1,0),Su=new X(0,0,1),Eu={type:"added"},Og={type:"removed"},ps={type:"childadded",child:null},Io={type:"childremoved",child:null};class un extends Js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lg++}),this.uuid=Pr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new X,t=new ui,n=new Lr,s=new X(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Nt},normalMatrix:{value:new Qe}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(wu,e)}rotateY(e){return this.rotateOnAxis(Mu,e)}rotateZ(e){return this.rotateOnAxis(Su,e)}translateOnAxis(e,t){return bu.copy(e).applyQuaternion(this.quaternion),this.position.add(bu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wu,e)}translateY(e){return this.translateOnAxis(Mu,e)}translateZ(e){return this.translateOnAxis(Su,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ea.copy(e):ea.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(ur,ea,this.up):Yn.lookAt(ea,ur,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),ds.setFromRotationMatrix(Yn),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Eu),ps.child=e,this.dispatchEvent(ps),ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Og),Io.child=e,this.dispatchEvent(Io),Io.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Eu),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,e,Ig),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,Dg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),f=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),f.length>0&&(n.images=f),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){const c=[];for(const l in o){const f=o[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}un.DEFAULT_UP=new X(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new X,Jn=new X,Do=new X,Zn=new X,ms=new X,gs=new X,Tu=new X,Oo=new X,No=new X,ko=new X,Uo=new Pt,Fo=new Pt,Bo=new Pt;class On{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ln.subVectors(e,t),s.cross(Ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ln.subVectors(s,t),Jn.subVectors(n,t),Do.subVectors(e,t);const a=Ln.dot(Ln),o=Ln.dot(Jn),c=Ln.dot(Do),l=Jn.dot(Jn),f=Jn.dot(Do),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(l*c-o*f)*d,x=(a*f-o*c)*d;return r.set(1-p-x,x,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Zn.x),c.addScaledVector(a,Zn.y),c.addScaledVector(o,Zn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Uo.setScalar(0),Fo.setScalar(0),Bo.setScalar(0),Uo.fromBufferAttribute(e,t),Fo.fromBufferAttribute(e,n),Bo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Uo,r.x),a.addScaledVector(Fo,r.y),a.addScaledVector(Bo,r.z),a}static isFrontFacing(e,t,n,s){return Ln.subVectors(n,t),Jn.subVectors(e,t),Ln.cross(Jn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Ln.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return On.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return On.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;ms.subVectors(s,n),gs.subVectors(r,n),Oo.subVectors(e,n);const c=ms.dot(Oo),l=gs.dot(Oo);if(c<=0&&l<=0)return t.copy(n);No.subVectors(e,s);const f=ms.dot(No),h=gs.dot(No);if(f>=0&&h<=f)return t.copy(s);const d=c*h-f*l;if(d<=0&&c>=0&&f<=0)return a=c/(c-f),t.copy(n).addScaledVector(ms,a);ko.subVectors(e,r);const p=ms.dot(ko),x=gs.dot(ko);if(x>=0&&p<=x)return t.copy(r);const y=p*l-c*x;if(y<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(n).addScaledVector(gs,o);const _=f*x-p*h;if(_<=0&&h-f>=0&&p-x>=0)return Tu.subVectors(r,s),o=(h-f)/(h-f+(p-x)),t.copy(s).addScaledVector(Tu,o);const g=1/(_+y+d);return a=y*g,o=d*g,t.copy(n).addScaledVector(ms,a).addScaledVector(gs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},ta={h:0,s:0,l:0};function zo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class dt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ht.workingColorSpace){if(e=gg(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=zo(a,r,e+1/3),this.g=zo(a,r,e),this.b=zo(a,r,e-1/3)}return ht.toWorkingColorSpace(this,s),this}setStyle(e,t=jt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){const n=jh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return ht.fromWorkingColorSpace(Zt.copy(this),e),Math.round(ut(Zt.r*255,0,255))*65536+Math.round(ut(Zt.g*255,0,255))*256+Math.round(ut(Zt.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(Zt.copy(this),t);const n=Zt.r,s=Zt.g,r=Zt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const f=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=f<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=jt){ht.fromWorkingColorSpace(Zt.copy(this),e);const t=Zt.r,n=Zt.g,s=Zt.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(vi),this.setHSL(vi.h+e,vi.s+t,vi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vi),e.getHSL(ta);const n=Mo(vi.h,ta.h,t),s=Mo(vi.s,ta.s,t),r=Mo(vi.l,ta.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new dt;dt.NAMES=jh;let Ng=0;class ro extends Js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=Pr(),this.name="",this.type="Material",this.blending=wn,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pl,this.blendDst=ml,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wn&&(n.blending=this.blending),this.side!==Ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pl&&(n.blendSrc=this.blendSrc),this.blendDst!==ml&&(n.blendDst=this.blendDst),this.blendEquation!==zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Sr extends ro{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=Ch,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new X,na=new yt;class Nn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=du,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)na.fromBufferAttribute(this,t),na.applyMatrix3(e),this.setXY(t,na.x,na.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=or(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=or(t,this.array)),t}setX(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=or(t,this.array)),t}setY(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=or(t,this.array)),t}setZ(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=or(t,this.array)),t}setW(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array),s=an(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array),s=an(s,this.array),r=an(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==du&&(e.usage=this.usage),e}}class Xh extends Nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class $h extends Nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class li extends Nn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let kg=0;const yn=new Nt,Ho=new un,_s=new X,pn=new Ir,fr=new Ir,Vt=new X;class hi extends Js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=Pr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gh(e)?$h:Xh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,n){return yn.makeTranslation(e,t,n),this.applyMatrix4(yn),this}scale(e,t,n){return yn.makeScale(e,t,n),this.applyMatrix4(yn),this}lookAt(e){return Ho.lookAt(e),Ho.updateMatrix(),this.applyMatrix4(Ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new li(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ir);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const n=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];fr.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(pn.min,fr.min),pn.expandByPoint(Vt),Vt.addVectors(pn.max,fr.max),pn.expandByPoint(Vt)):(pn.expandByPoint(fr.min),pn.expandByPoint(fr.max))}pn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Vt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Vt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,f=o.count;l<f;l++)Vt.fromBufferAttribute(o,l),c&&(_s.fromBufferAttribute(e,l),Vt.add(_s)),s=Math.max(s,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let D=0;D<n.count;D++)o[D]=new X,c[D]=new X;const l=new X,f=new X,h=new X,d=new yt,p=new yt,x=new yt,y=new X,_=new X;function g(D,S,w){l.fromBufferAttribute(n,D),f.fromBufferAttribute(n,S),h.fromBufferAttribute(n,w),d.fromBufferAttribute(r,D),p.fromBufferAttribute(r,S),x.fromBufferAttribute(r,w),f.sub(l),h.sub(l),p.sub(d),x.sub(d);const N=1/(p.x*x.y-x.x*p.y);isFinite(N)&&(y.copy(f).multiplyScalar(x.y).addScaledVector(h,-p.y).multiplyScalar(N),_.copy(h).multiplyScalar(p.x).addScaledVector(f,-x.x).multiplyScalar(N),o[D].add(y),o[S].add(y),o[w].add(y),c[D].add(_),c[S].add(_),c[w].add(_))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let D=0,S=R.length;D<S;++D){const w=R[D],N=w.start,F=w.count;for(let B=N,$=N+F;B<$;B+=3)g(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const A=new X,b=new X,L=new X,I=new X;function C(D){L.fromBufferAttribute(s,D),I.copy(L);const S=o[D];A.copy(S),A.sub(L.multiplyScalar(L.dot(S))).normalize(),b.crossVectors(I,S);const N=b.dot(c[D])<0?-1:1;a.setXYZW(D,A.x,A.y,A.z,N)}for(let D=0,S=R.length;D<S;++D){const w=R[D],N=w.start,F=w.count;for(let B=N,$=N+F;B<$;B+=3)C(e.getX(B+0)),C(e.getX(B+1)),C(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new X,r=new X,a=new X,o=new X,c=new X,l=new X,f=new X,h=new X;if(e)for(let d=0,p=e.count;d<p;d+=3){const x=e.getX(d+0),y=e.getX(d+1),_=e.getX(d+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,_),f.subVectors(a,r),h.subVectors(s,r),f.cross(h),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,_),o.add(f),c.add(f),l.add(f),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(_,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),f.subVectors(a,r),h.subVectors(s,r),f.cross(h),n.setXYZ(d+0,f.x,f.y,f.z),n.setXYZ(d+1,f.x,f.y,f.z),n.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,c){const l=o.array,f=o.itemSize,h=o.normalized,d=new l.constructor(c.length*f);let p=0,x=0;for(let y=0,_=c.length;y<_;y++){o.isInterleavedBufferAttribute?p=c[y]*o.data.stride+o.offset:p=c[y]*f;for(let g=0;g<f;g++)d[x++]=l[p++]}return new Nn(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hi,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let f=0,h=l.length;f<h;f++){const d=l[f],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];f.push(p.toJSON(e.data))}f.length>0&&(s[c]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const f=s[l];this.setAttribute(l,f.clone(t))}const r=e.morphAttributes;for(const l in r){const f=[],h=r[l];for(let d=0,p=h.length;d<p;d++)f.push(h[d].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,f=a.length;l<f;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Au=new Nt,Oi=new Rg,ia=new Pc,Ru=new X,sa=new X,ra=new X,aa=new X,Go=new X,oa=new X,Cu=new X,la=new X;class sn extends un{constructor(e=new hi,t=new Sr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){oa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const f=o[c],h=r[c];f!==0&&(Go.fromBufferAttribute(h,e),a?oa.addScaledVector(Go,f):oa.addScaledVector(Go.sub(t),f))}t.add(oa)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(r),Oi.copy(e.ray).recast(e.near),!(ia.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(ia,Ru)===null||Oi.origin.distanceToSquared(Ru)>(e.far-e.near)**2))&&(Au.copy(r).invert(),Oi.copy(e.ray).applyMatrix4(Au),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,f=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,y=d.length;x<y;x++){const _=d[x],g=a[_.materialIndex],R=Math.max(_.start,p.start),A=Math.min(o.count,Math.min(_.start+_.count,p.start+p.count));for(let b=R,L=A;b<L;b+=3){const I=o.getX(b),C=o.getX(b+1),D=o.getX(b+2);s=ca(this,g,e,n,l,f,h,I,C,D),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const x=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let _=x,g=y;_<g;_+=3){const R=o.getX(_),A=o.getX(_+1),b=o.getX(_+2);s=ca(this,a,e,n,l,f,h,R,A,b),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,y=d.length;x<y;x++){const _=d[x],g=a[_.materialIndex],R=Math.max(_.start,p.start),A=Math.min(c.count,Math.min(_.start+_.count,p.start+p.count));for(let b=R,L=A;b<L;b+=3){const I=b,C=b+1,D=b+2;s=ca(this,g,e,n,l,f,h,I,C,D),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const x=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let _=x,g=y;_<g;_+=3){const R=_,A=_+1,b=_+2;s=ca(this,a,e,n,l,f,h,R,A,b),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}}function Ug(i,e,t,n,s,r,a,o){let c;if(e.side===cn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Ei,o),c===null)return null;la.copy(o),la.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(la);return l<t.near||l>t.far?null:{distance:l,point:la.clone(),object:i}}function ca(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,sa),i.getVertexPosition(c,ra),i.getVertexPosition(l,aa);const f=Ug(i,e,t,n,sa,ra,aa,Cu);if(f){const h=new X;On.getBarycoord(Cu,sa,ra,aa,h),s&&(f.uv=On.getInterpolatedAttribute(s,o,c,l,h,new yt)),r&&(f.uv1=On.getInterpolatedAttribute(r,o,c,l,h,new yt)),a&&(f.normal=On.getInterpolatedAttribute(a,o,c,l,h,new X),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new X,materialIndex:0};On.getNormal(sa,ra,aa,d.normal),f.face=d,f.barycoord=h}return f}class Dr extends hi{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],f=[],h=[];let d=0,p=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new li(l,3)),this.setAttribute("normal",new li(f,3)),this.setAttribute("uv",new li(h,2));function x(y,_,g,R,A,b,L,I,C,D,S){const w=b/C,N=L/D,F=b/2,B=L/2,$=I/2,re=C+1,Q=D+1;let ce=0,Y=0;const de=new X;for(let Me=0;Me<Q;Me++){const Ee=Me*N-B;for(let We=0;We<re;We++){const nt=We*w-F;de[y]=nt*R,de[_]=Ee*A,de[g]=$,l.push(de.x,de.y,de.z),de[y]=0,de[_]=0,de[g]=I>0?1:-1,f.push(de.x,de.y,de.z),h.push(We/C),h.push(1-Me/D),ce+=1}}for(let Me=0;Me<D;Me++)for(let Ee=0;Ee<C;Ee++){const We=d+Ee+re*Me,nt=d+Ee+re*(Me+1),ee=d+(Ee+1)+re*(Me+1),fe=d+(Ee+1)+re*Me;c.push(We,nt,fe),c.push(nt,ee,fe),Y+=6}o.addGroup(p,Y,S),p+=Y,d+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ws(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function tn(i){const e={};for(let t=0;t<i.length;t++){const n=Ws(i[t]);for(const s in n)e[s]=n[s]}return e}function Fg(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Kh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const Bg={clone:Ws,merge:tn};var zg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends ro{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zg,this.fragmentShader=Hg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=Fg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Yh extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yi=new X,Pu=new yt,Lu=new yt;class Dn extends Yh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zl*2*Math.atan(Math.tan(wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yi.x,yi.y).multiplyScalar(-e/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-e/yi.z)}getViewSize(e,t){return this.getViewBounds(e,Pu,Lu),t.subVectors(Lu,Pu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(wo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vs=-90,ys=1;class Gg extends un{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Dn(vs,ys,e,t);s.layers=this.layers,this.add(s);const r=new Dn(vs,ys,e,t);r.layers=this.layers,this.add(r);const a=new Dn(vs,ys,e,t);a.layers=this.layers,this.add(a);const o=new Dn(vs,ys,e,t);o.layers=this.layers,this.add(o);const c=new Dn(vs,ys,e,t);c.layers=this.layers,this.add(c);const l=new Dn(vs,ys,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ha)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),e.render(t,f),e.setRenderTarget(h,d,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Jh extends Xt{constructor(e,t,n,s,r,a,o,c,l,f){e=e!==void 0?e:[],t=t!==void 0?t:Bs,super(e,t,n,s,r,a,o,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vg extends Ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Jh(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Dr(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:Mi});r.uniforms.tEquirect.value=t;const a=new sn(s,r),o=t.minFilter;return t.minFilter===Hn&&(t.minFilter=ln),new Gg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class Zh extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Wg extends Xt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Wt,f=Wt,h,d){super(null,a,o,c,l,f,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qg extends Nn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Vo=new X,jg=new X,Xg=new Qe;class Fi{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Vo.subVectors(n,t).cross(jg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Vo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Xg.getNormalMatrix(e),s=this.coplanarPoint(Vo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new Pc,ua=new X;class Qh{constructor(e=new Fi,t=new Fi,n=new Fi,s=new Fi,r=new Fi,a=new Fi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=si){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],f=s[5],h=s[6],d=s[7],p=s[8],x=s[9],y=s[10],_=s[11],g=s[12],R=s[13],A=s[14],b=s[15];if(n[0].setComponents(c-r,d-l,_-p,b-g).normalize(),n[1].setComponents(c+r,d+l,_+p,b+g).normalize(),n[2].setComponents(c+a,d+f,_+x,b+R).normalize(),n[3].setComponents(c-a,d-f,_-x,b-R).normalize(),n[4].setComponents(c-o,d-h,_-y,b-A).normalize(),t===si)n[5].setComponents(c+o,d+h,_+y,b+A).normalize();else if(t===Ha)n[5].setComponents(o,h,y,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ua.x=s.normal.x>0?e.max.x:e.min.x,ua.y=s.normal.y>0?e.max.y:e.min.y,ua.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ua)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}let fa=class extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}};class Ql extends Xt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ed extends Xt{constructor(e,t,n,s,r,a,o,c,l,f=Ds){if(f!==Ds&&f!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===Ds&&(n=Ki),n===void 0&&f===Gs&&(n=Hs),super(null,s,r,a,o,c,f,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Wt,this.minFilter=c!==void 0?c:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class fi extends hi{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,f=c+1,h=e/o,d=t/c,p=[],x=[],y=[],_=[];for(let g=0;g<f;g++){const R=g*d-a;for(let A=0;A<l;A++){const b=A*h-r;x.push(b,-R,0),y.push(0,0,1),_.push(A/o),_.push(1-g/c)}}for(let g=0;g<c;g++)for(let R=0;R<o;R++){const A=R+l*g,b=R+l*(g+1),L=R+1+l*(g+1),I=R+1+l*g;p.push(A,b,I),p.push(b,L,I)}this.setIndex(p),this.setAttribute("position",new li(x,3)),this.setAttribute("normal",new li(y,3)),this.setAttribute("uv",new li(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fi(e.width,e.height,e.widthSegments,e.heightSegments)}}class $g extends ro{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Kg extends ro{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Iu={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Yg{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){o++,r===!1&&s.onStart!==void 0&&s.onStart(f,a,o),r=!0},this.itemEnd=function(f){a++,s.onProgress!==void 0&&s.onProgress(f,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,h){return l.push(f,h),this},this.removeHandler=function(f){const h=l.indexOf(f);return h!==-1&&l.splice(h,2),this},this.getHandler=function(f){for(let h=0,d=l.length;h<d;h+=2){const p=l[h],x=l[h+1];if(p.global&&(p.lastIndex=0),p.test(f))return x}return null}}}const Jg=new Yg;class Lc{constructor(e){this.manager=e!==void 0?e:Jg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Lc.DEFAULT_MATERIAL_NAME="__DEFAULT";class Zg extends Lc{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Iu.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Mr("img");function c(){f(),Iu.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){f(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function f(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class td extends Lc{constructor(e){super(e)}load(e,t,n,s){const r=new Xt,a=new Zg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Ic extends Yh{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Qg extends hi{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class e0 extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function Du(i,e,t,n){const s=t0(n);switch(t){case Oh:return i*e;case kh:return i*e;case Uh:return i*e*2;case Fh:return i*e/s.components*s.byteLength;case Ac:return i*e/s.components*s.byteLength;case Bh:return i*e*2/s.components*s.byteLength;case Rc:return i*e*2/s.components*s.byteLength;case Nh:return i*e*3/s.components*s.byteLength;case xn:return i*e*4/s.components*s.byteLength;case Cc:return i*e*4/s.components*s.byteLength;case Sa:case Ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ta:case Aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Al:case Cl:return Math.max(i,16)*Math.max(e,8)/4;case Tl:case Rl:return Math.max(i,8)*Math.max(e,8)/2;case Pl:case Ll:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Il:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ol:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case kl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case zl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Vl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ql:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case jl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ra:case Xl:case $l:return Math.ceil(i/4)*Math.ceil(e/4)*16;case zh:case Kl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Yl:case Jl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function t0(i){switch(i){case Wn:case Lh:return{byteLength:1,components:1};case wr:case Ih:case Cr:return{byteLength:2,components:1};case Ec:case Tc:return{byteLength:2,components:4};case Ki:case Sc:case ii:return{byteLength:4,components:1};case Dh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mc);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function nd(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function n0(i){const e=new WeakMap;function t(o,c){const l=o.array,f=o.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,f),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const f=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,f);else{h.sort((p,x)=>p.start-x.start);let d=0;for(let p=1;p<h.length;p++){const x=h[d],y=h[p];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++d,h[d]=y)}h.length=d+1;for(let p=0,x=h.length;p<x;p++){const y=h[p];i.bufferSubData(l,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var i0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,s0=`#ifdef USE_ALPHAHASH
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
#endif`,r0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,a0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,l0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,c0=`#ifdef USE_AOMAP
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
#endif`,u0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,f0=`#ifdef USE_BATCHING
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
#endif`,h0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,d0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,p0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,m0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,g0=`#ifdef USE_IRIDESCENCE
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
#endif`,_0=`#ifdef USE_BUMPMAP
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
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,w0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,S0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,T0=`#define PI 3.141592653589793
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
} // validated`,A0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,R0=`vec3 transformedNormal = objectNormal;
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
#endif`,C0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,P0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,L0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,I0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,D0="gl_FragColor = linearToOutputTexel( gl_FragColor );",O0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,N0=`#ifdef USE_ENVMAP
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
#endif`,k0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,U0=`#ifdef USE_ENVMAP
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
#endif`,F0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,B0=`#ifdef USE_ENVMAP
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
#endif`,z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,H0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,G0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,V0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,W0=`#ifdef USE_GRADIENTMAP
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
}`,q0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,j0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,X0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$0=`uniform bool receiveShadow;
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
#endif`,K0=`#ifdef USE_ENVMAP
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
#endif`,Y0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,J0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Z0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,e_=`PhysicalMaterial material;
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
#endif`,t_=`struct PhysicalMaterial {
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
}`,n_=`
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
#endif`,i_=`#if defined( RE_IndirectDiffuse )
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
#endif`,s_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,r_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,a_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,c_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,u_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,h_=`#if defined( USE_POINTS_UV )
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
#endif`,d_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,p_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,m_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,g_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,__=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v_=`#ifdef USE_MORPHTARGETS
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
#endif`,y_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,b_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,w_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,E_=`#ifdef USE_NORMALMAP
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
#endif`,T_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,A_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,R_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,C_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,P_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,L_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,I_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,D_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,O_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,k_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,U_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,F_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,B_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,H_=`float getShadowMask() {
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
}`,G_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,V_=`#ifdef USE_SKINNING
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
#endif`,W_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,q_=`#ifdef USE_SKINNING
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
#endif`,j_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,X_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,K_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Y_=`#ifdef USE_TRANSMISSION
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
#endif`,J_=`#ifdef USE_TRANSMISSION
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
#endif`,Z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iv=`uniform sampler2D t2D;
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
}`,sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ov=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lv=`#include <common>
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
}`,cv=`#if DEPTH_PACKING == 3200
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
}`,uv=`#define DISTANCE
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
}`,fv=`#define DISTANCE
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
}`,hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pv=`uniform float scale;
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
}`,mv=`uniform vec3 diffuse;
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
}`,gv=`#include <common>
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
}`,_v=`uniform vec3 diffuse;
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
}`,vv=`#define LAMBERT
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
}`,yv=`#define LAMBERT
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
}`,xv=`#define MATCAP
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
}`,bv=`#define MATCAP
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
}`,wv=`#define NORMAL
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
}`,Mv=`#define NORMAL
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
}`,Sv=`#define PHONG
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
}`,Ev=`#define PHONG
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
}`,Tv=`#define STANDARD
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
}`,Av=`#define STANDARD
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
}`,Rv=`#define TOON
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
}`,Cv=`#define TOON
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
}`,Pv=`uniform float size;
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
}`,Lv=`uniform vec3 diffuse;
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
}`,Iv=`#include <common>
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
}`,Dv=`uniform vec3 color;
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
}`,Ov=`uniform float rotation;
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
}`,Nv=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:i0,alphahash_pars_fragment:s0,alphamap_fragment:r0,alphamap_pars_fragment:a0,alphatest_fragment:o0,alphatest_pars_fragment:l0,aomap_fragment:c0,aomap_pars_fragment:u0,batching_pars_vertex:f0,batching_vertex:h0,begin_vertex:d0,beginnormal_vertex:p0,bsdfs:m0,iridescence_fragment:g0,bumpmap_pars_fragment:_0,clipping_planes_fragment:v0,clipping_planes_pars_fragment:y0,clipping_planes_pars_vertex:x0,clipping_planes_vertex:b0,color_fragment:w0,color_pars_fragment:M0,color_pars_vertex:S0,color_vertex:E0,common:T0,cube_uv_reflection_fragment:A0,defaultnormal_vertex:R0,displacementmap_pars_vertex:C0,displacementmap_vertex:P0,emissivemap_fragment:L0,emissivemap_pars_fragment:I0,colorspace_fragment:D0,colorspace_pars_fragment:O0,envmap_fragment:N0,envmap_common_pars_fragment:k0,envmap_pars_fragment:U0,envmap_pars_vertex:F0,envmap_physical_pars_fragment:K0,envmap_vertex:B0,fog_vertex:z0,fog_pars_vertex:H0,fog_fragment:G0,fog_pars_fragment:V0,gradientmap_pars_fragment:W0,lightmap_pars_fragment:q0,lights_lambert_fragment:j0,lights_lambert_pars_fragment:X0,lights_pars_begin:$0,lights_toon_fragment:Y0,lights_toon_pars_fragment:J0,lights_phong_fragment:Z0,lights_phong_pars_fragment:Q0,lights_physical_fragment:e_,lights_physical_pars_fragment:t_,lights_fragment_begin:n_,lights_fragment_maps:i_,lights_fragment_end:s_,logdepthbuf_fragment:r_,logdepthbuf_pars_fragment:a_,logdepthbuf_pars_vertex:o_,logdepthbuf_vertex:l_,map_fragment:c_,map_pars_fragment:u_,map_particle_fragment:f_,map_particle_pars_fragment:h_,metalnessmap_fragment:d_,metalnessmap_pars_fragment:p_,morphinstance_vertex:m_,morphcolor_vertex:g_,morphnormal_vertex:__,morphtarget_pars_vertex:v_,morphtarget_vertex:y_,normal_fragment_begin:x_,normal_fragment_maps:b_,normal_pars_fragment:w_,normal_pars_vertex:M_,normal_vertex:S_,normalmap_pars_fragment:E_,clearcoat_normal_fragment_begin:T_,clearcoat_normal_fragment_maps:A_,clearcoat_pars_fragment:R_,iridescence_pars_fragment:C_,opaque_fragment:P_,packing:L_,premultiplied_alpha_fragment:I_,project_vertex:D_,dithering_fragment:O_,dithering_pars_fragment:N_,roughnessmap_fragment:k_,roughnessmap_pars_fragment:U_,shadowmap_pars_fragment:F_,shadowmap_pars_vertex:B_,shadowmap_vertex:z_,shadowmask_pars_fragment:H_,skinbase_vertex:G_,skinning_pars_vertex:V_,skinning_vertex:W_,skinnormal_vertex:q_,specularmap_fragment:j_,specularmap_pars_fragment:X_,tonemapping_fragment:$_,tonemapping_pars_fragment:K_,transmission_fragment:Y_,transmission_pars_fragment:J_,uv_pars_fragment:Z_,uv_pars_vertex:Q_,uv_vertex:ev,worldpos_vertex:tv,background_vert:nv,background_frag:iv,backgroundCube_vert:sv,backgroundCube_frag:rv,cube_vert:av,cube_frag:ov,depth_vert:lv,depth_frag:cv,distanceRGBA_vert:uv,distanceRGBA_frag:fv,equirect_vert:hv,equirect_frag:dv,linedashed_vert:pv,linedashed_frag:mv,meshbasic_vert:gv,meshbasic_frag:_v,meshlambert_vert:vv,meshlambert_frag:yv,meshmatcap_vert:xv,meshmatcap_frag:bv,meshnormal_vert:wv,meshnormal_frag:Mv,meshphong_vert:Sv,meshphong_frag:Ev,meshphysical_vert:Tv,meshphysical_frag:Av,meshtoon_vert:Rv,meshtoon_frag:Cv,points_vert:Pv,points_frag:Lv,shadow_vert:Iv,shadow_frag:Dv,sprite_vert:Ov,sprite_frag:Nv},ye={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},zn={basic:{uniforms:tn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:tn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new dt(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:tn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:tn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:tn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new dt(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:tn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:tn([ye.points,ye.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:tn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:tn([ye.common,ye.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:tn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:tn([ye.sprite,ye.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:tn([ye.common,ye.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:tn([ye.lights,ye.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};zn.physical={uniforms:tn([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const ha={r:0,b:0,g:0},ki=new ui,kv=new Nt;function Uv(i,e,t,n,s,r,a){const o=new dt(0);let c=r===!0?0:1,l,f,h=null,d=0,p=null;function x(A){let b=A.isScene===!0?A.background:null;return b&&b.isTexture&&(b=(A.backgroundBlurriness>0?t:e).get(b)),b}function y(A){let b=!1;const L=x(A);L===null?g(o,c):L&&L.isColor&&(g(L,1),b=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(A,b){const L=x(b);L&&(L.isCubeTexture||L.mapping===so)?(f===void 0&&(f=new sn(new Dr(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Ws(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(I,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),ki.copy(b.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),f.material.uniforms.envMap.value=L,f.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(kv.makeRotationFromEuler(ki)),f.material.toneMapped=ht.getTransfer(L.colorSpace)!==vt,(h!==L||d!==L.version||p!==i.toneMapping)&&(f.material.needsUpdate=!0,h=L,d=L.version,p=i.toneMapping),f.layers.enableAll(),A.unshift(f,f.geometry,f.material,0,0,null)):L&&L.isTexture&&(l===void 0&&(l=new sn(new fi(2,2),new kn({name:"BackgroundMaterial",uniforms:Ws(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=L,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ht.getTransfer(L.colorSpace)!==vt,L.matrixAutoUpdate===!0&&L.updateMatrix(),l.material.uniforms.uvTransform.value.copy(L.matrix),(h!==L||d!==L.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=L,d=L.version,p=i.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function g(A,b){A.getRGB(ha,Kh(i)),n.buffers.color.setClear(ha.r,ha.g,ha.b,b,a)}function R(){f!==void 0&&(f.geometry.dispose(),f.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(A,b=1){o.set(A),c=b,g(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(A){c=A,g(o,c)},render:y,addToRenderList:_,dispose:R}}function Fv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(w,N,F,B,$){let re=!1;const Q=h(B,F,N);r!==Q&&(r=Q,l(r.object)),re=p(w,B,F,$),re&&x(w,B,F,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(re||a)&&(a=!1,b(w,N,F,B),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return i.createVertexArray()}function l(w){return i.bindVertexArray(w)}function f(w){return i.deleteVertexArray(w)}function h(w,N,F){const B=F.wireframe===!0;let $=n[w.id];$===void 0&&($={},n[w.id]=$);let re=$[N.id];re===void 0&&(re={},$[N.id]=re);let Q=re[B];return Q===void 0&&(Q=d(c()),re[B]=Q),Q}function d(w){const N=[],F=[],B=[];for(let $=0;$<t;$++)N[$]=0,F[$]=0,B[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:F,attributeDivisors:B,object:w,attributes:{},index:null}}function p(w,N,F,B){const $=r.attributes,re=N.attributes;let Q=0;const ce=F.getAttributes();for(const Y in ce)if(ce[Y].location>=0){const Me=$[Y];let Ee=re[Y];if(Ee===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(Ee=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(Ee=w.instanceColor)),Me===void 0||Me.attribute!==Ee||Ee&&Me.data!==Ee.data)return!0;Q++}return r.attributesNum!==Q||r.index!==B}function x(w,N,F,B){const $={},re=N.attributes;let Q=0;const ce=F.getAttributes();for(const Y in ce)if(ce[Y].location>=0){let Me=re[Y];Me===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(Me=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(Me=w.instanceColor));const Ee={};Ee.attribute=Me,Me&&Me.data&&(Ee.data=Me.data),$[Y]=Ee,Q++}r.attributes=$,r.attributesNum=Q,r.index=B}function y(){const w=r.newAttributes;for(let N=0,F=w.length;N<F;N++)w[N]=0}function _(w){g(w,0)}function g(w,N){const F=r.newAttributes,B=r.enabledAttributes,$=r.attributeDivisors;F[w]=1,B[w]===0&&(i.enableVertexAttribArray(w),B[w]=1),$[w]!==N&&(i.vertexAttribDivisor(w,N),$[w]=N)}function R(){const w=r.newAttributes,N=r.enabledAttributes;for(let F=0,B=N.length;F<B;F++)N[F]!==w[F]&&(i.disableVertexAttribArray(F),N[F]=0)}function A(w,N,F,B,$,re,Q){Q===!0?i.vertexAttribIPointer(w,N,F,$,re):i.vertexAttribPointer(w,N,F,B,$,re)}function b(w,N,F,B){y();const $=B.attributes,re=F.getAttributes(),Q=N.defaultAttributeValues;for(const ce in re){const Y=re[ce];if(Y.location>=0){let de=$[ce];if(de===void 0&&(ce==="instanceMatrix"&&w.instanceMatrix&&(de=w.instanceMatrix),ce==="instanceColor"&&w.instanceColor&&(de=w.instanceColor)),de!==void 0){const Me=de.normalized,Ee=de.itemSize,We=e.get(de);if(We===void 0)continue;const nt=We.buffer,ee=We.type,fe=We.bytesPerElement,Ae=ee===i.INT||ee===i.UNSIGNED_INT||de.gpuType===Sc;if(de.isInterleavedBufferAttribute){const me=de.data,Ue=me.stride,ze=de.offset;if(me.isInstancedInterleavedBuffer){for(let Ze=0;Ze<Y.locationSize;Ze++)g(Y.location+Ze,me.meshPerAttribute);w.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ze=0;Ze<Y.locationSize;Ze++)_(Y.location+Ze);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let Ze=0;Ze<Y.locationSize;Ze++)A(Y.location+Ze,Ee/Y.locationSize,ee,Me,Ue*fe,(ze+Ee/Y.locationSize*Ze)*fe,Ae)}else{if(de.isInstancedBufferAttribute){for(let me=0;me<Y.locationSize;me++)g(Y.location+me,de.meshPerAttribute);w.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let me=0;me<Y.locationSize;me++)_(Y.location+me);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let me=0;me<Y.locationSize;me++)A(Y.location+me,Ee/Y.locationSize,ee,Me,Ee*fe,Ee/Y.locationSize*me*fe,Ae)}}else if(Q!==void 0){const Me=Q[ce];if(Me!==void 0)switch(Me.length){case 2:i.vertexAttrib2fv(Y.location,Me);break;case 3:i.vertexAttrib3fv(Y.location,Me);break;case 4:i.vertexAttrib4fv(Y.location,Me);break;default:i.vertexAttrib1fv(Y.location,Me)}}}}R()}function L(){D();for(const w in n){const N=n[w];for(const F in N){const B=N[F];for(const $ in B)f(B[$].object),delete B[$];delete N[F]}delete n[w]}}function I(w){if(n[w.id]===void 0)return;const N=n[w.id];for(const F in N){const B=N[F];for(const $ in B)f(B[$].object),delete B[$];delete N[F]}delete n[w.id]}function C(w){for(const N in n){const F=n[N];if(F[w.id]===void 0)continue;const B=F[w.id];for(const $ in B)f(B[$].object),delete B[$];delete F[w.id]}}function D(){S(),a=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:S,dispose:L,releaseStatesOfGeometry:I,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:_,disableUnusedAttributes:R}}function Bv(i,e,t){let n;function s(l){n=l}function r(l,f){i.drawArrays(n,l,f),t.update(f,n,1)}function a(l,f,h){h!==0&&(i.drawArraysInstanced(n,l,f,h),t.update(f,n,h))}function o(l,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,f,0,h);let p=0;for(let x=0;x<h;x++)p+=f[x];t.update(p,n,1)}function c(l,f,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<l.length;x++)a(l[x],f[x],d[x]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,f,0,d,0,h);let x=0;for(let y=0;y<h;y++)x+=f[y]*d[y];t.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function zv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==xn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const D=C===Cr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Wn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ii&&!D)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const f=c(l);f!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=x>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:R,maxVaryings:A,maxFragmentUniforms:b,vertexTextures:L,maxSamples:I}}function Hv(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Fi,o=new Qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=f(h,d,0)},this.setState=function(h,d,p){const x=h.clippingPlanes,y=h.clipIntersection,_=h.clipShadows,g=i.get(h);if(!s||x===null||x.length===0||r&&!_)r?f(null):l();else{const R=r?0:n,A=R*4;let b=g.clippingState||null;c.value=b,b=f(x,d,A,p);for(let L=0;L!==A;++L)b[L]=t[L];g.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=R}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(h,d,p,x){const y=h!==null?h.length:0;let _=null;if(y!==0){if(_=c.value,x!==!0||_===null){const g=p+y*4,R=d.matrixWorldInverse;o.getNormalMatrix(R),(_===null||_.length<g)&&(_=new Float32Array(g));for(let A=0,b=p;A!==y;++A,b+=4)a.copy(h[A]).applyMatrix4(R,o),a.normal.toArray(_,b),_[b+3]=a.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,_}}function Gv(i){let e=new WeakMap;function t(a,o){return o===Ml?a.mapping=Bs:o===Sl&&(a.mapping=zs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ml||o===Sl)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Vg(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Cs=4,Ou=[.125,.215,.35,.446,.526,.582],Hi=20,Wo=new Ic,Nu=new dt;let qo=null,jo=0,Xo=0,$o=!1;const Bi=(1+Math.sqrt(5))/2,xs=1/Bi,ku=[new X(-Bi,xs,0),new X(Bi,xs,0),new X(-xs,0,Bi),new X(xs,0,Bi),new X(0,Bi,-xs),new X(0,Bi,xs),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class Uu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){qo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel(),$o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qo,jo,Xo),this._renderer.xr.enabled=$o,e.scissorTest=!1,da(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bs||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel(),$o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Cr,format:xn,colorSpace:Vs,depthBuffer:!1},s=Fu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vv(r)),this._blurMaterial=Wv(r,e,t)}return s}_compileMaterial(e){const t=new sn(this._lodPlanes[0],e);this._renderer.compile(t,Wo)}_sceneToCubeUV(e,t,n,s){const o=new Dn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Nu),f.toneMapping=ai,f.autoClear=!1;const p=new Sr({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),x=new sn(new Dr,p);let y=!1;const _=e.background;_?_.isColor&&(p.color.copy(_),e.background=null,y=!0):(p.color.copy(Nu),y=!0);for(let g=0;g<6;g++){const R=g%3;R===0?(o.up.set(0,c[g],0),o.lookAt(l[g],0,0)):R===1?(o.up.set(0,0,c[g]),o.lookAt(0,l[g],0)):(o.up.set(0,c[g],0),o.lookAt(0,0,l[g]));const A=this._cubeSize;da(s,R*A,g>2?A:0,A,A),f.setRenderTarget(s),y&&f.render(x,o),f.render(e,o)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Bs||e.mapping===zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new sn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;da(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Wo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ku[(s-r-1)%ku.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new sn(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Hi-1),y=r/x,_=isFinite(r)?1+Math.floor(f*y):Hi;_>Hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Hi}`);const g=[];let R=0;for(let C=0;C<Hi;++C){const D=C/y,S=Math.exp(-D*D/2);g.push(S),C===0?R+=S:C<_&&(R+=2*S)}for(let C=0;C<g.length;C++)g[C]=g[C]/R;d.envMap.value=e.texture,d.samples.value=_,d.weights.value=g,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:A}=this;d.dTheta.value=x,d.mipInt.value=A-n;const b=this._sizeLods[s],L=3*b*(s>A-Cs?s-A+Cs:0),I=4*(this._cubeSize-b);da(t,L,I,3*b,2*b),c.setRenderTarget(t),c.render(h,Wo)}}function Vv(i){const e=[],t=[],n=[];let s=i;const r=i-Cs+1+Ou.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Cs?c=Ou[a-i+Cs-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),f=-l,h=1+l,d=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,x=6,y=3,_=2,g=1,R=new Float32Array(y*x*p),A=new Float32Array(_*x*p),b=new Float32Array(g*x*p);for(let I=0;I<p;I++){const C=I%3*2/3-1,D=I>2?0:-1,S=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];R.set(S,y*x*I),A.set(d,_*x*I);const w=[I,I,I,I,I,I];b.set(w,g*x*I)}const L=new hi;L.setAttribute("position",new Nn(R,y)),L.setAttribute("uv",new Nn(A,_)),L.setAttribute("faceIndex",new Nn(b,g)),e.push(L),s>Cs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Fu(i,e,t){const n=new Ti(i,e,t);return n.texture.mapping=so,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function da(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Wv(i,e,t){const n=new Float32Array(Hi),s=new X(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Dc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Bu(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function zu(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Dc(){return`

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
	`}function qv(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Ml||c===Sl,f=c===Bs||c===zs;if(l||f){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Uu(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return l&&p&&p.height>0||f&&p&&s(p)?(t===null&&(t=new Uu(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let c=0;const l=6;for(let f=0;f<l;f++)o[f]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function jv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ms("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Xv(i,e,t,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const p in d)e.update(d[p],i.ARRAY_BUFFER)}function l(h){const d=[],p=h.index,x=h.attributes.position;let y=0;if(p!==null){const R=p.array;y=p.version;for(let A=0,b=R.length;A<b;A+=3){const L=R[A+0],I=R[A+1],C=R[A+2];d.push(L,I,I,C,C,L)}}else if(x!==void 0){const R=x.array;y=x.version;for(let A=0,b=R.length/3-1;A<b;A+=3){const L=A+0,I=A+1,C=A+2;d.push(L,I,I,C,C,L)}}else return;const _=new(Gh(d)?$h:Xh)(d,1);_.version=y;const g=r.get(h);g&&e.remove(g),r.set(h,_)}function f(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:f}}function $v(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*a),t.update(p,n,1)}function l(d,p,x){x!==0&&(i.drawElementsInstanced(n,p,r,d*a,x),t.update(p,n,x))}function f(d,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,x);let _=0;for(let g=0;g<x;g++)_+=p[g];t.update(_,n,1)}function h(d,p,x,y){if(x===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<d.length;g++)l(d[g]/a,p[g],y[g]);else{_.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,y,0,x);let g=0;for(let R=0;R<x;R++)g+=p[R]*y[R];t.update(g,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function Kv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Yv(i,e,t){const n=new WeakMap,s=new Pt;function r(a,o,c){const l=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let S=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let A=0;p===!0&&(A=1),x===!0&&(A=2),y===!0&&(A=3);let b=o.attributes.position.count*A,L=1;b>e.maxTextureSize&&(L=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const I=new Float32Array(b*L*4*h),C=new Wh(I,b,L,h);C.type=ii,C.needsUpdate=!0;const D=A*4;for(let w=0;w<h;w++){const N=_[w],F=g[w],B=R[w],$=b*L*4*w;for(let re=0;re<N.count;re++){const Q=re*D;p===!0&&(s.fromBufferAttribute(N,re),I[$+Q+0]=s.x,I[$+Q+1]=s.y,I[$+Q+2]=s.z,I[$+Q+3]=0),x===!0&&(s.fromBufferAttribute(F,re),I[$+Q+4]=s.x,I[$+Q+5]=s.y,I[$+Q+6]=s.z,I[$+Q+7]=0),y===!0&&(s.fromBufferAttribute(B,re),I[$+Q+8]=s.x,I[$+Q+9]=s.y,I[$+Q+10]=s.z,I[$+Q+11]=B.itemSize===4?s.w:1)}}d={count:h,texture:C,size:new yt(b,L)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let y=0;y<l.length;y++)p+=l[y];const x=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Jv(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,f=c.geometry,h=e.get(c,f);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const id=new Xt,Hu=new ed(1,1),sd=new Wh,rd=new Tg,ad=new Jh,Gu=[],Vu=[],Wu=new Float32Array(16),qu=new Float32Array(9),ju=new Float32Array(4);function Zs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Gu[s];if(r===void 0&&(r=new Float32Array(s),Gu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ao(i,e){let t=Vu[e];t===void 0&&(t=new Int32Array(e),Vu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Zv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Qv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2fv(this.addr,e),Ut(t,e)}}function ey(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;i.uniform3fv(this.addr,e),Ut(t,e)}}function ty(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4fv(this.addr,e),Ut(t,e)}}function ny(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(kt(t,n))return;ju.set(n),i.uniformMatrix2fv(this.addr,!1,ju),Ut(t,n)}}function iy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(kt(t,n))return;qu.set(n),i.uniformMatrix3fv(this.addr,!1,qu),Ut(t,n)}}function sy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(kt(t,n))return;Wu.set(n),i.uniformMatrix4fv(this.addr,!1,Wu),Ut(t,n)}}function ry(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ay(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2iv(this.addr,e),Ut(t,e)}}function oy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3iv(this.addr,e),Ut(t,e)}}function ly(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4iv(this.addr,e),Ut(t,e)}}function cy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function uy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2uiv(this.addr,e),Ut(t,e)}}function fy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3uiv(this.addr,e),Ut(t,e)}}function hy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4uiv(this.addr,e),Ut(t,e)}}function dy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Hu.compareFunction=Hh,r=Hu):r=id,t.setTexture2D(e||r,s)}function py(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||rd,s)}function my(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ad,s)}function gy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||sd,s)}function _y(i){switch(i){case 5126:return Zv;case 35664:return Qv;case 35665:return ey;case 35666:return ty;case 35674:return ny;case 35675:return iy;case 35676:return sy;case 5124:case 35670:return ry;case 35667:case 35671:return ay;case 35668:case 35672:return oy;case 35669:case 35673:return ly;case 5125:return cy;case 36294:return uy;case 36295:return fy;case 36296:return hy;case 35678:case 36198:case 36298:case 36306:case 35682:return dy;case 35679:case 36299:case 36307:return py;case 35680:case 36300:case 36308:case 36293:return my;case 36289:case 36303:case 36311:case 36292:return gy}}function vy(i,e){i.uniform1fv(this.addr,e)}function yy(i,e){const t=Zs(e,this.size,2);i.uniform2fv(this.addr,t)}function xy(i,e){const t=Zs(e,this.size,3);i.uniform3fv(this.addr,t)}function by(i,e){const t=Zs(e,this.size,4);i.uniform4fv(this.addr,t)}function wy(i,e){const t=Zs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function My(i,e){const t=Zs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Sy(i,e){const t=Zs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ey(i,e){i.uniform1iv(this.addr,e)}function Ty(i,e){i.uniform2iv(this.addr,e)}function Ay(i,e){i.uniform3iv(this.addr,e)}function Ry(i,e){i.uniform4iv(this.addr,e)}function Cy(i,e){i.uniform1uiv(this.addr,e)}function Py(i,e){i.uniform2uiv(this.addr,e)}function Ly(i,e){i.uniform3uiv(this.addr,e)}function Iy(i,e){i.uniform4uiv(this.addr,e)}function Dy(i,e,t){const n=this.cache,s=e.length,r=ao(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||id,r[a])}function Oy(i,e,t){const n=this.cache,s=e.length,r=ao(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||rd,r[a])}function Ny(i,e,t){const n=this.cache,s=e.length,r=ao(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||ad,r[a])}function ky(i,e,t){const n=this.cache,s=e.length,r=ao(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||sd,r[a])}function Uy(i){switch(i){case 5126:return vy;case 35664:return yy;case 35665:return xy;case 35666:return by;case 35674:return wy;case 35675:return My;case 35676:return Sy;case 5124:case 35670:return Ey;case 35667:case 35671:return Ty;case 35668:case 35672:return Ay;case 35669:case 35673:return Ry;case 5125:return Cy;case 36294:return Py;case 36295:return Ly;case 36296:return Iy;case 35678:case 36198:case 36298:case 36306:case 35682:return Dy;case 35679:case 36299:case 36307:return Oy;case 35680:case 36300:case 36308:case 36293:return Ny;case 36289:case 36303:case 36311:case 36292:return ky}}class Fy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_y(t.type)}}class By{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Uy(t.type)}}class zy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Ko=/(\w+)(\])?(\[|\.)?/g;function Xu(i,e){i.seq.push(e),i.map[e.id]=e}function Hy(i,e,t){const n=i.name,s=n.length;for(Ko.lastIndex=0;;){const r=Ko.exec(n),a=Ko.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Xu(t,l===void 0?new Fy(o,i,e):new By(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new zy(o),Xu(t,h)),t=h}}}class Ca{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Hy(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function $u(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Gy=37297;let Vy=0;function Wy(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Ku=new Qe;function qy(i){ht._getMatrix(Ku,ht.workingColorSpace,i);const e=`mat3( ${Ku.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case za:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Yu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Wy(i.getShaderSource(e),a)}else return s}function jy(i,e){const t=qy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Xy(i,e){let t;switch(e){case Ym:t="Linear";break;case Jm:t="Reinhard";break;case Zm:t="Cineon";break;case Qm:t="ACESFilmic";break;case tg:t="AgX";break;case ng:t="Neutral";break;case eg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const pa=new X;function $y(){ht.getLuminanceCoefficients(pa);const i=pa.x.toFixed(4),e=pa.y.toFixed(4),t=pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ky(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function Yy(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Jy(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function dr(i){return i!==""}function Ju(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zy=/^[ \t]*#include +<([\w\d./]+)>/gm;function ec(i){return i.replace(Zy,ex)}const Qy=new Map;function ex(i,e){let t=et[e];if(t===void 0){const n=Qy.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ec(t)}const tx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qu(i){return i.replace(tx,nx)}function nx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ef(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function ix(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Cm?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function sx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Bs:case zs:e="ENVMAP_TYPE_CUBE";break;case so:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case zs:e="ENVMAP_MODE_REFRACTION";break}return e}function ax(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ch:e="ENVMAP_BLENDING_MULTIPLY";break;case $m:e="ENVMAP_BLENDING_MIX";break;case Km:e="ENVMAP_BLENDING_ADD";break}return e}function ox(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function lx(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=ix(t),l=sx(t),f=rx(t),h=ax(t),d=ox(t),p=Ky(t),x=Yy(r),y=s.createProgram();let _,g,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(dr).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(dr).join(`
`),g.length>0&&(g+=`
`)):(_=[ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),g=[ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?et.tonemapping_pars_fragment:"",t.toneMapping!==ai?Xy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,jy("linearToOutputTexel",t.outputColorSpace),$y(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),a=ec(a),a=Ju(a,t),a=Zu(a,t),o=ec(o),o=Ju(o,t),o=Zu(o,t),a=Qu(a),o=Qu(o),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",t.glslVersion===pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const A=R+_+a,b=R+g+o,L=$u(s,s.VERTEX_SHADER,A),I=$u(s,s.FRAGMENT_SHADER,b);s.attachShader(y,L),s.attachShader(y,I),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function C(N){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(y).trim(),B=s.getShaderInfoLog(L).trim(),$=s.getShaderInfoLog(I).trim();let re=!0,Q=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(re=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,L,I);else{const ce=Yu(s,L,"vertex"),Y=Yu(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+F+`
`+ce+`
`+Y)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(B===""||$==="")&&(Q=!1);Q&&(N.diagnostics={runnable:re,programLog:F,vertexShader:{log:B,prefix:_},fragmentShader:{log:$,prefix:g}})}s.deleteShader(L),s.deleteShader(I),D=new Ca(s,y),S=Jy(s,y)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(y,Gy)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vy++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=L,this.fragmentShader=I,this}let cx=0;class ux{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new fx(e),t.set(e,n)),n}}class fx{constructor(e){this.id=cx++,this.code=e,this.usedTimes=0}}function hx(i,e,t,n,s,r,a){const o=new qh,c=new ux,l=new Set,f=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return l.add(S),S===0?"uv":`uv${S}`}function _(S,w,N,F,B){const $=F.fog,re=B.geometry,Q=S.isMeshStandardMaterial?F.environment:null,ce=(S.isMeshStandardMaterial?t:e).get(S.envMap||Q),Y=ce&&ce.mapping===so?ce.image.height:null,de=x[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const Me=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Ee=Me!==void 0?Me.length:0;let We=0;re.morphAttributes.position!==void 0&&(We=1),re.morphAttributes.normal!==void 0&&(We=2),re.morphAttributes.color!==void 0&&(We=3);let nt,ee,fe,Ae;if(de){const $e=zn[de];nt=$e.vertexShader,ee=$e.fragmentShader}else nt=S.vertexShader,ee=S.fragmentShader,c.update(S),fe=c.getVertexShaderID(S),Ae=c.getFragmentShaderID(S);const me=i.getRenderTarget(),Ue=i.state.buffers.depth.getReversed(),ze=B.isInstancedMesh===!0,Ze=B.isBatchedMesh===!0,J=!!S.map,ve=!!S.matcap,at=!!ce,O=!!S.aoMap,Rt=!!S.lightMap,Ye=!!S.bumpMap,Re=!!S.normalMap,Pe=!!S.displacementMap,gt=!!S.emissiveMap,De=!!S.metalnessMap,P=!!S.roughnessMap,M=S.anisotropy>0,V=S.clearcoat>0,se=S.dispersion>0,ae=S.iridescence>0,te=S.sheen>0,Oe=S.transmission>0,he=M&&!!S.anisotropyMap,Te=V&&!!S.clearcoatMap,ot=V&&!!S.clearcoatNormalMap,ue=V&&!!S.clearcoatRoughnessMap,Le=ae&&!!S.iridescenceMap,Be=ae&&!!S.iridescenceThicknessMap,Ge=te&&!!S.sheenColorMap,Ce=te&&!!S.sheenRoughnessMap,xe=!!S.specularMap,Je=!!S.specularColorMap,pt=!!S.specularIntensityMap,U=Oe&&!!S.transmissionMap,pe=Oe&&!!S.thicknessMap,Z=!!S.gradientMap,ne=!!S.alphaMap,be=S.alphaTest>0,W=!!S.alphaHash,je=!!S.extensions;let Mt=ai;S.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Mt=i.toneMapping);const Ft={shaderID:de,shaderType:S.type,shaderName:S.name,vertexShader:nt,fragmentShader:ee,defines:S.defines,customVertexShaderID:fe,customFragmentShaderID:Ae,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ze,batchingColor:Ze&&B._colorsTexture!==null,instancing:ze,instancingColor:ze&&B.instanceColor!==null,instancingMorph:ze&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:me===null?i.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Vs,alphaToCoverage:!!S.alphaToCoverage,map:J,matcap:ve,envMap:at,envMapMode:at&&ce.mapping,envMapCubeUVHeight:Y,aoMap:O,lightMap:Rt,bumpMap:Ye,normalMap:Re,displacementMap:d&&Pe,emissiveMap:gt,normalMapObjectSpace:Re&&S.normalMapType===og,normalMapTangentSpace:Re&&S.normalMapType===ag,metalnessMap:De,roughnessMap:P,anisotropy:M,anisotropyMap:he,clearcoat:V,clearcoatMap:Te,clearcoatNormalMap:ot,clearcoatRoughnessMap:ue,dispersion:se,iridescence:ae,iridescenceMap:Le,iridescenceThicknessMap:Be,sheen:te,sheenColorMap:Ge,sheenRoughnessMap:Ce,specularMap:xe,specularColorMap:Je,specularIntensityMap:pt,transmission:Oe,transmissionMap:U,thicknessMap:pe,gradientMap:Z,opaque:S.transparent===!1&&S.blending===wn&&S.alphaToCoverage===!1,alphaMap:ne,alphaTest:be,alphaHash:W,combine:S.combine,mapUv:J&&y(S.map.channel),aoMapUv:O&&y(S.aoMap.channel),lightMapUv:Rt&&y(S.lightMap.channel),bumpMapUv:Ye&&y(S.bumpMap.channel),normalMapUv:Re&&y(S.normalMap.channel),displacementMapUv:Pe&&y(S.displacementMap.channel),emissiveMapUv:gt&&y(S.emissiveMap.channel),metalnessMapUv:De&&y(S.metalnessMap.channel),roughnessMapUv:P&&y(S.roughnessMap.channel),anisotropyMapUv:he&&y(S.anisotropyMap.channel),clearcoatMapUv:Te&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:ot&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&y(S.sheenRoughnessMap.channel),specularMapUv:xe&&y(S.specularMap.channel),specularColorMapUv:Je&&y(S.specularColorMap.channel),specularIntensityMapUv:pt&&y(S.specularIntensityMap.channel),transmissionMapUv:U&&y(S.transmissionMap.channel),thicknessMapUv:pe&&y(S.thicknessMap.channel),alphaMapUv:ne&&y(S.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(Re||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!re.attributes.uv&&(J||ne),fog:!!$,useFog:S.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ue,skinning:B.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:We,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Mt,decodeVideoTexture:J&&S.map.isVideoTexture===!0&&ht.getTransfer(S.map.colorSpace)===vt,decodeVideoTextureEmissive:gt&&S.emissiveMap.isVideoTexture===!0&&ht.getTransfer(S.emissiveMap.colorSpace)===vt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ei,flipSided:S.side===cn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:je&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&S.extensions.multiDraw===!0||Ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ft.vertexUv1s=l.has(1),Ft.vertexUv2s=l.has(2),Ft.vertexUv3s=l.has(3),l.clear(),Ft}function g(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const N in S.defines)w.push(N),w.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(R(w,S),A(w,S),w.push(i.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function R(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function A(S,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),S.push(o.mask)}function b(S){const w=x[S.type];let N;if(w){const F=zn[w];N=Bg.clone(F.uniforms)}else N=S.uniforms;return N}function L(S,w){let N;for(let F=0,B=f.length;F<B;F++){const $=f[F];if($.cacheKey===w){N=$,++N.usedTimes;break}}return N===void 0&&(N=new lx(i,w,S,r),f.push(N)),N}function I(S){if(--S.usedTimes===0){const w=f.indexOf(S);f[w]=f[f.length-1],f.pop(),S.destroy()}}function C(S){c.remove(S)}function D(){c.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:b,acquireProgram:L,releaseProgram:I,releaseShaderCache:C,programs:f,dispose:D}}function dx(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function px(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function tf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function nf(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,p,x,y,_){let g=i[e];return g===void 0?(g={id:h.id,object:h,geometry:d,material:p,groupOrder:x,renderOrder:h.renderOrder,z:y,group:_},i[e]=g):(g.id=h.id,g.object=h,g.geometry=d,g.material=p,g.groupOrder=x,g.renderOrder=h.renderOrder,g.z=y,g.group=_),e++,g}function o(h,d,p,x,y,_){const g=a(h,d,p,x,y,_);p.transmission>0?n.push(g):p.transparent===!0?s.push(g):t.push(g)}function c(h,d,p,x,y,_){const g=a(h,d,p,x,y,_);p.transmission>0?n.unshift(g):p.transparent===!0?s.unshift(g):t.unshift(g)}function l(h,d){t.length>1&&t.sort(h||px),n.length>1&&n.sort(d||tf),s.length>1&&s.sort(d||tf)}function f(){for(let h=e,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:f,sort:l}}function mx(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new nf,i.set(n,[a])):s>=r.length?(a=new nf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function gx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new dt};break;case"SpotLight":t={position:new X,direction:new X,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new X,halfWidth:new X,halfHeight:new X};break}return i[e.id]=t,t}}}function _x(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let vx=0;function yx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function xx(i){const e=new gx,t=_x(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new X);const s=new X,r=new Nt,a=new Nt;function o(l){let f=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,x=0,y=0,_=0,g=0,R=0,A=0,b=0,L=0,I=0,C=0;l.sort(yx);for(let S=0,w=l.length;S<w;S++){const N=l[S],F=N.color,B=N.intensity,$=N.distance,re=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=F.r*B,h+=F.g*B,d+=F.b*B;else if(N.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(N.sh.coefficients[Q],B);C++}else if(N.isDirectionalLight){const Q=e.get(N);if(Q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ce=N.shadow,Y=t.get(N);Y.shadowIntensity=ce.intensity,Y.shadowBias=ce.bias,Y.shadowNormalBias=ce.normalBias,Y.shadowRadius=ce.radius,Y.shadowMapSize=ce.mapSize,n.directionalShadow[p]=Y,n.directionalShadowMap[p]=re,n.directionalShadowMatrix[p]=N.shadow.matrix,R++}n.directional[p]=Q,p++}else if(N.isSpotLight){const Q=e.get(N);Q.position.setFromMatrixPosition(N.matrixWorld),Q.color.copy(F).multiplyScalar(B),Q.distance=$,Q.coneCos=Math.cos(N.angle),Q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Q.decay=N.decay,n.spot[y]=Q;const ce=N.shadow;if(N.map&&(n.spotLightMap[L]=N.map,L++,ce.updateMatrices(N),N.castShadow&&I++),n.spotLightMatrix[y]=ce.matrix,N.castShadow){const Y=t.get(N);Y.shadowIntensity=ce.intensity,Y.shadowBias=ce.bias,Y.shadowNormalBias=ce.normalBias,Y.shadowRadius=ce.radius,Y.shadowMapSize=ce.mapSize,n.spotShadow[y]=Y,n.spotShadowMap[y]=re,b++}y++}else if(N.isRectAreaLight){const Q=e.get(N);Q.color.copy(F).multiplyScalar(B),Q.halfWidth.set(N.width*.5,0,0),Q.halfHeight.set(0,N.height*.5,0),n.rectArea[_]=Q,_++}else if(N.isPointLight){const Q=e.get(N);if(Q.color.copy(N.color).multiplyScalar(N.intensity),Q.distance=N.distance,Q.decay=N.decay,N.castShadow){const ce=N.shadow,Y=t.get(N);Y.shadowIntensity=ce.intensity,Y.shadowBias=ce.bias,Y.shadowNormalBias=ce.normalBias,Y.shadowRadius=ce.radius,Y.shadowMapSize=ce.mapSize,Y.shadowCameraNear=ce.camera.near,Y.shadowCameraFar=ce.camera.far,n.pointShadow[x]=Y,n.pointShadowMap[x]=re,n.pointShadowMatrix[x]=N.shadow.matrix,A++}n.point[x]=Q,x++}else if(N.isHemisphereLight){const Q=e.get(N);Q.skyColor.copy(N.color).multiplyScalar(B),Q.groundColor.copy(N.groundColor).multiplyScalar(B),n.hemi[g]=Q,g++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=h,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==p||D.pointLength!==x||D.spotLength!==y||D.rectAreaLength!==_||D.hemiLength!==g||D.numDirectionalShadows!==R||D.numPointShadows!==A||D.numSpotShadows!==b||D.numSpotMaps!==L||D.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=_,n.point.length=x,n.hemi.length=g,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=b+L-I,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=C,D.directionalLength=p,D.pointLength=x,D.spotLength=y,D.rectAreaLength=_,D.hemiLength=g,D.numDirectionalShadows=R,D.numPointShadows=A,D.numSpotShadows=b,D.numSpotMaps=L,D.numLightProbes=C,n.version=vx++)}function c(l,f){let h=0,d=0,p=0,x=0,y=0;const _=f.matrixWorldInverse;for(let g=0,R=l.length;g<R;g++){const A=l[g];if(A.isDirectionalLight){const b=n.directional[h];b.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),h++}else if(A.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),p++}else if(A.isRectAreaLight){const b=n.rectArea[x];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(_),a.identity(),r.copy(A.matrixWorld),r.premultiply(_),a.extractRotation(r),b.halfWidth.set(A.width*.5,0,0),b.halfHeight.set(0,A.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(A.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(_),d++}else if(A.isHemisphereLight){const b=n.hemi[y];b.direction.setFromMatrixPosition(A.matrixWorld),b.direction.transformDirection(_),y++}}}return{setup:o,setupView:c,state:n}}function sf(i){const e=new xx(i),t=[],n=[];function s(f){l.camera=f,t.length=0,n.length=0}function r(f){t.push(f)}function a(f){n.push(f)}function o(){e.setup(t)}function c(f){e.setupView(t,f)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function bx(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new sf(i),e.set(s,[o])):r>=a.length?(o=new sf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const wx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mx=`uniform sampler2D shadow_pass;
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
}`;function Sx(i,e,t){let n=new Qh;const s=new yt,r=new yt,a=new Pt,o=new $g({depthPacking:rg}),c=new Kg,l={},f=t.maxTextureSize,h={[Ei]:cn,[cn]:Ei,[ei]:ei},d=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:wx,fragmentShader:Mx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const x=new hi;x.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new sn(x,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rh;let g=this.type;this.render=function(I,C,D){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||I.length===0)return;const S=i.getRenderTarget(),w=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Mi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=g!==Qn&&this.type===Qn,$=g===Qn&&this.type!==Qn;for(let re=0,Q=I.length;re<Q;re++){const ce=I[re],Y=ce.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const de=Y.getFrameExtents();if(s.multiply(de),r.copy(Y.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/de.x),s.x=r.x*de.x,Y.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/de.y),s.y=r.y*de.y,Y.mapSize.y=r.y)),Y.map===null||B===!0||$===!0){const Ee=this.type!==Qn?{minFilter:Wt,magFilter:Wt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ti(s.x,s.y,Ee),Y.map.texture.name=ce.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const Me=Y.getViewportCount();for(let Ee=0;Ee<Me;Ee++){const We=Y.getViewport(Ee);a.set(r.x*We.x,r.y*We.y,r.x*We.z,r.y*We.w),F.viewport(a),Y.updateMatrices(ce,Ee),n=Y.getFrustum(),b(C,D,Y.camera,ce,this.type)}Y.isPointLightShadow!==!0&&this.type===Qn&&R(Y,D),Y.needsUpdate=!1}g=this.type,_.needsUpdate=!1,i.setRenderTarget(S,w,N)};function R(I,C){const D=e.update(y);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ti(s.x,s.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(C,null,D,d,y,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(C,null,D,p,y,null)}function A(I,C,D,S){let w=null;const N=D.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(N!==void 0)w=N;else if(w=D.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const F=w.uuid,B=C.uuid;let $=l[F];$===void 0&&($={},l[F]=$);let re=$[B];re===void 0&&(re=w.clone(),$[B]=re,C.addEventListener("dispose",L)),w=re}if(w.visible=C.visible,w.wireframe=C.wireframe,S===Qn?w.side=C.shadowSide!==null?C.shadowSide:C.side:w.side=C.shadowSide!==null?C.shadowSide:h[C.side],w.alphaMap=C.alphaMap,w.alphaTest=C.alphaTest,w.map=C.map,w.clipShadows=C.clipShadows,w.clippingPlanes=C.clippingPlanes,w.clipIntersection=C.clipIntersection,w.displacementMap=C.displacementMap,w.displacementScale=C.displacementScale,w.displacementBias=C.displacementBias,w.wireframeLinewidth=C.wireframeLinewidth,w.linewidth=C.linewidth,D.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const F=i.properties.get(w);F.light=D}return w}function b(I,C,D,S,w){if(I.visible===!1)return;if(I.layers.test(C.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&w===Qn)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,I.matrixWorld);const B=e.update(I),$=I.material;if(Array.isArray($)){const re=B.groups;for(let Q=0,ce=re.length;Q<ce;Q++){const Y=re[Q],de=$[Y.materialIndex];if(de&&de.visible){const Me=A(I,de,S,w);I.onBeforeShadow(i,I,C,D,B,Me,Y),i.renderBufferDirect(D,null,B,Me,I,Y),I.onAfterShadow(i,I,C,D,B,Me,Y)}}}else if($.visible){const re=A(I,$,S,w);I.onBeforeShadow(i,I,C,D,B,re,null),i.renderBufferDirect(D,null,B,re,I,null),I.onAfterShadow(i,I,C,D,B,re,null)}}const F=I.children;for(let B=0,$=F.length;B<$;B++)b(F[B],C,D,S,w)}function L(I){I.target.removeEventListener("dispose",L);for(const D in l){const S=l[D],w=I.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}const Ex={[gl]:_l,[vl]:bl,[yl]:wl,[Fs]:xl,[_l]:gl,[bl]:vl,[wl]:yl,[xl]:Fs};function Tx(i,e){function t(){let U=!1;const pe=new Pt;let Z=null;const ne=new Pt(0,0,0,0);return{setMask:function(be){Z!==be&&!U&&(i.colorMask(be,be,be,be),Z=be)},setLocked:function(be){U=be},setClear:function(be,W,je,Mt,Ft){Ft===!0&&(be*=Mt,W*=Mt,je*=Mt),pe.set(be,W,je,Mt),ne.equals(pe)===!1&&(i.clearColor(be,W,je,Mt),ne.copy(pe))},reset:function(){U=!1,Z=null,ne.set(-1,0,0,0)}}}function n(){let U=!1,pe=!1,Z=null,ne=null,be=null;return{setReversed:function(W){if(pe!==W){const je=e.get("EXT_clip_control");pe?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT);const Mt=be;be=null,this.setClear(Mt)}pe=W},getReversed:function(){return pe},setTest:function(W){W?me(i.DEPTH_TEST):Ue(i.DEPTH_TEST)},setMask:function(W){Z!==W&&!U&&(i.depthMask(W),Z=W)},setFunc:function(W){if(pe&&(W=Ex[W]),ne!==W){switch(W){case gl:i.depthFunc(i.NEVER);break;case _l:i.depthFunc(i.ALWAYS);break;case vl:i.depthFunc(i.LESS);break;case Fs:i.depthFunc(i.LEQUAL);break;case yl:i.depthFunc(i.EQUAL);break;case xl:i.depthFunc(i.GEQUAL);break;case bl:i.depthFunc(i.GREATER);break;case wl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ne=W}},setLocked:function(W){U=W},setClear:function(W){be!==W&&(pe&&(W=1-W),i.clearDepth(W),be=W)},reset:function(){U=!1,Z=null,ne=null,be=null,pe=!1}}}function s(){let U=!1,pe=null,Z=null,ne=null,be=null,W=null,je=null,Mt=null,Ft=null;return{setTest:function($e){U||($e?me(i.STENCIL_TEST):Ue(i.STENCIL_TEST))},setMask:function($e){pe!==$e&&!U&&(i.stencilMask($e),pe=$e)},setFunc:function($e,$t,fn){(Z!==$e||ne!==$t||be!==fn)&&(i.stencilFunc($e,$t,fn),Z=$e,ne=$t,be=fn)},setOp:function($e,$t,fn){(W!==$e||je!==$t||Mt!==fn)&&(i.stencilOp($e,$t,fn),W=$e,je=$t,Mt=fn)},setLocked:function($e){U=$e},setClear:function($e){Ft!==$e&&(i.clearStencil($e),Ft=$e)},reset:function(){U=!1,pe=null,Z=null,ne=null,be=null,W=null,je=null,Mt=null,Ft=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let f={},h={},d=new WeakMap,p=[],x=null,y=!1,_=null,g=null,R=null,A=null,b=null,L=null,I=null,C=new dt(0,0,0),D=0,S=!1,w=null,N=null,F=null,B=null,$=null;const re=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,ce=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(Y)[1]),Q=ce>=1):Y.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),Q=ce>=2);let de=null,Me={};const Ee=i.getParameter(i.SCISSOR_BOX),We=i.getParameter(i.VIEWPORT),nt=new Pt().fromArray(Ee),ee=new Pt().fromArray(We);function fe(U,pe,Z,ne){const be=new Uint8Array(4),W=i.createTexture();i.bindTexture(U,W),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let je=0;je<Z;je++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,ne,0,i.RGBA,i.UNSIGNED_BYTE,be):i.texImage2D(pe+je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,be);return W}const Ae={};Ae[i.TEXTURE_2D]=fe(i.TEXTURE_2D,i.TEXTURE_2D,1),Ae[i.TEXTURE_CUBE_MAP]=fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[i.TEXTURE_2D_ARRAY]=fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ae[i.TEXTURE_3D]=fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),me(i.DEPTH_TEST),a.setFunc(Fs),Ye(!1),Re(fu),me(i.CULL_FACE),O(Mi);function me(U){f[U]!==!0&&(i.enable(U),f[U]=!0)}function Ue(U){f[U]!==!1&&(i.disable(U),f[U]=!1)}function ze(U,pe){return h[U]!==pe?(i.bindFramebuffer(U,pe),h[U]=pe,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=pe),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function Ze(U,pe){let Z=p,ne=!1;if(U){Z=d.get(pe),Z===void 0&&(Z=[],d.set(pe,Z));const be=U.textures;if(Z.length!==be.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let W=0,je=be.length;W<je;W++)Z[W]=i.COLOR_ATTACHMENT0+W;Z.length=be.length,ne=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,ne=!0);ne&&i.drawBuffers(Z)}function J(U){return x!==U?(i.useProgram(U),x=U,!0):!1}const ve={[zi]:i.FUNC_ADD,[Lm]:i.FUNC_SUBTRACT,[Im]:i.FUNC_REVERSE_SUBTRACT};ve[Dm]=i.MIN,ve[Om]=i.MAX;const at={[Nm]:i.ZERO,[km]:i.ONE,[Um]:i.SRC_COLOR,[pl]:i.SRC_ALPHA,[Vm]:i.SRC_ALPHA_SATURATE,[Hm]:i.DST_COLOR,[Bm]:i.DST_ALPHA,[Fm]:i.ONE_MINUS_SRC_COLOR,[ml]:i.ONE_MINUS_SRC_ALPHA,[Gm]:i.ONE_MINUS_DST_COLOR,[zm]:i.ONE_MINUS_DST_ALPHA,[Wm]:i.CONSTANT_COLOR,[qm]:i.ONE_MINUS_CONSTANT_COLOR,[jm]:i.CONSTANT_ALPHA,[Xm]:i.ONE_MINUS_CONSTANT_ALPHA};function O(U,pe,Z,ne,be,W,je,Mt,Ft,$e){if(U===Mi){y===!0&&(Ue(i.BLEND),y=!1);return}if(y===!1&&(me(i.BLEND),y=!0),U!==Pm){if(U!==_||$e!==S){if((g!==zi||b!==zi)&&(i.blendEquation(i.FUNC_ADD),g=zi,b=zi),$e)switch(U){case wn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xr:i.blendFunc(i.ONE,i.ONE);break;case Fa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ba:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case wn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Fa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ba:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}R=null,A=null,L=null,I=null,C.set(0,0,0),D=0,_=U,S=$e}return}be=be||pe,W=W||Z,je=je||ne,(pe!==g||be!==b)&&(i.blendEquationSeparate(ve[pe],ve[be]),g=pe,b=be),(Z!==R||ne!==A||W!==L||je!==I)&&(i.blendFuncSeparate(at[Z],at[ne],at[W],at[je]),R=Z,A=ne,L=W,I=je),(Mt.equals(C)===!1||Ft!==D)&&(i.blendColor(Mt.r,Mt.g,Mt.b,Ft),C.copy(Mt),D=Ft),_=U,S=!1}function Rt(U,pe){U.side===ei?Ue(i.CULL_FACE):me(i.CULL_FACE);let Z=U.side===cn;pe&&(Z=!Z),Ye(Z),U.blending===wn&&U.transparent===!1?O(Mi):O(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const ne=U.stencilWrite;o.setTest(ne),ne&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),gt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?me(i.SAMPLE_ALPHA_TO_COVERAGE):Ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(U){w!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),w=U)}function Re(U){U!==Am?(me(i.CULL_FACE),U!==N&&(U===fu?i.cullFace(i.BACK):U===Rm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ue(i.CULL_FACE),N=U}function Pe(U){U!==F&&(Q&&i.lineWidth(U),F=U)}function gt(U,pe,Z){U?(me(i.POLYGON_OFFSET_FILL),(B!==pe||$!==Z)&&(i.polygonOffset(pe,Z),B=pe,$=Z)):Ue(i.POLYGON_OFFSET_FILL)}function De(U){U?me(i.SCISSOR_TEST):Ue(i.SCISSOR_TEST)}function P(U){U===void 0&&(U=i.TEXTURE0+re-1),de!==U&&(i.activeTexture(U),de=U)}function M(U,pe,Z){Z===void 0&&(de===null?Z=i.TEXTURE0+re-1:Z=de);let ne=Me[Z];ne===void 0&&(ne={type:void 0,texture:void 0},Me[Z]=ne),(ne.type!==U||ne.texture!==pe)&&(de!==Z&&(i.activeTexture(Z),de=Z),i.bindTexture(U,pe||Ae[U]),ne.type=U,ne.texture=pe)}function V(){const U=Me[de];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function se(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Oe(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ot(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Be(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ge(U){nt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),nt.copy(U))}function Ce(U){ee.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),ee.copy(U))}function xe(U,pe){let Z=l.get(pe);Z===void 0&&(Z=new WeakMap,l.set(pe,Z));let ne=Z.get(U);ne===void 0&&(ne=i.getUniformBlockIndex(pe,U.name),Z.set(U,ne))}function Je(U,pe){const ne=l.get(pe).get(U);c.get(pe)!==ne&&(i.uniformBlockBinding(pe,ne,U.__bindingPointIndex),c.set(pe,ne))}function pt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},de=null,Me={},h={},d=new WeakMap,p=[],x=null,y=!1,_=null,g=null,R=null,A=null,b=null,L=null,I=null,C=new dt(0,0,0),D=0,S=!1,w=null,N=null,F=null,B=null,$=null,nt.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:me,disable:Ue,bindFramebuffer:ze,drawBuffers:Ze,useProgram:J,setBlending:O,setMaterial:Rt,setFlipSided:Ye,setCullFace:Re,setLineWidth:Pe,setPolygonOffset:gt,setScissorTest:De,activeTexture:P,bindTexture:M,unbindTexture:V,compressedTexImage2D:se,compressedTexImage3D:ae,texImage2D:Le,texImage3D:Be,updateUBOMapping:xe,uniformBlockBinding:Je,texStorage2D:ot,texStorage3D:ue,texSubImage2D:te,texSubImage3D:Oe,compressedTexSubImage2D:he,compressedTexSubImage3D:Te,scissor:Ge,viewport:Ce,reset:pt}}function Ax(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new yt,f=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,M){return p?new OffscreenCanvas(P,M):Mr("canvas")}function y(P,M,V){let se=1;const ae=De(P);if((ae.width>V||ae.height>V)&&(se=V/Math.max(ae.width,ae.height)),se<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const te=Math.floor(se*ae.width),Oe=Math.floor(se*ae.height);h===void 0&&(h=x(te,Oe));const he=M?x(te,Oe):h;return he.width=te,he.height=Oe,he.getContext("2d").drawImage(P,0,0,te,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+te+"x"+Oe+")."),he}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),P;return P}function _(P){return P.generateMipmaps}function g(P){i.generateMipmap(P)}function R(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(P,M,V,se,ae=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let te=M;if(M===i.RED&&(V===i.FLOAT&&(te=i.R32F),V===i.HALF_FLOAT&&(te=i.R16F),V===i.UNSIGNED_BYTE&&(te=i.R8)),M===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(te=i.R8UI),V===i.UNSIGNED_SHORT&&(te=i.R16UI),V===i.UNSIGNED_INT&&(te=i.R32UI),V===i.BYTE&&(te=i.R8I),V===i.SHORT&&(te=i.R16I),V===i.INT&&(te=i.R32I)),M===i.RG&&(V===i.FLOAT&&(te=i.RG32F),V===i.HALF_FLOAT&&(te=i.RG16F),V===i.UNSIGNED_BYTE&&(te=i.RG8)),M===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(te=i.RG8UI),V===i.UNSIGNED_SHORT&&(te=i.RG16UI),V===i.UNSIGNED_INT&&(te=i.RG32UI),V===i.BYTE&&(te=i.RG8I),V===i.SHORT&&(te=i.RG16I),V===i.INT&&(te=i.RG32I)),M===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(te=i.RGB8UI),V===i.UNSIGNED_SHORT&&(te=i.RGB16UI),V===i.UNSIGNED_INT&&(te=i.RGB32UI),V===i.BYTE&&(te=i.RGB8I),V===i.SHORT&&(te=i.RGB16I),V===i.INT&&(te=i.RGB32I)),M===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),V===i.UNSIGNED_INT&&(te=i.RGBA32UI),V===i.BYTE&&(te=i.RGBA8I),V===i.SHORT&&(te=i.RGBA16I),V===i.INT&&(te=i.RGBA32I)),M===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),M===i.RGBA){const Oe=ae?za:ht.getTransfer(se);V===i.FLOAT&&(te=i.RGBA32F),V===i.HALF_FLOAT&&(te=i.RGBA16F),V===i.UNSIGNED_BYTE&&(te=Oe===vt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function b(P,M){let V;return P?M===null||M===Ki||M===Hs?V=i.DEPTH24_STENCIL8:M===ii?V=i.DEPTH32F_STENCIL8:M===wr&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ki||M===Hs?V=i.DEPTH_COMPONENT24:M===ii?V=i.DEPTH_COMPONENT32F:M===wr&&(V=i.DEPTH_COMPONENT16),V}function L(P,M){return _(P)===!0||P.isFramebufferTexture&&P.minFilter!==Wt&&P.minFilter!==ln?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function I(P){const M=P.target;M.removeEventListener("dispose",I),D(M),M.isVideoTexture&&f.delete(M)}function C(P){const M=P.target;M.removeEventListener("dispose",C),w(M)}function D(P){const M=n.get(P);if(M.__webglInit===void 0)return;const V=P.source,se=d.get(V);if(se){const ae=se[M.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&S(P),Object.keys(se).length===0&&d.delete(V)}n.remove(P)}function S(P){const M=n.get(P);i.deleteTexture(M.__webglTexture);const V=P.source,se=d.get(V);delete se[M.__cacheKey],a.memory.textures--}function w(P){const M=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(M.__webglFramebuffer[se]))for(let ae=0;ae<M.__webglFramebuffer[se].length;ae++)i.deleteFramebuffer(M.__webglFramebuffer[se][ae]);else i.deleteFramebuffer(M.__webglFramebuffer[se]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[se])}else{if(Array.isArray(M.__webglFramebuffer))for(let se=0;se<M.__webglFramebuffer.length;se++)i.deleteFramebuffer(M.__webglFramebuffer[se]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let se=0;se<M.__webglColorRenderbuffer.length;se++)M.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[se]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=P.textures;for(let se=0,ae=V.length;se<ae;se++){const te=n.get(V[se]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),a.memory.textures--),n.remove(V[se])}n.remove(P)}let N=0;function F(){N=0}function B(){const P=N;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),N+=1,P}function $(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function re(P,M){const V=n.get(P);if(P.isVideoTexture&&Pe(P),P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){const se=P.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(V,P,M);return}}t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+M)}function Q(P,M){const V=n.get(P);if(P.version>0&&V.__version!==P.version){ee(V,P,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+M)}function ce(P,M){const V=n.get(P);if(P.version>0&&V.__version!==P.version){ee(V,P,M);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+M)}function Y(P,M){const V=n.get(P);if(P.version>0&&V.__version!==P.version){fe(V,P,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+M)}const de={[br]:i.REPEAT,[ni]:i.CLAMP_TO_EDGE,[El]:i.MIRRORED_REPEAT},Me={[Wt]:i.NEAREST,[ig]:i.NEAREST_MIPMAP_NEAREST,[Xr]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[bo]:i.LINEAR_MIPMAP_NEAREST,[Hn]:i.LINEAR_MIPMAP_LINEAR},Ee={[lg]:i.NEVER,[pg]:i.ALWAYS,[cg]:i.LESS,[Hh]:i.LEQUAL,[ug]:i.EQUAL,[dg]:i.GEQUAL,[fg]:i.GREATER,[hg]:i.NOTEQUAL};function We(P,M){if(M.type===ii&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ln||M.magFilter===bo||M.magFilter===Xr||M.magFilter===Hn||M.minFilter===ln||M.minFilter===bo||M.minFilter===Xr||M.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,de[M.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,de[M.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,de[M.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Me[M.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Me[M.minFilter]),M.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Ee[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Wt||M.minFilter!==Xr&&M.minFilter!==Hn||M.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function nt(P,M){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",I));const se=M.source;let ae=d.get(se);ae===void 0&&(ae={},d.set(se,ae));const te=$(M);if(te!==P.__cacheKey){ae[te]===void 0&&(ae[te]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ae[te].usedTimes++;const Oe=ae[P.__cacheKey];Oe!==void 0&&(ae[P.__cacheKey].usedTimes--,Oe.usedTimes===0&&S(M)),P.__cacheKey=te,P.__webglTexture=ae[te].texture}return V}function ee(P,M,V){let se=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(se=i.TEXTURE_3D);const ae=nt(P,M),te=M.source;t.bindTexture(se,P.__webglTexture,i.TEXTURE0+V);const Oe=n.get(te);if(te.version!==Oe.__version||ae===!0){t.activeTexture(i.TEXTURE0+V);const he=ht.getPrimaries(ht.workingColorSpace),Te=M.colorSpace===bi?null:ht.getPrimaries(M.colorSpace),ot=M.colorSpace===bi||he===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let ue=y(M.image,!1,s.maxTextureSize);ue=gt(M,ue);const Le=r.convert(M.format,M.colorSpace),Be=r.convert(M.type);let Ge=A(M.internalFormat,Le,Be,M.colorSpace,M.isVideoTexture);We(se,M);let Ce;const xe=M.mipmaps,Je=M.isVideoTexture!==!0,pt=Oe.__version===void 0||ae===!0,U=te.dataReady,pe=L(M,ue);if(M.isDepthTexture)Ge=b(M.format===Gs,M.type),pt&&(Je?t.texStorage2D(i.TEXTURE_2D,1,Ge,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,Ge,ue.width,ue.height,0,Le,Be,null));else if(M.isDataTexture)if(xe.length>0){Je&&pt&&t.texStorage2D(i.TEXTURE_2D,pe,Ge,xe[0].width,xe[0].height);for(let Z=0,ne=xe.length;Z<ne;Z++)Ce=xe[Z],Je?U&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Ce.width,Ce.height,Le,Be,Ce.data):t.texImage2D(i.TEXTURE_2D,Z,Ge,Ce.width,Ce.height,0,Le,Be,Ce.data);M.generateMipmaps=!1}else Je?(pt&&t.texStorage2D(i.TEXTURE_2D,pe,Ge,ue.width,ue.height),U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue.width,ue.height,Le,Be,ue.data)):t.texImage2D(i.TEXTURE_2D,0,Ge,ue.width,ue.height,0,Le,Be,ue.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Je&&pt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Ge,xe[0].width,xe[0].height,ue.depth);for(let Z=0,ne=xe.length;Z<ne;Z++)if(Ce=xe[Z],M.format!==xn)if(Le!==null)if(Je){if(U)if(M.layerUpdates.size>0){const be=Du(Ce.width,Ce.height,M.format,M.type);for(const W of M.layerUpdates){const je=Ce.data.subarray(W*be/Ce.data.BYTES_PER_ELEMENT,(W+1)*be/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,W,Ce.width,Ce.height,1,Le,je)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Ce.width,Ce.height,ue.depth,Le,Ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Ge,Ce.width,Ce.height,ue.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Ce.width,Ce.height,ue.depth,Le,Be,Ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,Ge,Ce.width,Ce.height,ue.depth,0,Le,Be,Ce.data)}else{Je&&pt&&t.texStorage2D(i.TEXTURE_2D,pe,Ge,xe[0].width,xe[0].height);for(let Z=0,ne=xe.length;Z<ne;Z++)Ce=xe[Z],M.format!==xn?Le!==null?Je?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,Ce.width,Ce.height,Le,Ce.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,Ge,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?U&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Ce.width,Ce.height,Le,Be,Ce.data):t.texImage2D(i.TEXTURE_2D,Z,Ge,Ce.width,Ce.height,0,Le,Be,Ce.data)}else if(M.isDataArrayTexture)if(Je){if(pt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Ge,ue.width,ue.height,ue.depth),U)if(M.layerUpdates.size>0){const Z=Du(ue.width,ue.height,M.format,M.type);for(const ne of M.layerUpdates){const be=ue.data.subarray(ne*Z/ue.data.BYTES_PER_ELEMENT,(ne+1)*Z/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ne,ue.width,ue.height,1,Le,Be,be)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Le,Be,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ge,ue.width,ue.height,ue.depth,0,Le,Be,ue.data);else if(M.isData3DTexture)Je?(pt&&t.texStorage3D(i.TEXTURE_3D,pe,Ge,ue.width,ue.height,ue.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Le,Be,ue.data)):t.texImage3D(i.TEXTURE_3D,0,Ge,ue.width,ue.height,ue.depth,0,Le,Be,ue.data);else if(M.isFramebufferTexture){if(pt)if(Je)t.texStorage2D(i.TEXTURE_2D,pe,Ge,ue.width,ue.height);else{let Z=ue.width,ne=ue.height;for(let be=0;be<pe;be++)t.texImage2D(i.TEXTURE_2D,be,Ge,Z,ne,0,Le,Be,null),Z>>=1,ne>>=1}}else if(xe.length>0){if(Je&&pt){const Z=De(xe[0]);t.texStorage2D(i.TEXTURE_2D,pe,Ge,Z.width,Z.height)}for(let Z=0,ne=xe.length;Z<ne;Z++)Ce=xe[Z],Je?U&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Le,Be,Ce):t.texImage2D(i.TEXTURE_2D,Z,Ge,Le,Be,Ce);M.generateMipmaps=!1}else if(Je){if(pt){const Z=De(ue);t.texStorage2D(i.TEXTURE_2D,pe,Ge,Z.width,Z.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Le,Be,ue)}else t.texImage2D(i.TEXTURE_2D,0,Ge,Le,Be,ue);_(M)&&g(se),Oe.__version=te.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function fe(P,M,V){if(M.image.length!==6)return;const se=nt(P,M),ae=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+V);const te=n.get(ae);if(ae.version!==te.__version||se===!0){t.activeTexture(i.TEXTURE0+V);const Oe=ht.getPrimaries(ht.workingColorSpace),he=M.colorSpace===bi?null:ht.getPrimaries(M.colorSpace),Te=M.colorSpace===bi||Oe===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const ot=M.isCompressedTexture||M.image[0].isCompressedTexture,ue=M.image[0]&&M.image[0].isDataTexture,Le=[];for(let ne=0;ne<6;ne++)!ot&&!ue?Le[ne]=y(M.image[ne],!0,s.maxCubemapSize):Le[ne]=ue?M.image[ne].image:M.image[ne],Le[ne]=gt(M,Le[ne]);const Be=Le[0],Ge=r.convert(M.format,M.colorSpace),Ce=r.convert(M.type),xe=A(M.internalFormat,Ge,Ce,M.colorSpace),Je=M.isVideoTexture!==!0,pt=te.__version===void 0||se===!0,U=ae.dataReady;let pe=L(M,Be);We(i.TEXTURE_CUBE_MAP,M);let Z;if(ot){Je&&pt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,xe,Be.width,Be.height);for(let ne=0;ne<6;ne++){Z=Le[ne].mipmaps;for(let be=0;be<Z.length;be++){const W=Z[be];M.format!==xn?Ge!==null?Je?U&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be,0,0,W.width,W.height,Ge,W.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be,xe,W.width,W.height,0,W.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be,0,0,W.width,W.height,Ge,Ce,W.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be,xe,W.width,W.height,0,Ge,Ce,W.data)}}}else{if(Z=M.mipmaps,Je&&pt){Z.length>0&&pe++;const ne=De(Le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,xe,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(ue){Je?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Le[ne].width,Le[ne].height,Ge,Ce,Le[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,xe,Le[ne].width,Le[ne].height,0,Ge,Ce,Le[ne].data);for(let be=0;be<Z.length;be++){const je=Z[be].image[ne].image;Je?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be+1,0,0,je.width,je.height,Ge,Ce,je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be+1,xe,je.width,je.height,0,Ge,Ce,je.data)}}else{Je?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ge,Ce,Le[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,xe,Ge,Ce,Le[ne]);for(let be=0;be<Z.length;be++){const W=Z[be];Je?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be+1,0,0,Ge,Ce,W.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be+1,xe,Ge,Ce,W.image[ne])}}}_(M)&&g(i.TEXTURE_CUBE_MAP),te.__version=ae.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Ae(P,M,V,se,ae,te){const Oe=r.convert(V.format,V.colorSpace),he=r.convert(V.type),Te=A(V.internalFormat,Oe,he,V.colorSpace),ot=n.get(M),ue=n.get(V);if(ue.__renderTarget=M,!ot.__hasExternalTextures){const Le=Math.max(1,M.width>>te),Be=Math.max(1,M.height>>te);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,te,Te,Le,Be,M.depth,0,Oe,he,null):t.texImage2D(ae,te,Te,Le,Be,0,Oe,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),Re(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,ae,ue.__webglTexture,0,Ye(M)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,ae,ue.__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function me(P,M,V){if(i.bindRenderbuffer(i.RENDERBUFFER,P),M.depthBuffer){const se=M.depthTexture,ae=se&&se.isDepthTexture?se.type:null,te=b(M.stencilBuffer,ae),Oe=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=Ye(M);Re(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,te,M.width,M.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,te,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,te,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Oe,i.RENDERBUFFER,P)}else{const se=M.textures;for(let ae=0;ae<se.length;ae++){const te=se[ae],Oe=r.convert(te.format,te.colorSpace),he=r.convert(te.type),Te=A(te.internalFormat,Oe,he,te.colorSpace),ot=Ye(M);V&&Re(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,Te,M.width,M.height):Re(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,Te,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Te,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=n.get(M.depthTexture);se.__renderTarget=M,(!se.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),re(M.depthTexture,0);const ae=se.__webglTexture,te=Ye(M);if(M.depthTexture.format===Ds)Re(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(M.depthTexture.format===Gs)Re(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function ze(P){const M=n.get(P),V=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const se=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),se){const ae=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,se.removeEventListener("dispose",ae)};se.addEventListener("dispose",ae),M.__depthDisposeCallback=ae}M.__boundDepthTexture=se}if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Ue(M.__webglFramebuffer,P)}else if(V){M.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[se]),M.__webglDepthbuffer[se]===void 0)M.__webglDepthbuffer[se]=i.createRenderbuffer(),me(M.__webglDepthbuffer[se],P,!1);else{const ae=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer[se];i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,te)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),me(M.__webglDepthbuffer,P,!1);else{const se=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,ae)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(P,M,V){const se=n.get(P);M!==void 0&&Ae(se.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&ze(P)}function J(P){const M=P.texture,V=n.get(P),se=n.get(M);P.addEventListener("dispose",C);const ae=P.textures,te=P.isWebGLCubeRenderTarget===!0,Oe=ae.length>1;if(Oe||(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=M.version,a.memory.textures++),te){V.__webglFramebuffer=[];for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[he]=[];for(let Te=0;Te<M.mipmaps.length;Te++)V.__webglFramebuffer[he][Te]=i.createFramebuffer()}else V.__webglFramebuffer[he]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)V.__webglFramebuffer[he]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Oe)for(let he=0,Te=ae.length;he<Te;he++){const ot=n.get(ae[he]);ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&Re(P)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let he=0;he<ae.length;he++){const Te=ae[he];V.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[he]);const ot=r.convert(Te.format,Te.colorSpace),ue=r.convert(Te.type),Le=A(Te.internalFormat,ot,ue,Te.colorSpace,P.isXRRenderTarget===!0),Be=Ye(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,Le,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,V.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),me(V.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),We(i.TEXTURE_CUBE_MAP,M);for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0)for(let Te=0;Te<M.mipmaps.length;Te++)Ae(V.__webglFramebuffer[he][Te],P,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Te);else Ae(V.__webglFramebuffer[he],P,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);_(M)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let he=0,Te=ae.length;he<Te;he++){const ot=ae[he],ue=n.get(ot);t.bindTexture(i.TEXTURE_2D,ue.__webglTexture),We(i.TEXTURE_2D,ot),Ae(V.__webglFramebuffer,P,ot,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,0),_(ot)&&g(i.TEXTURE_2D)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(he=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,se.__webglTexture),We(he,M),M.mipmaps&&M.mipmaps.length>0)for(let Te=0;Te<M.mipmaps.length;Te++)Ae(V.__webglFramebuffer[Te],P,M,i.COLOR_ATTACHMENT0,he,Te);else Ae(V.__webglFramebuffer,P,M,i.COLOR_ATTACHMENT0,he,0);_(M)&&g(he),t.unbindTexture()}P.depthBuffer&&ze(P)}function ve(P){const M=P.textures;for(let V=0,se=M.length;V<se;V++){const ae=M[V];if(_(ae)){const te=R(P),Oe=n.get(ae).__webglTexture;t.bindTexture(te,Oe),g(te),t.unbindTexture()}}}const at=[],O=[];function Rt(P){if(P.samples>0){if(Re(P)===!1){const M=P.textures,V=P.width,se=P.height;let ae=i.COLOR_BUFFER_BIT;const te=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Oe=n.get(P),he=M.length>1;if(he)for(let Te=0;Te<M.length;Te++)t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Te=0;Te<M.length;Te++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Oe.__webglColorRenderbuffer[Te]);const ot=n.get(M[Te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ot,0)}i.blitFramebuffer(0,0,V,se,0,0,V,se,ae,i.NEAREST),c===!0&&(at.length=0,O.length=0,at.push(i.COLOR_ATTACHMENT0+Te),P.depthBuffer&&P.resolveDepthBuffer===!1&&(at.push(te),O.push(te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,at))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let Te=0;Te<M.length;Te++){t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,Oe.__webglColorRenderbuffer[Te]);const ot=n.get(M[Te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,ot,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const M=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Ye(P){return Math.min(s.maxSamples,P.samples)}function Re(P){const M=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Pe(P){const M=a.render.frame;f.get(P)!==M&&(f.set(P,M),P.update())}function gt(P,M){const V=P.colorSpace,se=P.format,ae=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==Vs&&V!==bi&&(ht.getTransfer(V)===vt?(se!==xn||ae!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}function De(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=re,this.setTexture2DArray=Q,this.setTexture3D=ce,this.setTextureCube=Y,this.rebindTextures=Ze,this.setupRenderTarget=J,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Re}function Rx(i,e){function t(n,s=bi){let r;const a=ht.getTransfer(s);if(n===Wn)return i.UNSIGNED_BYTE;if(n===Ec)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Tc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Lh)return i.BYTE;if(n===Ih)return i.SHORT;if(n===wr)return i.UNSIGNED_SHORT;if(n===Sc)return i.INT;if(n===Ki)return i.UNSIGNED_INT;if(n===ii)return i.FLOAT;if(n===Cr)return i.HALF_FLOAT;if(n===Oh)return i.ALPHA;if(n===Nh)return i.RGB;if(n===xn)return i.RGBA;if(n===kh)return i.LUMINANCE;if(n===Uh)return i.LUMINANCE_ALPHA;if(n===Ds)return i.DEPTH_COMPONENT;if(n===Gs)return i.DEPTH_STENCIL;if(n===Fh)return i.RED;if(n===Ac)return i.RED_INTEGER;if(n===Bh)return i.RG;if(n===Rc)return i.RG_INTEGER;if(n===Cc)return i.RGBA_INTEGER;if(n===Sa||n===Ea||n===Ta||n===Aa)if(a===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Tl||n===Al||n===Rl||n===Cl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Al)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Rl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pl||n===Ll||n===Il)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Pl||n===Ll)return a===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Il)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Dl||n===Ol||n===Nl||n===kl||n===Ul||n===Fl||n===Bl||n===zl||n===Hl||n===Gl||n===Vl||n===Wl||n===ql||n===jl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Dl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ol)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===kl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ul)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ql)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ra||n===Xl||n===$l)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ra)return a===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$l)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zh||n===Kl||n===Yl||n===Jl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ra)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Cx={type:"move"};class Yo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const y of e.hand.values()){const _=t.getJointPose(y,n),g=this._getHandJoint(l,y);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}const f=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=f.position.distanceTo(h.position),p=.02,x=.005;l.inputState.pinching&&d>p+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cx)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new fa;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Px=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lx=`
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

}`;class Ix{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Xt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new kn({vertexShader:Px,fragmentShader:Lx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new sn(new fi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Dx extends Js{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,f=null,h=null,d=null,p=null,x=null;const y=new Ix,_=t.getContextAttributes();let g=null,R=null;const A=[],b=[],L=new yt;let I=null;const C=new Dn;C.viewport=new Pt;const D=new Dn;D.viewport=new Pt;const S=[C,D],w=new e0;let N=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let fe=A[ee];return fe===void 0&&(fe=new Yo,A[ee]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ee){let fe=A[ee];return fe===void 0&&(fe=new Yo,A[ee]=fe),fe.getGripSpace()},this.getHand=function(ee){let fe=A[ee];return fe===void 0&&(fe=new Yo,A[ee]=fe),fe.getHandSpace()};function B(ee){const fe=b.indexOf(ee.inputSource);if(fe===-1)return;const Ae=A[fe];Ae!==void 0&&(Ae.update(ee.inputSource,ee.frame,l||a),Ae.dispatchEvent({type:ee.type,data:ee.inputSource}))}function $(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",re);for(let ee=0;ee<A.length;ee++){const fe=b[ee];fe!==null&&(b[ee]=null,A[ee].disconnect(fe))}N=null,F=null,y.reset(),e.setRenderTarget(g),p=null,d=null,h=null,s=null,R=null,nt.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(ee){l=ee},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",$),s.addEventListener("inputsourceschange",re),_.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(L),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let Ae=null,me=null,Ue=null;_.depth&&(Ue=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=_.stencil?Gs:Ds,me=_.stencil?Hs:Ki);const ze={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(ze),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),R=new Ti(d.textureWidth,d.textureHeight,{format:xn,type:Wn,depthTexture:new ed(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const Ae={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Ae),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),R=new Ti(p.framebufferWidth,p.framebufferHeight,{format:xn,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}R.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),nt.setContext(s),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function re(ee){for(let fe=0;fe<ee.removed.length;fe++){const Ae=ee.removed[fe],me=b.indexOf(Ae);me>=0&&(b[me]=null,A[me].disconnect(Ae))}for(let fe=0;fe<ee.added.length;fe++){const Ae=ee.added[fe];let me=b.indexOf(Ae);if(me===-1){for(let ze=0;ze<A.length;ze++)if(ze>=b.length){b.push(Ae),me=ze;break}else if(b[ze]===null){b[ze]=Ae,me=ze;break}if(me===-1)break}const Ue=A[me];Ue&&Ue.connect(Ae)}}const Q=new X,ce=new X;function Y(ee,fe,Ae){Q.setFromMatrixPosition(fe.matrixWorld),ce.setFromMatrixPosition(Ae.matrixWorld);const me=Q.distanceTo(ce),Ue=fe.projectionMatrix.elements,ze=Ae.projectionMatrix.elements,Ze=Ue[14]/(Ue[10]-1),J=Ue[14]/(Ue[10]+1),ve=(Ue[9]+1)/Ue[5],at=(Ue[9]-1)/Ue[5],O=(Ue[8]-1)/Ue[0],Rt=(ze[8]+1)/ze[0],Ye=Ze*O,Re=Ze*Rt,Pe=me/(-O+Rt),gt=Pe*-O;if(fe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(gt),ee.translateZ(Pe),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Ue[10]===-1)ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const De=Ze+Pe,P=J+Pe,M=Ye-gt,V=Re+(me-gt),se=ve*J/P*De,ae=at*J/P*De;ee.projectionMatrix.makePerspective(M,V,se,ae,De,P),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function de(ee,fe){fe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(fe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let fe=ee.near,Ae=ee.far;y.texture!==null&&(y.depthNear>0&&(fe=y.depthNear),y.depthFar>0&&(Ae=y.depthFar)),w.near=D.near=C.near=fe,w.far=D.far=C.far=Ae,(N!==w.near||F!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),N=w.near,F=w.far),C.layers.mask=ee.layers.mask|2,D.layers.mask=ee.layers.mask|4,w.layers.mask=C.layers.mask|D.layers.mask;const me=ee.parent,Ue=w.cameras;de(w,me);for(let ze=0;ze<Ue.length;ze++)de(Ue[ze],me);Ue.length===2?Y(w,C,D):w.projectionMatrix.copy(C.projectionMatrix),Me(ee,w,me)};function Me(ee,fe,Ae){Ae===null?ee.matrix.copy(fe.matrixWorld):(ee.matrix.copy(Ae.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(fe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Zl*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(ee){c=ee,d!==null&&(d.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(w)};let Ee=null;function We(ee,fe){if(f=fe.getViewerPose(l||a),x=fe,f!==null){const Ae=f.views;p!==null&&(e.setRenderTargetFramebuffer(R,p.framebuffer),e.setRenderTarget(R));let me=!1;Ae.length!==w.cameras.length&&(w.cameras.length=0,me=!0);for(let ze=0;ze<Ae.length;ze++){const Ze=Ae[ze];let J=null;if(p!==null)J=p.getViewport(Ze);else{const at=h.getViewSubImage(d,Ze);J=at.viewport,ze===0&&(e.setRenderTargetTextures(R,at.colorTexture,d.ignoreDepthValues?void 0:at.depthStencilTexture),e.setRenderTarget(R))}let ve=S[ze];ve===void 0&&(ve=new Dn,ve.layers.enable(ze),ve.viewport=new Pt,S[ze]=ve),ve.matrix.fromArray(Ze.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(Ze.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(J.x,J.y,J.width,J.height),ze===0&&(w.matrix.copy(ve.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),me===!0&&w.cameras.push(ve)}const Ue=s.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const ze=h.getDepthInformation(Ae[0]);ze&&ze.isValid&&ze.texture&&y.init(e,ze,s.renderState)}}for(let Ae=0;Ae<A.length;Ae++){const me=b[Ae],Ue=A[Ae];me!==null&&Ue!==void 0&&Ue.update(me,fe,l||a)}Ee&&Ee(ee,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),x=null}const nt=new nd;nt.setAnimationLoop(We),this.setAnimationLoop=function(ee){Ee=ee},this.dispose=function(){}}}const Ui=new ui,Ox=new Nt;function Nx(i,e){function t(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}function n(_,g){g.color.getRGB(_.fogColor.value,Kh(i)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}function s(_,g,R,A,b){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(_,g):g.isMeshToonMaterial?(r(_,g),h(_,g)):g.isMeshPhongMaterial?(r(_,g),f(_,g)):g.isMeshStandardMaterial?(r(_,g),d(_,g),g.isMeshPhysicalMaterial&&p(_,g,b)):g.isMeshMatcapMaterial?(r(_,g),x(_,g)):g.isMeshDepthMaterial?r(_,g):g.isMeshDistanceMaterial?(r(_,g),y(_,g)):g.isMeshNormalMaterial?r(_,g):g.isLineBasicMaterial?(a(_,g),g.isLineDashedMaterial&&o(_,g)):g.isPointsMaterial?c(_,g,R,A):g.isSpriteMaterial?l(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,t(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===cn&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,t(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===cn&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,t(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,t(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);const R=e.get(g),A=R.envMap,b=R.envMapRotation;A&&(_.envMap.value=A,Ui.copy(b),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),_.envMapRotation.value.setFromMatrix4(Ox.makeRotationFromEuler(Ui)),_.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap&&(_.lightMap.value=g.lightMap,_.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,_.lightMapTransform)),g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,_.aoMapTransform))}function a(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform))}function o(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}function c(_,g,R,A){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*R,_.scale.value=A*.5,g.map&&(_.map.value=g.map,t(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function l(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function f(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}function h(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}function d(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,_.roughnessMapTransform)),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)}function p(_,g,R){_.ior.value=g.ior,g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===cn&&_.clearcoatNormalScale.value.negate())),g.dispersion>0&&(_.dispersion.value=g.dispersion),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=R.texture,_.transmissionSamplerSize.value.set(R.width,R.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,_.specularIntensityMapTransform))}function x(_,g){g.matcap&&(_.matcap.value=g.matcap)}function y(_,g){const R=e.get(g).light;_.referencePosition.value.setFromMatrixPosition(R.matrixWorld),_.nearDistance.value=R.shadow.camera.near,_.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function kx(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(R,A){const b=A.program;n.uniformBlockBinding(R,b)}function l(R,A){let b=s[R.id];b===void 0&&(x(R),b=f(R),s[R.id]=b,R.addEventListener("dispose",_));const L=A.program;n.updateUBOMapping(R,L);const I=e.render.frame;r[R.id]!==I&&(d(R),r[R.id]=I)}function f(R){const A=h();R.__bindingPointIndex=A;const b=i.createBuffer(),L=R.__size,I=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,L,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,b),b}function h(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(R){const A=s[R.id],b=R.uniforms,L=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let I=0,C=b.length;I<C;I++){const D=Array.isArray(b[I])?b[I]:[b[I]];for(let S=0,w=D.length;S<w;S++){const N=D[S];if(p(N,I,S,L)===!0){const F=N.__offset,B=Array.isArray(N.value)?N.value:[N.value];let $=0;for(let re=0;re<B.length;re++){const Q=B[re],ce=y(Q);typeof Q=="number"||typeof Q=="boolean"?(N.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,F+$,N.__data)):Q.isMatrix3?(N.__data[0]=Q.elements[0],N.__data[1]=Q.elements[1],N.__data[2]=Q.elements[2],N.__data[3]=0,N.__data[4]=Q.elements[3],N.__data[5]=Q.elements[4],N.__data[6]=Q.elements[5],N.__data[7]=0,N.__data[8]=Q.elements[6],N.__data[9]=Q.elements[7],N.__data[10]=Q.elements[8],N.__data[11]=0):(Q.toArray(N.__data,$),$+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(R,A,b,L){const I=R.value,C=A+"_"+b;if(L[C]===void 0)return typeof I=="number"||typeof I=="boolean"?L[C]=I:L[C]=I.clone(),!0;{const D=L[C];if(typeof I=="number"||typeof I=="boolean"){if(D!==I)return L[C]=I,!0}else if(D.equals(I)===!1)return D.copy(I),!0}return!1}function x(R){const A=R.uniforms;let b=0;const L=16;for(let C=0,D=A.length;C<D;C++){const S=Array.isArray(A[C])?A[C]:[A[C]];for(let w=0,N=S.length;w<N;w++){const F=S[w],B=Array.isArray(F.value)?F.value:[F.value];for(let $=0,re=B.length;$<re;$++){const Q=B[$],ce=y(Q),Y=b%L,de=Y%ce.boundary,Me=Y+de;b+=de,Me!==0&&L-Me<ce.storage&&(b+=L-Me),F.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=b,b+=ce.storage}}}const I=b%L;return I>0&&(b+=L-I),R.__size=b,R.__cache={},this}function y(R){const A={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(A.boundary=4,A.storage=4):R.isVector2?(A.boundary=8,A.storage=8):R.isVector3||R.isColor?(A.boundary=16,A.storage=12):R.isVector4?(A.boundary=16,A.storage=16):R.isMatrix3?(A.boundary=48,A.storage=48):R.isMatrix4?(A.boundary=64,A.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),A}function _(R){const A=R.target;A.removeEventListener("dispose",_);const b=a.indexOf(A.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function g(){for(const R in s)i.deleteBuffer(s[R]);a=[],s={},r={}}return{bind:c,update:l,dispose:g}}class Ux{constructor(e={}){const{canvas:t=_g(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const x=new Uint32Array(4),y=new Int32Array(4);let _=null,g=null;const R=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jt,this.toneMapping=ai,this.toneMappingExposure=1;const b=this;let L=!1,I=0,C=0,D=null,S=-1,w=null;const N=new Pt,F=new Pt;let B=null;const $=new dt(0);let re=0,Q=t.width,ce=t.height,Y=1,de=null,Me=null;const Ee=new Pt(0,0,Q,ce),We=new Pt(0,0,Q,ce);let nt=!1;const ee=new Qh;let fe=!1,Ae=!1;this.transmissionResolutionScale=1;const me=new Nt,Ue=new Nt,ze=new X,Ze=new Pt,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ve=!1;function at(){return D===null?Y:1}let O=n;function Rt(E,z){return t.getContext(E,z)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mc}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",W,!1),O===null){const z="webgl2";if(O=Rt(z,E),O===null)throw Rt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ye,Re,Pe,gt,De,P,M,V,se,ae,te,Oe,he,Te,ot,ue,Le,Be,Ge,Ce,xe,Je,pt,U;function pe(){Ye=new jv(O),Ye.init(),Je=new Rx(O,Ye),Re=new zv(O,Ye,e,Je),Pe=new Tx(O,Ye),Re.reverseDepthBuffer&&d&&Pe.buffers.depth.setReversed(!0),gt=new Kv(O),De=new dx,P=new Ax(O,Ye,Pe,De,Re,Je,gt),M=new Gv(b),V=new qv(b),se=new n0(O),pt=new Fv(O,se),ae=new Xv(O,se,gt,pt),te=new Jv(O,ae,se,gt),Ge=new Yv(O,Re,P),ue=new Hv(De),Oe=new hx(b,M,V,Ye,Re,pt,ue),he=new Nx(b,De),Te=new mx,ot=new bx(Ye),Be=new Uv(b,M,V,Pe,te,p,c),Le=new Sx(b,te,Re),U=new kx(O,gt,Re,Pe),Ce=new Bv(O,Ye,gt),xe=new $v(O,Ye,gt),gt.programs=Oe.programs,b.capabilities=Re,b.extensions=Ye,b.properties=De,b.renderLists=Te,b.shadowMap=Le,b.state=Pe,b.info=gt}pe();const Z=new Dx(b,O);this.xr=Z,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const E=Ye.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ye.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(E){E!==void 0&&(Y=E,this.setSize(Q,ce,!1))},this.getSize=function(E){return E.set(Q,ce)},this.setSize=function(E,z,q=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=E,ce=z,t.width=Math.floor(E*Y),t.height=Math.floor(z*Y),q===!0&&(t.style.width=E+"px",t.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(Q*Y,ce*Y).floor()},this.setDrawingBufferSize=function(E,z,q){Q=E,ce=z,Y=q,t.width=Math.floor(E*q),t.height=Math.floor(z*q),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E.copy(N)},this.getViewport=function(E){return E.copy(Ee)},this.setViewport=function(E,z,q,j){E.isVector4?Ee.set(E.x,E.y,E.z,E.w):Ee.set(E,z,q,j),Pe.viewport(N.copy(Ee).multiplyScalar(Y).round())},this.getScissor=function(E){return E.copy(We)},this.setScissor=function(E,z,q,j){E.isVector4?We.set(E.x,E.y,E.z,E.w):We.set(E,z,q,j),Pe.scissor(F.copy(We).multiplyScalar(Y).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(E){Pe.setScissorTest(nt=E)},this.setOpaqueSort=function(E){de=E},this.setTransparentSort=function(E){Me=E},this.getClearColor=function(E){return E.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(E=!0,z=!0,q=!0){let j=0;if(E){let H=!1;if(D!==null){const le=D.texture.format;H=le===Cc||le===Rc||le===Ac}if(H){const le=D.texture.type,ge=le===Wn||le===Ki||le===wr||le===Hs||le===Ec||le===Tc,Se=Be.getClearColor(),we=Be.getClearAlpha(),He=Se.r,Ve=Se.g,ke=Se.b;ge?(x[0]=He,x[1]=Ve,x[2]=ke,x[3]=we,O.clearBufferuiv(O.COLOR,0,x)):(y[0]=He,y[1]=Ve,y[2]=ke,y[3]=we,O.clearBufferiv(O.COLOR,0,y))}else j|=O.COLOR_BUFFER_BIT}z&&(j|=O.DEPTH_BUFFER_BIT),q&&(j|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",W,!1),Be.dispose(),Te.dispose(),ot.dispose(),De.dispose(),M.dispose(),V.dispose(),te.dispose(),pt.dispose(),U.dispose(),Oe.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Qs),Z.removeEventListener("sessionend",Fn),Bn.stop()};function ne(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const E=gt.autoReset,z=Le.enabled,q=Le.autoUpdate,j=Le.needsUpdate,H=Le.type;pe(),gt.autoReset=E,Le.enabled=z,Le.autoUpdate=q,Le.needsUpdate=j,Le.type=H}function W(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function je(E){const z=E.target;z.removeEventListener("dispose",je),Mt(z)}function Mt(E){Ft(E),De.remove(E)}function Ft(E){const z=De.get(E).programs;z!==void 0&&(z.forEach(function(q){Oe.releaseProgram(q)}),E.isShaderMaterial&&Oe.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,q,j,H,le){z===null&&(z=J);const ge=H.isMesh&&H.matrixWorld.determinant()<0,Se=co(E,z,q,j,H);Pe.setMaterial(j,ge);let we=q.index,He=1;if(j.wireframe===!0){if(we=ae.getWireframeAttribute(q),we===void 0)return;He=2}const Ve=q.drawRange,ke=q.attributes.position;let lt=Ve.start*He,ft=(Ve.start+Ve.count)*He;le!==null&&(lt=Math.max(lt,le.start*He),ft=Math.min(ft,(le.start+le.count)*He)),we!==null?(lt=Math.max(lt,0),ft=Math.min(ft,we.count)):ke!=null&&(lt=Math.max(lt,0),ft=Math.min(ft,ke.count));const Et=ft-lt;if(Et<0||Et===1/0)return;pt.setup(H,j,Se,q,we);let _t,ct=Ce;if(we!==null&&(_t=se.get(we),ct=xe,ct.setIndex(_t)),H.isMesh)j.wireframe===!0?(Pe.setLineWidth(j.wireframeLinewidth*at()),ct.setMode(O.LINES)):ct.setMode(O.TRIANGLES);else if(H.isLine){let _e=j.linewidth;_e===void 0&&(_e=1),Pe.setLineWidth(_e*at()),H.isLineSegments?ct.setMode(O.LINES):H.isLineLoop?ct.setMode(O.LINE_LOOP):ct.setMode(O.LINE_STRIP)}else H.isPoints?ct.setMode(O.POINTS):H.isSprite&&ct.setMode(O.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)ct.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))ct.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const _e=H._multiDrawStarts,Ct=H._multiDrawCounts,it=H._multiDrawCount,Kt=we?se.get(we).bytesPerElement:1,Sn=De.get(j).currentProgram.getUniforms();for(let Bt=0;Bt<it;Bt++)Sn.setValue(O,"_gl_DrawID",Bt),ct.render(_e[Bt]/Kt,Ct[Bt])}else if(H.isInstancedMesh)ct.renderInstances(lt,Et,H.count);else if(q.isInstancedBufferGeometry){const _e=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ct=Math.min(q.instanceCount,_e);ct.renderInstances(lt,Et,Ct)}else ct.render(lt,Et)};function $e(E,z,q){E.transparent===!0&&E.side===ei&&E.forceSinglePass===!1?(E.side=cn,E.needsUpdate=!0,Lt(E,z,q),E.side=Ei,E.needsUpdate=!0,Lt(E,z,q),E.side=ei):Lt(E,z,q)}this.compile=function(E,z,q=null){q===null&&(q=E),g=ot.get(q),g.init(z),A.push(g),q.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),E!==q&&E.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),g.setupLights();const j=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const le=H.material;if(le)if(Array.isArray(le))for(let ge=0;ge<le.length;ge++){const Se=le[ge];$e(Se,q,H),j.add(Se)}else $e(le,q,H),j.add(le)}),A.pop(),g=null,j},this.compileAsync=function(E,z,q=null){const j=this.compile(E,z,q);return new Promise(H=>{function le(){if(j.forEach(function(ge){De.get(ge).currentProgram.isReady()&&j.delete(ge)}),j.size===0){H(E);return}setTimeout(le,10)}Ye.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let $t=null;function fn(E){$t&&$t(E)}function Qs(){Bn.stop()}function Fn(){Bn.start()}const Bn=new nd;Bn.setAnimationLoop(fn),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(E){$t=E,Z.setAnimationLoop(E),E===null?Bn.stop():Bn.start()},Z.addEventListener("sessionstart",Qs),Z.addEventListener("sessionend",Fn),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(z),z=Z.getCamera()),E.isScene===!0&&E.onBeforeRender(b,E,z,D),g=ot.get(E,A.length),g.init(z),A.push(g),Ue.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ee.setFromProjectionMatrix(Ue),Ae=this.localClippingEnabled,fe=ue.init(this.clippingPlanes,Ae),_=Te.get(E,R.length),_.init(),R.push(_),Z.enabled===!0&&Z.isPresenting===!0){const le=b.xr.getDepthSensingMesh();le!==null&&qt(le,z,-1/0,b.sortObjects)}qt(E,z,0,b.sortObjects),_.finish(),b.sortObjects===!0&&_.sort(de,Me),ve=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,ve&&Be.addToRenderList(_,E),this.info.render.frame++,fe===!0&&ue.beginShadows();const q=g.state.shadowsArray;Le.render(q,E,z),fe===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=_.opaque,H=_.transmissive;if(g.setupLights(),z.isArrayCamera){const le=z.cameras;if(H.length>0)for(let ge=0,Se=le.length;ge<Se;ge++){const we=le[ge];qn(j,H,E,we)}ve&&Be.render(E);for(let ge=0,Se=le.length;ge<Se;ge++){const we=le[ge];er(_,E,we,we.viewport)}}else H.length>0&&qn(j,H,E,z),ve&&Be.render(E),er(_,E,z);D!==null&&C===0&&(P.updateMultisampleRenderTarget(D),P.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(b,E,z),pt.resetDefaultState(),S=-1,w=null,A.pop(),A.length>0?(g=A[A.length-1],fe===!0&&ue.setGlobalState(b.clippingPlanes,g.state.camera)):g=null,R.pop(),R.length>0?_=R[R.length-1]:_=null};function qt(E,z,q,j){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ee.intersectsSprite(E)){j&&Ze.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ue);const ge=te.update(E),Se=E.material;Se.visible&&_.push(E,ge,Se,q,Ze.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ee.intersectsObject(E))){const ge=te.update(E),Se=E.material;if(j&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ze.copy(E.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Ze.copy(ge.boundingSphere.center)),Ze.applyMatrix4(E.matrixWorld).applyMatrix4(Ue)),Array.isArray(Se)){const we=ge.groups;for(let He=0,Ve=we.length;He<Ve;He++){const ke=we[He],lt=Se[ke.materialIndex];lt&&lt.visible&&_.push(E,ge,lt,q,Ze.z,ke)}}else Se.visible&&_.push(E,ge,Se,q,Ze.z,null)}}const le=E.children;for(let ge=0,Se=le.length;ge<Se;ge++)qt(le[ge],z,q,j)}function er(E,z,q,j){const H=E.opaque,le=E.transmissive,ge=E.transparent;g.setupLightsView(q),fe===!0&&ue.setGlobalState(b.clippingPlanes,q),j&&Pe.viewport(N.copy(j)),H.length>0&&Ri(H,z,q),le.length>0&&Ri(le,z,q),ge.length>0&&Ri(ge,z,q),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function qn(E,z,q,j){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[j.id]===void 0&&(g.state.transmissionRenderTarget[j.id]=new Ti(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?Cr:Wn,minFilter:Hn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));const le=g.state.transmissionRenderTarget[j.id],ge=j.viewport||N;le.setSize(ge.z*b.transmissionResolutionScale,ge.w*b.transmissionResolutionScale);const Se=b.getRenderTarget();b.setRenderTarget(le),b.getClearColor($),re=b.getClearAlpha(),re<1&&b.setClearColor(16777215,.5),b.clear(),ve&&Be.render(q);const we=b.toneMapping;b.toneMapping=ai;const He=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),g.setupLightsView(j),fe===!0&&ue.setGlobalState(b.clippingPlanes,j),Ri(E,q,j),P.updateMultisampleRenderTarget(le),P.updateRenderTargetMipmap(le),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let ke=0,lt=z.length;ke<lt;ke++){const ft=z[ke],Et=ft.object,_t=ft.geometry,ct=ft.material,_e=ft.group;if(ct.side===ei&&Et.layers.test(j.layers)){const Ct=ct.side;ct.side=cn,ct.needsUpdate=!0,tr(Et,q,j,_t,ct,_e),ct.side=Ct,ct.needsUpdate=!0,Ve=!0}}Ve===!0&&(P.updateMultisampleRenderTarget(le),P.updateRenderTargetMipmap(le))}b.setRenderTarget(Se),b.setClearColor($,re),He!==void 0&&(j.viewport=He),b.toneMapping=we}function Ri(E,z,q){const j=z.isScene===!0?z.overrideMaterial:null;for(let H=0,le=E.length;H<le;H++){const ge=E[H],Se=ge.object,we=ge.geometry,He=j===null?ge.material:j,Ve=ge.group;Se.layers.test(q.layers)&&tr(Se,z,q,we,He,Ve)}}function tr(E,z,q,j,H,le){E.onBeforeRender(b,z,q,j,H,le),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(b,z,q,j,E,le),H.transparent===!0&&H.side===ei&&H.forceSinglePass===!1?(H.side=cn,H.needsUpdate=!0,b.renderBufferDirect(q,z,j,H,E,le),H.side=Ei,H.needsUpdate=!0,b.renderBufferDirect(q,z,j,H,E,le),H.side=ei):b.renderBufferDirect(q,z,j,H,E,le),E.onAfterRender(b,z,q,j,H,le)}function Lt(E,z,q){z.isScene!==!0&&(z=J);const j=De.get(E),H=g.state.lights,le=g.state.shadowsArray,ge=H.state.version,Se=Oe.getParameters(E,H.state,le,z,q),we=Oe.getProgramCacheKey(Se);let He=j.programs;j.environment=E.isMeshStandardMaterial?z.environment:null,j.fog=z.fog,j.envMap=(E.isMeshStandardMaterial?V:M).get(E.envMap||j.environment),j.envMapRotation=j.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,He===void 0&&(E.addEventListener("dispose",je),He=new Map,j.programs=He);let Ve=He.get(we);if(Ve!==void 0){if(j.currentProgram===Ve&&j.lightsStateVersion===ge)return Or(E,Se),Ve}else Se.uniforms=Oe.getUniforms(E),E.onBeforeCompile(Se,b),Ve=Oe.acquireProgram(Se,we),He.set(we,Ve),j.uniforms=Se.uniforms;const ke=j.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ke.clippingPlanes=ue.uniform),Or(E,Se),j.needsLights=Nr(E),j.lightsStateVersion=ge,j.needsLights&&(ke.ambientLightColor.value=H.state.ambient,ke.lightProbe.value=H.state.probe,ke.directionalLights.value=H.state.directional,ke.directionalLightShadows.value=H.state.directionalShadow,ke.spotLights.value=H.state.spot,ke.spotLightShadows.value=H.state.spotShadow,ke.rectAreaLights.value=H.state.rectArea,ke.ltc_1.value=H.state.rectAreaLTC1,ke.ltc_2.value=H.state.rectAreaLTC2,ke.pointLights.value=H.state.point,ke.pointLightShadows.value=H.state.pointShadow,ke.hemisphereLights.value=H.state.hemi,ke.directionalShadowMap.value=H.state.directionalShadowMap,ke.directionalShadowMatrix.value=H.state.directionalShadowMatrix,ke.spotShadowMap.value=H.state.spotShadowMap,ke.spotLightMatrix.value=H.state.spotLightMatrix,ke.spotLightMap.value=H.state.spotLightMap,ke.pointShadowMap.value=H.state.pointShadowMap,ke.pointShadowMatrix.value=H.state.pointShadowMatrix),j.currentProgram=Ve,j.uniformsList=null,Ve}function nr(E){if(E.uniformsList===null){const z=E.currentProgram.getUniforms();E.uniformsList=Ca.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function Or(E,z){const q=De.get(E);q.outputColorSpace=z.outputColorSpace,q.batching=z.batching,q.batchingColor=z.batchingColor,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.instancingMorph=z.instancingMorph,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function co(E,z,q,j,H){z.isScene!==!0&&(z=J),P.resetTextureUnits();const le=z.fog,ge=j.isMeshStandardMaterial?z.environment:null,Se=D===null?b.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Vs,we=(j.isMeshStandardMaterial?V:M).get(j.envMap||ge),He=j.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ve=!!q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),ke=!!q.morphAttributes.position,lt=!!q.morphAttributes.normal,ft=!!q.morphAttributes.color;let Et=ai;j.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Et=b.toneMapping);const _t=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ct=_t!==void 0?_t.length:0,_e=De.get(j),Ct=g.state.lights;if(fe===!0&&(Ae===!0||E!==w)){const zt=E===w&&j.id===S;ue.setState(j,E,zt)}let it=!1;j.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==Ct.state.version||_e.outputColorSpace!==Se||H.isBatchedMesh&&_e.batching===!1||!H.isBatchedMesh&&_e.batching===!0||H.isBatchedMesh&&_e.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&_e.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&_e.instancing===!1||!H.isInstancedMesh&&_e.instancing===!0||H.isSkinnedMesh&&_e.skinning===!1||!H.isSkinnedMesh&&_e.skinning===!0||H.isInstancedMesh&&_e.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&_e.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&_e.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&_e.instancingMorph===!1&&H.morphTexture!==null||_e.envMap!==we||j.fog===!0&&_e.fog!==le||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==ue.numPlanes||_e.numIntersection!==ue.numIntersection)||_e.vertexAlphas!==He||_e.vertexTangents!==Ve||_e.morphTargets!==ke||_e.morphNormals!==lt||_e.morphColors!==ft||_e.toneMapping!==Et||_e.morphTargetsCount!==ct)&&(it=!0):(it=!0,_e.__version=j.version);let Kt=_e.currentProgram;it===!0&&(Kt=Lt(j,z,H));let Sn=!1,Bt=!1,En=!1;const bt=Kt.getUniforms(),rn=_e.uniforms;if(Pe.useProgram(Kt.program)&&(Sn=!0,Bt=!0,En=!0),j.id!==S&&(S=j.id,Bt=!0),Sn||w!==E){Pe.buffers.depth.getReversed()?(me.copy(E.projectionMatrix),yg(me),xg(me),bt.setValue(O,"projectionMatrix",me)):bt.setValue(O,"projectionMatrix",E.projectionMatrix),bt.setValue(O,"viewMatrix",E.matrixWorldInverse);const Ht=bt.map.cameraPosition;Ht!==void 0&&Ht.setValue(O,ze.setFromMatrixPosition(E.matrixWorld)),Re.logarithmicDepthBuffer&&bt.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&bt.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),w!==E&&(w=E,Bt=!0,En=!0)}if(H.isSkinnedMesh){bt.setOptional(O,H,"bindMatrix"),bt.setOptional(O,H,"bindMatrixInverse");const zt=H.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),bt.setValue(O,"boneTexture",zt.boneTexture,P))}H.isBatchedMesh&&(bt.setOptional(O,H,"batchingTexture"),bt.setValue(O,"batchingTexture",H._matricesTexture,P),bt.setOptional(O,H,"batchingIdTexture"),bt.setValue(O,"batchingIdTexture",H._indirectTexture,P),bt.setOptional(O,H,"batchingColorTexture"),H._colorsTexture!==null&&bt.setValue(O,"batchingColorTexture",H._colorsTexture,P));const Yt=q.morphAttributes;if((Yt.position!==void 0||Yt.normal!==void 0||Yt.color!==void 0)&&Ge.update(H,q,Kt),(Bt||_e.receiveShadow!==H.receiveShadow)&&(_e.receiveShadow=H.receiveShadow,bt.setValue(O,"receiveShadow",H.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(rn.envMap.value=we,rn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&z.environment!==null&&(rn.envMapIntensity.value=z.environmentIntensity),Bt&&(bt.setValue(O,"toneMappingExposure",b.toneMappingExposure),_e.needsLights&&ir(rn,En),le&&j.fog===!0&&he.refreshFogUniforms(rn,le),he.refreshMaterialUniforms(rn,j,Y,ce,g.state.transmissionRenderTarget[E.id]),Ca.upload(O,nr(_e),rn,P)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Ca.upload(O,nr(_e),rn,P),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&bt.setValue(O,"center",H.center),bt.setValue(O,"modelViewMatrix",H.modelViewMatrix),bt.setValue(O,"normalMatrix",H.normalMatrix),bt.setValue(O,"modelMatrix",H.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const zt=j.uniformsGroups;for(let Ht=0,Ci=zt.length;Ht<Ci;Ht++){const jn=zt[Ht];U.update(jn,Kt),U.bind(jn,Kt)}}return Kt}function ir(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function Nr(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,z,q){De.get(E.texture).__webglTexture=z,De.get(E.depthTexture).__webglTexture=q;const j=De.get(E);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=q===void 0,j.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,z){const q=De.get(E);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0};const ns=O.createFramebuffer();this.setRenderTarget=function(E,z=0,q=0){D=E,I=z,C=q;let j=!0,H=null,le=!1,ge=!1;if(E){const we=De.get(E);if(we.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(O.FRAMEBUFFER,null),j=!1;else if(we.__webglFramebuffer===void 0)P.setupRenderTarget(E);else if(we.__hasExternalTextures)P.rebindTextures(E,De.get(E.texture).__webglTexture,De.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ke=E.depthTexture;if(we.__boundDepthTexture!==ke){if(ke!==null&&De.has(ke)&&(E.width!==ke.image.width||E.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(E)}}const He=E.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(ge=!0);const Ve=De.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ve[z])?H=Ve[z][q]:H=Ve[z],le=!0):E.samples>0&&P.useMultisampledRTT(E)===!1?H=De.get(E).__webglMultisampledFramebuffer:Array.isArray(Ve)?H=Ve[q]:H=Ve,N.copy(E.viewport),F.copy(E.scissor),B=E.scissorTest}else N.copy(Ee).multiplyScalar(Y).floor(),F.copy(We).multiplyScalar(Y).floor(),B=nt;if(q!==0&&(H=ns),Pe.bindFramebuffer(O.FRAMEBUFFER,H)&&j&&Pe.drawBuffers(E,H),Pe.viewport(N),Pe.scissor(F),Pe.setScissorTest(B),le){const we=De.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+z,we.__webglTexture,q)}else if(ge){const we=De.get(E.texture),He=z;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,we.__webglTexture,q,He)}else if(E!==null&&q!==0){const we=De.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,we.__webglTexture,q)}S=-1},this.readRenderTargetPixels=function(E,z,q,j,H,le,ge){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=De.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(Se=Se[ge]),Se){Pe.bindFramebuffer(O.FRAMEBUFFER,Se);try{const we=E.texture,He=we.format,Ve=we.type;if(!Re.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-j&&q>=0&&q<=E.height-H&&O.readPixels(z,q,j,H,Je.convert(He),Je.convert(Ve),le)}finally{const we=D!==null?De.get(D).__webglFramebuffer:null;Pe.bindFramebuffer(O.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(E,z,q,j,H,le,ge){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=De.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(Se=Se[ge]),Se){const we=E.texture,He=we.format,Ve=we.type;if(!Re.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=E.width-j&&q>=0&&q<=E.height-H){Pe.bindFramebuffer(O.FRAMEBUFFER,Se);const ke=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ke),O.bufferData(O.PIXEL_PACK_BUFFER,le.byteLength,O.STREAM_READ),O.readPixels(z,q,j,H,Je.convert(He),Je.convert(Ve),0);const lt=D!==null?De.get(D).__webglFramebuffer:null;Pe.bindFramebuffer(O.FRAMEBUFFER,lt);const ft=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await vg(O,ft,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ke),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,le),O.deleteBuffer(ke),O.deleteSync(ft),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,z=null,q=0){E.isTexture!==!0&&(Ms("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1]);const j=Math.pow(2,-q),H=Math.floor(E.image.width*j),le=Math.floor(E.image.height*j),ge=z!==null?z.x:0,Se=z!==null?z.y:0;P.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,ge,Se,H,le),Pe.unbindTexture()};const _n=O.createFramebuffer(),is=O.createFramebuffer();this.copyTextureToTexture=function(E,z,q=null,j=null,H=0,le=null){E.isTexture!==!0&&(Ms("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,E=arguments[1],z=arguments[2],le=arguments[3]||0,q=null),le===null&&(H!==0?(Ms("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=H,H=0):le=0);let ge,Se,we,He,Ve,ke,lt,ft,Et;const _t=E.isCompressedTexture?E.mipmaps[le]:E.image;if(q!==null)ge=q.max.x-q.min.x,Se=q.max.y-q.min.y,we=q.isBox3?q.max.z-q.min.z:1,He=q.min.x,Ve=q.min.y,ke=q.isBox3?q.min.z:0;else{const Yt=Math.pow(2,-H);ge=Math.floor(_t.width*Yt),Se=Math.floor(_t.height*Yt),E.isDataArrayTexture?we=_t.depth:E.isData3DTexture?we=Math.floor(_t.depth*Yt):we=1,He=0,Ve=0,ke=0}j!==null?(lt=j.x,ft=j.y,Et=j.z):(lt=0,ft=0,Et=0);const ct=Je.convert(z.format),_e=Je.convert(z.type);let Ct;z.isData3DTexture?(P.setTexture3D(z,0),Ct=O.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(P.setTexture2DArray(z,0),Ct=O.TEXTURE_2D_ARRAY):(P.setTexture2D(z,0),Ct=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);const it=O.getParameter(O.UNPACK_ROW_LENGTH),Kt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Sn=O.getParameter(O.UNPACK_SKIP_PIXELS),Bt=O.getParameter(O.UNPACK_SKIP_ROWS),En=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,_t.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,_t.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,He),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ve),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ke);const bt=E.isDataArrayTexture||E.isData3DTexture,rn=z.isDataArrayTexture||z.isData3DTexture;if(E.isDepthTexture){const Yt=De.get(E),zt=De.get(z),Ht=De.get(Yt.__renderTarget),Ci=De.get(zt.__renderTarget);Pe.bindFramebuffer(O.READ_FRAMEBUFFER,Ht.__webglFramebuffer),Pe.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let jn=0;jn<we;jn++)bt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,De.get(E).__webglTexture,H,ke+jn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,De.get(z).__webglTexture,le,Et+jn)),O.blitFramebuffer(He,Ve,ge,Se,lt,ft,ge,Se,O.DEPTH_BUFFER_BIT,O.NEAREST);Pe.bindFramebuffer(O.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||De.has(E)){const Yt=De.get(E),zt=De.get(z);Pe.bindFramebuffer(O.READ_FRAMEBUFFER,_n),Pe.bindFramebuffer(O.DRAW_FRAMEBUFFER,is);for(let Ht=0;Ht<we;Ht++)bt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Yt.__webglTexture,H,ke+Ht):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Yt.__webglTexture,H),rn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,zt.__webglTexture,le,Et+Ht):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,zt.__webglTexture,le),H!==0?O.blitFramebuffer(He,Ve,ge,Se,lt,ft,ge,Se,O.COLOR_BUFFER_BIT,O.NEAREST):rn?O.copyTexSubImage3D(Ct,le,lt,ft,Et+Ht,He,Ve,ge,Se):O.copyTexSubImage2D(Ct,le,lt,ft,He,Ve,ge,Se);Pe.bindFramebuffer(O.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else rn?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(Ct,le,lt,ft,Et,ge,Se,we,ct,_e,_t.data):z.isCompressedArrayTexture?O.compressedTexSubImage3D(Ct,le,lt,ft,Et,ge,Se,we,ct,_t.data):O.texSubImage3D(Ct,le,lt,ft,Et,ge,Se,we,ct,_e,_t):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,le,lt,ft,ge,Se,ct,_e,_t.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,le,lt,ft,_t.width,_t.height,ct,_t.data):O.texSubImage2D(O.TEXTURE_2D,le,lt,ft,ge,Se,ct,_e,_t);O.pixelStorei(O.UNPACK_ROW_LENGTH,it),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Kt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Sn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Bt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,En),le===0&&z.generateMipmaps&&O.generateMipmap(Ct),Pe.unbindTexture()},this.copyTextureToTexture3D=function(E,z,q=null,j=null,H=0){return E.isTexture!==!0&&(Ms("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,j=arguments[1]||null,E=arguments[2],z=arguments[3],H=arguments[4]||0),Ms('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,z,q,j,H)},this.initRenderTarget=function(E){De.get(E).__webglFramebuffer===void 0&&P.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?P.setTextureCube(E,0):E.isData3DTexture?P.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?P.setTexture2DArray(E,0):P.setTexture2D(E,0),Pe.unbindTexture()},this.resetState=function(){I=0,C=0,D=null,Pe.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}}const od=[.5,0];function Fx(i,e,t){var x,y;const[n,s]=i.parallax??[1,1],r=((x=i.feet)==null?void 0:x.x)??0,a=((y=i.feet)==null?void 0:y.y)??0,o=i.attach?e.x+r:r+e.x*(1-n),c=a+e.y*(1-s),f=i.attach&&i.repeatX?t:i.size[0],h=i.size[1],[d,p]=i.anchor??od;return{cx:o+(.5-d)*f,cy:c+(.5-p)*h,w:f,h}}function Bx(i,e,t,n={index:0,rows:1}){var f;const s=i.uvRect??{x:0,y:0,width:1,height:1};let r=s.width,a=s.x;if(i.attach&&i.repeatX){const h=i.size[0]/(s.width||1),[d]=i.parallax??[1,1];r=t/h,a=s.x+(e.x*d-t/2-(((f=i.feet)==null?void 0:f.x)??0))/h}const o=n.rows||1,c=s.height/o,l=s.y+s.height-(n.index+1)*c;return{repeat:[r,c],offset:[a,l]}}const tc=(i,e=0)=>(i.sortingLayer??0)*1e6+(i.sortingOrder??0)*1e3+e;function zx(i,{i0:e,i1:t,k0:n,k1:s,size:r=1,columns:a=4,rows:o=1,texW:c=128,texH:l=32}){const f=[],h=[],d=[],p=1/a,x=1/o,y=.5/c,_=.5/l;let g=0;for(let R=n;R<=s;R++)for(let A=e;A<=t;A++){const b=i({x:A,y:R});if(!b)continue;const L=(b-1)%a,I=Math.floor((b-1)/a),C=A*r,D=C+r,S=0-R*r,w=S-r,N=L*p+y,F=(L+1)*p-y,B=1-I*x-_,$=1-(I+1)*x+_;f.push(C,w,0,D,w,0,D,S,0,C,S,0),h.push(N,$,F,$,F,B,N,B),d.push(g,g+1,g+2,g,g+2,g+3),g+=4}return{positions:f,uvs:h,indices:d,count:g/4}}var es=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ld(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function Hx(i){if(i.__esModule)return i;var e=i.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(i).forEach(function(n){var s=Object.getOwnPropertyDescriptor(i,n);Object.defineProperty(t,n,s.get?s:{enumerable:!0,get:function(){return i[n]}})}),t}var Oc={exports:{}};Oc.exports;(function(i){(function(e,t,n){function s(c){var l=this,f=o();l.next=function(){var h=2091639*l.s0+l.c*23283064365386963e-26;return l.s0=l.s1,l.s1=l.s2,l.s2=h-(l.c=h|0)},l.c=1,l.s0=f(" "),l.s1=f(" "),l.s2=f(" "),l.s0-=f(c),l.s0<0&&(l.s0+=1),l.s1-=f(c),l.s1<0&&(l.s1+=1),l.s2-=f(c),l.s2<0&&(l.s2+=1),f=null}function r(c,l){return l.c=c.c,l.s0=c.s0,l.s1=c.s1,l.s2=c.s2,l}function a(c,l){var f=new s(c),h=l&&l.state,d=f.next;return d.int32=function(){return f.next()*4294967296|0},d.double=function(){return d()+(d()*2097152|0)*11102230246251565e-32},d.quick=d,h&&(typeof h=="object"&&r(h,f),d.state=function(){return r(f,{})}),d}function o(){var c=4022871197,l=function(f){f=String(f);for(var h=0;h<f.length;h++){c+=f.charCodeAt(h);var d=.02519603282416938*c;c=d>>>0,d-=c,d*=c,c=d>>>0,d-=c,c+=d*4294967296}return(c>>>0)*23283064365386963e-26};return l}t&&t.exports?t.exports=a:this.alea=a})(es,i)})(Oc);var Gx=Oc.exports,Nc={exports:{}};Nc.exports;(function(i){(function(e,t,n){function s(o){var c=this,l="";c.x=0,c.y=0,c.z=0,c.w=0,c.next=function(){var h=c.x^c.x<<11;return c.x=c.y,c.y=c.z,c.z=c.w,c.w^=c.w>>>19^h^h>>>8},o===(o|0)?c.x=o:l+=o;for(var f=0;f<l.length+64;f++)c.x^=l.charCodeAt(f)|0,c.next()}function r(o,c){return c.x=o.x,c.y=o.y,c.z=o.z,c.w=o.w,c}function a(o,c){var l=new s(o),f=c&&c.state,h=function(){return(l.next()>>>0)/4294967296};return h.double=function(){do var d=l.next()>>>11,p=(l.next()>>>0)/4294967296,x=(d+p)/(1<<21);while(x===0);return x},h.int32=l.next,h.quick=h,f&&(typeof f=="object"&&r(f,l),h.state=function(){return r(l,{})}),h}t&&t.exports?t.exports=a:this.xor128=a})(es,i)})(Nc);var Vx=Nc.exports,kc={exports:{}};kc.exports;(function(i){(function(e,t,n){function s(o){var c=this,l="";c.next=function(){var h=c.x^c.x>>>2;return c.x=c.y,c.y=c.z,c.z=c.w,c.w=c.v,(c.d=c.d+362437|0)+(c.v=c.v^c.v<<4^(h^h<<1))|0},c.x=0,c.y=0,c.z=0,c.w=0,c.v=0,o===(o|0)?c.x=o:l+=o;for(var f=0;f<l.length+64;f++)c.x^=l.charCodeAt(f)|0,f==l.length&&(c.d=c.x<<10^c.x>>>4),c.next()}function r(o,c){return c.x=o.x,c.y=o.y,c.z=o.z,c.w=o.w,c.v=o.v,c.d=o.d,c}function a(o,c){var l=new s(o),f=c&&c.state,h=function(){return(l.next()>>>0)/4294967296};return h.double=function(){do var d=l.next()>>>11,p=(l.next()>>>0)/4294967296,x=(d+p)/(1<<21);while(x===0);return x},h.int32=l.next,h.quick=h,f&&(typeof f=="object"&&r(f,l),h.state=function(){return r(l,{})}),h}t&&t.exports?t.exports=a:this.xorwow=a})(es,i)})(kc);var Wx=kc.exports,Uc={exports:{}};Uc.exports;(function(i){(function(e,t,n){function s(o){var c=this;c.next=function(){var f=c.x,h=c.i,d,p;return d=f[h],d^=d>>>7,p=d^d<<24,d=f[h+1&7],p^=d^d>>>10,d=f[h+3&7],p^=d^d>>>3,d=f[h+4&7],p^=d^d<<7,d=f[h+7&7],d=d^d<<13,p^=d^d<<9,f[h]=p,c.i=h+1&7,p};function l(f,h){var d,p=[];if(h===(h|0))p[0]=h;else for(h=""+h,d=0;d<h.length;++d)p[d&7]=p[d&7]<<15^h.charCodeAt(d)+p[d+1&7]<<13;for(;p.length<8;)p.push(0);for(d=0;d<8&&p[d]===0;++d);for(d==8?p[7]=-1:p[d],f.x=p,f.i=0,d=256;d>0;--d)f.next()}l(c,o)}function r(o,c){return c.x=o.x.slice(),c.i=o.i,c}function a(o,c){o==null&&(o=+new Date);var l=new s(o),f=c&&c.state,h=function(){return(l.next()>>>0)/4294967296};return h.double=function(){do var d=l.next()>>>11,p=(l.next()>>>0)/4294967296,x=(d+p)/(1<<21);while(x===0);return x},h.int32=l.next,h.quick=h,f&&(f.x&&r(f,l),h.state=function(){return r(l,{})}),h}t&&t.exports?t.exports=a:this.xorshift7=a})(es,i)})(Uc);var qx=Uc.exports,Fc={exports:{}};Fc.exports;(function(i){(function(e,t,n){function s(o){var c=this;c.next=function(){var f=c.w,h=c.X,d=c.i,p,x;return c.w=f=f+1640531527|0,x=h[d+34&127],p=h[d=d+1&127],x^=x<<13,p^=p<<17,x^=x>>>15,p^=p>>>12,x=h[d]=x^p,c.i=d,x+(f^f>>>16)|0};function l(f,h){var d,p,x,y,_,g=[],R=128;for(h===(h|0)?(p=h,h=null):(h=h+"\0",p=0,R=Math.max(R,h.length)),x=0,y=-32;y<R;++y)h&&(p^=h.charCodeAt((y+32)%h.length)),y===0&&(_=p),p^=p<<10,p^=p>>>15,p^=p<<4,p^=p>>>13,y>=0&&(_=_+1640531527|0,d=g[y&127]^=p+_,x=d==0?x+1:0);for(x>=128&&(g[(h&&h.length||0)&127]=-1),x=127,y=4*128;y>0;--y)p=g[x+34&127],d=g[x=x+1&127],p^=p<<13,d^=d<<17,p^=p>>>15,d^=d>>>12,g[x]=p^d;f.w=_,f.X=g,f.i=x}l(c,o)}function r(o,c){return c.i=o.i,c.w=o.w,c.X=o.X.slice(),c}function a(o,c){o==null&&(o=+new Date);var l=new s(o),f=c&&c.state,h=function(){return(l.next()>>>0)/4294967296};return h.double=function(){do var d=l.next()>>>11,p=(l.next()>>>0)/4294967296,x=(d+p)/(1<<21);while(x===0);return x},h.int32=l.next,h.quick=h,f&&(f.X&&r(f,l),h.state=function(){return r(l,{})}),h}t&&t.exports?t.exports=a:this.xor4096=a})(es,i)})(Fc);var jx=Fc.exports,Bc={exports:{}};Bc.exports;(function(i){(function(e,t,n){function s(o){var c=this,l="";c.next=function(){var h=c.b,d=c.c,p=c.d,x=c.a;return h=h<<25^h>>>7^d,d=d-p|0,p=p<<24^p>>>8^x,x=x-h|0,c.b=h=h<<20^h>>>12^d,c.c=d=d-p|0,c.d=p<<16^d>>>16^x,c.a=x-h|0},c.a=0,c.b=0,c.c=-1640531527,c.d=1367130551,o===Math.floor(o)?(c.a=o/4294967296|0,c.b=o|0):l+=o;for(var f=0;f<l.length+20;f++)c.b^=l.charCodeAt(f)|0,c.next()}function r(o,c){return c.a=o.a,c.b=o.b,c.c=o.c,c.d=o.d,c}function a(o,c){var l=new s(o),f=c&&c.state,h=function(){return(l.next()>>>0)/4294967296};return h.double=function(){do var d=l.next()>>>11,p=(l.next()>>>0)/4294967296,x=(d+p)/(1<<21);while(x===0);return x},h.int32=l.next,h.quick=h,f&&(typeof f=="object"&&r(f,l),h.state=function(){return r(l,{})}),h}t&&t.exports?t.exports=a:this.tychei=a})(es,i)})(Bc);var Xx=Bc.exports,cd={exports:{}};const $x={},Kx=Object.freeze(Object.defineProperty({__proto__:null,default:$x},Symbol.toStringTag,{value:"Module"})),Pa=Hx(Kx);(function(i){(function(e,t,n){var s=256,r=6,a=52,o="random",c=n.pow(s,r),l=n.pow(2,a),f=l*2,h=s-1,d;function p(b,L,I){var C=[];L=L==!0?{entropy:!0}:L||{};var D=g(_(L.entropy?[b,A(t)]:b??R(),3),C),S=new x(C),w=function(){for(var N=S.g(r),F=c,B=0;N<l;)N=(N+B)*s,F*=s,B=S.g(1);for(;N>=f;)N/=2,F/=2,B>>>=1;return(N+B)/F};return w.int32=function(){return S.g(4)|0},w.quick=function(){return S.g(4)/4294967296},w.double=w,g(A(S.S),t),(L.pass||I||function(N,F,B,$){return $&&($.S&&y($,S),N.state=function(){return y(S,{})}),B?(n[o]=N,F):N})(w,D,"global"in L?L.global:this==n,L.state)}function x(b){var L,I=b.length,C=this,D=0,S=C.i=C.j=0,w=C.S=[];for(I||(b=[I++]);D<s;)w[D]=D++;for(D=0;D<s;D++)w[D]=w[S=h&S+b[D%I]+(L=w[D])],w[S]=L;(C.g=function(N){for(var F,B=0,$=C.i,re=C.j,Q=C.S;N--;)F=Q[$=h&$+1],B=B*s+Q[h&(Q[$]=Q[re=h&re+F])+(Q[re]=F)];return C.i=$,C.j=re,B})(s)}function y(b,L){return L.i=b.i,L.j=b.j,L.S=b.S.slice(),L}function _(b,L){var I=[],C=typeof b,D;if(L&&C=="object")for(D in b)try{I.push(_(b[D],L-1))}catch{}return I.length?I:C=="string"?b:b+"\0"}function g(b,L){for(var I=b+"",C,D=0;D<I.length;)L[h&D]=h&(C^=L[h&D]*19)+I.charCodeAt(D++);return A(L)}function R(){try{var b;return d&&(b=d.randomBytes)?b=b(s):(b=new Uint8Array(s),(e.crypto||e.msCrypto).getRandomValues(b)),A(b)}catch{var L=e.navigator,I=L&&L.plugins;return[+new Date,e,I,e.screen,A(t)]}}function A(b){return String.fromCharCode.apply(0,b)}if(g(n.random(),t),i.exports){i.exports=p;try{d=Pa}catch{}}else n["seed"+o]=p})(typeof self<"u"?self:es,[],Math)})(cd);var Yx=cd.exports,Jx=Gx,Zx=Vx,Qx=Wx,eb=qx,tb=jx,nb=Xx,ts=Yx;ts.alea=Jx;ts.xor128=Zx;ts.xorwow=Qx;ts.xorshift7=eb;ts.xor4096=tb;ts.tychei=nb;var ib=ts;const ud=ld(ib),sb=Object.assign({"/world/scripts/arrival.js":()=>Ie(()=>import("./arrival-B096b78W.js"),__vite__mapDeps([0,1,2])),"/world/scripts/bank.js":()=>Ie(()=>import("./bank-Clesp9nZ.js"),__vite__mapDeps([1,2])),"/world/scripts/camera.js":()=>Ie(()=>import("./camera-CFdr3yOD.js"),[]),"/world/scripts/db.js":()=>Ie(()=>import("./db-CYyGlf11.js"),__vite__mapDeps([3,2])),"/world/scripts/ground.js":()=>Ie(()=>import("./ground-b0nUTt3G.js"),[]),"/world/scripts/joust-camera.js":()=>Ie(()=>import("./joust-camera-Fg9LmHPp.js"),[]),"/world/scripts/jouster.js":()=>Ie(()=>import("./jouster-Dt9SqpYW.js"),__vite__mapDeps([4,5,1,2,6])),"/world/scripts/lib/color.js":()=>Ie(()=>import("./color-DDSg_o2D.js"),[]),"/world/scripts/lib/econ.js":()=>Ie(()=>Promise.resolve().then(()=>Hc),void 0),"/world/scripts/look-default.js":()=>Ie(()=>import("./look-default-BibdNaYP.js"),[]),"/world/scripts/player.js":()=>Ie(()=>import("./player-CqzJShkt.js"),__vite__mapDeps([7,8,9,10])),"/world/scripts/tex-hero.js":()=>Ie(()=>import("./tex-hero-D9FSdSdV.js"),__vite__mapDeps([9,8,10])),"/world/scripts/tex-lance.js":()=>Ie(()=>import("./tex-lance-h9_Q8DQT.js"),[]),"/world/scripts/tex-meadow.js":()=>Ie(()=>import("./tex-meadow-CQRPL3Pn.js"),__vite__mapDeps([11,8,10])),"/world/scripts/tex-sky.js":()=>Ie(()=>import("./tex-sky-H7hQEGu6.js"),__vite__mapDeps([12,8,10])),"/world/scripts/tex-soil.js":()=>Ie(()=>import("./tex-soil-6tL0S4Gb.js"),__vite__mapDeps([13,8,10])),"/world/scripts/tex-tilt.js":()=>Ie(()=>import("./tex-tilt-DATa2CU9.js"),[]),"/world/scripts/tileset-ground.js":()=>Ie(()=>import("./tileset-ground-dAb9Cutk.js"),__vite__mapDeps([14,8])),"/world/scripts/tileset-sand.js":()=>Ie(()=>import("./tileset-sand-D3oqsxai.js"),[]),"/world/scripts/ui.js":()=>Ie(()=>import("./ui-CFGmGYL3.js"),__vite__mapDeps([15,5,2]))}),Jo=new Map;function rb(i){const[e,t=""]=String(i).split("?");return{path:e,params:Object.fromEntries(new URLSearchParams(t))}}function nc(i,e=ab){if(Jo.has(i))return Jo.get(i);const t=(async()=>{const{path:n,params:s}=rb(i),r=sb["/world/"+n];if(!r)throw new Error(`no texture script ${n}`);const a=await r();if(typeof a.texture!="function")throw new Error(`${n} has no texture(ctx)`);const o=ud.alea(i);let c=null;const l={params:s,random:()=>o(),canvas(f,h){const d=e(Math.max(1,Math.round(f)),Math.max(1,Math.round(h)));return c||(c=d),d.getContext("2d",{willReadFrequently:!0})},atlas(){throw new Error(`${n}: ctx.atlas is not in this port yet`)},wang(){throw new Error(`${n}: ctx.wang is not in this port yet`)}};if(await a.texture(l),!c)throw new Error(`${n} drew no canvas`);return{canvas:c,meta:a.meta??{}}})();return Jo.set(i,t),t}function ab(i,e){const t=document.createElement("canvas");return t.width=i,t.height=e,t}const rf=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],ma=[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],af=[.3127,.329],ob=90,of=.04,ga=(i,e)=>i.map(t=>e[0].map((n,s)=>t.reduce((r,a,o)=>r+a*e[o][s],0))),lf=(i,e)=>i.map(t=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2]);function cf([[i,e,t],[n,s,r],[a,o,c]]){const l=s*c-r*o,f=-(n*c-r*a),h=n*o-s*a,d=i*l+e*f+t*h;return[[l/d,-(e*c-t*o)/d,(e*r-t*s)/d],[f/d,(i*c-t*a)/d,-(i*r-t*n)/d],[h/d,-(i*o-e*a)/d,(i*s-e*n)/d]]}function Zo(i){const e=(.860117757+.000154118254*i+128641212e-15*i*i)/(1+.000842420235*i+708145163e-15*i*i),t=(.317398726+422806245e-13*i+420481691e-16*i*i)/(1-289741816e-13*i+161456053e-15*i*i);return[e,t]}const lb=([i,e])=>[4*i/(12*e-2*i+3),6*e/(12*e-2*i+3)],cb=([i,e])=>[3*i/(2*i-8*e+4),2*e/(2*i-8*e+4)],uf=([i,e])=>[i/e,1,(1-i-e)/e];function ub(i=0,e=0){if(!i&&!e)return[[1,0,0],[0,1,0],[0,0,1]];const t=6504,n=1e6/t,s=1e6/(n+ob*i),r=Zo(t),a=Zo(s),o=lb(af),c=a[0]-r[0],l=a[1]-r[1],f=Zo(t+10),h=f[0]-r[0],d=f[1]-r[1],p=Math.hypot(h,d)||1,x=-d/p,y=h/p,_=y>=0?1:-1,g=[o[0]+c+_*x*of*e,o[1]+l+_*y*of*e],R=lf(ma,uf(af)),A=lf(ma,uf(cb(g))),b=[[A[0]/R[0],0,0],[0,A[1]/R[1],0],[0,0,A[2]/R[2]]];return ga(cf(rf),ga(cf(ma),ga(b,ga(ma,rf))))}function fb(i,e={}){const t={exposure:1,saturation:1,contrast:1,brightness:0,temperature:0,tint:0,vignette:0,roundness:2,feather:.45,vignetteColor:[0,0,0],grain:0};if(!(i!=null&&i.look))return t;const n={op:"scene"};let s=i.look({scene:n,param:(a,o)=>e[a]??o});const r=[];for(;s&&s!==n;)r.unshift(s),s=s.input;for(const a of r){if(a.op==="grade")for(const o of["exposure","saturation","contrast","brightness","temperature","tint"])a.opts[o]!=null&&(t[o]=a.opts[o]);a.op==="vignette"&&(t.vignette=a.intensity,t.roundness=a.opts.roundness??2,t.feather=a.opts.feather??.45,t.vignetteColor=a.opts.color??[0,0,0]),a.op==="grain"&&(t.grain=a.intensity)}return t}const hb=`
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
}`;class db{constructor(e,t,{neutral:n=!0}={}){this.renderer=e,this.rt=new Ti(2,2,{type:Wn,colorSpace:jt,depthBuffer:!1});const s=ub(t.temperature,t.tint),r=new Qe().set(s[0][0],s[0][1],s[0][2],s[1][0],s[1][1],s[1][2],s[2][0],s[2][1],s[2][2]);this.material=new kn({uniforms:{tScene:{value:this.rt.texture},exposure:{value:t.exposure},contrast:{value:t.contrast},brightness:{value:t.brightness},saturation:{value:t.saturation},wb:{value:r},neutralOn:{value:n?1:0},vigI:{value:t.vignette},vigRound:{value:t.roundness},vigFeather:{value:t.feather},vigColor:{value:new X(...t.vignetteColor)},grainI:{value:t.grain},time:{value:0},res:{value:new yt(2,2)}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:hb,depthTest:!1,depthWrite:!1}),this.quad=new sn(new fi(2,2),this.material),this.quad.frustumCulled=!1,this.scene=new Zh,this.scene.add(this.quad),this.camera=new Ic(-1,1,1,-1,0,1)}setSize(e,t){this.rt.setSize(Math.max(2,e),Math.max(2,t)),this.material.uniforms.res.value.set(e,t)}render(e,t,n=0){const s=this.renderer;s.setRenderTarget(this.rt),s.clear(),s.render(e,t),s.setRenderTarget(null),this.material.uniforms.time.value=n,s.render(this.scene,this.camera)}}const ff=.4,pb=Object.freeze({r:.5,g:.5,b:.5,a:1}),La=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4),Ns=(i,e,t)=>Math.min(t,Math.max(e,i));function Ps(i,e=1){const t=String(i).trim();return t.endsWith("%")?Number.parseFloat(t)/100*e:Number.parseFloat(t)}function hf(i,e,t){const n=Math.pow(i+.3963377774*e+.2158037573*t,3),s=Math.pow(i-.1055613458*e-.0638541728*t,3),r=Math.pow(i-.0894841775*e-1.291485548*t,3);return[4.0767416621*n-3.3077115913*s+.2309699292*r,-1.2684380046*n+2.6097574011*s-.3413193965*r,-.0041960863*n-.7034186147*s+1.707614701*r]}function df([i,e,t]){const n=Math.cbrt(.4122214708*i+.5363325363*e+.0514459929*t),s=Math.cbrt(.2119034982*i+.6806995451*e+.1073969566*t),r=Math.cbrt(.0883024619*i+.2817188376*e+.6299787005*t);return[.2104542553*n+.793617785*s-.0040720468*r,1.9779984951*n-2.428592205*s+.4505937099*r,.0259040371*n+.7827717662*s-.808675766*r]}const Qo=.02,pf=1e-4,mf=i=>i.every(e=>e>=0&&e<=1),gf=i=>i.map(e=>Ns(e,0,1)),_f=(i,e)=>Math.hypot(i[0]-e[0],i[1]-e[1],i[2]-e[2]);function mb(i,e,t){const n=t*Math.PI/180,s=Math.cos(n),r=Math.sin(n),a=p=>[i,p*s,p*r];let o=a(e),c=hf(...o);if(mf(c))return c;let l=gf(c);if(_f(df(l),o)<Qo)return l;let f=0,h=e,d=!0;for(;h-f>pf;){const p=(f+h)/2;if(o=a(p),c=hf(...o),d&&mf(c)){f=p;continue}l=gf(c);const x=_f(df(l),o);if(x<Qo){if(Qo-x<pf)return l;d=!1,f=p}else h=p}return l}function gb(i){const[e,t]=i.split("/"),n=e.trim().split(/[\s,]+/);if(n.length<3)return null;const s=Ns(Ps(n[0]),0,1),r=Ns(Ps(n[1],ff),0,ff),a=Ps(n[2]);if(![s,r,a].every(Number.isFinite))return null;const[o,c,l]=s>=1?[1,1,1]:s<=0?[0,0,0]:mb(s,r,a),f=t===void 0?1:Ns(Ps(t),0,1);return{r:o,g:c,b:l,a:Number.isFinite(f)?f:1}}function _b(i){const e=i.length===3||i.length===4?[...i].map(n=>n+n).join(""):i;if(!/^[0-9a-f]{6}([0-9a-f]{2})?$/i.test(e))return null;const t=n=>Number.parseInt(e.slice(n,n+2),16)/255;return{r:La(t(0)),g:La(t(2)),b:La(t(4)),a:e.length===8?t(6):1}}function vb(i){const e=i.split(/[\s,/]+/).filter(Boolean);if(e.length<3)return null;const t=s=>La(Ns(Ps(s,255)/255,0,1)),n={r:t(e[0]),g:t(e[1]),b:t(e[2]),a:e[3]===void 0?1:Ns(Ps(e[3]),0,1)};return[n.r,n.g,n.b,n.a].every(Number.isFinite)?n:null}function vf(i){const e=String(i??"").trim().toLowerCase();let t=null;return e.startsWith("#")?t=_b(e.slice(1)):e.startsWith("oklch(")&&e.endsWith(")")?t=gb(e.slice(6,-1)):/^rgba?\(/.test(e)&&e.endsWith(")")&&(t=vb(e.slice(e.indexOf("(")+1,-1))),t??{...pb}}const yb={alpha:wn,add:xr,multiply:Ba,subtract:Fa},yf=[1,.85,.72],xb=1e3,bb=.75,wb=.95,Mb=2,Sb=8,Eb=2,Tb=3,oo=i=>{const e=String(i),t="/realm/play/";return e.startsWith("/cdn/")?t+"cdn/"+e.slice(5).replace(/\.png$/i,".webp")+"?v="+Tb:e.startsWith("/art/")?t+e.slice(1):null},Ab=i=>String(i).replace(/\/cdn\/(value\.[0-9a-f]{64}\.(?:png|webp|mp3))/g,e=>oo(e));class Rb{constructor(e,{toneMapping:t="neutral",look:n=null,scale:s=null}={}){this.renderer=new Ux({canvas:e,antialias:!1,alpha:!1,powerPreference:"high-performance"}),this.base=Math.min(devicePixelRatio||1,2),this.forced=s,this.step=0,this.gov={ms:[],sum:0,slow:0,keep:0,flips:0,sinceUp:1/0},this.renderer.setPixelRatio(this.scale),this.renderer.outputColorSpace=jt,this.renderer.toneMapping=ai,this.look=new db(this.renderer,n??{exposure:1,saturation:1,contrast:1,brightness:0,temperature:0,tint:0,vignette:0,roundness:2,feather:.45,vignetteColor:[0,0,0],grain:0},{neutral:t==="neutral"}),this.scene=new Zh,this.camera=new Ic(-1,1,1,-1,.1,1e3),this.camera.position.set(0,0,100),this.sprites=[],this.loader=new td,this.missing=[],this.t=0}worldToScreen(e){const t=new X(e.x,e.y,0).project(this.camera);return{x:(t.x+1)/2*this.cssW,y:(1-t.y)/2*this.cssH,onScreen:Math.abs(t.x)<=1&&Math.abs(t.y)<=1}}get scale(){return this.forced??this.base*yf[this.step]}resize(e,t){this.cssW=e,this.cssH=t,this.renderer.setPixelRatio(this.scale),this.renderer.setSize(e,t,!1);const n=this.renderer.getPixelRatio();this.look.setSize(Math.round(e*n),Math.round(t*n)),this.aspect=e/Math.max(1,t)}govern(e){const t=this.gov;if(this.forced!=null||!(e>0))return;if(e>250){t.ms.length=0,t.sum=0;return}if(t.ms.push(e),t.sum+=e,t.sum<xb)return;const n=[...t.ms].sort((a,o)=>a-o)[t.ms.length>>1],s=t.sum/t.ms.length;t.ms.length=0,t.sum=0,t.sinceUp++,this.refresh=Math.max(4,Math.min(this.refresh??n,n));const r=this.refresh/s;r<bb?(t.keep=0,++t.slow>=Mb&&this.step<yf.length-1&&(t.slow=0,t.sinceUp<=4&&t.flips++,this.step++,this.resize(this.cssW,this.cssH))):r>wb?(t.slow=0,++t.keep>=Sb&&this.step>0&&t.flips<Eb&&(t.keep=0,t.sinceUp=0,this.step--,this.resize(this.cssW,this.cssH))):(t.slow=0,t.keep=0)}setSky(e){if((e==null?void 0:e.kind)!=="gradient")return;const t=vf(e.horizon),n=vf(e.zenith),s=new kn({uniforms:{h:{value:new X(t.r,t.g,t.b)},z:{value:new X(n.r,n.g,n.b)}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 h; uniform vec3 z; varying vec2 vUv; void main() { gl_FragColor = vec4(mix(h, z, vUv.y), 1.0); }",depthTest:!1,depthWrite:!1});this.sky=new sn(new fi(1,1),s),this.sky.renderOrder=-1e12,this.sky.frustumCulled=!1,this.scene.add(this.sky)}async picture(e,t){let n,s={};const r=oo(e);if(r)try{n=await this.loader.loadAsync(r)}catch{return this.missing.push(e),null}else{const o=await nc(e);n=new Ql(o.canvas),s=o.meta}n.colorSpace=jt;const a=(t??s.filter??(r?"linear":"pixel"))==="linear";return n.magFilter=a?ln:Wt,n.minFilter=a?Hn:Wt,n.generateMipmaps=a,n.wrapS=br,n.wrapT=ni,{tex:n,meta:s}}async addSprite(e,t){var l,f;const n=e.sprite,s=await this.picture(n.texture,n.filter);if(!s)return null;(((l=n.uvRect)==null?void 0:l.height)??1)>1&&(s.tex.wrapT=br);const r=new Sr({map:s.tex,transparent:!0,depthTest:!1,depthWrite:!1,opacity:n.opacity??1,blending:yb[n.blend]??wn});n.tint!=null&&(r.color=Array.isArray(n.tint)?new dt(n.tint[0],n.tint[1],n.tint[2]):new dt(n.tint));const a=new sn(new fi(1,1),r);a.renderOrder=tc(n,t),a.frustumCulled=!1,this.scene.add(a);const o=e.feetPosition??{},c={id:e.id,mesh:a,meta:s.meta,s:{feet:o,attach:o.attach==="camera",size:n.size??[1,1],anchor:n.anchor,parallax:n.parallax,repeatX:!!n.repeatX,uvRect:n.uvRect},clip:((f=Object.values(e.mixer??{})[0])==null?void 0:f.clip)??s.meta.defaultAnimation??null};return this.sprites.push(c),c}async setTiles(e,t){const n=await nc(e.tileset),s=new Ql(n.canvas);s.colorSpace=jt;const r=(n.meta.filter??"pixel")==="linear";s.magFilter=s.minFilter=r?ln:Wt,s.generateMipmaps=!1;const a=e.tilesetColumns??4,o=n.canvas.width/a,c=zx(t.tileAt,{i0:-260,i1:260,k0:0,k1:40,size:e.tileSize??1,columns:a,rows:Math.max(1,Math.round(n.canvas.height/o)),texW:n.canvas.width,texH:n.canvas.height}),l=new hi;l.setAttribute("position",new li(c.positions,3)),l.setAttribute("uv",new li(c.uvs,2)),l.setIndex(c.indices);const f=new sn(l,new Sr({map:s,transparent:!0,depthTest:!1,depthWrite:!1}));f.renderOrder=tc({sortingLayer:0},0),f.frustumCulled=!1,this.scene.add(f),this.tiles=f}frame(e,t){var o;this.t+=t;const n=e.orthoSize,s=n*this.aspect,r=s*2*1.1,a=this.camera;a.left=-s,a.right=s,a.top=n,a.bottom=-n,a.position.set(e.x,e.y,100),a.updateProjectionMatrix(),this.sky&&(this.sky.position.set(e.x,e.y,-50),this.sky.scale.set(s*2.02,n*2.02,1));for(const c of this.sprites){const l=Fx(c.s,e,r);c.mesh.position.set(l.cx,l.cy,0),c.mesh.scale.set(l.w,l.h,1);const f=c.meta.rows??1,h=c.meta.fps??0,d=c.clip&&((o=c.meta.animations)==null?void 0:o[c.clip])||null,p=d&&h?d[Math.floor(this.t*h)%d.length]:0,x=Bx(c.s,e,r,{index:p,rows:f}),y=c.mesh.material.map;y.repeat.set(x.repeat[0],x.repeat[1]),y.offset.set(x.offset[0],x.offset[1])}this.look.render(this.scene,a,this.t)}}const Cb=16/9,Pb=1.2,el=1.9,Lb=.5,xf=3,Ib=.22,Db=Object.assign({"/world/scripts/arrival.js":()=>Ie(()=>import("./arrival-B096b78W.js"),__vite__mapDeps([0,1,2])),"/world/scripts/bank.js":()=>Ie(()=>import("./bank-Clesp9nZ.js"),__vite__mapDeps([1,2])),"/world/scripts/camera.js":()=>Ie(()=>import("./camera-CFdr3yOD.js"),[]),"/world/scripts/db.js":()=>Ie(()=>import("./db-CYyGlf11.js"),__vite__mapDeps([3,2])),"/world/scripts/ground.js":()=>Ie(()=>import("./ground-b0nUTt3G.js"),[]),"/world/scripts/joust-camera.js":()=>Ie(()=>import("./joust-camera-Fg9LmHPp.js"),[]),"/world/scripts/jouster.js":()=>Ie(()=>import("./jouster-Dt9SqpYW.js"),__vite__mapDeps([4,5,1,2,6])),"/world/scripts/lib/color.js":()=>Ie(()=>import("./color-DDSg_o2D.js"),[]),"/world/scripts/lib/econ.js":()=>Ie(()=>Promise.resolve().then(()=>Hc),void 0),"/world/scripts/look-default.js":()=>Ie(()=>import("./look-default-BibdNaYP.js"),[]),"/world/scripts/player.js":()=>Ie(()=>import("./player-CqzJShkt.js"),__vite__mapDeps([7,8,9,10])),"/world/scripts/tex-hero.js":()=>Ie(()=>import("./tex-hero-D9FSdSdV.js"),__vite__mapDeps([9,8,10])),"/world/scripts/tex-lance.js":()=>Ie(()=>import("./tex-lance-h9_Q8DQT.js"),[]),"/world/scripts/tex-meadow.js":()=>Ie(()=>import("./tex-meadow-CQRPL3Pn.js"),__vite__mapDeps([11,8,10])),"/world/scripts/tex-sky.js":()=>Ie(()=>import("./tex-sky-H7hQEGu6.js"),__vite__mapDeps([12,8,10])),"/world/scripts/tex-soil.js":()=>Ie(()=>import("./tex-soil-6tL0S4Gb.js"),__vite__mapDeps([13,8,10])),"/world/scripts/tex-tilt.js":()=>Ie(()=>import("./tex-tilt-DATa2CU9.js"),[]),"/world/scripts/tileset-ground.js":()=>Ie(()=>import("./tileset-ground-dAb9Cutk.js"),__vite__mapDeps([14,8])),"/world/scripts/tileset-sand.js":()=>Ie(()=>import("./tileset-sand-D3oqsxai.js"),[]),"/world/scripts/ui.js":()=>Ie(()=>import("./ui-CFGmGYL3.js"),__vite__mapDeps([15,5,2]))});async function Ob(i,e,{screenAspect:t=!1}={}){const n=await wc(i.camera),s=[].concat(n.behavior??[]),r=await Promise.all(s.map(async c=>{const l=Db["/world/"+String(c).split("#")[0]];if(!l)throw new Error(`no camera behavior ${c}`);return l()})),a={state:structuredClone(n.state??{}),target:e,feetPosition:{x:0,y:0,z:15},rotation:null},o={x:null,y:null,on:!1};return{self:a,update(c,l,f){var I,C,D;const h=.008333333333333333;let d=Math.min(c,.25);const p=t?{aspect:f}:{};for(;d>1e-6;){const S=Math.min(h,d);d-=S;const w={self:a,now:()=>l,world:{camera:p},query:()=>[],getObject:()=>null};for(const N of r)(I=N.update)==null||I.call(N,w,S)}const x=a.state.orthoSize??((C=n.state)==null?void 0:C.orthoSize)??6;let y=a.feetPosition.x,_=a.feetPosition.y;const g=e.state??{},R=g.phase&&g.phase!=="armory"&&g.phase!=="end",A=x*f,b=e.feetPosition.x,L=b<y-A+el||b>y+A-el;if(!t&&R&&f>0&&f<Cb&&(f<Pb||L)){const S=(D=g.hud)==null?void 0:D.oppX,w=g.dir||1;let N=b+w*(A-el);if(S!=null){const $=2*(A-Lb),re=Math.min(1,Math.max(0,($+xf-Math.abs(S-b))/xf));N+=((b+S)/2-N)*re}const F=f<1?x*(1-2*Ib):_,B=1-Math.exp(-6*Math.min(c,.25));o.on||(o.x=y,o.y=_,o.on=!0),o.x+=(N-o.x)*B,o.y+=(F-o.y)*B,y=o.x,_=o.y}else if(o.on){const S=1-Math.exp(-6*Math.min(c,.25));o.x+=(y-o.x)*S,o.y+=(_-o.y)*S,Math.abs(o.x-y)<.02&&Math.abs(o.y-_)<.02?o.on=!1:(y=o.x,_=o.y)}return{x:y,y:_,orthoSize:x}}}}const Nb=1/30,kb=.25,Ga=i=>i&&typeof i=="object"&&!Array.isArray(i),Er=i=>({x:Number((i==null?void 0:i.x)??0),y:Number((i==null?void 0:i.y)??0),z:Number((i==null?void 0:i.z)??0)}),bf={linear:i=>i,easeInQuad:i=>i*i,easeOutQuad:i=>i*(2-i),easeInOutQuad:i=>i<.5?2*i*i:-1+(4-2*i)*i,easeOutCubic:i=>1-Math.pow(1-i,3),easeInCubic:i=>i*i*i,easeInOutCubic:i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2};class Ub{constructor(e,t,n){var s;this.id=e,this.room=n,this.parent=t.parent??null,this.tags=[...t.tags??[]],this.state=structuredClone(t.state??{}),this.feetPosition=Er(t.feetPosition),this.attach=((s=t.feetPosition)==null?void 0:s.attach)??null,this.velocity=Er(t.velocity),this.rotation={yaw:0,pitch:0,roll:0,...Ga(t.rotation)?t.rotation:{}},this.sprite=t.sprite?{...t.sprite}:null,this.physics=t.physics??null,this.visible=t.visible!==!1,this.fx=t.fx??null,this.anim={},this.audio=t.audio??null,this.scope=t.scope??null,this.audience=t.audience??null,this.lifetime=t.lifetime??null,this.bornAt=n.nowMs,this.grounded=!1,this.userId=t.userId??null,this.displayName=t.displayName??null,this.isLocal=t.isLocal??!0,this.behaviors=[].concat(t.behavior??[]),this.mods=[],this.fields={}}get body(){return Ga(this.physics)?this.physics.body:this.physics}}function qi(i){if(!i)return null;if(i._handle)return i._handle;const e=i.room,t={get id(){return i.id},get objectId(){return i.id},get tags(){return i.tags},get parent(){return i.parent},get state(){return i.state},set state(n){i.state=Ga(n)?n:{}},get feetPosition(){return i.feetPosition},set feetPosition(n){i.feetPosition=Er(n)},get velocity(){return i.velocity},set velocity(n){i.velocity=Er(n)},get rotation(){return i.rotation},set rotation(n){i.rotation={yaw:0,pitch:0,roll:0,...Ga(n)?n:{}}},get sprite(){return i.sprite},set sprite(n){i.sprite=n?{...n}:null},get visible(){return i.visible},set visible(n){i.visible=!!n},get fx(){return i.fx},set fx(n){i.fx=n},get anim(){return i.anim},get audio(){return i.audio},set audio(n){i.audio=n},get grounded(){return i.grounded},get userId(){return i.userId},get displayName(){return i.displayName},get isLocal(){return i.isLocal},get children(){return[...e.entities.values()].filter(n=>n.parent===i.id).map(qi)},get lifetime(){return i.lifetime},set lifetime(n){i.lifetime=n,i.bornAt=e.nowMs}};return i._handle=new Proxy(t,{get:(n,s)=>s in n?n[s]:i.fields[s],set:(n,s,r)=>(s in n?n[s]=r:i.fields[s]=r,!0),has:(n,s)=>s in n||s in i.fields,deleteProperty:(n,s)=>(delete i.fields[s],!0)}),i._handle}class Fb{constructor(e={}){this.roomId=e.roomId??"web",this.scripts=e.scripts??{},this.gravity=Er(e.gravity??{y:-9.81}),this.groundY=e.groundY??0,this.sqlFor=e.sql??null,this.startMs=e.startMs??Date.now(),this.elapsed=0,this.clock=0,this.entities=new Map,this.timers=new Map,this.tweens=[],this.listeners=new Map,this.sinks={},this.session={},this.worldState={},this.placeState={},this.rng=ud.alea(e.seed??String(this.startMs)),this.timerSeq=0,this.timeScale=1,this.freezeUntil=0,this.slowUntil=0,this.inputs=new Map,this.inputSeq=0,this.errors=[],this.cameraState={}}get nowMs(){return this.startMs+this.clock}async loadModule(e){const t=String(e).split("#")[0],n=this.scripts["/world/"+t];if(!n)throw new Error(`no behavior ${t}`);return n()}ctxOf(e,t){const n=this,s=qi(e);return{self:s,state:s?s.state:n.worldState,player:e&&e.tags.includes("player")?s:null,session:n.session,world:{state:n.worldState,camera:n.cameraState,mode:"dev",id:n.roomId},place:{state:n.placeState,gravity:n.gravity,players:n.players().map(qi)},now:()=>n.nowMs,random:()=>n.rng(),getRoomId:()=>n.roomId,sql:n.sqlFor?n.sqlFor((e==null?void 0:e.userId)??null):null,after:(r,a,o)=>n.after(e,t,r,a,o),cancel:r=>n.timers.delete(r),emit:(r,a,o)=>n.emit(r,a,o,e),on:(r,a)=>n.on(r,a),spawn:(r,a)=>n.spawn(r,a,e),destroy:r=>n.destroy(r),getObject:r=>qi(n.entities.get(r)),query:(r={})=>n.query(r,e),worldToScreen:r=>n.worldToScreen?n.worldToScreen(r):null,log:(...r)=>console.log("[world]",...r),_room:n}}async attachBehaviors(e){e.mods=await Promise.all(e.behaviors.map(t=>this.loadModule(t)));for(const t of e.mods)this.call(e,t,"onSpawn")}call(e,t,n,...s){if(typeof(t==null?void 0:t[n])=="function")try{const r=t[n](this.ctxOf(e,t),...s);return r&&typeof r.then=="function"&&r.catch(a=>this.fault(e,n,a)),r}catch(r){this.fault(e,n,r)}}fault(e,t,n){this.errors.push({at:this.nowMs,id:e==null?void 0:e.id,hook:t,message:String((n==null?void 0:n.message)??n)}),console.error(`[world] ${(e==null?void 0:e.id)??"room"} ${t}:`,n)}spawn(e,t,n){const s=typeof e=="string"?t??{}:e??{};let r=typeof e=="string"?e:s.id??`obj-${++this.timerSeq}`;const a=s.parent?`${s.parent}/${r}`:r;this.entities.has(a)&&this.destroy(a);const o=new Ub(a,s,this);return this.entities.set(a,o),o.behaviors.length&&this.attachBehaviors(o).catch(c=>this.fault(o,"load",c)),a}destroy(e){for(const t of[].concat(e??[])){const n=this.entities.get(t);if(n){for(const s of[...this.entities.values()])s.parent===t&&this.destroy(s.id);for(const s of n.mods)this.call(n,s,"onDestroy");this.entities.delete(t);for(const[s,r]of this.timers)r.owner===t&&this.timers.delete(s)}}}query(e,t){let n=[...this.entities.values()];if(e.ignoreSelf!==!1&&t&&(n=n.filter(s=>s!==t)),e.tags&&(n=n.filter(s=>e.tags.every(r=>s.tags.includes(r)))),e.radius!=null&&t){const s=this.worldPosition(t);n=n.filter(r=>{const a=this.worldPosition(r);return Math.hypot(a.x-s.x,a.y-s.y,a.z-s.z)<=e.radius})}return e.select==="ids"?n.map(s=>s.id):n.map(qi)}players(){return[...this.entities.values()].filter(e=>e.tags.includes("player"))}after(e,t,n,s,r){const a=`t${++this.timerSeq}`;return this.timers.set(a,{owner:(e==null?void 0:e.id)??null,mod:t,name:s,payload:r,due:this.clock+Math.max(0,n)*1e3}),a}on(e,t){return this.listeners.has(e)||this.listeners.set(e,new Set),this.listeners.get(e).add(t),()=>{var n;return(n=this.listeners.get(e))==null?void 0:n.delete(t)}}emit(e,t,n,s){var r,a;e==="hitstop"&&(this.freezeUntil=Math.max(this.freezeUntil,this.clock+((t==null?void 0:t.duration)??0)*1e3)),e==="slowMo"&&(this.slowUntil=this.clock+((t==null?void 0:t.duration)??0)*1e3,this.slowScale=(t==null?void 0:t.scale)??.4),(a=(r=this.sinks)[e])==null||a.call(r,t,n,s);for(const o of this.listeners.get(e)??[])try{o(t,n)}catch(c){this.fault(s,"on:"+e,c)}}animate(e,t,n={}){const s=this.entities.get(typeof e=="string"?e:e==null?void 0:e.id);if(!s)return;const r=Object.entries(t).map(([a,o])=>{const c=a.split("."),l=()=>c.reduce((h,d)=>h==null?void 0:h[d],s);let f=Array.isArray(o)?o.slice():[l(),o];return f=f.map((h,d)=>typeof h=="string"&&/^[+-]=/.test(h)?Number(d?f[d-1]:l())+Number(h.replace("=","")):Number(h)),{keys:c,pts:f}});this.tweens.push({e:s,tracks:r,t0:this.elapsed+(n.delay??0)*1e3,dur:Math.max(1,(n.duration??1)*1e3),ease:bf[n.easing]??bf.linear})}stepTweens(){this.tweens=this.tweens.filter(e=>{if(!this.entities.has(e.e.id))return!1;if(this.elapsed<e.t0)return!0;const t=Math.min(1,(this.elapsed-e.t0)/e.dur),n=e.ease(t);for(const s of e.tracks){const r=s.pts.length-1,a=n*r,o=Math.min(r-1,Math.floor(a)),c=a-o,l=r===0?s.pts[0]:s.pts[o]+(s.pts[o+1]-s.pts[o])*c,f=s.keys.slice(0,-1).reduce((h,d)=>h[d]??(h[d]={}),e.e);f[s.keys[s.keys.length-1]]=l}return t<1})}worldPosition(e){const t={...e.feetPosition};let n=e.parent?this.entities.get(e.parent):null;for(;n;)t.x+=n.feetPosition.x,t.y+=n.feetPosition.y,t.z+=n.feetPosition.z,n=n.parent?this.entities.get(n.parent):null;return t}advance(e){let t=Math.max(0,e)*1e3,n=Math.min(Math.max(0,e),kb);for(;n>1e-6;){const s=Math.min(n,Nb);n-=s,t-=s*1e3,this.clock+=s*1e3;const r=this.clock<this.freezeUntil,a=r?0:this.clock<this.slowUntil?this.slowScale:1;this.tick(s*a)}t>0&&(this.clock+=t)}tick(e){this.elapsed+=e*1e3;const t=[...this.entities.values()];for(const n of t){const s=this.inputs.get(n.id);if(s){const r=s();Object.keys(r.pressed).length&&this.inputSeq++;for(const a of n.mods)this.call(n,a,"onInput",r)}}for(const n of t)if(this.entities.has(n.id))for(const s of n.mods)this.call(n,s,"update",e);for(const n of[...this.entities.values()])(n.body==="character"||n.body==="dynamic")&&(n.feetPosition={x:n.feetPosition.x+n.velocity.x*e,y:n.feetPosition.y+n.velocity.y*e,z:n.feetPosition.z},n.grounded=!1,n.feetPosition.y<=this.groundY&&(n.feetPosition.y=this.groundY,n.velocity.y<0&&(n.velocity={...n.velocity,y:0}),n.grounded=!0)),n.lifetime!=null&&this.nowMs-n.bornAt>=n.lifetime*1e3&&this.destroy(n.id);this.stepTweens();for(const[n,s]of[...this.timers]){if(s.due>this.clock)continue;this.timers.delete(n);const r=s.owner?this.entities.get(s.owner):null;s.owner&&!r||this.call(r,s.mod,s.name,s.payload)}}}const Bb=.1,fd=-.6,hd=et.map_fragment.replace("texture2D( map, vMapUv )",`texture2D( map, vMapUv, ${fd.toFixed(2)} )`);hd.includes(fd.toFixed(2))||console.warn("[justa] three's map chunk changed: the mip bias is off");const zb={alpha:wn,add:xr,multiply:Ba,subtract:Fa};class Hb{constructor(e,t,{hideBelow:n=null}={}){this.stage=e,this.room=t,this.hideBelow=n,this.views=new Map,this.sources=new Map,this.order=new Map,this.seq=0,this.loader=new td}source(e,t){const n=e+"|"+(t??"");return this.sources.has(n)||this.sources.set(n,(async()=>{const s=oo(e);let r,a={};if(s)r=await this.loader.loadAsync(s);else{const c=await nc(e);r=new Ql(c.canvas),a=c.meta}r.colorSpace=jt;const o=(t??a.filter??(s?"linear":"pixel"))==="linear";return r.magFilter=o?ln:Wt,r.minFilter=o?Hn:Wt,r.generateMipmaps=o,{tex:r,meta:a}})().catch(s=>(console.warn("[justa] picture",e,(s==null?void 0:s.message)??s),null))),this.sources.get(n)}view(e){let t=this.views.get(e.id);if(!t){const n=new un,s=new Sr({transparent:!0,depthTest:!1,depthWrite:!1,visible:!1});s.onBeforeCompile=a=>{a.fragmentShader=a.fragmentShader.replace("#include <map_fragment>",hd)},s.customProgramCacheKey=()=>"sprite-bias";const r=new sn(new fi(1,1),s);r.frustumCulled=!1,n.add(r),this.stage.scene.add(n),t={pivot:n,mesh:r,ref:null,pending:null,seq:++this.seq},this.views.set(e.id,t)}return t}setTexture(e,t){const n=t.texture,s=n+"|"+(t.filter??"");e.ref!==s&&(e.ref=s,e.pending=s,this.source(n,t.filter).then(r=>{var o;if(e.pending!==s||!r)return;const a=r.tex.clone();a.wrapS=a.wrapT=ni,a.needsUpdate=!0,(o=e.mesh.material.map)==null||o.dispose(),e.mesh.material.map=a,e.mesh.material.needsUpdate=!0,e.meta=r.meta,this.stage.renderer.initTexture(a)}))}sync(){var t,n,s,r,a,o;const e=new Set;for(const c of this.room.entities.values()){const l=c.sprite;if(!l||!l.texture||Math.max(((t=l.size)==null?void 0:t[0])??1,((n=l.size)==null?void 0:n[1])??1)<Bb)continue;e.add(c.id);const f=this.view(c);this.setTexture(f,l);const h=f.mesh.material.map,d=((s=l.size)==null?void 0:s[0])??1,p=((r=l.size)==null?void 0:r[1])??1,[x,y]=l.anchor??od,_=this.room.worldPosition(c);f.pivot.position.set(_.x,_.y,0),f.pivot.rotation.z=(((a=c.rotation)==null?void 0:a.roll)??0)*Math.PI/180,f.mesh.position.set((.5-x)*d,(.5-y)*p,0),f.mesh.scale.set(d,p,1);const g=l.uvRect??{x:0,y:0,width:1,height:1};if(h){const A=!!l.flipX,b=!!l.flipY;h.repeat.set(A?-g.width:g.width,b?-g.height:g.height),h.offset.set(A?g.x+g.width:g.x,b?g.y+g.height:g.y)}const R=f.mesh.material;R.visible=!!h&&c.visible!==!1&&(l.opacity??1)>0&&!(this.hideBelow!=null&&(l.sortingLayer??0)<this.hideBelow),R.opacity=l.opacity??1,R.blending=zb[l.blend]??wn,l.tint!=null?R.color.set(Array.isArray(l.tint)?new dt(l.tint[0],l.tint[1],l.tint[2]):new dt(l.tint)):R.color.set(16777215),f.mesh.renderOrder=tc(l,f.seq%1e3)+(_.z??0)*10}for(const[c,l]of this.views)e.has(c)||(this.stage.scene.remove(l.pivot),(o=l.mesh.material.map)==null||o.dispose(),l.mesh.material.dispose(),l.mesh.geometry.dispose(),this.views.delete(c))}}const wf={space:["Space"],enter:["Enter","NumpadEnter"],shift:["ShiftLeft","ShiftRight"],escape:["Escape"],tab:["Tab"]};function tl(i){const e=String(i);return wf[e.toLowerCase()]?wf[e.toLowerCase()]:/^[a-z]$/i.test(e)?["Key"+e.toUpperCase()]:/^[0-9]$/.test(e)?["Digit"+e]:[e]}class Gb{constructor(e={}){this.actions=e.actions??{},this.axesDef=e.axes??{},this.held=new Set,this.pressed=new Set,this.released=new Set,this.data={},this.at={},this.keys=new Set,this.byCode=new Map;for(const[t,n]of Object.entries(this.actions))for(const s of[].concat((n==null?void 0:n.keys)??[]))for(const r of tl(s))this.byCode.set(r,t)}action(e,t,{down:n=null,at:s=null}={}){if(n===!1){this.held.delete(e),this.released.add(e);return}this.pressed.has(e)||(this.at[e]=s??performance.now()),this.pressed.add(e),t!==void 0&&(this.data[e]=t),n===!0&&this.held.add(e)}axes(){const e={};for(const[t,n]of Object.entries(this.axesDef)){const s=String((n==null?void 0:n.keys)??"").split("/");let r=0;for(let a=0;a+1<s.length;a+=2)tl(s[a]).some(o=>this.keys.has(o))&&(r-=1),tl(s[a+1]).some(o=>this.keys.has(o))&&(r+=1);e[t]=Math.max(-1,Math.min(1,r))}return e}frame(){const e={pressed:Object.fromEntries([...this.pressed].map(t=>[t,!0])),released:Object.fromEntries([...this.released].map(t=>[t,!0])),held:Object.fromEntries([...this.held].map(t=>[t,!0])),actionData:this.data,axes:this.axes(),pressedAt:this.at};return this.pressed.clear(),this.released.clear(),this.data={},this.at={},e}bind(e){const t=s=>{var r;return/^(INPUT|TEXTAREA|SELECT)$/.test(((r=s.target)==null?void 0:r.tagName)??"")};addEventListener("keydown",s=>{if(t(s))return;this.keys.add(s.code);const r=this.byCode.get(s.code)??this.byCode.get(s.key);r&&!s.repeat&&(this.action(r,void 0,{down:!0,at:s.timeStamp}),s.preventDefault())}),addEventListener("keyup",s=>{this.keys.delete(s.code);const r=this.byCode.get(s.code)??this.byCode.get(s.key);r&&this.action(r,void 0,{down:!1})});const n=Object.entries(this.actions).filter(([,s])=>(s==null?void 0:s.mouse)==="left").map(([s])=>s);e.addEventListener("pointerdown",s=>{if(s.button===0)for(const r of n)this.action(r,void 0,{down:!0,at:s.timeStamp})}),e.addEventListener("pointerup",()=>{for(const s of n)this.action(s,void 0,{down:!1})}),addEventListener("blur",()=>{this.keys.clear(),this.held.clear()})}}const Vb=30,Wb=`<style id="hud-util">
:root{--spawn-chrome-reservation-right-inset:0px;--spawn-chrome-reservation-right-top:0px;--spawn-chrome-reservation-right-height:0px}
#tome-ui-container .fixed{position:fixed}#tome-ui-container .absolute{position:absolute}#tome-ui-container .inset-0{inset:0}
#tome-ui-container .pointer-events-none{pointer-events:none}#tome-ui-container .pointer-events-auto{pointer-events:auto}
</style>`;class qb{constructor({ui:e,room:t,player:n,input:s,toScreen:r,root:a=document.body}){var c;this.ui=e,this.room=t,this.player=n,this.input=s,this.toScreen=r,a.insertAdjacentHTML("beforeend",Wb),this.container=document.createElement("div"),this.container.id="tome-ui-container",this.container.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:20",this.mount=document.createElement("div"),this.mount.id="tome-game-mount",this.mount.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:21",a.append(this.container,this.mount),this.last=0,this.failed=!1,this.born=new WeakMap,this.paintedAt=t.nowMs;for(const[l,f]of Object.entries(e))l!=="default"&&l!=="onMount"&&l!=="onDestroy"&&typeof f=="function"&&(window[l]=f);window.sendAction=(l,f,h={})=>{s.action(l,f,{at:performance.now(),...h}),h.down==null&&setTimeout(()=>s.action(l,void 0,{down:!1}),0)},window.sendAxis=(l,f)=>{s.sentAxes={...s.sentAxes??{},[l]:f}},window.openLink=l=>window.open(l,"_blank","noopener");const o=this.handle();try{(c=e.onMount)==null||c.call(e,this.mount,o)}catch(l){console.error("[hud] onMount",l)}}alignAnimations(){var t;const e=this.room.nowMs;for(const n of document.getAnimations()){const s=(t=n.effect)==null?void 0:t.target;if(!s||!this.container.contains(s)||!(n instanceof CSSAnimation))continue;let r=this.born.get(n);r==null&&(r=this.paintedAt,this.born.set(n,r)),n.playState!=="paused"&&n.pause(),n.currentTime=e-r}}handle(){const e=this.player;return{get state(){return e.state},get id(){return e.id},get displayName(){return e.displayName},get userId(){return e.userId}}}frame(e){if(e-this.last>=1e3/Vb||this.room.inputSeq!==this.seenSeq){this.last=e,this.seenSeq=this.room.inputSeq,this.paintedAt=this.room.nowMs;const t={now:()=>this.room.nowMs,self:this.handle(),session:this.room.session,world:{engine:{ui:{referenceHeight:1080}}}};let n;try{n=this.ui.default(t,this.handle()),this.failed=!1}catch(s){this.failed||console.error("[hud] render",s),this.failed=!0,n=""}np(this.container,`<div id="tome-ui-container">${Ab(n)}</div>`,{childrenOnly:!0,onBeforeElUpdated:(s,r)=>s===document.activeElement&&/^(INPUT|SELECT|TEXTAREA)$/.test(s.tagName)?!1:(s.tagName==="INPUT"&&(s.type==="radio"||s.type==="checkbox")&&(s.checked=r.hasAttribute("checked")),!0)})}this.alignAnimations();for(const t of this.container.querySelectorAll("[data-world-anchor]")){const n=this.room.entities.get(t.getAttribute("data-world-anchor"));if(!n)continue;const[s,r,a]=(t.getAttribute("data-anchor-offset")??"0 0 0").split(/\s+/).map(Number),o=this.room.worldPosition(n),c=this.toScreen({x:o.x+(s||0),y:o.y+(r||0),z:o.z+(a||0)});c&&(t.style.left=c.x.toFixed(1)+"px",t.style.top=c.y.toFixed(1)+"px")}}}class jb{constructor(e={}){this.map=e,this.buffers=new Map,this.loops=[];try{this.ctx=new AudioContext}catch(s){console.warn("[audio] no AudioContext",(s==null?void 0:s.message)??s),this.ctx=null;return}if(this.master=this.ctx.createGain(),this.master.connect(this.ctx.destination),new URLSearchParams(location.search).has("mute")&&(this.master.gain.value=0),this.music=this.ctx.createGain(),this.music.connect(this.master),this.ctx.state!=="running"){const s=()=>{this.ctx.resume().then(()=>{if(this.ctx.state==="running")for(const r of["pointerdown","keydown","touchend"])removeEventListener(r,s,!0)},()=>{})};for(const r of["pointerdown","keydown","touchend"])addEventListener(r,s,!0);this.ctx.resume().catch(()=>{})}const t=()=>{this.ctx.suspend().catch(()=>{})},n=()=>{document.visibilityState==="visible"&&this.ctx.resume().catch(()=>{})};addEventListener("pagehide",t),addEventListener("freeze",t),addEventListener("pageshow",s=>{s.persisted&&n()}),addEventListener("resume",n),document.addEventListener("visibilitychange",()=>document.visibilityState==="hidden"?t():n())}get running(){var e;return((e=this.ctx)==null?void 0:e.state)==="running"}fileOf(e){return e in this.map?this.map[e]:e}async buffer(e){const t=this.fileOf(e);if(!t||!this.ctx)return null;if(!this.buffers.has(t)){const n=oo(t)??t;this.buffers.set(t,fetch(n).then(s=>{if(!s.ok)throw new Error(s.status);return s.arrayBuffer()}).then(s=>this.ctx.decodeAudioData(s)).catch(s=>(console.warn("[audio]",t,(s==null?void 0:s.message)??s),null)))}return this.buffers.get(t)}async play({clip:e,volume:t=.8,pitch:n=1}={}){if(!this.running||!e)return;const s=await this.buffer(e);if(!s)return;const r=this.ctx.createBufferSource(),a=this.ctx.createGain();r.buffer=s,r.playbackRate.value=n,a.gain.value=t,r.connect(a),a.connect(this.master),r.start()}async loop(e){const t=await this.buffer(e.clip);if(!t)return;const n=this.ctx.createBufferSource(),s=this.ctx.createGain();n.buffer=t,n.loop=e.loop!==!1,s.gain.value=e.gain??1,n.connect(s),s.connect(e.bus==="Music"?this.music:this.master),n.start(),this.loops.push(n)}}var dd={exports:{}};(function(i,e){var t=void 0,n=function(s){return t||(t=new Promise(function(r,a){var o=typeof s<"u"?s:{},c=o.onAbort;o.onAbort=function(u){a(new Error(u)),c&&c(u)},o.postRun=o.postRun||[],o.postRun.push(function(){r(o)}),i=void 0;var l;l||(l=typeof o<"u"?o:{});var f=typeof window=="object",h=typeof importScripts=="function",d=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string";l.onRuntimeInitialized=function(){function u(G,oe){switch(typeof oe){case"boolean":ep(G,oe?1:0);break;case"number":Jd(G,oe);break;case"string":Zd(G,oe,-1,-1);break;case"object":if(oe===null)Yc(G);else if(oe.length!=null){var Ne=Ur(oe,kr);Qd(G,Ne,oe.length,-1),Br(Ne)}else Hr(G,"Wrong API use : tried to return a value of an unknown type ("+oe+").",-1);break;default:Yc(G)}}function m(G,oe){for(var Ne=[],Xe=0;Xe<G;Xe+=1){var st=O(oe+4*Xe,"i32"),wt=jd(st);if(wt===1||wt===2)st=Yd(st);else if(wt===3)st=$d(st);else if(wt===4){wt=st,st=Xd(wt),wt=Kd(wt);for(var Tn=new Uint8Array(st),vn=0;vn<st;vn+=1)Tn[vn]=S[wt+vn];st=Tn}else st=null;Ne.push(st)}return Ne}function v(G,oe){this.Ka=G,this.db=oe,this.Ia=1,this.eb=[]}function T(G,oe){if(this.db=oe,oe=Oe(G)+1,this.Xa=fo(oe),this.Xa===null)throw Error("Unable to allocate memory for the SQL string");he(G,w,this.Xa,oe),this.cb=this.Xa,this.Ta=this.hb=null}function k(G){if(this.filename="dbfile_"+(4294967295*Math.random()>>>0),G!=null){var oe=this.filename,Ne="/",Xe=oe;if(Ne&&(Ne=typeof Ne=="string"?Ne:$t(Ne),Xe=oe?De(Ne+"/"+oe):Ne),oe=Je(!0,!0),Xe=ns(Xe,(oe!==void 0?oe:438)&4095|32768,0),G){if(typeof G=="string"){Ne=Array(G.length);for(var st=0,wt=G.length;st<wt;++st)Ne[st]=G.charCodeAt(st);G=Ne}ge(Xe,oe|146),Ne=we(Xe,577),lt(Ne,G,0,G.length,0),He(Ne),ge(Xe,oe)}}this.handleError(qe(this.filename,K)),this.db=O(K,"i32"),Zc(this.db),this.Ya={},this.Ma={}}var K=di(4),ie=l.cwrap,qe=ie("sqlite3_open","number",["string","number"]),mt=ie("sqlite3_close_v2","number",["number"]),tt=ie("sqlite3_exec","number",["number","string","number","number","number"]),It=ie("sqlite3_changes","number",["number"]),Gt=ie("sqlite3_prepare_v2","number",["number","string","number","number","number"]),qc=ie("sqlite3_sql","string",["number"]),Cd=ie("sqlite3_normalized_sql","string",["number"]),jc=ie("sqlite3_prepare_v2","number",["number","number","number","number","number"]),Pd=ie("sqlite3_bind_text","number",["number","number","number","number","number"]),Xc=ie("sqlite3_bind_blob","number",["number","number","number","number","number"]),Ld=ie("sqlite3_bind_double","number",["number","number","number"]),Id=ie("sqlite3_bind_int","number",["number","number","number"]),Dd=ie("sqlite3_bind_parameter_index","number",["number","string"]),Od=ie("sqlite3_step","number",["number"]),Nd=ie("sqlite3_errmsg","string",["number"]),kd=ie("sqlite3_column_count","number",["number"]),Ud=ie("sqlite3_data_count","number",["number"]),Fd=ie("sqlite3_column_double","number",["number","number"]),$c=ie("sqlite3_column_text","string",["number","number"]),Bd=ie("sqlite3_column_blob","number",["number","number"]),zd=ie("sqlite3_column_bytes","number",["number","number"]),Hd=ie("sqlite3_column_type","number",["number","number"]),Gd=ie("sqlite3_column_name","string",["number","number"]),Vd=ie("sqlite3_reset","number",["number"]),Wd=ie("sqlite3_clear_bindings","number",["number"]),qd=ie("sqlite3_finalize","number",["number"]),Kc=ie("sqlite3_create_function_v2","number","number string number number number number number number number".split(" ")),jd=ie("sqlite3_value_type","number",["number"]),Xd=ie("sqlite3_value_bytes","number",["number"]),$d=ie("sqlite3_value_text","string",["number"]),Kd=ie("sqlite3_value_blob","number",["number"]),Yd=ie("sqlite3_value_double","number",["number"]),Jd=ie("sqlite3_result_double","",["number","number"]),Yc=ie("sqlite3_result_null","",["number"]),Zd=ie("sqlite3_result_text","",["number","string","number","number"]),Qd=ie("sqlite3_result_blob","",["number","number","number","number"]),ep=ie("sqlite3_result_int","",["number","number"]),Hr=ie("sqlite3_result_error","",["number","string","number"]),Jc=ie("sqlite3_aggregate_context","number",["number","number"]),Zc=ie("RegisterExtensionFunctions","number",["number"]);v.prototype.bind=function(G){if(!this.Ka)throw"Statement closed";return this.reset(),Array.isArray(G)?this.vb(G):G!=null&&typeof G=="object"?this.wb(G):!0},v.prototype.step=function(){if(!this.Ka)throw"Statement closed";this.Ia=1;var G=Od(this.Ka);switch(G){case 100:return!0;case 101:return!1;default:throw this.db.handleError(G)}},v.prototype.qb=function(G){return G==null&&(G=this.Ia,this.Ia+=1),Fd(this.Ka,G)},v.prototype.zb=function(G){if(G==null&&(G=this.Ia,this.Ia+=1),G=$c(this.Ka,G),typeof BigInt!="function")throw Error("BigInt is not supported");return BigInt(G)},v.prototype.Ab=function(G){return G==null&&(G=this.Ia,this.Ia+=1),$c(this.Ka,G)},v.prototype.getBlob=function(G){G==null&&(G=this.Ia,this.Ia+=1);var oe=zd(this.Ka,G);G=Bd(this.Ka,G);for(var Ne=new Uint8Array(oe),Xe=0;Xe<oe;Xe+=1)Ne[Xe]=S[G+Xe];return Ne},v.prototype.get=function(G,oe){oe=oe||{},G!=null&&this.bind(G)&&this.step(),G=[];for(var Ne=Ud(this.Ka),Xe=0;Xe<Ne;Xe+=1)switch(Hd(this.Ka,Xe)){case 1:var st=oe.useBigInt?this.zb(Xe):this.qb(Xe);G.push(st);break;case 2:G.push(this.qb(Xe));break;case 3:G.push(this.Ab(Xe));break;case 4:G.push(this.getBlob(Xe));break;default:G.push(null)}return G},v.prototype.getColumnNames=function(){for(var G=[],oe=kd(this.Ka),Ne=0;Ne<oe;Ne+=1)G.push(Gd(this.Ka,Ne));return G},v.prototype.getAsObject=function(G,oe){G=this.get(G,oe),oe=this.getColumnNames();for(var Ne={},Xe=0;Xe<oe.length;Xe+=1)Ne[oe[Xe]]=G[Xe];return Ne},v.prototype.getSQL=function(){return qc(this.Ka)},v.prototype.getNormalizedSQL=function(){return Cd(this.Ka)},v.prototype.run=function(G){return G!=null&&this.bind(G),this.step(),this.reset()},v.prototype.mb=function(G,oe){oe==null&&(oe=this.Ia,this.Ia+=1),G=Te(G);var Ne=Ur(G,kr);this.eb.push(Ne),this.db.handleError(Pd(this.Ka,oe,Ne,G.length-1,0))},v.prototype.ub=function(G,oe){oe==null&&(oe=this.Ia,this.Ia+=1);var Ne=Ur(G,kr);this.eb.push(Ne),this.db.handleError(Xc(this.Ka,oe,Ne,G.length,0))},v.prototype.lb=function(G,oe){oe==null&&(oe=this.Ia,this.Ia+=1),this.db.handleError((G===(G|0)?Id:Ld)(this.Ka,oe,G))},v.prototype.xb=function(G){G==null&&(G=this.Ia,this.Ia+=1),Xc(this.Ka,G,0,0,0)},v.prototype.nb=function(G,oe){switch(oe==null&&(oe=this.Ia,this.Ia+=1),typeof G){case"string":this.mb(G,oe);return;case"number":this.lb(G,oe);return;case"bigint":this.mb(G.toString(),oe);return;case"boolean":this.lb(G+0,oe);return;case"object":if(G===null){this.xb(oe);return}if(G.length!=null){this.ub(G,oe);return}}throw"Wrong API use : tried to bind a value of an unknown type ("+G+")."},v.prototype.wb=function(G){var oe=this;return Object.keys(G).forEach(function(Ne){var Xe=Dd(oe.Ka,Ne);Xe!==0&&oe.nb(G[Ne],Xe)}),!0},v.prototype.vb=function(G){for(var oe=0;oe<G.length;oe+=1)this.nb(G[oe],oe+1);return!0},v.prototype.reset=function(){return this.freemem(),Wd(this.Ka)===0&&Vd(this.Ka)===0},v.prototype.freemem=function(){for(var G;(G=this.eb.pop())!==void 0;)Br(G)},v.prototype.free=function(){this.freemem();var G=qd(this.Ka)===0;return delete this.db.Ya[this.Ka],this.Ka=0,G},T.prototype.next=function(){if(this.Xa===null)return{done:!0};if(this.Ta!==null&&(this.Ta.free(),this.Ta=null),!this.db.db)throw this.fb(),Error("Database closed");var G=rr(),oe=di(4);Rt(K),Rt(oe);try{this.db.handleError(jc(this.db.db,this.cb,-1,K,oe)),this.cb=O(oe,"i32");var Ne=O(K,"i32");return Ne===0?(this.fb(),{done:!0}):(this.Ta=new v(Ne,this.db),this.db.Ya[Ne]=this.Ta,{value:this.Ta,done:!1})}catch(Xe){throw this.hb=Pe(this.cb),this.fb(),Xe}finally{sr(G)}},T.prototype.fb=function(){Br(this.Xa),this.Xa=null},T.prototype.getRemainingSQL=function(){return this.hb!==null?this.hb:Pe(this.cb)},typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"&&(T.prototype[Symbol.iterator]=function(){return this}),k.prototype.run=function(G,oe){if(!this.db)throw"Database closed";if(oe){G=this.prepare(G,oe);try{G.step()}finally{G.free()}}else this.handleError(tt(this.db,G,0,0,K));return this},k.prototype.exec=function(G,oe,Ne){if(!this.db)throw"Database closed";var Xe=rr(),st=null;try{var wt=Ci(G),Tn=di(4);for(G=[];O(wt,"i8")!==0;){Rt(K),Rt(Tn),this.handleError(jc(this.db,wt,-1,K,Tn));var vn=O(K,"i32");if(wt=O(Tn,"i32"),vn!==0){var hn=null;for(st=new v(vn,this),oe!=null&&st.bind(oe);st.step();)hn===null&&(hn={columns:st.getColumnNames(),values:[]},G.push(hn)),hn.values.push(st.get(null,Ne));st.free()}}return G}catch(An){throw st&&st.free(),An}finally{sr(Xe)}},k.prototype.each=function(G,oe,Ne,Xe,st){typeof oe=="function"&&(Xe=Ne,Ne=oe,oe=void 0),G=this.prepare(G,oe);try{for(;G.step();)Ne(G.getAsObject(null,st))}finally{G.free()}if(typeof Xe=="function")return Xe()},k.prototype.prepare=function(G,oe){if(Rt(K),this.handleError(Gt(this.db,G,-1,K,0)),G=O(K,"i32"),G===0)throw"Nothing to prepare";var Ne=new v(G,this);return oe!=null&&Ne.bind(oe),this.Ya[G]=Ne},k.prototype.iterateStatements=function(G){return new T(G,this)},k.prototype.export=function(){Object.values(this.Ya).forEach(function(oe){oe.free()}),Object.values(this.Ma).forEach(ss),this.Ma={},this.handleError(mt(this.db));var G=ft(this.filename);return this.handleError(qe(this.filename,K)),this.db=O(K,"i32"),Zc(this.db),G},k.prototype.close=function(){this.db!==null&&(Object.values(this.Ya).forEach(function(G){G.free()}),Object.values(this.Ma).forEach(ss),this.Ma={},this.handleError(mt(this.db)),q("/"+this.filename),this.db=null)},k.prototype.handleError=function(G){if(G===0)return null;throw G=Nd(this.db),Error(G)},k.prototype.getRowsModified=function(){return It(this.db)},k.prototype.create_function=function(G,oe){Object.prototype.hasOwnProperty.call(this.Ma,G)&&(ss(this.Ma[G]),delete this.Ma[G]);var Ne=Fr(function(Xe,st,wt){st=m(st,wt);try{var Tn=oe.apply(null,st)}catch(vn){Hr(Xe,vn,-1);return}u(Xe,Tn)},"viii");return this.Ma[G]=Ne,this.handleError(Kc(this.db,G,oe.length,1,0,Ne,0,0,0)),this},k.prototype.create_aggregate=function(G,oe){var Ne=oe.init||function(){return null},Xe=oe.finalize||function(hn){return hn},st=oe.step;if(!st)throw"An aggregate function must have a step function in "+G;var wt={};Object.hasOwnProperty.call(this.Ma,G)&&(ss(this.Ma[G]),delete this.Ma[G]),oe=G+"__finalize",Object.hasOwnProperty.call(this.Ma,oe)&&(ss(this.Ma[oe]),delete this.Ma[oe]);var Tn=Fr(function(hn,An,ho){var Li=Jc(hn,1);Object.hasOwnProperty.call(wt,Li)||(wt[Li]=Ne()),An=m(An,ho),An=[wt[Li]].concat(An);try{wt[Li]=st.apply(null,An)}catch(tp){delete wt[Li],Hr(hn,tp,-1)}},"viii"),vn=Fr(function(hn){var An=Jc(hn,1);try{var ho=Xe(wt[An])}catch(Li){delete wt[An],Hr(hn,Li,-1);return}u(hn,ho),delete wt[An]},"vi");return this.Ma[G]=Tn,this.Ma[oe]=vn,this.handleError(Kc(this.db,G,st.length-1,1,0,0,Tn,vn,0)),this},l.Database=k};var p=Object.assign({},l),x="./this.program",y="",_,g;if(d){var R=Pa,A=Pa;y=__dirname+"/",g=u=>(u=fe(u)?new URL(u):A.normalize(u),R.readFileSync(u)),_=u=>(u=fe(u)?new URL(u):A.normalize(u),new Promise((m,v)=>{R.readFile(u,void 0,(T,k)=>{T?v(T):m(k.buffer)})})),!l.thisProgram&&1<process.argv.length&&(x=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),i.exports=l}else(f||h)&&(h?y=self.location.href:typeof document<"u"&&document.currentScript&&(y=document.currentScript.src),y=y.startsWith("blob:")?"":y.substr(0,y.replace(/[?#].*/,"").lastIndexOf("/")+1),h&&(g=u=>{var m=new XMLHttpRequest;return m.open("GET",u,!1),m.responseType="arraybuffer",m.send(null),new Uint8Array(m.response)}),_=u=>fe(u)?new Promise((m,v)=>{var T=new XMLHttpRequest;T.open("GET",u,!0),T.responseType="arraybuffer",T.onload=()=>{(T.status==200||T.status==0&&T.response)&&v(T.response),m(T.status)},T.onerror=m,T.send(null)}):fetch(u,{credentials:"same-origin"}).then(m=>m.ok?m.arrayBuffer():Promise.reject(Error(m.status+" : "+m.url))));var b=l.print||console.log.bind(console),L=l.printErr||console.error.bind(console);Object.assign(l,p),p=null,l.thisProgram&&(x=l.thisProgram);var I;l.wasmBinary&&(I=l.wasmBinary);var C,D=!1,S,w,N,F,B,$,re;function Q(){var u=C.buffer;l.HEAP8=S=new Int8Array(u),l.HEAP16=N=new Int16Array(u),l.HEAPU8=w=new Uint8Array(u),l.HEAPU16=new Uint16Array(u),l.HEAP32=F=new Int32Array(u),l.HEAPU32=B=new Uint32Array(u),l.HEAPF32=$=new Float32Array(u),l.HEAPF64=re=new Float64Array(u)}var ce=[],Y=[],de=[];function Me(){var u=l.preRun.shift();ce.unshift(u)}var Ee=0,We=null;function nt(u){var m;throw(m=l.onAbort)==null||m.call(l,u),u="Aborted("+u+")",L(u),D=!0,new WebAssembly.RuntimeError(u+". Build with -sASSERTIONS for more info.")}var ee=u=>u.startsWith("data:application/octet-stream;base64,"),fe=u=>u.startsWith("file://"),Ae;function me(u){if(u==Ae&&I)return new Uint8Array(I);if(g)return g(u);throw"both async and sync fetching of the wasm failed"}function Ue(u){return I?Promise.resolve().then(()=>me(u)):_(u).then(m=>new Uint8Array(m),()=>me(u))}function ze(u,m,v){return Ue(u).then(T=>WebAssembly.instantiate(T,m)).then(v,T=>{L(`failed to asynchronously prepare wasm: ${T}`),nt(T)})}function Ze(u,m){var v=Ae;I||typeof WebAssembly.instantiateStreaming!="function"||ee(v)||fe(v)||d||typeof fetch!="function"?ze(v,u,m):fetch(v,{credentials:"same-origin"}).then(T=>WebAssembly.instantiateStreaming(T,u).then(m,function(k){return L(`wasm streaming compile failed: ${k}`),L("falling back to ArrayBuffer instantiation"),ze(v,u,m)}))}var J,ve,at=u=>{for(;0<u.length;)u.shift()(l)};function O(u,m="i8"){switch(m.endsWith("*")&&(m="*"),m){case"i1":return S[u];case"i8":return S[u];case"i16":return N[u>>1];case"i32":return F[u>>2];case"i64":nt("to do getValue(i64) use WASM_BIGINT");case"float":return $[u>>2];case"double":return re[u>>3];case"*":return B[u>>2];default:nt(`invalid type for getValue: ${m}`)}}function Rt(u){var m="i32";switch(m.endsWith("*")&&(m="*"),m){case"i1":S[u]=0;break;case"i8":S[u]=0;break;case"i16":N[u>>1]=0;break;case"i32":F[u>>2]=0;break;case"i64":nt("to do setValue(i64) use WASM_BIGINT");case"float":$[u>>2]=0;break;case"double":re[u>>3]=0;break;case"*":B[u>>2]=0;break;default:nt(`invalid type for setValue: ${m}`)}}var Ye=typeof TextDecoder<"u"?new TextDecoder:void 0,Re=(u,m,v)=>{var T=m+v;for(v=m;u[v]&&!(v>=T);)++v;if(16<v-m&&u.buffer&&Ye)return Ye.decode(u.subarray(m,v));for(T="";m<v;){var k=u[m++];if(k&128){var K=u[m++]&63;if((k&224)==192)T+=String.fromCharCode((k&31)<<6|K);else{var ie=u[m++]&63;k=(k&240)==224?(k&15)<<12|K<<6|ie:(k&7)<<18|K<<12|ie<<6|u[m++]&63,65536>k?T+=String.fromCharCode(k):(k-=65536,T+=String.fromCharCode(55296|k>>10,56320|k&1023))}}else T+=String.fromCharCode(k)}return T},Pe=(u,m)=>u?Re(w,u,m):"",gt=(u,m)=>{for(var v=0,T=u.length-1;0<=T;T--){var k=u[T];k==="."?u.splice(T,1):k===".."?(u.splice(T,1),v++):v&&(u.splice(T,1),v--)}if(m)for(;v;v--)u.unshift("..");return u},De=u=>{var m=u.charAt(0)==="/",v=u.substr(-1)==="/";return(u=gt(u.split("/").filter(T=>!!T),!m).join("/"))||m||(u="."),u&&v&&(u+="/"),(m?"/":"")+u},P=u=>{var m=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(u).slice(1);return u=m[0],m=m[1],!u&&!m?".":(m&&(m=m.substr(0,m.length-1)),u+m)},M=u=>{if(u==="/")return"/";u=De(u),u=u.replace(/\/$/,"");var m=u.lastIndexOf("/");return m===-1?u:u.substr(m+1)},V=()=>{if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function")return v=>crypto.getRandomValues(v);if(d)try{var u=Pa;if(u.randomFillSync)return v=>u.randomFillSync(v);var m=u.randomBytes;return v=>(v.set(m(v.byteLength)),v)}catch{}nt("initRandomDevice")},se=u=>(se=V())(u),ae=(...u)=>{for(var m="",v=!1,T=u.length-1;-1<=T&&!v;T--){if(v=0<=T?u[T]:"/",typeof v!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!v)return"";m=v+"/"+m,v=v.charAt(0)==="/"}return m=gt(m.split("/").filter(k=>!!k),!v).join("/"),(v?"/":"")+m||"."},te=[],Oe=u=>{for(var m=0,v=0;v<u.length;++v){var T=u.charCodeAt(v);127>=T?m++:2047>=T?m+=2:55296<=T&&57343>=T?(m+=4,++v):m+=3}return m},he=(u,m,v,T)=>{if(!(0<T))return 0;var k=v;T=v+T-1;for(var K=0;K<u.length;++K){var ie=u.charCodeAt(K);if(55296<=ie&&57343>=ie){var qe=u.charCodeAt(++K);ie=65536+((ie&1023)<<10)|qe&1023}if(127>=ie){if(v>=T)break;m[v++]=ie}else{if(2047>=ie){if(v+1>=T)break;m[v++]=192|ie>>6}else{if(65535>=ie){if(v+2>=T)break;m[v++]=224|ie>>12}else{if(v+3>=T)break;m[v++]=240|ie>>18,m[v++]=128|ie>>12&63}m[v++]=128|ie>>6&63}m[v++]=128|ie&63}}return m[v]=0,v-k};function Te(u,m){var v=Array(Oe(u)+1);return u=he(u,v,0,v.length),m&&(v.length=u),v}var ot=[];function ue(u,m){ot[u]={input:[],output:[],Wa:m},ir(u,Le)}var Le={open(u){var m=ot[u.node.rdev];if(!m)throw new W(43);u.tty=m,u.seekable=!1},close(u){u.tty.Wa.fsync(u.tty)},fsync(u){u.tty.Wa.fsync(u.tty)},read(u,m,v,T){if(!u.tty||!u.tty.Wa.rb)throw new W(60);for(var k=0,K=0;K<T;K++){try{var ie=u.tty.Wa.rb(u.tty)}catch{throw new W(29)}if(ie===void 0&&k===0)throw new W(6);if(ie==null)break;k++,m[v+K]=ie}return k&&(u.node.timestamp=Date.now()),k},write(u,m,v,T){if(!u.tty||!u.tty.Wa.ib)throw new W(60);try{for(var k=0;k<T;k++)u.tty.Wa.ib(u.tty,m[v+k])}catch{throw new W(29)}return T&&(u.node.timestamp=Date.now()),k}},Be={rb(){e:{if(!te.length){var u=null;if(d){var m=Buffer.alloc(256),v=0,T=process.stdin.fd;try{v=R.readSync(T,m,0,256)}catch(k){if(k.toString().includes("EOF"))v=0;else throw k}0<v&&(u=m.slice(0,v).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(u=window.prompt("Input: "),u!==null&&(u+=`
`));if(!u){u=null;break e}te=Te(u,!0)}u=te.shift()}return u},ib(u,m){m===null||m===10?(b(Re(u.output,0)),u.output=[]):m!=0&&u.output.push(m)},fsync(u){u.output&&0<u.output.length&&(b(Re(u.output,0)),u.output=[])},Lb(){return{Gb:25856,Ib:5,Fb:191,Hb:35387,Eb:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},Mb(){return 0},Nb(){return[24,80]}},Ge={ib(u,m){m===null||m===10?(L(Re(u.output,0)),u.output=[]):m!=0&&u.output.push(m)},fsync(u){u.output&&0<u.output.length&&(L(Re(u.output,0)),u.output=[])}};function Ce(u,m){var v=u.Ha?u.Ha.length:0;v>=m||(m=Math.max(m,v*(1048576>v?2:1.125)>>>0),v!=0&&(m=Math.max(m,256)),v=u.Ha,u.Ha=new Uint8Array(m),0<u.La&&u.Ha.set(v.subarray(0,u.La),0))}var xe={Pa:null,Qa(){return xe.createNode(null,"/",16895,0)},createNode(u,m,v,T){if((v&61440)===24576||(v&61440)===4096)throw new W(63);return xe.Pa||(xe.Pa={dir:{node:{Oa:xe.Fa.Oa,Na:xe.Fa.Na,lookup:xe.Fa.lookup,$a:xe.Fa.$a,rename:xe.Fa.rename,unlink:xe.Fa.unlink,rmdir:xe.Fa.rmdir,readdir:xe.Fa.readdir,symlink:xe.Fa.symlink},stream:{Sa:xe.Ga.Sa}},file:{node:{Oa:xe.Fa.Oa,Na:xe.Fa.Na},stream:{Sa:xe.Ga.Sa,read:xe.Ga.read,write:xe.Ga.write,kb:xe.Ga.kb,ab:xe.Ga.ab,bb:xe.Ga.bb}},link:{node:{Oa:xe.Fa.Oa,Na:xe.Fa.Na,readlink:xe.Fa.readlink},stream:{}},ob:{node:{Oa:xe.Fa.Oa,Na:xe.Fa.Na},stream:co}}),v=Bn(u,m,v,T),qt(v.mode)?(v.Fa=xe.Pa.dir.node,v.Ga=xe.Pa.dir.stream,v.Ha={}):(v.mode&61440)===32768?(v.Fa=xe.Pa.file.node,v.Ga=xe.Pa.file.stream,v.La=0,v.Ha=null):(v.mode&61440)===40960?(v.Fa=xe.Pa.link.node,v.Ga=xe.Pa.link.stream):(v.mode&61440)===8192&&(v.Fa=xe.Pa.ob.node,v.Ga=xe.Pa.ob.stream),v.timestamp=Date.now(),u&&(u.Ha[m]=v,u.timestamp=v.timestamp),v},Kb(u){return u.Ha?u.Ha.subarray?u.Ha.subarray(0,u.La):new Uint8Array(u.Ha):new Uint8Array(0)},Fa:{Oa(u){var m={};return m.dev=(u.mode&61440)===8192?u.id:1,m.ino=u.id,m.mode=u.mode,m.nlink=1,m.uid=0,m.gid=0,m.rdev=u.rdev,qt(u.mode)?m.size=4096:(u.mode&61440)===32768?m.size=u.La:(u.mode&61440)===40960?m.size=u.link.length:m.size=0,m.atime=new Date(u.timestamp),m.mtime=new Date(u.timestamp),m.ctime=new Date(u.timestamp),m.yb=4096,m.blocks=Math.ceil(m.size/m.yb),m},Na(u,m){if(m.mode!==void 0&&(u.mode=m.mode),m.timestamp!==void 0&&(u.timestamp=m.timestamp),m.size!==void 0&&(m=m.size,u.La!=m))if(m==0)u.Ha=null,u.La=0;else{var v=u.Ha;u.Ha=new Uint8Array(m),v&&u.Ha.set(v.subarray(0,Math.min(m,u.La))),u.La=m}},lookup(){throw je[44]},$a(u,m,v,T){return xe.createNode(u,m,v,T)},rename(u,m,v){if(qt(u.mode)){try{var T=Fn(m,v)}catch{}if(T)for(var k in T.Ha)throw new W(55)}delete u.parent.Ha[u.name],u.parent.timestamp=Date.now(),u.name=v,m.Ha[v]=u,m.timestamp=u.parent.timestamp},unlink(u,m){delete u.Ha[m],u.timestamp=Date.now()},rmdir(u,m){var v=Fn(u,m),T;for(T in v.Ha)throw new W(55);delete u.Ha[m],u.timestamp=Date.now()},readdir(u){var m=[".",".."],v;for(v of Object.keys(u.Ha))m.push(v);return m},symlink(u,m,v){return u=xe.createNode(u,m,41471,0),u.link=v,u},readlink(u){if((u.mode&61440)!==40960)throw new W(28);return u.link}},Ga:{read(u,m,v,T,k){var K=u.node.Ha;if(k>=u.node.La)return 0;if(u=Math.min(u.node.La-k,T),8<u&&K.subarray)m.set(K.subarray(k,k+u),v);else for(T=0;T<u;T++)m[v+T]=K[k+T];return u},write(u,m,v,T,k,K){if(m.buffer===S.buffer&&(K=!1),!T)return 0;if(u=u.node,u.timestamp=Date.now(),m.subarray&&(!u.Ha||u.Ha.subarray)){if(K)return u.Ha=m.subarray(v,v+T),u.La=T;if(u.La===0&&k===0)return u.Ha=m.slice(v,v+T),u.La=T;if(k+T<=u.La)return u.Ha.set(m.subarray(v,v+T),k),T}if(Ce(u,k+T),u.Ha.subarray&&m.subarray)u.Ha.set(m.subarray(v,v+T),k);else for(K=0;K<T;K++)u.Ha[k+K]=m[v+K];return u.La=Math.max(u.La,k+T),T},Sa(u,m,v){if(v===1?m+=u.position:v===2&&(u.node.mode&61440)===32768&&(m+=u.node.La),0>m)throw new W(28);return m},kb(u,m,v){Ce(u.node,m+v),u.node.La=Math.max(u.node.La,m+v)},ab(u,m,v,T,k){if((u.node.mode&61440)!==32768)throw new W(43);if(u=u.node.Ha,k&2||u.buffer!==S.buffer){if((0<v||v+m<u.length)&&(u.subarray?u=u.subarray(v,v+m):u=Array.prototype.slice.call(u,v,v+m)),v=!0,m=65536*Math.ceil(m/65536),(k=Vc(65536,m))?(w.fill(0,k,k+m),m=k):m=0,!m)throw new W(48);S.set(u,m)}else v=!1,m=u.byteOffset;return{Cb:m,tb:v}},bb(u,m,v,T){return xe.Ga.write(u,m,0,T,v,!1),0}}},Je=(u,m)=>{var v=0;return u&&(v|=365),m&&(v|=146),v},pt=null,U={},pe=[],Z=1,ne=null,be=!0,W=class{constructor(u){this.name="ErrnoError",this.Ja=u}},je={},Mt=class{constructor(){this.Za={},this.node=null}get flags(){return this.Za.flags}set flags(u){this.Za.flags=u}get position(){return this.Za.position}set position(u){this.Za.position=u}},Ft=class{constructor(u,m,v,T){u||(u=this),this.parent=u,this.Qa=u.Qa,this.Ua=null,this.id=Z++,this.name=m,this.mode=v,this.Fa={},this.Ga={},this.rdev=T}get read(){return(this.mode&365)===365}set read(u){u?this.mode|=365:this.mode&=-366}get write(){return(this.mode&146)===146}set write(u){u?this.mode|=146:this.mode&=-147}};function $e(u,m={}){if(u=ae(u),!u)return{path:"",node:null};if(m=Object.assign({pb:!0,jb:0},m),8<m.jb)throw new W(32);u=u.split("/").filter(ie=>!!ie);for(var v=pt,T="/",k=0;k<u.length;k++){var K=k===u.length-1;if(K&&m.parent)break;if(v=Fn(v,u[k]),T=De(T+"/"+u[k]),v.Ua&&(!K||K&&m.pb)&&(v=v.Ua.root),!K||m.Ra){for(K=0;(v.mode&61440)===40960;)if(v=j(T),T=ae(P(T),v),v=$e(T,{jb:m.jb+1}).node,40<K++)throw new W(32)}}return{path:T,node:v}}function $t(u){for(var m;;){if(u===u.parent)return u=u.Qa.sb,m?u[u.length-1]!=="/"?`${u}/${m}`:u+m:u;m=m?`${u.name}/${m}`:u.name,u=u.parent}}function fn(u,m){for(var v=0,T=0;T<m.length;T++)v=(v<<5)-v+m.charCodeAt(T)|0;return(u+v>>>0)%ne.length}function Qs(u){var m=fn(u.parent.id,u.name);if(ne[m]===u)ne[m]=u.Va;else for(m=ne[m];m;){if(m.Va===u){m.Va=u.Va;break}m=m.Va}}function Fn(u,m){var v=qt(u.mode)?(v=qn(u,"x"))?v:u.Fa.lookup?0:2:54;if(v)throw new W(v);for(v=ne[fn(u.id,m)];v;v=v.Va){var T=v.name;if(v.parent.id===u.id&&T===m)return v}return u.Fa.lookup(u,m)}function Bn(u,m,v,T){return u=new Ft(u,m,v,T),m=fn(u.parent.id,u.name),u.Va=ne[m],ne[m]=u}function qt(u){return(u&61440)===16384}function er(u){var m=["r","w","rw"][u&3];return u&512&&(m+="w"),m}function qn(u,m){if(be)return 0;if(!m.includes("r")||u.mode&292){if(m.includes("w")&&!(u.mode&146)||m.includes("x")&&!(u.mode&73))return 2}else return 2;return 0}function Ri(u,m){try{return Fn(u,m),20}catch{}return qn(u,"wx")}function tr(u,m,v){try{var T=Fn(u,m)}catch(k){return k.Ja}if(u=qn(u,"wx"))return u;if(v){if(!qt(T.mode))return 54;if(T===T.parent||$t(T)==="/")return 10}else if(qt(T.mode))return 31;return 0}function Lt(u){if(u=pe[u],!u)throw new W(8);return u}function nr(u,m=-1){if(u=Object.assign(new Mt,u),m==-1)e:{for(m=0;4096>=m;m++)if(!pe[m])break e;throw new W(33)}return u.fd=m,pe[m]=u}function Or(u,m=-1){var v,T;return u=nr(u,m),(T=(v=u.Ga)==null?void 0:v.Jb)==null||T.call(v,u),u}var co={open(u){var m,v;u.Ga=U[u.node.rdev].Ga,(v=(m=u.Ga).open)==null||v.call(m,u)},Sa(){throw new W(70)}};function ir(u,m){U[u]={Ga:m}}function Nr(u,m){var v=m==="/";if(v&&pt)throw new W(10);if(!v&&m){var T=$e(m,{pb:!1});if(m=T.path,T=T.node,T.Ua)throw new W(10);if(!qt(T.mode))throw new W(54)}m={type:u,Ob:{},sb:m,Bb:[]},u=u.Qa(m),u.Qa=m,m.root=u,v?pt=u:T&&(T.Ua=m,T.Qa&&T.Qa.Bb.push(m))}function ns(u,m,v){var T=$e(u,{parent:!0}).node;if(u=M(u),!u||u==="."||u==="..")throw new W(28);var k=Ri(T,u);if(k)throw new W(k);if(!T.Fa.$a)throw new W(63);return T.Fa.$a(T,u,m,v)}function _n(u,m){return ns(u,(m!==void 0?m:511)&1023|16384,0)}function is(u,m,v){typeof v>"u"&&(v=m,m=438),ns(u,m|8192,v)}function E(u,m){if(!ae(u))throw new W(44);var v=$e(m,{parent:!0}).node;if(!v)throw new W(44);m=M(m);var T=Ri(v,m);if(T)throw new W(T);if(!v.Fa.symlink)throw new W(63);v.Fa.symlink(v,m,u)}function z(u){var m=$e(u,{parent:!0}).node;u=M(u);var v=Fn(m,u),T=tr(m,u,!0);if(T)throw new W(T);if(!m.Fa.rmdir)throw new W(63);if(v.Ua)throw new W(10);m.Fa.rmdir(m,u),Qs(v)}function q(u){var m=$e(u,{parent:!0}).node;if(!m)throw new W(44);u=M(u);var v=Fn(m,u),T=tr(m,u,!1);if(T)throw new W(T);if(!m.Fa.unlink)throw new W(63);if(v.Ua)throw new W(10);m.Fa.unlink(m,u),Qs(v)}function j(u){if(u=$e(u).node,!u)throw new W(44);if(!u.Fa.readlink)throw new W(28);return ae($t(u.parent),u.Fa.readlink(u))}function H(u,m){if(u=$e(u,{Ra:!m}).node,!u)throw new W(44);if(!u.Fa.Oa)throw new W(63);return u.Fa.Oa(u)}function le(u){return H(u,!0)}function ge(u,m){if(u=typeof u=="string"?$e(u,{Ra:!0}).node:u,!u.Fa.Na)throw new W(63);u.Fa.Na(u,{mode:m&4095|u.mode&-4096,timestamp:Date.now()})}function Se(u,m){if(0>m)throw new W(28);if(u=typeof u=="string"?$e(u,{Ra:!0}).node:u,!u.Fa.Na)throw new W(63);if(qt(u.mode))throw new W(31);if((u.mode&61440)!==32768)throw new W(28);var v=qn(u,"w");if(v)throw new W(v);u.Fa.Na(u,{size:m,timestamp:Date.now()})}function we(u,m,v){if(u==="")throw new W(44);if(typeof m=="string"){var T={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090}[m];if(typeof T>"u")throw Error(`Unknown file open mode: ${m}`);m=T}if(v=m&64?(typeof v>"u"?438:v)&4095|32768:0,typeof u=="object")var k=u;else{u=De(u);try{k=$e(u,{Ra:!(m&131072)}).node}catch{}}if(T=!1,m&64)if(k){if(m&128)throw new W(20)}else k=ns(u,v,0),T=!0;if(!k)throw new W(44);if((k.mode&61440)===8192&&(m&=-513),m&65536&&!qt(k.mode))throw new W(54);if(!T&&(v=k?(k.mode&61440)===40960?32:qt(k.mode)&&(er(m)!=="r"||m&512)?31:qn(k,er(m)):44))throw new W(v);return m&512&&!T&&Se(k,0),m&=-131713,k=nr({node:k,path:$t(k),flags:m,seekable:!0,position:0,Ga:k.Ga,Db:[],error:!1}),k.Ga.open&&k.Ga.open(k),!l.logReadFiles||m&1||(Ct||(Ct={}),u in Ct||(Ct[u]=1)),k}function He(u){if(u.fd===null)throw new W(8);u.gb&&(u.gb=null);try{u.Ga.close&&u.Ga.close(u)}catch(m){throw m}finally{pe[u.fd]=null}u.fd=null}function Ve(u,m,v){if(u.fd===null)throw new W(8);if(!u.seekable||!u.Ga.Sa)throw new W(70);if(v!=0&&v!=1&&v!=2)throw new W(28);u.position=u.Ga.Sa(u,m,v),u.Db=[]}function ke(u,m,v,T,k){if(0>T||0>k)throw new W(28);if(u.fd===null)throw new W(8);if((u.flags&2097155)===1)throw new W(8);if(qt(u.node.mode))throw new W(31);if(!u.Ga.read)throw new W(28);var K=typeof k<"u";if(!K)k=u.position;else if(!u.seekable)throw new W(70);return m=u.Ga.read(u,m,v,T,k),K||(u.position+=m),m}function lt(u,m,v,T,k){if(0>T||0>k)throw new W(28);if(u.fd===null)throw new W(8);if(!(u.flags&2097155))throw new W(8);if(qt(u.node.mode))throw new W(31);if(!u.Ga.write)throw new W(28);u.seekable&&u.flags&1024&&Ve(u,0,2);var K=typeof k<"u";if(!K)k=u.position;else if(!u.seekable)throw new W(70);return m=u.Ga.write(u,m,v,T,k,void 0),K||(u.position+=m),m}function ft(u){var m,v=we(u,v||0);u=H(u).size;var T=new Uint8Array(u);return ke(v,T,0,u,0),m=T,He(v),m}var Et;function _t(u,m,v){u=De("/dev/"+u);var T=Je(!!m,!!v);ct||(ct=64);var k=ct++<<8|0;ir(k,{open(K){K.seekable=!1},close(){var K;(K=v==null?void 0:v.buffer)!=null&&K.length&&v(10)},read(K,ie,qe,mt){for(var tt=0,It=0;It<mt;It++){try{var Gt=m()}catch{throw new W(29)}if(Gt===void 0&&tt===0)throw new W(6);if(Gt==null)break;tt++,ie[qe+It]=Gt}return tt&&(K.node.timestamp=Date.now()),tt},write(K,ie,qe,mt){for(var tt=0;tt<mt;tt++)try{v(ie[qe+tt])}catch{throw new W(29)}return mt&&(K.node.timestamp=Date.now()),tt}}),is(u,T,k)}var ct,_e={},Ct;function it(u,m,v){if(m.charAt(0)==="/")return m;if(u=u===-100?"/":Lt(u).path,m.length==0){if(!v)throw new W(44);return u}return De(u+"/"+m)}function Kt(u,m,v){u=u(m),F[v>>2]=u.dev,F[v+4>>2]=u.mode,B[v+8>>2]=u.nlink,F[v+12>>2]=u.uid,F[v+16>>2]=u.gid,F[v+20>>2]=u.rdev,ve=[u.size>>>0,(J=u.size,1<=+Math.abs(J)?0<J?+Math.floor(J/4294967296)>>>0:~~+Math.ceil((J-+(~~J>>>0))/4294967296)>>>0:0)],F[v+24>>2]=ve[0],F[v+28>>2]=ve[1],F[v+32>>2]=4096,F[v+36>>2]=u.blocks,m=u.atime.getTime();var T=u.mtime.getTime(),k=u.ctime.getTime();return ve=[Math.floor(m/1e3)>>>0,(J=Math.floor(m/1e3),1<=+Math.abs(J)?0<J?+Math.floor(J/4294967296)>>>0:~~+Math.ceil((J-+(~~J>>>0))/4294967296)>>>0:0)],F[v+40>>2]=ve[0],F[v+44>>2]=ve[1],B[v+48>>2]=m%1e3*1e3,ve=[Math.floor(T/1e3)>>>0,(J=Math.floor(T/1e3),1<=+Math.abs(J)?0<J?+Math.floor(J/4294967296)>>>0:~~+Math.ceil((J-+(~~J>>>0))/4294967296)>>>0:0)],F[v+56>>2]=ve[0],F[v+60>>2]=ve[1],B[v+64>>2]=T%1e3*1e3,ve=[Math.floor(k/1e3)>>>0,(J=Math.floor(k/1e3),1<=+Math.abs(J)?0<J?+Math.floor(J/4294967296)>>>0:~~+Math.ceil((J-+(~~J>>>0))/4294967296)>>>0:0)],F[v+72>>2]=ve[0],F[v+76>>2]=ve[1],B[v+80>>2]=k%1e3*1e3,ve=[u.ino>>>0,(J=u.ino,1<=+Math.abs(J)?0<J?+Math.floor(J/4294967296)>>>0:~~+Math.ceil((J-+(~~J>>>0))/4294967296)>>>0:0)],F[v+88>>2]=ve[0],F[v+92>>2]=ve[1],0}var Sn=void 0;function Bt(){var u=F[+Sn>>2];return Sn+=4,u}var En=(u,m)=>m+2097152>>>0<4194305-!!u?(u>>>0)+4294967296*m:NaN,bt=[0,31,60,91,121,152,182,213,244,274,305,335],rn=[0,31,59,90,120,151,181,212,243,273,304,334],Yt={},zt=()=>{if(!Ht){var u={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:x||"./this.program"},m;for(m in Yt)Yt[m]===void 0?delete u[m]:u[m]=Yt[m];var v=[];for(m in u)v.push(`${m}=${u[m]}`);Ht=v}return Ht},Ht,Ci=u=>{var m=Oe(u)+1,v=di(m);return he(u,w,v,m),v},jn=(u,m,v,T)=>{var k={string:tt=>{var It=0;return tt!=null&&tt!==0&&(It=Ci(tt)),It},array:tt=>{var It=di(tt.length);return S.set(tt,It),It}};u=l["_"+u];var K=[],ie=0;if(T)for(var qe=0;qe<T.length;qe++){var mt=k[v[qe]];mt?(ie===0&&(ie=rr()),K[qe]=mt(T[qe])):K[qe]=T[qe]}return v=u(...K),v=function(tt){return ie!==0&&sr(ie),m==="string"?tt?Re(w,tt):"":m==="boolean"?!!tt:tt}(v)},kr=0,Ur=(u,m)=>(m=m==1?di(u.length):fo(u.length),u.subarray||u.slice||(u=new Uint8Array(u)),w.set(u,m),m),Pi,uo=[],Xn,ss=u=>{Pi.delete(Xn.get(u)),Xn.set(u,null),uo.push(u)},Fr=(u,m)=>{if(!Pi){Pi=new WeakMap;var v=Xn.length;if(Pi)for(var T=0;T<0+v;T++){var k=Xn.get(T);k&&Pi.set(k,T)}}if(v=Pi.get(u)||0)return v;if(uo.length)v=uo.pop();else{try{Xn.grow(1)}catch(qe){throw qe instanceof RangeError?"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.":qe}v=Xn.length-1}try{Xn.set(v,u)}catch(qe){if(!(qe instanceof TypeError))throw qe;if(typeof WebAssembly.Function=="function"){T=WebAssembly.Function,k={i:"i32",j:"i64",f:"f32",d:"f64",e:"externref",p:"i32"};for(var K={parameters:[],results:m[0]=="v"?[]:[k[m[0]]]},ie=1;ie<m.length;++ie)K.parameters.push(k[m[ie]]);m=new T(K,u)}else{for(T=[1],k=m.slice(0,1),m=m.slice(1),K={i:127,p:127,j:126,f:125,d:124,e:111},T.push(96),ie=m.length,128>ie?T.push(ie):T.push(ie%128|128,ie>>7),ie=0;ie<m.length;++ie)T.push(K[m[ie]]);k=="v"?T.push(0):T.push(1,K[k]),m=[0,97,115,109,1,0,0,0,1],k=T.length,128>k?m.push(k):m.push(k%128|128,k>>7),m.push(...T),m.push(2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0),m=new WebAssembly.Module(new Uint8Array(m)),m=new WebAssembly.Instance(m,{e:{f:u}}).exports.f}Xn.set(v,m)}return Pi.set(u,v),v};[44].forEach(u=>{je[u]=new W(u),je[u].stack="<generic error, no stack>"}),ne=Array(4096),Nr(xe,"/"),_n("/tmp"),_n("/home"),_n("/home/web_user"),function(){_n("/dev"),ir(259,{read:()=>0,write:(T,k,K,ie)=>ie}),is("/dev/null",259),ue(1280,Be),ue(1536,Ge),is("/dev/tty",1280),is("/dev/tty1",1536);var u=new Uint8Array(1024),m=0,v=()=>(m===0&&(m=se(u).byteLength),u[--m]);_t("random",v),_t("urandom",v),_n("/dev/shm"),_n("/dev/shm/tmp")}(),function(){_n("/proc");var u=_n("/proc/self");_n("/proc/self/fd"),Nr({Qa(){var m=Bn(u,"fd",16895,73);return m.Fa={lookup(v,T){var k=Lt(+T);return v={parent:null,Qa:{sb:"fake"},Fa:{readlink:()=>k.path}},v.parent=v}},m}},"/proc/self/fd")}();var Rd={a:(u,m,v,T)=>{nt(`Assertion failed: ${u?Re(w,u):""}, at: `+[m?m?Re(w,m):"":"unknown filename",v,T?T?Re(w,T):"":"unknown function"])},h:function(u,m){try{return u=u?Re(w,u):"",ge(u,m),0}catch(v){if(typeof _e>"u"||v.name!=="ErrnoError")throw v;return-v.Ja}},H:function(u,m,v){try{if(m=m?Re(w,m):"",m=it(u,m),v&-8)return-28;var T=$e(m,{Ra:!0}).node;return T?(u="",v&4&&(u+="r"),v&2&&(u+="w"),v&1&&(u+="x"),u&&qn(T,u)?-2:0):-44}catch(k){if(typeof _e>"u"||k.name!=="ErrnoError")throw k;return-k.Ja}},i:function(u,m){try{var v=Lt(u);return ge(v.node,m),0}catch(T){if(typeof _e>"u"||T.name!=="ErrnoError")throw T;return-T.Ja}},g:function(u){try{var m=Lt(u).node,v=typeof m=="string"?$e(m,{Ra:!0}).node:m;if(!v.Fa.Na)throw new W(63);return v.Fa.Na(v,{timestamp:Date.now()}),0}catch(T){if(typeof _e>"u"||T.name!=="ErrnoError")throw T;return-T.Ja}},b:function(u,m,v){Sn=v;try{var T=Lt(u);switch(m){case 0:var k=Bt();if(0>k)break;for(;pe[k];)k++;return Or(T,k).fd;case 1:case 2:return 0;case 3:return T.flags;case 4:return k=Bt(),T.flags|=k,0;case 12:return k=Bt(),N[k+0>>1]=2,0;case 13:case 14:return 0}return-28}catch(K){if(typeof _e>"u"||K.name!=="ErrnoError")throw K;return-K.Ja}},f:function(u,m){try{var v=Lt(u);return Kt(H,v.path,m)}catch(T){if(typeof _e>"u"||T.name!=="ErrnoError")throw T;return-T.Ja}},n:function(u,m,v){m=En(m,v);try{if(isNaN(m))return 61;var T=Lt(u);if(!(T.flags&2097155))throw new W(28);return Se(T.node,m),0}catch(k){if(typeof _e>"u"||k.name!=="ErrnoError")throw k;return-k.Ja}},C:function(u,m){try{if(m===0)return-28;var v=Oe("/")+1;return m<v?-68:(he("/",w,u,m),v)}catch(T){if(typeof _e>"u"||T.name!=="ErrnoError")throw T;return-T.Ja}},F:function(u,m){try{return u=u?Re(w,u):"",Kt(le,u,m)}catch(v){if(typeof _e>"u"||v.name!=="ErrnoError")throw v;return-v.Ja}},z:function(u,m,v){try{return m=m?Re(w,m):"",m=it(u,m),m=De(m),m[m.length-1]==="/"&&(m=m.substr(0,m.length-1)),_n(m,v),0}catch(T){if(typeof _e>"u"||T.name!=="ErrnoError")throw T;return-T.Ja}},E:function(u,m,v,T){try{m=m?Re(w,m):"";var k=T&256;return m=it(u,m,T&4096),Kt(k?le:H,m,v)}catch(K){if(typeof _e>"u"||K.name!=="ErrnoError")throw K;return-K.Ja}},x:function(u,m,v,T){Sn=T;try{m=m?Re(w,m):"",m=it(u,m);var k=T?Bt():0;return we(m,v,k).fd}catch(K){if(typeof _e>"u"||K.name!=="ErrnoError")throw K;return-K.Ja}},v:function(u,m,v,T){try{if(m=m?Re(w,m):"",m=it(u,m),0>=T)return-28;var k=j(m),K=Math.min(T,Oe(k)),ie=S[v+K];return he(k,w,v,T+1),S[v+K]=ie,K}catch(qe){if(typeof _e>"u"||qe.name!=="ErrnoError")throw qe;return-qe.Ja}},u:function(u){try{return u=u?Re(w,u):"",z(u),0}catch(m){if(typeof _e>"u"||m.name!=="ErrnoError")throw m;return-m.Ja}},G:function(u,m){try{return u=u?Re(w,u):"",Kt(H,u,m)}catch(v){if(typeof _e>"u"||v.name!=="ErrnoError")throw v;return-v.Ja}},r:function(u,m,v){try{return m=m?Re(w,m):"",m=it(u,m),v===0?q(m):v===512?z(m):nt("Invalid flags passed to unlinkat"),0}catch(T){if(typeof _e>"u"||T.name!=="ErrnoError")throw T;return-T.Ja}},q:function(u,m,v){try{if(m=m?Re(w,m):"",m=it(u,m,!0),v){var T=B[v>>2]+4294967296*F[v+4>>2],k=F[v+8>>2];K=1e3*T+k/1e6,v+=16,T=B[v>>2]+4294967296*F[v+4>>2],k=F[v+8>>2],ie=1e3*T+k/1e6}else var K=Date.now(),ie=K;u=K;var qe=$e(m,{Ra:!0}).node;return qe.Fa.Na(qe,{timestamp:Math.max(u,ie)}),0}catch(mt){if(typeof _e>"u"||mt.name!=="ErrnoError")throw mt;return-mt.Ja}},l:function(u,m,v){u=new Date(1e3*En(u,m)),F[v>>2]=u.getSeconds(),F[v+4>>2]=u.getMinutes(),F[v+8>>2]=u.getHours(),F[v+12>>2]=u.getDate(),F[v+16>>2]=u.getMonth(),F[v+20>>2]=u.getFullYear()-1900,F[v+24>>2]=u.getDay(),m=u.getFullYear(),F[v+28>>2]=(m%4!==0||m%100===0&&m%400!==0?rn:bt)[u.getMonth()]+u.getDate()-1|0,F[v+36>>2]=-(60*u.getTimezoneOffset()),m=new Date(u.getFullYear(),6,1).getTimezoneOffset();var T=new Date(u.getFullYear(),0,1).getTimezoneOffset();F[v+32>>2]=(m!=T&&u.getTimezoneOffset()==Math.min(T,m))|0},j:function(u,m,v,T,k,K,ie,qe){k=En(k,K);try{if(isNaN(k))return 61;var mt=Lt(T);if(m&2&&!(v&2)&&(mt.flags&2097155)!==2)throw new W(2);if((mt.flags&2097155)===1)throw new W(2);if(!mt.Ga.ab)throw new W(43);var tt=mt.Ga.ab(mt,u,k,m,v),It=tt.Cb;return F[ie>>2]=tt.tb,B[qe>>2]=It,0}catch(Gt){if(typeof _e>"u"||Gt.name!=="ErrnoError")throw Gt;return-Gt.Ja}},k:function(u,m,v,T,k,K,ie){K=En(K,ie);try{var qe=Lt(k);if(v&2){if((qe.node.mode&61440)!==32768)throw new W(43);if(!(T&2)){var mt=w.slice(u,u+m);qe.Ga.bb&&qe.Ga.bb(qe,mt,K,m,T)}}}catch(tt){if(typeof _e>"u"||tt.name!=="ErrnoError")throw tt;return-tt.Ja}},y:(u,m,v,T)=>{var k=new Date().getFullYear(),K=new Date(k,0,1).getTimezoneOffset();k=new Date(k,6,1).getTimezoneOffset(),B[u>>2]=60*Math.max(K,k),F[m>>2]=+(K!=k),m=ie=>{var qe=Math.abs(ie);return`UTC${0<=ie?"-":"+"}${String(Math.floor(qe/60)).padStart(2,"0")}${String(qe%60).padStart(2,"0")}`},u=m(K),m=m(k),k<K?(he(u,w,v,17),he(m,w,T,17)):(he(u,w,T,17),he(m,w,v,17))},d:()=>Date.now(),s:()=>2147483648,c:()=>performance.now(),o:u=>{var m=w.length;if(u>>>=0,2147483648<u)return!1;for(var v=1;4>=v;v*=2){var T=m*(1+.2/v);T=Math.min(T,u+100663296);var k=Math;T=Math.max(u,T);e:{k=(k.min.call(k,2147483648,T+(65536-T%65536)%65536)-C.buffer.byteLength+65535)/65536;try{C.grow(k),Q();var K=1;break e}catch{}K=void 0}if(K)return!0}return!1},A:(u,m)=>{var v=0;return zt().forEach((T,k)=>{var K=m+v;for(k=B[u+4*k>>2]=K,K=0;K<T.length;++K)S[k++]=T.charCodeAt(K);S[k]=0,v+=T.length+1}),0},B:(u,m)=>{var v=zt();B[u>>2]=v.length;var T=0;return v.forEach(k=>T+=k.length+1),B[m>>2]=T,0},e:function(u){try{var m=Lt(u);return He(m),0}catch(v){if(typeof _e>"u"||v.name!=="ErrnoError")throw v;return v.Ja}},p:function(u,m){try{var v=Lt(u);return S[m]=v.tty?2:qt(v.mode)?3:(v.mode&61440)===40960?7:4,N[m+2>>1]=0,ve=[0,(J=0,1<=+Math.abs(J)?0<J?+Math.floor(J/4294967296)>>>0:~~+Math.ceil((J-+(~~J>>>0))/4294967296)>>>0:0)],F[m+8>>2]=ve[0],F[m+12>>2]=ve[1],ve=[0,(J=0,1<=+Math.abs(J)?0<J?+Math.floor(J/4294967296)>>>0:~~+Math.ceil((J-+(~~J>>>0))/4294967296)>>>0:0)],F[m+16>>2]=ve[0],F[m+20>>2]=ve[1],0}catch(T){if(typeof _e>"u"||T.name!=="ErrnoError")throw T;return T.Ja}},w:function(u,m,v,T){try{e:{var k=Lt(u);u=m;for(var K,ie=m=0;ie<v;ie++){var qe=B[u>>2],mt=B[u+4>>2];u+=8;var tt=ke(k,S,qe,mt,K);if(0>tt){var It=-1;break e}if(m+=tt,tt<mt)break;typeof K<"u"&&(K+=tt)}It=m}return B[T>>2]=It,0}catch(Gt){if(typeof _e>"u"||Gt.name!=="ErrnoError")throw Gt;return Gt.Ja}},m:function(u,m,v,T,k){m=En(m,v);try{if(isNaN(m))return 61;var K=Lt(u);return Ve(K,m,T),ve=[K.position>>>0,(J=K.position,1<=+Math.abs(J)?0<J?+Math.floor(J/4294967296)>>>0:~~+Math.ceil((J-+(~~J>>>0))/4294967296)>>>0:0)],F[k>>2]=ve[0],F[k+4>>2]=ve[1],K.gb&&m===0&&T===0&&(K.gb=null),0}catch(ie){if(typeof _e>"u"||ie.name!=="ErrnoError")throw ie;return ie.Ja}},D:function(u){var v;try{var m=Lt(u);return(v=m.Ga)!=null&&v.fsync?m.Ga.fsync(m):0}catch(T){if(typeof _e>"u"||T.name!=="ErrnoError")throw T;return T.Ja}},t:function(u,m,v,T){try{e:{var k=Lt(u);u=m;for(var K,ie=m=0;ie<v;ie++){var qe=B[u>>2],mt=B[u+4>>2];u+=8;var tt=lt(k,S,qe,mt,K);if(0>tt){var It=-1;break e}m+=tt,typeof K<"u"&&(K+=tt)}It=m}return B[T>>2]=It,0}catch(Gt){if(typeof _e>"u"||Gt.name!=="ErrnoError")throw Gt;return Gt.Ja}}},Fe=function(){var v;function u(T){var k;return Fe=T.exports,C=Fe.I,Q(),Xn=Fe.K,Y.unshift(Fe.J),Ee--,(k=l.monitorRunDependencies)==null||k.call(l,Ee),Ee==0&&We&&(T=We,We=null,T()),Fe}var m={a:Rd};if(Ee++,(v=l.monitorRunDependencies)==null||v.call(l,Ee),l.instantiateWasm)try{return l.instantiateWasm(m,u)}catch(T){return L(`Module.instantiateWasm callback failed with error: ${T}`),!1}return Ae||(Ae=ee("sql-wasm.wasm")?"sql-wasm.wasm":l.locateFile?l.locateFile("sql-wasm.wasm",y):y+"sql-wasm.wasm"),Ze(m,function(T){u(T.instance)}),{}}();l._sqlite3_free=u=>(l._sqlite3_free=Fe.L)(u),l._sqlite3_value_text=u=>(l._sqlite3_value_text=Fe.M)(u),l._sqlite3_prepare_v2=(u,m,v,T,k)=>(l._sqlite3_prepare_v2=Fe.N)(u,m,v,T,k),l._sqlite3_step=u=>(l._sqlite3_step=Fe.O)(u),l._sqlite3_reset=u=>(l._sqlite3_reset=Fe.P)(u),l._sqlite3_exec=(u,m,v,T,k)=>(l._sqlite3_exec=Fe.Q)(u,m,v,T,k),l._sqlite3_finalize=u=>(l._sqlite3_finalize=Fe.R)(u),l._sqlite3_column_name=(u,m)=>(l._sqlite3_column_name=Fe.S)(u,m),l._sqlite3_column_text=(u,m)=>(l._sqlite3_column_text=Fe.T)(u,m),l._sqlite3_column_type=(u,m)=>(l._sqlite3_column_type=Fe.U)(u,m),l._sqlite3_errmsg=u=>(l._sqlite3_errmsg=Fe.V)(u),l._sqlite3_clear_bindings=u=>(l._sqlite3_clear_bindings=Fe.W)(u),l._sqlite3_value_blob=u=>(l._sqlite3_value_blob=Fe.X)(u),l._sqlite3_value_bytes=u=>(l._sqlite3_value_bytes=Fe.Y)(u),l._sqlite3_value_double=u=>(l._sqlite3_value_double=Fe.Z)(u),l._sqlite3_value_int=u=>(l._sqlite3_value_int=Fe._)(u),l._sqlite3_value_type=u=>(l._sqlite3_value_type=Fe.$)(u),l._sqlite3_result_blob=(u,m,v,T)=>(l._sqlite3_result_blob=Fe.aa)(u,m,v,T),l._sqlite3_result_double=(u,m)=>(l._sqlite3_result_double=Fe.ba)(u,m),l._sqlite3_result_error=(u,m,v)=>(l._sqlite3_result_error=Fe.ca)(u,m,v),l._sqlite3_result_int=(u,m)=>(l._sqlite3_result_int=Fe.da)(u,m),l._sqlite3_result_int64=(u,m,v)=>(l._sqlite3_result_int64=Fe.ea)(u,m,v),l._sqlite3_result_null=u=>(l._sqlite3_result_null=Fe.fa)(u),l._sqlite3_result_text=(u,m,v,T)=>(l._sqlite3_result_text=Fe.ga)(u,m,v,T),l._sqlite3_aggregate_context=(u,m)=>(l._sqlite3_aggregate_context=Fe.ha)(u,m),l._sqlite3_column_count=u=>(l._sqlite3_column_count=Fe.ia)(u),l._sqlite3_data_count=u=>(l._sqlite3_data_count=Fe.ja)(u),l._sqlite3_column_blob=(u,m)=>(l._sqlite3_column_blob=Fe.ka)(u,m),l._sqlite3_column_bytes=(u,m)=>(l._sqlite3_column_bytes=Fe.la)(u,m),l._sqlite3_column_double=(u,m)=>(l._sqlite3_column_double=Fe.ma)(u,m),l._sqlite3_bind_blob=(u,m,v,T,k)=>(l._sqlite3_bind_blob=Fe.na)(u,m,v,T,k),l._sqlite3_bind_double=(u,m,v)=>(l._sqlite3_bind_double=Fe.oa)(u,m,v),l._sqlite3_bind_int=(u,m,v)=>(l._sqlite3_bind_int=Fe.pa)(u,m,v),l._sqlite3_bind_text=(u,m,v,T,k)=>(l._sqlite3_bind_text=Fe.qa)(u,m,v,T,k),l._sqlite3_bind_parameter_index=(u,m)=>(l._sqlite3_bind_parameter_index=Fe.ra)(u,m),l._sqlite3_sql=u=>(l._sqlite3_sql=Fe.sa)(u),l._sqlite3_normalized_sql=u=>(l._sqlite3_normalized_sql=Fe.ta)(u),l._sqlite3_changes=u=>(l._sqlite3_changes=Fe.ua)(u),l._sqlite3_close_v2=u=>(l._sqlite3_close_v2=Fe.va)(u),l._sqlite3_create_function_v2=(u,m,v,T,k,K,ie,qe,mt)=>(l._sqlite3_create_function_v2=Fe.wa)(u,m,v,T,k,K,ie,qe,mt),l._sqlite3_open=(u,m)=>(l._sqlite3_open=Fe.xa)(u,m);var fo=l._malloc=u=>(fo=l._malloc=Fe.ya)(u),Br=l._free=u=>(Br=l._free=Fe.za)(u);l._RegisterExtensionFunctions=u=>(l._RegisterExtensionFunctions=Fe.Aa)(u);var Vc=(u,m)=>(Vc=Fe.Ba)(u,m),sr=u=>(sr=Fe.Ca)(u),di=u=>(di=Fe.Da)(u),rr=()=>(rr=Fe.Ea)();l.stackSave=()=>rr(),l.stackRestore=u=>sr(u),l.stackAlloc=u=>di(u),l.cwrap=(u,m,v,T)=>{var k=!v||v.every(K=>K==="number"||K==="boolean");return m!=="string"&&k&&!T?l["_"+u]:(...K)=>jn(u,m,v,K)},l.addFunction=Fr,l.removeFunction=ss,l.UTF8ToString=Pe,l.ALLOC_NORMAL=kr,l.allocate=Ur,l.allocateUTF8OnStack=Ci;var zr;We=function u(){zr||Wc(),zr||(We=u)};function Wc(){function u(){var v;if(!zr&&(zr=!0,l.calledRun=!0,!D)){if(l.noFSInit||Et||(Et=!0,l.stdin=l.stdin,l.stdout=l.stdout,l.stderr=l.stderr,l.stdin?_t("stdin",l.stdin):E("/dev/tty","/dev/stdin"),l.stdout?_t("stdout",null,l.stdout):E("/dev/tty","/dev/stdout"),l.stderr?_t("stderr",null,l.stderr):E("/dev/tty1","/dev/stderr"),we("/dev/stdin",0),we("/dev/stdout",1),we("/dev/stderr",1)),be=!1,at(Y),(v=l.onRuntimeInitialized)==null||v.call(l),l.postRun)for(typeof l.postRun=="function"&&(l.postRun=[l.postRun]);l.postRun.length;){var m=l.postRun.shift();de.unshift(m)}at(de)}}if(!(0<Ee)){if(l.preRun)for(typeof l.preRun=="function"&&(l.preRun=[l.preRun]);l.preRun.length;)Me();at(ce),0<Ee||(l.setStatus?(l.setStatus("Running..."),setTimeout(function(){setTimeout(function(){l.setStatus("")},1),u()},1)):u())}}if(l.preInit)for(typeof l.preInit=="function"&&(l.preInit=[l.preInit]);0<l.preInit.length;)l.preInit.pop()();return Wc(),o}),t)};i.exports=n,i.exports.default=n})(dd);var Xb=dd.exports;const $b=ld(Xb),Kb="/realm/play/assets/sql-wasm-Bku9E_kW.wasm",Yb="justa-web",Xi="db";function pd(){return new Promise((i,e)=>{const t=indexedDB.open(Yb,1);t.onupgradeneeded=()=>t.result.createObjectStore(Xi),t.onsuccess=()=>i(t.result),t.onerror=()=>e(t.error)})}async function Jb(){try{const i=await pd();return await new Promise(e=>{const t=i.transaction(Xi).objectStore(Xi).get(Xi);t.onsuccess=()=>e(t.result??null),t.onerror=()=>e(null)})}catch{return null}}async function Zb(i){try{const e=await pd();await new Promise(t=>{const n=e.transaction(Xi,"readwrite");n.objectStore(Xi).put(i,Xi),n.oncomplete=t,n.onerror=t})}catch{}}function Qb(i,e){let t=i[0];const n={};return e.forEach((s,r)=>{const a="$p"+r;if(s!==null&&!["string","number","boolean"].includes(typeof s))throw new TypeError(`ctx.sql: \${} binds string, number, boolean or null, got ${typeof s}`);n[a]=typeof s=="boolean"?s?1:0:s,t+=a+i[r+1]}),{text:t,params:n}}async function ew({persist:i=!0}={}){const e=await $b({locateFile:()=>Kb}),t=i?await Jb():null;let n=t?new e.Database(t):new e.Database,s=!1,r=null;const a=()=>{!i||!s||r||(s=!1,r=Zb(n.export()).then(()=>{r=null,s&&a()}))};function o(c,l,f){var _,g,R;const{text:h,params:d}=Qb(l,f);c!=null&&(d["@caller"]=c);let p=[],x=0;n.run("BEGIN");try{for(const A of n.iterateStatements(h)){A.bind(d);const b=[];for(;A.step();)b.push(A.getAsObject());A.getColumnNames().length&&(p=b),x+=n.getRowsModified(),A.free()}n.run("COMMIT")}catch(A){try{n.run("ROLLBACK")}catch{}throw A}const y=((R=(g=(_=n.exec("SELECT last_insert_rowid() AS id")[0])==null?void 0:_.values)==null?void 0:g[0])==null?void 0:R[0])??0;return x&&(s=!0,queueMicrotask(a)),{rows:p,changes:x,lastInsertRowid:Number(y)}}return{sqlFor:c=>(l,...f)=>Promise.resolve().then(()=>o(c,l,f)),async migrate(c){await c((l,...f)=>Promise.resolve().then(()=>o(null,l,f)))},async reset(){n.close(),n=new e.Database,s=!0,a()},get raw(){return n}}}function ci(i){return i=(i^i>>>16)>>>0,i=Math.imul(i,2146121005)>>>0,i=(i^i>>>15)>>>0,i=Math.imul(i,2221713035)>>>0,(i^i>>>16)>>>0}const Qt=(i,e)=>ci((i^ci(e+2654435769))>>>0)/4294967296;function _a(i){const e=Math.floor(i),t=i-e,n=t*t*(3-2*t),s=ci(e|0)/2147483648-1,r=ci(e+1|0)/2147483648-1;return s+(r-s)*n}const Mf={depth:1};function tw(){return{seed:0,t:0,age:0,life:1/0,time:0,mobile:!1,size:0,spin:0,glo:1,tint:[1,1,1],p:[0,0,0],v:[0,0,0],offset:[0,0,0]}}const nl=/\s*(?:(\d+(?:\.\d+)?|\.\d+)|(\.\.)|([A-Za-z_][A-Za-z0-9_]*(?:-[A-Za-z][A-Za-z0-9_]*)*)|([$%#][A-Za-z_][A-Za-z0-9_]*)|([()<>,:+\-*/.?|~@;]))/y;function nw(i){const e=[];for(nl.lastIndex=0;;){const t=nl.lastIndex;if(/^\s*$/.test(i.slice(t)))break;const n=nl.exec(i);if(!n)throw new Error(`fx: cannot read "${i.slice(t)}"`);n[1]!==void 0?e.push({k:"num",v:Number(n[1])}):n[2]!==void 0?e.push({k:".."}):n[3]!==void 0?e.push({k:"id",v:n[3]}):n[4]!==void 0?e.push({k:n[4][0],v:n[4].slice(1)}):e.push({k:n[5]})}return e}const Ai=i=>typeof i!="number",Yi=()=>[0,0,0],iw={"+":(i,e)=>i+e,"-":(i,e)=>i-e,"*":(i,e)=>i*e,"/":(i,e)=>e===0?0:i/e};function Sf(i,e,t,n){const s=Ai(e),r=Ai(t);return!s&&!r?i(e,t):(n[0]=i(s?e[0]:e,r?t[0]:t),n[1]=i(s?e[1]:e,r?t[1]:t),n[2]=i(s?e[2]:e,r?t[2]:t),n)}function sw(i,e,t,n){const s=Ai(i),r=Ai(e);if(!s&&!r)return i+(e-i)*t;for(let a=0;a<3;a++){const o=s?i[a]:i,c=r?e[a]:e;n[a]=o+(c-o)*t}return n}const rw=(i,e)=>Ai(i)?i:(e[0]=e[1]=e[2]=i,e),mr=i=>({fn:()=>i,k:"const",v:i}),aw=i=>(i.k==="const",i);class ow{constructor(e,t){this.t=nw(e),this.i=0,this.ids=t}peek(e){var t;return((t=this.t[this.i])==null?void 0:t.k)===e}take(e){const t=this.t[this.i];if(!t||e&&t.k!==e)throw new Error(`fx: expected ${e??"more"} at ${this.i}`);return this.i++,t}done(){return this.i>=this.t.length}value(){if(this.peek("?"))return this.tier();let e=this.sum();if(!this.peek(">"))return e;const t=[{t:0,n:e}];for(;this.peek(">");){this.take(">");const n=this.sum();if(this.peek(":")){if(this.take(":"),n.k!=="const"||Ai(n.v))throw new Error("fx: a ramp's time is a number");t.push({t:n.v,n:this.sum()})}else{t.push({t:1,n});break}}return lw(t)}tier(){this.take("?");const e=this.take("id").v;this.take(":");const t=this.sum();this.take("|");const n=this.sum();if(e!=="mobile")throw new Error(`fx: unknown tier ?${e}`);return{fn:s=>s.mobile?t.fn(s):n.fn(s),k:"var"}}sum(){let e=this.product();for(;this.peek("+")||this.peek("-");){const t=this.take().k,n=this.product();e=il(t,e,n)}return e}product(){let e=this.unary();for(;this.peek("*")||this.peek("/");){const t=this.take().k,n=this.unary();e=il(t,e,n)}return e}unary(){return this.peek("-")?(this.take("-"),this.peek("num")?this.number(-this.take("num").v):il("*",mr(-1),this.unary())):this.postfix(this.primary())}number(e){if(!this.peek(".."))return mr(e);this.take("..");const n=(this.peek("-")?(this.take("-"),-1):1)*this.take("num").v,s=this.ids.next++;return{fn:r=>e+(n-e)*Qt(r.seed,s),k:"var"}}postfix(e){var t;for(;;)if(this.peek("~"))this.take("~");else if(this.peek(".")&&((t=this.t[this.i+1])==null?void 0:t.k)==="id"){this.take(".");const n=this.take("id").v,s=this.args();e=uw(e,n,s)}else return e}args(){this.take("(");const e=[];if(this.peek(")"))return this.take(")"),e;for(;e.push(this.value()),this.peek(",");)this.take(",");return this.take(")"),e}primary(){const e=this.t[this.i];if(!e)throw new Error("fx: a value is missing");if(e.k==="num")return this.number(this.take("num").v);if(e.k==="$")return this.take("$"),cw(e.v);if(e.k==="%"||e.k==="#")throw new Error(`fx: ${e.k}${e.v} is not read here yet`);if(e.k==="("){this.take("(");const t=this.value();return this.take(")"),t}if(e.k==="<"){this.take("<");const t=this.sum();this.take(",");const n=this.sum();this.take(",");const s=this.sum();if(this.take(">"),[t,n,s].every(a=>a.k==="const"))return mr([t.v,n.v,s.v]);const r=Yi();return{fn:a=>(r[0]=t.fn(a),r[1]=n.fn(a),r[2]=s.fn(a),r),k:"var"}}if(e.k==="id")return this.take("id"),this.peek("(")?hw(e.v,this.args(),this.ids):{fn:()=>e.v,k:"name",name:e.v};throw new Error(`fx: unexpected ${e.k}`)}}function il(i,e,t){const n=iw[i];if(e.k==="const"&&t.k==="const")return mr(Sf(n,e.v,t.v,Yi()));const s=Yi();return{fn:r=>Sf(n,e.fn(r),t.fn(r),s),k:"var"}}function lw(i){const e=Yi();return{k:"var",fn(t){const n=Math.min(Math.max(t.t,0),1);let s=1;for(;s<i.length-1&&i[s].t<n;)s++;const r=i[s-1],a=i[s],o=a.t-r.t;return sw(r.n.fn(t),a.n.fn(t),o>0?Math.min(Math.max((n-r.t)/o,0),1):1,e)}}}function cw(i){const e={size:t=>t.size,spin:t=>t.spin,glo:t=>t.glo,tint:t=>t.tint,age:t=>t.age,life:t=>Number.isFinite(t.life)?t.life:0,v:t=>t.v}[i];if(!e)throw new Error(`fx: unknown variable $${i}`);return{fn:e,k:"var"}}function uw(i,e,t){if(e==="c"){const r=t[0],a=Yi();return{fn:o=>{const c=i.fn(o),l=r.fn(o),f=Ai(c);return a[0]=f?c[0]:c,a[1]=(f?c[1]:c)+l,a[2]=f?c[2]:c,a},k:"var",shape:i.shape}}const n={sin:Math.sin,cos:Math.cos,abs:Math.abs,floor:Math.floor,sqrt:Math.sqrt,fract:r=>r-Math.floor(r)}[e];if(!n)throw new Error(`fx: unknown .${e}()`);const s=Yi();return{fn:r=>{const a=i.fn(r);return Ai(a)?(s[0]=n(a[0]),s[1]=n(a[1]),s[2]=n(a[2]),s):n(a)},k:"var"}}function sl(i,e,t,n=1){const s=2*i-1,r=Math.sqrt(Math.max(0,1-s*s)),a=2*Math.PI*e;return t[0]=r*Math.cos(a)*n,t[1]=s*n,t[2]=r*Math.sin(a)*n,t}function fw(i,e,t,n){const s=2*Math.PI*e,r=i[0],a=i[1],o=i[2],c=.9*Math.cos(.9*s*a+3.3),l=Math.cos(s*o+1.3*t+2.1),f=1.3*Math.cos(1.3*s*o+.7),h=Math.cos(s*r+1.1*t+4.2),d=1.1*Math.cos(1.1*s*r+1.9),p=Math.cos(s*a+1.7*t);return n[0]=c-l,n[1]=f-h,n[2]=d-p,n}function hw(i,e,t){const n=(a,o,c=0)=>e[a]?e[a].fn(o):c,s=t.next,r=Yi();switch(t.next+=4,i){case"up":return{fn:a=>(r[0]=0,r[1]=n(0,a,1),r[2]=0,r),k:"var"};case"sdir":case"sphereDir":return{fn:a=>sl(Qt(a.seed,s),Qt(a.seed,s+1),r),k:"var"};case"cone":return{k:"var",fn(a){const o=n(0,a,15)*Math.PI/180,c=1-Qt(a.seed,s)*(1-Math.cos(o)),l=Math.sqrt(Math.max(0,1-c*c)),f=2*Math.PI*Qt(a.seed,s+1);return r[0]=l*Math.cos(f),r[1]=c,r[2]=l*Math.sin(f),r}};case"radial":return{k:"var",fn(a){const o=a.offset[0],c=a.offset[2],l=Math.hypot(o,c),f=n(0,a,1);if(r[1]=0,l>1e-6)return r[0]=o/l*f,r[2]=c/l*f,r;const h=2*Math.PI*Qt(a.seed,s);return r[0]=Math.cos(h)*f,r[2]=Math.sin(h)*f,r}};case"blast":return{k:"var",fn(a){const o=a.offset,c=Math.hypot(o[0],o[1],o[2]),l=n(0,a,1);return c>1e-6?(r[0]=o[0]/c*l,r[1]=o[1]/c*l,r[2]=o[2]/c*l,r):sl(Qt(a.seed,s),Qt(a.seed,s+1),r,l)}};case"grav":case"gravity":return mr([0,-9.81,0]);case"buoy":case"buoyancy":return{fn:a=>(r[0]=0,r[1]=n(0,a,1),r[2]=0,r),k:"var"};case"drag":return{fn:a=>{const o=n(0,a,1);return r[0]=-o*a.v[0],r[1]=-o*a.v[1],r[2]=-o*a.v[2],r},k:"var"};case"curl":return{fn:a=>fw(a.p,n(0,a,.5),a.time,r),k:"var"};case"force":return{fn:a=>rw(n(0,a,0),r),k:"var"};case"hdr":case"rgb":case"vec3":return{fn:a=>(r[0]=n(0,a),r[1]=n(1,a),r[2]=n(2,a),r),k:"var"};case"spin":return{fn:a=>a.age*(2*Qt(a.seed,s)-1)*n(0,a,1)*2*Math.PI,k:"var"};case"flick":case"flicker":return{fn:a=>1+Mf.depth*n(1,a,.15)*_a(a.time*n(0,a,1)+a.seed%997),k:"var"};case"fire":case"firelight":return{fn:a=>1+Mf.depth*(.25*_a(a.time*n(0,a,1.2)+3.1)+.15*_a(a.time*n(1,a,2)+17.7)),k:"var"};case"noise":return{fn:a=>_a(n(0,a,a.time)),k:"var"};case"time":return{fn:a=>a.time,k:"var"};case"point":return{fn:()=>(r[0]=r[1]=r[2]=0,r),k:"var",shape:!0};case"disc":return{k:"var",shape:!0,fn(a){const o=n(0,a,1)*Math.sqrt(Qt(a.seed,s)),c=2*Math.PI*Qt(a.seed,s+1);return r[0]=o*Math.cos(c),r[1]=0,r[2]=o*Math.sin(c),r}};case"sphere":return{k:"var",shape:!0,fn(a){const o=n(0,a,1)*Math.cbrt(Qt(a.seed,s+2));return sl(Qt(a.seed,s),Qt(a.seed,s+1),r,o)}};case"box":return{fn:a=>{for(let o=0;o<3;o++)r[o]=(2*Qt(a.seed,s+o)-1)*n(o,a,1);return r},k:"var",shape:!0};case"line":return{k:"var",shape:!0,fn(a){const o=n(1,a,1),c=n(2,a,0),l=n(3,a,0),f=Math.hypot(o,c,l)||1,h=(Qt(a.seed,s)-.5)*n(0,a,1);return r[0]=o/f*h,r[1]=c/f*h,r[2]=l/f*h,r}};case"sprite":case"light":return{fn:()=>null,k:"render",name:i,args:e};case"bounce":return{fn:()=>null,k:"floor",args:e};default:throw new Error(`fx: unknown ${i}()`)}}function Ef(i,e={next:1}){const t=new ow(String(i),e),n=t.value();if(!t.done())throw new Error(`fx: "${i}" has more than one value`);return aw(n)}const dw=["life","v","size","spin","tint"],pw=["acc","sz","col","a","rot","glo"],mw=new Set(["rate","burst","n","on","at","floor","r",...dw,...pw]),Tf=8;function gw(i){const e=[];let t=0,n="";for(const s of i)s==="("?t++:s===")"&&(t=Math.max(0,t-1)),/\s/.test(s)&&t===0?(n&&e.push(n),n=""):n+=s;return n&&e.push(n),e}function _w(i){if((i==null?void 0:i.k)!=="render")throw new Error("fx: r= takes sprite(...) or light(...)");const e=n=>i.args[n],t=(n,s)=>{var r;return((r=e(n))==null?void 0:r.k)==="name"?e(n).name:s};if(i.name==="sprite"){const n=e(3);if(n&&n.k!=="const")throw new Error("fx: a sprite's stretch is a number");return{kind:"sprite",texture:t(0,"soft-disc"),blend:t(1,"alpha"),align:t(2,"full"),stretch:n?n.v:0}}return{kind:"light",color:e(0),intensity:e(1),radius:e(2)}}function vw(i){var e;if(i.k==="name"){if(!["die","stick","bounce"].includes(i.name))throw new Error(`fx: floor=${i.name}?`);return{mode:i.name,k:.5}}if(i.k==="floor")return{mode:"bounce",k:((e=i.args[0])==null?void 0:e.k)==="const"?i.args[0].v:.5};throw new Error("fx: floor= takes die, stick or bounce(k)")}function yw(i){const[,e,t]=i.match(/^pop\s+(\S+)\s*(.*)$/)??[];if(!e)throw new Error(`fx: "${i}" is not a pop line`);const n={name:e,ignored:[]},s={next:1};for(const r of gw(t)){const a=r.indexOf("=");if(a<=0)throw new Error(`fx: "${r}" is not key=value`);const o=r.slice(0,a),c=r.slice(a+1);if(!mw.has(o)){n.ignored.push(o);continue}const l=o==="on"&&c.match(/^@([A-Za-z_][\w-]*)(?:\?(\d*\.?\d+))?$/);if(l){n.parent={name:l[1],chance:l[2]===void 0?1:Number(l[2])};continue}const f=Ef(c,s);if(o==="r")n.r=_w(f);else if(o==="floor")n.floor=vw(f);else if(o==="n"){if(f.k!=="const")throw new Error("fx: n= is a number");n.n=f.v}else n[o]=f}if(!n.r)throw new Error(`fx: pop ${e} has no r=`);return!n.rate&&!n.burst&&n.n==null&&!n.parent&&(n.burst=Ef("1")),n}function xw(i){var n;const e=[];for(const s of String(i).split(/\r?\n/)){const r=s.replace(/\/\/.*$/,"");r.trim()&&(/^\s/.test(r)&&e.length?e[e.length-1]+=" "+r.trim():e.push(r.trim()))}if(((n=e[0])==null?void 0:n.split(/\s+/)[0])!=="fx")throw new Error("fx: a program starts with the line fx");const t=e.slice(1).map(yw);if(t.length>Tf)throw new Error(`fx: ${t.length} populations, at most ${Tf}`);for(const s of t)if(s.parent&&!t.some(r=>r.name===s.parent.name))throw new Error(`fx: pop ${s.name} is born on @${s.parent.name}, which is not here`);return{pops:t}}const Af=0,Rf=.3;class bw{constructor(){this.n=0,this.cap=0,this.grow(64)}grow(e){const t=(s,r)=>{const a=new Float64Array(e*r);return s&&a.set(s.subarray(0,this.n*r)),a};this.p=t(this.p,3),this.v=t(this.v,3),this.o=t(this.o,3),this.tint=t(this.tint,3),this.age=t(this.age,1),this.life=t(this.life,1),this.size=t(this.size,1),this.spin=t(this.spin,1),this.stuck=t(this.stuck,1);const n=new Uint32Array(e);this.seed&&n.set(this.seed.subarray(0,this.n)),this.seed=n,this.cap=e}add(){return this.n===this.cap&&this.grow(this.cap*2),this.n++}kill(e){const t=--this.n;if(e!==t){for(const[n,s]of[[this.p,3],[this.v,3],[this.o,3],[this.tint,3],[this.age,1],[this.life,1],[this.size,1],[this.spin,1],[this.stuck,1]])for(let r=0;r<s;r++)n[e*s+r]=n[t*s+r];this.seed[e]=this.seed[t]}}}const bs=(i,e)=>typeof i=="number"?(e[0]=e[1]=e[2]=i,e):i,Cf=Object.freeze([0,0,0]),ww=Object.freeze([1,1,1]);class Mw{constructor(e,{anchor:t=[0,0,0],mobile:n=!1,seed:s=1}={}){this.pops=e.pops.map(r=>({pop:r,pool:new bw,carry:0,burst:!1,children:[]}));for(const r of this.pops)r.pop.parent&&this.pops.find(a=>a.pop.name===r.pop.parent.name).children.push(r);this.anchor=[...t],this.from=[...t],this.time=0,this.emitting=!0,this.seed=ci(s>>>0),this.births=0,this.c=tw(),this.scratch=[0,0,0],this.c.mobile=n}moveTo(e,t,n){this.anchor[0]=e,this.anchor[1]=t,this.anchor[2]=n}stop(){this.emitting=!1;for(const e of this.pops)e.pop.n!=null&&!e.pop.life&&(e.pool.n=0)}get done(){return this.pops.some(e=>e.pool.n>0)?!1:!this.emitting||this.pops.every(e=>e.pop.parent||!e.pop.rate&&e.pop.n==null&&e.burst)}read(e,t){const n=this.c;n.seed=e.seed[t],n.age=e.age[t],n.life=e.life[t],n.t=Number.isFinite(n.life)&&n.life>0?n.age/n.life:0,n.size=e.size[t],n.spin=e.spin[t];for(let s=0;s<3;s++)n.p[s]=e.p[t*3+s],n.v[s]=e.v[t*3+s],n.offset[s]=e.o[t*3+s],n.tint[s]=e.tint[t*3+s];return n}born(e,t,n,s=null){const{pop:r,pool:a}=e,o=a.add(),c=this.c;a.seed[o]=ci((this.seed^Math.imul(++this.births,2654435761))>>>0),c.seed=a.seed[o],c.age=0,c.t=0,c.life=1/0;const l=r.on??r.at,f=l&&!s?bs(l.fn(c),this.scratch):Cf;for(let p=0;p<3;p++)c.offset[p]=f[p];for(let p=0;p<3;p++)a.o[o*3+p]=f[p],a.p[o*3+p]=s?s[p]:this.from[p]+(this.anchor[p]-this.from[p])*t+f[p];const h=r.v?bs(r.v.fn(c),this.scratch):Cf;for(let p=0;p<3;p++)a.v[o*3+p]=h[p];a.life[o]=r.life?Math.max(.001,r.life.fn(c)):1/0,a.size[o]=r.size?r.size.fn(c):.1,a.spin[o]=r.spin?r.spin.fn(c):0;const d=r.tint?bs(r.tint.fn(c),this.scratch):ww;for(let p=0;p<3;p++)a.tint[o*3+p]=d[p];a.stuck[o]=0,a.age[o]=0,this.step(e,o,(1-t)*n)}step(e,t,n){const{pop:s,pool:r}=e;if(r.age[t]+=n,r.age[t]>=r.life[t])return!1;if(r.stuck[t])return!0;if(s.acc){const c=bs(s.acc.fn(this.read(r,t)),this.scratch);for(let l=0;l<3;l++)r.v[t*3+l]+=c[l]*n}for(let c=0;c<3;c++)r.p[t*3+c]+=r.v[t*3+c]*n;const a=s.floor,o=t*3+1;if(a&&r.p[o]<Af){if(a.mode==="die")return!1;r.p[o]=Af,a.mode==="stick"?(r.v[t*3]=r.v[o]=r.v[t*3+2]=0,r.stuck[t]=1):r.v[o]<0&&(r.v[o]=-r.v[o]*a.k,r.v[t*3]*=.7,r.v[t*3+2]*=.7,r.v[o]<Rf&&(r.v[o]=0,r.stuck[t]=Math.hypot(r.v[t*3],r.v[t*3+2])<Rf?1:0))}return!0}update(e){this.time+=e,this.c.time=this.time;for(const t of this.pops){const{pop:n,pool:s}=t;for(let o=0;o<s.n;){if(this.step(t,o,e)){o++;continue}for(const c of t.children)ci((s.seed[o]^1540483477)>>>0)/4294967296<c.pop.parent.chance&&this.born(c,1,0,[s.p[o*3],s.p[o*3+1],s.p[o*3+2]]);s.kill(o)}if(!this.emitting)continue;const r=this.c;r.seed=this.seed,r.t=0,r.age=this.time;let a=0;if(n.burst&&!t.burst&&(t.burst=!0,a+=Math.max(0,Math.round(n.burst.fn(r)))),n.rate){t.carry+=Math.max(0,n.rate.fn(r))*e;const o=Math.floor(t.carry);t.carry-=o,a+=o}n.n!=null&&(a+=Math.max(0,n.n-s.n));for(let o=0;o<a;o++)this.born(t,(o+.5)/a,e)}this.from[0]=this.anchor[0],this.from[1]=this.anchor[1],this.from[2]=this.anchor[2]}draw(e,t,n=null){for(const s of this.pops){const{pop:r,pool:a}=s,o=r.r;for(let c=0;c<a.n;c++){if(n&&o.kind!=="light"&&!n(a.p[c*3],a.p[c*3+1],a.p[c*3+2],Math.max(a.size[c]*3,1)))continue;const l=this.read(a,c);if(l.glo=r.glo?r.glo.fn(l):1,o.kind==="light"){t&&t(o,l.p[0],l.p[1],l.p[2],bs(o.color?o.color.fn(l):1,this.scratch),o.intensity?o.intensity.fn(l):1,o.radius?o.radius.fn(l):5);continue}const f=r.sz?r.sz.fn(l):l.size,h=r.a?r.a.fn(l):1;if(!(f>0)||!(h>0))continue;const d=r.col?bs(r.col.fn(l),this.scratch):l.tint;e(o,l.p[0],l.p[1],l.p[2],l.v[0],l.v[1],l.v[2],f,r.rot?r.rot.fn(l):0,d,Math.min(h,1))}}}}const mn=128;function Sw(i,e,t){const n=Math.floor(i),s=Math.floor(e),r=i-n,a=e-s,o=r*r*(3-2*r),c=a*a*(3-2*a),l=(x,y)=>ci((Math.imul(n+x,668265261)^Math.imul(s+y,374761393)^t)>>>0)/4294967296,f=l(0,0),h=l(1,0),d=l(0,1),p=l(1,1);return f+(h-f)*o+(d-f)*c+(f-h-d+p)*o*c}function va(i,e,t){let n=0,s=.5,r=0;for(let a=0;a<4;a++)n+=s*Sw(i,e,t+a*101),r+=s,i*=2.03,e*=2.03,s*=.5;return n/r}const Ss=(i,e,t)=>{const n=Math.min(Math.max((t-i)/(e-i),0),1);return n*n*(3-2*n)},ic={"soft-disc":(i,e)=>{const t=i*i+e*e;return t>=1?0:(1-t)*(1-t)},"smoke-puff":(i,e)=>{const t=Math.atan2(e,i),n=Math.hypot(i,e),s=.97+.06*(va(Math.cos(t)*1.6+3,Math.sin(t)*1.6+3,7)-.5)*2;return Ss(s,s*.25,n)*(.78+.22*va(i*2.2+5,e*2.2+5,13))},"flame-wisp":(i,e)=>{const t=(e+1)/2,n=(va(t*2.5,1.7,29)-.5)*.5*t,s=.62*Math.pow(1-t,.55)*(.35+.65*Math.sin(Math.min(t*6,Math.PI/2))),r=Math.abs(i-n)/Math.max(s,.001),a=va(i*3+11,t*4-2,31);return Ss(1,.25,r)*Ss(1,.55,t+(a-.5)*.5)*Ss(0,.12,t)},ember:(i,e)=>{const t=i*i+e*e;return Math.min(1,Math.exp(-t/.035)+.35*Math.exp(-t/.25))},chip:(i,e)=>{const t=Math.atan2(e,i),n=Math.hypot(i,e),s=7,r=(t+Math.PI)/(2*Math.PI)*s,a=Math.floor(r),o=r-a,c=A=>.55+.4*(ci(A%s+41)/4294967296),l=a/s*2*Math.PI-Math.PI,f=(a+1)/s*2*Math.PI-Math.PI,h=[Math.cos(l)*c(a),Math.sin(l)*c(a)],d=[Math.cos(f)*c(a+1),Math.sin(f)*c(a+1)],p=d[0]-h[0],x=d[1]-h[1],y=Math.cos(t),_=Math.sin(t),g=y*x-_*p,R=g===0?c(a):(h[0]*x-h[1]*p)/g;return o>=0?Ss(R+1/mn,R-1/mn,n):0}};ic.stalk=(i,e)=>{const t=Math.abs(i);if(t>=.96)return 0;const n=.2*Math.sqrt(1-(t/.96)**2)*(.85+.15*Math.sin(i*9));return Ss(n+1/mn,n-1/mn,Math.abs(e))};const rl=new Map;function md(i){const e=ic[i]?i:"soft-disc";if(rl.has(e))return rl.get(e);const t=ic[e],n=new Uint8Array(mn*mn*4);for(let r=0;r<mn;r++)for(let a=0;a<mn;a++){const o=(a+.5)/mn*2-1,c=(r+.5)/mn*2-1,l=(r*mn+a)*4;n[l]=n[l+1]=n[l+2]=255,n[l+3]=Math.round(Math.min(Math.max(t(o,c),0),1)*255)}const s=new Wg(n,mn,mn,xn);return s.flipY=!1,s.generateMipmaps=!0,s.minFilter=Hn,s.magFilter=ln,s.needsUpdate=!0,rl.set(e,s),s}const gd=2048,Ew={alpha:wn,add:xr},Tw=`attribute vec2 iCenter; attribute vec2 iScale; attribute float iRot; attribute vec4 iColor;
varying vec2 vUv; varying vec4 vColor;
void main() {
  vUv = uv; vColor = iColor;
  vec2 p = position.xy * iScale; float c = cos(iRot), s = sin(iRot);
  p = vec2(c * p.x - s * p.y, s * p.x + c * p.y);
  gl_Position = projectionMatrix * viewMatrix * vec4(iCenter + p, 0.0, 1.0);
}`,Aw=`uniform sampler2D map; varying vec2 vUv; varying vec4 vColor;
void main() {
  float a = texture2D(map, vUv).a * vColor.a;
  if (a < 0.003) discard;
  gl_FragColor = vec4(vColor.rgb, a);
  #include <colorspace_fragment>
}`;class Rw{constructor(e,t,n,s){const r=new fi(1,1),a=new Qg;a.index=r.index,a.setAttribute("position",r.attributes.position),a.setAttribute("uv",r.attributes.uv);const o=l=>new qg(new Float32Array(gd*l),l).setUsage(mg);this.center=o(2),this.scale=o(2),this.rot=o(1),this.color=o(4),a.setAttribute("iCenter",this.center),a.setAttribute("iScale",this.scale),a.setAttribute("iRot",this.rot),a.setAttribute("iColor",this.color),a.instanceCount=0;const c=new kn({uniforms:{map:{value:md(t)}},vertexShader:Tw,fragmentShader:Aw,transparent:!0,depthTest:!1,depthWrite:!1,blending:Ew[n]??wn});this.mesh=new sn(a,c),this.mesh.frustumCulled=!1,this.mesh.renderOrder=s,this.mesh.visible=!1,e.add(this.mesh),this.n=0}}class Cw{constructor(e){this.scene=e,this.groups=new Map,this.dropped=0}group(e,t){const n=e.texture+"|"+e.blend+"|"+t;let s=this.groups.get(n);return s||this.groups.set(n,s=new Rw(this.scene,e.texture,e.blend,t*1e6+999e3)),s}prepare(e){e.kind!=="light"&&md(e.texture)}begin(){for(const e of this.groups.values())e.n=0}card(e,t,n,s,r,a,o,c,l,f,h,d){const p=this.group(t,e);if(p.n===gd){this.dropped++;return}let x=l,y=f;t.align==="velocity"&&(x=l+Math.hypot(a,o,c)*t.stretch,y=Math.atan2(o,a));const _=p.n++;p.center.array[_*2]=n,p.center.array[_*2+1]=s,p.scale.array[_*2]=x,p.scale.array[_*2+1]=l,p.rot.array[_]=y;const g=p.color.array;g[_*4]=h[0],g[_*4+1]=h[1],g[_*4+2]=h[2],g[_*4+3]=d}end(){for(const e of this.groups.values())if(e.mesh.visible=e.n>0,e.mesh.geometry.instanceCount=e.n,!!e.n)for(const t of[e.center,e.scale,e.rot,e.color])t.clearUpdateRanges(),t.addUpdateRange(0,e.n*t.itemSize),t.needsUpdate=!0}}const Pw=.1;class Lw{constructor(e,{mobile:t=!1,layers:n=[[-1/0,14]]}={}){this.renderer=new Cw(e),this.mobile=t,this.layers=[...n].sort((s,r)=>r[0]-s[0]),this.programs=new Map,this.attached=new Map,this.effects=[],this.warned=new Set,this.seed=1}layerOf(e){var t;for(const[n,s]of this.layers)if(e>=n)return s;return((t=this.layers[this.layers.length-1])==null?void 0:t[1])??14}warn(e){this.warned.has(e)||(this.warned.add(e),console.warn("[justa] "+e))}program(e){if(typeof e!="string"||!e.trim().startsWith("fx"))return this.warn(`fx: only program text plays here, not ${String(e).slice(0,40)}`),null;if(!this.programs.has(e))try{const t=xw(e);for(const n of t.pops)n.ignored.length&&this.warn(`fx: pop ${n.name} ignores ${n.ignored.join(", ")}`),this.renderer.prepare(n.r);this.programs.set(e,t)}catch(t){this.warn(t.message),this.programs.set(e,null)}return this.programs.get(e)}prepare(e){for(const t of e)this.program(t)}start(e,t){const n=new Mw(e,{anchor:t,mobile:this.mobile,seed:this.seed++});return n.layer=this.layerOf(t[2]),this.effects.push(n),n}oneShot(e={}){const t=this.program(e.script),n=e.position;!t||!n||(this.start(t,Array.isArray(n)?n:[n.x??0,n.y??0,n.z??0]).once=!0)}update(e,t){var a;const n=Math.min(Math.max(e,0),Pw),s=new Set;for(const o of t.entities.values()){const c=(a=o.fx)==null?void 0:a.script,l=this.attached.get(o.id);if(!c||o.visible===!1)continue;const f=t.worldPosition(o);if(s.add(o.id),(l==null?void 0:l.script)!==c){l==null||l.effect.stop();const h=this.program(c);if(!h){this.attached.delete(o.id);continue}this.attached.set(o.id,{script:c,effect:this.start(h,[f.x,f.y,f.z??0])})}else l.effect.moveTo(f.x,f.y,f.z??0)}for(const[o,c]of this.attached)s.has(o)||(c.effect.stop(),this.attached.delete(o));const r=this.renderer;r.begin(),this.effects=this.effects.filter(o=>{n>0&&o.update(n);const c=o.layer;return o.draw((l,f,h,d,p,x,y,_,g,R,A)=>r.card(c,l,f,h,d,p,x,y,_,g,R,A),null),!o.done}),r.end()}}const rt={live:!1,testRooms:["teste-justa"],admins:["pa_2e3191d32798f85073f61058545e6b9a","pa_f3710841bdaa8d039ecbc9e5ec447efc","pa_0116e39b6f79ca58333a506e44924da0"],epoch:0,levels:[0,217,614,1128,1736,2426,3189,4019,4910,5859,6862,7917,9021,10171,11367,12607,13888,15210,16572,17972,19409],passes:3,maxPasses:5,perPass:.8333,barSpeed:1.6,levelBonus:.01,setStep:.02,bossAcc:[.58,.6,.62,.64,.66,.68,.7,.72,.74,.76],startGrant:1e6,faucet:1e6,freeRuns:5,runPrice:5e3,holderRuns:{per:5,runs:2,capNfts:25,perOneOfOne:1},pass:{price:25e4,toPool:.8,dropMult:1.5,mintCap:20,freeRuns:10},mintPrice:2500,royalty:5,payoutShare:.4,drops:[{chance:.2,tiers:[2]},{chance:.18,tiers:[2,3]},{chance:.16,tiers:[3]},{chance:.14,tiers:[3,4]},{chance:.12,tiers:[4]},{chance:.1,tiers:[4,5]},{chance:.09,tiers:[5]},{chance:.08,tiers:[5,6]},{chance:.07,tiers:[6]},{chance:.06,tiers:[6,7]}],forgePoints:[0,1,2,4,8,16,32,64,128,256],ranked:{start:1e3,kNew:32,kOld:16,newGames:20,defenderShare:.5,attacksPerDay:5,ghosts:5},bots:[{id:"bot:rookie",name:"Rookie Bot",elo:880,tier:1,level:0,q:.3},{id:"bot:squire",name:"Squire Bot",elo:900,tier:2,level:2,q:.35},{id:"bot:stable",name:"Stable Bot",elo:920,tier:1,level:0,q:.4},{id:"bot:farmhand",name:"Farmhand Bot",elo:960,tier:1,level:1,q:.5},{id:"bot:herald",name:"Herald Bot",elo:990,tier:1,level:1,q:.6},{id:"bot:page",name:"Page Bot",elo:1e3,tier:3,level:5,q:.5},{id:"bot:groom",name:"Groom Bot",elo:1010,tier:2,level:2,q:.55},{id:"bot:archer",name:"Archer Bot",elo:1040,tier:2,level:3,q:.65},{id:"bot:knight",name:"Knight Bot",elo:1100,tier:5,level:9,q:.65},{id:"bot:champion",name:"Champion Bot",elo:1250,tier:8,level:15,q:.8}],gamba:{payout:2,passes:3,barPerPass:.01,maxBet:1e5,lbMinBets:20,riders:[{id:"free",name:"Free rider",cap:.46},{id:"ronke",name:"Ronke",cap:.47,needs:"ronkeverse"},{id:"colored",name:"Colored Ronke",cap:.48,daily:3,needs:"colored"},{id:"one",name:"1/1",cap:.5,daily:3,needs:"oneOfOne"}],bodies:[{id:"one",name:"1/1",n:159,rider:"one"},{id:"zombie",name:"Zombie Body",n:28,rider:"colored"},{id:"gold",name:"Gold Ronke",n:48,rider:"colored"},{id:"orange",name:"Orange Noise",n:82,rider:"colored"},{id:"pink",name:"Pink Noise",n:97,rider:"colored"},{id:"green",name:"Green Noise",n:112,rider:"colored"},{id:"redpurple",name:"Gradient Red Purple",n:185,rider:"colored"},{id:"blueviolet",name:"Gradient Blue Violet",n:191,rider:"colored"},{id:"nerd",name:"Nerd Ronke",n:1832,rider:"ronke"},{id:"tattoo",name:"The Ronke Tattoo",n:1936,rider:"ronke"},{id:"ronke",name:"Ronke",n:2345,rider:"ronke"},{id:"none",name:"No Ronke",n:0,rider:"free"}]}};function Iw(i){if(rt.live)return!0;var e="";try{e=i&&i.getRoomId&&i.getRoomId()||""}catch{}return rt.testRooms.indexOf(e)>=0}function _d(i){return rt.admins.indexOf(i)>=0}function vd(i){return!rt.live||_d(i)}function ji(i){return Math.floor(i/864e5)}function Dw(i){for(var e=0,t=1;t<rt.levels.length;t++)(i||0)>=rt.levels[t]&&(e=t);return e}function Ow(i){return rt.levels[Math.max(0,Math.min(rt.levels.length-1,i||0))]}function Nw(i){var e=rt.levels[(i||0)+1];return e??null}function kw(i){return 2*i-2}function Uw(i){return Math.max(0,(i||1)-1)*rt.setStep}function Fw(i){return Math.max(0,i||0)*rt.levelBonus}function Bw(i){return rt.bossAcc[Math.max(0,Math.min(rt.bossAcc.length-1,i))]}function yd(i){return 2*i}function zw(i,e){return yd(i)<=(e||0)}function Hw(i,e){return Math.max(0,Math.min(e-1,Math.floor((i||0)/2)))}function Gw(i,e,t){return Math.max(e,i*Math.pow(rt.perPass,(t||1)-1))}function xd(i,e){var t=rt.holderRuns,n=Math.min(Math.max(0,i&&i.ronkeverse||0),t.capNfts);return(e?rt.pass.freeRuns:rt.freeRuns)+Math.floor(n/t.per)*t.runs+Math.max(0,i&&i.oneOfOne||0)*t.perOneOfOne}function Vw(i,e,t,n){var s=i&&i.day===ji(t)&&i.used||0;return Math.max(0,xd(e,n)-s)}function Ww(i,e){var t=ji(e);return{day:t,used:(i&&i.day===t&&i.used||0)+1}}function qw(i,e,t,n){var s=rt.drops[Math.max(0,Math.min(rt.drops.length-1,i))];return t>=s.chance*(e?rt.pass.dropMult:1)?0:s.tiers.length>1&&n>=.7?s.tiers[1]:s.tiers[0]}function jw(i,e){var t=rt.drops[Math.max(0,Math.min(rt.drops.length-1,i))];return Math.min(1,t.chance*(e?rt.pass.dropMult:1))}function Xw(i){return rt.forgePoints[(i||1)-1]||0}function $w(i,e,t,n){var s=rt.ranked,r=(n||0)<s.newGames?s.kNew:s.kOld,a=1/(1+Math.pow(10,((e||s.start)-(i||s.start))/400)),o=Math.round(r*((typeof t=="number"?t:t?1:0)-a));return{me:o,them:-Math.round(o*s.defenderShare)}}function Kw(i,e){var t=Math.max(i.length?1:0,Math.floor(i.length*rt.payoutShare)),n=0,s=[],r;for(r=0;r<t;r++)n+=1/(r+1);for(r=0;r<t;r++)s.push({user_id:i[r].user_id,name:i[r].name,rank:r+1,amount:Math.floor(e*(1/(r+1))/n)});return s}function Yw(i){return[i-.05,i+.06,i,i+.1,i-.08].map(function(e){return Math.round(Math.max(0,Math.min(1,e))*100)/100})}function lo(i){return rt.gamba.riders.find(function(e){return e.id===i})||rt.gamba.riders[0]}function bd(){return rt.gamba.passes*rt.gamba.barPerPass}function wd(i){return lo(i).cap-bd()}function Md(i){var e=0;return(i||[]).slice(0,rt.gamba.passes).forEach(function(t){e+=Math.max(0,Math.min(1,+t||0))*rt.gamba.barPerPass}),e}function Jw(i,e){return Math.min(lo(i).cap,wd(i)+Md(e))}function Zw(i){return 1-lo(i).cap*rt.gamba.payout}function Sd(i){return rt.gamba.bodies.find(function(e){return e.id===i})||null}function zc(i){var e=i||{},t=Sd(e.rarest);return t?t.rider:(e.oneOfOne||0)>0?"one":(e.colored||0)>0?"colored":(e.ronkeverse||0)>0?"ronke":"free"}function Qw(i,e){var t=zc(e);return i==="free"||i===t||i==="ronke"&&t!=="free"}function eM(i,e){return rt.gamba.maxBet}function Ed(i){return i=Math.round(i||0),(i<0?"-":"")+String(Math.abs(i)).replace(/\B(?=(\d{3})+(?!\d))/g,",")}const Hc=Object.freeze(Object.defineProperty({__proto__:null,barPeriod:Gw,bossAcc:Bw,bossLevel:yd,bossOpen:zw,botQs:Yw,dayOf:ji,dropChance:jw,dropFor:qw,econOn:Iw,eloDelta:$w,fmt:Ed,forgeValue:Xw,gambaBarMax:bd,gambaBase:wd,gambaBody:Sd,gambaBonus:Md,gambaChance:Jw,gambaEdge:Zw,gambaMaxBet:eM,gambaOwns:Qw,gambaRider:lo,gambaTop:zc,isAdmin:_d,levelBonus:Fw,levelFor:Dw,levelXp:Ow,nextLevelXp:Nw,payouts:Kw,runsLeft:Vw,runsPerDay:xd,setBonus:Uw,spendRun:Ww,testTools:vd,topBoss:Hw,unlockLevel:kw},Symbol.toStringTag,{value:"Module"})),sc=.43,Td=.49,tM=.01,rc=5,nM=12345,iM=(i=nM,e="")=>`I'm jousting for $HORSKE in HORSKingdom

${i==null?"":`🏆 Jackpot: $${Ed(i)}
`}${e?`🔖 ${e}
`:""}⚔️ Fight the house:`,Pf={url:"https://horskeverse.vercel.app",via:"HorskeOnRonke"},xM=(i,e="")=>`https://x.com/intent/post?text=${encodeURIComponent(iM(i,e))}&url=${encodeURIComponent(Pf.url)}&via=${encodeURIComponent(Pf.via)}`,Va=[{id:0,name:"None",bonus:0},{id:4,name:"Top 500",rank:500,bonus:.005},{id:3,name:"Top 200",rank:200,bonus:.01},{id:2,name:"Top 100",rank:100,bonus:.015},{id:1,name:"Top 69",rank:69,bonus:.02}],al=[{id:"checkin",name:"Check in",text:"Once a day. A new day starts at 00:00 UTC."},{id:"xpost",name:"Post on X",text:"Once a day: tell X about the joust. It counts when X opens."},{id:"lock",name:"Lock HORSKE",text:"Lock 100,000 HORSKE for 90 days. The bonus holds while it stays locked.",test:!0},{id:"weekly",name:"Buy HORSKE this week",text:"Buy 10,000 HORSKE every week.",test:!0},{id:"bouts",name:`Bet ${rc} times`,text:`Bet ${rc} times in Fight the house in a day. The bonus is for the next day.`},{id:"ronke",name:"Hold a Ronke",text:"Any Ronkeverse NFT.",test:!0}],Gc="justa-web:quests",Ia=i=>Math.round(i*1e4)/1e4,sM=()=>rt.gamba.passes*rt.gamba.barPerPass,Ad=i=>({user:i,checkin:null,xpost:null,lock:!1,weekly:!1,tier:0});function rM(i,e){let t;try{t=(e??globalThis.localStorage).getItem(Gc)}catch{return null}try{const n=JSON.parse(t??"null");if(n&&n.user===i)return{user:i,checkin:n.checkin??null,xpost:n.xpost??null,lock:!!n.lock,weekly:!!n.weekly,tier:Va.some(s=>s.id===n.tier)?n.tier:0}}catch{}return Ad(i)}function aM(i,e){try{(e??globalThis.localStorage).setItem(Gc,JSON.stringify(i))}catch{}}function oM(i,e,t,n,s=!0){const r=t&&t.day===n?t:t&&t.day===n-1?{day:n,today:0,yesterday:t.today}:{day:n,today:0,yesterday:0},a={checkin:i.checkin===n,xpost:i.xpost===n,lock:!!i.lock,weekly:!!i.weekly,bouts:r.yesterday>=rc,ronke:zc(e||{})!=="free"};if(!s)for(const h of al)h.test&&(a[h.id]=!1);const o=al.filter(h=>a[h.id]).length,c=s&&Va.find(h=>h.id===i.tier)||Va[0],l=Math.round(tM*1e4*o/al.length)/1e4,f=Ia(l+c.bonus);return{day:n,on:a,n:o,tier:c,quests:l,score:c.bonus,bonus:f,bouts:r,lo:Ia(sc+f),hi:Math.min(Td,Ia(sc+sM()+f))}}function Lf(i,e){const t=i.gamba,n=Math.min(Td,Ia(sc+t.passes*t.barPerPass+(e||0)));for(const s of t.riders)s.cap=n,delete s.daily;return n}async function lM({db:i,userId:e,fake:t,tools:n=()=>vd(e),storage:s,now:r=()=>Date.now(),season:a=rt,every:o=3e3}){var A;Lf(a,0);const c=i.sqlFor(e),l=()=>rM(e,s);let f=l()??Ad(e),h=null,d=0,p=!0;async function x(){const b=ji(r()),L=await c`SELECT day, COUNT(*) AS n FROM bets WHERE user_id = @caller AND status <> 'open' AND day BETWEEN ${b-1} AND ${b} GROUP BY day`,I=Object.fromEntries(L.rows.map(C=>[C.day,C.n]));h={day:b,today:I[b]||0,yesterday:I[b-1]||0}}function y(){const b=oM(f,t(),h,ji(r()),!!n()),L=p?b.bonus:0;return L!==d&&(Lf(a,L),d=L),b}async function _(){return f=l()??f,await x(),y()}const g=b=>(f={...l()??f},b(f),aM(f,s),y());try{await _()}catch{y()}const R=setInterval(()=>{_().catch(()=>{})},o);return(A=globalThis.addEventListener)==null||A.call(globalThis,"storage",b=>{b.key===Gc&&(f=l()??f,y())}),{view:y,refresh:_,useBonus(b){return p=!!b,y()},stop:()=>clearInterval(R),checkIn:()=>g(b=>{b.checkin=ji(r())}),posted:()=>g(b=>{b.xpost=ji(r())}),setTest:(b,L)=>g(I=>{b==="tier"?I.tier=Va.some(C=>C.id===+L)?+L:0:(b==="lock"||b==="weekly")&&(I[b]=!!L)})}}const cM=`// The joust, run on the player's own machine: the player's body is their rider, an AI knight rides the far lane.
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
`,uM=`/* The web version's HUD layer over the world's scripts/ui.js (which stays as Spawn has it).\r
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
`,ws=Object.assign({"/world/scripts/arrival.js":()=>Ie(()=>import("./arrival-B096b78W.js"),__vite__mapDeps([0,1,2])),"/world/scripts/bank.js":()=>Ie(()=>import("./bank-Clesp9nZ.js"),__vite__mapDeps([1,2])),"/world/scripts/camera.js":()=>Ie(()=>import("./camera-CFdr3yOD.js"),[]),"/world/scripts/db.js":()=>Ie(()=>import("./db-CYyGlf11.js"),__vite__mapDeps([3,2])),"/world/scripts/ground.js":()=>Ie(()=>import("./ground-b0nUTt3G.js"),[]),"/world/scripts/joust-camera.js":()=>Ie(()=>import("./joust-camera-Fg9LmHPp.js"),[]),"/world/scripts/jouster.js":()=>Ie(()=>import("./jouster-Dt9SqpYW.js"),__vite__mapDeps([4,5,1,2,6])),"/world/scripts/lib/color.js":()=>Ie(()=>import("./color-DDSg_o2D.js"),[]),"/world/scripts/lib/econ.js":()=>Ie(()=>Promise.resolve().then(()=>Hc),void 0),"/world/scripts/look-default.js":()=>Ie(()=>import("./look-default-BibdNaYP.js"),[]),"/world/scripts/player.js":()=>Ie(()=>import("./player-CqzJShkt.js"),__vite__mapDeps([7,8,9,10])),"/world/scripts/tex-hero.js":()=>Ie(()=>import("./tex-hero-D9FSdSdV.js"),__vite__mapDeps([9,8,10])),"/world/scripts/tex-lance.js":()=>Ie(()=>import("./tex-lance-h9_Q8DQT.js"),[]),"/world/scripts/tex-meadow.js":()=>Ie(()=>import("./tex-meadow-CQRPL3Pn.js"),__vite__mapDeps([11,8,10])),"/world/scripts/tex-sky.js":()=>Ie(()=>import("./tex-sky-H7hQEGu6.js"),__vite__mapDeps([12,8,10])),"/world/scripts/tex-soil.js":()=>Ie(()=>import("./tex-soil-6tL0S4Gb.js"),__vite__mapDeps([13,8,10])),"/world/scripts/tex-tilt.js":()=>Ie(()=>import("./tex-tilt-DATa2CU9.js"),[]),"/world/scripts/tileset-ground.js":()=>Ie(()=>import("./tileset-ground-dAb9Cutk.js"),__vite__mapDeps([14,8])),"/world/scripts/tileset-sand.js":()=>Ie(()=>import("./tileset-sand-D3oqsxai.js"),[]),"/world/scripts/ui.js":()=>Ie(()=>import("./ui-CFGmGYL3.js"),__vite__mapDeps([15,5,2]))}),Ot=new URLSearchParams(location.search),fM=new Set(["rivals","ranked","gamba","armory","forge","market","season"]),hM="teste-justa",In=Ot.has("modal"),If={fight:"rivals",rankedFind:"ranked",gambaBet:"bet"},ac="justa-web:";function dM(i){if(i&&/^\/(?![/\\])/.test(i))try{const e=new URL(i,location.origin);if(e.origin===location.origin)return e.pathname+e.search+e.hash}catch{}return"/realm/?back=1"}function gr(i,e){try{if(e===void 0)return JSON.parse(localStorage.getItem(ac+i)??"null");localStorage.setItem(ac+i,JSON.stringify(e))}catch{return null}return e}function pM(){let i=gr("user");return(!i||Ot.has("fresh"))&&(i="web_"+Array.from(crypto.getRandomValues(new Uint8Array(8)),e=>e.toString(16).padStart(2,"0")).join(""),gr("user",i),gr("state",{})),i}function mM(i=40){return new Promise(e=>{const t=[];let n=0;const s=r=>{n&&t.push(r-n),n=r,t.length<i?requestAnimationFrame(s):e(t.sort((a,o)=>a-o)[Math.floor(i/10)])};requestAnimationFrame(s)})}async function gM(){var We,nt,ee,fe,Ae,me,Ue,ze,Ze;const i=dM(Ot.get("village"));if(!In&&Ot.get("door")!=="bet"){location.replace(i);return}const e=mM(),t=await Tm(Ot.get("place")??void 0,{web:!0}),n=new Set((Ot.get("hide")??"").split(",").filter(Boolean));t.placements=t.placements.filter(J=>!n.has(J.id));const s=t.place.atmosphere??{},r=document.getElementById("stage"),a=(We=s.look)!=null&&We.script?await ws["/world/"+s.look.script]():null,o=document.getElementById("view"),c=Number(Ot.get("scale")),l=new Rb(o,{toneMapping:((nt=s.look)==null?void 0:nt.toneMapping)??"neutral",look:fb(a,(ee=s.look)==null?void 0:ee.params),scale:c>0?c:null});((fe=t.render)==null?void 0:fe.placeSky)!==!1&&l.setSky(s.sky),e.then(J=>{J>0&&(l.refresh=Math.max(4,Math.min(l.refresh??J,J)))});const f=()=>l.resize(r.clientWidth,r.clientHeight);f(),addEventListener("resize",f);const h=In?[]:t.placements.filter(J=>{var ve;return(ve=J.sprite)==null?void 0:ve.texture});await Promise.all(h.map((J,ve)=>l.addSprite(J,ve)));const d=t.place.terrain;!In&&(d==null?void 0:d.kind)==="tilemap"&&d.draw!==!1&&!Ot.has("notiles")&&await l.setTiles(d,await ws["/world/"+d.generator]());const p=await ew();ws["/world/scripts/db.js"]&&await p.migrate((await ws["/world/scripts/db.js"]()).migrate);const x=pM(),y=gr("state")??{};let _=()=>y.fake;const g=await lM({db:p,userId:x,fake:()=>_()}),R=new Fb({roomId:hM,scripts:ws,gravity:t.place.gravity,groundY:0,sql:J=>p.sqlFor(J)});R.worldToScreen=J=>l.worldToScreen(J);const A=await wc(t.config.player),b=R.spawn("player/"+x,{...A,state:{...A.state??{},...y},userId:x,displayName:gr("name")??"Knight",isLocal:!0}),L=R.entities.get(b);_=()=>L.state.fake;const I=new Gb(t.config.inputs);In||I.bind(o),R.inputs.set(b,()=>I.frame());for(const J of((Ae=t.config.engine)==null?void 0:Ae.behaviors)??[]){const ve=await R.loadModule(J);await R.call(L,ve,"onArrive",qi(L))}const C=In?null:new jb(t.sounds);if(R.sinks.playSound=J=>C==null?void 0:C.play(J),C)for(const J of t.placements)(me=J.audio)!=null&&me.clip&&C.loop(J.audio);const D=document.getElementById("flash");R.sinks.screenFlash=J=>{D.style.transition="none",D.style.background=(J==null?void 0:J.color)??"#fff",D.style.opacity=String((J==null?void 0:J.intensity)??.4),requestAnimationFrame(()=>{D.style.transition=`opacity ${((J==null?void 0:J.duration)??.2)*1e3}ms ease-out`,D.style.opacity="0"})};let S={until:0,amp:0};R.sinks.screenShake=J=>{S={until:performance.now()+((J==null?void 0:J.duration)??.3)*1e3,amp:((J==null?void 0:J.intensity)??.3)*.25}};const w=await Ob(t.config,qi(L),{screenAspect:Ot.get("aspect")==="real"}),N=await ws["/world/"+(((Ue=t.config.ui)==null?void 0:Ue.render)??"scripts/ui.js")](),F=new qb({ui:N,room:R,player:L,input:I,toScreen:J=>l.worldToScreen(J)}),B=new Hb(l,R,{hideBelow:((ze=t.render)==null?void 0:ze.hideBelowLayer)??null}),$=In||Ot.has("nofx")?null:new Lw(l.scene,{mobile:matchMedia("(pointer: coarse)").matches,layers:(Ze=t.render)==null?void 0:Ze.fxLayers});$&&(R.sinks.fx=J=>$.oneShot(J),$.prepare([...cM.matchAll(/`(fx\r?\n[\s\S]*?)`/g)].map(J=>J[1])));let re=R.elapsed;{document.head.insertAdjacentHTML("beforeend",`<style id="web-hud">${uM}</style>`),Ot.has("meter")&&document.documentElement.classList.add("meter"),document.documentElement.classList.add("hud-wood");const J=window.econTab,ve=Ot.get("door")==="bet";if(ve&&document.documentElement.classList.add("only-bet"),typeof J=="function"){const at=()=>In?parent.postMessage({type:"justa-close"},location.origin):location.assign(i);window.econTab=O=>O==="home"?at():ve&&O!=="gamba"?void 0:J(O),J(ve?"gamba":fM.has(Ot.get("door"))?Ot.get("door"):"rivals"),ve&&typeof window.gambaTab=="function"&&window.gambaTab("bet"),Ot.get("door")==="gamba"&&["bet","stats","lb"].includes(Ot.get("sub"))&&typeof window.gambaTab=="function"&&window.gambaTab(Ot.get("sub"))}if(ve&&!In){const{startBet:at}=await Ie(async()=>{const{startBet:O}=await import("./bet-Bj_4ab-1.js");return{startBet:O}},__vite__mapDeps([16,2,6,17,18]));at({room:R,player:L,village:i,quests:g})}if(In){globalThis.__gambaNoChainSettle=!0,document.documentElement.classList.add("modal");const{startModal:at}=await Ie(async()=>{const{startModal:Re}=await import("./modal-CzoVoBVK.js");return{startModal:Re}},__vite__mapDeps([19,2,5,17,6])),O=()=>parent.postMessage({type:"justa-close"},location.origin),Rt=at({room:R,player:L,quests:g,door:Ot.get("door"),place:Ot.get("building"),onClose:O});addEventListener("message",Re=>{const Pe=Re.data;Re.origin!==location.origin||(Pe==null?void 0:Pe.type)!=="justa-door"||Rt.open(Pe.door,Pe.place)});const Ye=window.sendAction;window.sendAction=(Re,...Pe)=>If[Re]?top.location.assign(`/realm/play/?door=${If[Re]}`):Ye(Re,...Pe),addEventListener("pageshow",Re=>{Re.persisted&&location.reload()})}}let Q="";const ce=()=>{const J=JSON.stringify(L.state);if(J!==Q){Q=J;try{localStorage.setItem(ac+"state",J)}catch{}}};setInterval(ce,2e3),addEventListener("pagehide",ce);const Y=Ot.has("prof")?{n:0,room:0,rig:0,views:0,stage:0,hud:0,frame:0}:null,de=(J,ve)=>{const at=performance.now();return Y&&(Y[J]+=at-ve),at};let Me=performance.now();function Ee(J){const ve=Math.max(0,(J-Me)/1e3),at=Math.min(.1,ve);Me=J;let O=performance.now();const Rt=O;if(R.advance(ve),O=de("room",O),In){requestAnimationFrame(Ee);return}l.govern(J-(Ee.prev??J)),Ee.prev=J;const Ye=w.update(at,R.nowMs,l.aspect);J<S.until&&(Ye.x+=(Math.random()-.5)*S.amp,Ye.y+=(Math.random()-.5)*S.amp),O=de("rig",O),B.sync(),$&&($.update((R.elapsed-re)/1e3,R),re=R.elapsed),O=de("views",O),l.frame(Ye,at),O=de("stage",O),F.frame(J),O=de("hud",O),Y&&(Y.frame+=O-Rt,Y.n++),requestAnimationFrame(Ee)}Y&&(window.__prof=Y),requestAnimationFrame(Ee),window.__justa={world:t,stage:l,rig:w,room:R,player:L,hud:F,db:p,input:I,audio:C,quests:g},document.documentElement.classList.add("justa-ready"),In&&parent.postMessage({type:"justa-ready"},location.origin)}gM().catch(i=>{console.error(i),document.getElementById("fault").textContent=String((i==null?void 0:i.stack)??i)});export{eM as A,Xw as B,Kw as C,Nw as D,Ow as E,xd as F,jw as G,wd as H,oo as I,sc as J,xM as K,rc as L,Td as M,tM as N,al as Q,rt as S,Va as T,Md as a,Yw as b,Fw as c,ji as d,Iw as e,Bw as f,bd as g,yd as h,_d as i,zw as j,qw as k,Dw as l,$w as m,Gw as n,Hw as o,Jw as p,Ww as q,Vw as r,Uw as s,vd as t,kw as u,Ed as v,Sd as w,lo as x,zc as y,Qw as z};
